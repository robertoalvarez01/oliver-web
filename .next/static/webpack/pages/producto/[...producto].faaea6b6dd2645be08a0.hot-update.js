webpackHotUpdate_N_E("pages/producto/[...producto]",{

/***/ "./src/components/ProductoSingle/sliderFotos.js":
/*!******************************************************!*\
  !*** ./src/components/ProductoSingle/sliderFotos.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _this = undefined,
    _jsxFileName = "C:\\Users\\franc\\Documents\\oliver-2\\sitio-desa\\src\\components\\ProductoSingle\\sliderFotos.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


var SliderFotosProducto = function SliderFotosProducto(props) {
  var setImagenActive = function setImagenActive(img, key, peso, precioUnidad, tamaño, idSubProducto, subProducto) {
    for (var index = 0; index < document.getElementsByClassName('img_small').length; index++) {
      document.getElementsByClassName('img_small')[index].classList.remove('active');
    }

    ;
    document.getElementsByClassName('img_small')[key].classList.add('active');
    document.querySelector('.img__box-grande').src = img;
    props.changePeso(key, "".concat(peso), precioUnidad, "".concat(tamaño), idSubProducto, "".concat(subProducto));
  };

  console.log(props);
  return __jsx("div", {
    className: "jsx-2289326465" + " " + "row slider__fotos",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-2289326465" + " " + "col-12 col-md-4 text-center col__imagenes-chicas pt-5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }
  }, props.imagenes.map(function (img, key) {
    return key == 0 ? __jsx("img", {
      key: key,
      src: img,
      onClick: function onClick() {
        return setImagenActive(img, key);
      },
      alt: "prd",
      className: "jsx-2289326465" + " " + "img_small active",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 30
      }
    }) : __jsx("img", {
      key: key,
      src: img,
      onClick: function onClick() {
        return setImagenActive(img, key, "".concat(props.moreProducts[key - 1].peso), props.moreProducts[key - 1].precioUnidad, "".concat(props.moreProducts[key - 1].tamaño), props.moreProducts[key - 1].idSubProducto, "".concat(props.moreProducts[key - 1].subProducto));
      },
      alt: "prd",
      className: "jsx-2289326465" + " " + "img_small",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 21
      }
    });
  })), __jsx("div", {
    className: "jsx-2289326465" + " " + "col-12 col-md-8 col__imagen-grande",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: props.imagenes[0],
    alt: "prd",
    className: "jsx-2289326465" + " " + "img-fluid img__box-grande",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 17
    }
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2289326465",
    __self: _this
  }, ".slider__fotos.jsx-2289326465 .col__imagenes-chicas.jsx-2289326465{height:429px;}.slider__fotos.jsx-2289326465 .col__imagenes-chicas.jsx-2289326465 img.jsx-2289326465{height:120px;width:90px !important;cursor:pointer;}.slider__fotos.jsx-2289326465 .col__imagenes-chicas.jsx-2289326465 img.jsx-2289326465:hover{-webkit-filter:brightness(70%);filter:brightness(70%);-webkit-transition:all .5s ease;transition:all .5s ease;}.slider__fotos.jsx-2289326465 .col__imagenes-chicas.jsx-2289326465 img.active.jsx-2289326465{border:2px solid #FFB347;}@media(max-width:768px){.slider__fotos.jsx-2289326465{-webkit-flex-direction:column-reverse;-ms-flex-direction:column-reverse;flex-direction:column-reverse;}.slider__fotos.jsx-2289326465 .col__imagen-grande.jsx-2289326465{text-align:center;}.slider__fotos.jsx-2289326465 .col__imagen-grande.jsx-2289326465 img.jsx-2289326465{height:345px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcZnJhbmNcXERvY3VtZW50c1xcb2xpdmVyLTJcXHNpdGlvLWRlc2FcXHNyY1xcY29tcG9uZW50c1xcUHJvZHVjdG9TaW5nbGVcXHNsaWRlckZvdG9zLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVCd0IsQUFHa0MsQUFJQSxBQU1VLEFBTTVCLEFBSXVDLEFBR1osQUFHTCxhQXpCckIsQUFJMEIsQUFzQnRCLEtBSEEsT0FSSixVQVZtQixlQUNuQixJQUk0QixnREFVeEIsUUFUSiIsImZpbGUiOiJDOlxcVXNlcnNcXGZyYW5jXFxEb2N1bWVudHNcXG9saXZlci0yXFxzaXRpby1kZXNhXFxzcmNcXGNvbXBvbmVudHNcXFByb2R1Y3RvU2luZ2xlXFxzbGlkZXJGb3Rvcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmNvbnN0IFNsaWRlckZvdG9zUHJvZHVjdG8gPSAocHJvcHMpID0+IHtcclxuXHJcbiAgICBjb25zdCBzZXRJbWFnZW5BY3RpdmUgPSAoaW1nLGtleSxwZXNvLHByZWNpb1VuaWRhZCx0YW1hw7FvLGlkU3ViUHJvZHVjdG8sc3ViUHJvZHVjdG8pPT57XHJcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2ltZ19zbWFsbCcpLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdpbWdfc21hbGwnKVtpbmRleF0uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdpbWdfc21hbGwnKVtrZXldLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbWdfX2JveC1ncmFuZGUnKS5zcmMgPSBpbWc7XHJcbiAgICAgICAgcHJvcHMuY2hhbmdlUGVzbyhrZXksYCR7cGVzb31gLHByZWNpb1VuaWRhZCxgJHt0YW1hw7FvfWAsaWRTdWJQcm9kdWN0byxgJHtzdWJQcm9kdWN0b31gKVxyXG4gICAgfVxyXG4gICAgY29uc29sZS5sb2cocHJvcHMpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBzbGlkZXJfX2ZvdG9zXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1tZC00IHRleHQtY2VudGVyIGNvbF9faW1hZ2VuZXMtY2hpY2FzIHB0LTVcIj5cclxuICAgICAgICAgICAgICAgIHtwcm9wcy5pbWFnZW5lcy5tYXAoKGltZyxrZXkpPT4oXHJcbiAgICAgICAgICAgICAgICAgICAgKGtleT09MCk/PGltZyBrZXk9e2tleX0gc3JjPXtpbWd9IG9uQ2xpY2s9eygpPT5zZXRJbWFnZW5BY3RpdmUoaW1nLGtleSl9IGFsdD1cInByZFwiIGNsYXNzTmFtZT1cImltZ19zbWFsbCBhY3RpdmVcIi8+OlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcga2V5PXtrZXl9IHNyYz17aW1nfSBvbkNsaWNrPXsoKT0+c2V0SW1hZ2VuQWN0aXZlKGltZyxrZXksYCR7cHJvcHMubW9yZVByb2R1Y3RzW2tleS0xXS5wZXNvfWAscHJvcHMubW9yZVByb2R1Y3RzW2tleS0xXS5wcmVjaW9VbmlkYWQsYCR7cHJvcHMubW9yZVByb2R1Y3RzW2tleS0xXS50YW1hw7FvfWAscHJvcHMubW9yZVByb2R1Y3RzW2tleS0xXS5pZFN1YlByb2R1Y3RvLGAke3Byb3BzLm1vcmVQcm9kdWN0c1trZXktMV0uc3ViUHJvZHVjdG99YCl9IGFsdD1cInByZFwiIGNsYXNzTmFtZT1cImltZ19zbWFsbFwiLz5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLW1kLTggY29sX19pbWFnZW4tZ3JhbmRlXCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17cHJvcHMuaW1hZ2VuZXNbMF19IGFsdD1cInByZFwiIGNsYXNzTmFtZT1cImltZy1mbHVpZCBpbWdfX2JveC1ncmFuZGVcIi8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICAgICAuc2xpZGVyX19mb3RvcyAuY29sX19pbWFnZW5lcy1jaGljYXN7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0MjlweDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuc2xpZGVyX19mb3RvcyAuY29sX19pbWFnZW5lcy1jaGljYXMgaW1ne1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDkwcHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLnNsaWRlcl9fZm90b3MgLmNvbF9faW1hZ2VuZXMtY2hpY2FzIGltZzpob3ZlcntcclxuICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IGJyaWdodG5lc3MoNzAlKTtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjVzIGVhc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLnNsaWRlcl9fZm90b3MgLmNvbF9faW1hZ2VuZXMtY2hpY2FzIGltZy5hY3RpdmV7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOjJweCBzb2xpZCAjRkZCMzQ3XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgQG1lZGlhKG1heC13aWR0aDo3NjhweCl7XHJcbiAgICAgICAgICAgICAgICAgICAgLnNsaWRlcl9fZm90b3N7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLnNsaWRlcl9fZm90b3MgLmNvbF9faW1hZ2VuLWdyYW5kZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuc2xpZGVyX19mb3RvcyAuY29sX19pbWFnZW4tZ3JhbmRlIGltZ3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzNDVweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuIFxyXG5leHBvcnQgZGVmYXVsdCBTbGlkZXJGb3Rvc1Byb2R1Y3RvOyJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\franc\\\\Documents\\\\oliver-2\\\\sitio-desa\\\\src\\\\components\\\\ProductoSingle\\\\sliderFotos.js */"));
};

_c = SliderFotosProducto;
/* harmony default export */ __webpack_exports__["default"] = (SliderFotosProducto);

var _c;

$RefreshReg$(_c, "SliderFotosProducto");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUHJvZHVjdG9TaW5nbGUvc2xpZGVyRm90b3MuanMiXSwibmFtZXMiOlsiU2xpZGVyRm90b3NQcm9kdWN0byIsInByb3BzIiwic2V0SW1hZ2VuQWN0aXZlIiwiaW1nIiwia2V5IiwicGVzbyIsInByZWNpb1VuaWRhZCIsInRhbWHDsW8iLCJpZFN1YlByb2R1Y3RvIiwic3ViUHJvZHVjdG8iLCJpbmRleCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImxlbmd0aCIsImNsYXNzTGlzdCIsInJlbW92ZSIsImFkZCIsInF1ZXJ5U2VsZWN0b3IiLCJzcmMiLCJjaGFuZ2VQZXNvIiwiY29uc29sZSIsImxvZyIsImltYWdlbmVzIiwibWFwIiwibW9yZVByb2R1Y3RzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBLElBQU1BLG1CQUFtQixHQUFHLFNBQXRCQSxtQkFBc0IsQ0FBQ0MsS0FBRCxFQUFXO0FBRW5DLE1BQU1DLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQ0MsR0FBRCxFQUFLQyxHQUFMLEVBQVNDLElBQVQsRUFBY0MsWUFBZCxFQUEyQkMsTUFBM0IsRUFBa0NDLGFBQWxDLEVBQWdEQyxXQUFoRCxFQUE4RDtBQUNsRixTQUFLLElBQUlDLEtBQUssR0FBRyxDQUFqQixFQUFvQkEsS0FBSyxHQUFHQyxRQUFRLENBQUNDLHNCQUFULENBQWdDLFdBQWhDLEVBQTZDQyxNQUF6RSxFQUFpRkgsS0FBSyxFQUF0RixFQUEwRjtBQUN0RkMsY0FBUSxDQUFDQyxzQkFBVCxDQUFnQyxXQUFoQyxFQUE2Q0YsS0FBN0MsRUFBb0RJLFNBQXBELENBQThEQyxNQUE5RCxDQUFxRSxRQUFyRTtBQUNIOztBQUFBO0FBQ0RKLFlBQVEsQ0FBQ0Msc0JBQVQsQ0FBZ0MsV0FBaEMsRUFBNkNSLEdBQTdDLEVBQWtEVSxTQUFsRCxDQUE0REUsR0FBNUQsQ0FBZ0UsUUFBaEU7QUFDQUwsWUFBUSxDQUFDTSxhQUFULENBQXVCLGtCQUF2QixFQUEyQ0MsR0FBM0MsR0FBaURmLEdBQWpEO0FBQ0FGLFNBQUssQ0FBQ2tCLFVBQU4sQ0FBaUJmLEdBQWpCLFlBQXdCQyxJQUF4QixHQUErQkMsWUFBL0IsWUFBK0NDLE1BQS9DLEdBQXdEQyxhQUF4RCxZQUF5RUMsV0FBekU7QUFDSCxHQVBEOztBQVFBVyxTQUFPLENBQUNDLEdBQVIsQ0FBWXBCLEtBQVo7QUFDQSxTQUNJO0FBQUEsd0NBQWUsbUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUEsd0NBQWUsdURBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNLQSxLQUFLLENBQUNxQixRQUFOLENBQWVDLEdBQWYsQ0FBbUIsVUFBQ3BCLEdBQUQsRUFBS0MsR0FBTDtBQUFBLFdBQ2ZBLEdBQUcsSUFBRSxDQUFOLEdBQVM7QUFBSyxTQUFHLEVBQUVBLEdBQVY7QUFBZSxTQUFHLEVBQUVELEdBQXBCO0FBQXlCLGFBQU8sRUFBRTtBQUFBLGVBQUlELGVBQWUsQ0FBQ0MsR0FBRCxFQUFLQyxHQUFMLENBQW5CO0FBQUEsT0FBbEM7QUFBZ0UsU0FBRyxFQUFDLEtBQXBFO0FBQUEsMENBQW9GLGtCQUFwRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQVQsR0FDQTtBQUFLLFNBQUcsRUFBRUEsR0FBVjtBQUFlLFNBQUcsRUFBRUQsR0FBcEI7QUFBeUIsYUFBTyxFQUFFO0FBQUEsZUFBSUQsZUFBZSxDQUFDQyxHQUFELEVBQUtDLEdBQUwsWUFBWUgsS0FBSyxDQUFDdUIsWUFBTixDQUFtQnBCLEdBQUcsR0FBQyxDQUF2QixFQUEwQkMsSUFBdEMsR0FBNkNKLEtBQUssQ0FBQ3VCLFlBQU4sQ0FBbUJwQixHQUFHLEdBQUMsQ0FBdkIsRUFBMEJFLFlBQXZFLFlBQXVGTCxLQUFLLENBQUN1QixZQUFOLENBQW1CcEIsR0FBRyxHQUFDLENBQXZCLEVBQTBCRyxNQUFqSCxHQUEwSE4sS0FBSyxDQUFDdUIsWUFBTixDQUFtQnBCLEdBQUcsR0FBQyxDQUF2QixFQUEwQkksYUFBcEosWUFBcUtQLEtBQUssQ0FBQ3VCLFlBQU4sQ0FBbUJwQixHQUFHLEdBQUMsQ0FBdkIsRUFBMEJLLFdBQS9MLEVBQW5CO0FBQUEsT0FBbEM7QUFBb1EsU0FBRyxFQUFDLEtBQXhRO0FBQUEsMENBQXdSLFdBQXhSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFGZ0I7QUFBQSxHQUFuQixDQURMLENBREosRUFPSTtBQUFBLHdDQUFlLG9DQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLE9BQUcsRUFBRVIsS0FBSyxDQUFDcUIsUUFBTixDQUFlLENBQWYsQ0FBVjtBQUE2QixPQUFHLEVBQUMsS0FBakM7QUFBQSx3Q0FBaUQsMkJBQWpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixDQVBKO0FBQUE7QUFBQTtBQUFBLHl2S0FESjtBQTZDSCxDQXhERDs7S0FBTXRCLG1CO0FBMERTQSxrRkFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9kdWN0by9bLi4ucHJvZHVjdG9dLmZhYWVhNmI2ZGQyNjQ1YmUwOGEwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5jb25zdCBTbGlkZXJGb3Rvc1Byb2R1Y3RvID0gKHByb3BzKSA9PiB7XHJcblxyXG4gICAgY29uc3Qgc2V0SW1hZ2VuQWN0aXZlID0gKGltZyxrZXkscGVzbyxwcmVjaW9VbmlkYWQsdGFtYcOxbyxpZFN1YlByb2R1Y3RvLHN1YlByb2R1Y3RvKT0+e1xyXG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdpbWdfc21hbGwnKS5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnaW1nX3NtYWxsJylbaW5kZXhdLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnaW1nX3NtYWxsJylba2V5XS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW1nX19ib3gtZ3JhbmRlJykuc3JjID0gaW1nO1xyXG4gICAgICAgIHByb3BzLmNoYW5nZVBlc28oa2V5LGAke3Blc299YCxwcmVjaW9VbmlkYWQsYCR7dGFtYcOxb31gLGlkU3ViUHJvZHVjdG8sYCR7c3ViUHJvZHVjdG99YClcclxuICAgIH1cclxuICAgIGNvbnNvbGUubG9nKHByb3BzKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgc2xpZGVyX19mb3Rvc1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtbWQtNCB0ZXh0LWNlbnRlciBjb2xfX2ltYWdlbmVzLWNoaWNhcyBwdC01XCI+XHJcbiAgICAgICAgICAgICAgICB7cHJvcHMuaW1hZ2VuZXMubWFwKChpbWcsa2V5KT0+KFxyXG4gICAgICAgICAgICAgICAgICAgIChrZXk9PTApPzxpbWcga2V5PXtrZXl9IHNyYz17aW1nfSBvbkNsaWNrPXsoKT0+c2V0SW1hZ2VuQWN0aXZlKGltZyxrZXkpfSBhbHQ9XCJwcmRcIiBjbGFzc05hbWU9XCJpbWdfc21hbGwgYWN0aXZlXCIvPjpcclxuICAgICAgICAgICAgICAgICAgICA8aW1nIGtleT17a2V5fSBzcmM9e2ltZ30gb25DbGljaz17KCk9PnNldEltYWdlbkFjdGl2ZShpbWcsa2V5LGAke3Byb3BzLm1vcmVQcm9kdWN0c1trZXktMV0ucGVzb31gLHByb3BzLm1vcmVQcm9kdWN0c1trZXktMV0ucHJlY2lvVW5pZGFkLGAke3Byb3BzLm1vcmVQcm9kdWN0c1trZXktMV0udGFtYcOxb31gLHByb3BzLm1vcmVQcm9kdWN0c1trZXktMV0uaWRTdWJQcm9kdWN0byxgJHtwcm9wcy5tb3JlUHJvZHVjdHNba2V5LTFdLnN1YlByb2R1Y3RvfWApfSBhbHQ9XCJwcmRcIiBjbGFzc05hbWU9XCJpbWdfc21hbGxcIi8+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1tZC04IGNvbF9faW1hZ2VuLWdyYW5kZVwiPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e3Byb3BzLmltYWdlbmVzWzBdfSBhbHQ9XCJwcmRcIiBjbGFzc05hbWU9XCJpbWctZmx1aWQgaW1nX19ib3gtZ3JhbmRlXCIvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAgICAgLnNsaWRlcl9fZm90b3MgLmNvbF9faW1hZ2VuZXMtY2hpY2Fze1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNDI5cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLnNsaWRlcl9fZm90b3MgLmNvbF9faW1hZ2VuZXMtY2hpY2FzIGltZ3tcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA5MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5zbGlkZXJfX2ZvdG9zIC5jb2xfX2ltYWdlbmVzLWNoaWNhcyBpbWc6aG92ZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyOiBicmlnaHRuZXNzKDcwJSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIC41cyBlYXNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5zbGlkZXJfX2ZvdG9zIC5jb2xfX2ltYWdlbmVzLWNoaWNhcyBpbWcuYWN0aXZle1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjoycHggc29saWQgI0ZGQjM0N1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIEBtZWRpYShtYXgtd2lkdGg6NzY4cHgpe1xyXG4gICAgICAgICAgICAgICAgICAgIC5zbGlkZXJfX2ZvdG9ze1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5zbGlkZXJfX2ZvdG9zIC5jb2xfX2ltYWdlbi1ncmFuZGV7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLnNsaWRlcl9fZm90b3MgLmNvbF9faW1hZ2VuLWdyYW5kZSBpbWd7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzQ1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcbiBcclxuZXhwb3J0IGRlZmF1bHQgU2xpZGVyRm90b3NQcm9kdWN0bzsiXSwic291cmNlUm9vdCI6IiJ9