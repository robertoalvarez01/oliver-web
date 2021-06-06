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
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ({

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
	"imgProfile": "Navbar_imgProfile__jeFPI",
	"btn_carrito": "Navbar_btn_carrito__2mZY8",
	"carrito_mobile": "Navbar_carrito_mobile__2IYef",
	"icon_menu": "Navbar_icon_menu__2CorA",
	"img_menu": "Navbar_img_menu__3sk-n",
	"menu__collapsed": "Navbar_menu__collapsed__3ww75",
	"form_search_menu": "Navbar_form_search_menu__1b8gM",
	"wrapper__navbar": "Navbar_wrapper__navbar__14EZG",
	"lupa_buscador": "Navbar_lupa_buscador__3_vvJ",
	"input-group-text": "Navbar_input-group-text__2_pHE",
	"search_mobile": "Navbar_search_mobile__1klW1",
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
	"showCollapsed": "Navbar_showCollapsed__2N6Tr",
	"sinBorder": "Navbar_sinBorder__2nVJZ"
};


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

/***/ "34k4":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"ordenarProductos": "Productos_ordenarProductos__2bm6Q",
	"select_ordenar": "Productos_select_ordenar__3aC8E",
	"boton_filtrar_mobile": "Productos_boton_filtrar_mobile__2Osjo",
	"label__filtro_busqueda": "Productos_label__filtro_busqueda__3cbA-",
	"item_filtro_busqueda": "Productos_item_filtro_busqueda__3wdWH",
	"text-mutedd": "Productos_text-mutedd__3wjv7"
};


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

/***/ 8:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("YRs9");


/***/ }),

/***/ "CBiN":
/***/ (function(module, exports) {

module.exports = require("sweetalert2");

/***/ }),

/***/ "CI6Y":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./src/components/CardProducto/CardProducto.module.css
var CardProducto_module = __webpack_require__("QUvA");
var CardProducto_module_default = /*#__PURE__*/__webpack_require__.n(CardProducto_module);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: ./helpers/index.js
var helpers = __webpack_require__("pRT7");

// EXTERNAL MODULE: ./config/index.js
var config = __webpack_require__("rOcY");

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");
var router_default = /*#__PURE__*/__webpack_require__.n(router_);

// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__("HJQg");
var style_default = /*#__PURE__*/__webpack_require__.n(style_);

// CONCATENATED MODULE: ./src/components/Loader/ImagenLoader.js

var __jsx = external_react_default.a.createElement;


const ImagenLoader = () => {
  return __jsx("div", {
    className: "jsx-3911565700" + " " + "text-center"
  }, __jsx("div", {
    className: "jsx-3911565700" + " " + "lds-ellipsis"
  }, __jsx("div", {
    className: "jsx-3911565700"
  }), __jsx("div", {
    className: "jsx-3911565700"
  }), __jsx("div", {
    className: "jsx-3911565700"
  }), __jsx("div", {
    className: "jsx-3911565700"
  })), __jsx(style_default.a, {
    id: "3911565700"
  }, [".lds-ellipsis.jsx-3911565700{display:inline-block;position:relative;width:80px;height:80px;}", ".lds-ellipsis.jsx-3911565700 div.jsx-3911565700{position:absolute;top:33px;width:13px;height:13px;border-radius:50%;background:#FFB347;-webkit-animation-timing-function:cubic-bezier(0,1,1,0);animation-timing-function:cubic-bezier(0,1,1,0);}", ".lds-ellipsis.jsx-3911565700 div.jsx-3911565700:nth-child(1){left:8px;-webkit-animation:lds-ellipsis1-jsx-3911565700 0.6s infinite;animation:lds-ellipsis1-jsx-3911565700 0.6s infinite;}", ".lds-ellipsis.jsx-3911565700 div.jsx-3911565700:nth-child(2){left:8px;-webkit-animation:lds-ellipsis2-jsx-3911565700 0.6s infinite;animation:lds-ellipsis2-jsx-3911565700 0.6s infinite;}", ".lds-ellipsis.jsx-3911565700 div.jsx-3911565700:nth-child(3){left:32px;-webkit-animation:lds-ellipsis2-jsx-3911565700 0.6s infinite;animation:lds-ellipsis2-jsx-3911565700 0.6s infinite;}", ".lds-ellipsis.jsx-3911565700 div.jsx-3911565700:nth-child(4){left:56px;-webkit-animation:lds-ellipsis3-jsx-3911565700 0.6s infinite;animation:lds-ellipsis3-jsx-3911565700 0.6s infinite;}", "@-webkit-keyframes lds-ellipsis1-jsx-3911565700{0%{-webkit-transform:scale(0);-ms-transform:scale(0);transform:scale(0);}100%{-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);}}", "@keyframes lds-ellipsis1-jsx-3911565700{0%{-webkit-transform:scale(0);-ms-transform:scale(0);transform:scale(0);}100%{-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);}}", "@-webkit-keyframes lds-ellipsis3-jsx-3911565700{0%{-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);}100%{-webkit-transform:scale(0);-ms-transform:scale(0);transform:scale(0);}}", "@keyframes lds-ellipsis3-jsx-3911565700{0%{-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);}100%{-webkit-transform:scale(0);-ms-transform:scale(0);transform:scale(0);}}", "@-webkit-keyframes lds-ellipsis2-jsx-3911565700{0%{-webkit-transform:translate(0,0);-ms-transform:translate(0,0);transform:translate(0,0);}100%{-webkit-transform:translate(24px,0);-ms-transform:translate(24px,0);transform:translate(24px,0);}}", "@keyframes lds-ellipsis2-jsx-3911565700{0%{-webkit-transform:translate(0,0);-ms-transform:translate(0,0);transform:translate(0,0);}100%{-webkit-transform:translate(24px,0);-ms-transform:translate(24px,0);transform:translate(24px,0);}}"]));
};

/* harmony default export */ var Loader_ImagenLoader = (ImagenLoader);
// CONCATENATED MODULE: ./src/components/CardProducto/index.js
var CardProducto_jsx = external_react_default.a.createElement;








