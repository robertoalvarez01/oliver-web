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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTmF2YmFyL2luZGV4LmpzIl0sIm5hbWVzIjpbIk5hdmJhciIsInByb3BzIiwidXNlRWZmZWN0IiwidmVyaWZpY2FyU2VzaW9uIiwidXNlU3RhdGUiLCJidXNxdWVkYSIsInNldEJ1c3F1ZWRhIiwibG9naW4iLCJzZXRMb2dpbiIsImNhcnJpdG8iLCJzZXRDYXJyaXRvIiwicmVnaXN0ZXIiLCJzZXRSZWdpc3RlciIsIm1vZGFsSXNPcGVuIiwic2V0TW9kYWxJc09wZW4iLCJkcm9wZG93bk9wZW4iLCJzZXRPcGVuIiwibG9jYXRpb24iLCJ1c2VSb3V0ZXIiLCJzaG93TW9kYWxMb2dpbiIsInNob3dSZWdpc3RlciIsImNsb3NlTW9kYWwiLCJzaG93TW9kYWxDYXJyaXRvIiwidG9nZ2xlTWVudSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsIk5hdmJhclN0eWxlIiwibWVudV9fY29sbGFwc2VkIiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwic2hvd0NvbGxhcHNlZCIsImhhbmRsZUNoYW5nZU1lbnUiLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlU3VibWl0QnVzY2Fkb3IiLCJwcmV2ZW50RGVmYXVsdCIsInRyaW0iLCJwYXRobmFtZSIsIlJvdXRlciIsInB1c2giLCJ3aW5kb3ciLCJhc3NpZ24iLCJyZW5kZXJDb250ZW5pZG9Nb2RhbCIsImNlcnJhclNlc2lvbiIsImxvZ291dCIsInNldFRpbWVvdXQiLCJuYXZlZ2FyIiwiY29uc29sZSIsImxvZyIsIm5hdmJhciIsIndyYXBwZXJfX25hdmJhciIsImNvbnRhaW5lcl9fbG9nbyIsIlVSTF9DTE9VRF9TVE9SQUdFIiwibG9nbyIsImJvdG9uX19tZW51IiwiYnRuX2NhcnJpdG8iLCJjYXJyaXRvX21vYmlsZSIsImZhU2hvcHBpbmdDYXJ0IiwidHh0X19pdGVtX21lbnUiLCJmYUFsaWduTGVmdCIsImljb25fbWVudSIsImJ1c2NhZG9yIiwiZm9ybV9zZWFyY2hfbWVudSIsImNvbnRhaW5lcl9fbG9naW5fbWVudSIsImxvZ3VlYWRvIiwiYnRuX2FjY291bnQiLCJzaW5Cb3JkZXIiLCJ1c3VhcmlvIiwiZm90byIsImltZ1Byb2ZpbGUiLCJQVUJMSUNfVVJMIiwiZmFTaWduT3V0QWx0IiwiaGVhZGVyX19jb2xsYXBzZWRfbmF2IiwiY2xvc2VfYnRuX21lbnUiLCJtYWluX19jb2xsYXBzZWQiLCJsaXN0X19tZW51X19jb2xsYXBzZWQiLCJpdGVtX19tZW51X19jb2xsYXBzZWQiLCJmYUhvbWUiLCJpY29uX19pdGVtTWVudV9fY29sbGFwc2VkIiwibGFiZWxfX2l0ZW1fX21lbnUiLCJmYVBpZ2d5QmFuayIsImZhVXNlciIsIl9fd2l0aEJ1dHRvbiIsImNvbGxhcHNlZF9pbmZvIiwicmVkZXNfX2NvbGxhcHNlZCIsImZhRmFjZWJvb2siLCJpY29ub1JlZCIsImZhSW5zdGFncmFtIiwibWFwU3RhdGVUb1Byb3BzIiwicmVkdWNlcnMiLCJ1c3VhcmlvUmVkdWNlciIsImNvbm5lY3QiLCJ1c3VhcmlvQWN0aW9ucyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBR0EsSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQ3RCQyx5REFBUyxDQUFDLFlBQU07QUFDWkQsU0FBSyxDQUFDRSxlQUFOO0FBQ0gsR0FGUSxFQUVOLEVBRk0sQ0FBVDs7QUFEc0Isa0JBS1VDLHNEQUFRLENBQUMsRUFBRCxDQUxsQjtBQUFBLE1BS2ZDLFFBTGU7QUFBQSxNQUtMQyxXQUxLOztBQUFBLG1CQU1JRixzREFBUSxDQUFDLEtBQUQsQ0FOWjtBQUFBLE1BTWZHLEtBTmU7QUFBQSxNQU1SQyxRQU5ROztBQUFBLG1CQU9RSixzREFBUSxDQUFDLEtBQUQsQ0FQaEI7QUFBQSxNQU9mSyxPQVBlO0FBQUEsTUFPTkMsVUFQTTs7QUFBQSxtQkFRVU4sc0RBQVEsQ0FBQyxLQUFELENBUmxCO0FBQUEsTUFRZk8sUUFSZTtBQUFBLE1BUUxDLFdBUks7O0FBQUEsbUJBU2dCUixzREFBUSxDQUFDLEtBQUQsQ0FUeEI7QUFBQSxNQVNmUyxXQVRlO0FBQUEsTUFTRkMsY0FURTs7QUFBQSxtQkFVVVYsc0RBQVEsQ0FBQyxLQUFELENBVmxCO0FBQUEsTUFVZlcsWUFWZTtBQUFBLE1BVURDLE9BVkM7O0FBV3RCLE1BQU1DLFFBQVEsR0FBR0MsNkRBQVMsRUFBMUIsQ0FYc0IsQ0FZdEI7O0FBQ0EsTUFBTUMsY0FBYyxHQUFFLFNBQWhCQSxjQUFnQixHQUFJO0FBQ3JCUixZQUFELEdBQVdDLFdBQVcsQ0FBQyxLQUFELENBQXRCLEdBQThCLElBQTlCO0FBQ0NILFdBQUQsR0FBVUMsVUFBVSxDQUFDLEtBQUQsQ0FBcEIsR0FBNEIsSUFBNUI7QUFDQUYsWUFBUSxDQUFDLElBQUQsQ0FBUjtBQUNBTSxrQkFBYyxDQUFDLElBQUQsQ0FBZDtBQUNILEdBTEQ7O0FBT0EsTUFBTU0sWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBSTtBQUNwQmIsU0FBRCxHQUFRQyxRQUFRLENBQUMsS0FBRCxDQUFoQixHQUF3QixLQUF4QjtBQUNDQyxXQUFELEdBQVVDLFVBQVUsQ0FBQyxLQUFELENBQXBCLEdBQTRCLElBQTVCO0FBQ0FFLGVBQVcsQ0FBQyxJQUFELENBQVg7QUFDSCxHQUpEOztBQU1BLE1BQU1TLFVBQVUsR0FBQyxTQUFYQSxVQUFXO0FBQUEsV0FDYlAsY0FBYyxDQUFDLEtBQUQsQ0FERDtBQUFBLEdBQWpCLENBMUJzQixDQStCdEI7QUFHQTs7O0FBQ0EsTUFBTVEsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixHQUFJO0FBQ3hCZixTQUFELEdBQVFDLFFBQVEsQ0FBQyxLQUFELENBQWhCLEdBQXdCLElBQXhCO0FBQ0NHLFlBQUQsR0FBV0MsV0FBVyxDQUFDLEtBQUQsQ0FBdEIsR0FBOEIsSUFBOUI7QUFDQUYsY0FBVSxDQUFDLElBQUQsQ0FBVjtBQUNBSSxrQkFBYyxDQUFDLElBQUQsQ0FBZDtBQUNILEdBTEQ7O0FBT0EsTUFBTVMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBSTtBQUNuQkMsWUFBUSxDQUFDQyxzQkFBVCxDQUFnQ0MseURBQVcsQ0FBQ0MsZUFBNUMsRUFBNkQsQ0FBN0QsRUFBZ0VDLFNBQWhFLENBQTBFQyxNQUExRSxDQUFpRkgseURBQVcsQ0FBQ0ksYUFBN0Y7QUFDSCxHQUZEOztBQUlBLE1BQU1DLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsQ0FBQUMsS0FBSyxFQUFFO0FBQzVCMUIsZUFBVyxDQUFDMEIsS0FBSyxDQUFDQyxNQUFOLENBQWFDLEtBQWQsQ0FBWDtBQUNILEdBRkQ7O0FBSUEsTUFBTUMsb0JBQW9CLEdBQUcsU0FBdkJBLG9CQUF1QixDQUFBSCxLQUFLLEVBQUU7QUFDaENBLFNBQUssQ0FBQ0ksY0FBTjtBQUNBLFFBQUcvQixRQUFRLENBQUNnQyxJQUFULE9BQW9CLEVBQXZCLEVBQTBCLE9BQU8sS0FBUDs7QUFDMUIsUUFBR3BCLFFBQVEsQ0FBQ3FCLFFBQVQsSUFBcUIsR0FBeEIsRUFBNEI7QUFDeEIsYUFBT0Msa0RBQU0sQ0FBQ0MsSUFBUCw2QkFBaUNuQyxRQUFqQyxFQUFQO0FBQ0g7O0FBQ0QsV0FBT29DLE1BQU0sQ0FBQ3hCLFFBQVAsQ0FBZ0J5QixNQUFoQiw2QkFBNENyQyxRQUE1QyxFQUFQO0FBQ0gsR0FQRDs7QUFTQSxNQUFNc0Msb0JBQW9CLEdBQUcsU0FBdkJBLG9CQUF1QixHQUFJO0FBQzdCLFFBQUdwQyxLQUFILEVBQVUsT0FBTyxNQUFDLDhDQUFEO0FBQU8sa0JBQVksRUFBRWEsWUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUFQO0FBQ1YsUUFBR1QsUUFBSCxFQUFhLE9BQU8sTUFBQyx1REFBRDtBQUFVLGVBQVMsRUFBRVEsY0FBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUFQO0FBQ2IsUUFBR1YsT0FBSCxFQUFZLE9BQU8sTUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQVA7QUFDZixHQUpEOztBQUtBLE1BQU1tQyxZQUFZO0FBQUEsZ01BQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQ1gzQyxLQUFLLENBQUM0QyxNQUFOLEVBRFc7O0FBQUE7QUFFakJDLHdCQUFVLENBQUMsWUFBTTtBQUNiLHVCQUFPM0IsY0FBYyxFQUFyQjtBQUNILGVBRlMsRUFFUCxHQUZPLENBQVY7O0FBRmlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQVp5QixZQUFZO0FBQUE7QUFBQTtBQUFBLEtBQWxCOztBQU1BLE1BQU1mLE1BQU0sR0FBRyxTQUFUQSxNQUFTO0FBQUEsV0FBTWIsT0FBTyxDQUFDLENBQUNELFlBQUYsQ0FBYjtBQUFBLEdBQWY7O0FBQ0EsTUFBTWdDLE9BQU8sR0FBRyxTQUFWQSxPQUFVO0FBQUEsV0FBSUMsT0FBTyxDQUFDQyxHQUFSLENBQVksTUFBWixDQUFKO0FBQUEsR0FBaEI7O0FBQ0EsU0FDSSxtRUFDSTtBQUFLLGFBQVMsRUFBRXZCLHlEQUFXLENBQUN3QixNQUFaLEdBQXFCLEdBQXJCLGVBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLGFBQVMsRUFBRXhCLHlEQUFXLENBQUN5QixlQUFaLEdBQStCLEdBQS9CLGNBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLGFBQVMsRUFBQyxnQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxhQUFTLEVBQUV6Qix5REFBVyxDQUFDMEIsZUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUMsR0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssT0FBRyxZQUFLQyxnRUFBTCxzQkFBUjtBQUFtRCxhQUFTLEVBQUUzQix5REFBVyxDQUFDNEIsSUFBWixHQUFtQixHQUFuQixjQUE5RDtBQUFvRyxPQUFHLEVBQUMsaUJBQXhHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixDQURKLENBREosQ0FESixFQVFJO0FBQU0sYUFBUyxFQUFFNUIseURBQVcsQ0FBQzZCLFdBQVosR0FBMEIsR0FBMUIsR0FBZ0M3Qix5REFBVyxDQUFDOEIsV0FBNUMsR0FBMEQsR0FBMUQsR0FBZ0U5Qix5REFBVyxDQUFDK0IsY0FBN0Y7QUFBNkcsV0FBTyxFQUFFbkMsZ0JBQXRIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLCtFQUFEO0FBQWlCLFFBQUksRUFBRW9DLGlGQUF2QjtBQUF1QyxhQUFTLEVBQUVoQyx5REFBVyxDQUFDaUMsY0FBOUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLENBUkosRUFXSSxNQUFDLCtFQUFEO0FBQWtCLFdBQU8sRUFBRXBDLFVBQTNCO0FBQXVDLFFBQUksRUFBRXFDLDhFQUE3QztBQUEwRCxhQUFTLEVBQUVsQyx5REFBVyxDQUFDbUMsU0FBakY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVhKLEVBWUk7QUFBTSxhQUFTLEVBQUVuQyx5REFBVyxDQUFDb0MsUUFBWixHQUF1QixHQUF2QixxRUFBakI7QUFBa0gsZ0JBQVksRUFBQyxLQUEvSDtBQUFxSSxZQUFRLEVBQUUzQixvQkFBL0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQU8sUUFBSSxFQUFDLE1BQVo7QUFBbUIsWUFBUSxNQUEzQjtBQUE0QixhQUFTLEVBQUVULHlEQUFXLENBQUNxQyxnQkFBWixHQUErQixHQUEvQixpQkFBdkM7QUFBNEYsWUFBUSxFQUFFaEMsZ0JBQXRHO0FBQXdILGVBQVcsRUFBQyw0QkFBcEk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLENBWkosRUFlSTtBQUFLLGFBQVMsRUFBRUwseURBQVcsQ0FBQ3NDLHFCQUFaLEdBQW9DLEdBQXBDLDZFQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ00vRCxLQUFLLENBQUNnRSxRQUFQLEdBQ0csTUFBQywwREFBRDtBQUFnQixVQUFNLEVBQUVsRCxZQUF4QjtBQUFzQyxVQUFNLEVBQUVjLE1BQTlDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLDBEQUFEO0FBQWdCLFNBQUssTUFBckI7QUFBc0IsUUFBSSxFQUFDLElBQTNCO0FBQWdDLGFBQVMsRUFBRUgseURBQVcsQ0FBQzZCLFdBQVosR0FBMEIsR0FBMUIsR0FBZ0M3Qix5REFBVyxDQUFDd0MsV0FBNUMsR0FBMEQsR0FBMUQsR0FBZ0V4Qyx5REFBVyxDQUFDeUMsU0FBdkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssT0FBRyxFQUFHbEUsS0FBSyxDQUFDbUUsT0FBTixDQUFjQyxJQUFkLElBQXNCLE1BQXZCLEdBQStCcEUsS0FBSyxDQUFDbUUsT0FBTixDQUFjQyxJQUE3QywrREFBVjtBQUEwSCxhQUFTLEVBQUUzQyx5REFBVyxDQUFDNEMsVUFBako7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLENBREosRUFJSSxNQUFDLHdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLGdEQUFEO0FBQU0sUUFBSSxZQUFLQyx5REFBTCxZQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyx3REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKLENBREosQ0FESixFQVFJLE1BQUMsd0RBQUQ7QUFBYyxXQUFPLE1BQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFSSixFQVNJLE1BQUMsd0RBQUQ7QUFBYyxXQUFPLEVBQUUzQixZQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQXFDLE1BQUMsK0VBQUQ7QUFBaUIsUUFBSSxFQUFFNEIsK0VBQXZCO0FBQXFDLGFBQVMsRUFBRTlDLHlEQUFXLENBQUNpQyxjQUE1RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBQXJDLHNCQVRKLENBSkosQ0FESCxHQWtCRztBQUFNLFdBQU8sRUFBRXhDLGNBQWY7QUFBK0IsYUFBUyxFQUFFTyx5REFBVyxDQUFDNkIsV0FBWixHQUEwQixHQUExQixHQUFnQzdCLHlEQUFXLENBQUN3QyxXQUF0RjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBTSxhQUFTLEVBQUV4Qyx5REFBVyxDQUFDaUMsY0FBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQ0FESixDQW5CUixFQXVCSTtBQUFNLGFBQVMsRUFBRWpDLHlEQUFXLENBQUM2QixXQUFaLEdBQTBCLEdBQTFCLEdBQWdDN0IseURBQVcsQ0FBQzhCLFdBQTdEO0FBQTBFLFdBQU8sRUFBRWxDLGdCQUFuRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQywrRUFBRDtBQUFpQixRQUFJLEVBQUVvQyxpRkFBdkI7QUFBdUMsYUFBUyxFQUFFaEMseURBQVcsQ0FBQ2lDLGNBQTlEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixDQXZCSixDQWZKLENBREosQ0FESixFQThDSTtBQUFLLGFBQVMsRUFBRWpDLHlEQUFXLENBQUNDLGVBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFTLGFBQVMsRUFBRUQseURBQVcsQ0FBQytDLHFCQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxPQUFHLFlBQUtwQixnRUFBTCxzQkFBUjtBQUFtRCxhQUFTLEVBQUUzQix5REFBVyxDQUFDNEIsSUFBMUU7QUFBZ0YsT0FBRyxFQUFDLGlCQUFwRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosRUFFSTtBQUFHLFdBQU8sRUFBRS9CLFVBQVo7QUFBd0IsYUFBUyxFQUFFRyx5REFBVyxDQUFDZ0QsY0FBWixHQUE2QixHQUE3QixpQkFBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZKLEVBR016RSxLQUFLLENBQUNnRSxRQUFQLEdBQ08sTUFBQywwREFBRDtBQUFnQixVQUFNLEVBQUVsRCxZQUF4QjtBQUFzQyxVQUFNLEVBQUVjLE1BQTlDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLDBEQUFEO0FBQWdCLFNBQUssTUFBckI7QUFBc0IsYUFBUyxFQUFFSCx5REFBVyxDQUFDNkIsV0FBWixHQUEwQixHQUExQixHQUFnQzdCLHlEQUFXLENBQUN3QyxXQUE1QyxHQUEwRCxHQUExRCxHQUFnRXhDLHlEQUFXLENBQUN5QyxTQUE3RztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxPQUFHLEVBQUdsRSxLQUFLLENBQUNtRSxPQUFOLENBQWNDLElBQWQsSUFBc0IsTUFBdkIsR0FBK0JwRSxLQUFLLENBQUNtRSxPQUFOLENBQWNDLElBQTdDLCtEQUFWO0FBQTBILGFBQVMsRUFBRTNDLHlEQUFXLENBQUM0QyxVQUFqSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosQ0FESixFQUlJLE1BQUMsd0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsd0RBQUQ7QUFBYyxXQUFPLEVBQUV2QixPQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKLEVBSUksTUFBQyx3REFBRDtBQUFjLFdBQU8sTUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUpKLEVBS0ksTUFBQyx3REFBRDtBQUFjLFdBQU8sRUFBRUgsWUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFxQyxNQUFDLCtFQUFEO0FBQWlCLFFBQUksRUFBRTRCLCtFQUF2QjtBQUFxQyxhQUFTLEVBQUU5Qyx5REFBVyxDQUFDaUMsY0FBNUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUFyQyxzQkFMSixDQUpKLENBRFAsR0FhQSxJQWhCTCxDQURKLEVBbUJJO0FBQUssYUFBUyxFQUFFakMseURBQVcsQ0FBQ2lELGVBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFJLGFBQVMsRUFBRWpELHlEQUFXLENBQUNrRCxxQkFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUMsR0FBWDtBQUFlLFdBQU8sRUFBRXJELFVBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSSxhQUFTLEVBQUVHLHlEQUFXLENBQUNtRCxxQkFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsK0VBQUQ7QUFBaUIsUUFBSSxFQUFFQyx5RUFBdkI7QUFBK0IsYUFBUyxFQUFFcEQseURBQVcsQ0FBQ3FELHlCQUF0RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosRUFFSTtBQUFNLGFBQVMsRUFBRXJELHlEQUFXLENBQUNzRCxpQkFBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZKLENBREosQ0FESixDQURKLEVBU0ksTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBQyxHQUFYO0FBQWUsV0FBTyxFQUFFekQsVUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFJLGFBQVMsRUFBRUcseURBQVcsQ0FBQ21ELHFCQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQywrRUFBRDtBQUFpQixRQUFJLEVBQUVJLDhFQUF2QjtBQUFvQyxhQUFTLEVBQUV2RCx5REFBVyxDQUFDcUQseUJBQTNEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixFQUVJO0FBQU0sYUFBUyxFQUFFckQseURBQVcsQ0FBQ3NELGlCQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZKLENBREosQ0FESixDQVRKLEVBaUJNL0UsS0FBSyxDQUFDZ0UsUUFBUCxHQUFpQixJQUFqQixHQUVEO0FBQUksYUFBUyxFQUFFdkMseURBQVcsQ0FBQ21ELHFCQUEzQjtBQUFrRCxXQUFPLEVBQUUxRCxjQUEzRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQywrRUFBRDtBQUFpQixRQUFJLEVBQUUrRCx5RUFBdkI7QUFBK0IsYUFBUyxFQUFFeEQseURBQVcsQ0FBQ3FELHlCQUF0RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosRUFFSTtBQUFNLGFBQVMsRUFBRXJELHlEQUFXLENBQUNzRCxpQkFBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQ0FGSixDQW5CSixFQXdCSTtBQUFJLGFBQVMsRUFBRXRELHlEQUFXLENBQUNtRCxxQkFBWixHQUFvQyxHQUFwQyxHQUEwQ25ELHlEQUFXLENBQUN5RCxZQUFyRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBRyxRQUFJLEVBQUMsR0FBUjtBQUFZLGFBQVMsRUFBQyxpQkFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKLENBeEJKLENBREosQ0FuQkosRUFpREk7QUFBUyxhQUFTLEVBQUV6RCx5REFBVyxDQUFDMEQsY0FBWixHQUE2QixHQUE3QixnQkFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssYUFBUyxFQUFFMUQseURBQVcsQ0FBQzJELGdCQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQywrRUFBRDtBQUFpQixRQUFJLEVBQUVDLDhFQUF2QjtBQUFtQyxhQUFTLEVBQUU1RCx5REFBVyxDQUFDNkQsUUFBMUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLEVBRUksTUFBQywrRUFBRDtBQUFpQixRQUFJLEVBQUVDLCtFQUF2QjtBQUFvQyxhQUFTLEVBQUU5RCx5REFBVyxDQUFDNkQsUUFBM0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZKLENBREosRUFLSTtBQUFNLGFBQVMsRUFBQyxZQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtDQUxKLENBakRKLENBOUNKLENBREosRUF5R00sQ0FBQzFFLFdBQUYsR0FBZSxJQUFmLEdBQ0csTUFBQyxvREFBRDtBQUFPLGNBQVUsRUFBRVEsVUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNLc0Isb0JBQW9CLEVBRHpCLENBMUdSLENBREo7QUFpSEgsQ0F6TEQ7O0dBQU0zQyxNO1VBV2VrQixxRDs7O0tBWGZsQixNOztBQTBMTixJQUFNeUYsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFBQyxRQUFRLEVBQUU7QUFDOUIsU0FBT0EsUUFBUSxDQUFDQyxjQUFoQjtBQUNILENBRkQ7O0FBSWVDLDJIQUFPLENBQUNILGVBQUQsRUFBaUJJLDJEQUFqQixDQUFQLENBQXdDN0YsTUFBeEMsQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLmM1NmE4ZTUyOTBiYTZmMmY5ZGMwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3Qse3VzZVN0YXRlLHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTmF2YmFyU3R5bGUgZnJvbSAnLi9OYXZiYXIubW9kdWxlLmNzcyc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBSb3V0ZXIse3VzZVJvdXRlcn0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgTW9kYWwgZnJvbSAnLi4vTW9kYWwvaW5kZXgnO1xyXG5pbXBvcnQgTG9naW4gZnJvbSAnLi4vTG9naW4nO1xyXG5pbXBvcnQgUmVnaXN0ZXIgZnJvbSAnLi4vTG9naW4vUmVnaXN0ZXInO1xyXG5pbXBvcnQgQ2Fycml0byBmcm9tICcuLi9DYXJyaXRvJztcclxuaW1wb3J0IHsgZmFIb21lLGZhVXNlcixmYVBpZ2d5QmFuayxmYVNob3BwaW5nQ2FydCxmYUFsaWduTGVmdCxmYVNpZ25PdXRBbHQgfSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCI7XHJcbmltcG9ydCB7ZmFGYWNlYm9vayxmYUluc3RhZ3JhbX0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtYnJhbmRzLXN2Zy1pY29ucyc7XHJcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIjtcclxuaW1wb3J0IHtQVUJMSUNfVVJMLCBVUkxfQ0xPVURfU1RPUkFHRX0gZnJvbSAnLi4vLi4vLi4vY29uZmlnL2luZGV4JztcclxuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCAqIGFzIHVzdWFyaW9BY3Rpb25zIGZyb20gJy4uLy4uLy4uL3N0b3JlL2FjdGlvbnMvdXN1YXJpb0FjdGlvbnMnO1xyXG5pbXBvcnQgeyBCdXR0b25Ecm9wZG93biwgRHJvcGRvd25Ub2dnbGUsIERyb3Bkb3duTWVudSwgRHJvcGRvd25JdGVtIH0gZnJvbSAncmVhY3RzdHJhcCc7XHJcblxyXG5cclxuY29uc3QgTmF2YmFyID0gKHByb3BzKSA9PiB7XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHByb3BzLnZlcmlmaWNhclNlc2lvbigpO1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIGNvbnN0IFtidXNxdWVkYSwgc2V0QnVzcXVlZGFdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW2xvZ2luLCBzZXRMb2dpbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbY2Fycml0bywgc2V0Q2Fycml0b10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbcmVnaXN0ZXIsIHNldFJlZ2lzdGVyXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFttb2RhbElzT3Blbiwgc2V0TW9kYWxJc09wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW2Ryb3Bkb3duT3Blbiwgc2V0T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBsb2NhdGlvbiA9IHVzZVJvdXRlcigpO1xyXG4gICAgLy9hY3Rpb25zIGxvZ2luLXJlZ2lzdGVyXHJcbiAgICBjb25zdCBzaG93TW9kYWxMb2dpbiA9KCk9PntcclxuICAgICAgICAocmVnaXN0ZXIpP3NldFJlZ2lzdGVyKGZhbHNlKTpudWxsO1xyXG4gICAgICAgIChjYXJyaXRvKT9zZXRDYXJyaXRvKGZhbHNlKTpudWxsO1xyXG4gICAgICAgIHNldExvZ2luKHRydWUpO1xyXG4gICAgICAgIHNldE1vZGFsSXNPcGVuKHRydWUpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc2hvd1JlZ2lzdGVyID0gKCk9PntcclxuICAgICAgICAobG9naW4pP3NldExvZ2luKGZhbHNlKTpmYWxzZTtcclxuICAgICAgICAoY2Fycml0byk/c2V0Q2Fycml0byhmYWxzZSk6bnVsbDtcclxuICAgICAgICBzZXRSZWdpc3Rlcih0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjbG9zZU1vZGFsPSgpPT4oXHJcbiAgICAgICAgc2V0TW9kYWxJc09wZW4oZmFsc2UpXHJcbiAgICApXHJcbiAgICBcclxuICAgIFxyXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy9cclxuXHJcblxyXG4gICAgLy9hY3Rpb25zIGNhcnJpdG9cclxuICAgIGNvbnN0IHNob3dNb2RhbENhcnJpdG8gPSAoKT0+e1xyXG4gICAgICAgIChsb2dpbik/c2V0TG9naW4oZmFsc2UpOm51bGw7XHJcbiAgICAgICAgKHJlZ2lzdGVyKT9zZXRSZWdpc3RlcihmYWxzZSk6bnVsbDtcclxuICAgICAgICBzZXRDYXJyaXRvKHRydWUpO1xyXG4gICAgICAgIHNldE1vZGFsSXNPcGVuKHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHRvZ2dsZU1lbnUgPSAoKT0+e1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoTmF2YmFyU3R5bGUubWVudV9fY29sbGFwc2VkKVswXS5jbGFzc0xpc3QudG9nZ2xlKE5hdmJhclN0eWxlLnNob3dDb2xsYXBzZWQpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZU1lbnUgPSBldmVudD0+e1xyXG4gICAgICAgIHNldEJ1c3F1ZWRhKGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlU3VibWl0QnVzY2Fkb3IgPSBldmVudD0+e1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgaWYoYnVzcXVlZGEudHJpbSgpID09PSAnJylyZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgaWYobG9jYXRpb24ucGF0aG5hbWUgPT0gJy8nKXtcclxuICAgICAgICAgICAgcmV0dXJuIFJvdXRlci5wdXNoKGAvcHJvZHVjdG9zP3NlYXJjaD0ke2J1c3F1ZWRhfWApO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gd2luZG93LmxvY2F0aW9uLmFzc2lnbihgL3Byb2R1Y3Rvcz9zZWFyY2g9JHtidXNxdWVkYX1gKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCByZW5kZXJDb250ZW5pZG9Nb2RhbCA9ICgpPT57XHJcbiAgICAgICAgaWYobG9naW4pIHJldHVybiA8TG9naW4gc2hvd1JlZ2lzdGVyPXtzaG93UmVnaXN0ZXJ9Lz47XHJcbiAgICAgICAgaWYocmVnaXN0ZXIpIHJldHVybiA8UmVnaXN0ZXIgc2hvd0xvZ2luPXtzaG93TW9kYWxMb2dpbn0vPjtcclxuICAgICAgICBpZihjYXJyaXRvKSByZXR1cm4gPENhcnJpdG8vPlxyXG4gICAgfVxyXG4gICAgY29uc3QgY2VycmFyU2VzaW9uID0gYXN5bmMoKT0+e1xyXG4gICAgICAgIGF3YWl0IHByb3BzLmxvZ291dCgpO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gc2hvd01vZGFsTG9naW4oKTtcclxuICAgICAgICB9LCA4MDApO1xyXG4gICAgfVxyXG4gICAgY29uc3QgdG9nZ2xlID0gKCkgPT4gc2V0T3BlbighZHJvcGRvd25PcGVuKTtcclxuICAgIGNvbnN0IG5hdmVnYXIgPSAoKT0+Y29uc29sZS5sb2coJ2plamUnKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e05hdmJhclN0eWxlLm5hdmJhciArICcgJyArIGBzdGlja3ktdG9wYH0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17TmF2YmFyU3R5bGUud3JhcHBlcl9fbmF2YmFyICArICcgJyArICBgY29udGFpbmVyYH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJyb3cgbWwtMCB3LTEwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17TmF2YmFyU3R5bGUuY29udGFpbmVyX19sb2dvfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtgJHtVUkxfQ0xPVURfU1RPUkFHRX0vc3RhdGljL1BlcnJvLnBuZ2B9IGNsYXNzTmFtZT17TmF2YmFyU3R5bGUubG9nbyArICcgJyArIGBpbWctZmx1aWRgfSBhbHQ9XCJPbGl2ZXIgcGV0IHNob3BcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtOYXZiYXJTdHlsZS5ib3Rvbl9fbWVudSArICcgJyArIE5hdmJhclN0eWxlLmJ0bl9jYXJyaXRvICsgJyAnICsgTmF2YmFyU3R5bGUuY2Fycml0b19tb2JpbGV9IG9uQ2xpY2s9e3Nob3dNb2RhbENhcnJpdG99PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVNob3BwaW5nQ2FydH0gY2xhc3NOYW1lPXtOYXZiYXJTdHlsZS50eHRfX2l0ZW1fbWVudX0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gIG9uQ2xpY2s9e3RvZ2dsZU1lbnV9IGljb249e2ZhQWxpZ25MZWZ0fSBjbGFzc05hbWU9e05hdmJhclN0eWxlLmljb25fbWVudX0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9e05hdmJhclN0eWxlLmJ1c2NhZG9yICsgJyAnICsgYGNvbC1zbS00IGNvbC14bC03IGNvbC1tZC03IGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIgaW5wdXQtZ3JvdXBgfSBhdXRvQ29tcGxldGU9XCJvZmZcIiBvblN1Ym1pdD17aGFuZGxlU3VibWl0QnVzY2Fkb3J9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcmVxdWlyZWQgY2xhc3NOYW1lPXtOYXZiYXJTdHlsZS5mb3JtX3NlYXJjaF9tZW51ICsgJyAnICsgYGZvcm0tY29udHJvbGB9IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2VNZW51fSBwbGFjZWhvbGRlcj1cIsK/UXXDqSBhbmRhcyBidXNjYW5kbz9cIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e05hdmJhclN0eWxlLmNvbnRhaW5lcl9fbG9naW5fbWVudSArICcgJyArIGBjb2wtc20tNyBjb2wteGwtNCBjb2wtbWQtNCBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1lbmRgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsocHJvcHMubG9ndWVhZG8pP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25Ecm9wZG93biBpc09wZW49e2Ryb3Bkb3duT3Blbn0gdG9nZ2xlPXt0b2dnbGV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd25Ub2dnbGUgY2FyZXQgc2l6ZT1cInNtXCIgY2xhc3NOYW1lPXtOYXZiYXJTdHlsZS5ib3Rvbl9fbWVudSArICcgJyArIE5hdmJhclN0eWxlLmJ0bl9hY2NvdW50ICsgJyAnICsgTmF2YmFyU3R5bGUuc2luQm9yZGVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXsocHJvcHMudXN1YXJpby5mb3RvICE9ICdudWxsJyk/cHJvcHMudXN1YXJpby5mb3RvOmBodHRwczovL3N0b3JhZ2UuZ29vZ2xlYXBpcy5jb20vd2ViLW9saXZlci91c2VyLWRlZmF1bHQucG5nYH0gY2xhc3NOYW1lPXtOYXZiYXJTdHlsZS5pbWdQcm9maWxlfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRHJvcGRvd25Ub2dnbGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bk1lbnU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgJHtQVUJMSUNfVVJMfS9wZXJmaWxgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1pIHBlcmZpbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd25JdGVtIGRpdmlkZXIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bkl0ZW0gb25DbGljaz17Y2VycmFyU2VzaW9ufT48Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhU2lnbk91dEFsdH0gY2xhc3NOYW1lPXtOYXZiYXJTdHlsZS50eHRfX2l0ZW1fbWVudX0vPiBDZXJyYXIgc2VzacOzbjwvRHJvcGRvd25JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duTWVudT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbkRyb3Bkb3duPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9e3Nob3dNb2RhbExvZ2lufSBjbGFzc05hbWU9e05hdmJhclN0eWxlLmJvdG9uX19tZW51ICsgJyAnICsgTmF2YmFyU3R5bGUuYnRuX2FjY291bnR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e05hdmJhclN0eWxlLnR4dF9faXRlbV9tZW51fT5JbmdyZXPDoSBhaG9yYSAvIFJlZ2lzdHJhdGU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtOYXZiYXJTdHlsZS5ib3Rvbl9fbWVudSArICcgJyArIE5hdmJhclN0eWxlLmJ0bl9jYXJyaXRvfSBvbkNsaWNrPXtzaG93TW9kYWxDYXJyaXRvfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhU2hvcHBpbmdDYXJ0fSBjbGFzc05hbWU9e05hdmJhclN0eWxlLnR4dF9faXRlbV9tZW51fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbmF2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17TmF2YmFyU3R5bGUubWVudV9fY29sbGFwc2VkfT5cclxuICAgICAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e05hdmJhclN0eWxlLmhlYWRlcl9fY29sbGFwc2VkX25hdn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtgJHtVUkxfQ0xPVURfU1RPUkFHRX0vc3RhdGljL1BlcnJvLnBuZ2B9IGNsYXNzTmFtZT17TmF2YmFyU3R5bGUubG9nb30gYWx0PVwiT2xpdmVyIHBldCBzaG9wXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBvbkNsaWNrPXt0b2dnbGVNZW51fSBjbGFzc05hbWU9e05hdmJhclN0eWxlLmNsb3NlX2J0bl9tZW51ICsgJyAnICsgYGZhcyBmYS10aW1lc2B9PjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgeyhwcm9wcy5sb2d1ZWFkbyk/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbkRyb3Bkb3duIGlzT3Blbj17ZHJvcGRvd25PcGVufSB0b2dnbGU9e3RvZ2dsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93blRvZ2dsZSBjYXJldCBjbGFzc05hbWU9e05hdmJhclN0eWxlLmJvdG9uX19tZW51ICsgJyAnICsgTmF2YmFyU3R5bGUuYnRuX2FjY291bnQgKyAnICcgKyBOYXZiYXJTdHlsZS5zaW5Cb3JkZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9eyhwcm9wcy51c3VhcmlvLmZvdG8gIT0gJ251bGwnKT9wcm9wcy51c3VhcmlvLmZvdG86YGh0dHBzOi8vc3RvcmFnZS5nb29nbGVhcGlzLmNvbS93ZWItb2xpdmVyL3VzZXItZGVmYXVsdC5wbmdgfSBjbGFzc05hbWU9e05hdmJhclN0eWxlLmltZ1Byb2ZpbGV9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Ecm9wZG93blRvZ2dsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duTWVudT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bkl0ZW0gb25DbGljaz17bmF2ZWdhcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTWkgcGVyZmlsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bkl0ZW0gZGl2aWRlciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duSXRlbSBvbkNsaWNrPXtjZXJyYXJTZXNpb259PjxGb250QXdlc29tZUljb24gaWNvbj17ZmFTaWduT3V0QWx0fSBjbGFzc05hbWU9e05hdmJhclN0eWxlLnR4dF9faXRlbV9tZW51fS8+IENlcnJhciBzZXNpw7NuPC9Ecm9wZG93bkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRHJvcGRvd25NZW51PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uRHJvcGRvd24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDpudWxsfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17TmF2YmFyU3R5bGUubWFpbl9fY29sbGFwc2VkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT17TmF2YmFyU3R5bGUubGlzdF9fbWVudV9fY29sbGFwc2VkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCIgb25DbGljaz17dG9nZ2xlTWVudX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e05hdmJhclN0eWxlLml0ZW1fX21lbnVfX2NvbGxhcHNlZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhSG9tZX0gY2xhc3NOYW1lPXtOYXZiYXJTdHlsZS5pY29uX19pdGVtTWVudV9fY29sbGFwc2VkfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e05hdmJhclN0eWxlLmxhYmVsX19pdGVtX19tZW51fT5JbmljaW88L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIiBvbkNsaWNrPXt0b2dnbGVNZW51fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17TmF2YmFyU3R5bGUuaXRlbV9fbWVudV9fY29sbGFwc2VkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFQaWdneUJhbmt9IGNsYXNzTmFtZT17TmF2YmFyU3R5bGUuaWNvbl9faXRlbU1lbnVfX2NvbGxhcHNlZH0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtOYXZiYXJTdHlsZS5sYWJlbF9faXRlbV9fbWVudX0+UHJvZHVjdG9zPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsocHJvcHMubG9ndWVhZG8pP251bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e05hdmJhclN0eWxlLml0ZW1fX21lbnVfX2NvbGxhcHNlZH0gb25DbGljaz17c2hvd01vZGFsTG9naW59PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFVc2VyfSBjbGFzc05hbWU9e05hdmJhclN0eWxlLmljb25fX2l0ZW1NZW51X19jb2xsYXBzZWR9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e05hdmJhclN0eWxlLmxhYmVsX19pdGVtX19tZW51fT5JbmdyZXPDoSBhaG9yYSAvIFJlZ2lzdHJhdGU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17TmF2YmFyU3R5bGUuaXRlbV9fbWVudV9fY29sbGFwc2VkICsgJyAnICsgTmF2YmFyU3R5bGUuX193aXRoQnV0dG9ufT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiL1wiIGNsYXNzTmFtZT1cImJvdG9uIGJnLXllbGxvd1wiPk9mZXJ0YXM8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17TmF2YmFyU3R5bGUuY29sbGFwc2VkX2luZm8gKyAnICcgKyBgdGV4dC1jZW50ZXJgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e05hdmJhclN0eWxlLnJlZGVzX19jb2xsYXBzZWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUZhY2Vib29rfSBjbGFzc05hbWU9e05hdmJhclN0eWxlLmljb25vUmVkfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhSW5zdGFncmFtfSBjbGFzc05hbWU9e05hdmJhclN0eWxlLmljb25vUmVkfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkXCI+JmNvcHk7VGVybWlub3MgeSBDb25kaWNpb25lczwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+ICBcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgeyghbW9kYWxJc09wZW4pP251bGw6XHJcbiAgICAgICAgICAgICAgICA8TW9kYWwgY2xvc2VNb2RhbD17Y2xvc2VNb2RhbH0+XHJcbiAgICAgICAgICAgICAgICAgICAge3JlbmRlckNvbnRlbmlkb01vZGFsKCl9XHJcbiAgICAgICAgICAgICAgICA8L01vZGFsPlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59XHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHJlZHVjZXJzPT57XHJcbiAgICByZXR1cm4gcmVkdWNlcnMudXN1YXJpb1JlZHVjZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLHVzdWFyaW9BY3Rpb25zKShOYXZiYXIpOyJdLCJzb3VyY2VSb290IjoiIn0=