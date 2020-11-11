webpackHotUpdate_N_E("pages/productos/[[...index]]",{

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
false,

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

  console.log(isProductoDetalle);
  return __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
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
  }, "15% Off"))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ2FyZFByb2R1Y3RvL2luZGV4LmpzIl0sIm5hbWVzIjpbIkNhcmRQcm9kdWN0byIsImltYWdlbiIsInByZCIsInVzZVN0YXRlIiwiaXNQcm9kdWN0b0RldGFsbGUiLCJzZXRJc1Byb2R1Y3RvRGV0YWxsZSIsInVzZUVmZmVjdCIsInJvdXRlciIsIlJvdXRlciIsInJvdXRlIiwicHJvY2VzYXJOb21icmUiLCJub21icmUiLCJub21icmVQcm9jZXNhZG8iLCJpc01vYmlsZSIsImxlbmd0aCIsInN1YnN0cmluZyIsImNvbnNvbGUiLCJsb2ciLCJQVUJMSUNfVVJMIiwic2x1ZyIsInN1YlByb2R1Y3RvIiwiaWRTdWJQcm9kdWN0byIsIkNhcmRQcm9kdWN0b01vZHVsZSIsImNvbnRhaW5lcl9fcHJvZHVjdG8iLCJoZWFkZXJfX2NhcmQiLCJpbWciLCJib2R5X19jYXJkIiwibGFiZWxfX21hcmNhIiwibWFyY2EiLCJub21icmVfX3Byb2R1Y3RvIiwiY2FudGlkYWQiLCJwZXNvIiwicHJlY2lvIiwicHJlY2lvVW5pZGFkIiwibGFiZWxfX2Rlc2N1ZW50byJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsWUFBWSxHQUFHLFNBQWZBLFlBQWUsT0FBa0I7QUFBQTs7QUFBQSxNQUFoQkMsTUFBZ0IsUUFBaEJBLE1BQWdCO0FBQUEsTUFBVEMsR0FBUyxRQUFUQSxHQUFTOztBQUFBLGtCQUNlQyxzREFBUSxDQUFDLEtBQUQsQ0FEdkI7QUFBQSxNQUM1QkMsaUJBRDRCO0FBQUEsTUFDVEMsb0JBRFM7O0FBRW5DQyx5REFBUyxDQUFDLFlBQU07QUFBQSxRQUNMQyxNQURLLEdBQ0tDLGtEQURMLENBQ0xELE1BREs7O0FBRVosUUFBR0EsTUFBTSxDQUFDRSxLQUFQLElBQWdCLHlCQUFuQixFQUE2QztBQUN6Q0osMEJBQW9CLENBQUMsSUFBRCxDQUFwQjtBQUNIO0FBQ0osR0FMUSxFQUtOLEVBTE0sQ0FBVDs7QUFNQSxNQUFNSyxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLENBQUFDLE1BQU0sRUFBRTtBQUMzQixRQUFJQyxlQUFlLEdBQUdELE1BQXRCOztBQUNBLFFBQUdFLCtEQUFRLEVBQVgsRUFBYztBQUNWLFVBQUdELGVBQWUsQ0FBQ0UsTUFBaEIsR0FBdUIsRUFBMUIsRUFBNkI7QUFDekJGLHVCQUFlLEdBQUdELE1BQU0sQ0FBQ0ksU0FBUCxDQUFpQixDQUFqQixFQUFtQixFQUFuQixJQUF1QixLQUF6QztBQUNIO0FBQ0osS0FKRCxNQUlLO0FBQ0QsVUFBR0gsZUFBZSxDQUFDRSxNQUFoQixHQUF1QixFQUExQixFQUE2QjtBQUN6QkYsdUJBQWUsR0FBR0QsTUFBTSxDQUFDSSxTQUFQLENBQWlCLENBQWpCLEVBQW1CLEVBQW5CLElBQXVCLEtBQXpDO0FBQ0g7QUFDSjs7QUFDRCxXQUFPSCxlQUFQO0FBQ0gsR0FaRDs7QUFhQUksU0FBTyxDQUFDQyxHQUFSLENBQVliLGlCQUFaO0FBQ0EsU0FDSSxNQUFDLGdEQUFEO0FBQU0sUUFBSSxZQUFLYyx3REFBTCx1QkFBNEJDLDJEQUFJLENBQUNqQixHQUFHLENBQUNrQixXQUFMLENBQWhDLGNBQXFEbEIsR0FBRyxDQUFDbUIsYUFBekQsQ0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssYUFBUyxFQUFFQywrREFBa0IsQ0FBQ0MsbUJBQW5CLEdBQXlDLEdBQXpDLFNBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFTLGFBQVMsRUFBRUQsK0RBQWtCLENBQUNFLFlBQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLE9BQUcsRUFBRXZCLE1BQVY7QUFBa0IsT0FBRyxFQUFDLEtBQXRCO0FBQTRCLGFBQVMsRUFBRXFCLCtEQUFrQixDQUFDRyxHQUExRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosQ0FESixFQUlJO0FBQVMsYUFBUyxFQUFFSCwrREFBa0IsQ0FBQ0ksVUFBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQU0sYUFBUyxFQUFFSiwrREFBa0IsQ0FBQ0ssWUFBbkIsR0FBaUMsR0FBakMsdUJBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBK0V6QixHQUFHLENBQUMwQixLQUFuRixDQURKLEVBRUk7QUFBSSxhQUFTLEVBQUVOLCtEQUFrQixDQUFDTyxnQkFBbkIsR0FBcUMsR0FBckMsZUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0tuQixjQUFjLENBQUNSLEdBQUcsQ0FBQ2tCLFdBQUwsQ0FEbkIsQ0FGSixFQUtJO0FBQU0sYUFBUyxFQUFFRSwrREFBa0IsQ0FBQ1EsUUFBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUErQzVCLEdBQUcsQ0FBQzZCLElBQW5ELFFBTEosRUFNSTtBQUFJLGFBQVMsRUFBRVQsK0RBQWtCLENBQUNVLE1BQW5CLEdBQTRCLEdBQTVCLGVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFpRTlCLEdBQUcsQ0FBQytCLFlBQXJFLENBTkosQ0FKSixFQWFJO0FBQU0sYUFBUyxFQUFFWCwrREFBa0IsQ0FBQ1ksZ0JBQW5CLEdBQXFDLEdBQXJDLFdBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFiSixDQURKLENBREosQ0FESjtBQXFCSCxDQTNDRDs7R0FBTWxDLFk7O0tBQUFBLFk7QUE2Q1NBLDJFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2R1Y3Rvcy9bWy4uLmluZGV4XV0uZTI3ZmJkMmY2NWNjZTZkMmYxZDYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCx7IHVzZUVmZmVjdCx1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IENhcmRQcm9kdWN0b01vZHVsZSBmcm9tICAnLi9DYXJkUHJvZHVjdG8ubW9kdWxlLmNzcyc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7c2x1Zyxpc01vYmlsZX0gZnJvbSAnLi4vLi4vLi4vaGVscGVycy9pbmRleCc7XHJcbmltcG9ydCB7UFVCTElDX1VSTH0gZnJvbSAnLi4vLi4vLi4vY29uZmlnL2luZGV4JztcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XHJcblxyXG5jb25zdCBDYXJkUHJvZHVjdG8gPSAoe2ltYWdlbixwcmR9KSA9PiB7XHJcbiAgICBjb25zdCBbaXNQcm9kdWN0b0RldGFsbGUsIHNldElzUHJvZHVjdG9EZXRhbGxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3Qge3JvdXRlcn0gPSBSb3V0ZXI7XHJcbiAgICAgICAgaWYocm91dGVyLnJvdXRlID09ICcvcHJvZHVjdG8vWy4uLnByb2R1Y3RvXScpe1xyXG4gICAgICAgICAgICBzZXRJc1Byb2R1Y3RvRGV0YWxsZSh0cnVlKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbXSlcclxuICAgIGNvbnN0IHByb2Nlc2FyTm9tYnJlID0gbm9tYnJlPT57XHJcbiAgICAgICAgbGV0IG5vbWJyZVByb2Nlc2FkbyA9IG5vbWJyZTtcclxuICAgICAgICBpZihpc01vYmlsZSgpKXtcclxuICAgICAgICAgICAgaWYobm9tYnJlUHJvY2VzYWRvLmxlbmd0aD4yNSl7XHJcbiAgICAgICAgICAgICAgICBub21icmVQcm9jZXNhZG8gPSBub21icmUuc3Vic3RyaW5nKDAsMjIpKycuLi4nO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGlmKG5vbWJyZVByb2Nlc2Fkby5sZW5ndGg+NDUpe1xyXG4gICAgICAgICAgICAgICAgbm9tYnJlUHJvY2VzYWRvID0gbm9tYnJlLnN1YnN0cmluZygwLDQwKSsnLi4uJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbm9tYnJlUHJvY2VzYWRvO1xyXG4gICAgfVxyXG4gICAgY29uc29sZS5sb2coaXNQcm9kdWN0b0RldGFsbGUpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8TGluayBocmVmPXtgJHtQVUJMSUNfVVJMfS9wcm9kdWN0by8ke3NsdWcocHJkLnN1YlByb2R1Y3RvKX0vJHtwcmQuaWRTdWJQcm9kdWN0b31gfT5cclxuICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Q2FyZFByb2R1Y3RvTW9kdWxlLmNvbnRhaW5lcl9fcHJvZHVjdG8gKyAnICcgKyBgbXktM2B9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17Q2FyZFByb2R1Y3RvTW9kdWxlLmhlYWRlcl9fY2FyZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtpbWFnZW59IGFsdD1cInByZFwiIGNsYXNzTmFtZT17Q2FyZFByb2R1Y3RvTW9kdWxlLmltZ30vPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e0NhcmRQcm9kdWN0b01vZHVsZS5ib2R5X19jYXJkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtDYXJkUHJvZHVjdG9Nb2R1bGUubGFiZWxfX21hcmNhKyAnICcgKyBgZC1ibG9jayB0ZXh0LW11dGVkYH0+e3ByZC5tYXJjYX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9e0NhcmRQcm9kdWN0b01vZHVsZS5ub21icmVfX3Byb2R1Y3RvKyAnICcgKyBgdGV4dC1tdXRlZGB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3Byb2Nlc2FyTm9tYnJlKHByZC5zdWJQcm9kdWN0byl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvaDY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Q2FyZFByb2R1Y3RvTW9kdWxlLmNhbnRpZGFkfT57cHJkLnBlc299IEtHPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPXtDYXJkUHJvZHVjdG9Nb2R1bGUucHJlY2lvICsgJyAnICsgYHRleHQtYmxhY2tgfT4ke3ByZC5wcmVjaW9VbmlkYWR9PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtDYXJkUHJvZHVjdG9Nb2R1bGUubGFiZWxfX2Rlc2N1ZW50bysgJyAnICsgYGJnLXJlZGB9PjE1JSBPZmY8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICk7XHJcbn1cclxuIFxyXG5leHBvcnQgZGVmYXVsdCBDYXJkUHJvZHVjdG87Il0sInNvdXJjZVJvb3QiOiIifQ==