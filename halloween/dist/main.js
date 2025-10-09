/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/engine/button.js":
/*!******************************!*\
  !*** ./src/engine/button.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Button)\n/* harmony export */ });\n/* harmony import */ var _image_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./image.js */ \"./src/engine/image.js\");\n\n\nclass Button extends _image_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n\n    handler = ()=>{};\n\n    constructor(params) {\n        super(params);\n    }\n\n    checkClick(data) {\n        if (data.x > this.params.x && data.x < this.params.x + this.params.width) {\n            if (data.y > this.params.y && data.y < this.params.y + this.params.height) {\n                this.getHandler()();\n            }\n        }\n    }\n\n    setHandler(handler) {\n        this.handler = handler;\n    }\n\n    getHandler() {\n        return this.handler;\n    }\n    \n}\n\n\n//# sourceURL=webpack://halloweengame/./src/engine/button.js?\n}");

/***/ }),

/***/ "./src/engine/canvas.js":
/*!******************************!*\
  !*** ./src/engine/canvas.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Canvas)\n/* harmony export */ });\nclass Canvas {\n\n    SCALE = 10000;\n    QUALITY = 1; /* 1.6 */\n\n    c;\n    ctx;\n\n    filter;\n\n    clickCallback;\n    clickCallbackCaller;\n\n    mousedownCallback;\n    mousedownCallbackCaller;\n\n    mousemoveCallback;\n    mousemoveCallbackCaller;\n\n    left;\n    right;\n    width;\n    height;\n\n    defaultWidth;\n    defaultHeight;\n\n    screenWidth;\n\n    mouse = {\n        over: {\n            x: null,\n            y: null\n        },\n        click: {\n            x: null,\n            y: null\n        },\n        pressed: false,\n        swipe: null\n    };\n\n    constructor(selector = '#c', defaultWidth = 500, defaultHeight = 500) {\n        this.c = document.querySelector(selector);\n        this.defaultWidth = defaultWidth;\n        this.defaultHeight = defaultHeight;\n        this.ctx = this.c.getContext('2d');\n    \n        //this.checkBorders();\n        // this.fixDpi();\n        this.fixDpiNew();\n        this.screenWidth = window.screen.width;\n        this.smesh = 0;\n        if (typeof window.TelegramWebview !== 'undefined' || typeof window.TelegramWebviewProxyProto !== 'undefined') {\n            this.smesh = 200;\n        }\n        // this.screenWidth - 375\n        //alert(this.smesh);\n        this.checkBorders();\n        setInterval(() => this.checkBorders(), 100);\n \n        // window.addEventListener(\"resize\", this.fixDpiNew());\n    }\n\n    fixDpi = () => {\n        const dpi = window.devicePixelRatio;\n        const styles = window.getComputedStyle(this.c);\n        \n        // create a style object that returns width and height\n        const style = {\n          height() {\n            return +styles.height.slice(0, -2);\n          },\n          width() {\n            return +styles.width.slice(0, -2);\n          }\n        };\n        \n        // set the correct canvas attributes for device dpi\n        this.c.setAttribute('width', (style.width() * dpi).toString()); //\n        this.c.setAttribute('height', (style.height() * dpi).toString()); //\n        // this.width = (style.width() * dpi).toString();\n        // this.height = (style.height() * dpi).toString();\n    }\n\n    fixDpiNew = () => {\n        // Get the DPR and size of the canvas\n        let dpr = window.devicePixelRatio * this.QUALITY;\n        const rect = this.c.getBoundingClientRect();\n\n        // Set the \"actual\" size of the canvas\n        this.c.width = rect.width * dpr;\n        this.c.height = rect.height * dpr;\n\n        // Scale the context to ensure correct drawing operations\n        this.ctx.scale(dpr, dpr);\n\n        // Set the \"drawn\" size of the canvas\n        // this.c.style.width = this.c.getAttribute('data-width'); //'263px'; //`${rect.width*0.7}px`;\n        // this.c.style.height = this.c.getAttribute('data-height'); //'467px'; //`${rect.height*0.7}px`;\n        \n        //console.log(window.innerWidth);\n        if (window.innerWidth > 450) {\n            let tmpheight = this.c.getAttribute('data-height');\n            if (tmpheight) {\n                this.c.style.width = this.c.getAttribute('data-width');\n                this.c.style.height = this.c.getAttribute('data-height');\n            } else {\n                this.c.style.height = '95vh';\n            }\n        } else {\n            this.c.style.width = '100%';\n            this.c.style.aspectRatio = window.innerWidth + '/' + window.innerHeight;\n            //this.c.style.width = '100vw';\n           // this.c.style.height = '100%'; // 'calc(100vh - calc(100vh - 100%))';//'100vh';\n        }\n    }\n\n    checkBorders() {\n        this.left = this.c.offsetLeft + this.c.clientLeft;\n        this.top = this.c.offsetTop + this.c.clientTop;\n\n        this.width = this.c.offsetWidth;\n        this.height = this.c.offsetHeight;\n        // this.fixDpi();\n        //console.log(typeof window.TelegramWebview + '!' + window.TelegramWebviewProxyProto);\n        if (parseInt(this.screenWidth) < '451' && (typeof window.TelegramWebview !== 'undefined' || typeof window.TelegramWebviewProxyProto !== 'undefined')) {\n            const overflow = 200\n            document.body.style.overflowX = 'hidden'\n            document.body.style.marginLeft = `${overflow}px`\n            document.body.style.width = window.innerWidth + overflow + \"px\" //\n            document.body.style.paddingRight = `${overflow}px`\n            // window.scrollTo(overflow, 0)\n            window.scrollTo({\n                top: 0,\n                left: overflow,\n                behavior: 'instant'\n            });\n\n            document.getElementsByClassName('inner')[0].style.touchAction = 'none';\n            document.getElementsByClassName('inner')[0].style.position = 'fixed';\n            document.getElementsByClassName('inner')[0].style.left = '0';\n            document.getElementsByClassName('inner')[0].style.width = this.screenWidth+'px';\n\n            // document.getElementsByTagName('canvas')[0].style.position = 'absolute';\n            // document.getElementsByTagName('canvas')[0].style.left = '0';\n            // document.getElementsByTagName('canvas')[0].style.width = '100vw';\n        }\n    }\n\n    setClickCallback(callbackCaller, clickCallback) {\n        this.clickCallback = clickCallback;\n        this.clickCallbackCaller = callbackCaller;\n    }\n\n    setMousedownCallback(callbackCaller, mousedownCallback) {\n        this.mousedownCallback = mousedownCallback;\n        this.mousedownCallbackCaller = callbackCaller;\n    }\n\n    setMousemoveCallback(callbackCaller, mousemoveCallback) {\n        this.mousemoveCallback = mousemoveCallback;\n        this.mousemoveCallbackCaller = callbackCaller;\n    }\n\n    getContext() {\n        return this.ctx;\n    }\n\n    addMouseListeners() {\n        //const isFf = navigator.userAgent.toLowerCase().includes('ozilla') && (window.screen.width < 451);\n        // alert(navigator.userAgent);\n        this.c.addEventListener('mousedown', (event) => this.mousedownListener(event));\n        //if (!isFf) {\n            this.c.addEventListener('touchstart', (event) => this.mousedownListener(event));\n        //}\n        this.c.addEventListener('mouseup', (event) => this.mouseupListener(event));\n        //if (!isFf) {\n            this.c.addEventListener('touchend', (event) => this.mouseupListener(event));\n        //}\n        this.c.addEventListener('mousemove', (event) => this.mousemoveListener(event));\n        //if (!isFf) {\n            this.c.addEventListener('touchmove', (event) => this.mousemoveListener(event));\n        //}\n    }\n\n    mousedownListener(event) {\n        let pageX, pageY;\n        if (event.type === 'touchstart') {\n            const screenWidth = window.screen.width;\n            if (parseInt(screenWidth) < '451') {\n                pageX = event.touches[0].pageX - this.smesh;\n                pageY = event.touches[0].pageY;\n            }\n        } else {\n            pageX = event.pageX;\n            pageY = event.pageY;\n        }\n\n        let x = pageX - this.left;\n        let y = pageY - this.top;\n\n        //\n        x = x / this.width * this.defaultWidth;\n        y = y / this.height * this.defaultHeight;\n        //\n        // console.log(event);\n\n        this.mouse.click.x = x;\n        this.mouse.click.y = y;\n        this.mouse.pressed = true;\n\n        // if (event.type == 'touchend' || event.type == 'touchstart') {\n        //     this.mouse.click.x += 100;\n        // }\n\n        // console.log(event.type + this.mouse.click.x)\n\n        this.mousedownCallback.call(this.mousedownCallbackCaller, this.mouse.click);\n    }\n\n    mouseupListener(event) {\n        event.preventDefault();\n        let pageX, pageY;\n        if (event.type === 'touchend') {\n            const screenWidth = window.screen.width;\n            if (parseInt(screenWidth) < '451') {\n                pageX = event.changedTouches[0].pageX - this.smesh;\n                pageY = event.changedTouches[0].pageY;\n            }\n            // pageX = event.touches[0].pageX;\n            // pageY = event.touches[0].pageY;\n        } else {\n            pageX = event.pageX;\n            pageY = event.pageY;\n        }\n\n        //if (event.type !== 'touchend') {\n            let x = pageX - this.left;\n            let y = pageY - this.top;\n\n            x = x / this.width * this.defaultWidth;\n            y = y / this.height * this.defaultHeight;\n\n            this.mouse.click.x = x;\n            this.mouse.click.y = y;\n        //}\n        //alert(window.screen.width);\n\n        // console.log(event.type);\n        // console.log(event.changedTouches[0].pageX-100);\n        // if (event.type == 'touchend' || event.type == 'touchstart') {\n        //     this.mouse.click.x += 100;\n        // }\n       // alert(document.body.style.width);\n        //alert(event.type + ' ! ' +this.mouse.click.x + ' ! ' + screenWidth + '&' + this.left + ':' + this.width +'~'+ this.defaultWidth);\n\n        this.mouse.pressed = false;\n\n        this.clickCallback.call(this.clickCallbackCaller, this.mouse.click);\n    }\n\n    mousemoveListener(event) {\n        let pageX, pageY;\n        if (event.type === 'touchmove') {\n            // console.log(event.touches);\n            const screenWidth = window.screen.width;\n            if (parseInt(screenWidth) < '451') {\n                pageX = event.touches[0].pageX - this.smesh;\n                pageY = event.touches[0].pageY;\n            }\n        } else {\n            pageX = event.pageX;\n            pageY = event.pageY;\n        }\n\n        let x = pageX - this.left;\n        let y = pageY - this.top;\n\n        //\n        x = x / this.width * this.defaultWidth;\n        y = y / this.height * this.defaultHeight;\n        //\n        //console.log('move x:' + Math.round(x) + ' y:' + Math.round(y));\n\n        if (this.mouse.pressed) {\n            this.mouse.swipe = x - this.mouse.over.x;\n            this.mouse.swipeY = y - this.mouse.over.y;\n        }\n\n        this.mouse.over.x = x;\n        this.mouse.over.y = y;\n\n        // if (event.type == 'touchend' || event.type == 'touchstart') {\n        //     this.mouse.over.x += 100;\n        // }\n        // this.mouse.over.x -= 100;\n        //console.log(this.mouse.over.x);\n\n        this.mousemoveCallback.call(this.mousemoveCallbackCaller, this.mouse);\n    }\n\n    clearAll() {\n        this.ctx.clearRect(0, 0, this.width, this.height);\n    }\n\n    setFilter(filter) {\n        this.filter = filter;\n    }\n\n    applyFilter() {\n        if (this.filter) {\n            this.ctx.filter = this.filter;\n        }\n    }\n\n}\n\n//# sourceURL=webpack://halloweengame/./src/engine/canvas.js?\n}");

/***/ }),

