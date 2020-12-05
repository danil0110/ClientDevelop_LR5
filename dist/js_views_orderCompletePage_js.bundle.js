/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkclientdevelop_lr5"] = self["webpackChunkclientdevelop_lr5"] || []).push([["js_views_orderCompletePage_js"],{

/***/ "./js/views/orderCompletePage.js":
/*!***************************************!*
  !*** ./js/views/orderCompletePage.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nconst view = db => {\r\n    let result = ``;\r\n    let cart = JSON.parse(localStorage.getItem('cart'));\r\n    \r\n    result += `\r\n            <div class=\"mt-4 pt-4\">\r\n                <h2 class=\"text-center text-dark font-weight-bold\">Дякуємо! :)</h2>\r\n                <h3 class=\"text-center text-dark font-weight-bold\">Ваше замовлення №${window.location.hash.split('/')[1]}</h3>\r\n                <div class=\"d-flex justify-content-center row mt-5\">\r\n                    <div class=\"complete-order\">\r\n                        <ul class=\"list-group\">\r\n    `;\r\n    let totalPrice = 0;\r\n    for (let i = 0; i < cart.length; i++) {\r\n        for (let j = 0; j < db.products.length; j++) {\r\n            if (db.products[j].id == cart[i].id) {\r\n                result += `\r\n                            <li class=\"list-group-item d-flex justify-content-between align-items-center\">\r\n                                <div class=\"d-flex flex-column justify-content-center\">\r\n                                    <span class=\"text-dark font-weight-bold\">${db.products[j].name}</span>\r\n                                    <span>${db.products[j].price * cart[i].count} грн.</span>\r\n                                </div>\r\n                                <span class=\"badge badge-warning badge-pill\">x${cart[i].count}</span>\r\n                            </li>\r\n                        `;\r\n                totalPrice += db.products[j].price * cart[i].count;\r\n            }\r\n        }\r\n    }\r\n    result += `\r\n                            <li class=\"list-group-item d-flex justify-content-between align-items-center\">\r\n                                <div class=\"d-flex flex-column justify-content-center\">\r\n                                    <span class=\"text-dark font-weight-bold\">Сума</span>\r\n                                    <span>${totalPrice} грн.</span>\r\n                                </div>\r\n                            </li>\r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n    `;\r\n\r\n    cart = [];\r\n    localStorage.setItem('cart', JSON.stringify(cart));\r\n\r\n    let countText = document.getElementById('cartQuantity');\r\n    if (countText != null) {\r\n        countText.remove();\r\n    }\r\n\r\n    return result;\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (view);\n\n//# sourceURL=webpack://clientdevelop_lr5/./js/views/orderCompletePage.js?");

/***/ })

}]);