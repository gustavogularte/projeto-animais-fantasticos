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

/***/ "./js/modules/accordion.js":
/*!*********************************!*\
  !*** ./js/modules/accordion.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Accordian)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n\n\nvar Accordian = /*#__PURE__*/function () {\n  function Accordian(perguntas) {\n    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, Accordian);\n    this.perguntas = document.querySelectorAll(perguntas);\n    this.ativarResposta = this.ativarResposta.bind(this);\n  }\n  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Accordian, [{\n    key: \"ativarResposta\",\n    value: function ativarResposta(e) {\n      e.currentTarget.nextElementSibling.classList.toggle('ativo');\n      var ariaExpanded = e.target.getAttribute('aria-expanded');\n      if (ariaExpanded === 'true') {\n        e.target.setAttribute('aria-expanded', false);\n      } else {\n        e.target.setAttribute('aria-expanded', true);\n      }\n    }\n  }, {\n    key: \"addEvent\",\n    value: function addEvent() {\n      var _this = this;\n      this.perguntas.forEach(function (pergunta) {\n        pergunta.addEventListener('click', _this.ativarResposta);\n      });\n    }\n  }, {\n    key: \"init\",\n    value: function init() {\n      if (this.perguntas.length) {\n        this.addEvent();\n      }\n      return this;\n    }\n  }]);\n  return Accordian;\n}();\n\n\n//# sourceURL=webpack://projeto-animais-fantasticos/./js/modules/accordion.js?");

/***/ }),

/***/ "./js/modules/animaisNumeros.js":
/*!**************************************!*\
  !*** ./js/modules/animaisNumeros.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ animaisNumeros)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nvar animaisNumeros = /*#__PURE__*/function () {\n  function animaisNumeros(section, numeros, animais) {\n    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this, animaisNumeros);\n    this.sectionObserver = document.querySelector(section);\n    this.numeros = document.querySelectorAll(numeros);\n    this.animais = document.querySelectorAll(animais);\n    this.handleMutation = this.handleMutation.bind(this);\n  }\n  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(animaisNumeros, [{\n    key: \"fetchAnimais\",\n    value: function () {\n      var _fetchAnimais = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee() {\n        var _this = this;\n        var response, json;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee$(_context) {\n          while (1) switch (_context.prev = _context.next) {\n            case 0:\n              _context.prev = 0;\n              _context.next = 3;\n              return fetch('animaisapi.json');\n            case 3:\n              response = _context.sent;\n              _context.next = 6;\n              return response.json();\n            case 6:\n              json = _context.sent;\n              this.animais.forEach(function (animal, index) {\n                animal.innerText = json[index].especie;\n                _this.numeros[index].innerText = json[index].total;\n              });\n              this.animarNumeros();\n              _context.next = 14;\n              break;\n            case 11:\n              _context.prev = 11;\n              _context.t0 = _context[\"catch\"](0);\n              console.log(_context.t0);\n            case 14:\n            case \"end\":\n              return _context.stop();\n          }\n        }, _callee, this, [[0, 11]]);\n      }));\n      function fetchAnimais() {\n        return _fetchAnimais.apply(this, arguments);\n      }\n      return fetchAnimais;\n    }()\n  }, {\n    key: \"animarNumeros\",\n    value: function animarNumeros() {\n      this.numeros.forEach(function (numero) {\n        var total = +numero.innerText;\n        var incremento = Math.floor(total / 100);\n        var ct = 0;\n        var timer = setInterval(function () {\n          numero.innerText = ct;\n          ct += incremento;\n          if (ct > total) {\n            numero.innerText = total;\n            clearInterval(timer);\n          }\n        }, 25 * Math.random());\n      });\n    }\n  }, {\n    key: \"handleMutation\",\n    value: function handleMutation(mutation) {\n      if (mutation[0].target.classList.contains('ativo')) {\n        this.observer.disconnect();\n        this.fetchAnimais();\n      }\n    }\n  }, {\n    key: \"addEvent\",\n    value: function addEvent() {\n      this.observer = new MutationObserver(this.handleMutation);\n      this.observer.observe(this.sectionObserver, {\n        attributes: true\n      });\n    }\n  }, {\n    key: \"init\",\n    value: function init() {\n      if (this.numeros.length) {\n        this.addEvent();\n      }\n      return this;\n    }\n  }]);\n  return animaisNumeros;\n}();\n\n\n//# sourceURL=webpack://projeto-animais-fantasticos/./js/modules/animaisNumeros.js?");

/***/ }),

/***/ "./js/modules/bitcoin.js":
/*!*******************************!*\
  !*** ./js/modules/bitcoin.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Bitcoin)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nvar Bitcoin = /*#__PURE__*/function () {\n  function Bitcoin(bitcoinSpan) {\n    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this, Bitcoin);\n    this.bitcoinSpan = document.querySelector(bitcoinSpan);\n  }\n  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(Bitcoin, [{\n    key: \"fetchBtc\",\n    value: function () {\n      var _fetchBtc = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee() {\n        var response, bitcoin;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee$(_context) {\n          while (1) switch (_context.prev = _context.next) {\n            case 0:\n              _context.prev = 0;\n              _context.next = 3;\n              return fetch('https://blockchain.info/ticker');\n            case 3:\n              response = _context.sent;\n              _context.next = 6;\n              return response.json();\n            case 6:\n              bitcoin = _context.sent;\n              this.bitcoinSpan.innerText = (100 / bitcoin.BRL.sell).toFixed(4);\n              _context.next = 13;\n              break;\n            case 10:\n              _context.prev = 10;\n              _context.t0 = _context[\"catch\"](0);\n              console.log(_context.t0);\n            case 13:\n            case \"end\":\n              return _context.stop();\n          }\n        }, _callee, this, [[0, 10]]);\n      }));\n      function fetchBtc() {\n        return _fetchBtc.apply(this, arguments);\n      }\n      return fetchBtc;\n    }()\n  }, {\n    key: \"init\",\n    value: function init() {\n      if (this.bitcoinSpan) {\n        this.fetchBtc();\n      }\n      return this;\n    }\n  }]);\n  return Bitcoin;\n}();\n\n\n//# sourceURL=webpack://projeto-animais-fantasticos/./js/modules/bitcoin.js?");

/***/ }),

/***/ "./js/modules/clickFora.js":
/*!*********************************!*\
  !*** ./js/modules/clickFora.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ clickFora)\n/* harmony export */ });\nfunction clickFora(elemento, callback) {\n  var html = document.documentElement;\n  function ativarClickFora(_ref) {\n    var target = _ref.target;\n    if (!elemento.contains(target)) {\n      callback();\n      html.removeEventListener('click', ativarClickFora);\n    }\n  }\n  setTimeout(function () {\n    return html.addEventListener('click', ativarClickFora);\n  });\n}\n\n//# sourceURL=webpack://projeto-animais-fantasticos/./js/modules/clickFora.js?");

