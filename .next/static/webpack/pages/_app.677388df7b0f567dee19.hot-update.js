webpackHotUpdate_N_E("pages/_app",{

/***/ "./store/reducers/index.js":
/*!*********************************!*\
  !*** ./store/reducers/index.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _marcasReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./marcasReducer */ "./store/reducers/marcasReducer.js");
/* harmony import */ var _productosReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./productosReducer */ "./store/reducers/productosReducer.js");
/* harmony import */ var _carritoReducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./carritoReducer */ "./store/reducers/carritoReducer.js");
/* harmony import */ var _categoriasReducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./categoriasReducer */ "./store/reducers/categoriasReducer.js");
/* harmony import */ var _subcategoriasReducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./subcategoriasReducer */ "./store/reducers/subcategoriasReducer.js");
/* harmony import */ var _usuarioReducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./usuarioReducer */ "./store/reducers/usuarioReducer.js");







/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  marcasReducer: _marcasReducer__WEBPACK_IMPORTED_MODULE_1__["default"],
  productosReducer: _productosReducer__WEBPACK_IMPORTED_MODULE_2__["default"],
  carritoReducer: _carritoReducer__WEBPACK_IMPORTED_MODULE_3__["default"],
  categoriasReducer: _categoriasReducer__WEBPACK_IMPORTED_MODULE_4__["default"],
  subcategoriaReducer: _subcategoriasReducer__WEBPACK_IMPORTED_MODULE_5__["default"],
  usuarioReducer: _usuarioReducer__WEBPACK_IMPORTED_MODULE_6__["default"]
}));

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

/***/ "./store/reducers/usuarioReducer.js":
/*!******************************************!*\
  !*** ./store/reducers/usuarioReducer.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _types_usuarioTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../types/usuarioTypes */ "./store/types/usuarioTypes.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


var INITIAL_STATE = {
  usuario: null,
  login: false,
  loading: false,
  error: null
};

