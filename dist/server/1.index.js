exports.ids=[1],exports.modules={1179:function(e,t,a){try{(function(){"use strict";function e(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=a(0),n=e(s),l=a(1185),f=e(l),o=a(1210),r=e(o),c=a(26),i=function(e){var t=e.match;return n.default.createElement("div",null,n.default.createElement("img",{src:a(1254)}),n.default.createElement("img",{className:r.default.full,src:a(1257)}),n.default.createElement("img",{className:r.default.radius,src:a(1258)}),n.default.createElement("img",{className:r.default.radius,src:a(1259)}),n.default.createElement("img",{className:r.default.radius,src:a(1260)}),n.default.createElement("img",{className:r.default.radius,src:a(1261)}),n.default.createElement("p",null,"周渔府自有万亩花椒基地、辣椒基地，所有原料经人工精选后，将60余中天然食材，配已独门配方，已现代工艺生产而成 全程多达20余项检测程序，确保口味的正宗与质量统一"),n.default.createElement("div",{className:r.default.map},n.default.createElement(c.Link,{to:t.url+"/0"}),n.default.createElement(c.Link,{to:t.url+"/1"}),n.default.createElement(c.Link,{to:t.url+"/2"}),n.default.createElement(c.Link,{to:t.url+"/3"}),n.default.createElement(c.Link,{to:t.url+"/4"}),n.default.createElement("img",{className:r.default.full,src:a(1262)})),n.default.createElement("img",{className:r.default.full,src:a(1263)}),n.default.createElement("img",{className:r.default.full,src:a(1264)}),n.default.createElement("img",{className:r.default.full,src:a(1255)}),n.default.createElement("img",{className:r.default.full,src:a(1256)}))},u=[a(1273),a(1274),a(1275),a(1276),a(1277)],d=function(e){var t=e.match;return n.default.createElement("div",{className:r.default.imgs},n.default.createElement("img",{src:u[t.params.id]}),n.default.createElement("img",{src:a(1265)}),n.default.createElement("img",{src:a(1266)}),n.default.createElement("img",{src:a(1267)}),n.default.createElement("img",{src:a(1268)}),n.default.createElement("img",{src:a(1269)}),n.default.createElement("img",{src:a(1270)}),n.default.createElement("img",{src:a(1271)}))};t.default=function(e){var t=e.match;return n.default.createElement("div",null,n.default.createElement(f.default,null),n.default.createElement("div",{className:r.default.box},n.default.createElement("div",{className:r.default.center},n.default.createElement(c.Switch,null,n.default.createElement(c.Route,{exact:!0,path:t.url,component:i}),n.default.createElement(c.Route,{path:t.url+"/:id",component:d})))))}}).call(this)}finally{}},1183:function(e,t,a){t=e.exports=a(1171)(),t.push([e.i,".carouse-856849{position:relative;height:22vw;min-height:280px;overflow:hidden}.carouse-856849 .item-928a55{position:absolute;z-index:1;opacity:0;-webkit-transition:all .5s ease;transition:all .5s ease;width:100vw;height:22vw;min-width:1300px;min-height:280px}.carouse-856849 .item-928a55.active-4f663a{z-index:3;opacity:1}.carouse-856849 .dots-ac25e2{z-index:10;position:absolute;bottom:20px;right:50px}.carouse-856849 .dots-ac25e2 .dot-6ade78{float:left;margin-right:10px;cursor:pointer;width:16px;height:16px;overflow:hidden;border-radius:8px;background:hsla(0,0%,78%,.8);-webkit-transition:all .1s ease;transition:all .1s ease}.carouse-856849 .dots-ac25e2 .dot-6ade78.active-4f663a{background:#327ff1}",""]),t.locals={carouse:"carouse-856849",item:"item-928a55",active:"active-4f663a",dots:"dots-ac25e2",dot:"dot-6ade78"}},1184:function(e,t,a){var s=a(1183);"string"==typeof s&&(s=[[e.i,s,""]]);a(1172)(s,{});s.locals&&(e.exports=s.locals)},1185:function(e,t,a){try{(function(){"use strict";function e(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=a(93),n=e(s),l=a(4),f=e(l),o=a(3),r=e(o),c=a(5),i=e(c),u=a(7),d=e(u),p=a(6),m=e(p),x=a(0),g=e(x),b=a(1184),h=e(b),v=a(94),E=e(v),w=[a(1186),a(1187),a(1188),a(1189),a(1190)],N=function(e){function t(){var e,a,s,n;(0,r.default)(this,t);for(var l=arguments.length,o=Array(l),c=0;c<l;c++)o[c]=arguments[c];return a=s=(0,d.default)(this,(e=t.__proto__||(0,f.default)(t)).call.apply(e,[this].concat(o))),s.state={index:0},n=a,(0,d.default)(s,n)}return(0,m.default)(t,e),(0,i.default)(t,[{key:"componentDidMount",value:function(){var e=this;this.timer=setInterval(function(){var t=e.state.index+1;t>w.length-1&&(t=0),e.setState({index:t})},3e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timer)}},{key:"render",value:function(){var e=this;return g.default.createElement("div",{className:h.default.carouse},w.map(function(t,a){return g.default.createElement("img",{className:(0,E.default)(h.default.item,(0,n.default)({},h.default.active,e.state.index==a)),key:a,src:t})}),g.default.createElement("div",{className:h.default.dots},w.map(function(t,a){return g.default.createElement("i",{className:(0,E.default)(h.default.dot,(0,n.default)({},h.default.active,e.state.index==a)),key:a})})))}}]),t}(g.default.Component);t.default=N}).call(this)}finally{}},1186:function(e,t,a){e.exports=a.p+"assets/c1.b44ccf.jpg"},1187:function(e,t,a){e.exports=a.p+"assets/c2.cb3edc.jpg"},1188:function(e,t,a){e.exports=a.p+"assets/c3.8946d8.jpg"},1189:function(e,t,a){e.exports=a.p+"assets/c4.d73851.jpg"},1190:function(e,t,a){e.exports=a.p+"assets/c5.a31785.jpg"},1205:function(e,t,a){t=e.exports=a(1171)(),t.push([e.i,".box-f75ffe{background:url("+a(1272)+") no-repeat bottom #f8f2dc;padding:20px 0 200px}.box-f75ffe .center-6c4a80{width:1070px;margin:0 auto;overflow:hidden}.box-f75ffe .full-333866{width:100%}.box-f75ffe .radius-d50335{width:230px;height:230px;border-radius:115px;overflow:hidden;margin:0 10px;border:4px solid #fff}.box-f75ffe p{font-size:20px;margin:20px 0 0;text-align:center;color:#000}.box-f75ffe .map-5356b2{position:relative}.box-f75ffe .map-5356b2 a{width:450px;height:270px;position:absolute}.box-f75ffe .map-5356b2 a:first-child{top:140px;left:70px}.box-f75ffe .map-5356b2 a:nth-child(2){top:140px;left:570px}.box-f75ffe .map-5356b2 a:nth-child(3){top:500px;left:70px}.box-f75ffe .map-5356b2 a:nth-child(4){top:500px;left:570px}.box-f75ffe .map-5356b2 a:nth-child(5){top:860px;left:70px}.box-f75ffe .imgs-c44fed{text-align:center}",""]),t.locals={box:"box-f75ffe",center:"center-6c4a80",full:"full-333866",radius:"radius-d50335",map:"map-5356b2",imgs:"imgs-c44fed"}},1210:function(e,t,a){var s=a(1205);"string"==typeof s&&(s=[[e.i,s,""]]);a(1172)(s,{});s.locals&&(e.exports=s.locals)},1254:function(e,t,a){e.exports=a.p+"assets/a1.8e9844.png"},1255:function(e,t,a){e.exports=a.p+"assets/a10.7bc82a.jpg"},1256:function(e,t,a){e.exports=a.p+"assets/a11.461718.jpg"},1257:function(e,t,a){e.exports=a.p+"assets/a2.283dd5.jpg"},1258:function(e,t,a){e.exports=a.p+"assets/a3.b7e373.jpg"},1259:function(e,t,a){e.exports=a.p+"assets/a4.77103b.jpg"},1260:function(e,t,a){e.exports=a.p+"assets/a5.47b7d0.jpg"},1261:function(e,t,a){e.exports=a.p+"assets/a6.1ea186.jpg"},1262:function(e,t,a){e.exports=a.p+"assets/a7.c133a5.jpg"},1263:function(e,t,a){e.exports=a.p+"assets/a8.ed6e8c.jpg"},1264:function(e,t,a){e.exports=a.p+"assets/a9.1518cf.jpg"},1265:function(e,t,a){e.exports=a.p+"assets/b1.962143.png"},1266:function(e,t,a){e.exports=a.p+"assets/b2.9d6c6e.png"},1267:function(e,t,a){e.exports=a.p+"assets/b3.d79620.png"},1268:function(e,t,a){e.exports=a.p+"assets/b4.a5ed19.png"},1269:function(e,t,a){e.exports=a.p+"assets/b5.f2089c.png"},1270:function(e,t,a){e.exports=a.p+"assets/b6.6f160b.png"},1271:function(e,t,a){e.exports=a.p+"assets/b7.c265a7.png"},1272:function(e,t,a){e.exports=a.p+"assets/p6.e274e7.png"},1273:function(e,t,a){e.exports=a.p+"assets/w1.616b03.png"},1274:function(e,t,a){e.exports=a.p+"assets/w2.76959a.png"},1275:function(e,t,a){e.exports=a.p+"assets/w3.ba8d9a.png"},1276:function(e,t,a){e.exports=a.p+"assets/w4.14a8f2.png"},1277:function(e,t,a){e.exports=a.p+"assets/w5.286b9e.png"}};