module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/Q2I":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("faye");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Modal_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("qOq0");
/* harmony import */ var _Modal_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Modal_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("No/t");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("uhWA");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const Modal = props => {
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    document.getElementById('body__modal_buscador').classList.add(_Modal_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.show);
    document.getElementsByTagName('body')[0].style.overflowY = 'hidden';
  }, []);

  const closeModal = () => {
    document.getElementById('body__modal_buscador').classList.remove('show');
    setTimeout(() => {
      document.getElementsByTagName('body')[0].style.overflowY = 'scroll';
      return props.closeModal();
    }, 500);
  };

  if (!document.querySelector('#modals')) {
    const rootContainer = document.createElement('div');
    rootContainer.setAttribute('id', 'modals');
    const parentElem = document.querySelector('#__next');
    parentElem.appendChild(rootContainer);
  }

  return /*#__PURE__*/react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.createPortal(__jsx("div", {
    className: _Modal_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.Modal
  }, __jsx("div", {
    className: _Modal_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.modal_dialog,
    id: "body__modal_buscador"
  }, __jsx("div", {
    className: _Modal_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.modal_content
  }, props.children, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faTimes"],
    onClick: closeModal,
    className: _Modal_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.close_modal,
    style: {
      cursor: 'pointer'
    }
  })))), document.getElementById('modals'));
};

/* harmony default export */ __webpack_exports__["a"] = (Modal);

/***/ }),

/***/ "/jkW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("1TCz");


/***/ }),

/***/ "0Bsm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router = __webpack_require__("nOHt");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (false) {}

  return WithRouterWrapper;
}

/***/ }),

/***/ "0JKX":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"navbar": "Navbar_navbar__1cna4",
	"container__logo": "Navbar_container__logo__HySyy",
	"logo": "Navbar_logo__3vj75",
	"container__login_menu": "Navbar_container__login_menu__2vQdj",
	"boton__menu": "Navbar_boton__menu__3c6F3",
	"btn_account": "Navbar_btn_account__2Zaoz",
	"btn_carrito": "Navbar_btn_carrito__2mZY8",
	"carrito_mobile": "Navbar_carrito_mobile__2IYef",
	"icon_menu": "Navbar_icon_menu__2CorA",
	"menu__collapsed": "Navbar_menu__collapsed__3ww75",
	"form_search_menu": "Navbar_form_search_menu__1b8gM",
	"wrapper__navbar": "Navbar_wrapper__navbar__14EZG",
	"lupa_buscador": "Navbar_lupa_buscador__3_vvJ",
	"input-group-text": "Navbar_input-group-text__2_pHE",
	"buscador": "Navbar_buscador__3L3ob",
	"header__collapsed_nav": "Navbar_header__collapsed_nav__3rPMs",
	"close_btn_menu": "Navbar_close_btn_menu__3jnG0",
	"main__collapsed": "Navbar_main__collapsed__3kXMF",
	"list__menu__collapsed": "Navbar_list__menu__collapsed__3BK5O",
	"icon__itemMenu__collapsed": "Navbar_icon__itemMenu__collapsed__1Zemk",
	"item__menu__collapsed": "Navbar_item__menu__collapsed__3BZ2r",
	"label__item__menu": "Navbar_label__item__menu__3zFoO",
	"collapsed_info": "Navbar_collapsed_info__3Zugh",
	"redes__collapsed": "Navbar_redes__collapsed__1JfQC",
	"iconoRed": "Navbar_iconoRed__3PYtV",
	"showCollapsed": "Navbar_showCollapsed__2N6Tr"
};


/***/ }),

/***/ "1TCz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./styles/globals.css
var globals = __webpack_require__("zPlV");

// EXTERNAL MODULE: ./node_modules/bootstrap/dist/css/bootstrap.min.css
var bootstrap_min = __webpack_require__("q4sD");

// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__("HJQg");
var style_default = /*#__PURE__*/__webpack_require__.n(style_);

// EXTERNAL MODULE: ./src/components/Navbar/Navbar.module.css
var Navbar_module = __webpack_require__("0JKX");
var Navbar_module_default = /*#__PURE__*/__webpack_require__.n(Navbar_module);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");
var router_default = /*#__PURE__*/__webpack_require__.n(router_);

// EXTERNAL MODULE: ./src/components/Modal/index.js
var Modal = __webpack_require__("/Q2I");

// CONCATENATED MODULE: ./src/components/Error.js
var __jsx = external_react_default.a.createElement;


const Error = ({
  message
}) => {
  return __jsx("div", {
    className: "alert alert-warning text-center"
  }, message);
};

/* harmony default export */ var components_Error = (Error);
// EXTERNAL MODULE: ./src/components/Login/Login.module.css
var Login_module = __webpack_require__("yym0");
var Login_module_default = /*#__PURE__*/__webpack_require__.n(Login_module);

// CONCATENATED MODULE: ./src/components/Login/index.js
var Login_jsx = external_react_default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const Login = props => {
  const {
    0: formLoginValues,
    1: setFormLoginValues
  } = Object(external_react_["useState"])({
    email: '',
    password: ''
  });
  const {
    0: error,
    1: setError
  } = Object(external_react_["useState"])(false);

  const handleChangeLogin = event => {
    setFormLoginValues(_objectSpread(_objectSpread({}, formLoginValues), {}, {
      [event.target.name]: event.target.value
    }));
  };

  const handleSubmitLogin = event => {
    event.preventDefault();

    if (formLoginValues.email.trim() === '' || formLoginValues.password.trim() === '') {
      setError('Es necesario completar todos los campos');
      return false;
    }

    setError(false);
    return true;
  };

  const habilitarRegister = () => {
    props.showRegister();
  };

  return Login_jsx("div", {
    className: Login_module_default.a.login__container
  }, Login_jsx("h6", {
    className: Login_module_default.a.title__login + ' ' + `text-center`
  }, "Ingres\xE1 a tu cuenta"), error ? Login_jsx(components_Error, {
    message: error
  }) : null, Login_jsx("form", {
    className: Login_module_default.a.form + ' ' + `form-group`,
    name: "form-login",
    id: "form-login",
    onSubmit: handleSubmitLogin
  }, Login_jsx("label", {
    className: Login_module_default.a.label,
    htmlFor: "email"
  }, "Email"), Login_jsx("input", {
    type: "email",
    className: Login_module_default.a.input + ' ' + `form-control`,
    id: "email",
    name: "email",
    value: formLoginValues.email,
    onChange: handleChangeLogin
  }), Login_jsx("label", {
    className: Login_module_default.a.label,
    htmlFor: "password"
  }, "Contrase\xF1a"), Login_jsx("input", {
    type: "password",
    className: Login_module_default.a.input + ' ' + `form-control`,
    id: "password",
    name: "password",
    value: formLoginValues.password,
    onChange: handleChangeLogin
  }), Login_jsx("br", null), Login_jsx("input", {
    type: "submit",
    className: "boton bg-yellow mb-1",
    value: "Ingresar"
  }), Login_jsx("a", {
    href: "/",
    className: Login_module_default.a.forgot__pass + ' ' + `text-center d-block`
  }, "Olvid\xE9 mi constrase\xF1a")), Login_jsx("section", {
    className: Login_module_default.a.registerInLogin + ' ' + `text-center`
  }, Login_jsx("span", {
    className: "text-muted"
  }, "\xBFNo tenes cuenta?", Login_jsx("span", {
    className: Login_module_default.a.registerLink,
    onClick: habilitarRegister
  }, " Registrate"))));
};

