webpackHotUpdate_N_E("pages/_app",{

/***/ "./store/actions/usuarioActions.js":
/*!*****************************************!*\
  !*** ./store/actions/usuarioActions.js ***!
  \*****************************************/
/*! exports provided: login, logout, verificarSesion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "login", function() { return login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logout", function() { return logout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "verificarSesion", function() { return verificarSesion; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _config_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config/index */ "./config/index.js");
/* harmony import */ var _types_usuarioTypes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../types/usuarioTypes */ "./store/types/usuarioTypes.js");




var login = function login(data) {
  return /*#__PURE__*/function () {
    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(dispatch) {
      var headers;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              dispatch({
                type: _types_usuarioTypes__WEBPACK_IMPORTED_MODULE_3__["LOADING"]
              });
              _context.prev = 1;

              if (!(data.email.trim() === '' || data.password.trim() === '')) {
                _context.next = 4;
                break;
              }

              return _context.abrupt("return", dispatch({
                type: _types_usuarioTypes__WEBPACK_IMPORTED_MODULE_3__["ERROR"],
                payload: 'Es necesario completar todos los campos'
              }));

            case 4:
              headers = new Headers();
              headers.append("Content-Type", "application/json");
              return _context.abrupt("return", fetch("".concat(_config_index__WEBPACK_IMPORTED_MODULE_2__["API"], "/login"), {
                method: 'POST',
                body: JSON.stringify(data),
                headers: headers
              }).then(function (res) {
                return res.json();
              }).then(function (response) {
                if (response.ok) {
                  var objUsuario = {
                    nombre: response.usuario.nombre,
                    email: response.usuario.email,
                    foto: response.usuario.foto
                  };
                  localStorage.setItem('oliverpetshop_usuario', JSON.stringify(objUsuario));
                  dispatch({
                    type: _types_usuarioTypes__WEBPACK_IMPORTED_MODULE_3__["LOGIN"],
                    payload: localStorage.getItem('oliverpetshop_usuario')
                  });
                } else {
                  return dispatch({
                    type: _types_usuarioTypes__WEBPACK_IMPORTED_MODULE_3__["ERROR"],
                    payload: response.info
                  });
                }
              }));

            case 9:
              _context.prev = 9;
              _context.t0 = _context["catch"](1);
              console.log(_context.t0);
              return _context.abrupt("return", dispatch({
                type: _types_usuarioTypes__WEBPACK_IMPORTED_MODULE_3__["ERROR"],
                payload: _context.t0
              }));

            case 13:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 9]]);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
};
var logout = function logout() {
  return /*#__PURE__*/function () {
    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(dispatch) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              dispatch({
                type: _types_usuarioTypes__WEBPACK_IMPORTED_MODULE_3__["LOADING"]
              });
              _context2.prev = 1;
              localStorage.removeItem('oliverpetshop_usuario');
              return _context2.abrupt("return", dispatch({
                type: _types_usuarioTypes__WEBPACK_IMPORTED_MODULE_3__["LOGOUT"]
              }));

            case 6:
              _context2.prev = 6;
              _context2.t0 = _context2["catch"](1);
              dispatch({
                type: _types_usuarioTypes__WEBPACK_IMPORTED_MODULE_3__["ERROR"],
                payload: _context2.t0
              });

            case 9:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[1, 6]]);
    }));

    return function (_x2) {
      return _ref2.apply(this, arguments);
    };
  }();
};
var verificarSesion = function verificarSesion() {
  return /*#__PURE__*/function () {
    var _ref3 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(dispatch) {
      var dataUsuario;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              dataUsuario = localStorage.getItem('oliverpetshop_usuario');

              if (!dataUsuario) {
                _context3.next = 4;
                break;
              }

              return _context3.abrupt("return", dispatch({
                type: _types_usuarioTypes__WEBPACK_IMPORTED_MODULE_3__["VERIFICAR_SESION"],
                payload: true
              }));

            case 4:
              return _context3.abrupt("return", dispatch({
                type: _types_usuarioTypes__WEBPACK_IMPORTED_MODULE_3__["VERIFICAR_SESION"],
                payload: false
              }));

            case 7:
              _context3.prev = 7;
              _context3.t0 = _context3["catch"](0);
              dispatch({
                type: _types_usuarioTypes__WEBPACK_IMPORTED_MODULE_3__["ERROR"],
                payload: _context3.t0
              });

            case 10:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[0, 7]]);
    }));

    return function (_x3) {
      return _ref3.apply(this, arguments);
    };
  }();
};

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./store/reducers/usuarioReducer.js":
/*!******************************************!*\
  !*** ./store/reducers/usuarioReducer.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _types_usuarioTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../types/usuarioTypes */ "./store/types/usuarioTypes.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


