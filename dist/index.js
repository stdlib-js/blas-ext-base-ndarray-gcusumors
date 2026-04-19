"use strict";var q=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var s=q(function(l,v){
var c=require('@stdlib/ndarray-base-numel-dimension/dist'),a=require('@stdlib/ndarray-base-stride/dist'),t=require('@stdlib/ndarray-base-offset/dist'),u=require('@stdlib/ndarray-base-data-buffer/dist'),d=require('@stdlib/ndarray-base-ndarraylike2scalar/dist'),o=require('@stdlib/blas-ext-base-gcusumors/dist').ndarray;function g(e){var r=e[0],i=e[1],n=d(e[2]);return o(c(r,0),n,u(r),a(r,0),t(r),u(i),a(i,0),t(i)),i}v.exports=g
});var m=s();module.exports=m;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
