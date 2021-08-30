"use strict";
(() => {
var exports = {};
exports.id = 502;
exports.ids = [502];
exports.modules = {

/***/ 670:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3289);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_components_Head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2642);
/* harmony import */ var _src_components_Loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5500);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(79);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _store_actions_carritoActions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3088);
/* harmony import */ var _store_actions_enviosActions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2379);
/* harmony import */ var _store_actions_zonasActions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1538);
/* harmony import */ var _store_actions_ventasActions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5318);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _config_index__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1130);
/* harmony import */ var _src_components_Error__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3687);















const Swal = __webpack_require__(272);

const {
  traerProductos: carritoTraerProductos
} = _store_actions_carritoActions__WEBPACK_IMPORTED_MODULE_7__;
const {
  guardar: enviosGuardar
} = _store_actions_enviosActions__WEBPACK_IMPORTED_MODULE_8__;
const {
  seleccionar: zonasGuardar,
  traerTodas: traerZonas
} = _store_actions_zonasActions__WEBPACK_IMPORTED_MODULE_9__;
const {
  init: inicializarStoreVenta,
  setCostoEnvio: setDataEnvioEnVenta
} = _store_actions_ventasActions__WEBPACK_IMPORTED_MODULE_10__;

const ProcesarVenta = props => {
  const {
    0: error,
    1: setError
  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);
  const {
    carritoReducer,
    ventaReducer,
    carritoTraerProductos,
    enviosGuardar,
    zonasGuardar,
    inicializarStoreVenta,
    setDataEnvioEnVenta,
    traerZonas,
    status,
    payment_id,
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
  (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(() => {
    if (status == "approved") {
      traerZonas();
      return;
    }

    setError(true);
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(() => {
    if (logueado && zonas.length > 0) {
      const dataEnvio = JSON.parse(localStorage.getItem('dataEnvio'));
      enviosGuardar(dataEnvio.tipo);
      zonasGuardar(dataEnvio.zona);
      carritoTraerProductos();
    }
  }, [logueado, zonas]);
  (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(() => {
    if (carritoReducer.productos.length > 0) {
      inicializarStoreVenta();
      setDataEnvioEnVenta();
    }
  }, [carritoReducer.productos]);
  (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(() => {
    if (!tipoEnvio || !productos.length || cantidad == 0 || total == 0) {
      console.log('no se puede completar la operacion');
      return;
    }

    const {
      idUsuario
    } = usuario;
    let dataToRequest = {
      envio: {
        idZona: zona ? zona.idZona : null,
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
      let url = `${_config_index__WEBPACK_IMPORTED_MODULE_11__/* .API */ .bl}/ventas/registrarVenta`;
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

  return error ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_Error__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, {
    message: "Ha ocurrido un error, intentalo mas tarde"
  }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_Head__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
      title: "Finalizacion de compra",
      metadesc: ""
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      className: "jsx-2063553454" + " " + "wrapper",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_Loader__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
        className: "jsx-2063553454",
        children: "Su compra esta siento procesada, aguarde unos segundos..."
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
      id: "2063553454",
      children: [".wrapper.jsx-2063553454{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:90vh;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}"]
    })]
  });
};

ProcesarVenta.getInitialProps = async ({
  query
}) => {
  const {
    payment_id,
    status,
    collection_id
  } = query;
  return {
    collection_id,
    status,
    payment_id
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_4__.connect)(mapStateToProps, mapDispatchToProps)(ProcesarVenta));

/***/ }),

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

/***/ 701:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 9297:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 79:
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ 5282:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 3289:
/***/ ((module) => {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ 272:
/***/ ((module) => {

module.exports = require("sweetalert2");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [651,88,865], () => (__webpack_exec__(670)));
module.exports = __webpack_exports__;

})();