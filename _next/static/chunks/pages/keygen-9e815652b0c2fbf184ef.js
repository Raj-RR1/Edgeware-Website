(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[463],{8998:function(e,r,t){"use strict";t.d(r,{$:function(){return c}});var n=t(85893),a=(t(67294),t(94184)),o=t.n(a),s=t(39841),i=t.n(s),c=function(e){var r=e.id,t=e.children,a=e.background,s=void 0===a?"none":a,c=e.width,d=void 0===c?"normal":c,u=e.gap,l=void 0===u?"standard":u,p=o()(i().section,i()["sectionGap-".concat(l)],"blocks"===s&&i().backgroundBlocks,"waves"===s&&i().backgroundWaves,"waves-middle"===s&&i().backgroundMiddle,"waves-top"===s&&i().backgroundTop),h=o()("narrow"===d&&i().containerNarrow,"normal"===d&&"container","wide"===d&&i().containerWide,"fluid"===d&&i().containerFluid);return(0,n.jsx)("section",{id:r,className:p,children:(0,n.jsx)("div",{className:h,children:t})})}},96809:function(e,r,t){"use strict";t.d(r,{H1:function(){return p},H2:function(){return h},P:function(){return m}});var n=t(26265),a=t(85893),o=t(38347),s=(t(67294),t(94184)),i=t.n(s),c=t(10595),d=t.n(c);function u(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?u(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var p=function(e){var r=e.children,t=e.className,n=e.size,s=void 0===n?"1":n,c=e.inverted,u=void 0!==c&&c,p=e.margin,h=void 0===p?"normal":p,m=(0,o.Z)(e,["children","className","size","inverted","margin"]),f=i()("1"===s&&d().h1,"2"===s&&d().h2,u&&d().inverted,h&&d()["hmargin-".concat(h)],t);return(0,a.jsx)("h1",l(l({},m),{},{className:f,children:r}))},h=function(e){var r=e.children,t=e.className,n=e.size,s=void 0===n?"2":n,c=e.inverted,u=void 0!==c&&c,p=e.margin,h=void 0===p?"normal":p,m=(0,o.Z)(e,["children","className","size","inverted","margin"]),f=i()("1"===s&&d().h1,"2"===s&&d().h2,u&&d().inverted,h&&d()["hmargin-".concat(h)],t);return(0,a.jsx)("h2",l(l({},m),{},{className:f,children:r}))},m=function(e){var r=e.children,t=e.secondary,n=e.className,s=e.style,c=void 0===s?"regular":s,u=e.inverted,p=void 0!==u&&u,h=e.bold,m=void 0!==h&&h,f=(0,o.Z)(e,["children","secondary","className","style","inverted","bold"]),v=i()(d().p,t&&d().secondary,p&&d().inverted,m&&d().bold,d()[c],n);return(0,a.jsx)("p",l(l({},f),{},{className:v,children:r}))}},84562:function(e,r,t){"use strict";t.r(r),t.d(r,{__N_SSG:function(){return q},default:function(){return X}});var n=t(85893),a=t(67294),o=t(96809),s=t(8998),i=t(39227),c=t(81286),d=t(46312),u=t(47662),l=t(33300),p=t(47702),h=t(67927),m=t(65146),f=t(75145),v=t(33639),w="sr25519";var x=t(96198),y=t.n(x);function b(e){var r=e.phrase,t=e.publicKey,n=e.testnetAddress,a=e.mainnetAddress;return"Mnemonic phrase: ".concat(r,"\nPublic key (hex): ").concat(t,"\nTestnet address (SS58): ").concat(n,"\nMainnet address (SS58): ").concat(a,"\n")}var g=function(){var e=a.useState({generated:!1}),r=(0,i.Z)(e,2),t=r[0],s=r[1];return t.generated?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{className:y().infoBox,children:(0,n.jsx)("pre",{children:b(t.keypairData)})}),(0,n.jsx)(o.P,{children:(0,n.jsxs)("strong",{children:["You've generated a public key and mnemonic. Save the mnemonic to a secure offline location!",(0,n.jsx)("br",{}),"If you don't remember your mnemonic, you won't be able to claim your EDG."]})}),(0,n.jsx)(c.z,{onClick:function(){s({generated:!1,keypairData:void 0})},style:"secondary",children:"Start over"})]}):(0,n.jsx)("div",{children:(0,n.jsx)(c.z,{onClick:function(){var e=function(){var e=(0,d._)(),r=new f.ZP({type:w}).addFromMnemonic(e),t=new f.ZP({type:w,ss58Format:7}).addFromMnemonic(e);return{phrase:e,publicKey:(0,u.c)(r.publicKey),testnetAddress:r.address,mainnetAddress:t.address}}();s({generated:!0,keypairData:e})},children:"Generate key pair"})})},_=t(85300),j=t.n(_),k={"evm-address":"EVM Address (e.g. 0x1234...)","ss58-address":"Testnet EDG Address (e.g. 5G7Agn...)","public-key":"Public key (e.g. 0x1234...)"},N={"evm-address":function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";try{var r=(0,l.G)(e),t=(0,p.d)("evm:"),n=(0,m.b)((0,h.e)(t,r)),a=new f.ZP({type:"sr25519",ss58Format:7}),o=(0,v.s)({toSS58:a.encodeAddress,type:"sr25519"},{publicKey:n}),s=o.address;return s}catch(i){return"error"}},"ss58-address":function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",r=new f.ZP;try{r.addFromAddress(e);var t=(0,u.c)(r.getPublicKeys()[0]);return t}catch(n){return"error"}},"public-key":function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";try{var r=new f.ZP({type:"sr25519"}),t=(0,v.s)({toSS58:r.encodeAddress,type:"sr25519"},{publicKey:(0,l.G)(e)}),n=t.address,a=new f.ZP({type:"sr25519",ss58Format:7}),o=(0,v.s)({toSS58:a.encodeAddress,type:"sr25519"},{publicKey:(0,l.G)(e)}),s=o.address;return{testnetAddress:n,mainnetAddress:s}}catch(i){return"error"}}};var P,S,O,E=function(e){var r=e.type,t=a.useState({inputValue:"",data:void 0}),o=(0,i.Z)(t,2),s=o[0],d=o[1],u=a.useRef(null);if(s.data){var l="";return"error"===s.data?l="Invalid input data!":"evm-address"===r?l="Address: ".concat(s.inputValue,"\nConverted address: ").concat(s.data):"public-key"===r?l="Public Key: ".concat(s.inputValue,"\nTestnet address (SS58): ").concat(s.data.testnetAddress,"\nMainnet address (SS58): ").concat(s.data.mainnetAddress):"ss58-address"===r&&(l="Address: ".concat(s.inputValue,"\nPublic Key: ").concat(s.data)),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{className:j().infoBox,children:(0,n.jsx)("pre",{children:l})}),(0,n.jsx)(c.z,{onClick:function(){d({inputValue:"",data:void 0})},style:"secondary",children:"Start over"})]})}return(0,n.jsx)("form",{className:j().form,action:"#",onSubmit:function(e){e.preventDefault();var t=u.current.value,n=function(e,r){return N[r](e)}(t,r);d({inputValue:t,data:n})},children:(0,n.jsx)("fieldset",{className:j().fieldset,children:(0,n.jsxs)("div",{className:j().formRow,children:[(0,n.jsx)("label",{htmlFor:"ac-input-".concat(r),"aria-label":k[r],children:(0,n.jsx)("input",{id:"ac-input-".concat(r),className:j().input,type:"text",name:"input",placeholder:k[r],ref:u,autoComplete:"off",autoCapitalize:"off",autoCorrect:"off"})}),(0,n.jsx)("button",{type:"submit",className:j().button,children:"Convert"})]})})})},T=t(26265),C=t(809),A=t.n(C),D=t(92447),G=t(8446),M=t(87268),F=t(46244),Z=t(64405),I=t(6221),W=t(3283),V=t.n(W),z=t(7992),B=t.n(z),H=t(48764).Buffer;function K(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function R(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?K(Object(t),!0).forEach((function(r){(0,T.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):K(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var U=t(41763);P=U.web3Accounts,S=U.web3Enable,O=U.web3FromAddress;var $=function(){var e=(0,a.useRef)(null),r=(0,a.useRef)(null),t=(0,a.useState)({text:null,error:!1}),o=t[0],s=t[1],i=function(){var t=(0,D.Z)(A().mark((function t(){var n,a,o,i,c,d,u,l,p;return A().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(s({}),o=new(V())(window.ethereum),i=null===o||void 0===o||null===(n=o.eth)||void 0===n||null===(a=n.accounts)||void 0===a?void 0:a.currentProvider,c=null===i||void 0===i?void 0:i.selectedAddress){t.next=7;break}return s({text:"Metamask or compatible Web3 wallet required",error:!0}),t.abrupt("return");case 7:if(d=e.current.value){t.next=11;break}return s({text:"Invalid Substrate address",error:!0}),t.abrupt("return");case 11:if(u=r.current.value,!isNaN(+u)){t.next=15;break}return s({text:"Invalid amount",error:!0}),t.abrupt("return");case 15:if(2021===+(null===i||void 0===i?void 0:i.chainId)||2022===+(null===i||void 0===i?void 0:i.chainId)){t.next=18;break}return s({text:"Wallet must be configured to EVM chain ID 2021 for Edgeware",error:!0,showAddNetwork:!0}),t.abrupt("return");case 18:return t.prev=18,s({text:"Confirm the transaction in your wallet",error:!0}),l=(0,I.m)(d),p=H.from(l.subarray(0,20)).toString("hex"),t.next=24,o.eth.sendTransaction({from:c,to:p,value:V().utils.toWei(u),gas:"55000"}).on("transactionHash",(function(){s({text:"Transaction sent, waiting for confirmation...",error:!0})}));case 24:s({text:"Transfer to withdraw address succeeded. Please continue to step 2."}),t.next=30;break;case 27:t.prev=27,t.t0=t.catch(18),4001===t.t0.code?s({text:"Transaction canceled",error:!0}):s({text:"Transaction error",error:!0});case 30:case"end":return t.stop()}}),t,null,[[18,27]])})));return function(){return t.apply(this,arguments)}}(),d=function(){var t=(0,D.Z)(A().mark((function t(){var n,a,o,i,c,d,l,p,h,m,v,w,x,y,b,g;return A().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(s({}),o=new(V())(window.ethereum),i=null===o||void 0===o||null===(n=o.eth)||void 0===n||null===(a=n.accounts)||void 0===a?void 0:a.currentProvider,null!==o&&void 0!==o&&o.eth){t.next=6;break}return s({text:"Metamask or compatible Web3 wallet required",error:!0}),t.abrupt("return");case 6:if(c=e.current.value){t.next=10;break}return s({text:"Invalid Substrate address",error:!0}),t.abrupt("return");case 10:if(d=r.current.value,!isNaN(+d)){t.next=14;break}return s({text:"Invalid amount",error:!0}),t.abrupt("return");case 14:if(l=(0,I.m)(c),p=(0,u.c)(l),h="0x"+H.from(l.subarray(0,20)).toString("hex"),2021===+(null===i||void 0===i?void 0:i.chainId)||2022===+(null===i||void 0===i?void 0:i.chainId)){t.next=20;break}return s({text:"Wallet must be configured to EVM chain ID 2021 for Edgeware",error:!0,showAddNetwork:!0}),t.abrupt("return");case 20:return s({text:"Connecting to polkadot-js...",error:!0}),"wss://mainnet.edgewa.re",m=new M.P,t.next=25,new F.G(R({provider:new Z.U("wss://mainnet.edgewa.re"),registry:m},G.spec)).isReady;case 25:return v=t.sent,(w=new f.ZP).setSS58Format(7),t.next=30,S("Edgeware key management app");case 30:return t.next=32,P();case 32:if(x=t.sent,-1!==x.map((function(e){var r=e.address;return(0,u.c)(w.decodeAddress(r))})).indexOf(p)){t.next=37;break}return s({text:"Address not found in polkadot-js",error:!0}),t.abrupt("return");case 37:return t.t0="",t.next=40,o.eth.getBalance(h);case 40:return t.t1=+t.sent,t.t2=Math.pow(10,18),t.t3=t.t1/t.t2,y=t.t0.concat.call(t.t0,t.t3," EDG"),b="".concat(d," EDG"),s({text:"Withdrawing ".concat(b," of ").concat(y," available, please confirm in polkadot-js"),error:!0}),t.next=48,O(c);case 48:g=t.sent,v.tx.evm.withdraw(h,(+d*Math.pow(10,+v.registry.chainDecimals)).toString()).signAndSend(c,{signer:g.signer},(function(e){e.isError?s({text:"Transaction error",error:!0}):e.dispatchError&&b>y?s({text:"Transaction error. Attempted to withdraw ".concat(b," with only ").concat(y," available"),error:!0}):e.dispatchError?s({text:"Transaction error",error:!0}):e.isCompleted&&b===y?s({text:"Transaction success. Withdrew ".concat(b,"!")}):e.isCompleted&&s({text:"Transaction success. Withdrew ".concat(b," of ").concat(y," available in the withdraw address")})})).catch((function(e){s({text:e.message,error:!0})}));case 50:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),l=function(){var e=(0,D.Z)(A().mark((function e(r){return A().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.preventDefault(),e.prev=1,e.next=4,window.ethereum.request({method:"wallet_addEthereumChain",params:[{chainId:"0x7E5",chainName:"Edgeware",rpcUrls:["https://mainnet.edgewa.re/evm"],nativeCurrency:{name:"Edgeware",symbol:"EDG",decimals:18},blockExplorerUrls:["https://mainnet.edgscan.com/"]}]});case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(1),s({text:e.t0.message,error:!0,showAddNetwork:!0});case 9:case"end":return e.stop()}}),e,null,[[1,6]])})));return function(r){return e.apply(this,arguments)}}();return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("form",{onSubmit:function(e){return e.preventDefault()},children:[(0,n.jsx)("label",{className:B().label,htmlFor:"ac-input-withdraw-address","aria-label":"Address",children:(0,n.jsx)("input",{id:"ac-input-withdraw-address",className:B().input,type:"text",name:"input",placeholder:"Substrate address (e.g. nJrsr...)",ref:e,autoComplete:"off",autoCapitalize:"off",autoCorrect:"off"})}),(0,n.jsx)("label",{className:B().label,htmlFor:"ac-input-withdraw-amount","aria-label":"Amount",children:(0,n.jsx)("input",{id:"ac-input-withdraw-amount",className:B().input,type:"text",name:"input",placeholder:"Amount (EDG)",ref:r,autoComplete:"off",autoCapitalize:"off",autoCorrect:"off"})}),(0,n.jsx)("div",{style:{paddingRight:10,paddingTop:10},children:(0,n.jsx)(c.z,{onClick:i,style:"primary-small",children:"1. Transfer to withdraw address"})}),(0,n.jsx)("div",{style:{paddingRight:10,paddingTop:10},children:(0,n.jsx)(c.z,{onClick:d,style:"primary-small",children:"2. Withdraw from EVM"})}),(0,n.jsx)("div",{className:o.error?B().errorText:B().successText,children:o.text}),o.showAddNetwork&&window.ethereum&&(0,n.jsx)("a",{className:B().linkText,href:"#",onClick:l,children:"Switch to Edgeware"})]})})},q=!0;function X(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.$,{id:"intro",width:"normal",gap:"narrow",children:(0,n.jsxs)("div",{children:[(0,n.jsx)(o.H1,{size:"1",children:"Edgeware Key Generator"}),(0,n.jsxs)(o.P,{children:["This page generates public/private keypairs, which you can use to receive EDG from the Edgeware lockdrop.",(0,n.jsx)("br",{}),"Note: The preferred way to generate a private key is using the command line, on an air-gapped computer."]})]})}),(0,n.jsxs)(s.$,{id:"convert-evm",width:"normal",gap:"standard",children:[(0,n.jsx)(o.H2,{children:"Deposit to EVM"}),(0,n.jsx)(o.P,{children:"If you have an Metamask address (e.g. 0x1234...), this tool converts it into a mainnet address (e.g. i76Ux...) where you can send balances from polkadot-js, to be immediately deposited into Metamask."}),(0,n.jsx)(E,{type:"evm-address"})]}),(0,n.jsxs)(s.$,{id:"withdraw-evm",width:"normal",gap:"standard",children:[(0,n.jsx)(o.H2,{children:"Withdraw from EVM"}),(0,n.jsx)(o.P,{children:"To withdraw from Metamask to polkadot-js, first send EDG to the withdraw address corresponding to your polkadot-js address. Then, you must execute an withdraw transaction from that address."}),(0,n.jsx)(o.P,{children:"Note: This requires both Metamask (or another compatible wallet) and polkadot-js."}),(0,n.jsx)($,{})]}),(0,n.jsxs)(s.$,{id:"keypair",width:"normal",gap:"standard",children:[(0,n.jsx)(o.H2,{children:"Generate keypair"}),(0,n.jsxs)(o.P,{children:["Please keep in mind that this method to generate a public/private key pair is insecure!",(0,n.jsx)("br",{}),"The preferred way to generate a private key is using the command line or polkadot-js, on an air-gapped computer."]}),(0,n.jsx)(g,{})]}),(0,n.jsxs)(s.$,{id:"convert-pk",width:"normal",gap:"standard",children:[(0,n.jsx)(o.H2,{children:"Convert public key to address"}),(0,n.jsxs)(o.P,{children:["If you have a public key (0x1234...), you can use this tool to convert it into a mainnet/testnet address."," "]}),(0,n.jsx)(E,{type:"public-key"})]}),(0,n.jsxs)(s.$,{id:"convert-ss58",width:"normal",gap:"standard",children:[(0,n.jsx)(o.H2,{children:"Convert address to public key"}),(0,n.jsxs)(o.P,{children:[" ","If you have a testnet EDG address (5G7Agn...), you can use this tool to convert it into a public key (0x1234...)"]}),(0,n.jsx)(E,{type:"ss58-address"})]})]})}},24443:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/keygen",function(){return t(84562)}])},39841:function(e){e.exports={section:"section_section__1ShBF","sectionGap-none":"section_sectionGap-none__plV2B","sectionGap-narrow":"section_sectionGap-narrow__2diln","sectionGap-standard":"section_sectionGap-standard__wugNC",containerNarrow:"section_containerNarrow__2egjC",containerFluid:"section_containerFluid__Sfyep",backgroundBlocks:"section_backgroundBlocks__bhV1u",backgroundWaves:"section_backgroundWaves__1X3fr",backgroundTop:"section_backgroundTop__1cCBc",backgroundMiddle:"section_backgroundMiddle__hIOLL"}},10595:function(e){e.exports={h1:"typography_h1__Ql4YW",h2:"typography_h2__2iRlG",h3:"typography_h3__3uupd","hmargin-none":"typography_hmargin-none__2uPHD",p:"typography_p__2Krs5",secondary:"typography_secondary__13AQd",lead:"typography_lead__1kfSD",large:"typography_large__2xH2U",small:"typography_small__2ehWd",inverted:"typography_inverted__5pmmv",bold:"typography_bold__2adf1"}},85300:function(e){e.exports={form:"address-converter_form__QZMOi",fieldset:"address-converter_fieldset__3aMs1",formRow:"address-converter_formRow__3Cclv",input:"address-converter_input__1qTU5",button:"address-converter_button__31pXk",infoBox:"address-converter_infoBox__2_GnV"}},7992:function(e){e.exports={label:"evm-withdraw_label__1aY6S",input:"evm-withdraw_input__1PCrw",button:"evm-withdraw_button__2T-OC",errorText:"evm-withdraw_errorText__3mNvU",successText:"evm-withdraw_successText__3IZzF",linkText:"evm-withdraw_linkText__36CGW"}},96198:function(e){e.exports={infoBox:"keypair-generator_infoBox__w27ac"}},93399:function(){},46601:function(){},89214:function(){},71922:function(){},2363:function(){},54597:function(){},27790:function(){},52361:function(){},94616:function(){}},function(e){e.O(0,[845,503,774,888,179],(function(){return r=24443,e(e.s=r);var r}));var r=e.O();_N_E=r}]);