(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["entryMateriallist"],{"26be":function(t,a,e){"use strict";e.r(a);var o=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"page-entryMaterial-form abs scroll-y"},[e("div",{staticClass:"form-content"},[e("div",{staticClass:"title b f-18"},[t._v("零件入库")]),e("div",{staticClass:"flex-v-center"},[e("input-box",{staticClass:"flex-item mr-10",attrs:{label:"零件名称",disabled:"disabled"},model:{value:t.form.name,callback:function(a){t.$set(t.form,"name",a)},expression:"form.name"}}),e("input-box",{staticClass:"flex-item mr-10",attrs:{label:"图号",disabled:"disabled"},model:{value:t.form.materialGraphNo,callback:function(a){t.$set(t.form,"materialGraphNo",a)},expression:"form.materialGraphNo"}})],1),e("div",{staticClass:"flex-v-center"},[e("input-box",{staticClass:"mr-10",staticStyle:{width:"20%"},attrs:{label:"订单号"},model:{value:t.form.orderNo,callback:function(a){t.$set(t.form,"orderNo",a)},expression:"form.orderNo"}}),e("input-box",{staticClass:"mr-10",staticStyle:{width:"20%"},attrs:{label:"零件购买单价"},model:{value:t.form.price,callback:function(a){t.$set(t.form,"price",a)},expression:"form.price"}}),e("input-box",{staticClass:"mr-10",staticStyle:{width:"20%"},attrs:{label:"批次号"},model:{value:t.form.materialBatchNo,callback:function(a){t.$set(t.form,"materialBatchNo",a)},expression:"form.materialBatchNo"}}),e("input-box",{staticClass:"mr-10",staticStyle:{width:"40%"},attrs:{label:"供应商"},model:{value:t.form.supplier,callback:function(a){t.$set(t.form,"supplier",a)},expression:"form.supplier"}})],1),e("div",{staticClass:"flex-v-center"},[e("select-box",{staticClass:"mr-10",staticStyle:{width:"20%"},attrs:{list:t.roomList,label:"所属库房"},on:{change:function(a){t.getRoomId(t.form.roomNo)}},model:{value:t.form.roomNo,callback:function(a){t.$set(t.form,"roomNo",a)},expression:"form.roomNo"}}),e("select-box",{staticClass:"mr-10",staticStyle:{width:"20%"},attrs:{list:t.rackList,label:"所属库位"},on:{change:t.getRackId},model:{value:t.form.rackNo,callback:function(a){t.$set(t.form,"rackNo",a)},expression:"form.rackNo"}}),e("input-box",{staticClass:"mr-10",staticStyle:{width:"20%"},attrs:{label:"入库数量（正数）"},model:{value:t.form.quantity,callback:function(a){t.$set(t.form,"quantity",a)},expression:"form.quantity"}})],1),e("div"),e("div",{staticClass:"flex-v-center",staticStyle:{margin:"20px 0"}},[e("btn",{staticClass:"mr-20",attrs:{big:"",disabled:!t.canSubmit},on:{click:t.submit}},[t._v("提交")]),e("btn",{staticClass:"mr-20",attrs:{big:"",flat:"",bg:""},on:{click:t.cancel}},[t._v("取消")])],1)])])},r=[],i=(e("8383"),e("c839"),{name:"page-entryMaterial-form",data:function(){return{typeList:[{text:"原料库",value:1},{text:"成品库",value:2}],form:{materialGraphNo:"",orderNo:"",price:"",roomNo:"",supplier:"",rackNo:"",quantity:"",name:"",materialBatchNo:""},name:"",roomList:[],rackList:[],rackListnew:[]}},computed:{canSubmit:function(){var t=this.form;return t.materialGraphNo&&t.quantity&&t.supplier}},created:function(){var t=this.$route.params;this.form.materialGraphNo=t.graphNo,this.form.price=t.price,this.form.name=t.name,this.getRoomList()},methods:{getRackId:function(){},getRoomList:function(){var t=this;this.$http.get("/haolifa/store-room/listInfo?type=0").then(function(a){t.roomList=a.filter(function(t){return!t.isDelete}).map(function(t){return{value:t.roomNo,text:t.name}})})},getRoomId:function(t){var a=this;t&&this.$http.get("/haolifa/store-room/rack/list/".concat(t)).then(function(t){console.log(t),0!==t.length?a.rackList=t.map(function(t){return{value:t.rackNo,text:t.rackName}}):a.$toast("无对应库位")})},getInfo:function(t,a){var e=this;this.$http.get("/haolifa/material/getInfo/".concat(t)).then(function(o){for(var r in e.form)void 0!==e.form[r]&&(e.form.materialGraphNo=t),e.name=a}).catch(function(t){e.$toast(t.msg||t.message)})},cancel:function(){var t=this;this.$confirm({title:"您确定要离开此页面吗？",text:"您的表单将不会保存",color:"red",btns:["取消","离开"],yes:function(){t.$router.back()}})},submit:function(){var t=this,a=this.form;this.loading=!0;var e="put";delete a.name,this.$http[e]("/haolifa/store-room/entryOut/entryMaterial",a).then(function(a){t.loading=!1,t.$router.replace("/material")}).catch(function(a){t.loading=!1,t.$toast(a.msg||a.message)})}}}),s=i,l=(e("eac6"),e("c46c")),n=Object(l["a"])(s,o,r,!1,null,null,null);n.options.__file="entryMaterial.vue";a["default"]=n.exports},dadd:function(t,a,e){},eac6:function(t,a,e){"use strict";var o=e("dadd"),r=e.n(o);r.a}}]);
//# sourceMappingURL=entryMateriallist.08bb8194.js.map