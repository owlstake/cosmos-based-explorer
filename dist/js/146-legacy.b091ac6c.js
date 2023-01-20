(self["webpackChunkping_wallet"]=self["webpackChunkping_wallet"]||[]).push([[146],{89231:function(t,e,a){"use strict";a.r(e),a.d(e,{default:function(){return B}});var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("b-alert",{attrs:{variant:"danger",show:!0,dismissible:""}},[a("h4",{staticClass:"alert-heading"},[t._v(" DISCLAIMER: ")]),a("div",{staticClass:"alert-body"},[a("span",[t._v("Ping.pub is maintained by the community, Everyone could add a chain to ping.pub. Some of those blockchains are not fully tested, Use at your own risk.")])])]),a("form-wizard",{ref:"wizard",staticClass:"steps-transparent mb-3 md",attrs:{color:"#7367F0",title:null,subtitle:null,shape:"square","finish-button-text":"Save","back-button-text":"Previous"},on:{"on-complete":t.formSubmitted}},[a("tab-content",{attrs:{title:"Device","before-change":t.validationFormDevice}},[a("validation-observer",{ref:"deviceRules",attrs:{tag:"form"}},[a("b-row",[a("b-col",{attrs:{md:"12"}},[a("b-form-group",{attrs:{label:"Select a device to import accounts","label-for":"device"}},[a("validation-provider",{attrs:{name:"device",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.errors;return[a("b-form-radio-group",{attrs:{stacked:""},model:{value:t.device,callback:function(e){t.device=e},expression:"device"}},[a("b-form-radio",{staticClass:"mb-1 mt-1",attrs:{name:"device",value:"keplr",checked:""},model:{value:t.device,callback:function(e){t.device=e},expression:"device"}},[t._v(" Keplr ")]),a("b-form-radio",{staticClass:"mb-1",attrs:{name:"device",value:"ledger"},model:{value:t.device,callback:function(e){t.device=e},expression:"device"}},[t._v(" Ledger via WebUSB ")]),a("b-form-radio",{staticClass:"mb-1",attrs:{name:"device",value:"ledger2"},model:{value:t.device,callback:function(e){t.device=e},expression:"device"}},[t._v(" Ledger via Bluetooth ")]),a("b-form-radio",{attrs:{name:"device",value:"address"},model:{value:t.device,callback:function(e){t.device=e},expression:"device"}},[t._v(" Address (Observe Only) ")])],1),"address"===t.device?a("b-form-input",{staticClass:"mt-1",attrs:{name:"address",placeholder:"cosmos1ev0vtddkl7jlwfawlk06yzncapw2x9quyxx75u"},model:{value:t.address,callback:function(e){t.address=e},expression:"address"}}):t._e(),a("small",{staticClass:"text-danger"},[t._v(t._s(t.debug)+t._s(n[0]))])]}}])})],1)],1),t.device.startsWith("ledger")?a("b-col",{attrs:{md:"12"}},[a("b-form-group",{attrs:{label:"HD Path","label-for":"hdpath"}},[a("validation-provider",{attrs:{name:"HD Path",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.errors;return[a("b-form-input",{staticClass:"mt-1",attrs:{name:"hdpath",placeholder:"m/44'/118/0'/0/0"},model:{value:t.hdpath,callback:function(e){t.hdpath=e},expression:"hdpath"}}),a("small",{staticClass:"text-danger"},[t._v(t._s(n[0]))])]}}],null,!1,2397192972)})],1)],1):t._e()],1)],1)],1),a("tab-content",{attrs:{title:"Accounts","before-change":t.validationFormAddress}},[a("validation-observer",{ref:"accountRules",attrs:{tag:"form"}},[a("b-row",[a("b-col",{attrs:{md:"12"}},[a("b-form-group",{attrs:{label:"Account Name","label-for":"account_name"}},[a("validation-provider",{attrs:{name:"Account Name",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.errors;return[a("b-form-input",{attrs:{id:"account_name",state:!(n.length>0)&&null,placeholder:"Ping Nano X",readonly:t.edit},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),a("small",{staticClass:"text-danger"},[t._v(t._s(n[0]))])]}}])})],1)],1),t.hdpath?a("b-col",{attrs:{md:"12"}},[a("b-form-group",{attrs:{label:"HD Path","label-for":"ir"}},[a("b-form-input",{attrs:{id:"ir",value:t.hdpath,readonly:""}})],1)],1):t._e(),t.accounts?a("b-col",{attrs:{md:"12"}},[a("b-form-group",{attrs:{label:"Public Key","label-for":"ir"}},[a("validation-provider",{attrs:{name:"Public Key",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.errors;return[a("b-form-input",{attrs:{id:"ir",value:t.formatPubkey(t.accounts.pubkey),readonly:"",state:!(n.length>0)&&null}}),a("small",{staticClass:"text-danger"},[t._v(t._s(n[0]))])]}}],null,!1,2851721389)})],1)],1):t._e(),a("b-col",{attrs:{md:"12"}},[a("b-form-group",{attrs:{label:"Import Address For Chains:"}},[a("validation-provider",{attrs:{name:"addrs",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.errors;return[a("div",{staticClass:"demo-inline-spacing text-uppercase"},[a("b-row",t._l(t.chains,(function(e,n){return a("b-col",{key:n,staticClass:"mb-25",attrs:{xs:"12",md:"4",lg:"3"}},[a("b-form-checkbox",{attrs:{name:"addrs",value:n},model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}},[a("b-avatar",{attrs:{src:e.logo,size:"18",variant:"light-primary",rounded:""}}),a("span",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.v-primary",modifiers:{hover:!0,"v-primary":!0}}],class:t.hdpath.startsWith("m/44'/"+e.coin_type)?"text-success":"text-danger",attrs:{title:"Coin Type: "+e.coin_type}},[t._v(" "+t._s(e.chain_name))])],1)],1)})),1)],1),a("small",{staticClass:"text-success"},[t._v(t._s(n[0]))])]}}])})],1),a("b-alert",{attrs:{show:"",variant:"info"}},[a("div",{staticClass:"alert-heading"},[t._v(" IMPORTANT ")]),a("div",{staticClass:"alert-body"},[a("div",[t._v(" If you don't have Ledger, Do not import those addresses in "),a("b",{staticClass:"text-danger"},[t._v("RED")]),t._v(". Because these addresses are derived from different coin_type which is not as same as the official one ")])])])],1)],1)],1)],1),a("tab-content",{attrs:{title:"Confirmation"}},[a("div",{staticClass:"d-flex border-bottom mb-2"},[a("feather-icon",{staticClass:"mb-50",attrs:{icon:"UserIcon",size:"19"}}),a("h4",{staticClass:"mb-0 ml-50"},[t._v(" "+t._s(t.name)+" "),a("small",[t._v(" "+t._s(t.hdpath))])])],1),a("b-row",{staticClass:"mb-2"},t._l(t.addresses,(function(t){return a("b-col",{key:t.addr,attrs:{cols:"12"}},[a("b-input-group",{staticClass:"mb-25"},[a("b-input-group-prepend",{attrs:{"is-text":""}},[a("b-avatar",{attrs:{src:t.logo,size:"18",variant:"light-primary",rounded:""}})],1),a("b-form-input",{attrs:{value:t.addr}})],1)],1)})),1)],1)],1),a("b-alert",{attrs:{variant:"secondary",show:!t.accounts&&"keplr"===t.device}},[a("h4",{staticClass:"alert-heading"},[t._v(" Enable Keplr For "+t._s(t.chainId)+" ")]),a("div",{staticClass:"alert-body p-1"},[a("span",[t._v("If Keplr has not added "),a("code",[t._v(t._s(t.chainId))]),t._v(", We can enable it here.")]),a("b-form-textarea",{staticClass:"mt-1 mb-1",attrs:{value:t.keplr,rows:"10"}}),t.error?a("div",{staticClass:"text-danger"},[t._v(" "+t._s(t.error)+" ")]):t._e(),a("b-button",{attrs:{variant:"primary"},on:{click:function(e){return t.suggest()}}},[t._v(" Enable Keplr ")])],1)])],1)},i=[],r=a(16198),s=(a(35666),a(41539),a(54747),a(57327),a(21249),a(26699),a(32023),a(78783),a(33948),a(41637),a(74916),a(64765),a(68309),a(38862),a(85498)),o=a(12954),c=a(87608),l=a(73106),d=a(15193),u=a(75200),b=a(26253),h=a(50725),f=a(54013),v=a(22183),p=a(76398),m=a(19692),g=a(85961),_=a(4060),x=a(27754),y=a(62135),T=a(5870),C=a(39984),k=a(35436),w=a(28972),S={components:{BAlert:l.F,BButton:d.T,ValidationProvider:o.d_,ValidationObserver:o._j,FormWizard:s.FormWizard,TabContent:s.TabContent,BAvatar:u.SH,BRow:b.T,BCol:h.l,BFormGroup:f.x,BFormInput:v.e,BFormRadio:p.g,BFormCheckbox:m.l,BFormTextarea:g.y,BInputGroup:_.w,BInputGroupPrepend:x.P,BFormRadioGroup:y.Q,ToastificationContent:c.Z},directives:{"b-tooltip":T.o},data:function(){return{debug:"",device:"keplr",address:"",hdpath:"m/44'/118/0'/0/0",name:"",options:{},required:C.C1,selected:[],accounts:null,exludes:[],edit:!1,keplr:"",chainId:"",error:null}},computed:{chains:function(){var t=JSON.parse(localStorage.getItem("chains"));return this.exludes.forEach((function(e){delete t[e]})),t},addresses:function(){var t=this;if(this.accounts&&this.accounts.address){var e=(0,k.addressDecode)(this.accounts.address),a=e.data;return this.selected.map((function(e){if(t.chains[e]){var n=t.chains[e],i=n.logo,r=n.addr_prefix,s=n.coin_type,o=(0,k.addressEnCode)(r,a,s);return{chain:e,addr:o,logo:i,hdpath:t.hdpath}}return null})).filter((function(t){return null!=t}))}return[]}},mounted:function(){var t=this,e=this.$store.state.chains.selected;this.$http.getLatestBlock().then((function(a){t.chainId=a.block.header.chain_id,t.keplr=t.initParamsForKeplr(t.chainId,e)})),e&&e.chain_name&&!this.exludes.includes(e.chain_name)&&this.selected.push(e.chain_name);var a=new URLSearchParams(window.location.search).get("name"),n=(0,k.getLocalAccounts)();if(a&&n&&n[a]){var i=n[a];this.device=i.device,this.name=i.name,this.edit=!0,i.address&&(i.address.forEach((function(e){t.selected.includes(e.chain)||t.selected.push(e.chain)})),this.address=i.address[0].addr,this.hdpath=i.address[0].hdpath,this.localAddress()&&this.$refs.wizard.nextTab())}else this.hdpath="m/44'/".concat(e.coin_type,"/0'/0/0")},methods:{suggest:function(){var t=this;window.keplr&&window.keplr.experimentalSuggestChain(JSON.parse(this.keplr)).catch((function(e){t.error=e}))},initParamsForKeplr:function(t,e){return JSON.stringify({chainId:t,chainName:e.chain_name,rpc:Array.isArray(e.rpc)?e.rpc[0]:e.rpc,rest:Array.isArray(e.api)?e.api[0]:e.api,bip44:{coinType:e.coin_type},coinType:e.coin_type,bech32Config:{bech32PrefixAccAddr:e.addr_prefix,bech32PrefixAccPub:"".concat(e.addr_prefix,"pub"),bech32PrefixValAddr:"".concat(e.addr_prefix,"valoper"),bech32PrefixValPub:"".concat(e.addr_prefix,"valoperpub"),bech32PrefixConsAddr:"".concat(e.addr_prefix,"valcons"),bech32PrefixConsPub:"".concat(e.addr_prefix,"valconspub")},currencies:[{coinDenom:e.assets[0].symbol,coinMinimalDenom:e.assets[0].base,coinDecimals:e.assets[0].exponent,coinGeckoId:e.assets[0].coingecko_id||"unknown"}],feeCurrencies:[{coinDenom:e.assets[0].symbol,coinMinimalDenom:e.assets[0].base,coinDecimals:e.assets[0].exponent,coinGeckoId:e.assets[0].coingecko_id||"unknown"}],stakeCurrency:{coinDenom:e.assets[0].symbol,coinMinimalDenom:e.assets[0].base,coinDecimals:e.assets[0].exponent,coinGeckoId:e.assets[0].coingecko_id||"unknown"},gasPriceStep:{low:.01,average:.025,high:.03}},null,"\t")},formatPubkey:function(t){return"string"===typeof t?t:t?(0,w.toHex)(t):""},connect:function(){var t=this;return(0,r.Z)(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a="ledger"===t.device?"usb":"bluetooth",e.abrupt("return",(0,k.getLedgerAddress)(a,t.hdpath));case 2:case"end":return e.stop()}}),e)})))()},cennectKeplr:function(){var t=this;return(0,r.Z)(regeneratorRuntime.mark((function e(){var a,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(window.getOfflineSigner&&window.keplr){e.next=3;break}return t.debug="Please install keplr extension",e.abrupt("return",null);case 3:return e.next=5,t.$http.getLatestBlock().then((function(t){return t.block.header.chain_id}));case 5:return a=e.sent,e.next=8,window.keplr.enable(a);case 8:return n=window.getOfflineSigner(a),e.abrupt("return",n.getAccounts());case 10:case"end":return e.stop()}}),e)})))()},localAddress:function(){if(!this.address)return!1;try{var t=(0,k.addressDecode)(this.address),e=t.data;if(e)return this.accounts={address:this.address,pubkey:e},!0}catch(a){this.debug=a}return!1},formSubmitted:function(){var t=localStorage.getItem("accounts"),e=t?JSON.parse(t):{};e[this.name]={name:this.name,device:this.device,address:this.addresses},localStorage.setItem("accounts",JSON.stringify(e)),this.$store.state.chains.defaultWallet||this.$store.commit("setDefaultWallet",this.name),this.$toast({component:c.Z,props:{title:"Address Saved!",icon:"EditIcon",variant:"success"}}),this.$router.push("./accounts")},validationFormDevice:function(){var t=this;return(0,r.Z)(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(a=String(t.name).length>0,a){e.next=12;break}e.t0=t.device,e.next="keplr"===e.t0?5:"ledger"===e.t0||"ledger2"===e.t0?8:11;break;case 5:return e.next=7,t.cennectKeplr().then((function(e){e&&(t.accounts=e[0],a=!0)}));case 7:return e.abrupt("break",12);case 8:return e.next=10,t.connect().then((function(e){e&&(t.accounts=e[0],a=!0)})).catch((function(e){t.debug=e}));case 10:return e.abrupt("break",12);case 11:a=t.localAddress();case 12:return e.abrupt("return",new Promise((function(e,n){t.$refs.deviceRules.validate().then((function(t){a&&t&&e(!0),n()}))})));case 13:case"end":return e.stop()}}),e)})))()},validationFormAddress:function(){var t=this;return new Promise((function(e,a){t.$refs.accountRules.validate().then((function(t){t?e(!0):a()}))}))}}},I=S,P=a(1001),z=(0,P.Z)(I,n,i,!1,null,null,null),B=z.exports},5870:function(t,e,a){"use strict";a.d(e,{o:function(){return j}});var n=a(94689),i=a(43935),r=a(63294),s=a(11572),o=a(79968),c=a(13597),l=a(68265),d=a(33284),u=a(3058),b=a(93954),h=a(67040),f=a(40960);function v(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function p(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?v(Object(a),!0).forEach((function(e){m(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):v(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function m(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var g="__BV_Tooltip__",_="hover focus",x={focus:!0,hover:!0,click:!0,blur:!0,manual:!0},y=/^html$/i,T=/^noninteractive$/i,C=/^nofade$/i,k=/^(auto|top(left|right)?|bottom(left|right)?|left(top|bottom)?|right(top|bottom)?)$/i,w=/^(window|viewport|scrollParent)$/i,S=/^d\d+$/i,I=/^ds\d+$/i,P=/^dh\d+$/i,z=/^o-?\d+$/i,B=/^v-.+$/i,O=/\s+/,$=function(t,e){var a={title:void 0,trigger:"",placement:"top",fallbackPlacement:"flip",container:!1,animation:!0,offset:0,id:null,html:!1,interactive:!0,disabled:!1,delay:(0,o.wJ)(n.qv,"delay",50),boundary:String((0,o.wJ)(n.qv,"boundary","scrollParent")),boundaryPadding:(0,b.Z3)((0,o.wJ)(n.qv,"boundaryPadding",5),0),variant:(0,o.wJ)(n.qv,"variant"),customClass:(0,o.wJ)(n.qv,"customClass")};if((0,d.HD)(t.value)||(0,d.hj)(t.value)||(0,d.mf)(t.value)?a.title=t.value:(0,d.PO)(t.value)&&(a=p(p({},a),t.value)),(0,d.o8)(a.title)){var i=e.data||{};a.title=i.attrs&&!(0,d.Jp)(i.attrs.title)?i.attrs.title:void 0}(0,d.PO)(a.delay)||(a.delay={show:(0,b.Z3)(a.delay,0),hide:(0,b.Z3)(a.delay,0)}),t.arg&&(a.container="#".concat(t.arg)),(0,h.XP)(t.modifiers).forEach((function(t){if(y.test(t))a.html=!0;else if(T.test(t))a.interactive=!1;else if(C.test(t))a.animation=!1;else if(k.test(t))a.placement=t;else if(w.test(t))t="scrollparent"===t?"scrollParent":t,a.boundary=t;else if(S.test(t)){var e=(0,b.Z3)(t.slice(1),0);a.delay.show=e,a.delay.hide=e}else I.test(t)?a.delay.show=(0,b.Z3)(t.slice(2),0):P.test(t)?a.delay.hide=(0,b.Z3)(t.slice(2),0):z.test(t)?a.offset=(0,b.Z3)(t.slice(1),0):B.test(t)&&(a.variant=t.slice(2)||null)}));var r={};return(0,s.zo)(a.trigger||"").filter(l.y).join(" ").trim().toLowerCase().split(O).forEach((function(t){x[t]&&(r[t]=!0)})),(0,h.XP)(t.modifiers).forEach((function(t){t=t.toLowerCase(),x[t]&&(r[t]=!0)})),a.trigger=(0,h.XP)(r).join(" "),"blur"===a.trigger&&(a.trigger="focus"),a.trigger||(a.trigger=_),a},E=function(t,e,a){if(i.Qg){var n=$(e,a);if(!t[g]){var s=a.context;t[g]=new f.j({parent:s,_scopeId:(0,c.P)(s,void 0)}),t[g].__bv_prev_data__={},t[g].$on(r.l0,(function(){(0,d.mf)(n.title)&&t[g].updateData({title:n.title(t)})}))}var o={title:n.title,triggers:n.trigger,placement:n.placement,fallbackPlacement:n.fallbackPlacement,variant:n.variant,customClass:n.customClass,container:n.container,boundary:n.boundary,delay:n.delay,offset:n.offset,noFade:!n.animation,id:n.id,interactive:n.interactive,disabled:n.disabled,html:n.html},l=t[g].__bv_prev_data__;if(t[g].__bv_prev_data__=o,!(0,u.W)(o,l)){var b={target:t};(0,h.XP)(o).forEach((function(e){o[e]!==l[e]&&(b[e]="title"===e&&(0,d.mf)(o[e])?o[e](t):o[e])})),t[g].updateData(b)}}},A=function(t){t[g]&&(t[g].$destroy(),t[g]=null),delete t[g]},j={bind:function(t,e,a){E(t,e,a)},componentUpdated:function(t,e,a){a.context.$nextTick((function(){E(t,e,a)}))},unbind:function(t){A(t)}}},85498:function(t){!function(e,a){t.exports=a()}("undefined"!=typeof self&&self,(function(){return function(t){function e(n){if(a[n])return a[n].exports;var i=a[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var a={};return e.m=t,e.c=a,e.d=function(t,a,n){e.o(t,a)||Object.defineProperty(t,a,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var a=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(a,"a",a),a},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=7)}([function(t,e){t.exports=function(t,e,a,n,i,r){var s,o=t=t||{},c=typeof t.default;"object"!==c&&"function"!==c||(s=t,o=t.default);var l,d="function"==typeof o?o.options:o;if(e&&(d.render=e.render,d.staticRenderFns=e.staticRenderFns,d._compiled=!0),a&&(d.functional=!0),i&&(d._scopeId=i),r?(l=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),n&&n.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(r)},d._ssrRegister=l):n&&(l=n),l){var u=d.functional,b=u?d.render:d.beforeCreate;u?(d._injectStyles=l,d.render=function(t,e){return l.call(e),b(t,e)}):d.beforeCreate=b?[].concat(b,l):[l]}return{esModule:s,exports:o,options:d}}},function(t,e,a){"use strict";var n=a(2),i=a(4),r=a(14);e.a={name:"form-wizard",components:{WizardButton:n.a,WizardStep:i.a},props:{title:{type:String,default:"Awesome Wizard"},subtitle:{type:String,default:"Split a complicated flow in multiple steps"},nextButtonText:{type:String,default:"Next"},backButtonText:{type:String,default:"Back"},finishButtonText:{type:String,default:"Finish"},hideButtons:{type:Boolean,default:!1},validateOnBack:Boolean,color:{type:String,default:"#e74c3c"},errorColor:{type:String,default:"#8b0000"},shape:{type:String,default:"circle"},layout:{type:String,default:"horizontal"},stepsClasses:{type:[String,Array],default:""},stepSize:{type:String,default:"md",validator:function(t){return-1!==["xs","sm","md","lg"].indexOf(t)}},transition:{type:String,default:""},startIndex:{type:Number,default:0,validator:function(t){return t>=0}}},provide:function(){return{addTab:this.addTab,removeTab:this.removeTab}},data:function(){return{activeTabIndex:0,currentPercentage:0,maxStep:0,loading:!1,tabs:[]}},computed:{slotProps:function(){return{nextTab:this.nextTab,prevTab:this.prevTab,activeTabIndex:this.activeTabIndex,isLastStep:this.isLastStep,fillButtonStyle:this.fillButtonStyle}},tabCount:function(){return this.tabs.length},isLastStep:function(){return this.activeTabIndex===this.tabCount-1},isVertical:function(){return"vertical"===this.layout},displayPrevButton:function(){return 0!==this.activeTabIndex},stepPercentage:function(){return 1/(2*this.tabCount)*100},progressBarStyle:function(){return{backgroundColor:this.color,width:this.progress+"%",color:this.color}},fillButtonStyle:function(){return{backgroundColor:this.color,borderColor:this.color,color:"white"}},progress:function(){return this.activeTabIndex>0?this.stepPercentage*(2*this.activeTabIndex+1):this.stepPercentage}},methods:{emitTabChange:function(t,e){this.$emit("on-change",t,e),this.$emit("update:startIndex",e)},addTab:function(t){var e=this.$slots.default.indexOf(t.$vnode);t.tabId=""+t.title.replace(/ /g,"")+e,this.tabs.splice(e,0,t),e<this.activeTabIndex+1&&(this.maxStep=e,this.changeTab(this.activeTabIndex+1,e))},removeTab:function(t){var e=this.tabs,a=e.indexOf(t);a>-1&&(a===this.activeTabIndex&&(this.maxStep=this.activeTabIndex-1,this.changeTab(this.activeTabIndex,this.activeTabIndex-1)),a<this.activeTabIndex&&(this.maxStep=this.activeTabIndex-1,this.activeTabIndex=this.activeTabIndex-1,this.emitTabChange(this.activeTabIndex+1,this.activeTabIndex)),e.splice(a,1))},reset:function(){this.maxStep=0,this.tabs.forEach((function(t){t.checked=!1})),this.navigateToTab(0)},activateAll:function(){this.maxStep=this.tabs.length-1,this.tabs.forEach((function(t){t.checked=!0}))},navigateToTab:function(t){var e=this,a=t>this.activeTabIndex;if(t<=this.maxStep){var n=function n(){a&&t-e.activeTabIndex>1?(e.changeTab(e.activeTabIndex,e.activeTabIndex+1),e.beforeTabChange(e.activeTabIndex,n)):(e.changeTab(e.activeTabIndex,t),e.afterTabChange(e.activeTabIndex))};a?this.beforeTabChange(this.activeTabIndex,n):(this.setValidationError(null),n())}return t<=this.maxStep},nextTab:function(){var t=this,e=function(){t.activeTabIndex<t.tabCount-1?(t.changeTab(t.activeTabIndex,t.activeTabIndex+1),t.afterTabChange(t.activeTabIndex)):t.$emit("on-complete")};this.beforeTabChange(this.activeTabIndex,e)},prevTab:function(){var t=this,e=function(){t.activeTabIndex>0&&(t.setValidationError(null),t.changeTab(t.activeTabIndex,t.activeTabIndex-1))};this.validateOnBack?this.beforeTabChange(this.activeTabIndex,e):e()},focusNextTab:function(){var t=Object(r.b)(this.tabs);if(-1!==t&&t<this.tabs.length-1){var e=this.tabs[t+1];e.checked&&Object(r.a)(e.tabId)}},focusPrevTab:function(){var t=Object(r.b)(this.tabs);if(-1!==t&&t>0){var e=this.tabs[t-1].tabId;Object(r.a)(e)}},setLoading:function(t){this.loading=t,this.$emit("on-loading",t)},setValidationError:function(t){this.tabs[this.activeTabIndex].validationError=t,this.$emit("on-error",t)},validateBeforeChange:function(t,e){var a=this;if(this.setValidationError(null),Object(r.c)(t))this.setLoading(!0),t.then((function(t){a.setLoading(!1);var n=!0===t;a.executeBeforeChange(n,e)})).catch((function(t){a.setLoading(!1),a.setValidationError(t)}));else{var n=!0===t;this.executeBeforeChange(n,e)}},executeBeforeChange:function(t,e){this.$emit("on-validate",t,this.activeTabIndex),t?e():this.tabs[this.activeTabIndex].validationError="error"},beforeTabChange:function(t,e){if(!this.loading){var a=this.tabs[t];if(a&&void 0!==a.beforeChange){var n=a.beforeChange();this.validateBeforeChange(n,e)}else e()}},afterTabChange:function(t){if(!this.loading){var e=this.tabs[t];e&&void 0!==e.afterChange&&e.afterChange()}},changeTab:function(t,e){var a=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],n=this.tabs[t],i=this.tabs[e];return n&&(n.active=!1),i&&(i.active=!0),a&&this.activeTabIndex!==e&&this.emitTabChange(t,e),this.activeTabIndex=e,this.activateTabAndCheckStep(this.activeTabIndex),!0},tryChangeRoute:function(t){this.$router&&t.route&&this.$router.push(t.route)},checkRouteChange:function(t){var e=-1,a=this.tabs.find((function(a,n){var i=a.route===t;return i&&(e=n),i}));if(a&&!a.active){var n=e>this.activeTabIndex;this.navigateToTab(e,n)}},deactivateTabs:function(){this.tabs.forEach((function(t){t.active=!1}))},activateTab:function(t){this.deactivateTabs();var e=this.tabs[t];e&&(e.active=!0,e.checked=!0,this.tryChangeRoute(e))},activateTabAndCheckStep:function(t){this.activateTab(t),t>this.maxStep&&(this.maxStep=t),this.activeTabIndex=t},initializeTabs:function(){this.tabs.length>0&&0===this.startIndex&&this.activateTab(this.activeTabIndex),this.startIndex<this.tabs.length?this.activateTabAndCheckStep(this.startIndex):window.console.warn("Prop startIndex set to "+this.startIndex+" is greater than the number of tabs - "+this.tabs.length+". Make sure that the starting index is less than the number of tabs registered")}},mounted:function(){this.initializeTabs()},watch:{"$route.path":function(t){this.checkRouteChange(t)}}}},function(t,e,a){"use strict";function n(t){a(10)}var i=a(3),r=a(11),s=a(0),o=n,c=s(i.a,r.a,!1,o,null,null);e.a=c.exports},function(t,e,a){"use strict";e.a={}},function(t,e,a){"use strict";function n(t){a(12)}var i=a(5),r=a(13),s=a(0),o=n,c=s(i.a,r.a,!1,o,null,null);e.a=c.exports},function(t,e,a){"use strict";e.a={name:"wizard-step",props:{tab:{type:Object,default:function(){}},transition:{type:String,default:""},index:{type:Number,default:0}},computed:{iconActiveStyle:function(){return{backgroundColor:this.tab.color}},stepCheckedStyle:function(){return{borderColor:this.tab.color}},errorStyle:function(){return{borderColor:this.tab.errorColor,backgroundColor:this.tab.errorColor}},stepTitleStyle:function(){return{color:this.tab.validationError?this.tab.errorColor:this.tab.color}},isStepSquare:function(){return"square"===this.tab.shape},isTabShape:function(){return"tab"===this.tab.shape}}}},function(t,e,a){"use strict";e.a={name:"tab-content",props:{title:{type:String,default:""},icon:{type:String,default:""},beforeChange:{type:Function},afterChange:{type:Function},route:{type:[String,Object]},additionalInfo:{type:Object,default:function(){}}},inject:["addTab","removeTab"],data:function(){return{active:!1,validationError:null,checked:!1,tabId:""}},computed:{shape:function(){return this.$parent.shape},color:function(){return this.$parent.color},errorColor:function(){return this.$parent.errorColor}},mounted:function(){this.addTab(this)},destroyed:function(){this.$el&&this.$el.parentNode&&this.$el.parentNode.removeChild(this.$el),this.removeTab(this)}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(8),i=a(16),r=a(2),s=a(4);a.d(e,"FormWizard",(function(){return n.a})),a.d(e,"TabContent",(function(){return i.a})),a.d(e,"WizardButton",(function(){return r.a})),a.d(e,"WizardStep",(function(){return s.a}));var o={install:function(t){t.component("form-wizard",n.a),t.component("tab-content",i.a),t.component("wizard-button",r.a),t.component("wizard-step",s.a)}};"undefined"!=typeof window&&window.Vue&&window.Vue.use(o),e.default=o},function(t,e,a){"use strict";function n(t){a(9)}var i=a(1),r=a(15),s=a(0),o=n,c=s(i.a,r.a,!1,o,null,null);e.a=c.exports},function(t,e){},function(t,e){},function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement;return(t._self._c||e)("button",{staticClass:"wizard-btn",attrs:{tabindex:"-1",type:"button"}},[t._t("default")],2)},i=[],r={render:n,staticRenderFns:i};e.a=r},function(t,e){},function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",{class:{active:t.tab.active}},[a("a",{class:{disabled:!t.tab.checked},attrs:{href:"javascript:void(0)"}},[a("div",{staticClass:"wizard-icon-circle md",class:{checked:t.tab.checked,square_shape:t.isStepSquare,tab_shape:t.isTabShape},style:[t.tab.checked?t.stepCheckedStyle:{},t.tab.validationError?t.errorStyle:{}],attrs:{role:"tab",tabindex:t.tab.checked?0:"",id:"step-"+t.tab.tabId,"aria-controls":t.tab.tabId,"aria-disabled":t.tab.active,"aria-selected":t.tab.active}},[a("transition",{attrs:{name:t.transition,mode:"out-in"}},[t.tab.active?a("div",{staticClass:"wizard-icon-container",class:{square_shape:t.isStepSquare,tab_shape:t.isTabShape},style:[t.tab.active?t.iconActiveStyle:{},t.tab.validationError?t.errorStyle:{}]},[t._t("active-step",[t.tab.icon?a("i",{staticClass:"wizard-icon",class:t.tab.icon}):a("i",{staticClass:"wizard-icon"},[t._v(t._s(t.index+1))])])],2):t._e(),t._v(" "),t.tab.active?t._e():t._t("default",[!t.tab.active&&t.tab.icon?a("i",{staticClass:"wizard-icon",class:t.tab.icon}):t._e(),t._v(" "),t.tab.active||t.tab.icon?t._e():a("i",{staticClass:"wizard-icon"},[t._v(t._s(t.index+1))])])],2)],1),t._v(" "),t._t("title",[a("span",{staticClass:"stepTitle",class:{active:t.tab.active,has_error:t.tab.validationError},style:t.tab.active?t.stepTitleStyle:{}},[t._v("\n            "+t._s(t.tab.title)+"\n      ")])])],2)])},i=[],r={render:n,staticRenderFns:i};e.a=r},function(t,e,a){"use strict";function n(){return document.activeElement.id}function i(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=n();return t.findIndex((function(t){return t.tabId===e}))}function r(t){document.getElementById(t).focus()}function s(t){return t.then&&"function"==typeof t.then}e.b=i,e.a=r,e.c=s},function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"vue-form-wizard",class:[t.stepSize,{vertical:t.isVertical}],on:{keyup:[function(e){return"button"in e||!t._k(e.keyCode,"right",39,e.key)?"button"in e&&2!==e.button?null:void t.focusNextTab(e):null},function(e){return"button"in e||!t._k(e.keyCode,"left",37,e.key)?"button"in e&&0!==e.button?null:void t.focusPrevTab(e):null}]}},[a("div",{staticClass:"wizard-header"},[t._t("title",[a("h4",{staticClass:"wizard-title"},[t._v(t._s(t.title))]),t._v(" "),a("p",{staticClass:"category"},[t._v(t._s(t.subtitle))])])],2),t._v(" "),a("div",{staticClass:"wizard-navigation"},[t.isVertical?t._e():a("div",{staticClass:"wizard-progress-with-circle"},[a("div",{staticClass:"wizard-progress-bar",style:t.progressBarStyle})]),t._v(" "),a("ul",{staticClass:"wizard-nav wizard-nav-pills",class:t.stepsClasses,attrs:{role:"tablist"}},[t._l(t.tabs,(function(e,n){return t._t("step",[a("wizard-step",{attrs:{tab:e,"step-size":t.stepSize,transition:t.transition,index:n},nativeOn:{click:function(e){t.navigateToTab(n)},keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key))return null;t.navigateToTab(n)}}})],{tab:e,index:n,navigateToTab:t.navigateToTab,stepSize:t.stepSize,transition:t.transition})}))],2),t._v(" "),a("div",{staticClass:"wizard-tab-content"},[t._t("default",null,null,t.slotProps)],2)]),t._v(" "),t.hideButtons?t._e():a("div",{staticClass:"wizard-card-footer clearfix"},[t._t("footer",[a("div",{staticClass:"wizard-footer-left"},[t.displayPrevButton?a("span",{attrs:{role:"button",tabindex:"0"},on:{click:t.prevTab,keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key))return null;t.prevTab(e)}}},[t._t("prev",[a("wizard-button",{style:t.fillButtonStyle,attrs:{disabled:t.loading}},[t._v("\n              "+t._s(t.backButtonText)+"\n            ")])],null,t.slotProps)],2):t._e(),t._v(" "),t._t("custom-buttons-left",null,null,t.slotProps)],2),t._v(" "),a("div",{staticClass:"wizard-footer-right"},[t._t("custom-buttons-right",null,null,t.slotProps),t._v(" "),t.isLastStep?a("span",{attrs:{role:"button",tabindex:"0"},on:{click:t.nextTab,keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key))return null;t.nextTab(e)}}},[t._t("finish",[a("wizard-button",{style:t.fillButtonStyle},[t._v("\n              "+t._s(t.finishButtonText)+"\n            ")])],null,t.slotProps)],2):a("span",{attrs:{role:"button",tabindex:"0"},on:{click:t.nextTab,keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key))return null;t.nextTab(e)}}},[t._t("next",[a("wizard-button",{style:t.fillButtonStyle,attrs:{disabled:t.loading}},[t._v("\n            "+t._s(t.nextButtonText)+"\n           ")])],null,t.slotProps)],2)],2)],null,t.slotProps)],2)])},i=[],r={render:n,staticRenderFns:i};e.a=r},function(t,e,a){"use strict";var n=a(6),i=a(17),r=a(0),s=r(n.a,i.a,!1,null,null,null);e.a=s.exports},function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{directives:[{name:"show",rawName:"v-show",value:t.active,expression:"active"}],staticClass:"wizard-tab-container",attrs:{role:"tabpanel",id:t.tabId,"aria-hidden":!t.active,"aria-labelledby":"step-"+t.tabId}},[t._t("default",null,{active:t.active})],2)},i=[],r={render:n,staticRenderFns:i};e.a=r}])}))}}]);