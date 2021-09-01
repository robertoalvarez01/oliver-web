"use strict";
exports.id = 642;
exports.ids = [642];
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
const PUBLIC_URL = "https://oliverpetshop.com.ar";
const URL_PROCESAR_VENTA = "https://oliverpetshop.com.ar/procesarVenta";
const MP_AC_TOKEN = "APP_USR-3132396576920746-020118-9ad6cc05aff511f0f740f42fe2bfb76e-528050104";
const URL_CLOUD_STORAGE = 'https://storage.googleapis.com/web-oliver';
const GOOGLE_CLIENT_ID = '85508910542-jfaoom4l84q0a9cdmeg382vi9hl986j1.apps.googleusercontent.com';
const FOTO_DEFAULT = 'https://storage.googleapis.com/web-oliver/user-default.png';


/***/ }),

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

/***/ })

};
;