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

eval("!function(e,t){ true?t(exports):0}(this,function(e){\"use strict\";var a=function(){return(a=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)};function d(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var o=Array(e),r=0;for(t=0;t<n;t++)for(var p=arguments[t],i=0,a=p.length;i<a;i++,r++)o[r]=p[i];return o}function u(p,e){var o,r,i=(o={current:0,next:function(){return++this.current}},r={},{add:function(e,t){var n=null!=t?t:o.next();return r[n]=e,n},resolve:function(e,t,n){var o=r[e];o&&(n(t)?o.resolve(t):o.reject(t),r[e]=null)}});return e(function(e){if(e.detail&&e.detail.data&&\"object\"==typeof e.detail.data&&\"request_id\"in e.detail.data){var t=e.detail.data,n=t.request_id,o=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&\"function\"==typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]])}return n}(t,[\"request_id\"]);n&&i.resolve(n,o,function(e){return!(\"error_type\"in e)})}}),function(o,r){return void 0===r&&(r={}),new Promise(function(e,t){var n=i.add({resolve:e,reject:t},r.request_id);p(o,a(a({},r),{request_id:n}))})}}var t=\"undefined\"!=typeof window,l=Boolean(t&&window.AndroidBridge),b=Boolean(t&&window.webkit&&window.webkit.messageHandlers&&window.webkit.messageHandlers.VKWebAppClose),c=Boolean(t&&window.ReactNativeWebView&&\"function\"==typeof window.ReactNativeWebView.postMessage),f=t&&!l&&!b,n=f&&/(^\\?|&)vk_platform=mobile_web(&|$)/.test(location.search),A=f?\"message\":\"VKWebAppEvent\",W=d([\"VKWebAppInit\",\"VKWebAppGetCommunityAuthToken\",\"VKWebAppAddToCommunity\",\"VKWebAppAddToHomeScreenInfo\",\"VKWebAppClose\",\"VKWebAppCopyText\",\"VKWebAppCreateHash\",\"VKWebAppGetUserInfo\",\"VKWebAppSetLocation\",\"VKWebAppSendToClient\",\"VKWebAppGetClientVersion\",\"VKWebAppGetPhoneNumber\",\"VKWebAppGetEmail\",\"VKWebAppGetGroupInfo\",\"VKWebAppGetGeodata\",\"VKWebAppGetCommunityToken\",\"VKWebAppGetConfig\",\"VKWebAppGetLaunchParams\",\"VKWebAppSetTitle\",\"VKWebAppGetAuthToken\",\"VKWebAppCallAPIMethod\",\"VKWebAppJoinGroup\",\"VKWebAppLeaveGroup\",\"VKWebAppAllowMessagesFromGroup\",\"VKWebAppDenyNotifications\",\"VKWebAppAllowNotifications\",\"VKWebAppOpenPayForm\",\"VKWebAppOpenApp\",\"VKWebAppShare\",\"VKWebAppShowWallPostBox\",\"VKWebAppScroll\",\"VKWebAppShowOrderBox\",\"VKWebAppShowLeaderBoardBox\",\"VKWebAppShowInviteBox\",\"VKWebAppShowRequestBox\",\"VKWebAppAddToFavorites\",\"VKWebAppShowCommunityWidgetPreviewBox\",\"VKWebAppShowStoryBox\",\"VKWebAppStorageGet\",\"VKWebAppStorageGetKeys\",\"VKWebAppStorageSet\",\"VKWebAppFlashGetInfo\",\"VKWebAppSubscribeStoryApp\",\"VKWebAppOpenWallPost\",\"VKWebAppCheckAllowedScopes\",\"VKWebAppCheckNativeAds\",\"VKWebAppShowNativeAds\",\"VKWebAppRetargetingPixel\",\"VKWebAppConversionHit\",\"VKWebAppShowSubscriptionBox\",\"VKWebAppCheckSurvey\",\"VKWebAppShowSurvey\",\"VKWebAppScrollTop\",\"VKWebAppScrollTopStart\",\"VKWebAppScrollTopStop\"],f&&!n?[\"VKWebAppResizeWindow\",\"VKWebAppAddToMenu\",\"VKWebAppShowInstallPushBox\",\"VKWebAppGetFriends\"]:[\"VKWebAppShowImages\"]),w=t?window.AndroidBridge:void 0,V=b?window.webkit.messageHandlers:void 0,m=f?parent:void 0;var o,r,p,i,s;function K(e,t){var n=t||{bubbles:!1,cancelable:!1,detail:void 0},o=document.createEvent(\"CustomEvent\");return o.initCustomEvent(e,!!n.bubbles,!!n.cancelable,n.detail),o}(o=e.EAdsFormats||(e.EAdsFormats={})).REWARD=\"reward\",o.INTERSTITIAL=\"interstitial\",(r=e.EGrantedPermission||(e.EGrantedPermission={})).CAMERA=\"camera\",r.LOCATION=\"location\",r.PHOTO=\"photo\",(p=e.EGetLaunchParamsResponseLanguages||(e.EGetLaunchParamsResponseLanguages={})).RU=\"ru\",p.UK=\"uk\",p.UA=\"ua\",p.EN=\"en\",p.BE=\"be\",p.KZ=\"kz\",p.PT=\"pt\",p.ES=\"es\",(i=e.EGetLaunchParamsResponseGroupRole||(e.EGetLaunchParamsResponseGroupRole={})).ADMIN=\"admin\",i.EDITOR=\"editor\",i.MEMBER=\"member\",i.MODER=\"moder\",i.NONE=\"none\",(s=e.EGetLaunchParamsResponsePlatforms||(e.EGetLaunchParamsResponsePlatforms={})).DESKTOP_WEB=\"desktop_web\",s.MOBILE_WEB=\"mobile_web\",s.MOBILE_ANDROID=\"mobile_android\",s.MOBILE_ANDROID_MESSENGER=\"mobile_android_messenger\",s.MOBILE_IPHONE=\"mobile_iphone\",s.MOBILE_IPHONE_MESSENGER=\"mobile_iphone_messenger\",s.MOBILE_IPAD=\"mobile_ipad\",\"undefined\"==typeof window||window.CustomEvent||(window.CustomEvent=(K.prototype=Event.prototype,K));var v=function(n){var p=void 0,i=[];function e(e){i.push(e)}function t(){return b||l}function o(){return f&&window.parent!==window}function r(){return t()||o()}function a(t){if(b||l)return d(i).map(function(e){return e.call(null,t)});var e=null==t?void 0:t.data;if(f&&e){if(c&&\"string\"==typeof e)try{e=JSON.parse(e)}catch(e){}var n=e.type,o=e.data,r=e.frameId;n&&(\"SetSupportedHandlers\"!==n?\"VKWebAppSettings\"!==n?d(i).map(function(e){return e({detail:{type:n,data:o}})}):p=r:o.supportedHandlers)}}c&&/(android)/i.test(navigator.userAgent)?document.addEventListener(A,a):\"undefined\"!=typeof window&&\"addEventListener\"in window&&window.addEventListener(A,a);var s=u(function(e,t){w&&w[e]?w[e](JSON.stringify(t)):V&&V[e]&&\"function\"==typeof V[e].postMessage?V[e].postMessage(t):c?window.ReactNativeWebView.postMessage(JSON.stringify({handler:e,params:t})):m&&\"function\"==typeof m.postMessage&&m.postMessage({handler:e,params:t,type:\"vk-connect\",webFrameId:p,connectVersion:n},\"*\")},e);return{send:s,sendPromise:s,subscribe:e,unsubscribe:function(e){var t=i.indexOf(e);-1<t&&i.splice(t,1)},supports:function(e){return l?!(!w||\"function\"!=typeof w[e]):b?!(!V||!V[e]||\"function\"!=typeof V[e].postMessage):f&&-1<W.indexOf(e)},isWebView:t,isIframe:o,isEmbedded:r,isStandalone:function(){return!r()}}}(\"2.7.0\");e.applyMiddleware=function e(){for(var o=[],t=0;t<arguments.length;t++)o[t]=arguments[t];return o.includes(void 0)||o.includes(null)?e.apply(void 0,o.filter(function(e){return\"function\"==typeof e})):function(n){if(0===o.length)return n;var e,t={subscribe:n.subscribe,send:function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return n.send.apply(n,e)}};return e=o.filter(function(e){return\"function\"==typeof e}).map(function(e){return e(t)}).reduce(function(t,n){return function(e){return t(n(e))}})(n.send),a(a({},n),{send:e})}},e.default=v,Object.defineProperty(e,\"__esModule\",{value:!0})});\n//# sourceMappingURL=index.umd.js.map\n\n\n//# sourceURL=webpack://ballyball/./node_modules/@vkontakte/vk-bridge/dist/index.umd.js?");

