webpackHotUpdate_N_E("pages/_app",{

/***/ "./store/actions/usuarioActions.js":
/*!*****************************************!*\
  !*** ./store/actions/usuarioActions.js ***!
  \*****************************************/
/*! exports provided: login, logout, verificarSesion, register, singInWithGoogle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "login", function() { return login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logout", function() { return logout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "verificarSesion", function() { return verificarSesion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "singInWithGoogle", function() { return singInWithGoogle; });
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
var register = function register(data) {
  return function (dispatch) {
    dispatch({
      type: _types_usuarioTypes__WEBPACK_IMPORTED_MODULE_3__["LOADING"]
    });

    try {
      var headers = new Headers();
      headers.append("Content-Type", "application/json");
      return fetch("".concat(_config_index__WEBPACK_IMPORTED_MODULE_2__["API"], "register"), {
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
          dispatch({
            type: _types_usuarioTypes__WEBPACK_IMPORTED_MODULE_3__["ERROR"],
            payload: response.info
          });
        }
      });
    } catch (error) {
      dispatch({
        type: _types_usuarioTypes__WEBPACK_IMPORTED_MODULE_3__["ERROR"],
        payload: error
      });
    }
  };
};
var singInWithGoogle = function singInWithGoogle(tokenId) {
  return /*#__PURE__*/function () {
    var _ref4 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(dispatch) {
      var headers;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              dispatch({
                type: _types_usuarioTypes__WEBPACK_IMPORTED_MODULE_3__["LOADING"]
              });
              _context4.prev = 1;
              headers = new Headers();
              headers.append("Content-Type", "application/json");
              return _context4.abrupt("return", fetch("".concat(_config_index__WEBPACK_IMPORTED_MODULE_2__["API"], "google/tokensignin"), {
                method: 'POST',
                headers: headers,
                body: JSON.stringify({
                  token: tokenId
                })
              }).then(function (res) {
                return res.json();
              }).then(function (response) {
                if (!response.ok) {
                  return dispatch({
                    type: _types_usuarioTypes__WEBPACK_IMPORTED_MODULE_3__["ERROR"],
                    payload: response.info
                  });
                }

                ;
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
              }));

            case 7:
              _context4.prev = 7;
              _context4.t0 = _context4["catch"](1);
              dispatch({
                type: _types_usuarioTypes__WEBPACK_IMPORTED_MODULE_3__["ERROR"],
                payload: _context4.t0
              });

            case 10:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, null, [[1, 7]]);
    }));

    return function (_x4) {
      return _ref4.apply(this, arguments);
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvYWN0aW9ucy91c3VhcmlvQWN0aW9ucy5qcyJdLCJuYW1lcyI6WyJsb2dpbiIsImRhdGEiLCJkaXNwYXRjaCIsInR5cGUiLCJMT0FESU5HIiwiZW1haWwiLCJ0cmltIiwicGFzc3dvcmQiLCJFUlJPUiIsInBheWxvYWQiLCJoZWFkZXJzIiwiSGVhZGVycyIsImFwcGVuZCIsImZldGNoIiwiQVBJIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0aGVuIiwicmVzIiwianNvbiIsInJlc3BvbnNlIiwib2siLCJvYmpVc3VhcmlvIiwibm9tYnJlIiwidXN1YXJpbyIsImZvdG8iLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiTE9HSU4iLCJnZXRJdGVtIiwiaW5mbyIsImNvbnNvbGUiLCJsb2ciLCJsb2dvdXQiLCJyZW1vdmVJdGVtIiwiTE9HT1VUIiwidmVyaWZpY2FyU2VzaW9uIiwiZGF0YVVzdWFyaW8iLCJWRVJJRklDQVJfU0VTSU9OIiwicmVnaXN0ZXIiLCJlcnJvciIsInNpbmdJbldpdGhHb29nbGUiLCJ0b2tlbklkIiwidG9rZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVPLElBQU1BLEtBQUssR0FBRyxTQUFSQSxLQUFRLENBQUNDLElBQUQ7QUFBQTtBQUFBLGdNQUFRLGlCQUFNQyxRQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUN6QkEsc0JBQVEsQ0FBQztBQUNMQyxvQkFBSSxFQUFDQywyREFBT0E7QUFEUCxlQUFELENBQVI7QUFEeUI7O0FBQUEsb0JBS2xCSCxJQUFJLENBQUNJLEtBQUwsQ0FBV0MsSUFBWCxPQUFzQixFQUF0QixJQUE0QkwsSUFBSSxDQUFDTSxRQUFMLENBQWNELElBQWQsT0FBeUIsRUFMbkM7QUFBQTtBQUFBO0FBQUE7O0FBQUEsK0NBTVZKLFFBQVEsQ0FBQztBQUNaQyxvQkFBSSxFQUFDSyx5REFETztBQUVa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QSxlQUpKLEVBSWtCRixJQUpsQixDQUl1QixVQUFBRyxRQUFRLEVBQUU7QUFDcEMsb0JBQUcsQ0FBQ0EsUUFBUSxDQUFDQyxFQUFiLEVBQWdCO0FBQ1oseUJBQU9yQixRQUFRLENBQUM7QUFDWkMsd0JBQUksRUFBQ0sseURBRE87QUFFWkMsMkJBQU8sRUFBQ2EsUUFBUSxDQUFDVTtBQUZMLG1CQUFELENBQWY7QUFJSDs7QUFBQTtBQUNELG9CQUFJUixVQUFVLEdBQUc7QUFDYkMsd0JBQU0sRUFBQ0gsUUFBUSxDQUFDSSxPQUFULENBQWlCRCxNQURYO0FBRWJwQix1QkFBSyxFQUFDaUIsUUFBUSxDQUFDSSxPQUFULENBQWlCckIsS0FGVjtBQUdic0Isc0JBQUksRUFBQ0wsUUFBUSxDQUFDSSxPQUFULENBQWlCQztBQUhULGlCQUFqQjtBQUtBQyw0QkFBWSxDQUFDQyxPQUFiLENBQXFCLHVCQUFyQixFQUE2Q1osSUFBSSxDQUFDQyxTQUFMLENBQWVNLFVBQWYsQ0FBN0M7QUFDQXRCLHdCQUFRLENBQUM7QUFDTEMsc0JBQUksRUFBQzJCLHlEQURBO0FBRUxyQix5QkFBTyxFQUFDbUIsWUFBWSxDQUFDRyxPQUFiLENBQXFCLHVCQUFyQjtBQUZILGlCQUFELENBQVI7QUFJSCxlQXJCTSxDQVA0Qjs7QUFBQTtBQUFBO0FBQUE7QUE4Qm5DN0Isc0JBQVEsQ0FBQztBQUNMQyxvQkFBSSxFQUFDSyx5REFEQTtBQUVMQyx1QkFBTztBQUZGLGVBQUQsQ0FBUjs7QUE5Qm1DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUo7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxDQUFoQyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjg1NWEzZThkZDQzM2I2YjhiZjQxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0FQSX0gZnJvbSAnLi4vLi4vY29uZmlnL2luZGV4JztcclxuaW1wb3J0IHtWRVJJRklDQVJfU0VTSU9OLExPR0lOLExPR09VVCxMT0FESU5HLEVSUk9SfSBmcm9tICcuLi90eXBlcy91c3VhcmlvVHlwZXMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ2luID0gKGRhdGEpPT5hc3luYyhkaXNwYXRjaCk9PntcclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgICB0eXBlOkxPQURJTkdcclxuICAgIH0pO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBpZihkYXRhLmVtYWlsLnRyaW0oKSA9PT0gJycgfHwgZGF0YS5wYXNzd29yZC50cmltKCkgPT09ICcnKXtcclxuICAgICAgICAgICAgcmV0dXJuIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6RVJST1IsXHJcbiAgICAgICAgICAgICAgICBwYXlsb2FkOidFcyBuZWNlc2FyaW8gY29tcGxldGFyIHRvZG9zIGxvcyBjYW1wb3MnXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcclxuICAgICAgICBoZWFkZXJzLmFwcGVuZChcIkNvbnRlbnQtVHlwZVwiLCBcImFwcGxpY2F0aW9uL2pzb25cIik7XHJcbiAgICAgICAgcmV0dXJuIGZldGNoKGAke0FQSX0vbG9naW5gLHtcclxuICAgICAgICAgICAgbWV0aG9kOidQT1NUJyxcclxuICAgICAgICAgICAgYm9keTpKU09OLnN0cmluZ2lmeShkYXRhKSxcclxuICAgICAgICAgICAgaGVhZGVyc1xyXG4gICAgICAgIH0pLnRoZW4ocmVzPT5yZXMuanNvbigpKS50aGVuKHJlc3BvbnNlPT57XHJcbiAgICAgICAgICAgIGlmKHJlc3BvbnNlLm9rKXtcclxuICAgICAgICAgICAgICAgIGxldCBvYmpVc3VhcmlvID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIG5vbWJyZTpyZXNwb25zZS51c3VhcmlvLm5vbWJyZSxcclxuICAgICAgICAgICAgICAgICAgICBlbWFpbDpyZXNwb25zZS51c3VhcmlvLmVtYWlsLFxyXG4gICAgICAgICAgICAgICAgICAgIGZvdG86cmVzcG9uc2UudXN1YXJpby5mb3RvXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnb2xpdmVycGV0c2hvcF91c3VhcmlvJyxKU09OLnN0cmluZ2lmeShvYmpVc3VhcmlvKSk7XHJcbiAgICAgICAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTpMT0dJTixcclxuICAgICAgICAgICAgICAgICAgICBwYXlsb2FkOmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdvbGl2ZXJwZXRzaG9wX3VzdWFyaW8nKVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6RVJST1IsXHJcbiAgICAgICAgICAgICAgICAgICAgcGF5bG9hZDpyZXNwb25zZS5pbmZvXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6RVJST1IsXHJcbiAgICAgICAgICAgIHBheWxvYWQ6ZXJyb3JcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgbG9nb3V0ID0gKCk9PmFzeW5jKGRpc3BhdGNoKT0+e1xyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICAgIHR5cGU6TE9BRElOR1xyXG4gICAgfSk7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdvbGl2ZXJwZXRzaG9wX3VzdWFyaW8nKTtcclxuICAgICAgICByZXR1cm4gZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOkxPR09VVFxyXG4gICAgICAgIH0pXHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTpFUlJPUixcclxuICAgICAgICAgICAgcGF5bG9hZDplcnJvclxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCB2ZXJpZmljYXJTZXNpb249KCk9PmFzeW5jKGRpc3BhdGNoKT0+e1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBsZXQgZGF0YVVzdWFyaW8gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnb2xpdmVycGV0c2hvcF91c3VhcmlvJyk7XHJcbiAgICAgICAgaWYoZGF0YVVzdWFyaW8pe1xyXG4gICAgICAgICAgICByZXR1cm4gZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgdHlwZTpWRVJJRklDQVJfU0VTSU9OLFxyXG4gICAgICAgICAgICAgICAgcGF5bG9hZDp0cnVlXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6VkVSSUZJQ0FSX1NFU0lPTixcclxuICAgICAgICAgICAgcGF5bG9hZDpmYWxzZVxyXG4gICAgICAgIH0pXHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTpFUlJPUixcclxuICAgICAgICAgICAgcGF5bG9hZDplcnJvclxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCByZWdpc3Rlcj0oZGF0YSk9PihkaXNwYXRjaCk9PntcclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgICB0eXBlOkxPQURJTkdcclxuICAgIH0pO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XHJcbiAgICAgICAgaGVhZGVycy5hcHBlbmQoXCJDb250ZW50LVR5cGVcIiwgXCJhcHBsaWNhdGlvbi9qc29uXCIpO1xyXG4gICAgICAgIHJldHVybiBmZXRjaChgJHtBUEl9cmVnaXN0ZXJgLHtcclxuICAgICAgICAgICAgbWV0aG9kOidQT1NUJyxcclxuICAgICAgICAgICAgYm9keTpKU09OLnN0cmluZ2lmeShkYXRhKSxcclxuICAgICAgICAgICAgaGVhZGVyc1xyXG4gICAgICAgIH0pLnRoZW4ocmVzPT5yZXMuanNvbigpKS50aGVuKHJlc3BvbnNlPT57XHJcbiAgICAgICAgICAgIGlmKHJlc3BvbnNlLm9rKXtcclxuICAgICAgICAgICAgICAgIGxldCBvYmpVc3VhcmlvID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIG5vbWJyZTpyZXNwb25zZS51c3VhcmlvLm5vbWJyZSxcclxuICAgICAgICAgICAgICAgICAgICBlbWFpbDpyZXNwb25zZS51c3VhcmlvLmVtYWlsLFxyXG4gICAgICAgICAgICAgICAgICAgIGZvdG86cmVzcG9uc2UudXN1YXJpby5mb3RvXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnb2xpdmVycGV0c2hvcF91c3VhcmlvJyxKU09OLnN0cmluZ2lmeShvYmpVc3VhcmlvKSk7XHJcbiAgICAgICAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTpMT0dJTixcclxuICAgICAgICAgICAgICAgICAgICBwYXlsb2FkOmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdvbGl2ZXJwZXRzaG9wX3VzdWFyaW8nKVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6RVJST1IsXHJcbiAgICAgICAgICAgICAgICAgICAgcGF5bG9hZDpyZXNwb25zZS5pbmZvXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOkVSUk9SLFxyXG4gICAgICAgICAgICBwYXlsb2FkOmVycm9yXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHNpbmdJbldpdGhHb29nbGUgPSB0b2tlbklkID0+IGFzeW5jKGRpc3BhdGNoKT0+e1xyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICAgIHR5cGU6TE9BRElOR1xyXG4gICAgfSk7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcclxuICAgICAgICBoZWFkZXJzLmFwcGVuZChcIkNvbnRlbnQtVHlwZVwiLCBcImFwcGxpY2F0aW9uL2pzb25cIik7XHJcbiAgICAgICAgcmV0dXJuIGZldGNoKGAke0FQSX1nb29nbGUvdG9rZW5zaWduaW5gLHtcclxuICAgICAgICAgICAgbWV0aG9kOidQT1NUJyxcclxuICAgICAgICAgICAgaGVhZGVycyxcclxuICAgICAgICAgICAgYm9keTpKU09OLnN0cmluZ2lmeSh7dG9rZW46dG9rZW5JZH0pXHJcbiAgICAgICAgfSkudGhlbihyZXM9PnJlcy5qc29uKCkpLnRoZW4ocmVzcG9uc2U9PntcclxuICAgICAgICAgICAgaWYoIXJlc3BvbnNlLm9rKXtcclxuICAgICAgICAgICAgICAgIHJldHVybiBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTpFUlJPUixcclxuICAgICAgICAgICAgICAgICAgICBwYXlsb2FkOnJlc3BvbnNlLmluZm9cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGxldCBvYmpVc3VhcmlvID0ge1xyXG4gICAgICAgICAgICAgICAgbm9tYnJlOnJlc3BvbnNlLnVzdWFyaW8ubm9tYnJlLFxyXG4gICAgICAgICAgICAgICAgZW1haWw6cmVzcG9uc2UudXN1YXJpby5lbWFpbCxcclxuICAgICAgICAgICAgICAgIGZvdG86cmVzcG9uc2UudXN1YXJpby5mb3RvXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ29saXZlcnBldHNob3BfdXN1YXJpbycsSlNPTi5zdHJpbmdpZnkob2JqVXN1YXJpbykpO1xyXG4gICAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOkxPR0lOLFxyXG4gICAgICAgICAgICAgICAgcGF5bG9hZDpsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnb2xpdmVycGV0c2hvcF91c3VhcmlvJylcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSlcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOkVSUk9SLFxyXG4gICAgICAgICAgICBwYXlsb2FkOmVycm9yXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0=