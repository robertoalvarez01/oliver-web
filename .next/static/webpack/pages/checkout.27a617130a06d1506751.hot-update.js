webpackHotUpdate_N_E("pages/checkout",{

/***/ "./pages/checkout/index.js":
/*!*********************************!*\
  !*** ./pages/checkout/index.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_components_CardUbicacion_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../src/components/CardUbicacion/index */ "./src/components/CardUbicacion/index.js");
/* harmony import */ var _src_components_OpcionesEnvio__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../src/components/OpcionesEnvio */ "./src/components/OpcionesEnvio/index.js");
/* harmony import */ var _src_components_ZonaEnvio__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../src/components/ZonaEnvio */ "./src/components/ZonaEnvio/index.js");
/* harmony import */ var _src_components_Head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../src/components/Head */ "./src/components/Head.js");
/* harmony import */ var _src_components_DetalleProductos__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../src/components/DetalleProductos */ "./src/components/DetalleProductos.js");
/* harmony import */ var _src_components_Error__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../src/components/Error */ "./src/components/Error.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store_actions_carritoActions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../store/actions/carritoActions */ "./store/actions/carritoActions.js");
/* harmony import */ var _store_actions_usuarioActions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../store/actions/usuarioActions */ "./store/actions/usuarioActions.js");
/* harmony import */ var _config_index__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../config/index */ "./config/index.js");
/* harmony import */ var _src_components_Loader_index__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../src/components/Loader/index */ "./src/components/Loader/index.js");
/* harmony import */ var _src_components_MediosDePago__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../src/components/MediosDePago */ "./src/components/MediosDePago/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_14__);
var _this = undefined,
    _jsxFileName = "C:\\Users\\franc\\Documents\\oliver-2\\sitio-desa\\pages\\checkout\\index.js",
    _s = $RefreshSig$();



var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;














var carritoTraerProductos = _store_actions_carritoActions__WEBPACK_IMPORTED_MODULE_9__["traerProductos"],
    cambiarMedioDePago = _store_actions_carritoActions__WEBPACK_IMPORTED_MODULE_9__["cambiarMedioDePago"];
var verificarSesion = _store_actions_usuarioActions__WEBPACK_IMPORTED_MODULE_10__["verificarSesion"];

