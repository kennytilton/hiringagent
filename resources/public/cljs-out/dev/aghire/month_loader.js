// Compiled by ClojureScript 1.10.773 {}
goog.provide('aghire.month_loader');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('cljs.pprint');
goog.require('aghire.db');
goog.require('aghire.job_parse');
goog.require('reagent.core');
goog.require('aghire.utility');
/**
 * The gMonthlies table of contents is defined in index.html for extensibility,
 *   then translated here to CLJS-ese, except hnId: remains camel-case :hnId.
 */
aghire.month_loader.gMonthlies_cljs = (function aghire$month_loader$gMonthlies_cljs(){
return clojure.walk.keywordize_keys.call(null,cljs.core.js__GT_clj.call(null,gMonthlies));
});
/**
 * Retrieve month info based on HN message Id
 */
aghire.month_loader.get_monthly_def = (function aghire$month_loader$get_monthly_def(hn_id){
return cljs.core.some.call(null,(function (month){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"hnId","hnId",-122932298).cljs$core$IFn$_invoke$arity$1(month),hn_id)){
return month;
} else {
return null;
}
}),aghire.month_loader.gMonthlies_cljs.call(null));
});
aghire.month_loader.public_res = "/scrapes/~a/~a.html";
/**
 * Compute a vector of string URLs to be scraped, given month info
 *   hard-coded in index.html. Look for a script tag defining gMonthlies.
 */
aghire.month_loader.month_page_urls = (function aghire$month_loader$month_page_urls(month_hn_id){
if(cljs.core.truth_(month_hn_id)){
var temp__5718__auto__ = aghire.month_loader.get_monthly_def.call(null,month_hn_id);
if(cljs.core.truth_(temp__5718__auto__)){
var mo_def = temp__5718__auto__;
return cljs.core.map.call(null,(function (pg_offset){
return cljs.pprint.cl_format.call(null,null,aghire.month_loader.public_res,month_hn_id,(pg_offset + (1)));
}),cljs.core.range.call(null,new cljs.core.Keyword(null,"pgCount","pgCount",127291490).cljs$core$IFn$_invoke$arity$1(mo_def)));
} else {
throw (new Exception(["msg id ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(month_hn_id)," not defined in gMonthlies table."].join('')));
}
} else {
return null;
}
});
/**
 * This is the starting point of the state we will use to track a multi-page
 *   month load across two phases. Me start with this map and
 *   then assoc/update away at it for the life of the load.
 * 
 *   This, btw, is what we fell back on after internalizing that
 *   subscriptions are meant only for views and other subscriptions.
 * 
 *   What we will do during :cull-athings is 'consume' the list
 *   of page URLS like a work queue. That could easily be implemented
 *   instead by having a 'current-page-url-index' climbing from zero.
 */
aghire.month_loader.unprocessed_month = (function aghire$month_loader$unprocessed_month(month_hn_id){
var urls = aghire.month_loader.month_page_urls.call(null,month_hn_id);
return new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"month-hn-id","month-hn-id",592969740),month_hn_id,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"cull-athings","cull-athings",1059310820),new cljs.core.Keyword(null,"page-url-count","page-url-count",1369115726),cljs.core.count.call(null,urls),new cljs.core.Keyword(null,"page-urls-remaining","page-urls-remaining",758945536),urls,new cljs.core.Keyword(null,"jobs-seen","jobs-seen",-1549674159),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"athings","athings",-336004304),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"athing-parse-count","athing-parse-count",-418673617),(0),new cljs.core.Keyword(null,"jobs","jobs",-313607120),cljs.core.PersistentVector.EMPTY], null);
});
aghire.month_loader.month_load = aghire.utility.app_cursor.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"month-load","month-load",-1463045711)], null));
aghire.month_loader.month_id = reagent.core.cursor.call(null,aghire.month_loader.month_load,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"month-hn-id","month-hn-id",592969740)], null));
aghire.month_loader.month_phase = reagent.core.cursor.call(null,aghire.month_loader.month_load,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"phase","phase",575722892)], null));
aghire.month_loader.month_jobs = reagent.core.cursor.call(null,aghire.month_loader.month_load,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"jobs","jobs",-313607120)], null));
aghire.month_loader.month_load_fini = (function aghire$month_loader$month_load_fini(){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"fini","fini",-375236100),cljs.core.deref.call(null,aghire.month_loader.month_phase));
});
aghire.month_loader.month_progress_compute = (function aghire$month_loader$month_progress_compute(){
var map__17501 = new cljs.core.Keyword(null,"month-load","month-load",-1463045711).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,aghire.db.app));
var map__17501__$1 = (((((!((map__17501 == null))))?(((((map__17501.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17501.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17501):map__17501);
var phase = cljs.core.get.call(null,map__17501__$1,new cljs.core.Keyword(null,"phase","phase",575722892));
var page_url_count = cljs.core.get.call(null,map__17501__$1,new cljs.core.Keyword(null,"page-url-count","page-url-count",1369115726));
var page_urls_remaining = cljs.core.get.call(null,map__17501__$1,new cljs.core.Keyword(null,"page-urls-remaining","page-urls-remaining",758945536));
var athings = cljs.core.get.call(null,map__17501__$1,new cljs.core.Keyword(null,"athings","athings",-336004304));
var athing_parse_ct = cljs.core.get.call(null,map__17501__$1,new cljs.core.Keyword(null,"athing-parse-ct","athing-parse-ct",192542242));
var jobs = cljs.core.get.call(null,map__17501__$1,new cljs.core.Keyword(null,"jobs","jobs",-313607120));
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__4126__auto__ = phase;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"inactive","inactive",-306247616);
}
})()], null),(function (){var G__17503 = phase;
var G__17503__$1 = (((G__17503 instanceof cljs.core.Keyword))?G__17503.fqn:null);
switch (G__17503__$1) {
case "cull-athings":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [page_url_count,(page_url_count - cljs.core.count.call(null,page_urls_remaining))], null);

break;
case "parse-jobs":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.count.call(null,athings),athing_parse_ct], null);

