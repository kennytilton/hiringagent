// Compiled by ClojureScript 1.10.773 {}
goog.provide('aghire.filtering');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('aghire.month_loader');
goog.require('aghire.utility');
goog.require('aghire.db');
goog.require('aghire.regex_search');
aghire.filtering.jobs_filtered_fn = (function aghire$filtering$jobs_filtered_fn(){
var filters = aghire.utility._LT_app_cursor.call(null,new cljs.core.Keyword(null,"filter-active","filter-active",-410911794));
var title_rgx_tree = cljs.core.deref.call(null,reagent.core.track.call(null,aghire.regex_search.rgx_tree_build,new cljs.core.Keyword(null,"title","title",636505583)));
var full_rgx_tree = cljs.core.deref.call(null,reagent.core.track.call(null,aghire.regex_search.rgx_tree_build,new cljs.core.Keyword(null,"full","full",436801220)));
return cljs.core.filter.call(null,(function (j){
var memo = aghire.utility._LT_app_cursor.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"job-memos","job-memos",-1705656600),new cljs.core.Keyword(null,"hn-id","hn-id",1951773016).cljs$core$IFn$_invoke$arity$1(j)], null));
var and__4115__auto__ = (function (){var or__4126__auto__ = cljs.core.not.call(null,cljs.core.get.call(null,filters,"REMOTE"));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"remote","remote",-1593576576).cljs$core$IFn$_invoke$arity$1(j);
}
})();
if(cljs.core.truth_(and__4115__auto__)){
var and__4115__auto____$1 = (function (){var or__4126__auto__ = cljs.core.not.call(null,cljs.core.get.call(null,filters,"ONSITE"));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"onsite","onsite",318738085).cljs$core$IFn$_invoke$arity$1(j);
}
})();
if(cljs.core.truth_(and__4115__auto____$1)){
var and__4115__auto____$2 = (function (){var or__4126__auto__ = cljs.core.not.call(null,cljs.core.get.call(null,filters,"INTERNS"));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"intern","intern",23820624).cljs$core$IFn$_invoke$arity$1(j);
}
})();
if(cljs.core.truth_(and__4115__auto____$2)){
var and__4115__auto____$3 = (function (){var or__4126__auto__ = cljs.core.not.call(null,cljs.core.get.call(null,filters,"VISA"));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"visa","visa",1658188840).cljs$core$IFn$_invoke$arity$1(j);
}
})();
if(cljs.core.truth_(and__4115__auto____$3)){
var and__4115__auto____$4 = (function (){var or__4126__auto__ = cljs.core.not.call(null,cljs.core.get.call(null,filters,"Excluded"));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"excluded","excluded",-715952088).cljs$core$IFn$_invoke$arity$1(memo);
}
})();
if(cljs.core.truth_(and__4115__auto____$4)){
if(((cljs.core.not.call(null,cljs.core.get.call(null,filters,"Noted"))) || ((cljs.core.count.call(null,new cljs.core.Keyword(null,"notes","notes",-1039600523).cljs$core$IFn$_invoke$arity$1(memo)) > (0))))){
var and__4115__auto____$5 = (function (){var or__4126__auto__ = cljs.core.not.call(null,cljs.core.get.call(null,filters,"Applied"));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"applied","applied",-1208896155).cljs$core$IFn$_invoke$arity$1(memo);
}
})();
if(cljs.core.truth_(and__4115__auto____$5)){
if(((cljs.core.not.call(null,cljs.core.get.call(null,filters,"Starred"))) || ((new cljs.core.Keyword(null,"stars","stars",-556837771).cljs$core$IFn$_invoke$arity$1(memo) > (0))))){
var or__4126__auto__ = cljs.core.not.call(null,title_rgx_tree);
if(or__4126__auto__){
return or__4126__auto__;
} else {
return aghire.regex_search.rgx_tree_match.call(null,new cljs.core.Keyword(null,"title-search","title-search",-1989051775).cljs$core$IFn$_invoke$arity$1(j),title_rgx_tree);
}
} else {
return false;
}
} else {
return and__4115__auto____$5;
}
} else {
return false;
}
} else {
return and__4115__auto____$4;
}
} else {
return and__4115__auto____$3;
}
} else {
return and__4115__auto____$2;
}
} else {
return and__4115__auto____$1;
}
} else {
return and__4115__auto__;
}
}),cljs.core.deref.call(null,aghire.month_loader.month_jobs));
});
aghire.filtering.jobs_filtered = reagent.core.track.call(null,aghire.filtering.jobs_filtered_fn);
aghire.filtering.jobs_filtered_excluded_ct_compute = (function aghire$filtering$jobs_filtered_excluded_ct_compute(){
var memos = cljs.core.deref.call(null,aghire.db.job_memos);
var jobs_filtered = cljs.core.deref.call(null,aghire.filtering.jobs_filtered);
return cljs.core.count.call(null,cljs.core.filter.call(null,(function (j){
return cljs.core.get_in.call(null,memos,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hn-id","hn-id",1951773016).cljs$core$IFn$_invoke$arity$1(j),new cljs.core.Keyword(null,"excluded","excluded",-715952088)], null));
}),jobs_filtered));
});
aghire.filtering.jobs_filtered_excluded_ct = reagent.core.track.call(null,aghire.filtering.jobs_filtered_excluded_ct_compute);
aghire.filtering.title_selects = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["REMOTE","Does regex search of title for remote jobs"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ONSITE","Does regex search of title for on-site jobs"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["INTERNS","Does regex search of title for internships"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["VISA","Does regex search of title for Visa sponsors"], null)], null)], null);
aghire.filtering.user_selects = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Starred","Show only jobs you have rated with stars"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Noted","Show only jobs on which you have made a note"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Applied","Show only jobs you have marked as applied to"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Excluded","Show jobs you exluded from view"], null)], null)], null);
aghire.filtering.mk_title_selects = (function aghire$filtering$mk_title_selects(){
return aghire.filtering.mk_filter_grid.call(null,"title","Title selects",aghire.filtering.title_selects,cljs.core.PersistentArrayMap.EMPTY);
});
aghire.filtering.mk_user_selects = (function aghire$filtering$mk_user_selects(){
return aghire.filtering.mk_filter_grid.call(null,"user","User selects",aghire.filtering.user_selects,cljs.core.PersistentArrayMap.EMPTY);
});
/**
 * A generic interface builder capabale of presenting N rows of N checkboxes
 */
