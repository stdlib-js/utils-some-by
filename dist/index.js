"use strict";var f=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var m=f(function(y,v){
var g=require('@stdlib/assert-is-collection/dist'),h=require('@stdlib/assert-is-positive-integer/dist').isPrimitive,l=require('@stdlib/assert-is-function/dist'),n=require('@stdlib/error-tools-fmtprodmsg/dist');function w(r,e,t,o){var u,s,a,i;if(!g(r))throw new TypeError(n('1XdAh',r));if(!h(e))throw new TypeError(n('1Xd45',e));if(!l(t))throw new TypeError(n('1Xd3N',t));for(a=r.length,u=0,i=0;i<a;i++){if(s=t.call(o,r[i],i,r),s&&(u+=1,u===e))return!0;a=r.length}return!1}v.exports=w
});var q=m();module.exports=q;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
