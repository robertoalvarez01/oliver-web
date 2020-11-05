webpackHotUpdate_N_E("pages/producto/[...producto]",{

/***/ "./helpers/index.js":
/*!**************************!*\
  !*** ./helpers/index.js ***!
  \**************************/
/*! exports provided: slug, isMobile, utf8_decode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slug", function() { return slug; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isMobile", function() { return isMobile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "utf8_decode", function() { return utf8_decode; });
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

function utf8_decode(strData) {
  // eslint-disable-line camelcase
  //  discuss at: https://locutus.io/php/utf8_decode/
  // original by: Webtoolkit.info (https://www.webtoolkit.info/)
  //    input by: Aman Gupta
  //    input by: Brett Zamir (https://brett-zamir.me)
  // improved by: Kevin van Zonneveld (https://kvz.io)
  // improved by: Norman "zEh" Fuchs
  // bugfixed by: hitwork
  // bugfixed by: Onno Marsman (https://twitter.com/onnomarsman)
  // bugfixed by: Kevin van Zonneveld (https://kvz.io)
  // bugfixed by: kirilloid
  // bugfixed by: w35l3y (https://www.wesley.eti.br)
  //   example 1: utf8_decode('Kevin van Zonneveld')
  //   returns 1: 'Kevin van Zonneveld'
  var tmpArr = [];
  var i = 0;
  var c1 = 0;
  var seqlen = 0;
  strData += '';

  while (i < strData.length) {
    c1 = strData.charCodeAt(i) & 0xFF;
    seqlen = 0; // https://en.wikipedia.org/wiki/UTF-8#Codepage_layout

    if (c1 <= 0xBF) {
      c1 = c1 & 0x7F;
      seqlen = 1;
    } else if (c1 <= 0xDF) {
      c1 = c1 & 0x1F;
      seqlen = 2;
    } else if (c1 <= 0xEF) {
      c1 = c1 & 0x0F;
      seqlen = 3;
    } else {
      c1 = c1 & 0x07;
      seqlen = 4;
    }

    for (var ai = 1; ai < seqlen; ++ai) {
      c1 = c1 << 0x06 | strData.charCodeAt(ai + i) & 0x3F;
    }

    if (seqlen === 4) {
      c1 -= 0x10000;
      tmpArr.push(String.fromCharCode(0xD800 | c1 >> 10 & 0x3FF));
      tmpArr.push(String.fromCharCode(0xDC00 | c1 & 0x3FF));
    } else {
      tmpArr.push(String.fromCharCode(c1));
    }

    i += seqlen;
  }

  return tmpArr.join('');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaGVscGVycy9pbmRleC5qcyJdLCJuYW1lcyI6WyJzbHVnIiwibmFtZSIsInNsdWdpZnkiLCJsb3dlciIsInJlcGxhY2UiLCJpc01vYmlsZSIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJtYXRjaCIsInV0ZjhfZGVjb2RlIiwic3RyRGF0YSIsInRtcEFyciIsImkiLCJjMSIsInNlcWxlbiIsImxlbmd0aCIsImNoYXJDb2RlQXQiLCJhaSIsInB1c2giLCJTdHJpbmciLCJmcm9tQ2hhckNvZGUiLCJqb2luIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBRUEsU0FBU0EsSUFBVCxDQUFjQyxJQUFkLEVBQW9CO0FBQ2hCLFNBQU9DLDhDQUFPLENBQUNELElBQUQsRUFBTTtBQUFDRSxTQUFLLEVBQUM7QUFBUCxHQUFOLENBQVAsQ0FBMkJDLE9BQTNCLENBQW1DLFdBQW5DLEVBQWdELEVBQWhELENBQVA7QUFDSDs7QUFFRCxTQUFTQyxRQUFULEdBQW9CO0FBQ2hCLE1BQUdDLE1BQU0sQ0FBQ0MsVUFBUCxHQUFrQixHQUFyQixFQUEwQixPQUFPLEtBQVA7QUFDMUIsU0FDS0MsU0FBUyxDQUFDQyxTQUFWLENBQW9CQyxLQUFwQixDQUEwQixVQUExQixDQUFELElBQ0NGLFNBQVMsQ0FBQ0MsU0FBVixDQUFvQkMsS0FBcEIsQ0FBMEIsUUFBMUIsQ0FERCxJQUVDRixTQUFTLENBQUNDLFNBQVYsQ0FBb0JDLEtBQXBCLENBQTBCLFNBQTFCLENBRkQsSUFHQ0YsU0FBUyxDQUFDQyxTQUFWLENBQW9CQyxLQUFwQixDQUEwQixPQUExQixDQUhELElBSUNGLFNBQVMsQ0FBQ0MsU0FBVixDQUFvQkMsS0FBcEIsQ0FBMEIsT0FBMUIsQ0FKRCxJQUtDRixTQUFTLENBQUNDLFNBQVYsQ0FBb0JDLEtBQXBCLENBQTBCLGFBQTFCLENBTEQsSUFNQUosTUFBTSxDQUFDQyxVQUFQLElBQW1CLEdBUHZCO0FBU0g7O0FBQ0QsU0FBU0ksV0FBVCxDQUFzQkMsT0FBdEIsRUFBK0I7QUFBRTtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLE1BQUlDLE1BQU0sR0FBRyxFQUFiO0FBQ0EsTUFBSUMsQ0FBQyxHQUFHLENBQVI7QUFDQSxNQUFJQyxFQUFFLEdBQUcsQ0FBVDtBQUNBLE1BQUlDLE1BQU0sR0FBRyxDQUFiO0FBRUFKLFNBQU8sSUFBSSxFQUFYOztBQUVBLFNBQU9FLENBQUMsR0FBR0YsT0FBTyxDQUFDSyxNQUFuQixFQUEyQjtBQUN6QkYsTUFBRSxHQUFHSCxPQUFPLENBQUNNLFVBQVIsQ0FBbUJKLENBQW5CLElBQXdCLElBQTdCO0FBQ0FFLFVBQU0sR0FBRyxDQUFULENBRnlCLENBSXpCOztBQUNBLFFBQUlELEVBQUUsSUFBSSxJQUFWLEVBQWdCO0FBQ2RBLFFBQUUsR0FBSUEsRUFBRSxHQUFHLElBQVg7QUFDQUMsWUFBTSxHQUFHLENBQVQ7QUFDRCxLQUhELE1BR08sSUFBSUQsRUFBRSxJQUFJLElBQVYsRUFBZ0I7QUFDckJBLFFBQUUsR0FBSUEsRUFBRSxHQUFHLElBQVg7QUFDQUMsWUFBTSxHQUFHLENBQVQ7QUFDRCxLQUhNLE1BR0EsSUFBSUQsRUFBRSxJQUFJLElBQVYsRUFBZ0I7QUFDckJBLFFBQUUsR0FBSUEsRUFBRSxHQUFHLElBQVg7QUFDQUMsWUFBTSxHQUFHLENBQVQ7QUFDRCxLQUhNLE1BR0E7QUFDTEQsUUFBRSxHQUFJQSxFQUFFLEdBQUcsSUFBWDtBQUNBQyxZQUFNLEdBQUcsQ0FBVDtBQUNEOztBQUVELFNBQUssSUFBSUcsRUFBRSxHQUFHLENBQWQsRUFBaUJBLEVBQUUsR0FBR0gsTUFBdEIsRUFBOEIsRUFBRUcsRUFBaEMsRUFBb0M7QUFDbENKLFFBQUUsR0FBS0EsRUFBRSxJQUFJLElBQVAsR0FBZ0JILE9BQU8sQ0FBQ00sVUFBUixDQUFtQkMsRUFBRSxHQUFHTCxDQUF4QixJQUE2QixJQUFuRDtBQUNEOztBQUVELFFBQUlFLE1BQU0sS0FBSyxDQUFmLEVBQWtCO0FBQ2hCRCxRQUFFLElBQUksT0FBTjtBQUNBRixZQUFNLENBQUNPLElBQVAsQ0FBWUMsTUFBTSxDQUFDQyxZQUFQLENBQW9CLFNBQVdQLEVBQUUsSUFBSSxFQUFQLEdBQWEsS0FBM0MsQ0FBWjtBQUNBRixZQUFNLENBQUNPLElBQVAsQ0FBWUMsTUFBTSxDQUFDQyxZQUFQLENBQW9CLFNBQVVQLEVBQUUsR0FBRyxLQUFuQyxDQUFaO0FBQ0QsS0FKRCxNQUlPO0FBQ0xGLFlBQU0sQ0FBQ08sSUFBUCxDQUFZQyxNQUFNLENBQUNDLFlBQVAsQ0FBb0JQLEVBQXBCLENBQVo7QUFDRDs7QUFFREQsS0FBQyxJQUFJRSxNQUFMO0FBQ0Q7O0FBRUQsU0FBT0gsTUFBTSxDQUFDVSxJQUFQLENBQVksRUFBWixDQUFQO0FBQ0g7O0FBRUQiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvZHVjdG8vWy4uLnByb2R1Y3RvXS5mODg2MzBlNGVkNDJmODkyYzZkMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHNsdWdpZnkgZnJvbSAnc2x1Z2lmeSc7XHJcblxyXG5mdW5jdGlvbiBzbHVnKG5hbWUpIHtcclxuICAgIHJldHVybiBzbHVnaWZ5KG5hbWUse2xvd2VyOnRydWV9KS5yZXBsYWNlKC9bXlxcd1xcLV0rL2csICcnKTtcclxufVxyXG5cclxuZnVuY3Rpb24gaXNNb2JpbGUoKSB7XHJcbiAgICBpZih3aW5kb3cuaW5uZXJXaWR0aD44NjApIHJldHVybiBmYWxzZTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgKG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL0FuZHJvaWQvaSkpIHx8XHJcbiAgICAgICAgKG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL3dlYk9TL2kpKSB8fFxyXG4gICAgICAgIChuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9pUGhvbmUvaSkpIHx8XHJcbiAgICAgICAgKG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL2lQb2QvaSkpIHx8XHJcbiAgICAgICAgKG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL2lQYWQvaSkpIHx8XHJcbiAgICAgICAgKG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL0JsYWNrQmVycnkvaSkpfHxcclxuICAgICAgICB3aW5kb3cuaW5uZXJXaWR0aDw9ODYwXHJcbiAgICApO1xyXG59XHJcbmZ1bmN0aW9uIHV0ZjhfZGVjb2RlIChzdHJEYXRhKSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgY2FtZWxjYXNlXHJcbiAgICAvLyAgZGlzY3VzcyBhdDogaHR0cHM6Ly9sb2N1dHVzLmlvL3BocC91dGY4X2RlY29kZS9cclxuICAgIC8vIG9yaWdpbmFsIGJ5OiBXZWJ0b29sa2l0LmluZm8gKGh0dHBzOi8vd3d3LndlYnRvb2xraXQuaW5mby8pXHJcbiAgICAvLyAgICBpbnB1dCBieTogQW1hbiBHdXB0YVxyXG4gICAgLy8gICAgaW5wdXQgYnk6IEJyZXR0IFphbWlyIChodHRwczovL2JyZXR0LXphbWlyLm1lKVxyXG4gICAgLy8gaW1wcm92ZWQgYnk6IEtldmluIHZhbiBab25uZXZlbGQgKGh0dHBzOi8va3Z6LmlvKVxyXG4gICAgLy8gaW1wcm92ZWQgYnk6IE5vcm1hbiBcInpFaFwiIEZ1Y2hzXHJcbiAgICAvLyBidWdmaXhlZCBieTogaGl0d29ya1xyXG4gICAgLy8gYnVnZml4ZWQgYnk6IE9ubm8gTWFyc21hbiAoaHR0cHM6Ly90d2l0dGVyLmNvbS9vbm5vbWFyc21hbilcclxuICAgIC8vIGJ1Z2ZpeGVkIGJ5OiBLZXZpbiB2YW4gWm9ubmV2ZWxkIChodHRwczovL2t2ei5pbylcclxuICAgIC8vIGJ1Z2ZpeGVkIGJ5OiBraXJpbGxvaWRcclxuICAgIC8vIGJ1Z2ZpeGVkIGJ5OiB3MzVsM3kgKGh0dHBzOi8vd3d3Lndlc2xleS5ldGkuYnIpXHJcbiAgICAvLyAgIGV4YW1wbGUgMTogdXRmOF9kZWNvZGUoJ0tldmluIHZhbiBab25uZXZlbGQnKVxyXG4gICAgLy8gICByZXR1cm5zIDE6ICdLZXZpbiB2YW4gWm9ubmV2ZWxkJ1xyXG4gIFxyXG4gICAgdmFyIHRtcEFyciA9IFtdXHJcbiAgICB2YXIgaSA9IDBcclxuICAgIHZhciBjMSA9IDBcclxuICAgIHZhciBzZXFsZW4gPSAwXHJcbiAgXHJcbiAgICBzdHJEYXRhICs9ICcnXHJcbiAgXHJcbiAgICB3aGlsZSAoaSA8IHN0ckRhdGEubGVuZ3RoKSB7XHJcbiAgICAgIGMxID0gc3RyRGF0YS5jaGFyQ29kZUF0KGkpICYgMHhGRlxyXG4gICAgICBzZXFsZW4gPSAwXHJcbiAgXHJcbiAgICAgIC8vIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL1VURi04I0NvZGVwYWdlX2xheW91dFxyXG4gICAgICBpZiAoYzEgPD0gMHhCRikge1xyXG4gICAgICAgIGMxID0gKGMxICYgMHg3RilcclxuICAgICAgICBzZXFsZW4gPSAxXHJcbiAgICAgIH0gZWxzZSBpZiAoYzEgPD0gMHhERikge1xyXG4gICAgICAgIGMxID0gKGMxICYgMHgxRilcclxuICAgICAgICBzZXFsZW4gPSAyXHJcbiAgICAgIH0gZWxzZSBpZiAoYzEgPD0gMHhFRikge1xyXG4gICAgICAgIGMxID0gKGMxICYgMHgwRilcclxuICAgICAgICBzZXFsZW4gPSAzXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgYzEgPSAoYzEgJiAweDA3KVxyXG4gICAgICAgIHNlcWxlbiA9IDRcclxuICAgICAgfVxyXG4gIFxyXG4gICAgICBmb3IgKHZhciBhaSA9IDE7IGFpIDwgc2VxbGVuOyArK2FpKSB7XHJcbiAgICAgICAgYzEgPSAoKGMxIDw8IDB4MDYpIHwgKHN0ckRhdGEuY2hhckNvZGVBdChhaSArIGkpICYgMHgzRikpXHJcbiAgICAgIH1cclxuICBcclxuICAgICAgaWYgKHNlcWxlbiA9PT0gNCkge1xyXG4gICAgICAgIGMxIC09IDB4MTAwMDBcclxuICAgICAgICB0bXBBcnIucHVzaChTdHJpbmcuZnJvbUNoYXJDb2RlKDB4RDgwMCB8ICgoYzEgPj4gMTApICYgMHgzRkYpKSlcclxuICAgICAgICB0bXBBcnIucHVzaChTdHJpbmcuZnJvbUNoYXJDb2RlKDB4REMwMCB8IChjMSAmIDB4M0ZGKSkpXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdG1wQXJyLnB1c2goU3RyaW5nLmZyb21DaGFyQ29kZShjMSkpXHJcbiAgICAgIH1cclxuICBcclxuICAgICAgaSArPSBzZXFsZW5cclxuICAgIH1cclxuICBcclxuICAgIHJldHVybiB0bXBBcnIuam9pbignJylcclxufVxyXG5cclxuZXhwb3J0IHtzbHVnLGlzTW9iaWxlLHV0ZjhfZGVjb2RlfSJdLCJzb3VyY2VSb290IjoiIn0=