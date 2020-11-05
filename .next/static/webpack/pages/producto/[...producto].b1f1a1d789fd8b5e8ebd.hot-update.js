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
    var descripcion = document.querySelectorAll(".".concat(_infoProducto_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.p))[1];
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
      renderInfoNutricional();
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
  }, props.descripcion))))))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUHJvZHVjdG9TaW5nbGUvaW5mb1Byb2R1Y3RvLmpzIl0sIm5hbWVzIjpbIkluZm9Qcm9kdWN0byIsInByb3BzIiwidXNlU3RhdGUiLCJhY3RpdmVUYWIiLCJzZXRBY3RpdmVUYWIiLCJ0b2dnbGUiLCJ0YWIiLCJyZW5kZXJJbmZvTnV0cmljaW9uYWwiLCJkZXNjcmlwY2lvbiIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsIkluZm9TdHlsZSIsInAiLCJjb25zb2xlIiwibG9nIiwiZGV0YWxsZXNfX3Byb2R1Y3RvIiwiY2xhc3NuYW1lcyIsImFjdGl2ZSIsImJhY2tncm91bmRDb2xvciIsInN1Yl9fY29udGFpbmVyIiwiZGVzY3JpcGNpb25fYmFzaWNhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLElBQU1BLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLEtBQUQsRUFBVztBQUFBOztBQUFBLGtCQUNNQyxzREFBUSxDQUFDLEdBQUQsQ0FEZDtBQUFBLE1BQ3JCQyxTQURxQjtBQUFBLE1BQ1ZDLFlBRFU7O0FBRzVCLE1BQU1DLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQUFDLEdBQUcsRUFBSTtBQUNsQixRQUFHSCxTQUFTLEtBQUtHLEdBQWpCLEVBQXNCRixZQUFZLENBQUNFLEdBQUQsQ0FBWjtBQUN6QixHQUZEOztBQUlBLE1BQU1DLHFCQUFxQixHQUFHLFNBQXhCQSxxQkFBd0IsR0FBSTtBQUM5QixRQUFJQyxXQUFXLEdBQUdDLFFBQVEsQ0FBQ0MsZ0JBQVQsWUFBOEJDLCtEQUFTLENBQUNDLENBQXhDLEdBQTZDLENBQTdDLENBQWxCO0FBQ0FDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZTixXQUFaO0FBQ0gsR0FIRDs7QUFLQSxTQUNJLG1FQUNJO0FBQVMsYUFBUyxFQUFFRywrREFBUyxDQUFDSSxrQkFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssYUFBUyxFQUFDLFdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsOENBQUQ7QUFBSyxRQUFJLE1BQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsa0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNBLE1BQUMsa0RBQUQ7QUFDSSxhQUFTLEVBQUVDLGlEQUFVLENBQUM7QUFBRUMsWUFBTSxFQUFFZCxTQUFTLEtBQUs7QUFBeEIsS0FBRCxDQUR6QjtBQUVJLFdBQU8sRUFBRSxtQkFBTTtBQUFFRSxZQUFNLENBQUMsR0FBRCxDQUFOO0FBQWMsS0FGbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFEQSxDQURKLEVBU0ksTUFBQyxrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0EsTUFBQyxrREFBRDtBQUNJLGFBQVMsRUFBRVcsaURBQVUsQ0FBQztBQUFFQyxZQUFNLEVBQUVkLFNBQVMsS0FBSztBQUF4QixLQUFELENBRHpCO0FBRUksV0FBTyxFQUFFLG1CQUFNO0FBQUVFLFlBQU0sQ0FBQyxHQUFELENBQU47QUFBYUUsMkJBQXFCO0FBQUcsS0FGMUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQ0FEQSxDQVRKLENBREosQ0FESixFQXFCSTtBQUFLLFNBQUssRUFBRTtBQUFDVyxxQkFBZSxFQUFDO0FBQWpCLEtBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssYUFBUyxFQUFDLGdCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLHFEQUFEO0FBQVksYUFBUyxFQUFFZixTQUF2QjtBQUFrQyxhQUFTLEVBQUVRLCtEQUFTLENBQUNRLGNBQXZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLGtEQUFEO0FBQVMsU0FBSyxFQUFDLEdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNBLE1BQUMsOENBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsOENBQUQ7QUFBSyxNQUFFLEVBQUMsSUFBUjtBQUFhLGFBQVMsRUFBRVIsK0RBQVMsQ0FBQ0MsQ0FBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNLWCxLQUFLLENBQUNtQixrQkFEWCxDQURKLENBREEsQ0FESixFQVFJLE1BQUMsa0RBQUQ7QUFBUyxTQUFLLEVBQUMsR0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0EsTUFBQyw4Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyw4Q0FBRDtBQUFLLE1BQUUsRUFBQyxJQUFSO0FBQWEsYUFBUyxFQUFFVCwrREFBUyxDQUFDQyxDQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0tYLEtBQUssQ0FBQ08sV0FEWCxDQURKLENBREEsQ0FSSixDQURKLENBREosQ0FyQkosQ0FESixDQURKO0FBOENILENBMUREOztHQUFNUixZOztLQUFBQSxZO0FBNERTQSwyRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9kdWN0by9bLi4ucHJvZHVjdG9dLmIxZjFhMWQ3ODlmZDhiNWU4ZWJkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3Qse3VzZVN0YXRlfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFRhYkNvbnRlbnQsIFRhYlBhbmUsIE5hdiwgTmF2SXRlbSwgTmF2TGluaywgQ2FyZCwgQnV0dG9uLCBDYXJkVGl0bGUsIENhcmRUZXh0LCBSb3csIENvbCB9IGZyb20gJ3JlYWN0c3RyYXAnO1xyXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcclxuaW1wb3J0IEluZm9TdHlsZSBmcm9tICcuL2luZm9Qcm9kdWN0by5tb2R1bGUuY3NzJ1xyXG5jb25zdCBJbmZvUHJvZHVjdG8gPSAocHJvcHMpID0+IHtcclxuICAgIGNvbnN0IFthY3RpdmVUYWIsIHNldEFjdGl2ZVRhYl0gPSB1c2VTdGF0ZSgnMScpO1xyXG5cclxuICAgIGNvbnN0IHRvZ2dsZSA9IHRhYiA9PiB7XHJcbiAgICAgICAgaWYoYWN0aXZlVGFiICE9PSB0YWIpIHNldEFjdGl2ZVRhYih0YWIpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHJlbmRlckluZm9OdXRyaWNpb25hbCA9ICgpPT57XHJcbiAgICAgICAgbGV0IGRlc2NyaXBjaW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgLiR7SW5mb1N0eWxlLnB9YClbMV07XHJcbiAgICAgICAgY29uc29sZS5sb2coZGVzY3JpcGNpb24pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtJbmZvU3R5bGUuZGV0YWxsZXNfX3Byb2R1Y3RvfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxOYXYgdGFicz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZMaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoeyBhY3RpdmU6IGFjdGl2ZVRhYiA9PT0gJzEnIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4geyB0b2dnbGUoJzEnKTsgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgRGVzY3JpcGNpw7NuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2TGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXZJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TmF2SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkxpbmtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyh7IGFjdGl2ZTogYWN0aXZlVGFiID09PSAnMicgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7IHRvZ2dsZSgnMicpOyByZW5kZXJJbmZvTnV0cmljaW9uYWwoKX19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEluZm9ybWFjacOzbiBudXRyaWNpb25hbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L05hdkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICA8L05hdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2JhY2tncm91bmRDb2xvcjond2hpdGUnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgcHQtM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGFiQ29udGVudCBhY3RpdmVUYWI9e2FjdGl2ZVRhYn0gY2xhc3NOYW1lPXtJbmZvU3R5bGUuc3ViX19jb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYlBhbmUgdGFiSWQ9XCIxXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgc209XCIxMlwiIGNsYXNzTmFtZT17SW5mb1N0eWxlLnB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cHJvcHMuZGVzY3JpcGNpb25fYmFzaWNhfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYlBhbmU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFiUGFuZSB0YWJJZD1cIjJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbCBzbT1cIjEyXCIgY2xhc3NOYW1lPXtJbmZvU3R5bGUucH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9wcy5kZXNjcmlwY2lvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJQYW5lPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1RhYkNvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufVxyXG4gXHJcbmV4cG9ydCBkZWZhdWx0IEluZm9Qcm9kdWN0bzsiXSwic291cmNlUm9vdCI6IiJ9