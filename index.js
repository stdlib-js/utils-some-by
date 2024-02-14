// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).someBy=r()}(this,(function(){"use strict";var e=Math.floor;function r(r){return e(r)===r}var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var i=Object.defineProperty;function n(e){return"number"==typeof e}function a(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function o(e,r,t){var i=!1,n=r-e.length;return n<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=t?e+a(n):a(n)+e,i&&(e="-"+e)),e}var c=String.prototype.toLowerCase,s=String.prototype.toUpperCase;function l(e){var r,t,i;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,i=parseInt(t,10),!isFinite(i)){if(!n(t))throw new Error("invalid integer. Value: "+t);i=0}return i<0&&("u"===e.specifier||10!==r)&&(i=4294967295+i+1),i<0?(t=(-i).toString(r),e.precision&&(t=o(t,e.precision,e.padRight)),t="-"+t):(t=i.toString(r),i||e.precision?e.precision&&(t=o(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===s.call(e.specifier)?s.call(t):c.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function p(e){return"string"==typeof e}var u=Math.abs,f=String.prototype.toLowerCase,g=String.prototype.toUpperCase,d=String.prototype.replace,h=/e\+(\d)$/,w=/e-(\d)$/,b=/^(\d+)$/,v=/^(\d+)e/,y=/\.0$/,m=/\.0*e/,_=/(\..*[^0])0*e/;function E(e){var r,t,i=parseFloat(e.arg);if(!isFinite(i)){if(!n(e.arg))throw new Error("invalid floating-point number. Value: "+t);i=e.arg}switch(e.specifier){case"e":case"E":t=i.toExponential(e.precision);break;case"f":case"F":t=i.toFixed(e.precision);break;case"g":case"G":u(i)<1e-4?((r=e.precision)>0&&(r-=1),t=i.toExponential(r)):t=i.toPrecision(e.precision),e.alternate||(t=d.call(t,_,"$1e"),t=d.call(t,m,"e"),t=d.call(t,y,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=d.call(t,h,"e+0$1"),t=d.call(t,w,"e-0$1"),e.alternate&&(t=d.call(t,b,"$1."),t=d.call(t,v,"$1.e")),i>=0&&e.sign&&(t=e.sign+t),t=e.specifier===g.call(e.specifier)?g.call(t):f.call(t)}function k(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function x(e,r,t){var i=r-e.length;return i<0?e:e=t?e+k(i):k(i)+e}var S=String.fromCharCode,j=isNaN,V=Array.isArray;function T(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function I(e){var r,t,i,n,a,c,s,u,f;if(!V(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(c="",s=1,u=0;u<e.length;u++)if(p(i=e[u]))c+=i;else{if(r=void 0!==i.precision,!(i=T(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+u+"`. Value: `"+i+"`.");for(i.mapping&&(s=i.mapping),t=i.flags,f=0;f<t.length;f++)switch(n=t.charAt(f)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===i.width){if(i.width=parseInt(arguments[s],10),s+=1,j(i.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(r&&"*"===i.precision){if(i.precision=parseInt(arguments[s],10),s+=1,j(i.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,r=!1)}switch(i.arg=arguments[s],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(i.padZeros=!1),i.arg=l(i);break;case"s":i.maxWidth=r?i.precision:-1;break;case"c":if(!j(i.arg)){if((a=parseInt(i.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=j(a)?String(i.arg):S(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(i.precision=6),i.arg=E(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=o(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=x(i.arg,i.width,i.padRight)),c+=i.arg||"",s+=1}return c}var $=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function F(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function A(e){var r,t,i,n;for(t=[],n=0,i=$.exec(e);i;)(r=e.slice(n,$.lastIndex-i[0].length)).length&&t.push(r),t.push(F(i)),n=$.lastIndex,i=$.exec(e);return(r=e.slice(n)).length&&t.push(r),t}function C(e){return"string"==typeof e}function O(e){var r,t;if(!C(e))throw new TypeError(O("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[A(e)],t=1;t<arguments.length;t++)r.push(arguments[t]);return I.apply(null,r)}var R,P=Object.prototype,Z=P.toString,G=P.__defineGetter__,W=P.__defineSetter__,N=P.__lookupGetter__,L=P.__lookupSetter__;R=function(){try{return t({},"x",{}),!0}catch(e){return!1}}()?i:function(e,r,t){var i,n,a,o;if("object"!=typeof e||null===e||"[object Array]"===Z.call(e))throw new TypeError(O("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===Z.call(t))throw new TypeError(O("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((n="value"in t)&&(N.call(e,r)||L.call(e,r)?(i=e.__proto__,e.__proto__=P,delete e[r],e[r]=t.value,e.__proto__=i):e[r]=t.value),a="get"in t,o="set"in t,n&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&G&&G.call(e,r,t.get),o&&W&&W.call(e,r,t.set),e};var U=R;function X(e,r,t){U(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}var B="function"==typeof Object.defineProperty?Object.defineProperty:null;var M=Object.defineProperty;function z(e){return"number"==typeof e}function Y(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function q(e,r,t){var i=!1,n=r-e.length;return n<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=t?e+Y(n):Y(n)+e,i&&(e="-"+e)),e}var D=String.prototype.toLowerCase,H=String.prototype.toUpperCase;function J(e){var r,t,i;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,i=parseInt(t,10),!isFinite(i)){if(!z(t))throw new Error("invalid integer. Value: "+t);i=0}return i<0&&("u"===e.specifier||10!==r)&&(i=4294967295+i+1),i<0?(t=(-i).toString(r),e.precision&&(t=q(t,e.precision,e.padRight)),t="-"+t):(t=i.toString(r),i||e.precision?e.precision&&(t=q(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===H.call(e.specifier)?H.call(t):D.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function K(e){return"string"==typeof e}var Q=Math.abs,ee=String.prototype.toLowerCase,re=String.prototype.toUpperCase,te=String.prototype.replace,ie=/e\+(\d)$/,ne=/e-(\d)$/,ae=/^(\d+)$/,oe=/^(\d+)e/,ce=/\.0$/,se=/\.0*e/,le=/(\..*[^0])0*e/;function pe(e){var r,t,i=parseFloat(e.arg);if(!isFinite(i)){if(!z(e.arg))throw new Error("invalid floating-point number. Value: "+t);i=e.arg}switch(e.specifier){case"e":case"E":t=i.toExponential(e.precision);break;case"f":case"F":t=i.toFixed(e.precision);break;case"g":case"G":Q(i)<1e-4?((r=e.precision)>0&&(r-=1),t=i.toExponential(r)):t=i.toPrecision(e.precision),e.alternate||(t=te.call(t,le,"$1e"),t=te.call(t,se,"e"),t=te.call(t,ce,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=te.call(t,ie,"e+0$1"),t=te.call(t,ne,"e-0$1"),e.alternate&&(t=te.call(t,ae,"$1."),t=te.call(t,oe,"$1.e")),i>=0&&e.sign&&(t=e.sign+t),t=e.specifier===re.call(e.specifier)?re.call(t):ee.call(t)}function ue(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function fe(e,r,t){var i=r-e.length;return i<0?e:e=t?e+ue(i):ue(i)+e}var ge=String.fromCharCode,de=isNaN,he=Array.isArray;function we(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function be(e){var r,t,i,n,a,o,c,s,l;if(!he(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",c=1,s=0;s<e.length;s++)if(K(i=e[s]))o+=i;else{if(r=void 0!==i.precision,!(i=we(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+i+"`.");for(i.mapping&&(c=i.mapping),t=i.flags,l=0;l<t.length;l++)switch(n=t.charAt(l)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===i.width){if(i.width=parseInt(arguments[c],10),c+=1,de(i.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(r&&"*"===i.precision){if(i.precision=parseInt(arguments[c],10),c+=1,de(i.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,r=!1)}switch(i.arg=arguments[c],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(i.padZeros=!1),i.arg=J(i);break;case"s":i.maxWidth=r?i.precision:-1;break;case"c":if(!de(i.arg)){if((a=parseInt(i.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=de(a)?String(i.arg):ge(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(i.precision=6),i.arg=pe(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=q(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=fe(i.arg,i.width,i.padRight)),o+=i.arg||"",c+=1}return o}var ve=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function ye(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function me(e){var r,t,i,n;for(t=[],n=0,i=ve.exec(e);i;)(r=e.slice(n,ve.lastIndex-i[0].length)).length&&t.push(r),t.push(ye(i)),n=ve.lastIndex,i=ve.exec(e);return(r=e.slice(n)).length&&t.push(r),t}function _e(e){return"string"==typeof e}function Ee(e){var r,t;if(!_e(e))throw new TypeError(Ee("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[me(e)],t=1;t<arguments.length;t++)r.push(arguments[t]);return be.apply(null,r)}var ke,xe=Object.prototype,Se=xe.toString,je=xe.__defineGetter__,Ve=xe.__defineSetter__,Te=xe.__lookupGetter__,Ie=xe.__lookupSetter__;ke=function(){try{return B({},"x",{}),!0}catch(e){return!1}}()?M:function(e,r,t){var i,n,a,o;if("object"!=typeof e||null===e||"[object Array]"===Se.call(e))throw new TypeError(Ee("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===Se.call(t))throw new TypeError(Ee("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((n="value"in t)&&(Te.call(e,r)||Ie.call(e,r)?(i=e.__proto__,e.__proto__=xe,delete e[r],e[r]=t.value,e.__proto__=i):e[r]=t.value),a="get"in t,o="set"in t,n&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&je&&je.call(e,r,t.get),o&&Ve&&Ve.call(e,r,t.set),e};var $e=ke;function Fe(e,r,t){$e(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}var Ae="function"==typeof Object.defineProperty?Object.defineProperty:null;var Ce=Object.defineProperty;function Oe(e){return"number"==typeof e}function Re(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function Pe(e,r,t){var i=!1,n=r-e.length;return n<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=t?e+Re(n):Re(n)+e,i&&(e="-"+e)),e}var Ze=String.prototype.toLowerCase,Ge=String.prototype.toUpperCase;function We(e){var r,t,i;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,i=parseInt(t,10),!isFinite(i)){if(!Oe(t))throw new Error("invalid integer. Value: "+t);i=0}return i<0&&("u"===e.specifier||10!==r)&&(i=4294967295+i+1),i<0?(t=(-i).toString(r),e.precision&&(t=Pe(t,e.precision,e.padRight)),t="-"+t):(t=i.toString(r),i||e.precision?e.precision&&(t=Pe(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===Ge.call(e.specifier)?Ge.call(t):Ze.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function Ne(e){return"string"==typeof e}var Le=Math.abs,Ue=String.prototype.toLowerCase,Xe=String.prototype.toUpperCase,Be=String.prototype.replace,Me=/e\+(\d)$/,ze=/e-(\d)$/,Ye=/^(\d+)$/,qe=/^(\d+)e/,De=/\.0$/,He=/\.0*e/,Je=/(\..*[^0])0*e/;function Ke(e){var r,t,i=parseFloat(e.arg);if(!isFinite(i)){if(!Oe(e.arg))throw new Error("invalid floating-point number. Value: "+t);i=e.arg}switch(e.specifier){case"e":case"E":t=i.toExponential(e.precision);break;case"f":case"F":t=i.toFixed(e.precision);break;case"g":case"G":Le(i)<1e-4?((r=e.precision)>0&&(r-=1),t=i.toExponential(r)):t=i.toPrecision(e.precision),e.alternate||(t=Be.call(t,Je,"$1e"),t=Be.call(t,He,"e"),t=Be.call(t,De,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=Be.call(t,Me,"e+0$1"),t=Be.call(t,ze,"e-0$1"),e.alternate&&(t=Be.call(t,Ye,"$1."),t=Be.call(t,qe,"$1.e")),i>=0&&e.sign&&(t=e.sign+t),t=e.specifier===Xe.call(e.specifier)?Xe.call(t):Ue.call(t)}function Qe(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function er(e,r,t){var i=r-e.length;return i<0?e:e=t?e+Qe(i):Qe(i)+e}var rr=String.fromCharCode,tr=isNaN,ir=Array.isArray;function nr(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function ar(e){var r,t,i,n,a,o,c,s,l;if(!ir(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",c=1,s=0;s<e.length;s++)if(Ne(i=e[s]))o+=i;else{if(r=void 0!==i.precision,!(i=nr(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+i+"`.");for(i.mapping&&(c=i.mapping),t=i.flags,l=0;l<t.length;l++)switch(n=t.charAt(l)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===i.width){if(i.width=parseInt(arguments[c],10),c+=1,tr(i.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(r&&"*"===i.precision){if(i.precision=parseInt(arguments[c],10),c+=1,tr(i.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,r=!1)}switch(i.arg=arguments[c],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(i.padZeros=!1),i.arg=We(i);break;case"s":i.maxWidth=r?i.precision:-1;break;case"c":if(!tr(i.arg)){if((a=parseInt(i.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=tr(a)?String(i.arg):rr(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(i.precision=6),i.arg=Ke(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=Pe(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=er(i.arg,i.width,i.padRight)),o+=i.arg||"",c+=1}return o}var or=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function cr(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function sr(e){var r,t,i,n;for(t=[],n=0,i=or.exec(e);i;)(r=e.slice(n,or.lastIndex-i[0].length)).length&&t.push(r),t.push(cr(i)),n=or.lastIndex,i=or.exec(e);return(r=e.slice(n)).length&&t.push(r),t}function lr(e){return"string"==typeof e}function pr(e){var r,t;if(!lr(e))throw new TypeError(pr("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[sr(e)],t=1;t<arguments.length;t++)r.push(arguments[t]);return ar.apply(null,r)}var ur,fr=Object.prototype,gr=fr.toString,dr=fr.__defineGetter__,hr=fr.__defineSetter__,wr=fr.__lookupGetter__,br=fr.__lookupSetter__;ur=function(){try{return Ae({},"x",{}),!0}catch(e){return!1}}()?Ce:function(e,r,t){var i,n,a,o;if("object"!=typeof e||null===e||"[object Array]"===gr.call(e))throw new TypeError(pr("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===gr.call(t))throw new TypeError(pr("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((n="value"in t)&&(wr.call(e,r)||br.call(e,r)?(i=e.__proto__,e.__proto__=fr,delete e[r],e[r]=t.value,e.__proto__=i):e[r]=t.value),a="get"in t,o="set"in t,n&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&dr&&dr.call(e,r,t.get),o&&hr&&hr.call(e,r,t.set),e};var vr=ur;function yr(e,r,t){vr(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function mr(e){return"number"==typeof e}function _r(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}var Er=_r();function kr(){return Er&&"symbol"==typeof Symbol.toStringTag}var xr=Object.prototype.toString;var Sr=Object.prototype.hasOwnProperty;function jr(e,r){return null!=e&&Sr.call(e,r)}var Vr="function"==typeof Symbol?Symbol:void 0,Tr="function"==typeof Vr?Vr.toStringTag:"";var Ir=kr()?function(e){var r,t,i;if(null==e)return xr.call(e);t=e[Tr],r=jr(e,Tr);try{e[Tr]=void 0}catch(r){return xr.call(e)}return i=xr.call(e),r?e[Tr]=t:delete e[Tr],i}:function(e){return xr.call(e)},$r=Number,Fr=$r.prototype.toString;var Ar=kr();function Cr(e){return"object"==typeof e&&(e instanceof $r||(Ar?function(e){try{return Fr.call(e),!0}catch(e){return!1}}(e):"[object Number]"===Ir(e)))}function Or(e){return mr(e)||Cr(e)}yr(Or,"isPrimitive",mr),yr(Or,"isObject",Cr);var Rr=Number.POSITIVE_INFINITY,Pr=$r.NEGATIVE_INFINITY;function Zr(e){return e<Rr&&e>Pr&&r(e)}function Gr(e){return mr(e)&&Zr(e)}function Wr(e){return Cr(e)&&Zr(e.valueOf())}function Nr(e){return Gr(e)||Wr(e)}function Lr(e){return Gr(e)&&e>0}function Ur(e){return Wr(e)&&e.valueOf()>0}function Xr(e){return Lr(e)||Ur(e)}Fe(Nr,"isPrimitive",Gr),Fe(Nr,"isObject",Wr),X(Xr,"isPrimitive",Lr),X(Xr,"isObject",Ur);var Br=/./,Mr="function"==typeof Object.defineProperty?Object.defineProperty:null;var zr=Object.defineProperty;function Yr(e){return"number"==typeof e}function qr(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function Dr(e,r,t){var i=!1,n=r-e.length;return n<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=t?e+qr(n):qr(n)+e,i&&(e="-"+e)),e}var Hr=String.prototype.toLowerCase,Jr=String.prototype.toUpperCase;function Kr(e){var r,t,i;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,i=parseInt(t,10),!isFinite(i)){if(!Yr(t))throw new Error("invalid integer. Value: "+t);i=0}return i<0&&("u"===e.specifier||10!==r)&&(i=4294967295+i+1),i<0?(t=(-i).toString(r),e.precision&&(t=Dr(t,e.precision,e.padRight)),t="-"+t):(t=i.toString(r),i||e.precision?e.precision&&(t=Dr(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===Jr.call(e.specifier)?Jr.call(t):Hr.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function Qr(e){return"string"==typeof e}var et=Math.abs,rt=String.prototype.toLowerCase,tt=String.prototype.toUpperCase,it=String.prototype.replace,nt=/e\+(\d)$/,at=/e-(\d)$/,ot=/^(\d+)$/,ct=/^(\d+)e/,st=/\.0$/,lt=/\.0*e/,pt=/(\..*[^0])0*e/;function ut(e){var r,t,i=parseFloat(e.arg);if(!isFinite(i)){if(!Yr(e.arg))throw new Error("invalid floating-point number. Value: "+t);i=e.arg}switch(e.specifier){case"e":case"E":t=i.toExponential(e.precision);break;case"f":case"F":t=i.toFixed(e.precision);break;case"g":case"G":et(i)<1e-4?((r=e.precision)>0&&(r-=1),t=i.toExponential(r)):t=i.toPrecision(e.precision),e.alternate||(t=it.call(t,pt,"$1e"),t=it.call(t,lt,"e"),t=it.call(t,st,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=it.call(t,nt,"e+0$1"),t=it.call(t,at,"e-0$1"),e.alternate&&(t=it.call(t,ot,"$1."),t=it.call(t,ct,"$1.e")),i>=0&&e.sign&&(t=e.sign+t),t=e.specifier===tt.call(e.specifier)?tt.call(t):rt.call(t)}function ft(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function gt(e,r,t){var i=r-e.length;return i<0?e:e=t?e+ft(i):ft(i)+e}var dt=String.fromCharCode,ht=isNaN,wt=Array.isArray;function bt(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function vt(e){var r,t,i,n,a,o,c,s,l;if(!wt(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",c=1,s=0;s<e.length;s++)if(Qr(i=e[s]))o+=i;else{if(r=void 0!==i.precision,!(i=bt(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+i+"`.");for(i.mapping&&(c=i.mapping),t=i.flags,l=0;l<t.length;l++)switch(n=t.charAt(l)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===i.width){if(i.width=parseInt(arguments[c],10),c+=1,ht(i.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(r&&"*"===i.precision){if(i.precision=parseInt(arguments[c],10),c+=1,ht(i.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,r=!1)}switch(i.arg=arguments[c],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(i.padZeros=!1),i.arg=Kr(i);break;case"s":i.maxWidth=r?i.precision:-1;break;case"c":if(!ht(i.arg)){if((a=parseInt(i.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=ht(a)?String(i.arg):dt(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(i.precision=6),i.arg=ut(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=Dr(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=gt(i.arg,i.width,i.padRight)),o+=i.arg||"",c+=1}return o}var yt=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function mt(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function _t(e){var r,t,i,n;for(t=[],n=0,i=yt.exec(e);i;)(r=e.slice(n,yt.lastIndex-i[0].length)).length&&t.push(r),t.push(mt(i)),n=yt.lastIndex,i=yt.exec(e);return(r=e.slice(n)).length&&t.push(r),t}function Et(e){return"string"==typeof e}function kt(e){var r,t;if(!Et(e))throw new TypeError(kt("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[_t(e)],t=1;t<arguments.length;t++)r.push(arguments[t]);return vt.apply(null,r)}var xt,St=Object.prototype,jt=St.toString,Vt=St.__defineGetter__,Tt=St.__defineSetter__,It=St.__lookupGetter__,$t=St.__lookupSetter__;xt=function(){try{return Mr({},"x",{}),!0}catch(e){return!1}}()?zr:function(e,r,t){var i,n,a,o;if("object"!=typeof e||null===e||"[object Array]"===jt.call(e))throw new TypeError(kt("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===jt.call(t))throw new TypeError(kt("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((n="value"in t)&&(It.call(e,r)||$t.call(e,r)?(i=e.__proto__,e.__proto__=St,delete e[r],e[r]=t.value,e.__proto__=i):e[r]=t.value),a="get"in t,o="set"in t,n&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&Vt&&Vt.call(e,r,t.get),o&&Tt&&Tt.call(e,r,t.set),e};var Ft=xt;function At(e,r,t){Ft(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function Ct(e){return"boolean"==typeof e}var Ot=_r();function Rt(){return Ot&&"symbol"==typeof Symbol.toStringTag}var Pt=Object.prototype.toString;var Zt="function"==typeof Symbol?Symbol:void 0,Gt="function"==typeof Zt?Zt.toStringTag:"";var Wt=Rt()?function(e){var r,t,i;if(null==e)return Pt.call(e);t=e[Gt],r=jr(e,Gt);try{e[Gt]=void 0}catch(r){return Pt.call(e)}return i=Pt.call(e),r?e[Gt]=t:delete e[Gt],i}:function(e){return Pt.call(e)},Nt=Boolean,Lt=Boolean.prototype.toString;var Ut=Rt();function Xt(e){return"object"==typeof e&&(e instanceof Nt||(Ut?function(e){try{return Lt.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===Wt(e)))}function Bt(e){return Ct(e)||Xt(e)}function Mt(){return new Function("return this;")()}At(Bt,"isPrimitive",Ct),At(Bt,"isObject",Xt);var zt="object"==typeof self?self:null,Yt="object"==typeof window?window:null,qt="object"==typeof global?global:null,Dt="object"==typeof globalThis?globalThis:null;var Ht=function(e){if(arguments.length){if(!Ct(e))throw new TypeError(kt("invalid argument. Must provide a boolean. Value: `%s`.",e));if(e)return Mt()}if(Dt)return Dt;if(zt)return zt;if(Yt)return Yt;if(qt)return qt;throw new Error("unexpected error. Unable to resolve global object.")}(),Jt=Ht.document&&Ht.document.childNodes,Kt=Int8Array;function Qt(){return/^\s*function\s*([^(]*)/i}var ei=/^\s*function\s*([^(]*)/i;At(Qt,"REGEXP",ei);var ri=Array.isArray?Array.isArray:function(e){return"[object Array]"===Wt(e)};function ti(e){return null!==e&&"object"==typeof e}function ii(e){var r,t,i,n;if(("Object"===(t=Wt(e).slice(8,-1))||"Error"===t)&&e.constructor){if("string"==typeof(i=e.constructor).name)return i.name;if(r=ei.exec(i.toString()))return r[1]}return ti(n=e)&&(n._isBuffer||n.constructor&&"function"==typeof n.constructor.isBuffer&&n.constructor.isBuffer(n))?"Buffer":t}At(ti,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError(kt("invalid argument. Must provide a function. Value: `%s`.",e));return function(r){var t,i;if(!ri(r))return!1;if(0===(t=r.length))return!1;for(i=0;i<t;i++)if(!1===e(r[i]))return!1;return!0}}(ti));var ni="function"==typeof Br||"object"==typeof Kt||"function"==typeof Jt?function(e){return ii(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"===(r=typeof e)?ii(e).toLowerCase():r};function ai(e){return"number"==typeof e}function oi(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function ci(e,r,t){var i=!1,n=r-e.length;return n<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=t?e+oi(n):oi(n)+e,i&&(e="-"+e)),e}var si=String.prototype.toLowerCase,li=String.prototype.toUpperCase;function pi(e){var r,t,i;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,i=parseInt(t,10),!isFinite(i)){if(!ai(t))throw new Error("invalid integer. Value: "+t);i=0}return i<0&&("u"===e.specifier||10!==r)&&(i=4294967295+i+1),i<0?(t=(-i).toString(r),e.precision&&(t=ci(t,e.precision,e.padRight)),t="-"+t):(t=i.toString(r),i||e.precision?e.precision&&(t=ci(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===li.call(e.specifier)?li.call(t):si.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function ui(e){return"string"==typeof e}var fi=Math.abs,gi=String.prototype.toLowerCase,di=String.prototype.toUpperCase,hi=String.prototype.replace,wi=/e\+(\d)$/,bi=/e-(\d)$/,vi=/^(\d+)$/,yi=/^(\d+)e/,mi=/\.0$/,_i=/\.0*e/,Ei=/(\..*[^0])0*e/;function ki(e){var r,t,i=parseFloat(e.arg);if(!isFinite(i)){if(!ai(e.arg))throw new Error("invalid floating-point number. Value: "+t);i=e.arg}switch(e.specifier){case"e":case"E":t=i.toExponential(e.precision);break;case"f":case"F":t=i.toFixed(e.precision);break;case"g":case"G":fi(i)<1e-4?((r=e.precision)>0&&(r-=1),t=i.toExponential(r)):t=i.toPrecision(e.precision),e.alternate||(t=hi.call(t,Ei,"$1e"),t=hi.call(t,_i,"e"),t=hi.call(t,mi,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=hi.call(t,wi,"e+0$1"),t=hi.call(t,bi,"e-0$1"),e.alternate&&(t=hi.call(t,vi,"$1."),t=hi.call(t,yi,"$1.e")),i>=0&&e.sign&&(t=e.sign+t),t=e.specifier===di.call(e.specifier)?di.call(t):gi.call(t)}function xi(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function Si(e,r,t){var i=r-e.length;return i<0?e:e=t?e+xi(i):xi(i)+e}var ji=String.fromCharCode,Vi=isNaN,Ti=Array.isArray;function Ii(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function $i(e){var r,t,i,n,a,o,c,s,l;if(!Ti(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",c=1,s=0;s<e.length;s++)if(ui(i=e[s]))o+=i;else{if(r=void 0!==i.precision,!(i=Ii(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+i+"`.");for(i.mapping&&(c=i.mapping),t=i.flags,l=0;l<t.length;l++)switch(n=t.charAt(l)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===i.width){if(i.width=parseInt(arguments[c],10),c+=1,Vi(i.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(r&&"*"===i.precision){if(i.precision=parseInt(arguments[c],10),c+=1,Vi(i.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,r=!1)}switch(i.arg=arguments[c],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(i.padZeros=!1),i.arg=pi(i);break;case"s":i.maxWidth=r?i.precision:-1;break;case"c":if(!Vi(i.arg)){if((a=parseInt(i.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=Vi(a)?String(i.arg):ji(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(i.precision=6),i.arg=ki(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=ci(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=Si(i.arg,i.width,i.padRight)),o+=i.arg||"",c+=1}return o}var Fi=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Ai(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function Ci(e){var r,t,i,n;for(t=[],n=0,i=Fi.exec(e);i;)(r=e.slice(n,Fi.lastIndex-i[0].length)).length&&t.push(r),t.push(Ai(i)),n=Fi.lastIndex,i=Fi.exec(e);return(r=e.slice(n)).length&&t.push(r),t}function Oi(e){return"string"==typeof e}function Ri(e){var r,t,i;if(!Oi(e))throw new TypeError(Ri("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=Ci(e),(t=new Array(arguments.length))[0]=r,i=1;i<t.length;i++)t[i]=arguments[i];return $i.apply(null,t)}return function(e,t,i,n){var a,o,c,s;if(!("object"==typeof(s=e)&&null!==s&&"number"==typeof s.length&&r(s.length)&&s.length>=0&&s.length<=9007199254740991))throw new TypeError(Ri("invalid argument. First argument must be a collection. Value: `%s`.",e));if(!Lr(t))throw new TypeError(Ri("invalid argument. Second argument must be a positive integer. Value: `%s`.",t));if(!function(e){return"function"===ni(e)}(i))throw new TypeError(Ri("invalid argument. Third argument must be a function. Value: `%s`.",i));for(o=e.length,a=0,c=0;c<o;c++){if(i.call(n,e[c],c,e)&&(a+=1)===t)return!0;o=e.length}return!1}}));
//# sourceMappingURL=index.js.map
