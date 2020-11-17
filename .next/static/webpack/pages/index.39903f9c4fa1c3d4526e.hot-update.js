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
    console.log(buscador);
    if (buscador.trim() !== '') return false;

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
      lineNumber: 36,
      columnNumber: 13
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faSearch"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 17
    }
  })), modalIsOpen ? __jsx(_Modal_index__WEBPACK_IMPORTED_MODULE_3__["default"], {
    closeModal: closeModal,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }
  }, __jsx("form", {
    onSubmit: handleSubmit,
    className: "jsx-194702073" + " " + "form-group mt-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
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
      lineNumber: 42,
      columnNumber: 21
    }
  }), __jsx("button", {
    type: "submit",
    className: "jsx-194702073" + " " + "boton bg-yellow mt-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 21
    }
  }, "Buscar"))) : null, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "194702073",
    __self: _this
  }, ".boton__float__search.jsx-194702073{position:fixed;top:85%;right:4%;display:block;padding:7px;width:40px;height:40px;text-align:center;border-radius:20px;border:1px solid #FFB347;box-shadow:0px 2px 1px -1px rgba(228,224,224,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12);display:none;}@media(max-width:768px){.boton__float__search.jsx-194702073{display:block;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcZnJhbmNcXERvY3VtZW50c1xcb2xpdmVyLTJcXHNpdGlvLWRlc2FcXHNyY1xcY29tcG9uZW50c1xcQnVzY2Fkb3JcXGluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZDd0IsQUFHb0MsQUFnQkcsY0FDbEIsQ0FoQlEsUUFDQyxTQUNLLGNBQ0YsWUFDRCxXQUNDLFlBQ00sa0JBQ0MsbUJBQ00seUJBQ2dHLG9IQUM1RyxhQUNqQiIsImZpbGUiOiJDOlxcVXNlcnNcXGZyYW5jXFxEb2N1bWVudHNcXG9saXZlci0yXFxzaXRpby1kZXNhXFxzcmNcXGNvbXBvbmVudHNcXEJ1c2NhZG9yXFxpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCx7dXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFJvdXRlcix7dXNlUm91dGVyfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IE1vZGFsIGZyb20gJy4uL01vZGFsL2luZGV4JztcclxuaW1wb3J0IHsgZmFTZWFyY2ggfSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCI7XHJcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIjtcclxuY29uc3QgQnVzY2Fkb3IgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbbW9kYWxJc09wZW4sIHNldE1vZGFsSXNPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtidXNjYWRvciwgc2V0QnVzY2Fkb3JdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgbG9jYXRpb24gPSB1c2VSb3V0ZXIoKTtcclxuICAgIGNvbnN0IHNob3dNb2RhbEJ1c2NhZG9yID0gKCk9PntcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYm9keScpWzBdLnN0eWxlLm92ZXJmbG93WSA9ICdoaWRkZW4nO1xyXG4gICAgICAgIHNldE1vZGFsSXNPcGVuKHRydWUpXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGNsb3NlTW9kYWwgPSAoKT0+e1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdib2R5JylbMF0uc3R5bGUub3ZlcmZsb3dZID0gJ3Njcm9sbCc7XHJcbiAgICAgICAgc2V0TW9kYWxJc09wZW4oZmFsc2UpXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZUJ1c2NhZG9yID0gZXZlbnQ9PihcclxuICAgICAgICBzZXRCdXNjYWRvcihldmVudC50YXJnZXQudmFsdWUpXHJcbiAgICApO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGV2ZW50PT57XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhidXNjYWRvcik7XHJcbiAgICAgICAgaWYoYnVzY2Fkb3IudHJpbSgpIT09ICcnKXJldHVybiBmYWxzZTsgXHJcbiAgICAgICAgaWYobG9jYXRpb24ucGF0aG5hbWUgPT0gJy8nKXtcclxuICAgICAgICAgICAgcmV0dXJuIFJvdXRlci5wdXNoKGAvcHJvZHVjdG9zP3NlYXJjaD0ke2J1c3F1ZWRhfWApO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gd2luZG93LmxvY2F0aW9uLmFzc2lnbihgL3Byb2R1Y3Rvcz9zZWFyY2g9JHtidXNxdWVkYX1gKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYm90b25fX2Zsb2F0X19zZWFyY2ggYmcteWVsbG93XCIgb25DbGljaz17c2hvd01vZGFsQnVzY2Fkb3J9PlxyXG4gICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVNlYXJjaH0vPlxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgeyhtb2RhbElzT3Blbik/XHJcbiAgICAgICAgICAgIDxNb2RhbCBjbG9zZU1vZGFsPXtjbG9zZU1vZGFsfT5cclxuICAgICAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgbXQtNFwiIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwiwr9RdcOpIGFuZGFzIGJ1c2NhbmRvP1wiIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2VCdXNjYWRvcn0gcmVxdWlyZWQvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImJvdG9uIGJnLXllbGxvdyBtdC0zXCI+QnVzY2FyPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgIDwvTW9kYWw+Om51bGx9XHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgICAgIC5ib3Rvbl9fZmxvYXRfX3NlYXJjaHtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiA4NSU7XHJcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDQlO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDdweDtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNDBweDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI0ZGQjM0NztcclxuICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMnB4IDFweCAtMXB4IHJnYmEoMjI4LCAyMjQsIDIyNCwgMC4yKSwgMHB4IDFweCAxcHggMHB4IHJnYmEoMCwwLDAsMC4xNCksIDBweCAxcHggM3B4IDBweCByZ2JhKDAsMCwwLDAuMTIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgQG1lZGlhKG1heC13aWR0aDo3NjhweCl7XHJcbiAgICAgICAgICAgICAgICAgICAgLmJvdG9uX19mbG9hdF9fc2VhcmNoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9ICAgIFxyXG4gICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59XHJcbiBcclxuZXhwb3J0IGRlZmF1bHQgQnVzY2Fkb3I7Il19 */\n/*@ sourceURL=C:\\\\Users\\\\franc\\\\Documents\\\\oliver-2\\\\sitio-desa\\\\src\\\\components\\\\Buscador\\\\index.js */"));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQnVzY2Fkb3IvaW5kZXguanMiXSwibmFtZXMiOlsiQnVzY2Fkb3IiLCJ1c2VTdGF0ZSIsIm1vZGFsSXNPcGVuIiwic2V0TW9kYWxJc09wZW4iLCJidXNjYWRvciIsInNldEJ1c2NhZG9yIiwibG9jYXRpb24iLCJ1c2VSb3V0ZXIiLCJzaG93TW9kYWxCdXNjYWRvciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJzdHlsZSIsIm92ZXJmbG93WSIsImNsb3NlTW9kYWwiLCJoYW5kbGVDaGFuZ2VCdXNjYWRvciIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsImNvbnNvbGUiLCJsb2ciLCJ0cmltIiwicGF0aG5hbWUiLCJSb3V0ZXIiLCJwdXNoIiwiYnVzcXVlZGEiLCJ3aW5kb3ciLCJhc3NpZ24iLCJmYVNlYXJjaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQU07QUFBQTs7QUFBQSxrQkFDbUJDLHNEQUFRLENBQUMsS0FBRCxDQUQzQjtBQUFBLE1BQ1pDLFdBRFk7QUFBQSxNQUNDQyxjQUREOztBQUFBLG1CQUVhRixzREFBUSxDQUFDLEVBQUQsQ0FGckI7QUFBQSxNQUVaRyxRQUZZO0FBQUEsTUFFRkMsV0FGRTs7QUFHbkIsTUFBTUMsUUFBUSxHQUFHQyw2REFBUyxFQUExQjs7QUFDQSxNQUFNQyxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLEdBQUk7QUFDMUJDLFlBQVEsQ0FBQ0Msb0JBQVQsQ0FBOEIsTUFBOUIsRUFBc0MsQ0FBdEMsRUFBeUNDLEtBQXpDLENBQStDQyxTQUEvQyxHQUEyRCxRQUEzRDtBQUNBVCxrQkFBYyxDQUFDLElBQUQsQ0FBZDtBQUNILEdBSEQ7O0FBS0EsTUFBTVUsVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBSTtBQUNuQkosWUFBUSxDQUFDQyxvQkFBVCxDQUE4QixNQUE5QixFQUFzQyxDQUF0QyxFQUF5Q0MsS0FBekMsQ0FBK0NDLFNBQS9DLEdBQTJELFFBQTNEO0FBQ0FULGtCQUFjLENBQUMsS0FBRCxDQUFkO0FBQ0gsR0FIRDs7QUFLQSxNQUFNVyxvQkFBb0IsR0FBRyxTQUF2QkEsb0JBQXVCLENBQUFDLEtBQUs7QUFBQSxXQUM5QlYsV0FBVyxDQUFDVSxLQUFLLENBQUNDLE1BQU4sQ0FBYUMsS0FBZCxDQURtQjtBQUFBLEdBQWxDOztBQUlBLE1BQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUFILEtBQUssRUFBRTtBQUN4QkEsU0FBSyxDQUFDSSxjQUFOO0FBQ0FDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZakIsUUFBWjtBQUNBLFFBQUdBLFFBQVEsQ0FBQ2tCLElBQVQsT0FBbUIsRUFBdEIsRUFBeUIsT0FBTyxLQUFQOztBQUN6QixRQUFHaEIsUUFBUSxDQUFDaUIsUUFBVCxJQUFxQixHQUF4QixFQUE0QjtBQUN4QixhQUFPQyxrREFBTSxDQUFDQyxJQUFQLDZCQUFpQ0MsUUFBakMsRUFBUDtBQUNIOztBQUNELFdBQU9DLE1BQU0sQ0FBQ3JCLFFBQVAsQ0FBZ0JzQixNQUFoQiw2QkFBNENGLFFBQTVDLEVBQVA7QUFDSCxHQVJEOztBQVVBLFNBQ0ksbUVBQ0k7QUFBbUQsV0FBTyxFQUFFbEIsaUJBQTVEO0FBQUEsdUNBQWtCLGdDQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyw4RUFBRDtBQUFpQixRQUFJLEVBQUVxQiwwRUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLENBREosRUFJTTNCLFdBQUQsR0FDRCxNQUFDLG9EQUFEO0FBQU8sY0FBVSxFQUFFVyxVQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBa0MsWUFBUSxFQUFFSyxZQUE1QztBQUFBLHVDQUFnQixpQkFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQU8sUUFBSSxFQUFDLE1BQVo7QUFBNEMsZUFBVyxFQUFDLDRCQUF4RDtBQUErRSxZQUFRLEVBQUVKLG9CQUF6RjtBQUErRyxZQUFRLE1BQXZIO0FBQUEsdUNBQTZCLGNBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixFQUVJO0FBQVEsUUFBSSxFQUFDLFFBQWI7QUFBQSx1Q0FBZ0Msc0JBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGSixDQURKLENBREMsR0FNUSxJQVZiO0FBQUE7QUFBQTtBQUFBLHN2SkFESjtBQW9DSCxDQWhFRDs7R0FBTWQsUTtVQUdlTyxxRDs7O0tBSGZQLFE7QUFrRVNBLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjM5OTAzZjljNGZhMWMzZDQ1MjZlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3Qse3VzZVN0YXRlfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBSb3V0ZXIse3VzZVJvdXRlcn0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCBNb2RhbCBmcm9tICcuLi9Nb2RhbC9pbmRleCc7XHJcbmltcG9ydCB7IGZhU2VhcmNoIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29uc1wiO1xyXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tIFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCI7XHJcbmNvbnN0IEJ1c2NhZG9yID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW21vZGFsSXNPcGVuLCBzZXRNb2RhbElzT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbYnVzY2Fkb3IsIHNldEJ1c2NhZG9yXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IGxvY2F0aW9uID0gdXNlUm91dGVyKCk7XHJcbiAgICBjb25zdCBzaG93TW9kYWxCdXNjYWRvciA9ICgpPT57XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2JvZHknKVswXS5zdHlsZS5vdmVyZmxvd1kgPSAnaGlkZGVuJztcclxuICAgICAgICBzZXRNb2RhbElzT3Blbih0cnVlKVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBjbG9zZU1vZGFsID0gKCk9PntcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYm9keScpWzBdLnN0eWxlLm92ZXJmbG93WSA9ICdzY3JvbGwnO1xyXG4gICAgICAgIHNldE1vZGFsSXNPcGVuKGZhbHNlKVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVDaGFuZ2VCdXNjYWRvciA9IGV2ZW50PT4oXHJcbiAgICAgICAgc2V0QnVzY2Fkb3IoZXZlbnQudGFyZ2V0LnZhbHVlKVxyXG4gICAgKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSBldmVudD0+e1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coYnVzY2Fkb3IpO1xyXG4gICAgICAgIGlmKGJ1c2NhZG9yLnRyaW0oKSE9PSAnJylyZXR1cm4gZmFsc2U7IFxyXG4gICAgICAgIGlmKGxvY2F0aW9uLnBhdGhuYW1lID09ICcvJyl7XHJcbiAgICAgICAgICAgIHJldHVybiBSb3V0ZXIucHVzaChgL3Byb2R1Y3Rvcz9zZWFyY2g9JHtidXNxdWVkYX1gKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHdpbmRvdy5sb2NhdGlvbi5hc3NpZ24oYC9wcm9kdWN0b3M/c2VhcmNoPSR7YnVzcXVlZGF9YCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJvdG9uX19mbG9hdF9fc2VhcmNoIGJnLXllbGxvd1wiIG9uQ2xpY2s9e3Nob3dNb2RhbEJ1c2NhZG9yfT5cclxuICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFTZWFyY2h9Lz5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIHsobW9kYWxJc09wZW4pP1xyXG4gICAgICAgICAgICA8TW9kYWwgY2xvc2VNb2RhbD17Y2xvc2VNb2RhbH0+XHJcbiAgICAgICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIG10LTRcIiBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cIsK/UXXDqSBhbmRhcyBidXNjYW5kbz9cIiBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlQnVzY2Fkb3J9IHJlcXVpcmVkLz5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJib3RvbiBiZy15ZWxsb3cgbXQtM1wiPkJ1c2NhcjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICA8L01vZGFsPjpudWxsfVxyXG4gICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICAgICAuYm90b25fX2Zsb2F0X19zZWFyY2h7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogODUlO1xyXG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0OiA0JTtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA3cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDQwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNGRkIzNDc7XHJcbiAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDJweCAxcHggLTFweCByZ2JhKDIyOCwgMjI0LCAyMjQsIDAuMiksIDBweCAxcHggMXB4IDBweCByZ2JhKDAsMCwwLDAuMTQpLCAwcHggMXB4IDNweCAwcHggcmdiYSgwLDAsMCwwLjEyKTtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIEBtZWRpYShtYXgtd2lkdGg6NzY4cHgpe1xyXG4gICAgICAgICAgICAgICAgICAgIC5ib3Rvbl9fZmxvYXRfX3NlYXJjaHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSAgICBcclxuICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufVxyXG4gXHJcbmV4cG9ydCBkZWZhdWx0IEJ1c2NhZG9yOyJdLCJzb3VyY2VSb290IjoiIn0=