/***/ }),

/***/ "./src/button.js":
/*!***********************!*\
  !*** ./src/button.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Button)\n/* harmony export */ });\n/* harmony import */ var _image_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./image.js */ \"./src/image.js\");\n\n\nclass Button extends _image_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n\n    handler = ()=>{};\n\n    constructor(params) {\n        super(params);\n    }\n\n    checkClick(data) {\n        if (data.x > this.params.x && data.x < this.params.x + this.params.width) {\n            if (data.y > this.params.y && data.y < this.params.y + this.params.height) {\n                this.getHandler()();\n            }\n        }\n    }\n\n    setHandler(handler) {\n        this.handler = handler;\n    }\n\n    getHandler() {\n        return this.handler;\n    }\n    \n}\n\n\n//# sourceURL=webpack://ballyball/./src/button.js?");

/***/ }),

/***/ "./src/canvas.js":
/*!***********************!*\
  !*** ./src/canvas.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Canvas)\n/* harmony export */ });\nclass Canvas {\n\n    SCALE = 10000;\n\n    c;\n    ctx;\n\n    clickCallback;\n    clickCallbackCaller;\n\n    left;\n    right;\n    width;\n    height;\n\n    mouse = {\n        over: {\n            x: null,\n            y: null\n        },\n        click: {\n            x: null,\n            y: null\n        },\n        pressed: false,\n        swipe: null\n    };\n\n    constructor(selector) {\n        this.c = document.querySelector(selector);\n        this.ctx = this.c.getContext('2d');\n\n        this.left = this.c.offsetLeft + this.c.clientLeft;\n        this.top = this.c.offsetTop + this.c.clientTop;\n\n        this.width = this.c.width;\n        this.height = this.c.height;\n    }\n\n    setClickCallback(callbackCaller, clickCallback) {\n        this.clickCallback = clickCallback;\n        this.clickCallbackCaller = callbackCaller;\n    }\n\n    getContext() {\n        return this.ctx;\n    }\n\n    addMouseListeners() {\n        this.c.addEventListener('mousedown', (event) => this.mousedownListener(event));\n        this.c.addEventListener('mouseup', (event) => this.mouseupListener(event));\n        this.c.addEventListener('mousemove', (event) => this.mousemoveListener(event));\n    }\n\n    mousedownListener(event) {\n        const x = event.pageX - this.left;\n        const y = event.pageY - this.top;\n\n        this.mouse.click.x = x;\n        this.mouse.click.y = y;\n        this.mouse.pressed = true;\n    }\n\n    mouseupListener(event) {\n        const x = event.pageX - this.left;\n        const y = event.pageY - this.top;\n\n        this.mouse.click.x = x;\n        this.mouse.click.y = y;\n        this.mouse.pressed = false;\n        console.log(this.mouse.click);\n\n        this.clickCallback.call(this.clickCallbackCaller, this.mouse.click);\n    }\n\n    mousemoveListener(event) {\n        const x = event.pageX - this.left;\n        const y = event.pageY - this.top;\n\n        if (this.mouse.pressed) {\n            this.mouse.swipe = x - this.mouse.over.x;\n        }\n\n        this.mouse.over.x = x;\n        this.mouse.over.y = y;\n    }\n\n    clearAll() {\n        this.ctx.clearRect(0, 0, this.width, this.height);\n    }\n\n}\n\n//# sourceURL=webpack://ballyball/./src/canvas.js?");

