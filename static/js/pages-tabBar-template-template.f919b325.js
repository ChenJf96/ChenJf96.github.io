(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-tabBar-template-template"],{"0f55":function(t,e,a){"use strict";a.r(e);var n=a("74ae"),i=a("cf13");for(var s in i)"default"!==s&&function(t){a.d(e,t,function(){return i[t]})}(s);a("c058");var l=a("2877"),u=Object(l["a"])(i["default"],n["a"],n["b"],!1,null,"7d7ec901",null);e["default"]=u.exports},"408d":function(t,e,a){var n=a("a7a6");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("435346b8",n,!0,{sourceMap:!1,shadowMode:!1})},"74ae":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"uni-padding-wrap uni-common-pb"},[a("v-uni-view",{staticClass:"uni-header-logo"},[a("v-uni-image",{attrs:{src:"/static/templateIndex.png"}})],1),a("v-uni-view",{staticClass:"uni-hello-text uni-common-pb"},[t._v("以下是部分模板示例，更多模板见插件市场："),a("u-link",{attrs:{href:"https://ext.dcloud.net.cn",text:"https://ext.dcloud.net.cn",inWhiteList:!0}})],1),t._l(t.lists,function(e,n){return a("v-uni-view",{key:n,staticClass:"uni-card"},[a("v-uni-view",{staticClass:"uni-list"},[a("v-uni-view",{staticClass:"uni-list-cell uni-collapse"},[a("v-uni-view",{staticClass:"uni-list-cell-navigate",class:[e.open?"uni-active":"",e.pages?"uni-navigate-bottom":"uni-navigate-right"],attrs:{"hover-class":"uni-list-cell-hover"},on:{click:function(e){e=t.$handleEvent(e),t.triggerCollapse(n)}}},[t._v(t._s(e.name))]),e.pages?a("v-uni-view",{staticClass:"uni-list uni-collapse",class:e.open?"uni-active":""},t._l(e.pages,function(e,n){return a("v-uni-view",{key:n,staticClass:"uni-list-cell",attrs:{"hover-class":"uni-list-cell-hover"},on:{click:function(a){a=t.$handleEvent(a),t.goDetailPage(e)}}},[a("v-uni-view",{staticClass:"uni-list-cell-navigate uni-navigate-right"},[t._v(t._s(e.name?e.name:e))])],1)}),1):t._e()],1)],1)],1)}),a("v-uni-view",{staticClass:"uni-divider"},[a("v-uni-view",{staticClass:"uni-divider__content"},[t._v("更多模板见插件市场：https://ext.dcloud.net.cn")]),a("v-uni-view",{staticClass:"uni-divider__line"})],1)],2)},i=[];a.d(e,"a",function(){return n}),a.d(e,"b",function(){return i})},a7a6:function(t,e,a){e=t.exports=a("2350")(!1),e.push([t.i,"uni-page-body[data-v-7d7ec901]{height:auto;min-height:100%}.uni-card[data-v-7d7ec901]{-webkit-box-shadow:none;box-shadow:none}.uni-list[data-v-7d7ec901]:after{height:0}.uni-list[data-v-7d7ec901]:before{height:0}.uni-hello-text[data-v-7d7ec901]{word-break:break-all}",""])},c058:function(t,e,a){"use strict";var n=a("408d"),i=a.n(n);i.a},cf13:function(t,e,a){"use strict";a.r(e);var n=a("dab1"),i=a.n(n);for(var s in n)"default"!==s&&function(t){a.d(e,t,function(){return n[t]})}(s);e["default"]=i.a},dab1:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{lists:[{name:"多列选择 picker",url:"mpvue-picker"},{id:"navbar",name:"顶部原生导航标题栏",open:!1,pages:[{name:"透明渐变样式",url:"nav-transparent"},{name:"导航栏带自定义按钮",url:"nav-button"},{name:"导航栏带红点和角标",url:"nav-dot"},{name:"导航栏带城市选择",url:"nav-city-dropdown"},{name:"导航栏带搜索框",url:"nav-search-input"}]},{id:"tabbar",name:"顶部选项卡",url:"tabbar"},{name:"三行列表",url:"list-triplex-row"},{name:"图文列表",url:"media-list"},{name:"商品列表",url:"product-list"},{name:"懒加载 lazy-load",open:!1,pages:[{name:"默认",url:"lazy-load"},{name:"自定义",url:"lazy-load-custom"}]},{name:"时间轴 timeline",url:"timeline"},{name:"uCharts 图表",url:"ucharts"},{name:"手势图案锁屏",url:"gesture-lock"},{name:"列表到详情示例",url:"list2detail-list"},{id:"uparse",name:"富文本渲染",open:!1,pages:[{name:"uParse 富文本渲染示例 - markdown",url:"uparse-md"},{name:"uParse 富文本渲染示例 - html",url:"uparse-html"}]},{name:"侧边分类导航",url:"left-category"},{name:"评论列表",url:"comments"},{name:"滚动公告",url:"scrollmsg"},{name:"表单验证",url:"datachecker"}]}},onLoad:function(){},onReady:function(){},onShareAppMessage:function(){return{title:"欢迎体验uni-app",path:"/pages/tabBar/template/template"}},onNavigationBarButtonTap:function(t){uni.navigateTo({url:"/pages/about/about"})},methods:{triggerCollapse:function(t){if(this.lists[t].pages)for(var e=0;e<this.lists.length;++e)this.lists[e].open=t===e&&!this.lists[t].open;else this.goDetailPage(this.lists[t].url)},goDetailPage:function(t){var e=t.url?t.url:t,a=~e.indexOf("platform")?e:"/pages/template/"+e+"/"+e;return uni.navigateTo({url:a}),!1}}};e.default=n}}]);