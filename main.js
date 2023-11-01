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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Accordian)\n/* harmony export */ });\nclass Accordian {\n  constructor(perguntas) {\n    this.perguntas = document.querySelectorAll(perguntas);\n\n    this.ativarResposta = this.ativarResposta.bind(this);\n  }\n\n  ativarResposta(e) {\n    e.currentTarget.nextElementSibling.classList.toggle('ativo');\n    const ariaExpanded = e.target.getAttribute('aria-expanded');\n    if (ariaExpanded === 'true') {\n      e.target.setAttribute('aria-expanded', false);\n    } else {\n      e.target.setAttribute('aria-expanded', true);\n    }\n  }\n\n  addEvent() {\n    this.perguntas.forEach((pergunta) => {\n      pergunta.addEventListener('click', this.ativarResposta);\n    });\n  }\n\n  init() {\n    if (this.perguntas.length) {\n      this.addEvent();\n    }\n    return this;\n  }\n}\n\n\n//# sourceURL=webpack://projeto-animais-fantasticos/./js/modules/accordion.js?");

/***/ }),

/***/ "./js/modules/clickFora.js":
/*!*********************************!*\
  !*** ./js/modules/clickFora.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ cliqueFora)\n/* harmony export */ });\nfunction cliqueFora(elemento, callback) {\n  const userEvents = ['touchstart', 'click'];\n  const html = document.documentElement;\n\n  function ativarCliqueFora({ target }) {\n    if (!elemento.contains(target)) {\n      elemento.setAttribute('aria-expanded', 'false');\n      callback();\n      userEvents.forEach((userEvent) => {\n        html.removeEventListener(userEvent, ativarCliqueFora);\n      });\n    }\n  }\n\n  elemento.setAttribute('aria-expanded', 'true');\n  userEvents.forEach((userEvent) => {\n    html.addEventListener(userEvent, ativarCliqueFora);\n  });\n}\n\n\n//# sourceURL=webpack://projeto-animais-fantasticos/./js/modules/clickFora.js?");

/***/ }),

/***/ "./js/modules/dropdown.js":
/*!********************************!*\
  !*** ./js/modules/dropdown.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Dropdown)\n/* harmony export */ });\n/* harmony import */ var _clickFora__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clickFora */ \"./js/modules/clickFora.js\");\n\n\nclass Dropdown {\n  constructor(dropdown) {\n    this.dropdown = document.querySelector(dropdown);\n  }\n\n  abrirDropdown(e) {\n    e.preventDefault();\n    const elemento = e.currentTarget;\n    elemento.classList.add('ativo');\n\n    if (elemento.getAttribute('aria-expanded') === 'false') {\n      (0,_clickFora__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, () => {\n        this.classList.remove('ativo');\n      });\n    }\n  }\n\n  addEvent() {\n    this.dropdown.addEventListener('click', this.abrirDropdown);\n  }\n\n  init() {\n    if (this.dropdown) {\n      this.addEvent();\n    }\n    return this;\n  }\n}\n\n\n//# sourceURL=webpack://projeto-animais-fantasticos/./js/modules/dropdown.js?");

/***/ }),

/***/ "./js/modules/modal.js":
/*!*****************************!*\
  !*** ./js/modules/modal.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Modal)\n/* harmony export */ });\nclass Modal {\n  constructor(modalContainer, abrir, fechar) {\n    this.modalContainer = document.querySelector(modalContainer);\n    this.abrir = document.querySelector(abrir);\n    this.fechar = document.querySelector(fechar);\n\n    this.toggleModal = this.toggleModal.bind(this);\n    this.clickFora = this.clickFora.bind(this);\n  }\n\n  toggleModal() {\n    this.modalContainer.classList.toggle('ativo');\n  }\n\n  clickFora(e) {\n    if (e.target === this.modalContainer) {\n      this.toggleModal();\n    }\n  }\n\n  addEvent() {\n    this.abrir.addEventListener('click', this.toggleModal);\n    this.fechar.addEventListener('click', this.toggleModal);\n    this.modalContainer.addEventListener('click', this.clickFora);\n  }\n\n  init() {\n    if (this.modalContainer && this.abrir && this.fechar) {\n      this.addEvent();\n    }\n    return this;\n  }\n}\n\n\n//# sourceURL=webpack://projeto-animais-fantasticos/./js/modules/modal.js?");

