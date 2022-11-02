"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[17312],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(67294);function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){p(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,p=function(e,t){if(null==e)return{};var r,n,p={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(p[r]=e[r]);return p}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(p[r]=e[r])}return p}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,p=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),f=s(r),d=p,y=f["".concat(l,".").concat(d)]||f[d]||u[d]||i;return r?n.createElement(y,a(a({ref:t},c),{},{components:r})):n.createElement(y,a({ref:t},c))}));function d(e,t){var r=arguments,p=t&&t.mdxType;if("string"==typeof e||p){var i=r.length,a=new Array(i);a[0]=f;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:p,a[1]=o;for(var s=2;s<i;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},86373:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>f,frontMatter:()=>a,metadata:()=>l,toc:()=>c});r(67294);var n=r(3905);function p(){return p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},p.apply(this,arguments)}function i(e,t){if(null==e)return{};var r,n,p=function(e,t){if(null==e)return{};var r,n,p={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(p[r]=e[r]);return p}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(p[r]=e[r])}return p}const a={sidebar_label:"PDFOptions.preferCSSPageSize"},o="PDFOptions.preferCSSPageSize property",l={unversionedId:"api/puppeteer.pdfoptions.prefercsspagesize",id:"version-19.2.1/api/puppeteer.pdfoptions.prefercsspagesize",title:"PDFOptions.preferCSSPageSize property",description:"Give any CSS @page size declared in the page priority over what is declared in the width or height or format option.",source:"@site/versioned_docs/version-19.2.1/api/puppeteer.pdfoptions.prefercsspagesize.md",sourceDirName:"api",slug:"/api/puppeteer.pdfoptions.prefercsspagesize",permalink:"/api/puppeteer.pdfoptions.prefercsspagesize",draft:!1,tags:[],version:"19.2.1",frontMatter:{sidebar_label:"PDFOptions.preferCSSPageSize"},sidebar:"api",previous:{title:"PDFOptions.path",permalink:"/api/puppeteer.pdfoptions.path"},next:{title:"PDFOptions.printBackground",permalink:"/api/puppeteer.pdfoptions.printbackground"}},s={},c=[{value:"Signature:",id:"signature",level:4},{value:"Default value:",id:"default-value",level:4}],u={toc:c};function f(e){var{components:t}=e,r=i(e,["components"]);return(0,n.kt)("wrapper",p({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",p({},{id:"pdfoptionsprefercsspagesize-property"}),"PDFOptions.preferCSSPageSize property"),(0,n.kt)("p",null,"Give any CSS ",(0,n.kt)("inlineCode",{parentName:"p"},"@page")," size declared in the page priority over what is declared in the ",(0,n.kt)("inlineCode",{parentName:"p"},"width")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"height")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"format")," option."),(0,n.kt)("h4",p({},{id:"signature"}),"Signature:"),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-typescript"}),"interface PDFOptions {\n  preferCSSPageSize?: boolean;\n}\n")),(0,n.kt)("h4",p({},{id:"default-value"}),"Default value:"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"false"),", which will scale the content to fit the paper size."))}f.isMDXComponent=!0}}]);