(window.webpackJsonp=window.webpackJsonp||[]).push([[11,6],{435:function(e,t,n){"use strict";n.r(t);var l={props:{headers:{type:Array,default:null},slots:{type:Array,default:null},items:{type:Array,default:null},title:{type:String,default:null},showExpand:{type:Boolean,default:!1},singleExpand:{type:Boolean,default:!1},keyOfItem:{type:String,default:null},loading:{type:Boolean,default:!1},searchPorperyt:{type:Boolean,default:!0},paginationShow:{type:Boolean,default:!1}},data:function(){return{search:"",expanded:[]}},methods:{loadDetails:function(e){this.$emit("row-click",e.item)},editItem:function(e){this.$emit("clicked-edit",e)},deleteItem:function(e){this.$emit("clicked-delete",e)}}},r=n(70),o=n(85),d=n.n(o),c=n(444),f=n(433),h=n(561),k=n(176),m=n(431),v=n(451),component=Object(r.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",{attrs:{outlined:""}},[e.searchPorperyt?n("v-card-title",[e._v("\n      "+e._s(this.title)+"\n      "),n("v-spacer"),e._v(" "),n("v-spacer"),e._v(" "),n("v-text-field",{attrs:{"append-icon":"mdi-magnify",label:"Arama","single-line":"","hide-details":""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1):e._e(),e._v(" "),n("v-data-table",{attrs:{loading:e.loading,headers:e.headers,items:e.items,search:e.search,"show-expand":e.showExpand,"single-expand":e.singleExpand,expanded:e.expanded,"item-key":e.keyOfItem,"hide-default-footer":e.paginationShow},on:{"update:expanded":function(t){e.expanded=t},"item-expanded":e.loadDetails},scopedSlots:e._u([{key:"expanded-item",fn:function(t){var l=t.headers;return[n("td",{attrs:{colspan:l.length}},[e._t("expanded")],2)]}},e._l(e.slots,(function(slot){return{key:"item."+slot.slotName,fn:function(t){var n=t.item;return[e._t(slot.slotName,null,{degisken:n})]}}})),{key:"item.actions",fn:function(t){var l=t.item;return[n("v-icon",{attrs:{small:""},on:{click:function(t){return e.editItem(l)}}},[e._v("mdi-pencil")]),e._v(" "),n("v-icon",{attrs:{small:""},on:{click:function(t){return e.deleteItem(l)}}},[e._v("mdi-delete")])]}}],null,!0)})],1)}),[],!1,null,null,null);t.default=component.exports;d()(component,{VCard:c.a,VCardTitle:f.c,VDataTable:h.a,VIcon:k.a,VSpacer:m.a,VTextField:v.a})},563:function(e,t,n){"use strict";n.r(t);n(10),n(6),n(9),n(13),n(11),n(14);var l=n(2),r=n(73);function o(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function d(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(t){Object(l.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var c={created:function(){this.getBelgeHareketleri()},computed:d({},Object(r.d)({belgeler:function(e){return e.belge_hareketleri.belge_hareketleri},single_hareket:function(e){return e.stokhareketleri.single_hareket}})),data:function(){return{singleItems:[],keyItem:"belge_no",slots:[{Id:1,slotName:"hareket_tipi"}],loadingStatus:!1,title:"Belge Bazında Stok Hareketleri",headers:[{text:"Hareket",value:"hareket_tipi"},{text:"Belge No",value:"belge_no"},{text:"M. Kalem Sayısı",value:"kalem_sayisi"},{text:"Depo",value:"depo_adi"},{text:"Firma/Depo",value:"firma_depo"},{text:"Hareket Tarihi",value:"hareket_tarihi"},{text:"Actions",value:"actions",sortable:!1}],header:[{text:"Malzeme Adı",value:"malzeme_adi"},{text:"Miktar",value:"miktar"},{text:"Birim",value:"malzeme_birim"},{text:"Actions",value:"actions",sortable:!1}]}},methods:d(d({},Object(r.b)({getBelgeHareketleri:"belge_hareketleri/getBelgeHareketleri",getSingleHareket:"stokhareketleri/getSingleHareket"})),{},{clickedEdit:function(){},clickedDelete:function(){},rowClicked:function(e){var t=this;this.loadingStatus=!0,this.getSingleHareket(e.belge_no).then((function(e){t.loadingStatus=!1,t.singleItems=t.single_hareket}))},getColor:function(e){return"GİRİŞ"==e?"green":"ÇIKIŞ"==e?"red":void 0}})},f=n(70),h=n(85),k=n.n(h),m=n(480),component=Object(f.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("Datatable",{attrs:{headers:e.headers,items:e.belgeler,title:e.title,slots:e.slots,showExpand:!0,singleExpand:!0,keyOfItem:e.keyItem},on:{"clicked-edit":e.clickedEdit,"clicked-delete":e.clickedDelete,"row-click":e.rowClicked},scopedSlots:e._u([{key:"expanded",fn:function(){return[n("Datatable",{staticClass:"mb-5 mt-5",attrs:{loading:e.loadingStatus,headers:e.header,searchPorperyt:!1,items:e.singleItems,paginationShow:!0},on:{"clicked-edit":e.clickedEdit,"clicked-delete":e.clickedDelete}})]},proxy:!0},{key:"hareket_tipi",fn:function(t){var l=t.degisken;return[n("v-chip",{attrs:{color:e.getColor(l.hareket_tipi),small:"",dark:"",label:""}},[e._v("\n            "+e._s(l.hareket_tipi)+"\n            ")])]}}])})],1)}),[],!1,null,null,null);t.default=component.exports;k()(component,{Datatable:n(435).default}),k()(component,{VChip:m.a})}}]);