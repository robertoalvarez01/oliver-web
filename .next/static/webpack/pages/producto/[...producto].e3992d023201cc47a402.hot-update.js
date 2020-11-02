webpackHotUpdate_N_E("pages/producto/[...producto]",{

/***/ "./src/components/Carrito/index.js":
/*!*****************************************!*\
  !*** ./src/components/Carrito/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Carrito_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Carrito.module.css */ "./src/components/Carrito/Carrito.module.css");
/* harmony import */ var _Carrito_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Carrito_module_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ProductoCarrito__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProductoCarrito */ "./src/components/Carrito/ProductoCarrito.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\franc\\Documents\\oliver-2\\oliver-sitio\\src\\components\\Carrito\\index.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
 //import { connect } from 'react-redux';
//import * as carritoActions from '../../actions/carritoActions'




var Carrito = function Carrito(props) {
  _s();

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    props.traerProductos();
  }, []);
  var totalCarrito = 0;

  var showProductos = function showProductos() {
    if (!props.productos || props.productos.length === 0) return __jsx("div", {
      className: "alert alert-warning",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 69
      }
    }, "Ningun producto en el carrito"); //calculo el subtotal para mostrarlo abajo de todo en el modal

    totalCarrito = calcularTotal(props.productos);
    return props.productos.map(function (prd, key) {
      return __jsx(_ProductoCarrito__WEBPACK_IMPORTED_MODULE_2__["default"], {
        key: key,
        idProducto: prd.idProducto,
        producto: prd.producto,
        peso: prd.peso,
        total: prd.precio,
        foto: prd.foto,
        eliminarProducto: props.eliminarProducto,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 13
        }
      });
    });
  };

  var calcularTotal = function calcularTotal(prds) {
    var total = 0;
    prds.forEach(function (prd) {
      total += parseInt(prd.precio);
    });
    return total;
  };

  console.log(props);
  return __jsx("section", {
    className: _Carrito_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.carrito__container + ' ' + "carrito",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  }, __jsx("h6", {
    className: "text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }
  }, "Mi Carrito"), __jsx("section", {
    className: _Carrito_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.carrito__productos,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }
  }, showProductos()), __jsx("div", {
    className: _Carrito_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.footer__carrito,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 13
    }
  }, __jsx("section", {
    className: _Carrito_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.section__carrito__total + ' ' + "d-flex justify-content-between",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 17
    }
  }, __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 21
    }
  }, "Subtotal"), __jsx("span", {
    className: _Carrito_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.subtotal__carrito,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 21
    }
  }, "$", totalCarrito)), __jsx("button", {
    className: "boton bg-yellow",
    type: "button",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 17
    }
  }, "Finalizar compra")));
};

_s(Carrito, "OD7bBpZva5O2jO+Puf00hKivP7c=");

_c = Carrito;
/* harmony default export */ __webpack_exports__["default"] = (Carrito);
/*const mapStateToProps = reducers=>{
    return reducers.carritoReducer;
}
export default connect(mapStateToProps,carritoActions)(Carrito);*/

var _c;

