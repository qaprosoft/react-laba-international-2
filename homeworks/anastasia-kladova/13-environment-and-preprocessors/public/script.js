/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/styles/style.scss":
/*!*******************************!*\
  !*** ./src/styles/style.scss ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/style.scss */ "./src/styles/style.scss");


const body = document.body,
  colorThemeBtn = body.querySelector('.menu__btn'),
  headerHeading = body.querySelector('.person-card__heading'),
  btns = body.querySelectorAll('.btn'),
  btnActive = body.querySelector('.btn--active'),
  projectsBtnsBox = body.querySelector('.projects__btns'),
  twitterBtn = body.querySelector('.social__link--tw'),
  linkedinBtn = body.querySelector('.social__link--lin'),
  githubBtn = body.querySelector('.social__link--gh'),
  youtubeBtn = body.querySelector('.social__link--yt');

function changeColorTheme(e) {
  body.classList.toggle('dark-theme');
  e.target.classList.toggle('menu__btn--dark');
  headerHeading.classList.toggle('person-card__heading--dark');
  btnActive.classList.toggle('btn--active-dark');
  projectsBtnsBox.classList.toggle('projects__btns--dark');

  btns.forEach(elem => elem.classList.toggle('btn--dark'));

  twitterBtn.classList.toggle('social__link--tw-dark');
  linkedinBtn.classList.toggle('social__link--lin-dark');
  githubBtn.classList.toggle('social__link--gh-dark');
  youtubeBtn.classList.toggle('social__link--yt-dark');
}

colorThemeBtn.addEventListener('click', changeColorTheme);

})();

/******/ })()
;
//# sourceMappingURL=script.js.map