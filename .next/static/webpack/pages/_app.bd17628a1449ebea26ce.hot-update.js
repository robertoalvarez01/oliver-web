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
var eliminarProducto = function eliminarProducto(idSubproducto) {
  return /*#__PURE__*/function () {
    var _ref3 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee3(dispatch, getState) {
      var productos, newProductos;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              console.log(idSubproducto);
              dispatch({
                type: _types_carritoTypes__WEBPACK_IMPORTED_MODULE_3__["LOADING"]
              });

              try {
                productos = getState().carritoReducer.productos; //filtro los productos que no tengan el idProducto que se recibió. entonces elimino ese producto y actualizo el reducer.

                newProductos = productos.filter(function (newArray) {
                  return newArray.idSubproducto !== idSubproducto;
                });
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

            case 3:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvYWN0aW9ucy9jYXJyaXRvQWN0aW9ucy5qcyJdLCJuYW1lcyI6WyJ0cmFlclByb2R1Y3RvcyIsImRpc3BhdGNoIiwidHlwZSIsIkxPQURJTkciLCJwcm9kdWN0b3MiLCJKU09OIiwicGFyc2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiVFJBRVJfUFJPRFVDVE9TIiwicGF5bG9hZCIsImVycm9yIiwiRVJST1IiLCJhZ3JlZ2FyUHJvZHVjdG8iLCJwcm9kdWN0byIsImdldFN0YXRlIiwiY2Fycml0b1JlZHVjZXIiLCJsaXN0UHJvZHVjdG9zVXBncmFkZSIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJzZXRUaW1lb3V0IiwiQUdSRUdBUl9QUk9EVUNUTyIsImVsaW1pbmFyUHJvZHVjdG8iLCJpZFN1YnByb2R1Y3RvIiwiY29uc29sZSIsImxvZyIsIm5ld1Byb2R1Y3RvcyIsImZpbHRlciIsIm5ld0FycmF5IiwiRUxJTUlOQVJfUFJPRFVDVE8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRU8sSUFBTUEsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQjtBQUFBO0FBQUEsZ01BQUksaUJBQU9DLFFBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQzlCQSxzQkFBUSxDQUFDO0FBQ0xDLG9CQUFJLEVBQUNDLDJEQUFPQTtBQURQLGVBQUQsQ0FBUjs7QUFHQSxrQkFBSTtBQUNNQyx5QkFETixHQUNrQkMsSUFBSSxDQUFDQyxLQUFMLENBQVdDLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixTQUFyQixDQUFYLENBRGxCO0FBRUFQLHdCQUFRLENBQUM7QUFDTEMsc0JBQUksRUFBQ08sbUVBREE7QUFFTEMseUJBQU8sRUFBQ047QUFGSCxpQkFBRCxDQUFSO0FBSUgsZUFORCxDQU1FLE9BQU9PLEtBQVAsRUFBYztBQUNaVix3QkFBUSxDQUFDO0FBQ0xDLHNCQUFJLEVBQUNVLHlEQURBO0FBRUxGLHlCQUFPLEVBQUNDO0FBRkgsaUJBQUQsQ0FBUjtBQUlIOztBQWY2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFKOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsQ0FBdkI7QUFrQkEsSUFBTUUsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFBQyxRQUFRO0FBQUE7QUFBQSxpTUFBRSxrQkFBT2IsUUFBUCxFQUFnQmMsUUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ3JDZCxzQkFBUSxDQUFDO0FBQ0xDLG9CQUFJLEVBQUNDLDJEQUFPQTtBQURQLGVBQUQsQ0FBUjs7QUFHQSxrQkFBSTtBQUNBO0FBQ0tDLHlCQUZMLEdBRWtCVyxRQUFRLEdBQUdDLGNBRjdCLENBRUtaLFNBRkw7QUFHSWEsb0NBSEosMEdBSU9iLFNBSlAsSUFLSVUsUUFMSixJQU9BOztBQUNBUCw0QkFBWSxDQUFDVyxPQUFiLENBQXFCLFNBQXJCLEVBQStCYixJQUFJLENBQUNjLFNBQUwsQ0FBZUYsb0JBQWYsQ0FBL0I7QUFDQUcsMEJBQVUsQ0FBQyxZQUFNO0FBQ2JuQiwwQkFBUSxDQUFDO0FBQ0xDLHdCQUFJLEVBQUNtQixvRUFEQTtBQUVMWCwyQkFBTyxFQUFDTztBQUZILG1CQUFELENBQVI7QUFJSCxpQkFMUyxFQUtQLElBTE8sQ0FBVjtBQU1ILGVBZkQsQ0FlRSxPQUFPTixLQUFQLEVBQWM7QUFDYlYsd0JBQVEsQ0FBQztBQUNKQyxzQkFBSSxFQUFDVSx5REFERDtBQUVKRix5QkFBTyxFQUFDQztBQUZKLGlCQUFELENBQVI7QUFJRjs7QUF4Qm9DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUY7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxDQUFoQztBQTJCQSxJQUFNVyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLENBQUFDLGFBQWE7QUFBQTtBQUFBLGlNQUFFLGtCQUFPdEIsUUFBUCxFQUFnQmMsUUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQzNDUyxxQkFBTyxDQUFDQyxHQUFSLENBQVlGLGFBQVo7QUFDQXRCLHNCQUFRLENBQUM7QUFDTEMsb0JBQUksRUFBQ0MsMkRBQU9BO0FBRFAsZUFBRCxDQUFSOztBQUdBLGtCQUFJO0FBQ09DLHlCQURQLEdBQ29CVyxRQUFRLEdBQUdDLGNBRC9CLENBQ09aLFNBRFAsRUFFQTs7QUFDTXNCLDRCQUhOLEdBR3FCdEIsU0FBUyxDQUFDdUIsTUFBVixDQUFpQixVQUFBQyxRQUFRO0FBQUEseUJBQUVBLFFBQVEsQ0FBQ0wsYUFBVCxLQUEyQkEsYUFBN0I7QUFBQSxpQkFBekIsQ0FIckI7QUFJQWhCLDRCQUFZLENBQUNXLE9BQWIsQ0FBcUIsU0FBckIsRUFBK0JiLElBQUksQ0FBQ2MsU0FBTCxDQUFlTyxZQUFmLENBQS9CO0FBQ0F6Qix3QkFBUSxDQUFDO0FBQ0xDLHNCQUFJLEVBQUMyQixxRUFEQTtBQUVMbkIseUJBQU8sRUFBQ2dCO0FBRkgsaUJBQUQsQ0FBUjtBQUlILGVBVEQsQ0FTRSxPQUFPZixLQUFQLEVBQWM7QUFDWlYsd0JBQVEsQ0FBQztBQUNMQyxzQkFBSSxFQUFDVSx5REFEQTtBQUVMRix5QkFBTyxFQUFDQztBQUZILGlCQUFELENBQVI7QUFJSDs7QUFuQjBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUY7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxDQUF0QyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLmJkMTc2MjhhMTQ0OWViZWEyNmNlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvL2ltcG9ydCB7QVBJfSBmcm9tICcuLi9jb25maWcvaW5kZXgnO1xyXG5pbXBvcnQge1RSQUVSX1BST0RVQ1RPUyxBR1JFR0FSX1BST0RVQ1RPLEVMSU1JTkFSX1BST0RVQ1RPLExPQURJTkcsRVJST1J9IGZyb20gJy4uL3R5cGVzL2NhcnJpdG9UeXBlcyc7XHJcblxyXG5leHBvcnQgY29uc3QgdHJhZXJQcm9kdWN0b3MgPSAoKT0+YXN5bmMgKGRpc3BhdGNoKT0+e1xyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICAgIHR5cGU6TE9BRElOR1xyXG4gICAgfSk7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHByb2R1Y3RvcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2NhcnJpdG8nKSk7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOlRSQUVSX1BST0RVQ1RPUyxcclxuICAgICAgICAgICAgcGF5bG9hZDpwcm9kdWN0b3NcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOkVSUk9SLFxyXG4gICAgICAgICAgICBwYXlsb2FkOmVycm9yXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGFncmVnYXJQcm9kdWN0byA9IHByb2R1Y3RvPT5hc3luYyAoZGlzcGF0Y2gsZ2V0U3RhdGUpPT57XHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgdHlwZTpMT0FESU5HXHJcbiAgICB9KTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgLy9wcm9kdWN0b3MgcXVlIGhheSBlbiBlbCByZWR1Y2VyXHJcbiAgICAgICAgbGV0IHtwcm9kdWN0b3N9ID0gZ2V0U3RhdGUoKS5jYXJyaXRvUmVkdWNlcjtcclxuICAgICAgICBsZXQgbGlzdFByb2R1Y3Rvc1VwZ3JhZGUgPSBbXHJcbiAgICAgICAgICAgIC4uLnByb2R1Y3RvcyxcclxuICAgICAgICAgICAgcHJvZHVjdG9cclxuICAgICAgICBdO1xyXG4gICAgICAgIC8vYWN0dWFsaXpvIGxvY2Fsc3RvcmFnZVxyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjYXJyaXRvJyxKU09OLnN0cmluZ2lmeShsaXN0UHJvZHVjdG9zVXBncmFkZSkpO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOkFHUkVHQVJfUFJPRFVDVE8sXHJcbiAgICAgICAgICAgICAgICBwYXlsb2FkOmxpc3RQcm9kdWN0b3NVcGdyYWRlXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSwgMTUwMCk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOkVSUk9SLFxyXG4gICAgICAgICAgICBwYXlsb2FkOmVycm9yXHJcbiAgICAgICAgfSkgXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBlbGltaW5hclByb2R1Y3RvID0gaWRTdWJwcm9kdWN0bz0+YXN5bmMgKGRpc3BhdGNoLGdldFN0YXRlKT0+e1xyXG4gICAgY29uc29sZS5sb2coaWRTdWJwcm9kdWN0byk7XHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgdHlwZTpMT0FESU5HXHJcbiAgICB9KTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3Qge3Byb2R1Y3Rvc30gPSBnZXRTdGF0ZSgpLmNhcnJpdG9SZWR1Y2VyO1xyXG4gICAgICAgIC8vZmlsdHJvIGxvcyBwcm9kdWN0b3MgcXVlIG5vIHRlbmdhbiBlbCBpZFByb2R1Y3RvIHF1ZSBzZSByZWNpYmnDsy4gZW50b25jZXMgZWxpbWlubyBlc2UgcHJvZHVjdG8geSBhY3R1YWxpem8gZWwgcmVkdWNlci5cclxuICAgICAgICBjb25zdCBuZXdQcm9kdWN0b3MgPSBwcm9kdWN0b3MuZmlsdGVyKG5ld0FycmF5PT5uZXdBcnJheS5pZFN1YnByb2R1Y3RvICE9PSBpZFN1YnByb2R1Y3RvKTtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY2Fycml0bycsSlNPTi5zdHJpbmdpZnkobmV3UHJvZHVjdG9zKSk7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOkVMSU1JTkFSX1BST0RVQ1RPLFxyXG4gICAgICAgICAgICBwYXlsb2FkOm5ld1Byb2R1Y3Rvc1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6RVJST1IsXHJcbiAgICAgICAgICAgIHBheWxvYWQ6ZXJyb3JcclxuICAgICAgICB9KSAgICBcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0=