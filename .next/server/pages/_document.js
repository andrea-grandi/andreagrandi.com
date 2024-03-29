"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_document";
exports.ids = ["pages/_document"];
exports.modules = {

/***/ "./lib/theme.js":
/*!**********************!*\
  !*** ./lib/theme.js ***!
  \**********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @chakra-ui/react */ \"@chakra-ui/react\");\n/* harmony import */ var _chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/theme-tools */ \"@chakra-ui/theme-tools\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__, _chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_1__]);\n([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__, _chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\nconst styles = {\n    global: (props)=>({\n            body: {\n                bg: (0,_chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_1__.mode)(\"#f0e7db\", \"#202023\")(props)\n            }\n        })\n};\nconst components = {\n    Heading: {\n        variants: {\n            \"section-title\": {\n                textDecoration: \"underline\",\n                fontSize: 20,\n                textUnderlineOffset: 6,\n                textDecorationColor: \"#525252\",\n                textDecorationThickness: 4,\n                marginTop: 3,\n                marginBottom: 4\n            }\n        }\n    },\n    Link: {\n        baseStyle: (props)=>({\n                color: (0,_chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_1__.mode)(\"#3d7aed\", \"#ff63c3\")(props),\n                textUnderlineOffset: 3\n            })\n    }\n};\nconst fonts = {\n    heading: \"'M PLUS Rounded 1c'\"\n};\nconst colors = {\n    grassTeal: \"#88ccca\"\n};\nconst config = {\n    initialColorMode: \"dark\",\n    useSystemColorMode: true\n};\nconst theme = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.extendTheme)({\n    config,\n    styles,\n    components,\n    fonts,\n    colors\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (theme);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvdGhlbWUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQThDO0FBQ0Q7QUFFN0MsTUFBTUUsU0FBUztJQUNiQyxRQUFRQyxDQUFBQSxRQUFVO1lBQ2hCQyxNQUFNO2dCQUNKQyxJQUFJTCw0REFBSUEsQ0FBQyxXQUFXLFdBQVdHO1lBQ2pDO1FBQ0Y7QUFDRjtBQUVBLE1BQU1HLGFBQWE7SUFDakJDLFNBQVM7UUFDUEMsVUFBVTtZQUNSLGlCQUFpQjtnQkFDZkMsZ0JBQWdCO2dCQUNoQkMsVUFBVTtnQkFDVkMscUJBQXFCO2dCQUNyQkMscUJBQXFCO2dCQUNyQkMseUJBQXlCO2dCQUN6QkMsV0FBVztnQkFDWEMsY0FBYztZQUNoQjtRQUNGO0lBQ0Y7SUFDQUMsTUFBTTtRQUNKQyxXQUFXZCxDQUFBQSxRQUFVO2dCQUNuQmUsT0FBT2xCLDREQUFJQSxDQUFDLFdBQVcsV0FBV0c7Z0JBQ2xDUSxxQkFBcUI7WUFDdkI7SUFDRjtBQUNGO0FBRUEsTUFBTVEsUUFBUTtJQUNaQyxTQUFTO0FBQ1g7QUFFQSxNQUFNQyxTQUFTO0lBQ2JDLFdBQVc7QUFDYjtBQUVBLE1BQU1DLFNBQVM7SUFDYkMsa0JBQWtCO0lBQ2xCQyxvQkFBb0I7QUFDdEI7QUFFQSxNQUFNQyxRQUFRM0IsNkRBQVdBLENBQUM7SUFBRXdCO0lBQVF0QjtJQUFRSztJQUFZYTtJQUFPRTtBQUFPO0FBQ3RFLGlFQUFlSyxLQUFLQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYW5kcmVhZ3JhbmRpLWhvbWVwYWdlLy4vbGliL3RoZW1lLmpzPzMzMzAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZXh0ZW5kVGhlbWUgfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0J1xuaW1wb3J0IHsgbW9kZSB9IGZyb20gJ0BjaGFrcmEtdWkvdGhlbWUtdG9vbHMnXG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgZ2xvYmFsOiBwcm9wcyA9PiAoe1xuICAgIGJvZHk6IHtcbiAgICAgIGJnOiBtb2RlKCcjZjBlN2RiJywgJyMyMDIwMjMnKShwcm9wcylcbiAgICB9XG4gIH0pXG59XG5cbmNvbnN0IGNvbXBvbmVudHMgPSB7XG4gIEhlYWRpbmc6IHtcbiAgICB2YXJpYW50czoge1xuICAgICAgJ3NlY3Rpb24tdGl0bGUnOiB7XG4gICAgICAgIHRleHREZWNvcmF0aW9uOiAndW5kZXJsaW5lJyxcbiAgICAgICAgZm9udFNpemU6IDIwLFxuICAgICAgICB0ZXh0VW5kZXJsaW5lT2Zmc2V0OiA2LFxuICAgICAgICB0ZXh0RGVjb3JhdGlvbkNvbG9yOiAnIzUyNTI1MicsXG4gICAgICAgIHRleHREZWNvcmF0aW9uVGhpY2tuZXNzOiA0LFxuICAgICAgICBtYXJnaW5Ub3A6IDMsXG4gICAgICAgIG1hcmdpbkJvdHRvbTogNFxuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgTGluazoge1xuICAgIGJhc2VTdHlsZTogcHJvcHMgPT4gKHtcbiAgICAgIGNvbG9yOiBtb2RlKCcjM2Q3YWVkJywgJyNmZjYzYzMnKShwcm9wcyksXG4gICAgICB0ZXh0VW5kZXJsaW5lT2Zmc2V0OiAzXG4gICAgfSlcbiAgfVxufVxuXG5jb25zdCBmb250cyA9IHtcbiAgaGVhZGluZzogXCInTSBQTFVTIFJvdW5kZWQgMWMnXCJcbn1cblxuY29uc3QgY29sb3JzID0ge1xuICBncmFzc1RlYWw6ICcjODhjY2NhJ1xufVxuXG5jb25zdCBjb25maWcgPSB7XG4gIGluaXRpYWxDb2xvck1vZGU6ICdkYXJrJyxcbiAgdXNlU3lzdGVtQ29sb3JNb2RlOiB0cnVlXG59XG5cbmNvbnN0IHRoZW1lID0gZXh0ZW5kVGhlbWUoeyBjb25maWcsIHN0eWxlcywgY29tcG9uZW50cywgZm9udHMsIGNvbG9ycyB9KVxuZXhwb3J0IGRlZmF1bHQgdGhlbWVcbiJdLCJuYW1lcyI6WyJleHRlbmRUaGVtZSIsIm1vZGUiLCJzdHlsZXMiLCJnbG9iYWwiLCJwcm9wcyIsImJvZHkiLCJiZyIsImNvbXBvbmVudHMiLCJIZWFkaW5nIiwidmFyaWFudHMiLCJ0ZXh0RGVjb3JhdGlvbiIsImZvbnRTaXplIiwidGV4dFVuZGVybGluZU9mZnNldCIsInRleHREZWNvcmF0aW9uQ29sb3IiLCJ0ZXh0RGVjb3JhdGlvblRoaWNrbmVzcyIsIm1hcmdpblRvcCIsIm1hcmdpbkJvdHRvbSIsIkxpbmsiLCJiYXNlU3R5bGUiLCJjb2xvciIsImZvbnRzIiwiaGVhZGluZyIsImNvbG9ycyIsImdyYXNzVGVhbCIsImNvbmZpZyIsImluaXRpYWxDb2xvck1vZGUiLCJ1c2VTeXN0ZW1Db2xvck1vZGUiLCJ0aGVtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/theme.js\n");

