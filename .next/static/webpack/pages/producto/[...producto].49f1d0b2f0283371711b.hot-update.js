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
    moreProducts: props.moreProducts,
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
  }, productoData.subProducto), __jsx("div", {
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
    }, productoData.peso, " Kgs"), __jsx("span", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUHJvZHVjdG9TaW5nbGUvaW5kZXguanMiXSwibmFtZXMiOlsiUHJvZHVjdG9TaW5nbGUiLCJwcm9wcyIsInN1YlByb2R1Y3RvcyIsInBlc28iLCJwcmVjaW9VbmlkYWQiLCJpZFN1YlByb2R1Y3RvIiwic3ViUHJvZHVjdG8iLCJ0YW1hw7FvIiwidXNlRWZmZWN0IiwiZm90byIsInByb2R1Y3RvIiwibWFyY2EiLCJndWFyZGFyUHJvZHVjdG9FblN0YXRlIiwiaW1hZ2VuZXMiLCJtYXAiLCJkYXRhc3AiLCJwdXNoIiwidXNlU3RhdGUiLCJtb2RhbElzT3BlbiIsInNldE1vZGFsSXNPcGVuIiwicHJvZHVjdG9EYXRhIiwic2V0UHJvZHVjdG9EYXRhIiwiY2hhbmdlQ2FudGlkYWQiLCJhY3Rpb24iLCJpbnB1dENhbnRpZGFkIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImNhbnRpZGFkIiwicGFyc2VJbnQiLCJ2YWx1ZSIsImNoYW5nZVBlc28iLCJpbmRleCIsInByZWNpbyIsImNhamFQZXNvIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsIlByb2R1Y3RvU2luZ2xlU3R5bGUiLCJjYWphX2NhbnRpZGFkS2ciLCJsZW5ndGgiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsImFjdGl2ZSIsInJlbW92ZSIsImFkZCIsImFncmVnYXJDYXJyaXRvIiwiYWdyZWdhclByb2R1Y3RvIiwic2V0VGltZW91dCIsImNsb3NlTW9kYWxDYXJyaXRvIiwibW9yZVByb2R1Y3RzIiwiZGVzY3JpcGNpb25Qcm9kdWN0byIsInByZWNpb3MiLCJpbmRpY2Fkb3JfX3ByZWNpbyIsInZhbG9yX19wcmVjaW8iLCJpbmRpY2Fkb3JfX2NhbnRpZGFkIiwidGl0dWxvX19pbmRpY2Fkb3JDYW50aWRhZCIsIm1wIiwia2V5Iiwia2lsb3MiLCJwcmVjaW9EZWxLZyIsImxvYWRpbmciLCJtYXBTdGF0ZVRvUHJvcHMiLCJyZWR1Y2VycyIs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QUFPLEVBQUVmLGNBQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFyQ2xFLENBSkosRUEyQ00sQ0FBQ3pCLFdBQUYsR0FBZSxJQUFmLEdBQ0csTUFBQyxvREFBRDtBQUFPLGNBQVUsRUFBRTRCLGlCQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxzREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosQ0E1Q1IsQ0FESjtBQW1ESCxDQTFJRDs7R0FBTTlDLGM7O0tBQUFBLGM7O0FBNElOLElBQU0yRCxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUFDLFFBQVEsRUFBRTtBQUM5QixTQUFPQSxRQUFRLENBQUNDLGNBQWhCO0FBQ0gsQ0FGRDs7QUFJZUMsMEhBQU8sQ0FBQ0gsZUFBRCxFQUFpQkksMERBQWpCLENBQVAsQ0FBd0MvRCxjQUF4QyxDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2R1Y3RvL1suLi5wcm9kdWN0b10uNDlmMWQwYjJmMDI4MzM3MTcxMWIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSx1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBTbGlkZXJGb3Rvc1Byb2R1Y3RvIGZyb20gJy4vc2xpZGVyRm90b3MnO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgKiBhcyBjYXJyaXRvQWN0aW9ucyBmcm9tICcuLi8uLi8uLi9zdG9yZS9hY3Rpb25zL2NhcnJpdG9BY3Rpb25zJztcclxuaW1wb3J0IExvYWRlciBmcm9tICcuLi9Mb2FkZXIvaW5kZXgnO1xyXG5pbXBvcnQgTW9kYWwgZnJvbSAnLi4vTW9kYWwvaW5kZXgnO1xyXG5pbXBvcnQgQ2Fycml0byBmcm9tICcuLi9DYXJyaXRvL2luZGV4JztcclxuaW1wb3J0IFByb2R1Y3RvU2luZ2xlU3R5bGUgZnJvbSAgJy4vUHJvZHVjdG9TaW5nbGUubW9kdWxlLmNzcyc7XHJcblxyXG5jb25zdCBQcm9kdWN0b1NpbmdsZSA9IChwcm9wcykgPT4ge1xyXG5cclxuICAgIGNvbnN0IHtwZXNvLHByZWNpb1VuaWRhZCxpZFN1YlByb2R1Y3RvLHN1YlByb2R1Y3RvLHRhbWHDsW99ID0gcHJvcHMuc3ViUHJvZHVjdG9zWzBdO1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zdCB7Zm90byxwZXNvLHByZWNpb1VuaWRhZCx0YW1hw7FvLGlkU3ViUHJvZHVjdG8sc3ViUHJvZHVjdG99ID0gcHJvcHMuc3ViUHJvZHVjdG9zWzBdO1xyXG4gICAgICAgIGNvbnN0IHttYXJjYSxwcm9kdWN0b30gPSBwcm9wcy5wcm9kdWN0bztcclxuICAgICAgICBndWFyZGFyUHJvZHVjdG9FblN0YXRlKGZvdG8scGVzbyxwcmVjaW9VbmlkYWQscHJvZHVjdG8sdGFtYcOxbyxpZFN1YlByb2R1Y3RvLG1hcmNhLHN1YlByb2R1Y3RvKTtcclxuICAgIH0sIFtwcm9wcy5wcm9kdWN0b10pXHJcblxyXG4gICAgY29uc3QgaW1hZ2VuZXMgPSBbXTtcclxuICAgIC8vYWwgdmVjdG9yIGRlIGltYWdlbmVzLCBsZSBzdW1vIGxhcyBpbWFnZW5lcyBkZSBsb3MgcHJvZHVjdG9zIHJlbGFjaW9uYWRvcyBhbCBtaXNtbyBwYWRyZVxyXG4gICAgcHJvcHMuc3ViUHJvZHVjdG9zLm1hcChkYXRhc3A9PntcclxuICAgICAgICBpbWFnZW5lcy5wdXNoKGRhdGFzcC5mb3RvKTtcclxuICAgIH0pXHJcblxyXG5cclxuICAgIGNvbnN0IFttb2RhbElzT3Blbiwgc2V0TW9kYWxJc09wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW3Byb2R1Y3RvRGF0YSwgc2V0UHJvZHVjdG9EYXRhXSA9IHVzZVN0YXRlKHt9KTtcclxuICAgIFxyXG5cclxuICAgIGNvbnN0IGNoYW5nZUNhbnRpZGFkID0gYWN0aW9uPT57XHJcbiAgICAgICAgbGV0IGlucHV0Q2FudGlkYWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FudGlkYWRfcHJkJyk7XHJcbiAgICAgICAgbGV0IGNhbnRpZGFkID0gcGFyc2VJbnQoaW5wdXRDYW50aWRhZC52YWx1ZSk7XHJcbiAgICAgICAgaWYoYWN0aW9uID09PSAnLScpe1xyXG4gICAgICAgICAgICBpZihjYW50aWRhZCA8PSAxKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIGNhbnRpZGFkLS07XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGNhbnRpZGFkKys7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlucHV0Q2FudGlkYWQudmFsdWUgPSBjYW50aWRhZDtcclxuICAgICAgICByZXR1cm4gc2V0UHJvZHVjdG9EYXRhKHtcclxuICAgICAgICAgICAgLi4ucHJvZHVjdG9EYXRhLFxyXG4gICAgICAgICAgICBjYW50aWRhZFxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY2hhbmdlUGVzbyA9IChpbmRleCxwZXNvLHByZWNpbyx0YW1hw7FvLGlkU3ViUHJvZHVjdG8sc3ViUHJvZHVjdG8pPT57XHJcbiAgICAgICAgbGV0IGNhamFQZXNvID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShQcm9kdWN0b1NpbmdsZVN0eWxlLmNhamFfY2FudGlkYWRLZyk7XHJcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGNhamFQZXNvLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICAoY2FqYVBlc29baW5kZXhdLmNsYXNzTGlzdC5jb250YWlucyhQcm9kdWN0b1NpbmdsZVN0eWxlLmFjdGl2ZSkpP2NhamFQZXNvW2luZGV4XS5jbGFzc0xpc3QucmVtb3ZlKFByb2R1Y3RvU2luZ2xlU3R5bGUuYWN0aXZlKTpudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYWphUGVzb1tpbmRleF0uY2xhc3NMaXN0LmFkZChQcm9kdWN0b1NpbmdsZVN0eWxlLmFjdGl2ZSk7XHJcbiAgICAgICAgaWYoIXBlc28gfHwgIXByZWNpbyB8fCAhdGFtYcOxbyB8fCAhaWRTdWJQcm9kdWN0byB8fCAhc3ViUHJvZHVjdG8pe1xyXG4gICAgICAgICAgICByZXR1cm4gc2V0UHJvZHVjdG9EYXRhKHtcclxuICAgICAgICAgICAgICAgIC4uLnByb2R1Y3RvRGF0YSxcclxuICAgICAgICAgICAgICAgIHBlc286cHJvcHMucHJvZHVjdG8ucGVzbyxcclxuICAgICAgICAgICAgICAgIHByZWNpbzpwcm9wcy5wcm9kdWN0by5wcmVjaW9VbmlkYWQsXHJcbiAgICAgICAgICAgICAgICB0YW1hw7FvOm51bGwsXHJcbiAgICAgICAgICAgICAgICBpZFN1YlByb2R1Y3RvOm51bGwsXHJcbiAgICAgICAgICAgICAgICBzdWJQcm9kdWN0bzpudWxsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgc2V0UHJvZHVjdG9EYXRhKHtcclxuICAgICAgICAgICAgLi4ucHJvZHVjdG9EYXRhLFxyXG4gICAgICAgICAgICBwZXNvLFxyXG4gICAgICAgICAgICBwcmVjaW8sXHJcbiAgICAgICAgICAgIHRhbWHDsW8sXHJcbiAgICAgICAgICAgIGlkU3ViUHJvZHVjdG8sXHJcbiAgICAgICAgICAgIHN1YlByb2R1Y3RvXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgYWdyZWdhckNhcnJpdG8gPSBhc3luYygpPT57XHJcbiAgICAgICAgcHJvcHMuYWdyZWdhclByb2R1Y3RvKHByb2R1Y3RvRGF0YSk7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHNldE1vZGFsSXNPcGVuKHRydWUpO1xyXG4gICAgICAgIH0sIDE3MDApO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNsb3NlTW9kYWxDYXJyaXRvID0oKT0+KFxyXG4gICAgICAgIHNldE1vZGFsSXNPcGVuKGZhbHNlKVxyXG4gICAgKTtcclxuICAgIFxyXG4gICAgY29uc3QgZ3VhcmRhclByb2R1Y3RvRW5TdGF0ZSA9IChmb3RvLHBlc28scHJlY2lvVW5pZGFkLHByb2R1Y3RvLHRhbWHDsW8saWRTdWJQcm9kdWN0byxtYXJjYSxzdWJQcm9kdWN0byk9PntcclxuICAgICAgICBzZXRQcm9kdWN0b0RhdGEoe1xyXG4gICAgICAgICAgICBwcm9kdWN0byxcclxuICAgICAgICAgICAgZm90byxcclxuICAgICAgICAgICAgcGVzbyxcclxuICAgICAgICAgICAgY2FudGlkYWQ6MSxcclxuICAgICAgICAgICAgcHJlY2lvVW5pZGFkLFxyXG4gICAgICAgICAgICB0YW1hw7FvLFxyXG4gICAgICAgICAgICBpZFN1YlByb2R1Y3RvLFxyXG4gICAgICAgICAgICBtYXJjYSxcclxuICAgICAgICAgICAgc3ViUHJvZHVjdG9cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLXNtLTZcIj5cclxuICAgICAgICAgICAgICAgIDxTbGlkZXJGb3Rvc1Byb2R1Y3RvIGltYWdlbmVzPXtpbWFnZW5lc30gY2hhbmdlUGVzbz17Y2hhbmdlUGVzb30gbW9yZVByb2R1Y3RzPXtwcm9wcy5tb3JlUHJvZHVjdHN9Lz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgY29sLTEyIGNvbC1zbS02IHB0LTVgKycgJysgUHJvZHVjdG9TaW5nbGVTdHlsZS5kZXNjcmlwY2lvblByb2R1Y3RvfT5cclxuICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9e1Byb2R1Y3RvU2luZ2xlU3R5bGUubWFyY2F9Pntwcm9kdWN0b0RhdGEubWFyY2F9PC9oMz5cclxuICAgICAgICAgICAgICAgIDxoMT57cHJvZHVjdG9EYXRhLnN1YlByb2R1Y3RvfTwvaDE+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17UHJvZHVjdG9TaW5nbGVTdHlsZS5wcmVjaW9zICsgJyAnICsgYGQtZmxleCBteS0zYH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1Byb2R1Y3RvU2luZ2xlU3R5bGUuaW5kaWNhZG9yX19wcmVjaW99PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5QcmVjaW88L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17UHJvZHVjdG9TaW5nbGVTdHlsZS52YWxvcl9fcHJlY2lvfT4ke3Byb2R1Y3RvRGF0YS5wcmVjaW9VbmlkYWR9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17UHJvZHVjdG9TaW5nbGVTdHlsZS5pbmRpY2Fkb3JfX2NhbnRpZGFkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtQcm9kdWN0b1NpbmdsZVN0eWxlLnRpdHVsb19faW5kaWNhZG9yQ2FudGlkYWQrJyAnK2B0ZXh0LWNlbnRlcmB9PlNlbGVjY2lvbsOhIHRhbWHDsW88L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9wcy5zdWJQcm9kdWN0b3MubWFwKChtcCxrZXkpPT4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGtleT09MCk/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtrZXl9IGNsYXNzTmFtZT17UHJvZHVjdG9TaW5nbGVTdHlsZS5jYWphX2NhbnRpZGFkS2cgKyAnICcgK1Byb2R1Y3RvU2luZ2xlU3R5bGUuYWN0aXZlfSBvbkNsaWNrPXsoKT0+Y2hhbmdlUGVzbyhrZXksYCR7cGVzb31gLHByZWNpb1VuaWRhZCxgJHt0YW1hw7FvfWAsaWRTdWJQcm9kdWN0byxgJHtzdWJQcm9kdWN0b31gKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e1Byb2R1Y3RvU2luZ2xlU3R5bGUua2lsb3N9Pntwcm9kdWN0b0RhdGEucGVzb30gS2dzPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtQcm9kdWN0b1NpbmdsZVN0eWxlLnByZWNpb0RlbEtnfT4ke3Byb2R1Y3RvRGF0YS5wcmVjaW9VbmlkYWR9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2tleX0gY2xhc3NOYW1lPXtQcm9kdWN0b1NpbmdsZVN0eWxlLmNhamFfY2FudGlkYWRLZ30gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpPT5jaGFuZ2VQZXNvKChrZXkpLGAke21wLnBlc299YCxtcC5wcmVjaW9VbmlkYWQsYCR7bXAudGFtYcOxb31gLG1wLmlkU3ViUHJvZHVjdG8sYCR7bXAuc3ViUHJvZHVjdG99YCl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e1Byb2R1Y3RvU2luZ2xlU3R5bGUua2lsb3N9PnttcC5wZXNvfSBLZ3M8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17UHJvZHVjdG9TaW5nbGVTdHlsZS5wcmVjaW9EZWxLZ30+JHttcC5wcmVjaW9VbmlkYWR9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwIG10LTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAtcHJlcGVuZFwiIG9uQ2xpY2s9eygpPT5jaGFuZ2VDYW50aWRhZCgnLScpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC10ZXh0XCI+LTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJjYW50aWRhZF9wcmRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgdGV4dC1jZW50ZXJcIiB2YWx1ZT17cHJvZHVjdG9EYXRhLmNhbnRpZGFkfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLWFwcGVuZFwiIG9uQ2xpY2s9eygpPT5jaGFuZ2VDYW50aWRhZCgnKycpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC10ZXh0XCI+Kzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgeyhwcm9wcy5sb2FkaW5nKT88ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+PExvYWRlci8+PC9kaXY+OjxidXR0b24gY2xhc3NOYW1lPVwiYm90b24gYmcteWVsbG93XCIgb25DbGljaz17YWdyZWdhckNhcnJpdG99PkNvbXByYXI8L2J1dHRvbj59XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB7KCFtb2RhbElzT3Blbik/bnVsbDpcclxuICAgICAgICAgICAgICAgIDxNb2RhbCBjbG9zZU1vZGFsPXtjbG9zZU1vZGFsQ2Fycml0b30+XHJcbiAgICAgICAgICAgICAgICAgICAgPENhcnJpdG8vPlxyXG4gICAgICAgICAgICAgICAgPC9Nb2RhbD5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gcmVkdWNlcnM9PntcclxuICAgIHJldHVybiByZWR1Y2Vycy5jYXJyaXRvUmVkdWNlcjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsY2Fycml0b0FjdGlvbnMpKFByb2R1Y3RvU2luZ2xlKTsiXSwic291cmNlUm9vdCI6IiJ9