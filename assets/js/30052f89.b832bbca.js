"use strict";(self.webpackChunkelysian=self.webpackChunkelysian||[]).push([[6863],{4137:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>k});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=p(n),m=i,k=u["".concat(s,".").concat(m)]||u[m]||c[m]||r;return n?a.createElement(k,l(l({ref:t},d),{},{components:n})):a.createElement(k,l({ref:t},d))}));function k(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:i,l[1]=o;for(var p=2;p<r;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},880:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var a=n(7462),i=(n(7294),n(4137));const r={title:"AR",sidebar_position:2,authors:["megumii"],tags:["Arweave"]},l=void 0,o={unversionedId:"what/ar",id:"what/ar",title:"AR",description:"Official Links",source:"@site/docs/what/ar.mdx",sourceDirName:"what",slug:"/what/ar",permalink:"/docs/what/ar",draft:!1,editUrl:"https://github.com/Megumiiiiii/megumiiiiii.github.io/edit/main/docs/what/ar.mdx",tags:[{label:"Arweave",permalink:"/docs/tags/arweave"}],version:"current",lastUpdatedBy:"Megumiiiiii",lastUpdatedAt:1697203503,formattedLastUpdatedAt:"Oct 13, 2023",sidebarPosition:2,frontMatter:{title:"AR",sidebar_position:2,authors:["megumii"],tags:["Arweave"]},sidebar:"tutorialSidebar",previous:{title:"Migrate from Old Contract",permalink:"/docs/what/sarco/update"},next:{title:"CESS",permalink:"/docs/what/cess"}},s={},p=[{value:"Official Links",id:"official-links",level:2},{value:"Minimum Specifications",id:"minimum-specifications",level:2},{value:"Install Docker and More",id:"install-docker-and-more",level:2},{value:"Install Node.js &amp; Yarn",id:"install-nodejs--yarn",level:3},{value:"Node.js",id:"nodejs",level:4},{value:"Yarn",id:"yarn",level:4},{value:"Open Ports",id:"open-ports",level:2},{value:"Clone AR Repo",id:"clone-ar-repo",level:2},{value:"Configure <code>.env</code>",id:"configure-env",level:2},{value:"Configure Domain",id:"configure-domain",level:2},{value:"Configure SSL",id:"configure-ssl",level:2},{value:"Configure Nginx",id:"configure-nginx",level:2},{value:"Check Nginx Configuration",id:"check-nginx-configuration",level:4},{value:"Restart Nginx and Re-check Configuration",id:"restart-nginx-and-re-check-configuration",level:4},{value:"Set Up Node",id:"set-up-node",level:2},{value:"Next, check if it&#39;s running",id:"next-check-if-its-running",level:4},{value:"If There&#39;s a Future Update",id:"if-theres-a-future-update",level:2},{value:"Stop the Node",id:"stop-the-node",level:3},{value:"Update the Repo",id:"update-the-repo",level:3},{value:"Update the Image",id:"update-the-image",level:3},{value:"Re-build",id:"re-build",level:3},{value:"Request Test Tokens on Discord",id:"request-test-tokens-on-discord",level:2},{value:"Clone the Contract Repo",id:"clone-the-contract-repo",level:2},{value:"Open ARConnect Extension Wallet",id:"open-arconnect-extension-wallet",level:2},{value:"Create <code>.env</code> file (Optional)",id:"create-env-file-optional",level:3},{value:"Edit the <code>join-network.ts</code> file",id:"edit-the-join-networkts-file",level:2},{value:"Check in your browser if everything is normal",id:"check-in-your-browser-if-everything-is-normal",level:3},{value:"Finally...",id:"finally",level:2}],d={toc:p},u="wrapper";function c(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"official-links"},"Official Links"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://ar.io/testnet"},"Announcement")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://ar.io/docs/"},"Docs")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://x.com/ar_io_network"},"Twitter")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://discord.gg/Y3DJuFb3qE"},"Discord")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://ar.io"},"Website"))),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"You need a small amount of $AR token as gas fee. You can buy ",(0,i.kt)("strong",{parentName:"p"},"$AR")," on Binance or elsewhere.")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://github.com/Megumiiiiii/ar-node/assets/98658943/de2cfade-8c74-4049-9893-d5533cd438a5",alt:"Screenshot_58"})),(0,i.kt)("h2",{id:"minimum-specifications"},"Minimum Specifications"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Spec"),(0,i.kt)("th",{parentName:"tr",align:null},"Size"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"CPU"),(0,i.kt)("td",{parentName:"tr",align:null},"4")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"RAM"),(0,i.kt)("td",{parentName:"tr",align:null},"4 GB")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"SSD"),(0,i.kt)("td",{parentName:"tr",align:null},"500 GB")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Bandwidth"),(0,i.kt)("td",{parentName:"tr",align:null},"50 Mbps")))),(0,i.kt)("h2",{id:"install-docker-and-more"},"Install Docker and More"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt update; sudo apt upgrade -y\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'sudo apt-get update && sudo apt install jq git certbot nginx sqlite3 build-essential -y && sudo apt install apt-transport-https ca-certificates curl software-properties-common -y && curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add - && sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu focal stable" && sudo apt-get install docker-ce docker-ce-cli containerd.io docker-compose-plugin -y\n')),(0,i.kt)("h3",{id:"install-nodejs--yarn"},"Install Node.js & Yarn"),(0,i.kt)("h4",{id:"nodejs"},"Node.js"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash\nsource ~/.bashrc\nnvm install 16.15.1\nnvm use 16.15.1\n")),(0,i.kt)("h4",{id:"yarn"},"Yarn"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'curl -sSL https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -\necho "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list\nsudo apt-get update -y\nsudo apt-get install yarn -y\n')),(0,i.kt)("h2",{id:"open-ports"},"Open Ports"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"sudo ufw allow ssh; sudo ufw allow 80; sudo ufw allow 443; sudo ufw enable\n")),(0,i.kt)("h2",{id:"clone-ar-repo"},"Clone AR Repo"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/ar-io/ar-io-node.git\ncd ~/ar-io-node\n")),(0,i.kt)("h2",{id:"configure-env"},"Configure ",(0,i.kt)("inlineCode",{parentName:"h2"},".env")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"nano .env\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Fill it with the following, replacing ",(0,i.kt)("inlineCode",{parentName:"li"},"domainmu.zzz")," with your domain, ",(0,i.kt)("inlineCode",{parentName:"li"},"Password123")," with your password, and ",(0,i.kt)("inlineCode",{parentName:"li"},"Address")," with your wallet address from ",(0,i.kt)("a",{parentName:"li",href:"https://chrome.google.com/webstore/detail/arconnect/einnioafmpimabjcddiinlhmijaionap"},"ARConnect"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title=".env"',title:'".env"'},"GRAPHQL_HOST=arweave.net\nGRAPHQL_PORT=443\nSTART_HEIGHT=1000000\nARNS_ROOT_HOST=domainmu.zzz\nADMIN_API_KEY=Password123\nAR_IO_WALLET=Address\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Save it with ",(0,i.kt)("inlineCode",{parentName:"li"},"Ctrl+X"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"Y"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"Enter"))),(0,i.kt)("h2",{id:"configure-domain"},"Configure Domain"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Go to Manage Domain, buy from wherever you want. Make sure the domain is not used for other projects or personal websites.")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Remove all default DNS Records if there are any."),(0,i.kt)("li",{parentName:"ol"},"Set up an A Record pointing to your VPS IP, name it ",(0,i.kt)("inlineCode",{parentName:"li"},"@"),"."),(0,i.kt)("li",{parentName:"ol"},"Set up another A Record pointing to your VPS IP, name it ",(0,i.kt)("inlineCode",{parentName:"li"},"*"),".")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://github.com/Megumiiiiii/ar-node/assets/98658943/7d878692-bd6b-4920-8f60-21e77d9fc15c",alt:"Screenshot_34"})),(0,i.kt)("h2",{id:"configure-ssl"},"Configure SSL"),(0,i.kt)("p",null,"Replace ",(0,i.kt)("inlineCode",{parentName:"p"},"EmailMU@gmail.com")," with your email and all instances of ",(0,i.kt)("inlineCode",{parentName:"p"},"domainmu.zzz")," with your domain."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"sudo certbot certonly --manual --preferred-challenges dns --email EmailMu@gmail.com -d domainmu.zzz -d '*.domainmu.zzz'\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"At this step, you will receive instructions to set up ",(0,i.kt)("inlineCode",{parentName:"strong"},"TXT Records"),". Follow the instructions:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Copy it, don't press Enter/Continue yet."),(0,i.kt)("li",{parentName:"ul"},"Go to your domain manager, add a DNS Record."),(0,i.kt)("li",{parentName:"ul"},"Choose TXT."),(0,i.kt)("li",{parentName:"ul"},"Set name to ",(0,i.kt)("inlineCode",{parentName:"li"},"_acme-challenge"),"."),(0,i.kt)("li",{parentName:"ul"},"Set value to what you copied on your VPS."),(0,i.kt)("li",{parentName:"ul"},"Then check ",(0,i.kt)("a",{parentName:"li",href:"https://dnschecker.org/#TXT/"},"https://dnschecker.org/#TXT/")),(0,i.kt)("li",{parentName:"ul"},"Once everything is checked and the content is correct, go back to your VPS and continue.")),(0,i.kt)("h2",{id:"configure-nginx"},"Configure Nginx"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"rm /etc/nginx/sites-available/default\nnano /etc/nginx/sites-available/default\n")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Fill it with the following, replacing all instances of ",(0,i.kt)("inlineCode",{parentName:"p"},"domainmu.zzz")," with your domain:"),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-yml",metastring:'title="default"',title:'"default"'},"# Force redirects from HTTP to HTTPS\nserver {\n    listen 80;\n    listen [::]:80;\n    server_name domainmu.zzz *.domainmu.zzz;\n\n    location / {\n        return 301 https://$host$request_uri;\n    }\n}\n\n# Forward traffic to your node and provide SSL certificates\nserver {\n    listen 443 ssl;\n    listen [::]:443 ssl;\n    server_name domainmu.zzz *.domainmu.zzz;\n\n    ssl_certificate /etc/letsencrypt/live/domainmu.zzz/fullchain.pem;\n    ssl_certificate_key /etc/letsencrypt/live/domainmu.zzz/privkey.pem;\n\n    location / {\n        proxy_pass http://localhost:3000;\n        proxy_set_header Host $host;\n        proxy_set_header X-Real-IP $remote_addr;\n        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;\n        proxy_http_version 1.1;\n    }\n}\n")),(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"Save it with ",(0,i.kt)("inlineCode",{parentName:"li"},"Ctrl+X"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"Y"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"Enter")))),(0,i.kt)("h4",{id:"check-nginx-configuration"},"Check Nginx Configuration"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"sudo nginx -t\n")),(0,i.kt)("h4",{id:"restart-nginx-and-re-check-configuration"},"Restart Nginx and Re-check Configuration"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"sudo service nginx restart\nsudo nginx -t\n")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://github.com/Megumiiiiii/ar-node/assets/98658943/27f4b34d-8782-4170-a8f8-5e36253a8344",alt:"Screenshot_35"})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"OK!")),(0,i.kt)("h2",{id:"set-up-node"},"Set Up Node"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"cd ~/ar-io-node\nsudo docker compose up -d --build\n")),(0,i.kt)("p",null,"Wait until it's finished..."),(0,i.kt)("h4",{id:"next-check-if-its-running"},"Next, check if it's running"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Open this in your browser, replacing ",(0,i.kt)("inlineCode",{parentName:"li"},"IP.VPS.MU")," with your VPS IP:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="url"',title:'"url"'},"http://IP.VPS.MU:3000/4GnL_uFIAcuiE_w4nPWvg_Z2eHkLnnnNDufPkNwab5M\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"If you see something like this, CONGRATULATIONS!"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("img",{parentName:"li",src:"https://arweave.net/4GnL_uFIAcuiE_w4nPWvg_Z2eHkLnnnNDufPkNwab5M",alt:"4GnL_uFIAcuiE_w4nPWvg_Z2eHkLnnnNDufPkNwab5M"}))),(0,i.kt)("h2",{id:"if-theres-a-future-update"},"If There's a Future Update"),(0,i.kt)("h3",{id:"stop-the-node"},"Stop the Node"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"cd ~/ar-io-node\ndocker compose down\n")),(0,i.kt)("h3",{id:"update-the-repo"},"Update the Repo"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git pull\n")),(0,i.kt)("h3",{id:"update-the-image"},"Update the Image"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"sudo docker compose pull\n")),(0,i.kt)("h3",{id:"re-build"},"Re-build"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"sudo docker compose up -d --build\n")),(0,i.kt)("h2",{id:"request-test-tokens-on-discord"},"Request Test Tokens on Discord"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Join ",(0,i.kt)("a",{parentName:"li",href:"https://discord.gg/Y3DJuFb3qE"},"Discord")),(0,i.kt)("li",{parentName:"ul"},"Go to the ",(0,i.kt)("inlineCode",{parentName:"li"},"#testnet")," channel."),(0,i.kt)("li",{parentName:"ul"},"Use the ",(0,i.kt)("inlineCode",{parentName:"li"},"/apply")," command."),(0,i.kt)("li",{parentName:"ul"},"Fill out the survey and wait for delivery.")),(0,i.kt)("hr",null),(0,i.kt)("hr",null),(0,i.kt)("h1",{id:"after-receiving-test-tokens"},"After Receiving Test Tokens"),(0,i.kt)("h2",{id:"clone-the-contract-repo"},"Clone the Contract Repo"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"cd $HOME\ngit clone https://github.com/ar-io/testnet-contract.git\ncd ~/testnet-contract\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"yarn install\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"yarn build\n")),(0,i.kt)("h2",{id:"open-arconnect-extension-wallet"},"Open ",(0,i.kt)("a",{parentName:"h2",href:"https://chrome.google.com/webstore/detail/arconnect/einnioafmpimabjcddiinlhmijaionap"},"ARConnect Extension Wallet")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Export and name it ",(0,i.kt)("inlineCode",{parentName:"p"},"key.json"),"\n",(0,i.kt)("img",{parentName:"p",src:"https://github.com/Megumiiiiii/ar-node/assets/98658943/05eaa252-765e-46be-98c5-56adf22a7c63",alt:"Screenshot_38"}))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Move the ",(0,i.kt)("inlineCode",{parentName:"p"},"key.json")," file to your VPS and place it in the ",(0,i.kt)("inlineCode",{parentName:"p"},"/testnet-contract")," directory.\n",(0,i.kt)("img",{parentName:"p",src:"https://github.com/Megumiiiiii/ar-node/assets/98658943/ce246183-49b6-400c-91c0-71b5780d9fcc",alt:"Screenshot_39"})))),(0,i.kt)("h3",{id:"create-env-file-optional"},"Create ",(0,i.kt)("inlineCode",{parentName:"h3"},".env")," file (Optional)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"nano .env\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"fill with this\n",(0,i.kt)("strong",{parentName:"li"},"JWK")," is the content of your ",(0,i.kt)("inlineCode",{parentName:"li"},"key.json"),", but edit that to 1 line only")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh",metastring:'title=".env"',title:'".env"'},"JWK=\nARNS_CONTRACT_TX_ID=bLAgYxAdX2Ry-nt6aH2ixgvJXbpsEYm28NgJgyqfs-U\n")),(0,i.kt)("h2",{id:"edit-the-join-networkts-file"},"Edit the ",(0,i.kt)("inlineCode",{parentName:"h2"},"join-network.ts")," file"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"nano tools/join-network.ts\n")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Set ",(0,i.kt)("inlineCode",{parentName:"li"},"qty")," to ",(0,i.kt)("inlineCode",{parentName:"li"},"10_000")),(0,i.kt)("li",{parentName:"ol"},"Set ",(0,i.kt)("inlineCode",{parentName:"li"},"label")," to your nickname"),(0,i.kt)("li",{parentName:"ol"},"Set ",(0,i.kt)("inlineCode",{parentName:"li"},"fqdn")," to ",(0,i.kt)("inlineCode",{parentName:"li"},"domainmu.zzz")),(0,i.kt)("li",{parentName:"ol"},"Set ",(0,i.kt)("inlineCode",{parentName:"li"},"note"),' to your notes, like "Notes, bebasssssssss"')),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://github.com/Megumiiiiii/ar-node/assets/98658943/45bf0c34-cd7e-48e9-82c4-67c24d2beeb0",alt:"code"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Save it with ",(0,i.kt)("inlineCode",{parentName:"li"},"Ctrl+X"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"Y"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"Enter"))),(0,i.kt)("h3",{id:"check-in-your-browser-if-everything-is-normal"},"Check in your browser if everything is normal"),(0,i.kt)("p",null,"Uptime"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="url"',title:'"url"'},"https://domainmu.zzz/ar-io/healthcheck\n")),(0,i.kt)("p",null,"ArDrive"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="url"',title:'"url"'},"https://ardrive.domainmu.zzz\n")),(0,i.kt)("p",null,"Just check"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="url"',title:'"url"'},"https://domainmu.zzz/UymRNCv22DbIB1KpAtC0qy5oeC1TdGDgoEKWs7J8Y_Q\n")),(0,i.kt)("h2",{id:"finally"},"Finally..."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Run this command")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"yarn ts-node tools/join-network.ts\n")),(0,i.kt)("hr",null),(0,i.kt)("admonition",{type:"danger"},(0,i.kt)("p",{parentName:"admonition"},"\u26a0\ufe0f If you want to delete \u26a0\ufe0f"),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"cd ~/ar-io-node\ndocker compose down -v\ndocker rmi ghcr.io/ar-io/ar-io-core ghcr.io/ar-io/ar-io-envoy\n"))))}c.isMDXComponent=!0}}]);