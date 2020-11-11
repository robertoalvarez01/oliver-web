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
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    console.log(next_router__WEBPACK_IMPORTED_MODULE_5___default.a);
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

  return __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "".concat(_config_index__WEBPACK_IMPORTED_MODULE_4__["PUBLIC_URL"], "/producto/").concat(Object(_helpers_index__WEBPACK_IMPORTED_MODULE_3__["slug"])(prd.subProducto), "/").concat(prd.idSubProducto),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: _CardProducto_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.container__producto + ' ' + "my-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 17
    }
  }, __jsx("section", {
    className: _CardProducto_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.header__card,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: imagen,
    alt: "prd",
    className: _CardProducto_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.img,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 25
    }
  })), __jsx("section", {
    className: _CardProducto_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.body__card,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 21
    }
  }, __jsx("span", {
    className: _CardProducto_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.label__marca + ' ' + "d-block text-muted",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 25
    }
  }, prd.marca), __jsx("h6", {
    className: _CardProducto_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.nombre__producto + ' ' + "text-muted",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 25
    }
  }, procesarNombre(prd.subProducto)), __jsx("span", {
    className: _CardProducto_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.cantidad,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 25
    }
  }, prd.peso, " KG"), __jsx("h3", {
    className: _CardProducto_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.precio + ' ' + "text-black",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 25
    }
  }, "$", prd.precioUnidad)), __jsx("span", {
    className: _CardProducto_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.label__descuento + ' ' + "bg-red",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ2FyZFByb2R1Y3RvL2luZGV4LmpzIl0sIm5hbWVzIjpbIkNhcmRQcm9kdWN0byIsImltYWdlbiIsInByZCIsInVzZUVmZmVjdCIsImNvbnNvbGUiLCJsb2ciLCJSb3V0ZXIiLCJwcm9jZXNhck5vbWJyZSIsIm5vbWJyZSIsIm5vbWJyZVByb2Nlc2FkbyIsImlzTW9iaWxlIiwibGVuZ3RoIiwic3Vic3RyaW5nIiwiUFVCTElDX1VSTCIsInNsdWciLCJzdWJQcm9kdWN0byIsImlkU3ViUHJvZHVjdG8iLCJDYXJkUHJvZHVjdG9Nb2R1bGUiLCJjb250YWluZXJfX3Byb2R1Y3RvIiwiaGVhZGVyX19jYXJkIiwiaW1nIiwiYm9keV9fY2FyZCIsImxhYmVsX19tYXJjYSIsIm1hcmNhIiwibm9tYnJlX19wcm9kdWN0byIsImNhbnRpZGFkIiwicGVzbyIsInByZWNpbyIsInByZWNpb1VuaWRhZCIsImxhYmVsX19kZXNjdWVudG8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsWUFBWSxHQUFHLFNBQWZBLFlBQWUsT0FBa0I7QUFBQTs7QUFBQSxNQUFoQkMsTUFBZ0IsUUFBaEJBLE1BQWdCO0FBQUEsTUFBVEMsR0FBUyxRQUFUQSxHQUFTO0FBQ25DQyx5REFBUyxDQUFDLFlBQU07QUFDWkMsV0FBTyxDQUFDQyxHQUFSLENBQVlDLGtEQUFaO0FBQ0gsR0FGUSxFQUVOLEVBRk0sQ0FBVDs7QUFHQSxNQUFNQyxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLENBQUFDLE1BQU0sRUFBRTtBQUMzQixRQUFJQyxlQUFlLEdBQUdELE1BQXRCOztBQUNBLFFBQUdFLCtEQUFRLEVBQVgsRUFBYztBQUNWLFVBQUdELGVBQWUsQ0FBQ0UsTUFBaEIsR0FBdUIsRUFBMUIsRUFBNkI7QUFDekJGLHVCQUFlLEdBQUdELE1BQU0sQ0FBQ0ksU0FBUCxDQUFpQixDQUFqQixFQUFtQixFQUFuQixJQUF1QixLQUF6QztBQUNIO0FBQ0osS0FKRCxNQUlLO0FBQ0QsVUFBR0gsZUFBZSxDQUFDRSxNQUFoQixHQUF1QixFQUExQixFQUE2QjtBQUN6QkYsdUJBQWUsR0FBR0QsTUFBTSxDQUFDSSxTQUFQLENBQWlCLENBQWpCLEVBQW1CLEVBQW5CLElBQXVCLEtBQXpDO0FBQ0g7QUFDSjs7QUFDRCxXQUFPSCxlQUFQO0FBQ0gsR0FaRDs7QUFjQSxTQUNJLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLFlBQUtJLHdEQUFMLHVCQUE0QkMsMkRBQUksQ0FBQ1osR0FBRyxDQUFDYSxXQUFMLENBQWhDLGNBQXFEYixHQUFHLENBQUNjLGFBQXpELENBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLGFBQVMsRUFBRUMsK0RBQWtCLENBQUNDLG1CQUFuQixHQUF5QyxHQUF6QyxTQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBUyxhQUFTLEVBQUVELCtEQUFrQixDQUFDRSxZQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxPQUFHLEVBQUVsQixNQUFWO0FBQWtCLE9BQUcsRUFBQyxLQUF0QjtBQUE0QixhQUFTLEVBQUVnQiwrREFBa0IsQ0FBQ0csR0FBMUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLENBREosRUFJSTtBQUFTLGFBQVMsRUFBRUgsK0RBQWtCLENBQUNJLFVBQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFNLGFBQVMsRUFBRUosK0RBQWtCLENBQUNLLFlBQW5CLEdBQWlDLEdBQWpDLHVCQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQStFcEIsR0FBRyxDQUFDcUIsS0FBbkYsQ0FESixFQUVJO0FBQUksYUFBUyxFQUFFTiwrREFBa0IsQ0FBQ08sZ0JBQW5CLEdBQXFDLEdBQXJDLGVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNLakIsY0FBYyxDQUFDTCxHQUFHLENBQUNhLFdBQUwsQ0FEbkIsQ0FGSixFQUtJO0FBQU0sYUFBUyxFQUFFRSwrREFBa0IsQ0FBQ1EsUUFBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUErQ3ZCLEdBQUcsQ0FBQ3dCLElBQW5ELFFBTEosRUFNSTtBQUFJLGFBQVMsRUFBRVQsK0RBQWtCLENBQUNVLE1BQW5CLEdBQTRCLEdBQTVCLGVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFpRXpCLEdBQUcsQ0FBQzBCLFlBQXJFLENBTkosQ0FKSixFQWFJO0FBQU0sYUFBUyxFQUFFWCwrREFBa0IsQ0FBQ1ksZ0JBQW5CLEdBQXFDLEdBQXJDLFdBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFiSixDQURKLENBREosQ0FESjtBQXFCSCxDQXZDRDs7R0FBTTdCLFk7O0tBQUFBLFk7QUF5Q1NBLDJFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2R1Y3Rvcy9bWy4uLmluZGV4XV0uNjhiZTRkNzZhZDhjNjgyMDI4YTUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBDYXJkUHJvZHVjdG9Nb2R1bGUgZnJvbSAgJy4vQ2FyZFByb2R1Y3RvLm1vZHVsZS5jc3MnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQge3NsdWcsaXNNb2JpbGV9IGZyb20gJy4uLy4uLy4uL2hlbHBlcnMvaW5kZXgnO1xyXG5pbXBvcnQge1BVQkxJQ19VUkx9IGZyb20gJy4uLy4uLy4uL2NvbmZpZy9pbmRleCc7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBDYXJkUHJvZHVjdG8gPSAoe2ltYWdlbixwcmR9KSA9PiB7XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFJvdXRlcik7XHJcbiAgICB9LCBbXSlcclxuICAgIGNvbnN0IHByb2Nlc2FyTm9tYnJlID0gbm9tYnJlPT57XHJcbiAgICAgICAgbGV0IG5vbWJyZVByb2Nlc2FkbyA9IG5vbWJyZTtcclxuICAgICAgICBpZihpc01vYmlsZSgpKXtcclxuICAgICAgICAgICAgaWYobm9tYnJlUHJvY2VzYWRvLmxlbmd0aD4yNSl7XHJcbiAgICAgICAgICAgICAgICBub21icmVQcm9jZXNhZG8gPSBub21icmUuc3Vic3RyaW5nKDAsMjIpKycuLi4nO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGlmKG5vbWJyZVByb2Nlc2Fkby5sZW5ndGg+NDUpe1xyXG4gICAgICAgICAgICAgICAgbm9tYnJlUHJvY2VzYWRvID0gbm9tYnJlLnN1YnN0cmluZygwLDQwKSsnLi4uJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbm9tYnJlUHJvY2VzYWRvO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPExpbmsgaHJlZj17YCR7UFVCTElDX1VSTH0vcHJvZHVjdG8vJHtzbHVnKHByZC5zdWJQcm9kdWN0byl9LyR7cHJkLmlkU3ViUHJvZHVjdG99YH0+XHJcbiAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e0NhcmRQcm9kdWN0b01vZHVsZS5jb250YWluZXJfX3Byb2R1Y3RvICsgJyAnICsgYG15LTNgfT5cclxuICAgICAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e0NhcmRQcm9kdWN0b01vZHVsZS5oZWFkZXJfX2NhcmR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17aW1hZ2VufSBhbHQ9XCJwcmRcIiBjbGFzc05hbWU9e0NhcmRQcm9kdWN0b01vZHVsZS5pbWd9Lz5cclxuICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtDYXJkUHJvZHVjdG9Nb2R1bGUuYm9keV9fY2FyZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Q2FyZFByb2R1Y3RvTW9kdWxlLmxhYmVsX19tYXJjYSsgJyAnICsgYGQtYmxvY2sgdGV4dC1tdXRlZGB9PntwcmQubWFyY2F9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPXtDYXJkUHJvZHVjdG9Nb2R1bGUubm9tYnJlX19wcm9kdWN0bysgJyAnICsgYHRleHQtbXV0ZWRgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9jZXNhck5vbWJyZShwcmQuc3ViUHJvZHVjdG8pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2g2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e0NhcmRQcm9kdWN0b01vZHVsZS5jYW50aWRhZH0+e3ByZC5wZXNvfSBLRzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT17Q2FyZFByb2R1Y3RvTW9kdWxlLnByZWNpbyArICcgJyArIGB0ZXh0LWJsYWNrYH0+JHtwcmQucHJlY2lvVW5pZGFkfTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Q2FyZFByb2R1Y3RvTW9kdWxlLmxhYmVsX19kZXNjdWVudG8rICcgJyArIGBiZy1yZWRgfT4xNSUgT2ZmPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICApO1xyXG59XHJcbiBcclxuZXhwb3J0IGRlZmF1bHQgQ2FyZFByb2R1Y3RvOyJdLCJzb3VyY2VSb290IjoiIn0=