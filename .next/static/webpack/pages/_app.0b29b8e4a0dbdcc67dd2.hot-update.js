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
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store_actions_usuarioActions__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../store/actions/usuarioActions */ "./store/actions/usuarioActions.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\franc\\Documents\\oliver-2\\sitio-desa\\src\\components\\Navbar\\index.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;















var Navbar = function Navbar(props) {
  _s();

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    props.traerInfo();
  }, []);

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
      setModalIsOpen = _useState5[1];

  var location = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])(); //actions login-register

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

    if (location.pathname == '/') {
      return next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push("/productos?search=".concat(busqueda));
    }

    return window.location.assign("/productos?search=".concat(busqueda));
  };

  var renderContenidoModal = function renderContenidoModal() {
    if (login) return __jsx(_Login__WEBPACK_IMPORTED_MODULE_5__["default"], {
      showRegister: showRegister,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 26
      }
    });
    if (register) return __jsx(_Login_Register__WEBPACK_IMPORTED_MODULE_6__["default"], {
      showLogin: showModalLogin,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 29
      }
    });
    if (carrito) return __jsx(_Carrito__WEBPACK_IMPORTED_MODULE_7__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 28
      }
    });
  };

  console.log(props);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: _Navbar_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.navbar + ' ' + "sticky-top",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: _Navbar_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.wrapper__navbar + ' ' + "container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 17
    }
  }, __jsx("nav", {
    className: "row ml-0 w-100",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: _Navbar_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.container__logo,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 25
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 29
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 33
    }
  }, __jsx("img", {
    src: "".concat(_config_index__WEBPACK_IMPORTED_MODULE_11__["URL_CLOUD_STORAGE"], "/static/Perro.png"),
    className: _Navbar_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.logo + ' ' + "img-fluid",
    alt: "Oliver pet shop",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 37
    }
  })))), __jsx("span", {
    className: _Navbar_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.boton__menu + ' ' + _Navbar_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.btn_carrito + ' ' + _Navbar_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.carrito_mobile,
    onClick: showModalCarrito,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 25
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_10__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__["faShoppingCart"],
    className: _Navbar_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.txt__item_menu,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 29
    }
  })), __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_10__["FontAwesomeIcon"], {
    onClick: toggleMenu,
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__["faAlignLeft"],
    className: _Navbar_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.icon_menu,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 25
    }
  }), __jsx("form", {
    className: _Navbar_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.buscador + ' ' + "col-sm-4 col-xl-7 col-md-7 d-flex align-items-center input-group",
    autoComplete: "off",
    onSubmit: handleSubmitBuscador,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
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
      lineNumber: 97,
      columnNumber: 29
    }
  })), __jsx("div", {
    className: _Navbar_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.container__login_menu + ' ' + "col-sm-7 col-xl-4 col-md-4 d-flex align-items-center justify-content-end",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 25
    }
  }, __jsx("span", {
    onClick: showModalLogin,
    className: _Navbar_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.boton__menu + ' ' + _Navbar_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.btn_account,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 29
    }
  }, __jsx("span", {
    className: _Navbar_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.txt__item_menu,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 33
    }
  }, "Ingres\xE1 ahora / Registrate")), __jsx("span", {
    className: _Navbar_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.boton__menu + ' ' + _Navbar_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.btn_carrito,
    onClick: showModalCarrito,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 29
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_10__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__["faShoppingCart"],
    className: _Navbar_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.txt__item_menu,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 33
    }
  }))))), __jsx("div", {
    className: _Navbar_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.menu__collapsed,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 17
    }
  }, __jsx("section", {
    className: _Navbar_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.header__collapsed_nav,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: "".concat(_config_index__WEBPACK_IMPORTED_MODULE_11__["URL_CLOUD_STORAGE"], "/static/Perro.png"),
    className: _Navbar_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.logo,
    alt: "Oliver pet shop",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 25
    }
  }), __jsx("i", {
    onClick: toggleMenu,
    className: _Navbar_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.close_btn_menu + ' ' + "fas fa-times",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 25
    }
  })), __jsx("div", {
    className: _Navbar_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.main__collapsed,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 21
    }
  }, __jsx("ul", {
    className: _Navbar_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.list__menu__collapsed,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 25
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    onClick: toggleMenu,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 29
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 33
    }
  }, __jsx("li", {
    className: _Navbar_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.item__menu__collapsed,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 37
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_10__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__["faHome"],
    className: _Navbar_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.icon__itemMenu__collapsed,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 41
    }
  }), __jsx("span", {
    className: _Navbar_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.label__item__menu,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 41
    }
  }, "Inicio")))), props.logueado && props.usuario ? null : __jsx("li", {
    className: _Navbar_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.item__menu__collapsed,
    onClick: showModalLogin,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 29
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_10__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__["faUser"],
    className: _Navbar_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.icon__itemMenu__collapsed,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 33
    }
  }), __jsx("span", {
    className: _Navbar_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.label__item__menu,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 33
    }
  }, "Ingres\xE1 ahora / Registrate")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    onClick: toggleMenu,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 29
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 33
    }
  }, __jsx("li", {
    className: _Navbar_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.item__menu__collapsed,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 37
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_10__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__["faPiggyBank"],
    className: _Navbar_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.icon__itemMenu__collapsed,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 41
    }
  }), __jsx("span", {
    className: _Navbar_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.label__item__menu,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 41
    }
  }, "Productos")))), __jsx("li", {
    className: _Navbar_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.item__menu__collapsed + ' ' + _Navbar_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.__withButton,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 29
    }
  }, __jsx("a", {
    href: "/",
    className: "boton bg-yellow",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 33
    }
  }, "Ofertas")))), __jsx("section", {
    className: _Navbar_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.collapsed_info + ' ' + "text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: _Navbar_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.redes__collapsed,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 25
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_10__["FontAwesomeIcon"], {
    icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_9__["faFacebook"],
    className: _Navbar_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.iconoRed,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 29
    }
  }), __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_10__["FontAwesomeIcon"], {
    icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_9__["faInstagram"],
    className: _Navbar_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.iconoRed,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 29
    }
  })), __jsx("span", {
    className: "text-muted",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 25
    }
  }, "\xA9Terminos y Condiciones")))), !modalIsOpen ? null : __jsx(_Modal_index__WEBPACK_IMPORTED_MODULE_4__["default"], {
    closeModal: closeModal,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 17
    }
  }, renderContenidoModal()));
};

