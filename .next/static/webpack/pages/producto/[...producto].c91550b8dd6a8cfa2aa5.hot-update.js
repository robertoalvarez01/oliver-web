webpackHotUpdate_N_E("pages/producto/[...producto]",{

/***/ "./src/components/ProductoSingle/index.js":
/*!************************************************!*\
  !*** ./src/components/ProductoSingle/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _sliderFotos__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sliderFotos */ "./src/components/ProductoSingle/sliderFotos.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store_actions_carritoActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../store/actions/carritoActions */ "./store/actions/carritoActions.js");
/* harmony import */ var _Loader_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Loader/index */ "./src/components/Loader/index.js");
/* harmony import */ var _Modal_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Modal/index */ "./src/components/Modal/index.js");
/* harmony import */ var _Carrito_index__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Carrito/index */ "./src/components/Carrito/index.js");
/* harmony import */ var _ProductoSingle_module_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ProductoSingle.module.css */ "./src/components/ProductoSingle/ProductoSingle.module.css");
/* harmony import */ var _ProductoSingle_module_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_ProductoSingle_module_css__WEBPACK_IMPORTED_MODULE_10__);




var _this = undefined,
    _jsxFileName = "C:\\Users\\franc\\Documents\\oliver-2\\oliver-sitio\\src\\components\\ProductoSingle\\index.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }










var ProductoSingle = function ProductoSingle(props) {
  _s();

  var _props$subProducto = props.subProducto,
      descripcion = _props$subProducto.descripcion,
      descripcion_basica = _props$subProducto.descripcion_basica,
      foto = _props$subProducto.foto,
      peso = _props$subProducto.peso,
      precioUnidad = _props$subProducto.precioUnidad,
      producto = _props$subProducto.producto,
      stock = _props$subProducto.stock,
      subProducto = _props$subProducto.subProducto,
      tamaño = _props$subProducto.tamaño;
  console.log(props);
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    guardarProductoEnState();
  }, []);
  var imagenes = [props.subProducto.foto];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      modalIsOpen = _useState[0],
      setModalIsOpen = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({}),
      productoData = _useState2[0],
      setProductoData = _useState2[1];

  var changeCantidad = function changeCantidad(action) {
    var inputCantidad = document.getElementById('cantidad_prd');
    var cantidad = parseInt(inputCantidad.value);

    if (action === '-') {
      if (cantidad <= 1) return false;
      cantidad--;
    } else {
      cantidad++;
    }

    inputCantidad.value = cantidad;
  };

  var changePeso = function changePeso(index, peso, precio) {
    //!!!!revisar//////
    // setProducto({
    //     ...producto,
    //     precio,
    //     peso
    // });
    var cajaPeso = document.getElementsByClassName(_ProductoSingle_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.caja_cantidadKg);

    for (var _index = 0; _index < cajaPeso.length; _index++) {
      cajaPeso[_index].classList.contains(_ProductoSingle_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.active) ? cajaPeso[_index].classList.remove(_ProductoSingle_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.active) : null;
    }

    cajaPeso[index].classList.add(_ProductoSingle_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.active);
  };

  var agregarCarrito = /*#__PURE__*/function () {
    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              props.agregarProducto(producto);
              setTimeout(function () {
                setModalIsOpen(true);
              }, 1700);

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function agregarCarrito() {
      return _ref.apply(this, arguments);
    };
  }();

  var closeModalCarrito = function closeModalCarrito() {
    return setModalIsOpen(false);
  };

  guardarProductoEnState = function guardarProductoEnState() {
    setProductoData(_objectSpread(_objectSpread({}, productoData), {}, {
      producto: producto,
      foto: foto,
      peso: peso,
      precioUnidad: precioUnidad,
      cantidad: 1,
      tamaño: tamaño
    }));
  };

  return __jsx("div", {
    className: "row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "col-12 col-sm-6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 13
    }
  }, __jsx(_sliderFotos__WEBPACK_IMPORTED_MODULE_4__["default"], {
    imagenes: imagenes,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "col-12 col-sm-6 pt-5" + ' ' + _ProductoSingle_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.descripcionProducto,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 13
    }
  }, __jsx("h3", {
    className: _ProductoSingle_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.marca,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 17
    }
  }, "PURINA EXCELLENT"), __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 17
    }
  }, subProducto), __jsx("div", {
    className: _ProductoSingle_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.precios + ' ' + "d-flex my-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: _ProductoSingle_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.indicador__precio,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 21
    }
  }, __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 25
    }
  }, "Precio"), __jsx("span", {
    className: _ProductoSingle_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.valor__precio,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 25
    }
  }, "$", precioUnidad)), __jsx("div", {
    className: _ProductoSingle_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.indicador__cantidad,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 21
    }
  }, __jsx("p", {
    className: _ProductoSingle_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.titulo__indicadorCantidad + ' ' + "text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 25
    }
  }, "Seleccion\xE1 tama\xF1o"), __jsx("div", {
    className: "row justify-content-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: _ProductoSingle_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.caja_cantidadKg + ' ' + _ProductoSingle_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.active,
    onClick: function onClick() {
      return changePeso(0, 3, 986);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 29
    }
  }, __jsx("p", {
    className: _ProductoSingle_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.kilos,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 33
    }
  }, "3 Kgs"), __jsx("span", {
    className: _ProductoSingle_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.precioDelKg,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 33
    }
  }, "$986")), __jsx("div", {
    className: _ProductoSingle_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.caja_cantidadKg,
    onClick: function onClick() {
      return changePeso(1, 5, 1200);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 29
    }
  }, __jsx("p", {
    className: _ProductoSingle_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.kilos,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 33
    }
  }, "5 Kgs"), __jsx("span", {
    className: _ProductoSingle_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.precioDelKg,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 33
    }
  }, "$1200")), __jsx("div", {
    className: _ProductoSingle_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.caja_cantidadKg,
    onClick: function onClick() {
      return changePeso(2, 9, 1500);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 29
    }
  }, __jsx("p", {
    className: _ProductoSingle_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.kilos,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 33
    }
  }, "9 Kgs"), __jsx("span", {
    className: _ProductoSingle_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.precioDelKg,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 33
    }
  }, "$1500")), __jsx("div", {
    className: _ProductoSingle_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.caja_cantidadKg,
    onClick: function onClick() {
      return changePeso(3, 11, 2000);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 29
    }
  }, __jsx("p", {
    className: _ProductoSingle_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.kilos,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 33
    }
  }, "11 Kgs"), __jsx("span", {
    className: _ProductoSingle_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.precioDelKg,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 33
    }
  }, "$2000"))), __jsx("div", {
    className: "input-group mt-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "input-group-prepend",
    onClick: function onClick() {
      return changeCantidad('-');
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 29
    }
  }, __jsx("span", {
    className: "input-group-text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 33
    }
  }, "-")), __jsx("input", {
    type: "text",
    id: "cantidad_prd",
    className: "form-control text-center",
    value: "1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 29
    }
  }), __jsx("div", {
    className: "input-group-append",
    onClick: function onClick() {
      return changeCantidad('+');
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 29
    }
  }, __jsx("span", {
    className: "input-group-text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 33
    }
  }, "+"))))), props.loading ? __jsx("div", {
    className: "text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 34
    }
  }, __jsx(_Loader_index__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 63
    }
  })) : __jsx("button", {
    disabled: true,
    className: "boton bg-yellow",
    onClick: agregarCarrito,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 79
    }
  }, "Comprar")), !modalIsOpen ? null : __jsx(_Modal_index__WEBPACK_IMPORTED_MODULE_8__["default"], {
    closeModal: closeModalCarrito,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 17
    }
  }, __jsx(_Carrito_index__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 21
    }
  })));
};

_s(ProductoSingle, "cAxkdyuVPU4nbPRm+hUfY2zNiO0=");

_c = ProductoSingle;

var mapStateToProps = function mapStateToProps(reducers) {
  return reducers.carritoReducer;
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["connect"])(mapStateToProps, _store_actions_carritoActions__WEBPACK_IMPORTED_MODULE_6__)(ProductoSingle));

var _c;

