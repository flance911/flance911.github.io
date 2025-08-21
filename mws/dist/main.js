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

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Button)\n/* harmony export */ });\n/* harmony import */ var _image_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./image.js */ \"./src/engine/image.js\");\n\n\nclass Button extends _image_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n\n    handler = ()=>{};\n\n    constructor(params) {\n        super(params);\n    }\n\n    checkClick(data) {\n        if (data.x > this.params.x && data.x < this.params.x + this.params.width) {\n            if (data.y > this.params.y && data.y < this.params.y + this.params.height) {\n                this.getHandler()();\n            }\n        }\n    }\n\n    setHandler(handler) {\n        this.handler = handler;\n    }\n\n    getHandler() {\n        return this.handler;\n    }\n    \n}\n\n\n//# sourceURL=webpack://mwsgame/./src/engine/button.js?\n}");

/***/ }),

/***/ "./src/engine/canvas.js":
/*!******************************!*\
  !*** ./src/engine/canvas.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Canvas)\n/* harmony export */ });\nclass Canvas {\n\n    SCALE = 10000;\n    QUALITY = 1.6;\n\n    c;\n    ctx;\n\n    filter;\n\n    clickCallback;\n    clickCallbackCaller;\n\n    mousedownCallback;\n    mousedownCallbackCaller;\n\n    mousemoveCallback;\n    mousemoveCallbackCaller;\n\n    left;\n    right;\n    width;\n    height;\n\n    defaultWidth;\n    defaultHeight;\n\n    mouse = {\n        over: {\n            x: null,\n            y: null\n        },\n        click: {\n            x: null,\n            y: null\n        },\n        pressed: false,\n        swipe: null\n    };\n\n    constructor(selector = '#c', defaultWidth = 500, defaultHeight = 500) {\n        this.c = document.querySelector(selector);\n        this.defaultWidth = defaultWidth;\n        this.defaultHeight = defaultHeight;\n        this.ctx = this.c.getContext('2d');\n    \n        //this.checkBorders();\n        // this.fixDpi();\n        this.fixDpiNew();\n        this.checkBorders();\n        setInterval(() => this.checkBorders(), 1000);\n        // window.addEventListener(\"resize\", this.fixDpiNew());\n    }\n\n    fixDpi = () => {\n        const dpi = window.devicePixelRatio;\n        const styles = window.getComputedStyle(this.c);\n        \n        // create a style object that returns width and height\n        const style = {\n          height() {\n            return +styles.height.slice(0, -2);\n          },\n          width() {\n            return +styles.width.slice(0, -2);\n          }\n        };\n        \n        // set the correct canvas attributes for device dpi\n        this.c.setAttribute('width', (style.width() * dpi).toString()); //\n        this.c.setAttribute('height', (style.height() * dpi).toString()); //\n        // this.width = (style.width() * dpi).toString();\n        // this.height = (style.height() * dpi).toString();\n    }\n\n    fixDpiNew = () => {\n        // Get the DPR and size of the canvas\n        let dpr = window.devicePixelRatio * this.QUALITY;\n        const rect = this.c.getBoundingClientRect();\n\n        // Set the \"actual\" size of the canvas\n        this.c.width = rect.width * dpr;\n        this.c.height = rect.height * dpr;\n\n        // Scale the context to ensure correct drawing operations\n        this.ctx.scale(dpr, dpr);\n\n        // Set the \"drawn\" size of the canvas\n        // this.c.style.width = this.c.getAttribute('data-width'); //'263px'; //`${rect.width*0.7}px`;\n        // this.c.style.height = this.c.getAttribute('data-height'); //'467px'; //`${rect.height*0.7}px`;\n        \n        //console.log(window.innerWidth);\n        if (window.innerWidth > 450) {\n            let tmpheight = this.c.getAttribute('data-height');\n            if (tmpheight) {\n                this.c.style.width = this.c.getAttribute('data-width');\n                this.c.style.height = this.c.getAttribute('data-height');\n            } else {\n                this.c.style.height = '95vh';\n            }\n        } else {\n            this.c.style.width = '100%';\n            this.c.style.aspectRatio = window.innerWidth + '/' + window.innerHeight;\n            //this.c.style.width = '100vw';\n           // this.c.style.height = '100%'; // 'calc(100vh - calc(100vh - 100%))';//'100vh';\n        }\n    }\n\n    checkBorders() {\n        this.left = this.c.offsetLeft + this.c.clientLeft;\n        this.top = this.c.offsetTop + this.c.clientTop;\n\n        this.width = this.c.offsetWidth;\n        this.height = this.c.offsetHeight;\n        // this.fixDpi();\n    }\n\n    setClickCallback(callbackCaller, clickCallback) {\n        this.clickCallback = clickCallback;\n        this.clickCallbackCaller = callbackCaller;\n    }\n\n    setMousedownCallback(callbackCaller, mousedownCallback) {\n        this.mousedownCallback = mousedownCallback;\n        this.mousedownCallbackCaller = callbackCaller;\n    }\n\n    setMousemoveCallback(callbackCaller, mousemoveCallback) {\n        this.mousemoveCallback = mousemoveCallback;\n        this.mousemoveCallbackCaller = callbackCaller;\n    }\n\n    getContext() {\n        return this.ctx;\n    }\n\n    addMouseListeners() {\n        this.c.addEventListener('mousedown', (event) => this.mousedownListener(event));\n        this.c.addEventListener('touchstart', (event) => this.mousedownListener(event));\n        this.c.addEventListener('mouseup', (event) => this.mouseupListener(event));\n        this.c.addEventListener('touchend', (event) => this.mouseupListener(event));\n        this.c.addEventListener('mousemove', (event) => this.mousemoveListener(event));\n        this.c.addEventListener('touchmove', (event) => this.mousemoveListener(event));\n    }\n\n    mousedownListener(event) {\n        let pageX, pageY;\n        if (event.type === 'touchstart') {\n            pageX = event.touches[0].pageX;\n            pageY = event.touches[0].pageY;\n        } else {\n            pageX = event.pageX;\n            pageY = event.pageY;\n        }\n\n        let x = pageX - this.left;\n        let y = pageY - this.top;\n\n        //\n        x = x / this.width * this.defaultWidth;\n        y = y / this.height * this.defaultHeight;\n        //\n        // console.log(event);\n\n        this.mouse.click.x = x;\n        this.mouse.click.y = y;\n        this.mouse.pressed = true;\n\n        this.mousedownCallback.call(this.mousedownCallbackCaller, this.mouse.click);\n    }\n\n    mouseupListener(event) {\n        event.preventDefault();\n        let pageX, pageY;\n        if (event.type === 'touchend') {\n            // pageX = event.touches[0].pageX;\n            // pageY = event.touches[0].pageY;\n        } else {\n            pageX = event.pageX;\n            pageY = event.pageY;\n        }\n\n        if (event.type !== 'touchend') {\n            let x = pageX - this.left;\n            let y = pageY - this.top;\n\n            x = x / this.width * this.defaultWidth;\n            y = y / this.height * this.defaultHeight;\n\n            this.mouse.click.x = x;\n            this.mouse.click.y = y;\n        }\n\n        this.mouse.pressed = false;\n\n        this.clickCallback.call(this.clickCallbackCaller, this.mouse.click);\n    }\n\n    mousemoveListener(event) {\n        let pageX, pageY;\n        if (event.type === 'touchmove') {\n            pageX = event.touches[0].pageX;\n            pageY = event.touches[0].pageY;\n        } else {\n            pageX = event.pageX;\n            pageY = event.pageY;\n        }\n\n        let x = pageX - this.left;\n        let y = pageY - this.top;\n\n        //\n        x = x / this.width * this.defaultWidth;\n        y = y / this.height * this.defaultHeight;\n        //\n        //console.log('move x:' + Math.round(x) + ' y:' + Math.round(y));\n\n        if (this.mouse.pressed) {\n            this.mouse.swipe = x - this.mouse.over.x;\n        }\n\n        this.mouse.over.x = x;\n        this.mouse.over.y = y;\n\n        this.mousemoveCallback.call(this.mousemoveCallbackCaller, this.mouse);\n    }\n\n    clearAll() {\n        this.ctx.clearRect(0, 0, this.width, this.height);\n    }\n\n    setFilter(filter) {\n        this.filter = filter;\n    }\n\n    applyFilter() {\n        if (this.filter) {\n            this.ctx.filter = this.filter;\n        }\n    }\n\n}\n\n//# sourceURL=webpack://mwsgame/./src/engine/canvas.js?\n}");

/***/ }),

