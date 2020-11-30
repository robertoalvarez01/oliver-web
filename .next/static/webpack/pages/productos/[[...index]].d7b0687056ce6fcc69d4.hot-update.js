webpackHotUpdate_N_E("pages/productos/[[...index]]",{

/***/ "./src/components/CardProducto/index.js":
/*!**********************************************!*\
  !*** ./src/components/CardProducto/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _CardProducto_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CardProducto.module.css */ "./src/components/CardProducto/CardProducto.module.css");
/* harmony import */ var _CardProducto_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_CardProducto_module_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _helpers_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../helpers/index */ "./helpers/index.js");
/* harmony import */ var _config_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../config/index */ "./config/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
var _this = undefined,
    _jsxFileName = "C:\\Users\\franc\\Documents\\oliver-2\\sitio-desa\\src\\components\\CardProducto\\index.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







var CardProducto = function CardProducto(_ref) {
  _s();

  var imagen = _ref.imagen,
      prd = _ref.prd;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      isProductoDetalle = _useState[0],
      setIsProductoDetalle = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var router = next_router__WEBPACK_IMPORTED_MODULE_5___default.a.router;

    if (router.route == '/producto/[...producto]') {
      setIsProductoDetalle(true);
    }
  }, []);

  var procesarNombre = function procesarNombre(nombre) {
    var nombreProcesado = nombre;

    if (Object(_helpers_index__WEBPACK_IMPORTED_MODULE_3__["isMobile"])()) {
      if (nombreProcesado.length > 25) {
        nombreProcesado = nombre.substring(0, 22) + '...';
      }
    } else {
      if (nombreProcesado.length > 45) {
        nombreProcesado = nombre.substring(0, 40) + '...';
      }
    }

    return nombreProcesado;
  };

  return !isProductoDetalle ? __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "".concat(_config_index__WEBPACK_IMPORTED_MODULE_4__["PUBLIC_URL"], "/producto/").concat(Object(_helpers_index__WEBPACK_IMPORTED_MODULE_3__["slug"])(prd.producto), "/").concat(prd.idProducto),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: _CardProducto_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.container__producto + ' ' + "my-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 17
    }
  }, __jsx("section", {
    className: _CardProducto_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.header__card,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: imagen,
    alt: "prd",
    className: _CardProducto_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.img,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 25
    }
  })), __jsx("section", {
    className: _CardProducto_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.body__card,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 21
    }
  }, __jsx("span", {
    className: "d-block text-muted",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 25
    }
  }, prd.marca), __jsx("h6", {
    className: _CardProducto_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.nombre__producto + ' ' + "text-muted",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 25
    }
  }, procesarNombre(prd.producto)), prd.peso != null ? __jsx("span", {
    className: _CardProducto_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.cantidad,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 45
    }
  }, prd.peso, " KG") : null, __jsx("h3", {
    className: _CardProducto_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.precio + ' ' + "text-black",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 25
    }
  }, "$", prd.precioUnidad)), __jsx("span", {
    className: _CardProducto_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.label__descuento + ' ' + "bg-red",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 21
    }
  }, "15% Off")))) : __jsx("a", {
    href: "".concat(_config_index__WEBPACK_IMPORTED_MODULE_4__["PUBLIC_URL"], "/producto/").concat(Object(_helpers_index__WEBPACK_IMPORTED_MODULE_3__["slug"])(prd.producto), "/").concat(prd.idProducto),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: _CardProducto_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.container__producto + ' ' + "my-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 13
    }
  }, __jsx("section", {
    className: _CardProducto_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.header__card,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: imagen,
    alt: "prd",
    className: _CardProducto_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.img,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 21
    }
  })), __jsx("section", {
    className: _CardProducto_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.body__card,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 17
    }
  }, __jsx("span", {
    className: _CardProducto_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.label__marca + ' ' + "d-block text-muted",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 21
    }
  }, prd.marca), __jsx("h6", {
    className: _CardProducto_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.nombre__producto + ' ' + "text-muted",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 21
    }
  }, procesarNombre(prd.producto)), __jsx("span", {
    className: _CardProducto_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.cantidad,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 21
    }
  }, prd.peso, " KG"), __jsx("h3", {
    className: _CardProducto_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.precio + ' ' + "text-black",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 21
    }
  }, "$", prd.precioUnidad)), __jsx("span", {
    className: _CardProducto_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.label__descuento + ' ' + "bg-red",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 17
    }
  }, "15% Off")));
};

_s(CardProducto, "uNrLFr3GX4UWfrnv7KZdJ737X8w=");

_c = CardProducto;
/* harmony default export */ __webpack_exports__["default"] = (CardProducto);

var _c;

