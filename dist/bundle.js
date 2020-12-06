/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./js/views lazy recursive ^\\.\\/.*\\.js$":
/*!******************************************************!*
  !*** ./js/views/ lazy ^\.\/.*\.js$ namespace object ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./cartPage.js": [
		"./js/views/cartPage.js",
		"js_views_cartPage_js"
	],
	"./categoriesPage.js": [
		"./js/views/categoriesPage.js",
		"js_views_categoriesPage_js"
	],
	"./categoryPage.js": [
		"./js/views/categoryPage.js",
		"js_views_categoryPage_js"
	],
	"./homePage.js": [
		"./js/views/homePage.js",
		"js_views_homePage_js"
	],
	"./offerPage.js": [
		"./js/views/offerPage.js",
		"js_views_offerPage_js"
	],
	"./orderCompletePage.js": [
		"./js/views/orderCompletePage.js",
		"js_views_orderCompletePage_js"
	],
	"./orderPage.js": [
		"./js/views/orderPage.js",
		"js_views_orderPage_js"
	],
	"./productPage.js": [
		"./js/views/productPage.js",
		"js_views_productPage_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => Object.keys(map);
webpackAsyncContext.id = "./js/views lazy recursive ^\\.\\/.*\\.js$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./js/main.js":
/*!********************!*
  !*** ./js/main.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _templateEngine_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./templateEngine.js */ \"./js/templateEngine.js\");\n/* harmony import */ var _router_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./router.js */ \"./js/router.js\");\n\n\nvar router = new _router_js__WEBPACK_IMPORTED_MODULE_1__.default();\nvar templateEngine = new _templateEngine_js__WEBPACK_IMPORTED_MODULE_0__.default();\nvar db;\nvar view;\n\nwindow.onload = function () {\n  displayLoadingSpinner();\n  fetch(\"https://my-json-server.typicode.com/danil0110/McDonaldsDB/db\").then(function (response) {\n    return response.json();\n  }).then(function (data) {\n    db = data;\n\n    var _router$getCurrentPat = router.getCurrentPath(db),\n        viewName = _router$getCurrentPat.viewName,\n        categoryId = _router$getCurrentPat.categoryId,\n        productId = _router$getCurrentPat.productId,\n        offerId = _router$getCurrentPat.offerId;\n\n    __webpack_require__(\"./js/views lazy recursive ^\\\\.\\\\/.*\\\\.js$\")(\"./\".concat(viewName, \".js\")).then(function (viewModule) {\n      view = viewModule[\"default\"];\n      renderPage(categoryId, productId, offerId);\n\n      if (viewModule.postRender) {\n        viewModule.postRender();\n      }\n    });\n  });\n  window.scrollTo({\n    top: 0,\n    behavior: \"smooth\"\n  });\n};\n\nwindow.onhashchange = function () {\n  displayLoadingSpinner();\n\n  var _router$getCurrentPat2 = router.getCurrentPath(db),\n      viewName = _router$getCurrentPat2.viewName,\n      categoryId = _router$getCurrentPat2.categoryId,\n      productId = _router$getCurrentPat2.productId,\n      offerId = _router$getCurrentPat2.offerId;\n\n  __webpack_require__(\"./js/views lazy recursive ^\\\\.\\\\/.*\\\\.js$\")(\"./\".concat(viewName, \".js\")).then(function (viewModule) {\n    view = viewModule[\"default\"];\n    renderPage(categoryId, productId, offerId);\n\n    if (viewModule.postRender) {\n      viewModule.postRender();\n    }\n  });\n  window.scrollTo({\n    top: 0,\n    behavior: \"smooth\"\n  });\n};\n\nfunction renderPage(categoryId, productId, offerId) {\n  if (categoryId != 0) {\n    templateEngine.render(view(db, categoryId));\n  } else if (productId != 0) {\n    templateEngine.render(view(db, productId));\n  } else if (offerId != 0) {\n    templateEngine.render(view(db, offerId));\n  } else {\n    templateEngine.render(view(db));\n  }\n}\n\nfunction displayLoadingSpinner() {\n  document.querySelector('main').innerHTML = \"\\n    <div class=\\\"mt-4 pt-4\\\">\\n                <div class=\\\"loading-spinner\\\"></div>\\n    </div>\\n    \";\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnRkZXZlbG9wX2xyNS8uL2pzL21haW4uanM/ZTNiMSJdLCJuYW1lcyI6WyJyb3V0ZXIiLCJSb3V0ZXIiLCJ0ZW1wbGF0ZUVuZ2luZSIsIlRlbXBsYXRlRW5naW5lIiwiZGIiLCJ2aWV3Iiwid2luZG93Iiwib25sb2FkIiwiZGlzcGxheUxvYWRpbmdTcGlubmVyIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiZGF0YSIsImdldEN1cnJlbnRQYXRoIiwidmlld05hbWUiLCJjYXRlZ29yeUlkIiwicHJvZHVjdElkIiwib2ZmZXJJZCIsInZpZXdNb2R1bGUiLCJyZW5kZXJQYWdlIiwicG9zdFJlbmRlciIsInNjcm9sbFRvIiwidG9wIiwiYmVoYXZpb3IiLCJvbmhhc2hjaGFuZ2UiLCJyZW5kZXIiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJpbm5lckhUTUwiXSwibWFwcGluZ3MiOiI7OztBQUFBO0FBQ0E7QUFFQSxJQUFJQSxNQUFNLEdBQUcsSUFBSUMsK0NBQUosRUFBYjtBQUNBLElBQUlDLGNBQWMsR0FBRyxJQUFJQyx1REFBSixFQUFyQjtBQUVBLElBQUlDLEVBQUo7QUFDQSxJQUFJQyxJQUFKOztBQUVBQyxNQUFNLENBQUNDLE1BQVAsR0FBZ0IsWUFBTTtBQUNsQkMsdUJBQXFCO0FBQ3JCQyxPQUFLLENBQUMsOERBQUQsQ0FBTCxDQUNLQyxJQURMLENBQ1UsVUFBQUMsUUFBUTtBQUFBLFdBQUlBLFFBQVEsQ0FBQ0MsSUFBVCxFQUFKO0FBQUEsR0FEbEIsRUFFS0YsSUFGTCxDQUVVLFVBQUFHLElBQUksRUFBSTtBQUNWVCxNQUFFLEdBQUdTLElBQUw7O0FBRFUsZ0NBRXlDYixNQUFNLENBQUNjLGNBQVAsQ0FBc0JWLEVBQXRCLENBRnpDO0FBQUEsUUFFSlcsUUFGSSx5QkFFSkEsUUFGSTtBQUFBLFFBRU1DLFVBRk4seUJBRU1BLFVBRk47QUFBQSxRQUVrQkMsU0FGbEIseUJBRWtCQSxTQUZsQjtBQUFBLFFBRTZCQyxPQUY3Qix5QkFFNkJBLE9BRjdCOztBQUdWLHFFQUFPLFlBQVdILFFBQWxCLFVBQ0tMLElBREwsQ0FDVSxVQUFBUyxVQUFVLEVBQUk7QUFDaEJkLFVBQUksR0FBR2MsVUFBVSxXQUFqQjtBQUNBQyxnQkFBVSxDQUFDSixVQUFELEVBQWFDLFNBQWIsRUFBd0JDLE9BQXhCLENBQVY7O0FBQ0EsVUFBSUMsVUFBVSxDQUFDRSxVQUFmLEVBQTJCO0FBQ3ZCRixrQkFBVSxDQUFDRSxVQUFYO0FBQ0g7QUFDUixLQVBEO0FBUUgsR0FiTDtBQWVJZixRQUFNLENBQUNnQixRQUFQLENBQWdCO0FBQ1pDLE9BQUcsRUFBRSxDQURPO0FBRVpDLFlBQVEsRUFBRTtBQUZFLEdBQWhCO0FBSVAsQ0FyQkQ7O0FBdUJBbEIsTUFBTSxDQUFDbUIsWUFBUCxHQUFzQixZQUFNO0FBQ3hCakIsdUJBQXFCOztBQURHLCtCQUUyQlIsTUFBTSxDQUFDYyxjQUFQLENBQXNCVixFQUF0QixDQUYzQjtBQUFBLE1BRWxCVyxRQUZrQiwwQkFFbEJBLFFBRmtCO0FBQUEsTUFFUkMsVUFGUSwwQkFFUkEsVUFGUTtBQUFBLE1BRUlDLFNBRkosMEJBRUlBLFNBRko7QUFBQSxNQUVlQyxPQUZmLDBCQUVlQSxPQUZmOztBQUd4QixtRUFBTyxZQUFXSCxRQUFsQixVQUNLTCxJQURMLENBQ1UsVUFBQVMsVUFBVSxFQUFJO0FBQ2hCZCxRQUFJLEdBQUdjLFVBQVUsV0FBakI7QUFDQUMsY0FBVSxDQUFDSixVQUFELEVBQWFDLFNBQWIsRUFBd0JDLE9BQXhCLENBQVY7O0FBQ0EsUUFBSUMsVUFBVSxDQUFDRSxVQUFmLEVBQTJCO0FBQ3ZCRixnQkFBVSxDQUFDRSxVQUFYO0FBQ0g7QUFDUixHQVBEO0FBU0FmLFFBQU0sQ0FBQ2dCLFFBQVAsQ0FBZ0I7QUFDWkMsT0FBRyxFQUFFLENBRE87QUFFWkMsWUFBUSxFQUFFO0FBRkUsR0FBaEI7QUFJSCxDQWhCRDs7QUFrQkEsU0FBU0osVUFBVCxDQUFvQkosVUFBcEIsRUFBZ0NDLFNBQWhDLEVBQTJDQyxPQUEzQyxFQUFvRDtBQUNoRCxNQUFJRixVQUFVLElBQUksQ0FBbEIsRUFBcUI7QUFDakJkLGtCQUFjLENBQUN3QixNQUFmLENBQXNCckIsSUFBSSxDQUFDRCxFQUFELEVBQUtZLFVBQUwsQ0FBMUI7QUFDSCxHQUZELE1BRU8sSUFBSUMsU0FBUyxJQUFJLENBQWpCLEVBQW9CO0FBQ3ZCZixrQkFBYyxDQUFDd0IsTUFBZixDQUFzQnJCLElBQUksQ0FBQ0QsRUFBRCxFQUFLYSxTQUFMLENBQTFCO0FBQ0gsR0FGTSxNQUVBLElBQUlDLE9BQU8sSUFBSSxDQUFmLEVBQWtCO0FBQ3JCaEIsa0JBQWMsQ0FBQ3dCLE1BQWYsQ0FBc0JyQixJQUFJLENBQUNELEVBQUQsRUFBS2MsT0FBTCxDQUExQjtBQUNILEdBRk0sTUFFQTtBQUNIaEIsa0JBQWMsQ0FBQ3dCLE1BQWYsQ0FBc0JyQixJQUFJLENBQUNELEVBQUQsQ0FBMUI7QUFDSDtBQUNKOztBQUVELFNBQVNJLHFCQUFULEdBQWlDO0FBQzdCbUIsVUFBUSxDQUFDQyxhQUFULENBQXVCLE1BQXZCLEVBQStCQyxTQUEvQjtBQUtIIiwiZmlsZSI6Ii4vanMvbWFpbi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUZW1wbGF0ZUVuZ2luZSBmcm9tICcuL3RlbXBsYXRlRW5naW5lLmpzJztcclxuaW1wb3J0IFJvdXRlciBmcm9tICcuL3JvdXRlci5qcyc7XHJcblxyXG5sZXQgcm91dGVyID0gbmV3IFJvdXRlcigpO1xyXG5sZXQgdGVtcGxhdGVFbmdpbmUgPSBuZXcgVGVtcGxhdGVFbmdpbmUoKTtcclxuXHJcbmxldCBkYjtcclxubGV0IHZpZXc7XHJcblxyXG53aW5kb3cub25sb2FkID0gKCkgPT4ge1xyXG4gICAgZGlzcGxheUxvYWRpbmdTcGlubmVyKCk7XHJcbiAgICBmZXRjaChcImh0dHBzOi8vbXktanNvbi1zZXJ2ZXIudHlwaWNvZGUuY29tL2RhbmlsMDExMC9NY0RvbmFsZHNEQi9kYlwiKVxyXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAudGhlbihkYXRhID0+IHtcclxuICAgICAgICAgICAgZGIgPSBkYXRhO1xyXG4gICAgICAgICAgICBsZXQgeyB2aWV3TmFtZSwgY2F0ZWdvcnlJZCwgcHJvZHVjdElkLCBvZmZlcklkIH0gPSByb3V0ZXIuZ2V0Q3VycmVudFBhdGgoZGIpO1xyXG4gICAgICAgICAgICBpbXBvcnQoYC4vdmlld3MvJHt2aWV3TmFtZX0uanNgKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4odmlld01vZHVsZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmlldyA9IHZpZXdNb2R1bGUuZGVmYXVsdDtcclxuICAgICAgICAgICAgICAgICAgICByZW5kZXJQYWdlKGNhdGVnb3J5SWQsIHByb2R1Y3RJZCwgb2ZmZXJJZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZpZXdNb2R1bGUucG9zdFJlbmRlcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2aWV3TW9kdWxlLnBvc3RSZW5kZXIoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oe1xyXG4gICAgICAgICAgICB0b3A6IDAsXHJcbiAgICAgICAgICAgIGJlaGF2aW9yOiBcInNtb290aFwiXHJcbiAgICAgICAgfSk7XHJcbn1cclxuXHJcbndpbmRvdy5vbmhhc2hjaGFuZ2UgPSAoKSA9PiB7XHJcbiAgICBkaXNwbGF5TG9hZGluZ1NwaW5uZXIoKTtcclxuICAgIGxldCB7IHZpZXdOYW1lLCBjYXRlZ29yeUlkLCBwcm9kdWN0SWQsIG9mZmVySWQgfSA9IHJvdXRlci5nZXRDdXJyZW50UGF0aChkYik7XHJcbiAgICBpbXBvcnQoYC4vdmlld3MvJHt2aWV3TmFtZX0uanNgKVxyXG4gICAgICAgIC50aGVuKHZpZXdNb2R1bGUgPT4ge1xyXG4gICAgICAgICAgICB2aWV3ID0gdmlld01vZHVsZS5kZWZhdWx0O1xyXG4gICAgICAgICAgICByZW5kZXJQYWdlKGNhdGVnb3J5SWQsIHByb2R1Y3RJZCwgb2ZmZXJJZCk7XHJcbiAgICAgICAgICAgIGlmICh2aWV3TW9kdWxlLnBvc3RSZW5kZXIpIHtcclxuICAgICAgICAgICAgICAgIHZpZXdNb2R1bGUucG9zdFJlbmRlcigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICB3aW5kb3cuc2Nyb2xsVG8oe1xyXG4gICAgICAgIHRvcDogMCxcclxuICAgICAgICBiZWhhdmlvcjogXCJzbW9vdGhcIlxyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbmRlclBhZ2UoY2F0ZWdvcnlJZCwgcHJvZHVjdElkLCBvZmZlcklkKSB7XHJcbiAgICBpZiAoY2F0ZWdvcnlJZCAhPSAwKSB7XHJcbiAgICAgICAgdGVtcGxhdGVFbmdpbmUucmVuZGVyKHZpZXcoZGIsIGNhdGVnb3J5SWQpKTtcclxuICAgIH0gZWxzZSBpZiAocHJvZHVjdElkICE9IDApIHtcclxuICAgICAgICB0ZW1wbGF0ZUVuZ2luZS5yZW5kZXIodmlldyhkYiwgcHJvZHVjdElkKSk7XHJcbiAgICB9IGVsc2UgaWYgKG9mZmVySWQgIT0gMCkge1xyXG4gICAgICAgIHRlbXBsYXRlRW5naW5lLnJlbmRlcih2aWV3KGRiLCBvZmZlcklkKSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRlbXBsYXRlRW5naW5lLnJlbmRlcih2aWV3KGRiKSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRpc3BsYXlMb2FkaW5nU3Bpbm5lcigpIHtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKS5pbm5lckhUTUwgPSBgXHJcbiAgICA8ZGl2IGNsYXNzPVwibXQtNCBwdC00XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibG9hZGluZy1zcGlubmVyXCI+PC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIGA7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./js/main.js\n");

