webpackHotUpdate_N_E("pages/_app",{

/***/ "./store/actions/usuarioActions.js":
/*!*****************************************!*\
  !*** ./store/actions/usuarioActions.js ***!
  \*****************************************/
/*! exports provided: login, logout, traerInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "login", function() { return login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logout", function() { return logout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "traerInfo", function() { return traerInfo; });
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
                type: _types_usuarioTypes__WEBPACK_IMPORTED_MODULE_3__["LOGIN"]
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
var traerInfo = function traerInfo() {
  return /*#__PURE__*/function () {
    var _ref3 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(dispatch) {
      var dataUsuario;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              try {
                dataUsuario = localStorage.getItem('oliverpetshop_usuario');
                dispatch({
                  type: _types_usuarioTypes__WEBPACK_IMPORTED_MODULE_3__["TRAER_INFO"],
                  payload: JSON.parse(dataUsuario)
                });
              } catch (error) {
                dispatch({
                  type: _types_usuarioTypes__WEBPACK_IMPORTED_MODULE_3__["ERROR"],
                  payload: error
                });
              }

            case 1:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvYWN0aW9ucy91c3VhcmlvQWN0aW9ucy5qcyJdLCJuYW1lcyI6WyJsb2dpbiIsImRhdGEiLCJkaXNwYXRjaCIsInR5cGUiLCJMT0FESU5HIiwiZW1haWwiLCJ0cmltIiwicGFzc3dvcmQiLCJFUlJPUiIsInBheWxvYWQiLCJoZWFkZXJzIiwiSGVhZGVycyIsImFwcGVuZCIsImZldGNoIiwiQVBJIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0aGVuIiwicmVzIiwianNvbiIsInJlc3BvbnNlIiwib2siLCJvYmpVc3VhcmlvIiwibm9tYnJlIiwidXN1YXJpbyIsImZvdG8iLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiTE9HSU4iLCJnZXRJdGVtIiwiaW5mbyIsImNvbnNvbGUiLCJsb2ciLCJsb2dvdXQiLCJyZW1vdmVJdGVtIiwiTE9HT1VUIiwidHJhZXJJbmZvIiwiZGF0YVVzdWFyaW8iLCJUUkFFUl9JTkZPIiwicGFyc2UiLCJlcnJvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVPLElBQU1BLEtBQUssR0FBRyxTQUFSQSxLQUFRLENBQUNDLElBQUQ7QUFBQTtBQUFBLGdNQUFRLGlCQUFNQyxRQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUN6QkEsc0JBQVEsQ0FBQztBQUNMQyxvQkFBSSxFQUFDQywyREFBT0E7QUFEUCxlQUFELENBQVI7QUFEeUI7O0FBQUEsb0JBS2xCSCxJQUFJLENBQUNJLEtBQUwsQ0FBV0MsSUFBWCxPQUFzQixFQUF0QixJQUE0QkwsSUFBSSxDQUFDTSxRQUFMLENBQWNELElBQWQsT0FBeUIsRUFMbkM7QUFBQTtBQUFBO0FBQUE7O0FBQUEsK0NBTVZKLFFBQVEsQ0FBQztBQUNaQyxvQkFBSSxFQUFDSyx5REFETztBQUVaQyx1QkFBTyxFQUFDO0FBRkksZUFBRCxDQU5FOztBQUFBO0FBV2pCQyxxQkFYaUIsR0FXUCxJ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QVI7QUFJSDs7QUFac0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLENBQWhCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuMDI4NThlYWZlYjZhZTBiZGVmYzQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QVBJfSBmcm9tICcuLi8uLi9jb25maWcvaW5kZXgnO1xyXG5pbXBvcnQge1RSQUVSX0lORk8sTE9HSU4sTE9HT1VULExPQURJTkcsRVJST1J9IGZyb20gJy4uL3R5cGVzL3VzdWFyaW9UeXBlcyc7XHJcblxyXG5leHBvcnQgY29uc3QgbG9naW4gPSAoZGF0YSk9PmFzeW5jKGRpc3BhdGNoKT0+e1xyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICAgIHR5cGU6TE9BRElOR1xyXG4gICAgfSk7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGlmKGRhdGEuZW1haWwudHJpbSgpID09PSAnJyB8fCBkYXRhLnBhc3N3b3JkLnRyaW0oKSA9PT0gJycpe1xyXG4gICAgICAgICAgICByZXR1cm4gZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgdHlwZTpFUlJPUixcclxuICAgICAgICAgICAgICAgIHBheWxvYWQ6J0VzIG5lY2VzYXJpbyBjb21wbGV0YXIgdG9kb3MgbG9zIGNhbXBvcydcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xyXG4gICAgICAgIGhlYWRlcnMuYXBwZW5kKFwiQ29udGVudC1UeXBlXCIsIFwiYXBwbGljYXRpb24vanNvblwiKTtcclxuICAgICAgICByZXR1cm4gZmV0Y2goYCR7QVBJfS9sb2dpbmAse1xyXG4gICAgICAgICAgICBtZXRob2Q6J1BPU1QnLFxyXG4gICAgICAgICAgICBib2R5OkpTT04uc3RyaW5naWZ5KGRhdGEpLFxyXG4gICAgICAgICAgICBoZWFkZXJzXHJcbiAgICAgICAgfSkudGhlbihyZXM9PnJlcy5qc29uKCkpLnRoZW4ocmVzcG9uc2U9PntcclxuICAgICAgICAgICAgaWYocmVzcG9uc2Uub2spe1xyXG4gICAgICAgICAgICAgICAgbGV0IG9ialVzdWFyaW8gPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbm9tYnJlOnJlc3BvbnNlLnVzdWFyaW8ubm9tYnJlLFxyXG4gICAgICAgICAgICAgICAgICAgIGVtYWlsOnJlc3BvbnNlLnVzdWFyaW8uZW1haWwsXHJcbiAgICAgICAgICAgICAgICAgICAgZm90bzpyZXNwb25zZS51c3VhcmlvLmZvdG9cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdvbGl2ZXJwZXRzaG9wX3VzdWFyaW8nLEpTT04uc3RyaW5naWZ5KG9ialVzdWFyaW8pKTtcclxuICAgICAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOkxPR0lOLFxyXG4gICAgICAgICAgICAgICAgICAgIHBheWxvYWQ6bG9jYWxTdG9yYWdlLmdldEl0ZW0oJ29saXZlcnBldHNob3BfdXN1YXJpbycpXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIHJldHVybiBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTpFUlJPUixcclxuICAgICAgICAgICAgICAgICAgICBwYXlsb2FkOnJlc3BvbnNlLmluZm9cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTpFUlJPUixcclxuICAgICAgICAgICAgcGF5bG9hZDplcnJvclxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBsb2dvdXQgPSAoKT0+YXN5bmMoZGlzcGF0Y2gpPT57XHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgdHlwZTpMT0dJTlxyXG4gICAgfSk7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdvbGl2ZXJwZXRzaG9wX3VzdWFyaW8nKTtcclxuICAgICAgICByZXR1cm4gZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOkxPR09VVFxyXG4gICAgICAgIH0pXHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTpFUlJPUixcclxuICAgICAgICAgICAgcGF5bG9hZDplcnJvclxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCB0cmFlckluZm89KCk9PmFzeW5jKGRpc3BhdGNoKT0+e1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBsZXQgZGF0YVVzdWFyaW8gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnb2xpdmVycGV0c2hvcF91c3VhcmlvJyk7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOlRSQUVSX0lORk8sXHJcbiAgICAgICAgICAgIHBheWxvYWQ6SlNPTi5wYXJzZShkYXRhVXN1YXJpbylcclxuICAgICAgICB9KVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6RVJST1IsXHJcbiAgICAgICAgICAgIHBheWxvYWQ6ZXJyb3JcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==