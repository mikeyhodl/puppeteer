"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[52871],{3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>g});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function p(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=n.createContext({}),i=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):p(p({},r),e)),t},l=function(e){var r=i(e.components);return n.createElement(c.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},v=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),v=i(t),g=o,f=v["".concat(c,".").concat(g)]||v[g]||u[g]||a;return t?n.createElement(f,p(p({ref:r},l),{},{components:t})):n.createElement(f,p({ref:r},l))}));function g(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,p=new Array(a);p[0]=v;var s={};for(var c in r)hasOwnProperty.call(r,c)&&(s[c]=r[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,p[1]=s;for(var i=2;i<a;i++)p[i]=t[i];return n.createElement.apply(null,p)}return n.createElement.apply(null,t)}v.displayName="MDXCreateElement"},76670:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>s,default:()=>v,frontMatter:()=>p,metadata:()=>c,toc:()=>l});t(67294);var n=t(3905);function o(){return o=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},o.apply(this,arguments)}function a(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}const p={sidebar_label:"Coverage.stopCSSCoverage"},s="Coverage.stopCSSCoverage() method",c={unversionedId:"api/puppeteer.coverage.stopcsscoverage",id:"version-19.2.1/api/puppeteer.coverage.stopcsscoverage",title:"Coverage.stopCSSCoverage() method",description:"Signature:",source:"@site/versioned_docs/version-19.2.1/api/puppeteer.coverage.stopcsscoverage.md",sourceDirName:"api",slug:"/api/puppeteer.coverage.stopcsscoverage",permalink:"/api/puppeteer.coverage.stopcsscoverage",draft:!1,tags:[],version:"19.2.1",frontMatter:{sidebar_label:"Coverage.stopCSSCoverage"},sidebar:"api",previous:{title:"Coverage.startJSCoverage",permalink:"/api/puppeteer.coverage.startjscoverage"},next:{title:"Coverage.stopJSCoverage",permalink:"/api/puppeteer.coverage.stopjscoverage"}},i={},l=[{value:"Signature:",id:"signature",level:4},{value:"Remarks",id:"remarks",level:2}],u={toc:l};function v(e){var{components:r}=e,t=a(e,["components"]);return(0,n.kt)("wrapper",o({},u,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",o({},{id:"coveragestopcsscoverage-method"}),"Coverage.stopCSSCoverage() method"),(0,n.kt)("h4",o({},{id:"signature"}),"Signature:"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-typescript"}),"class Coverage {\n  stopCSSCoverage(): Promise<CoverageEntry[]>;\n}\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Returns:")),(0,n.kt)("p",null,"Promise","<",(0,n.kt)("a",o({parentName:"p"},{href:"/api/puppeteer.coverageentry"}),"CoverageEntry"),"[","]",">"),(0,n.kt)("p",null,"Promise that resolves to the array of coverage reports for all stylesheets."),(0,n.kt)("h2",o({},{id:"remarks"}),"Remarks"),(0,n.kt)("p",null,"CSS Coverage doesn't include dynamically injected style tags without sourceURLs."))}v.isMDXComponent=!0}}]);