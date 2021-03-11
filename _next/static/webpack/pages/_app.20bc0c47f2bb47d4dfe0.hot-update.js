webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/common/button/button.tsx":
/*!*********************************************!*\
  !*** ./components/common/button/button.tsx ***!
  \*********************************************/
/*! exports provided: Button */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Button\", function() { return Button; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _button_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./button.module.scss */ \"./components/common/button/button.module.scss\");\n/* harmony import */ var _button_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_button_module_scss__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\nvar _jsxFileName = \"/Users/krausj/Projects/jks/edgeware-website/components/common/button/button.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\nvar Button = function Button(_ref) {\n  _s();\n\n  var _cn;\n\n  var children = _ref.children,\n      _ref$style = _ref.style,\n      style = _ref$style === void 0 ? 'primary' : _ref$style,\n      fullWidth = _ref.fullWidth,\n      onClick = _ref.onClick,\n      href = _ref.href;\n  var buttonClasses = classnames__WEBPACK_IMPORTED_MODULE_4___default()(_button_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.button, (_cn = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_cn, \"\".concat(_button_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.buttonPrimary), style === 'primary'), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_cn, \"\".concat(_button_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.buttonSecondary), style === 'secondary'), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_cn, \"\".concat(_button_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.buttonWhite), style === 'white'), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_cn, \"\".concat(_button_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.buttonBlack), style === 'black'), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_cn, \"\".concat(_button_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.buttonBlock), fullWidth === true), _cn));\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__[\"useRouter\"])();\n  var handleClick = react__WEBPACK_IMPORTED_MODULE_2__[\"useCallback\"](function (event) {\n    if (href !== null && href !== void 0 && href.match(/http/)) {\n      event.preventDefault();\n      window.open(href);\n    } else if (href) {\n      event.preventDefault();\n      router.push(href);\n      onClick && onClick();\n    } else {\n      onClick();\n    }\n  }, [href, onClick, router]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n    className: buttonClasses,\n    onClick: handleClick,\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 50,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Button, \"ZuYBnNo7SnkY6uMZKFM6kA/rC9s=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_3__[\"useRouter\"]];\n});\n\n_c = Button;\n\nvar _c;\n\n$RefreshReg$(_c, \"Button\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb21tb24vYnV0dG9uL2J1dHRvbi50c3g/MWYwOSJdLCJuYW1lcyI6WyJCdXR0b24iLCJjaGlsZHJlbiIsInN0eWxlIiwiZnVsbFdpZHRoIiwib25DbGljayIsImhyZWYiLCJidXR0b25DbGFzc2VzIiwiY24iLCJzdHlsZXMiLCJidXR0b24iLCJidXR0b25QcmltYXJ5IiwiYnV0dG9uU2Vjb25kYXJ5IiwiYnV0dG9uV2hpdGUiLCJidXR0b25CbGFjayIsImJ1dHRvbkJsb2NrIiwicm91dGVyIiwidXNlUm91dGVyIiwiaGFuZGxlQ2xpY2siLCJSZWFjdCIsImV2ZW50IiwibWF0Y2giLCJwcmV2ZW50RGVmYXVsdCIsIndpbmRvdyIsIm9wZW4iLCJwdXNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUVBO0FBVU8sSUFBTUEsTUFBNkIsR0FBRyxTQUFoQ0EsTUFBZ0MsT0FNdkM7QUFBQTs7QUFBQTs7QUFBQSxNQUxKQyxRQUtJLFFBTEpBLFFBS0k7QUFBQSx3QkFKSkMsS0FJSTtBQUFBLE1BSkpBLEtBSUksMkJBSkksU0FJSjtBQUFBLE1BSEpDLFNBR0ksUUFISkEsU0FHSTtBQUFBLE1BRkpDLE9BRUksUUFGSkEsT0FFSTtBQUFBLE1BREpDLElBQ0ksUUFESkEsSUFDSTtBQUNKLE1BQU1DLGFBQWEsR0FBR0MsaURBQUUsQ0FBQ0MsMERBQU0sQ0FBQ0MsTUFBUixzSEFDbEJELDBEQUFNLENBQUNFLGFBRFcsR0FDT1IsS0FBSyxLQUFLLFNBRGpCLDRHQUVsQk0sMERBQU0sQ0FBQ0csZUFGVyxHQUVTVCxLQUFLLEtBQUssV0FGbkIsNEdBR2xCTSwwREFBTSxDQUFDSSxXQUhXLEdBR0tWLEtBQUssS0FBSyxPQUhmLDRHQUlsQk0sMERBQU0sQ0FBQ0ssV0FKVyxHQUlLWCxLQUFLLEtBQUssT0FKZiw0R0FLbEJNLDBEQUFNLENBQUNNLFdBTFcsR0FLS1gsU0FBUyxLQUFLLElBTG5CLFFBQXhCO0FBUUEsTUFBTVksTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUVBLE1BQU1DLFdBQVcsR0FBR0MsaURBQUEsQ0FDbEIsVUFBQ0MsS0FBRCxFQUFXO0FBQ1QsUUFBSWQsSUFBSixhQUFJQSxJQUFKLGVBQUlBLElBQUksQ0FBRWUsS0FBTixDQUFZLE1BQVosQ0FBSixFQUF5QjtBQUN2QkQsV0FBSyxDQUFDRSxjQUFOO0FBQ0FDLFlBQU0sQ0FBQ0MsSUFBUCxDQUFZbEIsSUFBWjtBQUNELEtBSEQsTUFHTyxJQUFJQSxJQUFKLEVBQVU7QUFDZmMsV0FBSyxDQUFDRSxjQUFOO0FBQ0FOLFlBQU0sQ0FBQ1MsSUFBUCxDQUFZbkIsSUFBWjtBQUNBRCxhQUFPLElBQUlBLE9BQU8sRUFBbEI7QUFDRCxLQUpNLE1BSUE7QUFDTEEsYUFBTztBQUNSO0FBQ0YsR0FaaUIsRUFhbEIsQ0FBQ0MsSUFBRCxFQUFPRCxPQUFQLEVBQWdCVyxNQUFoQixDQWJrQixDQUFwQjtBQWdCQSxzQkFDRTtBQUFRLGFBQVMsRUFBRVQsYUFBbkI7QUFBa0MsV0FBTyxFQUFFVyxXQUEzQztBQUFBLGNBQ0doQjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQUtELENBdENNOztHQUFNRCxNO1VBZUlnQixxRDs7O0tBZkpoQixNIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9jb21tb24vYnV0dG9uL2J1dHRvbi50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5cbmltcG9ydCBjbiBmcm9tICdjbGFzc25hbWVzJztcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2J1dHRvbi5tb2R1bGUuc2Nzcyc7XG5cbmludGVyZmFjZSBCdXR0b25Qcm9wcyB7XG4gIHN0eWxlPzogJ3ByaW1hcnknIHwgJ3NlY29uZGFyeScgfCAnd2hpdGUnIHwgJ2JsYWNrJztcbiAgZnVsbFdpZHRoPzogYm9vbGVhbjtcbiAgb25DbGljaz86ICgpID0+IHZvaWQ7XG4gIGRvd25sb2FkPzogYm9vbGVhbjtcbiAgaHJlZj86IHN0cmluZztcbn1cblxuZXhwb3J0IGNvbnN0IEJ1dHRvbjogUmVhY3QuRkM8QnV0dG9uUHJvcHM+ID0gKHtcbiAgY2hpbGRyZW4sXG4gIHN0eWxlID0gJ3ByaW1hcnknLFxuICBmdWxsV2lkdGgsXG4gIG9uQ2xpY2ssXG4gIGhyZWYsXG59KSA9PiB7XG4gIGNvbnN0IGJ1dHRvbkNsYXNzZXMgPSBjbihzdHlsZXMuYnV0dG9uLCB7XG4gICAgW2Ake3N0eWxlcy5idXR0b25QcmltYXJ5fWBdOiBzdHlsZSA9PT0gJ3ByaW1hcnknLFxuICAgIFtgJHtzdHlsZXMuYnV0dG9uU2Vjb25kYXJ5fWBdOiBzdHlsZSA9PT0gJ3NlY29uZGFyeScsXG4gICAgW2Ake3N0eWxlcy5idXR0b25XaGl0ZX1gXTogc3R5bGUgPT09ICd3aGl0ZScsXG4gICAgW2Ake3N0eWxlcy5idXR0b25CbGFja31gXTogc3R5bGUgPT09ICdibGFjaycsXG4gICAgW2Ake3N0eWxlcy5idXR0b25CbG9ja31gXTogZnVsbFdpZHRoID09PSB0cnVlLFxuICB9KTtcblxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICBjb25zdCBoYW5kbGVDbGljayA9IFJlYWN0LnVzZUNhbGxiYWNrKFxuICAgIChldmVudCkgPT4ge1xuICAgICAgaWYgKGhyZWY/Lm1hdGNoKC9odHRwLykpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgd2luZG93Lm9wZW4oaHJlZik7XG4gICAgICB9IGVsc2UgaWYgKGhyZWYpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgcm91dGVyLnB1c2goaHJlZik7XG4gICAgICAgIG9uQ2xpY2sgJiYgb25DbGljaygpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgb25DbGljaygpO1xuICAgICAgfVxuICAgIH0sXG4gICAgW2hyZWYsIG9uQ2xpY2ssIHJvdXRlcl1cbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDxidXR0b24gY2xhc3NOYW1lPXtidXR0b25DbGFzc2VzfSBvbkNsaWNrPXtoYW5kbGVDbGlja30+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9idXR0b24+XG4gICk7XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/common/button/button.tsx\n");

/***/ })

})