/***/ }),

/***/ "./js/modules/debounce.js":
/*!********************************!*\
  !*** ./js/modules/debounce.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ debounce)\n/* harmony export */ });\nfunction debounce(callback, delay) {\n  var timer;\n  return function () {\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n    if (timer) clearTimeout(timer);\n    timer = setTimeout(function () {\n      callback.apply(void 0, args);\n      timer = null;\n    }, delay);\n  };\n}\n\n//# sourceURL=webpack://projeto-animais-fantasticos/./js/modules/debounce.js?");

/***/ }),

/***/ "./js/modules/dropdown.js":
/*!********************************!*\
  !*** ./js/modules/dropdown.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Dropdown)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _clickFora__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./clickFora */ \"./js/modules/clickFora.js\");\n\n\n\nvar Dropdown = /*#__PURE__*/function () {\n  function Dropdown(dropdown) {\n    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, Dropdown);\n    this.dropdown = document.querySelector(dropdown);\n  }\n  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Dropdown, [{\n    key: \"abrirDropdown\",\n    value: function abrirDropdown(e) {\n      var _this = this;\n      e.preventDefault();\n      var elemento = e.currentTarget;\n      elemento.classList.toggle('ativo');\n      if (elemento.getAttribute('aria-expanded') === 'false') {\n        (0,_clickFora__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this, function () {\n          _this.classList.remove('ativo');\n          elemento.setAttribute('aria-expanded', 'false');\n        });\n      }\n      if (elemento.classList.contains('ativo')) {\n        elemento.setAttribute('aria-expanded', 'true');\n      } else {\n        elemento.setAttribute('aria-expanded', 'false');\n      }\n    }\n  }, {\n    key: \"addEvent\",\n    value: function addEvent() {\n      this.dropdown.addEventListener('click', this.abrirDropdown);\n    }\n  }, {\n    key: \"init\",\n    value: function init() {\n      if (this.dropdown) {\n        this.addEvent();\n      }\n      return this;\n    }\n  }]);\n  return Dropdown;\n}();\n\n\n//# sourceURL=webpack://projeto-animais-fantasticos/./js/modules/dropdown.js?");

/***/ }),

/***/ "./js/modules/horario.js":
/*!*******************************!*\
  !*** ./js/modules/horario.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Horario)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n\n\nvar Horario = /*#__PURE__*/function () {\n  function Horario(semana, horario) {\n    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, Horario);\n    this.semana = document.querySelector(semana);\n    this.horario = document.querySelector(horario);\n  }\n  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Horario, [{\n    key: \"dataHoje\",\n    value: function dataHoje() {\n      var hoje = new Date();\n      var diaHoje = hoje.getDay();\n      var horaHoje = hoje.getHours();\n      this.funcionamento(diaHoje, horaHoje);\n    }\n  }, {\n    key: \"funcionamento\",\n    value: function funcionamento(diaHoje, horaHoje) {\n      var semana = this.semana.dataset.semana.split(',').map(Number);\n      var horario = this.horario.dataset.horario.split(',').map(Number);\n      var diaAberto = semana.indexOf(diaHoje) !== -1;\n      var horaAberto = horaHoje >= horario[0] && horaHoje < horario[1];\n      this.aberto(diaAberto, horaAberto);\n    }\n  }, {\n    key: \"aberto\",\n    value: function aberto(diaAberto, horaAberto) {\n      if (diaAberto && horaAberto) {\n        this.semana.classList.add('aberto');\n      }\n    }\n  }, {\n    key: \"init\",\n    value: function init() {\n      if (this.semana && this.horario) {\n        this.dataHoje();\n      }\n      return this;\n    }\n  }]);\n  return Horario;\n}();\n\n\n//# sourceURL=webpack://projeto-animais-fantasticos/./js/modules/horario.js?");

/***/ }),

/***/ "./js/modules/menuMobile.js":
/*!**********************************!*\
  !*** ./js/modules/menuMobile.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MenuMobile)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _clickFora__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./clickFora */ \"./js/modules/clickFora.js\");\n\n\n\nvar MenuMobile = /*#__PURE__*/function () {\n  function MenuMobile(botao, menu) {\n    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, MenuMobile);\n    this.botao = document.querySelector(botao);\n    this.menu = document.querySelector(menu);\n    this.abrirMenu = this.abrirMenu.bind(this);\n  }\n  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(MenuMobile, [{\n    key: \"abrirMenu\",\n    value: function abrirMenu() {\n      var _this = this;\n      this.menu.classList.toggle('ativo');\n      if (this.botao.getAttribute('aria-expanded') === 'false') {\n        (0,_clickFora__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this.menu, function () {\n          _this.menu.classList.remove('ativo');\n          _this.botao.setAttribute('aria-expanded', 'false');\n        });\n      }\n      this.botao.setAttribute('aria-expanded', 'true');\n    }\n  }, {\n    key: \"addEvent\",\n    value: function addEvent() {\n      this.botao.addEventListener('click', this.abrirMenu);\n    }\n  }, {\n    key: \"init\",\n    value: function init() {\n      if (this.menu && this.botao) {\n        this.addEvent();\n      }\n      return this;\n    }\n  }]);\n  return MenuMobile;\n}();\n\n\n//# sourceURL=webpack://projeto-animais-fantasticos/./js/modules/menuMobile.js?");

/***/ }),

/***/ "./js/modules/modal.js":
/*!*****************************!*\
  !*** ./js/modules/modal.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Modal)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n\n\nvar Modal = /*#__PURE__*/function () {\n  function Modal(modalContainer, abrir, fechar) {\n    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, Modal);\n    this.modalContainer = document.querySelector(modalContainer);\n    this.abrir = document.querySelector(abrir);\n    this.fechar = document.querySelector(fechar);\n    this.toggleModal = this.toggleModal.bind(this);\n    this.clickFora = this.clickFora.bind(this);\n  }\n  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Modal, [{\n    key: \"toggleModal\",\n    value: function toggleModal() {\n      this.modalContainer.classList.toggle('ativo');\n    }\n  }, {\n    key: \"clickFora\",\n    value: function clickFora(e) {\n      if (e.target === this.modalContainer) {\n        this.toggleModal();\n      }\n    }\n  }, {\n    key: \"addEvent\",\n    value: function addEvent() {\n      this.abrir.addEventListener('click', this.toggleModal);\n      this.fechar.addEventListener('click', this.toggleModal);\n      this.modalContainer.addEventListener('click', this.clickFora);\n    }\n  }, {\n    key: \"init\",\n    value: function init() {\n      if (this.modalContainer && this.abrir && this.fechar) {\n        this.addEvent();\n      }\n      return this;\n    }\n  }]);\n  return Modal;\n}();\n\n\n//# sourceURL=webpack://projeto-animais-fantasticos/./js/modules/modal.js?");

/***/ }),

