_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[11],{"3TyU":function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a=n("nKUr"),r=(n("q1tI"),n("TSYQ")),i=n.n(r),o=n("T3HY"),c=n.n(o),s=function(e){var t=e.id,n=e.children,r=e.background,o=void 0===r?"none":r,s=e.width,l=void 0===s?"normal":s,d=e.gap,m=void 0===d?"standard":d,h=i()(c.a.section,c.a["sectionGap-".concat(m)],"waves"===o&&c.a.backgroundWaves,"waves-middle"===o&&c.a.backgroundMiddle,"waves-top"===o&&c.a.backgroundTop),u=i()("narrow"===l&&c.a.containerNarrow,"normal"===l&&"container","wide"===l&&c.a.containerWide,"fluid"===l&&c.a.containerFluid);return Object(a.jsx)("section",{id:t,className:h,children:Object(a.jsx)("div",{className:u,children:n})})}},"6FPD":function(e,t,n){e.exports={h1:"typography_h1__Ql4YW",h2:"typography_h2__2iRlG",h3:"typography_h3__3uupd",p:"typography_p__2Krs5",secondary:"typography_secondary__13AQd",lead:"typography_lead__1kfSD",large:"typography_large__2xH2U",small:"typography_small__2ehWd",inverted:"typography_inverted__5pmmv"}},DKdJ:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a=n("nKUr"),r=(n("q1tI"),n("TSYQ")),i=n.n(r),o=n("bVlk"),c=n.n(o),s=function(e){var t=e.children,n=e.bottomGap;return Object(a.jsx)("div",{className:i()(c.a.wrapper,!1===n&&c.a.wrapperNoGap),children:Object(a.jsx)("div",{className:c.a.container,children:t})})}},"Q+Rx":function(e,t,n){e.exports={wrapper:"newsletter_wrapper__1Qw-j",content:"newsletter_content__1taqj"}},Qetd:function(e,t,n){"use strict";var a=Object.assign.bind(Object);e.exports=a,e.exports.default=e.exports},T3HY:function(e,t,n){e.exports={section:"section_section__1ShBF","sectionGap-none":"section_sectionGap-none__plV2B","sectionGap-standard":"section_sectionGap-standard__wugNC",containerNarrow:"section_containerNarrow__2egjC",containerFluid:"section_containerFluid__Sfyep",backgroundWaves:"section_backgroundWaves__1X3fr",backgroundTop:"section_backgroundTop__1cCBc",backgroundMiddle:"section_backgroundMiddle__hIOLL"}},TSYQ:function(e,t,n){var a;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var i=typeof a;if("string"===i||"number"===i)e.push(a);else if(Array.isArray(a)){if(a.length){var o=r.apply(null,a);o&&e.push(o)}}else if("object"===i)if(a.toString===Object.prototype.toString)for(var c in a)n.call(a,c)&&a[c]&&e.push(c);else e.push(a.toString())}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(a=function(){return r}.apply(t,[]))||(e.exports=a)}()},VpDq:function(e,t,n){e.exports={form:"newsletter-form_form__1OCbk",fieldset:"newsletter-form_fieldset__3sU07",formRow:"newsletter-form_formRow__3OfnN",input:"newsletter-form_input__276FE",button:"newsletter-form_button__19qeA",honeypot:"newsletter-form_honeypot__3PgfY"}},WQq5:function(e,t,n){"use strict";n.d(t,"a",(function(){return h})),n.d(t,"b",(function(){return u})),n.d(t,"c",(function(){return p}));var a=n("rePB"),r=n("nKUr");function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}n("q1tI");var o=n("TSYQ"),c=n.n(o),s=n("6FPD"),l=n.n(s);function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){Object(a.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var h=function(e){var t=e.children,n=e.className,a=e.size,o=void 0===a?"1":a,s=e.inverted,d=void 0!==s&&s,h=i(e,["children","className","size","inverted"]),u=c()("1"===o&&l.a.h1,"2"===o&&l.a.h2,d&&l.a.inverted,n);return Object(r.jsx)("h1",m(m({},h),{},{className:c()(u,n),children:t}))},u=function(e){var t=e.children,n=e.className,a=e.size,o=void 0===a?"2":a,s=e.inverted,d=void 0!==s&&s,h=i(e,["children","className","size","inverted"]),u=c()("1"===o&&l.a.h1,"2"===o&&l.a.h2,d&&l.a.inverted,n);return Object(r.jsx)("h2",m(m({},h),{},{className:u,children:t}))},p=function(e){var t=e.children,n=e.secondary,a=e.className,o=e.style,s=void 0===o?"regular":o,d=e.inverted,h=void 0!==d&&d,u=i(e,["children","secondary","className","style","inverted"]),p=c()(l.a.p,n&&l.a.secondary,h&&l.a.inverted,l.a[s],a);return Object(r.jsx)("p",m(m({},u),{},{className:p,children:t}))}},YSyL:function(e,t,n){"use strict";n.r(t),n.d(t,"__N_SSG",(function(){return O})),n.d(t,"default",(function(){return x}));var a=n("nKUr"),r=n("q1tI"),i=n.n(r),o=n("WQq5"),c=n("DKdJ"),s=n("3TyU"),l=n("TSYQ"),d=n.n(l),m=n("wh5w"),h=n.n(m);function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var p=i.a.createElement("g",{fill:"none",fillRule:"evenodd"},i.a.createElement("circle",{fill:"#1E1E1E",cx:40,cy:40,r:40}),i.a.createElement("ellipse",{stroke:"#383838",strokeWidth:2,cx:40,cy:40,rx:30,ry:31}),i.a.createElement("g",{transform:"translate(24 24)"},i.a.createElement("circle",{stroke:"#292929",strokeWidth:4,fill:"#00E4B3",cx:16,cy:16,r:18}),i.a.createElement("path",{d:"M5.333 5.333h21.334v21.334H5.333z"}),i.a.createElement("path",{fill:"#383838",fillRule:"nonzero",d:"M14.222 18.82l8.17-8.172 1.259 1.257-9.429 9.428-5.657-5.657 1.257-1.256z"}))),b=function(e){return i.a.createElement("svg",u({width:80,height:80},e),p)};function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var j=i.a.createElement("g",{fill:"none",fillRule:"evenodd"},i.a.createElement("circle",{fill:"#1E1E1E",cx:40,cy:40,r:40}),i.a.createElement("ellipse",{stroke:"#383838",strokeWidth:2,cx:40,cy:40,rx:30,ry:31}),i.a.createElement("circle",{cx:16,cy:16,r:18,transform:"translate(24 24)",fill:"#D42B69",stroke:"#292929",strokeWidth:4}),i.a.createElement("path",{d:"M28 28.333h24v24H28z"}),i.a.createElement("path",{fill:"#292929",d:"M40 41.505l4.95-4.95 1.414 1.414L40 44.333l-6.364-6.364 1.414-1.414z"})),g=function(e){return i.a.createElement("svg",f({width:80,height:80},e),j)},_=function(e){var t=e.name,n=e.date,r=e.children,i=e.isDone;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("span",{className:h.a.timelineItemSymbol,children:[i&&Object(a.jsx)("span",{className:h.a.icon,children:Object(a.jsx)(b,{})}),!i&&Object(a.jsx)("span",{className:h.a.icon,children:Object(a.jsx)(g,{})})]}),Object(a.jsxs)("div",{className:h.a.item,children:[Object(a.jsx)("span",{className:h.a.itemDate,children:n}),Object(a.jsx)("h3",{className:h.a.itemName,children:t}),Object(a.jsx)("div",{className:h.a.itemContent,children:Object(a.jsx)("p",{children:r})})]})]})},w=function(e){var t=e.children;return Object(a.jsx)("span",{className:h.a.timelineSeparator,children:t})};w.displayName="TimelineSeparator";var y=function(){return Object(a.jsx)("div",{className:h.a.container,children:Object(a.jsxs)("ol",{className:h.a.timeline,children:[Object(a.jsx)("li",{className:d()(h.a.timelineItem,h.a.timelineItemRight),children:Object(a.jsx)(_,{name:"Edgeware Whitepaper Published",date:"September 2019",isDone:!0,children:"After a conversation with Gavin Wood of Parity Technologies, Commonwealth Labs author a whitepaper outlining the Edgeware concept and 'the lockdrop' a unique decentralized launch process alongside a vision to be the first Substrate-based smart contract platform and a core chain in the upcoming Polkadot ecosystem."})}),Object(a.jsx)("li",{className:d()(h.a.timelineItem,h.a.timelineItemLeft),children:Object(a.jsx)(_,{name:"Lockdrop",date:"June 2019",isDone:!0,children:"Commonwealth Labs deploys the master lockdrop contract to the Ethereum network, allowing ETH holders to time-lock their ETH in smart contracts, with EDG returned after either 3/6/9 or 12 months. The process scores commitment higher for longer and larger locks and awards EDG proportional to that greater commitment. The lockdrop is a great success with a diverse mix of users locking up more than 200M USD in value."})}),Object(a.jsx)("li",{className:d()(h.a.timelineItem,h.a.timelineItemRight),children:Object(a.jsx)(_,{name:"Decentralised Network Launch",date:"February 2020",isDone:!0,children:"Using the lockdrop proofs, the network launches in February of 2020 and EDG tokens become one of the most widely and fairly distributed in crypto history, with. well known names like Binance, Coinbase and Aragon and signaling participation on behalf of the ETH held by their users and organisations."})}),Object(a.jsx)("li",{className:d()(h.a.timelineItem,h.a.timelineItemLeft),children:Object(a.jsx)(_,{name:"Ink! Contracts Live on Edgeware",date:"March 2020",isDone:!0,children:"The cutting edge WASM contract module is activated in March, allowing users to write contracts in Rust that take advantage of cheaper deployment and more efficient contract storage within Edgeware."})}),Object(a.jsx)("li",{className:d()(h.a.timelineItem,h.a.timelineItemRight),children:Object(a.jsx)(_,{name:"Emerging Organisational Structures",date:"October 2020",isDone:!0,children:"With the help of a healthy treasury supporting continued innovation, a connection to Commonwealth's evolving community governance interface, alongside multi-signature wallets, a number of DAOs are emerging that focus on a range of areas. Funding and responsibility are delegated to groups such as the Edgeware Agency (which delivered this website) and the Builders Guild. A new generation of more ambitious Ecosystem DAOs are also close to launch led by Decent Partners and BuilDAO."})}),Object(a.jsx)("li",{className:d()(h.a.timelineItem,h.a.timelineItemLeft),children:Object(a.jsx)(_,{name:"EVM Contracts Launch on Edgeware",date:"March 2021",isDone:!0,children:"The launch of Parity Frontier in Edgeware brings the ability to launch virtually unmodified smart contracts from the Ethereum network on Edgeware, opening up the Polkadot ecosystem for hundreds of popular dapps and thousands of developers."})}),Object(a.jsx)("li",{className:d()(h.a.timelineItemSeparator),children:Object(a.jsx)(w,{children:"Coming soon"})}),Object(a.jsx)("li",{className:d()(h.a.timelineItem,h.a.timelineItemRight),children:Object(a.jsx)(_,{name:"The Edgeware Canary network launches",date:"TBD",children:"Canary networks are the new and value bearing testnet concept pioneered by Kusama. This approach helps Edgeware test and incentivize development on the mainnet. Edgeware\u2019s canary network is proposed to bond to the Kusama relaychain when KSM opens slot auctions."})}),Object(a.jsx)("li",{className:d()(h.a.timelineItem,h.a.timelineItemLeft),children:Object(a.jsx)(_,{name:"Edgeware bonds for a Polkadot Parachain Slot",date:"TBD",children:"Edgeware\u2019s core proposal of a cutting edge smart contract platform on Polkadot will be realized when the bidding is complete and DOT holders support Edgeware in their auction participation. Interoperability with other parachains like Acala, Paralink, Ocean and more will be available and the daily costs of securing the network in nPoS will decrease through the shared security benefits of Polkadot, allowing Edgeware's existing monetary inflation to drop."})}),Object(a.jsx)("li",{className:d()(h.a.timelineItem,h.a.timelineItemRight),children:Object(a.jsx)(_,{name:"Edgeware Bridges to Ethereum",date:"TBD",children:"Demand to bridge assets in Ethereum or wrap EDG on ETH open up a world of use-cases for Edgeware. Teams like Chainsafe and other technologies are being developed to create the first bridge to crypto\u2019s original smart contract platform, while giving EDG users access to the dapp ecosystem on ETH."})})]})})},v=n("wniQ"),O=!0;function x(){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)(c.a,{children:[Object(a.jsx)(o.a,{size:"1",children:"Mission"}),Object(a.jsx)(o.c,{children:"Edgeware serves as a platform for the developers, creators and members of its community to build, fund and manage their projects effectively. Our sustainable funding, evolving organisational structure and open culture welcomes the next generation of blockchain enabled concepts, tools and services. While the community's interests are always evolving, our core commitment to collective ownership and governance is the heart of Edgeware."})]}),Object(a.jsx)(s.a,{id:"mission",width:"normal",children:Object(a.jsx)(y,{})}),Object(a.jsx)(s.a,{id:"newsletter",width:"normal",gap:"none",children:Object(a.jsx)(v.a,{})})]})}},bVlk:function(e,t,n){e.exports={wrapper:"intro_wrapper__2omnV",wrapperNoGap:"intro_wrapperNoGap__19Elz",container:"intro_container__30uAt"}},rePB:function(e,t,n){"use strict";function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return a}))},tsKj:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/mission",function(){return n("YSyL")}])},wh5w:function(e,t,n){e.exports={container:"timeline_container__tXV_d",timeline:"timeline_timeline__3IAtb",timelineItem:"timeline_timelineItem__Bx6c5",timelineItemSeparator:"timeline_timelineItemSeparator__1QxbB",timelineItemSymbol:"timeline_timelineItemSymbol__2O7HW",timelineItemRight:"timeline_timelineItemRight__2EIpK",iconCheckmark:"timeline_iconCheckmark__3X3cH",iconTodo:"timeline_iconTodo__LdZoJ",icon:"timeline_icon__UP7oh",item:"timeline_item__3xOFU",itemDate:"timeline_itemDate__1M1LV",itemName:"timeline_itemName__2_Flt",itemContent:"timeline_itemContent__aFs4v",timelineSeparator:"timeline_timelineSeparator__3nqBm"}},wniQ:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var a=n("nKUr"),r=(n("q1tI"),n("Q+Rx")),i=n.n(r),o=n("6FPD"),c=n.n(o),s=n("VpDq"),l=n.n(s),d=function(){return Object(a.jsx)("form",{className:l.a.form,action:"https://edgewa.us19.list-manage.com/subscribe/post?u=04521a838ac5cb3bb4012c002&id=77879892a3",method:"post",name:"mc-embedded-subscribe-form",target:"_blank",children:Object(a.jsx)("fieldset",{className:l.a.fieldset,children:Object(a.jsxs)("div",{className:l.a.formRow,children:[Object(a.jsx)("label",{htmlFor:"nl-email","aria-label":"Your email address",children:Object(a.jsx)("input",{id:"nl-email",className:l.a.input,type:"email",name:"EMAIL",placeholder:"email@domain.com",required:!0})}),Object(a.jsx)("div",{className:l.a.honeypot,"aria-hidden":"true",children:Object(a.jsx)("input",{type:"text",name:"b_04521a838ac5cb3bb4012c002_77879892a3",tabIndex:-1,defaultValue:""})}),Object(a.jsx)("button",{type:"submit",className:l.a.button,children:"Sign up"})]})})})},m=function(){return Object(a.jsx)("div",{className:i.a.wrapper,children:Object(a.jsxs)("div",{className:i.a.content,children:[Object(a.jsx)("h3",{className:c.a.h1,children:"Stay tuned"}),Object(a.jsxs)("p",{className:c.a.p,children:["Subscribe to our newsletter and never miss updates, announcements and opportunities."," "]}),Object(a.jsx)(d,{})]})})}}},[["tsKj",0,1]]]);