/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@vkontakte/vk-bridge/dist/index.umd.js":
/*!*************************************************************!*\
  !*** ./node_modules/@vkontakte/vk-bridge/dist/index.umd.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, exports) {

eval("!function(e,n){ true?n(exports):0}(this,(function(e){\"use strict\";var n=function(){return n=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e},n.apply(this,arguments)};function t(e,n,t,r){return new(t||(t=Promise))((function(o,a){function i(e){try{s(r.next(e))}catch(e){a(e)}}function p(e){try{s(r.throw(e))}catch(e){a(e)}}function s(e){var n;e.done?o(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(i,p)}s((r=r.apply(e,n||[])).next())}))}function r(e,n){var t,r,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:p(0),throw:p(1),return:p(2)},\"function\"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function p(p){return function(s){return function(p){if(t)throw new TypeError(\"Generator is already executing.\");for(;a&&(a=0,p[0]&&(i=0)),i;)try{if(t=1,r&&(o=2&p[0]?r.return:p[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,p[1])).done)return o;switch(r=0,o&&(p=[2&p[0],o.value]),p[0]){case 0:case 1:o=p;break;case 4:return i.label++,{value:p[1],done:!1};case 5:i.label++,r=p[1],p=[0];continue;case 7:p=i.ops.pop(),i.trys.pop();continue;default:if(!(o=i.trys,(o=o.length>0&&o[o.length-1])||6!==p[0]&&2!==p[0])){i=0;continue}if(3===p[0]&&(!o||p[1]>o[0]&&p[1]<o[3])){i.label=p[1];break}if(6===p[0]&&i.label<o[1]){i.label=o[1],o=p;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(p);break}o[2]&&i.ops.pop(),i.trys.pop();continue}p=n.call(e,i)}catch(e){p=[6,e],r=0}finally{t=o=0}if(5&p[0])throw p[1];return{value:p[0]?p[1]:void 0,done:!0}}([p,s])}}}function o(e,n,t){if(t||2===arguments.length)for(var r,o=0,a=n.length;o<a;o++)!r&&o in n||(r||(r=Array.prototype.slice.call(n,0,o)),r[o]=n[o]);return e.concat(r||Array.prototype.slice.call(n))}function a(e,t,r){var o=function(e){var n={current:0,next:function(){return++this.current}},t={};return{add:function(r,o){var a=null!=o?o:\"\".concat(n.next(),\"_\").concat(e);return t[a]=r,a},resolve:function(e,n,r){var o=t[e];o&&(r(n)?o.resolve(n):o.reject(n),t[e]=null)}}}(r);return t((function(e){if(e.detail&&e.detail.data&&\"object\"==typeof e.detail.data&&\"request_id\"in e.detail.data){var n=e.detail.data,t=n.request_id,r=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&\"function\"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)n.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(t[r[o]]=e[r[o]])}return t}(n,[\"request_id\"]);t&&o.resolve(t,r,(function(e){return!(\"error_type\"in e)}))}})),function(t,r){return void 0===r&&(r={}),new Promise((function(a,i){var p=o.add({resolve:a,reject:i},r.request_id);e(t,n(n({},r),{request_id:p}))}))}}var i,p=\"undefined\"!=typeof window,s=Boolean(p&&window.AndroidBridge),u=Boolean(p&&window.webkit&&window.webkit.messageHandlers&&window.webkit.messageHandlers.VKWebAppClose),c=Boolean(p&&window.ReactNativeWebView&&\"function\"==typeof window.ReactNativeWebView.postMessage),d=p&&!s&&!u,l=d&&/(^\\?|&)vk_platform=mobile_web(&|$)/.test(location.search),f=d?\"message\":\"VKWebAppEvent\",b=o([\"VKWebAppInit\",\"VKWebAppGetCommunityAuthToken\",\"VKWebAppAddToCommunity\",\"VKWebAppAddToHomeScreenInfo\",\"VKWebAppClose\",\"VKWebAppCopyText\",\"VKWebAppCreateHash\",\"VKWebAppGetUserInfo\",\"VKWebAppSetLocation\",\"VKWebAppSendToClient\",\"VKWebAppGetClientVersion\",\"VKWebAppGetPhoneNumber\",\"VKWebAppGetEmail\",\"VKWebAppGetGroupInfo\",\"VKWebAppGetGeodata\",\"VKWebAppGetCommunityToken\",\"VKWebAppGetConfig\",\"VKWebAppGetLaunchParams\",\"VKWebAppSetTitle\",\"VKWebAppGetAuthToken\",\"VKWebAppCallAPIMethod\",\"VKWebAppJoinGroup\",\"VKWebAppLeaveGroup\",\"VKWebAppAllowMessagesFromGroup\",\"VKWebAppDenyNotifications\",\"VKWebAppAllowNotifications\",\"VKWebAppOpenPayForm\",\"VKWebAppOpenApp\",\"VKWebAppShare\",\"VKWebAppShowWallPostBox\",\"VKWebAppScroll\",\"VKWebAppShowOrderBox\",\"VKWebAppShowLeaderBoardBox\",\"VKWebAppShowInviteBox\",\"VKWebAppShowRequestBox\",\"VKWebAppAddToFavorites\",\"VKWebAppShowStoryBox\",\"VKWebAppStorageGet\",\"VKWebAppStorageGetKeys\",\"VKWebAppStorageSet\",\"VKWebAppFlashGetInfo\",\"VKWebAppSubscribeStoryApp\",\"VKWebAppOpenWallPost\",\"VKWebAppCheckAllowedScopes\",\"VKWebAppCheckBannerAd\",\"VKWebAppHideBannerAd\",\"VKWebAppShowBannerAd\",\"VKWebAppCheckNativeAds\",\"VKWebAppShowNativeAds\",\"VKWebAppRetargetingPixel\",\"VKWebAppConversionHit\",\"VKWebAppShowSubscriptionBox\",\"VKWebAppCheckSurvey\",\"VKWebAppShowSurvey\",\"VKWebAppScrollTop\",\"VKWebAppScrollTopStart\",\"VKWebAppScrollTopStop\",\"VKWebAppShowSlidesSheet\",\"VKWebAppTranslate\",\"VKWebAppRecommend\",\"VKWebAppAddToProfile\",\"VKWebAppGetFriends\"],d&&!l?[\"VKWebAppResizeWindow\",\"VKWebAppAddToMenu\",\"VKWebAppShowInstallPushBox\",\"VKWebAppShowCommunityWidgetPreviewBox\",\"VKWebAppCallStart\",\"VKWebAppCallJoin\",\"VKWebAppCallGetStatus\"]:[\"VKWebAppShowImages\"],!0),A=p?window.AndroidBridge:void 0,v=u?window.webkit.messageHandlers:void 0,h=d?parent:void 0;var m,w,W,y,V,K,_,g,E,S;e.EAdsFormats=void 0,(m=e.EAdsFormats||(e.EAdsFormats={})).REWARD=\"reward\",m.INTERSTITIAL=\"interstitial\",e.BannerAdLayoutType=void 0,(w=e.BannerAdLayoutType||(e.BannerAdLayoutType={})).RESIZE=\"resize\",w.OVERLAY=\"overlay\",e.BannerAdLocation=void 0,(W=e.BannerAdLocation||(e.BannerAdLocation={})).TOP=\"top\",W.BOTTOM=\"bottom\",e.BannerAdAlign=void 0,(y=e.BannerAdAlign||(e.BannerAdAlign={})).LEFT=\"left\",y.RIGHT=\"right\",y.CENTER=\"center\",e.BannerAdHeightType=void 0,(V=e.BannerAdHeightType||(e.BannerAdHeightType={})).COMPACT=\"compact\",V.REGULAR=\"regular\",e.BannerAdOrientation=void 0,(K=e.BannerAdOrientation||(e.BannerAdOrientation={})).HORIZONTAL=\"horizontal\",K.VERTICAL=\"vertical\",e.EGrantedPermission=void 0,(_=e.EGrantedPermission||(e.EGrantedPermission={})).CAMERA=\"camera\",_.LOCATION=\"location\",_.PHOTO=\"photo\",e.EGetLaunchParamsResponseLanguages=void 0,(g=e.EGetLaunchParamsResponseLanguages||(e.EGetLaunchParamsResponseLanguages={})).RU=\"ru\",g.UK=\"uk\",g.UA=\"ua\",g.EN=\"en\",g.BE=\"be\",g.KZ=\"kz\",g.PT=\"pt\",g.ES=\"es\",e.EGetLaunchParamsResponseGroupRole=void 0,(E=e.EGetLaunchParamsResponseGroupRole||(e.EGetLaunchParamsResponseGroupRole={})).ADMIN=\"admin\",E.EDITOR=\"editor\",E.MEMBER=\"member\",E.MODER=\"moder\",E.NONE=\"none\",e.EGetLaunchParamsResponsePlatforms=void 0,(S=e.EGetLaunchParamsResponsePlatforms||(e.EGetLaunchParamsResponsePlatforms={})).DESKTOP_WEB=\"desktop_web\",S.DESKTOP_WEB_MESSENGER=\"desktop_web_messenger\",S.DESKTOP_APP_MESSENGER=\"desktop_app_messenger\",S.MOBILE_WEB=\"mobile_web\",S.MOBILE_ANDROID=\"mobile_android\",S.MOBILE_ANDROID_MESSENGER=\"mobile_android_messenger\",S.MOBILE_IPHONE=\"mobile_iphone\",S.MOBILE_IPHONE_MESSENGER=\"mobile_iphone_messenger\",S.MOBILE_IPAD=\"mobile_ipad\";var O=function(e){var n=void 0,p=[],l=Math.random().toString(36).substring(2,5);function m(e){p.push(e)}function w(e){return console.warn(\"This method is deprecated. Use supportsAsync instead.\"),s?!(!A||\"function\"!=typeof A[e]):u?!(!v||!v[e]||\"function\"!=typeof v[e].postMessage):!!d&&b.includes(e)}function W(){return u||s}function y(){return d&&window.parent!==window}function V(){return W()||y()}function K(e){if(u||s)return o([],p,!0).map((function(n){return n.call(null,e)}));var t=null==e?void 0:e.data;if(d&&t){if(c&&\"string\"==typeof t)try{t=JSON.parse(t)}catch(e){}var r=t.type,a=t.data,i=t.frameId;r&&(\"VKWebAppSettings\"!==r?o([],p,!0).map((function(e){return e({detail:{type:r,data:a}})})):n=i)}}c&&/(android)/i.test(navigator.userAgent)?document.addEventListener(f,K):\"undefined\"!=typeof window&&\"addEventListener\"in window&&window.addEventListener(f,K);var _=a((function(t,r){A&&A[t]?A[t](JSON.stringify(r)):v&&v[t]&&\"function\"==typeof v[t].postMessage?v[t].postMessage(r):c?window.ReactNativeWebView.postMessage(JSON.stringify({handler:t,params:r})):h&&\"function\"==typeof h.postMessage&&h.postMessage({handler:t,params:r,type:\"vk-connect\",webFrameId:n,connectVersion:e},\"*\")}),m,l);return m((function(e){if(e.detail&&\"SetSupportedHandlers\"===e.detail.type)i=e.detail.data.supportedHandlers})),{send:_,sendPromise:_,subscribe:m,unsubscribe:function(e){var n=p.indexOf(e);n>-1&&p.splice(n,1)},supports:w,supportsAsync:function(e){return t(this,void 0,void 0,(function(){var n;return r(this,(function(t){switch(t.label){case 0:if(s||u)return[2,w(e)];if(i)return[2,i.includes(e)];t.label=1;case 1:return t.trys.push([1,3,,4]),[4,_(\"SetSupportedHandlers\")];case 2:return n=t.sent(),[2,(i=n.supportedHandlers).includes(e)];case 3:return t.sent(),[2,(i=[\"VKWebAppInit\"]).includes(e)];case 4:return[2]}}))}))},isWebView:W,isIframe:y,isEmbedded:V,isStandalone:function(){return!V()}}}(\"2.15.1\");e.applyMiddleware=function e(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];return t.includes(void 0)||t.includes(null)?e.apply(void 0,t.filter((function(e){return\"function\"==typeof e}))):function(e){if(0===t.length)return e;var r,o={subscribe:e.subscribe,send:function(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];return e.send.apply(e,n)}},a=t.filter((function(e){return\"function\"==typeof e})).map((function(e){return e(o)})).reduce((function(e,n){return function(t){return e(n(t))}}));return r=a(e.send),n(n({},e),{send:r})}},e.default=O,e.parseURLSearchParamsForGetLaunchParams=function(n){var t={};try{var r=new URLSearchParams(n);r.forEach((function(n,r){switch(r){case\"vk_ts\":case\"vk_is_recommended\":case\"vk_profile_id\":case\"vk_has_profile_button\":case\"vk_testing_group_id\":case\"vk_user_id\":case\"vk_app_id\":case\"vk_group_id\":t[r]=Number(n);break;case\"sign\":case\"vk_chat_id\":case\"vk_ref\":case\"vk_access_token_settings\":t[r]=n;break;case\"odr_enabled\":t.odr_enabled=\"1\"===n?1:void 0;break;case\"vk_is_app_user\":case\"vk_are_notifications_enabled\":case\"vk_is_favorite\":t[r]=function(e){switch(e){case\"0\":return 0;case\"1\":return 1;default:return}}(n);break;case\"vk_language\":t.vk_language=function(n){return Object.values(e.EGetLaunchParamsResponseLanguages).some((function(e){return e===n}))}(n)?n:void 0;break;case\"vk_viewer_group_role\":t.vk_viewer_group_role=function(n){return Object.values(e.EGetLaunchParamsResponseGroupRole).some((function(e){return e===n}))}(n)?n:void 0;break;case\"vk_platform\":t.vk_platform=function(n){return Object.values(e.EGetLaunchParamsResponsePlatforms).some((function(e){return e===n}))}(n)?n:void 0}}))}catch(e){console.warn(e)}return t},Object.defineProperty(e,\"__esModule\",{value:!0})}));\n//# sourceMappingURL=index.umd.js.map\n\n\n//# sourceURL=webpack://student/./node_modules/@vkontakte/vk-bridge/dist/index.umd.js?");

/***/ }),

