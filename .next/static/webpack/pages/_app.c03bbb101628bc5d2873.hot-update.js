webpackHotUpdate_N_E("pages/_app",{

/***/ "./src/components/Navbar/index.js":
/*!****************************************!*\
  !*** ./src/components/Navbar/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Navbar_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Navbar.module.css */ "./src/components/Navbar/Navbar.module.css");
/* harmony import */ var _Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Navbar_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Modal_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Modal/index */ "./src/components/Modal/index.js");
/* harmony import */ var _Login__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Login */ "./src/components/Login/index.js");
/* harmony import */ var _Login_Register__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Login/Register */ "./src/components/Login/Register.js");
/* harmony import */ var _Carrito__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Carrito */ "./src/components/Carrito/index.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "./node_modules/@fortawesome/free-brands-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _config_index__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../config/index */ "./config/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store_actions_usuarioActions__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../store/actions/usuarioActions */ "./store/actions/usuarioActions.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");



var _this = undefined,
    _jsxFileName = "C:\\Users\\franc\\Documents\\oliver-2\\sitio-desa\\src\\components\\Navbar\\index.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;
















var Navbar = function Navbar(props) {
  _s();

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    props.verificarSesion();
  }, []);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      busqueda = _useState[0],
      setBusqueda = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      login = _useState2[0],
      setLogin = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      carrito = _useState3[0],
      setCarrito = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      register = _useState4[0],
      setRegister = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      modalIsOpen = _useState5[0],
      setModalIsOpen = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      dropdownOpen = _useState6[0],
      setOpen = _useState6[1];

  var location = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"])(); //actions login-register

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
    document.getElementsByClassName(_Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.menu__collapsed)[0].classList.toggle(_Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.showCollapsed);
  };

  var handleChangeMenu = function handleChangeMenu(event) {
    setBusqueda(event.target.value);
  };

  var handleSubmitBuscador = function handleSubmitBuscador(event) {
    event.preventDefault();
    if (busqueda.trim() === '') return false;

    if (location.pathname == '/') {
      return next_router__WEBPACK_IMPORTED_MODULE_5___default.a.push("/productos?search=".concat(busqueda));
    }

    return window.location.assign("/productos?search=".concat(busqueda));
  };

  var renderContenidoModal = function renderContenidoModal() {
    if (login) return __jsx(_Login__WEBPACK_IMPORTED_MODULE_7__["default"], {
      showRegister: showRegister,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 26
      }
    });
    if (register) return __jsx(_Login_Register__WEBPACK_IMPORTED_MODULE_8__["default"], {
      showLogin: showModalLogin,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 29
      }
    });
    if (carrito) return __jsx(_Carrito__WEBPACK_IMPORTED_MODULE_9__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 28
      }
    });
  };

  var cerrarSesion = /*#__PURE__*/function () {
    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return props.logout();

            case 2:
              setTimeout(function () {
                return showModalLogin();
              }, 800);

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function cerrarSesion() {
      return _ref.apply(this, arguments);
    };
  }();

  var toggle = function toggle() {
    return setOpen(!dropdownOpen);
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx("div", {
    className: _Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.navbar + ' ' + "sticky-top",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: _Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.wrapper__navbar + ' ' + "container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 17
    }
  }, __jsx("nav", {
    className: "row ml-0 w-100",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: _Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.container__logo,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 25
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 29
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 33
    }
  }, __jsx("img", {
    src: "".concat(_config_index__WEBPACK_IMPORTED_MODULE_13__["URL_CLOUD_STORAGE"], "/static/Perro.png"),
    className: _Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.logo + ' ' + "img-fluid",
    alt: "Oliver pet shop",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 37
    }
  })))), __jsx("span", {
    className: _Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.boton__menu + ' ' + _Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.btn_carrito + ' ' + _Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.carrito_mobile,
    onClick: showModalCarrito,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 25
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_12__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__["faShoppingCart"],
    className: _Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.txt__item_menu,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 29
    }
  })), __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_12__["FontAwesomeIcon"], {
    onClick: toggleMenu,
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__["faAlignLeft"],
    className: _Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.icon_menu,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 25
    }
  }), __jsx("form", {
    className: _Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.buscador + ' ' + "col-sm-4 col-xl-7 col-md-7 d-flex align-items-center input-group",
    autoComplete: "off",
    onSubmit: handleSubmitBuscador,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 25
    }
  }, __jsx("input", {
    type: "text",
    required: true,
    className: _Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.form_search_menu + ' ' + "form-control",
    onChange: handleChangeMenu,
    placeholder: "\xBFQu\xE9 andas buscando?",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 29
    }
  })), __jsx("div", {
    className: _Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.container__login_menu + ' ' + "col-sm-7 col-xl-4 col-md-4 d-flex align-items-center justify-content-end",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 25
    }
  }, props.logueado ? __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_16__["ButtonDropdown"], {
    isOpen: dropdownOpen,
    toggle: toggle,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 33
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_16__["DropdownToggle"], {
    caret: true,
    size: "sm",
    className: _Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.boton__menu + ' ' + _Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.btn_account + ' ' + _Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.sinBorder,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 37
    }
  }, __jsx("img", {
    src: props.usuario.foto != 'null' ? props.usuario.foto : "https://storage.googleapis.com/web-oliver/user-default.png",
    className: _Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.imgProfile,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 41
    }
  })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_16__["DropdownMenu"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 37
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_16__["DropdownItem"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 41
    }
  }, "Mi perfil"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_16__["DropdownItem"], {
    divider: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 41
    }
  }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_16__["DropdownItem"], {
    onClick: cerrarSesion,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 41
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_12__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__["faSignOutAlt"],
    className: _Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.txt__item_menu,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 78
    }
  }), " Cerrar sesi\xF3n"))) : __jsx("span", {
    onClick: showModalLogin,
    className: _Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.boton__menu + ' ' + _Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.btn_account,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 33
    }
  }, __jsx("span", {
    className: _Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.txt__item_menu,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 37
    }
  }, "Ingres\xE1 ahora / Registrate")), __jsx("span", {
    className: _Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.boton__menu + ' ' + _Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.btn_carrito,
    onClick: showModalCarrito,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 29
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_12__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__["faShoppingCart"],
    className: _Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.txt__item_menu,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 33
    }
  }))))), __jsx("div", {
    className: _Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.menu__collapsed,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 17
    }
  }, __jsx("section", {
    className: _Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.header__collapsed_nav,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: "".concat(_config_index__WEBPACK_IMPORTED_MODULE_13__["URL_CLOUD_STORAGE"], "/static/Perro.png"),
    className: _Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.logo,
    alt: "Oliver pet shop",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 25
    }
  }), __jsx("i", {
    onClick: toggleMenu,
    className: _Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.close_btn_menu + ' ' + "fas fa-times",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 25
    }
  }), props.logueado ? __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_16__["ButtonDropdown"], {
    isOpen: dropdownOpen,
    toggle: toggle,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 33
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_16__["DropdownToggle"], {
    caret: true,
    size: "sm",
    className: _Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.boton__menu + ' ' + _Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.btn_account + ' ' + _Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.sinBorder,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 37
    }
  }, __jsx("img", {
    src: props.usuario.foto != 'null' ? props.usuario.foto : "https://storage.googleapis.com/web-oliver/user-default.png",
    className: _Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.imgProfile,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 41
    }
  })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_16__["DropdownMenu"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 37
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "".concat(_config_index__WEBPACK_IMPORTED_MODULE_13__["PUBLIC_URL"], "/perfil"),
    onClick: toggleMenu,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 41
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 45
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_16__["DropdownItem"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 49
    }
  }, "Mi perfil"))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_16__["DropdownItem"], {
    divider: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 41
    }
  }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_16__["DropdownItem"], {
    onClick: cerrarSesion,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 41
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_12__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__["faSignOutAlt"],
    className: _Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.txt__item_menu,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 78
    }
  }), " Cerrar sesi\xF3n"))) : null), __jsx("div", {
    className: _Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.main__collapsed,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 21
    }
  }, __jsx("ul", {
    className: _Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.list__menu__collapsed,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 25
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/",
    onClick: toggleMenu,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 29
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 33
    }
  }, __jsx("li", {
    className: _Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.item__menu__collapsed,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 37
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_12__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__["faHome"],
    className: _Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.icon__itemMenu__collapsed,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 41
    }
  }), __jsx("span", {
    className: _Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.label__item__menu,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 41
    }
  }, "Inicio")))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/",
    onClick: toggleMenu,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 29
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 33
    }
  }, __jsx("li", {
    className: _Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.item__menu__collapsed,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 37
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_12__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__["faPiggyBank"],
    className: _Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.icon__itemMenu__collapsed,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 41
    }
  }), __jsx("span", {
    className: _Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.label__item__menu,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 41
    }
  }, "Productos")))), props.logueado ? null : __jsx("li", {
    className: _Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.item__menu__collapsed,
    onClick: showModalLogin,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 29
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_12__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__["faUser"],
    className: _Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.icon__itemMenu__collapsed,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 33
    }
  }), __jsx("span", {
    className: _Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.label__item__menu,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 33
    }
  }, "Ingres\xE1 ahora / Registrate")), __jsx("li", {
    className: _Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.item__menu__collapsed + ' ' + _Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.__withButton,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 29
    }
  }, __jsx("a", {
    href: "/",
    className: "boton bg-yellow",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180,
      columnNumber: 33
    }
  }, "Ofertas")))), __jsx("section", {
    className: _Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.collapsed_info + ' ' + "text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: _Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.redes__collapsed,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 25
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_12__["FontAwesomeIcon"], {
    icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_11__["faFacebook"],
    className: _Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.iconoRed,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 29
    }
  }), __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_12__["FontAwesomeIcon"], {
    icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_11__["faInstagram"],
    className: _Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.iconoRed,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 29
    }
  })), __jsx("span", {
    className: "text-muted",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 25
    }
  }, "\xA9Terminos y Condiciones")))), !modalIsOpen ? null : __jsx(_Modal_index__WEBPACK_IMPORTED_MODULE_6__["default"], {
    closeModal: closeModal,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 17
    }
  }, renderContenidoModal()));
};

