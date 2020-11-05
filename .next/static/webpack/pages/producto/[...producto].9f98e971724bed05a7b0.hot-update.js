webpackHotUpdate_N_E("pages/producto/[...producto]",{

/***/ "./src/components/ProductoSingle/infoProducto.js":
/*!*******************************************************!*\
  !*** ./src/components/ProductoSingle/infoProducto.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _infoProducto_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./infoProducto.module.css */ "./src/components/ProductoSingle/infoProducto.module.css");
/* harmony import */ var _infoProducto_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_infoProducto_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _helpers_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../helpers/index */ "./helpers/index.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\franc\\Documents\\oliver-2\\oliver-sitio\\src\\components\\ProductoSingle\\infoProducto.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






var InfoProducto = function InfoProducto(props) {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('1'),
      activeTab = _useState[0],
      setActiveTab = _useState[1];

  var toggle = function toggle(tab) {
    if (activeTab !== tab) setActiveTab(tab);
  };

  var renderInfoNutricional = function renderInfoNutricional(txt) {
    var text = document.createTextNode('<htmltag/>');
    text.textContent(txt);
    return text;
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("section", {
    className: _infoProducto_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.detalles__producto,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 17
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Nav"], {
    tabs: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 21
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["NavItem"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 25
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()({
      active: activeTab === '1'
    }),
    onClick: function onClick() {
      toggle('1');
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 25
    }
  }, "Descripci\xF3n")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["NavItem"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 25
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()({
      active: activeTab === '2'
    }),
    onClick: function onClick() {
      toggle('2');
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 25
    }
  }, "Informaci\xF3n nutricional")))), __jsx("div", {
    style: {
      backgroundColor: 'white'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "container pt-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 21
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["TabContent"], {
    activeTab: activeTab,
    className: _infoProducto_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.sub__container,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 25
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["TabPane"], {
    tabId: "1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 29
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 29
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    sm: "12",
    className: _infoProducto_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.p,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 33
    }
  }, props.descripcion_basica))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["TabPane"], {
    tabId: "2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 29
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 29
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    sm: "12",
    className: _infoProducto_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.p,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 33
    }
  }, renderInfoNutricional(props.descripcion)))))))));
};

_s(InfoProducto, "BE9kdjGAtFUkGbzn/t+3EN/WAWQ=");

_c = InfoProducto;
/* harmony default export */ __webpack_exports__["default"] = (InfoProducto);

var _c;

