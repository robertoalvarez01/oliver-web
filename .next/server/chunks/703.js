"use strict";
exports.id = 703;
exports.ids = [703];
exports.modules = {

/***/ 6703:
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
/* harmony import */ var _Loader_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5500);
/* harmony import */ var _config_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1130);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9914);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_4__);








const FormModificarPw = props => {
  const {
    0: loading,
    1: setLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const {
    0: error,
    1: setError
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  const {
    0: actionSuccess,
    1: setActionSuccess
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  const {
    0: email,
    1: setEmail
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');

  const sendEmail = async () => {
    let headers = new Headers();
    let dataToSend;

    if (props.usuarioReducer.logueado) {
      const {
        idUsuario,
        token
      } = props.usuarioReducer.usuario;
      if (!token) return setError('Ups.. ha ocurrido un error.');
      headers.append('token', token);
      dataToSend = {
        idUsuario
      };
    } else {
      if (email == '') return setError('Ups.. ha ocurrido un error.');
      dataToSend = {
        email
      };
    }

    setLoading(true);
    headers.append("Content-Type", "application/json");
    console.log(dataToSend);
    const request = await fetch(`${_config_index__WEBPACK_IMPORTED_MODULE_5__/* .API */ .bl}/resetPassword`, {
      method: 'POST',
      headers,
      body: JSON.stringify(dataToSend)
    });

    if (request.status != 200) {
      setLoading(false);
      return setError('Ups.. ha ocurrido un error.');
    }

    const dataRequest = await request.json();
    setLoading(false);

    if (dataRequest.ok) {
      return setActionSuccess(dataRequest.info);
    }

    return setError('Ups.. ha ocurrido un error.');
  };

  const handleChangeEmail = event => {
    setEmail(event.target.value);
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Container, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
      className: "text-center",
      children: error ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "alert alert-danger text-center",
        children: error
      }) : null
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
      className: `alert alert-${actionSuccess ? `info` : `warning`} text-center`,
      children: actionSuccess ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
        children: actionSuccess
      }) : `Estaremos enviando un email con los pasos para poder realizar el proceso de modificación de contraseña`
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      className: "col-12 text-center",
      children: [loading ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Loader_index__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {}) : null, props.withEmail ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
        type: "email",
        className: "form-control mb-3",
        value: email,
        onChange: handleChangeEmail,
        required: true,
        placeholder: "Ingrese su email"
      }) : null, !actionSuccess && !loading ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
        onClick: sendEmail,
        type: "button",
        children: "Enviar email"
      }) : null]
    })]
  });
};

const Container = styled_components__WEBPACK_IMPORTED_MODULE_4___default().div.withConfig({
  displayName: "formModificarPw__Container",
  componentId: "sc-5qs5q5-0"
})(["font-family:'Quicksand',sans-serif!important;>div>button{color:white;background-color:var(--oliver);border:1px solid var(--oliver);transition:all 0.5s ease;padding:5px 10px;font-size:12px;width:100%;font-size:16px;border-radius:10px;margin:5px 0px;}"]);

const mapStateToProps = ({
  usuarioReducer
}) => {
  return {
    usuarioReducer
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_2__.connect)(mapStateToProps, null)(FormModificarPw));

/***/ })

};
;