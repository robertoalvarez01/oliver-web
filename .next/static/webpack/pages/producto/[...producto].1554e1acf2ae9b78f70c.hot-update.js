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
  }, __jsx("div", {
    className: _ProductoSingle_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.caja_cantidadKg + ' ' + _ProductoSingle_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.active,
    onClick: function onClick() {
      return changePeso(0, "".concat(peso), precioUnidad, "".concat(tamaño), idSubProducto, "".concat(subProducto));
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 29
    }
  }, __jsx("p", {
    className: _ProductoSingle_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.kilos,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 33
    }
  }, productoData.peso, " Kgs"), __jsx("span", {
    className: _ProductoSingle_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.precioDelKg,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
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
        lineNumber: 119,
        columnNumber: 33
      }
    }, __jsx("p", {
      className: _ProductoSingle_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.kilos,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 37
      }
    }, mp.peso, " Kgs"), __jsx("span", {
      className: _ProductoSingle_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.precioDelKg,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 37
      }
    }, "$", mp.precioUnidad));
  })), __jsx("div", {
    className: "input-group mt-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
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
      lineNumber: 127,
      columnNumber: 29
    }
  }, __jsx("span", {
    className: "input-group-text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
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
      lineNumber: 130,
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
      lineNumber: 131,
      columnNumber: 29
    }
  }, __jsx("span", {
    className: "input-group-text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 33
    }
  }, "+"))))), props.loading ? __jsx("div", {
    className: "text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 34
    }
  }, __jsx(_Loader_index__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 63
    }
  })) : __jsx("button", {
    className: "boton bg-yellow",
    onClick: agregarCarrito,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 79
    }
  }, "Comprar")), !modalIsOpen ? null : __jsx(_Modal_index__WEBPACK_IMPORTED_MODULE_8__["default"], {
    closeModal: closeModalCarrito,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 17
    }
  }, __jsx(_Carrito_index__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUHJvZHVjdG9TaW5nbGUvaW5kZXguanMiXSwibmFtZXMiOlsiUHJvZHVjdG9TaW5nbGUiLCJwcm9wcyIsInByb2R1Y3RvIiwicGVzbyIsInByZWNpb1VuaWRhZCIsImlkU3ViUHJvZHVjdG8iLCJzdWJQcm9kdWN0byIsInRhbWHDsW8iLCJ1c2VFZmZlY3QiLCJmb3RvIiwibWFyY2EiLCJndWFyZGFyUHJvZHVjdG9FblN0YXRlIiwiaW1hZ2VuZXMiLCJ1c2VTdGF0ZSIsIm1vZGFsSXNPcGVuIiwic2V0TW9kYWxJc09wZW4iLCJwcm9kdWN0b0RhdGEiLCJzZXRQcm9kdWN0b0RhdGEiLCJjaGFuZ2VDYW50aWRhZCIsImFjdGlvbiIsImlucHV0Q2FudGlkYWQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY2FudGlkYWQiLCJwYXJzZUludCIsInZhbHVlIiwiY2hhbmdlUGVzbyIsImluZGV4IiwicHJlY2lvIiwiY2FqYVBlc28iLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiUHJvZHVjdG9TaW5nbGVTdHlsZSIsImNhamFfY2FudGlkYWRLZyIsImxlbmd0aCIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwiYWN0aXZlIiwicmVtb3ZlIiwiYWRkIiwiYWdyZWdhckNhcnJpdG8iLCJhZ3JlZ2FyUHJvZHVjdG8iLCJzZXRUaW1lb3V0IiwiY2xvc2VNb2RhbENhcnJpdG8iLCJtb3JlUHJvZHVjdHMiLCJkZXNjcmlwY2lvblByb2R1Y3RvIiwicHJlY2lvcyIsImluZGljYWRvcl9fcHJlY2lvIiwidmFsb3JfX3ByZWNpbyIsImluZGljYWRvcl9fY2FudGlkYWQiLCJ0aXR1bG9fX2luZGljYWRvckNhbnRpZGFkIiwia2lsb3MiLCJwcmVjaW9EZWxLZyIsInN1YlByb2R1Y3RvcyIsIm1hcCIsIm1wIiwia2V5IiwibG9hZGluZyIsIm1hcFN0YXRlVG9Qcm9wcyIsInJlZHVjZXJzIiwiY2Fycml0b1JlZHVjZXIi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LFNBQU9BLFFBQVEsQ0FBQ0MsY0FBaEI7QUFDSCxDQUZEOztBQUllQywwSEFBTyxDQUFDSCxlQUFELEVBQWlCSSwwREFBakIsQ0FBUCxDQUF3QzdELGNBQXhDLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvZHVjdG8vWy4uLnByb2R1Y3RvXS4xNTU0ZTFhY2YyYWU5Yjc4ZjcwYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFNsaWRlckZvdG9zUHJvZHVjdG8gZnJvbSAnLi9zbGlkZXJGb3Rvcyc7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCAqIGFzIGNhcnJpdG9BY3Rpb25zIGZyb20gJy4uLy4uLy4uL3N0b3JlL2FjdGlvbnMvY2Fycml0b0FjdGlvbnMnO1xyXG5pbXBvcnQgTG9hZGVyIGZyb20gJy4uL0xvYWRlci9pbmRleCc7XHJcbmltcG9ydCBNb2RhbCBmcm9tICcuLi9Nb2RhbC9pbmRleCc7XHJcbmltcG9ydCBDYXJyaXRvIGZyb20gJy4uL0NhcnJpdG8vaW5kZXgnO1xyXG5pbXBvcnQgUHJvZHVjdG9TaW5nbGVTdHlsZSBmcm9tICAnLi9Qcm9kdWN0b1NpbmdsZS5tb2R1bGUuY3NzJztcclxuXHJcbmNvbnN0IFByb2R1Y3RvU2luZ2xlID0gKHByb3BzKSA9PiB7XHJcblxyXG4gICAgY29uc3Qge3Blc28scHJlY2lvVW5pZGFkLGlkU3ViUHJvZHVjdG8sc3ViUHJvZHVjdG8sdGFtYcOxb30gPSBwcm9wcy5wcm9kdWN0bztcclxuICAgIC8vY29uc29sZS5sb2cocHJvcHMpO1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zdCB7Zm90byxwcmVjaW9VbmlkYWQscHJvZHVjdG8sbWFyY2F9ID0gcHJvcHMucHJvZHVjdG87XHJcbiAgICAgICAgZ3VhcmRhclByb2R1Y3RvRW5TdGF0ZShmb3RvLG51bGwscHJlY2lvVW5pZGFkLHByb2R1Y3RvLG51bGwsbnVsbCxtYXJjYSxudWxsKTtcclxuICAgIH0sIFtwcm9wcy5wcm9kdWN0b10pXHJcblxyXG4gICAgXHJcbiAgICBjb25zdCBpbWFnZW5lcyA9IFtcclxuICAgICAgICBwcm9wcy5wcm9kdWN0by5mb3RvXHJcbiAgICBdO1xyXG4gICAgLy9hbCB2ZWN0b3IgZGUgaW1hZ2VuZXMsIGxlIHN1bW8gbGFzIGltYWdlbmVzIGRlIGxvcyBwcm9kdWN0b3MgcmVsYWNpb25hZG9zIGFsIG1pc21vIHBhZHJlXHJcbiAgICBcclxuXHJcblxyXG4gICAgY29uc3QgW21vZGFsSXNPcGVuLCBzZXRNb2RhbElzT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbcHJvZHVjdG9EYXRhLCBzZXRQcm9kdWN0b0RhdGFdID0gdXNlU3RhdGUoe30pO1xyXG4gICAgXHJcblxyXG4gICAgY29uc3QgY2hhbmdlQ2FudGlkYWQgPSBhY3Rpb249PntcclxuICAgICAgICBsZXQgaW5wdXRDYW50aWRhZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW50aWRhZF9wcmQnKTtcclxuICAgICAgICBsZXQgY2FudGlkYWQgPSBwYXJzZUludChpbnB1dENhbnRpZGFkLnZhbHVlKTtcclxuICAgICAgICBpZihhY3Rpb24gPT09ICctJyl7XHJcbiAgICAgICAgICAgIGlmKGNhbnRpZGFkIDw9IDEpIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgY2FudGlkYWQtLTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgY2FudGlkYWQrKztcclxuICAgICAgICB9XHJcbiAgICAgICAgaW5wdXRDYW50aWRhZC52YWx1ZSA9IGNhbnRpZGFkO1xyXG4gICAgICAgIHJldHVybiBzZXRQcm9kdWN0b0RhdGEoe1xyXG4gICAgICAgICAgICAuLi5wcm9kdWN0b0RhdGEsXHJcbiAgICAgICAgICAgIGNhbnRpZGFkXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjaGFuZ2VQZXNvID0gKGluZGV4LHBlc28scHJlY2lvLHRhbWHDsW8saWRTdWJQcm9kdWN0byxzdWJQcm9kdWN0byk9PntcclxuICAgICAgICBsZXQgY2FqYVBlc28gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFByb2R1Y3RvU2luZ2xlU3R5bGUuY2FqYV9jYW50aWRhZEtnKTtcclxuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgY2FqYVBlc28ubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgIChjYWphUGVzb1tpbmRleF0uY2xhc3NMaXN0LmNvbnRhaW5zKFByb2R1Y3RvU2luZ2xlU3R5bGUuYWN0aXZlKSk/Y2FqYVBlc29baW5kZXhdLmNsYXNzTGlzdC5yZW1vdmUoUHJvZHVjdG9TaW5nbGVTdHlsZS5hY3RpdmUpOm51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhamFQZXNvW2luZGV4XS5jbGFzc0xpc3QuYWRkKFByb2R1Y3RvU2luZ2xlU3R5bGUuYWN0aXZlKTtcclxuICAgICAgICBpZighcGVzbyB8fCAhcHJlY2lvIHx8ICF0YW1hw7FvIHx8ICFpZFN1YlByb2R1Y3RvIHx8ICFzdWJQcm9kdWN0byl7XHJcbiAgICAgICAgICAgIHJldHVybiBzZXRQcm9kdWN0b0RhdGEoe1xyXG4gICAgICAgICAgICAgICAgLi4ucHJvZHVjdG9EYXRhLFxyXG4gICAgICAgICAgICAgICAgcGVzbzpwcm9wcy5wcm9kdWN0by5wZXNvLFxyXG4gICAgICAgICAgICAgICAgcHJlY2lvOnByb3BzLnByb2R1Y3RvLnByZWNpb1VuaWRhZCxcclxuICAgICAgICAgICAgICAgIHRhbWHDsW86bnVsbCxcclxuICAgICAgICAgICAgICAgIGlkU3ViUHJvZHVjdG86bnVsbCxcclxuICAgICAgICAgICAgICAgIHN1YlByb2R1Y3RvOm51bGxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBzZXRQcm9kdWN0b0RhdGEoe1xyXG4gICAgICAgICAgICAuLi5wcm9kdWN0b0RhdGEsXHJcbiAgICAgICAgICAgIHBlc28sXHJcbiAgICAgICAgICAgIHByZWNpbyxcclxuICAgICAgICAgICAgdGFtYcOxbyxcclxuICAgICAgICAgICAgaWRTdWJQcm9kdWN0byxcclxuICAgICAgICAgICAgc3ViUHJvZHVjdG9cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBhZ3JlZ2FyQ2Fycml0byA9IGFzeW5jKCk9PntcclxuICAgICAgICBwcm9wcy5hZ3JlZ2FyUHJvZHVjdG8ocHJvZHVjdG9EYXRhKTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgc2V0TW9kYWxJc09wZW4odHJ1ZSk7XHJcbiAgICAgICAgfSwgMTcwMCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY2xvc2VNb2RhbENhcnJpdG8gPSgpPT4oXHJcbiAgICAgICAgc2V0TW9kYWxJc09wZW4oZmFsc2UpXHJcbiAgICApO1xyXG4gICAgXHJcbiAgICBjb25zdCBndWFyZGFyUHJvZHVjdG9FblN0YXRlID0gKGZvdG8scGVzbyxwcmVjaW9VbmlkYWQscHJvZHVjdG8sdGFtYcOxbyxpZFN1YlByb2R1Y3RvLG1hcmNhLHN1YlByb2R1Y3RvKT0+e1xyXG4gICAgICAgIHNldFByb2R1Y3RvRGF0YSh7XHJcbiAgICAgICAgICAgIHByb2R1Y3RvLFxyXG4gICAgICAgICAgICBmb3RvLFxyXG4gICAgICAgICAgICBwZXNvLFxyXG4gICAgICAgICAgICBjYW50aWRhZDoxLFxyXG4gICAgICAgICAgICBwcmVjaW9VbmlkYWQsXHJcbiAgICAgICAgICAgIHRhbWHDsW8sXHJcbiAgICAgICAgICAgIGlkU3ViUHJvZHVjdG8sXHJcbiAgICAgICAgICAgIG1hcmNhLFxyXG4gICAgICAgICAgICBzdWJQcm9kdWN0b1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1zbS02XCI+XHJcbiAgICAgICAgICAgICAgICA8U2xpZGVyRm90b3NQcm9kdWN0byBpbWFnZW5lcz17aW1hZ2VuZXN9IGNoYW5nZVBlc289e2NoYW5nZVBlc299IG1vcmVQcm9kdWN0cz17cHJvcHMubW9yZVByb2R1Y3RzfS8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGNvbC0xMiBjb2wtc20tNiBwdC01YCsnICcrIFByb2R1Y3RvU2luZ2xlU3R5bGUuZGVzY3JpcGNpb25Qcm9kdWN0b30+XHJcbiAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPXtQcm9kdWN0b1NpbmdsZVN0eWxlLm1hcmNhfT57cHJvZHVjdG9EYXRhLm1hcmNhfTwvaDM+XHJcbiAgICAgICAgICAgICAgICA8aDE+e3Byb2R1Y3RvRGF0YS5zdWJQcm9kdWN0b308L2gxPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1Byb2R1Y3RvU2luZ2xlU3R5bGUucHJlY2lvcyArICcgJyArIGBkLWZsZXggbXktM2B9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtQcm9kdWN0b1NpbmdsZVN0eWxlLmluZGljYWRvcl9fcHJlY2lvfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+UHJlY2lvPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e1Byb2R1Y3RvU2luZ2xlU3R5bGUudmFsb3JfX3ByZWNpb30+JHtwcm9kdWN0b0RhdGEucHJlY2lvVW5pZGFkfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1Byb2R1Y3RvU2luZ2xlU3R5bGUuaW5kaWNhZG9yX19jYW50aWRhZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17UHJvZHVjdG9TaW5nbGVTdHlsZS50aXR1bG9fX2luZGljYWRvckNhbnRpZGFkKycgJytgdGV4dC1jZW50ZXJgfT5TZWxlY2Npb27DoSB0YW1hw7FvPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17UHJvZHVjdG9TaW5nbGVTdHlsZS5jYWphX2NhbnRpZGFkS2cgKyAnICcgK1Byb2R1Y3RvU2luZ2xlU3R5bGUuYWN0aXZlfSBvbkNsaWNrPXsoKT0+Y2hhbmdlUGVzbygwLGAke3Blc299YCxwcmVjaW9VbmlkYWQsYCR7dGFtYcOxb31gLGlkU3ViUHJvZHVjdG8sYCR7c3ViUHJvZHVjdG99YCl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17UHJvZHVjdG9TaW5nbGVTdHlsZS5raWxvc30+e3Byb2R1Y3RvRGF0YS5wZXNvfSBLZ3M8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtQcm9kdWN0b1NpbmdsZVN0eWxlLnByZWNpb0RlbEtnfT4ke3Byb2R1Y3RvRGF0YS5wcmVjaW9VbmlkYWR9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cHJvcHMuc3ViUHJvZHVjdG9zLm1hcCgobXAsa2V5KT0+KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtrZXl9IGNsYXNzTmFtZT17UHJvZHVjdG9TaW5nbGVTdHlsZS5jYWphX2NhbnRpZGFkS2d9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKT0+Y2hhbmdlUGVzbygoa2V5KzEpLGAke21wLnBlc299YCxtcC5wcmVjaW9VbmlkYWQsYCR7bXAudGFtYcOxb31gLG1wLmlkU3ViUHJvZHVjdG8sYCR7bXAuc3ViUHJvZHVjdG99YCl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e1Byb2R1Y3RvU2luZ2xlU3R5bGUua2lsb3N9PnttcC5wZXNvfSBLZ3M8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17UHJvZHVjdG9TaW5nbGVTdHlsZS5wcmVjaW9EZWxLZ30+JHttcC5wcmVjaW9VbmlkYWR9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwIG10LTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAtcHJlcGVuZFwiIG9uQ2xpY2s9eygpPT5jaGFuZ2VDYW50aWRhZCgnLScpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC10ZXh0XCI+LTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJjYW50aWRhZF9wcmRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgdGV4dC1jZW50ZXJcIiB2YWx1ZT17cHJvZHVjdG9EYXRhLmNhbnRpZGFkfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLWFwcGVuZFwiIG9uQ2xpY2s9eygpPT5jaGFuZ2VDYW50aWRhZCgnKycpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC10ZXh0XCI+Kzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgeyhwcm9wcy5sb2FkaW5nKT88ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+PExvYWRlci8+PC9kaXY+OjxidXR0b24gY2xhc3NOYW1lPVwiYm90b24gYmcteWVsbG93XCIgb25DbGljaz17YWdyZWdhckNhcnJpdG99PkNvbXByYXI8L2J1dHRvbj59XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB7KCFtb2RhbElzT3Blbik/bnVsbDpcclxuICAgICAgICAgICAgICAgIDxNb2RhbCBjbG9zZU1vZGFsPXtjbG9zZU1vZGFsQ2Fycml0b30+XHJcbiAgICAgICAgICAgICAgICAgICAgPENhcnJpdG8vPlxyXG4gICAgICAgICAgICAgICAgPC9Nb2RhbD5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gcmVkdWNlcnM9PntcclxuICAgIHJldHVybiByZWR1Y2Vycy5jYXJyaXRvUmVkdWNlcjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsY2Fycml0b0FjdGlvbnMpKFByb2R1Y3RvU2luZ2xlKTsiXSwic291cmNlUm9vdCI6IiJ9