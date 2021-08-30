"use strict";
exports.id = 865;
exports.ids = [865];
exports.modules = {

/***/ 2642:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(701);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _config_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1130);






const Header = ({
  title,
  metadesc
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
      children: title
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
      name: "theme-color",
      content: "#df8f0e"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
      rel: "icon",
      href: `${_config_index__WEBPACK_IMPORTED_MODULE_3__/* .URL_CLOUD_STORAGE */ .mp}/static/Perro.png`
    }), metadesc ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
      name: "description",
      content: metadesc
    }) : null, /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("script", {
      src: "https://secure.mlstatic.com/sdk/javascript/v1/mercadopago.js"
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);

/***/ }),

/***/ 2379:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "guardar": () => (/* binding */ guardar)
/* harmony export */ });
/* harmony import */ var _types_enviosTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2538);

const guardar = data => async dispatch => {
  dispatch({
    type: _types_enviosTypes__WEBPACK_IMPORTED_MODULE_0__/* .LOADING */ .br
  });

  try {
    if (!data) return dispatch({
      type: _types_enviosTypes__WEBPACK_IMPORTED_MODULE_0__/* .ERROR */ .pn,
      payload: 'Sin datos de envío'
    });
    dispatch({
      type: _types_enviosTypes__WEBPACK_IMPORTED_MODULE_0__/* .GUARDAR */ .Q5,
      payload: `${data}`.toLowerCase()
    });
  } catch (error) {
    dispatch({
      type: _types_enviosTypes__WEBPACK_IMPORTED_MODULE_0__/* .ERROR */ .pn,
      payload: error.message
    });
  }
};

/***/ }),

/***/ 5318:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "init": () => (/* binding */ init),
/* harmony export */   "cambiarMedioDePago": () => (/* binding */ cambiarMedioDePago),
/* harmony export */   "cambiarTipoDeVenta": () => (/* binding */ cambiarTipoDeVenta),
/* harmony export */   "setCostoEnvio": () => (/* binding */ setCostoEnvio)
/* harmony export */ });
/* harmony import */ var _types_ventasTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4361);

const init = () => (dispatch, getState) => {
  const {
    productos,
    cantidad,
    total
  } = getState().carritoReducer;
  const data = {
    productos,
    cantidad,
    subTotal: total
  };
  dispatch({
    type: _types_ventasTypes__WEBPACK_IMPORTED_MODULE_0__/* .TRAER_INFO */ .w1,
    payload: data
  });
};
const cambiarMedioDePago = idMedioDePago => dispatch => {
  return dispatch({
    type: _types_ventasTypes__WEBPACK_IMPORTED_MODULE_0__/* .CAMBIAR_MEDIO_DE_PAGO */ .X$,
    payload: idMedioDePago
  });
};
const cambiarTipoDeVenta = tipo => dispatch => {
  return dispatch({
    type: _types_ventasTypes__WEBPACK_IMPORTED_MODULE_0__/* .CAMBIAR_TIPO_VENTA */ .PF,
    payload: tipo
  });
};
const setCostoEnvio = () => (dispatch, getState) => {
  const {
    zona
  } = getState().zonasReducer;
  const {
    tipos
  } = getState().enviosReducer;
  let dataZona = {};

  if (tipos.normal) {
    dataZona.total = zona ? zona.precio : 0;
    dataZona.tipo = 'Domicilio';
  } else if (tipos.express) {
    dataZona.total = zona ? zona.precio_express : 0;
    dataZona.tipo = 'Express';
    dataZona.idMedioPago = '1';
  } else {
    dataZona.total = 0;
    dataZona.tipo = 'Local';
  }

  dataZona.zona = zona ? zona.idZona : null;
  dataZona.idMedioPago = '1';
  return dispatch({
    type: _types_ventasTypes__WEBPACK_IMPORTED_MODULE_0__/* .ACTUALIZAR_DATOS_ENVIO */ .Nj,
    payload: dataZona
  });
};

/***/ }),

