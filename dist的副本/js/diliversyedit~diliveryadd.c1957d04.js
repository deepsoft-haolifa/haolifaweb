(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["diliversyedit~diliveryadd"],{"0221":function(t,a,e){},"0295":function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"page-part-add abs scroll-y"},[e("div",{staticClass:"form-content"},[e("div",{staticClass:"title b f-18"},[t._v(t._s(t.form.id?"审核":"新增")+"发货通知单")]),e("div",{staticClass:"flex-v-center"}),e("div",{staticClass:"flex-v-center"},[e("input-box",{staticClass:"mr-10",staticStyle:{width:"50%"},attrs:{label:"发货单号"},model:{value:t.form.deliveryNo,callback:function(a){t.$set(t.form,"deliveryNo",a)},expression:"form.deliveryNo"}})],1),e("div",{staticClass:"flex-v-center"},[e("span",{staticClass:"mr-20"},[t._v("是否同意:")]),e("radio-box",{attrs:{label:"1",text:"同意"},model:{value:t.form.auditResult,callback:function(a){t.$set(t.form,"auditResult",a)},expression:"form.auditResult"}}),e("radio-box",{attrs:{label:"2",text:"不同意"},model:{value:t.form.auditResult,callback:function(a){t.$set(t.form,"auditResult",a)},expression:"form.auditResult"}})],1),e("div",{staticClass:"flex-v-center"},[e("input-box",{staticClass:"mr-10",staticStyle:{width:"50%"},attrs:{label:"备注"},model:{value:t.form.auditInfo,callback:function(a){t.$set(t.form,"auditInfo",a)},expression:"form.auditInfo"}})],1),e("div",{staticClass:"flex-v-center",staticStyle:{margin:"20px 0"}},[e("btn",{staticClass:"mr-20",attrs:{big:"",disabled:!t.canSubmit},on:{click:t.submit}},[t._v("提交")]),e("btn",{staticClass:"mr-20",attrs:{big:"",flat:"",bg:""},on:{click:t.cancel}},[t._v("取消")])],1),t.loading?e("layer",[e("div",{staticClass:"abs t-center",staticStyle:{padding:"20px"}},[e("loading",{attrs:{size:"30"}}),e("div",{staticStyle:{"margin-top":"10px"}},[t._v(t._s(t.loadingMsg))])],1)]):t._e()],1)])},s=[],n=(e("8383"),e("c839"),{name:"page-part-add",data:function(){return{loading:!1,loadingMsg:"",fileList:[],form:{id:"",contractOrderNo:"",deliveryUrl:""}}},computed:{canSubmit:function(){var t=this.form;return t.contractOrderNo&&t.deliveryUrl}},created:function(){var t=this.$route.query.id;void 0!==t&&"bills-edit"===this.$route.name&&this.getInfo(t)},methods:{getInfo:function(t){var a=this;this.$http.get("/haolifa/delivery/noticeInfo/".concat(t)).then(function(t){a.form=t}).catch(function(t){a.$toast(t.msg||t.message)})},cancel:function(){var t=this;this.$confirm({title:"您确定要离开此页面吗？",text:"您的表单将不会保存",color:"red",btns:["取消","离开"],yes:function(){t.$router.back()}})},submit:function(){var t=this,a=this.form;this.loading=!0,this.loadingMsg="正在保存",this.$http.post("/haolifa/delivery/auditNotice",{auditInfo:a.auditInfo,auditResult:a.auditResult,deliveryNo:a.deliveryNo}).then(function(a){t.loading=!1,t.$router.replace("/finance-bills")}).catch(function(a){t.loading=!1,t.$toast(a.msg||a.message)})}}}),r=n,o=(e("ba1f"),e("c46c")),l=Object(o["a"])(r,i,s,!1,null,null,null);l.options.__file="add.vue";a["default"]=l.exports},"153b":function(t,a,e){"use strict";var i=e("4b4a"),s=e.n(i);a["a"]=function(t){return new s.a(function(a,e){var i=new FileReader;i.readAsDataURL(t),i.onload=function(){a(i.result)},i.onerror=function(t){e(t)}})}},"1e84":function(t,a,e){"use strict";var i=e("0221"),s=e.n(i);s.a},"289a":function(t,a,e){var i=e("6dae"),s=e("2de7");e("b560")("keys",function(){return function(t){return s(i(t))}})},2969:function(t,a,e){},"32e3":function(t,a,e){},"6a32":function(t,a,e){},"9b68":function(t,a,e){"use strict";var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"data-list relative f-12"},[e("transition",{attrs:{name:"slide-y"}},[t.list.length?e("table",{staticClass:"data-table"},[t._t("header",[e("tr",[e("th",[t._v("表头1")]),e("th",[t._v("表头2")])])]),t._l(t.list,function(a,i){return e("tr",{key:a.id},[t._t("item",[e("td",[t._v("数据1")]),e("td",[t._v("数据2")])],{item:a,index:(t.pageNum-1)*t.pageSize+i+1})],2)})],2):t._e()]),e("div",{staticClass:"flex-v-center",staticStyle:{"margin-top":"10px"}},[t.list.length?e("pagination",{staticClass:"mr-20",attrs:{page:t.pageNum,size:t.pageSize,total:t.total},on:{change:t.getList}}):t._e(),t.total?e("span",{staticClass:"f-12 c-6"},[t._v("共 "+t._s(t.total)+" 条数据")]):t._e()],1),t.list.length||t.loading?t._e():e("div",{staticStyle:{"margin-top":"100px"}},[e("no-data")],1)],1)},s=[],n=e("f360"),r=e.n(n),o=(e("7378"),e("e862")),l=e.n(o);function c(t){return"?"+l()(t).map(function(a){return encodeURIComponent(a)+"="+encodeURIComponent(t[a])}).join("&")}var u={name:"data-list",props:{method:{type:String,default:"get"},url:{type:String,default:""},pageSize:{type:Number,default:20},param:{type:Object,default:function(){}},pageNumStr:{type:String,default:"pageNum"}},data:function(){return{pageNum:1,total:0,loading:!1,list:[]}},watch:{url:function(){this.update()},mehtod:function(){this.update()},pageSize:function(){this.update()},param:function(){this.update()}},created:function(){this.pageNum=this.$route.query.page||1,this.getList(this.pageNum)},methods:{getList:function(t){var a=this,e=this.method,i=this.url,s=this.pageSize,n=this.param;if(i){this.loading=!0;var o={pageSize:s};o[this.pageNumStr]=t;var l=r()(o,n),u="get"===e?i+c(l):i;this.$http[e](u,l).then(function(t){a.list=t.list||[],a.pageNum=t.pageNum;var e=a.$route.query;e.page=t.pageNum,a.$router.push({path:a.$route.path,query:e}),a.total=t.total,a.loading=!1}).catch(function(t){a.loading=!1,a.$toast(t.message||t.msg||t)})}},update:function(t){this.getList(t?1:this.pageNum)}}},f=u,m=(e("c8ea"),e("c46c")),d=Object(m["a"])(f,i,s,!1,null,null,null);d.options.__file="index.vue";a["a"]=d.exports},a605:function(t,a,e){"use strict";var i=e("2969"),s=e.n(i);s.a},af27:function(t,a,e){"use strict";var i=e("bf7e"),s=e.n(i);s.a},b560:function(t,a,e){var i=e("3427"),s=e("7f8a"),n=e("f988");t.exports=function(t,a){var e=(s.Object||{})[t]||Object[t],r={};r[t]=a(e),i(i.S+i.F*n(function(){e(1)}),"Object",r)}},ba1f:function(t,a,e){"use strict";var i=e("32e3"),s=e.n(i);s.a},bf7e:function(t,a,e){},c8ea:function(t,a,e){"use strict";var i=e("6a32"),s=e.n(i);s.a},daa0:function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"apply-buy-add"},[e("div",{staticClass:"content"},[e("div",{staticClass:"title b f-18"},[t._v(t._s(t.entrustNo?"编辑":"新增")+"机加工单")]),e("div",{staticClass:"flex"},[e("input-box",{staticClass:"flex-item mr-20",attrs:{label:"采购合同号"},model:{value:t.form.purchaseNo,callback:function(a){t.$set(t.form,"purchaseNo",a)},expression:"form.purchaseNo"}}),e("select-box",{staticStyle:{"margin-right":"20px",width:"240px"},attrs:{list:t.materialClassify,label:"零件名称"},on:{change:function(a){t.getMaterialGraphNoList()}},model:{value:t.classifyId,callback:function(a){t.classifyId=a},expression:"classifyId"}}),e("select-box",{staticStyle:{"margin-right":"20px",width:"240px"},attrs:{list:t.materialGraphNoList,label:"零件图号"},model:{value:t.form.materialGraphNo,callback:function(a){t.$set(t.form,"materialGraphNo",a)},expression:"form.materialGraphNo"}})],1),e("div",{staticClass:"flex"},[e("input-box",{staticClass:"flex-item mr-20",attrs:{label:"数量"},model:{value:t.form.number,callback:function(a){t.$set(t.form,"number",a)},expression:"form.number"}})],1),e("div",{staticClass:"flex"},[e("btn",{staticClass:"mr-20",attrs:{big:""},on:{click:t.submit}},[t._v("提交")]),e("btn",{attrs:{big:"",flat:""},on:{click:function(a){t.$router.back()}}},[t._v("取消")])],1)])])},s=[],n=(e("8383"),e("3f87"),e("c839"),e("ff66"),e("ea23"),e("dbff"),{name:"apply-buy-add",data:function(){return{form:{purchaseNo:null,materialGraphName:null,materialGraphNo:null,number:0,actionType:1},entrustNo:"",classifyId:0,materialClassify:[],materialGraphNoList:[]}},created:function(){var t=this.$route.query.entrustNo;this.getMaterialClassify(),void 0!==t&&"machining-edit"===this.$route.name&&this.getInfo(t)},methods:{getMaterialClassify:function(){var t=this;this.$http.get("/haolifa/material/classify/list").then(function(a){t.materialClassify=a.map(function(t){return{value:t.id,text:t.classifyName}}).filter(function(t){return"阀体"==t.text||"阀板"==t.text}),t.classifyId=t.materialClassify[0].value,t.form.materialGraphName=t.materialClassify[0].text,t.$http.get("/haolifa/material/getListByClassifyId/".concat(t.materialClassify[0].value)).then(function(a){t.materialGraphNoList=a.map(function(t){return{value:t.graphNo,text:t.graphNo}}),t.form.materialGraphNo=t.materialGraphNoList[0].value})})},getMaterialGraphNoList:function(){var t=this;this.materialClassify.forEach(function(a,e){a.value==t.classifyId&&(t.form.materialGraphName=a.text)}),this.$http.get("/haolifa/material/getListByClassifyId/".concat(this.classifyId)).then(function(a){t.materialGraphNoList=a.map(function(t){return{value:t.graphNo,text:t.graphNo}}),t.form.materialGraphNo=t.materialGraphNoList[0].value})},getInfo:function(t){var a=this;this.entrustNo=t,this.$http.get("/haolifa/entrust/info/".concat(t)).then(function(t){for(var e in a.form)void 0!==a.form[e]&&(a.form[e]=t[e]);a.materialClassify.forEach(function(t,e){t.text==a.form.materialGraphName&&(a.classifyId=t.value),a.$http.get("/haolifa/material/getListByClassifyId/".concat(a.classifyId)).then(function(t){a.materialGraphNoList=t.map(function(t){return{value:t.graphNo,text:t.graphNo}})})})}).catch(function(t){a.$toast(t.msg||t.message)})},submit:function(){var t=this;""==this.entrustNo?this.$http.post("/haolifa/entrust/save",this.form).then(function(a){t.loading=!1,t.$toast("提交成功"),t.$router.replace("/applyBuy-machining/addList")}).catch(function(a){t.$toast(a.message||a.msg)}):this.$http.post("/haolifa/entrust/update/".concat(this.entrustNo),this.form).then(function(a){t.loading=!1,t.$toast("更新成功"),t.$router.replace("/applyBuy-machining/addList")}).catch(function(a){t.$toast(a.message||a.msg)})}}}),r=n,o=(e("a605"),e("c46c")),l=Object(o["a"])(r,i,s,!1,null,null,null);l.options.__file="add.vue";a["default"]=l.exports},e652:function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"page-part-add abs scroll-y"},[e("div",{staticClass:"form-content"},[e("div",{staticClass:"title b f-18"},[t._v(t._s(t.form.id?"编辑":"新增")+"发票")]),e("div",{staticClass:"flex-v-center"}),e("div",{staticClass:"flex-v-center"},[e("input-box",{staticClass:"mr-10",staticStyle:{width:"50%"},attrs:{label:"合同编号"},model:{value:t.form.orderNo,callback:function(a){t.$set(t.form,"orderNo",a)},expression:"form.orderNo"}})],1),e("div",{staticClass:"flex-v-center"},[e("input-box",{staticClass:"mr-10",staticStyle:{width:"50%"},attrs:{label:"发票金额"},model:{value:t.form.totalAmount,callback:function(a){t.$set(t.form,"totalAmount",a)},expression:"form.totalAmount"}})],1),e("div",{staticClass:"flex-v-center"},[e("input-box",{staticClass:"mr-10",staticStyle:{width:"50%"},attrs:{label:"备注"},model:{value:t.form.remark,callback:function(a){t.$set(t.form,"remark",a)},expression:"form.remark"}})],1),e("div",{staticClass:"flex"},[e("btn",{staticClass:"mr-20",attrs:{big:""},on:{click:t.submit}},[t._v("提交")]),e("btn",{attrs:{big:"",flat:""},on:{click:function(a){t.$router.back()}}},[t._v("取消")])],1)])])},s=[],n=(e("8383"),e("ff66"),e("ea23"),e("dbff"),{name:"page-part-add",data:function(){return{form:{orderNo:"",totalAmount:0,remark:"",status:1,type:1}}},methods:{submit:function(){var t=this;this.$http.post("/haolifa/invoice/save",this.form).then(function(a){t.$router.replace("/jgzx-invoice/addList")}).catch(function(a){t.$toast(a.message||a.msg)})}}}),r=n,o=(e("af27"),e("c46c")),l=Object(o["a"])(r,i,s,!1,null,null,null);l.options.__file="add.vue";a["default"]=l.exports},e862:function(t,a,e){t.exports=e("f521")},f521:function(t,a,e){e("289a"),t.exports=e("7f8a").Object.keys},f7a4:function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"apply-buy-add"},[e("div",{staticClass:"content"},[e("div",{staticClass:"title b f-18"},[t._v(t._s(t.form.entrustNo?"编辑":"新增")+"机加工单")]),e("div",{staticClass:"flex"},[e("input-box",{staticClass:"flex-item",attrs:{label:"物料名称"},model:{value:t.form.materialGraphName,callback:function(a){t.$set(t.form,"materialGraphName",a)},expression:"form.materialGraphName"}}),e("input-box",{staticClass:"flex-item",attrs:{label:"物料图号"},model:{value:t.form.materialGraphNo,callback:function(a){t.$set(t.form,"materialGraphNo",a)},expression:"form.materialGraphNo"}}),e("input-box",{staticClass:"flex-item",attrs:{label:"数量"},model:{value:t.form.number,callback:function(a){t.$set(t.form,"number",a)},expression:"form.number"}})],1),e("div",{staticClass:"flex"},[e("btn",{staticClass:"mr-20",attrs:{big:""},on:{click:t.submit}},[t._v("提交")]),e("btn",{attrs:{big:"",flat:""},on:{click:function(a){t.$router.back()}}},[t._v("取消")])],1)])])},s=[],n=(e("8383"),e("c839"),{name:"apply-buy-add",data:function(){return{form:{materialGraphName:"",materialGraphNo:"",number:"",actionType:1,entrustNo:""}}},created:function(){var t=this.$route.query.entrustNo;void 0!==t&&"machining-edit"===this.$route.name&&this.getInfo(t)},methods:{getInfo:function(t){var a=this;this.$http.get("/haolifa/entrust/info/".concat(t)).then(function(t){for(var e in a.form)void 0!==a.form[e]&&(a.form[e]=t[e])}).catch(function(t){a.$toast(t.msg||t.message)})},submit:function(){var t=this;this.$http.post("/haolifa/entrust/save",this.form).then(function(a){t.loading=!1,t.$toast("提交成功"),t.$router.replace("/applyBuy-machining")}).catch(function(a){t.$toast(a.message||a.msg)})}}}),r=n,o=(e("1e84"),e("c46c")),l=Object(o["a"])(r,i,s,!1,null,null,null);l.options.__file="add.vue";a["default"]=l.exports}}]);
//# sourceMappingURL=diliversyedit~diliveryadd.c1957d04.js.map