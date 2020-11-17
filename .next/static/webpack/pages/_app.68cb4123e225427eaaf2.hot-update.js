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

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      error = _useState2[0],
      setError = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      loading = _useState3[0],
      setLoading = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      logueado = _useState4[0],
      setLogueado = _useState4[1];

  var handleChangeLogin = function handleChangeLogin(event) {
    setFormLoginValues(_objectSpread(_objectSpread({}, formLoginValues), {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, event.target.name, event.target.value)));
  };

  var handleSubmitLogin = function handleSubmitLogin(event) {
    event.preventDefault();

    if (formLoginValues.email.trim() === '' || formLoginValues.password.trim() === '') {
      setError('Es necesario completar todos los campos');
      return false;
    }

    setError(false);
    setLoading(true);
    var btnSubmit = document.querySelector('#form-login .boton');
    btnSubmit.setAttribute('disabled', true);
    var headers = new Headers();
    headers.append("Content-Type", "application/json");
    return fetch("".concat(_config_index__WEBPACK_IMPORTED_MODULE_4__["API"], "/login"), {
      method: 'POST',
      body: JSON.stringify(formLoginValues),
      headers: headers
    }).then(function (res) {
      return res.json();
    }).then(function (response) {
      setLoading(false);
      btnSubmit.removeAttribute('disabled');

      if (response.ok) {
        setLogueado("Bienvenido ".concat(response.usuario.nombre));
        return;
      } else {
        return setError(response.info);
      }
    }); //return true;
  };

  var habilitarRegister = function habilitarRegister() {
    props.showRegister();
  };

  return __jsx("div", {
    className: _Login_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.login__container,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 9
    }
  }, __jsx("h6", {
    className: _Login_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.title__login + ' ' + "text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 13
    }
  }, "Ingres\xE1 a tu cuenta"), error ? __jsx(_Error__WEBPACK_IMPORTED_MODULE_2__["default"], {
    message: error,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 22
    }
  }) : null, loading ? __jsx("div", {
    className: "text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 24
    }
  }, __jsx(_Loader__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 53
    }
  })) : null, logueado ? __jsx("div", {
    className: "text-center alert alert-success",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 25
    }
  }, logueado) : null, __jsx("form", {
    className: _Login_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.form + ' ' + "form-group",
    name: "form-login",
    id: "form-login",
    onSubmit: handleSubmitLogin,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 13
    }
  }, __jsx("label", {
    className: _Login_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.label,
    htmlFor: "email",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 17
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
      lineNumber: 63,
      columnNumber: 17
    }
  }), __jsx("label", {
    className: _Login_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.label,
    htmlFor: "password",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 17
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
      lineNumber: 65,
      columnNumber: 17
    }
  }), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 17
    }
  }), __jsx("input", {
    type: "submit",
    className: "boton bg-yellow mb-1",
    value: "Ingresar",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 17
    }
  }), __jsx("a", {
    href: "/",
    className: _Login_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.forgot__pass + ' ' + "text-center d-block",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 17
    }
  }, "Olvid\xE9 mi constrase\xF1a")), __jsx("section", {
    className: _Login_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.registerInLogin + ' ' + "text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 13
    }
  }, __jsx("span", {
    className: "text-muted",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 17
    }
  }, "\xBFNo tenes cuenta?", __jsx("span", {
    className: _Login_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.registerLink,
    onClick: habilitarRegister,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 63
    }
  }, " Registrate"))));
};

_s(Login, "8PkT1KpXCZuNstVJjMJevjUqMNI=");

