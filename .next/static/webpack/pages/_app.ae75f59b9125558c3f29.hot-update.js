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
        usuario: JSON.parse(action.payload),
        loading: false
      });

    case _types_usuarioTypes__WEBPACK_IMPORTED_MODULE_1__["LOGIN"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        logueado: true,
        loadin: false
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvcmVkdWNlcnMvdXN1YXJpb1JlZHVjZXIuanMiXSwibmFtZXMiOlsiSU5JVElBTF9TVEFURSIsInVzdWFyaW8iLCJsb2d1ZWFkbyIsImxvYWRpbmciLCJlcnJvciIsInVzdWFyaW9SZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwiVFJBRVJfSU5GTyIsIkpTT04iLCJwYXJzZSIsInBheWxvYWQiLCJMT0dJTiIsImxvYWRpbiIsIkxPR09VVCIsIkxPQURJTkciLCJFUlJPUiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUEsSUFBTUEsYUFBYSxHQUFHO0FBQ2xCQyxTQUFPLEVBQUMsSUFEVTtBQUVsQkMsVUFBUSxFQUFDLEtBRlM7QUFHbEJDLFNBQU8sRUFBQyxLQUhVO0FBSWxCQyxPQUFLLEVBQUM7QUFKWSxDQUF0Qjs7QUFPQSxJQUFNQyxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLEdBQThCO0FBQUEsTUFBN0JDLEtBQTZCLHVFQUF2Qk4sYUFBdUI7QUFBQSxNQUFUTyxNQUFTOztBQUNqRCxVQUFRQSxNQUFNLENBQUNDLElBQWY7QUFDSSxTQUFLQyw4REFBTDtBQUNJLDZDQUFXSCxLQUFYO0FBQWlCTCxlQUFPLEVBQUNTLElBQUksQ0FBQ0MsS0FBTCxDQUFXSixNQUFNLENBQUNLLE9BQWxCLENBQXpCO0FBQW9EVCxlQUFPLEVBQUM7QUFBNUQ7O0FBQ0osU0FBS1UseURBQUw7QUFDSSw2Q0FBV1AsS0FBWDtBQUFpQkosZ0JBQVEsRUFBQyxJQUExQjtBQUErQlksY0FBTSxFQUFDO0FBQXRDOztBQUNKLFNBQUtDLDBEQUFMO0FBQ0ksNkNBQVdULEtBQVg7QUFBaUJMLGVBQU8sRUFBQyxJQUF6QjtBQUE4QkMsZ0JBQVEsRUFBQyxLQUF2QztBQUE2Q0MsZUFBTyxFQUFDO0FBQXJEOztBQUNKLFNBQUthLDJEQUFMO0FBQ0ksNkNBQVdWLEtBQVg7QUFBaUJILGVBQU8sRUFBQztBQUF6Qjs7QUFDSixTQUFLYyx5REFBTDtBQUNJLDZDQUFXWCxLQUFYO0FBQWlCSixnQkFBUSxFQUFDLEtBQTFCO0FBQWdDQyxlQUFPLEVBQUMsS0FBeEM7QUFBOENDLGFBQUssRUFBQ0csTUFBTSxDQUFDSztBQUEzRDs7QUFDSjtBQUNJLGFBQU9OLEtBQVA7QUFaUjtBQWNILENBZkQ7O0FBaUJlRCw2RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLmFlNzVmNTliOTEyNTU1OGMzZjI5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1RSQUVSX0lORk8sTE9HSU4sTE9HT1VULExPQURJTkcsRVJST1J9IGZyb20gJy4uL3R5cGVzL3VzdWFyaW9UeXBlcyc7XHJcblxyXG5jb25zdCBJTklUSUFMX1NUQVRFID0ge1xyXG4gICAgdXN1YXJpbzpudWxsLFxyXG4gICAgbG9ndWVhZG86ZmFsc2UsXHJcbiAgICBsb2FkaW5nOmZhbHNlLFxyXG4gICAgZXJyb3I6bnVsbFxyXG59O1xyXG5cclxuY29uc3QgdXN1YXJpb1JlZHVjZXIgPSAoc3RhdGU9SU5JVElBTF9TVEFURSxhY3Rpb24pPT57XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgY2FzZSBUUkFFUl9JTkZPOlxyXG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLHVzdWFyaW86SlNPTi5wYXJzZShhY3Rpb24ucGF5bG9hZCksbG9hZGluZzpmYWxzZX1cclxuICAgICAgICBjYXNlIExPR0lOOlxyXG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLGxvZ3VlYWRvOnRydWUsbG9hZGluOmZhbHNlfVxyXG4gICAgICAgIGNhc2UgTE9HT1VUOlxyXG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLHVzdWFyaW86bnVsbCxsb2d1ZWFkbzpmYWxzZSxsb2FkaW5nOmZhbHNlfVxyXG4gICAgICAgIGNhc2UgTE9BRElORzpcclxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSxsb2FkaW5nOnRydWV9XHJcbiAgICAgICAgY2FzZSBFUlJPUjpcclxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSxsb2d1ZWFkbzpmYWxzZSxsb2FkaW5nOmZhbHNlLGVycm9yOmFjdGlvbi5wYXlsb2FkfVxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgdXN1YXJpb1JlZHVjZXI7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=