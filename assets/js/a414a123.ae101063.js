/*! For license information please see a414a123.ae101063.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[87348],{28453:(e,t,r)=>{r.d(t,{R:()=>a,x:()=>o});var s=r(96540);const n={},i=s.createContext(n);function a(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),s.createElement(i.Provider,{value:t},e.children)}},29698:(e,t)=>{var r=Symbol.for("react.transitional.element"),s=Symbol.for("react.fragment");function n(e,t,s){var n=null;if(void 0!==s&&(n=""+s),void 0!==t.key&&(n=""+t.key),"key"in t)for(var i in s={},t)"key"!==i&&(s[i]=t[i]);else s=t;return t=s.ref,{$$typeof:r,type:e,key:n,ref:void 0!==t?t:null,props:s}}t.Fragment=s,t.jsx=n,t.jsxs=n},33874:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"api/puppeteer.page.setviewport","title":"Page.setViewport() method","description":"page.setViewport will resize the page. A lot of websites don\'t expect phones to change size, so you should set the viewport before navigating to the page.","source":"@site/../docs/api/puppeteer.page.setviewport.md","sourceDirName":"api","slug":"/api/puppeteer.page.setviewport","permalink":"/next/api/puppeteer.page.setviewport","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"Page.setViewport"},"sidebar":"api","previous":{"title":"Page.setUserAgent","permalink":"/next/api/puppeteer.page.setuseragent"},"next":{"title":"Page.tap","permalink":"/next/api/puppeteer.page.tap"}}');var n=r(74848),i=r(28453);const a={sidebar_label:"Page.setViewport"},o="Page.setViewport() method",p={},l=[{value:"Signature",id:"signature",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Example",id:"example",level:2}];function c(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"pagesetviewport-method",children:"Page.setViewport() method"})}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"page.setViewport"})," will resize the page. A lot of websites don't expect phones to change size, so you should set the viewport before navigating to the page."]}),"\n",(0,n.jsxs)(t.p,{children:["In the case of multiple pages in a single browser, each page can have its own viewport size. Setting the viewport to ",(0,n.jsx)(t.code,{children:"null"})," resets the viewport to its default value."]}),"\n",(0,n.jsx)(t.h3,{id:"signature",children:"Signature"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",children:"class Page {\n  abstract setViewport(viewport: Viewport | null): Promise<void>;\n}\n"})}),"\n",(0,n.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)("table",{children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:(0,n.jsx)(t.p,{children:"Parameter"})}),(0,n.jsx)("th",{children:(0,n.jsx)(t.p,{children:"Type"})}),(0,n.jsx)("th",{children:(0,n.jsx)(t.p,{children:"Description"})})]})}),(0,n.jsx)("tbody",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(t.p,{children:"viewport"})}),(0,n.jsx)("td",{children:(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"/next/api/puppeteer.viewport",children:"Viewport"})," | null"]})}),(0,n.jsx)("td",{})]})})]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Returns:"})}),"\n",(0,n.jsx)(t.p,{children:"Promise<void>"}),"\n",(0,n.jsx)(t.h2,{id:"remarks",children:"Remarks"}),"\n",(0,n.jsx)(t.p,{children:"NOTE: in certain cases, setting viewport will reload the page in order to set the isMobile or hasTouch properties."}),"\n",(0,n.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",children:"const page = await browser.newPage();\nawait page.setViewport({\n  width: 640,\n  height: 480,\n  deviceScaleFactor: 1,\n});\nawait page.goto('https://example.com');\n"})})]})}function d(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},74848:(e,t,r)=>{e.exports=r(29698)}}]);