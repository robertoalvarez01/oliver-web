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
      idSubProducto = props.idSubProducto,
      cantidad = props.cantidad;
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
  }, cantidad), " ", cantidad > 1 ? 'unidades' : 'unidad')), __jsx("div", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ2Fycml0by9Qcm9kdWN0b0NhcnJpdG8uanMiXSwibmFtZXMiOlsiUHJvZHVjdG9DYXJyaXRvIiwicHJvcHMiLCJmb3RvIiwicHJvZHVjdG8iLCJwZXNvIiwidG90YWwiLCJpZFN1YlByb2R1Y3RvIiwiY2FudGlkYWQiLCJQcm9kdWN0b0NhcnJpdG9Nb2R1bGUiLCJjYXJkX19wcm9kdWN0b0NhcnJpdG8iLCJmYVRyYXNoIiwiZGVsZXRlX3Byb2R1Y3RvX2NhcnJpdG8iLCJlbGltaW5hclByb2R1Y3RvIiwiaW1nX19wcm9kdWN0b19fd3JhcHBlciIsIkFQSSIsImluZm9fX3Byb2R1Y3RvQ2Fycml0byIsImNhcnJpdG9fX25vbWJyZV9fcHJvZHVjdG8iLCJjYXJyaXRvX19jYW50aWRhZF9fcHJvZHVjdG8iLCJ0b3RhbF9fcHJvZHVjdG9fX2NhcnJpdG8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLElBQU1BLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQ0MsS0FBRCxFQUFXO0FBQUEsTUFDeEJDLElBRHdCLEdBQzJCRCxLQUQzQixDQUN4QkMsSUFEd0I7QUFBQSxNQUNuQkMsUUFEbUIsR0FDMkJGLEtBRDNCLENBQ25CRSxRQURtQjtBQUFBLE1BQ1ZDLElBRFUsR0FDMkJILEtBRDNCLENBQ1ZHLElBRFU7QUFBQSxNQUNMQyxLQURLLEdBQzJCSixLQUQzQixDQUNMSSxLQURLO0FBQUEsTUFDQ0MsYUFERCxHQUMyQkwsS0FEM0IsQ0FDQ0ssYUFERDtBQUFBLE1BQ2VDLFFBRGYsR0FDMkJOLEtBRDNCLENBQ2VNLFFBRGY7QUFFL0IsU0FDSTtBQUFLLGFBQVMsRUFBRUMsa0VBQXFCLENBQUNDLHFCQUF0QixHQUE0QyxHQUE1QyxXQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyw4RUFBRDtBQUFpQixRQUFJLEVBQUVDLHlFQUF2QjtBQUFnQyxhQUFTLEVBQUVGLGtFQUFxQixDQUFDRyx1QkFBakU7QUFBMEYsV0FBTyxFQUFFO0FBQUEsYUFBSVYsS0FBSyxDQUFDVyxnQkFBTixDQUF1Qk4sYUFBdkIsQ0FBSjtBQUFBLEtBQW5HO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixFQUVJO0FBQUssYUFBUyxFQUFFRSxrRUFBcUIsQ0FBQ0ssc0JBQXRDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLE9BQUcsWUFBS0MsaURBQUwsaUJBQWVaLElBQWYsQ0FBUjtBQUErQixPQUFHLEVBQUMsS0FBbkM7QUFBeUMsYUFBUyxFQUFDLFdBQW5EO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixDQUZKLEVBS0k7QUFBSyxhQUFTLEVBQUVNLGtFQUFxQixDQUFDTyxxQkFBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQU0sYUFBUyxFQUFFUCxrRUFBcUIsQ0FBQ1EseUJBQXRCLEdBQWdELEdBQWhELFlBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBaUZiLFFBQWpGLENBREosRUFFSTtBQUFNLGFBQVMsRUFBRUssa0VBQXFCLENBQUNTLDJCQUF0QixHQUFrRCxHQUFsRCxZQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQXFGYixJQUFyRixPQUZKLEVBR0k7QUFBTSxhQUFTLEVBQUMsWUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUE2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUlHLFFBQUosQ0FBN0IsT0FBZ0RBLFFBQVEsR0FBQyxDQUFULEdBQVcsVUFBWCxHQUFzQixRQUF0RSxDQUhKLENBTEosRUFVSTtBQUFLLGFBQVMsRUFBRUMsa0VBQXFCLENBQUNVLHdCQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBTSxhQUFTLEVBQUMsWUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUErQmIsS0FBL0IsQ0FESixDQVZKLENBREo7QUFnQkgsQ0FsQkQ7O0tBQU1MLGU7QUFvQlNBLDhFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2R1Y3RvL1suLi5wcm9kdWN0b10uMmJmMjQ5NTU4ZGQ4MTZhYTY3OWEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9kdWN0b0NhcnJpdG9Nb2R1bGUgZnJvbSAnLi9Qcm9kdWN0b0NhcnJpdG8ubW9kdWxlLmNzcyc7XHJcbmltcG9ydCB7QVBJfSBmcm9tICcuLi8uLi8uLi9jb25maWcvaW5kZXgnO1xyXG5pbXBvcnQgeyBmYVRyYXNoIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29uc1wiO1xyXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tIFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCI7XHJcbmNvbnN0IFByb2R1Y3RvQ2Fycml0byA9IChwcm9wcykgPT4ge1xyXG4gICAgY29uc3Qge2ZvdG8scHJvZHVjdG8scGVzbyx0b3RhbCxpZFN1YlByb2R1Y3RvLGNhbnRpZGFkfSA9IHByb3BzO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17UHJvZHVjdG9DYXJyaXRvTW9kdWxlLmNhcmRfX3Byb2R1Y3RvQ2Fycml0bysnICcrYGNvbC0xMmB9PlxyXG4gICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhVHJhc2h9IGNsYXNzTmFtZT17UHJvZHVjdG9DYXJyaXRvTW9kdWxlLmRlbGV0ZV9wcm9kdWN0b19jYXJyaXRvfSBvbkNsaWNrPXsoKT0+cHJvcHMuZWxpbWluYXJQcm9kdWN0byhpZFN1YlByb2R1Y3RvKX0+PC9Gb250QXdlc29tZUljb24+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtQcm9kdWN0b0NhcnJpdG9Nb2R1bGUuaW1nX19wcm9kdWN0b19fd3JhcHBlcn0+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17YCR7QVBJfWltZy8ke2ZvdG99YH0gYWx0PVwicHJkXCIgY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCIvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1Byb2R1Y3RvQ2Fycml0b01vZHVsZS5pbmZvX19wcm9kdWN0b0NhcnJpdG99PlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtQcm9kdWN0b0NhcnJpdG9Nb2R1bGUuY2Fycml0b19fbm9tYnJlX19wcm9kdWN0bysnICcrYGQtYmxvY2tgfT57cHJvZHVjdG99PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtQcm9kdWN0b0NhcnJpdG9Nb2R1bGUuY2Fycml0b19fY2FudGlkYWRfX3Byb2R1Y3RvKycgJytgZC1ibG9ja2B9Pngge3Blc299S2c8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkXCI+PGI+e2NhbnRpZGFkfTwvYj4ge2NhbnRpZGFkPjE/J3VuaWRhZGVzJzondW5pZGFkJ308L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17UHJvZHVjdG9DYXJyaXRvTW9kdWxlLnRvdGFsX19wcm9kdWN0b19fY2Fycml0b30+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWJsYWNrXCI+JHt0b3RhbH08L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG4gXHJcbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RvQ2Fycml0bzsiXSwic291cmNlUm9vdCI6IiJ9