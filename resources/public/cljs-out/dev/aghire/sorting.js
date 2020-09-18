// Compiled by ClojureScript 1.10.773 {}
goog.provide('aghire.sorting');
goog.require('cljs.core');
goog.require('aghire.db');
goog.require('aghire.utility');
aghire.sorting.job_company_key = (function aghire$sorting$job_company_key(j){
var or__4126__auto__ = new cljs.core.Keyword(null,"company","company",-340475075).cljs$core$IFn$_invoke$arity$1(j);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
});
aghire.sorting.job_stars_enrich = (function aghire$sorting$job_stars_enrich(job){
return cljs.core.assoc.call(null,job,new cljs.core.Keyword(null,"stars","stars",-556837771),(function (){var or__4126__auto__ = aghire.utility._LT_app_cursor.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"job-memos","job-memos",-1705656600),new cljs.core.Keyword(null,"hn-id","hn-id",1951773016).cljs$core$IFn$_invoke$arity$1(job),new cljs.core.Keyword(null,"stars","stars",-556837771)], null));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (0);
}
})());
});
aghire.sorting.job_stars_compare = (function aghire$sorting$job_stars_compare(dir,j,k){
var j_stars = new cljs.core.Keyword(null,"stars","stars",-556837771).cljs$core$IFn$_invoke$arity$1(j);
var k_stars = new cljs.core.Keyword(null,"stars","stars",-556837771).cljs$core$IFn$_invoke$arity$1(k);
var r = (((j_stars > (0)))?(((k_stars > (0)))?(dir * (((j_stars < k_stars))?(-1):(((j_stars > k_stars))?(1):(((new cljs.core.Keyword(null,"hn-d","hn-d",-995172795).cljs$core$IFn$_invoke$arity$1(j) < new cljs.core.Keyword(null,"hn-id","hn-id",1951773016).cljs$core$IFn$_invoke$arity$1(k)))?(-1):(1))))):(-1)):(((k_stars > (0)))?(1):(((new cljs.core.Keyword(null,"hn-d","hn-d",-995172795).cljs$core$IFn$_invoke$arity$1(j) < new cljs.core.Keyword(null,"hn-id","hn-id",1951773016).cljs$core$IFn$_invoke$arity$1(k)))?(-1):(1))));
return r;
});
aghire.sorting.job_sorts = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"Creation",new cljs.core.Keyword(null,"key-fn","key-fn",-636154479),new cljs.core.Keyword(null,"hn-id","hn-id",1951773016),new cljs.core.Keyword(null,"order","order",-1254677256),(-1)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"title","title",636505583),"Stars",new cljs.core.Keyword(null,"comp-fn","comp-fn",1661028128),aghire.sorting.job_stars_compare,new cljs.core.Keyword(null,"order","order",-1254677256),(-1),new cljs.core.Keyword(null,"prep-fn","prep-fn",-237774768),aghire.sorting.job_stars_enrich], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"Company",new cljs.core.Keyword(null,"key-fn","key-fn",-636154479),aghire.sorting.job_company_key,new cljs.core.Keyword(null,"order","order",-1254677256),(1)], null)], null);
aghire.sorting.sort_initialize = (function aghire$sorting$sort_initialize(){
return cljs.core.reset_BANG_.call(null,aghire.db.job_sort,cljs.core.nth.call(null,aghire.sorting.job_sorts,(0)));
});
aghire.sorting.sort_bar_option = (function aghire$sorting$sort_bar_option(){
return (function (p__22035){
var map__22036 = p__22035;
var map__22036__$1 = (((((!((map__22036 == null))))?(((((map__22036.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22036.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22036):map__22036);
var jsort = map__22036__$1;
var title = cljs.core.get.call(null,map__22036__$1,new cljs.core.Keyword(null,"title","title",636505583));
var curr_sort = cljs.core.deref.call(null,aghire.db.job_sort);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.sortOption","button.sortOption",-1136341871),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),((cljs.core._EQ_.call(null,title,new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(curr_sort)))?"blue":"#222")], null),new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,jsort,curr_sort),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
if(cljs.core._EQ_.call(null,title,new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(curr_sort))){
return cljs.core.reset_BANG_.call(null,aghire.db.job_sort,cljs.core.update.call(null,curr_sort,new cljs.core.Keyword(null,"order","order",-1254677256),(function (p1__22034_SHARP_){
return ((-1) * p1__22034_SHARP_);
})));
} else {
return cljs.core.reset_BANG_.call(null,aghire.db.job_sort,jsort);
}
})], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(jsort)),((cljs.core._EQ_.call(null,title,new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(curr_sort)))?((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"order","order",-1254677256).cljs$core$IFn$_invoke$arity$1(curr_sort),(-1)))?aghire.utility.unesc.call(null,"&#x2798"):aghire.utility.unesc.call(null,"&#x279a")):null)].join('')], null);
});
});
aghire.sorting.sort_bar = (function aghire$sorting$sort_bar(){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"padding","padding",1660304693),(0),new cljs.core.Keyword(null,"margin","margin",-995903681),"15px 0 0 24px",new cljs.core.Keyword(null,"display","display",242065432),"flex"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-right","margin-right",809689658),"6px"], null)], null),"Sort by:"], null),cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,aghire.utility.hz_flex_wrap,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"list-style","list-style",-809622358),"none",new cljs.core.Keyword(null,"padding","padding",1660304693),(0),new cljs.core.Keyword(null,"margin","margin",-995903681),(0)], null))], null)], null),cljs.core.map.call(null,(function (jsort){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [aghire.sorting.sort_bar_option,jsort], null)], null);
}),aghire.sorting.job_sorts))], null);
});
});

//# sourceMappingURL=sorting.js.map
