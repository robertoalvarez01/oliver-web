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


                localStorage.setItem('carrito', JSON.stringify(listProductosUpgrade));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvYWN0aW9ucy9jYXJyaXRvQWN0aW9ucy5qcyJdLCJuYW1lcyI6WyJ0cmFlclByb2R1Y3RvcyIsImRpc3BhdGNoIiwidHlwZSIsIkxPQURJTkciLCJwcm9kdWN0b3MiLCJKU09OIiwicGFyc2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwic3VidG90YWwiLCJmb3JFYWNoIiwicHJkIiwicGFyc2VJbnQiLCJwcmVjaW9VbmlkYWQiLCJjYW50aWRhZCIsInBheWxvYWREYXRhIiwiVFJBRVJfUFJPRFVDVE9TIiwicGF5bG9hZCIsImVycm9yIiwiRVJST1IiLCJhZ3JlZ2FyUHJvZHVjdG8iLCJwcm9kdWN0byIsImdldFN0YXRlIiwiY2Fycml0b1JlZHVjZXIiLCJwcm9kdWN0b1JlcGV0aWRvIiwiZmlsdGVyIiwicmVzIiwiaWRTdWJQcm9kdWN0byIsImxlbmd0aCIsInJlc3RhbnRlcyIsIm5ld1JlcyIsImxpc3RQcm9kdWN0b3NVcGdyYWRlIiwic2V0SXRlbSIsInN0cmluZ2lmeSIsInByZHMiLCJzZXRUaW1lb3V0IiwiQUdSRUdBUl9QUk9EVUNUTyIsImVsaW1pbmFyUHJvZHVjdG8iLCJuZXdQcm9kdWN0b3MiLCJuZXdBcnJheSIsImNvbnNvbGUiLCJsb2ciLCJFTElNSU5BUl9QUk9EVUNUTyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFTyxJQUFNQSxjQUFjLEdBQUcsU0FBakJBLGNBQWlCO0FBQUE7QUFBQSxnTUFBSSxpQkFBT0MsUUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDOUJBLHNCQUFRLENBQUM7QUFDTEMsb0JBQUksRUFBQ0MsMkRBQU9BO0FBRFAsZUFBRCxDQUFSOztBQUdBLGtCQUFJO0FBQ01DLHlCQUROLEdBQ2tCQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0MsWUFBWSxDQUFDQyxPQUFiLENBQXFCLFNBQXJCLENBQVgsQ0FEbEI7QUFFSUMsd0JBRkos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QixLQUFQLEVBQWM7QUFDWmpCLHdCQUFRLENBQUM7QUFDTEMsc0JBQUksRUFBQ2lCLHlEQURBO0FBRUxGLHlCQUFPLEVBQUNDO0FBRkgsaUJBQUQsQ0FBUjtBQUlIOztBQW5CMEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBRjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLENBQXRDIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2NoZWNrb3V0LmIzNjFkOWUxZmZlNzQwOWQyMzdhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvL2ltcG9ydCB7QVBJfSBmcm9tICcuLi9jb25maWcvaW5kZXgnO1xyXG5pbXBvcnQge1RSQUVSX1BST0RVQ1RPUyxBR1JFR0FSX1BST0RVQ1RPLEVMSU1JTkFSX1BST0RVQ1RPLExPQURJTkcsRVJST1J9IGZyb20gJy4uL3R5cGVzL2NhcnJpdG9UeXBlcyc7XHJcblxyXG5leHBvcnQgY29uc3QgdHJhZXJQcm9kdWN0b3MgPSAoKT0+YXN5bmMgKGRpc3BhdGNoKT0+e1xyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICAgIHR5cGU6TE9BRElOR1xyXG4gICAgfSk7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHByb2R1Y3RvcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2NhcnJpdG8nKSk7XHJcbiAgICAgICAgbGV0IHN1YnRvdGFsID0gMDtcclxuICAgICAgICBwcm9kdWN0b3MuZm9yRWFjaChwcmQgPT4ge1xyXG4gICAgICAgICAgICBzdWJ0b3RhbCArPSBwYXJzZUludChwcmQucHJlY2lvVW5pZGFkICogcHJkLmNhbnRpZGFkKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBsZXQgcGF5bG9hZERhdGEgPSB7XHJcbiAgICAgICAgICAgIHByb2R1Y3RvcyxcclxuICAgICAgICAgICAgc3VidG90YWxcclxuICAgICAgICB9XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOlRSQUVSX1BST0RVQ1RPUyxcclxuICAgICAgICAgICAgcGF5bG9hZDpwYXlsb2FkRGF0YVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6RVJST1IsXHJcbiAgICAgICAgICAgIHBheWxvYWQ6ZXJyb3JcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgYWdyZWdhclByb2R1Y3RvID0gcHJvZHVjdG89PmFzeW5jIChkaXNwYXRjaCxnZXRTdGF0ZSk9PntcclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgICB0eXBlOkxPQURJTkdcclxuICAgIH0pO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICAvL3Byb2R1Y3RvcyBxdWUgaGF5IGVuIGVsIHJlZHVjZXJcclxuICAgICAgICBsZXQge3Byb2R1Y3Rvc30gPSBnZXRTdGF0ZSgpLmNhcnJpdG9SZWR1Y2VyO1xyXG4gICAgICAgIGxldCBsaXN0UHJvZHVjdG9zVXBncmFkZTtcclxuICAgICAgICBsZXQgcHJvZHVjdG9SZXBldGlkbyA9IHByb2R1Y3Rvcy5maWx0ZXIocmVzPT5yZXMuaWRTdWJQcm9kdWN0bz09cHJvZHVjdG8uaWRTdWJQcm9kdWN0byk7XHJcbiAgICAgICAgaWYocHJvZHVjdG9SZXBldGlkby5sZW5ndGg+MCl7Ly9zaSBzZSBpbnRlbnRhIGFncmVnYXIgZGUgbnVldm8gZWwgbWlzbW8gcHJvZHVjdG8sIHNlIHN1bWEgbGEgY2FudGlkYWQsIG5vIHRvZG8gZWwgcHJvZHVjdG8uXHJcbiAgICAgICAgICAgIHByb2R1Y3RvUmVwZXRpZG9bMF0uY2FudGlkYWQgPSBwcm9kdWN0b1JlcGV0aWRvWzBdLmNhbnRpZGFkICsgcHJvZHVjdG8uY2FudGlkYWQ7XHJcbiAgICAgICAgICAgIGxldCByZXN0YW50ZXMgPSBwcm9kdWN0b3MuZmlsdGVyKG5ld1Jlcz0+bmV3UmVzLmlkU3ViUHJvZHVjdG8hPXByb2R1Y3RvUmVwZXRpZG9bMF0uaWRTdWJQcm9kdWN0byk7XHJcbiAgICAgICAgICAgIGlmKHJlc3RhbnRlcy5sZW5ndGg+MCl7XHJcbiAgICAgICAgICAgICAgICBsaXN0UHJvZHVjdG9zVXBncmFkZSA9IFtcclxuICAgICAgICAgICAgICAgICAgICAuLi5yZXN0YW50ZXMsXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdG9SZXBldGlkb1swXVxyXG4gICAgICAgICAgICAgICAgXTtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICBsaXN0UHJvZHVjdG9zVXBncmFkZSA9IFtcclxuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0b1JlcGV0aWRvWzBdXHJcbiAgICAgICAgICAgICAgICBdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGxpc3RQcm9kdWN0b3NVcGdyYWRlID0gW1xyXG4gICAgICAgICAgICAgICAgLi4ucHJvZHVjdG9zLFxyXG4gICAgICAgICAgICAgICAgcHJvZHVjdG9cclxuICAgICAgICAgICAgXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy9hY3R1YWxpem8gbG9jYWxzdG9yYWdlXHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2NhcnJpdG8nLEpTT04uc3RyaW5naWZ5KGxpc3RQcm9kdWN0b3NVcGdyYWRlKSk7XHJcbiAgICAgICAgY29uc3QgcHJkcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2NhcnJpdG8nKSk7XHJcbiAgICAgICAgbGV0IHN1YnRvdGFsID0gMDtcclxuICAgICAgICBwcmRzLmZvckVhY2gocHJkID0+IHtcclxuICAgICAgICAgICAgc3VidG90YWwgKz0gcGFyc2VJbnQocHJkLnByZWNpb1VuaWRhZCAqIHByZC5jYW50aWRhZCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgbGV0IHBheWxvYWREYXRhID0ge1xyXG4gICAgICAgICAgICBsaXN0UHJvZHVjdG9zVXBncmFkZSxcclxuICAgICAgICAgICAgc3VidG90YWxcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6QUdSRUdBUl9QUk9EVUNUTyxcclxuICAgICAgICAgICAgICAgIHBheWxvYWQ6cGF5bG9hZERhdGFcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9LCAxNTAwKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6RVJST1IsXHJcbiAgICAgICAgICAgIHBheWxvYWQ6ZXJyb3JcclxuICAgICAgICB9KSBcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGVsaW1pbmFyUHJvZHVjdG8gPSBpZFN1YlByb2R1Y3RvPT5hc3luYyAoZGlzcGF0Y2gsZ2V0U3RhdGUpPT57XHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgdHlwZTpMT0FESU5HXHJcbiAgICB9KTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3Qge3Byb2R1Y3Rvc30gPSBnZXRTdGF0ZSgpLmNhcnJpdG9SZWR1Y2VyO1xyXG4gICAgICAgIC8vZmlsdHJvIGxvcyBwcm9kdWN0b3MgcXVlIG5vIHRlbmdhbiBlbCBpZFByb2R1Y3RvIHF1ZSBzZSByZWNpYmnDsy4gZW50b25jZXMgZWxpbWlubyBlc2UgcHJvZHVjdG8geSBhY3R1YWxpem8gZWwgcmVkdWNlci5cclxuICAgICAgICBjb25zdCBuZXdQcm9kdWN0b3MgPSBwcm9kdWN0b3MuZmlsdGVyKG5ld0FycmF5PT5uZXdBcnJheS5pZFN1YlByb2R1Y3RvICE9PSBpZFN1YlByb2R1Y3RvKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhuZXdQcm9kdWN0b3MpO1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjYXJyaXRvJyxKU09OLnN0cmluZ2lmeShuZXdQcm9kdWN0b3MpKTtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6RUxJTUlOQVJfUFJPRFVDVE8sXHJcbiAgICAgICAgICAgIHBheWxvYWQ6bmV3UHJvZHVjdG9zXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTpFUlJPUixcclxuICAgICAgICAgICAgcGF5bG9hZDplcnJvclxyXG4gICAgICAgIH0pICAgIFxyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==