/***/ }),

/***/ "./js/modules/scrollAnimacao.js":
/*!**************************************!*\
  !*** ./js/modules/scrollAnimacao.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ScrollAnimacao)\n/* harmony export */ });\nclass ScrollAnimacao {\n  constructor(sections) {\n    this.sections = document.querySelectorAll(sections);\n    this.ativarSection = this.ativarSection.bind(this);\n  }\n\n  ativarSection() {\n    const metadeHeight = window.innerHeight * 0.7;\n    this.sections.forEach((section) => {\n      const sectionTop = section.getBoundingClientRect().top;\n      if (sectionTop < metadeHeight) {\n        section.classList.add('ativo');\n      }\n    });\n  }\n\n  addEvent() {\n    window.addEventListener('scroll', this.ativarSection);\n  }\n\n  init() {\n    if (this.sections.length) {\n      this.addEvent();\n    }\n    return this;\n  }\n}\n\n\n//# sourceURL=webpack://projeto-animais-fantasticos/./js/modules/scrollAnimacao.js?");

/***/ }),

/***/ "./js/modules/scrollSuave.js":
/*!***********************************!*\
  !*** ./js/modules/scrollSuave.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ScrollSuave)\n/* harmony export */ });\nclass ScrollSuave {\n  constructor(linksInternos) {\n    this.linksInternos = document.querySelectorAll(linksInternos);\n  }\n\n  ativarScroll(e) {\n    e.preventDefault();\n    const href = e.target.getAttribute('href');\n    const section = document.querySelector(href);\n    section.scrollIntoView({\n      behavior: 'smooth',\n    });\n  }\n\n  addEvent() {\n    this.linksInternos.forEach((link) => {\n      link.addEventListener('click', this.ativarScroll);\n    });\n  }\n\n  init() {\n    if (this.linksInternos.length) {\n      this.addEvent();\n    }\n    return this;\n  }\n}\n\n\n//# sourceURL=webpack://projeto-animais-fantasticos/./js/modules/scrollSuave.js?");

/***/ }),

/***/ "./js/modules/tabnav.js":
/*!******************************!*\
  !*** ./js/modules/tabnav.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ TabNav)\n/* harmony export */ });\nclass TabNav {\n  constructor(imgPrincipal, thumbs, conteudo) {\n    this.imgPrincipal = document.querySelector(imgPrincipal);\n    this.thumbs = document.querySelectorAll(thumbs);\n    this.conteudo = document.querySelectorAll(conteudo);\n\n    this.ativarConteudo = this.ativarConteudo.bind(this);\n  }\n\n  ativarConteudo(thumb, index) {\n    const src = thumb.getAttribute('src');\n    const alt = thumb.getAttribute('alt');\n    this.imgPrincipal.setAttribute('src', src);\n    this.imgPrincipal.setAttribute('alt', alt);\n\n    this.conteudo.forEach((section) => {\n      section.classList.remove('ativo');\n    });\n    this.conteudo[index].classList.add('ativo', this.conteudo[index].dataset.anime);\n  }\n\n  addEvent() {\n    this.thumbs.forEach((thumb, index) => {\n      thumb.addEventListener('click', () => {\n        this.ativarConteudo(thumb, index);\n      });\n    });\n  }\n\n  init() {\n    if (this.imgPrincipal && this.thumbs.length && this.conteudo.length) {\n      this.addEvent();\n    }\n    return this;\n  }\n}\n\n\n//# sourceURL=webpack://projeto-animais-fantasticos/./js/modules/tabnav.js?");

