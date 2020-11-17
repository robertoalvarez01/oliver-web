webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/Buscador/index.js":
/*!******************************************!*\
  !*** ./src/components/Buscador/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Modal_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Modal/index */ "./src/components/Modal/index.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\franc\\Documents\\oliver-2\\sitio-desa\\src\\components\\Buscador\\index.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






var Buscador = function Buscador() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      modalIsOpen = _useState[0],
      setModalIsOpen = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      buscador = _useState2[0],
      setBuscador = _useState2[1];

  var location = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();

  var showModalBuscador = function showModalBuscador() {
    document.getElementsByTagName('body')[0].style.overflowY = 'hidden';
    setModalIsOpen(true);
  };

  var closeModal = function closeModal() {
    document.getElementsByTagName('body')[0].style.overflowY = 'scroll';
    setModalIsOpen(false);
  };

  var handleChangeBuscador = function handleChangeBuscador(event) {
    return setBuscador(event.target.value);
  };

  var handleSubmit = function handleSubmit(event) {
    event.preventDefault();
    if (buscador.trim() == '') return false;

    if (location.pathname == '/') {
      return next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push("/productos?search=".concat(busqueda));
    }

    return window.location.assign("/productos?search=".concat(busqueda));
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("button", {
    onClick: showModalBuscador,
    className: "jsx-194702073" + " " + "boton__float__search bg-yellow",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faSearch"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 17
    }
  })), modalIsOpen ? __jsx(_Modal_index__WEBPACK_IMPORTED_MODULE_3__["default"], {
    closeModal: closeModal,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }
  }, __jsx("form", {
    onSubmit: handleSubmit,
    className: "jsx-194702073" + " " + "form-group mt-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 17
    }
  }, __jsx("input", {
    type: "text",
    placeholder: "\xBFQu\xE9 andas buscando?",
    onChange: handleChangeBuscador,
    required: true,
    className: "jsx-194702073" + " " + "form-control",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 21
    }
  }), __jsx("button", {
    type: "submit",
    className: "jsx-194702073" + " " + "boton bg-yellow mt-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 21
    }
  }, "Buscar"))) : null, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "194702073",
    __self: _this
  }, ".boton__float__search.jsx-194702073{position:fixed;top:85%;right:4%;display:block;padding:7px;width:40px;height:40px;text-align:center;border-radius:20px;border:1px solid #FFB347;box-shadow:0px 2px 1px -1px rgba(228,224,224,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12);display:none;}@media(max-width:768px){.boton__float__search.jsx-194702073{display:block;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcZnJhbmNcXERvY3VtZW50c1xcb2xpdmVyLTJcXHNpdGlvLWRlc2FcXHNyY1xcY29tcG9uZW50c1xcQnVzY2Fkb3JcXGluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRDd0IsQUFHb0MsQUFnQkcsY0FDbEIsQ0FoQlEsUUFDQyxTQUNLLGNBQ0YsWUFDRCxXQUNDLFlBQ00sa0JBQ0MsbUJBQ00seUJBQ2dHLG9IQUM1RyxhQUNqQiIsImZpbGUiOiJDOlxcVXNlcnNcXGZyYW5jXFxEb2N1bWVudHNcXG9saXZlci0yXFxzaXRpby1kZXNhXFxzcmNcXGNvbXBvbmVudHNcXEJ1c2NhZG9yXFxpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCx7dXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFJvdXRlcix7dXNlUm91dGVyfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IE1vZGFsIGZyb20gJy4uL01vZGFsL2luZGV4JztcclxuaW1wb3J0IHsgZmFTZWFyY2ggfSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCI7XHJcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIjtcclxuY29uc3QgQnVzY2Fkb3IgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbbW9kYWxJc09wZW4sIHNldE1vZGFsSXNPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtidXNjYWRvciwgc2V0QnVzY2Fkb3JdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgbG9jYXRpb24gPSB1c2VSb3V0ZXIoKTtcclxuICAgIGNvbnN0IHNob3dNb2RhbEJ1c2NhZG9yID0gKCk9PntcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYm9keScpWzBdLnN0eWxlLm92ZXJmbG93WSA9ICdoaWRkZW4nO1xyXG4gICAgICAgIHNldE1vZGFsSXNPcGVuKHRydWUpXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGNsb3NlTW9kYWwgPSAoKT0+e1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdib2R5JylbMF0uc3R5bGUub3ZlcmZsb3dZID0gJ3Njcm9sbCc7XHJcbiAgICAgICAgc2V0TW9kYWxJc09wZW4oZmFsc2UpXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZUJ1c2NhZG9yID0gZXZlbnQ9PihcclxuICAgICAgICBzZXRCdXNjYWRvcihldmVudC50YXJnZXQudmFsdWUpXHJcbiAgICApO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGV2ZW50PT57XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBpZihidXNjYWRvci50cmltKCk9PSAnJylyZXR1cm4gZmFsc2U7IFxyXG4gICAgICAgIGlmKGxvY2F0aW9uLnBhdGhuYW1lID09ICcvJyl7XHJcbiAgICAgICAgICAgIHJldHVybiBSb3V0ZXIucHVzaChgL3Byb2R1Y3Rvcz9zZWFyY2g9JHtidXNxdWVkYX1gKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHdpbmRvdy5sb2NhdGlvbi5hc3NpZ24oYC9wcm9kdWN0b3M/c2VhcmNoPSR7YnVzcXVlZGF9YCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJvdG9uX19mbG9hdF9fc2VhcmNoIGJnLXllbGxvd1wiIG9uQ2xpY2s9e3Nob3dNb2RhbEJ1c2NhZG9yfT5cclxuICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFTZWFyY2h9Lz5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIHsobW9kYWxJc09wZW4pP1xyXG4gICAgICAgICAgICA8TW9kYWwgY2xvc2VNb2RhbD17Y2xvc2VNb2RhbH0+XHJcbiAgICAgICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIG10LTRcIiBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cIsK/UXXDqSBhbmRhcyBidXNjYW5kbz9cIiBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlQnVzY2Fkb3J9IHJlcXVpcmVkLz5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJib3RvbiBiZy15ZWxsb3cgbXQtM1wiPkJ1c2NhcjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICA8L01vZGFsPjpudWxsfVxyXG4gICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICAgICAuYm90b25fX2Zsb2F0X19zZWFyY2h7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogODUlO1xyXG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0OiA0JTtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA3cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDQwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNGRkIzNDc7XHJcbiAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDJweCAxcHggLTFweCByZ2JhKDIyOCwgMjI0LCAyMjQsIDAuMiksIDBweCAxcHggMXB4IDBweCByZ2JhKDAsMCwwLDAuMTQpLCAwcHggMXB4IDNweCAwcHggcmdiYSgwLDAsMCwwLjEyKTtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIEBtZWRpYShtYXgtd2lkdGg6NzY4cHgpe1xyXG4gICAgICAgICAgICAgICAgICAgIC5ib3Rvbl9fZmxvYXRfX3NlYXJjaHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSAgICBcclxuICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufVxyXG4gXHJcbmV4cG9ydCBkZWZhdWx0IEJ1c2NhZG9yOyJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\franc\\\\Documents\\\\oliver-2\\\\sitio-desa\\\\src\\\\components\\\\Buscador\\\\index.js */"));
};

