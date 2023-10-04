"use strict";(self.webpackChunkelysian=self.webpackChunkelysian||[]).push([[2509],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>f});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=n.createContext({}),s=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=s(a),m=r,f=d["".concat(u,".").concat(m)]||d[m]||c[m]||i;return a?n.createElement(f,l(l({ref:t},p),{},{components:a})):n.createElement(f,l({ref:t},p))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[d]="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5052:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var n=a(7462),r=(a(7294),a(3905));const i={title:"Quad Proc",sidebar_position:4,tags:["Subsquid"]},l=void 0,o={unversionedId:"squid/quad",id:"squid/quad",title:"Quad Proc",description:"Buat Folder & init",source:"@site/docs/squid/quad.mdx",sourceDirName:"squid",slug:"/squid/quad",permalink:"/docs/squid/quad",draft:!1,editUrl:"https://github.com/Megumiiiiii/megumiiiiii.github.io/edit/main/docs/squid/quad.mdx",tags:[{label:"Subsquid",permalink:"/docs/tags/subsquid"}],version:"current",sidebarPosition:4,frontMatter:{title:"Quad Proc",sidebar_position:4,tags:["Subsquid"]},sidebar:"tutorialSidebar",previous:{title:"Triple Proc",permalink:"/docs/squid/triple"}},u={},s=[{value:"Buat Folder &amp; init",id:"buat-folder--init",level:3},{value:"Download key",id:"download-key",level:2},{value:"Start Docker",id:"start-docker",level:2},{value:"build",id:"build",level:2},{value:"Run",id:"run",level:3},{value:"Setelah selesai",id:"setelah-selesai",level:3}],p={toc:s},d="wrapper";function c(e){let{components:t,...i}=e;return(0,r.kt)(d,(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"buat-folder--init"},"Buat Folder & init"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh",metastring:'filename="Node.js" copy',filename:'"Node.js"',copy:!0},"cd ~/proc\nsqd init quad-proc -t https://github.com/subsquid-quests/quad-chain-squid\ncd quad-proc\n")),(0,r.kt)("h2",{id:"download-key"},"Download key"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://app.subsquid.io/quests"},"https://app.subsquid.io/quests")),(0,r.kt)("li",{parentName:"ul"},"Pindah ke VPS, ke folder ",(0,r.kt)("inlineCode",{parentName:"li"},"/proc/quad-proc/query-gateway/keys")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("img",{alt:"SS",src:a(8259).Z,width:"1484",height:"724"}))),(0,r.kt)("h2",{id:"start-docker"},"Start Docker"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh",metastring:'filename="build" copy',filename:'"build"',copy:!0},"docker compose up -d\n")),(0,r.kt)("h2",{id:"build"},"build"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh",metastring:'filename="build" copy',filename:'"build"',copy:!0},"npm ci\nsqd build\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh",metastring:'filename="migrate" copy',filename:'"migrate"',copy:!0},"sqd migration:apply\n")),(0,r.kt)("h3",{id:"run"},"Run"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh",metastring:'filename="run" copy',filename:'"run"',copy:!0},"sqd run .\n")),(0,r.kt)("p",null,"Tunggu sampai di web nya jadi 100%"),(0,r.kt)("h3",{id:"setelah-selesai"},"Setelah selesai"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Stop proc menggunakan CTRL+C")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Stop Docker"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sh",metastring:'filename="delete" copy',filename:'"delete"',copy:!0},"docker compose down -v\n")))),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Hapus ",(0,r.kt)("strong",{parentName:"p"},"SEMUA")," jika sudah mendapat point ")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh",metastring:'filename="delete" copy',filename:'"delete"',copy:!0},"cd\nrm -r proc\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh",metastring:'filename="delete" copy',filename:'"delete"',copy:!0},"docker rmi subsquid/query-gateway:0.1.5\n")),(0,r.kt)("hr",null))}c.isMDXComponent=!0},8259:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/squidproc-4127c2e9618d3d1e74829ef99a11da2b.png"}}]);