aghire.filtering.mk_filter_grid = (function aghire$filtering$mk_filter_grid(key,lbl,j_major_selects,styling){
var f_style = cljs.core.merge.call(null,aghire.utility.hz_flex_wrap,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),"8px 0 8px 24px"], null),styling);
var mk_filter_checkbox = (function (p__17523){
var vec__17524 = p__17523;
var tag = cljs.core.nth.call(null,vec__17524,(0),null);
var desc = cljs.core.nth.call(null,vec__17524,(1),null);
var f_active = aghire.utility.app_cursor.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-active","filter-active",-410911794),tag], null));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"color","color",1011675173),"white",new cljs.core.Keyword(null,"min-width","min-width",1926193728),"96px",new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex","flex",-1425124628),"",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag),"ID"].join(''),new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag),"-jSelect"].join(''),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),"#eee"], null),new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"defaultValue","defaultValue",-586131910),false,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
return cljs.core.reset_BANG_.call(null,f_active,e.target.checked);
})], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"for","for",-1323786319),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag),"ID"].join(''),new cljs.core.Keyword(null,"title","title",636505583),desc], null),tag], null)], null);
});
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),f_style], null)], null),cljs.core.map.call(null,(function (j_selects){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex","flex",-1425124628),"no-wrap"], null)], null)], null),cljs.core.map.call(null,mk_filter_checkbox,j_selects));
}),j_major_selects));
});

//# sourceMappingURL=filtering.js.map
