webpackHotUpdate_N_E("pages/productos/[[...index]]",{

/***/ "./src/components/Productos/index.js":
/*!*******************************************!*\
  !*** ./src/components/Productos/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _CardProducto__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../CardProducto */ "./src/components/CardProducto/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store_actions_subproductosActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../store/actions/subproductosActions */ "./store/actions/subproductosActions.js");
/* harmony import */ var _Productos_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Productos.module.css */ "./src/components/Productos/Productos.module.css");
/* harmony import */ var _Productos_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_Productos_module_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Loader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Loader */ "./src/components/Loader/index.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _Filtro_Filtro_module_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Filtro/Filtro.module.css */ "./src/components/Filtro/Filtro.module.css");
/* harmony import */ var _Filtro_Filtro_module_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_Filtro_Filtro_module_css__WEBPACK_IMPORTED_MODULE_10__);



var _this = undefined,
    _jsxFileName = "C:\\Users\\franc\\Documents\\oliver-2\\oliver-sitio\\src\\components\\Productos\\index.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;










var Productos = function Productos(props) {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      filtro = _useState[0],
      setFiltro = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (props.location !== '/productos') {
      if (props.query.search) {
        mostrarSolapaFiltro(props.query.search);
      } else {
        mostrarSolapaFiltro(props.query.index[0]);
      }
    } else {
      getProductos();
    }
  }, []);

  var showFiltrosMobile = function showFiltrosMobile() {
    document.getElementsByClassName('Filtro_filtros__contanier__3knXf')[0].classList.add(_Filtro_Filtro_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.show_filtros);
  };

  var getProductos = /*#__PURE__*/function () {
    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return props.traerTodos();

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

    return function getProductos() {
      return _ref.apply(this, arguments);
    };
  }();

  var mostrarSolapaFiltro = function mostrarSolapaFiltro(filtro) {
    setFiltro(filtro);
  };

  var handleChangeOrdenProductos = function handleChangeOrdenProductos(event) {
    if (event.target.value === 'asc') {
      props.subproductos.sort(function (a, b) {
        if (a.precioUnidad > b.precioUnidad) return 1;
        if (a.precioUnidad < b.precioUnidad) return -1;
        return 0;
      });
    } else {
      props.subproductos.sort(function (a, b) {
        if (a.precioUnidad < b.precioUnidad) return 1;
        if (a.precioUnidad > b.precioUnidad) return -1;
        return 0;
      });
    }

    ;
    return props.ordenarProductos(props.subproductos);
  }; //ocultar la chapita que indica el nombre del filtro activo cuando se restablecen los filtros.


  if (props.location == '/productos' && filtro != '') {
    setFiltro('');
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, props.loading || !props.subproductos ? __jsx("div", {
    className: "col-12 text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 53
    }
  }, __jsx(_Loader__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 89
    }
  })) : __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, filtro !== '' ? __jsx("span", {
    id: "label__filtro-busqueda",
    className: _Productos_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.label__filtro_busqueda,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 21
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_9__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__["faSearch"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 25
    }
  }), __jsx("span", {
    className: _Productos_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.item_filtro_busqueda,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 25
    }
  }, __jsx("span", {
    className: "text-mutedd",
    id: "valor-busqueda",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 29
    }
  }, filtro))) : null, __jsx("div", {
    className: "row justify-content-between my-2 align-items-center",
    style: {
      padding: '0px 15px'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 17
    }
  }, __jsx("span", {
    className: "text-muted",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 21
    }
  }, __jsx("b", {
    className: "txt-yellow",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 50
    }
  }, props.subproductos.length), " productos encontrados"), __jsx("div", {
    className: _Productos_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.ordenarProductos + ' ' + "d-flex align-items-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 21
    }
  }, __jsx("span", {
    className: "txt-yellow text-bold mr-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 25
    }
  }, "Ordenar por: "), __jsx("select", {
    className: _Productos_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.select_ordenar,
    onChange: handleChangeOrdenProductos,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 25
    }
  }, __jsx("option", {
    value: "desc",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 29
    }
  }, "Mayor precio"), __jsx("option", {
    value: "asc",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 29
    }
  }, "Menor precio"))), __jsx("button", {
    onClick: showFiltrosMobile,
    className: "boton bg-yellow mt-3 d-none" + ' ' + _Productos_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.boton_filtrar_mobile,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 21
    }
  }, "Filtrar")), __jsx("div", {
    className: "row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 17
    }
  }, props.subproductos.map(function (prd) {
    return __jsx("div", {
      key: prd.idSubProducto,
      className: "col-6 col-md-3",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 25
      }
    }, __jsx(_CardProducto__WEBPACK_IMPORTED_MODULE_3__["default"], {
      imagen: prd.foto,
      prd: prd,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 29
      }
    }));
  }))));
};

