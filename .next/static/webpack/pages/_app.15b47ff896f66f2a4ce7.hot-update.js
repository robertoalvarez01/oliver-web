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
    console.log(btnSubmit);
    var headers = new Headers();
    headers.append("Content-Type", "application/json");
    fetch("".concat(_config_index__WEBPACK_IMPORTED_MODULE_4__["API"], "/login"), {
      method: 'POST',
      body: JSON.stringify(formLoginValues),
      headers: headers
    }).then(function (res) {
      return res.json();
    }).then(function (response) {
      setLoading(false);

      if (response.ok) {
        alert('logueado');
      } else {
        setError('Usuario o contraseña incorrectos');
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
      lineNumber: 53,
      columnNumber: 9
    }
  }, __jsx("h6", {
    className: _Login_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.title__login + ' ' + "text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 13
    }
  }, "Ingres\xE1 a tu cuenta"), error ? __jsx(_Error__WEBPACK_IMPORTED_MODULE_2__["default"], {
    message: error,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 22
    }
  }) : null, loading ? __jsx("div", {
    className: "text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 24
    }
  }, __jsx(_Loader__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 53
    }
  })) : null, __jsx("form", {
    className: _Login_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.form + ' ' + "form-group",
    name: "form-login",
    id: "form-login",
    onSubmit: handleSubmitLogin,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 13
    }
  }, __jsx("label", {
    className: _Login_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.label,
    htmlFor: "email",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
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
      lineNumber: 59,
      columnNumber: 17
    }
  }), __jsx("label", {
    className: _Login_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.label,
    htmlFor: "password",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
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
      lineNumber: 61,
      columnNumber: 17
    }
  }), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 17
    }
  }), __jsx("input", {
    type: "submit",
    className: "boton bg-yellow mb-1",
    value: "Ingresar",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 17
    }
  }), __jsx("a", {
    href: "/",
    className: _Login_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.forgot__pass + ' ' + "text-center d-block",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 17
    }
  }, "Olvid\xE9 mi constrase\xF1a")), __jsx("section", {
    className: _Login_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.registerInLogin + ' ' + "text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 13
    }
  }, __jsx("span", {
    className: "text-muted",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 17
    }
  }, "\xBFNo tenes cuenta?", __jsx("span", {
    className: _Login_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.registerLink,
    onClick: habilitarRegister,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 63
    }
  }, " Registrate"))));
};

