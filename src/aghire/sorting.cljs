(ns aghire.sorting
  (:require [aghire.db :as db]
            [aghire.utility :as utl]))

;;; --- sorting ---------------------------------------------

(defn job-company-key [j]
  (or (:company j) ""))

(defn job-stars-enrich [job]
  (assoc job :stars (or (utl/<app-cursor [:job-memos (:hn-id job) :stars]) 0)))

(defn job-stars-compare [dir j k]
  ;; force un-starred to end regardless of sort order
  ;; order ties by ascending hn-id

  (let [j-stars (:stars j)
        k-stars (:stars k)]

    (let [r (if (pos? j-stars)
              (if (pos? k-stars)
                (* dir (if (< j-stars k-stars)
                         -1
                         (if (> j-stars k-stars)
                           1
                           (if (< (:hn-d j) (:hn-id k)) -1 1))))
                -1)
              (if (pos? k-stars)
                1
                (if (< (:hn-d j) (:hn-id k)) -1 1)))]
      r)))

(def job-sorts [{:title "Creation" :key-fn :hn-id :order -1}
                {:title "Stars" :comp-fn job-stars-compare :order -1 :prep-fn job-stars-enrich}
                {:title "Company" :key-fn job-company-key :order 1}])

;;; --- job sort bar -------------------------------------------------------

(defn sort-bar-option []
  (fn [{:keys [title] :as jsort}]
    (let [curr-sort @db/job-sort]
      [:button.sortOption
       {:style    {:color (if (= title (:title curr-sort))
                            "blue" "#222")}
        :selected (= jsort curr-sort)
        :on-click (fn []
                    (if (= title (:title curr-sort))
                      (reset! db/job-sort (update curr-sort :order #(* -1 %)))
                      (reset! db/job-sort jsort)))}
       (str (:title jsort) (if (= title (:title curr-sort))
                             (if (= (:order curr-sort) -1)
                               (utl/unesc "&#x2798") (utl/unesc "&#x279a"))))])))

(defn sort-bar []
  (fn []
    [:div {:style {:padding 0
                   :margin  "15px 0 0 24px"
                   :display "flex"}}
     [:span {:style {:margin-right "6px"}} "Sort by:"]
     (into [:ul {:style (merge utl/hz-flex-wrap
                          {:list-style "none"
                           :padding    0
                           :margin     0})}]
       (map (fn [jsort]
              [:li [sort-bar-option jsort]])
         job-sorts))]))
