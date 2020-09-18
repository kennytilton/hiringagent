// Compiled by ClojureScript 1.10.773 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__21011){
var map__21012 = p__21011;
var map__21012__$1 = (((((!((map__21012 == null))))?(((((map__21012.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21012.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21012):map__21012);
var m = map__21012__$1;
var n = cljs.core.get.call(null,map__21012__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__21012__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__4126__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return [(function (){var temp__5720__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5720__auto__)){
var ns = temp__5720__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})());

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__21014_21046 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__21015_21047 = null;
var count__21016_21048 = (0);
var i__21017_21049 = (0);
while(true){
if((i__21017_21049 < count__21016_21048)){
var f_21050 = cljs.core._nth.call(null,chunk__21015_21047,i__21017_21049);
cljs.core.println.call(null,"  ",f_21050);


var G__21051 = seq__21014_21046;
var G__21052 = chunk__21015_21047;
var G__21053 = count__21016_21048;
var G__21054 = (i__21017_21049 + (1));
seq__21014_21046 = G__21051;
chunk__21015_21047 = G__21052;
count__21016_21048 = G__21053;
i__21017_21049 = G__21054;
continue;
} else {
var temp__5720__auto___21055 = cljs.core.seq.call(null,seq__21014_21046);
if(temp__5720__auto___21055){
var seq__21014_21056__$1 = temp__5720__auto___21055;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21014_21056__$1)){
var c__4556__auto___21057 = cljs.core.chunk_first.call(null,seq__21014_21056__$1);
var G__21058 = cljs.core.chunk_rest.call(null,seq__21014_21056__$1);
var G__21059 = c__4556__auto___21057;
var G__21060 = cljs.core.count.call(null,c__4556__auto___21057);
var G__21061 = (0);
seq__21014_21046 = G__21058;
chunk__21015_21047 = G__21059;
count__21016_21048 = G__21060;
i__21017_21049 = G__21061;
continue;
} else {
var f_21062 = cljs.core.first.call(null,seq__21014_21056__$1);
cljs.core.println.call(null,"  ",f_21062);


var G__21063 = cljs.core.next.call(null,seq__21014_21056__$1);
var G__21064 = null;
var G__21065 = (0);
var G__21066 = (0);
seq__21014_21046 = G__21063;
chunk__21015_21047 = G__21064;
count__21016_21048 = G__21065;
i__21017_21049 = G__21066;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_21067 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_21067);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_21067)))?cljs.core.second.call(null,arglists_21067):arglists_21067));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Spec");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__21018_21068 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__21019_21069 = null;
var count__21020_21070 = (0);
var i__21021_21071 = (0);
while(true){
if((i__21021_21071 < count__21020_21070)){
var vec__21032_21072 = cljs.core._nth.call(null,chunk__21019_21069,i__21021_21071);
var name_21073 = cljs.core.nth.call(null,vec__21032_21072,(0),null);
var map__21035_21074 = cljs.core.nth.call(null,vec__21032_21072,(1),null);
var map__21035_21075__$1 = (((((!((map__21035_21074 == null))))?(((((map__21035_21074.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21035_21074.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21035_21074):map__21035_21074);
var doc_21076 = cljs.core.get.call(null,map__21035_21075__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_21077 = cljs.core.get.call(null,map__21035_21075__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_21073);

cljs.core.println.call(null," ",arglists_21077);

if(cljs.core.truth_(doc_21076)){
cljs.core.println.call(null," ",doc_21076);
} else {
}


var G__21078 = seq__21018_21068;
var G__21079 = chunk__21019_21069;
var G__21080 = count__21020_21070;
var G__21081 = (i__21021_21071 + (1));
seq__21018_21068 = G__21078;
chunk__21019_21069 = G__21079;
count__21020_21070 = G__21080;
i__21021_21071 = G__21081;
continue;
} else {
var temp__5720__auto___21082 = cljs.core.seq.call(null,seq__21018_21068);
if(temp__5720__auto___21082){
var seq__21018_21083__$1 = temp__5720__auto___21082;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21018_21083__$1)){
var c__4556__auto___21084 = cljs.core.chunk_first.call(null,seq__21018_21083__$1);
var G__21085 = cljs.core.chunk_rest.call(null,seq__21018_21083__$1);
var G__21086 = c__4556__auto___21084;
var G__21087 = cljs.core.count.call(null,c__4556__auto___21084);
var G__21088 = (0);
seq__21018_21068 = G__21085;
chunk__21019_21069 = G__21086;
count__21020_21070 = G__21087;
i__21021_21071 = G__21088;
continue;
} else {
var vec__21037_21089 = cljs.core.first.call(null,seq__21018_21083__$1);
var name_21090 = cljs.core.nth.call(null,vec__21037_21089,(0),null);
var map__21040_21091 = cljs.core.nth.call(null,vec__21037_21089,(1),null);
var map__21040_21092__$1 = (((((!((map__21040_21091 == null))))?(((((map__21040_21091.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21040_21091.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21040_21091):map__21040_21091);
var doc_21093 = cljs.core.get.call(null,map__21040_21092__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_21094 = cljs.core.get.call(null,map__21040_21092__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_21090);

cljs.core.println.call(null," ",arglists_21094);

if(cljs.core.truth_(doc_21093)){
cljs.core.println.call(null," ",doc_21093);
} else {
}


var G__21095 = cljs.core.next.call(null,seq__21018_21083__$1);
var G__21096 = null;
var G__21097 = (0);
var G__21098 = (0);
seq__21018_21068 = G__21095;
chunk__21019_21069 = G__21096;
count__21020_21070 = G__21097;
i__21021_21071 = G__21098;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5720__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5720__auto__)){
var fnspec = temp__5720__auto__;
cljs.core.print.call(null,"Spec");

var seq__21042 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__21043 = null;
var count__21044 = (0);
var i__21045 = (0);
while(true){
if((i__21045 < count__21044)){
var role = cljs.core._nth.call(null,chunk__21043,i__21045);
var temp__5720__auto___21099__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___21099__$1)){
var spec_21100 = temp__5720__auto___21099__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_21100));
} else {
}


var G__21101 = seq__21042;
var G__21102 = chunk__21043;
var G__21103 = count__21044;
var G__21104 = (i__21045 + (1));
seq__21042 = G__21101;
chunk__21043 = G__21102;
count__21044 = G__21103;
i__21045 = G__21104;
continue;
} else {
var temp__5720__auto____$1 = cljs.core.seq.call(null,seq__21042);
if(temp__5720__auto____$1){
var seq__21042__$1 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21042__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__21042__$1);
var G__21105 = cljs.core.chunk_rest.call(null,seq__21042__$1);
var G__21106 = c__4556__auto__;
var G__21107 = cljs.core.count.call(null,c__4556__auto__);
var G__21108 = (0);
seq__21042 = G__21105;
chunk__21043 = G__21106;
count__21044 = G__21107;
i__21045 = G__21108;
continue;
} else {
var role = cljs.core.first.call(null,seq__21042__$1);
var temp__5720__auto___21109__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___21109__$2)){
var spec_21110 = temp__5720__auto___21109__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_21110));
} else {
}


var G__21111 = cljs.core.next.call(null,seq__21042__$1);
var G__21112 = null;
var G__21113 = (0);
var G__21114 = (0);
seq__21042 = G__21111;
chunk__21043 = G__21112;
count__21044 = G__21113;
i__21045 = G__21114;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.call(null,"js",t.name):null
))], null),(function (){var temp__5720__auto__ = cljs.core.ex_message.call(null,t);
if(cljs.core.truth_(temp__5720__auto__)){
var msg = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = cljs.core.ex_data.call(null,t);
if(cljs.core.truth_(temp__5720__auto__)){
var ed = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})());
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__21115 = cljs.core.conj.call(null,via,t);
var G__21116 = cljs.core.ex_cause.call(null,t);
via = G__21115;
t = G__21116;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek.call(null,via);
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec.call(null,cljs.core.map.call(null,base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5720__auto__ = cljs.core.ex_message.call(null,root);
if(cljs.core.truth_(temp__5720__auto__)){
var root_msg = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = cljs.core.ex_data.call(null,root);
if(cljs.core.truth_(temp__5720__auto__)){
var data = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data.call(null,o));
if(cljs.core.truth_(temp__5720__auto__)){
var phase = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})());
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__21119 = datafied_throwable;
var map__21119__$1 = (((((!((map__21119 == null))))?(((((map__21119.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21119.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21119):map__21119);
var via = cljs.core.get.call(null,map__21119__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__21119__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__21119__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__21120 = cljs.core.last.call(null,via);
var map__21120__$1 = (((((!((map__21120 == null))))?(((((map__21120.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21120.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21120):map__21120);
var type = cljs.core.get.call(null,map__21120__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__21120__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__21120__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__21121 = data;
var map__21121__$1 = (((((!((map__21121 == null))))?(((((map__21121.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21121.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21121):map__21121);
var problems = cljs.core.get.call(null,map__21121__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__21121__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__21121__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__21122 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__21122__$1 = (((((!((map__21122 == null))))?(((((map__21122.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21122.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21122):map__21122);
var top_data = map__21122__$1;
var source = cljs.core.get.call(null,map__21122__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__21127 = phase;
var G__21127__$1 = (((G__21127 instanceof cljs.core.Keyword))?G__21127.fqn:null);
switch (G__21127__$1) {
case "read-source":
var map__21128 = data;
var map__21128__$1 = (((((!((map__21128 == null))))?(((((map__21128.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21128.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21128):map__21128);
var line = cljs.core.get.call(null,map__21128__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__21128__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__21130 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__21130__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__21130,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__21130);
var G__21130__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__21130__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__21130__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__21130__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__21130__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__21131 = top_data;
var G__21131__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__21131,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__21131);
var G__21131__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__21131__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__21131__$1);
var G__21131__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__21131__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__21131__$2);
var G__21131__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__21131__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__21131__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__21131__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__21131__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__21132 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__21132,(0),null);
var method = cljs.core.nth.call(null,vec__21132,(1),null);
var file = cljs.core.nth.call(null,vec__21132,(2),null);
var line = cljs.core.nth.call(null,vec__21132,(3),null);
var G__21135 = top_data;
var G__21135__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__21135,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__21135);
var G__21135__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__21135__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__21135__$1);
var G__21135__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.call(null,G__21135__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__21135__$2);
var G__21135__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__21135__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__21135__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__21135__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__21135__$4;
}

break;
case "execution":
var vec__21136 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__21136,(0),null);
var method = cljs.core.nth.call(null,vec__21136,(1),null);
var file = cljs.core.nth.call(null,vec__21136,(2),null);
var line = cljs.core.nth.call(null,vec__21136,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,(function (p1__21118_SHARP_){
var or__4126__auto__ = (p1__21118_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__21118_SHARP_);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__21139 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__21139__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__21139,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__21139);
var G__21139__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__21139__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__21139__$1);
var G__21139__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
}
})())?cljs.core.assoc.call(null,G__21139__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__21139__$2);
var G__21139__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__21139__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__21139__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__21139__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__21139__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__21127__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__21143){
var map__21144 = p__21143;
var map__21144__$1 = (((((!((map__21144 == null))))?(((((map__21144.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21144.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21144):map__21144);
var triage_data = map__21144__$1;
var phase = cljs.core.get.call(null,map__21144__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__21144__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__21144__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__21144__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__21144__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__21144__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__21144__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__21144__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = source;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = line;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name.call(null,(function (){var or__4126__auto__ = class$;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__21146 = phase;
var G__21146__$1 = (((G__21146 instanceof cljs.core.Keyword))?G__21146.fqn:null);
switch (G__21146__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__21147_21156 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__21148_21157 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__21149_21158 = true;
var _STAR_print_fn_STAR__temp_val__21150_21159 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__21149_21158);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__21150_21159);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__21141_SHARP_){
return cljs.core.dissoc.call(null,p1__21141_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__21148_21157);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__21147_21156);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})():format.call(null,"%s\n",cause)));

break;
case "macroexpansion":
return format.call(null,"Unexpected error%s macroexpanding %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compile-syntax-check":
return format.call(null,"Syntax error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compilation":
return format.call(null,"Unexpected error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "read-eval-result":
return format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "print-eval-result":
return format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "execution":
if(cljs.core.truth_(spec)){
return format.call(null,"Execution error - invalid arguments to %s at (%s).\n%s",symbol,loc,(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__21151_21160 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__21152_21161 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__21153_21162 = true;
var _STAR_print_fn_STAR__temp_val__21154_21163 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__21153_21162);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__21154_21163);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__21142_SHARP_){
return cljs.core.dissoc.call(null,p1__21142_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__21152_21161);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__21151_21160);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__21146__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map