/***/ "./src/engine/entity.js":
/*!******************************!*\
  !*** ./src/engine/entity.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Entity)\n/* harmony export */ });\nclass Entity {\n\n    roundRect(ctx, x, y, w, h, r) {\n        if (w < 2 * r) r = w / 2;\n        if (h < 2 * r) r = h / 2;\n        ctx.beginPath();\n        ctx.moveTo(x+r, y);\n        ctx.arcTo(x+w, y,   x+w, y+h, r);\n        ctx.arcTo(x+w, y+h, x,   y+h, r);\n        ctx.arcTo(x,   y+h, x,   y,   r);\n        ctx.arcTo(x,   y,   x+w, y,   r);\n        ctx.closePath();\n        return ctx;\n    }\n\n    constructor() {}\n\n    checkClick() {}\n    checkMousedown() {}\n    checkMousemove() {}\n\n    draw() {}\n\n}\n\n//# sourceURL=webpack://halloweengame/./src/engine/entity.js?\n}");

/***/ }),

/***/ "./src/engine/game.js":
/*!****************************!*\
  !*** ./src/engine/game.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Game)\n/* harmony export */ });\n/* harmony import */ var _canvas_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./canvas.js */ \"./src/engine/canvas.js\");\n\n\nclass Game {\n\n    FPS = 40; /* 40 */\n\n    screen;\n\n    scene;\n\n    timers = {\n        render: null\n    };\n\n    constructor(canvasSelector, defaultWidth, defaultHeight) {\n        this.screen = new _canvas_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](canvasSelector, defaultWidth, defaultHeight);\n        this.screen.setClickCallback(this, this.clickCallback);\n        this.screen.setMousedownCallback(this, this.mousedownCallback);\n        this.screen.setMousemoveCallback(this, this.mousemoveCallback);\n    }\n\n    clickCallback(data) {\n        this.scene.click(data);\n    }\n\n    mousedownCallback(data) {\n        this.scene.mousedown(data);\n    }\n\n    mousemoveCallback(data) {\n        this.scene.mousemove(data);\n    }\n\n    start() {\n        this.initTimers()\n            .initListeners();\n    }\n\n    initTimers() {\n        this.initRenderTimer();\n\n        return this;\n    }\n\n    initRenderTimer() {\n        this.timers.render = setInterval(() => this.scene.render(this.screen), 1000 / this.FPS);\n    }\n\n    freezeRender() {\n        this.scene.timerToFreeze = this.timers.render;\n    }\n\n    initListeners() {\n        this.screen.addMouseListeners();\n\n        return this;\n    }\n\n    setScene(scene) {\n        this.scene = scene;\n    }\n\n    getScene() {\n        return this.scene;\n    }\n}\n\n//# sourceURL=webpack://halloweengame/./src/engine/game.js?\n}");

