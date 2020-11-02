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
    match: router,
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
      lineNumber: 27,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZHVjdG9zL1tbLi4uaW5kZXhdXS5qcyJdLCJuYW1lcyI6WyJQcm9kdWN0b3NQYWdlIiwicHJvcHMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJhc1BhdGgiLCJxdWVyeSIsInRpdHVsb1NpdGUiLCJpbmRleCIsInJlcGxhY2UiLCJsIiwidG9VcHBlckNhc2UiLCJnZXRJbml0aWFsUHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FDQTs7QUFDQTtDQUVBOztBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFDN0IsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUQ2QixNQUV0QkMsTUFGc0IsR0FFTkYsTUFGTSxDQUV0QkUsTUFGc0I7QUFBQSxNQUVmQyxLQUZlLEdBRU5ILE1BRk0sQ0FFZkcsS0FGZTtBQUc3QixNQUFJQyxVQUFVLEdBQUcsb0JBQWpCOztBQUNBLE1BQUdGLE1BQU0sS0FBRyxZQUFaLEVBQXlCO0FBQ3JCRSxjQUFVLEdBQUdELEtBQUssQ0FBQ0UsS0FBTixDQUFZLENBQVosRUFBZUMsT0FBZixDQUF1QixHQUF2QixFQUEyQixHQUEzQixFQUFnQ0EsT0FBaEMsQ0FBd0MsT0FBeEMsRUFBaUQsVUFBQUMsQ0FBQztBQUFBLGFBQUlBLENBQUMsQ0FBQ0MsV0FBRixFQUFKO0FBQUEsS0FBbEQsSUFBeUUsbUJBQXRGO0FBQ0g7O0FBQ0QsU0FDSSxtRUFDSSxNQUFDLDREQUFEO0FBQVEsU0FBSyxFQUFFSixVQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixFQUVJO0FBQVMsYUFBUyxFQUFDLDJCQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxhQUFTLEVBQUMsS0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyw4REFBRDtBQUFRLFlBQVEsRUFBRUYsTUFBbEI7QUFDUSxTQUFLLEVBQUVDLEtBRGY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLEVBR0k7QUFBSyxhQUFTLEVBQUMsYUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxpRUFBRDtBQUFXLFNBQUssRUFBRUgsTUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLENBSEosQ0FESixFQVFJLE1BQUMsZ0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVJKLENBRkosQ0FESjtBQWVILENBdEJEOztHQUFNRixhO1VBQ2FHLHFEOzs7S0FEYkgsYTs7QUF3Qk5BLGFBQWEsQ0FBQ1csZUFBZDtBQUFBLCtMQUFnQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBT04saUJBQVAsUUFBT0EsS0FBUDtBQUFBLDZDQUNyQjtBQUFDQSxtQkFBSyxFQUFMQTtBQUFELGFBRHFCOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQWhDOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUllTCw0RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9kdWN0b3MvW1suLi5pbmRleF1dLmQzYjdmNjJkN2ExMWYzMmUwMThhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZGVyIGZyb20gJy4uLy4uL3NyYy9jb21wb25lbnRzL0hlYWQnO1xyXG4vL2ltcG9ydCB7dXNlRWZmZWN0fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9kdWN0b3MgZnJvbSAnLi4vLi4vc3JjL2NvbXBvbmVudHMvUHJvZHVjdG9zJztcclxuaW1wb3J0IEZpbHRybyBmcm9tICcuLi8uLi9zcmMvY29tcG9uZW50cy9GaWx0cm8nO1xyXG4vL2ltcG9ydCBCb3RvblNjcm9sbFRvcCBmcm9tICcuLi9zcmMvY29tcG9uZW50cy9ib3RvblNjcm9sbFRvVG9wJztcclxuaW1wb3J0IEJ1c2NhZG9yIGZyb20gJy4uLy4uL3NyYy9jb21wb25lbnRzL0J1c2NhZG9yJztcclxuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcbmNvbnN0IFByb2R1Y3Rvc1BhZ2UgPSAocHJvcHMpID0+IHtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgY29uc3Qge2FzUGF0aCxxdWVyeX0gPSByb3V0ZXI7XHJcbiAgICBsZXQgdGl0dWxvU2l0ZSA9ICdPbGl2ZXIgLSBQcm9kdWN0b3MnO1xyXG4gICAgaWYoYXNQYXRoIT09Jy9wcm9kdWN0b3MnKXtcclxuICAgICAgICB0aXR1bG9TaXRlID0gcXVlcnkuaW5kZXhbMF0ucmVwbGFjZShcIi1cIixcIiBcIikucmVwbGFjZSgvXFxiXFx3L2csIGwgPT4gbC50b1VwcGVyQ2FzZSgpKSArICcgZW4gT2xpdmVyUGV0U2hvcCc7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKCBcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8SGVhZGVyIHRpdGxlPXt0aXR1bG9TaXRlfS8+XHJcbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIm1haW5fX3Byb2R1Y3RvcyBjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZpbHRybyBsb2NhdGlvbj17YXNQYXRofVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnk9e3F1ZXJ5fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgcHktM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UHJvZHVjdG9zIG1hdGNoPXtyb3V0ZXJ9Lz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPEJ1c2NhZG9yLz5cclxuICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufVxyXG5cclxuUHJvZHVjdG9zUGFnZS5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyh7cXVlcnl9KT0+e1xyXG4gICAgcmV0dXJuIHtxdWVyeX07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3Rvc1BhZ2U7Il0sInNvdXJjZVJvb3QiOiIifQ==