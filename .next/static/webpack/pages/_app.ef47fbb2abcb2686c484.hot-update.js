webpackHotUpdate_N_E("pages/_app",{

/***/ "./src/components/Login/index.js":
/*!***************************************!*\
  !*** ./src/components/Login/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Error__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Error */ "./src/components/Error.js");
/* harmony import */ var _Login_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Login.module.css */ "./src/components/Login/Login.module.css");
/* harmony import */ var _Login_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Login_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _config_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../config/index */ "./config/index.js");
/* harmony import */ var _Loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Loader */ "./src/components/Loader/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store_actions_usuarioActions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../store/actions/usuarioActions */ "./store/actions/usuarioActions.js");


var _this = undefined,
    _jsxFileName = "C:\\Users\\franc\\Documents\\oliver-2\\sitio-desa\\src\\components\\Login\\index.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }









var Login = function Login(props) {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    email: '',
    password: ''
  }),
      formLoginValues = _useState[0],
      setFormLoginValues = _useState[1];

  var handleChangeLogin = function handleChangeLogin(event) {
    setFormLoginValues(_objectSpread(_objectSpread({}, formLoginValues), {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, event.target.name, event.target.value)));
  };

  var handleSubmitLogin = function handleSubmitLogin(event) {
    event.preventDefault();
    var btnSubmit = document.querySelector('#form-login .boton');
    btnSubmit.setAttribute('disabled', true);
    props.login(formLoginValues); // return fetch(`${API}/login`,{
    //     method:'POST',
    //     body:JSON.stringify(formLoginValues),
    //     headers
    // }).then(res=>res.json()).then(response=>{
    //     setLoading(false);
    //     if(response.ok){
    //         setLogueado(`Bienvenido ${response.usuario.nombre}`);
    //         return;
    //     }else{
    //         btnSubmit.removeAttribute('disabled');
    //         return setError(response.info);
    //     }
    // })
    //return true;
  };

  var habilitarRegister = function habilitarRegister() {
    props.showRegister();
  };

  console.log(props);
  return __jsx("div", {
    className: _Login_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.login__container,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 9
    }
  }, __jsx("h6", {
    className: _Login_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.title__login + ' ' + "text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 13
    }
  }, "Ingres\xE1 a tu cuenta"), props.error ? __jsx(_Error__WEBPACK_IMPORTED_MODULE_2__["default"], {
    message: props.error,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 28
    }
  }) : null, props.loading ? __jsx("div", {
    className: "text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 30
    }
  }, __jsx(_Loader__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 59
    }
  })) : null, props.logueado ? __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "text-center alert alert-success",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 17
    }
  }, logueado), __jsx("a", {
    href: "/",
    className: "boton bg-yellow mb-1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 17
    }
  }, "Continuar")) : __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("form", {
    className: _Login_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.form + ' ' + "form-group",
    name: "form-login",
    id: "form-login",
    onSubmit: handleSubmitLogin,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 21
    }
  }, __jsx("label", {
    className: _Login_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.label,
    htmlFor: "email",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 25
    }
  }, "Email"), __jsx("input", {
    type: "email",
    className: _Login_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.input + ' ' + "form-control",
    id: "email",
    name: "email",
    value: formLoginValues.email,
    onChange: handleChangeLogin,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 25
    }
  }), __jsx("label", {
    className: _Login_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.label,
    htmlFor: "password",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 25
    }
  }, "Contrase\xF1a"), __jsx("input", {
    type: "password",
    className: _Login_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.input + ' ' + "form-control",
    id: "password",
    name: "password",
    value: formLoginValues.password,
    onChange: handleChangeLogin,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 25
    }
  }), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 25
    }
  }), __jsx("input", {
    type: "submit",
    className: "boton bg-yellow mb-1",
    value: "Ingresar",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 25
    }
  }), __jsx("a", {
    href: "/",
    className: _Login_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.forgot__pass + ' ' + "text-center d-block",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 25
    }
  }, "Olvid\xE9 mi constrase\xF1a")), __jsx("section", {
    className: _Login_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.registerInLogin + ' ' + "text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 21
    }
  }, __jsx("span", {
    className: "text-muted",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 25
    }
  }, "\xBFNo tenes cuenta?", __jsx("span", {
    className: _Login_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.registerLink,
    onClick: habilitarRegister,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 71
    }
  }, " Registrate")))));
};

_s(Login, "F9NZ8Q/yg/Cp1JhLGwTj4hTKASM=");

_c = Login;

var mapStateToProps = function mapStateToProps(reducers) {
  return reducers.usuarioReducer;
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["connect"])(mapStateToProps, _store_actions_usuarioActions__WEBPACK_IMPORTED_MODULE_7__)(Login));

var _c;

