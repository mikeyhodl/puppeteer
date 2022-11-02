"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[29514,30889],{51272:(e,t,n)=>{n.r(t),n.d(t,{default:()=>Ze});var a=n(67294),r=n(86010),l=n(34285),o=n(65319),c=n(56391),i=n(53964),s=n(27391),d=n(25682),u=n(5953),m=n(92210),p=n(6379),b=n(58010);const f="backToTopButton_sjWU",h="backToTopButtonShow_xfvO";function v(){const{shown:e,scrollToTop:t}=function({threshold:e}){const[t,n]=(0,a.useState)(!1),r=(0,a.useRef)(!1),{startScroll:l,cancelScroll:o}=(0,p.Ct)();return(0,p.RF)((({scrollY:t},a)=>{const l=null==a?void 0:a.scrollY;l&&(r.current?r.current=!1:t>=l?(o(),n(!1)):t<e?n(!1):t+window.innerHeight<document.documentElement.scrollHeight&&n(!0))})),(0,b.S)((e=>{e.location.hash&&(r.current=!0,n(!1))})),{shown:t,scrollToTop:()=>l(0)}}({threshold:300});return a.createElement("button",{"aria-label":(0,m.I)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,r.Z)("clean-btn",o.k.common.backToTopButton,f,e&&h),type:"button",onClick:t})}var E=n(76775),g=n(24683),y=n(86016),k=n(49572);function _(){return _=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},_.apply(this,arguments)}function O(e){return a.createElement("svg",_({width:"20",height:"20","aria-hidden":"true"},e),a.createElement("g",{fill:"#7a7a7a"},a.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),a.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))}const C="collapseSidebarButton_PEFL",I="collapseSidebarButtonIcon_kv0_";function S({onClick:e}){return a.createElement("button",{type:"button",title:(0,m.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,m.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,r.Z)("button button--secondary button--outline",C),onClick:e},a.createElement(O,{className:I}))}var N=n(64738),x=n(37806);const w=Symbol("EmptyContext"),j=a.createContext(w);function P({children:e}){const[t,n]=(0,a.useState)(null),r=(0,a.useMemo)((()=>({expandedItem:t,setExpandedItem:n})),[t]);return a.createElement(j.Provider,{value:r},e)}var T=n(52647),Z=n(87275),L=n(31984),M=n(30358);function A(){return A=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},A.apply(this,arguments)}function B(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function F({categoryLabel:e,onClick:t}){return a.createElement("button",{"aria-label":(0,m.I)({id:"theme.DocSidebarItem.toggleCollapsedCategoryAriaLabel",message:"Toggle the collapsible sidebar category '{label}'",description:"The ARIA label to toggle the collapsible sidebar category"},{label:e}),type:"button",className:"clean-btn menu__caret",onClick:t})}function H(e){var{item:t,onItemClick:n,activePath:l,level:c,index:s}=e,d=B(e,["item","onItemClick","activePath","level","index"]);const{items:u,label:m,collapsible:p,className:b,href:f}=t,{docs:{sidebar:{autoCollapseCategories:h}}}=(0,y.L)(),v=function(e){const t=(0,M.Z)();return(0,a.useMemo)((()=>e.href?e.href:!t&&e.collapsible?(0,i.Wl)(e):void 0),[e,t])}(t),E=(0,i._F)(t,l),g=(0,Z.Mg)(f,l),{collapsed:k,setCollapsed:_}=(0,T.u)({initialState:()=>!!p&&(!E&&t.collapsed)}),{expandedItem:O,setExpandedItem:C}=function(){const e=(0,a.useContext)(j);if(e===w)throw new x.i6("DocSidebarItemsExpandedStateProvider");return e}(),I=(e=!k)=>{C(e?null:s),_(e)};return function({isActive:e,collapsed:t,updateCollapsed:n}){const r=(0,x.D9)(e);(0,a.useEffect)((()=>{e&&!r&&t&&n(!1)}),[e,r,t,n])}({isActive:E,collapsed:k,updateCollapsed:I}),(0,a.useEffect)((()=>{p&&null!=O&&O!==s&&h&&_(!0)}),[p,O,s,_,h]),a.createElement("li",{className:(0,r.Z)(o.k.docs.docSidebarItemCategory,o.k.docs.docSidebarItemCategoryLevel(c),"menu__list-item",{"menu__list-item--collapsed":k},b)},a.createElement("div",{className:(0,r.Z)("menu__list-item-collapsible",{"menu__list-item-collapsible--active":g})},a.createElement(L.Z,A({className:(0,r.Z)("menu__link",{"menu__link--sublist":p,"menu__link--sublist-caret":!f&&p,"menu__link--active":E}),onClick:p?e=>{null==n||n(t),f?I(!1):(e.preventDefault(),I())}:()=>{null==n||n(t)},"aria-current":g?"page":void 0,"aria-expanded":p?!k:void 0,href:p?null!=v?v:"#":v},d),m),f&&p&&a.createElement(F,{categoryLabel:m,onClick:e=>{e.preventDefault(),I()}})),a.createElement(T.z,{lazy:!0,as:"ul",className:"menu__list",collapsed:k},a.createElement(ee,{items:u,tabIndex:k?-1:0,onItemClick:n,activePath:l,level:c+1})))}var W=n(47785),D=n(40379);const R="menuExternalLink_NmtK";function z(){return z=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},z.apply(this,arguments)}function U(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function K(e){var{item:t,onItemClick:n,activePath:l,level:c,index:s}=e,d=U(e,["item","onItemClick","activePath","level","index"]);const{href:u,label:m,className:p,autoAddBaseUrl:b}=t,f=(0,i._F)(t,l),h=(0,W.Z)(u);return a.createElement("li",{className:(0,r.Z)(o.k.docs.docSidebarItemLink,o.k.docs.docSidebarItemLinkLevel(c),"menu__list-item",p),key:m},a.createElement(L.Z,z({className:(0,r.Z)("menu__link",!h&&R,{"menu__link--active":f}),autoAddBaseUrl:b,"aria-current":f?"page":void 0,to:u},h&&{onClick:n?()=>n(t):void 0},d),m,!h&&a.createElement(D.Z,null)))}const V="menuHtmlItem_M9Kj";function G({item:e,level:t,index:n}){const{value:l,defaultStyle:c,className:i}=e;return a.createElement("li",{className:(0,r.Z)(o.k.docs.docSidebarItemLink,o.k.docs.docSidebarItemLinkLevel(t),c&&[V,"menu__list-item"],i),key:n,dangerouslySetInnerHTML:{__html:l}})}function Y(){return Y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},Y.apply(this,arguments)}function q(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function X(e){var{item:t}=e,n=q(e,["item"]);switch(t.type){case"category":return a.createElement(H,Y({item:t},n));case"html":return a.createElement(G,Y({item:t},n));default:return a.createElement(K,Y({item:t},n))}}function J(){return J=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},J.apply(this,arguments)}function Q(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function $(e){var{items:t}=e,n=Q(e,["items"]);return a.createElement(P,null,t.map(((e,t)=>a.createElement(X,J({key:t,item:e,index:t},n)))))}const ee=(0,a.memo)($),te="menu_SIkG",ne="menuWithAnnouncementBar_GW3s";function ae({path:e,sidebar:t,className:n}){const l=function(){const{isActive:e}=(0,N.nT)(),[t,n]=(0,a.useState)(e);return(0,p.RF)((({scrollY:t})=>{e&&n(0===t)}),[e]),e&&t}();return a.createElement("nav",{className:(0,r.Z)("menu thin-scrollbar",te,l&&ne,n)},a.createElement("ul",{className:(0,r.Z)(o.k.docs.docSidebarMenu,"menu__list")},a.createElement(ee,{items:t,activePath:e,level:1})))}const re="sidebar_njMd",le="sidebarWithHideableNavbar_wUlq",oe="sidebarHidden_VK0M",ce="sidebarLogo_isFc";function ie({path:e,sidebar:t,onCollapse:n,isHidden:l}){const{navbar:{hideOnScroll:o},docs:{sidebar:{hideable:c}}}=(0,y.L)();return a.createElement("div",{className:(0,r.Z)(re,o&&le,l&&oe)},o&&a.createElement(k.Z,{tabIndex:-1,className:ce}),a.createElement(ae,{path:e,sidebar:t}),c&&a.createElement(S,{onClick:n}))}const se=a.memo(ie);var de=n(36847),ue=n(29180);const me=({sidebar:e,path:t})=>{const n=(0,ue.e)();return a.createElement("ul",{className:(0,r.Z)(o.k.docs.docSidebarMenu,"menu__list")},a.createElement(ee,{items:e,activePath:t,onItemClick:e=>{"category"===e.type&&e.href&&n.toggle(),"link"===e.type&&n.toggle()},level:1}))};function pe(e){return a.createElement(de.Zo,{component:me,props:e})}const be=a.memo(pe);function fe(){return fe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},fe.apply(this,arguments)}function he(e){const t=(0,g.i)(),n="desktop"===t||"ssr"===t,r="mobile"===t;return a.createElement(a.Fragment,null,n&&a.createElement(se,fe({},e)),r&&a.createElement(be,fe({},e)))}const ve="expandButton_m80_",Ee="expandButtonIcon_BlDH";function ge({toggleSidebar:e}){return a.createElement("div",{className:ve,title:(0,m.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,m.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:e,onClick:e},a.createElement(O,{className:Ee}))}const ye="docSidebarContainer_b6E3",ke="docSidebarContainerHidden_b3ry";function _e({children:e}){const t=(0,d.V)();var n;return a.createElement(a.Fragment,{key:null!==(n=null==t?void 0:t.name)&&void 0!==n?n:"noSidebar"},e)}function Oe({sidebar:e,hiddenSidebarContainer:t,setHiddenSidebarContainer:n}){const{pathname:l}=(0,E.TH)(),[c,i]=(0,a.useState)(!1),s=(0,a.useCallback)((()=>{c&&i(!1),n((e=>!e))}),[n,c]);return a.createElement("aside",{className:(0,r.Z)(o.k.docs.docSidebarContainer,ye,t&&ke),onTransitionEnd:e=>{e.currentTarget.classList.contains(ye)&&t&&i(!0)}},a.createElement(_e,null,a.createElement(he,{sidebar:e,path:l,onCollapse:s,isHidden:c})),c&&a.createElement(ge,{toggleSidebar:s}))}const Ce={docMainContainer:"docMainContainer_gTbr",docMainContainerEnhanced:"docMainContainerEnhanced_Uz_u",docItemWrapperEnhanced:"docItemWrapperEnhanced_czyv"};function Ie({hiddenSidebarContainer:e,children:t}){const n=(0,d.V)();return a.createElement("main",{className:(0,r.Z)(Ce.docMainContainer,(e||!n)&&Ce.docMainContainerEnhanced)},a.createElement("div",{className:(0,r.Z)("container padding-top--md padding-bottom--lg",Ce.docItemWrapper,e&&Ce.docItemWrapperEnhanced)},t))}const Se="docPage__5DB",Ne="docsWrapper_BCFX";function xe({children:e}){const t=(0,d.V)(),[n,r]=(0,a.useState)(!1);return a.createElement(u.Z,{wrapperClassName:Ne},a.createElement(v,null),a.createElement("div",{className:Se},t&&a.createElement(Oe,{sidebar:t.items,hiddenSidebarContainer:n,setHiddenSidebarContainer:r}),a.createElement(Ie,{hiddenSidebarContainer:n},e)))}var we=n(30889),je=n(36894);function Pe(){return Pe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},Pe.apply(this,arguments)}function Te(e){const{versionMetadata:t}=e;return a.createElement(a.Fragment,null,a.createElement(je.Z,{version:t.version,tag:(0,c.os)(t.pluginId,t.version)}),a.createElement(l.d,null,t.noIndex&&a.createElement("meta",{name:"robots",content:"noindex, nofollow"})))}function Ze(e){const{versionMetadata:t}=e,n=(0,i.hI)(e);if(!n)return a.createElement(we.default,null);const{docElement:c,sidebarName:u,sidebarItems:m}=n;return a.createElement(a.Fragment,null,a.createElement(Te,Pe({},e)),a.createElement(l.FG,{className:(0,r.Z)(o.k.wrapper.docsPages,o.k.page.docsDocPage,e.versionMetadata.className)},a.createElement(s.q,{version:t},a.createElement(d.b,{name:u,items:m},a.createElement(xe,null,c)))))}},30889:(e,t,n)=>{n.r(t),n.d(t,{default:()=>c});var a=n(67294),r=n(92210),l=n(34285),o=n(5953);function c(){return a.createElement(a.Fragment,null,a.createElement(l.d,{title:(0,r.I)({id:"theme.NotFound.title",message:"Page Not Found"})}),a.createElement(o.Z,null,a.createElement("main",{className:"container margin-vert--xl"},a.createElement("div",{className:"row"},a.createElement("div",{className:"col col--6 col--offset-3"},a.createElement("h1",{className:"hero__title"},a.createElement(r.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),a.createElement("p",null,a.createElement(r.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),a.createElement("p",null,a.createElement(r.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))))}}}]);