/***/ }),

/***/ "./src/engine/image.js":
/*!*****************************!*\
  !*** ./src/engine/image.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Image)\n/* harmony export */ });\n/* harmony import */ var _entity_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./entity.js */ \"./src/engine/entity.js\");\n\n\nclass Image extends _entity_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n\n    params;\n    sx;\n    sy;\n    sw;\n    sh;\n\n    constructor(params) {\n        super();\n\n        this.setParams(params);\n    }\n\n    setParams(params) {\n        this.params = params;\n        this.sx = (typeof this.params.sx !== 'undefined') ? this.params.sx : this.params.x;\n        this.sy = (typeof this.params.sy !== 'undefined') ? this.params.sy : this.params.y;\n        this.sw = this.params.swidth || this.params.width;\n        this.sh = this.params.sheight || this.params.height;\n    }\n\n    draw(ctx) {\n        ctx.drawImage(this.params.source.getIt(), \n            this.sx, this.sy, this.sw, this.sh,\n            this.params.x, this.params.y, this.params.width, this.params.height);\n    }\n\n}\n\n//# sourceURL=webpack://halloweengame/./src/engine/image.js?\n}");

/***/ }),

/***/ "./src/engine/mathematics.js":
/*!***********************************!*\
  !*** ./src/engine/mathematics.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Mathematics)\n/* harmony export */ });\nclass Mathematics {\n\n    constructor() {}\n\n    static getRandomInteger(min, max, exclusion = []) {\n        let rand = Math.round(min - 0.5 + Math.random() * (max - min + 1));\n        return exclusion.includes(rand) ? this.getRandomInteger(min, max, exclusion) : rand;\n    }\n\n}\n\n//# sourceURL=webpack://halloweengame/./src/engine/mathematics.js?\n}");

