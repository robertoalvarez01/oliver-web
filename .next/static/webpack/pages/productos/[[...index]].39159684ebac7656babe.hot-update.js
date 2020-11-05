webpackHotUpdate_N_E("pages/productos/[[...index]]",{

/***/ "./store/actions/subproductosActions.js":
/*!**********************************************!*\
  !*** ./store/actions/subproductosActions.js ***!
  \**********************************************/
/*! exports provided: traerTodos, traerPorId, traerPromociones, buscarProducto, ordenarProductos, filtrarProductos */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "traerTodos", function() { return traerTodos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "traerPorId", function() { return traerPorId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "traerPromociones", function() { return traerPromociones; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buscarProducto", function() { return buscarProducto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ordenarProductos", function() { return ordenarProductos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filtrarProductos", function() { return filtrarProductos; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _config_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config/index */ "./config/index.js");
/* harmony import */ var _types_subproductosTypes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../types/subproductosTypes */ "./store/types/subproductosTypes.js");




var traerTodos = function traerTodos() {
  return /*#__PURE__*/function () {
    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(dispatch) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              dispatch({
                type: _types_subproductosTypes__WEBPACK_IMPORTED_MODULE_3__["LOADING"]
              });
              _context.prev = 1;
              return _context.abrupt("return", fetch("".concat(_config_index__WEBPACK_IMPORTED_MODULE_2__["API"], "/subproducto?desde=1&limite=30")).then(function (res) {
                return res.json();
              }).then(function (data) {
                dispatch({
                  type: _types_subproductosTypes__WEBPACK_IMPORTED_MODULE_3__["TRAER_TODOS"],
                  payload: data.data
                });
              }));

            case 5:
              _context.prev = 5;
              _context.t0 = _context["catch"](1);
              dispatch({
                type: _types_subproductosTypes__WEBPACK_IMPORTED_MODULE_3__["ERROR"],
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
var traerPorId = function traerPorId(id) {
  return /*#__PURE__*/function () {
    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(dispatch) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              dispatch({
                type: _types_subproductosTypes__WEBPACK_IMPORTED_MODULE_3__["LOADING"]
              });
              _context2.prev = 1;
              return _context2.abrupt("return", fetch("".concat(_config_index__WEBPACK_IMPORTED_MODULE_2__["API"], "/subproducto/").concat(id)).then(function (res) {
                return res.json();
              }).then(function (data) {
                dispatch({
                  type: _types_subproductosTypes__WEBPACK_IMPORTED_MODULE_3__["TRAER_TODOS"],
                  payload: data.data[0]
                });
              }));

            case 5:
              _context2.prev = 5;
              _context2.t0 = _context2["catch"](1);
              dispatch({
                type: _types_subproductosTypes__WEBPACK_IMPORTED_MODULE_3__["ERROR"],
                payload: _context2.t0
              });

            case 8:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[1, 5]]);
    }));

    return function (_x2) {
      return _ref2.apply(this, arguments);
    };
  }();
};
var traerPromociones = function traerPromociones() {
  return /*#__PURE__*/function () {
    var _ref3 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(dispatch) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              dispatch({
                type: _types_subproductosTypes__WEBPACK_IMPORTED_MODULE_3__["LOADING"]
              });
              _context3.prev = 1;
              return _context3.abrupt("return", fetch("".concat(_config_index__WEBPACK_IMPORTED_MODULE_2__["API"], "/subproducto?desde=1&limite=8")).then(function (res) {
                return res.json();
              }).then(function (data) {
                dispatch({
                  type: _types_subproductosTypes__WEBPACK_IMPORTED_MODULE_3__["TRAER_PROMOCIONES"],
                  payload: data.data
                });
              }));

            case 5:
              _context3.prev = 5;
              _context3.t0 = _context3["catch"](1);
              dispatch({
                type: _types_subproductosTypes__WEBPACK_IMPORTED_MODULE_3__["ERROR"],
                payload: _context3.t0
              });

            case 8:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[1, 5]]);
    }));

    return function (_x3) {
      return _ref3.apply(this, arguments);
    };
  }();
};
var buscarProducto = function buscarProducto(key) {
  return /*#__PURE__*/function () {
    var _ref4 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(dispatch) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              dispatch({
                type: _types_subproductosTypes__WEBPACK_IMPORTED_MODULE_3__["LOADING"]
              });
              _context4.prev = 1;
              return _context4.abrupt("return", fetch("".concat(_config_index__WEBPACK_IMPORTED_MODULE_2__["API"], "/subproducto?desde1&limite3")).then(function (res) {
                return res.json();
              }).then(function (data) {
                dispatch({
                  type: _types_subproductosTypes__WEBPACK_IMPORTED_MODULE_3__["TRAER_TODOS"],
                  payload: data.data
                });
              }));

            case 5:
              _context4.prev = 5;
              _context4.t0 = _context4["catch"](1);
              dispatch({
                type: _types_subproductosTypes__WEBPACK_IMPORTED_MODULE_3__["ERROR"],
                payload: _context4.t0
              });

            case 8:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, null, [[1, 5]]);
    }));

    return function (_x4) {
      return _ref4.apply(this, arguments);
    };
  }();
};
var ordenarProductos = function ordenarProductos(productosOrdenados) {
  return /*#__PURE__*/function () {
    var _ref5 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5(dispatch) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              dispatch({
                type: _types_subproductosTypes__WEBPACK_IMPORTED_MODULE_3__["LOADING"]
              });

              try {
                dispatch({
                  type: _types_subproductosTypes__WEBPACK_IMPORTED_MODULE_3__["ORDENAR_PRODUCTOS"],
                  payload: productosOrdenados
                });
              } catch (error) {
                dispatch({
                  type: _types_subproductosTypes__WEBPACK_IMPORTED_MODULE_3__["ERROR"],
                  payload: error
                });
              }

            case 2:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }));

    return function (_x5) {
      return _ref5.apply(this, arguments);
    };
  }();
};
var filtrarProductos = function filtrarProductos(url) {
  return /*#__PURE__*/function () {
    var _ref6 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6(dispatch) {
      var urlFiltro;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              console.log('filtrando');
              console.log(url);
              dispatch({
                type: _types_subproductosTypes__WEBPACK_IMPORTED_MODULE_3__["LOADING"]
              });
              _context6.prev = 3;
              urlFiltro = url.includes('buscar?busqueda') ? url : 'subproducto?desde=1&limite=5';
              return _context6.abrupt("return", fetch("".concat(_config_index__WEBPACK_IMPORTED_MODULE_2__["API"]).concat(urlFiltro)).then(function (res) {
                return res.json();
              }).then(function (data) {
                dispatch({
                  type: _types_subproductosTypes__WEBPACK_IMPORTED_MODULE_3__["FILTRANDO"],
                  payload: data.data
                });
              }));

            case 8:
              _context6.prev = 8;
              _context6.t0 = _context6["catch"](3);
              dispatch({
                type: _types_subproductosTypes__WEBPACK_IMPORTED_MODULE_3__["ERROR"],
                payload: _context6.t0
              });

            case 11:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6, null, [[3, 8]]);
    }));

    return function (_x6) {
      return _ref6.apply(this, arguments);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvYWN0aW9ucy9zdWJwcm9kdWN0b3NBY3Rpb25zLmpzIl0sIm5hbWVzIjpbInRyYWVyVG9kb3MiLCJkaXNwYXRjaCIsInR5cGUiLCJMT0FESU5HIiwiZmV0Y2giLCJBUEkiLCJ0aGVuIiwicmVzIiwianNvbiIsImRhdGEiLCJUUkFFUl9UT0RPUyIsInBheWxvYWQiLCJFUlJPUiIsInRyYWVyUG9ySWQiLCJpZCIsInRyYWVyUHJvbW9jaW9uZXMiLCJUUkFFUl9QUk9NT0NJT05FUyIsImJ1c2NhclByb2R1Y3RvIiwia2V5Iiwib3JkZW5hclByb2R1Y3RvcyIsInByb2R1Y3Rvc09yZGVuYWRvcyIsIk9SREVOQVJfUFJPRFVDVE9TIiwiZXJyb3IiLCJmaWx0cmFyUHJvZHVjdG9zIiwidXJsIiwiY29uc29sZSIsImxvZyIsInVybEZpbHRybyIsImluY2x1ZGVzIiwiRklMVFJBTkRPIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ08sSUFBTUEsVUFBVSxHQUFHLFNBQWJBLFVBQWE7QUFBQTtBQUFBLGdNQUFJLGlCQUFPQyxRQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDMUJBLHNCQUFRLENBQUM7QUFDTEMsb0JBQUksRUFBQ0MsZ0VBQU9BO0FBRFAsZUFBRCxDQUFSO0FBRDBCO0FBQUEsK0NBS2ZDLEtBQUssV0FBSUMsaURBQUosb0NBQUwsQ0FBOENDLElBQTlDLENBQW1ELFVBQUFDLEdBQUc7QUFBQSx1QkFBRUEsR0FBRyxDQUFDQyxJQUFKLEVBQUY7QUFBQSxlQUF0RCxFQUFvRUYsSUFBcEUsQ0FBeUUsVUFBQUcsSUFBSSxFQUFFO0FBQ2xGUix3QkFBUSxDQUFDO0FBQ0xDLHNCQUFJLEVBQUNRLG9FQURBO0FBRUxDLHlCQUFPLEVBQUNGLElBQUksQ0FBQ0E7QUFGUixpQkFBRCxDQUFSO0FBSUgsZUFMTSxDQUxlOztBQUFBO0FBQUE7QUFBQTtBQVl0QlIsc0JBQVEsQ0FBQztB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ZUFBcEMsRUFBa0RGLElBQWxELENBQXVELFVBQUFHLElBQUksRUFBRTtBQUNoRVIsd0JBQVEsQ0FBQztBQUNMQyxzQkFBSSxFQUFDMkIsa0VBREE7QUFFTGxCLHlCQUFPLEVBQUNGLElBQUksQ0FBQ0E7QUFGUixpQkFBRCxDQUFSO0FBSUgsZUFMTSxDQVJzQjs7QUFBQTtBQUFBO0FBQUE7QUFlN0JSLHNCQUFRLENBQUM7QUFDTEMsb0JBQUksRUFBQ1UsOERBREE7QUFFTEQsdUJBQU87QUFGRixlQUFELENBQVI7O0FBZjZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUY7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxDQUE1QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9kdWN0b3MvW1suLi5pbmRleF1dLjM5MTU5Njg0ZWJhYzc2NTZiYWJlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0FQSX0gZnJvbSAnLi4vLi4vY29uZmlnL2luZGV4JztcclxuaW1wb3J0IHtUUkFFUl9UT0RPUyxMT0FESU5HLEVSUk9SLFRSQUVSX1BST01PQ0lPTkVTLE9SREVOQVJfUFJPRFVDVE9TLEZJTFRSQU5ET30gZnJvbSAnLi4vdHlwZXMvc3VicHJvZHVjdG9zVHlwZXMnO1xyXG5leHBvcnQgY29uc3QgdHJhZXJUb2RvcyA9ICgpPT5hc3luYyAoZGlzcGF0Y2gpPT57XHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgdHlwZTpMT0FESU5HXHJcbiAgICB9KTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgcmV0dXJuIGZldGNoKGAke0FQSX0vc3VicHJvZHVjdG8/ZGVzZGU9MSZsaW1pdGU9MzBgKS50aGVuKHJlcz0+cmVzLmpzb24oKSkudGhlbihkYXRhPT57XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6VFJBRVJfVE9ET1MsXHJcbiAgICAgICAgICAgICAgICBwYXlsb2FkOmRhdGEuZGF0YVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6RVJST1IsXHJcbiAgICAgICAgICAgIHBheWxvYWQ6ZXJyb3JcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgdHJhZXJQb3JJZCA9IGlkPT5hc3luYyhkaXNwYXRjaCk9PntcclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgICB0eXBlOkxPQURJTkdcclxuICAgIH0pO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICByZXR1cm4gZmV0Y2goYCR7QVBJfS9zdWJwcm9kdWN0by8ke2lkfWApLnRoZW4ocmVzPT5yZXMuanNvbigpKS50aGVuKGRhdGE9PntcclxuICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgdHlwZTpUUkFFUl9UT0RPUyxcclxuICAgICAgICAgICAgICAgIHBheWxvYWQ6ZGF0YS5kYXRhWzBdXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pXHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTpFUlJPUixcclxuICAgICAgICAgICAgcGF5bG9hZDplcnJvclxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCB0cmFlclByb21vY2lvbmVzID0gKCk9PmFzeW5jKGRpc3BhdGNoKT0+e1xyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICAgIHR5cGU6TE9BRElOR1xyXG4gICAgfSk7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHJldHVybiBmZXRjaChgJHtBUEl9L3N1YnByb2R1Y3RvP2Rlc2RlPTEmbGltaXRlPThgKS50aGVuKHJlcz0+cmVzLmpzb24oKSkudGhlbihkYXRhPT57XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6VFJBRVJfUFJPTU9DSU9ORVMsXHJcbiAgICAgICAgICAgICAgICBwYXlsb2FkOmRhdGEuZGF0YVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6RVJST1IsXHJcbiAgICAgICAgICAgIHBheWxvYWQ6ZXJyb3JcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgYnVzY2FyUHJvZHVjdG8gPSBrZXk9PmFzeW5jIGRpc3BhdGNoPT57XHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgdHlwZTpMT0FESU5HXHJcbiAgICB9KTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgcmV0dXJuIGZldGNoKGAke0FQSX0vc3VicHJvZHVjdG8/ZGVzZGUxJmxpbWl0ZTNgKS50aGVuKHJlcz0+cmVzLmpzb24oKSkudGhlbihkYXRhPT57XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6VFJBRVJfVE9ET1MsXHJcbiAgICAgICAgICAgICAgICBwYXlsb2FkOmRhdGEuZGF0YVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTpFUlJPUixcclxuICAgICAgICAgICAgcGF5bG9hZDplcnJvclxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBvcmRlbmFyUHJvZHVjdG9zID0gcHJvZHVjdG9zT3JkZW5hZG9zPT5hc3luYyBkaXNwYXRjaD0+e1xyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICAgIHR5cGU6TE9BRElOR1xyXG4gICAgfSk7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTpPUkRFTkFSX1BST0RVQ1RPUyxcclxuICAgICAgICAgICAgcGF5bG9hZDpwcm9kdWN0b3NPcmRlbmFkb3NcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOkVSUk9SLFxyXG4gICAgICAgICAgICBwYXlsb2FkOmVycm9yXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGZpbHRyYXJQcm9kdWN0b3MgPSB1cmw9PmFzeW5jIGRpc3BhdGNoPT57XHJcbiAgICBjb25zb2xlLmxvZygnZmlsdHJhbmRvJyk7XHJcbiAgICBjb25zb2xlLmxvZyh1cmwpO1xyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICAgIHR5cGU6TE9BRElOR1xyXG4gICAgfSk7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGxldCB1cmxGaWx0cm8gPSAodXJsLmluY2x1ZGVzKCdidXNjYXI/YnVzcXVlZGEnKSk/dXJsOidzdWJwcm9kdWN0bz9kZXNkZT0xJmxpbWl0ZT01JztcclxuICAgICAgICByZXR1cm4gZmV0Y2goYCR7QVBJfSR7dXJsRmlsdHJvfWApLnRoZW4ocmVzPT5yZXMuanNvbigpKS50aGVuKGRhdGE9PntcclxuICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgdHlwZTpGSUxUUkFORE8sXHJcbiAgICAgICAgICAgICAgICBwYXlsb2FkOmRhdGEuZGF0YVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTpFUlJPUixcclxuICAgICAgICAgICAgcGF5bG9hZDplcnJvclxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9