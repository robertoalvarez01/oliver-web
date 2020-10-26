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

  var imagenes = [props.subProducto.foto];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      modalIsOpen = _useState[0],
      setModalIsOpen = _useState[1];

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
    return setProducto(_objectSpread(_objectSpread({}, producto), {}, {
      cantidad: cantidad
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
  return __jsx("div", {
    className: "row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "col-12 col-sm-6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 13
    }
  }, __jsx(_sliderFotos__WEBPACK_IMPORTED_MODULE_4__["default"], {
    imagenes: imagenes,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "col-12 col-sm-6 pt-5" + ' ' + _ProductoSingle_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.descripcionProducto,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 13
    }
  }, __jsx("h3", {
    className: _ProductoSingle_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.marca,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 17
    }
  }, "PURINA EXCELLENT"), __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 17
    }
  }, subProducto), __jsx("div", {
    className: _ProductoSingle_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.precios + ' ' + "d-flex my-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: _ProductoSingle_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.indicador__precio,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 21
    }
  }, __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 25
    }
  }, "Precio"), __jsx("span", {
    className: _ProductoSingle_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.valor__precio,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 25
    }
  }, "$", precioUnidad)), __jsx("div", {
    className: _ProductoSingle_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.indicador__cantidad,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 21
    }
  }, __jsx("p", {
    className: _ProductoSingle_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.titulo__indicadorCantidad + ' ' + "text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 25
    }
  }, "Seleccion\xE1 tama\xF1o"), __jsx("div", {
    className: "row justify-content-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
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
      lineNumber: 75,
      columnNumber: 29
    }
  }, __jsx("p", {
    className: _ProductoSingle_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.kilos,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 33
    }
  }, "3 Kgs"), __jsx("span", {
    className: _ProductoSingle_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.precioDelKg,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
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
      lineNumber: 79,
      columnNumber: 29
    }
  }, __jsx("p", {
    className: _ProductoSingle_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.kilos,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 33
    }
  }, "5 Kgs"), __jsx("span", {
    className: _ProductoSingle_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.precioDelKg,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
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
      lineNumber: 83,
      columnNumber: 29
    }
  }, __jsx("p", {
    className: _ProductoSingle_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.kilos,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 33
    }
  }, "9 Kgs"), __jsx("span", {
    className: _ProductoSingle_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.precioDelKg,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
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
      lineNumber: 87,
      columnNumber: 29
    }
  }, __jsx("p", {
    className: _ProductoSingle_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.kilos,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 33
    }
  }, "11 Kgs"), __jsx("span", {
    className: _ProductoSingle_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.precioDelKg,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 33
    }
  }, "$2000"))), __jsx("div", {
    className: "input-group mt-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
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
      lineNumber: 93,
      columnNumber: 29
    }
  }, __jsx("span", {
    className: "input-group-text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 33
    }
  }, "-")), __jsx("input", {
    type: "text",
    id: "cantidad_prd",
    disabled: true,
    className: "form-control text-center",
    value: peso,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
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
      lineNumber: 97,
      columnNumber: 29
    }
  }, __jsx("span", {
    className: "input-group-text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 33
    }
  }, "+"))))), props.loading ? __jsx("div", {
    className: "text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 34
    }
  }, __jsx(_Loader_index__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 63
    }
  })) : __jsx("button", {
    className: "boton bg-yellow",
    onClick: agregarCarrito,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 79
    }
  }, "Comprar")), !modalIsOpen ? null : __jsx(_Modal_index__WEBPACK_IMPORTED_MODULE_8__["default"], {
    closeModal: closeModalCarrito,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 17
    }
  }, __jsx(_Carrito_index__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 21
    }
  })));
};

