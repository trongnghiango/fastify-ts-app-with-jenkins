"use strict";var c=Object.create;var a=Object.defineProperty;var d=Object.getOwnPropertyDescriptor;var u=Object.getOwnPropertyNames;var y=Object.getPrototypeOf,x=Object.prototype.hasOwnProperty;var g=(o,i)=>{for(var r in i)a(o,r,{get:i[r],enumerable:!0})},f=(o,i,r,e)=>{if(i&&typeof i=="object"||typeof i=="function")for(let t of u(i))!x.call(o,t)&&t!==r&&a(o,t,{get:()=>i[t],enumerable:!(e=d(i,t))||e.enumerable});return o};var n=(o,i,r)=>(r=o!=null?c(y(o)):{},f(i||!o||!o.__esModule?a(r,"default",{value:o,enumerable:!0}):r,o)),l=o=>f(a({},"__esModule",{value:!0}),o);var _={};g(_,{default:()=>I});module.exports=l(_);var p=n(require("fastify-plugin")),m=n(require("@fastify/autoload")),s=n(require("path"));async function F(o,i){o.register(m.default,{dir:s.default.join(__dirname,"routes"),options:{prefix:i.prefix}})}var I=(0,p.default)(F);
//# sourceMappingURL=index.js.map
