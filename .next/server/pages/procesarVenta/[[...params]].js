module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/GLu":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CAMBIAR_MEDIO_DE_PAGO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ACTUALIZAR_DATOS_ENVIO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return TRAER_INFO; });
const CAMBIAR_MEDIO_DE_PAGO = 'ventas_cambiar_medio_de_pago';
const ACTUALIZAR_DATOS_ENVIO = 'ventas_actualizar_envio';
const TRAER_INFO = 'ventas_traer_info_venta';


/***/ }),

/***/ 6:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("aQxn");


/***/ }),

/***/ "CBiN":
/***/ (function(module, exports) {

module.exports = require("sweetalert2");

/***/ }),

/***/ "HJQg":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "IbKK":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "guardar", function() { return guardar; });
/* harmony import */ var _types_enviosTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("pzYh");

const guardar = data => async dispatch => {
  dispatch({
    type: _types_enviosTypes__WEBPACK_IMPORTED_MODULE_0__[/* LOADING */ "c"]
  });

  try {
    if (!data) return dispatch({
      type: _types_enviosTypes__WEBPACK_IMPORTED_MODULE_0__[/* ERROR */ "a"],
      payload: 'Sin datos de envío'
    });
    dispatch({
      type: _types_enviosTypes__WEBPACK_IMPORTED_MODULE_0__[/* GUARDAR */ "b"],
      payload: `${data}`.toLowerCase()
    });
  } catch (error) {
    dispatch({
      type: _types_enviosTypes__WEBPACK_IMPORTED_MODULE_0__[/* ERROR */ "a"],
      payload: error.message
    });
  }
};

/***/ }),

/***/ "L/dm":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return TRAER_ZONAS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return SELECCIONAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return LOADING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return LIMPIAR_ACTIVO; });
const TRAER_ZONAS = 'TRAER_ZONAS';
const SELECCIONAR = 'SELECCIONAR_ZONA';
const LOADING = 'ZONA_LOADING';
const ERROR = 'ZONA_ERROR';
const LIMPIAR_ACTIVO = 'ZONA_LIMPIAR_ACTIVO';


/***/ }),

/***/ "VMmF":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "traerTodas", function() { return traerTodas; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "seleccionar", function() { return seleccionar; });
/* harmony import */ var _config_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("rOcY");
/* harmony import */ var _types_zonasTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("L/dm");


const traerTodas = () => async dispatch => {
  dispatch({
    type: _types_zonasTypes__WEBPACK_IMPORTED_MODULE_1__[/* LOADING */ "c"]
  });

  try {
    const dataUser = JSON.parse(localStorage.getItem('oliverpetshop_usuario'));
    let myHeaders = new Headers();
    myHeaders.append("token", dataUser.token);
    const zonasApi = await fetch(`${_config_index__WEBPACK_IMPORTED_MODULE_0__[/* API */ "a"]}/zonas`, {
      headers: myHeaders
    });
    const dataZonas = await zonasApi.json();
    dispatch({
      type: _types_zonasTypes__WEBPACK_IMPORTED_MODULE_1__[/* TRAER_ZONAS */ "e"],
      payload: dataZonas.data
    });
  } catch (error) {
    dispatch({
      type: _types_zonasTypes__WEBPACK_IMPORTED_MODULE_1__[/* ERROR */ "a"],
      payload: error
    });
  }
};
const seleccionar = id => (dispatch, getState) => {
  if (!id) {
    console.log('aca');
    dispatch({
      type: _types_zonasTypes__WEBPACK_IMPORTED_MODULE_1__[/* LIMPIAR_ACTIVO */ "b"]
    });
    return;
  }

  const {
    zonas
  } = getState().zonasReducer;
  let zona = zonas.filter(z => z.idZona == id);

  if (!zona.length) {
    dispatch({
      type: _types_zonasTypes__WEBPACK_IMPORTED_MODULE_1__[/* ERROR */ "a"],
      payload: 'No se encontro la zona'
    });
    return;
  }

  zona = zona[0];
  dispatch({
    type: _types_zonasTypes__WEBPACK_IMPORTED_MODULE_1__[/* SELECCIONAR */ "d"],
    payload: zona
  });
};

