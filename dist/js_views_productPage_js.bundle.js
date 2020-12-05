/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkclientdevelop_lr5"] = self["webpackChunkclientdevelop_lr5"] || []).push([["js_views_productPage_js"],{

/***/ "./js/views/productPage.js":
/*!*********************************!*
  !*** ./js/views/productPage.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nconst view = (db, productId) => {\r\n    let result = ``;\r\n    result += `\r\n            <div class=\"row mt-4\">\r\n                <div class=\"col-lg-8\">\r\n                    <img class=\"w-100\" src=\"${db.products[productId - 1].img}\" alt=\"${db.products[productId - 1].name}\">\r\n                </div>\r\n                <div class=\"col-lg-4 d-flex flex-column justify-content-center\">\r\n                    <h2 class=\"text-center text-dark font-weight-bold mt-4\">${db.products[productId - 1].name}</h2>\r\n                    <p class=\"text-dark text-center mt-4 mb-4\">\r\n                        ${db.products[productId - 1].description}\r\n                    </p>\r\n                    <div class=\"d-flex justify-content-center\">\r\n                        <h4 class=\"text-center text-dark font-weight-bold mr-2\">\r\n                            ${db.products[productId - 1].price} грн.\r\n                        </h4>\r\n                        <div id=\"${db.products[productId - 1].id}\" class=\"btn btn-warning text-dark font-weight-bold ml-2\" product=\"${db.products[productId - 1].id}\" onclick=\"addToCart();\">\r\n                            В кошик\r\n                        </div>\r\n                     </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"popular-products\">\r\n                <h2 class=\"text-center text-dark font-weight-bold\">Інші продукти</h2>\r\n                <div class=\"row\">\r\n    `;\r\n    for (let i = 0; i < db.products[productId - 1].relatedProducts.length; i++) {\r\n        for (let j = 0; j < db.products.length; j++) {\r\n            if (db.products[j].id == db.products[productId - 1].relatedProducts[i]) {\r\n                if (i != 2) {\r\n                    result += `\r\n                    <div class=\"col-lg-4 col-md-6\">\r\n                        <div class=\"card pt-2 mt-5 ml-auto mr-auto\" style=\"width: 18rem;\">\r\n                            <a href=\"#product/${db.products[j].id}\">\r\n                                <img src=\"${db.products[j].img}\" class=\"card-img-top\" alt=\"${db.products[j].name}\">\r\n                                <div class=\"card-body\">\r\n                                    <h4 class=\"card-text text-center text-dark\">${db.products[j].name}</h4>\r\n                                </div>\r\n                            </a>\r\n                        </div>\r\n                    </div>\r\n                `;\r\n                }\r\n                else {\r\n                    result += `\r\n                    <div class=\"col-lg-4 col-md-12\">\r\n                        <div class=\"card pt-2 mt-5 ml-auto mr-auto\" style=\"width: 18rem;\">\r\n                            <a href=\"#product/${db.products[j].id}\">\r\n                                <img src=\"${db.products[j].img}\" class=\"card-img-top\" alt=\"${db.products[j].name}\">\r\n                                <div class=\"card-body\">\r\n                                    <h4 class=\"card-text text-center text-dark\">${db.products[j].name}</h4>\r\n                                </div>\r\n                            </a>\r\n                        </div>\r\n                    </div>\r\n                    `;\r\n                }\r\n            }\r\n        }\r\n    }\r\n\r\n    result += `\r\n                </div>\r\n            </div>\r\n    `;\r\n    return result;\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (view);\n\n//# sourceURL=webpack://clientdevelop_lr5/./js/views/productPage.js?");

/***/ })

}]);