var Checkout = function Checkout(props) {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    normal: true,
    express: false,
    local: false
  }),
      tipoEnvio = _useState[0],
      setTipoEnvio = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      zonaEnvio = _useState2[0],
      setZonaEnvio = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      error = _useState3[0],
      setError = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      loading = _useState4[0],
      setLoading = _useState4[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    document.getElementsByTagName('body')[0].style.overflowY = 'scroll';
    props.carritoTraerProductos();
  }, []);

  var cambiarTipoDeEnvio = function cambiarTipoDeEnvio(tipoDeEnvio) {
    if (tipoDeEnvio === 'normal') {
      document.getElementById('form-zona-envio').removeAttribute('disabled');
      document.getElementById('form-medios-pago').setAttribute('disabled', 'true');
      props.cambiarMedioDePago('1');
      return setTipoEnvio({
        normal: true,
        express: false,
        local: false
      });
    }

    if (tipoDeEnvio === 'express') {
      document.getElementById('form-zona-envio').removeAttribute('disabled');
      document.getElementById('form-medios-pago').setAttribute('disabled', 'true');
      props.cambiarMedioDePago('1');
      return setTipoEnvio({
        normal: false,
        express: true,
        local: false
      });
    }

    document.getElementById('form-zona-envio').setAttribute('disabled', 'true');
    document.getElementById('form-medios-pago').removeAttribute('disabled');
    return setTipoEnvio({
      normal: false,
      express: false,
      local: true
    });
  };

  var insertarZonaDeEnvio = function insertarZonaDeEnvio(zona) {
    setZonaEnvio(zona);
  };

  var handleClick = function handleClick() {
    if (!props.usuarioReducer.usuario.address || props.usuarioReducer.usuario.address === '') return setError('Es obligatorio completar tu ubicación.');
    if (props.carritoReducer.idMedioPago == '') return setError('Es obligatorio completar el medio de pago');

    if (!tipoEnvio.local) {
      //si no selecciona retiro en el local, es obligatorio completar la zona de envío
      if (zonaEnvio === '') return setError('Es obligatorio completar la zona de envío.');
    }

    setLoading(true);
    setError(false);
    var tipoDeEnvioActivo;

    if (tipoEnvio.local) {
      tipoDeEnvioActivo = 'Local';
    }

    ;

    if (tipoEnvio.normal) {
      tipoDeEnvioActivo = 'Domicilio';
    }

    if (tipoEnvio.express) {
      tipoDeEnvioActivo = 'Express';
    }

    var dataEnvio = {
      tipo: tipoDeEnvioActivo,
      zona: zonaEnvio
    }; //guardo data de envio para luego de hacer el checkout de mercado pago, envio los datos al servidor para registrar la venta con el envio correspondiente.

    localStorage.setItem('dataEnvio', JSON.stringify(dataEnvio));
    var token = props.usuarioReducer.usuario.token;
    var productosCarrito = props.carritoReducer.productos;
    var productos = [];
    productosCarrito.forEach(function (prd) {
      productos.push({
        title: prd.subProducto,
        description: prd.tamaño,
        quantity: prd.cantidad,
        unit_price: prd.precioUnidad
      });
    });

    if (props.carritoReducer.idMedioPago == '1') {
      var headers = new Headers();
      headers.append('token', token);
      headers.append("Content-Type", "application/json");
      fetch("".concat(_config_index__WEBPACK_IMPORTED_MODULE_11__["API"], "/mercadopago"), {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(productos)
      }).then(function (res) {
        return res.json();
      }).then(function (datamp) {
        var response = datamp.info.response;
        setLoading(false);
        window.location.assign(response.init_point);
      })["catch"](function (err) {
        console.log(err);
        setLoading(false);
        setError(err.message);
      });
    } else {
      var prevCarrito = JSON.parse(localStorage.getItem('carrito'));
      console.log(prevCarrito);
    }
  };

  return !props.usuarioReducer.logueado ? __jsx("div", {
    className: "mt-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 42
    }
  }, __jsx(_src_components_Error__WEBPACK_IMPORTED_MODULE_7__["default"], {
    message: "No puedes realizar una compra sin tener una sesi\xF3n activa.",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 64
    }
  })) : __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, props.carritoReducer.productos.length === 0 ? __jsx("div", {
    className: "mt-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 58
    }
  }, __jsx(_src_components_Error__WEBPACK_IMPORTED_MODULE_7__["default"], {
    message: "No hay productos para finalizar la compra.",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 80
    }
  })) : __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, loading ? __jsx("div", {
    className: "container-loader",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 32
    }
  }, __jsx(_src_components_Loader_index__WEBPACK_IMPORTED_MODULE_12__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 66
    }
  })) : null, __jsx(_src_components_Head__WEBPACK_IMPORTED_MODULE_5__["default"], {
    title: "Oliver Pet Shop",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 21
    }
  }), __jsx("div", {
    className: "jsx-1473839781" + " " + "container mb-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "jsx-1473839781" + " " + "row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "jsx-1473839781" + " " + "col-12 col-md-8 pt-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 29
    }
  }, __jsx("h2", {
    className: "jsx-1473839781",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 33
    }
  }, "\xDAltimos pasos para terminar tu compra"), error ? __jsx(_src_components_Error__WEBPACK_IMPORTED_MODULE_7__["default"], {
    message: error,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 42
    }
  }) : null, __jsx(_src_components_CardUbicacion_index__WEBPACK_IMPORTED_MODULE_2__["default"], {
    dataUser: props.usuarioReducer.usuario,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 33
    }
  }), __jsx("h2", {
    className: "jsx-1473839781" + " " + "mt-5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 33
    }
  }, "Opciones de env\xEDo"), __jsx(_src_components_OpcionesEnvio__WEBPACK_IMPORTED_MODULE_3__["default"], {
    tipoEnvio: tipoEnvio,
    cambiarTipoDeEnvio: cambiarTipoDeEnvio,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 33
    }
  }), __jsx(_src_components_ZonaEnvio__WEBPACK_IMPORTED_MODULE_4__["default"], {
    setZonaEnvio: insertarZonaDeEnvio,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 33
    }
  }), __jsx("h2", {
    className: "jsx-1473839781" + " " + "mt-5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 33
    }
  }, "Selecciona un medio de pago"), __jsx(_src_components_MediosDePago__WEBPACK_IMPORTED_MODULE_13__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 33
    }
  }), __jsx("button", {
    type: "button",
    onClick: handleClick,
    id: "btn-continuar",
    className: "jsx-1473839781" + " " + "btn btn-primary",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 33
    }
  }, "Continuar"), __jsx("div", {
    className: "jsx-1473839781" + " " + "divTotalMobile",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 33
    }
  }, __jsx("span", {
    id: "total",
    className: "jsx-1473839781",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 37
    }
  }, "$", props.carritoReducer.subtotal), __jsx("button", {
    type: "button",
    onClick: handleClick,
    className: "jsx-1473839781" + " " + "btn btn-primary",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 37
    }
  }, "Continuar"))), __jsx("div", {
    className: "jsx-1473839781" + " " + "col-12 col-md-4 detalleProductos",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 29
    }
  }, __jsx(_src_components_DetalleProductos__WEBPACK_IMPORTED_MODULE_6__["default"], {
    data: props.carritoReducer,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 33
    }
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1473839781",
    __self: _this
  }, "h2.jsx-1473839781{font-size:25px;}button#btn-continuar.jsx-1473839781{float:right;margin-top:20px;}.divTotalMobile.jsx-1473839781{display:none;}@media(max-width:768px){#btn-continuar.jsx-1473839781{display:none;}.divTotalMobile.jsx-1473839781{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;position:fixed;left:0;right:0px;bottom:0px;background-color:#f7f7f7;padding:16px;box-shadow:0 -2px 8px 2px rgba(0,0,0,.15);border-width:0 1px 1px;font-family:'Quicksand',sans-serif;}.detalleProductos.jsx-1473839781{display:none;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcZnJhbmNcXERvY3VtZW50c1xcb2xpdmVyLTJcXHNpdGlvLWRlc2FcXHBhZ2VzXFxjaGVja291dFxcaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0pvQyxBQUU0QyxBQUVBLEFBR1csQUFFRyxBQUVULEFBY2pCLFlBbkJKLENBQzRCLEFBRUcsQUFnQjFCLEVBdkJZLGFBSWhCLDhDQU1xQyxtSEFDZCxlQUNULE9BQ0csVUFDRSxXQUNjLHlCQUNaLGFBQzZCLDBDQUNuQix1QkFDYSxtQ0FDeEMiLCJmaWxlIjoiQzpcXFVzZXJzXFxmcmFuY1xcRG9jdW1lbnRzXFxvbGl2ZXItMlxcc2l0aW8tZGVzYVxccGFnZXNcXGNoZWNrb3V0XFxpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBDYXJkVWJpY2FjaW9uIGZyb20gJy4uLy4uL3NyYy9jb21wb25lbnRzL0NhcmRVYmljYWNpb24vaW5kZXgnOyBcclxuaW1wb3J0IE9wY2lvbmVzRW52aW8gZnJvbSAnLi4vLi4vc3JjL2NvbXBvbmVudHMvT3BjaW9uZXNFbnZpbyc7XHJcbmltcG9ydCBab25hRW52aW8gZnJvbSAnLi4vLi4vc3JjL2NvbXBvbmVudHMvWm9uYUVudmlvJztcclxuaW1wb3J0IEhlYWQgZnJvbSAnLi4vLi4vc3JjL2NvbXBvbmVudHMvSGVhZCc7XHJcbmltcG9ydCBEZXRhbGxlUHJvZHVjdG9zIGZyb20gJy4uLy4uL3NyYy9jb21wb25lbnRzL0RldGFsbGVQcm9kdWN0b3MnO1xyXG5pbXBvcnQgRXJyb3IgZnJvbSAnLi4vLi4vc3JjL2NvbXBvbmVudHMvRXJyb3InO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgKiBhcyBjYXJyaXRvQWN0aW9ucyBmcm9tICcuLi8uLi9zdG9yZS9hY3Rpb25zL2NhcnJpdG9BY3Rpb25zJztcclxuaW1wb3J0ICogYXMgdXN1YXJpb0FjdGlvbnMgZnJvbSAnLi4vLi4vc3RvcmUvYWN0aW9ucy91c3VhcmlvQWN0aW9ucyc7XHJcbmltcG9ydCB7QVBJfSBmcm9tICcuLi8uLi9jb25maWcvaW5kZXgnO1xyXG5pbXBvcnQgTG9hZGVyIGZyb20gJy4uLy4uL3NyYy9jb21wb25lbnRzL0xvYWRlci9pbmRleCc7XHJcbmltcG9ydCBNZWRpb3NEZVBhZ28gZnJvbSAnLi4vLi4vc3JjL2NvbXBvbmVudHMvTWVkaW9zRGVQYWdvJztcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XHJcblxyXG5jb25zdCB7dHJhZXJQcm9kdWN0b3M6Y2Fycml0b1RyYWVyUHJvZHVjdG9zLGNhbWJpYXJNZWRpb0RlUGFnb30gPSBjYXJyaXRvQWN0aW9ucztcclxuY29uc3Qge3ZlcmlmaWNhclNlc2lvbn0gPSB1c3VhcmlvQWN0aW9ucztcclxuXHJcbmNvbnN0IENoZWNrb3V0ID0gKHByb3BzKSA9PiB7XHJcbiAgICBjb25zdCBbdGlwb0VudmlvLCBzZXRUaXBvRW52aW9dID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIG5vcm1hbDp0cnVlLFxyXG4gICAgICAgIGV4cHJlc3M6ZmFsc2UsXHJcbiAgICAgICAgbG9jYWw6ZmFsc2VcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IFt6b25hRW52aW8sIHNldFpvbmFFbnZpb10gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdib2R5JylbMF0uc3R5bGUub3ZlcmZsb3dZID0gJ3Njcm9sbCc7XHJcbiAgICAgICAgcHJvcHMuY2Fycml0b1RyYWVyUHJvZHVjdG9zKCk7XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgY29uc3QgY2FtYmlhclRpcG9EZUVudmlvID0gdGlwb0RlRW52aW89PntcclxuICAgICAgICBpZih0aXBvRGVFbnZpbz09PSdub3JtYWwnKXtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvcm0tem9uYS1lbnZpbycpLnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKTtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvcm0tbWVkaW9zLXBhZ28nKS5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywndHJ1ZScpO1xyXG4gICAgICAgICAgICBwcm9wcy5jYW1iaWFyTWVkaW9EZVBhZ28oJzEnKTtcclxuICAgICAgICAgICAgcmV0dXJuIHNldFRpcG9FbnZpbyh7XHJcbiAgICAgICAgICAgICAgICBub3JtYWw6dHJ1ZSxcclxuICAgICAgICAgICAgICAgIGV4cHJlc3M6ZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBsb2NhbDpmYWxzZVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZih0aXBvRGVFbnZpbz09PSdleHByZXNzJyl7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb3JtLXpvbmEtZW52aW8nKS5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb3JtLW1lZGlvcy1wYWdvJykuc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsJ3RydWUnKTtcclxuICAgICAgICAgICAgcHJvcHMuY2FtYmlhck1lZGlvRGVQYWdvKCcxJyk7XHJcbiAgICAgICAgICAgIHJldHVybiBzZXRUaXBvRW52aW8oe1xyXG4gICAgICAgICAgICAgICAgbm9ybWFsOmZhbHNlLFxyXG4gICAgICAgICAgICAgICAgZXhwcmVzczp0cnVlLFxyXG4gICAgICAgICAgICAgICAgbG9jYWw6ZmFsc2VcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvcm0tem9uYS1lbnZpbycpLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCd0cnVlJyk7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvcm0tbWVkaW9zLXBhZ28nKS5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7XHJcbiAgICAgICAgcmV0dXJuIHNldFRpcG9FbnZpbyh7XHJcbiAgICAgICAgICAgIG5vcm1hbDpmYWxzZSxcclxuICAgICAgICAgICAgZXhwcmVzczpmYWxzZSxcclxuICAgICAgICAgICAgbG9jYWw6dHJ1ZVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaW5zZXJ0YXJab25hRGVFbnZpbyA9IHpvbmE9PntcclxuICAgICAgICBzZXRab25hRW52aW8oem9uYSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoKT0+e1xyXG4gICAgICAgIGlmKCFwcm9wcy51c3VhcmlvUmVkdWNlci51c3VhcmlvLmFkZHJlc3MgfHwgcHJvcHMudXN1YXJpb1JlZHVjZXIudXN1YXJpby5hZGRyZXNzPT09JycpIHJldHVybiBzZXRFcnJvcignRXMgb2JsaWdhdG9yaW8gY29tcGxldGFyIHR1IHViaWNhY2nDs24uJyk7XHJcbiAgICAgICAgaWYocHJvcHMuY2Fycml0b1JlZHVjZXIuaWRNZWRpb1BhZ289PScnKSByZXR1cm4gc2V0RXJyb3IoJ0VzIG9ibGlnYXRvcmlvIGNvbXBsZXRhciBlbCBtZWRpbyBkZSBwYWdvJyk7XHJcblxyXG4gICAgICAgIGlmKCF0aXBvRW52aW8ubG9jYWwpe1xyXG4gICAgICAgICAgICAvL3NpIG5vIHNlbGVjY2lvbmEgcmV0aXJvIGVuIGVsIGxvY2FsLCBlcyBvYmxpZ2F0b3JpbyBjb21wbGV0YXIgbGEgem9uYSBkZSBlbnbDrW9cclxuICAgICAgICAgICAgaWYoem9uYUVudmlvPT09JycpIHJldHVybiBzZXRFcnJvcignRXMgb2JsaWdhdG9yaW8gY29tcGxldGFyIGxhIHpvbmEgZGUgZW52w61vLicpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2V0TG9hZGluZyh0cnVlKTtcclxuICAgICAgICBzZXRFcnJvcihmYWxzZSk7XHJcbiAgICAgICAgbGV0IHRpcG9EZUVudmlvQWN0aXZvO1xyXG4gICAgICAgIGlmKHRpcG9FbnZpby5sb2NhbCl7dGlwb0RlRW52aW9BY3Rpdm89J0xvY2FsJ307XHJcbiAgICAgICAgaWYodGlwb0VudmlvLm5vcm1hbCl7dGlwb0RlRW52aW9BY3Rpdm89J0RvbWljaWxpbyd9XHJcbiAgICAgICAgaWYodGlwb0VudmlvLmV4cHJlc3Mpe3RpcG9EZUVudmlvQWN0aXZvPSdFeHByZXNzJ31cclxuICAgICAgICBsZXQgZGF0YUVudmlvID0ge1xyXG4gICAgICAgICAgICB0aXBvOnRpcG9EZUVudmlvQWN0aXZvLFxyXG4gICAgICAgICAgICB6b25hOnpvbmFFbnZpb1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL2d1YXJkbyBkYXRhIGRlIGVudmlvIHBhcmEgbHVlZ28gZGUgaGFjZXIgZWwgY2hlY2tvdXQgZGUgbWVyY2FkbyBwYWdvLCBlbnZpbyBsb3MgZGF0b3MgYWwgc2Vydmlkb3IgcGFyYSByZWdpc3RyYXIgbGEgdmVudGEgY29uIGVsIGVudmlvIGNvcnJlc3BvbmRpZW50ZS5cclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZGF0YUVudmlvJyxKU09OLnN0cmluZ2lmeShkYXRhRW52aW8pKTtcclxuXHJcbiAgICAgICAgY29uc3Qge3Rva2VufSA9IHByb3BzLnVzdWFyaW9SZWR1Y2VyLnVzdWFyaW87XHJcbiAgICAgICAgY29uc3Qge3Byb2R1Y3Rvczpwcm9kdWN0b3NDYXJyaXRvfSA9IHByb3BzLmNhcnJpdG9SZWR1Y2VyO1xyXG4gICAgICAgIGxldCBwcm9kdWN0b3MgPSBbXTtcclxuICAgICAgICBwcm9kdWN0b3NDYXJyaXRvLmZvckVhY2gocHJkID0+IHtcclxuICAgICAgICAgICAgcHJvZHVjdG9zLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6cHJkLnN1YlByb2R1Y3RvLFxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246cHJkLnRhbWHDsW8sXHJcbiAgICAgICAgICAgICAgICBxdWFudGl0eTpwcmQuY2FudGlkYWQsXHJcbiAgICAgICAgICAgICAgICB1bml0X3ByaWNlOnByZC5wcmVjaW9VbmlkYWRcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KTtcclxuICAgICAgICBpZihwcm9wcy5jYXJyaXRvUmVkdWNlci5pZE1lZGlvUGFnbyA9PSAnMScpe1xyXG4gICAgICAgICAgICBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XHJcbiAgICAgICAgICAgIGhlYWRlcnMuYXBwZW5kKCd0b2tlbicsdG9rZW4pO1xyXG4gICAgICAgICAgICBoZWFkZXJzLmFwcGVuZChcIkNvbnRlbnQtVHlwZVwiLCBcImFwcGxpY2F0aW9uL2pzb25cIik7XHJcbiAgICAgICAgICAgIGZldGNoKGAke0FQSX0vbWVyY2Fkb3BhZ29gLHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZDonUE9TVCcsXHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzLFxyXG4gICAgICAgICAgICAgICAgYm9keTpKU09OLnN0cmluZ2lmeShwcm9kdWN0b3MpXHJcbiAgICAgICAgICAgIH0pLnRoZW4ocmVzPT5yZXMuanNvbigpKS50aGVuKGRhdGFtcD0+e1xyXG4gICAgICAgICAgICAgICAgY29uc3Qge3Jlc3BvbnNlfSA9IGRhdGFtcC5pbmZvO1xyXG4gICAgICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uYXNzaWduKHJlc3BvbnNlLmluaXRfcG9pbnQpO1xyXG4gICAgICAgICAgICB9KS5jYXRjaChlcnI9PntcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIHNldEVycm9yKGVyci5tZXNzYWdlKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgY29uc3QgcHJldkNhcnJpdG8gPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjYXJyaXRvJykpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhwcmV2Q2Fycml0byk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgKCFwcm9wcy51c3VhcmlvUmVkdWNlci5sb2d1ZWFkbyk/PGRpdiBjbGFzc05hbWU9XCJtdC0zXCI+PEVycm9yIG1lc3NhZ2U9XCJObyBwdWVkZXMgcmVhbGl6YXIgdW5hIGNvbXByYSBzaW4gdGVuZXIgdW5hIHNlc2nDs24gYWN0aXZhLlwiLz48L2Rpdj46XHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgeyhwcm9wcy5jYXJyaXRvUmVkdWNlci5wcm9kdWN0b3MubGVuZ3RoPT09MCk/PGRpdiBjbGFzc05hbWU9XCJtdC0zXCI+PEVycm9yIG1lc3NhZ2U9XCJObyBoYXkgcHJvZHVjdG9zIHBhcmEgZmluYWxpemFyIGxhIGNvbXByYS5cIi8+PC9kaXY+OlxyXG4gICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICB7KGxvYWRpbmcpPzxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWxvYWRlclwiPjxMb2FkZXIvPjwvZGl2PjpudWxsfSAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxIZWFkIHRpdGxlPVwiT2xpdmVyIFBldCBTaG9wXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG1iLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1tZC04IHB0LTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDI+w5psdGltb3MgcGFzb3MgcGFyYSB0ZXJtaW5hciB0dSBjb21wcmE8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsoZXJyb3IpPzxFcnJvciBtZXNzYWdlPXtlcnJvcn0vPjpudWxsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkVWJpY2FjaW9uIGRhdGFVc2VyPXtwcm9wcy51c3VhcmlvUmVkdWNlci51c3VhcmlvfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cIm10LTVcIj5PcGNpb25lcyBkZSBlbnbDrW88L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPcGNpb25lc0VudmlvIHRpcG9FbnZpbz17dGlwb0VudmlvfSBjYW1iaWFyVGlwb0RlRW52aW89e2NhbWJpYXJUaXBvRGVFbnZpb30vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxab25hRW52aW8gc2V0Wm9uYUVudmlvPXtpbnNlcnRhclpvbmFEZUVudmlvfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cIm10LTVcIj5TZWxlY2Npb25hIHVuIG1lZGlvIGRlIHBhZ288L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZWRpb3NEZVBhZ28vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfSBpZD1cImJ0bi1jb250aW51YXJcIj5Db250aW51YXI8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpdlRvdGFsTW9iaWxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGlkPVwidG90YWxcIj4ke3Byb3BzLmNhcnJpdG9SZWR1Y2VyLnN1YnRvdGFsfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCIgb25DbGljaz17aGFuZGxlQ2xpY2t9PkNvbnRpbnVhcjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtbWQtNCBkZXRhbGxlUHJvZHVjdG9zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERldGFsbGVQcm9kdWN0b3MgZGF0YT17cHJvcHMuY2Fycml0b1JlZHVjZXJ9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaDJ7Zm9udC1zaXplOjI1cHh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBidXR0b24jYnRuLWNvbnRpbnVhcntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbG9hdDpyaWdodDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOjIwcHhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5kaXZUb3RhbE1vYmlsZXtkaXNwbGF5Om5vbmV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBAbWVkaWEobWF4LXdpZHRoOjc2OHB4KXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAjYnRuLWNvbnRpbnVhcntkaXNwbGF5Om5vbmV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmRpdlRvdGFsTW9iaWxle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6MDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3R0b206IDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZjdmNztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTZweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCAtMnB4IDhweCAycHggcmdiYSgwLDAsMCwuMTUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItd2lkdGg6IDAgMXB4IDFweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdRdWlja3NhbmQnLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmRldGFsbGVQcm9kdWN0b3N7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6bm9uZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufVxyXG4gXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9ICh7Y2Fycml0b1JlZHVjZXIsdXN1YXJpb1JlZHVjZXJ9KT0+e1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBjYXJyaXRvUmVkdWNlcixcclxuICAgICAgICB1c3VhcmlvUmVkdWNlclxyXG4gICAgfTtcclxufVxyXG5cclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0ge1xyXG4gICAgY2Fycml0b1RyYWVyUHJvZHVjdG9zLFxyXG4gICAgdmVyaWZpY2FyU2VzaW9uLFxyXG4gICAgY2FtYmlhck1lZGlvRGVQYWdvXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcyxtYXBEaXNwYXRjaFRvUHJvcHMpKENoZWNrb3V0KTsiXX0= */\n/*@ sourceURL=C:\\\\Users\\\\franc\\\\Documents\\\\oliver-2\\\\sitio-desa\\\\pages\\\\checkout\\\\index.js */"))));
};

