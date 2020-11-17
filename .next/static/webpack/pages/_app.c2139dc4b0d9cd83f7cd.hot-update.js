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
    event.preventDefault(); //let btnSubmit = document.querySelector('#form-login .boton');
    //btnSubmit.setAttribute('disabled',true);

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
  })) : null, props.logueado ? __jsx("a", {
    href: "/",
    className: "boton bg-yellow mb-1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 31
    }
  }, "Continuar") : __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("form", {
    className: _Login_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.form + ' ' + "form-group",
    name: "form-login",
    id: "form-login",
    onSubmit: handleSubmitLogin,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 21
    }
  }, __jsx("label", {
    className: _Login_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.label,
    htmlFor: "email",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
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
      lineNumber: 57,
      columnNumber: 25
    }
  }), __jsx("label", {
    className: _Login_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.label,
    htmlFor: "password",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
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
      lineNumber: 59,
      columnNumber: 25
    }
  }), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 25
    }
  }), __jsx("input", {
    type: "submit",
    className: "boton bg-yellow mb-1",
    value: "Ingresar",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 25
    }
  }), __jsx("a", {
    href: "/",
    className: _Login_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.forgot__pass + ' ' + "text-center d-block",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 25
    }
  }, "Olvid\xE9 mi constrase\xF1a")), __jsx("section", {
    className: _Login_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.registerInLogin + ' ' + "text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 21
    }
  }, __jsx("span", {
    className: "text-muted",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 25
    }
  }, "\xBFNo tenes cuenta?", __jsx("span", {
    className: _Login_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.registerLink,
    onClick: habilitarRegister,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTG9naW4vaW5kZXguanMiXSwibmFtZXMiOlsiTG9naW4iLCJwcm9wcyIsInVzZVN0YXRlIiwiZW1haWwiLCJwYXNzd29yZCIsImZvcm1Mb2dpblZhbHVlcyIsInNldEZvcm1Mb2dpblZhbHVlcyIsImhhbmRsZUNoYW5nZUxvZ2luIiwiZXZlbnQiLCJ0YXJnZXQiLCJuYW1lIiwidmFsdWUiLCJoYW5kbGVTdWJtaXRMb2dpbiIsInByZXZlbnREZWZhdWx0IiwibG9naW4iLCJoYWJpbGl0YXJSZWdpc3RlciIsInNob3dSZWdpc3RlciIsImNvbnNvbGUiLCJsb2ciLCJMb2dpblN0eWxlIiwibG9naW5fX2NvbnRhaW5lciIsInRpdGxlX19sb2dpbiIsImVycm9yIiwibG9hZGluZyIsImxvZ3VlYWRvIiwiZm9ybSIsImxhYmVsIiwiaW5wdXQiLCJmb3Jnb3RfX3Bhc3MiLCJyZWdpc3RlckluTG9naW4iLCJyZWdpc3RlckxpbmsiLCJtYXBTdGF0ZVRvUHJvcHMiLCJyZWR1Y2VycyIsInVzdWFyaW9SZWR1Y2VyIiwiY29ubmVjdCIsInVzdWFyaW9BY3Rpb25zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFBQSxrQkFDeUJDLHNEQUFRLENBQUM7QUFDbkRDLFNBQUssRUFBQyxFQUQ2QztBQUVuREMsWUFBUSxFQUFDO0FBRjBDLEdBQUQsQ0FEakM7QUFBQSxNQUNkQyxlQURjO0FBQUEsTUFDR0Msa0JBREg7O0FBTXJCLE1BQU1DLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsQ0FBQUMsS0FBSyxFQUFFO0FBQzdCRixzQkFBa0IsaUNBQ1hELGVBRFcscUdBRWJHLEtBQUssQ0FBQ0MsTUFBTixDQUFhQyxJQUZB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QUFBO0FBQUE7QUFBQSxJQUxKLEVBTUk7QUFBTyxRQUFJLEVBQUMsUUFBWjtBQUFxQixhQUFTLEVBQUMsc0JBQS9CO0FBQXNELFNBQUssRUFBQyxVQUE1RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTkosRUFPSTtBQUFHLFFBQUksRUFBQyxHQUFSO0FBQVksYUFBUyxFQUFFWSx3REFBVSxDQUFDUyxZQUFYLEdBQTBCLEdBQTFCLHdCQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1DQVBKLENBREosRUFVSTtBQUFTLGFBQVMsRUFBRVQsd0RBQVUsQ0FBQ1UsZUFBWCxHQUE2QixHQUE3QixnQkFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQU0sYUFBUyxFQUFDLFlBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBQThDO0FBQU0sYUFBUyxFQUFFVix3REFBVSxDQUFDVyxZQUE1QjtBQUEwQyxXQUFPLEVBQUVmLGlCQUFuRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUE5QyxDQURKLENBVkosQ0FMUixDQURKO0FBdUJILENBOUREOztHQUFNZixLOztLQUFBQSxLOztBQStETixJQUFNK0IsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFBQyxRQUFRLEVBQUU7QUFDOUIsU0FBT0EsUUFBUSxDQUFDQyxjQUFoQjtBQUNILENBRkQ7O0FBSWVDLDBIQUFPLENBQUNILGVBQUQsRUFBaUJJLDBEQUFqQixDQUFQLENBQXdDbkMsS0FBeEMsQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLmMyMTM5ZGM0YjBkOWNkODNmN2NkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3Qse3VzZVN0YXRlfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBFcnJvciBmcm9tIFwiLi4vRXJyb3JcIjtcclxuaW1wb3J0IExvZ2luU3R5bGUgZnJvbSAgJy4vTG9naW4ubW9kdWxlLmNzcyc7XHJcbmltcG9ydCB7QVBJfSBmcm9tICcuLi8uLi8uLi9jb25maWcvaW5kZXgnO1xyXG5pbXBvcnQgTG9hZGVyIGZyb20gJy4uL0xvYWRlcic7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCAqIGFzIHVzdWFyaW9BY3Rpb25zIGZyb20gJy4uLy4uLy4uL3N0b3JlL2FjdGlvbnMvdXN1YXJpb0FjdGlvbnMnO1xyXG5cclxuY29uc3QgTG9naW4gPSAocHJvcHMpID0+IHtcclxuICAgIGNvbnN0IFtmb3JtTG9naW5WYWx1ZXMsIHNldEZvcm1Mb2dpblZhbHVlc10gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgZW1haWw6JycsXHJcbiAgICAgICAgcGFzc3dvcmQ6JydcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZUxvZ2luID0gZXZlbnQ9PntcclxuICAgICAgICBzZXRGb3JtTG9naW5WYWx1ZXMoe1xyXG4gICAgICAgICAgICAuLi5mb3JtTG9naW5WYWx1ZXMsXHJcbiAgICAgICAgICAgIFtldmVudC50YXJnZXQubmFtZV06ZXZlbnQudGFyZ2V0LnZhbHVlXHJcbiAgICAgICAgfSlcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaGFuZGxlU3VibWl0TG9naW4gPSBldmVudD0+e1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgLy9sZXQgYnRuU3VibWl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Zvcm0tbG9naW4gLmJvdG9uJyk7XHJcbiAgICAgICAgLy9idG5TdWJtaXQuc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsdHJ1ZSk7XHJcbiAgICAgICAgcHJvcHMubG9naW4oZm9ybUxvZ2luVmFsdWVzKTtcclxuICAgICAgICAvLyByZXR1cm4gZmV0Y2goYCR7QVBJfS9sb2dpbmAse1xyXG4gICAgICAgIC8vICAgICBtZXRob2Q6J1BPU1QnLFxyXG4gICAgICAgIC8vICAgICBib2R5OkpTT04uc3RyaW5naWZ5KGZvcm1Mb2dpblZhbHVlcyksXHJcbiAgICAgICAgLy8gICAgIGhlYWRlcnNcclxuICAgICAgICAvLyB9KS50aGVuKHJlcz0+cmVzLmpzb24oKSkudGhlbihyZXNwb25zZT0+e1xyXG4gICAgICAgIC8vICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICAvLyAgICAgaWYocmVzcG9uc2Uub2spe1xyXG4gICAgICAgIC8vICAgICAgICAgc2V0TG9ndWVhZG8oYEJpZW52ZW5pZG8gJHtyZXNwb25zZS51c3VhcmlvLm5vbWJyZX1gKTtcclxuICAgICAgICAvLyAgICAgICAgIHJldHVybjtcclxuICAgICAgICAvLyAgICAgfWVsc2V7XHJcbiAgICAgICAgLy8gICAgICAgICBidG5TdWJtaXQucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpO1xyXG4gICAgICAgIC8vICAgICAgICAgcmV0dXJuIHNldEVycm9yKHJlc3BvbnNlLmluZm8pO1xyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gfSlcclxuICAgICAgICAvL3JldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhYmlsaXRhclJlZ2lzdGVyID0gKCk9PntcclxuICAgICAgICBwcm9wcy5zaG93UmVnaXN0ZXIoKTtcclxuICAgIH1cclxuICAgIGNvbnNvbGUubG9nKHByb3BzKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e0xvZ2luU3R5bGUubG9naW5fX2NvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9e0xvZ2luU3R5bGUudGl0bGVfX2xvZ2luICsgJyAnICsgYHRleHQtY2VudGVyYH0+SW5ncmVzw6EgYSB0dSBjdWVudGE8L2g2PlxyXG4gICAgICAgICAgICB7KHByb3BzLmVycm9yKT88RXJyb3IgbWVzc2FnZT17cHJvcHMuZXJyb3J9Lz46bnVsbH1cclxuICAgICAgICAgICAgeyhwcm9wcy5sb2FkaW5nKT88ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+PExvYWRlci8+PC9kaXY+Om51bGx9XHJcbiAgICAgICAgICAgIHsocHJvcHMubG9ndWVhZG8pPzxhIGhyZWY9XCIvXCIgY2xhc3NOYW1lPVwiYm90b24gYmcteWVsbG93IG1iLTFcIj5Db250aW51YXI8L2E+OlxyXG4gICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9e0xvZ2luU3R5bGUuZm9ybSArICcgJyArIGBmb3JtLWdyb3VwYH0gbmFtZT1cImZvcm0tbG9naW5cIiBpZD1cImZvcm0tbG9naW5cIiBvblN1Ym1pdD17aGFuZGxlU3VibWl0TG9naW59PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPXtMb2dpblN0eWxlLmxhYmVsfSBodG1sRm9yPVwiZW1haWxcIj5FbWFpbDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZW1haWxcIiBjbGFzc05hbWU9e0xvZ2luU3R5bGUuaW5wdXQgKyAnICcgKyBgZm9ybS1jb250cm9sYH0gaWQ9XCJlbWFpbFwiIG5hbWU9XCJlbWFpbFwiIHZhbHVlPXtmb3JtTG9naW5WYWx1ZXMuZW1haWx9IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2VMb2dpbn0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPXtMb2dpblN0eWxlLmxhYmVsfSBodG1sRm9yPVwicGFzc3dvcmRcIj5Db250cmFzZcOxYTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBjbGFzc05hbWU9e0xvZ2luU3R5bGUuaW5wdXQgKyAnICcgKyBgZm9ybS1jb250cm9sYH0gaWQ9XCJwYXNzd29yZFwiIG5hbWU9XCJwYXNzd29yZFwiIHZhbHVlPXtmb3JtTG9naW5WYWx1ZXMucGFzc3dvcmR9IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2VMb2dpbn0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImJvdG9uIGJnLXllbGxvdyBtYi0xXCIgdmFsdWU9XCJJbmdyZXNhclwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9cIiBjbGFzc05hbWU9e0xvZ2luU3R5bGUuZm9yZ290X19wYXNzICsgJyAnICsgYHRleHQtY2VudGVyIGQtYmxvY2tgfT5PbHZpZMOpIG1pIGNvbnN0cmFzZcOxYTwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtMb2dpblN0eWxlLnJlZ2lzdGVySW5Mb2dpbiArICcgJyArIGB0ZXh0LWNlbnRlcmB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkXCI+wr9ObyB0ZW5lcyBjdWVudGE/PHNwYW4gY2xhc3NOYW1lPXtMb2dpblN0eWxlLnJlZ2lzdGVyTGlua30gb25DbGljaz17aGFiaWxpdGFyUmVnaXN0ZXJ9PiBSZWdpc3RyYXRlPC9zcGFuPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSByZWR1Y2Vycz0+e1xyXG4gICAgcmV0dXJuIHJlZHVjZXJzLnVzdWFyaW9SZWR1Y2VyO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcyx1c3VhcmlvQWN0aW9ucykoTG9naW4pOyJdLCJzb3VyY2VSb290IjoiIn0=