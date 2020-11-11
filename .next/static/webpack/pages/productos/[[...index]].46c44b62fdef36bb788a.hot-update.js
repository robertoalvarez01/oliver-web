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
  var isProductoDetalle = false;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var router = next_router__WEBPACK_IMPORTED_MODULE_5___default.a.router;

    if (router.route === '/producto/[...producto]') {
      isProductoDetalle = true;
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

  console.log(isProductoDetalle);
  return __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "".concat(_config_index__WEBPACK_IMPORTED_MODULE_4__["PUBLIC_URL"], "/producto/").concat(Object(_helpers_index__WEBPACK_IMPORTED_MODULE_3__["slug"])(prd.subProducto), "/").concat(prd.idSubProducto),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: _CardProducto_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.container__producto + ' ' + "my-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 17
    }
  }, __jsx("section", {
    className: _CardProducto_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.header__card,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: imagen,
    alt: "prd",
    className: _CardProducto_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.img,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 25
    }
  })), __jsx("section", {
    className: _CardProducto_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.body__card,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 21
    }
  }, __jsx("span", {
    className: _CardProducto_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.label__marca + ' ' + "d-block text-muted",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 25
    }
  }, prd.marca), __jsx("h6", {
    className: _CardProducto_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.nombre__producto + ' ' + "text-muted",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 25
    }
  }, procesarNombre(prd.subProducto)), __jsx("span", {
    className: _CardProducto_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.cantidad,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 25
    }
  }, prd.peso, " KG"), __jsx("h3", {
    className: _CardProducto_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.precio + ' ' + "text-black",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 25
    }
  }, "$", prd.precioUnidad)), __jsx("span", {
    className: _CardProducto_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.label__descuento + ' ' + "bg-red",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 21
    }
  }, "15% Off"))));
};

