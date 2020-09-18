// Compiled by ClojureScript 1.10.773 {}
goog.provide('reagent.dom');
goog.require('cljs.core');
goog.require('react_dom');
goog.require('reagent.impl.util');
goog.require('reagent.impl.template');
goog.require('reagent.impl.input');
goog.require('reagent.impl.batching');
goog.require('reagent.impl.protocols');
goog.require('reagent.ratom');
reagent.dom.global$module$react_dom = goog.global["ReactDOM"];
if((typeof reagent !== 'undefined') && (typeof reagent.dom !== 'undefined') && (typeof reagent.dom.roots !== 'undefined')){
} else {
reagent.dom.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.dissoc,container);

return reagent.dom.global$module$react_dom.unmountComponentAtNode(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR__orig_val__11202 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__11203 = true;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__11203);

try{return reagent.dom.global$module$react_dom.render(comp.call(null),container,(function (){
var _STAR_always_update_STAR__orig_val__11204 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__11205 = false;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__11205);

try{cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.assoc,container,comp);

reagent.impl.batching.flush_after_render.call(null);

if((!((callback == null)))){
return callback.call(null);
} else {
return null;
}
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__11204);
}}));
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__11202);
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp.call(null,comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element.
 *   The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var G__11207 = arguments.length;
switch (G__11207) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.call(null,comp,container,reagent.impl.template.default_compiler);
}));

(reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback_or_compiler){
reagent.ratom.flush_BANG_.call(null);

var vec__11208 = ((cljs.core.fn_QMARK_.call(null,callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.impl.template.default_compiler,callback_or_compiler], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [callback_or_compiler,new cljs.core.Keyword(null,"callback","callback",-705136228).cljs$core$IFn$_invoke$arity$1(callback_or_compiler)], null));
var compiler = cljs.core.nth.call(null,vec__11208,(0),null);
var callback = cljs.core.nth.call(null,vec__11208,(1),null);
var f = (function (){
return reagent.impl.protocols.as_element.call(null,compiler,((cljs.core.fn_QMARK_.call(null,comp))?comp.call(null):comp));
});
return reagent.dom.render_comp.call(null,f,container,callback);
}));

(reagent.dom.render.cljs$lang$maxFixedArity = 3);

/**
 * Remove a component from the given DOM node.
 */
reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp.call(null,container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return reagent.dom.global$module$react_dom.findDOMNode(this$);
});
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_.call(null);

var seq__11212_11228 = cljs.core.seq.call(null,cljs.core.deref.call(null,reagent.dom.roots));
var chunk__11213_11229 = null;
var count__11214_11230 = (0);
var i__11215_11231 = (0);
while(true){
if((i__11215_11231 < count__11214_11230)){
var vec__11222_11232 = cljs.core._nth.call(null,chunk__11213_11229,i__11215_11231);
var container_11233 = cljs.core.nth.call(null,vec__11222_11232,(0),null);
var comp_11234 = cljs.core.nth.call(null,vec__11222_11232,(1),null);
reagent.dom.re_render_component.call(null,comp_11234,container_11233);


var G__11235 = seq__11212_11228;
var G__11236 = chunk__11213_11229;
var G__11237 = count__11214_11230;
var G__11238 = (i__11215_11231 + (1));
seq__11212_11228 = G__11235;
chunk__11213_11229 = G__11236;
count__11214_11230 = G__11237;
i__11215_11231 = G__11238;
continue;
} else {
var temp__5720__auto___11239 = cljs.core.seq.call(null,seq__11212_11228);
if(temp__5720__auto___11239){
var seq__11212_11240__$1 = temp__5720__auto___11239;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11212_11240__$1)){
var c__4556__auto___11241 = cljs.core.chunk_first.call(null,seq__11212_11240__$1);
var G__11242 = cljs.core.chunk_rest.call(null,seq__11212_11240__$1);
var G__11243 = c__4556__auto___11241;
var G__11244 = cljs.core.count.call(null,c__4556__auto___11241);
var G__11245 = (0);
seq__11212_11228 = G__11242;
chunk__11213_11229 = G__11243;
count__11214_11230 = G__11244;
i__11215_11231 = G__11245;
continue;
} else {
var vec__11225_11246 = cljs.core.first.call(null,seq__11212_11240__$1);
var container_11247 = cljs.core.nth.call(null,vec__11225_11246,(0),null);
var comp_11248 = cljs.core.nth.call(null,vec__11225_11246,(1),null);
reagent.dom.re_render_component.call(null,comp_11248,container_11247);


var G__11249 = cljs.core.next.call(null,seq__11212_11240__$1);
var G__11250 = null;
var G__11251 = (0);
var G__11252 = (0);
seq__11212_11228 = G__11249;
chunk__11213_11229 = G__11250;
count__11214_11230 = G__11251;
i__11215_11231 = G__11252;
continue;
}
} else {
}
}
break;
}

return reagent.impl.batching.flush_after_render.call(null);
});

//# sourceMappingURL=dom.js.map
