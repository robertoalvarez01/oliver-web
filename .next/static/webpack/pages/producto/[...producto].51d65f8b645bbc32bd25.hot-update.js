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

  var renderInfoNutricional = function renderInfoNutricional() {
    var descripcion = document.querySelector(".".concat(_infoProducto_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.p));
    console.log(descripcion);
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("section", {
    className: _infoProducto_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.detalles__producto,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 17
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Nav"], {
    tabs: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 21
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["NavItem"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
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
      lineNumber: 23,
      columnNumber: 25
    }
  }, "Descripci\xF3n")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["NavItem"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
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
      lineNumber: 31,
      columnNumber: 25
    }
  }, "Informaci\xF3n nutricional")))), __jsx("div", {
    style: {
      backgroundColor: 'white'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "container pt-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 21
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["TabContent"], {
    activeTab: activeTab,
    className: _infoProducto_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.sub__container,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 25
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["TabPane"], {
    tabId: "1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 29
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 29
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    sm: "12",
    className: _infoProducto_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.p,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 33
    }
  }, props.descripcion_basica))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["TabPane"], {
    tabId: "2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 29
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 29
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    sm: "12",
    className: _infoProducto_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.p,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 33
    }
  }, props.descripcion, renderInfoNutricional))))))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUHJvZHVjdG9TaW5nbGUvaW5mb1Byb2R1Y3RvLmpzIl0sIm5hbWVzIjpbIkluZm9Qcm9kdWN0byIsInByb3BzIiwidXNlU3RhdGUiLCJhY3RpdmVUYWIiLCJzZXRBY3RpdmVUYWIiLCJ0b2dnbGUiLCJ0YWIiLCJyZW5kZXJJbmZvTnV0cmljaW9uYWwiLCJkZXNjcmlwY2lvbiIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIkluZm9TdHlsZSIsInAiLCJjb25zb2xlIiwibG9nIiwiZGV0YWxsZXNfX3Byb2R1Y3RvIiwiY2xhc3NuYW1lcyIsImFjdGl2ZSIsImJhY2tncm91bmRDb2xvciIsInN1Yl9fY29udGFpbmVyIiwiZGVzY3JpcGNpb25fYmFzaWNhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLElBQU1BLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLEtBQUQsRUFBVztBQUFBOztBQUFBLGtCQUNNQyxzREFBUSxDQUFDLEdBQUQsQ0FEZDtBQUFBLE1BQ3JCQyxTQURxQjtBQUFBLE1BQ1ZDLFlBRFU7O0FBRzVCLE1BQU1DLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQUFDLEdBQUcsRUFBSTtBQUNsQixRQUFHSCxTQUFTLEtBQUtHLEdBQWpCLEVBQXNCRixZQUFZLENBQUNFLEdBQUQsQ0FBWjtBQUN6QixHQUZEOztBQUlBLE1BQU1DLHFCQUFxQixHQUFHLFNBQXhCQSxxQkFBd0IsR0FBSTtBQUM5QixRQUFJQyxXQUFXLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxZQUEyQkMsK0RBQVMsQ0FBQ0MsQ0FBckMsRUFBbEI7QUFDQUMsV0FBTyxDQUFDQyxHQUFSLENBQVlOLFdBQVo7QUFDSCxHQUhEOztBQUtBLFNBQ0ksbUVBQ0k7QUFBUyxhQUFTLEVBQUVHLCtEQUFTLENBQUNJLGtCQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxhQUFTLEVBQUMsV0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyw4Q0FBRDtBQUFLLFFBQUksTUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0EsTUFBQyxrREFBRDtBQUNJLGFBQVMsRUFBRUMsaURBQVUsQ0FBQztBQUFFQyxZQUFNLEVBQUVkLFNBQVMsS0FBSztBQUF4QixLQUFELENBRHpCO0FBRUksV0FBTyxFQUFFLG1CQUFNO0FBQUVFLFlBQU0sQ0FBQyxHQUFELENBQU47QUFBYyxLQUZuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQURBLENBREosRUFTSSxNQUFDLGtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQSxNQUFDLGtEQUFEO0FBQ0ksYUFBUyxFQUFFVyxpREFBVSxDQUFDO0FBQUVDLFlBQU0sRUFBRWQsU0FBUyxLQUFLO0FBQXhCLEtBQUQsQ0FEekI7QUFFSSxXQUFPLEVBQUUsbUJBQU07QUFBRUUsWUFBTSxDQUFDLEdBQUQsQ0FBTjtBQUFjLEtBRm5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0NBREEsQ0FUSixDQURKLENBREosRUFxQkk7QUFBSyxTQUFLLEVBQUU7QUFBQ2EscUJBQWUsRUFBQztBQUFqQixLQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLGFBQVMsRUFBQyxnQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxxREFBRDtBQUFZLGFBQVMsRUFBRWYsU0FBdkI7QUFBa0MsYUFBUyxFQUFFUSwrREFBUyxDQUFDUSxjQUF2RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxrREFBRDtBQUFTLFNBQUssRUFBQyxHQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQSxNQUFDLDhDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLDhDQUFEO0FBQUssTUFBRSxFQUFDLElBQVI7QUFBYSxhQUFTLEVBQUVSLCtEQUFTLENBQUNDLENBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDS1gsS0FBSyxDQUFDbUIsa0JBRFgsQ0FESixDQURBLENBREosRUFRSSxNQUFDLGtEQUFEO0FBQVMsU0FBSyxFQUFDLEdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNBLE1BQUMsOENBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsOENBQUQ7QUFBSyxNQUFFLEVBQUMsSUFBUjtBQUFhLGFBQVMsRUFBRVQsK0RBQVMsQ0FBQ0MsQ0FBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNLWCxLQUFLLENBQUNPLFdBRFgsRUFFS0QscUJBRkwsQ0FESixDQURBLENBUkosQ0FESixDQURKLENBckJKLENBREosQ0FESjtBQStDSCxDQTNERDs7R0FBTVAsWTs7S0FBQUEsWTtBQTZEU0EsMkVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvZHVjdG8vWy4uLnByb2R1Y3RvXS41MWQ2NWY4YjY0NWJiYzMyYmQyNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBUYWJDb250ZW50LCBUYWJQYW5lLCBOYXYsIE5hdkl0ZW0sIE5hdkxpbmssIENhcmQsIEJ1dHRvbiwgQ2FyZFRpdGxlLCBDYXJkVGV4dCwgUm93LCBDb2wgfSBmcm9tICdyZWFjdHN0cmFwJztcclxuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XHJcbmltcG9ydCBJbmZvU3R5bGUgZnJvbSAnLi9pbmZvUHJvZHVjdG8ubW9kdWxlLmNzcydcclxuY29uc3QgSW5mb1Byb2R1Y3RvID0gKHByb3BzKSA9PiB7XHJcbiAgICBjb25zdCBbYWN0aXZlVGFiLCBzZXRBY3RpdmVUYWJdID0gdXNlU3RhdGUoJzEnKTtcclxuXHJcbiAgICBjb25zdCB0b2dnbGUgPSB0YWIgPT4ge1xyXG4gICAgICAgIGlmKGFjdGl2ZVRhYiAhPT0gdGFiKSBzZXRBY3RpdmVUYWIodGFiKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCByZW5kZXJJbmZvTnV0cmljaW9uYWwgPSAoKT0+e1xyXG4gICAgICAgIGxldCBkZXNjcmlwY2lvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke0luZm9TdHlsZS5wfWApO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGRlc2NyaXBjaW9uKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17SW5mb1N0eWxlLmRldGFsbGVzX19wcm9kdWN0b30+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiID5cclxuICAgICAgICAgICAgICAgICAgICA8TmF2IHRhYnM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TmF2TGlua1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKHsgYWN0aXZlOiBhY3RpdmVUYWIgPT09ICcxJyB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHsgdG9nZ2xlKCcxJyk7IH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIERlc2NyaXBjacOzblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L05hdkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZMaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoeyBhY3RpdmU6IGFjdGl2ZVRhYiA9PT0gJzInIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4geyB0b2dnbGUoJzInKTsgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgSW5mb3JtYWNpw7NuIG51dHJpY2lvbmFsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2TGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXZJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTmF2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOid3aGl0ZSd9fT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBwdC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJDb250ZW50IGFjdGl2ZVRhYj17YWN0aXZlVGFifSBjbGFzc05hbWU9e0luZm9TdHlsZS5zdWJfX2NvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFiUGFuZSB0YWJJZD1cIjFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbCBzbT1cIjEyXCIgY2xhc3NOYW1lPXtJbmZvU3R5bGUucH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9wcy5kZXNjcmlwY2lvbl9iYXNpY2F9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFiUGFuZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJQYW5lIHRhYklkPVwiMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sIHNtPVwiMTJcIiBjbGFzc05hbWU9e0luZm9TdHlsZS5wfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Byb3BzLmRlc2NyaXBjaW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cmVuZGVySW5mb051dHJpY2lvbmFsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYlBhbmU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFiQ29udGVudD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59XHJcbiBcclxuZXhwb3J0IGRlZmF1bHQgSW5mb1Byb2R1Y3RvOyJdLCJzb3VyY2VSb290IjoiIn0=