webpackHotUpdate_N_E("pages/producto/[...producto]",{

/***/ "./pages/producto/[...producto].js":
/*!*****************************************!*\
  !*** ./pages/producto/[...producto].js ***!
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
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store_actions_subproductosActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../store/actions/subproductosActions */ "./store/actions/subproductosActions.js");
/* harmony import */ var _src_components_Loader_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../src/components/Loader/index */ "./src/components/Loader/index.js");
/* harmony import */ var _src_components_ProductoSingle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../src/components/ProductoSingle */ "./src/components/ProductoSingle/index.js");
/* harmony import */ var _src_components_ProductoSingle_infoProducto__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../src/components/ProductoSingle/infoProducto */ "./src/components/ProductoSingle/infoProducto.js");
/* harmony import */ var _src_components_Promociones__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../src/components/Promociones */ "./src/components/Promociones/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_10__);



var _this = undefined,
    _jsxFileName = "C:\\Users\\franc\\Documents\\oliver-2\\oliver-sitio\\pages\\producto\\[...producto].js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;










var Producto = function Producto(props) {
  _s();

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    getData();
  }, []);

  var getData = /*#__PURE__*/function () {
    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return props.traerPorId(props.idSubProducto);

            case 3:
              _context.next = 8;
              break;

            case 5:
              _context.prev = 5;
              _context.t0 = _context["catch"](0);
              console.log(_context.t0);

            case 8:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 5]]);
    }));

    return function getData() {
      return _ref.apply(this, arguments);
    };
  }();

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_10__["useRouter"])();

  var render = function render() {
    if (props.loading) return __jsx("div", {
      className: "col-12 text-center mt-4",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 34
      }
    }, __jsx(_src_components_Loader_index__WEBPACK_IMPORTED_MODULE_6__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 75
      }
    }));
    if (props.error) return __jsx(Error, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 32
      }
    });
    var _props$subproductos = props.subproductos,
        descripcion = _props$subproductos.descripcion,
        descripcion_basica = _props$subproductos.descripcion_basica;
    return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(_src_components_Head__WEBPACK_IMPORTED_MODULE_3__["default"], {
      title: props.subproductos.subProducto,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 13
      }
    }), __jsx("section", {
      className: "pb-5",
      style: {
        backgroundColor: 'white'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "wrapper__producto container mb-5",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 17
      }
    }, __jsx(_src_components_ProductoSingle__WEBPACK_IMPORTED_MODULE_7__["default"], {
      subProducto: props.subproductos,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 21
      }
    })), __jsx(_src_components_ProductoSingle_infoProducto__WEBPACK_IMPORTED_MODULE_8__["default"], {
      descripcion: descripcion,
      descripcion_basica: descripcion_basica,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 17
      }
    })), __jsx("div", {
      className: "container",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 13
      }
    }, __jsx(_src_components_Promociones__WEBPACK_IMPORTED_MODULE_9__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 17
      }
    })));
  };

  return render();
};

_s(Producto, "CuHC/gmkH7n0V0sJOkcbkPBFVeg=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_10__["useRouter"]];
});

_c = Producto;

Producto.getInitialProps = /*#__PURE__*/function () {
  var _ref3 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(_ref2) {
    var query, idSubProducto;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            query = _ref2.query;
            idSubProducto = query.producto[1];
            return _context2.abrupt("return", {
              idSubProducto: idSubProducto
            });

          case 3:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function (_x) {
    return _ref3.apply(this, arguments);
  };
}();

var mapStateToProps = function mapStateToProps(_ref4) {
  var subproductosReducer = _ref4.subproductosReducer;
  return subproductosReducer;
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["connect"])(mapStateToProps, _store_actions_subproductosActions__WEBPACK_IMPORTED_MODULE_5__)(Producto));

var _c;

