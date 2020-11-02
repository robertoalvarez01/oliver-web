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
      var productos;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              dispatch({
                type: _types_carritoTypes__WEBPACK_IMPORTED_MODULE_3__["LOADING"]
              });

              try {
                productos = JSON.parse(localStorage.getItem('carrito'));
                dispatch({
                  type: _types_carritoTypes__WEBPACK_IMPORTED_MODULE_3__["TRAER_PRODUCTOS"],
                  payload: productos
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
      var productos, listProductosUpgrade;
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
                console.log(productos);
                productos.map(function (prd) {
                  if (prd.idSubProducto == producto.idSubProducto) {
                    var _listProductosUpgrade = Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(productos); //actualizo localstorage


                    localStorage.setItem('carrito', JSON.stringify(_listProductosUpgrade));
                    return setTimeout(function () {
                      dispatch({
                        type: _types_carritoTypes__WEBPACK_IMPORTED_MODULE_3__["AGREGAR_PRODUCTO"],
                        payload: _listProductosUpgrade
                      });
                    }, 1500);
                  }
                });
                listProductosUpgrade = [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(productos), [producto]); //actualizo localstorage

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvYWN0aW9ucy9jYXJyaXRvQWN0aW9ucy5qcyJdLCJuYW1lcyI6WyJ0cmFlclByb2R1Y3RvcyIsImRpc3BhdGNoIiwidHlwZSIsIkxPQURJTkciLCJwcm9kdWN0b3MiLCJKU09OIiwicGFyc2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiVFJBRVJfUFJPRFVDVE9TIiwicGF5bG9hZCIsImVycm9yIiwiRVJST1IiLCJhZ3JlZ2FyUHJvZHVjdG8iLCJwcm9kdWN0byIsImdldFN0YXRlIiwiY2Fycml0b1JlZHVjZXIiLCJjb25zb2xlIiwibG9nIiwibWFwIiwicHJkIiwiaWRTdWJQcm9kdWN0byIsImxpc3RQcm9kdWN0b3NVcGdyYWRlIiwic2V0SXRlbSIsInN0cmluZ2lmeSIsInNldFRpbWVvdXQiLCJBR1JFR0FSX1BST0RVQ1RPIiwiZWxpbWluYXJQcm9kdWN0byIsIm5ld1Byb2R1Y3RvcyIsImZpbHRlciIsIm5ld0FycmF5IiwiRUxJTUlOQVJfUFJPRFVDVE8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRU8sSUFBTUEsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQjtBQUFBO0FBQUEsZ01BQUksaUJBQU9DLFFBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQzlCQSxzQkFBUSxDQUFDO0FBQ0xDLG9CQUFJLEVBQUNDLDJEQUFPQTtBQURQLGVBQUQsQ0FBUjs7QUFHQSxrQkFBSTtBQUNNQyx5QkFETixHQUNrQkMsSUFBSSxDQUFDQyxLQUFMLENBQVdDLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixTQUFyQixDQUFYLENBRGxCO0FBRUFQLHdCQUFRLENBQUM7QUFDTEMsc0JBQUksRUFBQ08sbUVBREE7QUFFTEMseUJBQU8sRUFBQ047QUFGSCxpQkFBRCxDQUFSO0FBSUgsZUFORCxDQU1FLE9BQU9PLEtBQVAsRUFBYztBQUNaVix3QkFBUSxDQUFDO0FBQ0xDLHNCQUFJLEVBQUNV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QUNaVix3QkFBUSxDQUFDO0FBQ0xDLHNCQUFJLEVBQUNVLHlEQURBO0FBRUxGLHlCQUFPLEVBQUNDO0FBRkgsaUJBQUQsQ0FBUjtBQUlIOztBQW5CMEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBRjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLENBQXRDIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuMzgwOWZmNzgxM2JlY2U5OGM0ZTcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vaW1wb3J0IHtBUEl9IGZyb20gJy4uL2NvbmZpZy9pbmRleCc7XHJcbmltcG9ydCB7VFJBRVJfUFJPRFVDVE9TLEFHUkVHQVJfUFJPRFVDVE8sRUxJTUlOQVJfUFJPRFVDVE8sTE9BRElORyxFUlJPUn0gZnJvbSAnLi4vdHlwZXMvY2Fycml0b1R5cGVzJztcclxuXHJcbmV4cG9ydCBjb25zdCB0cmFlclByb2R1Y3RvcyA9ICgpPT5hc3luYyAoZGlzcGF0Y2gpPT57XHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgdHlwZTpMT0FESU5HXHJcbiAgICB9KTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcHJvZHVjdG9zID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY2Fycml0bycpKTtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6VFJBRVJfUFJPRFVDVE9TLFxyXG4gICAgICAgICAgICBwYXlsb2FkOnByb2R1Y3Rvc1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6RVJST1IsXHJcbiAgICAgICAgICAgIHBheWxvYWQ6ZXJyb3JcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgYWdyZWdhclByb2R1Y3RvID0gcHJvZHVjdG89PmFzeW5jIChkaXNwYXRjaCxnZXRTdGF0ZSk9PntcclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgICB0eXBlOkxPQURJTkdcclxuICAgIH0pO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICAvL3Byb2R1Y3RvcyBxdWUgaGF5IGVuIGVsIHJlZHVjZXJcclxuICAgICAgICBsZXQge3Byb2R1Y3Rvc30gPSBnZXRTdGF0ZSgpLmNhcnJpdG9SZWR1Y2VyO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHByb2R1Y3Rvcyk7XHJcbiAgICAgICAgcHJvZHVjdG9zLm1hcCgocHJkKT0+e1xyXG4gICAgICAgICAgICBpZihwcmQuaWRTdWJQcm9kdWN0byA9PSBwcm9kdWN0by5pZFN1YlByb2R1Y3RvKXtcclxuICAgICAgICAgICAgICAgIGxldCBsaXN0UHJvZHVjdG9zVXBncmFkZSA9IFtcclxuICAgICAgICAgICAgICAgICAgICAuLi5wcm9kdWN0b3MsXHJcbiAgICAgICAgICAgICAgICBdO1xyXG4gICAgICAgICAgICAgICAgLy9hY3R1YWxpem8gbG9jYWxzdG9yYWdlXHJcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY2Fycml0bycsSlNPTi5zdHJpbmdpZnkobGlzdFByb2R1Y3Rvc1VwZ3JhZGUpKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6QUdSRUdBUl9QUk9EVUNUTyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGF5bG9hZDpsaXN0UHJvZHVjdG9zVXBncmFkZVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9LCAxNTAwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGxldCBsaXN0UHJvZHVjdG9zVXBncmFkZSA9IFtcclxuICAgICAgICAgICAgLi4ucHJvZHVjdG9zLFxyXG4gICAgICAgICAgICBwcm9kdWN0b1xyXG4gICAgICAgIF07XHJcbiAgICAgICAgLy9hY3R1YWxpem8gbG9jYWxzdG9yYWdlXHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2NhcnJpdG8nLEpTT04uc3RyaW5naWZ5KGxpc3RQcm9kdWN0b3NVcGdyYWRlKSk7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6QUdSRUdBUl9QUk9EVUNUTyxcclxuICAgICAgICAgICAgICAgIHBheWxvYWQ6bGlzdFByb2R1Y3Rvc1VwZ3JhZGVcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9LCAxNTAwKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6RVJST1IsXHJcbiAgICAgICAgICAgIHBheWxvYWQ6ZXJyb3JcclxuICAgICAgICB9KSBcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGVsaW1pbmFyUHJvZHVjdG8gPSBpZFN1YlByb2R1Y3RvPT5hc3luYyAoZGlzcGF0Y2gsZ2V0U3RhdGUpPT57XHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgdHlwZTpMT0FESU5HXHJcbiAgICB9KTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3Qge3Byb2R1Y3Rvc30gPSBnZXRTdGF0ZSgpLmNhcnJpdG9SZWR1Y2VyO1xyXG4gICAgICAgIC8vZmlsdHJvIGxvcyBwcm9kdWN0b3MgcXVlIG5vIHRlbmdhbiBlbCBpZFByb2R1Y3RvIHF1ZSBzZSByZWNpYmnDsy4gZW50b25jZXMgZWxpbWlubyBlc2UgcHJvZHVjdG8geSBhY3R1YWxpem8gZWwgcmVkdWNlci5cclxuICAgICAgICBjb25zdCBuZXdQcm9kdWN0b3MgPSBwcm9kdWN0b3MuZmlsdGVyKG5ld0FycmF5PT5uZXdBcnJheS5pZFN1YlByb2R1Y3RvICE9PSBpZFN1YlByb2R1Y3RvKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhuZXdQcm9kdWN0b3MpO1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjYXJyaXRvJyxKU09OLnN0cmluZ2lmeShuZXdQcm9kdWN0b3MpKTtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6RUxJTUlOQVJfUFJPRFVDVE8sXHJcbiAgICAgICAgICAgIHBheWxvYWQ6bmV3UHJvZHVjdG9zXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTpFUlJPUixcclxuICAgICAgICAgICAgcGF5bG9hZDplcnJvclxyXG4gICAgICAgIH0pICAgIFxyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==