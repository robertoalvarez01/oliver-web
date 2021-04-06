webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/SliderPublicidad/index.js":
/*!**************************************************!*\
  !*** ./src/components/SliderPublicidad/index.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ \"./node_modules/reactstrap/es/index.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _store_actions_bannerActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../store/actions/bannerActions */ \"./store/actions/bannerActions.js\");\nvar _this = undefined,\n    _jsxFileName = \"/home/franco/desarrollo/proyecto_oliver/oliver-web-next/src/components/SliderPublicidad/index.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nvar SliderPublicidad = function SliderPublicidad(_ref) {\n  _s();\n\n  var img = _ref.img,\n      img_dos = _ref.img_dos,\n      img_tres = _ref.img_tres,\n      props = _ref.props;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(0),\n      activeIndex = _useState[0],\n      setActiveIndex = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      animating = _useState2[0],\n      setAnimating = _useState2[1];\n\n  var items = [{\n    src: img,\n    altText: 'Slide 1',\n    caption: 'Slide 1'\n  }, {\n    src: img_dos,\n    altText: 'Slide 2',\n    caption: 'Slide 2'\n  }, {\n    src: img_tres,\n    altText: 'Slide 3',\n    caption: 'Slide 3'\n  }];\n\n  var next = function next() {\n    if (animating) return;\n    var nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;\n    setActiveIndex(nextIndex);\n  };\n\n  var previous = function previous() {\n    if (animating) return;\n    var nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;\n    setActiveIndex(nextIndex);\n  };\n\n  var goToIndex = function goToIndex(newIndex) {\n    if (animating) return;\n    setActiveIndex(newIndex);\n  };\n\n  var slides = items.map(function (item) {\n    return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"CarouselItem\"], {\n      onExiting: function onExiting() {\n        return setAnimating(true);\n      },\n      onExited: function onExited() {\n        return setAnimating(false);\n      },\n      key: item.src,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 45,\n        columnNumber: 11\n      }\n    }, __jsx(\"img\", {\n      src: item.src,\n      alt: item.altText,\n      className: \"d-block w-100\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 50,\n        columnNumber: 13\n      }\n    }));\n  });\n  console.log(props);\n  return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"Carousel\"], {\n    activeIndex: activeIndex,\n    next: next,\n    previous: previous,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 9\n    }\n  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"CarouselIndicators\"], {\n    items: items,\n    activeIndex: activeIndex,\n    onClickHandler: goToIndex,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 13\n    }\n  }), slides, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"CarouselControl\"], {\n    direction: \"prev\",\n    directionText: \"Previous\",\n    onClickHandler: previous,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 13\n    }\n  }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"CarouselControl\"], {\n    direction: \"next\",\n    directionText: \"Next\",\n    onClickHandler: next,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 13\n    }\n  }));\n};\n\n_s(SliderPublicidad, \"FYd3Lqf74+dQScd+D3/2SfzV0cE=\");\n\n_c = SliderPublicidad;\n\nvar mapStateToProps = function mapStateToProps(_ref2) {\n  var bannerReducer = _ref2.bannerReducer;\n  return {\n    bannerReducer: bannerReducer\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__[\"connect\"])(mapStateToProps, {})(SliderPublicidad));\n\nvar _c;\n\n$RefreshReg$(_c, \"SliderPublicidad\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU2xpZGVyUHVibGljaWRhZC9pbmRleC5qcz8yMmQyIl0sIm5hbWVzIjpbIlNsaWRlclB1YmxpY2lkYWQiLCJpbWciLCJpbWdfZG9zIiwiaW1nX3RyZXMiLCJwcm9wcyIsInVzZVN0YXRlIiwiYWN0aXZlSW5kZXgiLCJzZXRBY3RpdmVJbmRleCIsImFuaW1hdGluZyIsInNldEFuaW1hdGluZyIsIml0ZW1zIiwic3JjIiwiYWx0VGV4dCIsImNhcHRpb24iLCJuZXh0IiwibmV4dEluZGV4IiwibGVuZ3RoIiwicHJldmlvdXMiLCJnb1RvSW5kZXgiLCJuZXdJbmRleCIsInNsaWRlcyIsIm1hcCIsIml0ZW0iLCJjb25zb2xlIiwibG9nIiwibWFwU3RhdGVUb1Byb3BzIiwiYmFubmVyUmVkdWNlciIsImNvbm5lY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixPQUFrQztBQUFBOztBQUFBLE1BQWhDQyxHQUFnQyxRQUFoQ0EsR0FBZ0M7QUFBQSxNQUE1QkMsT0FBNEIsUUFBNUJBLE9BQTRCO0FBQUEsTUFBcEJDLFFBQW9CLFFBQXBCQSxRQUFvQjtBQUFBLE1BQVhDLEtBQVcsUUFBWEEsS0FBVzs7QUFBQSxrQkFDakJDLHNEQUFRLENBQUMsQ0FBRCxDQURTO0FBQUEsTUFDaERDLFdBRGdEO0FBQUEsTUFDbkNDLGNBRG1DOztBQUFBLG1CQUVyQkYsc0RBQVEsQ0FBQyxLQUFELENBRmE7QUFBQSxNQUVoREcsU0FGZ0Q7QUFBQSxNQUVyQ0MsWUFGcUM7O0FBR3ZELE1BQU1DLEtBQUssR0FBRyxDQUNWO0FBQ0VDLE9BQUcsRUFBRVYsR0FEUDtBQUVFVyxXQUFPLEVBQUUsU0FGWDtBQUdFQyxXQUFPLEVBQUU7QUFIWCxHQURVLEVBTVY7QUFDRUYsT0FBRyxFQUFFVCxPQURQO0FBRUVVLFdBQU8sRUFBRSxTQUZY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bnRzL1NsaWRlclB1YmxpY2lkYWQvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3Qse3VzZVN0YXRlfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge0Nhcm91c2VsLENhcm91c2VsSXRlbSxDYXJvdXNlbENvbnRyb2wsQ2Fyb3VzZWxJbmRpY2F0b3JzfSBmcm9tICdyZWFjdHN0cmFwJztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCAqIGFzIGJhbm5lckFjdGlvbnMgZnJvbSAnLi4vLi4vLi4vc3RvcmUvYWN0aW9ucy9iYW5uZXJBY3Rpb25zJztcblxuY29uc3QgU2xpZGVyUHVibGljaWRhZCA9ICh7aW1nLGltZ19kb3MsaW1nX3RyZXMscHJvcHN9KSA9PiB7XG4gICAgY29uc3QgW2FjdGl2ZUluZGV4LCBzZXRBY3RpdmVJbmRleF0gPSB1c2VTdGF0ZSgwKTtcbiAgICBjb25zdCBbYW5pbWF0aW5nLCBzZXRBbmltYXRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IGl0ZW1zID0gW1xuICAgICAgICB7XG4gICAgICAgICAgc3JjOiBpbWcsXG4gICAgICAgICAgYWx0VGV4dDogJ1NsaWRlIDEnLFxuICAgICAgICAgIGNhcHRpb246ICdTbGlkZSAxJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgc3JjOiBpbWdfZG9zLFxuICAgICAgICAgIGFsdFRleHQ6ICdTbGlkZSAyJyxcbiAgICAgICAgICBjYXB0aW9uOiAnU2xpZGUgMidcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHNyYzogaW1nX3RyZXMsXG4gICAgICAgICAgYWx0VGV4dDogJ1NsaWRlIDMnLFxuICAgICAgICAgIGNhcHRpb246ICdTbGlkZSAzJ1xuICAgICAgICB9XG4gICAgXTtcbiAgICBjb25zdCBuZXh0ID0gKCkgPT4ge1xuICAgICAgICBpZiAoYW5pbWF0aW5nKSByZXR1cm47XG4gICAgICAgIGNvbnN0IG5leHRJbmRleCA9IGFjdGl2ZUluZGV4ID09PSBpdGVtcy5sZW5ndGggLSAxID8gMCA6IGFjdGl2ZUluZGV4ICsgMTtcbiAgICAgICAgc2V0QWN0aXZlSW5kZXgobmV4dEluZGV4KTtcbiAgICB9XG5cbiAgICBjb25zdCBwcmV2aW91cyA9ICgpID0+IHtcbiAgICAgICAgaWYgKGFuaW1hdGluZykgcmV0dXJuO1xuICAgICAgICBjb25zdCBuZXh0SW5kZXggPSBhY3RpdmVJbmRleCA9PT0gMCA/IGl0ZW1zLmxlbmd0aCAtIDEgOiBhY3RpdmVJbmRleCAtIDE7XG4gICAgICAgIHNldEFjdGl2ZUluZGV4KG5leHRJbmRleCk7XG4gICAgfVxuXG4gICAgY29uc3QgZ29Ub0luZGV4ID0gKG5ld0luZGV4KSA9PiB7XG4gICAgICAgIGlmIChhbmltYXRpbmcpIHJldHVybjtcbiAgICAgICAgc2V0QWN0aXZlSW5kZXgobmV3SW5kZXgpO1xuICAgIH1cbiAgICBcbiAgICBjb25zdCBzbGlkZXMgPSBpdGVtcy5tYXAoKGl0ZW0pID0+IHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8Q2Fyb3VzZWxJdGVtXG4gICAgICAgICAgICBvbkV4aXRpbmc9eygpID0+IHNldEFuaW1hdGluZyh0cnVlKX1cbiAgICAgICAgICAgIG9uRXhpdGVkPXsoKSA9PiBzZXRBbmltYXRpbmcoZmFsc2UpfVxuICAgICAgICAgICAga2V5PXtpdGVtLnNyY31cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8aW1nIHNyYz17aXRlbS5zcmN9IGFsdD17aXRlbS5hbHRUZXh0fSBjbGFzc05hbWU9XCJkLWJsb2NrIHctMTAwXCIvPlxuICAgICAgICAgIDwvQ2Fyb3VzZWxJdGVtPlxuICAgICAgICApO1xuICAgIH0pO1xuICAgIGNvbnNvbGUubG9nKHByb3BzKTtcbiAgICByZXR1cm4gKFxuICAgICAgICA8Q2Fyb3VzZWxcbiAgICAgICAgICAgIGFjdGl2ZUluZGV4PXthY3RpdmVJbmRleH1cbiAgICAgICAgICAgIG5leHQ9e25leHR9XG4gICAgICAgICAgICBwcmV2aW91cz17cHJldmlvdXN9PlxuICAgICAgICAgICAgPENhcm91c2VsSW5kaWNhdG9ycyBpdGVtcz17aXRlbXN9IGFjdGl2ZUluZGV4PXthY3RpdmVJbmRleH0gb25DbGlja0hhbmRsZXI9e2dvVG9JbmRleH0gLz5cbiAgICAgICAgICAgIHtzbGlkZXN9XG4gICAgICAgICAgICA8Q2Fyb3VzZWxDb250cm9sIGRpcmVjdGlvbj1cInByZXZcIiBkaXJlY3Rpb25UZXh0PVwiUHJldmlvdXNcIiBvbkNsaWNrSGFuZGxlcj17cHJldmlvdXN9IC8+XG4gICAgICAgICAgICA8Q2Fyb3VzZWxDb250cm9sIGRpcmVjdGlvbj1cIm5leHRcIiBkaXJlY3Rpb25UZXh0PVwiTmV4dFwiIG9uQ2xpY2tIYW5kbGVyPXtuZXh0fSAvPlxuICAgICAgICA8L0Nhcm91c2VsPlxuICAgICk7XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9ICh7YmFubmVyUmVkdWNlcn0pPT57XG4gIHJldHVybiB7YmFubmVyUmVkdWNlcn07XG59XG4gXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcyx7fSkoU2xpZGVyUHVibGljaWRhZCk7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/SliderPublicidad/index.js\n");

/***/ })

})