/***/ "./src/engine/entity.js":
/*!******************************!*\
  !*** ./src/engine/entity.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Entity)\n/* harmony export */ });\nclass Entity {\n\n    roundRect(ctx, x, y, w, h, r) {\n        if (w < 2 * r) r = w / 2;\n        if (h < 2 * r) r = h / 2;\n        ctx.beginPath();\n        ctx.moveTo(x+r, y);\n        ctx.arcTo(x+w, y,   x+w, y+h, r);\n        ctx.arcTo(x+w, y+h, x,   y+h, r);\n        ctx.arcTo(x,   y+h, x,   y,   r);\n        ctx.arcTo(x,   y,   x+w, y,   r);\n        ctx.closePath();\n        return ctx;\n    }\n\n    constructor() {}\n\n    checkClick() {}\n    checkMousedown() {}\n    checkMousemove() {}\n\n    draw() {}\n\n}\n\n//# sourceURL=webpack://mwsgame/./src/engine/entity.js?\n}");

/***/ }),

/***/ "./src/engine/game.js":
/*!****************************!*\
  !*** ./src/engine/game.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Game)\n/* harmony export */ });\n/* harmony import */ var _canvas_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./canvas.js */ \"./src/engine/canvas.js\");\n\n\nclass Game {\n\n    FPS = 40;\n\n    screen;\n\n    scene;\n\n    timers = {\n        render: null\n    };\n\n    constructor(canvasSelector, defaultWidth, defaultHeight) {\n        this.screen = new _canvas_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](canvasSelector, defaultWidth, defaultHeight);\n        this.screen.setClickCallback(this, this.clickCallback);\n        this.screen.setMousedownCallback(this, this.mousedownCallback);\n        this.screen.setMousemoveCallback(this, this.mousemoveCallback);\n    }\n\n    clickCallback(data) {\n        this.scene.click(data);\n    }\n\n    mousedownCallback(data) {\n        this.scene.mousedown(data);\n    }\n\n    mousemoveCallback(data) {\n        this.scene.mousemove(data);\n    }\n\n    start() {\n        this.initTimers()\n            .initListeners();\n    }\n\n    initTimers() {\n        this.initRenderTimer();\n\n        return this;\n    }\n\n    initRenderTimer() {\n        this.timers.render = setInterval(() => this.scene.render(this.screen), 1000 / this.FPS);\n    }\n\n    freezeRender() {\n        this.scene.timerToFreeze = this.timers.render;\n    }\n\n    initListeners() {\n        this.screen.addMouseListeners();\n\n        return this;\n    }\n\n    setScene(scene) {\n        this.scene = scene;\n    }\n\n    getScene() {\n        return this.scene;\n    }\n}\n\n//# sourceURL=webpack://mwsgame/./src/engine/game.js?\n}");

