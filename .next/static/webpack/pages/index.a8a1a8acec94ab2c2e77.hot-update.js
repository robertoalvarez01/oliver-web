webpackHotUpdate_N_E("pages/index",{

/***/ "./store/actions/categoriasAction.js":
/*!*******************************************!*\
  !*** ./store/actions/categoriasAction.js ***!
  \*******************************************/
/*! exports provided: traerTodas */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "traerTodas", function() { return traerTodas; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _config_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config/index */ "./config/index.js");
/* harmony import */ var _types_categoriasTypes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../types/categoriasTypes */ "./store/types/categoriasTypes.js");




var traerTodas = function traerTodas() {
  return /*#__PURE__*/function () {
    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(dispatch) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              dispatch({
                type: _types_categoriasTypes__WEBPACK_IMPORTED_MODULE_3__["LOADING"]
              });
              _context.prev = 1;
              return _context.abrupt("return", fetch("".concat(_config_index__WEBPACK_IMPORTED_MODULE_2__["API"], "categorias")).then(function (res) {
                return res.json();
              }).then(function (data) {
                var categorias = data.data;
                dispatch({
                  type: _types_categoriasTypes__WEBPACK_IMPORTED_MODULE_3__["TRAER_TODAS"],
                  payload: categorias
                });
              })["catch"](function (err) {
                dispatch({
                  type: _types_categoriasTypes__WEBPACK_IMPORTED_MODULE_3__["ERROR"],
                  payload: err
                });
              }));

            case 5:
              _context.prev = 5;
              _context.t0 = _context["catch"](1);
              dispatch({
                type: _types_categoriasTypes__WEBPACK_IMPORTED_MODULE_3__["ERROR"],
                payload: _context.t0
              });

            case 8:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 5]]);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvYWN0aW9ucy9jYXRlZ29yaWFzQWN0aW9uLmpzIl0sIm5hbWVzIjpbInRyYWVyVG9kYXMiLCJkaXNwYXRjaCIsInR5cGUiLCJMT0FESU5HIiwiZmV0Y2giLCJBUEkiLCJ0aGVuIiwicmVzIiwianNvbiIsImRhdGEiLCJjYXRlZ29yaWFzIiwiVFJBRVJfVE9EQVMiLCJwYXlsb2FkIiwiZXJyIiwiRVJST1IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRU8sSUFBTUEsVUFBVSxHQUFHLFNBQWJBLFVBQWE7QUFBQTtBQUFBLGdNQUFJLGlCQUFPQyxRQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDMUJBLHNCQUFRLENBQUM7QUFDTEMsb0JBQUksRUFBQ0MsOERBQU9BO0FBRFAsZUFBRCxDQUFSO0FBRDBCO0FBQUEsK0NBS2ZDLEtBQUssV0FBSUMsaURBQUosZ0JBQUwsQ0FBMEJDLElBQTFCLENBQStCLFVBQUFDLEdBQUc7QUFBQSx1QkFBRUEsR0FBRyxDQUFDQyxJQUFKLEVBQUY7QUFBQSxlQUFsQyxFQUFnREYsSUFBaEQsQ0FBcUQsVUFBQUcsSUFBSSxFQUFFO0FBQzlELG9CQUFNQyxVQUFVLEdBQUdELElBQUksQ0FBQ0EsSUFBeEI7QUFDQVIsd0JBQVEsQ0FBQztBQUNMQyxzQkFBSSxFQUFDUyxrRUFEQTtBQUVMQyx5QkFBTyxFQUFDRjtBQUZILGlCQUFELENBQVI7QUFJSCxlQU5NLFdBTUUsVUFBQUcsR0FBRyxFQUFFO0FBQ1ZaLHdCQUFRLENBQUM7QUFDTEMsc0JBQUksRUFBQ1ksNERBREE7QUFFTEYseUJBQU8sRUFBQ0M7QUFGSCxpQkFBRCxDQUFSO0FBSUgsZUFYTSxDQUxlOztBQUFBO0FBQUE7QUFBQTtBQWtCdEJaLHNCQUFRLENBQUM7QUFDTEMsb0JBQUksRUFBQ1ksNERBREE7QUFFTEYsdUJBQU87QUFGRixlQUFELENBQVI7O0FBbEJzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFKOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsQ0FBbkIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYThhMWE4YWNlYzk0YWIyYzJlNzcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QVBJfSBmcm9tICcuLi8uLi9jb25maWcvaW5kZXgnO1xyXG5pbXBvcnQge1RSQUVSX1RPREFTLExPQURJTkcsRVJST1J9IGZyb20gJy4uL3R5cGVzL2NhdGVnb3JpYXNUeXBlcyc7XHJcblxyXG5leHBvcnQgY29uc3QgdHJhZXJUb2RhcyA9ICgpPT5hc3luYyAoZGlzcGF0Y2gpPT57XHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgdHlwZTpMT0FESU5HXHJcbiAgICB9KTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgcmV0dXJuIGZldGNoKGAke0FQSX1jYXRlZ29yaWFzYCkudGhlbihyZXM9PnJlcy5qc29uKCkpLnRoZW4oZGF0YT0+e1xyXG4gICAgICAgICAgICBjb25zdCBjYXRlZ29yaWFzID0gZGF0YS5kYXRhO1xyXG4gICAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOlRSQUVSX1RPREFTLFxyXG4gICAgICAgICAgICAgICAgcGF5bG9hZDpjYXRlZ29yaWFzXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pLmNhdGNoKGVycj0+e1xyXG4gICAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOkVSUk9SLFxyXG4gICAgICAgICAgICAgICAgcGF5bG9hZDplcnJcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6RVJST1IsXHJcbiAgICAgICAgICAgIHBheWxvYWQ6ZXJyb3JcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==