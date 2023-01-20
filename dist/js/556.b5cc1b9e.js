"use strict";(self["webpackChunkping_wallet"]=self["webpackChunkping_wallet"]||[]).push([[556],{49556:function(t,e,i){i.r(e),i.d(e,{default:function(){return b}});var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("b-table",{attrs:{items:t.history,fields:t.fields,stacked:"sm"},scopedSlots:t._u([{key:"cell(chain)",fn:function(e){return[i("b-avatar",{attrs:{size:"sm",src:e.item.chain.logo}}),t._v(" "+t._s(e.item.chain.chain_name)+" ")]}},{key:"cell(hash)",fn:function(e){return[i("router-link",{attrs:{to:"/"+e.item.chain.chain_name+"/tx/"+e.value}},[t._v(" "+t._s(e.value)+" ")])]}}])}),i("div",{staticClass:"text-center"},[i("b-button",{on:{click:function(e){return t.clear()}}},[t._v(" Clear History ")])],1)],1)},r=[],n=i(13170),l=i(75200),o=i(15193),c=i(5870),s=i(35436),u={components:{BTable:n.h,BAvatar:l.SH,BButton:o.T},directives:{"b-tooltip":c.o},data(){return{fields:[{key:"chain",label:"BLOCKCHAIN"},{key:"op",label:"ACTION"},{key:"hash",label:"TX HASH"},{key:"time",label:"TIME"}],history:[]}},created(){this.history=(0,s.getLocalTxHistory)()},methods:{clear(){this.history=[],localStorage.setItem("txHistory",[])}}},f=u,d=i(1001),v=(0,d.Z)(f,a,r,!1,null,null,null),b=v.exports},5870:function(t,e,i){i.d(e,{o:function(){return B}});var a=i(94689),r=i(43935),n=i(63294),l=i(11572),o=i(79968),c=i(13597),s=i(68265),u=i(33284),f=i(3058),d=i(93954),v=i(67040),b=i(40960);function h(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,a)}return i}function p(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?h(Object(i),!0).forEach((function(e){m(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):h(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function m(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var y="__BV_Tooltip__",g="hover focus",_={focus:!0,hover:!0,click:!0,blur:!0,manual:!0},w=/^html$/i,P=/^noninteractive$/i,O=/^nofade$/i,k=/^(auto|top(left|right)?|bottom(left|right)?|left(top|bottom)?|right(top|bottom)?)$/i,j=/^(window|viewport|scrollParent)$/i,$=/^d\d+$/i,C=/^ds\d+$/i,x=/^dh\d+$/i,E=/^o-?\d+$/i,H=/^v-.+$/i,T=/\s+/,Z=function(t,e){var i={title:void 0,trigger:"",placement:"top",fallbackPlacement:"flip",container:!1,animation:!0,offset:0,id:null,html:!1,interactive:!0,disabled:!1,delay:(0,o.wJ)(a.qv,"delay",50),boundary:String((0,o.wJ)(a.qv,"boundary","scrollParent")),boundaryPadding:(0,d.Z3)((0,o.wJ)(a.qv,"boundaryPadding",5),0),variant:(0,o.wJ)(a.qv,"variant"),customClass:(0,o.wJ)(a.qv,"customClass")};if((0,u.HD)(t.value)||(0,u.hj)(t.value)||(0,u.mf)(t.value)?i.title=t.value:(0,u.PO)(t.value)&&(i=p(p({},i),t.value)),(0,u.o8)(i.title)){var r=e.data||{};i.title=r.attrs&&!(0,u.Jp)(r.attrs.title)?r.attrs.title:void 0}(0,u.PO)(i.delay)||(i.delay={show:(0,d.Z3)(i.delay,0),hide:(0,d.Z3)(i.delay,0)}),t.arg&&(i.container="#".concat(t.arg)),(0,v.XP)(t.modifiers).forEach((function(t){if(w.test(t))i.html=!0;else if(P.test(t))i.interactive=!1;else if(O.test(t))i.animation=!1;else if(k.test(t))i.placement=t;else if(j.test(t))t="scrollparent"===t?"scrollParent":t,i.boundary=t;else if($.test(t)){var e=(0,d.Z3)(t.slice(1),0);i.delay.show=e,i.delay.hide=e}else C.test(t)?i.delay.show=(0,d.Z3)(t.slice(2),0):x.test(t)?i.delay.hide=(0,d.Z3)(t.slice(2),0):E.test(t)?i.offset=(0,d.Z3)(t.slice(1),0):H.test(t)&&(i.variant=t.slice(2)||null)}));var n={};return(0,l.zo)(i.trigger||"").filter(s.y).join(" ").trim().toLowerCase().split(T).forEach((function(t){_[t]&&(n[t]=!0)})),(0,v.XP)(t.modifiers).forEach((function(t){t=t.toLowerCase(),_[t]&&(n[t]=!0)})),i.trigger=(0,v.XP)(n).join(" "),"blur"===i.trigger&&(i.trigger="focus"),i.trigger||(i.trigger=g),i},D=function(t,e,i){if(r.Qg){var a=Z(e,i);if(!t[y]){var l=i.context;t[y]=new b.j({parent:l,_scopeId:(0,c.P)(l,void 0)}),t[y].__bv_prev_data__={},t[y].$on(n.l0,(function(){(0,u.mf)(a.title)&&t[y].updateData({title:a.title(t)})}))}var o={title:a.title,triggers:a.trigger,placement:a.placement,fallbackPlacement:a.fallbackPlacement,variant:a.variant,customClass:a.customClass,container:a.container,boundary:a.boundary,delay:a.delay,offset:a.offset,noFade:!a.animation,id:a.id,interactive:a.interactive,disabled:a.disabled,html:a.html},s=t[y].__bv_prev_data__;if(t[y].__bv_prev_data__=o,!(0,f.W)(o,s)){var d={target:t};(0,v.XP)(o).forEach((function(e){o[e]!==s[e]&&(d[e]="title"===e&&(0,u.mf)(o[e])?o[e](t):o[e])})),t[y].updateData(d)}}},S=function(t){t[y]&&(t[y].$destroy(),t[y]=null),delete t[y]},B={bind:function(t,e,i){D(t,e,i)},componentUpdated:function(t,e,i){i.context.$nextTick((function(){D(t,e,i)}))},unbind:function(t){S(t)}}}}]);