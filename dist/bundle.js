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

/***/ "./js/main.js":
/*!********************!*
  !*** ./js/main.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _templateEngine_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./templateEngine.js */ \"./js/templateEngine.js\");\n/* harmony import */ var _router_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./router.js */ \"./js/router.js\");\n\r\n\r\n\r\nlet router = new _router_js__WEBPACK_IMPORTED_MODULE_1__.default();\r\nlet templateEngine = new _templateEngine_js__WEBPACK_IMPORTED_MODULE_0__.default();\r\n\r\nlet db;\r\nlet view;\r\n\r\nwindow.onload = () => {\r\n    displayLoadingSpinner();\r\n    fetch(\"https://my-json-server.typicode.com/danil0110/McDonaldsDB/db\")\r\n        .then(response => response.json())\r\n        .then(data => {\r\n            db = data;\r\n            let { viewName, categoryId, productId, offerId } = router.getCurrentPath(db);\r\n            __webpack_require__(\"./js/views lazy recursive ^\\\\.\\\\/.*\\\\.js$\")(`./${viewName}.js`)\r\n                .then(viewModule => {\r\n                    view = viewModule.default;\r\n                    renderPage(categoryId, productId, offerId);\r\n                    if (viewModule.postRender) {\r\n                        viewModule.postRender();\r\n                    }\r\n            });\r\n        });\r\n\r\n        window.scrollTo({\r\n            top: 0,\r\n            behavior: \"smooth\"\r\n        });\r\n}\r\n\r\nwindow.onhashchange = () => {\r\n    displayLoadingSpinner();\r\n    let { viewName, categoryId, productId, offerId } = router.getCurrentPath(db);\r\n    __webpack_require__(\"./js/views lazy recursive ^\\\\.\\\\/.*\\\\.js$\")(`./${viewName}.js`)\r\n        .then(viewModule => {\r\n            view = viewModule.default;\r\n            renderPage(categoryId, productId, offerId);\r\n            if (viewModule.postRender) {\r\n                viewModule.postRender();\r\n            }\r\n    });\r\n\r\n    window.scrollTo({\r\n        top: 0,\r\n        behavior: \"smooth\"\r\n    });\r\n}\r\n\r\nfunction renderPage(categoryId, productId, offerId) {\r\n    if (categoryId != 0) {\r\n        templateEngine.render(view(db, categoryId));\r\n    } else if (productId != 0) {\r\n        templateEngine.render(view(db, productId));\r\n    } else if (offerId != 0) {\r\n        templateEngine.render(view(db, offerId));\r\n    } else {\r\n        templateEngine.render(view(db));\r\n    }\r\n}\r\n\r\nfunction displayLoadingSpinner() {\r\n    document.querySelector('main').innerHTML = `\r\n    <div class=\"mt-4 pt-4\">\r\n                <div class=\"loading-spinner\"></div>\r\n    </div>\r\n    `;\r\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnRkZXZlbG9wX2xyNS8uL2pzL21haW4uanM/ZTNiMSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBaUQ7QUFDaEI7O0FBRWpDLGlCQUFpQiwrQ0FBTTtBQUN2Qix5QkFBeUIsdURBQWM7O0FBRXZDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLDJDQUEyQztBQUM1RCxZQUFZLGlFQUFPLEdBQVMsRUFBRSxTQUFTLElBQUksQ0FBQztBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBLFNBQVMsMkNBQTJDO0FBQ3BELElBQUksaUVBQU8sR0FBUyxFQUFFLFNBQVMsSUFBSSxDQUFDO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9qcy9tYWluLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRlbXBsYXRlRW5naW5lIGZyb20gJy4vdGVtcGxhdGVFbmdpbmUuanMnO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJy4vcm91dGVyLmpzJztcclxuXHJcbmxldCByb3V0ZXIgPSBuZXcgUm91dGVyKCk7XHJcbmxldCB0ZW1wbGF0ZUVuZ2luZSA9IG5ldyBUZW1wbGF0ZUVuZ2luZSgpO1xyXG5cclxubGV0IGRiO1xyXG5sZXQgdmlldztcclxuXHJcbndpbmRvdy5vbmxvYWQgPSAoKSA9PiB7XHJcbiAgICBkaXNwbGF5TG9hZGluZ1NwaW5uZXIoKTtcclxuICAgIGZldGNoKFwiaHR0cHM6Ly9teS1qc29uLXNlcnZlci50eXBpY29kZS5jb20vZGFuaWwwMTEwL01jRG9uYWxkc0RCL2RiXCIpXHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgIC50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICBkYiA9IGRhdGE7XHJcbiAgICAgICAgICAgIGxldCB7IHZpZXdOYW1lLCBjYXRlZ29yeUlkLCBwcm9kdWN0SWQsIG9mZmVySWQgfSA9IHJvdXRlci5nZXRDdXJyZW50UGF0aChkYik7XHJcbiAgICAgICAgICAgIGltcG9ydChgLi92aWV3cy8ke3ZpZXdOYW1lfS5qc2ApXHJcbiAgICAgICAgICAgICAgICAudGhlbih2aWV3TW9kdWxlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB2aWV3ID0gdmlld01vZHVsZS5kZWZhdWx0O1xyXG4gICAgICAgICAgICAgICAgICAgIHJlbmRlclBhZ2UoY2F0ZWdvcnlJZCwgcHJvZHVjdElkLCBvZmZlcklkKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodmlld01vZHVsZS5wb3N0UmVuZGVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZpZXdNb2R1bGUucG9zdFJlbmRlcigpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHdpbmRvdy5zY3JvbGxUbyh7XHJcbiAgICAgICAgICAgIHRvcDogMCxcclxuICAgICAgICAgICAgYmVoYXZpb3I6IFwic21vb3RoXCJcclxuICAgICAgICB9KTtcclxufVxyXG5cclxud2luZG93Lm9uaGFzaGNoYW5nZSA9ICgpID0+IHtcclxuICAgIGRpc3BsYXlMb2FkaW5nU3Bpbm5lcigpO1xyXG4gICAgbGV0IHsgdmlld05hbWUsIGNhdGVnb3J5SWQsIHByb2R1Y3RJZCwgb2ZmZXJJZCB9ID0gcm91dGVyLmdldEN1cnJlbnRQYXRoKGRiKTtcclxuICAgIGltcG9ydChgLi92aWV3cy8ke3ZpZXdOYW1lfS5qc2ApXHJcbiAgICAgICAgLnRoZW4odmlld01vZHVsZSA9PiB7XHJcbiAgICAgICAgICAgIHZpZXcgPSB2aWV3TW9kdWxlLmRlZmF1bHQ7XHJcbiAgICAgICAgICAgIHJlbmRlclBhZ2UoY2F0ZWdvcnlJZCwgcHJvZHVjdElkLCBvZmZlcklkKTtcclxuICAgICAgICAgICAgaWYgKHZpZXdNb2R1bGUucG9zdFJlbmRlcikge1xyXG4gICAgICAgICAgICAgICAgdmlld01vZHVsZS5wb3N0UmVuZGVyKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHdpbmRvdy5zY3JvbGxUbyh7XHJcbiAgICAgICAgdG9wOiAwLFxyXG4gICAgICAgIGJlaGF2aW9yOiBcInNtb290aFwiXHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVuZGVyUGFnZShjYXRlZ29yeUlkLCBwcm9kdWN0SWQsIG9mZmVySWQpIHtcclxuICAgIGlmIChjYXRlZ29yeUlkICE9IDApIHtcclxuICAgICAgICB0ZW1wbGF0ZUVuZ2luZS5yZW5kZXIodmlldyhkYiwgY2F0ZWdvcnlJZCkpO1xyXG4gICAgfSBlbHNlIGlmIChwcm9kdWN0SWQgIT0gMCkge1xyXG4gICAgICAgIHRlbXBsYXRlRW5naW5lLnJlbmRlcih2aWV3KGRiLCBwcm9kdWN0SWQpKTtcclxuICAgIH0gZWxzZSBpZiAob2ZmZXJJZCAhPSAwKSB7XHJcbiAgICAgICAgdGVtcGxhdGVFbmdpbmUucmVuZGVyKHZpZXcoZGIsIG9mZmVySWQpKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGVtcGxhdGVFbmdpbmUucmVuZGVyKHZpZXcoZGIpKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZGlzcGxheUxvYWRpbmdTcGlubmVyKCkge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpLmlubmVySFRNTCA9IGBcclxuICAgIDxkaXYgY2xhc3M9XCJtdC00IHB0LTRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsb2FkaW5nLXNwaW5uZXJcIj48L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgYDtcclxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./js/main.js\n");

