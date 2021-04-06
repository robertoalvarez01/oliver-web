webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/SliderPublicidad/index.js":
/*!**************************************************!*\
  !*** ./src/components/SliderPublicidad/index.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ \"./node_modules/reactstrap/es/index.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _store_actions_bannerActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../store/actions/bannerActions */ \"./store/actions/bannerActions.js\");\nvar _this = undefined,\n    _jsxFileName = \"/home/franco/desarrollo/proyecto_oliver/oliver-web-next/src/components/SliderPublicidad/index.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nvar traerTodas = _store_actions_bannerActions__WEBPACK_IMPORTED_MODULE_3__[\"traerTodas\"];\n\nvar SliderPublicidad = function SliderPublicidad(props) {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(0),\n      activeIndex = _useState[0],\n      setActiveIndex = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      animating = _useState2[0],\n      setAnimating = _useState2[1]; // const items = [\n  //     {\n  //       src: props.img,\n  //       altText: 'Slide 1',\n  //       caption: 'Slide 1'\n  //     },\n  //     {\n  //       src: props.img_dos,\n  //       altText: 'Slide 2',\n  //       caption: 'Slide 2'\n  //     },\n  //     {\n  //       src: props.img_tres,\n  //       altText: 'Slide 3',\n  //       caption: 'Slide 3'\n  //     }\n  // ];\n\n\n  var next = function next() {\n    if (animating) return;\n    var nextIndex = activeIndex === props.data.length - 1 ? 0 : activeIndex + 1;\n    setActiveIndex(nextIndex);\n  };\n\n  var previous = function previous() {\n    if (animating) return;\n    var nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;\n    setActiveIndex(nextIndex);\n  };\n\n  var goToIndex = function goToIndex(newIndex) {\n    if (animating) return;\n    setActiveIndex(newIndex);\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    props.traerTodas();\n  }, []);\n  var slides = props.data.map(function (item) {\n    return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"CarouselItem\"], {\n      onExiting: function onExiting() {\n        return setAnimating(true);\n      },\n      onExited: function onExited() {\n        return setAnimating(false);\n      },\n      key: item.url,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 49,\n        columnNumber: 11\n      }\n    }, __jsx(\"img\", {\n      src: item.url,\n      alt: item.descripcion,\n      className: \"d-block w-100\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 54,\n        columnNumber: 13\n      }\n    }));\n  });\n  console.log(props);\n  return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"Carousel\"], {\n    activeIndex: activeIndex,\n    next: next,\n    previous: previous,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 9\n    }\n  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"CarouselIndicators\"], {\n    items: props.data,\n    activeIndex: activeIndex,\n    onClickHandler: goToIndex,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 13\n    }\n  }), slides, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"CarouselControl\"], {\n    direction: \"prev\",\n    directionText: \"Previous\",\n    onClickHandler: previous,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 13\n    }\n  }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"CarouselControl\"], {\n    direction: \"next\",\n    directionText: \"Next\",\n    onClickHandler: next,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 13\n    }\n  }));\n};\n\n_s(SliderPublicidad, \"iWrphiqdW3hngB8u5T4tpyMCWYA=\");\n\n_c = SliderPublicidad;\n\nvar mapStateToProps = function mapStateToProps(_ref) {\n  var bannerReducer = _ref.bannerReducer;\n  return bannerReducer;\n};\n\nvar mapDispatchToProps = {\n  traerTodas: traerTodas\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__[\"connect\"])(mapStateToProps, mapDispatchToProps)(SliderPublicidad));\n\nvar _c;\n\n$RefreshReg$(_c, \"SliderPublicidad\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU2xpZGVyUHVibGljaWRhZC9pbmRleC5qcz8yMmQyIl0sIm5hbWVzIjpbInRyYWVyVG9kYXMiLCJiYW5uZXJBY3Rpb25zIiwiU2xpZGVyUHVibGljaWRhZCIsInByb3BzIiwidXNlU3RhdGUiLCJhY3RpdmVJbmRleCIsInNldEFjdGl2ZUluZGV4IiwiYW5pbWF0aW5nIiwic2V0QW5pbWF0aW5nIiwibmV4dCIsIm5leHRJbmRleCIsImRhdGEiLCJsZW5ndGgiLCJwcmV2aW91cyIsIml0ZW1zIiwiZ29Ub0luZGV4IiwibmV3SW5kZXgiLCJ1c2VFZmZlY3QiLCJzbGlkZXMiLCJtYXAiLCJpdGVtIiwidXJsIiwiZGVzY3JpcGNpb24iLCJjb25zb2xlIiwibG9nIiwibWFwU3RhdGVUb1Byb3BzIiwiYmFubmVyUmVkdWNlciIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImNvbm5lY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7SUFDT0EsVSxHQUFjQyx1RTs7QUFDckIsSUFBTUMsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFBQSxrQkFDTUMsc0RBQVEsQ0FBQyxDQUFELENBRGQ7QUFBQSxNQUN6QkMsV0FEeUI7QUFBQSxNQUNaQyxjQURZOztBQUFBLG1CQUVFRixzREFBUSxDQUFDLEtBQUQsQ0FGVjtBQUFBLE1BRXpCRyxTQUZ5QjtBQUFBLE1BRWRDLFlBRmMsa0JBR2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBLE1BQU1DLElBQUksR0FBRyxTQUFQQSxJQUFPLEdBQU07QUFDZixRQUFJRixTQUFKLEVBQWU7QUFDZixRQUFNRyxTQUFTLEdBQUdMLFdBQVcsS0FBS0YsS0FBSyxDQUFDUSxJQUFOLENBQVdDLE1BQVgsR0FBb0IsQ0FBcEMsR0FBd0MsQ0FBeEMsR0FBNENQLFdBQVcsR0FBRyxDQUE1RTtBQUNBQyxrQkFBYyxDQUFDSSxTQUFELENBQWQ7QUFDSCxHQUpEOztBQU1BLE1BQU1HLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQU07QUFDbkIsUUFBSU4sU0FBSixFQUFlO0FBQ2YsUUFBTUcsU0FBUyxHQUFHTCxXQUFXLEtBQUssQ0FBaEIsR0FBb0JTLEtBQUssQ0FBQ0YsTUFBTixHQUFlLENBQW5DLEdBQXVDUCxXQUFXLEdBQUcsQ0FBdkU7QUFDQUMsa0JBQWMsQ0FBQ0ksU0FBRCxDQUFkO0FBQ0gsR0FKRDs7QUFNQSxNQUFNSyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFDQyxRQUFELEVBQWM7QUFDNUIsUUFBSVQsU0FBSixFQUFlO0FBQ2ZELGtCQUFjLENBQUNVLFFBQUQsQ0FBZDtBQUNILEdBSEQ7O0FBS0FDLHlEQUFTLENBQUMsWUFBTTtBQUNkZCxTQUFLLENBQUNILFVBQU47QUFDRCxHQUZRLEVBRU4sRUFGTSxDQUFUO0FBSUEsTUFBTWtCLE1BQU0sR0FBR2YsS0FBSyxDQUFDUSxJQUFOLENBQVdRLEdBQVgsQ0FBZSxVQUFDQyxJQUFELEVBQVU7QUFDcEMsV0FDRSxNQUFDLHVEQUFEO0FBQ0UsZUFBUyxFQUFFO0FBQUEsZUFBTVosWUFBWSxDQUFDLElBQUQsQ0FBbEI7QUFBQSxPQURiO0FBRUUsY0FBUSxFQUFFO0FBQUEsZUFBTUEsWUFBWSxDQUFDLEtBQUQsQ0FBbEI7QUFBQSxPQUZaO0FBR0UsU0FBRyxFQUFFWSxJQUFJLENBQUNDLEdBSFo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUtFO0FBQUssU0FBRyxFQUFFRCxJQUFJLENBQUNDLEdBQWY7QUFBb0IsU0FBRyxFQUFFRCxJQUFJLENBQUNFLFdBQTlCO0FBQTJDLGVBQVMsRUFBQyxlQUFyRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BTEYsQ0FERjtBQVNILEdBVmMsQ0FBZjtBQVdBQyxTQUFPLENBQUNDLEdBQVIsQ0FBWXJCLEtBQVo7QUFDQSxTQUNJLE1BQUMsbURBQUQ7QUFDSSxlQUFXLEVBQUVFLFdBRGpCO0FBRUksUUFBSSxFQUFFSSxJQUZWO0FBR0ksWUFBUSxFQUFFSSxRQUhkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FJSSxNQUFDLDZEQUFEO0FBQW9CLFNBQUssRUFBRVYsS0FBSyxDQUFDUSxJQUFqQztBQUF1QyxlQUFXLEVBQUVOLFdBQXBEO0FBQWlFLGtCQUFjLEVBQUVVLFNBQWpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFKSixFQUtLRyxNQUxMLEVBTUksTUFBQywwREFBRDtBQUFpQixhQUFTLEVBQUMsTUFBM0I7QUFBa0MsaUJBQWEsRUFBQyxVQUFoRDtBQUEyRCxrQkFBYyxFQUFFTCxRQUEzRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTkosRUFPSSxNQUFDLDBEQUFEO0FBQWlCLGFBQVMsRUFBQyxNQUEzQjtBQUFrQyxpQkFBYSxFQUFDLE1BQWhEO0FBQXVELGtCQUFjLEVBQUVKLElBQXZFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFQSixDQURKO0FBV0gsQ0FoRUQ7O0dBQU1QLGdCOztLQUFBQSxnQjs7QUFrRU4sSUFBTXVCLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsT0FBbUI7QUFBQSxNQUFqQkMsYUFBaUIsUUFBakJBLGFBQWlCO0FBQ3pDLFNBQU9BLGFBQVA7QUFDRCxDQUZEOztBQUlBLElBQU1DLGtCQUFrQixHQUFHO0FBQ3pCM0IsWUFBVSxFQUFWQTtBQUR5QixDQUEzQjtBQUllNEIsMEhBQU8sQ0FBQ0gsZUFBRCxFQUFpQkUsa0JBQWpCLENBQVAsQ0FBNEN6QixnQkFBNUMsQ0FBZiIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL1NsaWRlclB1YmxpY2lkYWQvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3Qse3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7Q2Fyb3VzZWwsQ2Fyb3VzZWxJdGVtLENhcm91c2VsQ29udHJvbCxDYXJvdXNlbEluZGljYXRvcnN9IGZyb20gJ3JlYWN0c3RyYXAnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0ICogYXMgYmFubmVyQWN0aW9ucyBmcm9tICcuLi8uLi8uLi9zdG9yZS9hY3Rpb25zL2Jhbm5lckFjdGlvbnMnO1xuY29uc3Qge3RyYWVyVG9kYXN9ID0gYmFubmVyQWN0aW9ucztcbmNvbnN0IFNsaWRlclB1YmxpY2lkYWQgPSAocHJvcHMpID0+IHtcbiAgICBjb25zdCBbYWN0aXZlSW5kZXgsIHNldEFjdGl2ZUluZGV4XSA9IHVzZVN0YXRlKDApO1xuICAgIGNvbnN0IFthbmltYXRpbmcsIHNldEFuaW1hdGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgLy8gY29uc3QgaXRlbXMgPSBbXG4gICAgLy8gICAgIHtcbiAgICAvLyAgICAgICBzcmM6IHByb3BzLmltZyxcbiAgICAvLyAgICAgICBhbHRUZXh0OiAnU2xpZGUgMScsXG4gICAgLy8gICAgICAgY2FwdGlvbjogJ1NsaWRlIDEnXG4gICAgLy8gICAgIH0sXG4gICAgLy8gICAgIHtcbiAgICAvLyAgICAgICBzcmM6IHByb3BzLmltZ19kb3MsXG4gICAgLy8gICAgICAgYWx0VGV4dDogJ1NsaWRlIDInLFxuICAgIC8vICAgICAgIGNhcHRpb246ICdTbGlkZSAyJ1xuICAgIC8vICAgICB9LFxuICAgIC8vICAgICB7XG4gICAgLy8gICAgICAgc3JjOiBwcm9wcy5pbWdfdHJlcyxcbiAgICAvLyAgICAgICBhbHRUZXh0OiAnU2xpZGUgMycsXG4gICAgLy8gICAgICAgY2FwdGlvbjogJ1NsaWRlIDMnXG4gICAgLy8gICAgIH1cbiAgICAvLyBdO1xuICAgIGNvbnN0IG5leHQgPSAoKSA9PiB7XG4gICAgICAgIGlmIChhbmltYXRpbmcpIHJldHVybjtcbiAgICAgICAgY29uc3QgbmV4dEluZGV4ID0gYWN0aXZlSW5kZXggPT09IHByb3BzLmRhdGEubGVuZ3RoIC0gMSA/IDAgOiBhY3RpdmVJbmRleCArIDE7XG4gICAgICAgIHNldEFjdGl2ZUluZGV4KG5leHRJbmRleCk7XG4gICAgfVxuXG4gICAgY29uc3QgcHJldmlvdXMgPSAoKSA9PiB7XG4gICAgICAgIGlmIChhbmltYXRpbmcpIHJldHVybjtcbiAgICAgICAgY29uc3QgbmV4dEluZGV4ID0gYWN0aXZlSW5kZXggPT09IDAgPyBpdGVtcy5sZW5ndGggLSAxIDogYWN0aXZlSW5kZXggLSAxO1xuICAgICAgICBzZXRBY3RpdmVJbmRleChuZXh0SW5kZXgpO1xuICAgIH1cblxuICAgIGNvbnN0IGdvVG9JbmRleCA9IChuZXdJbmRleCkgPT4ge1xuICAgICAgICBpZiAoYW5pbWF0aW5nKSByZXR1cm47XG4gICAgICAgIHNldEFjdGl2ZUluZGV4KG5ld0luZGV4KTtcbiAgICB9XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgcHJvcHMudHJhZXJUb2RhcygpO1xuICAgIH0sIFtdKVxuICAgIFxuICAgIGNvbnN0IHNsaWRlcyA9IHByb3BzLmRhdGEubWFwKChpdGVtKSA9PiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPENhcm91c2VsSXRlbVxuICAgICAgICAgICAgb25FeGl0aW5nPXsoKSA9PiBzZXRBbmltYXRpbmcodHJ1ZSl9XG4gICAgICAgICAgICBvbkV4aXRlZD17KCkgPT4gc2V0QW5pbWF0aW5nKGZhbHNlKX1cbiAgICAgICAgICAgIGtleT17aXRlbS51cmx9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGltZyBzcmM9e2l0ZW0udXJsfSBhbHQ9e2l0ZW0uZGVzY3JpcGNpb259IGNsYXNzTmFtZT1cImQtYmxvY2sgdy0xMDBcIi8+XG4gICAgICAgICAgPC9DYXJvdXNlbEl0ZW0+XG4gICAgICAgICk7XG4gICAgfSk7XG4gICAgY29uc29sZS5sb2cocHJvcHMpO1xuICAgIHJldHVybiAoXG4gICAgICAgIDxDYXJvdXNlbFxuICAgICAgICAgICAgYWN0aXZlSW5kZXg9e2FjdGl2ZUluZGV4fVxuICAgICAgICAgICAgbmV4dD17bmV4dH1cbiAgICAgICAgICAgIHByZXZpb3VzPXtwcmV2aW91c30+XG4gICAgICAgICAgICA8Q2Fyb3VzZWxJbmRpY2F0b3JzIGl0ZW1zPXtwcm9wcy5kYXRhfSBhY3RpdmVJbmRleD17YWN0aXZlSW5kZXh9IG9uQ2xpY2tIYW5kbGVyPXtnb1RvSW5kZXh9IC8+XG4gICAgICAgICAgICB7c2xpZGVzfVxuICAgICAgICAgICAgPENhcm91c2VsQ29udHJvbCBkaXJlY3Rpb249XCJwcmV2XCIgZGlyZWN0aW9uVGV4dD1cIlByZXZpb3VzXCIgb25DbGlja0hhbmRsZXI9e3ByZXZpb3VzfSAvPlxuICAgICAgICAgICAgPENhcm91c2VsQ29udHJvbCBkaXJlY3Rpb249XCJuZXh0XCIgZGlyZWN0aW9uVGV4dD1cIk5leHRcIiBvbkNsaWNrSGFuZGxlcj17bmV4dH0gLz5cbiAgICAgICAgPC9DYXJvdXNlbD5cbiAgICApO1xufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoe2Jhbm5lclJlZHVjZXJ9KT0+e1xuICByZXR1cm4gYmFubmVyUmVkdWNlcjtcbn1cblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0ge1xuICB0cmFlclRvZGFzXG59XG4gXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcyxtYXBEaXNwYXRjaFRvUHJvcHMpKFNsaWRlclB1YmxpY2lkYWQpOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/SliderPublicidad/index.js\n");

/***/ })

})