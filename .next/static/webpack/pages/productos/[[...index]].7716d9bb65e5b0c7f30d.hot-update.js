webpackHotUpdate_N_E("pages/productos/[[...index]]",{

/***/ "./helpers/index.js":
/*!**************************!*\
  !*** ./helpers/index.js ***!
  \**************************/
/*! exports provided: slug, isMobile, descodificarEntidad */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slug", function() { return slug; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isMobile", function() { return isMobile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "descodificarEntidad", function() { return descodificarEntidad; });
/* harmony import */ var slugify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! slugify */ "./node_modules/slugify/slugify.js");
/* harmony import */ var slugify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(slugify__WEBPACK_IMPORTED_MODULE_0__);


function slug(name) {
  return slugify__WEBPACK_IMPORTED_MODULE_0___default()(name, {
    lower: true
  }).replace(/[^\w\-]+/g, '');
}

function isMobile() {
  if (window.innerWidth > 860) return false;
  return navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/BlackBerry/i) || window.innerWidth <= 860;
}

function descodificarEntidad(str) {
  return str.replace(/&#(\d+);/g, function (match, dec) {
    return String.fromCharCode(dec);
  });
}



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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaGVscGVycy9pbmRleC5qcyJdLCJuYW1lcyI6WyJzbHVnIiwibmFtZSIsInNsdWdpZnkiLCJsb3dlciIsInJlcGxhY2UiLCJpc01vYmlsZSIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJtYXRjaCIsImRlc2NvZGlmaWNhckVudGlkYWQiLCJzdHIiLCJkZWMiLCJTdHJpbmciLCJmcm9tQ2hhckNvZGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFFQSxTQUFTQSxJQUFULENBQWNDLElBQWQsRUFBb0I7QUFDaEIsU0FBT0MsOENBQU8sQ0FBQ0QsSUFBRCxFQUFNO0FBQUNFLFNBQUssRUFBQztBQUFQLEdBQU4sQ0FBUCxDQUEyQkMsT0FBM0IsQ0FBbUMsV0FBbkMsRUFBZ0QsRUFBaEQsQ0FBUDtBQUNIOztBQUVELFNBQVNDLFFBQVQsR0FBb0I7QUFDaEIsTUFBR0MsTUFBTSxDQUFDQyxVQUFQLEdBQWtCLEdBQXJCLEVBQTBCLE9BQU8sS0FBUDtBQUMxQixTQUNLQyxTQUFTLENBQUNDLFNBQVYsQ0FBb0JDLEtBQXBCLENBQTBCLFVBQTFCLENBQUQsSUFDQ0YsU0FBUyxDQUFDQyxTQUFWLENBQW9CQyxLQUFwQixDQUEwQixRQUExQixDQURELElBRUNGLFNBQVMsQ0FBQ0MsU0FBVixDQUFvQkMsS0FBcEIsQ0FBMEIsU0FBMUIsQ0FGRCxJQUdDRixTQUFTLENBQUNDLFNBQVYsQ0FBb0JDLEtBQXBCLENBQTBCLE9BQTFCLENBSEQsSUFJQ0YsU0FBUyxDQUFDQyxTQUFWLENBQW9CQyxLQUFwQixDQUEwQixPQUExQixDQUpELElBS0NGLFNBQVMsQ0FBQ0MsU0FBVixDQUFvQkMsS0FBcEIsQ0FBMEIsYUFBMUIsQ0FMRCxJQU1BSixNQUFNLENBQUNDLFVBQVAsSUFBbUIsR0FQdkI7QUFTSDs7QUFDRCxTQUFTSSxtQkFBVCxDQUE2QkMsR0FBN0IsRUFBa0M7QUFDaEMsU0FBT0EsR0FBRyxDQUFDUixPQUFKLENBQVksV0FBWixFQUF5QixVQUFTTSxLQUFULEVBQWdCRyxHQUFoQixFQUFxQjtBQUNuRCxXQUFPQyxNQUFNLENBQUNDLFlBQVAsQ0FBb0JGLEdBQXBCLENBQVA7QUFDRCxHQUZNLENBQVA7QUFHRDs7QUFFRCIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9kdWN0b3MvW1suLi5pbmRleF1dLjc3MTZkOWJiNjVlNWIwYzdmMzBkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc2x1Z2lmeSBmcm9tICdzbHVnaWZ5JztcclxuXHJcbmZ1bmN0aW9uIHNsdWcobmFtZSkge1xyXG4gICAgcmV0dXJuIHNsdWdpZnkobmFtZSx7bG93ZXI6dHJ1ZX0pLnJlcGxhY2UoL1teXFx3XFwtXSsvZywgJycpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpc01vYmlsZSgpIHtcclxuICAgIGlmKHdpbmRvdy5pbm5lcldpZHRoPjg2MCkgcmV0dXJuIGZhbHNlO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICAobmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvQW5kcm9pZC9pKSkgfHxcclxuICAgICAgICAobmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvd2ViT1MvaSkpIHx8XHJcbiAgICAgICAgKG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL2lQaG9uZS9pKSkgfHxcclxuICAgICAgICAobmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvaVBvZC9pKSkgfHxcclxuICAgICAgICAobmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvaVBhZC9pKSkgfHxcclxuICAgICAgICAobmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvQmxhY2tCZXJyeS9pKSl8fFxyXG4gICAgICAgIHdpbmRvdy5pbm5lcldpZHRoPD04NjBcclxuICAgICk7XHJcbn1cclxuZnVuY3Rpb24gZGVzY29kaWZpY2FyRW50aWRhZChzdHIpIHtcclxuICByZXR1cm4gc3RyLnJlcGxhY2UoLyYjKFxcZCspOy9nLCBmdW5jdGlvbihtYXRjaCwgZGVjKSB7XHJcbiAgICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZShkZWMpO1xyXG4gIH0pO1xyXG59XHJcblxyXG5leHBvcnQge3NsdWcsaXNNb2JpbGUsZGVzY29kaWZpY2FyRW50aWRhZH0iXSwic291cmNlUm9vdCI6IiJ9