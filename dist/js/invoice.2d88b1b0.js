(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["invoice"],{2618:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page-invoice"},[a("div",{staticClass:"flex-v-center tool-bar"},[a("div",{staticClass:"flex-v-center search-bar",staticStyle:{"margin-right":"20px"}},[a("i",{staticClass:"icon f-20 c-8"},[t._v("search")]),a("select",{directives:[{name:"model",rawName:"v-model",value:t.filter.status,expression:"filter.status"}],staticClass:"f-14",on:{change:[function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.$set(t.filter,"status",e.target.multiple?a:a[0])},function(e){t.$refs.list.update(!0)}]}},[a("option",{attrs:{value:"0"}},[t._v("开票状态")]),t._l(t.allStatus,function(e){return a("option",{key:e.id,domProps:{value:e.value}},[t._v(t._s(e.text))])})],2),a("select",{directives:[{name:"model",rawName:"v-model",value:t.filter.type,expression:"filter.type"}],staticClass:"f-14",on:{change:[function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.$set(t.filter,"type",e.target.multiple?a:a[0])},function(e){t.$refs.list.update(!0)}]}},[a("option",{attrs:{value:"0"}},[t._v("合同类型状态")]),t._l(t.allTypes,function(e){return a("option",{key:e.id,domProps:{value:e.value}},[t._v(t._s(e.text))])})],2),a("i",{staticClass:"icon",staticStyle:{"margin-left":"-20px","pointer-events":"none"}},[t._v("arrow_drop_down")])]),a("div",{staticClass:"flex-item"}),a("btn",{staticClass:"b",attrs:{flat:"",color:"#008eff"},on:{click:function(e){t.layer=!0}}},[t._v("添加发票")])],1),a("div",{staticClass:"flex-item scroll-y"},[a("data-list",{ref:"list",staticClass:"f-14",attrs:{method:"post","page-size":10,param:t.filter,url:"/haolifa/invoice/list/1"},scopedSlots:t._u([{key:"item",fn:function(e){var i=e.item,s=e.index;return[a("td",[t._v(t._s(s))]),a("td",[t._v(t._s(i.invoiceNo))]),a("td",[t._v(t._s(i.orderNo))]),a("td",[t._v(t._s(t.allTypes[i.type].text))]),a("td",[t._v(t._s(t.allStatus[i.status].text))]),a("td",[t._v("￥ "+t._s(i.totalAmount))]),a("td",{staticClass:"t-right"},[a("icon-btn",{attrs:{small:""},on:{click:function(e){t.edit(i)}}},[t._v("edit")]),a("icon-btn",{attrs:{small:""},on:{click:function(e){t.remove(i)}}},[t._v("delete")])],1)]}}])},[a("tr",{attrs:{slot:"header"},slot:"header"},[a("th",{staticStyle:{width:"60px"}},[t._v("序号")]),a("th",[t._v("发票编号")]),a("th",[t._v("合同编号")]),a("th",[t._v("合同类型")]),a("th",[t._v("合同状态")]),a("th",[t._v("合同金额")]),a("th",{staticClass:"t-right",staticStyle:{width:"80px"}},[t._v("操作")])])])],1),t.layer?a("layer",{attrs:{title:t.form.id?"编辑发票":"新增发票",width:"600px"}},[a("div",{staticClass:"layer-text",staticStyle:{"padding-bottom":"50px"}},[a("input-box",{attrs:{label:"发票编号"},model:{value:t.form.invoiceNo,callback:function(e){t.$set(t.form,"invoiceNo",e)},expression:"form.invoiceNo"}}),a("input-box",{attrs:{label:"订单编号"},model:{value:t.form.orderNo,callback:function(e){t.$set(t.form,"orderNo",e)},expression:"form.orderNo"}}),a("select-box",{attrs:{list:t.allStatus,label:"合同状态"},model:{value:t.form.status,callback:function(e){t.$set(t.form,"status",e)},expression:"form.status"}}),a("select-box",{attrs:{list:t.allTypes,label:"合同类型"},model:{value:t.form.type,callback:function(e){t.$set(t.form,"type",e)},expression:"form.type"}}),a("input-box",{attrs:{type:"number",label:"合同金额"},model:{value:t.form.totalAmount,callback:function(e){t.$set(t.form,"totalAmount",e)},expression:"form.totalAmount"}}),a("input-box",{attrs:{"multi-line":!0,type:"text",label:"备注"},model:{value:t.form.remark,callback:function(e){t.$set(t.form,"remark",e)},expression:"form.remark"}})],1),a("div",{staticClass:"layer-btns"},[a("btn",{attrs:{flat:""},on:{click:t.cancel}},[t._v("取消")]),a("btn",{attrs:{flat:"",color:"#008eff"},on:{click:t.submit}},[t._v("保存")])],1)]):t._e()],1)},s=[],n=(a("3a0f"),a("a3a3"),a("4d0b"),a("9b68")),o={name:"page-invoice",components:{DataList:n["a"]},data:function(){return{filter:{type:0,status:0},allStatus:[{value:0,text:"未收款"},{value:1,text:"未打款"},{value:2,text:"打款中"},{value:3,text:"收款中"},{value:4,text:"处理完成"}],allTypes:[{value:0,text:"订单合同编号"},{value:1,text:"采购编号"}],layer:!1,form:{id:"",invoiceNo:"",orderNo:"",status:null,totalAmount:"",type:null}}},methods:{edit:function(t){for(var e in this.form)this.form[e]=t[e];this.layer=!0},vertify:function(){for(var t in this.form){var e=this.form[t];if(!e&&0!==e&&"id"!==t&&"orderNo"!==t&&"remark"!==t)return this.$toast("请输入完整信息"),!1}return!0},submit:function(){var t=this;if(this.vertify()){var e=this.form;this.$http.post("/haolifa/invoice/save",e).then(function(e){t.$refs.list.update(),t.cancel(),t.$toast("保存成功")}).catch(function(e){t.$toast(e.message||e.meg)})}},cancel:function(){this.form={id:"",invoiceNo:"",orderNo:"",status:null,totalAmount:"",type:null},this.layer=!1},remove:function(t){var e=this;this.$confirm({title:"删除确认",text:"您确定要删除以下发票吗？<br><b>".concat(t.invoiceNo,"</b>"),color:"red",btns:["取消","删除"],yes:function(){e.$http.get("/haolifa/invoice/delete/".concat(t.id)).then(function(t){e.$toast("删除成功"),e.$refs.list.update()}).catch(function(t){e.$toast(t.msg||t.message)})}})}}},l=o,r=(a("3157"),a("048f")),c=Object(r["a"])(l,i,s,!1,null,null,null);c.options.__file="index.vue";e["default"]=c.exports},3157:function(t,e,a){"use strict";var i=a("61b6"),s=a.n(i);s.a},"61b6":function(t,e,a){},"685f":function(t,e,a){},"9b68":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"data-list relative f-12"},[a("transition",{attrs:{name:"slide-y"}},[t.list.length?a("table",{staticClass:"data-table"},[t._t("header",[a("tr",[a("th",[t._v("表头1")]),a("th",[t._v("表头2")])])]),t._l(t.list,function(e,i){return a("tr",{key:e.id},[t._t("item",[a("td",[t._v("数据1")]),a("td",[t._v("数据2")])],{item:e,index:(t.pageNum-1)*t.pageSize+i+1})],2)})],2):t._e()]),a("div",{staticClass:"flex-v-center",staticStyle:{"margin-top":"10px"}},[t.list.length?a("pagination",{staticClass:"mr-20",attrs:{page:t.pageNum,size:t.pageSize,total:t.total},on:{change:t.getList}}):t._e(),t.total?a("span",{staticClass:"f-12 c-6"},[t._v("共 "+t._s(t.total)+" 条数据")]):t._e()],1),t.list.length||t.loading?t._e():a("div",{staticStyle:{"margin-top":"100px"}},[a("no-data")],1)],1)},s=[];a("20a2"),a("84fb"),a("25d7"),a("dc2a");function n(t){return"?"+Object.keys(t).map(function(e){return encodeURIComponent(e)+"="+encodeURIComponent(t[e])}).join("&")}var o={name:"data-list",props:{method:{type:String,default:"get"},url:{type:String,default:""},pageSize:{type:Number,default:20},param:{type:Object,default:function(){}},pageNumStr:{type:String,default:"pageNum"}},data:function(){return{pageNum:1,total:0,loading:!1,list:[]}},watch:{url:function(){this.update()},mehtod:function(){this.update()},pageSize:function(){this.update()},param:function(){this.update()}},created:function(){this.pageNum=this.$route.query.page||1,this.getList(this.pageNum)},methods:{getList:function(t){var e=this,a=this.method,i=this.url,s=this.pageSize,o=this.param;if(i){this.loading=!0;var l={pageSize:s};l[this.pageNumStr]=t;var r=Object.assign(l,o),c="get"===a?i+n(r):i;this.$http[a](c,r).then(function(t){e.list=t.list||[],e.pageNum=t.pageNum;var a=e.$route.query;a.page=t.pageNum,e.$router.push({path:e.$route.path,query:a}),e.total=t.total,e.loading=!1}).catch(function(t){e.loading=!1,e.$toast(t.message||t.msg||t)})}},update:function(t){this.getList(t?1:this.pageNum)}}},l=o,r=(a("c8ea"),a("048f")),c=Object(r["a"])(l,i,s,!1,null,null,null);c.options.__file="index.vue";e["a"]=c.exports},c8ea:function(t,e,a){"use strict";var i=a("685f"),s=a.n(i);s.a}}]);
//# sourceMappingURL=invoice.2d88b1b0.js.map