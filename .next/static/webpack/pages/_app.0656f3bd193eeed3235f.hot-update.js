webpackHotUpdate_N_E("pages/_app",{

/***/ "./store/reducers/subproductosReducer.js":
/*!***********************************************!*\
  !*** ./store/reducers/subproductosReducer.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _types_subproductosTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../types/subproductosTypes */ \"./store/types/subproductosTypes.js\");\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\nvar INITIAL_STATE = {\n  subproductos: [],\n  promociones: [],\n  loading: false,\n  error: null\n};\n\nvar subproductosReducer = function subproductosReducer() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case _types_subproductosTypes__WEBPACK_IMPORTED_MODULE_1__[\"TRAER_TODOS\"]:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        subproductos: action.payload,\n        loading: false\n      });\n\n    case _types_subproductosTypes__WEBPACK_IMPORTED_MODULE_1__[\"TRAER_UNO\"]:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        subproducto: action.payload,\n        loading: false\n      });\n\n    case _types_subproductosTypes__WEBPACK_IMPORTED_MODULE_1__[\"TRAER_PROMOCIONES\"]:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        promociones: action.payload,\n        loading: false\n      });\n\n    case _types_subproductosTypes__WEBPACK_IMPORTED_MODULE_1__[\"ORDENAR_PRODUCTOS\"]:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        subproductos: action.payload,\n        loading: false\n      });\n\n    case _types_subproductosTypes__WEBPACK_IMPORTED_MODULE_1__[\"FILTRANDO\"]:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        subproductos: action.payload,\n        loading: false\n      });\n\n    case _types_subproductosTypes__WEBPACK_IMPORTED_MODULE_1__[\"LOADING\"]:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        loading: true\n      });\n\n    case _types_subproductosTypes__WEBPACK_IMPORTED_MODULE_1__[\"ERROR\"]:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        loading: false,\n        error: action.payload\n      });\n\n    default:\n      return state;\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (subproductosReducer);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvcmVkdWNlcnMvc3VicHJvZHVjdG9zUmVkdWNlci5qcz9kZTFkIl0sIm5hbWVzIjpbIklOSVRJQUxfU1RBVEUiLCJzdWJwcm9kdWN0b3MiLCJwcm9tb2Npb25lcyIsImxvYWRpbmciLCJlcnJvciIsInN1YnByb2R1Y3Rvc1JlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJUUkFFUl9UT0RPUyIsInBheWxvYWQiLCJUUkFFUl9VTk8iLCJzdWJwcm9kdWN0byIsIlRSQUVSX1BST01PQ0lPTkVTIiwiT1JERU5BUl9QUk9EVUNUT1MiLCJGSUxUUkFORE8iLCJMT0FESU5HIiwiRVJST1IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBRUEsSUFBTUEsYUFBYSxHQUFHO0FBQ2xCQyxjQUFZLEVBQUMsRUFESztBQUVsQkMsYUFBVyxFQUFDLEVBRk07QUFHbEJDLFNBQU8sRUFBQyxLQUhVO0FBSWxCQyxPQUFLLEVBQUM7QUFKWSxDQUF0Qjs7QUFPQSxJQUFNQyxtQkFBbUIsR0FBRyxTQUF0QkEsbUJBQXNCLEdBQThCO0FBQUEsTUFBN0JDLEtBQTZCLHVFQUF2Qk4sYUFBdUI7QUFBQSxNQUFUTyxNQUFTOztBQUN0RCxVQUFRQSxNQUFNLENBQUNDLElBQWY7QUFDSSxTQUFLQyxvRUFBTDtBQUNJLDZDQUFXSCxLQUFYO0FBQWlCTCxvQkFBWSxFQUFDTSxNQUFNLENBQUNHLE9BQXJDO0FBQTZDUCxlQUFPLEVBQUM7QUFBckQ7O0FBQ0osU0FBS1Esa0VBQUw7QUFDSSw2Q0FBV0wsS0FBWDtBQUFpQk0sbUJBQVcsRUFBQ0wsTUFBTSxDQUFDRyxPQUFwQztBQUE0Q1AsZUFBTyxFQUFDO0FBQXBEOztBQUNKLFNBQUtVLDBFQUFMO0FBQ0ksNkNBQVdQLEtBQVg7QUFBaUJKLG1CQUFXLEVBQUNLLE1BQU0sQ0FBQ0csT0FBcEM7QUFBNENQLGVBQU8sRUFBQztBQUFwRDs7QUFDSixTQUFLVywwRUFBTDtBQUNJLDZDQUFXUixLQUFYO0FBQWlCTCxvQkFBWSxFQUFDTSxNQUFNLENBQUNHLE9BQXJDO0FBQTZDUCxlQUFPLEVBQUM7QUFBckQ7O0FBQ0osU0FBS1ksa0VBQUw7QUFDSSw2Q0FBV1QsS0FBWDtBQUFpQkwsb0JBQVksRUFBQ00sTUFBTSxDQUFDRyxPQUFyQztBQUE2Q1AsZUFBTyxFQUFDO0FBQXJEOztBQUNKLFNBQUthLGdFQUFMO0FBQ0ksNkNBQVdWLEtBQVg7QUFBaUJILGVBQU8sRUFBQztBQUF6Qjs7QUFDSixTQUFLYyw4REFBTDtBQUNJLDZDQUFXWCxLQUFYO0FBQWlCSCxlQUFPLEVBQUMsS0FBekI7QUFBK0JDLGFBQUssRUFBQ0csTUFBTSxDQUFDRztBQUE1Qzs7QUFDSjtBQUNJLGFBQU9KLEtBQVA7QUFoQlI7QUFrQkgsQ0FuQkQ7O0FBcUJlRCxrRkFBZiIsImZpbGUiOiIuL3N0b3JlL3JlZHVjZXJzL3N1YnByb2R1Y3Rvc1JlZHVjZXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1RSQUVSX1RPRE9TLFRSQUVSX1VOTyxMT0FESU5HLEVSUk9SLFRSQUVSX1BST01PQ0lPTkVTLE9SREVOQVJfUFJPRFVDVE9TLEZJTFRSQU5ET30gZnJvbSAnLi4vdHlwZXMvc3VicHJvZHVjdG9zVHlwZXMnO1xuXG5jb25zdCBJTklUSUFMX1NUQVRFID0ge1xuICAgIHN1YnByb2R1Y3RvczpbXSxcbiAgICBwcm9tb2Npb25lczpbXSxcbiAgICBsb2FkaW5nOmZhbHNlLFxuICAgIGVycm9yOm51bGxcbn07XG5cbmNvbnN0IHN1YnByb2R1Y3Rvc1JlZHVjZXIgPSAoc3RhdGU9SU5JVElBTF9TVEFURSxhY3Rpb24pPT57XG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgICBjYXNlIFRSQUVSX1RPRE9TOlxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSxzdWJwcm9kdWN0b3M6YWN0aW9uLnBheWxvYWQsbG9hZGluZzpmYWxzZX1cbiAgICAgICAgY2FzZSBUUkFFUl9VTk86XG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLHN1YnByb2R1Y3RvOmFjdGlvbi5wYXlsb2FkLGxvYWRpbmc6ZmFsc2V9XG4gICAgICAgIGNhc2UgVFJBRVJfUFJPTU9DSU9ORVM6XG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLHByb21vY2lvbmVzOmFjdGlvbi5wYXlsb2FkLGxvYWRpbmc6ZmFsc2V9XG4gICAgICAgIGNhc2UgT1JERU5BUl9QUk9EVUNUT1M6XG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLHN1YnByb2R1Y3RvczphY3Rpb24ucGF5bG9hZCxsb2FkaW5nOmZhbHNlfTtcbiAgICAgICAgY2FzZSBGSUxUUkFORE86XG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLHN1YnByb2R1Y3RvczphY3Rpb24ucGF5bG9hZCxsb2FkaW5nOmZhbHNlfTtcbiAgICAgICAgY2FzZSBMT0FESU5HOlxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSxsb2FkaW5nOnRydWV9XG4gICAgICAgIGNhc2UgRVJST1I6XG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLGxvYWRpbmc6ZmFsc2UsZXJyb3I6YWN0aW9uLnBheWxvYWR9XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBzdWJwcm9kdWN0b3NSZWR1Y2VyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./store/reducers/subproductosReducer.js\n");

/***/ })

})