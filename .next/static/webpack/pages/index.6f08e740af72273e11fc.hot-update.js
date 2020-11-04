webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/BannerCategorias/index.js":
/*!**************************************************!*\
  !*** ./src/components/BannerCategorias/index.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _CardCategoria__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../CardCategoria */ "./src/components/CardCategoria/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store_actions_categoriasAction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../store/actions/categoriasAction */ "./store/actions/categoriasAction.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\franc\\Documents\\oliver-2\\oliver-sitio\\src\\components\\BannerCategorias\\index.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





var BannerCategorias = function BannerCategorias(props) {
  _s();

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    getCategorias();
  }, []);

  var getCategorias = function getCategorias() {
    if (props.categorias.length === 0) {
      props.traerTodas();
    }
  };

  return __jsx("section", {
    className: "jsx-1900896039" + " " + "wrapper__categorias bg-yellow",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-1900896039" + " " + "container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }
  }, __jsx("h3", {
    className: "jsx-1900896039" + " " + "mb-5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 17
    }
  }, "Compr\xE1 seg\xFAn tu categoria"), __jsx("div", {
    className: "jsx-1900896039" + " " + "row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 17
    }
  }, props.categorias.map(function (cat, key) {
    return __jsx("div", {
      key: key,
      className: "jsx-1900896039" + " " + "col-4 col-md-3",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 25
      }
    }, __jsx(_CardCategoria__WEBPACK_IMPORTED_MODULE_2__["default"], {
      categoria: cat,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 29
      }
    }));
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1900896039",
    __self: _this
  }, ".wrapper__categorias.jsx-1900896039{background-color:#FFB347;padding:35px 0px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcZnJhbmNcXERvY3VtZW50c1xcb2xpdmVyLTJcXG9saXZlci1zaXRpb1xcc3JjXFxjb21wb25lbnRzXFxCYW5uZXJDYXRlZ29yaWFzXFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyQndCLEFBRzhDLHlCQUNULGlCQUNwQiIsImZpbGUiOiJDOlxcVXNlcnNcXGZyYW5jXFxEb2N1bWVudHNcXG9saXZlci0yXFxvbGl2ZXItc2l0aW9cXHNyY1xcY29tcG9uZW50c1xcQmFubmVyQ2F0ZWdvcmlhc1xcaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3Qse3VzZUVmZmVjdH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQ2FyZENhdGVnb3JpYSBmcm9tICcuLi9DYXJkQ2F0ZWdvcmlhJztcclxuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCAqIGFzIGNhdGVnb3JpYXNBY3Rpb24gZnJvbSAnLi4vLi4vLi4vc3RvcmUvYWN0aW9ucy9jYXRlZ29yaWFzQWN0aW9uJztcclxuXHJcbmNvbnN0IEJhbm5lckNhdGVnb3JpYXMgPSAocHJvcHMpID0+IHtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgZ2V0Q2F0ZWdvcmlhcygpO1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIGNvbnN0IGdldENhdGVnb3JpYXMgPSAoKT0+e1xyXG4gICAgICAgIGlmKHByb3BzLmNhdGVnb3JpYXMubGVuZ3RoPT09MCl7XHJcbiAgICAgICAgICAgIHByb3BzLnRyYWVyVG9kYXMoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIndyYXBwZXJfX2NhdGVnb3JpYXMgYmcteWVsbG93XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibWItNVwiPkNvbXByw6Egc2Vnw7puIHR1IGNhdGVnb3JpYTwvaDM+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtwcm9wcy5jYXRlZ29yaWFzLm1hcCgoY2F0LGtleSk9PihcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtNCBjb2wtbWQtM1wiIGtleT17a2V5fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkQ2F0ZWdvcmlhIGNhdGVnb3JpYT17Y2F0fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICAgICAud3JhcHBlcl9fY2F0ZWdvcmlhc3tcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZCMzQ3O1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6MzVweCAwcHg7XHJcbiAgICAgICAgICAgICAgICB9ICAgIFxyXG4gICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgKTtcclxufVxyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gcmVkdWNlcnM9PntcclxuICAgIHJldHVybiByZWR1Y2Vycy5jYXRlZ29yaWFzUmVkdWNlcjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsY2F0ZWdvcmlhc0FjdGlvbikoQmFubmVyQ2F0ZWdvcmlhcyk7Il19 */\n/*@ sourceURL=C:\\\\Users\\\\franc\\\\Documents\\\\oliver-2\\\\oliver-sitio\\\\src\\\\components\\\\BannerCategorias\\\\index.js */"));
};

_s(BannerCategorias, "OD7bBpZva5O2jO+Puf00hKivP7c=");

_c = BannerCategorias;

var mapStateToProps = function mapStateToProps(reducers) {
  return reducers.categoriasReducer;
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps, _store_actions_categoriasAction__WEBPACK_IMPORTED_MODULE_4__)(BannerCategorias));

