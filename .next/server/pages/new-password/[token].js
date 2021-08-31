"use strict";
(() => {
var exports = {};
exports.id = 587;
exports.ids = [587];
exports.modules = {

/***/ 3575:
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _src_components_Error__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3687);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(79);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _store_actions_usuarioActions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5364);
/* harmony import */ var _src_components_Loader_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5500);





function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








const newPassword = props => {
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    props.verificarSesion(props.token);
  }, []);
  const {
    0: formValues,
    1: setFormValues
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({
    newPassword: '',
    confirmNewPassword: ''
  });

  const handleChange = event => {
    return setFormValues(_objectSpread(_objectSpread({}, formValues), {}, {
      [event.target.name]: event.target.value
    }));
  };

  const handleSubmit = event => {
    event.preventDefault();
    props.updatePassword(formValues, props.token);
  };

  const {
    loading,
    error,
    logueado,
    actionSuccess
  } = props.usuarioReducer;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_Head__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
      title: "Oliver Petshop - Nueva contrase\xF1a"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
      className: "mt-2 container",
      children: logueado ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [error ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_Error__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
          message: error
        }) : null, actionSuccess ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
          className: "alert alert-info text-center",
          children: actionSuccess
        }) : null, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
          onSubmit: handleSubmit,
          className: "jsx-4269807520" + " " + "form-group mt-3",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "jsx-4269807520" + " " + "col-12 mb-3",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
              htmlFor: "pw",
              className: "jsx-4269807520",
              children: "Nueva Contrase\xF1a"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
              onChange: handleChange,
              value: formValues.newPassword,
              type: "password",
              placeholder: "Ingrese su nueva contrase\xF1a",
              name: "newPassword",
              id: "newPassword",
              required: true,
              className: "jsx-4269807520" + " " + "form-control"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "jsx-4269807520" + " " + "col-12 mb-3",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
              htmlFor: "pw-repeat",
              className: "jsx-4269807520",
              children: "Repita la nueva contrase\xF1a"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
              onChange: handleChange,
              value: formValues.confirmNewPassword,
              type: "password",
              placeholder: "Repita su nueva contrase\xF1a",
              name: "confirmNewPassword",
              id: "confirmNewPassword",
              required: true,
              className: "jsx-4269807520" + " " + "form-control"
            })]
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "jsx-4269807520" + " " + "col-12 text-center",
            children: loading ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_Loader_index__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, {}) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
              type: "submit",
              value: "Enviar",
              className: "jsx-4269807520" + " " + "boton bg-yellow"
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
            id: "4269807520",
            children: ["form.jsx-4269807520{font-family:'Quicksand',sans-serif!important;}"]
          })]
        })]
      }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_Error__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
        message: "Ups.. algo ha ido mal."
      })
    })]
  });
};

newPassword.getInitialProps = async ({
  query
}) => {
  const token = query.token;
  return {
    token
  };
};

const mapStateToProps = ({
  usuarioReducer
}) => {
  return {
    usuarioReducer
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_5__.connect)(mapStateToProps, _store_actions_usuarioActions__WEBPACK_IMPORTED_MODULE_7__)(newPassword));

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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [642,500,52], () => (__webpack_exec__(3575)));
module.exports = __webpack_exports__;

})();