/***/ "./src/engine/button.js":
/*!******************************!*\
  !*** ./src/engine/button.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Button)\n/* harmony export */ });\n/* harmony import */ var _image_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./image.js */ \"./src/engine/image.js\");\n\n\nclass Button extends _image_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n\n    handler = ()=>{};\n\n    constructor(params) {\n        super(params);\n    }\n\n    checkClick(data) {\n        if (data.x > this.params.x && data.x < this.params.x + this.params.width) {\n            if (data.y > this.params.y && data.y < this.params.y + this.params.height) {\n                this.getHandler()();\n            }\n        }\n    }\n\n    setHandler(handler) {\n        this.handler = handler;\n    }\n\n    getHandler() {\n        return this.handler;\n    }\n    \n}\n\n\n//# sourceURL=webpack://student/./src/engine/button.js?");

/***/ }),

/***/ "./src/engine/canvas.js":
/*!******************************!*\
  !*** ./src/engine/canvas.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Canvas)\n/* harmony export */ });\nclass Canvas {\n\n    SCALE = 10000;\n    QUALITY = 1.6;\n\n    c;\n    ctx;\n\n    filter;\n\n    clickCallback;\n    clickCallbackCaller;\n\n    mousedownCallback;\n    mousedownCallbackCaller;\n\n    mousemoveCallback;\n    mousemoveCallbackCaller;\n\n    left;\n    right;\n    width;\n    height;\n\n    defaultWidth;\n    defaultHeight;\n\n    mouse = {\n        over: {\n            x: null,\n            y: null\n        },\n        click: {\n            x: null,\n            y: null\n        },\n        pressed: false,\n        swipe: null\n    };\n\n    constructor(selector = '#c', defaultWidth = 500, defaultHeight = 500) {\n        this.c = document.querySelector(selector);\n        this.defaultWidth = defaultWidth;\n        this.defaultHeight = defaultHeight;\n        this.ctx = this.c.getContext('2d');\n    \n        //this.checkBorders();\n        // this.fixDpi();\n        this.fixDpiNew();\n        this.checkBorders();\n        setInterval(() => this.checkBorders(), 1000);\n        // window.addEventListener(\"resize\", this.fixDpiNew());\n    }\n\n    fixDpi = () => {\n        const dpi = window.devicePixelRatio;\n        const styles = window.getComputedStyle(this.c);\n        \n        // create a style object that returns width and height\n        const style = {\n          height() {\n            return +styles.height.slice(0, -2);\n          },\n          width() {\n            return +styles.width.slice(0, -2);\n          }\n        };\n        \n        // set the correct canvas attributes for device dpi\n        this.c.setAttribute('width', (style.width() * dpi).toString()); //\n        this.c.setAttribute('height', (style.height() * dpi).toString()); //\n        // this.width = (style.width() * dpi).toString();\n        // this.height = (style.height() * dpi).toString();\n    }\n\n    fixDpiNew = () => {\n        // Get the DPR and size of the canvas\n        let dpr = window.devicePixelRatio * this.QUALITY;\n        const rect = this.c.getBoundingClientRect();\n\n        // Set the \"actual\" size of the canvas\n        this.c.width = rect.width * dpr;\n        this.c.height = rect.height * dpr;\n\n        // Scale the context to ensure correct drawing operations\n        this.ctx.scale(dpr, dpr);\n\n        // Set the \"drawn\" size of the canvas\n        // this.c.style.width = this.c.getAttribute('data-width'); //'263px'; //`${rect.width*0.7}px`;\n        // this.c.style.height = this.c.getAttribute('data-height'); //'467px'; //`${rect.height*0.7}px`;\n        \n        //console.log(window.innerWidth);\n        if (window.innerWidth > 450) {\n            let tmpheight = this.c.getAttribute('data-height');\n            if (tmpheight) {\n                this.c.style.width = this.c.getAttribute('data-width');\n                this.c.style.height = this.c.getAttribute('data-height');\n            } else {\n                this.c.style.height = '95vh';\n            }\n        } else {\n            this.c.style.width = '100%';\n            this.c.style.aspectRatio = window.innerWidth + '/' + window.innerHeight;\n            //this.c.style.width = '100vw';\n           // this.c.style.height = '100%'; // 'calc(100vh - calc(100vh - 100%))';//'100vh';\n        }\n    }\n\n    checkBorders() {\n        this.left = this.c.offsetLeft + this.c.clientLeft;\n        this.top = this.c.offsetTop + this.c.clientTop;\n\n        this.width = this.c.offsetWidth;\n        this.height = this.c.offsetHeight;\n        // this.fixDpi();\n    }\n\n    setClickCallback(callbackCaller, clickCallback) {\n        this.clickCallback = clickCallback;\n        this.clickCallbackCaller = callbackCaller;\n    }\n\n    setMousedownCallback(callbackCaller, mousedownCallback) {\n        this.mousedownCallback = mousedownCallback;\n        this.mousedownCallbackCaller = callbackCaller;\n    }\n\n    setMousemoveCallback(callbackCaller, mousemoveCallback) {\n        this.mousemoveCallback = mousemoveCallback;\n        this.mousemoveCallbackCaller = callbackCaller;\n    }\n\n    getContext() {\n        return this.ctx;\n    }\n\n    addMouseListeners() {\n        this.c.addEventListener('mousedown', (event) => this.mousedownListener(event));\n        this.c.addEventListener('touchstart', (event) => this.mousedownListener(event));\n        this.c.addEventListener('mouseup', (event) => this.mouseupListener(event));\n        this.c.addEventListener('touchend', (event) => this.mouseupListener(event));\n        this.c.addEventListener('mousemove', (event) => this.mousemoveListener(event));\n        this.c.addEventListener('touchmove', (event) => this.mousemoveListener(event));\n    }\n\n    mousedownListener(event) {\n        let pageX, pageY;\n        if (event.type === 'touchstart') {\n            pageX = event.touches[0].pageX;\n            pageY = event.touches[0].pageY;\n        } else {\n            pageX = event.pageX;\n            pageY = event.pageY;\n        }\n\n        let x = pageX - this.left;\n        let y = pageY - this.top;\n\n        //\n        x = x / this.width * this.defaultWidth;\n        y = y / this.height * this.defaultHeight;\n        //\n        // console.log(event);\n\n        this.mouse.click.x = x;\n        this.mouse.click.y = y;\n        this.mouse.pressed = true;\n\n        this.mousedownCallback.call(this.mousedownCallbackCaller, this.mouse.click);\n    }\n\n    mouseupListener(event) {\n        event.preventDefault();\n        let pageX, pageY;\n        if (event.type === 'touchend') {\n            // pageX = event.touches[0].pageX;\n            // pageY = event.touches[0].pageY;\n        } else {\n            pageX = event.pageX;\n            pageY = event.pageY;\n        }\n\n        if (event.type !== 'touchend') {\n            let x = pageX - this.left;\n            let y = pageY - this.top;\n\n            x = x / this.width * this.defaultWidth;\n            y = y / this.height * this.defaultHeight;\n\n            this.mouse.click.x = x;\n            this.mouse.click.y = y;\n        }\n\n        this.mouse.pressed = false;\n\n        this.clickCallback.call(this.clickCallbackCaller, this.mouse.click);\n    }\n\n    mousemoveListener(event) {\n        let pageX, pageY;\n        if (event.type === 'touchmove') {\n            pageX = event.touches[0].pageX;\n            pageY = event.touches[0].pageY;\n        } else {\n            pageX = event.pageX;\n            pageY = event.pageY;\n        }\n\n        let x = pageX - this.left;\n        let y = pageY - this.top;\n\n        //\n        x = x / this.width * this.defaultWidth;\n        y = y / this.height * this.defaultHeight;\n        //\n        // console.log('move' + x + ' ' + y);\n\n        if (this.mouse.pressed) {\n            this.mouse.swipe = x - this.mouse.over.x;\n        }\n\n        this.mouse.over.x = x;\n        this.mouse.over.y = y;\n\n        this.mousemoveCallback.call(this.mousemoveCallbackCaller, this.mouse);\n    }\n\n    clearAll() {\n        this.ctx.clearRect(0, 0, this.width, this.height);\n    }\n\n    setFilter(filter) {\n        this.filter = filter;\n    }\n\n    applyFilter() {\n        if (this.filter) {\n            this.ctx.filter = this.filter;\n        }\n    }\n\n}\n\n//# sourceURL=webpack://student/./src/engine/canvas.js?");

/***/ }),