/* harmony default export */ var components_Login = (Login);
// CONCATENATED MODULE: ./src/components/Login/Register.js
var Register_jsx = external_react_default.a.createElement;

function Register_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function Register_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Register_ownKeys(Object(source), true).forEach(function (key) { Register_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Register_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Register_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const Register = props => {
  const {
    0: formRegisterValues,
    1: setFormRegisterValues
  } = Object(external_react_["useState"])({
    nombre: '',
    telefono: '',
    ubicacion: '',
    email: '',
    password: ''
  });
  const {
    0: error,
    1: setError
  } = Object(external_react_["useState"])(false);

  const handleChangeLogin = event => {
    setFormRegisterValues(Register_objectSpread(Register_objectSpread({}, formRegisterValues), {}, {
      [event.target.name]: event.target.value
    }));
  };

  const handleSubmitLogin = event => {
    event.preventDefault();

    if (formRegisterValues.nombre.trim() === '' || formRegisterValues.telefono.trim() === '' || formRegisterValues.ubicacion.trim() === '' || formRegisterValues.email.trim() === '' || formRegisterValues.password.trim() === '') {
      setError('Es necesario completar todos los campos');
      return false;
    }

    setError(false);
    return true;
  };

  const habilitarLogin = () => {
    props.showLogin();
  };

  return Register_jsx("div", {
    className: Login_module_default.a.login__container
  }, Register_jsx("h6", {
    className: Login_module_default.a.title__login + ' ' + `text-center`
  }, "Registrate"), error ? Register_jsx(components_Error, {
    message: error
  }) : null, Register_jsx("form", {
    className: Login_module_default.a.form + ' ' + `form-group`,
    name: "form-login",
    id: "form-login",
    onSubmit: handleSubmitLogin
  }, Register_jsx("label", {
    className: Login_module_default.a.label,
    htmlFor: "nombre"
  }, "Nombre"), Register_jsx("input", {
    type: "text",
    className: Login_module_default.a.input + ' ' + `form-control`,
    id: "nombre",
    name: "nombre",
    value: formRegisterValues.nombre,
    onChange: handleChangeLogin
  }), Register_jsx("label", {
    className: Login_module_default.a.label,
    htmlFor: "telefono"
  }, "Telefono"), Register_jsx("input", {
    type: "number",
    className: Login_module_default.a.input + ' ' + `form-control`,
    id: "telefono",
    name: "telefono",
    value: formRegisterValues.telefono,
    onChange: handleChangeLogin
  }), Register_jsx("label", {
    className: Login_module_default.a.label,
    htmlFor: "ubicacion"
  }, "Ubicaci\xF3n"), Register_jsx("input", {
    type: "text",
    className: Login_module_default.a.input + ' ' + `form-control`,
    id: "ubicacion",
    name: "ubicacion",
    value: formRegisterValues.ubicacion,
    onChange: handleChangeLogin
  }), Register_jsx("label", {
    className: Login_module_default.a.label,
    htmlFor: "emal"
  }, "Email"), Register_jsx("input", {
    type: "email",
    className: Login_module_default.a.input + ' ' + `form-control`,
    id: "email",
    name: "email",
    value: formRegisterValues.email,
    onChange: handleChangeLogin
  }), Register_jsx("label", {
    className: Login_module_default.a.label,
    htmlFor: "password"
  }, "Contrase\xF1a"), Register_jsx("input", {
    type: "password",
    className: Login_module_default.a.input + ' ' + `form-control`,
    id: "password",
    name: "password",
    value: formRegisterValues.password,
    onChange: handleChangeLogin
  }), Register_jsx("br", null), Register_jsx("input", {
    type: "submit",
    className: "boton bg-yellow mb-1",
    value: "Registrarme"
  })), Register_jsx("section", {
    className: Login_module_default.a.registerInLogin + ' ' + `text-center`
  }, Register_jsx("span", {
    className: "text-muted"
  }, "\xBFYa tenes cuenta?", Register_jsx("span", {
    className: Login_module_default.a.registerLink,
    onClick: habilitarLogin
  }, " Ingres\xE1"))));
};

/* harmony default export */ var Login_Register = (Register);
// EXTERNAL MODULE: ./src/components/Carrito/index.js + 1 modules
var Carrito = __webpack_require__("qC+Y");

// EXTERNAL MODULE: external "@fortawesome/free-solid-svg-icons"
var free_solid_svg_icons_ = __webpack_require__("No/t");

// EXTERNAL MODULE: external "@fortawesome/free-brands-svg-icons"
var free_brands_svg_icons_ = __webpack_require__("JVe5");

// EXTERNAL MODULE: external "@fortawesome/react-fontawesome"
var react_fontawesome_ = __webpack_require__("uhWA");

// EXTERNAL MODULE: ./config/index.js
var config = __webpack_require__("rOcY");

// CONCATENATED MODULE: ./src/components/Navbar/index.js
var Navbar_jsx = external_react_default.a.createElement;













const Navbar = () => {
  const {
    0: busqueda,
    1: setBusqueda
  } = Object(external_react_["useState"])('');
  const {
    0: login,
    1: setLogin
  } = Object(external_react_["useState"])(false);
  const {
    0: carrito,
    1: setCarrito
  } = Object(external_react_["useState"])(false);
  const {
    0: register,
    1: setRegister
  } = Object(external_react_["useState"])(false);
  const {
    0: modalIsOpen,
    1: setModalIsOpen
  } = Object(external_react_["useState"])(false); //actions login-register

  const showModalLogin = () => {
    register ? setRegister(false) : null;
    carrito ? setCarrito(false) : null;
    setLogin(true);
    setModalIsOpen(true);
  };

  const showRegister = () => {
    login ? setLogin(false) : false;
    carrito ? setCarrito(false) : null;
    setRegister(true);
  };

  const closeModal = () => setModalIsOpen(false); //-------------------------------------------------//
  //actions carrito


  const showModalCarrito = () => {
    login ? setLogin(false) : null;
    register ? setRegister(false) : null;
    setCarrito(true);
    setModalIsOpen(true);
  };

  const toggleMenu = () => {
    document.getElementsByClassName(Navbar_module_default.a.menu__collapsed)[0].classList.toggle(Navbar_module_default.a.showCollapsed);
  };

  const handleChangeMenu = event => {
    setBusqueda(event.target.value);
  };

  const handleSubmitBuscador = event => {
    event.preventDefault();
    if (busqueda.trim() === '') return false;
    return router_default.a.push(`/productos?search=${busqueda}`);
  };

  const renderContenidoModal = () => {
    if (login) return Navbar_jsx(components_Login, {
      showRegister: showRegister
    });
    if (register) return Navbar_jsx(Login_Register, {
      showLogin: showModalLogin
    });
    if (carrito) return Navbar_jsx(Carrito["a" /* default */], null);
  };

  return Navbar_jsx(external_react_default.a.Fragment, null, Navbar_jsx("div", {
    className: Navbar_module_default.a.navbar + ' ' + `sticky-top`
  }, Navbar_jsx("div", {
    className: Navbar_module_default.a.wrapper__navbar + ' ' + `container`
  }, Navbar_jsx("nav", {
    className: "row ml-0 w-100"
  }, Navbar_jsx("div", {
    className: Navbar_module_default.a.container__logo
  }, Navbar_jsx(link_default.a, {
    href: "/"
  }, Navbar_jsx("a", null, Navbar_jsx("img", {
    src: `${config["c" /* URL_CLOUD_STORAGE */]}/Perro.png`,
    className: Navbar_module_default.a.logo + ' ' + `img-fluid`,
    alt: "Oliver pet shop"
  })))), Navbar_jsx("span", {
    className: Navbar_module_default.a.boton__menu + ' ' + Navbar_module_default.a.btn_carrito + ' ' + Navbar_module_default.a.carrito_mobile,
    onClick: showModalCarrito
  }, Navbar_jsx(react_fontawesome_["FontAwesomeIcon"], {
    icon: free_solid_svg_icons_["faShoppingCart"],
    className: Navbar_module_default.a.txt__item_menu
  })), Navbar_jsx(react_fontawesome_["FontAwesomeIcon"], {
    onClick: toggleMenu,
    icon: free_solid_svg_icons_["faAlignLeft"],
    className: Navbar_module_default.a.icon_menu
  }), Navbar_jsx("form", {
    className: Navbar_module_default.a.buscador + ' ' + `col-sm-4 col-xl-7 col-md-7 d-flex align-items-center input-group`,
    autoComplete: "off",
    onSubmit: handleSubmitBuscador
  }, Navbar_jsx("input", {
    type: "text",
    required: true,
    className: Navbar_module_default.a.form_search_menu + ' ' + `form-control`,
    onChange: handleChangeMenu,
    placeholder: "\xBFQu\xE9 andas buscando?"
  })), Navbar_jsx("div", {
    className: Navbar_module_default.a.container__login_menu + ' ' + `col-sm-7 col-xl-4 col-md-4 d-flex align-items-center justify-content-end`
  }, Navbar_jsx("span", {
    onClick: showModalLogin,
    className: Navbar_module_default.a.boton__menu + ' ' + Navbar_module_default.a.btn_account
  }, Navbar_jsx("span", {
    className: Navbar_module_default.a.txt__item_menu
  }, "Ingres\xE1 ahora / Registrate")), Navbar_jsx("span", {
    className: Navbar_module_default.a.boton__menu + ' ' + Navbar_module_default.a.btn_carrito,
    onClick: showModalCarrito
  }, Navbar_jsx(react_fontawesome_["FontAwesomeIcon"], {
    icon: free_solid_svg_icons_["faShoppingCart"],
    className: Navbar_module_default.a.txt__item_menu
  }))))), Navbar_jsx("div", {
    className: Navbar_module_default.a.menu__collapsed
  }, Navbar_jsx("section", {
    className: Navbar_module_default.a.header__collapsed_nav
  }, Navbar_jsx("img", {
    src: `${config["c" /* URL_CLOUD_STORAGE */]}/Perro.png`,
    className: Navbar_module_default.a.logo,
    alt: "Oliver pet shop"
  }), Navbar_jsx("i", {
    onClick: toggleMenu,
    className: Navbar_module_default.a.close_btn_menu + ' ' + `fas fa-times`
  })), Navbar_jsx("div", {
    className: Navbar_module_default.a.main__collapsed
  }, Navbar_jsx("ul", {
    className: Navbar_module_default.a.list__menu__collapsed
  }, Navbar_jsx(link_default.a, {
    href: "/",
    onClick: toggleMenu
  }, Navbar_jsx("a", null, Navbar_jsx("li", {
    className: Navbar_module_default.a.item__menu__collapsed
  }, Navbar_jsx(react_fontawesome_["FontAwesomeIcon"], {
    icon: free_solid_svg_icons_["faHome"],
    className: Navbar_module_default.a.icon__itemMenu__collapsed
  }), Navbar_jsx("span", {
    className: Navbar_module_default.a.label__item__menu
  }, "Inicio")))), Navbar_jsx("li", {
    className: Navbar_module_default.a.item__menu__collapsed,
    onClick: showModalLogin
  }, Navbar_jsx(react_fontawesome_["FontAwesomeIcon"], {
    icon: free_solid_svg_icons_["faUser"],
    className: Navbar_module_default.a.icon__itemMenu__collapsed
  }), Navbar_jsx("span", {
    className: Navbar_module_default.a.label__item__menu
  }, "Ingres\xE1 ahora / Registrate")), Navbar_jsx(link_default.a, {
    href: "/",
    onClick: toggleMenu
  }, Navbar_jsx("a", null, Navbar_jsx("li", {
    className: Navbar_module_default.a.item__menu__collapsed
  }, Navbar_jsx(react_fontawesome_["FontAwesomeIcon"], {
    icon: free_solid_svg_icons_["faPiggyBank"],
    className: Navbar_module_default.a.icon__itemMenu__collapsed
  }), Navbar_jsx("span", {
    className: Navbar_module_default.a.label__item__menu
  }, "Productos")))), Navbar_jsx("li", {
    className: Navbar_module_default.a.item__menu__collapsed + ' ' + Navbar_module_default.a.__withButton
  }, Navbar_jsx("a", {
    href: "/",
    className: "boton bg-yellow"
  }, "Ofertas")))), Navbar_jsx("section", {
    className: Navbar_module_default.a.collapsed_info + ' ' + `text-center`
  }, Navbar_jsx("div", {
    className: Navbar_module_default.a.redes__collapsed
  }, Navbar_jsx(react_fontawesome_["FontAwesomeIcon"], {
    icon: free_brands_svg_icons_["faFacebook"],
    className: Navbar_module_default.a.iconoRed
  }), Navbar_jsx(react_fontawesome_["FontAwesomeIcon"], {
    icon: free_brands_svg_icons_["faInstagram"],
    className: Navbar_module_default.a.iconoRed
  })), Navbar_jsx("span", {
    className: "text-muted"
  }, "\xA9Terminos y Condiciones")))), !modalIsOpen ? null : Navbar_jsx(Modal["a" /* default */], {
    closeModal: closeModal
  }, renderContenidoModal()));
};

/* harmony default export */ var components_Navbar = (Navbar);
// EXTERNAL MODULE: external "nprogress"
var external_nprogress_ = __webpack_require__("GvLQ");
var external_nprogress_default = /*#__PURE__*/__webpack_require__.n(external_nprogress_);

// CONCATENATED MODULE: ./src/components/Layout.js

var Layout_jsx = external_react_default.a.createElement;




router_default.a.events.on('routeChangeStart', () => external_nprogress_default.a.start());
router_default.a.events.on('routeChangeComplete', () => external_nprogress_default.a.done());
router_default.a.events.on('routeChangeError', () => external_nprogress_default.a.done());

const Layout = props => {
  return Layout_jsx(external_react_default.a.Fragment, null, Layout_jsx(components_Navbar, null), props.children, Layout_jsx(style_default.a, {
    id: "413395772"
  }, ["body{margin:0px;font-family:system-ui;background:white;}", "#nprogress{pointer-events:none;}", "#nprogress .bar{background:#29d;position:fixed;z-index:1031;top:0;left:0;width:100%;height:2px;}", "#nprogress .peg{display:block;position:absolute;right:0px;width:100px;height:100%;box-shadow:0 0 10px #29d,0 0 5px #29d;opacity:1.0;-webkit-transform:rotate(3deg) translate(0px,-4px);-ms-transform:rotate(3deg) translate(0px,-4px);-webkit-transform:rotate(3deg) translate(0px,-4px);-ms-transform:rotate(3deg) translate(0px,-4px);transform:rotate(3deg) translate(0px,-4px);}", "#nprogress .spinner{display:block;position:fixed;z-index:1031;top:15px;right:15px;}", "#nprogress .spinner-icon{width:18px;height:18px;box-sizing:border-box;border:solid 2px transparent;border-top-color:#29d;border-left-color:#29d;border-radius:50%;-webkit-animation:nprogress-spinner 400ms linear infinite;-webkit-animation:nprogress-spinner 400ms linear infinite;animation:nprogress-spinner 400ms linear infinite;}", ".nprogress-custom-parent{overflow:hidden;position:relative;}", ".nprogress-custom-parent #nprogress .spinner,.nprogress-custom-parent #nprogress .bar{position:absolute;}", "@-webkit-keyframes nprogress-spinner{0%{-webkit-transform:rotate(0deg);}100%{-webkit-transform:rotate(360deg);}}", "@-webkit-keyframes nprogress-spinner{0%{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}100%{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}", "@keyframes nprogress-spinner{0%{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}100%{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}"]));
};

/* harmony default export */ var components_Layout = (Layout);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: external "next-redux-wrapper"
var external_next_redux_wrapper_ = __webpack_require__("JMOJ");

// EXTERNAL MODULE: external "redux"
var external_redux_ = __webpack_require__("rKB8");

// EXTERNAL MODULE: external "redux-thunk"
var external_redux_thunk_ = __webpack_require__("ZSx1");
var external_redux_thunk_default = /*#__PURE__*/__webpack_require__.n(external_redux_thunk_);

// EXTERNAL MODULE: external "redux-devtools-extension"
var external_redux_devtools_extension_ = __webpack_require__("ufKq");

// EXTERNAL MODULE: ./store/types/marcasTypes.js
var marcasTypes = __webpack_require__("HKBJ");

// CONCATENATED MODULE: ./store/reducers/marcasReducer.js
function marcasReducer_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function marcasReducer_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { marcasReducer_ownKeys(Object(source), true).forEach(function (key) { marcasReducer_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { marcasReducer_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function marcasReducer_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const INITIAL_STATE = {
  marcas: [],
  loading: false,
  error: null
};

const marcasReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case marcasTypes["c" /* TRAER_TODAS */]:
      return marcasReducer_objectSpread(marcasReducer_objectSpread({}, state), {}, {
        marcas: action.payload,
        loading: false
      });

    case marcasTypes["b" /* LOADING */]:
      return marcasReducer_objectSpread(marcasReducer_objectSpread({}, state), {}, {
        loading: true
      });

    case marcasTypes["a" /* ERROR */]:
      return marcasReducer_objectSpread(marcasReducer_objectSpread({}, state), {}, {
        error: action.payload,
        loading: false
      });

    default:
      return state;
  }
};

/* harmony default export */ var reducers_marcasReducer = (marcasReducer);
// EXTERNAL MODULE: ./store/types/subproductosTypes.js
var subproductosTypes = __webpack_require__("fXWR");

// CONCATENATED MODULE: ./store/reducers/subproductosReducer.js
function subproductosReducer_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function subproductosReducer_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { subproductosReducer_ownKeys(Object(source), true).forEach(function (key) { subproductosReducer_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { subproductosReducer_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function subproductosReducer_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const subproductosReducer_INITIAL_STATE = {
  subproductos: [],
  promociones: [],
  loading: false,
  error: null
};

const subproductosReducer = (state = subproductosReducer_INITIAL_STATE, action) => {
  switch (action.type) {
    case subproductosTypes["f" /* TRAER_TODOS */]:
      return subproductosReducer_objectSpread(subproductosReducer_objectSpread({}, state), {}, {
        subproductos: action.payload,
        loading: false
      });

    case subproductosTypes["e" /* TRAER_PROMOCIONES */]:
      return subproductosReducer_objectSpread(subproductosReducer_objectSpread({}, state), {}, {
        promociones: action.payload,
        loading: false
      });

    case subproductosTypes["d" /* ORDENAR_PRODUCTOS */]:
      return subproductosReducer_objectSpread(subproductosReducer_objectSpread({}, state), {}, {
        subproductos: action.payload,
        loading: false
      });

    case subproductosTypes["b" /* FILTRANDO */]:
      return subproductosReducer_objectSpread(subproductosReducer_objectSpread({}, state), {}, {
        subproductos: action.payload,
        loading: false
      });

    case subproductosTypes["c" /* LOADING */]:
      return subproductosReducer_objectSpread(subproductosReducer_objectSpread({}, state), {}, {
        loading: true
      });

    case subproductosTypes["a" /* ERROR */]:
      return subproductosReducer_objectSpread(subproductosReducer_objectSpread({}, state), {}, {
        loading: false,
        error: action.payload
      });

    default:
      return state;
  }
};

/* harmony default export */ var reducers_subproductosReducer = (subproductosReducer);
// EXTERNAL MODULE: ./store/types/carritoTypes.js
var carritoTypes = __webpack_require__("kqUl");

// CONCATENATED MODULE: ./store/reducers/carritoReducer.js
function carritoReducer_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function carritoReducer_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { carritoReducer_ownKeys(Object(source), true).forEach(function (key) { carritoReducer_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { carritoReducer_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function carritoReducer_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const carritoReducer_INITIAL_STATE = {
  productos: [],
  subtotal: 0,
  total: 0,
  loading: false,
  error: null
};

const carritoReducer = (state = carritoReducer_INITIAL_STATE, action) => {
  switch (action.type) {
    case carritoTypes["e" /* TRAER_PRODUCTOS */]:
      return carritoReducer_objectSpread(carritoReducer_objectSpread({}, state), {}, {
        productos: action.payload,
        loading: false,
        error: null
      });

    case carritoTypes["a" /* AGREGAR_PRODUCTO */]:
      return carritoReducer_objectSpread(carritoReducer_objectSpread({}, state), {}, {
        productos: action.payload,
        loading: false,
        error: null
      });

    case carritoTypes["b" /* ELIMINAR_PRODUCTO */]:
      return carritoReducer_objectSpread(carritoReducer_objectSpread({}, state), {}, {
        productos: action.payload,
        loading: false,
        error: null
      });

    case carritoTypes["d" /* LOADING */]:
      return carritoReducer_objectSpread(carritoReducer_objectSpread({}, state), {}, {
        loading: true
      });

    case carritoTypes["c" /* ERROR */]:
      return carritoReducer_objectSpread(carritoReducer_objectSpread({}, state), {}, {
        error: action.payload,
        loading: false
      });

    default:
      return state;
  }
};

/* harmony default export */ var reducers_carritoReducer = (carritoReducer);
// EXTERNAL MODULE: ./store/types/categoriasTypes.js
var categoriasTypes = __webpack_require__("6Xhb");

// CONCATENATED MODULE: ./store/reducers/categoriasReducer.js
function categoriasReducer_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function categoriasReducer_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { categoriasReducer_ownKeys(Object(source), true).forEach(function (key) { categoriasReducer_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { categoriasReducer_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function categoriasReducer_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const categoriasReducer_INITIAL_STATE = {
  categorias: [],
  loading: false,
  error: null
};

const categoriasReducer = (state = categoriasReducer_INITIAL_STATE, action) => {
  switch (action.type) {
    case categoriasTypes["c" /* TRAER_TODAS */]:
      return categoriasReducer_objectSpread(categoriasReducer_objectSpread({}, state), {}, {
        categorias: action.payload,
        loading: false
      });

    case categoriasTypes["b" /* LOADING */]:
      return categoriasReducer_objectSpread(categoriasReducer_objectSpread({}, state), {}, {
        loading: true
      });

    case categoriasTypes["a" /* ERROR */]:
      return categoriasReducer_objectSpread(categoriasReducer_objectSpread({}, state), {}, {
        error: action.payload,
        loading: false
      });

    default:
      return state;
  }
};

/* harmony default export */ var reducers_categoriasReducer = (categoriasReducer);
// EXTERNAL MODULE: ./store/types/subcategoriasTypes.js
var subcategoriasTypes = __webpack_require__("o9Kd");

// CONCATENATED MODULE: ./store/reducers/subcategoriasReducer.js
function subcategoriasReducer_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function subcategoriasReducer_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { subcategoriasReducer_ownKeys(Object(source), true).forEach(function (key) { subcategoriasReducer_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { subcategoriasReducer_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function subcategoriasReducer_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const subcategoriasReducer_INITIAL_STATE = {
  subcategorias: [],
  loading: false,
  error: null
};

const subcategoriasReducer = (state = subcategoriasReducer_INITIAL_STATE, action) => {
  switch (action.type) {
    case subcategoriasTypes["c" /* TRAER_TODAS */]:
      return subcategoriasReducer_objectSpread(subcategoriasReducer_objectSpread({}, state), {}, {
        subcategorias: action.payload,
        loading: false
      });

    case subcategoriasTypes["b" /* LOADING */]:
      return subcategoriasReducer_objectSpread(subcategoriasReducer_objectSpread({}, state), {}, {
        loading: true
      });

    case subcategoriasTypes["a" /* ERROR */]:
      return subcategoriasReducer_objectSpread(subcategoriasReducer_objectSpread({}, state), {}, {
        error: action.payload,
        loading: false
      });

    default:
      return state;
  }
};

/* harmony default export */ var reducers_subcategoriasReducer = (subcategoriasReducer);
// CONCATENATED MODULE: ./store/reducers/index.js






/* harmony default export */ var reducers = (Object(external_redux_["combineReducers"])({
  marcasReducer: reducers_marcasReducer,
  subproductosReducer: reducers_subproductosReducer,
  carritoReducer: reducers_carritoReducer,
  categoriasReducer: reducers_categoriasReducer,
  subcategoriaReducer: reducers_subcategoriasReducer
}));
// CONCATENATED MODULE: ./store/index.js




const initialState = {};
const middleware = [external_redux_thunk_default.a];
const store = Object(external_redux_["createStore"])(reducers, initialState, Object(external_redux_devtools_extension_["composeWithDevTools"])(Object(external_redux_["applyMiddleware"])(...middleware)));
/* harmony default export */ var store_0 = (store);
// CONCATENATED MODULE: ./pages/_app.js

var _app_jsx = external_react_default.a.createElement;







function MyApp({
  Component,
  pageProps
}) {
  return _app_jsx(external_react_redux_["Provider"], {
    store: store_0
  }, _app_jsx(components_Layout, null, _app_jsx(Component, pageProps)));
}

const makeStore = () => store_0;

const wrapper = Object(external_next_redux_wrapper_["createWrapper"])(makeStore);
/* harmony default export */ var _app = __webpack_exports__["default"] = (wrapper.withRedux(MyApp));

/***/ }),

/***/ "284h":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("cDf5");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "3WeD":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function stringifyUrlQueryParam(param) {
  if (typeof param === 'string' || typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
    return String(param);
  } else {
    return '';
  }
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, stringifyUrlQueryParam(item)));
    } else {
      result.set(key, stringifyUrlQueryParam(value));
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "6D7l":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__("3WeD"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "6Xhb":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return TRAER_TODAS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return LOADING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ERROR; });
const TRAER_TODAS = 'categorias_traer_todas';
const LOADING = 'categorias_loading';
const ERROR = 'categorias_error';


/***/ }),

/***/ "GvLQ":
/***/ (function(module, exports) {

module.exports = require("nprogress");

/***/ }),

/***/ "HJQg":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "HKBJ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return TRAER_TODAS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return LOADING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ERROR; });
const TRAER_TODAS = 'marca_traer_todas';
const LOADING = 'marca_loading';
const ERROR = 'marca_error';


/***/ }),

/***/ "JMOJ":
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "JVe5":
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-brands-svg-icons");

/***/ }),

/***/ "No/t":
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-solid-svg-icons");

/***/ }),

/***/ "Osoz":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "S3md":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),

/***/ "TqRt":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "X24+":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "YTqd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "ZSx1":
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cDf5":
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("284h");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _router = __webpack_require__("elyg");

var _router2 = __webpack_require__("nOHt");

let cachedObserver;
const listeners = new Map();
const IntersectionObserver = false ? undefined : null;
const prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (cachedObserver) {
    return cachedObserver;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return cachedObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      const cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        cachedObserver.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (false) {}
  }); // Join on an invalid URI character

  prefetched[href + '%' + as] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow
  }).then(success => {
    if (!success) return;

    if (scroll) {
      window.scrollTo(0, 0);
      document.body.focus();
    }
  });
}

function Link(props) {
  if (false) {}

  const p = props.prefetch !== false;

  const [childElm, setChildElm] = _react.default.useState();

  const router = (0, _router2.useRouter)();
  const pathname = router && router.pathname || '/';

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router.resolveHref)(pathname, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedAs || resolvedHref
    };
  }, [pathname, props.href, props.as]);

  _react.default.useEffect(() => {
    if (p && IntersectionObserver && childElm && childElm.tagName && (0, _router.isLocalURL)(href)) {
      // Join on an invalid URI character
      const isPrefetched = prefetched[href + '%' + as];

      if (!isPrefetched) {
        return listenToIntersections(childElm, () => {
          prefetch(router, href, as);
        });
      }
    }
  }, [p, childElm, href, as, router]);

  let {
    children,
    replace,
    shallow,
    scroll
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childProps = {
    ref: el => {
      if (el) setChildElm(el);

      if (child && typeof child === 'object' && child.ref) {
        if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
          child.ref.current = el;
        }
      }
    },
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll);
      }
    }
  };

  if (p) {
    childProps.onMouseEnter = e => {
      if (!(0, _router.isLocalURL)(href)) return;

      if (child.props && typeof child.props.onMouseEnter === 'function') {
        child.props.onMouseEnter(e);
      }

      prefetch(router, href, as, {
        priority: true
      });
    };
  } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    childProps.href = (0, _router.addBasePath)(as);
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "dZ6Y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "eD2A":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"card__productoCarrito": "ProductoCarrito_card__productoCarrito__jvhh2",
	"img__producto__wrapper": "ProductoCarrito_img__producto__wrapper__2oSIC",
	"info__productoCarrito": "ProductoCarrito_info__productoCarrito__3_h73",
	"carrito__nombre__producto": "ProductoCarrito_carrito__nombre__producto__3VhTS",
	"carrito__cantidad__producto": "ProductoCarrito_carrito__cantidad__producto__1Grcc",
	"total__producto__carrito": "ProductoCarrito_total__producto__carrito__bidDL",
	"delete_producto_carrito": "ProductoCarrito_delete_producto_carrito__3qJmG"
};


