(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["user"],{"0494":function(t,e,a){"use strict";var i=a("08c7"),s=a.n(i);s.a},"08c7":function(t,e,a){},3226:function(t,e,a){},"4ee3":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page-user"},[a("div",{staticClass:"flex-v-center tool-bar"},[t._m(0),a("div",{staticClass:"flex-item"}),a("router-link",{attrs:{to:"/user/add"}},[a("btn",{staticClass:"b",attrs:{flat:"",color:"#008eff"}},[t._v("新增用户")])],1)],1),a("div",{staticClass:"flex-item scroll-y"},[a("data-list",{ref:"datalist",staticClass:"f-14",attrs:{url:"/haolifa/user",method:"get"},scopedSlots:t._u([{key:"item",fn:function(e){var i=e.item,s=e.index;return[a("td",[t._v(t._s(s))]),a("td",[t._v(t._s(i.realName))]),a("td",[t._v(t._s(i.username))]),a("td",[t._v(t._s(i.roles.map(function(t){return t.description}).toString()||"-"))]),a("td",{staticClass:"t-right"},[a("icon-btn",{attrs:{small:""},on:{click:function(e){t.$router.push("/user/edit?id="+i.id)}}},[t._v("edit")]),a("icon-btn",{attrs:{small:""},on:{click:function(e){t.remove(i)}}},[t._v("delete")])],1)]}}])},[a("tr",{attrs:{slot:"header"},slot:"header"},[a("th",{staticStyle:{width:"60px"}},[t._v("序号")]),a("th",[t._v("姓名")]),a("th",[t._v("用户名")]),a("th",[t._v("角色")]),a("th",{staticClass:"t-right",staticStyle:{width:"100px"}},[t._v("操作")])])])],1)])},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"flex-v-center search-bar",staticStyle:{"margin-right":"20px"}},[a("i",{staticClass:"icon f-20 c-8"},[t._v("search")]),a("input",{staticClass:"flex-item",staticStyle:{width:"200px"},attrs:{type:"text",placeholder:"姓名"}})])}],n=a("9b68"),r={name:"page-user",components:{DataList:n["a"]},data:function(){return{}},methods:{remove:function(t){var e=this,a=t.id;this.$confirm({title:"删除确认",text:"您确定要删除以下人员吗？<br><b>".concat(t.realName,"</b>"),color:"red",btns:["取消","删除"],yes:function(){e.$http.delete("haolifa/user/".concat(a)).then(function(t){e.$toast("删除成功"),e.$refs.datalist.update()}).catch(function(t){e.$toast(t.message||t.msg)})}})}}},l=r,o=(a("0494"),a("2877")),c=Object(o["a"])(l,i,s,!1,null,null,null);c.options.__file="index.vue";e["default"]=c.exports},"9b68":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"data-list relative f-12"},[a("transition",{attrs:{name:"slide-y"}},[t.list.length?a("table",{staticClass:"data-table"},[t._t("header",[a("tr",[a("th",[t._v("表头1")]),a("th",[t._v("表头2")])])]),t._l(t.list,function(e,i){return a("tr",{key:e.id},[t._t("item",[a("td",[t._v("数据1")]),a("td",[t._v("数据2")])],{item:e,index:(t.pageNum-1)*t.pageSize+i+1})],2)})],2):t._e()]),a("div",{staticClass:"flex-v-center",staticStyle:{"margin-top":"10px"}},[t.list.length?a("pagination",{staticClass:"mr-20",attrs:{page:t.pageNum,size:t.pageSize,total:t.total},on:{change:t.getList}}):t._e(),t.total?a("span",{staticClass:"f-12 c-6"},[t._v("共 "+t._s(t.total)+" 条数据")]):t._e()],1),t.list.length||t.loading?t._e():a("div",{staticStyle:{"margin-top":"100px"}},[a("no-data")],1)],1)},s=[];a("f751"),a("c5f6"),a("ac6a"),a("456d");function n(t){return"?"+Object.keys(t).map(function(e){return encodeURIComponent(e)+"="+encodeURIComponent(t[e])}).join("&")}var r={name:"data-list",props:{method:{type:String,default:"get"},url:{type:String,default:""},pageSize:{type:Number,default:20},param:{type:Object,default:function(){}},pageNumStr:{type:String,default:"pageNum"}},data:function(){return{pageNum:1,total:0,loading:!1,list:[]}},watch:{url:function(){this.update()},mehtod:function(){this.update()},pageSize:function(){this.update()},param:function(){this.update()}},created:function(){this.pageNum=this.$route.query.page||1,this.getList(this.pageNum)},methods:{getList:function(t){var e=this,a=this.method,i=this.url,s=this.pageSize,r=this.param;if(i){this.loading=!0;var l={pageSize:s};l[this.pageNumStr]=t;var o=Object.assign(l,r),c="get"===a?i+n(o):i;this.$http[a](c,o).then(function(t){e.list=t.list||[],e.pageNum=t.pageNum;var a=e.$route.query;a.page=t.pageNum,e.$router.push({path:e.$route.path,query:a}),e.total=t.total,e.loading=!1}).catch(function(t){e.loading=!1,e.$toast(t.message||t.msg||t)})}},update:function(t){this.getList(t?1:this.pageNum)}}},l=r,o=(a("c8ea"),a("2877")),c=Object(o["a"])(l,i,s,!1,null,null,null);c.options.__file="index.vue";e["a"]=c.exports},c8ea:function(t,e,a){"use strict";var i=a("3226"),s=a.n(i);s.a}}]);
//# sourceMappingURL=user.8b2bc475.js.map