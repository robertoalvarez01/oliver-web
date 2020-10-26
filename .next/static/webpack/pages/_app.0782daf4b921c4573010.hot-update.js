webpackHotUpdate_N_E("pages/_app",{

/***/ "./store/reducers/categoriasReducer.js":
/*!*********************************************!*\
  !*** ./store/reducers/categoriasReducer.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _types_categoriasTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../types/categoriasTypes */ "./store/types/categoriasTypes.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


var INITIAL_STATE = {
  categorias: [],
  loading: false,
  error: null
};

var categoriasReducer = function categoriasReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _types_categoriasTypes__WEBPACK_IMPORTED_MODULE_1__["TRAER_TODAS"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        categorias: action.payload,
        loading: false
      });

    case _types_categoriasTypes__WEBPACK_IMPORTED_MODULE_1__["LOADING"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: true
      });

    case _types_categoriasTypes__WEBPACK_IMPORTED_MODULE_1__["ERROR"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        error: action.payload,
        loading: false
      });

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (categoriasReducer);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvcmVkdWNlcnMvY2F0ZWdvcmlhc1JlZHVjZXIuanMiXSwibmFtZXMiOlsiSU5JVElBTF9TVEFURSIsImNhdGVnb3JpYXMiLCJsb2FkaW5nIiwiZXJyb3IiLCJjYXRlZ29yaWFzUmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsIlRSQUVSX1RPREFTIiwicGF5bG9hZCIsIkxPQURJTkciLCJFUlJPUiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUEsSUFBTUEsYUFBYSxHQUFHO0FBQ2xCQyxZQUFVLEVBQUMsRUFETztBQUVsQkMsU0FBTyxFQUFDLEtBRlU7QUFHbEJDLE9BQUssRUFBQztBQUhZLENBQXRCOztBQU1BLElBQU1DLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsR0FBZ0M7QUFBQSxNQUEvQkMsS0FBK0IsdUVBQXZCTCxhQUF1QjtBQUFBLE1BQVRNLE1BQVM7O0FBQ3RELFVBQVFBLE1BQU0sQ0FBQ0MsSUFBZjtBQUNJLFNBQUtDLGtFQUFMO0FBQ0ksNkNBQVdILEtBQVg7QUFBaUJKLGtCQUFVLEVBQUNLLE1BQU0sQ0FBQ0csT0FBbkM7QUFBMkNQLGVBQU8sRUFBQztBQUFuRDs7QUFDSixTQUFLUSw4REFBTDtBQUNJLDZDQUFXTCxLQUFYO0FBQWlCSCxlQUFPLEVBQUM7QUFBekI7O0FBQ0osU0FBS1MsNERBQUw7QUFDSSw2Q0FBV04sS0FBWDtBQUFpQkYsYUFBSyxFQUFDRyxNQUFNLENBQUNHLE9BQTlCO0FBQXNDUCxlQUFPLEVBQUM7QUFBOUM7O0FBQ0o7QUFDSSxhQUFPRyxLQUFQO0FBUlI7QUFVSCxDQVhEOztBQWFlRCxnRkFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjA3ODJkYWY0YjkyMWM0NTczMDEwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1RSQUVSX1RPREFTLExPQURJTkcsRVJST1J9IGZyb20gJy4uL3R5cGVzL2NhdGVnb3JpYXNUeXBlcyc7XHJcblxyXG5jb25zdCBJTklUSUFMX1NUQVRFID0ge1xyXG4gICAgY2F0ZWdvcmlhczpbXSxcclxuICAgIGxvYWRpbmc6ZmFsc2UsXHJcbiAgICBlcnJvcjpudWxsXHJcbn07XHJcblxyXG5jb25zdCBjYXRlZ29yaWFzUmVkdWNlciA9IChzdGF0ZSA9IElOSVRJQUxfU1RBVEUsYWN0aW9uKT0+e1xyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgIGNhc2UgVFJBRVJfVE9EQVM6XHJcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsY2F0ZWdvcmlhczphY3Rpb24ucGF5bG9hZCxsb2FkaW5nOmZhbHNlfVxyXG4gICAgICAgIGNhc2UgTE9BRElORzpcclxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSxsb2FkaW5nOnRydWV9XHJcbiAgICAgICAgY2FzZSBFUlJPUjpcclxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSxlcnJvcjphY3Rpb24ucGF5bG9hZCxsb2FkaW5nOmZhbHNlfVxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2F0ZWdvcmlhc1JlZHVjZXI7Il0sInNvdXJjZVJvb3QiOiIifQ==