/***/ }),

/***/ "XOuL":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("HJQg");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


const Loader = props => {
  return __jsx("div", {
    className: "jsx-3824642466" + " " + "lds-ring"
  }, __jsx("div", {
    className: "jsx-3824642466"
  }), __jsx("div", {
    className: "jsx-3824642466"
  }), __jsx("div", {
    className: "jsx-3824642466"
  }), __jsx("div", {
    className: "jsx-3824642466"
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3824642466"
  }, [".lds-ring.jsx-3824642466{display:inline-block;position:relative;width:80px;height:80px;}", ".lds-ring.jsx-3824642466 div.jsx-3824642466{box-sizing:border-box;display:block;position:absolute;width:54px;height:54px;margin:8px;border:7px solid #fff;border-radius:50%;-webkit-animation:lds-ring-jsx-3824642466 1.2s cubic-bezier(0.5,0,0.5,1) infinite;animation:lds-ring-jsx-3824642466 1.2s cubic-bezier(0.5,0,0.5,1) infinite;border-color:#FFB347 transparent transparent transparent;}", ".lds-ring.jsx-3824642466 div.jsx-3824642466:nth-child(1){-webkit-animation-delay:-0.45s;animation-delay:-0.45s;}", ".lds-ring.jsx-3824642466 div.jsx-3824642466:nth-child(2){-webkit-animation-delay:-0.3s;animation-delay:-0.3s;}", ".lds-ring.jsx-3824642466 div.jsx-3824642466:nth-child(3){-webkit-animation-delay:-0.15s;animation-delay:-0.15s;}", "@-webkit-keyframes lds-ring-jsx-3824642466{0%{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}100%{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}", "@keyframes lds-ring-jsx-3824642466{0%{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}100%{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}"]));
};

/* harmony default export */ __webpack_exports__["a"] = (Loader);

/***/ }),

/***/ "aQxn":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("HJQg");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_components_Head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("k2JI");
/* harmony import */ var _src_components_Loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("XOuL");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("h74D");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _store_actions_carritoActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("nhAV");
/* harmony import */ var _store_actions_enviosActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("IbKK");
/* harmony import */ var _store_actions_zonasActions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("VMmF");
/* harmony import */ var _store_actions_ventasActions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("mz+u");
/* harmony import */ var _config_index__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("rOcY");
/* harmony import */ var _src_components_Error__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("t0wy");


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;











const Swal = __webpack_require__("CBiN");

const {
  traerProductos: carritoTraerProductos
} = _store_actions_carritoActions__WEBPACK_IMPORTED_MODULE_5__;
const {
  guardar: enviosGuardar
} = _store_actions_enviosActions__WEBPACK_IMPORTED_MODULE_6__;
const {
  seleccionar: zonasGuardar,
  traerTodas: traerZonas
} = _store_actions_zonasActions__WEBPACK_IMPORTED_MODULE_7__;
const {
  init: inicializarStoreVenta,
  setCostoEnvio: setDataEnvioEnVenta
} = _store_actions_ventasActions__WEBPACK_IMPORTED_MODULE_8__;

