"use strict";var q=function(i,r){return function(){try{return r||i((r={exports:{}}).exports,r),r.exports}catch(e){throw (r=0, e)}};};var s=q(function(l,v){
var c=require('@stdlib/ndarray-base-numel-dimension/dist'),a=require('@stdlib/ndarray-base-stride/dist'),t=require('@stdlib/ndarray-base-offset/dist'),u=require('@stdlib/ndarray-base-data-buffer/dist'),d=require('@stdlib/ndarray-base-ndarraylike2scalar/dist'),o=require('@stdlib/blas-ext-base-gcusumors/dist').ndarray;function g(i){var r=i[0],e=i[1],n=d(i[2]);return o(c(r,0),n,u(r),a(r,0),t(r),u(e),a(e,0),t(e)),e}v.exports=g
});var m=s();module.exports=m;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
