webpackHotUpdate_N_E("pages/_app",{

/***/ "./store/reducers/productosReducer.js":
/*!********************************************!*\
  !*** ./store/reducers/productosReducer.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _types_productosTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../types/productosTypes */ "./store/types/productosTypes.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


var INITIAL_STATE = {
  productos: [],
  producto: null,
  promociones: [],
  loading: false,
  error: null
};

var subproductosReducer = function subproductosReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _types_productosTypes__WEBPACK_IMPORTED_MODULE_1__["TRAER_TODOS"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        productos: action.payload,
        loading: false
      });

    case _types_productosTypes__WEBPACK_IMPORTED_MODULE_1__["TRAER_UNO"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        producto: action.payload,
        loading: false
      });

    case _types_productosTypes__WEBPACK_IMPORTED_MODULE_1__["TRAER_PROMOCIONES"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        promociones: action.payload,
        loading: false
      });

    case _types_productosTypes__WEBPACK_IMPORTED_MODULE_1__["ORDENAR_PRODUCTOS"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        productos: action.payload,
        loading: false
      });

    case _types_productosTypes__WEBPACK_IMPORTED_MODULE_1__["FILTRANDO"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        productos: action.payload,
        loading: false
      });

    case _types_productosTypes__WEBPACK_IMPORTED_MODULE_1__["LOADING"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: true
      });

    case _types_productosTypes__WEBPACK_IMPORTED_MODULE_1__["ERROR"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: false,
        error: action.payload
      });

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (subproductosReducer);

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

/***/ }),

/***/ "./store/types/productosTypes.js":
/*!***************************************!*\
  !*** ./store/types/productosTypes.js ***!
  \***************************************/
