exports.ids=[11],exports.modules={1264:function(e,t,a){e.exports=a.p+"assets/p5.5f6b44.png"},1265:function(e,t,a){e.exports=a.p+"assets/p6.e274e7.png"},1266:function(e,t,a){e.exports=a.p+"assets/p8.5d514f.png"},1267:function(e,t,a){e.exports=a.p+"assets/skill.cbb0a0.jpg"},156:function(e,t,a){"use strict";t.__esModule=!0;var n=a(71),l=function(e){return e&&e.__esModule?e:{default:e}}(n);t.default=function(e,t,a){return t in e?(0,l.default)(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}},157:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=a(156),i=n(l),o=a(24),r=n(o),u=a(19),s=n(u),c=a(25),f=n(c),d=a(27),p=n(d),m=a(26),b=n(m),x=a(14),h=n(x),g=a(159),v=n(g),E=a(179),w=n(E),y=[a(160),a(161),a(162),a(163),a(164)],_=function(e){function t(){var e,a,n,l;(0,s.default)(this,t);for(var i=arguments.length,o=Array(i),u=0;u<i;u++)o[u]=arguments[u];return a=n=(0,p.default)(this,(e=t.__proto__||(0,r.default)(t)).call.apply(e,[this].concat(o))),n.state={index:0},l=a,(0,p.default)(n,l)}return(0,b.default)(t,e),(0,f.default)(t,[{key:"componentDidMount",value:function(){var e=this;this.timer=setInterval(function(){var t=e.state.index+1;t>y.length-1&&(t=0),e.setState({index:t})},3e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timer)}},{key:"render",value:function(){var e=this;return h.default.createElement("div",{className:v.default.carouse},y.map(function(t,a){return h.default.createElement("img",{className:(0,w.default)(v.default.item,(0,i.default)({},v.default.active,e.state.index==a)),key:a,src:t})}),h.default.createElement("div",{className:v.default.dots},y.map(function(t,a){return h.default.createElement("i",{className:(0,w.default)(v.default.dot,(0,i.default)({},v.default.active,e.state.index==a)),key:a})})))}}]),t}(h.default.Component);t.default=_},158:function(e,t,a){t=e.exports=a(150)(),t.push([e.i,".carouse-856849{position:relative;height:22vw;min-height:280px;overflow:hidden}.carouse-856849 .item-928a55{position:absolute;z-index:1;opacity:0;-webkit-transition:all .5s ease;transition:all .5s ease;width:100vw;height:22vw;min-width:1300px;min-height:280px}.carouse-856849 .item-928a55.active-4f663a{z-index:3;opacity:1}.carouse-856849 .dots-ac25e2{z-index:10;position:absolute;bottom:20px;right:50px}.carouse-856849 .dots-ac25e2 .dot-6ade78{float:left;margin-right:10px;cursor:pointer;width:16px;height:16px;overflow:hidden;border-radius:8px;background:hsla(0,0%,78%,.8);-webkit-transition:all .1s ease;transition:all .1s ease}.carouse-856849 .dots-ac25e2 .dot-6ade78.active-4f663a{background:#327ff1}",""]),t.locals={carouse:"carouse-856849",item:"item-928a55",active:"active-4f663a",dots:"dots-ac25e2",dot:"dot-6ade78"}},159:function(e,t,a){var n=a(158);"string"==typeof n&&(n=[[e.i,n,""]]);a(151)(n,{});n.locals&&(e.exports=n.locals)},160:function(e,t,a){e.exports=a.p+"assets/c1.b44ccf.jpg"},161:function(e,t,a){e.exports=a.p+"assets/c2.cb3edc.jpg"},162:function(e,t,a){e.exports=a.p+"assets/c3.8946d8.jpg"},163:function(e,t,a){e.exports=a.p+"assets/c4.d73851.jpg"},164:function(e,t,a){e.exports=a.p+"assets/c5.a31785.jpg"},166:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=a(14),i=n(l),o=a(168),r=n(o),u=a(28);t.default=function(e){return i.default.createElement("div",{className:r.default.box},i.default.createElement("img",{src:a(169)}),i.default.createElement("div",{className:r.default.text},i.default.createElement("div",{className:r.default.title},e.title),i.default.createElement("div",{className:r.default.info},e.info)),e.link&&i.default.createElement(u.Link,{to:e.link},"more"))}},167:function(e,t,a){t=e.exports=a(150)(),t.push([e.i,'.box-4a62b2{color:#080806;border-bottom:1px solid #555;padding-bottom:10px;margin-bottom:10px}.box-4a62b2:after{content:".";display:block;height:0;visibility:hidden;clear:both}.box-4a62b2 img{float:left}.box-4a62b2 .text-9fdb7f{float:left;padding-left:15px}.box-4a62b2 .text-9fdb7f .title-456182{font-size:22px;font-weight:700}.box-4a62b2 .text-9fdb7f .info-59a9da{font-size:10px;color:#555;line-height:10px}.box-4a62b2 a{float:right;margin-top:20px;font-size:15px;color:#666}',""]),t.locals={box:"box-4a62b2",text:"text-9fdb7f",title:"title-456182",info:"info-59a9da"}},168:function(e,t,a){var n=a(167);"string"==typeof n&&(n=[[e.i,n,""]]);a(151)(n,{});n.locals&&(e.exports=n.locals)},169:function(e,t,a){e.exports=a.p+"assets/p7.5a2f96.png"},206:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l,i,o=a(24),r=n(o),u=a(19),s=n(u),c=a(25),f=n(c),d=a(27),p=n(d),m=a(26),b=n(m),x=a(14),h=n(x),g=a(228),v=n(g),E=a(166),w=n(E),y=a(157),_=n(y),k=a(73),N=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t.default=e,t}(k),M=a(72),j=a(1305),z=n(j),O=a(28),P=function(){return h.default.createElement("div",{className:v.default.infos},h.default.createElement("div",{className:v.default.center},h.default.createElement("img",{src:a(1264)}),h.default.createElement("p",null,"火锅是餐饮剧场里最热辣的舞蹈表演，",h.default.createElement("br",null),"它与热情而耿直的重庆性格达到了天人合一的境界，",h.default.createElement("br",null),"重庆人孕育的70年火锅文化引来无数食客的追捧和衷情，",h.default.createElement("br",null),"而今，度过近百年一起沸腾的岁月后，推陈出新愈显重要。",h.default.createElement("br",null),"为了满足现代人对饮食健康营养之需求，",h.default.createElement("br",null),"周子兴先生遍访各地调味大师、营养名师，",h.default.createElement("br",null),"潜心数年刻苦钻研，终于研制出口味独特、营养丰富，",h.default.createElement("br",null),"辣而不燥、久食不上火的双味鱼火锅，",h.default.createElement("br",null),"为火锅文化注入全新元素，在重庆餐饮界掀起一场双味鱼风潮，",h.default.createElement("br",null),"成就了饮食界里另一段美味传奇。",h.default.createElement("br",null)),h.default.createElement("video",{src:"//toy-static.oss-cn-shanghai.aliyuncs.com/mv.mp4",controls:!0})))},C=(l=(0,M.connect)(function(e){return{data:e.articles.tops}}))(i=function(e){function t(){return(0,s.default)(this,t),(0,p.default)(this,(t.__proto__||(0,r.default)(t)).apply(this,arguments))}return(0,b.default)(t,e),(0,f.default)(t,[{key:"componentDidMount",value:function(){this.props.dispatch(N.getTops()),z.default.locale("zh-cn")}},{key:"render",value:function(){var e=this.props.data;return h.default.createElement("div",{className:v.default.news},h.default.createElement("div",{className:v.default.center},h.default.createElement("div",{className:v.default.panel},h.default.createElement(w.default,{title:"最新动态",info:"COMPANY NEWS",link:"/news"}),e&&e.map(function(e){return h.default.createElement(O.Link,{to:"/news/page/"+e._id,key:e._id},h.default.createElement("p",null,e.title,h.default.createElement("span",{className:v.default.date},(0,z.default)(e.date||0).fromNow())))})),h.default.createElement("img",{className:v.default.img,src:a(1267)})),h.default.createElement("div",{className:v.default.bottom},h.default.createElement("img",{src:a(1266)})))}}]),t}(h.default.Component))||i;t.default=function(){return h.default.createElement("div",null,h.default.createElement(_.default,null),h.default.createElement(P,null),h.default.createElement(C,null))}},221:function(e,t,a){t=e.exports=a(150)(),t.push([e.i,'.infos-80c790{background:#ffa200}.infos-80c790 .center-ad69c1{width:1300px;margin:0 auto;padding-top:5px}.infos-80c790 .center-ad69c1:after{content:".";display:block;height:0;visibility:hidden;clear:both}.infos-80c790 img{vertical-align:bottom;float:left}.infos-80c790 p{float:left;margin:20px 0 0 20px;line-height:2;margin:0}.infos-80c790 video{margin:40px 0 0 20px;width:407px;height:271px}.news-76b595{height:701px;background:url('+a(1265)+') no-repeat 50%}.news-76b595 .center-ad69c1{width:1300px;margin:0 auto}.news-76b595 .center-ad69c1:after{content:".";display:block;height:0;visibility:hidden;clear:both}.news-76b595 .panel-3011ee{width:530px;height:490px;float:left;margin:60px 0 0 80px}.news-76b595 .img-1e082e{margin:60px 0 0 60px;float:left}.news-76b595 .bottom-155fa0{text-align:center;margin-top:50px}.date-55b3c2{color:#888;float:right}',""]),t.locals={infos:"infos-80c790",center:"center-ad69c1",news:"news-76b595",panel:"panel-3011ee",img:"img-1e082e",bottom:"bottom-155fa0",date:"date-55b3c2"}},228:function(e,t,a){var n=a(221);"string"==typeof n&&(n=[[e.i,n,""]]);a(151)(n,{});n.locals&&(e.exports=n.locals)}};