/***/ }),

/***/ "elyg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.markLoadingError = markLoadingError;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__("X24+");

var _denormalizePagePath = __webpack_require__("wkBG");

var _mitt = _interopRequireDefault(__webpack_require__("dZ6Y"));

var _utils = __webpack_require__("g/15");

var _isDynamic = __webpack_require__("/jkW");

var _parseRelativeUrl = __webpack_require__("hS4m");

var _querystring = __webpack_require__("3WeD");

var _resolveRewrites = _interopRequireDefault(__webpack_require__("S3md"));

var _routeMatcher = __webpack_require__("gguc");

var _routeRegex = __webpack_require__("YTqd");

var _escapePathDelimiters = _interopRequireDefault(__webpack_require__("fcRV"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function hasBasePath(path) {
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return basePath && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(basePath) : basePath + path : path;
}

function delBasePath(path) {
  return path.slice(basePath.length) || '/';
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  if (url.startsWith('/')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex.getRouteRegex)(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && ( // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map(_escapePathDelimiters.default).join('/') : (0, _escapePathDelimiters.default)(value)) || '/');
  })) {
    interpolatedRoute = ''; // did not satisfy all requirements
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href, resolveAs) {
  // we use a dummy base url for relative urls
  const base = new URL(currentPath, 'http://n');
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href);

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils.formatWithValidation)({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

const PAGE_LOAD_ERROR = Symbol('PAGE_LOAD_ERROR');

function markLoadingError(err) {
  return Object.defineProperty(err, PAGE_LOAD_ERROR, {});
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  return {
    url: addBasePath(resolveHref(router.pathname, url)),
    as: as ? addBasePath(resolveHref(router.pathname, as)) : as
  };
}

const manualScrollRestoration =  false && false;

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      markLoadingError(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    initialStyleSheets,
    err,
    subscription,
    isFallback
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      const {
        url,
        as,
        options
      } = state;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow
      }));
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        styleSheets: initialStyleSheets,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    (0, _isDynamic.isDynamicRoute)(_pathname) && __NEXT_DATA__.autoExport ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options) {
    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute);
    }

    const cleanedAs = hasBasePath(as) ? delBasePath(as) : as;
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route]);
      Router.events.emit('hashChangeComplete', as);
      return true;
    } // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to


    const pages = await this.pageLoader.getPageList();
    const {
      __rewrites: rewrites
    } = await this.pageLoader.promisedBuildManifest;
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      query
    } = parsed;
    parsed = this._resolveHref(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1


    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname; // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url

    if (!this.urlIsNew(cleanedAs)) {
      method = 'replaceState';
    }

    let route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    const {
      shallow = false
    } = options; // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly

    let resolvedAs = as;

    if (false) {}

    resolvedAs = delBasePath(resolvedAs);

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (false) {}

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://err.sh/vercel/next.js/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils.formatWithValidation)(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as);

    try {
      const routeInfo = await this.getRouteInfo(route, pathname, query, as, shallow);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props && props.pageProps && props.pageProps.__N_REDIRECT) {
        const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
        // client-navigation if it is falling back to hard navigation if
        // it's not

        if (destination.startsWith('/')) {
          const parsedHref = (0, _parseRelativeUrl.parseRelativeUrl)(destination);

          this._resolveHref(parsedHref, pages);

          if (pages.includes(parsedHref.pathname)) {
            return this.change('replaceState', destination, destination, options);
          }
        }

        window.location.href = destination;
        return new Promise(() => {});
      }

      Router.events.emit('beforeHistoryChange', as);
      this.changeState(method, url, as, options);

      if (false) {}

      await this.set(route, pathname, query, cleanedAs, routeInfo).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (false) {}

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if (PAGE_LOAD_ERROR in err || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      const {
        page: Component,
        styleSheets
      } = await this.fetchComponent('/_error');
      const routeInfo = {
        Component,
        styleSheets,
        err,
        error: err
      };

      try {
        routeInfo.props = await this.getInitialProps(Component, {
          err,
          pathname,
          query
        });
      } catch (gipErr) {
        console.error('Error in error page `getInitialProps`: ', gipErr);
        routeInfo.props = {};
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, shallow = false) {
    try {
      const cachedRouteInfo = this.components[route];

      if (shallow && cachedRouteInfo && this.route === route) {
        return cachedRouteInfo;
      }

      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (false) {}

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), delBasePath(as), __N_SSG);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as);
    }
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }

  _resolveHref(parsedHref, pages, applyBasePath = true) {
    const {
      pathname
    } = parsedHref;
    const cleanPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _denormalizePagePath.denormalizePagePath)(applyBasePath ? delBasePath(pathname) : pathname));

    if (cleanPathname === '/404' || cleanPathname === '/_error') {
      return parsedHref;
    } // handle resolving href for dynamic routes


    if (!pages.includes(cleanPathname)) {
      // eslint-disable-next-line array-callback-return
      pages.some(page => {
        if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
          parsedHref.pathname = applyBasePath ? addBasePath(page) : page;
          return true;
        }
      });
    }

    return parsedHref;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;
    const pages = await this.pageLoader.getPageList();
    parsed = this._resolveHref(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // Prefetch is not supported in development mode because it would trigger on-demand-entries


    if (false) {}

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    await Promise.all([this.pageLoader.prefetchData(url, asPath), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if ( true && this.sdc[cacheKey]) {
      return Promise.resolve(this.sdc[cacheKey]);
    }

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    return fetchNextData(dataHref, this.isSsr);
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    return this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "fXWR":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return TRAER_TODOS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return LOADING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return TRAER_PROMOCIONES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return ORDENAR_PRODUCTOS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return FILTRANDO; });
const TRAER_TODOS = 'producto_traer_todos';
const LOADING = 'producto_loading';
const ERROR = 'producto_error';
const TRAER_PROMOCIONES = 'producto_traer_promociones';
const ORDENAR_PRODUCTOS = 'producto_ordenarproductos';
const FILTRANDO = 'producto_filtrando';


/***/ }),

