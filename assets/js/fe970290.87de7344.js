/*! For license information please see fe970290.87de7344.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[10389],{28453:(e,s,r)=>{r.d(s,{R:()=>d,x:()=>h});var t=r(96540);const n={},i=t.createContext(n);function d(e){const s=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function h(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:d(e.components),t.createElement(i.Provider,{value:s},e.children)}},29698:(e,s)=>{var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function n(e,s,t){var n=null;if(void 0!==t&&(n=""+t),void 0!==s.key&&(n=""+s.key),"key"in s)for(var i in t={},s)"key"!==i&&(t[i]=s[i]);else t=s;return s=t.ref,{$$typeof:r,type:e,key:n,ref:void 0!==s?s:null,props:t}}s.Fragment=t,s.jsx=n,s.jsxs=n},37273:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>p,contentTitle:()=>h,default:()=>a,frontMatter:()=>d,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"api/puppeteer.httpresponse","title":"HTTPResponse class","description":"The HTTPResponse class represents responses which are received by the Page class.","source":"@site/versioned_docs/version-24.6.1/api/puppeteer.httpresponse.md","sourceDirName":"api","slug":"/api/puppeteer.httpresponse","permalink":"/api/puppeteer.httpresponse","draft":false,"unlisted":false,"tags":[],"version":"24.6.1","frontMatter":{"sidebar_label":"HTTPResponse"},"sidebar":"api","previous":{"title":"HTTPRequest.url","permalink":"/api/puppeteer.httprequest.url"},"next":{"title":"HTTPResponse.buffer","permalink":"/api/puppeteer.httpresponse.buffer"}}');var n=r(74848),i=r(28453);const d={sidebar_label:"HTTPResponse"},h="HTTPResponse class",p={},c=[{value:"Signature",id:"signature",level:3},{value:"Remarks",id:"remarks",level:2},{value:"Methods",id:"methods",level:2}];function o(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.header,{children:(0,n.jsx)(s.h1,{id:"httpresponse-class",children:"HTTPResponse class"})}),"\n",(0,n.jsxs)(s.p,{children:["The HTTPResponse class represents responses which are received by the ",(0,n.jsx)(s.a,{href:"/api/puppeteer.page",children:"Page"})," class."]}),"\n",(0,n.jsx)(s.h3,{id:"signature",children:"Signature"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-typescript",children:"export declare abstract class HTTPResponse\n"})}),"\n",(0,n.jsx)(s.h2,{id:"remarks",children:"Remarks"}),"\n",(0,n.jsxs)(s.p,{children:["The constructor for this class is marked as internal. Third-party code should not call the constructor directly or create subclasses that extend the ",(0,n.jsx)(s.code,{children:"HTTPResponse"})," class."]}),"\n",(0,n.jsx)(s.h2,{id:"methods",children:"Methods"}),"\n",(0,n.jsxs)("table",{children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:(0,n.jsx)(s.p,{children:"Method"})}),(0,n.jsx)("th",{children:(0,n.jsx)(s.p,{children:"Modifiers"})}),(0,n.jsx)("th",{children:(0,n.jsx)(s.p,{children:"Description"})})]})}),(0,n.jsxs)("tbody",{children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("span",{id:"buffer",children:(0,n.jsx)(s.a,{href:"/api/puppeteer.httpresponse.buffer",children:"buffer()"})})}),(0,n.jsx)("td",{}),(0,n.jsxs)("td",{children:[(0,n.jsx)(s.p,{children:"Promise which resolves to a buffer with response body."}),(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"Remarks:"})}),(0,n.jsxs)(s.p,{children:["The buffer might be re-encoded by the browser based on HTTP-headers or other heuristics. If the browser failed to detect the correct encoding, the buffer might be encoded incorrectly. See ",(0,n.jsx)(s.a,{href:"https://github.com/puppeteer/puppeteer/issues/6478",children:"https://github.com/puppeteer/puppeteer/issues/6478"}),"."]})]})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("span",{id:"content",children:(0,n.jsx)(s.a,{href:"/api/puppeteer.httpresponse.content",children:"content()"})})}),(0,n.jsx)("td",{}),(0,n.jsxs)("td",{children:[(0,n.jsx)(s.p,{children:"Promise which resolves to a buffer with response body."}),(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"Remarks:"})}),(0,n.jsxs)(s.p,{children:["The buffer might be re-encoded by the browser based on HTTP-headers or other heuristics. If the browser failed to detect the correct encoding, the buffer might be encoded incorrectly. See ",(0,n.jsx)(s.a,{href:"https://github.com/puppeteer/puppeteer/issues/6478",children:"https://github.com/puppeteer/puppeteer/issues/6478"}),"."]})]})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("span",{id:"frame",children:(0,n.jsx)(s.a,{href:"/api/puppeteer.httpresponse.frame",children:"frame()"})})}),(0,n.jsx)("td",{}),(0,n.jsx)("td",{children:(0,n.jsxs)(s.p,{children:["A ",(0,n.jsx)(s.a,{href:"/api/puppeteer.frame",children:"Frame"})," that initiated this response, or ",(0,n.jsx)(s.code,{children:"null"})," if navigating to error pages."]})})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("span",{id:"fromcache",children:(0,n.jsx)(s.a,{href:"/api/puppeteer.httpresponse.fromcache",children:"fromCache()"})})}),(0,n.jsx)("td",{}),(0,n.jsx)("td",{children:(0,n.jsx)(s.p,{children:"True if the response was served from either the browser's disk cache or memory cache."})})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("span",{id:"fromserviceworker",children:(0,n.jsx)(s.a,{href:"/api/puppeteer.httpresponse.fromserviceworker",children:"fromServiceWorker()"})})}),(0,n.jsx)("td",{}),(0,n.jsx)("td",{children:(0,n.jsx)(s.p,{children:"True if the response was served by a service worker."})})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("span",{id:"headers",children:(0,n.jsx)(s.a,{href:"/api/puppeteer.httpresponse.headers",children:"headers()"})})}),(0,n.jsx)("td",{}),(0,n.jsx)("td",{children:(0,n.jsx)(s.p,{children:"An object with HTTP headers associated with the response. All header names are lower-case."})})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("span",{id:"json",children:(0,n.jsx)(s.a,{href:"/api/puppeteer.httpresponse.json",children:"json()"})})}),(0,n.jsx)("td",{}),(0,n.jsxs)("td",{children:[(0,n.jsx)(s.p,{children:"Promise which resolves to a JSON representation of response body."}),(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"Remarks:"})}),(0,n.jsxs)(s.p,{children:["This method will throw if the response body is not parsable via ",(0,n.jsx)(s.code,{children:"JSON.parse"}),"."]})]})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("span",{id:"ok",children:(0,n.jsx)(s.a,{href:"/api/puppeteer.httpresponse.ok",children:"ok()"})})}),(0,n.jsx)("td",{}),(0,n.jsx)("td",{children:(0,n.jsx)(s.p,{children:"True if the response was successful (status in the range 200-299)."})})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("span",{id:"remoteaddress",children:(0,n.jsx)(s.a,{href:"/api/puppeteer.httpresponse.remoteaddress",children:"remoteAddress()"})})}),(0,n.jsx)("td",{}),(0,n.jsx)("td",{children:(0,n.jsx)(s.p,{children:"The IP address and port number used to connect to the remote server."})})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("span",{id:"request",children:(0,n.jsx)(s.a,{href:"/api/puppeteer.httpresponse.request",children:"request()"})})}),(0,n.jsx)("td",{}),(0,n.jsx)("td",{children:(0,n.jsxs)(s.p,{children:["A matching ",(0,n.jsx)(s.a,{href:"/api/puppeteer.httprequest",children:"HTTPRequest"})," object."]})})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("span",{id:"securitydetails",children:(0,n.jsx)(s.a,{href:"/api/puppeteer.httpresponse.securitydetails",children:"securityDetails()"})})}),(0,n.jsx)("td",{}),(0,n.jsx)("td",{children:(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.a,{href:"/api/puppeteer.securitydetails",children:"SecurityDetails"})," if the response was received over the secure connection, or ",(0,n.jsx)(s.code,{children:"null"})," otherwise."]})})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("span",{id:"status",children:(0,n.jsx)(s.a,{href:"/api/puppeteer.httpresponse.status",children:"status()"})})}),(0,n.jsx)("td",{}),(0,n.jsx)("td",{children:(0,n.jsx)(s.p,{children:"The status code of the response (e.g., 200 for a success)."})})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("span",{id:"statustext",children:(0,n.jsx)(s.a,{href:"/api/puppeteer.httpresponse.statustext",children:"statusText()"})})}),(0,n.jsx)("td",{}),(0,n.jsx)("td",{children:(0,n.jsx)(s.p,{children:'The status text of the response (e.g. usually an "OK" for a success).'})})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("span",{id:"text",children:(0,n.jsx)(s.a,{href:"/api/puppeteer.httpresponse.text",children:"text()"})})}),(0,n.jsx)("td",{}),(0,n.jsx)("td",{children:(0,n.jsx)(s.p,{children:"Promise which resolves to a text (utf8) representation of response body."})})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("span",{id:"timing",children:(0,n.jsx)(s.a,{href:"/api/puppeteer.httpresponse.timing",children:"timing()"})})}),(0,n.jsx)("td",{}),(0,n.jsx)("td",{children:(0,n.jsx)(s.p,{children:"Timing information related to the response."})})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("span",{id:"url",children:(0,n.jsx)(s.a,{href:"/api/puppeteer.httpresponse.url",children:"url()"})})}),(0,n.jsx)("td",{}),(0,n.jsx)("td",{children:(0,n.jsx)(s.p,{children:"The URL of the response."})})]})]})]})]})}function a(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(o,{...e})}):o(e)}},74848:(e,s,r)=>{e.exports=r(29698)}}]);