// Compiled by ClojureScript 1.10.773 {}
goog.provide('aghire.job_parse');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.set');
aghire.job_parse.dbg = cljs.core.atom.call(null,true);
/**
 * The top-level function that takes a dom node and
 *   tries to extract a job spec to drive the rest of
 *   the app. Note that no job results unless the parser
 *   marks :OK as true.
 */
aghire.job_parse.job_parse = (function aghire$job_parse$job_parse(dom,seen){
if(cljs.core.contains_QMARK_.call(null,seen,dom.id)){
return null;
} else {
var spec = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hn-id","hn-id",1951773016),dom.id], null));
var seq__15553_15557 = cljs.core.seq.call(null,cljs.core.prim_seq.call(null,dom.children));
var chunk__15554_15558 = null;
var count__15555_15559 = (0);
var i__15556_15560 = (0);
while(true){
if((i__15556_15560 < count__15555_15559)){
var child_15561 = cljs.core._nth.call(null,chunk__15554_15558,i__15556_15560);
aghire.job_parse.job_parse_extend.call(null,spec,child_15561);


var G__15562 = seq__15553_15557;
var G__15563 = chunk__15554_15558;
var G__15564 = count__15555_15559;
var G__15565 = (i__15556_15560 + (1));
seq__15553_15557 = G__15562;
chunk__15554_15558 = G__15563;
count__15555_15559 = G__15564;
i__15556_15560 = G__15565;
continue;
} else {
var temp__5720__auto___15566 = cljs.core.seq.call(null,seq__15553_15557);
if(temp__5720__auto___15566){
var seq__15553_15567__$1 = temp__5720__auto___15566;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15553_15567__$1)){
var c__4556__auto___15568 = cljs.core.chunk_first.call(null,seq__15553_15567__$1);
var G__15569 = cljs.core.chunk_rest.call(null,seq__15553_15567__$1);
var G__15570 = c__4556__auto___15568;
var G__15571 = cljs.core.count.call(null,c__4556__auto___15568);
var G__15572 = (0);
seq__15553_15557 = G__15569;
chunk__15554_15558 = G__15570;
count__15555_15559 = G__15571;
i__15556_15560 = G__15572;
continue;
} else {
var child_15573 = cljs.core.first.call(null,seq__15553_15567__$1);
aghire.job_parse.job_parse_extend.call(null,spec,child_15573);


var G__15574 = cljs.core.next.call(null,seq__15553_15567__$1);
var G__15575 = null;
var G__15576 = (0);
var G__15577 = (0);
seq__15553_15557 = G__15574;
chunk__15554_15558 = G__15575;
count__15555_15559 = G__15576;
i__15556_15560 = G__15577;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"OK","OK",1347916322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,spec)))){
return cljs.core.deref.call(null,spec);
} else {
return null;
}
}
});
aghire.job_parse.internOK = (new RegExp("internship|intern|interns","i"));
aghire.job_parse.nointernOK = (new RegExp("no internship|no intern","i"));
aghire.job_parse.visaOK = (new RegExp("visa|visas","i"));
aghire.job_parse.novisaOK = (new RegExp("no visa|no visas","i"));
aghire.job_parse.onsiteOK = (new RegExp("on.?site","i"));
aghire.job_parse.remoteOK = (new RegExp("remote","i"));
aghire.job_parse.noremoteOK = (new RegExp("no remote","i"));
aghire.job_parse.has_class_QMARK_ = (function aghire$job_parse$has_class_QMARK_(dom,class_set){
var temp__5720__auto__ = dom.className;
if(cljs.core.truth_(temp__5720__auto__)){
var raw_class = temp__5720__auto__;
return cljs.core.seq.call(null,clojure.set.intersection.call(null,class_set,cljs.core.set.call(null,clojure.string.split.call(null,raw_class,/ /))));
} else {
return null;
}
});
/**
 * A parsed job (a spec) begins as {:hn-id <HN id>} then
 *   gets extended as we recursively explore the .aThing. Note that
 *   not all aThings are jobs, so look for :ok being set
 */