/***/ "faye":
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),

/***/ "fcRV":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = escapePathDelimiters; // escape delimiters used by path-to-regexp

function escapePathDelimiters(segment) {
  return segment.replace(/[/#?]/g, char => encodeURIComponent(char));
}

/***/ }),

/***/ "g/15":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__("6D7l");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (false) { var _App$prototype; } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (false) {}

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (false) {}

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "gguc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "h74D":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "hS4m":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__("g/15");

var _querystring = __webpack_require__("3WeD");

const DUMMY_BASE = new URL(true ? 'http://n' : undefined);
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/

function parseRelativeUrl(url, base) {
  const resolvedBase = base ? new URL(base, DUMMY_BASE) : DUMMY_BASE;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin,
    protocol
  } = new URL(url, resolvedBase);

  if (origin !== DUMMY_BASE.origin || protocol !== 'http:' && protocol !== 'https:') {
    throw new Error('invariant: invalid relative URL');
  }

  return {
    pathname,
    query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
    search,
    hash,
    href: href.slice(DUMMY_BASE.origin.length)
  };
}

/***/ }),

/***/ "kqUl":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return TRAER_PRODUCTOS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AGREGAR_PRODUCTO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ELIMINAR_PRODUCTO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return LOADING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ERROR; });
const TRAER_PRODUCTOS = 'carrito_traer_todos_carrito';
const AGREGAR_PRODUCTO = 'carrito_agregar_producto';
const ELIMINAR_PRODUCTO = 'carrito_eliminar_producto';
const LOADING = 'carrito_loading';
const ERROR = 'carrito_error';