/***/ }),

/***/ "./js/router.js":
/*!**********************!*
  !*** ./js/router.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nclass Router {\r\n    getCurrentPath(db) {\r\n        let viewName = 'homePage';\r\n        let categoryId = 0;\r\n        let productId = 0;\r\n        let offerId = 0;\r\n        let hash = window.location.hash.split(/[#/]/);\r\n\r\n        if (hash.length == 3 && hash[1] == 'offer' && 0 < hash[2] && db.offers.length >= hash[2]) {\r\n            viewName = 'offerPage';\r\n            offerId = hash[2];\r\n        } else if (hash.length == 2 && hash[1] == 'categories' || hash.length == 3 && hash[1] == 'categories' && hash[2] == '') {\r\n            viewName = 'categoriesPage';\r\n        } else if (hash.length == 3 && hash[1] == 'category' && 0 < hash[2] && db.categories.length >= hash[2]) {\r\n            viewName = 'categoryPage';\r\n            categoryId = hash[2];\r\n        } else if (hash.length == 3 && hash[1] == 'product' && 0 < hash[2] && db.products.length >= hash[2]) {\r\n            viewName = 'productPage';\r\n            productId = hash[2];\r\n        } else if (hash.length == 2 && hash[1] == 'cart' || hash.length == 3 && hash[1] == 'cart' && hash[2] == '') {\r\n            viewName = 'cartPage';\r\n        } else if (hash.length == 3 && hash[1] == 'order' && hash[2] != '') {\r\n            viewName = 'orderCompletePage';\r\n        } else if (hash.length == 2 && hash[1] == 'order' || hash.length == 3 && hash[1] == 'order' && hash[2] == '') {\r\n            viewName = 'orderPage';\r\n        } else {\r\n            window.location.hash = '';\r\n        }\r\n\r\n        return {\r\n            viewName,\r\n            categoryId,\r\n            productId,\r\n            offerId\r\n        };\r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Router);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnRkZXZlbG9wX2xyNS8uL2pzL3JvdXRlci5qcz85NzI1Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxNQUFNIiwiZmlsZSI6Ii4vanMvcm91dGVyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgUm91dGVyIHtcclxuICAgIGdldEN1cnJlbnRQYXRoKGRiKSB7XHJcbiAgICAgICAgbGV0IHZpZXdOYW1lID0gJ2hvbWVQYWdlJztcclxuICAgICAgICBsZXQgY2F0ZWdvcnlJZCA9IDA7XHJcbiAgICAgICAgbGV0IHByb2R1Y3RJZCA9IDA7XHJcbiAgICAgICAgbGV0IG9mZmVySWQgPSAwO1xyXG4gICAgICAgIGxldCBoYXNoID0gd2luZG93LmxvY2F0aW9uLmhhc2guc3BsaXQoL1sjL10vKTtcclxuXHJcbiAgICAgICAgaWYgKGhhc2gubGVuZ3RoID09IDMgJiYgaGFzaFsxXSA9PSAnb2ZmZXInICYmIDAgPCBoYXNoWzJdICYmIGRiLm9mZmVycy5sZW5ndGggPj0gaGFzaFsyXSkge1xyXG4gICAgICAgICAgICB2aWV3TmFtZSA9ICdvZmZlclBhZ2UnO1xyXG4gICAgICAgICAgICBvZmZlcklkID0gaGFzaFsyXTtcclxuICAgICAgICB9IGVsc2UgaWYgKGhhc2gubGVuZ3RoID09IDIgJiYgaGFzaFsxXSA9PSAnY2F0ZWdvcmllcycgfHwgaGFzaC5sZW5ndGggPT0gMyAmJiBoYXNoWzFdID09ICdjYXRlZ29yaWVzJyAmJiBoYXNoWzJdID09ICcnKSB7XHJcbiAgICAgICAgICAgIHZpZXdOYW1lID0gJ2NhdGVnb3JpZXNQYWdlJztcclxuICAgICAgICB9IGVsc2UgaWYgKGhhc2gubGVuZ3RoID09IDMgJiYgaGFzaFsxXSA9PSAnY2F0ZWdvcnknICYmIDAgPCBoYXNoWzJdICYmIGRiLmNhdGVnb3JpZXMubGVuZ3RoID49IGhhc2hbMl0pIHtcclxuICAgICAgICAgICAgdmlld05hbWUgPSAnY2F0ZWdvcnlQYWdlJztcclxuICAgICAgICAgICAgY2F0ZWdvcnlJZCA9IGhhc2hbMl07XHJcbiAgICAgICAgfSBlbHNlIGlmIChoYXNoLmxlbmd0aCA9PSAzICYmIGhhc2hbMV0gPT0gJ3Byb2R1Y3QnICYmIDAgPCBoYXNoWzJdICYmIGRiLnByb2R1Y3RzLmxlbmd0aCA+PSBoYXNoWzJdKSB7XHJcbiAgICAgICAgICAgIHZpZXdOYW1lID0gJ3Byb2R1Y3RQYWdlJztcclxuICAgICAgICAgICAgcHJvZHVjdElkID0gaGFzaFsyXTtcclxuICAgICAgICB9IGVsc2UgaWYgKGhhc2gubGVuZ3RoID09IDIgJiYgaGFzaFsxXSA9PSAnY2FydCcgfHwgaGFzaC5sZW5ndGggPT0gMyAmJiBoYXNoWzFdID09ICdjYXJ0JyAmJiBoYXNoWzJdID09ICcnKSB7XHJcbiAgICAgICAgICAgIHZpZXdOYW1lID0gJ2NhcnRQYWdlJztcclxuICAgICAgICB9IGVsc2UgaWYgKGhhc2gubGVuZ3RoID09IDMgJiYgaGFzaFsxXSA9PSAnb3JkZXInICYmIGhhc2hbMl0gIT0gJycpIHtcclxuICAgICAgICAgICAgdmlld05hbWUgPSAnb3JkZXJDb21wbGV0ZVBhZ2UnO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoaGFzaC5sZW5ndGggPT0gMiAmJiBoYXNoWzFdID09ICdvcmRlcicgfHwgaGFzaC5sZW5ndGggPT0gMyAmJiBoYXNoWzFdID09ICdvcmRlcicgJiYgaGFzaFsyXSA9PSAnJykge1xyXG4gICAgICAgICAgICB2aWV3TmFtZSA9ICdvcmRlclBhZ2UnO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gJyc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICB2aWV3TmFtZSxcclxuICAgICAgICAgICAgY2F0ZWdvcnlJZCxcclxuICAgICAgICAgICAgcHJvZHVjdElkLFxyXG4gICAgICAgICAgICBvZmZlcklkXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUm91dGVyOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./js/router.js\n");

/***/ }),

/***/ "./js/templateEngine.js":
/*!******************************!*
  !*** ./js/templateEngine.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nclass TemplateProcessor {\r\n    render(view) {\r\n        const root = document.querySelector('main');\r\n        root.innerHTML = view;\r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TemplateProcessor);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnRkZXZlbG9wX2xyNS8uL2pzL3RlbXBsYXRlRW5naW5lLmpzPzgxOTAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxpQkFBaUIiLCJmaWxlIjoiLi9qcy90ZW1wbGF0ZUVuZ2luZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFRlbXBsYXRlUHJvY2Vzc29yIHtcclxuICAgIHJlbmRlcih2aWV3KSB7XHJcbiAgICAgICAgY29uc3Qgcm9vdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKTtcclxuICAgICAgICByb290LmlubmVySFRNTCA9IHZpZXc7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRlbXBsYXRlUHJvY2Vzc29yOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./js/templateEngine.js\n");

/***/ }),

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