$RefreshReg$(_c, "Carrito");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ2Fycml0by9pbmRleC5qcyJdLCJuYW1lcyI6WyJDYXJyaXRvIiwicHJvcHMiLCJ1c2VFZmZlY3QiLCJ0cmFlclByb2R1Y3RvcyIsInRvdGFsQ2Fycml0byIsInNob3dQcm9kdWN0b3MiLCJwcm9kdWN0b3MiLCJsZW5ndGgiLCJjYWxjdWxhclRvdGFsIiwibWFwIiwicHJkIiwia2V5IiwiaWRQcm9kdWN0byIsInByb2R1Y3RvIiwicGVzbyIsInByZWNpbyIsImZvdG8iLCJlbGltaW5hclByb2R1Y3RvIiwicHJkcyIsInRvdGFsIiwiZm9yRWFjaCIsInBhcnNlSW50IiwiY29uc29sZSIsImxvZyIsIkNhcnJpdG9Nb2R1bGUiLCJjYXJyaXRvX19jb250YWluZXIiLCJjYXJyaXRvX19wcm9kdWN0b3MiLCJmb290ZXJfX2NhcnJpdG8iLCJzZWN0aW9uX19jYXJyaXRvX190b3RhbCIsInN1YnRvdGFsX19jYXJyaXRvIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FDQTtBQUNBOztBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQ3ZCQyx5REFBUyxDQUFDLFlBQU07QUFDWkQsU0FBSyxDQUFDRSxjQUFOO0FBQ0gsR0FGUSxFQUVOLEVBRk0sQ0FBVDtBQUdBLE1BQUlDLFlBQVksR0FBRyxDQUFuQjs7QUFFQSxNQUFNQyxhQUFhLEdBQUMsU0FBZEEsYUFBYyxHQUFJO0FBQ3BCLFFBQUcsQ0FBQ0osS0FBSyxDQUFDSyxTQUFQLElBQW9CTCxLQUFLLENBQUNLLFNBQU4sQ0FBZ0JDLE1BQWhCLEtBQTJCLENBQWxELEVBQXFELE9BQU87QUFBSyxlQUFTLEVBQUMscUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1Q0FBUCxDQURqQyxDQUVwQjs7QUFDQUgsZ0JBQVksR0FBR0ksYUFBYSxDQUFDUCxLQUFLLENBQUNLLFNBQVAsQ0FBNUI7QUFDQSxXQUFPTCxLQUFLLENBQUNLLFNBQU4sQ0FBZ0JHLEdBQWhCLENBQW9CLFVBQUNDLEdBQUQsRUFBS0MsR0FBTDtBQUFBLGFBQ3ZCLE1BQUMsd0RBQUQ7QUFBaUIsV0FBRyxFQUFFQSxHQUF0QjtBQUNJLGtCQUFVLEVBQUVELEdBQUcsQ0FBQ0UsVUFEcEI7QUFFSSxnQkFBUSxFQUFFRixHQUFHLENBQUNHLFFBRmxCO0FBR0ksWUFBSSxFQUFFSCxHQUFHLENBQUNJLElBSGQ7QUFJSSxhQUFLLEVBQUVKLEdBQUcsQ0FBQ0ssTUFKZjtBQUtJLFlBQUksRUFBRUwsR0FBRyxDQUFDTSxJQUxkO0FBTUksd0JBQWdCLEVBQUVmLEtBQUssQ0FBQ2dCLGdCQU41QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBRHVCO0FBQUEsS0FBcEIsQ0FBUDtBQVNILEdBYkQ7O0FBZUEsTUFBTVQsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFBVSxJQUFJLEVBQUU7QUFDeEIsUUFBSUMsS0FBSyxHQUFHLENBQVo7QUFDQUQsUUFBSSxDQUFDRSxPQUFMLENBQWEsVUFBQVYsR0FBRyxFQUFJO0FBQ2hCUyxXQUFLLElBQUlFLFFBQVEsQ0FBQ1gsR0FBRyxDQUFDSyxNQUFMLENBQWpCO0FBQ0gsS0FGRDtBQUdBLFdBQU9JLEtBQVA7QUFDSCxHQU5EOztBQU9BRyxTQUFPLENBQUNDLEdBQVIsQ0FBWXRCLEtBQVo7QUFDQSxTQUNJO0FBQVMsYUFBUyxFQUFFdUIsMERBQWEsQ0FBQ0Msa0JBQWQsR0FBbUMsR0FBbkMsWUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUksYUFBUyxFQUFDLGFBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFESixFQUVJO0FBQVMsYUFBUyxFQUFFRCwwREFBYSxDQUFDRSxrQkFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNLckIsYUFBYSxFQURsQixDQUZKLEVBS0k7QUFBSyxhQUFTLEVBQUVtQiwwREFBYSxDQUFDRyxlQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBUyxhQUFTLEVBQUVILDBEQUFhLENBQUNJLHVCQUFkLEdBQXdDLEdBQXhDLG1DQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESixFQUVJO0FBQU0sYUFBUyxFQUFFSiwwREFBYSxDQUFDSyxpQkFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFvRHpCLFlBQXBELENBRkosQ0FESixFQUtJO0FBQVEsYUFBUyxFQUFDLGlCQUFsQjtBQUFvQyxRQUFJLEVBQUMsUUFBekM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFMSixDQUxKLENBREo7QUFlSCxDQTVDRDs7R0FBTUosTzs7S0FBQUEsTztBQThDU0Esc0VBQWY7QUFDQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9kdWN0by9bLi4ucHJvZHVjdG9dLmUzOTkyZDAyMzIwMWNjNDdhNDAyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3Qse3VzZUVmZmVjdH0gZnJvbSAncmVhY3QnO1xyXG4vL2ltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbi8vaW1wb3J0ICogYXMgY2Fycml0b0FjdGlvbnMgZnJvbSAnLi4vLi4vYWN0aW9ucy9jYXJyaXRvQWN0aW9ucydcclxuaW1wb3J0IENhcnJpdG9Nb2R1bGUgZnJvbSAnLi9DYXJyaXRvLm1vZHVsZS5jc3MnO1xyXG5pbXBvcnQgUHJvZHVjdG9DYXJyaXRvIGZyb20gJy4vUHJvZHVjdG9DYXJyaXRvJztcclxuXHJcbmNvbnN0IENhcnJpdG8gPSAocHJvcHMpID0+IHtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgcHJvcHMudHJhZXJQcm9kdWN0b3MoKTtcclxuICAgIH0sIFtdKTtcclxuICAgIGxldCB0b3RhbENhcnJpdG8gPSAwO1xyXG5cclxuICAgIGNvbnN0IHNob3dQcm9kdWN0b3M9KCk9PntcclxuICAgICAgICBpZighcHJvcHMucHJvZHVjdG9zIHx8IHByb3BzLnByb2R1Y3Rvcy5sZW5ndGggPT09IDApIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cImFsZXJ0IGFsZXJ0LXdhcm5pbmdcIj5OaW5ndW4gcHJvZHVjdG8gZW4gZWwgY2Fycml0bzwvZGl2PlxyXG4gICAgICAgIC8vY2FsY3VsbyBlbCBzdWJ0b3RhbCBwYXJhIG1vc3RyYXJsbyBhYmFqbyBkZSB0b2RvIGVuIGVsIG1vZGFsXHJcbiAgICAgICAgdG90YWxDYXJyaXRvID0gY2FsY3VsYXJUb3RhbChwcm9wcy5wcm9kdWN0b3MpO1xyXG4gICAgICAgIHJldHVybiBwcm9wcy5wcm9kdWN0b3MubWFwKChwcmQsa2V5KT0+KFxyXG4gICAgICAgICAgICA8UHJvZHVjdG9DYXJyaXRvIGtleT17a2V5fVxyXG4gICAgICAgICAgICAgICAgaWRQcm9kdWN0bz17cHJkLmlkUHJvZHVjdG99XHJcbiAgICAgICAgICAgICAgICBwcm9kdWN0bz17cHJkLnByb2R1Y3RvfVxyXG4gICAgICAgICAgICAgICAgcGVzbz17cHJkLnBlc299XHJcbiAgICAgICAgICAgICAgICB0b3RhbD17cHJkLnByZWNpb31cclxuICAgICAgICAgICAgICAgIGZvdG89e3ByZC5mb3RvfVxyXG4gICAgICAgICAgICAgICAgZWxpbWluYXJQcm9kdWN0bz17cHJvcHMuZWxpbWluYXJQcm9kdWN0b30vPlxyXG4gICAgICAgICkpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY2FsY3VsYXJUb3RhbCA9IHByZHM9PntcclxuICAgICAgICBsZXQgdG90YWwgPSAwO1xyXG4gICAgICAgIHByZHMuZm9yRWFjaChwcmQgPT4ge1xyXG4gICAgICAgICAgICB0b3RhbCArPSBwYXJzZUludChwcmQucHJlY2lvKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gdG90YWw7XHJcbiAgICB9XHJcbiAgICBjb25zb2xlLmxvZyhwcm9wcyk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17Q2Fycml0b01vZHVsZS5jYXJyaXRvX19jb250YWluZXIgKyAnICcgKyBgY2Fycml0b2B9PlxyXG4gICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5NaSBDYXJyaXRvPC9oNj5cclxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtDYXJyaXRvTW9kdWxlLmNhcnJpdG9fX3Byb2R1Y3Rvc30+XHJcbiAgICAgICAgICAgICAgICB7c2hvd1Byb2R1Y3RvcygpfVxyXG4gICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtDYXJyaXRvTW9kdWxlLmZvb3Rlcl9fY2Fycml0b30+XHJcbiAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e0NhcnJpdG9Nb2R1bGUuc2VjdGlvbl9fY2Fycml0b19fdG90YWwgKyAnICcgKyBgZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuYH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+U3VidG90YWw8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtDYXJyaXRvTW9kdWxlLnN1YnRvdGFsX19jYXJyaXRvfT4ke3RvdGFsQ2Fycml0b308L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJvdG9uIGJnLXllbGxvd1wiIHR5cGU9XCJidXR0b25cIj5GaW5hbGl6YXIgY29tcHJhPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhcnJpdG87XHJcbi8qY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gcmVkdWNlcnM9PntcclxuICAgIHJldHVybiByZWR1Y2Vycy5jYXJyaXRvUmVkdWNlcjtcclxufVxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcyxjYXJyaXRvQWN0aW9ucykoQ2Fycml0byk7Ki8iXSwic291cmNlUm9vdCI6IiJ9