webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/BannerMarcas/index.js":
/*!**********************************************!*\
  !*** ./src/components/BannerMarcas/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! isomorphic-fetch */ "./node_modules/isomorphic-fetch/fetch-npm-browserify.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Loader_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Loader/index */ "./src/components/Loader/index.js");
/* harmony import */ var _CardMarca__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../CardMarca */ "./src/components/CardMarca/index.js");
/* harmony import */ var _store_actions_marcasActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../store/actions/marcasActions */ "./store/actions/marcasActions.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _helpers_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../helpers/index */ "./helpers/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);
var _this = undefined,
    _jsxFileName = "C:\\Users\\franc\\Documents\\oliver-2\\oliver-sitio\\src\\components\\BannerMarcas\\index.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;









var BannerMarcas = function BannerMarcas(props) {
  _s();

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    getMarcas();
  }, []);

  var getMarcas = function getMarcas() {
    if (props.marcas.length === 0) {
      props.traerTodas();
    }
  };

  return __jsx("section", {
    className: "jsx-1118298677" + " " + "wrapper__marcas",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }, props.loading ? __jsx("div", {
    className: "jsx-1118298677" + " " + "col-12 text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 17
    }
  }, __jsx(_Loader_index__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 21
    }
  })) : __jsx("div", {
    className: "jsx-1118298677" + " " + "container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 17
    }
  }, __jsx("h3", {
    className: "jsx-1118298677" + " " + "mb-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 21
    }
  }, "Nuestras marcas"), __jsx("div", {
    className: "jsx-1118298677" + " " + "row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 21
    }
  }, props.marcas.map(function (marca, key) {
    if (key >= 12) return false;
    return __jsx("div", {
      key: marca.idMarca,
      className: "jsx-1118298677" + " " + "col-6 col-md-3 col-lg-2 my-2",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 36
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
      href: "productos/".concat(Object(_helpers_index__WEBPACK_IMPORTED_MODULE_7__["default"])("".concat(marca.marca)), "/").concat(marca.idMarca, "?type=marca"),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 37
      }
    }, __jsx(_CardMarca__WEBPACK_IMPORTED_MODULE_4__["default"], {
      imagen: marca.imagen,
      marca: marca.marca,
      id: marca.idMarca,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 41
      }
    })));
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1118298677",
    __self: _this
  }, ".wrapper__marcas.jsx-1118298677{padding:35px 0px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcZnJhbmNcXERvY3VtZW50c1xcb2xpdmVyLTJcXG9saXZlci1zaXRpb1xcc3JjXFxjb21wb25lbnRzXFxCYW5uZXJNYXJjYXNcXGluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlDd0IsQUFHcUMsaUJBQ3BCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcZnJhbmNcXERvY3VtZW50c1xcb2xpdmVyLTJcXG9saXZlci1zaXRpb1xcc3JjXFxjb21wb25lbnRzXFxCYW5uZXJNYXJjYXNcXGluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICdpc29tb3JwaGljLWZldGNoJztcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExvYWRlciBmcm9tICcuLi9Mb2FkZXIvaW5kZXgnO1xyXG5pbXBvcnQgQ2FyZE1hcmNhIGZyb20gJy4uL0NhcmRNYXJjYSc7XHJcbmltcG9ydCAqIGFzIG1hcmNhc0FjdGlvbnMgZnJvbSAnLi4vLi4vLi4vc3RvcmUvYWN0aW9ucy9tYXJjYXNBY3Rpb25zJztcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgc2x1ZyBmcm9tICcuLi8uLi8uLi9oZWxwZXJzL2luZGV4JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuY29uc3QgQmFubmVyTWFyY2FzID0gKHByb3BzKSA9PiB7XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGdldE1hcmNhcygpO1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIGNvbnN0IGdldE1hcmNhcyA9ICgpPT57XHJcbiAgICAgICAgaWYocHJvcHMubWFyY2FzLmxlbmd0aD09PTApe1xyXG4gICAgICAgICAgICBwcm9wcy50cmFlclRvZGFzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJ3cmFwcGVyX19tYXJjYXNcIj5cclxuICAgICAgICAgICAgeyhwcm9wcy5sb2FkaW5nKSA/IFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8TG9hZGVyLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA6IFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibWItNFwiPk51ZXN0cmFzIG1hcmNhczwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3Byb3BzLm1hcmNhcy5tYXAoKG1hcmNhLGtleSk9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGtleT49MTIpIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cImNvbC02IGNvbC1tZC0zIGNvbC1sZy0yIG15LTJcIiBrZXk9e21hcmNhLmlkTWFyY2F9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgcHJvZHVjdG9zLyR7c2x1ZyhgJHttYXJjYS5tYXJjYX1gKX0vJHttYXJjYS5pZE1hcmNhfT90eXBlPW1hcmNhYH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZE1hcmNhIGltYWdlbj17bWFyY2EuaW1hZ2VufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyY2E9e21hcmNhLm1hcmNhfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e21hcmNhLmlkTWFyY2F9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAgICAgLndyYXBwZXJfX21hcmNhc3tcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOjM1cHggMHB4O1xyXG4gICAgICAgICAgICAgICAgfSAgICAgXHJcbiAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICApO1xyXG59XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSByZWR1Y2Vycz0+e1xyXG4gICAgcmV0dXJuIHJlZHVjZXJzLm1hcmNhc1JlZHVjZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLG1hcmNhc0FjdGlvbnMpKEJhbm5lck1hcmNhcyk7Il19 */\n/*@ sourceURL=C:\\\\Users\\\\franc\\\\Documents\\\\oliver-2\\\\oliver-sitio\\\\src\\\\components\\\\BannerMarcas\\\\index.js */"));
};

