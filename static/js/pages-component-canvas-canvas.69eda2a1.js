(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-component-canvas-canvas"],{"0116":function(t,a,n){"use strict";n.r(a);var i=n("220c"),s=n("9e94");for(var e in s)"default"!==e&&function(t){n.d(a,t,function(){return s[t]})}(e);n("4aa8");var c=n("2877"),v=Object(c["a"])(s["default"],i["a"],i["b"],!1,null,"aaf427a8",null);a["default"]=v.exports},"220c":function(t,a,n){"use strict";var i=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("v-uni-view",[n("page-head",{attrs:{title:t.title}}),n("v-uni-view",{staticClass:"page-body"},[n("v-uni-view",{staticClass:"page-body-wrapper"},[n("v-uni-canvas",{staticClass:"canvas",attrs:{"canvas-id":"canvas"}})],1)],1)],1)},s=[];n.d(a,"a",function(){return i}),n.d(a,"b",function(){return s})},"4aa8":function(t,a,n){"use strict";var i=n("db27"),s=n.n(i);s.a},"9e94":function(t,a,n){"use strict";n.r(a);var i=n("d349"),s=n.n(i);for(var e in i)"default"!==e&&function(t){n.d(a,t,function(){return i[t]})}(e);a["default"]=s.a},d349:function(t,a,n){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i=null,s=null,e={data:function(){return{title:"canvas",screenWidth:uni.getSystemInfoSync().windowWidth,canvasWidth:0,position:{x:150,y:150,vx:2,vy:2}}},onReady:function(){i=uni.createCanvasContext("canvas"),this.canvasWidth=this.screenWidth/750*610,this.position={x:this.canvasWidth/2,y:this.canvasWidth/2,vx:2,vy:2},this.drawBall(),s=setInterval(this.drawBall,17)},onUnload:function(){clearInterval(s),this.position={x:0,y:0,vx:0,vy:0}},methods:{drawBall:function(){var t=this.position;function a(t,a){i.beginPath(0),i.arc(t,a,5,0,2*Math.PI),i.setFillStyle("#1aad19"),i.setStrokeStyle("rgba(1,1,1,0)"),i.fill(),i.stroke()}t.x+=t.vx,t.y+=t.vy,t.x>=this.canvasWidth&&(t.vx=-2),t.x<=7&&(t.vx=2),t.y>=this.canvasWidth&&(t.vy=-2),t.y<=7&&(t.vy=2),a(t.x,this.canvasWidth/2),a(this.canvasWidth/2,t.y),a(this.canvasWidth-t.x,this.canvasWidth/2),a(this.canvasWidth/2,this.canvasWidth-t.y),a(t.x,t.y),a(this.canvasWidth-t.x,this.canvasWidth-t.y),a(t.x,this.canvasWidth-t.y),a(this.canvasWidth-t.x,t.y),i.draw()}}};a.default=e},db27:function(t,a,n){var i=n("e8ce");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var s=n("4f06").default;s("bcf0790e",i,!0,{sourceMap:!1,shadowMode:!1})},e8ce:function(t,a,n){a=t.exports=n("2350")(!1),a.push([t.i,".canvas[data-v-aaf427a8]{width:%?610?%;height:%?610?%;background-color:#fff}",""])}}]);