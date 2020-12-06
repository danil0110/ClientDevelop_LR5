/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nvar view = function view(db, offerId) {\n  var result = \"\\n            <div class=\\\"mt-4 pt-4\\\">\\n                <h2 class=\\\"text-center text-dark font-weight-bold mb-5\\\">\".concat(db.offers[offerId - 1].slogan, \"</h2>\\n                <img class=\\\"w-100 mb-4 rounded shadow\\\" src=\\\"\").concat(db.offers[offerId - 1].img, \"\\\" draggable=\\\"false\\\" alt=\\\"\").concat(db.offers[offerId - 1].name, \"\\\" />\\n                <h2 class=\\\"text-center text-dark font-weight-bold mb-4\\\">\").concat(db.offers[offerId - 1].name, \"</h2>\\n                <p class=\\\"text-center\\\">\").concat(db.offers[offerId - 1].description, \"</p>\\n            </div>\\n    \");\n  return result;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (view);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnRkZXZlbG9wX2xyNS8uL2pzL3ZpZXdzL29mZmVyUGFnZS5qcz83NWI3Il0sIm5hbWVzIjpbInZpZXciLCJkYiIsIm9mZmVySWQiLCJyZXN1bHQiLCJvZmZlcnMiLCJzbG9nYW4iLCJpbWciLCJuYW1lIiwiZGVzY3JpcHRpb24iXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxDQUFDQyxFQUFELEVBQUtDLE9BQUwsRUFBaUI7QUFDMUIsTUFBSUMsTUFBTSxnSUFFNERGLEVBQUUsQ0FBQ0csTUFBSCxDQUFVRixPQUFPLEdBQUcsQ0FBcEIsRUFBdUJHLE1BRm5GLG1GQUdnREosRUFBRSxDQUFDRyxNQUFILENBQVVGLE9BQU8sR0FBRyxDQUFwQixFQUF1QkksR0FIdkUsMENBR3NHTCxFQUFFLENBQUNHLE1BQUgsQ0FBVUYsT0FBTyxHQUFHLENBQXBCLEVBQXVCSyxJQUg3SCw4RkFJNEROLEVBQUUsQ0FBQ0csTUFBSCxDQUFVRixPQUFPLEdBQUcsQ0FBcEIsRUFBdUJLLElBSm5GLDZEQUsyQk4sRUFBRSxDQUFDRyxNQUFILENBQVVGLE9BQU8sR0FBRyxDQUFwQixFQUF1Qk0sV0FMbEQsbUNBQVY7QUFRQSxTQUFPTCxNQUFQO0FBQ0gsQ0FWRDs7QUFZQSxpRUFBZUgsSUFBZiIsImZpbGUiOiIuL2pzL3ZpZXdzL29mZmVyUGFnZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHZpZXcgPSAoZGIsIG9mZmVySWQpID0+IHtcclxuICAgIGxldCByZXN1bHQgPSBgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtdC00IHB0LTRcIj5cclxuICAgICAgICAgICAgICAgIDxoMiBjbGFzcz1cInRleHQtY2VudGVyIHRleHQtZGFyayBmb250LXdlaWdodC1ib2xkIG1iLTVcIj4ke2RiLm9mZmVyc1tvZmZlcklkIC0gMV0uc2xvZ2FufTwvaDI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzPVwidy0xMDAgbWItNCByb3VuZGVkIHNoYWRvd1wiIHNyYz1cIiR7ZGIub2ZmZXJzW29mZmVySWQgLSAxXS5pbWd9XCIgZHJhZ2dhYmxlPVwiZmFsc2VcIiBhbHQ9XCIke2RiLm9mZmVyc1tvZmZlcklkIC0gMV0ubmFtZX1cIiAvPlxyXG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzPVwidGV4dC1jZW50ZXIgdGV4dC1kYXJrIGZvbnQtd2VpZ2h0LWJvbGQgbWItNFwiPiR7ZGIub2ZmZXJzW29mZmVySWQgLSAxXS5uYW1lfTwvaDI+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInRleHQtY2VudGVyXCI+JHtkYi5vZmZlcnNbb2ZmZXJJZCAtIDFdLmRlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICBgO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgdmlldzsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./js/views/offerPage.js\n");

/***/ })

}]);