_s(Login, "YZ8THgCNofsMWiAAJftpZL4Hdss=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTG9naW4vaW5kZXguanMiXSwibmFtZXMiOlsiTG9naW4iLCJwcm9wcyIsInVzZVN0YXRlIiwiZW1haWwiLCJwYXNzd29yZCIsImZvcm1Mb2dpblZhbHVlcyIsInNldEZvcm1Mb2dpblZhbHVlcyIsImVycm9yIiwic2V0RXJyb3IiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImhhbmRsZUNoYW5nZUxvZ2luIiwiZXZlbnQiLCJ0YXJnZXQiLCJuYW1lIiwidmFsdWUiLCJoYW5kbGVTdWJtaXRMb2dpbiIsInByZXZlbnREZWZhdWx0IiwidHJpbSIsImJ0blN1Ym1pdCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImNvbnNvbGUiLCJsb2ciLCJoZWFkZXJzIiwiSGVhZGVycyIsImFwcGVuZCIsImZldGNoIiwiQVBJIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0aGVuIiwicmVzIiwianNvbiIsInJlc3BvbnNlIiwib2siLCJhbGVydCIsImhhYmlsaXRhclJlZ2lzdGVyIiwic2hvd1JlZ2lzdGVyIiwiTG9naW5TdHlsZSIsImxvZ2luX19jb250YWluZXIiLCJ0aXRsZV9fbG9naW4iLCJmb3JtIiwibGFiZWwiLCJpbnB1dCIsImZvcmdvdF9fcGFzcyIsInJlZ2lzdGVySW5Mb2dpbiIsInJlZ2lzdGVyTGluayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsSUFBTUEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQUEsa0JBQ3lCQyxzREFBUSxDQUFDO0FBQ25EQyxTQUFLLEVBQUMsRUFENkM7QUFFbkRDLFlBQVEsRUFBQztBQUYwQyxHQUFELENBRGpDO0FBQUEsTUFDZEMsZUFEYztBQUFBLE1BQ0dDLGtCQURIOztBQUFBLG1CQUtLSixzREFBUSxDQUFDLEtB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QTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUNBUEosQ0FKSixFQWFJO0FBQVMsYUFBUyxFQUFFTix3REFBVSxDQUFDTyxlQUFYLEdBQTZCLEdBQTdCLGdCQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBTSxhQUFTLEVBQUMsWUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFBOEM7QUFBTSxhQUFTLEVBQUVQLHdEQUFVLENBQUNRLFlBQTVCO0FBQTBDLFdBQU8sRUFBRVYsaUJBQW5EO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQTlDLENBREosQ0FiSixDQURKO0FBbUJILENBakVEOztHQUFNdkMsSzs7S0FBQUEsSztBQW1FU0Esb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC4xNWI0N2ZmODk2ZjY2ZjJhNGNlNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgRXJyb3IgZnJvbSBcIi4uL0Vycm9yXCI7XHJcbmltcG9ydCBMb2dpblN0eWxlIGZyb20gICcuL0xvZ2luLm1vZHVsZS5jc3MnO1xyXG5pbXBvcnQge0FQSX0gZnJvbSAnLi4vLi4vLi4vY29uZmlnL2luZGV4JztcclxuaW1wb3J0IExvYWRlciBmcm9tICcuLi9Mb2FkZXInO1xyXG5jb25zdCBMb2dpbiA9IChwcm9wcykgPT4ge1xyXG4gICAgY29uc3QgW2Zvcm1Mb2dpblZhbHVlcywgc2V0Rm9ybUxvZ2luVmFsdWVzXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICBlbWFpbDonJyxcclxuICAgICAgICBwYXNzd29yZDonJ1xyXG4gICAgfSk7XHJcbiAgICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVDaGFuZ2VMb2dpbiA9IGV2ZW50PT57XHJcbiAgICAgICAgc2V0Rm9ybUxvZ2luVmFsdWVzKHtcclxuICAgICAgICAgICAgLi4uZm9ybUxvZ2luVmFsdWVzLFxyXG4gICAgICAgICAgICBbZXZlbnQudGFyZ2V0Lm5hbWVdOmV2ZW50LnRhcmdldC52YWx1ZVxyXG4gICAgICAgIH0pXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdExvZ2luID0gZXZlbnQ9PntcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGlmKGZvcm1Mb2dpblZhbHVlcy5lbWFpbC50cmltKCk9PT0nJyB8fCBmb3JtTG9naW5WYWx1ZXMucGFzc3dvcmQudHJpbSgpPT09Jycpe1xyXG4gICAgICAgICAgICBzZXRFcnJvcignRXMgbmVjZXNhcmlvIGNvbXBsZXRhciB0b2RvcyBsb3MgY2FtcG9zJyk7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0RXJyb3IoZmFsc2UpO1xyXG4gICAgICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcbiAgICAgICAgbGV0IGJ0blN1Ym1pdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmb3JtLWxvZ2luIC5ib3RvbicpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGJ0blN1Ym1pdCk7XHJcbiAgICAgICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xyXG4gICAgICAgIGhlYWRlcnMuYXBwZW5kKFwiQ29udGVudC1UeXBlXCIsIFwiYXBwbGljYXRpb24vanNvblwiKTtcclxuICAgICAgICBmZXRjaChgJHtBUEl9L2xvZ2luYCx7XHJcbiAgICAgICAgICAgIG1ldGhvZDonUE9TVCcsXHJcbiAgICAgICAgICAgIGJvZHk6SlNPTi5zdHJpbmdpZnkoZm9ybUxvZ2luVmFsdWVzKSxcclxuICAgICAgICAgICAgaGVhZGVyc1xyXG4gICAgICAgIH0pLnRoZW4ocmVzPT5yZXMuanNvbigpKS50aGVuKHJlc3BvbnNlPT57XHJcbiAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgICBpZihyZXNwb25zZS5vayl7XHJcbiAgICAgICAgICAgICAgICBhbGVydCgnbG9ndWVhZG8nKTtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICBzZXRFcnJvcignVXN1YXJpbyBvIGNvbnRyYXNlw7FhIGluY29ycmVjdG9zJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIC8vcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFiaWxpdGFyUmVnaXN0ZXIgPSAoKT0+e1xyXG4gICAgICAgIHByb3BzLnNob3dSZWdpc3RlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e0xvZ2luU3R5bGUubG9naW5fX2NvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9e0xvZ2luU3R5bGUudGl0bGVfX2xvZ2luICsgJyAnICsgYHRleHQtY2VudGVyYH0+SW5ncmVzw6EgYSB0dSBjdWVudGE8L2g2PlxyXG4gICAgICAgICAgICB7KGVycm9yKT88RXJyb3IgbWVzc2FnZT17ZXJyb3J9Lz46bnVsbH1cclxuICAgICAgICAgICAgeyhsb2FkaW5nKT88ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+PExvYWRlci8+PC9kaXY+Om51bGx9XHJcbiAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT17TG9naW5TdHlsZS5mb3JtICsgJyAnICsgYGZvcm0tZ3JvdXBgfSBuYW1lPVwiZm9ybS1sb2dpblwiIGlkPVwiZm9ybS1sb2dpblwiIG9uU3VibWl0PXtoYW5kbGVTdWJtaXRMb2dpbn0+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPXtMb2dpblN0eWxlLmxhYmVsfSBodG1sRm9yPVwiZW1haWxcIj5FbWFpbDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImVtYWlsXCIgY2xhc3NOYW1lPXtMb2dpblN0eWxlLmlucHV0ICsgJyAnICsgYGZvcm0tY29udHJvbGB9IGlkPVwiZW1haWxcIiBuYW1lPVwiZW1haWxcIiB2YWx1ZT17Zm9ybUxvZ2luVmFsdWVzLmVtYWlsfSBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlTG9naW59Lz5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9e0xvZ2luU3R5bGUubGFiZWx9IGh0bWxGb3I9XCJwYXNzd29yZFwiPkNvbnRyYXNlw7FhPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBjbGFzc05hbWU9e0xvZ2luU3R5bGUuaW5wdXQgKyAnICcgKyBgZm9ybS1jb250cm9sYH0gaWQ9XCJwYXNzd29yZFwiIG5hbWU9XCJwYXNzd29yZFwiIHZhbHVlPXtmb3JtTG9naW5WYWx1ZXMucGFzc3dvcmR9IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2VMb2dpbn0vPlxyXG4gICAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiYm90b24gYmcteWVsbG93IG1iLTFcIiB2YWx1ZT1cIkluZ3Jlc2FyXCIvPlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9cIiBjbGFzc05hbWU9e0xvZ2luU3R5bGUuZm9yZ290X19wYXNzICsgJyAnICsgYHRleHQtY2VudGVyIGQtYmxvY2tgfT5PbHZpZMOpIG1pIGNvbnN0cmFzZcOxYTwvYT5cclxuICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e0xvZ2luU3R5bGUucmVnaXN0ZXJJbkxvZ2luICsgJyAnICsgYHRleHQtY2VudGVyYH0+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkXCI+wr9ObyB0ZW5lcyBjdWVudGE/PHNwYW4gY2xhc3NOYW1lPXtMb2dpblN0eWxlLnJlZ2lzdGVyTGlua30gb25DbGljaz17aGFiaWxpdGFyUmVnaXN0ZXJ9PiBSZWdpc3RyYXRlPC9zcGFuPjwvc3Bhbj5cclxuICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG4gXHJcbmV4cG9ydCBkZWZhdWx0IExvZ2luOyJdLCJzb3VyY2VSb290IjoiIn0=