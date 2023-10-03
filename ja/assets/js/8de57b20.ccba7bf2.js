"use strict";(self.webpackChunkelysian=self.webpackChunkelysian||[]).push([[6504],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=u(n),m=i,g=d["".concat(s,".").concat(m)]||d[m]||p[m]||r;return n?a.createElement(g,l(l({ref:t},c),{},{components:n})):a.createElement(g,l({ref:t},c))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[d]="string"==typeof e?e:i,l[1]=o;for(var u=2;u<r;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2210:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>u});var a=n(7462),i=(n(7294),n(3905));const r={title:"Single Proc",sidebar_position:1,tags:["Subsquid"]},l=void 0,o={unversionedId:"squid/single",id:"squid/single",title:"Single Proc",description:"Install NodeJS, Docker, git ( Jika Belum Punya)",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/squid/single.mdx",sourceDirName:"squid",slug:"/squid/single",permalink:"/ja/docs/squid/single",draft:!1,editUrl:"https://github.com/Megumiiiiii/megumiiiiii.github.io/edit/main/docs/squid/single.mdx",tags:[{label:"Subsquid",permalink:"/ja/docs/tags/subsquid"}],version:"current",sidebarPosition:1,frontMatter:{title:"Single Proc",sidebar_position:1,tags:["Subsquid"]},sidebar:"tutorialSidebar",previous:{title:"Subsquid",permalink:"/ja/docs/category/subsquid"},next:{title:"Double Proc",permalink:"/ja/docs/squid/double"}},s={},u=[{value:"Install NodeJS, Docker, git ( Jika Belum Punya)",id:"install-nodejs-docker-git--jika-belum-punya",level:2},{value:"Install Subsquid cli",id:"install-subsquid-cli",level:3},{value:"Buat Folder &amp; init",id:"buat-folder--init",level:3},{value:"Download key",id:"download-key",level:2},{value:"build",id:"build",level:2},{value:"Run",id:"run",level:3},{value:"Setelah selesai",id:"setelah-selesai",level:3}],c={toc:u},d="wrapper";function p(e){let{components:t,...r}=e;return(0,i.kt)(d,(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"install-nodejs-docker-git--jika-belum-punya"},"Install NodeJS, Docker, git ( Jika Belum Punya)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh",metastring:'filename="install docker and more" copy',filename:'"install',docker:!0,and:!0,'more"':!0,copy:!0},'sudo apt-get update && sudo apt install git -y && sudo apt install apt-transport-https ca-certificates curl software-properties-common -y && curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add - && sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu focal stable" && sudo apt-get install docker-ce docker-ce-cli containerd.io docker-compose-plugin -y\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh",metastring:'filename="Node.js" copy',filename:'"Node.js"',copy:!0},"curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash\nsource ~/.bashrc\nnvm install 18\nnvm use 18\n")),(0,i.kt)("h3",{id:"install-subsquid-cli"},"Install Subsquid cli"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh",metastring:'filename="Node.js" copy',filename:'"Node.js"',copy:!0},"npm install --global @subsquid/cli@latest\n")),(0,i.kt)("h3",{id:"buat-folder--init"},"Buat Folder & init"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh",metastring:'filename="Node.js" copy',filename:'"Node.js"',copy:!0},"mkdir proc\ncd proc\nsqd init single-proc -t https://github.com/subsquid-quests/single-chain-squid\ncd single-proc\n")),(0,i.kt)("h2",{id:"download-key"},"Download key"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://app.subsquid.io/quests"},"https://app.subsquid.io/quests")),(0,i.kt)("li",{parentName:"ul"},"Pindah ke VPS, ke folder ",(0,i.kt)("inlineCode",{parentName:"li"},"/proc/single-proc/query-gateway/keys")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("img",{alt:"SS",src:n(8259).Z,width:"1484",height:"724"}))),(0,i.kt)("h2",{id:"build"},"build"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh",metastring:'filename="build" copy',filename:'"build"',copy:!0},"npm ci\nsqd build\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh",metastring:'filename="migrate" copy',filename:'"migrate"',copy:!0},"sqd migration:apply\n")),(0,i.kt)("h3",{id:"run"},"Run"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh",metastring:'filename="run" copy',filename:'"run"',copy:!0},"sqd run .\n")),(0,i.kt)("p",null,"Tunggu sampai di web nya jadi 100%"),(0,i.kt)("h3",{id:"setelah-selesai"},"Setelah selesai"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Stop proc menggunakan CTRL+C")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Stop Docker"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sh",metastring:'filename="delete" copy',filename:'"delete"',copy:!0},"docker compose down -v\n")),(0,i.kt)("hr",{parentName:"li"}))))}p.isMDXComponent=!0},8259:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/squidproc-4127c2e9618d3d1e74829ef99a11da2b.png"}}]);