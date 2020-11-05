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
    buscador.trim() !== '' ? next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push("/productos?search=".concat(busqueda)) : false;
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
  }, ".boton__float__search.jsx-194702073{position:fixed;top:85%;right:4%;display:block;padding:7px;width:40px;height:40px;text-align:center;border-radius:20px;border:1px solid #FFB347;box-shadow:0px 2px 1px -1px rgba(228,224,224,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12);display:none;}@media(max-width:768px){.boton__float__search.jsx-194702073{display:block;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcZnJhbmNcXERvY3VtZW50c1xcb2xpdmVyLTJcXG9saXZlci1zaXRpb1xcc3JjXFxjb21wb25lbnRzXFxCdXNjYWRvclxcaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0N3QixBQUdvQyxBQWdCRyxjQUNsQixDQWhCUSxRQUNDLFNBQ0ssY0FDRixZQUNELFdBQ0MsWUFDTSxrQkFDQyxtQkFDTSx5QkFDZ0csb0hBQzVHLGFBQ2pCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcZnJhbmNcXERvY3VtZW50c1xcb2xpdmVyLTJcXG9saXZlci1zaXRpb1xcc3JjXFxjb21wb25lbnRzXFxCdXNjYWRvclxcaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3Qse3VzZVN0YXRlfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCBNb2RhbCBmcm9tICcuLi9Nb2RhbC9pbmRleCc7XHJcbmltcG9ydCB7IGZhU2VhcmNoIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29uc1wiO1xyXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tIFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCI7XHJcbmNvbnN0IEJ1c2NhZG9yID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW21vZGFsSXNPcGVuLCBzZXRNb2RhbElzT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbYnVzY2Fkb3IsIHNldEJ1c2NhZG9yXSA9IHVzZVN0YXRlKCcnKTtcclxuXHJcbiAgICBjb25zdCBzaG93TW9kYWxCdXNjYWRvciA9ICgpPT57XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2JvZHknKVswXS5zdHlsZS5vdmVyZmxvd1kgPSAnaGlkZGVuJztcclxuICAgICAgICBzZXRNb2RhbElzT3Blbih0cnVlKVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBjbG9zZU1vZGFsID0gKCk9PntcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYm9keScpWzBdLnN0eWxlLm92ZXJmbG93WSA9ICdzY3JvbGwnO1xyXG4gICAgICAgIHNldE1vZGFsSXNPcGVuKGZhbHNlKVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVDaGFuZ2VCdXNjYWRvciA9IGV2ZW50PT4oXHJcbiAgICAgICAgc2V0QnVzY2Fkb3IoZXZlbnQudGFyZ2V0LnZhbHVlKVxyXG4gICAgKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSBldmVudD0+e1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgKGJ1c2NhZG9yLnRyaW0oKSE9PSAnJyk/Um91dGVyLnB1c2goYC9wcm9kdWN0b3M/c2VhcmNoPSR7YnVzcXVlZGF9YCk6ZmFsc2U7IFxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJib3Rvbl9fZmxvYXRfX3NlYXJjaCBiZy15ZWxsb3dcIiBvbkNsaWNrPXtzaG93TW9kYWxCdXNjYWRvcn0+XHJcbiAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhU2VhcmNofS8+XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICB7KG1vZGFsSXNPcGVuKT9cclxuICAgICAgICAgICAgPE1vZGFsIGNsb3NlTW9kYWw9e2Nsb3NlTW9kYWx9PlxyXG4gICAgICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBtdC00XCIgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCLCv1F1w6kgYW5kYXMgYnVzY2FuZG8/XCIgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZUJ1c2NhZG9yfSByZXF1aXJlZC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiYm90b24gYmcteWVsbG93IG10LTNcIj5CdXNjYXI8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgPC9Nb2RhbD46bnVsbH1cclxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAgICAgLmJvdG9uX19mbG9hdF9fc2VhcmNoe1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IDg1JTtcclxuICAgICAgICAgICAgICAgICAgICByaWdodDogNCU7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogN3B4O1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjRkZCMzQ3O1xyXG4gICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAycHggMXB4IC0xcHggcmdiYSgyMjgsIDIyNCwgMjI0LCAwLjIpLCAwcHggMXB4IDFweCAwcHggcmdiYSgwLDAsMCwwLjE0KSwgMHB4IDFweCAzcHggMHB4IHJnYmEoMCwwLDAsMC4xMik7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBAbWVkaWEobWF4LXdpZHRoOjc2OHB4KXtcclxuICAgICAgICAgICAgICAgICAgICAuYm90b25fX2Zsb2F0X19zZWFyY2h7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gICAgXHJcbiAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn1cclxuIFxyXG5leHBvcnQgZGVmYXVsdCBCdXNjYWRvcjsiXX0= */\n/*@ sourceURL=C:\\\\Users\\\\franc\\\\Documents\\\\oliver-2\\\\oliver-sitio\\\\src\\\\components\\\\Buscador\\\\index.js */"));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQnVzY2Fkb3IvaW5kZXguanMiXSwibmFtZXMiOlsiQnVzY2Fkb3IiLCJ1c2VTdGF0ZSIsIm1vZGFsSXNPcGVuIiwic2V0TW9kYWxJc09wZW4iLCJidXNjYWRvciIsInNldEJ1c2NhZG9yIiwic2hvd01vZGFsQnVzY2Fkb3IiLCJkb2N1bWVudCIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwic3R5bGUiLCJvdmVyZmxvd1kiLCJjbG9zZU1vZGFsIiwiaGFuZGxlQ2hhbmdlQnVzY2Fkb3IiLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJ0cmltIiwiUm91dGVyIiwicHVzaCIsImJ1c3F1ZWRhIiwiZmFTZWFyY2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxHQUFNO0FBQUE7O0FBQUEsa0JBQ21CQyxzREFBUSxDQUFDLEtBQUQsQ0FEM0I7QUFBQSxNQUNaQyxXQURZO0FBQUEsTUFDQ0MsY0FERDs7QUFBQSxtQkFFYUYsc0RBQVEsQ0FBQyxFQUFELENBRnJCO0FBQUEsTUFFWkcsUUFGWTtBQUFBLE1BRUZDLFdBRkU7O0FBSW5CLE1BQU1DLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsR0FBSTtBQUMxQkMsWUFBUSxDQUFDQyxvQkFBVCxDQUE4QixNQUE5QixFQUFzQyxDQUF0QyxFQUF5Q0MsS0FBekMsQ0FBK0NDLFNBQS9DLEdBQTJELFFBQTNEO0FBQ0FQLGtCQUFjLENBQUMsSUFBRCxDQUFkO0FBQ0gsR0FIRDs7QUFLQSxNQUFNUSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFJO0FBQ25CSixZQUFRLENBQUNDLG9CQUFULENBQThCLE1BQTlCLEVBQXNDLENBQXRDLEVBQXlDQyxLQUF6QyxDQUErQ0MsU0FBL0MsR0FBMkQsUUFBM0Q7QUFDQVAsa0JBQWMsQ0FBQyxLQUFELENBQWQ7QUFDSCxHQUhEOztBQUtBLE1BQU1TLG9CQUFvQixHQUFHLFNBQXZCQSxvQkFBdUIsQ0FBQUMsS0FBSztBQUFBLFdBQzlCUixXQUFXLENBQUNRLEtBQUssQ0FBQ0MsTUFBTixDQUFhQyxLQUFkLENBRG1CO0FBQUEsR0FBbEM7O0FBSUEsTUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQUgsS0FBSyxFQUFFO0FBQ3hCQSxTQUFLLENBQUNJLGNBQU47QUFDQ2IsWUFBUSxDQUFDYyxJQUFULE9BQW1CLEVBQXBCLEdBQXdCQyxrREFBTSxDQUFDQyxJQUFQLDZCQUFpQ0MsUUFBakMsRUFBeEIsR0FBcUUsS0FBckU7QUFDSCxHQUhEOztBQUtBLFNBQ0ksbUVBQ0k7QUFBbUQsV0FBTyxFQUFFZixpQkFBNUQ7QUFBQSx1Q0FBa0IsZ0NBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLDhFQUFEO0FBQWlCLFFBQUksRUFBRWdCLDBFQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosQ0FESixFQUlNcEIsV0FBRCxHQUNELE1BQUMsb0RBQUQ7QUFBTyxjQUFVLEVBQUVTLFVBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFrQyxZQUFRLEVBQUVLLFlBQTVDO0FBQUEsdUNBQWdCLGlCQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBTyxRQUFJLEVBQUMsTUFBWjtBQUE0QyxlQUFXLEVBQUMsNEJBQXhEO0FBQStFLFlBQVEsRUFBRUosb0JBQXpGO0FBQStHLFlBQVEsTUFBdkg7QUFBQSx1Q0FBNkIsY0FBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLEVBRUk7QUFBUSxRQUFJLEVBQUMsUUFBYjtBQUFBLHVDQUFnQyxzQkFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZKLENBREosQ0FEQyxHQU1RLElBVmI7QUFBQTtBQUFBO0FBQUEsZzhJQURKO0FBb0NILENBM0REOztHQUFNWixROztLQUFBQSxRO0FBNkRTQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9kdWN0b3MvW1suLi5pbmRleF1dLjc5ZjQ3NTlmOGJkMGQyODNlNDJlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3Qse3VzZVN0YXRlfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCBNb2RhbCBmcm9tICcuLi9Nb2RhbC9pbmRleCc7XHJcbmltcG9ydCB7IGZhU2VhcmNoIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29uc1wiO1xyXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tIFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCI7XHJcbmNvbnN0IEJ1c2NhZG9yID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW21vZGFsSXNPcGVuLCBzZXRNb2RhbElzT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbYnVzY2Fkb3IsIHNldEJ1c2NhZG9yXSA9IHVzZVN0YXRlKCcnKTtcclxuXHJcbiAgICBjb25zdCBzaG93TW9kYWxCdXNjYWRvciA9ICgpPT57XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2JvZHknKVswXS5zdHlsZS5vdmVyZmxvd1kgPSAnaGlkZGVuJztcclxuICAgICAgICBzZXRNb2RhbElzT3Blbih0cnVlKVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBjbG9zZU1vZGFsID0gKCk9PntcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYm9keScpWzBdLnN0eWxlLm92ZXJmbG93WSA9ICdzY3JvbGwnO1xyXG4gICAgICAgIHNldE1vZGFsSXNPcGVuKGZhbHNlKVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVDaGFuZ2VCdXNjYWRvciA9IGV2ZW50PT4oXHJcbiAgICAgICAgc2V0QnVzY2Fkb3IoZXZlbnQudGFyZ2V0LnZhbHVlKVxyXG4gICAgKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSBldmVudD0+e1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgKGJ1c2NhZG9yLnRyaW0oKSE9PSAnJyk/Um91dGVyLnB1c2goYC9wcm9kdWN0b3M/c2VhcmNoPSR7YnVzcXVlZGF9YCk6ZmFsc2U7IFxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJib3Rvbl9fZmxvYXRfX3NlYXJjaCBiZy15ZWxsb3dcIiBvbkNsaWNrPXtzaG93TW9kYWxCdXNjYWRvcn0+XHJcbiAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhU2VhcmNofS8+XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICB7KG1vZGFsSXNPcGVuKT9cclxuICAgICAgICAgICAgPE1vZGFsIGNsb3NlTW9kYWw9e2Nsb3NlTW9kYWx9PlxyXG4gICAgICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBtdC00XCIgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCLCv1F1w6kgYW5kYXMgYnVzY2FuZG8/XCIgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZUJ1c2NhZG9yfSByZXF1aXJlZC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiYm90b24gYmcteWVsbG93IG10LTNcIj5CdXNjYXI8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgPC9Nb2RhbD46bnVsbH1cclxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAgICAgLmJvdG9uX19mbG9hdF9fc2VhcmNoe1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IDg1JTtcclxuICAgICAgICAgICAgICAgICAgICByaWdodDogNCU7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogN3B4O1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjRkZCMzQ3O1xyXG4gICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAycHggMXB4IC0xcHggcmdiYSgyMjgsIDIyNCwgMjI0LCAwLjIpLCAwcHggMXB4IDFweCAwcHggcmdiYSgwLDAsMCwwLjE0KSwgMHB4IDFweCAzcHggMHB4IHJnYmEoMCwwLDAsMC4xMik7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBAbWVkaWEobWF4LXdpZHRoOjc2OHB4KXtcclxuICAgICAgICAgICAgICAgICAgICAuYm90b25fX2Zsb2F0X19zZWFyY2h7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gICAgXHJcbiAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn1cclxuIFxyXG5leHBvcnQgZGVmYXVsdCBCdXNjYWRvcjsiXSwic291cmNlUm9vdCI6IiJ9