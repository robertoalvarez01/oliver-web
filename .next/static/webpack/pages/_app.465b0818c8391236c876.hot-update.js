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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvYWN0aW9ucy9jYXJyaXRvQWN0aW9ucy5qcyJdLCJuYW1lcyI6WyJ0cmFlclByb2R1Y3RvcyIsImRpc3BhdGNoIiwidHlwZSIsIkxPQURJTkciLCJwcm9kdWN0b3MiLCJKU09OIiwicGFyc2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwic3VidG90YWwiLCJmb3JFYWNoIiwicHJkIiwicGFyc2VJbnQiLCJwcmVjaW9VbmlkYWQiLCJjYW50aWRhZCIsInBheWxvYWREYXRhIiwiVFJBRVJfUFJPRFVDVE9TIiwicGF5bG9hZCIsImVycm9yIiwiRVJST1IiLCJhZ3JlZ2FyUHJvZHVjdG8iLCJwcm9kdWN0byIsImdldFN0YXRlIiwiY2Fycml0b1JlZHVjZXIiLCJwcm9kdWN0b1JlcGV0aWRvIiwiZmlsdGVyIiwicmVzIiwiaWRTdWJQcm9kdWN0byIsImxlbmd0aCIsInJlc3RhbnRlcyIsIm5ld1JlcyIsImxpc3RQcm9kdWN0b3NVcGdyYWRlIiwic2V0SXRlbSIsInN0cmluZ2lmeSIsInNldFRpbWVvdXQiLCJBR1JFR0FSX1BST0RVQ1RPIiwiZWxpbWluYXJQcm9kdWN0byIsIm5ld1Byb2R1Y3RvcyIsIm5ld0FycmF5IiwiY29uc29sZSIsImxvZyIsIkVMSU1JTkFSX1BST0RVQ1RPIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVPLElBQU1BLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUI7QUFBQTtBQUFBLGdNQUFJLGlCQUFPQyxRQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUM5QkEsc0JBQVEsQ0FBQztBQUNMQyxvQkFBSSxFQUFDQywyREFBT0E7QUFEUCxlQUFELENBQVI7O0FBR0Esa0JBQUk7QUFDTUMseUJBRE4sR0FDa0JDLElBQUksQ0FBQ0MsS0FBTCxDQUFXQyxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsU0FBckIsQ0FBWCxDQURsQjtBQUVJQyx3QkFGSixHQUVlLENB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QUE0Q0EsSUFBTWtCLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsQ0FBQVQsYUFBYTtBQUFBO0FBQUEsaU1BQUUsa0JBQU8xQixRQUFQLEVBQWdCcUIsUUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQzNDckIsc0JBQVEsQ0FBQztBQUNMQyxvQkFBSSxFQUFDQywyREFBT0E7QUFEUCxlQUFELENBQVI7O0FBR0Esa0JBQUk7QUFDT0MseUJBRFAsR0FDb0JrQixRQUFRLEdBQUdDLGNBRC9CLENBQ09uQixTQURQLEVBRUE7O0FBQ01pQyw0QkFITixHQUdxQmpDLFNBQVMsQ0FBQ3FCLE1BQVYsQ0FBaUIsVUFBQWEsUUFBUTtBQUFBLHlCQUFFQSxRQUFRLENBQUNYLGFBQVQsS0FBMkJBLGFBQTdCO0FBQUEsaUJBQXpCLENBSHJCO0FBSUFZLHVCQUFPLENBQUNDLEdBQVIsQ0FBWUgsWUFBWjtBQUNBOUIsNEJBQVksQ0FBQ3lCLE9BQWIsQ0FBcUIsU0FBckIsRUFBK0IzQixJQUFJLENBQUM0QixTQUFMLENBQWVJLFlBQWYsQ0FBL0I7QUFDQXBDLHdCQUFRLENBQUM7QUFDTEMsc0JBQUksRUFBQ3VDLHFFQURBO0FBRUx4Qix5QkFBTyxFQUFDb0I7QUFGSCxpQkFBRCxDQUFSO0FBSUgsZUFWRCxDQVVFLE9BQU9uQixLQUFQLEVBQWM7QUFDWmpCLHdCQUFRLENBQUM7QUFDTEMsc0JBQUksRUFBQ2lCLHlEQURBO0FBRUxGLHlCQUFPLEVBQUNDO0FBRkgsaUJBQUQsQ0FBUjtBQUlIOztBQW5CMEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBRjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLENBQXRDIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuNDY1YjA4MThjODM5MTIzNmM4NzYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vaW1wb3J0IHtBUEl9IGZyb20gJy4uL2NvbmZpZy9pbmRleCc7XHJcbmltcG9ydCB7VFJBRVJfUFJPRFVDVE9TLEFHUkVHQVJfUFJPRFVDVE8sRUxJTUlOQVJfUFJPRFVDVE8sTE9BRElORyxFUlJPUn0gZnJvbSAnLi4vdHlwZXMvY2Fycml0b1R5cGVzJztcclxuXHJcbmV4cG9ydCBjb25zdCB0cmFlclByb2R1Y3RvcyA9ICgpPT5hc3luYyAoZGlzcGF0Y2gpPT57XHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgdHlwZTpMT0FESU5HXHJcbiAgICB9KTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcHJvZHVjdG9zID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY2Fycml0bycpKTtcclxuICAgICAgICBsZXQgc3VidG90YWwgPSAwO1xyXG4gICAgICAgIHByb2R1Y3Rvcy5mb3JFYWNoKHByZCA9PiB7XHJcbiAgICAgICAgICAgIHN1YnRvdGFsICs9IHBhcnNlSW50KHByZC5wcmVjaW9VbmlkYWQgKiBwcmQuY2FudGlkYWQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGxldCBwYXlsb2FkRGF0YSA9IHtcclxuICAgICAgICAgICAgcHJvZHVjdG9zLFxyXG4gICAgICAgICAgICBzdWJ0b3RhbFxyXG4gICAgICAgIH1cclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6VFJBRVJfUFJPRFVDVE9TLFxyXG4gICAgICAgICAgICBwYXlsb2FkOnBheWxvYWREYXRhXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTpFUlJPUixcclxuICAgICAgICAgICAgcGF5bG9hZDplcnJvclxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBhZ3JlZ2FyUHJvZHVjdG8gPSBwcm9kdWN0bz0+YXN5bmMgKGRpc3BhdGNoLGdldFN0YXRlKT0+e1xyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICAgIHR5cGU6TE9BRElOR1xyXG4gICAgfSk7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIC8vcHJvZHVjdG9zIHF1ZSBoYXkgZW4gZWwgcmVkdWNlclxyXG4gICAgICAgIGxldCB7cHJvZHVjdG9zfSA9IGdldFN0YXRlKCkuY2Fycml0b1JlZHVjZXI7XHJcbiAgICAgICAgbGV0IGxpc3RQcm9kdWN0b3NVcGdyYWRlO1xyXG4gICAgICAgIGxldCBwcm9kdWN0b1JlcGV0aWRvID0gcHJvZHVjdG9zLmZpbHRlcihyZXM9PnJlcy5pZFN1YlByb2R1Y3RvPT1wcm9kdWN0by5pZFN1YlByb2R1Y3RvKTtcclxuICAgICAgICBpZihwcm9kdWN0b1JlcGV0aWRvLmxlbmd0aD4wKXsvL3NpIHNlIGludGVudGEgYWdyZWdhciBkZSBudWV2byBlbCBtaXNtbyBwcm9kdWN0bywgc2Ugc3VtYSBsYSBjYW50aWRhZCwgbm8gdG9kbyBlbCBwcm9kdWN0by5cclxuICAgICAgICAgICAgcHJvZHVjdG9SZXBldGlkb1swXS5jYW50aWRhZCA9IHByb2R1Y3RvUmVwZXRpZG9bMF0uY2FudGlkYWQgKyBwcm9kdWN0by5jYW50aWRhZDtcclxuICAgICAgICAgICAgbGV0IHJlc3RhbnRlcyA9IHByb2R1Y3Rvcy5maWx0ZXIobmV3UmVzPT5uZXdSZXMuaWRTdWJQcm9kdWN0byE9cHJvZHVjdG9SZXBldGlkb1swXS5pZFN1YlByb2R1Y3RvKTtcclxuICAgICAgICAgICAgaWYocmVzdGFudGVzLmxlbmd0aD4wKXtcclxuICAgICAgICAgICAgICAgIGxpc3RQcm9kdWN0b3NVcGdyYWRlID0gW1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLnJlc3RhbnRlcyxcclxuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0b1JlcGV0aWRvWzBdXHJcbiAgICAgICAgICAgICAgICBdO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIGxpc3RQcm9kdWN0b3NVcGdyYWRlID0gW1xyXG4gICAgICAgICAgICAgICAgICAgIHByb2R1Y3RvUmVwZXRpZG9bMF1cclxuICAgICAgICAgICAgICAgIF07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgbGlzdFByb2R1Y3Rvc1VwZ3JhZGUgPSBbXHJcbiAgICAgICAgICAgICAgICAuLi5wcm9kdWN0b3MsXHJcbiAgICAgICAgICAgICAgICBwcm9kdWN0b1xyXG4gICAgICAgICAgICBdO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL2FjdHVhbGl6byBsb2NhbHN0b3JhZ2VcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY2Fycml0bycsSlNPTi5zdHJpbmdpZnkobGlzdFByb2R1Y3Rvc1VwZ3JhZGUpKTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgdHlwZTpBR1JFR0FSX1BST0RVQ1RPLFxyXG4gICAgICAgICAgICAgICAgcGF5bG9hZDpsaXN0UHJvZHVjdG9zVXBncmFkZVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0sIDE1MDApO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTpFUlJPUixcclxuICAgICAgICAgICAgcGF5bG9hZDplcnJvclxyXG4gICAgICAgIH0pIFxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZWxpbWluYXJQcm9kdWN0byA9IGlkU3ViUHJvZHVjdG89PmFzeW5jIChkaXNwYXRjaCxnZXRTdGF0ZSk9PntcclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgICB0eXBlOkxPQURJTkdcclxuICAgIH0pO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB7cHJvZHVjdG9zfSA9IGdldFN0YXRlKCkuY2Fycml0b1JlZHVjZXI7XHJcbiAgICAgICAgLy9maWx0cm8gbG9zIHByb2R1Y3RvcyBxdWUgbm8gdGVuZ2FuIGVsIGlkUHJvZHVjdG8gcXVlIHNlIHJlY2liacOzLiBlbnRvbmNlcyBlbGltaW5vIGVzZSBwcm9kdWN0byB5IGFjdHVhbGl6byBlbCByZWR1Y2VyLlxyXG4gICAgICAgIGNvbnN0IG5ld1Byb2R1Y3RvcyA9IHByb2R1Y3Rvcy5maWx0ZXIobmV3QXJyYXk9Pm5ld0FycmF5LmlkU3ViUHJvZHVjdG8gIT09IGlkU3ViUHJvZHVjdG8pO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKG5ld1Byb2R1Y3Rvcyk7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2NhcnJpdG8nLEpTT04uc3RyaW5naWZ5KG5ld1Byb2R1Y3RvcykpO1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTpFTElNSU5BUl9QUk9EVUNUTyxcclxuICAgICAgICAgICAgcGF5bG9hZDpuZXdQcm9kdWN0b3NcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOkVSUk9SLFxyXG4gICAgICAgICAgICBwYXlsb2FkOmVycm9yXHJcbiAgICAgICAgfSkgICAgXHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9