_s(Productos, "xLZZVrrsJBMjglyN+0tBHrGORIk=");

_c = Productos;

var mapStateToProps = function mapStateToProps(reducers) {
  return reducers.subproductosReducer;
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["connect"])(mapStateToProps, _store_actions_subproductosActions__WEBPACK_IMPORTED_MODULE_5__)(Productos));

var _c;

$RefreshReg$(_c, "Productos");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUHJvZHVjdG9zL2luZGV4LmpzIl0sIm5hbWVzIjpbIlByb2R1Y3RvcyIsInByb3BzIiwidXNlU3RhdGUiLCJmaWx0cm8iLCJzZXRGaWx0cm8iLCJ1c2VFZmZlY3QiLCJsb2NhdGlvbiIsInF1ZXJ5Iiwic2VhcmNoIiwibW9zdHJhclNvbGFwYUZpbHRybyIsImluZGV4IiwiZ2V0UHJvZHVjdG9zIiwic2hvd0ZpbHRyb3NNb2JpbGUiLCJkb2N1bWVudCIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJjbGFzc0xpc3QiLCJhZGQiLCJGaWx0cm9TdHlsZSIsInNob3dfZmlsdHJvcyIsInRyYWVyVG9kb3MiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlQ2hhbmdlT3JkZW5Qcm9kdWN0b3MiLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwic3VicHJvZHVjdG9zIiwic29ydCIsImEiLCJiIiwicHJlY2lvVW5pZGFkIiwib3JkZW5hclByb2R1Y3RvcyIsImxvYWRpbmciLCJQcm9kdWN0b3NTdHlsZSIsImxhYmVsX19maWx0cm9fYnVzcXVlZGEiLCJmYVNlYXJjaCIsIml0ZW1fZmlsdHJvX2J1c3F1ZWRhIiwicGFkZGluZyIsImxlbmd0aCIsInNlbGVjdF9vcmRlbmFyIiwiYm90b25fZmlsdHJhcl9tb2JpbGUiLCJtYXAiLCJwcmQiLCJpZFN1YlByb2R1Y3RvIiwiZm90byIsIm1hcFN0YXRlVG9Qcm9wcyIsInJlZHVjZXJzIiwic3VicHJvZHVjdG9zUmVkdWNlciIsImNvbm5lY3QiLCJzdWJwcm9kdWN0b3NBY3Rpb25zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNDLEtBQUQsRUFBVztBQUFBOztBQUFBLGtCQUVHQyxzREFBUSxDQUFDLEVBQUQsQ0FGWDtBQUFBLE1BRWxCQyxNQUZrQjtBQUFBLE1BRVZDLFNBRlU7O0FBSXpCQyx5REFBUyxDQUFDLFlBQU07QUFDWixRQUFHSixLQUFLLENBQUNLLFFBQU4sS0FBbUIsWUFBdEIsRUFBbUM7QUFDL0IsVUFBR0wsS0FBSyxDQUFDTSxLQUFOLENBQVlDLE1BQWYsRUFBc0I7QUFDbEJDLDJCQUFtQixDQUFDUixLQUFLLENBQUNNLEtBQU4sQ0FBWUMsTUFBYixDQUFuQjtBQUNILE9BRkQsTUFFSztBQUNEQywyQkFBbUIsQ0FBQ1IsS0FBSyxDQUFDTSxLQUFOLENBQVlHLEtBQVosQ0FBa0IsQ0FBbEIsQ0FBRCxDQUFuQjtBQUNIO0FBQ0osS0FORCxNQU1LO0FBQ0RDLGtCQUFZO0FBQ2Y7QUFDSixHQVZRLEVBVU4sRUFWTSxDQUFUOztBQVlBLE1BQU1DLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsR0FBSTtBQUMxQkMsWUFBUSxDQUFDQyxzQkFBVCxDQUFnQyxrQ0FBaEMsRUFBb0UsQ0FBcEUsRUFBdUVDLFNBQXZFLENBQWlGQyxHQUFqRixDQUFxRkMsaUVBQVcsQ0FBQ0MsWUFBakc7QUFDSCxHQUZEOztBQUlBLE1BQU1QLFlBQVk7QUFBQSxnTUFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUVQVixLQUFLLENBQUNrQixVQUFOLEVBRk87O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUliQyxxQkFBTyxDQUFDQyxHQUFSOztBQUphO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQVpWLFlBQVk7QUFBQTtBQUFBO0FBQUEsS0FBbEI7O0FBUUEsTUFBTUYsbUJBQW1CLEdBQUcsU0FBdEJBLG1CQUFzQixDQUFBTixNQUFNLEVBQUU7QUFDaENDLGFBQVMsQ0FBQ0QsTUFBRCxDQUFUO0FBQ0gsR0FGRDs7QUFJQSxNQUFNbUIsMEJBQTBCLEdBQUcsU0FBN0JBLDBCQUE2QixDQUFBQyxLQUFLLEVBQUU7QUFDdEMsUUFBR0EsS0FBSyxDQUFDQyxNQUFOLENBQWFDLEtBQWIsS0FBdUIsS0FBMUIsRUFBZ0M7QUFDNUJ4QixXQUFLLENBQUN5QixZQUFOLENBQW1CQyxJQUFuQixDQUF3QixVQUFDQyxDQUFELEVBQUdDLENBQUgsRUFBTztBQUMzQixZQUFHRCxDQUFDLENBQUNFLFlBQUYsR0FBaUJELENBQUMsQ0FBQ0MsWUFBdEIsRUFBb0MsT0FBTyxDQUFQO0FBQ3BDLFlBQUdGLENBQUMsQ0FBQ0UsWUFBRixHQUFpQkQsQ0FBQyxDQUFDQyxZQUF0QixFQUFvQyxPQUFPLENBQUMsQ0FBUjtBQUNwQyxlQUFPLENBQVA7QUFDSCxPQUpEO0FBS0gsS0FORCxNQU1LO0FBQ0Q3QixXQUFLLENBQUN5QixZQUFOLENBQW1CQyxJQUFuQixDQUF3QixVQUFDQyxDQUFELEVBQUdDLENBQUgsRUFBTztBQUMzQixZQUFHRCxDQUFDLENBQUNFLFlBQUYsR0FBaUJELENBQUMsQ0FBQ0MsWUFBdEIsRUFBb0MsT0FBTyxDQUFQO0FBQ3BDLFlBQUdGLENBQUMsQ0FBQ0UsWUFBRixHQUFpQkQsQ0FBQyxDQUFDQyxZQUF0QixFQUFvQyxPQUFPLENBQUMsQ0FBUjtBQUNwQyxlQUFPLENBQVA7QUFDSCxPQUpEO0FBS0g7O0FBQUE7QUFDRCxXQUFPN0IsS0FBSyxDQUFDOEIsZ0JBQU4sQ0FBdUI5QixLQUFLLENBQUN5QixZQUE3QixDQUFQO0FBQ0gsR0FmRCxDQWhDeUIsQ0FpRHpCOzs7QUFDQSxNQUFHekIsS0FBSyxDQUFDSyxRQUFOLElBQWdCLFlBQWhCLElBQWdDSCxNQUFNLElBQUUsRUFBM0MsRUFBOEM7QUFDMUNDLGFBQVMsQ0FBQyxFQUFELENBQVQ7QUFDSDs7QUFDRCxTQUNJLG1FQUNNSCxLQUFLLENBQUMrQixPQUFOLElBQWlCLENBQUMvQixLQUFLLENBQUN5QixZQUF6QixHQUF1QztBQUFLLGFBQVMsRUFBQyxvQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQW9DLE1BQUMsK0NBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUFwQyxDQUF2QyxHQUNELG1FQUNNdkIsTUFBTSxLQUFHLEVBQVYsR0FDRztBQUFNLE1BQUUsRUFBQyx3QkFBVDtBQUFrQyxhQUFTLEVBQUU4Qiw0REFBYyxDQUFDQyxzQkFBNUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsOEVBQUQ7QUFBaUIsUUFBSSxFQUFFQywwRUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLEVBRUk7QUFBTSxhQUFTLEVBQUVGLDREQUFjLENBQUNHLG9CQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBTSxhQUFTLEVBQUMsYUFBaEI7QUFBOEIsTUFBRSxFQUFDLGdCQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQW1EakMsTUFBbkQsQ0FESixDQUZKLENBREgsR0FPQSxJQVJMLEVBU0k7QUFBSyxhQUFTLEVBQUMscURBQWY7QUFBcUUsU0FBSyxFQUFFO0FBQUNrQyxhQUFPLEVBQUM7QUFBVCxLQUE1RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBTSxhQUFTLEVBQUMsWUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUE2QjtBQUFHLGFBQVMsRUFBQyxZQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBMkJwQyxLQUFLLENBQUN5QixZQUFOLENBQW1CWSxNQUE5QyxDQUE3QiwyQkFESixFQUVJO0FBQUssYUFBUyxFQUFFTCw0REFBYyxDQUFDRixnQkFBZixHQUFrQyxHQUFsQyw4QkFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQU0sYUFBUyxFQUFDLDJCQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURKLEVBRUk7QUFBUSxhQUFTLEVBQUVFLDREQUFjLENBQUNNLGNBQWxDO0FBQWtELFlBQVEsRUFBRWpCLDBCQUE1RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBUSxTQUFLLEVBQUMsTUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURKLEVBRUk7QUFBUSxTQUFLLEVBQUMsS0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUZKLENBRkosQ0FGSixFQVNJO0FBQVEsV0FBTyxFQUFFVixpQkFBakI7QUFBb0MsYUFBUyxFQUFFLGdDQUFnQyxHQUFoQyxHQUFzQ3FCLDREQUFjLENBQUNPLG9CQUFwRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBVEosQ0FUSixFQW9CSTtBQUFLLGFBQVMsRUFBQyxLQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDS3ZDLEtBQUssQ0FBQ3lCLFlBQU4sQ0FBbUJlLEdBQW5CLENBQXVCLFVBQUFDLEdBQUc7QUFBQSxXQUN2QjtBQUFLLFNBQUcsRUFBRUEsR0FBRyxDQUFDQyxhQUFkO0FBQTZCLGVBQVMsRUFBQyxnQkFBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNJLE1BQUMscURBQUQ7QUFBYyxZQUFNLEVBQUVELEdBQUcsQ0FBQ0UsSUFBMUI7QUFBZ0MsU0FBRyxFQUFFRixHQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREosQ0FEdUI7QUFBQSxHQUExQixDQURMLENBcEJKLENBRkosQ0FESjtBQWtDSCxDQXZGRDs7R0FBTTFDLFM7O0tBQUFBLFM7O0FBeUZOLElBQU02QyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUFDLFFBQVEsRUFBRTtBQUM5QixTQUFPQSxRQUFRLENBQUNDLG1CQUFoQjtBQUNILENBRkQ7O0FBSWVDLDBIQUFPLENBQUNILGVBQUQsRUFBaUJJLCtEQUFqQixDQUFQLENBQTZDakQsU0FBN0MsQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9kdWN0b3MvW1suLi5pbmRleF1dLjlkZWRiYTU1M2FiZjg1MTY0NGExLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IENhcmRQcm9kdWN0byBmcm9tICcuLi9DYXJkUHJvZHVjdG8nO1xyXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0ICogYXMgc3VicHJvZHVjdG9zQWN0aW9ucyBmcm9tICcuLi8uLi8uLi9zdG9yZS9hY3Rpb25zL3N1YnByb2R1Y3Rvc0FjdGlvbnMnO1xyXG5pbXBvcnQgUHJvZHVjdG9zU3R5bGUgZnJvbSAnLi9Qcm9kdWN0b3MubW9kdWxlLmNzcyc7XHJcbmltcG9ydCBMb2FkZXIgZnJvbSAnLi4vTG9hZGVyJztcclxuaW1wb3J0IHsgZmFTZWFyY2ggfSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCI7XHJcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIjtcclxuaW1wb3J0IEZpbHRyb1N0eWxlIGZyb20gJy4uL0ZpbHRyby9GaWx0cm8ubW9kdWxlLmNzcyc7XHJcblxyXG5jb25zdCBQcm9kdWN0b3MgPSAocHJvcHMpID0+IHtcclxuXHJcbiAgICBjb25zdCBbZmlsdHJvLCBzZXRGaWx0cm9dID0gdXNlU3RhdGUoJycpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYocHJvcHMubG9jYXRpb24gIT09ICcvcHJvZHVjdG9zJyl7XHJcbiAgICAgICAgICAgIGlmKHByb3BzLnF1ZXJ5LnNlYXJjaCl7XHJcbiAgICAgICAgICAgICAgICBtb3N0cmFyU29sYXBhRmlsdHJvKHByb3BzLnF1ZXJ5LnNlYXJjaCk7XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgbW9zdHJhclNvbGFwYUZpbHRybyhwcm9wcy5xdWVyeS5pbmRleFswXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgZ2V0UHJvZHVjdG9zKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIGNvbnN0IHNob3dGaWx0cm9zTW9iaWxlID0gKCk9PntcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdGaWx0cm9fZmlsdHJvc19fY29udGFuaWVyX18za25YZicpWzBdLmNsYXNzTGlzdC5hZGQoRmlsdHJvU3R5bGUuc2hvd19maWx0cm9zKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBnZXRQcm9kdWN0b3MgPSBhc3luYyAoKT0+e1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGF3YWl0IHByb3BzLnRyYWVyVG9kb3MoKTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBjb25zdCBtb3N0cmFyU29sYXBhRmlsdHJvID0gZmlsdHJvPT57XHJcbiAgICAgICAgc2V0RmlsdHJvKGZpbHRybyk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlT3JkZW5Qcm9kdWN0b3MgPSBldmVudD0+e1xyXG4gICAgICAgIGlmKGV2ZW50LnRhcmdldC52YWx1ZSA9PT0gJ2FzYycpe1xyXG4gICAgICAgICAgICBwcm9wcy5zdWJwcm9kdWN0b3Muc29ydCgoYSxiKT0+e1xyXG4gICAgICAgICAgICAgICAgaWYoYS5wcmVjaW9VbmlkYWQgPiBiLnByZWNpb1VuaWRhZCkgcmV0dXJuIDE7XHJcbiAgICAgICAgICAgICAgICBpZihhLnByZWNpb1VuaWRhZCA8IGIucHJlY2lvVW5pZGFkKSByZXR1cm4gLTE7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gMDtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgcHJvcHMuc3VicHJvZHVjdG9zLnNvcnQoKGEsYik9PntcclxuICAgICAgICAgICAgICAgIGlmKGEucHJlY2lvVW5pZGFkIDwgYi5wcmVjaW9VbmlkYWQpIHJldHVybiAxO1xyXG4gICAgICAgICAgICAgICAgaWYoYS5wcmVjaW9VbmlkYWQgPiBiLnByZWNpb1VuaWRhZCkgcmV0dXJuIC0xO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gcHJvcHMub3JkZW5hclByb2R1Y3Rvcyhwcm9wcy5zdWJwcm9kdWN0b3MpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvL29jdWx0YXIgbGEgY2hhcGl0YSBxdWUgaW5kaWNhIGVsIG5vbWJyZSBkZWwgZmlsdHJvIGFjdGl2byBjdWFuZG8gc2UgcmVzdGFibGVjZW4gbG9zIGZpbHRyb3MuXHJcbiAgICBpZihwcm9wcy5sb2NhdGlvbj09Jy9wcm9kdWN0b3MnICYmIGZpbHRybyE9Jycpe1xyXG4gICAgICAgIHNldEZpbHRybygnJyk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIHsocHJvcHMubG9hZGluZyB8fCAhcHJvcHMuc3VicHJvZHVjdG9zKT88ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiB0ZXh0LWNlbnRlclwiPjxMb2FkZXIvPjwvZGl2PjpcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIHsoZmlsdHJvIT09JycpP1xyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGlkPVwibGFiZWxfX2ZpbHRyby1idXNxdWVkYVwiIGNsYXNzTmFtZT17UHJvZHVjdG9zU3R5bGUubGFiZWxfX2ZpbHRyb19idXNxdWVkYX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFTZWFyY2h9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtQcm9kdWN0b3NTdHlsZS5pdGVtX2ZpbHRyb19idXNxdWVkYX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkZFwiIGlkPVwidmFsb3ItYnVzcXVlZGFcIj57ZmlsdHJvfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDpudWxsfVxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cganVzdGlmeS1jb250ZW50LWJldHdlZW4gbXktMiBhbGlnbi1pdGVtcy1jZW50ZXJcIiBzdHlsZT17e3BhZGRpbmc6JzBweCAxNXB4J319PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtbXV0ZWRcIj48YiBjbGFzc05hbWU9XCJ0eHQteWVsbG93XCI+e3Byb3BzLnN1YnByb2R1Y3Rvcy5sZW5ndGh9PC9iPiBwcm9kdWN0b3MgZW5jb250cmFkb3M8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1Byb2R1Y3Rvc1N0eWxlLm9yZGVuYXJQcm9kdWN0b3MgKyAnICcgKyBgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlcmB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0eHQteWVsbG93IHRleHQtYm9sZCBtci0yXCI+T3JkZW5hciBwb3I6IDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9e1Byb2R1Y3Rvc1N0eWxlLnNlbGVjdF9vcmRlbmFyfSBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlT3JkZW5Qcm9kdWN0b3N9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImRlc2NcIj5NYXlvciBwcmVjaW88L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJhc2NcIj5NZW5vciBwcmVjaW88L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtzaG93RmlsdHJvc01vYmlsZX0gY2xhc3NOYW1lPXtgYm90b24gYmcteWVsbG93IG10LTMgZC1ub25lYCArICcgJyArIFByb2R1Y3Rvc1N0eWxlLmJvdG9uX2ZpbHRyYXJfbW9iaWxlfT5GaWx0cmFyPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3Byb3BzLnN1YnByb2R1Y3Rvcy5tYXAocHJkPT4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtwcmQuaWRTdWJQcm9kdWN0b30gY2xhc3NOYW1lPVwiY29sLTYgY29sLW1kLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkUHJvZHVjdG8gaW1hZ2VuPXtwcmQuZm90b30gcHJkPXtwcmR9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn1cclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHJlZHVjZXJzPT57XHJcbiAgICByZXR1cm4gcmVkdWNlcnMuc3VicHJvZHVjdG9zUmVkdWNlcjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsc3VicHJvZHVjdG9zQWN0aW9ucykoUHJvZHVjdG9zKTsiXSwic291cmNlUm9vdCI6IiJ9