"use strict";
exports.id = 190;
exports.ids = [190];
exports.modules = {

/***/ 6190:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8489);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(887);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(799);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__);








const ProductoCarrito = props => {
  const {
    foto,
    producto,
    peso,
    total,
    idSubProducto,
    cantidad,
    fecha,
    totalExplicito,
    eliminarProducto,
    oferta
  } = props;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_style__WEBPACK_IMPORTED_MODULE_2__/* .Card */ .Zb, {
    className: "col-12",
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_style__WEBPACK_IMPORTED_MODULE_2__/* .FotoProducto */ .UR, {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
        src: foto,
        alt: producto
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_style__WEBPACK_IMPORTED_MODULE_2__/* .InfoProducto */ .$V, {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
        children: producto
      }), oferta ? null : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
          className: "d-block text-muted",
          children: fecha ? fecha : `x ${peso}Kg`
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
          className: "text-muted",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
            children: cantidad
          }), " ", cantidad > 1 ? 'unidades' : 'unidad']
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_style__WEBPACK_IMPORTED_MODULE_2__/* .TotalProducto */ .Mh, {
      showIcon: eliminarProducto ? "true" : "false",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
        className: "text-black",
        children: ["$", totalExplicito ? totalExplicito : total * cantidad]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__.FontAwesomeIcon, {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faTrash,
        onClick: () => props.eliminarProducto(idSubProducto)
      })]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductoCarrito);

/***/ }),

/***/ 8489:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "im": () => (/* binding */ Wrapper),
/* harmony export */   "Oj": () => (/* binding */ Productos),
/* harmony export */   "$_": () => (/* binding */ Footer),
/* harmony export */   "Zb": () => (/* binding */ Card),
/* harmony export */   "UR": () => (/* binding */ FotoProducto),
/* harmony export */   "$V": () => (/* binding */ InfoProducto),
/* harmony export */   "Mh": () => (/* binding */ TotalProducto)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9914);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "style__Wrapper",
  componentId: "sc-1hvw1h0-0"
})(["height:400px;position:relative;"]);
const Productos = styled_components__WEBPACK_IMPORTED_MODULE_0___default().section.withConfig({
  displayName: "style__Productos",
  componentId: "sc-1hvw1h0-1"
})(["max-height:275px;overflow-y:scroll;::-webkit-scrollbar{width:5px;}::-webkit-scrollbar-thumb{background:var(--oliver);border-radius:4px;}::-webkit-scrollbar-thumb:hover{background:#b3b3b3;box-shadow:0 0 2px 1px rgba(0,0,0,0.2);}"]);
const Footer = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "style__Footer",
  componentId: "sc-1hvw1h0-2"
})(["font-family:'Quicksand',sans-serif;position:absolute;bottom:0;width:100%;> section{display:flex;justify-content:space-between;> span{font-weight:600;color:var(--oliver);}}> button{color:white;background-color:var(--oliver);border:1px solid var(--oliver);transition:all 0.5s ease;padding:5px 10px;font-size:12px;width:100%;font-size:16px;border-radius:10px;margin:5px 0px;}"]);
const Card = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "style__Card",
  componentId: "sc-1hvw1h0-3"
})(["display:flex;align-items:center;justify-content:space-between;font-family:'Quicksand',sans-serif;box-shadow:0px 2px 1px -1px rgba(228,224,224,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12);padding:5px;"]);
const FotoProducto = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "style__FotoProducto",
  componentId: "sc-1hvw1h0-4"
})(["> img{width:200px;height:100px;object-fit:contain;@media(max-width:768px){width:40px;height:50px;}}"]);
const InfoProducto = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "style__InfoProducto",
  componentId: "sc-1hvw1h0-5"
})(["font-size:13px;>p{margin:0;font-weight:600;color:#636363;}"]);
const TotalProducto = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "style__TotalProducto",
  componentId: "sc-1hvw1h0-6"
})(["display:flex;flex-direction:column;justify-content:center;align-items:center;> svg{width:20px;color:red;display:", ";}"], props => props.showIcon == "true" ? 'block' : 'none');

/***/ })

};
;