webpackHotUpdate_N_E("pages/producto/[...producto]",{

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
    href: "".concat(_config_index__WEBPACK_IMPORTED_MODULE_4__["PUBLIC_URL"], "/producto/").concat(Object(_helpers_index__WEBPACK_IMPORTED_MODULE_3__["slug"])(prd.subProducto), "/").concat(prd.idSubProducto),
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
    className: _CardProducto_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.label__marca + ' ' + "d-block text-muted",
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
  }, procesarNombre(prd.subProducto)), __jsx("span", {
    className: _CardProducto_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.cantidad,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 25
    }
  }, prd.peso, " KG"), __jsx("h3", {
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
    href: "".concat(_config_index__WEBPACK_IMPORTED_MODULE_4__["PUBLIC_URL"], "/producto/").concat(Object(_helpers_index__WEBPACK_IMPORTED_MODULE_3__["slug"])(prd.subProducto), "/").concat(prd.idSubProducto),
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
  }, procesarNombre(prd.subProducto)), __jsx("span", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ2FyZFByb2R1Y3RvL2luZGV4LmpzIl0sIm5hbWVzIjpbIkNhcmRQcm9kdWN0byIsImltYWdlbiIsInByZCIsInVzZVN0YXRlIiwiaXNQcm9kdWN0b0RldGFsbGUiLCJzZXRJc1Byb2R1Y3RvRGV0YWxsZSIsInVzZUVmZmVjdCIsInJvdXRlciIsIlJvdXRlciIsInJvdXRlIiwicHJvY2VzYXJOb21icmUiLCJub21icmUiLCJub21icmVQcm9jZXNhZG8iLCJpc01vYmlsZSIsImxlbmd0aCIsInN1YnN0cmluZyIsIlBVQkxJQ19VUkwiLCJzbHVnIiwic3ViUHJvZHVjdG8iLCJpZFN1YlByb2R1Y3RvIiwiQ2FyZFByb2R1Y3RvTW9kdWxlIiwiY29udGFpbmVyX19wcm9kdWN0byIsImhlYWRlcl9fY2FyZCIsImltZyIsImJvZHlfX2NhcmQiLCJsYWJlbF9fbWFyY2EiLCJtYXJjYSIsIm5vbWJyZV9fcHJvZHVjdG8iLCJjYW50aWRhZCIsInBlc28iLCJwcmVjaW8iLCJwcmVjaW9VbmlkYWQiLCJsYWJlbF9fZGVzY3VlbnRvIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxPQUFrQjtBQUFBOztBQUFBLE1BQWhCQyxNQUFnQixRQUFoQkEsTUFBZ0I7QUFBQSxNQUFUQyxHQUFTLFFBQVRBLEdBQVM7O0FBQUEsa0JBQ2VDLHNEQUFRLENBQUMsS0FBRCxDQUR2QjtBQUFBLE1BQzVCQyxpQkFENEI7QUFBQSxNQUNUQyxvQkFEUzs7QUFFbkNDLHlEQUFTLENBQUMsWUFBTTtBQUFBLFFBQ0xDLE1BREssR0FDS0Msa0RBREwsQ0FDTEQsTUFESzs7QUFFWixRQUFHQSxNQUFNLENBQUNFLEtBQVAsSUFBZ0IseUJBQW5CLEVBQTZDO0FBQ3pDSiwwQkFBb0IsQ0FBQyxJQUFELENBQXBC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QTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWJKLENBREosQ0F0Qko7QUF3Q0gsQ0E3REQ7O0dBQU1oQyxZOztLQUFBQSxZO0FBK0RTQSwyRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9kdWN0by9bLi4ucHJvZHVjdG9dLjBjYjhmYjdkODNhMzg5MTdjNjdmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QseyB1c2VFZmZlY3QsdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBDYXJkUHJvZHVjdG9Nb2R1bGUgZnJvbSAgJy4vQ2FyZFByb2R1Y3RvLm1vZHVsZS5jc3MnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQge3NsdWcsaXNNb2JpbGV9IGZyb20gJy4uLy4uLy4uL2hlbHBlcnMvaW5kZXgnO1xyXG5pbXBvcnQge1BVQkxJQ19VUkx9IGZyb20gJy4uLy4uLy4uL2NvbmZpZy9pbmRleCc7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5cclxuY29uc3QgQ2FyZFByb2R1Y3RvID0gKHtpbWFnZW4scHJkfSkgPT4ge1xyXG4gICAgY29uc3QgW2lzUHJvZHVjdG9EZXRhbGxlLCBzZXRJc1Byb2R1Y3RvRGV0YWxsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHtyb3V0ZXJ9ID0gUm91dGVyO1xyXG4gICAgICAgIGlmKHJvdXRlci5yb3V0ZSA9PSAnL3Byb2R1Y3RvL1suLi5wcm9kdWN0b10nKXtcclxuICAgICAgICAgICAgc2V0SXNQcm9kdWN0b0RldGFsbGUodHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW10pXHJcbiAgICBjb25zdCBwcm9jZXNhck5vbWJyZSA9IG5vbWJyZT0+e1xyXG4gICAgICAgIGxldCBub21icmVQcm9jZXNhZG8gPSBub21icmU7XHJcbiAgICAgICAgaWYoaXNNb2JpbGUoKSl7XHJcbiAgICAgICAgICAgIGlmKG5vbWJyZVByb2Nlc2Fkby5sZW5ndGg+MjUpe1xyXG4gICAgICAgICAgICAgICAgbm9tYnJlUHJvY2VzYWRvID0gbm9tYnJlLnN1YnN0cmluZygwLDIyKSsnLi4uJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBpZihub21icmVQcm9jZXNhZG8ubGVuZ3RoPjQ1KXtcclxuICAgICAgICAgICAgICAgIG5vbWJyZVByb2Nlc2FkbyA9IG5vbWJyZS5zdWJzdHJpbmcoMCw0MCkrJy4uLic7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5vbWJyZVByb2Nlc2FkbztcclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgKCFpc1Byb2R1Y3RvRGV0YWxsZSk/XHJcbiAgICAgICAgPExpbmsgaHJlZj17YCR7UFVCTElDX1VSTH0vcHJvZHVjdG8vJHtzbHVnKHByZC5zdWJQcm9kdWN0byl9LyR7cHJkLmlkU3ViUHJvZHVjdG99YH0+XHJcbiAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e0NhcmRQcm9kdWN0b01vZHVsZS5jb250YWluZXJfX3Byb2R1Y3RvICsgJyAnICsgYG15LTNgfT5cclxuICAgICAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e0NhcmRQcm9kdWN0b01vZHVsZS5oZWFkZXJfX2NhcmR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17aW1hZ2VufSBhbHQ9XCJwcmRcIiBjbGFzc05hbWU9e0NhcmRQcm9kdWN0b01vZHVsZS5pbWd9Lz5cclxuICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtDYXJkUHJvZHVjdG9Nb2R1bGUuYm9keV9fY2FyZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Q2FyZFByb2R1Y3RvTW9kdWxlLmxhYmVsX19tYXJjYSsgJyAnICsgYGQtYmxvY2sgdGV4dC1tdXRlZGB9PntwcmQubWFyY2F9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPXtDYXJkUHJvZHVjdG9Nb2R1bGUubm9tYnJlX19wcm9kdWN0bysgJyAnICsgYHRleHQtbXV0ZWRgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9jZXNhck5vbWJyZShwcmQuc3ViUHJvZHVjdG8pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2g2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e0NhcmRQcm9kdWN0b01vZHVsZS5jYW50aWRhZH0+e3ByZC5wZXNvfSBLRzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT17Q2FyZFByb2R1Y3RvTW9kdWxlLnByZWNpbyArICcgJyArIGB0ZXh0LWJsYWNrYH0+JHtwcmQucHJlY2lvVW5pZGFkfTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Q2FyZFByb2R1Y3RvTW9kdWxlLmxhYmVsX19kZXNjdWVudG8rICcgJyArIGBiZy1yZWRgfT4xNSUgT2ZmPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgOlxyXG4gICAgICAgIDxhIGhyZWY9e2Ake1BVQkxJQ19VUkx9L3Byb2R1Y3RvLyR7c2x1ZyhwcmQuc3ViUHJvZHVjdG8pfS8ke3ByZC5pZFN1YlByb2R1Y3RvfWB9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Q2FyZFByb2R1Y3RvTW9kdWxlLmNvbnRhaW5lcl9fcHJvZHVjdG8gKyAnICcgKyBgbXktM2B9PlxyXG4gICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtDYXJkUHJvZHVjdG9Nb2R1bGUuaGVhZGVyX19jYXJkfT5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17aW1hZ2VufSBhbHQ9XCJwcmRcIiBjbGFzc05hbWU9e0NhcmRQcm9kdWN0b01vZHVsZS5pbWd9Lz5cclxuICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17Q2FyZFByb2R1Y3RvTW9kdWxlLmJvZHlfX2NhcmR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Q2FyZFByb2R1Y3RvTW9kdWxlLmxhYmVsX19tYXJjYSsgJyAnICsgYGQtYmxvY2sgdGV4dC1tdXRlZGB9PntwcmQubWFyY2F9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9e0NhcmRQcm9kdWN0b01vZHVsZS5ub21icmVfX3Byb2R1Y3RvKyAnICcgKyBgdGV4dC1tdXRlZGB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7cHJvY2VzYXJOb21icmUocHJkLnN1YlByb2R1Y3RvKX1cclxuICAgICAgICAgICAgICAgICAgICA8L2g2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Q2FyZFByb2R1Y3RvTW9kdWxlLmNhbnRpZGFkfT57cHJkLnBlc299IEtHPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9e0NhcmRQcm9kdWN0b01vZHVsZS5wcmVjaW8gKyAnICcgKyBgdGV4dC1ibGFja2B9PiR7cHJkLnByZWNpb1VuaWRhZH08L2gzPlxyXG4gICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e0NhcmRQcm9kdWN0b01vZHVsZS5sYWJlbF9fZGVzY3VlbnRvKyAnICcgKyBgYmctcmVkYH0+MTUlIE9mZjwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9hPlxyXG4gICAgKTtcclxufVxyXG4gXHJcbmV4cG9ydCBkZWZhdWx0IENhcmRQcm9kdWN0bzsiXSwic291cmNlUm9vdCI6IiJ9