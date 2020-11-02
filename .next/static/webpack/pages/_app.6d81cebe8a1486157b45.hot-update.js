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
      precio = props.precio,
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
    src: "".concat(_config_index__WEBPACK_IMPORTED_MODULE_2__["API"], "img/").concat(foto),
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
  }, "$", precio)));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ2Fycml0by9Qcm9kdWN0b0NhcnJpdG8uanMiXSwibmFtZXMiOlsiUHJvZHVjdG9DYXJyaXRvIiwicHJvcHMiLCJmb3RvIiwicHJvZHVjdG8iLCJwZXNvIiwicHJlY2lvIiwiaWRQcm9kdWN0byIsIlByb2R1Y3RvQ2Fycml0b01vZHVsZSIsImNhcmRfX3Byb2R1Y3RvQ2Fycml0byIsImRlbGV0ZV9wcm9kdWN0b19jYXJyaXRvIiwiZWxpbWluYXJQcm9kdWN0byIsImltZ19fcHJvZHVjdG9fX3dyYXBwZXIiLCJBUEkiLCJpbmZvX19wcm9kdWN0b0NhcnJpdG8iLCJjYXJyaXRvX19ub21icmVfX3Byb2R1Y3RvIiwiY2Fycml0b19fY2FudGlkYWRfX3Byb2R1Y3RvIiwidG90YWxfX3Byb2R1Y3RvX19jYXJyaXRvIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFDQSxJQUFNQSxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUNDLEtBQUQsRUFBVztBQUFBLE1BQ3hCQyxJQUR3QixHQUNnQkQsS0FEaEIsQ0FDeEJDLElBRHdCO0FBQUEsTUFDbkJDLFFBRG1CLEdBQ2dCRixLQURoQixDQUNuQkUsUUFEbUI7QUFBQSxNQUNWQyxJQURVLEdBQ2dCSCxLQURoQixDQUNWRyxJQURVO0FBQUEsTUFDTEMsTUFESyxHQUNnQkosS0FEaEIsQ0FDTEksTUFESztBQUFBLE1BQ0VDLFVBREYsR0FDZ0JMLEtBRGhCLENBQ0VLLFVBREY7QUFFL0IsU0FDSTtBQUFLLGFBQVMsRUFBRUMsa0VBQXFCLENBQUNDLHFCQUF0QixHQUE0QyxHQUE1QyxXQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBRyxhQUFTLEVBQUVELGtFQUFxQixDQUFDRSx1QkFBdEIsR0FBOEMsR0FBOUMscUJBQWQ7QUFBb0YsV0FBTyxFQUFFO0FBQUEsYUFBSVIsS0FBSyxDQUFDUyxnQkFBTixDQUF1QkosVUFBdkIsQ0FBSjtBQUFBLEtBQTdGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixFQUVJO0FBQUssYUFBUyxFQUFFQyxrRUFBcUIsQ0FBQ0ksc0JBQXRDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLE9BQUcsWUFBS0MsaURBQUwsaUJBQWVWLElBQWYsQ0FBUjtBQUErQixPQUFHLEVBQUMsS0FBbkM7QUFBeUMsYUFBUyxFQUFDLFdBQW5EO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixDQUZKLEVBS0k7QUFBSyxhQUFTLEVBQUVLLGtFQUFxQixDQUFDTSxxQkFBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQU0sYUFBUyxFQUFFTixrRUFBcUIsQ0FBQ08seUJBQXRCLEdBQWdELEdBQWhELFlBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBaUZYLFFBQWpGLENBREosRUFFSTtBQUFNLGFBQVMsRUFBRUksa0VBQXFCLENBQUNRLDJCQUF0QixHQUFrRCxHQUFsRCxZQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQXFGWCxJQUFyRixPQUZKLENBTEosRUFTSTtBQUFLLGFBQVMsRUFBRUcsa0VBQXFCLENBQUNTLHdCQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBTSxhQUFTLEVBQUMsWUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUErQlgsTUFBL0IsQ0FESixDQVRKLENBREo7QUFlSCxDQWpCRDs7S0FBTUwsZTtBQW1CU0EsOEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC42ZDgxY2ViZThhMTQ4NjE1N2I0NS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb2R1Y3RvQ2Fycml0b01vZHVsZSBmcm9tICcuL1Byb2R1Y3RvQ2Fycml0by5tb2R1bGUuY3NzJztcclxuaW1wb3J0IHtBUEl9IGZyb20gJy4uLy4uLy4uL2NvbmZpZy9pbmRleCc7XHJcbmNvbnN0IFByb2R1Y3RvQ2Fycml0byA9IChwcm9wcykgPT4ge1xyXG4gICAgY29uc3Qge2ZvdG8scHJvZHVjdG8scGVzbyxwcmVjaW8saWRQcm9kdWN0b30gPSBwcm9wcztcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e1Byb2R1Y3RvQ2Fycml0b01vZHVsZS5jYXJkX19wcm9kdWN0b0NhcnJpdG8rJyAnK2Bjb2wtMTJgfT5cclxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPXtQcm9kdWN0b0NhcnJpdG9Nb2R1bGUuZGVsZXRlX3Byb2R1Y3RvX2NhcnJpdG8rJyAnK2BmYXMgZmEtdHJhc2gtYWx0YH0gb25DbGljaz17KCk9PnByb3BzLmVsaW1pbmFyUHJvZHVjdG8oaWRQcm9kdWN0byl9PjwvaT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1Byb2R1Y3RvQ2Fycml0b01vZHVsZS5pbWdfX3Byb2R1Y3RvX193cmFwcGVyfT5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtgJHtBUEl9aW1nLyR7Zm90b31gfSBhbHQ9XCJwcmRcIiBjbGFzc05hbWU9XCJpbWctZmx1aWRcIi8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17UHJvZHVjdG9DYXJyaXRvTW9kdWxlLmluZm9fX3Byb2R1Y3RvQ2Fycml0b30+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e1Byb2R1Y3RvQ2Fycml0b01vZHVsZS5jYXJyaXRvX19ub21icmVfX3Byb2R1Y3RvKycgJytgZC1ibG9ja2B9Pntwcm9kdWN0b308L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e1Byb2R1Y3RvQ2Fycml0b01vZHVsZS5jYXJyaXRvX19jYW50aWRhZF9fcHJvZHVjdG8rJyAnK2BkLWJsb2NrYH0+eCB7cGVzb31LZzwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtQcm9kdWN0b0NhcnJpdG9Nb2R1bGUudG90YWxfX3Byb2R1Y3RvX19jYXJyaXRvfT5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtYmxhY2tcIj4ke3ByZWNpb308L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG4gXHJcbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RvQ2Fycml0bzsiXSwic291cmNlUm9vdCI6IiJ9