var _c;

$RefreshReg$(_c, "BannerCategorias");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQmFubmVyQ2F0ZWdvcmlhcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJCYW5uZXJDYXRlZ29yaWFzIiwicHJvcHMiLCJ1c2VFZmZlY3QiLCJnZXRDYXRlZ29yaWFzIiwiY2F0ZWdvcmlhcyIsImxlbmd0aCIsInRyYWVyVG9kYXMiLCJtYXAiLCJjYXQiLCJrZXkiLCJtYXBTdGF0ZVRvUHJvcHMiLCJyZWR1Y2VycyIsImNhdGVnb3JpYXNSZWR1Y2VyIiwiY29ubmVjdCIsImNhdGVnb3JpYXNBY3Rpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQ2hDQyx5REFBUyxDQUFDLFlBQU07QUFDWkMsaUJBQWE7QUFDaEIsR0FGUSxFQUVOLEVBRk0sQ0FBVDs7QUFJQSxNQUFNQSxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLEdBQUk7QUFDdEIsUUFBR0YsS0FBSyxDQUFDRyxVQUFOLENBQWlCQyxNQUFqQixLQUEwQixDQUE3QixFQUErQjtBQUMzQkosV0FBSyxDQUFDSyxVQUFOO0FBQ0g7QUFDSixHQUpEOztBQUtBLFNBQ0k7QUFBQSx3Q0FBbUIsK0JBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFBLHdDQUFlLFdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUEsd0NBQWMsTUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVDQURKLEVBRUk7QUFBQSx3Q0FBZSxLQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDS0wsS0FBSyxDQUFDRyxVQUFOLENBQWlCRyxHQUFqQixDQUFxQixVQUFDQyxHQUFELEVBQUtDLEdBQUw7QUFBQSxXQUNsQjtBQUFnQyxTQUFHLEVBQUVBLEdBQXJDO0FBQUEsMENBQWUsZ0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNJLE1BQUMsc0RBQUQ7QUFBZSxlQUFTLEVBQUVELEdBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFESixDQURrQjtBQUFBLEdBQXJCLENBREwsQ0FGSixDQURKO0FBQUE7QUFBQTtBQUFBLHNpRkFESjtBQW9CSCxDQTlCRDs7R0FBTVIsZ0I7O0tBQUFBLGdCOztBQWdDTixJQUFNVSxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUFDLFFBQVEsRUFBRTtBQUM5QixTQUFPQSxRQUFRLENBQUNDLGlCQUFoQjtBQUNILENBRkQ7O0FBSWVDLDBIQUFPLENBQUNILGVBQUQsRUFBaUJJLDREQUFqQixDQUFQLENBQTBDZCxnQkFBMUMsQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC42ZjA4ZTc0MGFmNzIyNzNlMTFmYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LHt1c2VFZmZlY3R9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IENhcmRDYXRlZ29yaWEgZnJvbSAnLi4vQ2FyZENhdGVnb3JpYSc7XHJcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgKiBhcyBjYXRlZ29yaWFzQWN0aW9uIGZyb20gJy4uLy4uLy4uL3N0b3JlL2FjdGlvbnMvY2F0ZWdvcmlhc0FjdGlvbic7XHJcblxyXG5jb25zdCBCYW5uZXJDYXRlZ29yaWFzID0gKHByb3BzKSA9PiB7XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGdldENhdGVnb3JpYXMoKTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICBjb25zdCBnZXRDYXRlZ29yaWFzID0gKCk9PntcclxuICAgICAgICBpZihwcm9wcy5jYXRlZ29yaWFzLmxlbmd0aD09PTApe1xyXG4gICAgICAgICAgICBwcm9wcy50cmFlclRvZGFzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJ3cmFwcGVyX19jYXRlZ29yaWFzIGJnLXllbGxvd1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm1iLTVcIj5Db21wcsOhIHNlZ8O6biB0dSBjYXRlZ29yaWE8L2gzPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICB7cHJvcHMuY2F0ZWdvcmlhcy5tYXAoKGNhdCxrZXkpPT4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTQgY29sLW1kLTNcIiBrZXk9e2tleX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZENhdGVnb3JpYSBjYXRlZ29yaWE9e2NhdH0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAgICAgLndyYXBwZXJfX2NhdGVnb3JpYXN7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGQjM0NztcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOjM1cHggMHB4O1xyXG4gICAgICAgICAgICAgICAgfSAgICBcclxuICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgICk7XHJcbn1cclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHJlZHVjZXJzPT57XHJcbiAgICByZXR1cm4gcmVkdWNlcnMuY2F0ZWdvcmlhc1JlZHVjZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLGNhdGVnb3JpYXNBY3Rpb24pKEJhbm5lckNhdGVnb3JpYXMpOyJdLCJzb3VyY2VSb290IjoiIn0=