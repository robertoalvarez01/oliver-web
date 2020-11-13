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

  return __jsx("div", {
    className: "jsx-2289326465" + " " + "row slider__fotos",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-2289326465" + " " + "col-12 col-md-4 text-center col__imagenes-chicas pt-5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
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
        lineNumber: 16,
        columnNumber: 30
      }
    }) : __jsx("img", {
      key: key,
      src: img,
      onClick: function onClick() {
        return setImagenActive(img, key, "".concat(props.subProductos[key - 1].peso), props.subProductos[key - 1].precioUnidad, "".concat(props.subProductos[key - 1].tamaño), props.subProductos[key - 1].idSubProducto, "".concat(props.subProductos[key - 1].subProducto));
      },
      alt: "prd",
      className: "jsx-2289326465" + " " + "img_small",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 21
      }
    });
  })), __jsx("div", {
    className: "jsx-2289326465" + " " + "col-12 col-md-8 col__imagen-grande",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: props.imagenes[0],
    alt: "prd",
    className: "jsx-2289326465" + " " + "img-fluid img__box-grande",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 17
    }
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2289326465",
    __self: _this
  }, ".slider__fotos.jsx-2289326465 .col__imagenes-chicas.jsx-2289326465{height:429px;}.slider__fotos.jsx-2289326465 .col__imagenes-chicas.jsx-2289326465 img.jsx-2289326465{height:120px;width:90px !important;cursor:pointer;}.slider__fotos.jsx-2289326465 .col__imagenes-chicas.jsx-2289326465 img.jsx-2289326465:hover{-webkit-filter:brightness(70%);filter:brightness(70%);-webkit-transition:all .5s ease;transition:all .5s ease;}.slider__fotos.jsx-2289326465 .col__imagenes-chicas.jsx-2289326465 img.active.jsx-2289326465{border:2px solid #FFB347;}@media(max-width:768px){.slider__fotos.jsx-2289326465{-webkit-flex-direction:column-reverse;-ms-flex-direction:column-reverse;flex-direction:column-reverse;}.slider__fotos.jsx-2289326465 .col__imagen-grande.jsx-2289326465{text-align:center;}.slider__fotos.jsx-2289326465 .col__imagen-grande.jsx-2289326465 img.jsx-2289326465{height:345px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcZnJhbmNcXERvY3VtZW50c1xcb2xpdmVyLTJcXHNpdGlvLWRlc2FcXHNyY1xcY29tcG9uZW50c1xcUHJvZHVjdG9TaW5nbGVcXHNsaWRlckZvdG9zLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNCd0IsQUFHa0MsQUFJQSxBQU1VLEFBTTVCLEFBSXVDLEFBR1osQUFHTCxhQXpCckIsQUFJMEIsQUFzQnRCLEtBSEEsT0FSSixVQVZtQixlQUNuQixJQUk0QixnREFVeEIsUUFUSiIsImZpbGUiOiJDOlxcVXNlcnNcXGZyYW5jXFxEb2N1bWVudHNcXG9saXZlci0yXFxzaXRpby1kZXNhXFxzcmNcXGNvbXBvbmVudHNcXFByb2R1Y3RvU2luZ2xlXFxzbGlkZXJGb3Rvcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmNvbnN0IFNsaWRlckZvdG9zUHJvZHVjdG8gPSAocHJvcHMpID0+IHtcclxuXHJcbiAgICBjb25zdCBzZXRJbWFnZW5BY3RpdmUgPSAoaW1nLGtleSxwZXNvLHByZWNpb1VuaWRhZCx0YW1hw7FvLGlkU3ViUHJvZHVjdG8sc3ViUHJvZHVjdG8pPT57XHJcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2ltZ19zbWFsbCcpLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdpbWdfc21hbGwnKVtpbmRleF0uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdpbWdfc21hbGwnKVtrZXldLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbWdfX2JveC1ncmFuZGUnKS5zcmMgPSBpbWc7XHJcbiAgICAgICAgcHJvcHMuY2hhbmdlUGVzbyhrZXksYCR7cGVzb31gLHByZWNpb1VuaWRhZCxgJHt0YW1hw7FvfWAsaWRTdWJQcm9kdWN0byxgJHtzdWJQcm9kdWN0b31gKVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBzbGlkZXJfX2ZvdG9zXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1tZC00IHRleHQtY2VudGVyIGNvbF9faW1hZ2VuZXMtY2hpY2FzIHB0LTVcIj5cclxuICAgICAgICAgICAgICAgIHtwcm9wcy5pbWFnZW5lcy5tYXAoKGltZyxrZXkpPT4oXHJcbiAgICAgICAgICAgICAgICAgICAgKGtleT09MCk/PGltZyBrZXk9e2tleX0gc3JjPXtpbWd9IG9uQ2xpY2s9eygpPT5zZXRJbWFnZW5BY3RpdmUoaW1nLGtleSl9IGFsdD1cInByZFwiIGNsYXNzTmFtZT1cImltZ19zbWFsbCBhY3RpdmVcIi8+OlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcga2V5PXtrZXl9IHNyYz17aW1nfSBvbkNsaWNrPXsoKT0+c2V0SW1hZ2VuQWN0aXZlKGltZyxrZXksYCR7cHJvcHMuc3ViUHJvZHVjdG9zW2tleS0xXS5wZXNvfWAscHJvcHMuc3ViUHJvZHVjdG9zW2tleS0xXS5wcmVjaW9VbmlkYWQsYCR7cHJvcHMuc3ViUHJvZHVjdG9zW2tleS0xXS50YW1hw7FvfWAscHJvcHMuc3ViUHJvZHVjdG9zW2tleS0xXS5pZFN1YlByb2R1Y3RvLGAke3Byb3BzLnN1YlByb2R1Y3Rvc1trZXktMV0uc3ViUHJvZHVjdG99YCl9IGFsdD1cInByZFwiIGNsYXNzTmFtZT1cImltZ19zbWFsbFwiLz5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLW1kLTggY29sX19pbWFnZW4tZ3JhbmRlXCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17cHJvcHMuaW1hZ2VuZXNbMF19IGFsdD1cInByZFwiIGNsYXNzTmFtZT1cImltZy1mbHVpZCBpbWdfX2JveC1ncmFuZGVcIi8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICAgICAuc2xpZGVyX19mb3RvcyAuY29sX19pbWFnZW5lcy1jaGljYXN7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0MjlweDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuc2xpZGVyX19mb3RvcyAuY29sX19pbWFnZW5lcy1jaGljYXMgaW1ne1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDkwcHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLnNsaWRlcl9fZm90b3MgLmNvbF9faW1hZ2VuZXMtY2hpY2FzIGltZzpob3ZlcntcclxuICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IGJyaWdodG5lc3MoNzAlKTtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjVzIGVhc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLnNsaWRlcl9fZm90b3MgLmNvbF9faW1hZ2VuZXMtY2hpY2FzIGltZy5hY3RpdmV7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOjJweCBzb2xpZCAjRkZCMzQ3XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgQG1lZGlhKG1heC13aWR0aDo3NjhweCl7XHJcbiAgICAgICAgICAgICAgICAgICAgLnNsaWRlcl9fZm90b3N7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLnNsaWRlcl9fZm90b3MgLmNvbF9faW1hZ2VuLWdyYW5kZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuc2xpZGVyX19mb3RvcyAuY29sX19pbWFnZW4tZ3JhbmRlIGltZ3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzNDVweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuIFxyXG5leHBvcnQgZGVmYXVsdCBTbGlkZXJGb3Rvc1Byb2R1Y3RvOyJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\franc\\\\Documents\\\\oliver-2\\\\sitio-desa\\\\src\\\\components\\\\ProductoSingle\\\\sliderFotos.js */"));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUHJvZHVjdG9TaW5nbGUvc2xpZGVyRm90b3MuanMiXSwibmFtZXMiOlsiU2xpZGVyRm90b3NQcm9kdWN0byIsInByb3BzIiwic2V0SW1hZ2VuQWN0aXZlIiwiaW1nIiwia2V5IiwicGVzbyIsInByZWNpb1VuaWRhZCIsInRhbWHDsW8iLCJpZFN1YlByb2R1Y3RvIiwic3ViUHJvZHVjdG8iLCJpbmRleCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImxlbmd0aCIsImNsYXNzTGlzdCIsInJlbW92ZSIsImFkZCIsInF1ZXJ5U2VsZWN0b3IiLCJzcmMiLCJjaGFuZ2VQZXNvIiwiaW1hZ2VuZXMiLCJtYXAiLCJzdWJQcm9kdWN0b3MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0EsSUFBTUEsbUJBQW1CLEdBQUcsU0FBdEJBLG1CQUFzQixDQUFDQyxLQUFELEVBQVc7QUFFbkMsTUFBTUMsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFDQyxHQUFELEVBQUtDLEdBQUwsRUFBU0MsSUFBVCxFQUFjQyxZQUFkLEVBQTJCQyxNQUEzQixFQUFrQ0MsYUFBbEMsRUFBZ0RDLFdBQWhELEVBQThEO0FBQ2xGLFNBQUssSUFBSUMsS0FBSyxHQUFHLENBQWpCLEVBQW9CQSxLQUFLLEdBQUdDLFFBQVEsQ0FBQ0Msc0JBQVQsQ0FBZ0MsV0FBaEMsRUFBNkNDLE1BQXpFLEVBQWlGSCxLQUFLLEVBQXRGLEVBQTBGO0FBQ3RGQyxjQUFRLENBQUNDLHNCQUFULENBQWdDLFdBQWhDLEVBQTZDRixLQUE3QyxFQUFvREksU0FBcEQsQ0FBOERDLE1BQTlELENBQXFFLFFBQXJFO0FBQ0g7O0FBQUE7QUFDREosWUFBUSxDQUFDQyxzQkFBVCxDQUFnQyxXQUFoQyxFQUE2Q1IsR0FBN0MsRUFBa0RVLFNBQWxELENBQTRERSxHQUE1RCxDQUFnRSxRQUFoRTtBQUNBTCxZQUFRLENBQUNNLGFBQVQsQ0FBdUIsa0JBQXZCLEVBQTJDQyxHQUEzQyxHQUFpRGYsR0FBakQ7QUFDQUYsU0FBSyxDQUFDa0IsVUFBTixDQUFpQmYsR0FBakIsWUFBd0JDLElBQXhCLEdBQStCQyxZQUEvQixZQUErQ0MsTUFBL0MsR0FBd0RDLGFBQXhELFlBQXlFQyxXQUF6RTtBQUNILEdBUEQ7O0FBUUEsU0FDSTtBQUFBLHdDQUFlLG1CQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFBLHdDQUFlLHVEQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDS1IsS0FBSyxDQUFDbUIsUUFBTixDQUFlQyxHQUFmLENBQW1CLFVBQUNsQixHQUFELEVBQUtDLEdBQUw7QUFBQSxXQUNmQSxHQUFHLElBQUUsQ0FBTixHQUFTO0FBQUssU0FBRyxFQUFFQSxHQUFWO0FBQWUsU0FBRyxFQUFFRCxHQUFwQjtBQUF5QixhQUFPLEVBQUU7QUFBQSxlQUFJRCxlQUFlLENBQUNDLEdBQUQsRUFBS0MsR0FBTCxDQUFuQjtBQUFBLE9BQWxDO0FBQWdFLFNBQUcsRUFBQyxLQUFwRTtBQUFBLDBDQUFvRixrQkFBcEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUFULEdBQ0E7QUFBSyxTQUFHLEVBQUVBLEdBQVY7QUFBZSxTQUFHLEVBQUVELEdBQXBCO0FBQXlCLGFBQU8sRUFBRTtBQUFBLGVBQUlELGVBQWUsQ0FBQ0MsR0FBRCxFQUFLQyxHQUFMLFlBQVlILEtBQUssQ0FBQ3FCLFlBQU4sQ0FBbUJsQixHQUFHLEdBQUMsQ0FBdkIsRUFBMEJDLElBQXRDLEdBQTZDSixLQUFLLENBQUNxQixZQUFOLENBQW1CbEIsR0FBRyxHQUFDLENBQXZCLEVBQTBCRSxZQUF2RSxZQUF1RkwsS0FBSyxDQUFDcUIsWUFBTixDQUFtQmxCLEdBQUcsR0FBQyxDQUF2QixFQUEwQkcsTUFBakgsR0FBMEhOLEtBQUssQ0FBQ3FCLFlBQU4sQ0FBbUJsQixHQUFHLEdBQUMsQ0FBdkIsRUFBMEJJLGFBQXBKLFlBQXFLUCxLQUFLLENBQUNxQixZQUFOLENBQW1CbEIsR0FBRyxHQUFDLENBQXZCLEVBQTBCSyxXQUEvTCxFQUFuQjtBQUFBLE9BQWxDO0FBQW9RLFNBQUcsRUFBQyxLQUF4UTtBQUFBLDBDQUF3UixXQUF4UjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRmdCO0FBQUEsR0FBbkIsQ0FETCxDQURKLEVBT0k7QUFBQSx3Q0FBZSxvQ0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxPQUFHLEVBQUVSLEtBQUssQ0FBQ21CLFFBQU4sQ0FBZSxDQUFmLENBQVY7QUFBNkIsT0FBRyxFQUFDLEtBQWpDO0FBQUEsd0NBQWlELDJCQUFqRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosQ0FQSjtBQUFBO0FBQUE7QUFBQSxxdEtBREo7QUE2Q0gsQ0F2REQ7O0tBQU1wQixtQjtBQXlEU0Esa0ZBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvZHVjdG8vWy4uLnByb2R1Y3RvXS5iNTQwN2RjMGQwYjU2NDMxY2I3Zi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuY29uc3QgU2xpZGVyRm90b3NQcm9kdWN0byA9IChwcm9wcykgPT4ge1xyXG5cclxuICAgIGNvbnN0IHNldEltYWdlbkFjdGl2ZSA9IChpbWcsa2V5LHBlc28scHJlY2lvVW5pZGFkLHRhbWHDsW8saWRTdWJQcm9kdWN0byxzdWJQcm9kdWN0byk9PntcclxuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnaW1nX3NtYWxsJykubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2ltZ19zbWFsbCcpW2luZGV4XS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2ltZ19zbWFsbCcpW2tleV0uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmltZ19fYm94LWdyYW5kZScpLnNyYyA9IGltZztcclxuICAgICAgICBwcm9wcy5jaGFuZ2VQZXNvKGtleSxgJHtwZXNvfWAscHJlY2lvVW5pZGFkLGAke3RhbWHDsW99YCxpZFN1YlByb2R1Y3RvLGAke3N1YlByb2R1Y3RvfWApXHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHNsaWRlcl9fZm90b3NcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLW1kLTQgdGV4dC1jZW50ZXIgY29sX19pbWFnZW5lcy1jaGljYXMgcHQtNVwiPlxyXG4gICAgICAgICAgICAgICAge3Byb3BzLmltYWdlbmVzLm1hcCgoaW1nLGtleSk9PihcclxuICAgICAgICAgICAgICAgICAgICAoa2V5PT0wKT88aW1nIGtleT17a2V5fSBzcmM9e2ltZ30gb25DbGljaz17KCk9PnNldEltYWdlbkFjdGl2ZShpbWcsa2V5KX0gYWx0PVwicHJkXCIgY2xhc3NOYW1lPVwiaW1nX3NtYWxsIGFjdGl2ZVwiLz46XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBrZXk9e2tleX0gc3JjPXtpbWd9IG9uQ2xpY2s9eygpPT5zZXRJbWFnZW5BY3RpdmUoaW1nLGtleSxgJHtwcm9wcy5zdWJQcm9kdWN0b3Nba2V5LTFdLnBlc299YCxwcm9wcy5zdWJQcm9kdWN0b3Nba2V5LTFdLnByZWNpb1VuaWRhZCxgJHtwcm9wcy5zdWJQcm9kdWN0b3Nba2V5LTFdLnRhbWHDsW99YCxwcm9wcy5zdWJQcm9kdWN0b3Nba2V5LTFdLmlkU3ViUHJvZHVjdG8sYCR7cHJvcHMuc3ViUHJvZHVjdG9zW2tleS0xXS5zdWJQcm9kdWN0b31gKX0gYWx0PVwicHJkXCIgY2xhc3NOYW1lPVwiaW1nX3NtYWxsXCIvPlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtbWQtOCBjb2xfX2ltYWdlbi1ncmFuZGVcIj5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtwcm9wcy5pbWFnZW5lc1swXX0gYWx0PVwicHJkXCIgY2xhc3NOYW1lPVwiaW1nLWZsdWlkIGltZ19fYm94LWdyYW5kZVwiLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgICAgIC5zbGlkZXJfX2ZvdG9zIC5jb2xfX2ltYWdlbmVzLWNoaWNhc3tcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQyOXB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5zbGlkZXJfX2ZvdG9zIC5jb2xfX2ltYWdlbmVzLWNoaWNhcyBpbWd7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMjBweDtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogOTBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuc2xpZGVyX19mb3RvcyAuY29sX19pbWFnZW5lcy1jaGljYXMgaW1nOmhvdmVye1xyXG4gICAgICAgICAgICAgICAgICAgIGZpbHRlcjogYnJpZ2h0bmVzcyg3MCUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAuNXMgZWFzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuc2xpZGVyX19mb3RvcyAuY29sX19pbWFnZW5lcy1jaGljYXMgaW1nLmFjdGl2ZXtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6MnB4IHNvbGlkICNGRkIzNDdcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBAbWVkaWEobWF4LXdpZHRoOjc2OHB4KXtcclxuICAgICAgICAgICAgICAgICAgICAuc2xpZGVyX19mb3Rvc3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuc2xpZGVyX19mb3RvcyAuY29sX19pbWFnZW4tZ3JhbmRle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5zbGlkZXJfX2ZvdG9zIC5jb2xfX2ltYWdlbi1ncmFuZGUgaW1ne1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDM0NXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG4gXHJcbmV4cG9ydCBkZWZhdWx0IFNsaWRlckZvdG9zUHJvZHVjdG87Il0sInNvdXJjZVJvb3QiOiIifQ==