$RefreshReg$(_c, "Login");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTG9naW4vaW5kZXguanMiXSwibmFtZXMiOlsiTG9naW4iLCJwcm9wcyIsInVzZVN0YXRlIiwiZW1haWwiLCJwYXNzd29yZCIsImZvcm1Mb2dpblZhbHVlcyIsInNldEZvcm1Mb2dpblZhbHVlcyIsImhhbmRsZUNoYW5nZUxvZ2luIiwiZXZlbnQiLCJ0YXJnZXQiLCJuYW1lIiwidmFsdWUiLCJoYW5kbGVTdWJtaXRMb2dpbiIsInByZXZlbnREZWZhdWx0IiwiYnRuU3VibWl0IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwic2V0QXR0cmlidXRlIiwibG9naW4iLCJoYWJpbGl0YXJSZWdpc3RlciIsInNob3dSZWdpc3RlciIsImNvbnNvbGUiLCJsb2ciLCJMb2dpblN0eWxlIiwibG9naW5fX2NvbnRhaW5lciIsInRpdGxlX19sb2dpbiIsImVycm9yIiwibG9hZGluZyIsImxvZ3VlYWRvIiwiZm9ybSIsImxhYmVsIiwiaW5wdXQiLCJmb3Jnb3RfX3Bhc3MiLCJyZWdpc3RlckluTG9naW4iLCJyZWdpc3RlckxpbmsiLCJtYXBTdGF0ZVRvUHJvcHMiLCJyZWR1Y2VycyIsInVzdWFyaW9SZWR1Y2VyIiwiY29ubmVjdCIsInVzdWFyaW9BY3Rpb25zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFBQSxrQkFDeUJDLHNEQUFRLENBQUM7QUFDbkRDLFNBQUssRUFBQyxFQUQ2QztBQUVuREMsWUFBUSxFQUFDO0FBRjBDLEdBQUQsQ0FEakM7QUFBQSxNQUNkQyxlQURjO0FBQUEsTUFDR0Msa0JBREg7O0FBTXJCLE1BQU1DLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsQ0FBQUMsS0FBSyxFQUFFO0FBQzdC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LENBQUNDLGNBQWhCO0FBQ0gsQ0FGRDs7QUFJZUMsMEhBQU8sQ0FBQ0gsZUFBRCxFQUFpQkksMERBQWpCLENBQVAsQ0FBd0N2QyxLQUF4QyxDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuZWY0N2ZiYjJhYmNiMjY4NmM0ODQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCx7dXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEVycm9yIGZyb20gXCIuLi9FcnJvclwiO1xyXG5pbXBvcnQgTG9naW5TdHlsZSBmcm9tICAnLi9Mb2dpbi5tb2R1bGUuY3NzJztcclxuaW1wb3J0IHtBUEl9IGZyb20gJy4uLy4uLy4uL2NvbmZpZy9pbmRleCc7XHJcbmltcG9ydCBMb2FkZXIgZnJvbSAnLi4vTG9hZGVyJztcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0ICogYXMgdXN1YXJpb0FjdGlvbnMgZnJvbSAnLi4vLi4vLi4vc3RvcmUvYWN0aW9ucy91c3VhcmlvQWN0aW9ucyc7XHJcblxyXG5jb25zdCBMb2dpbiA9IChwcm9wcykgPT4ge1xyXG4gICAgY29uc3QgW2Zvcm1Mb2dpblZhbHVlcywgc2V0Rm9ybUxvZ2luVmFsdWVzXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICBlbWFpbDonJyxcclxuICAgICAgICBwYXNzd29yZDonJ1xyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlTG9naW4gPSBldmVudD0+e1xyXG4gICAgICAgIHNldEZvcm1Mb2dpblZhbHVlcyh7XHJcbiAgICAgICAgICAgIC4uLmZvcm1Mb2dpblZhbHVlcyxcclxuICAgICAgICAgICAgW2V2ZW50LnRhcmdldC5uYW1lXTpldmVudC50YXJnZXQudmFsdWVcclxuICAgICAgICB9KVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVTdWJtaXRMb2dpbiA9IGV2ZW50PT57XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBsZXQgYnRuU3VibWl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Zvcm0tbG9naW4gLmJvdG9uJyk7XHJcbiAgICAgICAgYnRuU3VibWl0LnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLHRydWUpO1xyXG4gICAgICAgIHByb3BzLmxvZ2luKGZvcm1Mb2dpblZhbHVlcyk7XHJcbiAgICAgICAgLy8gcmV0dXJuIGZldGNoKGAke0FQSX0vbG9naW5gLHtcclxuICAgICAgICAvLyAgICAgbWV0aG9kOidQT1NUJyxcclxuICAgICAgICAvLyAgICAgYm9keTpKU09OLnN0cmluZ2lmeShmb3JtTG9naW5WYWx1ZXMpLFxyXG4gICAgICAgIC8vICAgICBoZWFkZXJzXHJcbiAgICAgICAgLy8gfSkudGhlbihyZXM9PnJlcy5qc29uKCkpLnRoZW4ocmVzcG9uc2U9PntcclxuICAgICAgICAvLyAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgLy8gICAgIGlmKHJlc3BvbnNlLm9rKXtcclxuICAgICAgICAvLyAgICAgICAgIHNldExvZ3VlYWRvKGBCaWVudmVuaWRvICR7cmVzcG9uc2UudXN1YXJpby5ub21icmV9YCk7XHJcbiAgICAgICAgLy8gICAgICAgICByZXR1cm47XHJcbiAgICAgICAgLy8gICAgIH1lbHNle1xyXG4gICAgICAgIC8vICAgICAgICAgYnRuU3VibWl0LnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKTtcclxuICAgICAgICAvLyAgICAgICAgIHJldHVybiBzZXRFcnJvcihyZXNwb25zZS5pbmZvKTtcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vIH0pXHJcbiAgICAgICAgLy9yZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYWJpbGl0YXJSZWdpc3RlciA9ICgpPT57XHJcbiAgICAgICAgcHJvcHMuc2hvd1JlZ2lzdGVyKCk7XHJcbiAgICB9XHJcbiAgICBjb25zb2xlLmxvZyhwcm9wcyk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtMb2dpblN0eWxlLmxvZ2luX19jb250YWluZXJ9PlxyXG4gICAgICAgICAgICA8aDYgY2xhc3NOYW1lPXtMb2dpblN0eWxlLnRpdGxlX19sb2dpbiArICcgJyArIGB0ZXh0LWNlbnRlcmB9PkluZ3Jlc8OhIGEgdHUgY3VlbnRhPC9oNj5cclxuICAgICAgICAgICAgeyhwcm9wcy5lcnJvcik/PEVycm9yIG1lc3NhZ2U9e3Byb3BzLmVycm9yfS8+Om51bGx9XHJcbiAgICAgICAgICAgIHsocHJvcHMubG9hZGluZyk/PGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPjxMb2FkZXIvPjwvZGl2PjpudWxsfVxyXG4gICAgICAgICAgICB7KHByb3BzLmxvZ3VlYWRvKT9cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgYWxlcnQgYWxlcnQtc3VjY2Vzc1wiPntsb2d1ZWFkb308L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvXCIgY2xhc3NOYW1lPVwiYm90b24gYmcteWVsbG93IG1iLTFcIj5Db250aW51YXI8L2E+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT17TG9naW5TdHlsZS5mb3JtICsgJyAnICsgYGZvcm0tZ3JvdXBgfSBuYW1lPVwiZm9ybS1sb2dpblwiIGlkPVwiZm9ybS1sb2dpblwiIG9uU3VibWl0PXtoYW5kbGVTdWJtaXRMb2dpbn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9e0xvZ2luU3R5bGUubGFiZWx9IGh0bWxGb3I9XCJlbWFpbFwiPkVtYWlsPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJlbWFpbFwiIGNsYXNzTmFtZT17TG9naW5TdHlsZS5pbnB1dCArICcgJyArIGBmb3JtLWNvbnRyb2xgfSBpZD1cImVtYWlsXCIgbmFtZT1cImVtYWlsXCIgdmFsdWU9e2Zvcm1Mb2dpblZhbHVlcy5lbWFpbH0gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZUxvZ2lufS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9e0xvZ2luU3R5bGUubGFiZWx9IGh0bWxGb3I9XCJwYXNzd29yZFwiPkNvbnRyYXNlw7FhPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIGNsYXNzTmFtZT17TG9naW5TdHlsZS5pbnB1dCArICcgJyArIGBmb3JtLWNvbnRyb2xgfSBpZD1cInBhc3N3b3JkXCIgbmFtZT1cInBhc3N3b3JkXCIgdmFsdWU9e2Zvcm1Mb2dpblZhbHVlcy5wYXNzd29yZH0gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZUxvZ2lufS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiYm90b24gYmcteWVsbG93IG1iLTFcIiB2YWx1ZT1cIkluZ3Jlc2FyXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiL1wiIGNsYXNzTmFtZT17TG9naW5TdHlsZS5mb3Jnb3RfX3Bhc3MgKyAnICcgKyBgdGV4dC1jZW50ZXIgZC1ibG9ja2B9Pk9sdmlkw6kgbWkgY29uc3RyYXNlw7FhPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e0xvZ2luU3R5bGUucmVnaXN0ZXJJbkxvZ2luICsgJyAnICsgYHRleHQtY2VudGVyYH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtbXV0ZWRcIj7Cv05vIHRlbmVzIGN1ZW50YT88c3BhbiBjbGFzc05hbWU9e0xvZ2luU3R5bGUucmVnaXN0ZXJMaW5rfSBvbkNsaWNrPXtoYWJpbGl0YXJSZWdpc3Rlcn0+IFJlZ2lzdHJhdGU8L3NwYW4+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHJlZHVjZXJzPT57XHJcbiAgICByZXR1cm4gcmVkdWNlcnMudXN1YXJpb1JlZHVjZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLHVzdWFyaW9BY3Rpb25zKShMb2dpbik7Il0sInNvdXJjZVJvb3QiOiIifQ==