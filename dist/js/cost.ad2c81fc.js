(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["cost"],{3226:function(t,e,a){},"3f61":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page-cost"},[a("div",{staticClass:"flex-v-center tool-bar"},[a("div",{staticClass:"flex-item"}),a("btn",{staticClass:"b",attrs:{flat:"",color:"#008eff"},on:{click:function(e){t.layer=!0}}},[t._v("添加费用")])],1),a("div",{staticClass:"flex-item scroll-y"},[a("data-list",{ref:"list",staticClass:"f-14",attrs:{method:"post",url:"/haolifa/expenses/list"},scopedSlots:t._u([{key:"item",fn:function(e){var s=e.item,i=e.index;return[a("td",[t._v(t._s(i))]),a("td",[t._v(t._s(s.commitUser))]),a("td",[t._v(t._s(s.expensesClassify))]),a("td",[t._v("￥ "+t._s(s.totalAmount))]),a("td",{staticClass:"t-right"},[a("icon-btn",{attrs:{small:""},on:{click:function(e){t.edit(s)}}},[t._v("edit")]),a("icon-btn",{attrs:{small:""},on:{click:function(e){t.remove(s)}}},[t._v("delete")])],1)]}}])},[a("tr",{attrs:{slot:"header"},slot:"header"},[a("th",{staticStyle:{width:"60px"}},[t._v("序号")]),a("th",[t._v("提交人")]),a("th",[t._v("费用类别")]),a("th",[t._v("总费用")]),a("th",{staticClass:"t-right",staticStyle:{width:"80px"}},[t._v("操作")])])])],1),t.layer?a("layer",{attrs:{title:t.form.id?"编辑发票":"新增发票",width:"450px"}},[a("div",{staticClass:"layer-text",staticStyle:{"padding-bottom":"50px"}},[a("input-box",{attrs:{label:"提交人"},model:{value:t.form.commitUser,callback:function(e){t.$set(t.form,"commitUser",e)},expression:"form.commitUser"}}),a("input-box",{attrs:{label:"费用类别"},model:{value:t.form.expensesClassify,callback:function(e){t.$set(t.form,"expensesClassify",e)},expression:"form.expensesClassify"}}),a("input-box",{attrs:{type:"number",label:"总费用"},model:{value:t.form.totalAmount,callback:function(e){t.$set(t.form,"totalAmount",e)},expression:"form.totalAmount"}})],1),a("div",{staticClass:"layer-btns"},[a("btn",{attrs:{flat:""},on:{click:t.cancel}},[t._v("取消")]),a("btn",{attrs:{flat:"",color:"#008eff"},on:{click:t.submit}},[t._v("保存")])],1)]):t._e()],1)},i=[],n=a("9b68"),o={name:"page-cost",components:{DataList:n["a"]},data:function(){return{layer:!1,form:{id:"",commitUser:"",expensesClassify:"",totalAmount:""}}},methods:{edit:function(t){for(var e in this.form)this.form[e]=t[e];this.layer=!0},vertify:function(){for(var t in this.form){var e=this.form[t];if(!e&&0!==e&&"id"!==t)return this.$toast("请输入完整信息"+t),!1}return!0},submit:function(){var t=this;if(this.vertify()){var e=this.form;this.$http.post("/haolifa/expenses/"+(e.id?"update":"save"),e).then(function(e){t.$refs.list.update(),t.cancel(),t.$toast("保存成功")}).catch(function(e){t.$toast(e.message||e.meg)})}},cancel:function(){this.form={id:"",commitUser:"",expensesClassify:"",totalAmount:""},this.layer=!1},remove:function(t){var e=this;this.$confirm({title:"删除确认",text:"您确定要删除以下发票记录吗？<br>\n          提交人：<b>".concat(t.commitUser,"</b><br>\n          类别：<b>").concat(t.expensesClassify,"</b><br>\n          总费用：<b>￥").concat(t.totalAmount,"</b><br>"),color:"red",btns:["取消","删除"],yes:function(){e.$http.get("/haolifa/expenses/delete/".concat(t.id)).then(function(t){e.$toast("删除成功"),e.$refs.list.update()}).catch(function(t){e.$toast(t.msg||t.message)})}})}}},l=o,r=(a("c076"),a("2877")),c=Object(r["a"])(l,s,i,!1,null,null,null);c.options.__file="index.vue";e["default"]=c.exports},"8b41":function(t,e,a){},"9b68":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"data-list relative f-12"},[a("transition",{attrs:{name:"slide-y"}},[t.list.length?a("table",{staticClass:"data-table"},[t._t("header",[a("tr",[a("th",[t._v("表头1")]),a("th",[t._v("表头2")])])]),t._l(t.list,function(e,s){return a("tr",{key:e.id},[t._t("item",[a("td",[t._v("数据1")]),a("td",[t._v("数据2")])],{item:e,index:(t.pageNum-1)*t.pageSize+s+1})],2)})],2):t._e()]),a("div",{staticClass:"flex-v-center",staticStyle:{"margin-top":"10px"}},[t.list.length?a("pagination",{staticClass:"mr-20",attrs:{page:t.pageNum,size:t.pageSize,total:t.total},on:{change:t.getList}}):t._e(),t.total?a("span",{staticClass:"f-12 c-6"},[t._v("共 "+t._s(t.total)+" 条数据")]):t._e()],1),t.list.length||t.loading?t._e():a("div",{staticStyle:{"margin-top":"100px"}},[a("no-data")],1)],1)},i=[];a("f751"),a("c5f6"),a("ac6a"),a("456d");function n(t){return"?"+Object.keys(t).map(function(e){return encodeURIComponent(e)+"="+encodeURIComponent(t[e])}).join("&")}var o={name:"data-list",props:{method:{type:String,default:"get"},url:{type:String,default:""},pageSize:{type:Number,default:20},param:{type:Object,default:function(){}},pageNumStr:{type:String,default:"pageNum"}},data:function(){return{pageNum:1,total:0,loading:!1,list:[]}},watch:{url:function(){this.update()},mehtod:function(){this.update()},pageSize:function(){this.update()},param:function(){this.update()}},created:function(){this.pageNum=this.$route.query.page||1,this.getList(this.pageNum)},methods:{getList:function(t){var e=this,a=this.method,s=this.url,i=this.pageSize,o=this.param;if(s){this.loading=!0;var l={pageSize:i};l[this.pageNumStr]=t;var r=Object.assign(l,o),c="get"===a?s+n(r):s;this.$http[a](c,r).then(function(t){e.list=t.list||[],e.pageNum=t.pageNum;var a=e.$route.query;a.page=t.pageNum,e.$router.push({path:e.$route.path,query:a}),e.total=t.total,e.loading=!1}).catch(function(t){e.loading=!1,e.$toast(t.message||t.msg||t)})}},update:function(t){this.getList(t?1:this.pageNum)}}},l=o,r=(a("c8ea"),a("2877")),c=Object(r["a"])(l,s,i,!1,null,null,null);c.options.__file="index.vue";e["a"]=c.exports},c076:function(t,e,a){"use strict";var s=a("8b41"),i=a.n(s);i.a},c8ea:function(t,e,a){"use strict";var s=a("3226"),i=a.n(s);i.a}}]);
//# sourceMappingURL=cost.ad2c81fc.js.map