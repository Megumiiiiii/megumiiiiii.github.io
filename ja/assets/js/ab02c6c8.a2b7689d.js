"use strict";(self.webpackChunkelysian=self.webpackChunkelysian||[]).push([[91],{4137:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,g=d["".concat(s,".").concat(m)]||d[m]||p[m]||l;return n?a.createElement(g,i(i({ref:t},c),{},{components:n})):a.createElement(g,i({ref:t},c))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[d]="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},425:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(7294),r=n(6010);const l={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l.tabItem,i),hidden:n},t)}},3992:(e,t,n)=>{n.d(t,{Z:()=>N});var a=n(7462),r=n(7294),l=n(6010),i=n(2957),o=n(6550),s=n(5238),u=n(3609),c=n(2560);function d(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function p(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??d(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:n}=e;const a=(0,o.k6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(a.location.search);t.set(l,e),a.replace({...a.location,search:t.toString()})}),[l,a])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,l=p(e),[i,o]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:l}))),[s,u]=g({queryString:n,groupId:a}),[d,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,l]=(0,c.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:a}),k=(()=>{const e=s??d;return m({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{k&&o(k)}),[k]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),f(e)}),[u,f,l]),tabValues:l}}var k=n(1048);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function h(e){let{className:t,block:n,selectedValue:o,selectValue:s,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.o5)(),p=e=>{const t=e.currentTarget,n=c.indexOf(t),a=u[n].value;a!==o&&(d(t),s(a))},m=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:p},i,{className:(0,l.Z)("tabs__item",b.tabItem,i?.className,{"tabs__item--active":o===t})}),n??t)})))}function v(e){let{lazy:t,children:n,selectedValue:a}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function y(e){const t=f(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",b.tabList)},r.createElement(h,(0,a.Z)({},e,t)),r.createElement(v,(0,a.Z)({},e,t)))}function N(e){const t=(0,k.Z)();return r.createElement(y,(0,a.Z)({key:String(t)},e))}},2270:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>g,frontMatter:()=>o,metadata:()=>u,toc:()=>d});var a=n(7462),r=(n(7294),n(4137)),l=n(3992),i=n(425);const o={title:"Entangle",sidebar_position:5,authors:["megumii"],tags:["IBC"]},s=void 0,u={unversionedId:"what/entangle",id:"what/entangle",title:"Entangle",description:"Official Links",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/what/entangle.mdx",sourceDirName:"what",slug:"/what/entangle",permalink:"/ja/docs/what/entangle",draft:!1,editUrl:"https://github.com/Megumiiiiii/megumiiiiii.github.io/edit/main/docs/what/entangle.mdx",tags:[{label:"IBC",permalink:"/ja/docs/tags/ibc"}],version:"current",lastUpdatedBy:"Megumiiiiii",lastUpdatedAt:1697714787,formattedLastUpdatedAt:"2023\u5e7410\u670819\u65e5",sidebarPosition:5,frontMatter:{title:"Entangle",sidebar_position:5,authors:["megumii"],tags:["IBC"]},sidebar:"tutorialSidebar",previous:{title:"Tangle",permalink:"/ja/docs/what/tangle"},next:{title:"Card Chain",permalink:"/ja/docs/what/card"}},c={},d=[{value:"Official Links",id:"official-links",level:2},{value:"Minimum Specifications",id:"minimum-specifications",level:2},{value:"Install Dependencies",id:"install-dependencies",level:2},{value:"Clone Repo",id:"clone-repo",level:2},{value:"Install",id:"install",level:2},{value:"Add wallet / recover and export PrivKey",id:"add-wallet--recover-and-export-privkey",level:2},{value:"Setup",id:"setup",level:2},{value:"Set minimum gas etc.",id:"set-minimum-gas-etc",level:2},{value:"Prunning",id:"prunning",level:2},{value:"Indexer",id:"indexer",level:2},{value:"Download Snapshot",id:"download-snapshot",level:2},{value:"Run",id:"run",level:2},{value:"STAVR Explorer",id:"stavr-explorer",level:2},{value:"Register validator",id:"register-validator",level:2},{value:"Apply",id:"apply",level:3}],p={toc:d},m="wrapper";function g(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"official-links"},"Official Links"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://entangle-protocol.gitbook.io/entangle-protocol/validator-guidelines-technical"},"Docs")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://twitter.com/Entanglefi"},"Twitter")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://discord.gg/entanglefi"},"Discord"))),(0,r.kt)("h2",{id:"minimum-specifications"},"Minimum Specifications"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Spec"),(0,r.kt)("th",{parentName:"tr",align:null},"Size"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CPU"),(0,r.kt)("td",{parentName:"tr",align:null},"2")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RAM"),(0,r.kt)("td",{parentName:"tr",align:null},"8 GB")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SSD"),(0,r.kt)("td",{parentName:"tr",align:null},"200 GB")))),(0,r.kt)("h2",{id:"install-dependencies"},"Install Dependencies"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt -q update\nsudo apt -qy install curl git jq lz4 build-essential\nsudo apt -qy upgrade\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo rm -rf /usr/local/go\ncurl -Ls https://go.dev/dl/go1.21.3.linux-amd64.tar.gz | sudo tar -xzf - -C /usr/local\neval $(echo 'export PATH=$PATH:/usr/local/go/bin' | sudo tee /etc/profile.d/golang.sh)\neval $(echo 'export PATH=$PATH:$HOME/go/bin' | tee -a $HOME/.profile)\n")),(0,r.kt)("h2",{id:"clone-repo"},"Clone Repo"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/Entangle-Protocol/entangle-blockchain\ncd entangle-blockchain\n")),(0,r.kt)("h2",{id:"install"},"Install"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"make install\n")),(0,r.kt)("h2",{id:"add-wallet--recover-and-export-privkey"},"Add wallet / recover and export PrivKey"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Add Wallet")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="New Wallet"',title:'"New','Wallet"':!0},"entangled keys add wallet\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Recover"',title:'"Recover"'},"entangled keys add wallet --recover\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Export PrivKey")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"entangled keys unsafe-export-eth-key wallet\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Import the PrivKey to metamask, then request faucet on discord")),(0,r.kt)("h2",{id:"setup"},"Setup"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Init")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"entangled init YourNAME --chain-id entangle_33133-1\nentangled config chain-id entangle_33133-1\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Copy file")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"cp -f config/genesis.json $HOME/.entangled/config/\ncp -f config/config.toml $HOME/.entangled/config/ \n")),(0,r.kt)("h2",{id:"set-minimum-gas-etc"},"Set minimum gas etc."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'sed -i.bak -e "s/^minimum-gas-prices *=.*/minimum-gas-prices = \\"0.0001aNGL\\"/;" ~/.entangled/config/app.toml\nexternal_address=$(wget -qO- eth0.me) \nsed -i.bak -e "s/^external_address *=.*/external_address = \\"$external_address:26656\\"/" $HOME/.entangled/config/config.toml\npeers="741cb77bbbea6c2ec1a5b343be5f9144f9ca7e08@167.235.14.83:14656,27211a3886000faf8f854112ef31d052e635c5d8@95.217.114.120:25656,7bff324a17426a00731f425ae29fe6ef05eebbac@213.239.217.52:33656"\nsed -i.bak -e "s/^persistent_peers *=.*/persistent_peers = \\"$peers\\"/" $HOME/.entangled/config/config.toml\nseeds=""\nsed -i.bak -e "s/^seeds =.*/seeds = \\"$seeds\\"/" $HOME/.entangled/config/config.toml\nsed -i \'s/max_num_inbound_peers =.*/max_num_inbound_peers = 20/g\' $HOME/.entangled/config/config.toml\nsed -i \'s/max_num_outbound_peers =.*/max_num_outbound_peers = 20/g\' $HOME/.entangled/config/config.toml\n')),(0,r.kt)("h2",{id:"prunning"},"Prunning"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'pruning="custom"\npruning_keep_recent="1000"\npruning_keep_every="0"\npruning_interval="10"\nsed -i -e "s/^pruning *=.*/pruning = \\"$pruning\\"/" $HOME/.entangled/config/app.toml\nsed -i -e "s/^pruning-keep-recent *=.*/pruning-keep-recent = \\"$pruning_keep_recent\\"/" $HOME/.entangled/config/app.toml\nsed -i -e "s/^pruning-keep-every *=.*/pruning-keep-every = \\"$pruning_keep_every\\"/" $HOME/.entangled/config/app.toml\nsed -i -e "s/^pruning-interval *=.*/pruning-interval = \\"$pruning_interval\\"/" $HOME/.entangled/config/app.toml\n')),(0,r.kt)("h2",{id:"indexer"},"Indexer"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'indexer="kv" && \\\nsed -i -e "s/^indexer *=.*/indexer = \\"$indexer\\"/" $HOME/.entangled/config/config.toml\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Create Service")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"sudo tee /etc/systemd/system/entangle.service > /dev/null << EOF\n[Unit]\nDescription=Entangle Validator\nRequires=network-online.target\nAfter=network-online.target\n\n\n[Service]\nType=exec\nUser=$USER\nExecStart=$(which entangled) start\nRestart=on-failure\nRestartSec=10\nLimitNOFILE=65535\n\n[Install]\nWantedBy=multi-user.target\nEOF\n")),(0,r.kt)("h2",{id:"download-snapshot"},"Download Snapshot"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"STAVR Snapshot",mdxType:"TabItem"},(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/obajay/nodes-Guides/tree/main/Projects/Entangle#snapshot-testnet-07gb-archive-snapshot"},"Source"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'cd $HOME\nsudo systemctl stop entangle\nsed -i.bak -E "s|^(enable[[:space:]]+=[[:space:]]+).*$|\\1false|" ~/.entangled/config/config.toml\ncp $HOME/.entangled/data/priv_validator_state.json $HOME/.entangled/priv_validator_state.json.backup\nrm -rf $HOME/.entangled/data\ncurl -o - -L https://entangle.snapshot.stavr.tech/entagle/entagle-snap.tar.lz4 | lz4 -c -d - | tar -x -C $HOME/.entangled --strip-components 2\nmv $HOME/.entangled/priv_validator_state.json.backup $HOME/.entangled/data/priv_validator_state.json\nwget -O $HOME/.entangled/config/addrbook.json "https://raw.githubusercontent.com/obajay/nodes-Guides/main/Projects/Entangle/addrbook.json"\nsudo systemctl restart entangle\n'))),(0,r.kt)(i.Z,{value:"Official Snapshot",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sh get_snapshot.sh\n")))),(0,r.kt)("h2",{id:"run"},"Run"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo systemctl daemon-reload\nsudo systemctl enable entangle.service\nsudo systemctl start entangle.service && sudo journalctl -fu entangle -o cat\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Check logs")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"sudo journalctl -fu entangle -o cat\n")),(0,r.kt)("h2",{id:"stavr-explorer"},"STAVR Explorer"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://explorer.stavr.tech/Entangle-testnet"},"Explorer"))),(0,r.kt)("h2",{id:"register-validator"},"Register validator"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"After Sync")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Don't forgert to change YourNAME to your Name"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'entangled tx staking create-validator \\\n--amount="5000000000000000000aNGL" \\\n--pubkey=$(entangled tendermint show-validator) \\\n--moniker="YourNAME" \\\n--chain-id=entangle_33133-1 \\\n--commission-rate="0.10" \\\n--identity " " \\\n--website " " \\\n--details " " \\\n--commission-max-rate="0.20" \\\n--commission-max-change-rate="0.01" \\\n--min-self-delegation="1" \\\n--gas=500000 \\\n--gas-prices="10aNGL" \\\n--from=wallet\n'))),(0,r.kt)("h3",{id:"apply"},"Apply"),(0,r.kt)("p",null,"Apply ",(0,r.kt)("a",{parentName:"p",href:"https://docs.google.com/forms/d/e/1FAIpQLSdbz39mklMegjmw4G4EBzvBbb-IAEOJrooOUwTesIc6xnDGUA/viewform"},"Here")),(0,r.kt)("admonition",{type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"Delete nodes"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-js"},"sudo systemctl stop entangle\nsudo systemctl disable entangle\nrm /etc/systemd/system/entangle.service\nsudo systemctl daemon-reload\ncd $HOME\nrm -rf entangle-blockchain\nrm -rf .entangled\nrm -rf $(which entangled)\n"))))}g.isMDXComponent=!0}}]);