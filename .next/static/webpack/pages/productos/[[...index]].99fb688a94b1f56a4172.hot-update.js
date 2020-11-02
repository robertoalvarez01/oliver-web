webpackHotUpdate_N_E("pages/productos/[[...index]]",{

/***/ "./src/components/ModalMarca/index.js":
/*!********************************************!*\
  !*** ./src/components/ModalMarca/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Marca_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Marca.module.css */ "./src/components/ModalMarca/Marca.module.css");
/* harmony import */ var _Marca_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Marca_module_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store_actions_marcasActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../store/actions/marcasActions */ "./store/actions/marcasActions.js");
/* harmony import */ var _Loader_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Loader/index */ "./src/components/Loader/index.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\franc\\Documents\\oliver-2\\oliver-sitio\\src\\components\\ModalMarca\\index.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






var ModalMarca = function ModalMarca(props) {
  _s();

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    getData();
  }, []);
  console.log(props);

  var getData = function getData() {
    if (props.marcas && props.marcas.length == 0) {
      props.traerTodas();
    }
  };

  var activarFiltro = function activarFiltro(marca) {
    props.closeModal();
    props.activarFiltro('marca', marca);
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, props.loading ? __jsx("div", {
    className: "col-12 text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 17
    }
  }, __jsx(_Loader_index__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 21
    }
  })) : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("h4", {
    className: "text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 21
    }
  }, "Nuestras marcas"), __jsx("div", {
    className: "row" + ' ' + _Marca_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.modalMarca,
    style: {
      padding: '0px 10px'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 21
    }
  }, props.marcas.map(function (marca) {
    return __jsx("div", {
      key: marca.idMarca,
      className: "col-12 col-md-6 text-center px-4 mb-4",
      onClick: function onClick() {
        return activarFiltro(marca.idMarca);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 29
      }
    }, __jsx("div", {
      className: _Marca_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.col_modal_marca + ' ' + "row alig-items-center",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 33
      }
    }, __jsx("div", {
      className: "col-6",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 37
      }
    }, __jsx("img", {
      src: "https://api.oliverpetshop.com.ar/img/" + marca.imagen,
      alt: "marca",
      className: _Marca_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.imgMarca + ' ' + "img-fluid",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 41
      }
    })), __jsx("div", {
      className: "col-6 d-flex align-items-center justify-content-center",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 37
      }
    }, marca.marca.length > 12 ? __jsx("p", {
      className: _Marca_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.achicarTamaño + ' ' + _Marca_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.marca_modal,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 45
      }
    }, marca.marca) : __jsx("p", {
      className: _Marca_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.marca_modal,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 45
      }
    }, marca.marca))));
  }))));
};

_s(ModalMarca, "OD7bBpZva5O2jO+Puf00hKivP7c=");

_c = ModalMarca;

var mapStateToProps = function mapStateToProps(reducers) {
  return reducers.marcasReducer;
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, _store_actions_marcasActions__WEBPACK_IMPORTED_MODULE_3__)(ModalMarca));

var _c;

