"use strict";var o=Object.defineProperty;var c=Object.getOwnPropertyDescriptor;var p=Object.getOwnPropertyNames;var g=Object.prototype.hasOwnProperty;var d=(e,n)=>{for(var a in n)o(e,a,{get:n[a],enumerable:!0})},y=(e,n,a,s)=>{if(n&&typeof n=="object"||typeof n=="function")for(let t of p(n))!g.call(e,t)&&t!==a&&o(e,t,{get:()=>n[t],enumerable:!(s=c(n,t))||s.enumerable});return e};var u=e=>y(o({},"__esModule",{value:!0}),e);var l={};d(l,{default:()=>h});module.exports=u(l);var m=require("@prisma/client");const i=new m.PrismaClient;async function h(e,n){e.post("/add-many",async(a,s)=>({data:await i.giaoVien.findMany({}),msg:"add many records"})),e.post("/create",{schema:{body:{type:"object",properties:{email:{type:"string"},name:{type:"number"}}}}},async(a,s)=>{const{name:t,email:r}=a.body;return s.send({msg:"created"})}),e.get("/list",async(a,s)=>{const t=await i.giaoVien.findMany(),r=await i.hocSinh.findMany();return s.send({data:{giaovien:t,hocsinh:r},msg:"List..."})}),e.get("/:MaGV",{schema:{params:{type:"object",properties:{MaGV:{type:"string"}}}}},async(a,s)=>{const{MaGV:t}=a.params,r=await i.giaoVien.findFirst({where:{MaGV:t}});return s.send({data:r,msg:r?"OK":"Kh\xF4ng t\xECm th\u1EA5y"})}),e.delete("/:MaGV",{schema:{params:{type:"object",properties:{MaGV:{type:"string"}}}}},async(a,s)=>{const{MaGV:t}=a.params,r=await i.giaoVien.delete({where:{MaGV:t}});return s.send({msg:r?"deleted":"not delete"})})}
//# sourceMappingURL=giaovien.js.map
