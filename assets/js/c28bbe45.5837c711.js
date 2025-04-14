/*! For license information please see c28bbe45.5837c711.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[49968],{28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>l});var r=n(96540);const i={},s=r.createContext(i);function o(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(s.Provider,{value:t},e.children)}},29698:(e,t)=>{var n=Symbol.for("react.transitional.element"),r=Symbol.for("react.fragment");function i(e,t,r){var i=null;if(void 0!==r&&(i=""+r),void 0!==t.key&&(i=""+t.key),"key"in t)for(var s in r={},t)"key"!==s&&(r[s]=t[s]);else r=t;return t=r.ref,{$$typeof:n,type:e,key:i,ref:void 0!==t?t:null,props:r}}t.Fragment=r,t.jsx=i,t.jsxs=i},40723:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"api/puppeteer.locator.fill","title":"Locator.fill() method","description":"Fills out the input identified by the locator using the provided value. The type of the input is determined at runtime and the appropriate fill-out method is chosen based on the type. contenteditable, select, textarea and input elements are supported.","source":"@site/versioned_docs/version-24.6.1/api/puppeteer.locator.fill.md","sourceDirName":"api","slug":"/api/puppeteer.locator.fill","permalink":"/api/puppeteer.locator.fill","draft":false,"unlisted":false,"tags":[],"version":"24.6.1","frontMatter":{"sidebar_label":"Locator.fill"},"sidebar":"api","previous":{"title":"Locator.clone","permalink":"/api/puppeteer.locator.clone"},"next":{"title":"Locator.filter","permalink":"/api/puppeteer.locator.filter"}}');var i=n(74848),s=n(28453);const o={sidebar_label:"Locator.fill"},l="Locator.fill() method",a={},d=[{value:"Signature",id:"signature",level:3},{value:"Parameters",id:"parameters",level:2}];function c(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"locatorfill-method",children:"Locator.fill() method"})}),"\n",(0,i.jsxs)(t.p,{children:["Fills out the input identified by the locator using the provided value. The type of the input is determined at runtime and the appropriate fill-out method is chosen based on the type. ",(0,i.jsx)(t.code,{children:"contenteditable"}),", select, textarea and input elements are supported."]}),"\n",(0,i.jsx)(t.h3,{id:"signature",children:"Signature"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-typescript",children:"class Locator {\n  fill<ElementType extends Element>(\n    this: Locator<ElementType>,\n    value: string,\n    options?: Readonly<ActionOptions>,\n  ): Promise<void>;\n}\n"})}),"\n",(0,i.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsxs)("table",{children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:(0,i.jsx)(t.p,{children:"Parameter"})}),(0,i.jsx)("th",{children:(0,i.jsx)(t.p,{children:"Type"})}),(0,i.jsx)("th",{children:(0,i.jsx)(t.p,{children:"Description"})})]})}),(0,i.jsxs)("tbody",{children:[(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(t.p,{children:"this"})}),(0,i.jsx)("td",{children:(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"/api/puppeteer.locator",children:"Locator"}),"<ElementType>"]})}),(0,i.jsx)("td",{})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(t.p,{children:"value"})}),(0,i.jsx)("td",{children:(0,i.jsx)(t.p,{children:"string"})}),(0,i.jsx)("td",{})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(t.p,{children:"options"})}),(0,i.jsx)("td",{children:(0,i.jsxs)(t.p,{children:["Readonly<",(0,i.jsx)(t.a,{href:"/api/puppeteer.actionoptions",children:"ActionOptions"}),">"]})}),(0,i.jsx)("td",{children:(0,i.jsx)(t.p,{children:(0,i.jsx)(t.em,{children:"(Optional)"})})})]})]})]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Returns:"})}),"\n",(0,i.jsx)(t.p,{children:"Promise<void>"})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},74848:(e,t,n)=>{e.exports=n(29698)}}]);