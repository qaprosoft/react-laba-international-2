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

/***/ "./src/styles/style.scss":
/*!*******************************!*\
  !*** ./src/styles/style.scss ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://13-environment-and-preprocessors/./src/styles/style.scss?");

/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/style.scss */ \"./src/styles/style.scss\");\n\r\n\r\nconst body = document.body,\r\n  colorThemeBtn = body.querySelector('.menu__btn'),\r\n  headerHeading = body.querySelector('.person-card__heading'),\r\n  btns = body.querySelectorAll('.btn'),\r\n  btnActive = body.querySelector('.btn--active'),\r\n  projectsBtnsBox = body.querySelector('.projects__btns'),\r\n  twitterBtn = body.querySelector('.social__link--tw'),\r\n  linkedinBtn = body.querySelector('.social__link--lin'),\r\n  githubBtn = body.querySelector('.social__link--gh'),\r\n  youtubeBtn = body.querySelector('.social__link--yt');\r\n\r\nfunction changeColorTheme(e) {\r\n  body.classList.toggle('dark-theme');\r\n  e.target.classList.toggle('menu__btn--dark');\r\n  headerHeading.classList.toggle('person-card__heading--dark');\r\n  btnActive.classList.toggle('btn--active-dark');\r\n  projectsBtnsBox.classList.toggle('projects__btns--dark');\r\n\r\n  btns.forEach(elem => elem.classList.toggle('btn--dark'));\r\n\r\n  twitterBtn.classList.toggle('social__link--tw-dark');\r\n  linkedinBtn.classList.toggle('social__link--lin-dark');\r\n  githubBtn.classList.toggle('social__link--gh-dark');\r\n  youtubeBtn.classList.toggle('social__link--yt-dark');\r\n}\r\n\r\ncolorThemeBtn.addEventListener('click', changeColorTheme);\r\n\n\n//# sourceURL=webpack://13-environment-and-preprocessors/./src/js/script.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/script.js");
/******/ 	
/******/ })()
;