/***/ }),

/***/ "./src/choice.js":
/*!***********************!*\
  !*** ./src/choice.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Choice)\n/* harmony export */ });\n/* harmony import */ var _button_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./button.js */ \"./src/button.js\");\n/* harmony import */ var _text_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./text.js */ \"./src/text.js\");\n\n\n\nclass Choice extends _button_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n\n    correct = false;\n    caption = '';\n\n    constructor(params) {\n        super(params);\n\n        this.params.source = params.purpleSource;\n    }\n\n    draw(ctx) {\n        super.draw(ctx);\n        this.caption.draw(ctx);\n        \n        // ctx.drawImage(this.params.redSource.getIt(), \n        //     this.sx, this.sy, this.sw, this.sh,\n        //     this.params.x, this.params.y, this.params.width, this.params.height);\n    }\n\n    setCaption(captionText, font) {\n        let caption = new _text_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](captionText, this.params.x + 20, this.params.y + 32);\n        caption.setColor('#fff');\n        const size = (captionText.length < 16) ? '20px ' : '14px ';\n        caption.setFont(size + font);\n        this.caption = caption;\n    }\n\n    setCorrect(correct) {\n        this.correct = correct;\n    }\n\n    isCorrect() {\n        return this.correct;\n    }\n\n    setKnown(isKnown) {\n        if (isKnown) {\n            this.params.source = (this.isCorrect()) ? this.params.greenSource : this.params.redSource;\n        } else {\n            this.params.source = this.params.purpleSource;\n        }\n    }\n\n}\n\n\n//# sourceURL=webpack://ballyball/./src/choice.js?");

/***/ }),