const ProcesarVenta = props => {
  const {
    0: error,
    1: setError
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    carritoReducer,
    ventaReducer,
    carritoTraerProductos,
    enviosGuardar,
    zonasGuardar,
    inicializarStoreVenta,
    setDataEnvioEnVenta,
    traerZonas,
    payment_id,
    status,
    collection_id
  } = props;
  const {
    usuario,
    logueado
  } = props.usuarioReducer;
  const {
    zonas,
    zona
  } = props.zonasReducer;
  const {
    idMedioPago,
    tipoEnvio,
    productos,
    cantidad,
    subtotal,
    porcentaje_descuento,
    descuento,
    total
  } = props.ventaReducer;
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (status == 'approved') {
      return traerZonas();
    }

    setError(true);
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (logueado && zonas.length > 0) {
      const dataEnvio = JSON.parse(localStorage.getItem('dataEnvio'));
      enviosGuardar(dataEnvio.tipo);
      zonasGuardar(dataEnvio.zona);
      carritoTraerProductos();
    }
  }, [logueado, zonas]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (carritoReducer.productos.length > 0) {
      inicializarStoreVenta();
      setDataEnvioEnVenta();
    }
  }, [carritoReducer.productos]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (!tipoEnvio || !productos.length || cantidad == 0 || total == 0) {
      console.log('no se puede completar la operacion');
      return;
    }

    const {
      idUsuario
    } = usuario;
    let dataToRequest = {
      envio: {
        idZona: zona.idZona,
        tipo: tipoEnvio
      },
      venta: {
        subtotal,
        porcentaje_descuento,
        descuento,
        total,
        productos,
        collection_id,
        payment_id,
        idMedioPago,
        idUsuario
      }
    }; //console.log(dataToRequest);

    registrarVenta(dataToRequest);
  }, [ventaReducer]);

  const registrarVenta = async data => {
    try {
      const headers = new Headers();
      headers.append('token', usuario.token);
      headers.append("Content-Type", "application/json");
      let url = `${_config_index__WEBPACK_IMPORTED_MODULE_9__[/* API */ "a"]}/ventas/registrarVenta`;
      const reqVenta = await fetch(url, {
        headers,
        method: 'POST',
        body: JSON.stringify(data)
      });

      if (reqVenta.status == 200) {
        localStorage.removeItem('dataEnvio');
        localStorage.removeItem('carrito');
        Swal.fire('Listo', 'Felicidades, tu compra se registró con éxito. En breve nos comunicaremos con usted para informarle el estado de su compra vía email.', 'success').then(() => window.location.assign('/'));
      } else {
        setError(true);
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return error ? __jsx(_src_components_Error__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"], {
    message: "Ha ocurrido un error, intentalo mas tarde"
  }) : __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_src_components_Head__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    title: "Finalizacion de compra",
    metadesc: ""
  }), __jsx("div", {
    className: "jsx-2063553454" + " " + "wrapper"
  }, __jsx(_src_components_Loader__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], null), __jsx("p", {
    className: "jsx-2063553454"
  }, "Su compra esta siento procesada, aguarde unos segundos...")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2063553454"
  }, [".wrapper.jsx-2063553454{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:90vh;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}"]));
};

ProcesarVenta.getInitialProps = async ({
  query
}) => {
  const {
    collection_id,
    payment_id,
    status
  } = query;
  return {
    collection_id,
    payment_id,
    status
  };
};

const mapStateToProps = ({
  carritoReducer,
  enviosReducer,
  usuarioReducer,
  zonasReducer,
  ventaReducer
}) => {
  return {
    carritoReducer,
    enviosReducer,
    usuarioReducer,
    zonasReducer,
    ventaReducer
  };
};