/***/ }),

/***/ "./pages/_document.js":
/*!****************************!*\
  !*** ./pages/_document.js ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Document)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"@chakra-ui/react\");\n/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/document */ \"./node_modules/next/document.js\");\n/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_document__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _lib_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/theme */ \"./lib/theme.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__, _lib_theme__WEBPACK_IMPORTED_MODULE_3__]);\n([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__, _lib_theme__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\nclass Document extends (next_document__WEBPACK_IMPORTED_MODULE_2___default()) {\n    render() {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_2__.Html, {\n            lang: \"en\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_2__.Head, {}, void 0, false, {\n                    fileName: \"/Users/andreagrandi/Projects/andreagrandi.com/pages/_document.js\",\n                    lineNumber: 9,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"body\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.ColorModeScript, {\n                            initialColorMode: _lib_theme__WEBPACK_IMPORTED_MODULE_3__[\"default\"].config.initialColorMode\n                        }, void 0, false, {\n                            fileName: \"/Users/andreagrandi/Projects/andreagrandi.com/pages/_document.js\",\n                            lineNumber: 11,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_2__.Main, {}, void 0, false, {\n                            fileName: \"/Users/andreagrandi/Projects/andreagrandi.com/pages/_document.js\",\n                            lineNumber: 12,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_2__.NextScript, {}, void 0, false, {\n                            fileName: \"/Users/andreagrandi/Projects/andreagrandi.com/pages/_document.js\",\n                            lineNumber: 13,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/andreagrandi/Projects/andreagrandi.com/pages/_document.js\",\n                    lineNumber: 10,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/andreagrandi/Projects/andreagrandi.com/pages/_document.js\",\n            lineNumber: 8,\n            columnNumber: 7\n        }, this);\n    }\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fZG9jdW1lbnQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBa0Q7QUFDd0I7QUFDMUM7QUFFakIsTUFBTU8saUJBQWlCTixzREFBWUE7SUFDaERPLFNBQVM7UUFDUCxxQkFDRSw4REFBQ04sK0NBQUlBO1lBQUNPLE1BQUs7OzhCQUNULDhEQUFDTiwrQ0FBSUE7Ozs7OzhCQUNMLDhEQUFDTzs7c0NBQ0MsOERBQUNWLDZEQUFlQTs0QkFBQ1csa0JBQWtCTCx5REFBWSxDQUFDSyxnQkFBZ0I7Ozs7OztzQ0FDaEUsOERBQUNQLCtDQUFJQTs7Ozs7c0NBQ0wsOERBQUNDLHFEQUFVQTs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFJbkI7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL2FuZHJlYWdyYW5kaS1ob21lcGFnZS8uL3BhZ2VzL19kb2N1bWVudC5qcz81MzhiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbG9yTW9kZVNjcmlwdCB9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnXG5pbXBvcnQgTmV4dERvY3VtZW50LCB7IEh0bWwsIEhlYWQsIE1haW4sIE5leHRTY3JpcHQgfSBmcm9tICduZXh0L2RvY3VtZW50J1xuaW1wb3J0IHRoZW1lIGZyb20gJy4uL2xpYi90aGVtZSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRG9jdW1lbnQgZXh0ZW5kcyBOZXh0RG9jdW1lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxIdG1sIGxhbmc9XCJlblwiPlxuICAgICAgICA8SGVhZCAvPlxuICAgICAgICA8Ym9keT5cbiAgICAgICAgICA8Q29sb3JNb2RlU2NyaXB0IGluaXRpYWxDb2xvck1vZGU9e3RoZW1lLmNvbmZpZy5pbml0aWFsQ29sb3JNb2RlfSAvPlxuICAgICAgICAgIDxNYWluIC8+XG4gICAgICAgICAgPE5leHRTY3JpcHQgLz5cbiAgICAgICAgPC9ib2R5PlxuICAgICAgPC9IdG1sPlxuICAgIClcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkNvbG9yTW9kZVNjcmlwdCIsIk5leHREb2N1bWVudCIsIkh0bWwiLCJIZWFkIiwiTWFpbiIsIk5leHRTY3JpcHQiLCJ0aGVtZSIsIkRvY3VtZW50IiwicmVuZGVyIiwibGFuZyIsImJvZHkiLCJpbml0aWFsQ29sb3JNb2RlIiwiY29uZmlnIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_document.js\n");

/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "@chakra-ui/react":
/*!***********************************!*\
  !*** external "@chakra-ui/react" ***!
  \***********************************/
/***/ ((module) => {

module.exports = import("@chakra-ui/react");;

/***/ }),

/***/ "@chakra-ui/theme-tools":
/*!*****************************************!*\
  !*** external "@chakra-ui/theme-tools" ***!
  \*****************************************/
/***/ ((module) => {

module.exports = import("@chakra-ui/theme-tools");;

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc"], () => (__webpack_exec__("./pages/_document.js")));
module.exports = __webpack_exports__;

})();