/***/ }),

/***/ "./src/engine/resourcemanager.js":
/*!***************************************!*\
  !*** ./src/engine/resourcemanager.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ResourceManager)\n/* harmony export */ });\n/* harmony import */ var _source_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./source.js */ \"./src/engine/source.js\");\n\r\n\r\nclass ResourceManager {\r\n\r\n    container;\r\n    params;\r\n    //isMobile;\r\n\r\n    constructor(selector, params) {\r\n        this.container = document.querySelector(selector);\r\n        this.params = params;\r\n        //this.isMobile = isMobile;\r\n    }\r\n\r\n    prepareAllSources() {\r\n        Object.keys(this.params).forEach((key, index) => {\r\n            const img = document.createElement('img');\r\n            img.src = this.params[key];\r\n            img.id = key;\r\n            this.container.appendChild(img);\r\n        });\r\n    }\r\n\r\n    getSource(key, forcedNoMobile = false) {\r\n        if (this.params.hasOwnProperty(key)) {\r\n            /*if (this.isMobile && forcedNoMobile === false) {\r\n                return new Source('#' + key + '_m');\r\n            }*/\r\n            return new _source_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('#' + key);\r\n        } else {\r\n            console.log('No resource: ' + key);\r\n        }\r\n    }\r\n\r\n    getLocationOnFullscreen(key) {\r\n        return {\r\n            sx: 0,\r\n            sy: 0,\r\n            x: 0,\r\n            y: 0,\r\n            swidth: 576,\r\n            sheight: 1024,\r\n            width: 375,\r\n            height: 667,\r\n            source: this.getSource(key),\r\n        }\r\n    }\r\n\r\n    getCircleIcon(key, x = 0, y = 0, width = 60, height = 60) {\r\n        return {\r\n            x: x,\r\n            y: y,\r\n            width: width,\r\n            height: height,\r\n            circle: true,\r\n            stroke: true,\r\n            strokeColor: 'darkorange',\r\n           // shadow:  'darkorange',//'rgba(0, 255, 255, .7)',\r\n            //title: 'Сотрудница вокзала',\r\n            titleback: 'rgba(0,0,0,.7)',\r\n            image: this.getSource(key),\r\n        };\r\n    }\r\n\r\n    getAvatar(key) {\r\n        return {\r\n            sx: 0,\r\n            sy: 0,\r\n            x: 20,\r\n            y: 80,\r\n            swidth: 1024,\r\n            sheight: 1024,\r\n            width: 120,\r\n            height: 120,\r\n            source: this.getSource(key),\r\n        };\r\n    }\r\n\r\n}\n\n//# sourceURL=webpack://halloweengame/./src/engine/resourcemanager.js?\n}");

