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
                  localStorage.setItem('usuario', JSON.stringify(response.usuario));
                  dispatch({
                    type: _types_usuarioTypes__WEBPACK_IMPORTED_MODULE_3__["LOGIN"],
                    payload: response.usuario
                  });
                } else {
                  return dispatch({
                    type: _types_usuarioTypes__WEBPACK_IMPORTED_MODULE_3__["ERROR"],
                    payload: info
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
              localStorage.removeItem('usuario');
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
              dataUsuario = localStorage.getItem('usuario');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvYWN0aW9ucy91c3VhcmlvQWN0aW9ucy5qcyJdLCJuYW1lcyI6WyJsb2dpbiIsImRhdGEiLCJkaXNwYXRjaCIsInR5cGUiLCJMT0FESU5HIiwiZW1haWwiLCJ0cmltIiwicGFzc3dvcmQiLCJFUlJPUiIsInBheWxvYWQiLCJoZWFkZXJzIiwiSGVhZGVycyIsImFwcGVuZCIsImZldGNoIiwiQVBJIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0aGVuIiwicmVzIiwianNvbiIsInJlc3BvbnNlIiwib2siLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwidXN1YXJpbyIsIkxPR0lOIiwiaW5mbyIsImNvbnNvbGUiLCJsb2ciLCJsb2dvdXQiLCJyZW1vdmVJdGVtIiwiTE9HT1VUIiwidHJhZXJJbmZvIiwiZ2V0U3RhdGUiLCJ1c3VhcmlvUmVkdWNlciIsImRhdGFVc3VhcmlvIiwiZ2V0SXRlbSIsIlRSQUVSX0lORk8iLCJwYXJzZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVPLElBQU1BLEtBQUssR0FBRyxTQUFSQSxLQUFRLENBQUNDLElBQUQ7QUFBQTtBQUFBLGdNQUFRLGlCQUFNQyxRQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUN6QkEsc0JBQVEsQ0FBQztBQUNMQyxvQkFBSSxFQUFDQywyREFBT0E7QUFEUCxlQUFELENBQVI7QUFEeUI7O0FBQUEsb0JBS2xCSCxJQUFJLENBQUNJLEtBQUwsQ0FBV0MsSUFBWCxPQUFzQixFQUF0QixJQUE0QkwsSUFBSSxDQUFDTSxRQUFMLENBQWNELElBQWQsT0FBeUIsRUFMbkM7QUFBQTtBQUFBO0FBQUE7O0FBQUEsK0NBTVZKLFFBQVEsQ0FBQztBQUNaQyxvQkFBSSxFQUFDSyx5REFETztBQUVaQyx1QkFBTyxFQUFDO0FBRkksZUFBRCxDQU5FOztBQUFBO0FBV2pCQyxxQkFYaUIsR0FXUCxJQUFJQyxPQUFK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cy9fYXBwLjgzNjY3OGM3N2MwMmRmNzhjMDExLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0FQSX0gZnJvbSAnLi4vLi4vY29uZmlnL2luZGV4JztcclxuaW1wb3J0IHtUUkFFUl9JTkZPLExPR0lOLExPR09VVCxMT0FESU5HLEVSUk9SfSBmcm9tICcuLi90eXBlcy91c3VhcmlvVHlwZXMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ2luID0gKGRhdGEpPT5hc3luYyhkaXNwYXRjaCk9PntcclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgICB0eXBlOkxPQURJTkdcclxuICAgIH0pO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBpZihkYXRhLmVtYWlsLnRyaW0oKSA9PT0gJycgfHwgZGF0YS5wYXNzd29yZC50cmltKCkgPT09ICcnKXtcclxuICAgICAgICAgICAgcmV0dXJuIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6RVJST1IsXHJcbiAgICAgICAgICAgICAgICBwYXlsb2FkOidFcyBuZWNlc2FyaW8gY29tcGxldGFyIHRvZG9zIGxvcyBjYW1wb3MnXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcclxuICAgICAgICBoZWFkZXJzLmFwcGVuZChcIkNvbnRlbnQtVHlwZVwiLCBcImFwcGxpY2F0aW9uL2pzb25cIik7XHJcbiAgICAgICAgcmV0dXJuIGZldGNoKGAke0FQSX0vbG9naW5gLHtcclxuICAgICAgICAgICAgbWV0aG9kOidQT1NUJyxcclxuICAgICAgICAgICAgYm9keTpKU09OLnN0cmluZ2lmeShkYXRhKSxcclxuICAgICAgICAgICAgaGVhZGVyc1xyXG4gICAgICAgIH0pLnRoZW4ocmVzPT5yZXMuanNvbigpKS50aGVuKHJlc3BvbnNlPT57XHJcbiAgICAgICAgICAgIGlmKHJlc3BvbnNlLm9rKXtcclxuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd1c3VhcmlvJyxKU09OLnN0cmluZ2lmeShyZXNwb25zZS51c3VhcmlvKSk7XHJcbiAgICAgICAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTpMT0dJTixcclxuICAgICAgICAgICAgICAgICAgICBwYXlsb2FkOnJlc3BvbnNlLnVzdWFyaW9cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOkVSUk9SLFxyXG4gICAgICAgICAgICAgICAgICAgIHBheWxvYWQ6aW5mb1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICByZXR1cm4gZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOkVSUk9SLFxyXG4gICAgICAgICAgICBwYXlsb2FkOmVycm9yXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ291dCA9ICgpPT5hc3luYyhkaXNwYXRjaCk9PntcclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgICB0eXBlOkxPR0lOXHJcbiAgICB9KTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3VzdWFyaW8nKTtcclxuICAgICAgICByZXR1cm4gZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOkxPR09VVFxyXG4gICAgICAgIH0pXHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTpFUlJPUixcclxuICAgICAgICAgICAgcGF5bG9hZDplcnJvclxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCB0cmFlckluZm89KCk9PmFzeW5jKGRpc3BhdGNoKT0+e1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB7dXN1YXJpb30gPSBnZXRTdGF0ZSgpLnVzdWFyaW9SZWR1Y2VyO1xyXG4gICAgICAgIGlmKHVzdWFyaW8pe1xyXG4gICAgICAgICAgICByZXR1cm4gZ2V0U3RhdGUoKS51c3VhcmlvUmVkdWNlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGRhdGFVc3VhcmlvID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzdWFyaW8nKTtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6VFJBRVJfSU5GTyxcclxuICAgICAgICAgICAgcGF5bG9hZDpKU09OLnBhcnNlKGRhdGFVc3VhcmlvKVxyXG4gICAgICAgIH0pXHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTpFUlJPUixcclxuICAgICAgICAgICAgcGF5bG9hZDplcnJvclxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9