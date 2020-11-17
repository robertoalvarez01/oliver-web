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
    var headers = new Headers();
    headers.append("Content-Type", "application/json");
    fetch("".concat(_config_index__WEBPACK_IMPORTED_MODULE_4__["API"], "/login"), {
      method: 'POST',
      body: JSON.stringify(formLoginValues),
      headers: headers
    }).then(function (res) {
      return res.json();
    }).then(function (response) {
      if (response.ok) {
        alert('logueado');
      } else {
        setError('Usuario o contraseña incorrectos');
      }
    });
    return true;
  };

  var habilitarRegister = function habilitarRegister() {
    props.showRegister();
  };

  return __jsx("div", {
    className: _Login_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.login__container,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }
  }, __jsx("h6", {
    className: _Login_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.title__login + ' ' + "text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 13
    }
  }, "Ingres\xE1 a tu cuenta"), error ? __jsx(_Error__WEBPACK_IMPORTED_MODULE_2__["default"], {
    message: error,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
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
      lineNumber: 50,
      columnNumber: 13
    }
  }, __jsx("label", {
    className: _Login_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.label,
    htmlFor: "email",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
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
      lineNumber: 52,
      columnNumber: 17
    }
  }), __jsx("label", {
    className: _Login_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.label,
    htmlFor: "password",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
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
      lineNumber: 54,
      columnNumber: 17
    }
  }), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 17
    }
  }), __jsx("input", {
    type: "submit",
    className: "boton bg-yellow mb-1",
    value: "Ingresar",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 17
    }
  }), __jsx("a", {
    href: "/",
    className: _Login_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.forgot__pass + ' ' + "text-center d-block",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 17
    }
  }, "Olvid\xE9 mi constrase\xF1a")), __jsx("section", {
    className: _Login_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.registerInLogin + ' ' + "text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 13
    }
  }, __jsx("span", {
    className: "text-muted",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 17
    }
  }, "\xBFNo tenes cuenta?", __jsx("span", {
    className: _Login_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.registerLink,
    onClick: habilitarRegister,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 63
    }
  }, " Registrate"))));
};

