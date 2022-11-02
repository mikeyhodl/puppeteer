"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[79250],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>m});var n=t(67294);function p(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){p(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,p=function(e,r){if(null==e)return{};var t,n,p={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(p[t]=e[t]);return p}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(p[t]=e[t])}return p}var s=n.createContext({}),l=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},u=function(e){var r=l(e.components);return n.createElement(s.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,p=e.mdxType,a=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),f=l(t),m=p,y=f["".concat(s,".").concat(m)]||f[m]||c[m]||a;return t?n.createElement(y,o(o({ref:r},u),{},{components:t})):n.createElement(y,o({ref:r},u))}));function m(e,r){var t=arguments,p=r&&r.mdxType;if("string"==typeof e||p){var a=t.length,o=new Array(a);o[0]=f;var i={};for(var s in r)hasOwnProperty.call(r,s)&&(i[s]=r[s]);i.originalType=e,i.mdxType="string"==typeof e?e:p,o[1]=i;for(var l=2;l<a;l++)o[l]=t[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},50735:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>f,frontMatter:()=>o,metadata:()=>s,toc:()=>u});t(67294);var n=t(3905);function p(){return p=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},p.apply(this,arguments)}function a(e,r){if(null==e)return{};var t,n,p=function(e,r){if(null==e)return{};var t,n,p={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(p[t]=e[t]);return p}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(p[t]=e[t])}return p}const o={sidebar_label:"HTTPResponse.frame"},i="HTTPResponse.frame() method",s={unversionedId:"api/puppeteer.httpresponse.frame",id:"version-19.2.1/api/puppeteer.httpresponse.frame",title:"HTTPResponse.frame() method",description:"Signature:",source:"@site/versioned_docs/version-19.2.1/api/puppeteer.httpresponse.frame.md",sourceDirName:"api",slug:"/api/puppeteer.httpresponse.frame",permalink:"/api/puppeteer.httpresponse.frame",draft:!1,tags:[],version:"19.2.1",frontMatter:{sidebar_label:"HTTPResponse.frame"},sidebar:"api",previous:{title:"HTTPResponse.buffer",permalink:"/api/puppeteer.httpresponse.buffer"},next:{title:"HTTPResponse.fromCache",permalink:"/api/puppeteer.httpresponse.fromcache"}},l={},u=[{value:"Signature:",id:"signature",level:4}],c={toc:u};function f(e){var{components:r}=e,t=a(e,["components"]);return(0,n.kt)("wrapper",p({},c,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",p({},{id:"httpresponseframe-method"}),"HTTPResponse.frame() method"),(0,n.kt)("h4",p({},{id:"signature"}),"Signature:"),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-typescript"}),"class HTTPResponse {\n  frame(): Frame | null;\n}\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Returns:")),(0,n.kt)("p",null,(0,n.kt)("a",p({parentName:"p"},{href:"/api/puppeteer.frame"}),"Frame")," ","|"," null"),(0,n.kt)("p",null,"A ",(0,n.kt)("a",p({parentName:"p"},{href:"/api/puppeteer.frame"}),"Frame")," that initiated this response, or ",(0,n.kt)("inlineCode",{parentName:"p"},"null")," if navigating to error pages."))}f.isMDXComponent=!0}}]);