_s(Checkout, "jMJTYO/N53YYDESSEdp1y2n/zsY=");

_c = Checkout;

var mapStateToProps = function mapStateToProps(_ref) {
  var carritoReducer = _ref.carritoReducer,
      usuarioReducer = _ref.usuarioReducer;
  return {
    carritoReducer: carritoReducer,
    usuarioReducer: usuarioReducer
  };
};

var mapDispatchToProps = {
  carritoTraerProductos: carritoTraerProductos,
  verificarSesion: verificarSesion,
  cambiarMedioDePago: cambiarMedioDePago
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["connect"])(mapStateToProps, mapDispatchToProps)(Checkout));

var _c;

$RefreshReg$(_c, "Checkout");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2hlY2tvdXQvaW5kZXguanMiXSwibmFtZXMiOlsiY2Fycml0b1RyYWVyUHJvZHVjdG9zIiwiY2Fycml0b0FjdGlvbnMiLCJjYW1iaWFyTWVkaW9EZVBhZ28iLCJ2ZXJpZmljYXJTZXNpb24iLCJ1c3VhcmlvQWN0aW9ucyIsIkNoZWNrb3V0IiwicHJvcHMiLCJ1c2VTdGF0ZSIsIm5vcm1hbCIsImV4cHJlc3MiLCJsb2NhbCIsInRpcG9FbnZpbyIsInNldFRpcG9FbnZpbyIsInpvbmFFbnZpbyIsInNldFpvbmFFbnZpbyIsImVycm9yIiwic2V0RXJyb3IiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInVzZUVmZmVjdCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJzdHlsZSIsIm92ZXJmbG93WSIsImNhbWJpYXJUaXBvRGVFbnZpbyIsInRpcG9EZUVudmlvIiwiZ2V0RWxlbWVudEJ5SWQiLCJyZW1vdmVBdHRyaWJ1dGUiLCJzZXRBdHRyaWJ1dGUiLCJpbnNlcnRhclpvbmFEZUVudmlvIiwiem9uYSIsImhhbmRsZUNsaWNrIiwidXN1YXJpb1JlZHVjZXIiLCJ1c3VhcmlvIiwiYWRkcmVzcyIsImNhcnJpdG9SZWR1Y2VyIiwiaWRNZWRpb1BhZ28iLCJ0aXBvRGVFbnZpb0FjdGl2byIsImRhdGFFbnZpbyIsInRpcG8iLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiSlNPTiIsInN0cmluZ2lmeSIsInRva2VuIiwicHJvZHVjdG9zQ2Fycml0byIsInByb2R1Y3RvcyIsImZvckVhY2giLCJwcmQiLCJwdXNoIiwidGl0bGUiLCJzdWJQcm9kdWN0byIsImRlc2NyaXB0aW9uIiwidGFtYcOxbyIsInF1YW50aXR5IiwiY2FudGlkYWQiLCJ1bml0X3ByaWNlIiwicHJlY2lvVW5pZGFkIiwiaGVhZGVycyIsIkhlYWRlcnMiLCJhcHBlbmQiLCJmZXRjaCIsIkFQSSIsIm1ldGhvZCIsImJvZHkiLCJ0aGVuIiwicmVzIiwianNvbiIsImRhdGFtcCIsInJlc3BvbnNlIiwiaW5mbyIsIndpbmRvdyIsImxvY2F0aW9uIiwiYXNzaWduIiwiaW5pdF9wb2ludCIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJtZXNzYWdlIiwicHJldkNhcnJpdG8iLCJwYXJzZSIsImdldEl0ZW0iLCJsb2d1ZWFkbyIsImxlbmd0aCIsInN1YnRvdGFsIiwibWFwU3RhdGVUb1Byb3BzIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiY29ubmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtJQUVzQkEscUIsR0FBNENDLDRFO0lBQXRCQyxrQixHQUFzQkQsZ0Y7SUFDM0RFLGUsR0FBbUJDLDhFOztBQUUxQixJQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFBQSxrQkFDVUMsc0RBQVEsQ0FBQztBQUN2Q0MsVUFBTSxFQUFDLElBRGdDO0FBRXZDQyxXQUFPLEVBQUMsS0FGK0I7QUFHdkNDLFNBQUssRUFBQztBQUhpQyxHQUFELENBRGxCO0FBQUEsTUFDakJDLFNBRGlCO0FBQUEsTUFDTkMsWUFETTs7QUFBQSxtQkFPVUwsc0RBQVEsQ0FBQyxFQUFELENBUGxCO0FBQUEsTUFPakJNLFNBUGlCO0FBQUEsTUFPTkMsWUFQTTs7QUFBQSxtQkFRRVAsc0RBQVEsQ0FBQyxLQUFELENBUlY7QUFBQSxNQVFqQlEsS0FSaUI7QUFBQSxNQVFWQyxRQVJVOztBQUFBLG1CQVNNVCxzREFBUSxDQUFDLEtBQUQsQ0FUZDtBQUFBLE1BU2pCVSxPQVRpQjtBQUFBLE1BU1JDLFVBVFE7O0FBV3hCQyx5REFBUyxDQUFDLFlBQU07QUFDWkMsWUFBUSxDQUFDQyxvQkFBVCxDQUE4QixNQUE5QixFQUFzQyxDQUF0QyxFQUF5Q0MsS0FBekMsQ0FBK0NDLFNBQS9DLEdBQTJE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LENBTEQ7O0FBT0EsSUFBTXNELGtCQUFrQixHQUFHO0FBQ3ZCdEYsdUJBQXFCLEVBQXJCQSxxQkFEdUI7QUFFdkJHLGlCQUFlLEVBQWZBLGVBRnVCO0FBR3ZCRCxvQkFBa0IsRUFBbEJBO0FBSHVCLENBQTNCO0FBTWVxRiwwSEFBTyxDQUFDRixlQUFELEVBQWlCQyxrQkFBakIsQ0FBUCxDQUE0Q2pGLFFBQTVDLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY2hlY2tvdXQuMjdhNjE3MTMwYTA2ZDE1MDY3NTEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBDYXJkVWJpY2FjaW9uIGZyb20gJy4uLy4uL3NyYy9jb21wb25lbnRzL0NhcmRVYmljYWNpb24vaW5kZXgnOyBcclxuaW1wb3J0IE9wY2lvbmVzRW52aW8gZnJvbSAnLi4vLi4vc3JjL2NvbXBvbmVudHMvT3BjaW9uZXNFbnZpbyc7XHJcbmltcG9ydCBab25hRW52aW8gZnJvbSAnLi4vLi4vc3JjL2NvbXBvbmVudHMvWm9uYUVudmlvJztcclxuaW1wb3J0IEhlYWQgZnJvbSAnLi4vLi4vc3JjL2NvbXBvbmVudHMvSGVhZCc7XHJcbmltcG9ydCBEZXRhbGxlUHJvZHVjdG9zIGZyb20gJy4uLy4uL3NyYy9jb21wb25lbnRzL0RldGFsbGVQcm9kdWN0b3MnO1xyXG5pbXBvcnQgRXJyb3IgZnJvbSAnLi4vLi4vc3JjL2NvbXBvbmVudHMvRXJyb3InO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgKiBhcyBjYXJyaXRvQWN0aW9ucyBmcm9tICcuLi8uLi9zdG9yZS9hY3Rpb25zL2NhcnJpdG9BY3Rpb25zJztcclxuaW1wb3J0ICogYXMgdXN1YXJpb0FjdGlvbnMgZnJvbSAnLi4vLi4vc3RvcmUvYWN0aW9ucy91c3VhcmlvQWN0aW9ucyc7XHJcbmltcG9ydCB7QVBJfSBmcm9tICcuLi8uLi9jb25maWcvaW5kZXgnO1xyXG5pbXBvcnQgTG9hZGVyIGZyb20gJy4uLy4uL3NyYy9jb21wb25lbnRzL0xvYWRlci9pbmRleCc7XHJcbmltcG9ydCBNZWRpb3NEZVBhZ28gZnJvbSAnLi4vLi4vc3JjL2NvbXBvbmVudHMvTWVkaW9zRGVQYWdvJztcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XHJcblxyXG5jb25zdCB7dHJhZXJQcm9kdWN0b3M6Y2Fycml0b1RyYWVyUHJvZHVjdG9zLGNhbWJpYXJNZWRpb0RlUGFnb30gPSBjYXJyaXRvQWN0aW9ucztcclxuY29uc3Qge3ZlcmlmaWNhclNlc2lvbn0gPSB1c3VhcmlvQWN0aW9ucztcclxuXHJcbmNvbnN0IENoZWNrb3V0ID0gKHByb3BzKSA9PiB7XHJcbiAgICBjb25zdCBbdGlwb0VudmlvLCBzZXRUaXBvRW52aW9dID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIG5vcm1hbDp0cnVlLFxyXG4gICAgICAgIGV4cHJlc3M6ZmFsc2UsXHJcbiAgICAgICAgbG9jYWw6ZmFsc2VcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IFt6b25hRW52aW8sIHNldFpvbmFFbnZpb10gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdib2R5JylbMF0uc3R5bGUub3ZlcmZsb3dZID0gJ3Njcm9sbCc7XHJcbiAgICAgICAgcHJvcHMuY2Fycml0b1RyYWVyUHJvZHVjdG9zKCk7XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgY29uc3QgY2FtYmlhclRpcG9EZUVudmlvID0gdGlwb0RlRW52aW89PntcclxuICAgICAgICBpZih0aXBvRGVFbnZpbz09PSdub3JtYWwnKXtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvcm0tem9uYS1lbnZpbycpLnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKTtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvcm0tbWVkaW9zLXBhZ28nKS5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywndHJ1ZScpO1xyXG4gICAgICAgICAgICBwcm9wcy5jYW1iaWFyTWVkaW9EZVBhZ28oJzEnKTtcclxuICAgICAgICAgICAgcmV0dXJuIHNldFRpcG9FbnZpbyh7XHJcbiAgICAgICAgICAgICAgICBub3JtYWw6dHJ1ZSxcclxuICAgICAgICAgICAgICAgIGV4cHJlc3M6ZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBsb2NhbDpmYWxzZVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZih0aXBvRGVFbnZpbz09PSdleHByZXNzJyl7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb3JtLXpvbmEtZW52aW8nKS5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb3JtLW1lZGlvcy1wYWdvJykuc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsJ3RydWUnKTtcclxuICAgICAgICAgICAgcHJvcHMuY2FtYmlhck1lZGlvRGVQYWdvKCcxJyk7XHJcbiAgICAgICAgICAgIHJldHVybiBzZXRUaXBvRW52aW8oe1xyXG4gICAgICAgICAgICAgICAgbm9ybWFsOmZhbHNlLFxyXG4gICAgICAgICAgICAgICAgZXhwcmVzczp0cnVlLFxyXG4gICAgICAgICAgICAgICAgbG9jYWw6ZmFsc2VcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvcm0tem9uYS1lbnZpbycpLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCd0cnVlJyk7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvcm0tbWVkaW9zLXBhZ28nKS5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7XHJcbiAgICAgICAgcmV0dXJuIHNldFRpcG9FbnZpbyh7XHJcbiAgICAgICAgICAgIG5vcm1hbDpmYWxzZSxcclxuICAgICAgICAgICAgZXhwcmVzczpmYWxzZSxcclxuICAgICAgICAgICAgbG9jYWw6dHJ1ZVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaW5zZXJ0YXJab25hRGVFbnZpbyA9IHpvbmE9PntcclxuICAgICAgICBzZXRab25hRW52aW8oem9uYSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoKT0+e1xyXG4gICAgICAgIGlmKCFwcm9wcy51c3VhcmlvUmVkdWNlci51c3VhcmlvLmFkZHJlc3MgfHwgcHJvcHMudXN1YXJpb1JlZHVjZXIudXN1YXJpby5hZGRyZXNzPT09JycpIHJldHVybiBzZXRFcnJvcignRXMgb2JsaWdhdG9yaW8gY29tcGxldGFyIHR1IHViaWNhY2nDs24uJyk7XHJcbiAgICAgICAgaWYocHJvcHMuY2Fycml0b1JlZHVjZXIuaWRNZWRpb1BhZ289PScnKSByZXR1cm4gc2V0RXJyb3IoJ0VzIG9ibGlnYXRvcmlvIGNvbXBsZXRhciBlbCBtZWRpbyBkZSBwYWdvJyk7XHJcblxyXG4gICAgICAgIGlmKCF0aXBvRW52aW8ubG9jYWwpe1xyXG4gICAgICAgICAgICAvL3NpIG5vIHNlbGVjY2lvbmEgcmV0aXJvIGVuIGVsIGxvY2FsLCBlcyBvYmxpZ2F0b3JpbyBjb21wbGV0YXIgbGEgem9uYSBkZSBlbnbDrW9cclxuICAgICAgICAgICAgaWYoem9uYUVudmlvPT09JycpIHJldHVybiBzZXRFcnJvcignRXMgb2JsaWdhdG9yaW8gY29tcGxldGFyIGxhIHpvbmEgZGUgZW52w61vLicpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2V0TG9hZGluZyh0cnVlKTtcclxuICAgICAgICBzZXRFcnJvcihmYWxzZSk7XHJcbiAgICAgICAgbGV0IHRpcG9EZUVudmlvQWN0aXZvO1xyXG4gICAgICAgIGlmKHRpcG9FbnZpby5sb2NhbCl7dGlwb0RlRW52aW9BY3Rpdm89J0xvY2FsJ307XHJcbiAgICAgICAgaWYodGlwb0VudmlvLm5vcm1hbCl7dGlwb0RlRW52aW9BY3Rpdm89J0RvbWljaWxpbyd9XHJcbiAgICAgICAgaWYodGlwb0VudmlvLmV4cHJlc3Mpe3RpcG9EZUVudmlvQWN0aXZvPSdFeHByZXNzJ31cclxuICAgICAgICBsZXQgZGF0YUVudmlvID0ge1xyXG4gICAgICAgICAgICB0aXBvOnRpcG9EZUVudmlvQWN0aXZvLFxyXG4gICAgICAgICAgICB6b25hOnpvbmFFbnZpb1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL2d1YXJkbyBkYXRhIGRlIGVudmlvIHBhcmEgbHVlZ28gZGUgaGFjZXIgZWwgY2hlY2tvdXQgZGUgbWVyY2FkbyBwYWdvLCBlbnZpbyBsb3MgZGF0b3MgYWwgc2Vydmlkb3IgcGFyYSByZWdpc3RyYXIgbGEgdmVudGEgY29uIGVsIGVudmlvIGNvcnJlc3BvbmRpZW50ZS5cclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZGF0YUVudmlvJyxKU09OLnN0cmluZ2lmeShkYXRhRW52aW8pKTtcclxuXHJcbiAgICAgICAgY29uc3Qge3Rva2VufSA9IHByb3BzLnVzdWFyaW9SZWR1Y2VyLnVzdWFyaW87XHJcbiAgICAgICAgY29uc3Qge3Byb2R1Y3Rvczpwcm9kdWN0b3NDYXJyaXRvfSA9IHByb3BzLmNhcnJpdG9SZWR1Y2VyO1xyXG4gICAgICAgIGxldCBwcm9kdWN0b3MgPSBbXTtcclxuICAgICAgICBwcm9kdWN0b3NDYXJyaXRvLmZvckVhY2gocHJkID0+IHtcclxuICAgICAgICAgICAgcHJvZHVjdG9zLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6cHJkLnN1YlByb2R1Y3RvLFxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246cHJkLnRhbWHDsW8sXHJcbiAgICAgICAgICAgICAgICBxdWFudGl0eTpwcmQuY2FudGlkYWQsXHJcbiAgICAgICAgICAgICAgICB1bml0X3ByaWNlOnByZC5wcmVjaW9VbmlkYWRcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KTtcclxuICAgICAgICBpZihwcm9wcy5jYXJyaXRvUmVkdWNlci5pZE1lZGlvUGFnbyA9PSAnMScpe1xyXG4gICAgICAgICAgICBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XHJcbiAgICAgICAgICAgIGhlYWRlcnMuYXBwZW5kKCd0b2tlbicsdG9rZW4pO1xyXG4gICAgICAgICAgICBoZWFkZXJzLmFwcGVuZChcIkNvbnRlbnQtVHlwZVwiLCBcImFwcGxpY2F0aW9uL2pzb25cIik7XHJcbiAgICAgICAgICAgIGZldGNoKGAke0FQSX0vbWVyY2Fkb3BhZ29gLHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZDonUE9TVCcsXHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzLFxyXG4gICAgICAgICAgICAgICAgYm9keTpKU09OLnN0cmluZ2lmeShwcm9kdWN0b3MpXHJcbiAgICAgICAgICAgIH0pLnRoZW4ocmVzPT5yZXMuanNvbigpKS50aGVuKGRhdGFtcD0+e1xyXG4gICAgICAgICAgICAgICAgY29uc3Qge3Jlc3BvbnNlfSA9IGRhdGFtcC5pbmZvO1xyXG4gICAgICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uYXNzaWduKHJlc3BvbnNlLmluaXRfcG9pbnQpO1xyXG4gICAgICAgICAgICB9KS5jYXRjaChlcnI9PntcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIHNldEVycm9yKGVyci5tZXNzYWdlKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgY29uc3QgcHJldkNhcnJpdG8gPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjYXJyaXRvJykpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhwcmV2Q2Fycml0byk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgKCFwcm9wcy51c3VhcmlvUmVkdWNlci5sb2d1ZWFkbyk/PGRpdiBjbGFzc05hbWU9XCJtdC0zXCI+PEVycm9yIG1lc3NhZ2U9XCJObyBwdWVkZXMgcmVhbGl6YXIgdW5hIGNvbXByYSBzaW4gdGVuZXIgdW5hIHNlc2nDs24gYWN0aXZhLlwiLz48L2Rpdj46XHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgeyhwcm9wcy5jYXJyaXRvUmVkdWNlci5wcm9kdWN0b3MubGVuZ3RoPT09MCk/PGRpdiBjbGFzc05hbWU9XCJtdC0zXCI+PEVycm9yIG1lc3NhZ2U9XCJObyBoYXkgcHJvZHVjdG9zIHBhcmEgZmluYWxpemFyIGxhIGNvbXByYS5cIi8+PC9kaXY+OlxyXG4gICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICB7KGxvYWRpbmcpPzxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWxvYWRlclwiPjxMb2FkZXIvPjwvZGl2PjpudWxsfSAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxIZWFkIHRpdGxlPVwiT2xpdmVyIFBldCBTaG9wXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG1iLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1tZC04IHB0LTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDI+w5psdGltb3MgcGFzb3MgcGFyYSB0ZXJtaW5hciB0dSBjb21wcmE8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsoZXJyb3IpPzxFcnJvciBtZXNzYWdlPXtlcnJvcn0vPjpudWxsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkVWJpY2FjaW9uIGRhdGFVc2VyPXtwcm9wcy51c3VhcmlvUmVkdWNlci51c3VhcmlvfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cIm10LTVcIj5PcGNpb25lcyBkZSBlbnbDrW88L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPcGNpb25lc0VudmlvIHRpcG9FbnZpbz17dGlwb0VudmlvfSBjYW1iaWFyVGlwb0RlRW52aW89e2NhbWJpYXJUaXBvRGVFbnZpb30vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxab25hRW52aW8gc2V0Wm9uYUVudmlvPXtpbnNlcnRhclpvbmFEZUVudmlvfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cIm10LTVcIj5TZWxlY2Npb25hIHVuIG1lZGlvIGRlIHBhZ288L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZWRpb3NEZVBhZ28vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfSBpZD1cImJ0bi1jb250aW51YXJcIj5Db250aW51YXI8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpdlRvdGFsTW9iaWxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGlkPVwidG90YWxcIj4ke3Byb3BzLmNhcnJpdG9SZWR1Y2VyLnN1YnRvdGFsfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCIgb25DbGljaz17aGFuZGxlQ2xpY2t9PkNvbnRpbnVhcjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtbWQtNCBkZXRhbGxlUHJvZHVjdG9zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERldGFsbGVQcm9kdWN0b3MgZGF0YT17cHJvcHMuY2Fycml0b1JlZHVjZXJ9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaDJ7Zm9udC1zaXplOjI1cHh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBidXR0b24jYnRuLWNvbnRpbnVhcntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbG9hdDpyaWdodDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOjIwcHhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5kaXZUb3RhbE1vYmlsZXtkaXNwbGF5Om5vbmV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBAbWVkaWEobWF4LXdpZHRoOjc2OHB4KXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAjYnRuLWNvbnRpbnVhcntkaXNwbGF5Om5vbmV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmRpdlRvdGFsTW9iaWxle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6MDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3R0b206IDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZjdmNztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTZweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCAtMnB4IDhweCAycHggcmdiYSgwLDAsMCwuMTUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItd2lkdGg6IDAgMXB4IDFweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdRdWlja3NhbmQnLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmRldGFsbGVQcm9kdWN0b3N7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6bm9uZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufVxyXG4gXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9ICh7Y2Fycml0b1JlZHVjZXIsdXN1YXJpb1JlZHVjZXJ9KT0+e1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBjYXJyaXRvUmVkdWNlcixcclxuICAgICAgICB1c3VhcmlvUmVkdWNlclxyXG4gICAgfTtcclxufVxyXG5cclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0ge1xyXG4gICAgY2Fycml0b1RyYWVyUHJvZHVjdG9zLFxyXG4gICAgdmVyaWZpY2FyU2VzaW9uLFxyXG4gICAgY2FtYmlhck1lZGlvRGVQYWdvXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcyxtYXBEaXNwYXRjaFRvUHJvcHMpKENoZWNrb3V0KTsiXSwic291cmNlUm9vdCI6IiJ9