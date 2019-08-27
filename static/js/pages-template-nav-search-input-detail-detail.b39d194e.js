(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-template-nav-search-input-detail-detail"],{"1ca1":function(t,e,i){var a=i("62a4");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var o=i("4f06").default;o("9ac0e9de",a,!0,{sourceMap:!1,shadowMode:!1})},"1eaf":function(t,e,i){"use strict";i.r(e);var a=i("962b"),o=i.n(a);for(var s in a)"default"!==s&&function(t){i.d(e,t,function(){return a[t]})}(s);e["default"]=o.a},"38de":function(t,e,i){"use strict";function a(t){this.key=t.key,this.requestConfig={key:t.key,s:"rsx",platform:"WXJS",appname:t.key,sdkversion:"1.2.0",logversion:"2.0"}}a.prototype.getWxLocation=function(t,e){wx.getLocation({type:"gcj02",success:function(t){var i=t.longitude+","+t.latitude;wx.setStorage({key:"userLocation",data:i}),e(i)},fail:function(i){wx.getStorage({key:"userLocation",success:function(t){t.data&&e(t.data)}}),t.fail({errCode:"0",errMsg:i.errMsg||""})}})},a.prototype.getRegeo=function(t){function e(e){var a=i.requestConfig;wx.request({url:"https://restapi.amap.com/v3/geocode/regeo",data:{key:i.key,location:e,extensions:"all",s:a.s,platform:a.platform,appname:i.key,sdkversion:a.sdkversion,logversion:a.logversion},method:"GET",header:{"content-type":"application/json"},success:function(i){var a,o,s,n,r,c,d,u,p;i.data.status&&"1"==i.data.status?(a=i.data.regeocode,o=a.addressComponent,s=[],n="",a&&a.roads[0]&&a.roads[0].name&&(n=a.roads[0].name+"附近"),r=e.split(",")[0],c=e.split(",")[1],a.pois&&a.pois[0]&&(n=a.pois[0].name+"附近",d=a.pois[0].location,d&&(r=parseFloat(d.split(",")[0]),c=parseFloat(d.split(",")[1]))),o.provice&&s.push(o.provice),o.city&&s.push(o.city),o.district&&s.push(o.district),o.streetNumber&&o.streetNumber.street&&o.streetNumber.number?(s.push(o.streetNumber.street),s.push(o.streetNumber.number)):(u="",a&&a.roads[0]&&a.roads[0].name&&(u=a.roads[0].name),s.push(u)),s=s.join(""),p=[{iconPath:t.iconPath,width:t.iconWidth,height:t.iconHeight,name:s,desc:n,longitude:r,latitude:c,id:0,regeocodeData:a}],t.success(p)):t.fail({errCode:i.data.infocode,errMsg:i.data.info})},fail:function(e){t.fail({errCode:"0",errMsg:e.errMsg||""})}})}var i=this;t.location?e(t.location):i.getWxLocation(t,function(t){e(t)})},a.prototype.getWeather=function(t){function e(e){var i="base";t.type&&"forecast"==t.type&&(i="all"),wx.request({url:"https://restapi.amap.com/v3/weather/weatherInfo",data:{key:a.key,city:e,extensions:i,s:o.s,platform:o.platform,appname:a.key,sdkversion:o.sdkversion,logversion:o.logversion},method:"GET",header:{"content-type":"application/json"},success:function(e){function i(t){var e={city:{text:"城市",data:t.city},weather:{text:"天气",data:t.weather},temperature:{text:"温度",data:t.temperature},winddirection:{text:"风向",data:t.winddirection+"风"},windpower:{text:"风力",data:t.windpower+"级"},humidity:{text:"湿度",data:t.humidity+"%"}};return e}var a,o;e.data.status&&"1"==e.data.status?e.data.lives?(a=e.data.lives,a&&a.length>0&&(a=a[0],o=i(a),o["liveData"]=a,t.success(o))):e.data.forecasts&&e.data.forecasts[0]&&t.success({forecast:e.data.forecasts[0]}):t.fail({errCode:e.data.infocode,errMsg:e.data.info})},fail:function(e){t.fail({errCode:"0",errMsg:e.errMsg||""})}})}function i(i){wx.request({url:"https://restapi.amap.com/v3/geocode/regeo",data:{key:a.key,location:i,extensions:"all",s:o.s,platform:o.platform,appname:a.key,sdkversion:o.sdkversion,logversion:o.logversion},method:"GET",header:{"content-type":"application/json"},success:function(i){var a,o;i.data.status&&"1"==i.data.status?(o=i.data.regeocode,o.addressComponent?a=o.addressComponent.adcode:o.aois&&o.aois.length>0&&(a=o.aois[0].adcode),e(a)):t.fail({errCode:i.data.infocode,errMsg:i.data.info})},fail:function(e){t.fail({errCode:"0",errMsg:e.errMsg||""})}})}var a=this,o=a.requestConfig;t.city?e(t.city):a.getWxLocation(t,function(t){i(t)})},a.prototype.getPoiAround=function(t){function e(e){var o={key:i.key,location:e,s:a.s,platform:a.platform,appname:i.key,sdkversion:a.sdkversion,logversion:a.logversion};t.querytypes&&(o["types"]=t.querytypes),t.querykeywords&&(o["keywords"]=t.querykeywords),wx.request({url:"https://restapi.amap.com/v3/place/around",data:o,method:"GET",header:{"content-type":"application/json"},success:function(e){var i,a,o,s;if(e.data.status&&"1"==e.data.status){if(e=e.data,e&&e.pois){for(i=[],a=0;a<e.pois.length;a++)o=0==a?t.iconPathSelected:t.iconPath,i.push({latitude:parseFloat(e.pois[a].location.split(",")[1]),longitude:parseFloat(e.pois[a].location.split(",")[0]),iconPath:o,width:22,height:32,id:a,name:e.pois[a].name,address:e.pois[a].address});s={markers:i,poisData:e.pois},t.success(s)}}else t.fail({errCode:e.data.infocode,errMsg:e.data.info})},fail:function(e){t.fail({errCode:"0",errMsg:e.errMsg||""})}})}var i=this,a=i.requestConfig;t.location?e(t.location):i.getWxLocation(t,function(t){e(t)})},a.prototype.getStaticmap=function(t){function e(e){o.push("location="+e),t.zoom&&o.push("zoom="+t.zoom),t.size&&o.push("size="+t.size),t.scale&&o.push("scale="+t.scale),t.markers&&o.push("markers="+t.markers),t.labels&&o.push("labels="+t.labels),t.paths&&o.push("paths="+t.paths),t.traffic&&o.push("traffic="+t.traffic);var i=s+o.join("&");t.success({url:i})}var i,a=this,o=[],s="https://restapi.amap.com/v3/staticmap?";o.push("key="+a.key),i=a.requestConfig,o.push("s="+i.s),o.push("platform="+i.platform),o.push("appname="+i.appname),o.push("sdkversion="+i.sdkversion),o.push("logversion="+i.logversion),t.location?e(t.location):a.getWxLocation(t,function(t){e(t)})},a.prototype.getInputtips=function(t){var e=this,i=e.requestConfig,a={key:e.key,s:i.s,platform:i.platform,appname:e.key,sdkversion:i.sdkversion,logversion:i.logversion};t.location&&(a["location"]=t.location),t.keywords&&(a["keywords"]=t.keywords),t.type&&(a["type"]=t.type),t.city&&(a["city"]=t.city),t.citylimit&&(a["citylimit"]=t.citylimit),wx.request({url:"https://restapi.amap.com/v3/assistant/inputtips",data:a,method:"GET",header:{"content-type":"application/json"},success:function(e){e&&e.data&&e.data.tips&&t.success({tips:e.data.tips})},fail:function(e){t.fail({errCode:"0",errMsg:e.errMsg||""})}})},a.prototype.getDrivingRoute=function(t){var e=this,i=e.requestConfig,a={key:e.key,s:i.s,platform:i.platform,appname:e.key,sdkversion:i.sdkversion,logversion:i.logversion};t.origin&&(a["origin"]=t.origin),t.destination&&(a["destination"]=t.destination),t.strategy&&(a["strategy"]=t.strategy),t.waypoints&&(a["waypoints"]=t.waypoints),t.avoidpolygons&&(a["avoidpolygons"]=t.avoidpolygons),t.avoidroad&&(a["avoidroad"]=t.avoidroad),wx.request({url:"https://restapi.amap.com/v3/direction/driving",data:a,method:"GET",header:{"content-type":"application/json"},success:function(e){e&&e.data&&e.data.route&&t.success({paths:e.data.route.paths,taxi_cost:e.data.route.taxi_cost||""})},fail:function(e){t.fail({errCode:"0",errMsg:e.errMsg||""})}})},a.prototype.getWalkingRoute=function(t){var e=this,i=e.requestConfig,a={key:e.key,s:i.s,platform:i.platform,appname:e.key,sdkversion:i.sdkversion,logversion:i.logversion};t.origin&&(a["origin"]=t.origin),t.destination&&(a["destination"]=t.destination),wx.request({url:"https://restapi.amap.com/v3/direction/walking",data:a,method:"GET",header:{"content-type":"application/json"},success:function(e){e&&e.data&&e.data.route&&t.success({paths:e.data.route.paths})},fail:function(e){t.fail({errCode:"0",errMsg:e.errMsg||""})}})},a.prototype.getTransitRoute=function(t){var e=this,i=e.requestConfig,a={key:e.key,s:i.s,platform:i.platform,appname:e.key,sdkversion:i.sdkversion,logversion:i.logversion};t.origin&&(a["origin"]=t.origin),t.destination&&(a["destination"]=t.destination),t.strategy&&(a["strategy"]=t.strategy),t.city&&(a["city"]=t.city),t.cityd&&(a["cityd"]=t.cityd),wx.request({url:"https://restapi.amap.com/v3/direction/transit/integrated",data:a,method:"GET",header:{"content-type":"application/json"},success:function(e){if(e&&e.data&&e.data.route){var i=e.data.route;t.success({distance:i.distance||"",taxi_cost:i.taxi_cost||"",transits:i.transits})}},fail:function(e){t.fail({errCode:"0",errMsg:e.errMsg||""})}})},a.prototype.getRidingRoute=function(t){var e=this,i=e.requestConfig,a={key:e.key,s:i.s,platform:i.platform,appname:e.key,sdkversion:i.sdkversion,logversion:i.logversion};t.origin&&(a["origin"]=t.origin),t.destination&&(a["destination"]=t.destination),wx.request({url:"https://restapi.amap.com/v4/direction/bicycling",data:a,method:"GET",header:{"content-type":"application/json"},success:function(e){e&&e.data&&e.data.data&&t.success({paths:e.data.data.paths})},fail:function(e){t.fail({errCode:"0",errMsg:e.errMsg||""})}})},t.exports.AMapWX=a},"62a4":function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,".history-title[data-v-0490cba7]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;padding:%?20?% %?30?%;padding-bottom:0;font-size:%?34?%;color:#333}.history-title .uni-icon[data-v-0490cba7]{font-size:%?40?%}.history-content[data-v-0490cba7]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;padding:%?15?%}.history-item[data-v-0490cba7]{padding:%?4?% %?35?%;border:1px #f1f1f1 solid;background:#fff;-webkit-border-radius:%?50?%;border-radius:%?50?%;margin:%?12?% %?10?%;color:#999}.history-list-box[data-v-0490cba7]{\n\t/* margin: 10upx 0; */}.history-list-item[data-v-0490cba7]{padding:%?30?% 0;margin-left:%?30?%;border-bottom:1px #eee solid;font-size:%?28?%}.no-data[data-v-0490cba7]{text-align:center;color:#999;margin:%?100?%}",""])},"8bfc":function(t,e,i){"use strict";var a=i("1ca1"),o=i.n(a);o.a},"962b":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=o(i("9cfc"));function o(t){return t&&t.__esModule?t:{default:t}}var s={data:function(){return{historyList:[],isHistory:!0,list:[],flng:!0,timer:null}},onLoad:function(){this.amapPlugin=a.default.mapInit(),this.historyList=uni.getStorageSync("search:history")},methods:{listTap:function(t){t=JSON.parse(JSON.stringify(t)),this.history||(this.isHistory=!0,a.default.setHistory(t),uni.navigateBack())},clearSearch:function(){var t=this;uni.showModal({title:"提示",content:"是否清理全部搜索历史？该操作不可逆。",success:function(e){e.confirm&&(t.historyList=a.default.removeHistory())}})},getInputtips:function(t){var e=this;this.amapPlugin.getInputtips({keywords:t,city:"北京",success:function(i){var o=i.tips;o.map(function(e){return a.default.dataHandle(e,t)}),e.historyList=o},fail:function(t){console.log(t)}})}},onNavigationBarSearchInputChanged:function(t){var e=t.text;if(!e)return this.isHistory=!0,this.historyList=[],void(this.historyList=uni.getStorageSync("search:history"));this.isHistory=!1,this.getInputtips(e)},onNavigationBarSearchInputConfirmed:function(t){var e=t.text;if(!e)return this.isHistory=!0,this.historyList=[],this.historyList=uni.getStorageSync("search:history"),void uni.showModal({title:"提示",content:"请输入内容。",success:function(t){t.confirm}});uni.showModal({title:"提示",content:'您输入的内容为"'.concat(e,'",如果点击确定,将记录到历史搜索,并返回.如果取消不做操作'),success:function(t){t.confirm&&(a.default.setHistory(e),uni.navigateBack())}})},onNavigationBarButtonTap:function(){var t=this;uni.showModal({title:"提示",content:"点击确定，修改输入框的内容为abc",success:function(e){if(e.confirm){var i=t.$mp.page.$getAppWebview();i.setTitleNViewSearchInputText("abc")}}})}};e.default=s},"9cfc":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=o(i("38de"));function o(t){return t&&t.__esModule?t:{default:t}}var s={"1号线":"#C43B33","2号线":"#016299","4号线/大兴线":"#008E9C","5号线":"#A42380","6号线":"#D09900","7号线":"#F2C172","8号线":"#009D6A","9号线":"#8FC41E","10号线":"#009DBE","13号线":"#F9E701","14号线东段":"#D4A7A2","14号线西段":"#D4A7A2","15号线":"#5D2D69","八通线":"#C33A32","昌平线":"#DE82B1","亦庄线":"#E40177","房山线":"#E66021","机场线":"#A29BBC"},n=[{id:"150500",icon:"icon-ditie"},{id:"150700",icon:"icon-gongjiao"},{id:"190700",icon:"icon-gonglu"}],r={key:"b526b09b86cd2996e7732be8ab8c4430",mapInit:function(){return new a.default.AMapWX({key:this.key})},typecode:n,lineColor:function(t){return s[t]?s[t]:"#ccc"},serachNmme:function(t,e){var i=new RegExp(t),a='<div style="font-size: 14px;color: #333;line-height: 1.5;">\n\t\t    '.concat(e.replace(i,"<span style='color:#66ccff;'>"+t+"</span>"),"\n\t\t    </div>").trim();return a},addressToLine:function(t,e){var i=this,a=t.split(";"),o="";return a.forEach(function(t){var a="#cccccc";e===n[0].id?a=i.lineColor(t):e===n[1].id&&(a="#4075cb");var s="margin:5px 0;margin-right:5px;padding:0 5px;background:"+a+";font-size:12px;color:#fff;border-radius:3px;";o+="<div style='".concat(s,"'>").concat(t,"</div>")}),'<div style="display:flex;flex-wrap: wrap;">'.concat(o,"</div>")},dataHandle:function(t,e){return t.nameNodes=e?r.serachNmme(e,t.name):'<div style="font-size: 14px;color: #333;line-height: 1.5;">'.concat(t.name,"</div>"),t.typecode===r.typecode[0].id||t.typecode===r.typecode[1].id?(t.addressNodes=r.addressToLine(t.address,t.typecode),t.typecode===r.typecode[0].id?t.icon=r.typecode[0].icon:t.typecode===r.typecode[1].id&&(t.icon=r.typecode[1].icon)):(t.addressNodes="<span>".concat(t.district).concat(t.address.length>0?"·"+t.address:"","</span>").trim(),t.icon="icon-weizhi"),t.location&&0===t.location.length&&(t.icon="icon-sousuo"),t},setHistory:function(t){var e=uni.getStorageSync("search:history");e||(e=[]);var i={};i="string"===typeof t?{adcode:[],address:[],city:[],district:[],id:[],location:[],name:t,typecode:[]}:t;for(var a=0;a<e.length;a++)if(e[a].name===i.name){e.splice(a,1);break}e.unshift(r.dataHandle(i)),uni.setStorage({key:"search:history",data:e,success:function(){}})},getHistory:function(){},removeHistory:function(){return uni.removeStorage({key:"search:history",success:function(t){console.log("success")}}),[]}},c=r;e.default=c},a1a5:function(t,e,i){"use strict";i.r(e);var a=i("b3cb"),o=i("1eaf");for(var s in o)"default"!==s&&function(t){i.d(e,t,function(){return o[t]})}(s);i("8bfc");var n=i("2877"),r=Object(n["a"])(o["default"],a["a"],a["b"],!1,null,"0490cba7",null);e["default"]=r.exports},b3cb:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"wrapper"},[t.isHistory?i("v-uni-view",{staticClass:"history-box"},[t.historyList.length>0?i("v-uni-view",[i("v-uni-view",{staticClass:"history-title"},[i("v-uni-text",[t._v("搜索历史")]),i("v-uni-text",{staticClass:"uni-icon uni-icon-trash",on:{click:function(e){e=t.$handleEvent(e),t.clearSearch(e)}}})],1),i("v-uni-view",{staticClass:"history-content"},t._l(t.historyList,function(e,a){return i("v-uni-view",{key:a,staticClass:"history-item"},[t._v(t._s(e.name))])}),1)],1):i("v-uni-view",{staticClass:"no-data"},[t._v("您还没有历史记录")])],1):i("v-uni-view",{staticClass:"history-box"},[t.historyList.length>0?i("v-uni-view",{staticClass:"history-list-box"},t._l(t.historyList,function(e,a){return i("v-uni-view",{key:a,staticClass:"history-list-item",on:{click:function(i){i=t.$handleEvent(i),t.listTap(e)}}},[i("v-uni-rich-text",{attrs:{nodes:e.nameNodes}})],1)}),1):i("v-uni-view",{staticClass:"no-data"},[t._v("没有搜索到相关内容")])],1)],1)},o=[];i.d(e,"a",function(){return a}),i.d(e,"b",function(){return o})}}]);