/***/ "./js/modules/scrollAnimacao.js":
/*!**************************************!*\
  !*** ./js/modules/scrollAnimacao.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ScrollAnimacao)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _debounce__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./debounce */ \"./js/modules/debounce.js\");\n\n\n\nvar ScrollAnimacao = /*#__PURE__*/function () {\n  function ScrollAnimacao(sections) {\n    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, ScrollAnimacao);\n    this.sections = document.querySelectorAll(sections);\n    this.ativarSection = (0,_debounce__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this.ativarSection.bind(this), 50);\n  }\n  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(ScrollAnimacao, [{\n    key: \"ativarSection\",\n    value: function ativarSection() {\n      var metadeHeight = window.innerHeight * 0.7;\n      this.sections.forEach(function (section) {\n        var sectionTop = section.getBoundingClientRect().top;\n        if (sectionTop < metadeHeight) {\n          section.classList.add('ativo');\n        }\n      });\n    }\n  }, {\n    key: \"addEvent\",\n    value: function addEvent() {\n      window.addEventListener('scroll', this.ativarSection);\n    }\n  }, {\n    key: \"init\",\n    value: function init() {\n      if (this.sections.length) {\n        this.addEvent();\n      }\n      return this;\n    }\n  }]);\n  return ScrollAnimacao;\n}();\n\n\n//# sourceURL=webpack://projeto-animais-fantasticos/./js/modules/scrollAnimacao.js?");

/***/ }),

/***/ "./js/modules/scrollSuave.js":
/*!***********************************!*\
  !*** ./js/modules/scrollSuave.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ScrollSuave)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n\n\nvar ScrollSuave = /*#__PURE__*/function () {\n  function ScrollSuave(linksInternos) {\n    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, ScrollSuave);\n    this.linksInternos = document.querySelectorAll(linksInternos);\n  }\n  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(ScrollSuave, [{\n    key: \"ativarScroll\",\n    value: function ativarScroll(e) {\n      e.preventDefault();\n      var href = e.target.getAttribute('href');\n      var section = document.querySelector(href);\n      section.scrollIntoView({\n        behavior: 'smooth'\n      });\n    }\n  }, {\n    key: \"addEvent\",\n    value: function addEvent() {\n      var _this = this;\n      this.linksInternos.forEach(function (link) {\n        link.addEventListener('click', _this.ativarScroll);\n      });\n    }\n  }, {\n    key: \"init\",\n    value: function init() {\n      if (this.linksInternos.length) {\n        this.addEvent();\n      }\n      return this;\n    }\n  }]);\n  return ScrollSuave;\n}();\n\n\n//# sourceURL=webpack://projeto-animais-fantasticos/./js/modules/scrollSuave.js?");

/***/ }),

/***/ "./js/modules/slide.js":
/*!*****************************!*\
  !*** ./js/modules/slide.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ SlideControls)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n\n\n\n\n\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this, result); }; }\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\nvar Slide = /*#__PURE__*/function () {\n  function Slide(wrapper, slide) {\n    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, Slide);\n    this.wrapper = document.querySelector(wrapper);\n    this.slide = document.querySelector(slide);\n    this.dist = {\n      posicaoFinal: 0,\n      começo: 0,\n      movimento: 0\n    };\n    this.changeEvent = new Event('changeEvent');\n  }\n  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Slide, [{\n    key: \"transition\",\n    value: function transition(active) {\n      this.slide.style.transition = active ? 'transform .3s' : '';\n    }\n  }, {\n    key: \"onStart\",\n    value: function onStart(e) {\n      var type;\n      if (e.type === 'touchstart') {\n        this.dist.começo = e.changedTouches[0].clientX;\n        type = 'touchmove';\n      } else {\n        e.preventDefault();\n        this.dist.começo = e.clientX;\n        type = 'mousemove';\n      }\n      this.transition(false);\n      this.wrapper.addEventListener(type, this.onMove);\n    }\n  }, {\n    key: \"onMove\",\n    value: function onMove(e) {\n      var type = e.type === 'mousemove' ? e.clientX : e.changedTouches[0].clientX;\n      this.dist.movimento = -(this.dist.começo - type) * 1.5;\n      var clientX = this.dist.posicaoFinal + this.dist.movimento;\n      this.moveSlide(clientX);\n    }\n  }, {\n    key: \"moveSlide\",\n    value: function moveSlide(clientX) {\n      this.slide.style.transform = \"translate3d(\".concat(clientX, \"px, 0, 0)\");\n    }\n  }, {\n    key: \"onEnd\",\n    value: function onEnd(e) {\n      var type = e.type === 'mouseup' ? 'mousemove' : 'touchmove';\n      this.dist.posicaoFinal += this.dist.movimento;\n      this.wrapper.removeEventListener(type, this.onMove);\n      this.transition(true);\n      this.changeSlideOnEnd();\n    }\n  }, {\n    key: \"changeSlideOnEnd\",\n    value: function changeSlideOnEnd() {\n      if (this.dist.movimento > 120 && this.index.prev !== null) {\n        this.dist.movimento = 0;\n        this.changeSlide(this.index.prev);\n      } else if (this.dist.movimento < -120 && this.index.next !== null) {\n        this.dist.movimento = 0;\n        this.changeSlide(this.index.next);\n      } else {\n        this.changeSlide(this.index.active);\n      }\n    }\n  }, {\n    key: \"slidePosition\",\n    value: function slidePosition(slide) {\n      var margin = (this.wrapper.offsetWidth - slide.offsetWidth) / 2;\n      return -(slide.offsetLeft - margin);\n    }\n  }, {\n    key: \"slideConfig\",\n    value: function slideConfig() {\n      var _this = this;\n      this.slideArray = (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(this.slide.children).map(function (item) {\n        var position = _this.slidePosition(item);\n        return {\n          item: item,\n          position: position\n        };\n      });\n    }\n  }, {\n    key: \"slideIndexNav\",\n    value: function slideIndexNav(index) {\n      var last = this.slideArray.length - 1;\n      this.index = {\n        prev: index ? index - 1 : null,\n        active: index,\n        next: index === last ? null : index + 1\n      };\n    }\n  }, {\n    key: \"changeSlide\",\n    value: function changeSlide(index) {\n      var activeSlide = this.slideArray[index];\n      this.dist.posicaoFinal = activeSlide.position;\n      this.moveSlide(activeSlide.position);\n      this.slideIndexNav(index);\n      this.ativarSlide();\n      this.wrapper.dispatchEvent(this.changeEvent);\n    }\n  }, {\n    key: \"ativarSlide\",\n    value: function ativarSlide() {\n      this.slideArray.forEach(function (item) {\n        return item.item.classList.remove('ativo');\n      });\n      this.slideArray[this.index.active].item.classList.add('ativo');\n    }\n  }, {\n    key: \"onResize\",\n    value: function onResize() {\n      var _this2 = this;\n      setTimeout(function () {\n        _this2.slideConfig();\n        _this2.changeSlide(_this2.index.active);\n      }, 500);\n    }\n  }, {\n    key: \"addEvents\",\n    value: function addEvents() {\n      this.wrapper.addEventListener('mousedown', this.onStart);\n      this.wrapper.addEventListener('touchstart', this.onStart);\n      this.wrapper.addEventListener('mouseup', this.onEnd);\n      this.wrapper.addEventListener('touchend', this.onEnd);\n      window.addEventListener('resize', this.onResize);\n    }\n  }, {\n    key: \"addBind\",\n    value: function addBind() {\n      this.onStart = this.onStart.bind(this);\n      this.onMove = this.onMove.bind(this);\n      this.onEnd = this.onEnd.bind(this);\n      this.onResize = this.onResize.bind(this);\n      this.activeControl = this.activeControl.bind(this);\n    }\n  }, {\n    key: \"init\",\n    value: function init() {\n      if (this.wrapper && this.slide) {\n        this.addBind();\n        this.transition(true);\n        this.addEvents();\n        this.slideConfig();\n        this.changeSlide(0);\n      }\n      return this;\n    }\n  }]);\n  return Slide;\n}();\nvar SlideControls = /*#__PURE__*/function (_Slide) {\n  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(SlideControls, _Slide);\n  var _super = _createSuper(SlideControls);\n  function SlideControls() {\n    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, SlideControls);\n    return _super.apply(this, arguments);\n  }\n  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(SlideControls, [{\n    key: \"createControl\",\n    value: function createControl() {\n      var control = document.createElement('ul');\n      control.dataset.control = 'slide';\n      this.slideArray.forEach(function (item, index) {\n        control.innerHTML += \"<li><a href=\\\"#slide\".concat(index + 1, \"\\\">\").concat(index + 1, \"</a></li>\");\n      });\n      this.wrapper.appendChild(control);\n      return control;\n    }\n  }, {\n    key: \"addEventControl\",\n    value: function addEventControl() {\n      var _this3 = this;\n      this.arrayControl.forEach(function (item, index) {\n        item.addEventListener('click', function () {\n          _this3.changeSlide(index);\n        });\n      });\n      this.wrapper.addEventListener('changeEvent', this.activeControl);\n    }\n  }, {\n    key: \"activeControl\",\n    value: function activeControl() {\n      this.arrayControl.forEach(function (item) {\n        item.classList.remove('ativo');\n      });\n      this.arrayControl[this.index.active].classList.add('ativo');\n    }\n  }, {\n    key: \"addControl\",\n    value: function addControl(customControl) {\n      this.control = document.querySelector(customControl) || this.createControl();\n      this.arrayControl = (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(this.control.children);\n      this.activeControl();\n      this.addEventControl();\n    }\n  }]);\n  return SlideControls;\n}(Slide);\n\n\n//# sourceURL=webpack://projeto-animais-fantasticos/./js/modules/slide.js?");

/***/ }),

