(ns aghire.memo
  (:require
    [cljs.reader :as reader]
    [goog.string :as gs]
    [reagent.core :as rgt]
    [aghire.utility :refer [<app-cursor app-cursor target-val] :as utl]
    [aghire.db :as db]
    [reagent.core :as r]))

;;; --- utilities / persistence -------------------------

(defn memo-ensure [job-id]
  (when-not (contains? (:job-memos @db/app) job-id)
    (swap! db/job-memos assoc job-id {:hn-id        job-id
                                      :stars        0
                                      :notes        ""
                                      :note-editing false})))

(defn <memo-cursor [job prop]
  (<app-cursor [:job-memos (:hn-id job) prop]))

(defn memo-persist
  [job-id]

  (let [memo (get-in @db/app [:job-memos job-id])
        nkey (str db/ls-key "-memo-" job-id)]
    (.setItem js/localStorage nkey (str memo))))

(defn memo-prop-toggle [{:keys [hn-id]} prop]
  (memo-ensure hn-id)
  (swap! (app-cursor [:job-memos hn-id prop]) not)
  (memo-persist hn-id))

(defn memo-prop-set [{:keys [hn-id]} prop value]
  (memo-ensure hn-id)
  (reset! (app-cursor [:job-memos hn-id prop]) value)
  (memo-persist hn-id))

;;; --- app init ---------------------------------------

(defn job-memos-load []
  (swap! db/app assoc :job-memos
    (utl/ls-get-wild (str db/ls-key "-memo-"))))

;;; --- the memo interface -------------------------------
(declare job-stars applied note-toggle exclude-job note-editor)
;;; a control bar for annotating individual jobs

(defn job-memo-control-bar []
  (fn [job]
    (let [note-editing? (r/atom false)]
      [:div {:style {:display        "flex"
                     :flex-direction "column"}}
       [:div.userAnnotations
        [job-stars job]
        [applied job]
        [note-toggle job note-editing?]
        [exclude-job job]]
       [note-editor job note-editing?]])))

;;; individual controls follow......

;;; --- exclude ---------------------------------------

(defn exclude-job []
  (fn [job]
    (let [excluded? (<memo-cursor job :excluded)]
      [:span {:style    {:color       (if excluded? "red" "black")
                         :font-size   "1em"
                         :font-weight (if excluded? "bolder" "lighter")
                         :margin      "4px 4px 8px 0"}
              :on-click #(memo-prop-toggle job :excluded)}
       (utl/unesc "&#x20E0;")])))

;;; --- stars ------------------------------------------

(def MAX-STARS 3)

(defn job-stars []
  (fn [job]
    (into [:div {:style utl/hz-flex-wrap-bottom}]
      (let [j-stars (<memo-cursor job :stars)]
        ;; note that when a job has two stars, j-stars is two and the highlighted stars run to index=1
        (for [sn (range MAX-STARS)]
          [:span {:style    {:cursor "pointer"
                             :color  (if (>= j-stars (inc sn)) "red" "gray")}
                  :on-click #(memo-prop-set job :stars
                               (if (= sn (dec j-stars))     ;; comp against dec is off-by-one adj
                                 ;; ie, if you click my maxth star you mean clear
                                 0 (inc sn)))}
           (utl/unesc "&#x2605;")])))))

;;; --- applied -----------------------------------

(defn applied [job]
  (fn [job]
    (let [input-id (str "applied?" (:hn-id job))]
      [:div {:style utl/hz-flex-wrap-centered}
       [:input {:id        input-id
                :type      "checkbox"
                :style     {:margin-left "18px"}
                :checked   (or (<memo-cursor job :applied) false)
                :on-change #(memo-prop-toggle job :applied)
                }]
       [:label {:for   input-id
                :style {:color (if (<memo-cursor job :applied)
                                 "red" "black")}}
        "Applied"]])))

;;; --- notes --------------------------------------------------------

(defn note-editor [j]
  (fn [job editing?]
    (let [set-notes #(memo-prop-set job :notes (target-val %))]
      [:textarea {:style        {:padding "8px"
                                 :margin  "0 12px 0 12px"
                                 :cols    20
                                 :display (if @editing? "flex" "none")}
                  :placeholder  "Your notes here"

                  :on-key-press #(when (= "Enter" (js->clj (.-key %)))
                                   (set-notes %))

                  :on-blur      set-notes
                  :defaultValue (or (<memo-cursor job :notes) "")}])))

(defn note-toggle [j]
  (fn [job editing?]
    (let [notes (or (<memo-cursor job :notes) "")]
      [:span {:style    {:cursor      "pointer"
                         :margin-left "18px"
                         :color       (if (pos? (count notes)) "red" "black")}
              :title    "Show/hide editor for your own notes"
              :on-click #(swap! editing? not)}
       "Notes"])))



