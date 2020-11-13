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
    _jsxFileName = "C:\\Users\\franc\\Documents\\oliver-2\\sitio-desa\\src\\components\\ModalMarca\\index.js",
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
      src: marca.imagen,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTW9kYWxNYXJjYS9pbmRleC5qcyJdLCJuYW1lcyI6WyJNb2RhbE1hcmNhIiwicHJvcHMiLCJ1c2VFZmZlY3QiLCJnZXREYXRhIiwiY29uc29sZSIsImxvZyIsIm1hcmNhcyIsImxlbmd0aCIsInRyYWVyVG9kYXMiLCJhY3RpdmFyRmlsdHJvIiwibWFyY2EiLCJjbG9zZU1vZGFsIiwibG9hZGluZyIsIk1hcmNhU3R5bGUiLCJtb2RhbE1hcmNhIiwicGFkZGluZyIsIm1hcCIsImlkTWFyY2EiLCJjb2xfbW9kYWxfbWFyY2EiLCJpbWFnZW4iLCJpbWdNYXJjYSIsImFjaGljYXJUYW1hw7FvIiwibWFyY2FfbW9kYWwiLCJtYXBTdGF0ZVRvUHJvcHMiLCJyZWR1Y2VycyIsIm1hcmNhc1JlZHVjZXIiLCJjb25uZWN0IiwibWFyY2FzQWN0aW9ucyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNDLEtBQUQsRUFBVztBQUFBOztBQUMxQkMseURBQVMsQ0FBQyxZQUFNO0FBQ1pDLFdBQU87QUFDVixHQUZRLEVBRU4sRUFGTSxDQUFUO0FBR0FDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZSixLQUFaOztBQUVBLE1BQU1FLE9BQU8sR0FBRyxTQUFWQSxPQUFVLEdBQUk7QUFDaEIsUUFBR0YsS0FBSyxDQUFDSyxNQUFOLElBQWdCTCxLQUFLLENBQUNLLE1BQU4sQ0FBYUMsTUFBYixJQUFxQixDQUF4QyxFQUEwQztBQUN0Q04sV0FBSyxDQUFDTyxVQUFOO0FBQ0g7QUFDSixHQUpEOztBQU1BLE1BQU1DLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FBQUMsS0FBSyxFQUFFO0FBQ3pCVCxTQUFLLENBQUNVLFVBQU47QUFDQVYsU0FBSyxDQUFDUSxhQUFOLENBQW9CLE9BQXBCLEVBQTRCQyxLQUE1QjtBQUNILEdBSEQ7O0FBS0EsU0FDSSxtRUFDTVQsS0FBSyxDQUFDVyxPQUFQLEdBQ0c7QUFBSyxhQUFTLEVBQUMsb0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMscURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLENBREgsR0FLRyxtRUFDSTtBQUFJLGFBQVMsRUFBQyxhQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREosRUFFSTtBQUFLLGFBQVMsRUFBRSxRQUFRLEdBQVIsR0FBY0Msd0RBQVUsQ0FBQ0MsVUFBekM7QUFBcUQsU0FBSyxFQUFFO0FBQUNDLGFBQU8sRUFBQztBQUFULEtBQTVEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDS2QsS0FBSyxDQUFDSyxNQUFOLENBQWFVLEdBQWIsQ0FBaUIsVUFBQU4sS0FBSztBQUFBLFdBQ25CO0FBQUssU0FBRyxFQUFFQSxLQUFLLENBQUNPLE9BQWhCO0FBQXlCLGVBQVMsRUFBQyx1Q0FBbkM7QUFBMkUsYUFBTyxFQUFFO0FBQUEsZUFBSVIsYUFBYSxDQUFDQyxLQUFLLENBQUNPLE9BQVAsQ0FBakI7QUFBQSxPQUFwRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0k7QUFBSyxlQUFTLEVBQUVKLHdEQUFVLENBQUNLLGVBQVgsR0FBNkIsR0FBN0IsMEJBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSTtBQUFLLGVBQVMsRUFBQyxPQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSTtBQUFLLFNBQUcsRUFBRVIsS0FBSyxDQUFDUyxNQUFoQjtBQUF3QixTQUFHLEVBQUMsT0FBNUI7QUFBb0MsZUFBUyxFQUFFTix3REFBVSxDQUFDTyxRQUFYLEdBQXFCLEdBQXJCLGNBQS9DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFESixDQURKLEVBSUk7QUFBSyxlQUFTLEVBQUMsd0RBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNNVixLQUFLLENBQUNBLEtBQU4sQ0FBWUgsTUFBWixHQUFtQixFQUFwQixHQUNHO0FBQUcsZUFBUyxFQUFFTSx3REFBVSxDQUFDUSxhQUFYLEdBQTJCLEdBQTNCLEdBQWlDUix3REFBVSxDQUFDUyxXQUExRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQXdFWixLQUFLLENBQUNBLEtBQTlFLENBREgsR0FHRztBQUFHLGVBQVMsRUFBRUcsd0RBQVUsQ0FBQ1MsV0FBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUF1Q1osS0FBSyxDQUFDQSxLQUE3QyxDQUpSLENBSkosQ0FESixDQURtQjtBQUFBLEdBQXRCLENBREwsQ0FGSixDQU5SLENBREo7QUErQkgsQ0FoREQ7O0dBQU1WLFU7O0tBQUFBLFU7O0FBa0ROLElBQU11QixlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUFDLFFBQVEsRUFBRTtBQUM5QixTQUFPQSxRQUFRLENBQUNDLGFBQWhCO0FBQ0gsQ0FGRDs7QUFJZUMsMEhBQU8sQ0FBQ0gsZUFBRCxFQUFpQkkseURBQWpCLENBQVAsQ0FBdUMzQixVQUF2QyxDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2R1Y3Rvcy9bWy4uLmluZGV4XV0uMTk3Y2NhMTViZmI1NDMyNzY1ZmQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCx7dXNlRWZmZWN0fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBNYXJjYVN0eWxlIGZyb20gJy4vTWFyY2EubW9kdWxlLmNzcyc7XHJcblxyXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0ICogYXMgbWFyY2FzQWN0aW9ucyBmcm9tICcuLi8uLi8uLi9zdG9yZS9hY3Rpb25zL21hcmNhc0FjdGlvbnMnO1xyXG5pbXBvcnQgTG9hZGVyIGZyb20gJy4uL0xvYWRlci9pbmRleCc7XHJcblxyXG5jb25zdCBNb2RhbE1hcmNhID0gKHByb3BzKSA9PiB7XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGdldERhdGEoKTtcclxuICAgIH0sIFtdKTtcclxuICAgIGNvbnNvbGUubG9nKHByb3BzKTtcclxuICAgIFxyXG4gICAgY29uc3QgZ2V0RGF0YSA9ICgpPT57XHJcbiAgICAgICAgaWYocHJvcHMubWFyY2FzICYmIHByb3BzLm1hcmNhcy5sZW5ndGg9PTApe1xyXG4gICAgICAgICAgICBwcm9wcy50cmFlclRvZGFzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGFjdGl2YXJGaWx0cm8gPSBtYXJjYT0+e1xyXG4gICAgICAgIHByb3BzLmNsb3NlTW9kYWwoKTtcclxuICAgICAgICBwcm9wcy5hY3RpdmFyRmlsdHJvKCdtYXJjYScsbWFyY2EpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgeyhwcm9wcy5sb2FkaW5nKT9cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPExvYWRlci8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5OdWVzdHJhcyBtYXJjYXM8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgcm93YCArICcgJyArIE1hcmNhU3R5bGUubW9kYWxNYXJjYX0gc3R5bGU9e3twYWRkaW5nOicwcHggMTBweCd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3Byb3BzLm1hcmNhcy5tYXAobWFyY2E9PihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXttYXJjYS5pZE1hcmNhfSBjbGFzc05hbWU9XCJjb2wtMTIgY29sLW1kLTYgdGV4dC1jZW50ZXIgcHgtNCBtYi00XCIgb25DbGljaz17KCk9PmFjdGl2YXJGaWx0cm8obWFyY2EuaWRNYXJjYSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtNYXJjYVN0eWxlLmNvbF9tb2RhbF9tYXJjYSArICcgJyArIGByb3cgYWxpZy1pdGVtcy1jZW50ZXJgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e21hcmNhLmltYWdlbn0gYWx0PVwibWFyY2FcIiBjbGFzc05hbWU9e01hcmNhU3R5bGUuaW1nTWFyY2EgKycgJyArIGBpbWctZmx1aWRgfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC02IGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyhtYXJjYS5tYXJjYS5sZW5ndGg+MTIpP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17TWFyY2FTdHlsZS5hY2hpY2FyVGFtYcOxbyArICcgJyArIE1hcmNhU3R5bGUubWFyY2FfbW9kYWx9PnttYXJjYS5tYXJjYX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtNYXJjYVN0eWxlLm1hcmNhX21vZGFsfT57bWFyY2EubWFyY2F9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICB9IFxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufVxyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gcmVkdWNlcnM9PntcclxuICAgIHJldHVybiByZWR1Y2Vycy5tYXJjYXNSZWR1Y2VyO1xyXG59XHJcbiBcclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsbWFyY2FzQWN0aW9ucykoTW9kYWxNYXJjYSk7Il0sInNvdXJjZVJvb3QiOiIifQ==