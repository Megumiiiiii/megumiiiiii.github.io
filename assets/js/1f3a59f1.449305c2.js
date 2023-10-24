"use strict";(self.webpackChunkelysian=self.webpackChunkelysian||[]).push([[3022],{4137:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),d=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},s="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),s=d(n),m=r,k=s["".concat(p,".").concat(m)]||s[m]||c[m]||l;return n?a.createElement(k,i(i({ref:t},u),{},{components:n})):a.createElement(k,i({ref:t},u))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[s]="string"==typeof e?e:r,i[1]=o;for(var d=2;d<l;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1853:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var a=n(7462),r=(n(7294),n(4137));const l={title:"Update",sidebar_position:2,authors:["megumii"],tags:["Arweave"]},i=void 0,o={unversionedId:"what/ar/update",id:"what/ar/update",title:"Update",description:"Delete Container + Images",source:"@site/docs/what/ar/update.mdx",sourceDirName:"what/ar",slug:"/what/ar/update",permalink:"/docs/what/ar/update",draft:!1,editUrl:"https://github.com/Megumiiiiii/megumiiiiii.github.io/edit/main/docs/what/ar/update.mdx",tags:[{label:"Arweave",permalink:"/docs/tags/arweave"}],version:"current",lastUpdatedBy:"Megumiiiiii",lastUpdatedAt:1698178534,formattedLastUpdatedAt:"Oct 24, 2023",sidebarPosition:2,frontMatter:{title:"Update",sidebar_position:2,authors:["megumii"],tags:["Arweave"]},sidebar:"tutorialSidebar",previous:{title:"Installation",permalink:"/docs/what/ar/"},next:{title:"CESS",permalink:"/docs/what/cess"}},p={},d=[{value:"Delete Container + Images",id:"delete-container--images",level:2},{value:"Pull",id:"pull",level:2},{value:"Import new keyfile <code>.json</code>",id:"import-new-keyfile-json",level:2},{value:"Edit <code>.env</code>",id:"edit-env",level:2},{value:"Then, UP!",id:"then-up",level:2},{value:"Update Gateway",id:"update-gateway",level:2}],u={toc:d},s="wrapper";function c(e){let{components:t,...l}=e;return(0,r.kt)(s,(0,a.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"delete-container--images"},"Delete Container + Images"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"cd ~/ar-io-node\nsudo docker compose down -v\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo docker image prune -a\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo docker builder prune\n")),(0,r.kt)("h2",{id:"pull"},"Pull"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git pull\n")),(0,r.kt)("h2",{id:"import-new-keyfile-json"},"Import new keyfile ",(0,r.kt)("inlineCode",{parentName:"h2"},".json")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"You can use the same ",(0,r.kt)("inlineCode",{parentName:"li"},"keyfile")," as you use for ",(0,r.kt)("inlineCode",{parentName:"li"},"join-network"),", but it's recommended to use a new keyfile. So, generate new one on ",(0,r.kt)("a",{parentName:"li",href:"https://chrome.google.com/webstore/detail/arconnect/einnioafmpimabjcddiinlhmijaionap"},"ARConnect"),"  than import to VPS"),(0,r.kt)("li",{parentName:"ul"},"Transfer some $AR to the new wallet"),(0,r.kt)("li",{parentName:"ul"},"Move the keyfile ",(0,r.kt)("inlineCode",{parentName:"li"},".json")," to directory ",(0,r.kt)("inlineCode",{parentName:"li"},"~/ar-io-node/wallets")," and rename to ",(0,r.kt)("inlineCode",{parentName:"li"},"walletAddress.json"),". Example ",(0,r.kt)("inlineCode",{parentName:"li"},"xFK3NdQ1utoPQ2tXMgNKFn9oZGw0Tl4ihNo7JY5Ldnk.json"))),(0,r.kt)("h2",{id:"edit-env"},"Edit ",(0,r.kt)("inlineCode",{parentName:"h2"},".env")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"nano .env\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Add this two line")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"RUN_OBSERVER=true\nOBSERVER_WALLET=YourWalletAddress\n")),(0,r.kt)("h2",{id:"then-up"},"Then, UP!"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker compose up -d --build\n")),(0,r.kt)("h2",{id:"update-gateway"},"Update Gateway"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Pull")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"cd ~/testnet-contract\ngit pull\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Edit file")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"nano tools/update-gateway-settings.ts\n")),(0,r.kt)("p",null,"edit ",(0,r.kt)("inlineCode",{parentName:"p"},"label"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"fqdn"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"observerWallet")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"join",src:n(6086).Z,width:"2152",height:"930"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Update")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"yarn ts-node tools/update-gateway-settings.ts\n")))}c.isMDXComponent=!0},6086:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/obser-1c3668784798f1ea9889767892a7b8e3.png"}}]);