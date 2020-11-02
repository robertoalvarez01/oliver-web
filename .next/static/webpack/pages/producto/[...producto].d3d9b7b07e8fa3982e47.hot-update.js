webpackHotUpdate_N_E("pages/producto/[...producto]",{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ2Fycml0by9Qcm9kdWN0b0NhcnJpdG8uanMiXSwibmFtZXMiOlsiUHJvZHVjdG9DYXJyaXRvIiwicHJvcHMiLCJmb3RvIiwicHJvZHVjdG8iLCJwZXNvIiwidG90YWwiLCJpZFByb2R1Y3RvIiwiUHJvZHVjdG9DYXJyaXRvTW9kdWxlIiwiY2FyZF9fcHJvZHVjdG9DYXJyaXRvIiwiZGVsZXRlX3Byb2R1Y3RvX2NhcnJpdG8iLCJlbGltaW5hclByb2R1Y3RvIiwiaW1nX19wcm9kdWN0b19fd3JhcHBlciIsIkFQSSIsImluZm9fX3Byb2R1Y3RvQ2Fycml0byIsImNhcnJpdG9fX25vbWJyZV9fcHJvZHVjdG8iLCJjYXJyaXRvX19jYW50aWRhZF9fcHJvZHVjdG8iLCJ0b3RhbF9fcHJvZHVjdG9fX2NhcnJpdG8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUNBLElBQU1BLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQ0MsS0FBRCxFQUFXO0FBQUEsTUFDeEJDLElBRHdCLEdBQ2VELEtBRGYsQ0FDeEJDLElBRHdCO0FBQUEsTUFDbkJDLFFBRG1CLEdBQ2VGLEtBRGYsQ0FDbkJFLFFBRG1CO0FBQUEsTUFDVkMsSUFEVSxHQUNlSCxLQURmLENBQ1ZHLElBRFU7QUFBQSxNQUNMQyxLQURLLEdBQ2VKLEtBRGYsQ0FDTEksS0FESztBQUFBLE1BQ0NDLFVBREQsR0FDZUwsS0FEZixDQUNDSyxVQUREO0FBRS9CLFNBQ0k7QUFBSyxhQUFTLEVBQUVDLGtFQUFxQixDQUFDQyxxQkFBdEIsR0FBNEMsR0FBNUMsV0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUcsYUFBUyxFQUFFRCxrRUFBcUIsQ0FBQ0UsdUJBQXRCLEdBQThDLEdBQTlDLHFCQUFkO0FBQW9GLFdBQU8sRUFBRTtBQUFBLGFBQUlSLEtBQUssQ0FBQ1MsZ0JBQU4sQ0FBdUJKLFVBQXZCLENBQUo7QUFBQSxLQUE3RjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosRUFFSTtBQUFLLGFBQVMsRUFBRUMsa0VBQXFCLENBQUNJLHNCQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxPQUFHLFlBQUtDLGlEQUFMLGlCQUFlVixJQUFmLENBQVI7QUFBK0IsT0FBRyxFQUFDLEtBQW5DO0FBQXlDLGFBQVMsRUFBQyxXQUFuRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosQ0FGSixFQUtJO0FBQUssYUFBUyxFQUFFSyxrRUFBcUIsQ0FBQ00scUJBQXRDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFNLGFBQVMsRUFBRU4sa0VBQXFCLENBQUNPLHlCQUF0QixHQUFnRCxHQUFoRCxZQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQWlGWCxRQUFqRixDQURKLEVBRUk7QUFBTSxhQUFTLEVBQUVJLGtFQUFxQixDQUFDUSwyQkFBdEIsR0FBa0QsR0FBbEQsWUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFxRlgsSUFBckYsT0FGSixDQUxKLEVBU0k7QUFBSyxhQUFTLEVBQUVHLGtFQUFxQixDQUFDUyx3QkFBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQU0sYUFBUyxFQUFDLFlBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBK0JYLEtBQS9CLENBREosQ0FUSixDQURKO0FBZUgsQ0FqQkQ7O0tBQU1MLGU7QUFtQlNBLDhFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2R1Y3RvL1suLi5wcm9kdWN0b10uZDNkOWI3YjA3ZThmYTM5ODJlNDcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9kdWN0b0NhcnJpdG9Nb2R1bGUgZnJvbSAnLi9Qcm9kdWN0b0NhcnJpdG8ubW9kdWxlLmNzcyc7XHJcbmltcG9ydCB7QVBJfSBmcm9tICcuLi8uLi8uLi9jb25maWcvaW5kZXgnO1xyXG5jb25zdCBQcm9kdWN0b0NhcnJpdG8gPSAocHJvcHMpID0+IHtcclxuICAgIGNvbnN0IHtmb3RvLHByb2R1Y3RvLHBlc28sdG90YWwsaWRQcm9kdWN0b30gPSBwcm9wcztcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e1Byb2R1Y3RvQ2Fycml0b01vZHVsZS5jYXJkX19wcm9kdWN0b0NhcnJpdG8rJyAnK2Bjb2wtMTJgfT5cclxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPXtQcm9kdWN0b0NhcnJpdG9Nb2R1bGUuZGVsZXRlX3Byb2R1Y3RvX2NhcnJpdG8rJyAnK2BmYXMgZmEtdHJhc2gtYWx0YH0gb25DbGljaz17KCk9PnByb3BzLmVsaW1pbmFyUHJvZHVjdG8oaWRQcm9kdWN0byl9PjwvaT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1Byb2R1Y3RvQ2Fycml0b01vZHVsZS5pbWdfX3Byb2R1Y3RvX193cmFwcGVyfT5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtgJHtBUEl9aW1nLyR7Zm90b31gfSBhbHQ9XCJwcmRcIiBjbGFzc05hbWU9XCJpbWctZmx1aWRcIi8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17UHJvZHVjdG9DYXJyaXRvTW9kdWxlLmluZm9fX3Byb2R1Y3RvQ2Fycml0b30+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e1Byb2R1Y3RvQ2Fycml0b01vZHVsZS5jYXJyaXRvX19ub21icmVfX3Byb2R1Y3RvKycgJytgZC1ibG9ja2B9Pntwcm9kdWN0b308L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e1Byb2R1Y3RvQ2Fycml0b01vZHVsZS5jYXJyaXRvX19jYW50aWRhZF9fcHJvZHVjdG8rJyAnK2BkLWJsb2NrYH0+eCB7cGVzb31LZzwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtQcm9kdWN0b0NhcnJpdG9Nb2R1bGUudG90YWxfX3Byb2R1Y3RvX19jYXJyaXRvfT5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtYmxhY2tcIj4ke3RvdGFsfTwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcbiBcclxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdG9DYXJyaXRvOyJdLCJzb3VyY2VSb290IjoiIn0=