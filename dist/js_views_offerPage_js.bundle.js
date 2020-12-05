/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkclientdevelop_lr5"] = self["webpackChunkclientdevelop_lr5"] || []).push([["js_views_offerPage_js"],{

/***/ "./js/views/offerPage.js":
/*!*******************************!*
  !*** ./js/views/offerPage.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nconst view = (db, offerId) => {\r\n    let result = `\r\n            <div class=\"mt-4 pt-4\">\r\n                <h2 class=\"text-center text-dark font-weight-bold mb-5\">${db.offers[offerId - 1].slogan}</h2>\r\n                <img class=\"w-100 mb-4 rounded shadow\" src=\"${db.offers[offerId - 1].img}\" draggable=\"false\" alt=\"${db.offers[offerId - 1].name}\" />\r\n                <h2 class=\"text-center text-dark font-weight-bold mb-4\">${db.offers[offerId - 1].name}</h2>\r\n                <p class=\"text-center\">${db.offers[offerId - 1].description}</p>\r\n            </div>\r\n    `;\r\n    return result;\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (view);\n\n//# sourceURL=webpack://clientdevelop_lr5/./js/views/offerPage.js?");

/***/ })

}]);