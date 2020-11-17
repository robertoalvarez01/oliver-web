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
      lineNumber: 51,
      columnNumber: 9
    }
  }, __jsx("h6", {
    className: _Login_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.title__login + ' ' + "text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 13
    }
  }, "Ingres\xE1 a tu cuenta"), error ? __jsx(_Error__WEBPACK_IMPORTED_MODULE_2__["default"], {
    message: error,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 22
    }
  }) : null, __jsx("form", {
    className: _Login_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.form + ' ' + "form-group",
    name: "form-login",
    id: "form-login",
    onSubmit: handleSubmitLogin,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 13
    }
  }, __jsx("label", {
    className: _Login_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.label,
    htmlFor: "email",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
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
      lineNumber: 56,
      columnNumber: 17
    }
  }), __jsx("label", {
    className: _Login_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.label,
    htmlFor: "password",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
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
      lineNumber: 58,
      columnNumber: 17
    }
  }), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 17
    }
  }), __jsx("input", {
    type: "submit",
    className: "boton bg-yellow mb-1",
    value: "Ingresar",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 17
    }
  }), __jsx("a", {
    href: "/",
    className: _Login_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.forgot__pass + ' ' + "text-center d-block",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 17
    }
  }, "Olvid\xE9 mi constrase\xF1a")), loading ? __jsx(_Loader__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 24
    }
  }) : __jsx("section", {
    className: _Login_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.registerInLogin + ' ' + "text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 17
    }
  }, __jsx("span", {
    className: "text-muted",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 21
    }
  }, "\xBFNo tenes cuenta?", __jsx("span", {
    className: _Login_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.registerLink,
    onClick: habilitarRegister,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 67
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTG9naW4vaW5kZXguanMiXSwibmFtZXMiOlsiTG9naW4iLCJwcm9wcyIsInVzZVN0YXRlIiwiZW1haWwiLCJwYXNzd29yZCIsImZvcm1Mb2dpblZhbHVlcyIsInNldEZvcm1Mb2dpblZhbHVlcyIsImVycm9yIiwic2V0RXJyb3IiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImhhbmRsZUNoYW5nZUxvZ2luIiwiZXZlbnQiLCJ0YXJnZXQiLCJuYW1lIiwidmFsdWUiLCJoYW5kbGVTdWJtaXRMb2dpbiIsInByZXZlbnREZWZhdWx0IiwidHJpbSIsImhlYWRlcnMiLCJIZWFkZXJzIiwiYXBwZW5kIiwiZmV0Y2giLCJBUEkiLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInRoZW4iLCJyZXMiLCJqc29uIiwicmVzcG9uc2UiLCJvayIsImFsZXJ0IiwiaGFiaWxpdGFyUmVnaXN0ZXIiLCJzaG93UmVnaXN0ZXIiLCJMb2dpblN0eWxlIiwibG9naW5fX2NvbnRhaW5lciIsInRpdGxlX19sb2dpbiIsImZvcm0iLCJsYWJlbCIsImlucHV0IiwiZm9yZ290X19wYXNzIiwicmVnaXN0ZXJJbkxvZ2luIiwicmVnaXN0ZXJMaW5rIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxJQUFNQSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFBQSxrQkFDeUJDLHNEQUFRLENBQUM7QUFDbkRDLFNBQUssRUFBQyxFQUQ2QztBQUVuREMsWUFBUSxFQUFDO0FBRjBDLEdBQUQsQ0FEakM7QUFBQSxNQUNkQyxlQURjO0FBQUEsTUFDR0Msa0JBREg7O0FBQUEsbUJBS0tKLHNEQUFRLENBQUMsS0FBRCxDQUxiO0FBQUEsTUFLZEssS0FMYztBQUFBLE1BS1BDLFFBTE87O0FBQUEsbUJBTVNOLHNE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Q1EsWUFBNUI7QUFBMEMsV0FBTyxFQUFFVixpQkFBbkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFBOUMsQ0FESixDQWJSLENBREo7QUFvQkgsQ0FoRUQ7O0dBQU1sQyxLOztLQUFBQSxLO0FBa0VTQSxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjNiMWM5ZDc5YTNmZTNkM2JlYWU0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3Qse3VzZVN0YXRlfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBFcnJvciBmcm9tIFwiLi4vRXJyb3JcIjtcclxuaW1wb3J0IExvZ2luU3R5bGUgZnJvbSAgJy4vTG9naW4ubW9kdWxlLmNzcyc7XHJcbmltcG9ydCB7QVBJfSBmcm9tICcuLi8uLi8uLi9jb25maWcvaW5kZXgnO1xyXG5pbXBvcnQgTG9hZGVyIGZyb20gJy4uL0xvYWRlcic7XHJcbmNvbnN0IExvZ2luID0gKHByb3BzKSA9PiB7XHJcbiAgICBjb25zdCBbZm9ybUxvZ2luVmFsdWVzLCBzZXRGb3JtTG9naW5WYWx1ZXNdID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIGVtYWlsOicnLFxyXG4gICAgICAgIHBhc3N3b3JkOicnXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZUxvZ2luID0gZXZlbnQ9PntcclxuICAgICAgICBzZXRGb3JtTG9naW5WYWx1ZXMoe1xyXG4gICAgICAgICAgICAuLi5mb3JtTG9naW5WYWx1ZXMsXHJcbiAgICAgICAgICAgIFtldmVudC50YXJnZXQubmFtZV06ZXZlbnQudGFyZ2V0LnZhbHVlXHJcbiAgICAgICAgfSlcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaGFuZGxlU3VibWl0TG9naW4gPSBldmVudD0+e1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgaWYoZm9ybUxvZ2luVmFsdWVzLmVtYWlsLnRyaW0oKT09PScnIHx8IGZvcm1Mb2dpblZhbHVlcy5wYXNzd29yZC50cmltKCk9PT0nJyl7XHJcbiAgICAgICAgICAgIHNldEVycm9yKCdFcyBuZWNlc2FyaW8gY29tcGxldGFyIHRvZG9zIGxvcyBjYW1wb3MnKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRFcnJvcihmYWxzZSk7XHJcbiAgICAgICAgc2V0TG9hZGluZyh0cnVlKTtcclxuICAgICAgICBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XHJcbiAgICAgICAgaGVhZGVycy5hcHBlbmQoXCJDb250ZW50LVR5cGVcIiwgXCJhcHBsaWNhdGlvbi9qc29uXCIpO1xyXG4gICAgICAgIGZldGNoKGAke0FQSX0vbG9naW5gLHtcclxuICAgICAgICAgICAgbWV0aG9kOidQT1NUJyxcclxuICAgICAgICAgICAgYm9keTpKU09OLnN0cmluZ2lmeShmb3JtTG9naW5WYWx1ZXMpLFxyXG4gICAgICAgICAgICBoZWFkZXJzXHJcbiAgICAgICAgfSkudGhlbihyZXM9PnJlcy5qc29uKCkpLnRoZW4ocmVzcG9uc2U9PntcclxuICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgICAgIGlmKHJlc3BvbnNlLm9rKXtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KCdsb2d1ZWFkbycpO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIHNldEVycm9yKCdVc3VhcmlvIG8gY29udHJhc2XDsWEgaW5jb3JyZWN0b3MnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLy9yZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYWJpbGl0YXJSZWdpc3RlciA9ICgpPT57XHJcbiAgICAgICAgcHJvcHMuc2hvd1JlZ2lzdGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17TG9naW5TdHlsZS5sb2dpbl9fY29udGFpbmVyfT5cclxuICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT17TG9naW5TdHlsZS50aXRsZV9fbG9naW4gKyAnICcgKyBgdGV4dC1jZW50ZXJgfT5JbmdyZXPDoSBhIHR1IGN1ZW50YTwvaDY+XHJcbiAgICAgICAgICAgIHsoZXJyb3IpPzxFcnJvciBtZXNzYWdlPXtlcnJvcn0vPjpudWxsfVxyXG4gICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9e0xvZ2luU3R5bGUuZm9ybSArICcgJyArIGBmb3JtLWdyb3VwYH0gbmFtZT1cImZvcm0tbG9naW5cIiBpZD1cImZvcm0tbG9naW5cIiBvblN1Ym1pdD17aGFuZGxlU3VibWl0TG9naW59PlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT17TG9naW5TdHlsZS5sYWJlbH0gaHRtbEZvcj1cImVtYWlsXCI+RW1haWw8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJlbWFpbFwiIGNsYXNzTmFtZT17TG9naW5TdHlsZS5pbnB1dCArICcgJyArIGBmb3JtLWNvbnRyb2xgfSBpZD1cImVtYWlsXCIgbmFtZT1cImVtYWlsXCIgdmFsdWU9e2Zvcm1Mb2dpblZhbHVlcy5lbWFpbH0gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZUxvZ2lufS8+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPXtMb2dpblN0eWxlLmxhYmVsfSBodG1sRm9yPVwicGFzc3dvcmRcIj5Db250cmFzZcOxYTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgY2xhc3NOYW1lPXtMb2dpblN0eWxlLmlucHV0ICsgJyAnICsgYGZvcm0tY29udHJvbGB9IGlkPVwicGFzc3dvcmRcIiBuYW1lPVwicGFzc3dvcmRcIiB2YWx1ZT17Zm9ybUxvZ2luVmFsdWVzLnBhc3N3b3JkfSBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlTG9naW59Lz5cclxuICAgICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImJvdG9uIGJnLXllbGxvdyBtYi0xXCIgdmFsdWU9XCJJbmdyZXNhclwiLz5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvXCIgY2xhc3NOYW1lPXtMb2dpblN0eWxlLmZvcmdvdF9fcGFzcyArICcgJyArIGB0ZXh0LWNlbnRlciBkLWJsb2NrYH0+T2x2aWTDqSBtaSBjb25zdHJhc2XDsWE8L2E+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgeyhsb2FkaW5nKT88TG9hZGVyLz46XHJcbiAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e0xvZ2luU3R5bGUucmVnaXN0ZXJJbkxvZ2luICsgJyAnICsgYHRleHQtY2VudGVyYH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1tdXRlZFwiPsK/Tm8gdGVuZXMgY3VlbnRhPzxzcGFuIGNsYXNzTmFtZT17TG9naW5TdHlsZS5yZWdpc3Rlckxpbmt9IG9uQ2xpY2s9e2hhYmlsaXRhclJlZ2lzdGVyfT4gUmVnaXN0cmF0ZTwvc3Bhbj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuIFxyXG5leHBvcnQgZGVmYXVsdCBMb2dpbjsiXSwic291cmNlUm9vdCI6IiJ9