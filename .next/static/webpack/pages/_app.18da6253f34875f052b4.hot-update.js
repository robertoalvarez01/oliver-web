webpackHotUpdate_N_E("pages/_app",{

/***/ "./src/components/Login/Register.js":
/*!******************************************!*\
  !*** ./src/components/Login/Register.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_places_autocomplete__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-places-autocomplete */ "./node_modules/react-places-autocomplete/dist/index.js");
/* harmony import */ var react_places_autocomplete__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_places_autocomplete__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Error__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Error */ "./src/components/Error.js");
/* harmony import */ var _Login_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Login.module.css */ "./src/components/Login/Login.module.css");
/* harmony import */ var _Login_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Login_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store_actions_usuarioActions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../store/actions/usuarioActions */ "./store/actions/usuarioActions.js");
/* harmony import */ var react_google_login__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-google-login */ "./node_modules/react-google-login/dist/google-login.js");
/* harmony import */ var react_google_login__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_google_login__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _config_index__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../config/index */ "./config/index.js");
/* harmony import */ var _Loader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Loader */ "./src/components/Loader/index.js");



var _this = undefined,
    _jsxFileName = "C:\\Users\\franc\\Documents\\oliver-2\\sitio-desa\\src\\components\\Login\\Register.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }











var Register = function Register(props) {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    nombre: '',
    telefono: '',
    address: '',
    lat: '',
    lon: '',
    email: '',
    password: ''
  }),
      formRegisterValues = _useState[0],
      setFormRegisterValues = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      error = _useState2[0],
      setError = _useState2[1];

  var handleChangeLogin = function handleChangeLogin(event) {
    setFormRegisterValues(_objectSpread(_objectSpread({}, formRegisterValues), {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, event.target.name, event.target.value)));
  };

  var handleSubmitLogin = function handleSubmitLogin(event) {
    event.preventDefault();

    if (formRegisterValues.nombre.trim() === '' || formRegisterValues.telefono.trim() === '' || formRegisterValues.address.trim() === '' || formRegisterValues.lat === '' || formRegisterValues.lon === '' || formRegisterValues.email.trim() === '' || formRegisterValues.password.trim() === '') {
      setError('Es necesario completar todos los campos');
      return false;
    }

    setError(false);
    return props.register(formRegisterValues);
  };

  var handleSelect = function handleSelect(address) {
    Object(react_places_autocomplete__WEBPACK_IMPORTED_MODULE_3__["geocodeByAddress"])(address).then(function (results) {
      return Object(react_places_autocomplete__WEBPACK_IMPORTED_MODULE_3__["getLatLng"])(results[0]);
    }).then(function (latLng) {
      setFormRegisterValues(_objectSpread(_objectSpread({}, formRegisterValues), {}, {
        address: address,
        lat: latLng.lat,
        lon: latLng.lng
      }));
    })["catch"](function (error) {
      return console.error('Error', error);
    });
  };

  var handleChange = function handleChange(address) {
    setFormRegisterValues(_objectSpread(_objectSpread({}, formRegisterValues), {}, {
      address: address
    }));
  };

  var habilitarLogin = function habilitarLogin() {
    props.showLogin();
  };

  var redirigir = function redirigir() {
    setTimeout(function () {
      window.location.assign('/');
    }, 1500);
  };

  var responseGoogle = function responseGoogle(data) {
    if (data.tokenId) {
      return props.singInWithGoogle(data.tokenId);
    }
  };

  return __jsx("div", {
    className: _Login_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.login__container,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 9
    }
  }, __jsx("h6", {
    className: _Login_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.title__login + ' ' + "text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 13
    }
  }, "Registrate"), props.error ? __jsx(_Error__WEBPACK_IMPORTED_MODULE_4__["default"], {
    message: props.error,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 28
    }
  }) : null, props.logueado ? __jsx("div", {
    className: "alert alert-success text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 31
    }
  }, "Bienvenido/a ", props.usuario.nombre, " ", redirigir()) : __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx("form", {
    className: _Login_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.form + ' ' + "form-group",
    name: "form-login",
    id: "form-login",
    onSubmit: handleSubmitLogin,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 17
    }
  }, __jsx("label", {
    className: _Login_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.label,
    htmlFor: "nombre",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 21
    }
  }, "Nombre"), __jsx("input", {
    type: "text",
    className: _Login_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.input + ' ' + "form-control",
    id: "nombre",
    name: "nombre",
    value: formRegisterValues.nombre,
    onChange: handleChangeLogin,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 21
    }
  }), __jsx("label", {
    className: _Login_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.label,
    htmlFor: "telefono",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 21
    }
  }, "Telefono"), __jsx("input", {
    type: "number",
    className: _Login_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.input + ' ' + "form-control",
    id: "telefono",
    name: "telefono",
    value: formRegisterValues.telefono,
    onChange: handleChangeLogin,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 21
    }
  }), __jsx("label", {
    className: _Login_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.label,
    htmlFor: "ubicacion",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 21
    }
  }, "Ubicaci\xF3n"), __jsx(react_places_autocomplete__WEBPACK_IMPORTED_MODULE_3___default.a, {
    value: formRegisterValues.address,
    onChange: handleChange,
    onSelect: handleSelect,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 21
    }
  }, function (_ref) {
    var getInputProps = _ref.getInputProps,
        suggestions = _ref.suggestions,
        getSuggestionItemProps = _ref.getSuggestionItemProps,
        loading = _ref.loading;
    return __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 29
      }
    }, __jsx("input", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      className: _Login_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.input + ' ' + "form-control",
      id: "ubicacion"
    }, getInputProps({
      placeholder: 'Buscá tu dirección ...'
    }), {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 33
      }
    })), __jsx("div", {
      className: "autocomplete-dropdown-container",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 33
      }
    }, loading && __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 49
      }
    }, "Loading..."), suggestions.map(function (suggestion, key) {
      var className = suggestion.active ? 'suggestion-item--active' : 'suggestion-item'; // inline style for demonstration purpose

      var style = suggestion.active ? {
        backgroundColor: '#fafafa',
        cursor: 'pointer',
        margin: '10px',
        padding: '5px'
      } : {
        backgroundColor: '#ffffff',
        cursor: 'pointer',
        margin: '10px',
        padding: '5px'
      };
      return __jsx("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, getSuggestionItemProps(suggestion, {
        className: className,
        style: style,
        key: key
      }), {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108,
          columnNumber: 45
        }
      }), __jsx("span", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115,
          columnNumber: 49
        }
      }, suggestion.description));
    })));
  }), __jsx("label", {
    className: _Login_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.label,
    htmlFor: "emal",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 21
    }
  }, "Email"), __jsx("input", {
    type: "email",
    className: _Login_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.input + ' ' + "form-control",
    id: "email",
    name: "email",
    value: formRegisterValues.email,
    onChange: handleChangeLogin,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 21
    }
  }), __jsx("label", {
    className: _Login_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.label,
    htmlFor: "password",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 21
    }
  }, "Contrase\xF1a"), __jsx("input", {
    type: "password",
    className: _Login_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.input + ' ' + "form-control",
    id: "password",
    name: "password",
    value: formRegisterValues.password,
    onChange: handleChangeLogin,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 21
    }
  }), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 21
    }
  }), props.loading ? __jsx("div", {
    className: "text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 38
    }
  }, __jsx(_Loader__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 67
    }
  })) : __jsx("input", {
    type: "submit",
    className: "boton bg-yellow mb-1",
    value: "Registrarme",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 83
    }
  })), __jsx("section", {
    className: _Login_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.registerInLogin + ' ' + "text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 17
    }
  }, __jsx("span", {
    className: "text-muted",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 21
    }
  }, "\xBFYa tenes cuenta?", __jsx("span", {
    className: _Login_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.registerLink,
    onClick: habilitarLogin,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 67
    }
  }, " Ingres\xE1")), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 21
    }
  }), __jsx(react_google_login__WEBPACK_IMPORTED_MODULE_8__["GoogleLogin"], {
    className: "mt-2",
    clientId: _config_index__WEBPACK_IMPORTED_MODULE_9__["GOOGLE_CLIENT_ID"],
    buttonText: "Registrate con Google",
    onSuccess: responseGoogle,
    onFailure: responseGoogle,
    cookiePolicy: 'single_host_origin',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 21
    }
  }))));
};

