(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["productlist"],{"1a5d":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page-product-list flex-col"},[a("div",{staticClass:"flex-v-center tool-bar"},[a("div",{staticClass:"flex-item"}),a("router-link",{attrs:{to:"/product/add"}},[a("btn",{staticClass:"b",attrs:{flat:"",color:"#008eff"}},[t._v("新增成品")])],1)],1),a("div",{staticClass:"flex-item scroll-y"},[a("data-list",{ref:"list",attrs:{"page-num-str":"currentPage",param:t.filter,url:"/haolifa/product/pageInfo",method:"get"},scopedSlots:t._u([{key:"item",fn:function(e){var i=e.item,n=e.index;return[a("td",{staticClass:"c-a"},[t._v(t._s(n))]),a("td",[t._v(t._s(i.name))]),a("td",[t._v(t._s(i.productNo))]),a("td",[t._v(t._s(i.fitComponent))]),a("td",[t._v(t._s(i.specifications))]),a("td",[t._v(t._s(i.remark))]),a("td",{staticClass:"t-right"},[a("icon-btn",{attrs:{small:""},on:{click:function(e){t.edit(i)}}},[t._v("edit")]),a("icon-btn",{attrs:{small:""},on:{click:function(e){t.remove(i)}}},[t._v("delete")])],1)]}}])},[a("tr",{attrs:{slot:"header"},slot:"header"},[a("th",{staticStyle:{width:"60px"}},[t._v("序号")]),a("th",[t._v("成品名称")]),a("th",[t._v("成品编号")]),a("th",[t._v("适配组件")]),a("th",[t._v("成品规格")]),a("th",[t._v("备注")]),a("th",{staticClass:"t-right",staticStyle:{width:"80px"}},[t._v("操作")])])])],1)])},n=[],s=(a("cf54"),a("9b68")),o={name:"page-product-list",components:{DataList:s["a"]},data:function(){return{filter:{type:""}}},methods:{edit:function(t){this.$router.push("/product/edit?id=".concat(t.id))},remove:function(t){var e=this;this.$confirm({title:"删除确认",text:"您确定要删除以下零件类别吗？<br><b>".concat(t.name,"</b>"),color:"red",btns:["取消","删除"],yes:function(){e.$http.delete("/haolifa/product/delete/".concat(t.id,"/").concat(t.productNo)).then(function(t){e.$toast("删除成功"),e.$refs.list.update()}).catch(function(t){e.$toast(t.msg)})}})}}},r=o,c=(a("e4a3"),a("048f")),l=Object(c["a"])(r,i,n,!1,null,null,null);l.options.__file="index.vue";e["default"]=l.exports},"685f":function(t,e,a){},"9b68":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"data-list relative f-12"},[a("transition",{attrs:{name:"slide-y"}},[t.list.length?a("table",{staticClass:"data-table"},[t._t("header",[a("tr",[a("th",[t._v("表头1")]),a("th",[t._v("表头2")])])]),t._l(t.list,function(e,i){return a("tr",{key:e.id},[t._t("item",[a("td",[t._v("数据1")]),a("td",[t._v("数据2")])],{item:e,index:(t.pageNum-1)*t.pageSize+i+1})],2)})],2):t._e()]),a("div",{staticClass:"flex-v-center",staticStyle:{"margin-top":"10px"}},[t.list.length?a("pagination",{staticClass:"mr-20",attrs:{page:t.pageNum,size:t.pageSize,total:t.total},on:{change:t.getList}}):t._e(),t.total?a("span",{staticClass:"f-12 c-6"},[t._v("共 "+t._s(t.total)+" 条数据")]):t._e()],1),t.list.length||t.loading?t._e():a("div",{staticStyle:{"margin-top":"100px"}},[a("no-data")],1)],1)},n=[];a("20a2"),a("84fb"),a("25d7"),a("dc2a");function s(t){return"?"+Object.keys(t).map(function(e){return encodeURIComponent(e)+"="+encodeURIComponent(t[e])}).join("&")}var o={name:"data-list",props:{method:{type:String,default:"get"},url:{type:String,default:""},pageSize:{type:Number,default:20},param:{type:Object,default:function(){}},pageNumStr:{type:String,default:"pageNum"}},data:function(){return{pageNum:1,total:0,loading:!1,list:[]}},watch:{url:function(){this.update()},mehtod:function(){this.update()},pageSize:function(){this.update()},param:function(){this.update()}},created:function(){this.pageNum=this.$route.query.page||1,this.getList(this.pageNum)},methods:{getList:function(t){var e=this,a=this.method,i=this.url,n=this.pageSize,o=this.param;if(i){this.loading=!0;var r={pageSize:n};r[this.pageNumStr]=t;var c=Object.assign(r,o),l="get"===a?i+s(c):i;this.$http[a](l,c).then(function(t){e.list=t.list||[],e.pageNum=t.pageNum;var a=e.$route.query;a.page=t.pageNum,e.$router.push({path:e.$route.path,query:a}),e.total=t.total,e.loading=!1}).catch(function(t){e.loading=!1,e.$toast(t.message||t.msg||t)})}},update:function(t){this.getList(t?1:this.pageNum)}}},r=o,c=(a("c8ea"),a("048f")),l=Object(c["a"])(r,i,n,!1,null,null,null);l.options.__file="index.vue";e["a"]=l.exports},b9b9:function(t,e,a){},c8ea:function(t,e,a){"use strict";var i=a("685f"),n=a.n(i);n.a},e4a3:function(t,e,a){"use strict";var i=a("b9b9"),n=a.n(i);n.a}}]);
//# sourceMappingURL=productlist.b174a5df.js.map