/***/ }),

/***/ "nOHt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("284h");

var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router2 = _interopRequireWildcard(__webpack_require__("elyg"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__("Osoz");

var _withRouter = _interopRequireDefault(__webpack_require__("0Bsm"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "nhAV":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "traerProductos", function() { return traerProductos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "agregarProducto", function() { return agregarProducto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "eliminarProducto", function() { return eliminarProducto; });
/* harmony import */ var _types_carritoTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("kqUl");
//import {API} from '../config/index';

const traerProductos = () => async dispatch => {
  dispatch({
    type: _types_carritoTypes__WEBPACK_IMPORTED_MODULE_0__[/* LOADING */ "d"]
  });

  try {
    const productos = JSON.parse(localStorage.getItem('carrito'));
    dispatch({
      type: _types_carritoTypes__WEBPACK_IMPORTED_MODULE_0__[/* TRAER_PRODUCTOS */ "e"],
      payload: productos
    });
  } catch (error) {
    dispatch({
      type: _types_carritoTypes__WEBPACK_IMPORTED_MODULE_0__[/* ERROR */ "c"],
      payload: error
    });
  }
};
const agregarProducto = producto => async (dispatch, getState) => {
  dispatch({
    type: _types_carritoTypes__WEBPACK_IMPORTED_MODULE_0__[/* LOADING */ "d"]
  });

  try {
    //productos que hay en el reducer
    let {
      productos
    } = getState().carritoReducer;
    let listProductosUpgrade;
    let productoRepetido = productos.filter(res => res.idSubProducto == producto.idSubProducto);

    if (productoRepetido.length > 0) {
      //si se intenta agregar de nuevo el mismo producto, se suma la cantidad, no todo el producto.
      productoRepetido[0].cantidad = productoRepetido[0].cantidad + producto.cantidad;
      let restantes = productos.filter(newRes => newRes.idSubProducto != productoRepetido[0].idSubProducto);

      if (restantes.length > 0) {
        listProductosUpgrade = [...restantes, productoRepetido[0]];
      } else {
        listProductosUpgrade = [productoRepetido[0]];
      }
    } else {
      listProductosUpgrade = [...productos, producto];
    } //actualizo localstorage


    localStorage.setItem('carrito', JSON.stringify(listProductosUpgrade));
    setTimeout(() => {
      dispatch({
        type: _types_carritoTypes__WEBPACK_IMPORTED_MODULE_0__[/* AGREGAR_PRODUCTO */ "a"],
        payload: listProductosUpgrade
      });
    }, 1500);
  } catch (error) {
    dispatch({
      type: _types_carritoTypes__WEBPACK_IMPORTED_MODULE_0__[/* ERROR */ "c"],
      payload: error
    });
  }
};
const eliminarProducto = idSubProducto => async (dispatch, getState) => {
  dispatch({
    type: _types_carritoTypes__WEBPACK_IMPORTED_MODULE_0__[/* LOADING */ "d"]
  });

  try {
    const {
      productos
    } = getState().carritoReducer; //filtro los productos que no tengan el idProducto que se recibió. entonces elimino ese producto y actualizo el reducer.

    const newProductos = productos.filter(newArray => newArray.idSubProducto !== idSubProducto);
    console.log(newProductos);
    localStorage.setItem('carrito', JSON.stringify(newProductos));
    dispatch({
      type: _types_carritoTypes__WEBPACK_IMPORTED_MODULE_0__[/* ELIMINAR_PRODUCTO */ "b"],
      payload: newProductos
    });
  } catch (error) {
    dispatch({
      type: _types_carritoTypes__WEBPACK_IMPORTED_MODULE_0__[/* ERROR */ "c"],
      payload: error
    });
  }
};

/***/ }),

/***/ "o9Kd":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return TRAER_TODAS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return LOADING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ERROR; });
const TRAER_TODAS = 'subcategorias_traer_todas';
const LOADING = 'subcategorias_loading';
const ERROR = 'subcategorias_error';


/***/ }),

