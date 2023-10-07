"use strict";(self.webpackChunkelysian=self.webpackChunkelysian||[]).push([[7220],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>k});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var p=n.createContext({}),c=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=c(a),d=l,k=m["".concat(p,".").concat(d)]||m[d]||u[d]||r;return a?n.createElement(k,o(o({ref:t},s),{},{components:a})):n.createElement(k,o({ref:t},s))}));function k(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,o=new Array(r);o[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[m]="string"==typeof e?e:l,o[1]=i;for(var c=2;c<r;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},8595:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var n=a(7462),l=(a(7294),a(3905));const r={title:"Sarcophagus",sidebar_position:1,tags:["Arweave","EVM"]},o=void 0,i={unversionedId:"what/sarco",id:"what/sarco",title:"Sarcophagus",description:"logo",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/what/sarco.mdx",sourceDirName:"what",slug:"/what/sarco",permalink:"/ja/docs/what/sarco",draft:!1,editUrl:"https://github.com/Megumiiiiii/megumiiiiii.github.io/edit/main/docs/what/sarco.mdx",tags:[{label:"Arweave",permalink:"/ja/docs/tags/arweave"},{label:"EVM",permalink:"/ja/docs/tags/evm"}],version:"current",sidebarPosition:1,frontMatter:{title:"Sarcophagus",sidebar_position:1,tags:["Arweave","EVM"]},sidebar:"tutorialSidebar",previous:{title:"Guides",permalink:"/ja/docs/category/guides"},next:{title:"AR",permalink:"/ja/docs/what/ar"}},p={},c=[{value:"\u6700\u4f4e\u8981\u4ef6",id:"\u6700\u4f4e\u8981\u4ef6",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"DNS\u30ec\u30b3\u30fc\u30c9\u306e\u8a2d\u5b9a",id:"dns\u30ec\u30b3\u30fc\u30c9\u306e\u8a2d\u5b9a",level:3},{value:"\u4f9d\u5b58\u95a2\u4fc2\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb",id:"\u4f9d\u5b58\u95a2\u4fc2\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb",level:2},{value:"\u30dd\u30fc\u30c8\u306e\u958b\u653e",id:"\u30dd\u30fc\u30c8\u306e\u958b\u653e",level:2},{value:"\u30ea\u30dd\u30b8\u30c8\u30ea\u306e\u30af\u30ed\u30fc\u30f3",id:"\u30ea\u30dd\u30b8\u30c8\u30ea\u306e\u30af\u30ed\u30fc\u30f3",level:2},{value:"<code>.env.sample</code>\u3092<code>.env</code>\u306b\u30b3\u30d4\u30fc",id:"envsample\u3092env\u306b\u30b3\u30d4\u30fc",level:3},{value:"\u30cb\u30fc\u30e2\u30cb\u30c3\u30af\u30d5\u30ec\u30fc\u30ba\u306e\u751f\u6210",id:"\u30cb\u30fc\u30e2\u30cb\u30c3\u30af\u30d5\u30ec\u30fc\u30ba\u306e\u751f\u6210",level:3},{value:"\u7a7a\u306e<code>peer-id.json</code>\u30d5\u30a1\u30a4\u30eb\u3092\u4f5c\u6210",id:"\u7a7a\u306epeer-idjson\u30d5\u30a1\u30a4\u30eb\u3092\u4f5c\u6210",level:3},{value:"<code>.env</code>\u30d5\u30a1\u30a4\u30eb\u3092\u7de8\u96c6",id:"env\u30d5\u30a1\u30a4\u30eb\u3092\u7de8\u96c6",level:3},{value:"$SARCO Token",id:"sarco-token",level:2},{value:"\u767b\u9332",id:"\u767b\u9332",level:2},{value:"\u30ce\u30fc\u30c9\u306e\u8d77\u52d5",id:"\u30ce\u30fc\u30c9\u306e\u8d77\u52d5",level:3},{value:"\u4fbf\u5229\u306a\u30b3\u30de\u30f3\u30c9",id:"\u4fbf\u5229\u306a\u30b3\u30de\u30f3\u30c9",level:2},{value:"\u30d7\u30ed\u30d5\u30a1\u30a4\u30eb\u306e\u78ba\u8a8d",id:"\u30d7\u30ed\u30d5\u30a1\u30a4\u30eb\u306e\u78ba\u8a8d",level:4},{value:"\u30c8\u30e9\u30d6\u30eb\u30b7\u30e5\u30fc\u30c6\u30a3\u30f3\u30b0",id:"\u30c8\u30e9\u30d6\u30eb\u30b7\u30e5\u30fc\u30c6\u30a3\u30f3\u30b0",level:3}],s={toc:c},m="wrapper";function u(e){let{components:t,...r}=e;return(0,l.kt)(m,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"logo",src:a(449).Z,width:"1200",height:"675"})),(0,l.kt)("h2",{id:"\u6700\u4f4e\u8981\u4ef6"},"\u6700\u4f4e\u8981\u4ef6"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Spec"),(0,l.kt)("th",{parentName:"tr",align:null},"Size"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"20GB"),(0,l.kt)("td",{parentName:"tr",align:null},"SSD")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"2GB"),(0,l.kt)("td",{parentName:"tr",align:null},"RAM")))),(0,l.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Git"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.simplilearn.com/tutorials/docker-tutorial/how-to-install-docker-on-ubuntu"},"Dokcer >= 20.0")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://docs.docker.com/compose/install/linux/#install-the-plugin-manually"},"Dokcer compose >= 2.0.0)")),(0,l.kt)("li",{parentName:"ul"},"\u30b5\u30fc\u30d0\u30fc\u306f\u30dd\u30fc\u30c880\u304a\u3088\u3073443\u3092\u958b\u3044\u3066\u3044\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059"),(0,l.kt)("li",{parentName:"ul"},"ETH\u30a6\u30a9\u30ec\u30c3\u30c8\uff08\u30d7\u30e9\u30a4\u30d9\u30fc\u30c8\u30ad\u30fc\u3068\u30cb\u30fc\u30e2\u30cb\u30c3\u30af\uff09",(0,l.kt)("blockquote",{parentName:"li"},(0,l.kt)("p",{parentName:"blockquote"},"ETH\u306e\u6b8b\u9ad8\uff08\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u306e\u7f72\u540d\u7528\uff09"),(0,l.kt)("p",{parentName:"blockquote"},"SARCO\u306e\u6b8b\u9ad8\uff08\u8003\u53e4\u5b66\u8005\u3092\u546a\u3044\u306b\u30d0\u30a4\u30f3\u30c9\u3059\u308b\u305f\u3081\uff09"))),(0,l.kt)("li",{parentName:"ul"},"RPC URL\uff08Infura\u3001Alchemy\u306a\u3069\uff09"),(0,l.kt)("li",{parentName:"ul"},"\u30b5\u30fc\u30d0\u30fc\u306eIP\u30a2\u30c9\u30ec\u30b9\u3092\u6307\u3059\u30c9\u30e1\u30a4\u30f3\u540d")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Goerli\uff08\u30c1\u30a7\u30fc\u30f3ID = 5\uff09\u3067\u5b9f\u884c\u3059\u308b\u5834\u5408\u3001Goerli ETH + Goerli SARCO\u304c\u5fc5\u8981\u3067\u3059\u3002")),(0,l.kt)("h3",{id:"dns\u30ec\u30b3\u30fc\u30c9\u306e\u8a2d\u5b9a"},"DNS\u30ec\u30b3\u30fc\u30c9\u306e\u8a2d\u5b9a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u30c9\u30e1\u30a4\u30f3\u7ba1\u7406\u306b\u79fb\u52d5\u3057\u307e\u3059"),(0,l.kt)("li",{parentName:"ul"},"DNS\u30ec\u30b3\u30fc\u30c9\u3092\u8ffd\u52a0\u3057\u307e\u3059\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"A")," \u3092\u9078\u629e\u3057\u307e\u3059\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u540d\u524d\u3068\u30d1\u30d6\u30ea\u30c3\u30afIP\u3092\u5024\u3068\u3057\u3066\u5165\u529b\u3057\u307e\u3059\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u4fdd\u5b58")),(0,l.kt)("h2",{id:"\u4f9d\u5b58\u95a2\u4fc2\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb"},"\u4f9d\u5b58\u95a2\u4fc2\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh",metastring:'filename="\u30b7\u30b9\u30c6\u30e0\u306e\u30a2\u30c3\u30d7\u30c7\u30fc\u30c8" copy',filename:'"\u30b7\u30b9\u30c6\u30e0\u306e\u30a2\u30c3\u30d7\u30c7\u30fc\u30c8"',copy:!0},"sudo apt update; sudo apt upgrade\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh",metastring:'filename="docker git\u306a\u3069\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb" copy',filename:'"docker','git\u306a\u3069\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb"':!0,copy:!0},'sudo apt-get update && sudo apt install git -y && sudo apt install apt-transport-https ca-certificates curl software-properties-common -y && curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add - && sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu focal stable" && sudo apt-get install docker-ce docker-ce-cli containerd.io docker-compose-plugin -y\n')),(0,l.kt)("h2",{id:"\u30dd\u30fc\u30c8\u306e\u958b\u653e"},"\u30dd\u30fc\u30c8\u306e\u958b\u653e"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh",metastring:'filename="\u30dd\u30fc\u30c8" copy',filename:'"\u30dd\u30fc\u30c8"',copy:!0},"sudo ufw allow ssh; sudo ufw allow 443/tcp; sudo ufw allow 80/tcp; sudo ufw enable\n")),(0,l.kt)("h2",{id:"\u30ea\u30dd\u30b8\u30c8\u30ea\u306e\u30af\u30ed\u30fc\u30f3"},"\u30ea\u30dd\u30b8\u30c8\u30ea\u306e\u30af\u30ed\u30fc\u30f3"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh",metastring:'filename="\u30af\u30ed\u30fc\u30f3" copy',filename:'"\u30af\u30ed\u30fc\u30f3"',copy:!0},"git clone https://github.com/sarcophagus-org/quickstart-archaeologist\ncd quickstart-archaeologist\n")),(0,l.kt)("h3",{id:"envsample\u3092env\u306b\u30b3\u30d4\u30fc"},(0,l.kt)("inlineCode",{parentName:"h3"},".env.sample"),"\u3092",(0,l.kt)("inlineCode",{parentName:"h3"},".env"),"\u306b\u30b3\u30d4\u30fc"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh",metastring:'filename=" .env\u3092\u4f5c\u6210" copy',filename:'"','.env\u3092\u4f5c\u6210"':!0,copy:!0},"cp .env.example .env\n")),(0,l.kt)("h3",{id:"\u30cb\u30fc\u30e2\u30cb\u30c3\u30af\u30d5\u30ec\u30fc\u30ba\u306e\u751f\u6210"},"\u30cb\u30fc\u30e2\u30cb\u30c3\u30af\u30d5\u30ec\u30fc\u30ba\u306e\u751f\u6210"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh",metastring:'filename="\u65b0\u3057\u3044\u30d5\u30ec\u30fc\u30ba\u306e\u751f\u6210" copy',filename:'"\u65b0\u3057\u3044\u30d5\u30ec\u30fc\u30ba\u306e\u751f\u6210"',copy:!0},"COMPOSE_PROFILES=seed docker compose run seed-gen\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u30d0\u30c3\u30af\u30a2\u30c3\u30d7")),(0,l.kt)("h3",{id:"\u7a7a\u306epeer-idjson\u30d5\u30a1\u30a4\u30eb\u3092\u4f5c\u6210"},"\u7a7a\u306e",(0,l.kt)("inlineCode",{parentName:"h3"},"peer-id.json"),"\u30d5\u30a1\u30a4\u30eb\u3092\u4f5c\u6210"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh",metastring:'filename="peer-id\u3092\u4f5c\u6210" copy',filename:'"peer-id\u3092\u4f5c\u6210"',copy:!0},"touch peer-id.json\n")),(0,l.kt)("h3",{id:"env\u30d5\u30a1\u30a4\u30eb\u3092\u7de8\u96c6"},(0,l.kt)("inlineCode",{parentName:"h3"},".env"),"\u30d5\u30a1\u30a4\u30eb\u3092\u7de8\u96c6"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh",metastring:'filename=" .env\u3092\u7de8\u96c6" copy',filename:'"','.env\u3092\u7de8\u96c6"':!0,copy:!0},"nano .env\n")),(0,l.kt)("p",null,"\u30c7\u30fc\u30bf\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044\n\u4f8b\uff1a\n\u2193 \u2193 \u2193"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-env",metastring:'filename=" .env"',filename:'"','.env"':!0},"## Key used to encrypt secrets and sign ETH transactions\n## The address associated with this key is your archaeologist identifier\nETH_PRIVATE_KEY=gsgstgsthsrthtrhtetneetn211241413r3g24h5h42\n\n## Seed used to derive keypairs to encrypt sarcophagi\n## Generate a new one here - https://iancoleman.io/bip39/ or see README to generate one offline.\nENCRYPTION_MNEMONIC= never gonna give you up never gonna let you down\n\n## Domain to use for your archaeologist\n## This domain should be pointed with an A record to your server's IP\nDOMAIN=my.exampledomain.com\n\n## RPC provider. Update this to use your own private provider URL (infura, alchemy, etc). It is not recommended to use a public provider. \nPROVIDER_URL=https://cloudflare-eth.com \n")),(0,l.kt)("h2",{id:"sarco-token"},"$SARCO Token"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"$SARCO\u3092\u5165\u624b\u3059\u308b\u306b\u306f\u3001Uniswap\u3067\u305d\u308c\u3089\u3092\u4ea4\u63db\u3067\u304d\u307e\u3059"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://app.uniswap.org/"},"https://app.uniswap.org/")," \u306b\u30a2\u30af\u30bb\u30b9\u3057\u3066\u304f\u3060\u3055\u3044"),(0,l.kt)("li",{parentName:"ul"},"SC Sarco: ",(0,l.kt)("inlineCode",{parentName:"li"},"0x7697B462A7c4Ff5F8b55BDBC2F4076c2aF9cF51A"))),(0,l.kt)("h2",{id:"\u767b\u9332"},"\u767b\u9332"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh",metastring:'filename="compose register" copy',filename:'"compose','register"':!0,copy:!0},"COMPOSE_PROFILES=register docker compose run register\n")),(0,l.kt)("p",null,"Y\u3001Enter"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u6b21\u306b\u3001\u540d\u76ee\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044\uff08\u63a8\u5968\uff1aDiggingFee 100 - 500\u3001CurseFee 300\u3001FreeBond 1000\uff09")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-console",metastring:'filename="ouput"',filename:'"ouput"'},"=========================================================================================================\n\nARCHAEOLOGIST PROFILE: \n\nFIELD                      VALUE                                                                       \nexists                     true                                                                        \nmaximumRewrapInterval      200 days (17280000s)                                                        \nmaximumResurrectionTime    Dec 30 2023 (1703953499)                                                    \npeerId                     sarcophagus.example.xyz:12D3KooWRkyaFVBDFaaf3D5piG1YRJjCMSgBMj9Si4xjFDaRqjSCX\nminimumDiggingFeePerSecond 0.000153712226361799 SARCO (~ 400.00/month)                                 \nfreeBond                   1000.0SARCO                                               \ncursedBond                 0 SARCO                                                \ncurseFee                   300.0 SARCO                                                                 \naddress                    0x897015991ABC646a69EC8701B8459aA806aCf70a                                  \n\n=========================================================================================================\n")),(0,l.kt)("h3",{id:"\u30ce\u30fc\u30c9\u306e\u8d77\u52d5"},"\u30ce\u30fc\u30c9\u306e\u8d77\u52d5"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh",metastring:'filename="compose up" copy',filename:'"compose','up"':!0,copy:!0},"COMPOSE_PROFILES=service docker compose up -d\n")),(0,l.kt)("h2",{id:"\u4fbf\u5229\u306a\u30b3\u30de\u30f3\u30c9"},"\u4fbf\u5229\u306a\u30b3\u30de\u30f3\u30c9"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u8003\u53e4\u5b66\u8005\u30b5\u30fc\u30d3\u30b9\u306e\u30ed\u30b0\u3092\u78ba\u8a8d\u3059\u308b")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh",metastring:'filename="archaeologist-service" copy',filename:'"archaeologist-service"',copy:!0},"docker logs -f quickstart-archaeologist-archaeologist-1\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Acme Companion\u306e\u30ed\u30b0\u3092\u78ba\u8a8d\u3059\u308b")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh",metastring:'filename="acme-companion" copy',filename:'"acme-companion"',copy:!0},"docker logs -f quickstart-archaeologist-acme-companion-1\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Nginx\u306e\u30ed\u30b0\u3092\u78ba\u8a8d\u3059\u308b")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh",metastring:'filename="nginx-proxy" copy',filename:'"nginx-proxy"',copy:!0},"docker logs -f nginx-proxy\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u30b5\u30fc\u30d3\u30b9\u306e\u66f4\u65b0")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh",metastring:'filename="\u30b9\u30c6\u30c3\u30d7\u66f4\u65b0" copy',filename:'"\u30b9\u30c6\u30c3\u30d7\u66f4\u65b0"',copy:!0},"cd ~/quickstart-archaeologist\ngit pull\nCOMPOSE_PROFILES=service docker compose stop\nCOMPOSE_PROFILES=service docker compose pull\nCOMPOSE_PROFILES=service docker compose up -d\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u30b5\u30fc\u30d3\u30b9\u306e\u518d\u8d77\u52d5")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh",metastring:'filename="\u518d\u8d77\u52d5" copy',filename:'"\u518d\u8d77\u52d5"',copy:!0},"COMPOSE_PROFILES=service docker compose stop\nCOMPOSE_PROFILES=service docker compose up -d\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u767b\u9332\u5f8c\u306b\u30c9\u30e1\u30a4\u30f3\u3092\u5909\u66f4\u3057\u305f\u5834\u5408")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh",metastring:'filename="1\u3064\u306eFreeBond\u3092\u8ffd\u52a0" copy',filename:'"1\u3064\u306eFreeBond\u3092\u8ffd\u52a0"',copy:!0},"docker compose exec -it archaeologist sh\ncli update -u\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh",metastring:'filename="cli\u3092\u7d42\u4e86" copy',filename:'"cli\u3092\u7d42\u4e86"',copy:!0},"exit\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u63a1\u6398\u624b\u6570\u6599\u306e\u66f4\u65b0")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh",metastring:'filename="\u63a1\u6398\u624b\u6570\u6599\u306e\u66f4\u65b0" copy',filename:'"\u63a1\u6398\u624b\u6570\u6599\u306e\u66f4\u65b0"',copy:!0},"docker compose exec -it archaeologist sh\ncli update -d 300\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh",metastring:'filename="cli\u3092\u7d42\u4e86" copy',filename:'"cli\u3092\u7d42\u4e86"',copy:!0},"exit\n")),(0,l.kt)("p",null,"300\u306f\u4efb\u610f\u306e\u91d1\u984d\u306b\u5909\u66f4\u3067\u304d\u307e\u3059\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Free Bond\u306e\u66f4\u65b0")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh",metastring:'filename="FreeBond\u306e\u66f4\u65b0" copy',filename:'"FreeBond\u306e\u66f4\u65b0"',copy:!0},"docker compose exec -it archaeologist sh\ncli update -f 100\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh",metastring:'filename="cli\u3092\u7d42\u4e86" copy',filename:'"cli\u3092\u7d42\u4e86"',copy:!0},"exit\n")),(0,l.kt)("p",null,"100\u306f\u4efb\u610f\u306e\u91d1\u984d\u306b\u5909\u66f4\u3067\u304d\u307e\u3059\u3002"),(0,l.kt)("h4",{id:"\u30d7\u30ed\u30d5\u30a1\u30a4\u30eb\u306e\u78ba\u8a8d"},"\u30d7\u30ed\u30d5\u30a1\u30a4\u30eb\u306e\u78ba\u8a8d"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u30d7\u30ed\u30d5\u30a1\u30a4\u30eb\u306e\u78ba\u8a8d")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh",metastring:'filename="\u30d7\u30ed\u30d5\u30a1\u30a4\u30eb\u306e\u8868\u793a" copy',filename:'"\u30d7\u30ed\u30d5\u30a1\u30a4\u30eb\u306e\u8868\u793a"',copy:!0},"docker compose exec -it archaeologist sh\ncli view -p\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh",metastring:'filename="cli\u3092\u7d42\u4e86" copy',filename:'"cli\u3092\u7d42\u4e86"',copy:!0},"exit\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5831\u916c\u306e\u8acb\u6c42")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh",metastring:'filename="\u5831\u916c\u306e\u8acb\u6c42" copy',filename:'"\u5831\u916c\u306e\u8acb\u6c42"',copy:!0},"docker compose exec -it archaeologist sh\ncli claim\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh",metastring:'filename="cli\u3092\u7d42\u4e86" copy',filename:'"cli\u3092\u7d42\u4e86"',copy:!0},"exit\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Free Bond\u306e\u5f15\u304d\u51fa\u3057")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh",metastring:'filename="FreeBond\u306e\u5f15\u304d\u51fa\u3057" copy',filename:'"FreeBond\u306e\u5f15\u304d\u51fa\u3057"',copy:!0},"docker compose exec -it archaeologist sh\ncli free-bond -w 10\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh",metastring:'filename="cli\u3092\u7d42\u4e86" copy',filename:'"cli\u3092\u7d42\u4e86"',copy:!0},"exit\n")),(0,l.kt)("p",null,"10\u306f\u4efb\u610f\u306e\u91d1\u984d\u306b\u5909\u66f4\u3067\u304d\u307e\u3059\u3002"),(0,l.kt)("h3",{id:"\u30c8\u30e9\u30d6\u30eb\u30b7\u30e5\u30fc\u30c6\u30a3\u30f3\u30b0"},"\u30c8\u30e9\u30d6\u30eb\u30b7\u30e5\u30fc\u30c6\u30a3\u30f3\u30b0"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u30c9\u30e1\u30a4\u30f3\u306eA\u30ec\u30b3\u30fc\u30c9")),(0,l.kt)("p",null,"\u3042\u306a\u305f\u306e\u30c9\u30e1\u30a4\u30f3\u306f\u3001\u8003\u53e4\u5b66\u8005\u30b5\u30fc\u30d3\u30b9\u304c\u5b9f\u884c\u3055\u308c\u3066\u3044\u308b\u30b5\u30fc\u30d0\u30fc\u306eIP\u30a2\u30c9\u30ec\u30b9\u3092\u6307\u3059A\u30ec\u30b3\u30fc\u30c9\u3092\u6301\u3063\u3066\u3044\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\n",(0,l.kt)("a",{parentName:"p",href:"https://www.nslookup.io/website-to-ip-lookup"},"https://www.nslookup.io/website-to-ip-lookup"),"\n\u3053\u306e\u30c4\u30fc\u30eb\u3092\u4f7f\u7528\u3057\u3066\u3001\u30c9\u30e1\u30a4\u30f3\u304c\u6b63\u3057\u304f\u6307\u3057\u793a\u3055\u308c\u3066\u3044\u308b\u3053\u3068\u3092\u78ba\u8a8d\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Websocket\u63a5\u7d9a\u3092\u30c6\u30b9\u30c8\u3059\u308b")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://www.piesocket.com/websocket-tester"},"https://www.piesocket.com/websocket-tester"),"\nWebsocket\u30a2\u30c9\u30ec\u30b9\u3092\u6b21\u306e\u5f62\u5f0f\u3067\u5165\u529b\u3057\u3066\u3001\u8003\u53e4\u5b66\u8005\u304cWebsocket\u63a5\u7d9a\u3092\u958b\u3051\u308b\u304b\u3069\u3046\u304b\u3092\u30c6\u30b9\u30c8\u3057\u307e\u3059\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"wss://<\u30c9\u30e1\u30a4\u30f3>/p2p/<libp2p peerID>\n")),(0,l.kt)("p",null,"\u30c9\u30e1\u30a4\u30f3\u3068peerID\u3092\u53d6\u5f97\u3059\u308b\u306b\u306f\u3001",(0,l.kt)("a",{parentName:"p",href:"#checkprofile"},"\u30d7\u30ed\u30d5\u30a1\u30a4\u30eb\u306e\u78ba\u8a8d"),"\u3092\u5b9f\u884c\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,l.kt)("hr",null),(0,l.kt)("admonition",{type:"danger"},(0,l.kt)("p",{parentName:"admonition"},"\u26a0\ufe0f \u524a\u9664\u3057\u305f\u3044\u5834\u5408 \u26a0\ufe0f")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh",metastring:'filename="DELETE" copy',filename:'"DELETE"',copy:!0},"cd ~/quickstart-archaeologist\nCOMPOSE_PROFILES=service docker compose down -v\ndocker rmi jwilder/nginx-proxy nginxproxy/acme-companion ghcr.io/sarcophagus-org/sarcophagus-v2-archaeologist-service\n")),(0,l.kt)("h1",{id:""}))}u.isMDXComponent=!0},449:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/logo2-df45c663ec3370d01c282198905d79b2.png"}}]);