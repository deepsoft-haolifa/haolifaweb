(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["partlist"],{"0ee2":function(t,e,a){},3226:function(t,e,a){},"476f":function(t,e,a){"use strict";var i=a("0ee2"),s=a.n(i);s.a},"737c":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page-part-list"},[a("div",{staticClass:"flex-v-center tool-bar"},[a("div",{staticClass:"flex-item"}),a("router-link",{attrs:{to:"/part/add"}},[a("btn",{staticClass:"b",attrs:{flat:"",color:"#008eff"}},[t._v("新增零件")])],1)],1),a("div",{staticClass:"flex-item scroll-y"},[a("data-list",{ref:"list",attrs:{"page-num-str":"currentPage",param:t.filter,url:"/haolifa/material/pageInfo",method:"get"},scopedSlots:t._u([{key:"item",fn:function(e){var i=e.item,s=e.index;return[a("td",{staticClass:"c-a"},[t._v(t._s(s))]),a("td",[t._v(t._s(i.name))]),a("td",[t._v(t._s(i.materialClassifyName))]),a("td",[t._v(t._s(i.currentQuantity))]),a("td",[t._v(t._s(i.unit))]),a("td",[t._v(t._s(i.graphNo))]),a("td",{staticClass:"t-right"},[a("icon-btn",{attrs:{small:""},on:{click:function(e){t.edit(i)}}},[t._v("edit")]),a("icon-btn",{attrs:{small:""},on:{click:function(e){t.remove(i)}}},[t._v("delete")])],1)]}}])},[a("tr",{attrs:{slot:"header"},slot:"header"},[a("th",{staticStyle:{width:"60px"}},[t._v("序号")]),a("th",[t._v("零件名称")]),a("th",[t._v("零件类型")]),a("th",[t._v("库存")]),a("th",[t._v("单位")]),a("th",[t._v("图号")]),a("th",{staticClass:"t-right",staticStyle:{width:"80px"}},[t._v("操作")])])])],1)])},s=[],n=(a("7f7f"),a("9b68")),r={name:"page-part-list",components:{DataList:n["a"]},data:function(){return{filter:{type:""}}},methods:{edit:function(t){this.$router.push("/part/edit?id=".concat(t.id))},remove:function(t){var e=this;this.$confirm({title:"删除确认",text:"您确定要删除以下库房吗？<br><b>".concat(t.name,"</b>"),color:"red",btns:["取消","删除"],yes:function(){e.$http.delete("/haolifa/material/delete/".concat(t.id)).then(function(t){e.$toast("删除成功"),e.$refs.list.update()}).catch(function(t){e.$toast(t.msg)})}})}}},l=r,o=(a("476f"),a("2877")),c=Object(o["a"])(l,i,s,!1,null,null,null);c.options.__file="index.vue";e["default"]=c.exports},"9b68":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"data-list relative f-12"},[a("transition",{attrs:{name:"slide-y"}},[t.list.length?a("table",{staticClass:"data-table"},[t._t("header",[a("tr",[a("th",[t._v("表头1")]),a("th",[t._v("表头2")])])]),t._l(t.list,function(e,i){return a("tr",{key:e.id},[t._t("item",[a("td",[t._v("数据1")]),a("td",[t._v("数据2")])],{item:e,index:(t.pageNum-1)*t.pageSize+i+1})],2)})],2):t._e()]),a("div",{staticClass:"flex-v-center",staticStyle:{"margin-top":"10px"}},[t.list.length?a("pagination",{staticClass:"mr-20",attrs:{page:t.pageNum,size:t.pageSize,total:t.total},on:{change:t.getList}}):t._e(),t.total?a("span",{staticClass:"f-12 c-6"},[t._v("共 "+t._s(t.total)+" 条数据")]):t._e()],1),t.list.length||t.loading?t._e():a("div",{staticStyle:{"margin-top":"100px"}},[a("no-data")],1)],1)},s=[];a("f751"),a("c5f6"),a("ac6a"),a("456d");function n(t){return"?"+Object.keys(t).map(function(e){return encodeURIComponent(e)+"="+encodeURIComponent(t[e])}).join("&")}var r={name:"data-list",props:{method:{type:String,default:"get"},url:{type:String,default:""},pageSize:{type:Number,default:20},param:{type:Object,default:function(){}},pageNumStr:{type:String,default:"pageNum"}},data:function(){return{pageNum:1,total:0,loading:!1,list:[]}},watch:{url:function(){this.update()},mehtod:function(){this.update()},pageSize:function(){this.update()},param:function(){this.update()}},created:function(){this.pageNum=this.$route.query.page||1,this.getList(this.pageNum)},methods:{getList:function(t){var e=this,a=this.method,i=this.url,s=this.pageSize,r=this.param;if(i){this.loading=!0;var l={pageSize:s};l[this.pageNumStr]=t;var o=Object.assign(l,r),c="get"===a?i+n(o):i;this.$http[a](c,o).then(function(t){e.list=t.list||[],e.pageNum=t.pageNum;var a=e.$route.query;a.page=t.pageNum,e.$router.push({path:e.$route.path,query:a}),e.total=t.total,e.loading=!1}).catch(function(t){e.loading=!1,e.$toast(t.message||t.msg||t)})}},update:function(t){this.getList(t?1:this.pageNum)}}},l=r,o=(a("c8ea"),a("2877")),c=Object(o["a"])(l,i,s,!1,null,null,null);c.options.__file="index.vue";e["a"]=c.exports},c8ea:function(t,e,a){"use strict";var i=a("3226"),s=a.n(i);s.a}}]);
//# sourceMappingURL=partlist.914e9df2.js.map