(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["racklist"],{"471f":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page-rack flex-col"},[a("div",{staticClass:"flex-v-center tool-bar"},[a("div",{staticClass:"flex-v-center search-bar",staticStyle:{"margin-right":"20px"}}),a("div",{staticClass:"flex-item"}),a("router-link",{attrs:{to:"/rack/add"}},[a("btn",{staticClass:"b",attrs:{flat:"",color:"#008eff"}},[t._v("新增库位")])],1)],1),a("div",{staticClass:"flex-item scroll-y"},[a("data-list",{ref:"list",attrs:{"page-num-str":"currentPage",param:t.filter,url:"/haolifa/store-room/rack/pageInfo",method:"get"},scopedSlots:t._u([{key:"item",fn:function(e){var i=e.item,s=e.index;return[a("td",{staticClass:"c-a"},[t._v(t._s(s))]),a("td",[t._v(t._s(i.rackName))]),a("td",[t._v(t._s(i.rackNo))]),a("td",[t._v(t._s(i.storeRoomNo))]),a("td",[t._v(t._s(i.remark))]),a("td",{staticClass:"t-right"},[a("icon-btn",{attrs:{small:""},on:{click:function(e){t.edit(i)}}},[t._v("edit")]),a("icon-btn",{attrs:{small:""},on:{click:function(e){t.remove(i)}}},[t._v("delete")])],1)]}}])},[a("tr",{attrs:{slot:"header"},slot:"header"},[a("th",{staticStyle:{width:"60px"}},[t._v("序号")]),a("th",{staticStyle:{width:"200px"}},[t._v("库位名称")]),a("th",{staticStyle:{width:"100px"}},[t._v("库位编号")]),a("th",[t._v("所属库房")]),a("th",[t._v("描述")]),a("th",{staticClass:"t-right",staticStyle:{width:"80px"}},[t._v("操作")])])])],1)])},s=[],n=a("9b68"),r={name:"page-rack",components:{DataList:n["a"]},data:function(){return{types:["","原料库","成品库"],status:["正常","删除"],filter:{type:""}}},methods:{edit:function(t){this.$router.push("/rack/edit?id=".concat(t.id))},remove:function(t){var e=this;this.$confirm({title:"删除确认",text:"您确定要删除以下库位吗？<br><b>".concat(t.rackNo,"</b>"),color:"red",btns:["取消","删除"],yes:function(){e.$http.delete("/haolifa/store-room/rack/delete/".concat(t.id)).then(function(t){e.$toast("删除成功"),e.$refs.list.update()}).catch(function(t){e.$toast(t.msg)})}})}}},o=r,c=(a("d74d"),a("048f")),l=Object(c["a"])(o,i,s,!1,null,null,null);l.options.__file="index.vue";e["default"]=l.exports},"685f":function(t,e,a){},"9b68":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"data-list relative f-12"},[a("transition",{attrs:{name:"slide-y"}},[t.list.length?a("table",{staticClass:"data-table"},[t._t("header",[a("tr",[a("th",[t._v("表头1")]),a("th",[t._v("表头2")])])]),t._l(t.list,function(e,i){return a("tr",{key:e.id},[t._t("item",[a("td",[t._v("数据1")]),a("td",[t._v("数据2")])],{item:e,index:(t.pageNum-1)*t.pageSize+i+1})],2)})],2):t._e()]),a("div",{staticClass:"flex-v-center",staticStyle:{"margin-top":"10px"}},[t.list.length?a("pagination",{staticClass:"mr-20",attrs:{page:t.pageNum,size:t.pageSize,total:t.total},on:{change:t.getList}}):t._e(),t.total?a("span",{staticClass:"f-12 c-6"},[t._v("共 "+t._s(t.total)+" 条数据")]):t._e()],1),t.list.length||t.loading?t._e():a("div",{staticStyle:{"margin-top":"100px"}},[a("no-data")],1)],1)},s=[];a("20a2"),a("84fb"),a("25d7"),a("dc2a");function n(t){return"?"+Object.keys(t).map(function(e){return encodeURIComponent(e)+"="+encodeURIComponent(t[e])}).join("&")}var r={name:"data-list",props:{method:{type:String,default:"get"},url:{type:String,default:""},pageSize:{type:Number,default:20},param:{type:Object,default:function(){}},pageNumStr:{type:String,default:"pageNum"}},data:function(){return{pageNum:1,total:0,loading:!1,list:[]}},watch:{url:function(){this.update()},mehtod:function(){this.update()},pageSize:function(){this.update()},param:function(){this.update()}},created:function(){this.pageNum=this.$route.query.page||1,this.getList(this.pageNum)},methods:{getList:function(t){var e=this,a=this.method,i=this.url,s=this.pageSize,r=this.param;if(i){this.loading=!0;var o={pageSize:s};o[this.pageNumStr]=t;var c=Object.assign(o,r),l="get"===a?i+n(c):i;this.$http[a](l,c).then(function(t){e.list=t.list||[],e.pageNum=t.pageNum;var a=e.$route.query;a.page=t.pageNum,e.$router.push({path:e.$route.path,query:a}),e.total=t.total,e.loading=!1}).catch(function(t){e.loading=!1,e.$toast(t.message||t.msg||t)})}},update:function(t){this.getList(t?1:this.pageNum)}}},o=r,c=(a("c8ea"),a("048f")),l=Object(c["a"])(o,i,s,!1,null,null,null);l.options.__file="index.vue";e["a"]=l.exports},a074:function(t,e,a){},c8ea:function(t,e,a){"use strict";var i=a("685f"),s=a.n(i);s.a},d74d:function(t,e,a){"use strict";var i=a("a074"),s=a.n(i);s.a}}]);
//# sourceMappingURL=racklist.e74dd28d.js.map