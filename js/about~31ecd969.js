(window.webpackJsonppidtchay_project=window.webpackJsonppidtchay_project||[]).push([[7],{0:function(e,t,r){"use strict";e.exports=r(372)},157:function(e,t,r){"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var f=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return;var n={};return"abcdefghijklmnopqrst".split("").forEach(function(e){n[e]=e}),"abcdefghijklmnopqrst"!==Object.keys(Object.assign({},n)).join("")?void 0:1}catch(e){return}}()?Object.assign:function(e,t){for(var r,n,o=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),u=1;u<arguments.length;u++){for(var c in r=Object(arguments[u]))l.call(r,c)&&(o[c]=r[c]);if(f){n=f(r);for(var i=0;i<n.length;i++)a.call(r,n[i])&&(o[n[i]]=r[n[i]])}}return o}},361:function(e,t,r){"use strict";r.r(t),r.d(t,"AboutPage",function(){return u});var n=r(0),o=r.n(n),u=function(){return o.a.createElement("div",null,o.a.createElement("h1",null,"About"),o.a.createElement("div",null,"added this to verify that the task of publishing the project after my changes will work!"))}},372:function(e,t,r){"use strict";
/** @license React v16.13.1
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var a=r(157),n="function"==typeof Symbol&&Symbol.for,s=n?Symbol.for("react.element"):60103,l=n?Symbol.for("react.portal"):60106,o=n?Symbol.for("react.fragment"):60107,u=n?Symbol.for("react.strict_mode"):60108,c=n?Symbol.for("react.profiler"):60114,i=n?Symbol.for("react.provider"):60109,f=n?Symbol.for("react.context"):60110,p=n?Symbol.for("react.forward_ref"):60112,y=n?Symbol.for("react.suspense"):60113,d=n?Symbol.for("react.memo"):60115,h=n?Symbol.for("react.lazy"):60116,v="function"==typeof Symbol&&Symbol.iterator;function m(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g={};function w(e,t,r){this.props=e,this.context=t,this.refs=g,this.updater=r||b}function S(){}function _(e,t,r){this.props=e,this.context=t,this.refs=g,this.updater=r||b}w.prototype.isReactComponent={},w.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(m(85));this.updater.enqueueSetState(this,e,t,"setState")},w.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},S.prototype=w.prototype;var j=_.prototype=new S;j.constructor=_,a(j,w.prototype),j.isPureReactComponent=!0;var k={current:null},O=Object.prototype.hasOwnProperty,E={key:!0,ref:!0,__self:!0,__source:!0};function $(e,t,r){var n,o={},u=null,c=null;if(null!=t)for(n in void 0!==t.ref&&(c=t.ref),void 0!==t.key&&(u=""+t.key),t)O.call(t,n)&&!E.hasOwnProperty(n)&&(o[n]=t[n]);var i=arguments.length-2;if(1===i)o.children=r;else if(1<i){for(var f=Array(i),l=0;l<i;l++)f[l]=arguments[l+2];o.children=f}if(e&&e.defaultProps)for(n in i=e.defaultProps)void 0===o[n]&&(o[n]=i[n]);return{$$typeof:s,type:e,key:u,ref:c,props:o,_owner:k.current}}function C(e){return"object"==typeof e&&null!==e&&e.$$typeof===s}var P=/\/+/g,x=[];function R(e,t,r,n){if(x.length){var o=x.pop();return o.result=e,o.keyPrefix=t,o.func=r,o.context=n,o.count=0,o}return{result:e,keyPrefix:t,func:r,context:n,count:0}}function A(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,x.length<10&&x.push(e)}function I(e,t,r){return null==e?0:function e(t,r,n,o){var u=typeof t;"undefined"!==u&&"boolean"!==u||(t=null);var c=!1;if(null===t)c=!0;else switch(u){case"string":case"number":c=!0;break;case"object":switch(t.$$typeof){case s:case l:c=!0}}if(c)return n(o,t,""===r?"."+q(t,0):r),1;if(c=0,r=""===r?".":r+":",Array.isArray(t))for(var i=0;i<t.length;i++){var f=r+q(u=t[i],i);c+=e(u,f,n,o)}else if("function"==typeof(f=null!==t&&"object"==typeof t&&"function"==typeof(f=v&&t[v]||t["@@iterator"])?f:null))for(t=f.call(t),i=0;!(u=t.next()).done;)c+=e(u=u.value,f=r+q(u,i++),n,o);else if("object"===u)throw n=""+t,Error(m(31,"[object Object]"===n?"object with keys {"+Object.keys(t).join(", ")+"}":n,""));return c}(e,"",t,r)}function q(e,t){return"object"==typeof e&&null!==e&&null!=e.key?(r=e.key,n={"=":"=0",":":"=2"},"$"+(""+r).replace(/[=:]/g,function(e){return n[e]})):t.toString(36);var r,n}function U(e,t){e.func.call(e.context,t,e.count++)}function F(e,t,r){var n,o,u=e.result,c=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?L(e,u,r,function(e){return e}):null!=e&&(C(e)&&(o=c+(!(n=e).key||t&&t.key===e.key?"":(""+e.key).replace(P,"$&/")+"/")+r,e={$$typeof:s,type:n.type,key:o,ref:n.ref,props:n.props,_owner:n._owner}),u.push(e))}function L(e,t,r,n,o){var u="";null!=r&&(u=(""+r).replace(P,"$&/")+"/"),I(e,F,t=R(t,u,n,o)),A(t)}var M={current:null};function N(){var e=M.current;if(null===e)throw Error(m(321));return e}var D={ReactCurrentDispatcher:M,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:k,IsSomeRendererActing:{current:!1},assign:a};t.Children={map:function(e,t,r){if(null==e)return e;var n=[];return L(e,n,null,t,r),n},forEach:function(e,t,r){if(null==e)return e;I(e,U,t=R(null,null,t,r)),A(t)},count:function(e){return I(e,function(){return null},null)},toArray:function(e){var t=[];return L(e,t,null,function(e){return e}),t},only:function(e){if(!C(e))throw Error(m(143));return e}},t.Component=w,t.Fragment=o,t.Profiler=c,t.PureComponent=_,t.StrictMode=u,t.Suspense=y,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=D,t.cloneElement=function(e,t,r){if(null==e)throw Error(m(267,e));var n,o=a({},e.props),u=e.key,c=e.ref,i=e._owner;if(null!=t)for(f in void 0!==t.ref&&(c=t.ref,i=k.current),void 0!==t.key&&(u=""+t.key),e.type&&e.type.defaultProps&&(n=e.type.defaultProps),t)O.call(t,f)&&!E.hasOwnProperty(f)&&(o[f]=void 0===t[f]&&void 0!==n?n[f]:t[f]);var f=arguments.length-2;if(1===f)o.children=r;else if(1<f){n=Array(f);for(var l=0;l<f;l++)n[l]=arguments[l+2];o.children=n}return{$$typeof:s,type:e.type,key:u,ref:c,props:o,_owner:i}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:f,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:i,_context:e},e.Consumer=e},t.createElement=$,t.createFactory=function(e){var t=$.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:p,render:e}},t.isValidElement=C,t.lazy=function(e){return{$$typeof:h,_ctor:e,_status:-1,_result:null}},t.memo=function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return N().useCallback(e,t)},t.useContext=function(e,t){return N().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return N().useEffect(e,t)},t.useImperativeHandle=function(e,t,r){return N().useImperativeHandle(e,t,r)},t.useLayoutEffect=function(e,t){return N().useLayoutEffect(e,t)},t.useMemo=function(e,t){return N().useMemo(e,t)},t.useReducer=function(e,t,r){return N().useReducer(e,t,r)},t.useRef=function(e){return N().useRef(e)},t.useState=function(e){return N().useState(e)},t.version="16.13.1"}},[[361,52]]]);