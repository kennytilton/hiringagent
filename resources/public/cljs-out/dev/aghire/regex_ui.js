// Compiled by ClojureScript 1.10.773 {}
goog.provide('aghire.regex_ui');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('cljs.pprint');
goog.require('reagent.core');
goog.require('aghire.utility');
goog.require('aghire.db');
goog.require('aghire.regex_search');
aghire.regex_ui.mk_rgx_match_case = (function aghire$regex_ui$mk_rgx_match_case(){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"color","color",1011675173),"#fcfcfc",new cljs.core.Keyword(null,"margin","margin",-995903681),"0 9px 0 0",new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-wrap","flex-wrap",455413707),"wrap",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),"rgxMatchCase",new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"value","value",305978217),aghire.utility._LT_app_cursor.call(null,new cljs.core.Keyword(null,"rgx-match-case","rgx-match-case",195108910)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (){
return cljs.core.swap_BANG_.call(null,aghire.utility.app_cursor.call(null,new cljs.core.Keyword(null,"rgx-match-case","rgx-match-case",195108910)),cljs.core.not);
})], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),"rgxMatchCase"], null),"match case"], null)], null);
});
});
aghire.regex_ui.mk_rgx_or_and = (function aghire$regex_ui$mk_rgx_or_and(){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"color","color",1011675173),"#fcfcfc",new cljs.core.Keyword(null,"margin","margin",-995903681),"0 9px 0 0",new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-wrap","flex-wrap",455413707),"wrap",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),"rgxOrAnd",new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"checked","checked",-50955819),aghire.utility._LT_app_cursor.call(null,new cljs.core.Keyword(null,"rgx-xlate-or-and","rgx-xlate-or-and",393410817)),new cljs.core.Keyword(null,"title","title",636505583),"Replace 'or/and' with '||/&&' for easier mobile entry.",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (){
return cljs.core.swap_BANG_.call(null,aghire.utility.app_cursor.call(null,new cljs.core.Keyword(null,"rgx-xlate-or-and","rgx-xlate-or-and",393410817)),cljs.core.not);
})], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),"rgxOrAnd"], null),"allow or/and"], null)], null);
});
});
aghire.regex_ui.regexHelpEntry = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Press <kbd style='background:cornsilk;font-size:1em'>Enter</kbd> or <kbd style='background:cornsilk;font-size:1em'>Tab</kbd> to activate, including after clearing.",["Separate <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions'>JS RegExp-legal</a> terms with <b>||</b> or ","<b>&&</b> (higher priority) to combine expressions."].join(''),"'Allow or/and' option treats those as ||/&& for easier mobile entry.","Regex terms are split on comma and passed to <b>new RegExp(pattern,flags)</b>.","e.g. Enter <b>taipei,i</b> for case-insensitive search."], null);
aghire.regex_ui.mk_rgx_options = (function aghire$regex_ui$mk_rgx_options(){
var helping = reagent.core.atom.call(null,false);
return (function (){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,aghire.utility.hz_flex_wrap_centered,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),"12px",new cljs.core.Keyword(null,"margin","margin",-995903681),"4px 0 9px 30px"], null))], null),cljs.core.with_meta(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [aghire.regex_ui.mk_rgx_match_case], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),"mcase"], null)),cljs.core.with_meta(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [aghire.regex_ui.mk_rgx_or_and], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),"andor"], null)),cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color","color",1011675173),"white",new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"24px",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_.call(null,helping,cljs.core.not.call(null,cljs.core.deref.call(null,helping)));
})], null),"help"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),"help"], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [aghire.utility.help_list,aghire.regex_ui.regexHelpEntry,helping], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),"opts"], null));
});
});
/**
 * This is generic enough to handle the two search fields, title only
 *   and the full listing including title
 */
aghire.regex_ui.mk_listing_rgx = (function aghire$regex_ui$mk_listing_rgx(scope,label,desc){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column",new cljs.core.Keyword(null,"margin","margin",-995903681),"6px 18px 0 30px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),"white",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.7em"], null)], null),label], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),cljs.pprint.cl_format.call(null,null,"Regex for ~a search",desc),new cljs.core.Keyword(null,"list","list",765357683),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(scope),"list"].join(''),new cljs.core.Keyword(null,"on-key-press","on-key-press",-399563677),(function (p1__15748_SHARP_){
if(cljs.core._EQ_.call(null,"Enter",cljs.core.js__GT_clj.call(null,p1__15748_SHARP_.key))){
return aghire.regex_search.unparsed_set.call(null,scope,clojure.string.trim.call(null,aghire.utility.target_val.call(null,p1__15748_SHARP_)));
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-blur","on-blur",814300747),(function (p1__15749_SHARP_){
return aghire.regex_search.unparsed_set.call(null,scope,clojure.string.trim.call(null,aghire.utility.target_val.call(null,p1__15749_SHARP_)));
}),new cljs.core.Keyword(null,"on-focus","on-focus",-13737624),(function (p1__15750_SHARP_){
return p1__15750_SHARP_.target.setSelectionRange((0),(999));
}),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"min-width","min-width",1926193728),"72px",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"1em",new cljs.core.Keyword(null,"height","height",1025178622),"2em"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datalist","datalist",-1235043474),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(scope),"list"].join('')], null),(function (){var searches = cljs.core.get.call(null,cljs.core.deref.call(null,aghire.db.search_history),scope);
return cljs.core.map.call(null,(function (h){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),h], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),h], null));
}),searches);
})()], null)], null);
});
aghire.regex_ui.mk_title_rgx = (function aghire$regex_ui$mk_title_rgx(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [aghire.regex_ui.mk_listing_rgx,new cljs.core.Keyword(null,"title","title",636505583),"Title Only","title"], null);
});
aghire.regex_ui.mk_full_rgx = (function aghire$regex_ui$mk_full_rgx(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [aghire.regex_ui.mk_listing_rgx,new cljs.core.Keyword(null,"full","full",436801220),"Full Listing","title and listing"], null);
});
aghire.regex_ui.mk_regex_search = (function aghire$regex_ui$mk_regex_search(){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"24px"], null)], null),"Search"], null),cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"osBody",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),"#ff6600"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [aghire.regex_ui.mk_title_rgx], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [aghire.regex_ui.mk_full_rgx], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [aghire.regex_ui.mk_rgx_options], null)], null))], null);
});
});

//# sourceMappingURL=regex_ui.js.map
