(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-API-open-location-open-location"],{"1fd4":function(t,i,n){"use strict";n.r(i);var e=n("93cb"),a=n("752b");for(var s in a)"default"!==s&&function(t){n.d(i,t,function(){return a[t]})}(s);n("75df");var u=n("2877"),l=Object(u["a"])(a["default"],e["a"],e["b"],!1,null,"76da7434",null);i["default"]=l.exports},"35e5":function(t,i,n){var e=n("7e59");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var a=n("4f06").default;a("ff89d26c",e,!0,{sourceMap:!1,shadowMode:!1})},"752b":function(t,i,n){"use strict";n.r(i);var e=n("85b3"),a=n.n(e);for(var s in e)"default"!==s&&function(t){n.d(i,t,function(){return e[t]})}(s);i["default"]=a.a},"75df":function(t,i,n){"use strict";var e=n("35e5"),a=n.n(e);a.a},"7e59":function(t,i,n){i=t.exports=n("2350")(!1),i.push([t.i,".uni-list-cell-left[data-v-76da7434]{padding:0 %?30?%}",""])},"85b3":function(t,i,n){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var e={data:function(){return{title:"openLocation"}},methods:{openLocation:function(t){console.log(t);var i=t.target.value;uni.openLocation({longitude:Number(i.longitude),latitude:Number(i.latitude),name:i.name,address:i.address})}}};i.default=e},"93cb":function(t,i,n){"use strict";var e=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("v-uni-view",[n("page-head",{attrs:{title:t.title}}),n("v-uni-view",{staticClass:"uni-common-mt"},[n("v-uni-form",{on:{submit:function(i){i=t.$handleEvent(i),t.openLocation(i)}}},[n("v-uni-view",{staticClass:"uni-list"},[n("v-uni-view",{staticClass:"uni-list-cell"},[n("v-uni-view",{staticClass:"uni-list-cell-left"},[n("v-uni-view",{staticClass:"uni-label"},[t._v("经度")])],1),n("v-uni-view",{staticClass:"uni-list-cell-db"},[n("v-uni-input",{staticClass:"uni-input",attrs:{type:"text",disabled:!0,value:"116.39747",name:"longitude"}})],1)],1),n("v-uni-view",{staticClass:"uni-list-cell"},[n("v-uni-view",{staticClass:"uni-list-cell-left"},[n("v-uni-view",{staticClass:"uni-label"},[t._v("纬度")])],1),n("v-uni-view",{staticClass:"uni-list-cell-db"},[n("v-uni-input",{staticClass:"uni-input",attrs:{type:"text",disabled:!0,value:"39.9085",name:"latitude"}})],1)],1),n("v-uni-view",{staticClass:"uni-list-cell"},[n("v-uni-view",{staticClass:"uni-list-cell-left"},[n("v-uni-view",{staticClass:"uni-label"},[t._v("位置名称")])],1),n("v-uni-view",{staticClass:"uni-list-cell-db"},[n("v-uni-input",{staticClass:"uni-input",attrs:{type:"text",disabled:!0,value:"天安门",name:"name"}})],1)],1),n("v-uni-view",{staticClass:"uni-list-cell"},[n("v-uni-view",{staticClass:"uni-list-cell-left"},[n("v-uni-view",{staticClass:"uni-label"},[t._v("详细位置")])],1),n("v-uni-view",{staticClass:"uni-list-cell-db"},[n("v-uni-input",{staticClass:"uni-input",attrs:{type:"text",disabled:!0,value:"北京市东城区东长安街",name:"address"}})],1)],1)],1),n("v-uni-view",{staticClass:"uni-padding-wrap"},[n("v-uni-view",{staticClass:"uni-btn-v uni-common-mt"},[n("v-uni-button",{attrs:{type:"primary",formType:"submit"}},[t._v("查看位置")])],1)],1)],1)],1)],1)},a=[];n.d(i,"a",function(){return e}),n.d(i,"b",function(){return a})}}]);