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
  console.log(props);
  var imagenes = [props.producto.foto]; //al vector de imagenes, le sumo las imagenes de los productos relacionados al mismo padre

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
      lineNumber: 101,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "col-12 col-sm-6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 13
    }
  }, __jsx(_sliderFotos__WEBPACK_IMPORTED_MODULE_4__["default"], {
    imagenes: imagenes,
    changePeso: changePeso,
    moreProducts: props.moreProducts,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "col-12 col-sm-6 pt-5" + ' ' + _ProductoSingle_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.descripcionProducto,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 13
    }
  }, __jsx("h3", {
    className: _ProductoSingle_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.marca,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 17
    }
  }, productoData.marca), __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 17
    }
  }, productoData.subProducto), __jsx("div", {
    className: _ProductoSingle_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.precios + ' ' + "d-flex my-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: _ProductoSingle_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.indicador__precio,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 21
    }
  }, __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 25
    }
  }, "Precio"), __jsx("span", {
    className: _ProductoSingle_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.valor__precio,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 25
    }
  }, "$", productoData.precioUnidad)), __jsx("div", {
    className: _ProductoSingle_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.indicador__cantidad,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 21
    }
  }, __jsx("p", {
    className: _ProductoSingle_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.titulo__indicadorCantidad + ' ' + "text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 25
    }
  }, "Seleccion\xE1 tama\xF1o"), __jsx("div", {
    className: "row justify-content-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
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
      lineNumber: 117,
      columnNumber: 29
    }
  }, __jsx("p", {
    className: _ProductoSingle_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.kilos,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 33
    }
  }, productoData.peso, " Kgs"), __jsx("span", {
    className: _ProductoSingle_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.precioDelKg,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
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
        lineNumber: 122,
        columnNumber: 33
      }
    }, __jsx("p", {
      className: _ProductoSingle_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.kilos,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124,
        columnNumber: 37
      }
    }, mp.peso, " Kgs"), __jsx("span", {
      className: _ProductoSingle_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.precioDelKg,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 125,
        columnNumber: 37
      }
    }, "$", mp.precioUnidad));
  })), __jsx("div", {
    className: "input-group mt-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
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
      lineNumber: 130,
      columnNumber: 29
    }
  }, __jsx("span", {
    className: "input-group-text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
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
      lineNumber: 133,
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
  }, "+"))))), props.loading ? __jsx("div", {
    className: "text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 34
    }
  }, __jsx(_Loader_index__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 63
    }
  })) : __jsx("button", {
    className: "boton bg-yellow",
    onClick: agregarCarrito,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 79
    }
  }, "Comprar")), !modalIsOpen ? null : __jsx(_Modal_index__WEBPACK_IMPORTED_MODULE_8__["default"], {
    closeModal: closeModalCarrito,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 17
    }
  }, __jsx(_Carrito_index__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUHJvZHVjdG9TaW5nbGUvaW5kZXguanMiXSwibmFtZXMiOlsiUHJvZHVjdG9TaW5nbGUiLCJwcm9wcyIsInByb2R1Y3RvIiwicGVzbyIsInByZWNpb1VuaWRhZCIsImlkU3ViUHJvZHVjdG8iLCJzdWJQcm9kdWN0byIsInRhbWHDsW8iLCJ1c2VFZmZlY3QiLCJmb3RvIiwibWFyY2EiLCJndWFyZGFyUHJvZHVjdG9FblN0YXRlIiwiY29uc29sZSIsImxvZyIsImltYWdlbmVzIiwic3ViUHJvZHVjdG9zIiwibWFwIiwiZGF0YXNwIiwicHVzaCIsInVzZVN0YXRlIiwibW9kYWxJc09wZW4iLCJzZXRNb2RhbElzT3BlbiIsInByb2R1Y3RvRGF0YSIsInNldFByb2R1Y3RvRGF0YSIsImNoYW5nZUNhbnRpZGFkIiwiYWN0aW9uIiwiaW5wdXRDYW50aWRhZCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjYW50aWRhZCIsInBhcnNlSW50IiwidmFsdWUiLCJjaGFuZ2VQZXNvIiwiaW5kZXgiLCJwcmVjaW8iLCJjYWphUGVzbyIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJQcm9kdWN0b1NpbmdsZVN0eWxlIiwiY2FqYV9jYW50aWRhZEtnIiwibGVuZ3RoIiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJhY3RpdmUiLCJyZW1vdmUiLCJhZGQiLCJhZ3JlZ2FyQ2Fycml0byIsImFncmVnYXJQcm9kdWN0byIsInNldFRpbWVvdXQiLCJjbG9zZU1vZGFsQ2Fycml0byIsIm1vcmVQcm9kdWN0cyIsImRlc2NyaXBjaW9uUHJvZHVjdG8iLCJwcmVjaW9zIiwiaW5kaWNhZG9yX19wcmVjaW8iLCJ2YWxvcl9fcHJlY2lvIiwiaW5kaWNhZG9yX19jYW50aWRhZCIsInRpdHVsb19faW5kaWNhZG9yQ2FudGlkYWQiLCJraWxvcyIsInByZWNpb0RlbEtnIiwibXAiLCJrZXkiLCJsb2FkaW5nIiwibWFwU3RhdGVUb1By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QUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxzREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosQ0ExQ1IsQ0FESjtBQWlESCxDQTNJRDs7R0FBTWhELGM7O0tBQUFBLGM7O0FBNklOLElBQU02RCxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUFDLFFBQVEsRUFBRTtBQUM5QixTQUFPQSxRQUFRLENBQUNDLGNBQWhCO0FBQ0gsQ0FGRDs7QUFJZUMsMEhBQU8sQ0FBQ0gsZUFBRCxFQUFpQkksMERBQWpCLENBQVAsQ0FBd0NqRSxjQUF4QyxDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2R1Y3RvL1suLi5wcm9kdWN0b10uMTYyZDIwOTAyMmE0YjhkNTMxOTMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSx1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBTbGlkZXJGb3Rvc1Byb2R1Y3RvIGZyb20gJy4vc2xpZGVyRm90b3MnO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgKiBhcyBjYXJyaXRvQWN0aW9ucyBmcm9tICcuLi8uLi8uLi9zdG9yZS9hY3Rpb25zL2NhcnJpdG9BY3Rpb25zJztcclxuaW1wb3J0IExvYWRlciBmcm9tICcuLi9Mb2FkZXIvaW5kZXgnO1xyXG5pbXBvcnQgTW9kYWwgZnJvbSAnLi4vTW9kYWwvaW5kZXgnO1xyXG5pbXBvcnQgQ2Fycml0byBmcm9tICcuLi9DYXJyaXRvL2luZGV4JztcclxuaW1wb3J0IFByb2R1Y3RvU2luZ2xlU3R5bGUgZnJvbSAgJy4vUHJvZHVjdG9TaW5nbGUubW9kdWxlLmNzcyc7XHJcblxyXG5jb25zdCBQcm9kdWN0b1NpbmdsZSA9IChwcm9wcykgPT4ge1xyXG5cclxuICAgIGNvbnN0IHtwZXNvLHByZWNpb1VuaWRhZCxpZFN1YlByb2R1Y3RvLHN1YlByb2R1Y3RvLHRhbWHDsW99ID0gcHJvcHMucHJvZHVjdG87XHJcbiAgICAvL2NvbnNvbGUubG9nKHByb3BzKTtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3Qge2ZvdG8scHJlY2lvVW5pZGFkLHByb2R1Y3RvLG1hcmNhfSA9IHByb3BzLnByb2R1Y3RvO1xyXG4gICAgICAgIGd1YXJkYXJQcm9kdWN0b0VuU3RhdGUoZm90byxudWxsLHByZWNpb1VuaWRhZCxwcm9kdWN0byxudWxsLG51bGwsbWFyY2EsbnVsbCk7XHJcbiAgICB9LCBbcHJvcHMucHJvZHVjdG9dKVxyXG5cclxuICAgIGNvbnNvbGUubG9nKHByb3BzKTtcclxuICAgIGNvbnN0IGltYWdlbmVzID0gW1xyXG4gICAgICAgIHByb3BzLnByb2R1Y3RvLmZvdG9cclxuICAgIF07XHJcbiAgICAvL2FsIHZlY3RvciBkZSBpbWFnZW5lcywgbGUgc3VtbyBsYXMgaW1hZ2VuZXMgZGUgbG9zIHByb2R1Y3RvcyByZWxhY2lvbmFkb3MgYWwgbWlzbW8gcGFkcmVcclxuICAgIHByb3BzLnN1YlByb2R1Y3Rvcy5tYXAoZGF0YXNwPT57XHJcbiAgICAgICAgaW1hZ2VuZXMucHVzaChkYXRhc3AuZm90byk7XHJcbiAgICB9KVxyXG5cclxuXHJcbiAgICBjb25zdCBbbW9kYWxJc09wZW4sIHNldE1vZGFsSXNPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtwcm9kdWN0b0RhdGEsIHNldFByb2R1Y3RvRGF0YV0gPSB1c2VTdGF0ZSh7fSk7XHJcbiAgICBcclxuXHJcbiAgICBjb25zdCBjaGFuZ2VDYW50aWRhZCA9IGFjdGlvbj0+e1xyXG4gICAgICAgIGxldCBpbnB1dENhbnRpZGFkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbnRpZGFkX3ByZCcpO1xyXG4gICAgICAgIGxldCBjYW50aWRhZCA9IHBhcnNlSW50KGlucHV0Q2FudGlkYWQudmFsdWUpO1xyXG4gICAgICAgIGlmKGFjdGlvbiA9PT0gJy0nKXtcclxuICAgICAgICAgICAgaWYoY2FudGlkYWQgPD0gMSkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICBjYW50aWRhZC0tO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBjYW50aWRhZCsrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpbnB1dENhbnRpZGFkLnZhbHVlID0gY2FudGlkYWQ7XHJcbiAgICAgICAgcmV0dXJuIHNldFByb2R1Y3RvRGF0YSh7XHJcbiAgICAgICAgICAgIC4uLnByb2R1Y3RvRGF0YSxcclxuICAgICAgICAgICAgY2FudGlkYWRcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNoYW5nZVBlc28gPSAoaW5kZXgscGVzbyxwcmVjaW8sdGFtYcOxbyxpZFN1YlByb2R1Y3RvLHN1YlByb2R1Y3RvKT0+e1xyXG4gICAgICAgIGxldCBjYWphUGVzbyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoUHJvZHVjdG9TaW5nbGVTdHlsZS5jYWphX2NhbnRpZGFkS2cpO1xyXG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBjYWphUGVzby5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgKGNhamFQZXNvW2luZGV4XS5jbGFzc0xpc3QuY29udGFpbnMoUHJvZHVjdG9TaW5nbGVTdHlsZS5hY3RpdmUpKT9jYWphUGVzb1tpbmRleF0uY2xhc3NMaXN0LnJlbW92ZShQcm9kdWN0b1NpbmdsZVN0eWxlLmFjdGl2ZSk6bnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2FqYVBlc29baW5kZXhdLmNsYXNzTGlzdC5hZGQoUHJvZHVjdG9TaW5nbGVTdHlsZS5hY3RpdmUpO1xyXG4gICAgICAgIGlmKCFwZXNvIHx8ICFwcmVjaW8gfHwgIXRhbWHDsW8gfHwgIWlkU3ViUHJvZHVjdG8gfHwgIXN1YlByb2R1Y3RvKXtcclxuICAgICAgICAgICAgcmV0dXJuIHNldFByb2R1Y3RvRGF0YSh7XHJcbiAgICAgICAgICAgICAgICAuLi5wcm9kdWN0b0RhdGEsXHJcbiAgICAgICAgICAgICAgICBwZXNvOnByb3BzLnByb2R1Y3RvLnBlc28sXHJcbiAgICAgICAgICAgICAgICBwcmVjaW86cHJvcHMucHJvZHVjdG8ucHJlY2lvVW5pZGFkLFxyXG4gICAgICAgICAgICAgICAgdGFtYcOxbzpudWxsLFxyXG4gICAgICAgICAgICAgICAgaWRTdWJQcm9kdWN0bzpudWxsLFxyXG4gICAgICAgICAgICAgICAgc3ViUHJvZHVjdG86bnVsbFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHNldFByb2R1Y3RvRGF0YSh7XHJcbiAgICAgICAgICAgIC4uLnByb2R1Y3RvRGF0YSxcclxuICAgICAgICAgICAgcGVzbyxcclxuICAgICAgICAgICAgcHJlY2lvLFxyXG4gICAgICAgICAgICB0YW1hw7FvLFxyXG4gICAgICAgICAgICBpZFN1YlByb2R1Y3RvLFxyXG4gICAgICAgICAgICBzdWJQcm9kdWN0b1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGFncmVnYXJDYXJyaXRvID0gYXN5bmMoKT0+e1xyXG4gICAgICAgIHByb3BzLmFncmVnYXJQcm9kdWN0byhwcm9kdWN0b0RhdGEpO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBzZXRNb2RhbElzT3Blbih0cnVlKTtcclxuICAgICAgICB9LCAxNzAwKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjbG9zZU1vZGFsQ2Fycml0byA9KCk9PihcclxuICAgICAgICBzZXRNb2RhbElzT3BlbihmYWxzZSlcclxuICAgICk7XHJcbiAgICBcclxuICAgIGNvbnN0IGd1YXJkYXJQcm9kdWN0b0VuU3RhdGUgPSAoZm90byxwZXNvLHByZWNpb1VuaWRhZCxwcm9kdWN0byx0YW1hw7FvLGlkU3ViUHJvZHVjdG8sbWFyY2Esc3ViUHJvZHVjdG8pPT57XHJcbiAgICAgICAgc2V0UHJvZHVjdG9EYXRhKHtcclxuICAgICAgICAgICAgcHJvZHVjdG8sXHJcbiAgICAgICAgICAgIGZvdG8sXHJcbiAgICAgICAgICAgIHBlc28sXHJcbiAgICAgICAgICAgIGNhbnRpZGFkOjEsXHJcbiAgICAgICAgICAgIHByZWNpb1VuaWRhZCxcclxuICAgICAgICAgICAgdGFtYcOxbyxcclxuICAgICAgICAgICAgaWRTdWJQcm9kdWN0byxcclxuICAgICAgICAgICAgbWFyY2EsXHJcbiAgICAgICAgICAgIHN1YlByb2R1Y3RvXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1zbS02XCI+XHJcbiAgICAgICAgICAgICAgICA8U2xpZGVyRm90b3NQcm9kdWN0byBpbWFnZW5lcz17aW1hZ2VuZXN9IGNoYW5nZVBlc289e2NoYW5nZVBlc299IG1vcmVQcm9kdWN0cz17cHJvcHMubW9yZVByb2R1Y3RzfS8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGNvbC0xMiBjb2wtc20tNiBwdC01YCsnICcrIFByb2R1Y3RvU2luZ2xlU3R5bGUuZGVzY3JpcGNpb25Qcm9kdWN0b30+XHJcbiAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPXtQcm9kdWN0b1NpbmdsZVN0eWxlLm1hcmNhfT57cHJvZHVjdG9EYXRhLm1hcmNhfTwvaDM+XHJcbiAgICAgICAgICAgICAgICA8aDE+e3Byb2R1Y3RvRGF0YS5zdWJQcm9kdWN0b308L2gxPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1Byb2R1Y3RvU2luZ2xlU3R5bGUucHJlY2lvcyArICcgJyArIGBkLWZsZXggbXktM2B9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtQcm9kdWN0b1NpbmdsZVN0eWxlLmluZGljYWRvcl9fcHJlY2lvfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+UHJlY2lvPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e1Byb2R1Y3RvU2luZ2xlU3R5bGUudmFsb3JfX3ByZWNpb30+JHtwcm9kdWN0b0RhdGEucHJlY2lvVW5pZGFkfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1Byb2R1Y3RvU2luZ2xlU3R5bGUuaW5kaWNhZG9yX19jYW50aWRhZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17UHJvZHVjdG9TaW5nbGVTdHlsZS50aXR1bG9fX2luZGljYWRvckNhbnRpZGFkKycgJytgdGV4dC1jZW50ZXJgfT5TZWxlY2Npb27DoSB0YW1hw7FvPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17UHJvZHVjdG9TaW5nbGVTdHlsZS5jYWphX2NhbnRpZGFkS2cgKyAnICcgK1Byb2R1Y3RvU2luZ2xlU3R5bGUuYWN0aXZlfSBvbkNsaWNrPXsoKT0+Y2hhbmdlUGVzbygwLGAke3Blc299YCxwcmVjaW9VbmlkYWQsYCR7dGFtYcOxb31gLGlkU3ViUHJvZHVjdG8sYCR7c3ViUHJvZHVjdG99YCl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17UHJvZHVjdG9TaW5nbGVTdHlsZS5raWxvc30+e3Byb2R1Y3RvRGF0YS5wZXNvfSBLZ3M8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtQcm9kdWN0b1NpbmdsZVN0eWxlLnByZWNpb0RlbEtnfT4ke3Byb2R1Y3RvRGF0YS5wcmVjaW9VbmlkYWR9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cHJvcHMuc3ViUHJvZHVjdG9zLm1hcCgobXAsa2V5KT0+KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtrZXl9IGNsYXNzTmFtZT17UHJvZHVjdG9TaW5nbGVTdHlsZS5jYWphX2NhbnRpZGFkS2d9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKT0+Y2hhbmdlUGVzbygoa2V5KzEpLGAke21wLnBlc299YCxtcC5wcmVjaW9VbmlkYWQsYCR7bXAudGFtYcOxb31gLG1wLmlkU3ViUHJvZHVjdG8sYCR7bXAuc3ViUHJvZHVjdG99YCl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e1Byb2R1Y3RvU2luZ2xlU3R5bGUua2lsb3N9PnttcC5wZXNvfSBLZ3M8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17UHJvZHVjdG9TaW5nbGVTdHlsZS5wcmVjaW9EZWxLZ30+JHttcC5wcmVjaW9VbmlkYWR9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwIG10LTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAtcHJlcGVuZFwiIG9uQ2xpY2s9eygpPT5jaGFuZ2VDYW50aWRhZCgnLScpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC10ZXh0XCI+LTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJjYW50aWRhZF9wcmRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgdGV4dC1jZW50ZXJcIiB2YWx1ZT17cHJvZHVjdG9EYXRhLmNhbnRpZGFkfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLWFwcGVuZFwiIG9uQ2xpY2s9eygpPT5jaGFuZ2VDYW50aWRhZCgnKycpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC10ZXh0XCI+Kzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgeyhwcm9wcy5sb2FkaW5nKT88ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+PExvYWRlci8+PC9kaXY+OjxidXR0b24gY2xhc3NOYW1lPVwiYm90b24gYmcteWVsbG93XCIgb25DbGljaz17YWdyZWdhckNhcnJpdG99PkNvbXByYXI8L2J1dHRvbj59XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB7KCFtb2RhbElzT3Blbik/bnVsbDpcclxuICAgICAgICAgICAgICAgIDxNb2RhbCBjbG9zZU1vZGFsPXtjbG9zZU1vZGFsQ2Fycml0b30+XHJcbiAgICAgICAgICAgICAgICAgICAgPENhcnJpdG8vPlxyXG4gICAgICAgICAgICAgICAgPC9Nb2RhbD5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gcmVkdWNlcnM9PntcclxuICAgIHJldHVybiByZWR1Y2Vycy5jYXJyaXRvUmVkdWNlcjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsY2Fycml0b0FjdGlvbnMpKFByb2R1Y3RvU2luZ2xlKTsiXSwic291cmNlUm9vdCI6IiJ9