/***/ }),

/***/ "./js/router.js":
/*!**********************!*
  !*** ./js/router.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Router = /*#__PURE__*/function () {\n  function Router() {\n    _classCallCheck(this, Router);\n  }\n\n  _createClass(Router, [{\n    key: \"getCurrentPath\",\n    value: function getCurrentPath(db) {\n      var viewName = 'homePage';\n      var categoryId = 0;\n      var productId = 0;\n      var offerId = 0;\n      var hash = window.location.hash.split(/[#/]/);\n\n      if (hash.length == 3 && hash[1] == 'offer' && 0 < hash[2] && db.offers.length >= hash[2]) {\n        viewName = 'offerPage';\n        offerId = hash[2];\n      } else if (hash.length == 2 && hash[1] == 'categories' || hash.length == 3 && hash[1] == 'categories' && hash[2] == '') {\n        viewName = 'categoriesPage';\n      } else if (hash.length == 3 && hash[1] == 'category' && 0 < hash[2] && db.categories.length >= hash[2]) {\n        viewName = 'categoryPage';\n        categoryId = hash[2];\n      } else if (hash.length == 3 && hash[1] == 'product' && 0 < hash[2] && db.products.length >= hash[2]) {\n        viewName = 'productPage';\n        productId = hash[2];\n      } else if (hash.length == 2 && hash[1] == 'cart' || hash.length == 3 && hash[1] == 'cart' && hash[2] == '') {\n        viewName = 'cartPage';\n      } else if (hash.length == 3 && hash[1] == 'order' && hash[2] != '') {\n        viewName = 'orderCompletePage';\n      } else if (hash.length == 2 && hash[1] == 'order' || hash.length == 3 && hash[1] == 'order' && hash[2] == '') {\n        viewName = 'orderPage';\n      } else {\n        window.location.hash = '';\n      }\n\n      return {\n        viewName: viewName,\n        categoryId: categoryId,\n        productId: productId,\n        offerId: offerId\n      };\n    }\n  }]);\n\n  return Router;\n}();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Router);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnRkZXZlbG9wX2xyNS8uL2pzL3JvdXRlci5qcz85NzI1Il0sIm5hbWVzIjpbIlJvdXRlciIsImRiIiwidmlld05hbWUiLCJjYXRlZ29yeUlkIiwicHJvZHVjdElkIiwib2ZmZXJJZCIsImhhc2giLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInNwbGl0IiwibGVuZ3RoIiwib2ZmZXJzIiwiY2F0ZWdvcmllcyIsInByb2R1Y3RzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU1BLE07Ozs7Ozs7bUNBQ2FDLEUsRUFBSTtBQUNmLFVBQUlDLFFBQVEsR0FBRyxVQUFmO0FBQ0EsVUFBSUMsVUFBVSxHQUFHLENBQWpCO0FBQ0EsVUFBSUMsU0FBUyxHQUFHLENBQWhCO0FBQ0EsVUFBSUMsT0FBTyxHQUFHLENBQWQ7QUFDQSxVQUFJQyxJQUFJLEdBQUdDLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkYsSUFBaEIsQ0FBcUJHLEtBQXJCLENBQTJCLE1BQTNCLENBQVg7O0FBRUEsVUFBSUgsSUFBSSxDQUFDSSxNQUFMLElBQWUsQ0FBZixJQUFvQkosSUFBSSxDQUFDLENBQUQsQ0FBSixJQUFXLE9BQS9CLElBQTBDLElBQUlBLElBQUksQ0FBQyxDQUFELENBQWxELElBQXlETCxFQUFFLENBQUNVLE1BQUgsQ0FBVUQsTUFBVixJQUFvQkosSUFBSSxDQUFDLENBQUQsQ0FBckYsRUFBMEY7QUFDdEZKLGdCQUFRLEdBQUcsV0FBWDtBQUNBRyxlQUFPLEdBQUdDLElBQUksQ0FBQyxDQUFELENBQWQ7QUFDSCxPQUhELE1BR08sSUFBSUEsSUFBSSxDQUFDSSxNQUFMLElBQWUsQ0FBZixJQUFvQkosSUFBSSxDQUFDLENBQUQsQ0FBSixJQUFXLFlBQS9CLElBQStDQSxJQUFJLENBQUNJLE1BQUwsSUFBZSxDQUFmLElBQW9CSixJQUFJLENBQUMsQ0FBRCxDQUFKLElBQVcsWUFBL0IsSUFBK0NBLElBQUksQ0FBQyxDQUFELENBQUosSUFBVyxFQUE3RyxFQUFpSDtBQUNwSEosZ0JBQVEsR0FBRyxnQkFBWDtBQUNILE9BRk0sTUFFQSxJQUFJSSxJQUFJLENBQUNJLE1BQUwsSUFBZSxDQUFmLElBQW9CSixJQUFJLENBQUMsQ0FBRCxDQUFKLElBQVcsVUFBL0IsSUFBNkMsSUFBSUEsSUFBSSxDQUFDLENBQUQsQ0FBckQsSUFBNERMLEVBQUUsQ0FBQ1csVUFBSCxDQUFjRixNQUFkLElBQXdCSixJQUFJLENBQUMsQ0FBRCxDQUE1RixFQUFpRztBQUNwR0osZ0JBQVEsR0FBRyxjQUFYO0FBQ0FDLGtCQUFVLEdBQUdHLElBQUksQ0FBQyxDQUFELENBQWpCO0FBQ0gsT0FITSxNQUdBLElBQUlBLElBQUksQ0FBQ0ksTUFBTCxJQUFlLENBQWYsSUFBb0JKLElBQUksQ0FBQyxDQUFELENBQUosSUFBVyxTQUEvQixJQUE0QyxJQUFJQSxJQUFJLENBQUMsQ0FBRCxDQUFwRCxJQUEyREwsRUFBRSxDQUFDWSxRQUFILENBQVlILE1BQVosSUFBc0JKLElBQUksQ0FBQyxDQUFELENBQXpGLEVBQThGO0FBQ2pHSixnQkFBUSxHQUFHLGFBQVg7QUFDQUUsaUJBQVMsR0FBR0UsSUFBSSxDQUFDLENBQUQsQ0FBaEI7QUFDSCxPQUhNLE1BR0EsSUFBSUEsSUFBSSxDQUFDSSxNQUFMLElBQWUsQ0FBZixJQUFvQkosSUFBSSxDQUFDLENBQUQsQ0FBSixJQUFXLE1BQS9CLElBQXlDQSxJQUFJLENBQUNJLE1BQUwsSUFBZSxDQUFmLElBQW9CSixJQUFJLENBQUMsQ0FBRCxDQUFKLElBQVcsTUFBL0IsSUFBeUNBLElBQUksQ0FBQyxDQUFELENBQUosSUFBVyxFQUFqRyxFQUFxRztBQUN4R0osZ0JBQVEsR0FBRyxVQUFYO0FBQ0gsT0FGTSxNQUVBLElBQUlJLElBQUksQ0FBQ0ksTUFBTCxJQUFlLENBQWYsSUFBb0JKLElBQUksQ0FBQyxDQUFELENBQUosSUFBVyxPQUEvQixJQUEwQ0EsSUFBSSxDQUFDLENBQUQsQ0FBSixJQUFXLEVBQXpELEVBQTZEO0FBQ2hFSixnQkFBUSxHQUFHLG1CQUFYO0FBQ0gsT0FGTSxNQUVBLElBQUlJLElBQUksQ0FBQ0ksTUFBTCxJQUFlLENBQWYsSUFBb0JKLElBQUksQ0FBQyxDQUFELENBQUosSUFBVyxPQUEvQixJQUEwQ0EsSUFBSSxDQUFDSSxNQUFMLElBQWUsQ0FBZixJQUFvQkosSUFBSSxDQUFDLENBQUQsQ0FBSixJQUFXLE9BQS9CLElBQTBDQSxJQUFJLENBQUMsQ0FBRCxDQUFKLElBQVcsRUFBbkcsRUFBdUc7QUFDMUdKLGdCQUFRLEdBQUcsV0FBWDtBQUNILE9BRk0sTUFFQTtBQUNISyxjQUFNLENBQUNDLFFBQVAsQ0FBZ0JGLElBQWhCLEdBQXVCLEVBQXZCO0FBQ0g7O0FBRUQsYUFBTztBQUNISixnQkFBUSxFQUFSQSxRQURHO0FBRUhDLGtCQUFVLEVBQVZBLFVBRkc7QUFHSEMsaUJBQVMsRUFBVEEsU0FIRztBQUlIQyxlQUFPLEVBQVBBO0FBSkcsT0FBUDtBQU1IOzs7Ozs7QUFHTCxpRUFBZUwsTUFBZiIsImZpbGUiOiIuL2pzL3JvdXRlci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFJvdXRlciB7XHJcbiAgICBnZXRDdXJyZW50UGF0aChkYikge1xyXG4gICAgICAgIGxldCB2aWV3TmFtZSA9ICdob21lUGFnZSc7XHJcbiAgICAgICAgbGV0IGNhdGVnb3J5SWQgPSAwO1xyXG4gICAgICAgIGxldCBwcm9kdWN0SWQgPSAwO1xyXG4gICAgICAgIGxldCBvZmZlcklkID0gMDtcclxuICAgICAgICBsZXQgaGFzaCA9IHdpbmRvdy5sb2NhdGlvbi5oYXNoLnNwbGl0KC9bIy9dLyk7XHJcblxyXG4gICAgICAgIGlmIChoYXNoLmxlbmd0aCA9PSAzICYmIGhhc2hbMV0gPT0gJ29mZmVyJyAmJiAwIDwgaGFzaFsyXSAmJiBkYi5vZmZlcnMubGVuZ3RoID49IGhhc2hbMl0pIHtcclxuICAgICAgICAgICAgdmlld05hbWUgPSAnb2ZmZXJQYWdlJztcclxuICAgICAgICAgICAgb2ZmZXJJZCA9IGhhc2hbMl07XHJcbiAgICAgICAgfSBlbHNlIGlmIChoYXNoLmxlbmd0aCA9PSAyICYmIGhhc2hbMV0gPT0gJ2NhdGVnb3JpZXMnIHx8IGhhc2gubGVuZ3RoID09IDMgJiYgaGFzaFsxXSA9PSAnY2F0ZWdvcmllcycgJiYgaGFzaFsyXSA9PSAnJykge1xyXG4gICAgICAgICAgICB2aWV3TmFtZSA9ICdjYXRlZ29yaWVzUGFnZSc7XHJcbiAgICAgICAgfSBlbHNlIGlmIChoYXNoLmxlbmd0aCA9PSAzICYmIGhhc2hbMV0gPT0gJ2NhdGVnb3J5JyAmJiAwIDwgaGFzaFsyXSAmJiBkYi5jYXRlZ29yaWVzLmxlbmd0aCA+PSBoYXNoWzJdKSB7XHJcbiAgICAgICAgICAgIHZpZXdOYW1lID0gJ2NhdGVnb3J5UGFnZSc7XHJcbiAgICAgICAgICAgIGNhdGVnb3J5SWQgPSBoYXNoWzJdO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoaGFzaC5sZW5ndGggPT0gMyAmJiBoYXNoWzFdID09ICdwcm9kdWN0JyAmJiAwIDwgaGFzaFsyXSAmJiBkYi5wcm9kdWN0cy5sZW5ndGggPj0gaGFzaFsyXSkge1xyXG4gICAgICAgICAgICB2aWV3TmFtZSA9ICdwcm9kdWN0UGFnZSc7XHJcbiAgICAgICAgICAgIHByb2R1Y3RJZCA9IGhhc2hbMl07XHJcbiAgICAgICAgfSBlbHNlIGlmIChoYXNoLmxlbmd0aCA9PSAyICYmIGhhc2hbMV0gPT0gJ2NhcnQnIHx8IGhhc2gubGVuZ3RoID09IDMgJiYgaGFzaFsxXSA9PSAnY2FydCcgJiYgaGFzaFsyXSA9PSAnJykge1xyXG4gICAgICAgICAgICB2aWV3TmFtZSA9ICdjYXJ0UGFnZSc7XHJcbiAgICAgICAgfSBlbHNlIGlmIChoYXNoLmxlbmd0aCA9PSAzICYmIGhhc2hbMV0gPT0gJ29yZGVyJyAmJiBoYXNoWzJdICE9ICcnKSB7XHJcbiAgICAgICAgICAgIHZpZXdOYW1lID0gJ29yZGVyQ29tcGxldGVQYWdlJztcclxuICAgICAgICB9IGVsc2UgaWYgKGhhc2gubGVuZ3RoID09IDIgJiYgaGFzaFsxXSA9PSAnb3JkZXInIHx8IGhhc2gubGVuZ3RoID09IDMgJiYgaGFzaFsxXSA9PSAnb3JkZXInICYmIGhhc2hbMl0gPT0gJycpIHtcclxuICAgICAgICAgICAgdmlld05hbWUgPSAnb3JkZXJQYWdlJztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaGFzaCA9ICcnO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgdmlld05hbWUsXHJcbiAgICAgICAgICAgIGNhdGVnb3J5SWQsXHJcbiAgICAgICAgICAgIHByb2R1Y3RJZCxcclxuICAgICAgICAgICAgb2ZmZXJJZFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJvdXRlcjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./js/router.js\n");

/***/ }),

/***/ "./js/templateEngine.js":
/*!******************************!*
  !*** ./js/templateEngine.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar TemplateProcessor = /*#__PURE__*/function () {\n  function TemplateProcessor() {\n    _classCallCheck(this, TemplateProcessor);\n  }\n\n  _createClass(TemplateProcessor, [{\n    key: \"render\",\n    value: function render(view) {\n      var root = document.querySelector('main');\n      root.innerHTML = view;\n    }\n  }]);\n\n  return TemplateProcessor;\n}();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TemplateProcessor);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnRkZXZlbG9wX2xyNS8uL2pzL3RlbXBsYXRlRW5naW5lLmpzPzgxOTAiXSwibmFtZXMiOlsiVGVtcGxhdGVQcm9jZXNzb3IiLCJ2aWV3Iiwicm9vdCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImlubmVySFRNTCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNQSxpQjs7Ozs7OzsyQkFDS0MsSSxFQUFNO0FBQ1QsVUFBTUMsSUFBSSxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsTUFBdkIsQ0FBYjtBQUNBRixVQUFJLENBQUNHLFNBQUwsR0FBaUJKLElBQWpCO0FBQ0g7Ozs7OztBQUdMLGlFQUFlRCxpQkFBZiIsImZpbGUiOiIuL2pzL3RlbXBsYXRlRW5naW5lLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgVGVtcGxhdGVQcm9jZXNzb3Ige1xyXG4gICAgcmVuZGVyKHZpZXcpIHtcclxuICAgICAgICBjb25zdCByb290ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpO1xyXG4gICAgICAgIHJvb3QuaW5uZXJIVE1MID0gdmlldztcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGVtcGxhdGVQcm9jZXNzb3I7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./js/templateEngine.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
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
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".bundle.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "clientdevelop_lr5:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => fn(event));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			;
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// Promise = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => {
/******/ 								installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 							});
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId);
/******/ 						} else installedChunks[chunkId] = 0;
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no deferred startup
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0, resolves = [];
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					resolves.push(installedChunks[chunkId][0]);
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			parentChunkLoadingFunction(data);
/******/ 			while(resolves.length) {
/******/ 				resolves.shift()();
/******/ 			}
/******/ 		
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkclientdevelop_lr5"] = self["webpackChunkclientdevelop_lr5"] || [];
/******/ 		var parentChunkLoadingFunction = chunkLoadingGlobal.push.bind(chunkLoadingGlobal);
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./js/main.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;