$RefreshReg$(_c, "Producto");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZHVjdG8vWy4uLnByb2R1Y3RvXS5qcyJdLCJuYW1lcyI6WyJQcm9kdWN0byIsInByb3BzIiwidXNlRWZmZWN0IiwiZ2V0RGF0YSIsInRyYWVyUG9ySWQiLCJpZFN1YlByb2R1Y3RvIiwiY29uc29sZSIsImxvZyIsInJvdXRlciIsInVzZVJvdXRlciIsInJlbmRlciIsImxvYWRpbmciLCJlcnJvciIsInN1YnByb2R1Y3RvcyIsImRlc2NyaXBjaW9uIiwiZGVzY3JpcGNpb25fYmFzaWNhIiwic3ViUHJvZHVjdG8iLCJiYWNrZ3JvdW5kQ29sb3IiLCJnZXRJbml0aWFsUHJvcHMiLCJxdWVyeSIsInByb2R1Y3RvIiwibWFwU3RhdGVUb1Byb3BzIiwic3VicHJvZHVjdG9zUmVkdWNlciIsImNvbm5lY3QiLCJzdWJwcm9kdWN0b3NBY3Rpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQ3hCQyx5REFBUyxDQUFDLFlBQU07QUFDWkMsV0FBTztBQUNWLEdBRlEsRUFFTixFQUZNLENBQVQ7O0FBSUEsTUFBTUEsT0FBTztBQUFBLGdNQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRUZGLEtBQUssQ0FBQ0csVUFBTixDQUFpQkgsS0FBSyxDQUFDSSxhQUF2QixDQUZFOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFJUkMscUJBQU8sQ0FBQ0MsR0FBUjs7QUFKUTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFQSixPQUFPO0FBQUE7QUFBQTtBQUFBLEtBQWI7O0FBT0EsTUFBTUssTUFBTSxHQUFHQyw4REFBUyxFQUF4Qjs7QUFDQSxNQUFNQyxNQUFNLEdBQUcsU0FBVEEsTUFBUyxHQUFJO0FBQ2YsUUFBR1QsS0FBSyxDQUFDVSxPQUFULEVBQWtCLE9BQU87QUFBSyxlQUFTLEVBQUMseUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUF5QyxNQUFDLG9FQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFBekMsQ0FBUDtBQUNsQixRQUFHVixLQUFLLENBQUNXLEtBQVQsRUFBZ0IsT0FBTyxNQUFDLEtBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUFQO0FBRkQsOEJBRzBCWCxLQUFLLENBQUNZLFlBSGhDO0FBQUEsUUFHUkMsV0FIUSx1QkFHUkEsV0FIUTtBQUFBLFFBR0lDLGtCQUhKLHVCQUdJQSxrQkFISjtBQUlmLFdBQU8sbUVBQ0gsTUFBQyw0REFBRDtBQUFNLFdBQUssRUFBRWQsS0FBSyxDQUFDWSxZQUFOLENBQW1CRyxXQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREcsRUFFSDtBQUFTLGVBQVMsRUFBQyxNQUFuQjtBQUEwQixXQUFLLEVBQUU7QUFBQ0MsdUJBQWUsRUFBQztBQUFqQixPQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0k7QUFBSyxlQUFTLEVBQUMsa0NBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNJLE1BQUMsc0VBQUQ7QUFBZ0IsaUJBQVcsRUFBRWhCLEtBQUssQ0FBQ1ksWUFBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURKLENBREosRUFJSSxNQUFDLG1GQUFEO0FBQWMsaUJBQVcsRUFBRUMsV0FBM0I7QUFBd0Msd0JBQWtCLEVBQUVDLGtCQUE1RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BSkosQ0FGRyxFQVFIO0FBQUssZUFBUyxFQUFDLFdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNJLE1BQUMsbUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURKLENBUkcsQ0FBUDtBQVlILEdBaEJEOztBQWlCQSxTQUNJTCxNQUFNLEVBRFY7QUFHSCxDQWpDRDs7R0FBTVYsUTtVQVlhUyxzRDs7O0tBWmJULFE7O0FBbUNOQSxRQUFRLENBQUNrQixlQUFUO0FBQUEsK0xBQTJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFPQyxpQkFBUCxTQUFPQSxLQUFQO0FBQ25CZCx5QkFEbUIsR0FDSGMsS0FBSyxDQUFDQyxRQUFOLENBQWUsQ0FBZixDQURHO0FBQUEsOENBRWhCO0FBQUNmLDJCQUFhLEVBQWJBO0FBQUQsYUFGZ0I7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBM0I7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBS0EsSUFBTWdCLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsUUFBeUI7QUFBQSxNQUF2QkMsbUJBQXVCLFNBQXZCQSxtQkFBdUI7QUFDN0MsU0FBT0EsbUJBQVA7QUFDSCxDQUZEOztBQUllQywwSEFBTyxDQUFDRixlQUFELEVBQWlCRywrREFBakIsQ0FBUCxDQUE0Q3hCLFFBQTVDLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvZHVjdG8vWy4uLnByb2R1Y3RvXS5jMDQ5YWQyMzIwMzcwYWI3ZGIwYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VFZmZlY3R9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEhlYWQgZnJvbSAnLi4vLi4vc3JjL2NvbXBvbmVudHMvSGVhZCc7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0ICogYXMgc3VicHJvZHVjdG9zQWN0aW9uIGZyb20gJy4uLy4uL3N0b3JlL2FjdGlvbnMvc3VicHJvZHVjdG9zQWN0aW9ucyc7XHJcbmltcG9ydCBMb2FkZXIgZnJvbSAnLi4vLi4vc3JjL2NvbXBvbmVudHMvTG9hZGVyL2luZGV4JztcclxuaW1wb3J0IFByb2R1Y3RvU2luZ2xlIGZyb20gJy4uLy4uL3NyYy9jb21wb25lbnRzL1Byb2R1Y3RvU2luZ2xlJztcclxuaW1wb3J0IEluZm9Qcm9kdWN0byBmcm9tICcuLi8uLi9zcmMvY29tcG9uZW50cy9Qcm9kdWN0b1NpbmdsZS9pbmZvUHJvZHVjdG8nO1xyXG5pbXBvcnQgUHJvbW9jaW9uZXMgZnJvbSAnLi4vLi4vc3JjL2NvbXBvbmVudHMvUHJvbW9jaW9uZXMnO1xyXG5pbXBvcnQge3VzZVJvdXRlcn0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5cclxuY29uc3QgUHJvZHVjdG8gPSAocHJvcHMpID0+IHtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgZ2V0RGF0YSgpO1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIGNvbnN0IGdldERhdGEgPSBhc3luYygpPT57XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgYXdhaXQgcHJvcHMudHJhZXJQb3JJZChwcm9wcy5pZFN1YlByb2R1Y3RvKTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgICBjb25zdCByZW5kZXIgPSAoKT0+e1xyXG4gICAgICAgIGlmKHByb3BzLmxvYWRpbmcpIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiB0ZXh0LWNlbnRlciBtdC00XCI+PExvYWRlci8+PC9kaXY+XHJcbiAgICAgICAgaWYocHJvcHMuZXJyb3IpIHJldHVybiA8RXJyb3IvPlxyXG4gICAgICAgIGNvbnN0IHtkZXNjcmlwY2lvbixkZXNjcmlwY2lvbl9iYXNpY2F9ID0gcHJvcHMuc3VicHJvZHVjdG9zO1xyXG4gICAgICAgIHJldHVybiA8PlxyXG4gICAgICAgICAgICA8SGVhZCB0aXRsZT17cHJvcHMuc3VicHJvZHVjdG9zLnN1YlByb2R1Y3RvfS8+XHJcbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInBiLTVcIiBzdHlsZT17e2JhY2tncm91bmRDb2xvcjond2hpdGUnfX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXBwZXJfX3Byb2R1Y3RvIGNvbnRhaW5lciBtYi01XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFByb2R1Y3RvU2luZ2xlIHN1YlByb2R1Y3RvPXtwcm9wcy5zdWJwcm9kdWN0b3N9Lz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPEluZm9Qcm9kdWN0byBkZXNjcmlwY2lvbj17ZGVzY3JpcGNpb259IGRlc2NyaXBjaW9uX2Jhc2ljYT17ZGVzY3JpcGNpb25fYmFzaWNhfS8+XHJcbiAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDxQcm9tb2Npb25lcy8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvPlxyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICByZW5kZXIoKVxyXG4gICAgICk7XHJcbn1cclxuXHJcblByb2R1Y3RvLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jKHtxdWVyeX0pPT57XHJcbiAgICBsZXQgaWRTdWJQcm9kdWN0byA9IHF1ZXJ5LnByb2R1Y3RvWzFdO1xyXG4gICAgcmV0dXJuIHtpZFN1YlByb2R1Y3RvfTtcclxufTtcclxuIFxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoe3N1YnByb2R1Y3Rvc1JlZHVjZXJ9KT0+e1xyXG4gICAgcmV0dXJuIHN1YnByb2R1Y3Rvc1JlZHVjZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLHN1YnByb2R1Y3Rvc0FjdGlvbikoUHJvZHVjdG8pO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9