/***/ "./src/engine/entity.js":
/*!******************************!*\
  !*** ./src/engine/entity.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Entity)\n/* harmony export */ });\nclass Entity {\n\n    roundRect(ctx, x, y, w, h, r) {\n        if (w < 2 * r) r = w / 2;\n        if (h < 2 * r) r = h / 2;\n        ctx.beginPath();\n        ctx.moveTo(x+r, y);\n        ctx.arcTo(x+w, y,   x+w, y+h, r);\n        ctx.arcTo(x+w, y+h, x,   y+h, r);\n        ctx.arcTo(x,   y+h, x,   y,   r);\n        ctx.arcTo(x,   y,   x+w, y,   r);\n        ctx.closePath();\n        return ctx;\n    }\n\n    constructor() {}\n\n    checkClick() {}\n    checkMousedown() {}\n    checkMousemove() {}\n\n    draw() {}\n\n}\n\n//# sourceURL=webpack://student/./src/engine/entity.js?");

/***/ }),

/***/ "./src/engine/game.js":
/*!****************************!*\
  !*** ./src/engine/game.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Game)\n/* harmony export */ });\n/* harmony import */ var _canvas_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./canvas.js */ \"./src/engine/canvas.js\");\n\n\nclass Game {\n\n    FPS = 40;\n\n    screen;\n\n    scene;\n\n    timers = {\n        render: null\n    };\n\n    constructor(canvasSelector, defaultWidth, defaultHeight) {\n        this.screen = new _canvas_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](canvasSelector, defaultWidth, defaultHeight);\n        this.screen.setClickCallback(this, this.clickCallback);\n        this.screen.setMousedownCallback(this, this.mousedownCallback);\n        this.screen.setMousemoveCallback(this, this.mousemoveCallback);\n    }\n\n    clickCallback(data) {\n        this.scene.click(data);\n    }\n\n    mousedownCallback(data) {\n        this.scene.mousedown(data);\n    }\n\n    mousemoveCallback(data) {\n        this.scene.mousemove(data);\n    }\n\n    start() {\n        this.initTimers()\n            .initListeners();\n    }\n\n    initTimers() {\n        this.initRenderTimer();\n\n        return this;\n    }\n\n    initRenderTimer() {\n        this.timers.render = setInterval(() => this.scene.render(this.screen), 1000 / this.FPS);\n    }\n\n    freezeRender() {\n        this.scene.timerToFreeze = this.timers.render;\n    }\n\n    initListeners() {\n        this.screen.addMouseListeners();\n\n        return this;\n    }\n\n    setScene(scene) {\n        this.scene = scene;\n    }\n\n    getScene() {\n        return this.scene;\n    }\n}\n\n//# sourceURL=webpack://student/./src/engine/game.js?");