/***/ }),

/***/ "./src/engine/image.js":
/*!*****************************!*\
  !*** ./src/engine/image.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Image)\n/* harmony export */ });\n/* harmony import */ var _entity_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./entity.js */ \"./src/engine/entity.js\");\n\n\nclass Image extends _entity_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n\n    params;\n    sx;\n    sy;\n    sw;\n    sh;\n\n    constructor(params) {\n        super();\n\n        this.params = params;\n        this.sx = (typeof this.params.sx !== 'undefined') ? this.params.sx : this.params.x;\n        this.sy = (typeof this.params.sy !== 'undefined') ? this.params.sy : this.params.y;\n        this.sw = this.params.swidth || this.params.width;\n        this.sh = this.params.sheight || this.params.height;\n    }\n\n    draw(ctx) {\n        ctx.drawImage(this.params.source.getIt(), \n            this.sx, this.sy, this.sw, this.sh,\n            this.params.x, this.params.y, this.params.width, this.params.height);\n    }\n\n}\n\n//# sourceURL=webpack://mwsgame/./src/engine/image.js?\n}");

/***/ }),

/***/ "./src/engine/mathematics.js":
/*!***********************************!*\
  !*** ./src/engine/mathematics.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Mathematics)\n/* harmony export */ });\nclass Mathematics {\n\n    constructor() {}\n\n    static getRandomInteger(min, max, exclusion = []) {\n        let rand = Math.round(min - 0.5 + Math.random() * (max - min + 1));\n        return exclusion.includes(rand) ? this.getRandomInteger(min, max, exclusion) : rand;\n    }\n\n}\n\n//# sourceURL=webpack://mwsgame/./src/engine/mathematics.js?\n}");

