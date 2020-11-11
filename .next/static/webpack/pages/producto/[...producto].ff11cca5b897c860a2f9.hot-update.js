webpackHotUpdate_N_E("pages/producto/[...producto]",{

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithHoles; });
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArrayLimit; });
function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableRest; });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _slicedToArray; });
/* harmony import */ var _arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js");
/* harmony import */ var _iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js");
/* harmony import */ var _unsupportedIterableToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray */ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _nonIterableRest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js");




function _slicedToArray(arr, i) {
  return Object(_arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__["default"])(arr, i) || Object(_unsupportedIterableToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(arr, i) || Object(_nonIterableRest__WEBPACK_IMPORTED_MODULE_3__["default"])();
}

/***/ }),

/***/ "./src/components/CardProducto/index.js":
/*!**********************************************!*\
  !*** ./src/components/CardProducto/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _CardProducto_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CardProducto.module.css */ "./src/components/CardProducto/CardProducto.module.css");
/* harmony import */ var _CardProducto_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_CardProducto_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _helpers_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../helpers/index */ "./helpers/index.js");
/* harmony import */ var _config_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../config/index */ "./config/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);


var _this = undefined,
    _jsxFileName = "C:\\Users\\franc\\Documents\\oliver-2\\sitio-desa\\src\\components\\CardProducto\\index.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;








var CardProducto = function CardProducto(_ref) {
  _s();

  var imagen = _ref.imagen,
      prd = _ref.prd;

  var _useState = useState(false),
      _useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      isProductoDetalle = _useState2[0],
      setIsProductoDetalle = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var router = next_router__WEBPACK_IMPORTED_MODULE_6___default.a.router;

    if (router.route == '/producto/[...producto]') {
      setIsProductoDetalle(true);
    }
  }, []);

  var procesarNombre = function procesarNombre(nombre) {
    var nombreProcesado = nombre;

    if (Object(_helpers_index__WEBPACK_IMPORTED_MODULE_4__["isMobile"])()) {
      if (nombreProcesado.length > 25) {
        nombreProcesado = nombre.substring(0, 22) + '...';
      }
    } else {
      if (nombreProcesado.length > 45) {
        nombreProcesado = nombre.substring(0, 40) + '...';
      }
    }

    return nombreProcesado;
  };

  console.log(isProductoDetalle);
  return __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "".concat(_config_index__WEBPACK_IMPORTED_MODULE_5__["PUBLIC_URL"], "/producto/").concat(Object(_helpers_index__WEBPACK_IMPORTED_MODULE_4__["slug"])(prd.subProducto), "/").concat(prd.idSubProducto),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: _CardProducto_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.container__producto + ' ' + "my-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 17
    }
  }, __jsx("section", {
    className: _CardProducto_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.header__card,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: imagen,
    alt: "prd",
    className: _CardProducto_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.img,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 25
    }
  })), __jsx("section", {
    className: _CardProducto_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.body__card,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 21
    }
  }, __jsx("span", {
    className: _CardProducto_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.label__marca + ' ' + "d-block text-muted",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 25
    }
  }, prd.marca), __jsx("h6", {
    className: _CardProducto_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.nombre__producto + ' ' + "text-muted",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 25
    }
  }, procesarNombre(prd.subProducto)), __jsx("span", {
    className: _CardProducto_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.cantidad,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 25
    }
  }, prd.peso, " KG"), __jsx("h3", {
    className: _CardProducto_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.precio + ' ' + "text-black",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 25
    }
  }, "$", prd.precioUnidad)), __jsx("span", {
    className: _CardProducto_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.label__descuento + ' ' + "bg-red",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 21
    }
  }, "15% Off"))));
};

_s(CardProducto, "uNrLFr3GX4UWfrnv7KZdJ737X8w=");

_c = CardProducto;
/* harmony default export */ __webpack_exports__["default"] = (CardProducto);

var _c;

