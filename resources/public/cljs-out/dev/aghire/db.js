// Compiled by ClojureScript 1.10.773 {}
goog.provide('aghire.db');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('reagent.core');
aghire.db.app = reagent.core.atom.call(null,cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"rgx-unparsed","rgx-unparsed",-1128713376),new cljs.core.Keyword(null,"rgx-xlate-or-and","rgx-xlate-or-and",393410817),new cljs.core.Keyword(null,"show-job-details","show-job-details",-1539023325),new cljs.core.Keyword(null,"job-memos","job-memos",-1705656600),new cljs.core.Keyword(null,"job-sort","job-sort",-538329526),new cljs.core.Keyword(null,"show-filtered-excluded","show-filtered-excluded",-943148884),new cljs.core.Keyword(null,"rgx-match-case","rgx-match-case",195108910),new cljs.core.Keyword(null,"filter-active","filter-active",-410911794),new cljs.core.Keyword(null,"month-load","month-load",-1463045711),new cljs.core.Keyword(null,"job-display-max","job-display-max",1222066482),new cljs.core.Keyword(null,"show-filters","show-filters",1822583446),new cljs.core.Keyword(null,"search-history","search-history",1315830717)],[cljs.core.PersistentArrayMap.EMPTY,true,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,null,false,false,cljs.core.PersistentArrayMap.EMPTY,null,(42),true,cljs.core.PersistentArrayMap.EMPTY])));
aghire.db.job_sort = reagent.core.cursor.call(null,aghire.db.app,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"job-sort","job-sort",-538329526)], null));
aghire.db.job_display_max = reagent.core.cursor.call(null,aghire.db.app,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"job-display-max","job-display-max",1222066482)], null));
aghire.db.filter_active = reagent.core.cursor.call(null,aghire.db.app,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-active","filter-active",-410911794)], null));
aghire.db.show_filters = reagent.core.cursor.call(null,aghire.db.app,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"show-filters","show-filters",1822583446)], null));
aghire.db.show_filter_excluded = reagent.core.cursor.call(null,aghire.db.app,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"show-filter-excluded","show-filter-excluded",685291720)], null));
aghire.db.rgx_match_case = reagent.core.cursor.call(null,aghire.db.app,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rgx-match-case","rgx-match-case",195108910)], null));
aghire.db.rgx_xlate_or_and = reagent.core.cursor.call(null,aghire.db.app,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rgx-xlate-or-and","rgx-xlate-or-and",393410817)], null));
aghire.db.rgx_unparsed = reagent.core.cursor.call(null,aghire.db.app,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rgx-unparsed","rgx-unparsed",-1128713376)], null));
aghire.db.job_memos = reagent.core.cursor.call(null,aghire.db.app,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"job-memos","job-memos",-1705656600)], null));
aghire.db.search_history = reagent.core.cursor.call(null,aghire.db.app,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"search-history","search-history",1315830717)], null));
aghire.db.show_job_details = reagent.core.cursor.call(null,aghire.db.app,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"show-job-details","show-job-details",-1539023325)], null));
aghire.db.ls_key = "rehiring-browser";

//# sourceMappingURL=db.js.map