/***/ "psAh":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"carrito__container": "Carrito_carrito__container__3LUGc",
	"footer__carrito": "Carrito_footer__carrito__CZNUi",
	"section__carrito__total": "Carrito_section__carrito__total__34mnW",
	"subtotal__carrito": "Carrito_subtotal__carrito__YltHt",
	"carrito__productos": "Carrito_carrito__productos__oEy3y"
};


/***/ }),

/***/ "q4sD":
/***/ (function(module, exports) {



/***/ }),

/***/ "qC+Y":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: ./store/actions/carritoActions.js
var carritoActions = __webpack_require__("nhAV");

// EXTERNAL MODULE: ./src/components/Carrito/Carrito.module.css
var Carrito_module = __webpack_require__("psAh");
var Carrito_module_default = /*#__PURE__*/__webpack_require__.n(Carrito_module);

// EXTERNAL MODULE: ./src/components/Carrito/ProductoCarrito.module.css
var ProductoCarrito_module = __webpack_require__("eD2A");
var ProductoCarrito_module_default = /*#__PURE__*/__webpack_require__.n(ProductoCarrito_module);

// EXTERNAL MODULE: ./config/index.js
var config = __webpack_require__("rOcY");

// EXTERNAL MODULE: external "@fortawesome/free-solid-svg-icons"
var free_solid_svg_icons_ = __webpack_require__("No/t");

