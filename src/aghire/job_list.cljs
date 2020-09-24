(ns aghire.job-list
  (:require
    [reagent.core :as r]
    [aghire.db :as db]
    [aghire.filtering :as flt]
    [goog.string :as gs]
    [cljs.pprint :as pp]
    [aghire.utility :refer [<app-cursor app-cursor target-val] :as utl]
    [aghire.month-loader :as loader]
    [aghire.memo :refer [<memo-cursor] :as unt]))

(defn node-to-hiccup [n]
  (case (.-nodeType n)
    1 (case (.-tagName n)
        "A" [:a {:href (.-href n)} (.-textContent n)] ;; s/b (into [:a href]...
        "P" (into [:p] (map node-to-hiccup
                         (array-seq (.-childNodes n))))
        "DIV" (into [:div] (map node-to-hiccup
                             (array-seq (.-childNodes n))))
        [:p (str "Unexpected tag = " (.-tagName n))])
    3 [:span (.-textContent n)]
    [:p (str "Unexpected n type = " (.-nodeType n))]))

(defn job-header []
  (fn [job]
    [:div {:style    {:cursor  "pointer"
                      :display "flex"}
           :on-click #(swap! (app-cursor [:show-job-details (:hn-id job)]) not)}
     [:span {:style {:color        "gray"
                     :max-height   "16px"
                     :margin-right "9px"
                     :display      "block"}}
      (utl/unesc "&#x2b51")]
     (into [:div ]
       (map node-to-hiccup
         (:title-seg job)))]))

(defn jump-to-hn [hn-id]
  (.open js/window (pp/cl-format nil "https://news.ycombinator.com/item?id=~a" hn-id) "_blank"))



(defn job-details []
  (fn [job]
    (let [deets (<app-cursor [:show-job-details (:hn-id job)])]
      [:div {:class (if deets "slideIn" "slideOut")
             :style {:margin     "6px"
                     :background "#fff"
                     :display    (if deets "block" "none")}}
       [unt/job-memo-control-bar job]
       (into [:div {:style           {:margin   "6px"
                                      :overflow "auto"}
                    :on-double-click #(jump-to-hn (:hn-id job))}]
         (when deets
           (map node-to-hiccup
             (remove (fn [n] (= "reply" (.-className n)))
               (:body job)))))])))

(defn job-list-sort [jobs]
  (let [{:keys [key-fn comp-fn order prep-fn] :as spec} @db/job-sort]
    (cond
      spec (sort (fn [j k]
                   (if comp-fn
                     (comp-fn order j k)
                     (* order (if (< (key-fn j) (key-fn k)) -1 1))))
             (map (or prep-fn identity) jobs))
      :default (map identity jobs))))

(defn job-list-item []
  (fn [job-no job]
    [:li {:style {:cursor     "pointer"
                  :display    (let [excluded (<memo-cursor job :excluded)]
                                (if (and excluded
                                         (not @db/show-filter-excluded)
                                         (not (<app-cursor [:filter-active :excluded])))
                                  "none" "block"))
                  :padding    "12px"
                  :background (if (zero? (mod job-no 2))
                                "#eee" "#f8f8f8")}}
     [job-header job]
     [job-details job]
     ]))

(defn job-list []
  (fn []
    (when (loader/month-load-fini)
      (into [:ul {:style {:list-style-type "none"
                          :background      "#eee"
                          ;; these next defeat gratuitous default styling of ULs by browser
                          :padding         0
                          :margin          0}}]
        (map (fn [jn j]
               ^{:key (:hn-id j)} [job-list-item jn j])
          (range)                                           ;; provides zebra
          (job-list-sort
            (take @db/job-display-max
              @flt/jobs-filtered)))))))