const CardProducto = ({
  imagen,
  prd
}) => {
  const {
    0: isProductoDetalle,
    1: setIsProductoDetalle
  } = Object(external_react_["useState"])(false);
  const {
    0: loadingImagen,
    1: setLoadingImagen
  } = Object(external_react_["useState"])(true);
  Object(external_react_["useEffect"])(() => {
    const {
      router
    } = router_default.a;

    if (router.route == '/producto/[...producto]') {
      setIsProductoDetalle(true);
    }
  }, []);

  const procesarNombre = nombre => {
    let nombreProcesado = nombre;

    if (Object(helpers["b" /* isMobile */])()) {
      if (nombreProcesado.length > 20) {
        nombreProcesado = nombre.substring(0, 22) + '...';
      }
    } else {
      if (nombreProcesado.length > 45) {
        nombreProcesado = nombre.substring(0, 40) + '...';
      }
    }

    return nombreProcesado;
  };

  const handleLoad = e => {
    let imagen = e.target;
    setLoadingImagen(false);
    imagen.classList.remove('d-none');
  };

  return !isProductoDetalle ? CardProducto_jsx(link_default.a, {
    href: `${config["d" /* PUBLIC_URL */]}/producto/${Object(helpers["c" /* slug */])(prd.producto)}/${prd.idProducto}`
  }, CardProducto_jsx("a", null, CardProducto_jsx("div", {
    className: CardProducto_module_default.a.container__producto + ' ' + `my-3`
  }, CardProducto_jsx("section", {
    className: CardProducto_module_default.a.header__card
  }, CardProducto_jsx("img", {
    src: imagen,
    alt: "prd",
    className: CardProducto_module_default.a.img + ' d-none',
    onLoad: handleLoad
  }), loadingImagen ? CardProducto_jsx(Loader_ImagenLoader, null) : null), CardProducto_jsx("section", {
    className: CardProducto_module_default.a.body__card
  }, CardProducto_jsx("span", {
    className: "d-block text-muted"
  }, prd.marca), CardProducto_jsx("h6", {
    className: CardProducto_module_default.a.nombre__producto + ' ' + `text-muted`
  }, procesarNombre(prd.producto)), prd.peso != null ? CardProducto_jsx("span", {
    className: CardProducto_module_default.a.cantidad + ` d-none`
  }, prd.peso, " KG") : null, CardProducto_jsx("h3", {
    className: CardProducto_module_default.a.precio + ' ' + `text-black`
  }, "$", prd.precioFinal)), prd.descuento ? CardProducto_jsx("span", {
    className: CardProducto_module_default.a.label__descuento + ' ' + `bg-red`
  }, prd.descuento, "% Off") : null))) : CardProducto_jsx("a", {
    href: `${config["d" /* PUBLIC_URL */]}/producto/${Object(helpers["c" /* slug */])(prd.producto)}/${prd.idProducto}`
  }, CardProducto_jsx("div", {
    className: CardProducto_module_default.a.container__producto + ' ' + `my-3`
  }, CardProducto_jsx("section", {
    className: CardProducto_module_default.a.header__card
  }, CardProducto_jsx("img", {
    src: imagen,
    alt: "prd",
    className: CardProducto_module_default.a.img + ' d-none',
    onLoad: handleLoad
  }), loadingImagen ? CardProducto_jsx(Loader_ImagenLoader, null) : null), CardProducto_jsx("section", {
    className: CardProducto_module_default.a.body__card
  }, CardProducto_jsx("span", {
    className: CardProducto_module_default.a.label__marca + ' ' + `d-block text-muted`
  }, prd.marca), CardProducto_jsx("h6", {
    className: CardProducto_module_default.a.nombre__producto + ' ' + `text-muted`
  }, procesarNombre(prd.producto)), CardProducto_jsx("span", {
    className: CardProducto_module_default.a.cantidad + ` d-none`
  }, prd.peso, " KG"), CardProducto_jsx("h3", {
    className: CardProducto_module_default.a.precio + ' ' + `text-black`
  }, "$", prd.precioFinal)), prd.descuento ? CardProducto_jsx("span", {
    className: CardProducto_module_default.a.label__descuento + ' ' + `bg-red`
  }, prd.descuento, "% Off") : null));
};

/* harmony default export */ var components_CardProducto = __webpack_exports__["a"] = (CardProducto);

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

/***/ "LwYX":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return TRAER_TODOS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return TRAER_UNO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return LOADING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return TRAER_PROMOCIONES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return ORDENAR_PRODUCTOS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return FILTRANDO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return LOADING_MAS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return TRAER_MAS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return TRAER_OFERTAS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return APLICAR_FILTRO_BUSCADOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return APLICAR_FILTRO_SUBCATEGORIA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return APLICAR_FILTRO_ORDEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return APLICAR_FILTRO_MARCA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return APLICAR_FILTRO_CATEGORIA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return ELIMINAR_FILTRO_BUSCADOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return ELIMINAR_FILTRO_SUBCATEGORIA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return ELIMINAR_FILTRO_ORDEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return ELIMINAR_FILTRO_MARCA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return ELIMINAR_FILTRO_CATEGORIA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return PRODUCTOS_RESTABLECER_FILTROS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return PRODUCTOS_PAGINACION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return PRODUCTOS_SIN_RESULTADO; });
const TRAER_TODOS = 'producto_traer_todos';
const LOADING = 'producto_loading';
const ERROR = 'producto_error';
const TRAER_PROMOCIONES = 'producto_traer_promociones';
const ORDENAR_PRODUCTOS = 'producto_ordenarproductos';
const FILTRANDO = 'producto_filtrando';
const TRAER_UNO = 'producto_traeruno';
const LOADING_MAS = 'producto_loading_mas';
const TRAER_MAS = 'producto_traer_mas';
const TRAER_OFERTAS = 'producto_traer_ofertas';
const APLICAR_FILTRO_CATEGORIA = 'producto_filtro_categoria';
const APLICAR_FILTRO_SUBCATEGORIA = 'producto_filtro_subcategoria';
const APLICAR_FILTRO_MARCA = 'producto_filtro_marca';
const APLICAR_FILTRO_BUSCADOR = 'producto_filtro_buscador';
const APLICAR_FILTRO_ORDEN = 'producto_filtro_orden';
const ELIMINAR_FILTRO_CATEGORIA = 'producto_eliminar_filtro_categoria';
const ELIMINAR_FILTRO_SUBCATEGORIA = 'producto_eliminar_filtro_subcategoria';
const ELIMINAR_FILTRO_MARCA = 'producto_eliminar_filtro_marca';
const ELIMINAR_FILTRO_BUSCADOR = 'producto_eliminar_filtro_buscador';
const ELIMINAR_FILTRO_ORDEN = 'producto_eliminar_filtro_orden';
const PRODUCTOS_RESTABLECER_FILTROS = 'productos_restablecer_filtros';
const PRODUCTOS_PAGINACION = 'productos_paginacion';
const PRODUCTOS_SIN_RESULTADO = 'productos_sin_resultado';


