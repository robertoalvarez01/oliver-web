webpackHotUpdate_N_E("pages/perfil",{

/***/ "./src/components/ProductosUsuario/index.js":
/*!**************************************************!*\
  !*** ./src/components/ProductosUsuario/index.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Carrito_ProductoCarrito__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Carrito/ProductoCarrito */ \"./src/components/Carrito/ProductoCarrito.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _Loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Loader */ \"./src/components/Loader/index.js\");\nvar _this = undefined,\n    _jsxFileName = \"/home/franco/desarrollo/proyecto_oliver/oliver-sitio/src/components/ProductosUsuario/index.js\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nvar ProductosUsuario = function ProductosUsuario(props) {\n  var ultimasCompras = props.ultimasCompras,\n      loading = props.loading;\n\n  var eliminar = function eliminar() {\n    return console.log('eliminar');\n  };\n\n  return loading ? __jsx(_Loader__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 19\n    }\n  }) : ultimasCompras.map(function (ven) {\n    return __jsx(_Carrito_ProductoCarrito__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      key: ven.idVenta,\n      idSubProducto: 1,\n      producto: \"Dog pron Adulto\",\n      fecha: ven.fecha,\n      total: ven.total,\n      foto: \"https://storage.googleapis.com/web-oliver/-VitalCrops-DogPro-Adulto-15k.jpg\",\n      cantidad: \"1\",\n      eliminarProducto: eliminar,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 11,\n        columnNumber: 13\n      }\n    });\n  });\n};\n\n_c = ProductosUsuario;\n\nvar mapStateToProps = function mapStateToProps(_ref) {\n  var usuarioReducer = _ref.usuarioReducer;\n  return usuarioReducer;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__[\"connect\"])(mapStateToProps, {})(ProductosUsuario));\n\nvar _c;\n\n$RefreshReg$(_c, \"ProductosUsuario\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUHJvZHVjdG9zVXN1YXJpby9pbmRleC5qcz8wMzgwIl0sIm5hbWVzIjpbIlByb2R1Y3Rvc1VzdWFyaW8iLCJwcm9wcyIsInVsdGltYXNDb21wcmFzIiwibG9hZGluZyIsImVsaW1pbmFyIiwiY29uc29sZSIsImxvZyIsIm1hcCIsInZlbiIsImlkVmVudGEiLCJmZWNoYSIsInRvdGFsIiwibWFwU3RhdGVUb1Byb3BzIiwidXN1YXJpb1JlZHVjZXIiLCJjb25uZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLENBQUNDLEtBQUQsRUFBVztBQUFBLE1BQ3pCQyxjQUR5QixHQUNDRCxLQURELENBQ3pCQyxjQUR5QjtBQUFBLE1BQ1ZDLE9BRFUsR0FDQ0YsS0FERCxDQUNWRSxPQURVOztBQUVoQyxNQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVztBQUFBLFdBQUlDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFVBQVosQ0FBSjtBQUFBLEdBQWpCOztBQUNBLFNBQ0lILE9BQU8sR0FBRyxNQUFDLCtDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFBSCxHQUNQRCxjQUFjLENBQUNLLEdBQWYsQ0FBbUIsVUFBQUMsR0FBRztBQUFBLFdBQ2xCLE1BQUMsZ0VBQUQ7QUFDQSxTQUFHLEVBQUVBLEdBQUcsQ0FBQ0MsT0FEVDtBQUVBLG1CQUFhLEVBQUUsQ0FGZjtBQUdBLGNBQVEsRUFBQyxpQkFIVDtBQUlBLFdBQUssRUFBRUQsR0FBRyxDQUFDRSxLQUpYO0FBS0EsV0FBSyxFQUFFRixHQUFHLENBQUNHLEtBTFg7QUFNQSxVQUFJLEVBQUMsNkVBTkw7QUFPQSxjQUFRLEVBQUMsR0FQVDtBQVFBLHNCQUFnQixFQUFFUCxRQVJsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRGtCO0FBQUEsR0FBdEIsQ0FGSjtBQWNILENBakJEOztLQUFNSixnQjs7QUFrQk4sSUFBTVksZUFBZSxHQUFHLFNBQWxCQSxlQUFrQjtBQUFBLE1BQUVDLGNBQUYsUUFBRUEsY0FBRjtBQUFBLFNBQXNCQSxjQUF0QjtBQUFBLENBQXhCOztBQUNlQywwSEFBTyxDQUFDRixlQUFELEVBQWlCLEVBQWpCLENBQVAsQ0FBNEJaLGdCQUE1QixDQUFmIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvUHJvZHVjdG9zVXN1YXJpby9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9kdWN0b0NhcnJpdG8gZnJvbSBcIi4uL0NhcnJpdG8vUHJvZHVjdG9DYXJyaXRvXCI7XG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBMb2FkZXIgZnJvbSBcIi4uL0xvYWRlclwiO1xuXG5jb25zdCBQcm9kdWN0b3NVc3VhcmlvID0gKHByb3BzKSA9PiB7XG4gICAgY29uc3Qge3VsdGltYXNDb21wcmFzLGxvYWRpbmd9ID0gcHJvcHM7XG4gICAgY29uc3QgZWxpbWluYXIgPSAoKT0+Y29uc29sZS5sb2coJ2VsaW1pbmFyJyk7XG4gICAgcmV0dXJuIChcbiAgICAgICAgbG9hZGluZyA/IDxMb2FkZXIvPiA6XG4gICAgICAgIHVsdGltYXNDb21wcmFzLm1hcCh2ZW49PihcbiAgICAgICAgICAgIDxQcm9kdWN0b0NhcnJpdG9cbiAgICAgICAgICAgIGtleT17dmVuLmlkVmVudGF9XG4gICAgICAgICAgICBpZFN1YlByb2R1Y3RvPXsxfVxuICAgICAgICAgICAgcHJvZHVjdG89XCJEb2cgcHJvbiBBZHVsdG9cIlxuICAgICAgICAgICAgZmVjaGE9e3Zlbi5mZWNoYX1cbiAgICAgICAgICAgIHRvdGFsPXt2ZW4udG90YWx9XG4gICAgICAgICAgICBmb3RvPVwiaHR0cHM6Ly9zdG9yYWdlLmdvb2dsZWFwaXMuY29tL3dlYi1vbGl2ZXIvLVZpdGFsQ3JvcHMtRG9nUHJvLUFkdWx0by0xNWsuanBnXCJcbiAgICAgICAgICAgIGNhbnRpZGFkPVwiMVwiXG4gICAgICAgICAgICBlbGltaW5hclByb2R1Y3RvPXtlbGltaW5hcn0vPlxuICAgICAgICApKVxuICAgICk7XG59XG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoe3VzdWFyaW9SZWR1Y2VyfSkgPT4gdXN1YXJpb1JlZHVjZXI7IFxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMse30pKFByb2R1Y3Rvc1VzdWFyaW8pOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/ProductosUsuario/index.js\n");

/***/ })

})