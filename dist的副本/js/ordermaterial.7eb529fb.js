(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["ordermaterial"],{"003c":function(t,e,a){"use strict";var i=a("f577"),s=a.n(i);s.a},"289a":function(t,e,a){var i=a("6dae"),s=a("2de7");a("b560")("keys",function(){return function(t){return s(i(t))}})},"6a32":function(t,e,a){},"9b68":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"data-list relative f-12"},[a("transition",{attrs:{name:"slide-y"}},[t.list.length?a("table",{staticClass:"data-table"},[t._t("header",[a("tr",[a("th",[t._v("表头1")]),a("th",[t._v("表头2")])])]),t._l(t.list,function(e,i){return a("tr",{key:e.id},[t._t("item",[a("td",[t._v("数据1")]),a("td",[t._v("数据2")])],{item:e,index:(t.pageNum-1)*t.pageSize+i+1})],2)})],2):t._e()]),a("div",{staticClass:"flex-v-center",staticStyle:{"margin-top":"10px"}},[t.list.length?a("pagination",{staticClass:"mr-20",attrs:{page:t.pageNum,size:t.pageSize,total:t.total},on:{change:t.getList}}):t._e(),t.total?a("span",{staticClass:"f-12 c-6"},[t._v("共 "+t._s(t.total)+" 条数据")]):t._e()],1),t.list.length||t.loading?t._e():a("div",{staticStyle:{"margin-top":"100px"}},[a("no-data")],1)],1)},s=[],n=a("f360"),r=a.n(n),o=(a("7378"),a("e862")),l=a.n(o);function c(t){return"?"+l()(t).map(function(e){return encodeURIComponent(e)+"="+encodeURIComponent(t[e])}).join("&")}var d={name:"data-list",props:{method:{type:String,default:"get"},url:{type:String,default:""},pageSize:{type:Number,default:20},param:{type:Object,default:function(){}},pageNumStr:{type:String,default:"pageNum"}},data:function(){return{pageNum:1,total:0,loading:!1,list:[]}},watch:{url:function(){this.update()},mehtod:function(){this.update()},pageSize:function(){this.update()},param:function(){this.update()}},created:function(){this.pageNum=this.$route.query.page||1,this.getList(this.pageNum)},methods:{getList:function(t){var e=this,a=this.method,i=this.url,s=this.pageSize,n=this.param;if(i){this.loading=!0;var o={pageSize:s};o[this.pageNumStr]=t;var l=r()(o,n),d="get"===a?i+c(l):i;this.$http[a](d,l).then(function(t){e.list=t.list||[],e.pageNum=t.pageNum;var a=e.$route.query;a.page=t.pageNum,e.$router.push({path:e.$route.path,query:a}),e.total=t.total,e.loading=!1}).catch(function(t){e.loading=!1,e.$toast(t.message||t.msg||t)})}},update:function(t){this.getList(t?1:this.pageNum)}}},u=d,p=(a("c8ea"),a("c46c")),f=Object(p["a"])(u,i,s,!1,null,null,null);f.options.__file="index.vue";e["a"]=f.exports},b560:function(t,e,a){var i=a("3427"),s=a("7f8a"),n=a("f988");t.exports=function(t,e){var a=(s.Object||{})[t]||Object[t],r={};r[t]=e(a),i(i.S+i.F*n(function(){a(1)}),"Object",r)}},c3e3:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page-product-list flex-col"},[a("div",{staticClass:"flex-v-center tool-bar"},[a("span",{staticClass:"f-16",staticStyle:{"margin-left":"10px"}},[t._v(t._s(this.$route.meta.title))])]),a("div",{staticClass:"flex-item scroll-y"},[a("data-list",{ref:"list",attrs:{"page-size":10,param:t.filter,url:"/haolifa/order-product/pageInfo",method:"post"},scopedSlots:t._u([{key:"item",fn:function(e){var i=e.item,s=e.index;return[a("td",{staticClass:"c-a"},[t._v(t._s(s))]),a("td",[t._v(t._s(i.orderNo))]),a("td",[t._v(t._s(i.assemblyShop))]),a("td",[t._v(t._s(i.assemblyGroup))]),a("td",[t._v(t._s(i.createTime))]),a("td",[t._v(t._s(i.finishFeedbackTime))]),a("td",[i.orderContractUrl.match(".(pdf|jpe?g|png|bmp)$")?a("a",{attrs:{target:"_blank",href:i.orderContractUrl}},[t._v("预览")]):t._e(),i.orderContractUrl.match(".(pdf|jpe?g|png|bmp)$")?t._e():a("a",{attrs:{target:"_blank",href:"http://view.officeapps.live.com/op/view.aspx?src="+i.orderContractUrl}},[t._v("预览")])]),a("td",{staticClass:"t-right"},[a("a",{staticClass:"blue",attrs:{href:"javascript:;"},on:{click:function(e){t.getInfo(i.orderNo)}}},[t._v("详情")]),a("a",{staticClass:"blue",staticStyle:{"margin-right":"3px"},attrs:{href:"/haolifa/export/requisition/"+i.orderNo,download:""}},[t._v("下载领料单")])])]}}])},[a("tr",{attrs:{slot:"header"},slot:"header"},[a("th",{staticStyle:{width:"60px"}},[t._v("序号")]),a("th",[t._v("订单号")]),a("th",[t._v("装配车间")]),a("th",[t._v("装配小组")]),a("th",[t._v("创建时间")]),a("th",[t._v("完成时间")]),a("th",[t._v("预览")]),a("th",{staticClass:"t-right",staticStyle:{width:"80px"}},[t._v("操作")])])])],1),t.layer?a("layer",{attrs:{title:"详情",width:"70%"}},[a("div",{staticClass:"layer-text",staticStyle:{"padding-bottom":"50px"}},[a("div",{staticClass:"form-content metalwork-info"},[a("table",{staticClass:"f-14"},[a("tr",[a("td",{staticStyle:{width:"15%"}}),a("td",{staticStyle:{width:"15%"}}),a("td",{staticStyle:{width:"14%"}}),a("td",{staticStyle:{width:"14%"}}),a("td",{staticStyle:{width:"14%"}}),a("td",{staticStyle:{width:"14%"}}),a("td",{staticStyle:{width:"14%"}})]),a("tr",[a("th",[t._v("订单号")]),a("th",[t._v("零件图号")]),a("th",[t._v("零件名称")]),a("th",[t._v("价格")]),a("th",[t._v("是否可替换零件")]),a("th",[t._v("需要零件数量")]),a("th",[t._v("缺少零件数量")]),a("th",[t._v("状态")])]),t._l(t.infoList,function(e){return a("tr",{key:e.id},[a("td",[t._v(t._s(e.orderNo))]),a("td",[t._v(t._s(e.materialGraphNo))]),a("td",[t._v(t._s(e.materialName))]),a("td",[t._v(t._s(e.price))]),a("td",[t._v(t._s(0==e.isReplace?"否":"是"))]),a("td",[t._v(t._s(e.materialCount))]),a("td",[t._v(t._s(e.lackMaterialCount))]),a("td",[t._v(t._s(t.statusList[e.checkStatus].name))])])})],2)])]),a("div",{staticClass:"layer-btns"},[a("btn",{attrs:{flat:"",color:"#008eff"},on:{click:function(e){t.layer=!1}}},[t._v("关闭")])],1)]):t._e()],1)},s=[],n=a("9b68"),r={name:"page-product-list",components:{DataList:n["a"]},data:function(){return{filter:{orderNo:"",orderStatusList:[5,6,7,8,9,10,11,12,13]},loading:!1,infoList:{},statusList:[{status:1,name:"核料成功"},{status:2,name:"缺料,需要采购"},{status:3,name:"释放料"},{status:4,name:"领料完成"}],layer:!1}},methods:{getInfo:function(t){var e=this;this.layer=!0,this.$http.get("/haolifa/order-product/order-material?orderNo=".concat(t)).then(function(t){e.infoList=t}).catch(function(t){e.$toast(t.msg)})}}},o=r,l=(a("003c"),a("c46c")),c=Object(l["a"])(o,i,s,!1,null,null,null);c.options.__file="index.vue";e["default"]=c.exports},c8ea:function(t,e,a){"use strict";var i=a("6a32"),s=a.n(i);s.a},e862:function(t,e,a){t.exports=a("f521")},f521:function(t,e,a){a("289a"),t.exports=a("7f8a").Object.keys},f577:function(t,e,a){}}]);
//# sourceMappingURL=ordermaterial.7eb529fb.js.map