_c = Login;
/* harmony default export */ __webpack_exports__["default"] = (Login);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTG9naW4vaW5kZXguanMiXSwibmFtZXMiOlsiTG9naW4iLCJwcm9wcyIsInVzZVN0YXRlIiwiZW1haWwiLCJwYXNzd29yZCIsImZvcm1Mb2dpblZhbHVlcyIsInNldEZvcm1Mb2dpblZhbHVlcyIsImVycm9yIiwic2V0RXJyb3IiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImxvZ3VlYWRvIiwic2V0TG9ndWVhZG8iLCJoYW5kbGVDaGFuZ2VMb2dpbiIsImV2ZW50IiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwiaGFuZGxlU3VibWl0TG9naW4iLCJwcmV2ZW50RGVmYXVsdCIsInRyaW0iLCJidG5TdWJtaXQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJzZXRBdHRyaWJ1dGUiLCJoZWFkZXJzIiwiSGVhZGVycyIsImFwcGVuZCIsImZldGNoIiwiQVBJIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0aGVuIiwicmVzIiwianNvbiIsInJlc3BvbnNlIiwicmVtb3ZlQXR0cmlidXRlIiwib2siLCJ1c3VhcmlvIiwibm9tYnJlIiwiaW5mbyIsImhhYmlsaXRhclJlZ2lzdGVyIiwic2hvd1JlZ2lzdGVyIiwiTG9naW5TdHlsZSIsImxvZ2luX19jb250YWluZXIiLCJ0aXRsZV9fbG9naW4iLCJmb3JtIiwibGFiZWwiLCJpbnB1dCIsImZvcmdvdF9fcGFzcyIsInJlZ2lzdGVySW5Mb2dpbiIsInJlZ2lzdGVyTGluayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsSUFBTUEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQUEsa0JBQ3lCQyxzREFBUSxDQUFDO0FBQ25EQyxTQUFLLEVBQUMsRUFENkM7QUFFbkRDLFlBQVEsRUFBQztBQUYwQyxHQUFELENBRGpD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QUF5RyxTQUFLLEVBQUU3QyxlQUFlLENBQUNELFFBQWhJO0FBQTBJLFlBQVEsRUFBRVMsaUJBQXBKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFKSixFQUtJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFMSixFQU1JO0FBQU8sUUFBSSxFQUFDLFFBQVo7QUFBcUIsYUFBUyxFQUFDLHNCQUEvQjtBQUFzRCxTQUFLLEVBQUMsVUFBNUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQU5KLEVBT0k7QUFBRyxRQUFJLEVBQUMsR0FBUjtBQUFZLGFBQVMsRUFBRWdDLHdEQUFVLENBQUNNLFlBQVgsR0FBMEIsR0FBMUIsd0JBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUNBUEosQ0FMSixFQWNJO0FBQVMsYUFBUyxFQUFFTix3REFBVSxDQUFDTyxlQUFYLEdBQTZCLEdBQTdCLGdCQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBTSxhQUFTLEVBQUMsWUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFBOEM7QUFBTSxhQUFTLEVBQUVQLHdEQUFVLENBQUNRLFlBQTVCO0FBQTBDLFdBQU8sRUFBRVYsaUJBQW5EO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQTlDLENBREosQ0FkSixDQURKO0FBb0JILENBckVEOztHQUFNM0MsSzs7S0FBQUEsSztBQXVFU0Esb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC42OGNiNDEyM2UyMjU0MjdlYWFmMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgRXJyb3IgZnJvbSBcIi4uL0Vycm9yXCI7XHJcbmltcG9ydCBMb2dpblN0eWxlIGZyb20gICcuL0xvZ2luLm1vZHVsZS5jc3MnO1xyXG5pbXBvcnQge0FQSX0gZnJvbSAnLi4vLi4vLi4vY29uZmlnL2luZGV4JztcclxuaW1wb3J0IExvYWRlciBmcm9tICcuLi9Mb2FkZXInO1xyXG5jb25zdCBMb2dpbiA9IChwcm9wcykgPT4ge1xyXG4gICAgY29uc3QgW2Zvcm1Mb2dpblZhbHVlcywgc2V0Rm9ybUxvZ2luVmFsdWVzXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICBlbWFpbDonJyxcclxuICAgICAgICBwYXNzd29yZDonJ1xyXG4gICAgfSk7XHJcbiAgICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtsb2d1ZWFkbywgc2V0TG9ndWVhZG9dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZUxvZ2luID0gZXZlbnQ9PntcclxuICAgICAgICBzZXRGb3JtTG9naW5WYWx1ZXMoe1xyXG4gICAgICAgICAgICAuLi5mb3JtTG9naW5WYWx1ZXMsXHJcbiAgICAgICAgICAgIFtldmVudC50YXJnZXQubmFtZV06ZXZlbnQudGFyZ2V0LnZhbHVlXHJcbiAgICAgICAgfSlcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaGFuZGxlU3VibWl0TG9naW4gPSBldmVudD0+e1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgaWYoZm9ybUxvZ2luVmFsdWVzLmVtYWlsLnRyaW0oKT09PScnIHx8IGZvcm1Mb2dpblZhbHVlcy5wYXNzd29yZC50cmltKCk9PT0nJyl7XHJcbiAgICAgICAgICAgIHNldEVycm9yKCdFcyBuZWNlc2FyaW8gY29tcGxldGFyIHRvZG9zIGxvcyBjYW1wb3MnKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRFcnJvcihmYWxzZSk7XHJcbiAgICAgICAgc2V0TG9hZGluZyh0cnVlKTtcclxuICAgICAgICBsZXQgYnRuU3VibWl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Zvcm0tbG9naW4gLmJvdG9uJyk7XHJcbiAgICAgICAgYnRuU3VibWl0LnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLHRydWUpO1xyXG4gICAgICAgIGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcclxuICAgICAgICBoZWFkZXJzLmFwcGVuZChcIkNvbnRlbnQtVHlwZVwiLCBcImFwcGxpY2F0aW9uL2pzb25cIik7XHJcbiAgICAgICAgcmV0dXJuIGZldGNoKGAke0FQSX0vbG9naW5gLHtcclxuICAgICAgICAgICAgbWV0aG9kOidQT1NUJyxcclxuICAgICAgICAgICAgYm9keTpKU09OLnN0cmluZ2lmeShmb3JtTG9naW5WYWx1ZXMpLFxyXG4gICAgICAgICAgICBoZWFkZXJzXHJcbiAgICAgICAgfSkudGhlbihyZXM9PnJlcy5qc29uKCkpLnRoZW4ocmVzcG9uc2U9PntcclxuICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgICAgIGJ0blN1Ym1pdC5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7XHJcbiAgICAgICAgICAgIGlmKHJlc3BvbnNlLm9rKXtcclxuICAgICAgICAgICAgICAgIHNldExvZ3VlYWRvKGBCaWVudmVuaWRvICR7cmVzcG9uc2UudXN1YXJpby5ub21icmV9YCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHNldEVycm9yKHJlc3BvbnNlLmluZm8pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICAvL3JldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhYmlsaXRhclJlZ2lzdGVyID0gKCk9PntcclxuICAgICAgICBwcm9wcy5zaG93UmVnaXN0ZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtMb2dpblN0eWxlLmxvZ2luX19jb250YWluZXJ9PlxyXG4gICAgICAgICAgICA8aDYgY2xhc3NOYW1lPXtMb2dpblN0eWxlLnRpdGxlX19sb2dpbiArICcgJyArIGB0ZXh0LWNlbnRlcmB9PkluZ3Jlc8OhIGEgdHUgY3VlbnRhPC9oNj5cclxuICAgICAgICAgICAgeyhlcnJvcik/PEVycm9yIG1lc3NhZ2U9e2Vycm9yfS8+Om51bGx9XHJcbiAgICAgICAgICAgIHsobG9hZGluZyk/PGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPjxMb2FkZXIvPjwvZGl2PjpudWxsfVxyXG4gICAgICAgICAgICB7KGxvZ3VlYWRvKT88ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIGFsZXJ0IGFsZXJ0LXN1Y2Nlc3NcIj57bG9ndWVhZG99PC9kaXY+Om51bGx9XHJcbiAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT17TG9naW5TdHlsZS5mb3JtICsgJyAnICsgYGZvcm0tZ3JvdXBgfSBuYW1lPVwiZm9ybS1sb2dpblwiIGlkPVwiZm9ybS1sb2dpblwiIG9uU3VibWl0PXtoYW5kbGVTdWJtaXRMb2dpbn0+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPXtMb2dpblN0eWxlLmxhYmVsfSBodG1sRm9yPVwiZW1haWxcIj5FbWFpbDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImVtYWlsXCIgY2xhc3NOYW1lPXtMb2dpblN0eWxlLmlucHV0ICsgJyAnICsgYGZvcm0tY29udHJvbGB9IGlkPVwiZW1haWxcIiBuYW1lPVwiZW1haWxcIiB2YWx1ZT17Zm9ybUxvZ2luVmFsdWVzLmVtYWlsfSBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlTG9naW59Lz5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9e0xvZ2luU3R5bGUubGFiZWx9IGh0bWxGb3I9XCJwYXNzd29yZFwiPkNvbnRyYXNlw7FhPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBjbGFzc05hbWU9e0xvZ2luU3R5bGUuaW5wdXQgKyAnICcgKyBgZm9ybS1jb250cm9sYH0gaWQ9XCJwYXNzd29yZFwiIG5hbWU9XCJwYXNzd29yZFwiIHZhbHVlPXtmb3JtTG9naW5WYWx1ZXMucGFzc3dvcmR9IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2VMb2dpbn0vPlxyXG4gICAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiYm90b24gYmcteWVsbG93IG1iLTFcIiB2YWx1ZT1cIkluZ3Jlc2FyXCIvPlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9cIiBjbGFzc05hbWU9e0xvZ2luU3R5bGUuZm9yZ290X19wYXNzICsgJyAnICsgYHRleHQtY2VudGVyIGQtYmxvY2tgfT5PbHZpZMOpIG1pIGNvbnN0cmFzZcOxYTwvYT5cclxuICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e0xvZ2luU3R5bGUucmVnaXN0ZXJJbkxvZ2luICsgJyAnICsgYHRleHQtY2VudGVyYH0+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkXCI+wr9ObyB0ZW5lcyBjdWVudGE/PHNwYW4gY2xhc3NOYW1lPXtMb2dpblN0eWxlLnJlZ2lzdGVyTGlua30gb25DbGljaz17aGFiaWxpdGFyUmVnaXN0ZXJ9PiBSZWdpc3RyYXRlPC9zcGFuPjwvc3Bhbj5cclxuICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG4gXHJcbmV4cG9ydCBkZWZhdWx0IExvZ2luOyJdLCJzb3VyY2VSb290IjoiIn0=