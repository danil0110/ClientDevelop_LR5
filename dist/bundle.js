/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./js/main.js":
/*!********************!*
  !*** ./js/main.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _templateEngine_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./templateEngine.js */ \"./js/templateEngine.js\");\n/* harmony import */ var _router_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./router.js */ \"./js/router.js\");\n\r\n\r\n\r\nlet router = new _router_js__WEBPACK_IMPORTED_MODULE_1__.default();\r\nlet templateEngine = new _templateEngine_js__WEBPACK_IMPORTED_MODULE_0__.default();\r\n\r\nlet db;\r\nlet view;\r\n\r\nwindow.onload = () => {\r\n    displayLoadingSpinner();\r\n    fetch(\"https://my-json-server.typicode.com/danil0110/McDonaldsDB/db\")\r\n        .then(response => response.json())\r\n        .then(data => {\r\n            db = data;\r\n            let { viewName, categoryId, productId, offerId } = router.getCurrentPath(db);\r\n            __webpack_require__(\"./js/views lazy recursive ^\\\\.\\\\/.*\\\\.js$\")(`./${viewName}.js`)\r\n                .then(viewModule => {\r\n                    view = viewModule.default;\r\n                    renderPage(categoryId, productId, offerId);\r\n            })\r\n        });\r\n\r\n        window.scrollTo({\r\n            top: 0,\r\n            behavior: \"smooth\"\r\n        });\r\n}\r\n\r\nwindow.onhashchange = () => {\r\n    displayLoadingSpinner();\r\n    let { viewName, categoryId, productId, offerId } = router.getCurrentPath(db);\r\n    __webpack_require__(\"./js/views lazy recursive ^\\\\.\\\\/.*\\\\.js$\")(`./${viewName}.js`)\r\n        .then(viewModule => {\r\n            view = viewModule.default;\r\n            renderPage(categoryId, productId, offerId);\r\n    });\r\n\r\n    window.scrollTo({\r\n        top: 0,\r\n        behavior: \"smooth\"\r\n    });\r\n}\r\n\r\nfunction renderPage(categoryId, productId, offerId) {\r\n    if (categoryId != 0) {\r\n        templateEngine.render(view(db, categoryId));\r\n    } else if (productId != 0) {\r\n        templateEngine.render(view(db, productId));\r\n    } else if (offerId != 0) {\r\n        templateEngine.render(view(db, offerId));\r\n    } else {\r\n        templateEngine.render(view(db));\r\n    }\r\n}\r\n\r\nfunction displayLoadingSpinner() {\r\n    document.querySelector('main').innerHTML = `\r\n    <div class=\"mt-4 pt-4\">\r\n                <div class=\"loading-spinner\"></div>\r\n    </div>\r\n    `;\r\n}\n\n//# sourceURL=webpack://clientdevelop_lr5/./js/main.js?");

/***/ }),

/***/ "./js/router.js":
/*!**********************!*
  !*** ./js/router.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nclass Router {\r\n    getCurrentPath(db) {\r\n        let viewName = 'homePage';\r\n        let categoryId = 0;\r\n        let productId = 0;\r\n        let offerId = 0;\r\n        let hash = window.location.hash.split(/[#/]/);\r\n\r\n        if (hash.length == 3 && hash[1] == 'offer' && 0 < hash[2] && db.offers.length >= hash[2]) {\r\n            viewName = 'offerPage';\r\n            offerId = hash[2];\r\n        } else if (hash.length == 2 && hash[1] == 'categories' || hash.length == 3 && hash[1] == 'categories' && hash[2] == '') {\r\n            viewName = 'categoriesPage';\r\n        } else if (hash.length == 3 && hash[1] == 'category' && 0 < hash[2] && db.categories.length >= hash[2]) {\r\n            viewName = 'categoryPage';\r\n            categoryId = hash[2];\r\n        } else if (hash.length == 3 && hash[1] == 'product' && 0 < hash[2] && db.products.length >= hash[2]) {\r\n            viewName = 'productPage';\r\n            productId = hash[2];\r\n        } else if (hash.length == 2 && hash[1] == 'cart' || hash.length == 3 && hash[1] == 'cart' && hash[2] == '') {\r\n            viewName = 'cartPage';\r\n        } else if (hash.length == 3 && hash[1] == 'order' && hash[2] != '') {\r\n            viewName = 'orderCompletePage';\r\n        } else if (hash.length == 2 && hash[1] == 'order' || hash.length == 3 && hash[1] == 'order' && hash[2] == '') {\r\n            viewName = 'orderPage';\r\n        } else {\r\n            window.location.hash = '';\r\n        }\r\n\r\n        return {\r\n            viewName,\r\n            categoryId,\r\n            productId,\r\n            offerId\r\n        };\r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Router);\n\n//# sourceURL=webpack://clientdevelop_lr5/./js/router.js?");

/***/ }),

/***/ "./js/templateEngine.js":
/*!******************************!*
  !*** ./js/templateEngine.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nclass TemplateProcessor {\r\n    render(view) {\r\n        const root = document.querySelector('main');\r\n        root.innerHTML = view;\r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TemplateProcessor);\n\n//# sourceURL=webpack://clientdevelop_lr5/./js/templateEngine.js?");

/***/ }),

/***/ "./js/views lazy recursive ^\\.\\/.*\\.js$":
/*!******************************************************!*
  !*** ./js/views/ lazy ^\.\/.*\.js$ namespace object ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var map = {\n\t\"./cartPage.js\": [\n\t\t\"./js/views/cartPage.js\",\n\t\t\"js_views_cartPage_js\"\n\t],\n\t\"./categoriesPage.js\": [\n\t\t\"./js/views/categoriesPage.js\",\n\t\t\"js_views_categoriesPage_js\"\n\t],\n\t\"./categoryPage.js\": [\n\t\t\"./js/views/categoryPage.js\",\n\t\t\"js_views_categoryPage_js\"\n\t],\n\t\"./homePage.js\": [\n\t\t\"./js/views/homePage.js\",\n\t\t\"js_views_homePage_js\"\n\t],\n\t\"./offerPage.js\": [\n\t\t\"./js/views/offerPage.js\",\n\t\t\"js_views_offerPage_js\"\n\t],\n\t\"./orderCompletePage.js\": [\n\t\t\"./js/views/orderCompletePage.js\",\n\t\t\"js_views_orderCompletePage_js\"\n\t],\n\t\"./orderPage.js\": [\n\t\t\"./js/views/orderPage.js\",\n\t\t\"js_views_orderPage_js\"\n\t],\n\t\"./productPage.js\": [\n\t\t\"./js/views/productPage.js\",\n\t\t\"js_views_productPage_js\"\n\t]\n};\nfunction webpackAsyncContext(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\treturn Promise.resolve().then(() => {\n\t\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\t\te.code = 'MODULE_NOT_FOUND';\n\t\t\tthrow e;\n\t\t});\n\t}\n\n\tvar ids = map[req], id = ids[0];\n\treturn __webpack_require__.e(ids[1]).then(() => {\n\t\treturn __webpack_require__(id);\n\t});\n}\nwebpackAsyncContext.keys = () => Object.keys(map);\nwebpackAsyncContext.id = \"./js/views lazy recursive ^\\\\.\\\\/.*\\\\.js$\";\nmodule.exports = webpackAsyncContext;\n\n//# sourceURL=webpack://clientdevelop_lr5/./js/views/_lazy_^\\.\\/.*\\.js$_namespace_object?");

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