aghire.job_parse.job_parse_extend = (function aghire$job_parse$job_parse_extend(spec,dom){
var cn = dom.className;
if(cljs.core.truth_(aghire.job_parse.has_class_QMARK_.call(null,dom,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, ["c9c",null,"cae",null,"c5a",null,"c88",null,"c73",null,"c00",null,"cdd",null], null), null)))){
var temp__5720__auto___15586 = dom.getElementsByClassName("reply");
if(cljs.core.truth_(temp__5720__auto___15586)){
var rs_15587 = temp__5720__auto___15586;
cljs.core.map.call(null,(function (e){
return e.remove();
}),cljs.core.prim_seq.call(null,rs_15587));
} else {
}

var child_15588 = dom.childNodes;
var c0_15589 = (child_15588[(0)]);
cljs.core.swap_BANG_.call(null,spec,cljs.core.assoc,new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.PersistentVector.EMPTY);

if(((cljs.core._EQ_.call(null,(3),c0_15589.nodeType)) && ((cljs.core.count.call(null,cljs.core.filter.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["|",null], null), null),c0_15589.textContent)) > (0))))){
var s_15590 = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"in-header","in-header",-492162324),true,new cljs.core.Keyword(null,"title-seg","title-seg",-672578680),cljs.core.PersistentVector.EMPTY], null));
var seq__15578_15591 = cljs.core.seq.call(null,cljs.core.prim_seq.call(null,child_15588));
var chunk__15579_15592 = null;
var count__15580_15593 = (0);
var i__15581_15594 = (0);
while(true){
if((i__15581_15594 < count__15580_15593)){
var n_15595 = cljs.core._nth.call(null,chunk__15579_15592,i__15581_15594);
if(cljs.core.truth_(new cljs.core.Keyword(null,"in-header","in-header",-492162324).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,s_15590)))){
if(((cljs.core._EQ_.call(null,(1),n_15595.nodeType)) && (cljs.core._EQ_.call(null,"P",n_15595.nodeName)))){
cljs.core.swap_BANG_.call(null,s_15590,cljs.core.assoc,new cljs.core.Keyword(null,"in-header","in-header",-492162324),false);

cljs.core.swap_BANG_.call(null,spec,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body","body",-2049205669)], null),cljs.core.conj,n_15595);
} else {
cljs.core.swap_BANG_.call(null,s_15590,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"title-seg","title-seg",-672578680)], null),cljs.core.conj,n_15595);
}
} else {
cljs.core.swap_BANG_.call(null,spec,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body","body",-2049205669)], null),cljs.core.conj,n_15595);
}


var G__15596 = seq__15578_15591;
var G__15597 = chunk__15579_15592;
var G__15598 = count__15580_15593;
var G__15599 = (i__15581_15594 + (1));
seq__15578_15591 = G__15596;
chunk__15579_15592 = G__15597;
count__15580_15593 = G__15598;
i__15581_15594 = G__15599;
continue;
} else {
var temp__5720__auto___15600 = cljs.core.seq.call(null,seq__15578_15591);
if(temp__5720__auto___15600){
var seq__15578_15601__$1 = temp__5720__auto___15600;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15578_15601__$1)){
var c__4556__auto___15602 = cljs.core.chunk_first.call(null,seq__15578_15601__$1);
var G__15603 = cljs.core.chunk_rest.call(null,seq__15578_15601__$1);
var G__15604 = c__4556__auto___15602;
var G__15605 = cljs.core.count.call(null,c__4556__auto___15602);
var G__15606 = (0);
seq__15578_15591 = G__15603;
chunk__15579_15592 = G__15604;
count__15580_15593 = G__15605;
i__15581_15594 = G__15606;
continue;
} else {
var n_15607 = cljs.core.first.call(null,seq__15578_15601__$1);
if(cljs.core.truth_(new cljs.core.Keyword(null,"in-header","in-header",-492162324).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,s_15590)))){
if(((cljs.core._EQ_.call(null,(1),n_15607.nodeType)) && (cljs.core._EQ_.call(null,"P",n_15607.nodeName)))){
cljs.core.swap_BANG_.call(null,s_15590,cljs.core.assoc,new cljs.core.Keyword(null,"in-header","in-header",-492162324),false);

cljs.core.swap_BANG_.call(null,spec,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body","body",-2049205669)], null),cljs.core.conj,n_15607);
} else {
cljs.core.swap_BANG_.call(null,s_15590,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"title-seg","title-seg",-672578680)], null),cljs.core.conj,n_15607);
}
} else {
cljs.core.swap_BANG_.call(null,spec,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body","body",-2049205669)], null),cljs.core.conj,n_15607);
}


var G__15608 = cljs.core.next.call(null,seq__15578_15601__$1);
var G__15609 = null;
var G__15610 = (0);
var G__15611 = (0);
seq__15578_15591 = G__15608;
chunk__15579_15592 = G__15609;
count__15580_15593 = G__15610;
i__15581_15594 = G__15611;
continue;
}
} else {
}
}
break;
}

