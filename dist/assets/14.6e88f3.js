webpackJsonp([14],{1737:function(e,t,l){try{(function(){"use strict";function e(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=l(3),n=e(a),u=l(606),r=l(595),f=e(r),i=l(185),c=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&(t[l]=e[l]);return t.default=e,t}(i),d=l(66);t.default=(0,d.connect)(function(e){return{data:e.config}})(function(e){var t=e.data;return n.default.createElement("div",null,n.default.createElement(u.TextField,{floatingLabelText:"公司地址",className:f.default.input,value:t.address||"",onChange:function(e,t){return c.set("address",t)}}),n.default.createElement("br",null),n.default.createElement(u.TextField,{floatingLabelText:"加盟热线",className:f.default.input,value:t.tel1||"",onChange:function(e,t){return c.set("tel1",t)}}),n.default.createElement("br",null),n.default.createElement(u.TextField,{floatingLabelText:"服务热线",className:f.default.input,value:t.tel2||"",onChange:function(e,t){return c.set("tel2",t)}}),n.default.createElement("br",null),n.default.createElement(u.TextField,{floatingLabelText:"传真",className:f.default.input,value:t.fox||"",onChange:function(e,t){return c.set("fox",t)}}),n.default.createElement("br",null),n.default.createElement(u.TextField,{floatingLabelText:"网址",className:f.default.input,value:t.site||"",onChange:function(e,t){return c.set("site",t)}}),n.default.createElement("br",null),n.default.createElement(u.TextField,{floatingLabelText:"E－mail",className:f.default.input,value:t.mail||"",onChange:function(e,t){return c.set("mail",t)}}),n.default.createElement("br",null))})}).call(this)}finally{}}});