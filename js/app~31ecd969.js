(window.webpackJsonppidtchay_project=window.webpackJsonppidtchay_project||[]).push([[13],{317:function(t,e,r){"use strict";function p(t){return"/"===t.charAt(0)}function d(t,e){for(var r=e,n=r+1,o=t.length;n<o;r+=1,n+=1)t[r]=t[n];t.pop()}e.a=function(t,e){void 0===e&&(e="");var r,n,o=t&&t.split("/")||[],a=e&&e.split("/")||[],i=t&&p(t),c=e&&p(e),u=i||c;if(t&&p(t)?a=o:o.length&&(a.pop(),a=a.concat(o)),!a.length)return"/";n=!!a.length&&("."===(r=a[a.length-1])||".."===r||""===r);for(var l=0,s=a.length;0<=s;s--){var f=a[s];"."===f?d(a,s):".."===f?(d(a,s),l++):l&&(d(a,s),l--)}if(!u)for(;l--;)a.unshift("..");!u||""===a[0]||a[0]&&p(a[0])||a.unshift("");var h=a.join("/");return n&&"/"!==h.substr(-1)&&(h+="/"),h}},318:function(t,e,r){"use strict";function a(t){return t.valueOf?t.valueOf():Object.prototype.valueOf.call(t)}e.a=function r(e,n){if(e===n)return!0;if(null==e||null==n)return!1;if(Array.isArray(e))return Array.isArray(n)&&e.length===n.length&&e.every(function(t,e){return r(t,n[e])});if("object"!=typeof e&&"object"!=typeof n)return!1;var t=a(e),o=a(n);return t!==e||o!==n?r(t,o):Object.keys(Object.assign({},e,n)).every(function(t){return r(e[t],n[t])})}},319:function(t,e,r){"use strict";r.d(e,"a",function(){return a});var n=r(0),o=r(529),a=function(t){var e=t.columns,r=t.dataSource;return n.createElement(o.a,{dataSource:r,columns:e})}},378:function(t,e,r){var n=function(i){"use strict";var f,t=Object.prototype,s=t.hasOwnProperty,e="function"==typeof Symbol?Symbol:{},o=e.iterator||"@@iterator",r=e.asyncIterator||"@@asyncIterator",n=e.toStringTag||"@@toStringTag";function c(t,e,r,n){var a,i,c,u,o=e&&e.prototype instanceof g?e:g,l=Object.create(o.prototype),s=new N(n||[]);return l._invoke=(a=t,i=r,c=s,u=p,function(t,e){if(u===v)throw new Error("Generator is already running");if(u===y){if("throw"===t)throw e;return C()}for(c.method=t,c.arg=e;;){var r=c.delegate;if(r){var n=function t(e,r){var n=e.iterator[r.method];if(n===f){if(r.delegate=null,"throw"===r.method){if(e.iterator.return&&(r.method="return",r.arg=f,t(e,r),"throw"===r.method))return m;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var o=h(n,e.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,m;var a=o.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=f),r.delegate=null,m):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,m)}(r,c);if(n){if(n===m)continue;return n}}if("next"===c.method)c.sent=c._sent=c.arg;else if("throw"===c.method){if(u===p)throw u=y,c.arg;c.dispatchException(c.arg)}else"return"===c.method&&c.abrupt("return",c.arg);u=v;var o=h(a,i,c);if("normal"===o.type){if(u=c.done?y:d,o.arg===m)continue;return{value:o.arg,done:c.done}}"throw"===o.type&&(u=y,c.method="throw",c.arg=o.arg)}}),l}function h(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}i.wrap=c;var p="suspendedStart",d="suspendedYield",v="executing",y="completed",m={};function g(){}function a(){}function u(){}var l={};l[o]=function(){return this};var b=Object.getPrototypeOf,w=b&&b(b(k([])));w&&w!==t&&s.call(w,o)&&(l=w);var E=u.prototype=g.prototype=Object.create(l);function j(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function O(u,l){var e;this._invoke=function(r,n){function t(){return new l(function(t,e){!function e(t,r,n,o){var a=h(u[t],u,r);if("throw"!==a.type){var i=a.arg,c=i.value;return c&&"object"==typeof c&&s.call(c,"__await")?l.resolve(c.__await).then(function(t){e("next",t,n,o)},function(t){e("throw",t,n,o)}):l.resolve(c).then(function(t){i.value=t,n(i)},function(t){return e("throw",t,n,o)})}o(a.arg)}(r,n,t,e)})}return e=e?e.then(t,t):t()}}function x(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function L(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(x,this),this.reset(!0)}function k(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,n=function t(){for(;++r<e.length;)if(s.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=f,t.done=!0,t};return n.next=n}}return{next:C}}function C(){return{value:f,done:!0}}return a.prototype=E.constructor=u,u.constructor=a,u[n]=a.displayName="GeneratorFunction",i.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===a||"GeneratorFunction"===(e.displayName||e.name))},i.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,u):(t.__proto__=u,n in t||(t[n]="GeneratorFunction")),t.prototype=Object.create(E),t},i.awrap=function(t){return{__await:t}},j(O.prototype),O.prototype[r]=function(){return this},i.AsyncIterator=O,i.async=function(t,e,r,n,o){void 0===o&&(o=Promise);var a=new O(c(t,e,r,n),o);return i.isGeneratorFunction(e)?a:a.next().then(function(t){return t.done?t.value:a.next()})},j(E),E[n]="Generator",E[o]=function(){return this},E.toString=function(){return"[object Generator]"},i.keys=function(r){var n=[];for(var t in r)n.push(t);return n.reverse(),function t(){for(;n.length;){var e=n.pop();if(e in r)return t.value=e,t.done=!1,t}return t.done=!0,t}},i.values=k,N.prototype={constructor:N,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=f,this.done=!1,this.delegate=null,this.method="next",this.arg=f,this.tryEntries.forEach(L),!t)for(var e in this)"t"===e.charAt(0)&&s.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=f)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(r){if(this.done)throw r;var n=this;function t(t,e){return a.type="throw",a.arg=r,n.next=t,e&&(n.method="next",n.arg=f),!!e}for(var e=this.tryEntries.length-1;0<=e;--e){var o=this.tryEntries[e],a=o.completion;if("root"===o.tryLoc)return t("end");if(o.tryLoc<=this.prev){var i=s.call(o,"catchLoc"),c=s.call(o,"finallyLoc");if(i&&c){if(this.prev<o.catchLoc)return t(o.catchLoc,!0);if(this.prev<o.finallyLoc)return t(o.finallyLoc)}else if(i){if(this.prev<o.catchLoc)return t(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return t(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;0<=r;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&s.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,m):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;0<=e;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),L(r),m}},catch:function(t){for(var e=this.tryEntries.length-1;0<=e;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n,o=r.completion;return"throw"===o.type&&(n=o.arg,L(r)),n}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:k(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=f),m}},i}(t.exports);try{regeneratorRuntime=n}catch(t){Function("r","regeneratorRuntime = r")(n)}},45:function(t,e,r){"use strict";var n="Invariant failed";e.a=function(t,e){if(!t)throw new Error(n)}},51:function(t,e){t.exports=function(t,e,r,n){if(void 0!==(l=r?r.call(n,t,e):void 0))return!!l;if(t===e)return!0;if("object"!=typeof t||!t||"object"!=typeof e||!e)return!1;var o=Object.keys(t),a=Object.keys(e);if(o.length!==a.length)return!1;for(var i=Object.prototype.hasOwnProperty.bind(e),c=0;c<o.length;c++){var u=o[c];if(!i(u))return!1;var l,s=t[u],f=e[u];if(!1===(l=r?r.call(n,s,f,u):void 0)||void 0===l&&s!==f)return!1}return!0}},510:function(t,e){t.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,r=[],n=0;n<e.rangeCount;n++)r.push(e.getRangeAt(n));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||r.forEach(function(t){e.addRange(t)}),t&&t.focus()}}},537:function(t,e,r){"use strict";var a=r(519);function i(t){return t===Object(t)&&0!==Object.keys(t).length}e.a=function(t,e){var r=!t.ownerDocument.documentElement.contains(t);if(i(e)&&"function"==typeof e.behavior)return e.behavior(r?[]:Object(a.a)(t,e));if(!r){var n,o=!1===(n=e)?{block:"end",inline:"nearest"}:i(n)?n:{block:"start",inline:"nearest"};return function(t,o){void 0===o&&(o="auto");var a="scrollBehavior"in document.body.style;t.forEach(function(t){var e=t.el,r=t.top,n=t.left;e.scroll&&a?e.scroll({top:r,left:n,behavior:o}):(e.scrollTop=r,e.scrollLeft=n)})}(Object(a.a)(t,o),o.behavior)}}},549:function(t,e,r){"use strict";r.d(e,"a",function(){return o});var h=r(0),p=r.n(h),d=r(626),v=r(627),y=r(628),m=r(555),g=r(629),n=r(357),b=r.n(n),w=r(526),E=r(356),j=r(29),O=r(523),x=r(28),L=r(364),N=r(105),k=r(31),C=r(366),_=r(367),T=r(7),S=r(123),o=function(t){var e=t.isSideMenuToogle,r=t.onToggleTrueFalse,n=Object(h.useState)(S.a.RU),o=n[0],a=n[1],i=Object(h.useState)(S.a.EN.toUpperCase()),c=i[0],u=i[1],l=Object(x.d)(function(t){return t.system.authenticated}),s=Object(x.d)(function(t){return t.literals}),f=Object(x.c)();return p.a.createElement("div",null,p.a.createElement(w.a,{justify:"space-between"},p.a.createElement(E.a,{span:4},p.a.createElement(w.a,{justify:"space-between"},p.a.createElement(E.a,null,p.a.createElement(e?d.a:v.a,{className:"trigger",onClick:r})),p.a.createElement(E.a,null,p.a.createElement(j.a,{type:"link",icon:p.a.createElement(y.a,null),onClick:function(){return N.a.push(k.b.HOME)}},"PIDTCHAY PROJECT.")))),p.a.createElement(E.a,{span:5},p.a.createElement("div",{className:b.a.header_layout},p.a.createElement(j.a,{type:"primary",onClick:function(){a(o===S.a.EN?S.a.RU:S.a.EN),u(o.toUpperCase()),Object(C.a)(o).then(function(t){return f(Object(_.a)(t))})},className:b.a.header_layout_i18n},c),l&&p.a.createElement(O.a,{size:"large",icon:p.a.createElement(m.a,null),className:b.a.header_layout_avatar}),l&&p.a.createElement(j.a,{type:"primary",shape:"round",icon:p.a.createElement(g.a,null),size:"large",className:b.a.header_layout_button,onClick:function(){return f(Object(L.a)())}},Object(T.a)(s,"ACTIONS.logout"))))))}},560:function(t,e,a){"use strict";var r,n,o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},i=(n={},function(t){if(void 0===n[t]){var e=document.querySelector(t);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(t){e=null}n[t]=e}return n[t]}),f=[];function h(t){for(var e=-1,r=0;r<f.length;r++)if(f[r].identifier===t){e=r;break}return e}function u(t,e){for(var r={},n=[],o=0;o<t.length;o++){var a=t[o],i=e.base?a[0]+e.base:a[0],c=r[i]||0,u="".concat(i," ").concat(c);r[i]=c+1;var l=h(u),s={css:a[1],media:a[2],sourceMap:a[3]};-1!==l?(f[l].references++,f[l].updater(s)):f.push({identifier:u,updater:function(e,t){var r,n,o;{var a;o=t.singleton?(a=y++,r=v=v||p(t),n=d.bind(null,r,a,!1),d.bind(null,r,a,!0)):(r=p(t),n=function(t,e,r){var n=r.css,o=r.media,a=r.sourceMap;o?t.setAttribute("media",o):t.removeAttribute("media");a&&btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */"));if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}.bind(null,r,t),function(){!function(t){if(null===t.parentNode)return;t.parentNode.removeChild(t)}(r)})}return n(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n(e=t)}else o()}}(s,e),references:1}),n.push(u)}return n}function p(t){var e,r=document.createElement("style"),n=t.attributes||{};if(void 0!==n.nonce||(e=a.nc)&&(n.nonce=e),Object.keys(n).forEach(function(t){r.setAttribute(t,n[t])}),"function"==typeof t.insert)t.insert(r);else{var o=i(t.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(r)}return r}var c,l=(c=[],function(t,e){return c[t]=e,c.filter(Boolean).join("\n")});function d(t,e,r,n){var o,a,i=r?"":n.media?"@media ".concat(n.media," {").concat(n.css,"}"):n.css;t.styleSheet?t.styleSheet.cssText=l(e,i):(o=document.createTextNode(i),(a=t.childNodes)[e]&&t.removeChild(a[e]),a.length?t.insertBefore(o,a[e]):t.appendChild(o))}var v=null,y=0;t.exports=function(t,i){(i=i||{}).singleton||"boolean"==typeof i.singleton||(i.singleton=o());var c=u(t=t||[],i);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var e=0;e<c.length;e++){var r=h(c[e]);f[r].references--}for(var n=u(t,i),o=0;o<c.length;o++){var a=h(c[o]);0===f[a].references&&(f[a].updater(),f.splice(a,1))}c=n}}}}}]);