_s(ProductoSingle, "d4gKB9FOjUoqrytIak5jiPIqzB0=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUHJvZHVjdG9TaW5nbGUvaW5kZXguanMiXSwibmFtZXMiOlsiUHJvZHVjdG9TaW5nbGUiLCJwcm9wcyIsImltYWdlbmVzIiwic3ViUHJvZHVjdG8iLCJmb3RvIiwidXNlU3RhdGUiLCJtb2RhbElzT3BlbiIsInNldE1vZGFsSXNPcGVuIiwiY2hhbmdlQ2FudGlkYWQiLCJhY3Rpb24iLCJpbnB1dENhbnRpZGFkIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImNhbnRpZGFkIiwicGFyc2VJbnQiLCJ2YWx1ZSIsInNldFByb2R1Y3RvIiwicHJvZHVjdG8iLCJjaGFuZ2VQZXNvIiwiaW5kZXgiLCJwZXNvIiwicHJlY2lvIiwiY2FqYVBlc28iLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiUHJvZHVjdG9TaW5nbGVTdHlsZSIsImNhamFfY2FudGlkYWRLZyIsImxlbmd0aCIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwiYWN0aXZlIiwicmVtb3ZlIiwiYWRkIiwiYWdyZWdhckNhcnJpdG8iLCJhZ3JlZ2FyUHJvZHVjdG8iLCJzZXRUaW1lb3V0IiwiY2xvc2VNb2RhbENhcnJpdG8iLCJkZXNjcmlwY2lvbiIsImRlc2NyaXBjaW9uX2Jhc2ljYSIsInByZWNpb1VuaWRhZCIsInN0b2NrIiwidGFtYcOxbyIsImNvbnNvbGUiLCJsb2ciLCJkZXNjcmlwY2lvblByb2R1Y3RvIiwibWFyY2EiLCJwcmVjaW9zIiwiaW5kaWNhZG9yX19wcmVjaW8iLCJ2YWxvcl9fcHJlY2lvIiwiaW5kaWNhZG9yX19jYW50aWRhZCIsInRpdHVsb19faW5kaWNhZG9yQ2FudGlkYWQiLCJraWxvcyIsInByZWNpb0RlbEtnIiwibG9hZGluZyIsIm1hcFN0YXRlVG9Qcm9wcyIsInJlZHVjZXJzIiwiY2Fycml0b1JlZHVjZXIiLCJjb25uZWN0IiwiY2Fycml0b0FjdGlvbnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QywwSEFBTyxDQUFDSCxlQUFELEVBQWlCSSwwREFBakIsQ0FBUCxDQUF3Q3pELGNBQXhDLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvZHVjdG8vWy4uLnByb2R1Y3RvXS5lZjgzNWUzZTdkN2Q1M2Y5MGFmYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgU2xpZGVyRm90b3NQcm9kdWN0byBmcm9tICcuL3NsaWRlckZvdG9zJztcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0ICogYXMgY2Fycml0b0FjdGlvbnMgZnJvbSAnLi4vLi4vLi4vc3RvcmUvYWN0aW9ucy9jYXJyaXRvQWN0aW9ucyc7XHJcbmltcG9ydCBMb2FkZXIgZnJvbSAnLi4vTG9hZGVyL2luZGV4JztcclxuaW1wb3J0IE1vZGFsIGZyb20gJy4uL01vZGFsL2luZGV4JztcclxuaW1wb3J0IENhcnJpdG8gZnJvbSAnLi4vQ2Fycml0by9pbmRleCc7XHJcbmltcG9ydCBQcm9kdWN0b1NpbmdsZVN0eWxlIGZyb20gICcuL1Byb2R1Y3RvU2luZ2xlLm1vZHVsZS5jc3MnO1xyXG5cclxuY29uc3QgUHJvZHVjdG9TaW5nbGUgPSAocHJvcHMpID0+IHtcclxuICAgIGNvbnN0IGltYWdlbmVzID0gW1xyXG4gICAgICAgIHByb3BzLnN1YlByb2R1Y3RvLmZvdG9cclxuICAgIF07XHJcbiAgICBjb25zdCBbbW9kYWxJc09wZW4sIHNldE1vZGFsSXNPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IGNoYW5nZUNhbnRpZGFkID0gYWN0aW9uPT57XHJcbiAgICAgICAgbGV0IGlucHV0Q2FudGlkYWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FudGlkYWRfcHJkJyk7XHJcbiAgICAgICAgbGV0IGNhbnRpZGFkID0gcGFyc2VJbnQoaW5wdXRDYW50aWRhZC52YWx1ZSk7XHJcbiAgICAgICAgaWYoYWN0aW9uID09PSAnLScpe1xyXG4gICAgICAgICAgICBpZihjYW50aWRhZCA8PSAxKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIGNhbnRpZGFkLS07XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGNhbnRpZGFkKys7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlucHV0Q2FudGlkYWQudmFsdWUgPSBjYW50aWRhZDtcclxuICAgICAgICByZXR1cm4gc2V0UHJvZHVjdG8oe1xyXG4gICAgICAgICAgICAuLi5wcm9kdWN0byxcclxuICAgICAgICAgICAgY2FudGlkYWRcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjaGFuZ2VQZXNvID0gKGluZGV4LHBlc28scHJlY2lvKT0+e1xyXG4gICAgICAgIC8vISEhIXJldmlzYXIvLy8vLy9cclxuICAgICAgICAvLyBzZXRQcm9kdWN0byh7XHJcbiAgICAgICAgLy8gICAgIC4uLnByb2R1Y3RvLFxyXG4gICAgICAgIC8vICAgICBwcmVjaW8sXHJcbiAgICAgICAgLy8gICAgIHBlc29cclxuICAgICAgICAvLyB9KTtcclxuICAgICAgICBsZXQgY2FqYVBlc28gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFByb2R1Y3RvU2luZ2xlU3R5bGUuY2FqYV9jYW50aWRhZEtnKTtcclxuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgY2FqYVBlc28ubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgIChjYWphUGVzb1tpbmRleF0uY2xhc3NMaXN0LmNvbnRhaW5zKFByb2R1Y3RvU2luZ2xlU3R5bGUuYWN0aXZlKSk/Y2FqYVBlc29baW5kZXhdLmNsYXNzTGlzdC5yZW1vdmUoUHJvZHVjdG9TaW5nbGVTdHlsZS5hY3RpdmUpOm51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhamFQZXNvW2luZGV4XS5jbGFzc0xpc3QuYWRkKFByb2R1Y3RvU2luZ2xlU3R5bGUuYWN0aXZlKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBhZ3JlZ2FyQ2Fycml0byA9IGFzeW5jKCk9PntcclxuICAgICAgICBwcm9wcy5hZ3JlZ2FyUHJvZHVjdG8ocHJvZHVjdG8pO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBzZXRNb2RhbElzT3Blbih0cnVlKTtcclxuICAgICAgICB9LCAxNzAwKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjbG9zZU1vZGFsQ2Fycml0byA9KCk9PihcclxuICAgICAgICBzZXRNb2RhbElzT3BlbihmYWxzZSlcclxuICAgICk7XHJcbiAgICBcclxuICAgIGNvbnN0IHtkZXNjcmlwY2lvbixkZXNjcmlwY2lvbl9iYXNpY2EsZm90byxwZXNvLHByZWNpb1VuaWRhZCxwcm9kdWN0byxzdG9jayxzdWJQcm9kdWN0byx0YW1hw7FvfSA9IHByb3BzLnN1YlByb2R1Y3RvO1xyXG4gICAgY29uc29sZS5sb2cocHJvcHMpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtc20tNlwiPlxyXG4gICAgICAgICAgICAgICAgPFNsaWRlckZvdG9zUHJvZHVjdG8gaW1hZ2VuZXM9e2ltYWdlbmVzfS8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGNvbC0xMiBjb2wtc20tNiBwdC01YCsnICcrIFByb2R1Y3RvU2luZ2xlU3R5bGUuZGVzY3JpcGNpb25Qcm9kdWN0b30+XHJcbiAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPXtQcm9kdWN0b1NpbmdsZVN0eWxlLm1hcmNhfT5QVVJJTkEgRVhDRUxMRU5UPC9oMz5cclxuICAgICAgICAgICAgICAgIDxoMT57c3ViUHJvZHVjdG99PC9oMT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtQcm9kdWN0b1NpbmdsZVN0eWxlLnByZWNpb3MgKyAnICcgKyBgZC1mbGV4IG15LTNgfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17UHJvZHVjdG9TaW5nbGVTdHlsZS5pbmRpY2Fkb3JfX3ByZWNpb30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlByZWNpbzwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtQcm9kdWN0b1NpbmdsZVN0eWxlLnZhbG9yX19wcmVjaW99PiR7cHJlY2lvVW5pZGFkfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1Byb2R1Y3RvU2luZ2xlU3R5bGUuaW5kaWNhZG9yX19jYW50aWRhZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17UHJvZHVjdG9TaW5nbGVTdHlsZS50aXR1bG9fX2luZGljYWRvckNhbnRpZGFkKycgJytgdGV4dC1jZW50ZXJgfT5TZWxlY2Npb27DoSB0YW1hw7FvPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17UHJvZHVjdG9TaW5nbGVTdHlsZS5jYWphX2NhbnRpZGFkS2cgKyAnICcgK1Byb2R1Y3RvU2luZ2xlU3R5bGUuYWN0aXZlfSBvbkNsaWNrPXsoKT0+Y2hhbmdlUGVzbygwLDMsOTg2KX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtQcm9kdWN0b1NpbmdsZVN0eWxlLmtpbG9zfT4zIEtnczwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e1Byb2R1Y3RvU2luZ2xlU3R5bGUucHJlY2lvRGVsS2d9PiQ5ODY8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtQcm9kdWN0b1NpbmdsZVN0eWxlLmNhamFfY2FudGlkYWRLZ30gb25DbGljaz17KCk9PmNoYW5nZVBlc28oMSw1LDEyMDApfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e1Byb2R1Y3RvU2luZ2xlU3R5bGUua2lsb3N9PjUgS2dzPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17UHJvZHVjdG9TaW5nbGVTdHlsZS5wcmVjaW9EZWxLZ30+JDEyMDA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtQcm9kdWN0b1NpbmdsZVN0eWxlLmNhamFfY2FudGlkYWRLZ30gb25DbGljaz17KCk9PmNoYW5nZVBlc28oMiw5LDE1MDApfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e1Byb2R1Y3RvU2luZ2xlU3R5bGUua2lsb3N9PjkgS2dzPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17UHJvZHVjdG9TaW5nbGVTdHlsZS5wcmVjaW9EZWxLZ30+JDE1MDA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtQcm9kdWN0b1NpbmdsZVN0eWxlLmNhamFfY2FudGlkYWRLZ30gb25DbGljaz17KCk9PmNoYW5nZVBlc28oMywxMSwyMDAwKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtQcm9kdWN0b1NpbmdsZVN0eWxlLmtpbG9zfT4xMSBLZ3M8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtQcm9kdWN0b1NpbmdsZVN0eWxlLnByZWNpb0RlbEtnfT4kMjAwMDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cCBtdC0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLXByZXBlbmRcIiBvbkNsaWNrPXsoKT0+Y2hhbmdlQ2FudGlkYWQoJy0nKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAtdGV4dFwiPi08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiY2FudGlkYWRfcHJkXCIgZGlzYWJsZWQ9e3RydWV9IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCB0ZXh0LWNlbnRlclwiIHZhbHVlPXtwZXNvfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLWFwcGVuZFwiIG9uQ2xpY2s9eygpPT5jaGFuZ2VDYW50aWRhZCgnKycpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC10ZXh0XCI+Kzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgeyhwcm9wcy5sb2FkaW5nKT88ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+PExvYWRlci8+PC9kaXY+OjxidXR0b24gY2xhc3NOYW1lPVwiYm90b24gYmcteWVsbG93XCIgb25DbGljaz17YWdyZWdhckNhcnJpdG99PkNvbXByYXI8L2J1dHRvbj59XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB7KCFtb2RhbElzT3Blbik/bnVsbDpcclxuICAgICAgICAgICAgICAgIDxNb2RhbCBjbG9zZU1vZGFsPXtjbG9zZU1vZGFsQ2Fycml0b30+XHJcbiAgICAgICAgICAgICAgICAgICAgPENhcnJpdG8vPlxyXG4gICAgICAgICAgICAgICAgPC9Nb2RhbD5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gcmVkdWNlcnM9PntcclxuICAgIHJldHVybiByZWR1Y2Vycy5jYXJyaXRvUmVkdWNlcjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsY2Fycml0b0FjdGlvbnMpKFByb2R1Y3RvU2luZ2xlKTsiXSwic291cmNlUm9vdCI6IiJ9