/***/ }),

/***/ "./src/engine/scene.js":
/*!*****************************!*\
  !*** ./src/engine/scene.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Scene)\n/* harmony export */ });\nclass Scene {\n\n    entities = [];\n\n    timerToFreeze = false;\n\n    cancelClicks = false;\n\n    constructor(layersCount) {\n        for (let i = 0; i < layersCount; i++) {\n            this.entities.push([]);\n        }\n    }\n\n    append(entity, layer) {\n        if (Array.isArray(entity)) {\n            entity.forEach((element) => {\n                this.entities[layer].push(element);\n            });\n        } else {\n            this.entities[layer].push(entity);\n        }\n    }\n\n    click(data) {\n        for (const layer of this.entities) {\n        //for (let i = this.entities.length-1; i > -1; i--) {\n            for (const entity of layer) {\n            //for (const entity of this.entities[i]) {\n                if (!this.cancelClicks) {\n                    entity.checkClick(data);\n                }\n            }\n        }\n        this.cancelClicks = false;\n    }\n\n    cancelOtherClicks() {\n        this.cancelClicks = true;\n    }\n\n    mousedown(data) {\n        for (const layer of this.entities) {\n            for (const entity of layer) {\n                entity.checkMousedown(data);\n            }\n        }\n    }\n\n    mousemove(data) {\n        for (const layer of this.entities) {\n            for (const entity of layer) {\n                entity.checkMousemove(data);\n            }\n        }\n    }\n\n    render(screen) {\n        screen.clearAll();\n        \n        // screen.getContext().filter = 'blur(5px)';\n        screen.applyFilter();\n\n        for (const layer of this.entities) {\n            for (const entity of layer) {\n                entity.draw(screen.getContext());\n            }\n        }\n\n        if (this.timerToFreeze) {\n            clearInterval(this.timerToFreeze);\n            this.timerToFreeze = null;\n        }\n    }\n\n    remove(entity) {\n        for (let i = 0; i < this.entities.length; i++) {\n            for (let j = 0; j < this.entities[i].length; j++) {\n                if (this.entities[i][j] === entity) {\n                    this.entities[i].splice(j, 1);\n                }\n            }\n        }\n    }\n}\n\n//# sourceURL=webpack://halloweengame/./src/engine/scene.js?\n}");

/***/ }),

/***/ "./src/engine/source.js":
/*!******************************!*\
  !*** ./src/engine/source.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Source)\n/* harmony export */ });\nclass Source {\n\n    it;\n\n    constructor(query) {\n        this.it = document.querySelector(query);\n    }\n\n    getIt() {\n        return this.it;\n    }\n\n}\n\n//# sourceURL=webpack://halloweengame/./src/engine/source.js?\n}");