$RefreshReg$(_c, "CardProducto");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2FycmF5V2l0aEhvbGVzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaXRlcmFibGVUb0FycmF5TGltaXQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9ub25JdGVyYWJsZVJlc3QuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9zbGljZWRUb0FycmF5LmpzIiwid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9DYXJkUHJvZHVjdG8vaW5kZXguanMiXSwibmFtZXMiOlsiQ2FyZFByb2R1Y3RvIiwiaW1hZ2VuIiwicHJkIiwidXNlU3RhdGUiLCJpc1Byb2R1Y3RvRGV0YWxsZSIsInNldElzUHJvZHVjdG9EZXRhbGxlIiwidXNlRWZmZWN0Iiwicm91dGVyIiwiUm91dGVyIiwicm91dGUiLCJwcm9jZXNhck5vbWJyZSIsIm5vbWJyZSIsIm5vbWJyZVByb2Nlc2FkbyIsImlzTW9iaWxlIiwibGVuZ3RoIiwic3Vic3RyaW5nIiwiY29uc29sZSIsImxvZyIsIlBVQkxJQ19VUkwiLCJzbHVnIiwic3ViUHJvZHVjdG8iLCJpZFN1YlByb2R1Y3RvIiwiQ2FyZFByb2R1Y3RvTW9kdWxlIiwiY29udGFpbmVyX19wcm9kdWN0byIsImhlYWRlcl9fY2FyZCIsImltZyIsImJvZHlfX2NhcmQiLCJsYWJlbF9fbWFyY2EiLCJtYXJjYSIsIm5vbWJyZV9fcHJvZHVjdG8iLCJjYW50aWRhZCIsInBlc28iLCJwcmVjaW8iLCJwcmVjaW9VbmlkYWQiLCJsYWJlbF9fZGVzY3VlbnRvIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFlO0FBQ2Y7QUFDQSxDOzs7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akMsdUJBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBK0V6QixHQUFHLENBQUMwQixLQUFuRixDQURKLEVBRUk7QUFBSSxhQUFTLEVBQUVOLCtEQUFrQixDQUFDTyxnQkFBbkIsR0FBcUMsR0FBckMsZUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0tuQixjQUFjLENBQUNSLEdBQUcsQ0FBQ2tCLFdBQUwsQ0FEbkIsQ0FGSixFQUtJO0FBQU0sYUFBUyxFQUFFRSwrREFBa0IsQ0FBQ1EsUUFBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUErQzVCLEdBQUcsQ0FBQzZCLElBQW5ELFFBTEosRUFNSTtBQUFJLGFBQVMsRUFBRVQsK0RBQWtCLENBQUNVLE1BQW5CLEdBQTRCLEdBQTVCLGVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFpRTlCLEdBQUcsQ0FBQytCLFlBQXJFLENBTkosQ0FKSixFQWFJO0FBQU0sYUFBUyxFQUFFWCwrREFBa0IsQ0FBQ1ksZ0JBQW5CLEdBQXFDLEdBQXJDLFdBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFiSixDQURKLENBREosQ0FESjtBQXFCSCxDQTNDRDs7R0FBTWxDLFk7O0tBQUFBLFk7QUE2Q1NBLDJFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2R1Y3RvL1suLi5wcm9kdWN0b10uZmYxMWNjYTViODk3Yzg2MGEyZjkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7XG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcInVuZGVmaW5lZFwiIHx8ICEoU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChhcnIpKSkgcmV0dXJuO1xuICB2YXIgX2FyciA9IFtdO1xuICB2YXIgX24gPSB0cnVlO1xuICB2YXIgX2QgPSBmYWxzZTtcbiAgdmFyIF9lID0gdW5kZWZpbmVkO1xuXG4gIHRyeSB7XG4gICAgZm9yICh2YXIgX2kgPSBhcnJbU3ltYm9sLml0ZXJhdG9yXSgpLCBfczsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkge1xuICAgICAgX2Fyci5wdXNoKF9zLnZhbHVlKTtcblxuICAgICAgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgX2QgPSB0cnVlO1xuICAgIF9lID0gZXJyO1xuICB9IGZpbmFsbHkge1xuICAgIHRyeSB7XG4gICAgICBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIGlmIChfZCkgdGhyb3cgX2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIF9hcnI7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHtcbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTtcbn0iLCJpbXBvcnQgYXJyYXlXaXRoSG9sZXMgZnJvbSBcIi4vYXJyYXlXaXRoSG9sZXNcIjtcbmltcG9ydCBpdGVyYWJsZVRvQXJyYXlMaW1pdCBmcm9tIFwiLi9pdGVyYWJsZVRvQXJyYXlMaW1pdFwiO1xuaW1wb3J0IHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5IGZyb20gXCIuL3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5XCI7XG5pbXBvcnQgbm9uSXRlcmFibGVSZXN0IGZyb20gXCIuL25vbkl0ZXJhYmxlUmVzdFwiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7XG4gIHJldHVybiBhcnJheVdpdGhIb2xlcyhhcnIpIHx8IGl0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBub25JdGVyYWJsZVJlc3QoKTtcbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQ2FyZFByb2R1Y3RvTW9kdWxlIGZyb20gICcuL0NhcmRQcm9kdWN0by5tb2R1bGUuY3NzJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHtzbHVnLGlzTW9iaWxlfSBmcm9tICcuLi8uLi8uLi9oZWxwZXJzL2luZGV4JztcclxuaW1wb3J0IHtQVUJMSUNfVVJMfSBmcm9tICcuLi8uLi8uLi9jb25maWcvaW5kZXgnO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgQ2FyZFByb2R1Y3RvID0gKHtpbWFnZW4scHJkfSkgPT4ge1xyXG4gICAgY29uc3QgW2lzUHJvZHVjdG9EZXRhbGxlLCBzZXRJc1Byb2R1Y3RvRGV0YWxsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHtyb3V0ZXJ9ID0gUm91dGVyO1xyXG4gICAgICAgIGlmKHJvdXRlci5yb3V0ZSA9PSAnL3Byb2R1Y3RvL1suLi5wcm9kdWN0b10nKXtcclxuICAgICAgICAgICAgc2V0SXNQcm9kdWN0b0RldGFsbGUodHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW10pXHJcbiAgICBjb25zdCBwcm9jZXNhck5vbWJyZSA9IG5vbWJyZT0+e1xyXG4gICAgICAgIGxldCBub21icmVQcm9jZXNhZG8gPSBub21icmU7XHJcbiAgICAgICAgaWYoaXNNb2JpbGUoKSl7XHJcbiAgICAgICAgICAgIGlmKG5vbWJyZVByb2Nlc2Fkby5sZW5ndGg+MjUpe1xyXG4gICAgICAgICAgICAgICAgbm9tYnJlUHJvY2VzYWRvID0gbm9tYnJlLnN1YnN0cmluZygwLDIyKSsnLi4uJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBpZihub21icmVQcm9jZXNhZG8ubGVuZ3RoPjQ1KXtcclxuICAgICAgICAgICAgICAgIG5vbWJyZVByb2Nlc2FkbyA9IG5vbWJyZS5zdWJzdHJpbmcoMCw0MCkrJy4uLic7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5vbWJyZVByb2Nlc2FkbztcclxuICAgIH1cclxuICAgIGNvbnNvbGUubG9nKGlzUHJvZHVjdG9EZXRhbGxlKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPExpbmsgaHJlZj17YCR7UFVCTElDX1VSTH0vcHJvZHVjdG8vJHtzbHVnKHByZC5zdWJQcm9kdWN0byl9LyR7cHJkLmlkU3ViUHJvZHVjdG99YH0+XHJcbiAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e0NhcmRQcm9kdWN0b01vZHVsZS5jb250YWluZXJfX3Byb2R1Y3RvICsgJyAnICsgYG15LTNgfT5cclxuICAgICAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e0NhcmRQcm9kdWN0b01vZHVsZS5oZWFkZXJfX2NhcmR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17aW1hZ2VufSBhbHQ9XCJwcmRcIiBjbGFzc05hbWU9e0NhcmRQcm9kdWN0b01vZHVsZS5pbWd9Lz5cclxuICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtDYXJkUHJvZHVjdG9Nb2R1bGUuYm9keV9fY2FyZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Q2FyZFByb2R1Y3RvTW9kdWxlLmxhYmVsX19tYXJjYSsgJyAnICsgYGQtYmxvY2sgdGV4dC1tdXRlZGB9PntwcmQubWFyY2F9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPXtDYXJkUHJvZHVjdG9Nb2R1bGUubm9tYnJlX19wcm9kdWN0bysgJyAnICsgYHRleHQtbXV0ZWRgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9jZXNhck5vbWJyZShwcmQuc3ViUHJvZHVjdG8pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2g2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e0NhcmRQcm9kdWN0b01vZHVsZS5jYW50aWRhZH0+e3ByZC5wZXNvfSBLRzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT17Q2FyZFByb2R1Y3RvTW9kdWxlLnByZWNpbyArICcgJyArIGB0ZXh0LWJsYWNrYH0+JHtwcmQucHJlY2lvVW5pZGFkfTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Q2FyZFByb2R1Y3RvTW9kdWxlLmxhYmVsX19kZXNjdWVudG8rICcgJyArIGBiZy1yZWRgfT4xNSUgT2ZmPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICApO1xyXG59XHJcbiBcclxuZXhwb3J0IGRlZmF1bHQgQ2FyZFByb2R1Y3RvOyJdLCJzb3VyY2VSb290IjoiIn0=