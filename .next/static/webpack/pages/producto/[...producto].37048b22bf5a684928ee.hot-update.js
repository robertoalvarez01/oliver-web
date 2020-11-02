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
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\franc\\Documents\\oliver-2\\oliver-sitio\\src\\components\\Carrito\\ProductoCarrito.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






var ProductoCarrito = function ProductoCarrito(props) {
  var foto = props.foto,
      producto = props.producto,
      peso = props.peso,
      total = props.total,
      idSubProducto = props.idSubProducto;
  return __jsx("div", {
    className: _ProductoCarrito_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.card__productoCarrito + ' ' + "col-12",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faTrash"],
    className: _ProductoCarrito_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.delete_producto_carrito,
    onClick: function onClick() {
      return props.eliminarProducto(idSubProducto);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: _ProductoCarrito_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.img__producto__wrapper,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: "".concat(_config_index__WEBPACK_IMPORTED_MODULE_2__["API"], "img/").concat(foto),
    alt: "prd",
    className: "img-fluid",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: _ProductoCarrito_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.info__productoCarrito,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }
  }, __jsx("span", {
    className: _ProductoCarrito_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.carrito__nombre__producto + ' ' + "d-block",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 17
    }
  }, producto), __jsx("span", {
    className: _ProductoCarrito_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.carrito__cantidad__producto + ' ' + "d-block",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 17
    }
  }, "x ", peso, "Kg"), __jsx("span", {
    className: "text-muted",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 17
    }
  }, __jsx("b", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 46
    }
  }, "4"), " unidades")), __jsx("div", {
    className: _ProductoCarrito_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.total__producto__carrito,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }
  }, __jsx("span", {
    className: "text-black",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ2Fycml0by9Qcm9kdWN0b0NhcnJpdG8uanMiXSwibmFtZXMiOlsiUHJvZHVjdG9DYXJyaXRvIiwicHJvcHMiLCJmb3RvIiwicHJvZHVjdG8iLCJwZXNvIiwidG90YWwiLCJpZFN1YlByb2R1Y3RvIiwiUHJvZHVjdG9DYXJyaXRvTW9kdWxlIiwiY2FyZF9fcHJvZHVjdG9DYXJyaXRvIiwiZmFUcmFzaCIsImRlbGV0ZV9wcm9kdWN0b19jYXJyaXRvIiwiZWxpbWluYXJQcm9kdWN0byIsImltZ19fcHJvZHVjdG9fX3dyYXBwZXIiLCJBUEkiLCJpbmZvX19wcm9kdWN0b0NhcnJpdG8iLCJjYXJyaXRvX19ub21icmVfX3Byb2R1Y3RvIiwiY2Fycml0b19fY2FudGlkYWRfX3Byb2R1Y3RvIiwidG90YWxfX3Byb2R1Y3RvX19jYXJyaXRvIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxJQUFNQSxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUNDLEtBQUQsRUFBVztBQUFBLE1BQ3hCQyxJQUR3QixHQUNrQkQsS0FEbEIsQ0FDeEJDLElBRHdCO0FBQUEsTUFDbkJDLFFBRG1CLEdBQ2tCRixLQURsQixDQUNuQkUsUUFEbUI7QUFBQSxNQUNWQyxJQURVLEdBQ2tCSCxLQURsQixDQUNWRyxJQURVO0FBQUEsTUFDTEMsS0FESyxHQUNrQkosS0FEbEIsQ0FDTEksS0FESztBQUFBLE1BQ0NDLGFBREQsR0FDa0JMLEtBRGxCLENBQ0NLLGFBREQ7QUFFL0IsU0FDSTtBQUFLLGFBQVMsRUFBRUMsa0VBQXFCLENBQUNDLHFCQUF0QixHQUE0QyxHQUE1QyxXQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyw4RUFBRDtBQUFpQixRQUFJLEVBQUVDLHlFQUF2QjtBQUFnQyxhQUFTLEVBQUVGLGtFQUFxQixDQUFDRyx1QkFBakU7QUFBMEYsV0FBTyxFQUFFO0FBQUEsYUFBSVQsS0FBSyxDQUFDVSxnQkFBTixDQUF1QkwsYUFBdkIsQ0FBSjtBQUFBLEtBQW5HO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixFQUVJO0FBQUssYUFBUyxFQUFFQyxrRUFBcUIsQ0FBQ0ssc0JBQXRDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLE9BQUcsWUFBS0MsaURBQUwsaUJBQWVYLElBQWYsQ0FBUjtBQUErQixPQUFHLEVBQUMsS0FBbkM7QUFBeUMsYUFBUyxFQUFDLFdBQW5EO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixDQUZKLEVBS0k7QUFBSyxhQUFTLEVBQUVLLGtFQUFxQixDQUFDTyxxQkFBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQU0sYUFBUyxFQUFFUCxrRUFBcUIsQ0FBQ1EseUJBQXRCLEdBQWdELEdBQWhELFlBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBaUZaLFFBQWpGLENBREosRUFFSTtBQUFNLGFBQVMsRUFBRUksa0VBQXFCLENBQUNTLDJCQUF0QixHQUFrRCxHQUFsRCxZQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQXFGWixJQUFyRixPQUZKLEVBR0k7QUFBTSxhQUFTLEVBQUMsWUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUE2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQTdCLGNBSEosQ0FMSixFQVVJO0FBQUssYUFBUyxFQUFFRyxrRUFBcUIsQ0FBQ1Usd0JBQXRDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFNLGFBQVMsRUFBQyxZQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQStCWixLQUEvQixDQURKLENBVkosQ0FESjtBQWdCSCxDQWxCRDs7S0FBTUwsZTtBQW9CU0EsOEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvZHVjdG8vWy4uLnByb2R1Y3RvXS4zNzA0OGIyMmJmNWE2ODQ5MjhlZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb2R1Y3RvQ2Fycml0b01vZHVsZSBmcm9tICcuL1Byb2R1Y3RvQ2Fycml0by5tb2R1bGUuY3NzJztcclxuaW1wb3J0IHtBUEl9IGZyb20gJy4uLy4uLy4uL2NvbmZpZy9pbmRleCc7XHJcbmltcG9ydCB7IGZhVHJhc2ggfSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCI7XHJcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIjtcclxuY29uc3QgUHJvZHVjdG9DYXJyaXRvID0gKHByb3BzKSA9PiB7XHJcbiAgICBjb25zdCB7Zm90byxwcm9kdWN0byxwZXNvLHRvdGFsLGlkU3ViUHJvZHVjdG99ID0gcHJvcHM7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtQcm9kdWN0b0NhcnJpdG9Nb2R1bGUuY2FyZF9fcHJvZHVjdG9DYXJyaXRvKycgJytgY29sLTEyYH0+XHJcbiAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFUcmFzaH0gY2xhc3NOYW1lPXtQcm9kdWN0b0NhcnJpdG9Nb2R1bGUuZGVsZXRlX3Byb2R1Y3RvX2NhcnJpdG99IG9uQ2xpY2s9eygpPT5wcm9wcy5lbGltaW5hclByb2R1Y3RvKGlkU3ViUHJvZHVjdG8pfT48L0ZvbnRBd2Vzb21lSWNvbj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1Byb2R1Y3RvQ2Fycml0b01vZHVsZS5pbWdfX3Byb2R1Y3RvX193cmFwcGVyfT5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtgJHtBUEl9aW1nLyR7Zm90b31gfSBhbHQ9XCJwcmRcIiBjbGFzc05hbWU9XCJpbWctZmx1aWRcIi8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17UHJvZHVjdG9DYXJyaXRvTW9kdWxlLmluZm9fX3Byb2R1Y3RvQ2Fycml0b30+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e1Byb2R1Y3RvQ2Fycml0b01vZHVsZS5jYXJyaXRvX19ub21icmVfX3Byb2R1Y3RvKycgJytgZC1ibG9ja2B9Pntwcm9kdWN0b308L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e1Byb2R1Y3RvQ2Fycml0b01vZHVsZS5jYXJyaXRvX19jYW50aWRhZF9fcHJvZHVjdG8rJyAnK2BkLWJsb2NrYH0+eCB7cGVzb31LZzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtbXV0ZWRcIj48Yj40PC9iPiB1bmlkYWRlczwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtQcm9kdWN0b0NhcnJpdG9Nb2R1bGUudG90YWxfX3Byb2R1Y3RvX19jYXJyaXRvfT5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtYmxhY2tcIj4ke3RvdGFsfTwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcbiBcclxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdG9DYXJyaXRvOyJdLCJzb3VyY2VSb290IjoiIn0=