"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[863],{5680:(e,t,r)=>{r.d(t,{xA:()=>p,yg:()=>g});var o=r(6540);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=o.createContext({}),u=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},c="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(r),d=n,g=c["".concat(l,".").concat(d)]||c[d]||y[d]||a;return r?o.createElement(g,i(i({ref:t},p),{},{components:r})):o.createElement(g,i({ref:t},p))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:n,i[1]=s;for(var u=2;u<a;u++)i[u]=r[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7132:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var o=r(8168),n=(r(6540),r(5680));const a={sidebar_position:5},i="Deploy your site",s={unversionedId:"tutorial-basics/deploy-your-site",id:"tutorial-basics/deploy-your-site",isDocsHomePage:!1,title:"Deploy your site",description:"Docusaurus is a static-site-generator (also called Jamstack).",source:"@site/docs/tutorial-basics/deploy-your-site.md",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/deploy-your-site",permalink:"/docs/tutorial-basics/deploy-your-site",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/tutorial-basics/deploy-your-site.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Markdown Features",permalink:"/docs/tutorial-basics/markdown-features"},next:{title:"Congratulations!",permalink:"/docs/tutorial-basics/congratulations"}},l=[{value:"Build your site",id:"build-your-site",children:[]},{value:"Deploy your site",id:"deploy-your-site-1",children:[]}],u={toc:l},p="wrapper";function c(e){let{components:t,...r}=e;return(0,n.yg)(p,(0,o.A)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"deploy-your-site"},"Deploy your site"),(0,n.yg)("p",null,"Docusaurus is a ",(0,n.yg)("strong",{parentName:"p"},"static-site-generator")," (also called ",(0,n.yg)("strong",{parentName:"p"},(0,n.yg)("a",{parentName:"strong",href:"https://jamstack.org/"},"Jamstack")),")."),(0,n.yg)("p",null,"It builds your site as simple ",(0,n.yg)("strong",{parentName:"p"},"static HTML, JavaScript and CSS files"),"."),(0,n.yg)("h2",{id:"build-your-site"},"Build your site"),(0,n.yg)("p",null,"Build your site ",(0,n.yg)("strong",{parentName:"p"},"for production"),":"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-bash"},"npm run build\n")),(0,n.yg)("p",null,"The static files are generated in the ",(0,n.yg)("inlineCode",{parentName:"p"},"build")," folder."),(0,n.yg)("h2",{id:"deploy-your-site-1"},"Deploy your site"),(0,n.yg)("p",null,"Test your production build locally:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-bash"},"npm run serve\n")),(0,n.yg)("p",null,"The ",(0,n.yg)("inlineCode",{parentName:"p"},"build")," folder is now served at ",(0,n.yg)("inlineCode",{parentName:"p"},"http://localhost:3000/"),"."),(0,n.yg)("p",null,"You can now deploy the ",(0,n.yg)("inlineCode",{parentName:"p"},"build")," folder ",(0,n.yg)("strong",{parentName:"p"},"almost anywhere")," easily, ",(0,n.yg)("strong",{parentName:"p"},"for free")," or very small cost (read the ",(0,n.yg)("strong",{parentName:"p"},(0,n.yg)("a",{parentName:"strong",href:"https://docusaurus.io/docs/deployment"},"Deployment Guide")),")."))}c.isMDXComponent=!0}}]);