/***/ }),

/***/ "./src/engine/image.js":
/*!*****************************!*\
  !*** ./src/engine/image.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Image)\n/* harmony export */ });\n/* harmony import */ var _entity_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./entity.js */ \"./src/engine/entity.js\");\n\n\nclass Image extends _entity_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n\n    params;\n    sx;\n    sy;\n    sw;\n    sh;\n\n    constructor(params) {\n        super();\n\n        this.params = params;\n        this.sx = (typeof this.params.sx !== 'undefined') ? this.params.sx : this.params.x;\n        this.sy = (typeof this.params.sy !== 'undefined') ? this.params.sy : this.params.y;\n        this.sw = this.params.swidth || this.params.width;\n        this.sh = this.params.sheight || this.params.height;\n    }\n\n    draw(ctx) {\n        ctx.drawImage(this.params.source.getIt(), \n            this.sx, this.sy, this.sw, this.sh,\n            this.params.x, this.params.y, this.params.width, this.params.height);\n    }\n\n}\n\n//# sourceURL=webpack://student/./src/engine/image.js?");

/***/ }),

/***/ "./src/engine/mathematics.js":
/*!***********************************!*\
  !*** ./src/engine/mathematics.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Mathematics)\n/* harmony export */ });\nclass Mathematics {\n\n    constructor() {}\n\n    static getRandomInteger(min, max, exclusion = []) {\n        let rand = Math.round(min - 0.5 + Math.random() * (max - min + 1));\n        return exclusion.includes(rand) ? this.getRandomInteger(min, max, exclusion) : rand;\n    }\n\n}\n\n//# sourceURL=webpack://student/./src/engine/mathematics.js?");

