(ns aghire.regex-ui
  (:require [clojure.string :as str]
            [cljs.pprint :as pp]
            [reagent.core :as r]
            [aghire.utility :refer [app-cursor <app-cursor target-val] :as utl]
            [aghire.db :as db]
            [aghire.regex-search :as rgx]))

(defn mk-rgx-match-case []
  (fn []
    [:div {:style {:color       "#fcfcfc"
                   :margin      "0 9px 0 0"
                   :display     "flex"
                   :flex-wrap   "wrap"
                   :align-items "center"}}
     [:input {:id        "rgxMatchCase"
              :type      "checkbox"
              :value     (<app-cursor :rgx-match-case)
              :on-change #(swap! (app-cursor :rgx-match-case) not)}]
     [:label {:for "rgxMatchCase"}
      "match case"]]))

(defn mk-rgx-or-and []
  (fn []
    [:div {:style {:color       "#fcfcfc"
                   :margin      "0 9px 0 0"
                   :display     "flex"
                   :flex-wrap   "wrap"
                   :align-items "center"}}
     [:input {:id        "rgxOrAnd"
              :type      "checkbox"
              :checked   (<app-cursor :rgx-xlate-or-and)
              :title     "Replace 'or/and' with '||/&&' for easier mobile entry."
              :on-change #(swap! (app-cursor :rgx-xlate-or-and) not)}]
     [:label {:for "rgxOrAnd"}
      "allow or/and"]]))

(def regexHelpEntry
  ["Press <kbd style='background:cornsilk;font-size:1em'>Enter</kbd> or <kbd style='background:cornsilk;font-size:1em'>Tab</kbd> to activate, including after clearing."
   (str "Separate <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions'>JS RegExp-legal</a> terms with <b>||</b> or "
     "<b>&&</b> (higher priority) to combine expressions.")
   "'Allow or/and' option treats those as ||/&& for easier mobile entry."
   "Regex terms are split on comma and passed to <b>new RegExp(pattern,flags)</b>."
   "e.g. Enter <b>taipei,i</b> for case-insensitive search."])

(defn mk-rgx-options []
  (let [helping (r/atom false)]
    (fn []
      ^{:key "opts"}
      [:div
       [:div {:style (merge utl/hz-flex-wrap-centered
                       {:padding-right "12px"
                        :margin        "4px 0 9px 30px"})}
        ^{:key "mcase"} [mk-rgx-match-case]
        ^{:key "andor"} [mk-rgx-or-and]
        ^{:key "help"} [:span {:style    {:color  "white" :margin-left "24px"
                                          :cursor "pointer"}
                               :on-click #(reset! helping (not @helping))}
                        "help"]
        ]
       [utl/help-list regexHelpEntry helping]])))

(defn mk-listing-rgx
  "This is generic enough to handle the two search fields, title only
  and the full listing including title"
  [scope label desc]
  [:div {:style {:display        "flex"
                 :flex-direction "column"
                 :margin         "6px 18px 0 30px"}}
   [:span {:style {:color     "white"
                   :font-size "0.7em"}}
    label]
   [:input {:placeholder  (pp/cl-format nil "Regex for ~a search" desc)
            :list         (str scope "list")
            :on-key-press #(when (= "Enter" (js->clj (.-key %)))
                             (rgx/unparsed-set scope (str/trim (target-val %))))

            :on-blur      #(rgx/unparsed-set scope (str/trim (target-val %)))

            :on-focus     #(.setSelectionRange (.-target %) 0 999)

            :style        {:min-width "72px"
                           :font-size "1em"
                           :height    "2em"}}]
   [:datalist {:id (str scope "list")}
    (let [searches (get @db/search-history scope)]
      (map (fn [h] ^{:key h} [:option {:value h}])
        searches))]])

(defn mk-title-rgx []
  [mk-listing-rgx :title "Title Only" "title"])

(defn mk-full-rgx []
  [mk-listing-rgx :full "Full Listing" "title and listing"])

(defn mk-regex-search []
  (fn []
    [:div
     [:span {:style {:margin-left "24px"}}
      "Search"]

     (into [:div {:class "osBody"
                  :style {:background "#ff6600"}}]
       [[mk-title-rgx]
        [mk-full-rgx]
        [mk-rgx-options]])]))
