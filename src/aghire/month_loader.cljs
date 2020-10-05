(ns aghire.month-loader
  (:require [clojure.walk :as walk]
            [cljs.pprint :as pp]
            [aghire.db :as db]
            [aghire.job-parse :as parse]
            [reagent.core :as r]
            [aghire.utility :refer [app-cursor] :as utl]))

(defn gMonthlies-cljs
  "The gMonthlies table of contents is defined in index.html for extensibility,
  then translated here to CLJS-ese, except hnId: remains camel-case :hnId."
  []
  (walk/keywordize-keys (js->clj js/gMonthlies)))

(defn get-monthly-def
  "Retrieve month info based on HN message Id"
  [hn-id]
  (some (fn [month]
          (when (= (:hnId month) hn-id)
            month))
    (gMonthlies-cljs)))

(def public-res "/scrapes/~a/~a.html")

(defn month-page-urls
  "Compute a vector of string URLs to be scraped, given month info
  hard-coded in index.html. Look for a script tag defining gMonthlies."
  [month-hn-id]

  (when month-hn-id
    (if-let [mo-def (get-monthly-def month-hn-id)]          ;; hard-coded table in index.html
      (map (fn [pg-offset]
             ;; files are numbered off-by-one to match the page param on HN
             (pp/cl-format nil public-res month-hn-id (inc pg-offset)))
        (range (:pgCount mo-def)))
      (throw (js/Exception. (str "msg id " month-hn-id " not defined in gMonthlies table."))))))

;;; -------------------------------------------------

(defn unprocessed-month
  "This is the starting point of the state we will use to track a multi-page
  month load across two phases. Me start with this map and
  then assoc/update away at it for the life of the load.

  This, btw, is what we fell back on after internalizing that
  subscriptions are meant only for views and other subscriptions.

  What we will do during :cull-athings is 'consume' the list
  of page URLS like a work queue. That could easily be implemented
  instead by having a 'current-page-url-index' climbing from zero."
  [month-hn-id]

  (let [urls (month-page-urls month-hn-id)]
    {:month-hn-id         month-hn-id
     :phase               :cull-athings                     ;; ... :parse-jobs, :fini
     :page-url-count      (count urls)
     :page-urls-remaining urls
     :jobs-seen           #{}
     :athings             []
     :athing-parse-count  0
     :jobs                []}))

(def month-load (app-cursor [:month-load]))

(def month-id (r/cursor month-load [:month-hn-id]))
(def month-phase (r/cursor month-load [:phase]))
(def month-jobs (r/cursor month-load [:jobs]))
(defn month-load-fini []
  (= :fini @month-phase))

(defn month-progress-compute []
  (let [{:keys [phase page-url-count page-urls-remaining athings athing-parse-ct jobs]} (:month-load @db/app)]
    (into [(or phase :inactive)]
      (case phase
        :cull-athings [page-url-count (- page-url-count (count page-urls-remaining))]
        :parse-jobs [(count athings) athing-parse-ct]
        :fini [1 1]                                         ;; disappears anyway
        :inactive [0 0]
        ;; we turn off the load of  month at start-up, there will be no phase
        [0 0]))))

(def month-progress (r/track month-progress-compute))

(defn month-load-initialize [month-hn-id]
  (reset! month-load
    (unprocessed-month
      month-hn-id)))

(defn app-month-startup []
  (month-load-initialize
    (:hnId (nth (gMonthlies-cljs)
             js/initialSearchMoIdx))))

(declare mk-page-loader job-page-athings)

(defn job-listing-loader
  "This is a key player in loading a month. It spawns one
  child loader whenever there is a URL to be scraped. We
  then grab candidate nodes (class 'aThing') for later
  processing.

  Sadly, iframes offer no way to tell if the URL does not
  load, so this app hangs if a month is configured for more
  files than are in resources/public/scrapes/<month>. Only
  fix is a timeout that would abort after N seconds.

  Left as an exercise."
  []
  (fn []
    [:div {:style {:display "none"}}
     (let [task @month-load]
       (when (seq (:page-urls-remaining task))
         [mk-page-loader task]))]))

;;; --- getting aThings from pages ------------------------------------

;;; --- dev-time limits -----------------------------
;;; n.b.: these will be limits *per page*

(def ATHING-PARSE-MAX 1000)

(defn job-page-athings
  "Pretty simple. All messages are dom nodes with class aThing. Grab those
  and later we will check the opening text vertical bars | to identify jobs.
  Counting vertical bars to identify a job? Don't judge me."
  [ifr-dom]

  (when-let [cont-doc (.-contentDocument ifr-dom)]
    (let [hn-body (aget (.getElementsByTagName cont-doc "body") 0)]
      (let [a-things (take ATHING-PARSE-MAX (prim-seq (.querySelectorAll hn-body ".athing")))]
        (set! (.-innerHTML hn-body) "")                     ;; free up memory
        a-things))))

(defn mk-page-loader []
  (fn [task]
    (when-let [pg-1 (first (:page-urls-remaining task))]
      [:iframe {:src     pg-1
                :on-load #(let [rem-pages (rest (:page-urls-remaining task))]
                            (reset! month-load
                              (merge task {
                                           :athings             (into (:athings task)
                                                                  (job-page-athings (.-target %)))
                                           :page-urls-remaining rem-pages
                                           :phase               (if (empty? rem-pages)
                                                                  :parse-jobs
                                                                  (:phase task))})))}])))

(def ATHING_CHUNK_SZ 20)                                    ;; bigger chunks zoom due, so use small value to see progress bar working

(defn cull-jobs-from-athings []
  (let [{:keys [phase athings athing-parse-ct jobs jobs-seen] :as task} @month-load]
    (when (= :parse-jobs phase)
      (let [chunk (take ATHING_CHUNK_SZ athings)
            rem-athings (nthrest athings ATHING_CHUNK_SZ)]
        (if (seq chunk)
          (let [new-jobs (filter #(:OK %) (map #(parse/job-parse % jobs-seen) chunk))]
            (js/setTimeout
              #(reset! month-load
                 (merge task {
                              :jobs            (into jobs new-jobs)
                              :jobs-seen       (when (seq rem-athings)
                                                 (clojure.set/union jobs-seen (into #{} (map :hn-id new-jobs))))
                              :athings         rem-athings
                              :athing-parse-ct (+ athing-parse-ct (count chunk))
                              :phase           (if (empty? rem-athings)
                                                 :fini
                                                 phase)}))
              0))
          (swap! month-load update :phase :fini))))))

(defonce athings-to-jobs (r/track! cull-jobs-from-athings))
