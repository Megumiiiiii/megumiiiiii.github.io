"use strict";(self.webpackChunkelysian=self.webpackChunkelysian||[]).push([[1181],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>g});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=u(a),m=i,g=c["".concat(s,".").concat(m)]||c[m]||p[m]||r;return a?n.createElement(g,l(l({ref:t},d),{},{components:a})):n.createElement(g,l({ref:t},d))}));function g(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,l=new Array(r);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:i,l[1]=o;for(var u=2;u<r;u++)l[u]=a[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},8727:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>u});var n=a(7462),i=(a(7294),a(3905));const r={title:"Single Proc",sidebar_position:1,authors:["megumii"],tags:["Subsquid"]},l=void 0,o={unversionedId:"squid/single",id:"squid/single",title:"Single Proc",description:"Install NodeJS, Docker, git ( Jika Belum Punya)",source:"@site/docs/squid/single.mdx",sourceDirName:"squid",slug:"/squid/single",permalink:"/docs/squid/single",draft:!1,editUrl:"https://github.com/Megumiiiiii/megumiiiiii.github.io/edit/main/docs/squid/single.mdx",tags:[{label:"Subsquid",permalink:"/docs/tags/subsquid"}],version:"current",lastUpdatedBy:"Megumiiiiii",lastUpdatedAt:1696693235,formattedLastUpdatedAt:"Oct 7, 2023",sidebarPosition:1,frontMatter:{title:"Single Proc",sidebar_position:1,authors:["megumii"],tags:["Subsquid"]},sidebar:"tutorialSidebar",previous:{title:"Subsquid",permalink:"/docs/category/subsquid"},next:{title:"Double Proc",permalink:"/docs/squid/double"}},s={},u=[{value:"Install NodeJS, Docker, git ( Jika Belum Punya)",id:"install-nodejs-docker-git--jika-belum-punya",level:2},{value:"Install Subsquid cli",id:"install-subsquid-cli",level:3},{value:"Buat Folder &amp; init",id:"buat-folder--init",level:3},{value:"Download key",id:"download-key",level:2},{value:"Start Docker",id:"start-docker",level:2},{value:"build",id:"build",level:2},{value:"Run",id:"run",level:3},{value:"Setelah selesai",id:"setelah-selesai",level:3}],d={toc:u},c="wrapper";function p(e){let{components:t,...r}=e;return(0,i.kt)(c,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"install-nodejs-docker-git--jika-belum-punya"},"Install NodeJS, Docker, git ( Jika Belum Punya)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh",metastring:'filename="install docker and more" copy',filename:'"install',docker:!0,and:!0,'more"':!0,copy:!0},'sudo apt-get update && sudo apt install git -y && sudo apt install apt-transport-https ca-certificates curl software-properties-common -y && curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add - && sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu focal stable" && sudo apt-get install docker-ce docker-ce-cli containerd.io docker-compose-plugin -y\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh",metastring:'filename="Node.js" copy',filename:'"Node.js"',copy:!0},"curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash\nsource ~/.bashrc\nnvm install 18\nnvm use 18\n")),(0,i.kt)("h3",{id:"install-subsquid-cli"},"Install Subsquid cli"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh",metastring:'filename="Node.js" copy',filename:'"Node.js"',copy:!0},"npm install --global @subsquid/cli@latest\n")),(0,i.kt)("h3",{id:"buat-folder--init"},"Buat Folder & init"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh",metastring:'filename="Node.js" copy',filename:'"Node.js"',copy:!0},"mkdir proc\ncd proc\nsqd init single-proc -t https://github.com/subsquid-quests/single-chain-squid\ncd single-proc\n")),(0,i.kt)("h2",{id:"download-key"},"Download key"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://app.subsquid.io/quests"},"https://app.subsquid.io/quests")),(0,i.kt)("li",{parentName:"ul"},"Pindah ke VPS, ke folder ",(0,i.kt)("inlineCode",{parentName:"li"},"/proc/single-proc/query-gateway/keys")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("img",{alt:"SS",src:a(8259).Z,width:"1484",height:"724"}))),(0,i.kt)("h2",{id:"start-docker"},"Start Docker"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh",metastring:'filename="build" copy',filename:'"build"',copy:!0},"docker compose up -d\n")),(0,i.kt)("h2",{id:"build"},"build"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh",metastring:'filename="build" copy',filename:'"build"',copy:!0},"npm ci\nsqd build\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh",metastring:'filename="migrate" copy',filename:'"migrate"',copy:!0},"sqd migration:apply\n")),(0,i.kt)("h3",{id:"run"},"Run"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh",metastring:'filename="run" copy',filename:'"run"',copy:!0},"sqd run .\n")),(0,i.kt)("p",null,"Tunggu sampai di web nya jadi 100%"),(0,i.kt)("h3",{id:"setelah-selesai"},"Setelah selesai"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Stop proc menggunakan CTRL+C")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Stop Docker"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sh",metastring:'filename="delete" copy',filename:'"delete"',copy:!0},"docker compose down -v\n")),(0,i.kt)("hr",{parentName:"li"}))))}p.isMDXComponent=!0},8259:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/squidproc-4127c2e9618d3d1e74829ef99a11da2b.png"}}]);