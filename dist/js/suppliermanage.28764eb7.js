(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["suppliermanage"],{"0324":function(t,e,a){"use strict";var s=a("41e1"),i=a.n(s);i.a},"12b1":function(t,e,a){"use strict";var s=a("d0bd"),i=a.n(s);i.a},"41e1":function(t,e,a){},4517:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"apply-buy-add"},[a("div",{staticClass:"content"},[a("h1",[t._v("创建采购单")]),a("div",{staticClass:"flex"},[a("date-picker",{staticClass:"flex-item",staticStyle:{"margin-right":"20px"},attrs:{hint:"必填",label:"预期完成时间"},model:{value:t.form.targetDate,callback:function(e){t.$set(t.form,"targetDate",e)},expression:"form.targetDate"}}),a("input-box",{staticClass:"flex-item",attrs:{label:"生产订单号"},model:{value:t.form.productOrderNo,callback:function(e){t.$set(t.form,"productOrderNo",e)},expression:"form.productOrderNo"}})],1),a("div",{staticClass:"flex"},[a("date-picker",{staticClass:"flex-item",staticStyle:{"margin-right":"20px"},attrs:{hint:"必填",label:"预期完成时间"},model:{value:t.form.targetDate,callback:function(e){t.$set(t.form,"targetDate",e)},expression:"form.targetDate"}}),a("input-box",{staticClass:"flex-item",attrs:{label:"生产订单号"},model:{value:t.form.productOrderNo,callback:function(e){t.$set(t.form,"productOrderNo",e)},expression:"form.productOrderNo"}})],1),a("div",{staticClass:"b",staticStyle:{margin:"20px 0 10px"}},[t._v("采购物料项")]),t._l(t.form.itemList,function(e,s){return a("div",{key:s,staticClass:"card flex",staticStyle:{"margin-top":"0"}},[a("div",{staticClass:"flex-item"},[a("div",{staticClass:"flex"},[a("input-box",{staticClass:"flex-item mr-10",attrs:{label:"物料名称",hint:"必填"},model:{value:e.materialName,callback:function(a){t.$set(e,"materialName",a)},expression:"item.materialName"}}),a("input-box",{staticClass:"flex-item mr-10",attrs:{label:"物料图号",hint:"必填"},model:{value:e.materialGraphNo,callback:function(a){t.$set(e,"materialGraphNo",a)},expression:"item.materialGraphNo"}}),a("input-box",{staticClass:" mr-10",attrs:{type:"number",label:"数量",hint:"必填"},model:{value:e.number,callback:function(a){t.$set(e,"number",a)},expression:"item.number"}}),a("input-box",{staticClass:" mr-10",attrs:{label:"单位",hint:"必填"},model:{value:e.unit,callback:function(a){t.$set(e,"unit",a)},expression:"item.unit"}}),a("input-box",{attrs:{type:"number",label:"估价",hint:"必填"},model:{value:e.valuation,callback:function(a){t.$set(e,"valuation",a)},expression:"item.valuation"}})],1),a("div",{staticClass:"flex"},[a("input-box",{staticClass:"flex-item mr-10",attrs:{label:"用途"},model:{value:e.purpose,callback:function(a){t.$set(e,"purpose",a)},expression:"item.purpose"}}),a("input-box",{staticClass:"flex-item",attrs:{label:"备注"},model:{value:e.remark,callback:function(a){t.$set(e,"remark",a)},expression:"item.remark"}})],1)]),t.form.itemList.length>1?a("div",[a("icon-btn",{attrs:{small:""},on:{click:function(e){t.form.itemList.splice(s,1)}}},[t._v("close")])],1):t._e()])}),a("div",{staticClass:"card a flex-center",on:{click:function(e){t.addItem()}}},[t._m(0)]),a("div",{staticClass:"flex"},[a("btn",{staticClass:"mr-20",attrs:{big:""},on:{click:t.submit}},[t._v("提交")]),a("btn",{attrs:{big:"",flat:""},on:{click:function(e){t.$router.back()}}},[t._v("取消")])],1)],2)])},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"flex-v-center"},[a("i",{staticClass:"icon mr-10"},[t._v("add")]),a("span",[t._v("添加采购物料项")])])}],r=(a("20a2"),a("25d7"),{name:"purchsemanage-purchaseadd",data:function(){return{form:{confirmTime:"",deliveryTime:"",demander:"",demanderAddr:"",demanderLinkman:"",demanderPhone:"",operateTime:"",operatorUserName:"",orderNo:"",suppilerPhone:"",supplierAddr:"",supplierConfirmer:"",supplierLinkman:"",supplierName:"",supplierNo:"",itemList:[]},item:{material:"",materialGraphNo:"",materialName:"",number:0,remark:"",specification:"",unit:"",unitPrice:0,unitWeight:0}}},methods:{addItem:function(){this.form.itemList.push({materialName:"",materialGraphNo:"",number:"",unit:"",valuation:"",purpose:"",remark:""})},submit:function(){var t=this,e={materialName:"物料名称",materialGraphNo:"物料图号",number:"数量",unit:"必填",valuation:"估价"},a=this.form,s=a.itemList,i=a.targetDate;i?(s.forEach(function(a,s){for(var i in a)if(e[i]&&!a[i])return void t.$toast("请填写第 ".concat(s+1," 项 ").concat(e[i]))}),this.$http.post("/haolifa/purchase-order/save",this.form).then(function(e){var a=Object.assign({},e,{flowId:7,summary:"test"});t.$http.post("/haolifa/flowInstance/create",a).then(function(e){t.$router.push("/applybuy?instanceId=".concat(e.instanceId))}).catch(function(e){t.$toast(e.message||e.msg)})}).catch(function(e){t.$toast(e.message||e.msg)})):this.$toast("请填写预计完成时间")}}}),n=r,l=(a("0324"),a("048f")),o=Object(l["a"])(n,s,i,!1,null,null,null);o.options.__file="add.vue";e["default"]=o.exports},"685f":function(t,e,a){},"9b68":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"data-list relative f-12"},[a("transition",{attrs:{name:"slide-y"}},[t.list.length?a("table",{staticClass:"data-table"},[t._t("header",[a("tr",[a("th",[t._v("表头1")]),a("th",[t._v("表头2")])])]),t._l(t.list,function(e,s){return a("tr",{key:e.id},[t._t("item",[a("td",[t._v("数据1")]),a("td",[t._v("数据2")])],{item:e,index:(t.pageNum-1)*t.pageSize+s+1})],2)})],2):t._e()]),a("div",{staticClass:"flex-v-center",staticStyle:{"margin-top":"10px"}},[t.list.length?a("pagination",{staticClass:"mr-20",attrs:{page:t.pageNum,size:t.pageSize,total:t.total},on:{change:t.getList}}):t._e(),t.total?a("span",{staticClass:"f-12 c-6"},[t._v("共 "+t._s(t.total)+" 条数据")]):t._e()],1),t.list.length||t.loading?t._e():a("div",{staticStyle:{"margin-top":"100px"}},[a("no-data")],1)],1)},i=[];a("20a2"),a("84fb"),a("25d7"),a("dc2a");function r(t){return"?"+Object.keys(t).map(function(e){return encodeURIComponent(e)+"="+encodeURIComponent(t[e])}).join("&")}var n={name:"data-list",props:{method:{type:String,default:"get"},url:{type:String,default:""},pageSize:{type:Number,default:20},param:{type:Object,default:function(){}},pageNumStr:{type:String,default:"pageNum"}},data:function(){return{pageNum:1,total:0,loading:!1,list:[]}},watch:{url:function(){this.update()},mehtod:function(){this.update()},pageSize:function(){this.update()},param:function(){this.update()}},created:function(){this.pageNum=this.$route.query.page||1,this.getList(this.pageNum)},methods:{getList:function(t){var e=this,a=this.method,s=this.url,i=this.pageSize,n=this.param;if(s){this.loading=!0;var l={pageSize:i};l[this.pageNumStr]=t;var o=Object.assign(l,n),c="get"===a?s+r(o):s;this.$http[a](c,o).then(function(t){e.list=t.list||[],e.pageNum=t.pageNum;var a=e.$route.query;a.page=t.pageNum,e.$router.push({path:e.$route.path,query:a}),e.total=t.total,e.loading=!1}).catch(function(t){e.loading=!1,e.$toast(t.message||t.msg||t)})}},update:function(t){this.getList(t?1:this.pageNum)}}},l=n,o=(a("c8ea"),a("048f")),c=Object(o["a"])(l,s,i,!1,null,null,null);c.options.__file="index.vue";e["a"]=c.exports},bb93:function(t,e,a){},bc4a:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page-supplier-manage flex-col"},[a("div",{staticClass:"flex-v-center tool-bar"},[t._m(0),a("div",{staticClass:"flex-item"}),a("router-link",{attrs:{to:"/supplier/add"}},[a("btn",{staticClass:"b",attrs:{flat:"",color:"#008eff"}},[t._v("新增供应商")])],1)],1),a("div",{staticClass:"flex-item scroll-y"},[a("data-list",{ref:"list",attrs:{method:"post",url:"/haolifa/supplier/list"},scopedSlots:t._u([{key:"item",fn:function(e){var s=e.item,i=e.index;return[a("td",[t._v(t._s(i))]),a("td",[a("router-link",{staticClass:"c-4",attrs:{to:"/supplier/"+s.id}},[t._v(t._s(s.suppilerName))])],1),a("td",[t._v(t._s(s.suppilerNo))]),a("td",[t._v(t._s(s.website))]),a("td",[t._v(t._s(t.natureList[s.nature]))]),a("td",[t._v(t._s(s.legalPerson))]),a("td",[t._v(t._s(s.phone))]),a("td",{staticClass:"t-right"},[a("icon-btn",{attrs:{small:""},on:{click:function(e){t.edit(s)}}},[t._v("edit")]),a("icon-btn",{attrs:{small:""},on:{click:function(e){t.remove(s)}}},[t._v("delete")])],1)]}}])},[a("tr",{attrs:{slot:"header"},slot:"header"},[a("th",{staticStyle:{width:"60px"}},[t._v("序号")]),a("th",[t._v("企业名称")]),a("th",[t._v("编号")]),a("th",[t._v("网址")]),a("th",[t._v("企业性质")]),a("th",[t._v("法人")]),a("th",[t._v("电话")]),a("th",{staticClass:"t-right",staticStyle:{width:"80px"}},[t._v("操作")])])])],1)])},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"flex-v-center search-bar",staticStyle:{"margin-right":"20px"}},[a("i",{staticClass:"icon f-20 c-8"},[t._v("search")]),a("input",{staticClass:"flex-item",staticStyle:{width:"200px"},attrs:{type:"text",placeholder:"供应商名称"}})])}],r=a("9b68"),n={name:"page-supplier-manage",components:{DataList:r["a"]},data:function(){return{natureList:["国有","三资","集体","联营","私营"]}},methods:{edit:function(t){this.$router.push("/supplier/edit?id=".concat(t.id))},remove:function(t){var e=this;this.$confirm({title:"删除确认",text:"您确定要删除以下供应商吗？<br><b>".concat(t.suppilerName,"</b>"),color:"red",btns:["取消","删除"],yes:function(){e.$http.get("/haolifa/supplier/delete?id=".concat(t.id)).then(function(t){e.$toast("删除成功"),e.$refs.list.update()}).catch(function(t){e.$toast(t.msg||t.message)})}})}}},l=n,o=(a("c8b8"),a("048f")),c=Object(o["a"])(l,s,i,!1,null,null,null);c.options.__file="index.vue";e["default"]=c.exports},c8b8:function(t,e,a){"use strict";var s=a("bb93"),i=a.n(s);i.a},c8ea:function(t,e,a){"use strict";var s=a("685f"),i=a.n(s);i.a},d0bd:function(t,e,a){},ef03:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"purchaseadd flex-col"},[a("div",{staticClass:"flex-v-center tool-bar"},[a("div",{staticClass:"flex-v-center search-bar",staticStyle:{"margin-right":"20px"}},[a("i",{staticClass:"icon f-20 c-8"},[t._v("search")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.filter.orderNo,expression:"filter.orderNo"}],staticClass:"flex-item",staticStyle:{width:"200px"},attrs:{type:"text",placeholder:"采购合同号"},domProps:{value:t.filter.orderNo},on:{change:function(e){t.$refs.list.update(!0)},input:function(e){e.target.composing||t.$set(t.filter,"orderNo",e.target.value)}}}),a("select",{directives:[{name:"model",rawName:"v-model",value:t.filter.status,expression:"filter.status"}],staticClass:"f-14",on:{change:[function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.$set(t.filter,"status",e.target.multiple?a:a[0])},function(e){t.$refs.list.update(!0)}]}},[a("option",{attrs:{value:"0"}},[t._v("合同状态")]),t._l(t.statusList,function(e){return a("option",{key:e.id,domProps:{value:e.status}},[t._v(t._s(e.name))])})],2),a("i",{staticClass:"icon",staticStyle:{"margin-left":"-20px","pointer-events":"none"}},[t._v("arrow_drop_down")])]),a("div",{staticClass:"flex-item"}),a("router-link",{attrs:{to:"/purchsemanage-purchase/add"}},[a("btn",{staticClass:"b",attrs:{flat:"",color:"#008eff"}},[t._v("新增采购")])],1)],1),a("div",{staticClass:"flex-item scroll-y"},[a("data-list",{ref:"list",attrs:{method:"get","page-size":10,param:t.filter,url:"/haolifa//purchase-order/list"},scopedSlots:t._u([{key:"item",fn:function(e){var s=e.item,i=e.index;return[a("td",[t._v(t._s(i))]),a("td",[t._v(t._s(s.purchaseOrderNo))]),a("td",[t._v(t._s(s.supplierName))]),a("td",[t._v(t._s(s.deliveryTime))]),a("td",[t._v(t._s(t.statusList[s.status-1].name))]),a("td",[t._v(t._s(s.createUserId))]),a("td",[t._v(t._s(s.createTime))]),a("td",{staticClass:"t-right"},[1==s.status?a("a",{staticClass:"blue",staticStyle:{"margin-right":"3px"},attrs:{href:"javascript:;"},on:{click:function(e){t.approve(s.purchaseOrderNo)}}},[t._v("发起审批")]):t._e(),1==s.status?a("a",{staticClass:"blue",attrs:{href:"javascript:;"},on:{click:function(e){t.updatePurchase(s.purchaseOrderNo)}}},[t._v("编辑")]):t._e(),3==s.status?a("a",{staticClass:"blue",attrs:{href:"javascript:;"},on:{click:function(e){t.completePurchase(s.purchaseOrderNo)}}},[t._v("采购完成")]):t._e()])]}}])},[a("tr",{attrs:{slot:"header"},slot:"header"},[a("th",{staticStyle:{width:"60px"}},[t._v("序号")]),a("th",[t._v("合同编号")]),a("th",[t._v("供方单位")]),a("th",[t._v("采购完成日期")]),a("th",[t._v("订单状态")]),a("th",[t._v("创建人")]),a("th",[t._v("创建日期")]),a("th",{staticClass:"t-right",staticStyle:{width:"80px"}},[t._v("操作")])])])],1),t.completeLayer?a("layer",{attrs:{title:"订单折损",width:"450px"}},[a("div",{staticClass:"flex"},[a("input-box",{staticClass:"flex-item mr-20",attrs:{label:"折损金额"},model:{value:t.wreck.wreckAmount,callback:function(e){t.$set(t.wreck,"wreckAmount",e)},expression:"wreck.wreckAmount"}}),a("input-box",{staticClass:"flex-item mr-20",attrs:{label:"折损原因"},model:{value:t.wreck.wreckReason,callback:function(e){t.$set(t.wreck,"wreckReason",e)},expression:"wreck.wreckReason"}})],1),a("div",{staticClass:"layer-btns"},[a("btn",{attrs:{flat:""},on:{click:function(e){t.completeLayer=!1}}},[t._v("取消")]),a("btn",{attrs:{flat:"",color:"#008eff"},on:{click:function(e){t.complete()}}},[t._v("保存")])],1)]):t._e()],1)},i=[],r=(a("3a0f"),a("a3a3"),a("4d0b"),a("9b68")),n={name:"purchsemanage-purchase",components:{DataList:r["a"]},data:function(){return{natureList:["国有","三资","集体","联营","私营"],statusList:[{status:1,name:"待审批"},{status:2,name:"审批中"},{status:3,name:"采购中"},{status:4,name:"审批不通过"},{status:5,name:"采购完成"}],filter:{orderNo:"",status:0,createUserId:0},wreck:{orderNo:"",wreckAmount:0,wreckReason:""},completeLayer:!1,confirmLayer:!1}},created:function(){this.filter.createUserId=0},methods:{approve:function(t){var e=this;this.$http.get("/haolifa/purchase-order/approve/".concat(t)).then(function(t){}).catch(function(t){e.$toast(t.msg||t.message)})},updatePurchase:function(t){},completePurchase:function(t){this.completeLayer=!0,this.wreck.orderNo=t},complete:function(){var t=this;this.$http.post("/haolifa/purchase-order/complete",this.wreck).then(function(e){t.completeLayer=!1,t.$refs.list.update(!0)}).catch(function(e){t.$toast(e.msg||e.message)})}}},l=n,o=(a("12b1"),a("048f")),c=Object(o["a"])(l,s,i,!1,null,null,null);c.options.__file="index.vue";e["default"]=c.exports}}]);
//# sourceMappingURL=suppliermanage.28764eb7.js.map