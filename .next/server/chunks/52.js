"use strict";
exports.id = 52;
exports.ids = [52];
exports.modules = {

/***/ 3687:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



const Error = ({
  message
}) => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
    className: "alert alert-warning text-center",
    children: message
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Error);

/***/ }),

/***/ 5364:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "login": () => (/* binding */ login),
/* harmony export */   "logout": () => (/* binding */ logout),
/* harmony export */   "verificarSesion": () => (/* binding */ verificarSesion),
/* harmony export */   "register": () => (/* binding */ register),
/* harmony export */   "singInWithGoogle": () => (/* binding */ singInWithGoogle),
/* harmony export */   "actualizarFoto": () => (/* binding */ actualizarFoto),
/* harmony export */   "actualizarUsuario": () => (/* binding */ actualizarUsuario),
/* harmony export */   "actualizarAddress": () => (/* binding */ actualizarAddress),
/* harmony export */   "sendEmailForResetPassword": () => (/* binding */ sendEmailForResetPassword),
/* harmony export */   "updatePassword": () => (/* binding */ updatePassword),
/* harmony export */   "traerVentas": () => (/* binding */ traerVentas)
/* harmony export */ });
/* harmony import */ var _config_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1130);
/* harmony import */ var _types_usuarioTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6031);


const login = data => async dispatch => {
  dispatch({
    type: _types_usuarioTypes__WEBPACK_IMPORTED_MODULE_0__/* .LOADING */ .br
  });

  try {
    if (data.email.trim() === '' || data.password.trim() === '') {
      return dispatch({
        type: _types_usuarioTypes__WEBPACK_IMPORTED_MODULE_0__/* .ERROR */ .pn,
        payload: 'Es necesario completar todos los campos'
      });
    }

    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    return fetch(`${_config_index__WEBPACK_IMPORTED_MODULE_1__/* .API */ .bl}/auth/login`, {
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
          type: _types_usuarioTypes__WEBPACK_IMPORTED_MODULE_0__/* .LOGIN */ .ym,
          payload: localStorage.getItem('oliverpetshop_usuario')
        });
      } else {
        return dispatch({
          type: _types_usuarioTypes__WEBPACK_IMPORTED_MODULE_0__/* .ERROR */ .pn,
          payload: response.info
        });
      }
    });
  } catch (error) {
    console.log(error);
    return dispatch({
      type: _types_usuarioTypes__WEBPACK_IMPORTED_MODULE_0__/* .ERROR */ .pn,
      payload: error
    });
  }
};
const logout = () => async dispatch => {
  dispatch({
    type: _types_usuarioTypes__WEBPACK_IMPORTED_MODULE_0__/* .LOADING */ .br
  });

  try {
    localStorage.removeItem('oliverpetshop_usuario');
    return dispatch({
      type: _types_usuarioTypes__WEBPACK_IMPORTED_MODULE_0__/* .LOGOUT */ .Nv
    });
  } catch (error) {
    dispatch({
      type: _types_usuarioTypes__WEBPACK_IMPORTED_MODULE_0__/* .ERROR */ .pn,
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
      const request = await fetch(`${_config_index__WEBPACK_IMPORTED_MODULE_1__/* .API */ .bl}/auth/verify-sesion`, {
        method: 'GET',
        headers
      });

      if (request.status != 200) {
        return dispatch({
          type: _types_usuarioTypes__WEBPACK_IMPORTED_MODULE_0__/* .VERIFICAR_SESION */ .rE,
          payload: {
            data: null,
            logueado: false
          }
        });
      }

      return dispatch({
        type: _types_usuarioTypes__WEBPACK_IMPORTED_MODULE_0__/* .VERIFICAR_SESION */ .rE,
        payload: {
          data: dataUsuario,
          logueado: true
        }
      });
    }

    return dispatch({
      type: _types_usuarioTypes__WEBPACK_IMPORTED_MODULE_0__/* .VERIFICAR_SESION */ .rE,
      payload: {
        data: null,
        logueado: false
      }
    });
  } catch (error) {
    dispatch({
      type: _types_usuarioTypes__WEBPACK_IMPORTED_MODULE_0__/* .ERROR */ .pn,
      payload: error
    });
  }
};
const register = data => dispatch => {
  dispatch({
    type: _types_usuarioTypes__WEBPACK_IMPORTED_MODULE_0__/* .LOADING */ .br
  });

  try {
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    return fetch(`${_config_index__WEBPACK_IMPORTED_MODULE_1__/* .API */ .bl}/auth/register`, {
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
          type: _types_usuarioTypes__WEBPACK_IMPORTED_MODULE_0__/* .LOGIN */ .ym,
          payload: localStorage.getItem('oliverpetshop_usuario')
        });
      } else {
        dispatch({
          type: _types_usuarioTypes__WEBPACK_IMPORTED_MODULE_0__/* .ERROR */ .pn,
          payload: response.info
        });
      }
    });
  } catch (error) {
    dispatch({
      type: _types_usuarioTypes__WEBPACK_IMPORTED_MODULE_0__/* .ERROR */ .pn,
      payload: error
    });
  }
};
const singInWithGoogle = tokenId => async dispatch => {
  dispatch({
    type: _types_usuarioTypes__WEBPACK_IMPORTED_MODULE_0__/* .LOADING */ .br
  });

  try {
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    return fetch(`${_config_index__WEBPACK_IMPORTED_MODULE_1__/* .API */ .bl}/auth/google`, {
      method: 'POST',
      headers,
      body: JSON.stringify({
        token: tokenId
      })
    }).then(res => res.json()).then(response => {
      if (!response.ok) {
        return dispatch({
          type: _types_usuarioTypes__WEBPACK_IMPORTED_MODULE_0__/* .ERROR */ .pn,
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
        type: _types_usuarioTypes__WEBPACK_IMPORTED_MODULE_0__/* .LOGIN */ .ym,
        payload: localStorage.getItem('oliverpetshop_usuario')
      });
    });
  } catch (error) {
    dispatch({
      type: _types_usuarioTypes__WEBPACK_IMPORTED_MODULE_0__/* .ERROR */ .pn,
      payload: error
    });
  }
};
const actualizarFoto = (data, id) => async dispatch => {
  dispatch({
    type: _types_usuarioTypes__WEBPACK_IMPORTED_MODULE_0__/* .LOADING */ .br
  });

  try {
    let headers = new Headers();
    let token = JSON.parse(localStorage.getItem('oliverpetshop_usuario')).token;
    headers.append("token", token);
    const request = await fetch(`${_config_index__WEBPACK_IMPORTED_MODULE_1__/* .API */ .bl}/usuario/actualizarFotoUsuarioDesdeWeb/${id}`, {
      method: 'PUT',
      headers,
      body: data
    });
    const dataRequest = await request.json();

    if (dataRequest.ok) {
      localStorage.setItem('oliverpetshop_usuario', JSON.stringify(dataRequest.user));
      dispatch({
        type: _types_usuarioTypes__WEBPACK_IMPORTED_MODULE_0__/* .UPDATE_USER */ .AX,
        payload: dataRequest.user
      });
    }
  } catch (error) {
    dispatch({
      type: _types_usuarioTypes__WEBPACK_IMPORTED_MODULE_0__/* .ERROR */ .pn,
      payload: error
    });
  }
};
const actualizarUsuario = (data, id) => async dispatch => {
  dispatch({
    type: _types_usuarioTypes__WEBPACK_IMPORTED_MODULE_0__/* .LOADING */ .br
  });

  try {
    let headers = new Headers();
    let token = JSON.parse(localStorage.getItem('oliverpetshop_usuario')).token;
    if (!token) return dispatch({
      type: _types_usuarioTypes__WEBPACK_IMPORTED_MODULE_0__/* .ERROR */ .pn,
      payload: 'Token incorrecto'
    });
    headers.append('token', token);
    headers.append("Content-Type", "application/json");
    const request = await fetch(`${_config_index__WEBPACK_IMPORTED_MODULE_1__/* .API */ .bl}/usuario/actualizarUsuarioDesdeWeb/${id}`, {
      method: 'PUT',
      headers,
      body: JSON.stringify(data)
    });
    if (request.status != 200) return dispatch({
      type: _types_usuarioTypes__WEBPACK_IMPORTED_MODULE_0__/* .ERROR */ .pn,
      payload: 'Ocurrio un error, ¡intentelo más tarde!'
    });
    const dataRequest = await request.json();

    if (dataRequest.ok) {
      localStorage.setItem('oliverpetshop_usuario', JSON.stringify(dataRequest.user));
      return dispatch({
        type: _types_usuarioTypes__WEBPACK_IMPORTED_MODULE_0__/* .UPDATE_USER */ .AX,
        payload: dataRequest.user
      });
    }

    return dispatch({
      type: _types_usuarioTypes__WEBPACK_IMPORTED_MODULE_0__/* .ERROR */ .pn,
      payload: dataRequest.info
    });
  } catch (error) {
    dispatch({
      type: _types_usuarioTypes__WEBPACK_IMPORTED_MODULE_0__/* .ERROR */ .pn,
      payload: error.message
    });
  }
};
const actualizarAddress = (data, id) => async dispatch => {
  dispatch({
    type: _types_usuarioTypes__WEBPACK_IMPORTED_MODULE_0__/* .LOADING */ .br
  });

  try {
    let headers = new Headers();
    let token = JSON.parse(localStorage.getItem('oliverpetshop_usuario')).token;
    if (!token) return dispatch({
      type: _types_usuarioTypes__WEBPACK_IMPORTED_MODULE_0__/* .ERROR */ .pn,
      payload: 'Token incorrecto'
    });
    headers.append('token', token);
    headers.append("Content-Type", "application/json");
    const request = await fetch(`${_config_index__WEBPACK_IMPORTED_MODULE_1__/* .API */ .bl}/usuario/actualizarDireccion/${id}`, {
      method: 'PUT',
      headers,
      body: JSON.stringify(data)
    });
    if (request.status != 200) return dispatch({
      type: _types_usuarioTypes__WEBPACK_IMPORTED_MODULE_0__/* .ERROR */ .pn,
      payload: 'Ocurrio un error, ¡intentelo más tarde!'
    });
    const dataRequest = await request.json();

    if (dataRequest.ok) {
      localStorage.setItem('oliverpetshop_usuario', JSON.stringify(dataRequest.usuario));
      return dispatch({
        type: _types_usuarioTypes__WEBPACK_IMPORTED_MODULE_0__/* .UPDATE_USER */ .AX,
        payload: dataRequest.usuario
      });
    }

    return dispatch({
      type: _types_usuarioTypes__WEBPACK_IMPORTED_MODULE_0__/* .ERROR */ .pn,
      payload: dataRequest.info
    });
  } catch (error) {
    dispatch({
      type: _types_usuarioTypes__WEBPACK_IMPORTED_MODULE_0__/* .ERROR */ .pn,
      payload: error.message
    });
  }
};
const sendEmailForResetPassword = idUsuario => async dispatch => {
  dispatch({
    type: _types_usuarioTypes__WEBPACK_IMPORTED_MODULE_0__/* .LOADING */ .br
  });

  try {
    let headers = new Headers();
    let token = JSON.parse(localStorage.getItem('oliverpetshop_usuario')).token;
    if (!token) return dispatch({
      type: _types_usuarioTypes__WEBPACK_IMPORTED_MODULE_0__/* .ERROR */ .pn,
      payload: 'Token incorrecto'
    });
    headers.append('token', token);
    headers.append("Content-Type", "application/json");
    const request = await fetch(`${_config_index__WEBPACK_IMPORTED_MODULE_1__/* .API */ .bl}/usuario/reset-password`, {
      method: 'POST',
      headers,
      body: JSON.stringify({
        idUsuario
      })
    });
    if (request.status != 200) return dispatch({
      type: _types_usuarioTypes__WEBPACK_IMPORTED_MODULE_0__/* .ERROR */ .pn,
      payload: 'Ocurrio un error, ¡intentelo más tarde!'
    });
    const dataRequest = await request.json();

    if (dataRequest.ok) {
      return console.log(dataRequest);
    }

    return dispatch({
      type: _types_usuarioTypes__WEBPACK_IMPORTED_MODULE_0__/* .ERROR */ .pn,
      payload: dataRequest.info
    });
  } catch (error) {
    dispatch({
      type: _types_usuarioTypes__WEBPACK_IMPORTED_MODULE_0__/* .ERROR */ .pn,
      payload: dataRequest.info
    });
  }
};
const updatePassword = (data, token) => async dispatch => {
  dispatch({
    type: _types_usuarioTypes__WEBPACK_IMPORTED_MODULE_0__/* .LOADING */ .br
  });

  try {
    if (data.confirmNewPassword === '' || data.newPassword === '') {
      return dispatch({
        type: _types_usuarioTypes__WEBPACK_IMPORTED_MODULE_0__/* .ERROR */ .pn,
        payload: 'Los dos campos son obligarios.'
      });
    }

    if (data.confirmNewPassword != data.newPassword) {
      return dispatch({
        type: _types_usuarioTypes__WEBPACK_IMPORTED_MODULE_0__/* .ERROR */ .pn,
        payload: 'Las contraseñas no coinciden.'
      });
    }

    let headers = new Headers();
    headers.append('refresh-token', token);
    headers.append("Content-Type", "application/json");
    const request = await fetch(`${_config_index__WEBPACK_IMPORTED_MODULE_1__/* .API */ .bl}/usuario/new-password`, {
      method: 'PUT',
      headers,
      body: JSON.stringify(data)
    });
    if (request.status != 200) return dispatch({
      type: _types_usuarioTypes__WEBPACK_IMPORTED_MODULE_0__/* .ERROR */ .pn,
      payload: 'Ups, algo ha salido mal...'
    });
    dispatch({
      type: _types_usuarioTypes__WEBPACK_IMPORTED_MODULE_0__/* .UPDATE_PASSWORD */ .D3
    });
    return setTimeout(() => {
      window.location.assign(`${_config_index__WEBPACK_IMPORTED_MODULE_1__/* .PUBLIC_URL */ .fQ}`);
    }, 5000);
  } catch (error) {
    return dispatch({
      type: _types_usuarioTypes__WEBPACK_IMPORTED_MODULE_0__/* .ERROR */ .pn,
      payload: error
    });
  }
};
const traerVentas = () => async (dispatch, getState) => {
  dispatch({
    type: _types_usuarioTypes__WEBPACK_IMPORTED_MODULE_0__/* .LOADING */ .br
  });
  let {
    idUsuario,
    token
  } = getState().usuarioReducer.usuario;
  let headers = new Headers();
  headers.append('token', token);
  const req = await fetch(`${_config_index__WEBPACK_IMPORTED_MODULE_1__/* .API */ .bl}/ventas/usuario/${idUsuario}`, {
    headers
  });
  const response = await req.json();

  if (req.status === 200) {
    return dispatch({
      type: _types_usuarioTypes__WEBPACK_IMPORTED_MODULE_0__/* .UPDATE_VENTAS */ .jd,
      payload: response.info
    });
  }

  return dispatch({
    type: _types_usuarioTypes__WEBPACK_IMPORTED_MODULE_0__/* .ERROR */ .pn,
    payload: response
  });
};

/***/ }),

/***/ 6031:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "rE": () => (/* binding */ VERIFICAR_SESION),
/* harmony export */   "ym": () => (/* binding */ LOGIN),
/* harmony export */   "Nv": () => (/* binding */ LOGOUT),
/* harmony export */   "br": () => (/* binding */ LOADING),
/* harmony export */   "pn": () => (/* binding */ ERROR),
/* harmony export */   "AX": () => (/* binding */ UPDATE_USER),
/* harmony export */   "D3": () => (/* binding */ UPDATE_PASSWORD),
/* harmony export */   "jd": () => (/* binding */ UPDATE_VENTAS)
/* harmony export */ });
const VERIFICAR_SESION = 'usuario_verificarsesion';
const LOGIN = 'usuario_login';
const LOGOUT = 'usuario_logout';
const LOADING = 'usuario_loading';
const ERROR = 'usuario_error';
const UPDATE_USER = 'usuario_cambiarfoto';
const UPDATE_PASSWORD = 'usuario_cambiarpassword';
const UPDATE_VENTAS = 'usuario_update_ventas';


/***/ })

};
;