/***/ }),

/***/ "./src/engine/scene.js":
/*!*****************************!*\
  !*** ./src/engine/scene.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Scene)\n/* harmony export */ });\nclass Scene {\n\n    entities = [];\n\n    timerToFreeze = false;\n\n    constructor(layersCount) {\n        for (let i = 0; i < layersCount; i++) {\n            this.entities.push([]);\n        }\n    }\n\n    append(entity, layer) {\n        this.entities[layer].push(entity);\n    }\n\n    click(data) {\n        for (const layer of this.entities) {\n            for (const entity of layer) {\n                entity.checkClick(data);\n            }\n        }\n    }\n\n    mousedown(data) {\n        for (const layer of this.entities) {\n            for (const entity of layer) {\n                entity.checkMousedown(data);\n            }\n        }\n    }\n\n    mousemove(data) {\n        for (const layer of this.entities) {\n            for (const entity of layer) {\n                entity.checkMousemove(data);\n            }\n        }\n    }\n\n    render(screen) {\n        screen.clearAll();\n        \n        // screen.getContext().filter = 'blur(5px)';\n        screen.applyFilter();\n\n        for (const layer of this.entities) {\n            for (const entity of layer) {\n                entity.draw(screen.getContext());\n            }\n        }\n\n        if (this.timerToFreeze) {\n            clearInterval(this.timerToFreeze);\n            this.timerToFreeze = null;\n        }\n    }\n\n    remove(entity) {\n        for (let i = 0; i < this.entities.length; i++) {\n            for (let j = 0; j < this.entities[i].length; j++) {\n                if (this.entities[i][j] === entity) {\n                    this.entities[i].splice(j, 1);\n                }\n            }\n        }\n    }\n}\n\n//# sourceURL=webpack://student/./src/engine/scene.js?");

/***/ }),

