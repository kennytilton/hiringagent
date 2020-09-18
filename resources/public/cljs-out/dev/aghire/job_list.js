// Compiled by ClojureScript 1.10.773 {}
goog.provide('aghire.job_list');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('aghire.db');
goog.require('aghire.filtering');
goog.require('goog.string');
goog.require('cljs.pprint');
goog.require('aghire.utility');
goog.require('aghire.month_loader');
goog.require('aghire.memo');
aghire.job_list.job_header = (function aghire$job_list$job_header(){
return (function (job){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"display","display",242065432),"flex"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.call(null,aghire.utility.app_cursor.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"show-job-details","show-job-details",-1539023325),new cljs.core.Keyword(null,"hn-id","hn-id",1951773016).cljs$core$IFn$_invoke$arity$1(job)], null)),cljs.core.not);
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"color","color",1011675173),"gray",new cljs.core.Keyword(null,"max-height","max-height",-612563804),"16px",new cljs.core.Keyword(null,"margin-right","margin-right",809689658),"9px",new cljs.core.Keyword(null,"display","display",242065432),"block"], null)], null),aghire.utility.unesc.call(null,"&#x2b51")], null),cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632)], null),cljs.core.map.call(null,(function (n){
var G__17529 = n.nodeType;
switch (G__17529) {
case (1):
if(cljs.core._EQ_.call(null,"A",n.tagName)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),n.href], null),n.textContent], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),["Unexpected tagname = ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n.tagName)].join('')], null);
}

break;
case (3):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),n.textContent], null);

break;
default:
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),["Unexpected n type = ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n.nodeType)].join('')], null);

}
}),new cljs.core.Keyword(null,"title-seg","title-seg",-672578680).cljs$core$IFn$_invoke$arity$1(job)))], null);
});
});
aghire.job_list.jump_to_hn = (function aghire$job_list$jump_to_hn(hn_id){
return window.open(cljs.pprint.cl_format.call(null,null,"https://news.ycombinator.com/item?id=~a",hn_id),"_blank");
});
aghire.job_list.node_to_hiccup = (function aghire$job_list$node_to_hiccup(n){
var G__17531 = n.nodeType;
switch (G__17531) {
case (1):
var G__17532 = n.tagName;
switch (G__17532) {
case "A":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),n.href], null),n.textContent], null);

break;
case "P":
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309)], null),cljs.core.map.call(null,aghire.job_list.node_to_hiccup,cljs.core.array_seq.call(null,n.childNodes)));

break;
case "DIV":
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632)], null),cljs.core.map.call(null,aghire.job_list.node_to_hiccup,cljs.core.array_seq.call(null,n.childNodes)));

break;
default:
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),["Unexpected tag = ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n.tagName)].join('')], null);

}

break;
case (3):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),n.textContent], null);

