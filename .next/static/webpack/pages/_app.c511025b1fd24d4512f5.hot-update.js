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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTG9naW4vUmVnaXN0ZXIuanMiXSwibmFtZXMiOlsiUmVnaXN0ZXIiLCJwcm9wcyIsInVzZVN0YXRlIiwibm9tYnJlIiwidGVsZWZvbm8iLCJhZGRyZXNzIiwibGF0IiwibG9uIiwiZW1haWwiLCJwYXNzd29yZCIsImZvcm1SZWdpc3RlclZhbHVlcyIsInNldEZvcm1SZWdpc3RlclZhbHVlcyIsImVycm9yIiwic2V0RXJyb3IiLCJoYW5kbGVDaGFuZ2VMb2dpbiIsImV2ZW50IiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwiaGFuZGxlU3VibWl0TG9naW4iLCJwcmV2ZW50RGVmYXVsdCIsInRyaW0iLCJyZWdpc3RlciIsImhhbmRsZVNlbGVjdCIsImdlb2NvZGVCeUFkZHJlc3MiLCJ0aGVuIiwicmVzdWx0cyIsImdldExhdExuZyIsImxhdExuZyIsImxuZyIsImNvbnNvbGUiLCJoYW5kbGVDaGFuZ2UiLCJoYWJpbGl0YXJMb2dpbiIsInNob3dMb2dpbiIsInJlZGlyaWdpciIsInNldFRpbWVvdXQiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImFzc2lnbiIsInJlc3BvbnNlR29vZ2xlIiwiZGF0YSIsInRva2VuSWQiLCJzaW5nSW5XaXRoR29vZ2xlIiwiTG9naW5TdHlsZSIsImxvZ2luX19jb250YWluZXIiLCJ0aXRsZV9fbG9naW4iLCJsb2d1ZWFkbyIsInVzdWFyaW8iLCJmb3JtIiwibGFiZWwiLCJpbnB1dCIsImdldElucHV0UHJvcHMiLCJzdWdnZXN0aW9ucyIsImdldFN1Z2dlc3Rpb25JdGVtUHJvcHMiLCJsb2FkaW5nIiwicGxhY2Vob2xkZXIiLCJtYXAiLCJzdWdnZXN0aW9uIiwia2V5IiwiY2xhc3NOYW1lIiwiYWN0aXZlIiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjdXJzb3IiLCJtYXJnaW4iLCJwYWRkaW5nIiwiZGVzY3JpcHRpb24iLCJyZWdpc3RlckluTG9naW4iLCJyZWdpc3RlckxpbmsiLCJHT09HTEVfQ0xJRU5UX0lEIiwibWFwU3RhdGVUb1Byb3BzIiwicmVkdWNlcnMiLCJ1c3VhcmlvUmVkdWNlciIsImNvbm5lY3QiLCJ1c3VhcmlvQWN0aW9ucyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNDLEtBQUQsRUFBVztBQUFBOztBQUFBLGtCQUU0QkMsc0RBQVEsQ0FBQztBQUN6REMsVUFBTSxFQUFDLEVBRGtEO0FBRXpEQyxZQUFRLEVBQUMsRUFGZ0Q7QUFHekRDLFdBQU8sRUFBQyxFQUhpRDtBQUl6REMsT0FBRyxFQUFDLEVBSnFEO0FBS3pEQyxPQUFHLEVBQUMsRUFMcUQ7QUFNekRDLFNBQUssRUFBQyxFQU5tRDtBQU96REMsWUFBUSxFQUFDO0FBUGdELEdBQUQsQ0FGcEM7QUFBQSxNQUVqQkMsa0JBRmlCO0FBQUEsTUFFR0MscUJBRkg7O0FBQUEsbUJBV0VULHNEQUFRLENBQUMsS0FBRCxDQVhWO0FBQUEsTUFXakJVLEtBWGlCO0FBQUEsTUFXVkMsUUFYVTs7QUFheEIsTUFBTUMsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixDQUFBQyxLQUFLLEVBQUU7QUFDN0JKLHlCQUFxQixpQ0FDZEQsa0JBRGMscUdBRWhCSyxLQUFLLENBQUNDLE1BQU4sQ0FBYUMsSUFGRyxFQUVHRixLQUFLLENBQUNDLE1BQU4sQ0FBYUUsS0FGaEIsR0FBckI7QUFJSCxHQUxEOztBQU9BLE1BQU1DLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsQ0FBQUosS0FBSyxFQUFFO0FBQzdCQSxTQUFLLENBQUNLLGNBQU47O0FBQ0EsUUFBR1Ysa0JBQWtCLENBQUNQLE1BQW5CLENBQTBCa0IsSUFBMUIsT0FBbUMsRUFBbkMsSUFBeUNYLGtCQUFrQixDQUFDTixRQUFuQixDQUE0QmlCLElBQTVCLE9BQXVDLEVBQWhG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TXZDLFE7O0tBQUFBLFE7O0FBMklOLElBQU1zRSxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUFDLFFBQVEsRUFBRTtBQUM5QixTQUFPQSxRQUFRLENBQUNDLGNBQWhCO0FBQ0gsQ0FGRDs7QUFJZUMsMEhBQU8sQ0FBQ0gsZUFBRCxFQUFpQkksMERBQWpCLENBQVAsQ0FBd0MxRSxRQUF4QyxDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuYzUxMTAyNWIxZmQyNGQ0NTEyZjUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCx7dXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFBsYWNlc0F1dG9jb21wbGV0ZSx7Z2VvY29kZUJ5QWRkcmVzcyxnZW9jb2RlQnlQbGFjZUlkLGdldExhdExuZ30gZnJvbSAncmVhY3QtcGxhY2VzLWF1dG9jb21wbGV0ZSc7XHJcbmltcG9ydCBFcnJvciBmcm9tIFwiLi4vRXJyb3JcIjtcclxuaW1wb3J0IExvZ2luU3R5bGUgZnJvbSAnLi9Mb2dpbi5tb2R1bGUuY3NzJztcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0ICogYXMgdXN1YXJpb0FjdGlvbnMgZnJvbSAnLi4vLi4vLi4vc3RvcmUvYWN0aW9ucy91c3VhcmlvQWN0aW9ucyc7XHJcbmltcG9ydCB7IEdvb2dsZUxvZ2luIH0gZnJvbSAncmVhY3QtZ29vZ2xlLWxvZ2luJztcclxuaW1wb3J0IHtHT09HTEVfQ0xJRU5UX0lEfSBmcm9tICcuLi8uLi8uLi9jb25maWcvaW5kZXgnXHJcbmltcG9ydCBMb2FkZXIgZnJvbSAnLi4vTG9hZGVyJztcclxuXHJcbmNvbnN0IFJlZ2lzdGVyID0gKHByb3BzKSA9PiB7XHJcblxyXG4gICAgY29uc3QgW2Zvcm1SZWdpc3RlclZhbHVlcywgc2V0Rm9ybVJlZ2lzdGVyVmFsdWVzXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICBub21icmU6JycsXHJcbiAgICAgICAgdGVsZWZvbm86JycsXHJcbiAgICAgICAgYWRkcmVzczonJyxcclxuICAgICAgICBsYXQ6JycsXHJcbiAgICAgICAgbG9uOicnLFxyXG4gICAgICAgIGVtYWlsOicnLFxyXG4gICAgICAgIHBhc3N3b3JkOicnXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZUxvZ2luID0gZXZlbnQ9PntcclxuICAgICAgICBzZXRGb3JtUmVnaXN0ZXJWYWx1ZXMoe1xyXG4gICAgICAgICAgICAuLi5mb3JtUmVnaXN0ZXJWYWx1ZXMsXHJcbiAgICAgICAgICAgIFtldmVudC50YXJnZXQubmFtZV06ZXZlbnQudGFyZ2V0LnZhbHVlXHJcbiAgICAgICAgfSlcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaGFuZGxlU3VibWl0TG9naW4gPSBldmVudD0+e1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgaWYoZm9ybVJlZ2lzdGVyVmFsdWVzLm5vbWJyZS50cmltKCk9PT0nJyB8fCBmb3JtUmVnaXN0ZXJWYWx1ZXMudGVsZWZvbm8udHJpbSgpID09PSAnJyB8fCBcclxuICAgICAgICBmb3JtUmVnaXN0ZXJWYWx1ZXMuYWRkcmVzcy50cmltKCk9PT0nJyB8fCBmb3JtUmVnaXN0ZXJWYWx1ZXMubGF0ID09PSAnJyB8fCBmb3JtUmVnaXN0ZXJWYWx1ZXMubG9uID09PSAnJyB8fCBmb3JtUmVnaXN0ZXJWYWx1ZXMuZW1haWwudHJpbSgpPT09JycgfHwgZm9ybVJlZ2lzdGVyVmFsdWVzLnBhc3N3b3JkLnRyaW0oKT09PScnKXtcclxuICAgICAgICAgICAgc2V0RXJyb3IoJ0VzIG5lY2VzYXJpbyBjb21wbGV0YXIgdG9kb3MgbG9zIGNhbXBvcycpO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldEVycm9yKGZhbHNlKTtcclxuICAgICAgICByZXR1cm4gcHJvcHMucmVnaXN0ZXIoZm9ybVJlZ2lzdGVyVmFsdWVzKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVTZWxlY3QgPSBhZGRyZXNzID0+IHtcclxuICAgICAgICBnZW9jb2RlQnlBZGRyZXNzKGFkZHJlc3MpLnRoZW4ocmVzdWx0cyA9PiBnZXRMYXRMbmcocmVzdWx0c1swXSkpLnRoZW4obGF0TG5nID0+e1xyXG4gICAgICAgICAgICBzZXRGb3JtUmVnaXN0ZXJWYWx1ZXMoe1xyXG4gICAgICAgICAgICAgICAgLi4uZm9ybVJlZ2lzdGVyVmFsdWVzLFxyXG4gICAgICAgICAgICAgICAgYWRkcmVzcyxcclxuICAgICAgICAgICAgICAgIGxhdDpsYXRMbmcubGF0LFxyXG4gICAgICAgICAgICAgICAgbG9uOmxhdExuZy5sbmdcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5lcnJvcignRXJyb3InLCBlcnJvcikpO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IGFkZHJlc3MgPT4ge1xyXG4gICAgICAgIHNldEZvcm1SZWdpc3RlclZhbHVlcyh7XHJcbiAgICAgICAgICAgIC4uLmZvcm1SZWdpc3RlclZhbHVlcyxcclxuICAgICAgICAgICAgYWRkcmVzc1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBoYWJpbGl0YXJMb2dpbiA9ICgpPT57XHJcbiAgICAgICAgcHJvcHMuc2hvd0xvZ2luKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcmVkaXJpZ2lyID0gKCk9PntcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmFzc2lnbignLycpO1xyXG4gICAgICAgIH0sIDE1MDApO1xyXG4gICAgfVxyXG4gICAgY29uc3QgcmVzcG9uc2VHb29nbGUgPSBkYXRhPT57XHJcbiAgICAgICAgaWYoZGF0YS50b2tlbklkKXtcclxuICAgICAgICAgICAgcmV0dXJuIHByb3BzLnNpbmdJbldpdGhHb29nbGUoZGF0YS50b2tlbklkKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtMb2dpblN0eWxlLmxvZ2luX19jb250YWluZXJ9PlxyXG4gICAgICAgICAgICA8aDYgY2xhc3NOYW1lPXtMb2dpblN0eWxlLnRpdGxlX19sb2dpbiArICcgJyArIGB0ZXh0LWNlbnRlcmB9PlJlZ2lzdHJhdGU8L2g2PlxyXG4gICAgICAgICAgICB7KHByb3BzLmVycm9yKT88RXJyb3IgbWVzc2FnZT17cHJvcHMuZXJyb3J9Lz46bnVsbH1cclxuICAgICAgICAgICAgeyhwcm9wcy5sb2d1ZWFkbyk/PGRpdiBjbGFzc05hbWU9XCJhbGVydCBhbGVydC1zdWNjZXNzIHRleHQtY2VudGVyXCI+QmllbnZlbmlkby9hIHtwcm9wcy51c3VhcmlvLm5vbWJyZX0ge3JlZGlyaWdpcigpfTwvZGl2PjpcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT17TG9naW5TdHlsZS5mb3JtICsgJyAnICsgYGZvcm0tZ3JvdXBgfSBuYW1lPVwiZm9ybS1sb2dpblwiIGlkPVwiZm9ybS1sb2dpblwiIG9uU3VibWl0PXtoYW5kbGVTdWJtaXRMb2dpbn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT17TG9naW5TdHlsZS5sYWJlbH0gaHRtbEZvcj1cIm5vbWJyZVwiPk5vbWJyZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgIGNsYXNzTmFtZT17TG9naW5TdHlsZS5pbnB1dCArICcgJyArIGBmb3JtLWNvbnRyb2xgfSBpZD1cIm5vbWJyZVwiIG5hbWU9XCJub21icmVcIiB2YWx1ZT17Zm9ybVJlZ2lzdGVyVmFsdWVzLm5vbWJyZX0gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZUxvZ2lufS8+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT17TG9naW5TdHlsZS5sYWJlbH0gaHRtbEZvcj1cInRlbGVmb25vXCI+VGVsZWZvbm88L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgIGNsYXNzTmFtZT17TG9naW5TdHlsZS5pbnB1dCArICcgJyArIGBmb3JtLWNvbnRyb2xgfSBpZD1cInRlbGVmb25vXCIgbmFtZT1cInRlbGVmb25vXCIgdmFsdWU9e2Zvcm1SZWdpc3RlclZhbHVlcy50ZWxlZm9ub30gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZUxvZ2lufS8+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT17TG9naW5TdHlsZS5sYWJlbH0gaHRtbEZvcj1cInViaWNhY2lvblwiPlViaWNhY2nDs248L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxQbGFjZXNBdXRvY29tcGxldGUgdmFsdWU9e2Zvcm1SZWdpc3RlclZhbHVlcy5hZGRyZXNzfSBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSBvblNlbGVjdD17aGFuZGxlU2VsZWN0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgeyh7IGdldElucHV0UHJvcHMsIHN1Z2dlc3Rpb25zLCBnZXRTdWdnZXN0aW9uSXRlbVByb3BzLCBsb2FkaW5nIH0pID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17TG9naW5TdHlsZS5pbnB1dCArICcgJyArIGBmb3JtLWNvbnRyb2xgfSBpZD1cInViaWNhY2lvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5nZXRJbnB1dFByb3BzKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiAnQnVzY8OhIHR1IGRpcmVjY2nDs24gLi4uJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImF1dG9jb21wbGV0ZS1kcm9wZG93bi1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2xvYWRpbmcgJiYgPGRpdj5Mb2FkaW5nLi4uPC9kaXY+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c3VnZ2VzdGlvbnMubWFwKChzdWdnZXN0aW9uLGtleSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY2xhc3NOYW1lID0gc3VnZ2VzdGlvbi5hY3RpdmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gJ3N1Z2dlc3Rpb24taXRlbS0tYWN0aXZlJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnc3VnZ2VzdGlvbi1pdGVtJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlubGluZSBzdHlsZSBmb3IgZGVtb25zdHJhdGlvbiBwdXJwb3NlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzdHlsZSA9IHN1Z2dlc3Rpb24uYWN0aXZlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHsgYmFja2dyb3VuZENvbG9yOiAnI2ZhZmFmYScsIGN1cnNvcjogJ3BvaW50ZXInLG1hcmdpbjonMTBweCcscGFkZGluZzonNXB4JyB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHsgYmFja2dyb3VuZENvbG9yOiAnI2ZmZmZmZicsIGN1cnNvcjogJ3BvaW50ZXInLG1hcmdpbjonMTBweCcscGFkZGluZzonNXB4JyB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5nZXRTdWdnZXN0aW9uSXRlbVByb3BzKHN1Z2dlc3Rpb24sIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3N1Z2dlc3Rpb24uZGVzY3JpcHRpb259PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICA8L1BsYWNlc0F1dG9jb21wbGV0ZT5cclxuICAgICAgICAgICAgICAgICAgICB7LyogPGlucHV0IHR5cGU9XCJ0ZXh0XCIgIGNsYXNzTmFtZT17TG9naW5TdHlsZS5pbnB1dCArICcgJyArIGBmb3JtLWNvbnRyb2xgfSBpZD1cInViaWNhY2lvblwiIG5hbWU9XCJ1YmljYWNpb25cIiB2YWx1ZT17Zm9ybVJlZ2lzdGVyVmFsdWVzLnViaWNhY2lvbn0gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZUxvZ2lufS8+XHJcbiAgICAgICAgICAgICAgICAgICAgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT17TG9naW5TdHlsZS5sYWJlbH0gaHRtbEZvcj1cImVtYWxcIj5FbWFpbDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJlbWFpbFwiICBjbGFzc05hbWU9e0xvZ2luU3R5bGUuaW5wdXQgKyAnICcgKyBgZm9ybS1jb250cm9sYH0gaWQ9XCJlbWFpbFwiIG5hbWU9XCJlbWFpbFwiIHZhbHVlPXtmb3JtUmVnaXN0ZXJWYWx1ZXMuZW1haWx9IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2VMb2dpbn0vPlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9e0xvZ2luU3R5bGUubGFiZWx9IGh0bWxGb3I9XCJwYXNzd29yZFwiPkNvbnRyYXNlw7FhPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgIGNsYXNzTmFtZT17TG9naW5TdHlsZS5pbnB1dCArICcgJyArIGBmb3JtLWNvbnRyb2xgfSBpZD1cInBhc3N3b3JkXCIgbmFtZT1cInBhc3N3b3JkXCIgdmFsdWU9e2Zvcm1SZWdpc3RlclZhbHVlcy5wYXNzd29yZH0gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZUxvZ2lufS8+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgICAgICAgICB7KHByb3BzLmxvYWRpbmcpPzxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj48TG9hZGVyLz48L2Rpdj46PGlucHV0IHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJib3RvbiBiZy15ZWxsb3cgbWItMVwiIHZhbHVlPVwiUmVnaXN0cmFybWVcIi8+fVxyXG4gICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtMb2dpblN0eWxlLnJlZ2lzdGVySW5Mb2dpbiArICcgJyArIGB0ZXh0LWNlbnRlcmB9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtbXV0ZWRcIj7Cv1lhIHRlbmVzIGN1ZW50YT88c3BhbiBjbGFzc05hbWU9e0xvZ2luU3R5bGUucmVnaXN0ZXJMaW5rfSBvbkNsaWNrPXtoYWJpbGl0YXJMb2dpbn0+IEluZ3Jlc8OhPC9zcGFuPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHb29nbGVMb2dpblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGllbnRJZD17R09PR0xFX0NMSUVOVF9JRH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uVGV4dD1cIlJlZ2lzdHJhdGUgY29uIEdvb2dsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uU3VjY2Vzcz17cmVzcG9uc2VHb29nbGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uRmFpbHVyZT17cmVzcG9uc2VHb29nbGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvb2tpZVBvbGljeT17J3NpbmdsZV9ob3N0X29yaWdpbid9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gcmVkdWNlcnM9PntcclxuICAgIHJldHVybiByZWR1Y2Vycy51c3VhcmlvUmVkdWNlcjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsdXN1YXJpb0FjdGlvbnMpKFJlZ2lzdGVyKTsiXSwic291cmNlUm9vdCI6IiJ9