(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-template-left-category-left-category"],{"18e9":function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,".page-body[data-v-57571e17]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.nav[data-v-57571e17]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%}.nav-left[data-v-57571e17]{width:30%}.nav-left-item[data-v-57571e17]{height:%?100?%;border-right:solid 1px #e0e0e0;border-bottom:solid 1px #e0e0e0;font-size:%?30?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}.nav-right[data-v-57571e17]{width:70%}.nav-right-item[data-v-57571e17]{width:28%;height:%?220?%;float:left;text-align:center;padding:%?11?%;font-size:%?28?%}.nav-right-item uni-image[data-v-57571e17]{width:%?100?%;height:%?100?%}.active[data-v-57571e17]{color:#007aff}",""])},"288b":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{categoryList:[],subCategoryList:[],height:0,categoryActive:0,scrollTop:0,scrollHeight:0,name:"七月_"}},methods:{scroll:function(t){this.scrollHeight=t.detail.scrollHeight},categoryClickMain:function(t,e){this.categoryActive=e,this.subCategoryList=t.subCategoryList,this.scrollTop=-this.scrollHeight*e},getCategory:function(){for(var t=1;t<21;t++){for(var e=[],i=1;i<31;i++)e.push({NAME:"分类"+t+":商品"+i,LOGO:"http://placehold.it/50x50"});this.categoryList.push({NAME:"分类"+t,subCategoryList:e})}this.subCategoryList=this.categoryList[0].subCategoryList}},onLoad:function(){this.getCategory(),this.height=uni.getSystemInfoSync().windowHeight}};e.default=a},"3c5c":function(t,e,i){"use strict";i.r(e);var a=i("8196"),s=i("f1c8");for(var n in s)"default"!==n&&function(t){i.d(e,t,function(){return s[t]})}(n);i("8dcb");var o=i("2877"),r=Object(o["a"])(s["default"],a["a"],a["b"],!1,null,"57571e17",null);e["default"]=r.exports},"7b35":function(t,e,i){var a=i("18e9");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var s=i("4f06").default;s("33242b8e",a,!0,{sourceMap:!1,shadowMode:!1})},8196:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"container"},[i("v-uni-view",{staticClass:"page-body"},[i("v-uni-scroll-view",{staticClass:"nav-left",style:"height:"+t.height+"px",attrs:{"scroll-y":""}},t._l(t.categoryList,function(e,a){return i("v-uni-view",{key:a,staticClass:"nav-left-item",class:a==t.categoryActive?"active":"",on:{click:function(i){i=t.$handleEvent(i),t.categoryClickMain(e,a)}}},[t._v(t._s(e.NAME))])}),1),i("v-uni-scroll-view",{staticClass:"nav-right",style:"height:"+t.height+"px",attrs:{"scroll-y":"","scroll-top":t.scrollTop,"scroll-with-animation":""},on:{scroll:function(e){e=t.$handleEvent(e),t.scroll(e)}}},[t._l(t.subCategoryList,function(e,a){return i("v-uni-view",{key:a,staticClass:"nav-right-item",attrs:{id:0===a?"first":""}},[i("v-uni-image",{attrs:{src:e.LOGO}}),i("v-uni-view",[t._v(t._s(e.NAME))])],1)}),t.subCategoryList.length>1?i("page-foot",{attrs:{name:t.name}}):t._e()],2)],1)],1)},s=[];i.d(e,"a",function(){return a}),i.d(e,"b",function(){return s})},"8dcb":function(t,e,i){"use strict";var a=i("7b35"),s=i.n(a);s.a},f1c8:function(t,e,i){"use strict";i.r(e);var a=i("288b"),s=i.n(a);for(var n in a)"default"!==n&&function(t){i.d(e,t,function(){return a[t]})}(n);e["default"]=s.a}}]);