var usuarioReducer = function usuarioReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _types_usuarioTypes__WEBPACK_IMPORTED_MODULE_1__["TRAER_INFO"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        usuario: JSON.parse(action.payload),
        loading: false
      });

    case _types_usuarioTypes__WEBPACK_IMPORTED_MODULE_1__["LOGIN"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        login: true,
        loadin: false
      });

    case _types_usuarioTypes__WEBPACK_IMPORTED_MODULE_1__["LOGOUT"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        usuario: null,
        login: false,
        loading: false
      });

    case _types_usuarioTypes__WEBPACK_IMPORTED_MODULE_1__["LOADING"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: true
      });

    case _types_usuarioTypes__WEBPACK_IMPORTED_MODULE_1__["ERROR"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        login: false,
        loading: false,
        error: action.payload
      });

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (usuarioReducer);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvcmVkdWNlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3N0b3JlL3JlZHVjZXJzL3VzdWFyaW9SZWR1Y2VyLmpzIl0sIm5hbWVzIjpbImNvbWJpbmVSZWR1Y2VycyIsIm1hcmNhc1JlZHVjZXIiLCJwcm9kdWN0b3NSZWR1Y2VyIiwiY2Fycml0b1JlZHVjZXIiLCJjYXRlZ29yaWFzUmVkdWNlciIsInN1YmNhdGVnb3JpYVJlZHVjZXIiLCJ1c3VhcmlvUmVkdWNlciIsIklOSVRJQUxfU1RBVEUiLCJ1c3VhcmlvIiwibG9naW4iLCJsb2FkaW5nIiwiZXJyb3IiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJUUkFFUl9JTkZPIiwiSlNPTiIsInBhcnNlIiwicGF5bG9hZCIsIkxPR0lOIiwibG9hZGluIiwiTE9HT1VUIiwiTE9BRElORyIsIkVSUk9SIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2VBLDRIQUFlLENBQUM7QUFDM0JDLGVBQWEsRUFBYkEsc0RBRDJCO0FBRTNCQyxrQkFBZ0IsRUFBaEJBLHlEQUYyQjtBQUczQkMsZ0JBQWMsRUFBZEEsdURBSDJCO0FBSTNCQyxtQkFBaUIsRUFBakJBLDBEQUoyQjtBQUszQkMscUJBQW1CLEVBQW5CQSw2REFMMkI7QUFNM0JDLGdCQUFjLEVBQWRBLHVEQUFjQTtBQU5hLENBQUQsQ0FBOUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1BBO0FBRUEsSUFBTUMsYUFBYSxHQUFHO0FBQ2xCQyxTQUFPLEVBQUMsSUFEVTtBQUVsQkMsT0FBSyxFQUFDLEtBRlk7QUFHbEJDLFNBQU8sRUFBQyxLQUhVO0FBSWxCQyxPQUFLLEVBQUM7QUFKWSxDQUF0Qjs7QUFPQSxJQUFNTCxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLEdBQThCO0FBQUEsTUFBN0JNLEtBQTZCLHVFQUF2QkwsYUFBdUI7QUFBQSxNQUFUTSxNQUFTOztBQUNqRCxVQUFRQSxNQUFNLENBQUNDLElBQWY7QUFDSSxTQUFLQyw4REFBTDtBQUNJLDZDQUFXSCxLQUFYO0FBQWlCSixlQUFPLEVBQUNRLElBQUksQ0FBQ0MsS0FBTCxDQUFXSixNQUFNLENBQUNLLE9BQWxCLENBQXpCO0FBQW9EUixlQUFPLEVBQUM7QUFBNUQ7O0FBQ0osU0FBS1MseURBQUw7QUFDSSw2Q0FBV1AsS0FBWDtBQUFpQkgsYUFBSyxFQUFDLElBQXZCO0FBQTRCVyxjQUFNLEVBQUM7QUFBbkM7O0FBQ0osU0FBS0MsMERBQUw7QUFDSSw2Q0FBV1QsS0FBWDtBQUFpQkosZUFBTyxFQUFDLElBQXpCO0FBQThCQyxhQUFLLEVBQUMsS0FBcEM7QUFBMENDLGVBQU8sRUFBQztBQUFsRDs7QUFDSixTQUFLWSwyREFBTDtBQUNJLDZDQUFXVixLQUFYO0FBQWlCRixlQUFPLEVBQUM7QUFBekI7O0FBQ0osU0FBS2EseURBQUw7QUFDSSw2Q0FBV1gsS0FBWDtBQUFpQkgsYUFBSyxFQUFDLEtBQXZCO0FBQTZCQyxlQUFPLEVBQUMsS0FBckM7QUFBMkNDLGFBQUssRUFBQ0UsTUFBTSxDQUFDSztBQUF4RDs7QUFDSjtBQUNJLGFBQU9OLEtBQVA7QUFaUjtBQWNILENBZkQ7O0FBaUJlTiw2RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjY3NzM4OGRmN2IwZjU2N2RlZTE5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2NvbWJpbmVSZWR1Y2Vyc30gZnJvbSAncmVkdXgnO1xyXG5pbXBvcnQgbWFyY2FzUmVkdWNlciBmcm9tIFwiLi9tYXJjYXNSZWR1Y2VyXCI7XHJcbmltcG9ydCBwcm9kdWN0b3NSZWR1Y2VyIGZyb20gXCIuL3Byb2R1Y3Rvc1JlZHVjZXJcIjtcclxuaW1wb3J0IGNhcnJpdG9SZWR1Y2VyIGZyb20gJy4vY2Fycml0b1JlZHVjZXInO1xyXG5pbXBvcnQgY2F0ZWdvcmlhc1JlZHVjZXIgZnJvbSAnLi9jYXRlZ29yaWFzUmVkdWNlcic7XHJcbmltcG9ydCBzdWJjYXRlZ29yaWFSZWR1Y2VyIGZyb20gJy4vc3ViY2F0ZWdvcmlhc1JlZHVjZXInO1xyXG5pbXBvcnQgdXN1YXJpb1JlZHVjZXIgZnJvbSAnLi91c3VhcmlvUmVkdWNlcic7XHJcbmV4cG9ydCBkZWZhdWx0IGNvbWJpbmVSZWR1Y2Vycyh7XHJcbiAgICBtYXJjYXNSZWR1Y2VyLFxyXG4gICAgcHJvZHVjdG9zUmVkdWNlcixcclxuICAgIGNhcnJpdG9SZWR1Y2VyLFxyXG4gICAgY2F0ZWdvcmlhc1JlZHVjZXIsXHJcbiAgICBzdWJjYXRlZ29yaWFSZWR1Y2VyLFxyXG4gICAgdXN1YXJpb1JlZHVjZXJcclxufSk7IiwiaW1wb3J0IHtUUkFFUl9JTkZPLExPR0lOLExPR09VVCxMT0FESU5HLEVSUk9SfSBmcm9tICcuLi90eXBlcy91c3VhcmlvVHlwZXMnO1xyXG5cclxuY29uc3QgSU5JVElBTF9TVEFURSA9IHtcclxuICAgIHVzdWFyaW86bnVsbCxcclxuICAgIGxvZ2luOmZhbHNlLFxyXG4gICAgbG9hZGluZzpmYWxzZSxcclxuICAgIGVycm9yOm51bGxcclxufTtcclxuXHJcbmNvbnN0IHVzdWFyaW9SZWR1Y2VyID0gKHN0YXRlPUlOSVRJQUxfU1RBVEUsYWN0aW9uKT0+e1xyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgIGNhc2UgVFJBRVJfSU5GTzpcclxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSx1c3VhcmlvOkpTT04ucGFyc2UoYWN0aW9uLnBheWxvYWQpLGxvYWRpbmc6ZmFsc2V9XHJcbiAgICAgICAgY2FzZSBMT0dJTjpcclxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSxsb2dpbjp0cnVlLGxvYWRpbjpmYWxzZX1cclxuICAgICAgICBjYXNlIExPR09VVDpcclxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSx1c3VhcmlvOm51bGwsbG9naW46ZmFsc2UsbG9hZGluZzpmYWxzZX1cclxuICAgICAgICBjYXNlIExPQURJTkc6XHJcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsbG9hZGluZzp0cnVlfVxyXG4gICAgICAgIGNhc2UgRVJST1I6XHJcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsbG9naW46ZmFsc2UsbG9hZGluZzpmYWxzZSxlcnJvcjphY3Rpb24ucGF5bG9hZH1cclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHVzdWFyaW9SZWR1Y2VyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9