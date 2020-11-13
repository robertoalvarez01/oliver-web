module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
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

/***/ "06NB":
/***/ (function(module, exports) {

module.exports = require("slugify");

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

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("30mp");


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

/***/ "30mp":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./src/components/Head.js
var Head = __webpack_require__("k2JI");

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: ./store/actions/productosActions.js
var productosActions = __webpack_require__("TVVT");

// EXTERNAL MODULE: ./src/components/Loader/index.js
var Loader = __webpack_require__("XOuL");

// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__("HJQg");
var style_default = /*#__PURE__*/__webpack_require__.n(style_);

// CONCATENATED MODULE: ./src/components/ProductoSingle/sliderFotos.js

var __jsx = external_react_default.a.createElement;


const SliderFotosProducto = props => {
  const setImagenActive = (img, key, peso, precioUnidad, tamaño, idSubProducto, subProducto) => {
    for (let index = 0; index < document.getElementsByClassName('img_small').length; index++) {
      document.getElementsByClassName('img_small')[index].classList.remove('active');
    }

    ;
    document.getElementsByClassName('img_small')[key].classList.add('active');
    document.querySelector('.img__box-grande').src = img;
    props.changePeso(key, `${peso}`, precioUnidad, `${tamaño}`, idSubProducto, `${subProducto}`);
  };

  return __jsx("div", {
    className: "jsx-2289326465" + " " + "row slider__fotos"
  }, __jsx("div", {
    className: "jsx-2289326465" + " " + "col-12 col-md-4 text-center col__imagenes-chicas pt-5"
  }, props.imagenes.map((img, key) => key == 0 ? __jsx("img", {
    key: key,
    src: img,
    onClick: () => setImagenActive(img, key),
    alt: "prd",
    className: "jsx-2289326465" + " " + "img_small active"
  }) : __jsx("img", {
    key: key,
    src: img,
    onClick: () => setImagenActive(img, key, `${props.subProductos[key].peso}`, props.subProductos[key].precioUnidad, `${props.subProductos[key].tamaño}`, props.subProductos[key].idSubProducto, `${props.subProductos[key].subProducto}`),
    alt: "prd",
    className: "jsx-2289326465" + " " + "img_small"
  }))), __jsx("div", {
    className: "jsx-2289326465" + " " + "col-12 col-md-8 col__imagen-grande"
  }, __jsx("img", {
    src: props.imagenes[0],
    alt: "prd",
    className: "jsx-2289326465" + " " + "img-fluid img__box-grande"
  })), __jsx(style_default.a, {
    id: "2289326465"
  }, [".slider__fotos.jsx-2289326465 .col__imagenes-chicas.jsx-2289326465{height:429px;}", ".slider__fotos.jsx-2289326465 .col__imagenes-chicas.jsx-2289326465 img.jsx-2289326465{height:120px;width:90px !important;cursor:pointer;}", ".slider__fotos.jsx-2289326465 .col__imagenes-chicas.jsx-2289326465 img.jsx-2289326465:hover{-webkit-filter:brightness(70%);filter:brightness(70%);-webkit-transition:all .5s ease;transition:all .5s ease;}", ".slider__fotos.jsx-2289326465 .col__imagenes-chicas.jsx-2289326465 img.active.jsx-2289326465{border:2px solid #FFB347;}", "@media(max-width:768px){.slider__fotos.jsx-2289326465{-webkit-flex-direction:column-reverse;-ms-flex-direction:column-reverse;flex-direction:column-reverse;}.slider__fotos.jsx-2289326465 .col__imagen-grande.jsx-2289326465{text-align:center;}.slider__fotos.jsx-2289326465 .col__imagen-grande.jsx-2289326465 img.jsx-2289326465{height:345px;}}"]));
};

/* harmony default export */ var sliderFotos = (SliderFotosProducto);
// EXTERNAL MODULE: ./store/actions/carritoActions.js
var carritoActions = __webpack_require__("nhAV");

// EXTERNAL MODULE: ./src/components/Modal/index.js
var Modal = __webpack_require__("/Q2I");

// EXTERNAL MODULE: ./src/components/Carrito/index.js + 1 modules
var Carrito = __webpack_require__("qC+Y");

// EXTERNAL MODULE: ./src/components/ProductoSingle/ProductoSingle.module.css
var ProductoSingle_module = __webpack_require__("lZUM");
var ProductoSingle_module_default = /*#__PURE__*/__webpack_require__.n(ProductoSingle_module);

// CONCATENATED MODULE: ./src/components/ProductoSingle/index.js
var ProductoSingle_jsx = external_react_default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










const ProductoSingle = props => {
  const {
    peso,
    precioUnidad,
    idSubProducto,
    subProducto,
    tamaño
  } = props.subProductos[0];
  Object(external_react_["useEffect"])(() => {
    const {
      foto,
      peso,
      precioUnidad,
      tamaño,
      idSubProducto,
      subProducto
    } = props.subProductos[0];
    const {
      marca,
      producto
    } = props.producto;
    guardarProductoEnState(foto, peso, precioUnidad, producto, tamaño, idSubProducto, marca, subProducto);
  }, [props.producto]);
  const imagenes = []; //al vector de imagenes, le sumo las imagenes de los productos relacionados al mismo padre

  props.subProductos.map(datasp => {
    imagenes.push(datasp.foto);
  });
  const {
    0: modalIsOpen,
    1: setModalIsOpen
  } = Object(external_react_["useState"])(false);
  const {
    0: productoData,
    1: setProductoData
  } = Object(external_react_["useState"])({});

  const changeCantidad = action => {
    let inputCantidad = document.getElementById('cantidad_prd');
    let cantidad = parseInt(inputCantidad.value);

    if (action === '-') {
      if (cantidad <= 1) return false;
      cantidad--;
    } else {
      cantidad++;
    }

    inputCantidad.value = cantidad;
    return setProductoData(_objectSpread(_objectSpread({}, productoData), {}, {
      cantidad
    }));
  };

  const changePeso = (index, peso, precio, tamaño, idSubProducto, subProducto) => {
    let cajaPeso = document.getElementsByClassName(ProductoSingle_module_default.a.caja_cantidadKg);

    for (let index = 0; index < cajaPeso.length; index++) {
      cajaPeso[index].classList.contains(ProductoSingle_module_default.a.active) ? cajaPeso[index].classList.remove(ProductoSingle_module_default.a.active) : null;
    }

    cajaPeso[index].classList.add(ProductoSingle_module_default.a.active);

    if (!peso || !precio || !tamaño || !idSubProducto || !subProducto) {
      return setProductoData(_objectSpread(_objectSpread({}, productoData), {}, {
        peso: props.subProductos[0].peso,
        precio: props.subProductos[0].precioUnidad,
        idSubProducto: props.subProductos[0].idSubProducto,
        subProducto: props.subProductos[0].subProducto
      }));
    }

    ;
    setProductoData(_objectSpread(_objectSpread({}, productoData), {}, {
      peso,
      precio,
      tamaño,
      idSubProducto,
      subProducto
    }));
  };

  const agregarCarrito = async () => {
    props.agregarProducto(productoData);
    setTimeout(() => {
      setModalIsOpen(true);
    }, 1700);
  };

  const closeModalCarrito = () => setModalIsOpen(false);

  const guardarProductoEnState = (foto, peso, precioUnidad, producto, tamaño, idSubProducto, marca, subProducto) => {
    setProductoData({
      producto,
      foto,
      peso,
      cantidad: 1,
      precioUnidad,
      tamaño,
      idSubProducto,
      marca,
      subProducto
    });
  };

  return ProductoSingle_jsx("div", {
    className: "row"
  }, ProductoSingle_jsx("div", {
    className: "col-12 col-sm-6"
  }, ProductoSingle_jsx(sliderFotos, {
    imagenes: imagenes,
    changePeso: changePeso,
    subProductos: props.subProductos
  })), ProductoSingle_jsx("div", {
    className: `col-12 col-sm-6 pt-5` + ' ' + ProductoSingle_module_default.a.descripcionProducto
  }, ProductoSingle_jsx("h3", {
    className: ProductoSingle_module_default.a.marca
  }, productoData.marca), ProductoSingle_jsx("h1", null, productoData.producto), ProductoSingle_jsx("div", {
    className: ProductoSingle_module_default.a.precios + ' ' + `d-flex my-3`
  }, ProductoSingle_jsx("div", {
    className: ProductoSingle_module_default.a.indicador__precio
  }, ProductoSingle_jsx("p", null, "Precio"), ProductoSingle_jsx("span", {
    className: ProductoSingle_module_default.a.valor__precio
  }, "$", productoData.precioUnidad)), ProductoSingle_jsx("div", {
    className: ProductoSingle_module_default.a.indicador__cantidad
  }, ProductoSingle_jsx("p", {
    className: ProductoSingle_module_default.a.titulo__indicadorCantidad + ' ' + `text-center`
  }, "Seleccion\xE1 tama\xF1o"), ProductoSingle_jsx("div", {
    className: "row justify-content-center"
  }, props.subProductos.map((mp, key) => key == 0 ? ProductoSingle_jsx("div", {
    key: key,
    className: ProductoSingle_module_default.a.caja_cantidadKg + ' ' + ProductoSingle_module_default.a.active,
    onClick: () => changePeso(key, `${peso}`, precioUnidad, `${tamaño}`, idSubProducto, `${subProducto}`)
  }, ProductoSingle_jsx("p", {
    className: ProductoSingle_module_default.a.kilos
  }, mp.peso, " Kgs"), ProductoSingle_jsx("span", {
    className: ProductoSingle_module_default.a.precioDelKg
  }, "$", productoData.precioUnidad)) : ProductoSingle_jsx("div", {
    key: key,
    className: ProductoSingle_module_default.a.caja_cantidadKg,
    onClick: () => changePeso(key, `${mp.peso}`, mp.precioUnidad, `${mp.tamaño}`, mp.idSubProducto, `${mp.subProducto}`)
  }, ProductoSingle_jsx("p", {
    className: ProductoSingle_module_default.a.kilos
  }, mp.peso, " Kgs"), ProductoSingle_jsx("span", {
    className: ProductoSingle_module_default.a.precioDelKg
  }, "$", mp.precioUnidad)))), ProductoSingle_jsx("div", {
    className: "input-group mt-2"
  }, ProductoSingle_jsx("div", {
    className: "input-group-prepend",
    onClick: () => changeCantidad('-')
  }, ProductoSingle_jsx("span", {
    className: "input-group-text"
  }, "-")), ProductoSingle_jsx("input", {
    type: "text",
    id: "cantidad_prd",
    className: "form-control text-center",
    value: productoData.cantidad
  }), ProductoSingle_jsx("div", {
    className: "input-group-append",
    onClick: () => changeCantidad('+')
  }, ProductoSingle_jsx("span", {
    className: "input-group-text"
  }, "+"))))), props.loading ? ProductoSingle_jsx("div", {
    className: "text-center"
  }, ProductoSingle_jsx(Loader["a" /* default */], null)) : ProductoSingle_jsx("button", {
    className: "boton bg-yellow",
    onClick: agregarCarrito
  }, "Comprar")), !modalIsOpen ? null : ProductoSingle_jsx(Modal["a" /* default */], {
    closeModal: closeModalCarrito
  }, ProductoSingle_jsx(Carrito["a" /* default */], null)));
};

const mapStateToProps = reducers => {
  return reducers.carritoReducer;
};

/* harmony default export */ var components_ProductoSingle = (Object(external_react_redux_["connect"])(mapStateToProps, carritoActions)(ProductoSingle));
// EXTERNAL MODULE: external "reactstrap"
var external_reactstrap_ = __webpack_require__("oL/c");

// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__("K2gz");
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);

// EXTERNAL MODULE: ./src/components/ProductoSingle/infoProducto.module.css
var infoProducto_module = __webpack_require__("YPbN");
var infoProducto_module_default = /*#__PURE__*/__webpack_require__.n(infoProducto_module);

// CONCATENATED MODULE: ./src/components/ProductoSingle/infoProducto.js
var infoProducto_jsx = external_react_default.a.createElement;





const InfoProducto = props => {
  const {
    0: activeTab,
    1: setActiveTab
  } = Object(external_react_["useState"])('1');

  const toggle = tab => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return infoProducto_jsx(external_react_default.a.Fragment, null, infoProducto_jsx("section", {
    className: infoProducto_module_default.a.detalles__producto
  }, infoProducto_jsx("div", {
    className: "container"
  }, infoProducto_jsx(external_reactstrap_["Nav"], {
    tabs: true
  }, infoProducto_jsx(external_reactstrap_["NavItem"], null, infoProducto_jsx(external_reactstrap_["NavLink"], {
    className: external_classnames_default()({
      active: activeTab === '1'
    }),
    onClick: () => {
      toggle('1');
    }
  }, "Descripci\xF3n")), infoProducto_jsx(external_reactstrap_["NavItem"], null, infoProducto_jsx(external_reactstrap_["NavLink"], {
    className: external_classnames_default()({
      active: activeTab === '2'
    }),
    onClick: () => {
      toggle('2');
    }
  }, "Informaci\xF3n nutricional")))), infoProducto_jsx("div", {
    style: {
      backgroundColor: 'white'
    }
  }, infoProducto_jsx("div", {
    className: "container pt-3"
  }, infoProducto_jsx(external_reactstrap_["TabContent"], {
    activeTab: activeTab,
    className: infoProducto_module_default.a.sub__container
  }, infoProducto_jsx(external_reactstrap_["TabPane"], {
    tabId: "1"
  }, infoProducto_jsx(external_reactstrap_["Row"], null, infoProducto_jsx(external_reactstrap_["Col"], {
    sm: "12",
    className: infoProducto_module_default.a.p
  }, props.descripcion_basica))), infoProducto_jsx(external_reactstrap_["TabPane"], {
    tabId: "2"
  }, infoProducto_jsx(external_reactstrap_["Row"], null, infoProducto_jsx(external_reactstrap_["Col"], {
    sm: "12",
    className: infoProducto_module_default.a.p,
    dangerouslySetInnerHTML: {
      __html: props.descripcion
    }
  }))))))));
};

/* harmony default export */ var infoProducto = (InfoProducto);
// EXTERNAL MODULE: ./src/components/Promociones/index.js
var Promociones = __webpack_require__("hCbx");

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// CONCATENATED MODULE: ./pages/producto/[...producto].js

var _producto_jsx = external_react_default.a.createElement;










const Producto = props => {
  Object(external_react_["useEffect"])(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      await props.traerPorId(props.idProducto);
    } catch (error) {
      console.log(error);
    }
  };

  const router = Object(router_["useRouter"])();

  const render = () => {
    if (props.loading) return _producto_jsx("div", {
      className: "col-12 text-center mt-4"
    }, _producto_jsx(Loader["a" /* default */], null));
    if (props.error) return _producto_jsx(Error, null);
    if (!props.producto) return null;
    const {
      descripcion,
      descripcion_basica
    } = props.producto.data[0];
    return _producto_jsx(external_react_default.a.Fragment, null, _producto_jsx(Head["a" /* default */], {
      title: props.producto.data[0].producto
    }), _producto_jsx("section", {
      className: "pb-5",
      style: {
        backgroundColor: 'white'
      }
    }, _producto_jsx("div", {
      className: "wrapper__producto container mb-5"
    }, _producto_jsx(components_ProductoSingle, {
      producto: props.producto.data[0],
      subProductos: props.producto.subproductos
    })), _producto_jsx(infoProducto, {
      descripcion: descripcion,
      descripcion_basica: descripcion_basica
    })), _producto_jsx("div", {
      className: "container"
    }, _producto_jsx(Promociones["a" /* default */], null)));
  };

  return render();
};

