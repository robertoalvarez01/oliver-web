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

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      filtro = _useState[0],
      setFiltro = _useState[1];

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
    setFiltro(filtro);
    console.log(document.querySelector(".".concat(_Productos_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.label__filtro_busqueda)).classList.remove('d-none'));
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
      lineNumber: 54,
      columnNumber: 30
    }
  }, __jsx(_Loader__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 66
    }
  })) : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("span", {
    id: "label__filtro-busqueda",
    className: _Productos_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.label__filtro_busqueda + ' ' + 'd-none',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 17
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faSearch"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 21
    }
  }), __jsx("span", {
    className: _Productos_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.item_filtro_busqueda,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 21
    }
  }, __jsx("span", {
    className: "text-mutedd",
    id: "valor-busqueda",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 25
    }
  }, filtro))), __jsx("div", {
    className: "row justify-content-between my-2 align-items-center",
    style: {
      padding: '0px 15px'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 17
    }
  }, __jsx("span", {
    className: "text-muted",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 21
    }
  }, __jsx("b", {
    className: "txt-yellow",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 50
    }
  }, props.subproductos.length), " productos encontrados"), __jsx("div", {
    className: _Productos_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.ordenarProductos + ' ' + "d-flex align-items-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 21
    }
  }, __jsx("span", {
    className: "txt-yellow text-bold mr-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 25
    }
  }, "Ordenar por: "), __jsx("select", {
    className: _Productos_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.select_ordenar,
    onChange: handleChangeOrdenProductos,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 25
    }
  }, __jsx("option", {
    value: "desc",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 29
    }
  }, "Mayor precio"), __jsx("option", {
    value: "asc",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 29
    }
  }, "Menor precio"))), __jsx("button", {
    onClick: showFiltrosMobile,
    className: "boton bg-yellow mt-3 d-none" + ' ' + _Productos_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.boton_filtrar_mobile,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 21
    }
  }, "Filtrar")), __jsx("div", {
    className: "row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 17
    }
  }, props.subproductos.map(function (prd) {
    return __jsx("div", {
      key: prd.idSubProducto,
      className: "col-6 col-md-3",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 25
      }
    }, __jsx(_CardProducto__WEBPACK_IMPORTED_MODULE_1__["default"], {
      imagen: prd.foto,
      prd: prd,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUHJvZHVjdG9zL2luZGV4LmpzIl0sIm5hbWVzIjpbIlByb2R1Y3RvcyIsInByb3BzIiwidXNlU3RhdGUiLCJmaWx0cm8iLCJzZXRGaWx0cm8iLCJ1c2VFZmZlY3QiLCJjb25zb2xlIiwibG9nIiwibG9jYXRpb24iLCJtb3N0cmFyU29sYXBhRmlsdHJvIiwicXVlcnkiLCJpbmRleCIsImdldFByb2R1Y3RvcyIsInNob3dGaWx0cm9zTW9iaWxlIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiY2xhc3NMaXN0IiwiYWRkIiwiRmlsdHJvU3R5bGUiLCJzaG93X2ZpbHRyb3MiLCJ0cmFlclRvZG9zIiwicXVlcnlTZWxlY3RvciIsIlByb2R1Y3Rvc1N0eWxlIiwibGFiZWxfX2ZpbHRyb19idXNxdWVkYSIsInJlbW92ZSIsImhhbmRsZUNoYW5nZU9yZGVuUHJvZHVjdG9zIiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsInByb2R1Y3RvcyIsInNvcnQiLCJhIiwiYiIsInByZWNpbyIsIm9yZGVuYXJQcm9kdWN0b3MiLCJsb2FkaW5nIiwiZmFTZWFyY2giLCJpdGVtX2ZpbHRyb19idXNxdWVkYSIsInBhZGRpbmciLCJzdWJwcm9kdWN0b3MiLCJsZW5ndGgiLCJzZWxlY3Rfb3JkZW5hciIsImJvdG9uX2ZpbHRyYXJfbW9iaWxlIiwibWFwIiwicHJkIiwiaWRTdWJQcm9kdWN0byIsImZvdG8iLCJtYXBTdGF0ZVRvUHJvcHMiLCJyZWR1Y2VycyIsInN1YnByb2R1Y3Rvc1JlZHVjZXIiLCJjb25uZWN0Iiwic3VicHJvZHVjdG9zQWN0aW9ucyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNDLEtBQUQsRUFBVztBQUFBOztBQUFBLGtC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QUUsZ0NBQWdDLEdBQWhDLEdBQXNDUyw0REFBYyxDQUFDb0Isb0JBQXBHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFUSixDQVBKLEVBa0JJO0FBQUssYUFBUyxFQUFDLEtBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNLekMsS0FBSyxDQUFDc0MsWUFBTixDQUFtQkksR0FBbkIsQ0FBdUIsVUFBQUMsR0FBRztBQUFBLFdBQ3ZCO0FBQUssU0FBRyxFQUFFQSxHQUFHLENBQUNDLGFBQWQ7QUFBNkIsZUFBUyxFQUFDLGdCQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0ksTUFBQyxxREFBRDtBQUFjLFlBQU0sRUFBRUQsR0FBRyxDQUFDRSxJQUExQjtBQUFnQyxTQUFHLEVBQUVGLEdBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFESixDQUR1QjtBQUFBLEdBQTFCLENBREwsQ0FsQkosQ0FGSixDQURKO0FBZ0NILENBMUVEOztHQUFNNUMsUzs7S0FBQUEsUzs7QUE0RU4sSUFBTStDLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQUMsUUFBUSxFQUFFO0FBQzlCLFNBQU9BLFFBQVEsQ0FBQ0MsbUJBQWhCO0FBQ0gsQ0FGRDs7QUFJZUMsMEhBQU8sQ0FBQ0gsZUFBRCxFQUFpQkksK0RBQWpCLENBQVAsQ0FBNkNuRCxTQUE3QyxDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2R1Y3Rvcy9bWy4uLmluZGV4XV0uYjhjNThjNjFjNjI1NmEyNTIzOWIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQ2FyZFByb2R1Y3RvIGZyb20gJy4uL0NhcmRQcm9kdWN0byc7XHJcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgKiBhcyBzdWJwcm9kdWN0b3NBY3Rpb25zIGZyb20gJy4uLy4uLy4uL3N0b3JlL2FjdGlvbnMvc3VicHJvZHVjdG9zQWN0aW9ucyc7XHJcbmltcG9ydCBQcm9kdWN0b3NTdHlsZSBmcm9tICcuL1Byb2R1Y3Rvcy5tb2R1bGUuY3NzJztcclxuaW1wb3J0IExvYWRlciBmcm9tICcuLi9Mb2FkZXInO1xyXG5pbXBvcnQgeyBmYVNlYXJjaCB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnNcIjtcclxuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiO1xyXG5cclxuY29uc3QgUHJvZHVjdG9zID0gKHByb3BzKSA9PiB7XHJcblxyXG4gICAgY29uc3QgW2ZpbHRybywgc2V0RmlsdHJvXSA9IHVzZVN0YXRlKCcnKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHByb3BzKTtcclxuICAgICAgICBpZihwcm9wcy5sb2NhdGlvbiAhPT0gJy9wcm9kdWN0b3MnKXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2VlZWUnKTtcclxuICAgICAgICAgICAgbW9zdHJhclNvbGFwYUZpbHRybyhwcm9wcy5xdWVyeS5pbmRleFswXSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBnZXRQcm9kdWN0b3MoKTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICBjb25zdCBzaG93RmlsdHJvc01vYmlsZSA9ICgpPT57XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnRmlsdHJvX2ZpbHRyb3NfX2NvbnRhbmllcl9fM2tuWGYnKVswXS5jbGFzc0xpc3QuYWRkKEZpbHRyb1N0eWxlLnNob3dfZmlsdHJvcyk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZ2V0UHJvZHVjdG9zID0gKCk9PntcclxuICAgICAgICBwcm9wcy50cmFlclRvZG9zKCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGNvbnN0IG1vc3RyYXJTb2xhcGFGaWx0cm8gPSBmaWx0cm89PntcclxuICAgICAgICBzZXRGaWx0cm8oZmlsdHJvKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHtQcm9kdWN0b3NTdHlsZS5sYWJlbF9fZmlsdHJvX2J1c3F1ZWRhfWApLmNsYXNzTGlzdC5yZW1vdmUoJ2Qtbm9uZScpKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVDaGFuZ2VPcmRlblByb2R1Y3RvcyA9IGV2ZW50PT57XHJcbiAgICAgICAgaWYoZXZlbnQudGFyZ2V0LnZhbHVlID09PSAnYXNjJyl7XHJcbiAgICAgICAgICAgIHByb3BzLnByb2R1Y3Rvcy5zb3J0KChhLGIpPT57XHJcbiAgICAgICAgICAgICAgICBpZihhLnByZWNpbyA+IGIucHJlY2lvKSByZXR1cm4gMTtcclxuICAgICAgICAgICAgICAgIGlmKGEucHJlY2lvIDwgYi5wcmVjaW8pIHJldHVybiAtMTtcclxuICAgICAgICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBwcm9wcy5wcm9kdWN0b3Muc29ydCgoYSxiKT0+e1xyXG4gICAgICAgICAgICAgICAgaWYoYS5wcmVjaW8gPCBiLnByZWNpbykgcmV0dXJuIDE7XHJcbiAgICAgICAgICAgICAgICBpZihhLnByZWNpbyA+IGIucHJlY2lvKSByZXR1cm4gLTE7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gMDtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiBwcm9wcy5vcmRlbmFyUHJvZHVjdG9zKHByb3BzLnByb2R1Y3Rvcyk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIHsocHJvcHMubG9hZGluZyk/PGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgdGV4dC1jZW50ZXJcIj48TG9hZGVyLz48L2Rpdj46XHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBpZD1cImxhYmVsX19maWx0cm8tYnVzcXVlZGFcIiBjbGFzc05hbWU9e1Byb2R1Y3Rvc1N0eWxlLmxhYmVsX19maWx0cm9fYnVzcXVlZGEgKyAnICcgKyAnZC1ub25lJ30+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVNlYXJjaH0vPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17UHJvZHVjdG9zU3R5bGUuaXRlbV9maWx0cm9fYnVzcXVlZGF9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkZFwiIGlkPVwidmFsb3ItYnVzcXVlZGFcIj57ZmlsdHJvfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBteS0yIGFsaWduLWl0ZW1zLWNlbnRlclwiIHN0eWxlPXt7cGFkZGluZzonMHB4IDE1cHgnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1tdXRlZFwiPjxiIGNsYXNzTmFtZT1cInR4dC15ZWxsb3dcIj57cHJvcHMuc3VicHJvZHVjdG9zLmxlbmd0aH08L2I+IHByb2R1Y3RvcyBlbmNvbnRyYWRvczwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17UHJvZHVjdG9zU3R5bGUub3JkZW5hclByb2R1Y3RvcyArICcgJyArIGBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyYH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInR4dC15ZWxsb3cgdGV4dC1ib2xkIG1yLTJcIj5PcmRlbmFyIHBvcjogPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzTmFtZT17UHJvZHVjdG9zU3R5bGUuc2VsZWN0X29yZGVuYXJ9IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2VPcmRlblByb2R1Y3Rvc30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiZGVzY1wiPk1heW9yIHByZWNpbzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImFzY1wiPk1lbm9yIHByZWNpbzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3Nob3dGaWx0cm9zTW9iaWxlfSBjbGFzc05hbWU9e2Bib3RvbiBiZy15ZWxsb3cgbXQtMyBkLW5vbmVgICsgJyAnICsgUHJvZHVjdG9zU3R5bGUuYm90b25fZmlsdHJhcl9tb2JpbGV9PkZpbHRyYXI8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICB7cHJvcHMuc3VicHJvZHVjdG9zLm1hcChwcmQ9PihcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e3ByZC5pZFN1YlByb2R1Y3RvfSBjbGFzc05hbWU9XCJjb2wtNiBjb2wtbWQtM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmRQcm9kdWN0byBpbWFnZW49e3ByZC5mb3RvfSBwcmQ9e3ByZH0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufVxyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gcmVkdWNlcnM9PntcclxuICAgIHJldHVybiByZWR1Y2Vycy5zdWJwcm9kdWN0b3NSZWR1Y2VyO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcyxzdWJwcm9kdWN0b3NBY3Rpb25zKShQcm9kdWN0b3MpOyJdLCJzb3VyY2VSb290IjoiIn0=