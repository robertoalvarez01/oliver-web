webpackHotUpdate_N_E("pages/productos/[[...index]]",{

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
    _jsxFileName = "C:\\Users\\franc\\Documents\\oliver-2\\oliver-sitio\\src\\components\\Buscador\\index.js",
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
    buscador.trim() !== '' ? next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push("/productos?search=".concat(buscador)) : false;
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("button", {
    onClick: showModalBuscador,
    className: "jsx-194702073" + " " + "boton__float__search bg-yellow",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faSearch"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 17
    }
  })), modalIsOpen ? __jsx(_Modal_index__WEBPACK_IMPORTED_MODULE_3__["default"], {
    closeModal: closeModal,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }
  }, __jsx("form", {
    onSubmit: handleSubmit,
    className: "jsx-194702073" + " " + "form-group mt-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
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
      lineNumber: 37,
      columnNumber: 21
    }
  }), __jsx("button", {
    type: "submit",
    className: "jsx-194702073" + " " + "boton bg-yellow mt-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 21
    }
  }, "Buscar"))) : null, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "194702073",
    __self: _this
  }, ".boton__float__search.jsx-194702073{position:fixed;top:85%;right:4%;display:block;padding:7px;width:40px;height:40px;text-align:center;border-radius:20px;border:1px solid #FFB347;box-shadow:0px 2px 1px -1px rgba(228,224,224,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12);display:none;}@media(max-width:768px){.boton__float__search.jsx-194702073{display:block;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcZnJhbmNcXERvY3VtZW50c1xcb2xpdmVyLTJcXG9saXZlci1zaXRpb1xcc3JjXFxjb21wb25lbnRzXFxCdXNjYWRvclxcaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0N3QixBQUdvQyxBQWdCRyxjQUNsQixDQWhCUSxRQUNDLFNBQ0ssY0FDRixZQUNELFdBQ0MsWUFDTSxrQkFDQyxtQkFDTSx5QkFDZ0csb0hBQzVHLGFBQ2pCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcZnJhbmNcXERvY3VtZW50c1xcb2xpdmVyLTJcXG9saXZlci1zaXRpb1xcc3JjXFxjb21wb25lbnRzXFxCdXNjYWRvclxcaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3Qse3VzZVN0YXRlfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCBNb2RhbCBmcm9tICcuLi9Nb2RhbC9pbmRleCc7XHJcbmltcG9ydCB7IGZhU2VhcmNoIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29uc1wiO1xyXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tIFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCI7XHJcbmNvbnN0IEJ1c2NhZG9yID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW21vZGFsSXNPcGVuLCBzZXRNb2RhbElzT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbYnVzY2Fkb3IsIHNldEJ1c2NhZG9yXSA9IHVzZVN0YXRlKCcnKTtcclxuXHJcbiAgICBjb25zdCBzaG93TW9kYWxCdXNjYWRvciA9ICgpPT57XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2JvZHknKVswXS5zdHlsZS5vdmVyZmxvd1kgPSAnaGlkZGVuJztcclxuICAgICAgICBzZXRNb2RhbElzT3Blbih0cnVlKVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBjbG9zZU1vZGFsID0gKCk9PntcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYm9keScpWzBdLnN0eWxlLm92ZXJmbG93WSA9ICdzY3JvbGwnO1xyXG4gICAgICAgIHNldE1vZGFsSXNPcGVuKGZhbHNlKVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVDaGFuZ2VCdXNjYWRvciA9IGV2ZW50PT4oXHJcbiAgICAgICAgc2V0QnVzY2Fkb3IoZXZlbnQudGFyZ2V0LnZhbHVlKVxyXG4gICAgKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSBldmVudD0+e1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgKGJ1c2NhZG9yLnRyaW0oKSE9PSAnJyk/Um91dGVyLnB1c2goYC9wcm9kdWN0b3M/c2VhcmNoPSR7YnVzY2Fkb3J9YCk6ZmFsc2U7IFxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJib3Rvbl9fZmxvYXRfX3NlYXJjaCBiZy15ZWxsb3dcIiBvbkNsaWNrPXtzaG93TW9kYWxCdXNjYWRvcn0+XHJcbiAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhU2VhcmNofS8+XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICB7KG1vZGFsSXNPcGVuKT9cclxuICAgICAgICAgICAgPE1vZGFsIGNsb3NlTW9kYWw9e2Nsb3NlTW9kYWx9PlxyXG4gICAgICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBtdC00XCIgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCLCv1F1w6kgYW5kYXMgYnVzY2FuZG8/XCIgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZUJ1c2NhZG9yfSByZXF1aXJlZC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiYm90b24gYmcteWVsbG93IG10LTNcIj5CdXNjYXI8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgPC9Nb2RhbD46bnVsbH1cclxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAgICAgLmJvdG9uX19mbG9hdF9fc2VhcmNoe1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IDg1JTtcclxuICAgICAgICAgICAgICAgICAgICByaWdodDogNCU7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogN3B4O1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjRkZCMzQ3O1xyXG4gICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAycHggMXB4IC0xcHggcmdiYSgyMjgsIDIyNCwgMjI0LCAwLjIpLCAwcHggMXB4IDFweCAwcHggcmdiYSgwLDAsMCwwLjE0KSwgMHB4IDFweCAzcHggMHB4IHJnYmEoMCwwLDAsMC4xMik7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBAbWVkaWEobWF4LXdpZHRoOjc2OHB4KXtcclxuICAgICAgICAgICAgICAgICAgICAuYm90b25fX2Zsb2F0X19zZWFyY2h7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gICAgXHJcbiAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn1cclxuIFxyXG5leHBvcnQgZGVmYXVsdCBCdXNjYWRvcjsiXX0= */\n/*@ sourceURL=C:\\\\Users\\\\franc\\\\Documents\\\\oliver-2\\\\oliver-sitio\\\\src\\\\components\\\\Buscador\\\\index.js */"));
};

