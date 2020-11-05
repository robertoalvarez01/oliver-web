webpackHotUpdate_N_E("pages/_app",{

/***/ "./src/components/Navbar/index.js":
/*!****************************************!*\
  !*** ./src/components/Navbar/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Navbar_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Navbar.module.css */ "./src/components/Navbar/Navbar.module.css");
/* harmony import */ var _Navbar_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Navbar_module_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Modal_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Modal/index */ "./src/components/Modal/index.js");
/* harmony import */ var _Login__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Login */ "./src/components/Login/index.js");
/* harmony import */ var _Login_Register__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Login/Register */ "./src/components/Login/Register.js");
/* harmony import */ var _Carrito__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Carrito */ "./src/components/Carrito/index.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "./node_modules/@fortawesome/free-brands-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _config_index__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../config/index */ "./config/index.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\franc\\Documents\\oliver-2\\oliver-sitio\\src\\components\\Navbar\\index.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;













var Navbar = function Navbar() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      busqueda = _useState[0],
      setBusqueda = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      login = _useState2[0],
      setLogin = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      carrito = _useState3[0],
      setCarrito = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      register = _useState4[0],
      setRegister = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      modalIsOpen = _useState5[0],
      setModalIsOpen = _useState5[1]; //actions login-register


  var showModalLogin = function showModalLogin() {
    register ? setRegister(false) : null;
    carrito ? setCarrito(false) : null;
    setLogin(true);
    setModalIsOpen(true);
  };

  var showRegister = function showRegister() {
    login ? setLogin(false) : false;
    carrito ? setCarrito(false) : null;
    setRegister(true);
  };

  var closeModal = function closeModal() {
    return setModalIsOpen(false);
  }; //-------------------------------------------------//
  //actions carrito


  var showModalCarrito = function showModalCarrito() {
    login ? setLogin(false) : null;
    register ? setRegister(false) : null;
    setCarrito(true);
    setModalIsOpen(true);
  };

  var toggleMenu = function toggleMenu() {
    document.getElementsByClassName(_Navbar_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.menu__collapsed)[0].classList.toggle(_Navbar_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.showCollapsed);
  };

  var handleChangeMenu = function handleChangeMenu(event) {
    setBusqueda(event.target.value);
  };

  var handleSubmitBuscador = function handleSubmitBuscador(event) {
    event.preventDefault();
    if (busqueda.trim() === '') return false;
    return next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push("/productos/".concat(busqueda));
  };

  var renderContenidoModal = function renderContenidoModal() {
    if (login) return __jsx(_Login__WEBPACK_IMPORTED_MODULE_5__["default"], {
      showRegister: showRegister,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 26
      }
    });
    if (register) return __jsx(_Login_Register__WEBPACK_IMPORTED_MODULE_6__["default"], {
      showLogin: showModalLogin,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 29
      }
    });
    if (carrito) return __jsx(_Carrito__WEBPACK_IMPORTED_MODULE_7__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 28
      }
    });
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: _Navbar_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.navbar + ' ' + "sticky-top",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: _Navbar_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.wrapper__navbar + ' ' + "container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 17
    }
  }, __jsx("nav", {
    className: "row ml-0 w-100",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: _Navbar_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.container__logo,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 25
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 29
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 33
    }
  }, __jsx("img", {
    src: "".concat(_config_index__WEBPACK_IMPORTED_MODULE_11__["URL_CLOUD_STORAGE"], "/Perro.png"),
    className: _Navbar_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.logo + ' ' + "img-fluid",
    alt: "Oliver pet shop",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 37
    }
  })))), __jsx("span", {
    className: _Navbar_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.boton__menu + ' ' + _Navbar_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.btn_carrito + ' ' + _Navbar_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.carrito_mobile,
    onClick: showModalCarrito,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 25
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_10__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__["faShoppingCart"],
    className: _Navbar_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.txt__item_menu,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 29
    }
  })), __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_10__["FontAwesomeIcon"], {
    onClick: toggleMenu,
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__["faAlignLeft"],
    className: _Navbar_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.icon_menu,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 25
    }
  }), __jsx("form", {
    className: _Navbar_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.buscador + ' ' + "col-sm-4 col-xl-7 col-md-7 d-flex align-items-center input-group",
    autoComplete: "off",
    onSubmit: handleSubmitBuscador,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 25
    }
  }, __jsx("input", {
    type: "text",
    required: true,
    className: _Navbar_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.form_search_menu + ' ' + "form-control",
    onChange: handleChangeMenu,
    placeholder: "\xBFQu\xE9 andas buscando?",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 29
    }
  })), __jsx("div", {
    className: _Navbar_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.container__login_menu + ' ' + "col-sm-7 col-xl-4 col-md-4 d-flex align-items-center justify-content-end",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 25
    }
  }, __jsx("span", {
    onClick: showModalLogin,
    className: _Navbar_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.boton__menu + ' ' + _Navbar_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.btn_account,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 29
    }
  }, __jsx("span", {
    className: _Navbar_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.txt__item_menu,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 33
    }
  }, "Ingres\xE1 ahora / Registrate")), __jsx("span", {
    className: _Navbar_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.boton__menu + ' ' + _Navbar_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.btn_carrito,
    onClick: showModalCarrito,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 29
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_10__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__["faShoppingCart"],
    className: _Navbar_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.txt__item_menu,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 33
    }
  }))))), __jsx("div", {
    className: _Navbar_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.menu__collapsed,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 17
    }
  }, __jsx("section", {
    className: _Navbar_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.header__collapsed_nav,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: "".concat(_config_index__WEBPACK_IMPORTED_MODULE_11__["URL_CLOUD_STORAGE"], "/Perro.png"),
    className: _Navbar_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.logo,
    alt: "Oliver pet shop",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 25
    }
  }), __jsx("i", {
    onClick: toggleMenu,
    className: _Navbar_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.close_btn_menu + ' ' + "fas fa-times",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 25
    }
  })), __jsx("div", {
    className: _Navbar_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.main__collapsed,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 21
    }
  }, __jsx("ul", {
    className: _Navbar_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.list__menu__collapsed,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 25
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    onClick: toggleMenu,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 29
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 33
    }
  }, __jsx("li", {
    className: _Navbar_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.item__menu__collapsed,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 37
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_10__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__["faHome"],
    className: _Navbar_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.icon__itemMenu__collapsed,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 41
    }
  }), __jsx("span", {
    className: _Navbar_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.label__item__menu,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 41
    }
  }, "Inicio")))), __jsx("li", {
    className: _Navbar_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.item__menu__collapsed,
    onClick: showModalLogin,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 29
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_10__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__["faUser"],
    className: _Navbar_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.icon__itemMenu__collapsed,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 33
    }
  }), __jsx("span", {
    className: _Navbar_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.label__item__menu,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 33
    }
  }, "Ingres\xE1 ahora / Registrate")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    onClick: toggleMenu,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 29
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 33
    }
  }, __jsx("li", {
    className: _Navbar_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.item__menu__collapsed,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 37
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_10__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__["faPiggyBank"],
    className: _Navbar_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.icon__itemMenu__collapsed,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 41
    }
  }), __jsx("span", {
    className: _Navbar_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.label__item__menu,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 41
    }
  }, "Productos")))), __jsx("li", {
    className: _Navbar_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.item__menu__collapsed + ' ' + _Navbar_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.__withButton,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 29
    }
  }, __jsx("a", {
    href: "/",
    className: "boton bg-yellow",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 33
    }
  }, "Ofertas")))), __jsx("section", {
    className: _Navbar_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.collapsed_info + ' ' + "text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: _Navbar_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.redes__collapsed,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 25
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_10__["FontAwesomeIcon"], {
    icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_9__["faFacebook"],
    className: _Navbar_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.iconoRed,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 29
    }
  }), __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_10__["FontAwesomeIcon"], {
    icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_9__["faInstagram"],
    className: _Navbar_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.iconoRed,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 29
    }
  })), __jsx("span", {
    className: "text-muted",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 25
    }
  }, "\xA9Terminos y Condiciones")))), !modalIsOpen ? null : __jsx(_Modal_index__WEBPACK_IMPORTED_MODULE_4__["default"], {
    closeModal: closeModal,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 17
    }
  }, renderContenidoModal()));
};

