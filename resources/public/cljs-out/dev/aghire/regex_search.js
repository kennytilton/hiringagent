// Compiled by ClojureScript 1.10.773 {}
goog.provide('aghire.regex_search');
goog.require('cljs.core');
goog.require('aghire.utility');
goog.require('reagent.core');
goog.require('clojure.string');
goog.require('aghire.db');
aghire.regex_search.mk_rgx_match_case = (function aghire$regex_search$mk_rgx_match_case(){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"color","color",1011675173),"#fcfcfc",new cljs.core.Keyword(null,"margin","margin",-995903681),"0 9px 0 0",new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-wrap","flex-wrap",455413707),"wrap",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),"rgxMatchCase",new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"value","value",305978217),aghire.utility._LT_app_cursor.call(null,new cljs.core.Keyword(null,"rgx-match-case","rgx-match-case",195108910)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (){
return cljs.core.swap_BANG_.call(null,aghire.utility.app_cursor.call(null,new cljs.core.Keyword(null,"rgx-match-case","rgx-match-case",195108910)),cljs.core.not);
})], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),"rgxMatchCase"], null),"match case"], null)], null);
});
});
aghire.regex_search.mk_rgx_or_and = (function aghire$regex_search$mk_rgx_or_and(){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"color","color",1011675173),"#fcfcfc",new cljs.core.Keyword(null,"margin","margin",-995903681),"0 9px 0 0",new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-wrap","flex-wrap",455413707),"wrap",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),"rgxOrAnd",new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"checked","checked",-50955819),aghire.utility._LT_app_cursor.call(null,new cljs.core.Keyword(null,"rgx-xlate-or-and","rgx-xlate-or-and",393410817)),new cljs.core.Keyword(null,"title","title",636505583),"Replace 'or/and' with '||/&&' for easier mobile entry.",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (){
return cljs.core.swap_BANG_.call(null,aghire.utility.app_cursor.call(null,new cljs.core.Keyword(null,"rgx-xlate-or-and","rgx-xlate-or-and",393410817)),cljs.core.not);
})], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),"rgxOrAnd"], null),"allow or/and"], null)], null);
});
});
aghire.regex_search.regexHelpEntry = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Press <kbd style='background:cornsilk;font-size:1em'>Enter</kbd> or <kbd style='background:cornsilk;font-size:1em'>Tab</kbd> to activate, including after clearing.",["Separate <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions'>JS RegExp-legal</a> terms with <b>||</b> or ","<b>&&</b> (higher priority) to combine expressions."].join(''),"'Allow or/and' option treats those as ||/&& for easier mobile entry.","Regex terms are split on comma and passed to <b>new RegExp(pattern,flags)</b>.","e.g. Enter <b>taipei,i</b> for case-insensitive search."], null);
aghire.regex_search.mk_rgx_options = (function aghire$regex_search$mk_rgx_options(){
var helping = reagent.core.atom.call(null,false);
return (function (){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,aghire.utility.hz_flex_wrap_centered,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),"12px",new cljs.core.Keyword(null,"margin","margin",-995903681),"4px 0 9px 30px"], null))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [aghire.regex_search.mk_rgx_match_case], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [aghire.regex_search.mk_rgx_or_and], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color","color",1011675173),"white",new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"24px",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_.call(null,helping,cljs.core.not.call(null,cljs.core.deref.call(null,helping)));
})], null),"help"], null)], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [aghire.utility.help_list,aghire.regex_search.regexHelpEntry,helping], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),"opts"], null));
});
});
aghire.regex_search.unparsed_set = (function aghire$regex_search$unparsed_set(scope,raw){
cljs.core.swap_BANG_.call(null,aghire.db.rgx_unparsed,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [scope], null),raw);

return cljs.core.swap_BANG_.call(null,aghire.db.search_history,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [scope], null),aghire.utility.push_new,raw);
});
aghire.regex_search.de_aliased = (function aghire$regex_search$de_aliased(scope){
var temp__5720__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,aghire.db.rgx_unparsed),scope);
if(cljs.core.truth_(temp__5720__auto__)){
var rgx_raw = temp__5720__auto__;
if(cljs.core.truth_(cljs.core.deref.call(null,aghire.db.rgx_xlate_or_and))){
return clojure.string.replace.call(null,clojure.string.replace.call(null,rgx_raw,/\sand\s/," && "),/\sor\s/," || ");
} else {
return rgx_raw;
}
} else {
return null;
}
});
aghire.regex_search.rgx_tree_build = (function aghire$regex_search$rgx_tree_build(scope){
var temp__5720__auto__ = aghire.utility._LT_track.call(null,aghire.regex_search.de_aliased,scope);
if(cljs.core.truth_(temp__5720__auto__)){
var rgx_normal = temp__5720__auto__;
var or_terms = clojure.string.split.call(null,cljs.core.js__GT_clj.call(null,rgx_normal),/\|\|/);
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,(function (or_term){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,(function (and_term){
var vec__15742 = clojure.string.split.call(null,clojure.string.trim.call(null,and_term),",");
var term = cljs.core.nth.call(null,vec__15742,(0),null);
var options = cljs.core.nth.call(null,vec__15742,(1),null);
var netopts = ((((cljs.core.not.call(null,cljs.core.deref.call(null,aghire.db.rgx_match_case))) && ((!(clojure.string.includes_QMARK_.call(null,(function (){var or__4126__auto__ = options;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})(),"i"))))))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(options),"i"].join(''):"");
try{return (new RegExp(term,netopts));
}catch (e15745){if((e15745 instanceof Object)){
var ex = e15745;
alert(["Invalid regex: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(rgx_normal)].join(''));

return null;
} else {
throw e15745;

}
}}),clojure.string.split.call(null,or_term,/&&/)));
})),or_terms);
} else {
return null;
}
});
aghire.regex_search.rgx_tree_match = (function aghire$regex_search$rgx_tree_match(text,tree){
return cljs.core.some.call(null,(function (ands){
if(cljs.core.truth_(ands)){
return cljs.core.every_QMARK_.call(null,(function (andx){
if(cljs.core.truth_(andx)){
return cljs.core.boolean$.call(null,cljs.core.re_find.call(null,andx,text));
} else {
return null;
}
}),ands);
} else {
return null;
}
}),tree);
});

//# sourceMappingURL=regex_search.js.map
