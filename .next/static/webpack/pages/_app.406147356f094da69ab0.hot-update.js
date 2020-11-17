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
    message: error,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTG9naW4vaW5kZXguanMiXSwibmFtZXMiOlsiTG9naW4iLCJwcm9wcyIsInVzZVN0YXRlIiwiZW1haWwiLCJwYXNzd29yZCIsImZvcm1Mb2dpblZhbHVlcyIsInNldEZvcm1Mb2dpblZhbHVlcyIsImhhbmRsZUNoYW5nZUxvZ2luIiwiZXZlbnQiLCJ0YXJnZXQiLCJuYW1lIiwidmFsdWUiLCJoYW5kbGVTdWJtaXRMb2dpbiIsInByZXZlbnREZWZhdWx0IiwiYnRuU3VibWl0IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwic2V0QXR0cmlidXRlIiwibG9naW4iLCJoYWJpbGl0YXJSZWdpc3RlciIsInNob3dSZWdpc3RlciIsImNvbnNvbGUiLCJsb2ciLCJMb2dpblN0eWxlIiwibG9naW5fX2NvbnRhaW5lciIsInRpdGxlX19sb2dpbiIsImVycm9yIiwibG9hZGluZyIsImxvZ3VlYWRvIiwiZm9ybSIsImxhYmVsIiwiaW5wdXQiLCJmb3Jnb3RfX3Bhc3MiLCJyZWdpc3RlckluTG9naW4iLCJyZWdpc3RlckxpbmsiLCJtYXBTdGF0ZVRvUHJvcHMiLCJyZWR1Y2VycyIsInVzdWFyaW9SZWR1Y2VyIiwiY29ubmVjdCIsInVzdWFyaW9BY3Rpb25zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFBQSxrQkFDeUJDLHNEQUFRLENBQUM7QUFDbkRDLFNBQUssRUFBQyxFQUQ2QztBQUVuREMsWUFBUSxFQUFDO0FBRjBDLEdBQUQsQ0FEakM7QUFBQSxNQUNkQyxlQURjO0FBQUEsTUFDR0Msa0JBREg7O0FBTXJCLE1BQU1DLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsQ0FBQUMsS0FBSyxFQUFFO0FBQzdC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QUFDSCxDQUZEOztBQUllQywwSEFBTyxDQUFDSCxlQUFELEVBQWlCSSwwREFBakIsQ0FBUCxDQUF3Q3ZDLEtBQXhDLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC40MDYxNDczNTZmMDk0ZGE2OWFiMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgRXJyb3IgZnJvbSBcIi4uL0Vycm9yXCI7XHJcbmltcG9ydCBMb2dpblN0eWxlIGZyb20gICcuL0xvZ2luLm1vZHVsZS5jc3MnO1xyXG5pbXBvcnQge0FQSX0gZnJvbSAnLi4vLi4vLi4vY29uZmlnL2luZGV4JztcclxuaW1wb3J0IExvYWRlciBmcm9tICcuLi9Mb2FkZXInO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgKiBhcyB1c3VhcmlvQWN0aW9ucyBmcm9tICcuLi8uLi8uLi9zdG9yZS9hY3Rpb25zL3VzdWFyaW9BY3Rpb25zJztcclxuXHJcbmNvbnN0IExvZ2luID0gKHByb3BzKSA9PiB7XHJcbiAgICBjb25zdCBbZm9ybUxvZ2luVmFsdWVzLCBzZXRGb3JtTG9naW5WYWx1ZXNdID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIGVtYWlsOicnLFxyXG4gICAgICAgIHBhc3N3b3JkOicnXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVDaGFuZ2VMb2dpbiA9IGV2ZW50PT57XHJcbiAgICAgICAgc2V0Rm9ybUxvZ2luVmFsdWVzKHtcclxuICAgICAgICAgICAgLi4uZm9ybUxvZ2luVmFsdWVzLFxyXG4gICAgICAgICAgICBbZXZlbnQudGFyZ2V0Lm5hbWVdOmV2ZW50LnRhcmdldC52YWx1ZVxyXG4gICAgICAgIH0pXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdExvZ2luID0gZXZlbnQ9PntcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGxldCBidG5TdWJtaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZm9ybS1sb2dpbiAuYm90b24nKTtcclxuICAgICAgICBidG5TdWJtaXQuc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsdHJ1ZSk7XHJcbiAgICAgICAgcHJvcHMubG9naW4oZm9ybUxvZ2luVmFsdWVzKTtcclxuICAgICAgICAvLyByZXR1cm4gZmV0Y2goYCR7QVBJfS9sb2dpbmAse1xyXG4gICAgICAgIC8vICAgICBtZXRob2Q6J1BPU1QnLFxyXG4gICAgICAgIC8vICAgICBib2R5OkpTT04uc3RyaW5naWZ5KGZvcm1Mb2dpblZhbHVlcyksXHJcbiAgICAgICAgLy8gICAgIGhlYWRlcnNcclxuICAgICAgICAvLyB9KS50aGVuKHJlcz0+cmVzLmpzb24oKSkudGhlbihyZXNwb25zZT0+e1xyXG4gICAgICAgIC8vICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICAvLyAgICAgaWYocmVzcG9uc2Uub2spe1xyXG4gICAgICAgIC8vICAgICAgICAgc2V0TG9ndWVhZG8oYEJpZW52ZW5pZG8gJHtyZXNwb25zZS51c3VhcmlvLm5vbWJyZX1gKTtcclxuICAgICAgICAvLyAgICAgICAgIHJldHVybjtcclxuICAgICAgICAvLyAgICAgfWVsc2V7XHJcbiAgICAgICAgLy8gICAgICAgICBidG5TdWJtaXQucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpO1xyXG4gICAgICAgIC8vICAgICAgICAgcmV0dXJuIHNldEVycm9yKHJlc3BvbnNlLmluZm8pO1xyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gfSlcclxuICAgICAgICAvL3JldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhYmlsaXRhclJlZ2lzdGVyID0gKCk9PntcclxuICAgICAgICBwcm9wcy5zaG93UmVnaXN0ZXIoKTtcclxuICAgIH1cclxuICAgIGNvbnNvbGUubG9nKHByb3BzKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e0xvZ2luU3R5bGUubG9naW5fX2NvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9e0xvZ2luU3R5bGUudGl0bGVfX2xvZ2luICsgJyAnICsgYHRleHQtY2VudGVyYH0+SW5ncmVzw6EgYSB0dSBjdWVudGE8L2g2PlxyXG4gICAgICAgICAgICB7KHByb3BzLmVycm9yKT88RXJyb3IgbWVzc2FnZT17ZXJyb3J9Lz46bnVsbH1cclxuICAgICAgICAgICAgeyhwcm9wcy5sb2FkaW5nKT88ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+PExvYWRlci8+PC9kaXY+Om51bGx9XHJcbiAgICAgICAgICAgIHsocHJvcHMubG9ndWVhZG8pP1xyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBhbGVydCBhbGVydC1zdWNjZXNzXCI+e2xvZ3VlYWRvfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9cIiBjbGFzc05hbWU9XCJib3RvbiBiZy15ZWxsb3cgbWItMVwiPkNvbnRpbnVhcjwvYT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPXtMb2dpblN0eWxlLmZvcm0gKyAnICcgKyBgZm9ybS1ncm91cGB9IG5hbWU9XCJmb3JtLWxvZ2luXCIgaWQ9XCJmb3JtLWxvZ2luXCIgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdExvZ2lufT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT17TG9naW5TdHlsZS5sYWJlbH0gaHRtbEZvcj1cImVtYWlsXCI+RW1haWw8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImVtYWlsXCIgY2xhc3NOYW1lPXtMb2dpblN0eWxlLmlucHV0ICsgJyAnICsgYGZvcm0tY29udHJvbGB9IGlkPVwiZW1haWxcIiBuYW1lPVwiZW1haWxcIiB2YWx1ZT17Zm9ybUxvZ2luVmFsdWVzLmVtYWlsfSBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlTG9naW59Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT17TG9naW5TdHlsZS5sYWJlbH0gaHRtbEZvcj1cInBhc3N3b3JkXCI+Q29udHJhc2XDsWE8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgY2xhc3NOYW1lPXtMb2dpblN0eWxlLmlucHV0ICsgJyAnICsgYGZvcm0tY29udHJvbGB9IGlkPVwicGFzc3dvcmRcIiBuYW1lPVwicGFzc3dvcmRcIiB2YWx1ZT17Zm9ybUxvZ2luVmFsdWVzLnBhc3N3b3JkfSBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlTG9naW59Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJib3RvbiBiZy15ZWxsb3cgbWItMVwiIHZhbHVlPVwiSW5ncmVzYXJcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvXCIgY2xhc3NOYW1lPXtMb2dpblN0eWxlLmZvcmdvdF9fcGFzcyArICcgJyArIGB0ZXh0LWNlbnRlciBkLWJsb2NrYH0+T2x2aWTDqSBtaSBjb25zdHJhc2XDsWE8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17TG9naW5TdHlsZS5yZWdpc3RlckluTG9naW4gKyAnICcgKyBgdGV4dC1jZW50ZXJgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1tdXRlZFwiPsK/Tm8gdGVuZXMgY3VlbnRhPzxzcGFuIGNsYXNzTmFtZT17TG9naW5TdHlsZS5yZWdpc3Rlckxpbmt9IG9uQ2xpY2s9e2hhYmlsaXRhclJlZ2lzdGVyfT4gUmVnaXN0cmF0ZTwvc3Bhbj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gcmVkdWNlcnM9PntcclxuICAgIHJldHVybiByZWR1Y2Vycy51c3VhcmlvUmVkdWNlcjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsdXN1YXJpb0FjdGlvbnMpKExvZ2luKTsiXSwic291cmNlUm9vdCI6IiJ9