_s(BannerMarcas, "OD7bBpZva5O2jO+Puf00hKivP7c=");

_c = BannerMarcas;

var mapStateToProps = function mapStateToProps(reducers) {
  return reducers.marcasReducer;
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["connect"])(mapStateToProps, _store_actions_marcasActions__WEBPACK_IMPORTED_MODULE_5__)(BannerMarcas));

var _c;

$RefreshReg$(_c, "BannerMarcas");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQmFubmVyTWFyY2FzL2luZGV4LmpzIl0sIm5hbWVzIjpbIkJhbm5lck1hcmNhcyIsInByb3BzIiwidXNlRWZmZWN0IiwiZ2V0TWFyY2FzIiwibWFyY2FzIiwibGVuZ3RoIiwidHJhZXJUb2RhcyIsImxvYWRpbmciLCJtYXAiLCJtYXJjYSIsImtleSIsImlkTWFyY2EiLCJzbHVnIiwiaW1hZ2VuIiwibWFwU3RhdGVUb1Byb3BzIiwicmVkdWNlcnMiLCJtYXJjYXNSZWR1Y2VyIiwiY29ubmVjdCIsIm1hcmNhc0FjdGlvbnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsSUFBTUEsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQzVCQyx5REFBUyxDQUFDLFlBQU07QUFDWkMsYUFBUztBQUNaLEdBRlEsRUFFTixFQUZNLENBQVQ7O0FBSUEsTUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBSTtBQUNsQixRQUFHRixLQUFLLENBQUNHLE1BQU4sQ0FBYUMsTUFBYixLQUFzQixDQUF6QixFQUEyQjtBQUN2QkosV0FBSyxDQUFDSyxVQUFOO0FBQ0g7QUFDSixHQUpEOztBQUtBLFNBQ0k7QUFBQSx3Q0FBbUIsaUJBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDTUwsS0FBSyxDQUFDTSxPQUFQLEdBQ0c7QUFBQSx3Q0FBZSxvQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxxREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosQ0FESCxHQUtHO0FBQUEsd0NBQWUsV0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQSx3Q0FBYyxNQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREosRUFFSTtBQUFBLHdDQUFlLEtBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNLTixLQUFLLENBQUNHLE1BQU4sQ0FBYUksR0FBYixDQUFpQixVQUFDQyxLQUFELEVBQU9DLEdBQVAsRUFBYTtBQUMzQixRQUFHQSxHQUFHLElBQUUsRUFBUixFQUFZLE9BQU8sS0FBUDtBQUNaLFdBQU87QUFBOEMsU0FBRyxFQUFFRCxLQUFLLENBQUNFLE9BQXpEO0FBQUEsMENBQWUsOEJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNDLE1BQUMsZ0RBQUQ7QUFBTSxVQUFJLHNCQUFlQyw4REFBSSxXQUFJSCxLQUFLLENBQUNBLEtBQVYsRUFBbkIsY0FBeUNBLEtBQUssQ0FBQ0UsT0FBL0MsZ0JBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNJLE1BQUMsa0RBQUQ7QUFBVyxZQUFNLEVBQUVGLEtBQUssQ0FBQ0ksTUFBekI7QUFDWSxXQUFLLEVBQUVKLEtBQUssQ0FBQ0EsS0FEekI7QUFFWSxRQUFFLEVBQUVBLEtBQUssQ0FBQ0UsT0FGdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURKLENBREQsQ0FBUDtBQU9ILEdBVEEsQ0FETCxDQUZKLENBTlI7QUFBQTtBQUFBO0FBQUEsaTNHQURKO0FBOEJILENBeENEOztHQUFNWCxZOztLQUFBQSxZOztBQTBDTixJQUFNYyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUFDLFFBQVEsRUFBRTtBQUM5QixTQUFPQSxRQUFRLENBQUNDLGFBQWhCO0FBQ0gsQ0FGRDs7QUFJZUMsMEhBQU8sQ0FBQ0gsZUFBRCxFQUFpQkkseURBQWpCLENBQVAsQ0FBdUNsQixZQUF2QyxDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjAwNjVjNWM1OWQ4NTU1NTU5ZGQ5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ2lzb21vcnBoaWMtZmV0Y2gnO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTG9hZGVyIGZyb20gJy4uL0xvYWRlci9pbmRleCc7XHJcbmltcG9ydCBDYXJkTWFyY2EgZnJvbSAnLi4vQ2FyZE1hcmNhJztcclxuaW1wb3J0ICogYXMgbWFyY2FzQWN0aW9ucyBmcm9tICcuLi8uLi8uLi9zdG9yZS9hY3Rpb25zL21hcmNhc0FjdGlvbnMnO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCBzbHVnIGZyb20gJy4uLy4uLy4uL2hlbHBlcnMvaW5kZXgnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5jb25zdCBCYW5uZXJNYXJjYXMgPSAocHJvcHMpID0+IHtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgZ2V0TWFyY2FzKCk7XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgY29uc3QgZ2V0TWFyY2FzID0gKCk9PntcclxuICAgICAgICBpZihwcm9wcy5tYXJjYXMubGVuZ3RoPT09MCl7XHJcbiAgICAgICAgICAgIHByb3BzLnRyYWVyVG9kYXMoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIndyYXBwZXJfX21hcmNhc1wiPlxyXG4gICAgICAgICAgICB7KHByb3BzLmxvYWRpbmcpID8gXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMb2FkZXIvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDogXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJtYi00XCI+TnVlc3RyYXMgbWFyY2FzPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7cHJvcHMubWFyY2FzLm1hcCgobWFyY2Esa2V5KT0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoa2V5Pj0xMikgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiY29sLTYgY29sLW1kLTMgY29sLWxnLTIgbXktMlwiIGtleT17bWFyY2EuaWRNYXJjYX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2Bwcm9kdWN0b3MvJHtzbHVnKGAke21hcmNhLm1hcmNhfWApfS8ke21hcmNhLmlkTWFyY2F9P3R5cGU9bWFyY2FgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkTWFyY2EgaW1hZ2VuPXttYXJjYS5pbWFnZW59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJjYT17bWFyY2EubWFyY2F9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD17bWFyY2EuaWRNYXJjYX0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICAgICAud3JhcHBlcl9fbWFyY2Fze1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6MzVweCAwcHg7XHJcbiAgICAgICAgICAgICAgICB9ICAgICBcclxuICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgICk7XHJcbn1cclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHJlZHVjZXJzPT57XHJcbiAgICByZXR1cm4gcmVkdWNlcnMubWFyY2FzUmVkdWNlcjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsbWFyY2FzQWN0aW9ucykoQmFubmVyTWFyY2FzKTsiXSwic291cmNlUm9vdCI6IiJ9