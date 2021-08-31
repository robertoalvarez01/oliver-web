"use strict";
(() => {
var exports = {};
exports.id = 833;
exports.ids = [833];
exports.modules = {

/***/ 320:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_components_Head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2642);
/* harmony import */ var _src_components_Footer_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5546);
/* harmony import */ var _src_components_Loader_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5500);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(79);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _store_actions_ofertasActions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1718);
/* harmony import */ var _store_actions_productosActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6705);
/* harmony import */ var _src_components_BotonWhatsApp__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6081);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1130);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _src_components_Promociones__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7438);













const {
  guardarOfertas
} = _store_actions_ofertasActions__WEBPACK_IMPORTED_MODULE_9__;
const {
  restablecerFiltros
} = _store_actions_productosActions__WEBPACK_IMPORTED_MODULE_5__;

const Ofertas = props => {
  const {
    ofertas,
    ofertasReducer,
    guardarOfertas
  } = props;
  (0,react__WEBPACK_IMPORTED_MODULE_7__.useEffect)(() => {
    if (ofertas.length > 0) {
      guardarOfertas(ofertas);
    }
  }, []);

  if (ofertasReducer.loading || ofertasReducer.data.length === 0) {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_Loader_index__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {});
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_Head__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
      title: "Oliver PetShop - Ofertas",
      metadesc: "Oliver PetShop - Descubri nuestras ofertas"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
      className: "container py-4",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_Promociones__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z, {})
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_Footer_index__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
      position: ofertas.length <= 4 ? 'absolute' : 'relative'
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_BotonWhatsApp__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, {})]
  });
};

async function getStaticProps(context) {
  try {
    const res = await fetch(`${_config__WEBPACK_IMPORTED_MODULE_10__/* .API */ .bl}/ofertas?desde=0&cantidad=12`);
    const {
      data
    } = await res.json();
    return {
      props: {
        ofertas: data
      }
    };
  } catch (error) {
    return {
      props: {
        error: error.message
      }
    };
  }
}

const mapStateToProps = ({
  ofertasReducer
}) => {
  return {
    ofertasReducer
  };
};

const mapDispatchToProps = {
  restablecerFiltros,
  guardarOfertas
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_4__.connect)(mapStateToProps, mapDispatchToProps)(Ofertas));

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

/***/ 6731:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 9297:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 2268:
/***/ ((module) => {

module.exports = require("react-dom");

/***/ }),

/***/ 9290:
/***/ ((module) => {

module.exports = require("react-lazy-load-image-component");

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
var __webpack_exports__ = __webpack_require__.X(0, [664,642,500,675,542,840,705,341,438], () => (__webpack_exec__(320)));
module.exports = __webpack_exports__;

})();