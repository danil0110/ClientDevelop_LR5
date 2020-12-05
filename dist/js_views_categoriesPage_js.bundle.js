/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkclientdevelop_lr5"] = self["webpackChunkclientdevelop_lr5"] || []).push([["js_views_categoriesPage_js"],{

/***/ "./js/views/categoriesPage.js":
/*!************************************!*
  !*** ./js/views/categoriesPage.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nconst view = (db) => {\r\n    let result = ``;\r\n    result += `\r\n            <div class=\"mt-4 pt-4\">\r\n                <h2 class=\"text-center text-dark font-weight-bold\">Категорії</h2>\r\n                <div class=\"row\">\r\n    `;\r\n    db.categories.map(category => {\r\n        result += `\r\n                    <div class=\"col-lg-4 col-md-6\">\r\n                        <div class=\"card pt-2 mt-5 ml-auto mr-auto\" style=\"width: 18rem;\">\r\n                            <a href=\"#category/${category.id}\">\r\n                                <img src=\"${db.products[category.productIds[0] - 1].img}\" class=\"card-img-top\" alt=\"${db.products[category.productIds[0] - 1].name}\">\r\n                                <div class=\"card-body\">\r\n                                    <h4 class=\"card-text text-center text-dark\">${category.name}</h4>\r\n                                </div>\r\n                            </a>\r\n                        </div>\r\n                    </div>\r\n        `;\r\n    });\r\n    result += `\r\n                </div>\r\n            </div>\r\n    `;\r\n    return result;\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (view);\n\n//# sourceURL=webpack://clientdevelop_lr5/./js/views/categoriesPage.js?");

/***/ })

}]);