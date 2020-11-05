webpackHotUpdate_N_E("pages/producto/[...producto]",{

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
  var map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };
  return str.replace(/[&<>"']/g, function (m) {
    return map[m];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaGVscGVycy9pbmRleC5qcyJdLCJuYW1lcyI6WyJzbHVnIiwibmFtZSIsInNsdWdpZnkiLCJsb3dlciIsInJlcGxhY2UiLCJpc01vYmlsZSIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJtYXRjaCIsImRlc2NvZGlmaWNhckVudGlkYWQiLCJzdHIiLCJtYXAiLCJtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBRUEsU0FBU0EsSUFBVCxDQUFjQyxJQUFkLEVBQW9CO0FBQ2hCLFNBQU9DLDhDQUFPLENBQUNELElBQUQsRUFBTTtBQUFDRSxTQUFLLEVBQUM7QUFBUCxHQUFOLENBQVAsQ0FBMkJDLE9BQTNCLENBQW1DLFdBQW5DLEVBQWdELEVBQWhELENBQVA7QUFDSDs7QUFFRCxTQUFTQyxRQUFULEdBQW9CO0FBQ2hCLE1BQUdDLE1BQU0sQ0FBQ0MsVUFBUCxHQUFrQixHQUFyQixFQUEwQixPQUFPLEtBQVA7QUFDMUIsU0FDS0MsU0FBUyxDQUFDQyxTQUFWLENBQW9CQyxLQUFwQixDQUEwQixVQUExQixDQUFELElBQ0NGLFNBQVMsQ0FBQ0MsU0FBVixDQUFvQkMsS0FBcEIsQ0FBMEIsUUFBMUIsQ0FERCxJQUVDRixTQUFTLENBQUNDLFNBQVYsQ0FBb0JDLEtBQXBCLENBQTBCLFNBQTFCLENBRkQsSUFHQ0YsU0FBUyxDQUFDQyxTQUFWLENBQW9CQyxLQUFwQixDQUEwQixPQUExQixDQUhELElBSUNGLFNBQVMsQ0FBQ0MsU0FBVixDQUFvQkMsS0FBcEIsQ0FBMEIsT0FBMUIsQ0FKRCxJQUtDRixTQUFTLENBQUNDLFNBQVYsQ0FBb0JDLEtBQXBCLENBQTBCLGFBQTFCLENBTEQsSUFNQUosTUFBTSxDQUFDQyxVQUFQLElBQW1CLEdBUHZCO0FBU0g7O0FBQ0QsU0FBU0ksbUJBQVQsQ0FBNkJDLEdBQTdCLEVBQWtDO0FBQ2hDLE1BQUlDLEdBQUcsR0FBRztBQUNSLFNBQUssT0FERztBQUVSLFNBQUssTUFGRztBQUdSLFNBQUssTUFIRztBQUlSLFNBQUssUUFKRztBQUtSLFNBQUs7QUFMRyxHQUFWO0FBUUEsU0FBT0QsR0FBRyxDQUFDUixPQUFKLENBQVksVUFBWixFQUF3QixVQUFTVSxDQUFULEVBQVk7QUFBRSxXQUFPRCxHQUFHLENBQUNDLENBQUQsQ0FBVjtBQUFnQixHQUF0RCxDQUFQO0FBQ0Q7O0FBRUQiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvZHVjdG8vWy4uLnByb2R1Y3RvXS42YjgyZDMzYmJjMmRiZTdmYTMwZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHNsdWdpZnkgZnJvbSAnc2x1Z2lmeSc7XHJcblxyXG5mdW5jdGlvbiBzbHVnKG5hbWUpIHtcclxuICAgIHJldHVybiBzbHVnaWZ5KG5hbWUse2xvd2VyOnRydWV9KS5yZXBsYWNlKC9bXlxcd1xcLV0rL2csICcnKTtcclxufVxyXG5cclxuZnVuY3Rpb24gaXNNb2JpbGUoKSB7XHJcbiAgICBpZih3aW5kb3cuaW5uZXJXaWR0aD44NjApIHJldHVybiBmYWxzZTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgKG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL0FuZHJvaWQvaSkpIHx8XHJcbiAgICAgICAgKG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL3dlYk9TL2kpKSB8fFxyXG4gICAgICAgIChuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9pUGhvbmUvaSkpIHx8XHJcbiAgICAgICAgKG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL2lQb2QvaSkpIHx8XHJcbiAgICAgICAgKG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL2lQYWQvaSkpIHx8XHJcbiAgICAgICAgKG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL0JsYWNrQmVycnkvaSkpfHxcclxuICAgICAgICB3aW5kb3cuaW5uZXJXaWR0aDw9ODYwXHJcbiAgICApO1xyXG59XHJcbmZ1bmN0aW9uIGRlc2NvZGlmaWNhckVudGlkYWQoc3RyKSB7XHJcbiAgdmFyIG1hcCA9IHtcclxuICAgICcmJzogJyZhbXA7JyxcclxuICAgICc8JzogJyZsdDsnLFxyXG4gICAgJz4nOiAnJmd0OycsXHJcbiAgICAnXCInOiAnJnF1b3Q7JyxcclxuICAgIFwiJ1wiOiAnJiMwMzk7J1xyXG4gIH07XHJcbiAgXHJcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9bJjw+XCInXS9nLCBmdW5jdGlvbihtKSB7IHJldHVybiBtYXBbbV07IH0pO1xyXG59XHJcblxyXG5leHBvcnQge3NsdWcsaXNNb2JpbGUsZGVzY29kaWZpY2FyRW50aWRhZH0iXSwic291cmNlUm9vdCI6IiJ9