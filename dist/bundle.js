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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderPage\": () => /* binding */ renderPage,\n/* harmony export */   \"displayLoadingSpinner\": () => /* binding */ displayLoadingSpinner\n/* harmony export */ });\n/* harmony import */ var _templateEngine_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./templateEngine.js */ \"./js/templateEngine.js\");\n/* harmony import */ var _router_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./router.js */ \"./js/router.js\");\n\n\nvar router = new _router_js__WEBPACK_IMPORTED_MODULE_1__.default();\nvar templateEngine = new _templateEngine_js__WEBPACK_IMPORTED_MODULE_0__.default();\nvar db;\nvar view;\n\nwindow.onload = function () {\n  displayLoadingSpinner();\n  fetch(\"https://my-json-server.typicode.com/danil0110/McDonaldsDB/db\").then(function (response) {\n    return response.json();\n  }).then(function (data) {\n    db = data;\n\n    var _router$getCurrentPat = router.getCurrentPath(db),\n        viewName = _router$getCurrentPat.viewName,\n        categoryId = _router$getCurrentPat.categoryId,\n        productId = _router$getCurrentPat.productId,\n        offerId = _router$getCurrentPat.offerId;\n\n    __webpack_require__(\"./js/views lazy recursive ^\\\\.\\\\/.*\\\\.js$\")(\"./\".concat(viewName, \".js\")).then(function (viewModule) {\n      view = viewModule[\"default\"];\n      renderPage(categoryId, productId, offerId);\n\n      if (viewModule.postRender) {\n        viewModule.postRender();\n      }\n    });\n  });\n  window.scrollTo({\n    top: 0,\n    behavior: \"smooth\"\n  });\n};\n\nwindow.onhashchange = function () {\n  displayLoadingSpinner();\n\n  var _router$getCurrentPat2 = router.getCurrentPath(db),\n      viewName = _router$getCurrentPat2.viewName,\n      categoryId = _router$getCurrentPat2.categoryId,\n      productId = _router$getCurrentPat2.productId,\n      offerId = _router$getCurrentPat2.offerId;\n\n  __webpack_require__(\"./js/views lazy recursive ^\\\\.\\\\/.*\\\\.js$\")(\"./\".concat(viewName, \".js\")).then(function (viewModule) {\n    view = viewModule[\"default\"];\n    renderPage(categoryId, productId, offerId);\n\n    if (viewModule.postRender) {\n      viewModule.postRender();\n    }\n  });\n  window.scrollTo({\n    top: 0,\n    behavior: \"smooth\"\n  });\n};\n\nfunction renderPage(categoryId, productId, offerId) {\n  if (categoryId != 0) {\n    templateEngine.render(view(db, categoryId));\n  } else if (productId != 0) {\n    templateEngine.render(view(db, productId));\n  } else if (offerId != 0) {\n    templateEngine.render(view(db, offerId));\n  } else {\n    templateEngine.render(view(db));\n  }\n}\nfunction displayLoadingSpinner() {\n  document.querySelector('main').innerHTML = \"\\n    <div class=\\\"mt-4 pt-4\\\">\\n                <div class=\\\"loading-spinner\\\"></div>\\n    </div>\\n    \";\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnRkZXZlbG9wX2xyNS8uL2pzL21haW4uanM/ZTNiMSJdLCJuYW1lcyI6WyJyb3V0ZXIiLCJSb3V0ZXIiLCJ0ZW1wbGF0ZUVuZ2luZSIsIlRlbXBsYXRlRW5naW5lIiwiZGIiLCJ2aWV3Iiwid2luZG93Iiwib25sb2FkIiwiZGlzcGxheUxvYWRpbmdTcGlubmVyIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiZGF0YSIsImdldEN1cnJlbnRQYXRoIiwidmlld05hbWUiLCJjYXRlZ29yeUlkIiwicHJvZHVjdElkIiwib2ZmZXJJZCIsInZpZXdNb2R1bGUiLCJyZW5kZXJQYWdlIiwicG9zdFJlbmRlciIsInNjcm9sbFRvIiwidG9wIiwiYmVoYXZpb3IiLCJvbmhhc2hjaGFuZ2UiLCJyZW5kZXIiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJpbm5lckhUTUwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUNBO0FBRUEsSUFBSUEsTUFBTSxHQUFHLElBQUlDLCtDQUFKLEVBQWI7QUFDQSxJQUFJQyxjQUFjLEdBQUcsSUFBSUMsdURBQUosRUFBckI7QUFFQSxJQUFJQyxFQUFKO0FBQ0EsSUFBSUMsSUFBSjs7QUFFQUMsTUFBTSxDQUFDQyxNQUFQLEdBQWdCLFlBQU07QUFDbEJDLHVCQUFxQjtBQUNyQkMsT0FBSyxDQUFDLDhEQUFELENBQUwsQ0FDS0MsSUFETCxDQUNVLFVBQUFDLFFBQVE7QUFBQSxXQUFJQSxRQUFRLENBQUNDLElBQVQsRUFBSjtBQUFBLEdBRGxCLEVBRUtGLElBRkwsQ0FFVSxVQUFBRyxJQUFJLEVBQUk7QUFDVlQsTUFBRSxHQUFHUyxJQUFMOztBQURVLGdDQUV5Q2IsTUFBTSxDQUFDYyxjQUFQLENBQXNCVixFQUF0QixDQUZ6QztBQUFBLFFBRUpXLFFBRkkseUJBRUpBLFFBRkk7QUFBQSxRQUVNQyxVQUZOLHlCQUVNQSxVQUZOO0FBQUEsUUFFa0JDLFNBRmxCLHlCQUVrQkEsU0FGbEI7QUFBQSxRQUU2QkMsT0FGN0IseUJBRTZCQSxPQUY3Qjs7QUFHVixxRUFBTyxZQUFXSCxRQUFsQixVQUNLTCxJQURMLENBQ1UsVUFBQVMsVUFBVSxFQUFJO0FBQ2hCZCxVQUFJLEdBQUdjLFVBQVUsV0FBakI7QUFDQUMsZ0JBQVUsQ0FBQ0osVUFBRCxFQUFhQyxTQUFiLEVBQXdCQyxPQUF4QixDQUFWOztBQUNBLFVBQUlDLFVBQVUsQ0FBQ0UsVUFBZixFQUEyQjtBQUN2QkYsa0JBQVUsQ0FBQ0UsVUFBWDtBQUNIO0FBQ1IsS0FQRDtBQVFILEdBYkw7QUFlSWYsUUFBTSxDQUFDZ0IsUUFBUCxDQUFnQjtBQUNaQyxPQUFHLEVBQUUsQ0FETztBQUVaQyxZQUFRLEVBQUU7QUFGRSxHQUFoQjtBQUlQLENBckJEOztBQXVCQWxCLE1BQU0sQ0FBQ21CLFlBQVAsR0FBc0IsWUFBTTtBQUN4QmpCLHVCQUFxQjs7QUFERywrQkFFMkJSLE1BQU0sQ0FBQ2MsY0FBUCxDQUFzQlYsRUFBdEIsQ0FGM0I7QUFBQSxNQUVsQlcsUUFGa0IsMEJBRWxCQSxRQUZrQjtBQUFBLE1BRVJDLFVBRlEsMEJBRVJBLFVBRlE7QUFBQSxNQUVJQyxTQUZKLDBCQUVJQSxTQUZKO0FBQUEsTUFFZUMsT0FGZiwwQkFFZUEsT0FGZjs7QUFHeEIsbUVBQU8sWUFBV0gsUUFBbEIsVUFDS0wsSUFETCxDQUNVLFVBQUFTLFVBQVUsRUFBSTtBQUNoQmQsUUFBSSxHQUFHYyxVQUFVLFdBQWpCO0FBQ0FDLGNBQVUsQ0FBQ0osVUFBRCxFQUFhQyxTQUFiLEVBQXdCQyxPQUF4QixDQUFWOztBQUNBLFFBQUlDLFVBQVUsQ0FBQ0UsVUFBZixFQUEyQjtBQUN2QkYsZ0JBQVUsQ0FBQ0UsVUFBWDtBQUNIO0FBQ1IsR0FQRDtBQVNBZixRQUFNLENBQUNnQixRQUFQLENBQWdCO0FBQ1pDLE9BQUcsRUFBRSxDQURPO0FBRVpDLFlBQVEsRUFBRTtBQUZFLEdBQWhCO0FBSUgsQ0FoQkQ7O0FBa0JPLFNBQVNKLFVBQVQsQ0FBb0JKLFVBQXBCLEVBQWdDQyxTQUFoQyxFQUEyQ0MsT0FBM0MsRUFBb0Q7QUFDdkQsTUFBSUYsVUFBVSxJQUFJLENBQWxCLEVBQXFCO0FBQ2pCZCxrQkFBYyxDQUFDd0IsTUFBZixDQUFzQnJCLElBQUksQ0FBQ0QsRUFBRCxFQUFLWSxVQUFMLENBQTFCO0FBQ0gsR0FGRCxNQUVPLElBQUlDLFNBQVMsSUFBSSxDQUFqQixFQUFvQjtBQUN2QmYsa0JBQWMsQ0FBQ3dCLE1BQWYsQ0FBc0JyQixJQUFJLENBQUNELEVBQUQsRUFBS2EsU0FBTCxDQUExQjtBQUNILEdBRk0sTUFFQSxJQUFJQyxPQUFPLElBQUksQ0FBZixFQUFrQjtBQUNyQmhCLGtCQUFjLENBQUN3QixNQUFmLENBQXNCckIsSUFBSSxDQUFDRCxFQUFELEVBQUtjLE9BQUwsQ0FBMUI7QUFDSCxHQUZNLE1BRUE7QUFDSGhCLGtCQUFjLENBQUN3QixNQUFmLENBQXNCckIsSUFBSSxDQUFDRCxFQUFELENBQTFCO0FBQ0g7QUFDSjtBQUVNLFNBQVNJLHFCQUFULEdBQWlDO0FBQ3BDbUIsVUFBUSxDQUFDQyxhQUFULENBQXVCLE1BQXZCLEVBQStCQyxTQUEvQjtBQUtIIiwiZmlsZSI6Ii4vanMvbWFpbi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUZW1wbGF0ZUVuZ2luZSBmcm9tICcuL3RlbXBsYXRlRW5naW5lLmpzJztcclxuaW1wb3J0IFJvdXRlciBmcm9tICcuL3JvdXRlci5qcyc7XHJcblxyXG5sZXQgcm91dGVyID0gbmV3IFJvdXRlcigpO1xyXG5sZXQgdGVtcGxhdGVFbmdpbmUgPSBuZXcgVGVtcGxhdGVFbmdpbmUoKTtcclxuXHJcbmxldCBkYjtcclxubGV0IHZpZXc7XHJcblxyXG53aW5kb3cub25sb2FkID0gKCkgPT4ge1xyXG4gICAgZGlzcGxheUxvYWRpbmdTcGlubmVyKCk7XHJcbiAgICBmZXRjaChcImh0dHBzOi8vbXktanNvbi1zZXJ2ZXIudHlwaWNvZGUuY29tL2RhbmlsMDExMC9NY0RvbmFsZHNEQi9kYlwiKVxyXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAudGhlbihkYXRhID0+IHtcclxuICAgICAgICAgICAgZGIgPSBkYXRhO1xyXG4gICAgICAgICAgICBsZXQgeyB2aWV3TmFtZSwgY2F0ZWdvcnlJZCwgcHJvZHVjdElkLCBvZmZlcklkIH0gPSByb3V0ZXIuZ2V0Q3VycmVudFBhdGgoZGIpO1xyXG4gICAgICAgICAgICBpbXBvcnQoYC4vdmlld3MvJHt2aWV3TmFtZX0uanNgKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4odmlld01vZHVsZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmlldyA9IHZpZXdNb2R1bGUuZGVmYXVsdDtcclxuICAgICAgICAgICAgICAgICAgICByZW5kZXJQYWdlKGNhdGVnb3J5SWQsIHByb2R1Y3RJZCwgb2ZmZXJJZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZpZXdNb2R1bGUucG9zdFJlbmRlcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2aWV3TW9kdWxlLnBvc3RSZW5kZXIoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oe1xyXG4gICAgICAgICAgICB0b3A6IDAsXHJcbiAgICAgICAgICAgIGJlaGF2aW9yOiBcInNtb290aFwiXHJcbiAgICAgICAgfSk7XHJcbn1cclxuXHJcbndpbmRvdy5vbmhhc2hjaGFuZ2UgPSAoKSA9PiB7XHJcbiAgICBkaXNwbGF5TG9hZGluZ1NwaW5uZXIoKTtcclxuICAgIGxldCB7IHZpZXdOYW1lLCBjYXRlZ29yeUlkLCBwcm9kdWN0SWQsIG9mZmVySWQgfSA9IHJvdXRlci5nZXRDdXJyZW50UGF0aChkYik7XHJcbiAgICBpbXBvcnQoYC4vdmlld3MvJHt2aWV3TmFtZX0uanNgKVxyXG4gICAgICAgIC50aGVuKHZpZXdNb2R1bGUgPT4ge1xyXG4gICAgICAgICAgICB2aWV3ID0gdmlld01vZHVsZS5kZWZhdWx0O1xyXG4gICAgICAgICAgICByZW5kZXJQYWdlKGNhdGVnb3J5SWQsIHByb2R1Y3RJZCwgb2ZmZXJJZCk7XHJcbiAgICAgICAgICAgIGlmICh2aWV3TW9kdWxlLnBvc3RSZW5kZXIpIHtcclxuICAgICAgICAgICAgICAgIHZpZXdNb2R1bGUucG9zdFJlbmRlcigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICB3aW5kb3cuc2Nyb2xsVG8oe1xyXG4gICAgICAgIHRvcDogMCxcclxuICAgICAgICBiZWhhdmlvcjogXCJzbW9vdGhcIlxyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJQYWdlKGNhdGVnb3J5SWQsIHByb2R1Y3RJZCwgb2ZmZXJJZCkge1xyXG4gICAgaWYgKGNhdGVnb3J5SWQgIT0gMCkge1xyXG4gICAgICAgIHRlbXBsYXRlRW5naW5lLnJlbmRlcih2aWV3KGRiLCBjYXRlZ29yeUlkKSk7XHJcbiAgICB9IGVsc2UgaWYgKHByb2R1Y3RJZCAhPSAwKSB7XHJcbiAgICAgICAgdGVtcGxhdGVFbmdpbmUucmVuZGVyKHZpZXcoZGIsIHByb2R1Y3RJZCkpO1xyXG4gICAgfSBlbHNlIGlmIChvZmZlcklkICE9IDApIHtcclxuICAgICAgICB0ZW1wbGF0ZUVuZ2luZS5yZW5kZXIodmlldyhkYiwgb2ZmZXJJZCkpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB0ZW1wbGF0ZUVuZ2luZS5yZW5kZXIodmlldyhkYikpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZGlzcGxheUxvYWRpbmdTcGlubmVyKCkge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpLmlubmVySFRNTCA9IGBcclxuICAgIDxkaXYgY2xhc3M9XCJtdC00IHB0LTRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsb2FkaW5nLXNwaW5uZXJcIj48L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgYDtcclxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./js/main.js\n");