/***/ }),

/***/ "./src/engine/text.js":
/*!****************************!*\
  !*** ./src/engine/text.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Text)\n/* harmony export */ });\n/* harmony import */ var _entity_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./entity.js */ \"./src/engine/entity.js\");\n\n\nclass Text extends _entity_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n\n    text;\n    x;\n    y;\n    fillColor = 'black';\n    // font = '12px serif';\n    font;\n    fontsize;\n    params;\n    lineHeight = 12;\n\n    constructor(text, x, y, params) {\n        super();\n\n        this.font = params.font;\n        this.fontsize = params.fontsize;\n\n        this.text = text;\n        this.x = x;\n        this.y = y;\n    }\n\n    draw(ctx) {\n        let text = this.text.split('\\n');\n\n        ctx.textAlign = 'left';\n        ctx.fillStyle = this.fillColor;\n        ctx.font = this.fontsize + ' ' + this.font;\n        for (let i = 0; i < text.length; ++i) {\n            ctx.fillText(text[i], this.x, this.y + (i * this.lineHeight));\n        }\n        // ctx.fillText(this.text, this.x, this.y);\n    }\n\n    setColor(color) {\n        this.fillColor = color;\n    }\n\n    setFontsize(fontsize) {\n        this.fontsize = fontsize;\n    }\n\n    setFont(font) {\n        this.font = font;\n    }\n\n    setText(newText) {\n        this.text = newText;\n    }\n\n    getText() {\n        return this.text;\n    }\n\n    setLineHeight(lineHeight) {\n        this.lineHeight = lineHeight;\n    }\n\n    getLineHeight() {\n        return this.lineHeight;\n    }\n\n    textToLines(maxsize = 20) {\n        const words = this.text.split(\" \");\n        let lines = [];\n        let line = '';\n        for (let word of words) {\n            if ((line.length + word.length) > maxsize) {\n                line += ' ' + word + \"\\n\";\n                lines.push(line);\n                line = '';\n            } else {\n                line += ' ' + word;\n            }\n        }\n        if (line != '') {\n            line += \"\\n\";\n            lines.push(line);\n       }\n        this.text = lines.join('');\n    }\n}\n\n//# sourceURL=webpack://halloweengame/./src/engine/text.js?\n}");

/***/ }),

/***/ "./src/game/halloween.js":
/*!*******************************!*\
  !*** ./src/game/halloween.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Halloween)\n/* harmony export */ });\n/* harmony import */ var _engine_mathematics_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../engine/mathematics.js */ \"./src/engine/mathematics.js\");\n/* harmony import */ var _engine_game_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../engine/game.js */ \"./src/engine/game.js\");\n/* harmony import */ var _engine_source_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../engine/source.js */ \"./src/engine/source.js\");\n/* harmony import */ var _engine_scene_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../engine/scene.js */ \"./src/engine/scene.js\");\n/* harmony import */ var _engine_image_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../engine/image.js */ \"./src/engine/image.js\");\n/* harmony import */ var _engine_button_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../engine/button.js */ \"./src/engine/button.js\");\n/* harmony import */ var _engine_text_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../engine/text.js */ \"./src/engine/text.js\");\n/* harmony import */ var _params_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./params.js */ \"./src/game/params.js\");\n/*\r\n*   Halloween\r\n*/\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst params = {};\r\nObject.entries(_params_js__WEBPACK_IMPORTED_MODULE_7__).forEach(([name, exported]) => params[name] = exported);\r\n\r\nclass Halloween {\r\n\r\n    game;\r\n    isMobile;\r\n\r\n    constructor(selector, defaultWidth, defaultHeight, isMobile) {\r\n        this.isMobile = isMobile; \r\n        this.game = new _engine_game_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](selector, defaultWidth, defaultHeight);\r\n    }\r\n\r\n    ma(s) {\r\n        if (this.isMobile) {\r\n            return params.images[s+'_m'];\r\n        }\r\n        return params.images[s];\r\n    }\r\n    \r\n    start() {\r\n        this.game.start();\r\n\r\n        this.cityIllusion();\r\n    }\r\n\r\n    cityIllusion() {\r\n        const scene = new _engine_scene_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"](params.LAYERS_COUNT);\r\n\r\n        const back = new _engine_image_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"](this.ma('city_back'));\r\n        scene.append(back, params.LAYER_BACK);\r\n\r\n        const prev = new _engine_button_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"](this.ma('prev'));\r\n        prev.setHandler(() => {\r\n            alert('prev');\r\n        });\r\n        scene.append(prev, params.LAYER_IMAGE);\r\n\r\n        const counter = new _engine_image_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"](this.ma('counter'));\r\n        scene.append(counter, params.LAYER_IMAGE);\r\n\r\n        const help = new _engine_button_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"](this.ma('help'));\r\n        help.setHandler(() => {\r\n            alert('help');\r\n        });\r\n        scene.append(help, params.LAYER_IMAGE);\r\n\r\n        const title = new _engine_image_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"](this.ma('city_illusion'));\r\n        scene.append(title, params.LAYER_IMAGE);\r\n\r\n        this.game.setScene(scene);\r\n    }\r\n\r\n}\r\n\n\n//# sourceURL=webpack://halloweengame/./src/game/halloween.js?\n}");

