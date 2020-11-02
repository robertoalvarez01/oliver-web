webpackHotUpdate_N_E("pages/_app",{

/***/ "./src/components/Carrito/ProductoCarrito.js":
/*!***************************************************!*\
  !*** ./src/components/Carrito/ProductoCarrito.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ProductoCarrito_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProductoCarrito.module.css */ "./src/components/Carrito/ProductoCarrito.module.css");
/* harmony import */ var _ProductoCarrito_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ProductoCarrito_module_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../config/index */ "./config/index.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\franc\\Documents\\oliver-2\\oliver-sitio\\src\\components\\Carrito\\ProductoCarrito.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var ProductoCarrito = function ProductoCarrito(props) {
  var foto = props.foto,
      producto = props.producto,
      peso = props.peso,
      total = props.total,
      idProducto = props.idProducto;
  return __jsx("div", {
    className: _ProductoCarrito_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.card__productoCarrito + ' ' + "col-12",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  }, __jsx("i", {
    className: _ProductoCarrito_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.delete_producto_carrito + ' ' + "fas fa-trash-alt",
    onClick: function onClick() {
      return props.eliminarProducto(idProducto);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: _ProductoCarrito_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.img__producto__wrapper,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: "".concat(_config_index__WEBPACK_IMPORTED_MODULE_2__["API"]).concat(foto),
    alt: "prd",
    className: "img-fluid",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: _ProductoCarrito_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.info__productoCarrito,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }
  }, __jsx("span", {
    className: _ProductoCarrito_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.carrito__nombre__producto + ' ' + "d-block",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 17
    }
  }, producto), __jsx("span", {
    className: _ProductoCarrito_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.carrito__cantidad__producto + ' ' + "d-block",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 17
    }
  }, "x ", peso, "Kg")), __jsx("div", {
    className: _ProductoCarrito_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.total__producto__carrito,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }
  }, __jsx("span", {
    className: "text-black",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 17
    }
  }, "$", total)));
};

_c = ProductoCarrito;
/* harmony default export */ __webpack_exports__["default"] = (ProductoCarrito);

var _c;