_s(Register, "hqzaLu0M4obJ+oDpMRZvvKShSUI=");

_c = Register;

var mapStateToProps = function mapStateToProps(reducers) {
  return reducers.usuarioReducer;
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["connect"])(mapStateToProps, _store_actions_usuarioActions__WEBPACK_IMPORTED_MODULE_7__)(Register));

var _c;

$RefreshReg$(_c, "Register");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTG9naW4vUmVnaXN0ZXIuanMiXSwibmFtZXMiOlsiUmVnaXN0ZXIiLCJwcm9wcyIsInVzZVN0YXRlIiwibm9tYnJlIiwidGVsZWZvbm8iLCJhZGRyZXNzIiwibGF0IiwibG9uIiwiZW1haWwiLCJwYXNzd29yZCIsImZvcm1SZWdpc3RlclZhbHVlcyIsInNldEZvcm1SZWdpc3RlclZhbHVlcyIsImVycm9yIiwic2V0RXJyb3IiLCJoYW5kbGVDaGFuZ2VMb2dpbiIsImV2ZW50IiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwiaGFuZGxlU3VibWl0TG9naW4iLCJwcmV2ZW50RGVmYXVsdCIsInRyaW0iLCJyZWdpc3RlciIsImhhbmRsZVNlbGVjdCIsImdlb2NvZGVCeUFkZHJlc3MiLCJ0aGVuIiwicmVzdWx0cyIsImdldExhdExuZyIsImxhdExuZyIsImxuZyIsImNvbnNvbGUiLCJoYW5kbGVDaGFuZ2UiLCJoYWJpbGl0YXJMb2dpbiIsInNob3dMb2dpbiIsInJlZGlyaWdpciIsInNldFRpbWVvdXQiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImFzc2lnbiIsInJlc3BvbnNlR29vZ2xlIiwiZGF0YSIsInRva2VuSWQiLCJzaW5nSW5XaXRoR29vZ2xlIiwiTG9naW5TdHlsZSIsImxvZ2luX19jb250YWluZXIiLCJ0aXRsZV9fbG9naW4iLCJsb2d1ZWFkbyIsInVzdWFyaW8iLCJmb3JtIiwibGFiZWwiLCJpbnB1dCIsImdldElucHV0UHJvcHMiLCJzdWdnZXN0aW9ucyIsImdldFN1Z2dlc3Rpb25JdGVtUHJvcHMiLCJsb2FkaW5nIiwicGxhY2Vob2xkZXIiLCJtYXAiLCJzdWdnZXN0aW9uIiwia2V5IiwiY2xhc3NOYW1lIiwiYWN0aXZlIiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjdXJzb3IiLCJtYXJnaW4iLCJwYWRkaW5nIiwiZGVzY3JpcHRpb24iLCJyZWdpc3RlckluTG9naW4iLCJyZWdpc3RlckxpbmsiLCJHT09HTEVfQ0xJRU5UX0lEIiwibWFwU3RhdGVUb1Byb3BzIiwicmVkdWNlcnMiLCJ1c3VhcmlvUmVkdWNlciIsImNvbm5lY3QiLCJ1c3VhcmlvQWN0aW9ucyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNDLEtBQUQsRUFBVztBQUFBOztBQUFBLGtCQUU0QkMsc0RBQVEsQ0FBQztBQUN6REMsVUFBTSxFQUFDLEVBRGtEO0FBRXpEQyxZQUFRLEVBQUMsRUFGZ0Q7QUFHekRDLFdBQU8sRUFBQyxFQUhpRDtBQUl6REMsT0FBRyxFQUFDLEVBSnFEO0FBS3pEQyxPQUFHLEVBQUMsRUFMcUQ7QUFNekRDLFNBQUssRUFBQyxFQU5tRDtBQU96REMsWUFBUSxFQUFDO0FBUGdELEdBQUQsQ0FGcEM7QUFBQSxNQUVqQkMsa0JBRmlCO0FBQUEsTUFFR0MscUJBRkg7O0FBQUEsbUJBV0VULHNEQUFRLENBQUMsS0FBRCxDQVhWO0FBQUEsTUFXakJVLEtBWGlCO0FBQUEsTUFXVkMsUUFYVTs7QUFheEIsTUFBTUMsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixDQUFBQyxLQUFLLEVBQUU7QUFDN0JKLHlCQUFxQixpQ0FDZEQsa0JBRGMscUdBRWhCSyxLQUFLLENBQUNDLE1BQU4sQ0FBYUMsSUFGRyxFQUVHRixLQUFLLENBQUNDLE1BQU4sQ0FBYUUsS0FGaEIsR0FBckI7QUFJSCxHQUxEOztBQU9BLE1BQU1DLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsQ0FBQUosS0FBSyxFQUFFO0FBQzdCQSxTQUFLLENBQUNLLGNBQU47O0FBQ0EsUUFBR1Ysa0JBQWtCLENBQUNQLE1BQW5CLENBQTBCa0IsSUFBMUIsT0FBbUMsRUFBbkMsSUFBeUNYLGtCQUFrQixDQUFDTixRQUFuQixDQUE0QmlCLElBQTVCLE9BQXVDLEVBQWhG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QURKO0FBNEVILENBM0lEOztHQUFNdkMsUTs7S0FBQUEsUTs7QUE0SU4sSUFBTXNFLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQUMsUUFBUSxFQUFFO0FBQzlCLFNBQU9BLFFBQVEsQ0FBQ0MsY0FBaEI7QUFDSCxDQUZEOztBQUllQywwSEFBTyxDQUFDSCxlQUFELEVBQWlCSSwwREFBakIsQ0FBUCxDQUF3QzFFLFFBQXhDLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC4xOGRhNjI1M2YzNDg3NWYwNTJiNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUGxhY2VzQXV0b2NvbXBsZXRlLHtnZW9jb2RlQnlBZGRyZXNzLGdlb2NvZGVCeVBsYWNlSWQsZ2V0TGF0TG5nfSBmcm9tICdyZWFjdC1wbGFjZXMtYXV0b2NvbXBsZXRlJztcclxuaW1wb3J0IEVycm9yIGZyb20gXCIuLi9FcnJvclwiO1xyXG5pbXBvcnQgTG9naW5TdHlsZSBmcm9tICcuL0xvZ2luLm1vZHVsZS5jc3MnO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgKiBhcyB1c3VhcmlvQWN0aW9ucyBmcm9tICcuLi8uLi8uLi9zdG9yZS9hY3Rpb25zL3VzdWFyaW9BY3Rpb25zJztcclxuaW1wb3J0IHsgR29vZ2xlTG9naW4gfSBmcm9tICdyZWFjdC1nb29nbGUtbG9naW4nO1xyXG5pbXBvcnQge0dPT0dMRV9DTElFTlRfSUR9IGZyb20gJy4uLy4uLy4uL2NvbmZpZy9pbmRleCdcclxuaW1wb3J0IExvYWRlciBmcm9tICcuLi9Mb2FkZXInO1xyXG5cclxuY29uc3QgUmVnaXN0ZXIgPSAocHJvcHMpID0+IHtcclxuXHJcbiAgICBjb25zdCBbZm9ybVJlZ2lzdGVyVmFsdWVzLCBzZXRGb3JtUmVnaXN0ZXJWYWx1ZXNdID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIG5vbWJyZTonJyxcclxuICAgICAgICB0ZWxlZm9ubzonJyxcclxuICAgICAgICBhZGRyZXNzOicnLFxyXG4gICAgICAgIGxhdDonJyxcclxuICAgICAgICBsb246JycsXHJcbiAgICAgICAgZW1haWw6JycsXHJcbiAgICAgICAgcGFzc3dvcmQ6JydcclxuICAgIH0pO1xyXG4gICAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlTG9naW4gPSBldmVudD0+e1xyXG4gICAgICAgIHNldEZvcm1SZWdpc3RlclZhbHVlcyh7XHJcbiAgICAgICAgICAgIC4uLmZvcm1SZWdpc3RlclZhbHVlcyxcclxuICAgICAgICAgICAgW2V2ZW50LnRhcmdldC5uYW1lXTpldmVudC50YXJnZXQudmFsdWVcclxuICAgICAgICB9KVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVTdWJtaXRMb2dpbiA9IGV2ZW50PT57XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBpZihmb3JtUmVnaXN0ZXJWYWx1ZXMubm9tYnJlLnRyaW0oKT09PScnIHx8IGZvcm1SZWdpc3RlclZhbHVlcy50ZWxlZm9uby50cmltKCkgPT09ICcnIHx8IFxyXG4gICAgICAgIGZvcm1SZWdpc3RlclZhbHVlcy5hZGRyZXNzLnRyaW0oKT09PScnIHx8IGZvcm1SZWdpc3RlclZhbHVlcy5sYXQgPT09ICcnIHx8IGZvcm1SZWdpc3RlclZhbHVlcy5sb24gPT09ICcnIHx8IGZvcm1SZWdpc3RlclZhbHVlcy5lbWFpbC50cmltKCk9PT0nJyB8fCBmb3JtUmVnaXN0ZXJWYWx1ZXMucGFzc3dvcmQudHJpbSgpPT09Jycpe1xyXG4gICAgICAgICAgICBzZXRFcnJvcignRXMgbmVjZXNhcmlvIGNvbXBsZXRhciB0b2RvcyBsb3MgY2FtcG9zJyk7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0RXJyb3IoZmFsc2UpO1xyXG4gICAgICAgIHJldHVybiBwcm9wcy5yZWdpc3Rlcihmb3JtUmVnaXN0ZXJWYWx1ZXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZVNlbGVjdCA9IGFkZHJlc3MgPT4ge1xyXG4gICAgICAgIGdlb2NvZGVCeUFkZHJlc3MoYWRkcmVzcykudGhlbihyZXN1bHRzID0+IGdldExhdExuZyhyZXN1bHRzWzBdKSkudGhlbihsYXRMbmcgPT57XHJcbiAgICAgICAgICAgIHNldEZvcm1SZWdpc3RlclZhbHVlcyh7XHJcbiAgICAgICAgICAgICAgICAuLi5mb3JtUmVnaXN0ZXJWYWx1ZXMsXHJcbiAgICAgICAgICAgICAgICBhZGRyZXNzLFxyXG4gICAgICAgICAgICAgICAgbGF0OmxhdExuZy5sYXQsXHJcbiAgICAgICAgICAgICAgICBsb246bGF0TG5nLmxuZ1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmVycm9yKCdFcnJvcicsIGVycm9yKSk7XHJcbiAgICB9O1xyXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gYWRkcmVzcyA9PiB7XHJcbiAgICAgICAgc2V0Rm9ybVJlZ2lzdGVyVmFsdWVzKHtcclxuICAgICAgICAgICAgLi4uZm9ybVJlZ2lzdGVyVmFsdWVzLFxyXG4gICAgICAgICAgICBhZGRyZXNzXHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGhhYmlsaXRhckxvZ2luID0gKCk9PntcclxuICAgICAgICBwcm9wcy5zaG93TG9naW4oKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCByZWRpcmlnaXIgPSAoKT0+e1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uYXNzaWduKCcvJyk7XHJcbiAgICAgICAgfSwgMTUwMCk7XHJcbiAgICB9XHJcbiAgICBjb25zdCByZXNwb25zZUdvb2dsZSA9IGRhdGE9PntcclxuICAgICAgICBpZihkYXRhLnRva2VuSWQpe1xyXG4gICAgICAgICAgICByZXR1cm4gcHJvcHMuc2luZ0luV2l0aEdvb2dsZShkYXRhLnRva2VuSWQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e0xvZ2luU3R5bGUubG9naW5fX2NvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9e0xvZ2luU3R5bGUudGl0bGVfX2xvZ2luICsgJyAnICsgYHRleHQtY2VudGVyYH0+UmVnaXN0cmF0ZTwvaDY+XHJcbiAgICAgICAgICAgIHsocHJvcHMuZXJyb3IpPzxFcnJvciBtZXNzYWdlPXtwcm9wcy5lcnJvcn0vPjpudWxsfVxyXG4gICAgICAgICAgICB7KHByb3BzLmxvZ3VlYWRvKT88ZGl2IGNsYXNzTmFtZT1cImFsZXJ0IGFsZXJ0LXN1Y2Nlc3MgdGV4dC1jZW50ZXJcIj5CaWVudmVuaWRvL2Ege3Byb3BzLnVzdWFyaW8ubm9tYnJlfSB7cmVkaXJpZ2lyKCl9PC9kaXY+OlxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPXtMb2dpblN0eWxlLmZvcm0gKyAnICcgKyBgZm9ybS1ncm91cGB9IG5hbWU9XCJmb3JtLWxvZ2luXCIgaWQ9XCJmb3JtLWxvZ2luXCIgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdExvZ2lufT5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPXtMb2dpblN0eWxlLmxhYmVsfSBodG1sRm9yPVwibm9tYnJlXCI+Tm9tYnJlPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiAgY2xhc3NOYW1lPXtMb2dpblN0eWxlLmlucHV0ICsgJyAnICsgYGZvcm0tY29udHJvbGB9IGlkPVwibm9tYnJlXCIgbmFtZT1cIm5vbWJyZVwiIHZhbHVlPXtmb3JtUmVnaXN0ZXJWYWx1ZXMubm9tYnJlfSBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlTG9naW59Lz5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPXtMb2dpblN0eWxlLmxhYmVsfSBodG1sRm9yPVwidGVsZWZvbm9cIj5UZWxlZm9ubzwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiAgY2xhc3NOYW1lPXtMb2dpblN0eWxlLmlucHV0ICsgJyAnICsgYGZvcm0tY29udHJvbGB9IGlkPVwidGVsZWZvbm9cIiBuYW1lPVwidGVsZWZvbm9cIiB2YWx1ZT17Zm9ybVJlZ2lzdGVyVmFsdWVzLnRlbGVmb25vfSBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlTG9naW59Lz5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPXtMb2dpblN0eWxlLmxhYmVsfSBodG1sRm9yPVwidWJpY2FjaW9uXCI+VWJpY2FjacOzbjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPFBsYWNlc0F1dG9jb21wbGV0ZSB2YWx1ZT17Zm9ybVJlZ2lzdGVyVmFsdWVzLmFkZHJlc3N9IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9IG9uU2VsZWN0PXtoYW5kbGVTZWxlY3R9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7KHsgZ2V0SW5wdXRQcm9wcywgc3VnZ2VzdGlvbnMsIGdldFN1Z2dlc3Rpb25JdGVtUHJvcHMsIGxvYWRpbmcgfSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtMb2dpblN0eWxlLmlucHV0ICsgJyAnICsgYGZvcm0tY29udHJvbGB9IGlkPVwidWJpY2FjaW9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey4uLmdldElucHV0UHJvcHMoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6ICdCdXNjw6EgdHUgZGlyZWNjacOzbiAuLi4nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXV0b2NvbXBsZXRlLWRyb3Bkb3duLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bG9hZGluZyAmJiA8ZGl2PkxvYWRpbmcuLi48L2Rpdj59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzdWdnZXN0aW9ucy5tYXAoKHN1Z2dlc3Rpb24sa2V5KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjbGFzc05hbWUgPSBzdWdnZXN0aW9uLmFjdGl2ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAnc3VnZ2VzdGlvbi1pdGVtLS1hY3RpdmUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICdzdWdnZXN0aW9uLWl0ZW0nO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gaW5saW5lIHN0eWxlIGZvciBkZW1vbnN0cmF0aW9uIHB1cnBvc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0eWxlID0gc3VnZ2VzdGlvbi5hY3RpdmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8geyBiYWNrZ3JvdW5kQ29sb3I6ICcjZmFmYWZhJywgY3Vyc29yOiAncG9pbnRlcicsbWFyZ2luOicxMHB4JyxwYWRkaW5nOic1cHgnIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogeyBiYWNrZ3JvdW5kQ29sb3I6ICcjZmZmZmZmJywgY3Vyc29yOiAncG9pbnRlcicsbWFyZ2luOicxMHB4JyxwYWRkaW5nOic1cHgnIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey4uLmdldFN1Z2dlc3Rpb25JdGVtUHJvcHMoc3VnZ2VzdGlvbiwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57c3VnZ2VzdGlvbi5kZXNjcmlwdGlvbn08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvUGxhY2VzQXV0b2NvbXBsZXRlPlxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiA8aW5wdXQgdHlwZT1cInRleHRcIiAgY2xhc3NOYW1lPXtMb2dpblN0eWxlLmlucHV0ICsgJyAnICsgYGZvcm0tY29udHJvbGB9IGlkPVwidWJpY2FjaW9uXCIgbmFtZT1cInViaWNhY2lvblwiIHZhbHVlPXtmb3JtUmVnaXN0ZXJWYWx1ZXMudWJpY2FjaW9ufSBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlTG9naW59Lz5cclxuICAgICAgICAgICAgICAgICAgICAqL31cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPXtMb2dpblN0eWxlLmxhYmVsfSBodG1sRm9yPVwiZW1hbFwiPkVtYWlsPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImVtYWlsXCIgIGNsYXNzTmFtZT17TG9naW5TdHlsZS5pbnB1dCArICcgJyArIGBmb3JtLWNvbnRyb2xgfSBpZD1cImVtYWlsXCIgbmFtZT1cImVtYWlsXCIgdmFsdWU9e2Zvcm1SZWdpc3RlclZhbHVlcy5lbWFpbH0gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZUxvZ2lufS8+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT17TG9naW5TdHlsZS5sYWJlbH0gaHRtbEZvcj1cInBhc3N3b3JkXCI+Q29udHJhc2XDsWE8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiAgY2xhc3NOYW1lPXtMb2dpblN0eWxlLmlucHV0ICsgJyAnICsgYGZvcm0tY29udHJvbGB9IGlkPVwicGFzc3dvcmRcIiBuYW1lPVwicGFzc3dvcmRcIiB2YWx1ZT17Zm9ybVJlZ2lzdGVyVmFsdWVzLnBhc3N3b3JkfSBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlTG9naW59Lz5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgIHsocHJvcHMubG9hZGluZyk/PGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPjxMb2FkZXIvPjwvZGl2Pjo8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImJvdG9uIGJnLXllbGxvdyBtYi0xXCIgdmFsdWU9XCJSZWdpc3RyYXJtZVwiLz59XHJcbiAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e0xvZ2luU3R5bGUucmVnaXN0ZXJJbkxvZ2luICsgJyAnICsgYHRleHQtY2VudGVyYH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1tdXRlZFwiPsK/WWEgdGVuZXMgY3VlbnRhPzxzcGFuIGNsYXNzTmFtZT17TG9naW5TdHlsZS5yZWdpc3Rlckxpbmt9IG9uQ2xpY2s9e2hhYmlsaXRhckxvZ2lufT4gSW5ncmVzw6E8L3NwYW4+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdvb2dsZUxvZ2luXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm10LTJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGllbnRJZD17R09PR0xFX0NMSUVOVF9JRH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uVGV4dD1cIlJlZ2lzdHJhdGUgY29uIEdvb2dsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uU3VjY2Vzcz17cmVzcG9uc2VHb29nbGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uRmFpbHVyZT17cmVzcG9uc2VHb29nbGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvb2tpZVBvbGljeT17J3NpbmdsZV9ob3N0X29yaWdpbid9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gcmVkdWNlcnM9PntcclxuICAgIHJldHVybiByZWR1Y2Vycy51c3VhcmlvUmVkdWNlcjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsdXN1YXJpb0FjdGlvbnMpKFJlZ2lzdGVyKTsiXSwic291cmNlUm9vdCI6IiJ9