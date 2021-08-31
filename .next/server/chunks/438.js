"use strict";
exports.id = 438;
exports.ids = [438];
exports.modules = {

/***/ 7438:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _CardProducto_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2160);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(79);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _store_actions_ofertasActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1718);
/* harmony import */ var _Loader_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5500);








const Promociones = props => {
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (!props.data.length) {
      props.traerOfertas(8);
    }
  }, []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
    className: "my-5",
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
      className: "text-black",
      children: "Nuestras Promociones"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
      className: "row",
      children: props.loading ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Loader_index__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {}) : props.data.map(oferta => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "col-6 col-md-4 col-xl-3",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_CardProducto_index__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
          imagen: oferta.foto,
          prd: oferta,
          oferta: true
        })
      }, oferta.id))
    })]
  });
};

const mapStateToProps = reducers => {
  return reducers.ofertasReducer;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_3__.connect)(mapStateToProps, _store_actions_ofertasActions__WEBPACK_IMPORTED_MODULE_5__)(Promociones));

/***/ }),

/***/ 1718:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "traerOfertas": () => (/* binding */ traerOfertas),
/* harmony export */   "guardarOfertas": () => (/* binding */ guardarOfertas),
/* harmony export */   "guardarMasOfertas": () => (/* binding */ guardarMasOfertas),
/* harmony export */   "guardarOferta": () => (/* binding */ guardarOferta),
/* harmony export */   "updatePagination": () => (/* binding */ updatePagination)
/* harmony export */ });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1130);
/* harmony import */ var _types_ofertaTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8203);



const traerOfertas = (min = null) => async (dispatch, getState) => {
  dispatch({
    type: _types_ofertaTypes__WEBPACK_IMPORTED_MODULE_0__/* .LOADING */ .br
  });

  try {
    const {
      pagination: {
        desde,
        cantidad
      }
    } = getState().ofertasReducer;
    const res = await fetch(`${_config__WEBPACK_IMPORTED_MODULE_1__/* .API */ .bl}/ofertas?desde=${desde}&cantidad=${min ? min : cantidad}`);
    const data = await res.json();
    return dispatch({
      type: _types_ofertaTypes__WEBPACK_IMPORTED_MODULE_0__/* .TRAER_TODAS */ .eX,
      payload: data.data
    });
  } catch (error) {
    dispatch({
      type: _types_ofertaTypes__WEBPACK_IMPORTED_MODULE_0__/* .ERROR */ .pn,
      payload: error.message
    });
  }
};

const guardarOfertas = data => dispatch => {
  dispatch({
    type: _types_ofertaTypes__WEBPACK_IMPORTED_MODULE_0__/* .TRAER_TODAS */ .eX,
    payload: data
  });
};

const guardarMasOfertas = () => async (dispatch, getState) => {
  dispatch({
    type: _types_ofertaTypes__WEBPACK_IMPORTED_MODULE_0__/* .LOADING_MAS */ .ZJ
  });

  try {
    const {
      desde,
      cantidad
    } = getState().ofertasReducer;
    const res = await fetch(`${_config__WEBPACK_IMPORTED_MODULE_1__/* .API */ .bl}/ofertas?desde=${desde}&cantidad=${cantidad}`);
    const data = await res.json();

    if (data.data.length == 0) {
      return dispatch({
        type: _types_ofertaTypes__WEBPACK_IMPORTED_MODULE_0__/* .OFERTAS_SIN_RESULTADO */ .zz
      });
    }

    return dispatch({
      type: _types_ofertaTypes__WEBPACK_IMPORTED_MODULE_0__/* .TRAER_MAS */ .k,
      payload: data.data
    });
  } catch (error) {
    dispatch({
      type: _types_ofertaTypes__WEBPACK_IMPORTED_MODULE_0__/* .ERROR */ .pn,
      payload: error.message
    });
  }
};

const guardarOferta = data => dispatch => {
  dispatch({
    type: _types_ofertaTypes__WEBPACK_IMPORTED_MODULE_0__/* .TRAER_UNA */ ._N,
    payload: data
  });
};

const updatePagination = () => dispatch => {
  dispatch({
    type: _types_ofertaTypes__WEBPACK_IMPORTED_MODULE_0__/* .OFERTAS_PAGINACION */ .og
  });
};



/***/ }),

/***/ 8203:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "eX": () => (/* binding */ TRAER_TODAS),
/* harmony export */   "_N": () => (/* binding */ TRAER_UNA),
/* harmony export */   "br": () => (/* binding */ LOADING),
/* harmony export */   "pn": () => (/* binding */ ERROR),
/* harmony export */   "ZJ": () => (/* binding */ LOADING_MAS),
/* harmony export */   "k": () => (/* binding */ TRAER_MAS),
/* harmony export */   "og": () => (/* binding */ OFERTAS_PAGINACION),
/* harmony export */   "zz": () => (/* binding */ OFERTAS_SIN_RESULTADO)
/* harmony export */ });
const TRAER_TODAS = 'oferta_traer_todas';
const LOADING = 'oferta_loading';
const ERROR = 'oferta_error';
const TRAER_UNA = 'oferta_traeruna';
const LOADING_MAS = 'oferta_loading_mas';
const TRAER_MAS = 'oferta_traer_mas';
const OFERTAS_PAGINACION = 'ofertas_paginacion';
const OFERTAS_SIN_RESULTADO = 'ofertas_sin_resultado';


/***/ })

};
;