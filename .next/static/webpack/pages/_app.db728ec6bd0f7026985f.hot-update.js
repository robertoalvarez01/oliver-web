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
      var usuario, dataUsuario;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              usuario = getState().usuarioReducer.usuario;

              if (!usuario) {
                _context3.next = 4;
                break;
              }

              return _context3.abrupt("return", getState().usuarioReducer);

            case 4:
              dataUsuario = localStorage.getItem('oliverpetshop_usuario');
              dispatch({
                type: _types_usuarioTypes__WEBPACK_IMPORTED_MODULE_3__["TRAER_INFO"],
                payload: JSON.parse(dataUsuario)
              });
              _context3.next = 11;
              break;

            case 8:
              _context3.prev = 8;
              _context3.t0 = _context3["catch"](0);
              dispatch({
                type: _types_usuarioTypes__WEBPACK_IMPORTED_MODULE_3__["ERROR"],
                payload: _context3.t0
              });

            case 11:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[0, 8]]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvYWN0aW9ucy91c3VhcmlvQWN0aW9ucy5qcyJdLCJuYW1lcyI6WyJsb2dpbiIsImRhdGEiLCJkaXNwYXRjaCIsInR5cGUiLCJMT0FESU5HIiwiZW1haWwiLCJ0cmltIiwicGFzc3dvcmQiLCJFUlJPUiIsInBheWxvYWQiLCJoZWFkZXJzIiwiSGVhZGVycyIsImFwcGVuZCIsImZldGNoIiwiQVBJIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0aGVuIiwicmVzIiwianNvbiIsInJlc3BvbnNlIiwib2siLCJvYmpVc3VhcmlvIiwibm9tYnJlIiwidXN1YXJpbyIsImZvdG8iLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiTE9HSU4iLCJnZXRJdGVtIiwiaW5mbyIsImNvbnNvbGUiLCJsb2ciLCJsb2dvdXQiLCJyZW1vdmVJdGVtIiwiTE9HT1VUIiwidHJhZXJJbmZvIiwiZ2V0U3RhdGUiLCJ1c3VhcmlvUmVkdWNlciIsImRhdGFVc3VhcmlvIiwiVFJBRVJfSU5GTyIsInBhcnNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRU8sSUFBTUEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsQ0FBQ0MsSUFBRDtBQUFBO0FBQUEsZ01BQVEsaUJBQU1DLFFBQU47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ3pCQSxzQkFBUSxDQUFDO0FBQ0xDLG9CQUFJLEVBQUNDLDJEQUFPQTtBQURQLGVBQUQsQ0FBUjtBQUR5Qjs7QUFBQSxvQkFLbEJILElBQUksQ0FBQ0ksS0FBTCxDQUFXQyxJQUFYLE9BQXNCLEVBQXRCLElBQTRCTCxJQUFJLENBQUNNLFFBQUwsQ0FBY0QsSUFBZCxPQUF5QixFQUxuQztBQUFBO0FBQUE7QUFBQTs7QUFBQSwrQ0FNVkosUUFBUSxDQUFDO0FBQ1pDLG9CQUFJLEVBQUNLLHlEQURPO0FBRVpDLHVCQUFPLEVBQUM7QUFGSSxlQUFELENBTkU7O0FBQUE7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LFdBQVg7QUFGSCxlQUFELENBQVI7QUFQbUI7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFZbkJ2QyxzQkFBUSxDQUFDO0FBQ0xDLG9CQUFJLEVBQUNLLHlEQURBO0FBRUxDLHVCQUFPO0FBRkYsZUFBRCxDQUFSOztBQVptQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFKOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsQ0FBaEIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5kYjcyOGVjNmJkMGY3MDI2OTg1Zi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtBUEl9IGZyb20gJy4uLy4uL2NvbmZpZy9pbmRleCc7XHJcbmltcG9ydCB7VFJBRVJfSU5GTyxMT0dJTixMT0dPVVQsTE9BRElORyxFUlJPUn0gZnJvbSAnLi4vdHlwZXMvdXN1YXJpb1R5cGVzJztcclxuXHJcbmV4cG9ydCBjb25zdCBsb2dpbiA9IChkYXRhKT0+YXN5bmMoZGlzcGF0Y2gpPT57XHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgdHlwZTpMT0FESU5HXHJcbiAgICB9KTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgaWYoZGF0YS5lbWFpbC50cmltKCkgPT09ICcnIHx8IGRhdGEucGFzc3dvcmQudHJpbSgpID09PSAnJyl7XHJcbiAgICAgICAgICAgIHJldHVybiBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOkVSUk9SLFxyXG4gICAgICAgICAgICAgICAgcGF5bG9hZDonRXMgbmVjZXNhcmlvIGNvbXBsZXRhciB0b2RvcyBsb3MgY2FtcG9zJ1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XHJcbiAgICAgICAgaGVhZGVycy5hcHBlbmQoXCJDb250ZW50LVR5cGVcIiwgXCJhcHBsaWNhdGlvbi9qc29uXCIpO1xyXG4gICAgICAgIHJldHVybiBmZXRjaChgJHtBUEl9L2xvZ2luYCx7XHJcbiAgICAgICAgICAgIG1ldGhvZDonUE9TVCcsXHJcbiAgICAgICAgICAgIGJvZHk6SlNPTi5zdHJpbmdpZnkoZGF0YSksXHJcbiAgICAgICAgICAgIGhlYWRlcnNcclxuICAgICAgICB9KS50aGVuKHJlcz0+cmVzLmpzb24oKSkudGhlbihyZXNwb25zZT0+e1xyXG4gICAgICAgICAgICBpZihyZXNwb25zZS5vayl7XHJcbiAgICAgICAgICAgICAgICBsZXQgb2JqVXN1YXJpbyA9IHtcclxuICAgICAgICAgICAgICAgICAgICBub21icmU6cmVzcG9uc2UudXN1YXJpby5ub21icmUsXHJcbiAgICAgICAgICAgICAgICAgICAgZW1haWw6cmVzcG9uc2UudXN1YXJpby5lbWFpbCxcclxuICAgICAgICAgICAgICAgICAgICBmb3RvOnJlc3BvbnNlLnVzdWFyaW8uZm90b1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ29saXZlcnBldHNob3BfdXN1YXJpbycsSlNPTi5zdHJpbmdpZnkob2JqVXN1YXJpbykpO1xyXG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6TE9HSU4sXHJcbiAgICAgICAgICAgICAgICAgICAgcGF5bG9hZDpsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnb2xpdmVycGV0c2hvcF91c3VhcmlvJylcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOkVSUk9SLFxyXG4gICAgICAgICAgICAgICAgICAgIHBheWxvYWQ6cmVzcG9uc2UuaW5mb1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICByZXR1cm4gZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOkVSUk9SLFxyXG4gICAgICAgICAgICBwYXlsb2FkOmVycm9yXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ291dCA9ICgpPT5hc3luYyhkaXNwYXRjaCk9PntcclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgICB0eXBlOkxPR0lOXHJcbiAgICB9KTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ29saXZlcnBldHNob3BfdXN1YXJpbycpO1xyXG4gICAgICAgIHJldHVybiBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6TE9HT1VUXHJcbiAgICAgICAgfSlcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOkVSUk9SLFxyXG4gICAgICAgICAgICBwYXlsb2FkOmVycm9yXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHRyYWVySW5mbz0oKT0+YXN5bmMoZGlzcGF0Y2gpPT57XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHt1c3VhcmlvfSA9IGdldFN0YXRlKCkudXN1YXJpb1JlZHVjZXI7XHJcbiAgICAgICAgaWYodXN1YXJpbyl7XHJcbiAgICAgICAgICAgIHJldHVybiBnZXRTdGF0ZSgpLnVzdWFyaW9SZWR1Y2VyO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgZGF0YVVzdWFyaW8gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnb2xpdmVycGV0c2hvcF91c3VhcmlvJyk7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOlRSQUVSX0lORk8sXHJcbiAgICAgICAgICAgIHBheWxvYWQ6SlNPTi5wYXJzZShkYXRhVXN1YXJpbylcclxuICAgICAgICB9KVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6RVJST1IsXHJcbiAgICAgICAgICAgIHBheWxvYWQ6ZXJyb3JcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==