(window.webpackJsonp=window.webpackJsonp||[]).push([[19,6],{435:function(e,t,l){"use strict";l.r(t);var o={props:{headers:{type:Array,default:null},slots:{type:Array,default:null},items:{type:Array,default:null},title:{type:String,default:null},showExpand:{type:Boolean,default:!1},singleExpand:{type:Boolean,default:!1},keyOfItem:{type:String,default:null},loading:{type:Boolean,default:!1},searchPorperyt:{type:Boolean,default:!0},paginationShow:{type:Boolean,default:!1},disablePagination:{type:Boolean,default:!1}},data:function(){return{search:"",expanded:[]}},methods:{loadDetails:function(e){this.$emit("row-click",e.item)},editItem:function(e){this.$emit("clicked-edit",e)},deleteItem:function(e){this.$emit("clicked-delete",e)}}},r=l(70),d=l(85),n=l.n(d),c=l(444),m=l(433),f=l(561),h=l(176),v=l(431),_=l(451),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("v-card",{attrs:{outlined:""}},[e.searchPorperyt?l("v-card-title",[e._v("\n      "+e._s(this.title)+"\n      "),l("v-spacer"),e._v(" "),l("v-spacer"),e._v(" "),l("v-text-field",{attrs:{"append-icon":"mdi-magnify",label:"Arama","single-line":"","hide-details":""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1):e._e(),e._v(" "),l("v-data-table",{attrs:{loading:e.loading,headers:e.headers,items:e.items,search:e.search,"show-expand":e.showExpand,"single-expand":e.singleExpand,expanded:e.expanded,"item-key":e.keyOfItem,"hide-default-footer":e.paginationShow,"disable-pagination":e.disablePagination},on:{"update:expanded":function(t){e.expanded=t},"item-expanded":e.loadDetails},scopedSlots:e._u([{key:"expanded-item",fn:function(t){var o=t.headers;return[l("td",{attrs:{colspan:o.length}},[e._t("expanded")],2)]}},e._l(e.slots,(function(slot){return{key:"item."+slot.slotName,fn:function(t){var l=t.item;return[e._t(slot.slotName,null,{degisken:l})]}}})),{key:"item.actions",fn:function(t){var o=t.item;return[l("v-icon",{attrs:{small:""},on:{click:function(t){return e.editItem(o)}}},[e._v("mdi-pencil")]),e._v(" "),l("v-icon",{attrs:{small:""},on:{click:function(t){return e.deleteItem(o)}}},[e._v("mdi-delete")])]}}],null,!0)})],1)}),[],!1,null,null,null);t.default=component.exports;n()(component,{VCard:c.a,VCardTitle:m.c,VDataTable:f.a,VIcon:h.a,VSpacer:v.a,VTextField:_.a})},436:function(e,t,l){"use strict";l.r(t);l(23);var o={props:{mdlText:{type:String,default:null},itemno:{type:Number,default:null},mdlBtnText:{type:String,default:null}},data:function(){return{dialog:!1,notifications:!1,sound:!0,widgets:!1}},methods:{saveItem:function(){this.$emit("clicked-save")},newItem:function(){this.$emit("clicked-new")}}},r=l(70),d=l(85),n=l.n(d),c=l(194),m=l(444),f=l(521),h=l(452),v=l(176),_=l(178),D=l(115),y=l(103),S=l(431),k=l(49),x=l(190),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("v-dialog",{attrs:{fullscreen:"","hide-overlay":"",transition:"dialog-bottom-transition"},scopedSlots:e._u([{key:"activator",fn:function(t){var o=t.on,r=t.attrs;return[l("v-btn",e._g(e._b({attrs:{color:"primary",dark:""},on:{click:function(t){return e.newItem()}}},"v-btn",r,!1),o),[e._v("\n      "+e._s(e.mdlBtnText)+"\n    ")])]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[e._v(" "),l("v-card",[l("v-toolbar",{attrs:{dark:"",color:"primary"}},[l("v-btn",{attrs:{icon:"",dark:""},on:{click:function(t){e.dialog=!1}}},[l("v-icon",[e._v("mdi-close")])],1),e._v(" "),l("v-toolbar-title",[e._v(e._s(e.mdlText))]),e._v(" "),l("v-spacer"),e._v(" "),l("v-toolbar-items",[l("v-btn",{attrs:{dark:"",text:""},on:{click:function(t){return e.saveItem()}}},[e._v("\n          Kaydet\n        ")])],1)],1),e._v(" "),l("v-list",{attrs:{"three-line":"",subheader:""}},[l("v-list-item",[l("v-list-item-content",[e._t("default")],2)],1)],1),e._v(" "),l("v-divider")],1)],1)}),[],!1,null,null,null);t.default=component.exports;n()(component,{VBtn:c.a,VCard:m.a,VDialog:f.a,VDivider:h.a,VIcon:v.a,VList:_.a,VListItem:D.a,VListItemContent:y.a,VSpacer:S.a,VToolbar:k.a,VToolbarItems:x.a,VToolbarTitle:x.b})},569:function(e,t,l){"use strict";l.r(t);l(10),l(6),l(9),l(13),l(11),l(14);var o=l(2),r=l(73),d=l(0);function n(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(object);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,l)}return t}function c(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?n(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):n(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var m={computed:c({},Object(r.d)({deposorumlulari:function(e){return e.deposorumlulari.depo_sorumlulari},sorumlular:function(e){return e.sorumlular.sorumlular},firmalar:function(e){return e.firmalar.firmalar},depolar:function(e){return e.depolar.depolar}})),methods:c(c({},Object(r.b)({getDepolar:"depolar/getDepolar",saveDepo:"depolar/saveDepo",editDepo:"depolar/editDepo",deleteDepo:"depolar/deleteDepo",getDepoSorumlulari:"deposorumlulari/getDepoSorumlulari",getSorumlular:"sorumlular/getSorumlular",saveSorumlular:"sorumlular/saveSorumlular",editSorumlular:"sorumlular/editSorumlular",deleteSorumlular:"sorumlular/deleteSorumlular",saveDepoSorumlulari:"deposorumlulari/saveDepoSorumlulari",editDepoSorumlulari:"deposorumlulari/editDepoSorumlulari",deleteDepoSorumlulari:"deposorumlulari/deleteDepoSorumlulari"})),{},{clickedNew:function(){this.status="new",d.a.set(this.MdlText,this.tab,this.MdlNewText[this.tab]),console.log("sdasd")},toastMessage:function(e,t){this.$toast.success(e+" "+t,{position:"bottom-right",timeout:5e3,closeOnClick:!1,pauseOnFocusLoss:!0,pauseOnHover:!0,draggable:!0,draggablePercent:.72,showCloseButtonOnHover:!0,hideProgressBar:!0,closeButton:"button",icon:!0,rtl:!1})},clickedSave:function(){var e=this;if(0==this.tab){if(this.$refs.depoform.validate(),"new"==this.status&&this.depo_valid){var t={depo_adi:this.depoAd,depo_id:this.depo_id};this.saveDepo(t).then((function(){e.toastMessage(e.depoAd,"Eklendi"),e.$refs.modalsdepolar.dialog=!1}))}if("edit"==this.status&&this.depo_valid){var l={depo_adi:this.depoAd,depo_id:this.depo_id};this.editDepo(l).then((function(){e.toastMessage(e.depoAd,"Düzenlendi"),e.$refs.modalsdepolar.dialog=!1}))}}if(1==this.tab){if(this.$refs.depolarform.validate(),"new"==this.status&&this.depovalid){var o={depo_id:this.depoadlari,sorumlu_id:this.sorumlulars};this.saveDepoSorumlulari(o).then((function(){e.toastMessage(e.depoadlari,"Eklendi"),e.$refs.modalsdepo.dialog=!1}))}if("edit"==this.status&&this.depovalid){var r={depo_sorumlu_id:this.depo_sorumlu_id,sorumlu_id:this.sorumlulars,depo_id:this.depoadlari};this.editDepoSorumlulari(r).then((function(){e.toastMessage(e.depoAds,"Düzenlendi"),e.$refs.modalsdepo.dialog=!1}))}}if(2==this.tab){if(this.$refs.sorumluform.validate(),"new"==this.status&&this.sorumluvalid){var d={sorumlu_ad_soyad:this.sorumluadisoyadi};this.saveSorumlular(d).then((function(){e.toastMessage(e.sorumluadisoyadi,"Eklendi"),e.$refs.modalssorumlular.dialog=!1}))}if("edit"==this.status&&this.sorumluvalid){var n={sorumlu_ad_soyad:this.sorumluadisoyadi,sorumlu_id:this.sorumlu_id};this.editSorumlular(n).then((function(){e.toastMessage(e.sorumluadisoyadi,"Düzenlendi"),e.$refs.modalssorumlular.dialog=!1}))}}},clickedEdit:function(e){this.status="edit",d.a.set(this.MdlText,this.tab,this.MdlEditText[this.tab]),0==this.tab&&(this.depoAd=e.depo_adi,this.depo_id=e.depo_id,this.$refs.modalsdepolar.dialog=!0),1==this.tab&&(this.sorumlulars=e.sorumlu_id,this.depo_sorumlu_id=e.depo_sorumlu_id,this.depoadlari=e.depo_id,this.depoAds=e.depo_adi,this.$refs.modalsdepo.dialog=!0),2==this.tab&&(this.sorumluadisoyadi=e.sorumlu_ad_soyad,this.sorumlu_id=e.sorumlu_id,this.$refs.modalssorumlular.dialog=!0)},clickedDelete:function(e){var t=this;0==this.tab&&this.deleteDepo(e.depo_id).then((function(){t.toastMessage(e.depo_adi,"Silindi")})),1==this.tab&&this.deleteDepoSorumlulari(e.depo_sorumlu_id).then((function(){t.toastMessage(e.depo_sorumlu_id,"Silindi")})),2==this.tab&&this.deleteSorumlular(e.sorumlu_id).then((function(){t.toastMessage(e.sorumlu_ad_soyad,"Silindi")}))}}),created:function(){this.getDepoSorumlulari(),this.getSorumlular(),this.getDepolar()},data:function(){return{depoAd:"",depo_valid:!1,status:null,sorumluvalid:!1,sorumluadisoyadi:"",selectRules:[function(e){return!!e||"Bu alan Gerekli"}],sorumlurules:[function(e){return!!e||"Bu alan Gereklidir"},function(e){return e.length<=255||"En fazla 255 karakter olabilir."}],tab:null,MdlText:[null,null,null,null],refs:["modalsdepolar","modalsdepo","modalssorumlular","modalsfirmalar"],MdlNewText:["Depo Tanımla","Depo Sorumlu Tanımla","Sorumlu Tanımla","Firma Ekle"],MdlEditText:["Depo Düzenle","Depo Sorumlu Düzenle","Sorumlu Düzenle","Firma Düzenle"],btnText:["Depo Tanımla","Depo Sorumlu Tanımla","Sorumlu Tanımla","Firma Ekle"],title:["Depolar","Depo Sorumluları","Sorumlular","Firmalar"],headers:[[{text:"Depo Adı",value:"depo_adi"},{text:"Actions",value:"actions",sortable:!1}],[{text:"Depo Adı",value:"depo_adi"},{text:"Depo Sorumlusu",value:"sorumlu_ad_soyad"},{text:"Actions",value:"actions",sortable:!1}],[{text:"Sorumlu Adı Soyadı",value:"sorumlu_ad_soyad"},{text:"Actions",value:"actions",sortable:!1}]],depoadi:"",depovalid:!1,sorumlulars:null,depoadlari:null}}},f=l(70),h=l(85),v=l.n(h),_=l(444),D=l(556),y=l(426),S=l(522),k=l(557),x=l(451),component=Object(f.a)(m,(function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",[l("v-card",{staticClass:"pt-3 pb-3 pl-3 mb-5 mt-5",attrs:{outlined:""}},[l("Modals",{ref:e.refs[0],attrs:{mdlText:e.MdlText[0],mdlBtnText:e.btnText[0]},on:{"clicked-save":e.clickedSave,"clicked-new":e.clickedNew}},[l("v-form",{ref:"depoform",model:{value:e.depo_valid,callback:function(t){e.depo_valid=t},expression:"depo_valid"}},[l("v-container",{attrs:{fluid:""}},[l("v-row",[l("v-col",{attrs:{cols:"12",md:"12"}},[l("v-text-field",{staticClass:"mb-8",attrs:{rules:e.sorumlurules,counter:255,label:"Depo Adı",required:"",dense:""},model:{value:e.depoAd,callback:function(t){e.depoAd=t},expression:"depoAd"}})],1),e._v(" "),l("v-col",{attrs:{cols:"12",md:"12"}})],1)],1)],1)],1)],1),e._v(" "),l("Datatable",{attrs:{headers:e.headers[0],items:e.depolar,title:e.title[0]},on:{"clicked-edit":e.clickedEdit,"clicked-delete":e.clickedDelete}})],1)}),[],!1,null,null,null);t.default=component.exports;v()(component,{Modals:l(436).default,Datatable:l(435).default}),v()(component,{VCard:_.a,VCol:D.a,VContainer:y.a,VForm:S.a,VRow:k.a,VTextField:x.a})}}]);