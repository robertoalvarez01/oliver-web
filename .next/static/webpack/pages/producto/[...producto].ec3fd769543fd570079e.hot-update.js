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
      guardarProductoEnState("".concat(_config_index__WEBPACK_IMPORTED_MODULE_11__["URL_CLOUD_STORAGE"]), null, null, producto, null, null, marca, null);
    }
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
      lineNumber: 103,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "col-12 col-sm-6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 13
    }
  }, __jsx(_sliderFotos__WEBPACK_IMPORTED_MODULE_4__["default"], {
    imagenes: imagenes,
    changePeso: changePeso,
    subProductos: props.subProductos,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "col-12 col-sm-6 pt-5" + ' ' + _ProductoSingle_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.descripcionProducto,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 13
    }
  }, __jsx("h3", {
    className: _ProductoSingle_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.marca,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 17
    }
  }, productoData.marca), __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 17
    }
  }, productoData.producto), __jsx("div", {
    className: _ProductoSingle_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.precios + ' ' + "d-flex my-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: _ProductoSingle_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.indicador__precio,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 21
    }
  }, __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 25
    }
  }, "Precio"), __jsx("span", {
    className: _ProductoSingle_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.valor__precio,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 25
    }
  }, "$", productoData.precioUnidad)), __jsx("div", {
    className: _ProductoSingle_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.indicador__cantidad,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 21
    }
  }, __jsx("p", {
    className: _ProductoSingle_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.titulo__indicadorCantidad + ' ' + "text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 25
    }
  }, "Seleccion\xE1 tama\xF1o"), __jsx("div", {
    className: "row justify-content-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
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
        lineNumber: 121,
        columnNumber: 37
      }
    }, __jsx("p", {
      className: _ProductoSingle_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.kilos,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 41
      }
    }, mp.peso, " Kgs"), __jsx("span", {
      className: _ProductoSingle_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.precioDelKg,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 123,
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
        lineNumber: 126,
        columnNumber: 33
      }
    }, __jsx("p", {
      className: _ProductoSingle_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.kilos,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 37
      }
    }, mp.peso, " Kgs"), __jsx("span", {
      className: _ProductoSingle_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.precioDelKg,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129,
        columnNumber: 37
      }
    }, "$", mp.precioUnidad));
  })), __jsx("div", {
    className: "input-group mt-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
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
      lineNumber: 134,
      columnNumber: 29
    }
  }, __jsx("span", {
    className: "input-group-text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
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
      lineNumber: 137,
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
      lineNumber: 138,
      columnNumber: 29
    }
  }, __jsx("span", {
    className: "input-group-text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 33
    }
  }, "+"))))), props.loading ? __jsx("div", {
    className: "text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 34
    }
  }, __jsx(_Loader_index__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 63
    }
  })) : __jsx("button", {
    className: "boton bg-yellow",
    onClick: agregarCarrito,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 79
    }
  }, "Comprar")), !modalIsOpen ? null : __jsx(_Modal_index__WEBPACK_IMPORTED_MODULE_8__["default"], {
    closeModal: closeModalCarrito,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 17
    }
  }, __jsx(_Carrito_index__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUHJvZHVjdG9TaW5nbGUvaW5kZXguanMiXSwibmFtZXMiOlsiUHJvZHVjdG9TaW5nbGUiLCJwcm9wcyIsInN1YlByb2R1Y3RvcyIsImxlbmd0aCIsInBlc28iLCJwcmVjaW9VbmlkYWQiLCJpZFN1YlByb2R1Y3RvIiwic3ViUHJvZHVjdG8iLCJ0YW1hw7FvIiwidXNlRWZmZWN0IiwicHJvZHVjdG8iLCJtYXJjYSIsImZvdG8iLCJndWFyZGFyUHJvZHVjdG9FblN0YXRlIiwiVVJMX0NMT1VEX1NUT1JBR0UiLCJpbWFnZW5lcyIsIm1hcCIsImRhdGFzcCIsInB1c2giLCJ1c2VTdGF0ZSIsIm1vZGFsSXNPcGVuIiwic2V0TW9kYWxJc09wZW4iLCJwcm9kdWN0b0RhdGEiLCJzZXRQcm9kdWN0b0RhdGEiLCJjaGFuZ2VDYW50aWRhZCIsImFjdGlvbiIsImlucHV0Q2FudGlkYWQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY2FudGlkYWQiLCJwYXJzZUludCIsInZhbHVlIiwiY2hhbmdlUGVzbyIsImluZGV4IiwicHJlY2lvIiwiY2FqYVBlc28iLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiUHJvZHVjdG9TaW5nbGVTdHlsZSIsImNhamFfY2FudGlkYWRLZyIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwiYWN0aXZlIiwicmVtb3ZlIiwiYWRkIiwiYWdyZWdhckNhcnJpdG8iLCJhZ3JlZ2FyUHJvZHVjdG8iLCJzZXRUaW1lb3V0IiwiY2xvc2VNb2RhbENhcnJpdG8iLCJkZXNjcmlwY2lvblByb2R1Y3RvIiwicHJlY2lvcyIsImluZGljYWRvcl9fcHJlY2lvIiwidmFsb3JfX3ByZWNpbyIsImluZGljYWRvcl9fY2FudGlkYWQiLCJ0aXR1bG9fX2luZGljYWRvckNhbnRpZGFkIiwibXAiLCJrZXkiLCJraWxvcyIsInByZWNpb0RlbEtnIiwibG9hZGluZyIsIm1hcFN0YXRlVG9Qcm9wcyIsInJlZHVj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QUFJTCxjQUFjLENBQUMsR0FBRCxDQUFsQjtBQUFBLEtBQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFNLGFBQVMsRUFBQyxrQkFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQURKLENBTEosQ0FqQkosQ0FOSixDQUhKLEVBcUNNdkIsS0FBSyxDQUFDeUQsT0FBUCxHQUFnQjtBQUFLLGFBQVMsRUFBQyxhQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBNkIsTUFBQyxxREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBQTdCLENBQWhCLEdBQTZEO0FBQVEsYUFBUyxFQUFDLGlCQUFsQjtBQUFvQyxXQUFPLEVBQUVkLGNBQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFyQ2xFLENBSkosRUEyQ00sQ0FBQ3hCLFdBQUYsR0FBZSxJQUFmLEdBQ0csTUFBQyxvREFBRDtBQUFPLGNBQVUsRUFBRTJCLGlCQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxzREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosQ0E1Q1IsQ0FESjtBQW1ESCxDQTlJRDs7R0FBTS9DLGM7O0tBQUFBLGM7O0FBZ0pOLElBQU0yRCxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUFDLFFBQVEsRUFBRTtBQUM5QixTQUFPQSxRQUFRLENBQUNDLGNBQWhCO0FBQ0gsQ0FGRDs7QUFJZUMsMEhBQU8sQ0FBQ0gsZUFBRCxFQUFpQkksMERBQWpCLENBQVAsQ0FBd0MvRCxjQUF4QyxDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2R1Y3RvL1suLi5wcm9kdWN0b10uZWMzZmQ3Njk1NDNmZDU3MDA3OWUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSx1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBTbGlkZXJGb3Rvc1Byb2R1Y3RvIGZyb20gJy4vc2xpZGVyRm90b3MnO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgKiBhcyBjYXJyaXRvQWN0aW9ucyBmcm9tICcuLi8uLi8uLi9zdG9yZS9hY3Rpb25zL2NhcnJpdG9BY3Rpb25zJztcclxuaW1wb3J0IExvYWRlciBmcm9tICcuLi9Mb2FkZXIvaW5kZXgnO1xyXG5pbXBvcnQgTW9kYWwgZnJvbSAnLi4vTW9kYWwvaW5kZXgnO1xyXG5pbXBvcnQgQ2Fycml0byBmcm9tICcuLi9DYXJyaXRvL2luZGV4JztcclxuaW1wb3J0IFByb2R1Y3RvU2luZ2xlU3R5bGUgZnJvbSAgJy4vUHJvZHVjdG9TaW5nbGUubW9kdWxlLmNzcyc7XHJcbmltcG9ydCB7VVJMX0NMT1VEX1NUT1JBR0V9IGZyb20gJy4uLy4uLy4uL2NvbmZpZy9pbmRleCc7XHJcblxyXG5jb25zdCBQcm9kdWN0b1NpbmdsZSA9IChwcm9wcykgPT4ge1xyXG4gICAgaWYocHJvcHMuc3ViUHJvZHVjdG9zLmxlbmd0aD4wKXtcclxuICAgICAgICBjb25zdCB7cGVzbyxwcmVjaW9VbmlkYWQsaWRTdWJQcm9kdWN0byxzdWJQcm9kdWN0byx0YW1hw7FvfSA9IHByb3BzLnN1YlByb2R1Y3Rvc1swXTtcclxuICAgIH1cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3Qge21hcmNhLHByb2R1Y3RvfSA9IHByb3BzLnByb2R1Y3RvO1xyXG4gICAgICAgIGlmKHByb3BzLnN1YlByb2R1Y3Rvcy5sZW5ndGg+MCl7XHJcbiAgICAgICAgICAgIGNvbnN0IHtmb3RvLHBlc28scHJlY2lvVW5pZGFkLHRhbWHDsW8saWRTdWJQcm9kdWN0byxzdWJQcm9kdWN0b30gPSBwcm9wcy5zdWJQcm9kdWN0b3NbMF07XHJcbiAgICAgICAgICAgIGd1YXJkYXJQcm9kdWN0b0VuU3RhdGUoZm90byxwZXNvLHByZWNpb1VuaWRhZCxwcm9kdWN0byx0YW1hw7FvLGlkU3ViUHJvZHVjdG8sbWFyY2Esc3ViUHJvZHVjdG8pO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBndWFyZGFyUHJvZHVjdG9FblN0YXRlKGAke1VSTF9DTE9VRF9TVE9SQUdFfWAsbnVsbCxudWxsLHByb2R1Y3RvLG51bGwsbnVsbCxtYXJjYSxudWxsKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbcHJvcHMucHJvZHVjdG9dKVxyXG5cclxuICAgIGNvbnN0IGltYWdlbmVzID0gW107XHJcbiAgICAvL2FsIHZlY3RvciBkZSBpbWFnZW5lcywgbGUgc3VtbyBsYXMgaW1hZ2VuZXMgZGUgbG9zIHByb2R1Y3RvcyByZWxhY2lvbmFkb3MgYWwgbWlzbW8gcGFkcmVcclxuICAgIHByb3BzLnN1YlByb2R1Y3Rvcy5tYXAoZGF0YXNwPT57XHJcbiAgICAgICAgaW1hZ2VuZXMucHVzaChkYXRhc3AuZm90byk7XHJcbiAgICB9KVxyXG5cclxuXHJcbiAgICBjb25zdCBbbW9kYWxJc09wZW4sIHNldE1vZGFsSXNPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtwcm9kdWN0b0RhdGEsIHNldFByb2R1Y3RvRGF0YV0gPSB1c2VTdGF0ZSh7fSk7XHJcbiAgICBcclxuXHJcbiAgICBjb25zdCBjaGFuZ2VDYW50aWRhZCA9IGFjdGlvbj0+e1xyXG4gICAgICAgIGxldCBpbnB1dENhbnRpZGFkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbnRpZGFkX3ByZCcpO1xyXG4gICAgICAgIGxldCBjYW50aWRhZCA9IHBhcnNlSW50KGlucHV0Q2FudGlkYWQudmFsdWUpO1xyXG4gICAgICAgIGlmKGFjdGlvbiA9PT0gJy0nKXtcclxuICAgICAgICAgICAgaWYoY2FudGlkYWQgPD0gMSkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICBjYW50aWRhZC0tO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBjYW50aWRhZCsrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpbnB1dENhbnRpZGFkLnZhbHVlID0gY2FudGlkYWQ7XHJcbiAgICAgICAgcmV0dXJuIHNldFByb2R1Y3RvRGF0YSh7XHJcbiAgICAgICAgICAgIC4uLnByb2R1Y3RvRGF0YSxcclxuICAgICAgICAgICAgY2FudGlkYWRcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNoYW5nZVBlc28gPSAoaW5kZXgscGVzbyxwcmVjaW8sdGFtYcOxbyxpZFN1YlByb2R1Y3RvLHN1YlByb2R1Y3RvKT0+e1xyXG4gICAgICAgIGxldCBjYWphUGVzbyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoUHJvZHVjdG9TaW5nbGVTdHlsZS5jYWphX2NhbnRpZGFkS2cpO1xyXG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBjYWphUGVzby5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgKGNhamFQZXNvW2luZGV4XS5jbGFzc0xpc3QuY29udGFpbnMoUHJvZHVjdG9TaW5nbGVTdHlsZS5hY3RpdmUpKT9jYWphUGVzb1tpbmRleF0uY2xhc3NMaXN0LnJlbW92ZShQcm9kdWN0b1NpbmdsZVN0eWxlLmFjdGl2ZSk6bnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2FqYVBlc29baW5kZXhdLmNsYXNzTGlzdC5hZGQoUHJvZHVjdG9TaW5nbGVTdHlsZS5hY3RpdmUpO1xyXG4gICAgICAgIGlmKCFwZXNvIHx8ICFwcmVjaW8gfHwgIXRhbWHDsW8gfHwgIWlkU3ViUHJvZHVjdG8gfHwgIXN1YlByb2R1Y3RvKXtcclxuICAgICAgICAgICAgcmV0dXJuIHNldFByb2R1Y3RvRGF0YSh7XHJcbiAgICAgICAgICAgICAgICAuLi5wcm9kdWN0b0RhdGEsXHJcbiAgICAgICAgICAgICAgICBwZXNvOnByb3BzLnN1YlByb2R1Y3Rvc1swXS5wZXNvLFxyXG4gICAgICAgICAgICAgICAgcHJlY2lvOnByb3BzLnN1YlByb2R1Y3Rvc1swXS5wcmVjaW9VbmlkYWQsXHJcbiAgICAgICAgICAgICAgICBpZFN1YlByb2R1Y3RvOnByb3BzLnN1YlByb2R1Y3Rvc1swXS5pZFN1YlByb2R1Y3RvLFxyXG4gICAgICAgICAgICAgICAgc3ViUHJvZHVjdG86cHJvcHMuc3ViUHJvZHVjdG9zWzBdLnN1YlByb2R1Y3RvXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgc2V0UHJvZHVjdG9EYXRhKHtcclxuICAgICAgICAgICAgLi4ucHJvZHVjdG9EYXRhLFxyXG4gICAgICAgICAgICBwZXNvLFxyXG4gICAgICAgICAgICBwcmVjaW8sXHJcbiAgICAgICAgICAgIHRhbWHDsW8sXHJcbiAgICAgICAgICAgIGlkU3ViUHJvZHVjdG8sXHJcbiAgICAgICAgICAgIHN1YlByb2R1Y3RvXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgYWdyZWdhckNhcnJpdG8gPSBhc3luYygpPT57XHJcbiAgICAgICAgcHJvcHMuYWdyZWdhclByb2R1Y3RvKHByb2R1Y3RvRGF0YSk7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHNldE1vZGFsSXNPcGVuKHRydWUpO1xyXG4gICAgICAgIH0sIDE3MDApO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNsb3NlTW9kYWxDYXJyaXRvID0oKT0+KFxyXG4gICAgICAgIHNldE1vZGFsSXNPcGVuKGZhbHNlKVxyXG4gICAgKTtcclxuICAgIFxyXG4gICAgY29uc3QgZ3VhcmRhclByb2R1Y3RvRW5TdGF0ZSA9IChmb3RvLHBlc28scHJlY2lvVW5pZGFkLHByb2R1Y3RvLHRhbWHDsW8saWRTdWJQcm9kdWN0byxtYXJjYSxzdWJQcm9kdWN0byk9PntcclxuICAgICAgICBzZXRQcm9kdWN0b0RhdGEoe1xyXG4gICAgICAgICAgICBwcm9kdWN0byxcclxuICAgICAgICAgICAgZm90byxcclxuICAgICAgICAgICAgcGVzbyxcclxuICAgICAgICAgICAgY2FudGlkYWQ6MSxcclxuICAgICAgICAgICAgcHJlY2lvVW5pZGFkLFxyXG4gICAgICAgICAgICB0YW1hw7FvLFxyXG4gICAgICAgICAgICBpZFN1YlByb2R1Y3RvLFxyXG4gICAgICAgICAgICBtYXJjYSxcclxuICAgICAgICAgICAgc3ViUHJvZHVjdG9cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLXNtLTZcIj5cclxuICAgICAgICAgICAgICAgIDxTbGlkZXJGb3Rvc1Byb2R1Y3RvIGltYWdlbmVzPXtpbWFnZW5lc30gY2hhbmdlUGVzbz17Y2hhbmdlUGVzb30gc3ViUHJvZHVjdG9zPXtwcm9wcy5zdWJQcm9kdWN0b3N9Lz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgY29sLTEyIGNvbC1zbS02IHB0LTVgKycgJysgUHJvZHVjdG9TaW5nbGVTdHlsZS5kZXNjcmlwY2lvblByb2R1Y3RvfT5cclxuICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9e1Byb2R1Y3RvU2luZ2xlU3R5bGUubWFyY2F9Pntwcm9kdWN0b0RhdGEubWFyY2F9PC9oMz5cclxuICAgICAgICAgICAgICAgIDxoMT57cHJvZHVjdG9EYXRhLnByb2R1Y3RvfTwvaDE+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17UHJvZHVjdG9TaW5nbGVTdHlsZS5wcmVjaW9zICsgJyAnICsgYGQtZmxleCBteS0zYH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1Byb2R1Y3RvU2luZ2xlU3R5bGUuaW5kaWNhZG9yX19wcmVjaW99PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5QcmVjaW88L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17UHJvZHVjdG9TaW5nbGVTdHlsZS52YWxvcl9fcHJlY2lvfT4ke3Byb2R1Y3RvRGF0YS5wcmVjaW9VbmlkYWR9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17UHJvZHVjdG9TaW5nbGVTdHlsZS5pbmRpY2Fkb3JfX2NhbnRpZGFkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtQcm9kdWN0b1NpbmdsZVN0eWxlLnRpdHVsb19faW5kaWNhZG9yQ2FudGlkYWQrJyAnK2B0ZXh0LWNlbnRlcmB9PlNlbGVjY2lvbsOhIHRhbWHDsW88L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9wcy5zdWJQcm9kdWN0b3MubWFwKChtcCxrZXkpPT4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGtleT09MCk/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtrZXl9IGNsYXNzTmFtZT17UHJvZHVjdG9TaW5nbGVTdHlsZS5jYWphX2NhbnRpZGFkS2cgKyAnICcgK1Byb2R1Y3RvU2luZ2xlU3R5bGUuYWN0aXZlfSBvbkNsaWNrPXsoKT0+Y2hhbmdlUGVzbyhrZXksYCR7cGVzb31gLHByZWNpb1VuaWRhZCxgJHt0YW1hw7FvfWAsaWRTdWJQcm9kdWN0byxgJHtzdWJQcm9kdWN0b31gKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e1Byb2R1Y3RvU2luZ2xlU3R5bGUua2lsb3N9PnttcC5wZXNvfSBLZ3M8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e1Byb2R1Y3RvU2luZ2xlU3R5bGUucHJlY2lvRGVsS2d9PiR7cHJvZHVjdG9EYXRhLnByZWNpb1VuaWRhZH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17a2V5fSBjbGFzc05hbWU9e1Byb2R1Y3RvU2luZ2xlU3R5bGUuY2FqYV9jYW50aWRhZEtnfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCk9PmNoYW5nZVBlc28oa2V5LGAke21wLnBlc299YCxtcC5wcmVjaW9VbmlkYWQsYCR7bXAudGFtYcOxb31gLG1wLmlkU3ViUHJvZHVjdG8sYCR7bXAuc3ViUHJvZHVjdG99YCl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e1Byb2R1Y3RvU2luZ2xlU3R5bGUua2lsb3N9PnttcC5wZXNvfSBLZ3M8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17UHJvZHVjdG9TaW5nbGVTdHlsZS5wcmVjaW9EZWxLZ30+JHttcC5wcmVjaW9VbmlkYWR9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwIG10LTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAtcHJlcGVuZFwiIG9uQ2xpY2s9eygpPT5jaGFuZ2VDYW50aWRhZCgnLScpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC10ZXh0XCI+LTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJjYW50aWRhZF9wcmRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgdGV4dC1jZW50ZXJcIiB2YWx1ZT17cHJvZHVjdG9EYXRhLmNhbnRpZGFkfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLWFwcGVuZFwiIG9uQ2xpY2s9eygpPT5jaGFuZ2VDYW50aWRhZCgnKycpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC10ZXh0XCI+Kzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgeyhwcm9wcy5sb2FkaW5nKT88ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+PExvYWRlci8+PC9kaXY+OjxidXR0b24gY2xhc3NOYW1lPVwiYm90b24gYmcteWVsbG93XCIgb25DbGljaz17YWdyZWdhckNhcnJpdG99PkNvbXByYXI8L2J1dHRvbj59XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB7KCFtb2RhbElzT3Blbik/bnVsbDpcclxuICAgICAgICAgICAgICAgIDxNb2RhbCBjbG9zZU1vZGFsPXtjbG9zZU1vZGFsQ2Fycml0b30+XHJcbiAgICAgICAgICAgICAgICAgICAgPENhcnJpdG8vPlxyXG4gICAgICAgICAgICAgICAgPC9Nb2RhbD5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gcmVkdWNlcnM9PntcclxuICAgIHJldHVybiByZWR1Y2Vycy5jYXJyaXRvUmVkdWNlcjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsY2Fycml0b0FjdGlvbnMpKFByb2R1Y3RvU2luZ2xlKTsiXSwic291cmNlUm9vdCI6IiJ9