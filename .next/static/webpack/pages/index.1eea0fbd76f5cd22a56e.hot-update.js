webpackHotUpdate_N_E("pages/index",{

/***/ "./helpers/index.js":
/*!**************************!*\
  !*** ./helpers/index.js ***!
  \**************************/
/*! exports provided: slug, isMobile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slug", function() { return slug; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isMobile", function() { return isMobile; });
/* harmony import */ var slugify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! slugify */ "./node_modules/slugify/slugify.js");
/* harmony import */ var slugify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(slugify__WEBPACK_IMPORTED_MODULE_0__);


function slug(name) {
  return slugify__WEBPACK_IMPORTED_MODULE_0___default()(name, {
    lower: true
  }).replace(/[^\w\-]+/g, '');
}

function isMobile() {
  var window = window;
  if (window.innerWidth > 860) return false;
  return navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/BlackBerry/i) || window.innerWidth <= 860;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaGVscGVycy9pbmRleC5qcyJdLCJuYW1lcyI6WyJzbHVnIiwibmFtZSIsInNsdWdpZnkiLCJsb3dlciIsInJlcGxhY2UiLCJpc01vYmlsZSIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJtYXRjaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFFQSxTQUFTQSxJQUFULENBQWNDLElBQWQsRUFBb0I7QUFDaEIsU0FBT0MsOENBQU8sQ0FBQ0QsSUFBRCxFQUFNO0FBQUNFLFNBQUssRUFBQztBQUFQLEdBQU4sQ0FBUCxDQUEyQkMsT0FBM0IsQ0FBbUMsV0FBbkMsRUFBZ0QsRUFBaEQsQ0FBUDtBQUNIOztBQUVELFNBQVNDLFFBQVQsR0FBb0I7QUFDaEIsTUFBSUMsTUFBTSxHQUFHQSxNQUFiO0FBQ0EsTUFBR0EsTUFBTSxDQUFDQyxVQUFQLEdBQWtCLEdBQXJCLEVBQTBCLE9BQU8sS0FBUDtBQUMxQixTQUNLQyxTQUFTLENBQUNDLFNBQVYsQ0FBb0JDLEtBQXBCLENBQTBCLFVBQTFCLENBQUQsSUFDQ0YsU0FBUyxDQUFDQyxTQUFWLENBQW9CQyxLQUFwQixDQUEwQixRQUExQixDQURELElBRUNGLFNBQVMsQ0FBQ0MsU0FBVixDQUFvQkMsS0FBcEIsQ0FBMEIsU0FBMUIsQ0FGRCxJQUdDRixTQUFTLENBQUNDLFNBQVYsQ0FBb0JDLEtBQXBCLENBQTBCLE9BQTFCLENBSEQsSUFJQ0YsU0FBUyxDQUFDQyxTQUFWLENBQW9CQyxLQUFwQixDQUEwQixPQUExQixDQUpELElBS0NGLFNBQVMsQ0FBQ0MsU0FBVixDQUFvQkMsS0FBcEIsQ0FBMEIsYUFBMUIsQ0FMRCxJQU1BSixNQUFNLENBQUNDLFVBQVAsSUFBbUIsR0FQdkI7QUFTSDs7QUFHRCIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4xZWVhMGZiZDc2ZjVjZDIyYTU2ZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHNsdWdpZnkgZnJvbSAnc2x1Z2lmeSc7XHJcblxyXG5mdW5jdGlvbiBzbHVnKG5hbWUpIHtcclxuICAgIHJldHVybiBzbHVnaWZ5KG5hbWUse2xvd2VyOnRydWV9KS5yZXBsYWNlKC9bXlxcd1xcLV0rL2csICcnKTtcclxufVxyXG5cclxuZnVuY3Rpb24gaXNNb2JpbGUoKSB7XHJcbiAgICBsZXQgd2luZG93ID0gd2luZG93O1xyXG4gICAgaWYod2luZG93LmlubmVyV2lkdGg+ODYwKSByZXR1cm4gZmFsc2U7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIChuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9BbmRyb2lkL2kpKSB8fFxyXG4gICAgICAgIChuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC93ZWJPUy9pKSkgfHxcclxuICAgICAgICAobmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvaVBob25lL2kpKSB8fFxyXG4gICAgICAgIChuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9pUG9kL2kpKSB8fFxyXG4gICAgICAgIChuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9pUGFkL2kpKSB8fFxyXG4gICAgICAgIChuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9CbGFja0JlcnJ5L2kpKXx8XHJcbiAgICAgICAgd2luZG93LmlubmVyV2lkdGg8PTg2MFxyXG4gICAgKTtcclxufVxyXG5cclxuXHJcbmV4cG9ydCB7c2x1Zyxpc01vYmlsZX0iXSwic291cmNlUm9vdCI6IiJ9