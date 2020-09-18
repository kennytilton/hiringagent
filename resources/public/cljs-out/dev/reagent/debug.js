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
var G__11792__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__11792 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11793__i = 0, G__11793__a = new Array(arguments.length -  0);
while (G__11793__i < G__11793__a.length) {G__11793__a[G__11793__i] = arguments[G__11793__i + 0]; ++G__11793__i;}
  args = new cljs.core.IndexedSeq(G__11793__a,0,null);
} 
return G__11792__delegate.call(this,args);};
G__11792.cljs$lang$maxFixedArity = 0;
G__11792.cljs$lang$applyTo = (function (arglist__11794){
var args = cljs.core.seq(arglist__11794);
return G__11792__delegate(args);
});
G__11792.cljs$core$IFn$_invoke$arity$variadic = G__11792__delegate;
return G__11792;
})()
);

(o.error = (function() { 
var G__11795__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__11795 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11796__i = 0, G__11796__a = new Array(arguments.length -  0);
while (G__11796__i < G__11796__a.length) {G__11796__a[G__11796__i] = arguments[G__11796__i + 0]; ++G__11796__i;}
  args = new cljs.core.IndexedSeq(G__11796__a,0,null);
} 
return G__11795__delegate.call(this,args);};
G__11795.cljs$lang$maxFixedArity = 0;
G__11795.cljs$lang$applyTo = (function (arglist__11797){
var args = cljs.core.seq(arglist__11797);
return G__11795__delegate(args);
});
G__11795.cljs$core$IFn$_invoke$arity$variadic = G__11795__delegate;
return G__11795;
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
