// Compiled by ClojureScript 1.10.773 {}
goog.provide('aghire.memo');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('goog.string');
goog.require('reagent.core');
goog.require('aghire.utility');
goog.require('aghire.db');
aghire.memo.memo_ensure = (function aghire$memo$memo_ensure(job_id){
if(cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword(null,"job-memos","job-memos",-1705656600).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,aghire.db.app)),job_id)){
return null;
} else {
return cljs.core.swap_BANG_.call(null,aghire.db.job_memos,cljs.core.assoc,job_id,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"hn-id","hn-id",1951773016),job_id,new cljs.core.Keyword(null,"stars","stars",-556837771),(0),new cljs.core.Keyword(null,"notes","notes",-1039600523),"",new cljs.core.Keyword(null,"note-editing","note-editing",817997031),false], null));
}
});
aghire.memo._LT_memo_cursor = (function aghire$memo$_LT_memo_cursor(job,prop){
return aghire.utility._LT_app_cursor.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"job-memos","job-memos",-1705656600),new cljs.core.Keyword(null,"hn-id","hn-id",1951773016).cljs$core$IFn$_invoke$arity$1(job),prop], null));
});
aghire.memo.memo_persist = (function aghire$memo$memo_persist(job_id){
var memo = cljs.core.get_in.call(null,cljs.core.deref.call(null,aghire.db.app),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"job-memos","job-memos",-1705656600),job_id], null));
var nkey = [aghire.db.ls_key,"-memo-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(job_id)].join('');
return localStorage.setItem(nkey,cljs.core.str.cljs$core$IFn$_invoke$arity$1(memo));
});
aghire.memo.memo_prop_toggle = (function aghire$memo$memo_prop_toggle(p__11116,prop){
var map__11117 = p__11116;
var map__11117__$1 = (((((!((map__11117 == null))))?(((((map__11117.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11117.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11117):map__11117);
var hn_id = cljs.core.get.call(null,map__11117__$1,new cljs.core.Keyword(null,"hn-id","hn-id",1951773016));
aghire.memo.memo_ensure.call(null,hn_id);

cljs.core.swap_BANG_.call(null,aghire.utility.app_cursor.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"job-memos","job-memos",-1705656600),hn_id,prop], null)),cljs.core.not);

return aghire.memo.memo_persist.call(null,hn_id);
});
aghire.memo.memo_prop_set = (function aghire$memo$memo_prop_set(p__11119,prop,value){
var map__11120 = p__11119;
var map__11120__$1 = (((((!((map__11120 == null))))?(((((map__11120.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11120.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11120):map__11120);
var hn_id = cljs.core.get.call(null,map__11120__$1,new cljs.core.Keyword(null,"hn-id","hn-id",1951773016));
aghire.memo.memo_ensure.call(null,hn_id);

cljs.core.reset_BANG_.call(null,aghire.utility.app_cursor.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"job-memos","job-memos",-1705656600),hn_id,prop], null)),value);

return aghire.memo.memo_persist.call(null,hn_id);
});
aghire.memo.job_memos_load = (function aghire$memo$job_memos_load(){
return cljs.core.swap_BANG_.call(null,aghire.db.app,cljs.core.assoc,new cljs.core.Keyword(null,"job-memos","job-memos",-1705656600),aghire.utility.ls_get_wild.call(null,[aghire.db.ls_key,"-memo-"].join('')));
});




aghire.memo.job_memo_control_bar = (function aghire$memo$job_memo_control_bar(){
return (function (job){
var note_editing_QMARK_ = reagent.core.atom.call(null,false);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column"], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.userAnnotations","div.userAnnotations",169867496),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [aghire.memo.job_stars,job], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [aghire.memo.applied,job], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [aghire.memo.note_toggle,job,note_editing_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [aghire.memo.exclude_job,job], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [aghire.memo.note_editor,job,note_editing_QMARK_], null)], null);
});
});
aghire.memo.exclude_job = (function aghire$memo$exclude_job(){
return (function (job){
var excluded_QMARK_ = aghire.memo._LT_memo_cursor.call(null,job,new cljs.core.Keyword(null,"excluded","excluded",-715952088));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"color","color",1011675173),(cljs.core.truth_(excluded_QMARK_)?"red":"black"),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"1em",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),(cljs.core.truth_(excluded_QMARK_)?"bolder":"lighter"),new cljs.core.Keyword(null,"margin","margin",-995903681),"4px 4px 8px 0"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return aghire.memo.memo_prop_toggle.call(null,job,new cljs.core.Keyword(null,"excluded","excluded",-715952088));
})], null),aghire.utility.unesc.call(null,"&#x20E0;")], null);
});
});
aghire.memo.MAX_STARS = (3);
aghire.memo.job_stars = (function aghire$memo$job_stars(){
return (function (job){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),aghire.utility.hz_flex_wrap_bottom], null)], null),(function (){var j_stars = aghire.memo._LT_memo_cursor.call(null,job,new cljs.core.Keyword(null,"stars","stars",-556837771));
var iter__4529__auto__ = (function aghire$memo$job_stars_$_iter__11122(s__11123){
return (new cljs.core.LazySeq(null,(function (){
var s__11123__$1 = s__11123;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__11123__$1);
if(temp__5720__auto__){
var s__11123__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__11123__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__11123__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__11125 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__11124 = (0);
while(true){
if((i__11124 < size__4528__auto__)){
var sn = cljs.core._nth.call(null,c__4527__auto__,i__11124);
cljs.core.chunk_append.call(null,b__11125,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"color","color",1011675173),(((j_stars >= (sn + (1))))?"red":"gray")], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__11124,sn,c__4527__auto__,size__4528__auto__,b__11125,s__11123__$2,temp__5720__auto__,j_stars){
return (function (){
return aghire.memo.memo_prop_set.call(null,job,new cljs.core.Keyword(null,"stars","stars",-556837771),((cljs.core._EQ_.call(null,sn,(j_stars - (1))))?(0):(sn + (1))));
});})(i__11124,sn,c__4527__auto__,size__4528__auto__,b__11125,s__11123__$2,temp__5720__auto__,j_stars))
], null),aghire.utility.unesc.call(null,"&#x2605;")], null));

var G__11126 = (i__11124 + (1));
i__11124 = G__11126;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11125),aghire$memo$job_stars_$_iter__11122.call(null,cljs.core.chunk_rest.call(null,s__11123__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11125),null);
}
} else {
var sn = cljs.core.first.call(null,s__11123__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"color","color",1011675173),(((j_stars >= (sn + (1))))?"red":"gray")], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (sn,s__11123__$2,temp__5720__auto__,j_stars){
return (function (){
return aghire.memo.memo_prop_set.call(null,job,new cljs.core.Keyword(null,"stars","stars",-556837771),((cljs.core._EQ_.call(null,sn,(j_stars - (1))))?(0):(sn + (1))));
});})(sn,s__11123__$2,temp__5720__auto__,j_stars))
], null),aghire.utility.unesc.call(null,"&#x2605;")], null),aghire$memo$job_stars_$_iter__11122.call(null,cljs.core.rest.call(null,s__11123__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__.call(null,cljs.core.range.call(null,aghire.memo.MAX_STARS));
})());
});
});
aghire.memo.applied = (function aghire$memo$applied(job){
return (function (job__$1){
var input_id = ["applied?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"hn-id","hn-id",1951773016).cljs$core$IFn$_invoke$arity$1(job__$1))].join('');
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),aghire.utility.hz_flex_wrap_centered], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),input_id,new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"18px"], null),new cljs.core.Keyword(null,"checked","checked",-50955819),(function (){var or__4126__auto__ = aghire.memo._LT_memo_cursor.call(null,job__$1,new cljs.core.Keyword(null,"applied","applied",-1208896155));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return false;
}
})(),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (){
return aghire.memo.memo_prop_toggle.call(null,job__$1,new cljs.core.Keyword(null,"applied","applied",-1208896155));
})], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"for","for",-1323786319),input_id,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),(cljs.core.truth_(aghire.memo._LT_memo_cursor.call(null,job__$1,new cljs.core.Keyword(null,"applied","applied",-1208896155)))?"red":"black")], null)], null),"Applied"], null)], null);
});
});
aghire.memo.note_editor = (function aghire$memo$note_editor(j){
return (function (job,editing_QMARK_){
var set_notes = (function (p1__11127_SHARP_){
return aghire.memo.memo_prop_set.call(null,job,new cljs.core.Keyword(null,"notes","notes",-1039600523),aghire.utility.target_val.call(null,p1__11127_SHARP_));
});
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"padding","padding",1660304693),"8px",new cljs.core.Keyword(null,"margin","margin",-995903681),"0 12px 0 12px",new cljs.core.Keyword(null,"cols","cols",-1914801295),(20),new cljs.core.Keyword(null,"display","display",242065432),(cljs.core.truth_(cljs.core.deref.call(null,editing_QMARK_))?"flex":"none")], null),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Your notes here",new cljs.core.Keyword(null,"on-key-press","on-key-press",-399563677),(function (p1__11128_SHARP_){
if(cljs.core._EQ_.call(null,"Enter",cljs.core.js__GT_clj.call(null,p1__11128_SHARP_.key))){
return set_notes.call(null,p1__11128_SHARP_);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-blur","on-blur",814300747),set_notes,new cljs.core.Keyword(null,"defaultValue","defaultValue",-586131910),(function (){var or__4126__auto__ = aghire.memo._LT_memo_cursor.call(null,job,new cljs.core.Keyword(null,"notes","notes",-1039600523));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})()], null)], null);
});
});
aghire.memo.note_toggle = (function aghire$memo$note_toggle(j){
return (function (job,editing_QMARK_){
var notes = (function (){var or__4126__auto__ = aghire.memo._LT_memo_cursor.call(null,job,new cljs.core.Keyword(null,"notes","notes",-1039600523));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})();
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"18px",new cljs.core.Keyword(null,"color","color",1011675173),(((cljs.core.count.call(null,notes) > (0)))?"red":"black")], null),new cljs.core.Keyword(null,"title","title",636505583),"Show/hide editor for your own notes",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.call(null,editing_QMARK_,cljs.core.not);
})], null),"Notes"], null);
});
});

//# sourceMappingURL=memo.js.map
