/*! For license information please see b1bd41e4.8dab64e3.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[54600],{3569:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>o,frontMatter:()=>i,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"api/puppeteer.page.evaluate","title":"Page.evaluate() method","description":"Evaluates a function in the page\'s context and returns the result.","source":"@site/versioned_docs/version-24.6.1/api/puppeteer.page.evaluate.md","sourceDirName":"api","slug":"/api/puppeteer.page.evaluate","permalink":"/api/puppeteer.page.evaluate","draft":false,"unlisted":false,"tags":[],"version":"24.6.1","frontMatter":{"sidebar_label":"Page.evaluate"},"sidebar":"api","previous":{"title":"Page.emulateVisionDeficiency","permalink":"/api/puppeteer.page.emulatevisiondeficiency"},"next":{"title":"Page.evaluateHandle","permalink":"/api/puppeteer.page.evaluatehandle"}}');var s=a(74848),r=a(28453);const i={sidebar_label:"Page.evaluate"},l="Page.evaluate() method",c={},d=[{value:"Signature",id:"signature",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Example 1",id:"example-1",level:2},{value:"Example 2",id:"example-2",level:2},{value:"Example 3",id:"example-3",level:2}];function p(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"pageevaluate-method",children:"Page.evaluate() method"})}),"\n",(0,s.jsx)(n.p,{children:"Evaluates a function in the page's context and returns the result."}),"\n",(0,s.jsxs)(n.p,{children:["If the function passed to ",(0,s.jsx)(n.code,{children:"page.evaluate"})," returns a Promise, the function will wait for the promise to resolve and return its value."]}),"\n",(0,s.jsx)(n.h3,{id:"signature",children:"Signature"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"class Page {\n  evaluate<\n    Params extends unknown[],\n    Func extends EvaluateFunc<Params> = EvaluateFunc<Params>,\n  >(\n    pageFunction: Func | string,\n    ...args: Params\n  ): Promise<Awaited<ReturnType<Func>>>;\n}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)("table",{children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:(0,s.jsx)(n.p,{children:"Parameter"})}),(0,s.jsx)("th",{children:(0,s.jsx)(n.p,{children:"Type"})}),(0,s.jsx)("th",{children:(0,s.jsx)(n.p,{children:"Description"})})]})}),(0,s.jsxs)("tbody",{children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(n.p,{children:"pageFunction"})}),(0,s.jsx)("td",{children:(0,s.jsx)(n.p,{children:"Func | string"})}),(0,s.jsx)("td",{children:(0,s.jsx)(n.p,{children:"a function that is run within the page"})})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(n.p,{children:"args"})}),(0,s.jsx)("td",{children:(0,s.jsx)(n.p,{children:"Params"})}),(0,s.jsx)("td",{children:(0,s.jsx)(n.p,{children:"arguments to be passed to the pageFunction"})})]})]})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Returns:"})}),"\n",(0,s.jsx)(n.p,{children:"Promise<Awaited<ReturnType<Func>>>"}),"\n",(0,s.jsxs)(n.p,{children:["the return value of ",(0,s.jsx)(n.code,{children:"pageFunction"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"example-1",children:"Example 1"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:'const result = await frame.evaluate(() => {\n  return Promise.resolve(8 * 7);\n});\nconsole.log(result); // prints "56"\n'})}),"\n",(0,s.jsx)(n.p,{children:"You can pass a string instead of a function (although functions are recommended as they are easier to debug and use with TypeScript):"}),"\n",(0,s.jsx)(n.h2,{id:"example-2",children:"Example 2"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"const aHandle = await page.evaluate('1 + 2');\n"})}),"\n",(0,s.jsxs)(n.p,{children:["To get the best TypeScript experience, you should pass in as the generic the type of ",(0,s.jsx)(n.code,{children:"pageFunction"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"const aHandle = await page.evaluate(() => 2);\n"})}),"\n",(0,s.jsx)(n.h2,{id:"example-3",children:"Example 3"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/api/puppeteer.elementhandle",children:"ElementHandle"})," instances (including ",(0,s.jsx)(n.a,{href:"/api/puppeteer.jshandle",children:"JSHandle"}),"s) can be passed as arguments to the ",(0,s.jsx)(n.code,{children:"pageFunction"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"const bodyHandle = await page.$('body');\nconst html = await page.evaluate(body => body.innerHTML, bodyHandle);\nawait bodyHandle.dispose();\n"})})]})}function o(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},28453:(e,n,a)=>{a.d(n,{R:()=>i,x:()=>l});var t=a(96540);const s={},r=t.createContext(s);function i(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(r.Provider,{value:n},e.children)}},29698:(e,n)=>{var a=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function s(e,n,t){var s=null;if(void 0!==t&&(s=""+t),void 0!==n.key&&(s=""+n.key),"key"in n)for(var r in t={},n)"key"!==r&&(t[r]=n[r]);else t=n;return n=t.ref,{$$typeof:a,type:e,key:s,ref:void 0!==n?n:null,props:t}}n.Fragment=t,n.jsx=s,n.jsxs=s},74848:(e,n,a)=>{e.exports=a(29698)}}]);