/***/ "./src/entity.js":
/*!***********************!*\
  !*** ./src/entity.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Entity)\n/* harmony export */ });\nclass Entity {\n\n    constructor() {}\n\n    checkClick() {}\n\n    draw() {}\n\n}\n\n//# sourceURL=webpack://ballyball/./src/entity.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Game)\n/* harmony export */ });\n/* harmony import */ var _canvas_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./canvas.js */ \"./src/canvas.js\");\n\n\nclass Game {\n\n    FPS = 50;\n\n    screen;\n\n    scene;\n\n    timers = {\n        render: null\n    };\n\n    constructor(canvasSelector) {\n        this.screen = new _canvas_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](canvasSelector);\n        this.screen.setClickCallback(this, this.clickCallback);\n    }\n\n    clickCallback(data) {\n        this.scene.click(data);\n    }\n\n    start() {\n        this.initTimers()\n            .initListeners();\n    }\n\n    initTimers() {\n        this.timers.render = setInterval(() => this.scene.render(this.screen), 1000 / this.FPS);\n\n        return this;\n    }\n\n    initListeners() {\n        this.screen.addMouseListeners();\n\n        return this;\n    }\n\n    setScene(scene) {\n        this.scene = scene;\n    }\n\n    getScene() {\n        return this.scene;\n    }\n}\n\n//# sourceURL=webpack://ballyball/./src/game.js?");

/***/ }),

/***/ "./src/image.js":
/*!**********************!*\
  !*** ./src/image.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Image)\n/* harmony export */ });\n/* harmony import */ var _entity_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./entity.js */ \"./src/entity.js\");\n\n\nclass Image extends _entity_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n\n    params;\n    sx;\n    sy;\n    sw;\n    sh;\n\n    constructor(params) {\n        super();\n\n        this.params = params;\n        this.sx = (typeof this.params.sx !== 'undefined') ? this.params.sx : this.params.x;\n        this.sy = (typeof this.params.sy !== 'undefined') ? this.params.sy : this.params.y;\n        this.sw = this.params.swidth || this.params.width;\n        this.sh = this.params.sheight || this.params.height;\n    }\n\n    draw(ctx) {\n        ctx.drawImage(this.params.source.getIt(), \n            this.sx, this.sy, this.sw, this.sh,\n            this.params.x, this.params.y, this.params.width, this.params.height);\n    }\n\n}\n\n//# sourceURL=webpack://ballyball/./src/image.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _quiz_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./quiz.js */ \"./src/quiz.js\");\n\n\nconst quiz = new _quiz_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n\nquiz.start();\n\n\n//# sourceURL=webpack://ballyball/./src/index.js?");

/***/ }),

/***/ "./src/mathematics.js":
/*!****************************!*\
  !*** ./src/mathematics.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Mathematics)\n/* harmony export */ });\nclass Mathematics {\n\n    constructor() {}\n\n    static getRandomInteger(min, max, exclusion = []) {\n        let rand = Math.round(min - 0.5 + Math.random() * (max - min + 1));\n        return exclusion.includes(rand) ? this.getRandomInteger(min, max, exclusion) : rand;\n    }\n\n}\n\n//# sourceURL=webpack://ballyball/./src/mathematics.js?");

/***/ }),

