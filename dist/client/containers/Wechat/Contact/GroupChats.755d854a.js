webpackJsonp([7],{631:function(e,t,n){try{(function(){"use strict";function e(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r,u,l=a(n(680)),o=a(n(12)),c=a(n(66)),s=a(n(35)),i=a(n(51)),f=a(n(67)),d=a(n(68)),p=n(10),h=a(p),m=a(n(94)),C=n(95),v=n(69),g=a(n(659)),y=a(n(231)),F=a(n(655)),b=a(n(657)),w=a(n(674)),E=a(n(660)),_=a(n(826)),k=e(n(234)),N=e(n(232));n(842);var M=(0,g.default)("wechat:contact"),x=(u=r=function(e){function t(e){(0,s.default)(this,t);var n=(0,f.default)(this,(t.__proto__||(0,c.default)(t)).call(this,e));return n.renderChatGroupsCells=function(){var e=n.props.groupChats.map(function(e){return{left:h.default.createElement(_.default,{images:e.headerImages}),center:h.default.createElement("p",null,e.name),link:"/wechat/chat/dialogue/"+e.mid}});return h.default.createElement(E.default,{cells:e})},M("GroupChats page init props:",e),M("GroupChats page props setState function",e.setState),n}return(0,d.default)(t,e),(0,i.default)(t,[{key:"render",value:function(){var e=this.props.total;return h.default.createElement("div",{className:"contact-group-chats-wrapper"},h.default.createElement(F.default,{title:"群聊",back:h.default.createElement(b.default,{history:this.props.history},h.default.createElement("span",{className:"weui-back-centent"},"通讯录"))}),h.default.createElement(w.default,null),this.renderChatGroupsCells(),h.default.createElement("p",{className:"contact-statistics"},e+"个群聊"))}}]),t}(p.Component),r.propTypes={groupChats:m.default.array.isRequired,total:m.default.number.isRequired,setState:m.default.func.isRequired},u);t.default=(0,C.connectAdvanced)(function(e){var t={},n=(0,v.bindActionCreators)(k,e);return function(e,a){var r=e.wechat.chatMain.chats,u=void 0===r?[]:r,c=[],s=!0,i=!1,f=void 0;try{for(var d,p=(0,l.default)(u);!(s=(d=p.next()).done);s=!0){var h=d.value;h.base.type===N.CHAT_ROOM_TYPE_GROUP&&c.push({mid:h.mid,wxid:h.base.wxid,name:h.base.name,headerImages:(h.chatMemberModel||[]).map(function(e){return e.headerUrl})})}}catch(e){i=!0,f=e}finally{try{!s&&p.return&&p.return()}finally{if(i)throw f}}var m=c.length,C=(0,o.default)({},a,{groupChats:c,total:m},n);return t=y.default.shallowEqual(t,C)?t:C}})(x)}).call(this)}finally{}},655:function(e,t,n){try{(function(){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var e=function(e){return e&&e.__esModule?e:{default:e}}(n(10));n(656);t.default=function(t){return e.default.createElement("section",{className:"weui-header"},e.default.createElement("div",{className:"weui-header-back"},t.back&&t.back),e.default.createElement("div",{className:"weui-header-title"},t.title),e.default.createElement("div",{className:"weui-header-operation"},t.children))}}).call(this)}finally{}},656:function(e,t){},657:function(e,t,n){try{(function(){"use strict";function e(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=e(n(66)),r=e(n(35)),u=e(n(51)),l=e(n(67)),o=e(n(68)),c=n(10),s=e(c);n(658);var i=function(e){function t(){var e,n,u,o;(0,r.default)(this,t);for(var c=arguments.length,s=Array(c),i=0;i<c;i++)s[i]=arguments[i];return n=u=(0,l.default)(this,(e=t.__proto__||(0,a.default)(t)).call.apply(e,[this].concat(s))),u.onClickBack=function(){u.props.history.goBack()},o=n,(0,l.default)(u,o)}return(0,o.default)(t,e),(0,u.default)(t,[{key:"render",value:function(){return s.default.createElement("div",{className:"weui-back iconfont icon-return-arrow",onClick:this.onClickBack},this.props.children&&this.props.children)}}]),t}(c.Component);t.default=i}).call(this)}finally{}},658:function(e,t){},659:function(e,t,n){(function(a){function r(){var e;try{e=t.storage.debug}catch(e){}return!e&&void 0!==a&&"env"in a&&(e=a.env.DEBUG),e}(t=e.exports=n(666)).log=function(){return"object"==typeof console&&console.log&&Function.prototype.apply.call(console.log,console,arguments)},t.formatArgs=function(e){var n=this.useColors;if(e[0]=(n?"%c":"")+this.namespace+(n?" %c":" ")+e[0]+(n?"%c ":" ")+"+"+t.humanize(this.diff),n){var a="color: "+this.color;e.splice(1,0,a,"color: inherit");var r=0,u=0;e[0].replace(/%[a-zA-Z%]/g,function(e){"%%"!==e&&(r++,"%c"===e&&(u=r))}),e.splice(u,0,a)}},t.save=function(e){try{null==e?t.storage.removeItem("debug"):t.storage.debug=e}catch(e){}},t.load=r,t.useColors=function(){return!("undefined"==typeof window||!window.process||"renderer"!==window.process.type)||("undefined"==typeof navigator||!navigator.userAgent||!navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/))&&("undefined"!=typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||"undefined"!=typeof window&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/))},t.storage="undefined"!=typeof chrome&&void 0!==chrome.storage?chrome.storage.local:function(){try{return window.localStorage}catch(e){}}(),t.colors=["#0000CC","#0000FF","#0033CC","#0033FF","#0066CC","#0066FF","#0099CC","#0099FF","#00CC00","#00CC33","#00CC66","#00CC99","#00CCCC","#00CCFF","#3300CC","#3300FF","#3333CC","#3333FF","#3366CC","#3366FF","#3399CC","#3399FF","#33CC00","#33CC33","#33CC66","#33CC99","#33CCCC","#33CCFF","#6600CC","#6600FF","#6633CC","#6633FF","#66CC00","#66CC33","#9900CC","#9900FF","#9933CC","#9933FF","#99CC00","#99CC33","#CC0000","#CC0033","#CC0066","#CC0099","#CC00CC","#CC00FF","#CC3300","#CC3333","#CC3366","#CC3399","#CC33CC","#CC33FF","#CC6600","#CC6633","#CC9900","#CC9933","#CCCC00","#CCCC33","#FF0000","#FF0033","#FF0066","#FF0099","#FF00CC","#FF00FF","#FF3300","#FF3333","#FF3366","#FF3399","#FF33CC","#FF33FF","#FF6600","#FF6633","#FF9900","#FF9933","#FFCC00","#FFCC33"],t.formatters.j=function(e){try{return JSON.stringify(e)}catch(e){return"[UnexpectedJSONParseError]: "+e.message}},t.enable(r())}).call(t,n(230))},660:function(e,t,n){try{(function(){"use strict";function e(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=e(n(12)),r=e(n(229)),u=e(n(10)),l=e(n(228)),o=e(n(661));n(663);t.default=function(e){return u.default.createElement("div",{className:(0,l.default)("weui-cells",(0,r.default)({},e.className,!!e.className))},e.cells&&e.cells.map(function(e,t){return u.default.createElement(o.default,(0,a.default)({key:t},e))}))}}).call(this)}finally{}},661:function(e,t,n){try{(function(){"use strict";function e(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=e(n(12)),r=e(n(229)),u=e(n(10)),l=n(36),o=e(n(228));n(662);var c=function(e){return u.default.createElement("div",{className:"weui-cell-hd"},e.left&&e.left)},s=function(e){return u.default.createElement("div",{className:"weui-cell-bd"},e.center)},i=function(e){return u.default.createElement("div",{className:"weui-cell-ft"},e.right&&e.right)};t.default=function(e){var t=(0,r.default)({},e.className,!!e.className);if(e.link)return u.default.createElement(l.Link,{to:e.link||"",className:(0,o.default)("weui-cell clickable",t)},u.default.createElement(c,{left:e.left}),u.default.createElement(s,{center:e.center}),u.default.createElement(i,{right:e.right}));var n={};return e.onClick&&(n.onClick=e.onClick,t.clickable=!0),u.default.createElement("div",(0,a.default)({},n,{className:(0,o.default)("weui-cell",t)}),u.default.createElement(c,{left:e.left}),u.default.createElement(s,{center:e.center}),u.default.createElement(i,{right:e.right}))}}).call(this)}finally{}},662:function(e,t){},663:function(e,t){},664:function(e,t,n){(function(t){var n,a=t.crypto||t.msCrypto;if(a&&a.getRandomValues){var r=new Uint8Array(16);n=function(){return a.getRandomValues(r),r}}if(!n){var u=new Array(16);n=function(){for(var e,t=0;t<16;t++)0==(3&t)&&(e=4294967296*Math.random()),u[t]=e>>>((3&t)<<3)&255;return u}}e.exports=n}).call(t,n(96))},665:function(e,t){for(var n=[],a=0;a<256;++a)n[a]=(a+256).toString(16).substr(1);e.exports=function(e,t){var a=t||0,r=n;return r[e[a++]]+r[e[a++]]+r[e[a++]]+r[e[a++]]+"-"+r[e[a++]]+r[e[a++]]+"-"+r[e[a++]]+r[e[a++]]+"-"+r[e[a++]]+r[e[a++]]+"-"+r[e[a++]]+r[e[a++]]+r[e[a++]]+r[e[a++]]+r[e[a++]]+r[e[a++]]}},666:function(e,t,n){function a(e){var n,a=0;for(n in e)a=(a<<5)-a+e.charCodeAt(n),a|=0;return t.colors[Math.abs(a)%t.colors.length]}function r(e){function n(){if(n.enabled){var e=n,a=+new Date,u=a-(r||a);e.diff=u,e.prev=r,e.curr=a,r=a;for(var l=new Array(arguments.length),o=0;o<l.length;o++)l[o]=arguments[o];l[0]=t.coerce(l[0]),"string"!=typeof l[0]&&l.unshift("%O");var c=0;l[0]=l[0].replace(/%([a-zA-Z%])/g,function(n,a){if("%%"===n)return n;c++;var r=t.formatters[a];if("function"==typeof r){var u=l[c];n=r.call(e,u),l.splice(c,1),c--}return n}),t.formatArgs.call(e,l),(n.log||t.log||console.log.bind(console)).apply(e,l)}}var r;return n.namespace=e,n.enabled=t.enabled(e),n.useColors=t.useColors(),n.color=a(e),n.destroy=u,"function"==typeof t.init&&t.init(n),t.instances.push(n),n}function u(){var e=t.instances.indexOf(this);return-1!==e&&(t.instances.splice(e,1),!0)}(t=e.exports=r.debug=r.default=r).coerce=function(e){return e instanceof Error?e.stack||e.message:e},t.disable=function(){t.enable("")},t.enable=function(e){t.save(e),t.names=[],t.skips=[];var n,a=("string"==typeof e?e:"").split(/[\s,]+/),r=a.length;for(n=0;n<r;n++)a[n]&&("-"===(e=a[n].replace(/\*/g,".*?"))[0]?t.skips.push(new RegExp("^"+e.substr(1)+"$")):t.names.push(new RegExp("^"+e+"$")));for(n=0;n<t.instances.length;n++){var u=t.instances[n];u.enabled=t.enabled(u.namespace)}},t.enabled=function(e){if("*"===e[e.length-1])return!0;var n,a;for(n=0,a=t.skips.length;n<a;n++)if(t.skips[n].test(e))return!1;for(n=0,a=t.names.length;n<a;n++)if(t.names[n].test(e))return!0;return!1},t.humanize=n(667),t.instances=[],t.names=[],t.skips=[],t.formatters={}},667:function(e,t){function n(e){if(!((e=String(e)).length>100)){var t=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);if(t){var n=parseFloat(t[1]);switch((t[2]||"ms").toLowerCase()){case"years":case"year":case"yrs":case"yr":case"y":return n*i;case"days":case"day":case"d":return n*s;case"hours":case"hour":case"hrs":case"hr":case"h":return n*c;case"minutes":case"minute":case"mins":case"min":case"m":return n*o;case"seconds":case"second":case"secs":case"sec":case"s":return n*l;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return n;default:return}}}}function a(e){return e>=s?Math.round(e/s)+"d":e>=c?Math.round(e/c)+"h":e>=o?Math.round(e/o)+"m":e>=l?Math.round(e/l)+"s":e+"ms"}function r(e){return u(e,s,"day")||u(e,c,"hour")||u(e,o,"minute")||u(e,l,"second")||e+" ms"}function u(e,t,n){if(!(e<t))return e<1.5*t?Math.floor(e/t)+" "+n:Math.ceil(e/t)+" "+n+"s"}var l=1e3,o=60*l,c=60*o,s=24*c,i=365.25*s;e.exports=function(e,t){t=t||{};var u=typeof e;if("string"===u&&e.length>0)return n(e);if("number"===u&&!1===isNaN(e))return t.long?r(e):a(e);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(e))}},669:function(e,t,n){var a=n(664),r=n(665),u=a(),l=[1|u[0],u[1],u[2],u[3],u[4],u[5]],o=16383&(u[6]<<8|u[7]),c=0,s=0;e.exports=function(e,t,n){var a=t&&n||0,u=t||[],i=void 0!==(e=e||{}).clockseq?e.clockseq:o,f=void 0!==e.msecs?e.msecs:(new Date).getTime(),d=void 0!==e.nsecs?e.nsecs:s+1,p=f-c+(d-s)/1e4;if(p<0&&void 0===e.clockseq&&(i=i+1&16383),(p<0||f>c)&&void 0===e.nsecs&&(d=0),d>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");c=f,s=d,o=i;var h=(1e4*(268435455&(f+=122192928e5))+d)%4294967296;u[a++]=h>>>24&255,u[a++]=h>>>16&255,u[a++]=h>>>8&255,u[a++]=255&h;var m=f/4294967296*1e4&268435455;u[a++]=m>>>8&255,u[a++]=255&m,u[a++]=m>>>24&15|16,u[a++]=m>>>16&255,u[a++]=i>>>8|128,u[a++]=255&i;for(var C=e.node||l,v=0;v<6;++v)u[a+v]=C[v];return t||r(u)}},674:function(e,t,n){try{(function(){"use strict";function e(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a,r,u,l=e(n(229)),o=e(n(66)),c=e(n(35)),s=e(n(51)),i=e(n(67)),f=e(n(68)),d=n(10),p=e(d),h=e(n(94)),m=e(n(228)),C=e(n(675)),v=e(n(677));n(678);var g=(0,v.default)((u=r=function(e){function t(e){var n;(0,c.default)(this,t);var a=(0,i.default)(this,(t.__proto__||(0,o.default)(t)).call(this,e));a.handleFocusInput=function(){a.setState({focusing:!0})},a.handleBlurInput=function(){""===a.state[a.state.searchKey]&&a.setState({focusing:!1})},a.handleCancelInput=function(){a.setState((0,l.default)({focusing:!1},a.state.searchKey,"")),a.props.onChange()&&a.props.onChange(""),a.props.onCancel&&a.props.onCancel()},a.handleSubmitBar=function(e){a.props.onSubmit&&(e&&(e.preventDefault(),e.stopPropagation()),a.props.onSubmit(a.state[a.state.searchKey],e))};var r=(0,C.default)()+"-search-text";return a.state=(n={focusing:!!e.defaultValue,clearing:!!e.defaultValue},(0,l.default)(n,r,e.defaultValue),(0,l.default)(n,"searchKey",r),n),a.handleChangeInput=a.handleChangeInput.bind(a),a}return(0,f.default)(t,e),(0,s.default)(t,[{key:"render",value:function(){var e=this,t=this.props.placeholder,n=this.state.searchKey;return p.default.createElement("div",{className:(0,m.default)("weui-search-bar",{focusing:this.state.focusing})},p.default.createElement("form",{className:"search-form",onSubmit:this.handleSubmitBar},p.default.createElement("div",{className:"search-form-box"},p.default.createElement("input",{id:n,type:"text",className:"search-input",name:n,placeholder:t,value:this.state[n],rel:function(t){return e.searchTextInput=t},onChange:this.handleChangeInput,onFocus:this.handleFocusInput,onBlur:this.handleBlurInput,autoComplete:"off"}),p.default.createElement("i",{className:"iconfont icon-search"})),p.default.createElement("label",{className:"search-form-label",htmlFor:n},p.default.createElement("i",{className:"iconfont icon-search"}),p.default.createElement("span",{className:"label-content"},t))),p.default.createElement("a",{className:"btn-cancel",onClick:this.handleCancelInput},"取消"))}}]),t}(d.Component),r.propTypes={placeholder:h.default.string,defaultValue:h.default.string,onCancel:h.default.func,onChange:h.default.func,onSubmit:h.default.func},r.defaultProps={placeholder:"搜索",defaultValue:"",onCancel:function(){},onChange:function(){},onSubmit:function(){}},a=u))||a;t.default=g}).call(this)}finally{}},675:function(e,t,n){var a=n(669),r=n(676),u=r;u.v1=a,u.v4=r,e.exports=u},676:function(e,t,n){var a=n(664),r=n(665);e.exports=function(e,t,n){var u=t&&n||0;"string"==typeof e&&(t="binary"==e?new Array(16):null,e=null);var l=(e=e||{}).random||(e.rng||a)();if(l[6]=15&l[6]|64,l[8]=63&l[8]|128,t)for(var o=0;o<16;++o)t[u+o]=l[o];return t||r(l)}},677:function(e,t,n){try{(function(){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var e=function(e){return e&&e.__esModule?e:{default:e}}(n(229));t.default=function(t){t.prototype.handleChangeInput=function(t){var n=t.target.name,a=t.target.value;this.props.onChangeValue&&this.props.onChangeValue(a,t),this.setState((0,e.default)({},n,a))}}}).call(this)}finally{}},678:function(e,t){},680:function(e,t,n){e.exports={default:n(681),__esModule:!0}},681:function(e,t,n){n(682),n(683),e.exports=n(684)},682:function(e,t,n){e.exports=n(1)(158)},683:function(e,t,n){e.exports=n(1)(79)},684:function(e,t,n){var a=n(146),r=n(685);e.exports=n(53).getIterator=function(e){var t=r(e);if("function"!=typeof t)throw TypeError(e+" is not iterable!");return a(t.call(e))}},685:function(e,t,n){e.exports=n(1)(162)},802:function(e,t,n){e.exports=n(1)(265)},826:function(e,t,n){try{(function(){"use strict";function e(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=e(n(10)),r=e(n(228)),u=n(802);n(827);t.default=function(e){var t=(e.images||[]).slice(0,9);t.reverse();var n=t.length,l=n>4?3:Math.ceil(n/2),o=(0,u.chunk)(t,l);return o.reverse(),a.default.createElement("div",{className:(0,r.default)("weui-chat-avatar","weui-chat-avatar-"+n)},o.map(function(e,t){return e.reverse(),a.default.createElement("div",{className:"chat-avatar-group",key:"avatar-group$-"+t},e.map(function(e,t){return a.default.createElement("img",{className:(0,r.default)("chat-avatar","chat-avatar-"+n),src:e,key:"image"+t})}))}))}}).call(this)}finally{}},827:function(e,t){},842:function(e,t){}});