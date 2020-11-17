webpackHotUpdate_N_E("pages/_app",{

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
  logueado: false,
  loading: false,
  error: null
};

var usuarioReducer = function usuarioReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _types_usuarioTypes__WEBPACK_IMPORTED_MODULE_1__["TRAER_INFO"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        usuario: action.payload,
        loading: false
      });

    case _types_usuarioTypes__WEBPACK_IMPORTED_MODULE_1__["LOGIN"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        logueado: true,
        loading: false,
        error: null,
        usuario: JSON.parse(action.payload)
      });

    case _types_usuarioTypes__WEBPACK_IMPORTED_MODULE_1__["LOGOUT"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        usuario: null,
        logueado: false,
        loading: false
      });

    case _types_usuarioTypes__WEBPACK_IMPORTED_MODULE_1__["LOADING"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: true
      });

    case _types_usuarioTypes__WEBPACK_IMPORTED_MODULE_1__["ERROR"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        logueado: false,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvcmVkdWNlcnMvdXN1YXJpb1JlZHVjZXIuanMiXSwibmFtZXMiOlsiSU5JVElBTF9TVEFURSIsInVzdWFyaW8iLCJsb2d1ZWFkbyIsImxvYWRpbmciLCJlcnJvciIsInVzdWFyaW9SZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwiVFJBRVJfSU5GTyIsInBheWxvYWQiLCJMT0dJTiIsIkpTT04iLCJwYXJzZSIsIkxPR09VVCIsIkxPQURJTkciLCJFUlJPUiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUEsSUFBTUEsYUFBYSxHQUFHO0FBQ2xCQyxTQUFPLEVBQUMsSUFEVTtBQUVsQkMsVUFBUSxFQUFDLEtBRlM7QUFHbEJDLFNBQU8sRUFBQyxLQUhVO0FBSWxCQyxPQUFLLEVBQUM7QUFKWSxDQUF0Qjs7QUFPQSxJQUFNQyxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLEdBQThCO0FBQUEsTUFBN0JDLEtBQTZCLHVFQUF2Qk4sYUFBdUI7QUFBQSxNQUFUTyxNQUFTOztBQUNqRCxVQUFRQSxNQUFNLENBQUNDLElBQWY7QUFDSSxTQUFLQyw4REFBTDtBQUNJLDZDQUFXSCxLQUFYO0FBQWlCTCxlQUFPLEVBQUNNLE1BQU0sQ0FBQ0csT0FBaEM7QUFBd0NQLGVBQU8sRUFBQztBQUFoRDs7QUFDSixTQUFLUSx5REFBTDtBQUNJLDZDQUFXTCxLQUFYO0FBQWlCSixnQkFBUSxFQUFDLElBQTFCO0FBQStCQyxlQUFPLEVBQUMsS0FBdkM7QUFBNkNDLGFBQUssRUFBQyxJQUFuRDtBQUF3REgsZUFBTyxFQUFDVyxJQUFJLENBQUNDLEtBQUwsQ0FBV04sTUFBTSxDQUFDRyxPQUFsQjtBQUFoRTs7QUFDSixTQUFLSSwwREFBTDtBQUNJLDZDQUFXUixLQUFYO0FBQWlCTCxlQUFPLEVBQUMsSUFBekI7QUFBOEJDLGdCQUFRLEVBQUMsS0FBdkM7QUFBNkNDLGVBQU8sRUFBQztBQUFyRDs7QUFDSixTQUFLWSwyREFBTDtBQUNJLDZDQUFXVCxLQUFYO0FBQWlCSCxlQUFPLEVBQUM7QUFBekI7O0FBQ0osU0FBS2EseURBQUw7QUFDSSw2Q0FBV1YsS0FBWDtBQUFpQkosZ0JBQVEsRUFBQyxLQUExQjtBQUFnQ0MsZUFBTyxFQUFDLEtBQXhDO0FBQThDQyxhQUFLLEVBQUNHLE1BQU0sQ0FBQ0c7QUFBM0Q7O0FBQ0o7QUFDSSxhQUFPSixLQUFQO0FBWlI7QUFjSCxDQWZEOztBQWlCZUQsNkVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC4wMzQ5NzY0OGEwZjg0ZWNiYjRiMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtUUkFFUl9JTkZPLExPR0lOLExPR09VVCxMT0FESU5HLEVSUk9SfSBmcm9tICcuLi90eXBlcy91c3VhcmlvVHlwZXMnO1xyXG5cclxuY29uc3QgSU5JVElBTF9TVEFURSA9IHtcclxuICAgIHVzdWFyaW86bnVsbCxcclxuICAgIGxvZ3VlYWRvOmZhbHNlLFxyXG4gICAgbG9hZGluZzpmYWxzZSxcclxuICAgIGVycm9yOm51bGxcclxufTtcclxuXHJcbmNvbnN0IHVzdWFyaW9SZWR1Y2VyID0gKHN0YXRlPUlOSVRJQUxfU1RBVEUsYWN0aW9uKT0+e1xyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgIGNhc2UgVFJBRVJfSU5GTzpcclxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSx1c3VhcmlvOmFjdGlvbi5wYXlsb2FkLGxvYWRpbmc6ZmFsc2V9XHJcbiAgICAgICAgY2FzZSBMT0dJTjpcclxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSxsb2d1ZWFkbzp0cnVlLGxvYWRpbmc6ZmFsc2UsZXJyb3I6bnVsbCx1c3VhcmlvOkpTT04ucGFyc2UoYWN0aW9uLnBheWxvYWQpfVxyXG4gICAgICAgIGNhc2UgTE9HT1VUOlxyXG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLHVzdWFyaW86bnVsbCxsb2d1ZWFkbzpmYWxzZSxsb2FkaW5nOmZhbHNlfVxyXG4gICAgICAgIGNhc2UgTE9BRElORzpcclxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSxsb2FkaW5nOnRydWV9XHJcbiAgICAgICAgY2FzZSBFUlJPUjpcclxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSxsb2d1ZWFkbzpmYWxzZSxsb2FkaW5nOmZhbHNlLGVycm9yOmFjdGlvbi5wYXlsb2FkfVxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgdXN1YXJpb1JlZHVjZXI7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=