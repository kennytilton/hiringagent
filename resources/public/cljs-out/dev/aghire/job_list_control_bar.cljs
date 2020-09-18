(ns aghire.job-list-control-bar
  (:require [reagent.core :as r]
            [aghire.utility :refer [target-val] :as utl]
            [aghire.db :as db]
            [aghire.month-loader :as loader]
            [aghire.filtering :as flt]))

;;; --- sub-components ---------------------------------------

(defn job-expansion-control []
  (let [toggle-all-details-expands (r/atom true)]
    (fn []
      [:button {:style    {:font-size "1em"
                           :min-width "128px"}
                :on-click #(let [expand? @toggle-all-details-expands
                                 jobs @loader/month-jobs]
                             (swap! toggle-all-details-expands not)
                             (reset! db/show-job-details
                               (into {} (for [j jobs]
                                          [(:hn-id j) expand?]))))}
       (if @toggle-all-details-expands
         "Expand all" "Collapse all")])))

(defn excluded-count []
    (fn []
      (let [excluded-ct @flt/jobs-filtered-excluded-ct]
        [:span {:style    {:padding-bottom "4px"
                           :cursor         "pointer"
                           :display        "flex"
                           :align-items    "center"
                           :font-size      "1em"
                           :visibility     (if (pos? excluded-ct) "visible" "hidden")
                           :border         (if @db/show-filter-excluded
                                             "thin solid red" "none")
                           :title          "Show/hide items you have excluded"}
                :on-click #(swap! db/show-filter-excluded not)
                }
         (str (utl/unesc "&#x20E0;") ": " excluded-ct)])))

(defn result-max []
    (fn []
      [:div {:style (merge utl/hz-flex-wrap-centered {:margin-right "6px"})}
       [:span "Show:"]
       (let [rmax @db/job-display-max
             set-new-max (fn [event]
                           (reset! db/job-display-max (js/parseInt (target-val event))))]
         [:input {:type         "number"
                  :defaultValue rmax

                  :on-key-press #(when (= "Enter" (js->clj (.-key %)))
                                   (set-new-max %))

                  :on-blur      #(set-new-max %)

                  :style        {:font-size    "1em"
                                 :max-width    "48px"
                                 :margin-left  "6px"
                                 :margin-right "6px"
                                 }}])]))

;;; --- the beef --------------------------------------------------

(defn job-listing-control-bar []
  (fn []
    [:div.listingControlBar
     [:div {:style utl/hz-flex-wrap-centered}
        [:span {:style {:font-size    "1em"
                        :margin-right "12px"}}
         (let [jobs @flt/jobs-filtered]
           (str "Jobs: " (count jobs)))]

        [excluded-count]]
     [result-max]
     [job-expansion-control]]))


