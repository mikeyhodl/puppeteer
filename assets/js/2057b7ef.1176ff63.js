/*! For license information please see 2057b7ef.1176ff63.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[43485],{28453:(e,t,r)=>{r.d(t,{R:()=>a,x:()=>o});var n=r(96540);const s={},i=n.createContext(s);function a(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),n.createElement(i.Provider,{value:t},e.children)}},29698:(e,t)=>{var r=Symbol.for("react.transitional.element"),n=Symbol.for("react.fragment");function s(e,t,n){var s=null;if(void 0!==n&&(s=""+n),void 0!==t.key&&(s=""+t.key),"key"in t)for(var i in n={},t)"key"!==i&&(n[i]=t[i]);else n=t;return t=n.ref,{$$typeof:r,type:e,key:s,ref:void 0!==t?t:null,props:n}}t.Fragment=n,t.jsx=s,t.jsxs=s},74848:(e,t,r)=>{e.exports=r(29698)},89704:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>l,frontMatter:()=>a,metadata:()=>n,toc:()=>c});const n=JSON.parse('{"id":"api/puppeteer.tracing.stop","title":"Tracing.stop() method","description":"Stops a trace started with the start method.","source":"@site/../docs/api/puppeteer.tracing.stop.md","sourceDirName":"api","slug":"/api/puppeteer.tracing.stop","permalink":"/next/api/puppeteer.tracing.stop","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"Tracing.stop"},"sidebar":"api","previous":{"title":"Tracing.start","permalink":"/next/api/puppeteer.tracing.start"},"next":{"title":"FileChooser","permalink":"/next/api/puppeteer.filechooser"}}');var s=r(74848),i=r(28453);const a={sidebar_label:"Tracing.stop"},o="Tracing.stop() method",p={},c=[{value:"Signature",id:"signature",level:3}];function d(e){const t={code:"code",h1:"h1",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"tracingstop-method",children:"Tracing.stop() method"})}),"\n",(0,s.jsxs)(t.p,{children:["Stops a trace started with the ",(0,s.jsx)(t.code,{children:"start"})," method."]}),"\n",(0,s.jsx)(t.h3,{id:"signature",children:"Signature"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typescript",children:"class Tracing {\n  stop(): Promise<Uint8Array | undefined>;\n}\n"})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Returns:"})}),"\n",(0,s.jsx)(t.p,{children:"Promise<Uint8Array | undefined>"}),"\n",(0,s.jsx)(t.p,{children:"Promise which resolves to buffer with trace data."})]})}function l(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}}}]);