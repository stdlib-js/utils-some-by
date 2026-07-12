"use strict";var f=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(i){throw (r=0, i)}};};var m=f(function(y,v){
var g=require('@stdlib/assert-is-collection/dist'),h=require('@stdlib/assert-is-positive-integer/dist').isPrimitive,l=require('@stdlib/assert-is-function/dist'),n=require('@stdlib/error-tools-fmtprodmsg/dist');function w(e,r,i,o){var u,s,a,t;if(!g(e))throw new TypeError(n('1XdAh',e));if(!h(r))throw new TypeError(n('1Xd45',r));if(!l(i))throw new TypeError(n('1Xd3N',i));for(a=e.length,u=0,t=0;t<a;t++){if(s=i.call(o,e[t],t,e),s&&(u+=1,u===r))return!0;a=e.length}return!1}v.exports=w
});var q=m();module.exports=q;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
