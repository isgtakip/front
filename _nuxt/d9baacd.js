(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{100:function(e,t,r){"use strict";t.a=function(e,t){var r=e.app,n=(r.$cookies,r.$axios),o=(r.$gates,e.res,e.req,e.store,e.redirect,n.create());o.setBaseURL("https://sarielektronik.net/api/public/api"),o.onResponse((function(e){})),t("starWarsApi",o)}},188:function(e,t,r){"use strict";var n=r(0),o=r(275),c=r.n(o);n.a.use(c.a,{persistent:!0}),t.a=function(e,t){t("gates",n.a.prototype.$gates)}},189:function(e,t,r){"use strict";new(r(278).a);t.a=function(e,t){e.store}},243:function(e,t,r){var content=r(317);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(18).default)("7388ab72",content,!0,{sourceMap:!1})},277:function(e,t,r){"use strict";r(10),r(6),r(9),r(13),r(11),r(14);var n=r(4),o=r(2),c=(r(33),r(75)),m=r(84);function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function f(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}r.n(m).a.defaults.withCredentials=!0;var d={middleware:"auth",name:"default",computed:f({},Object(c.d)({permissions:function(e){return e.rules.permissions}})),data:function(){return{drawer:!1,links:[{text:"Stok Hareketleri",icon:"mdi-help-box",route:"/stok-hareketleri"}],permise:[]}},created:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$axios.get("https://sarielektronik.net/api/public/api/getAllPermissionsAttribute");case 2:r=t.sent,n=r.data,e.$gates.setPermissions(n),console.log("ffhgfh");case 6:case"end":return t.stop()}}),t)})))()},methods:f({},Object(c.b)({getPermissions:"rules/getPermissions"}))},v=r(69),_=r(85),h=r.n(_),E=r(423),R=r(431),O=r(424),w=r(177),x=r(194),A=r(425),D=r(426),k=r(176),S=r(178),L=r(115),M=r(179),I=r(103),P=r(427),T=r(415),j=r(429),U=r(430),$=r(190),component=Object(v.a)(d,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("v-navigation-drawer",{attrs:{absolute:"",left:"",temporary:""},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[n("v-list",{attrs:{nav:"",dense:""}},[n("v-list-item-group",{attrs:{"active-class":"deep-purple--text text--accent-4"}},[n("v-list-item",{attrs:{to:"/firmalar"}},[n("v-list-item-title",[e._v("Firma Yönetimi")])],1),e._v(" "),n("v-list-item",{attrs:{to:"/depolar"}},[n("v-list-item-title",[e._v("Depo Yönetimi")])],1),e._v(" "),n("v-list-item",{attrs:{to:"/malzemeler"}},[n("v-list-item-title",[e._v("Malzeme Yönetimi")])],1),e._v(" "),n("v-list-item",{attrs:{to:"/kullanicilar"}},[n("v-list-item-title",[e._v("Kullanıcı Yönetimi")])],1)],1)],1)],1),e._v(" "),n("v-app-bar",{attrs:{app:"",dense:"",color:"white",fixed:"",flat:""}},[n("v-app-bar-nav-icon",{on:{click:function(t){t.stopPropagation(),e.drawer=!e.drawer}}}),e._v(" "),n("v-avatar",{attrs:{tile:!0}},[n("img",{attrs:{src:r(288),alt:"logo"}})]),e._v(" "),n("v-toolbar-title",[e._v("\r\n      Depo "),n("span",{staticStyle:{"font-weight":"bold"}},[e._v("Takip")])]),e._v(" "),n("v-spacer"),e._v(" "),n("v-menu",{attrs:{"offset-y":""},scopedSlots:e._u([{key:"activator",fn:function(t){var r=t.on;return[n("v-btn",e._g({staticClass:"text--darken-2",attrs:{text:"",color:"grey"}},r),[n("v-icon",{attrs:{left:""}},[e._v("mdi-chevron-down")]),e._v(" "),n("span",[e._v("Menu")])],1)]}}])},[e._v(" "),n("v-list",e._l(e.links,(function(link,t){return n("v-list-item",{key:t,attrs:{to:link.route}},[n("v-list-item-title",[e._v(e._s(link.text))])],1)})),1)],1)],1),e._v(" "),n("v-main",[n("v-container",{attrs:{fluid:""}},[n("nuxt")],1)],1),e._v(" "),n("v-footer",{attrs:{app:""}})],1)}),[],!1,null,null,null);t.a=component.exports;h()(component,{VApp:E.a,VAppBar:R.a,VAppBarNavIcon:O.a,VAvatar:w.a,VBtn:x.a,VContainer:A.a,VFooter:D.a,VIcon:k.a,VList:S.a,VListItem:L.a,VListItemGroup:M.a,VListItemTitle:I.c,VMain:P.a,VMenu:T.a,VNavigationDrawer:j.a,VSpacer:U.a,VToolbarTitle:$.b})},279:function(e,t,r){"use strict";var n=r(69),o=r(85),c=r.n(o),m=r(423),component=Object(n.a)({},(function(){var e=this.$createElement,t=this._self._c||e;return t("v-app",[t("Nuxt")],1)}),[],!1,null,null,null);t.a=component.exports;c()(component,{VApp:m.a})},288:function(e,t,r){e.exports=r.p+"img/sari_elektronik.3c5257e.jpg"},292:function(e,t,r){r(293),e.exports=r(294)},309:function(e,t,r){"use strict";r.r(t),t.default=function(e){e.store,e.redirect;console.log("dsadasdasd"),this.$auth.loggedIn}},310:function(e,t,r){"use strict";r.r(t);var n=r(16),o=r(4);r(33),r(12),r(20),r(24);function c(){return(c=Object(o.a)(regeneratorRuntime.mark((function e(t){var r,o,c,m,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.app,t.redirect,r=t.$axios,o=t.$gates,!t.$auth.loggedIn){e.next=9;break}return e.next=4,Promise.all([r.get("http://localhost:8000/api/getAllPermissionsAttribute")]);case 4:c=e.sent,m=Object(n.a)(c,1),l=m[0],o.setPermissions(l.data),console.log("aaa");case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}t.default=function(e){return c.apply(this,arguments)}},316:function(e,t,r){"use strict";r(243)},317:function(e,t,r){var n=r(17)(!1);n.push([e.i,"h1[data-v-bfedb7fe]{font-size:20px}",""]),e.exports=n},396:function(e,t){},397:function(e,t,r){"use strict";r.r(t),r.d(t,"getters",(function(){return c})),r.d(t,"state",(function(){return m})),r.d(t,"mutations",(function(){return l})),r.d(t,"actions",(function(){return f}));var n=r(4),o=(r(33),r(80),r(70),r(12),r(20),r(24),r(93),r(0)),c={},m=function(){return{depolar:[]}},l={SET_DEPOLAR:function(e,data){e.depolar=data},ADD_DEPO:function(e,data){e.depolar.push(data)},EDIT_DEPO:function(e,data){var t=e.depolar.findIndex((function(e){return e.depo_id===data.depo_id}));o.a.set(e.depolar,t,data)},DELETE_DEPO:function(e,data){var t=e.depolar.findIndex((function(e){return e.depo_id===data}));e.depolar.splice(t,1)}},f={getDepolar:function(e){var t=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var n,o;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=e.commit,r.next=3,t.$starWarsApi.$get("/depolar");case 3:o=r.sent,n("SET_DEPOLAR",o);case 5:case"end":return r.stop()}}),r)})))()},saveDepo:function(e,t){var r=this;return Object(n.a)(regeneratorRuntime.mark((function n(){var o,c,m,l;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return o=e.commit,(c=new URLSearchParams).append("depo_adi",t.depo_adi),m={params:c},n.next=6,r.$starWarsApi.post("/depolar",null,m);case 6:l=n.sent,o("ADD_DEPO",l.data);case 8:case"end":return n.stop()}}),n)})))()},editDepo:function(e,t){var r=this;return Object(n.a)(regeneratorRuntime.mark((function n(){var o,c,m,l;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return o=e.commit,(c=new URLSearchParams).append("depo_adi",t.depo_adi),m={params:c},n.next=6,r.$starWarsApi.put("/depolar/"+t.depo_id,null,m);case 6:l=n.sent,o("EDIT_DEPO",l.data);case 8:case"end":return n.stop()}}),n)})))()},deleteDepo:function(e,t){var r=this;return Object(n.a)(regeneratorRuntime.mark((function n(){var o;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return o=e.commit,n.next=3,r.$starWarsApi.delete("/depolar/"+t);case 3:n.sent,o("DELETE_DEPO",t);case 5:case"end":return n.stop()}}),n)})))()}}},398:function(e,t,r){"use strict";r.r(t),r.d(t,"getters",(function(){return c})),r.d(t,"state",(function(){return m})),r.d(t,"mutations",(function(){return l})),r.d(t,"actions",(function(){return f}));var n=r(4),o=(r(33),r(9),r(80),r(70),r(12),r(20),r(24),r(93),r(0)),c={getSorumluByDepoID:function(e){return function(t){return e.depo_sorumlulari.filter((function(e){return e.depo_id===t}))}}},m=function(){return{depo_sorumlulari:[]}},l={SET_DEPO_SORUMLULARI:function(e,data){e.depo_sorumlulari=data},ADD_DEPO_SORUMLULARI:function(e,data){e.depo_sorumlulari.push(data)},EDIT_DEPO_SORUMLULARI:function(e,data){var t=e.depo_sorumlulari.findIndex((function(e){return e.depo_sorumlu_id===data.depo_sorumlu_id}));o.a.set(e.depo_sorumlulari,t,data)},DELETE_DEPO_SORUMLU:function(e,data){var t=e.depo_sorumlulari.findIndex((function(p){return p.depo_sorumlu_id===data}));e.depo_sorumlulari.splice(t,1)}},f={getDepoSorumlulari:function(e){var t=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var n,o;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=e.commit,r.next=3,t.$starWarsApi.$get("/depo-sorumlulari");case 3:o=r.sent,n("SET_DEPO_SORUMLULARI",o);case 5:case"end":return r.stop()}}),r)})))()},saveDepoSorumlulari:function(e,t){var r=this;return Object(n.a)(regeneratorRuntime.mark((function n(){var o,c,m,l;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return o=e.commit,(c=new URLSearchParams).append("depo_id",t.depo_id),c.append("sorumlu_id",t.sorumlu_id),m={params:c},n.next=7,r.$starWarsApi.post("/depo-sorumlulari",null,m);case 7:l=n.sent,o("ADD_DEPO_SORUMLULARI",l.data[0]);case 9:case"end":return n.stop()}}),n)})))()},editDepoSorumlulari:function(e,t){var r=this;return Object(n.a)(regeneratorRuntime.mark((function n(){var o,c,m,l;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return o=e.commit,(c=new URLSearchParams).append("sorumlu_id",t.sorumlu_id),c.append("depo_id",t.depo_id),m={params:c},n.next=7,r.$starWarsApi.put("/depo-sorumlulari/"+t.depo_sorumlu_id,null,m);case 7:l=n.sent,o("EDIT_DEPO_SORUMLULARI",l.data[0]);case 9:case"end":return n.stop()}}),n)})))()},deleteDepoSorumlulari:function(e,t){var r=this;return Object(n.a)(regeneratorRuntime.mark((function n(){var o;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return o=e.commit,n.next=3,r.$starWarsApi.delete("/depo-sorumlulari/"+t);case 3:n.sent,o("DELETE_DEPO_SORUMLU",t);case 5:case"end":return n.stop()}}),n)})))()}}},399:function(e,t,r){"use strict";r.r(t),r.d(t,"getters",(function(){return c})),r.d(t,"state",(function(){return m})),r.d(t,"mutations",(function(){return l})),r.d(t,"actions",(function(){return f}));var n=r(4),o=(r(33),r(80),r(70),r(12),r(20),r(24),r(93),r(0)),c={},m=function(){return{firmalar:[]}},l={SET_FIRMALAR:function(e,data){e.firmalar=data},ADD_FIRMA:function(e,data){e.firmalar.push(data)},EDIT_FIRMA:function(e,data){var t=e.firmalar.findIndex((function(e){return e.firma_id===data.firma_id}));o.a.set(e.firmalar,t,data)},DELETE_FIRMA:function(e,data){var t=e.firmalar.findIndex((function(p){return p.firma_id===data}));e.firmalar.splice(t,1)}},f={getFirmalar:function(e){var t=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var n,o;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=e.commit,r.next=3,t.$starWarsApi.$get("/firmalar");case 3:o=r.sent,n("SET_FIRMALAR",o);case 5:case"end":return r.stop()}}),r)})))()},saveFirma:function(e,t){var r=this;return Object(n.a)(regeneratorRuntime.mark((function n(){var o,c,m,l;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return o=e.commit,(c=new URLSearchParams).append("firma_unvan",t.firma_unvan),c.append("firma_tip",t.firma_tip),c.append("firma_tur",t.firma_tur),m={params:c},n.next=8,r.$starWarsApi.post("/firmalar",null,m);case 8:l=n.sent,o("ADD_FIRMA",l.data);case 10:case"end":return n.stop()}}),n)})))()},editFirma:function(e,t){var r=this;return Object(n.a)(regeneratorRuntime.mark((function n(){var o,c,m,l;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return o=e.commit,(c=new URLSearchParams).append("firma_unvan",t.firma_unvan),c.append("firma_tip",t.firma_tip),c.append("firma_tur",t.firma_tur),m={params:c},n.next=8,r.$starWarsApi.put("/firmalar/"+t.firma_id,null,m);case 8:l=n.sent,o("EDIT_FIRMA",l.data);case 10:case"end":return n.stop()}}),n)})))()},deleteFirma:function(e,t){var r=this;return Object(n.a)(regeneratorRuntime.mark((function n(){var o;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return o=e.commit,n.next=3,r.$starWarsApi.delete("/firmalar/"+t);case 3:n.sent,o("DELETE_FIRMA",t);case 5:case"end":return n.stop()}}),n)})))()}}},400:function(e,t){},401:function(e,t,r){"use strict";r.r(t),r.d(t,"getters",(function(){return c})),r.d(t,"state",(function(){return m})),r.d(t,"mutations",(function(){return l})),r.d(t,"actions",(function(){return f}));var n=r(4),o=(r(33),r(63),r(80),r(70),r(12),r(20),r(24),r(93),r(0)),c={getAllMalzemes:function(e){return e.malzemeler},getMalzemeBirimByID:function(e){return function(t){return e.malzemeler.find((function(e){return e.malzeme_id===t}))}}},m=function(){return{malzemeler:[]}},l={SET_MALZEMELER:function(e,data){e.malzemeler=data},ADD_MALZEME:function(e,data){e.malzemeler.push(data)},EDIT_MALZEME:function(e,data){var t=e.malzemeler.findIndex((function(e){return e.malzeme_id===data.malzeme_id}));o.a.set(e.malzemeler,t,data)},DELETE_MALZEME:function(e,data){var t=e.malzemeler.findIndex((function(e){return e.malzeme_id===data}));e.malzemeler.splice(t,1)}},f={getMalzemeler:function(e){var t=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var n,o;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=e.commit,r.next=3,t.$starWarsApi.$get("/malzemeler");case 3:o=r.sent,n("SET_MALZEMELER",o);case 5:case"end":return r.stop()}}),r)})))()},saveMalzemeler:function(e,t){var r=this;return Object(n.a)(regeneratorRuntime.mark((function n(){var o,c,m,l;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return o=e.commit,(c=new URLSearchParams).append("malzeme_adi",t.malzeme_adi),c.append("malzeme_birim",t.malzeme_birim),c.append("depo_id",t.depo_id),m={params:c},n.next=8,r.$starWarsApi.post("/malzemeler",null,m);case 8:l=n.sent,o("ADD_MALZEME",l.data);case 10:case"end":return n.stop()}}),n)})))()},editMalzemeler:function(e,t){var r=this;return Object(n.a)(regeneratorRuntime.mark((function n(){var o,c,m,l;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return o=e.commit,(c=new URLSearchParams).append("malzeme_adi",t.malzeme_adi),c.append("malzeme_birim",t.malzeme_birim),c.append("depo_id",t.depo_id),m={params:c},n.next=8,r.$starWarsApi.put("/malzemeler/"+t.malzeme_id,null,m);case 8:l=n.sent,o("EDIT_MALZEME",l.data);case 10:case"end":return n.stop()}}),n)})))()},deleteMalzemeler:function(e,t){var r=this;return Object(n.a)(regeneratorRuntime.mark((function n(){var o;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return o=e.commit,n.next=3,r.$starWarsApi.delete("/malzemeler/"+t);case 3:n.sent,o("DELETE_MALZEME",t);case 5:case"end":return n.stop()}}),n)})))()}}},402:function(e,t,r){"use strict";r.r(t),r.d(t,"state",(function(){return o})),r.d(t,"mutations",(function(){return c})),r.d(t,"actions",(function(){return m}));var n=r(4),o=(r(33),function(){return{permissions:[],rules:[]}}),c={SET_PERMISSIONS:function(e,data){e.permissions=data}},m={getPermissions:function(e,t){var r=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var n,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.commit,t.next=3,r.$starWarsApi.$get("/getAllPermissionsAttribute");case 3:o=t.sent,n("SET_PERMISSIONS",o);case 5:case"end":return t.stop()}}),t)})))()}}},403:function(e,t,r){"use strict";r.r(t),r.d(t,"getters",(function(){return c})),r.d(t,"state",(function(){return m})),r.d(t,"mutations",(function(){return l})),r.d(t,"actions",(function(){return f}));var n=r(4),o=(r(33),r(80),r(70),r(12),r(20),r(24),r(93),r(0)),c={},m=function(){return{sorumlular:[]}},l={SET_SORUMLULAR:function(e,data){e.sorumlular=data},ADD_SORUMLU:function(e,data){e.sorumlular.push(data)},EDIT_SORUMLU:function(e,data){var t=e.sorumlular.findIndex((function(e){return e.sorumlu_id===data.sorumlu_id}));o.a.set(e.sorumlular,t,data)},DELETE_SORUMLU:function(e,data){var t=e.sorumlular.findIndex((function(p){return p.sorumlu_id===data}));e.sorumlular.splice(t,1)}},f={getSorumlular:function(e){var t=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var n,o;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=e.commit,r.next=3,t.$starWarsApi.$get("/sorumlular");case 3:o=r.sent,n("SET_SORUMLULAR",o);case 5:case"end":return r.stop()}}),r)})))()},saveSorumlular:function(e,t){var r=this;return Object(n.a)(regeneratorRuntime.mark((function n(){var o,c,m,l;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return o=e.commit,(c=new URLSearchParams).append("sorumlu_ad_soyad",t.sorumlu_ad_soyad),m={params:c},n.next=6,r.$starWarsApi.post("/sorumlular",null,m);case 6:l=n.sent,o("ADD_SORUMLU",l.data);case 8:case"end":return n.stop()}}),n)})))()},editSorumlular:function(e,t){var r=this;return Object(n.a)(regeneratorRuntime.mark((function n(){var o,c,m,l;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return o=e.commit,(c=new URLSearchParams).append("sorumlu_ad_soyad",t.sorumlu_ad_soyad),m={params:c},n.next=6,r.$starWarsApi.put("/sorumlular/"+t.sorumlu_id,null,m);case 6:l=n.sent,o("EDIT_SORUMLU",l.data);case 8:case"end":return n.stop()}}),n)})))()},deleteSorumlular:function(e,t){var r=this;return Object(n.a)(regeneratorRuntime.mark((function n(){var o;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return o=e.commit,n.next=3,r.$starWarsApi.delete("/sorumlular/"+t);case 3:n.sent,o("DELETE_SORUMLU",t);case 5:case"end":return n.stop()}}),n)})))()}}},404:function(e,t,r){"use strict";r.r(t),r.d(t,"getters",(function(){return o})),r.d(t,"state",(function(){return c})),r.d(t,"mutations",(function(){return m})),r.d(t,"actions",(function(){return l}));var n=r(4),o=(r(33),r(25),{}),c=function(){return{stok_hareketleri:[],temp:[]}},m={SET_STOK_HAREKETLERI:function(e,data){e.stok_hareketleri=data},ADD_STOK_HAREKETI:function(e,data){e.temp=data,e.stok_hareketleri=e.stok_hareketleri.concat(e.temp)}},l={getStokHareketleri:function(e){var t=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var n,o;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=e.commit,r.next=3,t.$starWarsApi.$get("/stok-hareketleri");case 3:o=r.sent,n("SET_STOK_HAREKETLERI",o);case 5:case"end":return r.stop()}}),r)})))()},saveStokHareketi:function(e,t){var r=this;return Object(n.a)(regeneratorRuntime.mark((function n(){var o;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return o=e.commit,n.next=3,r.$starWarsApi.post("/stok-hareketleri",t).then((function(e){o("ADD_STOK_HAREKETI",e.data)}));case 3:case"end":return n.stop()}}),n)})))()}}},77:function(e,t,r){"use strict";var n={layout:"empty",props:{error:{type:Object,default:null}},data:function(){return{pageNotFound:"404 Not Found",otherError:"An error occurred"}},head:function(){return{title:404===this.error.statusCode?this.pageNotFound:this.otherError}}},o=(r(316),r(69)),c=r(85),m=r.n(c),l=r(423),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app",{attrs:{dark:""}},[404===e.error.statusCode?r("h1",[e._v("\n    "+e._s(e.pageNotFound)+"\n  ")]):r("h1",[e._v("\n    "+e._s(e.otherError)+"\n  ")]),e._v(" "),r("NuxtLink",{attrs:{to:"/"}},[e._v("\n    Home page\n  ")])],1)}),[],!1,null,"bfedb7fe",null);t.a=component.exports;m()(component,{VApp:l.a})}},[[292,18,5,19]]]);