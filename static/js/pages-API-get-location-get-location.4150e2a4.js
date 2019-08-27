(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-API-get-location-get-location"],{"05b4":function(t,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e=i("b876"),a=e.formatLocation,o={data:function(){return{title:"getLocation",hasLocation:!1,location:{}}},methods:{getLocation:function(){var t=this;uni.getLocation({success:function(n){t.hasLocation=!0,t.location=a(n.longitude,n.latitude)}})},clear:function(){this.hasLocation=!1}}};n.default=o},"34ac":function(t,n,i){"use strict";i.r(n);var e=i("05b4"),a=i.n(e);for(var o in e)"default"!==o&&function(t){i.d(n,t,function(){return e[t]})}(o);n["default"]=a.a},"9eed":function(t,n,i){"use strict";var e=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("v-uni-view",[i("page-head",{attrs:{title:t.title}}),i("v-uni-view",{staticClass:"uni-padding-wrap"},[i("v-uni-view",{staticStyle:{background:"#FFFFFF",padding:"40upx"}},[i("v-uni-view",{staticClass:"uni-hello-text uni-center"},[t._v("当前位置经纬度")]),!1===t.hasLocation?[i("v-uni-view",{staticClass:"uni-h2 uni-center uni-common-mt"},[t._v("未获取")])]:t._e(),!0===t.hasLocation?[i("v-uni-view",{staticClass:"uni-h2 uni-center uni-common-mt"},[i("v-uni-text",[t._v("E: "+t._s(t.location.longitude[0])+"°"+t._s(t.location.longitude[1])+"′")]),i("v-uni-text",[t._v("\\nN: "+t._s(t.location.latitude[0])+"°"+t._s(t.location.latitude[1])+"′")])],1)]:t._e()],2),i("v-uni-view",{staticClass:"uni-btn-v"},[i("v-uni-button",{attrs:{type:"primary"},on:{click:function(n){n=t.$handleEvent(n),t.getLocation(n)}}},[t._v("获取位置")]),i("v-uni-button",{on:{click:function(n){n=t.$handleEvent(n),t.clear(n)}}},[t._v("清空")])],1)],1)],1)},a=[];i.d(n,"a",function(){return e}),i.d(n,"b",function(){return a})},b876:function(t,n,i){"use strict";function e(t){if("number"!==typeof t||t<0)return t;var n=parseInt(t/3600);t%=3600;var i=parseInt(t/60);t%=60;var e=t;return[n,i,e].map(function(t){return t=t.toString(),t[1]?t:"0"+t}).join(":")}function a(t,n){return"string"===typeof t&&"string"===typeof n&&(t=parseFloat(t),n=parseFloat(n)),t=t.toFixed(2),n=n.toFixed(2),{longitude:t.toString().split("."),latitude:n.toString().split(".")}}var o={UNITS:{"年":315576e5,"月":26298e5,"天":864e5,"小时":36e5,"分钟":6e4,"秒":1e3},humanize:function(t){var n="";for(var i in this.UNITS)if(t>=this.UNITS[i]){n=Math.floor(t/this.UNITS[i])+i+"前";break}return n||"刚刚"},format:function(t){var n=this.parse(t),i=Date.now()-n.getTime();if(i<this.UNITS["天"])return this.humanize(i);var e=function(t){return t<10?"0"+t:t};return n.getFullYear()+"/"+e(n.getMonth()+1)+"/"+e(n.getDay())+"-"+e(n.getHours())+":"+e(n.getMinutes())},parse:function(t){var n=t.split(/[^0-9]/);return new Date(n[0],n[1]-1,n[2],n[3],n[4],n[5])}};t.exports={formatTime:e,formatLocation:a,dateUtils:o}},cc8d:function(t,n,i){"use strict";i.r(n);var e=i("9eed"),a=i("34ac");for(var o in a)"default"!==o&&function(t){i.d(n,t,function(){return a[t]})}(o);var u=i("2877"),r=Object(u["a"])(a["default"],e["a"],e["b"],!1,null,"8673f324",null);n["default"]=r.exports}}]);