/*! exports provided: TRAER_TODOS, TRAER_UNO, LOADING, ERROR, TRAER_PROMOCIONES, ORDENAR_PRODUCTOS, FILTRANDO */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TRAER_TODOS", function() { return TRAER_TODOS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TRAER_UNO", function() { return TRAER_UNO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOADING", function() { return LOADING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ERROR", function() { return ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TRAER_PROMOCIONES", function() { return TRAER_PROMOCIONES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ORDENAR_PRODUCTOS", function() { return ORDENAR_PRODUCTOS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FILTRANDO", function() { return FILTRANDO; });
var TRAER_TODOS = 'producto_traer_todos';
var LOADING = 'producto_loading';
var ERROR = 'producto_error';
var TRAER_PROMOCIONES = 'producto_traer_promociones';
var ORDENAR_PRODUCTOS = 'producto_ordenarproductos';
var FILTRANDO = 'producto_filtrando';
var TRAER_UNO = 'producto_traeruno';


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

/***/ }),

/***/ "./store/types/subproductosTypes.js":
false

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvcmVkdWNlcnMvcHJvZHVjdG9zUmVkdWNlci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvdHlwZXMvcHJvZHVjdG9zVHlwZXMuanMiXSwibmFtZXMiOlsiSU5JVElBTF9TVEFURSIsInByb2R1Y3RvcyIsInByb2R1Y3RvIiwicHJvbW9jaW9uZXMiLCJsb2FkaW5nIiwiZXJyb3IiLCJzdWJwcm9kdWN0b3NSZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwiVFJBRVJfVE9ET1MiLCJwYXlsb2FkIiwiVFJBRVJfVU5PIiwiVFJBRVJfUFJPTU9DSU9ORVMiLCJPUkRFTkFSX1BST0RVQ1RPUyIsIkZJTFRSQU5ETyIsIkxPQURJTkciLCJFUlJPUiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUEsSUFBTUEsYUFBYSxHQUFHO0FBQ2xCQyxXQUFTLEVBQUMsRUFEUTtBQUVsQkMsVUFBUSxFQUFDLElBRlM7QUFHbEJDLGFBQVcsRUFBQyxFQUhNO0FBSWxCQyxTQUFPLEVBQUMsS0FKVTtBQUtsQkMsT0FBSyxFQUFDO0FBTFksQ0FBdEI7O0FBUUEsSUFBTUMsbUJBQW1CLEdBQUcsU0FBdEJBLG1CQUFzQixHQUE4QjtBQUFBLE1BQTdCQyxLQUE2Qix1RUFBdkJQLGFBQXVCO0FBQUEsTUFBVFEsTUFBUzs7QUFDdEQsVUFBUUEsTUFBTSxDQUFDQyxJQUFmO0FBQ0ksU0FBS0MsaUVBQUw7QUFDSSw2Q0FBV0gsS0FBWDtBQUFpQk4saUJBQVMsRUFBQ08sTUFBTSxDQUFDRyxPQUFsQztBQUEwQ1AsZUFBTyxFQUFDO0FBQWxEOztBQUNKLFNBQUtRLCtEQUFMO0FBQ0ksNkNBQVdMLEtBQVg7QUFBaUJMLGdCQUFRLEVBQUNNLE1BQU0sQ0FBQ0csT0FBakM7QUFBeUNQLGVBQU8sRUFBQztBQUFqRDs7QUFDSixTQUFLUyx1RUFBTDtBQUNJLDZDQUFXTixLQUFYO0FBQWlCSixtQkFBVyxFQUFDSyxNQUFNLENBQUNHLE9BQXBDO0FBQTRDUCxlQUFPLEVBQUM7QUFBcEQ7O0FBQ0osU0FBS1UsdUVBQUw7QUFDSSw2Q0FBV1AsS0FBWDtBQUFpQk4saUJBQVMsRUFBQ08sTUFBTSxDQUFDRyxPQUFsQztBQUEwQ1AsZUFBTyxFQUFDO0FBQWxEOztBQUNKLFNBQUtXLCtEQUFMO0FBQ0ksNkNBQVdSLEtBQVg7QUFBaUJOLGlCQUFTLEVBQUNPLE1BQU0sQ0FBQ0csT0FBbEM7QUFBMENQLGVBQU8sRUFBQztBQUFsRDs7QUFDSixTQUFLWSw2REFBTDtBQUNJLDZDQUFXVCxLQUFYO0FBQWlCSCxlQUFPLEVBQUM7QUFBekI7O0FBQ0osU0FBS2EsMkRBQUw7QUFDSSw2Q0FBV1YsS0FBWDtBQUFpQkgsZUFBTyxFQUFDLEtBQXpCO0FBQStCQyxhQUFLLEVBQUNHLE1BQU0sQ0FBQ0c7QUFBNUM7O0FBQ0o7QUFDSSxhQUFPSixLQUFQO0FBaEJSO0FBa0JILENBbkJEOztBQXFCZUQsa0ZBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9CQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFBTUksV0FBVyxHQUFHLHNCQUFwQjtBQUNBLElBQU1NLE9BQU8sR0FBRyxrQkFBaEI7QUFDQSxJQUFNQyxLQUFLLEdBQUcsZ0JBQWQ7QUFDQSxJQUFNSixpQkFBaUIsR0FBRyw0QkFBMUI7QUFDQSxJQUFNQyxpQkFBaUIsR0FBRywyQkFBMUI7QUFDQSxJQUFNQyxTQUFTLEdBQUcsb0JBQWxCO0FBQ0EsSUFBTUgsU0FBUyxHQUFHLG1CQUFsQjtBQUVBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuMTFlNGY0YmFiYzkzZjVkOTIxMGYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7VFJBRVJfVE9ET1MsVFJBRVJfVU5PLExPQURJTkcsRVJST1IsVFJBRVJfUFJPTU9DSU9ORVMsT1JERU5BUl9QUk9EVUNUT1MsRklMVFJBTkRPfSBmcm9tICcuLi90eXBlcy9wcm9kdWN0b3NUeXBlcyc7XHJcblxyXG5jb25zdCBJTklUSUFMX1NUQVRFID0ge1xyXG4gICAgcHJvZHVjdG9zOltdLFxyXG4gICAgcHJvZHVjdG86bnVsbCxcclxuICAgIHByb21vY2lvbmVzOltdLFxyXG4gICAgbG9hZGluZzpmYWxzZSxcclxuICAgIGVycm9yOm51bGxcclxufTtcclxuXHJcbmNvbnN0IHN1YnByb2R1Y3Rvc1JlZHVjZXIgPSAoc3RhdGU9SU5JVElBTF9TVEFURSxhY3Rpb24pPT57XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgY2FzZSBUUkFFUl9UT0RPUzpcclxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSxwcm9kdWN0b3M6YWN0aW9uLnBheWxvYWQsbG9hZGluZzpmYWxzZX1cclxuICAgICAgICBjYXNlIFRSQUVSX1VOTzpcclxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSxwcm9kdWN0bzphY3Rpb24ucGF5bG9hZCxsb2FkaW5nOmZhbHNlfVxyXG4gICAgICAgIGNhc2UgVFJBRVJfUFJPTU9DSU9ORVM6XHJcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUscHJvbW9jaW9uZXM6YWN0aW9uLnBheWxvYWQsbG9hZGluZzpmYWxzZX1cclxuICAgICAgICBjYXNlIE9SREVOQVJfUFJPRFVDVE9TOlxyXG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLHByb2R1Y3RvczphY3Rpb24ucGF5bG9hZCxsb2FkaW5nOmZhbHNlfTtcclxuICAgICAgICBjYXNlIEZJTFRSQU5ETzpcclxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSxwcm9kdWN0b3M6YWN0aW9uLnBheWxvYWQsbG9hZGluZzpmYWxzZX07XHJcbiAgICAgICAgY2FzZSBMT0FESU5HOlxyXG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLGxvYWRpbmc6dHJ1ZX1cclxuICAgICAgICBjYXNlIEVSUk9SOlxyXG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLGxvYWRpbmc6ZmFsc2UsZXJyb3I6YWN0aW9uLnBheWxvYWR9XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzdWJwcm9kdWN0b3NSZWR1Y2VyO1xyXG4iLCJjb25zdCBUUkFFUl9UT0RPUyA9ICdwcm9kdWN0b190cmFlcl90b2Rvcyc7XHJcbmNvbnN0IExPQURJTkcgPSAncHJvZHVjdG9fbG9hZGluZyc7XHJcbmNvbnN0IEVSUk9SID0gJ3Byb2R1Y3RvX2Vycm9yJztcclxuY29uc3QgVFJBRVJfUFJPTU9DSU9ORVMgPSAncHJvZHVjdG9fdHJhZXJfcHJvbW9jaW9uZXMnO1xyXG5jb25zdCBPUkRFTkFSX1BST0RVQ1RPUyA9ICdwcm9kdWN0b19vcmRlbmFycHJvZHVjdG9zJztcclxuY29uc3QgRklMVFJBTkRPID0gJ3Byb2R1Y3RvX2ZpbHRyYW5kbyc7XHJcbmNvbnN0IFRSQUVSX1VOTyA9ICdwcm9kdWN0b190cmFlcnVubyc7XHJcblxyXG5leHBvcnQge1RSQUVSX1RPRE9TLFRSQUVSX1VOTyxMT0FESU5HLEVSUk9SLFRSQUVSX1BST01PQ0lPTkVTLE9SREVOQVJfUFJPRFVDVE9TLEZJTFRSQU5ET30iXSwic291cmNlUm9vdCI6IiJ9