Producto.getInitialProps = async ({
  query
}) => {
  let idProducto = query.producto[1];
  return {
    idProducto
  };
};

const _producto_mapStateToProps = ({
  productosReducer
}) => {
  return productosReducer;
};

/* harmony default export */ var _producto_ = __webpack_exports__["default"] = (Object(external_react_redux_["connect"])(_producto_mapStateToProps, productosActions)(Producto));

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

/***/ "CI6Y":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _CardProducto_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("QUvA");
/* harmony import */ var _CardProducto_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_CardProducto_module_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _helpers_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("pRT7");
/* harmony import */ var _config_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("rOcY");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const CardProducto = ({
  imagen,
  prd
}) => {
  const {
    0: isProductoDetalle,
    1: setIsProductoDetalle
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const {
      router
    } = next_router__WEBPACK_IMPORTED_MODULE_5___default.a;

    if (router.route == '/producto/[...producto]') {
      setIsProductoDetalle(true);
    }
  }, []);

  const procesarNombre = nombre => {
    let nombreProcesado = nombre;

    if (Object(_helpers_index__WEBPACK_IMPORTED_MODULE_3__[/* isMobile */ "a"])()) {
      if (nombreProcesado.length > 25) {
        nombreProcesado = nombre.substring(0, 22) + '...';
      }
    } else {
      if (nombreProcesado.length > 45) {
        nombreProcesado = nombre.substring(0, 40) + '...';
      }
    }

    return nombreProcesado;
  };

  return !isProductoDetalle ? __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: `${_config_index__WEBPACK_IMPORTED_MODULE_4__[/* PUBLIC_URL */ "b"]}/producto/${Object(_helpers_index__WEBPACK_IMPORTED_MODULE_3__[/* slug */ "b"])(prd.producto)}/${prd.idProducto}`
  }, __jsx("a", null, __jsx("div", {
    className: _CardProducto_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.container__producto + ' ' + `my-3`
  }, __jsx("section", {
    className: _CardProducto_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.header__card
  }, __jsx("img", {
    src: imagen,
    alt: "prd",
    className: _CardProducto_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.img
  })), __jsx("section", {
    className: _CardProducto_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.body__card
  }, __jsx("span", {
    className: _CardProducto_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.label__marca + ' ' + `d-block text-muted`
  }, prd.marca), __jsx("h6", {
    className: _CardProducto_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.nombre__producto + ' ' + `text-muted`
  }, procesarNombre(prd.producto)), prd.peso != null ? __jsx("span", {
    className: _CardProducto_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.cantidad
  }, prd.peso, " KG") : null, __jsx("h3", {
    className: _CardProducto_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.precio + ' ' + `text-black`
  }, "$", prd.precioUnidad)), __jsx("span", {
    className: _CardProducto_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.label__descuento + ' ' + `bg-red`
  }, "15% Off")))) : __jsx("a", {
    href: `${_config_index__WEBPACK_IMPORTED_MODULE_4__[/* PUBLIC_URL */ "b"]}/producto/${Object(_helpers_index__WEBPACK_IMPORTED_MODULE_3__[/* slug */ "b"])(prd.producto)}/${prd.idProducto}`
  }, __jsx("div", {
    className: _CardProducto_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.container__producto + ' ' + `my-3`
  }, __jsx("section", {
    className: _CardProducto_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.header__card
  }, __jsx("img", {
    src: imagen,
    alt: "prd",
    className: _CardProducto_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.img
  })), __jsx("section", {
    className: _CardProducto_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.body__card
  }, __jsx("span", {
    className: _CardProducto_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.label__marca + ' ' + `d-block text-muted`
  }, prd.marca), __jsx("h6", {
    className: _CardProducto_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.nombre__producto + ' ' + `text-muted`
  }, procesarNombre(prd.producto)), __jsx("span", {
    className: _CardProducto_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.cantidad
  }, prd.peso, " KG"), __jsx("h3", {
    className: _CardProducto_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.precio + ' ' + `text-black`
  }, "$", prd.precioUnidad)), __jsx("span", {
    className: _CardProducto_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.label__descuento + ' ' + `bg-red`
  }, "15% Off")));
};

