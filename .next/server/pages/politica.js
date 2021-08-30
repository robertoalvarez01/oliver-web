"use strict";
(() => {
var exports = {};
exports.id = 596;
exports.ids = [596];
exports.modules = {

/***/ 1130:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "bl": () => (/* binding */ API),
/* harmony export */   "fQ": () => (/* binding */ PUBLIC_URL),
/* harmony export */   "mp": () => (/* binding */ URL_CLOUD_STORAGE),
/* harmony export */   "wL": () => (/* binding */ GOOGLE_CLIENT_ID),
/* harmony export */   "uv": () => (/* binding */ MP_AC_TOKEN),
/* harmony export */   "T7": () => (/* binding */ URL_PROCESAR_VENTA),
/* harmony export */   "B1": () => (/* binding */ FOTO_DEFAULT)
/* harmony export */ });
const API = 'https://api.oliverpetshop.com.ar';
const PUBLIC_URL = "http://localhost:3000";
const URL_PROCESAR_VENTA = "http://localhost:3000/procesarVenta";
const MP_AC_TOKEN = "TEST-3132396576920746-020118-c75647e085784e05058d12358ef9e782-528050104";
const URL_CLOUD_STORAGE = 'https://storage.googleapis.com/web-oliver';
const GOOGLE_CLIENT_ID = '85508910542-jfaoom4l84q0a9cdmeg382vi9hl986j1.apps.googleusercontent.com';
const FOTO_DEFAULT = 'https://storage.googleapis.com/web-oliver/user-default.png';


/***/ }),

/***/ 7692:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ politica),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// NAMESPACE OBJECT: ./store/actions/politicaActions.js
var politicaActions_namespaceObject = {};
__webpack_require__.r(politicaActions_namespaceObject);
__webpack_require__.d(politicaActions_namespaceObject, {
  "traerInfo": () => (traerInfo)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(3289);
var style_default = /*#__PURE__*/__webpack_require__.n(style_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./src/components/Head.js
var Head = __webpack_require__(2642);
// EXTERNAL MODULE: ./src/components/Footer/index.jsx + 2 modules
var Footer = __webpack_require__(5546);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(79);
// EXTERNAL MODULE: ./config/index.js
var config = __webpack_require__(1130);
// EXTERNAL MODULE: ./store/types/politicaTypes.js
var politicaTypes = __webpack_require__(3998);
;// CONCATENATED MODULE: ./store/actions/politicaActions.js


const traerInfo = () => async dispatch => {
  dispatch({
    type: politicaTypes/* LOADING */.br
  });

  try {
    return fetch(`${config/* API */.bl}/legales`).then(res => res.json()).then(data => {
      const info = {
        politica: data.data[0].politica_privacidad,
        terminos: data.data[0].terminos_condiciones
      };
      dispatch({
        type: politicaTypes/* TRAER */.is,
        payload: info
      });
    }).catch(err => {
      dispatch({
        type: politicaTypes/* ERROR */.pn,
        payload: err
      });
    });
  } catch (error) {
    dispatch({
      type: politicaTypes/* ERROR */.pn,
      payload: error
    });
  }
};
// EXTERNAL MODULE: ./store/actions/productosActions.js
var productosActions = __webpack_require__(6705);
// EXTERNAL MODULE: ./src/components/BotonWhatsApp/index.js
var BotonWhatsApp = __webpack_require__(6081);
;// CONCATENATED MODULE: ./pages/politica.js












const {
  traerInfo: politica_traerInfo
} = politicaActions_namespaceObject;
const {
  restablecerFiltros
} = productosActions;

const Politica = props => {
  (0,external_react_.useEffect)(() => {
    document.getElementsByTagName('body')[0].style.overflowY = 'auto';

    if (props.productosReducer.filtrando) {
      props.restablecerFiltros();
    }
  }, []);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(Head/* default */.Z, {
      title: "Oliver PetShop - Pol\xEDticas",
      metadesc: "Oliver PetShop - Pol\xEDticas de privacidad - T\xE9rminos y condiciones"
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "jsx-2914238307" + " " + "container mt-5 py-4",
      children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
        className: "jsx-2914238307",
        children: "Pol\xEDtica de privacidad"
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        id: "info",
        dangerouslySetInnerHTML: {
          __html: props.politica
        },
        className: "jsx-2914238307"
      }), /*#__PURE__*/jsx_runtime_.jsx("br", {
        className: "jsx-2914238307"
      }), /*#__PURE__*/jsx_runtime_.jsx("hr", {
        className: "jsx-2914238307"
      }), /*#__PURE__*/jsx_runtime_.jsx("h2", {
        className: "jsx-2914238307",
        children: "Terminos y condiciones"
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        id: "info",
        dangerouslySetInnerHTML: {
          __html: props.terminos
        },
        className: "jsx-2914238307"
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(Footer/* default */.Z, {}), /*#__PURE__*/jsx_runtime_.jsx((style_default()), {
      id: "2914238307",
      children: ["#info.jsx-2914238307{line-height:inherit;font-family:'Quicksand',sans-serif;font-size:20px;line-height:30px;color:#555;white-space:pre-line;}", "h2.jsx-2914238307,#info.jsx-2914238307 h3.jsx-2914238307{line-height:2.2;font-weight:300;color:#ffb347;}", ".container.jsx-2914238307 #info.jsx-2914238307 h3.jsx-2914238307{color:#fff;}"]
    }), /*#__PURE__*/jsx_runtime_.jsx(BotonWhatsApp/* default */.Z, {})]
  });
};

async function getStaticProps(context) {
  try {
    const res = await fetch(`${config/* API */.bl}/legales`);
    const {
      data
    } = await res.json();
    return {
      props: {
        politica: data[0].politica_privacidad,
        terminos: data[0].terminos_condiciones
      }
    };
  } catch (error) {
    console.log(error);
  }
}

const mapStateToProps = ({
  productosReducer
}) => {
  return {
    productosReducer
  };
};

const mapDispatchToProps = {
  restablecerFiltros
};
/* harmony default export */ const politica = ((0,external_react_redux_.connect)(mapStateToProps, mapDispatchToProps)(Politica));

/***/ }),

