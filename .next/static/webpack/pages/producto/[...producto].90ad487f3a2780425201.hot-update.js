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

  var _props$producto = props.producto,
      peso = _props$producto.peso,
      precioUnidad = _props$producto.precioUnidad,
      idSubProducto = _props$producto.idSubProducto,
      subProducto = _props$producto.subProducto,
      tamaño = _props$producto.tamaño; //console.log(props);

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    var _props$producto2 = props.producto,
        foto = _props$producto2.foto,
        precioUnidad = _props$producto2.precioUnidad,
        producto = _props$producto2.producto,
        marca = _props$producto2.marca;
    guardarProductoEnState(foto, null, precioUnidad, producto, null, null, marca, null);
  }, [props.producto]);
  var imagenes = [props.producto.foto]; //al vector de imagenes, le sumo las imagenes de los productos relacionados al mismo padre

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

  console.log(props);
  return __jsx("div", {
    className: "row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "col-12 col-sm-6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 13
    }
  }, __jsx(_sliderFotos__WEBPACK_IMPORTED_MODULE_4__["default"], {
    imagenes: imagenes,
    changePeso: changePeso,
    moreProducts: props.moreProducts,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "col-12 col-sm-6 pt-5" + ' ' + _ProductoSingle_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.descripcionProducto,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 13
    }
  }, __jsx("h3", {
    className: _ProductoSingle_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.marca,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 17
    }
  }, productoData.marca), __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 17
    }
  }, productoData.subProducto), __jsx("div", {
    className: _ProductoSingle_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.precios + ' ' + "d-flex my-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: _ProductoSingle_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.indicador__precio,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 21
    }
  }, __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 25
    }
  }, "Precio"), __jsx("span", {
    className: _ProductoSingle_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.valor__precio,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 25
    }
  }, "$", productoData.precioUnidad)), __jsx("div", {
    className: _ProductoSingle_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.indicador__cantidad,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 21
    }
  }, __jsx("p", {
    className: _ProductoSingle_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.titulo__indicadorCantidad + ' ' + "text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 25
    }
  }, "Seleccion\xE1 tama\xF1o"), __jsx("div", {
    className: "row justify-content-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: _ProductoSingle_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.caja_cantidadKg + ' ' + _ProductoSingle_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.active,
    onClick: function onClick() {
      return changePeso(0, "".concat(peso), precioUnidad, "".concat(tamaño), idSubProducto, "".concat(subProducto));
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 29
    }
  }, __jsx("p", {
    className: _ProductoSingle_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.kilos,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 33
    }
  }, productoData.peso, " Kgs"), __jsx("span", {
    className: _ProductoSingle_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.precioDelKg,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 33
    }
  }, "$", productoData.precioUnidad)), props.subProductos.map(function (mp, key) {
    return __jsx("div", {
      key: key,
      className: _ProductoSingle_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.caja_cantidadKg,
      onClick: function onClick() {
        return changePeso(key + 1, "".concat(mp.peso), mp.precioUnidad, "".concat(mp.tamaño), mp.idSubProducto, "".concat(mp.subProducto));
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 33
      }
    }, __jsx("p", {
      className: _ProductoSingle_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.kilos,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 37
      }
    }, mp.peso, " Kgs"), __jsx("span", {
      className: _ProductoSingle_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.precioDelKg,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 123,
        columnNumber: 37
      }
    }, "$", mp.precioUnidad));
  })), __jsx("div", {
    className: "input-group mt-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
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
      lineNumber: 128,
      columnNumber: 29
    }
  }, __jsx("span", {
    className: "input-group-text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
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
      lineNumber: 131,
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
      lineNumber: 132,
      columnNumber: 29
    }
  }, __jsx("span", {
    className: "input-group-text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 33
    }
  }, "+"))))), props.loading ? __jsx("div", {
    className: "text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 34
    }
  }, __jsx(_Loader_index__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 63
    }
  })) : __jsx("button", {
    className: "boton bg-yellow",
    onClick: agregarCarrito,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 79
    }
  }, "Comprar")), !modalIsOpen ? null : __jsx(_Modal_index__WEBPACK_IMPORTED_MODULE_8__["default"], {
    closeModal: closeModalCarrito,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 17
    }
  }, __jsx(_Carrito_index__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUHJvZHVjdG9TaW5nbGUvaW5kZXguanMiXSwibmFtZXMiOlsiUHJvZHVjdG9TaW5nbGUiLCJwcm9wcyIsInByb2R1Y3RvIiwicGVzbyIsInByZWNpb1VuaWRhZCIsImlkU3ViUHJvZHVjdG8iLCJzdWJQcm9kdWN0byIsInRhbWHDsW8iLCJ1c2VFZmZlY3QiLCJmb3RvIiwibWFyY2EiLCJndWFyZGFyUHJvZHVjdG9FblN0YXRlIiwiaW1hZ2VuZXMiLCJ1c2VTdGF0ZSIsIm1vZGFsSXNPcGVuIiwic2V0TW9kYWxJc09wZW4iLCJwcm9kdWN0b0RhdGEiLCJzZXRQcm9kdWN0b0RhdGEiLCJjaGFuZ2VDYW50aWRhZCIsImFjdGlvbiIsImlucHV0Q2FudGlkYWQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY2FudGlkYWQiLCJwYXJzZUludCIsInZhbHVlIiwiY2hhbmdlUGVzbyIsImluZGV4IiwicHJlY2lvIiwiY2FqYVBlc28iLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiUHJvZHVjdG9TaW5nbGVTdHlsZSIsImNhamFfY2FudGlkYWRLZyIsImxlbmd0aCIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwiYWN0aXZlIiwicmVtb3ZlIiwiYWRkIiwiYWdyZWdhckNhcnJpdG8iLCJhZ3JlZ2FyUHJvZHVjdG8iLCJzZXRUaW1lb3V0IiwiY2xvc2VNb2RhbENhcnJpdG8iLCJjb25zb2xlIiwibG9nIiwibW9yZVByb2R1Y3RzIiwiZGVzY3JpcGNpb25Qcm9kdWN0byIsInByZWNpb3MiLCJpbmRpY2Fkb3JfX3ByZWNpbyIsInZhbG9yX19wcmVjaW8iLCJpbmRpY2Fkb3JfX2NhbnRpZGFkIiwidGl0dWxvX19pbmRpY2Fkb3JDYW50aWRhZCIsImtpbG9zIiwicHJlY2lvRGVsS2ciLCJzdWJQcm9kdWN0b3MiLCJtYXAiLCJtcCIsImtleSIsImxvYWRpbmciLCJtYXBTdGF0ZVRvUHJvcHMiLCJyZWR1Y2VycyIs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MklOLElBQU0yRCxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUFDLFFBQVEsRUFBRTtBQUM5QixTQUFPQSxRQUFRLENBQUNDLGNBQWhCO0FBQ0gsQ0FGRDs7QUFJZUMsMEhBQU8sQ0FBQ0gsZUFBRCxFQUFpQkksMERBQWpCLENBQVAsQ0FBd0MvRCxjQUF4QyxDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2R1Y3RvL1suLi5wcm9kdWN0b10uOTBhZDQ4N2YzYTI3ODA0MjUyMDEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSx1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBTbGlkZXJGb3Rvc1Byb2R1Y3RvIGZyb20gJy4vc2xpZGVyRm90b3MnO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgKiBhcyBjYXJyaXRvQWN0aW9ucyBmcm9tICcuLi8uLi8uLi9zdG9yZS9hY3Rpb25zL2NhcnJpdG9BY3Rpb25zJztcclxuaW1wb3J0IExvYWRlciBmcm9tICcuLi9Mb2FkZXIvaW5kZXgnO1xyXG5pbXBvcnQgTW9kYWwgZnJvbSAnLi4vTW9kYWwvaW5kZXgnO1xyXG5pbXBvcnQgQ2Fycml0byBmcm9tICcuLi9DYXJyaXRvL2luZGV4JztcclxuaW1wb3J0IFByb2R1Y3RvU2luZ2xlU3R5bGUgZnJvbSAgJy4vUHJvZHVjdG9TaW5nbGUubW9kdWxlLmNzcyc7XHJcblxyXG5jb25zdCBQcm9kdWN0b1NpbmdsZSA9IChwcm9wcykgPT4ge1xyXG5cclxuICAgIGNvbnN0IHtwZXNvLHByZWNpb1VuaWRhZCxpZFN1YlByb2R1Y3RvLHN1YlByb2R1Y3RvLHRhbWHDsW99ID0gcHJvcHMucHJvZHVjdG87XHJcbiAgICAvL2NvbnNvbGUubG9nKHByb3BzKTtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3Qge2ZvdG8scHJlY2lvVW5pZGFkLHByb2R1Y3RvLG1hcmNhfSA9IHByb3BzLnByb2R1Y3RvO1xyXG4gICAgICAgIGd1YXJkYXJQcm9kdWN0b0VuU3RhdGUoZm90byxudWxsLHByZWNpb1VuaWRhZCxwcm9kdWN0byxudWxsLG51bGwsbWFyY2EsbnVsbCk7XHJcbiAgICB9LCBbcHJvcHMucHJvZHVjdG9dKVxyXG5cclxuICAgIFxyXG4gICAgY29uc3QgaW1hZ2VuZXMgPSBbXHJcbiAgICAgICAgcHJvcHMucHJvZHVjdG8uZm90b1xyXG4gICAgXTtcclxuICAgIC8vYWwgdmVjdG9yIGRlIGltYWdlbmVzLCBsZSBzdW1vIGxhcyBpbWFnZW5lcyBkZSBsb3MgcHJvZHVjdG9zIHJlbGFjaW9uYWRvcyBhbCBtaXNtbyBwYWRyZVxyXG4gICAgXHJcblxyXG5cclxuICAgIGNvbnN0IFttb2RhbElzT3Blbiwgc2V0TW9kYWxJc09wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW3Byb2R1Y3RvRGF0YSwgc2V0UHJvZHVjdG9EYXRhXSA9IHVzZVN0YXRlKHt9KTtcclxuICAgIFxyXG5cclxuICAgIGNvbnN0IGNoYW5nZUNhbnRpZGFkID0gYWN0aW9uPT57XHJcbiAgICAgICAgbGV0IGlucHV0Q2FudGlkYWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FudGlkYWRfcHJkJyk7XHJcbiAgICAgICAgbGV0IGNhbnRpZGFkID0gcGFyc2VJbnQoaW5wdXRDYW50aWRhZC52YWx1ZSk7XHJcbiAgICAgICAgaWYoYWN0aW9uID09PSAnLScpe1xyXG4gICAgICAgICAgICBpZihjYW50aWRhZCA8PSAxKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIGNhbnRpZGFkLS07XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGNhbnRpZGFkKys7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlucHV0Q2FudGlkYWQudmFsdWUgPSBjYW50aWRhZDtcclxuICAgICAgICByZXR1cm4gc2V0UHJvZHVjdG9EYXRhKHtcclxuICAgICAgICAgICAgLi4ucHJvZHVjdG9EYXRhLFxyXG4gICAgICAgICAgICBjYW50aWRhZFxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY2hhbmdlUGVzbyA9IChpbmRleCxwZXNvLHByZWNpbyx0YW1hw7FvLGlkU3ViUHJvZHVjdG8sc3ViUHJvZHVjdG8pPT57XHJcbiAgICAgICAgbGV0IGNhamFQZXNvID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShQcm9kdWN0b1NpbmdsZVN0eWxlLmNhamFfY2FudGlkYWRLZyk7XHJcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGNhamFQZXNvLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICAoY2FqYVBlc29baW5kZXhdLmNsYXNzTGlzdC5jb250YWlucyhQcm9kdWN0b1NpbmdsZVN0eWxlLmFjdGl2ZSkpP2NhamFQZXNvW2luZGV4XS5jbGFzc0xpc3QucmVtb3ZlKFByb2R1Y3RvU2luZ2xlU3R5bGUuYWN0aXZlKTpudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYWphUGVzb1tpbmRleF0uY2xhc3NMaXN0LmFkZChQcm9kdWN0b1NpbmdsZVN0eWxlLmFjdGl2ZSk7XHJcbiAgICAgICAgaWYoIXBlc28gfHwgIXByZWNpbyB8fCAhdGFtYcOxbyB8fCAhaWRTdWJQcm9kdWN0byB8fCAhc3ViUHJvZHVjdG8pe1xyXG4gICAgICAgICAgICByZXR1cm4gc2V0UHJvZHVjdG9EYXRhKHtcclxuICAgICAgICAgICAgICAgIC4uLnByb2R1Y3RvRGF0YSxcclxuICAgICAgICAgICAgICAgIHBlc286cHJvcHMucHJvZHVjdG8ucGVzbyxcclxuICAgICAgICAgICAgICAgIHByZWNpbzpwcm9wcy5wcm9kdWN0by5wcmVjaW9VbmlkYWQsXHJcbiAgICAgICAgICAgICAgICB0YW1hw7FvOm51bGwsXHJcbiAgICAgICAgICAgICAgICBpZFN1YlByb2R1Y3RvOm51bGwsXHJcbiAgICAgICAgICAgICAgICBzdWJQcm9kdWN0bzpudWxsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgc2V0UHJvZHVjdG9EYXRhKHtcclxuICAgICAgICAgICAgLi4ucHJvZHVjdG9EYXRhLFxyXG4gICAgICAgICAgICBwZXNvLFxyXG4gICAgICAgICAgICBwcmVjaW8sXHJcbiAgICAgICAgICAgIHRhbWHDsW8sXHJcbiAgICAgICAgICAgIGlkU3ViUHJvZHVjdG8sXHJcbiAgICAgICAgICAgIHN1YlByb2R1Y3RvXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgYWdyZWdhckNhcnJpdG8gPSBhc3luYygpPT57XHJcbiAgICAgICAgcHJvcHMuYWdyZWdhclByb2R1Y3RvKHByb2R1Y3RvRGF0YSk7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHNldE1vZGFsSXNPcGVuKHRydWUpO1xyXG4gICAgICAgIH0sIDE3MDApO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNsb3NlTW9kYWxDYXJyaXRvID0oKT0+KFxyXG4gICAgICAgIHNldE1vZGFsSXNPcGVuKGZhbHNlKVxyXG4gICAgKTtcclxuICAgIFxyXG4gICAgY29uc3QgZ3VhcmRhclByb2R1Y3RvRW5TdGF0ZSA9IChmb3RvLHBlc28scHJlY2lvVW5pZGFkLHByb2R1Y3RvLHRhbWHDsW8saWRTdWJQcm9kdWN0byxtYXJjYSxzdWJQcm9kdWN0byk9PntcclxuICAgICAgICBzZXRQcm9kdWN0b0RhdGEoe1xyXG4gICAgICAgICAgICBwcm9kdWN0byxcclxuICAgICAgICAgICAgZm90byxcclxuICAgICAgICAgICAgcGVzbyxcclxuICAgICAgICAgICAgY2FudGlkYWQ6MSxcclxuICAgICAgICAgICAgcHJlY2lvVW5pZGFkLFxyXG4gICAgICAgICAgICB0YW1hw7FvLFxyXG4gICAgICAgICAgICBpZFN1YlByb2R1Y3RvLFxyXG4gICAgICAgICAgICBtYXJjYSxcclxuICAgICAgICAgICAgc3ViUHJvZHVjdG9cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgY29uc29sZS5sb2cocHJvcHMpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtc20tNlwiPlxyXG4gICAgICAgICAgICAgICAgPFNsaWRlckZvdG9zUHJvZHVjdG8gaW1hZ2VuZXM9e2ltYWdlbmVzfSBjaGFuZ2VQZXNvPXtjaGFuZ2VQZXNvfSBtb3JlUHJvZHVjdHM9e3Byb3BzLm1vcmVQcm9kdWN0c30vPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Bjb2wtMTIgY29sLXNtLTYgcHQtNWArJyAnKyBQcm9kdWN0b1NpbmdsZVN0eWxlLmRlc2NyaXBjaW9uUHJvZHVjdG99PlxyXG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT17UHJvZHVjdG9TaW5nbGVTdHlsZS5tYXJjYX0+e3Byb2R1Y3RvRGF0YS5tYXJjYX08L2gzPlxyXG4gICAgICAgICAgICAgICAgPGgxPntwcm9kdWN0b0RhdGEuc3ViUHJvZHVjdG99PC9oMT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtQcm9kdWN0b1NpbmdsZVN0eWxlLnByZWNpb3MgKyAnICcgKyBgZC1mbGV4IG15LTNgfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17UHJvZHVjdG9TaW5nbGVTdHlsZS5pbmRpY2Fkb3JfX3ByZWNpb30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlByZWNpbzwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtQcm9kdWN0b1NpbmdsZVN0eWxlLnZhbG9yX19wcmVjaW99PiR7cHJvZHVjdG9EYXRhLnByZWNpb1VuaWRhZH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtQcm9kdWN0b1NpbmdsZVN0eWxlLmluZGljYWRvcl9fY2FudGlkYWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e1Byb2R1Y3RvU2luZ2xlU3R5bGUudGl0dWxvX19pbmRpY2Fkb3JDYW50aWRhZCsnICcrYHRleHQtY2VudGVyYH0+U2VsZWNjaW9uw6EgdGFtYcOxbzwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1Byb2R1Y3RvU2luZ2xlU3R5bGUuY2FqYV9jYW50aWRhZEtnICsgJyAnICtQcm9kdWN0b1NpbmdsZVN0eWxlLmFjdGl2ZX0gb25DbGljaz17KCk9PmNoYW5nZVBlc28oMCxgJHtwZXNvfWAscHJlY2lvVW5pZGFkLGAke3RhbWHDsW99YCxpZFN1YlByb2R1Y3RvLGAke3N1YlByb2R1Y3RvfWApfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e1Byb2R1Y3RvU2luZ2xlU3R5bGUua2lsb3N9Pntwcm9kdWN0b0RhdGEucGVzb30gS2dzPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17UHJvZHVjdG9TaW5nbGVTdHlsZS5wcmVjaW9EZWxLZ30+JHtwcm9kdWN0b0RhdGEucHJlY2lvVW5pZGFkfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3Byb3BzLnN1YlByb2R1Y3Rvcy5tYXAoKG1wLGtleSk9PihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17a2V5fSBjbGFzc05hbWU9e1Byb2R1Y3RvU2luZ2xlU3R5bGUuY2FqYV9jYW50aWRhZEtnfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCk9PmNoYW5nZVBlc28oKGtleSsxKSxgJHttcC5wZXNvfWAsbXAucHJlY2lvVW5pZGFkLGAke21wLnRhbWHDsW99YCxtcC5pZFN1YlByb2R1Y3RvLGAke21wLnN1YlByb2R1Y3RvfWApfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtQcm9kdWN0b1NpbmdsZVN0eWxlLmtpbG9zfT57bXAucGVzb30gS2dzPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e1Byb2R1Y3RvU2luZ2xlU3R5bGUucHJlY2lvRGVsS2d9PiR7bXAucHJlY2lvVW5pZGFkfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cCBtdC0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLXByZXBlbmRcIiBvbkNsaWNrPXsoKT0+Y2hhbmdlQ2FudGlkYWQoJy0nKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAtdGV4dFwiPi08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiY2FudGlkYWRfcHJkXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIHRleHQtY2VudGVyXCIgdmFsdWU9e3Byb2R1Y3RvRGF0YS5jYW50aWRhZH0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC1hcHBlbmRcIiBvbkNsaWNrPXsoKT0+Y2hhbmdlQ2FudGlkYWQoJysnKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAtdGV4dFwiPis8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIHsocHJvcHMubG9hZGluZyk/PGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPjxMb2FkZXIvPjwvZGl2Pjo8YnV0dG9uIGNsYXNzTmFtZT1cImJvdG9uIGJnLXllbGxvd1wiIG9uQ2xpY2s9e2FncmVnYXJDYXJyaXRvfT5Db21wcmFyPC9idXR0b24+fVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgeyghbW9kYWxJc09wZW4pP251bGw6XHJcbiAgICAgICAgICAgICAgICA8TW9kYWwgY2xvc2VNb2RhbD17Y2xvc2VNb2RhbENhcnJpdG99PlxyXG4gICAgICAgICAgICAgICAgICAgIDxDYXJyaXRvLz5cclxuICAgICAgICAgICAgICAgIDwvTW9kYWw+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHJlZHVjZXJzPT57XHJcbiAgICByZXR1cm4gcmVkdWNlcnMuY2Fycml0b1JlZHVjZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLGNhcnJpdG9BY3Rpb25zKShQcm9kdWN0b1NpbmdsZSk7Il0sInNvdXJjZVJvb3QiOiIifQ==