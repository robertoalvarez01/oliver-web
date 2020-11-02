webpackHotUpdate_N_E("pages/productos/[[...index]]",{

/***/ "./src/components/Productos/index.js":
/*!*******************************************!*\
  !*** ./src/components/Productos/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _CardProducto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../CardProducto */ "./src/components/CardProducto/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store_actions_subproductosActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../store/actions/subproductosActions */ "./store/actions/subproductosActions.js");
/* harmony import */ var _Productos_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Productos.module.css */ "./src/components/Productos/Productos.module.css");
/* harmony import */ var _Productos_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Productos_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Loader */ "./src/components/Loader/index.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _Filtro_Filtro_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Filtro/Filtro.module.css */ "./src/components/Filtro/Filtro.module.css");
/* harmony import */ var _Filtro_Filtro_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_Filtro_Filtro_module_css__WEBPACK_IMPORTED_MODULE_8__);
var _this = undefined,
    _jsxFileName = "C:\\Users\\franc\\Documents\\oliver-2\\oliver-sitio\\src\\components\\Productos\\index.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;










var Productos = function Productos(props) {
  _s();

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    console.log(props);

    if (props.location !== '/productos') {
      mostrarSolapaFiltro(props.query.index[0]);
    }

    ;
    getProductos();
  }, []);

  var showFiltrosMobile = function showFiltrosMobile() {
    document.getElementsByClassName('Filtro_filtros__contanier__3knXf')[0].classList.add(_Filtro_Filtro_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.show_filtros);
  };

  var getProductos = function getProductos() {
    props.traerTodos();
  };

  var mostrarSolapaFiltro = function mostrarSolapaFiltro(filtro) {
    document.getElementById('valor-busqueda').innerHTML = filtro;
    document.getElementById('label__filtro-busqueda').classList.remove('d-none');
  };

  var handleChangeOrdenProductos = function handleChangeOrdenProductos(event) {
    if (event.target.value === 'asc') {
      props.productos.sort(function (a, b) {
        if (a.precio > b.precio) return 1;
        if (a.precio < b.precio) return -1;
        return 0;
      });
    } else {
      props.productos.sort(function (a, b) {
        if (a.precio < b.precio) return 1;
        if (a.precio > b.precio) return -1;
        return 0;
      });
    }

    ;
    return props.ordenarProductos(props.productos);
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, props.loading ? __jsx("div", {
    className: "col-12 text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 30
    }
  }, __jsx(_Loader__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 66
    }
  })) : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("span", {
    id: "label__filtro-busqueda",
    className: "d-none",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 17
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faSearch"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 21
    }
  }), __jsx("span", {
    className: _Productos_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.item_filtro_busqueda,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 21
    }
  }, __jsx("span", {
    className: "text-muted",
    id: "valor-busqueda",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 25
    }
  }, "Dog chow"))), __jsx("div", {
    className: "row justify-content-between my-2 align-items-center",
    style: {
      padding: '0px 15px'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 17
    }
  }, __jsx("span", {
    className: "text-muted",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 21
    }
  }, __jsx("b", {
    className: "txt-yellow",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 50
    }
  }, props.subproductos.length), " productos encontrados"), __jsx("div", {
    className: _Productos_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.ordenarProductos + ' ' + "d-flex align-items-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 21
    }
  }, __jsx("span", {
    className: "txt-yellow text-bold mr-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 25
    }
  }, "Ordenar por: "), __jsx("select", {
    className: _Productos_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.select_ordenar,
    onChange: handleChangeOrdenProductos,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 25
    }
  }, __jsx("option", {
    value: "desc",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 29
    }
  }, "Mayor precio"), __jsx("option", {
    value: "asc",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 29
    }
  }, "Menor precio"))), __jsx("button", {
    onClick: showFiltrosMobile,
    className: "boton bg-yellow mt-3 d-none" + ' ' + _Productos_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.boton_filtrar_mobile,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 21
    }
  }, "Filtrar")), __jsx("div", {
    className: "row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 17
    }
  }, props.subproductos.map(function (prd) {
    return __jsx("div", {
      key: prd.idSubProducto,
      className: "col-6 col-md-3",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 25
      }
    }, __jsx(_CardProducto__WEBPACK_IMPORTED_MODULE_1__["default"], {
      imagen: prd.foto,
      prd: prd,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 29
      }
    }));
  }))));
};

