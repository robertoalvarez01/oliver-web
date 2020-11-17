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
  }, [props.producto]);
  var imagenes = []; //al vector de imagenes, le sumo las imagenes de los productos relacionados al mismo padre

  if (props.subProductos.length == 0 && props.subProductos.foto) {
    imagenes.push(productoData.foto);
  } else {
    props.subProductos.map(function (datasp) {
      imagenes.push(datasp.foto);
    });
  }

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
      lineNumber: 107,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "col-12 col-sm-6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 13
    }
  }, __jsx(_sliderFotos__WEBPACK_IMPORTED_MODULE_4__["default"], {
    imagenes: imagenes,
    changePeso: changePeso,
    subProductos: props.subProductos,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "col-12 col-sm-6 pt-5" + ' ' + _ProductoSingle_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.descripcionProducto,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 13
    }
  }, __jsx("h3", {
    className: _ProductoSingle_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.marca,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 17
    }
  }, productoData.marca), __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 17
    }
  }, productoData.producto), __jsx("div", {
    className: _ProductoSingle_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.precios + ' ' + "d-flex my-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: _ProductoSingle_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.indicador__precio,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 21
    }
  }, __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 25
    }
  }, "Precio"), __jsx("span", {
    className: _ProductoSingle_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.valor__precio,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 25
    }
  }, "$", productoData.precioUnidad)), __jsx("div", {
    className: _ProductoSingle_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.indicador__cantidad,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 21
    }
  }, __jsx("p", {
    className: _ProductoSingle_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.titulo__indicadorCantidad + ' ' + "text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 25
    }
  }, "Seleccion\xE1 tama\xF1o"), __jsx("div", {
    className: "row justify-content-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
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
        lineNumber: 125,
        columnNumber: 37
      }
    }, __jsx("p", {
      className: _ProductoSingle_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.kilos,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 126,
        columnNumber: 41
      }
    }, mp.peso, " Kgs"), __jsx("span", {
      className: _ProductoSingle_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.precioDelKg,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127,
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
        lineNumber: 130,
        columnNumber: 33
      }
    }, __jsx("p", {
      className: _ProductoSingle_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.kilos,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132,
        columnNumber: 37
      }
    }, mp.peso, " Kgs"), __jsx("span", {
      className: _ProductoSingle_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.precioDelKg,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133,
        columnNumber: 37
      }
    }, "$", mp.precioUnidad));
  })), __jsx("div", {
    className: "input-group mt-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
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
  }, "-")), __jsx("input", {
    type: "text",
    id: "cantidad_prd",
    className: "form-control text-center",
    value: productoData.cantidad,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
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
      lineNumber: 142,
      columnNumber: 29
    }
  }, __jsx("span", {
    className: "input-group-text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 33
    }
  }, "+"))))), props.loading ? __jsx("div", {
    className: "text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 34
    }
  }, __jsx(_Loader_index__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 63
    }
  })) : __jsx("button", {
    className: "boton bg-yellow",
    onClick: agregarCarrito,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 79
    }
  }, "Comprar")), !modalIsOpen ? null : __jsx(_Modal_index__WEBPACK_IMPORTED_MODULE_8__["default"], {
    closeModal: closeModalCarrito,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 17
    }
  }, __jsx(_Carrito_index__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUHJvZHVjdG9TaW5nbGUvaW5kZXguanMiXSwibmFtZXMiOlsiUHJvZHVjdG9TaW5nbGUiLCJwcm9wcyIsInN1YlByb2R1Y3RvcyIsImxlbmd0aCIsInBlc28iLCJwcmVjaW9VbmlkYWQiLCJpZFN1YlByb2R1Y3RvIiwic3ViUHJvZHVjdG8iLCJ0YW1hw7FvIiwidXNlRWZmZWN0IiwicHJvZHVjdG8iLCJtYXJjYSIsImZvdG8iLCJndWFyZGFyUHJvZHVjdG9FblN0YXRlIiwiVVJMX0NMT1VEX1NUT1JBR0UiLCJpbWFnZW5lcyIsInB1c2giLCJwcm9kdWN0b0RhdGEiLCJtYXAiLCJkYXRhc3AiLCJ1c2VTdGF0ZSIsIm1vZGFsSXNPcGVuIiwic2V0TW9kYWxJc09wZW4iLCJzZXRQcm9kdWN0b0RhdGEiLCJjaGFuZ2VDYW50aWRhZCIsImFjdGlvbiIsImlucHV0Q2FudGlkYWQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY2FudGlkYWQiLCJwYXJzZUludCIsInZhbHVlIiwiY2hhbmdlUGVzbyIsImluZGV4IiwicHJlY2lvIiwiY2FqYVBlc28iLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiUHJvZHVjdG9TaW5nbGVTdHlsZSIsImNhamFfY2FudGlkYWRLZyIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwiYWN0aXZlIiwicmVtb3ZlIiwiYWRkIiwiYWdyZWdhckNhcnJpdG8iLCJhZ3JlZ2FyUHJvZHVjdG8iLCJzZXRUaW1lb3V0IiwiY2xvc2VNb2RhbENhcnJpdG8iLCJkZXNjcmlwY2lvblByb2R1Y3RvIiwicHJlY2lvcyIsImluZGljYWRvcl9fcHJlY2lvIiwidmFsb3JfX3ByZWNpbyIsImluZGljYWRvcl9fY2FudGlkYWQiLCJ0aXR1bG9fX2luZGljYWRvckNhbnRpZGFkIiwibXAiLCJrZXkiLCJraWxvcyIsInByZWNpb0RlbEtnIiwibG9hZGluZyIsIm1hcFN0YXRlVG9Qcm9wcyIsInJlZHVjZXJzIiwiY2Fycml0b1JlZHVjZXIiLCJjb25uZWN0IiwiY2Fycml0b0FjdGlvbnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFDOUIsTUFBR0EsS0FBSyxDQUFDQyxZQUFOLENBQW1CQyxNQUFuQixHQUEwQixDQUE3QixFQUErQjtBQUFBLCtCQUNrQ0YsS0FBSyxDQUFDQyxZQUFOLENBQW1CLENBQW5CLENBRGxDO0FBQUEsUUFDcEJFLEtBRG9CLHdCQUNwQkEsSUFEb0I7QUFBQSxRQUNmQyxhQURlLHdCQUNmQSxZQURlO0FBQUEsUUFDRkMsY0FERSx3QkFDRkEsYUFERTtBQUFBLFFBQ1lDLFlBRFosd0JBQ1lBLFdBRFo7QUFBQSxRQUN3QkMsTUFEeEIsd0JBQ3dCQSxNQUR4QjtBQUU5Qjs7QUFDREMseURBQVMsQ0FBQyxZQUFNO0FBQUEsMEJBQ2FSLEtBQUssQ0FBQ1MsUUFEbkI7QUFBQSxRQUNMQyxLQURLLG1CQUNMQSxLQURLO0FBQUEsUUFDQ0QsUUFERCxtQkFDQ0EsUUFERDs7QUFFWixRQUFHVCxLQUFLLENBQUNDLFlBQU4sQ0FBbUJDLE1BQW5CLEdBQTBCLENBQTdCLEVBQStCO0FBQUEsa0NBQ3VDRixLQUFLLENBQUNDLFlBQU4sQ0FBbUIsQ0FBbkIsQ0FEdkM7QUFBQSxVQUNwQlUsSUFEb0IseUJBQ3BCQSxJQURvQjtBQUFBLFVBQ2ZSLE1BRGUseUJBQ2ZBLElBRGU7QUFBQSxVQUNWQyxjQURVLHlCQUNWQSxZQURVO0FBQUEsVUFDR0csT0FESCx5QkFDR0EsTUFESDtBQUFBLFVBQ1VGLGVBRFYseUJBQ1VBLGFBRFY7QUFBQSxVQUN3QkMsYUFEeEIseUJBQ3dCQSxXQUR4QjtBQUUzQk0sNEJBQXNCLENBQUNELElBQUQsRUFBTVIsTUFBTixFQUFXQyxjQUFYLEVBQXdCSyxRQUF4QixFQUFpQ0YsT0FBakMsRUFBd0NGLGVBQXhDLEVBQXNESyxLQUF0RCxFQUE0REosYUFBNUQsQ0FBdEI7QUFDSCxLQUhELE1BR0s7QUFDRE0sNEJBQXNCLFdBQUlDLGdFQUFKLHNCQUF1QyxJQUF2QyxFQUE0QyxJQUE1QyxFQUFpREosUUFBakQsRUFBMEQsSUFBMUQsRUFBK0QsSUFBL0QsRUFBb0VDLEtBQXBFLEVBQTBFLElBQTFFLENBQXRCO0FBQ0g7QUFDSixHQVJRLEVBUU4sQ0FBQ1YsS0FBSyxDQUFDUyxRQUFQLENBUk0sQ0FBVDtBQVVBLE1BQU1LLFFBQVEsR0FBRyxFQUFqQixDQWQ4QixDQWU5Qjs7QUFDQSxNQUFHZCxLQUFLLENBQUNDLFlBQU4sQ0FBbUJDLE1BQW5CLElBQTJCLENBQTNCLElBQWdDRixLQUFLLENBQUNDLFlBQU4sQ0FBbUJVLElBQXRELEVBQTJEO0FBQ3ZERyxZQUFRLENBQUNDLElBQVQsQ0FBY0MsWUFBWSxDQUFDTCxJQUEzQjtBQUNILEdBRkQsTUFFSztBQUNEWCxTQUFLLENBQUNDLFlBQU4sQ0FBbUJnQixHQUFuQixDQUF1QixVQUFBQyxNQUFNLEVBQUU7QUFDM0JKLGNBQVEsQ0FBQ0MsSUFBVCxDQUFjRyxNQUFNLENBQUNQLElBQXJCO0FBQ0gsS0FGRDtBQUdIOztBQXRCNkIsa0JBeUJRUSxzREFBUSxDQUFDLEtBQUQsQ0F6QmhCO0FBQUEsTUF5QnZCQyxXQXpCdUI7QUFBQSxNQXlCVkMsY0F6QlU7O0FBQUEsbUJBMEJVRixzREFBUSxDQUFDLEVBQUQsQ0ExQmxCO0FBQUEsTUEwQnZCSCxZQTFCdUI7QUFBQSxNQTBCVE0sZUExQlM7O0FBNkI5QixNQUFNQyxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLENBQUFDLE1BQU0sRUFBRTtBQUMzQixRQUFJQyxhQUFhLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixjQUF4QixDQUFwQjtBQUNBLFFBQUlDLFFBQVEsR0FBR0MsUUFBUSxDQUFDSixhQUFhLENBQUNLLEtBQWYsQ0FBdkI7O0FBQ0EsUUFBR04sTUFBTSxLQUFLLEdBQWQsRUFBa0I7QUFDZCxVQUFHSSxRQUFRLElBQUksQ0FBZixFQUFrQixPQUFPLEtBQVA7QUFDbEJBLGNBQVE7QUFDWCxLQUhELE1BR0s7QUFDREEsY0FBUTtBQUNYOztBQUNESCxpQkFBYSxDQUFDSyxLQUFkLEdBQXNCRixRQUF0QjtBQUNBLFdBQU9OLGVBQWUsaUNBQ2ZOLFlBRGU7QUFFbEJZLGNBQVEsRUFBUkE7QUFGa0IsT0FBdEI7QUFJSCxHQWREOztBQWdCQSxNQUFNRyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDQyxLQUFELEVBQU83QixJQUFQLEVBQVk4QixNQUFaLEVBQW1CMUIsTUFBbkIsRUFBMEJGLGFBQTFCLEVBQXdDQyxXQUF4QyxFQUFzRDtBQUNyRSxRQUFJNEIsUUFBUSxHQUFHUixRQUFRLENBQUNTLHNCQUFULENBQWdDQyxrRUFBbUIsQ0FBQ0MsZUFBcEQsQ0FBZjs7QUFDQSxTQUFLLElBQUlMLE1BQUssR0FBRyxDQUFqQixFQUFvQkEsTUFBSyxHQUFHRSxRQUFRLENBQUNoQyxNQUFyQyxFQUE2QzhCLE1BQUssRUFBbEQsRUFBc0Q7QUFDakRFLGNBQVEsQ0FBQ0YsTUFBRCxDQUFSLENBQWdCTSxTQUFoQixDQUEwQkMsUUFBMUIsQ0FBbUNILGtFQUFtQixDQUFDSSxNQUF2RCxDQUFELEdBQWlFTixRQUFRLENBQUNGLE1BQUQsQ0FBUixDQUFnQk0sU0FBaEIsQ0FBMEJHLE1BQTFCLENBQWlDTCxrRUFBbUIsQ0FBQ0ksTUFBckQsQ0FBakUsR0FBOEgsSUFBOUg7QUFDSDs7QUFDRE4sWUFBUSxDQUFDRixLQUFELENBQVIsQ0FBZ0JNLFNBQWhCLENBQTBCSSxHQUExQixDQUE4Qk4sa0VBQW1CLENBQUNJLE1BQWxEOztBQUNBLFFBQUcsQ0FBQ3JDLElBQUQsSUFBUyxDQUFDOEIsTUFBVixJQUFvQixDQUFDMUIsTUFBckIsSUFBK0IsQ0FBQ0YsYUFBaEMsSUFBaUQsQ0FBQ0MsV0FBckQsRUFBaUU7QUFDN0QsYUFBT2dCLGVBQWUsaUNBQ2ZOLFlBRGU7QUFFbEJiLFlBQUksRUFBQ0gsS0FBSyxDQUFDQyxZQUFOLENBQW1CLENBQW5CLEVBQXNCRSxJQUZUO0FBR2xCOEIsY0FBTSxFQUFDakMsS0FBSyxDQUFDQyxZQUFOLENBQW1CLENBQW5CLEVBQXNCRyxZQUhYO0FBSWxCQyxxQkFBYSxFQUFDTCxLQUFLLENBQUNDLFlBQU4sQ0FBbUIsQ0FBbkIsRUFBc0JJLGFBSmxCO0FBS2xCQyxtQkFBVyxFQUFDTixLQUFLLENBQUNDLFlBQU4sQ0FBbUIsQ0FBbkIsRUFBc0JLO0FBTGhCLFNBQXRCO0FBT0g7O0FBQUE7QUFDRGdCLG1CQUFlLGlDQUNSTixZQURRO0FBRVhiLFVBQUksRUFBSkEsSUFGVztBQUdYOEIsWUFBTSxFQUFOQSxNQUhXO0FBSVgxQixZQUFNLEVBQU5BLE1BSlc7QUFLWEYsbUJBQWEsRUFBYkEsYUFMVztBQU1YQyxpQkFBVyxFQUFYQTtBQU5XLE9BQWY7QUFRSCxHQXZCRDs7QUF5QkEsTUFBTXFDLGNBQWM7QUFBQSxnTUFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ25CM0MsbUJBQUssQ0FBQzRDLGVBQU4sQ0FBc0I1QixZQUF0QjtBQUNBNkIsd0JBQVUsQ0FBQyxZQUFNO0FBQ2J4Qiw4QkFBYyxDQUFDLElBQUQsQ0FBZDtBQUNILGVBRlMsRUFFUCxJQUZPLENBQVY7O0FBRm1CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQWRzQixjQUFjO0FBQUE7QUFBQTtBQUFBLEtBQXBCOztBQU9BLE1BQU1HLGlCQUFpQixHQUFFLFNBQW5CQSxpQkFBbUI7QUFBQSxXQUNyQnpCLGNBQWMsQ0FBQyxLQUFELENBRE87QUFBQSxHQUF6Qjs7QUFJQSxNQUFNVCxzQkFBc0IsR0FBRyxTQUF6QkEsc0JBQXlCLENBQUNELElBQUQsRUFBTVIsSUFBTixFQUFXQyxZQUFYLEVBQXdCSyxRQUF4QixFQUFpQ0YsTUFBakMsRUFBd0NGLGFBQXhDLEVBQXNESyxLQUF0RCxFQUE0REosV0FBNUQsRUFBMEU7QUFDckdnQixtQkFBZSxDQUFDO0FBQ1piLGNBQVEsRUFBUkEsUUFEWTtBQUVaRSxVQUFJLEVBQUpBLElBRlk7QUFHWlIsVUFBSSxFQUFKQSxJQUhZO0FBSVp5QixjQUFRLEVBQUMsQ0FKRztBQUtaeEIsa0JBQVksRUFBWkEsWUFMWTtBQU1aRyxZQUFNLEVBQU5BLE1BTlk7QUFPWkYsbUJBQWEsRUFBYkEsYUFQWTtBQVFaSyxXQUFLLEVBQUxBLEtBUlk7QUFTWkosaUJBQVcsRUFBWEE7QUFUWSxLQUFELENBQWY7QUFXSCxHQVpEOztBQWNBLFNBQ0k7QUFBSyxhQUFTLEVBQUMsS0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxhQUFTLEVBQUMsaUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsb0RBQUQ7QUFBcUIsWUFBUSxFQUFFUSxRQUEvQjtBQUF5QyxjQUFVLEVBQUVpQixVQUFyRDtBQUFpRSxnQkFBWSxFQUFFL0IsS0FBSyxDQUFDQyxZQUFyRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosQ0FESixFQUlJO0FBQUssYUFBUyxFQUFFLHlCQUF1QixHQUF2QixHQUE0Qm1DLGtFQUFtQixDQUFDVyxtQkFBaEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUksYUFBUyxFQUFFWCxrRUFBbUIsQ0FBQzFCLEtBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBMkNNLFlBQVksQ0FBQ04sS0FBeEQsQ0FESixFQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBS00sWUFBWSxDQUFDUCxRQUFsQixDQUZKLEVBR0k7QUFBSyxhQUFTLEVBQUUyQixrRUFBbUIsQ0FBQ1ksT0FBcEIsR0FBOEIsR0FBOUIsZ0JBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLGFBQVMsRUFBRVosa0VBQW1CLENBQUNhLGlCQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLEVBRUk7QUFBTSxhQUFTLEVBQUViLGtFQUFtQixDQUFDYyxhQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQXNEbEMsWUFBWSxDQUFDWixZQUFuRSxDQUZKLENBREosRUFNSTtBQUFLLGFBQVMsRUFBRWdDLGtFQUFtQixDQUFDZSxtQkFBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUcsYUFBUyxFQUFFZixrRUFBbUIsQ0FBQ2dCLHlCQUFwQixHQUE4QyxHQUE5QyxnQkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLCtCQURKLEVBRUk7QUFBSyxhQUFTLEVBQUMsNEJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNLcEQsS0FBSyxDQUFDQyxZQUFOLENBQW1CZ0IsR0FBbkIsQ0FBdUIsVUFBQ29DLEVBQUQsRUFBSUMsR0FBSjtBQUFBLFdBQ25CQSxHQUFHLElBQUUsQ0FBTixHQUNJO0FBQUssU0FBRyxFQUFFQSxHQUFWO0FBQWUsZUFBUyxFQUFFbEIsa0VBQW1CLENBQUNDLGVBQXBCLEdBQXNDLEdBQXRDLEdBQTJDRCxrRUFBbUIsQ0FBQ0ksTUFBekY7QUFBaUcsYUFBTyxFQUFFO0FBQUEsZUFBSVQsVUFBVSxDQUFDdUIsR0FBRCxZQUFRbkQsSUFBUixHQUFlQyxZQUFmLFlBQStCRyxNQUEvQixHQUF3Q0YsYUFBeEMsWUFBeURDLFdBQXpELEVBQWQ7QUFBQSxPQUExRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0k7QUFBRyxlQUFTLEVBQUU4QixrRUFBbUIsQ0FBQ21CLEtBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBMENGLEVBQUUsQ0FBQ2xELElBQTdDLFNBREosRUFFSTtBQUFNLGVBQVMsRUFBRWlDLGtFQUFtQixDQUFDb0IsV0FBckM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUFvRHhDLFlBQVksQ0FBQ1osWUFBakUsQ0FGSixDQURKLEdBTUE7QUFBSyxTQUFHLEVBQUVrRCxHQUFWO0FBQWUsZUFBUyxFQUFFbEIsa0VBQW1CLENBQUNDLGVBQTlDO0FBQ0ksYUFBTyxFQUFFO0FBQUEsZUFBSU4sVUFBVSxDQUFDdUIsR0FBRCxZQUFRRCxFQUFFLENBQUNsRCxJQUFYLEdBQWtCa0QsRUFBRSxDQUFDakQsWUFBckIsWUFBcUNpRCxFQUFFLENBQUM5QyxNQUF4QyxHQUFpRDhDLEVBQUUsQ0FBQ2hELGFBQXBELFlBQXFFZ0QsRUFBRSxDQUFDL0MsV0FBeEUsRUFBZDtBQUFBLE9BRGI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUVJO0FBQUcsZUFBUyxFQUFFOEIsa0VBQW1CLENBQUNtQixLQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQTBDRixFQUFFLENBQUNsRCxJQUE3QyxTQUZKLEVBR0k7QUFBTSxlQUFTLEVBQUVpQyxrRUFBbUIsQ0FBQ29CLFdBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBb0RILEVBQUUsQ0FBQ2pELFlBQXZELENBSEosQ0FQb0I7QUFBQSxHQUF2QixDQURMLENBRkosRUFpQkk7QUFBSyxhQUFTLEVBQUMsa0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssYUFBUyxFQUFDLHFCQUFmO0FBQXFDLFdBQU8sRUFBRTtBQUFBLGFBQUltQixjQUFjLENBQUMsR0FBRCxDQUFsQjtBQUFBLEtBQTlDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFNLGFBQVMsRUFBQyxrQkFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQURKLENBREosRUFJSTtBQUFPLFFBQUksRUFBQyxNQUFaO0FBQW1CLE1BQUUsRUFBQyxjQUF0QjtBQUFxQyxhQUFTLEVBQUMsMEJBQS9DO0FBQTBFLFNBQUssRUFBRVAsWUFBWSxDQUFDWSxRQUE5RjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSkosRUFLSTtBQUFLLGFBQVMsRUFBQyxvQkFBZjtBQUFvQyxXQUFPLEVBQUU7QUFBQSxhQUFJTCxjQUFjLENBQUMsR0FBRCxDQUFsQjtBQUFBLEtBQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFNLGFBQVMsRUFBQyxrQkFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQURKLENBTEosQ0FqQkosQ0FOSixDQUhKLEVBcUNNdkIsS0FBSyxDQUFDeUQsT0FBUCxHQUFnQjtBQUFLLGFBQVMsRUFBQyxhQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBNkIsTUFBQyxxREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBQTdCLENBQWhCLEdBQTZEO0FBQVEsYUFBUyxFQUFDLGlCQUFsQjtBQUFvQyxXQUFPLEVBQUVkLGNBQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFyQ2xFLENBSkosRUEyQ00sQ0FBQ3ZCLFdBQUYsR0FBZSxJQUFmLEdBQ0csTUFBQyxvREFBRDtBQUFPLGNBQVUsRUFBRTBCLGlCQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxzREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosQ0E1Q1IsQ0FESjtBQW1ESCxDQWxKRDs7R0FBTS9DLGM7O0tBQUFBLGM7O0FBb0pOLElBQU0yRCxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUFDLFFBQVEsRUFBRTtBQUM5QixTQUFPQSxRQUFRLENBQUNDLGNBQWhCO0FBQ0gsQ0FGRDs7QUFJZUMsMEhBQU8sQ0FBQ0gsZUFBRCxFQUFpQkksMERBQWpCLENBQVAsQ0FBd0MvRCxjQUF4QyxDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2R1Y3RvL1suLi5wcm9kdWN0b10uODUyZmMxZGQ0MzExODA3ZDI4MzYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSx1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBTbGlkZXJGb3Rvc1Byb2R1Y3RvIGZyb20gJy4vc2xpZGVyRm90b3MnO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgKiBhcyBjYXJyaXRvQWN0aW9ucyBmcm9tICcuLi8uLi8uLi9zdG9yZS9hY3Rpb25zL2NhcnJpdG9BY3Rpb25zJztcclxuaW1wb3J0IExvYWRlciBmcm9tICcuLi9Mb2FkZXIvaW5kZXgnO1xyXG5pbXBvcnQgTW9kYWwgZnJvbSAnLi4vTW9kYWwvaW5kZXgnO1xyXG5pbXBvcnQgQ2Fycml0byBmcm9tICcuLi9DYXJyaXRvL2luZGV4JztcclxuaW1wb3J0IFByb2R1Y3RvU2luZ2xlU3R5bGUgZnJvbSAgJy4vUHJvZHVjdG9TaW5nbGUubW9kdWxlLmNzcyc7XHJcbmltcG9ydCB7VVJMX0NMT1VEX1NUT1JBR0V9IGZyb20gJy4uLy4uLy4uL2NvbmZpZy9pbmRleCc7XHJcblxyXG5jb25zdCBQcm9kdWN0b1NpbmdsZSA9IChwcm9wcykgPT4ge1xyXG4gICAgaWYocHJvcHMuc3ViUHJvZHVjdG9zLmxlbmd0aD4wKXtcclxuICAgICAgICBjb25zdCB7cGVzbyxwcmVjaW9VbmlkYWQsaWRTdWJQcm9kdWN0byxzdWJQcm9kdWN0byx0YW1hw7FvfSA9IHByb3BzLnN1YlByb2R1Y3Rvc1swXTtcclxuICAgIH1cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3Qge21hcmNhLHByb2R1Y3RvfSA9IHByb3BzLnByb2R1Y3RvO1xyXG4gICAgICAgIGlmKHByb3BzLnN1YlByb2R1Y3Rvcy5sZW5ndGg+MCl7XHJcbiAgICAgICAgICAgIGNvbnN0IHtmb3RvLHBlc28scHJlY2lvVW5pZGFkLHRhbWHDsW8saWRTdWJQcm9kdWN0byxzdWJQcm9kdWN0b30gPSBwcm9wcy5zdWJQcm9kdWN0b3NbMF07XHJcbiAgICAgICAgICAgIGd1YXJkYXJQcm9kdWN0b0VuU3RhdGUoZm90byxwZXNvLHByZWNpb1VuaWRhZCxwcm9kdWN0byx0YW1hw7FvLGlkU3ViUHJvZHVjdG8sbWFyY2Esc3ViUHJvZHVjdG8pO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBndWFyZGFyUHJvZHVjdG9FblN0YXRlKGAke1VSTF9DTE9VRF9TVE9SQUdFfS9zaW4taW1hZ2VuLnBuZ2AsbnVsbCxudWxsLHByb2R1Y3RvLG51bGwsbnVsbCxtYXJjYSxudWxsKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbcHJvcHMucHJvZHVjdG9dKVxyXG5cclxuICAgIGNvbnN0IGltYWdlbmVzID0gW107XHJcbiAgICAvL2FsIHZlY3RvciBkZSBpbWFnZW5lcywgbGUgc3VtbyBsYXMgaW1hZ2VuZXMgZGUgbG9zIHByb2R1Y3RvcyByZWxhY2lvbmFkb3MgYWwgbWlzbW8gcGFkcmVcclxuICAgIGlmKHByb3BzLnN1YlByb2R1Y3Rvcy5sZW5ndGg9PTAgJiYgcHJvcHMuc3ViUHJvZHVjdG9zLmZvdG8pe1xyXG4gICAgICAgIGltYWdlbmVzLnB1c2gocHJvZHVjdG9EYXRhLmZvdG8pO1xyXG4gICAgfWVsc2V7XHJcbiAgICAgICAgcHJvcHMuc3ViUHJvZHVjdG9zLm1hcChkYXRhc3A9PntcclxuICAgICAgICAgICAgaW1hZ2VuZXMucHVzaChkYXRhc3AuZm90byk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcblxyXG4gICAgY29uc3QgW21vZGFsSXNPcGVuLCBzZXRNb2RhbElzT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbcHJvZHVjdG9EYXRhLCBzZXRQcm9kdWN0b0RhdGFdID0gdXNlU3RhdGUoe30pO1xyXG4gICAgXHJcblxyXG4gICAgY29uc3QgY2hhbmdlQ2FudGlkYWQgPSBhY3Rpb249PntcclxuICAgICAgICBsZXQgaW5wdXRDYW50aWRhZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW50aWRhZF9wcmQnKTtcclxuICAgICAgICBsZXQgY2FudGlkYWQgPSBwYXJzZUludChpbnB1dENhbnRpZGFkLnZhbHVlKTtcclxuICAgICAgICBpZihhY3Rpb24gPT09ICctJyl7XHJcbiAgICAgICAgICAgIGlmKGNhbnRpZGFkIDw9IDEpIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgY2FudGlkYWQtLTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgY2FudGlkYWQrKztcclxuICAgICAgICB9XHJcbiAgICAgICAgaW5wdXRDYW50aWRhZC52YWx1ZSA9IGNhbnRpZGFkO1xyXG4gICAgICAgIHJldHVybiBzZXRQcm9kdWN0b0RhdGEoe1xyXG4gICAgICAgICAgICAuLi5wcm9kdWN0b0RhdGEsXHJcbiAgICAgICAgICAgIGNhbnRpZGFkXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjaGFuZ2VQZXNvID0gKGluZGV4LHBlc28scHJlY2lvLHRhbWHDsW8saWRTdWJQcm9kdWN0byxzdWJQcm9kdWN0byk9PntcclxuICAgICAgICBsZXQgY2FqYVBlc28gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFByb2R1Y3RvU2luZ2xlU3R5bGUuY2FqYV9jYW50aWRhZEtnKTtcclxuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgY2FqYVBlc28ubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgIChjYWphUGVzb1tpbmRleF0uY2xhc3NMaXN0LmNvbnRhaW5zKFByb2R1Y3RvU2luZ2xlU3R5bGUuYWN0aXZlKSk/Y2FqYVBlc29baW5kZXhdLmNsYXNzTGlzdC5yZW1vdmUoUHJvZHVjdG9TaW5nbGVTdHlsZS5hY3RpdmUpOm51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhamFQZXNvW2luZGV4XS5jbGFzc0xpc3QuYWRkKFByb2R1Y3RvU2luZ2xlU3R5bGUuYWN0aXZlKTtcclxuICAgICAgICBpZighcGVzbyB8fCAhcHJlY2lvIHx8ICF0YW1hw7FvIHx8ICFpZFN1YlByb2R1Y3RvIHx8ICFzdWJQcm9kdWN0byl7XHJcbiAgICAgICAgICAgIHJldHVybiBzZXRQcm9kdWN0b0RhdGEoe1xyXG4gICAgICAgICAgICAgICAgLi4ucHJvZHVjdG9EYXRhLFxyXG4gICAgICAgICAgICAgICAgcGVzbzpwcm9wcy5zdWJQcm9kdWN0b3NbMF0ucGVzbyxcclxuICAgICAgICAgICAgICAgIHByZWNpbzpwcm9wcy5zdWJQcm9kdWN0b3NbMF0ucHJlY2lvVW5pZGFkLFxyXG4gICAgICAgICAgICAgICAgaWRTdWJQcm9kdWN0bzpwcm9wcy5zdWJQcm9kdWN0b3NbMF0uaWRTdWJQcm9kdWN0byxcclxuICAgICAgICAgICAgICAgIHN1YlByb2R1Y3RvOnByb3BzLnN1YlByb2R1Y3Rvc1swXS5zdWJQcm9kdWN0b1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHNldFByb2R1Y3RvRGF0YSh7XHJcbiAgICAgICAgICAgIC4uLnByb2R1Y3RvRGF0YSxcclxuICAgICAgICAgICAgcGVzbyxcclxuICAgICAgICAgICAgcHJlY2lvLFxyXG4gICAgICAgICAgICB0YW1hw7FvLFxyXG4gICAgICAgICAgICBpZFN1YlByb2R1Y3RvLFxyXG4gICAgICAgICAgICBzdWJQcm9kdWN0b1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGFncmVnYXJDYXJyaXRvID0gYXN5bmMoKT0+e1xyXG4gICAgICAgIHByb3BzLmFncmVnYXJQcm9kdWN0byhwcm9kdWN0b0RhdGEpO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBzZXRNb2RhbElzT3Blbih0cnVlKTtcclxuICAgICAgICB9LCAxNzAwKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjbG9zZU1vZGFsQ2Fycml0byA9KCk9PihcclxuICAgICAgICBzZXRNb2RhbElzT3BlbihmYWxzZSlcclxuICAgICk7XHJcbiAgICBcclxuICAgIGNvbnN0IGd1YXJkYXJQcm9kdWN0b0VuU3RhdGUgPSAoZm90byxwZXNvLHByZWNpb1VuaWRhZCxwcm9kdWN0byx0YW1hw7FvLGlkU3ViUHJvZHVjdG8sbWFyY2Esc3ViUHJvZHVjdG8pPT57XHJcbiAgICAgICAgc2V0UHJvZHVjdG9EYXRhKHtcclxuICAgICAgICAgICAgcHJvZHVjdG8sXHJcbiAgICAgICAgICAgIGZvdG8sXHJcbiAgICAgICAgICAgIHBlc28sXHJcbiAgICAgICAgICAgIGNhbnRpZGFkOjEsXHJcbiAgICAgICAgICAgIHByZWNpb1VuaWRhZCxcclxuICAgICAgICAgICAgdGFtYcOxbyxcclxuICAgICAgICAgICAgaWRTdWJQcm9kdWN0byxcclxuICAgICAgICAgICAgbWFyY2EsXHJcbiAgICAgICAgICAgIHN1YlByb2R1Y3RvXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1zbS02XCI+XHJcbiAgICAgICAgICAgICAgICA8U2xpZGVyRm90b3NQcm9kdWN0byBpbWFnZW5lcz17aW1hZ2VuZXN9IGNoYW5nZVBlc289e2NoYW5nZVBlc299IHN1YlByb2R1Y3Rvcz17cHJvcHMuc3ViUHJvZHVjdG9zfS8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGNvbC0xMiBjb2wtc20tNiBwdC01YCsnICcrIFByb2R1Y3RvU2luZ2xlU3R5bGUuZGVzY3JpcGNpb25Qcm9kdWN0b30+XHJcbiAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPXtQcm9kdWN0b1NpbmdsZVN0eWxlLm1hcmNhfT57cHJvZHVjdG9EYXRhLm1hcmNhfTwvaDM+XHJcbiAgICAgICAgICAgICAgICA8aDE+e3Byb2R1Y3RvRGF0YS5wcm9kdWN0b308L2gxPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1Byb2R1Y3RvU2luZ2xlU3R5bGUucHJlY2lvcyArICcgJyArIGBkLWZsZXggbXktM2B9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtQcm9kdWN0b1NpbmdsZVN0eWxlLmluZGljYWRvcl9fcHJlY2lvfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+UHJlY2lvPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e1Byb2R1Y3RvU2luZ2xlU3R5bGUudmFsb3JfX3ByZWNpb30+JHtwcm9kdWN0b0RhdGEucHJlY2lvVW5pZGFkfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1Byb2R1Y3RvU2luZ2xlU3R5bGUuaW5kaWNhZG9yX19jYW50aWRhZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17UHJvZHVjdG9TaW5nbGVTdHlsZS50aXR1bG9fX2luZGljYWRvckNhbnRpZGFkKycgJytgdGV4dC1jZW50ZXJgfT5TZWxlY2Npb27DoSB0YW1hw7FvPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cHJvcHMuc3ViUHJvZHVjdG9zLm1hcCgobXAsa2V5KT0+KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChrZXk9PTApP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17a2V5fSBjbGFzc05hbWU9e1Byb2R1Y3RvU2luZ2xlU3R5bGUuY2FqYV9jYW50aWRhZEtnICsgJyAnICtQcm9kdWN0b1NpbmdsZVN0eWxlLmFjdGl2ZX0gb25DbGljaz17KCk9PmNoYW5nZVBlc28oa2V5LGAke3Blc299YCxwcmVjaW9VbmlkYWQsYCR7dGFtYcOxb31gLGlkU3ViUHJvZHVjdG8sYCR7c3ViUHJvZHVjdG99YCl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtQcm9kdWN0b1NpbmdsZVN0eWxlLmtpbG9zfT57bXAucGVzb30gS2dzPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtQcm9kdWN0b1NpbmdsZVN0eWxlLnByZWNpb0RlbEtnfT4ke3Byb2R1Y3RvRGF0YS5wcmVjaW9VbmlkYWR9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2tleX0gY2xhc3NOYW1lPXtQcm9kdWN0b1NpbmdsZVN0eWxlLmNhamFfY2FudGlkYWRLZ30gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpPT5jaGFuZ2VQZXNvKGtleSxgJHttcC5wZXNvfWAsbXAucHJlY2lvVW5pZGFkLGAke21wLnRhbWHDsW99YCxtcC5pZFN1YlByb2R1Y3RvLGAke21wLnN1YlByb2R1Y3RvfWApfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtQcm9kdWN0b1NpbmdsZVN0eWxlLmtpbG9zfT57bXAucGVzb30gS2dzPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e1Byb2R1Y3RvU2luZ2xlU3R5bGUucHJlY2lvRGVsS2d9PiR7bXAucHJlY2lvVW5pZGFkfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cCBtdC0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLXByZXBlbmRcIiBvbkNsaWNrPXsoKT0+Y2hhbmdlQ2FudGlkYWQoJy0nKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAtdGV4dFwiPi08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiY2FudGlkYWRfcHJkXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIHRleHQtY2VudGVyXCIgdmFsdWU9e3Byb2R1Y3RvRGF0YS5jYW50aWRhZH0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC1hcHBlbmRcIiBvbkNsaWNrPXsoKT0+Y2hhbmdlQ2FudGlkYWQoJysnKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAtdGV4dFwiPis8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIHsocHJvcHMubG9hZGluZyk/PGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPjxMb2FkZXIvPjwvZGl2Pjo8YnV0dG9uIGNsYXNzTmFtZT1cImJvdG9uIGJnLXllbGxvd1wiIG9uQ2xpY2s9e2FncmVnYXJDYXJyaXRvfT5Db21wcmFyPC9idXR0b24+fVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgeyghbW9kYWxJc09wZW4pP251bGw6XHJcbiAgICAgICAgICAgICAgICA8TW9kYWwgY2xvc2VNb2RhbD17Y2xvc2VNb2RhbENhcnJpdG99PlxyXG4gICAgICAgICAgICAgICAgICAgIDxDYXJyaXRvLz5cclxuICAgICAgICAgICAgICAgIDwvTW9kYWw+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHJlZHVjZXJzPT57XHJcbiAgICByZXR1cm4gcmVkdWNlcnMuY2Fycml0b1JlZHVjZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLGNhcnJpdG9BY3Rpb25zKShQcm9kdWN0b1NpbmdsZSk7Il0sInNvdXJjZVJvb3QiOiIifQ==