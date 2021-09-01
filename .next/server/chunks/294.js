"use strict";
exports.id = 294;
exports.ids = [294];
exports.modules = {

/***/ 3687:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



const Error = ({
  message
}) => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
    className: "alert alert-warning text-center",
    children: message
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Error);

/***/ }),

/***/ 8280:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(79);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1433);






const SliderFotosProducto = props => {
  const {
    0: imagenActiva,
    1: setImagenActiva
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    setImagenActiva(props.imagenes[0]);
  }, []);

  const setImagenActive = (event, key, peso, precioUnidad, tamaño, idSubProducto, subProducto, stock, codigoBarra) => {
    const imagen = event.target;
    const parentElement = event.srcElement.parentNode;

    for (let index = 0; index < parentElement.children.length; index++) {
      parentElement.children[index].classList.remove('active');
    }

    imagen.classList.add('active');
    const urlPhoto = imagen.getAttribute('src');
    setImagenActiva(urlPhoto);
    props.changePeso(key, `${peso}`, precioUnidad, `${tamaño}`, idSubProducto, `${subProducto}`, stock, codigoBarra);
  }; //console.log(imagenActiva);


  console.log(imagenActiva);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_style__WEBPACK_IMPORTED_MODULE_3__/* .Slider */ .iR, {
    className: "row",
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_style__WEBPACK_IMPORTED_MODULE_3__/* .Items */ .ob, {
      className: "col-12 col-md-3 text-center pt-5",
      children: props.oferta ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
        src: props.imagenes[0],
        alt: props.descripcion,
        className: "active"
      }) : props.imagenes.map((img, key) => key == 0 ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
        src: img,
        onClick: () => setImagenActive(event, key),
        alt: "prd",
        className: "active"
      }, key) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
        src: img,
        onClick: () => setImagenActive(event, key, `${props.subProductos[key].peso}`, props.subProductos[key].precioUnidad, `${props.subProductos[key].tamaño}`, props.subProductos[key].idSubProducto, `${props.subProductos[key].subProducto}`, `${props.subProductos[key].stock}`, `${props.subProductos[key].codigoBarra}`),
        alt: props.subProductos[key].subProducto
      }, key))
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_style__WEBPACK_IMPORTED_MODULE_3__/* .ImagenActiva */ .Bx, {
      className: "col-12 col-md-9",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
        src: imagenActiva,
        className: "img-fluid"
      })
    })]
  });
};

const mapStateToProps = ({
  productosReducer
}) => {
  return {
    productosReducer
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_2__.connect)(mapStateToProps, {})(SliderFotosProducto));

/***/ }),

/***/ 1433:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "e$": () => (/* binding */ Boton),
/* harmony export */   "iR": () => (/* binding */ Slider),
/* harmony export */   "ob": () => (/* binding */ Items),
/* harmony export */   "Bx": () => (/* binding */ ImagenActiva)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9914);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Boton = styled_components__WEBPACK_IMPORTED_MODULE_0___default().button.withConfig({
  displayName: "style__Boton",
  componentId: "sc-bodl65-0"
})(["color:", ";background-color:", ";border:1px solid var(--oliver);transition:all 0.5s ease;padding:5px 10px;font-size:12px;width:100%;font-size:16px;border-radius:10px;margin:5px 0px;"], props => props.disabled ? 'gray' : 'white', props => props.disabled ? 'var(--secondary)' : 'var(--oliver)'); //slider

const Slider = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "style__Slider",
  componentId: "sc-bodl65-1"
})(["@media (max-width:768px){flex-direction:column-reverse;}"]);
const Items = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "style__Items",
  componentId: "sc-bodl65-2"
})(["height:500px;overflow-y:auto;overflow-x:hidden;::-webkit-scrollbar{display:none;}> img{height:120px;width:100%;object-fit:contain;cursor:pointer;&.active{border:2px solid var(--oliver);}&:hover{filter:brightness(70%);transition:all 0.5s ease;}}@media (max-width:768px){> img{width:auto;}height:180px;}"]);
const ImagenActiva = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "style__ImagenActiva",
  componentId: "sc-bodl65-3"
})(["height:500px;text-align:center;> img{height:100%;object-fit:cover;}@media (max-width:768px){height:300px;overflow-y:hidden;overflow-x:auto;}"]);

/***/ })

};
;