/***/ "./js/modules/slideAnimais.js":
/*!************************************!*\
  !*** ./js/modules/slideAnimais.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ SlideAnimais)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n\n\nvar SlideAnimais = /*#__PURE__*/function () {\n  function SlideAnimais(slide, prev, next) {\n    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, SlideAnimais);\n    this.slide = document.querySelector(slide);\n    this.prev = document.querySelector(prev);\n    this.next = document.querySelector(next);\n    this.changePrev = this.changePrev.bind(this);\n    this.changeNext = this.changeNext.bind(this);\n  }\n  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(SlideAnimais, [{\n    key: \"changePrev\",\n    value: function changePrev() {\n      this.slide.style.transform = 'translate3d(0, 0, 0)';\n    }\n  }, {\n    key: \"changeNext\",\n    value: function changeNext() {\n      this.slide.style.transform = 'translate3d(-240px, 0, 0)';\n    }\n  }, {\n    key: \"addEvent\",\n    value: function addEvent() {\n      this.prev.addEventListener('click', this.changePrev);\n      this.next.addEventListener('click', this.changeNext);\n    }\n  }, {\n    key: \"init\",\n    value: function init() {\n      if (this.prev && this.next && this.slide) {\n        this.addEvent();\n      }\n      return this;\n    }\n  }]);\n  return SlideAnimais;\n}();\n\n\n//# sourceURL=webpack://projeto-animais-fantasticos/./js/modules/slideAnimais.js?");

/***/ }),

/***/ "./js/modules/tabnav.js":
/*!******************************!*\
  !*** ./js/modules/tabnav.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ TabNav)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n\n\nvar TabNav = /*#__PURE__*/function () {\n  function TabNav(imgPrincipal, thumbs, conteudo) {\n    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, TabNav);\n    this.imgPrincipal = document.querySelector(imgPrincipal);\n    this.thumbs = document.querySelectorAll(thumbs);\n    this.conteudo = document.querySelectorAll(conteudo);\n    this.ativarConteudo = this.ativarConteudo.bind(this);\n  }\n  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(TabNav, [{\n    key: \"ativarConteudo\",\n    value: function ativarConteudo(thumb, index) {\n      var src = thumb.getAttribute('src');\n      var alt = thumb.getAttribute('alt');\n      this.imgPrincipal.setAttribute('src', src);\n      this.imgPrincipal.setAttribute('alt', alt);\n      this.conteudo.forEach(function (section) {\n        section.classList.remove('ativo');\n      });\n      this.conteudo[index].classList.add('ativo', this.conteudo[index].dataset.anime);\n    }\n  }, {\n    key: \"addEvent\",\n    value: function addEvent() {\n      var _this = this;\n      this.thumbs.forEach(function (thumb, index) {\n        thumb.addEventListener('click', function () {\n          _this.ativarConteudo(thumb, index);\n        });\n      });\n    }\n  }, {\n    key: \"init\",\n    value: function init() {\n      if (this.imgPrincipal && this.thumbs.length && this.conteudo.length) {\n        this.addEvent();\n      }\n      return this;\n    }\n  }]);\n  return TabNav;\n}();\n\n\n//# sourceURL=webpack://projeto-animais-fantasticos/./js/modules/tabnav.js?");

/***/ }),

