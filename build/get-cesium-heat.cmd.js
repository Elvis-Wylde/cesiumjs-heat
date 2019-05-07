module.exports=function(e){var t={};function i(a){if(t[a])return t[a].exports;var r=t[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,i),r.l=!0,r.exports}return i.m=e,i.c=t,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(a,r,function(t){return e[t]}.bind(null,r));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=1)}([function(e,t){e.exports=require("heatmap.js")},function(e,t,i){"use strict";i.r(t);var a=i(0);function r(e,t){let i=document.createElement("div");t&&t.append(i);for(let t in e)"number"!=typeof e[t]?i.style[t]=e[t]:i.style[t]=e[t]+"px";return i}t.default=(e=>(class{constructor(e,t=[],i=[-180,-90,180,90],n={},o={enabled:!0,min:6375e3,max:1e7,maxRadius:40,minRadius:10},s={totalArea:1036800,autoResize:!0}){if("undefined"==typeof window)return;this.viewer=e,this.bbox=i,this.autoRadiusConfig=o,this.max=0;const[h,u,d,l]=i;let m=l-u,c=d-h;if(this.boxMeta={top:l,left:h,height:m,width:c},s.autoResize){if(!s.totalArea)throw"specify totalArea if auto resize";const e=Math.floor(Math.sqrt(m*s.totalArea)),t=Math.floor(e*c/m);this.canvasConfig={...s,width:t,height:e}}else{if(!s.width||!s.height)throw"specify width and height if not auto resize";this.canvasConfig=s}let f={...n};f.container||(this.mountPoint=r({position:"absolute",top:0,left:0,"z-index":-100,overflow:"hidden",width:0,height:0},document.body),f.container=r({width:this.canvasConfig.width,height:this.canvasConfig.height},this.mountPoint)),this.heatmapConfig=f,this.heatmap=a.create(f);let p=t.map(e=>this.convertData(e));this.data=p;let v={max:this.max,data:p};this.heatmap.setData(v),window.heatmap=this.heatmap,this.updateCesium(o.enabled),this.cameraMoveEnd=(()=>this.updateCesium(!0)),o.enabled&&this.viewer.camera.moveEnd.addEventListener(this.cameraMoveEnd)}updateHeatmap(){let e=this.viewer.camera.getMagnitude();const{min:t,max:i,minRadius:a,maxRadius:r}=this.autoRadiusConfig;let n=parseInt(a+(r-a)*(e-t)/(i-t));this.heatmap.setData({max:this.max,data:this.data.map(({x:e,y:t,value:i})=>({x:e,y:t,value:i,radius:n}))})}updateCesium(t){this.layer&&this.viewer.scene.imageryLayers.remove(this.layer),t&&this.updateHeatmap();let i=new e.SingleTileImageryProvider({url:this.heatmap.getDataURL(),rectangle:e.Rectangle.fromDegrees(...this.bbox)});this.layer=this.viewer.scene.imageryLayers.addImageryProvider(i)}convertData({x:e,y:t,value:i}){let[a,r]=this.gps2point([e,t]);return this.max=Math.max(i,this.max),{x:a,y:r,value:i}}gps2point(e=[]){let[t,i]=e,{top:a,left:r,height:n,width:o}=this.boxMeta,s=this.canvasConfig;return[parseInt((t-r)/o*s.width),parseInt((a-i)/n*s.height)]}destory(){this.viewer.camera.moveEnd.removeEventListener(this.cameraMoveEnd),this.layer&&this.viewer.scene.imageryLayers.remove(this.layer),this.mountPoint&&this.mountPoint.remove()}}))}]);
//# sourceMappingURL=get-cesium-heat.cmd.js.map