/***/ 1538:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "traerTodas": () => (/* binding */ traerTodas),
/* harmony export */   "seleccionar": () => (/* binding */ seleccionar)
/* harmony export */ });
/* harmony import */ var _config_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1130);
/* harmony import */ var _types_zonasTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1991);


const traerTodas = () => async dispatch => {
  dispatch({
    type: _types_zonasTypes__WEBPACK_IMPORTED_MODULE_0__/* .LOADING */ .br
  });

  try {
    const dataUser = JSON.parse(localStorage.getItem('oliverpetshop_usuario'));
    let myHeaders = new Headers();
    myHeaders.append("token", dataUser.token);
    const zonasApi = await fetch(`${_config_index__WEBPACK_IMPORTED_MODULE_1__/* .API */ .bl}/zonas`, {
      headers: myHeaders
    });
    const dataZonas = await zonasApi.json();
    dispatch({
      type: _types_zonasTypes__WEBPACK_IMPORTED_MODULE_0__/* .TRAER_ZONAS */ .wB,
      payload: dataZonas.data
    });
  } catch (error) {
    dispatch({
      type: _types_zonasTypes__WEBPACK_IMPORTED_MODULE_0__/* .ERROR */ .pn,
      payload: error
    });
  }
};
const seleccionar = id => (dispatch, getState) => {
  if (!id) {
    console.log('aca');
    dispatch({
      type: _types_zonasTypes__WEBPACK_IMPORTED_MODULE_0__/* .LIMPIAR_ACTIVO */ .rG
    });
    return;
  }

  const {
    zonas
  } = getState().zonasReducer;
  let zona = zonas.filter(z => z.idZona == id);

  if (!zona.length) {
    dispatch({
      type: _types_zonasTypes__WEBPACK_IMPORTED_MODULE_0__/* .ERROR */ .pn,
      payload: 'No se encontro la zona'
    });
    return;
  }

  zona = zona[0];
  dispatch({
    type: _types_zonasTypes__WEBPACK_IMPORTED_MODULE_0__/* .SELECCIONAR */ .UH,
    payload: zona
  });
};

/***/ }),

/***/ 2538:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "br": () => (/* binding */ LOADING),
/* harmony export */   "pn": () => (/* binding */ ERROR),
/* harmony export */   "Q5": () => (/* binding */ GUARDAR)
/* harmony export */ });
const LOADING = 'envios_loading';
const ERROR = 'envios_error';
const GUARDAR = 'envios_guardar';


/***/ }),

/***/ 4361:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "X$": () => (/* binding */ CAMBIAR_MEDIO_DE_PAGO),
/* harmony export */   "Nj": () => (/* binding */ ACTUALIZAR_DATOS_ENVIO),
/* harmony export */   "w1": () => (/* binding */ TRAER_INFO),
/* harmony export */   "PF": () => (/* binding */ CAMBIAR_TIPO_VENTA)
/* harmony export */ });
const CAMBIAR_MEDIO_DE_PAGO = 'ventas_cambiar_medio_de_pago';
const ACTUALIZAR_DATOS_ENVIO = 'ventas_actualizar_envio';
const TRAER_INFO = 'ventas_traer_info_venta';
const CAMBIAR_TIPO_VENTA = 'ventas_cambiar_tipo';


/***/ }),

/***/ 1991:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "wB": () => (/* binding */ TRAER_ZONAS),
/* harmony export */   "UH": () => (/* binding */ SELECCIONAR),
/* harmony export */   "br": () => (/* binding */ LOADING),
/* harmony export */   "pn": () => (/* binding */ ERROR),
/* harmony export */   "rG": () => (/* binding */ LIMPIAR_ACTIVO)
/* harmony export */ });
const TRAER_ZONAS = 'TRAER_ZONAS';
const SELECCIONAR = 'SELECCIONAR_ZONA';
const LOADING = 'ZONA_LOADING';
const ERROR = 'ZONA_ERROR';
const LIMPIAR_ACTIVO = 'ZONA_LIMPIAR_ACTIVO';


/***/ })

};
;