// EXTERNAL MODULE: external "@fortawesome/react-fontawesome"
var react_fontawesome_ = __webpack_require__("uhWA");

// CONCATENATED MODULE: ./src/components/Carrito/ProductoCarrito.js
var __jsx = external_react_default.a.createElement;






const ProductoCarrito = props => {
  const {
    foto,
    producto,
    peso,
    total,
    idSubProducto,
    cantidad
  } = props;
  return __jsx("div", {
    className: ProductoCarrito_module_default.a.card__productoCarrito + ' ' + `col-12`
  }, __jsx(react_fontawesome_["FontAwesomeIcon"], {
    icon: free_solid_svg_icons_["faTrash"],
    className: ProductoCarrito_module_default.a.delete_producto_carrito,
    onClick: () => props.eliminarProducto(idSubProducto)
  }), __jsx("div", {
    className: ProductoCarrito_module_default.a.img__producto__wrapper
  }, __jsx("img", {
    src: `${config["a" /* API */]}img/${foto}`,
    alt: "prd",
    className: "img-fluid"
  })), __jsx("div", {
    className: ProductoCarrito_module_default.a.info__productoCarrito
  }, __jsx("span", {
    className: ProductoCarrito_module_default.a.carrito__nombre__producto + ' ' + `d-block`
  }, producto), __jsx("span", {
    className: ProductoCarrito_module_default.a.carrito__cantidad__producto + ' ' + `d-block`
  }, "x ", peso, "Kg"), __jsx("span", {
    className: "text-muted"
  }, __jsx("b", null, cantidad), " ", cantidad > 1 ? 'unidades' : 'unidad')), __jsx("div", {
    className: ProductoCarrito_module_default.a.total__producto__carrito
  }, __jsx("span", {
    className: "text-black"
  }, "$", total * cantidad)));
};