/***/ "./src/params.js":
/*!***********************!*\
  !*** ./src/params.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"LAYERS_COUNT\": () => (/* binding */ LAYERS_COUNT),\n/* harmony export */   \"LAYER_BACK\": () => (/* binding */ LAYER_BACK),\n/* harmony export */   \"LAYER_CHARACTER\": () => (/* binding */ LAYER_CHARACTER),\n/* harmony export */   \"LAYER_CONTROL\": () => (/* binding */ LAYER_CONTROL),\n/* harmony export */   \"LAYER_IMAGE\": () => (/* binding */ LAYER_IMAGE),\n/* harmony export */   \"backSource\": () => (/* binding */ backSource),\n/* harmony export */   \"buttonParams\": () => (/* binding */ buttonParams),\n/* harmony export */   \"choiceParams\": () => (/* binding */ choiceParams),\n/* harmony export */   \"greenBtnSource\": () => (/* binding */ greenBtnSource),\n/* harmony export */   \"hintSource\": () => (/* binding */ hintSource),\n/* harmony export */   \"imageParams\": () => (/* binding */ imageParams),\n/* harmony export */   \"mainmenuSource\": () => (/* binding */ mainmenuSource),\n/* harmony export */   \"purpleBtnSource\": () => (/* binding */ purpleBtnSource),\n/* harmony export */   \"questions\": () => (/* binding */ questions),\n/* harmony export */   \"redBtnSource\": () => (/* binding */ redBtnSource),\n/* harmony export */   \"reloadSource\": () => (/* binding */ reloadSource),\n/* harmony export */   \"scoresSource\": () => (/* binding */ scoresSource),\n/* harmony export */   \"shareSource\": () => (/* binding */ shareSource),\n/* harmony export */   \"stSource\": () => (/* binding */ stSource)\n/* harmony export */ });\n/* harmony import */ var _source_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./source.js */ \"./src/source.js\");\n\n\nconst LAYER_BACK = 1;\nconst LAYER_IMAGE = 2;\nconst LAYER_CHARACTER = 3;\nconst LAYER_CONTROL = 4;\n\nconst LAYERS_COUNT = 5;\n\nconst mainmenuSource = new _source_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('#mainmenu');\nconst backSource = new _source_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('#back');\nconst scoresSource = new _source_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('#scores');\nconst reloadSource = new _source_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('#reload');\nconst shareSource = new _source_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('#share');\nconst hintSource = new _source_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('#hint');\n\nconst redBtnSource = new _source_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('#redbutton');\nconst greenBtnSource = new _source_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('#greenbutton');\nconst purpleBtnSource = new _source_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('#purplebutton');\n\nconst stSource = new _source_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('#st');\n\nconst questions = [\n    {f: '0.png', q: 'В какой стране находится Стоунхендж?', a: 2, v: ['Чехия', 'Австралия', 'Англия', 'Испания']},\n    {f: '1.png', q: 'На поверхности чего рисуют в жанре Эбру?', a: 0, v: ['Вода', 'Керамика', 'Стекло', 'Мед']},\n    {f: '2.png', q: 'Что это за цветы?', a: 3, v: ['Голубой лотос', 'Мимоза', 'Бегония', 'Гортензия']},\n    {f: '3.png', q: 'Кем была Анна Керн?', a: 1, v: ['Женой декабриста', 'Музой поэта', 'Любовницей Николая I', 'Первой женщиной-химиком']},\n    {f: '4.png', q: 'В какой сфере работал Циолковский?', a: 0, v: ['Космонавтика', 'Медицина', 'Философия', 'Физика']},\n    {f: '5.png', q: 'Как звали этого кардинала?', a: 2, v: ['Карафа', 'Альбани', 'Мазарини', 'Ришельё']},\n    {f: '6.png', q: 'Кто написал роман \"Над пропостью во ржи\"?', a: 2, v: ['Р. Бредбери', 'У. Фолкнер', 'Д.Д. Сэлинджер', 'Д. Стейнбек']},\n    {f: '7.png', q: 'Что это за птица?', a: 0, v: ['Свиристель', 'Кряква', 'Чиж', 'Зимородок']},\n    {f: '8.png', q: 'Что обозначает этот математический знак?', a: 3, v: ['Производная', 'Факториал', 'Синус', 'Интеграл']},\n    {f: '9.png', q: 'Как называется этот прибор?', a: 2, v: ['Часы', 'Компасс', 'Логарифмическая линейка', 'Лаглинь']},\n    {f: '10.png', q: 'Как звали первого царя из династии Романовых?', a: 1, v: ['Николай', 'Михаил', 'Федор', 'Петр']},\n    {f: '11.png', q: 'Как называется это созвездие?', a: 1, v: ['Орион', 'Кассиопея', 'Большая Медведица', 'Большой пёс']},\n    {f: '12.png', q: 'Как называется старинная техника золочения?', a: 1, v: ['Шпиатр', 'Ормулю', 'Маркетри', 'Интарсия']},\n    {f: '13.png', q: 'Что это за блюдо?', a: 1, v: ['Сациви', 'Хачапури', 'Чурчхела', 'Лобио']},\n    {f: '14.png', q: 'В честь какого инженера назван метод построения кривых?', a: 2, v: ['Ж.-Б. Беланже', 'М. Депре', 'П.Э. Безье', 'К. Адер']}\n];\n\nconst buttonParams = {\n    newGame: {\n        sx: 160,\n        sy: 160,\n        x: 160,\n        y: 160,\n        width: 276,\n        height: 83,\n        source: mainmenuSource\n    },\n    statistic: {\n        sx: 192,\n        sy: 257,\n        x: 192,\n        y: 354,\n        width: 215,\n        height: 83,\n        source: mainmenuSource\n    },\n    friends: {\n        sx: 192,\n        sy: 354,\n        x: 192,\n        y: 257,\n        width: 215,\n        height: 83,\n        source: mainmenuSource\n    },\n    reload: {\n        sx: 259,\n        sy: 290,\n        x: 200,\n        y: 290,\n        width: 80,\n        height: 80,\n        source: reloadSource\n    },\n    share: {\n        sx: 259,\n        sy: 290,\n        x: 310,\n        y: 290,\n        width: 80,\n        height: 80,\n        source: shareSource\n    },\n    hint: {\n        sx: 0,\n        sy: 0,\n        x: 100,\n        y: 550,\n        width: 400,\n        height: 26,\n        source: hintSource\n    },\n};\n\nconst choiceParams = {\n    choice: [{\n        sx: 0,\n        sy: 0,\n        x: 55,\n        y: 400,\n        width: 227,\n        height: 48,\n        redSource: redBtnSource,\n        greenSource: greenBtnSource,\n        purpleSource: purpleBtnSource,\n        n: 0\n    },\n    {\n        sx: 0,\n        sy: 0,\n        x: 310,\n        y: 400,\n        width: 227,\n        height: 48,\n        redSource: redBtnSource,\n        greenSource: greenBtnSource,\n        purpleSource: purpleBtnSource,\n        n: 1\n    },\n    {\n        sx: 0,\n        sy: 0,\n        x: 55,\n        y: 470,\n        width: 227,\n        height: 48,\n        redSource: redBtnSource,\n        greenSource: greenBtnSource,\n        purpleSource: purpleBtnSource,\n        n: 2\n    },\n    {\n        sx: 0,\n        sy: 0,\n        x: 310,\n        y: 470,\n        width: 227,\n        height: 48,\n        redSource: redBtnSource,\n        greenSource: greenBtnSource,\n        purpleSource: purpleBtnSource,\n        n: 3\n    }]\n};\n\nconst imageParams = {\n    back: {\n        sx: 0,\n        sy: 0,\n        x: 0,\n        y: 0,\n        width: 600,\n        height: 600,\n        source: backSource\n    },\n    scores: {\n        sx: 155,\n        sy: 155,\n        x: 155,\n        y: 155,\n        width: 280,\n        height: 280,\n        source: scoresSource\n    },\n    st: {\n        sx: 0,\n        sy: 0,\n        x: 130,\n        y: 80,\n        swidth: 1000,\n        sheight: 760,\n        width: 333,\n        height: 253,\n        source: stSource\n    }\n};\n\n\n//# sourceURL=webpack://ballyball/./src/params.js?");

