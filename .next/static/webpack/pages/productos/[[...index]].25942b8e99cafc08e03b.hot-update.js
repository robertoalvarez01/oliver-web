webpackHotUpdate_N_E("pages/productos/[[...index]]",{

/***/ "./pages/productos/[[...index]].js":
/*!*****************************************!*\
  !*** ./pages/productos/[[...index]].js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _src_components_Head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../src/components/Head */ "./src/components/Head.js");
/* harmony import */ var _src_components_Productos__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../src/components/Productos */ "./src/components/Productos/index.js");
/* harmony import */ var _src_components_Filtro__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../src/components/Filtro */ "./src/components/Filtro/index.js");
/* harmony import */ var _src_components_Buscador__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../src/components/Buscador */ "./src/components/Buscador/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);



var _this = undefined,
    _jsxFileName = "C:\\Users\\franc\\Documents\\oliver-2\\oliver-sitio\\pages\\productos\\[[...index]].js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;
 //import {useEffect} from 'react';


 //import BotonScrollTop from '../src/components/botonScrollToTop';




var ProductosPage = function ProductosPage(props) {
  _s();

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_7__["useRouter"])();
  var asPath = router.asPath,
      query = router.query;
  var tituloSite = 'Oliver - Productos';

  if (asPath !== '/productos') {
    tituloSite = query.index[0].replace("-", " ").replace(/\b\w/g, function (l) {
      return l.toUpperCase();
    }) + ' en OliverPetShop';
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(_src_components_Head__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: tituloSite,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }
  }), __jsx("section", {
    className: "main__productos container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 17
    }
  }, __jsx(_src_components_Filtro__WEBPACK_IMPORTED_MODULE_5__["default"], {
    location: asPath,
    query: query,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 21
    }
  }), __jsx("div", {
    className: "col-12 py-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 21
    }
  }, __jsx(_src_components_Productos__WEBPACK_IMPORTED_MODULE_4__["default"], {
    location: asPath,
    query: query,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 25
    }
  }))), __jsx(_src_components_Buscador__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 17
    }
  })));
};

_s(ProductosPage, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_7__["useRouter"]];
});

_c = ProductosPage;