_s(Buscador, "QAcuBG/I7i8kbeninVADSS+/Zkk=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"]];
});

_c = Buscador;
/* harmony default export */ __webpack_exports__["default"] = (Buscador);

var _c;

$RefreshReg$(_c, "Buscador");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQnVzY2Fkb3IvaW5kZXguanMiXSwibmFtZXMiOlsiQnVzY2Fkb3IiLCJ1c2VTdGF0ZSIsIm1vZGFsSXNPcGVuIiwic2V0TW9kYWxJc09wZW4iLCJidXNjYWRvciIsInNldEJ1c2NhZG9yIiwibG9jYXRpb24iLCJ1c2VSb3V0ZXIiLCJzaG93TW9kYWxCdXNjYWRvciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJzdHlsZSIsIm92ZXJmbG93WSIsImNsb3NlTW9kYWwiLCJoYW5kbGVDaGFuZ2VCdXNjYWRvciIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsInRyaW0iLCJwYXRobmFtZSIsIlJvdXRlciIsInB1c2giLCJidXNxdWVkYSIsIndpbmRvdyIsImFzc2lnbiIsImZhU2VhcmNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUFBOztBQUFBLGtCQUNtQkMsc0RBQVEsQ0FBQyxLQUFELENBRDNCO0FBQUEsTUFDWkMsV0FEWTtBQUFBLE1BQ0NDLGNBREQ7O0FBQUEsbUJBRWFGLHNEQUFRLENBQUMsRUFBRCxDQUZyQjtBQUFBLE1BRVpHLFFBRlk7QUFBQSxNQUVGQyxXQUZFOztBQUduQixNQUFNQyxRQUFRLEdBQUdDLDZEQUFTLEVBQTFCOztBQUNBLE1BQU1DLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsR0FBSTtBQUMxQkMsWUFBUSxDQUFDQyxvQkFBVCxDQUE4QixNQUE5QixFQUFzQyxDQUF0QyxFQUF5Q0MsS0FBekMsQ0FBK0NDLFNBQS9DLEdBQTJELFFBQTNEO0FBQ0FULGtCQUFjLENBQUMsSUFBRCxDQUFkO0FBQ0gsR0FIRDs7QUFLQSxNQUFNVSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFJO0FBQ25CSixZQUFRLENBQUNDLG9CQUFULENBQThCLE1BQTlCLEVBQXNDLENBQXRDLEVBQXlDQyxLQUF6QyxDQUErQ0MsU0FBL0MsR0FBMkQsUUFBM0Q7QUFDQVQsa0JBQWMsQ0FBQyxLQUFELENBQWQ7QUFDSCxHQUhEOztBQUtBLE1BQU1XLG9CQUFvQixHQUFHLFNBQXZCQSxvQkFBdUIsQ0FBQUMsS0FBSztBQUFBLFdBQzlCVixXQUFXLENBQUNVLEtBQUssQ0FBQ0MsTUFBTixDQUFhQyxLQUFkLENBRG1CO0FBQUEsR0FBbEM7O0FBSUEsTUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQUgsS0FBSyxFQUFFO0FBQ3hCQSxTQUFLLENBQUNJLGNBQU47QUFDQSxRQUFHZixRQUFRLENBQUNnQixJQUFULE1BQWtCLEVBQXJCLEVBQXdCLE9BQU8sS0FBUDs7QUFDeEIsUUFBR2QsUUFBUSxDQUFDZSxRQUFULElBQXFCLEdBQXhCLEVBQTRCO0FBQ3hCLGFBQU9DLGtEQUFNLENBQUNDLElBQVAsNkJBQWlDQyxRQUFqQyxFQUFQO0FBQ0g7O0FBQ0QsV0FBT0MsTUFBTSxDQUFDbkIsUUFBUCxDQUFnQm9CLE1BQWhCLDZCQUE0Q0YsUUFBNUMsRUFBUDtBQUNILEdBUEQ7O0FBU0EsU0FDSSxtRUFDSTtBQUFtRCxXQUFPLEVBQUVoQixpQkFBNUQ7QUFBQSx1Q0FBa0IsZ0NBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLDhFQUFEO0FBQWlCLFFBQUksRUFBRW1CLDBFQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosQ0FESixFQUlNekIsV0FBRCxHQUNELE1BQUMsb0RBQUQ7QUFBTyxjQUFVLEVBQUVXLFVBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFrQyxZQUFRLEVBQUVLLFlBQTVDO0FBQUEsdUNBQWdCLGlCQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBTyxRQUFJLEVBQUMsTUFBWjtBQUE0QyxlQUFXLEVBQUMsNEJBQXhEO0FBQStFLFlBQVEsRUFBRUosb0JBQXpGO0FBQStHLFlBQVEsTUFBdkg7QUFBQSx1Q0FBNkIsY0FBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLEVBRUk7QUFBUSxRQUFJLEVBQUMsUUFBYjtBQUFBLHVDQUFnQyxzQkFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZKLENBREosQ0FEQyxHQU1RLElBVmI7QUFBQTtBQUFBO0FBQUEsMHNKQURKO0FBb0NILENBL0REOztHQUFNZCxRO1VBR2VPLHFEOzs7S0FIZlAsUTtBQWlFU0EsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYzhkNzRmNmFjNjFlZTlhOWU5ZGEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCx7dXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFJvdXRlcix7dXNlUm91dGVyfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IE1vZGFsIGZyb20gJy4uL01vZGFsL2luZGV4JztcclxuaW1wb3J0IHsgZmFTZWFyY2ggfSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCI7XHJcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIjtcclxuY29uc3QgQnVzY2Fkb3IgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbbW9kYWxJc09wZW4sIHNldE1vZGFsSXNPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtidXNjYWRvciwgc2V0QnVzY2Fkb3JdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgbG9jYXRpb24gPSB1c2VSb3V0ZXIoKTtcclxuICAgIGNvbnN0IHNob3dNb2RhbEJ1c2NhZG9yID0gKCk9PntcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYm9keScpWzBdLnN0eWxlLm92ZXJmbG93WSA9ICdoaWRkZW4nO1xyXG4gICAgICAgIHNldE1vZGFsSXNPcGVuKHRydWUpXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGNsb3NlTW9kYWwgPSAoKT0+e1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdib2R5JylbMF0uc3R5bGUub3ZlcmZsb3dZID0gJ3Njcm9sbCc7XHJcbiAgICAgICAgc2V0TW9kYWxJc09wZW4oZmFsc2UpXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZUJ1c2NhZG9yID0gZXZlbnQ9PihcclxuICAgICAgICBzZXRCdXNjYWRvcihldmVudC50YXJnZXQudmFsdWUpXHJcbiAgICApO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGV2ZW50PT57XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBpZihidXNjYWRvci50cmltKCk9PSAnJylyZXR1cm4gZmFsc2U7IFxyXG4gICAgICAgIGlmKGxvY2F0aW9uLnBhdGhuYW1lID09ICcvJyl7XHJcbiAgICAgICAgICAgIHJldHVybiBSb3V0ZXIucHVzaChgL3Byb2R1Y3Rvcz9zZWFyY2g9JHtidXNxdWVkYX1gKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHdpbmRvdy5sb2NhdGlvbi5hc3NpZ24oYC9wcm9kdWN0b3M/c2VhcmNoPSR7YnVzcXVlZGF9YCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJvdG9uX19mbG9hdF9fc2VhcmNoIGJnLXllbGxvd1wiIG9uQ2xpY2s9e3Nob3dNb2RhbEJ1c2NhZG9yfT5cclxuICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFTZWFyY2h9Lz5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIHsobW9kYWxJc09wZW4pP1xyXG4gICAgICAgICAgICA8TW9kYWwgY2xvc2VNb2RhbD17Y2xvc2VNb2RhbH0+XHJcbiAgICAgICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIG10LTRcIiBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cIsK/UXXDqSBhbmRhcyBidXNjYW5kbz9cIiBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlQnVzY2Fkb3J9IHJlcXVpcmVkLz5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJib3RvbiBiZy15ZWxsb3cgbXQtM1wiPkJ1c2NhcjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICA8L01vZGFsPjpudWxsfVxyXG4gICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICAgICAuYm90b25fX2Zsb2F0X19zZWFyY2h7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogODUlO1xyXG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0OiA0JTtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA3cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDQwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNGRkIzNDc7XHJcbiAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDJweCAxcHggLTFweCByZ2JhKDIyOCwgMjI0LCAyMjQsIDAuMiksIDBweCAxcHggMXB4IDBweCByZ2JhKDAsMCwwLDAuMTQpLCAwcHggMXB4IDNweCAwcHggcmdiYSgwLDAsMCwwLjEyKTtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIEBtZWRpYShtYXgtd2lkdGg6NzY4cHgpe1xyXG4gICAgICAgICAgICAgICAgICAgIC5ib3Rvbl9fZmxvYXRfX3NlYXJjaHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSAgICBcclxuICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufVxyXG4gXHJcbmV4cG9ydCBkZWZhdWx0IEJ1c2NhZG9yOyJdLCJzb3VyY2VSb290IjoiIn0=