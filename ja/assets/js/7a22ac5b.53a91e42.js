"use strict";(self.webpackChunkelysian=self.webpackChunkelysian||[]).push([[4894],{4137:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>b});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function u(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?u(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):u(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},u=Object.keys(e);for(r=0;r<u.length;r++)a=u[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(r=0;r<u.length;r++)a=u[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=r.createContext({}),s=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=s(e.components);return r.createElement(o.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,u=e.originalType,o=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=s(a),m=n,b=d["".concat(o,".").concat(m)]||d[m]||p[m]||u;return a?r.createElement(b,l(l({ref:t},c),{},{components:a})):r.createElement(b,l({ref:t},c))}));function b(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var u=a.length,l=new Array(u);l[0]=m;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[d]="string"==typeof e?e:n,l[1]=i;for(var s=2;s<u;s++)l[s]=a[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},425:(e,t,a)=>{a.d(t,{Z:()=>l});var r=a(7294),n=a(6010);const u={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:a,className:l}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(u.tabItem,l),hidden:a},t)}},3992:(e,t,a)=>{a.d(t,{Z:()=>q});var r=a(7462),n=a(7294),u=a(6010),l=a(2957),i=a(6550),o=a(5238),s=a(3609),c=a(2560);function d(e){return function(e){return n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:r,default:n}}=e;return{value:t,label:a,attributes:r,default:n}}))}function p(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??d(a);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:a}=e;const r=(0,i.k6)(),u=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,o._X)(u),(0,n.useCallback)((e=>{if(!u)return;const t=new URLSearchParams(r.location.search);t.set(u,e),r.replace({...r.location,search:t.toString()})}),[u,r])]}function f(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,u=p(e),[l,i]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:u}))),[o,s]=b({queryString:a,groupId:r}),[d,f]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,u]=(0,c.Nk)(a);return[r,(0,n.useCallback)((e=>{a&&u.set(e)}),[a,u])]}({groupId:r}),h=(()=>{const e=o??d;return m({value:e,tabValues:u})?e:null})();(0,n.useLayoutEffect)((()=>{h&&i(h)}),[h]);return{selectedValue:l,selectValue:(0,n.useCallback)((e=>{if(!m({value:e,tabValues:u}))throw new Error(`Can't select invalid tab value=${e}`);i(e),s(e),f(e)}),[s,f,u]),tabValues:u}}var h=a(1048);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function k(e){let{className:t,block:a,selectedValue:i,selectValue:o,tabValues:s}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,l.o5)(),p=e=>{const t=e.currentTarget,a=c.indexOf(t),r=s[a].value;r!==i&&(d(t),o(r))},m=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;t=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;t=c[a]??c[c.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":a},t)},s.map((e=>{let{value:t,label:a,attributes:l}=e;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:p},l,{className:(0,u.Z)("tabs__item",g.tabItem,l?.className,{"tabs__item--active":i===t})}),a??t)})))}function v(e){let{lazy:t,children:a,selectedValue:r}=e;const u=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=u.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},u.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function y(e){const t=f(e);return n.createElement("div",{className:(0,u.Z)("tabs-container",g.tabList)},n.createElement(k,(0,r.Z)({},e,t)),n.createElement(v,(0,r.Z)({},e,t)))}function q(e){const t=(0,h.Z)();return n.createElement(y,(0,r.Z)({key:String(t)},e))}},2260:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>b,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var r=a(7462),n=(a(7294),a(4137)),u=a(3992),l=a(425);const i={title:"Quad Proc",sidebar_position:4,authors:["megumii"],tags:["Subsquid"]},o=void 0,s={unversionedId:"squid/quad",id:"squid/quad",title:"Quad Proc",description:"Buat Folder & init",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/squid/quad.mdx",sourceDirName:"squid",slug:"/squid/quad",permalink:"/ja/docs/squid/quad",draft:!1,editUrl:"https://github.com/Megumiiiiii/megumiiiiii.github.io/edit/main/docs/squid/quad.mdx",tags:[{label:"Subsquid",permalink:"/ja/docs/tags/subsquid"}],version:"current",lastUpdatedBy:"Megumiiiiii",lastUpdatedAt:1696759607,formattedLastUpdatedAt:"2023\u5e7410\u67088\u65e5",sidebarPosition:4,frontMatter:{title:"Quad Proc",sidebar_position:4,authors:["megumii"],tags:["Subsquid"]},sidebar:"tutorialSidebar",previous:{title:"Triple Proc",permalink:"/ja/docs/squid/triple"},next:{title:"Snapshot",permalink:"/ja/docs/squid/snapshot"}},c={},d=[{value:"Buat Folder &amp; init",id:"buat-folder--init",level:3},{value:"Download key",id:"download-key",level:2},{value:"Start Docker",id:"start-docker",level:2},{value:"build",id:"build",level:2},{value:"Run",id:"run",level:3},{value:"Setelah selesai",id:"setelah-selesai",level:3}],p={toc:d},m="wrapper";function b(e){let{components:t,...i}=e;return(0,n.kt)(m,(0,r.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h3",{id:"buat-folder--init"},"Buat Folder & init"),(0,n.kt)(u.Z,{mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"VPS",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"cd ~/proc\nsqd init quad-proc -t https://github.com/subsquid-quests/quad-chain-squid\ncd quad-proc\n"))),(0,n.kt)(l.Z,{value:"CodeSpace",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"cd ..\nsqd init quad-proc -t https://github.com/subsquid-quests/quad-chain-squid\ncd quad-proc\n")))),(0,n.kt)("h2",{id:"download-key"},"Download key"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://app.subsquid.io/quests"},"https://app.subsquid.io/quests")),(0,n.kt)("li",{parentName:"ul"},"Pindah ke VPS, ke folder ",(0,n.kt)("inlineCode",{parentName:"li"},"/proc/quad-proc/query-gateway/keys")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("img",{alt:"SS",src:a(1636).Z,width:"1484",height:"724"}))),(0,n.kt)("h2",{id:"start-docker"},"Start Docker"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"docker compose up -d\n")),(0,n.kt)("h2",{id:"build"},"build"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"npm ci\nsqd build\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"sqd migration:apply\n")),(0,n.kt)("h3",{id:"run"},"Run"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"sqd run .\n")),(0,n.kt)("p",null,"Tunggu sampai di web nya jadi 100%"),(0,n.kt)("h3",{id:"setelah-selesai"},"Setelah selesai"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Stop proc menggunakan CTRL+C")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Stop Docker"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"docker compose down -v\n")))),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"Hapus ",(0,n.kt)("strong",{parentName:"p"},"SEMUA")," jika sudah mendapat point ")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"cd\nrm -r proc\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"docker rmi subsquid/query-gateway:0.1.5\n")),(0,n.kt)("hr",null))}b.isMDXComponent=!0},1636:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/squidproc-4127c2e9618d3d1e74829ef99a11da2b.png"}}]);