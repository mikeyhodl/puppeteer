/*! For license information please see 71f72716.9eb2cde0.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[10338],{28453:(e,r,n)=>{n.d(r,{R:()=>c,x:()=>a});var t=n(96540);const i={},s=t.createContext(i);function c(e){const r=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),t.createElement(s.Provider,{value:r},e.children)}},29698:(e,r)=>{var n=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(e,r,t){var i=null;if(void 0!==t&&(i=""+t),void 0!==r.key&&(i=""+r.key),"key"in r)for(var s in t={},r)"key"!==s&&(t[s]=r[s]);else t=r;return r=t.ref,{$$typeof:n,type:e,key:i,ref:void 0!==r?r:null,props:t}}r.Fragment=t,r.jsx=i,r.jsxs=i},45001:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>c,metadata:()=>t,toc:()=>o});const t=JSON.parse('{"id":"api/puppeteer.frame.click","title":"Frame.click() method","description":"Clicks the first element found that matches selector.","source":"@site/versioned_docs/version-24.6.1/api/puppeteer.frame.click.md","sourceDirName":"api","slug":"/api/puppeteer.frame.click","permalink":"/api/puppeteer.frame.click","draft":false,"unlisted":false,"tags":[],"version":"24.6.1","frontMatter":{"sidebar_label":"Frame.click"},"sidebar":"api","previous":{"title":"Frame.childFrames","permalink":"/api/puppeteer.frame.childframes"},"next":{"title":"Frame.content","permalink":"/api/puppeteer.frame.content"}}');var i=n(74848),s=n(28453);const c={sidebar_label:"Frame.click"},a="Frame.click() method",l={},o=[{value:"Signature",id:"signature",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2}];function d(e){const r={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.header,{children:(0,i.jsx)(r.h1,{id:"frameclick-method",children:"Frame.click() method"})}),"\n",(0,i.jsxs)(r.p,{children:["Clicks the first element found that matches ",(0,i.jsx)(r.code,{children:"selector"}),"."]}),"\n",(0,i.jsx)(r.h3,{id:"signature",children:"Signature"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-typescript",children:"class Frame {\n  click(selector: string, options?: Readonly<ClickOptions>): Promise<void>;\n}\n"})}),"\n",(0,i.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsxs)("table",{children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:(0,i.jsx)(r.p,{children:"Parameter"})}),(0,i.jsx)("th",{children:(0,i.jsx)(r.p,{children:"Type"})}),(0,i.jsx)("th",{children:(0,i.jsx)(r.p,{children:"Description"})})]})}),(0,i.jsxs)("tbody",{children:[(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(r.p,{children:"selector"})}),(0,i.jsx)("td",{children:(0,i.jsx)(r.p,{children:"string"})}),(0,i.jsx)("td",{children:(0,i.jsx)(r.p,{children:"The selector to query for."})})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(r.p,{children:"options"})}),(0,i.jsx)("td",{children:(0,i.jsxs)(r.p,{children:["Readonly<",(0,i.jsx)(r.a,{href:"/api/puppeteer.clickoptions",children:"ClickOptions"}),">"]})}),(0,i.jsx)("td",{children:(0,i.jsx)(r.p,{children:(0,i.jsx)(r.em,{children:"(Optional)"})})})]})]})]}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.strong,{children:"Returns:"})}),"\n",(0,i.jsx)(r.p,{children:"Promise<void>"}),"\n",(0,i.jsx)(r.h2,{id:"remarks",children:"Remarks"}),"\n",(0,i.jsxs)(r.p,{children:["If ",(0,i.jsx)(r.code,{children:"click()"})," triggers a navigation event and there's a separate ",(0,i.jsx)(r.code,{children:"page.waitForNavigation()"})," promise to be resolved, you may end up with a race condition that yields unexpected results. The correct pattern for click and wait for navigation is the following:"]}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-ts",children:"const [response] = await Promise.all([\n  page.waitForNavigation(waitOptions),\n  frame.click(selector, clickOptions),\n]);\n"})})]})}function p(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},74848:(e,r,n)=>{e.exports=n(29698)}}]);