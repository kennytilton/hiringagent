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
var seq__16624_16628 = cljs.core.seq.call(null,cljs.core.prim_seq.call(null,dom.children));
var chunk__16625_16629 = null;
var count__16626_16630 = (0);
var i__16627_16631 = (0);
while(true){
if((i__16627_16631 < count__16626_16630)){
var child_16632 = cljs.core._nth.call(null,chunk__16625_16629,i__16627_16631);
aghire.job_parse.job_parse_extend.call(null,spec,child_16632);


var G__16633 = seq__16624_16628;
var G__16634 = chunk__16625_16629;
var G__16635 = count__16626_16630;
var G__16636 = (i__16627_16631 + (1));
seq__16624_16628 = G__16633;
chunk__16625_16629 = G__16634;
count__16626_16630 = G__16635;
i__16627_16631 = G__16636;
continue;
} else {
var temp__5720__auto___16637 = cljs.core.seq.call(null,seq__16624_16628);
if(temp__5720__auto___16637){
var seq__16624_16638__$1 = temp__5720__auto___16637;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16624_16638__$1)){
var c__4556__auto___16639 = cljs.core.chunk_first.call(null,seq__16624_16638__$1);
var G__16640 = cljs.core.chunk_rest.call(null,seq__16624_16638__$1);
var G__16641 = c__4556__auto___16639;
var G__16642 = cljs.core.count.call(null,c__4556__auto___16639);
var G__16643 = (0);
seq__16624_16628 = G__16640;
chunk__16625_16629 = G__16641;
count__16626_16630 = G__16642;
i__16627_16631 = G__16643;
continue;
} else {
var child_16644 = cljs.core.first.call(null,seq__16624_16638__$1);
aghire.job_parse.job_parse_extend.call(null,spec,child_16644);


var G__16645 = cljs.core.next.call(null,seq__16624_16638__$1);
var G__16646 = null;
var G__16647 = (0);
var G__16648 = (0);
seq__16624_16628 = G__16645;
chunk__16625_16629 = G__16646;
count__16626_16630 = G__16647;
i__16627_16631 = G__16648;
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
var temp__5720__auto___16657 = dom.getElementsByClassName("reply");
if(cljs.core.truth_(temp__5720__auto___16657)){
var rs_16658 = temp__5720__auto___16657;
cljs.core.map.call(null,(function (e){
return e.remove();
}),cljs.core.prim_seq.call(null,rs_16658));
} else {
}

var child_16659 = dom.childNodes;
var c0_16660 = (child_16659[(0)]);
cljs.core.swap_BANG_.call(null,spec,cljs.core.assoc,new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.PersistentVector.EMPTY);

if(((cljs.core._EQ_.call(null,(3),c0_16660.nodeType)) && ((cljs.core.count.call(null,cljs.core.filter.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["|",null], null), null),c0_16660.textContent)) > (0))))){
var s_16661 = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"in-header","in-header",-492162324),true,new cljs.core.Keyword(null,"title-seg","title-seg",-672578680),cljs.core.PersistentVector.EMPTY], null));
var seq__16649_16662 = cljs.core.seq.call(null,cljs.core.prim_seq.call(null,child_16659));
var chunk__16650_16663 = null;
var count__16651_16664 = (0);
var i__16652_16665 = (0);
while(true){
if((i__16652_16665 < count__16651_16664)){
var n_16666 = cljs.core._nth.call(null,chunk__16650_16663,i__16652_16665);
if(cljs.core.truth_(new cljs.core.Keyword(null,"in-header","in-header",-492162324).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,s_16661)))){
if(((cljs.core._EQ_.call(null,(1),n_16666.nodeType)) && (cljs.core._EQ_.call(null,"P",n_16666.nodeName)))){
cljs.core.swap_BANG_.call(null,s_16661,cljs.core.assoc,new cljs.core.Keyword(null,"in-header","in-header",-492162324),false);

cljs.core.swap_BANG_.call(null,spec,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body","body",-2049205669)], null),cljs.core.conj,n_16666);
} else {
cljs.core.swap_BANG_.call(null,s_16661,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"title-seg","title-seg",-672578680)], null),cljs.core.conj,n_16666);
}
} else {
cljs.core.swap_BANG_.call(null,spec,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body","body",-2049205669)], null),cljs.core.conj,n_16666);
}


var G__16667 = seq__16649_16662;
var G__16668 = chunk__16650_16663;
var G__16669 = count__16651_16664;
var G__16670 = (i__16652_16665 + (1));
seq__16649_16662 = G__16667;
chunk__16650_16663 = G__16668;
count__16651_16664 = G__16669;
i__16652_16665 = G__16670;
continue;
} else {
var temp__5720__auto___16671 = cljs.core.seq.call(null,seq__16649_16662);
if(temp__5720__auto___16671){
var seq__16649_16672__$1 = temp__5720__auto___16671;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16649_16672__$1)){
var c__4556__auto___16673 = cljs.core.chunk_first.call(null,seq__16649_16672__$1);
var G__16674 = cljs.core.chunk_rest.call(null,seq__16649_16672__$1);
var G__16675 = c__4556__auto___16673;
var G__16676 = cljs.core.count.call(null,c__4556__auto___16673);
var G__16677 = (0);
seq__16649_16662 = G__16674;
chunk__16650_16663 = G__16675;
count__16651_16664 = G__16676;
i__16652_16665 = G__16677;
continue;
} else {
var n_16678 = cljs.core.first.call(null,seq__16649_16672__$1);
if(cljs.core.truth_(new cljs.core.Keyword(null,"in-header","in-header",-492162324).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,s_16661)))){
if(((cljs.core._EQ_.call(null,(1),n_16678.nodeType)) && (cljs.core._EQ_.call(null,"P",n_16678.nodeName)))){
cljs.core.swap_BANG_.call(null,s_16661,cljs.core.assoc,new cljs.core.Keyword(null,"in-header","in-header",-492162324),false);

cljs.core.swap_BANG_.call(null,spec,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body","body",-2049205669)], null),cljs.core.conj,n_16678);
} else {
cljs.core.swap_BANG_.call(null,s_16661,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"title-seg","title-seg",-672578680)], null),cljs.core.conj,n_16678);
}
} else {
cljs.core.swap_BANG_.call(null,spec,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body","body",-2049205669)], null),cljs.core.conj,n_16678);
}


var G__16679 = cljs.core.next.call(null,seq__16649_16672__$1);
var G__16680 = null;
var G__16681 = (0);
var G__16682 = (0);
seq__16649_16662 = G__16679;
chunk__16650_16663 = G__16680;
count__16651_16664 = G__16681;
i__16652_16665 = G__16682;
continue;
}
} else {
}
}
break;
}

