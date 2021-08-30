"use strict";
exports.id = 44;
exports.ids = [44];
exports.modules = {

/***/ 44:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6731);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(79);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _store_actions_carritoActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3088);
/* harmony import */ var _ProductoCarrito__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6190);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8489);









const Carrito = props => {
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    props.traerProductos();
  }, []);

  const showProductos = () => {
    if (!props.productos || props.productos.length === 0) return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
      className: "alert alert-warning",
      children: "Ningun producto en el carrito"
    }); //calculo el subtotal para mostrarlo abajo de todo en el modal

    return props.productos.map((prd, key) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ProductoCarrito__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
      idSubProducto: prd.idSubProducto,
      producto: prd.producto,
      peso: prd.peso,
      total: prd.precio,
      foto: prd.foto,
      cantidad: prd.cantidad,
      eliminarProducto: props.eliminarProducto,
      oferta: prd.oferta
    }, key));
  };

  const finalizarCompra = () => {
    next_router__WEBPACK_IMPORTED_MODULE_1___default().push('/checkout');
  }; //console.log(props);


  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_style__WEBPACK_IMPORTED_MODULE_5__/* .Wrapper */ .im, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
      className: "text-center",
      children: "Mi Carrito"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_style__WEBPACK_IMPORTED_MODULE_5__/* .Productos */ .Oj, {
      children: showProductos()
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_style__WEBPACK_IMPORTED_MODULE_5__/* .Footer */ .$_, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
          children: "Total"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
          children: ["$", props.total]
        })]
      }), props.productos.length == 0 ? null : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
        className: "boton bg-yellow",
        onClick: finalizarCompra,
        type: "button",
        children: "Finalizar compra"
      })]
    })]
  });
};

const mapStateToProps = reducers => {
  return reducers.carritoReducer;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_3__.connect)(mapStateToProps, _store_actions_carritoActions__WEBPACK_IMPORTED_MODULE_6__)(Carrito));

/***/ })

};
;