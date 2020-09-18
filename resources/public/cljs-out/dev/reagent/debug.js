// Compiled by ClojureScript 1.10.773 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__10122__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__10122 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10123__i = 0, G__10123__a = new Array(arguments.length -  0);
while (G__10123__i < G__10123__a.length) {G__10123__a[G__10123__i] = arguments[G__10123__i + 0]; ++G__10123__i;}
  args = new cljs.core.IndexedSeq(G__10123__a,0,null);
} 
return G__10122__delegate.call(this,args);};
G__10122.cljs$lang$maxFixedArity = 0;
G__10122.cljs$lang$applyTo = (function (arglist__10124){
var args = cljs.core.seq(arglist__10124);
return G__10122__delegate(args);
});
G__10122.cljs$core$IFn$_invoke$arity$variadic = G__10122__delegate;
return G__10122;
})()
);

(o.error = (function() { 
var G__10125__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__10125 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10126__i = 0, G__10126__a = new Array(arguments.length -  0);
while (G__10126__i < G__10126__a.length) {G__10126__a[G__10126__i] = arguments[G__10126__i + 0]; ++G__10126__i;}
  args = new cljs.core.IndexedSeq(G__10126__a,0,null);
} 
return G__10125__delegate.call(this,args);};
G__10125.cljs$lang$maxFixedArity = 0;
G__10125.cljs$lang$applyTo = (function (arglist__10127){
var args = cljs.core.seq(arglist__10127);
return G__10125__delegate(args);
});
G__10125.cljs$core$IFn$_invoke$arity$variadic = G__10125__delegate;
return G__10125;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=debug.js.map