const mapDispatchToProps = {
  enviosGuardar,
  carritoTraerProductos,
  zonasGuardar,
  setDataEnvioEnVenta,
  inicializarStoreVenta,
  traerZonas
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["connect"])(mapStateToProps, mapDispatchToProps)(ProcesarVenta));

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "h74D":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "k2JI":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("xnum");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("rOcY");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Header = ({
  title,
  metadesc
}) => {
  return __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, null, __jsx("title", null, title), __jsx("meta", {
    name: "theme-color",
    content: "#df8f0e"
  }), __jsx("link", {
    rel: "icon",
    href: `${_config_index__WEBPACK_IMPORTED_MODULE_2__[/* URL_CLOUD_STORAGE */ "e"]}/static/Perro.png`
  }), metadesc ? __jsx("meta", {
    name: "description",
    content: metadesc
  }) : null, __jsx("script", {
    src: "https://secure.mlstatic.com/sdk/javascript/v1/mercadopago.js"
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (Header);

/***/ }),

/***/ "kqUl":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return TRAER_PRODUCTOS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AGREGAR_PRODUCTO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ELIMINAR_PRODUCTO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return LOADING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ERROR; });
const TRAER_PRODUCTOS = 'carrito_traer_todos_carrito';
const AGREGAR_PRODUCTO = 'carrito_agregar_producto';
const ELIMINAR_PRODUCTO = 'carrito_eliminar_producto';
const LOADING = 'carrito_loading';
const ERROR = 'carrito_error';


/***/ }),

/***/ "mz+u":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "init", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cambiarMedioDePago", function() { return cambiarMedioDePago; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCostoEnvio", function() { return setCostoEnvio; });
/* harmony import */ var _types_ventasTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("/GLu");

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
    type: _types_ventasTypes__WEBPACK_IMPORTED_MODULE_0__[/* TRAER_INFO */ "c"],
    payload: data
  });
};
const cambiarMedioDePago = idMedioDePago => dispatch => {
  return dispatch({
    type: _types_ventasTypes__WEBPACK_IMPORTED_MODULE_0__[/* CAMBIAR_MEDIO_DE_PAGO */ "b"],
    payload: idMedioDePago
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
    type: _types_ventasTypes__WEBPACK_IMPORTED_MODULE_0__[/* ACTUALIZAR_DATOS_ENVIO */ "a"],
    payload: dataZona
  });
};

/***/ }),

