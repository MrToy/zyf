webpackJsonp([9],{1720:function(e,t,a){try{(function(){"use strict";function e(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(0),o=e(n),i=a(1725),s=e(i),l=a(1751),c=e(l);t.default=function(){return o.default.createElement("div",null,o.default.createElement(s.default,null),o.default.createElement("div",{className:c.default.box},o.default.createElement("div",{className:c.default.center},o.default.createElement("img",{src:a(1813)}))))}}).call(this)}finally{}},1723:function(e,t,a){t=e.exports=a(1711)(),t.push([e.i,".carouse-856849{position:relative;height:22vw;min-height:280px;overflow:hidden}.carouse-856849 .item-928a55{position:absolute;z-index:1;opacity:0;-webkit-transition:all .5s ease;transition:all .5s ease;width:100vw;height:22vw;min-width:1300px;min-height:280px}.carouse-856849 .item-928a55.active-4f663a{z-index:3;opacity:1}.carouse-856849 .dots-ac25e2{z-index:10;position:absolute;bottom:20px;right:50px}.carouse-856849 .dots-ac25e2 .dot-6ade78{float:left;margin-right:10px;cursor:pointer;width:16px;height:16px;overflow:hidden;border-radius:8px;background:hsla(0,0%,78%,.8);-webkit-transition:all .1s ease;transition:all .1s ease}.carouse-856849 .dots-ac25e2 .dot-6ade78.active-4f663a{background:#327ff1}",""]),t.locals={carouse:"carouse-856849",item:"item-928a55",active:"active-4f663a",dots:"dots-ac25e2",dot:"dot-6ade78"}},1724:function(e,t,a){var n=a(1723);"string"==typeof n&&(n=[[e.i,n,""]]),a(1712)(n,{}),n.locals&&(e.exports=n.locals)},1725:function(e,t,a){try{(function(){"use strict";function e(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(102),o=e(n),i=a(6),s=e(i),l=a(4),c=e(l),r=a(5),u=e(r),d=a(8),f=e(d),p=a(7),m=e(p),x=a(0),v=e(x),h=a(1724),g=e(h),b=a(395),y=e(b),w=[a(1726),a(1727),a(1728),a(1729),a(1730)],_=function(e){function t(){var e,a,n,o;(0,c.default)(this,t);for(var i=arguments.length,l=Array(i),r=0;r<i;r++)l[r]=arguments[r];return a=n=(0,f.default)(this,(e=t.__proto__||(0,s.default)(t)).call.apply(e,[this].concat(l))),n.state={index:0},o=a,(0,f.default)(n,o)}return(0,m.default)(t,e),(0,u.default)(t,[{key:"componentDidMount",value:function(){var e=this;this.timer=setInterval(function(){var t=e.state.index+1;t>w.length-1&&(t=0),e.setState({index:t})},3e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timer)}},{key:"render",value:function(){var e=this;return v.default.createElement("div",{className:g.default.carouse},w.map(function(t,a){return v.default.createElement("img",{className:(0,y.default)(g.default.item,(0,o.default)({},g.default.active,e.state.index==a)),key:a,src:t})}),v.default.createElement("div",{className:g.default.dots},w.map(function(t,a){return v.default.createElement("i",{className:(0,y.default)(g.default.dot,(0,o.default)({},g.default.active,e.state.index==a)),key:a})})))}}]),t}(v.default.Component);t.default=_}).call(this)}finally{}},1726:function(e,t,a){e.exports=a.p+"assets/c1.b44ccf.jpg"},1727:function(e,t,a){e.exports=a.p+"assets/c2.cb3edc.jpg"},1728:function(e,t,a){e.exports=a.p+"assets/c3.8946d8.jpg"},1729:function(e,t,a){e.exports=a.p+"assets/c4.d73851.jpg"},1730:function(e,t,a){e.exports=a.p+"assets/c5.a31785.jpg"},1746:function(e,t,a){t=e.exports=a(1711)(),t.push([e.i,".box-30a6f5{background:url("+a(1814)+") no-repeat bottom #f8f2dc;padding:20px 0 200px}.box-30a6f5 .center-ec5aca{width:1070px;margin:0 auto;overflow:hidden}.box-30a6f5 .center-ec5aca img{width:100%}",""]),t.locals={box:"box-30a6f5",center:"center-ec5aca"}},1751:function(e,t,a){var n=a(1746);"string"==typeof n&&(n=[[e.i,n,""]]),a(1712)(n,{}),n.locals&&(e.exports=n.locals)},1813:function(e,t,a){e.exports=a.p+"assets/a1.74b39c.png"},1814:function(e,t,a){e.exports=a.p+"assets/p6.e274e7.png"}});