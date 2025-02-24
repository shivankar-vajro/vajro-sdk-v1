!function(e,o){"object"==typeof exports&&"object"==typeof module?module.exports=o():"function"==typeof define&&define.amd?define([],o):"object"==typeof exports?exports.VajroSDK=o():e.VajroSDK=o()}(window,(()=>(()=>{"use strict";var e={d:(o,t)=>{for(var n in t)e.o(t,n)&&!e.o(o,n)&&Object.defineProperty(o,n,{enumerable:!0,get:t[n]})},o:(e,o)=>Object.prototype.hasOwnProperty.call(e,o),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},o={};e.r(o),e.d(o,{actions:()=>t,initialize:()=>c,listeners:()=>b,subscribe:()=>l,unsubscribe:()=>d,updateAppContext:()=>i,variables:()=>n});var t={};e.r(t),e.d(t,{openCart:()=>f,openCollection:()=>u,openCustomBlock:()=>y,openProduct:()=>w});const n={},r=(e,o=n)=>{Object.keys(e).forEach((t=>{"object"!=typeof e[t]||null===e[t]||Array.isArray(e[t])?o[t]=e[t]:(o[t]&&"object"==typeof o[t]||(o[t]={}),r(e[t],o[t]))}))},i=e=>{r(e,n),console.log("🛠 App Context Updated:",n)},a={},l=(e,o)=>{a[e]||(a[e]=[]),a[e].push(o)},d=(e,o)=>{a[e]&&(a[e]=a[e].filter((e=>e!==o)))},c=(e={})=>{i(e),console.log("🚀 VajroSDK Initialized with Context:",n),"undefined"!=typeof window&&window.addEventListener?window.addEventListener("message",(e=>{if(!e.data||"object"!=typeof e.data)return;const{type:o,payload:t}=e.data;var n,r;o&&(console.log(`📩 Received event from WebView: ${o}`,t),r=t,a[n=o]&&(a[n].forEach((e=>{Promise.resolve().then((()=>e(r)))})),i(r)))})):console.warn("WebView event listener could not be initialized."),"undefined"!=typeof window&&(window.simulateAppUpdate=i)};var p;!function(e){e.OPEN_PRODUCT="openProduct",e.OPEN_COLLECTION="openCollection",e.OPEN_CART="openCart",e.OPEN_CUSTOM_BLOCK="openCustomBlock"}(p||(p={}));const s=(e,o)=>(console.log(`Dispatching action: ${e}`,o),new Promise(((t,n)=>{window.flutter_inappwebview&&"function"==typeof window.flutter_inappwebview.callHandler?window.flutter_inappwebview.callHandler(e,o).then((()=>{console.log(`Action dispatched successfully: ${e}`),t()})).catch((o=>{console.error(`Failed to dispatch action: ${e}`,o),n(o)})):(console.error("Flutter engine is not available."),n(new Error("Flutter engine is not available.")))}))),w=e=>new Promise(((o,t)=>{try{(e=>{if(!e.productId&&!e.productHandle)throw new Error("Either productId or productHandle must be provided.");if(e.productId&&"string"!=typeof e.productId)throw new Error("Invalid productId. It must be a non-empty string.");if(e.productHandle&&"string"!=typeof e.productHandle)throw new Error("Invalid productHandle. It must be a non-empty string.");if(e.variantId&&"string"!=typeof e.variantId)throw new Error("Invalid variantId. It must be a string.");if(e.variantHandle&&"string"!=typeof e.variantHandle)throw new Error("Invalid variantHandle. It must be a string.");if(void 0===e.openInNewPage)e.openInNewPage=!0;else if("boolean"!=typeof e.openInNewPage)throw new Error("Invalid openInNewPage. It must be a boolean.")})(e),s(p.OPEN_PRODUCT,e).then(o).catch(t)}catch(e){console.error("Validation failed:",e),t(e)}})),u=e=>new Promise(((o,t)=>{try{(e=>{if(!e.collectionHandle&&!e.collectionId)throw new Error('Either "collectionHandle" or "collectionId" must be provided.');if(e.collectionHandle&&"string"!=typeof e.collectionHandle)throw new Error('"collectionHandle" must be a string.');if(e.collectionId&&"string"!=typeof e.collectionId)throw new Error('"collectionId" must be a string.')})(e),s(p.OPEN_COLLECTION,e),o()}catch(e){console.error("Failed to open collection:",e),t(e)}})),f=()=>new Promise(((e,o)=>{try{s(p.OPEN_CART,null),e()}catch(e){console.error("Failed to open cart:",e),o(e)}})),y=e=>new Promise(((o,t)=>{try{(e=>{if(!e.id||"string"!=typeof e.id||""===e.id.trim())throw new Error('Invalid "id". It must be a non-empty string.');if(!e.type||"string"!=typeof e.type||""===e.type.trim())throw new Error('Invalid "type". It must be a non-empty string.')})(e),s(p.OPEN_CUSTOM_BLOCK,e).then(o).catch(t)}catch(e){console.error("Validation failed:",e),t(e)}})),b={CART_UPDATED:"cartUpdated",CUSTOMER_UPDATED:"customerUpdated"};return o})()));