break;
case "fini":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null);

break;
case "inactive":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null);

break;
default:
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null);

}
})());
});
aghire.month_loader.month_progress = reagent.core.track.call(null,aghire.month_loader.month_progress_compute);
aghire.month_loader.month_load_initialize = (function aghire$month_loader$month_load_initialize(month_hn_id){
return cljs.core.reset_BANG_.call(null,aghire.month_loader.month_load,aghire.month_loader.unprocessed_month.call(null,month_hn_id));
});
aghire.month_loader.app_month_startup = (function aghire$month_loader$app_month_startup(){
return aghire.month_loader.month_load_initialize.call(null,new cljs.core.Keyword(null,"hnId","hnId",-122932298).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,aghire.month_loader.gMonthlies_cljs.call(null),initialSearchMoIdx)));
});

/**
 * This is a key player in loading a month. It spawns one
 *   child loader whenever there is a URL to be scraped. We
 *   then grab candidate nodes (class 'aThing') for later
 *   processing.
 * 
 *   Sadly, iframes offer no way to tell if the URL does not
 *   load, so this app hangs if a month is configured for more
 *   files than are in resources/public/scrapes/<month>. Only
 *   fix is a timeout that would abort after N seconds.
 * 
 *   Left as an exercise.
 */
aghire.month_loader.job_listing_loader = (function aghire$month_loader$job_listing_loader(){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"none"], null)], null),(function (){var task = cljs.core.deref.call(null,aghire.month_loader.month_load);
if(cljs.core.seq.call(null,new cljs.core.Keyword(null,"page-urls-remaining","page-urls-remaining",758945536).cljs$core$IFn$_invoke$arity$1(task))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [aghire.month_loader.mk_page_loader,task], null);
} else {
return null;
}
})()], null);
});
});
aghire.month_loader.ATHING_PARSE_MAX = (1000);
/**
 * Pretty simple. All messages are dom nodes with class aThing. Grab those
 *   and later we will check the opening text vertical bars | to identify jobs.
 *   Counting vertical bars to identify a job? Don't judge me.
 */
