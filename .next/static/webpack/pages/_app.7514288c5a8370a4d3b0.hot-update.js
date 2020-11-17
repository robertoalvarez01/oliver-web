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
  }, "Inicio")))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    onClick: toggleMenu,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 29
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 33
    }
  }, __jsx("li", {
    className: _Navbar_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.item__menu__collapsed,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 37
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_10__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__["faPiggyBank"],
    className: _Navbar_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.icon__itemMenu__collapsed,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 41
    }
  }), __jsx("span", {
    className: _Navbar_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.label__item__menu,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 41
    }
  }, "Productos")))), props.logueado && props.usuario ? null : __jsx("li", {
    className: _Navbar_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.item__menu__collapsed,
    onClick: showModalLogin,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 29
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_10__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__["faUser"],
    className: _Navbar_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.icon__itemMenu__collapsed,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 33
    }
  }), __jsx("span", {
    className: _Navbar_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.label__item__menu,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 33
    }
  }, "Ingres\xE1 ahora / Registrate")), __jsx("li", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTmF2YmFyL2luZGV4LmpzIl0sIm5hbWVzIjpbIk5hdmJhciIsInByb3BzIiwidXNlRWZmZWN0IiwidHJhZXJJbmZvIiwidXNlU3RhdGUiLCJidXNxdWVkYSIsInNldEJ1c3F1ZWRhIiwibG9naW4iLCJzZXRMb2dpbiIsImNhcnJpdG8iLCJzZXRDYXJyaXRvIiwicmVnaXN0ZXIiLCJzZXRSZWdpc3RlciIsIm1vZGFsSXNPcGVuIiwic2V0TW9kYWxJc09wZW4iLCJsb2NhdGlvbiIsInVzZVJvdXRlciIsInNob3dNb2RhbExvZ2luIiwic2hvd1JlZ2lzdGVyIiwiY2xvc2VNb2RhbCIsInNob3dNb2RhbENhcnJpdG8iLCJ0b2dnbGVNZW51IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiTmF2YmFyU3R5bGUiLCJtZW51X19jb2xsYXBzZWQiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJzaG93Q29sbGFwc2VkIiwiaGFuZGxlQ2hhbmdlTWVudSIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVTdWJtaXRCdXNjYWRvciIsInByZXZlbnREZWZhdWx0IiwidHJpbSIsInBhdGhuYW1lIiwiUm91dGVyIiwicHVzaCIsIndpbmRvdyIsImFzc2lnbiIsInJlbmRlckNvbnRlbmlkb01vZGFsIiwiY29uc29sZSIsImxvZyIsIm5hdmJhciIsIndyYXBwZXJfX25hdmJhciIsImNvbnRhaW5lcl9fbG9nbyIsIlVSTF9DTE9VRF9TVE9SQUdFIiwibG9nbyIsImJvdG9uX19tZW51IiwiYnRuX2NhcnJpdG8iLCJjYXJyaXRvX21vYmlsZSIsImZhU2hvcHBpbmdDYXJ0IiwidHh0X19pdGVtX21lbnUiLCJmYUFsaWduTGVmdCIsImljb25fbWVudSIsImJ1c2NhZG9yIiwiZm9ybV9zZWFyY2hfbWVudSIsImNvbnRhaW5lcl9fbG9naW5fbWVudSIsImJ0bl9hY2NvdW50IiwiaGVhZGVyX19jb2xsYXBzZWRfbmF2IiwiY2xvc2VfYnRuX21lbnUiLCJtYWluX19jb2xsYXBzZWQiLCJsaXN0X19tZW51X19jb2xsYXBzZWQiLCJpdGVtX19tZW51X19jb2xsYXBzZWQiLCJmYUhvbWUiLCJpY29uX19pdGVtTWVudV9fY29sbGFwc2VkIiwibGFiZWxfX2l0ZW1fX21lbnUiLCJmYVBpZ2d5QmFuayIsImxvZ3VlYWRvIiwidXN1YXJpbyIsImZhVXNlciIsIl9fd2l0aEJ1dHRvbiIsImNvbGxhcHNlZF9pbmZvIiwicmVkZXNfX2NvbGxhcHNlZCIsImZhRmFjZWJvb2siLCJpY29ub1JlZCIsImZhSW5zdGFncmFtIiwibWFwU3RhdGVUb1Byb3BzIiwicmVkdWNlcnMiLCJ1c3VhcmlvUmVkdWNlciIsImNvbm5lY3QiLCJ1c3VhcmlvQWN0aW9ucyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBR0EsSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQ3RCQyx5REFBUyxDQUFDLFlBQU07QUFDWkQsU0FBSyxDQUFDRSxTQUFOO0FBQ0gsR0FGUSxFQUVOLEVBRk0sQ0FBVDs7QUFEc0Isa0JBSVVDLHNEQUFRLENBQUMsRUFBRCxDQUpsQjtBQUFBLE1BSWZDLFFBSmU7QUFBQSxNQUlMQyxXQUpLOztBQUFBLG1CQUtJRixzREFBUSxDQUFDLEtBQUQsQ0FMWjtBQUFBLE1BS2ZHLEtBTGU7QUFBQSxNQUtSQyxRQUxROztBQUFBLG1CQU1RSixzREFBUSxDQUFDLEtBQUQsQ0FOaEI7QUFBQSxNQU1mSyxPQU5lO0FBQUEsTUFNTkMsVUFOTTs7QUFBQSxtQkFPVU4sc0RBQVEsQ0FBQyxLQUFELENBUGxCO0FBQUEsTUFPZk8sUUFQZTtBQUFBLE1BT0xDLFdBUEs7O0FBQUEsbUJBUWdCUixzREFBUSxDQUFDLEtBQUQsQ0FSeEI7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S3NCLG9CQUFvQixFQUR6QixDQXhFUixDQURKO0FBK0VILENBOUlEOztHQUFNekMsTTtVQVNlZ0IscUQ7OztLQVRmaEIsTTs7QUErSU4sSUFBTThFLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQUMsUUFBUSxFQUFFO0FBQzlCLFNBQU9BLFFBQVEsQ0FBQ0MsY0FBaEI7QUFDSCxDQUZEOztBQUllQywySEFBTyxDQUFDSCxlQUFELEVBQWlCSSwyREFBakIsQ0FBUCxDQUF3Q2xGLE1BQXhDLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC43NTE0Mjg4YzVhODM3MGE0ZDNiMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LHt1c2VTdGF0ZSx1c2VFZmZlY3R9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IE5hdmJhclN0eWxlIGZyb20gJy4vTmF2YmFyLm1vZHVsZS5jc3MnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgUm91dGVyLHt1c2VSb3V0ZXJ9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IE1vZGFsIGZyb20gJy4uL01vZGFsL2luZGV4JztcclxuaW1wb3J0IExvZ2luIGZyb20gJy4uL0xvZ2luJztcclxuaW1wb3J0IFJlZ2lzdGVyIGZyb20gJy4uL0xvZ2luL1JlZ2lzdGVyJztcclxuaW1wb3J0IENhcnJpdG8gZnJvbSAnLi4vQ2Fycml0byc7XHJcbmltcG9ydCB7IGZhSG9tZSxmYVVzZXIsZmFQaWdneUJhbmssZmFTaG9wcGluZ0NhcnQsZmFBbGlnbkxlZnQgfSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCI7XHJcbmltcG9ydCB7ZmFGYWNlYm9vayxmYUluc3RhZ3JhbX0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtYnJhbmRzLXN2Zy1pY29ucyc7XHJcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIjtcclxuaW1wb3J0IHtVUkxfQ0xPVURfU1RPUkFHRX0gZnJvbSAnLi4vLi4vLi4vY29uZmlnL2luZGV4JztcclxuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCAqIGFzIHVzdWFyaW9BY3Rpb25zIGZyb20gJy4uLy4uLy4uL3N0b3JlL2FjdGlvbnMvdXN1YXJpb0FjdGlvbnMnO1xyXG5cclxuXHJcbmNvbnN0IE5hdmJhciA9IChwcm9wcykgPT4ge1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBwcm9wcy50cmFlckluZm8oKTtcclxuICAgIH0sIFtdKTtcclxuICAgIGNvbnN0IFtidXNxdWVkYSwgc2V0QnVzcXVlZGFdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW2xvZ2luLCBzZXRMb2dpbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbY2Fycml0bywgc2V0Q2Fycml0b10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbcmVnaXN0ZXIsIHNldFJlZ2lzdGVyXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFttb2RhbElzT3Blbiwgc2V0TW9kYWxJc09wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgbG9jYXRpb24gPSB1c2VSb3V0ZXIoKTtcclxuICAgIC8vYWN0aW9ucyBsb2dpbi1yZWdpc3RlclxyXG4gICAgY29uc3Qgc2hvd01vZGFsTG9naW4gPSgpPT57XHJcbiAgICAgICAgKHJlZ2lzdGVyKT9zZXRSZWdpc3RlcihmYWxzZSk6bnVsbDtcclxuICAgICAgICAoY2Fycml0byk/c2V0Q2Fycml0byhmYWxzZSk6bnVsbDtcclxuICAgICAgICBzZXRMb2dpbih0cnVlKTtcclxuICAgICAgICBzZXRNb2RhbElzT3Blbih0cnVlKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHNob3dSZWdpc3RlciA9ICgpPT57XHJcbiAgICAgICAgKGxvZ2luKT9zZXRMb2dpbihmYWxzZSk6ZmFsc2U7XHJcbiAgICAgICAgKGNhcnJpdG8pP3NldENhcnJpdG8oZmFsc2UpOm51bGw7XHJcbiAgICAgICAgc2V0UmVnaXN0ZXIodHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY2xvc2VNb2RhbD0oKT0+KFxyXG4gICAgICAgIHNldE1vZGFsSXNPcGVuKGZhbHNlKVxyXG4gICAgKVxyXG4gICAgXHJcbiAgICBcclxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vXHJcblxyXG5cclxuICAgIC8vYWN0aW9ucyBjYXJyaXRvXHJcbiAgICBjb25zdCBzaG93TW9kYWxDYXJyaXRvID0gKCk9PntcclxuICAgICAgICAobG9naW4pP3NldExvZ2luKGZhbHNlKTpudWxsO1xyXG4gICAgICAgIChyZWdpc3Rlcik/c2V0UmVnaXN0ZXIoZmFsc2UpOm51bGw7XHJcbiAgICAgICAgc2V0Q2Fycml0byh0cnVlKTtcclxuICAgICAgICBzZXRNb2RhbElzT3Blbih0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB0b2dnbGVNZW51ID0gKCk9PntcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKE5hdmJhclN0eWxlLm1lbnVfX2NvbGxhcHNlZClbMF0uY2xhc3NMaXN0LnRvZ2dsZShOYXZiYXJTdHlsZS5zaG93Q29sbGFwc2VkKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVDaGFuZ2VNZW51ID0gZXZlbnQ9PntcclxuICAgICAgICBzZXRCdXNxdWVkYShldmVudC50YXJnZXQudmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdEJ1c2NhZG9yID0gZXZlbnQ9PntcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGlmKGJ1c3F1ZWRhLnRyaW0oKSA9PT0gJycpcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIGlmKGxvY2F0aW9uLnBhdGhuYW1lID09ICcvJyl7XHJcbiAgICAgICAgICAgIHJldHVybiBSb3V0ZXIucHVzaChgL3Byb2R1Y3Rvcz9zZWFyY2g9JHtidXNxdWVkYX1gKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHdpbmRvdy5sb2NhdGlvbi5hc3NpZ24oYC9wcm9kdWN0b3M/c2VhcmNoPSR7YnVzcXVlZGF9YCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcmVuZGVyQ29udGVuaWRvTW9kYWwgPSAoKT0+e1xyXG4gICAgICAgIGlmKGxvZ2luKSByZXR1cm4gPExvZ2luIHNob3dSZWdpc3Rlcj17c2hvd1JlZ2lzdGVyfS8+O1xyXG4gICAgICAgIGlmKHJlZ2lzdGVyKSByZXR1cm4gPFJlZ2lzdGVyIHNob3dMb2dpbj17c2hvd01vZGFsTG9naW59Lz47XHJcbiAgICAgICAgaWYoY2Fycml0bykgcmV0dXJuIDxDYXJyaXRvLz5cclxuICAgIH1cclxuICAgIGNvbnNvbGUubG9nKHByb3BzKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e05hdmJhclN0eWxlLm5hdmJhciArICcgJyArIGBzdGlja3ktdG9wYH0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17TmF2YmFyU3R5bGUud3JhcHBlcl9fbmF2YmFyICArICcgJyArICBgY29udGFpbmVyYH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJyb3cgbWwtMCB3LTEwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17TmF2YmFyU3R5bGUuY29udGFpbmVyX19sb2dvfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtgJHtVUkxfQ0xPVURfU1RPUkFHRX0vc3RhdGljL1BlcnJvLnBuZ2B9IGNsYXNzTmFtZT17TmF2YmFyU3R5bGUubG9nbyArICcgJyArIGBpbWctZmx1aWRgfSBhbHQ9XCJPbGl2ZXIgcGV0IHNob3BcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtOYXZiYXJTdHlsZS5ib3Rvbl9fbWVudSArICcgJyArIE5hdmJhclN0eWxlLmJ0bl9jYXJyaXRvICsgJyAnICsgTmF2YmFyU3R5bGUuY2Fycml0b19tb2JpbGV9IG9uQ2xpY2s9e3Nob3dNb2RhbENhcnJpdG99PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVNob3BwaW5nQ2FydH0gY2xhc3NOYW1lPXtOYXZiYXJTdHlsZS50eHRfX2l0ZW1fbWVudX0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gIG9uQ2xpY2s9e3RvZ2dsZU1lbnV9IGljb249e2ZhQWxpZ25MZWZ0fSBjbGFzc05hbWU9e05hdmJhclN0eWxlLmljb25fbWVudX0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9e05hdmJhclN0eWxlLmJ1c2NhZG9yICsgJyAnICsgYGNvbC1zbS00IGNvbC14bC03IGNvbC1tZC03IGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIgaW5wdXQtZ3JvdXBgfSBhdXRvQ29tcGxldGU9XCJvZmZcIiBvblN1Ym1pdD17aGFuZGxlU3VibWl0QnVzY2Fkb3J9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcmVxdWlyZWQgY2xhc3NOYW1lPXtOYXZiYXJTdHlsZS5mb3JtX3NlYXJjaF9tZW51ICsgJyAnICsgYGZvcm0tY29udHJvbGB9IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2VNZW51fSBwbGFjZWhvbGRlcj1cIsK/UXXDqSBhbmRhcyBidXNjYW5kbz9cIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e05hdmJhclN0eWxlLmNvbnRhaW5lcl9fbG9naW5fbWVudSArICcgJyArIGBjb2wtc20tNyBjb2wteGwtNCBjb2wtbWQtNCBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1lbmRgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9e3Nob3dNb2RhbExvZ2lufSBjbGFzc05hbWU9e05hdmJhclN0eWxlLmJvdG9uX19tZW51ICsgJyAnICsgTmF2YmFyU3R5bGUuYnRuX2FjY291bnR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17TmF2YmFyU3R5bGUudHh0X19pdGVtX21lbnV9PkluZ3Jlc8OhIGFob3JhIC8gUmVnaXN0cmF0ZTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17TmF2YmFyU3R5bGUuYm90b25fX21lbnUgKyAnICcgKyBOYXZiYXJTdHlsZS5idG5fY2Fycml0b30gb25DbGljaz17c2hvd01vZGFsQ2Fycml0b30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVNob3BwaW5nQ2FydH0gY2xhc3NOYW1lPXtOYXZiYXJTdHlsZS50eHRfX2l0ZW1fbWVudX0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L25hdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e05hdmJhclN0eWxlLm1lbnVfX2NvbGxhcHNlZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtOYXZiYXJTdHlsZS5oZWFkZXJfX2NvbGxhcHNlZF9uYXZ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YCR7VVJMX0NMT1VEX1NUT1JBR0V9L3N0YXRpYy9QZXJyby5wbmdgfSBjbGFzc05hbWU9e05hdmJhclN0eWxlLmxvZ299IGFsdD1cIk9saXZlciBwZXQgc2hvcFwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgb25DbGljaz17dG9nZ2xlTWVudX0gY2xhc3NOYW1lPXtOYXZiYXJTdHlsZS5jbG9zZV9idG5fbWVudSArICcgJyArIGBmYXMgZmEtdGltZXNgfT48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtOYXZiYXJTdHlsZS5tYWluX19jb2xsYXBzZWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPXtOYXZiYXJTdHlsZS5saXN0X19tZW51X19jb2xsYXBzZWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIiBvbkNsaWNrPXt0b2dnbGVNZW51fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17TmF2YmFyU3R5bGUuaXRlbV9fbWVudV9fY29sbGFwc2VkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFIb21lfSBjbGFzc05hbWU9e05hdmJhclN0eWxlLmljb25fX2l0ZW1NZW51X19jb2xsYXBzZWR9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17TmF2YmFyU3R5bGUubGFiZWxfX2l0ZW1fX21lbnV9PkluaWNpbzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiIG9uQ2xpY2s9e3RvZ2dsZU1lbnV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtOYXZiYXJTdHlsZS5pdGVtX19tZW51X19jb2xsYXBzZWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVBpZ2d5QmFua30gY2xhc3NOYW1lPXtOYXZiYXJTdHlsZS5pY29uX19pdGVtTWVudV9fY29sbGFwc2VkfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e05hdmJhclN0eWxlLmxhYmVsX19pdGVtX19tZW51fT5Qcm9kdWN0b3M8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyhwcm9wcy5sb2d1ZWFkbyAmJiBwcm9wcy51c3VhcmlvKT9udWxsOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17TmF2YmFyU3R5bGUuaXRlbV9fbWVudV9fY29sbGFwc2VkfSBvbkNsaWNrPXtzaG93TW9kYWxMb2dpbn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVVzZXJ9IGNsYXNzTmFtZT17TmF2YmFyU3R5bGUuaWNvbl9faXRlbU1lbnVfX2NvbGxhcHNlZH0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17TmF2YmFyU3R5bGUubGFiZWxfX2l0ZW1fX21lbnV9PkluZ3Jlc8OhIGFob3JhIC8gUmVnaXN0cmF0ZTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtOYXZiYXJTdHlsZS5pdGVtX19tZW51X19jb2xsYXBzZWQgKyAnICcgKyBOYXZiYXJTdHlsZS5fX3dpdGhCdXR0b259PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvXCIgY2xhc3NOYW1lPVwiYm90b24gYmcteWVsbG93XCI+T2ZlcnRhczwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtOYXZiYXJTdHlsZS5jb2xsYXBzZWRfaW5mbyArICcgJyArIGB0ZXh0LWNlbnRlcmB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17TmF2YmFyU3R5bGUucmVkZXNfX2NvbGxhcHNlZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhRmFjZWJvb2t9IGNsYXNzTmFtZT17TmF2YmFyU3R5bGUuaWNvbm9SZWR9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFJbnN0YWdyYW19IGNsYXNzTmFtZT17TmF2YmFyU3R5bGUuaWNvbm9SZWR9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtbXV0ZWRcIj4mY29weTtUZXJtaW5vcyB5IENvbmRpY2lvbmVzPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj4gIFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB7KCFtb2RhbElzT3Blbik/bnVsbDpcclxuICAgICAgICAgICAgICAgIDxNb2RhbCBjbG9zZU1vZGFsPXtjbG9zZU1vZGFsfT5cclxuICAgICAgICAgICAgICAgICAgICB7cmVuZGVyQ29udGVuaWRvTW9kYWwoKX1cclxuICAgICAgICAgICAgICAgIDwvTW9kYWw+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn1cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gcmVkdWNlcnM9PntcclxuICAgIHJldHVybiByZWR1Y2Vycy51c3VhcmlvUmVkdWNlcjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsdXN1YXJpb0FjdGlvbnMpKE5hdmJhcik7Il0sInNvdXJjZVJvb3QiOiIifQ==