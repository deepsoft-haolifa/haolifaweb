(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["diliverylist"],{"0027":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page-part-list"},[a("div",{staticClass:"flex-v-center tool-bar"},[a("div",{staticClass:"flex-item"}),a("router-link",{attrs:{to:"/dilivery-bills/add"}},[a("btn",{staticClass:"b",attrs:{flat:"",color:"#008eff"}},[t._v("新增发货通知单")])],1)],1),a("div",{staticClass:"flex-item scroll-y"},[a("data-list",{ref:"list",attrs:{"page-num-str":"currentPage",param:t.filter,url:"/haolifa/delivery/noticeList",method:"post"},scopedSlots:t._u([{key:"item",fn:function(e){var i=e.item,s=e.index;return[a("td",{staticClass:"c-a"},[t._v(t._s(s))]),a("td",[t._v(t._s(i.deliveryNo))]),a("td",[a("a",{staticClass:"fixed-length",attrs:{href:i.deliveryUrl,title:i.deliveryUrl}},[t._v(t._s(i.deliveryUrl))])]),a("td",[t._v(t._s(i.contractOrderNo))]),a("td",[t._v(t._s(i.auditUserId))]),a("td",[t._v(t._s(i.auditResult))]),a("td",[t._v(t._s(i.auditInfo))]),a("td",[t._v(t._s(i.auditTime))]),a("td",[t._v(t._s(i.createTime))]),a("td",[t._v(t._s(i.updateTime))]),a("td",{staticClass:"t-right"},[a("icon-btn",{attrs:{small:""},on:{click:function(e){t.edit(i)}}},[t._v("edit")])],1)]}}])},[a("tr",{attrs:{slot:"header"},slot:"header"},[a("th",{staticStyle:{width:"60px"}},[t._v("序号")]),a("th",[t._v("发货通知单号")]),a("th",{staticStyle:{width:"50px"}},[t._v("发货通知单")]),a("th",[t._v("订单号")]),a("th",[t._v("审批人")]),a("th",[t._v("审批结果")]),a("th",[t._v("审批信息")]),a("th",[t._v("审批时间")]),a("th",[t._v("创建时间")]),a("th",[t._v("更新时间")]),a("th",{staticClass:"t-right",staticStyle:{width:"80px"}},[t._v("操作")])])])],1)])},s=[],n=a("9b68"),l={name:"page-bills-list",components:{DataList:n["a"]},data:function(){return{filter:{type:""}}},methods:{edit:function(t){this.$router.push("/dilivery-bills/edit?id=".concat(t.id))},remove:function(t){var e=this;this.$confirm({title:"删除确认",text:"您确定要删除以下发货通知单吗？<br>".concat(t.deliveryNo),color:"red",btns:["取消","删除"],yes:function(){e.$http.delete("/haolifa/material/delete/".concat(t.id)).then(function(t){e.$toast("删除成功"),e.$refs.list.update()}).catch(function(t){e.$toast(t.msg)})}})}}},r=l,c=(a("0b2c"),a("048f")),o=Object(c["a"])(r,i,s,!1,null,null,null);o.options.__file="index.vue";e["default"]=o.exports},"0b2c":function(t,e,a){"use strict";var i=a("a4cc"),s=a.n(i);s.a},"685f":function(t,e,a){},"74a7":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page-material-list"},[a("div",{staticClass:"flex-v-center tool-bar"},[a("div",{staticClass:"flex-item"}),a("router-link",{attrs:{to:"/applyBuy-machining/add"}},[a("btn",{staticClass:"b",attrs:{flat:"",color:"#008eff"}},[t._v("创建机加工单")])],1)],1),a("div",{staticClass:"flex-item scroll-y"},[a("data-list",{ref:"list",attrs:{"page-size":10,param:t.filter,url:"/haolifa/entrust/list",method:"post"},scopedSlots:t._u([{key:"item",fn:function(e){var i=e.item,s=e.index;return[a("td",{staticClass:"c-a"},[t._v(t._s(s))]),a("td",[t._v(t._s(i.entrustNo))]),a("td",[t._v(t._s(i.materialGraphName))]),a("td",[t._v(t._s(i.materialGraphNo))]),a("td",[t._v(t._s(i.number))]),a("td",[t._v(t._s(i.createTime))]),a("td",[t._v(t._s(i.status))]),a("td",{staticClass:"t-right"},[a("icon-btn",{attrs:{small:""},on:{click:function(e){t.edit(i)}}},[t._v("edit")]),a("icon-btn",{attrs:{small:""},on:{click:function(e){t.remove(i)}}},[t._v("delete")])],1)]}}])},[a("tr",{attrs:{slot:"header"},slot:"header"},[a("th",{staticStyle:{width:"60px"}},[t._v("序号")]),a("th",[t._v("机加工单号")]),a("th",[t._v("物料名称")]),a("th",[t._v("物料图号")]),a("th",[t._v("数量")]),a("th",[t._v("发起时间")]),a("th",[t._v("状态")]),a("th",{staticClass:"t-right",staticStyle:{width:"80px"}},[t._v("操作")])])])],1)])},s=[],n=a("9b68"),l={name:"page-machining-list",components:{DataList:n["a"]},data:function(){return{filter:{type:0,status:0}}},methods:{edit:function(t){this.$router.push("/applyBuy-machining/edit?entrustNo=".concat(t.entrustNo))},remove:function(t){var e=this;this.$confirm({title:"删除确认",text:"您确定要删除以下送检单吗？<br><b>".concat(t.entrustNo,"</b>"),color:"red",btns:["取消","删除"],yes:function(){e.$http.get("/haolifa/entrust/delete/".concat(t.entrustNo)).then(function(t){e.$toast("删除成功"),e.$refs.list.update()}).catch(function(t){e.$toast(t.msg||t.message)})}})}}},r=l,c=(a("b4ab"),a("048f")),o=Object(c["a"])(r,i,s,!1,null,null,null);o.options.__file="index.vue";e["default"]=o.exports},"9b68":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"data-list relative f-12"},[a("transition",{attrs:{name:"slide-y"}},[t.list.length?a("table",{staticClass:"data-table"},[t._t("header",[a("tr",[a("th",[t._v("表头1")]),a("th",[t._v("表头2")])])]),t._l(t.list,function(e,i){return a("tr",{key:e.id},[t._t("item",[a("td",[t._v("数据1")]),a("td",[t._v("数据2")])],{item:e,index:(t.pageNum-1)*t.pageSize+i+1})],2)})],2):t._e()]),a("div",{staticClass:"flex-v-center",staticStyle:{"margin-top":"10px"}},[t.list.length?a("pagination",{staticClass:"mr-20",attrs:{page:t.pageNum,size:t.pageSize,total:t.total},on:{change:t.getList}}):t._e(),t.total?a("span",{staticClass:"f-12 c-6"},[t._v("共 "+t._s(t.total)+" 条数据")]):t._e()],1),t.list.length||t.loading?t._e():a("div",{staticStyle:{"margin-top":"100px"}},[a("no-data")],1)],1)},s=[];a("20a2"),a("84fb"),a("25d7"),a("dc2a");function n(t){return"?"+Object.keys(t).map(function(e){return encodeURIComponent(e)+"="+encodeURIComponent(t[e])}).join("&")}var l={name:"data-list",props:{method:{type:String,default:"get"},url:{type:String,default:""},pageSize:{type:Number,default:20},param:{type:Object,default:function(){}},pageNumStr:{type:String,default:"pageNum"}},data:function(){return{pageNum:1,total:0,loading:!1,list:[]}},watch:{url:function(){this.update()},mehtod:function(){this.update()},pageSize:function(){this.update()},param:function(){this.update()}},created:function(){this.pageNum=this.$route.query.page||1,this.getList(this.pageNum)},methods:{getList:function(t){var e=this,a=this.method,i=this.url,s=this.pageSize,l=this.param;if(i){this.loading=!0;var r={pageSize:s};r[this.pageNumStr]=t;var c=Object.assign(r,l),o="get"===a?i+n(c):i;this.$http[a](o,c).then(function(t){e.list=t.list||[],e.pageNum=t.pageNum;var a=e.$route.query;a.page=t.pageNum,e.$router.push({path:e.$route.path,query:a}),e.total=t.total,e.loading=!1}).catch(function(t){e.loading=!1,e.$toast(t.message||t.msg||t)})}},update:function(t){this.getList(t?1:this.pageNum)}}},r=l,c=(a("c8ea"),a("048f")),o=Object(c["a"])(r,i,s,!1,null,null,null);o.options.__file="index.vue";e["a"]=o.exports},a35c:function(t,e,a){},a4cc:function(t,e,a){},b4ab:function(t,e,a){"use strict";var i=a("a35c"),s=a.n(i);s.a},c2ba:function(t,e,a){"use strict";var i=a("f922"),s=a.n(i);s.a},c8ea:function(t,e,a){"use strict";var i=a("685f"),s=a.n(i);s.a},cff6:function(t,e,a){"use strict";var i=a("ffcb"),s=a.n(i);s.a},d8a1:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page-material-list"},[a("div",{staticClass:"flex-v-center tool-bar"},[a("div",{staticClass:"flex-item"}),a("router-link",{attrs:{to:"/applyBuy-material/add"}},[a("btn",{staticClass:"b",attrs:{flat:"",color:"#008eff"}},[t._v("创建送检单")])],1)],1),a("div",{staticClass:"flex-item scroll-y"},[a("data-list",{ref:"list",attrs:{"page-size":10,param:t.filter,url:"/haolifa/material-inspect/purchase-list/0",method:"post"},scopedSlots:t._u([{key:"item",fn:function(e){var i=e.item,s=e.index;return[a("td",{staticClass:"c-a"},[t._v(t._s(s))]),a("td",[t._v(t._s(i.inspectNo))]),a("td",[t._v(t._s(i.arrivalTime))]),a("td",[t._v(t._s(i.supplierName))]),a("td",[t._v(t._s(i.createTime))]),a("td",[t._v(t._s(i.status))]),a("td",{staticClass:"t-right"},[a("icon-btn",{attrs:{small:""},on:{click:function(e){t.edit(i)}}},[t._v("edit")]),a("icon-btn",{attrs:{small:""},on:{click:function(e){t.remove(i)}}},[t._v("delete")])],1)]}}])},[a("tr",{attrs:{slot:"header"},slot:"header"},[a("th",{staticStyle:{width:"60px"}},[t._v("序号")]),a("th",[t._v("报检单号")]),a("th",[t._v("到货日期")]),a("th",[t._v("供应商名称")]),a("th",[t._v("发起时间")]),a("th",[t._v("状态")]),a("th",{staticClass:"t-right",staticStyle:{width:"80px"}},[t._v("操作")])])])],1)])},s=[],n=(a("3a0f"),a("a3a3"),a("4d0b"),a("9b68")),l={name:"page-material-list",components:{DataList:n["a"]},data:function(){return{filter:{type:0,status:0}}},methods:{edit:function(t){this.$router.push("/applyBuy-material/edit?id=".concat(t.id))},remove:function(t){var e=this;this.$confirm({title:"删除确认",text:"您确定要删除以下送检单吗？<br><b>".concat(t.inspectNo,"</b>"),color:"red",btns:["取消","删除"],yes:function(){e.$http.get("/haolifa/material-inspect/delete/".concat(t.id)).then(function(t){e.$toast("删除成功"),e.$refs.list.update()}).catch(function(t){e.$toast(t.msg||t.message)})}})}}},r=l,c=(a("c2ba"),a("048f")),o=Object(c["a"])(r,i,s,!1,null,null,null);o.options.__file="index.vue";e["default"]=o.exports},f896:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page-invoice-list"},[a("div",{staticClass:"flex-v-center tool-bar"},[a("div",{staticClass:"flex-item"}),a("router-link",{attrs:{to:"/jgzx-invoice/add"}},[a("btn",{staticClass:"b",attrs:{flat:"",color:"#008eff"}},[t._v("新增发票申请")])],1)],1),a("div",{staticClass:"flex-item scroll-y"},[a("data-list",{ref:"list",attrs:{"page-size":10,param:t.filter,url:"/haolifa/invoice/list/0",method:"post"},scopedSlots:t._u([{key:"item",fn:function(e){var i=e.item,s=e.index;return[a("td",{staticClass:"c-a"},[t._v(t._s(s))]),a("td",[t._v(t._s(i.orderNo))]),a("td",[t._v(t._s(i.totalAmount))]),a("td",[t._v(t._s(i.status))]),a("td",[t._v(t._s(i.type))]),a("td",[t._v(t._s(i.remark))]),a("td",[t._v(t._s(i.auditTime))]),a("td",[t._v(t._s(i.createTime))]),a("td",[t._v(t._s(i.updateTime))]),a("td",{staticClass:"t-right"},[a("icon-btn",{attrs:{small:""},on:{click:function(e){t.remove(i)}}},[t._v("delete")])],1)]}}])},[a("tr",{attrs:{slot:"header"},slot:"header"},[a("th",{staticStyle:{width:"60px"}},[t._v("序号")]),a("th",[t._v("合同编号")]),a("th",[t._v("金额")]),a("th",[t._v("状态")]),a("th",[t._v("类型")]),a("th",[t._v("备注")]),a("th",[t._v("审批时间")]),a("th",[t._v("创建时间")]),a("th",[t._v("更新时间")]),a("th",{staticClass:"t-right",staticStyle:{width:"80px"}},[t._v("操作")])])])],1)])},s=[],n=a("9b68"),l={name:"page-invoice-list",components:{DataList:n["a"]},data:function(){return{filter:{type:0,status:0}}},methods:{edit:function(t){this.$router.push("/jgzx-invoice/edit?id=".concat(t.id))},remove:function(t){var e=this;this.$confirm({title:"删除确认",text:"您确定要删除以下发票吗？<br><b>".concat(t.invoiceNo,"</b>"),color:"red",btns:["取消","删除"],yes:function(){e.$http.get("/haolifa/invoice/delete/".concat(t.id)).then(function(t){e.$toast("删除成功"),e.$refs.list.update()}).catch(function(t){e.$toast(t.msg||t.message)})}})}}},r=l,c=(a("cff6"),a("048f")),o=Object(c["a"])(r,i,s,!1,null,null,null);o.options.__file="index.vue";e["default"]=o.exports},f922:function(t,e,a){},ffcb:function(t,e,a){}}]);
//# sourceMappingURL=diliverylist.bdca9d5d.js.map