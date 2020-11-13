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
      producto: props.producto.data[0],
      subProductos: props.producto.subProductos,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZHVjdG8vWy4uLnByb2R1Y3RvXS5qcyJdLCJuYW1lcyI6WyJQcm9kdWN0byIsInByb3BzIiwidXNlRWZmZWN0IiwiZ2V0RGF0YSIsInRyYWVyUG9ySWQiLCJpZFByb2R1Y3RvIiwiY29uc29sZSIsImxvZyIsInJvdXRlciIsInVzZVJvdXRlciIsInJlbmRlciIsImxvYWRpbmciLCJlcnJvciIsInByb2R1Y3RvIiwiZGF0YSIsImRlc2NyaXBjaW9uIiwiZGVzY3JpcGNpb25fYmFzaWNhIiwiYmFja2dyb3VuZENvbG9yIiwic3ViUHJvZHVjdG9zIiwiZ2V0SW5pdGlhbFByb3BzIiwicXVlcnkiLCJtYXBTdGF0ZVRvUHJvcHMiLCJwcm9kdWN0b3NSZWR1Y2VyIiwiY29ubmVjdCIsInByb2R1Y3Rvc0FjdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFDeEJDLHlEQUFTLENBQUMsWUFBTTtBQUNaQyxXQUFPO0FBQ1YsR0FGUSxFQUVOLEVBRk0sQ0FBVDs7QUFJQSxNQUFNQSxPQUFPO0FBQUEsZ01BQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFFRkYsS0FBSyxDQUFDRyxVQUFOLENBQWlCSCxLQUFLLENBQUNJLFVBQXZCLENBRkU7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUlSQyxxQkFBTyxDQUFDQyxHQUFSOztBQUpRO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQVBKLE9BQU87QUFBQTtBQUFBO0FBQUEsS0FBYjs7QUFPQSxNQUFNSyxNQUFNLEdBQUdDLDhEQUFTLEVBQXhCOztBQUNBLE1BQU1DLE1BQU0sR0FBRyxTQUFUQSxNQUFTLEdBQUk7QUFDZixRQUFHVCxLQUFLLENBQUNVLE9BQVQsRUFBa0IsT0FBTztBQUFLLGVBQVMsRUFBQyx5QkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQXlDLE1BQUMsb0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUF6QyxDQUFQO0FBQ2xCLFFBQUdWLEtBQUssQ0FBQ1csS0FBVCxFQUFnQixPQUFPLE1BQUMsS0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQVA7QUFDaEIsUUFBRyxDQUFDWCxLQUFLLENBQUNZLFFBQVYsRUFBb0IsT0FBTyxJQUFQO0FBSEwsZ0NBSTBCWixLQUFLLENBQUNZLFFBQU4sQ0FBZUMsSUFBZixDQUFvQixDQUFwQixDQUoxQjtBQUFBLFFBSVJDLFdBSlEseUJBSVJBLFdBSlE7QUFBQSxRQUlJQyxrQkFKSix5QkFJSUEsa0JBSko7QUFLZixXQUFPLG1FQUNILE1BQUMsNERBQUQ7QUFBTSxXQUFLLEVBQUVmLEtBQUssQ0FBQ1ksUUFBTixDQUFlQyxJQUFmLENBQW9CLENBQXBCLEVBQXVCRCxRQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREcsRUFFSDtBQUFTLGVBQVMsRUFBQyxNQUFuQjtBQUEwQixXQUFLLEVBQUU7QUFBQ0ksdUJBQWUsRUFBQztBQUFqQixPQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0k7QUFBSyxlQUFTLEVBQUMsa0NBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNJLE1BQUMsc0VBQUQ7QUFBZ0IsY0FBUSxFQUFFaEIsS0FBSyxDQUFDWSxRQUFOLENBQWVDLElBQWYsQ0FBb0IsQ0FBcEIsQ0FBMUI7QUFDZ0Isa0JBQVksRUFBRWIsS0FBSyxDQUFDWSxRQUFOLENBQWVLLFlBRDdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFESixDQURKLEVBS0ksTUFBQyxtRkFBRDtBQUFjLGlCQUFXLEVBQUVILFdBQTNCO0FBQXdDLHdCQUFrQixFQUFFQyxrQkFBNUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUxKLENBRkcsRUFTSDtBQUFLLGVBQVMsRUFBQyxXQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSSxNQUFDLG1FQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFESixDQVRHLENBQVA7QUFhSCxHQWxCRDs7QUFtQkEsU0FDSU4sTUFBTSxFQURWO0FBR0gsQ0FuQ0Q7O0dBQU1WLFE7VUFZYVMsc0Q7OztLQVpiVCxROztBQXFDTkEsUUFBUSxDQUFDbUIsZUFBVDtBQUFBLCtMQUEyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBT0MsaUJBQVAsU0FBT0EsS0FBUDtBQUNuQmYsc0JBRG1CLEdBQ05lLEtBQUssQ0FBQ1AsUUFBTixDQUFlLENBQWYsQ0FETTtBQUFBLDhDQUVoQjtBQUFDUix3QkFBVSxFQUFWQTtBQUFELGFBRmdCOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQTNCOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUtBLElBQU1nQixlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLFFBQXNCO0FBQUEsTUFBcEJDLGdCQUFvQixTQUFwQkEsZ0JBQW9CO0FBQzFDLFNBQU9BLGdCQUFQO0FBQ0gsQ0FGRDs7QUFJZUMsMEhBQU8sQ0FBQ0YsZUFBRCxFQUFpQkcsNERBQWpCLENBQVAsQ0FBeUN4QixRQUF6QyxDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2R1Y3RvL1suLi5wcm9kdWN0b10uMTU4NGUzOGY4ZmEyN2ZkYTk2NGYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlRWZmZWN0fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBIZWFkIGZyb20gJy4uLy4uL3NyYy9jb21wb25lbnRzL0hlYWQnO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCAqIGFzIHByb2R1Y3Rvc0FjdGlvbiBmcm9tICcuLi8uLi9zdG9yZS9hY3Rpb25zL3Byb2R1Y3Rvc0FjdGlvbnMnO1xyXG5pbXBvcnQgTG9hZGVyIGZyb20gJy4uLy4uL3NyYy9jb21wb25lbnRzL0xvYWRlci9pbmRleCc7XHJcbmltcG9ydCBQcm9kdWN0b1NpbmdsZSBmcm9tICcuLi8uLi9zcmMvY29tcG9uZW50cy9Qcm9kdWN0b1NpbmdsZSc7XHJcbmltcG9ydCBJbmZvUHJvZHVjdG8gZnJvbSAnLi4vLi4vc3JjL2NvbXBvbmVudHMvUHJvZHVjdG9TaW5nbGUvaW5mb1Byb2R1Y3RvJztcclxuaW1wb3J0IFByb21vY2lvbmVzIGZyb20gJy4uLy4uL3NyYy9jb21wb25lbnRzL1Byb21vY2lvbmVzJztcclxuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcbmNvbnN0IFByb2R1Y3RvID0gKHByb3BzKSA9PiB7XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGdldERhdGEoKTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICBjb25zdCBnZXREYXRhID0gYXN5bmMoKT0+e1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGF3YWl0IHByb3BzLnRyYWVyUG9ySWQocHJvcHMuaWRQcm9kdWN0byk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgY29uc3QgcmVuZGVyID0gKCk9PntcclxuICAgICAgICBpZihwcm9wcy5sb2FkaW5nKSByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgdGV4dC1jZW50ZXIgbXQtNFwiPjxMb2FkZXIvPjwvZGl2PlxyXG4gICAgICAgIGlmKHByb3BzLmVycm9yKSByZXR1cm4gPEVycm9yLz5cclxuICAgICAgICBpZighcHJvcHMucHJvZHVjdG8pIHJldHVybiBudWxsO1xyXG4gICAgICAgIGNvbnN0IHtkZXNjcmlwY2lvbixkZXNjcmlwY2lvbl9iYXNpY2F9ID0gcHJvcHMucHJvZHVjdG8uZGF0YVswXTtcclxuICAgICAgICByZXR1cm4gPD5cclxuICAgICAgICAgICAgPEhlYWQgdGl0bGU9e3Byb3BzLnByb2R1Y3RvLmRhdGFbMF0ucHJvZHVjdG99Lz5cclxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicGItNVwiIHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOid3aGl0ZSd9fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcHBlcl9fcHJvZHVjdG8gY29udGFpbmVyIG1iLTVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8UHJvZHVjdG9TaW5nbGUgcHJvZHVjdG89e3Byb3BzLnByb2R1Y3RvLmRhdGFbMF19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1YlByb2R1Y3Rvcz17cHJvcHMucHJvZHVjdG8uc3ViUHJvZHVjdG9zfS8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxJbmZvUHJvZHVjdG8gZGVzY3JpcGNpb249e2Rlc2NyaXBjaW9ufSBkZXNjcmlwY2lvbl9iYXNpY2E9e2Rlc2NyaXBjaW9uX2Jhc2ljYX0vPlxyXG4gICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8UHJvbW9jaW9uZXMvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Lz5cclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgcmVuZGVyKClcclxuICAgICApO1xyXG59XHJcblxyXG5Qcm9kdWN0by5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyh7cXVlcnl9KT0+e1xyXG4gICAgbGV0IGlkUHJvZHVjdG8gPSBxdWVyeS5wcm9kdWN0b1sxXTtcclxuICAgIHJldHVybiB7aWRQcm9kdWN0b307XHJcbn07XHJcbiBcclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHtwcm9kdWN0b3NSZWR1Y2VyfSk9PntcclxuICAgIHJldHVybiBwcm9kdWN0b3NSZWR1Y2VyO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcyxwcm9kdWN0b3NBY3Rpb24pKFByb2R1Y3RvKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==