$RefreshReg$(_c, "ModalMarca");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTW9kYWxNYXJjYS9pbmRleC5qcyJdLCJuYW1lcyI6WyJNb2RhbE1hcmNhIiwicHJvcHMiLCJ1c2VFZmZlY3QiLCJnZXREYXRhIiwiY29uc29sZSIsImxvZyIsIm1hcmNhcyIsImxlbmd0aCIsInRyYWVyVG9kYXMiLCJhY3RpdmFyRmlsdHJvIiwibWFyY2EiLCJjbG9zZU1vZGFsIiwibG9hZGluZyIsIk1hcmNhU3R5bGUiLCJtb2RhbE1hcmNhIiwicGFkZGluZyIsIm1hcCIsImlkTWFyY2EiLCJjb2xfbW9kYWxfbWFyY2EiLCJpbWFnZW4iLCJpbWdNYXJjYSIsImFjaGljYXJUYW1hw7FvIiwibWFyY2FfbW9kYWwiLCJtYXBTdGF0ZVRvUHJvcHMiLCJyZWR1Y2VycyIsIm1hcmNhc1JlZHVjZXIiLCJjb25uZWN0IiwibWFyY2FzQWN0aW9ucyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNDLEtBQUQsRUFBVztBQUFBOztBQUMxQkMseURBQVMsQ0FBQyxZQUFNO0FBQ1pDLFdBQU87QUFDVixHQUZRLEVBRU4sRUFGTSxDQUFUO0FBR0FDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZSixLQUFaOztBQUVBLE1BQU1FLE9BQU8sR0FBRyxTQUFWQSxPQUFVLEdBQUk7QUFDaEIsUUFBR0YsS0FBSyxDQUFDSyxNQUFOLElBQWdCTCxLQUFLLENBQUNLLE1BQU4sQ0FBYUMsTUFBYixJQUFxQixDQUF4QyxFQUEwQztBQUN0Q04sV0FBSyxDQUFDTyxVQUFOO0FBQ0g7QUFDSixHQUpEOztBQU1BLE1BQU1DLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FBQUMsS0FBSyxFQUFFO0FBQ3pCVCxTQUFLLENBQUNVLFVBQU47QUFDQVYsU0FBSyxDQUFDUSxhQUFOLENBQW9CLE9BQXBCLEVBQTRCQyxLQUE1QjtBQUNILEdBSEQ7O0FBS0EsU0FDSSxtRUFDTVQsS0FBSyxDQUFDVyxPQUFQLEdBQ0c7QUFBSyxhQUFTLEVBQUMsb0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMscURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLENBREgsR0FLRyxtRUFDSTtBQUFJLGFBQVMsRUFBQyxhQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREosRUFFSTtBQUFLLGFBQVMsRUFBRSxRQUFRLEdBQVIsR0FBY0Msd0RBQVUsQ0FBQ0MsVUFBekM7QUFBcUQsU0FBSyxFQUFFO0FBQUNDLGFBQU8sRUFBQztBQUFULEtBQTVEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDS2QsS0FBSyxDQUFDSyxNQUFOLENBQWFVLEdBQWIsQ0FBaUIsVUFBQU4sS0FBSztBQUFBLFdBQ25CO0FBQUssU0FBRyxFQUFFQSxLQUFLLENBQUNPLE9BQWhCO0FBQXlCLGVBQVMsRUFBQyx1Q0FBbkM7QUFBMkUsYUFBTyxFQUFFO0FBQUEsZUFBSVIsYUFBYSxDQUFDQyxLQUFLLENBQUNPLE9BQVAsQ0FBakI7QUFBQSxPQUFwRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0k7QUFBSyxlQUFTLEVBQUVKLHdEQUFVLENBQUNLLGVBQVgsR0FBNkIsR0FBN0IsMEJBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSTtBQUFLLGVBQVMsRUFBQyxPQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSTtBQUFLLFNBQUcsRUFBRSwwQ0FBd0NSLEtBQUssQ0FBQ1MsTUFBeEQ7QUFBZ0UsU0FBRyxFQUFDLE9BQXBFO0FBQTRFLGVBQVMsRUFBRU4sd0RBQVUsQ0FBQ08sUUFBWCxHQUFxQixHQUFyQixjQUF2RjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREosQ0FESixFQUlJO0FBQUssZUFBUyxFQUFDLHdEQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDTVYsS0FBSyxDQUFDQSxLQUFOLENBQVlILE1BQVosR0FBbUIsRUFBcEIsR0FDRztBQUFHLGVBQVMsRUFBRU0sd0RBQVUsQ0FBQ1EsYUFBWCxHQUEyQixHQUEzQixHQUFpQ1Isd0RBQVUsQ0FBQ1MsV0FBMUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUF3RVosS0FBSyxDQUFDQSxLQUE5RSxDQURILEdBR0c7QUFBRyxlQUFTLEVBQUVHLHdEQUFVLENBQUNTLFdBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBdUNaLEtBQUssQ0FBQ0EsS0FBN0MsQ0FKUixDQUpKLENBREosQ0FEbUI7QUFBQSxHQUF0QixDQURMLENBRkosQ0FOUixDQURKO0FBK0JILENBaEREOztHQUFNVixVOztLQUFBQSxVOztBQWtETixJQUFNdUIsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFBQyxRQUFRLEVBQUU7QUFDOUIsU0FBT0EsUUFBUSxDQUFDQyxhQUFoQjtBQUNILENBRkQ7O0FBSWVDLDBIQUFPLENBQUNILGVBQUQsRUFBaUJJLHlEQUFqQixDQUFQLENBQXVDM0IsVUFBdkMsQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9kdWN0b3MvW1suLi5pbmRleF1dLjk5ZmI2ODhhOTRiMWY1NmE0MTcyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3Qse3VzZUVmZmVjdH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTWFyY2FTdHlsZSBmcm9tICcuL01hcmNhLm1vZHVsZS5jc3MnO1xyXG5cclxuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCAqIGFzIG1hcmNhc0FjdGlvbnMgZnJvbSAnLi4vLi4vLi4vc3RvcmUvYWN0aW9ucy9tYXJjYXNBY3Rpb25zJztcclxuaW1wb3J0IExvYWRlciBmcm9tICcuLi9Mb2FkZXIvaW5kZXgnO1xyXG5cclxuY29uc3QgTW9kYWxNYXJjYSA9IChwcm9wcykgPT4ge1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBnZXREYXRhKCk7XHJcbiAgICB9LCBbXSk7XHJcbiAgICBjb25zb2xlLmxvZyhwcm9wcyk7XHJcbiAgICBcclxuICAgIGNvbnN0IGdldERhdGEgPSAoKT0+e1xyXG4gICAgICAgIGlmKHByb3BzLm1hcmNhcyAmJiBwcm9wcy5tYXJjYXMubGVuZ3RoPT0wKXtcclxuICAgICAgICAgICAgcHJvcHMudHJhZXJUb2RhcygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBhY3RpdmFyRmlsdHJvID0gbWFyY2E9PntcclxuICAgICAgICBwcm9wcy5jbG9zZU1vZGFsKCk7XHJcbiAgICAgICAgcHJvcHMuYWN0aXZhckZpbHRybygnbWFyY2EnLG1hcmNhKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIHsocHJvcHMubG9hZGluZyk/XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMb2FkZXIvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+TnVlc3RyYXMgbWFyY2FzPC9oND5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHJvd2AgKyAnICcgKyBNYXJjYVN0eWxlLm1vZGFsTWFyY2F9IHN0eWxlPXt7cGFkZGluZzonMHB4IDEwcHgnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9wcy5tYXJjYXMubWFwKG1hcmNhPT4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17bWFyY2EuaWRNYXJjYX0gY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1tZC02IHRleHQtY2VudGVyIHB4LTQgbWItNFwiIG9uQ2xpY2s9eygpPT5hY3RpdmFyRmlsdHJvKG1hcmNhLmlkTWFyY2EpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17TWFyY2FTdHlsZS5jb2xfbW9kYWxfbWFyY2EgKyAnICcgKyBgcm93IGFsaWctaXRlbXMtY2VudGVyYH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtgaHR0cHM6Ly9hcGkub2xpdmVycGV0c2hvcC5jb20uYXIvaW1nL2ArbWFyY2EuaW1hZ2VufSBhbHQ9XCJtYXJjYVwiIGNsYXNzTmFtZT17TWFyY2FTdHlsZS5pbWdNYXJjYSArJyAnICsgYGltZy1mbHVpZGB9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTYgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7KG1hcmNhLm1hcmNhLmxlbmd0aD4xMik/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtNYXJjYVN0eWxlLmFjaGljYXJUYW1hw7FvICsgJyAnICsgTWFyY2FTdHlsZS5tYXJjYV9tb2RhbH0+e21hcmNhLm1hcmNhfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e01hcmNhU3R5bGUubWFyY2FfbW9kYWx9PnttYXJjYS5tYXJjYX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgIH0gXHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSByZWR1Y2Vycz0+e1xyXG4gICAgcmV0dXJuIHJlZHVjZXJzLm1hcmNhc1JlZHVjZXI7XHJcbn1cclxuIFxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcyxtYXJjYXNBY3Rpb25zKShNb2RhbE1hcmNhKTsiXSwic291cmNlUm9vdCI6IiJ9