/***/ }),

/***/ "./src/engine/resourcemanager.js":
/*!***************************************!*\
  !*** ./src/engine/resourcemanager.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ResourceManager)\n/* harmony export */ });\n/* harmony import */ var _source_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./source.js */ \"./src/engine/source.js\");\n\r\n\r\nclass ResourceManager {\r\n\r\n    container;\r\n    params;\r\n\r\n    constructor(selector, params) {\r\n        this.container = document.querySelector(selector);\r\n        this.params = params;\r\n    }\r\n\r\n    prepareAllSources() {\r\n        Object.keys(this.params).forEach((key, index) => {\r\n            const img = document.createElement('img');\r\n            img.src = this.params[key];\r\n            img.id = key;\r\n            this.container.appendChild(img);\r\n        });\r\n    }\r\n\r\n    getSource(key) {\r\n        if (this.params.hasOwnProperty(key)) {\r\n            return new _source_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('#' + key);\r\n        } else {\r\n            console.log('No resource: ' + key);\r\n        }\r\n    }\r\n\r\n    getLocationOnFullscreen(key) {\r\n        return {\r\n            sx: 0,\r\n            sy: 0,\r\n            x: 0,\r\n            y: 0,\r\n            swidth: 576,\r\n            sheight: 1024,\r\n            width: 375,\r\n            height: 667,\r\n            source: this.getSource(key),\r\n        }\r\n    }\r\n\r\n    getCircleIcon(key, x = 0, y = 0, width = 60, height = 60) {\r\n        return {\r\n            x: x,\r\n            y: y,\r\n            width: width,\r\n            height: height,\r\n            circle: true,\r\n            stroke: true,\r\n            strokeColor: 'darkorange',\r\n           // shadow:  'darkorange',//'rgba(0, 255, 255, .7)',\r\n            //title: 'Сотрудница вокзала',\r\n            titleback: 'rgba(0,0,0,.7)',\r\n            image: this.getSource(key),\r\n        };\r\n    }\r\n\r\n    getAvatar(key) {\r\n        return {\r\n            sx: 0,\r\n            sy: 0,\r\n            x: 20,\r\n            y: 80,\r\n            swidth: 1024,\r\n            sheight: 1024,\r\n            width: 120,\r\n            height: 120,\r\n            source: this.getSource(key),\r\n        };\r\n    }\r\n\r\n}\n\n//# sourceURL=webpack://mwsgame/./src/engine/resourcemanager.js?\n}");

/***/ }),

/***/ "./src/engine/scene.js":
/*!*****************************!*\
  !*** ./src/engine/scene.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Scene)\n/* harmony export */ });\nclass Scene {\n\n    entities = [];\n\n    timerToFreeze = false;\n\n    constructor(layersCount) {\n        for (let i = 0; i < layersCount; i++) {\n            this.entities.push([]);\n        }\n    }\n\n    append(entity, layer) {\n        if (Array.isArray(entity)) {\n            entity.forEach((element) => {\n                this.entities[layer].push(element);\n            });\n        } else {\n            this.entities[layer].push(entity);\n        }\n    }\n\n    click(data) {\n        for (const layer of this.entities) {\n            for (const entity of layer) {\n                entity.checkClick(data);\n            }\n        }\n    }\n\n    mousedown(data) {\n        for (const layer of this.entities) {\n            for (const entity of layer) {\n                entity.checkMousedown(data);\n            }\n        }\n    }\n\n    mousemove(data) {\n        for (const layer of this.entities) {\n            for (const entity of layer) {\n                entity.checkMousemove(data);\n            }\n        }\n    }\n\n    render(screen) {\n        screen.clearAll();\n        \n        // screen.getContext().filter = 'blur(5px)';\n        screen.applyFilter();\n\n        for (const layer of this.entities) {\n            for (const entity of layer) {\n                entity.draw(screen.getContext());\n            }\n        }\n\n        if (this.timerToFreeze) {\n            clearInterval(this.timerToFreeze);\n            this.timerToFreeze = null;\n        }\n    }\n\n    remove(entity) {\n        for (let i = 0; i < this.entities.length; i++) {\n            for (let j = 0; j < this.entities[i].length; j++) {\n                if (this.entities[i][j] === entity) {\n                    this.entities[i].splice(j, 1);\n                }\n            }\n        }\n    }\n}\n\n//# sourceURL=webpack://mwsgame/./src/engine/scene.js?\n}");

/***/ }),

