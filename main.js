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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Accordian)\n/* harmony export */ });\nclass Accordian {\n  constructor(perguntas) {\n    this.perguntas = document.querySelectorAll(perguntas);\n\n    this.ativarResposta = this.ativarResposta.bind(this);\n  }\n\n  ativarResposta(e) {\n    e.currentTarget.nextElementSibling.classList.toggle('ativo');\n    const ariaExpanded = e.target.getAttribute('aria-expanded');\n    if (ariaExpanded === 'true') {\n      e.target.setAttribute('aria-expanded', false);\n    } else {\n      e.target.setAttribute('aria-expanded', true);\n    }\n  }\n\n  addEvent() {\n    this.perguntas.forEach((pergunta) => {\n      pergunta.addEventListener('click', this.ativarResposta);\n    });\n  }\n\n  init() {\n    if (this.perguntas.length) {\n      this.addEvent();\n    }\n  }\n}\n\n\n//# sourceURL=webpack://projeto-animais-fantasticos/./js/modules/accordion.js?");

/***/ }),

/***/ "./js/modules/tabnav.js":
/*!******************************!*\
  !*** ./js/modules/tabnav.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ TabNav)\n/* harmony export */ });\nclass TabNav {\n  constructor(imgPrincipal, thumbs, conteudo) {\n    this.imgPrincipal = document.querySelector(imgPrincipal);\n    this.thumbs = document.querySelectorAll(thumbs);\n    this.conteudo = document.querySelectorAll(conteudo);\n\n    this.ativarConteudo = this.ativarConteudo.bind(this);\n  }\n\n  ativarConteudo(thumb, index) {\n    const src = thumb.getAttribute('src');\n    const alt = thumb.getAttribute('alt');\n    this.imgPrincipal.setAttribute('src', src);\n    this.imgPrincipal.setAttribute('alt', alt);\n\n    this.conteudo.forEach((section) => {\n      section.classList.remove('ativo');\n    });\n    this.conteudo[index].classList.add('ativo');\n  }\n\n  addEvent() {\n    this.thumbs.forEach((thumb, index) => {\n      thumb.addEventListener('click', () => {\n        this.ativarConteudo(thumb, index);\n      });\n    });\n  }\n\n  init() {\n    if (this.imgPrincipal && this.thumbs.length && this.conteudo.length) {\n      this.addEvent();\n    }\n  }\n}\n\n\n//# sourceURL=webpack://projeto-animais-fantasticos/./js/modules/tabnav.js?");

/***/ }),

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_tabnav_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/tabnav.js */ \"./js/modules/tabnav.js\");\n/* harmony import */ var _modules_accordion_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/accordion.js */ \"./js/modules/accordion.js\");\n\n\n\nconst tabnav = new _modules_tabnav_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\n  '[data-animais=\"imgPrincipal\"]',\n  '[data-animais=\"animaisThumbs\"] img',\n  '[data-animais=\"animaisConteudo\"] section',\n);\ntabnav.init();\n\nconst accordion = new _modules_accordion_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('[data-accordion=\"faq\"] dt');\naccordion.init();\n\n\n//# sourceURL=webpack://projeto-animais-fantasticos/./js/script.js?");

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