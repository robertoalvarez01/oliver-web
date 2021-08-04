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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("zRob");


/***/ }),

/***/ "HJQg":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "HdXA":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "login", function() { return login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logout", function() { return logout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "verificarSesion", function() { return verificarSesion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "singInWithGoogle", function() { return singInWithGoogle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actualizarFoto", function() { return actualizarFoto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actualizarUsuario", function() { return actualizarUsuario; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actualizarAddress", function() { return actualizarAddress; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendEmailForResetPassword", function() { return sendEmailForResetPassword; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updatePassword", function() { return updatePassword; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "traerVentas", function() { return traerVentas; });
/* harmony import */ var _config_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("rOcY");
/* harmony import */ var _types_usuarioTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("i5yP");


const login = data => async dispatch => {
  dispatch({
    type: _types_usuarioTypes__WEBPACK_IMPORTED_MODULE_1__[/* LOADING */ "b"]
  });

  try {
    if (data.email.trim() === '' || data.password.trim() === '') {
      return dispatch({
        type: _types_usuarioTypes__WEBPACK_IMPORTED_MODULE_1__[/* ERROR */ "a"],
        payload: 'Es necesario completar todos los campos'
      });
    }

    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    return fetch(`${_config_index__WEBPACK_IMPORTED_MODULE_0__[/* API */ "a"]}/auth/login`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers
    }).then(res => res.json()).then(response => {
      if (response.ok) {
        let objUsuario = {
          nombre: response.usuario.nombre,
          email: response.usuario.email,
          foto: response.usuario.foto,
          token: response.token,
          address: response.usuario.ubicacion,
          idUsuario: response.usuario.idUsuario,
          lat: response.usuario.lat,
          lon: response.usuario.lon,
          telefono: response.usuario.telefono
        };
        localStorage.setItem('oliverpetshop_usuario', JSON.stringify(objUsuario));
        dispatch({
          type: _types_usuarioTypes__WEBPACK_IMPORTED_MODULE_1__[/* LOGIN */ "c"],
          payload: localStorage.getItem('oliverpetshop_usuario')
        });
      } else {
        return dispatch({
          type: _types_usuarioTypes__WEBPACK_IMPORTED_MODULE_1__[/* ERROR */ "a"],
          payload: response.info
        });
      }
    });
  } catch (error) {
    console.log(error);
    return dispatch({
      type: _types_usuarioTypes__WEBPACK_IMPORTED_MODULE_1__[/* ERROR */ "a"],
      payload: error
    });
  }
};
const logout = () => async dispatch => {
  dispatch({
    type: _types_usuarioTypes__WEBPACK_IMPORTED_MODULE_1__[/* LOADING */ "b"]
  });

  try {
    localStorage.removeItem('oliverpetshop_usuario');
    return dispatch({
      type: _types_usuarioTypes__WEBPACK_IMPORTED_MODULE_1__[/* LOGOUT */ "d"]
    });
  } catch (error) {
    dispatch({
      type: _types_usuarioTypes__WEBPACK_IMPORTED_MODULE_1__[/* ERROR */ "a"],
      payload: error
    });
  }
};
const verificarSesion = (token = null) => async dispatch => {
  try {
    let dataUsuario = JSON.parse(localStorage.getItem('oliverpetshop_usuario'));

    if (dataUsuario || token) {
      // request para verificar que el token corresponda a una sesion activa
      let headers = new Headers();
      let tokenSend = token ? token : dataUsuario.token;
      headers.append('token', tokenSend);
      const request = await fetch(`${_config_index__WEBPACK_IMPORTED_MODULE_0__[/* API */ "a"]}/auth/verify-sesion`, {
        method: 'GET',
        headers
      });

      if (request.status != 200) {
        return dispatch({
          type: _types_usuarioTypes__WEBPACK_IMPORTED_MODULE_1__[/* VERIFICAR_SESION */ "h"],
          payload: {
            data: null,
            logueado: false
          }
        });
      }

      return dispatch({
        type: _types_usuarioTypes__WEBPACK_IMPORTED_MODULE_1__[/* VERIFICAR_SESION */ "h"],
        payload: {
          data: dataUsuario,
          logueado: true
        }
      });
    }

    return dispatch({
      type: _types_usuarioTypes__WEBPACK_IMPORTED_MODULE_1__[/* VERIFICAR_SESION */ "h"],
      payload: {
        data: null,
        logueado: false
      }
    });
  } catch (error) {
    dispatch({
      type: _types_usuarioTypes__WEBPACK_IMPORTED_MODULE_1__[/* ERROR */ "a"],
      payload: error
    });
  }
};
const register = data => dispatch => {
  dispatch({
    type: _types_usuarioTypes__WEBPACK_IMPORTED_MODULE_1__[/* LOADING */ "b"]
  });

  try {
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    return fetch(`${_config_index__WEBPACK_IMPORTED_MODULE_0__[/* API */ "a"]}/auth/register`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers
    }).then(res => res.json()).then(response => {
      if (response.ok) {
        let objUsuario = {
          nombre: response.usuario.nombre,
          email: response.usuario.email,
          foto: response.usuario.foto,
          token: response.token,
          address: response.usuario.address,
          idUsuario: response.usuario.idUsuario
        };
        localStorage.setItem('oliverpetshop_usuario', JSON.stringify(objUsuario));
        dispatch({
          type: _types_usuarioTypes__WEBPACK_IMPORTED_MODULE_1__[/* LOGIN */ "c"],
          payload: localStorage.getItem('oliverpetshop_usuario')
        });
      } else {
        dispatch({
          type: _types_usuarioTypes__WEBPACK_IMPORTED_MODULE_1__[/* ERROR */ "a"],
          payload: response.info
        });
      }
    });
  } catch (error) {
    dispatch({
      type: _types_usuarioTypes__WEBPACK_IMPORTED_MODULE_1__[/* ERROR */ "a"],
      payload: error
    });
  }
};
const singInWithGoogle = tokenId => async dispatch => {
  dispatch({
    type: _types_usuarioTypes__WEBPACK_IMPORTED_MODULE_1__[/* LOADING */ "b"]
  });

  try {
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    return fetch(`${_config_index__WEBPACK_IMPORTED_MODULE_0__[/* API */ "a"]}/auth/google`, {
      method: 'POST',
      headers,
      body: JSON.stringify({
        token: tokenId
      })
    }).then(res => res.json()).then(response => {
      if (!response.ok) {
        return dispatch({
          type: _types_usuarioTypes__WEBPACK_IMPORTED_MODULE_1__[/* ERROR */ "a"],
          payload: response.info
        });
      }

      ;
      let objUsuario = {
        nombre: response.usuario.nombre,
        email: response.usuario.email,
        foto: response.usuario.foto,
        token: response.token,
        address: response.usuario.address,
        idUsuario: response.usuario.idUsuario,
        lat: response.usuario.lat,
        lon: response.usuario.lon,
        telefono: response.usuario.telefono
      };
      localStorage.setItem('oliverpetshop_usuario', JSON.stringify(objUsuario));
      dispatch({
        type: _types_usuarioTypes__WEBPACK_IMPORTED_MODULE_1__[/* LOGIN */ "c"],
        payload: localStorage.getItem('oliverpetshop_usuario')
      });
    });
  } catch (error) {
    dispatch({
      type: _types_usuarioTypes__WEBPACK_IMPORTED_MODULE_1__[/* ERROR */ "a"],
      payload: error
    });
  }
};
const actualizarFoto = (data, id) => async dispatch => {
  dispatch({
    type: _types_usuarioTypes__WEBPACK_IMPORTED_MODULE_1__[/* LOADING */ "b"]
  });

  try {
    let headers = new Headers();
    let token = JSON.parse(localStorage.getItem('oliverpetshop_usuario')).token;
    headers.append("token", token);
    const request = await fetch(`${_config_index__WEBPACK_IMPORTED_MODULE_0__[/* API */ "a"]}/usuario/actualizarFotoUsuarioDesdeWeb/${id}`, {
      method: 'PUT',
      headers,
      body: data
    });
    const dataRequest = await request.json();

    if (dataRequest.ok) {
      localStorage.setItem('oliverpetshop_usuario', JSON.stringify(dataRequest.user));
      dispatch({
        type: _types_usuarioTypes__WEBPACK_IMPORTED_MODULE_1__[/* UPDATE_USER */ "f"],
        payload: dataRequest.user
      });
    }
  } catch (error) {
    dispatch({
      type: _types_usuarioTypes__WEBPACK_IMPORTED_MODULE_1__[/* ERROR */ "a"],
      payload: error
    });
  }
};
const actualizarUsuario = (data, id) => async dispatch => {
  dispatch({
    type: _types_usuarioTypes__WEBPACK_IMPORTED_MODULE_1__[/* LOADING */ "b"]
  });

  try {
    let headers = new Headers();
    let token = JSON.parse(localStorage.getItem('oliverpetshop_usuario')).token;
    if (!token) return dispatch({
      type: _types_usuarioTypes__WEBPACK_IMPORTED_MODULE_1__[/* ERROR */ "a"],
      payload: 'Token incorrecto'
    });
    headers.append('token', token);
    headers.append("Content-Type", "application/json");
    const request = await fetch(`${_config_index__WEBPACK_IMPORTED_MODULE_0__[/* API */ "a"]}/usuario/actualizarUsuarioDesdeWeb/${id}`, {
      method: 'PUT',
      headers,
      body: JSON.stringify(data)
    });
    if (request.status != 200) return dispatch({
      type: _types_usuarioTypes__WEBPACK_IMPORTED_MODULE_1__[/* ERROR */ "a"],
      payload: 'Ocurrio un error, ¡intentelo más tarde!'
    });
    const dataRequest = await request.json();

    if (dataRequest.ok) {
      localStorage.setItem('oliverpetshop_usuario', JSON.stringify(dataRequest.user));
      return dispatch({
        type: _types_usuarioTypes__WEBPACK_IMPORTED_MODULE_1__[/* UPDATE_USER */ "f"],
        payload: dataRequest.user
      });
    }

    return dispatch({
      type: _types_usuarioTypes__WEBPACK_IMPORTED_MODULE_1__[/* ERROR */ "a"],
      payload: dataRequest.info
    });
  } catch (error) {
    dispatch({
      type: _types_usuarioTypes__WEBPACK_IMPORTED_MODULE_1__[/* ERROR */ "a"],
      payload: error.message
    });
  }
};
const actualizarAddress = (data, id) => async dispatch => {
  dispatch({
    type: _types_usuarioTypes__WEBPACK_IMPORTED_MODULE_1__[/* LOADING */ "b"]
  });

  try {
    let headers = new Headers();
    let token = JSON.parse(localStorage.getItem('oliverpetshop_usuario')).token;
    if (!token) return dispatch({
      type: _types_usuarioTypes__WEBPACK_IMPORTED_MODULE_1__[/* ERROR */ "a"],
      payload: 'Token incorrecto'
    });
    headers.append('token', token);
    headers.append("Content-Type", "application/json");
    const request = await fetch(`${_config_index__WEBPACK_IMPORTED_MODULE_0__[/* API */ "a"]}/usuario/actualizarDireccion/${id}`, {
      method: 'PUT',
      headers,
      body: JSON.stringify(data)
    });
    if (request.status != 200) return dispatch({
      type: _types_usuarioTypes__WEBPACK_IMPORTED_MODULE_1__[/* ERROR */ "a"],
      payload: 'Ocurrio un error, ¡intentelo más tarde!'
    });
    const dataRequest = await request.json();

    if (dataRequest.ok) {
      localStorage.setItem('oliverpetshop_usuario', JSON.stringify(dataRequest.usuario));
      return dispatch({
        type: _types_usuarioTypes__WEBPACK_IMPORTED_MODULE_1__[/* UPDATE_USER */ "f"],
        payload: dataRequest.usuario
      });
    }

    return dispatch({
      type: _types_usuarioTypes__WEBPACK_IMPORTED_MODULE_1__[/* ERROR */ "a"],
      payload: dataRequest.info
    });
  } catch (error) {
    dispatch({
      type: _types_usuarioTypes__WEBPACK_IMPORTED_MODULE_1__[/* ERROR */ "a"],
      payload: error.message
    });
  }
};
const sendEmailForResetPassword = idUsuario => async dispatch => {
  dispatch({
    type: _types_usuarioTypes__WEBPACK_IMPORTED_MODULE_1__[/* LOADING */ "b"]
  });

  try {
    let headers = new Headers();
    let token = JSON.parse(localStorage.getItem('oliverpetshop_usuario')).token;
    if (!token) return dispatch({
      type: _types_usuarioTypes__WEBPACK_IMPORTED_MODULE_1__[/* ERROR */ "a"],
      payload: 'Token incorrecto'
    });
    headers.append('token', token);
    headers.append("Content-Type", "application/json");
    const request = await fetch(`${_config_index__WEBPACK_IMPORTED_MODULE_0__[/* API */ "a"]}/usuario/reset-password`, {
      method: 'POST',
      headers,
      body: JSON.stringify({
        idUsuario
      })
    });
    if (request.status != 200) return dispatch({
      type: _types_usuarioTypes__WEBPACK_IMPORTED_MODULE_1__[/* ERROR */ "a"],
      payload: 'Ocurrio un error, ¡intentelo más tarde!'
    });
    const dataRequest = await request.json();

    if (dataRequest.ok) {
      return console.log(dataRequest);
    }

    return dispatch({
      type: _types_usuarioTypes__WEBPACK_IMPORTED_MODULE_1__[/* ERROR */ "a"],
      payload: dataRequest.info
    });
  } catch (error) {
    dispatch({
      type: _types_usuarioTypes__WEBPACK_IMPORTED_MODULE_1__[/* ERROR */ "a"],
      payload: dataRequest.info
    });
  }
};
const updatePassword = (data, token) => async dispatch => {
  dispatch({
    type: _types_usuarioTypes__WEBPACK_IMPORTED_MODULE_1__[/* LOADING */ "b"]
  });

  try {
    if (data.confirmNewPassword === '' || data.newPassword === '') {
      return dispatch({
        type: _types_usuarioTypes__WEBPACK_IMPORTED_MODULE_1__[/* ERROR */ "a"],
        payload: 'Los dos campos son obligarios.'
      });
    }

    if (data.confirmNewPassword != data.newPassword) {
      return dispatch({
        type: _types_usuarioTypes__WEBPACK_IMPORTED_MODULE_1__[/* ERROR */ "a"],
        payload: 'Las contraseñas no coinciden.'
      });
    }

    let headers = new Headers();
    headers.append('refresh-token', token);
    headers.append("Content-Type", "application/json");
    const request = await fetch(`${_config_index__WEBPACK_IMPORTED_MODULE_0__[/* API */ "a"]}/usuario/new-password`, {
      method: 'PUT',
      headers,
      body: JSON.stringify(data)
    });
    if (request.status != 200) return dispatch({
      type: _types_usuarioTypes__WEBPACK_IMPORTED_MODULE_1__[/* ERROR */ "a"],
      payload: 'Ups, algo ha salido mal...'
    });
    dispatch({
      type: _types_usuarioTypes__WEBPACK_IMPORTED_MODULE_1__[/* UPDATE_PASSWORD */ "e"]
    });
    return setTimeout(() => {
      window.location.assign(`${_config_index__WEBPACK_IMPORTED_MODULE_0__[/* PUBLIC_URL */ "e"]}`);
    }, 5000);
  } catch (error) {
    return dispatch({
      type: _types_usuarioTypes__WEBPACK_IMPORTED_MODULE_1__[/* ERROR */ "a"],
      payload: error
    });
  }
};
const traerVentas = () => async (dispatch, getState) => {
  dispatch({
    type: _types_usuarioTypes__WEBPACK_IMPORTED_MODULE_1__[/* LOADING */ "b"]
  });
  let {
    idUsuario,
    token
  } = getState().usuarioReducer.usuario;
  let headers = new Headers();
  headers.append('token', token);
  const req = await fetch(`${_config_index__WEBPACK_IMPORTED_MODULE_0__[/* API */ "a"]}/ventas/usuario/${idUsuario}`, {
    headers
  });
  const response = await req.json();

  if (req.status === 200) {
    return dispatch({
      type: _types_usuarioTypes__WEBPACK_IMPORTED_MODULE_1__[/* UPDATE_VENTAS */ "g"],
      payload: response.info
    });
  }

  return dispatch({
    type: _types_usuarioTypes__WEBPACK_IMPORTED_MODULE_1__[/* ERROR */ "a"],
    payload: response
  });
};

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

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "h74D":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "i5yP":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return VERIFICAR_SESION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return LOGIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return LOGOUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return LOADING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return UPDATE_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return UPDATE_PASSWORD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return UPDATE_VENTAS; });
const VERIFICAR_SESION = 'usuario_verificarsesion';
const LOGIN = 'usuario_login';
const LOGOUT = 'usuario_logout';
const LOADING = 'usuario_loading';
const ERROR = 'usuario_error';
const UPDATE_USER = 'usuario_cambiarfoto';
const UPDATE_PASSWORD = 'usuario_cambiarpassword';
const UPDATE_VENTAS = 'usuario_update_ventas';


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
    href: `${_config_index__WEBPACK_IMPORTED_MODULE_2__[/* URL_CLOUD_STORAGE */ "f"]}/static/Perro.png`
  }), metadesc ? __jsx("meta", {
    name: "description",
    content: metadesc
  }) : null, __jsx("script", {
    src: "https://secure.mlstatic.com/sdk/javascript/v1/mercadopago.js"
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (Header);

/***/ }),

