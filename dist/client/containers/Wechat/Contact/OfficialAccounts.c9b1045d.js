webpackJsonp([3],{621:function(e,t,n){try{(function(){"use strict";function e(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r,a,o,i,c=e(n(13)),l=e(n(63)),u=e(n(36)),s=e(n(52)),f=e(n(64)),d=e(n(65)),p=n(10),h=e(p),m=e(n(91)),y=n(92),v=n(66),C=e(n(805)),g=e(n(653)),b=e(n(642)),w=e(n(645)),k=e(n(655)),E=e(n(824)),S=e(n(662)),F=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(215)),_=e(n(669)),x=e(n(212));n(825);var A=(0,g.default)("wechat:contact"),N=(r=(0,E.default)(),(0,S.default)(a=r((i=o=function(e){function t(e){(0,u.default)(this,t);var n=(0,f.default)(this,(t.__proto__||(0,l.default)(t)).call(this,e));return n.onClickOfficialAccount=function(e){return function(){n.props.setState({selectedofficialAccount:e}),n.props.history.push("/wechat/contact/official-account/"+e.wxid)}},n.getStickyContainerCells=function(e){var t=n.props.officialAccounts;return t[e]?t[e].map(function(e){return{left:h.default.createElement("img",{src:e.headerUrl}),center:h.default.createElement("p",null,e.name),onClick:n.onClickOfficialAccount(e)}}):[]},n.state={fontSize:"16"},A("official accounts letters:",e.letters),A("official accounts letters total:",e.total),n.checkIsSubRoute=n.checkIsSubRoute.bind(n),n.triggerStickyAnchorLetter=n.triggerStickyAnchorLetter.bind(n),n.onClickAnchorLetter=n.onClickAnchorLetter.bind(n),n.redrawStickyAnchorLetter=n.redrawStickyAnchorLetter.bind(n),n.renderLetterStickyContainer=n.renderLetterStickyContainer.bind(n),n.renderStickyAnchor=n.renderStickyAnchor.bind(n),n.renderStickyStatistics=n.renderStickyStatistics.bind(n),n}return(0,d.default)(t,e),(0,s.default)(t,[{key:"componentDidMount",value:function(){this.props.officialAccounts||this.props.fetchOfficialAccounts();var e=(_.default.getElementStyle(document.documentElement,"font-size")||"16px").replace("px","");this.setState({fontSize:e}),this.throttleRedrawStickyAnchorLetter=(0,C.default)(this.redrawStickyAnchorLetter,16.7),window.addEventListener("scroll",this.throttleRedrawStickyAnchorLetter,!1)}},{key:"componentWillUnmount",value:function(){this.throttleRedrawStickyAnchorLetter&&(window.removeEventListener("scroll",this.throttleRedrawStickyAnchorLetter,!1),this.throttleRedrawStickyAnchorLetter=!1)}},{key:"render",value:function(){var e=this;return this.props.officialAccounts?h.default.createElement("div",{className:"contact-official-accounts-wrapper",ref:function(t){return e.officialAccountsWrapper=t}},h.default.createElement(b.default,{title:"公众号",back:h.default.createElement(w.default,{history:this.props.history},h.default.createElement("span",{className:"weui-back-centent"},"通讯录"))},h.default.createElement("i",{className:"icon-header-operation iconfont icon-tips-jia"})),h.default.createElement(k.default,null),this.renderLetterStickyContainer(),this.renderStickyStatistics("个公众号"),this.renderStickyAnchor()):null}}]),t}(p.Component),o.propTypes={officialAccounts:m.default.object,letters:m.default.array.isRequired,total:m.default.number.isRequired,fetchOfficialAccounts:m.default.func.isRequired},a=i))||a)||a);t.default=(0,y.connectAdvanced)(function(e){var t={},n=(0,v.bindActionCreators)(F,e);return function(e,r){var a=e.wechat.contactMain,o=void 0===a?{}:a,i=o.selectedContacter,l=o.officialAccountsLetters,u=o.officialAccountsGroups,s=o.officialAccounts,f=s?s.length:0,d=(0,c.default)({},r,{officialAccounts:u,letters:l,total:f,selectedContacter:i},n);return t=x.default.shallowEqual(t,d)?t:d}})(N)}).call(this)}finally{}},642:function(e,t,n){try{(function(){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var e=function(e){return e&&e.__esModule?e:{default:e}}(n(10));n(643);t.default=function(t){return e.default.createElement("section",{className:"weui-header"},e.default.createElement("div",{className:"weui-header-back"},t.back&&t.back),e.default.createElement("div",{className:"weui-header-title"},t.title),e.default.createElement("div",{className:"weui-header-operation"},t.children))}}).call(this)}finally{}},643:function(e,t){},644:function(e,t,n){e.exports=n(1)(340)},645:function(e,t,n){try{(function(){"use strict";function e(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=e(n(63)),a=e(n(36)),o=e(n(52)),i=e(n(64)),c=e(n(65)),l=n(10),u=e(l);n(646);var s=function(e){function t(){var e,n,o,c;(0,a.default)(this,t);for(var l=arguments.length,u=Array(l),s=0;s<l;s++)u[s]=arguments[s];return n=o=(0,i.default)(this,(e=t.__proto__||(0,r.default)(t)).call.apply(e,[this].concat(u))),o.onClickBack=function(){o.props.history.goBack()},c=n,(0,i.default)(o,c)}return(0,c.default)(t,e),(0,o.default)(t,[{key:"render",value:function(){return u.default.createElement("div",{className:"weui-back iconfont icon-return-arrow",onClick:this.onClickBack},this.props.children&&this.props.children)}}]),t}(l.Component);t.default=s}).call(this)}finally{}},646:function(e,t){},647:function(e,t,n){try{(function(){"use strict";function e(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=e(n(13)),a=e(n(10)),o=e(n(648));n(650);t.default=function(e){return a.default.createElement("div",{className:"weui-cells"},e.cells&&e.cells.map(function(e,t){return a.default.createElement(o.default,(0,r.default)({key:t},e))}))}}).call(this)}finally{}},648:function(e,t,n){try{(function(){"use strict";function e(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=e(n(13)),a=e(n(644)),o=e(n(10)),i=n(37),c=e(n(210));n(649);var l=function(e){return o.default.createElement("div",{className:"weui-cell-hd"},e.left&&e.left)},u=function(e){return o.default.createElement("div",{className:"weui-cell-bd"},e.center)},s=function(e){return o.default.createElement("div",{className:"weui-cell-ft"},e.right&&e.right)};t.default=function(e){var t=(0,a.default)({},e.className,!!e.className);if(e.link)return o.default.createElement(i.Link,{to:e.link||"",className:(0,c.default)("weui-cell clickable",t)},o.default.createElement(l,{left:e.left}),o.default.createElement(u,{center:e.center}),o.default.createElement(s,{right:e.right}));var n={};return e.onClick&&(n.onClick=e.onClick,t.clickable=!0),o.default.createElement("div",(0,r.default)({},n,{className:(0,c.default)("weui-cell",t)}),o.default.createElement(l,{left:e.left}),o.default.createElement(u,{center:e.center}),o.default.createElement(s,{right:e.right}))}}).call(this)}finally{}},649:function(e,t){},650:function(e,t){},651:function(e,t,n){(function(t){var n,r=t.crypto||t.msCrypto;if(r&&r.getRandomValues){var a=new Uint8Array(16);n=function(){return r.getRandomValues(a),a}}if(!n){var o=new Array(16);n=function(){for(var e,t=0;t<16;t++)0==(3&t)&&(e=4294967296*Math.random()),o[t]=e>>>((3&t)<<3)&255;return o}}e.exports=n}).call(t,n(93))},652:function(e,t){for(var n=[],r=0;r<256;++r)n[r]=(r+256).toString(16).substr(1);e.exports=function(e,t){var r=t||0,a=n;return a[e[r++]]+a[e[r++]]+a[e[r++]]+a[e[r++]]+"-"+a[e[r++]]+a[e[r++]]+"-"+a[e[r++]]+a[e[r++]]+"-"+a[e[r++]]+a[e[r++]]+"-"+a[e[r++]]+a[e[r++]]+a[e[r++]]+a[e[r++]]+a[e[r++]]+a[e[r++]]}},653:function(e,t,n){(function(r){function a(){var e;try{e=t.storage.debug}catch(e){}return!e&&void 0!==r&&"env"in r&&(e=r.env.DEBUG),e}(t=e.exports=n(660)).log=function(){return"object"==typeof console&&console.log&&Function.prototype.apply.call(console.log,console,arguments)},t.formatArgs=function(e){var n=this.useColors;if(e[0]=(n?"%c":"")+this.namespace+(n?" %c":" ")+e[0]+(n?"%c ":" ")+"+"+t.humanize(this.diff),n){var r="color: "+this.color;e.splice(1,0,r,"color: inherit");var a=0,o=0;e[0].replace(/%[a-zA-Z%]/g,function(e){"%%"!==e&&(a++,"%c"===e&&(o=a))}),e.splice(o,0,r)}},t.save=function(e){try{null==e?t.storage.removeItem("debug"):t.storage.debug=e}catch(e){}},t.load=a,t.useColors=function(){return!("undefined"==typeof window||!window.process||"renderer"!==window.process.type)||("undefined"==typeof navigator||!navigator.userAgent||!navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/))&&("undefined"!=typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||"undefined"!=typeof window&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/))},t.storage="undefined"!=typeof chrome&&void 0!==chrome.storage?chrome.storage.local:function(){try{return window.localStorage}catch(e){}}(),t.colors=["#0000CC","#0000FF","#0033CC","#0033FF","#0066CC","#0066FF","#0099CC","#0099FF","#00CC00","#00CC33","#00CC66","#00CC99","#00CCCC","#00CCFF","#3300CC","#3300FF","#3333CC","#3333FF","#3366CC","#3366FF","#3399CC","#3399FF","#33CC00","#33CC33","#33CC66","#33CC99","#33CCCC","#33CCFF","#6600CC","#6600FF","#6633CC","#6633FF","#66CC00","#66CC33","#9900CC","#9900FF","#9933CC","#9933FF","#99CC00","#99CC33","#CC0000","#CC0033","#CC0066","#CC0099","#CC00CC","#CC00FF","#CC3300","#CC3333","#CC3366","#CC3399","#CC33CC","#CC33FF","#CC6600","#CC6633","#CC9900","#CC9933","#CCCC00","#CCCC33","#FF0000","#FF0033","#FF0066","#FF0099","#FF00CC","#FF00FF","#FF3300","#FF3333","#FF3366","#FF3399","#FF33CC","#FF33FF","#FF6600","#FF6633","#FF9900","#FF9933","#FFCC00","#FFCC33"],t.formatters.j=function(e){try{return JSON.stringify(e)}catch(e){return"[UnexpectedJSONParseError]: "+e.message}},t.enable(a())}).call(t,n(211))},654:function(e,t,n){var r=n(651),a=n(652),o=r(),i=[1|o[0],o[1],o[2],o[3],o[4],o[5]],c=16383&(o[6]<<8|o[7]),l=0,u=0;e.exports=function(e,t,n){var r=t&&n||0,o=t||[],s=void 0!==(e=e||{}).clockseq?e.clockseq:c,f=void 0!==e.msecs?e.msecs:(new Date).getTime(),d=void 0!==e.nsecs?e.nsecs:u+1,p=f-l+(d-u)/1e4;if(p<0&&void 0===e.clockseq&&(s=s+1&16383),(p<0||f>l)&&void 0===e.nsecs&&(d=0),d>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");l=f,u=d,c=s;var h=(1e4*(268435455&(f+=122192928e5))+d)%4294967296;o[r++]=h>>>24&255,o[r++]=h>>>16&255,o[r++]=h>>>8&255,o[r++]=255&h;var m=f/4294967296*1e4&268435455;o[r++]=m>>>8&255,o[r++]=255&m,o[r++]=m>>>24&15|16,o[r++]=m>>>16&255,o[r++]=s>>>8|128,o[r++]=255&s;for(var y=e.node||i,v=0;v<6;++v)o[r+v]=y[v];return t||a(o)}},655:function(e,t,n){try{(function(){"use strict";function e(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r,a,o,i=e(n(644)),c=e(n(63)),l=e(n(36)),u=e(n(52)),s=e(n(64)),f=e(n(65)),d=n(10),p=e(d),h=e(n(91)),m=e(n(210)),y=e(n(656)),v=e(n(658));n(659);var C=(0,v.default)((o=a=function(e){function t(e){var n;(0,l.default)(this,t);var r=(0,s.default)(this,(t.__proto__||(0,c.default)(t)).call(this,e));r.handleFocusInput=function(){r.setState({focusing:!0})},r.handleBlurInput=function(){""===r.state[r.state.searchKey]&&r.setState({focusing:!1})},r.handleCancelInput=function(){r.setState((0,i.default)({focusing:!1},r.state.searchKey,"")),r.props.onChange()&&r.props.onChange(""),r.props.onCancel&&r.props.onCancel()},r.handleSubmitBar=function(e){r.props.onSubmit&&(e&&(e.preventDefault(),e.stopPropagation()),r.props.onSubmit(r.state[r.state.searchKey],e))};var a=(0,y.default)()+"-search-text";return r.state=(n={focusing:!!e.defaultValue,clearing:!!e.defaultValue},(0,i.default)(n,a,e.defaultValue),(0,i.default)(n,"searchKey",a),n),r.handleChangeInput=r.handleChangeInput.bind(r),r}return(0,f.default)(t,e),(0,u.default)(t,[{key:"render",value:function(){var e=this,t=this.props.placeholder,n=this.state.searchKey;return p.default.createElement("div",{className:(0,m.default)("weui-search-bar",{focusing:this.state.focusing})},p.default.createElement("form",{className:"search-form",onSubmit:this.handleSubmitBar},p.default.createElement("div",{className:"search-form-box"},p.default.createElement("input",{id:n,type:"text",className:"search-input",name:n,placeholder:t,value:this.state[n],rel:function(t){return e.searchTextInput=t},onChange:this.handleChangeInput,onFocus:this.handleFocusInput,onBlur:this.handleBlurInput,autoComplete:"off"}),p.default.createElement("i",{className:"iconfont icon-search"})),p.default.createElement("label",{className:"search-form-label",htmlFor:n},p.default.createElement("i",{className:"iconfont icon-search"}),p.default.createElement("span",{className:"label-content"},t))),p.default.createElement("a",{className:"btn-cancel",onClick:this.handleCancelInput},"取消"))}}]),t}(d.Component),a.propTypes={placeholder:h.default.string,defaultValue:h.default.string,onCancel:h.default.func,onChange:h.default.func,onSubmit:h.default.func},a.defaultProps={placeholder:"搜索",defaultValue:"",onCancel:function(){},onChange:function(){},onSubmit:function(){}},r=o))||r;t.default=C}).call(this)}finally{}},656:function(e,t,n){var r=n(654),a=n(657),o=a;o.v1=r,o.v4=a,e.exports=o},657:function(e,t,n){var r=n(651),a=n(652);e.exports=function(e,t,n){var o=t&&n||0;"string"==typeof e&&(t="binary"==e?new Array(16):null,e=null);var i=(e=e||{}).random||(e.rng||r)();if(i[6]=15&i[6]|64,i[8]=63&i[8]|128,t)for(var c=0;c<16;++c)t[o+c]=i[c];return t||a(i)}},658:function(e,t,n){try{(function(){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var e=function(e){return e&&e.__esModule?e:{default:e}}(n(644));t.default=function(t){t.prototype.handleChangeInput=function(t){var n=t.target.name,r=t.target.value;this.props.onChangeValue&&this.props.onChangeValue(r,t),this.setState((0,e.default)({},n,r))}}}).call(this)}finally{}},659:function(e,t){},660:function(e,t,n){function r(e){var n,r=0;for(n in e)r=(r<<5)-r+e.charCodeAt(n),r|=0;return t.colors[Math.abs(r)%t.colors.length]}function a(e){function n(){if(n.enabled){var e=n,r=+new Date,o=r-(a||r);e.diff=o,e.prev=a,e.curr=r,a=r;for(var i=new Array(arguments.length),c=0;c<i.length;c++)i[c]=arguments[c];i[0]=t.coerce(i[0]),"string"!=typeof i[0]&&i.unshift("%O");var l=0;i[0]=i[0].replace(/%([a-zA-Z%])/g,function(n,r){if("%%"===n)return n;l++;var a=t.formatters[r];if("function"==typeof a){var o=i[l];n=a.call(e,o),i.splice(l,1),l--}return n}),t.formatArgs.call(e,i),(n.log||t.log||console.log.bind(console)).apply(e,i)}}var a;return n.namespace=e,n.enabled=t.enabled(e),n.useColors=t.useColors(),n.color=r(e),n.destroy=o,"function"==typeof t.init&&t.init(n),t.instances.push(n),n}function o(){var e=t.instances.indexOf(this);return-1!==e&&(t.instances.splice(e,1),!0)}(t=e.exports=a.debug=a.default=a).coerce=function(e){return e instanceof Error?e.stack||e.message:e},t.disable=function(){t.enable("")},t.enable=function(e){t.save(e),t.names=[],t.skips=[];var n,r=("string"==typeof e?e:"").split(/[\s,]+/),a=r.length;for(n=0;n<a;n++)r[n]&&("-"===(e=r[n].replace(/\*/g,".*?"))[0]?t.skips.push(new RegExp("^"+e.substr(1)+"$")):t.names.push(new RegExp("^"+e+"$")));for(n=0;n<t.instances.length;n++){var o=t.instances[n];o.enabled=t.enabled(o.namespace)}},t.enabled=function(e){if("*"===e[e.length-1])return!0;var n,r;for(n=0,r=t.skips.length;n<r;n++)if(t.skips[n].test(e))return!1;for(n=0,r=t.names.length;n<r;n++)if(t.names[n].test(e))return!0;return!1},t.humanize=n(661),t.instances=[],t.names=[],t.skips=[],t.formatters={}},661:function(e,t){function n(e){if(!((e=String(e)).length>100)){var t=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);if(t){var n=parseFloat(t[1]);switch((t[2]||"ms").toLowerCase()){case"years":case"year":case"yrs":case"yr":case"y":return n*s;case"days":case"day":case"d":return n*u;case"hours":case"hour":case"hrs":case"hr":case"h":return n*l;case"minutes":case"minute":case"mins":case"min":case"m":return n*c;case"seconds":case"second":case"secs":case"sec":case"s":return n*i;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return n;default:return}}}}function r(e){return e>=u?Math.round(e/u)+"d":e>=l?Math.round(e/l)+"h":e>=c?Math.round(e/c)+"m":e>=i?Math.round(e/i)+"s":e+"ms"}function a(e){return o(e,u,"day")||o(e,l,"hour")||o(e,c,"minute")||o(e,i,"second")||e+" ms"}function o(e,t,n){if(!(e<t))return e<1.5*t?Math.floor(e/t)+" "+n:Math.ceil(e/t)+" "+n+"s"}var i=1e3,c=60*i,l=60*c,u=24*l,s=365.25*u;e.exports=function(e,t){t=t||{};var o=typeof e;if("string"===o&&e.length>0)return n(e);if("number"===o&&!1===isNaN(e))return t.long?a(e):r(e);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(e))}},662:function(e,t,n){try{(function(){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){e.prototype.checkIsSubRoute=function(){return this.props.location.pathname!==this.props.match.path}}}).call(this)}finally{}},669:function(e,t,n){try{(function(){"use strict";function e(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=e(n(216)),a=e(n(36)),o=e(n(52)),i=function(){function e(){(0,a.default)(this,e)}return(0,o.default)(e,null,[{key:"getBodySize",value:function(){if("BackCompat"===document.compatMode){var e=document.body;return{width:Math.max(e.clientWidth,e.scrollWidth),height:Math.max(e.clientHeight,e.scrollHeight)}}var t=document.documentElement;return{width:Math.max(t.clientWidth,t.scrollWidth),height:Math.max(t.clientHeight,t.scrollHeight)}}},{key:"getElementSize",value:function(e){return{width:Math.max(e.clientWidth,e.scrollWidth),height:Math.max(e.clientHeight,e.scrollHeight)}}},{key:"getElementAbsolutePosition",value:function(e){for(var t=e.offsetLeft,n=e.offsetTop,r=e.offsetParent;r;)t+=r.offsetLeft,n+=r.offsetTop,r=r.offsetParent;return{left:t,top:n}}},{key:"getElementRelativePosition",value:function(t){var n=e.getElementAbsolutePosition(t),r=0,a=0;if("BackCompat"===document.compatMode){var o=document.body;r=o.scrollLeft,a=o.scrollTop}else{var i=document.documentElement;r=i.scrollLeft,a=i.scrollTop}return{left:n.left-r,top:n.top-a}}},{key:"setElementStyle",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};for(var n in t)({}).hasOwnProperty.call(t,n)&&(e.style[n]=t[n])}},{key:"getElementStyle",value:function(e,t){return e[t]?e.style[t]:e.currentStyle?e.currentStyle[t]:document.defaultView&&document.defaultView.getComputedStyle?(t=t.replace(/([A-Z])/g,"-$1").toLowerCase(),document.defaultView.getComputedStyle(e,null).getPropertyValue(t)):null}},{key:"isChildOf",value:function(t,n){return t.parentNode===n||null!==t.parentNode&&e.isChildOf(t.parentNode,n)}},{key:"hasClassName",value:function(e,t){return-1!==e.className.indexOf(t)}},{key:"addClassName",value:function(e,t){var n=e.className;-1===n.indexOf(t)&&(e.className=n+" "+t)}},{key:"removeClassName",value:function(e,t){var n=e.className;if(-1!==n.indexOf(t)){var r=new RegExp(t,"g");e.className=n.replace(r,"").replace(/(^\s*)|(\s*$)/g,"")}}},{key:"changeModalVisibilityChenckBodyOverflow",value:function(t){var n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],a=document.getElementsByClassName("html-body");a&&a.length&&(n?e.addClassName(a[0],"overflow-hidden"):[].concat((0,r.default)(document.getElementsByClassName("el-dialog__wrapper")||[]),(0,r.default)(document.getElementsByClassName("hk-preview")||[])).some(function(n){return t!==n&&"none"!==e.getElementStyle(n,"display")})||e.removeClassName(a[0],"overflow-hidden"))}}]),e}();t.default=i}).call(this)}finally{}},673:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.StickyContainer=t.Sticky=void 0;var a=r(n(674)),o=r(n(675));t.Sticky=a.default,t.StickyContainer=o.default,t.default=a.default},674:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(10),u=r(l),s=r(n(213)),f=r(n(91)),d=function(e){function t(){var e,n,r,i;a(this,t);for(var c=arguments.length,l=Array(c),u=0;u<c;u++)l[u]=arguments[u];return n=r=o(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(l))),r.state={isSticky:!1,wasSticky:!1,style:{}},r.handleContainerEvent=function(e){var t=e.distanceFromTop,n=e.distanceFromBottom,a=e.eventSource,o=r.context.getParent(),i=!1;r.props.relative&&(i=a!==o,t=-(a.scrollTop+a.offsetTop)+r.placeholder.offsetTop);var c=r.placeholder.getBoundingClientRect(),l=r.content.getBoundingClientRect().height,u=n-r.props.bottomOffset-l,s=!!r.state.isSticky,f=i?s:t<=-r.props.topOffset&&n>-r.props.bottomOffset;n=(r.props.relative?o.scrollHeight-o.scrollTop:n)-l;var d=f?{position:"fixed",top:u>0?r.props.relative?o.offsetTop-o.offsetParent.scrollTop:0:u,left:c.left,width:c.width}:{};r.props.disableHardwareAcceleration||(d.transform="translateZ(0)"),r.setState({isSticky:f,wasSticky:s,distanceFromTop:t,distanceFromBottom:n,calculatedHeight:l,style:d})},i=n,o(r,i)}return i(t,l.Component),c(t,[{key:"componentWillMount",value:function(){if(!this.context.subscribe)throw new TypeError("Expected Sticky to be mounted within StickyContainer");this.context.subscribe(this.handleContainerEvent)}},{key:"componentWillUnmount",value:function(){this.context.unsubscribe(this.handleContainerEvent)}},{key:"componentDidUpdate",value:function(){this.placeholder.style.paddingBottom=this.props.disableCompensation?0:(this.state.isSticky?this.state.calculatedHeight:0)+"px"}},{key:"render",value:function(){var e=this,t=u.default.cloneElement(this.props.children({isSticky:this.state.isSticky,wasSticky:this.state.wasSticky,distanceFromTop:this.state.distanceFromTop,distanceFromBottom:this.state.distanceFromBottom,calculatedHeight:this.state.calculatedHeight,style:this.state.style}),{ref:function(t){e.content=s.default.findDOMNode(t)}});return u.default.createElement("div",null,u.default.createElement("div",{ref:function(t){return e.placeholder=t}}),t)}}]),t}();d.propTypes={topOffset:f.default.number,bottomOffset:f.default.number,relative:f.default.bool,children:f.default.func.isRequired},d.defaultProps={relative:!1,topOffset:0,bottomOffset:0,disableCompensation:!1,disableHardwareAcceleration:!1},d.contextTypes={subscribe:f.default.func,unsubscribe:f.default.func,getParent:f.default.func},t.default=d},675:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(10),s=r(u),f=r(n(91)),d=r(n(676)),p=function(e){function t(){var e,n,r,i;a(this,t);for(var c=arguments.length,l=Array(c),u=0;u<c;u++)l[u]=arguments[u];return n=r=o(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(l))),r.events=["resize","scroll","touchstart","touchmove","touchend","pageshow","load"],r.subscribers=[],r.subscribe=function(e){r.subscribers=r.subscribers.concat(e)},r.unsubscribe=function(e){r.subscribers=r.subscribers.filter(function(t){return t!==e})},r.notifySubscribers=function(e){if(!r.framePending){var t=e.currentTarget;(0,d.default)(function(){r.framePending=!1;var e=r.node.getBoundingClientRect(),n=e.top,a=e.bottom;r.subscribers.forEach(function(e){return e({distanceFromTop:n,distanceFromBottom:a,eventSource:t===window?document.body:r.node})})}),r.framePending=!0}},r.getParent=function(){return r.node},i=n,o(r,i)}return i(t,u.PureComponent),l(t,[{key:"getChildContext",value:function(){return{subscribe:this.subscribe,unsubscribe:this.unsubscribe,getParent:this.getParent}}},{key:"componentDidMount",value:function(){var e=this;this.events.forEach(function(t){return window.addEventListener(t,e.notifySubscribers)})}},{key:"componentWillUnmount",value:function(){var e=this;this.events.forEach(function(t){return window.removeEventListener(t,e.notifySubscribers)})}},{key:"render",value:function(){var e=this;return s.default.createElement("div",c({},this.props,{ref:function(t){return e.node=t},onScroll:this.notifySubscribers,onTouchStart:this.notifySubscribers,onTouchMove:this.notifySubscribers,onTouchEnd:this.notifySubscribers}))}}]),t}();p.childContextTypes={subscribe:f.default.func,unsubscribe:f.default.func,getParent:f.default.func},t.default=p},676:function(e,t,n){(function(t){for(var r=n(677),a="undefined"==typeof window?t:window,o=["moz","webkit"],i="AnimationFrame",c=a["request"+i],l=a["cancel"+i]||a["cancelRequest"+i],u=0;!c&&u<o.length;u++)c=a[o[u]+"Request"+i],l=a[o[u]+"Cancel"+i]||a[o[u]+"CancelRequest"+i];if(!c||!l){var s=0,f=0,d=[];c=function(e){if(0===d.length){var t=r(),n=Math.max(0,1e3/60-(t-s));s=n+t,setTimeout(function(){var e=d.slice(0);d.length=0;for(var t=0;t<e.length;t++)if(!e[t].cancelled)try{e[t].callback(s)}catch(e){setTimeout(function(){throw e},0)}},Math.round(n))}return d.push({handle:++f,callback:e,cancelled:!1}),f},l=function(e){for(var t=0;t<d.length;t++)d[t].handle===e&&(d[t].cancelled=!0)}}e.exports=function(e){return c.call(a,e)},e.exports.cancel=function(){l.apply(a,arguments)},e.exports.polyfill=function(){a.requestAnimationFrame=c,a.cancelAnimationFrame=l}}).call(t,n(93))},677:function(e,t,n){(function(t){(function(){var n,r,a,o,i,c;"undefined"!=typeof performance&&null!==performance&&performance.now?e.exports=function(){return performance.now()}:void 0!==t&&null!==t&&t.hrtime?(e.exports=function(){return(n()-i)/1e6},r=t.hrtime,o=(n=function(){var e;return 1e9*(e=r())[0]+e[1]})(),c=1e9*t.uptime(),i=o-c):Date.now?(e.exports=function(){return Date.now()-a},a=Date.now()):(e.exports=function(){return(new Date).getTime()-a},a=(new Date).getTime())}).call(this)}).call(t,n(211))},805:function(e,t,n){var r=n(806),a=n(67),o="Expected a function";e.exports=function(e,t,n){var i=!0,c=!0;if("function"!=typeof e)throw new TypeError(o);return a(n)&&(i="leading"in n?!!n.leading:i,c="trailing"in n?!!n.trailing:c),r(e,t,{leading:i,maxWait:t,trailing:c})}},806:function(e,t,n){var r=n(67),a=n(807),o=n(808),i="Expected a function",c=Math.max,l=Math.min;e.exports=function(e,t,n){function u(t){var n=y,r=v;return y=v=void 0,k=t,g=e.apply(r,n)}function s(e){return k=e,b=setTimeout(p,t),E?u(e):g}function f(e){var n=e-k,r=t-(e-w);return S?l(r,C-n):r}function d(e){var n=e-w,r=e-k;return void 0===w||n>=t||n<0||S&&r>=C}function p(){var e=a();if(d(e))return h(e);b=setTimeout(p,f(e))}function h(e){return b=void 0,F&&y?u(e):(y=v=void 0,g)}function m(){var e=a(),n=d(e);if(y=arguments,v=this,w=e,n){if(void 0===b)return s(w);if(S)return b=setTimeout(p,t),u(w)}return void 0===b&&(b=setTimeout(p,t)),g}var y,v,C,g,b,w,k=0,E=!1,S=!1,F=!0;if("function"!=typeof e)throw new TypeError(i);return t=o(t)||0,r(n)&&(E=!!n.leading,C=(S="maxWait"in n)?c(o(n.maxWait)||0,t):C,F="trailing"in n?!!n.trailing:F),m.cancel=function(){void 0!==b&&clearTimeout(b),k=0,y=w=v=b=void 0},m.flush=function(){return void 0===b?g:h(a())},m}},807:function(e,t,n){var r=n(31);e.exports=function(){return r.Date.now()}},808:function(e,t,n){var r=n(67),a=n(68),o=NaN,i=/^\s+|\s+$/g,c=/^[-+]0x[0-9a-f]+$/i,l=/^0b[01]+$/i,u=/^0o[0-7]+$/i,s=parseInt;e.exports=function(e){if("number"==typeof e)return e;if(a(e))return o;if(r(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=r(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var n=l.test(e);return n||u.test(e)?s(e.slice(2),n?2:8):c.test(e)?o:+e}},824:function(e,t,n){try{(function(){"use strict";function e(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=e(n(13)),a=e(n(214)),o=e(n(10)),i=n(673),c=e(n(210)),l=e(n(654)),u=e(n(647)),s=n(135),f=e(n(669));t.default=function(e){var t=(e=e||(0,l.default)())+"-alpha%s";return function(e){e.prototype.onClickAnchorLetter=function(e){var n=this;return function(r){var a=document.getElementById(t.replace("%s",e));a&&Math.abs(a.offsetTop-s.HEADER_HEIGHT*n.state.fontSize)>=5&&window.scrollTo(0,a.offsetTop),r.stopPropagation()}},e.prototype.redrawStickyAnchorLetter=function(){if(!this.checkIsSubRoute()){var e=this.officialAccountsWrapper||document,t=e.getElementsByClassName("sticky"),n=t.length,r=void 0;t.length&&(r=t[n-1].getAttribute("data-alpha"));var o=e.getElementsByClassName("letter-anchor"),i=!0,c=!1,l=void 0;try{for(var u,s=(0,a.default)(o);!(i=(u=s.next()).done);i=!0){var d=u.value;f.default.hasClassName(d,"anchor-sticky")&&d.innerText!==r&&f.default.removeClassName(d,"anchor-sticky"),d.innerText===r&&f.default.addClassName(d,"anchor-sticky")}}catch(e){c=!0,l=e}finally{try{!i&&s.return&&s.return()}finally{if(c)throw l}}}},e.prototype.triggerStickyAnchorLetter=function(e){var t=(this.officialAccountsWrapper||document).getElementsByClassName("letter-anchor"),n=!0,r=!1,o=void 0;try{for(var i,c=(0,a.default)(t);!(n=(i=c.next()).done);n=!0){var l=i.value;f.default.hasClassName(l,"anchor-sticky")&&l.innerText!==e&&f.default.removeClassName(l,"anchor-sticky"),l.innerText===e&&f.default.addClassName(l,"anchor-sticky")}}catch(e){r=!0,o=e}finally{try{!n&&c.return&&c.return()}finally{if(r)throw o}}},e.prototype.renderLetterStickyContainer=function(){var e=this,n=this.props.letters,a=this.state.fontSize||16;return o.default.createElement("ul",{className:"contact-frineds"},n.map(function(n,l){return o.default.createElement(i.StickyContainer,{className:"contact-friends-group",key:l},o.default.createElement(i.Sticky,{topOffset:-((s.HEADER_HEIGHT+.56)*a-2)},function(i){var l=i.isSticky,u=i.style;return l&&e.stickyLetter!==n&&(e.triggerStickyAnchorLetter(n),e.stickyLetter=n),o.default.createElement("p",{id:t.replace("%s",n),"data-alpha":n,className:(0,c.default)("contact-alpha",{sticky:l}),style:(0,r.default)({},u,{top:s.HEADER_HEIGHT*a-2})},n)}),o.default.createElement(u.default,{cells:e.getStickyContainerCells(n)}))}))},e.prototype.renderStickyAnchor=function(){var e=this,t=this.props.letters;return o.default.createElement("ul",{className:"anchor-bar"},t.map(function(t,n){return o.default.createElement("li",{className:(0,c.default)("letter-anchor","letter-anchor-"+t),key:n,onClick:e.onClickAnchorLetter(t)},t)}))},e.prototype.renderStickyStatistics=function(e){var t=this.props.total;return o.default.createElement("p",{className:"contact-statistics"},""+t+e)}}}}).call(this)}finally{}},825:function(e,t){}});