var htext_16683 = clojure.string.join.call(null," | ",cljs.core.map.call(null,(function (h){
return h.textContent;
}),new cljs.core.Keyword(null,"title-seg","title-seg",-672578680).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,s_16661))));
var hseg_16684 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,htext_16683,/\|/));
var hsmatch_16685 = (function (rx){
return (!((cljs.core.some.call(null,(function (h){
return h.match(rx);
}),hseg_16684) == null)));
});
cljs.core.swap_BANG_.call(null,spec,cljs.core.assoc,new cljs.core.Keyword(null,"OK","OK",1347916322),true);

cljs.core.swap_BANG_.call(null,spec,cljs.core.assoc,new cljs.core.Keyword(null,"company","company",-340475075),cljs.core.nth.call(null,hseg_16684,(0)));

cljs.core.swap_BANG_.call(null,spec,cljs.core.assoc,new cljs.core.Keyword(null,"title-seg","title-seg",-672578680),new cljs.core.Keyword(null,"title-seg","title-seg",-672578680).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,s_16661)));

cljs.core.swap_BANG_.call(null,spec,cljs.core.assoc,new cljs.core.Keyword(null,"title-search","title-search",-1989051775),htext_16683);

cljs.core.swap_BANG_.call(null,spec,cljs.core.assoc,new cljs.core.Keyword(null,"body-search","body-search",-314155640),clojure.string.join.call(null,"*4*2*",cljs.core.map.call(null,(function (n){
return n.textContent;
}),new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,spec)))));

cljs.core.swap_BANG_.call(null,spec,cljs.core.assoc,new cljs.core.Keyword(null,"remote","remote",-1593576576),((hsmatch_16685.call(null,aghire.job_parse.remoteOK)) && ((!(hsmatch_16685.call(null,aghire.job_parse.noremoteOK))))));

cljs.core.swap_BANG_.call(null,spec,cljs.core.assoc,new cljs.core.Keyword(null,"visa","visa",1658188840),((hsmatch_16685.call(null,aghire.job_parse.visaOK)) && ((!(hsmatch_16685.call(null,aghire.job_parse.novisaOK))))));

cljs.core.swap_BANG_.call(null,spec,cljs.core.assoc,new cljs.core.Keyword(null,"intern","intern",23820624),((hsmatch_16685.call(null,aghire.job_parse.internOK)) && ((!(hsmatch_16685.call(null,aghire.job_parse.nointernOK))))));

cljs.core.swap_BANG_.call(null,spec,cljs.core.assoc,new cljs.core.Keyword(null,"onsite","onsite",318738085),hsmatch_16685.call(null,aghire.job_parse.onsiteOK));
} else {
}
} else {
}

if(cljs.core.not_EQ_.call(null,cn,"reply")){
var seq__16653 = cljs.core.seq.call(null,cljs.core.prim_seq.call(null,dom.children));
var chunk__16654 = null;
var count__16655 = (0);
var i__16656 = (0);
while(true){
if((i__16656 < count__16655)){
var child = cljs.core._nth.call(null,chunk__16654,i__16656);
aghire.job_parse.job_parse_extend.call(null,spec,child);


var G__16686 = seq__16653;
var G__16687 = chunk__16654;
var G__16688 = count__16655;
var G__16689 = (i__16656 + (1));
seq__16653 = G__16686;
chunk__16654 = G__16687;
count__16655 = G__16688;
i__16656 = G__16689;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__16653);
if(temp__5720__auto__){
var seq__16653__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16653__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__16653__$1);
var G__16690 = cljs.core.chunk_rest.call(null,seq__16653__$1);
var G__16691 = c__4556__auto__;
var G__16692 = cljs.core.count.call(null,c__4556__auto__);
var G__16693 = (0);
seq__16653 = G__16690;
chunk__16654 = G__16691;
count__16655 = G__16692;
i__16656 = G__16693;
continue;
} else {
var child = cljs.core.first.call(null,seq__16653__$1);
aghire.job_parse.job_parse_extend.call(null,spec,child);


var G__16694 = cljs.core.next.call(null,seq__16653__$1);
var G__16695 = null;
var G__16696 = (0);
var G__16697 = (0);
seq__16653 = G__16694;
chunk__16654 = G__16695;
count__16655 = G__16696;
i__16656 = G__16697;
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
