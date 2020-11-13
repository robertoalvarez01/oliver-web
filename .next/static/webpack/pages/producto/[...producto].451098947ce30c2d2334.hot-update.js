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
/* harmony import */ var _store_actions_productosActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../store/actions/productosActions */ "./store/actions/productosActions.js");
/* harmony import */ var _src_components_Loader_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../src/components/Loader/index */ "./src/components/Loader/index.js");
/* harmony import */ var _src_components_ProductoSingle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../src/components/ProductoSingle */ "./src/components/ProductoSingle/index.js");
/* harmony import */ var _src_components_ProductoSingle_infoProducto__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../src/components/ProductoSingle/infoProducto */ "./src/components/ProductoSingle/infoProducto.js");
/* harmony import */ var _src_components_Promociones__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../src/components/Promociones */ "./src/components/Promociones/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_10__);



var _this = undefined,
    _jsxFileName = "C:\\Users\\franc\\Documents\\oliver-2\\sitio-desa\\pages\\producto\\[...producto].js",
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
              return props.traerPorId(props.idProducto);

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
    if (!props.producto) return null;
    var _props$producto$data$ = props.producto.data[0],
        descripcion = _props$producto$data$.descripcion,
        descripcion_basica = _props$producto$data$.descripcion_basica;
    return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(_src_components_Head__WEBPACK_IMPORTED_MODULE_3__["default"], {
      title: props.producto.data[0].producto,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
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
        lineNumber: 31,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "wrapper__producto container mb-5",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 17
      }
    }, __jsx(_src_components_ProductoSingle__WEBPACK_IMPORTED_MODULE_7__["default"], {
      subProducto: props.producto.data[0],
      moreProducts: props.producto.subProductos,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 21
      }
    })), __jsx(_src_components_ProductoSingle_infoProducto__WEBPACK_IMPORTED_MODULE_8__["default"], {
      descripcion: descripcion,
      descripcion_basica: descripcion_basica,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 17
      }
    })), __jsx("div", {
      className: "container",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 13
      }
    }, __jsx(_src_components_Promociones__WEBPACK_IMPORTED_MODULE_9__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
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
    var query, idProducto;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            query = _ref2.query;
            idProducto = query.producto[1];
            return _context2.abrupt("return", {
              idProducto: idProducto
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
  var productosReducer = _ref4.productosReducer;
  return productosReducer;
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["connect"])(mapStateToProps, _store_actions_productosActions__WEBPACK_IMPORTED_MODULE_5__)(Producto));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZHVjdG8vWy4uLnByb2R1Y3RvXS5qcyJdLCJuYW1lcyI6WyJQcm9kdWN0byIsInByb3BzIiwidXNlRWZmZWN0IiwiZ2V0RGF0YSIsInRyYWVyUG9ySWQiLCJpZFByb2R1Y3RvIiwiY29uc29sZSIsImxvZyIsInJvdXRlciIsInVzZVJvdXRlciIsInJlbmRlciIsImxvYWRpbmciLCJlcnJvciIsInByb2R1Y3RvIiwiZGF0YSIsImRlc2NyaXBjaW9uIiwiZGVzY3JpcGNpb25fYmFzaWNhIiwiYmFja2dyb3VuZENvbG9yIiwic3ViUHJvZHVjdG9zIiwiZ2V0SW5pdGlhbFByb3BzIiwicXVlcnkiLCJtYXBTdGF0ZVRvUHJvcHMiLCJwcm9kdWN0b3NSZWR1Y2VyIiwiY29ubmVjdCIsInByb2R1Y3Rvc0FjdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFDeEJDLHlEQUFTLENBQUMsWUFBTTtBQUNaQyxXQUFPO0FBQ1YsR0FGUSxFQUVOLEVBRk0sQ0FBVDs7QUFJQSxNQUFNQSxPQUFPO0FBQUEsZ01BQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFFRkYsS0FBSyxDQUFDRyxVQUFOLENBQWlCSCxLQUFLLENBQUNJLFVBQXZCLENBRkU7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUlSQyxxQkFBTyxDQUFDQyxHQUFSOztBQUpRO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQVBKLE9BQU87QUFBQTtBQUFBO0FBQUEsS0FBYjs7QUFPQSxNQUFNSyxNQUFNLEdBQUdDLDhEQUFTLEVBQXhCOztBQUNBLE1BQU1DLE1BQU0sR0FBRyxTQUFUQSxNQUFTLEdBQUk7QUFDZixRQUFHVCxLQUFLLENBQUNVLE9BQVQsRUFBa0IsT0FBTztBQUFLLGVBQVMsRUFBQyx5QkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQXlDLE1BQUMsb0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUF6QyxDQUFQO0FBQ2xCLFFBQUdWLEtBQUssQ0FBQ1csS0FBVCxFQUFnQixPQUFPLE1BQUMsS0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQVA7QUFDaEIsUUFBRyxDQUFDWCxLQUFLLENBQUNZLFFBQVYsRUFBb0IsT0FBTyxJQUFQO0FBSEwsZ0NBSTBCWixLQUFLLENBQUNZLFFBQU4sQ0FBZUMsSUFBZixDQUFvQixDQUFwQixDQUoxQjtBQUFBLFFBSVJDLFdBSlEseUJBSVJBLFdBSlE7QUFBQSxRQUlJQyxrQkFKSix5QkFJSUEsa0JBSko7QUFLZixXQUFPLG1FQUNILE1BQUMsNERBQUQ7QUFBTSxXQUFLLEVBQUVmLEtBQUssQ0FBQ1ksUUFBTixDQUFlQyxJQUFmLENBQW9CLENBQXBCLEVBQXVCRCxRQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREcsRUFFSDtBQUFTLGVBQVMsRUFBQyxNQUFuQjtBQUEwQixXQUFLLEVBQUU7QUFBQ0ksdUJBQWUsRUFBQztBQUFqQixPQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0k7QUFBSyxlQUFTLEVBQUMsa0NBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNJLE1BQUMsc0VBQUQ7QUFBZ0IsaUJBQVcsRUFBRWhCLEtBQUssQ0FBQ1ksUUFBTixDQUFlQyxJQUFmLENBQW9CLENBQXBCLENBQTdCO0FBQ2dCLGtCQUFZLEVBQUViLEtBQUssQ0FBQ1ksUUFBTixDQUFlSyxZQUQ3QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREosQ0FESixFQUtJLE1BQUMsbUZBQUQ7QUFBYyxpQkFBVyxFQUFFSCxXQUEzQjtBQUF3Qyx3QkFBa0IsRUFBRUMsa0JBQTVEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFMSixDQUZHLEVBU0g7QUFBSyxlQUFTLEVBQUMsV0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0ksTUFBQyxtRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREosQ0FURyxDQUFQO0FBYUgsR0FsQkQ7O0FBbUJBLFNBQ0lOLE1BQU0sRUFEVjtBQUdILENBbkNEOztHQUFNVixRO1VBWWFTLHNEOzs7S0FaYlQsUTs7QUFxQ05BLFFBQVEsQ0FBQ21CLGVBQVQ7QUFBQSwrTEFBMkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQU9DLGlCQUFQLFNBQU9BLEtBQVA7QUFDbkJmLHNCQURtQixHQUNOZSxLQUFLLENBQUNQLFFBQU4sQ0FBZSxDQUFmLENBRE07QUFBQSw4Q0FFaEI7QUFBQ1Isd0JBQVUsRUFBVkE7QUFBRCxhQUZnQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUEzQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFLQSxJQUFNZ0IsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixRQUFzQjtBQUFBLE1BQXBCQyxnQkFBb0IsU0FBcEJBLGdCQUFvQjtBQUMxQyxTQUFPQSxnQkFBUDtBQUNILENBRkQ7O0FBSWVDLDBIQUFPLENBQUNGLGVBQUQsRUFBaUJHLDREQUFqQixDQUFQLENBQXlDeEIsUUFBekMsQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9kdWN0by9bLi4ucHJvZHVjdG9dLjQ1MTA5ODk0N2NlMzBjMmQyMzM0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZUVmZmVjdH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICcuLi8uLi9zcmMvY29tcG9uZW50cy9IZWFkJztcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgKiBhcyBwcm9kdWN0b3NBY3Rpb24gZnJvbSAnLi4vLi4vc3RvcmUvYWN0aW9ucy9wcm9kdWN0b3NBY3Rpb25zJztcclxuaW1wb3J0IExvYWRlciBmcm9tICcuLi8uLi9zcmMvY29tcG9uZW50cy9Mb2FkZXIvaW5kZXgnO1xyXG5pbXBvcnQgUHJvZHVjdG9TaW5nbGUgZnJvbSAnLi4vLi4vc3JjL2NvbXBvbmVudHMvUHJvZHVjdG9TaW5nbGUnO1xyXG5pbXBvcnQgSW5mb1Byb2R1Y3RvIGZyb20gJy4uLy4uL3NyYy9jb21wb25lbnRzL1Byb2R1Y3RvU2luZ2xlL2luZm9Qcm9kdWN0byc7XHJcbmltcG9ydCBQcm9tb2Npb25lcyBmcm9tICcuLi8uLi9zcmMvY29tcG9uZW50cy9Qcm9tb2Npb25lcyc7XHJcbmltcG9ydCB7dXNlUm91dGVyfSBmcm9tICduZXh0L3JvdXRlcic7XHJcblxyXG5jb25zdCBQcm9kdWN0byA9IChwcm9wcykgPT4ge1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBnZXREYXRhKCk7XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgY29uc3QgZ2V0RGF0YSA9IGFzeW5jKCk9PntcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBhd2FpdCBwcm9wcy50cmFlclBvcklkKHByb3BzLmlkUHJvZHVjdG8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgIGNvbnN0IHJlbmRlciA9ICgpPT57XHJcbiAgICAgICAgaWYocHJvcHMubG9hZGluZykgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIHRleHQtY2VudGVyIG10LTRcIj48TG9hZGVyLz48L2Rpdj5cclxuICAgICAgICBpZihwcm9wcy5lcnJvcikgcmV0dXJuIDxFcnJvci8+XHJcbiAgICAgICAgaWYoIXByb3BzLnByb2R1Y3RvKSByZXR1cm4gbnVsbDtcclxuICAgICAgICBjb25zdCB7ZGVzY3JpcGNpb24sZGVzY3JpcGNpb25fYmFzaWNhfSA9IHByb3BzLnByb2R1Y3RvLmRhdGFbMF07XHJcbiAgICAgICAgcmV0dXJuIDw+XHJcbiAgICAgICAgICAgIDxIZWFkIHRpdGxlPXtwcm9wcy5wcm9kdWN0by5kYXRhWzBdLnByb2R1Y3RvfS8+XHJcbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInBiLTVcIiBzdHlsZT17e2JhY2tncm91bmRDb2xvcjond2hpdGUnfX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXBwZXJfX3Byb2R1Y3RvIGNvbnRhaW5lciBtYi01XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFByb2R1Y3RvU2luZ2xlIHN1YlByb2R1Y3RvPXtwcm9wcy5wcm9kdWN0by5kYXRhWzBdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb3JlUHJvZHVjdHM9e3Byb3BzLnByb2R1Y3RvLnN1YlByb2R1Y3Rvc30vPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8SW5mb1Byb2R1Y3RvIGRlc2NyaXBjaW9uPXtkZXNjcmlwY2lvbn0gZGVzY3JpcGNpb25fYmFzaWNhPXtkZXNjcmlwY2lvbl9iYXNpY2F9Lz5cclxuICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPFByb21vY2lvbmVzLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC8+XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIHJlbmRlcigpXHJcbiAgICAgKTtcclxufVxyXG5cclxuUHJvZHVjdG8uZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMoe3F1ZXJ5fSk9PntcclxuICAgIGxldCBpZFByb2R1Y3RvID0gcXVlcnkucHJvZHVjdG9bMV07XHJcbiAgICByZXR1cm4ge2lkUHJvZHVjdG99O1xyXG59O1xyXG4gXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9ICh7cHJvZHVjdG9zUmVkdWNlcn0pPT57XHJcbiAgICByZXR1cm4gcHJvZHVjdG9zUmVkdWNlcjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMscHJvZHVjdG9zQWN0aW9uKShQcm9kdWN0byk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=