_s(Navbar, "H10/PUU0j3G92t6YWUZaaFtFcTE=");

_c = Navbar;
/* harmony default export */ __webpack_exports__["default"] = (Navbar);

var _c;

$RefreshReg$(_c, "Navbar");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTmF2YmFyL2luZGV4LmpzIl0sIm5hbWVzIjpbIk5hdmJhciIsInVzZVN0YXRlIiwiYnVzcXVlZGEiLCJzZXRCdXNxdWVkYSIsImxvZ2luIiwic2V0TG9naW4iLCJjYXJyaXRvIiwic2V0Q2Fycml0byIsInJlZ2lzdGVyIiwic2V0UmVnaXN0ZXIiLCJtb2RhbElzT3BlbiIsInNldE1vZGFsSXNPcGVuIiwic2hvd01vZGFsTG9naW4iLCJzaG93UmVnaXN0ZXIiLCJjbG9zZU1vZGFsIiwic2hvd01vZGFsQ2Fycml0byIsInRvZ2dsZU1lbnUiLCJkb2N1bWVudCIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJOYXZiYXJTdHlsZSIsIm1lbnVfX2NvbGxhcHNlZCIsImNsYXNzTGlzdCIsInRvZ2dsZSIsInNob3dDb2xsYXBzZWQiLCJoYW5kbGVDaGFuZ2VNZW51IiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZVN1Ym1pdEJ1c2NhZG9yIiwicHJldmVudERlZmF1bHQiLCJ0cmltIiwiUm91dGVyIiwicHVzaCIsInJlbmRlckNvbnRlbmlkb01vZGFsIiwibmF2YmFyIiwid3JhcHBlcl9fbmF2YmFyIiwiY29udGFpbmVyX19sb2dvIiwiVVJMX0NMT1VEX1NUT1JBR0UiLCJsb2dvIiwiYm90b25fX21lbnUiLCJidG5fY2Fycml0byIsImNhcnJpdG9fbW9iaWxlIiwiZmFTaG9wcGluZ0NhcnQiLCJ0eHRfX2l0ZW1fbWVudSIsImZhQWxpZ25MZWZ0IiwiaWNvbl9tZW51IiwiYnVzY2Fkb3IiLCJmb3JtX3NlYXJjaF9tZW51IiwiY29udGFpbmVyX19sb2dpbl9tZW51IiwiYnRuX2FjY291bnQiLCJoZWFkZXJfX2NvbGxhcHNlZF9uYXYiLCJjbG9zZV9idG5fbWVudSIsIm1haW5fX2NvbGxhcHNlZCIsImxpc3RfX21lbnVfX2NvbGxhcHNlZCIsIml0ZW1fX21lbnVfX2NvbGxhcHNlZCIsImZhSG9tZSIsImljb25fX2l0ZW1NZW51X19jb2xsYXBzZWQiLCJsYWJlbF9faXRlbV9fbWVudSIsImZhVXNlciIsImZhUGlnZ3lCYW5rIiwiX193aXRoQnV0dG9uIiwiY29sbGFwc2VkX2luZm8iLCJyZWRlc19fY29sbGFwc2VkIiwiZmFGYWNlYm9vayIsImljb25vUmVkIiwiZmFJbnN0YWdyYW0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLEdBQU07QUFBQTs7QUFBQSxrQkFFZUMsc0RBQVEsQ0FBQyxFQUFELENBRnZCO0FBQUEsTUFFVkMsUUFGVTtBQUFBLE1BRUFDLFdBRkE7O0FBQUEsbUJBR1NGLHNEQUFRLENBQUMsS0FBRCxDQUhqQjtBQUFBLE1BR1ZHLEtBSFU7QUFBQSxNQUdIQyxRQUhHOztBQUFBLG1CQUlhSixzREFBUSxDQUFDLEtBQUQsQ0FKckI7QUFBQSxNQUlWSyxPQUpVO0FBQUEsTUFJREMsVUFKQzs7QUFBQSxtQkFLZU4sc0RBQVEsQ0FBQyxLQUFELENBTHZCO0FBQUEsTUFLVk8sUUFMVTtBQUFBLE1BS0FDLFdBTEE7O0FBQUEsbUJBTXFCUixzREFBUSxDQUFDLEtBQUQsQ0FON0I7QUFBQSxNQU1WUyxXQU5VO0FBQUEsTUFNR0MsY0FOSCxrQkFRakI7OztBQUNBLE1BQU1DLGNBQWMsR0FBRSxTQUFoQkEsY0FBZ0IsR0FBSTtBQUNyQkosWUFBRCxHQUFXQyxXQUFXLENBQUMsS0FBRCxDQUF0QixHQUE4QixJQUE5QjtBQUNDSCxXQUFELEdBQVVDLFVBQVUsQ0FBQyxLQUFELENBQXBCLEdBQTRCLElBQTVCO0FBQ0FGLFlBQVEsQ0FBQyxJQUFELENBQVI7QUFDQU0sa0JBQWMsQ0FBQyxJQUFELENBQWQ7QUFDSCxHQUxEOztBQU9BLE1BQU1FLFlBQVksR0FBRyxTQUFmQSxZQUFlLEdBQUk7QUFDcEJU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QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLEVBRUksTUFBQywrRUFBRDtBQUFpQixRQUFJLEVBQUVDLDhFQUF2QjtBQUFvQyxhQUFTLEVBQUU5Qyx5REFBVyxDQUFDNkMsUUFBM0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZKLENBREosRUFLSTtBQUFNLGFBQVMsRUFBQyxZQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtDQUxKLENBaENKLENBM0JKLENBREosRUFxRU0sQ0FBQ3RELFdBQUYsR0FBZSxJQUFmLEdBQ0csTUFBQyxvREFBRDtBQUFPLGNBQVUsRUFBRUksVUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNLbUIsb0JBQW9CLEVBRHpCLENBdEVSLENBREo7QUE2RUgsQ0F2SUQ7O0dBQU1qQyxNOztLQUFBQSxNO0FBeUlTQSxxRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjkwMGM5MzE5YzgxNjU5ZDBhZTRjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3Qse3VzZVN0YXRlfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBOYXZiYXJTdHlsZSBmcm9tICcuL05hdmJhci5tb2R1bGUuY3NzJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBNb2RhbCBmcm9tICcuLi9Nb2RhbC9pbmRleCc7XHJcbmltcG9ydCBMb2dpbiBmcm9tICcuLi9Mb2dpbic7XHJcbmltcG9ydCBSZWdpc3RlciBmcm9tICcuLi9Mb2dpbi9SZWdpc3Rlcic7XHJcbmltcG9ydCBDYXJyaXRvIGZyb20gJy4uL0NhcnJpdG8nO1xyXG5pbXBvcnQgeyBmYUhvbWUsZmFVc2VyLGZhUGlnZ3lCYW5rLGZhU2hvcHBpbmdDYXJ0LGZhQWxpZ25MZWZ0IH0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29uc1wiO1xyXG5pbXBvcnQge2ZhRmFjZWJvb2ssZmFJbnN0YWdyYW19IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLWJyYW5kcy1zdmctaWNvbnMnO1xyXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tIFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCI7XHJcbmltcG9ydCB7VVJMX0NMT1VEX1NUT1JBR0V9IGZyb20gJy4uLy4uLy4uL2NvbmZpZy9pbmRleCc7XHJcbmNvbnN0IE5hdmJhciA9ICgpID0+IHtcclxuXHJcbiAgICBjb25zdCBbYnVzcXVlZGEsIHNldEJ1c3F1ZWRhXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtsb2dpbiwgc2V0TG9naW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW2NhcnJpdG8sIHNldENhcnJpdG9dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW3JlZ2lzdGVyLCBzZXRSZWdpc3Rlcl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbbW9kYWxJc09wZW4sIHNldE1vZGFsSXNPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICAvL2FjdGlvbnMgbG9naW4tcmVnaXN0ZXJcclxuICAgIGNvbnN0IHNob3dNb2RhbExvZ2luID0oKT0+e1xyXG4gICAgICAgIChyZWdpc3Rlcik/c2V0UmVnaXN0ZXIoZmFsc2UpOm51bGw7XHJcbiAgICAgICAgKGNhcnJpdG8pP3NldENhcnJpdG8oZmFsc2UpOm51bGw7XHJcbiAgICAgICAgc2V0TG9naW4odHJ1ZSk7XHJcbiAgICAgICAgc2V0TW9kYWxJc09wZW4odHJ1ZSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzaG93UmVnaXN0ZXIgPSAoKT0+e1xyXG4gICAgICAgIChsb2dpbik/c2V0TG9naW4oZmFsc2UpOmZhbHNlO1xyXG4gICAgICAgIChjYXJyaXRvKT9zZXRDYXJyaXRvKGZhbHNlKTpudWxsO1xyXG4gICAgICAgIHNldFJlZ2lzdGVyKHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNsb3NlTW9kYWw9KCk9PihcclxuICAgICAgICBzZXRNb2RhbElzT3BlbihmYWxzZSlcclxuICAgIClcclxuICAgIFxyXG4gICAgXHJcbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vL1xyXG5cclxuXHJcbiAgICAvL2FjdGlvbnMgY2Fycml0b1xyXG4gICAgY29uc3Qgc2hvd01vZGFsQ2Fycml0byA9ICgpPT57XHJcbiAgICAgICAgKGxvZ2luKT9zZXRMb2dpbihmYWxzZSk6bnVsbDtcclxuICAgICAgICAocmVnaXN0ZXIpP3NldFJlZ2lzdGVyKGZhbHNlKTpudWxsO1xyXG4gICAgICAgIHNldENhcnJpdG8odHJ1ZSk7XHJcbiAgICAgICAgc2V0TW9kYWxJc09wZW4odHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgdG9nZ2xlTWVudSA9ICgpPT57XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShOYXZiYXJTdHlsZS5tZW51X19jb2xsYXBzZWQpWzBdLmNsYXNzTGlzdC50b2dnbGUoTmF2YmFyU3R5bGUuc2hvd0NvbGxhcHNlZCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlTWVudSA9IGV2ZW50PT57XHJcbiAgICAgICAgc2V0QnVzcXVlZGEoZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVTdWJtaXRCdXNjYWRvciA9IGV2ZW50PT57XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBpZihidXNxdWVkYS50cmltKCkgPT09ICcnKXJldHVybiBmYWxzZTtcclxuICAgICAgICByZXR1cm4gUm91dGVyLnB1c2goYC9wcm9kdWN0b3MvJHtidXNxdWVkYX1gKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCByZW5kZXJDb250ZW5pZG9Nb2RhbCA9ICgpPT57XHJcbiAgICAgICAgaWYobG9naW4pIHJldHVybiA8TG9naW4gc2hvd1JlZ2lzdGVyPXtzaG93UmVnaXN0ZXJ9Lz47XHJcbiAgICAgICAgaWYocmVnaXN0ZXIpIHJldHVybiA8UmVnaXN0ZXIgc2hvd0xvZ2luPXtzaG93TW9kYWxMb2dpbn0vPjtcclxuICAgICAgICBpZihjYXJyaXRvKSByZXR1cm4gPENhcnJpdG8vPlxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e05hdmJhclN0eWxlLm5hdmJhciArICcgJyArIGBzdGlja3ktdG9wYH0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17TmF2YmFyU3R5bGUud3JhcHBlcl9fbmF2YmFyICArICcgJyArICBgY29udGFpbmVyYH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJyb3cgbWwtMCB3LTEwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17TmF2YmFyU3R5bGUuY29udGFpbmVyX19sb2dvfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtgJHtVUkxfQ0xPVURfU1RPUkFHRX0vUGVycm8ucG5nYH0gY2xhc3NOYW1lPXtOYXZiYXJTdHlsZS5sb2dvICsgJyAnICsgYGltZy1mbHVpZGB9IGFsdD1cIk9saXZlciBwZXQgc2hvcFwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e05hdmJhclN0eWxlLmJvdG9uX19tZW51ICsgJyAnICsgTmF2YmFyU3R5bGUuYnRuX2NhcnJpdG8gKyAnICcgKyBOYXZiYXJTdHlsZS5jYXJyaXRvX21vYmlsZX0gb25DbGljaz17c2hvd01vZGFsQ2Fycml0b30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhU2hvcHBpbmdDYXJ0fSBjbGFzc05hbWU9e05hdmJhclN0eWxlLnR4dF9faXRlbV9tZW51fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiAgb25DbGljaz17dG9nZ2xlTWVudX0gaWNvbj17ZmFBbGlnbkxlZnR9IGNsYXNzTmFtZT17TmF2YmFyU3R5bGUuaWNvbl9tZW51fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT17TmF2YmFyU3R5bGUuYnVzY2Fkb3IgKyAnICcgKyBgY29sLXNtLTQgY29sLXhsLTcgY29sLW1kLTcgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBpbnB1dC1ncm91cGB9IGF1dG9Db21wbGV0ZT1cIm9mZlwiIG9uU3VibWl0PXtoYW5kbGVTdWJtaXRCdXNjYWRvcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiByZXF1aXJlZCBjbGFzc05hbWU9e05hdmJhclN0eWxlLmZvcm1fc2VhcmNoX21lbnUgKyAnICcgKyBgZm9ybS1jb250cm9sYH0gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZU1lbnV9IHBsYWNlaG9sZGVyPVwiwr9RdcOpIGFuZGFzIGJ1c2NhbmRvP1wiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17TmF2YmFyU3R5bGUuY29udGFpbmVyX19sb2dpbl9tZW51ICsgJyAnICsgYGNvbC1zbS03IGNvbC14bC00IGNvbC1tZC00IGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIganVzdGlmeS1jb250ZW50LWVuZGB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gb25DbGljaz17c2hvd01vZGFsTG9naW59IGNsYXNzTmFtZT17TmF2YmFyU3R5bGUuYm90b25fX21lbnUgKyAnICcgKyBOYXZiYXJTdHlsZS5idG5fYWNjb3VudH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtOYXZiYXJTdHlsZS50eHRfX2l0ZW1fbWVudX0+SW5ncmVzw6EgYWhvcmEgLyBSZWdpc3RyYXRlPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtOYXZiYXJTdHlsZS5ib3Rvbl9fbWVudSArICcgJyArIE5hdmJhclN0eWxlLmJ0bl9jYXJyaXRvfSBvbkNsaWNrPXtzaG93TW9kYWxDYXJyaXRvfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhU2hvcHBpbmdDYXJ0fSBjbGFzc05hbWU9e05hdmJhclN0eWxlLnR4dF9faXRlbV9tZW51fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbmF2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17TmF2YmFyU3R5bGUubWVudV9fY29sbGFwc2VkfT5cclxuICAgICAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e05hdmJhclN0eWxlLmhlYWRlcl9fY29sbGFwc2VkX25hdn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtgJHtVUkxfQ0xPVURfU1RPUkFHRX0vUGVycm8ucG5nYH0gY2xhc3NOYW1lPXtOYXZiYXJTdHlsZS5sb2dvfSBhbHQ9XCJPbGl2ZXIgcGV0IHNob3BcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIG9uQ2xpY2s9e3RvZ2dsZU1lbnV9IGNsYXNzTmFtZT17TmF2YmFyU3R5bGUuY2xvc2VfYnRuX21lbnUgKyAnICcgKyBgZmFzIGZhLXRpbWVzYH0+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17TmF2YmFyU3R5bGUubWFpbl9fY29sbGFwc2VkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT17TmF2YmFyU3R5bGUubGlzdF9fbWVudV9fY29sbGFwc2VkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCIgb25DbGljaz17dG9nZ2xlTWVudX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e05hdmJhclN0eWxlLml0ZW1fX21lbnVfX2NvbGxhcHNlZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhSG9tZX0gY2xhc3NOYW1lPXtOYXZiYXJTdHlsZS5pY29uX19pdGVtTWVudV9fY29sbGFwc2VkfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e05hdmJhclN0eWxlLmxhYmVsX19pdGVtX19tZW51fT5JbmljaW88L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17TmF2YmFyU3R5bGUuaXRlbV9fbWVudV9fY29sbGFwc2VkfSBvbkNsaWNrPXtzaG93TW9kYWxMb2dpbn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVVzZXJ9IGNsYXNzTmFtZT17TmF2YmFyU3R5bGUuaWNvbl9faXRlbU1lbnVfX2NvbGxhcHNlZH0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17TmF2YmFyU3R5bGUubGFiZWxfX2l0ZW1fX21lbnV9PkluZ3Jlc8OhIGFob3JhIC8gUmVnaXN0cmF0ZTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiIG9uQ2xpY2s9e3RvZ2dsZU1lbnV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtOYXZiYXJTdHlsZS5pdGVtX19tZW51X19jb2xsYXBzZWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVBpZ2d5QmFua30gY2xhc3NOYW1lPXtOYXZiYXJTdHlsZS5pY29uX19pdGVtTWVudV9fY29sbGFwc2VkfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e05hdmJhclN0eWxlLmxhYmVsX19pdGVtX19tZW51fT5Qcm9kdWN0b3M8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17TmF2YmFyU3R5bGUuaXRlbV9fbWVudV9fY29sbGFwc2VkICsgJyAnICsgTmF2YmFyU3R5bGUuX193aXRoQnV0dG9ufT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiL1wiIGNsYXNzTmFtZT1cImJvdG9uIGJnLXllbGxvd1wiPk9mZXJ0YXM8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17TmF2YmFyU3R5bGUuY29sbGFwc2VkX2luZm8gKyAnICcgKyBgdGV4dC1jZW50ZXJgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e05hdmJhclN0eWxlLnJlZGVzX19jb2xsYXBzZWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUZhY2Vib29rfSBjbGFzc05hbWU9e05hdmJhclN0eWxlLmljb25vUmVkfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhSW5zdGFncmFtfSBjbGFzc05hbWU9e05hdmJhclN0eWxlLmljb25vUmVkfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkXCI+JmNvcHk7VGVybWlub3MgeSBDb25kaWNpb25lczwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+ICBcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgeyghbW9kYWxJc09wZW4pP251bGw6XHJcbiAgICAgICAgICAgICAgICA8TW9kYWwgY2xvc2VNb2RhbD17Y2xvc2VNb2RhbH0+XHJcbiAgICAgICAgICAgICAgICAgICAge3JlbmRlckNvbnRlbmlkb01vZGFsKCl9XHJcbiAgICAgICAgICAgICAgICA8L01vZGFsPlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59XHJcbiBcclxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyOyJdLCJzb3VyY2VSb290IjoiIn0=