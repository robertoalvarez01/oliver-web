webpackHotUpdate_N_E("pages/_app",{

/***/ "./store/reducers/marcasReducer.js":
/*!*****************************************!*\
  !*** ./store/reducers/marcasReducer.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _types_marcasTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../types/marcasTypes */ "./store/types/marcasTypes.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


var INITIAL_STATE = {
  marcas: [],
  loading: false,
  error: null
};

var marcasReducer = function marcasReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _types_marcasTypes__WEBPACK_IMPORTED_MODULE_1__["TRAER_TODAS"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        marcas: action.payload,
        loading: false
      });

    case _types_marcasTypes__WEBPACK_IMPORTED_MODULE_1__["LOADING"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: true
      });

    case _types_marcasTypes__WEBPACK_IMPORTED_MODULE_1__["ERROR"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        error: action.payload,
        loading: false
      });

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (marcasReducer);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvcmVkdWNlcnMvbWFyY2FzUmVkdWNlci5qcyJdLCJuYW1lcyI6WyJJTklUSUFMX1NUQVRFIiwibWFyY2FzIiwibG9hZGluZyIsImVycm9yIiwibWFyY2FzUmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsIlRSQUVSX1RPREFTIiwicGF5bG9hZCIsIkxPQURJTkciLCJFUlJPUiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUEsSUFBTUEsYUFBYSxHQUFHO0FBQ2xCQyxRQUFNLEVBQUMsRUFEVztBQUVsQkMsU0FBTyxFQUFDLEtBRlU7QUFHbEJDLE9BQUssRUFBQztBQUhZLENBQXRCOztBQU1BLElBQU1DLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsR0FBZ0M7QUFBQSxNQUEvQkMsS0FBK0IsdUVBQXZCTCxhQUF1QjtBQUFBLE1BQVRNLE1BQVM7O0FBQ2xELFVBQVFBLE1BQU0sQ0FBQ0MsSUFBZjtBQUNJLFNBQUtDLDhEQUFMO0FBQ0ksNkNBQVdILEtBQVg7QUFBaUJKLGNBQU0sRUFBQ0ssTUFBTSxDQUFDRyxPQUEvQjtBQUF1Q1AsZUFBTyxFQUFDO0FBQS9DOztBQUNKLFNBQUtRLDBEQUFMO0FBQ0ksNkNBQVdMLEtBQVg7QUFBaUJILGVBQU8sRUFBQztBQUF6Qjs7QUFDSixTQUFLUyx3REFBTDtBQUNJLDZDQUFXTixLQUFYO0FBQWlCRixhQUFLLEVBQUNHLE1BQU0sQ0FBQ0csT0FBOUI7QUFBc0NQLGVBQU8sRUFBQztBQUE5Qzs7QUFDSjtBQUNJLGFBQU9HLEtBQVA7QUFSUjtBQVVILENBWEQ7O0FBYWVELDRFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuMjk4ODhhMzNhOWUwODY5NjgyODMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7VFJBRVJfVE9EQVMsTE9BRElORyxFUlJPUn0gZnJvbSAnLi4vdHlwZXMvbWFyY2FzVHlwZXMnO1xyXG5cclxuY29uc3QgSU5JVElBTF9TVEFURSA9IHtcclxuICAgIG1hcmNhczpbXSxcclxuICAgIGxvYWRpbmc6ZmFsc2UsXHJcbiAgICBlcnJvcjpudWxsXHJcbn07XHJcblxyXG5jb25zdCBtYXJjYXNSZWR1Y2VyID0gKHN0YXRlID0gSU5JVElBTF9TVEFURSxhY3Rpb24pPT57XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgY2FzZSBUUkFFUl9UT0RBUzpcclxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSxtYXJjYXM6YWN0aW9uLnBheWxvYWQsbG9hZGluZzpmYWxzZX1cclxuICAgICAgICBjYXNlIExPQURJTkc6XHJcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsbG9hZGluZzp0cnVlfVxyXG4gICAgICAgIGNhc2UgRVJST1I6XHJcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsZXJyb3I6YWN0aW9uLnBheWxvYWQsbG9hZGluZzpmYWxzZX1cclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG1hcmNhc1JlZHVjZXI7Il0sInNvdXJjZVJvb3QiOiIifQ==