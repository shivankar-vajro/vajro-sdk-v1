!function(e,o){"object"==typeof exports&&"object"==typeof module?module.exports=o():"function"==typeof define&&define.amd?define([],o):"object"==typeof exports?exports.VajroSDK=o():e.VajroSDK=o()}(window,(()=>(()=>{"use strict";var e={d:(o,r)=>{for(var t in r)e.o(r,t)&&!e.o(o,t)&&Object.defineProperty(o,t,{enumerable:!0,get:r[t]})},o:(e,o)=>Object.prototype.hasOwnProperty.call(e,o),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},o={};e.r(o),e.d(o,{actions:()=>U,initialize:()=>c,isSDKReady:()=>s,subscribe:()=>d,triggers:()=>r,unsubscribe:()=>u,variables:()=>n});var r={};e.r(r),e.d(r,{customerUpdated:()=>f,onCartUpdated:()=>g,onPageLoaded:()=>y});var t={};e.r(t),e.d(t,{addToCart:()=>w,disableCheckoutButton:()=>A,enableCheckoutButton:()=>N,openAuthentication:()=>m,openCart:()=>_,openCollection:()=>v,openCustomBlock:()=>P,openInAppBrowser:()=>E,openLandingPage:()=>O,openProduct:()=>T,openUrl:()=>R,showAlert:()=>b,showToast:()=>C});const n={},i=e=>{console.log("🔄 Updating appContext with:",e),Object.keys(e).forEach((o=>{"object"!=typeof e[o]||null===e[o]||Array.isArray(e[o])?n[o]=e[o]:n[o]=Object.assign(Object.assign({},n[o]),e[o])})),console.log("✅ Updated VajroSDK.variables:",n)};let a=!1;const c=(e={})=>{console.log("🚀 Initializing VajroSDK with Context:",e),e&&0!==Object.keys(e).length?i(e):console.warn("⚠️ No app context provided. Waiting for WebView updates..."),a=!0,console.log("✅ VajroSDK is initialized:",JSON.stringify(n,null,2))},s=()=>a,l={},d=(e,o)=>{l[e]||(l[e]=[]),l[e].push(o),console.log(`✅ Subscribed to event: ${e}`),console.log("🔍 Current Event Listeners:",l)},u=(e,o)=>{l[e]&&(l[e]=l[e].filter((e=>e!==o)),console.log(`❌ Unsubscribed from event: ${e}`))},p=(e,o)=>{console.log(`🚀 Dispatching event: ${e}`,o),i(o),l[e]?l[e].forEach((r=>{try{r(o)}catch(o){console.error(`❌ Error executing listener for ${e}:`,o)}})):console.log(`⚠️ No subscribers found for event: ${e}`)},y=e=>{console.log("🚀 ON_PAGE_LOADED Triggered:",e),p("onPageLoaded",e)},g=e=>{console.log("🚀 ON_CART_UPDATED Triggered:",e),p("onCartUpdated",e)},f=e=>{console.log("🚀 ON_CUSTOMER_UPDATED Triggered:",e),p("onCustomerUpdated",e)};var h;!function(e){e.OPEN_PRODUCT="openProduct",e.OPEN_COLLECTION="openCollection",e.OPEN_CART="openCart",e.OPEN_CUSTOM_BLOCK="openCustomBlock",e.OPEN_LANDING_PAGE="openLandingPage",e.OPEN_URL="openUrl",e.OPEN_IN_APP_BROWSER="openInAppBrowser",e.OPEN_AUTHENTICATION="openAuthentication",e.ADD_TO_CART="addToCart",e.ENABLE_CHECKOUT_BUTTON="enableCheckoutButton",e.DISABLE_CHECKOUT_BUTTON="disableCheckoutButton",e.SHOW_TOAST="showToast",e.SHOW_ALERT="showAlert",e.SET_LOCAL_STORAGE="setLocalStorage",e.GET_LOCAL_STORAGE="getLocalStorage"}(h||(h={}));const I=(e,o)=>(console.log(`🚀 Dispatching Action: ${e}`,o),new Promise(((r,t)=>{if(!window.flutter_inappwebview||"function"!=typeof window.flutter_inappwebview.callHandler)return console.error("❌ Flutter engine is not available."),t({errorCode:503,errorType:"ERROR_FLUTTER_ENGINE_NOT_AVAILABLE",errorMessage:"Flutter engine is not available. Ensure the app is running inside a Flutter WebView."});window.flutter_inappwebview.callHandler(e,o).then((o=>{(null==o?void 0:o.errorCode)?(console.error(`❌ Server Error from Flutter: ${o.errorMessage}`,o),t(o)):(console.log(`✅ Action successfully dispatched: ${e}`),r(o))})).catch((e=>{console.error("❌ WebView Communication Error:",e),t({errorCode:502,errorType:"ERROR_WEBVIEW_FAILURE",errorMessage:"Failed to communicate with Flutter WebView."})}))})));const T=e=>{return o=void 0,r=void 0,n=function*(){try{console.log("📂 Validating OpenProduct Payload..."),(e=>{if(!e.productId&&!e.productHandle)throw{errorCode:400,errorType:"ERROR_INVALID_INPUT",errorMessage:"Missing required fields: productId or productHandle."};if(void 0!==e.productId&&("string"!=typeof e.productId||""===e.productId.trim()))throw{errorCode:400,errorType:"ERROR_INVALID_INPUT_TYPE",errorMessage:"Invalid productId. It must be a non-empty string."};if(e.productHandle&&("string"!=typeof e.productHandle||""===e.productHandle.trim()))throw{errorCode:400,errorType:"ERROR_INVALID_INPUT_TYPE",errorMessage:"Invalid productHandle. It must be a non-empty string."};if(e.variantId&&("string"!=typeof e.variantId||""===e.variantId.trim()))throw{errorCode:400,errorType:"ERROR_INVALID_INPUT_TYPE",errorMessage:"Invalid variantId. It must be a non-empty string."};if(e.variantHandle&&("string"!=typeof e.variantHandle||""===e.variantHandle.trim()))throw{errorCode:400,errorType:"ERROR_INVALID_INPUT_TYPE",errorMessage:"Invalid variantHandle. It must be a non-empty string."}})(e),console.log("📂 Dispatching OpenProduct Action..."),yield I(h.OPEN_PRODUCT,e),console.log("✅ Product Opened Successfully!")}catch(e){return console.error("❌ Failed to open product:",e),Promise.reject(e)}},new((t=void 0)||(t=Promise))((function(e,i){function a(e){try{s(n.next(e))}catch(e){i(e)}}function c(e){try{s(n.throw(e))}catch(e){i(e)}}function s(o){var r;o.done?e(o.value):(r=o.value,r instanceof t?r:new t((function(e){e(r)}))).then(a,c)}s((n=n.apply(o,r||[])).next())}));var o,r,t,n};const v=e=>{return o=void 0,r=void 0,n=function*(){try{console.log("📂 Validating OpenCollection Payload..."),(e=>{if(!e.collectionHandle&&!e.collectionId)throw{errorCode:400,errorType:"ERROR_INVALID_INPUT",errorMessage:'Either "collectionHandle" or "collectionId" must be provided.'};if(e.collectionId&&("string"!=typeof e.collectionId||""===e.collectionId.trim()))throw{errorCode:400,errorType:"ERROR_INVALID_INPUT_TYPE",errorMessage:'"collectionId" must be a non-empty string.'};if(e.collectionHandle&&("string"!=typeof e.collectionHandle||""===e.collectionHandle.trim()))throw{errorCode:400,errorType:"ERROR_INVALID_INPUT_TYPE",errorMessage:'"collectionHandle" must be a non-empty string.'}})(e),console.log("📂 Dispatching OpenCollection Action..."),yield I(h.OPEN_COLLECTION,e),console.log("✅ Collection Opened Successfully!")}catch(e){return console.error("❌ Failed to open collection:",e),Promise.reject(e)}},new((t=void 0)||(t=Promise))((function(e,i){function a(e){try{s(n.next(e))}catch(e){i(e)}}function c(e){try{s(n.throw(e))}catch(e){i(e)}}function s(o){var r;o.done?e(o.value):(r=o.value,r instanceof t?r:new t((function(e){e(r)}))).then(a,c)}s((n=n.apply(o,r||[])).next())}));var o,r,t,n};const _=()=>{return e=void 0,o=void 0,t=function*(){try{console.log("🛒 Dispatching OpenCart Action..."),yield I(h.OPEN_CART,null),console.log("✅ Cart Opened Successfully!")}catch(e){return console.error("❌ Failed to open cart:",e),Promise.reject(e)}},new((r=void 0)||(r=Promise))((function(n,i){function a(e){try{s(t.next(e))}catch(e){i(e)}}function c(e){try{s(t.throw(e))}catch(e){i(e)}}function s(e){var o;e.done?n(e.value):(o=e.value,o instanceof r?o:new r((function(e){e(o)}))).then(a,c)}s((t=t.apply(e,o||[])).next())}));var e,o,r,t};const P=e=>{return o=void 0,r=void 0,n=function*(){try{console.log("🛠️ Validating OpenCustomBlock Payload..."),(e=>{if(!e.id)throw{errorCode:400,errorType:"ERROR_INVALID_INPUT",errorMessage:"Custom block id must be provided."};if(e.id&&("string"!=typeof e.id||""===e.id.trim()))throw{errorCode:400,errorType:"ERROR_INVALID_INPUT_TYPE",errorMessage:"Custom Block Id must be a non-empty string."}})(e),console.log("🛠️ Dispatching OpenCustomBlock Action..."),yield I(h.OPEN_CUSTOM_BLOCK,e),console.log("✅ Custom Block Opened Successfully!")}catch(e){return console.error("❌ Failed to open custom block:",e),Promise.reject(e)}},new((t=void 0)||(t=Promise))((function(e,i){function a(e){try{s(n.next(e))}catch(e){i(e)}}function c(e){try{s(n.throw(e))}catch(e){i(e)}}function s(o){var r;o.done?e(o.value):(r=o.value,r instanceof t?r:new t((function(e){e(r)}))).then(a,c)}s((n=n.apply(o,r||[])).next())}));var o,r,t,n};const O=e=>{return o=void 0,r=void 0,n=function*(){try{console.log("🛠️ Validating OpenLandingPage Payload..."),(e=>{if(!e.id)throw{errorCode:400,errorType:"ERROR_INVALID_INPUT",errorMessage:"Page Id must be provided."};if(e.id&&("string"!=typeof e.id||""===e.id.trim()))throw{errorCode:400,errorType:"ERROR_INVALID_INPUT_TYPE",errorMessage:"Invalid Page Id. It must be a non-empty string."}})(e),console.log("🛠️ Dispatching OpenLandingPage Action..."),yield I(h.OPEN_CUSTOM_BLOCK,e),console.log("✅ Landing Page Opened Successfully!")}catch(e){return console.error("❌ Failed to open landing page:",e),Promise.reject(e)}},new((t=void 0)||(t=Promise))((function(e,i){function a(e){try{s(n.next(e))}catch(e){i(e)}}function c(e){try{s(n.throw(e))}catch(e){i(e)}}function s(o){var r;o.done?e(o.value):(r=o.value,r instanceof t?r:new t((function(e){e(r)}))).then(a,c)}s((n=n.apply(o,r||[])).next())}));var o,r,t,n};const R=e=>{return o=void 0,r=void 0,n=function*(){try{console.log("🛠️ Validating OpenUrl Payload..."),(e=>{if(!e.path)throw{errorCode:400,errorType:"ERROR_INVALID_INPUT",errorMessage:"Path must be provided."};if(e.path&&("string"!=typeof e.path||""===e.path.trim()))throw{errorCode:400,errorType:"ERROR_INVALID_INPUT_TYPE",errorMessage:"Invalid path. It must be a non-empty string."}})(e),console.log("🛠️ Dispatching OpenUrl Action..."),yield I(h.OPEN_URL,e),console.log("✅ Url Opened Successfully!")}catch(e){return console.error("❌ Failed to open url:",e),Promise.reject(e)}},new((t=void 0)||(t=Promise))((function(e,i){function a(e){try{s(n.next(e))}catch(e){i(e)}}function c(e){try{s(n.throw(e))}catch(e){i(e)}}function s(o){var r;o.done?e(o.value):(r=o.value,r instanceof t?r:new t((function(e){e(r)}))).then(a,c)}s((n=n.apply(o,r||[])).next())}));var o,r,t,n};const E=e=>{return o=void 0,r=void 0,n=function*(){try{console.log("🛠️ Validating OpenInAppBrowser Payload..."),(e=>{if(!e.path)throw{errorCode:400,errorType:"ERROR_INVALID_INPUT",errorMessage:"Path must be provided."};if(e.path&&("string"!=typeof e.path||""===e.path.trim()))throw{errorCode:400,errorType:"ERROR_INVALID_INPUT_TYPE",errorMessage:"Invalid path. It must be a non-empty string."}})(e),console.log("🛠️ Dispatching OpenInAppBrowser Action..."),yield I(h.OPEN_IN_APP_BROWSER,e),console.log("✅ InAppBrowser Opened Successfully!")}catch(e){return console.error("❌ Failed to open InAppBrowser:",e),Promise.reject(e)}},new((t=void 0)||(t=Promise))((function(e,i){function a(e){try{s(n.next(e))}catch(e){i(e)}}function c(e){try{s(n.throw(e))}catch(e){i(e)}}function s(o){var r;o.done?e(o.value):(r=o.value,r instanceof t?r:new t((function(e){e(r)}))).then(a,c)}s((n=n.apply(o,r||[])).next())}));var o,r,t,n};const m=e=>{return o=void 0,r=void 0,n=function*(){try{console.log("🛠️ Validating OpenAuthentication Payload..."),(e=>{if(!e.type&&!e.type)throw{errorCode:400,errorType:"ERROR_INVALID_INPUT",errorMessage:"Authentication type must be provided"};if(e.type&&("string"!=typeof e.type||!["LOGIN","SIGNUP"].includes(e.type.trim())))throw{errorCode:400,errorType:"ERROR_INVALID_INPUT_TYPE",errorMessage:"Invalid authenticate type. It must be a non-empty string: 'LOGIN' or 'SIGNUP' only."}})(e),console.log("🛠️ Dispatching OpenAuthentication Action..."),yield I(h.OPEN_AUTHENTICATION,e),console.log("✅ Authentication Opened Successfully!")}catch(e){return console.error("❌ Failed to open Authentication",e),Promise.reject(e)}},new((t=void 0)||(t=Promise))((function(e,i){function a(e){try{s(n.next(e))}catch(e){i(e)}}function c(e){try{s(n.throw(e))}catch(e){i(e)}}function s(o){var r;o.done?e(o.value):(r=o.value,r instanceof t?r:new t((function(e){e(r)}))).then(a,c)}s((n=n.apply(o,r||[])).next())}));var o,r,t,n};const w=e=>{return o=void 0,r=void 0,n=function*(){return new Promise(((o,r)=>{try{(e=>{if(!e.variantId)throw{errorCode:400,errorType:"ERROR_INVALID_INPUT_TYPE",errorMessage:"Variant Id must be provided."};if(!e.quantity)throw{errorCode:400,errorType:"ERROR_INVALID_INPUT_TYPE",errorMessage:"Quantity must be provided."};if(e.variantId&&("string"!=typeof e.variantId||""===e.variantId.trim()))throw{errorCode:400,errorType:"ERROR_INVALID_INPUT_TYPE",errorMessage:"Invalid variantId. It must be a non-empty string."};if(!e.quantity&&"number"!=typeof e.quantity)throw{errorCode:400,errorType:"ERROR_INVALID_INPUT_TYPE",errorMessage:"Invalid quantity. It must be a number."}})(e),I(h.ADD_TO_CART,null),o()}catch(e){console.error("Failed to add to cart:",e),r(e)}}))},new((t=void 0)||(t=Promise))((function(e,i){function a(e){try{s(n.next(e))}catch(e){i(e)}}function c(e){try{s(n.throw(e))}catch(e){i(e)}}function s(o){var r;o.done?e(o.value):(r=o.value,r instanceof t?r:new t((function(e){e(r)}))).then(a,c)}s((n=n.apply(o,r||[])).next())}));var o,r,t,n};const N=()=>{return e=void 0,o=void 0,t=function*(){try{console.log("🛒 Dispatching EnableheckoutButton Action..."),yield I(h.ENABLE_CHECKOUT_BUTTON,null),console.log("✅ Checkout Button Enabled Successfully!")}catch(e){return console.error("❌ Failed to enable checkout button:",e),Promise.reject(e)}},new((r=void 0)||(r=Promise))((function(n,i){function a(e){try{s(t.next(e))}catch(e){i(e)}}function c(e){try{s(t.throw(e))}catch(e){i(e)}}function s(e){var o;e.done?n(e.value):(o=e.value,o instanceof r?o:new r((function(e){e(o)}))).then(a,c)}s((t=t.apply(e,o||[])).next())}));var e,o,r,t};const A=()=>{return e=void 0,o=void 0,t=function*(){try{console.log("🛒 Dispatching DisableCheckoutButton Action..."),yield I(h.DISABLE_CHECKOUT_BUTTON,null),console.log("✅ Checkout Button Disabled Successfully!")}catch(e){return console.error("❌ Failed to disable checkout button:",e),Promise.reject(e)}},new((r=void 0)||(r=Promise))((function(n,i){function a(e){try{s(t.next(e))}catch(e){i(e)}}function c(e){try{s(t.throw(e))}catch(e){i(e)}}function s(e){var o;e.done?n(e.value):(o=e.value,o instanceof r?o:new r((function(e){e(o)}))).then(a,c)}s((t=t.apply(e,o||[])).next())}));var e,o,r,t};const C=e=>{return o=void 0,r=void 0,n=function*(){try{console.log("🛠️ Validating ShowToast Payload..."),(e=>{if(!e.message)throw{errorCode:400,errorType:"ERROR_INVALID_INPUT",errorMessage:"Toast message should be provided."};if(!e.type)throw{errorCode:400,errorType:"ERROR_INVALID_INPUT",errorMessage:"Toast type should be provided."};if(e.message&&("string"!=typeof e.message||""===e.message.trim()))throw{errorCode:400,errorType:"ERROR_INVALID_INPUT_TYPE",errorMessage:"Toast message should be a non empty string."};if(e.type&&("string"!=typeof e.type||!["DEFAULT","SUCCESS","ERROR"].includes(e.type.trim())))throw{errorCode:400,errorType:"ERROR_INVALID_INPUT_TYPE",errorMessage:"Invalid toast type. It must be one of the following: 'DEFAULT', 'SUCCESS', or 'ERROR'."}})(e),console.log("🛠️ Dispatching ShowToast Action..."),yield I(h.SHOW_TOAST,e),console.log("✅Toast Opened Successfully!")}catch(e){return console.error("❌ Failed to open toast:",e),Promise.reject(e)}},new((t=void 0)||(t=Promise))((function(e,i){function a(e){try{s(n.next(e))}catch(e){i(e)}}function c(e){try{s(n.throw(e))}catch(e){i(e)}}function s(o){var r;o.done?e(o.value):(r=o.value,r instanceof t?r:new t((function(e){e(r)}))).then(a,c)}s((n=n.apply(o,r||[])).next())}));var o,r,t,n};const b=e=>{return o=void 0,r=void 0,n=function*(){try{console.log("🛠️ Validating ShowAlert Payload..."),(e=>{if(!e.message)throw{errorCode:400,errorType:"ERROR_INVALID_INPUT",errorMessage:"Alert message should be provided."};if(!e.type)throw{errorCode:400,errorType:"ERROR_INVALID_INPUT",errorMessage:"Alert type should be provided."};if(e.message&&("string"!=typeof e.message||""===e.message.trim()))throw{errorCode:400,errorType:"ERROR_INVALID_INPUT_TYPE",errorMessage:"Alert message should be a non empty string."};if(e.type&&("string"!=typeof e.type||!["DEFAULT","SUCCESS","ERROR"].includes(e.type.trim())))throw{errorCode:400,errorType:"ERROR_INVALID_INPUT_TYPE",errorMessage:"Invalid alert type. It must be one of the following: 'DEFAULT', 'SUCCESS', or 'ERROR'."}})(e),console.log("🛠️ Dispatching ShowAlert Action..."),yield I(h.SHOW_ALERT,e),console.log("Alert Opened Successfully!")}catch(e){return console.error("❌ Failed to open alert:",e),Promise.reject(e)}},new((t=void 0)||(t=Promise))((function(e,i){function a(e){try{s(n.next(e))}catch(e){i(e)}}function c(e){try{s(n.throw(e))}catch(e){i(e)}}function s(o){var r;o.done?e(o.value):(r=o.value,r instanceof t?r:new t((function(e){e(r)}))).then(a,c)}s((n=n.apply(o,r||[])).next())}));var o,r,t,n},U=new Proxy(t,{get(e,o){if(!(o in e)){const e={errorCode:501,errorType:"ERROR_NOT_IMPLEMENTED",errorMessage:`This action '${o}' is not yet implemented`};return console.error("❌ Error:",e),()=>Promise.reject(e)}return e[o]}});return o})()));
