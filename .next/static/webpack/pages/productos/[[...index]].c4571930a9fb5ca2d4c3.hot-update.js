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
  console.log(router);
  var asPath = router.asPath,
      query = router.query;
  var tituloSite = 'Oliver - Productos';

  if (asPath !== '/productos') {
    if (query.search) {
      tituloSite = query.search.replace("-", " ").replace(/\b\w/g, function (l) {
        return l.toUpperCase();
      }) + ' en OliverPetShop';
    } else if (query.index[0]) {
      tituloSite = query.index[0].replace("-", " ").replace(/\b\w/g, function (l) {
        return l.toUpperCase();
      }) + ' en OliverPetShop';
    }
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(_src_components_Head__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: tituloSite,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }
  }), __jsx("section", {
    className: "main__productos container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 17
    }
  }, __jsx(_src_components_Filtro__WEBPACK_IMPORTED_MODULE_5__["default"], {
    location: asPath,
    query: query,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 21
    }
  }), __jsx("div", {
    className: "col-12 py-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 21
    }
  }, __jsx(_src_components_Productos__WEBPACK_IMPORTED_MODULE_4__["default"], {
    location: asPath,
    query: query,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 25
    }
  }))), __jsx(_src_components_Buscador__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZHVjdG9zL1tbLi4uaW5kZXhdXS5qcyJdLCJuYW1lcyI6WyJQcm9kdWN0b3NQYWdlIiwicHJvcHMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJjb25zb2xlIiwibG9nIiwiYXNQYXRoIiwicXVlcnkiLCJ0aXR1bG9TaXRlIiwic2VhcmNoIiwicmVwbGFjZSIsImwiLCJ0b1VwcGVyQ2FzZSIsImluZGV4IiwiZ2V0SW5pdGlhbFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBQ0E7O0FBQ0E7Q0FFQTs7QUFDQTtBQUNBOztBQUVBLElBQU1BLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQzdCLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFDQUMsU0FBTyxDQUFDQyxHQUFSLENBQVlILE1BQVo7QUFGNkIsTUFHdEJJLE1BSHNCLEdBR05KLE1BSE0sQ0FHdEJJLE1BSHNCO0FBQUEsTUFHZkMsS0FIZSxHQUdOTCxNQUhNLENBR2ZLLEtBSGU7QUFJN0IsTUFBSUMsVUFBVSxHQUFHLG9CQUFqQjs7QUFDQSxNQUFHRixNQUFNLEtBQUcsWUFBWixFQUF5QjtBQUNyQixRQUFHQyxLQUFLLENBQUNFLE1BQVQsRUFBZ0I7QUFDWkQsZ0JBQVUsR0FBR0QsS0FBSyxDQUFDRSxNQUFOLENBQWFDLE9BQWIsQ0FBcUIsR0FBckIsRUFBeUIsR0FBekIsRUFBOEJBLE9BQTlCLENBQXNDLE9BQXRDLEVBQStDLFVBQUFDLENBQUM7QUFBQSxlQUFJQSxDQUFDLENBQUNDLFdBQUYsRUFBSjtBQUFBLE9BQWhELElBQXVFLG1CQUFwRjtBQUNILEtBRkQsTUFFTSxJQUFHTCxLQUFLLENBQUNNLEtBQU4sQ0FBWSxDQUFaLENBQUgsRUFBa0I7QUFDcEJMLGdCQUFVLEdBQUdELEtBQUssQ0FBQ00sS0FBTixDQUFZLENBQVosRUFBZUgsT0FBZixDQUF1QixHQUF2QixFQUEyQixHQUEzQixFQUFnQ0EsT0FBaEMsQ0FBd0MsT0FBeEMsRUFBaUQsVUFBQUMsQ0FBQztBQUFBLGVBQUlBLENBQUMsQ0FBQ0MsV0FBRixFQUFKO0FBQUEsT0FBbEQsSUFBeUUsbUJBQXRGO0FBQ0g7QUFDSjs7QUFDRCxTQUNJLG1FQUNJLE1BQUMsNERBQUQ7QUFBUSxTQUFLLEVBQUVKLFVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLEVBRUk7QUFBUyxhQUFTLEVBQUMsMkJBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLGFBQVMsRUFBQyxLQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLDhEQUFEO0FBQVEsWUFBUSxFQUFFRixNQUFsQjtBQUNRLFNBQUssRUFBRUMsS0FEZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosRUFHSTtBQUFLLGFBQVMsRUFBQyxhQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLGlFQUFEO0FBQVcsWUFBUSxFQUFFRCxNQUFyQjtBQUNZLFNBQUssRUFBRUMsS0FEbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLENBSEosQ0FESixFQVNJLE1BQUMsZ0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVRKLENBRkosQ0FESjtBQWdCSCxDQTVCRDs7R0FBTVAsYTtVQUNhRyxxRDs7O0tBRGJILGE7O0FBOEJOQSxhQUFhLENBQUNjLGVBQWQ7QUFBQSwrTEFBZ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQU9QLGlCQUFQLFFBQU9BLEtBQVA7QUFBQSw2Q0FDckI7QUFBQ0EsbUJBQUssRUFBTEE7QUFBRCxhQURxQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFoQzs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFJZVAsNEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvZHVjdG9zL1tbLi4uaW5kZXhdXS5jNDU3MTkzMGE5ZmI1Y2EyZDRjMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWRlciBmcm9tICcuLi8uLi9zcmMvY29tcG9uZW50cy9IZWFkJztcclxuLy9pbXBvcnQge3VzZUVmZmVjdH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvZHVjdG9zIGZyb20gJy4uLy4uL3NyYy9jb21wb25lbnRzL1Byb2R1Y3Rvcyc7XHJcbmltcG9ydCBGaWx0cm8gZnJvbSAnLi4vLi4vc3JjL2NvbXBvbmVudHMvRmlsdHJvJztcclxuLy9pbXBvcnQgQm90b25TY3JvbGxUb3AgZnJvbSAnLi4vc3JjL2NvbXBvbmVudHMvYm90b25TY3JvbGxUb1RvcCc7XHJcbmltcG9ydCBCdXNjYWRvciBmcm9tICcuLi8uLi9zcmMvY29tcG9uZW50cy9CdXNjYWRvcic7XHJcbmltcG9ydCB7dXNlUm91dGVyfSBmcm9tICduZXh0L3JvdXRlcic7XHJcblxyXG5jb25zdCBQcm9kdWN0b3NQYWdlID0gKHByb3BzKSA9PiB7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgIGNvbnNvbGUubG9nKHJvdXRlcik7XHJcbiAgICBjb25zdCB7YXNQYXRoLHF1ZXJ5fSA9IHJvdXRlcjtcclxuICAgIGxldCB0aXR1bG9TaXRlID0gJ09saXZlciAtIFByb2R1Y3Rvcyc7XHJcbiAgICBpZihhc1BhdGghPT0nL3Byb2R1Y3Rvcycpe1xyXG4gICAgICAgIGlmKHF1ZXJ5LnNlYXJjaCl7XHJcbiAgICAgICAgICAgIHRpdHVsb1NpdGUgPSBxdWVyeS5zZWFyY2gucmVwbGFjZShcIi1cIixcIiBcIikucmVwbGFjZSgvXFxiXFx3L2csIGwgPT4gbC50b1VwcGVyQ2FzZSgpKSArICcgZW4gT2xpdmVyUGV0U2hvcCc7XHJcbiAgICAgICAgfWVsc2UgaWYocXVlcnkuaW5kZXhbMF0pe1xyXG4gICAgICAgICAgICB0aXR1bG9TaXRlID0gcXVlcnkuaW5kZXhbMF0ucmVwbGFjZShcIi1cIixcIiBcIikucmVwbGFjZSgvXFxiXFx3L2csIGwgPT4gbC50b1VwcGVyQ2FzZSgpKSArICcgZW4gT2xpdmVyUGV0U2hvcCc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuICggXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPEhlYWRlciB0aXRsZT17dGl0dWxvU2l0ZX0vPlxyXG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJtYWluX19wcm9kdWN0b3MgY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGaWx0cm8gbG9jYXRpb249e2FzUGF0aH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5PXtxdWVyeX0vPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIHB5LTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFByb2R1Y3RvcyBsb2NhdGlvbj17YXNQYXRofVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdWVyeT17cXVlcnl9Lz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPEJ1c2NhZG9yLz5cclxuICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufVxyXG5cclxuUHJvZHVjdG9zUGFnZS5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyh7cXVlcnl9KT0+e1xyXG4gICAgcmV0dXJuIHtxdWVyeX07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3Rvc1BhZ2U7Il0sInNvdXJjZVJvb3QiOiIifQ==