$RefreshReg$(_c, "ProductoCarrito");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ2Fycml0by9Qcm9kdWN0b0NhcnJpdG8uanMiXSwibmFtZXMiOlsiUHJvZHVjdG9DYXJyaXRvIiwicHJvcHMiLCJmb3RvIiwicHJvZHVjdG8iLCJwZXNvIiwidG90YWwiLCJpZFByb2R1Y3RvIiwiUHJvZHVjdG9DYXJyaXRvTW9kdWxlIiwiY2FyZF9fcHJvZHVjdG9DYXJyaXRvIiwiZGVsZXRlX3Byb2R1Y3RvX2NhcnJpdG8iLCJlbGltaW5hclByb2R1Y3RvIiwiaW1nX19wcm9kdWN0b19fd3JhcHBlciIsIkFQSSIsImluZm9fX3Byb2R1Y3RvQ2Fycml0byIsImNhcnJpdG9fX25vbWJyZV9fcHJvZHVjdG8iLCJjYXJyaXRvX19jYW50aWRhZF9fcHJvZHVjdG8iLCJ0b3RhbF9fcHJvZHVjdG9fX2NhcnJpdG8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUNBLElBQU1BLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQ0MsS0FBRCxFQUFXO0FBQUEsTUFDeEJDLElBRHdCLEdBQ2VELEtBRGYsQ0FDeEJDLElBRHdCO0FBQUEsTUFDbkJDLFFBRG1CLEdBQ2VGLEtBRGYsQ0FDbkJFLFFBRG1CO0FBQUEsTUFDVkMsSUFEVSxHQUNlSCxLQURmLENBQ1ZHLElBRFU7QUFBQSxNQUNMQyxLQURLLEdBQ2VKLEtBRGYsQ0FDTEksS0FESztBQUFBLE1BQ0NDLFVBREQsR0FDZUwsS0FEZixDQUNDSyxVQUREO0FBRS9CLFNBQ0k7QUFBSyxhQUFTLEVBQUVDLGtFQUFxQixDQUFDQyxxQkFBdEIsR0FBNEMsR0FBNUMsV0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUcsYUFBUyxFQUFFRCxrRUFBcUIsQ0FBQ0UsdUJBQXRCLEdBQThDLEdBQTlDLHFCQUFkO0FBQW9GLFdBQU8sRUFBRTtBQUFBLGFBQUlSLEtBQUssQ0FBQ1MsZ0JBQU4sQ0FBdUJKLFVBQXZCLENBQUo7QUFBQSxLQUE3RjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosRUFFSTtBQUFLLGFBQVMsRUFBRUMsa0VBQXFCLENBQUNJLHNCQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxPQUFHLFlBQUtDLGlEQUFMLFNBQVdWLElBQVgsQ0FBUjtBQUEyQixPQUFHLEVBQUMsS0FBL0I7QUFBcUMsYUFBUyxFQUFDLFdBQS9DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixDQUZKLEVBS0k7QUFBSyxhQUFTLEVBQUVLLGtFQUFxQixDQUFDTSxxQkFBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQU0sYUFBUyxFQUFFTixrRUFBcUIsQ0FBQ08seUJBQXRCLEdBQWdELEdBQWhELFlBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBaUZYLFFBQWpGLENBREosRUFFSTtBQUFNLGFBQVMsRUFBRUksa0VBQXFCLENBQUNRLDJCQUF0QixHQUFrRCxHQUFsRCxZQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQXFGWCxJQUFyRixPQUZKLENBTEosRUFTSTtBQUFLLGFBQVMsRUFBRUcsa0VBQXFCLENBQUNTLHdCQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBTSxhQUFTLEVBQUMsWUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUErQlgsS0FBL0IsQ0FESixDQVRKLENBREo7QUFlSCxDQWpCRDs7S0FBTUwsZTtBQW1CU0EsOEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC4yMzJkNTk5OTAwZjNlYjFhMzQ1My5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb2R1Y3RvQ2Fycml0b01vZHVsZSBmcm9tICcuL1Byb2R1Y3RvQ2Fycml0by5tb2R1bGUuY3NzJztcclxuaW1wb3J0IHtBUEl9IGZyb20gJy4uLy4uLy4uL2NvbmZpZy9pbmRleCc7XHJcbmNvbnN0IFByb2R1Y3RvQ2Fycml0byA9IChwcm9wcykgPT4ge1xyXG4gICAgY29uc3Qge2ZvdG8scHJvZHVjdG8scGVzbyx0b3RhbCxpZFByb2R1Y3RvfSA9IHByb3BzO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17UHJvZHVjdG9DYXJyaXRvTW9kdWxlLmNhcmRfX3Byb2R1Y3RvQ2Fycml0bysnICcrYGNvbC0xMmB9PlxyXG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9e1Byb2R1Y3RvQ2Fycml0b01vZHVsZS5kZWxldGVfcHJvZHVjdG9fY2Fycml0bysnICcrYGZhcyBmYS10cmFzaC1hbHRgfSBvbkNsaWNrPXsoKT0+cHJvcHMuZWxpbWluYXJQcm9kdWN0byhpZFByb2R1Y3RvKX0+PC9pPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17UHJvZHVjdG9DYXJyaXRvTW9kdWxlLmltZ19fcHJvZHVjdG9fX3dyYXBwZXJ9PlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e2Ake0FQSX0ke2ZvdG99YH0gYWx0PVwicHJkXCIgY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCIvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1Byb2R1Y3RvQ2Fycml0b01vZHVsZS5pbmZvX19wcm9kdWN0b0NhcnJpdG99PlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtQcm9kdWN0b0NhcnJpdG9Nb2R1bGUuY2Fycml0b19fbm9tYnJlX19wcm9kdWN0bysnICcrYGQtYmxvY2tgfT57cHJvZHVjdG99PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtQcm9kdWN0b0NhcnJpdG9Nb2R1bGUuY2Fycml0b19fY2FudGlkYWRfX3Byb2R1Y3RvKycgJytgZC1ibG9ja2B9Pngge3Blc299S2c8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17UHJvZHVjdG9DYXJyaXRvTW9kdWxlLnRvdGFsX19wcm9kdWN0b19fY2Fycml0b30+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWJsYWNrXCI+JHt0b3RhbH08L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG4gXHJcbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RvQ2Fycml0bzsiXSwic291cmNlUm9vdCI6IiJ9