/*! For license information please see 6b901c5f.e9d4daca.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[51913],{8696:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>n,toc:()=>o});const n=JSON.parse('{"id":"api/puppeteer.httprequest.failure","title":"HTTPRequest.failure() method","description":"Access information about the request\'s failure.","source":"@site/versioned_docs/version-24.6.1/api/puppeteer.httprequest.failure.md","sourceDirName":"api","slug":"/api/puppeteer.httprequest.failure","permalink":"/api/puppeteer.httprequest.failure","draft":false,"unlisted":false,"tags":[],"version":"24.6.1","frontMatter":{"sidebar_label":"HTTPRequest.failure"},"sidebar":"api","previous":{"title":"HTTPRequest.enqueueInterceptAction","permalink":"/api/puppeteer.httprequest.enqueueinterceptaction"},"next":{"title":"HTTPRequest.fetchPostData","permalink":"/api/puppeteer.httprequest.fetchpostdata"}}');var s=r(74848),a=r(28453);const i={sidebar_label:"HTTPRequest.failure"},l="HTTPRequest.failure() method",u={},o=[{value:"Signature",id:"signature",level:3},{value:"Remarks",id:"remarks",level:2},{value:"Example",id:"example",level:2}];function c(e){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"httprequestfailure-method",children:"HTTPRequest.failure() method"})}),"\n",(0,s.jsx)(t.p,{children:"Access information about the request's failure."}),"\n",(0,s.jsx)(t.h3,{id:"signature",children:"Signature"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typescript",children:"class HTTPRequest {\n  abstract failure(): {\n    errorText: string;\n  } | null;\n}\n"})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Returns:"})}),"\n",(0,s.jsx)(t.p,{children:"{ errorText: string; } | null"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"null"})," unless the request failed. If the request fails this can return an object with ",(0,s.jsx)(t.code,{children:"errorText"})," containing a human-readable error message, e.g. ",(0,s.jsx)(t.code,{children:"net::ERR_FAILED"}),". It is not guaranteed that there will be failure text if the request fails."]}),"\n",(0,s.jsx)(t.h2,{id:"remarks",children:"Remarks"}),"\n",(0,s.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,s.jsx)(t.p,{children:"Example of logging all failed requests:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:"page.on('requestfailed', request => {\n  console.log(request.url() + ' ' + request.failure().errorText);\n});\n"})})]})}function p(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},28453:(e,t,r)=>{r.d(t,{R:()=>i,x:()=>l});var n=r(96540);const s={},a=n.createContext(s);function i(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(a.Provider,{value:t},e.children)}},29698:(e,t)=>{var r=Symbol.for("react.transitional.element"),n=Symbol.for("react.fragment");function s(e,t,n){var s=null;if(void 0!==n&&(s=""+n),void 0!==t.key&&(s=""+t.key),"key"in t)for(var a in n={},t)"key"!==a&&(n[a]=t[a]);else n=t;return t=n.ref,{$$typeof:r,type:e,key:s,ref:void 0!==t?t:null,props:n}}t.Fragment=n,t.jsx=s,t.jsxs=s},74848:(e,t,r)=>{e.exports=r(29698)}}]);