/* harmony default export */ __webpack_exports__["a"] = (CardProducto);

/***/ }),

/***/ "HJQg":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "K2gz":
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ "LwYX":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return TRAER_TODOS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return TRAER_UNO; });
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
const TRAER_UNO = 'producto_traeruno';


/***/ }),

/***/ "No/t":
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-solid-svg-icons");

/***/ }),

/***/ "Osoz":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "QUvA":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container__producto": "CardProducto_container__producto__3ZzRa",
	"header__card": "CardProducto_header__card__2snWG",
	"img": "CardProducto_img__2JjZn",
	"body__card": "CardProducto_body__card__2yHOq",
	"cantidad": "CardProducto_cantidad__M84Dc",
	"label__descuento": "CardProducto_label__descuento__1fclU",
	"nombre__producto": "CardProducto_nombre__producto__3yzZP",
	"precio": "CardProducto_precio__3WgOa",
	"btn_comprar": "CardProducto_btn_comprar__3B3do"
};


/***/ }),

/***/ "S3md":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),

/***/ "TVVT":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "traerTodos", function() { return traerTodos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "traerPorId", function() { return traerPorId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "traerPromociones", function() { return traerPromociones; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ordenarProductos", function() { return ordenarProductos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filtrarProductos", function() { return filtrarProductos; });
/* harmony import */ var _config_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("rOcY");
/* harmony import */ var _types_productosTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("LwYX");


const traerTodos = () => async dispatch => {
  dispatch({
    type: _types_productosTypes__WEBPACK_IMPORTED_MODULE_1__[/* LOADING */ "c"]
  });

  try {
    return fetch(`${_config_index__WEBPACK_IMPORTED_MODULE_0__[/* API */ "a"]}/producto?desde=1&limite=30`).then(res => res.json()).then(data => {
      dispatch({
        type: _types_productosTypes__WEBPACK_IMPORTED_MODULE_1__[/* TRAER_TODOS */ "f"],
        payload: data.data
      });
    });
  } catch (error) {
    dispatch({
      type: _types_productosTypes__WEBPACK_IMPORTED_MODULE_1__[/* ERROR */ "a"],
      payload: error
    });
  }
};
const traerPorId = id => async dispatch => {
  dispatch({
    type: _types_productosTypes__WEBPACK_IMPORTED_MODULE_1__[/* LOADING */ "c"]
  });

  try {
    return fetch(`${_config_index__WEBPACK_IMPORTED_MODULE_0__[/* API */ "a"]}producto/${id}`).then(res => res.json()).then(data => {
      dispatch({
        type: _types_productosTypes__WEBPACK_IMPORTED_MODULE_1__[/* TRAER_UNO */ "g"],
        payload: data
      });
    });
  } catch (error) {
    dispatch({
      type: _types_productosTypes__WEBPACK_IMPORTED_MODULE_1__[/* ERROR */ "a"],
      payload: error
    });
  }
};
const traerPromociones = () => async dispatch => {
  dispatch({
    type: _types_productosTypes__WEBPACK_IMPORTED_MODULE_1__[/* LOADING */ "c"]
  });

  try {
    return fetch(`${_config_index__WEBPACK_IMPORTED_MODULE_0__[/* API */ "a"]}/producto?desde=1&limite=8`).then(res => res.json()).then(data => {
      dispatch({
        type: _types_productosTypes__WEBPACK_IMPORTED_MODULE_1__[/* TRAER_PROMOCIONES */ "e"],
        payload: data.data
      });
    });
  } catch (error) {
    dispatch({
      type: _types_productosTypes__WEBPACK_IMPORTED_MODULE_1__[/* ERROR */ "a"],
      payload: error
    });
  }
};
const ordenarProductos = productosOrdenados => async dispatch => {
  dispatch({
    type: _types_productosTypes__WEBPACK_IMPORTED_MODULE_1__[/* LOADING */ "c"]
  });

  try {
    dispatch({
      type: _types_productosTypes__WEBPACK_IMPORTED_MODULE_1__[/* ORDENAR_PRODUCTOS */ "d"],
      payload: productosOrdenados
    });
  } catch (error) {
    dispatch({
      type: _types_productosTypes__WEBPACK_IMPORTED_MODULE_1__[/* ERROR */ "a"],
      payload: error
    });
  }
};
const filtrarProductos = url => async dispatch => {
  console.log('filtrando');
  console.log(url);
  dispatch({
    type: _types_productosTypes__WEBPACK_IMPORTED_MODULE_1__[/* LOADING */ "c"]
  });

  try {
    let urlFiltro = url.includes('buscar?busqueda') ? `productos/${url}` : `productos/filtro/${url}`;
    return fetch(`${_config_index__WEBPACK_IMPORTED_MODULE_0__[/* API */ "a"]}${urlFiltro}`).then(res => res.json()).then(data => {
      dispatch({
        type: _types_productosTypes__WEBPACK_IMPORTED_MODULE_1__[/* FILTRANDO */ "b"],
        payload: data.data
      });
    });
  } catch (error) {
    dispatch({
      type: _types_productosTypes__WEBPACK_IMPORTED_MODULE_1__[/* ERROR */ "a"],
      payload: error
    });
  }
};

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

/***/ "XOuL":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("HJQg");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


const Loader = props => {
  return __jsx("div", {
    className: "jsx-3824642466" + " " + "lds-ring"
  }, __jsx("div", {
    className: "jsx-3824642466"
  }), __jsx("div", {
    className: "jsx-3824642466"
  }), __jsx("div", {
    className: "jsx-3824642466"
  }), __jsx("div", {
    className: "jsx-3824642466"
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3824642466"
  }, [".lds-ring.jsx-3824642466{display:inline-block;position:relative;width:80px;height:80px;}", ".lds-ring.jsx-3824642466 div.jsx-3824642466{box-sizing:border-box;display:block;position:absolute;width:54px;height:54px;margin:8px;border:7px solid #fff;border-radius:50%;-webkit-animation:lds-ring-jsx-3824642466 1.2s cubic-bezier(0.5,0,0.5,1) infinite;animation:lds-ring-jsx-3824642466 1.2s cubic-bezier(0.5,0,0.5,1) infinite;border-color:#FFB347 transparent transparent transparent;}", ".lds-ring.jsx-3824642466 div.jsx-3824642466:nth-child(1){-webkit-animation-delay:-0.45s;animation-delay:-0.45s;}", ".lds-ring.jsx-3824642466 div.jsx-3824642466:nth-child(2){-webkit-animation-delay:-0.3s;animation-delay:-0.3s;}", ".lds-ring.jsx-3824642466 div.jsx-3824642466:nth-child(3){-webkit-animation-delay:-0.15s;animation-delay:-0.15s;}", "@-webkit-keyframes lds-ring-jsx-3824642466{0%{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}100%{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}", "@keyframes lds-ring-jsx-3824642466{0%{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}100%{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}"]));
};

/* harmony default export */ __webpack_exports__["a"] = (Loader);

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "YPbN":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"detalles__producto": "infoProducto_detalles__producto__2JajI",
	"nav__item": "infoProducto_nav__item__2Jwvy",
	"active": "infoProducto_active__2h4RZ",
	"sub__container": "infoProducto_sub__container__3frM_",
	"p": "infoProducto_p__21_wv"
};


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

/***/ "hCbx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _CardProducto_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("CI6Y");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("h74D");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store_actions_productosActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("TVVT");
/* harmony import */ var _Loader_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("XOuL");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const Promociones = props => {
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    getPromociones();
  }, []);

  const getPromociones = () => {
    if (props.promociones.length === 0) {
      props.traerPromociones();
    }
  };

  return __jsx("div", {
    className: "my-5"
  }, __jsx("h4", {
    className: "text-black"
  }, "Nuestras Promociones"), __jsx("div", {
    className: "row"
  }, props.loading ? __jsx(_Loader_index__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], null) : props.promociones.map(prd => __jsx("div", {
    key: prd.idProducto,
    className: "col-6 col-md-4 col-xl-3"
  }, __jsx(_CardProducto_index__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
    imagen: prd.foto,
    prd: prd
  })))));
};

