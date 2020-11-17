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
    return fetch("".concat(_config_index__WEBPACK_IMPORTED_MODULE_4__["API"], "/login"), {
      method: 'POST',
      body: JSON.stringify(formLoginValues),
      headers: headers
    }).then(function (res) {
      return res.json();
    }).then(function (response) {
      setLoading(false);

      if (response.ok) {
        setLogueado("Bienvenido ".concat(response.usuario.nombre));
        return;
      } else {
        btnSubmit.removeAttribute('disabled');
        return setError(response.info);
      }
    }); //return true;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTG9naW4vaW5kZXguanMiXSwibmFtZXMiOlsiTG9naW4iLCJwcm9wcyIsInVzZVN0YXRlIiwiZW1haWwiLCJwYXNzd29yZCIsImZvcm1Mb2dpblZhbHVlcyIsInNldEZvcm1Mb2dpblZhbHVlcyIsImhhbmRsZUNoYW5nZUxvZ2luIiwiZXZlbnQiLCJ0YXJnZXQiLCJuYW1lIiwidmFsdWUiLCJoYW5kbGVTdWJtaXRMb2dpbiIsInByZXZlbnREZWZhdWx0IiwiYnRuU3VibWl0IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwic2V0QXR0cmlidXRlIiwiZmV0Y2giLCJBUEkiLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImhlYWRlcnMiLCJ0aGVuIiwicmVzIiwianNvbiIsInJlc3BvbnNlIiwic2V0TG9hZGluZyIsIm9rIiwic2V0TG9ndWVhZG8iLCJ1c3VhcmlvIiwibm9tYnJlIiwicmVtb3ZlQXR0cmlidXRlIiwic2V0RXJyb3IiLCJpbmZvIiwiaGFiaWxpdGFyUmVnaXN0ZXIiLCJzaG93UmVnaXN0ZXIiLCJjb25zb2xlIiwibG9nIiwiTG9naW5TdHlsZSIsImxvZ2luX19jb250YWluZXIiLCJ0aXRsZV9fbG9naW4iLCJlcnJvciIsImxvYWRpbmciLCJsb2d1ZWFkbyIsImZvcm0iLCJsYWJlbCIsImlucHV0IiwiZm9yZ290X19wYXNzIiwicmVnaXN0ZXJJbkxvZ2luIiwicmVnaXN0ZXJMaW5rIiwibWFwU3RhdGVUb1Byb3BzIiwicmVkdWNlcnMiLCJ1c3VhcmlvUmVkdWNlciIsImNvbm5lY3QiLCJ1c3VhcmlvQWN0aW9ucyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQUEs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QTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFOSixFQU9JO0FBQUcsUUFBSSxFQUFDLEdBQVI7QUFBWSxhQUFTLEVBQUVrQyx3REFBVSxDQUFDUyxZQUFYLEdBQTBCLEdBQTFCLHdCQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1DQVBKLENBREosRUFVSTtBQUFTLGFBQVMsRUFBRVQsd0RBQVUsQ0FBQ1UsZUFBWCxHQUE2QixHQUE3QixnQkFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQU0sYUFBUyxFQUFDLFlBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBQThDO0FBQU0sYUFBUyxFQUFFVix3REFBVSxDQUFDVyxZQUE1QjtBQUEwQyxXQUFPLEVBQUVmLGlCQUFuRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUE5QyxDQURKLENBVkosQ0FWUixDQURKO0FBNEJILENBbkVEOztHQUFNckMsSzs7S0FBQUEsSzs7QUFvRU4sSUFBTXFELGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQUMsUUFBUSxFQUFFO0FBQzlCLFNBQU9BLFFBQVEsQ0FBQ0MsY0FBaEI7QUFDSCxDQUZEOztBQUllQywwSEFBTyxDQUFDSCxlQUFELEVBQWlCSSwwREFBakIsQ0FBUCxDQUF3Q3pELEtBQXhDLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5mNmZjMzcwZmRlNzJjN2UwYTE2Ni5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgRXJyb3IgZnJvbSBcIi4uL0Vycm9yXCI7XHJcbmltcG9ydCBMb2dpblN0eWxlIGZyb20gICcuL0xvZ2luLm1vZHVsZS5jc3MnO1xyXG5pbXBvcnQge0FQSX0gZnJvbSAnLi4vLi4vLi4vY29uZmlnL2luZGV4JztcclxuaW1wb3J0IExvYWRlciBmcm9tICcuLi9Mb2FkZXInO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgKiBhcyB1c3VhcmlvQWN0aW9ucyBmcm9tICcuLi8uLi8uLi9zdG9yZS9hY3Rpb25zL3VzdWFyaW9BY3Rpb25zJztcclxuXHJcbmNvbnN0IExvZ2luID0gKHByb3BzKSA9PiB7XHJcbiAgICBjb25zdCBbZm9ybUxvZ2luVmFsdWVzLCBzZXRGb3JtTG9naW5WYWx1ZXNdID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIGVtYWlsOicnLFxyXG4gICAgICAgIHBhc3N3b3JkOicnXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVDaGFuZ2VMb2dpbiA9IGV2ZW50PT57XHJcbiAgICAgICAgc2V0Rm9ybUxvZ2luVmFsdWVzKHtcclxuICAgICAgICAgICAgLi4uZm9ybUxvZ2luVmFsdWVzLFxyXG4gICAgICAgICAgICBbZXZlbnQudGFyZ2V0Lm5hbWVdOmV2ZW50LnRhcmdldC52YWx1ZVxyXG4gICAgICAgIH0pXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdExvZ2luID0gZXZlbnQ9PntcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGxldCBidG5TdWJtaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZm9ybS1sb2dpbiAuYm90b24nKTtcclxuICAgICAgICBidG5TdWJtaXQuc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsdHJ1ZSk7XHJcblxyXG4gICAgICAgIHJldHVybiBmZXRjaChgJHtBUEl9L2xvZ2luYCx7XHJcbiAgICAgICAgICAgIG1ldGhvZDonUE9TVCcsXHJcbiAgICAgICAgICAgIGJvZHk6SlNPTi5zdHJpbmdpZnkoZm9ybUxvZ2luVmFsdWVzKSxcclxuICAgICAgICAgICAgaGVhZGVyc1xyXG4gICAgICAgIH0pLnRoZW4ocmVzPT5yZXMuanNvbigpKS50aGVuKHJlc3BvbnNlPT57XHJcbiAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgICBpZihyZXNwb25zZS5vayl7XHJcbiAgICAgICAgICAgICAgICBzZXRMb2d1ZWFkbyhgQmllbnZlbmlkbyAke3Jlc3BvbnNlLnVzdWFyaW8ubm9tYnJlfWApO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIGJ0blN1Ym1pdC5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc2V0RXJyb3IocmVzcG9uc2UuaW5mbyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIC8vcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFiaWxpdGFyUmVnaXN0ZXIgPSAoKT0+e1xyXG4gICAgICAgIHByb3BzLnNob3dSZWdpc3RlcigpO1xyXG4gICAgfVxyXG4gICAgY29uc29sZS5sb2cocHJvcHMpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17TG9naW5TdHlsZS5sb2dpbl9fY29udGFpbmVyfT5cclxuICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT17TG9naW5TdHlsZS50aXRsZV9fbG9naW4gKyAnICcgKyBgdGV4dC1jZW50ZXJgfT5JbmdyZXPDoSBhIHR1IGN1ZW50YTwvaDY+XHJcbiAgICAgICAgICAgIHsocHJvcHMuZXJyb3IpPzxFcnJvciBtZXNzYWdlPXtlcnJvcn0vPjpudWxsfVxyXG4gICAgICAgICAgICB7KHByb3BzLmxvYWRpbmcpPzxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj48TG9hZGVyLz48L2Rpdj46bnVsbH1cclxuICAgICAgICAgICAgeyhwcm9wcy5sb2d1ZWFkbyk/XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIGFsZXJ0IGFsZXJ0LXN1Y2Nlc3NcIj57bG9ndWVhZG99PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiL1wiIGNsYXNzTmFtZT1cImJvdG9uIGJnLXllbGxvdyBtYi0xXCI+Q29udGludWFyPC9hPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9e0xvZ2luU3R5bGUuZm9ybSArICcgJyArIGBmb3JtLWdyb3VwYH0gbmFtZT1cImZvcm0tbG9naW5cIiBpZD1cImZvcm0tbG9naW5cIiBvblN1Ym1pdD17aGFuZGxlU3VibWl0TG9naW59PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPXtMb2dpblN0eWxlLmxhYmVsfSBodG1sRm9yPVwiZW1haWxcIj5FbWFpbDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZW1haWxcIiBjbGFzc05hbWU9e0xvZ2luU3R5bGUuaW5wdXQgKyAnICcgKyBgZm9ybS1jb250cm9sYH0gaWQ9XCJlbWFpbFwiIG5hbWU9XCJlbWFpbFwiIHZhbHVlPXtmb3JtTG9naW5WYWx1ZXMuZW1haWx9IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2VMb2dpbn0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPXtMb2dpblN0eWxlLmxhYmVsfSBodG1sRm9yPVwicGFzc3dvcmRcIj5Db250cmFzZcOxYTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBjbGFzc05hbWU9e0xvZ2luU3R5bGUuaW5wdXQgKyAnICcgKyBgZm9ybS1jb250cm9sYH0gaWQ9XCJwYXNzd29yZFwiIG5hbWU9XCJwYXNzd29yZFwiIHZhbHVlPXtmb3JtTG9naW5WYWx1ZXMucGFzc3dvcmR9IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2VMb2dpbn0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImJvdG9uIGJnLXllbGxvdyBtYi0xXCIgdmFsdWU9XCJJbmdyZXNhclwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9cIiBjbGFzc05hbWU9e0xvZ2luU3R5bGUuZm9yZ290X19wYXNzICsgJyAnICsgYHRleHQtY2VudGVyIGQtYmxvY2tgfT5PbHZpZMOpIG1pIGNvbnN0cmFzZcOxYTwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtMb2dpblN0eWxlLnJlZ2lzdGVySW5Mb2dpbiArICcgJyArIGB0ZXh0LWNlbnRlcmB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkXCI+wr9ObyB0ZW5lcyBjdWVudGE/PHNwYW4gY2xhc3NOYW1lPXtMb2dpblN0eWxlLnJlZ2lzdGVyTGlua30gb25DbGljaz17aGFiaWxpdGFyUmVnaXN0ZXJ9PiBSZWdpc3RyYXRlPC9zcGFuPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSByZWR1Y2Vycz0+e1xyXG4gICAgcmV0dXJuIHJlZHVjZXJzLnVzdWFyaW9SZWR1Y2VyO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcyx1c3VhcmlvQWN0aW9ucykoTG9naW4pOyJdLCJzb3VyY2VSb290IjoiIn0=