aghire.month_loader.job_page_athings = (function aghire$month_loader$job_page_athings(ifr_dom){
var temp__5720__auto__ = ifr_dom.contentDocument;
if(cljs.core.truth_(temp__5720__auto__)){
var cont_doc = temp__5720__auto__;
var hn_body = (cont_doc.getElementsByTagName("body")[(0)]);
var a_things = cljs.core.take.call(null,aghire.month_loader.ATHING_PARSE_MAX,cljs.core.prim_seq.call(null,hn_body.querySelectorAll(".athing")));
(hn_body.innerHTML = "");

return a_things;
} else {
return null;
}
});
aghire.month_loader.mk_page_loader = (function aghire$month_loader$mk_page_loader(){
return (function (task){
var temp__5720__auto__ = cljs.core.first.call(null,new cljs.core.Keyword(null,"page-urls-remaining","page-urls-remaining",758945536).cljs$core$IFn$_invoke$arity$1(task));
if(cljs.core.truth_(temp__5720__auto__)){
var pg_1 = temp__5720__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"iframe","iframe",884422026),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),pg_1,new cljs.core.Keyword(null,"on-load","on-load",1415151594),(function (p1__17505_SHARP_){
var rem_pages = cljs.core.rest.call(null,new cljs.core.Keyword(null,"page-urls-remaining","page-urls-remaining",758945536).cljs$core$IFn$_invoke$arity$1(task));
return cljs.core.reset_BANG_.call(null,aghire.month_loader.month_load,cljs.core.merge.call(null,task,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"athings","athings",-336004304),cljs.core.into.call(null,new cljs.core.Keyword(null,"athings","athings",-336004304).cljs$core$IFn$_invoke$arity$1(task),aghire.month_loader.job_page_athings.call(null,p1__17505_SHARP_.target)),new cljs.core.Keyword(null,"page-urls-remaining","page-urls-remaining",758945536),rem_pages,new cljs.core.Keyword(null,"phase","phase",575722892),((cljs.core.empty_QMARK_.call(null,rem_pages))?new cljs.core.Keyword(null,"parse-jobs","parse-jobs",-962878575):new cljs.core.Keyword(null,"phase","phase",575722892).cljs$core$IFn$_invoke$arity$1(task))], null)));
})], null)], null);
} else {
return null;
}
});
});
aghire.month_loader.ATHING_CHUNK_SZ = (20);
aghire.month_loader.cull_jobs_from_athings = (function aghire$month_loader$cull_jobs_from_athings(){
var map__17508 = cljs.core.deref.call(null,aghire.month_loader.month_load);
var map__17508__$1 = (((((!((map__17508 == null))))?(((((map__17508.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17508.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17508):map__17508);
var task = map__17508__$1;
var phase = cljs.core.get.call(null,map__17508__$1,new cljs.core.Keyword(null,"phase","phase",575722892));
var athings = cljs.core.get.call(null,map__17508__$1,new cljs.core.Keyword(null,"athings","athings",-336004304));
var athing_parse_ct = cljs.core.get.call(null,map__17508__$1,new cljs.core.Keyword(null,"athing-parse-ct","athing-parse-ct",192542242));
var jobs = cljs.core.get.call(null,map__17508__$1,new cljs.core.Keyword(null,"jobs","jobs",-313607120));
var jobs_seen = cljs.core.get.call(null,map__17508__$1,new cljs.core.Keyword(null,"jobs-seen","jobs-seen",-1549674159));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"parse-jobs","parse-jobs",-962878575),phase)){
var chunk = cljs.core.take.call(null,aghire.month_loader.ATHING_CHUNK_SZ,athings);
var rem_athings = cljs.core.nthrest.call(null,athings,aghire.month_loader.ATHING_CHUNK_SZ);
if(cljs.core.seq.call(null,chunk)){
var new_jobs = cljs.core.filter.call(null,(function (p1__17506_SHARP_){
return new cljs.core.Keyword(null,"OK","OK",1347916322).cljs$core$IFn$_invoke$arity$1(p1__17506_SHARP_);
}),cljs.core.map.call(null,(function (p1__17507_SHARP_){
return aghire.job_parse.job_parse.call(null,p1__17507_SHARP_,jobs_seen);
}),chunk));
return setTimeout((function (){
return cljs.core.reset_BANG_.call(null,aghire.month_loader.month_load,cljs.core.merge.call(null,task,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"jobs","jobs",-313607120),cljs.core.into.call(null,jobs,new_jobs),new cljs.core.Keyword(null,"jobs-seen","jobs-seen",-1549674159),((cljs.core.seq.call(null,rem_athings))?clojure.set.union.call(null,jobs_seen,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.map.call(null,new cljs.core.Keyword(null,"hn-id","hn-id",1951773016),new_jobs))):null),new cljs.core.Keyword(null,"athings","athings",-336004304),rem_athings,new cljs.core.Keyword(null,"athing-parse-ct","athing-parse-ct",192542242),(athing_parse_ct + cljs.core.count.call(null,chunk)),new cljs.core.Keyword(null,"phase","phase",575722892),((cljs.core.empty_QMARK_.call(null,rem_athings))?new cljs.core.Keyword(null,"fini","fini",-375236100):phase)], null)));
}),(0));
} else {
return cljs.core.swap_BANG_.call(null,aghire.month_loader.month_load,cljs.core.update,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"fini","fini",-375236100));
}
} else {
return null;
}
});
if((typeof aghire !== 'undefined') && (typeof aghire.month_loader !== 'undefined') && (typeof aghire.month_loader.athings_to_jobs !== 'undefined')){
} else {
aghire.month_loader.athings_to_jobs = reagent.core.track_BANG_.call(null,aghire.month_loader.cull_jobs_from_athings);
}

//# sourceMappingURL=month_loader.js.map
