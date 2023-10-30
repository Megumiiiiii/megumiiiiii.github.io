"use strict";(self.webpackChunkelysian=self.webpackChunkelysian||[]).push([[5677],{4137:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>k});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),u=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=u(a),m=r,k=d["".concat(p,".").concat(m)]||d[m]||c[m]||l;return a?n.createElement(k,i(i({ref:t},s),{},{components:a})):n.createElement(k,i({ref:t},s))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[d]="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},1672:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var n=a(7462),r=(a(7294),a(4137));const l={title:"Update",sidebar_position:2,authors:["megumii"],tags:["Arweave"]},i=void 0,o={unversionedId:"what/ar/update",id:"what/ar/update",title:"Update",description:"Please Stamp",source:"@site/i18n/id/docusaurus-plugin-content-docs/current/what/ar/update.mdx",sourceDirName:"what/ar",slug:"/what/ar/update",permalink:"/id/docs/what/ar/update",draft:!1,editUrl:"https://github.com/Megumiiiiii/megumiiiiii.github.io/edit/main/docs/what/ar/update.mdx",tags:[{label:"Arweave",permalink:"/id/docs/tags/arweave"}],version:"current",lastUpdatedBy:"Megumiiiiii",lastUpdatedAt:1698698574,formattedLastUpdatedAt:"30 Okt 2023",sidebarPosition:2,frontMatter:{title:"Update",sidebar_position:2,authors:["megumii"],tags:["Arweave"]},sidebar:"tutorialSidebar",previous:{title:"Installation",permalink:"/id/docs/what/ar/"},next:{title:"CESS",permalink:"/id/docs/what/cess"}},p={},u=[{value:"Please Stamp",id:"please-stamp",level:2},{value:"Hapus Container + Images",id:"hapus-container--images",level:2},{value:"Pull",id:"pull",level:2},{value:"Import keyfile <code>.json</code> baru",id:"import-keyfile-json-baru",level:2},{value:"Edit <code>.env</code>",id:"edit-env",level:2},{value:"Then, UP!",id:"then-up",level:2},{value:"Update Gateway",id:"update-gateway",level:2}],s={toc:u},d="wrapper";function c(e){let{components:t,...l}=e;return(0,r.kt)(d,(0,n.Z)({},s,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"please-stamp"},"Please Stamp"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Go to ",(0,r.kt)("a",{parentName:"li",href:"https://bazar.g8way.io/#/collection/ADd6xeeWq_pYbu0m7ZlihV5CQkjOCKJIb9h7gWEDB6k"},"Bazar")),(0,r.kt)("li",{parentName:"ul"},"Click it, no need any gas fees"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("img",{alt:"stamp",src:a(4717).Z,width:"1127",height:"553"}))),(0,r.kt)("h2",{id:"hapus-container--images"},"Hapus Container + Images"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"cd ~/ar-io-node\nsudo docker compose down -v\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo docker image prune -a\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo docker builder prune\n")),(0,r.kt)("h2",{id:"pull"},"Pull"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git pull\n")),(0,r.kt)("h2",{id:"import-keyfile-json-baru"},"Import keyfile ",(0,r.kt)("inlineCode",{parentName:"h2"},".json")," baru"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Bisa menggunakan ",(0,r.kt)("inlineCode",{parentName:"li"},"keyfile")," yang sama untuk ",(0,r.kt)("inlineCode",{parentName:"li"},"join-network"),", namun direkomendasikan menggunakan wallet baru. Jadi, generate wallet baru di ",(0,r.kt)("a",{parentName:"li",href:"https://chrome.google.com/webstore/detail/arconnect/einnioafmpimabjcddiinlhmijaionap"},"ARConnect")," dan import ke VPS"),(0,r.kt)("li",{parentName:"ul"},"Pindahkan keyfile ",(0,r.kt)("inlineCode",{parentName:"li"},".json")," ke directory ",(0,r.kt)("inlineCode",{parentName:"li"},"~/ar-io-node/wallets")," dan berinama ",(0,r.kt)("inlineCode",{parentName:"li"},"walletAddress.json"),". Contoh ",(0,r.kt)("inlineCode",{parentName:"li"},"xFK3NdQ1utoPQ2tXMgNKFn9oZGw0Tl4ihNo7JY5Ldnk.json"))),(0,r.kt)("h2",{id:"edit-env"},"Edit ",(0,r.kt)("inlineCode",{parentName:"h2"},".env")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"nano .env\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Tambahkan 2 baris ini")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"RUN_OBSERVER=true\nOBSERVER_WALLET=YourWalletAddress\n")),(0,r.kt)("h2",{id:"then-up"},"Then, UP!"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker compose up -d --build\n")),(0,r.kt)("h2",{id:"update-gateway"},"Update Gateway"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Move key")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"cd $HOME\nmv $HOME/testnet-contract/key.json $HOME\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Delete directory")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"rm -r testnet-contract\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Clone")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"git clone https://github.com/ar-io/testnet-contract.git\nmv key.json $HOME/testnet-contract/\ncd ~/testnet-contract\nyarn\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Edit file")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"nano tools/update-gateway-settings.ts\n")),(0,r.kt)("p",null,"edit bagian ",(0,r.kt)("inlineCode",{parentName:"p"},"label"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"fqdn"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"observerWallet")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"join",src:a(6086).Z,width:"2152",height:"930"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Update")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"yarn ts-node tools/update-gateway-settings.ts\n")))}c.isMDXComponent=!0},6086:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/obser-1c3668784798f1ea9889767892a7b8e3.png"},4717:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/stamp-7b3918b98671219b5ddb4e7a6715e99c.png"}}]);