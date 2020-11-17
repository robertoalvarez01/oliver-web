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
                  console.log(error);
                  return dispatch({
                    type: _types_usuarioTypes__WEBPACK_IMPORTED_MODULE_3__["ERROR"],
                    payload: error
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvYWN0aW9ucy91c3VhcmlvQWN0aW9ucy5qcyJdLCJuYW1lcyI6WyJsb2dpbiIsImRhdGEiLCJkaXNwYXRjaCIsInR5cGUiLCJMT0FESU5HIiwiZW1haWwiLCJ0cmltIiwicGFzc3dvcmQiLCJFUlJPUiIsInBheWxvYWQiLCJoZWFkZXJzIiwiSGVhZGVycyIsImFwcGVuZCIsImZldGNoIiwiQVBJIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0aGVuIiwicmVzIiwianNvbiIsInJlc3BvbnNlIiwib2siLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwidXN1YXJpbyIsIkxPR0lOIiwiY29uc29sZSIsImxvZyIsImVycm9yIiwibG9nb3V0IiwicmVtb3ZlSXRlbSIsIkxPR09VVCIsInRyYWVySW5mbyIsImdldFN0YXRlIiwidXN1YXJpb1JlZHVjZXIiLCJkYXRhVXN1YXJpbyIsImdldEl0ZW0iLCJUUkFFUl9JTkZPIiwicGFyc2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFTyxJQUFNQSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxDQUFDQyxJQUFEO0FBQUE7QUFBQSxnTUFBUSxpQkFBTUMsUUFBTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDekJBLHNCQUFRLENBQUM7QUFDTEMsb0JBQUksRUFBQ0MsMkRBQU9BO0FBRFAsZUFBRCxDQUFSO0FBRHlCOztBQUFBLG9CQUtsQkgsSUFBSSxDQUFDSSxLQUFMLENBQVdDLElBQVgsT0FBc0IsRUFBdEIsSUFBNEJMLElBQUksQ0FBQ00sUUFBTCxDQUFjRCxJQUFkLE9BQXlCLEVBTG5DO0FBQUE7QUFBQTtBQUFBOztBQUFBLCtDQU1WSixRQUFRLENBQUM7QUFDWkMsb0JBQUksRUFBQ0sseURBRE87QUFFWkMsdUJBQU8sRUFBQztBQUZJLGVBQUQsQ0FORTs7QUFBQTtBQVdqQkMscUJBWGlCLEdBV1AsSUFBSUMsT0FB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LENBQWhCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuNjBlZTU5NDFhOGI5NTBhZWZmNmMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QVBJfSBmcm9tICcuLi8uLi9jb25maWcvaW5kZXgnO1xyXG5pbXBvcnQge1RSQUVSX0lORk8sTE9HSU4sTE9HT1VULExPQURJTkcsRVJST1J9IGZyb20gJy4uL3R5cGVzL3VzdWFyaW9UeXBlcyc7XHJcblxyXG5leHBvcnQgY29uc3QgbG9naW4gPSAoZGF0YSk9PmFzeW5jKGRpc3BhdGNoKT0+e1xyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICAgIHR5cGU6TE9BRElOR1xyXG4gICAgfSk7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGlmKGRhdGEuZW1haWwudHJpbSgpID09PSAnJyB8fCBkYXRhLnBhc3N3b3JkLnRyaW0oKSA9PT0gJycpe1xyXG4gICAgICAgICAgICByZXR1cm4gZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgdHlwZTpFUlJPUixcclxuICAgICAgICAgICAgICAgIHBheWxvYWQ6J0VzIG5lY2VzYXJpbyBjb21wbGV0YXIgdG9kb3MgbG9zIGNhbXBvcydcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xyXG4gICAgICAgIGhlYWRlcnMuYXBwZW5kKFwiQ29udGVudC1UeXBlXCIsIFwiYXBwbGljYXRpb24vanNvblwiKTtcclxuICAgICAgICByZXR1cm4gZmV0Y2goYCR7QVBJfS9sb2dpbmAse1xyXG4gICAgICAgICAgICBtZXRob2Q6J1BPU1QnLFxyXG4gICAgICAgICAgICBib2R5OkpTT04uc3RyaW5naWZ5KGRhdGEpLFxyXG4gICAgICAgICAgICBoZWFkZXJzXHJcbiAgICAgICAgfSkudGhlbihyZXM9PnJlcy5qc29uKCkpLnRoZW4ocmVzcG9uc2U9PntcclxuICAgICAgICAgICAgaWYocmVzcG9uc2Uub2spe1xyXG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3VzdWFyaW8nLEpTT04uc3RyaW5naWZ5KHJlc3BvbnNlLnVzdWFyaW8pKTtcclxuICAgICAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOkxPR0lOLFxyXG4gICAgICAgICAgICAgICAgICAgIHBheWxvYWQ6cmVzcG9uc2UudXN1YXJpb1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6RVJST1IsXHJcbiAgICAgICAgICAgICAgICAgICAgcGF5bG9hZDplcnJvclxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICByZXR1cm4gZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOkVSUk9SLFxyXG4gICAgICAgICAgICBwYXlsb2FkOmVycm9yXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ291dCA9ICgpPT5hc3luYyhkaXNwYXRjaCk9PntcclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgICB0eXBlOkxPR0lOXHJcbiAgICB9KTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3VzdWFyaW8nKTtcclxuICAgICAgICByZXR1cm4gZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOkxPR09VVFxyXG4gICAgICAgIH0pXHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTpFUlJPUixcclxuICAgICAgICAgICAgcGF5bG9hZDplcnJvclxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCB0cmFlckluZm89KCk9PmFzeW5jKGRpc3BhdGNoKT0+e1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB7dXN1YXJpb30gPSBnZXRTdGF0ZSgpLnVzdWFyaW9SZWR1Y2VyO1xyXG4gICAgICAgIGlmKHVzdWFyaW8pe1xyXG4gICAgICAgICAgICByZXR1cm4gZ2V0U3RhdGUoKS51c3VhcmlvUmVkdWNlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGRhdGFVc3VhcmlvID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzdWFyaW8nKTtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6VFJBRVJfSU5GTyxcclxuICAgICAgICAgICAgcGF5bG9hZDpKU09OLnBhcnNlKGRhdGFVc3VhcmlvKVxyXG4gICAgICAgIH0pXHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTpFUlJPUixcclxuICAgICAgICAgICAgcGF5bG9hZDplcnJvclxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9