/***/ "nhAV":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "traerProductos", function() { return traerProductos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "agregarProducto", function() { return agregarProducto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "eliminarProducto", function() { return eliminarProducto; });
/* harmony import */ var _types_carritoTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("kqUl");
//import {API} from '../config/index';

const traerProductos = () => async dispatch => {
  dispatch({
    type: _types_carritoTypes__WEBPACK_IMPORTED_MODULE_0__[/* LOADING */ "d"]
  });

  try {
    const productos = await JSON.parse(localStorage.getItem('carrito'));
    let total = 0;
    productos.forEach(prd => {
      total += parseFloat(prd.precio * prd.cantidad);
    });
    let cantidad = productos.length;
    let payloadData = {
      productos,
      total,
      cantidad
    };
    return dispatch({
      type: _types_carritoTypes__WEBPACK_IMPORTED_MODULE_0__[/* TRAER_PRODUCTOS */ "e"],
      payload: payloadData
    });
  } catch (error) {
    return dispatch({
      type: _types_carritoTypes__WEBPACK_IMPORTED_MODULE_0__[/* ERROR */ "c"],
      payload: error
    });
  }
};
const agregarProducto = producto => async (dispatch, getState) => {
  dispatch({
    type: _types_carritoTypes__WEBPACK_IMPORTED_MODULE_0__[/* LOADING */ "d"]
  });

  try {
    //productos que hay en el reducer
    let {
      productos
    } = getState().carritoReducer;
    let listProductosUpgrade;
    let productoRepetido = productos.filter(res => res.idSubProducto == producto.idSubProducto);

    if (productoRepetido.length > 0) {
      //si se intenta agregar de nuevo el mismo producto, se suma la cantidad, no todo el producto.
      productoRepetido[0].cantidad = productoRepetido[0].cantidad + producto.cantidad;
      let restantes = productos.filter(newRes => newRes.idSubProducto != productoRepetido[0].idSubProducto);

      if (restantes.length > 0) {
        listProductosUpgrade = [...restantes, productoRepetido[0]];
      } else {
        listProductosUpgrade = [productoRepetido[0]];
      }
    } else {
      listProductosUpgrade = [...productos, producto];
    } //actualizo localstorage


    localStorage.setItem('carrito', JSON.stringify(listProductosUpgrade)); //calculo el subtotal

    const prds = JSON.parse(localStorage.getItem('carrito'));
    let total = 0;
    prds.forEach(prd => {
      total += parseFloat(prd.precio * prd.cantidad);
    });
    let cantidad = listProductosUpgrade.length;
    let payloadData = {
      listProductosUpgrade,
      total,
      cantidad
    };
    setTimeout(() => {
      dispatch({
        type: _types_carritoTypes__WEBPACK_IMPORTED_MODULE_0__[/* AGREGAR_PRODUCTO */ "a"],
        payload: payloadData
      });
    }, 1500);
  } catch (error) {
    dispatch({
      type: _types_carritoTypes__WEBPACK_IMPORTED_MODULE_0__[/* ERROR */ "c"],
      payload: error
    });
  }
};
const eliminarProducto = idSubProducto => async (dispatch, getState) => {
  dispatch({
    type: _types_carritoTypes__WEBPACK_IMPORTED_MODULE_0__[/* LOADING */ "d"]
  });

  try {
    const {
      productos
    } = getState().carritoReducer; //filtro los productos que no tengan el idProducto que se recibió. entonces elimino ese producto y actualizo el reducer.

    const newProductos = productos.filter(newArray => newArray.idSubProducto !== idSubProducto); //console.log(newProductos);

    localStorage.setItem('carrito', JSON.stringify(newProductos)); //calculo el subtotal

    const prds = JSON.parse(localStorage.getItem('carrito'));
    let total = 0;
    prds.forEach(prd => {
      total += parseFloat(prd.precio * prd.cantidad);
    });
    let payloadData = {
      newProductos,
      total,
      cantidad: prds.length
    };
    dispatch({
      type: _types_carritoTypes__WEBPACK_IMPORTED_MODULE_0__[/* ELIMINAR_PRODUCTO */ "b"],
      payload: payloadData
    });
  } catch (error) {
    dispatch({
      type: _types_carritoTypes__WEBPACK_IMPORTED_MODULE_0__[/* ERROR */ "c"],
      payload: error
    });
  }
};

/***/ }),

/***/ "pzYh":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return LOADING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return GUARDAR; });
const LOADING = 'envios_loading';
const ERROR = 'envios_error';
const GUARDAR = 'envios_guardar';


/***/ }),

/***/ "rOcY":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return API; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return PUBLIC_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return URL_CLOUD_STORAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return GOOGLE_CLIENT_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return MP_AC_TOKEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return URL_PROCESAR_VENTA; });
const API = 'https://api.oliverpetshop.com.ar';
const PUBLIC_URL = "https://developers.oliverpetshop.com.ar";
const URL_PROCESAR_VENTA = "http://localhost:3000/procesarVenta";
const MP_AC_TOKEN = "APP_USR-2687910292298842-062215-dedefffbf200c367904e03c489d2cbdc-779530591";
const URL_CLOUD_STORAGE = 'https://storage.googleapis.com/web-oliver';
const GOOGLE_CLIENT_ID = '85508910542-jfaoom4l84q0a9cdmeg382vi9hl986j1.apps.googleusercontent.com';

/*https://www.mercadolibre.com.ar/gz/checkout/buy
?mode=page
&parent_url=https%3A%2F%2Farticulo.mercadolibre.com.ar%2FMLA-701482873-set-x-4-colchonetas-cama-inflable-pileta-piscina-oferta-mar-_JM
&item_id=MLA701482873
&context=vip
&shipping_option_id=3630547635
&quantity=1*/

/***/ }),

/***/ "t0wy":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Error = ({
  message
}) => {
  return __jsx("div", {
    className: "alert alert-warning text-center"
  }, message);
};

/* harmony default export */ __webpack_exports__["a"] = (Error);

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ })

/******/ });