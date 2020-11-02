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
var _this = undefined,
    _jsxFileName = "C:\\Users\\franc\\Documents\\oliver-2\\oliver-sitio\\src\\components\\Productos\\index.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









var Productos = function Productos(props) {
  _s();

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    console.log(props);

    if (props.location !== '/productos') {
      console.log('eeee');
      mostrarSolapaFiltro(props.query.index[0]);
    }

    ;
    getProductos();
  }, []);

  var showFiltrosMobile = function showFiltrosMobile() {
    document.getElementsByClassName('Filtro_filtros__contanier__3knXf')[0].classList.add(FiltroStyle.show_filtros);
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
    className: _Productos_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.label__filtro_busqueda + ' ' + 'd-none',
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
    className: "text-mutedd",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUHJvZHVjdG9zL2luZGV4LmpzIl0sIm5hbWVzIjpbIlByb2R1Y3RvcyIsInByb3BzIiwidXNlRWZmZWN0IiwiY29uc29sZSIsImxvZyIsImxvY2F0aW9uIiwibW9zdHJhclNvbGFwYUZpbHRybyIsInF1ZXJ5IiwiaW5kZXgiLCJnZXRQcm9kdWN0b3MiLCJzaG93RmlsdHJvc01vYmlsZSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImNsYXNzTGlzdCIsImFkZCIsIkZpbHRyb1N0eWxlIiwic2hvd19maWx0cm9zIiwidHJhZXJUb2RvcyIsImZpbHRybyIsImdldEVsZW1lbnRCeUlkIiwiaW5uZXJIVE1MIiwicmVtb3ZlIiwiaGFuZGxlQ2hhbmdlT3JkZW5Qcm9kdWN0b3MiLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwicHJvZHVjdG9zIiwic29ydCIsImEiLCJiIiwicHJlY2lvIiwib3JkZW5hclByb2R1Y3RvcyIsImxvYWRpbmciLCJQcm9kdWN0b3NTdHlsZSIsImxhYmVsX19maWx0cm9fYnVzcXVlZGEiLCJmYVNlYXJjaCIsIml0ZW1fZmlsdHJvX2J1c3F1ZWRhIiwicGFkZGluZyIsInN1YnByb2R1Y3RvcyIsImxlbmd0aCIsInNlbGVjdF9vcmRlbmFyIiwiYm90b25fZmlsdHJhcl9tb2JpbGUiLCJtYXAiLCJwcmQiLCJpZFN1YlByb2R1Y3RvIiwiZm90byIsIm1hcFN0YXRlVG9Qcm9wcyIsInJlZHVjZXJzIiwic3VicHJvZHVjdG9zUmVkdWNlciIsImNvbm5lY3QiLCJzdWJwcm9kdWN0b3NBY3Rpb25zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQ3pCQyx5REFBUyxDQUFD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QUFTLEVBQUMsS0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0t4QyxLQUFLLENBQUNxQyxZQUFOLENBQW1CSSxHQUFuQixDQUF1QixVQUFBQyxHQUFHO0FBQUEsV0FDdkI7QUFBSyxTQUFHLEVBQUVBLEdBQUcsQ0FBQ0MsYUFBZDtBQUE2QixlQUFTLEVBQUMsZ0JBQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSSxNQUFDLHFEQUFEO0FBQWMsWUFBTSxFQUFFRCxHQUFHLENBQUNFLElBQTFCO0FBQWdDLFNBQUcsRUFBRUYsR0FBckM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURKLENBRHVCO0FBQUEsR0FBMUIsQ0FETCxDQWxCSixDQUZKLENBREo7QUFnQ0gsQ0F2RUQ7O0dBQU0zQyxTOztLQUFBQSxTOztBQXlFTixJQUFNOEMsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFBQyxRQUFRLEVBQUU7QUFDOUIsU0FBT0EsUUFBUSxDQUFDQyxtQkFBaEI7QUFDSCxDQUZEOztBQUllQywwSEFBTyxDQUFDSCxlQUFELEVBQWlCSSwrREFBakIsQ0FBUCxDQUE2Q2xELFNBQTdDLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvZHVjdG9zL1tbLi4uaW5kZXhdXS4wYjZhNTI5NzEzNGU0YWY2ODBkNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBDYXJkUHJvZHVjdG8gZnJvbSAnLi4vQ2FyZFByb2R1Y3RvJztcclxuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCAqIGFzIHN1YnByb2R1Y3Rvc0FjdGlvbnMgZnJvbSAnLi4vLi4vLi4vc3RvcmUvYWN0aW9ucy9zdWJwcm9kdWN0b3NBY3Rpb25zJztcclxuaW1wb3J0IFByb2R1Y3Rvc1N0eWxlIGZyb20gJy4vUHJvZHVjdG9zLm1vZHVsZS5jc3MnO1xyXG5pbXBvcnQgTG9hZGVyIGZyb20gJy4uL0xvYWRlcic7XHJcbmltcG9ydCB7IGZhU2VhcmNoIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29uc1wiO1xyXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tIFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCI7XHJcblxyXG5jb25zdCBQcm9kdWN0b3MgPSAocHJvcHMpID0+IHtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocHJvcHMpO1xyXG4gICAgICAgIGlmKHByb3BzLmxvY2F0aW9uICE9PSAnL3Byb2R1Y3Rvcycpe1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZWVlZScpO1xyXG4gICAgICAgICAgICBtb3N0cmFyU29sYXBhRmlsdHJvKHByb3BzLnF1ZXJ5LmluZGV4WzBdKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGdldFByb2R1Y3RvcygpO1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIGNvbnN0IHNob3dGaWx0cm9zTW9iaWxlID0gKCk9PntcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdGaWx0cm9fZmlsdHJvc19fY29udGFuaWVyX18za25YZicpWzBdLmNsYXNzTGlzdC5hZGQoRmlsdHJvU3R5bGUuc2hvd19maWx0cm9zKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBnZXRQcm9kdWN0b3MgPSAoKT0+e1xyXG4gICAgICAgIHByb3BzLnRyYWVyVG9kb3MoKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgY29uc3QgbW9zdHJhclNvbGFwYUZpbHRybyA9IGZpbHRybz0+e1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd2YWxvci1idXNxdWVkYScpLmlubmVySFRNTCA9IGZpbHRybztcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGFiZWxfX2ZpbHRyby1idXNxdWVkYScpLmNsYXNzTGlzdC5yZW1vdmUoJ2Qtbm9uZScpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZU9yZGVuUHJvZHVjdG9zID0gZXZlbnQ9PntcclxuICAgICAgICBpZihldmVudC50YXJnZXQudmFsdWUgPT09ICdhc2MnKXtcclxuICAgICAgICAgICAgcHJvcHMucHJvZHVjdG9zLnNvcnQoKGEsYik9PntcclxuICAgICAgICAgICAgICAgIGlmKGEucHJlY2lvID4gYi5wcmVjaW8pIHJldHVybiAxO1xyXG4gICAgICAgICAgICAgICAgaWYoYS5wcmVjaW8gPCBiLnByZWNpbykgcmV0dXJuIC0xO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHByb3BzLnByb2R1Y3Rvcy5zb3J0KChhLGIpPT57XHJcbiAgICAgICAgICAgICAgICBpZihhLnByZWNpbyA8IGIucHJlY2lvKSByZXR1cm4gMTtcclxuICAgICAgICAgICAgICAgIGlmKGEucHJlY2lvID4gYi5wcmVjaW8pIHJldHVybiAtMTtcclxuICAgICAgICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIHByb3BzLm9yZGVuYXJQcm9kdWN0b3MocHJvcHMucHJvZHVjdG9zKTtcclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgeyhwcm9wcy5sb2FkaW5nKT88ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiB0ZXh0LWNlbnRlclwiPjxMb2FkZXIvPjwvZGl2PjpcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGlkPVwibGFiZWxfX2ZpbHRyby1idXNxdWVkYVwiIGNsYXNzTmFtZT17UHJvZHVjdG9zU3R5bGUubGFiZWxfX2ZpbHRyb19idXNxdWVkYSArICcgJyArICdkLW5vbmUnfT5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhU2VhcmNofS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtQcm9kdWN0b3NTdHlsZS5pdGVtX2ZpbHRyb19idXNxdWVkYX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtbXV0ZWRkXCIgaWQ9XCJ2YWxvci1idXNxdWVkYVwiPkRvZyBjaG93PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIG15LTIgYWxpZ24taXRlbXMtY2VudGVyXCIgc3R5bGU9e3twYWRkaW5nOicwcHggMTVweCd9fT5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkXCI+PGIgY2xhc3NOYW1lPVwidHh0LXllbGxvd1wiPntwcm9wcy5zdWJwcm9kdWN0b3MubGVuZ3RofTwvYj4gcHJvZHVjdG9zIGVuY29udHJhZG9zPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtQcm9kdWN0b3NTdHlsZS5vcmRlbmFyUHJvZHVjdG9zICsgJyAnICsgYGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidHh0LXllbGxvdyB0ZXh0LWJvbGQgbXItMlwiPk9yZGVuYXIgcG9yOiA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3NOYW1lPXtQcm9kdWN0b3NTdHlsZS5zZWxlY3Rfb3JkZW5hcn0gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZU9yZGVuUHJvZHVjdG9zfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJkZXNjXCI+TWF5b3IgcHJlY2lvPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiYXNjXCI+TWVub3IgcHJlY2lvPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17c2hvd0ZpbHRyb3NNb2JpbGV9IGNsYXNzTmFtZT17YGJvdG9uIGJnLXllbGxvdyBtdC0zIGQtbm9uZWAgKyAnICcgKyBQcm9kdWN0b3NTdHlsZS5ib3Rvbl9maWx0cmFyX21vYmlsZX0+RmlsdHJhcjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtwcm9wcy5zdWJwcm9kdWN0b3MubWFwKHByZD0+KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17cHJkLmlkU3ViUHJvZHVjdG99IGNsYXNzTmFtZT1cImNvbC02IGNvbC1tZC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZFByb2R1Y3RvIGltYWdlbj17cHJkLmZvdG99IHByZD17cHJkfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSByZWR1Y2Vycz0+e1xyXG4gICAgcmV0dXJuIHJlZHVjZXJzLnN1YnByb2R1Y3Rvc1JlZHVjZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLHN1YnByb2R1Y3Rvc0FjdGlvbnMpKFByb2R1Y3Rvcyk7Il0sInNvdXJjZVJvb3QiOiIifQ==