var INITIAL_STATE = {
  usuario: null,
  logueado: false,
  loading: false,
  error: null
};

var usuarioReducer = function usuarioReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _types_usuarioTypes__WEBPACK_IMPORTED_MODULE_1__["VERIFICAR_SESION"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        logueado: action.payload,
        loading: false
      });

    case _types_usuarioTypes__WEBPACK_IMPORTED_MODULE_1__["LOGIN"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        logueado: true,
        loading: false,
        error: null,
        usuario: JSON.parse(action.payload)
      });

    case _types_usuarioTypes__WEBPACK_IMPORTED_MODULE_1__["LOGOUT"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        usuario: null,
        logueado: false,
        loading: false
      });

    case _types_usuarioTypes__WEBPACK_IMPORTED_MODULE_1__["LOADING"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: true
      });

    case _types_usuarioTypes__WEBPACK_IMPORTED_MODULE_1__["ERROR"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        logueado: false,
        loading: false,
        error: action.payload
      });

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (usuarioReducer);

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./store/types/usuarioTypes.js":
/*!*************************************!*\
  !*** ./store/types/usuarioTypes.js ***!
  \*************************************/
/*! exports provided: VERIFICAR_SESION, LOGIN, LOGOUT, LOADING, ERROR */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VERIFICAR_SESION", function() { return VERIFICAR_SESION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN", function() { return LOGIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGOUT", function() { return LOGOUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOADING", function() { return LOADING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ERROR", function() { return ERROR; });
var VERIFICAR_SESION = 'usuario_verificarsesion';
var LOGIN = 'usuario_login';
var LOGOUT = 'usuario_logout';
var LOADING = 'usuario_loading';
var ERROR = 'usuario_error';


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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvYWN0aW9ucy91c3VhcmlvQWN0aW9ucy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvcmVkdWNlcnMvdXN1YXJpb1JlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3N0b3JlL3R5cGVzL3VzdWFyaW9UeXBlcy5qcyJdLCJuYW1lcyI6WyJsb2dpbiIsImRhdGEiLCJkaXNwYXRjaCIsInR5cGUiLCJMT0FESU5HIiwiZW1haWwiLCJ0cmltIiwicGFzc3dvcmQiLCJFUlJPUiIsInBheWxvYWQiLCJoZWFkZXJzIiwiSGVhZGVycyIsImFwcGVuZCIsImZldGNoIiwiQVBJIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0aGVuIiwicmVzIiwianNvbiIsInJlc3BvbnNlIiwib2siLCJvYmpVc3VhcmlvIiwibm9tYnJlIiwidXN1YXJpbyIsImZvdG8iLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiTE9HSU4iLCJnZXRJdGVtIiwiaW5mbyIsImNvbnNvbGUiLCJsb2ciLCJsb2dvdXQiLCJyZW1vdmVJdGVtIiwiTE9HT1VUIiwidmVyaWZpY2FyU2VzaW9uIiwiZGF0YVVzdWFyaW8iLCJWRVJJRklDQVJfU0VTSU9OIiwiSU5JVElBTF9TVEFURSIsImxvZ3VlYWRvIiwibG9hZGluZyIsImVycm9yIiwidXN1YXJpb1JlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInBhcnNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRU8sSUFBTUEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsQ0FBQ0MsSUFBRDtBQUFBO0FBQUEsZ01BQVEsaUJBQU1DLFFBQU47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ3pCQSxzQkFBUSxDQUFDO0FBQ0xDLG9CQUFJLEVBQUNDLDJEQUFPQTtBQURQLGVBQUQsQ0FBUjtBQUR5Qjs7QUFBQSxvQkFLbEJILElBQUksQ0FBQ0ksS0FBTCxDQUFXQyxJ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Q3RDLE9BQWxCO0FBQWhFOztBQUNKLFNBQUs0QiwwREFBTDtBQUNJLDZDQUFXUyxLQUFYO0FBQWlCcEIsZUFBTyxFQUFDLElBQXpCO0FBQThCZ0IsZ0JBQVEsRUFBQyxLQUF2QztBQUE2Q0MsZUFBTyxFQUFDO0FBQXJEOztBQUNKLFNBQUt2QywyREFBTDtBQUNJLDZDQUFXMEMsS0FBWDtBQUFpQkgsZUFBTyxFQUFDO0FBQXpCOztBQUNKLFNBQUtuQyx5REFBTDtBQUNJLDZDQUFXc0MsS0FBWDtBQUFpQkosZ0JBQVEsRUFBQyxLQUExQjtBQUFnQ0MsZUFBTyxFQUFDLEtBQXhDO0FBQThDQyxhQUFLLEVBQUNHLE1BQU0sQ0FBQ3RDO0FBQTNEOztBQUNKO0FBQ0ksYUFBT3FDLEtBQVA7QUFaUjtBQWNILENBZkQ7O0FBaUJlRCw2RUFBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBQU1MLGdCQUFnQixHQUFHLHlCQUF6QjtBQUNBLElBQU1WLEtBQUssR0FBRyxlQUFkO0FBQ0EsSUFBTU8sTUFBTSxHQUFHLGdCQUFmO0FBQ0EsSUFBTWpDLE9BQU8sR0FBRyxpQkFBaEI7QUFDQSxJQUFNSSxLQUFLLEdBQUcsZUFBZDtBQUVBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuNjAwMmQ1OGU1Yjg3MzI3M2E0MjkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QVBJfSBmcm9tICcuLi8uLi9jb25maWcvaW5kZXgnO1xyXG5pbXBvcnQge1ZFUklGSUNBUl9TRVNJT04sTE9HSU4sTE9HT1VULExPQURJTkcsRVJST1J9IGZyb20gJy4uL3R5cGVzL3VzdWFyaW9UeXBlcyc7XHJcblxyXG5leHBvcnQgY29uc3QgbG9naW4gPSAoZGF0YSk9PmFzeW5jKGRpc3BhdGNoKT0+e1xyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICAgIHR5cGU6TE9BRElOR1xyXG4gICAgfSk7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGlmKGRhdGEuZW1haWwudHJpbSgpID09PSAnJyB8fCBkYXRhLnBhc3N3b3JkLnRyaW0oKSA9PT0gJycpe1xyXG4gICAgICAgICAgICByZXR1cm4gZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgdHlwZTpFUlJPUixcclxuICAgICAgICAgICAgICAgIHBheWxvYWQ6J0VzIG5lY2VzYXJpbyBjb21wbGV0YXIgdG9kb3MgbG9zIGNhbXBvcydcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xyXG4gICAgICAgIGhlYWRlcnMuYXBwZW5kKFwiQ29udGVudC1UeXBlXCIsIFwiYXBwbGljYXRpb24vanNvblwiKTtcclxuICAgICAgICByZXR1cm4gZmV0Y2goYCR7QVBJfS9sb2dpbmAse1xyXG4gICAgICAgICAgICBtZXRob2Q6J1BPU1QnLFxyXG4gICAgICAgICAgICBib2R5OkpTT04uc3RyaW5naWZ5KGRhdGEpLFxyXG4gICAgICAgICAgICBoZWFkZXJzXHJcbiAgICAgICAgfSkudGhlbihyZXM9PnJlcy5qc29uKCkpLnRoZW4ocmVzcG9uc2U9PntcclxuICAgICAgICAgICAgaWYocmVzcG9uc2Uub2spe1xyXG4gICAgICAgICAgICAgICAgbGV0IG9ialVzdWFyaW8gPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbm9tYnJlOnJlc3BvbnNlLnVzdWFyaW8ubm9tYnJlLFxyXG4gICAgICAgICAgICAgICAgICAgIGVtYWlsOnJlc3BvbnNlLnVzdWFyaW8uZW1haWwsXHJcbiAgICAgICAgICAgICAgICAgICAgZm90bzpyZXNwb25zZS51c3VhcmlvLmZvdG9cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdvbGl2ZXJwZXRzaG9wX3VzdWFyaW8nLEpTT04uc3RyaW5naWZ5KG9ialVzdWFyaW8pKTtcclxuICAgICAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOkxPR0lOLFxyXG4gICAgICAgICAgICAgICAgICAgIHBheWxvYWQ6bG9jYWxTdG9yYWdlLmdldEl0ZW0oJ29saXZlcnBldHNob3BfdXN1YXJpbycpXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIHJldHVybiBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTpFUlJPUixcclxuICAgICAgICAgICAgICAgICAgICBwYXlsb2FkOnJlc3BvbnNlLmluZm9cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTpFUlJPUixcclxuICAgICAgICAgICAgcGF5bG9hZDplcnJvclxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBsb2dvdXQgPSAoKT0+YXN5bmMoZGlzcGF0Y2gpPT57XHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgdHlwZTpMT0FESU5HXHJcbiAgICB9KTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ29saXZlcnBldHNob3BfdXN1YXJpbycpO1xyXG4gICAgICAgIHJldHVybiBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6TE9HT1VUXHJcbiAgICAgICAgfSlcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOkVSUk9SLFxyXG4gICAgICAgICAgICBwYXlsb2FkOmVycm9yXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHZlcmlmaWNhclNlc2lvbj0oKT0+YXN5bmMoZGlzcGF0Y2gpPT57XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGxldCBkYXRhVXN1YXJpbyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdvbGl2ZXJwZXRzaG9wX3VzdWFyaW8nKTtcclxuICAgICAgICBpZihkYXRhVXN1YXJpbyl7XHJcbiAgICAgICAgICAgIHJldHVybiBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOlZFUklGSUNBUl9TRVNJT04sXHJcbiAgICAgICAgICAgICAgICBwYXlsb2FkOnRydWVcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTpWRVJJRklDQVJfU0VTSU9OLFxyXG4gICAgICAgICAgICBwYXlsb2FkOmZhbHNlXHJcbiAgICAgICAgfSlcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOkVSUk9SLFxyXG4gICAgICAgICAgICBwYXlsb2FkOmVycm9yXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufSIsImltcG9ydCB7VkVSSUZJQ0FSX1NFU0lPTixMT0dJTixMT0dPVVQsTE9BRElORyxFUlJPUn0gZnJvbSAnLi4vdHlwZXMvdXN1YXJpb1R5cGVzJztcclxuXHJcbmNvbnN0IElOSVRJQUxfU1RBVEUgPSB7XHJcbiAgICB1c3VhcmlvOm51bGwsXHJcbiAgICBsb2d1ZWFkbzpmYWxzZSxcclxuICAgIGxvYWRpbmc6ZmFsc2UsXHJcbiAgICBlcnJvcjpudWxsXHJcbn07XHJcblxyXG5jb25zdCB1c3VhcmlvUmVkdWNlciA9IChzdGF0ZT1JTklUSUFMX1NUQVRFLGFjdGlvbik9PntcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICBjYXNlIFZFUklGSUNBUl9TRVNJT046XHJcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsbG9ndWVhZG86YWN0aW9uLnBheWxvYWQsbG9hZGluZzpmYWxzZX1cclxuICAgICAgICBjYXNlIExPR0lOOlxyXG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLGxvZ3VlYWRvOnRydWUsbG9hZGluZzpmYWxzZSxlcnJvcjpudWxsLHVzdWFyaW86SlNPTi5wYXJzZShhY3Rpb24ucGF5bG9hZCl9XHJcbiAgICAgICAgY2FzZSBMT0dPVVQ6XHJcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsdXN1YXJpbzpudWxsLGxvZ3VlYWRvOmZhbHNlLGxvYWRpbmc6ZmFsc2V9XHJcbiAgICAgICAgY2FzZSBMT0FESU5HOlxyXG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLGxvYWRpbmc6dHJ1ZX1cclxuICAgICAgICBjYXNlIEVSUk9SOlxyXG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLGxvZ3VlYWRvOmZhbHNlLGxvYWRpbmc6ZmFsc2UsZXJyb3I6YWN0aW9uLnBheWxvYWR9XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB1c3VhcmlvUmVkdWNlcjtcclxuIiwiY29uc3QgVkVSSUZJQ0FSX1NFU0lPTiA9ICd1c3VhcmlvX3ZlcmlmaWNhcnNlc2lvbic7XHJcbmNvbnN0IExPR0lOID0gJ3VzdWFyaW9fbG9naW4nO1xyXG5jb25zdCBMT0dPVVQgPSAndXN1YXJpb19sb2dvdXQnO1xyXG5jb25zdCBMT0FESU5HID0gJ3VzdWFyaW9fbG9hZGluZyc7XHJcbmNvbnN0IEVSUk9SID0gJ3VzdWFyaW9fZXJyb3InO1xyXG5cclxuZXhwb3J0IHtWRVJJRklDQVJfU0VTSU9OLExPR0lOLExPR09VVCxMT0FESU5HLEVSUk9SfSJdLCJzb3VyY2VSb290IjoiIn0=