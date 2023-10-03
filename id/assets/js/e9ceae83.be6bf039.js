"use strict";(self.webpackChunkelysian=self.webpackChunkelysian||[]).push([[706],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>f});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=a.createContext({}),s=function(e){var t=a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,u=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=s(r),m=n,f=p["".concat(u,".").concat(m)]||p[m]||c[m]||i;return r?a.createElement(f,l(l({ref:t},d),{},{components:r})):a.createElement(f,l({ref:t},d))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[p]="string"==typeof e?e:n,l[1]=o;for(var s=2;s<i;s++)l[s]=r[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6313:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var a=r(7462),n=(r(7294),r(3905));const i={title:"Quad Proc",sidebar_position:4,tags:["Subsquid"]},l=void 0,o={unversionedId:"squid/quad",id:"squid/quad",title:"Quad Proc",description:"Buat Folder & init",source:"@site/i18n/id/docusaurus-plugin-content-docs/current/squid/quad.mdx",sourceDirName:"squid",slug:"/squid/quad",permalink:"/id/docs/squid/quad",draft:!1,editUrl:"https://github.com/Megumiiiiii/megumiiiiii.github.io/edit/main/docs/squid/quad.mdx",tags:[{label:"Subsquid",permalink:"/id/docs/tags/subsquid"}],version:"current",sidebarPosition:4,frontMatter:{title:"Quad Proc",sidebar_position:4,tags:["Subsquid"]},sidebar:"tutorialSidebar",previous:{title:"Triple Proc",permalink:"/id/docs/squid/triple"}},u={},s=[{value:"Buat Folder &amp; init",id:"buat-folder--init",level:3},{value:"Download key",id:"download-key",level:2},{value:"Start Docker",id:"start-docker",level:2},{value:"build",id:"build",level:2},{value:"Run",id:"run",level:3},{value:"Setelah selesai",id:"setelah-selesai",level:3}],d={toc:s},p="wrapper";function c(e){let{components:t,...i}=e;return(0,n.kt)(p,(0,a.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h3",{id:"buat-folder--init"},"Buat Folder & init"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh",metastring:'filename="Node.js" copy',filename:'"Node.js"',copy:!0},"cd ~/proc\nsqd init quad-proc -t https://github.com/subsquid-quests/quad-chain-squid\ncd quad-proc\n")),(0,n.kt)("h2",{id:"download-key"},"Download key"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://app.subsquid.io/quests"},"https://app.subsquid.io/quests")),(0,n.kt)("li",{parentName:"ul"},"Pindah ke VPS, ke folder ",(0,n.kt)("inlineCode",{parentName:"li"},"/proc/quad-proc/query-gateway/keys")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("img",{alt:"SS",src:r(8259).Z,width:"1484",height:"724"}))),(0,n.kt)("h2",{id:"start-docker"},"Start Docker"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh",metastring:'filename="build" copy',filename:'"build"',copy:!0},"docker compose up -d\n")),(0,n.kt)("h2",{id:"build"},"build"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh",metastring:'filename="build" copy',filename:'"build"',copy:!0},"npm ci\nsqd build\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh",metastring:'filename="migrate" copy',filename:'"migrate"',copy:!0},"sqd migration:apply\n")),(0,n.kt)("h3",{id:"run"},"Run"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh",metastring:'filename="run" copy',filename:'"run"',copy:!0},"sqd run .\n")),(0,n.kt)("p",null,"Tunggu sampai di web nya jadi 100%"),(0,n.kt)("h3",{id:"setelah-selesai"},"Setelah selesai"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Stop proc menggunakan CTRL+C")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Stop Docker"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-sh",metastring:'filename="delete" copy',filename:'"delete"',copy:!0},"docker compose down -v\n")),(0,n.kt)("hr",{parentName:"li"}))))}c.isMDXComponent=!0},8259:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/squidproc-4127c2e9618d3d1e74829ef99a11da2b.png"}}]);