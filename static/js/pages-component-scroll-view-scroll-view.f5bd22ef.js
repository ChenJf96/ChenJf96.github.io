(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-component-scroll-view-scroll-view"],{"0f03":function(t,i,e){"use strict";var n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",[e("page-head",{attrs:{title:"scroll-view,区域滚动视图"}}),e("v-uni-view",{staticClass:"uni-padding-wrap uni-common-mt"},[e("v-uni-view",{staticClass:"uni-title uni-common-mt"},[t._v("Vertical Scroll"),e("v-uni-text",[t._v("\\n纵向滚动")])],1),e("v-uni-view",[e("v-uni-scroll-view",{staticClass:"scroll-Y",attrs:{"scroll-top":t.scrollTop,"scroll-y":"true"},on:{scrolltoupper:function(i){i=t.$handleEvent(i),t.upper(i)},scrolltolower:function(i){i=t.$handleEvent(i),t.lower(i)},scroll:function(i){i=t.$handleEvent(i),t.scroll(i)}}},[e("v-uni-view",{staticClass:"scroll-view-item uni-bg-red",attrs:{id:"demo1"}},[t._v("A")]),e("v-uni-view",{staticClass:"scroll-view-item uni-bg-green",attrs:{id:"demo2"}},[t._v("B")]),e("v-uni-view",{staticClass:"scroll-view-item uni-bg-blue",attrs:{id:"demo3"}},[t._v("C")])],1)],1),e("v-uni-view",{staticClass:"uni-link uni-center uni-common-mt",on:{click:function(i){i=t.$handleEvent(i),t.goTop(i)}}},[t._v("点击这里返回顶部")]),e("v-uni-view",{staticClass:"uni-title uni-common-mt"},[t._v("Horizontal Scroll"),e("v-uni-text",[t._v("\\n横向滚动")])],1),e("v-uni-view",[e("v-uni-scroll-view",{staticClass:"scroll-view_H",attrs:{"scroll-x":"true","scroll-left":"120"},on:{scroll:function(i){i=t.$handleEvent(i),t.scroll(i)}}},[e("v-uni-view",{staticClass:"scroll-view-item_H uni-bg-red",attrs:{id:"demo1"}},[t._v("A")]),e("v-uni-view",{staticClass:"scroll-view-item_H uni-bg-green",attrs:{id:"demo2"}},[t._v("B")]),e("v-uni-view",{staticClass:"scroll-view-item_H uni-bg-blue",attrs:{id:"demo3"}},[t._v("C")])],1)],1)],1)],1)},l=[];e.d(i,"a",function(){return n}),e.d(i,"b",function(){return l})},2749:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n={data:function(){return{scrollTop:0,old:{scrollTop:0}}},methods:{upper:function(t){console.log(t)},lower:function(t){console.log(t)},scroll:function(t){console.log(t),this.old.scrollTop=t.detail.scrollTop},goTop:function(t){this.scrollTop=this.old.scrollTop,this.$nextTick(function(){this.scrollTop=0}),uni.showToast({icon:"none",title:"纵向滚动 scrollTop 值已被修改为 0"})}}};i.default=n},"2c31":function(t,i,e){"use strict";e.r(i);var n=e("0f03"),l=e("8c84");for(var o in l)"default"!==o&&function(t){e.d(i,t,function(){return l[t]})}(o);e("d623");var s=e("2877"),c=Object(s["a"])(l["default"],n["a"],n["b"],!1,null,"7c12875e",null);i["default"]=c.exports},"32c9":function(t,i,e){i=t.exports=e("2350")(!1),i.push([t.i,".scroll-Y[data-v-7c12875e]{height:%?300?%}.scroll-view_H[data-v-7c12875e]{white-space:nowrap;width:100%}.scroll-view-item[data-v-7c12875e]{height:%?300?%;line-height:%?300?%;text-align:center;font-size:%?36?%}.scroll-view-item_H[data-v-7c12875e]{display:inline-block;width:100%;height:%?300?%;line-height:%?300?%;text-align:center;font-size:%?36?%}",""])},"8c84":function(t,i,e){"use strict";e.r(i);var n=e("2749"),l=e.n(n);for(var o in n)"default"!==o&&function(t){e.d(i,t,function(){return n[t]})}(o);i["default"]=l.a},ba16d:function(t,i,e){var n=e("32c9");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var l=e("4f06").default;l("72560852",n,!0,{sourceMap:!1,shadowMode:!1})},d623:function(t,i,e){"use strict";var n=e("ba16d"),l=e.n(n);l.a}}]);