/* harmony default export */ var Carrito_ProductoCarrito = (ProductoCarrito);
// CONCATENATED MODULE: ./src/components/Carrito/index.js
var Carrito_jsx = external_react_default.a.createElement;






const Carrito = props => {
  Object(external_react_["useEffect"])(() => {
    props.traerProductos();
  }, []);
  let totalCarrito = 0;

  const showProductos = () => {
    if (!props.productos || props.productos.length === 0) return Carrito_jsx("div", {
      className: "alert alert-warning"
    }, "Ningun producto en el carrito"); //calculo el subtotal para mostrarlo abajo de todo en el modal

    totalCarrito = calcularTotal(props.productos);
    return props.productos.map((prd, key) => Carrito_jsx(Carrito_ProductoCarrito, {
      key: key,
      idSubProducto: prd.idSubProducto,
      producto: prd.producto,
      peso: prd.peso,
      total: prd.precioUnidad,
      foto: prd.foto,
      cantidad: prd.cantidad,
      eliminarProducto: props.eliminarProducto
    }));
  };

  const calcularTotal = prds => {
    let total = 0;
    prds.forEach(prd => {
      total += parseInt(prd.precioUnidad * prd.cantidad);
    });
    return total;
  }; //console.log(props);


  return Carrito_jsx("section", {
    className: Carrito_module_default.a.carrito__container + ' ' + `carrito`
  }, Carrito_jsx("h6", {
    className: "text-center"
  }, "Mi Carrito"), Carrito_jsx("section", {
    className: Carrito_module_default.a.carrito__productos
  }, showProductos()), Carrito_jsx("div", {
    className: Carrito_module_default.a.footer__carrito
  }, Carrito_jsx("section", {
    className: Carrito_module_default.a.section__carrito__total + ' ' + `d-flex justify-content-between`
  }, Carrito_jsx("p", null, "Subtotal"), Carrito_jsx("span", {
    className: Carrito_module_default.a.subtotal__carrito
  }, "$", totalCarrito)), Carrito_jsx("button", {
    className: "boton bg-yellow",
    type: "button"
  }, "Finalizar compra")));
};

const mapStateToProps = reducers => {
  return reducers.carritoReducer;
};

/* harmony default export */ var components_Carrito = __webpack_exports__["a"] = (Object(external_react_redux_["connect"])(mapStateToProps, carritoActions)(Carrito));

/***/ }),

/***/ "qOq0":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"Modal": "Modal_Modal__2dp7g",
	"modal_dialog": "Modal_modal_dialog__2OJUP",
	"modal_content": "Modal_modal_content__1LS7G",
	"show": "Modal_show__12jBh",
	"close_modal": "Modal_close_modal__2fBjj"
};


/***/ }),

/***/ "rKB8":
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "rOcY":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return API; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return PUBLIC_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return URL_CLOUD_STORAGE; });
const API = 'https://api.oliverpetshop.com.ar/'; //const PUBLIC_URL = 'http://localhost:3000';

const PUBLIC_URL = 'https://developers.oliverpetshop.com.ar';
const URL_CLOUD_STORAGE = 'https://storage.googleapis.com/oliver-web/static';


/***/ }),

/***/ "ufKq":
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "uhWA":
/***/ (function(module, exports) {

module.exports = require("@fortawesome/react-fontawesome");

/***/ }),

/***/ "wkBG":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "yym0":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"login__container": "Login_login__container__v6GSM",
	"title__login": "Login_title__login__3R3Z5",
	"form": "Login_form__X5rCp",
	"label": "Login_label__MIKpl",
	"input": "Login_input__3PXyH",
	"registerLink": "Login_registerLink__3Dsh2"
};


/***/ }),

/***/ "zPlV":
/***/ (function(module, exports) {



/***/ })

/******/ });