var htext_15612 = clojure.string.join.call(null," | ",cljs.core.map.call(null,(function (h){
return h.textContent;
}),new cljs.core.Keyword(null,"title-seg","title-seg",-672578680).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,s_15590))));
var hseg_15613 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,htext_15612,/\|/));
var hsmatch_15614 = (function (rx){
return (!((cljs.core.some.call(null,(function (h){
return h.match(rx);
}),hseg_15613) == null)));
});
cljs.core.swap_BANG_.call(null,spec,cljs.core.assoc,new cljs.core.Keyword(null,"OK","OK",1347916322),true);

cljs.core.swap_BANG_.call(null,spec,cljs.core.assoc,new cljs.core.Keyword(null,"company","company",-340475075),cljs.core.nth.call(null,hseg_15613,(0)));

cljs.core.swap_BANG_.call(null,spec,cljs.core.assoc,new cljs.core.Keyword(null,"title-search","title-search",-1989051775),htext_15612);

cljs.core.swap_BANG_.call(null,spec,cljs.core.assoc,new cljs.core.Keyword(null,"body-search","body-search",-314155640),clojure.string.join.call(null,"*4*2*",cljs.core.map.call(null,(function (n){
return n.textContent;
}),new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,spec)))));

cljs.core.swap_BANG_.call(null,spec,cljs.core.assoc,new cljs.core.Keyword(null,"remote","remote",-1593576576),((hsmatch_15614.call(null,aghire.job_parse.remoteOK)) && ((!(hsmatch_15614.call(null,aghire.job_parse.noremoteOK))))));

cljs.core.swap_BANG_.call(null,spec,cljs.core.assoc,new cljs.core.Keyword(null,"visa","visa",1658188840),((hsmatch_15614.call(null,aghire.job_parse.visaOK)) && ((!(hsmatch_15614.call(null,aghire.job_parse.novisaOK))))));

cljs.core.swap_BANG_.call(null,spec,cljs.core.assoc,new cljs.core.Keyword(null,"intern","intern",23820624),((hsmatch_15614.call(null,aghire.job_parse.internOK)) && ((!(hsmatch_15614.call(null,aghire.job_parse.nointernOK))))));

cljs.core.swap_BANG_.call(null,spec,cljs.core.assoc,new cljs.core.Keyword(null,"onsite","onsite",318738085),hsmatch_15614.call(null,aghire.job_parse.onsiteOK));
} else {
}
} else {
}

if(cljs.core.not_EQ_.call(null,cn,"reply")){
var seq__15582 = cljs.core.seq.call(null,cljs.core.prim_seq.call(null,dom.children));
var chunk__15583 = null;
var count__15584 = (0);
var i__15585 = (0);
while(true){
if((i__15585 < count__15584)){
var child = cljs.core._nth.call(null,chunk__15583,i__15585);
aghire.job_parse.job_parse_extend.call(null,spec,child);


var G__15615 = seq__15582;
var G__15616 = chunk__15583;
var G__15617 = count__15584;
var G__15618 = (i__15585 + (1));
seq__15582 = G__15615;
chunk__15583 = G__15616;
count__15584 = G__15617;
i__15585 = G__15618;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__15582);
if(temp__5720__auto__){
var seq__15582__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15582__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__15582__$1);
var G__15619 = cljs.core.chunk_rest.call(null,seq__15582__$1);
var G__15620 = c__4556__auto__;
var G__15621 = cljs.core.count.call(null,c__4556__auto__);
var G__15622 = (0);
seq__15582 = G__15619;
chunk__15583 = G__15620;
count__15584 = G__15621;
i__15585 = G__15622;
continue;
} else {
var child = cljs.core.first.call(null,seq__15582__$1);
aghire.job_parse.job_parse_extend.call(null,spec,child);


var G__15623 = cljs.core.next.call(null,seq__15582__$1);
var G__15624 = null;
var G__15625 = (0);
var G__15626 = (0);
seq__15582 = G__15623;
chunk__15583 = G__15624;
count__15584 = G__15625;
i__15585 = G__15626;
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
});

//# sourceMappingURL=job_parse.js.map
