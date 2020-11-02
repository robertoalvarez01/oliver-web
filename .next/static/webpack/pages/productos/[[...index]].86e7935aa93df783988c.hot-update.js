webpackHotUpdate_N_E("pages/productos/[[...index]]",{

/***/ "./store/actions/subproductosActions.js":
/*!**********************************************!*\
  !*** ./store/actions/subproductosActions.js ***!
  \**********************************************/
/*! exports provided: traerTodos, traerPorId, traerPromociones, ordenarProductos, filtrarProductos */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "traerTodos", function() { return traerTodos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "traerPorId", function() { return traerPorId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "traerPromociones", function() { return traerPromociones; });
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
var ordenarProductos = function ordenarProductos(productosOrdenados) {
  return /*#__PURE__*/function () {
    var _ref4 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(dispatch) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
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
              return _context4.stop();
          }
        }
      }, _callee4);
    }));

    return function (_x4) {
      return _ref4.apply(this, arguments);
    };
  }();
};
var filtrarProductos = function filtrarProductos(url) {
  return /*#__PURE__*/function () {
    var _ref5 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5(dispatch) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              console.log('filtrando');
              console.log(url);
              dispatch({
                type: _types_subproductosTypes__WEBPACK_IMPORTED_MODULE_3__["LOADING"]
              });
              _context5.prev = 3;
              return _context5.abrupt("return", fetch("".concat(_config_index__WEBPACK_IMPORTED_MODULE_2__["API"], "subproducto?desde=1&limite=5")).then(function (res) {
                return res.json();
              }).then(function (data) {
                dispatch({
                  type: _types_subproductosTypes__WEBPACK_IMPORTED_MODULE_3__["FILTRANDO"],
                  payload: data.data
                });
              }));

            case 7:
              _context5.prev = 7;
              _context5.t0 = _context5["catch"](3);
              dispatch({
                type: _types_subproductosTypes__WEBPACK_IMPORTED_MODULE_3__["ERROR"],
                payload: _context5.t0
              });

            case 10:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, null, [[3, 7]]);
    }));

    return function (_x5) {
      return _ref5.apply(this, arguments);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvYWN0aW9ucy9zdWJwcm9kdWN0b3NBY3Rpb25zLmpzIl0sIm5hbWVzIjpbInRyYWVyVG9kb3MiLCJkaXNwYXRjaCIsInR5cGUiLCJMT0FESU5HIiwiZmV0Y2giLCJBUEkiLCJ0aGVuIiwicmVzIiwianNvbiIsImRhdGEiLCJUUkFFUl9UT0RPUyIsInBheWxvYWQiLCJFUlJPUiIsInRyYWVyUG9ySWQiLCJpZCIsInRyYWVyUHJvbW9jaW9uZXMiLCJUUkFFUl9QUk9NT0NJT05FUyIsIm9yZGVuYXJQcm9kdWN0b3MiLCJwcm9kdWN0b3NPcmRlbmFkb3MiLCJPUkRFTkFSX1BST0RVQ1RPUyIsImVycm9yIiwiZmlsdHJhclByb2R1Y3RvcyIsInVybCIsImNvbnNvbGUiLCJsb2ciLCJGSUxUUkFORE8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNPLElBQU1BLFVBQVUsR0FBRyxTQUFiQSxVQUFhO0FBQUE7QUFBQSxnTUFBSSxpQkFBT0MsUUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQzFCQSxzQkFBUSxDQUFDO0FBQ0xDLG9CQUFJLEVBQUNDLGdFQUFPQTtBQURQLGVBQUQsQ0FBUjtBQUQwQjtBQUFBLCtDQUtmQyxLQUFLLFdBQUlDLGlEQUFKLG9DQUFMLENBQThDQyxJQUE5QyxDQUFtRCxVQUFBQyxHQUFHO0FBQUEsdUJBQUVBLEdBQUcsQ0FBQ0MsSUFBSixFQUFGO0FBQUEsZUFBdEQsRUFBb0VGLElBQXBFLENBQXlFLFVBQUFHLElBQUksRUFBRTtBQUNsRlIsd0JBQVEsQ0FBQztBQUNMQyxzQkFBSSxFQUFDUSxvRUFEQTtBQUVMQyx5QkFBTyxFQUFDRixJQUFJLENBQUNBO0FBRlIsaUJBQUQsQ0FBUjtBQUlILGVBTE0sQ0FMZTs7QUFBQTtBQUFBO0FBQUE7QUFZdEJSLHNCQUFRLENBQUM7QUFDTEMsb0JBQUksRUFBQ1UsOERBREE7QUFFTEQsdUJBQU87QUFGRixlQUFELENB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Q0FBQ0MsR0FBUixDQUFZRixHQUFaO0FBQ0FyQixzQkFBUSxDQUFDO0FBQ0xDLG9CQUFJLEVBQUNDLGdFQUFPQTtBQURQLGVBQUQsQ0FBUjtBQUhpQztBQUFBLGdEQU90QkMsS0FBSyxXQUFJQyxpREFBSixrQ0FBTCxDQUE0Q0MsSUFBNUMsQ0FBaUQsVUFBQUMsR0FBRztBQUFBLHVCQUFFQSxHQUFHLENBQUNDLElBQUosRUFBRjtBQUFBLGVBQXBELEVBQWtFRixJQUFsRSxDQUF1RSxVQUFBRyxJQUFJLEVBQUU7QUFDaEZSLHdCQUFRLENBQUM7QUFDTEMsc0JBQUksRUFBQ3VCLGtFQURBO0FBRUxkLHlCQUFPLEVBQUNGLElBQUksQ0FBQ0E7QUFGUixpQkFBRCxDQUFSO0FBSUgsZUFMTSxDQVBzQjs7QUFBQTtBQUFBO0FBQUE7QUFjN0JSLHNCQUFRLENBQUM7QUFDTEMsb0JBQUksRUFBQ1UsOERBREE7QUFFTEQsdUJBQU87QUFGRixlQUFELENBQVI7O0FBZDZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUY7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxDQUE1QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9kdWN0b3MvW1suLi5pbmRleF1dLjg2ZTc5MzVhYTkzZGY3ODM5ODhjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0FQSX0gZnJvbSAnLi4vLi4vY29uZmlnL2luZGV4JztcclxuaW1wb3J0IHtUUkFFUl9UT0RPUyxMT0FESU5HLEVSUk9SLFRSQUVSX1BST01PQ0lPTkVTLE9SREVOQVJfUFJPRFVDVE9TLEZJTFRSQU5ET30gZnJvbSAnLi4vdHlwZXMvc3VicHJvZHVjdG9zVHlwZXMnO1xyXG5leHBvcnQgY29uc3QgdHJhZXJUb2RvcyA9ICgpPT5hc3luYyAoZGlzcGF0Y2gpPT57XHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgdHlwZTpMT0FESU5HXHJcbiAgICB9KTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgcmV0dXJuIGZldGNoKGAke0FQSX0vc3VicHJvZHVjdG8/ZGVzZGU9MSZsaW1pdGU9MzBgKS50aGVuKHJlcz0+cmVzLmpzb24oKSkudGhlbihkYXRhPT57XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6VFJBRVJfVE9ET1MsXHJcbiAgICAgICAgICAgICAgICBwYXlsb2FkOmRhdGEuZGF0YVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6RVJST1IsXHJcbiAgICAgICAgICAgIHBheWxvYWQ6ZXJyb3JcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgdHJhZXJQb3JJZCA9IGlkPT5hc3luYyhkaXNwYXRjaCk9PntcclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgICB0eXBlOkxPQURJTkdcclxuICAgIH0pO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICByZXR1cm4gZmV0Y2goYCR7QVBJfS9zdWJwcm9kdWN0by8ke2lkfWApLnRoZW4ocmVzPT5yZXMuanNvbigpKS50aGVuKGRhdGE9PntcclxuICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgdHlwZTpUUkFFUl9UT0RPUyxcclxuICAgICAgICAgICAgICAgIHBheWxvYWQ6ZGF0YS5kYXRhWzBdXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pXHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTpFUlJPUixcclxuICAgICAgICAgICAgcGF5bG9hZDplcnJvclxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCB0cmFlclByb21vY2lvbmVzID0gKCk9PmFzeW5jKGRpc3BhdGNoKT0+e1xyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICAgIHR5cGU6TE9BRElOR1xyXG4gICAgfSk7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHJldHVybiBmZXRjaChgJHtBUEl9L3N1YnByb2R1Y3RvP2Rlc2RlPTEmbGltaXRlPThgKS50aGVuKHJlcz0+cmVzLmpzb24oKSkudGhlbihkYXRhPT57XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6VFJBRVJfUFJPTU9DSU9ORVMsXHJcbiAgICAgICAgICAgICAgICBwYXlsb2FkOmRhdGEuZGF0YVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6RVJST1IsXHJcbiAgICAgICAgICAgIHBheWxvYWQ6ZXJyb3JcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3Qgb3JkZW5hclByb2R1Y3RvcyA9IHByb2R1Y3Rvc09yZGVuYWRvcz0+YXN5bmMgZGlzcGF0Y2g9PntcclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgICB0eXBlOkxPQURJTkdcclxuICAgIH0pO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6T1JERU5BUl9QUk9EVUNUT1MsXHJcbiAgICAgICAgICAgIHBheWxvYWQ6cHJvZHVjdG9zT3JkZW5hZG9zXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTpFUlJPUixcclxuICAgICAgICAgICAgcGF5bG9hZDplcnJvclxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBmaWx0cmFyUHJvZHVjdG9zID0gdXJsPT5hc3luYyBkaXNwYXRjaD0+e1xyXG4gICAgY29uc29sZS5sb2coJ2ZpbHRyYW5kbycpO1xyXG4gICAgY29uc29sZS5sb2codXJsKTtcclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgICB0eXBlOkxPQURJTkdcclxuICAgIH0pO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICByZXR1cm4gZmV0Y2goYCR7QVBJfXN1YnByb2R1Y3RvP2Rlc2RlPTEmbGltaXRlPTVgKS50aGVuKHJlcz0+cmVzLmpzb24oKSkudGhlbihkYXRhPT57XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6RklMVFJBTkRPLFxyXG4gICAgICAgICAgICAgICAgcGF5bG9hZDpkYXRhLmRhdGFcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6RVJST1IsXHJcbiAgICAgICAgICAgIHBheWxvYWQ6ZXJyb3JcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==