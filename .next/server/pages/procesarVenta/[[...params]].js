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
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// NAMESPACE OBJECT: ./store/actions/enviosActions.js
var enviosActions_namespaceObject = {};
__webpack_require__.r(enviosActions_namespaceObject);
__webpack_require__.d(enviosActions_namespaceObject, "guardar", function() { return guardar; });

// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__("HJQg");
var style_default = /*#__PURE__*/__webpack_require__.n(style_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./src/components/Head.js
var Head = __webpack_require__("k2JI");

// EXTERNAL MODULE: ./src/components/Loader/index.js
var Loader = __webpack_require__("XOuL");

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: ./store/actions/carritoActions.js
var carritoActions = __webpack_require__("nhAV");

// EXTERNAL MODULE: ./store/types/enviosTypes.js
var enviosTypes = __webpack_require__("pzYh");

// CONCATENATED MODULE: ./store/actions/enviosActions.js

const guardar = data => async dispatch => {
  dispatch({
    type: enviosTypes["c" /* LOADING */]
  });

  try {
    if (!data) return dispatch({
      type: enviosTypes["a" /* ERROR */],
      payload: 'Sin datos de envío'
    });
    dispatch({
      type: enviosTypes["b" /* GUARDAR */],
      payload: data
    });
  } catch (error) {
    dispatch({
      type: enviosTypes["a" /* ERROR */],
      payload: error.message
    });
  }
};
// EXTERNAL MODULE: ./config/index.js
var config = __webpack_require__("rOcY");

// EXTERNAL MODULE: ./src/components/Error.js
var Error = __webpack_require__("t0wy");

// CONCATENATED MODULE: ./pages/procesarVenta/[[...params]].js


var __jsx = external_react_default.a.createElement;









const Swal = __webpack_require__("CBiN");

const {
  guardar: enviosGuardar
} = enviosActions_namespaceObject;
const {
  traerProductos: carritoTraerProductos
} = carritoActions;

const ProcesarVenta = props => {
  const {
    0: error,
    1: setError
  } = Object(external_react_["useState"])(false);
  const {
    0: ventaRegistrada,
    1: setVentaRegistrada
  } = Object(external_react_["useState"])(false);
  Object(external_react_["useEffect"])(() => {
    procesarInfo();
  }, [props.usuarioReducer]);

  const procesarInfo = async () => {
    const dataEnvio = JSON.parse(localStorage.getItem('dataEnvio'));
    props.enviosGuardar(dataEnvio);
    props.carritoTraerProductos();

    if (props.usuarioReducer.logueado && props.carritoReducer.productos.length > 0 && props.enviosReducer.data) {
      const {
        idUsuario
      } = props.usuarioReducer.usuario;
      const {
        subtotal,
        porcentaje_descuento,
        descuento,
        total,
        productos,
        idMedioPago
      } = props.carritoReducer;
      const {
        zona,
        tipo
      } = props.enviosReducer.data;
      let f = new Date();
      let mes = f.getMonth() < 10 ? `0${f.getMonth() + 1}` : `${f.getMonth()}`;
      let dia = f.getDate() < 10 ? `0${f.getDate()}` : `${f.getDate()}`;
      let fecha = `${f.getFullYear()}-${mes}-${dia}`;
      let dataToRequest = {
        envio: {
          idZona: zona,
          tipo: tipo
        },
        venta: {
          subtotal,
          porcentaje_descuento,
          descuento,
          total,
          idUsuario,
          productos,
          fecha,
          operacion_id: props.collection_id || null,
          idMedioPago
        }
      }; //console.log(dataToRequest);

      return registrarVenta(dataToRequest);
    }
  };

  const registrarVenta = async data => {
    try {
      const headers = new Headers();
      headers.append('token', props.usuarioReducer.usuario.token);
      headers.append("Content-Type", "application/json");
      let url = !data.venta.operacion_id ? `${config["a" /* API */]}/registrarVenta?mercadoPago=false` : `${config["a" /* API */]}/registrarVenta?mercadoPago=true`;
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

  return __jsx(external_react_default.a.Fragment, null, __jsx(Head["a" /* default */], {
    title: "Finalizacion de compra",
    metadesc: ""
  }), __jsx("div", {
    className: "jsx-2063553454" + " " + "wrapper"
  }, props.enviosReducer.error || props.carritoReducer.error || error ? __jsx(Error["a" /* default */], {
    message: "Ha ocurrido un error, intentalo mas tarde"
  }) : __jsx(external_react_default.a.Fragment, null, ventaRegistrada ? __jsx("div", {
    className: "jsx-2063553454" + " " + "alert alert-success"
  }, ventaRegistrada) : __jsx(external_react_default.a.Fragment, null, __jsx(Loader["a" /* default */], null), __jsx("p", {
    className: "jsx-2063553454"
  }, "Su compra esta siento procesada, aguarde unos segundos...")))), __jsx(style_default.a, {
    id: "2063553454"
  }, [".wrapper.jsx-2063553454{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:90vh;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}"]));
};

ProcesarVenta.getInitialProps = async ({
  query
}) => {
  const {
    collection_id
  } = query;
  return {
    collection_id
  };
};

const mapStateToProps = ({
  carritoReducer,
  enviosReducer,
  usuarioReducer
}) => {
  return {
    carritoReducer,
    enviosReducer,
    usuarioReducer
  };
};

const mapDispatchToProps = {
  enviosGuardar,
  carritoTraerProductos
};
/* harmony default export */ var _params_ = __webpack_exports__["default"] = (Object(external_react_redux_["connect"])(mapStateToProps, mapDispatchToProps)(ProcesarVenta));

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
    href: `${_config_index__WEBPACK_IMPORTED_MODULE_2__[/* URL_CLOUD_STORAGE */ "d"]}/static/Perro.png`
  }), metadesc ? __jsx("meta", {
    name: "description",
    content: metadesc
  }) : null);
};

