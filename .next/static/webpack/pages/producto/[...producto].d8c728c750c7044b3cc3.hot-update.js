webpackHotUpdate_N_E("pages/producto/[...producto]",{

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

              try {
                fetch("".concat(_config_index__WEBPACK_IMPORTED_MODULE_2__["API"], "/subproducto?desde=1&limite=30")).then(function (res) {
                  return res.json();
                }).then(function (data) {
                  dispatch({
                    type: _types_subproductosTypes__WEBPACK_IMPORTED_MODULE_3__["TRAER_TODOS"],
                    payload: data.data
                  });
                });
              } catch (error) {
                dispatch({
                  type: _types_subproductosTypes__WEBPACK_IMPORTED_MODULE_3__["ERROR"],
                  payload: error
                });
              }

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
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

              try {
                fetch("".concat(_config_index__WEBPACK_IMPORTED_MODULE_2__["API"], "/subproducto/").concat(id)).then(function (res) {
                  return res.json();
                }).then(function (data) {
                  dispatch({
                    type: _types_subproductosTypes__WEBPACK_IMPORTED_MODULE_3__["TRAER_TODOS"],
                    payload: data.data[0]
                  });
                });
              } catch (error) {
                dispatch({
                  type: _types_subproductosTypes__WEBPACK_IMPORTED_MODULE_3__["ERROR"],
                  payload: error
                });
              }

            case 2:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
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

              try {
                fetch("".concat(_config_index__WEBPACK_IMPORTED_MODULE_2__["API"], "/subproducto?desde=1&limite=8")).then(function (res) {
                  return res.json();
                }).then(function (data) {
                  dispatch({
                    type: _types_subproductosTypes__WEBPACK_IMPORTED_MODULE_3__["TRAER_PROMOCIONES"],
                    payload: data.data
                  });
                });
              } catch (error) {
                dispatch({
                  type: _types_subproductosTypes__WEBPACK_IMPORTED_MODULE_3__["ERROR"],
                  payload: error
                });
              }

            case 2:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
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

              try {
                fetch("".concat(_config_index__WEBPACK_IMPORTED_MODULE_2__["API"], "subproducto?desde=1&limite=5")).then(function (res) {
                  return res.json();
                }).then(function (data) {
                  dispatch({
                    type: _types_subproductosTypes__WEBPACK_IMPORTED_MODULE_3__["FILTRANDO"],
                    payload: data.data
                  });
                });
              } catch (error) {
                dispatch({
                  type: _types_subproductosTypes__WEBPACK_IMPORTED_MODULE_3__["ERROR"],
                  payload: error
                });
              }

            case 4:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvYWN0aW9ucy9zdWJwcm9kdWN0b3NBY3Rpb25zLmpzIl0sIm5hbWVzIjpbInRyYWVyVG9kb3MiLCJkaXNwYXRjaCIsInR5cGUiLCJMT0FESU5HIiwiZmV0Y2giLCJBUEkiLCJ0aGVuIiwicmVzIiwianNvbiIsImRhdGEiLCJUUkFFUl9UT0RPUyIsInBheWxvYWQiLCJlcnJvciIsIkVSUk9SIiwidHJhZXJQb3JJZCIsImlkIiwidHJhZXJQcm9tb2Npb25lcyIsIlRSQUVSX1BST01PQ0lPTkVTIiwib3JkZW5hclByb2R1Y3RvcyIsInByb2R1Y3Rvc09yZGVuYWRvcyIsIk9SREVOQVJfUFJPRFVDVE9TIiwiZmlsdHJhclByb2R1Y3RvcyIsInVybCIsImNvbnNvbGUiLCJsb2ciLCJGSUxUUkFORE8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNPLElBQU1BLFVBQVUsR0FBRyxTQUFiQSxVQUFhO0FBQUE7QUFBQSxnTUFBSSxpQkFBT0MsUUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQzFCQSxzQkFBUSxDQUFDO0FBQ0xDLG9CQUFJLEVBQUNDLGdFQUFPQTtBQURQLGVBQUQsQ0FBUjs7QUFHQSxrQkFBSTtBQUNBQyxxQkFBSyxXQUFJQyxpREFBSixvQ0FBTCxDQUE4Q0MsSUFBOUMsQ0FBbUQsVUFBQUMsR0FBRztBQUFBLHlCQUFFQSxHQUFHLENBQUNDLElBQUosRUFBRjtBQUFBLGlCQUF0RCxFQUFvRUYsSUFBcEUsQ0FBeUUsVUFBQUcsSUFBSSxFQUFFO0FBQzNFUiwwQkFBUSxDQUFDO0FBQ0xDLHdCQUFJLEVBQUNRLG9FQURBO0FBRUxDLDJCQUFPLEVBQUNGLElBQUksQ0FBQ0E7QUFGUixtQkFBRCxDQUFSO0FBSUgsaUJBTEQ7QUFNSCxlQVBELENBT0UsT0FBT0csS0FBUCxFQUFjO0FBQ1pYLHdCQUFRLENBQUM7QUFDTEMsc0JBQUksRUFBQ1csOERBREE7QUFFTEYseUJBQU8s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UUFBTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ2pDc0IscUJBQU8sQ0FBQ0MsR0FBUixDQUFZLFdBQVo7QUFDQUQscUJBQU8sQ0FBQ0MsR0FBUixDQUFZRixHQUFaO0FBQ0FyQixzQkFBUSxDQUFDO0FBQ0xDLG9CQUFJLEVBQUNDLGdFQUFPQTtBQURQLGVBQUQsQ0FBUjs7QUFHQSxrQkFBSTtBQUNBQyxxQkFBSyxXQUFJQyxpREFBSixrQ0FBTCxDQUE0Q0MsSUFBNUMsQ0FBaUQsVUFBQUMsR0FBRztBQUFBLHlCQUFFQSxHQUFHLENBQUNDLElBQUosRUFBRjtBQUFBLGlCQUFwRCxFQUFrRUYsSUFBbEUsQ0FBdUUsVUFBQUcsSUFBSSxFQUFFO0FBQ3pFUiwwQkFBUSxDQUFDO0FBQ0xDLHdCQUFJLEVBQUN1QixrRUFEQTtBQUVMZCwyQkFBTyxFQUFDRixJQUFJLENBQUNBO0FBRlIsbUJBQUQsQ0FBUjtBQUlILGlCQUxEO0FBTUgsZUFQRCxDQU9FLE9BQU9HLEtBQVAsRUFBYztBQUNaWCx3QkFBUSxDQUFDO0FBQ0xDLHNCQUFJLEVBQUNXLDhEQURBO0FBRUxGLHlCQUFPLEVBQUNDO0FBRkgsaUJBQUQsQ0FBUjtBQUlIOztBQWxCZ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBRjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLENBQTVCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2R1Y3RvL1suLi5wcm9kdWN0b10uZDhjNzI4Yzc1MGM3MDQ0YjNjYzMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QVBJfSBmcm9tICcuLi8uLi9jb25maWcvaW5kZXgnO1xyXG5pbXBvcnQge1RSQUVSX1RPRE9TLExPQURJTkcsRVJST1IsVFJBRVJfUFJPTU9DSU9ORVMsT1JERU5BUl9QUk9EVUNUT1MsRklMVFJBTkRPfSBmcm9tICcuLi90eXBlcy9zdWJwcm9kdWN0b3NUeXBlcyc7XHJcbmV4cG9ydCBjb25zdCB0cmFlclRvZG9zID0gKCk9PmFzeW5jIChkaXNwYXRjaCk9PntcclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgICB0eXBlOkxPQURJTkdcclxuICAgIH0pO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBmZXRjaChgJHtBUEl9L3N1YnByb2R1Y3RvP2Rlc2RlPTEmbGltaXRlPTMwYCkudGhlbihyZXM9PnJlcy5qc29uKCkpLnRoZW4oZGF0YT0+e1xyXG4gICAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOlRSQUVSX1RPRE9TLFxyXG4gICAgICAgICAgICAgICAgcGF5bG9hZDpkYXRhLmRhdGFcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSlcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOkVSUk9SLFxyXG4gICAgICAgICAgICBwYXlsb2FkOmVycm9yXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHRyYWVyUG9ySWQgPSBpZD0+YXN5bmMoZGlzcGF0Y2gpPT57XHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgdHlwZTpMT0FESU5HXHJcbiAgICB9KTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgZmV0Y2goYCR7QVBJfS9zdWJwcm9kdWN0by8ke2lkfWApLnRoZW4ocmVzPT5yZXMuanNvbigpKS50aGVuKGRhdGE9PntcclxuICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgdHlwZTpUUkFFUl9UT0RPUyxcclxuICAgICAgICAgICAgICAgIHBheWxvYWQ6ZGF0YS5kYXRhWzBdXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pXHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTpFUlJPUixcclxuICAgICAgICAgICAgcGF5bG9hZDplcnJvclxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCB0cmFlclByb21vY2lvbmVzID0gKCk9PmFzeW5jKGRpc3BhdGNoKT0+e1xyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICAgIHR5cGU6TE9BRElOR1xyXG4gICAgfSk7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGZldGNoKGAke0FQSX0vc3VicHJvZHVjdG8/ZGVzZGU9MSZsaW1pdGU9OGApLnRoZW4ocmVzPT5yZXMuanNvbigpKS50aGVuKGRhdGE9PntcclxuICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgdHlwZTpUUkFFUl9QUk9NT0NJT05FUyxcclxuICAgICAgICAgICAgICAgIHBheWxvYWQ6ZGF0YS5kYXRhXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pXHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTpFUlJPUixcclxuICAgICAgICAgICAgcGF5bG9hZDplcnJvclxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBvcmRlbmFyUHJvZHVjdG9zID0gcHJvZHVjdG9zT3JkZW5hZG9zPT5hc3luYyBkaXNwYXRjaD0+e1xyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICAgIHR5cGU6TE9BRElOR1xyXG4gICAgfSk7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTpPUkRFTkFSX1BST0RVQ1RPUyxcclxuICAgICAgICAgICAgcGF5bG9hZDpwcm9kdWN0b3NPcmRlbmFkb3NcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOkVSUk9SLFxyXG4gICAgICAgICAgICBwYXlsb2FkOmVycm9yXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGZpbHRyYXJQcm9kdWN0b3MgPSB1cmw9PmFzeW5jIGRpc3BhdGNoPT57XHJcbiAgICBjb25zb2xlLmxvZygnZmlsdHJhbmRvJyk7XHJcbiAgICBjb25zb2xlLmxvZyh1cmwpO1xyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICAgIHR5cGU6TE9BRElOR1xyXG4gICAgfSk7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGZldGNoKGAke0FQSX1zdWJwcm9kdWN0bz9kZXNkZT0xJmxpbWl0ZT01YCkudGhlbihyZXM9PnJlcy5qc29uKCkpLnRoZW4oZGF0YT0+e1xyXG4gICAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOkZJTFRSQU5ETyxcclxuICAgICAgICAgICAgICAgIHBheWxvYWQ6ZGF0YS5kYXRhXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOkVSUk9SLFxyXG4gICAgICAgICAgICBwYXlsb2FkOmVycm9yXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0=