/***/ "./src/engine/source.js":
/*!******************************!*\
  !*** ./src/engine/source.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Source)\n/* harmony export */ });\nclass Source {\n\n    it;\n\n    constructor(query) {\n        this.it = document.querySelector(query);\n    }\n\n    getIt() {\n        return this.it;\n    }\n\n}\n\n//# sourceURL=webpack://mwsgame/./src/engine/source.js?\n}");

/***/ }),

/***/ "./src/game/mws.js":
/*!*************************!*\
  !*** ./src/game/mws.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Mws)\n/* harmony export */ });\n/* harmony import */ var _engine_mathematics_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../engine/mathematics.js */ \"./src/engine/mathematics.js\");\n/* harmony import */ var _engine_game_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../engine/game.js */ \"./src/engine/game.js\");\n/* harmony import */ var _engine_source_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../engine/source.js */ \"./src/engine/source.js\");\n/* harmony import */ var _engine_scene_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../engine/scene.js */ \"./src/engine/scene.js\");\n/* harmony import */ var _engine_image_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../engine/image.js */ \"./src/engine/image.js\");\n/* harmony import */ var _engine_button_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../engine/button.js */ \"./src/engine/button.js\");\n/* harmony import */ var _params_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./params.js */ \"./src/game/params.js\");\n/*\r\n*   MWS\r\n*/\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n//import Icon from './icon.js';\r\n\r\n\r\n\r\nconst params = {};\r\nObject.entries(_params_js__WEBPACK_IMPORTED_MODULE_6__).forEach(([name, exported]) => params[name] = exported);\r\n\r\nclass Mws {\r\n\r\n    game;\r\n    modalShowed = null;\r\n    cookieAccepted = null;\r\n\r\n\r\n\r\n    constructor(selector, defaultWidth, defaultHeight) {\r\n        this.game = new _engine_game_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](selector, defaultWidth, defaultHeight);\r\n    }\r\n\r\n    start() {\r\n        this.game.start();\r\n        this.modalShowed = false;\r\n        this.cookieAccepted = false;\r\n        this.firstScreen();\r\n    }\r\n\r\n    firstScreen() {\r\n        //this.game.screen.ctx.clearRect(0, 0, \r\n            //300, 600);\r\n        //this.game.screen.clearAll();\r\n        const scene = new _engine_scene_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"](params.LAYERS_COUNT);\r\n\r\n        const mwsBack = new _engine_image_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"](params.images.default_back);\r\n        scene.append(mwsBack, params.LAYER_BACK);\r\n\r\n        const mwsLogo = new _engine_button_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"](params.images.mws_logo);\r\n        mwsLogo.setHandler(() => {\r\n            if (!this.modalShowed) {\r\n                alert('wow');\r\n            }\r\n        });\r\n        scene.append(mwsLogo, params.LAYER_IMAGE);\r\n\r\n        const startTables = new _engine_button_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"](params.images.start_tables);\r\n        startTables.setHandler(() => {\r\n            if (!this.modalShowed && this.cookieAccepted) {\r\n                alert('start tables');\r\n            }\r\n        });\r\n        scene.append(startTables, params.LAYER_IMAGE);\r\n\r\n        const startGpt = new _engine_button_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"](params.images.start_gpt);\r\n        startGpt.setHandler(() => {\r\n            if (!this.modalShowed && this.cookieAccepted) {\r\n                alert('start gpt');\r\n            }\r\n        });\r\n        scene.append(startGpt, params.LAYER_IMAGE);\r\n\r\n        const startData = new _engine_button_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"](params.images.start_data);\r\n        startData.setHandler(() => {\r\n            if (!this.modalShowed && this.cookieAccepted) {\r\n                alert('start data');\r\n            }\r\n        });\r\n        scene.append(startData, params.LAYER_IMAGE);\r\n\r\n        if (!this.cookieAccepted) {\r\n            const cookieModal = new _engine_image_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"](params.images.cookie_modal);\r\n            scene.append(cookieModal, params.LAYER_MODAL_BACK);\r\n\r\n            const cookieBtn = new _engine_button_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"](params.images.cookie_button_inv);\r\n            cookieBtn.setHandler(() => {\r\n                if (!this.modalShowed && !this.cookieAccepted) {\r\n                    this.modalShowed = true;\r\n                    const modalBack = new _engine_image_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"](params.images.modal_back);\r\n                    scene.append(modalBack, params.LAYER_MODAL_BACK);\r\n                    const privet = new _engine_image_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"](params.images.privet);\r\n                    scene.append(privet, params.LAYER_MODAL_CONTROL);\r\n                    const next = new _engine_button_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"](params.images.next);\r\n                    next.setHandler(() => {\r\n                        this.cookieAccepted = true;\r\n                        this.modalShowed = false;\r\n                        this.firstScreen();\r\n                    });\r\n                    scene.append(next, params.LAYER_MODAL_CONTROL);\r\n                    const boy = new _engine_image_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"](params.images.boy);\r\n                    scene.append(boy, params.LAYER_MODAL_CONTROL);\r\n                }\r\n            });\r\n            scene.append(cookieBtn, params.LAYER_MODAL_CONTROL);\r\n        }\r\n\r\n        this.game.setScene(scene);\r\n    }\r\n\r\n}\r\n\n\n//# sourceURL=webpack://mwsgame/./src/game/mws.js?\n}");