/***/ 6081:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1130);




const BotonWhatsapp = () => {
  const handleClick = () => {
    window.location.assign(`https://api.whatsapp.com/send?phone=+542304347008&text=Consulta desde pagina web`);
  };

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
    className: "btn-wpp",
    onClick: handleClick,
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
      src: `${_config__WEBPACK_IMPORTED_MODULE_2__/* .URL_CLOUD_STORAGE */ .mp}/assets/wpp.png`,
      className: "img-fluid",
      alt: "WhatsApp de Oliver PetShop"
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BotonWhatsapp);

/***/ }),

/***/ 3998:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "is": () => (/* binding */ TRAER),
/* harmony export */   "br": () => (/* binding */ LOADING),
/* harmony export */   "pn": () => (/* binding */ ERROR)
/* harmony export */ });
const TRAER = 'politica_traer';
const LOADING = 'politica_loading';
const ERROR = 'politica_error';


/***/ }),

/***/ 2953:
/***/ ((module) => {

module.exports = require("@fortawesome/free-brands-svg-icons");

/***/ }),

/***/ 887:
/***/ ((module) => {

module.exports = require("@fortawesome/free-solid-svg-icons");

/***/ }),

/***/ 799:
/***/ ((module) => {

module.exports = require("@fortawesome/react-fontawesome");

/***/ }),

/***/ 9325:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 5378:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 7162:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 8773:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 2248:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 9372:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 665:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 2747:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 333:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 3456:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 7620:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 701:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 9297:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 2268:
/***/ ((module) => {

module.exports = require("react-dom");

/***/ }),

/***/ 79:
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ 5282:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 4111:
/***/ ((module) => {

module.exports = require("slugify");

/***/ }),

/***/ 9914:
/***/ ((module) => {

module.exports = require("styled-components");

/***/ }),

/***/ 3289:
/***/ ((module) => {

module.exports = require("styled-jsx/style");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [664,5,675,73,491,705], () => (__webpack_exec__(7692)));
module.exports = __webpack_exports__;

})();