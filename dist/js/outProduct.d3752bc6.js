(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["outProduct"],{"9a49":function(t,o,e){"use strict";e.r(o);var a=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"page-outMaterial-form abs scroll-y"},[e("div",{staticClass:"form-content"},[e("div",{staticClass:"title b f-18"},[t._v("成品出库")]),e("div",{staticClass:"flex-v-center"},[e("input-box",{staticClass:"flex-item mr-10",attrs:{label:"成品名称",disabled:"disabled"},model:{value:t.name,callback:function(o){t.name=o},expression:"name"}}),e("input-box",{staticClass:"flex-item mr-10",attrs:{label:"成品号",disabled:"disabled"},model:{value:t.form.productNo,callback:function(o){t.$set(t.form,"productNo",o)},expression:"form.productNo"}})],1),e("div",{staticClass:"flex-v-center"},[e("input-box",{staticClass:"mr-10",staticStyle:{width:"25%"},attrs:{label:"客户名称"},model:{value:t.form.customerName,callback:function(o){t.$set(t.form,"customerName",o)},expression:"form.customerName"}}),e("input-box",{staticClass:"mr-10",staticStyle:{width:"25%"},attrs:{label:"客户代号"},model:{value:t.form.customerNo,callback:function(o){t.$set(t.form,"customerNo",o)},expression:"form.customerNo"}}),e("input-box",{staticClass:"flex-item mr-10",staticStyle:{width:"25%"},attrs:{label:"订单号"},model:{value:t.form.orderNo,callback:function(o){t.$set(t.form,"orderNo",o)},expression:"form.orderNo"}}),e("input-box",{staticClass:"flex-item mr-10",staticStyle:{width:"25%"},attrs:{label:"出库单价（销售单价）"},model:{value:t.form.price,callback:function(o){t.$set(t.form,"price",o)},expression:"form.price"}})],1),e("div",{staticClass:"flex-v-center"},[e("select-box",{staticClass:"mr-10",staticStyle:{width:"20%"},attrs:{list:t.roomList,label:"所属库房"},on:{change:t.getRoomId},model:{value:t.form.storeRoomId,callback:function(o){t.$set(t.form,"storeRoomId",o)},expression:"form.storeRoomId"}}),e("select-box",{staticClass:"mr-10",staticStyle:{width:"20%"},attrs:{list:t.rackListnew,label:"所属库位"},on:{change:t.getRackId},model:{value:t.form.storeRoomRackNo,callback:function(o){t.$set(t.form,"storeRoomRackNo",o)},expression:"form.storeRoomRackNo"}}),e("input-box",{staticClass:"mr-10",staticStyle:{width:"20%"},attrs:{label:"出库数量（负数）"},model:{value:t.form.quantity,callback:function(o){t.$set(t.form,"quantity",o)},expression:"form.quantity"}})],1),e("div",{staticClass:"flex-v-center",staticStyle:{margin:"20px 0"}},[e("btn",{staticClass:"mr-20",attrs:{big:"",disabled:!t.canSubmit},on:{click:t.submit}},[t._v("提交")]),e("btn",{staticClass:"mr-20",attrs:{big:"",flat:"",bg:""},on:{click:t.cancel}},[t._v("取消")])],1)])])},s=[],r=(e("aba3"),e("c154"),e("cf54"),{name:"page-outMaterial-form",data:function(){return{form:{productNo:"",customerName:"",customerNo:"",orderNo:"",price:"",quantity:"",storeRoomId:"",storeRoomRackId:"",storeRoomRackNo:""},name:"",roomList:[],rackList:[],rackListnew:[]}},computed:{canSubmit:function(){var t=this.form;return t.productNo&&t.quantity}},created:function(){var t=this.$route.query,o=t.productNo,e=t.name;void 0!==o&&"outProduct"===this.$route.name&&this.getInfo(o,e),this.getRoomList(),this.getRoomRackList(),this.getRoomId(),this.getRackId()},methods:{getRackId:function(){var t=this,o=this.rackList.find(function(o){return o.value===t.form.storeRoomRackNo});this.form.storeRoomRackId=o?o.id:""},getRoomId:function(){var t=this,o=this.rackList.filter(function(o){return o.roomId===t.form.storeRoomId});this.rackListnew=o},getRoomList:function(){var t=this;this.$http.get("/haolifa/store-room/listInfo?type=0").then(function(o){t.roomList=o.filter(function(t){return!t.isDelete}).map(function(t){return{value:t.roomNo,text:t.name}})})},getRoomRackList:function(){var t=this;this.$http.get("/haolifa/store-room/rack/pageInfo").then(function(o){t.rackList=o.list.filter(function(t){return!t.isDelete}).map(function(t){return{value:t.rackNo,text:t.rackName,roomId:t.storeRoomNo,id:t.id}})})},getInfo:function(t,o){var e=this;this.$http.get("/haolifa/product/getInfo/".concat(t)).then(function(a){for(var s in e.form)void 0!==e.form[s]&&(e.form.productNo=t),e.name=o}).catch(function(t){e.$toast(t.msg||t.message)})},cancel:function(){var t=this;this.$confirm({title:"您确定要离开此页面吗？",text:"您的表单将不会保存",color:"red",btns:["取消","离开"],yes:function(){t.$router.back()}})},submit:function(){var t=this,o=this.form;this.loading=!0;var e="put";this.$http[e]("/haolifa/store-room/entryOut/outMaterial",o).then(function(o){t.loading=!1,t.$router.replace("/storeproduct")}).catch(function(o){t.loading=!1,t.$toast(o.msg||o.message)})}}}),i=r,c=(e("a248"),e("048f")),n=Object(c["a"])(i,a,s,!1,null,null,null);n.options.__file="outProduct.vue";o["default"]=n.exports},a248:function(t,o,e){"use strict";var a=e("cc82"),s=e.n(a);s.a},cc82:function(t,o,e){}}]);
//# sourceMappingURL=outProduct.d3752bc6.js.map