_s(CardProducto, "OD7bBpZva5O2jO+Puf00hKivP7c=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ2FyZFByb2R1Y3RvL2luZGV4LmpzIl0sIm5hbWVzIjpbIkNhcmRQcm9kdWN0byIsImltYWdlbiIsInByZCIsImlzUHJvZHVjdG9EZXRhbGxlIiwidXNlRWZmZWN0Iiwicm91dGVyIiwiUm91dGVyIiwicm91dGUiLCJwcm9jZXNhck5vbWJyZSIsIm5vbWJyZSIsIm5vbWJyZVByb2Nlc2FkbyIsImlzTW9iaWxlIiwibGVuZ3RoIiwic3Vic3RyaW5nIiwiY29uc29sZSIsImxvZyIsIlBVQkxJQ19VUkwiLCJzbHVnIiwic3ViUHJvZHVjdG8iLCJpZFN1YlByb2R1Y3RvIiwiQ2FyZFByb2R1Y3RvTW9kdWxlIiwiY29udGFpbmVyX19wcm9kdWN0byIsImhlYWRlcl9fY2FyZCIsImltZyIsImJvZHlfX2NhcmQiLCJsYWJlbF9fbWFyY2EiLCJtYXJjYSIsIm5vbWJyZV9fcHJvZHVjdG8iLCJjYW50aWRhZCIsInBlc28iLCJwcmVjaW8iLCJwcmVjaW9VbmlkYWQiLCJsYWJlbF9fZGVzY3VlbnRvIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFlBQVksR0FBRyxTQUFmQSxZQUFlLE9BQWtCO0FBQUE7O0FBQUEsTUFBaEJDLE1BQWdCLFFBQWhCQSxNQUFnQjtBQUFBLE1BQVRDLEdBQVMsUUFBVEEsR0FBUztBQUNuQyxNQUFJQyxpQkFBaUIsR0FBRyxLQUF4QjtBQUNBQyx5REFBUyxDQUFDLFlBQU07QUFBQSxRQUNMQyxNQURLLEdBQ0tDLGtEQURMLENBQ0xELE1BREs7O0FBRVosUUFBR0EsTUFBTSxDQUFDRSxLQUFQLEtBQWlCLHlCQUFwQixFQUE4QztBQUMxQ0osdUJBQWlCLEdBQUcsSUFBcEI7QUFDSDtBQUNKLEdBTFEsRUFLTixFQUxNLENBQVQ7O0FBTUEsTUFBTUssY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixDQUFBQyxNQUFNLEVBQUU7QUFDM0IsUUFBSUMsZUFBZSxHQUFHRCxNQUF0Qjs7QUFDQSxRQUFHRSwrREFBUSxFQUFYLEVBQWM7QUFDVixVQUFHRCxlQUFlLENBQUNFLE1BQWhCLEdBQXVCLEVBQTFCLEVBQTZCO0FBQ3pCRix1QkFBZSxHQUFHRCxNQUFNLENBQUNJLFNBQVAsQ0FBaUIsQ0FBakIsRUFBbUIsRUFBbkIsSUFBdUIsS0FBekM7QUFDSDtBQUNKLEtBSkQsTUFJSztBQUNELFVBQUdILGVBQWUsQ0FBQ0UsTUFBaEIsR0FBdUIsRUFBMUIsRUFBNkI7QUFDekJGLHVCQUFlLEdBQUdELE1BQU0sQ0FBQ0ksU0FBUCxDQUFpQixDQUFqQixFQUFtQixFQUFuQixJQUF1QixLQUF6QztBQUNIO0FBQ0o7O0FBQ0QsV0FBT0gsZUFBUDtBQUNILEdBWkQ7O0FBYUFJLFNBQU8sQ0FBQ0MsR0FBUixDQUFZWixpQkFBWjtBQUNBLFNBQ0ksTUFBQyxnREFBRDtBQUFNLFFBQUksWUFBS2Esd0RBQUwsdUJBQTRCQywyREFBSSxDQUFDZixHQUFHLENBQUNnQixXQUFMLENBQWhDLGNBQXFEaEIsR0FBRyxDQUFDaUIsYUFBekQsQ0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssYUFBUyxFQUFFQywrREFBa0IsQ0FBQ0MsbUJBQW5CLEdBQXlDLEdBQXpDLFNBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFTLGFBQVMsRUFBRUQsK0RBQWtCLENBQUNFLFlBQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLE9BQUcsRUFBRXJCLE1BQVY7QUFBa0IsT0FBRyxFQUFDLEtBQXRCO0FBQTRCLGFBQVMsRUFBRW1CLCtEQUFrQixDQUFDRyxHQUExRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosQ0FESixFQUlJO0FBQVMsYUFBUyxFQUFFSCwrREFBa0IsQ0FBQ0ksVUFBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQU0sYUFBUyxFQUFFSiwrREFBa0IsQ0FBQ0ssWUFBbkIsR0FBaUMsR0FBakMsdUJBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBK0V2QixHQUFHLENBQUN3QixLQUFuRixDQURKLEVBRUk7QUFBSSxhQUFTLEVBQUVOLCtEQUFrQixDQUFDTyxnQkFBbkIsR0FBcUMsR0FBckMsZUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0tuQixjQUFjLENBQUNOLEdBQUcsQ0FBQ2dCLFdBQUwsQ0FEbkIsQ0FGSixFQUtJO0FBQU0sYUFBUyxFQUFFRSwrREFBa0IsQ0FBQ1EsUUFBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUErQzFCLEdBQUcsQ0FBQzJCLElBQW5ELFFBTEosRUFNSTtBQUFJLGFBQVMsRUFBRVQsK0RBQWtCLENBQUNVLE1BQW5CLEdBQTRCLEdBQTVCLGVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFpRTVCLEdBQUcsQ0FBQzZCLFlBQXJFLENBTkosQ0FKSixFQWFJO0FBQU0sYUFBUyxFQUFFWCwrREFBa0IsQ0FBQ1ksZ0JBQW5CLEdBQXFDLEdBQXJDLFdBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFiSixDQURKLENBREosQ0FESjtBQXFCSCxDQTNDRDs7R0FBTWhDLFk7O0tBQUFBLFk7QUE2Q1NBLDJFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2R1Y3Rvcy9bWy4uLmluZGV4XV0uNDZjNDRiNjJmZGVmMzZiYjc4OGEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBDYXJkUHJvZHVjdG9Nb2R1bGUgZnJvbSAgJy4vQ2FyZFByb2R1Y3RvLm1vZHVsZS5jc3MnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQge3NsdWcsaXNNb2JpbGV9IGZyb20gJy4uLy4uLy4uL2hlbHBlcnMvaW5kZXgnO1xyXG5pbXBvcnQge1BVQkxJQ19VUkx9IGZyb20gJy4uLy4uLy4uL2NvbmZpZy9pbmRleCc7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBDYXJkUHJvZHVjdG8gPSAoe2ltYWdlbixwcmR9KSA9PiB7XHJcbiAgICBsZXQgaXNQcm9kdWN0b0RldGFsbGUgPSBmYWxzZTtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3Qge3JvdXRlcn0gPSBSb3V0ZXI7XHJcbiAgICAgICAgaWYocm91dGVyLnJvdXRlID09PSAnL3Byb2R1Y3RvL1suLi5wcm9kdWN0b10nKXtcclxuICAgICAgICAgICAgaXNQcm9kdWN0b0RldGFsbGUgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtdKVxyXG4gICAgY29uc3QgcHJvY2VzYXJOb21icmUgPSBub21icmU9PntcclxuICAgICAgICBsZXQgbm9tYnJlUHJvY2VzYWRvID0gbm9tYnJlO1xyXG4gICAgICAgIGlmKGlzTW9iaWxlKCkpe1xyXG4gICAgICAgICAgICBpZihub21icmVQcm9jZXNhZG8ubGVuZ3RoPjI1KXtcclxuICAgICAgICAgICAgICAgIG5vbWJyZVByb2Nlc2FkbyA9IG5vbWJyZS5zdWJzdHJpbmcoMCwyMikrJy4uLic7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgaWYobm9tYnJlUHJvY2VzYWRvLmxlbmd0aD40NSl7XHJcbiAgICAgICAgICAgICAgICBub21icmVQcm9jZXNhZG8gPSBub21icmUuc3Vic3RyaW5nKDAsNDApKycuLi4nO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBub21icmVQcm9jZXNhZG87XHJcbiAgICB9XHJcbiAgICBjb25zb2xlLmxvZyhpc1Byb2R1Y3RvRGV0YWxsZSk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxMaW5rIGhyZWY9e2Ake1BVQkxJQ19VUkx9L3Byb2R1Y3RvLyR7c2x1ZyhwcmQuc3ViUHJvZHVjdG8pfS8ke3ByZC5pZFN1YlByb2R1Y3RvfWB9PlxyXG4gICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtDYXJkUHJvZHVjdG9Nb2R1bGUuY29udGFpbmVyX19wcm9kdWN0byArICcgJyArIGBteS0zYH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtDYXJkUHJvZHVjdG9Nb2R1bGUuaGVhZGVyX19jYXJkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2ltYWdlbn0gYWx0PVwicHJkXCIgY2xhc3NOYW1lPXtDYXJkUHJvZHVjdG9Nb2R1bGUuaW1nfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17Q2FyZFByb2R1Y3RvTW9kdWxlLmJvZHlfX2NhcmR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e0NhcmRQcm9kdWN0b01vZHVsZS5sYWJlbF9fbWFyY2ErICcgJyArIGBkLWJsb2NrIHRleHQtbXV0ZWRgfT57cHJkLm1hcmNhfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT17Q2FyZFByb2R1Y3RvTW9kdWxlLm5vbWJyZV9fcHJvZHVjdG8rICcgJyArIGB0ZXh0LW11dGVkYH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cHJvY2VzYXJOb21icmUocHJkLnN1YlByb2R1Y3RvKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9oNj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtDYXJkUHJvZHVjdG9Nb2R1bGUuY2FudGlkYWR9PntwcmQucGVzb30gS0c8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9e0NhcmRQcm9kdWN0b01vZHVsZS5wcmVjaW8gKyAnICcgKyBgdGV4dC1ibGFja2B9PiR7cHJkLnByZWNpb1VuaWRhZH08L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e0NhcmRQcm9kdWN0b01vZHVsZS5sYWJlbF9fZGVzY3VlbnRvKyAnICcgKyBgYmctcmVkYH0+MTUlIE9mZjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgKTtcclxufVxyXG4gXHJcbmV4cG9ydCBkZWZhdWx0IENhcmRQcm9kdWN0bzsiXSwic291cmNlUm9vdCI6IiJ9