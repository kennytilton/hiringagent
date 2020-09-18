// Compiled by ClojureScript 1.10.773 {}
goog.provide('aghire.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('reagent.core');
goog.require('reagent.dom');
goog.require('aghire.utility');
goog.require('aghire.sorting');
goog.require('aghire.month_loader');
goog.require('aghire.month_loader_ui');
goog.require('aghire.job_list');
goog.require('aghire.memo');
goog.require('aghire.job_list_control_bar');
goog.require('aghire.regex_ui');
goog.require('aghire.filtering');
cljs.core.println.call(null,"This text is printed from src/aghire/core.cljs. Go ahead and edit it and see reloading in action.");
aghire.core.multiply = (function aghire$core$multiply(a,b){
return (a * b);
});
if((typeof aghire !== 'undefined') && (typeof aghire.core !== 'undefined') && (typeof aghire.core.app_state !== 'undefined')){
} else {
aghire.core.app_state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),"Hello world!"], null));
}
aghire.core.get_app_element = (function aghire$core$get_app_element(){
return goog.dom.getElement("app");
});
aghire.core.app_help_entry = cljs.core.map.call(null,cljs.core.identity,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Click any job header to show or hide the full listing.","Double-click job description to open listing on HN in new tab.","All filters are ANDed except as you direct within RegExp fields.","Your edits are kept in local storage, so stick to one browser.","Works off page scrapes taken often enough. E-mail <a href='mailto:kentilton@gmail.com'>Kenny</a> if they seem stopped.","RFEs welcome and can be raised <a href='https://github.com/kennytilton/whoshiring/issues'>here</a>. ","Built with <a href='https://github.com/kennytilton/matrix/blob/master/js/matrix/readme.md'>Matrix Inside</a>&trade;.","This page is not affiliated with Hacker News, but...","..thanks to the HN crew for their assistance. All screw-ups remain <a href='https://news.ycombinator.com/user?id=kennytilton'>kennytilton</a>'s.","Graphic design by <a href='https://www.mloboscoart.com'>Michael Lobosco</a>."], null));
aghire.core.app_banner = (function aghire$core$app_banner(){
var helping = reagent.core.atom.call(null,false);
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),"PAPAYAWHIP"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"header","header",119441134),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.about","div.about",-443877635),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Usage hints, and credit where due.",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.call(null,helping,cljs.core.not);
})], null),"Pro Tips"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.headermain","div.headermain",-607258481),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.askhn","span.askhn",1882870684),"Ask HN:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.who","span.who",-26971124),"Who Is Hiring?"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [aghire.utility.help_list,aghire.core.app_help_entry,helping], null)], null);
});
});
aghire.core.landing_page = (function aghire$core$landing_page(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [aghire.core.app_banner], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin","margin",-995903681),(0),new cljs.core.Keyword(null,"background","background",-863952629),"#ffb57d"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [aghire.month_loader_ui.pick_a_month], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [aghire.month_loader.job_listing_loader], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),"#ffb57d"], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [aghire.utility.open_shut_case,new cljs.core.Keyword(null,"show-filters","show-filters",1822583446),"Filters",aghire.filtering.mk_title_selects,aghire.filtering.mk_user_selects], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [aghire.regex_ui.mk_regex_search], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [aghire.sorting.sort_bar], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [aghire.job_list_control_bar.job_listing_control_bar], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [aghire.job_list.job_list], null)], null)], null);
});
aghire.core.mount = (function aghire$core$mount(el){
return reagent.dom.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [aghire.core.landing_page], null),el);
});
aghire.core.mount_app_element = (function aghire$core$mount_app_element(){
var temp__5720__auto__ = aghire.core.get_app_element.call(null);
if(cljs.core.truth_(temp__5720__auto__)){
var el = temp__5720__auto__;
return aghire.core.mount.call(null,el);
} else {
return null;
}
});
aghire.core.mount_app_element.call(null);
aghire.core.on_reload = (function aghire$core$on_reload(){
return aghire.core.mount_app_element.call(null);
});

//# sourceMappingURL=core.js.map