/***/ "./src/engine/source.js":
/*!******************************!*\
  !*** ./src/engine/source.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Source)\n/* harmony export */ });\nclass Source {\n\n    it;\n\n    constructor(query) {\n        this.it = document.querySelector(query);\n    }\n\n    getIt() {\n        return this.it;\n    }\n\n}\n\n//# sourceURL=webpack://student/./src/engine/source.js?");

/***/ }),

/***/ "./src/engine/thebutton.js":
/*!*********************************!*\
  !*** ./src/engine/thebutton.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Thebutton)\n/* harmony export */ });\n/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./button */ \"./src/engine/button.js\");\n\n\nclass Thebutton extends _button__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n\n    roundness = 10;\n\n    constructor(params) {\n        super(params);\n        this.symbol = params.symbol;\n    }\n\n    draw(ctx) {\n        ctx.fillStyle = this.params.backStyle;\n        this.roundRect(ctx, this.sx, this.sy, this.sw, this.sh, this.roundness);\n        ctx.fill();\n        ctx.fillStyle = this.params.fontStyle;\n        ctx.font = this.params.fontsize + ' ' + this.params.font;\n        ctx.textAlign = 'center';\n        ctx.fillText(this.params.caption, this.sx+(this.sw/2), this.sy+(this.sh/2)+7);\n    }\n\n}\n\n//# sourceURL=webpack://student/./src/engine/thebutton.js?");

