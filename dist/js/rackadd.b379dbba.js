(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["rackadd"],{"239d":function(t,o,a){},b0a7:function(t,o,a){"use strict";var e=a("239d"),r=a.n(e);r.a},dc0a:function(t,o,a){"use strict";a.r(o);var e=function(){var t=this,o=t.$createElement,a=t._self._c||o;return a("div",{staticClass:"page-rack-add"},[a("div",{staticClass:"form-content"},[a("div",{staticClass:"title b f-18 mb-10"},[t._v(t._s(t.form.id?"编辑":"新增")+"库位")]),a("input-box",{attrs:{label:"库位编号"},model:{value:t.form.rackNo,callback:function(o){t.$set(t.form,"rackNo",o)},expression:"form.rackNo"}}),a("input-box",{attrs:{label:"库位名称"},model:{value:t.form.rackName,callback:function(o){t.$set(t.form,"rackName",o)},expression:"form.rackName"}}),a("select-box",{attrs:{list:t.roomList,label:"所属库房"},model:{value:t.form.storeRoomNo,callback:function(o){t.$set(t.form,"storeRoomNo",o)},expression:"form.storeRoomNo"}}),a("input-box",{attrs:{label:"备注","multi-line":""},model:{value:t.form.remark,callback:function(o){t.$set(t.form,"remark",o)},expression:"form.remark"}}),a("div",{staticClass:"flex-v-center",staticStyle:{margin:"20px 0"}},[a("btn",{staticClass:"mr-20",attrs:{big:""},on:{click:t.submit}},[t._v("提交")]),a("btn",{staticClass:"mr-20",attrs:{big:"",flat:"",bg:""},on:{click:t.cancel}},[t._v("取消")])],1)],1)])},r=[],i=(a("aba3"),a("cf54"),{name:"page-rack-add",data:function(){return{statusList:[{value:0,text:"正常"},{value:1,text:"删除"}],roomList:[],form:{id:"",remark:"",rackNo:"",rackName:"",storeRoomNo:""}}},computed:{canSubmit:function(){var t=this.form;return t.name&&t.roomNo&&t.address}},created:function(){var t=this.$route.query.id;void 0!==t&&"rack-edit"===this.$route.name&&this.getInfo(t),this.getRoomList()},methods:{getRoomList:function(){var t=this;this.$http.get("/haolifa/store-room/listInfo?type=0").then(function(o){t.roomList=o.filter(function(t){return!t.isDelete}).map(function(t){return{value:t.roomNo,text:t.name}})})},getInfo:function(t){var o=this;this.$http.delete("/haolifa/store-room/rack/getInfo/".concat(t)).then(function(t){for(var a in o.form)void 0!==o.form[a]&&(o.form[a]=t[a])}).catch(function(t){o.$toast(t.msg||t.message)})},cancel:function(){var t=this;this.$confirm({title:"您确定要离开此页面吗？",text:"您的表单将不会保存",color:"red",btns:["取消","离开"],yes:function(){t.$router.back()}})},submit:function(){var t=this,o=this.form;this.loading=!0;var a=o.id?"put":"post";this.$http[a]("/haolifa/store-room/rack/".concat(o.id?"update":"save"),o).then(function(o){t.loading=!1,t.$router.replace("/rack")}).catch(function(o){t.loading=!1,t.$toast(o.msg||o.message)})}}}),s=i,n=(a("b0a7"),a("048f")),c=Object(n["a"])(s,e,r,!1,null,null,null);c.options.__file="add.vue";o["default"]=c.exports}}]);
//# sourceMappingURL=rackadd.b379dbba.js.map