/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nvar view = function view(db) {\n  var result = \"\";\n  var cart = JSON.parse(localStorage.getItem('cart'));\n  result += \"\\n            <div class=\\\"mt-4 pt-4\\\">\\n                <h2 class=\\\"text-center text-dark font-weight-bold\\\">\\u0414\\u044F\\u043A\\u0443\\u0454\\u043C\\u043E! :)</h2>\\n                <h3 class=\\\"text-center text-dark font-weight-bold\\\">\\u0412\\u0430\\u0448\\u0435 \\u0437\\u0430\\u043C\\u043E\\u0432\\u043B\\u0435\\u043D\\u043D\\u044F \\u2116\".concat(window.location.hash.split('/')[1], \"</h3>\\n                <div class=\\\"d-flex justify-content-center row mt-5\\\">\\n                    <div class=\\\"complete-order\\\">\\n                        <ul class=\\\"list-group\\\">\\n    \");\n  var totalPrice = 0;\n\n  for (var i = 0; i < cart.length; i++) {\n    for (var j = 0; j < db.products.length; j++) {\n      if (db.products[j].id == cart[i].id) {\n        result += \"\\n                            <li class=\\\"list-group-item d-flex justify-content-between align-items-center\\\">\\n                                <div class=\\\"d-flex flex-column justify-content-center\\\">\\n                                    <span class=\\\"text-dark font-weight-bold\\\">\".concat(db.products[j].name, \"</span>\\n                                    <span>\").concat(db.products[j].price * cart[i].count, \" \\u0433\\u0440\\u043D.</span>\\n                                </div>\\n                                <span class=\\\"badge badge-warning badge-pill\\\">x\").concat(cart[i].count, \"</span>\\n                            </li>\\n                        \");\n        totalPrice += db.products[j].price * cart[i].count;\n      }\n    }\n  }\n\n  result += \"\\n                            <li class=\\\"list-group-item d-flex justify-content-between align-items-center\\\">\\n                                <div class=\\\"d-flex flex-column justify-content-center\\\">\\n                                    <span class=\\\"text-dark font-weight-bold\\\">\\u0421\\u0443\\u043C\\u0430</span>\\n                                    <span>\".concat(totalPrice, \" \\u0433\\u0440\\u043D.</span>\\n                                </div>\\n                            </li>\\n                        </ul>\\n                    </div>\\n                </div>\\n            </div>\\n    \");\n  cart = [];\n  localStorage.setItem('cart', JSON.stringify(cart));\n  var countText = document.getElementById('cartQuantity');\n\n  if (countText != null) {\n    countText.remove();\n  }\n\n  return result;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (view);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnRkZXZlbG9wX2xyNS8uL2pzL3ZpZXdzL29yZGVyQ29tcGxldGVQYWdlLmpzP2QyNzQiXSwibmFtZXMiOlsidmlldyIsImRiIiwicmVzdWx0IiwiY2FydCIsIkpTT04iLCJwYXJzZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhhc2giLCJzcGxpdCIsInRvdGFsUHJpY2UiLCJpIiwibGVuZ3RoIiwiaiIsInByb2R1Y3RzIiwiaWQiLCJuYW1lIiwicHJpY2UiLCJjb3VudCIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJjb3VudFRleHQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwicmVtb3ZlIl0sIm1hcHBpbmdzIjoiOzs7O0FBQUEsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sQ0FBQUMsRUFBRSxFQUFJO0FBQ2YsTUFBSUMsTUFBTSxLQUFWO0FBQ0EsTUFBSUMsSUFBSSxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0MsWUFBWSxDQUFDQyxPQUFiLENBQXFCLE1BQXJCLENBQVgsQ0FBWDtBQUVBTCxRQUFNLGtWQUc0RU0sTUFBTSxDQUFDQyxRQUFQLENBQWdCQyxJQUFoQixDQUFxQkMsS0FBckIsQ0FBMkIsR0FBM0IsRUFBZ0MsQ0FBaEMsQ0FINUUsK0xBQU47QUFRQSxNQUFJQyxVQUFVLEdBQUcsQ0FBakI7O0FBQ0EsT0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHVixJQUFJLENBQUNXLE1BQXpCLEVBQWlDRCxDQUFDLEVBQWxDLEVBQXNDO0FBQ2xDLFNBQUssSUFBSUUsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR2QsRUFBRSxDQUFDZSxRQUFILENBQVlGLE1BQWhDLEVBQXdDQyxDQUFDLEVBQXpDLEVBQTZDO0FBQ3pDLFVBQUlkLEVBQUUsQ0FBQ2UsUUFBSCxDQUFZRCxDQUFaLEVBQWVFLEVBQWYsSUFBcUJkLElBQUksQ0FBQ1UsQ0FBRCxDQUFKLENBQVFJLEVBQWpDLEVBQXFDO0FBQ2pDZixjQUFNLHdTQUd5REQsRUFBRSxDQUFDZSxRQUFILENBQVlELENBQVosRUFBZUcsSUFIeEUsZ0VBSXNCakIsRUFBRSxDQUFDZSxRQUFILENBQVlELENBQVosRUFBZUksS0FBZixHQUF1QmhCLElBQUksQ0FBQ1UsQ0FBRCxDQUFKLENBQVFPLEtBSnJELGtLQU0wRGpCLElBQUksQ0FBQ1UsQ0FBRCxDQUFKLENBQVFPLEtBTmxFLHlFQUFOO0FBU0FSLGtCQUFVLElBQUlYLEVBQUUsQ0FBQ2UsUUFBSCxDQUFZRCxDQUFaLEVBQWVJLEtBQWYsR0FBdUJoQixJQUFJLENBQUNVLENBQUQsQ0FBSixDQUFRTyxLQUE3QztBQUNIO0FBQ0o7QUFDSjs7QUFDRGxCLFFBQU0sbVhBSWtDVSxVQUpsQyx3TkFBTjtBQWFBVCxNQUFJLEdBQUcsRUFBUDtBQUNBRyxjQUFZLENBQUNlLE9BQWIsQ0FBcUIsTUFBckIsRUFBNkJqQixJQUFJLENBQUNrQixTQUFMLENBQWVuQixJQUFmLENBQTdCO0FBRUEsTUFBSW9CLFNBQVMsR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLGNBQXhCLENBQWhCOztBQUNBLE1BQUlGLFNBQVMsSUFBSSxJQUFqQixFQUF1QjtBQUNuQkEsYUFBUyxDQUFDRyxNQUFWO0FBQ0g7O0FBRUQsU0FBT3hCLE1BQVA7QUFDSCxDQW5ERDs7QUFxREEsaUVBQWVGLElBQWYiLCJmaWxlIjoiLi9qcy92aWV3cy9vcmRlckNvbXBsZXRlUGFnZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHZpZXcgPSBkYiA9PiB7XHJcbiAgICBsZXQgcmVzdWx0ID0gYGA7XHJcbiAgICBsZXQgY2FydCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2NhcnQnKSk7XHJcbiAgICBcclxuICAgIHJlc3VsdCArPSBgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtdC00IHB0LTRcIj5cclxuICAgICAgICAgICAgICAgIDxoMiBjbGFzcz1cInRleHQtY2VudGVyIHRleHQtZGFyayBmb250LXdlaWdodC1ib2xkXCI+0JTRj9C60YPRlNC80L4hIDopPC9oMj5cclxuICAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cInRleHQtY2VudGVyIHRleHQtZGFyayBmb250LXdlaWdodC1ib2xkXCI+0JLQsNGI0LUg0LfQsNC80L7QstC70LXQvdC90Y8g4oSWJHt3aW5kb3cubG9jYXRpb24uaGFzaC5zcGxpdCgnLycpWzFdfTwvaDM+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgcm93IG10LTVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29tcGxldGUtb3JkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzPVwibGlzdC1ncm91cFwiPlxyXG4gICAgYDtcclxuICAgIGxldCB0b3RhbFByaWNlID0gMDtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2FydC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgZGIucHJvZHVjdHMubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgaWYgKGRiLnByb2R1Y3RzW2pdLmlkID09IGNhcnRbaV0uaWQpIHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdCArPSBgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJsaXN0LWdyb3VwLWl0ZW0gZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIGFsaWduLWl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkLWZsZXggZmxleC1jb2x1bW4ganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHQtZGFyayBmb250LXdlaWdodC1ib2xkXCI+JHtkYi5wcm9kdWN0c1tqXS5uYW1lfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+JHtkYi5wcm9kdWN0c1tqXS5wcmljZSAqIGNhcnRbaV0uY291bnR9INCz0YDQvS48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJiYWRnZSBiYWRnZS13YXJuaW5nIGJhZGdlLXBpbGxcIj54JHtjYXJ0W2ldLmNvdW50fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGA7XHJcbiAgICAgICAgICAgICAgICB0b3RhbFByaWNlICs9IGRiLnByb2R1Y3RzW2pdLnByaWNlICogY2FydFtpXS5jb3VudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJlc3VsdCArPSBgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJsaXN0LWdyb3VwLWl0ZW0gZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIGFsaWduLWl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkLWZsZXggZmxleC1jb2x1bW4ganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHQtZGFyayBmb250LXdlaWdodC1ib2xkXCI+0KHRg9C80LA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPiR7dG90YWxQcmljZX0g0LPRgNC9Ljwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICBgO1xyXG5cclxuICAgIGNhcnQgPSBbXTtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjYXJ0JywgSlNPTi5zdHJpbmdpZnkoY2FydCkpO1xyXG5cclxuICAgIGxldCBjb3VudFRleHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FydFF1YW50aXR5Jyk7XHJcbiAgICBpZiAoY291bnRUZXh0ICE9IG51bGwpIHtcclxuICAgICAgICBjb3VudFRleHQucmVtb3ZlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgdmlldzsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./js/views/orderCompletePage.js\n");

/***/ })

}]);