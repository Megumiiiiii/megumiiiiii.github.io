"use strict";(self.webpackChunkelysian=self.webpackChunkelysian||[]).push([[8089],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=s(r),m=i,f=c["".concat(p,".").concat(m)]||c[m]||d[m]||a;return r?n.createElement(f,l(l({ref:t},u),{},{components:r})):n.createElement(f,l({ref:t},u))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,l=new Array(a);l[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[c]="string"==typeof e?e:i,l[1]=o;for(var s=2;s<a;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7629:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>s});var n=r(7462),i=(r(7294),r(3905));const a={title:"Triple Proc",sidebar_position:3,tags:["Subsquid"]},l=void 0,o={unversionedId:"squid/triple",id:"squid/triple",title:"Triple Proc",description:"Buat Folder & init",source:"@site/docs/squid/triple.mdx",sourceDirName:"squid",slug:"/squid/triple",permalink:"/docs/squid/triple",draft:!1,editUrl:"https://github.com/Megumiiiiii/megumiiiiii.github.io/edit/main/docs/squid/triple.mdx",tags:[{label:"Subsquid",permalink:"/docs/tags/subsquid"}],version:"current",sidebarPosition:3,frontMatter:{title:"Triple Proc",sidebar_position:3,tags:["Subsquid"]},sidebar:"tutorialSidebar",previous:{title:"Double Proc",permalink:"/docs/squid/double"},next:{title:"Quad Proc",permalink:"/docs/squid/quad"}},p={},s=[{value:"Buat Folder &amp; init",id:"buat-folder--init",level:3},{value:"Download key",id:"download-key",level:2},{value:"build",id:"build",level:2},{value:"Run",id:"run",level:3},{value:"Setelah selesai",id:"setelah-selesai",level:3}],u={toc:s},c="wrapper";function d(e){let{components:t,...a}=e;return(0,i.kt)(c,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"buat-folder--init"},"Buat Folder & init"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh",metastring:'filename="Node.js" copy',filename:'"Node.js"',copy:!0},"cd ~/proc\nsqd init triple-proc -t https://github.com/subsquid-quests/triple-chain-squid\ncd triple-proc\n")),(0,i.kt)("h2",{id:"download-key"},"Download key"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://app.subsquid.io/quests"},"https://app.subsquid.io/quests")),(0,i.kt)("li",{parentName:"ul"},"Pindah ke VPS, ke folder ",(0,i.kt)("inlineCode",{parentName:"li"},"/proc/triple-proc/query-gateway/keys")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("img",{alt:"SS",src:r(8259).Z,width:"1484",height:"724"}))),(0,i.kt)("h2",{id:"build"},"build"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh",metastring:'filename="build" copy',filename:'"build"',copy:!0},"npm ci\nsqd build\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh",metastring:'filename="migrate" copy',filename:'"migrate"',copy:!0},"sqd migration:apply\n")),(0,i.kt)("h3",{id:"run"},"Run"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh",metastring:'filename="run" copy',filename:'"run"',copy:!0},"sqd run .\n")),(0,i.kt)("p",null,"Tunggu sampai di web nya jadi 100%"),(0,i.kt)("h3",{id:"setelah-selesai"},"Setelah selesai"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Stop proc menggunakan CTRL+C")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Stop Docker"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sh",metastring:'filename="delete" copy',filename:'"delete"',copy:!0},"docker compose down -v\n")),(0,i.kt)("hr",{parentName:"li"}))))}d.isMDXComponent=!0},8259:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/squidproc-4127c2e9618d3d1e74829ef99a11da2b.png"}}]);