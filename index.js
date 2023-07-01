// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(t,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(t="undefined"!=typeof globalThis?globalThis:t||self).someBy=r()}(this,(function(){"use strict";var t=Math.floor;function r(r){return t(r)===r}var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var n,o=Object.defineProperty,u=Object.prototype,i=u.toString,f=u.__defineGetter__,c=u.__defineSetter__,l=u.__lookupGetter__,a=u.__lookupSetter__;n=function(){try{return e({},"x",{}),!0}catch(t){return!1}}()?o:function(t,r,e){var n,o,p,y;if("object"!=typeof t||null===t||"[object Array]"===i.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof e||null===e||"[object Array]"===i.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((o="value"in e)&&(l.call(t,r)||a.call(t,r)?(n=t.__proto__,t.__proto__=u,delete t[r],t[r]=e.value,t.__proto__=n):t[r]=e.value),p="get"in e,y="set"in e,o&&(p||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&f&&f.call(t,r,e.get),y&&c&&c.call(t,r,e.set),t};var p=n;function y(t,r,e){p(t,r,{configurable:!1,enumerable:!1,writable:!1,value:e})}function s(t){return"number"==typeof t}var b="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function v(){return b&&"symbol"==typeof Symbol.toStringTag}var d=Object.prototype.toString;var m=Object.prototype.hasOwnProperty;var g="function"==typeof Symbol?Symbol.toStringTag:"";var j=v()?function(t){var r,e,n,o,u;if(null==t)return d.call(t);e=t[g],u=g,r=null!=(o=t)&&m.call(o,u);try{t[g]=void 0}catch(r){return d.call(t)}return n=d.call(t),r?t[g]=e:delete t[g],n}:function(t){return d.call(t)},h=Number,_=h.prototype.toString;var w=v();function O(t){return"object"==typeof t&&(t instanceof h||(w?function(t){try{return _.call(t),!0}catch(t){return!1}}(t):"[object Number]"===j(t)))}function E(t){return s(t)||O(t)}y(E,"isPrimitive",s),y(E,"isObject",O);var S=Number.POSITIVE_INFINITY,T=h.NEGATIVE_INFINITY;function I(t){return t<S&&t>T&&r(t)}function P(t){return s(t)&&I(t)}function A(t){return O(t)&&I(t.valueOf())}function B(t){return P(t)||A(t)}function N(t){return P(t)&&t>0}function V(t){return A(t)&&t.valueOf()>0}function x(t){return N(t)||V(t)}y(B,"isPrimitive",P),y(B,"isObject",A),y(x,"isPrimitive",N),y(x,"isObject",V);var C=/./;function F(t){return"boolean"==typeof t}var G=Boolean.prototype.toString;var k=v();function L(t){return"object"==typeof t&&(t instanceof Boolean||(k?function(t){try{return G.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===j(t)))}function M(t){return F(t)||L(t)}function R(){return new Function("return this;")()}y(M,"isPrimitive",F),y(M,"isObject",L);var U="object"==typeof self?self:null,Y="object"==typeof window?window:null,X="object"==typeof global?global:null;var Z=function(t){if(arguments.length){if(!F(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return R()}if(U)return U;if(Y)return Y;if(X)return X;throw new Error("unexpected error. Unable to resolve global object.")}(),q=Z.document&&Z.document.childNodes,z=Int8Array;function D(){return/^\s*function\s*([^(]*)/i}var H=/^\s*function\s*([^(]*)/i;y(D,"REGEXP",H);var J=Array.isArray?Array.isArray:function(t){return"[object Array]"===j(t)};function K(t){return null!==t&&"object"==typeof t}function Q(t){var r,e,n,o;if(("Object"===(e=j(t).slice(8,-1))||"Error"===e)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(r=H.exec(n.toString()))return r[1]}return K(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}y(K,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(r){var e,n;if(!J(r))return!1;if(0===(e=r.length))return!1;for(n=0;n<e;n++)if(!1===t(r[n]))return!1;return!0}}(K));var W="function"==typeof C||"object"==typeof z||"function"==typeof q?function(t){return Q(t).toLowerCase()}:function(t){var r;return null===t?"null":"object"===(r=typeof t)?Q(t).toLowerCase():r};function $(){var t,r=arguments,e=r[0],n="https://stdlib.io/e/"+e+"?";for(t=1;t<r.length;t++)n+="&arg[]="+encodeURIComponent(r[t]);return n}return function(t,e,n,o){var u,i,f,c;if(!("object"==typeof(c=t)&&null!==c&&"number"==typeof c.length&&r(c.length)&&c.length>=0&&c.length<=9007199254740991))throw new TypeError($("0lfBO",t));if(!N(e))throw new TypeError($("0lf4I",e));if(!function(t){return"function"===W(t)}(n))throw new TypeError($("0lf3Z",n));for(i=t.length,u=0,f=0;f<i;f++){if(n.call(o,t[f],f,t)&&(u+=1)===e)return!0;i=t.length}return!1}}));
//# sourceMappingURL=index.js.map
