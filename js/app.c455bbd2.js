(function(e){function t(t){for(var r,o,c=t[0],u=t[1],l=t[2],s=0,f=[];s<c.length;s++)o=c[s],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);d&&d(t);while(f.length)f.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,o=1;o<n.length;o++){var c=n[o];0!==a[c]&&(r=!1)}r&&(i.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},o={app:0},a={app:0},i=[];function c(e){return u.p+"js/"+({reference:"reference"}[e]||e)+"."+{"chunk-2d0e9020":"ab23be63",reference:"67376bfc"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={reference:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({reference:"reference"}[e]||e)+"."+{"chunk-2d0e9020":"31d6cfe0",reference:"3aca1a27"}[e]+".css",a=u.p+r,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var l=i[c],s=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(s===r||s===a))return t()}var f=document.getElementsByTagName("style");for(c=0;c<f.length;c++){l=f[c],s=l.getAttribute("data-href");if(s===r||s===a)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||a,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete o[e],d.parentNode.removeChild(d),n(i)},d.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=i);var l,s=document.createElement("script");s.charset="utf-8",s.timeout=120,u.nc&&s.setAttribute("nonce",u.nc),s.src=c(e);var f=new Error;l=function(t){s.onerror=s.onload=null,clearTimeout(d);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",f.name="ChunkLoadError",f.type=r,f.request=o,n[1](f)}a[e]=void 0}};var d=setTimeout((function(){l({type:"timeout",target:s})}),12e4);s.onerror=s.onload=l,document.head.appendChild(s)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/",u.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var f=0;f<l.length;f++)t(l[f]);var d=s;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("v-navigation-drawer",{attrs:{app:"",fixed:""},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[n("v-list",{attrs:{dense:"",nav:""}},e._l(e.items,(function(t){return n("v-list-item",{key:t.title,attrs:{to:t.to,link:""}},[n("v-list-item-icon",[n("v-icon",[e._v(e._s(t.icon))])],1),n("v-list-item-content",[n("v-list-item-title",[e._v(e._s(t.title))])],1)],1)})),1)],1),!1!==e.$route.meta.header?n("v-app-bar",{attrs:{app:"",color:"green",dark:"","hide-on-scroll":""},scopedSlots:e._u([e.$route.meta.header_extension?{key:"extension",fn:function(){return[n("router-view",{attrs:{name:"header_extension"}})]},proxy:!0}:null],null,!0)},[e.drawer?e._e():n("v-app-bar-nav-icon",{on:{click:function(t){t.stopPropagation(),e.drawer=!e.drawer}}}),n("v-toolbar-title",[e._v(e._s(e.$route.meta.title))])],1):e._e(),n("v-content",[n("router-view")],1)],1)},a=[],i={name:"App",data:function(){return{drawer:null,items:[{title:"Home",icon:"mdi-view-dashboard",to:"/"},{title:"Reference",icon:"mdi-image",to:"/reference"},{title:"About",icon:"mdi-help-box",to:"/about"}]}}},c=i,u=n("2877"),l=n("6544"),s=n.n(l),f=n("7496"),d=n("40dc"),p=n("5bc1"),h=n("a75b"),m=n("132d"),v=n("8860"),b=n("da13"),g=n("5d23"),_=n("34c3"),y=n("f774"),w=n("2a7f"),x=Object(u["a"])(c,o,a,!1,null,null,null),k=x.exports;s()(x,{VApp:f["a"],VAppBar:d["a"],VAppBarNavIcon:p["a"],VContent:h["a"],VIcon:m["a"],VList:v["a"],VListItem:b["a"],VListItemContent:g["a"],VListItemIcon:_["a"],VListItemTitle:g["b"],VNavigationDrawer:y["a"],VToolbarTitle:w["a"]});n("d3b7");var O=n("8c4f"),j=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",{attrs:{fluid:""}},[n("p",[e._v("This is the home page")])])},V=[],T={name:"Home"},A=T,E=n("a523"),P=Object(u["a"])(A,j,V,!1,null,null,null),C=P.exports;s()(P,{VContainer:E["a"]}),r["a"].use(O["a"]);var L=[{path:"/",component:C,meta:{title:"Home"}},{path:"/reference",components:{default:function(){return n.e("reference").then(n.bind(null,"3955"))},header_extension:function(){return n.e("reference").then(n.bind(null,"cc1e"))}},meta:{title:"Reference",header_extension:!0},children:[{path:"",redirect:"consonants"},{path:"consonants",components:{default:function(){return n.e("reference").then(n.bind(null,"2d2a"))},header_extension:function(){return n.e("reference").then(n.bind(null,"cc1e"))}},meta:{title:"Reference",header_extension:!0}},{path:"vowels",components:{default:function(){return n.e("reference").then(n.bind(null,"817e"))},header_extension:function(){return n.e("reference").then(n.bind(null,"cc1e"))}},meta:{title:"Reference",header_extension:!0}},{path:"tones",components:{default:function(){return n.e("reference").then(n.bind(null,"8965"))},header_extension:function(){return n.e("reference").then(n.bind(null,"cc1e"))}},meta:{title:"Reference",header_extension:!0}},{path:"numbers",components:{default:function(){return n.e("reference").then(n.bind(null,"c623"))},header_extension:function(){return n.e("reference").then(n.bind(null,"cc1e"))}},meta:{title:"Reference",header_extension:!0}}]},{path:"/not-found",component:function(){return n.e("chunk-2d0e9020").then(n.bind(null,"8c65"))},meta:{title:"Not Found"}},{path:"*",redirect:"/not-found"}],S=new O["a"]({base:"/",routes:L,scrollBehavior:function(e,t,n){return n||{x:0,y:0}}}),I=S,N=n("f309");r["a"].use(N["a"]);var B=new N["a"]({});r["a"].config.productionTip=!1,new r["a"]({router:I,vuetify:B,render:function(e){return e(k)}}).$mount("#app")}});
//# sourceMappingURL=app.c455bbd2.js.map