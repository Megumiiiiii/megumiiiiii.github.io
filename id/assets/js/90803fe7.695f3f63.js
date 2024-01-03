"use strict";(self.webpackChunkelysian=self.webpackChunkelysian||[]).push([[9596],{4137:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(n),d=a,h=c["".concat(s,".").concat(d)]||c[d]||m[d]||l;return n?r.createElement(h,i(i({ref:t},u),{},{components:n})):r.createElement(h,i({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3300:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var r=n(7462),a=(n(7294),n(4137));const l={slug:"owshen",title:"Register Owshen",authors:["megumii"],tags:["ZK"]},i=void 0,o={permalink:"/id/blog/owshen",source:"@site/i18n/id/docusaurus-plugin-content-blog/owshen.md",title:"Register Owshen",description:"Need Ubuntu 22.04 or higher",date:"2023-12-26T11:16:00.000Z",formattedDate:"26 Desember 2023",tags:[{label:"ZK",permalink:"/id/blog/tags/zk"}],readingTime:92.78350515463917,hasTruncateMarker:!1,authors:[{name:"Megumii",title:"NPC",url:"https://megumii.blessingway.xyz",imageURL:"https://github.com/Megumiiiiii.png",key:"megumii"}],frontMatter:{slug:"owshen",title:"Register Owshen",authors:["megumii"],tags:["ZK"]},nextItem:{title:"Web Mint",permalink:"/id/blog/dym"}},s={authorsImageUrls:[void 0]},p=[{value:"Install Dependencies",id:"install-dependencies",level:2},{value:"Install Owshen",id:"install-owshen",level:2},{value:"Init Wallet",id:"init-wallet",level:2},{value:"Simpan Mnemonic Pharse!!!",id:"simpan-mnemonic-pharse",level:4},{value:"Cek Wallet Address",id:"cek-wallet-address",level:3},{value:"Register",id:"register",level:2},{value:"Cek web wallet (Optional)",id:"cek-web-wallet-optional",level:2}],u={toc:p},c="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Need Ubuntu 22.04 or higher")),(0,a.kt)("h2",{id:"install-dependencies"},"Install Dependencies"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"sudo apt update && sudo apt install libfuse2\n")),(0,a.kt)("h2",{id:"install-owshen"},"Install Owshen"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"wget -O owshen https://github.com/OwshenNetwork/owshen/releases/download/v0.1.0/Owshen_v0.1.0_x86_64.AppImage; chmod +x owshen\nmv owshen /usr/local/bin \nowshen --version\n")),(0,a.kt)("h2",{id:"init-wallet"},"Init Wallet"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"owshen init\n")),(0,a.kt)("h4",{id:"simpan-mnemonic-pharse"},"Simpan Mnemonic Pharse!!!"),(0,a.kt)("h3",{id:"cek-wallet-address"},"Cek Wallet Address"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"owshen info\n")),(0,a.kt)("h2",{id:"register"},"Register"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Follow ",(0,a.kt)("a",{parentName:"li",href:"https://x.com/OwshenNetwork"},"Owshen Twitter")),(0,a.kt)("li",{parentName:"ol"},"Retweet + Like ",(0,a.kt)("a",{parentName:"li",href:"https://x.com/OwshenNetwork/status/1739258666199449979"},"THIS POST")),(0,a.kt)("li",{parentName:"ol"},"Komen wallet address")),(0,a.kt)("h2",{id:"cek-web-wallet-optional"},"Cek web wallet (Optional)"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Jalankan ini")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"owshen wallet\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Lalu buka http://YOURIP:9000 di browser")))}m.isMDXComponent=!0}}]);