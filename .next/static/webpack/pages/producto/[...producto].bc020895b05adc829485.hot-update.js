webpackHotUpdate_N_E("pages/producto/[...producto]",{

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
      var productos, newProductos, prds, subtotal, payloadData;
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
                }); //console.log(newProductos);

                localStorage.setItem('carrito', JSON.stringify(newProductos)); //calculo el subtotal

                prds = JSON.parse(localStorage.getItem('carrito'));
                subtotal = 0;
                prds.forEach(function (prd) {
                  subtotal += parseInt(prd.precioUnidad * prd.cantidad);
                });
                payloadData = {
                  newProductos: newProductos,
                  subtotal: subtotal
                };
                dispatch({
                  type: _types_carritoTypes__WEBPACK_IMPORTED_MODULE_3__["ELIMINAR_PRODUCTO"],
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvYWN0aW9ucy9jYXJyaXRvQWN0aW9ucy5qcyJdLCJuYW1lcyI6WyJ0cmFlclByb2R1Y3RvcyIsImRpc3BhdGNoIiwidHlwZSIsIkxPQURJTkciLCJwcm9kdWN0b3MiLCJKU09OIiwicGFyc2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwic3VidG90YWwiLCJmb3JFYWNoIiwicHJkIiwicGFyc2VJbnQiLCJwcmVjaW9VbmlkYWQiLCJjYW50aWRhZCIsInBheWxvYWREYXRhIiwiVFJBRVJfUFJPRFVDVE9TIiwicGF5bG9hZCIsImVycm9yIiwiRVJST1IiLCJhZ3JlZ2FyUHJvZHVjdG8iLCJwcm9kdWN0byIsImdldFN0YXRlIiwiY2Fycml0b1JlZHVjZXIiLCJwcm9kdWN0b1JlcGV0aWRvIiwiZmlsdGVyIiwicmVzIiwiaWRTdWJQcm9kdWN0byIsImxlbmd0aCIsInJlc3RhbnRlcyIsIm5ld1JlcyIsImxpc3RQcm9kdWN0b3NVcGdyYWRlIiwic2V0SXRlbSIsInN0cmluZ2lmeSIsInByZHMiLCJzZXRUaW1lb3V0IiwiQUdSRUdBUl9QUk9EVUNUTyIsImVsaW1pbmFyUHJvZHVjdG8iLCJuZXdQcm9kdWN0b3MiLCJuZXdBcnJheSIsIkVMSU1JTkFSX1BST0RVQ1RPIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVPLElBQU1BLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUI7QUFBQTtBQUFBLGdNQUFJLGlCQUFPQyxRQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUM5QkEsc0JBQVEsQ0FBQztBQUNMQyxvQkFBSSxFQUFDQywyREFBT0E7QUFEUCxlQUFELENBQVI7O0FBR0Esa0JBQUk7QUFDTUMseUJBRE4sR0FDa0JDLElBQUksQ0FBQ0MsS0FBTCxDQUFXQyxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsU0FBckIsQ0FBWCxDQURsQjtBQUVJQyx3QkFGSixHQUVlLENBRmY7QUFHQUws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QixPQUFMLENBQWEsVUFBQUMsR0FBRyxFQUFJO0FBQ2hCRiwwQkFBUSxJQUFJRyxRQUFRLENBQUNELEdBQUcsQ0FBQ0UsWUFBSixHQUFtQkYsR0FBRyxDQUFDRyxRQUF4QixDQUFwQjtBQUNILGlCQUZEO0FBSUlDLDJCQWRKLEdBY2tCO0FBQ2R1Qiw4QkFBWSxFQUFaQSxZQURjO0FBRWQ3QiwwQkFBUSxFQUFSQTtBQUZjLGlCQWRsQjtBQWtCQVIsd0JBQVEsQ0FBQztBQUNMQyxzQkFBSSxFQUFDc0MscUVBREE7QUFFTHZCLHlCQUFPLEVBQUNGO0FBRkgsaUJBQUQsQ0FBUjtBQUlILGVBdEJELENBc0JFLE9BQU9HLEtBQVAsRUFBYztBQUNaakIsd0JBQVEsQ0FBQztBQUNMQyxzQkFBSSxFQUFDaUIseURBREE7QUFFTEYseUJBQU8sRUFBQ0M7QUFGSCxpQkFBRCxDQUFSO0FBSUg7O0FBL0IwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFGOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsQ0FBdEMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvZHVjdG8vWy4uLnByb2R1Y3RvXS5iYzAyMDg5NWIwNWFkYzgyOTQ4NS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy9pbXBvcnQge0FQSX0gZnJvbSAnLi4vY29uZmlnL2luZGV4JztcclxuaW1wb3J0IHtUUkFFUl9QUk9EVUNUT1MsQUdSRUdBUl9QUk9EVUNUTyxFTElNSU5BUl9QUk9EVUNUTyxMT0FESU5HLEVSUk9SfSBmcm9tICcuLi90eXBlcy9jYXJyaXRvVHlwZXMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IHRyYWVyUHJvZHVjdG9zID0gKCk9PmFzeW5jIChkaXNwYXRjaCk9PntcclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgICB0eXBlOkxPQURJTkdcclxuICAgIH0pO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBwcm9kdWN0b3MgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjYXJyaXRvJykpO1xyXG4gICAgICAgIGxldCBzdWJ0b3RhbCA9IDA7XHJcbiAgICAgICAgcHJvZHVjdG9zLmZvckVhY2gocHJkID0+IHtcclxuICAgICAgICAgICAgc3VidG90YWwgKz0gcGFyc2VJbnQocHJkLnByZWNpb1VuaWRhZCAqIHByZC5jYW50aWRhZCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgbGV0IHBheWxvYWREYXRhID0ge1xyXG4gICAgICAgICAgICBwcm9kdWN0b3MsXHJcbiAgICAgICAgICAgIHN1YnRvdGFsXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTpUUkFFUl9QUk9EVUNUT1MsXHJcbiAgICAgICAgICAgIHBheWxvYWQ6cGF5bG9hZERhdGFcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOkVSUk9SLFxyXG4gICAgICAgICAgICBwYXlsb2FkOmVycm9yXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGFncmVnYXJQcm9kdWN0byA9IHByb2R1Y3RvPT5hc3luYyAoZGlzcGF0Y2gsZ2V0U3RhdGUpPT57XHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgdHlwZTpMT0FESU5HXHJcbiAgICB9KTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgLy9wcm9kdWN0b3MgcXVlIGhheSBlbiBlbCByZWR1Y2VyXHJcbiAgICAgICAgbGV0IHtwcm9kdWN0b3N9ID0gZ2V0U3RhdGUoKS5jYXJyaXRvUmVkdWNlcjtcclxuICAgICAgICBsZXQgbGlzdFByb2R1Y3Rvc1VwZ3JhZGU7XHJcbiAgICAgICAgbGV0IHByb2R1Y3RvUmVwZXRpZG8gPSBwcm9kdWN0b3MuZmlsdGVyKHJlcz0+cmVzLmlkU3ViUHJvZHVjdG89PXByb2R1Y3RvLmlkU3ViUHJvZHVjdG8pO1xyXG4gICAgICAgIGlmKHByb2R1Y3RvUmVwZXRpZG8ubGVuZ3RoPjApey8vc2kgc2UgaW50ZW50YSBhZ3JlZ2FyIGRlIG51ZXZvIGVsIG1pc21vIHByb2R1Y3RvLCBzZSBzdW1hIGxhIGNhbnRpZGFkLCBubyB0b2RvIGVsIHByb2R1Y3RvLlxyXG4gICAgICAgICAgICBwcm9kdWN0b1JlcGV0aWRvWzBdLmNhbnRpZGFkID0gcHJvZHVjdG9SZXBldGlkb1swXS5jYW50aWRhZCArIHByb2R1Y3RvLmNhbnRpZGFkO1xyXG4gICAgICAgICAgICBsZXQgcmVzdGFudGVzID0gcHJvZHVjdG9zLmZpbHRlcihuZXdSZXM9Pm5ld1Jlcy5pZFN1YlByb2R1Y3RvIT1wcm9kdWN0b1JlcGV0aWRvWzBdLmlkU3ViUHJvZHVjdG8pO1xyXG4gICAgICAgICAgICBpZihyZXN0YW50ZXMubGVuZ3RoPjApe1xyXG4gICAgICAgICAgICAgICAgbGlzdFByb2R1Y3Rvc1VwZ3JhZGUgPSBbXHJcbiAgICAgICAgICAgICAgICAgICAgLi4ucmVzdGFudGVzLFxyXG4gICAgICAgICAgICAgICAgICAgIHByb2R1Y3RvUmVwZXRpZG9bMF1cclxuICAgICAgICAgICAgICAgIF07XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgbGlzdFByb2R1Y3Rvc1VwZ3JhZGUgPSBbXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdG9SZXBldGlkb1swXVxyXG4gICAgICAgICAgICAgICAgXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBsaXN0UHJvZHVjdG9zVXBncmFkZSA9IFtcclxuICAgICAgICAgICAgICAgIC4uLnByb2R1Y3RvcyxcclxuICAgICAgICAgICAgICAgIHByb2R1Y3RvXHJcbiAgICAgICAgICAgIF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vYWN0dWFsaXpvIGxvY2Fsc3RvcmFnZVxyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjYXJyaXRvJyxKU09OLnN0cmluZ2lmeShsaXN0UHJvZHVjdG9zVXBncmFkZSkpO1xyXG5cclxuICAgICAgICAvL2NhbGN1bG8gZWwgc3VidG90YWxcclxuICAgICAgICBjb25zdCBwcmRzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY2Fycml0bycpKTtcclxuICAgICAgICBsZXQgc3VidG90YWwgPSAwO1xyXG4gICAgICAgIHByZHMuZm9yRWFjaChwcmQgPT4ge1xyXG4gICAgICAgICAgICBzdWJ0b3RhbCArPSBwYXJzZUludChwcmQucHJlY2lvVW5pZGFkICogcHJkLmNhbnRpZGFkKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgbGV0IHBheWxvYWREYXRhID0ge1xyXG4gICAgICAgICAgICBsaXN0UHJvZHVjdG9zVXBncmFkZSxcclxuICAgICAgICAgICAgc3VidG90YWxcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6QUdSRUdBUl9QUk9EVUNUTyxcclxuICAgICAgICAgICAgICAgIHBheWxvYWQ6cGF5bG9hZERhdGFcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9LCAxNTAwKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6RVJST1IsXHJcbiAgICAgICAgICAgIHBheWxvYWQ6ZXJyb3JcclxuICAgICAgICB9KSBcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGVsaW1pbmFyUHJvZHVjdG8gPSBpZFN1YlByb2R1Y3RvPT5hc3luYyAoZGlzcGF0Y2gsZ2V0U3RhdGUpPT57XHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgdHlwZTpMT0FESU5HXHJcbiAgICB9KTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3Qge3Byb2R1Y3Rvc30gPSBnZXRTdGF0ZSgpLmNhcnJpdG9SZWR1Y2VyO1xyXG4gICAgICAgIC8vZmlsdHJvIGxvcyBwcm9kdWN0b3MgcXVlIG5vIHRlbmdhbiBlbCBpZFByb2R1Y3RvIHF1ZSBzZSByZWNpYmnDsy4gZW50b25jZXMgZWxpbWlubyBlc2UgcHJvZHVjdG8geSBhY3R1YWxpem8gZWwgcmVkdWNlci5cclxuICAgICAgICBjb25zdCBuZXdQcm9kdWN0b3MgPSBwcm9kdWN0b3MuZmlsdGVyKG5ld0FycmF5PT5uZXdBcnJheS5pZFN1YlByb2R1Y3RvICE9PSBpZFN1YlByb2R1Y3RvKTtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKG5ld1Byb2R1Y3Rvcyk7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2NhcnJpdG8nLEpTT04uc3RyaW5naWZ5KG5ld1Byb2R1Y3RvcykpO1xyXG5cclxuICAgICAgICAvL2NhbGN1bG8gZWwgc3VidG90YWxcclxuICAgICAgICBjb25zdCBwcmRzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY2Fycml0bycpKTtcclxuICAgICAgICBsZXQgc3VidG90YWwgPSAwO1xyXG4gICAgICAgIHByZHMuZm9yRWFjaChwcmQgPT4ge1xyXG4gICAgICAgICAgICBzdWJ0b3RhbCArPSBwYXJzZUludChwcmQucHJlY2lvVW5pZGFkICogcHJkLmNhbnRpZGFkKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBcclxuICAgICAgICBsZXQgcGF5bG9hZERhdGEgPSB7XHJcbiAgICAgICAgICAgIG5ld1Byb2R1Y3RvcyxcclxuICAgICAgICAgICAgc3VidG90YWxcclxuICAgICAgICB9XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOkVMSU1JTkFSX1BST0RVQ1RPLFxyXG4gICAgICAgICAgICBwYXlsb2FkOnBheWxvYWREYXRhXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTpFUlJPUixcclxuICAgICAgICAgICAgcGF5bG9hZDplcnJvclxyXG4gICAgICAgIH0pICAgIFxyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==