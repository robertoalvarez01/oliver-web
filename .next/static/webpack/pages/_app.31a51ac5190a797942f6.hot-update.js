webpackHotUpdate_N_E("pages/_app",{

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
      var productos, subtotaltotal, payloadData;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              dispatch({
                type: _types_carritoTypes__WEBPACK_IMPORTED_MODULE_3__["LOADING"]
              });

              try {
                productos = JSON.parse(localStorage.getItem('carrito'));
                subtotaltotal = 0;
                productos.forEach(function (prd) {
                  subtotaltotal += parseInt(prd.precioUnidad * prd.cantidad);
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
      var productos, listProductosUpgrade, productoRepetido, restantes;
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


                localStorage.setItem('carrito', JSON.stringify(listProductosUpgrade));
                setTimeout(function () {
                  dispatch({
                    type: _types_carritoTypes__WEBPACK_IMPORTED_MODULE_3__["AGREGAR_PRODUCTO"],
                    payload: listProductosUpgrade
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvYWN0aW9ucy9jYXJyaXRvQWN0aW9ucy5qcyJdLCJuYW1lcyI6WyJ0cmFlclByb2R1Y3RvcyIsImRpc3BhdGNoIiwidHlwZSIsIkxPQURJTkciLCJwcm9kdWN0b3MiLCJKU09OIiwicGFyc2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwic3VidG90YWx0b3RhbCIsImZvckVhY2giLCJwcmQiLCJwYXJzZUludCIsInByZWNpb1VuaWRhZCIsImNhbnRpZGFkIiwicGF5bG9hZERhdGEiLCJzdWJ0b3RhbCIsIlRSQUVSX1BST0RVQ1RPUyIsInBheWxvYWQiLCJlcnJvciIsIkVSUk9SIiwiYWdyZWdhclByb2R1Y3RvIiwicHJvZHVjdG8iLCJnZXRTdGF0ZSIsImNhcnJpdG9SZWR1Y2VyIiwicHJvZHVjdG9SZXBldGlkbyIsImZpbHRlciIsInJlcyIsImlkU3ViUHJvZHVjdG8iLCJsZW5ndGgiLCJyZXN0YW50ZXMiLCJuZXdSZXMiLCJsaXN0UHJvZHVjdG9zVXBncmFkZSIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJzZXRUaW1lb3V0IiwiQUdSRUdBUl9QUk9EVUNUTyIsImVsaW1pbmFyUHJvZHVjdG8iLCJuZXdQcm9kdWN0b3MiLCJuZXdBcnJheSIsImNvbnNvbGUiLCJsb2ciLCJFTElNSU5BUl9QUk9EVUNUTyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFTyxJQUFNQSxjQUFjLEdBQUcsU0FBakJBLGNBQWlCO0FBQUE7QUFBQSxnTUFBSSxpQkFBT0MsUUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDOUJBLHNCQUFRLENBQUM7QUFDTEMsb0JBQUksRUFBQ0MsMkRBQU9BO0FBRFAsZUFBRCxDQUFSOztBQUdBLGtCQUFJO0FBQ01DLHlCQUROLEdBQ2tCQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0MsWUFBWSxDQUFDQyxPQUFiLENBQXFCLFNBQXJCLENBQVgsQ0FEbEI7QUFF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QUE7QUFBQTtBQUFBLENBQWhDO0FBNENBLElBQU1rQixnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLENBQUFULGFBQWE7QUFBQTtBQUFBLGlNQUFFLGtCQUFPM0IsUUFBUCxFQUFnQnNCLFFBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUMzQ3RCLHNCQUFRLENBQUM7QUFDTEMsb0JBQUksRUFBQ0MsMkRBQU9BO0FBRFAsZUFBRCxDQUFSOztBQUdBLGtCQUFJO0FBQ09DLHlCQURQLEdBQ29CbUIsUUFBUSxHQUFHQyxjQUQvQixDQUNPcEIsU0FEUCxFQUVBOztBQUNNa0MsNEJBSE4sR0FHcUJsQyxTQUFTLENBQUNzQixNQUFWLENBQWlCLFVBQUFhLFFBQVE7QUFBQSx5QkFBRUEsUUFBUSxDQUFDWCxhQUFULEtBQTJCQSxhQUE3QjtBQUFBLGlCQUF6QixDQUhyQjtBQUlBWSx1QkFBTyxDQUFDQyxHQUFSLENBQVlILFlBQVo7QUFDQS9CLDRCQUFZLENBQUMwQixPQUFiLENBQXFCLFNBQXJCLEVBQStCNUIsSUFBSSxDQUFDNkIsU0FBTCxDQUFlSSxZQUFmLENBQS9CO0FBQ0FyQyx3QkFBUSxDQUFDO0FBQ0xDLHNCQUFJLEVBQUN3QyxxRUFEQTtBQUVMeEIseUJBQU8sRUFBQ29CO0FBRkgsaUJBQUQsQ0FBUjtBQUlILGVBVkQsQ0FVRSxPQUFPbkIsS0FBUCxFQUFjO0FBQ1psQix3QkFBUSxDQUFDO0FBQ0xDLHNCQUFJLEVBQUNrQix5REFEQTtBQUVMRix5QkFBTyxFQUFDQztBQUZILGlCQUFELENBQVI7QUFJSDs7QUFuQjBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUY7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxDQUF0QyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjMxYTUxYWM1MTkwYTc5Nzk0MmY2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvL2ltcG9ydCB7QVBJfSBmcm9tICcuLi9jb25maWcvaW5kZXgnO1xyXG5pbXBvcnQge1RSQUVSX1BST0RVQ1RPUyxBR1JFR0FSX1BST0RVQ1RPLEVMSU1JTkFSX1BST0RVQ1RPLExPQURJTkcsRVJST1J9IGZyb20gJy4uL3R5cGVzL2NhcnJpdG9UeXBlcyc7XHJcblxyXG5leHBvcnQgY29uc3QgdHJhZXJQcm9kdWN0b3MgPSAoKT0+YXN5bmMgKGRpc3BhdGNoKT0+e1xyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICAgIHR5cGU6TE9BRElOR1xyXG4gICAgfSk7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHByb2R1Y3RvcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2NhcnJpdG8nKSk7XHJcbiAgICAgICAgbGV0IHN1YnRvdGFsdG90YWwgPSAwO1xyXG4gICAgICAgIHByb2R1Y3Rvcy5mb3JFYWNoKHByZCA9PiB7XHJcbiAgICAgICAgICAgIHN1YnRvdGFsdG90YWwgKz0gcGFyc2VJbnQocHJkLnByZWNpb1VuaWRhZCAqIHByZC5jYW50aWRhZCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgbGV0IHBheWxvYWREYXRhID0ge1xyXG4gICAgICAgICAgICBwcm9kdWN0b3MsXHJcbiAgICAgICAgICAgIHN1YnRvdGFsXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTpUUkFFUl9QUk9EVUNUT1MsXHJcbiAgICAgICAgICAgIHBheWxvYWQ6cGF5bG9hZERhdGFcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOkVSUk9SLFxyXG4gICAgICAgICAgICBwYXlsb2FkOmVycm9yXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGFncmVnYXJQcm9kdWN0byA9IHByb2R1Y3RvPT5hc3luYyAoZGlzcGF0Y2gsZ2V0U3RhdGUpPT57XHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgdHlwZTpMT0FESU5HXHJcbiAgICB9KTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgLy9wcm9kdWN0b3MgcXVlIGhheSBlbiBlbCByZWR1Y2VyXHJcbiAgICAgICAgbGV0IHtwcm9kdWN0b3N9ID0gZ2V0U3RhdGUoKS5jYXJyaXRvUmVkdWNlcjtcclxuICAgICAgICBsZXQgbGlzdFByb2R1Y3Rvc1VwZ3JhZGU7XHJcbiAgICAgICAgbGV0IHByb2R1Y3RvUmVwZXRpZG8gPSBwcm9kdWN0b3MuZmlsdGVyKHJlcz0+cmVzLmlkU3ViUHJvZHVjdG89PXByb2R1Y3RvLmlkU3ViUHJvZHVjdG8pO1xyXG4gICAgICAgIGlmKHByb2R1Y3RvUmVwZXRpZG8ubGVuZ3RoPjApey8vc2kgc2UgaW50ZW50YSBhZ3JlZ2FyIGRlIG51ZXZvIGVsIG1pc21vIHByb2R1Y3RvLCBzZSBzdW1hIGxhIGNhbnRpZGFkLCBubyB0b2RvIGVsIHByb2R1Y3RvLlxyXG4gICAgICAgICAgICBwcm9kdWN0b1JlcGV0aWRvWzBdLmNhbnRpZGFkID0gcHJvZHVjdG9SZXBldGlkb1swXS5jYW50aWRhZCArIHByb2R1Y3RvLmNhbnRpZGFkO1xyXG4gICAgICAgICAgICBsZXQgcmVzdGFudGVzID0gcHJvZHVjdG9zLmZpbHRlcihuZXdSZXM9Pm5ld1Jlcy5pZFN1YlByb2R1Y3RvIT1wcm9kdWN0b1JlcGV0aWRvWzBdLmlkU3ViUHJvZHVjdG8pO1xyXG4gICAgICAgICAgICBpZihyZXN0YW50ZXMubGVuZ3RoPjApe1xyXG4gICAgICAgICAgICAgICAgbGlzdFByb2R1Y3Rvc1VwZ3JhZGUgPSBbXHJcbiAgICAgICAgICAgICAgICAgICAgLi4ucmVzdGFudGVzLFxyXG4gICAgICAgICAgICAgICAgICAgIHByb2R1Y3RvUmVwZXRpZG9bMF1cclxuICAgICAgICAgICAgICAgIF07XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgbGlzdFByb2R1Y3Rvc1VwZ3JhZGUgPSBbXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdG9SZXBldGlkb1swXVxyXG4gICAgICAgICAgICAgICAgXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBsaXN0UHJvZHVjdG9zVXBncmFkZSA9IFtcclxuICAgICAgICAgICAgICAgIC4uLnByb2R1Y3RvcyxcclxuICAgICAgICAgICAgICAgIHByb2R1Y3RvXHJcbiAgICAgICAgICAgIF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vYWN0dWFsaXpvIGxvY2Fsc3RvcmFnZVxyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjYXJyaXRvJyxKU09OLnN0cmluZ2lmeShsaXN0UHJvZHVjdG9zVXBncmFkZSkpO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOkFHUkVHQVJfUFJPRFVDVE8sXHJcbiAgICAgICAgICAgICAgICBwYXlsb2FkOmxpc3RQcm9kdWN0b3NVcGdyYWRlXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSwgMTUwMCk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOkVSUk9SLFxyXG4gICAgICAgICAgICBwYXlsb2FkOmVycm9yXHJcbiAgICAgICAgfSkgXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBlbGltaW5hclByb2R1Y3RvID0gaWRTdWJQcm9kdWN0bz0+YXN5bmMgKGRpc3BhdGNoLGdldFN0YXRlKT0+e1xyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICAgIHR5cGU6TE9BRElOR1xyXG4gICAgfSk7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHtwcm9kdWN0b3N9ID0gZ2V0U3RhdGUoKS5jYXJyaXRvUmVkdWNlcjtcclxuICAgICAgICAvL2ZpbHRybyBsb3MgcHJvZHVjdG9zIHF1ZSBubyB0ZW5nYW4gZWwgaWRQcm9kdWN0byBxdWUgc2UgcmVjaWJpw7MuIGVudG9uY2VzIGVsaW1pbm8gZXNlIHByb2R1Y3RvIHkgYWN0dWFsaXpvIGVsIHJlZHVjZXIuXHJcbiAgICAgICAgY29uc3QgbmV3UHJvZHVjdG9zID0gcHJvZHVjdG9zLmZpbHRlcihuZXdBcnJheT0+bmV3QXJyYXkuaWRTdWJQcm9kdWN0byAhPT0gaWRTdWJQcm9kdWN0byk7XHJcbiAgICAgICAgY29uc29sZS5sb2cobmV3UHJvZHVjdG9zKTtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY2Fycml0bycsSlNPTi5zdHJpbmdpZnkobmV3UHJvZHVjdG9zKSk7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOkVMSU1JTkFSX1BST0RVQ1RPLFxyXG4gICAgICAgICAgICBwYXlsb2FkOm5ld1Byb2R1Y3Rvc1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6RVJST1IsXHJcbiAgICAgICAgICAgIHBheWxvYWQ6ZXJyb3JcclxuICAgICAgICB9KSAgICBcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0=