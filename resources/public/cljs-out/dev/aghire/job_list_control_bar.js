// Compiled by ClojureScript 1.10.773 {}
goog.provide('aghire.job_list_control_bar');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('aghire.utility');
goog.require('aghire.db');
goog.require('aghire.month_loader');
goog.require('aghire.filtering');
aghire.job_list_control_bar.job_expansion_control = (function aghire$job_list_control_bar$job_expansion_control(){
var toggle_all_details_expands = reagent.core.atom.call(null,true);
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"1em",new cljs.core.Keyword(null,"min-width","min-width",1926193728),"128px"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var expand_QMARK_ = cljs.core.deref.call(null,toggle_all_details_expands);
var jobs = cljs.core.deref.call(null,aghire.month_loader.month_jobs);
cljs.core.swap_BANG_.call(null,toggle_all_details_expands,cljs.core.not);

return cljs.core.reset_BANG_.call(null,aghire.db.show_job_details,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4529__auto__ = (function aghire$job_list_control_bar$job_expansion_control_$_iter__17539(s__17540){
return (new cljs.core.LazySeq(null,(function (){
var s__17540__$1 = s__17540;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__17540__$1);
if(temp__5720__auto__){
var s__17540__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__17540__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__17540__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__17542 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__17541 = (0);
while(true){
if((i__17541 < size__4528__auto__)){
var j = cljs.core._nth.call(null,c__4527__auto__,i__17541);
cljs.core.chunk_append.call(null,b__17542,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hn-id","hn-id",1951773016).cljs$core$IFn$_invoke$arity$1(j),expand_QMARK_], null));

var G__17543 = (i__17541 + (1));
i__17541 = G__17543;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17542),aghire$job_list_control_bar$job_expansion_control_$_iter__17539.call(null,cljs.core.chunk_rest.call(null,s__17540__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17542),null);
}
} else {
var j = cljs.core.first.call(null,s__17540__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hn-id","hn-id",1951773016).cljs$core$IFn$_invoke$arity$1(j),expand_QMARK_], null),aghire$job_list_control_bar$job_expansion_control_$_iter__17539.call(null,cljs.core.rest.call(null,s__17540__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__.call(null,jobs);
})()));
})], null),(cljs.core.truth_(cljs.core.deref.call(null,toggle_all_details_expands))?"Expand all":"Collapse all")], null);
});
});
aghire.job_list_control_bar.excluded_count = (function aghire$job_list_control_bar$excluded_count(){
return (function (){
var excluded_ct = cljs.core.deref.call(null,aghire.filtering.jobs_filtered_excluded_ct);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"padding-bottom","padding-bottom",-1899795591),"4px",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"1em",new cljs.core.Keyword(null,"visibility","visibility",1338380893),(((excluded_ct > (0)))?"visible":"hidden"),new cljs.core.Keyword(null,"border","border",1444987323),(cljs.core.truth_(cljs.core.deref.call(null,aghire.db.show_filter_excluded))?"thin solid red":"none"),new cljs.core.Keyword(null,"title","title",636505583),"Show/hide items you have excluded"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.call(null,aghire.db.show_filter_excluded,cljs.core.not);
})], null),[aghire.utility.unesc.call(null,"&#x20E0;"),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(excluded_ct)].join('')], null);
});
});
aghire.job_list_control_bar.result_max = (function aghire$job_list_control_bar$result_max(){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,aghire.utility.hz_flex_wrap_centered,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-right","margin-right",809689658),"6px"], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Show:"], null),(function (){var rmax = cljs.core.deref.call(null,aghire.db.job_display_max);
var set_new_max = (function (event){
return cljs.core.reset_BANG_.call(null,aghire.db.job_display_max,parseInt(aghire.utility.target_val.call(null,event)));
});
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"defaultValue","defaultValue",-586131910),rmax,new cljs.core.Keyword(null,"on-key-press","on-key-press",-399563677),(function (p1__17544_SHARP_){
if(cljs.core._EQ_.call(null,"Enter",cljs.core.js__GT_clj.call(null,p1__17544_SHARP_.key))){
return set_new_max.call(null,p1__17544_SHARP_);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-blur","on-blur",814300747),(function (p1__17545_SHARP_){
return set_new_max.call(null,p1__17545_SHARP_);
}),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"1em",new cljs.core.Keyword(null,"max-width","max-width",-1939924051),"48px",new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"6px",new cljs.core.Keyword(null,"margin-right","margin-right",809689658),"6px"], null)], null)], null);
})()], null);
});
});
aghire.job_list_control_bar.job_listing_control_bar = (function aghire$job_list_control_bar$job_listing_control_bar(){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.listingControlBar","div.listingControlBar",-1593874805),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),aghire.utility.hz_flex_wrap_centered], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"1em",new cljs.core.Keyword(null,"margin-right","margin-right",809689658),"12px"], null)], null),(function (){var jobs = cljs.core.deref.call(null,aghire.filtering.jobs_filtered);
return ["Jobs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,jobs))].join('');
})()], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [aghire.job_list_control_bar.excluded_count], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [aghire.job_list_control_bar.result_max], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [aghire.job_list_control_bar.job_expansion_control], null)], null);
});
});

//# sourceMappingURL=job_list_control_bar.js.map