/***/ }),

/***/ "./src/game/params.js":
/*!****************************!*\
  !*** ./src/game/params.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   LAYERS_COUNT: () => (/* binding */ LAYERS_COUNT),\n/* harmony export */   LAYER_BACK: () => (/* binding */ LAYER_BACK),\n/* harmony export */   LAYER_CHARACTER: () => (/* binding */ LAYER_CHARACTER),\n/* harmony export */   LAYER_CONTROL: () => (/* binding */ LAYER_CONTROL),\n/* harmony export */   LAYER_IMAGE: () => (/* binding */ LAYER_IMAGE),\n/* harmony export */   LAYER_MODAL_BACK: () => (/* binding */ LAYER_MODAL_BACK),\n/* harmony export */   LAYER_MODAL_CONTROL: () => (/* binding */ LAYER_MODAL_CONTROL),\n/* harmony export */   LAYER_MODAL_GRAY: () => (/* binding */ LAYER_MODAL_GRAY),\n/* harmony export */   LAYER_SUBBACK: () => (/* binding */ LAYER_SUBBACK),\n/* harmony export */   images: () => (/* binding */ images),\n/* harmony export */   resources: () => (/* binding */ resources),\n/* harmony export */   resourcesList: () => (/* binding */ resourcesList)\n/* harmony export */ });\n/* harmony import */ var _engine_resourcemanager_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../engine/resourcemanager.js */ \"./src/engine/resourcemanager.js\");\n\r\n\r\nconst LAYER_BACK = 1;\r\nconst LAYER_IMAGE = 2;\r\nconst LAYER_SUBBACK = 3;\r\nconst LAYER_CHARACTER = 4;\r\nconst LAYER_CONTROL = 5;\r\nconst LAYER_MODAL_GRAY = 6;\r\nconst LAYER_MODAL_BACK = 7;\r\nconst LAYER_MODAL_CONTROL = 8;\r\n\r\nconst LAYERS_COUNT = 9;\r\n\r\nconst resourcesList = {\r\n    default_back:  'img/default_back.png',\r\n    invisible:     'img/invisible.png',\r\n    mws_logo:      'img/mws_logo.png',\r\n    start_tables:  'img/start_tables.png',\r\n    start_gpt:     'img/start_gpt.png',\r\n    start_data:    'img/start_data.png',\r\n    cookie_modal:  'img/cookie_modal.png',\r\n    modal_back:    'img/modal_back.png',\r\n    boy:           'img/boy.png',\r\n    next:          'img/next.png',\r\n    privet:        'img/privet.png',\r\n};\r\n\r\nconst resources = new _engine_resourcemanager_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('#resources', resourcesList);\r\nresources.prepareAllSources();\r\n\r\nconst images = {\r\n    default_back: {\r\n        sx: 0,\r\n        sy: 0,\r\n        x: 0,\r\n        y: 0,\r\n        swidth: 750,\r\n        sheight: 1334,\r\n        width: 375,\r\n        height: 667,\r\n        source: resources.getSource('default_back'),\r\n    },\r\n    mws_logo: {\r\n        sx: 0,\r\n        sy: 0,\r\n        x: 325,\r\n        y: 0,\r\n        swidth: 107,\r\n        sheight: 107,\r\n        width: 50,\r\n        height: 50,\r\n        source: resources.getSource('mws_logo'),\r\n    },\r\n    start_tables: {\r\n        sx: 0,\r\n        sy: 0,\r\n        x: 0,\r\n        y: 20,\r\n        swidth: 494,\r\n        sheight: 516,\r\n        width: 255,\r\n        height: 265,\r\n        source: resources.getSource('start_tables'),\r\n    },\r\n    start_gpt: {\r\n        sx: 0,\r\n        sy: 0,\r\n        x: 130,\r\n        y: 210,\r\n        swidth: 522,\r\n        sheight: 520,\r\n        width: 252,\r\n        height: 262,\r\n        source: resources.getSource('start_gpt'),\r\n    },\r\n    start_data: {\r\n        sx: 0,\r\n        sy: 0,\r\n        x: 10,\r\n        y: 400,\r\n        swidth: 466,\r\n        sheight: 500,\r\n        width: 233,\r\n        height: 243,\r\n        source: resources.getSource('start_data'),\r\n    },\r\n    cookie_modal: {\r\n        sx: 0,\r\n        sy: 0,\r\n        x: 15,\r\n        y: 555,\r\n        swidth: 692,\r\n        sheight: 194,\r\n        width: 345,\r\n        height: 97,\r\n        source: resources.getSource('cookie_modal'),\r\n    },\r\n    modal_back: {\r\n        sx: 0,\r\n        sy: 0,\r\n        x: 0,\r\n        y: -281,\r\n        swidth: 750,\r\n        sheight: 1334,\r\n        width: 380,\r\n        height: 952,\r\n        source: resources.getSource('modal_back'),\r\n    },\r\n    cookie_button_inv: {\r\n        sx: 0,\r\n        sy: 0,\r\n        x: 232,\r\n        y: 567,\r\n        swidth: 1,\r\n        sheight: 1,\r\n        width: 115,\r\n        height: 45,\r\n        source: resources.getSource('invisible'),\r\n    },\r\n    boy: {\r\n        sx: 0,\r\n        sy: 0,\r\n        x: 0,\r\n        y: 337,\r\n        swidth: 482,\r\n        sheight: 666,\r\n        width: 240,\r\n        height: 332,\r\n        source: resources.getSource('boy'),\r\n    },\r\n    next: {\r\n        sx: 0,\r\n        sy: 0,\r\n        x: 189,\r\n        y: 375,\r\n        swidth: 274,\r\n        sheight: 96,\r\n        width: 137,\r\n        height: 48,\r\n        source: resources.getSource('next'),\r\n    },\r\n    privet: {\r\n        sx: 0,\r\n        sy: 0,\r\n        x: 49,\r\n        y: 171,\r\n        swidth: 554,\r\n        sheight: 504,\r\n        width: 277,\r\n        height: 252,\r\n        source: resources.getSource('privet'),\r\n    },\r\n};\r\n\r\n/*export const icons = {\r\n    mws_logo: {\r\n        x: 325,\r\n        y: 0,\r\n        width: 50,\r\n        height: 50,\r\n        circle: false,\r\n        stroke: false,\r\n        image: resources.getSource('mws_logo'),\r\n    },\r\n};*/\r\n\r\n\n\n//# sourceURL=webpack://mwsgame/./src/game/params.js?\n}");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game_mws_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game/mws.js */ \"./src/game/mws.js\");\n\r\n\r\nlet c = document.getElementById('c');\r\nconst mws = new _game_mws_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('#c', c.getAttribute('width'), c.getAttribute('height')); //\r\n\r\nmws.start();\r\n\n\n//# sourceURL=webpack://mwsgame/./src/index.js?\n}");

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