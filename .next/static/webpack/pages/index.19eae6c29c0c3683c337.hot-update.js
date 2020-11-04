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
    className: "jsx-1137210828" + " " + "wrapper__categorias bg-yellow",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-1137210828" + " " + "container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }
  }, __jsx("h3", {
    className: "jsx-1137210828" + " " + "mb-5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 17
    }
  }, "Compr\xE1 seg\xFAn tu categoria"), __jsx("div", {
    className: "jsx-1137210828" + " " + "row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 17
    }
  }, props.categorias.map(function (cat, key) {
    return __jsx("div", {
      key: key,
      className: "jsx-1137210828" + " " + "col-6 col-md-3",
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
    id: "1137210828",
    __self: _this
  }, ".wrapper__categorias.jsx-1137210828{background-color:#FFB347;padding:35px 0px;}@media(max-width:371px){h3.jsx-1137210828{font-size:16px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcZnJhbmNcXERvY3VtZW50c1xcb2xpdmVyLTJcXG9saXZlci1zaXRpb1xcc3JjXFxjb21wb25lbnRzXFxCYW5uZXJDYXRlZ29yaWFzXFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyQndCLEFBRzhDLEFBTTFCLGVBQUMsVUFMZ0IsaUJBQ3BCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcZnJhbmNcXERvY3VtZW50c1xcb2xpdmVyLTJcXG9saXZlci1zaXRpb1xcc3JjXFxjb21wb25lbnRzXFxCYW5uZXJDYXRlZ29yaWFzXFxpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCx7dXNlRWZmZWN0fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBDYXJkQ2F0ZWdvcmlhIGZyb20gJy4uL0NhcmRDYXRlZ29yaWEnO1xyXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0ICogYXMgY2F0ZWdvcmlhc0FjdGlvbiBmcm9tICcuLi8uLi8uLi9zdG9yZS9hY3Rpb25zL2NhdGVnb3JpYXNBY3Rpb24nO1xyXG5cclxuY29uc3QgQmFubmVyQ2F0ZWdvcmlhcyA9IChwcm9wcykgPT4ge1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBnZXRDYXRlZ29yaWFzKCk7XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgY29uc3QgZ2V0Q2F0ZWdvcmlhcyA9ICgpPT57XHJcbiAgICAgICAgaWYocHJvcHMuY2F0ZWdvcmlhcy5sZW5ndGg9PT0wKXtcclxuICAgICAgICAgICAgcHJvcHMudHJhZXJUb2RhcygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwid3JhcHBlcl9fY2F0ZWdvcmlhcyBiZy15ZWxsb3dcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJtYi01XCI+Q29tcHLDoSBzZWfDum4gdHUgY2F0ZWdvcmlhPC9oMz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3Byb3BzLmNhdGVnb3JpYXMubWFwKChjYXQsa2V5KT0+KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC02IGNvbC1tZC0zXCIga2V5PXtrZXl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmRDYXRlZ29yaWEgY2F0ZWdvcmlhPXtjYXR9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgICAgIC53cmFwcGVyX19jYXRlZ29yaWFze1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkIzNDc7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzozNXB4IDBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIEBtZWRpYShtYXgtd2lkdGg6MzcxcHgpe1xyXG4gICAgICAgICAgICAgICAgICAgIGgze1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6MTZweFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gICAgXHJcbiAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICApO1xyXG59XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSByZWR1Y2Vycz0+e1xyXG4gICAgcmV0dXJuIHJlZHVjZXJzLmNhdGVnb3JpYXNSZWR1Y2VyO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcyxjYXRlZ29yaWFzQWN0aW9uKShCYW5uZXJDYXRlZ29yaWFzKTsiXX0= */\n/*@ sourceURL=C:\\\\Users\\\\franc\\\\Documents\\\\oliver-2\\\\oliver-sitio\\\\src\\\\components\\\\BannerCategorias\\\\index.js */"));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQmFubmVyQ2F0ZWdvcmlhcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJCYW5uZXJDYXRlZ29yaWFzIiwicHJvcHMiLCJ1c2VFZmZlY3QiLCJnZXRDYXRlZ29yaWFzIiwiY2F0ZWdvcmlhcyIsImxlbmd0aCIsInRyYWVyVG9kYXMiLCJtYXAiLCJjYXQiLCJrZXkiLCJtYXBTdGF0ZVRvUHJvcHMiLCJyZWR1Y2VycyIsImNhdGVnb3JpYXNSZWR1Y2VyIiwiY29ubmVjdCIsImNhdGVnb3JpYXNBY3Rpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQ2hDQyx5REFBUyxDQUFDLFlBQU07QUFDWkMsaUJBQWE7QUFDaEIsR0FGUSxFQUVOLEVBRk0sQ0FBVDs7QUFJQSxNQUFNQSxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLEdBQUk7QUFDdEIsUUFBR0YsS0FBSyxDQUFDRyxVQUFOLENBQWlCQyxNQUFqQixLQUEwQixDQUE3QixFQUErQjtBQUMzQkosV0FBSyxDQUFDSyxVQUFOO0FBQ0g7QUFDSixHQUpEOztBQUtBLFNBQ0k7QUFBQSx3Q0FBbUIsK0JBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFBLHdDQUFlLFdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUEsd0NBQWMsTUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVDQURKLEVBRUk7QUFBQSx3Q0FBZSxLQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDS0wsS0FBSyxDQUFDRyxVQUFOLENBQWlCRyxHQUFqQixDQUFxQixVQUFDQyxHQUFELEVBQUtDLEdBQUw7QUFBQSxXQUNsQjtBQUFnQyxTQUFHLEVBQUVBLEdBQXJDO0FBQUEsMENBQWUsZ0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNJLE1BQUMsc0RBQUQ7QUFBZSxlQUFTLEVBQUVELEdBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFESixDQURrQjtBQUFBLEdBQXJCLENBREwsQ0FGSixDQURKO0FBQUE7QUFBQTtBQUFBLHEwRkFESjtBQXlCSCxDQW5DRDs7R0FBTVIsZ0I7O0tBQUFBLGdCOztBQXFDTixJQUFNVSxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUFDLFFBQVEsRUFBRTtBQUM5QixTQUFPQSxRQUFRLENBQUNDLGlCQUFoQjtBQUNILENBRkQ7O0FBSWVDLDBIQUFPLENBQUNILGVBQUQsRUFBaUJJLDREQUFqQixDQUFQLENBQTBDZCxnQkFBMUMsQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4xOWVhZTZjMjljMGMzNjgzYzMzNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LHt1c2VFZmZlY3R9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IENhcmRDYXRlZ29yaWEgZnJvbSAnLi4vQ2FyZENhdGVnb3JpYSc7XHJcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgKiBhcyBjYXRlZ29yaWFzQWN0aW9uIGZyb20gJy4uLy4uLy4uL3N0b3JlL2FjdGlvbnMvY2F0ZWdvcmlhc0FjdGlvbic7XHJcblxyXG5jb25zdCBCYW5uZXJDYXRlZ29yaWFzID0gKHByb3BzKSA9PiB7XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGdldENhdGVnb3JpYXMoKTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICBjb25zdCBnZXRDYXRlZ29yaWFzID0gKCk9PntcclxuICAgICAgICBpZihwcm9wcy5jYXRlZ29yaWFzLmxlbmd0aD09PTApe1xyXG4gICAgICAgICAgICBwcm9wcy50cmFlclRvZGFzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJ3cmFwcGVyX19jYXRlZ29yaWFzIGJnLXllbGxvd1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm1iLTVcIj5Db21wcsOhIHNlZ8O6biB0dSBjYXRlZ29yaWE8L2gzPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICB7cHJvcHMuY2F0ZWdvcmlhcy5tYXAoKGNhdCxrZXkpPT4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTYgY29sLW1kLTNcIiBrZXk9e2tleX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZENhdGVnb3JpYSBjYXRlZ29yaWE9e2NhdH0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAgICAgLndyYXBwZXJfX2NhdGVnb3JpYXN7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGQjM0NztcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOjM1cHggMHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgQG1lZGlhKG1heC13aWR0aDozNzFweCl7XHJcbiAgICAgICAgICAgICAgICAgICAgaDN7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZToxNnB4XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSAgICBcclxuICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgICk7XHJcbn1cclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHJlZHVjZXJzPT57XHJcbiAgICByZXR1cm4gcmVkdWNlcnMuY2F0ZWdvcmlhc1JlZHVjZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLGNhdGVnb3JpYXNBY3Rpb24pKEJhbm5lckNhdGVnb3JpYXMpOyJdLCJzb3VyY2VSb290IjoiIn0=