_s(Login, "ff4PMJxayufgwK0qZfLryRCXT8o=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTG9naW4vaW5kZXguanMiXSwibmFtZXMiOlsiTG9naW4iLCJwcm9wcyIsInVzZVN0YXRlIiwiZW1haWwiLCJwYXNzd29yZCIsImZvcm1Mb2dpblZhbHVlcyIsInNldEZvcm1Mb2dpblZhbHVlcyIsImVycm9yIiwic2V0RXJyb3IiLCJoYW5kbGVDaGFuZ2VMb2dpbiIsImV2ZW50IiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwiaGFuZGxlU3VibWl0TG9naW4iLCJwcmV2ZW50RGVmYXVsdCIsInRyaW0iLCJoZWFkZXJzIiwiSGVhZGVycyIsImFwcGVuZCIsImZldGNoIiwiQVBJIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0aGVuIiwicmVzIiwianNvbiIsInJlc3BvbnNlIiwib2siLCJhbGVydCIsImhhYmlsaXRhclJlZ2lzdGVyIiwic2hvd1JlZ2lzdGVyIiwiTG9naW5TdHlsZSIsImxvZ2luX19jb250YWluZXIiLCJ0aXRsZV9fbG9naW4iLCJmb3JtIiwibGFiZWwiLCJpbnB1dCIsImZvcmdvdF9fcGFzcyIsInJlZ2lzdGVySW5Mb2dpbiIsInJlZ2lzdGVyTGluayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsSUFBTUEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQUEsa0JBQ3lCQyxzREFBUSxDQUFDO0FBQ25EQyxTQUFLLEVBQUMsRUFENkM7QUFFbkRDLFlBQVEsRUFBQztBQUYwQyxHQUFELENBRGpDO0FBQUEsTUFDZEMsZUFEYztBQUFBLE1BQ0dDLGtCQURIOztBQUFBLG1CQUtLSixzREFBUSxDQUFDLEtBQUQsQ0FMYjtBQUFBLE1BS2RLLEtBTGM7QUFBQSxNQUtQQyxRQUxPOztBQU9yQixNQUFNQyxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLENBQUFD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O0FBQU8sUUFBSSxFQUFDLFVBQVo7QUFBdUIsYUFBUyxFQUFFSix3REFBVSxDQUFDSyxLQUFYLEdBQW1CLEdBQW5CLGlCQUFsQztBQUEyRSxNQUFFLEVBQUMsVUFBOUU7QUFBeUYsUUFBSSxFQUFDLFVBQTlGO0FBQXlHLFNBQUssRUFBRWxDLGVBQWUsQ0FBQ0QsUUFBaEk7QUFBMEksWUFBUSxFQUFFSyxpQkFBcEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUpKLEVBS0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUxKLEVBTUk7QUFBTyxRQUFJLEVBQUMsUUFBWjtBQUFxQixhQUFTLEVBQUMsc0JBQS9CO0FBQXNELFNBQUssRUFBQyxVQUE1RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTkosRUFPSTtBQUFHLFFBQUksRUFBQyxHQUFSO0FBQVksYUFBUyxFQUFFeUIsd0RBQVUsQ0FBQ00sWUFBWCxHQUEwQixHQUExQix3QkFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQ0FQSixDQUhKLEVBWUk7QUFBUyxhQUFTLEVBQUVOLHdEQUFVLENBQUNPLGVBQVgsR0FBNkIsR0FBN0IsZ0JBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFNLGFBQVMsRUFBQyxZQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQUE4QztBQUFNLGFBQVMsRUFBRVAsd0RBQVUsQ0FBQ1EsWUFBNUI7QUFBMEMsV0FBTyxFQUFFVixpQkFBbkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFBOUMsQ0FESixDQVpKLENBREo7QUFrQkgsQ0EzREQ7O0dBQU1oQyxLOztLQUFBQSxLO0FBNkRTQSxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLmY3NzUxYTQzY2I0YTQyYjI4ZjM5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3Qse3VzZVN0YXRlfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBFcnJvciBmcm9tIFwiLi4vRXJyb3JcIjtcclxuaW1wb3J0IExvZ2luU3R5bGUgZnJvbSAgJy4vTG9naW4ubW9kdWxlLmNzcyc7XHJcbmltcG9ydCB7QVBJfSBmcm9tICcuLi8uLi8uLi9jb25maWcvaW5kZXgnO1xyXG5jb25zdCBMb2dpbiA9IChwcm9wcykgPT4ge1xyXG4gICAgY29uc3QgW2Zvcm1Mb2dpblZhbHVlcywgc2V0Rm9ybUxvZ2luVmFsdWVzXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICBlbWFpbDonJyxcclxuICAgICAgICBwYXNzd29yZDonJ1xyXG4gICAgfSk7XHJcbiAgICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVDaGFuZ2VMb2dpbiA9IGV2ZW50PT57XHJcbiAgICAgICAgc2V0Rm9ybUxvZ2luVmFsdWVzKHtcclxuICAgICAgICAgICAgLi4uZm9ybUxvZ2luVmFsdWVzLFxyXG4gICAgICAgICAgICBbZXZlbnQudGFyZ2V0Lm5hbWVdOmV2ZW50LnRhcmdldC52YWx1ZVxyXG4gICAgICAgIH0pXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdExvZ2luID0gZXZlbnQ9PntcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGlmKGZvcm1Mb2dpblZhbHVlcy5lbWFpbC50cmltKCk9PT0nJyB8fCBmb3JtTG9naW5WYWx1ZXMucGFzc3dvcmQudHJpbSgpPT09Jycpe1xyXG4gICAgICAgICAgICBzZXRFcnJvcignRXMgbmVjZXNhcmlvIGNvbXBsZXRhciB0b2RvcyBsb3MgY2FtcG9zJyk7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0RXJyb3IoZmFsc2UpO1xyXG4gICAgICAgIGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcclxuICAgICAgICBoZWFkZXJzLmFwcGVuZChcIkNvbnRlbnQtVHlwZVwiLCBcImFwcGxpY2F0aW9uL2pzb25cIik7XHJcbiAgICAgICAgZmV0Y2goYCR7QVBJfS9sb2dpbmAse1xyXG4gICAgICAgICAgICBtZXRob2Q6J1BPU1QnLFxyXG4gICAgICAgICAgICBib2R5OkpTT04uc3RyaW5naWZ5KGZvcm1Mb2dpblZhbHVlcyksXHJcbiAgICAgICAgICAgIGhlYWRlcnNcclxuICAgICAgICB9KS50aGVuKHJlcz0+cmVzLmpzb24oKSkudGhlbihyZXNwb25zZT0+e1xyXG4gICAgICAgICAgICBpZihyZXNwb25zZS5vayl7XHJcbiAgICAgICAgICAgICAgICBhbGVydCgnbG9ndWVhZG8nKTtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICBzZXRFcnJvcignVXN1YXJpbyBvIGNvbnRyYXNlw7FhIGluY29ycmVjdG9zJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhYmlsaXRhclJlZ2lzdGVyID0gKCk9PntcclxuICAgICAgICBwcm9wcy5zaG93UmVnaXN0ZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtMb2dpblN0eWxlLmxvZ2luX19jb250YWluZXJ9PlxyXG4gICAgICAgICAgICA8aDYgY2xhc3NOYW1lPXtMb2dpblN0eWxlLnRpdGxlX19sb2dpbiArICcgJyArIGB0ZXh0LWNlbnRlcmB9PkluZ3Jlc8OhIGEgdHUgY3VlbnRhPC9oNj5cclxuICAgICAgICAgICAgeyhlcnJvcik/PEVycm9yIG1lc3NhZ2U9e2Vycm9yfS8+Om51bGx9XHJcbiAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT17TG9naW5TdHlsZS5mb3JtICsgJyAnICsgYGZvcm0tZ3JvdXBgfSBuYW1lPVwiZm9ybS1sb2dpblwiIGlkPVwiZm9ybS1sb2dpblwiIG9uU3VibWl0PXtoYW5kbGVTdWJtaXRMb2dpbn0+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPXtMb2dpblN0eWxlLmxhYmVsfSBodG1sRm9yPVwiZW1haWxcIj5FbWFpbDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImVtYWlsXCIgY2xhc3NOYW1lPXtMb2dpblN0eWxlLmlucHV0ICsgJyAnICsgYGZvcm0tY29udHJvbGB9IGlkPVwiZW1haWxcIiBuYW1lPVwiZW1haWxcIiB2YWx1ZT17Zm9ybUxvZ2luVmFsdWVzLmVtYWlsfSBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlTG9naW59Lz5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9e0xvZ2luU3R5bGUubGFiZWx9IGh0bWxGb3I9XCJwYXNzd29yZFwiPkNvbnRyYXNlw7FhPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBjbGFzc05hbWU9e0xvZ2luU3R5bGUuaW5wdXQgKyAnICcgKyBgZm9ybS1jb250cm9sYH0gaWQ9XCJwYXNzd29yZFwiIG5hbWU9XCJwYXNzd29yZFwiIHZhbHVlPXtmb3JtTG9naW5WYWx1ZXMucGFzc3dvcmR9IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2VMb2dpbn0vPlxyXG4gICAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiYm90b24gYmcteWVsbG93IG1iLTFcIiB2YWx1ZT1cIkluZ3Jlc2FyXCIvPlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9cIiBjbGFzc05hbWU9e0xvZ2luU3R5bGUuZm9yZ290X19wYXNzICsgJyAnICsgYHRleHQtY2VudGVyIGQtYmxvY2tgfT5PbHZpZMOpIG1pIGNvbnN0cmFzZcOxYTwvYT5cclxuICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e0xvZ2luU3R5bGUucmVnaXN0ZXJJbkxvZ2luICsgJyAnICsgYHRleHQtY2VudGVyYH0+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkXCI+wr9ObyB0ZW5lcyBjdWVudGE/PHNwYW4gY2xhc3NOYW1lPXtMb2dpblN0eWxlLnJlZ2lzdGVyTGlua30gb25DbGljaz17aGFiaWxpdGFyUmVnaXN0ZXJ9PiBSZWdpc3RyYXRlPC9zcGFuPjwvc3Bhbj5cclxuICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG4gXHJcbmV4cG9ydCBkZWZhdWx0IExvZ2luOyJdLCJzb3VyY2VSb290IjoiIn0=