/***/ }),

/***/ "./src/game/params.js":
/*!****************************!*\
  !*** ./src/game/params.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   LAYERS_COUNT: () => (/* binding */ LAYERS_COUNT),\n/* harmony export */   LAYER_BACK: () => (/* binding */ LAYER_BACK),\n/* harmony export */   LAYER_CHARACTER: () => (/* binding */ LAYER_CHARACTER),\n/* harmony export */   LAYER_CONTROL: () => (/* binding */ LAYER_CONTROL),\n/* harmony export */   LAYER_IMAGE: () => (/* binding */ LAYER_IMAGE),\n/* harmony export */   LAYER_MODAL_BACK: () => (/* binding */ LAYER_MODAL_BACK),\n/* harmony export */   LAYER_MODAL_CONTROL: () => (/* binding */ LAYER_MODAL_CONTROL),\n/* harmony export */   LAYER_MODAL_GRAY: () => (/* binding */ LAYER_MODAL_GRAY),\n/* harmony export */   backSource: () => (/* binding */ backSource),\n/* harmony export */   buttons: () => (/* binding */ buttons),\n/* harmony export */   images: () => (/* binding */ images)\n/* harmony export */ });\n/* harmony import */ var _engine_source_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../engine/source.js */ \"./src/engine/source.js\");\n\r\n\r\nconst LAYER_BACK = 1;\r\nconst LAYER_IMAGE = 2;\r\nconst LAYER_CHARACTER = 3;\r\nconst LAYER_CONTROL = 4;\r\nconst LAYER_MODAL_GRAY = 5;\r\nconst LAYER_MODAL_BACK = 6;\r\nconst LAYER_MODAL_CONTROL = 7;\r\n\r\nconst LAYERS_COUNT = 8;\r\n\r\nconst backSource = new _engine_source_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('#back');\r\n\r\nconst images = {\r\n    back: {\r\n        sx: 0,\r\n        sy: 0,\r\n        x: 0,\r\n        y: 0,\r\n        swidth: 576,\r\n        sheight: 1024,\r\n        width: 375,\r\n        height: 667,\r\n        source: backSource,\r\n    },\r\n    school: {\r\n        sx: 0,\r\n        sy: 0,\r\n        x: 0,\r\n        y: 0,\r\n        swidth: 576,\r\n        sheight: 1024,\r\n        width: 375,\r\n        height: 667,\r\n        // source: NOSOURCE,\r\n    },\r\n};\r\n\r\nconst buttons = {\r\n    gonext: {\r\n        x: 25,\r\n        y: 580,\r\n        width: 325,\r\n        height: 48,\r\n        caption: 'Далее',\r\n        backStyle: '#EB5717',\r\n        fontStyle: 'white',\r\n        fontsize: '18px',\r\n        font: 'Arial',\r\n    },\r\n};\r\n\n\n//# sourceURL=webpack://student/./src/game/params.js?");

