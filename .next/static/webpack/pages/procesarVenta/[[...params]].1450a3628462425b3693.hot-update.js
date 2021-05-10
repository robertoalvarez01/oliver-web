webpackHotUpdate_N_E("pages/procesarVenta/[[...params]]",{

/***/ "./store/actions/zonasActions.js":
/*!***************************************!*\
  !*** ./store/actions/zonasActions.js ***!
  \***************************************/
/*! exports provided: traerTodas, seleccionar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"traerTodas\", function() { return traerTodas; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"seleccionar\", function() { return seleccionar; });\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _config_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config/index */ \"./config/index.js\");\n/* harmony import */ var _types_zonasTypes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../types/zonasTypes */ \"./store/types/zonasTypes.js\");\n\n\n\n\nvar traerTodas = function traerTodas() {\n  return /*#__PURE__*/function () {\n    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(dispatch) {\n      var dataUser, myHeaders, zonasApi, dataZonas;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              dispatch({\n                type: _types_zonasTypes__WEBPACK_IMPORTED_MODULE_3__[\"LOADING\"]\n              });\n              _context.prev = 1;\n              dataUser = JSON.parse(localStorage.getItem('oliverpetshop_usuario'));\n              myHeaders = new Headers();\n              myHeaders.append(\"token\", dataUser.token);\n              _context.next = 7;\n              return fetch(\"\".concat(_config_index__WEBPACK_IMPORTED_MODULE_2__[\"API\"], \"/zonas\"), {\n                headers: myHeaders\n              });\n\n            case 7:\n              zonasApi = _context.sent;\n              _context.next = 10;\n              return zonasApi.json();\n\n            case 10:\n              dataZonas = _context.sent;\n              dispatch({\n                type: _types_zonasTypes__WEBPACK_IMPORTED_MODULE_3__[\"TRAER_ZONAS\"],\n                payload: dataZonas.data\n              });\n              _context.next = 17;\n              break;\n\n            case 14:\n              _context.prev = 14;\n              _context.t0 = _context[\"catch\"](1);\n              dispatch({\n                type: _types_zonasTypes__WEBPACK_IMPORTED_MODULE_3__[\"ERROR\"],\n                payload: _context.t0\n              });\n\n            case 17:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee, null, [[1, 14]]);\n    }));\n\n    return function (_x) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n};\nvar seleccionar = function seleccionar(id) {\n  return function (dispatch, getState) {\n    if (!id) {\n      console.log('aca');\n      dispatch({\n        type: _types_zonasTypes__WEBPACK_IMPORTED_MODULE_3__[\"LIMPIAR_ACTIVO\"]\n      });\n      return;\n    }\n\n    var zonas = getState().zonasReducer.zonas;\n    var zona = zonas.filter(function (z) {\n      return z.idZona == id;\n    });\n\n    if (!zona.length) {\n      dispatch({\n        type: _types_zonasTypes__WEBPACK_IMPORTED_MODULE_3__[\"ERROR\"],\n        payload: 'No se encontro la zona'\n      });\n      return;\n    }\n\n    zona = zona[0];\n    dispatch({\n      type: _types_zonasTypes__WEBPACK_IMPORTED_MODULE_3__[\"SELECCIONAR\"],\n      payload: zona\n    });\n  };\n};\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvYWN0aW9ucy96b25hc0FjdGlvbnMuanM/NTRjOSJdLCJuYW1lcyI6WyJ0cmFlclRvZGFzIiwiZGlzcGF0Y2giLCJ0eXBlIiwiTE9BRElORyIsImRhdGFVc2VyIiwiSlNPTiIsInBhcnNlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIm15SGVhZGVycyIsIkhlYWRlcnMiLCJhcHBlbmQiLCJ0b2tlbiIsImZldGNoIiwiQVBJIiwiaGVhZGVycyIsInpvbmFzQXBpIiwianNvbiIsImRhdGFab25hcyIsIlRSQUVSX1pPTkFTIiwicGF5bG9hZCIsImRhdGEiLCJFUlJPUiIsInNlbGVjY2lvbmFyIiwiaWQiLCJnZXRTdGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJMSU1QSUFSX0FDVElWTyIsInpvbmFzIiwiem9uYXNSZWR1Y2VyIiwiem9uYSIsImZpbHRlciIsInoiLCJpZFpvbmEiLCJsZW5ndGgiLCJTRUxFQ0NJT05BUiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFTyxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYTtBQUFBO0FBQUEsZ01BQUksaUJBQU9DLFFBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQzFCQSxzQkFBUSxDQUFDO0FBQ0xDLG9CQUFJLEVBQUNDLHlEQUFPQTtBQURQLGVBQUQsQ0FBUjtBQUQwQjtBQUtoQkMsc0JBTGdCLEdBS0xDLElBQUksQ0FBQ0MsS0FBTCxDQUFXQyxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsdUJBQXJCLENBQVgsQ0FMSztBQU1sQkMsdUJBTmtCLEdBTU4sSUFBSUMsT0FBSixFQU5NO0FBT3RCRCx1QkFBUyxDQUFDRSxNQUFWLENBQWlCLE9BQWpCLEVBQTBCUCxRQUFRLENBQUNRLEtBQW5DO0FBUHNCO0FBQUEscUJBUUNDLEtBQUssV0FBSUMsaURBQUosYUFBZ0I7QUFBQ0MsdUJBQU8sRUFBQ047QUFBVCxlQUFoQixDQVJOOztBQUFBO0FBUWhCTyxzQkFSZ0I7QUFBQTtBQUFBLHFCQVNFQSxRQUFRLENBQUNDLElBQVQsRUFURjs7QUFBQTtBQVNoQkMsdUJBVGdCO0FBVXRCakIsc0JBQVEsQ0FBQztBQUNMQyxvQkFBSSxFQUFDaUIsNkRBREE7QUFFTEMsdUJBQU8sRUFBQ0YsU0FBUyxDQUFDRztBQUZiLGVBQUQsQ0FBUjtBQVZzQjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQWV0QnBCLHNCQUFRLENBQUM7QUFDTEMsb0JBQUksRUFBQ29CLHVEQURBO0FBRUxGLHVCQUFPO0FBRkYsZUFBRCxDQUFSOztBQWZzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFKOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsQ0FBbkI7QUFzQkEsSUFBTUcsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQUMsRUFBRTtBQUFBLFNBQUcsVUFBQ3ZCLFFBQUQsRUFBVXdCLFFBQVYsRUFBcUI7QUFDakQsUUFBRyxDQUFDRCxFQUFKLEVBQU87QUFDSEUsYUFBTyxDQUFDQyxHQUFSLENBQVksS0FBWjtBQUNBMUIsY0FBUSxDQUFDO0FBQ0xDLFlBQUksRUFBQzBCLGdFQUFjQTtBQURkLE9BQUQsQ0FBUjtBQUdBO0FBQ0g7O0FBUGdELFFBUTFDQyxLQVIwQyxHQVFqQ0osUUFBUSxHQUFHSyxZQVJzQixDQVExQ0QsS0FSMEM7QUFTakQsUUFBSUUsSUFBSSxHQUFHRixLQUFLLENBQUNHLE1BQU4sQ0FBYSxVQUFBQyxDQUFDO0FBQUEsYUFBRUEsQ0FBQyxDQUFDQyxNQUFGLElBQVlWLEVBQWQ7QUFBQSxLQUFkLENBQVg7O0FBQ0EsUUFBRyxDQUFDTyxJQUFJLENBQUNJLE1BQVQsRUFBZ0I7QUFDWmxDLGNBQVEsQ0FBQztBQUNMQyxZQUFJLEVBQUNvQix1REFEQTtBQUVMRixlQUFPLEVBQUM7QUFGSCxPQUFELENBQVI7QUFJQTtBQUNIOztBQUNEVyxRQUFJLEdBQUdBLElBQUksQ0FBQyxDQUFELENBQVg7QUFDQTlCLFlBQVEsQ0FBQztBQUNMQyxVQUFJLEVBQUNrQyw2REFEQTtBQUVMaEIsYUFBTyxFQUFDVztBQUZILEtBQUQsQ0FBUjtBQUlILEdBdEI0QjtBQUFBLENBQXRCIiwiZmlsZSI6Ii4vc3RvcmUvYWN0aW9ucy96b25hc0FjdGlvbnMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0FQSX0gZnJvbSAnLi4vLi4vY29uZmlnL2luZGV4JztcbmltcG9ydCB7VFJBRVJfWk9OQVMsU0VMRUNDSU9OQVIsTE9BRElORyxFUlJPUiwgTElNUElBUl9BQ1RJVk99IGZyb20gJy4uL3R5cGVzL3pvbmFzVHlwZXMnO1xuXG5leHBvcnQgY29uc3QgdHJhZXJUb2RhcyA9ICgpPT5hc3luYyAoZGlzcGF0Y2gpPT57XG4gICAgZGlzcGF0Y2goe1xuICAgICAgICB0eXBlOkxPQURJTkdcbiAgICB9KTtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCBkYXRhVXNlciA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ29saXZlcnBldHNob3BfdXN1YXJpbycpKTtcbiAgICAgICAgbGV0IG15SGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XG4gICAgICAgIG15SGVhZGVycy5hcHBlbmQoXCJ0b2tlblwiLCBkYXRhVXNlci50b2tlbik7XG4gICAgICAgIGNvbnN0IHpvbmFzQXBpID0gYXdhaXQgZmV0Y2goYCR7QVBJfS96b25hc2Ase2hlYWRlcnM6bXlIZWFkZXJzfSk7XG4gICAgICAgIGNvbnN0IGRhdGFab25hcyA9IGF3YWl0IHpvbmFzQXBpLmpzb24oKTtcbiAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgdHlwZTpUUkFFUl9aT05BUyxcbiAgICAgICAgICAgIHBheWxvYWQ6ZGF0YVpvbmFzLmRhdGFcbiAgICAgICAgfSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgdHlwZTpFUlJPUixcbiAgICAgICAgICAgIHBheWxvYWQ6ZXJyb3JcbiAgICAgICAgfSlcbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCBzZWxlY2Npb25hciA9IGlkID0+KGRpc3BhdGNoLGdldFN0YXRlKT0+e1xuICAgIGlmKCFpZCl7XG4gICAgICAgIGNvbnNvbGUubG9nKCdhY2EnKTtcbiAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgdHlwZTpMSU1QSUFSX0FDVElWT1xuICAgICAgICB9KVxuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHt6b25hc30gPSBnZXRTdGF0ZSgpLnpvbmFzUmVkdWNlcjtcbiAgICBsZXQgem9uYSA9IHpvbmFzLmZpbHRlcih6PT56LmlkWm9uYSA9PSBpZCk7XG4gICAgaWYoIXpvbmEubGVuZ3RoKXtcbiAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgdHlwZTpFUlJPUixcbiAgICAgICAgICAgIHBheWxvYWQ6J05vIHNlIGVuY29udHJvIGxhIHpvbmEnXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHpvbmEgPSB6b25hWzBdO1xuICAgIGRpc3BhdGNoKHtcbiAgICAgICAgdHlwZTpTRUxFQ0NJT05BUixcbiAgICAgICAgcGF5bG9hZDp6b25hXG4gICAgfSlcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./store/actions/zonasActions.js\n");

/***/ })

})