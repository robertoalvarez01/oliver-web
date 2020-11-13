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
    _jsxFileName = "C:\\Users\\franc\\Documents\\oliver-2\\sitio-desa\\src\\components\\ProductoSingle\\index.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }










var ProductoSingle = function ProductoSingle(props) {
  _s();

  var _props$subProductos$ = props.subProductos[0],
      peso = _props$subProductos$.peso,
      precioUnidad = _props$subProductos$.precioUnidad,
      idSubProducto = _props$subProductos$.idSubProducto,
      subProducto = _props$subProductos$.subProducto,
      tamaño = _props$subProductos$.tamaño;
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    var _props$subProductos$2 = props.subProductos[0],
        foto = _props$subProductos$2.foto,
        peso = _props$subProductos$2.peso,
        precioUnidad = _props$subProductos$2.precioUnidad,
        tamaño = _props$subProductos$2.tamaño,
        idSubProducto = _props$subProductos$2.idSubProducto,
        subProducto = _props$subProductos$2.subProducto;
    var _props$producto = props.producto,
        marca = _props$producto.marca,
        producto = _props$producto.producto;
    guardarProductoEnState(foto, peso, precioUnidad, producto, tamaño, idSubProducto, marca, subProducto);
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
        peso: props.producto.peso,
        precio: props.producto.precioUnidad,
        tamaño: null,
        idSubProducto: null,
        subProducto: null
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
      lineNumber: 98,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "col-12 col-sm-6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 13
    }
  }, __jsx(_sliderFotos__WEBPACK_IMPORTED_MODULE_4__["default"], {
    imagenes: imagenes,
    changePeso: changePeso,
    subProductos: props.subProductos,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "col-12 col-sm-6 pt-5" + ' ' + _ProductoSingle_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.descripcionProducto,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 13
    }
  }, __jsx("h3", {
    className: _ProductoSingle_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.marca,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 17
    }
  }, productoData.marca), __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 17
    }
  }, productoData.producto), __jsx("div", {
    className: _ProductoSingle_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.precios + ' ' + "d-flex my-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: _ProductoSingle_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.indicador__precio,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 21
    }
  }, __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 25
    }
  }, "Precio"), __jsx("span", {
    className: _ProductoSingle_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.valor__precio,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 25
    }
  }, "$", productoData.precioUnidad)), __jsx("div", {
    className: _ProductoSingle_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.indicador__cantidad,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 21
    }
  }, __jsx("p", {
    className: _ProductoSingle_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.titulo__indicadorCantidad + ' ' + "text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 25
    }
  }, "Seleccion\xE1 tama\xF1o"), __jsx("div", {
    className: "row justify-content-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
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
        lineNumber: 116,
        columnNumber: 37
      }
    }, __jsx("p", {
      className: _ProductoSingle_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.kilos,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 41
      }
    }, mp.peso, " Kgs"), __jsx("span", {
      className: _ProductoSingle_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.precioDelKg,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118,
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
        lineNumber: 121,
        columnNumber: 33
      }
    }, __jsx("p", {
      className: _ProductoSingle_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.kilos,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 123,
        columnNumber: 37
      }
    }, mp.peso, " Kgs"), __jsx("span", {
      className: _ProductoSingle_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.precioDelKg,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124,
        columnNumber: 37
      }
    }, "$", mp.precioUnidad));
  })), __jsx("div", {
    className: "input-group mt-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
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
      lineNumber: 129,
      columnNumber: 29
    }
  }, __jsx("span", {
    className: "input-group-text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
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
      lineNumber: 132,
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
      lineNumber: 133,
      columnNumber: 29
    }
  }, __jsx("span", {
    className: "input-group-text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 33
    }
  }, "+"))))), props.loading ? __jsx("div", {
    className: "text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 34
    }
  }, __jsx(_Loader_index__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 63
    }
  })) : __jsx("button", {
    className: "boton bg-yellow",
    onClick: agregarCarrito,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 79
    }
  }, "Comprar")), !modalIsOpen ? null : __jsx(_Modal_index__WEBPACK_IMPORTED_MODULE_8__["default"], {
    closeModal: closeModalCarrito,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 17
    }
  }, __jsx(_Carrito_index__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUHJvZHVjdG9TaW5nbGUvaW5kZXguanMiXSwibmFtZXMiOlsiUHJvZHVjdG9TaW5nbGUiLCJwcm9wcyIsInN1YlByb2R1Y3RvcyIsInBlc28iLCJwcmVjaW9VbmlkYWQiLCJpZFN1YlByb2R1Y3RvIiwic3ViUHJvZHVjdG8iLCJ0YW1hw7FvIiwidXNlRWZmZWN0IiwiZm90byIsInByb2R1Y3RvIiwibWFyY2EiLCJndWFyZGFyUHJvZHVjdG9FblN0YXRlIiwiaW1hZ2VuZXMiLCJtYXAiLCJkYXRhc3AiLCJwdXNoIiwidXNlU3RhdGUiLCJtb2RhbElzT3BlbiIsInNldE1vZGFsSXNPcGVuIiwicHJvZHVjdG9EYXRhIiwic2V0UHJvZHVjdG9EYXRhIiwiY2hhbmdlQ2FudGlkYWQiLCJhY3Rpb24iLCJpbnB1dENhbnRpZGFkIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImNhbnRpZGFkIiwicGFyc2VJbnQiLCJ2YWx1ZSIsImNoYW5nZVBlc28iLCJpbmRleCIsInByZWNpbyIsImNhamFQZXNvIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsIlByb2R1Y3RvU2luZ2xlU3R5bGUiLCJjYWphX2NhbnRpZGFkS2ciLCJsZW5ndGgiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsImFjdGl2ZSIsInJlbW92ZSIsImFkZCIsImFncmVnYXJDYXJyaXRvIiwiYWdyZWdhclByb2R1Y3RvIiwic2V0VGltZW91dCIsImNsb3NlTW9kYWxDYXJyaXRvIiwiZGVzY3JpcGNpb25Qcm9kdWN0byIsInByZWNpb3MiLCJpbmRpY2Fkb3JfX3ByZWNpbyIsInZhbG9yX19wcmVjaW8iLCJpbmRpY2Fkb3JfX2NhbnRpZGFkIiwidGl0dWxvX19pbmRpY2Fkb3JDYW50aWRhZCIsIm1wIiwia2V5Iiwia2lsb3MiLCJwcmVjaW9EZWxLZyIsImxvYWRpbmciLCJtYXBTdGF0ZVRvUHJvcHMiLCJyZWR1Y2VycyIsImNhcnJpdG9SZWR1Y2Vy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QUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBckNsRSxDQUpKLEVBMkNNLENBQUN6QixXQUFGLEdBQWUsSUFBZixHQUNHLE1BQUMsb0RBQUQ7QUFBTyxjQUFVLEVBQUU0QixpQkFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsc0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLENBNUNSLENBREo7QUFtREgsQ0ExSUQ7O0dBQU05QyxjOztLQUFBQSxjOztBQTRJTixJQUFNMEQsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFBQyxRQUFRLEVBQUU7QUFDOUIsU0FBT0EsUUFBUSxDQUFDQyxjQUFoQjtBQUNILENBRkQ7O0FBSWVDLDBIQUFPLENBQUNILGVBQUQsRUFBaUJJLDBEQUFqQixDQUFQLENBQXdDOUQsY0FBeEMsQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9kdWN0by9bLi4ucHJvZHVjdG9dLjBkMjViNDBiNTA4YjkwOTlmNjM4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgU2xpZGVyRm90b3NQcm9kdWN0byBmcm9tICcuL3NsaWRlckZvdG9zJztcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0ICogYXMgY2Fycml0b0FjdGlvbnMgZnJvbSAnLi4vLi4vLi4vc3RvcmUvYWN0aW9ucy9jYXJyaXRvQWN0aW9ucyc7XHJcbmltcG9ydCBMb2FkZXIgZnJvbSAnLi4vTG9hZGVyL2luZGV4JztcclxuaW1wb3J0IE1vZGFsIGZyb20gJy4uL01vZGFsL2luZGV4JztcclxuaW1wb3J0IENhcnJpdG8gZnJvbSAnLi4vQ2Fycml0by9pbmRleCc7XHJcbmltcG9ydCBQcm9kdWN0b1NpbmdsZVN0eWxlIGZyb20gICcuL1Byb2R1Y3RvU2luZ2xlLm1vZHVsZS5jc3MnO1xyXG5cclxuY29uc3QgUHJvZHVjdG9TaW5nbGUgPSAocHJvcHMpID0+IHtcclxuXHJcbiAgICBjb25zdCB7cGVzbyxwcmVjaW9VbmlkYWQsaWRTdWJQcm9kdWN0byxzdWJQcm9kdWN0byx0YW1hw7FvfSA9IHByb3BzLnN1YlByb2R1Y3Rvc1swXTtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3Qge2ZvdG8scGVzbyxwcmVjaW9VbmlkYWQsdGFtYcOxbyxpZFN1YlByb2R1Y3RvLHN1YlByb2R1Y3RvfSA9IHByb3BzLnN1YlByb2R1Y3Rvc1swXTtcclxuICAgICAgICBjb25zdCB7bWFyY2EscHJvZHVjdG99ID0gcHJvcHMucHJvZHVjdG87XHJcbiAgICAgICAgZ3VhcmRhclByb2R1Y3RvRW5TdGF0ZShmb3RvLHBlc28scHJlY2lvVW5pZGFkLHByb2R1Y3RvLHRhbWHDsW8saWRTdWJQcm9kdWN0byxtYXJjYSxzdWJQcm9kdWN0byk7XHJcbiAgICB9LCBbcHJvcHMucHJvZHVjdG9dKVxyXG5cclxuICAgIGNvbnN0IGltYWdlbmVzID0gW107XHJcbiAgICAvL2FsIHZlY3RvciBkZSBpbWFnZW5lcywgbGUgc3VtbyBsYXMgaW1hZ2VuZXMgZGUgbG9zIHByb2R1Y3RvcyByZWxhY2lvbmFkb3MgYWwgbWlzbW8gcGFkcmVcclxuICAgIHByb3BzLnN1YlByb2R1Y3Rvcy5tYXAoZGF0YXNwPT57XHJcbiAgICAgICAgaW1hZ2VuZXMucHVzaChkYXRhc3AuZm90byk7XHJcbiAgICB9KVxyXG5cclxuXHJcbiAgICBjb25zdCBbbW9kYWxJc09wZW4sIHNldE1vZGFsSXNPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtwcm9kdWN0b0RhdGEsIHNldFByb2R1Y3RvRGF0YV0gPSB1c2VTdGF0ZSh7fSk7XHJcbiAgICBcclxuXHJcbiAgICBjb25zdCBjaGFuZ2VDYW50aWRhZCA9IGFjdGlvbj0+e1xyXG4gICAgICAgIGxldCBpbnB1dENhbnRpZGFkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbnRpZGFkX3ByZCcpO1xyXG4gICAgICAgIGxldCBjYW50aWRhZCA9IHBhcnNlSW50KGlucHV0Q2FudGlkYWQudmFsdWUpO1xyXG4gICAgICAgIGlmKGFjdGlvbiA9PT0gJy0nKXtcclxuICAgICAgICAgICAgaWYoY2FudGlkYWQgPD0gMSkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICBjYW50aWRhZC0tO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBjYW50aWRhZCsrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpbnB1dENhbnRpZGFkLnZhbHVlID0gY2FudGlkYWQ7XHJcbiAgICAgICAgcmV0dXJuIHNldFByb2R1Y3RvRGF0YSh7XHJcbiAgICAgICAgICAgIC4uLnByb2R1Y3RvRGF0YSxcclxuICAgICAgICAgICAgY2FudGlkYWRcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNoYW5nZVBlc28gPSAoaW5kZXgscGVzbyxwcmVjaW8sdGFtYcOxbyxpZFN1YlByb2R1Y3RvLHN1YlByb2R1Y3RvKT0+e1xyXG4gICAgICAgIGxldCBjYWphUGVzbyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoUHJvZHVjdG9TaW5nbGVTdHlsZS5jYWphX2NhbnRpZGFkS2cpO1xyXG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBjYWphUGVzby5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgKGNhamFQZXNvW2luZGV4XS5jbGFzc0xpc3QuY29udGFpbnMoUHJvZHVjdG9TaW5nbGVTdHlsZS5hY3RpdmUpKT9jYWphUGVzb1tpbmRleF0uY2xhc3NMaXN0LnJlbW92ZShQcm9kdWN0b1NpbmdsZVN0eWxlLmFjdGl2ZSk6bnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2FqYVBlc29baW5kZXhdLmNsYXNzTGlzdC5hZGQoUHJvZHVjdG9TaW5nbGVTdHlsZS5hY3RpdmUpO1xyXG4gICAgICAgIGlmKCFwZXNvIHx8ICFwcmVjaW8gfHwgIXRhbWHDsW8gfHwgIWlkU3ViUHJvZHVjdG8gfHwgIXN1YlByb2R1Y3RvKXtcclxuICAgICAgICAgICAgcmV0dXJuIHNldFByb2R1Y3RvRGF0YSh7XHJcbiAgICAgICAgICAgICAgICAuLi5wcm9kdWN0b0RhdGEsXHJcbiAgICAgICAgICAgICAgICBwZXNvOnByb3BzLnByb2R1Y3RvLnBlc28sXHJcbiAgICAgICAgICAgICAgICBwcmVjaW86cHJvcHMucHJvZHVjdG8ucHJlY2lvVW5pZGFkLFxyXG4gICAgICAgICAgICAgICAgdGFtYcOxbzpudWxsLFxyXG4gICAgICAgICAgICAgICAgaWRTdWJQcm9kdWN0bzpudWxsLFxyXG4gICAgICAgICAgICAgICAgc3ViUHJvZHVjdG86bnVsbFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHNldFByb2R1Y3RvRGF0YSh7XHJcbiAgICAgICAgICAgIC4uLnByb2R1Y3RvRGF0YSxcclxuICAgICAgICAgICAgcGVzbyxcclxuICAgICAgICAgICAgcHJlY2lvLFxyXG4gICAgICAgICAgICB0YW1hw7FvLFxyXG4gICAgICAgICAgICBpZFN1YlByb2R1Y3RvLFxyXG4gICAgICAgICAgICBzdWJQcm9kdWN0b1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGFncmVnYXJDYXJyaXRvID0gYXN5bmMoKT0+e1xyXG4gICAgICAgIHByb3BzLmFncmVnYXJQcm9kdWN0byhwcm9kdWN0b0RhdGEpO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBzZXRNb2RhbElzT3Blbih0cnVlKTtcclxuICAgICAgICB9LCAxNzAwKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjbG9zZU1vZGFsQ2Fycml0byA9KCk9PihcclxuICAgICAgICBzZXRNb2RhbElzT3BlbihmYWxzZSlcclxuICAgICk7XHJcbiAgICBcclxuICAgIGNvbnN0IGd1YXJkYXJQcm9kdWN0b0VuU3RhdGUgPSAoZm90byxwZXNvLHByZWNpb1VuaWRhZCxwcm9kdWN0byx0YW1hw7FvLGlkU3ViUHJvZHVjdG8sbWFyY2Esc3ViUHJvZHVjdG8pPT57XHJcbiAgICAgICAgc2V0UHJvZHVjdG9EYXRhKHtcclxuICAgICAgICAgICAgcHJvZHVjdG8sXHJcbiAgICAgICAgICAgIGZvdG8sXHJcbiAgICAgICAgICAgIHBlc28sXHJcbiAgICAgICAgICAgIGNhbnRpZGFkOjEsXHJcbiAgICAgICAgICAgIHByZWNpb1VuaWRhZCxcclxuICAgICAgICAgICAgdGFtYcOxbyxcclxuICAgICAgICAgICAgaWRTdWJQcm9kdWN0byxcclxuICAgICAgICAgICAgbWFyY2EsXHJcbiAgICAgICAgICAgIHN1YlByb2R1Y3RvXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1zbS02XCI+XHJcbiAgICAgICAgICAgICAgICA8U2xpZGVyRm90b3NQcm9kdWN0byBpbWFnZW5lcz17aW1hZ2VuZXN9IGNoYW5nZVBlc289e2NoYW5nZVBlc299IHN1YlByb2R1Y3Rvcz17cHJvcHMuc3ViUHJvZHVjdG9zfS8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGNvbC0xMiBjb2wtc20tNiBwdC01YCsnICcrIFByb2R1Y3RvU2luZ2xlU3R5bGUuZGVzY3JpcGNpb25Qcm9kdWN0b30+XHJcbiAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPXtQcm9kdWN0b1NpbmdsZVN0eWxlLm1hcmNhfT57cHJvZHVjdG9EYXRhLm1hcmNhfTwvaDM+XHJcbiAgICAgICAgICAgICAgICA8aDE+e3Byb2R1Y3RvRGF0YS5wcm9kdWN0b308L2gxPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1Byb2R1Y3RvU2luZ2xlU3R5bGUucHJlY2lvcyArICcgJyArIGBkLWZsZXggbXktM2B9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtQcm9kdWN0b1NpbmdsZVN0eWxlLmluZGljYWRvcl9fcHJlY2lvfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+UHJlY2lvPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e1Byb2R1Y3RvU2luZ2xlU3R5bGUudmFsb3JfX3ByZWNpb30+JHtwcm9kdWN0b0RhdGEucHJlY2lvVW5pZGFkfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1Byb2R1Y3RvU2luZ2xlU3R5bGUuaW5kaWNhZG9yX19jYW50aWRhZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17UHJvZHVjdG9TaW5nbGVTdHlsZS50aXR1bG9fX2luZGljYWRvckNhbnRpZGFkKycgJytgdGV4dC1jZW50ZXJgfT5TZWxlY2Npb27DoSB0YW1hw7FvPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cHJvcHMuc3ViUHJvZHVjdG9zLm1hcCgobXAsa2V5KT0+KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChrZXk9PTApP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17a2V5fSBjbGFzc05hbWU9e1Byb2R1Y3RvU2luZ2xlU3R5bGUuY2FqYV9jYW50aWRhZEtnICsgJyAnICtQcm9kdWN0b1NpbmdsZVN0eWxlLmFjdGl2ZX0gb25DbGljaz17KCk9PmNoYW5nZVBlc28oa2V5LGAke3Blc299YCxwcmVjaW9VbmlkYWQsYCR7dGFtYcOxb31gLGlkU3ViUHJvZHVjdG8sYCR7c3ViUHJvZHVjdG99YCl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtQcm9kdWN0b1NpbmdsZVN0eWxlLmtpbG9zfT57bXAucGVzb30gS2dzPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtQcm9kdWN0b1NpbmdsZVN0eWxlLnByZWNpb0RlbEtnfT4ke3Byb2R1Y3RvRGF0YS5wcmVjaW9VbmlkYWR9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2tleX0gY2xhc3NOYW1lPXtQcm9kdWN0b1NpbmdsZVN0eWxlLmNhamFfY2FudGlkYWRLZ30gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpPT5jaGFuZ2VQZXNvKGtleSxgJHttcC5wZXNvfWAsbXAucHJlY2lvVW5pZGFkLGAke21wLnRhbWHDsW99YCxtcC5pZFN1YlByb2R1Y3RvLGAke21wLnN1YlByb2R1Y3RvfWApfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtQcm9kdWN0b1NpbmdsZVN0eWxlLmtpbG9zfT57bXAucGVzb30gS2dzPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e1Byb2R1Y3RvU2luZ2xlU3R5bGUucHJlY2lvRGVsS2d9PiR7bXAucHJlY2lvVW5pZGFkfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cCBtdC0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLXByZXBlbmRcIiBvbkNsaWNrPXsoKT0+Y2hhbmdlQ2FudGlkYWQoJy0nKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAtdGV4dFwiPi08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiY2FudGlkYWRfcHJkXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIHRleHQtY2VudGVyXCIgdmFsdWU9e3Byb2R1Y3RvRGF0YS5jYW50aWRhZH0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC1hcHBlbmRcIiBvbkNsaWNrPXsoKT0+Y2hhbmdlQ2FudGlkYWQoJysnKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAtdGV4dFwiPis8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIHsocHJvcHMubG9hZGluZyk/PGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPjxMb2FkZXIvPjwvZGl2Pjo8YnV0dG9uIGNsYXNzTmFtZT1cImJvdG9uIGJnLXllbGxvd1wiIG9uQ2xpY2s9e2FncmVnYXJDYXJyaXRvfT5Db21wcmFyPC9idXR0b24+fVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgeyghbW9kYWxJc09wZW4pP251bGw6XHJcbiAgICAgICAgICAgICAgICA8TW9kYWwgY2xvc2VNb2RhbD17Y2xvc2VNb2RhbENhcnJpdG99PlxyXG4gICAgICAgICAgICAgICAgICAgIDxDYXJyaXRvLz5cclxuICAgICAgICAgICAgICAgIDwvTW9kYWw+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHJlZHVjZXJzPT57XHJcbiAgICByZXR1cm4gcmVkdWNlcnMuY2Fycml0b1JlZHVjZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLGNhcnJpdG9BY3Rpb25zKShQcm9kdWN0b1NpbmdsZSk7Il0sInNvdXJjZVJvb3QiOiIifQ==