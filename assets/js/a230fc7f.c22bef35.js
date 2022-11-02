"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2290],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>y});var n=r(67294);function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){p(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,p=function(e,t){if(null==e)return{};var r,n,p={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(p[r]=e[r]);return p}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(p[r]=e[r])}return p}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,p=e.mdxType,o=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),f=c(r),y=p,d=f["".concat(u,".").concat(y)]||f[y]||l[y]||o;return r?n.createElement(d,a(a({ref:t},s),{},{components:r})):n.createElement(d,a({ref:t},s))}));function y(e,t){var r=arguments,p=t&&t.mdxType;if("string"==typeof e||p){var o=r.length,a=new Array(o);a[0]=f;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:p,a[1]=i;for(var c=2;c<o;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},86368:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>f,frontMatter:()=>a,metadata:()=>u,toc:()=>s});r(67294);var n=r(3905);function p(){return p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},p.apply(this,arguments)}function o(e,t){if(null==e)return{};var r,n,p=function(e,t){if(null==e)return{};var r,n,p={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(p[r]=e[r]);return p}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(p[r]=e[r])}return p}const a={sidebar_label:"PuppeteerNodeLaunchOptions"},i="PuppeteerNodeLaunchOptions type",u={unversionedId:"api/puppeteer.puppeteernodelaunchoptions",id:"version-19.2.1/api/puppeteer.puppeteernodelaunchoptions",title:"PuppeteerNodeLaunchOptions type",description:"Utility type exposed to enable users to define options that can be passed to puppeteer.launch without having to list the set of all types.",source:"@site/versioned_docs/version-19.2.1/api/puppeteer.puppeteernodelaunchoptions.md",sourceDirName:"api",slug:"/api/puppeteer.puppeteernodelaunchoptions",permalink:"/api/puppeteer.puppeteernodelaunchoptions",draft:!1,tags:[],version:"19.2.1",frontMatter:{sidebar_label:"PuppeteerNodeLaunchOptions"},sidebar:"api",previous:{title:"PuppeteerLifeCycleEvent",permalink:"/api/puppeteer.puppeteerlifecycleevent"},next:{title:"registerCustomQueryHandler",permalink:"/api/puppeteer.registercustomqueryhandler"}},c={},s=[{value:"Signature:",id:"signature",level:4}],l={toc:s};function f(e){var{components:t}=e,r=o(e,["components"]);return(0,n.kt)("wrapper",p({},l,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",p({},{id:"puppeteernodelaunchoptions-type"}),"PuppeteerNodeLaunchOptions type"),(0,n.kt)("p",null,"Utility type exposed to enable users to define options that can be passed to ",(0,n.kt)("inlineCode",{parentName:"p"},"puppeteer.launch")," without having to list the set of all types."),(0,n.kt)("h4",p({},{id:"signature"}),"Signature:"),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-typescript"}),"export declare type PuppeteerNodeLaunchOptions = BrowserLaunchArgumentOptions &\n  LaunchOptions &\n  BrowserConnectOptions;\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"References:")," ",(0,n.kt)("a",p({parentName:"p"},{href:"/api/puppeteer.browserlaunchargumentoptions"}),"BrowserLaunchArgumentOptions"),", ",(0,n.kt)("a",p({parentName:"p"},{href:"/api/puppeteer.launchoptions"}),"LaunchOptions"),", ",(0,n.kt)("a",p({parentName:"p"},{href:"/api/puppeteer.browserconnectoptions"}),"BrowserConnectOptions")))}f.isMDXComponent=!0}}]);