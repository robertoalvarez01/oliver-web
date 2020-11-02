webpackHotUpdate_N_E("pages/productos/[[...index]]",{

/***/ "./store/actions/subcategoriasAction.js":
/*!**********************************************!*\
  !*** ./store/actions/subcategoriasAction.js ***!
  \**********************************************/
/*! exports provided: traerTodas */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "traerTodas", function() { return traerTodas; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _config_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config/index */ "./config/index.js");
/* harmony import */ var _types_subcategoriasTypes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../types/subcategoriasTypes */ "./store/types/subcategoriasTypes.js");




var traerTodas = function traerTodas() {
  return /*#__PURE__*/function () {
    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(dispatch) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              dispatch({
                type: _types_subcategoriasTypes__WEBPACK_IMPORTED_MODULE_3__["LOADING"]
              });
              _context.prev = 1;
              return _context.abrupt("return", fetch("".concat(_config_index__WEBPACK_IMPORTED_MODULE_2__["API"], "subcategoria")).then(function (res) {
                return res.json();
              }).then(function (data) {
                var subcategorias = data.data;
                dispatch({
                  type: _types_subcategoriasTypes__WEBPACK_IMPORTED_MODULE_3__["TRAER_TODAS"],
                  payload: subcategorias
                });
              })["catch"](function (err) {
                dispatch({
                  type: _types_subcategoriasTypes__WEBPACK_IMPORTED_MODULE_3__["ERROR"],
                  payload: err
                });
              }));

            case 5:
              _context.prev = 5;
              _context.t0 = _context["catch"](1);
              dispatch({
                type: _types_subcategoriasTypes__WEBPACK_IMPORTED_MODULE_3__["ERROR"],
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvYWN0aW9ucy9zdWJjYXRlZ29yaWFzQWN0aW9uLmpzIl0sIm5hbWVzIjpbInRyYWVyVG9kYXMiLCJkaXNwYXRjaCIsInR5cGUiLCJMT0FESU5HIiwiZmV0Y2giLCJBUEkiLCJ0aGVuIiwicmVzIiwianNvbiIsImRhdGEiLCJzdWJjYXRlZ29yaWFzIiwiVFJBRVJfVE9EQVMiLCJwYXlsb2FkIiwiZXJyIiwiRVJST1IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRU8sSUFBTUEsVUFBVSxHQUFHLFNBQWJBLFVBQWE7QUFBQTtBQUFBLGdNQUFJLGlCQUFPQyxRQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDMUJBLHNCQUFRLENBQUM7QUFDTEMsb0JBQUksRUFBQ0MsaUVBQU9BO0FBRFAsZUFBRCxDQUFSO0FBRDBCO0FBQUEsK0NBS2ZDLEtBQUssV0FBSUMsaURBQUosa0JBQUwsQ0FBNEJDLElBQTVCLENBQWlDLFVBQUFDLEdBQUc7QUFBQSx1QkFBRUEsR0FBRyxDQUFDQyxJQUFKLEVBQUY7QUFBQSxlQUFwQyxFQUFrREYsSUFBbEQsQ0FBdUQsVUFBQUcsSUFBSSxFQUFFO0FBQ2hFLG9CQUFNQyxhQUFhLEdBQUdELElBQUksQ0FBQ0EsSUFBM0I7QUFDQVIsd0JBQVEsQ0FBQztBQUNMQyxzQkFBSSxFQUFDUyxxRUFEQTtBQUVMQyx5QkFBTyxFQUFDRjtBQUZILGlCQUFELENBQVI7QUFJSCxlQU5NLFdBTUUsVUFBQUcsR0FBRyxFQUFFO0FBQ1ZaLHdCQUFRLENBQUM7QUFDTEMsc0JBQUksRUFBQ1ksK0RBREE7QUFFTEYseUJBQU8sRUFBQ0M7QUFGSCxpQkFBRCxDQUFSO0FBSUgsZUFYTSxDQUxlOztBQUFBO0FBQUE7QUFBQTtBQWtCdEJaLHNCQUFRLENBQUM7QUFDTEMsb0JBQUksRUFBQ1ksK0RBREE7QUFFTEYsdUJBQU87QUFGRixlQUFELENBQVI7O0FBbEJzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFKOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsQ0FBbkIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvZHVjdG9zL1tbLi4uaW5kZXhdXS40NDJhY2RhNGM4NTkxNWE2MmZiNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtBUEl9IGZyb20gJy4uLy4uL2NvbmZpZy9pbmRleCc7XHJcbmltcG9ydCB7VFJBRVJfVE9EQVMsTE9BRElORyxFUlJPUn0gZnJvbSAnLi4vdHlwZXMvc3ViY2F0ZWdvcmlhc1R5cGVzJztcclxuXHJcbmV4cG9ydCBjb25zdCB0cmFlclRvZGFzID0gKCk9PmFzeW5jIChkaXNwYXRjaCk9PntcclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgICB0eXBlOkxPQURJTkdcclxuICAgIH0pO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICByZXR1cm4gZmV0Y2goYCR7QVBJfXN1YmNhdGVnb3JpYWApLnRoZW4ocmVzPT5yZXMuanNvbigpKS50aGVuKGRhdGE9PntcclxuICAgICAgICAgICAgY29uc3Qgc3ViY2F0ZWdvcmlhcyA9IGRhdGEuZGF0YTtcclxuICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgdHlwZTpUUkFFUl9UT0RBUyxcclxuICAgICAgICAgICAgICAgIHBheWxvYWQ6c3ViY2F0ZWdvcmlhc1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KS5jYXRjaChlcnI9PntcclxuICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgdHlwZTpFUlJPUixcclxuICAgICAgICAgICAgICAgIHBheWxvYWQ6ZXJyXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOkVSUk9SLFxyXG4gICAgICAgICAgICBwYXlsb2FkOmVycm9yXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0=