(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f9442156"],{"18f5":function(e,t,o){"use strict";var l=o("d036"),i=o.n(l);i.a},"74ea":function(e,t,o){"use strict";o.r(t);var l=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"page-part-add abs scroll-y"},[o("div",{staticClass:"form-content"},[o("div",{staticClass:"title b f-18"},[e._v(e._s(e.form.id?"编辑":"新增")+"发货记录")]),o("div",{staticClass:"flex-v-center"},[o("input-box",{staticClass:"flex-item mr-10",attrs:{label:"订单号"},model:{value:e.form.contractOrderNo,callback:function(t){e.$set(e.form,"contractOrderNo",t)},expression:"form.contractOrderNo"}}),o("input-box",{staticClass:"flex-item mr-10",attrs:{label:"发货通知单号"},model:{value:e.form.deliveryNoticeNo,callback:function(t){e.$set(e.form,"deliveryNoticeNo",t)},expression:"form.deliveryNoticeNo"}}),o("select-box",{staticClass:"flex-item mr-10",attrs:{list:e.classifyList,label:"发货分类"},model:{value:e.form.deliveryClassify,callback:function(t){e.$set(e.form,"deliveryClassify",t)},expression:"form.deliveryClassify"}}),o("date-picker",{staticClass:"flex-item mr-10",attrs:{label:"发货日期/到货日期"},model:{value:e.form.deliveryTime,callback:function(t){e.$set(e.form,"deliveryTime",t)},expression:"form.deliveryTime"}})],1),o("div",{staticClass:"flex-v-center"},[o("input-box",{staticClass:"flex-item mr-10",attrs:{label:"运营单号"},model:{value:e.form.operationNo,callback:function(t){e.$set(e.form,"operationNo",t)},expression:"form.operationNo"}}),o("input-box",{staticClass:"flex-item mr-10",attrs:{label:"客户代号 "},model:{value:e.form.customerNo,callback:function(t){e.$set(e.form,"customerNo",t)},expression:"form.customerNo"}}),o("input-box",{staticClass:"flex-item mr-10",attrs:{label:"成品发货数量"},model:{value:e.form.productCount,callback:function(t){e.$set(e.form,"productCount",t)},expression:"form.productCount"}}),o("input-box",{staticClass:"flex-item mr-10",attrs:{label:"包装方式"},model:{value:e.form.packingMode,callback:function(t){e.$set(e.form,"packingMode",t)},expression:"form.packingMode"}}),o("input-box",{staticClass:"flex-item mr-10",attrs:{label:"件数"},model:{value:e.form.pieceCount,callback:function(t){e.$set(e.form,"pieceCount",t)},expression:"form.pieceCount"}}),o("input-box",{staticClass:"flex-item mr-10",attrs:{label:"承运单位"},model:{value:e.form.transportCompany,callback:function(t){e.$set(e.form,"transportCompany",t)},expression:"form.transportCompany"}}),o("input-box",{staticClass:"flex-item mr-10",attrs:{label:"运单号"},model:{value:e.form.courierNo,callback:function(t){e.$set(e.form,"courierNo",t)},expression:"form.courierNo"}})],1),o("div",{staticClass:"flex-v-center"},[o("input-box",{staticClass:"flex-item mr-10",attrs:{label:"省市"},model:{value:e.form.collectProvince,callback:function(t){e.$set(e.form,"collectProvince",t)},expression:"form.collectProvince"}}),o("input-box",{staticClass:"flex-item mr-10",attrs:{label:"地址"},model:{value:e.form.collectAddress,callback:function(t){e.$set(e.form,"collectAddress",t)},expression:"form.collectAddress"}}),o("input-box",{staticClass:"flex-item mr-10",attrs:{label:"收货人"},model:{value:e.form.collectName,callback:function(t){e.$set(e.form,"collectName",t)},expression:"form.collectName"}}),o("input-box",{staticClass:"flex-item mr-10",attrs:{label:"收货人电话"},model:{value:e.form.collectPhone,callback:function(t){e.$set(e.form,"collectPhone",t)},expression:"form.collectPhone"}})],1),o("div",{staticClass:"flex-v-center"},[o("input-box",{staticClass:"flex-item mr-10",attrs:{label:"重量/件数"},model:{value:e.form.weightPiece,callback:function(t){e.$set(e.form,"weightPiece",t)},expression:"form.weightPiece"}}),o("input-box",{staticClass:"flex-item mr-10",attrs:{label:"单价/计件"},model:{value:e.form.pricePiece,callback:function(t){e.$set(e.form,"pricePiece",t)},expression:"form.pricePiece"}}),o("input-box",{staticClass:"flex-item mr-10",attrs:{label:"送货费"},model:{value:e.form.deliveryFee,callback:function(t){e.$set(e.form,"deliveryFee",t)},expression:"form.deliveryFee"}}),o("input-box",{staticClass:"flex-item mr-10",attrs:{label:"运费总金额"},model:{value:e.form.totalFee,callback:function(t){e.$set(e.form,"totalFee",t)},expression:"form.totalFee"}}),o("input-box",{staticClass:"flex-item mr-10",attrs:{label:"结算方式"},model:{value:e.form.settlementWay,callback:function(t){e.$set(e.form,"settlementWay",t)},expression:"form.settlementWay"}})],1),o("div",{staticClass:"flex-v-center"},[o("input-box",{staticClass:"flex-item mr-10",attrs:{"multi-line":"",label:"备注"},model:{value:e.form.remark,callback:function(t){e.$set(e.form,"remark",t)},expression:"form.remark"}})],1),o("div",{staticClass:"flex-v-center",staticStyle:{margin:"20px 0"}},[o("btn",{staticClass:"mr-20",attrs:{big:"",disabled:!e.canSubmit},on:{click:e.submit}},[e._v("提交")]),o("btn",{staticClass:"mr-20",attrs:{big:"",flat:"",bg:""},on:{click:e.cancel}},[e._v("取消")])],1),e.loading?o("layer",[o("div",{staticClass:"abs t-center",staticStyle:{padding:"20px"}},[o("loading",{attrs:{size:"30"}}),o("div",{staticStyle:{"margin-top":"10px"}},[e._v(e._s(e.loadingMsg))])],1)]):e._e()],1)])},i=[],a=(o("8383"),o("c839"),o("ff66"),o("ea23"),o("dbff"),{name:"page-part-add",data:function(){return{loading:!1,loadingMsg:"",fileList:[],classifyList:[],form:{id:"",contractOrderNo:"",deliveryClassify:"",deliveryNoticeNo:"",deliveryTime:"",operationNo:"",customerNo:"",productCount:"",packingMode:"",pieceCount:"",transportCompany:"",courierNo:"",collectProvince:"",collectAddress:"",collectName:"",collectPhone:"",weightPiece:"",pricePiece:"",deliveryFee:"",totalFee:"",settlementWay:"",remark:""}}},computed:{canSubmit:function(){var e=this.form;return e.contractOrderNo&&e.deliveryClassify}},created:function(){var e=this.$route.query.id;this.form.contractOrderNo=this.$route.query.contractOrderNo,this.form.deliveryNoticeNo=this.$route.query.deliveryNoticeNo,void 0!==e&&"delivery-record-edit"===this.$route.name&&this.getInfo(e),this.getClassifyList()},methods:{getClassifyList:function(){var e=this;this.$http.get("/haolifa/delivery/getClassifyList").then(function(t){e.classifyList=t.map(function(e){return{value:e.code,text:e.name}})})},getInfo:function(e){var t=this;this.$http.get("/haolifa/delivery/getInfo/".concat(e)).then(function(e){t.form=e}).catch(function(e){t.$toast(e.msg||e.message)})},cancel:function(){var e=this;this.$confirm({title:"您确定要离开此页面吗？",text:"您的表单将不会保存",color:"red",btns:["取消","离开"],yes:function(){e.$router.back()}})},submit:function(){var e=this,t=this.form;this.loading=!0,this.loadingMsg="正在保存",this.$http.post("/haolifa/delivery/".concat(t.id?"update":"save"),t).then(function(t){e.loading=!1,e.$router.replace("/delivery-record/addList")}).catch(function(t){e.loading=!1,e.$toast(t.msg||t.message)})}}}),s=a,r=(o("18f5"),o("c46c")),c=Object(r["a"])(s,l,i,!1,null,null,null);c.options.__file="add.vue";t["default"]=c.exports},d036:function(e,t,o){}}]);
//# sourceMappingURL=chunk-f9442156.b2d05b51.js.map