/***/ }),

/***/ "./src/game/params.js":
/*!****************************!*\
  !*** ./src/game/params.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   LAYERS_COUNT: () => (/* binding */ LAYERS_COUNT),\n/* harmony export */   LAYER_BACK: () => (/* binding */ LAYER_BACK),\n/* harmony export */   LAYER_CHARACTER: () => (/* binding */ LAYER_CHARACTER),\n/* harmony export */   LAYER_CONTROL: () => (/* binding */ LAYER_CONTROL),\n/* harmony export */   LAYER_COOKIE_BACK: () => (/* binding */ LAYER_COOKIE_BACK),\n/* harmony export */   LAYER_COOKIE_CONTROL: () => (/* binding */ LAYER_COOKIE_CONTROL),\n/* harmony export */   LAYER_IMAGE: () => (/* binding */ LAYER_IMAGE),\n/* harmony export */   LAYER_MODAL_BACK: () => (/* binding */ LAYER_MODAL_BACK),\n/* harmony export */   LAYER_MODAL_CONTROL: () => (/* binding */ LAYER_MODAL_CONTROL),\n/* harmony export */   LAYER_MODAL_CONTROL_HIGHER: () => (/* binding */ LAYER_MODAL_CONTROL_HIGHER),\n/* harmony export */   LAYER_MODAL_GRAY: () => (/* binding */ LAYER_MODAL_GRAY),\n/* harmony export */   LAYER_SUBBACK: () => (/* binding */ LAYER_SUBBACK),\n/* harmony export */   images: () => (/* binding */ images),\n/* harmony export */   resources: () => (/* binding */ resources),\n/* harmony export */   resourcesList: () => (/* binding */ resourcesList)\n/* harmony export */ });\n/* harmony import */ var _engine_resourcemanager_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../engine/resourcemanager.js */ \"./src/engine/resourcemanager.js\");\n\r\n\r\nconst isMobile = (window.innerWidth < 451);\r\n\r\nconst LAYER_BACK = 1;\r\nconst LAYER_IMAGE = 2;\r\nconst LAYER_SUBBACK = 3;\r\nconst LAYER_CHARACTER = 4;\r\nconst LAYER_CONTROL = 5;\r\nconst LAYER_MODAL_GRAY = 6;\r\nconst LAYER_MODAL_BACK = 7;\r\nconst LAYER_MODAL_CONTROL = 8;\r\nconst LAYER_MODAL_CONTROL_HIGHER = 9;\r\nconst LAYER_COOKIE_BACK = 10;\r\nconst LAYER_COOKIE_CONTROL = 11;\r\n\r\nconst LAYERS_COUNT = 12;\r\n\r\nconst resourcesList = {\r\n    city_back: 'img/city_back.png',\r\n    city_back_m: 'img/city_back_m.png',\r\n    prev:       'img/prev.png',\r\n    prev_m:     'img/prev_m.png',\r\n    counter:     'img/counter.png',\r\n    counter_m:   'img/counter_m.png',\r\n    help:   'img/help.png',\r\n    help_m: 'img/help_m.png',\r\n    city_illusion:   'img/city_illusion.png',\r\n    city_illusion_m: 'img/city_illusion_m.png',\r\n};\r\n\r\nconst resources = new _engine_resourcemanager_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('#resources', resourcesList);\r\nresources.prepareAllSources();\r\n\r\nconst images = {\r\n    city_back: {\r\n        sx: 0,\r\n        sy: 0,\r\n        x: 0,\r\n        y: 0,\r\n        swidth: 2880,\r\n        sheight: 2048,\r\n        width: 1440,\r\n        height: 1024,\r\n        source: resources.getSource('city_back'),\r\n    },\r\n    city_back_m: {\r\n        sx: 0,\r\n        sy: 0,\r\n        x: 0,\r\n        y: 0,\r\n        swidth: 750,\r\n        sheight: 1334,\r\n        width: 375,\r\n        height: 667,\r\n        source: resources.getSource('city_back_m'),\r\n    },\r\n    prev: {\r\n        sx: 0,\r\n        sy: 0,\r\n        x: 55,\r\n        y: 56,\r\n        swidth: 132,\r\n        sheight: 132,\r\n        width: 66,\r\n        height: 66,\r\n        source: resources.getSource('prev'),\r\n    },\r\n    prev_m: {\r\n        sx: 0,\r\n        sy: 0,\r\n        x: 24,\r\n        y: 23,\r\n        swidth: 96,\r\n        sheight: 96,\r\n        width: 48,\r\n        height: 48,\r\n        source: resources.getSource('prev_m'),\r\n    },\r\n    counter: {\r\n        sx: 0,\r\n        sy: 0,\r\n        x: 168,\r\n        y: 47,\r\n        swidth: 339,\r\n        sheight: 196,\r\n        width: 163,\r\n        height: 84,\r\n        source: resources.getSource('counter'),\r\n    },\r\n    counter_m: {\r\n        sx: 0,\r\n        sy: 0,\r\n        x: 96,\r\n        y: 20,\r\n        swidth: 218,\r\n        sheight: 127,\r\n        width: 105,\r\n        height: 54,\r\n        source: resources.getSource('counter_m'),\r\n    },\r\n    help: {\r\n        sx: 0,\r\n        sy: 0,\r\n        x: 1315,\r\n        y: 56,\r\n        swidth: 132,\r\n        sheight: 132,\r\n        width: 66,\r\n        height: 66,\r\n        source: resources.getSource('help'),\r\n    },\r\n    help_m: {\r\n        sx: 0,\r\n        sy: 0,\r\n        x: 303,\r\n        y: 23,\r\n        swidth: 96,\r\n        sheight: 96,\r\n        width: 48,\r\n        height: 48,\r\n        source: resources.getSource('help_m'),\r\n    },\r\n    city_illusion: {\r\n        sx: 0,\r\n        sy: 0,\r\n        x: 110+458,\r\n        y: 64+677,\r\n        swidth: 610,\r\n        sheight: 290,\r\n        width: 305,\r\n        height: 145,\r\n        source: resources.getSource('city_illusion'),\r\n    },\r\n    city_illusion_m: {\r\n        sx: 0,\r\n        sy: 0,\r\n        x: 142,\r\n        y: 568,\r\n        swidth: 180,\r\n        sheight: 86,\r\n        width: 90,\r\n        height: 43,\r\n        source: resources.getSource('city_illusion_m'),\r\n    },\r\n};\r\n\n\n//# sourceURL=webpack://halloweengame/./src/game/params.js?\n}");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game_halloween_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game/halloween.js */ \"./src/game/halloween.js\");\n\r\n\r\nconst isMobile = (window.innerWidth < 451);\r\n\r\nlet c;\r\nif (isMobile) {\r\n    document.getElementById('cpk').style.display = 'none';\r\n    c = document.getElementById('c');\r\n} else {\r\n    document.getElementById('c').style.display = 'none';\r\n    c = document.getElementById('cpk');\r\n}\r\n\r\nconst halloween = new _game_halloween_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]((isMobile)?'#c':'#cpk', c.getAttribute('width'), c.getAttribute('height'), isMobile); //\r\n\r\nhalloween.start();\r\n\n\n//# sourceURL=webpack://halloweengame/./src/index.js?\n}");

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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
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