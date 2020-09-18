(ns aghire.db
  (:require [clojure.string :as str]
            [reagent.core :as r]))

(def app (r/atom
           (merge
             {:month-load nil
              :job-display-max        42
              :job-sort               nil
              :filter-active {}
              :show-filters           true
              :show-filtered-excluded false

              :rgx-unparsed {} ;; keys are :body or :full (title and body)
              :rgx-match-case         false
              :rgx-xlate-or-and       true
              :search-history         {}

              :show-job-details       {}

              :job-memos {} ;; keyed by job hn-id
              })))


(def job-sort (r/cursor app [:job-sort]))
(def job-display-max (r/cursor app [:job-display-max]))
(def filter-active (r/cursor app [:filter-active]))
(def show-filters (r/cursor app [:show-filters]))
(def show-filter-excluded (r/cursor app [:show-filter-excluded]))
(def rgx-match-case (r/cursor app [:rgx-match-case]))
(def rgx-xlate-or-and (r/cursor app [:rgx-xlate-or-and]))
(def rgx-unparsed (r/cursor app [:rgx-unparsed]))
(def job-memos (r/cursor app [:job-memos]))

(def search-history (r/cursor app [:search-history]))
(def show-job-details (r/cursor app [:show-job-details]))

(def ls-key "rehiring-browser")                             ;; localstore key