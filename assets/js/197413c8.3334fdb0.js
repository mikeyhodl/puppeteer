/*! For license information please see 197413c8.3334fdb0.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[71493],{28453:(e,t,i)=>{i.d(t,{R:()=>o,x:()=>l});var n=i(96540);const r={},s=n.createContext(r);function o(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),n.createElement(s.Provider,{value:t},e.children)}},29698:(e,t)=>{var i=Symbol.for("react.transitional.element"),n=Symbol.for("react.fragment");function r(e,t,n){var r=null;if(void 0!==n&&(r=""+n),void 0!==t.key&&(r=""+t.key),"key"in t)for(var s in n={},t)"key"!==s&&(n[s]=t[s]);else n=t;return t=n.ref,{$$typeof:i,type:e,key:r,ref:void 0!==t?t:null,props:n}}t.Fragment=n,t.jsx=r,t.jsxs=r},46668:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>n,toc:()=>c});const n=JSON.parse('{"id":"api/puppeteer.waitforoptions","title":"WaitForOptions interface","description":"Signature","source":"@site/../docs/api/puppeteer.waitforoptions.md","sourceDirName":"api","slug":"/api/puppeteer.waitforoptions","permalink":"/next/api/puppeteer.waitforoptions","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"WaitForOptions"},"sidebar":"api","previous":{"title":"WaitForNetworkIdleOptions","permalink":"/next/api/puppeteer.waitfornetworkidleoptions"},"next":{"title":"WaitForSelectorOptions","permalink":"/next/api/puppeteer.waitforselectoroptions"}}');var r=i(74848),s=i(28453);const o={sidebar_label:"WaitForOptions"},l="WaitForOptions interface",a={},c=[{value:"Signature",id:"signature",level:3},{value:"Properties",id:"properties",level:2}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"waitforoptions-interface",children:"WaitForOptions interface"})}),"\n",(0,r.jsx)(t.h3,{id:"signature",children:"Signature"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:"export interface WaitForOptions\n"})}),"\n",(0,r.jsx)(t.h2,{id:"properties",children:"Properties"}),"\n",(0,r.jsxs)("table",{children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:(0,r.jsx)(t.p,{children:"Property"})}),(0,r.jsx)("th",{children:(0,r.jsx)(t.p,{children:"Modifiers"})}),(0,r.jsx)("th",{children:(0,r.jsx)(t.p,{children:"Type"})}),(0,r.jsx)("th",{children:(0,r.jsx)(t.p,{children:"Description"})}),(0,r.jsx)("th",{children:(0,r.jsx)(t.p,{children:"Default"})})]})}),(0,r.jsxs)("tbody",{children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("span",{id:"signal",children:"signal"})}),(0,r.jsx)("td",{children:(0,r.jsx)(t.p,{children:(0,r.jsx)(t.code,{children:"optional"})})}),(0,r.jsx)("td",{children:(0,r.jsx)(t.p,{children:"AbortSignal"})}),(0,r.jsx)("td",{children:(0,r.jsx)(t.p,{children:"A signal object that allows you to cancel the call."})}),(0,r.jsx)("td",{})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("span",{id:"timeout",children:"timeout"})}),(0,r.jsx)("td",{children:(0,r.jsx)(t.p,{children:(0,r.jsx)(t.code,{children:"optional"})})}),(0,r.jsx)("td",{children:(0,r.jsx)(t.p,{children:"number"})}),(0,r.jsxs)("td",{children:[(0,r.jsx)(t.p,{children:"Maximum wait time in milliseconds. Pass 0 to disable the timeout."}),(0,r.jsxs)(t.p,{children:["The default value can be changed by using the ",(0,r.jsx)(t.a,{href:"/next/api/puppeteer.page.setdefaulttimeout",children:"Page.setDefaultTimeout()"})," or ",(0,r.jsx)(t.a,{href:"/next/api/puppeteer.page.setdefaultnavigationtimeout",children:"Page.setDefaultNavigationTimeout()"})," methods."]})]}),(0,r.jsx)("td",{children:(0,r.jsx)(t.p,{children:(0,r.jsx)(t.code,{children:"30000"})})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("span",{id:"waituntil",children:"waitUntil"})}),(0,r.jsx)("td",{children:(0,r.jsx)(t.p,{children:(0,r.jsx)(t.code,{children:"optional"})})}),(0,r.jsx)("td",{children:(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/next/api/puppeteer.puppeteerlifecycleevent",children:"PuppeteerLifeCycleEvent"})," | ",(0,r.jsx)(t.a,{href:"/next/api/puppeteer.puppeteerlifecycleevent",children:"PuppeteerLifeCycleEvent"}),"[]"]})}),(0,r.jsx)("td",{children:(0,r.jsx)(t.p,{children:"When to consider waiting succeeds. Given an array of event strings, waiting is considered to be successful after all events have been fired."})}),(0,r.jsx)("td",{children:(0,r.jsx)(t.p,{children:(0,r.jsx)(t.code,{children:"'load'"})})})]})]})]})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},74848:(e,t,i)=>{e.exports=i(29698)}}]);