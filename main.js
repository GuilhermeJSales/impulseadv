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

/***/ "./js/modules/accordion.js":
/*!*********************************!*\
  !*** ./js/modules/accordion.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Accordion)\n/* harmony export */ });\nclass Accordion {\n  constructor(list) {\n    this.accordion = document.querySelectorAll(list);\n    this.activeClass = 'active';\n  }\n\n  addToggleEvent(dt) {\n    dt.classList.toggle(this.activeClass);\n    dt.nextElementSibling.classList.toggle(this.activeClass);\n  }\n\n  addAccordionEvent() {\n    this.accordion.forEach((dt) => {\n      dt.addEventListener('click', () => this.addToggleEvent(dt));\n    });\n  }\n\n  init() {\n    if (this.accordion.length) {\n      this.addToggleEvent(this.accordion[0]);\n      this.addAccordionEvent();\n    }\n    return this;\n  }\n}\n\n\n//# sourceURL=webpack://impulse-advogados/./js/modules/accordion.js?");

/***/ }),

/***/ "./js/modules/anima-numeros.js":
/*!*************************************!*\
  !*** ./js/modules/anima-numeros.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ AnimaNumeros)\n/* harmony export */ });\nclass AnimaNumeros {\n  constructor(numeros, observerTarget, observerClass) {\n    this.numeros = document.querySelectorAll(numeros);\n    this.observerTarget = document.querySelector(observerTarget);\n    this.observerClass = observerClass;\n\n    this.handleMutation = this.handleMutation.bind(this);\n  }\n\n  static addNumberAnimation(numero) {\n    const total = +numero.innerHTML;\n    let start = 0;\n    const incremento = Math.floor(total / 100 + 1);\n    const timer = setInterval(() => {\n      start += incremento;\n      numero.innerHTML = start;\n      if (start > total) {\n        clearInterval(timer);\n        numero.innerText = total;\n      }\n    }, 25);\n  }\n\n  animaNumeros() {\n    this.numeros.forEach((numero) => this.constructor.addNumberAnimation(numero));\n  }\n\n  handleMutation(mutation) {\n    if (mutation[0].target.classList.contains(this.observerClass));\n    this.observer.disconnect;\n    this.animaNumeros();\n  }\n\n  addMutationObserver() {\n    this.observer = new MutationObserver(this.handleMutation);\n    this.observer.observe(this.observerTarget, { attributes: true });\n  }\n\n  init() {\n    if (this.numeros.length && this.observerTarget) {\n      this.addMutationObserver();\n    }\n    return this;\n  }\n}\n\n\n//# sourceURL=webpack://impulse-advogados/./js/modules/anima-numeros.js?");

/***/ }),

/***/ "./js/modules/menu-mobile.js":
/*!***********************************!*\
  !*** ./js/modules/menu-mobile.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MenuMobile)\n/* harmony export */ });\nclass MenuMobile {\n  constructor(mobileMenu, ulMenu, liMenu) {\n    this.mobileMenu = document.querySelector(mobileMenu);\n    this.ulMenu = document.querySelector(ulMenu);\n    this.liMenu = document.querySelectorAll(liMenu);\n    this.activeClass = 'active';\n    this.html = document.documentElement;\n    this.outside = 'outside';\n\n    this.addMenuClass = this.addMenuClass.bind(this);\n    this.handleOutsideClick = this.handleOutsideClick.bind(this);\n  }\n\n  addMenuClass() {\n    this.mobileMenu.classList.add(this.activeClass);\n    this.ulMenu.classList.add(this.activeClass);\n    this.outsideClick(this.ulMenu);\n    this.animateLinks();\n  }\n\n  animateLinks() {\n    this.liMenu.forEach((links, index) => {\n      links.style.animation\n        ? (links.style.animation = '')\n        : (links.style.animation = `fadeSlide .5s ease forwards ${index / 7 + 0.3}s`);\n    });\n  }\n\n  outsideClick(element) {\n    if (!element.hasAttribute(this.outside)) {\n      element.setAttribute(this.outside, '');\n      setTimeout(() => {\n        this.html.addEventListener('click', this.handleOutsideClick);\n      });\n    }\n  }\n\n  handleOutsideClick(event) {\n    if (this.ulMenu !== event.target) {\n      this.html.removeEventListener('click', this.handleOutsideClick);\n      this.ulMenu.removeAttribute(this.outside);\n      this.mobileMenu.classList.remove(this.activeClass);\n      this.ulMenu.classList.remove(this.activeClass);\n      this.liMenu.forEach((link) => {\n        link.style.animation = '';\n      });\n    }\n  }\n\n  addEventMenu() {\n    this.mobileMenu.addEventListener('click', this.addMenuClass);\n  }\n\n  init() {\n    if (this.mobileMenu) {\n      this.addEventMenu();\n    }\n    return this;\n  }\n}\n\n\n//# sourceURL=webpack://impulse-advogados/./js/modules/menu-mobile.js?");

/***/ }),

/***/ "./js/modules/smooth-scroll.js":
/*!*************************************!*\
  !*** ./js/modules/smooth-scroll.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ SmoothScroll)\n/* harmony export */ });\nclass SmoothScroll {\n  constructor(links) {\n    this.sections = document.querySelectorAll(links);\n\n    this.handleClick = this.handleClick.bind(this);\n  }\n\n  handleClick(event) {\n    event.preventDefault();\n    const href = event.currentTarget.getAttribute('href');\n    this.sections = document.querySelector(href);\n    this.sections.scrollIntoView({\n      behavior: 'smooth',\n      block: 'start',\n    });\n  }\n\n  addEventScroll() {\n    this.sections.forEach((links) => {\n      links.addEventListener('click', this.handleClick);\n    });\n  }\n\n  init() {\n    if (this.sections) {\n      this.addEventScroll();\n    }\n    return this;\n  }\n}\n\n\n//# sourceURL=webpack://impulse-advogados/./js/modules/smooth-scroll.js?");

/***/ }),

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_menu_mobile_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/menu-mobile.js */ \"./js/modules/menu-mobile.js\");\n/* harmony import */ var _modules_smooth_scroll_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/smooth-scroll.js */ \"./js/modules/smooth-scroll.js\");\n/* harmony import */ var _modules_anima_numeros_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/anima-numeros.js */ \"./js/modules/anima-numeros.js\");\n/* harmony import */ var _modules_accordion_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/accordion.js */ \"./js/modules/accordion.js\");\n\n\n\n\n// import AnimationScroll from './modules/scroll-animation.js';\n\nconst mobileMenu = new _modules_menu_mobile_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('[data-menu=\"button\"]', '[data-menu = \"nav\"]', '[data-menu = \"nav\"] li');\nmobileMenu.init();\n\nconst smoothScroll = new _modules_smooth_scroll_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('a[href^=\"#\"]');\nsmoothScroll.init();\n\nconst animaNumeros = new _modules_anima_numeros_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]('[data-numeros]', '.numeros-bg', 'active');\nanimaNumeros.init();\n\nconst accordionList = new _modules_accordion_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"]('[data-accordion] dt');\naccordionList.init();\n\n// const scrollAnimation = new AnimationScroll('[data-scroll]');\n// scrollAnimation.init();\n\n\n//# sourceURL=webpack://impulse-advogados/./js/script.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./js/script.js");
/******/ 	
/******/ })()
;