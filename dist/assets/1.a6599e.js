webpackJsonp([1],{1907:function(e,t,n){var a=n(109);e.exports=a.default(function(){return n.e(9).then(n.bind(null,824))})},1908:function(e,t,n){var a=n(109);e.exports=a.default(function(){return n.e(11).then(n.bind(null,825))})},1909:function(e,t,n){var a=n(109);e.exports=a.default(function(){return n.e(7).then(n.bind(null,826))})},1910:function(e,t,n){var a=n(109);e.exports=a.default(function(){return n.e(6).then(n.bind(null,827))})},1911:function(e,t,n){var a=n(109);e.exports=a.default(function(){return n.e(10).then(n.bind(null,828))})},1912:function(e,t,n){var a=n(109);e.exports=a.default(function(){return n.e(5).then(n.bind(null,829))})},1913:function(e,t,n){var a=n(109);e.exports=a.default(function(){return n.e(14).then(n.bind(null,830))})},1914:function(e,t,n){var a=n(109);e.exports=a.default(function(){return n.e(8).then(n.bind(null,831))})},1915:function(e,t,n){var a=n(109);e.exports=a.default(function(){return n.e(15).then(n.bind(null,832))})},1916:function(e,t,n){var a=n(109);e.exports=a.default(function(){return n.e(13).then(n.bind(null,833))})},1917:function(e,t,n){var a=n(109);e.exports=a.default(function(){return n.e(12).then(n.bind(null,834))})},1918:function(e,t,n){var a=n(109);e.exports=a.default(function(){return n.e(4).then(n.bind(null,835))})},1985:function(e,t,n){e.exports=n.p+"assets/logo.b4f75e.png"},1986:function(e,t,n){e.exports=n.p+"assets/p1.2a6deb.png"},1987:function(e,t,n){e.exports=n.p+"assets/p33.016e8b.png"},1988:function(e,t,n){e.exports=n.p+"assets/qrcode.8ab59f.png"},407:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=n(5),u=a(l),r=n(42),o=n(856),c=a(o),f=n(115),i=n(647),d=a(i),s=(0,f.observer)(function(){return u.default.createElement("div",{className:c.default.header},u.default.createElement("img",{className:c.default.logo,src:n(1985)}),u.default.createElement("div",{className:c.default.text,title:"tel"},u.default.createElement("img",{src:n(1987)}),u.default.createElement("span",null,d.default.state.tel1)))}),p=function(){return u.default.createElement("div",{className:c.default.nav},u.default.createElement("div",{className:c.default.center},u.default.createElement(r.Link,{to:"/"},"首页"),u.default.createElement(r.Link,{to:"/about"},"企业基因"),u.default.createElement(r.Link,{to:"/join"},"加盟解读"),u.default.createElement(r.Link,{to:"/strength"},"品牌优势"),u.default.createElement(r.Link,{to:"/foods"},"美食天地"),u.default.createElement(r.Link,{to:"/news"},"新闻中心"),u.default.createElement(r.Link,{to:"/products"},"产品商城"),u.default.createElement(r.Link,{to:"/skills"},"技术培训"),u.default.createElement(r.Link,{to:"/shops"},"店面展示"),u.default.createElement(r.Link,{to:"/contact"},"联系我们")))},m=function(){var e=[{src:"http://www.cqcysh.com/",text:"重庆餐饮商会"},{src:"http://www.cqhgw.cn/",text:"重庆市火锅协会"},{src:"http://18.sj998.com/31760/",text:"商界招商网"},{src:"http://www.dianping.com/",text:"大众点评"},{src:"http://www.jiameng.com/zhouyufu/vip.htm",text:"全球加盟网"}];return u.default.createElement("div",{className:c.default.links},e.map(function(e){return u.default.createElement("a",{href:e.src,key:e.src,target:"_blank"},e.text)}),u.default.createElement(r.Link,{to:"/admin"},"后台管理"))},h=(0,f.observer)(function(){return u.default.createElement("div",{className:c.default.footer},u.default.createElement("div",{className:c.default.center},u.default.createElement("img",{className:c.default.qrcode,src:n(1988)}),u.default.createElement("div",{className:c.default.text},"周渔府微信公众号正式开通了",u.default.createElement("br",null),"欢迎新老朋友在微信平台中订阅",u.default.createElement("br",null),"订阅号：重庆周渔府",u.default.createElement("br",null),"二维码：（用手机直接扫描）",u.default.createElement("br",null)),u.default.createElement("div",{className:c.default.line}),u.default.createElement("div",{className:c.default.text,style:{width:497}},"重庆周渔府餐饮文化有限公司",u.default.createElement("br",null),"公司地址：",d.default.state.address,u.default.createElement("br",null),"加盟热线：",d.default.state.tel1,u.default.createElement("br",null),"服务热线：",d.default.state.tel2," 传真：",d.default.state.fox,u.default.createElement("br",null),"网址：",d.default.state.site," ",u.default.createElement("br",null),"E－mail：",d.default.state.mail,u.default.createElement("br",null))))});t.default=function(){return u.default.createElement("div",null,u.default.createElement(s,null),u.default.createElement(p,null),u.default.createElement("div",{className:c.default.content},u.default.createElement(r.Switch,null,u.default.createElement(r.Route,{exact:!0,path:"/",component:n(1910)}),u.default.createElement(r.Route,{path:"/about",component:n(1907)}),u.default.createElement(r.Route,{path:"/join",component:n(1911)}),u.default.createElement(r.Route,{path:"/strength",component:n(1917)}),u.default.createElement(r.Route,{path:"/foods",component:n(1909)}),u.default.createElement(r.Route,{path:"/login",component:n(1918)}),u.default.createElement(r.Route,{path:"/news/page/:id",component:n(1913)}),u.default.createElement(r.Route,{path:"/news",component:n(1912)}),u.default.createElement(r.Route,{path:"/products",component:n(1914)}),u.default.createElement(r.Route,{path:"/skills",component:n(1916)}),u.default.createElement(r.Route,{path:"/shops",component:n(1915)}),u.default.createElement(r.Route,{path:"/contact",component:n(1908)}),u.default.createElement(r.Route,{component:n(821).default}))),u.default.createElement(m,null),u.default.createElement(h,null))}},647:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function l(e,t,n,a){n&&(0,c.default)(e,t,{enumerable:n.enumerable,configurable:n.configurable,writable:n.writable,value:n.initializer?n.initializer.call(a):void 0})}Object.defineProperty(t,"__esModule",{value:!0});var u,r,o=n(108),c=a(o),f=n(183),i=a(f),d=n(180),s=a(d),p=n(40),m=a(p),h=n(52),x=a(h),b=n(182),v=a(b),E=n(54),g=n(186),w=a(g),k=(u=function(){function e(){(0,m.default)(this,e),l(this,"state",r,this),this.get()}return(0,x.default)(e,[{key:"set",value:function(e){var t=this;return new s.default(function(n){v.default.put("/api/config/meta").send((0,i.default)(e,{token:w.default.state.token})).end(function(){t.state=e,n()})})}},{key:"get",value:function(){var e=this;return new s.default(function(t){v.default.get("/api/config/meta").end(function(n,a){e.state=a.body,t()})})}}]),e}(),r=function(e,t,n,a,l){var u={};return Object.keys(a).forEach(function(e){u[e]=a[e]}),u.enumerable=!!u.enumerable,u.configurable=!!u.configurable,("value"in u||u.initializer)&&(u.writable=!0),u=n.slice().reverse().reduce(function(n,a){return a(e,t,n)||n},u),void 0===u.initializer&&(Object.defineProperty(e,t,u),u=null),u}(u.prototype,"state",[E.observable],{enumerable:!0,initializer:function(){return{}}}),u);t.default=new k},821:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(66),u=a(l),r=n(40),o=a(r),c=n(52),f=a(c),i=n(68),d=a(i),s=n(67),p=a(s),m=n(5),h=a(m),x=function(e){function t(){return(0,o.default)(this,t),(0,d.default)(this,(t.__proto__||(0,u.default)(t)).apply(this,arguments))}return(0,p.default)(t,e),(0,f.default)(t,[{key:"componentWillMount",value:function(){var e=this.props.staticContext;e&&(e.status=404)}},{key:"render",value:function(){return h.default.createElement("h1",null,"对不起，您访问的页面不存在。")}}]),t}(h.default.Component);t.default=x},848:function(e,t,n){t=e.exports=n(404)(),t.push([e.i,".header-6206c9{background:url("+n(1986)+");height:129px;overflow:hidden}.header-6206c9 .logo-75563f{float:left;width:30%;margin-left:13%;margin-top:25px}.header-6206c9 .text-a5637d{float:right;margin:60px 100px 0 0;color:#9d3833;position:relative}.header-6206c9 .text-a5637d span{width:430px;position:absolute;left:140px;top:-1px;font-size:22px;font-weight:700;white-space:nowrap}.nav-2a5838{background:#b81c25}.nav-2a5838 .center-4bc95d{width:1100px;margin:0 auto;list-style:none}.nav-2a5838 a{color:#fff;font-size:18px;font-weight:700;display:inline-block;line-height:70px;padding:0 20px}.nav-2a5838 a:hover{color:#ffa200}.content-384c3e{min-height:500px}.links-2eca48{line-height:53px;background:#72080c;text-align:center}.links-2eca48 a{color:#fff;font-size:14px;padding:0 10px}.footer-c626c9{height:138px;background:#000;color:#fff;font-size:14px}.footer-c626c9 .center-4bc95d{margin:0 auto;width:880px;padding:10px 0}.footer-c626c9 .qrcode-58c484{margin-top:8px;float:left}.footer-c626c9 .text-a5637d{float:left;padding-left:20px;padding-top:8px;line-height:18px}.footer-c626c9 .line-4ef82c{width:1px;height:101px;margin:6px 0 0 30px;background:#fff;float:left}",""]),t.locals={header:"header-6206c9",logo:"logo-75563f",text:"text-a5637d",nav:"nav-2a5838",center:"center-4bc95d",content:"content-384c3e",links:"links-2eca48",footer:"footer-c626c9",qrcode:"qrcode-58c484",line:"line-4ef82c"}},856:function(e,t,n){var a=n(848);"string"==typeof a&&(a=[[e.i,a,""]]),n(405)(a,{}),a.locals&&(e.exports=a.locals)}});