_s(Navbar, "RUTZCFp+0PGMhxlXSCiTy0OHk68=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"]];
});

_c = Navbar;

var mapStateToProps = function mapStateToProps(reducers) {
  return reducers.usuarioReducer;
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_14__["connect"])(mapStateToProps, _store_actions_usuarioActions__WEBPACK_IMPORTED_MODULE_15__)(Navbar));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTmF2YmFyL2luZGV4LmpzIl0sIm5hbWVzIjpbIk5hdmJhciIsInByb3BzIiwidXNlRWZmZWN0IiwidmVyaWZpY2FyU2VzaW9uIiwidXNlU3RhdGUiLCJidXNxdWVkYSIsInNldEJ1c3F1ZWRhIiwibG9naW4iLCJzZXRMb2dpbiIsImNhcnJpdG8iLCJzZXRDYXJyaXRvIiwicmVnaXN0ZXIiLCJzZXRSZWdpc3RlciIsIm1vZGFsSXNPcGVuIiwic2V0TW9kYWxJc09wZW4iLCJkcm9wZG93bk9wZW4iLCJzZXRPcGVuIiwibG9jYXRpb24iLCJ1c2VSb3V0ZXIiLCJzaG93TW9kYWxMb2dpbiIsInNob3dSZWdpc3RlciIsImNsb3NlTW9kYWwiLCJzaG93TW9kYWxDYXJyaXRvIiwidG9nZ2xlTWVudSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsIk5hdmJhclN0eWxlIiwibWVudV9fY29sbGFwc2VkIiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwic2hvd0NvbGxhcHNlZCIsImhhbmRsZUNoYW5nZU1lbnUiLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlU3VibWl0QnVzY2Fkb3IiLCJwcmV2ZW50RGVmYXVsdCIsInRyaW0iLCJwYXRobmFtZSIsIlJvdXRlciIsInB1c2giLCJ3aW5kb3ciLCJhc3NpZ24iLCJyZW5kZXJDb250ZW5pZG9Nb2RhbCIsImNlcnJhclNlc2lvbiIsImxvZ291dCIsInNldFRpbWVvdXQiLCJuYXZiYXIiLCJ3cmFwcGVyX19uYXZiYXIiLCJjb250YWluZXJfX2xvZ28iLCJVUkxfQ0xPVURfU1RPUkFHRSIsImxvZ28iLCJib3Rvbl9fbWVudSIsImJ0bl9jYXJyaXRvIiwiY2Fycml0b19tb2JpbGUiLCJmYVNob3BwaW5nQ2FydCIsInR4dF9faXRlbV9tZW51IiwiZmFBbGlnbkxlZnQiLCJpY29uX21lbnUiLCJidXNjYWRvciIsImZvcm1fc2VhcmNoX21lbnUiLCJjb250YWluZXJfX2xvZ2luX21lbnUiLCJsb2d1ZWFkbyIsImJ0bl9hY2NvdW50Iiwic2luQm9yZGVyIiwidXN1YXJpbyIsImZvdG8iLCJpbWdQcm9maWxlIiwiZmFTaWduT3V0QWx0IiwiaGVhZGVyX19jb2xsYXBzZWRfbmF2IiwiY2xvc2VfYnRuX21lbnUiLCJQVUJMSUNfVVJMIiwibWFpbl9fY29sbGFwc2VkIiwibGlzdF9fbWVudV9fY29sbGFwc2VkIiwiaXRlbV9fbWVudV9fY29sbGFwc2VkIiwiZmFIb21lIiwiaWNvbl9faXRlbU1lbnVfX2NvbGxhcHNlZCIsImxhYmVsX19pdGVtX19tZW51IiwiZmFQaWdneUJhbmsiLCJmYVVzZXIiLCJfX3dpdGhCdXR0b24iLCJjb2xsYXBzZWRfaW5mbyIsInJlZGVzX19jb2xsYXBzZWQiLCJmYUZhY2Vib29rIiwiaWNvbm9SZWQiLCJmYUluc3RhZ3JhbSIsIm1hcFN0YXRlVG9Qcm9wcyIsInJlZHVjZXJzIiwidXN1YXJpb1JlZHVjZXIiLCJjb25uZWN0IiwidXN1YXJpb0FjdGlvbnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUdBLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQUNDLEtBQUQsRUFBVztBQUFBOztBQUN0QkMseURBQVMsQ0FBQyxZQUFNO0FBQ1pELFNBQUssQ0FBQ0UsZUFBTjtBQUNILEdBRlEsRUFFTixFQUZNLENBQVQ7O0FBRHNCLGtCQUtVQyxzREFBUSxDQUFDLEVBQUQsQ0FMbEI7QUFBQSxNQUtmQyxRQUxlO0FBQUEsTUFLTEMsV0FMSzs7QUFBQSxtQkFNSUYsc0RBQVEsQ0FBQyxLQUFELENBTlo7QUFBQSxNQU1mRyxLQU5lO0FBQUEsTUFNUkMsUUFOUTs7QUFBQSxtQkFPUUosc0RBQVEsQ0FBQyxLQUFELENBUGhCO0FBQUEsTUFPZkss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NjI4YmM1ZDI4NzMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCx7dXNlU3RhdGUsdXNlRWZmZWN0fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBOYXZiYXJTdHlsZSBmcm9tICcuL05hdmJhci5tb2R1bGUuY3NzJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IFJvdXRlcix7dXNlUm91dGVyfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBNb2RhbCBmcm9tICcuLi9Nb2RhbC9pbmRleCc7XHJcbmltcG9ydCBMb2dpbiBmcm9tICcuLi9Mb2dpbic7XHJcbmltcG9ydCBSZWdpc3RlciBmcm9tICcuLi9Mb2dpbi9SZWdpc3Rlcic7XHJcbmltcG9ydCBDYXJyaXRvIGZyb20gJy4uL0NhcnJpdG8nO1xyXG5pbXBvcnQgeyBmYUhvbWUsZmFVc2VyLGZhUGlnZ3lCYW5rLGZhU2hvcHBpbmdDYXJ0LGZhQWxpZ25MZWZ0LGZhU2lnbk91dEFsdCB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnNcIjtcclxuaW1wb3J0IHtmYUZhY2Vib29rLGZhSW5zdGFncmFtfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1icmFuZHMtc3ZnLWljb25zJztcclxuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiO1xyXG5pbXBvcnQge1BVQkxJQ19VUkwsIFVSTF9DTE9VRF9TVE9SQUdFfSBmcm9tICcuLi8uLi8uLi9jb25maWcvaW5kZXgnO1xyXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0ICogYXMgdXN1YXJpb0FjdGlvbnMgZnJvbSAnLi4vLi4vLi4vc3RvcmUvYWN0aW9ucy91c3VhcmlvQWN0aW9ucyc7XHJcbmltcG9ydCB7IEJ1dHRvbkRyb3Bkb3duLCBEcm9wZG93blRvZ2dsZSwgRHJvcGRvd25NZW51LCBEcm9wZG93bkl0ZW0gfSBmcm9tICdyZWFjdHN0cmFwJztcclxuXHJcblxyXG5jb25zdCBOYXZiYXIgPSAocHJvcHMpID0+IHtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgcHJvcHMudmVyaWZpY2FyU2VzaW9uKCk7XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgY29uc3QgW2J1c3F1ZWRhLCBzZXRCdXNxdWVkYV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbbG9naW4sIHNldExvZ2luXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtjYXJyaXRvLCBzZXRDYXJyaXRvXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtyZWdpc3Rlciwgc2V0UmVnaXN0ZXJdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW21vZGFsSXNPcGVuLCBzZXRNb2RhbElzT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbZHJvcGRvd25PcGVuLCBzZXRPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IGxvY2F0aW9uID0gdXNlUm91dGVyKCk7XHJcbiAgICAvL2FjdGlvbnMgbG9naW4tcmVnaXN0ZXJcclxuICAgIGNvbnN0IHNob3dNb2RhbExvZ2luID0oKT0+e1xyXG4gICAgICAgIChyZWdpc3Rlcik/c2V0UmVnaXN0ZXIoZmFsc2UpOm51bGw7XHJcbiAgICAgICAgKGNhcnJpdG8pP3NldENhcnJpdG8oZmFsc2UpOm51bGw7XHJcbiAgICAgICAgc2V0TG9naW4odHJ1ZSk7XHJcbiAgICAgICAgc2V0TW9kYWxJc09wZW4odHJ1ZSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzaG93UmVnaXN0ZXIgPSAoKT0+e1xyXG4gICAgICAgIChsb2dpbik/c2V0TG9naW4oZmFsc2UpOmZhbHNlO1xyXG4gICAgICAgIChjYXJyaXRvKT9zZXRDYXJyaXRvKGZhbHNlKTpudWxsO1xyXG4gICAgICAgIHNldFJlZ2lzdGVyKHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNsb3NlTW9kYWw9KCk9PihcclxuICAgICAgICBzZXRNb2RhbElzT3BlbihmYWxzZSlcclxuICAgIClcclxuICAgIFxyXG4gICAgXHJcbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vL1xyXG5cclxuXHJcbiAgICAvL2FjdGlvbnMgY2Fycml0b1xyXG4gICAgY29uc3Qgc2hvd01vZGFsQ2Fycml0byA9ICgpPT57XHJcbiAgICAgICAgKGxvZ2luKT9zZXRMb2dpbihmYWxzZSk6bnVsbDtcclxuICAgICAgICAocmVnaXN0ZXIpP3NldFJlZ2lzdGVyKGZhbHNlKTpudWxsO1xyXG4gICAgICAgIHNldENhcnJpdG8odHJ1ZSk7XHJcbiAgICAgICAgc2V0TW9kYWxJc09wZW4odHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgdG9nZ2xlTWVudSA9ICgpPT57XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShOYXZiYXJTdHlsZS5tZW51X19jb2xsYXBzZWQpWzBdLmNsYXNzTGlzdC50b2dnbGUoTmF2YmFyU3R5bGUuc2hvd0NvbGxhcHNlZCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlTWVudSA9IGV2ZW50PT57XHJcbiAgICAgICAgc2V0QnVzcXVlZGEoZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVTdWJtaXRCdXNjYWRvciA9IGV2ZW50PT57XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBpZihidXNxdWVkYS50cmltKCkgPT09ICcnKXJldHVybiBmYWxzZTtcclxuICAgICAgICBpZihsb2NhdGlvbi5wYXRobmFtZSA9PSAnLycpe1xyXG4gICAgICAgICAgICByZXR1cm4gUm91dGVyLnB1c2goYC9wcm9kdWN0b3M/c2VhcmNoPSR7YnVzcXVlZGF9YCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB3aW5kb3cubG9jYXRpb24uYXNzaWduKGAvcHJvZHVjdG9zP3NlYXJjaD0ke2J1c3F1ZWRhfWApO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHJlbmRlckNvbnRlbmlkb01vZGFsID0gKCk9PntcclxuICAgICAgICBpZihsb2dpbikgcmV0dXJuIDxMb2dpbiBzaG93UmVnaXN0ZXI9e3Nob3dSZWdpc3Rlcn0vPjtcclxuICAgICAgICBpZihyZWdpc3RlcikgcmV0dXJuIDxSZWdpc3RlciBzaG93TG9naW49e3Nob3dNb2RhbExvZ2lufS8+O1xyXG4gICAgICAgIGlmKGNhcnJpdG8pIHJldHVybiA8Q2Fycml0by8+XHJcbiAgICB9XHJcbiAgICBjb25zdCBjZXJyYXJTZXNpb24gPSBhc3luYygpPT57XHJcbiAgICAgICAgYXdhaXQgcHJvcHMubG9nb3V0KCk7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBzaG93TW9kYWxMb2dpbigpO1xyXG4gICAgICAgIH0sIDgwMCk7XHJcbiAgICB9XHJcbiAgICBjb25zdCB0b2dnbGUgPSAoKSA9PiBzZXRPcGVuKCFkcm9wZG93bk9wZW4pO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17TmF2YmFyU3R5bGUubmF2YmFyICsgJyAnICsgYHN0aWNreS10b3BgfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtOYXZiYXJTdHlsZS53cmFwcGVyX19uYXZiYXIgICsgJyAnICsgIGBjb250YWluZXJgfT5cclxuICAgICAgICAgICAgICAgICAgICA8bmF2IGNsYXNzTmFtZT1cInJvdyBtbC0wIHctMTAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtOYXZiYXJTdHlsZS5jb250YWluZXJfX2xvZ299PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2Ake1VSTF9DTE9VRF9TVE9SQUdFfS9zdGF0aWMvUGVycm8ucG5nYH0gY2xhc3NOYW1lPXtOYXZiYXJTdHlsZS5sb2dvICsgJyAnICsgYGltZy1mbHVpZGB9IGFsdD1cIk9saXZlciBwZXQgc2hvcFwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e05hdmJhclN0eWxlLmJvdG9uX19tZW51ICsgJyAnICsgTmF2YmFyU3R5bGUuYnRuX2NhcnJpdG8gKyAnICcgKyBOYXZiYXJTdHlsZS5jYXJyaXRvX21vYmlsZX0gb25DbGljaz17c2hvd01vZGFsQ2Fycml0b30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhU2hvcHBpbmdDYXJ0fSBjbGFzc05hbWU9e05hdmJhclN0eWxlLnR4dF9faXRlbV9tZW51fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiAgb25DbGljaz17dG9nZ2xlTWVudX0gaWNvbj17ZmFBbGlnbkxlZnR9IGNsYXNzTmFtZT17TmF2YmFyU3R5bGUuaWNvbl9tZW51fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT17TmF2YmFyU3R5bGUuYnVzY2Fkb3IgKyAnICcgKyBgY29sLXNtLTQgY29sLXhsLTcgY29sLW1kLTcgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBpbnB1dC1ncm91cGB9IGF1dG9Db21wbGV0ZT1cIm9mZlwiIG9uU3VibWl0PXtoYW5kbGVTdWJtaXRCdXNjYWRvcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiByZXF1aXJlZCBjbGFzc05hbWU9e05hdmJhclN0eWxlLmZvcm1fc2VhcmNoX21lbnUgKyAnICcgKyBgZm9ybS1jb250cm9sYH0gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZU1lbnV9IHBsYWNlaG9sZGVyPVwiwr9RdcOpIGFuZGFzIGJ1c2NhbmRvP1wiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17TmF2YmFyU3R5bGUuY29udGFpbmVyX19sb2dpbl9tZW51ICsgJyAnICsgYGNvbC1zbS03IGNvbC14bC00IGNvbC1tZC00IGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIganVzdGlmeS1jb250ZW50LWVuZGB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyhwcm9wcy5sb2d1ZWFkbyk/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbkRyb3Bkb3duIGlzT3Blbj17ZHJvcGRvd25PcGVufSB0b2dnbGU9e3RvZ2dsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93blRvZ2dsZSBjYXJldCBzaXplPVwic21cIiBjbGFzc05hbWU9e05hdmJhclN0eWxlLmJvdG9uX19tZW51ICsgJyAnICsgTmF2YmFyU3R5bGUuYnRuX2FjY291bnQgKyAnICcgKyBOYXZiYXJTdHlsZS5zaW5Cb3JkZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9eyhwcm9wcy51c3VhcmlvLmZvdG8gIT0gJ251bGwnKT9wcm9wcy51c3VhcmlvLmZvdG86YGh0dHBzOi8vc3RvcmFnZS5nb29nbGVhcGlzLmNvbS93ZWItb2xpdmVyL3VzZXItZGVmYXVsdC5wbmdgfSBjbGFzc05hbWU9e05hdmJhclN0eWxlLmltZ1Byb2ZpbGV9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Ecm9wZG93blRvZ2dsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duTWVudT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bkl0ZW0+TWkgcGVyZmlsPC9Ecm9wZG93bkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd25JdGVtIGRpdmlkZXIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bkl0ZW0gb25DbGljaz17Y2VycmFyU2VzaW9ufT48Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhU2lnbk91dEFsdH0gY2xhc3NOYW1lPXtOYXZiYXJTdHlsZS50eHRfX2l0ZW1fbWVudX0vPiBDZXJyYXIgc2VzacOzbjwvRHJvcGRvd25JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duTWVudT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbkRyb3Bkb3duPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9e3Nob3dNb2RhbExvZ2lufSBjbGFzc05hbWU9e05hdmJhclN0eWxlLmJvdG9uX19tZW51ICsgJyAnICsgTmF2YmFyU3R5bGUuYnRuX2FjY291bnR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e05hdmJhclN0eWxlLnR4dF9faXRlbV9tZW51fT5JbmdyZXPDoSBhaG9yYSAvIFJlZ2lzdHJhdGU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtOYXZiYXJTdHlsZS5ib3Rvbl9fbWVudSArICcgJyArIE5hdmJhclN0eWxlLmJ0bl9jYXJyaXRvfSBvbkNsaWNrPXtzaG93TW9kYWxDYXJyaXRvfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhU2hvcHBpbmdDYXJ0fSBjbGFzc05hbWU9e05hdmJhclN0eWxlLnR4dF9faXRlbV9tZW51fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbmF2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17TmF2YmFyU3R5bGUubWVudV9fY29sbGFwc2VkfT5cclxuICAgICAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e05hdmJhclN0eWxlLmhlYWRlcl9fY29sbGFwc2VkX25hdn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtgJHtVUkxfQ0xPVURfU1RPUkFHRX0vc3RhdGljL1BlcnJvLnBuZ2B9IGNsYXNzTmFtZT17TmF2YmFyU3R5bGUubG9nb30gYWx0PVwiT2xpdmVyIHBldCBzaG9wXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBvbkNsaWNrPXt0b2dnbGVNZW51fSBjbGFzc05hbWU9e05hdmJhclN0eWxlLmNsb3NlX2J0bl9tZW51ICsgJyAnICsgYGZhcyBmYS10aW1lc2B9PjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgeyhwcm9wcy5sb2d1ZWFkbyk/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbkRyb3Bkb3duIGlzT3Blbj17ZHJvcGRvd25PcGVufSB0b2dnbGU9e3RvZ2dsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93blRvZ2dsZSBjYXJldCBzaXplPVwic21cIiBjbGFzc05hbWU9e05hdmJhclN0eWxlLmJvdG9uX19tZW51ICsgJyAnICsgTmF2YmFyU3R5bGUuYnRuX2FjY291bnQgKyAnICcgKyBOYXZiYXJTdHlsZS5zaW5Cb3JkZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9eyhwcm9wcy51c3VhcmlvLmZvdG8gIT0gJ251bGwnKT9wcm9wcy51c3VhcmlvLmZvdG86YGh0dHBzOi8vc3RvcmFnZS5nb29nbGVhcGlzLmNvbS93ZWItb2xpdmVyL3VzZXItZGVmYXVsdC5wbmdgfSBjbGFzc05hbWU9e05hdmJhclN0eWxlLmltZ1Byb2ZpbGV9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Ecm9wZG93blRvZ2dsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duTWVudT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2Ake1BVQkxJQ19VUkx9L3BlcmZpbGB9IG9uQ2xpY2s9e3RvZ2dsZU1lbnV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd25JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTWkgcGVyZmlsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRHJvcGRvd25JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bkl0ZW0gZGl2aWRlciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duSXRlbSBvbkNsaWNrPXtjZXJyYXJTZXNpb259PjxGb250QXdlc29tZUljb24gaWNvbj17ZmFTaWduT3V0QWx0fSBjbGFzc05hbWU9e05hdmJhclN0eWxlLnR4dF9faXRlbV9tZW51fS8+IENlcnJhciBzZXNpw7NuPC9Ecm9wZG93bkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRHJvcGRvd25NZW51PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uRHJvcGRvd24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDpudWxsfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17TmF2YmFyU3R5bGUubWFpbl9fY29sbGFwc2VkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT17TmF2YmFyU3R5bGUubGlzdF9fbWVudV9fY29sbGFwc2VkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCIgb25DbGljaz17dG9nZ2xlTWVudX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e05hdmJhclN0eWxlLml0ZW1fX21lbnVfX2NvbGxhcHNlZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhSG9tZX0gY2xhc3NOYW1lPXtOYXZiYXJTdHlsZS5pY29uX19pdGVtTWVudV9fY29sbGFwc2VkfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e05hdmJhclN0eWxlLmxhYmVsX19pdGVtX19tZW51fT5JbmljaW88L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIiBvbkNsaWNrPXt0b2dnbGVNZW51fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17TmF2YmFyU3R5bGUuaXRlbV9fbWVudV9fY29sbGFwc2VkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFQaWdneUJhbmt9IGNsYXNzTmFtZT17TmF2YmFyU3R5bGUuaWNvbl9faXRlbU1lbnVfX2NvbGxhcHNlZH0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtOYXZiYXJTdHlsZS5sYWJlbF9faXRlbV9fbWVudX0+UHJvZHVjdG9zPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsocHJvcHMubG9ndWVhZG8pP251bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e05hdmJhclN0eWxlLml0ZW1fX21lbnVfX2NvbGxhcHNlZH0gb25DbGljaz17c2hvd01vZGFsTG9naW59PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFVc2VyfSBjbGFzc05hbWU9e05hdmJhclN0eWxlLmljb25fX2l0ZW1NZW51X19jb2xsYXBzZWR9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e05hdmJhclN0eWxlLmxhYmVsX19pdGVtX19tZW51fT5JbmdyZXPDoSBhaG9yYSAvIFJlZ2lzdHJhdGU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17TmF2YmFyU3R5bGUuaXRlbV9fbWVudV9fY29sbGFwc2VkICsgJyAnICsgTmF2YmFyU3R5bGUuX193aXRoQnV0dG9ufT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiL1wiIGNsYXNzTmFtZT1cImJvdG9uIGJnLXllbGxvd1wiPk9mZXJ0YXM8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17TmF2YmFyU3R5bGUuY29sbGFwc2VkX2luZm8gKyAnICcgKyBgdGV4dC1jZW50ZXJgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e05hdmJhclN0eWxlLnJlZGVzX19jb2xsYXBzZWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUZhY2Vib29rfSBjbGFzc05hbWU9e05hdmJhclN0eWxlLmljb25vUmVkfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhSW5zdGFncmFtfSBjbGFzc05hbWU9e05hdmJhclN0eWxlLmljb25vUmVkfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkXCI+JmNvcHk7VGVybWlub3MgeSBDb25kaWNpb25lczwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+ICBcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgeyghbW9kYWxJc09wZW4pP251bGw6XHJcbiAgICAgICAgICAgICAgICA8TW9kYWwgY2xvc2VNb2RhbD17Y2xvc2VNb2RhbH0+XHJcbiAgICAgICAgICAgICAgICAgICAge3JlbmRlckNvbnRlbmlkb01vZGFsKCl9XHJcbiAgICAgICAgICAgICAgICA8L01vZGFsPlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59XHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHJlZHVjZXJzPT57XHJcbiAgICByZXR1cm4gcmVkdWNlcnMudXN1YXJpb1JlZHVjZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLHVzdWFyaW9BY3Rpb25zKShOYXZiYXIpOyJdLCJzb3VyY2VSb290IjoiIn0=