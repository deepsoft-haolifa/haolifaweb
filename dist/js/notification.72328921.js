(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["notification"],{"44cc":function(t,e,i){},"685f":function(t,e,i){},7991:function(t,e,i){"use strict";var a=i("44cc"),n=i.n(a);n.a},"9b68":function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"data-list relative f-12"},[i("transition",{attrs:{name:"slide-y"}},[t.list.length?i("table",{staticClass:"data-table"},[t._t("header",[i("tr",[i("th",[t._v("表头1")]),i("th",[t._v("表头2")])])]),t._l(t.list,function(e,a){return i("tr",{key:e.id},[t._t("item",[i("td",[t._v("数据1")]),i("td",[t._v("数据2")])],{item:e,index:(t.pageNum-1)*t.pageSize+a+1})],2)})],2):t._e()]),i("div",{staticClass:"flex-v-center",staticStyle:{"margin-top":"10px"}},[t.list.length?i("pagination",{staticClass:"mr-20",attrs:{page:t.pageNum,size:t.pageSize,total:t.total},on:{change:t.getList}}):t._e(),t.total?i("span",{staticClass:"f-12 c-6"},[t._v("共 "+t._s(t.total)+" 条数据")]):t._e()],1),t.list.length||t.loading?t._e():i("div",{staticStyle:{"margin-top":"100px"}},[i("no-data")],1)],1)},n=[];i("20a2"),i("84fb"),i("25d7"),i("dc2a");function s(t){return"?"+Object.keys(t).map(function(e){return encodeURIComponent(e)+"="+encodeURIComponent(t[e])}).join("&")}var o={name:"data-list",props:{method:{type:String,default:"get"},url:{type:String,default:""},pageSize:{type:Number,default:20},param:{type:Object,default:function(){}},pageNumStr:{type:String,default:"pageNum"}},data:function(){return{pageNum:1,total:0,loading:!1,list:[]}},watch:{url:function(){this.update()},mehtod:function(){this.update()},pageSize:function(){this.update()},param:function(){this.update()}},created:function(){this.pageNum=this.$route.query.page||1,this.getList(this.pageNum)},methods:{getList:function(t){var e=this,i=this.method,a=this.url,n=this.pageSize,o=this.param;if(a){this.loading=!0;var l={pageSize:n};l[this.pageNumStr]=t;var c=Object.assign(l,o),r="get"===i?a+s(c):a;this.$http[i](r,c).then(function(t){e.list=t.list||[],e.pageNum=t.pageNum;var i=e.$route.query;i.page=t.pageNum,e.$router.push({path:e.$route.path,query:i}),e.total=t.total,e.loading=!1}).catch(function(t){e.loading=!1,e.$toast(t.message||t.msg||t)})}},update:function(t){this.getList(t?1:this.pageNum)}}},l=o,c=(i("c8ea"),i("048f")),r=Object(c["a"])(l,a,n,!1,null,null,null);r.options.__file="index.vue";e["a"]=r.exports},bd1a:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"page-notification"},[i("data-list",{ref:"list",attrs:{url:"/haolifa/message/notice"},scopedSlots:t._u([{key:"item",fn:function(e){var a=e.item,n=e.index;return[i("td",[t._v(t._s(n))]),i("td",[t._v(t._s(a.title||"无标题"))]),i("td",[t._v(t._s(a.content||"无内容"))]),i("td",[t._v(t._s(a.showTime))]),i("td",{staticClass:"t-right"},[i("icon-btn",{attrs:{small:""},on:{click:function(e){t.edit(a)}}},[t._v("edit")]),i("icon-btn",{attrs:{small:""},on:{click:function(e){t.remove(a)}}},[t._v("delete")])],1)]}}])},[i("tr",{attrs:{slot:"header"},slot:"header"},[i("th",{staticStyle:{width:"60px"}},[t._v("序号")]),i("th",[t._v("标题")]),i("th",[t._v("时间")]),i("th",[t._v("内容")]),i("th",{staticClass:"t-right",staticStyle:{width:"80px"}},[t._v("操作")])])]),t.layer?i("layer",{attrs:{title:t.form.id?"编辑通知":"新增通知",width:"450px"}},[i("div",{staticClass:"layer-text",staticStyle:{"padding-bottom":"50px"}},[i("input-box",{attrs:{label:"标题"},model:{value:t.form.title,callback:function(e){t.$set(t.form,"title",e)},expression:"form.title"}}),i("date-picker",{attrs:{label:"显示时间"},model:{value:t.form.showTime,callback:function(e){t.$set(t.form,"showTime",e)},expression:"form.showTime"}}),i("input-box",{attrs:{"multi-line":"",label:"内容"},model:{value:t.form.content,callback:function(e){t.$set(t.form,"content",e)},expression:"form.content"}})],1),i("div",{staticClass:"layer-btns"},[i("btn",{attrs:{flat:""},on:{click:t.cancel}},[t._v("取消")]),i("btn",{attrs:{flat:"",color:"#008eff"},on:{click:t.submit}},[t._v("保存")])],1)]):t._e()],1)},n=[],s=(i("cf54"),i("9b68")),o={name:"page-notification",components:{DataList:s["a"]},data:function(){return{layer:!1,form:{id:"",title:"",content:""}}},methods:{submit:function(){var t=this,e=this.form,i=e.id,a=e.title,n=e.content,s=e.showTime;a&&n&&s?this.$http[i?"put":"post"]("/haolifa/message",{id:i,title:a,content:n,type:2,showTime:s+" 00:00:00"}).then(function(e){t.$refs.list.update()}):this.$toast("请完整填写")},cancel:function(){this.layer=!1,this.form={id:"",title:"",content:""}},edit:function(t){for(var e in this.form)this.form[e]=t[e];this.layer=!0},remove:function(t){var e=this;this.$confirm({title:"删除确认",text:"您确定要删除以下通知吗？<br>\n               <b>".concat(t.name||"无标题",'</b><br>\n               <span class="f-12">').concat(t.content,"</span>"),color:"red",btns:["取消","删除"],yes:function(){e.$http.delete("/haolifa/message?id=".concat(t.id)).then(function(t){e.$toast("删除成功"),e.$refs.list.update()}).catch(function(t){e.$toast(t.msg||t.message)})}})}}},l=o,c=(i("7991"),i("048f")),r=Object(c["a"])(l,a,n,!1,null,null,null);r.options.__file="index.vue";e["default"]=r.exports},c8ea:function(t,e,i){"use strict";var a=i("685f"),n=i.n(a);n.a}}]);
//# sourceMappingURL=notification.72328921.js.map