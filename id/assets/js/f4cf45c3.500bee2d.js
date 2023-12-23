"use strict";(self.webpackChunkelysian=self.webpackChunkelysian||[]).push([[8094],{4137:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),c=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(o.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(a),m=r,h=d["".concat(o,".").concat(m)]||d[m]||p[m]||l;return a?n.createElement(h,i(i({ref:t},u),{},{components:a})):n.createElement(h,i({ref:t},u))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[d]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<l;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},425:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(7294),r=a(6010);const l={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:a,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l.tabItem,i),hidden:a},t)}},3992:(e,t,a)=>{a.d(t,{Z:()=>N});var n=a(7462),r=a(7294),l=a(6010),i=a(2957),s=a(6550),o=a(5238),c=a(3609),u=a(2560);function d(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function p(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??d(a);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:a}=e;const n=(0,s.k6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,o._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(n.location.search);t.set(l,e),n.replace({...n.location,search:t.toString()})}),[l,n])]}function g(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,l=p(e),[i,s]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[o,c]=h({queryString:a,groupId:n}),[d,g]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,l]=(0,u.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:n}),f=(()=>{const e=o??d;return m({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{f&&s(f)}),[f]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);s(e),c(e),g(e)}),[c,g,l]),tabValues:l}}var f=a(1048);const k={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){let{className:t,block:a,selectedValue:s,selectValue:o,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.o5)(),p=e=>{const t=e.currentTarget,a=u.indexOf(t),n=c[a].value;n!==s&&(d(t),o(n))},m=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const a=u.indexOf(e.currentTarget)+1;t=u[a]??u[0];break}case"ArrowLeft":{const a=u.indexOf(e.currentTarget)-1;t=u[a]??u[u.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},t)},c.map((e=>{let{value:t,label:a,attributes:i}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>u.push(e),onKeyDown:m,onClick:p},i,{className:(0,l.Z)("tabs__item",k.tabItem,i?.className,{"tabs__item--active":s===t})}),a??t)})))}function v(e){let{lazy:t,children:a,selectedValue:n}=e;const l=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function y(e){const t=g(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",k.tabList)},r.createElement(b,(0,n.Z)({},e,t)),r.createElement(v,(0,n.Z)({},e,t)))}function N(e){const t=(0,f.Z)();return r.createElement(y,(0,n.Z)({key:String(t)},e))}},3494:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var n=a(7462),r=(a(7294),a(4137)),l=a(3992),i=a(425);const s={title:"Card Chain",sidebar_position:6,authors:["megumii"],tags:["IBC"]},o=void 0,c={unversionedId:"what/card",id:"what/card",title:"Card Chain",description:"Official Links",source:"@site/i18n/id/docusaurus-plugin-content-docs/current/what/card.mdx",sourceDirName:"what",slug:"/what/card",permalink:"/id/docs/what/card",draft:!1,editUrl:"https://github.com/Megumiiiiii/megumiiiiii.github.io/edit/main/docs/what/card.mdx",tags:[{label:"IBC",permalink:"/id/docs/tags/ibc"}],version:"current",lastUpdatedBy:"Megumiiiiii",lastUpdatedAt:1703344055,formattedLastUpdatedAt:"23 Des 2023",sidebarPosition:6,frontMatter:{title:"Card Chain",sidebar_position:6,authors:["megumii"],tags:["IBC"]},sidebar:"tutorialSidebar",previous:{title:"Entangle",permalink:"/id/docs/what/entangle"},next:{title:"Frame",permalink:"/id/docs/what/frame"}},u={},d=[{value:"Official Links",id:"official-links",level:2},{value:"Minimum Specifications",id:"minimum-specifications",level:2},{value:"Install Dependencies",id:"install-dependencies",level:2},{value:"Build",id:"build",level:2},{value:"Setup",id:"setup",level:2},{value:"Add wallet / recover",id:"add-wallet--recover",level:3},{value:"Set minimum gas etc.",id:"set-minimum-gas-etc",level:3},{value:"Prunning",id:"prunning",level:3},{value:"Indexer",id:"indexer",level:3},{value:"Custom Port",id:"custom-port",level:3},{value:"Create Service",id:"create-service",level:2},{value:"Run",id:"run",level:2},{value:"Check logs",id:"check-logs",level:4},{value:"Check syncInfo",id:"check-syncinfo",level:4},{value:"Explorer",id:"explorer",level:2},{value:"faucet",id:"faucet",level:3},{value:"Register validator",id:"register-validator",level:2},{value:"Hal Penting yang wajib di backup",id:"hal-penting-yang-wajib-di-backup",level:2},{value:"Delete",id:"delete",level:3}],p={toc:d},m="wrapper";function h(e){let{components:t,...a}=e;return(0,r.kt)(m,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"official-links"},"Official Links"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://twitter.com/CrowdControlNet"},"Twitter")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://discord.gg/59PBBtXWGW"},"Discord")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/obajay"},"Source Guide"))),(0,r.kt)("h2",{id:"minimum-specifications"},"Minimum Specifications"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Spec"),(0,r.kt)("th",{parentName:"tr",align:null},"Size"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CPU"),(0,r.kt)("td",{parentName:"tr",align:null},"2")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RAM"),(0,r.kt)("td",{parentName:"tr",align:null},"8 GB")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SSD"),(0,r.kt)("td",{parentName:"tr",align:null},"200 GB")))),(0,r.kt)("h2",{id:"install-dependencies"},"Install Dependencies"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt -q update\nsudo apt -qy install curl git jq lz4 build-essential\nsudo apt -qy upgrade\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo rm -rf /usr/local/go\ncurl -Ls https://go.dev/dl/go1.21.3.linux-amd64.tar.gz | sudo tar -xzf - -C /usr/local\neval $(echo 'export PATH=$PATH:/usr/local/go/bin' | sudo tee /etc/profile.d/golang.sh)\neval $(echo 'export PATH=$PATH:$HOME/go/bin' | tee -a $HOME/.profile)\n")),(0,r.kt)("h2",{id:"build"},"Build"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"wget https://github.com/DecentralCardGame/Cardchain/releases/download/v0.12.0/Cardchaind\nchmod +x Cardchaind\nmv $HOME/Cardchaind /usr/local/bin\n")),(0,r.kt)("h2",{id:"setup"},"Setup"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Init")),(0,r.kt)("admonition",{title:"edit YourNAME",type:"caution"},(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre"},"Cardchaind config node tcp://localhost:13957\nCardchaind config keyring-backend test\nCardchaind init YourNAME --chain-id cardtestnet-7\nCardchaind config chain-id cardtestnet-7\nwget http://45.136.28.158:3000/genesis.json -O $HOME/.Cardchain/config/genesis.json\n"))),(0,r.kt)("h3",{id:"add-wallet--recover"},"Add wallet / recover"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"New Wallet",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"Cardchaind keys add wallet\n"))),(0,r.kt)(i.Z,{value:"Recover Wallet",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"Cardchaind keys add wallet --recover\n")))),(0,r.kt)("h3",{id:"set-minimum-gas-etc"},"Set minimum gas etc."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'sed -i.bak -e "s/^minimum-gas-prices *=.*/minimum-gas-prices = \\"0.0ubpf\\"/;" ~/.Cardchain/config/app.toml\nexternal_address=$(wget -qO- eth0.me)\nsed -i.bak -e "s/^external_address *=.*/external_address = \\"$external_address:26656\\"/" $HOME/.Cardchain/config/config.toml\npeers="6a41c6269637733220857a021c8454fa2204987e@202.61.225.157:26656"\nsed -i.bak -e "s/^persistent_peers *=.*/persistent_peers = \\"$peers\\"/" $HOME/.Cardchain/config/config.toml\nseeds=""\nsed -i.bak -e "s/^seeds =.*/seeds = \\"$seeds\\"/" $HOME/.Cardchain/config/config.toml\n')),(0,r.kt)("h3",{id:"prunning"},"Prunning"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'pruning="custom" && \\\npruning_keep_recent="1000" && \\\npruning_keep_every="0" && \\\npruning_interval="10" && \\\nsed -i -e "s/^pruning *=.*/pruning = \\"$pruning\\"/" $HOME/.Cardchain/config/app.toml && \\\nsed -i -e "s/^pruning-keep-recent *=.*/pruning-keep-recent = \\"$pruning_keep_recent\\"/" $HOME/.Cardchain/config/app.toml && \\\nsed -i -e "s/^pruning-keep-every *=.*/pruning-keep-every = \\"$pruning_keep_every\\"/" $HOME/.Cardchain/config/app.toml && \\\nsed -i -e "s/^pruning-interval *=.*/pruning-interval = \\"$pruning_interval\\"/" $HOME/.Cardchain/config/app.toml\n')),(0,r.kt)("h3",{id:"indexer"},"Indexer"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'indexer="null" && \\\nsed -i -e "s/^indexer *=.*/indexer = \\"$indexer\\"/" $HOME/.Cardchain/config/config.toml\n')),(0,r.kt)("h3",{id:"custom-port"},"Custom Port"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'sed -i -e "s%^proxy_app = \\"tcp://127.0.0.1:26658\\"%proxy_app = \\"tcp://127.0.0.1:13958\\"%; s%^laddr = \\"tcp://127.0.0.1:26657\\"%laddr = \\"tcp://127.0.0.1:13957\\"%; s%^pprof_laddr = \\"localhost:6060\\"%pprof_laddr = \\"localhost:13960\\"%; s%^laddr = \\"tcp://0.0.0.0:26656\\"%laddr = \\"tcp://0.0.0.0:13956\\"%; s%^prometheus_listen_addr = \\":26660\\"%prometheus_listen_addr = \\":13966\\"%" $HOME/.Cardchain/config/config.toml\nsed -i -e "s%^address = \\"tcp://localhost:1317\\"%address = \\"tcp://0.0.0.0:13917\\"%; s%^address = \\":8080\\"%address = \\":13980\\"%; s%^address = \\"localhost:9090\\"%address = \\"0.0.0.0:13990\\"%; s%^address = \\"localhost:9091\\"%address = \\"0.0.0.0:13991\\"%; s%:8545%:13945%; s%:8546%:13946%; s%:6065%:13965%" $HOME/.Cardchain/config/app.toml\n')),(0,r.kt)("h2",{id:"create-service"},"Create Service"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"sudo tee <<EOF >/dev/null /etc/systemd/system/Cardchaind.service\n[Unit]\nDescription=Cardchain Daemon\nAfter=network-online.target\n[Service]\nUser=$USER\nExecStart=$(which Cardchaind) start\nRestart=always\nRestartSec=10\nLimitNOFILE=65535\n[Install]\nWantedBy=multi-user.target\nEOF\n")),(0,r.kt)("h2",{id:"run"},"Run"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo systemctl daemon-reload\nsudo systemctl enable Cardchaind\nsudo systemctl restart Cardchaind && sudo journalctl -u Cardchaind -f -o cat\n")),(0,r.kt)("h4",{id:"check-logs"},"Check logs"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"sudo journalctl -fu Cardchaind -o cat\n")),(0,r.kt)("h4",{id:"check-syncinfo"},"Check syncInfo"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Cardchaind status 2>&1 | jq .SyncInfo\n")),(0,r.kt)("h2",{id:"explorer"},"Explorer"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://exp.kessoku.xyz/#/CardChain-Testnet"},"https://exp.kessoku.xyz/#/CardChain-Testnet"))),(0,r.kt)("h3",{id:"faucet"},"faucet"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://crowdcontrol.network/"},"Here")),(0,r.kt)("li",{parentName:"ul"},"Connect wallet, complete capthca, done")),(0,r.kt)("h2",{id:"register-validator"},"Register validator"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"After Sync")),(0,r.kt)("admonition",{title:"change YourNAME",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Jangan lupa edi YourNAME ke Nama mu"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'Cardchaind tx staking create-validator \\\n--amount 1000000ubpf \\\n--from wallet \\\n--commission-max-change-rate "0.2" \\\n--commission-max-rate "1" \\\n--commission-rate "0.1" \\\n--min-self-delegation "1" \\\n--details="" \\\n--identity="" \\\n--security-contact "emailmu@email.co" \\\n--pubkey  $(Cardchaind tendermint show-validator) \\\n--moniker YourNAME \\\n--fees 300ubpf \\\n--chain-id cardtestnet-7 -y\n'))),(0,r.kt)("h2",{id:"hal-penting-yang-wajib-di-backup"},"Hal Penting yang wajib di backup"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"MNEMONIC Pharse"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"/.Cardchain/data/priv_validator_state.json")," file")),(0,r.kt)("h3",{id:"delete"},"Delete"),(0,r.kt)("admonition",{title:"Delete nodes",type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"\u26a0\ufe0f Jika ingin menghapus node \u26a0\ufe0f"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-js"},"cd $HOME\nsudo systemctl stop Cardchaind\nsudo rm /etc/systemd/system/Cardchaind.service\nsudo rm -rf $HOME/.Cardchain/\nsudo rm -rf Cardchain\nsudo rm -rf $(which Cardchaind)\n"))))}h.isMDXComponent=!0}}]);