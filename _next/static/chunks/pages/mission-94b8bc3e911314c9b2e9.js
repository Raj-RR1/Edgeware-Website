_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[12],{"3TyU":function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n("nKUr"),a=(n("q1tI"),n("TSYQ")),i=n.n(a),o=n("T3HY"),c=n.n(o),s=function(e){var t=e.id,n=e.children,a=e.background,o=void 0===a?"none":a,s=e.width,l=void 0===s?"normal":s,d=e.gap,m=void 0===d?"standard":d,h=i()(c.a.section,c.a["sectionGap-".concat(m)],"waves"===o&&c.a.backgroundWaves,"waves-middle"===o&&c.a.backgroundMiddle,"waves-top"===o&&c.a.backgroundTop),p=i()("narrow"===l&&c.a.containerNarrow,"normal"===l&&"container","wide"===l&&c.a.containerWide,"fluid"===l&&c.a.containerFluid);return Object(r.jsx)("section",{id:t,className:h,children:Object(r.jsx)("div",{className:p,children:n})})}},"6FPD":function(e,t,n){e.exports={h1:"typography_h1__Ql4YW",h2:"typography_h2__2iRlG",h3:"typography_h3__3uupd",p:"typography_p__2Krs5",secondary:"typography_secondary__13AQd",lead:"typography_lead__1kfSD",large:"typography_large__2xH2U",small:"typography_small__2ehWd",inverted:"typography_inverted__5pmmv"}},DKdJ:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n("nKUr"),a=(n("q1tI"),n("TSYQ")),i=n.n(a),o=n("bVlk"),c=n.n(o),s=function(e){var t=e.children,n=e.bottomGap;return Object(r.jsx)("div",{className:i()(c.a.wrapper,!1===n&&c.a.wrapperNoGap),children:Object(r.jsx)("div",{className:c.a.container,children:t})})}},"Q+Rx":function(e,t,n){e.exports={wrapper:"newsletter_wrapper__1Qw-j",content:"newsletter_content__1taqj"}},Qetd:function(e,t,n){"use strict";var r=Object.assign.bind(Object);e.exports=r,e.exports.default=e.exports},T3HY:function(e,t,n){e.exports={section:"section_section__1ShBF","sectionGap-none":"section_sectionGap-none__plV2B","sectionGap-standard":"section_sectionGap-standard__wugNC",containerNarrow:"section_containerNarrow__2egjC",containerFluid:"section_containerFluid__Sfyep",backgroundWaves:"section_backgroundWaves__1X3fr",backgroundTop:"section_backgroundTop__1cCBc",backgroundMiddle:"section_backgroundMiddle__hIOLL"}},TSYQ:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var i=typeof r;if("string"===i||"number"===i)e.push(r);else if(Array.isArray(r)&&r.length){var o=a.apply(null,r);o&&e.push(o)}else if("object"===i)for(var c in r)n.call(r,c)&&r[c]&&e.push(c)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},VpDq:function(e,t,n){e.exports={form:"newsletter-form_form__1OCbk",fieldset:"newsletter-form_fieldset__3sU07",formRow:"newsletter-form_formRow__3OfnN",input:"newsletter-form_input__276FE",button:"newsletter-form_button__19qeA",honeypot:"newsletter-form_honeypot__3PgfY"}},WQq5:function(e,t,n){"use strict";n.d(t,"a",(function(){return h})),n.d(t,"b",(function(){return p})),n.d(t,"c",(function(){return u}));var r=n("rePB"),a=n("nKUr");function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}n("q1tI");var o=n("TSYQ"),c=n.n(o),s=n("6FPD"),l=n.n(s);function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var h=function(e){var t=e.children,n=e.className,r=e.size,o=void 0===r?"1":r,s=e.inverted,d=void 0!==s&&s,h=i(e,["children","className","size","inverted"]),p=c()("1"===o&&l.a.h1,"2"===o&&l.a.h2,d&&l.a.inverted,n);return Object(a.jsx)("h1",m(m({},h),{},{className:c()(p,n),children:t}))},p=function(e){var t=e.children,n=e.className,r=e.size,o=void 0===r?"2":r,s=e.inverted,d=void 0!==s&&s,h=i(e,["children","className","size","inverted"]),p=c()("1"===o&&l.a.h1,"2"===o&&l.a.h2,d&&l.a.inverted,n);return Object(a.jsx)("h2",m(m({},h),{},{className:p,children:t}))},u=function(e){var t=e.children,n=e.secondary,r=e.className,o=e.style,s=void 0===o?"regular":o,d=e.inverted,h=void 0!==d&&d,p=i(e,["children","secondary","className","style","inverted"]),u=c()(l.a.p,n&&l.a.secondary,h&&l.a.inverted,l.a[s],r);return Object(a.jsx)("p",m(m({},p),{},{className:u,children:t}))}},YSyL:function(e,t,n){"use strict";n.r(t),n.d(t,"__N_SSG",(function(){return O})),n.d(t,"default",(function(){return x}));var r=n("nKUr"),a=n("q1tI"),i=n.n(a),o=n("WQq5"),c=n("DKdJ"),s=n("3TyU"),l=n("TSYQ"),d=n.n(l),m=n("wh5w"),h=n.n(m);function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var u=i.a.createElement("g",{fill:"none",fillRule:"evenodd"},i.a.createElement("circle",{fill:"#1E1E1E",cx:40,cy:40,r:40}),i.a.createElement("ellipse",{stroke:"#383838",strokeWidth:2,cx:40,cy:40,rx:30,ry:31}),i.a.createElement("g",{transform:"translate(24 24)"},i.a.createElement("circle",{stroke:"#292929",strokeWidth:4,fill:"#00E4B3",cx:16,cy:16,r:18}),i.a.createElement("path",{d:"M5.333 5.333h21.334v21.334H5.333z"}),i.a.createElement("path",{fill:"#383838",fillRule:"nonzero",d:"M14.222 18.82l8.17-8.172 1.259 1.257-9.429 9.428-5.657-5.657 1.257-1.256z"}))),b=function(e){return i.a.createElement("svg",p({width:80,height:80},e),u)};function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var j=i.a.createElement("g",{fill:"none",fillRule:"evenodd"},i.a.createElement("circle",{fill:"#1E1E1E",cx:40,cy:40,r:40}),i.a.createElement("ellipse",{stroke:"#383838",strokeWidth:2,cx:40,cy:40,rx:30,ry:31}),i.a.createElement("circle",{cx:16,cy:16,r:18,transform:"translate(24 24)",fill:"#D42B69",stroke:"#292929",strokeWidth:4}),i.a.createElement("path",{d:"M28 28.333h24v24H28z"}),i.a.createElement("path",{fill:"#292929",d:"M40 41.505l4.95-4.95 1.414 1.414L40 44.333l-6.364-6.364 1.414-1.414z"})),_=function(e){return i.a.createElement("svg",f({width:80,height:80},e),j)},g=function(e){var t=e.name,n=e.date,a=e.children,i=e.isDone;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("span",{className:h.a.timelineItemSymbol,children:[i&&Object(r.jsx)("span",{className:h.a.icon,children:Object(r.jsx)(b,{})}),!i&&Object(r.jsx)("span",{className:h.a.icon,children:Object(r.jsx)(_,{})})]}),Object(r.jsxs)("div",{className:h.a.item,children:[Object(r.jsx)("span",{className:h.a.itemDate,children:n}),Object(r.jsx)("h3",{className:h.a.itemName,children:t}),Object(r.jsx)("div",{className:h.a.itemContent,children:Object(r.jsx)("p",{children:a})})]})]})},w=function(e){var t=e.children;return Object(r.jsx)("span",{className:h.a.timelineSeparator,children:t})};w.displayName="TimelineSeparator";var y=function(e){e.children,e.upcoming;return Object(r.jsx)("div",{className:h.a.container,children:Object(r.jsxs)("ol",{className:h.a.timeline,children:[Object(r.jsx)("li",{className:d()(h.a.timelineItem,h.a.timelineItemRight),children:Object(r.jsx)(g,{name:"Edgeware Whitepaper Published",date:"September 2019",isDone:!0,children:"Commonwealth Labs, after a conversation with Gavin Wood of Parity Technologies, decides to author a whitepaper outlining the Edgeware concept and unique decentralized launch process, the Lockdrop, with a vision to be the first Substrate-based smart contract platform and a core feature of the upcoming Polkadot ecosystem."})}),Object(r.jsx)("li",{className:d()(h.a.timelineItem,h.a.timelineItemLeft),children:Object(r.jsx)(g,{name:"Lockdrop",date:"June 2019",isDone:!0,children:"Commonwealth Labs deploys the master lockdrop contract to the Ethereum network, allowing ETH holders to time lock their ETH in instances of locking contracts, serving as their ticket to the EDG world. The process scores longer and larger locks as more committed, and supports awarding EDG proportional to that greater commitment. The lockdrop is a wild success with curious users locking up more than 200M USD in value."})}),Object(r.jsx)("li",{className:d()(h.a.timelineItem,h.a.timelineItemRight),children:Object(r.jsx)(g,{name:"Decentralized Network Launch",date:"February 2020",isDone:!0,children:"Using the lockdrop proofs, the network launches in February of 2020 and EDG tokens become one of the most widely and fairly distributed in crypto history, with names like Aragon, Binance and more signaling participation on behalf of their users and organization."})}),Object(r.jsx)("li",{className:d()(h.a.timelineItem,h.a.timelineItemLeft),children:Object(r.jsx)(g,{name:"Ink! Contracts Live on Edgeware",date:"March 2020",isDone:!0,children:"The cutting edge wasm contract module comes alive in March, allowing users to write contracts in Rust that take advantage of cheaper deployment and more efficient contract storage within Edgeware."})}),Object(r.jsx)("li",{className:d()(h.a.timelineItem,h.a.timelineItemRight),children:Object(r.jsx)(g,{name:"EVM Contracts Launch on Edgeware",date:"March 2021",isDone:!0,children:"The launch of Parity Frontier in Edgeware brings the ability to launch virtually unmodified smart contracts from the Ethereum network on Edgeware, opening up the Polkadot ecosystem for hundreds of popular dapps and thousands of developers."})}),Object(r.jsx)("li",{className:d()(h.a.timelineItemSeparator),children:Object(r.jsx)(w,{children:"Coming soon"})}),Object(r.jsx)("li",{className:d()(h.a.timelineItem,h.a.timelineItemLeft),children:Object(r.jsx)(g,{name:"The Edgeware Canarynetwork launches",date:"TBD",children:"Canarynetworks, the new and value bearing testnet concept pioneered by Kusama, help Edgeware test and incentivize development on the mainnet. Edgeware\u2019s canarynetwork is proposed to bond to the Kusama relaychain when KSM opens slot auctions."})}),Object(r.jsx)("li",{className:d()(h.a.timelineItem,h.a.timelineItemRight),children:Object(r.jsx)(g,{name:"Edgeware bonds for a Polkadot Parachain Slot",date:"TBD",children:"Edgeware\u2019s core proposal of a cutting edge smart contract platform in Polkadot will be realized when the bidding is complete and DOT holders support Edgeware in their auction participation. Interoperability with other parachains like Acala, Paralink, Ocean and more will be available and the daily costs of securing the network in nPoS will decrease through the shared security benefits of Polkadot, allowing inflation to drop."})}),Object(r.jsx)("li",{className:d()(h.a.timelineItem,h.a.timelineItemLeft),children:Object(r.jsx)(g,{name:"Edgeware Bridges to Ethereum",date:"TBD",children:"Demand to bridge assets in Ethereum or wrap EDG on ETH open up a world of use-cases for Edgeware, teams like Chainsafe and other technologies are being developed to create the first bridge to crypto\u2019s original smart contract platform, while giving EDG users access to the dapp ecosystem on ETH."})})]})})},v=n("wniQ"),O=!0;function x(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)(c.a,{children:[Object(r.jsx)(o.a,{size:"1",children:"Mission"}),Object(r.jsx)(o.c,{children:"Edgeware serves as a platform for the developers, users and members of it\u2019s community to build and fund their concepts effectively, and to welcome the next generation of crypto ideas and products. While the community\u2019s interests are constantly changing, our core commitment to community ownership is the heart of Edgeware."})]}),Object(r.jsx)(s.a,{id:"mission",width:"normal",children:Object(r.jsx)(y,{})}),Object(r.jsx)(s.a,{id:"newsletter",width:"normal",gap:"none",children:Object(r.jsx)(v.a,{})})]})}},bVlk:function(e,t,n){e.exports={wrapper:"intro_wrapper__2omnV",wrapperNoGap:"intro_wrapperNoGap__19Elz",container:"intro_container__30uAt"}},rePB:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return r}))},tsKj:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/mission",function(){return n("YSyL")}])},wh5w:function(e,t,n){e.exports={container:"timeline_container__tXV_d",timeline:"timeline_timeline__3IAtb",timelineItem:"timeline_timelineItem__Bx6c5",timelineItemSeparator:"timeline_timelineItemSeparator__1QxbB",timelineItemSymbol:"timeline_timelineItemSymbol__2O7HW",timelineItemRight:"timeline_timelineItemRight__2EIpK",iconCheckmark:"timeline_iconCheckmark__3X3cH",iconTodo:"timeline_iconTodo__LdZoJ",icon:"timeline_icon__UP7oh",item:"timeline_item__3xOFU",itemDate:"timeline_itemDate__1M1LV",itemName:"timeline_itemName__2_Flt",itemContent:"timeline_itemContent__aFs4v",timelineSeparator:"timeline_timelineSeparator__3nqBm"}},wniQ:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var r=n("nKUr"),a=(n("q1tI"),n("Q+Rx")),i=n.n(a),o=n("6FPD"),c=n.n(o),s=n("VpDq"),l=n.n(s),d=function(){return Object(r.jsx)("form",{className:l.a.form,action:"https://edgewa.us19.list-manage.com/subscribe/post?u=04521a838ac5cb3bb4012c002&id=77879892a3",method:"post",name:"mc-embedded-subscribe-form",target:"_blank",children:Object(r.jsx)("fieldset",{className:l.a.fieldset,children:Object(r.jsxs)("div",{className:l.a.formRow,children:[Object(r.jsx)("label",{htmlFor:"nl-email","aria-label":"Your email address",children:Object(r.jsx)("input",{id:"nl-email",className:l.a.input,type:"email",name:"EMAIL",placeholder:"email@domain.com",required:!0})}),Object(r.jsx)("div",{className:l.a.honeypot,"aria-hidden":"true",children:Object(r.jsx)("input",{type:"text",name:"b_04521a838ac5cb3bb4012c002_77879892a3",tabIndex:-1,defaultValue:""})}),Object(r.jsx)("button",{type:"submit",className:l.a.button,children:"Sign up"})]})})})},m=function(){return Object(r.jsx)("div",{className:i.a.wrapper,children:Object(r.jsxs)("div",{className:i.a.content,children:[Object(r.jsx)("h3",{className:c.a.h1,children:"Stay tuned"}),Object(r.jsxs)("p",{className:c.a.p,children:["Subscribe to our newsletter and never miss updates, announcements and opportunities."," "]}),Object(r.jsx)(d,{})]})})}}},[["tsKj",0,1]]]);