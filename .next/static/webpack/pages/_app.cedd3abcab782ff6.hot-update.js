"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/components/layout/DesktopMenu.tsx":
/*!***********************************************!*\
  !*** ./src/components/layout/DesktopMenu.tsx ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nconst DesktopMenu = ()=>{\n    _s();\n    const [isDropdownOpen, setDropdownOpen] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [timeoutId, setTimeoutId] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    const menuItems = [\n        {\n            text: \"About\",\n            href: \"/about\"\n        },\n        {\n            text: \"Services\",\n            href: \"/services\",\n            subItems: [\n                {\n                    text: \"Coaching\",\n                    href: \"/services/coaching\"\n                }\n            ]\n        },\n        {\n            text: \"Submit\",\n            href: \"/submit\"\n        },\n        {\n            text: \"Contact\",\n            href: \"/contact\"\n        }\n    ];\n    const handleMouseEnter = ()=>{\n        if (timeoutId) {\n            clearTimeout(timeoutId);\n            setTimeoutId(null);\n        }\n        setDropdownOpen(true);\n    };\n    const handleMouseLeave = ()=>{\n        const id = setTimeout(()=>{\n            setDropdownOpen(false);\n        }, 500);\n        setTimeoutId(id);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        return ()=>{\n            if (timeoutId) {\n                clearTimeout(timeoutId);\n            }\n        };\n    }, [\n        timeoutId\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        className: \"hidden md:flex space-x-8 items-center relative\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                href: \"/\",\n                passHref: true,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"text-gray-700 hover:text-black\",\n                    children: \"Home\"\n                }, void 0, false, {\n                    fileName: \"/home/acelowder/journal-of-academic-inquiry/src/components/layout/DesktopMenu.tsx\",\n                    lineNumber: 45,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/acelowder/journal-of-academic-inquiry/src/components/layout/DesktopMenu.tsx\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, undefined),\n            menuItems.map((param)=>{\n                let { text, href, subItems } = param;\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"relative\",\n                    onMouseEnter: subItems ? handleMouseEnter : undefined,\n                    onMouseLeave: subItems ? handleMouseLeave : undefined,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            href: href,\n                            passHref: true,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"text-gray-700 hover:text-black cursor-pointer\",\n                                children: text\n                            }, void 0, false, {\n                                fileName: \"/home/acelowder/journal-of-academic-inquiry/src/components/layout/DesktopMenu.tsx\",\n                                lineNumber: 56,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/home/acelowder/journal-of-academic-inquiry/src/components/layout/DesktopMenu.tsx\",\n                            lineNumber: 55,\n                            columnNumber: 11\n                        }, undefined),\n                        subItems && isDropdownOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"absolute top-full -left-4 w-48 mt-[33px] bg-black text-white\",\n                            children: subItems.map((param)=>{\n                                let { text, href } = param;\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    href: href,\n                                    passHref: true,\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"px-4 py-2 hover:bg-gray-100 text-gray-700\",\n                                        children: text\n                                    }, void 0, false, {\n                                        fileName: \"/home/acelowder/journal-of-academic-inquiry/src/components/layout/DesktopMenu.tsx\",\n                                        lineNumber: 64,\n                                        columnNumber: 19\n                                    }, undefined)\n                                }, text, false, {\n                                    fileName: \"/home/acelowder/journal-of-academic-inquiry/src/components/layout/DesktopMenu.tsx\",\n                                    lineNumber: 63,\n                                    columnNumber: 17\n                                }, undefined);\n                            })\n                        }, void 0, false, {\n                            fileName: \"/home/acelowder/journal-of-academic-inquiry/src/components/layout/DesktopMenu.tsx\",\n                            lineNumber: 61,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, text, true, {\n                    fileName: \"/home/acelowder/journal-of-academic-inquiry/src/components/layout/DesktopMenu.tsx\",\n                    lineNumber: 49,\n                    columnNumber: 9\n                }, undefined);\n            })\n        ]\n    }, void 0, true, {\n        fileName: \"/home/acelowder/journal-of-academic-inquiry/src/components/layout/DesktopMenu.tsx\",\n        lineNumber: 43,\n        columnNumber: 5\n    }, undefined);\n};\n_s(DesktopMenu, \"1cE4T6v1kZmCknGEJD2KXK0CXZs=\");\n_c = DesktopMenu;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DesktopMenu);\nvar _c;\n$RefreshReg$(_c, \"DesktopMenu\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9sYXlvdXQvRGVza3RvcE1lbnUudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUE2QjtBQUNlO0FBRTVDLE1BQU1HLGNBQXdCOztJQUM1QixNQUFNLENBQUNDLGdCQUFnQkMsZ0JBQWdCLEdBQUdKLCtDQUFRQSxDQUFDO0lBQ25ELE1BQU0sQ0FBQ0ssV0FBV0MsYUFBYSxHQUFHTiwrQ0FBUUEsQ0FBd0I7SUFFbEUsTUFBTU8sWUFBWTtRQUNoQjtZQUFFQyxNQUFNO1lBQVNDLE1BQU07UUFBUztRQUNoQztZQUNFRCxNQUFNO1lBQ05DLE1BQU07WUFDTkMsVUFBVTtnQkFBQztvQkFBRUYsTUFBTTtvQkFBWUMsTUFBTTtnQkFBcUI7YUFBRTtRQUM5RDtRQUNBO1lBQUVELE1BQU07WUFBVUMsTUFBTTtRQUFVO1FBQ2xDO1lBQUVELE1BQU07WUFBV0MsTUFBTTtRQUFXO0tBQ3JDO0lBRUQsTUFBTUUsbUJBQW1CO1FBQ3ZCLElBQUlOLFdBQVc7WUFDYk8sYUFBYVA7WUFDYkMsYUFBYTtRQUNmO1FBQ0FGLGdCQUFnQjtJQUNsQjtJQUVBLE1BQU1TLG1CQUFtQjtRQUN2QixNQUFNQyxLQUFLQyxXQUFXO1lBQ3BCWCxnQkFBZ0I7UUFDbEIsR0FBRztRQUNIRSxhQUFhUTtJQUNmO0lBRUFiLGdEQUFTQSxDQUFDO1FBQ1IsT0FBTztZQUNMLElBQUlJLFdBQVc7Z0JBQ2JPLGFBQWFQO1lBQ2Y7UUFDRjtJQUNGLEdBQUc7UUFBQ0E7S0FBVTtJQUVkLHFCQUNFLDhEQUFDVztRQUFJQyxXQUFVOzswQkFDYiw4REFBQ2xCLGtEQUFJQTtnQkFBQ1UsTUFBSztnQkFBSVMsUUFBUTswQkFDckIsNEVBQUNDO29CQUFJRixXQUFVOzhCQUFpQzs7Ozs7Ozs7Ozs7WUFHakRWLFVBQVVhLEdBQUcsQ0FBQztvQkFBQyxFQUFFWixJQUFJLEVBQUVDLElBQUksRUFBRUMsUUFBUSxFQUFFO3FDQUN0Qyw4REFBQ1M7b0JBRUNGLFdBQVU7b0JBQ1ZJLGNBQWNYLFdBQVdDLG1CQUFtQlc7b0JBQzVDQyxjQUFjYixXQUFXRyxtQkFBbUJTOztzQ0FFNUMsOERBQUN2QixrREFBSUE7NEJBQUNVLE1BQU1BOzRCQUFNUyxRQUFRO3NDQUN4Qiw0RUFBQ0M7Z0NBQUlGLFdBQVU7MENBQ1pUOzs7Ozs7Ozs7Ozt3QkFHSkUsWUFBWVAsZ0NBQ1gsOERBQUNnQjs0QkFBSUYsV0FBVTtzQ0FDWlAsU0FBU1UsR0FBRyxDQUFDO29DQUFDLEVBQUVaLElBQUksRUFBRUMsSUFBSSxFQUFFO3FEQUMzQiw4REFBQ1Ysa0RBQUlBO29DQUFZVSxNQUFNQTtvQ0FBTVMsUUFBUTs4Q0FDbkMsNEVBQUNDO3dDQUFJRixXQUFVO2tEQUNaVDs7Ozs7O21DQUZNQTs7Ozs7Ozs7Ozs7O21CQWJaQTs7Ozs7Ozs7Ozs7O0FBeUJmO0dBdkVNTjtLQUFBQTtBQXlFTiwrREFBZUEsV0FBV0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9sYXlvdXQvRGVza3RvcE1lbnUudHN4PzFmMzkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IERlc2t0b3BNZW51OiBSZWFjdC5GQyA9ICgpID0+IHtcbiAgY29uc3QgW2lzRHJvcGRvd25PcGVuLCBzZXREcm9wZG93bk9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbdGltZW91dElkLCBzZXRUaW1lb3V0SWRdID0gdXNlU3RhdGU8Tm9kZUpTLlRpbWVvdXQgfCBudWxsPihudWxsKTtcblxuICBjb25zdCBtZW51SXRlbXMgPSBbXG4gICAgeyB0ZXh0OiAnQWJvdXQnLCBocmVmOiAnL2Fib3V0JyB9LFxuICAgIHtcbiAgICAgIHRleHQ6ICdTZXJ2aWNlcycsXG4gICAgICBocmVmOiAnL3NlcnZpY2VzJyxcbiAgICAgIHN1Ykl0ZW1zOiBbeyB0ZXh0OiAnQ29hY2hpbmcnLCBocmVmOiAnL3NlcnZpY2VzL2NvYWNoaW5nJyB9XSxcbiAgICB9LFxuICAgIHsgdGV4dDogJ1N1Ym1pdCcsIGhyZWY6ICcvc3VibWl0JyB9LFxuICAgIHsgdGV4dDogJ0NvbnRhY3QnLCBocmVmOiAnL2NvbnRhY3QnIH0sXG4gIF07XG5cbiAgY29uc3QgaGFuZGxlTW91c2VFbnRlciA9ICgpID0+IHtcbiAgICBpZiAodGltZW91dElkKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGltZW91dElkKTtcbiAgICAgIHNldFRpbWVvdXRJZChudWxsKTtcbiAgICB9XG4gICAgc2V0RHJvcGRvd25PcGVuKHRydWUpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZU1vdXNlTGVhdmUgPSAoKSA9PiB7XG4gICAgY29uc3QgaWQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHNldERyb3Bkb3duT3BlbihmYWxzZSk7XG4gICAgfSwgNTAwKTtcbiAgICBzZXRUaW1lb3V0SWQoaWQpO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGlmICh0aW1lb3V0SWQpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXRJZCk7XG4gICAgICB9XG4gICAgfTtcbiAgfSwgW3RpbWVvdXRJZF0pO1xuXG4gIHJldHVybiAoXG4gICAgPG5hdiBjbGFzc05hbWU9XCJoaWRkZW4gbWQ6ZmxleCBzcGFjZS14LTggaXRlbXMtY2VudGVyIHJlbGF0aXZlXCI+XG4gICAgICA8TGluayBocmVmPVwiL1wiIHBhc3NIcmVmPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtZ3JheS03MDAgaG92ZXI6dGV4dC1ibGFja1wiPkhvbWU8L2Rpdj5cbiAgICAgIDwvTGluaz5cblxuICAgICAge21lbnVJdGVtcy5tYXAoKHsgdGV4dCwgaHJlZiwgc3ViSXRlbXMgfSkgPT4gKFxuICAgICAgICA8ZGl2XG4gICAgICAgICAga2V5PXt0ZXh0fVxuICAgICAgICAgIGNsYXNzTmFtZT1cInJlbGF0aXZlXCJcbiAgICAgICAgICBvbk1vdXNlRW50ZXI9e3N1Ykl0ZW1zID8gaGFuZGxlTW91c2VFbnRlciA6IHVuZGVmaW5lZH1cbiAgICAgICAgICBvbk1vdXNlTGVhdmU9e3N1Ykl0ZW1zID8gaGFuZGxlTW91c2VMZWF2ZSA6IHVuZGVmaW5lZH1cbiAgICAgICAgPlxuICAgICAgICAgIDxMaW5rIGhyZWY9e2hyZWZ9IHBhc3NIcmVmPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNzAwIGhvdmVyOnRleHQtYmxhY2sgY3Vyc29yLXBvaW50ZXJcIj5cbiAgICAgICAgICAgICAge3RleHR9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAge3N1Ykl0ZW1zICYmIGlzRHJvcGRvd25PcGVuICYmIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLWZ1bGwgLWxlZnQtNCB3LTQ4IG10LVszM3B4XSBiZy1ibGFjayB0ZXh0LXdoaXRlXCI+XG4gICAgICAgICAgICAgIHtzdWJJdGVtcy5tYXAoKHsgdGV4dCwgaHJlZiB9KSA9PiAoXG4gICAgICAgICAgICAgICAgPExpbmsga2V5PXt0ZXh0fSBocmVmPXtocmVmfSBwYXNzSHJlZj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHgtNCBweS0yIGhvdmVyOmJnLWdyYXktMTAwIHRleHQtZ3JheS03MDBcIj5cbiAgICAgICAgICAgICAgICAgICAge3RleHR9XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICApKX1cbiAgICA8L25hdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IERlc2t0b3BNZW51O1xuIl0sIm5hbWVzIjpbIkxpbmsiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkRlc2t0b3BNZW51IiwiaXNEcm9wZG93bk9wZW4iLCJzZXREcm9wZG93bk9wZW4iLCJ0aW1lb3V0SWQiLCJzZXRUaW1lb3V0SWQiLCJtZW51SXRlbXMiLCJ0ZXh0IiwiaHJlZiIsInN1Ykl0ZW1zIiwiaGFuZGxlTW91c2VFbnRlciIsImNsZWFyVGltZW91dCIsImhhbmRsZU1vdXNlTGVhdmUiLCJpZCIsInNldFRpbWVvdXQiLCJuYXYiLCJjbGFzc05hbWUiLCJwYXNzSHJlZiIsImRpdiIsIm1hcCIsIm9uTW91c2VFbnRlciIsInVuZGVmaW5lZCIsIm9uTW91c2VMZWF2ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/layout/DesktopMenu.tsx\n"));

/***/ })

});