$RefreshReg$(_c, "ProductoSingle");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUHJvZHVjdG9TaW5nbGUvaW5kZXguanMiXSwibmFtZXMiOlsiUHJvZHVjdG9TaW5nbGUiLCJwcm9wcyIsInN1YlByb2R1Y3RvIiwiZGVzY3JpcGNpb24iLCJkZXNjcmlwY2lvbl9iYXNpY2EiLCJmb3RvIiwicGVzbyIsInByZWNpb1VuaWRhZCIsInByb2R1Y3RvIiwic3RvY2siLCJ0YW1hw7FvIiwiY29uc29sZSIsImxvZyIsInVzZUVmZmVjdCIsImd1YXJkYXJQcm9kdWN0b0VuU3RhdGUiLCJpbWFnZW5lcyIsInVzZVN0YXRlIiwibW9kYWxJc09wZW4iLCJzZXRNb2RhbElzT3BlbiIsInByb2R1Y3RvRGF0YSIsInNldFByb2R1Y3RvRGF0YSIsImNoYW5nZUNhbnRpZGFkIiwiYWN0aW9uIiwiaW5wdXRDYW50aWRhZCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjYW50aWRhZCIsInBhcnNlSW50IiwidmFsdWUiLCJjaGFuZ2VQZXNvIiwiaW5kZXgiLCJwcmVjaW8iLCJjYWphUGVzbyIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJQcm9kdWN0b1NpbmdsZVN0eWxlIiwiY2FqYV9jYW50aWRhZEtnIiwibGVuZ3RoIiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJhY3RpdmUiLCJyZW1vdmUiLCJhZGQiLCJhZ3JlZ2FyQ2Fycml0byIsImFncmVnYXJQcm9kdWN0byIsInNldFRpbWVvdXQiLCJjbG9zZU1vZGFsQ2Fycml0byIsImRlc2NyaXBjaW9uUHJvZHVjdG8iLCJtYXJjYSIsInByZWNpb3MiLCJpbmRpY2Fkb3JfX3ByZWNpbyIsInZhbG9yX19wcmVjaW8iLCJpbmRpY2Fkb3JfX2NhbnRpZGFkIiwidGl0dWxvX19pbmRpY2Fkb3JDYW50aWRhZCIsImtpbG9zIiwicHJlY2lvRGVsS2ciLCJsb2FkaW5nIiwibWFwU3RhdGVUb1Byb3BzIiwicmVkdWNlcnMiLCJjYXJyaXRvUmVkdWNlciIsImNv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QWYsR0FDRyxNQUFDLG9EQUFEO0FBQU8sY0FBVSxFQUFFNEIsaUJBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLHNEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixDQS9DUixDQURKO0FBc0RILENBdkhEOztHQUFNN0MsYzs7S0FBQUEsYzs7QUF5SE4sSUFBTXdELGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQUMsUUFBUSxFQUFFO0FBQzlCLFNBQU9BLFFBQVEsQ0FBQ0MsY0FBaEI7QUFDSCxDQUZEOztBQUllQywwSEFBTyxDQUFDSCxlQUFELEVBQWlCSSwwREFBakIsQ0FBUCxDQUF3QzVELGNBQXhDLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvZHVjdG8vWy4uLnByb2R1Y3RvXS5jOTE1NTBiOGRkNmE4Y2ZhMmFhNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFNsaWRlckZvdG9zUHJvZHVjdG8gZnJvbSAnLi9zbGlkZXJGb3Rvcyc7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCAqIGFzIGNhcnJpdG9BY3Rpb25zIGZyb20gJy4uLy4uLy4uL3N0b3JlL2FjdGlvbnMvY2Fycml0b0FjdGlvbnMnO1xyXG5pbXBvcnQgTG9hZGVyIGZyb20gJy4uL0xvYWRlci9pbmRleCc7XHJcbmltcG9ydCBNb2RhbCBmcm9tICcuLi9Nb2RhbC9pbmRleCc7XHJcbmltcG9ydCBDYXJyaXRvIGZyb20gJy4uL0NhcnJpdG8vaW5kZXgnO1xyXG5pbXBvcnQgUHJvZHVjdG9TaW5nbGVTdHlsZSBmcm9tICAnLi9Qcm9kdWN0b1NpbmdsZS5tb2R1bGUuY3NzJztcclxuXHJcbmNvbnN0IFByb2R1Y3RvU2luZ2xlID0gKHByb3BzKSA9PiB7XHJcblxyXG4gICAgY29uc3Qge2Rlc2NyaXBjaW9uLGRlc2NyaXBjaW9uX2Jhc2ljYSxmb3RvLHBlc28scHJlY2lvVW5pZGFkLHByb2R1Y3RvLHN0b2NrLHN1YlByb2R1Y3RvLHRhbWHDsW99ID0gcHJvcHMuc3ViUHJvZHVjdG87XHJcbiAgICBjb25zb2xlLmxvZyhwcm9wcyk7XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGd1YXJkYXJQcm9kdWN0b0VuU3RhdGUoKTtcclxuICAgIH0sIFtdKVxyXG5cclxuICAgIGNvbnN0IGltYWdlbmVzID0gW1xyXG4gICAgICAgIHByb3BzLnN1YlByb2R1Y3RvLmZvdG9cclxuICAgIF07XHJcbiAgICBjb25zdCBbbW9kYWxJc09wZW4sIHNldE1vZGFsSXNPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtwcm9kdWN0b0RhdGEsIHNldFByb2R1Y3RvRGF0YV0gPSB1c2VTdGF0ZSh7fSk7XHJcbiAgICBcclxuXHJcbiAgICBjb25zdCBjaGFuZ2VDYW50aWRhZCA9IGFjdGlvbj0+e1xyXG4gICAgICAgIGxldCBpbnB1dENhbnRpZGFkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbnRpZGFkX3ByZCcpO1xyXG4gICAgICAgIGxldCBjYW50aWRhZCA9IHBhcnNlSW50KGlucHV0Q2FudGlkYWQudmFsdWUpO1xyXG4gICAgICAgIGlmKGFjdGlvbiA9PT0gJy0nKXtcclxuICAgICAgICAgICAgaWYoY2FudGlkYWQgPD0gMSkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICBjYW50aWRhZC0tO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBjYW50aWRhZCsrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpbnB1dENhbnRpZGFkLnZhbHVlID0gY2FudGlkYWQ7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNoYW5nZVBlc28gPSAoaW5kZXgscGVzbyxwcmVjaW8pPT57XHJcbiAgICAgICAgLy8hISEhcmV2aXNhci8vLy8vL1xyXG4gICAgICAgIC8vIHNldFByb2R1Y3RvKHtcclxuICAgICAgICAvLyAgICAgLi4ucHJvZHVjdG8sXHJcbiAgICAgICAgLy8gICAgIHByZWNpbyxcclxuICAgICAgICAvLyAgICAgcGVzb1xyXG4gICAgICAgIC8vIH0pO1xyXG4gICAgICAgIGxldCBjYWphUGVzbyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoUHJvZHVjdG9TaW5nbGVTdHlsZS5jYWphX2NhbnRpZGFkS2cpO1xyXG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBjYWphUGVzby5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgKGNhamFQZXNvW2luZGV4XS5jbGFzc0xpc3QuY29udGFpbnMoUHJvZHVjdG9TaW5nbGVTdHlsZS5hY3RpdmUpKT9jYWphUGVzb1tpbmRleF0uY2xhc3NMaXN0LnJlbW92ZShQcm9kdWN0b1NpbmdsZVN0eWxlLmFjdGl2ZSk6bnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2FqYVBlc29baW5kZXhdLmNsYXNzTGlzdC5hZGQoUHJvZHVjdG9TaW5nbGVTdHlsZS5hY3RpdmUpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGFncmVnYXJDYXJyaXRvID0gYXN5bmMoKT0+e1xyXG4gICAgICAgIHByb3BzLmFncmVnYXJQcm9kdWN0byhwcm9kdWN0byk7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHNldE1vZGFsSXNPcGVuKHRydWUpO1xyXG4gICAgICAgIH0sIDE3MDApO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNsb3NlTW9kYWxDYXJyaXRvID0oKT0+KFxyXG4gICAgICAgIHNldE1vZGFsSXNPcGVuKGZhbHNlKVxyXG4gICAgKTtcclxuICAgIFxyXG4gICAgZ3VhcmRhclByb2R1Y3RvRW5TdGF0ZSA9ICgpPT57XHJcbiAgICAgICAgc2V0UHJvZHVjdG9EYXRhKHtcclxuICAgICAgICAgICAgLi4ucHJvZHVjdG9EYXRhLFxyXG4gICAgICAgICAgICBwcm9kdWN0byxcclxuICAgICAgICAgICAgZm90byxcclxuICAgICAgICAgICAgcGVzbyxcclxuICAgICAgICAgICAgcHJlY2lvVW5pZGFkLFxyXG4gICAgICAgICAgICBjYW50aWRhZDoxLFxyXG4gICAgICAgICAgICB0YW1hw7FvXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1zbS02XCI+XHJcbiAgICAgICAgICAgICAgICA8U2xpZGVyRm90b3NQcm9kdWN0byBpbWFnZW5lcz17aW1hZ2VuZXN9Lz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgY29sLTEyIGNvbC1zbS02IHB0LTVgKycgJysgUHJvZHVjdG9TaW5nbGVTdHlsZS5kZXNjcmlwY2lvblByb2R1Y3RvfT5cclxuICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9e1Byb2R1Y3RvU2luZ2xlU3R5bGUubWFyY2F9PlBVUklOQSBFWENFTExFTlQ8L2gzPlxyXG4gICAgICAgICAgICAgICAgPGgxPntzdWJQcm9kdWN0b308L2gxPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1Byb2R1Y3RvU2luZ2xlU3R5bGUucHJlY2lvcyArICcgJyArIGBkLWZsZXggbXktM2B9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtQcm9kdWN0b1NpbmdsZVN0eWxlLmluZGljYWRvcl9fcHJlY2lvfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+UHJlY2lvPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e1Byb2R1Y3RvU2luZ2xlU3R5bGUudmFsb3JfX3ByZWNpb30+JHtwcmVjaW9VbmlkYWR9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17UHJvZHVjdG9TaW5nbGVTdHlsZS5pbmRpY2Fkb3JfX2NhbnRpZGFkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtQcm9kdWN0b1NpbmdsZVN0eWxlLnRpdHVsb19faW5kaWNhZG9yQ2FudGlkYWQrJyAnK2B0ZXh0LWNlbnRlcmB9PlNlbGVjY2lvbsOhIHRhbWHDsW88L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtQcm9kdWN0b1NpbmdsZVN0eWxlLmNhamFfY2FudGlkYWRLZyArICcgJyArUHJvZHVjdG9TaW5nbGVTdHlsZS5hY3RpdmV9IG9uQ2xpY2s9eygpPT5jaGFuZ2VQZXNvKDAsMyw5ODYpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e1Byb2R1Y3RvU2luZ2xlU3R5bGUua2lsb3N9PjMgS2dzPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17UHJvZHVjdG9TaW5nbGVTdHlsZS5wcmVjaW9EZWxLZ30+JDk4Njwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1Byb2R1Y3RvU2luZ2xlU3R5bGUuY2FqYV9jYW50aWRhZEtnfSBvbkNsaWNrPXsoKT0+Y2hhbmdlUGVzbygxLDUsMTIwMCl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17UHJvZHVjdG9TaW5nbGVTdHlsZS5raWxvc30+NSBLZ3M8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtQcm9kdWN0b1NpbmdsZVN0eWxlLnByZWNpb0RlbEtnfT4kMTIwMDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1Byb2R1Y3RvU2luZ2xlU3R5bGUuY2FqYV9jYW50aWRhZEtnfSBvbkNsaWNrPXsoKT0+Y2hhbmdlUGVzbygyLDksMTUwMCl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17UHJvZHVjdG9TaW5nbGVTdHlsZS5raWxvc30+OSBLZ3M8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtQcm9kdWN0b1NpbmdsZVN0eWxlLnByZWNpb0RlbEtnfT4kMTUwMDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1Byb2R1Y3RvU2luZ2xlU3R5bGUuY2FqYV9jYW50aWRhZEtnfSBvbkNsaWNrPXsoKT0+Y2hhbmdlUGVzbygzLDExLDIwMDApfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e1Byb2R1Y3RvU2luZ2xlU3R5bGUua2lsb3N9PjExIEtnczwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e1Byb2R1Y3RvU2luZ2xlU3R5bGUucHJlY2lvRGVsS2d9PiQyMDAwPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwIG10LTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAtcHJlcGVuZFwiIG9uQ2xpY2s9eygpPT5jaGFuZ2VDYW50aWRhZCgnLScpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC10ZXh0XCI+LTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJjYW50aWRhZF9wcmRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgdGV4dC1jZW50ZXJcIiB2YWx1ZT1cIjFcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLWFwcGVuZFwiIG9uQ2xpY2s9eygpPT5jaGFuZ2VDYW50aWRhZCgnKycpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC10ZXh0XCI+Kzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgeyhwcm9wcy5sb2FkaW5nKT88ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+PExvYWRlci8+PC9kaXY+OjxidXR0b24gZGlzYWJsZWQ9e3RydWV9IGNsYXNzTmFtZT1cImJvdG9uIGJnLXllbGxvd1wiIG9uQ2xpY2s9e2FncmVnYXJDYXJyaXRvfT5Db21wcmFyPC9idXR0b24+fVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgeyghbW9kYWxJc09wZW4pP251bGw6XHJcbiAgICAgICAgICAgICAgICA8TW9kYWwgY2xvc2VNb2RhbD17Y2xvc2VNb2RhbENhcnJpdG99PlxyXG4gICAgICAgICAgICAgICAgICAgIDxDYXJyaXRvLz5cclxuICAgICAgICAgICAgICAgIDwvTW9kYWw+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHJlZHVjZXJzPT57XHJcbiAgICByZXR1cm4gcmVkdWNlcnMuY2Fycml0b1JlZHVjZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLGNhcnJpdG9BY3Rpb25zKShQcm9kdWN0b1NpbmdsZSk7Il0sInNvdXJjZVJvb3QiOiIifQ==