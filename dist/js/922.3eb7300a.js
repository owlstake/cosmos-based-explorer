"use strict";(self["webpackChunkping_wallet"]=self["webpackChunkping_wallet"]||[]).push([[922],{7922:function(t,e,a){a.r(e),a.d(e,{default:function(){return C}});var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.pingVals&&t.pingVals.length>0?a("b-card",{staticClass:"overflow-auto",attrs:{title:"❤️ Helping Ping.pub By Staking ❤️"}},[a("b-table",{attrs:{items:t.pingVals,fields:t.validator_fields,"sort-desc":!0,"sort-by":"tokens",striped:"",hover:"",responsive:"sm"},scopedSlots:t._u([{key:"cell(index)",fn:function(e){return[t._v(" "+t._s(e.index+1)+" ")]}},{key:"cell(description)",fn:function(e){return[a("b-media",{staticClass:"text-truncate",staticStyle:{"max-width":"320px"},attrs:{"vertical-align":"center"},scopedSlots:t._u([{key:"aside",fn:function(){return[e.item.avatar?a("b-avatar",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.v-primary",modifiers:{hover:!0,"v-primary":!0}},{name:"b-tooltip",rawName:"v-b-tooltip.hover.right",value:e.item.description.details,expression:"data.item.description.details",modifiers:{hover:!0,right:!0}}],attrs:{size:"32",variant:"light-primary",src:e.item.avatar}}):t._e(),e.item.avatar?t._e():a("b-avatar",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.v-primary",modifiers:{hover:!0,"v-primary":!0}},{name:"b-tooltip",rawName:"v-b-tooltip.hover.right",value:e.item.description.details,expression:"data.item.description.details",modifiers:{hover:!0,right:!0}}]},[a("feather-icon",{attrs:{icon:"ServerIcon"}})],1)]},proxy:!0}],null,!0)},[a("span",{staticClass:"font-weight-bolder d-block text-nowrap"},[a("router-link",{attrs:{to:"./staking/"+e.item.operator_address}},[t._v(" "+t._s(e.item.description.moniker)+" ")])],1),a("small",{staticClass:"text-muted"},[t._v(t._s(e.item.description.website||e.item.description.identity))])])]}},{key:"cell(tokens)",fn:function(e){return[e.item.tokens>0?a("div",{staticClass:"d-flex flex-column"},[a("span",{staticClass:"font-weight-bold mb-0"},[t._v(t._s(t.tokenFormatter(e.item.tokens,t.stakingParameters.bond_denom)))]),a("span",{staticClass:"font-small-2 text-muted text-nowrap d-none d-lg-block"},[t._v(t._s(t.percent(e.item.tokens/t.stakingPool))+"%")])]):a("span",[t._v(t._s(e.item.delegator_shares))])]}},{key:"cell(changes)",fn:function(e){return[e.item.changes>0?a("small",{staticClass:"text-success"},[t._v("+"+t._s(e.item.changes))]):0===e.item.changes?a("small",[t._v("-")]):a("small",{staticClass:"text-danger"},[t._v(t._s(e.item.changes))])]}},{key:"cell(operation)",fn:function(e){return[a("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.operation-modal",modifiers:{"operation-modal":!0}}],attrs:{name:e.item.operator_address,variant:"primary",size:"sm"},on:{click:function(a){return t.selectValidator(e.item.operator_address)}}},[t._v(" Delegate ")])]}}],null,!1,1954446711)})],1):t._e(),a("b-card",{staticClass:"overflow-auto",attrs:{"no-body":""}},[a("b-card-header",{staticClass:"d-flex justify-content-between"},[a("b-form-group",{staticClass:"mb-0"},[a("b-form-radio-group",{attrs:{id:"btn-radios-1","button-variant":"outline-primary",options:t.statusOptions,buttons:"",name:"radios-btn-default"},on:{change:t.getValidatorListByStatus},model:{value:t.selectedStatus,callback:function(e){t.selectedStatus=e},expression:"selectedStatus"}})],1),a("b-card-title",{staticClass:"d-none d-sm-block"},[a("span",[t._v("Validators "+t._s(t.validators.length)+"/"+t._s(t.stakingParameters.max_validators)+" ")])])],1),a("b-card-body",{staticClass:"pl-0 pr-0 pb-0"},[a("b-table",{staticClass:"mb-0",attrs:{items:t.list,fields:t.validator_fields,"sort-desc":!0,"sort-by":"tokens",striped:"",hover:"",responsive:"sm"},scopedSlots:t._u([{key:"cell(index)",fn:function(e){return[a("b-badge",{attrs:{variant:t.rankBadge(e)}},[t._v(" "+t._s(e.index+1)+" ")])]}},{key:"cell(description)",fn:function(e){return[a("b-media",{staticClass:"text-truncate",staticStyle:{"max-width":"320px"},attrs:{"vertical-align":"center"},scopedSlots:t._u([{key:"aside",fn:function(){return[e.item.avatar?a("b-avatar",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.v-primary",modifiers:{hover:!0,"v-primary":!0}},{name:"b-tooltip",rawName:"v-b-tooltip.hover.right",value:e.item.description.details,expression:"data.item.description.details",modifiers:{hover:!0,right:!0}}],attrs:{size:"32",variant:"light-primary",src:e.item.avatar}}):t._e(),e.item.avatar?t._e():a("b-avatar",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.v-primary",modifiers:{hover:!0,"v-primary":!0}},{name:"b-tooltip",rawName:"v-b-tooltip.hover.right",value:e.item.description.details,expression:"data.item.description.details",modifiers:{hover:!0,right:!0}}]},[a("feather-icon",{attrs:{icon:"ServerIcon"}})],1)]},proxy:!0}],null,!0)},[a("span",{staticClass:"font-weight-bolder d-block text-nowrap"},[a("router-link",{attrs:{to:"./staking/"+e.item.operator_address}},[t._v(" "+t._s(e.item.description.moniker)+" ")])],1),a("small",{staticClass:"text-muted"},[t._v(t._s(e.item.description.website||e.item.description.identity))])])]}},{key:"cell(tokens)",fn:function(e){return[e.item.tokens>0?a("div",{staticClass:"d-flex flex-column"},[a("span",{staticClass:"font-weight-bold mb-0"},[t._v(t._s(t.tokenFormatter(e.item.tokens,t.stakingParameters.bond_denom)))]),a("span",{staticClass:"font-small-2 text-muted text-nowrap d-none d-lg-block"},[t._v(t._s(t.percent(e.item.tokens/t.stakingPool))+"%")])]):a("span",[t._v(t._s(e.item.delegator_shares))])]}},{key:"cell(changes)",fn:function(e){return[e.item.changes>0?a("small",{staticClass:"text-success"},[t._v("+"+t._s(e.item.changes))]):0===e.item.changes?a("small",[t._v("-")]):a("small",{staticClass:"text-danger"},[t._v(t._s(e.item.changes))])]}},{key:"cell(operation)",fn:function(e){return[a("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.operation-modal",modifiers:{"operation-modal":!0}}],attrs:{name:e.item.operator_address,variant:"primary",size:"sm"},on:{click:function(a){return t.selectValidator(e.item.operator_address)}}},[t._v(" Delegate ")])]}}])})],1),a("b-card-footer",{staticClass:"d-none d-md-block"},[a("small",[a("b-badge",{attrs:{variant:"danger"}},[t._v("   ")]),t._v(" Top 33% "),a("b-badge",{attrs:{variant:"warning"}},[t._v("   ")]),t._v(" Top 67% of Voting Power ")],1)])],1),a("operation-modal",{attrs:{type:"Delegate","validator-address":t.validator_address}}),a("div",{attrs:{id:"txevent"}})],1)},r=[],s=a(8775),n=a(13170),o=a(72775),l=a(75200),d=a(26034),c=a(87047),u=a(49379),p=a(40670),v=a(15193),m=a(62135),h=a(54013),f=a(37674),g=a(5870),b=a(35436),y=a(8392),_=a(92901),k={components:{BCard:s._,BTable:n.h,BMedia:o.P,BAvatar:l.SH,BBadge:d.k,BCardHeader:c.p,BCardTitle:u._,BCardBody:p.O,BButton:v.T,BFormRadioGroup:m.Q,BFormGroup:h.x,BCardFooter:f.F,OperationModal:_.Z},directives:{"b-tooltip":g.o},data(){return{islive:!0,validator_address:null,mintInflation:0,stakingPool:1,stakingParameters:new b.StakingParameters,validators:[],delegations:[],changes:{},latestPower:{},previousPower:{},validator_fields:[{key:"index",label:"#",tdClass:"d-none d-md-block",thClass:"d-none d-md-block"},{key:"description",label:"Validator"},{key:"tokens",label:"Voting Power",sortable:!0,tdClass:"text-right",thClass:"text-right",sortByFormatted:!0},{key:"changes",label:"24H Changes"},{key:"commission",formatter:t=>`${(0,b.percent)(t.rate)}%`,tdClass:"text-right",thClass:"text-right"},{key:"operation",label:"",tdClass:"text-right",thClass:"text-right"}],statusOptions:[{text:"Active",value:"active"},{text:"Inactive",value:"inactive"}],selectedStatus:"active",isInactiveLoaded:!1,inactiveValidators:[]}},computed:{pingVals(){return this.list.filter((t=>"6783E9F948541962"===t.description.identity))},list(){const t="active"===this.selectedStatus?this.validators:this.inactiveValidators;return t.map((t=>{const e=t;if(Object.keys(this.latestPower).length>0&&Object.keys(this.previousPower).length>0){const a=this.latestPower[t.consensus_pubkey.value]||0,i=this.previousPower[t.consensus_pubkey.value]||0;e.changes=a-i}return e}))}},created(){this.$http.getStakingPool().then((t=>{this.stakingPool=t.bondedToken})),this.$http.getStakingParameters().then((t=>{this.stakingParameters=t})),this.initial()},beforeDestroy(){this.islive=!1},mounted(){const t=document.getElementById("txevent");t.addEventListener("txcompleted",(()=>{this.initial()}))},methods:{initial(){this.$http.getValidatorList().then((t=>{const e=[],a=t;for(let r=0;r<a.length;r+=1){const{identity:t}=a[r].description,i=this.$store.getters["chains/getAvatarById"](t);i?a[r].avatar=i:t&&""!==t&&e.push(t)}let i=Promise.resolve();e.forEach((t=>{i=i.then((()=>new Promise((e=>{this.avatar(t,e)}))))})),this.validators=a,this.getPreviousPower(this.validators.length)}))},getPreviousPower(t){this.$http.getValidatorListByHeight("latest",0).then((e=>{let a=Number(e.block_height);a>14400?a-=14400:a=1,e.validators.forEach((t=>{this.$set(this.latestPower,t.pub_key.key,Number(t.voting_power))}));for(let i=100;i<t;i+=100)this.$http.getValidatorListByHeight("latest",i).then((t=>{t.validators.forEach((t=>{this.$set(this.latestPower,t.pub_key.key,Number(t.voting_power))}))}));for(let i=0;i<t;i+=100)this.$http.getValidatorListByHeight(a,i).then((t=>{t.validators.forEach((t=>{this.$set(this.previousPower,t.pub_key.key,Number(t.voting_power))}))}))}))},getValidatorListByStatus(){if(this.isInactiveLoaded)return;const t=["BOND_STATUS_UNBONDED","BOND_STATUS_UNBONDING"];t.forEach((t=>{this.$http.getValidatorListByStatus(t).then((t=>{const e=[],a=t;for(let r=0;r<a.length;r+=1){const{identity:t}=a[r].description,i=this.$store.getters["chains/getAvatarById"](t);i?a[r].avatar=i:t&&""!==t&&e.push(t)}let i=Promise.resolve();e.forEach((t=>{i=i.then((()=>new Promise((e=>{this.avatar(t,e)}))))})),this.inactiveValidators=this.inactiveValidators.concat(t)}))})),this.isInactiveLoaded=!0},selectValidator(t){this.validator_address=t},percent:b.percent,tokenFormatter(t,e){return(0,b.formatToken)({amount:t,denom:e},{},0)},rankBadge(t){if("inactive"===this.selectedStatus)return"primary";const{index:e,item:a}=t;0===e?window.sum=a.tokens:window.sum+=a.tokens;const i=window.sum/this.stakingPool;return i<.333?"danger":i<.67?"warning":"primary"},avatar(t,e){this.islive&&(0,y.i)(t).then((a=>{if(e(),Array.isArray(a.them)&&a.them.length>0){const e=a.them[0].pictures;if(e){const a="active"===this.selectedStatus?this.validators:this.inactiveValidators,i=a.find((e=>e.description.identity===t));this.$set(i,"avatar",e.primary.url),this.$store.commit("cacheAvatar",{identity:t,url:e.primary.url})}}}))}}},w=k,P=a(1001),x=(0,P.Z)(w,i,r,!1,null,null,null),C=x.exports},26034:function(t,e,a){a.d(e,{k:function(){return f}});var i=a(20144),r=a(69558),s=a(94689),n=a(12299),o=a(67040),l=a(20451),d=a(30488),c=a(67347);function u(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,i)}return a}function p(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?u(Object(a),!0).forEach((function(e){v(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):u(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function v(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var m=(0,o.CE)(c.NQ,["event","routerTag"]);delete m.href.default,delete m.to.default;var h=(0,l.y2)((0,o.GE)(p(p({},m),{},{pill:(0,l.pi)(n.U5,!1),tag:(0,l.pi)(n.N0,"span"),variant:(0,l.pi)(n.N0,"secondary")})),s.dJ),f=i["default"].extend({name:s.dJ,functional:!0,props:h,render:function(t,e){var a=e.props,i=e.data,s=e.children,n=a.active,o=a.disabled,u=(0,d.u$)(a),p=u?c.we:a.tag,v=a.variant||"secondary";return t(p,(0,r.b)(i,{staticClass:"badge",class:["badge-".concat(v),{"badge-pill":a.pill,active:n,disabled:o}],props:u?(0,l.uj)(m,a):{}}),s)}})},87272:function(t,e,a){a.d(e,{D:function(){return c}});var i=a(20144),r=a(69558),s=a(94689),n=a(12299),o=a(20451);function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var d=(0,o.y2)({right:(0,o.pi)(n.U5,!1),tag:(0,o.pi)(n.N0,"div"),verticalAlign:(0,o.pi)(n.N0,"top")},s.u7),c=i["default"].extend({name:s.u7,functional:!0,props:d,render:function(t,e){var a=e.props,i=e.data,s=e.children,n=a.verticalAlign,o="top"===n?"start":"bottom"===n?"end":n;return t(a.tag,(0,r.b)(i,{staticClass:"media-aside",class:l({"media-aside-right":a.right},"align-self-".concat(o),o)}),s)}})},81843:function(t,e,a){a.d(e,{D:function(){return d}});var i=a(20144),r=a(69558),s=a(94689),n=a(12299),o=a(20451),l=(0,o.y2)({tag:(0,o.pi)(n.N0,"div")},s.Ub),d=i["default"].extend({name:s.Ub,functional:!0,props:l,render:function(t,e){var a=e.props,i=e.data,s=e.children;return t(a.tag,(0,r.b)(i,{staticClass:"media-body"}),s)}})},72775:function(t,e,a){a.d(e,{P:function(){return v}});var i=a(20144),r=a(69558),s=a(94689),n=a(12299),o=a(90494),l=a(72345),d=a(20451),c=a(87272),u=a(81843),p=(0,d.y2)({noBody:(0,d.pi)(n.U5,!1),rightAlign:(0,d.pi)(n.U5,!1),tag:(0,d.pi)(n.N0,"div"),verticalAlign:(0,d.pi)(n.N0,"top")},s.vF),v=i["default"].extend({name:s.vF,functional:!0,props:p,render:function(t,e){var a=e.props,i=e.data,s=e.slots,n=e.scopedSlots,d=e.children,p=a.noBody,v=a.rightAlign,m=a.verticalAlign,h=p?d:[];if(!p){var f={},g=s(),b=n||{};h.push(t(u.D,(0,l.O)(o.Pq,f,b,g)));var y=(0,l.O)(o.Q2,f,b,g);y&&h[v?"push":"unshift"](t(c.D,{props:{right:v,verticalAlign:m}},y))}return t(a.tag,(0,r.b)(i,{staticClass:"media"}),h)}})},5870:function(t,e,a){a.d(e,{o:function(){return A}});var i=a(94689),r=a(43935),s=a(63294),n=a(11572),o=a(79968),l=a(13597),d=a(68265),c=a(33284),u=a(3058),p=a(93954),v=a(67040),m=a(40960);function h(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,i)}return a}function f(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?h(Object(a),!0).forEach((function(e){g(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):h(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function g(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var b="__BV_Tooltip__",y="hover focus",_={focus:!0,hover:!0,click:!0,blur:!0,manual:!0},k=/^html$/i,w=/^noninteractive$/i,P=/^nofade$/i,x=/^(auto|top(left|right)?|bottom(left|right)?|left(top|bottom)?|right(top|bottom)?)$/i,C=/^(window|viewport|scrollParent)$/i,O=/^d\d+$/i,B=/^ds\d+$/i,j=/^dh\d+$/i,S=/^o-?\d+$/i,$=/^v-.+$/i,N=/\s+/,D=function(t,e){var a={title:void 0,trigger:"",placement:"top",fallbackPlacement:"flip",container:!1,animation:!0,offset:0,id:null,html:!1,interactive:!0,disabled:!1,delay:(0,o.wJ)(i.qv,"delay",50),boundary:String((0,o.wJ)(i.qv,"boundary","scrollParent")),boundaryPadding:(0,p.Z3)((0,o.wJ)(i.qv,"boundaryPadding",5),0),variant:(0,o.wJ)(i.qv,"variant"),customClass:(0,o.wJ)(i.qv,"customClass")};if((0,c.HD)(t.value)||(0,c.hj)(t.value)||(0,c.mf)(t.value)?a.title=t.value:(0,c.PO)(t.value)&&(a=f(f({},a),t.value)),(0,c.o8)(a.title)){var r=e.data||{};a.title=r.attrs&&!(0,c.Jp)(r.attrs.title)?r.attrs.title:void 0}(0,c.PO)(a.delay)||(a.delay={show:(0,p.Z3)(a.delay,0),hide:(0,p.Z3)(a.delay,0)}),t.arg&&(a.container="#".concat(t.arg)),(0,v.XP)(t.modifiers).forEach((function(t){if(k.test(t))a.html=!0;else if(w.test(t))a.interactive=!1;else if(P.test(t))a.animation=!1;else if(x.test(t))a.placement=t;else if(C.test(t))t="scrollparent"===t?"scrollParent":t,a.boundary=t;else if(O.test(t)){var e=(0,p.Z3)(t.slice(1),0);a.delay.show=e,a.delay.hide=e}else B.test(t)?a.delay.show=(0,p.Z3)(t.slice(2),0):j.test(t)?a.delay.hide=(0,p.Z3)(t.slice(2),0):S.test(t)?a.offset=(0,p.Z3)(t.slice(1),0):$.test(t)&&(a.variant=t.slice(2)||null)}));var s={};return(0,n.zo)(a.trigger||"").filter(d.y).join(" ").trim().toLowerCase().split(N).forEach((function(t){_[t]&&(s[t]=!0)})),(0,v.XP)(t.modifiers).forEach((function(t){t=t.toLowerCase(),_[t]&&(s[t]=!0)})),a.trigger=(0,v.XP)(s).join(" "),"blur"===a.trigger&&(a.trigger="focus"),a.trigger||(a.trigger=y),a},V=function(t,e,a){if(r.Qg){var i=D(e,a);if(!t[b]){var n=a.context;t[b]=new m.j({parent:n,_scopeId:(0,l.P)(n,void 0)}),t[b].__bv_prev_data__={},t[b].$on(s.l0,(function(){(0,c.mf)(i.title)&&t[b].updateData({title:i.title(t)})}))}var o={title:i.title,triggers:i.trigger,placement:i.placement,fallbackPlacement:i.fallbackPlacement,variant:i.variant,customClass:i.customClass,container:i.container,boundary:i.boundary,delay:i.delay,offset:i.offset,noFade:!i.animation,id:i.id,interactive:i.interactive,disabled:i.disabled,html:i.html},d=t[b].__bv_prev_data__;if(t[b].__bv_prev_data__=o,!(0,u.W)(o,d)){var p={target:t};(0,v.XP)(o).forEach((function(e){o[e]!==d[e]&&(p[e]="title"===e&&(0,c.mf)(o[e])?o[e](t):o[e])})),t[b].updateData(p)}}},E=function(t){t[b]&&(t[b].$destroy(),t[b]=null),delete t[b]},A={bind:function(t,e,a){V(t,e,a)},componentUpdated:function(t,e,a){a.context.$nextTick((function(){V(t,e,a)}))},unbind:function(t){E(t)}}}}]);