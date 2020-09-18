// Compiled by ClojureScript 1.10.773 {}
goog.provide('aghire.month_loader_ui');
goog.require('cljs.core');
goog.require('aghire.utility');
goog.require('aghire.db');
goog.require('reagent.core');
goog.require('cljs.pprint');
goog.require('aghire.month_loader');



aghire.month_loader_ui.pick_a_month = (function aghire$month_loader_ui$pick_a_month(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pickAMonth","div.pickAMonth",-1966309369),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [aghire.month_loader_ui.month_selector], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),aghire.utility.hz_flex_wrap_centered], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [aghire.month_loader_ui.hn_month_link], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [aghire.month_loader_ui.month_jobs_total], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [aghire.month_loader_ui.month_load_progress_bar], null)], null)], null);
});
aghire.month_loader_ui.month_selector = (function aghire$month_loader_ui$month_selector(){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select.searchMonth","select.searchMonth",-2022930990),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__4126__auto__ = cljs.core.deref.call(null,aghire.month_loader.month_id);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "none";
}
})(),new cljs.core.Keyword(null,"style","style",-496642736),(cljs.core.truth_(cljs.core.deref.call(null,aghire.month_loader.month_id))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"1em",new cljs.core.Keyword(null,"font-style","font-style",-773672352),"italic"], null)),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Select a month",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__17512_SHARP_){
return aghire.month_loader.month_load_initialize.call(null,aghire.utility.target_val.call(null,p1__17512_SHARP_));
})], null)], null),cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"none",new cljs.core.Keyword(null,"disabled","disabled",-1529784218),"disabled"], null),"select a month"], null)], null),cljs.core.map.call(null,(function (p1__17513_SHARP_){
var map__17514 = p1__17513_SHARP_;
var map__17514__$1 = (((((!((map__17514 == null))))?(((((map__17514.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17514.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17514):map__17514);
var hnId = cljs.core.get.call(null,map__17514__$1,new cljs.core.Keyword(null,"hnId","hnId",-122932298));
var desc = cljs.core.get.call(null,map__17514__$1,new cljs.core.Keyword(null,"desc","desc",2093485764));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),hnId], null),desc], null);
}),aghire.month_loader.gMonthlies_cljs.call(null))));
});
aghire.month_loader_ui.hn_month_link = (function aghire$month_loader_ui$hn_month_link(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [aghire.utility.view_on_hn,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-right","margin-right",809689658),"9px"], null)], null),cljs.pprint.cl_format.call(null,null,"https://news.ycombinator.com/item?id=~a",cljs.core.deref.call(null,aghire.month_loader.month_id))], null);
});
aghire.month_loader_ui.month_jobs_total = (function aghire$month_loader_ui$month_jobs_total(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),"#fcfcfc",new cljs.core.Keyword(null,"margin","margin",-995903681),"0 12px 0 12px"], null)], null),["Total jobs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,cljs.core.deref.call(null,aghire.month_loader.month_jobs)))].join('')], null);
});
aghire.month_loader_ui.month_load_progress_bar = (function aghire$month_loader_ui$month_load_progress_bar(){
return (function (){
var vec__17516 = cljs.core.deref.call(null,aghire.month_loader.month_progress);
var phase = cljs.core.nth.call(null,vec__17516,(0),null);
var max = cljs.core.nth.call(null,vec__17516,(1),null);
var progress = cljs.core.nth.call(null,vec__17516,(2),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hidden","hidden",-312506092),(((phase == null)) || (cljs.core._EQ_.call(null,phase,new cljs.core.Keyword(null,"inactive","inactive",-306247616))) || (cljs.core._EQ_.call(null,phase,new cljs.core.Keyword(null,"fini","fini",-375236100))))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),(function (){var G__17519 = phase;
var G__17519__$1 = (((G__17519 instanceof cljs.core.Keyword))?G__17519.fqn:null);
switch (G__17519__$1) {
case "cull-athings":
return "Scrape nodes ";

break;
case "parse-jobs":
return "Parse jobs ";

break;
default:
return "";

}
})()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"progress","progress",244323547),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),progress,new cljs.core.Keyword(null,"max","max",61366548),max], null)], null)], null);
});
});

//# sourceMappingURL=month_loader_ui.js.map
