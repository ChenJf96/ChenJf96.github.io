(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-template-lazy-load-custom-lazy-load-custom"],{"452f":function(t,i,e){i=t.exports=e("2350")(!1),i.push([t.i,".placeholder[data-v-ddbd47e4]{opacity:1;-webkit-transition:opacity .4s linear;-o-transition:opacity .4s linear;transition:opacity .4s linear}.placeholder.loaded[data-v-ddbd47e4]{opacity:0}.uni-media-list-logo[data-v-ddbd47e4]{position:relative}.uni-media-list-logo .image[data-v-ddbd47e4]{position:absolute}",""])},"6dce":function(t,i,e){"use strict";var a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",[e("v-uni-view",{staticClass:"uni-padding-wrap"},[e("v-uni-view",{staticClass:"uni-helllo-text",staticStyle:{padding:"30upx 0"}},[t._v("延迟加载的理念：页面初始化时，暂不加载处于屏幕可见区域之外的图片。该方案会有如下几大好处："),e("v-uni-text",[t._v("\\n加快页面渲染速度")]),e("v-uni-text",[t._v("\\n提升页面滚动性能")]),e("v-uni-text",[t._v("\\n默认不下载屏幕外的图片，减少网络流量")])],1)],1),e("v-uni-view",{staticClass:"uni-list"},t._l(t.list,function(i,a){return e("v-uni-view",{key:a,staticClass:"uni-list-cell",attrs:{"hover-class":"uni-list-cell-hover"}},[e("v-uni-view",{staticClass:"uni-media-list"},[e("v-uni-view",{staticClass:"uni-media-list-logo"},[e("v-uni-image",{staticClass:"image",class:{lazy:!i.show},attrs:{"data-index":a,src:i.show?i.src:""},on:{load:function(i){i=t.$handleEvent(i),t.imageLoad(i)}}}),e("v-uni-image",{staticClass:"image placeholder",class:{loaded:i.loaded},attrs:{src:t.placeholderSrc}})],1),e("v-uni-view",{staticClass:"uni-media-list-body"},[e("v-uni-view",{staticClass:"uni-media-list-text-top"},[t._v("主标题")]),e("v-uni-view",{staticClass:"uni-media-list-text-bottom uni-ellipsis"},[t._v("列表二级标题")])],1)],1)],1)}),1)],1)},n=[];e.d(i,"a",function(){return a}),e.d(i,"b",function(){return n})},"8c5b":function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a={data:function(){for(var t=["shuijiao","muwu","cbd"],i=[],e=0;e<20;e++)i.push({src:"https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/".concat(t[e%3],".jpg"),show:!1,loaded:!1});return{windowHeight:0,placeholderSrc:"../../../static/60x60.png",list:i,show:!1}},methods:{load:function(){var t=this;uni.createSelectorQuery().selectAll(".lazy").boundingClientRect(function(i){i.forEach(function(i,e){i.top<=t.windowHeight&&(t.list[i.dataset.index].show=!0)})}).exec()},imageLoad:function(t){this.list[t.target.dataset.index].loaded=!0}},onLoad:function(){this.windowHeight=uni.getSystemInfoSync().windowHeight},onShow:function(){var t=this;this.show||(this.show=!0,setTimeout(function(){t.load()},100))},onPageScroll:function(){this.load()}};i.default=a},ddcc:function(t,i,e){var a=e("452f");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=e("4f06").default;n("f223869e",a,!0,{sourceMap:!1,shadowMode:!1})},dfa0:function(t,i,e){"use strict";e.r(i);var a=e("6dce"),n=e("e210");for(var s in n)"default"!==s&&function(t){e.d(i,t,function(){return n[t]})}(s);e("ef95");var o=e("2877"),l=Object(o["a"])(n["default"],a["a"],a["b"],!1,null,"ddbd47e4",null);i["default"]=l.exports},e210:function(t,i,e){"use strict";e.r(i);var a=e("8c5b"),n=e.n(a);for(var s in a)"default"!==s&&function(t){e.d(i,t,function(){return a[t]})}(s);i["default"]=n.a},ef95:function(t,i,e){"use strict";var a=e("ddcc"),n=e.n(a);n.a}}]);