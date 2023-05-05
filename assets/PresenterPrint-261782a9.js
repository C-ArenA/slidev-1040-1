import{d,i as _,a as p,u as h,b as u,c as m,e as f,f as n,g as t,t as a,h as s,F as g,r as v,n as x,j as b,o as r,k as y,l as N,m as P,p as k,q as w,_ as S}from"./index-917903cd.js";import{N as T}from"./NoteDisplay-6013a792.js";const V={class:"m-4"},j={class:"mb-10"},D={class:"text-4xl font-bold mt-2"},F={class:"opacity-50"},L={class:"text-lg"},B={class:"font-bold flex gap-2"},C={class:"opacity-50"},H=t("div",{class:"flex-auto"},null,-1),z={key:0,class:"border-gray-400/50 mb-8"},E=d({__name:"PresenterPrint",setup(M){_(p),h(`
@page {
  size: A4;
  margin-top: 1.5cm;
  margin-bottom: 1cm;
}
* {
  -webkit-print-color-adjust: exact;
}
html,
html body,
html #app,
html #page-root {
  height: auto;
  overflow: auto !important;
}
`),u({title:`Notes - ${m.title}`});const l=f(()=>b.slice(0,-1).map(o=>{var i;return(i=o.meta)==null?void 0:i.slide}).filter(o=>o!==void 0&&o.noteHTML!==""));return(o,i)=>(r(),n("div",{id:"page-root",style:x(s(w))},[t("div",V,[t("div",j,[t("h1",D,a(s(m).title),1),t("div",F,a(new Date().toLocaleString()),1)]),(r(!0),n(g,null,v(s(l),(e,c)=>(r(),n("div",{key:c,class:"flex flex-col gap-4 break-inside-avoid-page"},[t("div",null,[t("h2",L,[t("div",B,[t("div",C,a(e==null?void 0:e.no)+"/"+a(s(y)),1),N(" "+a(e==null?void 0:e.title)+" ",1),H])]),P(T,{"note-html":e.noteHTML,class:"max-w-full"},null,8,["note-html"])]),c<s(l).length-1?(r(),n("hr",z)):k("v-if",!0)]))),128))])],4))}}),G=S(E,[["__file","G:/OneDrive/ETN1040/Problemas_Presentación/Identificación de Problemas para el proyecto de grado/node_modules/@slidev/client/internals/PresenterPrint.vue"]]);export{G as default};
