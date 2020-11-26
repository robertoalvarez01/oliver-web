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

  var navegar = function navegar() {
    return console.log('jeje');
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx("div", {
    className: _Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.navbar + ' ' + "sticky-top",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: _Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.wrapper__navbar + ' ' + "container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 17
    }
  }, __jsx("nav", {
    className: "row ml-0 w-100",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: _Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.container__logo,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 25
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 29
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 33
    }
  }, __jsx("img", {
    src: "".concat(_config_index__WEBPACK_IMPORTED_MODULE_13__["URL_CLOUD_STORAGE"], "/static/Perro.png"),
    className: _Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.logo + ' ' + "img-fluid",
    alt: "Oliver pet shop",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 37
    }
  })))), __jsx("span", {
    className: _Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.boton__menu + ' ' + _Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.btn_carrito + ' ' + _Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.carrito_mobile,
    onClick: showModalCarrito,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 25
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_12__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__["faShoppingCart"],
    className: _Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.txt__item_menu,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 29
    }
  })), __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_12__["FontAwesomeIcon"], {
    onClick: toggleMenu,
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__["faAlignLeft"],
    className: _Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.icon_menu,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 25
    }
  }), __jsx("form", {
    className: _Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.buscador + ' ' + "col-sm-4 col-xl-7 col-md-7 d-flex align-items-center input-group",
    autoComplete: "off",
    onSubmit: handleSubmitBuscador,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
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
      lineNumber: 107,
      columnNumber: 29
    }
  })), __jsx("div", {
    className: _Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.container__login_menu + ' ' + "col-sm-7 col-xl-4 col-md-4 d-flex align-items-center justify-content-end",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 25
    }
  }, props.logueado ? __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_16__["ButtonDropdown"], {
    isOpen: dropdownOpen,
    toggle: toggle,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 33
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_16__["DropdownToggle"], {
    caret: true,
    size: "sm",
    className: _Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.boton__menu + ' ' + _Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.btn_account + ' ' + _Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.sinBorder,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 37
    }
  }, __jsx("img", {
    src: props.usuario.foto != 'null' ? props.usuario.foto : "https://storage.googleapis.com/web-oliver/user-default.png",
    className: _Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.imgProfile,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 41
    }
  })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_16__["DropdownMenu"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 37
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "".concat(_config_index__WEBPACK_IMPORTED_MODULE_13__["PUBLIC_URL"], "/perfil"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 41
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 45
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_16__["DropdownItem"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 49
    }
  }, "Mi perfil"))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_16__["DropdownItem"], {
    divider: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 41
    }
  }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_16__["DropdownItem"], {
    onClick: cerrarSesion,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 41
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_12__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__["faSignOutAlt"],
    className: _Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.txt__item_menu,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 78
    }
  }), " Cerrar sesi\xF3n"))) : __jsx("span", {
    onClick: showModalLogin,
    className: _Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.boton__menu + ' ' + _Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.btn_account,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 33
    }
  }, __jsx("span", {
    className: _Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.txt__item_menu,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 37
    }
  }, "Ingres\xE1 ahora / Registrate")), __jsx("span", {
    className: _Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.boton__menu + ' ' + _Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.btn_carrito,
    onClick: showModalCarrito,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 29
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_12__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__["faShoppingCart"],
    className: _Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.txt__item_menu,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 33
    }
  }))))), __jsx("div", {
    className: _Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.menu__collapsed,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 17
    }
  }, __jsx("section", {
    className: _Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.header__collapsed_nav,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: "".concat(_config_index__WEBPACK_IMPORTED_MODULE_13__["URL_CLOUD_STORAGE"], "/static/Perro.png"),
    className: _Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.logo,
    alt: "Oliver pet shop",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 25
    }
  }), __jsx("i", {
    onClick: toggleMenu,
    className: _Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.close_btn_menu + ' ' + "fas fa-times",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 25
    }
  }), props.logueado ? __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_16__["ButtonDropdown"], {
    isOpen: dropdownOpen,
    toggle: toggle,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 33
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_16__["DropdownToggle"], {
    caret: true,
    size: "sm",
    className: _Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.boton__menu + ' ' + _Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.btn_account + ' ' + _Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.sinBorder,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 37
    }
  }, __jsx("img", {
    src: props.usuario.foto != 'null' ? props.usuario.foto : "https://storage.googleapis.com/web-oliver/user-default.png",
    className: _Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.imgProfile,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 41
    }
  })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_16__["DropdownMenu"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 37
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_16__["DropdownItem"], {
    onClick: navegar,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 41
    }
  }, "Mi perfil"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_16__["DropdownItem"], {
    divider: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 41
    }
  }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_16__["DropdownItem"], {
    onClick: cerrarSesion,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 41
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_12__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__["faSignOutAlt"],
    className: _Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.txt__item_menu,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 78
    }
  }), " Cerrar sesi\xF3n"))) : null), __jsx("div", {
    className: _Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.main__collapsed,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 21
    }
  }, __jsx("ul", {
    className: _Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.list__menu__collapsed,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 25
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/",
    onClick: toggleMenu,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 29
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 33
    }
  }, __jsx("li", {
    className: _Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.item__menu__collapsed,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 37
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_12__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__["faHome"],
    className: _Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.icon__itemMenu__collapsed,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 41
    }
  }), __jsx("span", {
    className: _Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.label__item__menu,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 41
    }
  }, "Inicio")))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/",
    onClick: toggleMenu,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 29
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 33
    }
  }, __jsx("li", {
    className: _Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.item__menu__collapsed,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 37
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_12__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__["faPiggyBank"],
    className: _Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.icon__itemMenu__collapsed,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 41
    }
  }), __jsx("span", {
    className: _Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.label__item__menu,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 41
    }
  }, "Productos")))), props.logueado ? null : __jsx("li", {
    className: _Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.item__menu__collapsed,
    onClick: showModalLogin,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 29
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_12__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__["faUser"],
    className: _Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.icon__itemMenu__collapsed,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 33
    }
  }), __jsx("span", {
    className: _Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.label__item__menu,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 33
    }
  }, "Ingres\xE1 ahora / Registrate")), __jsx("li", {
    className: _Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.item__menu__collapsed + ' ' + _Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.__withButton,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 29
    }
  }, __jsx("a", {
    href: "/",
    className: "boton bg-yellow",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 33
    }
  }, "Ofertas")))), __jsx("section", {
    className: _Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.collapsed_info + ' ' + "text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: _Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.redes__collapsed,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 25
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_12__["FontAwesomeIcon"], {
    icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_11__["faFacebook"],
    className: _Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.iconoRed,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 29
    }
  }), __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_12__["FontAwesomeIcon"], {
    icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_11__["faInstagram"],
    className: _Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.iconoRed,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 29
    }
  })), __jsx("span", {
    className: "text-muted",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 25
    }
  }, "\xA9Terminos y Condiciones")))), !modalIsOpen ? null : __jsx(_Modal_index__WEBPACK_IMPORTED_MODULE_6__["default"], {
    closeModal: closeModal,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTmF2YmFyL2luZGV4LmpzIl0sIm5hbWVzIjpbIk5hdmJhciIsInByb3BzIiwidXNlRWZmZWN0IiwidmVyaWZpY2FyU2VzaW9uIiwidXNlU3RhdGUiLCJidXNxdWVkYSIsInNldEJ1c3F1ZWRhIiwibG9naW4iLCJzZXRMb2dpbiIsImNhcnJpdG8iLCJzZXRDYXJyaXRvIiwicmVnaXN0ZXIiLCJzZXRSZWdpc3RlciIsIm1vZGFsSXNPcGVuIiwic2V0TW9kYWxJc09wZW4iLCJkcm9wZG93bk9wZW4iLCJzZXRPcGVuIiwibG9jYXRpb24iLCJ1c2VSb3V0ZXIiLCJzaG93TW9kYWxMb2dpbiIsInNob3dSZWdpc3RlciIsImNsb3NlTW9kYWwiLCJzaG93TW9kYWxDYXJyaXRvIiwidG9nZ2xlTWVudSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsIk5hdmJhclN0eWxlIiwibWVudV9fY29sbGFwc2VkIiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwic2hvd0NvbGxhcHNlZCIsImhhbmRsZUNoYW5nZU1lbnUiLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlU3VibWl0QnVzY2Fkb3IiLCJwcmV2ZW50RGVmYXVsdCIsInRyaW0iLCJwYXRobmFtZSIsIlJvdXRlciIsInB1c2giLCJ3aW5kb3ciLCJhc3NpZ24iLCJyZW5kZXJDb250ZW5pZG9Nb2RhbCIsImNlcnJhclNlc2lvbiIsImxvZ291dCIsInNldFRpbWVvdXQiLCJuYXZlZ2FyIiwiY29uc29sZSIsImxvZyIsIm5hdmJhciIsIndyYXBwZXJfX25hdmJhciIsImNvbnRhaW5lcl9fbG9nbyIsIlVSTF9DTE9VRF9TVE9SQUdFIiwibG9nbyIsImJvdG9uX19tZW51IiwiYnRuX2NhcnJpdG8iLCJjYXJyaXRvX21vYmlsZSIsImZhU2hvcHBpbmdDYXJ0IiwidHh0X19pdGVtX21lbnUiLCJmYUFsaWduTGVmdCIsImljb25fbWVudSIsImJ1c2NhZG9yIiwiZm9ybV9zZWFyY2hfbWVudSIsImNvbnRhaW5lcl9fbG9naW5fbWVudSIsImxvZ3VlYWRvIiwiYnRuX2FjY291bnQiLCJzaW5Cb3JkZXIiLCJ1c3VhcmlvIiwiZm90byIsImltZ1Byb2ZpbGUiLCJQVUJMSUNfVVJMIiwiZmFTaWduT3V0QWx0IiwiaGVhZGVyX19jb2xsYXBzZWRfbmF2IiwiY2xvc2VfYnRuX21lbnUiLCJtYWluX19jb2xsYXBzZWQiLCJsaXN0X19tZW51X19jb2xsYXBzZWQiLCJpdGVtX19tZW51X19jb2xsYXBzZWQiLCJmYUhvbWUiLCJpY29uX19pdGVtTWVudV9fY29sbGFwc2VkIiwibGFiZWxfX2l0ZW1fX21lbnUiLCJmYVBpZ2d5QmFuayIsImZhVXNlciIsIl9fd2l0aEJ1dHRvbiIsImNvbGxhcHNlZF9pbmZvIiwicmVkZXNfX2NvbGxhcHNlZCIsImZhRmFjZWJvb2siLCJpY29ub1JlZCIsImZhSW5zdGFncmFtIiwibWFwU3RhdGVUb1Byb3BzIiwicmVkdWNlcnMiLCJ1c3VhcmlvUmVkdWNlciIsImNvbm5lY3QiLCJ1c3VhcmlvQWN0aW9ucyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBR0EsSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQ3RCQyx5REFBUyxDQUFDLFlBQU07QUFDWkQsU0FBSyxDQUFDRSxlQUFOO0FBQ0gsR0FGUSxFQUVOLEVBRk0sQ0FBVDs7QUFEc0Isa0JBS1VDLHNEQUFRLENBQUMsRUFBRCxDQUxsQjtBQUFBLE1BS2ZDLFFBTGU7QUFBQSxNQUtMQyxXQUxLOztBQUFBLG1CQU1JRixzREFBUSxDQUFDLEtBQUQsQ0FOWjtBQUFBLE1BTWZHLEtBTmU7QUFBQSxNQU1SQyxRQU5ROztBQUFBLG1CQU9RSixzREFBUSxD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SCxDQUZEOztBQUllQywySEFBTyxDQUFDSCxlQUFELEVBQWlCSSwyREFBakIsQ0FBUCxDQUF3QzdGLE1BQXhDLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC4zMmJkNDMzOWNkZjZiY2UwMTQ5Yy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LHt1c2VTdGF0ZSx1c2VFZmZlY3R9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IE5hdmJhclN0eWxlIGZyb20gJy4vTmF2YmFyLm1vZHVsZS5jc3MnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgUm91dGVyLHt1c2VSb3V0ZXJ9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IE1vZGFsIGZyb20gJy4uL01vZGFsL2luZGV4JztcclxuaW1wb3J0IExvZ2luIGZyb20gJy4uL0xvZ2luJztcclxuaW1wb3J0IFJlZ2lzdGVyIGZyb20gJy4uL0xvZ2luL1JlZ2lzdGVyJztcclxuaW1wb3J0IENhcnJpdG8gZnJvbSAnLi4vQ2Fycml0byc7XHJcbmltcG9ydCB7IGZhSG9tZSxmYVVzZXIsZmFQaWdneUJhbmssZmFTaG9wcGluZ0NhcnQsZmFBbGlnbkxlZnQsZmFTaWduT3V0QWx0IH0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29uc1wiO1xyXG5pbXBvcnQge2ZhRmFjZWJvb2ssZmFJbnN0YWdyYW19IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLWJyYW5kcy1zdmctaWNvbnMnO1xyXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tIFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCI7XHJcbmltcG9ydCB7UFVCTElDX1VSTCwgVVJMX0NMT1VEX1NUT1JBR0V9IGZyb20gJy4uLy4uLy4uL2NvbmZpZy9pbmRleCc7XHJcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgKiBhcyB1c3VhcmlvQWN0aW9ucyBmcm9tICcuLi8uLi8uLi9zdG9yZS9hY3Rpb25zL3VzdWFyaW9BY3Rpb25zJztcclxuaW1wb3J0IHsgQnV0dG9uRHJvcGRvd24sIERyb3Bkb3duVG9nZ2xlLCBEcm9wZG93bk1lbnUsIERyb3Bkb3duSXRlbSB9IGZyb20gJ3JlYWN0c3RyYXAnO1xyXG5cclxuXHJcbmNvbnN0IE5hdmJhciA9IChwcm9wcykgPT4ge1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBwcm9wcy52ZXJpZmljYXJTZXNpb24oKTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICBjb25zdCBbYnVzcXVlZGEsIHNldEJ1c3F1ZWRhXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtsb2dpbiwgc2V0TG9naW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW2NhcnJpdG8sIHNldENhcnJpdG9dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW3JlZ2lzdGVyLCBzZXRSZWdpc3Rlcl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbbW9kYWxJc09wZW4sIHNldE1vZGFsSXNPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtkcm9wZG93bk9wZW4sIHNldE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgbG9jYXRpb24gPSB1c2VSb3V0ZXIoKTtcclxuICAgIC8vYWN0aW9ucyBsb2dpbi1yZWdpc3RlclxyXG4gICAgY29uc3Qgc2hvd01vZGFsTG9naW4gPSgpPT57XHJcbiAgICAgICAgKHJlZ2lzdGVyKT9zZXRSZWdpc3RlcihmYWxzZSk6bnVsbDtcclxuICAgICAgICAoY2Fycml0byk/c2V0Q2Fycml0byhmYWxzZSk6bnVsbDtcclxuICAgICAgICBzZXRMb2dpbih0cnVlKTtcclxuICAgICAgICBzZXRNb2RhbElzT3Blbih0cnVlKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHNob3dSZWdpc3RlciA9ICgpPT57XHJcbiAgICAgICAgKGxvZ2luKT9zZXRMb2dpbihmYWxzZSk6ZmFsc2U7XHJcbiAgICAgICAgKGNhcnJpdG8pP3NldENhcnJpdG8oZmFsc2UpOm51bGw7XHJcbiAgICAgICAgc2V0UmVnaXN0ZXIodHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY2xvc2VNb2RhbD0oKT0+KFxyXG4gICAgICAgIHNldE1vZGFsSXNPcGVuKGZhbHNlKVxyXG4gICAgKVxyXG4gICAgXHJcbiAgICBcclxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vXHJcblxyXG5cclxuICAgIC8vYWN0aW9ucyBjYXJyaXRvXHJcbiAgICBjb25zdCBzaG93TW9kYWxDYXJyaXRvID0gKCk9PntcclxuICAgICAgICAobG9naW4pP3NldExvZ2luKGZhbHNlKTpudWxsO1xyXG4gICAgICAgIChyZWdpc3Rlcik/c2V0UmVnaXN0ZXIoZmFsc2UpOm51bGw7XHJcbiAgICAgICAgc2V0Q2Fycml0byh0cnVlKTtcclxuICAgICAgICBzZXRNb2RhbElzT3Blbih0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB0b2dnbGVNZW51ID0gKCk9PntcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKE5hdmJhclN0eWxlLm1lbnVfX2NvbGxhcHNlZClbMF0uY2xhc3NMaXN0LnRvZ2dsZShOYXZiYXJTdHlsZS5zaG93Q29sbGFwc2VkKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVDaGFuZ2VNZW51ID0gZXZlbnQ9PntcclxuICAgICAgICBzZXRCdXNxdWVkYShldmVudC50YXJnZXQudmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdEJ1c2NhZG9yID0gZXZlbnQ9PntcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGlmKGJ1c3F1ZWRhLnRyaW0oKSA9PT0gJycpcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIGlmKGxvY2F0aW9uLnBhdGhuYW1lID09ICcvJyl7XHJcbiAgICAgICAgICAgIHJldHVybiBSb3V0ZXIucHVzaChgL3Byb2R1Y3Rvcz9zZWFyY2g9JHtidXNxdWVkYX1gKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHdpbmRvdy5sb2NhdGlvbi5hc3NpZ24oYC9wcm9kdWN0b3M/c2VhcmNoPSR7YnVzcXVlZGF9YCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcmVuZGVyQ29udGVuaWRvTW9kYWwgPSAoKT0+e1xyXG4gICAgICAgIGlmKGxvZ2luKSByZXR1cm4gPExvZ2luIHNob3dSZWdpc3Rlcj17c2hvd1JlZ2lzdGVyfS8+O1xyXG4gICAgICAgIGlmKHJlZ2lzdGVyKSByZXR1cm4gPFJlZ2lzdGVyIHNob3dMb2dpbj17c2hvd01vZGFsTG9naW59Lz47XHJcbiAgICAgICAgaWYoY2Fycml0bykgcmV0dXJuIDxDYXJyaXRvLz5cclxuICAgIH1cclxuICAgIGNvbnN0IGNlcnJhclNlc2lvbiA9IGFzeW5jKCk9PntcclxuICAgICAgICBhd2FpdCBwcm9wcy5sb2dvdXQoKTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHNob3dNb2RhbExvZ2luKCk7XHJcbiAgICAgICAgfSwgODAwKTtcclxuICAgIH1cclxuICAgIGNvbnN0IHRvZ2dsZSA9ICgpID0+IHNldE9wZW4oIWRyb3Bkb3duT3Blbik7XHJcbiAgICBjb25zdCBuYXZlZ2FyID0gKCk9PmNvbnNvbGUubG9nKCdqZWplJyk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtOYXZiYXJTdHlsZS5uYXZiYXIgKyAnICcgKyBgc3RpY2t5LXRvcGB9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e05hdmJhclN0eWxlLndyYXBwZXJfX25hdmJhciAgKyAnICcgKyAgYGNvbnRhaW5lcmB9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPVwicm93IG1sLTAgdy0xMDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e05hdmJhclN0eWxlLmNvbnRhaW5lcl9fbG9nb30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YCR7VVJMX0NMT1VEX1NUT1JBR0V9L3N0YXRpYy9QZXJyby5wbmdgfSBjbGFzc05hbWU9e05hdmJhclN0eWxlLmxvZ28gKyAnICcgKyBgaW1nLWZsdWlkYH0gYWx0PVwiT2xpdmVyIHBldCBzaG9wXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17TmF2YmFyU3R5bGUuYm90b25fX21lbnUgKyAnICcgKyBOYXZiYXJTdHlsZS5idG5fY2Fycml0byArICcgJyArIE5hdmJhclN0eWxlLmNhcnJpdG9fbW9iaWxlfSBvbkNsaWNrPXtzaG93TW9kYWxDYXJyaXRvfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFTaG9wcGluZ0NhcnR9IGNsYXNzTmFtZT17TmF2YmFyU3R5bGUudHh0X19pdGVtX21lbnV9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uICBvbkNsaWNrPXt0b2dnbGVNZW51fSBpY29uPXtmYUFsaWduTGVmdH0gY2xhc3NOYW1lPXtOYXZiYXJTdHlsZS5pY29uX21lbnV9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPXtOYXZiYXJTdHlsZS5idXNjYWRvciArICcgJyArIGBjb2wtc20tNCBjb2wteGwtNyBjb2wtbWQtNyBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIGlucHV0LWdyb3VwYH0gYXV0b0NvbXBsZXRlPVwib2ZmXCIgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdEJ1c2NhZG9yfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHJlcXVpcmVkIGNsYXNzTmFtZT17TmF2YmFyU3R5bGUuZm9ybV9zZWFyY2hfbWVudSArICcgJyArIGBmb3JtLWNvbnRyb2xgfSBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlTWVudX0gcGxhY2Vob2xkZXI9XCLCv1F1w6kgYW5kYXMgYnVzY2FuZG8/XCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtOYXZiYXJTdHlsZS5jb250YWluZXJfX2xvZ2luX21lbnUgKyAnICcgKyBgY29sLXNtLTcgY29sLXhsLTQgY29sLW1kLTQgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtZW5kYH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7KHByb3BzLmxvZ3VlYWRvKT9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uRHJvcGRvd24gaXNPcGVuPXtkcm9wZG93bk9wZW59IHRvZ2dsZT17dG9nZ2xlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duVG9nZ2xlIGNhcmV0IHNpemU9XCJzbVwiIGNsYXNzTmFtZT17TmF2YmFyU3R5bGUuYm90b25fX21lbnUgKyAnICcgKyBOYXZiYXJTdHlsZS5idG5fYWNjb3VudCArICcgJyArIE5hdmJhclN0eWxlLnNpbkJvcmRlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17KHByb3BzLnVzdWFyaW8uZm90byAhPSAnbnVsbCcpP3Byb3BzLnVzdWFyaW8uZm90bzpgaHR0cHM6Ly9zdG9yYWdlLmdvb2dsZWFwaXMuY29tL3dlYi1vbGl2ZXIvdXNlci1kZWZhdWx0LnBuZ2B9IGNsYXNzTmFtZT17TmF2YmFyU3R5bGUuaW1nUHJvZmlsZX0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duVG9nZ2xlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd25NZW51PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YCR7UFVCTElDX1VSTH0vcGVyZmlsYH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNaSBwZXJmaWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Ecm9wZG93bkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duSXRlbSBkaXZpZGVyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd25JdGVtIG9uQ2xpY2s9e2NlcnJhclNlc2lvbn0+PEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVNpZ25PdXRBbHR9IGNsYXNzTmFtZT17TmF2YmFyU3R5bGUudHh0X19pdGVtX21lbnV9Lz4gQ2VycmFyIHNlc2nDs248L0Ryb3Bkb3duSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Ecm9wZG93bk1lbnU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b25Ecm9wZG93bj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBvbkNsaWNrPXtzaG93TW9kYWxMb2dpbn0gY2xhc3NOYW1lPXtOYXZiYXJTdHlsZS5ib3Rvbl9fbWVudSArICcgJyArIE5hdmJhclN0eWxlLmJ0bl9hY2NvdW50fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtOYXZiYXJTdHlsZS50eHRfX2l0ZW1fbWVudX0+SW5ncmVzw6EgYWhvcmEgLyBSZWdpc3RyYXRlPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17TmF2YmFyU3R5bGUuYm90b25fX21lbnUgKyAnICcgKyBOYXZiYXJTdHlsZS5idG5fY2Fycml0b30gb25DbGljaz17c2hvd01vZGFsQ2Fycml0b30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVNob3BwaW5nQ2FydH0gY2xhc3NOYW1lPXtOYXZiYXJTdHlsZS50eHRfX2l0ZW1fbWVudX0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L25hdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e05hdmJhclN0eWxlLm1lbnVfX2NvbGxhcHNlZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtOYXZiYXJTdHlsZS5oZWFkZXJfX2NvbGxhcHNlZF9uYXZ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YCR7VVJMX0NMT1VEX1NUT1JBR0V9L3N0YXRpYy9QZXJyby5wbmdgfSBjbGFzc05hbWU9e05hdmJhclN0eWxlLmxvZ299IGFsdD1cIk9saXZlciBwZXQgc2hvcFwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgb25DbGljaz17dG9nZ2xlTWVudX0gY2xhc3NOYW1lPXtOYXZiYXJTdHlsZS5jbG9zZV9idG5fbWVudSArICcgJyArIGBmYXMgZmEtdGltZXNgfT48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsocHJvcHMubG9ndWVhZG8pP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25Ecm9wZG93biBpc09wZW49e2Ryb3Bkb3duT3Blbn0gdG9nZ2xlPXt0b2dnbGV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd25Ub2dnbGUgY2FyZXQgc2l6ZT1cInNtXCIgY2xhc3NOYW1lPXtOYXZiYXJTdHlsZS5ib3Rvbl9fbWVudSArICcgJyArIE5hdmJhclN0eWxlLmJ0bl9hY2NvdW50ICsgJyAnICsgTmF2YmFyU3R5bGUuc2luQm9yZGVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXsocHJvcHMudXN1YXJpby5mb3RvICE9ICdudWxsJyk/cHJvcHMudXN1YXJpby5mb3RvOmBodHRwczovL3N0b3JhZ2UuZ29vZ2xlYXBpcy5jb20vd2ViLW9saXZlci91c2VyLWRlZmF1bHQucG5nYH0gY2xhc3NOYW1lPXtOYXZiYXJTdHlsZS5pbWdQcm9maWxlfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRHJvcGRvd25Ub2dnbGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bk1lbnU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd25JdGVtIG9uQ2xpY2s9e25hdmVnYXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1pIHBlcmZpbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Ecm9wZG93bkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd25JdGVtIGRpdmlkZXIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bkl0ZW0gb25DbGljaz17Y2VycmFyU2VzaW9ufT48Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhU2lnbk91dEFsdH0gY2xhc3NOYW1lPXtOYXZiYXJTdHlsZS50eHRfX2l0ZW1fbWVudX0vPiBDZXJyYXIgc2VzacOzbjwvRHJvcGRvd25JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duTWVudT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbkRyb3Bkb3duPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6bnVsbH1cclxuICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e05hdmJhclN0eWxlLm1haW5fX2NvbGxhcHNlZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9e05hdmJhclN0eWxlLmxpc3RfX21lbnVfX2NvbGxhcHNlZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiIG9uQ2xpY2s9e3RvZ2dsZU1lbnV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtOYXZiYXJTdHlsZS5pdGVtX19tZW51X19jb2xsYXBzZWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUhvbWV9IGNsYXNzTmFtZT17TmF2YmFyU3R5bGUuaWNvbl9faXRlbU1lbnVfX2NvbGxhcHNlZH0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtOYXZiYXJTdHlsZS5sYWJlbF9faXRlbV9fbWVudX0+SW5pY2lvPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCIgb25DbGljaz17dG9nZ2xlTWVudX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e05hdmJhclN0eWxlLml0ZW1fX21lbnVfX2NvbGxhcHNlZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhUGlnZ3lCYW5rfSBjbGFzc05hbWU9e05hdmJhclN0eWxlLmljb25fX2l0ZW1NZW51X19jb2xsYXBzZWR9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17TmF2YmFyU3R5bGUubGFiZWxfX2l0ZW1fX21lbnV9PlByb2R1Y3Rvczwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7KHByb3BzLmxvZ3VlYWRvKT9udWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtOYXZiYXJTdHlsZS5pdGVtX19tZW51X19jb2xsYXBzZWR9IG9uQ2xpY2s9e3Nob3dNb2RhbExvZ2lufT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhVXNlcn0gY2xhc3NOYW1lPXtOYXZiYXJTdHlsZS5pY29uX19pdGVtTWVudV9fY29sbGFwc2VkfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtOYXZiYXJTdHlsZS5sYWJlbF9faXRlbV9fbWVudX0+SW5ncmVzw6EgYWhvcmEgLyBSZWdpc3RyYXRlPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e05hdmJhclN0eWxlLml0ZW1fX21lbnVfX2NvbGxhcHNlZCArICcgJyArIE5hdmJhclN0eWxlLl9fd2l0aEJ1dHRvbn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9cIiBjbGFzc05hbWU9XCJib3RvbiBiZy15ZWxsb3dcIj5PZmVydGFzPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e05hdmJhclN0eWxlLmNvbGxhcHNlZF9pbmZvICsgJyAnICsgYHRleHQtY2VudGVyYH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtOYXZiYXJTdHlsZS5yZWRlc19fY29sbGFwc2VkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFGYWNlYm9va30gY2xhc3NOYW1lPXtOYXZiYXJTdHlsZS5pY29ub1JlZH0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUluc3RhZ3JhbX0gY2xhc3NOYW1lPXtOYXZiYXJTdHlsZS5pY29ub1JlZH0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1tdXRlZFwiPiZjb3B5O1Rlcm1pbm9zIHkgQ29uZGljaW9uZXM8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPiAgXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIHsoIW1vZGFsSXNPcGVuKT9udWxsOlxyXG4gICAgICAgICAgICAgICAgPE1vZGFsIGNsb3NlTW9kYWw9e2Nsb3NlTW9kYWx9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtyZW5kZXJDb250ZW5pZG9Nb2RhbCgpfVxyXG4gICAgICAgICAgICAgICAgPC9Nb2RhbD5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufVxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSByZWR1Y2Vycz0+e1xyXG4gICAgcmV0dXJuIHJlZHVjZXJzLnVzdWFyaW9SZWR1Y2VyO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcyx1c3VhcmlvQWN0aW9ucykoTmF2YmFyKTsiXSwic291cmNlUm9vdCI6IiJ9