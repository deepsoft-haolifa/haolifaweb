(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["supplierequipmentadd"],{2773:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page-product-add abs scroll-y"},[a("div",{staticClass:"form-content"},[a("div",{staticClass:"title b f-18"},[t._v(t._s(t.form.id?"编辑":"新增")+"供应商设备")]),a("div",{staticClass:"flex-v-center"},[a("input-box",{staticClass:"flex-item mr-10",attrs:{label:"设备名称"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}}),a("input-box",{staticClass:"flex-item mr-10",attrs:{label:"设备数量"},model:{value:t.form.number,callback:function(e){t.$set(t.form,"number",e)},expression:"form.number"}})],1),a("div",{staticClass:"flex-v-center"},[a("input-box",{staticClass:"flex-item mr-10",attrs:{label:"生产厂家"},model:{value:t.form.productFactory,callback:function(e){t.$set(t.form,"productFactory",e)},expression:"form.productFactory"}}),a("input-box",{staticClass:"flex-item mr-10",attrs:{label:"服役年限"},model:{value:t.form.servicedYears,callback:function(e){t.$set(t.form,"servicedYears",e)},expression:"form.servicedYears"}})],1),a("div",{staticClass:"flex-v-center"},[a("select-box",{staticStyle:{width:"25%"},attrs:{list:t.typeList,label:"设备类型"},model:{value:t.form.type,callback:function(e){t.$set(t.form,"type",e)},expression:"form.type"}}),a("input-box",{staticClass:"flex-item ml-10 mr-10",attrs:{label:"型号规格"},model:{value:t.form.specification,callback:function(e){t.$set(t.form,"specification",e)},expression:"form.specification"}}),a("input-box",{staticClass:"flex-item ml-10 mr-10",attrs:{label:"供应商编号"},model:{value:t.form.supplierNo,callback:function(e){t.$set(t.form,"supplierNo",e)},expression:"form.supplierNo"}})],1),a("div",{staticClass:"flex-v-center",staticStyle:{margin:"20px 0"}},[a("btn",{staticClass:"mr-20",attrs:{big:"",disabled:!t.canSubmit},on:{click:t.submit}},[t._v("提交")]),a("btn",{staticClass:"mr-20",attrs:{big:"",flat:"",bg:""},on:{click:t.cancel}},[t._v("取消")])],1)])])},s=[],o=(a("aba3"),a("cf54"),{name:"page-product-add",data:function(){return{form:{id:"",name:"",number:"",productFactory:"",servicedYears:"",specification:"",type:"",supplierNo:""},typeList:[{text:"制造设备",value:0},{text:"检测设备",value:1}]}},computed:{canSubmit:function(){var t=this.form;return t.name&&t.number&&t.specification}},created:function(){var t=this.$route.query.id;void 0!==t&&"supplierequipment-edit"===this.$route.name&&this.getInfo(t)},methods:{getInfo:function(t){var e=this;this.$http.get("/haolifa/equipment/getInfo/".concat(t)).then(function(t){for(var a in e.form)void 0!==e.form[a]&&(e.form[a]=t[a])}).catch(function(t){e.$toast(t.msg||t.message)})},cancel:function(){var t=this;this.$confirm({title:"您确定要离开此页面吗？",text:"您的表单将不会保存",color:"red",btns:["取消","离开"],yes:function(){t.$router.back()}})},submit:function(){var t=this,e=this.form;this.loading=!0,this.$http.post("/haolifa/equipment/supplier-".concat(e.id?"update":"save"),e).then(function(e){t.loading=!1,t.$router.replace("/supplierequipment")}).catch(function(e){t.loading=!1,t.$toast(e.msg||e.message)})}}}),r=o,n=(a("ae7b"),a("048f")),c=Object(n["a"])(r,i,s,!1,null,null,null);c.options.__file="add.vue";e["default"]=c.exports},5465:function(t,e,a){},ae7b:function(t,e,a){"use strict";var i=a("5465"),s=a.n(i);s.a}}]);
//# sourceMappingURL=supplierequipmentadd.f2453409.js.map