_s(Navbar, "foB/EIZn2Ra0AVopDp1lQH8ShuA=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"]];
});

_c = Navbar;

var mapStateToProps = function mapStateToProps(reducers) {
  return reducers.usuarioReducer;
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_12__["connect"])(mapStateToProps, _store_actions_usuarioActions__WEBPACK_IMPORTED_MODULE_13__)(Navbar));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTmF2YmFyL2luZGV4LmpzIl0sIm5hbWVzIjpbIk5hdmJhciIsInByb3BzIiwidXNlRWZmZWN0IiwidHJhZXJJbmZvIiwidXNlU3RhdGUiLCJidXNxdWVkYSIsInNldEJ1c3F1ZWRhIiwibG9naW4iLCJzZXRMb2dpbiIsImNhcnJpdG8iLCJzZXRDYXJyaXRvIiwicmVnaXN0ZXIiLCJzZXRSZWdpc3RlciIsIm1vZGFsSXNPcGVuIiwic2V0TW9kYWxJc09wZW4iLCJsb2NhdGlvbiIsInVzZVJvdXRlciIsInNob3dNb2RhbExvZ2luIiwic2hvd1JlZ2lzdGVyIiwiY2xvc2VNb2RhbCIsInNob3dNb2RhbENhcnJpdG8iLCJ0b2dnbGVNZW51IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiTmF2YmFyU3R5bGUiLCJtZW51X19jb2xsYXBzZWQiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJzaG93Q29sbGFwc2VkIiwiaGFuZGxlQ2hhbmdlTWVudSIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVTdWJtaXRCdXNjYWRvciIsInByZXZlbnREZWZhdWx0IiwidHJpbSIsInBhdGhuYW1lIiwiUm91dGVyIiwicHVzaCIsIndpbmRvdyIsImFzc2lnbiIsInJlbmRlckNvbnRlbmlkb01vZGFsIiwiY29uc29sZSIsImxvZyIsIm5hdmJhciIsIndyYXBwZXJfX25hdmJhciIsImNvbnRhaW5lcl9fbG9nbyIsIlVSTF9DTE9VRF9TVE9SQUdFIiwibG9nbyIsImJvdG9uX19tZW51IiwiYnRuX2NhcnJpdG8iLCJjYXJyaXRvX21vYmlsZSIsImZhU2hvcHBpbmdDYXJ0IiwidHh0X19pdGVtX21lbnUiLCJmYUFsaWduTGVmdCIsImljb25fbWVudSIsImJ1c2NhZG9yIiwiZm9ybV9zZWFyY2hfbWVudSIsImNvbnRhaW5lcl9fbG9naW5fbWVudSIsImJ0bl9hY2NvdW50IiwiaGVhZGVyX19jb2xsYXBzZWRfbmF2IiwiY2xvc2VfYnRuX21lbnUiLCJtYWluX19jb2xsYXBzZWQiLCJsaXN0X19tZW51X19jb2xsYXBzZWQiLCJpdGVtX19tZW51X19jb2xsYXBzZWQiLCJmYUhvbWUiLCJpY29uX19pdGVtTWVudV9fY29sbGFwc2VkIiwibGFiZWxfX2l0ZW1fX21lbnUiLCJsb2d1ZWFkbyIsInVzdWFyaW8iLCJmYVVzZXIiLCJmYVBpZ2d5QmFuayIsIl9fd2l0aEJ1dHRvbiIsImNvbGxhcHNlZF9pbmZvIiwicmVkZXNfX2NvbGxhcHNlZCIsImZhRmFjZWJvb2siLCJpY29ub1JlZCIsImZhSW5zdGFncmFtIiwibWFwU3RhdGVUb1Byb3BzIiwicmVkdWNlcnMiLCJ1c3VhcmlvUmVkdWNlciIsImNvbm5lY3QiLCJ1c3VhcmlvQWN0aW9ucyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBR0EsSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQ3RCQyx5REFBUyxDQUFDLFlBQU07QUFDWkQsU0FBSyxDQUFDRSxTQUFOO0FBQ0gsR0FGUSxFQUVOLEVBRk0sQ0FBVDs7QUFEc0Isa0JBSVVDLHNEQUFRLENBQUMsRUFBRCxDQUpsQjtBQUFBLE1BSWZDLFFBSmU7QUFBQSxNQUlMQyxXQUpLOztBQUFBLG1CQUtJRixzREFBUSxDQUFDLEtBQUQsQ0FMWjtBQUFBLE1BS2ZHLEtBTGU7QUFBQSxNQUtSQyxRQUxROztBQUFBLG1CQU1RSixzREFBUSxDQUFDLEtBQUQsQ0FOaEI7QUFBQSxNQU1mSyxPQU5lO0FBQUEsTUFNTkMsVUFOTTs7QUFBQSxtQkFPVU4sc0RBQVEsQ0FBQyxLQUFELENBUGxCO0FBQUEsTUFPZk8sUUFQZTtBQUFBLE1BT0xDLFdBUEs7O0FBQUEsbUJBUWdCUixzREFBUSxDQUFDLEtBQUQsQ0FSeEI7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QixvQkFBb0IsRUFEekIsQ0F4RVIsQ0FESjtBQStFSCxDQTlJRDs7R0FBTXpDLE07VUFTZWdCLHFEOzs7S0FUZmhCLE07O0FBK0lOLElBQU04RSxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUFDLFFBQVEsRUFBRTtBQUM5QixTQUFPQSxRQUFRLENBQUNDLGNBQWhCO0FBQ0gsQ0FGRDs7QUFJZUMsMkhBQU8sQ0FBQ0gsZUFBRCxFQUFpQkksMkRBQWpCLENBQVAsQ0FBd0NsRixNQUF4QyxDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuMGIyOWI4ZTRhMGRiZGNjNjdkZDIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCx7dXNlU3RhdGUsdXNlRWZmZWN0fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBOYXZiYXJTdHlsZSBmcm9tICcuL05hdmJhci5tb2R1bGUuY3NzJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IFJvdXRlcix7dXNlUm91dGVyfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBNb2RhbCBmcm9tICcuLi9Nb2RhbC9pbmRleCc7XHJcbmltcG9ydCBMb2dpbiBmcm9tICcuLi9Mb2dpbic7XHJcbmltcG9ydCBSZWdpc3RlciBmcm9tICcuLi9Mb2dpbi9SZWdpc3Rlcic7XHJcbmltcG9ydCBDYXJyaXRvIGZyb20gJy4uL0NhcnJpdG8nO1xyXG5pbXBvcnQgeyBmYUhvbWUsZmFVc2VyLGZhUGlnZ3lCYW5rLGZhU2hvcHBpbmdDYXJ0LGZhQWxpZ25MZWZ0IH0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29uc1wiO1xyXG5pbXBvcnQge2ZhRmFjZWJvb2ssZmFJbnN0YWdyYW19IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLWJyYW5kcy1zdmctaWNvbnMnO1xyXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tIFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCI7XHJcbmltcG9ydCB7VVJMX0NMT1VEX1NUT1JBR0V9IGZyb20gJy4uLy4uLy4uL2NvbmZpZy9pbmRleCc7XHJcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgKiBhcyB1c3VhcmlvQWN0aW9ucyBmcm9tICcuLi8uLi8uLi9zdG9yZS9hY3Rpb25zL3VzdWFyaW9BY3Rpb25zJztcclxuXHJcblxyXG5jb25zdCBOYXZiYXIgPSAocHJvcHMpID0+IHtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgcHJvcHMudHJhZXJJbmZvKCk7XHJcbiAgICB9LCBbXSk7XHJcbiAgICBjb25zdCBbYnVzcXVlZGEsIHNldEJ1c3F1ZWRhXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtsb2dpbiwgc2V0TG9naW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW2NhcnJpdG8sIHNldENhcnJpdG9dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW3JlZ2lzdGVyLCBzZXRSZWdpc3Rlcl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbbW9kYWxJc09wZW4sIHNldE1vZGFsSXNPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IGxvY2F0aW9uID0gdXNlUm91dGVyKCk7XHJcbiAgICAvL2FjdGlvbnMgbG9naW4tcmVnaXN0ZXJcclxuICAgIGNvbnN0IHNob3dNb2RhbExvZ2luID0oKT0+e1xyXG4gICAgICAgIChyZWdpc3Rlcik/c2V0UmVnaXN0ZXIoZmFsc2UpOm51bGw7XHJcbiAgICAgICAgKGNhcnJpdG8pP3NldENhcnJpdG8oZmFsc2UpOm51bGw7XHJcbiAgICAgICAgc2V0TG9naW4odHJ1ZSk7XHJcbiAgICAgICAgc2V0TW9kYWxJc09wZW4odHJ1ZSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzaG93UmVnaXN0ZXIgPSAoKT0+e1xyXG4gICAgICAgIChsb2dpbik/c2V0TG9naW4oZmFsc2UpOmZhbHNlO1xyXG4gICAgICAgIChjYXJyaXRvKT9zZXRDYXJyaXRvKGZhbHNlKTpudWxsO1xyXG4gICAgICAgIHNldFJlZ2lzdGVyKHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNsb3NlTW9kYWw9KCk9PihcclxuICAgICAgICBzZXRNb2RhbElzT3BlbihmYWxzZSlcclxuICAgIClcclxuICAgIFxyXG4gICAgXHJcbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vL1xyXG5cclxuXHJcbiAgICAvL2FjdGlvbnMgY2Fycml0b1xyXG4gICAgY29uc3Qgc2hvd01vZGFsQ2Fycml0byA9ICgpPT57XHJcbiAgICAgICAgKGxvZ2luKT9zZXRMb2dpbihmYWxzZSk6bnVsbDtcclxuICAgICAgICAocmVnaXN0ZXIpP3NldFJlZ2lzdGVyKGZhbHNlKTpudWxsO1xyXG4gICAgICAgIHNldENhcnJpdG8odHJ1ZSk7XHJcbiAgICAgICAgc2V0TW9kYWxJc09wZW4odHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgdG9nZ2xlTWVudSA9ICgpPT57XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShOYXZiYXJTdHlsZS5tZW51X19jb2xsYXBzZWQpWzBdLmNsYXNzTGlzdC50b2dnbGUoTmF2YmFyU3R5bGUuc2hvd0NvbGxhcHNlZCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlTWVudSA9IGV2ZW50PT57XHJcbiAgICAgICAgc2V0QnVzcXVlZGEoZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVTdWJtaXRCdXNjYWRvciA9IGV2ZW50PT57XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBpZihidXNxdWVkYS50cmltKCkgPT09ICcnKXJldHVybiBmYWxzZTtcclxuICAgICAgICBpZihsb2NhdGlvbi5wYXRobmFtZSA9PSAnLycpe1xyXG4gICAgICAgICAgICByZXR1cm4gUm91dGVyLnB1c2goYC9wcm9kdWN0b3M/c2VhcmNoPSR7YnVzcXVlZGF9YCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB3aW5kb3cubG9jYXRpb24uYXNzaWduKGAvcHJvZHVjdG9zP3NlYXJjaD0ke2J1c3F1ZWRhfWApO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHJlbmRlckNvbnRlbmlkb01vZGFsID0gKCk9PntcclxuICAgICAgICBpZihsb2dpbikgcmV0dXJuIDxMb2dpbiBzaG93UmVnaXN0ZXI9e3Nob3dSZWdpc3Rlcn0vPjtcclxuICAgICAgICBpZihyZWdpc3RlcikgcmV0dXJuIDxSZWdpc3RlciBzaG93TG9naW49e3Nob3dNb2RhbExvZ2lufS8+O1xyXG4gICAgICAgIGlmKGNhcnJpdG8pIHJldHVybiA8Q2Fycml0by8+XHJcbiAgICB9XHJcbiAgICBjb25zb2xlLmxvZyhwcm9wcyk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtOYXZiYXJTdHlsZS5uYXZiYXIgKyAnICcgKyBgc3RpY2t5LXRvcGB9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e05hdmJhclN0eWxlLndyYXBwZXJfX25hdmJhciAgKyAnICcgKyAgYGNvbnRhaW5lcmB9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPVwicm93IG1sLTAgdy0xMDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e05hdmJhclN0eWxlLmNvbnRhaW5lcl9fbG9nb30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YCR7VVJMX0NMT1VEX1NUT1JBR0V9L3N0YXRpYy9QZXJyby5wbmdgfSBjbGFzc05hbWU9e05hdmJhclN0eWxlLmxvZ28gKyAnICcgKyBgaW1nLWZsdWlkYH0gYWx0PVwiT2xpdmVyIHBldCBzaG9wXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17TmF2YmFyU3R5bGUuYm90b25fX21lbnUgKyAnICcgKyBOYXZiYXJTdHlsZS5idG5fY2Fycml0byArICcgJyArIE5hdmJhclN0eWxlLmNhcnJpdG9fbW9iaWxlfSBvbkNsaWNrPXtzaG93TW9kYWxDYXJyaXRvfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFTaG9wcGluZ0NhcnR9IGNsYXNzTmFtZT17TmF2YmFyU3R5bGUudHh0X19pdGVtX21lbnV9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uICBvbkNsaWNrPXt0b2dnbGVNZW51fSBpY29uPXtmYUFsaWduTGVmdH0gY2xhc3NOYW1lPXtOYXZiYXJTdHlsZS5pY29uX21lbnV9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPXtOYXZiYXJTdHlsZS5idXNjYWRvciArICcgJyArIGBjb2wtc20tNCBjb2wteGwtNyBjb2wtbWQtNyBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIGlucHV0LWdyb3VwYH0gYXV0b0NvbXBsZXRlPVwib2ZmXCIgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdEJ1c2NhZG9yfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHJlcXVpcmVkIGNsYXNzTmFtZT17TmF2YmFyU3R5bGUuZm9ybV9zZWFyY2hfbWVudSArICcgJyArIGBmb3JtLWNvbnRyb2xgfSBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlTWVudX0gcGxhY2Vob2xkZXI9XCLCv1F1w6kgYW5kYXMgYnVzY2FuZG8/XCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtOYXZiYXJTdHlsZS5jb250YWluZXJfX2xvZ2luX21lbnUgKyAnICcgKyBgY29sLXNtLTcgY29sLXhsLTQgY29sLW1kLTQgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtZW5kYH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBvbkNsaWNrPXtzaG93TW9kYWxMb2dpbn0gY2xhc3NOYW1lPXtOYXZiYXJTdHlsZS5ib3Rvbl9fbWVudSArICcgJyArIE5hdmJhclN0eWxlLmJ0bl9hY2NvdW50fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e05hdmJhclN0eWxlLnR4dF9faXRlbV9tZW51fT5JbmdyZXPDoSBhaG9yYSAvIFJlZ2lzdHJhdGU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e05hdmJhclN0eWxlLmJvdG9uX19tZW51ICsgJyAnICsgTmF2YmFyU3R5bGUuYnRuX2NhcnJpdG99IG9uQ2xpY2s9e3Nob3dNb2RhbENhcnJpdG99PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFTaG9wcGluZ0NhcnR9IGNsYXNzTmFtZT17TmF2YmFyU3R5bGUudHh0X19pdGVtX21lbnV9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9uYXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtOYXZiYXJTdHlsZS5tZW51X19jb2xsYXBzZWR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17TmF2YmFyU3R5bGUuaGVhZGVyX19jb2xsYXBzZWRfbmF2fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2Ake1VSTF9DTE9VRF9TVE9SQUdFfS9zdGF0aWMvUGVycm8ucG5nYH0gY2xhc3NOYW1lPXtOYXZiYXJTdHlsZS5sb2dvfSBhbHQ9XCJPbGl2ZXIgcGV0IHNob3BcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIG9uQ2xpY2s9e3RvZ2dsZU1lbnV9IGNsYXNzTmFtZT17TmF2YmFyU3R5bGUuY2xvc2VfYnRuX21lbnUgKyAnICcgKyBgZmFzIGZhLXRpbWVzYH0+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17TmF2YmFyU3R5bGUubWFpbl9fY29sbGFwc2VkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT17TmF2YmFyU3R5bGUubGlzdF9fbWVudV9fY29sbGFwc2VkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCIgb25DbGljaz17dG9nZ2xlTWVudX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e05hdmJhclN0eWxlLml0ZW1fX21lbnVfX2NvbGxhcHNlZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhSG9tZX0gY2xhc3NOYW1lPXtOYXZiYXJTdHlsZS5pY29uX19pdGVtTWVudV9fY29sbGFwc2VkfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e05hdmJhclN0eWxlLmxhYmVsX19pdGVtX19tZW51fT5JbmljaW88L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyhwcm9wcy5sb2d1ZWFkbyAmJiBwcm9wcy51c3VhcmlvKT9udWxsOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17TmF2YmFyU3R5bGUuaXRlbV9fbWVudV9fY29sbGFwc2VkfSBvbkNsaWNrPXtzaG93TW9kYWxMb2dpbn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVVzZXJ9IGNsYXNzTmFtZT17TmF2YmFyU3R5bGUuaWNvbl9faXRlbU1lbnVfX2NvbGxhcHNlZH0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17TmF2YmFyU3R5bGUubGFiZWxfX2l0ZW1fX21lbnV9PkluZ3Jlc8OhIGFob3JhIC8gUmVnaXN0cmF0ZTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiIG9uQ2xpY2s9e3RvZ2dsZU1lbnV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtOYXZiYXJTdHlsZS5pdGVtX19tZW51X19jb2xsYXBzZWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVBpZ2d5QmFua30gY2xhc3NOYW1lPXtOYXZiYXJTdHlsZS5pY29uX19pdGVtTWVudV9fY29sbGFwc2VkfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e05hdmJhclN0eWxlLmxhYmVsX19pdGVtX19tZW51fT5Qcm9kdWN0b3M8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17TmF2YmFyU3R5bGUuaXRlbV9fbWVudV9fY29sbGFwc2VkICsgJyAnICsgTmF2YmFyU3R5bGUuX193aXRoQnV0dG9ufT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiL1wiIGNsYXNzTmFtZT1cImJvdG9uIGJnLXllbGxvd1wiPk9mZXJ0YXM8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17TmF2YmFyU3R5bGUuY29sbGFwc2VkX2luZm8gKyAnICcgKyBgdGV4dC1jZW50ZXJgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e05hdmJhclN0eWxlLnJlZGVzX19jb2xsYXBzZWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUZhY2Vib29rfSBjbGFzc05hbWU9e05hdmJhclN0eWxlLmljb25vUmVkfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhSW5zdGFncmFtfSBjbGFzc05hbWU9e05hdmJhclN0eWxlLmljb25vUmVkfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkXCI+JmNvcHk7VGVybWlub3MgeSBDb25kaWNpb25lczwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+ICBcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgeyghbW9kYWxJc09wZW4pP251bGw6XHJcbiAgICAgICAgICAgICAgICA8TW9kYWwgY2xvc2VNb2RhbD17Y2xvc2VNb2RhbH0+XHJcbiAgICAgICAgICAgICAgICAgICAge3JlbmRlckNvbnRlbmlkb01vZGFsKCl9XHJcbiAgICAgICAgICAgICAgICA8L01vZGFsPlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59XHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHJlZHVjZXJzPT57XHJcbiAgICByZXR1cm4gcmVkdWNlcnMudXN1YXJpb1JlZHVjZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLHVzdWFyaW9BY3Rpb25zKShOYXZiYXIpOyJdLCJzb3VyY2VSb290IjoiIn0=