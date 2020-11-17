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
/* harmony import */ var _config_index__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../config/index */ "./config/index.js");




var _this = undefined,
    _jsxFileName = "C:\\Users\\franc\\Documents\\oliver-2\\sitio-desa\\src\\components\\ProductoSingle\\index.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }











var ProductoSingle = function ProductoSingle(props) {
  _s();

  if (props.subProductos.length > 0) {
    var _props$subProductos$ = props.subProductos[0],
        _peso = _props$subProductos$.peso,
        _precioUnidad = _props$subProductos$.precioUnidad,
        _idSubProducto = _props$subProductos$.idSubProducto,
        _subProducto = _props$subProductos$.subProducto,
        _tamaO = _props$subProductos$.tamaño;
  }

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    var _props$producto = props.producto,
        marca = _props$producto.marca,
        producto = _props$producto.producto;

    if (props.subProductos.length > 0) {
      var _props$subProductos$2 = props.subProductos[0],
          foto = _props$subProductos$2.foto,
          _peso2 = _props$subProductos$2.peso,
          _precioUnidad2 = _props$subProductos$2.precioUnidad,
          _tamaO2 = _props$subProductos$2.tamaño,
          _idSubProducto2 = _props$subProductos$2.idSubProducto,
          _subProducto2 = _props$subProductos$2.subProducto;
      guardarProductoEnState(foto, _peso2, _precioUnidad2, producto, _tamaO2, _idSubProducto2, marca, _subProducto2);
    } else {
      guardarProductoEnState("".concat(_config_index__WEBPACK_IMPORTED_MODULE_11__["URL_CLOUD_STORAGE"], "/sin-imagen.png"), null, null, producto, null, null, marca, null);
    }

    imagenes.push(productoData.foto);
  }, [props.producto]);
  var imagenes = []; //al vector de imagenes, le sumo las imagenes de los productos relacionados al mismo padre

  props.subProductos.map(function (datasp) {
    imagenes.push(datasp.foto);
  });

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
      cantidad: cantidad
    }));
  };

  var changePeso = function changePeso(index, peso, precio, tamaño, idSubProducto, subProducto) {
    var cajaPeso = document.getElementsByClassName(_ProductoSingle_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.caja_cantidadKg);

    for (var _index = 0; _index < cajaPeso.length; _index++) {
      cajaPeso[_index].classList.contains(_ProductoSingle_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.active) ? cajaPeso[_index].classList.remove(_ProductoSingle_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.active) : null;
    }

    cajaPeso[index].classList.add(_ProductoSingle_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.active);

    if (!peso || !precio || !tamaño || !idSubProducto || !subProducto) {
      return setProductoData(_objectSpread(_objectSpread({}, productoData), {}, {
        peso: props.subProductos[0].peso,
        precio: props.subProductos[0].precioUnidad,
        idSubProducto: props.subProductos[0].idSubProducto,
        subProducto: props.subProductos[0].subProducto
      }));
    }

    ;
    setProductoData(_objectSpread(_objectSpread({}, productoData), {}, {
      peso: peso,
      precio: precio,
      tamaño: tamaño,
      idSubProducto: idSubProducto,
      subProducto: subProducto
    }));
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

  var guardarProductoEnState = function guardarProductoEnState(foto, peso, precioUnidad, producto, tamaño, idSubProducto, marca, subProducto) {
    setProductoData({
      producto: producto,
      foto: foto,
      peso: peso,
      cantidad: 1,
      precioUnidad: precioUnidad,
      tamaño: tamaño,
      idSubProducto: idSubProducto,
      marca: marca,
      subProducto: subProducto
    });
  };

  return __jsx("div", {
    className: "row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "col-12 col-sm-6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 13
    }
  }, __jsx(_sliderFotos__WEBPACK_IMPORTED_MODULE_4__["default"], {
    imagenes: imagenes,
    changePeso: changePeso,
    subProductos: props.subProductos,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "col-12 col-sm-6 pt-5" + ' ' + _ProductoSingle_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.descripcionProducto,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 13
    }
  }, __jsx("h3", {
    className: _ProductoSingle_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.marca,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 17
    }
  }, productoData.marca), __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 17
    }
  }, productoData.producto), __jsx("div", {
    className: _ProductoSingle_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.precios + ' ' + "d-flex my-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: _ProductoSingle_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.indicador__precio,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 21
    }
  }, __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 25
    }
  }, "Precio"), __jsx("span", {
    className: _ProductoSingle_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.valor__precio,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 25
    }
  }, "$", productoData.precioUnidad)), __jsx("div", {
    className: _ProductoSingle_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.indicador__cantidad,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 21
    }
  }, __jsx("p", {
    className: _ProductoSingle_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.titulo__indicadorCantidad + ' ' + "text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 25
    }
  }, "Seleccion\xE1 tama\xF1o"), __jsx("div", {
    className: "row justify-content-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 25
    }
  }, props.subProductos.map(function (mp, key) {
    return key == 0 ? __jsx("div", {
      key: key,
      className: _ProductoSingle_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.caja_cantidadKg + ' ' + _ProductoSingle_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.active,
      onClick: function onClick() {
        return changePeso(key, "".concat(peso), precioUnidad, "".concat(tamaño), idSubProducto, "".concat(subProducto));
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 123,
        columnNumber: 37
      }
    }, __jsx("p", {
      className: _ProductoSingle_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.kilos,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124,
        columnNumber: 41
      }
    }, mp.peso, " Kgs"), __jsx("span", {
      className: _ProductoSingle_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.precioDelKg,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 125,
        columnNumber: 41
      }
    }, "$", productoData.precioUnidad)) : __jsx("div", {
      key: key,
      className: _ProductoSingle_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.caja_cantidadKg,
      onClick: function onClick() {
        return changePeso(key, "".concat(mp.peso), mp.precioUnidad, "".concat(mp.tamaño), mp.idSubProducto, "".concat(mp.subProducto));
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 33
      }
    }, __jsx("p", {
      className: _ProductoSingle_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.kilos,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 37
      }
    }, mp.peso, " Kgs"), __jsx("span", {
      className: _ProductoSingle_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.precioDelKg,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131,
        columnNumber: 37
      }
    }, "$", mp.precioUnidad));
  })), __jsx("div", {
    className: "input-group mt-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
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
      lineNumber: 136,
      columnNumber: 29
    }
  }, __jsx("span", {
    className: "input-group-text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
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
      lineNumber: 139,
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
      lineNumber: 140,
      columnNumber: 29
    }
  }, __jsx("span", {
    className: "input-group-text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 33
    }
  }, "+"))))), props.loading ? __jsx("div", {
    className: "text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 34
    }
  }, __jsx(_Loader_index__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 63
    }
  })) : __jsx("button", {
    className: "boton bg-yellow",
    onClick: agregarCarrito,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 79
    }
  }, "Comprar")), !modalIsOpen ? null : __jsx(_Modal_index__WEBPACK_IMPORTED_MODULE_8__["default"], {
    closeModal: closeModalCarrito,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 17
    }
  }, __jsx(_Carrito_index__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUHJvZHVjdG9TaW5nbGUvaW5kZXguanMiXSwibmFtZXMiOlsiUHJvZHVjdG9TaW5nbGUiLCJwcm9wcyIsInN1YlByb2R1Y3RvcyIsImxlbmd0aCIsInBlc28iLCJwcmVjaW9VbmlkYWQiLCJpZFN1YlByb2R1Y3RvIiwic3ViUHJvZHVjdG8iLCJ0YW1hw7FvIiwidXNlRWZmZWN0IiwicHJvZHVjdG8iLCJtYXJjYSIsImZvdG8iLCJndWFyZGFyUHJvZHVjdG9FblN0YXRlIiwiVVJMX0NMT1VEX1NUT1JBR0UiLCJpbWFnZW5lcyIsInB1c2giLCJwcm9kdWN0b0RhdGEiLCJtYXAiLCJkYXRhc3AiLCJ1c2VTdGF0ZSIsIm1vZGFsSXNPcGVuIiwic2V0TW9kYWxJc09wZW4iLCJzZXRQcm9kdWN0b0RhdGEiLCJjaGFuZ2VDYW50aWRhZCIsImFjdGlvbiIsImlucHV0Q2FudGlkYWQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY2FudGlkYWQiLCJwYXJzZUludCIsInZhbHVlIiwiY2hhbmdlUGVzbyIsImluZGV4IiwicHJlY2lvIiwiY2FqYVBlc28iLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiUHJvZHVjdG9TaW5nbGVTdHlsZSIsImNhamFfY2FudGlkYWRLZyIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwiYWN0aXZlIiwicmVtb3ZlIiwiYWRkIiwiYWdyZWdhckNhcnJpdG8iLCJhZ3JlZ2FyUHJvZHVjdG8iLCJzZXRUaW1lb3V0IiwiY2xvc2VNb2RhbENhcnJpdG8iLCJkZXNjcmlwY2lvblByb2R1Y3RvIiwicHJlY2lvcyIsImluZGljYWRvcl9fcHJlY2lvIiwidmFsb3JfX3ByZWNpbyIsImluZGljYWRvcl9fY2FudGlkYWQiLCJ0aXR1bG9fX2luZGljYWRvckNhbnRpZGFkIiwibXAiLCJrZXkiLCJraWxvcyIsInByZWNpb0RlbEtnIiwibG9hZGluZyIsIm1hcFN0YXRlVG9Qcm9wcyIsInJlZHVj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S0k7QUFBSyxhQUFTLEVBQUMsb0JBQWY7QUFBb0MsV0FBTyxFQUFFO0FBQUEsYUFBSUwsY0FBYyxDQUFDLEdBQUQsQ0FBbEI7QUFBQSxLQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBTSxhQUFTLEVBQUMsa0JBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FESixDQUxKLENBakJKLENBTkosQ0FISixFQXFDTXZCLEtBQUssQ0FBQ3lELE9BQVAsR0FBZ0I7QUFBSyxhQUFTLEVBQUMsYUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQTZCLE1BQUMscURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUE3QixDQUFoQixHQUE2RDtBQUFRLGFBQVMsRUFBQyxpQkFBbEI7QUFBb0MsV0FBTyxFQUFFZCxjQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBckNsRSxDQUpKLEVBMkNNLENBQUN2QixXQUFGLEdBQWUsSUFBZixHQUNHLE1BQUMsb0RBQUQ7QUFBTyxjQUFVLEVBQUUwQixpQkFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsc0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLENBNUNSLENBREo7QUFtREgsQ0FoSkQ7O0dBQU0vQyxjOztLQUFBQSxjOztBQWtKTixJQUFNMkQsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFBQyxRQUFRLEVBQUU7QUFDOUIsU0FBT0EsUUFBUSxDQUFDQyxjQUFoQjtBQUNILENBRkQ7O0FBSWVDLDBIQUFPLENBQUNILGVBQUQsRUFBaUJJLDBEQUFqQixDQUFQLENBQXdDL0QsY0FBeEMsQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9kdWN0by9bLi4ucHJvZHVjdG9dLjEyOTk3MzI3Y2FjZjk5YmU1NmE3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgU2xpZGVyRm90b3NQcm9kdWN0byBmcm9tICcuL3NsaWRlckZvdG9zJztcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0ICogYXMgY2Fycml0b0FjdGlvbnMgZnJvbSAnLi4vLi4vLi4vc3RvcmUvYWN0aW9ucy9jYXJyaXRvQWN0aW9ucyc7XHJcbmltcG9ydCBMb2FkZXIgZnJvbSAnLi4vTG9hZGVyL2luZGV4JztcclxuaW1wb3J0IE1vZGFsIGZyb20gJy4uL01vZGFsL2luZGV4JztcclxuaW1wb3J0IENhcnJpdG8gZnJvbSAnLi4vQ2Fycml0by9pbmRleCc7XHJcbmltcG9ydCBQcm9kdWN0b1NpbmdsZVN0eWxlIGZyb20gICcuL1Byb2R1Y3RvU2luZ2xlLm1vZHVsZS5jc3MnO1xyXG5pbXBvcnQge1VSTF9DTE9VRF9TVE9SQUdFfSBmcm9tICcuLi8uLi8uLi9jb25maWcvaW5kZXgnO1xyXG5cclxuY29uc3QgUHJvZHVjdG9TaW5nbGUgPSAocHJvcHMpID0+IHtcclxuICAgIGlmKHByb3BzLnN1YlByb2R1Y3Rvcy5sZW5ndGg+MCl7XHJcbiAgICAgICAgY29uc3Qge3Blc28scHJlY2lvVW5pZGFkLGlkU3ViUHJvZHVjdG8sc3ViUHJvZHVjdG8sdGFtYcOxb30gPSBwcm9wcy5zdWJQcm9kdWN0b3NbMF07XHJcbiAgICB9XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHttYXJjYSxwcm9kdWN0b30gPSBwcm9wcy5wcm9kdWN0bztcclxuICAgICAgICBpZihwcm9wcy5zdWJQcm9kdWN0b3MubGVuZ3RoPjApe1xyXG4gICAgICAgICAgICBjb25zdCB7Zm90byxwZXNvLHByZWNpb1VuaWRhZCx0YW1hw7FvLGlkU3ViUHJvZHVjdG8sc3ViUHJvZHVjdG99ID0gcHJvcHMuc3ViUHJvZHVjdG9zWzBdO1xyXG4gICAgICAgICAgICBndWFyZGFyUHJvZHVjdG9FblN0YXRlKGZvdG8scGVzbyxwcmVjaW9VbmlkYWQscHJvZHVjdG8sdGFtYcOxbyxpZFN1YlByb2R1Y3RvLG1hcmNhLHN1YlByb2R1Y3RvKTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgZ3VhcmRhclByb2R1Y3RvRW5TdGF0ZShgJHtVUkxfQ0xPVURfU1RPUkFHRX0vc2luLWltYWdlbi5wbmdgLG51bGwsbnVsbCxwcm9kdWN0byxudWxsLG51bGwsbWFyY2EsbnVsbCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGltYWdlbmVzLnB1c2gocHJvZHVjdG9EYXRhLmZvdG8pO1xyXG4gICAgfSwgW3Byb3BzLnByb2R1Y3RvXSlcclxuXHJcbiAgICBjb25zdCBpbWFnZW5lcyA9IFtdO1xyXG4gICAgLy9hbCB2ZWN0b3IgZGUgaW1hZ2VuZXMsIGxlIHN1bW8gbGFzIGltYWdlbmVzIGRlIGxvcyBwcm9kdWN0b3MgcmVsYWNpb25hZG9zIGFsIG1pc21vIHBhZHJlXHJcbiAgICBwcm9wcy5zdWJQcm9kdWN0b3MubWFwKGRhdGFzcD0+e1xyXG4gICAgICAgIGltYWdlbmVzLnB1c2goZGF0YXNwLmZvdG8pO1xyXG4gICAgfSlcclxuXHJcblxyXG5cclxuICAgIGNvbnN0IFttb2RhbElzT3Blbiwgc2V0TW9kYWxJc09wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW3Byb2R1Y3RvRGF0YSwgc2V0UHJvZHVjdG9EYXRhXSA9IHVzZVN0YXRlKHt9KTtcclxuICAgIFxyXG5cclxuICAgIGNvbnN0IGNoYW5nZUNhbnRpZGFkID0gYWN0aW9uPT57XHJcbiAgICAgICAgbGV0IGlucHV0Q2FudGlkYWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FudGlkYWRfcHJkJyk7XHJcbiAgICAgICAgbGV0IGNhbnRpZGFkID0gcGFyc2VJbnQoaW5wdXRDYW50aWRhZC52YWx1ZSk7XHJcbiAgICAgICAgaWYoYWN0aW9uID09PSAnLScpe1xyXG4gICAgICAgICAgICBpZihjYW50aWRhZCA8PSAxKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIGNhbnRpZGFkLS07XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGNhbnRpZGFkKys7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlucHV0Q2FudGlkYWQudmFsdWUgPSBjYW50aWRhZDtcclxuICAgICAgICByZXR1cm4gc2V0UHJvZHVjdG9EYXRhKHtcclxuICAgICAgICAgICAgLi4ucHJvZHVjdG9EYXRhLFxyXG4gICAgICAgICAgICBjYW50aWRhZFxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY2hhbmdlUGVzbyA9IChpbmRleCxwZXNvLHByZWNpbyx0YW1hw7FvLGlkU3ViUHJvZHVjdG8sc3ViUHJvZHVjdG8pPT57XHJcbiAgICAgICAgbGV0IGNhamFQZXNvID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShQcm9kdWN0b1NpbmdsZVN0eWxlLmNhamFfY2FudGlkYWRLZyk7XHJcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGNhamFQZXNvLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICAoY2FqYVBlc29baW5kZXhdLmNsYXNzTGlzdC5jb250YWlucyhQcm9kdWN0b1NpbmdsZVN0eWxlLmFjdGl2ZSkpP2NhamFQZXNvW2luZGV4XS5jbGFzc0xpc3QucmVtb3ZlKFByb2R1Y3RvU2luZ2xlU3R5bGUuYWN0aXZlKTpudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYWphUGVzb1tpbmRleF0uY2xhc3NMaXN0LmFkZChQcm9kdWN0b1NpbmdsZVN0eWxlLmFjdGl2ZSk7XHJcbiAgICAgICAgaWYoIXBlc28gfHwgIXByZWNpbyB8fCAhdGFtYcOxbyB8fCAhaWRTdWJQcm9kdWN0byB8fCAhc3ViUHJvZHVjdG8pe1xyXG4gICAgICAgICAgICByZXR1cm4gc2V0UHJvZHVjdG9EYXRhKHtcclxuICAgICAgICAgICAgICAgIC4uLnByb2R1Y3RvRGF0YSxcclxuICAgICAgICAgICAgICAgIHBlc286cHJvcHMuc3ViUHJvZHVjdG9zWzBdLnBlc28sXHJcbiAgICAgICAgICAgICAgICBwcmVjaW86cHJvcHMuc3ViUHJvZHVjdG9zWzBdLnByZWNpb1VuaWRhZCxcclxuICAgICAgICAgICAgICAgIGlkU3ViUHJvZHVjdG86cHJvcHMuc3ViUHJvZHVjdG9zWzBdLmlkU3ViUHJvZHVjdG8sXHJcbiAgICAgICAgICAgICAgICBzdWJQcm9kdWN0bzpwcm9wcy5zdWJQcm9kdWN0b3NbMF0uc3ViUHJvZHVjdG9cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBzZXRQcm9kdWN0b0RhdGEoe1xyXG4gICAgICAgICAgICAuLi5wcm9kdWN0b0RhdGEsXHJcbiAgICAgICAgICAgIHBlc28sXHJcbiAgICAgICAgICAgIHByZWNpbyxcclxuICAgICAgICAgICAgdGFtYcOxbyxcclxuICAgICAgICAgICAgaWRTdWJQcm9kdWN0byxcclxuICAgICAgICAgICAgc3ViUHJvZHVjdG9cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBhZ3JlZ2FyQ2Fycml0byA9IGFzeW5jKCk9PntcclxuICAgICAgICBwcm9wcy5hZ3JlZ2FyUHJvZHVjdG8ocHJvZHVjdG9EYXRhKTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgc2V0TW9kYWxJc09wZW4odHJ1ZSk7XHJcbiAgICAgICAgfSwgMTcwMCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY2xvc2VNb2RhbENhcnJpdG8gPSgpPT4oXHJcbiAgICAgICAgc2V0TW9kYWxJc09wZW4oZmFsc2UpXHJcbiAgICApO1xyXG4gICAgXHJcbiAgICBjb25zdCBndWFyZGFyUHJvZHVjdG9FblN0YXRlID0gKGZvdG8scGVzbyxwcmVjaW9VbmlkYWQscHJvZHVjdG8sdGFtYcOxbyxpZFN1YlByb2R1Y3RvLG1hcmNhLHN1YlByb2R1Y3RvKT0+e1xyXG4gICAgICAgIHNldFByb2R1Y3RvRGF0YSh7XHJcbiAgICAgICAgICAgIHByb2R1Y3RvLFxyXG4gICAgICAgICAgICBmb3RvLFxyXG4gICAgICAgICAgICBwZXNvLFxyXG4gICAgICAgICAgICBjYW50aWRhZDoxLFxyXG4gICAgICAgICAgICBwcmVjaW9VbmlkYWQsXHJcbiAgICAgICAgICAgIHRhbWHDsW8sXHJcbiAgICAgICAgICAgIGlkU3ViUHJvZHVjdG8sXHJcbiAgICAgICAgICAgIG1hcmNhLFxyXG4gICAgICAgICAgICBzdWJQcm9kdWN0b1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtc20tNlwiPlxyXG4gICAgICAgICAgICAgICAgPFNsaWRlckZvdG9zUHJvZHVjdG8gaW1hZ2VuZXM9e2ltYWdlbmVzfSBjaGFuZ2VQZXNvPXtjaGFuZ2VQZXNvfSBzdWJQcm9kdWN0b3M9e3Byb3BzLnN1YlByb2R1Y3Rvc30vPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Bjb2wtMTIgY29sLXNtLTYgcHQtNWArJyAnKyBQcm9kdWN0b1NpbmdsZVN0eWxlLmRlc2NyaXBjaW9uUHJvZHVjdG99PlxyXG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT17UHJvZHVjdG9TaW5nbGVTdHlsZS5tYXJjYX0+e3Byb2R1Y3RvRGF0YS5tYXJjYX08L2gzPlxyXG4gICAgICAgICAgICAgICAgPGgxPntwcm9kdWN0b0RhdGEucHJvZHVjdG99PC9oMT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtQcm9kdWN0b1NpbmdsZVN0eWxlLnByZWNpb3MgKyAnICcgKyBgZC1mbGV4IG15LTNgfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17UHJvZHVjdG9TaW5nbGVTdHlsZS5pbmRpY2Fkb3JfX3ByZWNpb30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlByZWNpbzwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtQcm9kdWN0b1NpbmdsZVN0eWxlLnZhbG9yX19wcmVjaW99PiR7cHJvZHVjdG9EYXRhLnByZWNpb1VuaWRhZH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtQcm9kdWN0b1NpbmdsZVN0eWxlLmluZGljYWRvcl9fY2FudGlkYWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e1Byb2R1Y3RvU2luZ2xlU3R5bGUudGl0dWxvX19pbmRpY2Fkb3JDYW50aWRhZCsnICcrYHRleHQtY2VudGVyYH0+U2VsZWNjaW9uw6EgdGFtYcOxbzwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3Byb3BzLnN1YlByb2R1Y3Rvcy5tYXAoKG1wLGtleSk9PihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoa2V5PT0wKT9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2tleX0gY2xhc3NOYW1lPXtQcm9kdWN0b1NpbmdsZVN0eWxlLmNhamFfY2FudGlkYWRLZyArICcgJyArUHJvZHVjdG9TaW5nbGVTdHlsZS5hY3RpdmV9IG9uQ2xpY2s9eygpPT5jaGFuZ2VQZXNvKGtleSxgJHtwZXNvfWAscHJlY2lvVW5pZGFkLGAke3RhbWHDsW99YCxpZFN1YlByb2R1Y3RvLGAke3N1YlByb2R1Y3RvfWApfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17UHJvZHVjdG9TaW5nbGVTdHlsZS5raWxvc30+e21wLnBlc299IEtnczwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17UHJvZHVjdG9TaW5nbGVTdHlsZS5wcmVjaW9EZWxLZ30+JHtwcm9kdWN0b0RhdGEucHJlY2lvVW5pZGFkfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtrZXl9IGNsYXNzTmFtZT17UHJvZHVjdG9TaW5nbGVTdHlsZS5jYWphX2NhbnRpZGFkS2d9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKT0+Y2hhbmdlUGVzbyhrZXksYCR7bXAucGVzb31gLG1wLnByZWNpb1VuaWRhZCxgJHttcC50YW1hw7FvfWAsbXAuaWRTdWJQcm9kdWN0byxgJHttcC5zdWJQcm9kdWN0b31gKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17UHJvZHVjdG9TaW5nbGVTdHlsZS5raWxvc30+e21wLnBlc299IEtnczwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtQcm9kdWN0b1NpbmdsZVN0eWxlLnByZWNpb0RlbEtnfT4ke21wLnByZWNpb1VuaWRhZH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAgbXQtMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC1wcmVwZW5kXCIgb25DbGljaz17KCk9PmNoYW5nZUNhbnRpZGFkKCctJyl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLXRleHRcIj4tPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cImNhbnRpZGFkX3ByZFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCB0ZXh0LWNlbnRlclwiIHZhbHVlPXtwcm9kdWN0b0RhdGEuY2FudGlkYWR9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAtYXBwZW5kXCIgb25DbGljaz17KCk9PmNoYW5nZUNhbnRpZGFkKCcrJyl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLXRleHRcIj4rPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICB7KHByb3BzLmxvYWRpbmcpPzxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj48TG9hZGVyLz48L2Rpdj46PGJ1dHRvbiBjbGFzc05hbWU9XCJib3RvbiBiZy15ZWxsb3dcIiBvbkNsaWNrPXthZ3JlZ2FyQ2Fycml0b30+Q29tcHJhcjwvYnV0dG9uPn1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIHsoIW1vZGFsSXNPcGVuKT9udWxsOlxyXG4gICAgICAgICAgICAgICAgPE1vZGFsIGNsb3NlTW9kYWw9e2Nsb3NlTW9kYWxDYXJyaXRvfT5cclxuICAgICAgICAgICAgICAgICAgICA8Q2Fycml0by8+XHJcbiAgICAgICAgICAgICAgICA8L01vZGFsPlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSByZWR1Y2Vycz0+e1xyXG4gICAgcmV0dXJuIHJlZHVjZXJzLmNhcnJpdG9SZWR1Y2VyO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcyxjYXJyaXRvQWN0aW9ucykoUHJvZHVjdG9TaW5nbGUpOyJdLCJzb3VyY2VSb290IjoiIn0=