/***/ "rOcY":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return API; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return PUBLIC_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return URL_CLOUD_STORAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return GOOGLE_CLIENT_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return MP_AC_TOKEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return URL_PROCESAR_VENTA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return FOTO_DEFAULT; });
const API = 'https://api.oliverpetshop.com.ar';
const PUBLIC_URL = "https://developers.oliverpetshop.com.ar";
const URL_PROCESAR_VENTA = "http://localhost:3000/procesarVenta";
const MP_AC_TOKEN = "TEST-3132396576920746-020118-c75647e085784e05058d12358ef9e782-528050104";
const URL_CLOUD_STORAGE = 'https://storage.googleapis.com/web-oliver';
const GOOGLE_CLIENT_ID = '85508910542-jfaoom4l84q0a9cdmeg382vi9hl986j1.apps.googleusercontent.com';
const FOTO_DEFAULT = '';


/***/ }),

/***/ "t0wy":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Error = ({
  message
}) => {
  return __jsx("div", {
    className: "alert alert-warning text-center"
  }, message);
};

/* harmony default export */ __webpack_exports__["a"] = (Error);

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "zRob":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("HJQg");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_components_Head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("k2JI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _src_components_Error__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("t0wy");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("h74D");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _store_actions_usuarioActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("HdXA");
/* harmony import */ var _src_components_Loader_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("XOuL");

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








const newPassword = props => {
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    props.verificarSesion(props.token);
  }, []);
  const {
    0: formValues,
    1: setFormValues
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    newPassword: '',
    confirmNewPassword: ''
  });

  const handleChange = event => {
    return setFormValues(_objectSpread(_objectSpread({}, formValues), {}, {
      [event.target.name]: event.target.value
    }));
  };

  const handleSubmit = event => {
    event.preventDefault();
    props.updatePassword(formValues, props.token);
  };

  const {
    loading,
    error,
    logueado,
    actionSuccess
  } = props.usuarioReducer;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(_src_components_Head__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
    title: "Oliver Petshop - Nueva contrase\xF1a"
  }), __jsx("section", {
    className: "mt-2 container"
  }, logueado ? __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, error ? __jsx(_src_components_Error__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
    message: error
  }) : null, actionSuccess ? __jsx("div", {
    className: "alert alert-info text-center"
  }, actionSuccess) : null, __jsx("form", {
    onSubmit: handleSubmit,
    className: "jsx-4269807520" + " " + "form-group mt-3"
  }, __jsx("div", {
    className: "jsx-4269807520" + " " + "col-12 mb-3"
  }, __jsx("label", {
    htmlFor: "pw",
    className: "jsx-4269807520"
  }, "Nueva Contrase\xF1a"), __jsx("input", {
    onChange: handleChange,
    value: formValues.newPassword,
    type: "password",
    placeholder: "Ingrese su nueva contrase\xF1a",
    name: "newPassword",
    id: "newPassword",
    required: true,
    className: "jsx-4269807520" + " " + "form-control"
  })), __jsx("div", {
    className: "jsx-4269807520" + " " + "col-12 mb-3"
  }, __jsx("label", {
    htmlFor: "pw-repeat",
    className: "jsx-4269807520"
  }, "Repita la nueva contrase\xF1a"), __jsx("input", {
    onChange: handleChange,
    value: formValues.confirmNewPassword,
    type: "password",
    placeholder: "Repita su nueva contrase\xF1a",
    name: "confirmNewPassword",
    id: "confirmNewPassword",
    required: true,
    className: "jsx-4269807520" + " " + "form-control"
  })), __jsx("div", {
    className: "jsx-4269807520" + " " + "col-12 text-center"
  }, loading ? __jsx(_src_components_Loader_index__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], null) : __jsx("input", {
    type: "submit",
    value: "Enviar",
    className: "jsx-4269807520" + " " + "boton bg-yellow"
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "4269807520"
  }, ["form.jsx-4269807520{font-family:'Quicksand',sans-serif!important;}"]))) : __jsx(_src_components_Error__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
    message: "Ups.. algo ha ido mal."
  })));
};

newPassword.getInitialProps = async ({
  query
}) => {
  const token = query.token;
  return {
    token
  };
};

const mapStateToProps = ({
  usuarioReducer
}) => {
  return {
    usuarioReducer
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["connect"])(mapStateToProps, _store_actions_usuarioActions__WEBPACK_IMPORTED_MODULE_5__)(newPassword));

/***/ })

/******/ });