/***/ }),

/***/ "./js/modules/tooltip.js":
/*!*******************************!*\
  !*** ./js/modules/tooltip.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Tooltip)\n/* harmony export */ });\nclass Tooltip {\n  constructor(img) {\n    this.img = document.querySelector(img);\n\n    this.onMouseOver = this.onMouseOver.bind(this);\n    this.onMouseLeave = this.onMouseLeave.bind(this);\n    this.onMouseMove = this.onMouseMove.bind(this);\n  }\n\n  onMouseOver({ currentTarget }) {\n    this.criarTooltipBox(currentTarget);\n\n    currentTarget.addEventListener('mouseleave', this.onMouseLeave);\n    currentTarget.addEventListener('mousemove', this.onMouseMove);\n  }\n\n  onMouseMove(e) {\n    this.tooltipBox.style.top = `${e.pageY + 20}px`;\n    this.tooltipBox.style.left = `${e.pageX + 20}px`;\n  }\n\n  onMouseLeave(img) {\n    this.tooltipBox.remove();\n    img.currentTarget.removeEventListener('mouseleave', this.onMouseLeave);\n  }\n\n  criarTooltipBox(img) {\n    const tooltipBox = document.createElement('div');\n    const texto = img.getAttribute('aria-label');\n    tooltipBox.innerText = texto;\n    tooltipBox.classList.add('tooltip');\n    document.body.appendChild(tooltipBox);\n    this.tooltipBox = tooltipBox;\n  }\n\n  addEvent() {\n    this.img.addEventListener('mouseover', this.onMouseOver);\n  }\n\n  init() {\n    if (this.img) {\n      this.addEvent();\n    }\n    return this;\n  }\n}\n\n\n//# sourceURL=webpack://projeto-animais-fantasticos/./js/modules/tooltip.js?");

/***/ }),

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_tabnav_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/tabnav.js */ \"./js/modules/tabnav.js\");\n/* harmony import */ var _modules_accordion_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/accordion.js */ \"./js/modules/accordion.js\");\n/* harmony import */ var _modules_scrollSuave_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/scrollSuave.js */ \"./js/modules/scrollSuave.js\");\n/* harmony import */ var _modules_scrollAnimacao_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/scrollAnimacao.js */ \"./js/modules/scrollAnimacao.js\");\n/* harmony import */ var _modules_modal_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/modal.js */ \"./js/modules/modal.js\");\n/* harmony import */ var _modules_tooltip_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/tooltip.js */ \"./js/modules/tooltip.js\");\n/* harmony import */ var _modules_dropdown_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/dropdown.js */ \"./js/modules/dropdown.js\");\n\n\n\n\n\n\n\n\nconst tabnav = new _modules_tabnav_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\n  '[data-animais=\"imgPrincipal\"]',\n  '[data-animais=\"animaisThumbs\"] img',\n  '[data-animais=\"animaisConteudo\"] section',\n);\ntabnav.init();\n\nconst accordion = new _modules_accordion_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('[data-accordion=\"faq\"] dt');\naccordion.init();\n\nconst scrollSuave = new _modules_scrollSuave_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]('[data-menu=\"menu\"] a[href^=\"#\"]');\nscrollSuave.init();\n\nconst scrollAnimacao = new _modules_scrollAnimacao_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"]('[data-anime=\"scroll\"]');\nscrollAnimacao.init();\n\nconst modal = new _modules_modal_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"](\n  '[data-modal=\"modal\"]',\n  '[data-modal=\"abrir\"]',\n  '[data-modal=\"fechar\"]',\n);\nmodal.init();\n\nconst tooltip = new _modules_tooltip_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"]('[data-tooltip]');\ntooltip.init();\n\nconst dropdown = new _modules_dropdown_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"]('[data-dropdown]');\ndropdown.init();\n\n\n//# sourceURL=webpack://projeto-animais-fantasticos/./js/script.js?");

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