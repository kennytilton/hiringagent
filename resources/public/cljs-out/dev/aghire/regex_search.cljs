(ns aghire.regex-search
  (:require [aghire.utility :refer [<track app-cursor <app-cursor target-val]
             :as utl]
            [reagent.core :as r]
            [clojure.string :as str]
            [aghire.db :as db]))

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
       (into [:div {:style (merge utl/hz-flex-wrap-centered
                       {:padding-right "12px"
                        :margin        "4px 0 9px 30px"})}]
         [[mk-rgx-match-case]
          [mk-rgx-or-and]
          [:span {:style    {:color  "white" :margin-left "24px"
                                          :cursor "pointer"}
                               :on-click #(reset! helping (not @helping))}
                        "help"]])
       [utl/help-list regexHelpEntry helping]])))

(defn unparsed-set [scope raw]
  (swap! db/rgx-unparsed assoc-in [scope] raw)
  (swap! db/search-history update-in [scope] utl/push-new raw))

;; ^([^U]*(U[^S])?)*U?$

(defn- de-aliased [scope]
  (when-let [rgx-raw (get @db/rgx-unparsed scope)]
      (if @db/rgx-xlate-or-and
        (str/replace (str/replace rgx-raw #"\sand\s" " && ") #"\sor\s" " || ")
        rgx-raw)))

(defn rgx-tree-build [scope]
  (when-let [rgx-normal (<track de-aliased scope)]
    (let [or-terms (str/split (js->clj rgx-normal) #"\|\|")]
      (into []
        (map (fn [or-term]
               (into []
                 (map (fn [and-term]
                        (let [[term options] (str/split (str/trim and-term) ",")
                              netopts (if (and (not @db/rgx-match-case)
                                               (not (str/includes? (or options "") "i")))
                                        (str options "i")
                                        "")]
                          (try
                            (js/RegExp. term netopts)
                            (catch js/Object ex
                              (js/alert (str "Invalid regex: " rgx-normal))
                              nil))))
                   (str/split or-term #"&&")))))
        or-terms))))

(defn rgx-tree-match [text tree]
  (some (fn [ands]
          (when ands
            (every? (fn [andx]
                      (when andx
                        (boolean (re-find andx text))))
              ands))) tree))