_s(Productos, "OD7bBpZva5O2jO+Puf00hKivP7c=");

_c = Productos;

var mapStateToProps = function mapStateToProps(reducers) {
  return reducers.subproductosReducer;
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, _store_actions_subproductosActions__WEBPACK_IMPORTED_MODULE_3__)(Productos));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUHJvZHVjdG9zL2luZGV4LmpzIl0sIm5hbWVzIjpbIlByb2R1Y3RvcyIsInByb3BzIiwidXNlRWZmZWN0IiwiY29uc29sZSIsImxvZyIsImxvY2F0aW9uIiwibW9zdHJhclNvbGFwYUZpbHRybyIsInF1ZXJ5IiwiaW5kZXgiLCJnZXRQcm9kdWN0b3MiLCJzaG93RmlsdHJvc01vYmlsZSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImNsYXNzTGlzdCIsImFkZCIsIkZpbHRyb1N0eWxlIiwic2hvd19maWx0cm9zIiwidHJhZXJUb2RvcyIsImZpbHRybyIsImdldEVsZW1lbnRCeUlkIiwiaW5uZXJIVE1MIiwicmVtb3ZlIiwiaGFuZGxlQ2hhbmdlT3JkZW5Qcm9kdWN0b3MiLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwicHJvZHVjdG9zIiwic29ydCIsImEiLCJiIiwicHJlY2lvIiwib3JkZW5hclByb2R1Y3RvcyIsImxvYWRpbmciLCJmYVNlYXJjaCIsIlByb2R1Y3Rvc1N0eWxlIiwiaXRlbV9maWx0cm9fYnVzcXVlZGEiLCJwYWRkaW5nIiwic3VicHJvZHVjdG9zIiwibGVuZ3RoIiwic2VsZWN0X29yZGVuYXIiLCJib3Rvbl9maWx0cmFyX21vYmlsZSIsIm1hcCIsInByZCIsImlkU3ViUHJvZHVjdG8iLCJmb3RvIiwibWFwU3RhdGVUb1Byb3BzIiwicmVkdWNlcnMiLCJzdWJwcm9kdWN0b3NSZWR1Y2VyIiwiY29ubmVjdCIsInN1YnByb2R1Y3Rvc0FjdGlvbnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQ3pCQyx5REFBUyxDQUFDLFlBQU07QUFDWkMsV0FBTyxDQUFDQyxHQUFSLENBQVlILEtBQVo7O0FBQ0EsUUFBR0EsS0FBSyxDQUFDSSxRQUFOLEtBQW1CLFlBQXRCLEVBQW1DO0FBQy9CQyx5QkFBbUIsQ0FBQ0wsS0FBSyxDQUFDTSxLQUFOLENBQVlDLEtBQVosQ0FBa0IsQ0FBbEIsQ0FBRCxDQUFuQjtBQUNIOztBQUFBO0FBQ0RDLGdCQUFZO0FBQ2YsR0FOUSxFQU1OLEVBTk0sQ0FBVDs7QUFRQSxNQUFNQyxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLEdBQUk7QUFDMUJDLFlBQVEsQ0FBQ0Msc0JBQVQsQ0FBZ0Msa0NBQWhDLEVBQW9FLENBQXBFLEVBQXVFQyxTQUF2RSxDQUFpRkMsR0FBakYsQ0FBcUZDLGdFQUFXLENBQUNDLFlBQWpHO0FBQ0gsR0FGRDs7QUFJQSxNQUFNUCxZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFJO0FBQ3JCUixTQUFLLENBQUNnQixVQUFOO0FBQ0gsR0FGRDs7QUFJQSxNQUFNWCxtQkFBbUIsR0FBRyxTQUF0QkEsbUJBQXNCLENBQUFZLE1BQU0sRUFBRTtBQUNoQ1AsWUFBUSxDQUFDUSxjQUFULENBQXdCLGdCQUF4QixFQUEwQ0MsU0FBMUMsR0FBc0RGLE1BQXREO0FBQ0FQLFlBQVEsQ0FBQ1EsY0FBVCxDQUF3Qix3QkFBeEIsRUFBa0ROLFNBQWxELENBQTREUSxNQUE1RCxDQUFtRSxRQUFuRTtBQUNILEdBSEQ7O0FBS0EsTUFBTUMsMEJBQTBCLEdBQUcsU0FBN0JBLDBCQUE2QixDQUFBQyxLQUFLLEVBQUU7QUFDdEMsUUFBR0EsS0FBSyxDQUFDQyxNQUFOLENBQWFDLEtBQWIsS0FBdUIsS0FBMUIsRUFBZ0M7QUFDNUJ4QixXQUFLLENBQUN5QixTQUFOLENBQWdCQyxJQUFoQixDQUFxQixVQUFDQyxDQUFELEVBQUdDLENBQUgsRUFBTztBQUN4QixZQUFHRCxDQUFDLENBQUNFLE1BQUYsR0FBV0QsQ0FBQyxDQUFDQyxNQUFoQixFQUF3QixPQUFPLENBQVA7QUFDeEIsWUFBR0YsQ0FBQyxDQUFDRSxNQUFGLEdBQVdELENBQUMsQ0FBQ0MsTUFBaEIsRUFBd0IsT0FBTyxDQUFDLENBQVI7QUFDeEIsZUFBTyxDQUFQO0FBQ0gsT0FKRDtBQUtILEtBTkQsTUFNSztBQUNEN0IsV0FBSyxDQUFDeUIsU0FBTixDQUFnQkMsSUFBaEIsQ0FBcUIsVUFBQ0MsQ0FBRCxFQUFHQyxDQUFILEVBQU87QUFDeEIsWUFBR0QsQ0FBQyxDQUFDRSxNQUFGLEdBQVdELENBQUMsQ0FBQ0MsTUFBaEIsRUFBd0IsT0FBTyxDQUFQO0FBQ3hCLFlBQUdGLENBQUMsQ0FBQ0UsTUFBRixHQUFXRCxDQUFDLENBQUNDLE1BQWhCLEVBQXdCLE9BQU8sQ0FBQyxDQUFSO0FBQ3hCLGVBQU8sQ0FBUDtBQUNILE9BSkQ7QUFLSDs7QUFBQTtBQUNELFdBQU83QixLQUFLLENBQUM4QixnQkFBTixDQUF1QjlCLEtBQUssQ0FBQ3lCLFNBQTdCLENBQVA7QUFDSCxHQWZEOztBQWdCQSxTQUNJLG1FQUNNekIsS0FBSyxDQUFDK0IsT0FBUCxHQUFnQjtBQUFLLGFBQVMsRUFBQyxvQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQW9DLE1BQUMsK0NBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUFwQyxDQUFoQixHQUNELG1FQUNJO0FBQU0sTUFBRSxFQUFDLHdCQUFUO0FBQWtDLGFBQVMsRUFBQyxRQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyw4RUFBRDtBQUFpQixRQUFJLEVBQUVDLDBFQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosRUFFSTtBQUFNLGFBQVMsRUFBRUMsNERBQWMsQ0FBQ0Msb0JBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFNLGFBQVMsRUFBQyxZQUFoQjtBQUE2QixNQUFFLEVBQUMsZ0JBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREosQ0FGSixDQURKLEVBT0k7QUFBSyxhQUFTLEVBQUMscURBQWY7QUFBcUUsU0FBSyxFQUFFO0FBQUNDLGFBQU8sRUFBQztBQUFULEtBQTVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFNLGFBQVMsRUFBQyxZQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQTZCO0FBQUcsYUFBUyxFQUFDLFlBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUEyQm5DLEtBQUssQ0FBQ29DLFlBQU4sQ0FBbUJDLE1BQTlDLENBQTdCLDJCQURKLEVBRUk7QUFBSyxhQUFTLEVBQUVKLDREQUFjLENBQUNILGdCQUFmLEdBQWtDLEdBQWxDLDhCQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBTSxhQUFTLEVBQUMsMkJBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREosRUFFSTtBQUFRLGFBQVMsRUFBRUcsNERBQWMsQ0FBQ0ssY0FBbEM7QUFBa0QsWUFBUSxFQUFFakIsMEJBQTVEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFRLFNBQUssRUFBQyxNQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREosRUFFSTtBQUFRLFNBQUssRUFBQyxLQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBRkosQ0FGSixDQUZKLEVBU0k7QUFBUSxXQUFPLEVBQUVaLGlCQUFqQjtBQUFvQyxhQUFTLEVBQUUsZ0NBQWdDLEdBQWhDLEdBQXNDd0IsNERBQWMsQ0FBQ00sb0JBQXBHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFUSixDQVBKLEVBa0JJO0FBQUssYUFBUyxFQUFDLEtBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNLdkMsS0FBSyxDQUFDb0MsWUFBTixDQUFtQkksR0FBbkIsQ0FBdUIsVUFBQUMsR0FBRztBQUFBLFdBQ3ZCO0FBQUssU0FBRyxFQUFFQSxHQUFHLENBQUNDLGFBQWQ7QUFBNkIsZUFBUyxFQUFDLGdCQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0ksTUFBQyxxREFBRDtBQUFjLFlBQU0sRUFBRUQsR0FBRyxDQUFDRSxJQUExQjtBQUFnQyxTQUFHLEVBQUVGLEdBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFESixDQUR1QjtBQUFBLEdBQTFCLENBREwsQ0FsQkosQ0FGSixDQURKO0FBZ0NILENBdEVEOztHQUFNMUMsUzs7S0FBQUEsUzs7QUF3RU4sSUFBTTZDLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQUMsUUFBUSxFQUFFO0FBQzlCLFNBQU9BLFFBQVEsQ0FBQ0MsbUJBQWhCO0FBQ0gsQ0FGRDs7QUFJZUMsMEhBQU8sQ0FBQ0gsZUFBRCxFQUFpQkksK0RBQWpCLENBQVAsQ0FBNkNqRCxTQUE3QyxDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2R1Y3Rvcy9bWy4uLmluZGV4XV0uOTk3ZTA2OGE0MWYzMWRiYWMzM2YuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQ2FyZFByb2R1Y3RvIGZyb20gJy4uL0NhcmRQcm9kdWN0byc7XHJcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgKiBhcyBzdWJwcm9kdWN0b3NBY3Rpb25zIGZyb20gJy4uLy4uLy4uL3N0b3JlL2FjdGlvbnMvc3VicHJvZHVjdG9zQWN0aW9ucyc7XHJcbmltcG9ydCBQcm9kdWN0b3NTdHlsZSBmcm9tICcuL1Byb2R1Y3Rvcy5tb2R1bGUuY3NzJztcclxuaW1wb3J0IExvYWRlciBmcm9tICcuLi9Mb2FkZXInO1xyXG5pbXBvcnQgeyBmYVNlYXJjaCB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnNcIjtcclxuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiO1xyXG5pbXBvcnQgRmlsdHJvU3R5bGUgZnJvbSAnLi4vRmlsdHJvL0ZpbHRyby5tb2R1bGUuY3NzJztcclxuXHJcbmNvbnN0IFByb2R1Y3RvcyA9IChwcm9wcykgPT4ge1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhwcm9wcyk7XHJcbiAgICAgICAgaWYocHJvcHMubG9jYXRpb24gIT09ICcvcHJvZHVjdG9zJyl7XHJcbiAgICAgICAgICAgIG1vc3RyYXJTb2xhcGFGaWx0cm8ocHJvcHMucXVlcnkuaW5kZXhbMF0pO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgZ2V0UHJvZHVjdG9zKCk7XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgY29uc3Qgc2hvd0ZpbHRyb3NNb2JpbGUgPSAoKT0+e1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ0ZpbHRyb19maWx0cm9zX19jb250YW5pZXJfXzNrblhmJylbMF0uY2xhc3NMaXN0LmFkZChGaWx0cm9TdHlsZS5zaG93X2ZpbHRyb3MpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGdldFByb2R1Y3RvcyA9ICgpPT57XHJcbiAgICAgICAgcHJvcHMudHJhZXJUb2RvcygpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBjb25zdCBtb3N0cmFyU29sYXBhRmlsdHJvID0gZmlsdHJvPT57XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ZhbG9yLWJ1c3F1ZWRhJykuaW5uZXJIVE1MID0gZmlsdHJvO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsYWJlbF9fZmlsdHJvLWJ1c3F1ZWRhJykuY2xhc3NMaXN0LnJlbW92ZSgnZC1ub25lJyk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlT3JkZW5Qcm9kdWN0b3MgPSBldmVudD0+e1xyXG4gICAgICAgIGlmKGV2ZW50LnRhcmdldC52YWx1ZSA9PT0gJ2FzYycpe1xyXG4gICAgICAgICAgICBwcm9wcy5wcm9kdWN0b3Muc29ydCgoYSxiKT0+e1xyXG4gICAgICAgICAgICAgICAgaWYoYS5wcmVjaW8gPiBiLnByZWNpbykgcmV0dXJuIDE7XHJcbiAgICAgICAgICAgICAgICBpZihhLnByZWNpbyA8IGIucHJlY2lvKSByZXR1cm4gLTE7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gMDtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgcHJvcHMucHJvZHVjdG9zLnNvcnQoKGEsYik9PntcclxuICAgICAgICAgICAgICAgIGlmKGEucHJlY2lvIDwgYi5wcmVjaW8pIHJldHVybiAxO1xyXG4gICAgICAgICAgICAgICAgaWYoYS5wcmVjaW8gPiBiLnByZWNpbykgcmV0dXJuIC0xO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gcHJvcHMub3JkZW5hclByb2R1Y3Rvcyhwcm9wcy5wcm9kdWN0b3MpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICB7KHByb3BzLmxvYWRpbmcpPzxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIHRleHQtY2VudGVyXCI+PExvYWRlci8+PC9kaXY+OlxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gaWQ9XCJsYWJlbF9fZmlsdHJvLWJ1c3F1ZWRhXCIgY2xhc3NOYW1lPVwiZC1ub25lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVNlYXJjaH0vPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17UHJvZHVjdG9zU3R5bGUuaXRlbV9maWx0cm9fYnVzcXVlZGF9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkXCIgaWQ9XCJ2YWxvci1idXNxdWVkYVwiPkRvZyBjaG93PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIG15LTIgYWxpZ24taXRlbXMtY2VudGVyXCIgc3R5bGU9e3twYWRkaW5nOicwcHggMTVweCd9fT5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkXCI+PGIgY2xhc3NOYW1lPVwidHh0LXllbGxvd1wiPntwcm9wcy5zdWJwcm9kdWN0b3MubGVuZ3RofTwvYj4gcHJvZHVjdG9zIGVuY29udHJhZG9zPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtQcm9kdWN0b3NTdHlsZS5vcmRlbmFyUHJvZHVjdG9zICsgJyAnICsgYGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidHh0LXllbGxvdyB0ZXh0LWJvbGQgbXItMlwiPk9yZGVuYXIgcG9yOiA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3NOYW1lPXtQcm9kdWN0b3NTdHlsZS5zZWxlY3Rfb3JkZW5hcn0gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZU9yZGVuUHJvZHVjdG9zfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJkZXNjXCI+TWF5b3IgcHJlY2lvPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiYXNjXCI+TWVub3IgcHJlY2lvPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17c2hvd0ZpbHRyb3NNb2JpbGV9IGNsYXNzTmFtZT17YGJvdG9uIGJnLXllbGxvdyBtdC0zIGQtbm9uZWAgKyAnICcgKyBQcm9kdWN0b3NTdHlsZS5ib3Rvbl9maWx0cmFyX21vYmlsZX0+RmlsdHJhcjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtwcm9wcy5zdWJwcm9kdWN0b3MubWFwKHByZD0+KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17cHJkLmlkU3ViUHJvZHVjdG99IGNsYXNzTmFtZT1cImNvbC02IGNvbC1tZC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZFByb2R1Y3RvIGltYWdlbj17cHJkLmZvdG99IHByZD17cHJkfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSByZWR1Y2Vycz0+e1xyXG4gICAgcmV0dXJuIHJlZHVjZXJzLnN1YnByb2R1Y3Rvc1JlZHVjZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLHN1YnByb2R1Y3Rvc0FjdGlvbnMpKFByb2R1Y3Rvcyk7Il0sInNvdXJjZVJvb3QiOiIifQ==