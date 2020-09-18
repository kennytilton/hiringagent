// Compiled by ClojureScript 1.10.773 {}
goog.provide('aghire.utility');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('reagent.core');
goog.require('clojure.string');
goog.require('aghire.db');
goog.require('cljs.reader');
aghire.utility.push_new = (function aghire$utility$push_new(coll,x){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([x]),coll))){
return coll;
} else {
return cljs.core.conj.call(null,coll,x);
}
});
aghire.utility.app_cursor = (function aghire$utility$app_cursor(path){
return reagent.core.cursor.call(null,aghire.db.app,((cljs.core.vector_QMARK_.call(null,path))?path:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null)));
});
aghire.utility._LT_app_cursor = (function aghire$utility$_LT_app_cursor(path){
return cljs.core.deref.call(null,aghire.utility.app_cursor.call(null,path));
});
aghire.utility._LT_track = (function aghire$utility$_LT_track(var_args){
var args__4742__auto__ = [];
var len__4736__auto___10968 = arguments.length;
var i__4737__auto___10969 = (0);
while(true){
if((i__4737__auto___10969 < len__4736__auto___10968)){
args__4742__auto__.push((arguments[i__4737__auto___10969]));

var G__10970 = (i__4737__auto___10969 + (1));
i__4737__auto___10969 = G__10970;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return aghire.utility._LT_track.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(aghire.utility._LT_track.cljs$core$IFn$_invoke$arity$variadic = (function (fn,path){
return cljs.core.deref.call(null,cljs.core.apply.call(null,reagent.core.track,fn,path));
}));

(aghire.utility._LT_track.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(aghire.utility._LT_track.cljs$lang$applyTo = (function (seq10966){
var G__10967 = cljs.core.first.call(null,seq10966);
var seq10966__$1 = cljs.core.next.call(null,seq10966);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10967,seq10966__$1);
}));

aghire.utility.io_all_keys = (function aghire$utility$io_all_keys(){
return Object.keys(window.localStorage);
});
/**
 * Loads all localStorage values whose key begins with
 *   prefix into a dictionary, using the rest of the LS key
 * as the dictionary key.
 */
aghire.utility.ls_get_wild = (function aghire$utility$ls_get_wild(prefix){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.call(null,cljs.core.nil_QMARK_,(function (){var iter__4529__auto__ = (function aghire$utility$ls_get_wild_$_iter__10971(s__10972){
return (new cljs.core.LazySeq(null,(function (){
var s__10972__$1 = s__10972;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__10972__$1);
if(temp__5720__auto__){
var s__10972__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__10972__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__10972__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__10974 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__10973 = (0);
while(true){
if((i__10973 < size__4528__auto__)){
var lsk = cljs.core._nth.call(null,c__4527__auto__,i__10973);
cljs.core.chunk_append.call(null,b__10974,((((clojure.string.starts_with_QMARK_.call(null,lsk,prefix)) && ((cljs.core.count.call(null,lsk) > cljs.core.count.call(null,prefix)))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,lsk,cljs.core.count.call(null,prefix)),cljs.reader.read_string.call(null,localStorage.getItem(lsk))], null):null));

var G__10975 = (i__10973 + (1));
i__10973 = G__10975;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10974),aghire$utility$ls_get_wild_$_iter__10971.call(null,cljs.core.chunk_rest.call(null,s__10972__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10974),null);
}
} else {
var lsk = cljs.core.first.call(null,s__10972__$2);
return cljs.core.cons.call(null,((((clojure.string.starts_with_QMARK_.call(null,lsk,prefix)) && ((cljs.core.count.call(null,lsk) > cljs.core.count.call(null,prefix)))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,lsk,cljs.core.count.call(null,prefix)),cljs.reader.read_string.call(null,localStorage.getItem(lsk))], null):null),aghire$utility$ls_get_wild_$_iter__10971.call(null,cljs.core.rest.call(null,s__10972__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__.call(null,aghire.utility.io_all_keys.call(null));
})()));
});
aghire.utility.target_val = (function aghire$utility$target_val(e){
return e.target.value;
});
aghire.utility.hz_flex_wrap = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-wrap","flex-wrap",455413707),"wrap"], null);
aghire.utility.hz_flex_wrap_centered = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-wrap","flex-wrap",455413707),"wrap",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center"], null);
aghire.utility.hz_flex_wrap_bottom = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-wrap","flex-wrap",455413707),"wrap",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"bottom"], null);
aghire.utility.unesc = (function aghire$utility$unesc(entity){
return goog.string.unescapeEntities(entity);
});
aghire.utility.slide_in_anime = (function aghire$utility$slide_in_anime(show_QMARK_){
if(cljs.core.truth_(show_QMARK_)){
return "slideIn";
} else {
return "slideOut";
}
});
aghire.utility.help_list = (function aghire$utility$help_list(helpItems,helping){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),["help ",aghire.utility.slide_in_anime.call(null,cljs.core.deref.call(null,helping))].join(''),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),(cljs.core.truth_(cljs.core.deref.call(null,helping))?"block":"none"),new cljs.core.Keyword(null,"margin-top","margin-top",392161226),(0),new cljs.core.Keyword(null,"padding-top","padding-top",1929675955),"6px"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (mx){
return cljs.core.reset_BANG_.call(null,helping,false);
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"textAlign","textAlign",-711351626),"left",new cljs.core.Keyword(null,"marginRight","marginRight",457313535),"18px"], null)], null),cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"listStyle","listStyle",1805423737),"none",new cljs.core.Keyword(null,"marginLeft","marginLeft",-551287007),(0)], null)], null)], null),cljs.core.map.call(null,(function (e){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding","padding",1660304693),(0),new cljs.core.Keyword(null,"margin","margin",-995903681),"0 18px 9px 0"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",-554971138),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"__html","__html",674048345),e], null)], null)], null)], null);
}),helpItems))], null)], null);
});
});
aghire.utility.view_on_hn = (function aghire$utility$view_on_hn(){
return (function (attrs,uri){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),uri,new cljs.core.Keyword(null,"title","title",636505583),"View on the HN site"], null),attrs),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),"dist/hn24.png"], null)], null)], null);
});
});
aghire.utility.toggle_char = (function aghire$utility$toggle_char(db_key,title,on_char,off_char,attrs,style){
return (function (){
var on_off = aghire.utility.app_cursor.call(null,db_key);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"bold",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"9px",new cljs.core.Keyword(null,"font-family","font-family",-667419874),"Arial",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"1em"], null),style),new cljs.core.Keyword(null,"title","title",636505583),title,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.call(null,on_off,cljs.core.not);
})], null),attrs),aghire.utility.unesc.call(null,(cljs.core.truth_(cljs.core.deref.call(null,on_off))?on_char:off_char))], null);
});
});
aghire.utility.open_shut_case = (function aghire$utility$open_shut_case(var_args){
var args__4742__auto__ = [];
var len__4736__auto___10983 = arguments.length;
var i__4737__auto___10984 = (0);
while(true){
if((i__4737__auto___10984 < len__4736__auto___10983)){
args__4742__auto__.push((arguments[i__4737__auto___10984]));

var G__10985 = (i__4737__auto___10984 + (1));
i__4737__auto___10984 = G__10985;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return aghire.utility.open_shut_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(aghire.utility.open_shut_case.cljs$core$IFn$_invoke$arity$variadic = (function (toggle_db_key,title,cases){
return (function (){
var open_QMARK_ = aghire.utility._LT_app_cursor.call(null,toggle_db_key);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.selector","div.selector",749885639),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),title], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [aghire.utility.toggle_char,toggle_db_key,["Show/hide ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(title)].join(''),"&#x25be","&#x25b8",cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY], null)], null),cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),["osBody ",aghire.utility.slide_in_anime.call(null,open_QMARK_)].join(''),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"background","background",-863952629),"#ff6600",new cljs.core.Keyword(null,"padding","padding",1660304693),"6px",new cljs.core.Keyword(null,"display","display",242065432),(cljs.core.truth_(open_QMARK_)?"block":"none")], null)], null)], null),(function (){var iter__4529__auto__ = (function aghire$utility$iter__10979(s__10980){
return (new cljs.core.LazySeq(null,(function (){
var s__10980__$1 = s__10980;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__10980__$1);
if(temp__5720__auto__){
var s__10980__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__10980__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__10980__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__10982 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__10981 = (0);
while(true){
if((i__10981 < size__4528__auto__)){
var case$ = cljs.core._nth.call(null,c__4527__auto__,i__10981);
cljs.core.chunk_append.call(null,b__10982,case$.call(null));

var G__10986 = (i__10981 + (1));
i__10981 = G__10986;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10982),aghire$utility$iter__10979.call(null,cljs.core.chunk_rest.call(null,s__10980__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10982),null);
}
} else {
var case$ = cljs.core.first.call(null,s__10980__$2);
return cljs.core.cons.call(null,case$.call(null),aghire$utility$iter__10979.call(null,cljs.core.rest.call(null,s__10980__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__.call(null,cases);
})())], null);
});
}));

(aghire.utility.open_shut_case.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(aghire.utility.open_shut_case.cljs$lang$applyTo = (function (seq10976){
var G__10977 = cljs.core.first.call(null,seq10976);
var seq10976__$1 = cljs.core.next.call(null,seq10976);
var G__10978 = cljs.core.first.call(null,seq10976__$1);
var seq10976__$2 = cljs.core.next.call(null,seq10976__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10977,G__10978,seq10976__$2);
}));


//# sourceMappingURL=utility.js.map
