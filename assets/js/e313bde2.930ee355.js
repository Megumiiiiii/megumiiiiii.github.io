"use strict";(self.webpackChunkelysian=self.webpackChunkelysian||[]).push([[5467],{4137:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>g});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=c(a),m=i,g=u["".concat(s,".").concat(m)]||u[m]||p[m]||r;return a?n.createElement(g,l(l({ref:t},d),{},{components:a})):n.createElement(g,l({ref:t},d))}));function g(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,l=new Array(r);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:i,l[1]=o;for(var c=2;c<r;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},6338:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var n=a(7462),i=(a(7294),a(4137));const r={title:"Avail Light",sidebar_position:8,tags:["Substrate","Non-Incentive"]},l=void 0,o={unversionedId:"what/avail-light",id:"what/avail-light",title:"Avail Light",description:"Install Dependencies",source:"@site/docs/what/avail-light.md",sourceDirName:"what",slug:"/what/avail-light",permalink:"/docs/what/avail-light",draft:!1,editUrl:"https://github.com/Megumiiiiii/megumiiiiii.github.io/edit/main/docs/what/avail-light.md",tags:[{label:"Substrate",permalink:"/docs/tags/substrate"},{label:"Non-Incentive",permalink:"/docs/tags/non-incentive"}],version:"current",lastUpdatedBy:"Megumiiiiii",lastUpdatedAt:1701856841,formattedLastUpdatedAt:"Dec 6, 2023",sidebarPosition:8,frontMatter:{title:"Avail Light",sidebar_position:8,tags:["Substrate","Non-Incentive"]},sidebar:"tutorialSidebar",previous:{title:"Frame",permalink:"/docs/what/frame"},next:{title:"Subsquid",permalink:"/docs/category/subsquid"}},s={},c=[{value:"Install Dependencies",id:"install-dependencies",level:2},{value:"Create Directory",id:"create-directory",level:2},{value:"Download Binary",id:"download-binary",level:2},{value:"Create Service",id:"create-service",level:2},{value:"Enable + Start Service",id:"enable--start-service",level:3},{value:"Useful Command",id:"useful-command",level:2},{value:"Check logs",id:"check-logs",level:4}],d={toc:c},u="wrapper";function p(e){let{components:t,...a}=e;return(0,i.kt)(u,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{title:"Use Ubuntu 22.04",type:"info"}),(0,i.kt)("h2",{id:"install-dependencies"},"Install Dependencies"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt update; sudo apt install make clang pkg-config libssl-dev build-essential -y\n")),(0,i.kt)("h2",{id:"create-directory"},"Create Directory"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"cd $HOME\nmkdir avail-light\ncd avail-light\n")),(0,i.kt)("h2",{id:"download-binary"},"Download Binary"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"wget -O avail-light.tar.gz https://github.com/availproject/avail-light/releases/download/v1.7.4/avail-light-linux-amd64.tar.gz\ntar -xf avail-light.tar.gz; cp avail-light-linux-amd64 avail-light; chmod +x avail-light; rm avail-light-linux-amd64.tar.gz\n")),(0,i.kt)("h2",{id:"create-service"},"Create Service"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="avail-light.service"',title:'"avail-light.service"'},"sudo tee /etc/systemd/system/avail-light.service > /dev/null << EOF\n[Unit] \nDescription=Avail Light Client\nAfter=network.target\nStartLimitIntervalSec=0\n[Service] \nUser=$USER\nExecStart=$HOME/avail-light/avail-light --network goldberg --app-id 27\nRestart=always \nRestartSec=120\n[Install] \nWantedBy=multi-user.target\nEOF\n")),(0,i.kt)("h3",{id:"enable--start-service"},"Enable + Start Service"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"sudo systemctl daemon-reload\nsudo systemctl enable avail-light\nsudo systemctl restart avail-light && sudo journalctl -u avail-light -f --no-hostname -o cat\n")),(0,i.kt)("h2",{id:"useful-command"},"Useful Command"),(0,i.kt)("h4",{id:"check-logs"},"Check logs"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"sudo journalctl -u avail-light -f --no-hostname -o cat\n")),(0,i.kt)("admonition",{title:"Don't Forget to backup ",type:"info"},(0,i.kt)("h4",{parentName:"admonition",id:"check-mnemonic"},"Check Mnemonic"),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre"},"cat $HOME/avail-light/identity.toml\n"))),(0,i.kt)("admonition",{type:"danger"},(0,i.kt)("p",{parentName:"admonition"},"\u26a0\ufe0f If you want to delete \u26a0\ufe0f"),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"sudo systemctl stop avail-light\nsudo systemctl disable avail-light\nrm /etc/systemd/system/avail-light.service\ncd $HOME\nrm -r avail-light\n"))))}p.isMDXComponent=!0}}]);