ProductosPage.getInitialProps = /*#__PURE__*/function () {
  var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
    var query;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            query = _ref.query;
            return _context.abrupt("return", {
              query: query
            });

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref2.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (ProductosPage);

var _c;

$RefreshReg$(_c, "ProductosPage");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZHVjdG9zL1tbLi4uaW5kZXhdXS5qcyJdLCJuYW1lcyI6WyJQcm9kdWN0b3NQYWdlIiwicHJvcHMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJhc1BhdGgiLCJxdWVyeSIsInRpdHVsb1NpdGUiLCJpbmRleCIsInJlcGxhY2UiLCJsIiwidG9VcHBlckNhc2UiLCJnZXRJbml0aWFsUHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FDQTs7QUFDQTtDQUVBOztBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFDN0IsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUQ2QixNQUV0QkMsTUFGc0IsR0FFTkYsTUFGTSxDQUV0QkUsTUFGc0I7QUFBQSxNQUVmQyxLQUZlLEdBRU5ILE1BRk0sQ0FFZkcsS0FGZTtBQUc3QixNQUFJQyxVQUFVLEdBQUcsb0JBQWpCOztBQUNBLE1BQUdGLE1BQU0sS0FBRyxZQUFaLEVBQXlCO0FBQ3JCRSxjQUFVLEdBQUdELEtBQUssQ0FBQ0UsS0FBTixDQUFZLENBQVosRUFBZUMsT0FBZixDQUF1QixHQUF2QixFQUEyQixHQUEzQixFQUFnQ0EsT0FBaEMsQ0FBd0MsT0FBeEMsRUFBaUQsVUFBQUMsQ0FBQztBQUFBLGFBQUlBLENBQUMsQ0FBQ0MsV0FBRixFQUFKO0FBQUEsS0FBbEQsSUFBeUUsbUJBQXRGO0FBQ0g7O0FBQ0QsU0FDSSxtRUFDSSxNQUFDLDREQUFEO0FBQVEsU0FBSyxFQUFFSixVQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixFQUVJO0FBQVMsYUFBUyxFQUFDLDJCQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxhQUFTLEVBQUMsS0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyw4REFBRDtBQUFRLFlBQVEsRUFBRUYsTUFBbEI7QUFDUSxTQUFLLEVBQUVDLEtBRGY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLEVBR0k7QUFBSyxhQUFTLEVBQUMsYUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxpRUFBRDtBQUFXLFlBQVEsRUFBRUQsTUFBckI7QUFDWSxTQUFLLEVBQUVDLEtBRG5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixDQUhKLENBREosRUFTSSxNQUFDLGdFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFUSixDQUZKLENBREo7QUFnQkgsQ0F2QkQ7O0dBQU1MLGE7VUFDYUcscUQ7OztLQURiSCxhOztBQXlCTkEsYUFBYSxDQUFDVyxlQUFkO0FBQUEsK0xBQWdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFPTixpQkFBUCxRQUFPQSxLQUFQO0FBQUEsNkNBQ3JCO0FBQUNBLG1CQUFLLEVBQUxBO0FBQUQsYUFEcUI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBaEM7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBSWVMLDRFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2R1Y3Rvcy9bWy4uLmluZGV4XV0uMjU5NDJiOGU5OWNhZmMwOGUwM2IuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkZXIgZnJvbSAnLi4vLi4vc3JjL2NvbXBvbmVudHMvSGVhZCc7XHJcbi8vaW1wb3J0IHt1c2VFZmZlY3R9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb2R1Y3RvcyBmcm9tICcuLi8uLi9zcmMvY29tcG9uZW50cy9Qcm9kdWN0b3MnO1xyXG5pbXBvcnQgRmlsdHJvIGZyb20gJy4uLy4uL3NyYy9jb21wb25lbnRzL0ZpbHRybyc7XHJcbi8vaW1wb3J0IEJvdG9uU2Nyb2xsVG9wIGZyb20gJy4uL3NyYy9jb21wb25lbnRzL2JvdG9uU2Nyb2xsVG9Ub3AnO1xyXG5pbXBvcnQgQnVzY2Fkb3IgZnJvbSAnLi4vLi4vc3JjL2NvbXBvbmVudHMvQnVzY2Fkb3InO1xyXG5pbXBvcnQge3VzZVJvdXRlcn0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5cclxuY29uc3QgUHJvZHVjdG9zUGFnZSA9IChwcm9wcykgPT4ge1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgICBjb25zdCB7YXNQYXRoLHF1ZXJ5fSA9IHJvdXRlcjtcclxuICAgIGxldCB0aXR1bG9TaXRlID0gJ09saXZlciAtIFByb2R1Y3Rvcyc7XHJcbiAgICBpZihhc1BhdGghPT0nL3Byb2R1Y3Rvcycpe1xyXG4gICAgICAgIHRpdHVsb1NpdGUgPSBxdWVyeS5pbmRleFswXS5yZXBsYWNlKFwiLVwiLFwiIFwiKS5yZXBsYWNlKC9cXGJcXHcvZywgbCA9PiBsLnRvVXBwZXJDYXNlKCkpICsgJyBlbiBPbGl2ZXJQZXRTaG9wJztcclxuICAgIH1cclxuICAgIHJldHVybiAoIFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxIZWFkZXIgdGl0bGU9e3RpdHVsb1NpdGV9Lz5cclxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwibWFpbl9fcHJvZHVjdG9zIGNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICA8RmlsdHJvIGxvY2F0aW9uPXthc1BhdGh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdWVyeT17cXVlcnl9Lz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBweS0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxQcm9kdWN0b3MgbG9jYXRpb249e2FzUGF0aH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnk9e3F1ZXJ5fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxCdXNjYWRvci8+XHJcbiAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn1cclxuXHJcblByb2R1Y3Rvc1BhZ2UuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMoe3F1ZXJ5fSk9PntcclxuICAgIHJldHVybiB7cXVlcnl9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0b3NQYWdlOyJdLCJzb3VyY2VSb290IjoiIn0=