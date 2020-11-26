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
    register ? setRegister(false) : null; //si el menu esta abierto, lo cierro.

    if (document.getElementsByClassName(_Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.menu__collapsed)[0].classList.contains(_Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.showCollapsed)) {
      console.log('esta abierto');
    }

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
        lineNumber: 82,
        columnNumber: 26
      }
    });
    if (register) return __jsx(_Login_Register__WEBPACK_IMPORTED_MODULE_8__["default"], {
      showLogin: showModalLogin,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 29
      }
    });
    if (carrito) return __jsx(_Carrito__WEBPACK_IMPORTED_MODULE_9__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84,
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
      lineNumber: 95,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: _Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.wrapper__navbar + ' ' + "container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 17
    }
  }, __jsx("nav", {
    className: "row ml-0 w-100",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: _Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.container__logo,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 25
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 29
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 33
    }
  }, __jsx("img", {
    src: "".concat(_config_index__WEBPACK_IMPORTED_MODULE_13__["URL_CLOUD_STORAGE"], "/static/Perro.png"),
    className: _Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.logo + ' ' + "img-fluid",
    alt: "Oliver pet shop",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 37
    }
  })))), __jsx("span", {
    className: _Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.boton__menu + ' ' + _Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.btn_carrito + ' ' + _Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.carrito_mobile,
    onClick: showModalCarrito,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 25
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_12__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__["faShoppingCart"],
    className: _Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.txt__item_menu,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 29
    }
  })), props.logueado ? __jsx("img", {
    src: props.usuario.foto != 'null' ? props.usuario.foto : "https://storage.googleapis.com/web-oliver/user-default.png",
    className: _Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.imgProfile + ' ' + _Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.img_menu,
    onClick: toggleMenu,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 30
    }
  }) : __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_12__["FontAwesomeIcon"], {
    onClick: toggleMenu,
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__["faAlignLeft"],
    className: _Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.icon_menu,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 26
    }
  }), __jsx("form", {
    className: _Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.buscador + ' ' + "col-sm-4 col-xl-7 col-md-7 d-flex align-items-center input-group",
    autoComplete: "off",
    onSubmit: handleSubmitBuscador,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
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
      lineNumber: 112,
      columnNumber: 29
    }
  })), __jsx("div", {
    className: _Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.container__login_menu + ' ' + "col-sm-7 col-xl-4 col-md-4 d-flex align-items-center justify-content-end",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 25
    }
  }, props.logueado ? __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_16__["ButtonDropdown"], {
    isOpen: dropdownOpen,
    toggle: toggle,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 33
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_16__["DropdownToggle"], {
    caret: true,
    size: "sm",
    className: _Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.boton__menu + ' ' + _Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.btn_account + ' ' + _Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.sinBorder,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 37
    }
  }, __jsx("img", {
    src: props.usuario.foto != 'null' ? props.usuario.foto : "https://storage.googleapis.com/web-oliver/user-default.png",
    className: _Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.imgProfile,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 41
    }
  })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_16__["DropdownMenu"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 37
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "".concat(_config_index__WEBPACK_IMPORTED_MODULE_13__["PUBLIC_URL"], "/perfil"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 41
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 45
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_16__["DropdownItem"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 49
    }
  }, "Mi perfil"))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_16__["DropdownItem"], {
    divider: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 41
    }
  }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_16__["DropdownItem"], {
    onClick: cerrarSesion,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 41
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_12__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__["faSignOutAlt"],
    className: _Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.txt__item_menu,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 78
    }
  }), " Cerrar sesi\xF3n"))) : __jsx("span", {
    onClick: showModalLogin,
    className: _Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.boton__menu + ' ' + _Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.btn_account,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 33
    }
  }, __jsx("span", {
    className: _Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.txt__item_menu,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 37
    }
  }, "Ingres\xE1 ahora / Registrate")), __jsx("span", {
    className: _Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.boton__menu + ' ' + _Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.btn_carrito,
    onClick: showModalCarrito,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 29
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_12__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__["faShoppingCart"],
    className: _Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.txt__item_menu,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 33
    }
  }))))), __jsx("div", {
    className: _Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.menu__collapsed,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 17
    }
  }, __jsx("section", {
    className: _Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.header__collapsed_nav,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: "".concat(_config_index__WEBPACK_IMPORTED_MODULE_13__["URL_CLOUD_STORAGE"], "/static/Perro.png"),
    className: _Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.logo,
    alt: "Oliver pet shop",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 25
    }
  }), __jsx("i", {
    onClick: toggleMenu,
    className: _Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.close_btn_menu + ' ' + "fas fa-times",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 25
    }
  })), __jsx("div", {
    className: _Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.main__collapsed,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 21
    }
  }, __jsx("ul", {
    className: _Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.list__menu__collapsed,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 25
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/",
    onClick: toggleMenu,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 29
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 33
    }
  }, __jsx("li", {
    className: _Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.item__menu__collapsed,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 37
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_12__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__["faHome"],
    className: _Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.icon__itemMenu__collapsed,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 41
    }
  }), __jsx("span", {
    className: _Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.label__item__menu,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 41
    }
  }, "Inicio")))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/",
    onClick: toggleMenu,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 29
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 33
    }
  }, __jsx("li", {
    className: _Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.item__menu__collapsed,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 37
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_12__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__["faPiggyBank"],
    className: _Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.icon__itemMenu__collapsed,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 41
    }
  }), __jsx("span", {
    className: _Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.label__item__menu,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 41
    }
  }, "Productos")))), props.logueado ? __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "".concat(_config_index__WEBPACK_IMPORTED_MODULE_13__["PUBLIC_URL"], "/perfil"),
    onClick: toggleMenu,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 33
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 37
    }
  }, __jsx("li", {
    className: _Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.item__menu__collapsed,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 41
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_12__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__["faUser"],
    className: _Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.icon__itemMenu__collapsed,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 45
    }
  }), __jsx("span", {
    className: _Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.label__item__menu,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 45
    }
  }, "Mi perfil")))), __jsx("li", {
    className: _Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.item__menu__collapsed,
    onClick: cerrarSesion,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 33
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_12__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__["faSignOutAlt"],
    className: _Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.icon__itemMenu__collapsed,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 37
    }
  }), __jsx("span", {
    className: _Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.label__item__menu,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 37
    }
  }, "Cerrar Sesi\xF3n"))) : __jsx("li", {
    className: _Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.item__menu__collapsed,
    onClick: showModalLogin,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 29
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_12__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__["faUser"],
    className: _Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.icon__itemMenu__collapsed,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 33
    }
  }), __jsx("span", {
    className: _Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.label__item__menu,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 33
    }
  }, "Ingres\xE1 ahora / Registrate")), __jsx("li", {
    className: _Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.item__menu__collapsed + ' ' + _Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.__withButton,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 29
    }
  }, __jsx("a", {
    href: "/",
    className: "boton bg-yellow",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 33
    }
  }, "Ofertas")))), __jsx("section", {
    className: _Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.collapsed_info + ' ' + "text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: _Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.redes__collapsed,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 25
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_12__["FontAwesomeIcon"], {
    icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_11__["faFacebook"],
    className: _Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.iconoRed,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 29
    }
  }), __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_12__["FontAwesomeIcon"], {
    icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_11__["faInstagram"],
    className: _Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.iconoRed,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 29
    }
  })), __jsx("span", {
    className: "text-muted",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197,
      columnNumber: 25
    }
  }, "\xA9Terminos y Condiciones")))), !modalIsOpen ? null : __jsx(_Modal_index__WEBPACK_IMPORTED_MODULE_6__["default"], {
    closeModal: closeModal,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTmF2YmFyL2luZGV4LmpzIl0sIm5hbWVzIjpbIk5hdmJhciIsInByb3BzIiwidXNlRWZmZWN0IiwidmVyaWZpY2FyU2VzaW9uIiwidXNlU3RhdGUiLCJidXNxdWVkYSIsInNldEJ1c3F1ZWRhIiwibG9naW4iLCJzZXRMb2dpbiIsImNhcnJpdG8iLCJzZXRDYXJyaXRvIiwicmVnaXN0ZXIiLCJzZXRSZWdpc3RlciIsIm1vZGFsSXNPcGVuIiwic2V0TW9kYWxJc09wZW4iLCJkcm9wZG93bk9wZW4iLCJzZXRPcGVuIiwibG9jYXRpb24iLCJ1c2VSb3V0ZXIiLCJzaG93TW9kYWxMb2dpbiIsInNob3dSZWdpc3RlciIsImNsb3NlTW9kYWwiLCJzaG93TW9kYWxDYXJyaXRvIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiTmF2YmFyU3R5bGUiLCJtZW51X19jb2xsYXBzZWQiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsInNob3dDb2xsYXBzZWQiLCJjb25zb2xlIiwibG9nIiwidG9nZ2xlTWVudSIsInRvZ2dsZSIsImhhbmRsZUNoYW5nZU1lbnUiLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlU3VibWl0QnVzY2Fkb3IiLCJwcmV2ZW50RGVmYXVsdCIsInRyaW0iLCJwYXRobmFtZSIsIlJvdXRlciIsInB1c2giLCJ3aW5kb3ciLCJhc3NpZ24iLCJyZW5kZXJDb250ZW5pZG9Nb2RhbCIsImNlcnJhclNlc2lvbiIsImxvZ291dCIsInNldFRpbWVvdXQiLCJuYXZiYXIiLCJ3cmFwcGVyX19uYXZiYXIiLCJjb250YWluZXJfX2xvZ28iLCJVUkxfQ0xPVURfU1RPUkFHRSIsImxvZ28iLCJib3Rvbl9fbWVudSIsImJ0bl9jYXJyaXRvIiwiY2Fycml0b19tb2JpbGUiLCJmYVNob3BwaW5nQ2FydCIsInR4dF9faXRlbV9tZW51IiwibG9ndWVhZG8iLCJ1c3VhcmlvIiwiZm90byIsImltZ1Byb2ZpbGUiLCJpbWdfbWVudSIsImZhQWxpZ25MZWZ0IiwiaWNvbl9tZW51IiwiYnVzY2Fkb3IiLCJmb3JtX3NlYXJjaF9tZW51IiwiY29udGFpbmVyX19sb2dpbl9tZW51IiwiYnRuX2FjY291bnQiLCJzaW5Cb3JkZXIiLCJQVUJMSUNfVVJMIiwiZmFTaWduT3V0QWx0IiwiaGVhZGVyX19jb2xsYXBzZWRfbmF2IiwiY2xvc2VfYnRuX21lbnUiLCJtYWluX19jb2xsYXBzZWQiLCJsaXN0X19tZW51X19jb2xsYXBzZWQiLCJpdGVtX19tZW51X19jb2xsYXBzZWQiLCJmYUhvbWUiLCJpY29uX19pdGVtTWVudV9fY29sbGFwc2VkIiwibGFiZWxfX2l0ZW1fX21lbnUiLCJmYVBpZ2d5QmFuayIsImZhVXNlciIsIl9fd2l0aEJ1dHRvbiIsImNvbGxhcHNlZF9pbmZvIiwicmVkZXNfX2NvbGxhcHNlZCIsImZhRmFjZWJvb2siLCJpY29ub1JlZCIsImZhSW5zdGFncmFtIiwibWFwU3RhdGVUb1Byb3BzIiwicmVkdWNlcnMiLCJ1c3VhcmlvUmVkdWNlciIsImNvbm5lY3QiLCJ1c3VhcmlvQWN0aW9ucyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBR0EsSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQ3RCQyx5REFBUyxDQUFDLFlBQU07QUFDWkQsU0FBSyxDQUFDRSxlQUFOO0FBQ0gsR0FGUSxFQUVOLEVBRk0sQ0FBVDs7QUFEc0Isa0JBS1VDLHNEQUFRLENBQUMsRUFBRCxDQUxsQjtBQUFBLE1BS2ZDLFFBTGU7QUFBQSxNQUtMQyxXQUxLOztBQUFBLG1CQU1JRixzREFBUSxDQUFDLEtBQUQsQ0FOWjtBQUFBLE1BTWZHLEtBTmU7QUFBQSxNQU1SQyxRQU5ROztBQUFBLG1C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QTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0t5QixvQkFBb0IsRUFEekIsQ0E1R1IsQ0FESjtBQW1ISCxDQTlMRDs7R0FBTTlDLE07VUFXZWtCLHFEOzs7S0FYZmxCLE07O0FBK0xOLElBQU0wRixlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUFDLFFBQVEsRUFBRTtBQUM5QixTQUFPQSxRQUFRLENBQUNDLGNBQWhCO0FBQ0gsQ0FGRDs7QUFJZUMsMkhBQU8sQ0FBQ0gsZUFBRCxFQUFpQkksMkRBQWpCLENBQVAsQ0FBd0M5RixNQUF4QyxDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuMjlmYmRmNmQxNzVmNzFlMjgyNzguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCx7dXNlU3RhdGUsdXNlRWZmZWN0fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBOYXZiYXJTdHlsZSBmcm9tICcuL05hdmJhci5tb2R1bGUuY3NzJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IFJvdXRlcix7dXNlUm91dGVyfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBNb2RhbCBmcm9tICcuLi9Nb2RhbC9pbmRleCc7XHJcbmltcG9ydCBMb2dpbiBmcm9tICcuLi9Mb2dpbic7XHJcbmltcG9ydCBSZWdpc3RlciBmcm9tICcuLi9Mb2dpbi9SZWdpc3Rlcic7XHJcbmltcG9ydCBDYXJyaXRvIGZyb20gJy4uL0NhcnJpdG8nO1xyXG5pbXBvcnQgeyBmYUhvbWUsZmFVc2VyLGZhUGlnZ3lCYW5rLGZhU2hvcHBpbmdDYXJ0LGZhQWxpZ25MZWZ0LGZhU2lnbk91dEFsdCB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnNcIjtcclxuaW1wb3J0IHtmYUZhY2Vib29rLGZhSW5zdGFncmFtfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1icmFuZHMtc3ZnLWljb25zJztcclxuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiO1xyXG5pbXBvcnQge1BVQkxJQ19VUkwsIFVSTF9DTE9VRF9TVE9SQUdFfSBmcm9tICcuLi8uLi8uLi9jb25maWcvaW5kZXgnO1xyXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0ICogYXMgdXN1YXJpb0FjdGlvbnMgZnJvbSAnLi4vLi4vLi4vc3RvcmUvYWN0aW9ucy91c3VhcmlvQWN0aW9ucyc7XHJcbmltcG9ydCB7IEJ1dHRvbkRyb3Bkb3duLCBEcm9wZG93blRvZ2dsZSwgRHJvcGRvd25NZW51LCBEcm9wZG93bkl0ZW0gfSBmcm9tICdyZWFjdHN0cmFwJztcclxuXHJcblxyXG5jb25zdCBOYXZiYXIgPSAocHJvcHMpID0+IHtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgcHJvcHMudmVyaWZpY2FyU2VzaW9uKCk7XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgY29uc3QgW2J1c3F1ZWRhLCBzZXRCdXNxdWVkYV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbbG9naW4sIHNldExvZ2luXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtjYXJyaXRvLCBzZXRDYXJyaXRvXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtyZWdpc3Rlciwgc2V0UmVnaXN0ZXJdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW21vZGFsSXNPcGVuLCBzZXRNb2RhbElzT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbZHJvcGRvd25PcGVuLCBzZXRPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IGxvY2F0aW9uID0gdXNlUm91dGVyKCk7XHJcbiAgICAvL2FjdGlvbnMgbG9naW4tcmVnaXN0ZXJcclxuICAgIGNvbnN0IHNob3dNb2RhbExvZ2luID0oKT0+e1xyXG4gICAgICAgIChyZWdpc3Rlcik/c2V0UmVnaXN0ZXIoZmFsc2UpOm51bGw7XHJcbiAgICAgICAgKGNhcnJpdG8pP3NldENhcnJpdG8oZmFsc2UpOm51bGw7XHJcbiAgICAgICAgc2V0TG9naW4odHJ1ZSk7XHJcbiAgICAgICAgc2V0TW9kYWxJc09wZW4odHJ1ZSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzaG93UmVnaXN0ZXIgPSAoKT0+e1xyXG4gICAgICAgIChsb2dpbik/c2V0TG9naW4oZmFsc2UpOmZhbHNlO1xyXG4gICAgICAgIChjYXJyaXRvKT9zZXRDYXJyaXRvKGZhbHNlKTpudWxsO1xyXG4gICAgICAgIHNldFJlZ2lzdGVyKHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNsb3NlTW9kYWw9KCk9PihcclxuICAgICAgICBzZXRNb2RhbElzT3BlbihmYWxzZSlcclxuICAgIClcclxuICAgIFxyXG4gICAgXHJcbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vL1xyXG5cclxuXHJcbiAgICAvL2FjdGlvbnMgY2Fycml0b1xyXG4gICAgY29uc3Qgc2hvd01vZGFsQ2Fycml0byA9ICgpPT57XHJcbiAgICAgICAgKGxvZ2luKT9zZXRMb2dpbihmYWxzZSk6bnVsbDtcclxuICAgICAgICAocmVnaXN0ZXIpP3NldFJlZ2lzdGVyKGZhbHNlKTpudWxsO1xyXG4gICAgICAgIC8vc2kgZWwgbWVudSBlc3RhIGFiaWVydG8sIGxvIGNpZXJyby5cclxuICAgICAgICBpZihkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKE5hdmJhclN0eWxlLm1lbnVfX2NvbGxhcHNlZClbMF0uY2xhc3NMaXN0LmNvbnRhaW5zKE5hdmJhclN0eWxlLnNob3dDb2xsYXBzZWQpKXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2VzdGEgYWJpZXJ0bycpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRDYXJyaXRvKHRydWUpO1xyXG4gICAgICAgIHNldE1vZGFsSXNPcGVuKHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHRvZ2dsZU1lbnUgPSAoKT0+e1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoTmF2YmFyU3R5bGUubWVudV9fY29sbGFwc2VkKVswXS5jbGFzc0xpc3QudG9nZ2xlKE5hdmJhclN0eWxlLnNob3dDb2xsYXBzZWQpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZU1lbnUgPSBldmVudD0+e1xyXG4gICAgICAgIHNldEJ1c3F1ZWRhKGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlU3VibWl0QnVzY2Fkb3IgPSBldmVudD0+e1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgaWYoYnVzcXVlZGEudHJpbSgpID09PSAnJylyZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgaWYobG9jYXRpb24ucGF0aG5hbWUgPT0gJy8nKXtcclxuICAgICAgICAgICAgcmV0dXJuIFJvdXRlci5wdXNoKGAvcHJvZHVjdG9zP3NlYXJjaD0ke2J1c3F1ZWRhfWApO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gd2luZG93LmxvY2F0aW9uLmFzc2lnbihgL3Byb2R1Y3Rvcz9zZWFyY2g9JHtidXNxdWVkYX1gKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCByZW5kZXJDb250ZW5pZG9Nb2RhbCA9ICgpPT57XHJcbiAgICAgICAgaWYobG9naW4pIHJldHVybiA8TG9naW4gc2hvd1JlZ2lzdGVyPXtzaG93UmVnaXN0ZXJ9Lz47XHJcbiAgICAgICAgaWYocmVnaXN0ZXIpIHJldHVybiA8UmVnaXN0ZXIgc2hvd0xvZ2luPXtzaG93TW9kYWxMb2dpbn0vPjtcclxuICAgICAgICBpZihjYXJyaXRvKSByZXR1cm4gPENhcnJpdG8vPlxyXG4gICAgfVxyXG4gICAgY29uc3QgY2VycmFyU2VzaW9uID0gYXN5bmMoKT0+e1xyXG4gICAgICAgIGF3YWl0IHByb3BzLmxvZ291dCgpO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gc2hvd01vZGFsTG9naW4oKTtcclxuICAgICAgICB9LCA4MDApO1xyXG4gICAgfVxyXG4gICAgY29uc3QgdG9nZ2xlID0gKCkgPT4gc2V0T3BlbighZHJvcGRvd25PcGVuKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e05hdmJhclN0eWxlLm5hdmJhciArICcgJyArIGBzdGlja3ktdG9wYH0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17TmF2YmFyU3R5bGUud3JhcHBlcl9fbmF2YmFyICArICcgJyArICBgY29udGFpbmVyYH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJyb3cgbWwtMCB3LTEwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17TmF2YmFyU3R5bGUuY29udGFpbmVyX19sb2dvfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtgJHtVUkxfQ0xPVURfU1RPUkFHRX0vc3RhdGljL1BlcnJvLnBuZ2B9IGNsYXNzTmFtZT17TmF2YmFyU3R5bGUubG9nbyArICcgJyArIGBpbWctZmx1aWRgfSBhbHQ9XCJPbGl2ZXIgcGV0IHNob3BcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtOYXZiYXJTdHlsZS5ib3Rvbl9fbWVudSArICcgJyArIE5hdmJhclN0eWxlLmJ0bl9jYXJyaXRvICsgJyAnICsgTmF2YmFyU3R5bGUuY2Fycml0b19tb2JpbGV9IG9uQ2xpY2s9e3Nob3dNb2RhbENhcnJpdG99PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVNob3BwaW5nQ2FydH0gY2xhc3NOYW1lPXtOYXZiYXJTdHlsZS50eHRfX2l0ZW1fbWVudX0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsocHJvcHMubG9ndWVhZG8pP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXsocHJvcHMudXN1YXJpby5mb3RvICE9ICdudWxsJyk/cHJvcHMudXN1YXJpby5mb3RvOmBodHRwczovL3N0b3JhZ2UuZ29vZ2xlYXBpcy5jb20vd2ViLW9saXZlci91c2VyLWRlZmF1bHQucG5nYH0gY2xhc3NOYW1lPXtOYXZiYXJTdHlsZS5pbWdQcm9maWxlICsgJyAnICsgTmF2YmFyU3R5bGUuaW1nX21lbnV9IG9uQ2xpY2s9e3RvZ2dsZU1lbnV9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgOjxGb250QXdlc29tZUljb24gIG9uQ2xpY2s9e3RvZ2dsZU1lbnV9IGljb249e2ZhQWxpZ25MZWZ0fSBjbGFzc05hbWU9e05hdmJhclN0eWxlLmljb25fbWVudX0vPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPXtOYXZiYXJTdHlsZS5idXNjYWRvciArICcgJyArIGBjb2wtc20tNCBjb2wteGwtNyBjb2wtbWQtNyBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIGlucHV0LWdyb3VwYH0gYXV0b0NvbXBsZXRlPVwib2ZmXCIgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdEJ1c2NhZG9yfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHJlcXVpcmVkIGNsYXNzTmFtZT17TmF2YmFyU3R5bGUuZm9ybV9zZWFyY2hfbWVudSArICcgJyArIGBmb3JtLWNvbnRyb2xgfSBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlTWVudX0gcGxhY2Vob2xkZXI9XCLCv1F1w6kgYW5kYXMgYnVzY2FuZG8/XCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtOYXZiYXJTdHlsZS5jb250YWluZXJfX2xvZ2luX21lbnUgKyAnICcgKyBgY29sLXNtLTcgY29sLXhsLTQgY29sLW1kLTQgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtZW5kYH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7KHByb3BzLmxvZ3VlYWRvKT9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uRHJvcGRvd24gaXNPcGVuPXtkcm9wZG93bk9wZW59IHRvZ2dsZT17dG9nZ2xlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duVG9nZ2xlIGNhcmV0IHNpemU9XCJzbVwiIGNsYXNzTmFtZT17TmF2YmFyU3R5bGUuYm90b25fX21lbnUgKyAnICcgKyBOYXZiYXJTdHlsZS5idG5fYWNjb3VudCArICcgJyArIE5hdmJhclN0eWxlLnNpbkJvcmRlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17KHByb3BzLnVzdWFyaW8uZm90byAhPSAnbnVsbCcpP3Byb3BzLnVzdWFyaW8uZm90bzpgaHR0cHM6Ly9zdG9yYWdlLmdvb2dsZWFwaXMuY29tL3dlYi1vbGl2ZXIvdXNlci1kZWZhdWx0LnBuZ2B9IGNsYXNzTmFtZT17TmF2YmFyU3R5bGUuaW1nUHJvZmlsZX0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duVG9nZ2xlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd25NZW51PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YCR7UFVCTElDX1VSTH0vcGVyZmlsYH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNaSBwZXJmaWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Ecm9wZG93bkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duSXRlbSBkaXZpZGVyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd25JdGVtIG9uQ2xpY2s9e2NlcnJhclNlc2lvbn0+PEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVNpZ25PdXRBbHR9IGNsYXNzTmFtZT17TmF2YmFyU3R5bGUudHh0X19pdGVtX21lbnV9Lz4gQ2VycmFyIHNlc2nDs248L0Ryb3Bkb3duSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Ecm9wZG93bk1lbnU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b25Ecm9wZG93bj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBvbkNsaWNrPXtzaG93TW9kYWxMb2dpbn0gY2xhc3NOYW1lPXtOYXZiYXJTdHlsZS5ib3Rvbl9fbWVudSArICcgJyArIE5hdmJhclN0eWxlLmJ0bl9hY2NvdW50fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtOYXZiYXJTdHlsZS50eHRfX2l0ZW1fbWVudX0+SW5ncmVzw6EgYWhvcmEgLyBSZWdpc3RyYXRlPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17TmF2YmFyU3R5bGUuYm90b25fX21lbnUgKyAnICcgKyBOYXZiYXJTdHlsZS5idG5fY2Fycml0b30gb25DbGljaz17c2hvd01vZGFsQ2Fycml0b30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVNob3BwaW5nQ2FydH0gY2xhc3NOYW1lPXtOYXZiYXJTdHlsZS50eHRfX2l0ZW1fbWVudX0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L25hdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e05hdmJhclN0eWxlLm1lbnVfX2NvbGxhcHNlZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtOYXZiYXJTdHlsZS5oZWFkZXJfX2NvbGxhcHNlZF9uYXZ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YCR7VVJMX0NMT1VEX1NUT1JBR0V9L3N0YXRpYy9QZXJyby5wbmdgfSBjbGFzc05hbWU9e05hdmJhclN0eWxlLmxvZ299IGFsdD1cIk9saXZlciBwZXQgc2hvcFwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgb25DbGljaz17dG9nZ2xlTWVudX0gY2xhc3NOYW1lPXtOYXZiYXJTdHlsZS5jbG9zZV9idG5fbWVudSArICcgJyArIGBmYXMgZmEtdGltZXNgfT48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtOYXZiYXJTdHlsZS5tYWluX19jb2xsYXBzZWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPXtOYXZiYXJTdHlsZS5saXN0X19tZW51X19jb2xsYXBzZWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIiBvbkNsaWNrPXt0b2dnbGVNZW51fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17TmF2YmFyU3R5bGUuaXRlbV9fbWVudV9fY29sbGFwc2VkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFIb21lfSBjbGFzc05hbWU9e05hdmJhclN0eWxlLmljb25fX2l0ZW1NZW51X19jb2xsYXBzZWR9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17TmF2YmFyU3R5bGUubGFiZWxfX2l0ZW1fX21lbnV9PkluaWNpbzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiIG9uQ2xpY2s9e3RvZ2dsZU1lbnV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtOYXZiYXJTdHlsZS5pdGVtX19tZW51X19jb2xsYXBzZWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVBpZ2d5QmFua30gY2xhc3NOYW1lPXtOYXZiYXJTdHlsZS5pY29uX19pdGVtTWVudV9fY29sbGFwc2VkfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e05hdmJhclN0eWxlLmxhYmVsX19pdGVtX19tZW51fT5Qcm9kdWN0b3M8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyhwcm9wcy5sb2d1ZWFkbyk/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2Ake1BVQkxJQ19VUkx9L3BlcmZpbGB9IG9uQ2xpY2s9e3RvZ2dsZU1lbnV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e05hdmJhclN0eWxlLml0ZW1fX21lbnVfX2NvbGxhcHNlZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVVzZXJ9IGNsYXNzTmFtZT17TmF2YmFyU3R5bGUuaWNvbl9faXRlbU1lbnVfX2NvbGxhcHNlZH0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17TmF2YmFyU3R5bGUubGFiZWxfX2l0ZW1fX21lbnV9Pk1pIHBlcmZpbDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17TmF2YmFyU3R5bGUuaXRlbV9fbWVudV9fY29sbGFwc2VkfSBvbkNsaWNrPXtjZXJyYXJTZXNpb259PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhU2lnbk91dEFsdH0gY2xhc3NOYW1lPXtOYXZiYXJTdHlsZS5pY29uX19pdGVtTWVudV9fY29sbGFwc2VkfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17TmF2YmFyU3R5bGUubGFiZWxfX2l0ZW1fX21lbnV9PkNlcnJhciBTZXNpw7NuPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e05hdmJhclN0eWxlLml0ZW1fX21lbnVfX2NvbGxhcHNlZH0gb25DbGljaz17c2hvd01vZGFsTG9naW59PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFVc2VyfSBjbGFzc05hbWU9e05hdmJhclN0eWxlLmljb25fX2l0ZW1NZW51X19jb2xsYXBzZWR9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e05hdmJhclN0eWxlLmxhYmVsX19pdGVtX19tZW51fT5JbmdyZXPDoSBhaG9yYSAvIFJlZ2lzdHJhdGU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17TmF2YmFyU3R5bGUuaXRlbV9fbWVudV9fY29sbGFwc2VkICsgJyAnICsgTmF2YmFyU3R5bGUuX193aXRoQnV0dG9ufT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiL1wiIGNsYXNzTmFtZT1cImJvdG9uIGJnLXllbGxvd1wiPk9mZXJ0YXM8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17TmF2YmFyU3R5bGUuY29sbGFwc2VkX2luZm8gKyAnICcgKyBgdGV4dC1jZW50ZXJgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e05hdmJhclN0eWxlLnJlZGVzX19jb2xsYXBzZWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUZhY2Vib29rfSBjbGFzc05hbWU9e05hdmJhclN0eWxlLmljb25vUmVkfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhSW5zdGFncmFtfSBjbGFzc05hbWU9e05hdmJhclN0eWxlLmljb25vUmVkfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkXCI+JmNvcHk7VGVybWlub3MgeSBDb25kaWNpb25lczwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+ICBcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgeyghbW9kYWxJc09wZW4pP251bGw6XHJcbiAgICAgICAgICAgICAgICA8TW9kYWwgY2xvc2VNb2RhbD17Y2xvc2VNb2RhbH0+XHJcbiAgICAgICAgICAgICAgICAgICAge3JlbmRlckNvbnRlbmlkb01vZGFsKCl9XHJcbiAgICAgICAgICAgICAgICA8L01vZGFsPlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59XHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHJlZHVjZXJzPT57XHJcbiAgICByZXR1cm4gcmVkdWNlcnMudXN1YXJpb1JlZHVjZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLHVzdWFyaW9BY3Rpb25zKShOYXZiYXIpOyJdLCJzb3VyY2VSb290IjoiIn0=