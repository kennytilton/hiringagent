(ns aghire.filtering
  (:require
    [reagent.core :as r]
    [aghire.month-loader :as loader]
    [aghire.utility :refer [<app-cursor app-cursor] :as utl]
    [aghire.db :as db]
    [aghire.regex-search :as rgx]))

;;; --- the filtering itself! ----------------------------------------------------------------

(defn jobs-filtered-fn []
  (let [filters (<app-cursor :filter-active)
        title-rgx-tree @(r/track rgx/rgx-tree-build :title)
        full-rgx-tree @(r/track rgx/rgx-tree-build :full)]

    (filter (fn [j]
              (let [memo (<app-cursor [:job-memos (:hn-id j)])]
                (prn :hunh title-rgx-tree :full full-rgx-tree)
                (and (or (not (get filters "REMOTE")) (:remote j))
                     (or (not (get filters "ONSITE")) (:onsite j))
                     (or (not (get filters "INTERNS")) (:intern j))
                     (or (not (get filters "VISA")) (:visa j))
                     (or (not (get filters "Excluded")) (:excluded memo))
                     (or (not (get filters "Noted")) (pos? (count (:notes memo))))
                     (or (not (get filters "Applied")) (:applied memo))
                     (or (not (get filters "Starred")) (pos? (:stars memo)))
                     (or (not title-rgx-tree) (rgx/rgx-tree-match (:title-search j) title-rgx-tree))
                     (or (not full-rgx-tree) (or
                                               (rgx/rgx-tree-match (:title-search j) full-rgx-tree)
                                               (rgx/rgx-tree-match (:body-search j) full-rgx-tree))))))
      @loader/month-jobs)))

(def jobs-filtered (r/track jobs-filtered-fn))

;;; --- filtered excluded count ----------------------------------------------------
;;; This is funny, all we need is the count but it is a fairly elaborate computation
;;; so having it in-line could be a bear, so we use an r/track to hide/memoize it all
;;; but use it just once.

(defn jobs-filtered-excluded-ct-compute []
  (let [memos @db/job-memos
        jobs-filtered @jobs-filtered]
    (count (filter (fn [j]
                     (get-in memos [(:hn-id j) :excluded]))
             jobs-filtered))))

(def jobs-filtered-excluded-ct (r/track jobs-filtered-excluded-ct-compute))

;;; --- the filtering interface (excluding regex) -----------------------

(def title-selects [[["REMOTE", "Does regex search of title for remote jobs"]
                     ["ONSITE", "Does regex search of title for on-site jobs"]]
                    [["INTERNS", "Does regex search of title for internships"]
                     ["VISA", "Does regex search of title for Visa sponsors"]]])

(def user-selects [[["Starred", "Show only jobs you have rated with stars"]
                    ["Noted", "Show only jobs on which you have made a note"]]
                   [["Applied", "Show only jobs you have marked as applied to"]
                    ["Excluded", "Show jobs you exluded from view"]]])

(declare mk-filter-grid)

(defn mk-title-selects []
  (mk-filter-grid "title" "Title selects" title-selects {}))

(defn mk-user-selects []
  (mk-filter-grid "user" "User selects" user-selects {}))

(defn mk-filter-grid
  "A generic interface builder capabale of presenting N rows of N checkboxes"
  [key lbl j-major-selects styling]
  (let [f-style (merge utl/hz-flex-wrap {:margin "8px 0 8px 24px"} styling)
        mk-filter-checkbox (fn [[tag desc]]
                        (let [f-active (app-cursor [:filter-active tag])]
                          [:div {:style {:color       "white"
                                         :min-width   "96px"
                                         :display     "flex"
                                         :flex        ""
                                         :align-items "center"}}
                           [:input {:id           (str tag "ID")
                                    :class        (str tag "-jSelect")
                                    :style        {:background "#eee"}
                                    :type         "checkbox"
                                    :defaultValue false
                                    :on-change    (fn [e]
                                                    (reset! f-active (.-checked (.-target e))))}]
                           [:label {:for   (str tag "ID")
                                    :title desc}
                            tag]]))]
    (into [:div {:style f-style}]
      (map (fn [j-selects]
             (into [:div {:style {:display "flex"
                                  :flex    "no-wrap"}}]
               (map mk-filter-checkbox j-selects)))
        j-major-selects))))