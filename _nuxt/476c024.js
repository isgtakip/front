(window.webpackJsonp=window.webpackJsonp||[]).push([[18,6],{435:function(e,t,l){"use strict";l.r(t);var r={props:{headers:{type:Array,default:null},slots:{type:Array,default:null},items:{type:Array,default:null},title:{type:String,default:null},showExpand:{type:Boolean,default:!1},singleExpand:{type:Boolean,default:!1},keyOfItem:{type:String,default:null}},data:function(){return{search:"",expanded:[]}},methods:{editItem:function(e){this.$emit("clicked-edit",e)},deleteItem:function(e){this.$emit("clicked-delete",e)}}},n=l(70),o=l(85),c=l.n(o),d=l(444),m=l(433),h=l(561),v=l(176),f=l(431),k=l(451),component=Object(n.a)(r,(function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("v-card",{attrs:{outlined:""}},[l("v-card-title",[e._v("\n      "+e._s(this.title)+"\n      "),l("v-spacer"),e._v(" "),l("v-spacer"),e._v(" "),l("v-text-field",{attrs:{"append-icon":"mdi-magnify",label:"Arama","single-line":"","hide-details":""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1),e._v(" "),l("v-data-table",{attrs:{headers:e.headers,items:e.items,search:e.search,"show-expand":e.showExpand,"single-expand":e.singleExpand,expanded:e.expanded,"item-key":e.keyOfItem},on:{"update:expanded":function(t){e.expanded=t}},scopedSlots:e._u([{key:"expanded-item",fn:function(t){var r=t.headers,n=t.item;return[l("td",{attrs:{colspan:r.length}},[e._v("\n        More info about "+e._s(n.belge_no)+"\n      ")])]}},e._l(e.slots,(function(slot){return{key:"item."+slot.slotName,fn:function(t){var l=t.item;return[e._t(slot.slotName,null,{degisken:l})]}}})),{key:"item.actions",fn:function(t){var r=t.item;return[l("v-icon",{attrs:{small:""},on:{click:function(t){return e.editItem(r)}}},[e._v("mdi-pencil")]),e._v(" "),l("v-icon",{attrs:{small:""},on:{click:function(t){return e.deleteItem(r)}}},[e._v("mdi-delete")])]}}],null,!0)})],1)}),[],!1,null,null,null);t.default=component.exports;c()(component,{VCard:d.a,VCardTitle:m.c,VDataTable:h.a,VIcon:v.a,VSpacer:f.a,VTextField:k.a})},436:function(e,t,l){"use strict";l.r(t);l(23);var r={props:{mdlText:{type:String,default:null},itemno:{type:Number,default:null},mdlBtnText:{type:String,default:null}},data:function(){return{dialog:!1,notifications:!1,sound:!0,widgets:!1}},methods:{saveItem:function(){this.$emit("clicked-save")},newItem:function(){this.$emit("clicked-new")}}},n=l(70),o=l(85),c=l.n(o),d=l(194),m=l(444),h=l(521),v=l(452),f=l(176),k=l(178),_=l(115),x=l(103),S=l(431),I=l(49),y=l(190),component=Object(n.a)(r,(function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("v-dialog",{attrs:{fullscreen:"","hide-overlay":"",transition:"dialog-bottom-transition"},scopedSlots:e._u([{key:"activator",fn:function(t){var r=t.on,n=t.attrs;return[l("v-btn",e._g(e._b({attrs:{color:"primary",dark:""},on:{click:function(t){return e.newItem()}}},"v-btn",n,!1),r),[e._v("\n      "+e._s(e.mdlBtnText)+"\n    ")])]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[e._v(" "),l("v-card",[l("v-toolbar",{attrs:{dark:"",color:"primary"}},[l("v-btn",{attrs:{icon:"",dark:""},on:{click:function(t){e.dialog=!1}}},[l("v-icon",[e._v("mdi-close")])],1),e._v(" "),l("v-toolbar-title",[e._v(e._s(e.mdlText))]),e._v(" "),l("v-spacer"),e._v(" "),l("v-toolbar-items",[l("v-btn",{attrs:{dark:"",text:""},on:{click:function(t){return e.saveItem()}}},[e._v("\n          Kaydet\n        ")])],1)],1),e._v(" "),l("v-list",{attrs:{"three-line":"",subheader:""}},[l("v-list-item",[l("v-list-item-content",[e._t("default")],2)],1)],1),e._v(" "),l("v-divider")],1)],1)}),[],!1,null,null,null);t.default=component.exports;c()(component,{VBtn:d.a,VCard:m.a,VDialog:h.a,VDivider:v.a,VIcon:f.a,VList:k.a,VListItem:_.a,VListItemContent:x.a,VSpacer:S.a,VToolbar:I.a,VToolbarItems:y.a,VToolbarTitle:y.b})},440:function(e,t,l){var content=l(441);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,l(18).default)("50788f08",content,!0,{sourceMap:!1})},441:function(e,t,l){var r=l(17)(!1);r.push([e.i,".v-toolbar__content,.v-toolbar__extension{border-bottom:1px solid #efefef}.compact-form{transform:scale(.875);transform-origin:left}.v-tabs-bar.v-tabs-bar--is-mobile .v-tab{margin-left:0!important}.v-autocomplete.v-input>.v-input__control>.v-input__slot{cursor:text}.v-autocomplete input{align-self:center}.v-autocomplete.v-select.v-input--is-focused input{min-width:64px}.v-autocomplete:not(.v-input--is-focused).v-select--chips input{max-height:0;padding:0}.v-autocomplete--is-selecting-index input{opacity:0}.v-autocomplete.v-text-field--enclosed:not(.v-text-field--solo):not(.v-text-field--single-line):not(.v-text-field--outlined) .v-select__slot>input{margin-top:24px}.v-autocomplete.v-text-field--enclosed:not(.v-text-field--solo):not(.v-text-field--single-line):not(.v-text-field--outlined).v-input--dense .v-select__slot>input{margin-top:20px}.v-autocomplete:not(.v-input--is-disabled).v-select.v-text-field input{pointer-events:inherit}.v-autocomplete__content.v-menu__content,.v-autocomplete__content.v-menu__content .v-card{border-radius:0}",""]),e.exports=r},476:function(e,t,l){"use strict";l(10),l(6),l(13),l(11),l(14);var r=l(2),n=(l(57),l(9),l(54),l(63),l(34),l(53),l(440),l(445)),o=l(451),c=l(80),d=l(1);function m(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(object);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,l)}return t}function h(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var v=h(h({},n.b),{},{offsetY:!0,offsetOverflow:!0,transition:!1});t.a=n.a.extend({name:"v-autocomplete",props:{allowOverflow:{type:Boolean,default:!0},autoSelectFirst:{type:Boolean,default:!1},filter:{type:Function,default:function(e,t,l){return l.toLocaleLowerCase().indexOf(t.toLocaleLowerCase())>-1}},hideNoData:Boolean,menuProps:{type:n.a.options.props.menuProps.type,default:function(){return v}},noFilter:Boolean,searchInput:{type:String}},data:function(){return{lazySearch:this.searchInput}},computed:{classes:function(){return h(h({},n.a.options.computed.classes.call(this)),{},{"v-autocomplete":!0,"v-autocomplete--is-selecting-index":this.selectedIndex>-1})},computedItems:function(){return this.filteredItems},selectedValues:function(){var e=this;return this.selectedItems.map((function(t){return e.getValue(t)}))},hasDisplayedItems:function(){var e=this;return this.hideSelected?this.filteredItems.some((function(t){return!e.hasItem(t)})):this.filteredItems.length>0},currentRange:function(){return null==this.selectedItem?0:String(this.getText(this.selectedItem)).length},filteredItems:function(){var e=this;return!this.isSearching||this.noFilter||null==this.internalSearch?this.allItems:this.allItems.filter((function(t){var l=Object(d.r)(t,e.itemText),text=null!=l?String(l):"";return e.filter(t,String(e.internalSearch),text)}))},internalSearch:{get:function(){return this.lazySearch},set:function(e){this.lazySearch!==e&&(this.lazySearch=e,this.$emit("update:search-input",e))}},isAnyValueAllowed:function(){return!1},isDirty:function(){return this.searchIsDirty||this.selectedItems.length>0},isSearching:function(){return this.multiple&&this.searchIsDirty||this.searchIsDirty&&this.internalSearch!==this.getText(this.selectedItem)},menuCanShow:function(){return!!this.isFocused&&(this.hasDisplayedItems||!this.hideNoData)},$_menuProps:function(){var e=n.a.options.computed.$_menuProps.call(this);return e.contentClass="v-autocomplete__content ".concat(e.contentClass||"").trim(),h(h({},v),e)},searchIsDirty:function(){return null!=this.internalSearch&&""!==this.internalSearch},selectedItem:function(){var e=this;return this.multiple?null:this.selectedItems.find((function(i){return e.valueComparator(e.getValue(i),e.getValue(e.internalValue))}))},listData:function(){var data=n.a.options.computed.listData.call(this);return data.props=h(h({},data.props),{},{items:this.virtualizedItems,noFilter:this.noFilter||!this.isSearching||!this.filteredItems.length,searchInput:this.internalSearch}),data}},watch:{filteredItems:"onFilteredItemsChanged",internalValue:"setSearch",isFocused:function(e){e?(document.addEventListener("copy",this.onCopy),this.$refs.input&&this.$refs.input.select()):(document.removeEventListener("copy",this.onCopy),this.$refs.input&&this.$refs.input.blur(),this.updateSelf())},isMenuActive:function(e){!e&&this.hasSlot&&(this.lazySearch=null)},items:function(e,t){t&&t.length||!this.hideNoData||!this.isFocused||this.isMenuActive||!e.length||this.activateMenu()},searchInput:function(e){this.lazySearch=e},internalSearch:"onInternalSearchChanged",itemText:"updateSelf"},created:function(){this.setSearch()},destroyed:function(){document.removeEventListener("copy",this.onCopy)},methods:{onFilteredItemsChanged:function(e,t){var l=this;e!==t&&(this.setMenuIndex(-1),this.$nextTick((function(){l.internalSearch&&(1===e.length||l.autoSelectFirst)&&(l.$refs.menu.getTiles(),l.setMenuIndex(0))})))},onInternalSearchChanged:function(){this.updateMenuDimensions()},updateMenuDimensions:function(){this.isMenuActive&&this.$refs.menu&&this.$refs.menu.updateDimensions()},changeSelectedIndex:function(e){this.searchIsDirty||(this.multiple&&e===d.x.left?-1===this.selectedIndex?this.selectedIndex=this.selectedItems.length-1:this.selectedIndex--:this.multiple&&e===d.x.right?this.selectedIndex>=this.selectedItems.length-1?this.selectedIndex=-1:this.selectedIndex++:e!==d.x.backspace&&e!==d.x.delete||this.deleteCurrentItem())},deleteCurrentItem:function(){var e=this.selectedIndex,t=this.selectedItems[e];if(this.isInteractive&&!this.getDisabled(t)){var l=this.selectedItems.length-1;if(-1!==this.selectedIndex||0===l){var r=e!==this.selectedItems.length-1?e:e-1;this.selectedItems[r]?this.selectItem(t):this.setValue(this.multiple?[]:null),this.selectedIndex=r}else this.selectedIndex=l}},clearableCallback:function(){this.internalSearch=null,n.a.options.methods.clearableCallback.call(this)},genInput:function(){var input=o.a.options.methods.genInput.call(this);return input.data=Object(c.a)(input.data,{attrs:{"aria-activedescendant":Object(d.p)(this.$refs.menu,"activeTile.id"),autocomplete:Object(d.p)(input.data,"attrs.autocomplete","off")},domProps:{value:this.internalSearch}}),input},genInputSlot:function(){var slot=n.a.options.methods.genInputSlot.call(this);return slot.data.attrs.role="combobox",slot},genSelections:function(){return this.hasSlot||this.multiple?n.a.options.methods.genSelections.call(this):[]},onClick:function(e){this.isInteractive&&(this.selectedIndex>-1?this.selectedIndex=-1:this.onFocus(),this.isAppendInner(e.target)||this.activateMenu())},onInput:function(e){if(!(this.selectedIndex>-1)&&e.target){var t=e.target,l=t.value;t.value&&this.activateMenu(),this.internalSearch=l,this.badInput=t.validity&&t.validity.badInput}},onKeyDown:function(e){var t=e.keyCode;!e.ctrlKey&&[d.x.home,d.x.end].includes(t)||n.a.options.methods.onKeyDown.call(this,e),this.changeSelectedIndex(t)},onSpaceDown:function(e){},onTabDown:function(e){n.a.options.methods.onTabDown.call(this,e),this.updateSelf()},onUpDown:function(e){e.preventDefault(),this.activateMenu()},selectItem:function(e){n.a.options.methods.selectItem.call(this,e),this.setSearch()},setSelectedItems:function(){n.a.options.methods.setSelectedItems.call(this),this.isFocused||this.setSearch()},setSearch:function(){var e=this;this.$nextTick((function(){e.multiple&&e.internalSearch&&e.isMenuActive||(e.internalSearch=!e.selectedItems.length||e.multiple||e.hasSlot?null:e.getText(e.selectedItem))}))},updateSelf:function(){(this.searchIsDirty||this.internalValue)&&(this.valueComparator(this.internalSearch,this.getValue(this.internalValue))||this.setSearch())},hasItem:function(e){return this.selectedValues.indexOf(this.getValue(e))>-1},onCopy:function(e){var t,l;if(-1!==this.selectedIndex){var r=this.selectedItems[this.selectedIndex],n=this.getText(r);null==(t=e.clipboardData)||t.setData("text/plain",n),null==(l=e.clipboardData)||l.setData("text/vnd.vuetify.autocomplete.item+plain",n),e.preventDefault()}}}})},481:function(e,t,l){var content=l(531);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,l(18).default)("1d502ae7",content,!0,{sourceMap:!1})},485:function(e,t,l){"use strict";l.r(t);var r=l(16),n=(l(33),l(58),l(25),l(477),{data:function(e){return{date:(new Date).toISOString().substr(0,10),dateFormatted:e.formatDate((new Date).toISOString().substr(0,10)),menu1:!1,menu2:!1,menu:!1}},computed:{computedDateFormatted:function(){return this.formatDate(this.date)}},watch:{date:function(e){this.dateFormatted=this.formatDate(this.date)}},methods:{formatDate:function(e){if(!e)return null;var t=e.split("-"),l=Object(r.a)(t,3),n=l[0],o=l[1],c=l[2];return"".concat(n,"/").concat(o,"/").concat(c)},parseDate:function(e){if(!e)return null;var t=e.split("/"),l=Object(r.a)(t,3),n=l[0],o=l[1],c=l[2];return"".concat(c,"-").concat(n.padStart(2,"0"),"-").concat(o.padStart(2,"0"))}}}),o=l(70),c=l(85),d=l.n(c),m=l(194),h=l(560),v=l(416),f=l(431),k=l(451),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("v-menu",{ref:"menu",attrs:{"close-on-content-click":!1,"return-value":e.date,transition:"scale-transition","offset-y":"","min-width":"auto"},on:{"update:returnValue":function(t){e.date=t},"update:return-value":function(t){e.date=t}},scopedSlots:e._u([{key:"activator",fn:function(t){var r=t.on,n=t.attrs;return[l("v-text-field",e._g(e._b({attrs:{label:"İşlem Tarihi",readonly:"",dense:"",outlined:""},model:{value:e.date,callback:function(t){e.date=t},expression:"date"}},"v-text-field",n,!1),r))]}}]),model:{value:e.menu,callback:function(t){e.menu=t},expression:"menu"}},[e._v(" "),l("v-date-picker",{attrs:{"no-title":"",scrollable:""},model:{value:e.date,callback:function(t){e.date=t},expression:"date"}},[l("v-spacer"),e._v(" "),l("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(t){e.menu=!1}}},[e._v("\n       Cancel\n     ")]),e._v(" "),l("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(t){return e.$refs.menu.save(e.date)}}},[e._v("\n       OK\n     ")])],1)],1)}),[],!1,null,null,null);t.default=component.exports;d()(component,{VBtn:m.a,VDatePicker:h.a,VMenu:v.a,VSpacer:f.a,VTextField:k.a})},530:function(e,t,l){"use strict";l(481)},531:function(e,t,l){var r=l(17)(!1);r.push([e.i,".v-list-item__content[data-v-66b3806e]{padding-bottom:0!important}.v-list[data-v-66b3806e]{display:block;padding-bottom:0!important;padding:8px 0}",""]),e.exports=r},568:function(e,t,l){"use strict";l.r(t);l(10),l(6),l(9),l(13),l(11),l(14);var r=l(2),n=(l(64),l(73)),o=l(0);function c(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(object);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,l)}return t}function d(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var m={computed:d(d({},Object(n.d)({deposorumlulari:function(e){return e.deposorumlulari.depo_sorumlulari},sorumlular:function(e){return e.sorumlular.sorumlular},firmalar:function(e){return e.firmalar.firmalar},depolar:function(e){return e.depolar.depolar},malzemeler:function(e){return e.malzemeler.malzemeler},stokhareketleri:function(e){return e.stokhareketleri.stok_hareketleri}})),Object(n.c)({getSorumluByDepoID:"deposorumlulari/getSorumluByDepoID",getMalzemeBirimByID:"malzemeler/getMalzemeBirimByID"})),created:function(){this.getDepoSorumlulari(),this.getSorumlular(),this.getFirmalar(),this.getDepolar(),this.getMalzemeler(),this.getStokHareketleri()},methods:d(d({},Object(n.b)({getDepolar:"depolar/getDepolar",getDepoSorumlulari:"deposorumlulari/getDepoSorumlulari",getSorumlular:"sorumlular/getSorumlular",getFirmalar:"firmalar/getFirmalar",getMalzemeler:"malzemeler/getMalzemeler",saveStokHareketi:"stokhareketleri/saveStokHareketi",getStokHareketleri:"stokhareketleri/getStokHareketleri",deleteStokHareket:"stokhareketleri/deleteStokHareket"})),{},{onChange1:function(e){this.deneme=this.getMalzemeBirimByID(this.inputs[e].malzeme),this.okan=[{malzeme_adi:this.deneme.malzeme_adi,malzeme_miktar:this.deneme.malzeme_miktar,malzeme_birim:this.deneme.malzeme_birim,malzeme_id:this.deneme.malzeme_id}],o.a.set(this.malzeme_birimleri,e,this.okan),this.inputs[e].birim=this.inputs[e].malzeme},onChange:function(e){"depo"==e&&(this.temp=[],this.temp=this.getSorumluByDepoID(this.depoadi),this.depo_sorumlulari=this.temp),"harekettipi"==e&&(this.tedarikturu="",1==this.harekettipi?(this.tedarikturleri=this.tedarikturleristokgiris,this.tedarikturu=1,this.tedarikcilabels=this.tedarikcilabel[0]):(this.tedarikturleri=this.tedarikturleristokcikis,this.tedarikcilabels=this.tedarikcilabel[1])),(e="tedarikturu")&&(this.tedarikci=[],1==this.tedarikturu&&1==this.harekettipi&&(this.tedarikcilabels=this.tedarikcilabel[0],this.tedarikciler=this.firmalar,this.itemtext=this.itemtext1[0],this.itemvalue=this.itemvalue1[0]),1==this.tedarikturu&&2==this.harekettipi&&(this.tedarikcilabels=this.tedarikcilabel[2],this.tedarikciler=this.firmalar,this.itemtext=this.itemtext1[0],this.itemvalue=this.itemvalue1[0]),2==this.tedarikturu&&(this.tedarikcilabels=this.tedarikcilabel[3],this.tedarikciler=this.depolar,this.itemtext=this.itemtext1[1],this.itemvalue=this.itemvalue1[1]))},getColor:function(e){return"GİRİŞ"==e?"green":"ÇIKIŞ"==e?"red":void 0},clickedEdit:function(e){this.status="edit"},clickedDelete:function(e){var t=this;this.deleteStokHareket(e.hareket_id).then((function(){t.toastMessage(e.malzeme_adi,"Silindi")}))},add:function(e){this.inputs.push({malzeme:"",miktar:"",birim:""})},remove:function(e){this.inputs.splice(e,1)},clickedNew:function(){this.status="new"},clickedSave:function(){var e=this;if(this.$refs.stokform.validate(),"new"==this.status&&this.stokvalid){var t={depo_id:this.depoadi,sorumlu_id:this.sorumluadi,hareket_tipi:this.harekettipi,belge_tipi_id:this.belgetipi,belge_no:this.belgeno,tedarik_turu:this.tedarikturu,firma_depo_id:this.tedarikci,hareket_tarihi:this.$refs.picker.date,malzemeler:JSON.parse(JSON.stringify(this.inputs))};this.saveStokHareketi(t).then((function(){e.toastMessage("Stok Hareketi","Eklendi"),e.$refs.modals.dialog=!1}))}},toastMessage:function(e,t){this.$toast.success(e+" "+t,{position:"bottom-right",timeout:5e3,closeOnClick:!1,pauseOnFocusLoss:!0,pauseOnHover:!0,draggable:!0,draggablePercent:.72,showCloseButtonOnHover:!0,hideProgressBar:!0,closeButton:"button",icon:!0,rtl:!1})}}),data:function(){return{slots:[{Id:1,slotName:"hareket_tipi"}],stokvalid:!1,malzeme_birimleri:[],depo_sorumlulari:[],k:null,itemtext:"",itemvalue:"",itemtext1:["firma_unvan","depo_adi"],itemvalue1:["firma_id","depo_id"],tedarikciler:[],tedarikcilabels:"",harekettipi:"",tedarikturu:"",belgeno:"",tedarikci:"",belgetipi:"",title:"Stok Hareketleri",tedarikturleri:[],inputs:[{malzemeler:"",miktar:"",birim:""}],status:null,selectRules:[function(e){return!!e||"Bu alan Gerekli"}],sorumlurules:[function(e){return!!e||"Bu alan Gereklidir"},function(e){return e.length<=255||"En fazla 255 karakter olabilir."}],tab:null,MdlText:"Stok Hareketi Ekle",refs:["modalsdepolar","modalsdepo","modalssorumlular","modalsfirmalar"],MdlNewText:["Depo Tanımla","Depo Sorumlu Tanımla","Sorumlu Tanımla","Firma Ekle"],MdlEditText:["Depo Düzenle","Depo Sorumlu Düzenle","Sorumlu Düzenle","Firma Düzenle"],btnText:"Stok Hareketi Ekle",birimler:["ADET","KG","METRE","TON"],belgetipleri:[{belge_tipi:1,belge:"İRSALİYE"},{belge_tipi:2,belge:"DEPO FİŞİ"}],tedarikturleristokcikis:[{tedarik_id:1,tedarik_turu:"FİRMA"},{tedarik_id:2,tedarik_turu:"DEPO"}],tedarikturleristokgiris:[{tedarik_id:1,tedarik_turu:"FİRMA"}],harekettipleri:[{hareket_tipi:1,hareket:"STOK GİRİŞİ"},{hareket_tipi:2,hareket:"STOK ÇIKIŞI"}],headers:[{text:"Hareket",value:"hareket_tipi"},{text:"Belge No",value:"belge_no"},{text:"Malzeme Adı",value:"malzeme_adi"},{text:"Miktar",value:"miktar"},{text:"Birim",value:"malzeme_birim"},{text:"Depo",value:"depo_adi"},{text:"Firma/Depo",value:"firma_depo"},{text:"Hareket Tarihi",value:"hareket_tarihi"},{text:"Actions",value:"actions",sortable:!1}],depoadi:"",sorumluadi:[],tedarikcilabel:["Tedarikçi","Firma/Depo","Çıkış Firma","Çıkış Depo"]}}},h=(l(530),l(70)),v=l(85),f=l.n(v),k=l(476),_=l(194),x=l(444),S=l(480),I=l(556),y=l(426),D=l(522),O=l(176),C=l(178),w=l(115),z=l(103),V=l(557),T=l(451),component=Object(h.a)(m,(function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",[l("v-card",{staticClass:"pt-3 pb-3 pl-3 mb-5",attrs:{outlined:""}},[l("Modals",{ref:"modals",attrs:{mdlText:e.MdlText,mdlBtnText:e.btnText},on:{"clicked-save":e.clickedSave,"clicked-new":e.clickedNew}},[l("v-list",{staticClass:"pl-5 mb-0"},[l("v-form",{ref:"stokform",model:{value:e.stokvalid,callback:function(t){e.stokvalid=t},expression:"stokvalid"}},[l("v-list-item",{staticClass:"pl-0 pb-0 mb-0"},[l("v-list-item-content",{staticClass:"pl-0 mb-0"},[l("v-list-item-title",[e._v("Stok Hareket Bilgileri")]),e._v(" "),l("v-list-item-subtitle",[e._v("Stok hareketleri tanımlamalarını bu bölümden yapabilirsiniz")]),e._v(" "),l("v-container",{attrs:{fluid:""}},[l("v-row",{staticClass:"pb-0"},[l("v-col",{staticClass:"pl-0 mb-0 pb-0",attrs:{cols:"12",md:"9"}},[l("v-autocomplete",{attrs:{rules:e.selectRules,label:"Depo Seçiniz",outlined:"",items:e.depolar,"item-text":"depo_adi","item-value":"depo_id",required:"",dense:""},on:{change:function(t){return e.onChange("depo")}},model:{value:e.depoadi,callback:function(t){e.depoadi=t},expression:"depoadi"}})],1),e._v(" "),l("v-col",{staticClass:"pl-0 mb-0 pb-0",attrs:{cols:"12",md:"3"}},[l("v-autocomplete",{attrs:{rules:e.selectRules,label:"Depo Sorumlusu",outlined:"",items:e.depo_sorumlulari,"item-text":"sorumlu_ad_soyad","item-value":"sorumlu_id",required:"",dense:""},model:{value:e.sorumluadi,callback:function(t){e.sorumluadi=t},expression:"sorumluadi"}})],1),e._v(" "),l("v-col",{staticClass:"pl-0 mb-0 pb-0",attrs:{cols:"12",md:"2"}},[l("v-autocomplete",{attrs:{rules:e.selectRules,label:"Hareket tipi",outlined:"",items:e.harekettipleri,"item-text":"hareket","item-value":"hareket_tipi",required:"",dense:""},on:{change:function(t){return e.onChange("harekettipi")}},model:{value:e.harekettipi,callback:function(t){e.harekettipi=t},expression:"harekettipi"}})],1),e._v(" "),l("v-col",{staticClass:"pl-0 mb-0 pb-0",attrs:{cols:"12",md:"1"}},[l("Datepicker",{ref:"picker"})],1),e._v(" "),l("v-col",{staticClass:"pl-0 mb-0 pb-0",attrs:{cols:"12",md:"2"}},[l("v-autocomplete",{attrs:{rules:e.selectRules,label:"Belge Tipi",outlined:"",items:e.belgetipleri,"item-text":"belge","item-value":"belge_tipi",required:"",dense:""},model:{value:e.belgetipi,callback:function(t){e.belgetipi=t},expression:"belgetipi"}})],1),e._v(" "),l("v-col",{staticClass:"pl-0 mb-0 pb-0",attrs:{cols:"12",md:"2"}},[l("v-text-field",{staticClass:"mb-8",attrs:{rules:e.sorumlurules,label:"Belge Numarası",required:"",dense:"",outlined:""},model:{value:e.belgeno,callback:function(t){e.belgeno=t},expression:"belgeno"}})],1),e._v(" "),l("v-col",{staticClass:"pl-0 mb-0 pb-0",attrs:{cols:"12",md:"2"}},[l("v-autocomplete",{attrs:{rules:e.selectRules,label:"Tedarik Türü",outlined:"",items:e.tedarikturleri,"item-text":"tedarik_turu","item-value":"tedarik_id",required:"",dense:""},on:{change:function(t){return e.onChange("tedarikturu")}},model:{value:e.tedarikturu,callback:function(t){e.tedarikturu=t},expression:"tedarikturu"}})],1),e._v(" "),l("v-col",{staticClass:"pl-0 mb-0 pb-0",attrs:{cols:"12",md:"3"}},[l("v-autocomplete",{attrs:{rules:e.selectRules,label:e.tedarikcilabels,outlined:"",items:e.tedarikciler,"item-text":e.itemtext,"item-value":e.itemvalue,required:"",dense:""},model:{value:e.tedarikci,callback:function(t){e.tedarikci=t},expression:"tedarikci"}})],1)],1)],1)],1)],1),e._v(" "),l("v-list-item",{staticClass:"pl-0 pb-0 mb-0 pt-0"},[l("v-list-item-content",{staticClass:"pb-0"},[l("v-list-item-title",{staticClass:"pb-0 mb-0"},[e._v("Malzeme Bilgileri")]),e._v(" "),l("v-list-item-subtitle",{staticClass:"pt-0 mt-0"},[e._v("Ürün hizmet ve malzeme seçerek yeni ekle tuşuna basın")]),e._v(" "),l("v-container",{attrs:{fluid:""}},e._l(e.inputs,(function(input,t){return l("v-row",{key:t,staticClass:"pb-0 mb-0 pt-0 mt-0"},[l("v-col",{staticClass:"pl-0 mb-0 pb-0",attrs:{cols:"12",md:"6"}},[l("v-autocomplete",{attrs:{rules:e.selectRules,label:"Malzeme Seçiniz",outlined:"",items:e.malzemeler,"item-text":"malzeme_adi","item-value":"malzeme_id",dense:"",required:""},on:{change:function(l){return e.onChange1(t)}},model:{value:input.malzeme,callback:function(t){e.$set(input,"malzeme",t)},expression:"input.malzeme"}})],1),e._v(" "),l("v-col",{staticClass:"pl-0 mb-0 pb-0",attrs:{cols:"12",md:"3"}},[l("v-text-field",{attrs:{rules:e.sorumlurules,label:"Miktar",required:"",dense:"",outlined:""},model:{value:input.miktar,callback:function(t){e.$set(input,"miktar",t)},expression:"input.miktar"}})],1),e._v(" "),l("v-col",{staticClass:"pl-0 mb-0 pb-0",attrs:{cols:"12",md:"2"}},[l("v-autocomplete",{attrs:{rules:e.selectRules,label:"Birim",outlined:"",items:e.malzeme_birimleri[t],"item-text":"malzeme_birim","item-value":"malzeme_id",required:"",dense:"","auto-select-first":"",readonly:!0},model:{value:input.birim,callback:function(t){e.$set(input,"birim",t)},expression:"input.birim"}})],1),e._v(" "),l("v-col",{staticClass:"pl-0 mb-0 pb-0",attrs:{cols:"12",md:"1"}},[l("v-btn",{directives:[{name:"show",rawName:"v-show",value:t<1,expression:"(k<1)"}],attrs:{depressed:"",disabled:"",block:""}},[e._v("\n      SİL\n      "),l("v-icon",{attrs:{dark:"",right:""}},[e._v("\n          mdi-delete\n        ")])],1),e._v(" "),l("v-btn",{directives:[{name:"show",rawName:"v-show",value:t||!t&&e.inputs.length>=2&&t>2,expression:"k || ( !k && inputs.length >= 2 && k>2)"}],attrs:{color:"red",dark:"",block:""},on:{click:function(l){return e.remove(t)}}},[e._v("\n        SİL\n        "),l("v-icon",{attrs:{dark:"",right:""}},[e._v("\n          mdi-delete\n        ")])],1)],1)],1)})),1)],1)],1)],1)],1),e._v(" "),l("div",{staticClass:"pl-5 pr-5"},[l("v-btn",{staticClass:"pl-0",attrs:{color:"primary",dark:"",block:""},on:{click:function(t){return e.add(e.k)}}},[e._v("\n          Yeni Satır Ekle\n        ")])],1)],1)],1),e._v(" "),l("Datatable",{attrs:{headers:e.headers,items:e.stokhareketleri,title:e.title,slots:e.slots},on:{"clicked-edit":e.clickedEdit,"clicked-delete":e.clickedDelete},scopedSlots:e._u([{key:"hareket_tipi",fn:function(t){var r=t.degisken;return[l("v-chip",{attrs:{color:e.getColor(r.hareket_tipi),small:"",dark:"",label:""}},[e._v("\n      "+e._s(r.hareket_tipi)+"\n      ")])]}}])})],1)}),[],!1,null,"66b3806e",null);t.default=component.exports;f()(component,{Datepicker:l(485).default,Modals:l(436).default,Datatable:l(435).default}),f()(component,{VAutocomplete:k.a,VBtn:_.a,VCard:x.a,VChip:S.a,VCol:I.a,VContainer:y.a,VForm:D.a,VIcon:O.a,VList:C.a,VListItem:w.a,VListItemContent:z.a,VListItemSubtitle:z.b,VListItemTitle:z.c,VRow:V.a,VTextField:T.a})}}]);