/* harmony default export */ __webpack_exports__["a"] = (Header);

/***/ }),

/***/ "kqUl":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return TRAER_PRODUCTOS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AGREGAR_PRODUCTO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return ELIMINAR_PRODUCTO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return LOADING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return CAMBIAR_MEDIO_DE_PAGO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CAMBIAR_COSTO_ENVIO; });
const TRAER_PRODUCTOS = 'carrito_traer_todos_carrito';
const AGREGAR_PRODUCTO = 'carrito_agregar_producto';
const ELIMINAR_PRODUCTO = 'carrito_eliminar_producto';
const LOADING = 'carrito_loading';
const ERROR = 'carrito_error';
const CAMBIAR_MEDIO_DE_PAGO = 'carrito_cambiar_medio_de_pago';
const CAMBIAR_COSTO_ENVIO = 'carrito_costo_envio';


/***/ }),

/***/ "nhAV":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "traerProductos", function() { return traerProductos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "agregarProducto", function() { return agregarProducto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "eliminarProducto", function() { return eliminarProducto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cambiarMedioDePago", function() { return cambiarMedioDePago; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCostoEnvio", function() { return setCostoEnvio; });
/* harmony import */ var _types_carritoTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("kqUl");
//import {API} from '../config/index';

const traerProductos = () => async dispatch => {
  dispatch({
    type: _types_carritoTypes__WEBPACK_IMPORTED_MODULE_0__[/* LOADING */ "f"]
  });

  try {
    const productos = await JSON.parse(localStorage.getItem('carrito'));
    let subtotal = 0;
    productos.forEach(prd => {
      subtotal += parseInt(prd.precio * prd.cantidad);
    });
    let payloadData = {
      productos,
      subtotal
    };
    return dispatch({
      type: _types_carritoTypes__WEBPACK_IMPORTED_MODULE_0__[/* TRAER_PRODUCTOS */ "g"],
      payload: payloadData
    });
  } catch (error) {
    return dispatch({
      type: _types_carritoTypes__WEBPACK_IMPORTED_MODULE_0__[/* ERROR */ "e"],
      payload: error
    });
  }
};
const agregarProducto = producto => async (dispatch, getState) => {
  dispatch({
    type: _types_carritoTypes__WEBPACK_IMPORTED_MODULE_0__[/* LOADING */ "f"]
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
    let subtotal = 0;
    prds.forEach(prd => {
      subtotal += parseInt(prd.precioUnidad * prd.cantidad);
    });
    let payloadData = {
      listProductosUpgrade,
      subtotal
    };
    setTimeout(() => {
      dispatch({
        type: _types_carritoTypes__WEBPACK_IMPORTED_MODULE_0__[/* AGREGAR_PRODUCTO */ "a"],
        payload: payloadData
      });
    }, 1500);
  } catch (error) {
    dispatch({
      type: _types_carritoTypes__WEBPACK_IMPORTED_MODULE_0__[/* ERROR */ "e"],
      payload: error
    });
  }
};
const eliminarProducto = idSubProducto => async (dispatch, getState) => {
  dispatch({
    type: _types_carritoTypes__WEBPACK_IMPORTED_MODULE_0__[/* LOADING */ "f"]
  });

  try {
    const {
      productos
    } = getState().carritoReducer; //filtro los productos que no tengan el idProducto que se recibió. entonces elimino ese producto y actualizo el reducer.

    const newProductos = productos.filter(newArray => newArray.idSubProducto !== idSubProducto); //console.log(newProductos);

    localStorage.setItem('carrito', JSON.stringify(newProductos)); //calculo el subtotal

    const prds = JSON.parse(localStorage.getItem('carrito'));
    let subtotal = 0;
    prds.forEach(prd => {
      subtotal += parseInt(prd.precio * prd.cantidad);
    });
    let payloadData = {
      newProductos,
      subtotal
    };
    dispatch({
      type: _types_carritoTypes__WEBPACK_IMPORTED_MODULE_0__[/* ELIMINAR_PRODUCTO */ "d"],
      payload: payloadData
    });
  } catch (error) {
    dispatch({
      type: _types_carritoTypes__WEBPACK_IMPORTED_MODULE_0__[/* ERROR */ "e"],
      payload: error
    });
  }
};
const cambiarMedioDePago = idMedioDePago => dispatch => {
  return dispatch({
    type: _types_carritoTypes__WEBPACK_IMPORTED_MODULE_0__[/* CAMBIAR_MEDIO_DE_PAGO */ "c"],
    payload: idMedioDePago
  });
};
const setCostoEnvio = costo => dispatch => {
  return dispatch({
    type: _types_carritoTypes__WEBPACK_IMPORTED_MODULE_0__[/* CAMBIAR_COSTO_ENVIO */ "b"],
    payload: costo
  });
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return PUBLIC_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return URL_CLOUD_STORAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return GOOGLE_CLIENT_ID; });
const API = 'https://api.oliverpetshop.com.ar';
const PUBLIC_URL = "https://developers.oliverpetshop.com.ar";
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