"use strict";var l=Object.create;var a=Object.defineProperty;var c=Object.getOwnPropertyDescriptor;var p=Object.getOwnPropertyNames;var f=Object.getPrototypeOf,g=Object.prototype.hasOwnProperty;var y=(r,o)=>{for(var e in o)a(r,e,{get:o[e],enumerable:!0})},n=(r,o,e,t)=>{if(o&&typeof o=="object"||typeof o=="function")for(let s of p(o))!g.call(r,s)&&s!==e&&a(r,s,{get:()=>o[s],enumerable:!(t=c(o,s))||t.enumerable});return r};var i=(r,o,e)=>(e=r!=null?l(f(r)):{},n(o||!r||!r.__esModule?a(e,"default",{value:r,enumerable:!0}):e,r)),q=r=>n(a({},"__esModule",{value:!0}),r);var T={};y(T,{build:()=>w});module.exports=q(T);var d=i(require("fastify")),m=i(require("@fastify/autoload")),u=require("path");async function w(r={}){const o=(0,d.default)(r);return console.log("(\u25E5\u2040\u072B\u2040\u25E4)",__dirname),o.register(m.default,{dir:(0,u.join)(__dirname,"modules"),encapsulate:!1,maxDepth:1}),o.addHook("preSerialization",async(e,t,s)=>({wrapped:s})),o.setErrorHandler(async(e,t,s)=>(console.log("TEST::::",e.message),e.validation?(s.code(403),e.message):(t.log.error("TEST:::",{err:e}),s.code(e.statusCode||500),e||"I'm sorry, there was an error processing your request."))),o.setNotFoundHandler(async(e,t)=>(t.code(404),{msg:"I'm sorry, I couldn't find what you were looking for."})),o}0&&(module.exports={build});
//# sourceMappingURL=app.js.map