$RefreshReg$(_c, "CardProducto");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ2FyZFByb2R1Y3RvL2luZGV4LmpzIl0sIm5hbWVzIjpbIkNhcmRQcm9kdWN0byIsImltYWdlbiIsInByZCIsInVzZVN0YXRlIiwiaXNQcm9kdWN0b0RldGFsbGUiLCJzZXRJc1Byb2R1Y3RvRGV0YWxsZSIsInVzZUVmZmVjdCIsInJvdXRlciIsIlJvdXRlciIsInJvdXRlIiwicHJvY2VzYXJOb21icmUiLCJub21icmUiLCJub21icmVQcm9jZXNhZG8iLCJpc01vYmlsZSIsImxlbmd0aCIsInN1YnN0cmluZyIsIlBVQkxJQ19VUkwiLCJzbHVnIiwicHJvZHVjdG8iLCJpZFByb2R1Y3RvIiwiQ2FyZFByb2R1Y3RvTW9kdWxlIiwiY29udGFpbmVyX19wcm9kdWN0byIsImhlYWRlcl9fY2FyZCIsImltZyIsImJvZHlfX2NhcmQiLCJtYXJjYSIsIm5vbWJyZV9fcHJvZHVjdG8iLCJwZXNvIiwiY2FudGlkYWQiLCJwcmVjaW8iLCJwcmVjaW9VbmlkYWQiLCJsYWJlbF9fZGVzY3VlbnRvIiwibGFiZWxfX21hcmNhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxPQUFrQjtBQUFBOztBQUFBLE1BQWhCQyxNQUFnQixRQUFoQkEsTUFBZ0I7QUFBQSxNQUFUQyxHQUFTLFFBQVRBLEdBQVM7O0FBQUEsa0JBQ2VDLHNEQUFRLENBQUMsS0FBRCxDQUR2QjtBQUFBLE1BQzVCQyxpQkFENEI7QUFBQSxNQUNUQyxvQkFEUzs7QUFFbkNDLHlEQUFTLENBQUMsWUFBTTtBQUFBLFFBQ0xDLE1BREssR0FDS0Msa0RBREwsQ0FDTEQsTUFESzs7QUFFWixRQUFHQSxNQUFNLENBQUNFLEtBQVAsSUFBZ0IseUJBQW5CLEVBQTZDO0FBQ3pDSiwwQkFBb0IsQ0FBQyxJQUFELENBQXBCO0FBQ0g7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V0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWJKLENBREosQ0F0Qko7QUF3Q0gsQ0E3REQ7O0dBQU0vQixZOztLQUFBQSxZO0FBK0RTQSwyRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9kdWN0b3MvW1suLi5pbmRleF1dLmQ3YjA2ODcwNTZjZTZmY2M2OWQ0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QseyB1c2VFZmZlY3QsdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBDYXJkUHJvZHVjdG9Nb2R1bGUgZnJvbSAgJy4vQ2FyZFByb2R1Y3RvLm1vZHVsZS5jc3MnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQge3NsdWcsaXNNb2JpbGV9IGZyb20gJy4uLy4uLy4uL2hlbHBlcnMvaW5kZXgnO1xyXG5pbXBvcnQge1BVQkxJQ19VUkx9IGZyb20gJy4uLy4uLy4uL2NvbmZpZy9pbmRleCc7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5cclxuY29uc3QgQ2FyZFByb2R1Y3RvID0gKHtpbWFnZW4scHJkfSkgPT4ge1xyXG4gICAgY29uc3QgW2lzUHJvZHVjdG9EZXRhbGxlLCBzZXRJc1Byb2R1Y3RvRGV0YWxsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHtyb3V0ZXJ9ID0gUm91dGVyO1xyXG4gICAgICAgIGlmKHJvdXRlci5yb3V0ZSA9PSAnL3Byb2R1Y3RvL1suLi5wcm9kdWN0b10nKXtcclxuICAgICAgICAgICAgc2V0SXNQcm9kdWN0b0RldGFsbGUodHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW10pXHJcbiAgICBjb25zdCBwcm9jZXNhck5vbWJyZSA9IG5vbWJyZT0+e1xyXG4gICAgICAgIGxldCBub21icmVQcm9jZXNhZG8gPSBub21icmU7XHJcbiAgICAgICAgaWYoaXNNb2JpbGUoKSl7XHJcbiAgICAgICAgICAgIGlmKG5vbWJyZVByb2Nlc2Fkby5sZW5ndGg+MjUpe1xyXG4gICAgICAgICAgICAgICAgbm9tYnJlUHJvY2VzYWRvID0gbm9tYnJlLnN1YnN0cmluZygwLDIyKSsnLi4uJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBpZihub21icmVQcm9jZXNhZG8ubGVuZ3RoPjQ1KXtcclxuICAgICAgICAgICAgICAgIG5vbWJyZVByb2Nlc2FkbyA9IG5vbWJyZS5zdWJzdHJpbmcoMCw0MCkrJy4uLic7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5vbWJyZVByb2Nlc2FkbztcclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgKCFpc1Byb2R1Y3RvRGV0YWxsZSk/XHJcbiAgICAgICAgPExpbmsgaHJlZj17YCR7UFVCTElDX1VSTH0vcHJvZHVjdG8vJHtzbHVnKHByZC5wcm9kdWN0byl9LyR7cHJkLmlkUHJvZHVjdG99YH0+XHJcbiAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e0NhcmRQcm9kdWN0b01vZHVsZS5jb250YWluZXJfX3Byb2R1Y3RvICsgJyAnICsgYG15LTNgfT5cclxuICAgICAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e0NhcmRQcm9kdWN0b01vZHVsZS5oZWFkZXJfX2NhcmR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17aW1hZ2VufSBhbHQ9XCJwcmRcIiBjbGFzc05hbWU9e0NhcmRQcm9kdWN0b01vZHVsZS5pbWd9Lz5cclxuICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtDYXJkUHJvZHVjdG9Nb2R1bGUuYm9keV9fY2FyZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImQtYmxvY2sgdGV4dC1tdXRlZFwiPntwcmQubWFyY2F9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPXtDYXJkUHJvZHVjdG9Nb2R1bGUubm9tYnJlX19wcm9kdWN0bysgJyAnICsgYHRleHQtbXV0ZWRgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9jZXNhck5vbWJyZShwcmQucHJvZHVjdG8pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2g2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7KHByZC5wZXNvICE9IG51bGwpPzxzcGFuIGNsYXNzTmFtZT17Q2FyZFByb2R1Y3RvTW9kdWxlLmNhbnRpZGFkfT57cHJkLnBlc299IEtHPC9zcGFuPjpudWxsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPXtDYXJkUHJvZHVjdG9Nb2R1bGUucHJlY2lvICsgJyAnICsgYHRleHQtYmxhY2tgfT4ke3ByZC5wcmVjaW9VbmlkYWR9PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtDYXJkUHJvZHVjdG9Nb2R1bGUubGFiZWxfX2Rlc2N1ZW50bysgJyAnICsgYGJnLXJlZGB9PjE1JSBPZmY8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgICA6XHJcbiAgICAgICAgPGEgaHJlZj17YCR7UFVCTElDX1VSTH0vcHJvZHVjdG8vJHtzbHVnKHByZC5wcm9kdWN0byl9LyR7cHJkLmlkUHJvZHVjdG99YH0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtDYXJkUHJvZHVjdG9Nb2R1bGUuY29udGFpbmVyX19wcm9kdWN0byArICcgJyArIGBteS0zYH0+XHJcbiAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e0NhcmRQcm9kdWN0b01vZHVsZS5oZWFkZXJfX2NhcmR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtpbWFnZW59IGFsdD1cInByZFwiIGNsYXNzTmFtZT17Q2FyZFByb2R1Y3RvTW9kdWxlLmltZ30vPlxyXG4gICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtDYXJkUHJvZHVjdG9Nb2R1bGUuYm9keV9fY2FyZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtDYXJkUHJvZHVjdG9Nb2R1bGUubGFiZWxfX21hcmNhKyAnICcgKyBgZC1ibG9jayB0ZXh0LW11dGVkYH0+e3ByZC5tYXJjYX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT17Q2FyZFByb2R1Y3RvTW9kdWxlLm5vbWJyZV9fcHJvZHVjdG8rICcgJyArIGB0ZXh0LW11dGVkYH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9jZXNhck5vbWJyZShwcmQucHJvZHVjdG8pfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvaDY+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtDYXJkUHJvZHVjdG9Nb2R1bGUuY2FudGlkYWR9PntwcmQucGVzb30gS0c8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT17Q2FyZFByb2R1Y3RvTW9kdWxlLnByZWNpbyArICcgJyArIGB0ZXh0LWJsYWNrYH0+JHtwcmQucHJlY2lvVW5pZGFkfTwvaDM+XHJcbiAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Q2FyZFByb2R1Y3RvTW9kdWxlLmxhYmVsX19kZXNjdWVudG8rICcgJyArIGBiZy1yZWRgfT4xNSUgT2ZmPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2E+XHJcbiAgICApO1xyXG59XHJcbiBcclxuZXhwb3J0IGRlZmF1bHQgQ2FyZFByb2R1Y3RvOyJdLCJzb3VyY2VSb290IjoiIn0=