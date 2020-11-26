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

function isMobile(window, navigator) {
  console.log(window);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaGVscGVycy9pbmRleC5qcyJdLCJuYW1lcyI6WyJzbHVnIiwibmFtZSIsInNsdWdpZnkiLCJsb3dlciIsInJlcGxhY2UiLCJpc01vYmlsZSIsIndpbmRvdyIsIm5hdmlnYXRvciIsImNvbnNvbGUiLCJsb2ciLCJpbm5lcldpZHRoIiwidXNlckFnZW50IiwibWF0Y2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBRUEsU0FBU0EsSUFBVCxDQUFjQyxJQUFkLEVBQW9CO0FBQ2hCLFNBQU9DLDhDQUFPLENBQUNELElBQUQsRUFBTTtBQUFDRSxTQUFLLEVBQUM7QUFBUCxHQUFOLENBQVAsQ0FBMkJDLE9BQTNCLENBQW1DLFdBQW5DLEVBQWdELEVBQWhELENBQVA7QUFDSDs7QUFFRCxTQUFTQyxRQUFULENBQWtCQyxNQUFsQixFQUF5QkMsU0FBekIsRUFBb0M7QUFDaENDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZSCxNQUFaO0FBQ0EsTUFBR0EsTUFBTSxDQUFDSSxVQUFQLEdBQWtCLEdBQXJCLEVBQTBCLE9BQU8sS0FBUDtBQUMxQixTQUNLSCxTQUFTLENBQUNJLFNBQVYsQ0FBb0JDLEtBQXBCLENBQTBCLFVBQTFCLENBQUQsSUFDQ0wsU0FBUyxDQUFDSSxTQUFWLENBQW9CQyxLQUFwQixDQUEwQixRQUExQixDQURELElBRUNMLFNBQVMsQ0FBQ0ksU0FBVixDQUFvQkMsS0FBcEIsQ0FBMEIsU0FBMUIsQ0FGRCxJQUdDTCxTQUFTLENBQUNJLFNBQVYsQ0FBb0JDLEtBQXBCLENBQTBCLE9BQTFCLENBSEQsSUFJQ0wsU0FBUyxDQUFDSSxTQUFWLENBQW9CQyxLQUFwQixDQUEwQixPQUExQixDQUpELElBS0NMLFNBQVMsQ0FBQ0ksU0FBVixDQUFvQkMsS0FBcEIsQ0FBMEIsYUFBMUIsQ0FMRCxJQU1BTixNQUFNLENBQUNJLFVBQVAsSUFBbUIsR0FQdkI7QUFTSDs7QUFHRCIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC40YjYwNzU2NjM4YWEzN2M4NDI4ZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHNsdWdpZnkgZnJvbSAnc2x1Z2lmeSc7XHJcblxyXG5mdW5jdGlvbiBzbHVnKG5hbWUpIHtcclxuICAgIHJldHVybiBzbHVnaWZ5KG5hbWUse2xvd2VyOnRydWV9KS5yZXBsYWNlKC9bXlxcd1xcLV0rL2csICcnKTtcclxufVxyXG5cclxuZnVuY3Rpb24gaXNNb2JpbGUod2luZG93LG5hdmlnYXRvcikge1xyXG4gICAgY29uc29sZS5sb2cod2luZG93KTtcclxuICAgIGlmKHdpbmRvdy5pbm5lcldpZHRoPjg2MCkgcmV0dXJuIGZhbHNlO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICAobmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvQW5kcm9pZC9pKSkgfHxcclxuICAgICAgICAobmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvd2ViT1MvaSkpIHx8XHJcbiAgICAgICAgKG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL2lQaG9uZS9pKSkgfHxcclxuICAgICAgICAobmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvaVBvZC9pKSkgfHxcclxuICAgICAgICAobmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvaVBhZC9pKSkgfHxcclxuICAgICAgICAobmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvQmxhY2tCZXJyeS9pKSl8fFxyXG4gICAgICAgIHdpbmRvdy5pbm5lcldpZHRoPD04NjBcclxuICAgICk7XHJcbn1cclxuXHJcblxyXG5leHBvcnQge3NsdWcsaXNNb2JpbGV9Il0sInNvdXJjZVJvb3QiOiIifQ==