/***/ }),

/***/ "./src/quiz.js":
/*!*********************!*\
  !*** ./src/quiz.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Quiz)\n/* harmony export */ });\n/* harmony import */ var _vkontakte_vk_bridge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vkontakte/vk-bridge */ \"./node_modules/@vkontakte/vk-bridge/dist/index.umd.js\");\n/* harmony import */ var _vkontakte_vk_bridge__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vkontakte_vk_bridge__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mathematics_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mathematics.js */ \"./src/mathematics.js\");\n/* harmony import */ var _game_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./game.js */ \"./src/game.js\");\n/* harmony import */ var _scene_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scene.js */ \"./src/scene.js\");\n/* harmony import */ var _button_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./button.js */ \"./src/button.js\");\n/* harmony import */ var _image_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./image.js */ \"./src/image.js\");\n/* harmony import */ var _text_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./text.js */ \"./src/text.js\");\n/* harmony import */ var _choice_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./choice.js */ \"./src/choice.js\");\n/* harmony import */ var _params_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./params.js */ \"./src/params.js\");\n\n\n\n\n\n\n\n\n\n\nObject.entries(_params_js__WEBPACK_IMPORTED_MODULE_8__).forEach(([name, exported]) => window[name] = exported);\n\nclass Quiz {\n\n    game;\n\n    level;\n    maxlevel = 3;\n    levelTime = 15;\n    levelTimer;\n    levelSecondTimer;\n\n    question;\n    choices;\n    right;\n    exclusions;\n\n    hint;\n    hintTimer;\n\n    levelSecondText;\n\n    defaultFont = 'Arial';\n\n    constructor() {\n        _vkontakte_vk_bridge__WEBPACK_IMPORTED_MODULE_0___default().send(\"VKWebAppInit\", {});\n        this.game = new _game_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]('#c');\n    }\n\n    start() {\n        this.mainMenu();\n        this.game.start();\n    }\n\n    mainMenu() {\n        const mainMenu = new _scene_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"](LAYERS_COUNT);\n        mainMenu.append(new _image_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"](imageParams.back), LAYER_BACK);\n\n        const newGameButton = new _button_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"](buttonParams.newGame);\n        newGameButton.setHandler(() => this.newGame());\n        mainMenu.append(newGameButton, LAYER_CONTROL);\n\n        const friendsButton = new _button_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"](buttonParams.friends);\n        friendsButton.setHandler(() => {\n            _vkontakte_vk_bridge__WEBPACK_IMPORTED_MODULE_0___default().send(\"VKWebAppShowInviteBox\", {})\n                .then(data => console.log(data.success))  \n                .catch(error => console.log(error));\n        });\n        mainMenu.append(friendsButton, LAYER_CONTROL);\n\n        this.game.setScene(mainMenu);\n    }\n\n    newGame() {\n        this.level = 0;\n        this.right = 0;\n        this.exclusions = [];\n        this.newLevel();\n    }\n\n    newLevel() {\n\n        _vkontakte_vk_bridge__WEBPACK_IMPORTED_MODULE_0___default().send('VKWebAppCheckNativeAds', { ad_format: 'reward' })\n            .then((data) => {\n                if (data.result) {\n                    // Предзагруженная реклама есть.\n        \n                    // Теперь можно создать кнопку\n                    // \"Прокачать героя за рекламу\".   \n                    // ...\n                    \n                } else {\n                    console.log('Рекламные материалы не найдены.');\n                }\n            })\n            .catch((error) => { console.log(error); /* Ошибка */  });\n\n        this.level++;\n\n        const battleScene = new _scene_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"](LAYERS_COUNT);\n\n        if (!window.location.hostname.includes('.test') && !window.location.hostname.includes('911.github.io')) {\n            return false;\n        }\n\n        battleScene.append(new _image_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"](imageParams.back), LAYER_BACK);\n\n        const levelCount = this.level + '/' + this.maxlevel;\n        let levelCountText = new _text_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"](levelCount, 30, 50);\n        levelCountText.setFont('25px ' + this.defaultFont);\n        battleScene.append(levelCountText, LAYER_CHARACTER);\n\n        this.levelTimer = setTimeout(() => this.endLevel(), this.levelTime*1000);\n\n        this.levelSecondText = new _text_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"](this.levelTime-1, 550, 50);\n        this.levelSecondText.setFont('25px ' + this.defaultFont);\n        battleScene.append(this.levelSecondText, LAYER_CHARACTER);\n        this.levelSecondTimer = setInterval(() => \n            this.levelSecondText.setText( parseInt(this.levelSecondText.getText())-1 ), \n        1000);\n\n        const questionNumber = _mathematics_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getRandomInteger(0, questions.length-1, this.exclusions);\n        this.question = questions[questionNumber];\n        this.exclusions.push(questionNumber);\n\n        document.getElementById('st').src = 'pics/' + this.question.f;\n        battleScene.append(new _image_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"](imageParams.st), LAYER_IMAGE);\n\n        const questionFontSize = (this.question.q.length < 20) ? '24px' : '18px';\n        let questionCaption = new _text_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"](this.question.q, 75, 370);\n        questionCaption.setColor('#fff');\n        questionCaption.setFont(questionFontSize + ' ' + this.defaultFont);\n        battleScene.append(questionCaption, LAYER_CONTROL);\n\n        this.choices = [];\n        for (let i = 0; i < 4; i++) {\n            let choice = new _choice_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"](choiceParams.choice[i]);\n            choice.setHandler(() => this.choose(choice));\n            choice.setCaption(this.question.v[i], this.defaultFont);\n            choice.setCorrect(this.question.a === i);\n            this.choices.push(choice);\n            battleScene.append(choice, LAYER_CONTROL);\n        }\n\n        this.hintTimer = setTimeout(() => {\n            this.hint = new _button_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"](buttonParams.hint);\n            this.hint.setHandler(() => this.useHint());\n            battleScene.append(this.hint, LAYER_CONTROL);\n        }, 5000);\n\n        this.game.setScene(battleScene);\n    }\n\n    useHint() {\n        clearTimeout(this.levelTimer);\n        clearInterval(this.levelSecondTimer);\n        let seconds = parseInt(this.levelSecondText.getText());\n        _vkontakte_vk_bridge__WEBPACK_IMPORTED_MODULE_0___default().send('VKWebAppShowNativeAds', { ad_format: 'reward' })\n        .then((data) => {\n          /*if (data.result) // Успех\n            console.log('Реклама показана');\n          else // Ошибка \n            console.log('Ошибка при показе');*/\n\n            if (data.result) {\n                const first = _mathematics_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getRandomInteger(0, 3, [this.question.a]);\n                const second = _mathematics_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getRandomInteger(0, 3, [this.question.a, first]);\n                this.game.getScene().remove(this.hint);\n                this.game.getScene().remove(this.choices[first]);\n                this.game.getScene().remove(this.choices[second]);\n            }\n\n            this.levelTimer = setTimeout(() => this.endLevel(), this.levelTime*1000);\n            this.levelSecondTimer = setInterval(() => \n                this.levelSecondText.setText( parseInt(this.levelSecondText.getText())-1 ), \n            1000);\n\n        })\n        .catch((error) => { console.log(error); /* Ошибка */ });\n    }\n\n    choose(choice) {\n        if (choice.isCorrect()) {\n            this.right++;\n        }\n\n        this.endLevel();\n    }\n\n    endLevel() {\n        clearInterval(this.hintTimer);\n        clearInterval(this.levelTimer);\n        clearInterval(this.levelSecondTimer);\n\n        this.game.getScene().remove(this.hint);\n\n        this.choices.forEach((c) => {\n            c.setKnown(true);\n            c.setHandler(() => {});\n        });\n        setTimeout(() => {\n            if (this.level < this.maxlevel) {\n                this.newLevel()\n            } else {\n                this.endGame();\n            }\n        }, 2000);\n    }\n\n    endGame() {\n        const scoreScene = new _scene_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"](LAYERS_COUNT);\n\n        scoreScene.append(new _image_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"](imageParams.back), LAYER_BACK);\n        scoreScene.append(new _image_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"](imageParams.scores), LAYER_IMAGE);\n\n        const result = new _text_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"]('Правильно: ' + this.right + '/' + this.maxlevel, 220, 235);\n        result.setFont('20px ' + this.defaultFont);\n        scoreScene.append(result, LAYER_CHARACTER);\n\n        const reloadButton = new _button_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"](buttonParams.reload);\n        reloadButton.setHandler(() => this.newGame());\n        scoreScene.append(reloadButton, LAYER_CONTROL);\n\n        const shareButton = new _button_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"](buttonParams.share);\n        shareButton.setHandler(() => {\n            const message = 'Я отгадал в этой игре ' + this.right + ' из ' + this.maxlevel + '! А сколько сможешь ты?';\n            _vkontakte_vk_bridge__WEBPACK_IMPORTED_MODULE_0___default().send('VKWebAppShowWallPostBox', {\n                message: message,\n                attachments: 'https://vk.com/app51468587'\n            })\n            .then((data) => { \n                if (data.post_id) {\n                    // console.log(data.post_id);\n                }\n            })\n            .catch((error) => {\n                // console.log(error);\n            });\n        });\n        scoreScene.append(shareButton, LAYER_CONTROL);\n\n        this.game.setScene(scoreScene);\n    }\n}\n\n//# sourceURL=webpack://ballyball/./src/quiz.js?");