$RefreshReg$(_c, "InfoProducto");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUHJvZHVjdG9TaW5nbGUvaW5mb1Byb2R1Y3RvLmpzIl0sIm5hbWVzIjpbIkluZm9Qcm9kdWN0byIsInByb3BzIiwidXNlU3RhdGUiLCJhY3RpdmVUYWIiLCJzZXRBY3RpdmVUYWIiLCJ0b2dnbGUiLCJ0YWIiLCJyZW5kZXJJbmZvTnV0cmljaW9uYWwiLCJ0eHQiLCJ0ZXh0IiwiZG9jdW1lbnQiLCJjcmVhdGVUZXh0Tm9kZSIsInRleHRDb250ZW50IiwiSW5mb1N0eWxlIiwiZGV0YWxsZXNfX3Byb2R1Y3RvIiwiY2xhc3NuYW1lcyIsImFjdGl2ZSIsImJhY2tncm91bmRDb2xvciIsInN1Yl9fY29udGFpbmVyIiwicCIsImRlc2NyaXBjaW9uX2Jhc2ljYSIsImRlc2NyaXBjaW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLEtBQUQsRUFBVztBQUFBOztBQUFBLGtCQUNNQyxzREFBUSxDQUFDLEdBQUQsQ0FEZDtBQUFBLE1BQ3JCQyxTQURxQjtBQUFBLE1BQ1ZDLFlBRFU7O0FBRzVCLE1BQU1DLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQUFDLEdBQUcsRUFBSTtBQUNsQixRQUFHSCxTQUFTLEtBQUtHLEdBQWpCLEVBQXNCRixZQUFZLENBQUNFLEdBQUQsQ0FBWjtBQUN6QixHQUZEOztBQUlBLE1BQU1DLHFCQUFxQixHQUFHLFNBQXhCQSxxQkFBd0IsQ0FBQ0MsR0FBRCxFQUFPO0FBQ2pDLFFBQUlDLElBQUksR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLFlBQXhCLENBQVg7QUFDQUYsUUFBSSxDQUFDRyxXQUFMLENBQWlCSixHQUFqQjtBQUNBLFdBQU9DLElBQVA7QUFDSCxHQUpEOztBQU1BLFNBQ0ksbUVBQ0k7QUFBUyxhQUFTLEVBQUVJLCtEQUFTLENBQUNDLGtCQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxhQUFTLEVBQUMsV0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyw4Q0FBRDtBQUFLLFFBQUksTUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0EsTUFBQyxrREFBRDtBQUNJLGFBQVMsRUFBRUMsaURBQVUsQ0FBQztBQUFFQyxZQUFNLEVBQUViLFNBQVMsS0FBSztBQUF4QixLQUFELENBRHpCO0FBRUksV0FBTyxFQUFFLG1CQUFNO0FBQUVFLFlBQU0sQ0FBQyxHQUFELENBQU47QUFBYyxLQUZuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQURBLENBREosRUFTSSxNQUFDLGtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQSxNQUFDLGtEQUFEO0FBQ0ksYUFBUyxFQUFFVSxpREFBVSxDQUFDO0FBQUVDLFlBQU0sRUFBRWIsU0FBUyxLQUFLO0FBQXhCLEtBQUQsQ0FEekI7QUFFSSxXQUFPLEVBQUUsbUJBQU07QUFBRUUsWUFBTSxDQUFDLEdBQUQsQ0FBTjtBQUFhLEtBRmxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0NBREEsQ0FUSixDQURKLENBREosRUFxQkk7QUFBSyxTQUFLLEVBQUU7QUFBQ1kscUJBQWUsRUFBQztBQUFqQixLQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLGFBQVMsRUFBQyxnQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxxREFBRDtBQUFZLGFBQVMsRUFBRWQsU0FBdkI7QUFBa0MsYUFBUyxFQUFFVSwrREFBUyxDQUFDSyxjQUF2RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxrREFBRDtBQUFTLFNBQUssRUFBQyxHQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQSxNQUFDLDhDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLDhDQUFEO0FBQUssTUFBRSxFQUFDLElBQVI7QUFBYSxhQUFTLEVBQUVMLCtEQUFTLENBQUNNLENBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDS2xCLEtBQUssQ0FBQ21CLGtCQURYLENBREosQ0FEQSxDQURKLEVBUUksTUFBQyxrREFBRDtBQUFTLFNBQUssRUFBQyxHQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQSxNQUFDLDhDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLDhDQUFEO0FBQUssTUFBRSxFQUFDLElBQVI7QUFBYSxhQUFTLEVBQUVQLCtEQUFTLENBQUNNLENBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDS1oscUJBQXFCLENBQUNOLEtBQUssQ0FBQ29CLFdBQVAsQ0FEMUIsQ0FESixDQURBLENBUkosQ0FESixDQURKLENBckJKLENBREosQ0FESjtBQThDSCxDQTNERDs7R0FBTXJCLFk7O0tBQUFBLFk7QUE2RFNBLDJFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2R1Y3RvL1suLi5wcm9kdWN0b10uOWY5OGU5NzE3MjRiZWQwNWE3YjAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCx7dXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgVGFiQ29udGVudCwgVGFiUGFuZSwgTmF2LCBOYXZJdGVtLCBOYXZMaW5rLCBDYXJkLCBCdXR0b24sIENhcmRUaXRsZSwgQ2FyZFRleHQsIFJvdywgQ29sIH0gZnJvbSAncmVhY3RzdHJhcCc7XHJcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xyXG5pbXBvcnQgSW5mb1N0eWxlIGZyb20gJy4vaW5mb1Byb2R1Y3RvLm1vZHVsZS5jc3MnXHJcbmltcG9ydCB7ZGVzY29kaWZpY2FyRW50aWRhZH0gZnJvbSAnLi4vLi4vLi4vaGVscGVycy9pbmRleCc7XHJcblxyXG5jb25zdCBJbmZvUHJvZHVjdG8gPSAocHJvcHMpID0+IHtcclxuICAgIGNvbnN0IFthY3RpdmVUYWIsIHNldEFjdGl2ZVRhYl0gPSB1c2VTdGF0ZSgnMScpO1xyXG5cclxuICAgIGNvbnN0IHRvZ2dsZSA9IHRhYiA9PiB7XHJcbiAgICAgICAgaWYoYWN0aXZlVGFiICE9PSB0YWIpIHNldEFjdGl2ZVRhYih0YWIpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHJlbmRlckluZm9OdXRyaWNpb25hbCA9ICh0eHQpPT57XHJcbiAgICAgICAgdmFyIHRleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnPGh0bWx0YWcvPicpO1xyXG4gICAgICAgIHRleHQudGV4dENvbnRlbnQodHh0KTtcclxuICAgICAgICByZXR1cm4gdGV4dDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17SW5mb1N0eWxlLmRldGFsbGVzX19wcm9kdWN0b30+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiID5cclxuICAgICAgICAgICAgICAgICAgICA8TmF2IHRhYnM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TmF2TGlua1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKHsgYWN0aXZlOiBhY3RpdmVUYWIgPT09ICcxJyB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHsgdG9nZ2xlKCcxJyk7IH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIERlc2NyaXBjacOzblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L05hdkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZMaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoeyBhY3RpdmU6IGFjdGl2ZVRhYiA9PT0gJzInIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4geyB0b2dnbGUoJzInKTt9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbmZvcm1hY2nDs24gbnV0cmljaW9uYWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXZMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L05hdkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9OYXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6J3doaXRlJ319PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIHB0LTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRhYkNvbnRlbnQgYWN0aXZlVGFiPXthY3RpdmVUYWJ9IGNsYXNzTmFtZT17SW5mb1N0eWxlLnN1Yl9fY29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJQYW5lIHRhYklkPVwiMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sIHNtPVwiMTJcIiBjbGFzc05hbWU9e0luZm9TdHlsZS5wfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Byb3BzLmRlc2NyaXBjaW9uX2Jhc2ljYX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJQYW5lPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYlBhbmUgdGFiSWQ9XCIyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgc209XCIxMlwiIGNsYXNzTmFtZT17SW5mb1N0eWxlLnB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cmVuZGVySW5mb051dHJpY2lvbmFsKHByb3BzLmRlc2NyaXBjaW9uKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJQYW5lPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1RhYkNvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufVxyXG4gXHJcbmV4cG9ydCBkZWZhdWx0IEluZm9Qcm9kdWN0bzsiXSwic291cmNlUm9vdCI6IiJ9