webpackHotUpdate_N_E("pages/index",{

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
  }, procesarNombre(prd.producto)), __jsx("span", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ2FyZFByb2R1Y3RvL2luZGV4LmpzIl0sIm5hbWVzIjpbIkNhcmRQcm9kdWN0byIsImltYWdlbiIsInByZCIsInVzZVN0YXRlIiwiaXNQcm9kdWN0b0RldGFsbGUiLCJzZXRJc1Byb2R1Y3RvRGV0YWxsZSIsInVzZUVmZmVjdCIsInJvdXRlciIsIlJvdXRlciIsInJvdXRlIiwicHJvY2VzYXJOb21icmUiLCJub21icmUiLCJub21icmVQcm9jZXNhZG8iLCJpc01vYmlsZSIsImxlbmd0aCIsInN1YnN0cmluZyIsIlBVQkxJQ19VUkwiLCJzbHVnIiwicHJvZHVjdG8iLCJpZFByb2R1Y3RvIiwiQ2FyZFByb2R1Y3RvTW9kdWxlIiwiY29udGFpbmVyX19wcm9kdWN0byIsImhlYWRlcl9fY2FyZCIsImltZyIsImJvZHlfX2NhcmQiLCJsYWJlbF9fbWFyY2EiLCJtYXJjYSIsIm5vbWJyZV9fcHJvZHVjdG8iLCJjYW50aWRhZCIsInBlc28iLCJwcmVjaW8iLCJwcmVjaW9VbmlkYWQiLCJsYWJlbF9fZGVzY3VlbnRvIiwic3ViUHJvZHVjdG8iLCJpZFN1YlByb2R1Y3RvIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxPQUFrQjtBQUFBOztBQUFBLE1BQWhCQyxNQUFnQixRQUFoQkEsTUFBZ0I7QUFBQSxNQUFUQyxHQUFTLFFBQVRBLEdBQVM7O0FBQUEsa0JBQ2VDLHNEQUFRLENBQUMsS0FBRCxDQUR2QjtBQUFBLE1BQzVCQyxpQkFENEI7QUFBQSxNQUNUQyxvQkFEUzs7QUFFbkNDLHlEQUFTLENBQUMsWUFBTTtBQUFBLFFBQ0xDLE1BREssR0FDS0Msa0RBREwsQ0FDTEQsTUFESzs7QUFFWixRQUFHQSxNQUFNLENBQUNFLEtBQVAsSUFBZ0IseUJBQW5CLEVBQTZDO0FBQ3pD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bkIsR0FBcUMsR0FBckMsV0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWJKLENBREosQ0F0Qko7QUF3Q0gsQ0E3REQ7O0dBQU1oQyxZOztLQUFBQSxZO0FBK0RTQSwyRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC45MDBlMmY1ZGUzMmE1NThiY2E5OC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LHsgdXNlRWZmZWN0LHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQ2FyZFByb2R1Y3RvTW9kdWxlIGZyb20gICcuL0NhcmRQcm9kdWN0by5tb2R1bGUuY3NzJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHtzbHVnLGlzTW9iaWxlfSBmcm9tICcuLi8uLi8uLi9oZWxwZXJzL2luZGV4JztcclxuaW1wb3J0IHtQVUJMSUNfVVJMfSBmcm9tICcuLi8uLi8uLi9jb25maWcvaW5kZXgnO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcbmNvbnN0IENhcmRQcm9kdWN0byA9ICh7aW1hZ2VuLHByZH0pID0+IHtcclxuICAgIGNvbnN0IFtpc1Byb2R1Y3RvRGV0YWxsZSwgc2V0SXNQcm9kdWN0b0RldGFsbGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zdCB7cm91dGVyfSA9IFJvdXRlcjtcclxuICAgICAgICBpZihyb3V0ZXIucm91dGUgPT0gJy9wcm9kdWN0by9bLi4ucHJvZHVjdG9dJyl7XHJcbiAgICAgICAgICAgIHNldElzUHJvZHVjdG9EZXRhbGxlKHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtdKVxyXG4gICAgY29uc3QgcHJvY2VzYXJOb21icmUgPSBub21icmU9PntcclxuICAgICAgICBsZXQgbm9tYnJlUHJvY2VzYWRvID0gbm9tYnJlO1xyXG4gICAgICAgIGlmKGlzTW9iaWxlKCkpe1xyXG4gICAgICAgICAgICBpZihub21icmVQcm9jZXNhZG8ubGVuZ3RoPjI1KXtcclxuICAgICAgICAgICAgICAgIG5vbWJyZVByb2Nlc2FkbyA9IG5vbWJyZS5zdWJzdHJpbmcoMCwyMikrJy4uLic7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgaWYobm9tYnJlUHJvY2VzYWRvLmxlbmd0aD40NSl7XHJcbiAgICAgICAgICAgICAgICBub21icmVQcm9jZXNhZG8gPSBub21icmUuc3Vic3RyaW5nKDAsNDApKycuLi4nO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBub21icmVQcm9jZXNhZG87XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgICghaXNQcm9kdWN0b0RldGFsbGUpP1xyXG4gICAgICAgIDxMaW5rIGhyZWY9e2Ake1BVQkxJQ19VUkx9L3Byb2R1Y3RvLyR7c2x1ZyhwcmQucHJvZHVjdG8pfS8ke3ByZC5pZFByb2R1Y3RvfWB9PlxyXG4gICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtDYXJkUHJvZHVjdG9Nb2R1bGUuY29udGFpbmVyX19wcm9kdWN0byArICcgJyArIGBteS0zYH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtDYXJkUHJvZHVjdG9Nb2R1bGUuaGVhZGVyX19jYXJkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2ltYWdlbn0gYWx0PVwicHJkXCIgY2xhc3NOYW1lPXtDYXJkUHJvZHVjdG9Nb2R1bGUuaW1nfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17Q2FyZFByb2R1Y3RvTW9kdWxlLmJvZHlfX2NhcmR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e0NhcmRQcm9kdWN0b01vZHVsZS5sYWJlbF9fbWFyY2ErICcgJyArIGBkLWJsb2NrIHRleHQtbXV0ZWRgfT57cHJkLm1hcmNhfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT17Q2FyZFByb2R1Y3RvTW9kdWxlLm5vbWJyZV9fcHJvZHVjdG8rICcgJyArIGB0ZXh0LW11dGVkYH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cHJvY2VzYXJOb21icmUocHJkLnByb2R1Y3RvKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9oNj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtDYXJkUHJvZHVjdG9Nb2R1bGUuY2FudGlkYWR9PntwcmQucGVzb30gS0c8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9e0NhcmRQcm9kdWN0b01vZHVsZS5wcmVjaW8gKyAnICcgKyBgdGV4dC1ibGFja2B9PiR7cHJkLnByZWNpb1VuaWRhZH08L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e0NhcmRQcm9kdWN0b01vZHVsZS5sYWJlbF9fZGVzY3VlbnRvKyAnICcgKyBgYmctcmVkYH0+MTUlIE9mZjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDpcclxuICAgICAgICA8YSBocmVmPXtgJHtQVUJMSUNfVVJMfS9wcm9kdWN0by8ke3NsdWcocHJkLnN1YlByb2R1Y3RvKX0vJHtwcmQuaWRTdWJQcm9kdWN0b31gfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e0NhcmRQcm9kdWN0b01vZHVsZS5jb250YWluZXJfX3Byb2R1Y3RvICsgJyAnICsgYG15LTNgfT5cclxuICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17Q2FyZFByb2R1Y3RvTW9kdWxlLmhlYWRlcl9fY2FyZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2ltYWdlbn0gYWx0PVwicHJkXCIgY2xhc3NOYW1lPXtDYXJkUHJvZHVjdG9Nb2R1bGUuaW1nfS8+XHJcbiAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e0NhcmRQcm9kdWN0b01vZHVsZS5ib2R5X19jYXJkfT5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e0NhcmRQcm9kdWN0b01vZHVsZS5sYWJlbF9fbWFyY2ErICcgJyArIGBkLWJsb2NrIHRleHQtbXV0ZWRgfT57cHJkLm1hcmNhfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPXtDYXJkUHJvZHVjdG9Nb2R1bGUubm9tYnJlX19wcm9kdWN0bysgJyAnICsgYHRleHQtbXV0ZWRgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3Byb2Nlc2FyTm9tYnJlKHByZC5zdWJQcm9kdWN0byl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9oNj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e0NhcmRQcm9kdWN0b01vZHVsZS5jYW50aWRhZH0+e3ByZC5wZXNvfSBLRzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPXtDYXJkUHJvZHVjdG9Nb2R1bGUucHJlY2lvICsgJyAnICsgYHRleHQtYmxhY2tgfT4ke3ByZC5wcmVjaW9VbmlkYWR9PC9oMz5cclxuICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtDYXJkUHJvZHVjdG9Nb2R1bGUubGFiZWxfX2Rlc2N1ZW50bysgJyAnICsgYGJnLXJlZGB9PjE1JSBPZmY8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvYT5cclxuICAgICk7XHJcbn1cclxuIFxyXG5leHBvcnQgZGVmYXVsdCBDYXJkUHJvZHVjdG87Il0sInNvdXJjZVJvb3QiOiIifQ==