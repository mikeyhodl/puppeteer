"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[15072],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>y});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),f=u(r),y=a,d=f["".concat(l,".").concat(y)]||f[y]||s[y]||i;return r?n.createElement(d,o(o({ref:t},c),{},{components:r})):n.createElement(d,o({ref:t},c))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=f;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var u=2;u<i;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},29734:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>f,frontMatter:()=>o,metadata:()=>l,toc:()=>c});r(67294);var n=r(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const o={sidebar_label:"LaunchOptions.waitForInitialPage"},p="LaunchOptions.waitForInitialPage property",l={unversionedId:"api/puppeteer.launchoptions.waitforinitialpage",id:"version-19.2.1/api/puppeteer.launchoptions.waitforinitialpage",title:"LaunchOptions.waitForInitialPage property",description:"Whether to wait for the initial page to be ready. Useful when a user explicitly disables that (e.g. --no-startup-window for Chrome).",source:"@site/versioned_docs/version-19.2.1/api/puppeteer.launchoptions.waitforinitialpage.md",sourceDirName:"api",slug:"/api/puppeteer.launchoptions.waitforinitialpage",permalink:"/api/puppeteer.launchoptions.waitforinitialpage",draft:!1,tags:[],version:"19.2.1",frontMatter:{sidebar_label:"LaunchOptions.waitForInitialPage"},sidebar:"api",previous:{title:"LaunchOptions.timeout",permalink:"/api/puppeteer.launchoptions.timeout"},next:{title:"LowerCasePaperFormat",permalink:"/api/puppeteer.lowercasepaperformat"}},u={},c=[{value:"Signature:",id:"signature",level:4},{value:"Default value:",id:"default-value",level:4}],s={toc:c};function f(e){var{components:t}=e,r=i(e,["components"]);return(0,n.kt)("wrapper",a({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",a({},{id:"launchoptionswaitforinitialpage-property"}),"LaunchOptions.waitForInitialPage property"),(0,n.kt)("p",null,"Whether to wait for the initial page to be ready. Useful when a user explicitly disables that (e.g. ",(0,n.kt)("inlineCode",{parentName:"p"},"--no-startup-window")," for Chrome)."),(0,n.kt)("h4",a({},{id:"signature"}),"Signature:"),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-typescript"}),"interface LaunchOptions {\n  waitForInitialPage?: boolean;\n}\n")),(0,n.kt)("h4",a({},{id:"default-value"}),"Default value:"),(0,n.kt)("p",null,"true"))}f.isMDXComponent=!0}}]);