_s(Buscador, "eelBLKQ5q3zMTFDiOal4yZR46ec=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQnVzY2Fkb3IvaW5kZXguanMiXSwibmFtZXMiOlsiQnVzY2Fkb3IiLCJ1c2VTdGF0ZSIsIm1vZGFsSXNPcGVuIiwic2V0TW9kYWxJc09wZW4iLCJidXNjYWRvciIsInNldEJ1c2NhZG9yIiwic2hvd01vZGFsQnVzY2Fkb3IiLCJkb2N1bWVudCIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwic3R5bGUiLCJvdmVyZmxvd1kiLCJjbG9zZU1vZGFsIiwiaGFuZGxlQ2hhbmdlQnVzY2Fkb3IiLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJ0cmltIiwiUm91dGVyIiwicHVzaCIsImZhU2VhcmNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUFBOztBQUFBLGtCQUNtQkMsc0RBQVEsQ0FBQyxLQUFELENBRDNCO0FBQUEsTUFDWkMsV0FEWTtBQUFBLE1BQ0NDLGNBREQ7O0FBQUEsbUJBRWFGLHNEQUFRLENBQUMsRUFBRCxDQUZyQjtBQUFBLE1BRVpHLFFBRlk7QUFBQSxNQUVGQyxXQUZFOztBQUluQixNQUFNQyxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLEdBQUk7QUFDMUJDLFlBQVEsQ0FBQ0Msb0JBQVQsQ0FBOEIsTUFBOUIsRUFBc0MsQ0FBdEMsRUFBeUNDLEtBQXpDLENBQStDQyxTQUEvQyxHQUEyRCxRQUEzRDtBQUNBUCxrQkFBYyxDQUFDLElBQUQsQ0FBZDtBQUNILEdBSEQ7O0FBS0EsTUFBTVEsVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBSTtBQUNuQkosWUFBUSxDQUFDQyxvQkFBVCxDQUE4QixNQUE5QixFQUFzQyxDQUF0QyxFQUF5Q0MsS0FBekMsQ0FBK0NDLFNBQS9DLEdBQTJELFFBQTNEO0FBQ0FQLGtCQUFjLENBQUMsS0FBRCxDQUFkO0FBQ0gsR0FIRDs7QUFLQSxNQUFNUyxvQkFBb0IsR0FBRyxTQUF2QkEsb0JBQXVCLENBQUFDLEtBQUs7QUFBQSxXQUM5QlIsV0FBVyxDQUFDUSxLQUFLLENBQUNDLE1BQU4sQ0FBYUMsS0FBZCxDQURtQjtBQUFBLEdBQWxDOztBQUlBLE1BQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUFILEtBQUssRUFBRTtBQUN4QkEsU0FBSyxDQUFDSSxjQUFOO0FBQ0NiLFlBQVEsQ0FBQ2MsSUFBVCxPQUFtQixFQUFwQixHQUF3QkMsa0RBQU0sQ0FBQ0MsSUFBUCw2QkFBaUNoQixRQUFqQyxFQUF4QixHQUFxRSxLQUFyRTtBQUNILEdBSEQ7O0FBS0EsU0FDSSxtRUFDSTtBQUFtRCxXQUFPLEVBQUVFLGlCQUE1RDtBQUFBLHVDQUFrQixnQ0FBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsOEVBQUQ7QUFBaUIsUUFBSSxFQUFFZSwwRUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLENBREosRUFJTW5CLFdBQUQsR0FDRCxNQUFDLG9EQUFEO0FBQU8sY0FBVSxFQUFFUyxVQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBa0MsWUFBUSxFQUFFSyxZQUE1QztBQUFBLHVDQUFnQixpQkFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQU8sUUFBSSxFQUFDLE1BQVo7QUFBNEMsZUFBVyxFQUFDLDRCQUF4RDtBQUErRSxZQUFRLEVBQUVKLG9CQUF6RjtBQUErRyxZQUFRLE1BQXZIO0FBQUEsdUNBQTZCLGNBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixFQUVJO0FBQVEsUUFBSSxFQUFDLFFBQWI7QUFBQSx1Q0FBZ0Msc0JBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGSixDQURKLENBREMsR0FNUSxJQVZiO0FBQUE7QUFBQTtBQUFBLGc4SUFESjtBQW9DSCxDQTNERDs7R0FBTVosUTs7S0FBQUEsUTtBQTZEU0EsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvZHVjdG9zL1tbLi4uaW5kZXhdXS42OGZmYTZkZTdiYTZhZWE2YTFhZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgTW9kYWwgZnJvbSAnLi4vTW9kYWwvaW5kZXgnO1xyXG5pbXBvcnQgeyBmYVNlYXJjaCB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnNcIjtcclxuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiO1xyXG5jb25zdCBCdXNjYWRvciA9ICgpID0+IHtcclxuICAgIGNvbnN0IFttb2RhbElzT3Blbiwgc2V0TW9kYWxJc09wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW2J1c2NhZG9yLCBzZXRCdXNjYWRvcl0gPSB1c2VTdGF0ZSgnJyk7XHJcblxyXG4gICAgY29uc3Qgc2hvd01vZGFsQnVzY2Fkb3IgPSAoKT0+e1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdib2R5JylbMF0uc3R5bGUub3ZlcmZsb3dZID0gJ2hpZGRlbic7XHJcbiAgICAgICAgc2V0TW9kYWxJc09wZW4odHJ1ZSlcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgY2xvc2VNb2RhbCA9ICgpPT57XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2JvZHknKVswXS5zdHlsZS5vdmVyZmxvd1kgPSAnc2Nyb2xsJztcclxuICAgICAgICBzZXRNb2RhbElzT3BlbihmYWxzZSlcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlQnVzY2Fkb3IgPSBldmVudD0+KFxyXG4gICAgICAgIHNldEJ1c2NhZG9yKGV2ZW50LnRhcmdldC52YWx1ZSlcclxuICAgICk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlU3VibWl0ID0gZXZlbnQ9PntcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIChidXNjYWRvci50cmltKCkhPT0gJycpP1JvdXRlci5wdXNoKGAvcHJvZHVjdG9zP3NlYXJjaD0ke2J1c2NhZG9yfWApOmZhbHNlOyBcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYm90b25fX2Zsb2F0X19zZWFyY2ggYmcteWVsbG93XCIgb25DbGljaz17c2hvd01vZGFsQnVzY2Fkb3J9PlxyXG4gICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVNlYXJjaH0vPlxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgeyhtb2RhbElzT3Blbik/XHJcbiAgICAgICAgICAgIDxNb2RhbCBjbG9zZU1vZGFsPXtjbG9zZU1vZGFsfT5cclxuICAgICAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgbXQtNFwiIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwiwr9RdcOpIGFuZGFzIGJ1c2NhbmRvP1wiIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2VCdXNjYWRvcn0gcmVxdWlyZWQvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImJvdG9uIGJnLXllbGxvdyBtdC0zXCI+QnVzY2FyPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgIDwvTW9kYWw+Om51bGx9XHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgICAgIC5ib3Rvbl9fZmxvYXRfX3NlYXJjaHtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiA4NSU7XHJcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDQlO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDdweDtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNDBweDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI0ZGQjM0NztcclxuICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMnB4IDFweCAtMXB4IHJnYmEoMjI4LCAyMjQsIDIyNCwgMC4yKSwgMHB4IDFweCAxcHggMHB4IHJnYmEoMCwwLDAsMC4xNCksIDBweCAxcHggM3B4IDBweCByZ2JhKDAsMCwwLDAuMTIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgQG1lZGlhKG1heC13aWR0aDo3NjhweCl7XHJcbiAgICAgICAgICAgICAgICAgICAgLmJvdG9uX19mbG9hdF9fc2VhcmNoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9ICAgIFxyXG4gICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59XHJcbiBcclxuZXhwb3J0IGRlZmF1bHQgQnVzY2Fkb3I7Il0sInNvdXJjZVJvb3QiOiIifQ==