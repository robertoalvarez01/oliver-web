webpackHotUpdate_N_E("pages/checkout",{

/***/ "./store/actions/carritoActions.js":
/*!*****************************************!*\
  !*** ./store/actions/carritoActions.js ***!
  \*****************************************/
/*! exports provided: traerProductos, agregarProducto, eliminarProducto */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "traerProductos", function() { return traerProductos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "agregarProducto", function() { return agregarProducto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "eliminarProducto", function() { return eliminarProducto; });
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _types_carritoTypes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../types/carritoTypes */ "./store/types/carritoTypes.js");



//import {API} from '../config/index';

var traerProductos = function traerProductos() {
  return /*#__PURE__*/function () {
    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(dispatch) {
      var productos, subtotal, payloadData;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              dispatch({
                type: _types_carritoTypes__WEBPACK_IMPORTED_MODULE_3__["LOADING"]
              });

              try {
                productos = JSON.parse(localStorage.getItem('carrito'));
                subtotal = 0;
                productos.forEach(function (prd) {
                  subtotal += parseInt(prd.precioUnidad * prd.cantidad);
                });
                payloadData = {
                  productos: productos,
                  subtotal: subtotal
                };
                dispatch({
                  type: _types_carritoTypes__WEBPACK_IMPORTED_MODULE_3__["TRAER_PRODUCTOS"],
                  payload: payloadData
                });
              } catch (error) {
                dispatch({
                  type: _types_carritoTypes__WEBPACK_IMPORTED_MODULE_3__["ERROR"],
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
var agregarProducto = function agregarProducto(producto) {
  return /*#__PURE__*/function () {
    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2(dispatch, getState) {
      var productos, listProductosUpgrade, productoRepetido, restantes, prds, subtotal, payloadData;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              dispatch({
                type: _types_carritoTypes__WEBPACK_IMPORTED_MODULE_3__["LOADING"]
              });

              try {
                //productos que hay en el reducer
                productos = getState().carritoReducer.productos;
                productoRepetido = productos.filter(function (res) {
                  return res.idSubProducto == producto.idSubProducto;
                });

                if (productoRepetido.length > 0) {
                  //si se intenta agregar de nuevo el mismo producto, se suma la cantidad, no todo el producto.
                  productoRepetido[0].cantidad = productoRepetido[0].cantidad + producto.cantidad;
                  restantes = productos.filter(function (newRes) {
                    return newRes.idSubProducto != productoRepetido[0].idSubProducto;
                  });

                  if (restantes.length > 0) {
                    listProductosUpgrade = [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(restantes), [productoRepetido[0]]);
                  } else {
                    listProductosUpgrade = [productoRepetido[0]];
                  }
                } else {
                  listProductosUpgrade = [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(productos), [producto]);
                } //actualizo localstorage


                localStorage.setItem('carrito', JSON.stringify(listProductosUpgrade)); //calculo el subtotal

                prds = JSON.parse(localStorage.getItem('carrito'));
                subtotal = 0;
                prds.forEach(function (prd) {
                  subtotal += parseInt(prd.precioUnidad * prd.cantidad);
                });
                payloadData = {
                  listProductosUpgrade: listProductosUpgrade,
                  subtotal: subtotal
                };
                setTimeout(function () {
                  dispatch({
                    type: _types_carritoTypes__WEBPACK_IMPORTED_MODULE_3__["AGREGAR_PRODUCTO"],
                    payload: payloadData
                  });
                }, 1500);
              } catch (error) {
                dispatch({
                  type: _types_carritoTypes__WEBPACK_IMPORTED_MODULE_3__["ERROR"],
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

    return function (_x2, _x3) {
      return _ref2.apply(this, arguments);
    };
  }();
};
var eliminarProducto = function eliminarProducto(idSubProducto) {
  return /*#__PURE__*/function () {
    var _ref3 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee3(dispatch, getState) {
      var productos, newProductos;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              dispatch({
                type: _types_carritoTypes__WEBPACK_IMPORTED_MODULE_3__["LOADING"]
              });

              try {
                productos = getState().carritoReducer.productos; //filtro los productos que no tengan el idProducto que se recibió. entonces elimino ese producto y actualizo el reducer.

                newProductos = productos.filter(function (newArray) {
                  return newArray.idSubProducto !== idSubProducto;
                });
                console.log(newProductos);
                localStorage.setItem('carrito', JSON.stringify(newProductos));
                dispatch({
                  type: _types_carritoTypes__WEBPACK_IMPORTED_MODULE_3__["ELIMINAR_PRODUCTO"],
                  payload: newProductos
                });
              } catch (error) {
                dispatch({
                  type: _types_carritoTypes__WEBPACK_IMPORTED_MODULE_3__["ERROR"],
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

    return function (_x4, _x5) {
      return _ref3.apply(this, arguments);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvYWN0aW9ucy9jYXJyaXRvQWN0aW9ucy5qcyJdLCJuYW1lcyI6WyJ0cmFlclByb2R1Y3RvcyIsImRpc3BhdGNoIiwidHlwZSIsIkxPQURJTkciLCJwcm9kdWN0b3MiLCJKU09OIiwicGFyc2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwic3VidG90YWwiLCJmb3JFYWNoIiwicHJkIiwicGFyc2VJbnQiLCJwcmVjaW9VbmlkYWQiLCJjYW50aWRhZCIsInBheWxvYWREYXRhIiwiVFJBRVJfUFJPRFVDVE9TIiwicGF5bG9hZCIsImVycm9yIiwiRVJST1IiLCJhZ3JlZ2FyUHJvZHVjdG8iLCJwcm9kdWN0byIsImdldFN0YXRlIiwiY2Fycml0b1JlZHVjZXIiLCJwcm9kdWN0b1JlcGV0aWRvIiwiZmlsdGVyIiwicmVzIiwiaWRTdWJQcm9kdWN0byIsImxlbmd0aCIsInJlc3RhbnRlcyIsIm5ld1JlcyIsImxpc3RQcm9kdWN0b3NVcGdyYWRlIiwic2V0SXRlbSIsInN0cmluZ2lmeSIsInByZHMiLCJzZXRUaW1lb3V0IiwiQUdSRUdBUl9QUk9EVUNUTyIsImVsaW1pbmFyUHJvZHVjdG8iLCJuZXdQcm9kdWN0b3MiLCJuZXdBcnJheSIsImNvbnNvbGUiLCJsb2ciLCJFTElNSU5BUl9QUk9EVUNUTyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFTyxJQUFNQSxjQUFjLEdBQUcsU0FBakJBLGNBQWlCO0FBQUE7QUFBQSxnTUFBSSxpQkFBT0MsUUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDOUJBLHNCQUFRLENBQUM7QUFDTEMsb0JBQUksRUFBQ0MsMkRBQU9BO0FBRFAsZUFBRCxDQUFSOztBQUdBLGtCQUFJO0FBQ01DLHlCQUROLEdBQ2tCQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0MsWUFBWSxDQUFDQyxPQUFiLENBQXFCLFNBQXJCLENBQVgsQ0FEbEI7QUFFSUMsd0JBRkos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VkQsQ0FVRSxPQUFPcEIsS0FBUCxFQUFjO0FBQ1pqQix3QkFBUSxDQUFDO0FBQ0xDLHNCQUFJLEVBQUNpQix5REFEQTtBQUVMRix5QkFBTyxFQUFDQztBQUZILGlCQUFELENBQVI7QUFJSDs7QUFuQjBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUY7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxDQUF0QyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jaGVja291dC4yODY4YjEzYjhjMTM3OWU5ZmIyMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy9pbXBvcnQge0FQSX0gZnJvbSAnLi4vY29uZmlnL2luZGV4JztcclxuaW1wb3J0IHtUUkFFUl9QUk9EVUNUT1MsQUdSRUdBUl9QUk9EVUNUTyxFTElNSU5BUl9QUk9EVUNUTyxMT0FESU5HLEVSUk9SfSBmcm9tICcuLi90eXBlcy9jYXJyaXRvVHlwZXMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IHRyYWVyUHJvZHVjdG9zID0gKCk9PmFzeW5jIChkaXNwYXRjaCk9PntcclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgICB0eXBlOkxPQURJTkdcclxuICAgIH0pO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBwcm9kdWN0b3MgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjYXJyaXRvJykpO1xyXG4gICAgICAgIGxldCBzdWJ0b3RhbCA9IDA7XHJcbiAgICAgICAgcHJvZHVjdG9zLmZvckVhY2gocHJkID0+IHtcclxuICAgICAgICAgICAgc3VidG90YWwgKz0gcGFyc2VJbnQocHJkLnByZWNpb1VuaWRhZCAqIHByZC5jYW50aWRhZCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgbGV0IHBheWxvYWREYXRhID0ge1xyXG4gICAgICAgICAgICBwcm9kdWN0b3MsXHJcbiAgICAgICAgICAgIHN1YnRvdGFsXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTpUUkFFUl9QUk9EVUNUT1MsXHJcbiAgICAgICAgICAgIHBheWxvYWQ6cGF5bG9hZERhdGFcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOkVSUk9SLFxyXG4gICAgICAgICAgICBwYXlsb2FkOmVycm9yXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGFncmVnYXJQcm9kdWN0byA9IHByb2R1Y3RvPT5hc3luYyAoZGlzcGF0Y2gsZ2V0U3RhdGUpPT57XHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgdHlwZTpMT0FESU5HXHJcbiAgICB9KTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgLy9wcm9kdWN0b3MgcXVlIGhheSBlbiBlbCByZWR1Y2VyXHJcbiAgICAgICAgbGV0IHtwcm9kdWN0b3N9ID0gZ2V0U3RhdGUoKS5jYXJyaXRvUmVkdWNlcjtcclxuICAgICAgICBsZXQgbGlzdFByb2R1Y3Rvc1VwZ3JhZGU7XHJcbiAgICAgICAgbGV0IHByb2R1Y3RvUmVwZXRpZG8gPSBwcm9kdWN0b3MuZmlsdGVyKHJlcz0+cmVzLmlkU3ViUHJvZHVjdG89PXByb2R1Y3RvLmlkU3ViUHJvZHVjdG8pO1xyXG4gICAgICAgIGlmKHByb2R1Y3RvUmVwZXRpZG8ubGVuZ3RoPjApey8vc2kgc2UgaW50ZW50YSBhZ3JlZ2FyIGRlIG51ZXZvIGVsIG1pc21vIHByb2R1Y3RvLCBzZSBzdW1hIGxhIGNhbnRpZGFkLCBubyB0b2RvIGVsIHByb2R1Y3RvLlxyXG4gICAgICAgICAgICBwcm9kdWN0b1JlcGV0aWRvWzBdLmNhbnRpZGFkID0gcHJvZHVjdG9SZXBldGlkb1swXS5jYW50aWRhZCArIHByb2R1Y3RvLmNhbnRpZGFkO1xyXG4gICAgICAgICAgICBsZXQgcmVzdGFudGVzID0gcHJvZHVjdG9zLmZpbHRlcihuZXdSZXM9Pm5ld1Jlcy5pZFN1YlByb2R1Y3RvIT1wcm9kdWN0b1JlcGV0aWRvWzBdLmlkU3ViUHJvZHVjdG8pO1xyXG4gICAgICAgICAgICBpZihyZXN0YW50ZXMubGVuZ3RoPjApe1xyXG4gICAgICAgICAgICAgICAgbGlzdFByb2R1Y3Rvc1VwZ3JhZGUgPSBbXHJcbiAgICAgICAgICAgICAgICAgICAgLi4ucmVzdGFudGVzLFxyXG4gICAgICAgICAgICAgICAgICAgIHByb2R1Y3RvUmVwZXRpZG9bMF1cclxuICAgICAgICAgICAgICAgIF07XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgbGlzdFByb2R1Y3Rvc1VwZ3JhZGUgPSBbXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdG9SZXBldGlkb1swXVxyXG4gICAgICAgICAgICAgICAgXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBsaXN0UHJvZHVjdG9zVXBncmFkZSA9IFtcclxuICAgICAgICAgICAgICAgIC4uLnByb2R1Y3RvcyxcclxuICAgICAgICAgICAgICAgIHByb2R1Y3RvXHJcbiAgICAgICAgICAgIF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vYWN0dWFsaXpvIGxvY2Fsc3RvcmFnZVxyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjYXJyaXRvJyxKU09OLnN0cmluZ2lmeShsaXN0UHJvZHVjdG9zVXBncmFkZSkpO1xyXG5cclxuICAgICAgICAvL2NhbGN1bG8gZWwgc3VidG90YWxcclxuICAgICAgICBjb25zdCBwcmRzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY2Fycml0bycpKTtcclxuICAgICAgICBsZXQgc3VidG90YWwgPSAwO1xyXG4gICAgICAgIHByZHMuZm9yRWFjaChwcmQgPT4ge1xyXG4gICAgICAgICAgICBzdWJ0b3RhbCArPSBwYXJzZUludChwcmQucHJlY2lvVW5pZGFkICogcHJkLmNhbnRpZGFkKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBcclxuICAgICAgICBsZXQgcGF5bG9hZERhdGEgPSB7XHJcbiAgICAgICAgICAgIGxpc3RQcm9kdWN0b3NVcGdyYWRlLFxyXG4gICAgICAgICAgICBzdWJ0b3RhbFxyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgdHlwZTpBR1JFR0FSX1BST0RVQ1RPLFxyXG4gICAgICAgICAgICAgICAgcGF5bG9hZDpwYXlsb2FkRGF0YVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0sIDE1MDApO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTpFUlJPUixcclxuICAgICAgICAgICAgcGF5bG9hZDplcnJvclxyXG4gICAgICAgIH0pIFxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZWxpbWluYXJQcm9kdWN0byA9IGlkU3ViUHJvZHVjdG89PmFzeW5jIChkaXNwYXRjaCxnZXRTdGF0ZSk9PntcclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgICB0eXBlOkxPQURJTkdcclxuICAgIH0pO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB7cHJvZHVjdG9zfSA9IGdldFN0YXRlKCkuY2Fycml0b1JlZHVjZXI7XHJcbiAgICAgICAgLy9maWx0cm8gbG9zIHByb2R1Y3RvcyBxdWUgbm8gdGVuZ2FuIGVsIGlkUHJvZHVjdG8gcXVlIHNlIHJlY2liacOzLiBlbnRvbmNlcyBlbGltaW5vIGVzZSBwcm9kdWN0byB5IGFjdHVhbGl6byBlbCByZWR1Y2VyLlxyXG4gICAgICAgIGNvbnN0IG5ld1Byb2R1Y3RvcyA9IHByb2R1Y3Rvcy5maWx0ZXIobmV3QXJyYXk9Pm5ld0FycmF5LmlkU3ViUHJvZHVjdG8gIT09IGlkU3ViUHJvZHVjdG8pO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKG5ld1Byb2R1Y3Rvcyk7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2NhcnJpdG8nLEpTT04uc3RyaW5naWZ5KG5ld1Byb2R1Y3RvcykpO1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTpFTElNSU5BUl9QUk9EVUNUTyxcclxuICAgICAgICAgICAgcGF5bG9hZDpuZXdQcm9kdWN0b3NcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOkVSUk9SLFxyXG4gICAgICAgICAgICBwYXlsb2FkOmVycm9yXHJcbiAgICAgICAgfSkgICAgXHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9