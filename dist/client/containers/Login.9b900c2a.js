webpackJsonp([20],{636:function(e,t,n){try{(function(){"use strict";function e(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a,l,u=e(n(13)),i=e(n(63)),r=e(n(36)),s=e(n(52)),c=e(n(64)),o=e(n(65)),d=n(10),f=e(d),p=e(n(91)),m=n(92),v=n(66),g=n(138),y=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(872)),_=e(n(212));n(873);var E=(l=a=function(e){function t(){return(0,r.default)(this,t),(0,c.default)(this,(t.__proto__||(0,i.default)(t)).apply(this,arguments))}return(0,o.default)(t,e),(0,s.default)(t,[{key:"componentDidMount",value:function(){console.log(123)}},{key:"render",value:function(){var e=this.props.i18n;return f.default.createElement("div",{className:"login-main"},f.default.createElement("div",{className:"login-mask"},f.default.createElement("div",{className:"background-mask"})),f.default.createElement("div",{className:"center-box-container"},f.default.createElement("section",{className:"box-header signup"},f.default.createElement("header",{className:"signup-header"},e("signup","title")),f.default.createElement("div",{className:"signup-body"},f.default.createElement("div",{className:"signup-avatar"}),f.default.createElement("div",{className:"signup-link"},e("signup","newAccount")),f.default.createElement("div",{className:"signup-tip"},e("signup","tip"),e("signup","userAgreement")))),f.default.createElement("section",{className:"box-body signin"})))}}]),t}(d.Component),a.propTypes={i18n:p.default.func.isRequired},l);t.default=(0,m.connectAdvanced)(function(e){var t={},n=(0,v.bindActionCreators)(y,e);return function(e,a){var l=e.login,i=(0,g.getLang)(e.i18n,"app"),r=(0,u.default)({},a,l,{i18n:i},n);return t=_.default.shallowEqual(t,r)?t:r}})(E)}).call(this)}finally{}},872:function(e,t,n){try{(function(){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.setState=void 0;var e=n(136);t.setState=function(t){return{type:e.LOGIN_MIAN_SET,payload:t}}}).call(this)}finally{}},873:function(e,t){}});