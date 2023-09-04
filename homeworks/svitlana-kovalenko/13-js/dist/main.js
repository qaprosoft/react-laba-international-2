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

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ (() => {

eval("\r\n\r\nconst toTop = document.querySelector('.scroll_btn');\r\n\r\nwindow.addEventListener('scroll', () => {\r\n  if (window.pageYOffset > 100) {\r\n    toTop.classList.add('active');\r\n  } else {\r\n    toTop.classList.remove('active');\r\n  }\r\n});\r\n\r\nconst portfolioImg = document.querySelector('.portfolio__img');\r\n\r\nportfolioImg.addEventListener('mouseover', function () {\r\n  portfolioImg.style.animation = 'rotateAnimation 1s forwards';\r\n});\r\n\r\nportfolioImg.addEventListener('mouseout', function () {\r\n  portfolioImg.style.animation = 'none';\r\n});\r\n\r\nconst btnToTop = document.querySelector('.scroll_btn');\r\nbtnToTop.addEventListener('click', scrollToTop);\r\nfunction scrollToTop() {\r\n  document.body.scrollTop = 0;\r\n  document.documentElement.scrollTop = 0;\r\n}\r\n\n\n//# sourceURL=webpack://13/./src/js/main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/main.js"]();
/******/ 	
/******/ })()
;