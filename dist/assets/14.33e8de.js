webpackJsonp([14],{687:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,u,r=a(190),f=l(r),i=a(189),c=l(i),o=a(64),d=l(o),s=a(49),m=l(s),p=a(63),h=l(p),v=a(66),b=l(v),E=a(65),x=l(E),g=a(3),T=l(g),_=a(622),y=a(611),C=l(y),S=a(119),k=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t.default=e,t}(S),F=a(69),L=(n=(0,F.connect)(function(e){return{data:e.config}}))(u=function(e){function t(){var e,a,l,n;(0,m.default)(this,t);for(var u=arguments.length,r=Array(u),f=0;f<u;f++)r[f]=arguments[f];return a=l=(0,b.default)(this,(e=t.__proto__||(0,d.default)(t)).call.apply(e,[this].concat(r))),l.state={},n=a,(0,b.default)(l,n)}return(0,x.default)(t,e),(0,h.default)(t,[{key:"componentDidMount",value:function(){this.setState(this.props.data)}},{key:"set",value:function(){function e(){return t.apply(this,arguments)}var t=(0,c.default)(f.default.mark(function e(){return f.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.set(this.state);case 2:alert("保存成功"),this.props.dispatch(k.get());case 4:case"end":return e.stop()}},e,this)}));return e}()},{key:"render",value:function(){var e=this,t=this.state;return T.default.createElement("div",null,T.default.createElement(_.TextField,{floatingLabelText:"公司地址",className:C.default.input,value:t.address||"",onChange:function(t,a){return e.setState({address:a})}}),T.default.createElement("br",null),T.default.createElement(_.TextField,{floatingLabelText:"加盟热线",className:C.default.input,value:t.tel1||"",onChange:function(t,a){return e.setState({tel1:a})}}),T.default.createElement("br",null),T.default.createElement(_.TextField,{floatingLabelText:"服务热线",className:C.default.input,value:t.tel2||"",onChange:function(t,a){return e.setState({tel2:a})}}),T.default.createElement("br",null),T.default.createElement(_.TextField,{floatingLabelText:"传真",className:C.default.input,value:t.fox||"",onChange:function(t,a){return e.setState({fox:a})}}),T.default.createElement("br",null),T.default.createElement(_.TextField,{floatingLabelText:"网址",className:C.default.input,value:t.site||"",onChange:function(t,a){return e.setState({site:a})}}),T.default.createElement("br",null),T.default.createElement(_.TextField,{floatingLabelText:"E－mail",className:C.default.input,value:t.mail||"",onChange:function(t,a){return e.setState({mail:a})}}),T.default.createElement("br",null),T.default.createElement("br",null),T.default.createElement(_.RaisedButton,{onClick:function(){return e.set.call(e)},label:"保存"}),T.default.createElement("br",null))}}]),t}(T.default.Component))||u;t.default=L}});