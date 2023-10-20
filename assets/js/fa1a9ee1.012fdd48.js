"use strict";(self.webpackChunkelysian=self.webpackChunkelysian||[]).push([[7317],{4137:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,h=p["".concat(s,".").concat(d)]||p[d]||m[d]||o;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},425:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(7294),r=n(6010);const o={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,i),hidden:n},t)}},3992:(e,t,n)=>{n.d(t,{Z:()=>k});var a=n(7462),r=n(7294),o=n(6010),i=n(2957),l=n(6550),s=n(5238),u=n(3609),c=n(2560);function p(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function m(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function d(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const a=(0,l.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=m(e),[i,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[s,u]=h({queryString:n,groupId:a}),[p,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,c.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),g=(()=>{const e=s??p;return d({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{g&&l(g)}),[g]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!d({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),f(e)}),[u,f,o]),tabValues:o}}var g=n(1048);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function N(e){let{className:t,block:n,selectedValue:l,selectValue:s,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,i.o5)(),m=e=>{const t=e.currentTarget,n=c.indexOf(t),a=u[n].value;a!==l&&(p(t),s(a))},d=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>c.push(e),onKeyDown:d,onClick:m},i,{className:(0,o.Z)("tabs__item",y.tabItem,i?.className,{"tabs__item--active":l===t})}),n??t)})))}function b(e){let{lazy:t,children:n,selectedValue:a}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function v(e){const t=f(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",y.tabList)},r.createElement(N,(0,a.Z)({},e,t)),r.createElement(b,(0,a.Z)({},e,t)))}function k(e){const t=(0,g.Z)();return r.createElement(v,(0,a.Z)({key:String(t)},e))}},4922:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>u,toc:()=>p});var a=n(7462),r=(n(7294),n(4137)),o=n(3992),i=n(425);const l={title:"Migration",sidebar_position:2,authors:["megumii"],tags:["Arweave","EVM"]},s=void 0,u={unversionedId:"what/sarco/update",id:"what/sarco/update",title:"Migration",description:"Delete previous Images",source:"@site/docs/what/sarco/update.mdx",sourceDirName:"what/sarco",slug:"/what/sarco/update",permalink:"/docs/what/sarco/update",draft:!1,editUrl:"https://github.com/Megumiiiiii/megumiiiiii.github.io/edit/main/docs/what/sarco/update.mdx",tags:[{label:"Arweave",permalink:"/docs/tags/arweave"},{label:"EVM",permalink:"/docs/tags/evm"}],version:"current",lastUpdatedBy:"Megumiiiiii",lastUpdatedAt:1697842191,formattedLastUpdatedAt:"Oct 20, 2023",sidebarPosition:2,frontMatter:{title:"Migration",sidebar_position:2,authors:["megumii"],tags:["Arweave","EVM"]},sidebar:"tutorialSidebar",previous:{title:"Installation",permalink:"/docs/what/sarco/"},next:{title:"AR",permalink:"/docs/what/ar"}},c={},p=[{value:"Delete previous Images",id:"delete-previous-images",level:3},{value:"Pull Repo",id:"pull-repo",level:3},{value:"Set .env",id:"set-env",level:3},{value:"Register",id:"register",level:3},{value:"RUN!",id:"run",level:2},{value:"Then update profile for Ethereum",id:"then-update-profile-for-ethereum",level:4}],m={toc:p},d="wrapper";function h(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"delete-previous-images"},"Delete previous Images"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd quickstart-archaeologist\nCOMPOSE_PROFILES=service docker compose down --remove-orphans\ndocker rmi jwilder/nginx-proxy nginxproxy/acme-companion ghcr.io/sarcophagus-org/sarcophagus-v2-archaeologist-service\n")),(0,r.kt)("h3",{id:"pull-repo"},"Pull Repo"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git pull\nCOMPOSE_PROFILES=service docker compose pull\n")),(0,r.kt)("h3",{id:"set-env"},"Set .env"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Remove old ",(0,r.kt)("inlineCode",{parentName:"li"},".env")," file")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"rm .env\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Copy sample")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cp .env.example .env\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Then fill it")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"nano .env\n")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("ol",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ol"},"Use wss:// not https://"),(0,r.kt)("li",{parentName:"ol"},"Generate new Mnemonic for each chain, generate ",(0,r.kt)("a",{parentName:"li",href:"https://iancoleman.io/bip39/"},"Here")," or anything you want"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Example")),(0,r.kt)("admonition",{title:".env",type:"info"},(0,r.kt)("ol",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"ETH_PRIVATE_KEY")," is your Private Key which has ETH/Matic and $SARCO"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"NOTIFICATION_WEBHOOK_URL")," is your discord webhook url. You can follow the instructions here to set up a discord webhook url: ",(0,r.kt)("a",{parentName:"li",href:"https://support.discord.com/hc/en-us/articles/228383668-Intro-to-Webhooks"},"https://support.discord.com/hc/en-us/articles/228383668-Intro-to-Webhooks"))),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"Both Chain",mdxType:"TabItem"},(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-py",metastring:'title=".env"',title:'".env"'},'## Key used to encrypt secrets and sign ETH transactions\n## The address associated with this key is your archaeologist identifier\nETH_PRIVATE_KEY=ugfhttawfihqwoid132b1231b23\n\n## (optional) multiply gas price estimation by this amount (i.e. 2 means 2x RPC gas price estimate)\n#GAS_MULTIPLIER=\n\n## Domain to use for your archaeologist\n## This domain should be pointed with an A record to your server\'s IP\nDOMAIN=my.exampledomain.com\n\n## Comma-separated list of chain ids of each network you want to run your service on.\n## Supported Chain IDS:\n## 1 = Mainnet\n## 5 = Goerli\n## 11155111 = Sepolia\n## 84531 = Base Goerli\n## 80001 = Polygon Mumbai\n## example, to run on mainnet, goerli, and sepolia, set:\n## CHAIN_IDS="1,5,11155111"\nCHAIN_IDS=1,137\n\n## Here, you should define:\n## - RPC provider urls.\n## - Mnemonics used to derive keypairs to encrypt sarcophagi.\n##   Generate a new one here - https://iancoleman.io/bip39/ or see README to generate one offline.\n## Uncomment and set, for each network chain id you want to run on, your own\n## private provider URL (infura, alchemy, etc) and a unique mnemonic for that network.\n## ================================================================================================\nMAINNET_PROVIDER_URL=wss://eth-mainnet\nMAINNET_ENCRYPTION_MNEMONIC=never gonna give you up never gonna let you down\n\n# GOERLI_PROVIDER_URL=\n# GOERLI_ENCRYPTION_MNEMONIC=\n\nPOLYGON_MAINNET_PROVIDER_URL=wss://polygon-mainnet\nPOLYGON_MAINNET_ENCRYPTION_MNEMONIC=never gonna tell a lie and hurt you\n'))),(0,r.kt)(i.Z,{value:"Ethereum Only",mdxType:"TabItem"},(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-py",metastring:'title=".env"',title:'".env"'},'## Key used to encrypt secrets and sign ETH transactions\n## The address associated with this key is your archaeologist identifier\nETH_PRIVATE_KEY=ugfhttawfihqwoid132b1231b23\n\n## (optional) multiply gas price estimation by this amount (i.e. 2 means 2x RPC gas price estimate)\n#GAS_MULTIPLIER=\nNOTIFICATION_WEBHOOK_URL=https://discord.com/api/webhooks/hafkakakjajbasbkadsbaksdjbakfbakfaf\n\n## Domain to use for your archaeologist\n## This domain should be pointed with an A record to your server\'s IP\nDOMAIN=my.exampledomain.com\n\n## Comma-separated list of chain ids of each network you want to run your service on.\n## Supported Chain IDS:\n## 1 = Mainnet\n## 5 = Goerli\n## 11155111 = Sepolia\n## 84531 = Base Goerli\n## 80001 = Polygon Mumbai\n## example, to run on mainnet, goerli, and sepolia, set:\n## CHAIN_IDS="1,5,11155111"\nCHAIN_IDS=1\n\n## Here, you should define:\n## - RPC provider urls.\n## - Mnemonics used to derive keypairs to encrypt sarcophagi.\n##   Generate a new one here - https://iancoleman.io/bip39/ or see README to generate one offline.\n## Uncomment and set, for each network chain id you want to run on, your own\n## private provider URL (infura, alchemy, etc) and a unique mnemonic for that network.\n## ================================================================================================\nMAINNET_PROVIDER_URL=wss://eth-mainnet\nMAINNET_ENCRYPTION_MNEMONIC=never gonna give you up never gonna let you down\n\n# GOERLI_PROVIDER_URL=\n# GOERLI_ENCRYPTION_MNEMONIC=\n\n##POLYGON_MAINNET_PROVIDER_URL=\n##POLYGON_MAINNET_ENCRYPTION_MNEMONIC=\n'))),(0,r.kt)(i.Z,{value:"Polygon Only",mdxType:"TabItem"},(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-py",metastring:'title=".env"',title:'".env"'},'## Key used to encrypt secrets and sign ETH transactions\n## The address associated with this key is your archaeologist identifier\nETH_PRIVATE_KEY=ugfhttawfihqwoid132b1231b23\n\n## (optional) multiply gas price estimation by this amount (i.e. 2 means 2x RPC gas price estimate)\n#GAS_MULTIPLIER=\nNOTIFICATION_WEBHOOK_URL=https://discord.com/api/webhooks/hafkakakjajbasbkadsbaksdjbakfbakfaf\n\n## Domain to use for your archaeologist\n## This domain should be pointed with an A record to your server\'s IP\nDOMAIN=my.exampledomain.com\n\n## Comma-separated list of chain ids of each network you want to run your service on.\n## Supported Chain IDS:\n## 1 = Mainnet\n## 5 = Goerli\n## 11155111 = Sepolia\n## 84531 = Base Goerli\n## 80001 = Polygon Mumbai\n## example, to run on mainnet, goerli, and sepolia, set:\n## CHAIN_IDS="1,5,11155111"\nCHAIN_IDS=137\n\n## Here, you should define:\n## - RPC provider urls.\n## - Mnemonics used to derive keypairs to encrypt sarcophagi.\n##   Generate a new one here - https://iancoleman.io/bip39/ or see README to generate one offline.\n## Uncomment and set, for each network chain id you want to run on, your own\n## private provider URL (infura, alchemy, etc) and a unique mnemonic for that network.\n## ================================================================================================\n##MAINNET_PROVIDER_URL=\n##MAINNET_ENCRYPTION_MNEMONIC=\n\n# GOERLI_PROVIDER_URL=\n# GOERLI_ENCRYPTION_MNEMONIC=\n\nPOLYGON_MAINNET_PROVIDER_URL=wss://polygon-mainnet\nPOLYGON_MAINNET_ENCRYPTION_MNEMONIC=never gonna tell a lie and hurt you\n'))))),(0,r.kt)("h3",{id:"register"},"Register"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"If you want to run on multiple chain, you need to registering 1 by 1."),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"Ethereum",mdxType:"TabItem"},(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"COMPOSE_PROFILES=register NETWORK=mainnet docker compose run register\n"))),(0,r.kt)(i.Z,{value:"Polygon",mdxType:"TabItem"},(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"COMPOSE_PROFILES=register NETWORK=polygonMainnet docker compose run register\n"))))),(0,r.kt)("h2",{id:"run"},"RUN!"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"COMPOSE_PROFILES=service NETWORK=all docker compose up -d\n")),(0,r.kt)("h4",{id:"then-update-profile-for-ethereum"},"Then update profile for Ethereum"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"COMPOSE_PROFILES=service NETWORK=mainnet docker compose exec -it archaeologist sh\ncli update -u --network mainnet\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"exit\n")))}h.isMDXComponent=!0}}]);