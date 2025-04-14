/*! For license information please see 54ce439f.d319a07c.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[14162],{28453:(e,r,s)=>{s.d(r,{R:()=>i,x:()=>c});var t=s(96540);const d={},n=t.createContext(d);function i(e){const r=t.useContext(n);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:i(e.components),t.createElement(n.Provider,{value:r},e.children)}},29698:(e,r)=>{var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function d(e,r,t){var d=null;if(void 0!==t&&(d=""+t),void 0!==r.key&&(d=""+r.key),"key"in r)for(var n in t={},r)"key"!==n&&(t[n]=r[n]);else t=r;return r=t.ref,{$$typeof:s,type:e,key:d,ref:void 0!==r?r:null,props:t}}r.Fragment=t,r.jsx=d,r.jsxs=d},49813:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>p,contentTitle:()=>c,default:()=>j,frontMatter:()=>i,metadata:()=>t,toc:()=>x});const t=JSON.parse('{"id":"api/puppeteer.pageevents","title":"PageEvents interface","description":"Denotes the objects received by callback functions for page events.","source":"@site/versioned_docs/version-24.6.1/api/puppeteer.pageevents.md","sourceDirName":"api","slug":"/api/puppeteer.pageevents","permalink":"/api/puppeteer.pageevents","draft":false,"unlisted":false,"tags":[],"version":"24.6.1","frontMatter":{"sidebar_label":"PageEvents"},"sidebar":"api","previous":{"title":"PageEvent","permalink":"/api/puppeteer.pageevent"},"next":{"title":"PaperFormat","permalink":"/api/puppeteer.paperformat"}}');var d=s(74848),n=s(28453);const i={sidebar_label:"PageEvents"},c="PageEvents interface",p={},x=[{value:"Signature",id:"signature",level:3},{value:"Properties",id:"properties",level:2}];function l(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,n.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(r.header,{children:(0,d.jsx)(r.h1,{id:"pageevents-interface",children:"PageEvents interface"})}),"\n",(0,d.jsx)(r.p,{children:"Denotes the objects received by callback functions for page events."}),"\n",(0,d.jsxs)(r.p,{children:["See ",(0,d.jsx)(r.a,{href:"/api/puppeteer.pageevent",children:"PageEvent"})," for more detail on the events and when they are emitted."]}),"\n",(0,d.jsx)(r.h3,{id:"signature",children:"Signature"}),"\n",(0,d.jsx)(r.pre,{children:(0,d.jsx)(r.code,{className:"language-typescript",children:"export interface PageEvents extends Record<EventType, unknown>\n"})}),"\n",(0,d.jsxs)(r.p,{children:[(0,d.jsx)(r.strong,{children:"Extends:"})," Record<",(0,d.jsx)(r.a,{href:"/api/puppeteer.eventtype",children:"EventType"}),", unknown>"]}),"\n",(0,d.jsx)(r.h2,{id:"properties",children:"Properties"}),"\n",(0,d.jsxs)("table",{children:[(0,d.jsx)("thead",{children:(0,d.jsxs)("tr",{children:[(0,d.jsx)("th",{children:(0,d.jsx)(r.p,{children:"Property"})}),(0,d.jsx)("th",{children:(0,d.jsx)(r.p,{children:"Modifiers"})}),(0,d.jsx)("th",{children:(0,d.jsx)(r.p,{children:"Type"})}),(0,d.jsx)("th",{children:(0,d.jsx)(r.p,{children:"Description"})}),(0,d.jsx)("th",{children:(0,d.jsx)(r.p,{children:"Default"})})]})}),(0,d.jsxs)("tbody",{children:[(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:(0,d.jsx)("span",{id:"close",children:"close"})}),(0,d.jsx)("td",{}),(0,d.jsx)("td",{children:(0,d.jsx)(r.p,{children:"undefined"})}),(0,d.jsx)("td",{}),(0,d.jsx)("td",{})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:(0,d.jsx)("span",{id:"console",children:"console"})}),(0,d.jsx)("td",{}),(0,d.jsx)("td",{children:(0,d.jsx)(r.p,{children:(0,d.jsx)(r.a,{href:"/api/puppeteer.consolemessage",children:"ConsoleMessage"})})}),(0,d.jsx)("td",{}),(0,d.jsx)("td",{})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:(0,d.jsx)("span",{id:"dialog",children:"dialog"})}),(0,d.jsx)("td",{}),(0,d.jsx)("td",{children:(0,d.jsx)(r.p,{children:(0,d.jsx)(r.a,{href:"/api/puppeteer.dialog",children:"Dialog"})})}),(0,d.jsx)("td",{}),(0,d.jsx)("td",{})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:(0,d.jsx)("span",{id:"domcontentloaded",children:"domcontentloaded"})}),(0,d.jsx)("td",{}),(0,d.jsx)("td",{children:(0,d.jsx)(r.p,{children:"undefined"})}),(0,d.jsx)("td",{}),(0,d.jsx)("td",{})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:(0,d.jsx)("span",{id:"error",children:"error"})}),(0,d.jsx)("td",{}),(0,d.jsx)("td",{children:(0,d.jsx)(r.p,{children:"Error"})}),(0,d.jsx)("td",{}),(0,d.jsx)("td",{})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:(0,d.jsx)("span",{id:"frameattached",children:"frameattached"})}),(0,d.jsx)("td",{}),(0,d.jsx)("td",{children:(0,d.jsx)(r.p,{children:(0,d.jsx)(r.a,{href:"/api/puppeteer.frame",children:"Frame"})})}),(0,d.jsx)("td",{}),(0,d.jsx)("td",{})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:(0,d.jsx)("span",{id:"framedetached",children:"framedetached"})}),(0,d.jsx)("td",{}),(0,d.jsx)("td",{children:(0,d.jsx)(r.p,{children:(0,d.jsx)(r.a,{href:"/api/puppeteer.frame",children:"Frame"})})}),(0,d.jsx)("td",{}),(0,d.jsx)("td",{})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:(0,d.jsx)("span",{id:"framenavigated",children:"framenavigated"})}),(0,d.jsx)("td",{}),(0,d.jsx)("td",{children:(0,d.jsx)(r.p,{children:(0,d.jsx)(r.a,{href:"/api/puppeteer.frame",children:"Frame"})})}),(0,d.jsx)("td",{}),(0,d.jsx)("td",{})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:(0,d.jsx)("span",{id:"load",children:"load"})}),(0,d.jsx)("td",{}),(0,d.jsx)("td",{children:(0,d.jsx)(r.p,{children:"undefined"})}),(0,d.jsx)("td",{}),(0,d.jsx)("td",{})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:(0,d.jsx)("span",{id:"metrics",children:"metrics"})}),(0,d.jsx)("td",{}),(0,d.jsx)("td",{children:(0,d.jsxs)(r.p,{children:["{ title: string; metrics: ",(0,d.jsx)(r.a,{href:"/api/puppeteer.metrics",children:"Metrics"}),"; }"]})}),(0,d.jsx)("td",{}),(0,d.jsx)("td",{})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:(0,d.jsx)("span",{id:"pageerror",children:"pageerror"})}),(0,d.jsx)("td",{}),(0,d.jsx)("td",{children:(0,d.jsx)(r.p,{children:"Error"})}),(0,d.jsx)("td",{}),(0,d.jsx)("td",{})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:(0,d.jsx)("span",{id:"popup",children:"popup"})}),(0,d.jsx)("td",{}),(0,d.jsx)("td",{children:(0,d.jsxs)(r.p,{children:[(0,d.jsx)(r.a,{href:"/api/puppeteer.page",children:"Page"})," | null"]})}),(0,d.jsx)("td",{}),(0,d.jsx)("td",{})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:(0,d.jsx)("span",{id:"request",children:"request"})}),(0,d.jsx)("td",{}),(0,d.jsx)("td",{children:(0,d.jsx)(r.p,{children:(0,d.jsx)(r.a,{href:"/api/puppeteer.httprequest",children:"HTTPRequest"})})}),(0,d.jsx)("td",{}),(0,d.jsx)("td",{})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:(0,d.jsx)("span",{id:"requestfailed",children:"requestfailed"})}),(0,d.jsx)("td",{}),(0,d.jsx)("td",{children:(0,d.jsx)(r.p,{children:(0,d.jsx)(r.a,{href:"/api/puppeteer.httprequest",children:"HTTPRequest"})})}),(0,d.jsx)("td",{}),(0,d.jsx)("td",{})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:(0,d.jsx)("span",{id:"requestfinished",children:"requestfinished"})}),(0,d.jsx)("td",{}),(0,d.jsx)("td",{children:(0,d.jsx)(r.p,{children:(0,d.jsx)(r.a,{href:"/api/puppeteer.httprequest",children:"HTTPRequest"})})}),(0,d.jsx)("td",{}),(0,d.jsx)("td",{})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:(0,d.jsx)("span",{id:"requestservedfromcache",children:"requestservedfromcache"})}),(0,d.jsx)("td",{}),(0,d.jsx)("td",{children:(0,d.jsx)(r.p,{children:(0,d.jsx)(r.a,{href:"/api/puppeteer.httprequest",children:"HTTPRequest"})})}),(0,d.jsx)("td",{}),(0,d.jsx)("td",{})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:(0,d.jsx)("span",{id:"response",children:"response"})}),(0,d.jsx)("td",{}),(0,d.jsx)("td",{children:(0,d.jsx)(r.p,{children:(0,d.jsx)(r.a,{href:"/api/puppeteer.httpresponse",children:"HTTPResponse"})})}),(0,d.jsx)("td",{}),(0,d.jsx)("td",{})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:(0,d.jsx)("span",{id:"workercreated",children:"workercreated"})}),(0,d.jsx)("td",{}),(0,d.jsx)("td",{children:(0,d.jsx)(r.p,{children:(0,d.jsx)(r.a,{href:"/api/puppeteer.webworker",children:"WebWorker"})})}),(0,d.jsx)("td",{}),(0,d.jsx)("td",{})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:(0,d.jsx)("span",{id:"workerdestroyed",children:"workerdestroyed"})}),(0,d.jsx)("td",{}),(0,d.jsx)("td",{children:(0,d.jsx)(r.p,{children:(0,d.jsx)(r.a,{href:"/api/puppeteer.webworker",children:"WebWorker"})})}),(0,d.jsx)("td",{}),(0,d.jsx)("td",{})]})]})]})]})}function j(e={}){const{wrapper:r}={...(0,n.R)(),...e.components};return r?(0,d.jsx)(r,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}},74848:(e,r,s)=>{e.exports=s(29698)}}]);