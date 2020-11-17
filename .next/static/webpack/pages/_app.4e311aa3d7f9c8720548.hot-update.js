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
                  localStorage.setItem('usuario', JSON.stringify(objUsuario));
                  dispatch({
                    type: _types_usuarioTypes__WEBPACK_IMPORTED_MODULE_3__["LOGIN"],
                    payload: localStorage.getItem('usuario')
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvYWN0aW9ucy91c3VhcmlvQWN0aW9ucy5qcyJdLCJuYW1lcyI6WyJsb2dpbiIsImRhdGEiLCJkaXNwYXRjaCIsInR5cGUiLCJMT0FESU5HIiwiZW1haWwiLCJ0cmltIiwicGFzc3dvcmQiLCJFUlJPUiIsInBheWxvYWQiLCJoZWFkZXJzIiwiSGVhZGVycyIsImFwcGVuZCIsImZldGNoIiwiQVBJIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0aGVuIiwicmVzIiwianNvbiIsInJlc3BvbnNlIiwib2siLCJvYmpVc3VhcmlvIiwibm9tYnJlIiwidXN1YXJpbyIsImZvdG8iLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiTE9HSU4iLCJnZXRJdGVtIiwiaW5mbyIsImNvbnNvbGUiLCJsb2ciLCJsb2dvdXQiLCJyZW1vdmVJdGVtIiwiTE9HT1VUIiwidHJhZXJJbmZvIiwiZ2V0U3RhdGUiLCJ1c3VhcmlvUmVkdWNlciIsImRhdGFVc3VhcmlvIiwiVFJBRVJfSU5GTyIsInBhcnNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRU8sSUFBTUEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsQ0FBQ0MsSUFBRDtBQUFBO0FBQUEsZ01BQVEsaUJBQU1DLFFBQU47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ3pCQSxzQkFBUSxDQUFDO0FBQ0xDLG9CQUFJLEVBQUNDLDJEQUFPQTtBQURQLGVBQUQsQ0FBUjtBQUR5Qjs7QUFBQSxvQkFLbEJILElBQUksQ0FBQ0ksS0FBTCxDQUFXQyxJQUFYLE9BQXNCLEVBQXRCLElBQTRCTCxJQUFJLENBQUNNLFFBQUwsQ0FBY0QsSUFBZCxPQUF5QixFQUxuQztBQUFBO0FBQUE7QUFBQTs7QUFBQSwrQ0FNVkosUUFBUSxDQUFDO0FBQ1pDLG9CQUFJLEVBQUNLLHlEQURPO0FBRVpDLHVCQUFPLEVBQUM7QUFGSSxlQUFELENBTkU7O0FBQUE7QUFXakJDLHFCQVhpQixHQVdQLElBQUlDLE9BQUosRUFYTztBQVlyQkQscUJBQU8sQ0FBQ0UsTUFBUixDQUFlLGNBQWYsRUFBK0Isa0JBQS9CO0FBWnFCLCtDQWFkQyxLQUFLLFdBQUlDLGlEQUFKLGFBQWdCO0FBQ3hCQyxzQkFBTSxFQUFDLE1BRGlCO0FBRXhCQyxvQkFBSSxFQUFDQyxJQUFJLENBQUNDLFNBQUwsQ0FBZWpCLElBQWYsQ0FGbUI7QUFHeEJTLHVCQUFPLEVBQVBBO0FBSHdCLGVBQWhCLENBQUwsQ0FJSlMsSUFKSSxDQUlDLFVBQUFDLEdBQUc7QUFBQSx1QkFBRUEsR0FBRyxDQUFDQyxJQUFKLEVBQUY7QUFBQSxlQUpKLEVBSWtCRixJQUpsQixDQUl1QixVQUFBRyxRQUFRLEVBQUU7QUFDcEMsb0JBQUdBLFFBQVEsQ0FBQ0MsRUFBWixFQUFlO0FBQ1gsc0JBQUlDLFVBQVUsR0FBRztBQUNiQywwQkFBTSxFQUFDSCxRQUFRLENBQUNJLE9BQVQsQ0FBaUJELE1BRFg7QUFFYnBCLHlCQUFLLEVBQUNpQixRQUFRLENBQUNJLE9BQVQsQ0FBaUJyQixLQUZWO0FBR2JzQix3QkFBSSxFQUFDTCxRQUFRLENBQUNJLE9BQVQsQ0FBaUJDO0FBSFQsbUJBQWpCO0FBS0FDLDhCQUFZLENBQUNDLE9BQWIsQ0FBcUIsU0FBckIsRUFBK0JaLElBQUksQ0FBQ0MsU0FBTCxDQUFlTSxVQUFmLENBQS9CO0FBQ0F0QiwwQkFBUSxDQUFDO0FBQ0xDLHdCQUFJLEVBQUMyQix5REFEQTtBQUVMckIsMkJBQU8sRUFBQ21CLFlBQVksQ0FBQ0csT0FBYixDQUFxQixTQUFyQjtBQUZILG1CQUFELENBQVI7QUFJSCxpQkFYRCxNQVdLO0FBQ0QseUJBQU83QixRQUFRLENBQUM7QUFDWkMsd0JBQUksRUFBQ0sseURBRE87QUFFWkMsMkJBQU8sRUFBQ2EsUUFBUSxDQUFDVTtBQUZMLG1CQUFELENBQWY7QUFJSDtBQUNKLGVBdEJNLENBYmM7O0FBQUE7QUFBQTtBQUFBO0FBcUNyQkMscUJBQU8sQ0FBQ0MsR0FBUjtBQXJDcUIsK0NBc0NkaEMsUUFBUSxDQUFDO0FBQ1pDLG9CQUFJLEVBQUNLLHlEQURPO0FBRVpDLHVCQUFPO0FBRkssZUFBRCxDQXRDTTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFSOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsQ0FBZDtBQTZDQSxJQUFNMEIsTUFBTSxHQUFHLFNBQVRBLE1BQVM7QUFBQTtBQUFBLGlNQUFJLGtCQUFNakMsUUFBTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ3RCQSxzQkFBUSxDQUFDO0FBQ0xDLG9CQUFJLEVBQUMyQix5REFBS0E7QUFETCxlQUFELENBQVI7QUFEc0I7QUFLbEJGLDBCQUFZLENBQUNRLFVBQWIsQ0FBd0IsU0FBeEI7QUFMa0IsZ0RBTVhsQyxRQUFRLENBQUM7QUFDWkMsb0JBQUksRUFBQ2tDLDBEQUFNQTtBQURDLGVBQUQsQ0FORzs7QUFBQTtBQUFBO0FBQUE7QUFVbEJuQyxzQkFBUSxDQUFDO0FBQ0xDLG9CQUFJLEVBQUNLLHlEQURBO0FBRUxDLHVCQUFPO0FBRkYsZUFBRCxDQUFSOztBQVZrQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFKOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsQ0FBZjtBQWlCQSxJQUFNNkIsU0FBUyxHQUFDLFNBQVZBLFNBQVU7QUFBQTtBQUFBLGlNQUFJLGtCQUFNcEMsUUFBTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVad0IscUJBRlksR0FFRGEsUUFBUSxHQUFHQyxjQUZWLENBRVpkLE9BRlk7O0FBQUEsbUJBR2hCQSxPQUhnQjtBQUFBO0FBQUE7QUFBQTs7QUFBQSxnREFJUmEsUUFBUSxHQUFHQyxjQUpIOztBQUFBO0FBTWZDLHlCQU5lLEdBTURiLFlBQVksQ0FBQ0csT0FBYixDQUFxQixTQUFyQixDQU5DO0FBT25CN0Isc0JBQVEsQ0FBQztBQUNMQyxvQkFBSSxFQUFDdUMsOERBREE7QUFFTGpDLHVCQUFPLEVBQUNRLElBQUksQ0FBQzBCLEtBQUwsQ0FBV0YsV0FBWDtBQUZILGVBQUQsQ0FBUjtBQVBtQjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQVluQnZDLHNCQUFRLENBQUM7QUFDTEMsb0JBQUksRUFBQ0sseURBREE7QUFFTEMsdUJBQU87QUFGRixlQUFELENBQVI7O0FBWm1CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUo7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxDQUFoQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjRlMzExYWEzZDdmOWM4NzIwNTQ4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0FQSX0gZnJvbSAnLi4vLi4vY29uZmlnL2luZGV4JztcclxuaW1wb3J0IHtUUkFFUl9JTkZPLExPR0lOLExPR09VVCxMT0FESU5HLEVSUk9SfSBmcm9tICcuLi90eXBlcy91c3VhcmlvVHlwZXMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ2luID0gKGRhdGEpPT5hc3luYyhkaXNwYXRjaCk9PntcclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgICB0eXBlOkxPQURJTkdcclxuICAgIH0pO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBpZihkYXRhLmVtYWlsLnRyaW0oKSA9PT0gJycgfHwgZGF0YS5wYXNzd29yZC50cmltKCkgPT09ICcnKXtcclxuICAgICAgICAgICAgcmV0dXJuIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6RVJST1IsXHJcbiAgICAgICAgICAgICAgICBwYXlsb2FkOidFcyBuZWNlc2FyaW8gY29tcGxldGFyIHRvZG9zIGxvcyBjYW1wb3MnXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcclxuICAgICAgICBoZWFkZXJzLmFwcGVuZChcIkNvbnRlbnQtVHlwZVwiLCBcImFwcGxpY2F0aW9uL2pzb25cIik7XHJcbiAgICAgICAgcmV0dXJuIGZldGNoKGAke0FQSX0vbG9naW5gLHtcclxuICAgICAgICAgICAgbWV0aG9kOidQT1NUJyxcclxuICAgICAgICAgICAgYm9keTpKU09OLnN0cmluZ2lmeShkYXRhKSxcclxuICAgICAgICAgICAgaGVhZGVyc1xyXG4gICAgICAgIH0pLnRoZW4ocmVzPT5yZXMuanNvbigpKS50aGVuKHJlc3BvbnNlPT57XHJcbiAgICAgICAgICAgIGlmKHJlc3BvbnNlLm9rKXtcclxuICAgICAgICAgICAgICAgIGxldCBvYmpVc3VhcmlvID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIG5vbWJyZTpyZXNwb25zZS51c3VhcmlvLm5vbWJyZSxcclxuICAgICAgICAgICAgICAgICAgICBlbWFpbDpyZXNwb25zZS51c3VhcmlvLmVtYWlsLFxyXG4gICAgICAgICAgICAgICAgICAgIGZvdG86cmVzcG9uc2UudXN1YXJpby5mb3RvXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndXN1YXJpbycsSlNPTi5zdHJpbmdpZnkob2JqVXN1YXJpbykpO1xyXG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6TE9HSU4sXHJcbiAgICAgICAgICAgICAgICAgICAgcGF5bG9hZDpsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXN1YXJpbycpXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIHJldHVybiBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTpFUlJPUixcclxuICAgICAgICAgICAgICAgICAgICBwYXlsb2FkOnJlc3BvbnNlLmluZm9cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTpFUlJPUixcclxuICAgICAgICAgICAgcGF5bG9hZDplcnJvclxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBsb2dvdXQgPSAoKT0+YXN5bmMoZGlzcGF0Y2gpPT57XHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgdHlwZTpMT0dJTlxyXG4gICAgfSk7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCd1c3VhcmlvJyk7XHJcbiAgICAgICAgcmV0dXJuIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTpMT0dPVVRcclxuICAgICAgICB9KVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6RVJST1IsXHJcbiAgICAgICAgICAgIHBheWxvYWQ6ZXJyb3JcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgdHJhZXJJbmZvPSgpPT5hc3luYyhkaXNwYXRjaCk9PntcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3Qge3VzdWFyaW99ID0gZ2V0U3RhdGUoKS51c3VhcmlvUmVkdWNlcjtcclxuICAgICAgICBpZih1c3VhcmlvKXtcclxuICAgICAgICAgICAgcmV0dXJuIGdldFN0YXRlKCkudXN1YXJpb1JlZHVjZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBkYXRhVXN1YXJpbyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c3VhcmlvJyk7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOlRSQUVSX0lORk8sXHJcbiAgICAgICAgICAgIHBheWxvYWQ6SlNPTi5wYXJzZShkYXRhVXN1YXJpbylcclxuICAgICAgICB9KVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6RVJST1IsXHJcbiAgICAgICAgICAgIHBheWxvYWQ6ZXJyb3JcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==