/***/ }),

/***/ "No/t":
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-solid-svg-icons");

/***/ }),

/***/ "Osoz":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "PsAh":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"filtros__contanier": "Filtro_filtros__contanier__3knXf",
	"show": "Filtro_show__1Rj5d",
	"btn_close_filtro": "Filtro_btn_close_filtro__37rTH",
	"rotar": "Filtro_rotar__2UEYw",
	"lista": "Filtro_lista__3_b9b",
	"listaMarca": "Filtro_listaMarca__2ZCr3",
	"item_filtro": "Filtro_item_filtro__3xqSt",
	"active": "Filtro_active__32lB0",
	"sinBorderBottom": "Filtro_sinBorderBottom__cF6G2",
	"icon_close_filtro": "Filtro_icon_close_filtro__1xlv5",
	"cerrar_filtro_mobile": "Filtro_cerrar_filtro_mobile__1SKrQ",
	"titulo_filtros": "Filtro_titulo_filtros__2QgvL",
	"boton": "Filtro_boton__3kHsa",
	"show_filtros": "Filtro_show_filtros__2D1CA"
};


/***/ }),

/***/ "QUvA":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container__producto": "CardProducto_container__producto__3ZzRa",
	"header__card": "CardProducto_header__card__2snWG",
	"img": "CardProducto_img__2JjZn",
	"body__card": "CardProducto_body__card__2yHOq",
	"precio": "CardProducto_precio__3WgOa",
	"cantidad": "CardProducto_cantidad__M84Dc",
	"label__descuento": "CardProducto_label__descuento__1fclU",
	"nombre__producto": "CardProducto_nombre__producto__3yzZP",
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "traerProductos", function() { return traerProductos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "traerMas", function() { return traerMas; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "traerPorId", function() { return traerPorId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "traerPromociones", function() { return traerPromociones; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ordenarProductos", function() { return ordenarProductos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "aplicarFiltro", function() { return aplicarFiltro; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "quitarFiltro", function() { return quitarFiltro; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "restablecerFiltros", function() { return restablecerFiltros; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updatePaginacion", function() { return updatePaginacion; });
/* harmony import */ var _config_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("rOcY");
/* harmony import */ var _helpers_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("pRT7");
/* harmony import */ var _types_productosTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("LwYX");



const traerProductos = () => async (dispatch, getState) => {
  dispatch({
    type: _types_productosTypes__WEBPACK_IMPORTED_MODULE_2__[/* LOADING */ "m"]
  });

  try {
    //obtengo el estado actualizado de los filtros
    const {
      filtrando,
      filtros: {
        categoria,
        subcategoria,
        marca,
        search,
        orden
      },
      paginacion: {
        desde,
        limiteMobile,
        limiteDesktop
      }
    } = getState().productosReducer;
    let url = `${_config_index__WEBPACK_IMPORTED_MODULE_0__[/* API */ "a"]}`;

    if (!filtrando) {
      url += `/producto?desde=${desde}&limite=${Object(_helpers_index__WEBPACK_IMPORTED_MODULE_1__[/* isMobile */ "b"])() ? limiteMobile : limiteDesktop}`;
    } else {
      if (search.trim() !== "") {
        url += `/productos/buscar?busqueda=${search}&desde=${desde}&limite=${Object(_helpers_index__WEBPACK_IMPORTED_MODULE_1__[/* isMobile */ "b"])() ? limiteMobile : limiteDesktop}`;
      } else {
        url += `/productos/filtro/filtrar?desde=${desde}&limite=${Object(_helpers_index__WEBPACK_IMPORTED_MODULE_1__[/* isMobile */ "b"])() ? limiteMobile : limiteDesktop}&`;

        if (categoria) {
          url += `categoria=${categoria}&`;
        }

        if (subcategoria) {
          url += `subcategoria=${subcategoria}&`;
        }

        if (marca) {
          url += `marca=${marca}`;
        }
      }
    } // console.log(url);


    return fetch(url).then(res => res.json()).then(data => {
      dispatch({
        type: _types_productosTypes__WEBPACK_IMPORTED_MODULE_2__[/* TRAER_TODOS */ "v"],
        payload: data.data
      });
    });
  } catch (error) {
    dispatch({
      type: _types_productosTypes__WEBPACK_IMPORTED_MODULE_2__[/* ERROR */ "k"],
      payload: error
    });
  }
};
const traerMas = () => async (dispatch, getState) => {
  dispatch({
    type: _types_productosTypes__WEBPACK_IMPORTED_MODULE_2__[/* LOADING_MAS */ "n"]
  });

  try {
    //obtengo el estado actualizado de los filtros
    const {
      productos,
      filtrando,
      filtros: {
        categoria,
        subcategoria,
        marca,
        search,
        orden
      },
      paginacion: {
        desde,
        limiteMobile,
        limiteDesktop
      }
    } = getState().productosReducer;
    let url = `${_config_index__WEBPACK_IMPORTED_MODULE_0__[/* API */ "a"]}`;

    if (!filtrando) {
      url += `/producto?desde=${desde}&limite=${Object(_helpers_index__WEBPACK_IMPORTED_MODULE_1__[/* isMobile */ "b"])() ? limiteMobile : limiteDesktop}`;
    } else {
      if (search.trim() !== "") {
        url += `/productos/buscar?busqueda=${search}&desde=${desde}&limite=${Object(_helpers_index__WEBPACK_IMPORTED_MODULE_1__[/* isMobile */ "b"])() ? limiteMobile : limiteDesktop}`;
      } else {
        url += `/productos/filtro/filtrar?desde=${desde}&limite=${Object(_helpers_index__WEBPACK_IMPORTED_MODULE_1__[/* isMobile */ "b"])() ? limiteMobile : limiteDesktop}&`;

        if (categoria) {
          url += `categoria=${categoria}&`;
        }

        if (subcategoria) {
          url += `subcategoria=${subcategoria}&`;
        }

        if (marca) {
          url += `marca=${marca}`;
        }
      }
    }

    return fetch(url).then(res => res.json()).then(data => {
      if (data.data.length === 0) {
        dispatch({
          type: _types_productosTypes__WEBPACK_IMPORTED_MODULE_2__[/* PRODUCTOS_SIN_RESULTADO */ "r"]
        });
        return;
      }

      let updateproductos = [...productos, ...data.data];
      dispatch({
        type: _types_productosTypes__WEBPACK_IMPORTED_MODULE_2__[/* TRAER_MAS */ "s"],
        payload: updateproductos
      });
    });
  } catch (error) {
    dispatch({
      type: _types_productosTypes__WEBPACK_IMPORTED_MODULE_2__[/* ERROR */ "k"],
      payload: error
    });
  }
};
const traerPorId = id => async dispatch => {
  dispatch({
    type: _types_productosTypes__WEBPACK_IMPORTED_MODULE_2__[/* LOADING */ "m"]
  });

  try {
    return fetch(`${_config_index__WEBPACK_IMPORTED_MODULE_0__[/* API */ "a"]}/producto/${id}`).then(res => res.json()).then(data => {
      dispatch({
        type: _types_productosTypes__WEBPACK_IMPORTED_MODULE_2__[/* TRAER_UNO */ "w"],
        payload: data
      });
    });
  } catch (error) {
    dispatch({
      type: _types_productosTypes__WEBPACK_IMPORTED_MODULE_2__[/* ERROR */ "k"],
      payload: error
    });
  }
};
const traerPromociones = () => async dispatch => {
  dispatch({
    type: _types_productosTypes__WEBPACK_IMPORTED_MODULE_2__[/* LOADING */ "m"]
  });

  try {
    let url = `${_config_index__WEBPACK_IMPORTED_MODULE_0__[/* API */ "a"]}/subproductos/ofertas?desde=0&limite=9`;

    if (Object(_helpers_index__WEBPACK_IMPORTED_MODULE_1__[/* isMobile */ "b"])()) {
      url = `${_config_index__WEBPACK_IMPORTED_MODULE_0__[/* API */ "a"]}/subproductos/ofertas?desde=0&limite=6`;
    }

    return fetch(url).then(res => res.json()).then(data => {
      dispatch({
        type: _types_productosTypes__WEBPACK_IMPORTED_MODULE_2__[/* TRAER_OFERTAS */ "t"],
        payload: data.data
      });
    });
  } catch (error) {
    dispatch({
      type: _types_productosTypes__WEBPACK_IMPORTED_MODULE_2__[/* ERROR */ "k"],
      payload: error.message
    });
  }
};
const ordenarProductos = productosOrdenados => async dispatch => {
  dispatch({
    type: _types_productosTypes__WEBPACK_IMPORTED_MODULE_2__[/* LOADING */ "m"]
  });

  try {
    dispatch({
      type: _types_productosTypes__WEBPACK_IMPORTED_MODULE_2__[/* ORDENAR_PRODUCTOS */ "o"],
      payload: productosOrdenados
    });
  } catch (error) {
    dispatch({
      type: _types_productosTypes__WEBPACK_IMPORTED_MODULE_2__[/* ERROR */ "k"],
      payload: error
    });
  }
};
const aplicarFiltro = (tipo, valor) => dispatch => {
  switch (tipo) {
    case 'categoria':
      dispatch({
        type: _types_productosTypes__WEBPACK_IMPORTED_MODULE_2__[/* APLICAR_FILTRO_CATEGORIA */ "b"],
        payload: valor
      });
      break;

    case 'subcategoria':
      dispatch({
        type: _types_productosTypes__WEBPACK_IMPORTED_MODULE_2__[/* APLICAR_FILTRO_SUBCATEGORIA */ "e"],
        payload: valor
      });
      break;

    case 'marca':
      dispatch({
        type: _types_productosTypes__WEBPACK_IMPORTED_MODULE_2__[/* APLICAR_FILTRO_MARCA */ "c"],
        payload: valor
      });
      break;

    case 'search':
      dispatch({
        type: _types_productosTypes__WEBPACK_IMPORTED_MODULE_2__[/* APLICAR_FILTRO_BUSCADOR */ "a"],
        payload: valor
      });
      break;

    case 'orden':
      dispatch({
        type: _types_productosTypes__WEBPACK_IMPORTED_MODULE_2__[/* APLICAR_FILTRO_ORDEN */ "d"],
        payload: valor
      });
      break;

    default:
      break;
  }
};
const quitarFiltro = tipo => (dispatch, getState) => {
  const {
    filtros: {
      categoria,
      subcategoria,
      marca,
      search,
      orden
    }
  } = getState().productosReducer;

  switch (tipo) {
    case 'categoria':
      if (!subcategoria && !marca) {
        dispatch({
          type: _types_productosTypes__WEBPACK_IMPORTED_MODULE_2__[/* PRODUCTOS_RESTABLECER_FILTROS */ "q"]
        });
      } else {
        dispatch({
          type: _types_productosTypes__WEBPACK_IMPORTED_MODULE_2__[/* ELIMINAR_FILTRO_CATEGORIA */ "g"]
        });
      }

      break;

    case 'subcategoria':
      if (!categoria && !marca) {
        dispatch({
          type: _types_productosTypes__WEBPACK_IMPORTED_MODULE_2__[/* PRODUCTOS_RESTABLECER_FILTROS */ "q"]
        });
      } else {
        dispatch({
          type: _types_productosTypes__WEBPACK_IMPORTED_MODULE_2__[/* ELIMINAR_FILTRO_SUBCATEGORIA */ "j"]
        });
      }

      break;

    case 'marca':
      if (!categoria && !subcategoria) {
        dispatch({
          type: _types_productosTypes__WEBPACK_IMPORTED_MODULE_2__[/* PRODUCTOS_RESTABLECER_FILTROS */ "q"]
        });
      } else {
        dispatch({
          type: _types_productosTypes__WEBPACK_IMPORTED_MODULE_2__[/* ELIMINAR_FILTRO_MARCA */ "h"]
        });
      }

      break;

    case 'buscador':
      dispatch({
        type: _types_productosTypes__WEBPACK_IMPORTED_MODULE_2__[/* ELIMINAR_FILTRO_BUSCADOR */ "f"]
      });
      break;

    case 'orden':
      dispatch({
        type: _types_productosTypes__WEBPACK_IMPORTED_MODULE_2__[/* ELIMINAR_FILTRO_ORDEN */ "i"]
      });
      break;

    default:
      break;
  }
};
const restablecerFiltros = () => dispatch => {
  dispatch({
    type: _types_productosTypes__WEBPACK_IMPORTED_MODULE_2__[/* PRODUCTOS_RESTABLECER_FILTROS */ "q"]
  });
};
const updatePaginacion = () => (dispatch, getState) => {
  const {
    paginacion
  } = getState().productosReducer;
  let desdeUpdated = Object(_helpers_index__WEBPACK_IMPORTED_MODULE_1__[/* isMobile */ "b"])() ? paginacion.desde + paginacion.limiteMobile : paginacion.desde + paginacion.limiteDesktop;
  dispatch({
    type: _types_productosTypes__WEBPACK_IMPORTED_MODULE_2__[/* PRODUCTOS_PAGINACION */ "p"],
    payload: desdeUpdated
  });
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

/***/ "WkNE":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("rOcY");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const BotonWhatsapp = () => {
  const handleClick = () => {
    window.location.assign(`https://api.whatsapp.com/send?phone=+542304347008&text=Consulta desde pagina web`);
  };

  return __jsx("div", {
    className: "btn-wpp",
    onClick: handleClick
  }, __jsx("img", {
    src: `${_config__WEBPACK_IMPORTED_MODULE_1__[/* URL_CLOUD_STORAGE */ "e"]}/assets/wpp.png`,
    className: "img-fluid",
    alt: "WhatsApp de Oliver PetShop"
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (BotonWhatsapp);

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

/***/ "YRs9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// NAMESPACE OBJECT: ./store/actions/subcategoriasAction.js
var subcategoriasAction_namespaceObject = {};
__webpack_require__.r(subcategoriasAction_namespaceObject);
__webpack_require__.d(subcategoriasAction_namespaceObject, "traerTodas", function() { return traerTodas; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./src/components/Head.js
var Head = __webpack_require__("k2JI");

// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__("HJQg");
var style_default = /*#__PURE__*/__webpack_require__.n(style_);

// EXTERNAL MODULE: ./src/components/CardProducto/index.js + 1 modules
var CardProducto = __webpack_require__("CI6Y");

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: ./store/actions/productosActions.js
var productosActions = __webpack_require__("TVVT");

// EXTERNAL MODULE: ./src/components/Productos/Productos.module.css
var Productos_module = __webpack_require__("34k4");
var Productos_module_default = /*#__PURE__*/__webpack_require__.n(Productos_module);

// EXTERNAL MODULE: ./src/components/Loader/index.js
var Loader = __webpack_require__("XOuL");

// EXTERNAL MODULE: external "@fortawesome/free-solid-svg-icons"
var free_solid_svg_icons_ = __webpack_require__("No/t");

// EXTERNAL MODULE: external "@fortawesome/react-fontawesome"
var react_fontawesome_ = __webpack_require__("uhWA");

// EXTERNAL MODULE: ./src/components/Filtro/Filtro.module.css
var Filtro_module = __webpack_require__("PsAh");
var Filtro_module_default = /*#__PURE__*/__webpack_require__.n(Filtro_module);

// EXTERNAL MODULE: ./helpers/index.js
var helpers = __webpack_require__("pRT7");

// EXTERNAL MODULE: ./src/components/Navbar/Navbar.module.css
var Navbar_module = __webpack_require__("0JKX");
var Navbar_module_default = /*#__PURE__*/__webpack_require__.n(Navbar_module);

// CONCATENATED MODULE: ./src/components/Productos/index.js

var __jsx = external_react_default.a.createElement;












const Swal = __webpack_require__("CBiN");

const Productos = props => {
  const {
    filtros,
    paginacion,
    filtrando
  } = props;
  const {
    0: filtro,
    1: setFiltro
  } = Object(external_react_["useState"])(''); //loop para mostrar filtro en pantalla

  Object(external_react_["useEffect"])(() => {
    if (props.location !== '/productos') {
      if (props.query.search) {
        mostrarSolapaFiltro(props.query.search);
      } else {
        mostrarSolapaFiltro(props.query.index[0]);
      }
    } else {
      getProductos();
    }
  }, []); //loop para paginacion

  Object(external_react_["useEffect"])(() => {
    if (paginacion.desde > 0) {
      props.traerMas();
    }
  }, [paginacion]);
  Object(external_react_["useEffect"])(() => {
    // veo si se esta filtrando para no hacer request innecesarios
    if (filtrando) {
      getProductos();
      return;
    }
  }, [filtros]);

  const getProductos = async () => {
    try {
      await props.traerProductos();
    } catch (error) {
      console.log(error);
    }
  };

  const cargarMas = () => {
    props.updatePaginacion();
  };

  const showFiltrosMobile = () => {
    if (document.getElementsByClassName(Navbar_module_default.a.menu__collapsed)[0].classList.contains(Navbar_module_default.a.showCollapsed)) {
      document.getElementsByClassName(Navbar_module_default.a.menu__collapsed)[0].classList.remove(Navbar_module_default.a.showCollapsed);
    }

    document.getElementsByClassName('Filtro_filtros__contanier__3knXf')[0].classList.add(Filtro_module_default.a.show_filtros);
  };

  const mostrarSolapaFiltro = filtro => {
    setFiltro(filtro);
  };

  const handleChangeOrdenProductos = event => {
    if (event.target.value === 'asc') {
      props.productos.sort((a, b) => {
        if (a.precioUnidad > b.precioUnidad) return 1;
        if (a.precioUnidad < b.precioUnidad) return -1;
        return 0;
      });
    } else {
      props.productos.sort((a, b) => {
        if (a.precioUnidad < b.precioUnidad) return 1;
        if (a.precioUnidad > b.precioUnidad) return -1;
        return 0;
      });
    }

    ;
    return props.ordenarProductos(props.productos);
  }; //ocultar la chapita que indica el nombre del filtro activo cuando se restablecen los filtros.


  if (props.location == '/productos' && filtro != '') {
    setFiltro('');
  }

  const renderBotonCargarMas = () => {
    if (Object(helpers["b" /* isMobile */])()) {
      return __jsx("button", {
        className: `boton bg-yellow btn-vermas ${props.productos.length < paginacion.limiteMobile ? 'd-none' : ''}`,
        onClick: cargarMas
      }, props.loading_mas ? 'Obteniendo productos...' : 'Cargar más');
    }

    return __jsx("button", {
      className: `boton bg-yellow btn-vermas ${props.productos.length < paginacion.limiteDesktop ? 'd-none' : ''}`,
      onClick: cargarMas
    }, props.loading_mas ? 'Obteniendo productos...' : 'Cargar más');
  };

  return __jsx(external_react_default.a.Fragment, null, props.loading || !props.productos ? __jsx("div", {
    className: "jsx-3898475978" + " " + "col-12 text-center"
  }, __jsx(Loader["a" /* default */], null)) : __jsx(external_react_default.a.Fragment, null, filtro !== '' && props.filtrando ? __jsx("span", {
    id: "label__filtro-busqueda",
    className: "jsx-3898475978" + " " + (Productos_module_default.a.label__filtro_busqueda || "")
  }, __jsx(react_fontawesome_["FontAwesomeIcon"], {
    icon: free_solid_svg_icons_["faSearch"]
  }), __jsx("span", {
    className: "jsx-3898475978" + " " + (Productos_module_default.a.item_filtro_busqueda || "")
  }, __jsx("span", {
    id: "valor-busqueda",
    className: "jsx-3898475978" + " " + "text-mutedd"
  }, filtro))) : null, __jsx("div", {
    style: {
      padding: '0px 15px'
    },
    className: "jsx-3898475978" + " " + "row justify-content-between my-2 align-items-center"
  }, __jsx("span", {
    className: "jsx-3898475978" + " " + "text-muted"
  }, __jsx("b", {
    className: "jsx-3898475978" + " " + "txt-yellow"
  }, props.productos.length), " productos encontrados"), __jsx("div", {
    className: "jsx-3898475978" + " " + (Productos_module_default.a.ordenarProductos + ' ' + `d-flex align-items-center` || false)
  }, __jsx("span", {
    className: "jsx-3898475978" + " " + "txt-yellow text-bold mr-2"
  }, "Ordenar por: "), __jsx("select", {
    onChange: handleChangeOrdenProductos,
    className: "jsx-3898475978" + " " + (Productos_module_default.a.select_ordenar || "")
  }, __jsx("option", {
    value: "desc",
    className: "jsx-3898475978"
  }, "Mayor precio"), __jsx("option", {
    value: "asc",
    className: "jsx-3898475978"
  }, "Menor precio"))), __jsx("button", {
    onClick: showFiltrosMobile,
    className: "jsx-3898475978" + " " + (`boton bg-yellow mt-3 d-none` + ' ' + Productos_module_default.a.boton_filtrar_mobile || false)
  }, "Filtrar")), __jsx("div", {
    className: "jsx-3898475978" + " " + "row feedProductos"
  }, !props.productos ? null : props.productos.map(prd => __jsx("div", {
    key: prd.idProducto,
    className: "jsx-3898475978" + " " + "col-6 col-md-3"
  }, __jsx(CardProducto["a" /* default */], {
    imagen: prd.foto,
    prd: prd
  }))), props.sinResultados ? __jsx("div", {
    style: {
      height: '50px'
    },
    className: "jsx-3898475978" + " " + "alert alert-warning text-center w-100"
  }, "No se encontraron m\xE1s resultados") : renderBotonCargarMas())), __jsx(style_default.a, {
    id: "3898475978"
  }, [".feedProductos.jsx-3898475978{height:75vh;overflow-y:scroll;}", ".btn-vermas.jsx-3898475978{position:relative;height:40px;}", ".feedProductos.jsx-3898475978::-webkit-scrollbar{width:8px;height:5px;}", ".feedProductos.jsx-3898475978::-webkit-scrollbar-thumb{background:#FFB347;border-radius:4px;}", ".feedProductos.jsx-3898475978::-webkit-scrollbar-thumb.jsx-3898475978:hover{background:#b3b3b3;box-shadow:0 0 2px 1px rgba(0,0,0,0.2);}", "@media(max-width:768px){.feedProductos.jsx-3898475978{height:68vh;overflow-y:scroll;}.feedProductos.jsx-3898475978::-webkit-scrollbar{width:8px;height:10px;}}"]));
};

const mapStateToProps = reducers => {
  return reducers.productosReducer;
};

/* harmony default export */ var components_Productos = (Object(external_react_redux_["connect"])(mapStateToProps, productosActions)(Productos));
// EXTERNAL MODULE: ./store/actions/marcasActions.js
var marcasActions = __webpack_require__("kVRI");

// EXTERNAL MODULE: ./store/actions/categoriasAction.js
var categoriasAction = __webpack_require__("rfcl");

// EXTERNAL MODULE: ./config/index.js
var config = __webpack_require__("rOcY");

// EXTERNAL MODULE: ./store/types/subcategoriasTypes.js
var subcategoriasTypes = __webpack_require__("o9Kd");

// CONCATENATED MODULE: ./store/actions/subcategoriasAction.js


const traerTodas = () => async dispatch => {
  dispatch({
    type: subcategoriasTypes["b" /* LOADING */]
  });

  try {
    return fetch(`${config["a" /* API */]}/subcategoria`).then(res => res.json()).then(data => {
      const subcategorias = data.data;
      dispatch({
        type: subcategoriasTypes["c" /* TRAER_TODAS */],
        payload: subcategorias
      });
    }).catch(err => {
      dispatch({
        type: subcategoriasTypes["a" /* ERROR */],
        payload: err
      });
    });
  } catch (error) {
    dispatch({
      type: subcategoriasTypes["a" /* ERROR */],
      payload: error
    });
  }
};
// CONCATENATED MODULE: ./src/components/Filtro/index.js
var Filtro_jsx = external_react_default.a.createElement;










const {
  traerTodas: marcasTraerTodas
} = marcasActions;
const {
  aplicarFiltro,
  quitarFiltro,
  restablecerFiltros,
  traerProductos
} = productosActions;
const {
  traerTodas: categoriasTraerTodas
} = categoriasAction;
const {
  traerTodas: subcategoriaTraerTodas
} = subcategoriasAction_namespaceObject;

const Filtro = props => {
  //loop de efecto para ejecutar solo una vez cuando el componente se monte en el caso de que se este filtrando directo desde la url
  Object(external_react_["useEffect"])(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      if (props.marcasReducer.marcas.length === 0) {
        await props.marcasTraerTodas();
      }

      if (props.categoriasReducer.categorias.length === 0) {
        await props.categoriasTraerTodas();
      }

      if (props.subcategoriaReducer.subcategorias.length === 0) {
        await props.subcategoriaTraerTodas();
      }

      if (props.location !== '/productos') {
        activarFiltroPorUrl();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const activarFiltroPorUrl = () => {
    if (props.query.search) {
      return activarFiltro(Object.keys(props.query)[0], props.query.search);
    } else {
      return activarFiltro(props.query.type, props.query.index[1]);
    }
  };

  const activarFiltro = (tipoFiltro, key, fromModal = false) => {
    props.aplicarFiltro(tipoFiltro, key);
  };

  const limpiarFiltro = tipo => {
    props.quitarFiltro(tipo);
  };

  const closeFiltrosMobile = () => {
    document.getElementsByClassName(Filtro_module_default.a.filtros__contanier)[0].classList.remove(Filtro_module_default.a.show_filtros);
  };

  const showFiltros = () => {
    let element = document.getElementsByClassName(Filtro_module_default.a.filtros__contanier)[0];
    element.classList.toggle(Filtro_module_default.a.show);
    document.getElementById('iconFiltroContainer').classList.toggle(Filtro_module_default.a.rotar);
  };

  const handleRestablecer = () => {
    props.restablecerFiltros();
    props.traerProductos();
  };

  const {
    filtrando,
    filtros
  } = props.productosReducer;
  return Filtro_jsx("div", {
    className: Filtro_module_default.a.filtros__contanier
  }, Filtro_jsx("button", {
    className: Filtro_module_default.a.btn_close_filtro,
    onClick: showFiltros
  }, Filtro_jsx(react_fontawesome_["FontAwesomeIcon"], {
    id: "iconFiltroContainer",
    icon: free_solid_svg_icons_["faChevronRight"]
  })), Filtro_jsx("div", null, props.categoriasReducer.categorias.length == 0 || props.subcategoriaReducer.subcategorias.length == 0 || props.marcasReducer.marcas.length == 0 ? Filtro_jsx(Loader["a" /* default */], null) : Filtro_jsx(external_react_default.a.Fragment, null, filtrando ? Filtro_jsx("button", {
    className: "boton bg-yellow mb-3",
    onClick: handleRestablecer
  }, Filtro_jsx(react_fontawesome_["FontAwesomeIcon"], {
    icon: free_solid_svg_icons_["faBroom"]
  }), " Limpiar Filtros") : null, Filtro_jsx(react_fontawesome_["FontAwesomeIcon"], {
    icon: free_solid_svg_icons_["faTimes"],
    className: Filtro_module_default.a.cerrar_filtro_mobile,
    onClick: closeFiltrosMobile
  }), Filtro_jsx("h4", {
    className: Filtro_module_default.a.titulo_filtros
  }, "Mascota"), Filtro_jsx("ul", {
    className: Filtro_module_default.a.lista
  }, props.categoriasReducer.categorias.map(cat => Filtro_jsx("li", {
    key: cat.idCategoria
  }, Filtro_jsx("div", {
    className: Filtro_module_default.a.item_filtro + ` ${filtros.categoria == cat.idCategoria ? Filtro_module_default.a.active : ''}`,
    onClick: () => activarFiltro('categoria', `${cat.idCategoria}`)
  }, Filtro_jsx("span", {
    className: "text-muted"
  }, cat.categoria)), Filtro_jsx(react_fontawesome_["FontAwesomeIcon"], {
    icon: free_solid_svg_icons_["faTimes"],
    className: Filtro_module_default.a.icon_close_filtro + ` ${filtros.categoria == cat.idCategoria ? '' : 'd-none'}`,
    onClick: () => limpiarFiltro('categoria')
  })))), Filtro_jsx("h4", {
    className: Filtro_module_default.a.titulo_filtros
  }, "Alimentos"), Filtro_jsx("ul", {
    className: Filtro_module_default.a.lista
  }, props.subcategoriaReducer.subcategorias.map(sc => Filtro_jsx("li", {
    key: sc.idSubCategoria
  }, Filtro_jsx("div", {
    className: Filtro_module_default.a.item_filtro + ` ${filtros.subcategoria == sc.idSubCategoria ? Filtro_module_default.a.active : ''}`,
    onClick: () => activarFiltro('subcategoria', `${sc.idSubCategoria}`)
  }, Filtro_jsx("span", {
    className: "text-muted"
  }, sc.subcategoria)), Filtro_jsx(react_fontawesome_["FontAwesomeIcon"], {
    icon: free_solid_svg_icons_["faTimes"],
    className: Filtro_module_default.a.icon_close_filtro + ` ${filtros.subcategoria == sc.idSubCategoria ? '' : 'd-none'}`,
    onClick: () => limpiarFiltro('subcategoria')
  })))), Filtro_jsx("h4", {
    className: Filtro_module_default.a.titulo_filtros
  }, "Marca"), Filtro_jsx("ul", {
    id: "listaMarca",
    className: Filtro_module_default.a.sinBorderBottom + ' ' + Filtro_module_default.a.lista + ` ${Filtro_module_default.a.listaMarca}`
  }, props.marcasReducer.marcas.map((marca, key) => Filtro_jsx("li", {
    key: marca.idMarca
  }, Filtro_jsx("div", {
    className: Filtro_module_default.a.item_filtro + ` ${filtros.marca == marca.idMarca ? Filtro_module_default.a.active : ''}`,
    onClick: () => activarFiltro('marca', `${marca.idMarca}`)
  }, Filtro_jsx("span", {
    className: "text-muted"
  }, marca.marca)), Filtro_jsx(react_fontawesome_["FontAwesomeIcon"], {
    icon: free_solid_svg_icons_["faTimes"],
    className: Filtro_module_default.a.icon_close_filtro + ` ${filtros.marca == marca.idMarca ? '' : 'd-none'}`,
    onClick: () => limpiarFiltro('marca')
  })))))));
};

const Filtro_mapStateToProps = ({
  marcasReducer,
  productosReducer,
  categoriasReducer,
  subcategoriaReducer
}) => {
  return {
    marcasReducer,
    productosReducer,
    categoriasReducer,
    subcategoriaReducer
  };
};

const mapDispatchToProps = {
  marcasTraerTodas,
  categoriasTraerTodas,
  subcategoriaTraerTodas,
  aplicarFiltro,
  quitarFiltro,
  restablecerFiltros,
  traerProductos
};
/* harmony default export */ var components_Filtro = (Object(external_react_redux_["connect"])(Filtro_mapStateToProps, mapDispatchToProps)(Filtro));
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// EXTERNAL MODULE: ./src/components/BotonWhatsApp/index.js
var BotonWhatsApp = __webpack_require__("WkNE");

// CONCATENATED MODULE: ./pages/productos/[[...index]].js

var _index_jsx = external_react_default.a.createElement;
 //import {useEffect} from 'react';


 //import BotonScrollTop from '../src/components/botonScrollToTop';




const ProductosPage = props => {
  const router = Object(router_["useRouter"])();
  const {
    asPath,
    query
  } = router;
  let tituloSite = 'Oliver - Productos';

  if (asPath !== '/productos') {
    if (query.search) {
      tituloSite = query.search + ' en OliverPetShop';
    } else if (query.index[0]) {
      tituloSite = query.index[0].replace("-", " ").replace(/\b\w/g, l => l.toUpperCase()) + ' en OliverPetShop';
    }
  }

  return _index_jsx(external_react_default.a.Fragment, null, _index_jsx(Head["a" /* default */], {
    title: tituloSite
  }), _index_jsx("section", {
    className: "main__productos container"
  }, _index_jsx("div", {
    className: "row"
  }, _index_jsx(components_Filtro, {
    location: asPath,
    query: query
  }), _index_jsx("div", {
    className: "col-12 py-3"
  }, _index_jsx(components_Productos, {
    location: asPath,
    query: query
  })))), _index_jsx(BotonWhatsApp["a" /* default */], null));
};

ProductosPage.getInitialProps = async ({
  query
}) => {
  return {
    query
  };
};

/* harmony default export */ var _index_ = __webpack_exports__["default"] = (ProductosPage);

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
  title,
  metadesc
}) => {
  return __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, null, __jsx("title", null, title), __jsx("meta", {
    name: "theme-color",
    content: "#df8f0e"
  }), __jsx("link", {
    rel: "icon",
    href: `${_config_index__WEBPACK_IMPORTED_MODULE_2__[/* URL_CLOUD_STORAGE */ "e"]}/static/Perro.png`
  }), metadesc ? __jsx("meta", {
    name: "description",
    content: metadesc
  }) : null, __jsx("script", {
    src: "https://secure.mlstatic.com/sdk/javascript/v1/mercadopago.js"
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (Header);

/***/ }),

/***/ "kVRI":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "traerTodas", function() { return traerTodas; });
/* harmony import */ var _config_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("rOcY");
/* harmony import */ var _types_marcasTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("HKBJ");


const traerTodas = () => async dispatch => {
  dispatch({
    type: _types_marcasTypes__WEBPACK_IMPORTED_MODULE_1__[/* LOADING */ "b"]
  });

  try {
    return fetch(`${_config_index__WEBPACK_IMPORTED_MODULE_0__[/* API */ "a"]}/marca`).then(res => res.json()).then(data => {
      const marcas = data.data;
      dispatch({
        type: _types_marcasTypes__WEBPACK_IMPORTED_MODULE_1__[/* TRAER_TODAS */ "c"],
        payload: marcas
      });
    }).catch(err => {
      dispatch({
        type: _types_marcasTypes__WEBPACK_IMPORTED_MODULE_1__[/* ERROR */ "a"],
        payload: err
      });
    });
  } catch (error) {
    dispatch({
      type: _types_marcasTypes__WEBPACK_IMPORTED_MODULE_1__[/* ERROR */ "a"],
      payload: error
    });
  }
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

/***/ "pRT7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return slug; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return isMobile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ObtenerDia; });
/* harmony import */ var slugify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("06NB");
/* harmony import */ var slugify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(slugify__WEBPACK_IMPORTED_MODULE_0__);


function slug(name) {
  return slugify__WEBPACK_IMPORTED_MODULE_0___default()(name, {
    lower: true
  }).replace(/[^\w\-]+/g, '');
}

function isMobile() {
  if (false) {}
}

function ObtenerDia(numberDay) {
  switch (numberDay) {
    case 1:
      return 'Lunes';

    case 2:
      return 'Martes';

    case 3:
      return 'Miercoles';

    case 4:
      return 'Jueves';

    case 5:
      return 'Viernes';

    case 6:
      return 'Sabado';

    case 7:
      return 'Domingo';

    default:
      break;
  }
}



/***/ }),

/***/ "rOcY":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return API; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return PUBLIC_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return URL_CLOUD_STORAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return GOOGLE_CLIENT_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return MP_AC_TOKEN; });
const API = 'https://api.oliverpetshop.com.ar';
const PUBLIC_URL = "https://developers.oliverpetshop.com.ar";
const MP_AC_TOKEN = "TEST-1f5f55a0-b128-49c4-9217-110a8d9fba43";
const URL_CLOUD_STORAGE = 'https://storage.googleapis.com/web-oliver';
const GOOGLE_CLIENT_ID = '85508910542-jfaoom4l84q0a9cdmeg382vi9hl986j1.apps.googleusercontent.com';

/*https://www.mercadolibre.com.ar/gz/checkout/buy
?mode=page
&parent_url=https%3A%2F%2Farticulo.mercadolibre.com.ar%2FMLA-701482873-set-x-4-colchonetas-cama-inflable-pileta-piscina-oferta-mar-_JM
&item_id=MLA701482873
&context=vip
&shipping_option_id=3630547635
&quantity=1*/

/***/ }),

/***/ "rfcl":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "traerTodas", function() { return traerTodas; });
/* harmony import */ var _config_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("rOcY");
/* harmony import */ var _types_categoriasTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("6Xhb");


const traerTodas = () => async dispatch => {
  dispatch({
    type: _types_categoriasTypes__WEBPACK_IMPORTED_MODULE_1__[/* LOADING */ "b"]
  });

  try {
    return fetch(`${_config_index__WEBPACK_IMPORTED_MODULE_0__[/* API */ "a"]}/categorias`).then(res => res.json()).then(data => {
      const categorias = data.data;
      dispatch({
        type: _types_categoriasTypes__WEBPACK_IMPORTED_MODULE_1__[/* TRAER_TODAS */ "c"],
        payload: categorias
      });
    }).catch(err => {
      dispatch({
        type: _types_categoriasTypes__WEBPACK_IMPORTED_MODULE_1__[/* ERROR */ "a"],
        payload: err
      });
    });
  } catch (error) {
    dispatch({
      type: _types_categoriasTypes__WEBPACK_IMPORTED_MODULE_1__[/* ERROR */ "a"],
      payload: error
    });
  }
};

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