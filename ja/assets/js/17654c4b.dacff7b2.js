"use strict";(self.webpackChunkelysian=self.webpackChunkelysian||[]).push([[3448],{4137:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>g});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=p(a),m=r,g=c["".concat(s,".").concat(m)]||c[m]||u[m]||l;return a?n.createElement(g,i(i({ref:t},d),{},{components:a})):n.createElement(g,i({ref:t},d))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5675:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var n=a(7462),r=(a(7294),a(4137));const l={title:"Installation",sidebar_position:1,authors:["megumii"],tags:["Substrate"]},i=void 0,o={unversionedId:"what/tangle/tangle",id:"what/tangle/tangle",title:"Installation",description:"Official Links",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/what/tangle/tangle.mdx",sourceDirName:"what/tangle",slug:"/what/tangle/",permalink:"/ja/docs/what/tangle/",draft:!1,editUrl:"https://github.com/Megumiiiiii/megumiiiiii.github.io/edit/main/docs/what/tangle/tangle.mdx",tags:[{label:"Substrate",permalink:"/ja/docs/tags/substrate"}],version:"current",lastUpdatedBy:"Megumiiiiii",lastUpdatedAt:1699088335,formattedLastUpdatedAt:"2023\u5e7411\u67084\u65e5",sidebarPosition:1,frontMatter:{title:"Installation",sidebar_position:1,authors:["megumii"],tags:["Substrate"]},sidebar:"tutorialSidebar",previous:{title:"Tangle",permalink:"/ja/docs/category/tangle"},next:{title:"Update",permalink:"/ja/docs/what/tangle/update"}},s={},p=[{value:"Official Links",id:"official-links",level:2},{value:"Minimum Specifications",id:"minimum-specifications",level:2},{value:"Install Dependencies",id:"install-dependencies",level:2},{value:"Open port",id:"open-port",level:3},{value:"Download Binary &amp; Copy to /usr/bin",id:"download-binary--copy-to-usrbin",level:2},{value:"Create a service",id:"create-a-service",level:2},{value:"Enable service",id:"enable-service",level:3},{value:"Check the logs",id:"check-the-logs",level:3},{value:"Bond TNT and setup validator Account",id:"bond-tnt-and-setup-validator-account",level:3},{value:"Setting identity",id:"setting-identity",level:3},{value:"Request judgment",id:"request-judgment",level:3}],d={toc:p},c="wrapper";function u(e){let{components:t,...l}=e;return(0,r.kt)(c,(0,n.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"official-links"},"Official Links"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.webb.tools/docs/ecosystem-roles/validator/quickstart/"},"Docs")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://x.com/webbprotocol"},"Twitter")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://discord.gg/T7VxhKuhWq"},"Discord")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.webb.tools/"},"Website"))),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Need Ubuntu 22.04 or higher")),(0,r.kt)("h2",{id:"minimum-specifications"},"Minimum Specifications"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Spec"),(0,r.kt)("th",{parentName:"tr",align:null},"Size"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CPU"),(0,r.kt)("td",{parentName:"tr",align:null},"Intel(R) Core(TM) i7-7700K CPU @ 4.20GHz")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RAM"),(0,r.kt)("td",{parentName:"tr",align:null},"32 GB")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SSD"),(0,r.kt)("td",{parentName:"tr",align:null},"500 GB")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Port"),(0,r.kt)("td",{parentName:"tr",align:null},"30333, 30334 TCP")))),(0,r.kt)("h2",{id:"install-dependencies"},"Install Dependencies"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt install --assume-yes git clang curl libssl-dev llvm libudev-dev make protobuf-compiler\n")),(0,r.kt)("h3",{id:"open-port"},"Open port"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo ufw allow ssh; sudo ufw allow 30333\n")),(0,r.kt)("h2",{id:"download-binary--copy-to-usrbin"},"Download Binary & Copy to /usr/bin"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"wget -O tangle https://github.com/webb-tools/tangle/releases/download/v0.5.0/tangle-standalone-linux-amd64 && chmod +x tangle\nsudo cp tangle /usr/bin/\n")),(0,r.kt)("h2",{id:"create-a-service"},"Create a service"),(0,r.kt)("admonition",{type:"danger"},(0,r.kt)("mdxAdmonitionTitle",{parentName:"admonition"},"edit ",(0,r.kt)("strong",{parentName:"mdxAdmonitionTitle"},"YourName")),(0,r.kt)("p",{parentName:"admonition"},"Change all ",(0,r.kt)("strong",{parentName:"p"},"YourName")," to your name")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="tangle.service"',title:'"tangle.service"'},'sudo tee /etc/systemd/system/tangle.service > /dev/null << EOF\n[Unit]\nDescription=Tangle Validator Node\nAfter=network-online.target\nStartLimitIntervalSec=0\n[Service]\nUser=$USER\nRestart=always\nRestartSec=3\nExecStart=/usr/bin/tangle \\\n  --base-path $HOME/.tangle/data/validator/YourName \\\n  --name YourName \\\n  --chain tangle-testnet \\\n  --auto-insert-keys \\\n  --node-key-file "/home/YourName/node-key" \\\n  --port 30333 \\\n  --telemetry-url "wss://telemetry.polkadot.io/submit/ 0" \\\n  --validator \\\n  --no-mdns\n[Install]\nWantedBy=multi-user.target\nEOF\n')),(0,r.kt)("h3",{id:"enable-service"},"Enable service"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo systemctl daemon-reload\nsudo systemctl enable tangle\nsudo systemctl start tangle\n")),(0,r.kt)("h3",{id:"check-the-logs"},"Check the logs"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo journalctl -u tangle -f --no-hostname -o cat\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Example Output:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="Output"',title:'"Output"'},'2023-03-22 14:55:51 Tangle Standalone Node\n2023-03-22 14:55:51 \u270c\ufe0f  version 0.1.15-54624e3-aarch64-macos\n2023-03-22 14:55:51 \u2764\ufe0f  by Webb Technologies Inc., 2017-2023\n2023-03-22 14:55:51 \ud83d\udccb Chain specification: Tangle Testnet\n2023-03-22 14:55:51 \ud83c\udff7  Node name: cooing-morning-2891\n2023-03-22 14:55:51 \ud83d\udc64 Role: FULL\n2023-03-22 14:55:51 \ud83d\udcbe Database: RocksDb at /Users/local/Library/Application Support/tangle-standalone/chains/local_testnet/db/full\n2023-03-22 14:55:51 \u26d3  Native runtime: tangle-standalone-115 (tangle-standalone-1.tx1.au1)\n2023-03-22 14:55:51 Bn254 x5 w3 params\n2023-03-22 14:55:51 [0] \ud83d\udcb8 generated 5 npos voters, 5 from validators and 0 nominators\n2023-03-22 14:55:51 [0] \ud83d\udcb8 generated 5 npos targets\n2023-03-22 14:55:51 [0] \ud83d\udcb8 generated 5 npos voters, 5 from validators and 0 nominators\n2023-03-22 14:55:51 [0] \ud83d\udcb8 generated 5 npos targets\n2023-03-22 14:55:51 [0] \ud83d\udcb8 new validator set of size 5 has been processed for era 1\n2023-03-22 14:55:52 \ud83d\udd28 Initializing Genesis block/state (state: 0xfd16\u2026aefd, header-hash: 0x7c05\u2026a27d)\n2023-03-22 14:55:52 \ud83d\udc74 Loading GRANDPA authority set from genesis on what appears to be first startup.\n2023-03-22 14:55:53 Using default protocol ID "sup" because none is configured in the chain specs\n2023-03-22 14:55:53 \ud83c\udff7  Local node identity is: 12D3KooWDaeXbqokqvEMqpJsKBvjt9BUz41uP9tzRkYuky1Wat7Z\n2023-03-22 14:55:53 \ud83d\udcbb Operating system: macos\n2023-03-22 14:55:53 \ud83d\udcbb CPU architecture: aarch64\n2023-03-22 14:55:53 \ud83d\udce6 Highest known block at #0\n2023-03-22 14:55:53 \u303d\ufe0f Prometheus exporter started at 127.0.0.1:9615\n2023-03-22 14:55:53 Running JSON-RPC HTTP server: addr=127.0.0.1:9933, allowed origins=["http://localhost:*", "http://127.0.0.1:*", "https://localhost:*", "https://127.0.0.1:*", "https://polkadot.js.org"]\n2023-03-22 14:55:53 Running JSON-RPC WS server: addr=127.0.0.1:9944, allowed origins=["http://localhost:*", "http://127.0.0.1:*", "https://localhost:*", "https://127.0.0.1:*", "https://polkadot.js.org"]\n2023-03-22 14:55:53 discovered: 12D3KooWMr4L3Dun4BUyp23HZtLfxoQjR56dDp9eH42Va5X6Hfgi /ip4/192.168.0.125/tcp/30304\n2023-03-22 14:55:53 discovered: 12D3KooWNHhcCUsZTdTkADmDJbSK9YjbtscHHA8R4jvrbGwjPVez /ip4/192.168.0.125/tcp/30305\n2023-03-22 14:55:53 discovered: 12D3KooWMr4L3Dun4BUyp23HZtLfxoQjR56dDp9eH42Va5X6Hfgi /ip4/192.168.88.12/tcp/30304\n2023-03-22 14:55:53 discovered: 12D3KooWNHhcCUsZTdTkADmDJbSK9YjbtscHHA8R4jvrbGwjPVez /ip4/192.168.88.12/tcp/30305\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Example Output after sync:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Output"',title:'"Output"'},"2021-06-17 03:07:39 \ud83d\udd0d Discovered new external address for our node: /ip4/10.26.16.1/tcp/30333/ws/p2p/12D3KooWLtXFWf1oGrnxMGmPKPW54xWCHAXHbFh4Eap6KXmxoi9u\n2021-06-17 03:07:40 \u2699\ufe0f  Syncing 218.8 bps, target=#5553764 (17 peers), best: #24034 (0x08af\u2026dcf5), finalized #23552 (0xd4f0\u20262642), \u2b07 173.5kiB/s \u2b06 12.7kiB/s\n2021-06-17 03:07:45 \u2699\ufe0f  Syncing 214.8 bps, target=#5553765 (20 peers), best: #25108 (0xb272\u2026e800), finalized #25088 (0x94e6\u20268a9f), \u2b07 134.3kiB/s \u2b06 7.4kiB/s\n2021-06-17 03:07:50 \u2699\ufe0f  Syncing 214.8 bps, target=#5553766 (21 peers), best: #26182 (0xe7a5\u202601a2), finalized #26112 (0xcc29\u2026b1a9), \u2b07 5.0kiB/s \u2b06 1.1kiB/s\n2021-06-17 03:07:55 \u2699\ufe0f  Syncing 138.4 bps, target=#5553767 (21 peers), best: #26874 (0xcf4b\u20266553), finalized #26624 (0x9dd9\u202627f8), \u2b07 18.9kiB/s \u2b06 2.0kiB/s\n2021-06-17 03:08:00 \u2699\ufe0f  Syncing 37.0 bps, target=#5553768 (22 peers), best: #27059 (0x5b73\u20266fc9), finalized #26624 (0x9dd9\u202627f8), \u2b07 14.3kiB/s \u2b06 4.4kiB/s\n")),(0,r.kt)("h3",{id:"bond-tnt-and-setup-validator-account"},"Bond TNT and setup validator Account"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Go to ",(0,r.kt)("a",{parentName:"li",href:"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frpc-archive.tangle.tools#/accounts"},"PolkadotJS")),(0,r.kt)("li",{parentName:"ul"},"Create 2 New Account, 1 for Stash 1 for Controller"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("img",{alt:"stash",src:a(1340).Z,width:"1919",height:"469"})),(0,r.kt)("li",{parentName:"ul"},"Choose Stash & Controller account, then fill the amount you want to stake"),(0,r.kt)("li",{parentName:"ul"},"Then back to your VPS"),(0,r.kt)("li",{parentName:"ul"},"Generate session key")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py",metastring:'title="Session Keys"',title:'"Session','Keys"':!0},'curl -H "Content-Type: application/json" -d \'{"id":1, "jsonrpc":"2.0", "method": "author_rotateKeys", "params":[]}\' http://localhost:9944\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Copy the ",(0,r.kt)("inlineCode",{parentName:"li"},"0x")," Output"),(0,r.kt)("li",{parentName:"ul"},"Back to ",(0,r.kt)("a",{parentName:"li",href:"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frpc-archive.tangle.tools#/staking/actions"},"PolkadotJS")),(0,r.kt)("li",{parentName:"ul"},"Click that, ",(0,r.kt)("strong",{parentName:"li"},"Set Session Key")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("img",{alt:"stash",src:a(6294).Z,width:"1914",height:"610"})),(0,r.kt)("li",{parentName:"ul"},"Fill it with the ",(0,r.kt)("inlineCode",{parentName:"li"},"0x")," Output before"),(0,r.kt)("li",{parentName:"ul"},"Then Validate")),(0,r.kt)("h3",{id:"setting-identity"},"Setting identity"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Go to ",(0,r.kt)("a",{parentName:"li",href:"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frpc-archive.tangle.tools#/accounts"},"PolkadotJS")),(0,r.kt)("li",{parentName:"ul"},"Open the 3 dots next to your address: Set on-chain Identity"),(0,r.kt)("li",{parentName:"ul"},"Enter all fields you want to set.")),(0,r.kt)("h3",{id:"request-judgment"},"Request judgment"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Go to the ",(0,r.kt)("a",{parentName:"li",href:"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frpc-archive.tangle.tools#/extrinsics"},"PolkadotJS")),(0,r.kt)("li",{parentName:"ul"},"Select your account and extrinsic type: identity | requestJudgment")),(0,r.kt)("hr",null),(0,r.kt)("admonition",{type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"\u26a0\ufe0f If you want to delete \u26a0\ufe0f"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo systemctl stop tangle\nsudo systemctl disable tangle\ncd $HOME\nrm -r .tangle\n"))))}u.isMDXComponent=!0},6294:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/sessi-e5566d3857b0b9cd75e9d4109c3eb35e.png"},1340:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/tan-5cdda0c615f098166be03f03938e252b.png"}}]);