/***/ }),

/***/ "./src/scene.js":
/*!**********************!*\
  !*** ./src/scene.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Scene)\n/* harmony export */ });\nclass Scene {\n\n    entities = [];\n\n\n    constructor(layersCount) {\n        for (let i = 0; i < layersCount; i++) {\n            this.entities.push([]);\n        }\n    }\n\n    append(entity, layer) {\n        this.entities[layer].push(entity);\n    }\n\n    click(data) {\n        for (const layer of this.entities) {\n            for (const entity of layer) {\n                entity.checkClick(data);\n            }\n        }\n    }\n\n    render(screen) {\n        screen.clearAll();\n\n        for (const layer of this.entities) {\n            for (const entity of layer) {\n                entity.draw(screen.getContext());\n            }\n        }\n    }\n\n    remove(entity) {\n        for (let i = 0; i < this.entities.length; i++) {\n            for (let j = 0; j < this.entities[i].length; j++) {\n                if (this.entities[i][j] === entity) {\n                    this.entities[i].splice(j, 1);\n                }\n            }\n        }\n    }\n}\n\n//# sourceURL=webpack://ballyball/./src/scene.js?");

/***/ }),

/***/ "./src/source.js":
/*!***********************!*\
  !*** ./src/source.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Source)\n/* harmony export */ });\nclass Source {\n\n    it;\n\n    constructor(query) {\n        this.it = document.querySelector(query);\n    }\n\n    getIt() {\n        return this.it;\n    }\n\n}\n\n//# sourceURL=webpack://ballyball/./src/source.js?");

/***/ }),

/***/ "./src/text.js":
/*!*********************!*\
  !*** ./src/text.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Text)\n/* harmony export */ });\n/* harmony import */ var _entity_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./entity.js */ \"./src/entity.js\");\n\n\nclass Text extends _entity_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n\n    text;\n    x;\n    y;\n    fillColor = 'white';\n    font = '12px serif';\n\n    constructor(text, x, y) {\n        super();\n\n        this.text = text;\n        this.x = x;\n        this.y = y;\n    }\n\n    draw(ctx) {\n        ctx.fillStyle = this.fillColor;\n        ctx.font = this.font;\n        ctx.fillText(this.text, this.x, this.y);\n    }\n\n    setColor(color) {\n        this.fillColor = color;\n    }\n\n    setFont(font) {\n        this.font = font;\n    }\n\n    setText(newText) {\n        this.text = newText;\n    }\n\n    getText(newText) {\n        return this.text;\n    }\n\n}\n\n//# sourceURL=webpack://ballyball/./src/text.js?");

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