break;
default:
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),["Unexpected n type = ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n.nodeType)].join('')], null);

}
});
aghire.job_list.job_details = (function aghire$job_list$job_details(){
return (function (job){
var deets = aghire.utility._LT_app_cursor.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"show-job-details","show-job-details",-1539023325),new cljs.core.Keyword(null,"hn-id","hn-id",1951773016).cljs$core$IFn$_invoke$arity$1(job)], null));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(deets)?"slideIn":"slideOut"),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"margin","margin",-995903681),"6px",new cljs.core.Keyword(null,"background","background",-863952629),"#fff",new cljs.core.Keyword(null,"display","display",242065432),(cljs.core.truth_(deets)?"block":"none")], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [aghire.memo.job_memo_control_bar,job], null),cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin","margin",-995903681),"6px",new cljs.core.Keyword(null,"overflow","overflow",2058931880),"auto"], null),new cljs.core.Keyword(null,"on-double-click","on-double-click",1434856980),(function (){
return aghire.job_list.jump_to_hn.call(null,new cljs.core.Keyword(null,"hn-id","hn-id",1951773016).cljs$core$IFn$_invoke$arity$1(job));
})], null)], null),(cljs.core.truth_(deets)?cljs.core.map.call(null,aghire.job_list.node_to_hiccup,cljs.core.remove.call(null,(function (n){
return cljs.core._EQ_.call(null,"reply",n.className);
}),new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(job))):null))], null);
});
});
aghire.job_list.job_list_sort = (function aghire$job_list$job_list_sort(jobs){
var map__17535 = cljs.core.deref.call(null,aghire.db.job_sort);
var map__17535__$1 = (((((!((map__17535 == null))))?(((((map__17535.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17535.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17535):map__17535);
var spec = map__17535__$1;
var key_fn = cljs.core.get.call(null,map__17535__$1,new cljs.core.Keyword(null,"key-fn","key-fn",-636154479));
var comp_fn = cljs.core.get.call(null,map__17535__$1,new cljs.core.Keyword(null,"comp-fn","comp-fn",1661028128));
var order = cljs.core.get.call(null,map__17535__$1,new cljs.core.Keyword(null,"order","order",-1254677256));
var prep_fn = cljs.core.get.call(null,map__17535__$1,new cljs.core.Keyword(null,"prep-fn","prep-fn",-237774768));
if(cljs.core.truth_(spec)){
return cljs.core.sort.call(null,(function (j,k){
if(cljs.core.truth_(comp_fn)){
return comp_fn.call(null,order,j,k);
} else {
return (order * (((key_fn.call(null,j) < key_fn.call(null,k)))?(-1):(1)));
}
}),cljs.core.map.call(null,(function (){var or__4126__auto__ = prep_fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.identity;
}
})(),jobs));
} else {
return cljs.core.map.call(null,cljs.core.identity,jobs);

}
});
aghire.job_list.job_list_item = (function aghire$job_list$job_list_item(){
return (function (job_no,job){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"display","display",242065432),(function (){var excluded = aghire.memo._LT_memo_cursor.call(null,job,new cljs.core.Keyword(null,"excluded","excluded",-715952088));
if(cljs.core.truth_((function (){var and__4115__auto__ = excluded;
if(cljs.core.truth_(and__4115__auto__)){
return ((cljs.core.not.call(null,cljs.core.deref.call(null,aghire.db.show_filter_excluded))) && (cljs.core.not.call(null,aghire.utility._LT_app_cursor.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-active","filter-active",-410911794),new cljs.core.Keyword(null,"excluded","excluded",-715952088)], null)))));
} else {
return and__4115__auto__;
}
})())){
return "none";
} else {
return "block";
}
})(),new cljs.core.Keyword(null,"padding","padding",1660304693),"12px",new cljs.core.Keyword(null,"background","background",-863952629),(((cljs.core.mod.call(null,job_no,(2)) === (0)))?"#eee":"#f8f8f8")], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [aghire.job_list.job_header,job], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [aghire.job_list.job_details,job], null)], null);
});
});
aghire.job_list.job_list = (function aghire$job_list$job_list(){
return (function (){
if(aghire.month_loader.month_load_fini.call(null)){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"list-style-type","list-style-type",-1703248598),"none",new cljs.core.Keyword(null,"background","background",-863952629),"#eee",new cljs.core.Keyword(null,"padding","padding",1660304693),(0),new cljs.core.Keyword(null,"margin","margin",-995903681),(0)], null)], null)], null),cljs.core.map.call(null,(function (jn,j){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [aghire.job_list.job_list_item,jn,j], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"hn-id","hn-id",1951773016).cljs$core$IFn$_invoke$arity$1(j)], null));
}),cljs.core.range.call(null),aghire.job_list.job_list_sort.call(null,cljs.core.take.call(null,cljs.core.deref.call(null,aghire.db.job_display_max),cljs.core.deref.call(null,aghire.filtering.jobs_filtered)))));
} else {
return null;
}
});
});

//# sourceMappingURL=job_list.js.map