/***/ }),

/***/ "./src/game/student.js":
/*!*****************************!*\
  !*** ./src/game/student.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Psb)\n/* harmony export */ });\n/* harmony import */ var _vkontakte_vk_bridge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vkontakte/vk-bridge */ \"./node_modules/@vkontakte/vk-bridge/dist/index.umd.js\");\n/* harmony import */ var _vkontakte_vk_bridge__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vkontakte_vk_bridge__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _engine_mathematics_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../engine/mathematics.js */ \"./src/engine/mathematics.js\");\n/* harmony import */ var _engine_game_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../engine/game.js */ \"./src/engine/game.js\");\n/* harmony import */ var _engine_source_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../engine/source.js */ \"./src/engine/source.js\");\n/* harmony import */ var _engine_scene_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../engine/scene.js */ \"./src/engine/scene.js\");\n/* harmony import */ var _engine_image_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../engine/image.js */ \"./src/engine/image.js\");\n/* harmony import */ var _engine_thebutton_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../engine/thebutton.js */ \"./src/engine/thebutton.js\");\n/* harmony import */ var _params_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./params.js */ \"./src/game/params.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n// import Button from '../engine/button.js';\r\n\r\n\r\n\r\n\r\nconst params = {};\r\nObject.entries(_params_js__WEBPACK_IMPORTED_MODULE_7__).forEach(([name, exported]) => params[name] = exported);\r\n\r\nclass Psb {\r\n\r\n    game;\r\n    resources;\r\n\r\n    constructor(selector, defaultWidth, defaultHeight) {\r\n        _vkontakte_vk_bridge__WEBPACK_IMPORTED_MODULE_0___default().send(\"VKWebAppInit\");\r\n        this.game = new _engine_game_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"](selector, defaultWidth, defaultHeight);\r\n        this.resources = document.getElementById('resources');\r\n    }\r\n\r\n    start() {\r\n        this.game.start();\r\n        this.setNullScene();\r\n    }\r\n\r\n    setNullScene() {\r\n        const scene = new _engine_scene_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"](params.LAYERS_COUNT);\r\n        scene.append(new _engine_image_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"](params.images.back), params.LAYER_BACK);\r\n\r\n        setTimeout(() => {\r\n            const goNext = new _engine_thebutton_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"](params.buttons.gonext);\r\n            goNext.setHandler(() => { \r\n                //alert(123);\r\n                this.school();\r\n            });\r\n            scene.append(goNext, params.LAYER_CONTROL);\r\n        }, 2000);\r\n\r\n        this.game.setScene(scene);\r\n    }\r\n\r\n    school() {\r\n        const scene = new _engine_scene_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"](params.LAYERS_COUNT);\r\n        const img = document.createElement('img');\r\n        img.src = 'img/school.png';\r\n        img.id = 'school';\r\n        resources.appendChild(img);\r\n        // img.addEventListener('load', () => alert(1));\r\n        params.images.school.source = new _engine_source_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"]('#school');\r\n        scene.append(new _engine_image_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"](params.images.school), params.LAYER_BACK);\r\n\r\n        img.decode()\r\n            .then(() => {\r\n\r\n                this.game.setScene(scene);\r\n\r\n            })\r\n            .catch(() => {\r\n                'error'\r\n            });\r\n    }\r\n\r\n}\r\n\n\n//# sourceURL=webpack://student/./src/game/student.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game_student_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game/student.js */ \"./src/game/student.js\");\n\n\n// let c = document.getElementById('c');\nconst student = new _game_student_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('#c', 375, 667); //c.getAttribute('width')\n\nstudent.start();\n\n\n//# sourceURL=webpack://student/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;