const mapStateToProps = reducers => {
  return reducers.productosReducer;
};

/* harmony default export */ __webpack_exports__["a"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, _store_actions_productosActions__WEBPACK_IMPORTED_MODULE_3__)(Promociones));

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

/***/ "k2JI":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("xnum");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("rOcY");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Header = ({
  title
}) => {
  return __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, null, __jsx("title", null, title), __jsx("meta", {
    name: "theme-color",
    content: "#df8f0e"
  }), __jsx("link", {
    rel: "icon",
    href: `${_config_index__WEBPACK_IMPORTED_MODULE_2__[/* URL_CLOUD_STORAGE */ "c"]}/static/Perro.png`
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (Header);

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

/***/ "lZUM":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"descripcionProducto": "ProductoSingle_descripcionProducto__1RfPJ",
	"precios": "ProductoSingle_precios__1k4N4",
	"indicador__precio": "ProductoSingle_indicador__precio__S6-Yv",
	"valor__precio": "ProductoSingle_valor__precio__1sFdb",
	"indicador__cantidad": "ProductoSingle_indicador__cantidad__3gUyc",
	"titulo__indicadorCantidad": "ProductoSingle_titulo__indicadorCantidad__1KlYa",
	"row": "ProductoSingle_row__16PB_",
	"caja_cantidadKg": "ProductoSingle_caja_cantidadKg__1s5pC",
	"active": "ProductoSingle_active__24bo1",
	"input-group-prepend": "ProductoSingle_input-group-prepend__2WZL7",
	"input-group-append": "ProductoSingle_input-group-append__3ZFw1",
	"input-group-text": "ProductoSingle_input-group-text__GZ1bR",
	"input-group": "ProductoSingle_input-group__U1WNg"
};


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

/***/ "oL/c":
/***/ (function(module, exports) {

module.exports = require("reactstrap");

/***/ }),

/***/ "pRT7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return slug; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isMobile; });
/* harmony import */ var slugify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("06NB");
/* harmony import */ var slugify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(slugify__WEBPACK_IMPORTED_MODULE_0__);


function slug(name) {
  return slugify__WEBPACK_IMPORTED_MODULE_0___default()(name, {
    lower: true
  }).replace(/[^\w\-]+/g, '');
}

function isMobile() {
  if (window.innerWidth > 860) return false;
  return navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/BlackBerry/i) || window.innerWidth <= 860;
}



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
    src: foto,
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

/***/ "rOcY":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return API; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return PUBLIC_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return URL_CLOUD_STORAGE; });
const API = 'https://api.oliverpetshop.com.ar/'; //const PUBLIC_URL = 'http://localhost:3000';

const PUBLIC_URL = 'https://developers.oliverpetshop.com.ar';
const URL_CLOUD_STORAGE = 'https://storage.googleapis.com/web-oliver';


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

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ })

/******/ });