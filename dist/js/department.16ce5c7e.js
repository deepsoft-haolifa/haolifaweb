(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["department"],{"2c83":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page-department flex-col"},[a("div",{staticClass:"flex-v-center tool-bar"},[a("div",{staticClass:"flex-item"}),a("btn",{staticClass:"b",attrs:{flat:"",color:"#008eff"},on:{click:function(e){t.layer=!0}}},[t._v("新增部门")])],1),a("div",{staticClass:"flex-item scroll-y"},[a("table",{staticClass:"data-table"},[t._m(0),t._l(t.list,function(e,i){return a("tr",{key:e.id},[a("td",[t._v(t._s(i))]),a("td",[t._v(t._s(e.deptName))]),a("td",[t._v(t._s(e.description||"-"))]),a("td",{staticClass:"t-right"},[a("icon-btn",{attrs:{small:""},on:{click:function(a){t.edit(e)}}},[t._v("edit")]),a("icon-btn",{attrs:{small:""},on:{click:function(a){t.remove(e)}}},[t._v("delete")])],1)])})],2)]),t.layer?a("layer",{attrs:{title:t.form.id?"编辑部门":"新增部门",width:"400px"}},[a("div",{staticClass:"layer-text"},[a("input-box",{attrs:{label:"部门名称"},model:{value:t.form.deptName,callback:function(e){t.$set(t.form,"deptName",e)},expression:"form.deptName"}}),a("input-box",{attrs:{label:"备注","multi-line":""},model:{value:t.form.description,callback:function(e){t.$set(t.form,"description",e)},expression:"form.description"}})],1),a("div",{staticClass:"layer-btns"},[a("btn",{attrs:{flat:""},on:{click:t.cancel}},[t._v("取消")]),a("btn",{attrs:{flat:"",color:"#008eff"},on:{click:t.submit}},[t._v("保存")])],1)]):t._e()],1)},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("tr",[a("th",{staticStyle:{width:"60px"}},[t._v("序号")]),a("th",[t._v("部门名称")]),a("th",[t._v("备注")]),a("td",{staticStyle:{width:"100px","text-align":"right"}},[t._v("操作")])])}],s=a("9b68"),o={name:"page-department",components:{DataList:s["a"]},data:function(){return{layer:!1,list:[],form:{id:"",deptName:"",description:"",pid:0}}},created:function(){this.getList()},methods:{getList:function(){var t=this;this.$http.get("/haolifa/dept/list").then(function(e){t.list=e}).catch(function(e){t.$toast(e.message||e.msg)})},edit:function(t){for(var e in this.form)this.form[e]=t[e];this.layer=!0},remove:function(t){var e=this,a=t.id;this.$confirm({title:"删除确认",text:"您确定要删除以下部门吗？<br><b>".concat(t.deptName,"</b>"),color:"red",btns:["取消","删除"],yes:function(){e.$http({method:"delete",url:"haolifa/dept",data:a,headers:{"Content-Type":"application/json"}}).then(function(t){e.$toast("删除成功"),e.getList()}).catch(function(t){e.$toast(t.message||t.msg)})}})},cancel:function(){this.form.id=this.form.deptName=this.form.description="",this.layer=!1},submit:function(){var t=this,e=this.form,a=""===e.id?"post":"put";this.$http[a]("/haolifa/dept",e).then(function(e){t.getList(),t.$toast("保存成功"),t.cancel()}).catch(function(e){t.$toast(e.message||e.msg)})}}},l=o,c=(a("36e0"),a("048f")),r=Object(c["a"])(l,i,n,!1,null,null,null);r.options.__file="index.vue";e["default"]=r.exports},"36e0":function(t,e,a){"use strict";var i=a("afb0"),n=a.n(i);n.a},"685f":function(t,e,a){},"9b68":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"data-list relative f-12"},[a("transition",{attrs:{name:"slide-y"}},[t.list.length?a("table",{staticClass:"data-table"},[t._t("header",[a("tr",[a("th",[t._v("表头1")]),a("th",[t._v("表头2")])])]),t._l(t.list,function(e,i){return a("tr",{key:e.id},[t._t("item",[a("td",[t._v("数据1")]),a("td",[t._v("数据2")])],{item:e,index:(t.pageNum-1)*t.pageSize+i+1})],2)})],2):t._e()]),a("div",{staticClass:"flex-v-center",staticStyle:{"margin-top":"10px"}},[t.list.length?a("pagination",{staticClass:"mr-20",attrs:{page:t.pageNum,size:t.pageSize,total:t.total},on:{change:t.getList}}):t._e(),t.total?a("span",{staticClass:"f-12 c-6"},[t._v("共 "+t._s(t.total)+" 条数据")]):t._e()],1),t.list.length||t.loading?t._e():a("div",{staticStyle:{"margin-top":"100px"}},[a("no-data")],1)],1)},n=[];a("20a2"),a("84fb"),a("25d7"),a("dc2a");function s(t){return"?"+Object.keys(t).map(function(e){return encodeURIComponent(e)+"="+encodeURIComponent(t[e])}).join("&")}var o={name:"data-list",props:{method:{type:String,default:"get"},url:{type:String,default:""},pageSize:{type:Number,default:20},param:{type:Object,default:function(){}},pageNumStr:{type:String,default:"pageNum"}},data:function(){return{pageNum:1,total:0,loading:!1,list:[]}},watch:{url:function(){this.update()},mehtod:function(){this.update()},pageSize:function(){this.update()},param:function(){this.update()}},created:function(){this.pageNum=this.$route.query.page||1,this.getList(this.pageNum)},methods:{getList:function(t){var e=this,a=this.method,i=this.url,n=this.pageSize,o=this.param;if(i){this.loading=!0;var l={pageSize:n};l[this.pageNumStr]=t;var c=Object.assign(l,o),r="get"===a?i+s(c):i;this.$http[a](r,c).then(function(t){e.list=t.list||[],e.pageNum=t.pageNum;var a=e.$route.query;a.page=t.pageNum,e.$router.push({path:e.$route.path,query:a}),e.total=t.total,e.loading=!1}).catch(function(t){e.loading=!1,e.$toast(t.message||t.msg||t)})}},update:function(t){this.getList(t?1:this.pageNum)}}},l=o,c=(a("c8ea"),a("048f")),r=Object(c["a"])(l,i,n,!1,null,null,null);r.options.__file="index.vue";e["a"]=r.exports},afb0:function(t,e,a){},c8ea:function(t,e,a){"use strict";var i=a("685f"),n=a.n(i);n.a}}]);
//# sourceMappingURL=department.16ce5c7e.js.map