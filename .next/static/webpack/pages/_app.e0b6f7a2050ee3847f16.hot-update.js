webpackHotUpdate_N_E("pages/_app",{

/***/ "./store/reducers/carritoReducer.js":
/*!******************************************!*\
  !*** ./store/reducers/carritoReducer.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _types_carritoTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../types/carritoTypes */ "./store/types/carritoTypes.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


var INITIAL_STATE = {
  productos: [],
  subtotal: 0,
  total: 0,
  loading: false,
  error: null
};

var carritoReducer = function carritoReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _types_carritoTypes__WEBPACK_IMPORTED_MODULE_1__["TRAER_PRODUCTOS"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        productos: action.payload.productos,
        loading: false,
        error: null,
        subtotal: action.payload.subtotal
      });

    case _types_carritoTypes__WEBPACK_IMPORTED_MODULE_1__["AGREGAR_PRODUCTO"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        productos: action.payload.listProductosUpgrade,
        loading: false,
        error: null,
        subtotal: action.payload.subtotal
      });

    case _types_carritoTypes__WEBPACK_IMPORTED_MODULE_1__["ELIMINAR_PRODUCTO"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        productos: action.payload.newProductos,
        loading: false,
        error: null,
        subtotal: action.payload.subtotal
      });

    case _types_carritoTypes__WEBPACK_IMPORTED_MODULE_1__["LOADING"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: true
      });

    case _types_carritoTypes__WEBPACK_IMPORTED_MODULE_1__["ERROR"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        error: action.payload,
        loading: false
      });

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (carritoReducer);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvcmVkdWNlcnMvY2Fycml0b1JlZHVjZXIuanMiXSwibmFtZXMiOlsiSU5JVElBTF9TVEFURSIsInByb2R1Y3RvcyIsInN1YnRvdGFsIiwidG90YWwiLCJsb2FkaW5nIiwiZXJyb3IiLCJjYXJyaXRvUmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsIlRSQUVSX1BST0RVQ1RPUyIsInBheWxvYWQiLCJBR1JFR0FSX1BST0RVQ1RPIiwibGlzdFByb2R1Y3Rvc1VwZ3JhZGUiLCJFTElNSU5BUl9QUk9EVUNUTyIsIm5ld1Byb2R1Y3RvcyIsIkxPQURJTkciLCJFUlJPUiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUEsSUFBTUEsYUFBYSxHQUFHO0FBQ2xCQyxXQUFTLEVBQUMsRUFEUTtBQUVsQkMsVUFBUSxFQUFDLENBRlM7QUFHbEJDLE9BQUssRUFBQyxDQUhZO0FBSWxCQyxTQUFPLEVBQUMsS0FKVTtBQUtsQkMsT0FBSyxFQUFDO0FBTFksQ0FBdEI7O0FBUUEsSUFBTUMsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixHQUFnQztBQUFBLE1BQS9CQyxLQUErQix1RUFBdkJQLGFBQXVCO0FBQUEsTUFBVFEsTUFBUzs7QUFDbkQsVUFBUUEsTUFBTSxDQUFDQyxJQUFmO0FBQ0ksU0FBS0MsbUVBQUw7QUFDSSw2Q0FBV0gsS0FBWDtBQUFpQk4saUJBQVMsRUFBQ08sTUFBTSxDQUFDRyxPQUFQLENBQWVWLFNBQTFDO0FBQW9ERyxlQUFPLEVBQUMsS0FBNUQ7QUFBa0VDLGFBQUssRUFBQyxJQUF4RTtBQUE2RUgsZ0JBQVEsRUFBQ00sTUFBTSxDQUFDRyxPQUFQLENBQWVUO0FBQXJHOztBQUNKLFNBQUtVLG9FQUFMO0FBQ0ksNkNBQVdMLEtBQVg7QUFBaUJOLGlCQUFTLEVBQUNPLE1BQU0sQ0FBQ0csT0FBUCxDQUFlRSxvQkFBMUM7QUFBK0RULGVBQU8sRUFBQyxLQUF2RTtBQUE2RUMsYUFBSyxFQUFDLElBQW5GO0FBQXdGSCxnQkFBUSxFQUFDTSxNQUFNLENBQUNHLE9BQVAsQ0FBZVQ7QUFBaEg7O0FBQ0osU0FBS1kscUVBQUw7QUFDSSw2Q0FBV1AsS0FBWDtBQUFpQk4saUJBQVMsRUFBQ08sTUFBTSxDQUFDRyxPQUFQLENBQWVJLFlBQTFDO0FBQXVEWCxlQUFPLEVBQUMsS0FBL0Q7QUFBcUVDLGFBQUssRUFBQyxJQUEzRTtBQUFnRkgsZ0JBQVEsRUFBQ00sTUFBTSxDQUFDRyxPQUFQLENBQWVUO0FBQXhHOztBQUNKLFNBQUtjLDJEQUFMO0FBQ0ksNkNBQVdULEtBQVg7QUFBaUJILGVBQU8sRUFBQztBQUF6Qjs7QUFDSixTQUFLYSx5REFBTDtBQUNJLDZDQUFXVixLQUFYO0FBQWlCRixhQUFLLEVBQUNHLE1BQU0sQ0FBQ0csT0FBOUI7QUFBc0NQLGVBQU8sRUFBQztBQUE5Qzs7QUFDSjtBQUNJLGFBQU9HLEtBQVA7QUFaUjtBQWNILENBZkQ7O0FBaUJlRCw2RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLmUwYjZmN2EyMDUwZWUzODQ3ZjE2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1RSQUVSX1BST0RVQ1RPUyxBR1JFR0FSX1BST0RVQ1RPLEVMSU1JTkFSX1BST0RVQ1RPLExPQURJTkcsRVJST1J9IGZyb20gJy4uL3R5cGVzL2NhcnJpdG9UeXBlcyc7XHJcblxyXG5jb25zdCBJTklUSUFMX1NUQVRFID0ge1xyXG4gICAgcHJvZHVjdG9zOltdLFxyXG4gICAgc3VidG90YWw6MCxcclxuICAgIHRvdGFsOjAsXHJcbiAgICBsb2FkaW5nOmZhbHNlLFxyXG4gICAgZXJyb3I6bnVsbFxyXG59O1xyXG5cclxuY29uc3QgY2Fycml0b1JlZHVjZXIgPSAoc3RhdGUgPSBJTklUSUFMX1NUQVRFLGFjdGlvbik9PntcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICBjYXNlIFRSQUVSX1BST0RVQ1RPUzpcclxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSxwcm9kdWN0b3M6YWN0aW9uLnBheWxvYWQucHJvZHVjdG9zLGxvYWRpbmc6ZmFsc2UsZXJyb3I6bnVsbCxzdWJ0b3RhbDphY3Rpb24ucGF5bG9hZC5zdWJ0b3RhbH1cclxuICAgICAgICBjYXNlIEFHUkVHQVJfUFJPRFVDVE86XHJcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUscHJvZHVjdG9zOmFjdGlvbi5wYXlsb2FkLmxpc3RQcm9kdWN0b3NVcGdyYWRlLGxvYWRpbmc6ZmFsc2UsZXJyb3I6bnVsbCxzdWJ0b3RhbDphY3Rpb24ucGF5bG9hZC5zdWJ0b3RhbH1cclxuICAgICAgICBjYXNlIEVMSU1JTkFSX1BST0RVQ1RPOlxyXG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLHByb2R1Y3RvczphY3Rpb24ucGF5bG9hZC5uZXdQcm9kdWN0b3MsbG9hZGluZzpmYWxzZSxlcnJvcjpudWxsLHN1YnRvdGFsOmFjdGlvbi5wYXlsb2FkLnN1YnRvdGFsfVxyXG4gICAgICAgIGNhc2UgTE9BRElORzpcclxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSxsb2FkaW5nOnRydWV9XHJcbiAgICAgICAgY2FzZSBFUlJPUjpcclxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSxlcnJvcjphY3Rpb24ucGF5bG9hZCxsb2FkaW5nOmZhbHNlfVxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2Fycml0b1JlZHVjZXI7Il0sInNvdXJjZVJvb3QiOiIifQ==