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

  var renderInfoNutricional = function renderInfoNutricional(txt) {
    if (!txt) return;

    if (txt.includes('<h3>')) {
      var h3 = document.createElement('h4');
      var newTxt = txt.split('h3')[1];
      h3.append(newTxt);
      return txt.replace('<h3>   Valor Energético</h3>', h3);
    }
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("section", {
    className: _infoProducto_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.detalles__producto,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 17
    }
  }, __jsx(Tabs, {
    defaultActiveKey: "profile",
    id: "uncontrolled-tab-example",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 17
    }
  }, __jsx(Tab, {
    eventKey: "home",
    title: "Home",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 3
    }
  }, __jsx(Sonnet, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 5
    }
  })), __jsx(Tab, {
    eventKey: "profile",
    title: "Profile",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 3
    }
  }, __jsx(Sonnet, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 5
    }
  })), __jsx(Tab, {
    eventKey: "contact",
    title: "Contact",
    disabled: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 3
    }
  }, __jsx(Sonnet, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 5
    }
  })))), __jsx("div", {
    style: {
      backgroundColor: 'white'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 21
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["TabContent"], {
    activeTab: activeTab,
    className: _infoProducto_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.sub__container,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 25
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["TabPane"], {
    tabId: "1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 29
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 29
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    sm: "12",
    className: _infoProducto_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.p,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 33
    }
  }, props.descripcion_basica))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["TabPane"], {
    tabId: "2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 29
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 29
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    sm: "12",
    className: _infoProducto_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.p,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUHJvZHVjdG9TaW5nbGUvaW5mb1Byb2R1Y3RvLmpzIl0sIm5hbWVzIjpbIkluZm9Qcm9kdWN0byIsInByb3BzIiwidXNlU3RhdGUiLCJhY3RpdmVUYWIiLCJzZXRBY3RpdmVUYWIiLCJ0b2dnbGUiLCJ0YWIiLCJyZW5kZXJJbmZvTnV0cmljaW9uYWwiLCJ0eHQiLCJpbmNsdWRlcyIsImgzIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwibmV3VHh0Iiwic3BsaXQiLCJhcHBlbmQiLCJyZXBsYWNlIiwiSW5mb1N0eWxlIiwiZGV0YWxsZXNfX3Byb2R1Y3RvIiwiYmFja2dyb3VuZENvbG9yIiwic3ViX19jb250YWluZXIiLCJwIiwiZGVzY3JpcGNpb25fYmFzaWNhIiwiZGVzY3JpcGNpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsSUFBTUEsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQUEsa0JBQ01DLHNEQUFRLENBQUMsR0FBRCxDQURkO0FBQUEsTUFDckJDLFNBRHFCO0FBQUEsTUFDVkMsWUFEVTs7QUFHNUIsTUFBTUMsTUFBTSxHQUFHLFNBQVRBLE1BQVMsQ0FBQUMsR0FBRyxFQUFJO0FBQ2xCLFFBQUdILFNBQVMsS0FBS0csR0FBakIsRUFBc0JGLFlBQVksQ0FBQ0UsR0FBRCxDQUFaO0FBQ3pCLEdBRkQ7O0FBSUEsTUFBTUMscUJBQXFCLEdBQUcsU0FBeEJBLHFCQUF3QixDQUFBQyxHQUFHLEVBQUU7QUFDL0IsUUFBRyxDQUFDQSxHQUFKLEVBQVM7O0FBQ1QsUUFBR0EsR0FBRyxDQUFDQyxRQUFKLENBQWEsTUFBYixDQUFILEVBQXdCO0FBQ3BCLFVBQUlDLEVBQUUsR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLElBQXZCLENBQVQ7QUFDQSxVQUFJQyxNQUFNLEdBQUdMLEdBQUcs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YjkyMzZhMzE4ZjVkZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBUYWJDb250ZW50LCBUYWJQYW5lLCBOYXYsIE5hdkl0ZW0sIE5hdkxpbmssIENhcmQsIEJ1dHRvbiwgQ2FyZFRpdGxlLCBDYXJkVGV4dCwgUm93LCBDb2wgfSBmcm9tICdyZWFjdHN0cmFwJztcclxuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XHJcbmltcG9ydCBJbmZvU3R5bGUgZnJvbSAnLi9pbmZvUHJvZHVjdG8ubW9kdWxlLmNzcydcclxuY29uc3QgSW5mb1Byb2R1Y3RvID0gKHByb3BzKSA9PiB7XHJcbiAgICBjb25zdCBbYWN0aXZlVGFiLCBzZXRBY3RpdmVUYWJdID0gdXNlU3RhdGUoJzEnKTtcclxuXHJcbiAgICBjb25zdCB0b2dnbGUgPSB0YWIgPT4ge1xyXG4gICAgICAgIGlmKGFjdGl2ZVRhYiAhPT0gdGFiKSBzZXRBY3RpdmVUYWIodGFiKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCByZW5kZXJJbmZvTnV0cmljaW9uYWwgPSB0eHQ9PntcclxuICAgICAgICBpZighdHh0KSByZXR1cm47XHJcbiAgICAgICAgaWYodHh0LmluY2x1ZGVzKCc8aDM+Jykpe1xyXG4gICAgICAgICAgICBsZXQgaDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xyXG4gICAgICAgICAgICBsZXQgbmV3VHh0ID0gdHh0LnNwbGl0KCdoMycpWzFdO1xyXG4gICAgICAgICAgICBoMy5hcHBlbmQobmV3VHh0KTtcclxuICAgICAgICAgICAgcmV0dXJuIHR4dC5yZXBsYWNlKCc8aDM+ICAgVmFsb3IgRW5lcmfDqXRpY288L2gzPicsaDMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17SW5mb1N0eWxlLmRldGFsbGVzX19wcm9kdWN0b30+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPFRhYnMgZGVmYXVsdEFjdGl2ZUtleT1cInByb2ZpbGVcIiBpZD1cInVuY29udHJvbGxlZC10YWItZXhhbXBsZVwiPlxyXG4gIDxUYWIgZXZlbnRLZXk9XCJob21lXCIgdGl0bGU9XCJIb21lXCI+XHJcbiAgICA8U29ubmV0IC8+XHJcbiAgPC9UYWI+XHJcbiAgPFRhYiBldmVudEtleT1cInByb2ZpbGVcIiB0aXRsZT1cIlByb2ZpbGVcIj5cclxuICAgIDxTb25uZXQgLz5cclxuICA8L1RhYj5cclxuICA8VGFiIGV2ZW50S2V5PVwiY29udGFjdFwiIHRpdGxlPVwiQ29udGFjdFwiIGRpc2FibGVkPlxyXG4gICAgPFNvbm5ldCAvPlxyXG4gIDwvVGFiPlxyXG48L1RhYnM+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6J3doaXRlJ319PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJDb250ZW50IGFjdGl2ZVRhYj17YWN0aXZlVGFifSBjbGFzc05hbWU9e0luZm9TdHlsZS5zdWJfX2NvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFiUGFuZSB0YWJJZD1cIjFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbCBzbT1cIjEyXCIgY2xhc3NOYW1lPXtJbmZvU3R5bGUucH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9wcy5kZXNjcmlwY2lvbl9iYXNpY2F9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFiUGFuZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJQYW5lIHRhYklkPVwiMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sIHNtPVwiMTJcIiBjbGFzc05hbWU9e0luZm9TdHlsZS5wfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3JlbmRlckluZm9OdXRyaWNpb25hbChwcm9wcy5kZXNjcmlwY2lvbil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFiUGFuZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJDb250ZW50PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn1cclxuIFxyXG5leHBvcnQgZGVmYXVsdCBJbmZvUHJvZHVjdG87Il0sInNvdXJjZVJvb3QiOiIifQ==