/***/ "./js/modules/tooltip.js":
/*!*******************************!*\
  !*** ./js/modules/tooltip.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Tooltip)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n\n\nvar Tooltip = /*#__PURE__*/function () {\n  function Tooltip(img) {\n    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, Tooltip);\n    this.img = document.querySelector(img);\n    this.onMouseOver = this.onMouseOver.bind(this);\n    this.onMouseLeave = this.onMouseLeave.bind(this);\n    this.onMouseMove = this.onMouseMove.bind(this);\n  }\n  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Tooltip, [{\n    key: \"onMouseOver\",\n    value: function onMouseOver(_ref) {\n      var currentTarget = _ref.currentTarget;\n      this.criarTooltipBox(currentTarget);\n      currentTarget.addEventListener('mouseleave', this.onMouseLeave);\n      currentTarget.addEventListener('mousemove', this.onMouseMove);\n    }\n  }, {\n    key: \"onMouseMove\",\n    value: function onMouseMove(e) {\n      this.tooltipBox.style.top = \"\".concat(e.pageY + 20, \"px\");\n      this.tooltipBox.style.left = \"\".concat(e.pageX + 20, \"px\");\n    }\n  }, {\n    key: \"onMouseLeave\",\n    value: function onMouseLeave(img) {\n      this.tooltipBox.remove();\n      img.currentTarget.removeEventListener('mouseleave', this.onMouseLeave);\n    }\n  }, {\n    key: \"criarTooltipBox\",\n    value: function criarTooltipBox(img) {\n      var tooltipBox = document.createElement('div');\n      var texto = img.getAttribute('aria-label');\n      tooltipBox.innerText = texto;\n      tooltipBox.classList.add('tooltip');\n      document.body.appendChild(tooltipBox);\n      this.tooltipBox = tooltipBox;\n    }\n  }, {\n    key: \"addEvent\",\n    value: function addEvent() {\n      this.img.addEventListener('mouseover', this.onMouseOver);\n    }\n  }, {\n    key: \"init\",\n    value: function init() {\n      if (this.img) {\n        this.addEvent();\n      }\n      return this;\n    }\n  }]);\n  return Tooltip;\n}();\n\n\n//# sourceURL=webpack://projeto-animais-fantasticos/./js/modules/tooltip.js?");

/***/ }),

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_tabnav_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/tabnav.js */ \"./js/modules/tabnav.js\");\n/* harmony import */ var _modules_accordion_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/accordion.js */ \"./js/modules/accordion.js\");\n/* harmony import */ var _modules_scrollSuave_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/scrollSuave.js */ \"./js/modules/scrollSuave.js\");\n/* harmony import */ var _modules_scrollAnimacao_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/scrollAnimacao.js */ \"./js/modules/scrollAnimacao.js\");\n/* harmony import */ var _modules_modal_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/modal.js */ \"./js/modules/modal.js\");\n/* harmony import */ var _modules_tooltip_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/tooltip.js */ \"./js/modules/tooltip.js\");\n/* harmony import */ var _modules_dropdown_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/dropdown.js */ \"./js/modules/dropdown.js\");\n/* harmony import */ var _modules_menuMobile_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/menuMobile.js */ \"./js/modules/menuMobile.js\");\n/* harmony import */ var _modules_animaisNumeros_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/animaisNumeros.js */ \"./js/modules/animaisNumeros.js\");\n/* harmony import */ var _modules_horario_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/horario.js */ \"./js/modules/horario.js\");\n/* harmony import */ var _modules_bitcoin_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/bitcoin.js */ \"./js/modules/bitcoin.js\");\n/* harmony import */ var _modules_slide_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modules/slide.js */ \"./js/modules/slide.js\");\n/* harmony import */ var _modules_slideAnimais_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./modules/slideAnimais.js */ \"./js/modules/slideAnimais.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar tabnav = new _modules_tabnav_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('[data-animais=\"imgPrincipal\"]', '[data-animais=\"animaisThumbs\"] img', '[data-animais=\"animaisConteudo\"] section');\ntabnav.init();\nvar accordion = new _modules_accordion_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('[data-accordion=\"faq\"] dt');\naccordion.init();\nvar scrollSuave = new _modules_scrollSuave_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]('[data-menu=\"menu\"] a[href^=\"#\"]');\nscrollSuave.init();\nvar scrollAnimacao = new _modules_scrollAnimacao_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"]('[data-anime=\"scroll\"]');\nscrollAnimacao.init();\nvar modal = new _modules_modal_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"]('[data-modal=\"modal\"]', '[data-modal=\"abrir\"]', '[data-modal=\"fechar\"]');\nmodal.init();\nvar tooltip = new _modules_tooltip_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"]('[data-tooltip]');\ntooltip.init();\nvar dropdown = new _modules_dropdown_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"]('[data-dropdown]');\ndropdown.init();\nvar menuMobile = new _modules_menuMobile_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"]('[data-menu=\"menuBotao\"]', '[data-menu=\"menu\"]');\nmenuMobile.init();\nvar animaisNumeros = new _modules_animaisNumeros_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"]('[data-observer]', '[data-numeros] span', '[data-numeros] h3');\nanimaisNumeros.init();\nvar horario = new _modules_horario_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"]('[data-semana]', '[data-horario]');\nhorario.init();\nvar bitcoin = new _modules_bitcoin_js__WEBPACK_IMPORTED_MODULE_10__[\"default\"]('[data-btc]');\nbitcoin.init();\nvar slide = new _modules_slide_js__WEBPACK_IMPORTED_MODULE_11__[\"default\"]('.slide-wrapper', '.slide');\nslide.init();\nslide.addControl('.custom-control');\nvar slideAnimais = new _modules_slideAnimais_js__WEBPACK_IMPORTED_MODULE_12__[\"default\"]('[data-animais=\"animaisThumbs\"]', '[data-animais=\"slidePrev\"]', '[data-animais=\"slideNext\"]');\nslideAnimais.init();\n\n//# sourceURL=webpack://projeto-animais-fantasticos/./js/script.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/regeneratorRuntime.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/regeneratorRuntime.js ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var _typeof = (__webpack_require__(/*! ./typeof.js */ \"./node_modules/@babel/runtime/helpers/typeof.js\")[\"default\"]);\nfunction _regeneratorRuntime() {\n  \"use strict\"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */\n  module.exports = _regeneratorRuntime = function _regeneratorRuntime() {\n    return e;\n  }, module.exports.__esModule = true, module.exports[\"default\"] = module.exports;\n  var t,\n    e = {},\n    r = Object.prototype,\n    n = r.hasOwnProperty,\n    o = Object.defineProperty || function (t, e, r) {\n      t[e] = r.value;\n    },\n    i = \"function\" == typeof Symbol ? Symbol : {},\n    a = i.iterator || \"@@iterator\",\n    c = i.asyncIterator || \"@@asyncIterator\",\n    u = i.toStringTag || \"@@toStringTag\";\n  function define(t, e, r) {\n    return Object.defineProperty(t, e, {\n      value: r,\n      enumerable: !0,\n      configurable: !0,\n      writable: !0\n    }), t[e];\n  }\n  try {\n    define({}, \"\");\n  } catch (t) {\n    define = function define(t, e, r) {\n      return t[e] = r;\n    };\n  }\n  function wrap(t, e, r, n) {\n    var i = e && e.prototype instanceof Generator ? e : Generator,\n      a = Object.create(i.prototype),\n      c = new Context(n || []);\n    return o(a, \"_invoke\", {\n      value: makeInvokeMethod(t, r, c)\n    }), a;\n  }\n  function tryCatch(t, e, r) {\n    try {\n      return {\n        type: \"normal\",\n        arg: t.call(e, r)\n      };\n    } catch (t) {\n      return {\n        type: \"throw\",\n        arg: t\n      };\n    }\n  }\n  e.wrap = wrap;\n  var h = \"suspendedStart\",\n    l = \"suspendedYield\",\n    f = \"executing\",\n    s = \"completed\",\n    y = {};\n  function Generator() {}\n  function GeneratorFunction() {}\n  function GeneratorFunctionPrototype() {}\n  var p = {};\n  define(p, a, function () {\n    return this;\n  });\n  var d = Object.getPrototypeOf,\n    v = d && d(d(values([])));\n  v && v !== r && n.call(v, a) && (p = v);\n  var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p);\n  function defineIteratorMethods(t) {\n    [\"next\", \"throw\", \"return\"].forEach(function (e) {\n      define(t, e, function (t) {\n        return this._invoke(e, t);\n      });\n    });\n  }\n  function AsyncIterator(t, e) {\n    function invoke(r, o, i, a) {\n      var c = tryCatch(t[r], t, o);\n      if (\"throw\" !== c.type) {\n        var u = c.arg,\n          h = u.value;\n        return h && \"object\" == _typeof(h) && n.call(h, \"__await\") ? e.resolve(h.__await).then(function (t) {\n          invoke(\"next\", t, i, a);\n        }, function (t) {\n          invoke(\"throw\", t, i, a);\n        }) : e.resolve(h).then(function (t) {\n          u.value = t, i(u);\n        }, function (t) {\n          return invoke(\"throw\", t, i, a);\n        });\n      }\n      a(c.arg);\n    }\n    var r;\n    o(this, \"_invoke\", {\n      value: function value(t, n) {\n        function callInvokeWithMethodAndArg() {\n          return new e(function (e, r) {\n            invoke(t, n, e, r);\n          });\n        }\n        return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();\n      }\n    });\n  }\n  function makeInvokeMethod(e, r, n) {\n    var o = h;\n    return function (i, a) {\n      if (o === f) throw new Error(\"Generator is already running\");\n      if (o === s) {\n        if (\"throw\" === i) throw a;\n        return {\n          value: t,\n          done: !0\n        };\n      }\n      for (n.method = i, n.arg = a;;) {\n        var c = n.delegate;\n        if (c) {\n          var u = maybeInvokeDelegate(c, n);\n          if (u) {\n            if (u === y) continue;\n            return u;\n          }\n        }\n        if (\"next\" === n.method) n.sent = n._sent = n.arg;else if (\"throw\" === n.method) {\n          if (o === h) throw o = s, n.arg;\n          n.dispatchException(n.arg);\n        } else \"return\" === n.method && n.abrupt(\"return\", n.arg);\n        o = f;\n        var p = tryCatch(e, r, n);\n        if (\"normal\" === p.type) {\n          if (o = n.done ? s : l, p.arg === y) continue;\n          return {\n            value: p.arg,\n            done: n.done\n          };\n        }\n        \"throw\" === p.type && (o = s, n.method = \"throw\", n.arg = p.arg);\n      }\n    };\n  }\n  function maybeInvokeDelegate(e, r) {\n    var n = r.method,\n      o = e.iterator[n];\n    if (o === t) return r.delegate = null, \"throw\" === n && e.iterator[\"return\"] && (r.method = \"return\", r.arg = t, maybeInvokeDelegate(e, r), \"throw\" === r.method) || \"return\" !== n && (r.method = \"throw\", r.arg = new TypeError(\"The iterator does not provide a '\" + n + \"' method\")), y;\n    var i = tryCatch(o, e.iterator, r.arg);\n    if (\"throw\" === i.type) return r.method = \"throw\", r.arg = i.arg, r.delegate = null, y;\n    var a = i.arg;\n    return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, \"return\" !== r.method && (r.method = \"next\", r.arg = t), r.delegate = null, y) : a : (r.method = \"throw\", r.arg = new TypeError(\"iterator result is not an object\"), r.delegate = null, y);\n  }\n  function pushTryEntry(t) {\n    var e = {\n      tryLoc: t[0]\n    };\n    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e);\n  }\n  function resetTryEntry(t) {\n    var e = t.completion || {};\n    e.type = \"normal\", delete e.arg, t.completion = e;\n  }\n  function Context(t) {\n    this.tryEntries = [{\n      tryLoc: \"root\"\n    }], t.forEach(pushTryEntry, this), this.reset(!0);\n  }\n  function values(e) {\n    if (e || \"\" === e) {\n      var r = e[a];\n      if (r) return r.call(e);\n      if (\"function\" == typeof e.next) return e;\n      if (!isNaN(e.length)) {\n        var o = -1,\n          i = function next() {\n            for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next;\n            return next.value = t, next.done = !0, next;\n          };\n        return i.next = i;\n      }\n    }\n    throw new TypeError(_typeof(e) + \" is not iterable\");\n  }\n  return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, \"constructor\", {\n    value: GeneratorFunctionPrototype,\n    configurable: !0\n  }), o(GeneratorFunctionPrototype, \"constructor\", {\n    value: GeneratorFunction,\n    configurable: !0\n  }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, \"GeneratorFunction\"), e.isGeneratorFunction = function (t) {\n    var e = \"function\" == typeof t && t.constructor;\n    return !!e && (e === GeneratorFunction || \"GeneratorFunction\" === (e.displayName || e.name));\n  }, e.mark = function (t) {\n    return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, \"GeneratorFunction\")), t.prototype = Object.create(g), t;\n  }, e.awrap = function (t) {\n    return {\n      __await: t\n    };\n  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () {\n    return this;\n  }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) {\n    void 0 === i && (i = Promise);\n    var a = new AsyncIterator(wrap(t, r, n, o), i);\n    return e.isGeneratorFunction(r) ? a : a.next().then(function (t) {\n      return t.done ? t.value : a.next();\n    });\n  }, defineIteratorMethods(g), define(g, u, \"Generator\"), define(g, a, function () {\n    return this;\n  }), define(g, \"toString\", function () {\n    return \"[object Generator]\";\n  }), e.keys = function (t) {\n    var e = Object(t),\n      r = [];\n    for (var n in e) r.push(n);\n    return r.reverse(), function next() {\n      for (; r.length;) {\n        var t = r.pop();\n        if (t in e) return next.value = t, next.done = !1, next;\n      }\n      return next.done = !0, next;\n    };\n  }, e.values = values, Context.prototype = {\n    constructor: Context,\n    reset: function reset(e) {\n      if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = \"next\", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) \"t\" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t);\n    },\n    stop: function stop() {\n      this.done = !0;\n      var t = this.tryEntries[0].completion;\n      if (\"throw\" === t.type) throw t.arg;\n      return this.rval;\n    },\n    dispatchException: function dispatchException(e) {\n      if (this.done) throw e;\n      var r = this;\n      function handle(n, o) {\n        return a.type = \"throw\", a.arg = e, r.next = n, o && (r.method = \"next\", r.arg = t), !!o;\n      }\n      for (var o = this.tryEntries.length - 1; o >= 0; --o) {\n        var i = this.tryEntries[o],\n          a = i.completion;\n        if (\"root\" === i.tryLoc) return handle(\"end\");\n        if (i.tryLoc <= this.prev) {\n          var c = n.call(i, \"catchLoc\"),\n            u = n.call(i, \"finallyLoc\");\n          if (c && u) {\n            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);\n            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);\n          } else if (c) {\n            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);\n          } else {\n            if (!u) throw new Error(\"try statement without catch or finally\");\n            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);\n          }\n        }\n      }\n    },\n    abrupt: function abrupt(t, e) {\n      for (var r = this.tryEntries.length - 1; r >= 0; --r) {\n        var o = this.tryEntries[r];\n        if (o.tryLoc <= this.prev && n.call(o, \"finallyLoc\") && this.prev < o.finallyLoc) {\n          var i = o;\n          break;\n        }\n      }\n      i && (\"break\" === t || \"continue\" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);\n      var a = i ? i.completion : {};\n      return a.type = t, a.arg = e, i ? (this.method = \"next\", this.next = i.finallyLoc, y) : this.complete(a);\n    },\n    complete: function complete(t, e) {\n      if (\"throw\" === t.type) throw t.arg;\n      return \"break\" === t.type || \"continue\" === t.type ? this.next = t.arg : \"return\" === t.type ? (this.rval = this.arg = t.arg, this.method = \"return\", this.next = \"end\") : \"normal\" === t.type && e && (this.next = e), y;\n    },\n    finish: function finish(t) {\n      for (var e = this.tryEntries.length - 1; e >= 0; --e) {\n        var r = this.tryEntries[e];\n        if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y;\n      }\n    },\n    \"catch\": function _catch(t) {\n      for (var e = this.tryEntries.length - 1; e >= 0; --e) {\n        var r = this.tryEntries[e];\n        if (r.tryLoc === t) {\n          var n = r.completion;\n          if (\"throw\" === n.type) {\n            var o = n.arg;\n            resetTryEntry(r);\n          }\n          return o;\n        }\n      }\n      throw new Error(\"illegal catch attempt\");\n    },\n    delegateYield: function delegateYield(e, r, n) {\n      return this.delegate = {\n        iterator: values(e),\n        resultName: r,\n        nextLoc: n\n      }, \"next\" === this.method && (this.arg = t), y;\n    }\n  }, e;\n}\nmodule.exports = _regeneratorRuntime, module.exports.__esModule = true, module.exports[\"default\"] = module.exports;\n\n//# sourceURL=webpack://projeto-animais-fantasticos/./node_modules/@babel/runtime/helpers/regeneratorRuntime.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/***/ ((module) => {

eval("function _typeof(o) {\n  \"@babel/helpers - typeof\";\n\n  return (module.exports = _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) {\n    return typeof o;\n  } : function (o) {\n    return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o;\n  }, module.exports.__esModule = true, module.exports[\"default\"] = module.exports), _typeof(o);\n}\nmodule.exports = _typeof, module.exports.__esModule = true, module.exports[\"default\"] = module.exports;\n\n//# sourceURL=webpack://projeto-animais-fantasticos/./node_modules/@babel/runtime/helpers/typeof.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// TODO(Babel 8): Remove this file.\n\nvar runtime = __webpack_require__(/*! ../helpers/regeneratorRuntime */ \"./node_modules/@babel/runtime/helpers/regeneratorRuntime.js\")();\nmodule.exports = runtime;\n\n// Copied from https://github.com/facebook/regenerator/blob/main/packages/runtime/runtime.js#L736=\ntry {\n  regeneratorRuntime = runtime;\n} catch (accidentalStrictMode) {\n  if (typeof globalThis === \"object\") {\n    globalThis.regeneratorRuntime = runtime;\n  } else {\n    Function(\"r\", \"regeneratorRuntime = r\")(runtime);\n  }\n}\n\n\n//# sourceURL=webpack://projeto-animais-fantasticos/./node_modules/@babel/runtime/regenerator/index.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _arrayLikeToArray)\n/* harmony export */ });\nfunction _arrayLikeToArray(arr, len) {\n  if (len == null || len > arr.length) len = arr.length;\n  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];\n  return arr2;\n}\n\n//# sourceURL=webpack://projeto-animais-fantasticos/./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _arrayWithoutHoles)\n/* harmony export */ });\n/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ \"./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js\");\n\nfunction _arrayWithoutHoles(arr) {\n  if (Array.isArray(arr)) return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(arr);\n}\n\n//# sourceURL=webpack://projeto-animais-fantasticos/./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _assertThisInitialized)\n/* harmony export */ });\nfunction _assertThisInitialized(self) {\n  if (self === void 0) {\n    throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");\n  }\n  return self;\n}\n\n//# sourceURL=webpack://projeto-animais-fantasticos/./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _asyncToGenerator)\n/* harmony export */ });\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n  try {\n    var info = gen[key](arg);\n    var value = info.value;\n  } catch (error) {\n    reject(error);\n    return;\n  }\n  if (info.done) {\n    resolve(value);\n  } else {\n    Promise.resolve(value).then(_next, _throw);\n  }\n}\nfunction _asyncToGenerator(fn) {\n  return function () {\n    var self = this,\n      args = arguments;\n    return new Promise(function (resolve, reject) {\n      var gen = fn.apply(self, args);\n      function _next(value) {\n        asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n      }\n      function _throw(err) {\n        asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n      }\n      _next(undefined);\n    });\n  };\n}\n\n//# sourceURL=webpack://projeto-animais-fantasticos/./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _classCallCheck)\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) {\n  if (!(instance instanceof Constructor)) {\n    throw new TypeError(\"Cannot call a class as a function\");\n  }\n}\n\n//# sourceURL=webpack://projeto-animais-fantasticos/./node_modules/@babel/runtime/helpers/esm/classCallCheck.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/createClass.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/createClass.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _createClass)\n/* harmony export */ });\n/* harmony import */ var _toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toPropertyKey.js */ \"./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js\");\n\nfunction _defineProperties(target, props) {\n  for (var i = 0; i < props.length; i++) {\n    var descriptor = props[i];\n    descriptor.enumerable = descriptor.enumerable || false;\n    descriptor.configurable = true;\n    if (\"value\" in descriptor) descriptor.writable = true;\n    Object.defineProperty(target, (0,_toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(descriptor.key), descriptor);\n  }\n}\nfunction _createClass(Constructor, protoProps, staticProps) {\n  if (protoProps) _defineProperties(Constructor.prototype, protoProps);\n  if (staticProps) _defineProperties(Constructor, staticProps);\n  Object.defineProperty(Constructor, \"prototype\", {\n    writable: false\n  });\n  return Constructor;\n}\n\n//# sourceURL=webpack://projeto-animais-fantasticos/./node_modules/@babel/runtime/helpers/esm/createClass.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _getPrototypeOf)\n/* harmony export */ });\nfunction _getPrototypeOf(o) {\n  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {\n    return o.__proto__ || Object.getPrototypeOf(o);\n  };\n  return _getPrototypeOf(o);\n}\n\n//# sourceURL=webpack://projeto-animais-fantasticos/./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inherits.js":
/*!*************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inherits.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _inherits)\n/* harmony export */ });\n/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf.js */ \"./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js\");\n\nfunction _inherits(subClass, superClass) {\n  if (typeof superClass !== \"function\" && superClass !== null) {\n    throw new TypeError(\"Super expression must either be null or a function\");\n  }\n  subClass.prototype = Object.create(superClass && superClass.prototype, {\n    constructor: {\n      value: subClass,\n      writable: true,\n      configurable: true\n    }\n  });\n  Object.defineProperty(subClass, \"prototype\", {\n    writable: false\n  });\n  if (superClass) (0,_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(subClass, superClass);\n}\n\n//# sourceURL=webpack://projeto-animais-fantasticos/./node_modules/@babel/runtime/helpers/esm/inherits.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _iterableToArray)\n/* harmony export */ });\nfunction _iterableToArray(iter) {\n  if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter);\n}\n\n//# sourceURL=webpack://projeto-animais-fantasticos/./node_modules/@babel/runtime/helpers/esm/iterableToArray.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _nonIterableSpread)\n/* harmony export */ });\nfunction _nonIterableSpread() {\n  throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\n\n//# sourceURL=webpack://projeto-animais-fantasticos/./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _possibleConstructorReturn)\n/* harmony export */ });\n/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typeof.js */ \"./node_modules/@babel/runtime/helpers/esm/typeof.js\");\n/* harmony import */ var _assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assertThisInitialized.js */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n\n\nfunction _possibleConstructorReturn(self, call) {\n  if (call && ((0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(call) === \"object\" || typeof call === \"function\")) {\n    return call;\n  } else if (call !== void 0) {\n    throw new TypeError(\"Derived constructors may only return object or undefined\");\n  }\n  return (0,_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(self);\n}\n\n//# sourceURL=webpack://projeto-animais-fantasticos/./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _setPrototypeOf)\n/* harmony export */ });\nfunction _setPrototypeOf(o, p) {\n  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {\n    o.__proto__ = p;\n    return o;\n  };\n  return _setPrototypeOf(o, p);\n}\n\n//# sourceURL=webpack://projeto-animais-fantasticos/./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _toConsumableArray)\n/* harmony export */ });\n/* harmony import */ var _arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithoutHoles.js */ \"./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js\");\n/* harmony import */ var _iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArray.js */ \"./node_modules/@babel/runtime/helpers/esm/iterableToArray.js\");\n/* harmony import */ var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray.js */ \"./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js\");\n/* harmony import */ var _nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableSpread.js */ \"./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js\");\n\n\n\n\nfunction _toConsumableArray(arr) {\n  return (0,_arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(arr) || (0,_iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(arr) || (0,_unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(arr) || (0,_nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n}\n\n//# sourceURL=webpack://projeto-animais-fantasticos/./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toPrimitive.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toPrimitive.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _toPrimitive)\n/* harmony export */ });\n/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typeof.js */ \"./node_modules/@babel/runtime/helpers/esm/typeof.js\");\n\nfunction _toPrimitive(input, hint) {\n  if ((0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(input) !== \"object\" || input === null) return input;\n  var prim = input[Symbol.toPrimitive];\n  if (prim !== undefined) {\n    var res = prim.call(input, hint || \"default\");\n    if ((0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(res) !== \"object\") return res;\n    throw new TypeError(\"@@toPrimitive must return a primitive value.\");\n  }\n  return (hint === \"string\" ? String : Number)(input);\n}\n\n//# sourceURL=webpack://projeto-animais-fantasticos/./node_modules/@babel/runtime/helpers/esm/toPrimitive.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _toPropertyKey)\n/* harmony export */ });\n/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typeof.js */ \"./node_modules/@babel/runtime/helpers/esm/typeof.js\");\n/* harmony import */ var _toPrimitive_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toPrimitive.js */ \"./node_modules/@babel/runtime/helpers/esm/toPrimitive.js\");\n\n\nfunction _toPropertyKey(arg) {\n  var key = (0,_toPrimitive_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(arg, \"string\");\n  return (0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(key) === \"symbol\" ? key : String(key);\n}\n\n//# sourceURL=webpack://projeto-animais-fantasticos/./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!***********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _typeof)\n/* harmony export */ });\nfunction _typeof(o) {\n  \"@babel/helpers - typeof\";\n\n  return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) {\n    return typeof o;\n  } : function (o) {\n    return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o;\n  }, _typeof(o);\n}\n\n//# sourceURL=webpack://projeto-animais-fantasticos/./node_modules/@babel/runtime/helpers/esm/typeof.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _unsupportedIterableToArray)\n/* harmony export */ });\n/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ \"./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js\");\n\nfunction _unsupportedIterableToArray(o, minLen) {\n  if (!o) return;\n  if (typeof o === \"string\") return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(o, minLen);\n  var n = Object.prototype.toString.call(o).slice(8, -1);\n  if (n === \"Object\" && o.constructor) n = o.constructor.name;\n  if (n === \"Map\" || n === \"Set\") return Array.from(o);\n  if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(o, minLen);\n}\n\n//# sourceURL=webpack://projeto-animais-fantasticos/./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./js/script.js");
/******/ 	
/******/ })()
;