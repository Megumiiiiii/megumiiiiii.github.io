"use strict";(self.webpackChunkelysian=self.webpackChunkelysian||[]).push([[2773],{4137:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,g=u["".concat(s,".").concat(m)]||u[m]||p[m]||o;return n?a.createElement(g,l(l({ref:t},d),{},{components:n})):a.createElement(g,l({ref:t},d))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},518:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=n(7462),r=(n(7294),n(4137));const o={title:"Update",sidebar_position:2,authors:["megumii"],tags:["Substrate"]},l=void 0,i={unversionedId:"what/tangle/update",id:"what/tangle/update",title:"Update",description:"Download Latest Version",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/what/tangle/update.mdx",sourceDirName:"what/tangle",slug:"/what/tangle/update",permalink:"/ja/docs/what/tangle/update",draft:!1,editUrl:"https://github.com/Megumiiiiii/megumiiiiii.github.io/edit/main/docs/what/tangle/update.mdx",tags:[{label:"Substrate",permalink:"/ja/docs/tags/substrate"}],version:"current",lastUpdatedBy:"Megumiiiiii",lastUpdatedAt:1699088335,formattedLastUpdatedAt:"2023\u5e7411\u67084\u65e5",sidebarPosition:2,frontMatter:{title:"Update",sidebar_position:2,authors:["megumii"],tags:["Substrate"]},sidebar:"tutorialSidebar",previous:{title:"Installation",permalink:"/ja/docs/what/tangle/"},next:{title:"Entangle",permalink:"/ja/docs/what/entangle"}},s={},c=[{value:"Download Latest Version",id:"download-latest-version",level:2},{value:"All releases version can be checked HERE",id:"all-releases-version-can-be-checked-here",level:4},{value:"Update service",id:"update-service",level:2},{value:"Restart",id:"restart",level:2},{value:"Check logs",id:"check-logs",level:3}],d={toc:c},u="wrapper";function p(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"download-latest-version"},"Download Latest Version"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"rm -r /usr/bin/tangle\nwget -O tangle https://github.com/webb-tools/tangle/releases/download/v5.0.0/tangle-standalone-linux-amd64 && chmod +x tangle\nsudo mv tangle /usr/bin/\n")),(0,r.kt)("h4",{id:"all-releases-version-can-be-checked-here"},"All releases version can be checked ",(0,r.kt)("a",{parentName:"h4",href:"https://github.com/webb-tools/tangle/releases"},"HERE")),(0,r.kt)("h2",{id:"update-service"},"Update service"),(0,r.kt)("admonition",{type:"danger"},(0,r.kt)("mdxAdmonitionTitle",{parentName:"admonition"},"edit ",(0,r.kt)("strong",{parentName:"mdxAdmonitionTitle"},"YourName")),(0,r.kt)("p",{parentName:"admonition"},"Change all ",(0,r.kt)("strong",{parentName:"p"},"YourName")," to your name")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="tangle.service"',title:'"tangle.service"'},'sudo tee /etc/systemd/system/tangle.service > /dev/null << EOF\n[Unit]\nDescription=Tangle Validator Node\nAfter=network-online.target\nStartLimitIntervalSec=0\n[Service]\nUser=$USER\nRestart=always\nRestartSec=3\nExecStart=/usr/bin/tangle \\\n  --base-path $HOME/.tangle/data/validator/YourName \\\n  --name YourName \\\n  --chain tangle-testnet \\\n  --node-key-file "/home/YourName/node-key" \\\n  --port 30333 \\\n  --telemetry-url "wss://telemetry.polkadot.io/submit/ 0" \\\n  --validator \\\n  --no-mdns\n[Install]\nWantedBy=multi-user.target\nEOF\n')),(0,r.kt)("h2",{id:"restart"},"Restart"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo systemctl daemon-reload\nsudo systemctl restart tangle\n")),(0,r.kt)("h3",{id:"check-logs"},"Check logs"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo journalctl -u tangle -f --no-hostname -o cat\n")))}p.isMDXComponent=!0}}]);