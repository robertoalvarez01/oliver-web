webpackHotUpdate_N_E("pages/_app",{

/***/ "./store/types/usuarioTypes.js":
/*!*************************************!*\
  !*** ./store/types/usuarioTypes.js ***!
  \*************************************/
/*! exports provided: VERIFICAR_SESION, LOGIN, LOGOUT, LOADING, ERROR, UPDATE_USER, UPDATE_PASSWORD */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"VERIFICAR_SESION\", function() { return VERIFICAR_SESION; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOGIN\", function() { return LOGIN; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOGOUT\", function() { return LOGOUT; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOADING\", function() { return LOADING; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ERROR\", function() { return ERROR; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UPDATE_USER\", function() { return UPDATE_USER; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UPDATE_PASSWORD\", function() { return UPDATE_PASSWORD; });\nvar VERIFICAR_SESION = 'usuario_verificarsesion';\nvar LOGIN = 'usuario_login';\nvar LOGOUT = 'usuario_logout';\nvar LOADING = 'usuario_loading';\nvar ERROR = 'usuario_error';\nvar UPDATE_USER = 'usuario_cambiarfoto';\nvar UPDATE_PASSWORD = 'usuario_cambiarpassword';\nvar UPDATE_VENTAS = 'usuario_update_ventas';\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvdHlwZXMvdXN1YXJpb1R5cGVzLmpzPzhiOWMiXSwibmFtZXMiOlsiVkVSSUZJQ0FSX1NFU0lPTiIsIkxPR0lOIiwiTE9HT1VUIiwiTE9BRElORyIsIkVSUk9SIiwiVVBEQVRFX1VTRVIiLCJVUERBVEVfUEFTU1dPUkQiLCJVUERBVEVfVkVOVEFTIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFBTUEsZ0JBQWdCLEdBQUcseUJBQXpCO0FBQ0EsSUFBTUMsS0FBSyxHQUFHLGVBQWQ7QUFDQSxJQUFNQyxNQUFNLEdBQUcsZ0JBQWY7QUFDQSxJQUFNQyxPQUFPLEdBQUcsaUJBQWhCO0FBQ0EsSUFBTUMsS0FBSyxHQUFHLGVBQWQ7QUFDQSxJQUFNQyxXQUFXLEdBQUcscUJBQXBCO0FBQ0EsSUFBTUMsZUFBZSxHQUFHLHlCQUF4QjtBQUNBLElBQU1DLGFBQWEsR0FBRyx1QkFBdEI7QUFFQSIsImZpbGUiOiIuL3N0b3JlL3R5cGVzL3VzdWFyaW9UeXBlcy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IFZFUklGSUNBUl9TRVNJT04gPSAndXN1YXJpb192ZXJpZmljYXJzZXNpb24nO1xuY29uc3QgTE9HSU4gPSAndXN1YXJpb19sb2dpbic7XG5jb25zdCBMT0dPVVQgPSAndXN1YXJpb19sb2dvdXQnO1xuY29uc3QgTE9BRElORyA9ICd1c3VhcmlvX2xvYWRpbmcnO1xuY29uc3QgRVJST1IgPSAndXN1YXJpb19lcnJvcic7XG5jb25zdCBVUERBVEVfVVNFUiA9ICd1c3VhcmlvX2NhbWJpYXJmb3RvJztcbmNvbnN0IFVQREFURV9QQVNTV09SRCA9ICd1c3VhcmlvX2NhbWJpYXJwYXNzd29yZCc7XG5jb25zdCBVUERBVEVfVkVOVEFTID0gJ3VzdWFyaW9fdXBkYXRlX3ZlbnRhcyc7XG5cbmV4cG9ydCB7VkVSSUZJQ0FSX1NFU0lPTixMT0dJTixMT0dPVVQsTE9BRElORyxFUlJPUixVUERBVEVfVVNFUixVUERBVEVfUEFTU1dPUkR9Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./store/types/usuarioTypes.js\n");

/***/ })

})