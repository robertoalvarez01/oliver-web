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
    /*if(props.match.path === '/productos/search/:query'){
        document.getElementById('valor-busqueda').innerHTML = props.match.params.query;
        document.getElementById('label__filtro-busqueda').classList.remove('d-none');
    };*/

    getProductos();
  }, []);

  var showFiltrosMobile = function showFiltrosMobile() {
    document.getElementsByClassName('Filtro_filtros__contanier__3knXf')[0].classList.add(_Filtro_Filtro_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.show_filtros);
  };

  var getProductos = function getProductos() {
    props.traerTodos();
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
      lineNumber: 47,
      columnNumber: 30
    }
  }, __jsx(_Loader__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 66
    }
  })) : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("span", {
    id: "label__filtro-busqueda",
    className: "d-none",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 17
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faSearch"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 21
    }
  }), __jsx("span", {
    className: _Productos_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.item_filtro_busqueda,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 21
    }
  }, __jsx("span", {
    className: "text-muted",
    id: "valor-busqueda",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
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
      lineNumber: 55,
      columnNumber: 17
    }
  }, __jsx("span", {
    className: "text-muted",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 21
    }
  }, __jsx("b", {
    className: "txt-yellow",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 50
    }
  }, props.subproductos.length), " productos encontrados"), __jsx("div", {
    className: _Productos_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.ordenarProductos + ' ' + "d-flex align-items-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 21
    }
  }, __jsx("span", {
    className: "txt-yellow text-bold mr-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 25
    }
  }, "Ordenar por: "), __jsx("select", {
    className: _Productos_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.select_ordenar,
    onChange: handleChangeOrdenProductos,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 25
    }
  }, __jsx("option", {
    value: "desc",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 29
    }
  }, "Mayor precio"), __jsx("option", {
    value: "asc",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 29
    }
  }, "Menor precio"))), __jsx("button", {
    onClick: showFiltrosMobile,
    className: "boton bg-yellow mt-3 d-none" + ' ' + _Productos_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.boton_filtrar_mobile,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 21
    }
  }, "Filtrar")), __jsx("div", {
    className: "row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 17
    }
  }, props.subproductos.map(function (prd) {
    return __jsx("div", {
      key: prd.idSubProducto,
      className: "col-6 col-md-3",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 25
      }
    }, __jsx(_CardProducto__WEBPACK_IMPORTED_MODULE_1__["default"], {
      imagen: prd.foto,
      prd: prd,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUHJvZHVjdG9zL2luZGV4LmpzIl0sIm5hbWVzIjpbIlByb2R1Y3RvcyIsInByb3BzIiwidXNlRWZmZWN0IiwiY29uc29sZSIsImxvZyIsImdldFByb2R1Y3RvcyIsInNob3dGaWx0cm9zTW9iaWxlIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiY2xhc3NMaXN0IiwiYWRkIiwiRmlsdHJvU3R5bGUiLCJzaG93X2ZpbHRyb3MiLCJ0cmFlclRvZG9zIiwiaGFuZGxlQ2hhbmdlT3JkZW5Qcm9kdWN0b3MiLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwicHJvZHVjdG9zIiwic29ydCIsImEiLCJiIiwicHJlY2lvIiwib3JkZW5hclByb2R1Y3RvcyIsImxvYWRpbmciLCJmYVNlYXJjaCIsIlByb2R1Y3Rvc1N0eWxlIiwiaXRlbV9maWx0cm9fYnVzcXVlZGEiLCJwYWRkaW5nIiwic3VicHJvZHVjdG9zIiwibGVuZ3RoIiwic2VsZWN0X29yZGVuYXIiLCJib3Rvbl9maWx0cmFyX21vYmlsZSIsIm1hcCIsInByZCIsImlkU3ViUHJvZHVjdG8iLCJmb3RvIiwibWFwU3RhdGVUb1Byb3BzIiwicmVkdWNlcnMiLCJzdWJwcm9kdWN0b3NSZWR1Y2VyIiwiY29ubmVjdCIsInN1YnByb2R1Y3Rvc0FjdGlvbnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQ3pCQyx5REFBUyxDQUFDLFlBQU07QUFDWkMsV0FBTyxDQUFDQyxHQUFSLENBQVlILEtBQVo7QUFDQTs7Ozs7QUFJQUksZ0JBQVk7QUFDZixHQVBRLEVBT04sRUFQTSxDQUFUOztBQVNBLE1BQU1DLGlCQUFpQixHQUFHLFNBQXBC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RCxFQUFpQkksK0RBQWpCLENBQVAsQ0FBNkN6QyxTQUE3QyxDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2R1Y3Rvcy9bWy4uLmluZGV4XV0uZjgwYTEzNmY0MTc5ZGM4ZWMwN2YuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQ2FyZFByb2R1Y3RvIGZyb20gJy4uL0NhcmRQcm9kdWN0byc7XHJcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgKiBhcyBzdWJwcm9kdWN0b3NBY3Rpb25zIGZyb20gJy4uLy4uLy4uL3N0b3JlL2FjdGlvbnMvc3VicHJvZHVjdG9zQWN0aW9ucyc7XHJcbmltcG9ydCBQcm9kdWN0b3NTdHlsZSBmcm9tICcuL1Byb2R1Y3Rvcy5tb2R1bGUuY3NzJztcclxuaW1wb3J0IExvYWRlciBmcm9tICcuLi9Mb2FkZXInO1xyXG5pbXBvcnQgeyBmYVNlYXJjaCB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnNcIjtcclxuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiO1xyXG5pbXBvcnQgRmlsdHJvU3R5bGUgZnJvbSAnLi4vRmlsdHJvL0ZpbHRyby5tb2R1bGUuY3NzJztcclxuXHJcbmNvbnN0IFByb2R1Y3RvcyA9IChwcm9wcykgPT4ge1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhwcm9wcyk7XHJcbiAgICAgICAgLyppZihwcm9wcy5tYXRjaC5wYXRoID09PSAnL3Byb2R1Y3Rvcy9zZWFyY2gvOnF1ZXJ5Jyl7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd2YWxvci1idXNxdWVkYScpLmlubmVySFRNTCA9IHByb3BzLm1hdGNoLnBhcmFtcy5xdWVyeTtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xhYmVsX19maWx0cm8tYnVzcXVlZGEnKS5jbGFzc0xpc3QucmVtb3ZlKCdkLW5vbmUnKTtcclxuICAgICAgICB9OyovXHJcbiAgICAgICAgZ2V0UHJvZHVjdG9zKCk7XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgY29uc3Qgc2hvd0ZpbHRyb3NNb2JpbGUgPSAoKT0+e1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ0ZpbHRyb19maWx0cm9zX19jb250YW5pZXJfXzNrblhmJylbMF0uY2xhc3NMaXN0LmFkZChGaWx0cm9TdHlsZS5zaG93X2ZpbHRyb3MpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGdldFByb2R1Y3RvcyA9ICgpPT57XHJcbiAgICAgICAgcHJvcHMudHJhZXJUb2RvcygpO1xyXG4gICAgfSBcclxuXHJcbiAgICBjb25zdCBoYW5kbGVDaGFuZ2VPcmRlblByb2R1Y3RvcyA9IGV2ZW50PT57XHJcbiAgICAgICAgaWYoZXZlbnQudGFyZ2V0LnZhbHVlID09PSAnYXNjJyl7XHJcbiAgICAgICAgICAgIHByb3BzLnByb2R1Y3Rvcy5zb3J0KChhLGIpPT57XHJcbiAgICAgICAgICAgICAgICBpZihhLnByZWNpbyA+IGIucHJlY2lvKSByZXR1cm4gMTtcclxuICAgICAgICAgICAgICAgIGlmKGEucHJlY2lvIDwgYi5wcmVjaW8pIHJldHVybiAtMTtcclxuICAgICAgICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBwcm9wcy5wcm9kdWN0b3Muc29ydCgoYSxiKT0+e1xyXG4gICAgICAgICAgICAgICAgaWYoYS5wcmVjaW8gPCBiLnByZWNpbykgcmV0dXJuIDE7XHJcbiAgICAgICAgICAgICAgICBpZihhLnByZWNpbyA+IGIucHJlY2lvKSByZXR1cm4gLTE7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gMDtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiBwcm9wcy5vcmRlbmFyUHJvZHVjdG9zKHByb3BzLnByb2R1Y3Rvcyk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIHsocHJvcHMubG9hZGluZyk/PGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgdGV4dC1jZW50ZXJcIj48TG9hZGVyLz48L2Rpdj46XHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBpZD1cImxhYmVsX19maWx0cm8tYnVzcXVlZGFcIiBjbGFzc05hbWU9XCJkLW5vbmVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhU2VhcmNofS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtQcm9kdWN0b3NTdHlsZS5pdGVtX2ZpbHRyb19idXNxdWVkYX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtbXV0ZWRcIiBpZD1cInZhbG9yLWJ1c3F1ZWRhXCI+RG9nIGNob3c8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cganVzdGlmeS1jb250ZW50LWJldHdlZW4gbXktMiBhbGlnbi1pdGVtcy1jZW50ZXJcIiBzdHlsZT17e3BhZGRpbmc6JzBweCAxNXB4J319PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtbXV0ZWRcIj48YiBjbGFzc05hbWU9XCJ0eHQteWVsbG93XCI+e3Byb3BzLnN1YnByb2R1Y3Rvcy5sZW5ndGh9PC9iPiBwcm9kdWN0b3MgZW5jb250cmFkb3M8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1Byb2R1Y3Rvc1N0eWxlLm9yZGVuYXJQcm9kdWN0b3MgKyAnICcgKyBgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlcmB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0eHQteWVsbG93IHRleHQtYm9sZCBtci0yXCI+T3JkZW5hciBwb3I6IDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9e1Byb2R1Y3Rvc1N0eWxlLnNlbGVjdF9vcmRlbmFyfSBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlT3JkZW5Qcm9kdWN0b3N9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImRlc2NcIj5NYXlvciBwcmVjaW88L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJhc2NcIj5NZW5vciBwcmVjaW88L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtzaG93RmlsdHJvc01vYmlsZX0gY2xhc3NOYW1lPXtgYm90b24gYmcteWVsbG93IG10LTMgZC1ub25lYCArICcgJyArIFByb2R1Y3Rvc1N0eWxlLmJvdG9uX2ZpbHRyYXJfbW9iaWxlfT5GaWx0cmFyPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3Byb3BzLnN1YnByb2R1Y3Rvcy5tYXAocHJkPT4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtwcmQuaWRTdWJQcm9kdWN0b30gY2xhc3NOYW1lPVwiY29sLTYgY29sLW1kLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkUHJvZHVjdG8gaW1hZ2VuPXtwcmQuZm90b30gcHJkPXtwcmR9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn1cclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHJlZHVjZXJzPT57XHJcbiAgICByZXR1cm4gcmVkdWNlcnMuc3VicHJvZHVjdG9zUmVkdWNlcjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsc3VicHJvZHVjdG9zQWN0aW9ucykoUHJvZHVjdG9zKTsiXSwic291cmNlUm9vdCI6IiJ9