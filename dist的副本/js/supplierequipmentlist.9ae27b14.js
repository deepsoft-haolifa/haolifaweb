(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["supplierequipmentlist"],{"289a":function(t,e,a){var i=a("6dae"),n=a("2de7");a("b560")("keys",function(){return function(t){return n(i(t))}})},"6a32":function(t,e,a){},"8d47":function(t,e,a){},"9b68":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"data-list relative f-12"},[a("transition",{attrs:{name:"slide-y"}},[t.list.length?a("table",{staticClass:"data-table"},[t._t("header",[a("tr",[a("th",[t._v("表头1")]),a("th",[t._v("表头2")])])]),t._l(t.list,function(e,i){return a("tr",{key:e.id},[t._t("item",[a("td",[t._v("数据1")]),a("td",[t._v("数据2")])],{item:e,index:(t.pageNum-1)*t.pageSize+i+1})],2)})],2):t._e()]),a("div",{staticClass:"flex-v-center",staticStyle:{"margin-top":"10px"}},[t.list.length?a("pagination",{staticClass:"mr-20",attrs:{page:t.pageNum,size:t.pageSize,total:t.total},on:{change:t.getList}}):t._e(),t.total?a("span",{staticClass:"f-12 c-6"},[t._v("共 "+t._s(t.total)+" 条数据")]):t._e()],1),t.list.length||t.loading?t._e():a("div",{staticStyle:{"margin-top":"100px"}},[a("no-data")],1)],1)},n=[],s=a("f360"),r=a.n(s),o=(a("7378"),a("e862")),c=a.n(o);function u(t){return"?"+c()(t).map(function(e){return encodeURIComponent(e)+"="+encodeURIComponent(t[e])}).join("&")}var l={name:"data-list",props:{method:{type:String,default:"get"},url:{type:String,default:""},pageSize:{type:Number,default:20},param:{type:Object,default:function(){}},pageNumStr:{type:String,default:"pageNum"}},data:function(){return{pageNum:1,total:0,loading:!1,list:[]}},watch:{url:function(){this.update()},mehtod:function(){this.update()},pageSize:function(){this.update()},param:function(){this.update()}},created:function(){this.pageNum=this.$route.query.page||1,this.getList(this.pageNum)},methods:{getList:function(t){var e=this,a=this.method,i=this.url,n=this.pageSize,s=this.param;if(i){this.loading=!0;var o={pageSize:n};o[this.pageNumStr]=t;var c=r()(o,s),l="get"===a?i+u(c):i;this.$http[a](l,c).then(function(t){e.list=t.list||[],e.pageNum=t.pageNum;var a=e.$route.query;a.page=t.pageNum,e.$router.push({path:e.$route.path,query:a}),e.total=t.total,e.loading=!1}).catch(function(t){e.loading=!1,e.$toast(t.message||t.msg||t)})}},update:function(t){this.getList(t?1:this.pageNum)}}},p=l,d=(a("c8ea"),a("c46c")),f=Object(d["a"])(p,i,n,!1,null,null,null);f.options.__file="index.vue";e["a"]=f.exports},aa24:function(t,e,a){"use strict";var i=a("8d47"),n=a.n(i);n.a},b560:function(t,e,a){var i=a("3427"),n=a("7f8a"),s=a("f988");t.exports=function(t,e){var a=(n.Object||{})[t]||Object[t],r={};r[t]=e(a),i(i.S+i.F*s(function(){a(1)}),"Object",r)}},c8ea:function(t,e,a){"use strict";var i=a("6a32"),n=a.n(i);n.a},e862:function(t,e,a){t.exports=a("f521")},f521:function(t,e,a){a("289a"),t.exports=a("7f8a").Object.keys},fa78:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page-equipment-list"},[a("div",{staticClass:"flex-v-center tool-bar"},[a("div",{staticClass:"flex-item"}),a("router-link",{attrs:{to:"/supplierequipment/add"}},[a("btn",{staticClass:"b",attrs:{flat:"",color:"#008eff"}},[t._v("新增供应商设备")])],1)],1),a("div",{staticClass:"flex-item scroll-y"},[a("data-list",{ref:"list",attrs:{"page-num-str":"pageNum",param:t.filter,url:"/haolifa/equipment/getList",method:"post"},scopedSlots:t._u([{key:"item",fn:function(e){var i=e.item,n=e.index;return[a("td",{staticClass:"c-a"},[t._v(t._s(n))]),a("td",[t._v(t._s(i.name))]),a("td",[t._v(t._s(i.number))]),a("td",[t._v(t._s(i.productFactory))]),a("td",[t._v(t._s(i.servicedYears))]),a("td",[t._v(t._s(i.specification))]),a("td",[t._v(t._s(t.typeList[i.type]))]),a("td",[t._v(t._s(i.supplierNo))]),a("td",[a("a",{staticClass:"blue",staticStyle:{"margin-right":"3px"},attrs:{href:"javascript:;"},on:{click:function(e){t.edit(i)}}},[t._v("编辑")]),t._v(" |\n          "),a("a",{staticClass:"red",staticStyle:{"margin-right":"3px"},attrs:{href:"javascript:;"},on:{click:function(e){t.remove(i)}}},[t._v("删除")])])]}}])},[a("tr",{attrs:{slot:"header"},slot:"header"},[a("th",{staticStyle:{width:"60px"}},[t._v("序号")]),a("th",[t._v("设备名称")]),a("th",[t._v("设备数量")]),a("th",[t._v("生产厂家")]),a("th",[t._v("服役年限")]),a("th",[t._v("型号规格")]),a("th",[t._v("设备类型")]),a("th",[t._v("供应商编号")]),a("th",{staticClass:"t-center",staticStyle:{width:"80px"}},[t._v("操作")])])])],1)])},n=[],s=(a("c839"),a("9b68")),r={name:"page-equipment-list",components:{DataList:s["a"]},data:function(){return{filter:{type:"1"},typeList:["制造设备","检测设备"]}},created:function(){console.log("")},methods:{edit:function(t){this.$router.push("/supplierequipment/edit?id=".concat(t.id))},remove:function(t){var e=this;this.$confirm({title:"删除确认",text:"您确定要删除以下供应商设备吗？<br><b>".concat(t.name,"</b>"),color:"red",btns:["取消","删除"],yes:function(){e.$http.get("/haolifa/equipment/delete/".concat(t.id)).then(function(t){e.$toast("删除成功"),e.$refs.list.update()}).catch(function(t){e.$toast(t.msg)})}})}}},o=r,c=(a("aa24"),a("c46c")),u=Object(c["a"])(o,i,n,!1,null,null,null);u.options.__file="index.vue";e["default"]=u.exports}}]);
//# sourceMappingURL=supplierequipmentlist.9ae27b14.js.map