/***/ }),

/***/ "./js/router.js":
/*!**********************!*
  !*** ./js/router.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Router = /*#__PURE__*/function () {\n  function Router() {\n    _classCallCheck(this, Router);\n  }\n\n  _createClass(Router, [{\n    key: \"getCurrentPath\",\n    value: function getCurrentPath(db) {\n      var hash = window.location.hash.split(/[#/]/);\n      var result = this.findCorrectView(hash, db);\n      return result;\n    }\n  }, {\n    key: \"findCorrectView\",\n    value: function findCorrectView(hash, db) {\n      var viewName = 'homePage';\n      var categoryId = 0;\n      var productId = 0;\n      var offerId = 0;\n\n      if (hash.length === 3 && hash[1] === 'offer' && 0 < hash[2] && db.offers.length >= hash[2]) {\n        viewName = 'offerPage';\n        offerId = hash[2];\n      } else if (hash.length === 2 && hash[1] === 'categories' || hash.length === 3 && hash[1] === 'categories' && hash[2] === '') {\n        viewName = 'categoriesPage';\n      } else if (hash.length === 3 && hash[1] === 'category' && 0 < hash[2] && db.categories.length >= hash[2]) {\n        viewName = 'categoryPage';\n        categoryId = hash[2];\n      } else if (hash.length === 3 && hash[1] === 'product' && 0 < hash[2] && db.products.length >= hash[2]) {\n        viewName = 'productPage';\n        productId = hash[2];\n      } else if (hash.length === 2 && hash[1] === 'cart' || hash.length === 3 && hash[1] === 'cart' && hash[2] === '') {\n        viewName = 'cartPage';\n      } else if (hash.length === 3 && hash[1] === 'order' && hash[2] !== '') {\n        viewName = 'orderCompletePage';\n      } else if (hash.length === 2 && hash[1] === 'order' || hash.length === 3 && hash[1] === 'order' && hash[2] === '') {\n        viewName = 'orderPage';\n      } else {\n        window.location.hash = '';\n      }\n\n      return {\n        viewName: viewName,\n        categoryId: categoryId,\n        productId: productId,\n        offerId: offerId\n      };\n    }\n  }]);\n\n  return Router;\n}();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Router);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnRkZXZlbG9wX2xyNS8uL2pzL3JvdXRlci5qcz85NzI1Il0sIm5hbWVzIjpbIlJvdXRlciIsImRiIiwiaGFzaCIsIndpbmRvdyIsImxvY2F0aW9uIiwic3BsaXQiLCJyZXN1bHQiLCJmaW5kQ29ycmVjdFZpZXciLCJ2aWV3TmFtZSIsImNhdGVnb3J5SWQiLCJwcm9kdWN0SWQiLCJvZmZlcklkIiwibGVuZ3RoIiwib2ZmZXJzIiwiY2F0ZWdvcmllcyIsInByb2R1Y3RzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU1BLE07Ozs7Ozs7bUNBQ2FDLEUsRUFBSTtBQUNmLFVBQUlDLElBQUksR0FBR0MsTUFBTSxDQUFDQyxRQUFQLENBQWdCRixJQUFoQixDQUFxQkcsS0FBckIsQ0FBMkIsTUFBM0IsQ0FBWDtBQUVBLFVBQU1DLE1BQU0sR0FBRyxLQUFLQyxlQUFMLENBQXFCTCxJQUFyQixFQUEyQkQsRUFBM0IsQ0FBZjtBQUVBLGFBQU9LLE1BQVA7QUFDSDs7O29DQUVlSixJLEVBQU1ELEUsRUFBSTtBQUN0QixVQUFJTyxRQUFRLEdBQUcsVUFBZjtBQUNBLFVBQUlDLFVBQVUsR0FBRyxDQUFqQjtBQUNBLFVBQUlDLFNBQVMsR0FBRyxDQUFoQjtBQUNBLFVBQUlDLE9BQU8sR0FBRyxDQUFkOztBQUVBLFVBQUlULElBQUksQ0FBQ1UsTUFBTCxLQUFnQixDQUFoQixJQUFxQlYsSUFBSSxDQUFDLENBQUQsQ0FBSixLQUFZLE9BQWpDLElBQTRDLElBQUlBLElBQUksQ0FBQyxDQUFELENBQXBELElBQTJERCxFQUFFLENBQUNZLE1BQUgsQ0FBVUQsTUFBVixJQUFvQlYsSUFBSSxDQUFDLENBQUQsQ0FBdkYsRUFBNEY7QUFDeEZNLGdCQUFRLEdBQUcsV0FBWDtBQUNBRyxlQUFPLEdBQUdULElBQUksQ0FBQyxDQUFELENBQWQ7QUFDSCxPQUhELE1BR08sSUFBSUEsSUFBSSxDQUFDVSxNQUFMLEtBQWdCLENBQWhCLElBQXFCVixJQUFJLENBQUMsQ0FBRCxDQUFKLEtBQVksWUFBakMsSUFBaURBLElBQUksQ0FBQ1UsTUFBTCxLQUFnQixDQUFoQixJQUFxQlYsSUFBSSxDQUFDLENBQUQsQ0FBSixLQUFZLFlBQWpDLElBQWlEQSxJQUFJLENBQUMsQ0FBRCxDQUFKLEtBQVksRUFBbEgsRUFBc0g7QUFDekhNLGdCQUFRLEdBQUcsZ0JBQVg7QUFDSCxPQUZNLE1BRUEsSUFBSU4sSUFBSSxDQUFDVSxNQUFMLEtBQWdCLENBQWhCLElBQXFCVixJQUFJLENBQUMsQ0FBRCxDQUFKLEtBQVksVUFBakMsSUFBK0MsSUFBSUEsSUFBSSxDQUFDLENBQUQsQ0FBdkQsSUFBOERELEVBQUUsQ0FBQ2EsVUFBSCxDQUFjRixNQUFkLElBQXdCVixJQUFJLENBQUMsQ0FBRCxDQUE5RixFQUFtRztBQUN0R00sZ0JBQVEsR0FBRyxjQUFYO0FBQ0FDLGtCQUFVLEdBQUdQLElBQUksQ0FBQyxDQUFELENBQWpCO0FBQ0gsT0FITSxNQUdBLElBQUlBLElBQUksQ0FBQ1UsTUFBTCxLQUFnQixDQUFoQixJQUFxQlYsSUFBSSxDQUFDLENBQUQsQ0FBSixLQUFZLFNBQWpDLElBQThDLElBQUlBLElBQUksQ0FBQyxDQUFELENBQXRELElBQTZERCxFQUFFLENBQUNjLFFBQUgsQ0FBWUgsTUFBWixJQUFzQlYsSUFBSSxDQUFDLENBQUQsQ0FBM0YsRUFBZ0c7QUFDbkdNLGdCQUFRLEdBQUcsYUFBWDtBQUNBRSxpQkFBUyxHQUFHUixJQUFJLENBQUMsQ0FBRCxDQUFoQjtBQUNILE9BSE0sTUFHQSxJQUFJQSxJQUFJLENBQUNVLE1BQUwsS0FBZ0IsQ0FBaEIsSUFBcUJWLElBQUksQ0FBQyxDQUFELENBQUosS0FBWSxNQUFqQyxJQUEyQ0EsSUFBSSxDQUFDVSxNQUFMLEtBQWdCLENBQWhCLElBQXFCVixJQUFJLENBQUMsQ0FBRCxDQUFKLEtBQVksTUFBakMsSUFBMkNBLElBQUksQ0FBQyxDQUFELENBQUosS0FBWSxFQUF0RyxFQUEwRztBQUM3R00sZ0JBQVEsR0FBRyxVQUFYO0FBQ0gsT0FGTSxNQUVBLElBQUlOLElBQUksQ0FBQ1UsTUFBTCxLQUFnQixDQUFoQixJQUFxQlYsSUFBSSxDQUFDLENBQUQsQ0FBSixLQUFZLE9BQWpDLElBQTRDQSxJQUFJLENBQUMsQ0FBRCxDQUFKLEtBQVksRUFBNUQsRUFBZ0U7QUFDbkVNLGdCQUFRLEdBQUcsbUJBQVg7QUFDSCxPQUZNLE1BRUEsSUFBSU4sSUFBSSxDQUFDVSxNQUFMLEtBQWdCLENBQWhCLElBQXFCVixJQUFJLENBQUMsQ0FBRCxDQUFKLEtBQVksT0FBakMsSUFBNENBLElBQUksQ0FBQ1UsTUFBTCxLQUFnQixDQUFoQixJQUFxQlYsSUFBSSxDQUFDLENBQUQsQ0FBSixLQUFZLE9BQWpDLElBQTRDQSxJQUFJLENBQUMsQ0FBRCxDQUFKLEtBQVksRUFBeEcsRUFBNEc7QUFDL0dNLGdCQUFRLEdBQUcsV0FBWDtBQUNILE9BRk0sTUFFQTtBQUNITCxjQUFNLENBQUNDLFFBQVAsQ0FBZ0JGLElBQWhCLEdBQXVCLEVBQXZCO0FBQ0g7O0FBRUQsYUFBTztBQUNITSxnQkFBUSxFQUFSQSxRQURHO0FBRUhDLGtCQUFVLEVBQVZBLFVBRkc7QUFHSEMsaUJBQVMsRUFBVEEsU0FIRztBQUlIQyxlQUFPLEVBQVBBO0FBSkcsT0FBUDtBQU1IOzs7Ozs7QUFHTCxpRUFBZVgsTUFBZiIsImZpbGUiOiIuL2pzL3JvdXRlci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFJvdXRlciB7XHJcbiAgICBnZXRDdXJyZW50UGF0aChkYikge1xyXG4gICAgICAgIGxldCBoYXNoID0gd2luZG93LmxvY2F0aW9uLmhhc2guc3BsaXQoL1sjL10vKTtcclxuXHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5maW5kQ29ycmVjdFZpZXcoaGFzaCwgZGIpO1xyXG5cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG5cclxuICAgIGZpbmRDb3JyZWN0VmlldyhoYXNoLCBkYikge1xyXG4gICAgICAgIGxldCB2aWV3TmFtZSA9ICdob21lUGFnZSc7XHJcbiAgICAgICAgbGV0IGNhdGVnb3J5SWQgPSAwO1xyXG4gICAgICAgIGxldCBwcm9kdWN0SWQgPSAwO1xyXG4gICAgICAgIGxldCBvZmZlcklkID0gMDtcclxuXHJcbiAgICAgICAgaWYgKGhhc2gubGVuZ3RoID09PSAzICYmIGhhc2hbMV0gPT09ICdvZmZlcicgJiYgMCA8IGhhc2hbMl0gJiYgZGIub2ZmZXJzLmxlbmd0aCA+PSBoYXNoWzJdKSB7XHJcbiAgICAgICAgICAgIHZpZXdOYW1lID0gJ29mZmVyUGFnZSc7XHJcbiAgICAgICAgICAgIG9mZmVySWQgPSBoYXNoWzJdO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoaGFzaC5sZW5ndGggPT09IDIgJiYgaGFzaFsxXSA9PT0gJ2NhdGVnb3JpZXMnIHx8IGhhc2gubGVuZ3RoID09PSAzICYmIGhhc2hbMV0gPT09ICdjYXRlZ29yaWVzJyAmJiBoYXNoWzJdID09PSAnJykge1xyXG4gICAgICAgICAgICB2aWV3TmFtZSA9ICdjYXRlZ29yaWVzUGFnZSc7XHJcbiAgICAgICAgfSBlbHNlIGlmIChoYXNoLmxlbmd0aCA9PT0gMyAmJiBoYXNoWzFdID09PSAnY2F0ZWdvcnknICYmIDAgPCBoYXNoWzJdICYmIGRiLmNhdGVnb3JpZXMubGVuZ3RoID49IGhhc2hbMl0pIHtcclxuICAgICAgICAgICAgdmlld05hbWUgPSAnY2F0ZWdvcnlQYWdlJztcclxuICAgICAgICAgICAgY2F0ZWdvcnlJZCA9IGhhc2hbMl07XHJcbiAgICAgICAgfSBlbHNlIGlmIChoYXNoLmxlbmd0aCA9PT0gMyAmJiBoYXNoWzFdID09PSAncHJvZHVjdCcgJiYgMCA8IGhhc2hbMl0gJiYgZGIucHJvZHVjdHMubGVuZ3RoID49IGhhc2hbMl0pIHtcclxuICAgICAgICAgICAgdmlld05hbWUgPSAncHJvZHVjdFBhZ2UnO1xyXG4gICAgICAgICAgICBwcm9kdWN0SWQgPSBoYXNoWzJdO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoaGFzaC5sZW5ndGggPT09IDIgJiYgaGFzaFsxXSA9PT0gJ2NhcnQnIHx8IGhhc2gubGVuZ3RoID09PSAzICYmIGhhc2hbMV0gPT09ICdjYXJ0JyAmJiBoYXNoWzJdID09PSAnJykge1xyXG4gICAgICAgICAgICB2aWV3TmFtZSA9ICdjYXJ0UGFnZSc7XHJcbiAgICAgICAgfSBlbHNlIGlmIChoYXNoLmxlbmd0aCA9PT0gMyAmJiBoYXNoWzFdID09PSAnb3JkZXInICYmIGhhc2hbMl0gIT09ICcnKSB7XHJcbiAgICAgICAgICAgIHZpZXdOYW1lID0gJ29yZGVyQ29tcGxldGVQYWdlJztcclxuICAgICAgICB9IGVsc2UgaWYgKGhhc2gubGVuZ3RoID09PSAyICYmIGhhc2hbMV0gPT09ICdvcmRlcicgfHwgaGFzaC5sZW5ndGggPT09IDMgJiYgaGFzaFsxXSA9PT0gJ29yZGVyJyAmJiBoYXNoWzJdID09PSAnJykge1xyXG4gICAgICAgICAgICB2aWV3TmFtZSA9ICdvcmRlclBhZ2UnO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gJyc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICB2aWV3TmFtZSxcclxuICAgICAgICAgICAgY2F0ZWdvcnlJZCxcclxuICAgICAgICAgICAgcHJvZHVjdElkLFxyXG4gICAgICAgICAgICBvZmZlcklkXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUm91dGVyOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./js/router.js\n");

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