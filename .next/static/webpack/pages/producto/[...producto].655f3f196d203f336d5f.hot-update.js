webpackHotUpdate_N_E("pages/producto/[...producto]",{

/***/ "./src/components/ProductoSingle/index.js":
/*!************************************************!*\
  !*** ./src/components/ProductoSingle/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
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

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }










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
    guardarProductoEnState(foto, peso, precioUnidad, producto, tamaño);
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
    return setProductoData(_objectSpread(_objectSpread({}, productoData), {}, {
      cantidad: cantidad,
      precioUnidad: precioUnidad * cantidad
    }));
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
    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              props.agregarProducto(productoData);
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

  var guardarProductoEnState = function guardarProductoEnState(foto, peso, precioUnidad, producto, tamaño) {
    setProductoData({
      producto: producto,
      foto: foto,
      peso: peso,
      cantidad: 1,
      precioUnidad: precioUnidad,
      tamaño: tamaño
    });
  };

  return __jsx("div", {
    className: "row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "col-12 col-sm-6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 13
    }
  }, __jsx(_sliderFotos__WEBPACK_IMPORTED_MODULE_4__["default"], {
    imagenes: imagenes,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "col-12 col-sm-6 pt-5" + ' ' + _ProductoSingle_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.descripcionProducto,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 13
    }
  }, __jsx("h3", {
    className: _ProductoSingle_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.marca,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 17
    }
  }, "PURINA EXCELLENT"), __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 17
    }
  }, subProducto), __jsx("div", {
    className: _ProductoSingle_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.precios + ' ' + "d-flex my-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: _ProductoSingle_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.indicador__precio,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 21
    }
  }, __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 25
    }
  }, "Precio"), __jsx("span", {
    className: _ProductoSingle_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.valor__precio,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 25
    }
  }, "$", productoData.precioUnidad)), __jsx("div", {
    className: _ProductoSingle_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.indicador__cantidad,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 21
    }
  }, __jsx("p", {
    className: _ProductoSingle_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.titulo__indicadorCantidad + ' ' + "text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 25
    }
  }, "Seleccion\xE1 tama\xF1o"), __jsx("div", {
    className: "row justify-content-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
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
  }, "3 Kgs"), __jsx("span", {
    className: _ProductoSingle_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.precioDelKg,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
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
  }, "5 Kgs"), __jsx("span", {
    className: _ProductoSingle_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.precioDelKg,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
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
  }, "9 Kgs"), __jsx("span", {
    className: _ProductoSingle_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.precioDelKg,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
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
      lineNumber: 108,
      columnNumber: 29
    }
  }, __jsx("p", {
    className: _ProductoSingle_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.kilos,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 33
    }
  }, "11 Kgs"), __jsx("span", {
    className: _ProductoSingle_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.precioDelKg,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 33
    }
  }, "$2000"))), __jsx("div", {
    className: "input-group mt-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
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
  }, "-")), __jsx("input", {
    type: "text",
    id: "cantidad_prd",
    className: "form-control text-center",
    value: productoData.cantidad,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
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
      lineNumber: 118,
      columnNumber: 29
    }
  }, __jsx("span", {
    className: "input-group-text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 33
    }
  }, "+"))))), props.loading ? __jsx("div", {
    className: "text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 34
    }
  }, __jsx(_Loader_index__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 63
    }
  })) : __jsx("button", {
    disabled: true,
    className: "boton bg-yellow",
    onClick: agregarCarrito,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 79
    }
  }, "Comprar")), !modalIsOpen ? null : __jsx(_Modal_index__WEBPACK_IMPORTED_MODULE_8__["default"], {
    closeModal: closeModalCarrito,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 17
    }
  }, __jsx(_Carrito_index__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUHJvZHVjdG9TaW5nbGUvaW5kZXguanMiXSwibmFtZXMiOlsiUHJvZHVjdG9TaW5nbGUiLCJwcm9wcyIsInN1YlByb2R1Y3RvIiwiZGVzY3JpcGNpb24iLCJkZXNjcmlwY2lvbl9iYXNpY2EiLCJmb3RvIiwicGVzbyIsInByZWNpb1VuaWRhZCIsInByb2R1Y3RvIiwic3RvY2siLCJ0YW1hw7FvIiwiY29uc29sZSIsImxvZyIsInVzZUVmZmVjdCIsImd1YXJkYXJQcm9kdWN0b0VuU3RhdGUiLCJpbWFnZW5lcyIsInVzZVN0YXRlIiwibW9kYWxJc09wZW4iLCJzZXRNb2RhbElzT3BlbiIsInByb2R1Y3RvRGF0YSIsInNldFByb2R1Y3RvRGF0YSIsImNoYW5nZUNhbnRpZGFkIiwiYWN0aW9uIiwiaW5wdXRDYW50aWRhZCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjYW50aWRhZCIsInBhcnNlSW50IiwidmFsdWUiLCJjaGFuZ2VQZXNvIiwiaW5kZXgiLCJwcmVjaW8iLCJjYWphUGVzbyIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJQcm9kdWN0b1NpbmdsZVN0eWxlIiwiY2FqYV9jYW50aWRhZEtnIiwibGVuZ3RoIiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJhY3RpdmUiLCJyZW1vdmUiLCJhZGQiLCJhZ3JlZ2FyQ2Fycml0byIsImFncmVnYXJQcm9kdWN0byIsInNldFRpbWVvdXQiLCJjbG9zZU1vZGFsQ2Fycml0byIsImRlc2NyaXBjaW9uUHJvZHVjdG8iLCJtYXJjYSIsInByZWNpb3MiLCJpbmRpY2Fkb3JfX3ByZWNpbyIsInZhbG9yX19wcmVjaW8iLCJpbmRpY2Fkb3JfX2NhbnRpZGFkIiwidGl0dWxvX19pbmRpY2Fkb3JDYW50aWRhZCIsImtpbG9zIiwicHJlY2lvRGVsS2ciLCJsb2FkaW5nIiwibWFwU3RhdGVUb1Byb3BzIiwicmVkdWNlcnMiLCJjYXJyaXRvUmVkdWNlciIsImNv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LGFBQVMsRUFBQyxhQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBNkIsTUFBQyxxREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBQTdCLENBQWhCLEdBQTZEO0FBQVEsWUFBUSxFQUFFLElBQWxCO0FBQXdCLGFBQVMsRUFBQyxpQkFBbEM7QUFBb0QsV0FBTyxFQUFFYixjQUE3RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBeENsRSxDQUpKLEVBOENNLENBQUN6QixXQUFGLEdBQWUsSUFBZixHQUNHLE1BQUMsb0RBQUQ7QUFBTyxjQUFVLEVBQUU0QixpQkFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsc0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLENBL0NSLENBREo7QUFzREgsQ0EzSEQ7O0dBQU03QyxjOztLQUFBQSxjOztBQTZITixJQUFNd0QsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFBQyxRQUFRLEVBQUU7QUFDOUIsU0FBT0EsUUFBUSxDQUFDQyxjQUFoQjtBQUNILENBRkQ7O0FBSWVDLDBIQUFPLENBQUNILGVBQUQsRUFBaUJJLDBEQUFqQixDQUFQLENBQXdDNUQsY0FBeEMsQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9kdWN0by9bLi4ucHJvZHVjdG9dLjY1NWYzZjE5NmQyMDNmMzM2ZDVmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgU2xpZGVyRm90b3NQcm9kdWN0byBmcm9tICcuL3NsaWRlckZvdG9zJztcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0ICogYXMgY2Fycml0b0FjdGlvbnMgZnJvbSAnLi4vLi4vLi4vc3RvcmUvYWN0aW9ucy9jYXJyaXRvQWN0aW9ucyc7XHJcbmltcG9ydCBMb2FkZXIgZnJvbSAnLi4vTG9hZGVyL2luZGV4JztcclxuaW1wb3J0IE1vZGFsIGZyb20gJy4uL01vZGFsL2luZGV4JztcclxuaW1wb3J0IENhcnJpdG8gZnJvbSAnLi4vQ2Fycml0by9pbmRleCc7XHJcbmltcG9ydCBQcm9kdWN0b1NpbmdsZVN0eWxlIGZyb20gICcuL1Byb2R1Y3RvU2luZ2xlLm1vZHVsZS5jc3MnO1xyXG5cclxuY29uc3QgUHJvZHVjdG9TaW5nbGUgPSAocHJvcHMpID0+IHtcclxuXHJcbiAgICBjb25zdCB7ZGVzY3JpcGNpb24sZGVzY3JpcGNpb25fYmFzaWNhLGZvdG8scGVzbyxwcmVjaW9VbmlkYWQscHJvZHVjdG8sc3RvY2ssc3ViUHJvZHVjdG8sdGFtYcOxb30gPSBwcm9wcy5zdWJQcm9kdWN0bztcclxuICAgIGNvbnNvbGUubG9nKHByb3BzKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGd1YXJkYXJQcm9kdWN0b0VuU3RhdGUoZm90byxwZXNvLHByZWNpb1VuaWRhZCxwcm9kdWN0byx0YW1hw7FvKTtcclxuICAgIH0sIFtdKVxyXG5cclxuICAgIGNvbnN0IGltYWdlbmVzID0gW1xyXG4gICAgICAgIHByb3BzLnN1YlByb2R1Y3RvLmZvdG9cclxuICAgIF07XHJcbiAgICBjb25zdCBbbW9kYWxJc09wZW4sIHNldE1vZGFsSXNPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtwcm9kdWN0b0RhdGEsIHNldFByb2R1Y3RvRGF0YV0gPSB1c2VTdGF0ZSh7fSk7XHJcbiAgICBcclxuXHJcbiAgICBjb25zdCBjaGFuZ2VDYW50aWRhZCA9IGFjdGlvbj0+e1xyXG4gICAgICAgIGxldCBpbnB1dENhbnRpZGFkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbnRpZGFkX3ByZCcpO1xyXG4gICAgICAgIGxldCBjYW50aWRhZCA9IHBhcnNlSW50KGlucHV0Q2FudGlkYWQudmFsdWUpO1xyXG4gICAgICAgIGlmKGFjdGlvbiA9PT0gJy0nKXtcclxuICAgICAgICAgICAgaWYoY2FudGlkYWQgPD0gMSkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICBjYW50aWRhZC0tO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBjYW50aWRhZCsrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpbnB1dENhbnRpZGFkLnZhbHVlID0gY2FudGlkYWQ7XHJcbiAgICAgICAgcmV0dXJuIHNldFByb2R1Y3RvRGF0YSh7XHJcbiAgICAgICAgICAgIC4uLnByb2R1Y3RvRGF0YSxcclxuICAgICAgICAgICAgY2FudGlkYWQsXHJcbiAgICAgICAgICAgIHByZWNpb1VuaWRhZDpwcmVjaW9VbmlkYWQqY2FudGlkYWRcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNoYW5nZVBlc28gPSAoaW5kZXgscGVzbyxwcmVjaW8pPT57XHJcbiAgICAgICAgLy8hISEhcmV2aXNhci8vLy8vL1xyXG4gICAgICAgIC8vIHNldFByb2R1Y3RvKHtcclxuICAgICAgICAvLyAgICAgLi4ucHJvZHVjdG8sXHJcbiAgICAgICAgLy8gICAgIHByZWNpbyxcclxuICAgICAgICAvLyAgICAgcGVzb1xyXG4gICAgICAgIC8vIH0pO1xyXG4gICAgICAgIGxldCBjYWphUGVzbyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoUHJvZHVjdG9TaW5nbGVTdHlsZS5jYWphX2NhbnRpZGFkS2cpO1xyXG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBjYWphUGVzby5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgKGNhamFQZXNvW2luZGV4XS5jbGFzc0xpc3QuY29udGFpbnMoUHJvZHVjdG9TaW5nbGVTdHlsZS5hY3RpdmUpKT9jYWphUGVzb1tpbmRleF0uY2xhc3NMaXN0LnJlbW92ZShQcm9kdWN0b1NpbmdsZVN0eWxlLmFjdGl2ZSk6bnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2FqYVBlc29baW5kZXhdLmNsYXNzTGlzdC5hZGQoUHJvZHVjdG9TaW5nbGVTdHlsZS5hY3RpdmUpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGFncmVnYXJDYXJyaXRvID0gYXN5bmMoKT0+e1xyXG4gICAgICAgIHByb3BzLmFncmVnYXJQcm9kdWN0byhwcm9kdWN0b0RhdGEpO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBzZXRNb2RhbElzT3Blbih0cnVlKTtcclxuICAgICAgICB9LCAxNzAwKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjbG9zZU1vZGFsQ2Fycml0byA9KCk9PihcclxuICAgICAgICBzZXRNb2RhbElzT3BlbihmYWxzZSlcclxuICAgICk7XHJcbiAgICBcclxuICAgIGNvbnN0IGd1YXJkYXJQcm9kdWN0b0VuU3RhdGUgPSAoZm90byxwZXNvLHByZWNpb1VuaWRhZCxwcm9kdWN0byx0YW1hw7FvKT0+e1xyXG4gICAgICAgIHNldFByb2R1Y3RvRGF0YSh7XHJcbiAgICAgICAgICAgIHByb2R1Y3RvLFxyXG4gICAgICAgICAgICBmb3RvLFxyXG4gICAgICAgICAgICBwZXNvLFxyXG4gICAgICAgICAgICBjYW50aWRhZDoxLFxyXG4gICAgICAgICAgICBwcmVjaW9VbmlkYWQsXHJcbiAgICAgICAgICAgIHRhbWHDsW9cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLXNtLTZcIj5cclxuICAgICAgICAgICAgICAgIDxTbGlkZXJGb3Rvc1Byb2R1Y3RvIGltYWdlbmVzPXtpbWFnZW5lc30vPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Bjb2wtMTIgY29sLXNtLTYgcHQtNWArJyAnKyBQcm9kdWN0b1NpbmdsZVN0eWxlLmRlc2NyaXBjaW9uUHJvZHVjdG99PlxyXG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT17UHJvZHVjdG9TaW5nbGVTdHlsZS5tYXJjYX0+UFVSSU5BIEVYQ0VMTEVOVDwvaDM+XHJcbiAgICAgICAgICAgICAgICA8aDE+e3N1YlByb2R1Y3RvfTwvaDE+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17UHJvZHVjdG9TaW5nbGVTdHlsZS5wcmVjaW9zICsgJyAnICsgYGQtZmxleCBteS0zYH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1Byb2R1Y3RvU2luZ2xlU3R5bGUuaW5kaWNhZG9yX19wcmVjaW99PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5QcmVjaW88L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17UHJvZHVjdG9TaW5nbGVTdHlsZS52YWxvcl9fcHJlY2lvfT4ke3Byb2R1Y3RvRGF0YS5wcmVjaW9VbmlkYWR9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17UHJvZHVjdG9TaW5nbGVTdHlsZS5pbmRpY2Fkb3JfX2NhbnRpZGFkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtQcm9kdWN0b1NpbmdsZVN0eWxlLnRpdHVsb19faW5kaWNhZG9yQ2FudGlkYWQrJyAnK2B0ZXh0LWNlbnRlcmB9PlNlbGVjY2lvbsOhIHRhbWHDsW88L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtQcm9kdWN0b1NpbmdsZVN0eWxlLmNhamFfY2FudGlkYWRLZyArICcgJyArUHJvZHVjdG9TaW5nbGVTdHlsZS5hY3RpdmV9IG9uQ2xpY2s9eygpPT5jaGFuZ2VQZXNvKDAsMyw5ODYpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e1Byb2R1Y3RvU2luZ2xlU3R5bGUua2lsb3N9PjMgS2dzPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17UHJvZHVjdG9TaW5nbGVTdHlsZS5wcmVjaW9EZWxLZ30+JDk4Njwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1Byb2R1Y3RvU2luZ2xlU3R5bGUuY2FqYV9jYW50aWRhZEtnfSBvbkNsaWNrPXsoKT0+Y2hhbmdlUGVzbygxLDUsMTIwMCl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17UHJvZHVjdG9TaW5nbGVTdHlsZS5raWxvc30+NSBLZ3M8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtQcm9kdWN0b1NpbmdsZVN0eWxlLnByZWNpb0RlbEtnfT4kMTIwMDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1Byb2R1Y3RvU2luZ2xlU3R5bGUuY2FqYV9jYW50aWRhZEtnfSBvbkNsaWNrPXsoKT0+Y2hhbmdlUGVzbygyLDksMTUwMCl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17UHJvZHVjdG9TaW5nbGVTdHlsZS5raWxvc30+OSBLZ3M8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtQcm9kdWN0b1NpbmdsZVN0eWxlLnByZWNpb0RlbEtnfT4kMTUwMDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1Byb2R1Y3RvU2luZ2xlU3R5bGUuY2FqYV9jYW50aWRhZEtnfSBvbkNsaWNrPXsoKT0+Y2hhbmdlUGVzbygzLDExLDIwMDApfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e1Byb2R1Y3RvU2luZ2xlU3R5bGUua2lsb3N9PjExIEtnczwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e1Byb2R1Y3RvU2luZ2xlU3R5bGUucHJlY2lvRGVsS2d9PiQyMDAwPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwIG10LTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAtcHJlcGVuZFwiIG9uQ2xpY2s9eygpPT5jaGFuZ2VDYW50aWRhZCgnLScpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC10ZXh0XCI+LTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJjYW50aWRhZF9wcmRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgdGV4dC1jZW50ZXJcIiB2YWx1ZT17cHJvZHVjdG9EYXRhLmNhbnRpZGFkfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLWFwcGVuZFwiIG9uQ2xpY2s9eygpPT5jaGFuZ2VDYW50aWRhZCgnKycpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC10ZXh0XCI+Kzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgeyhwcm9wcy5sb2FkaW5nKT88ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+PExvYWRlci8+PC9kaXY+OjxidXR0b24gZGlzYWJsZWQ9e3RydWV9IGNsYXNzTmFtZT1cImJvdG9uIGJnLXllbGxvd1wiIG9uQ2xpY2s9e2FncmVnYXJDYXJyaXRvfT5Db21wcmFyPC9idXR0b24+fVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgeyghbW9kYWxJc09wZW4pP251bGw6XHJcbiAgICAgICAgICAgICAgICA8TW9kYWwgY2xvc2VNb2RhbD17Y2xvc2VNb2RhbENhcnJpdG99PlxyXG4gICAgICAgICAgICAgICAgICAgIDxDYXJyaXRvLz5cclxuICAgICAgICAgICAgICAgIDwvTW9kYWw+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHJlZHVjZXJzPT57XHJcbiAgICByZXR1cm4gcmVkdWNlcnMuY2Fycml0b1JlZHVjZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLGNhcnJpdG9BY3Rpb25zKShQcm9kdWN0b1NpbmdsZSk7Il0sInNvdXJjZVJvb3QiOiIifQ==