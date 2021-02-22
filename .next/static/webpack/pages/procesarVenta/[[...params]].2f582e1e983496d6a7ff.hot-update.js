webpackHotUpdate_N_E("pages/procesarVenta/[[...params]]",{

/***/ "./pages/procesarVenta/[[...params]].js":
/*!**********************************************!*\
  !*** ./pages/procesarVenta/[[...params]].js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _src_components_Head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../src/components/Head */ "./src/components/Head.js");
/* harmony import */ var _src_components_Loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../src/components/Loader */ "./src/components/Loader/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store_actions_carritoActions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../store/actions/carritoActions */ "./store/actions/carritoActions.js");
/* harmony import */ var _store_actions_enviosActions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../store/actions/enviosActions */ "./store/actions/enviosActions.js");
/* harmony import */ var _config_index__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../config/index */ "./config/index.js");
/* harmony import */ var _src_components_Error__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../src/components/Error */ "./src/components/Error.js");



var _this = undefined,
    _jsxFileName = "C:\\Users\\franc\\Documents\\oliver-2\\sitio-desa\\pages\\procesarVenta\\[[...params]].js",
    _s = $RefreshSig$();



var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;








var enviosGuardar = _store_actions_enviosActions__WEBPACK_IMPORTED_MODULE_8__["guardar"];
var carritoTraerProductos = _store_actions_carritoActions__WEBPACK_IMPORTED_MODULE_7__["traerProductos"];

var ProcesarVenta = function ProcesarVenta(props) {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      error = _useState[0],
      setError = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      ventaRegistrada = _useState2[0],
      setVentaRegistrada = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])( /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
    var dataEnvio;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            dataEnvio = JSON.parse(localStorage.getItem('dataEnvio'));
            console.log(dataEnvio);
            props.enviosGuardar(dataEnvio);
            props.carritoTraerProductos();

            if (props.usuarioReducer.logueado && props.carritoReducer.productos.length > 0 && props.enviosReducer.data) {
              console.log('jeje');
              procesarInfo();
            }

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })), [props.usuarioReducer]);
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    console.log(props.enviosReducer);
  }, [props.enviosReducer]);

  var procesarInfo = /*#__PURE__*/function () {
    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
      var idUsuario, _props$carritoReducer, subtotal, porcentaje_descuento, descuento, total, productos, idMedioPago, _props$enviosReducer$, zona, tipo, f, mes, dia, fecha, dataToRequest;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              idUsuario = props.usuarioReducer.usuario.idUsuario;
              _props$carritoReducer = props.carritoReducer, subtotal = _props$carritoReducer.subtotal, porcentaje_descuento = _props$carritoReducer.porcentaje_descuento, descuento = _props$carritoReducer.descuento, total = _props$carritoReducer.total, productos = _props$carritoReducer.productos, idMedioPago = _props$carritoReducer.idMedioPago;
              _props$enviosReducer$ = props.enviosReducer.data, zona = _props$enviosReducer$.zona, tipo = _props$enviosReducer$.tipo;
              f = new Date();
              mes = f.getMonth() < 10 ? "0".concat(f.getMonth() + 1) : "".concat(f.getMonth());
              dia = f.getDay() < 10 ? "0".concat(f.getDay()) : "".concat(f.getDay());
              fecha = "".concat(f.getFullYear(), "-").concat(mes, "-").concat(dia);
              dataToRequest = {
                envio: {
                  idZona: zona,
                  tipo: tipo
                },
                venta: {
                  subtotal: subtotal,
                  porcentaje_descuento: porcentaje_descuento,
                  descuento: descuento,
                  total: total,
                  idUsuario: idUsuario,
                  productos: productos,
                  fecha: fecha,
                  operacion_id: props.collection_id || null,
                  idMedioPago: idMedioPago
                }
              };
              console.log(dataToRequest); //return registrarVenta(dataToRequest);

            case 9:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function procesarInfo() {
      return _ref2.apply(this, arguments);
    };
  }();

  var registrarVenta = /*#__PURE__*/function () {
    var _ref3 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(data) {
      var headers, url, reqVenta;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              headers = new Headers();
              headers.append('token', props.usuarioReducer.usuario.token);
              headers.append("Content-Type", "application/json");
              url = !data.venta.operacion_id ? "".concat(_config_index__WEBPACK_IMPORTED_MODULE_9__["API"], "/registrarVenta?mercadoPago=false") : "".concat(_config_index__WEBPACK_IMPORTED_MODULE_9__["API"], "/registrarVenta?mercadoPago=true");
              _context3.next = 7;
              return fetch(url, {
                headers: headers,
                method: 'POST',
                body: JSON.stringify(data)
              });

            case 7:
              reqVenta = _context3.sent;

              if (reqVenta.status == 200) {
                localStorage.removeItem('dataEnvio');
                localStorage.removeItem('carrito');
                setVentaRegistrada('Felicidades, Tu venta se registró con éxito. En breve nos comunicaremos con usted para informarle el estado de su compra.');
                setTimeout(function () {
                  window.location.assign('/');
                }, 5000);
              } else {
                setError(true);
              }

              _context3.next = 14;
              break;

            case 11:
              _context3.prev = 11;
              _context3.t0 = _context3["catch"](0);
              setError(_context3.t0.message);

            case 14:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[0, 11]]);
    }));

    return function registrarVenta(_x) {
      return _ref3.apply(this, arguments);
    };
  }();

  return __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx(_src_components_Head__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: "Finalizacion de compra",
    metadesc: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "jsx-2063553454" + " " + "wrapper",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 13
    }
  }, !props.usuarioReducer.logueado || props.enviosReducer.error || props.carritoReducer.error || error ? __jsx(_src_components_Error__WEBPACK_IMPORTED_MODULE_10__["default"], {
    message: "Ha ocurrido un error, intentalo mas tarde",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 119
    }
  }) : __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, ventaRegistrada ? __jsx("div", {
    className: "jsx-2063553454" + " " + "alert alert-success",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 44
    }
  }, ventaRegistrada) : __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx(_src_components_Loader__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 33
    }
  }), __jsx("p", {
    className: "jsx-2063553454",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 33
    }
  }, "Su compra esta siento procesada, aguarde unos segundos...")))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "2063553454",
    __self: _this
  }, ".wrapper.jsx-2063553454{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:90vh;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcZnJhbmNcXERvY3VtZW50c1xcb2xpdmVyLTJcXHNpdGlvLWRlc2FcXHBhZ2VzXFxwcm9jZXNhclZlbnRhXFxbWy4uLnBhcmFtc11dLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFHd0IsQUFHaUMsMEVBQ1UsbUdBQ0osNkZBQ1AsWUFDVSw4RUFDekIiLCJmaWxlIjoiQzpcXFVzZXJzXFxmcmFuY1xcRG9jdW1lbnRzXFxvbGl2ZXItMlxcc2l0aW8tZGVzYVxccGFnZXNcXHByb2Nlc2FyVmVudGFcXFtbLi4ucGFyYW1zXV0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICcuLi8uLi9zcmMvY29tcG9uZW50cy9IZWFkJztcclxuaW1wb3J0IExvYWRlciBmcm9tICcuLi8uLi9zcmMvY29tcG9uZW50cy9Mb2FkZXInO1xyXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0ICogYXMgY2Fycml0b0FjdGlvbnMgZnJvbSAnLi4vLi4vc3RvcmUvYWN0aW9ucy9jYXJyaXRvQWN0aW9ucyc7XHJcbmltcG9ydCAqIGFzIGVudmlvc0FjdGlvbnMgZnJvbSAnLi4vLi4vc3RvcmUvYWN0aW9ucy9lbnZpb3NBY3Rpb25zJztcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtBUEl9IGZyb20gJy4uLy4uL2NvbmZpZy9pbmRleCc7XHJcbmltcG9ydCBFcnJvciBmcm9tICcuLi8uLi9zcmMvY29tcG9uZW50cy9FcnJvcic7XHJcblxyXG5jb25zdCB7Z3VhcmRhcjplbnZpb3NHdWFyZGFyfSA9IGVudmlvc0FjdGlvbnM7XHJcbmNvbnN0IHt0cmFlclByb2R1Y3RvczpjYXJyaXRvVHJhZXJQcm9kdWN0b3N9ID0gY2Fycml0b0FjdGlvbnM7XHJcblxyXG5jb25zdCBQcm9jZXNhclZlbnRhID0gKHByb3BzKSA9PiB7XHJcbiAgICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFt2ZW50YVJlZ2lzdHJhZGEsIHNldFZlbnRhUmVnaXN0cmFkYV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KGFzeW5jKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGRhdGFFbnZpbyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2RhdGFFbnZpbycpKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhkYXRhRW52aW8pO1xyXG4gICAgICAgIHByb3BzLmVudmlvc0d1YXJkYXIoZGF0YUVudmlvKTtcclxuICAgICAgICBwcm9wcy5jYXJyaXRvVHJhZXJQcm9kdWN0b3MoKTtcclxuICAgICAgICBpZihwcm9wcy51c3VhcmlvUmVkdWNlci5sb2d1ZWFkbyAmJiBwcm9wcy5jYXJyaXRvUmVkdWNlci5wcm9kdWN0b3MubGVuZ3RoPjAgJiYgKHByb3BzLmVudmlvc1JlZHVjZXIuZGF0YSkpe1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnamVqZScpO1xyXG4gICAgICAgICAgICBwcm9jZXNhckluZm8oKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbcHJvcHMudXN1YXJpb1JlZHVjZXJdKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHByb3BzLmVudmlvc1JlZHVjZXIpO1xyXG4gICAgfSwgW3Byb3BzLmVudmlvc1JlZHVjZXJdKVxyXG5cclxuICAgIGNvbnN0IHByb2Nlc2FySW5mbyA9IGFzeW5jKCk9PntcclxuICAgICAgICBjb25zdCB7aWRVc3VhcmlvfSA9IHByb3BzLnVzdWFyaW9SZWR1Y2VyLnVzdWFyaW87XHJcbiAgICAgICAgY29uc3Qge3N1YnRvdGFsLHBvcmNlbnRhamVfZGVzY3VlbnRvLGRlc2N1ZW50byx0b3RhbCxwcm9kdWN0b3MsaWRNZWRpb1BhZ299ID0gcHJvcHMuY2Fycml0b1JlZHVjZXI7XHJcbiAgICAgICAgY29uc3Qge3pvbmEsdGlwb30gPSBwcm9wcy5lbnZpb3NSZWR1Y2VyLmRhdGE7XHJcbiAgICAgICAgbGV0IGYgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgIGxldCBtZXMgPSAoKGYuZ2V0TW9udGgoKSk8MTApP2AwJHtmLmdldE1vbnRoKCkrMX1gOmAke2YuZ2V0TW9udGgoKX1gO1xyXG4gICAgICAgIGxldCBkaWEgPSAoKGYuZ2V0RGF5KCkpPDEwKT9gMCR7Zi5nZXREYXkoKX1gOmAke2YuZ2V0RGF5KCl9YDtcclxuICAgICAgICBsZXQgZmVjaGEgPSBgJHtmLmdldEZ1bGxZZWFyKCl9LSR7bWVzfS0ke2RpYX1gO1xyXG4gICAgICAgIGxldCBkYXRhVG9SZXF1ZXN0ID0ge1xyXG4gICAgICAgICAgICBlbnZpbzp7XHJcbiAgICAgICAgICAgICAgICBpZFpvbmE6em9uYSxcclxuICAgICAgICAgICAgICAgIHRpcG86dGlwb1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB2ZW50YTp7XHJcbiAgICAgICAgICAgICAgICBzdWJ0b3RhbCxcclxuICAgICAgICAgICAgICAgIHBvcmNlbnRhamVfZGVzY3VlbnRvLFxyXG4gICAgICAgICAgICAgICAgZGVzY3VlbnRvLFxyXG4gICAgICAgICAgICAgICAgdG90YWwsXHJcbiAgICAgICAgICAgICAgICBpZFVzdWFyaW8sXHJcbiAgICAgICAgICAgICAgICBwcm9kdWN0b3MsXHJcbiAgICAgICAgICAgICAgICBmZWNoYSxcclxuICAgICAgICAgICAgICAgIG9wZXJhY2lvbl9pZDpwcm9wcy5jb2xsZWN0aW9uX2lkIHx8IG51bGwsXHJcbiAgICAgICAgICAgICAgICBpZE1lZGlvUGFnb1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGFUb1JlcXVlc3QpO1xyXG4gICAgICAgIC8vcmV0dXJuIHJlZ2lzdHJhclZlbnRhKGRhdGFUb1JlcXVlc3QpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHJlZ2lzdHJhclZlbnRhID0gYXN5bmMgZGF0YT0+e1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xyXG4gICAgICAgICAgICBoZWFkZXJzLmFwcGVuZCgndG9rZW4nLHByb3BzLnVzdWFyaW9SZWR1Y2VyLnVzdWFyaW8udG9rZW4pO1xyXG4gICAgICAgICAgICBoZWFkZXJzLmFwcGVuZChcIkNvbnRlbnQtVHlwZVwiLCBcImFwcGxpY2F0aW9uL2pzb25cIik7XHJcbiAgICAgICAgICAgIGxldCB1cmwgPSAoIWRhdGEudmVudGEub3BlcmFjaW9uX2lkKT9gJHtBUEl9L3JlZ2lzdHJhclZlbnRhP21lcmNhZG9QYWdvPWZhbHNlYDpgJHtBUEl9L3JlZ2lzdHJhclZlbnRhP21lcmNhZG9QYWdvPXRydWVgO1xyXG4gICAgICAgICAgICBjb25zdCByZXFWZW50YSA9IGF3YWl0IGZldGNoKHVybCx7XHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzLFxyXG4gICAgICAgICAgICAgICAgbWV0aG9kOidQT1NUJyxcclxuICAgICAgICAgICAgICAgIGJvZHk6SlNPTi5zdHJpbmdpZnkoZGF0YSlcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGlmKHJlcVZlbnRhLnN0YXR1cyA9PSAyMDApe1xyXG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2RhdGFFbnZpbycpO1xyXG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2NhcnJpdG8nKTtcclxuICAgICAgICAgICAgICAgIHNldFZlbnRhUmVnaXN0cmFkYSgnRmVsaWNpZGFkZXMsIFR1IHZlbnRhIHNlIHJlZ2lzdHLDsyBjb24gw6l4aXRvLiBFbiBicmV2ZSBub3MgY29tdW5pY2FyZW1vcyBjb24gdXN0ZWQgcGFyYSBpbmZvcm1hcmxlIGVsIGVzdGFkbyBkZSBzdSBjb21wcmEuJyk7XHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uYXNzaWduKCcvJylcclxuICAgICAgICAgICAgICAgIH0sIDUwMDApO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIHNldEVycm9yKHRydWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgc2V0RXJyb3IoZXJyb3IubWVzc2FnZSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxIZWFkIHRpdGxlPVwiRmluYWxpemFjaW9uIGRlIGNvbXByYVwiIG1ldGFkZXNjPVwiXCIvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgIHsoIXByb3BzLnVzdWFyaW9SZWR1Y2VyLmxvZ3VlYWRvIHx8IHByb3BzLmVudmlvc1JlZHVjZXIuZXJyb3IgfHwgcHJvcHMuY2Fycml0b1JlZHVjZXIuZXJyb3IgfHwgZXJyb3IpPzxFcnJvciBtZXNzYWdlPVwiSGEgb2N1cnJpZG8gdW4gZXJyb3IsIGludGVudGFsbyBtYXMgdGFyZGVcIi8+OlxyXG4gICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsodmVudGFSZWdpc3RyYWRhKT88ZGl2IGNsYXNzTmFtZT1cImFsZXJ0IGFsZXJ0LXN1Y2Nlc3NcIj57dmVudGFSZWdpc3RyYWRhfTwvZGl2PjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExvYWRlci8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+U3UgY29tcHJhIGVzdGEgc2llbnRvIHByb2Nlc2FkYSwgYWd1YXJkZSB1bm9zIHNlZ3VuZG9zLi4uPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICAgICAud3JhcHBlcntcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OmNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczpjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0Ojkwdmg7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xyXG4gICAgICAgICAgICAgICAgfSAgICBcclxuICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufVxyXG5cclxuUHJvY2VzYXJWZW50YS5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyh7cXVlcnl9KT0+e1xyXG4gICAgY29uc3Qge2NvbGxlY3Rpb25faWQsaWRNZWRpb1BhZ299ID0gcXVlcnk7XHJcbiAgICByZXR1cm4ge2NvbGxlY3Rpb25faWQsaWRNZWRpb1BhZ299O1xyXG59XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoe2NhcnJpdG9SZWR1Y2VyLGVudmlvc1JlZHVjZXIsdXN1YXJpb1JlZHVjZXJ9KT0+e1xyXG4gICAgcmV0dXJuIHtjYXJyaXRvUmVkdWNlcixlbnZpb3NSZWR1Y2VyLHVzdWFyaW9SZWR1Y2VyfVxyXG59O1xyXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSB7XHJcbiAgICBlbnZpb3NHdWFyZGFyLFxyXG4gICAgY2Fycml0b1RyYWVyUHJvZHVjdG9zXHJcbn1cclxuIFxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcyxtYXBEaXNwYXRjaFRvUHJvcHMpKFByb2Nlc2FyVmVudGEpOyJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\franc\\\\Documents\\\\oliver-2\\\\sitio-desa\\\\pages\\\\procesarVenta\\\\[[...params]].js */"));
};

_s(ProcesarVenta, "0anAvrUsMEsNkOtuwJzV76+uKwo=");

_c = ProcesarVenta;

ProcesarVenta.getInitialProps = /*#__PURE__*/function () {
  var _ref5 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(_ref4) {
    var query, collection_id, idMedioPago;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            query = _ref4.query;
            collection_id = query.collection_id, idMedioPago = query.idMedioPago;
            return _context4.abrupt("return", {
              collection_id: collection_id,
              idMedioPago: idMedioPago
            });

          case 3:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function (_x2) {
    return _ref5.apply(this, arguments);
  };
}();

var mapStateToProps = function mapStateToProps(_ref6) {
  var carritoReducer = _ref6.carritoReducer,
      enviosReducer = _ref6.enviosReducer,
      usuarioReducer = _ref6.usuarioReducer;
  return {
    carritoReducer: carritoReducer,
    enviosReducer: enviosReducer,
    usuarioReducer: usuarioReducer
  };
};

var mapDispatchToProps = {
  enviosGuardar: enviosGuardar,
  carritoTraerProductos: carritoTraerProductos
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["connect"])(mapStateToProps, mapDispatchToProps)(ProcesarVenta));

var _c;

$RefreshReg$(_c, "ProcesarVenta");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvY2VzYXJWZW50YS9bWy4uLnBhcmFtc11dLmpzIl0sIm5hbWVzIjpbImVudmlvc0d1YXJkYXIiLCJlbnZpb3NBY3Rpb25zIiwiY2Fycml0b1RyYWVyUHJvZHVjdG9zIiwiY2Fycml0b0FjdGlvbnMiLCJQcm9jZXNhclZlbnRhIiwicHJvcHMiLCJ1c2VTdGF0ZSIsImVycm9yIiwic2V0RXJyb3IiLCJ2ZW50YVJlZ2lzdHJhZGEiLCJzZXRWZW50YVJlZ2lzdHJhZGEiLCJ1c2VFZmZlY3QiLCJkYXRhRW52aW8iLCJKU09OIiwicGFyc2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiY29uc29sZSIsImxvZyIsInVzdWFyaW9SZWR1Y2VyIiwibG9ndWVhZG8iLCJjYXJyaXRvUmVkdWNlciIsInByb2R1Y3RvcyIsImxlbmd0aCIsImVudmlvc1JlZHVjZXIiLCJkYXRhIiwicHJvY2VzYXJJbmZvIiwiaWRVc3VhcmlvIiwidXN1YXJpbyIsInN1YnRvdGFsIiwicG9yY2VudGFqZV9kZXNjdWVudG8iLCJkZXNjdWVudG8iLCJ0b3RhbCIsImlkTWVkaW9QYWdvIiwiem9uYSIsInRpcG8iLCJmIiwiRGF0ZSIsIm1lcyIsImdldE1vbnRoIiwiZGlhIiwiZ2V0RGF5IiwiZmVjaGEiLCJnZXRGdWxsWWVhciIsImRhdGFUb1JlcXVlc3QiLCJlbnZpbyIsImlkWm9uYSIsInZlbnRhIiwib3BlcmFjaW9uX2lkIiwiY29sbGVjdGlvbl9pZCIsInJlZ2lzdHJhclZlbnRhIiwiaGVhZGVycyIsIkhlYWRlcnMiLCJhcHBlbmQiLCJ0b2tlbiIsInVybCIsIkFQSSIsImZldGNoIiwibWV0aG9kIiwiYm9keSIsInN0cmluZ2lmeSIsInJlcVZlbnRhIiwic3RhdHVzIiwicmVtb3ZlSXRlbSIsInNldFRpbWVvdXQiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImFzc2lnbiIsIm1lc3NhZ2UiLCJnZXRJbml0aWFsUHJvcHMiLCJxdWVyeSIsIm1hcFN0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NTgyZTFlOTgzNDk2ZDZhN2ZmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICcuLi8uLi9zcmMvY29tcG9uZW50cy9IZWFkJztcclxuaW1wb3J0IExvYWRlciBmcm9tICcuLi8uLi9zcmMvY29tcG9uZW50cy9Mb2FkZXInO1xyXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0ICogYXMgY2Fycml0b0FjdGlvbnMgZnJvbSAnLi4vLi4vc3RvcmUvYWN0aW9ucy9jYXJyaXRvQWN0aW9ucyc7XHJcbmltcG9ydCAqIGFzIGVudmlvc0FjdGlvbnMgZnJvbSAnLi4vLi4vc3RvcmUvYWN0aW9ucy9lbnZpb3NBY3Rpb25zJztcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtBUEl9IGZyb20gJy4uLy4uL2NvbmZpZy9pbmRleCc7XHJcbmltcG9ydCBFcnJvciBmcm9tICcuLi8uLi9zcmMvY29tcG9uZW50cy9FcnJvcic7XHJcblxyXG5jb25zdCB7Z3VhcmRhcjplbnZpb3NHdWFyZGFyfSA9IGVudmlvc0FjdGlvbnM7XHJcbmNvbnN0IHt0cmFlclByb2R1Y3RvczpjYXJyaXRvVHJhZXJQcm9kdWN0b3N9ID0gY2Fycml0b0FjdGlvbnM7XHJcblxyXG5jb25zdCBQcm9jZXNhclZlbnRhID0gKHByb3BzKSA9PiB7XHJcbiAgICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFt2ZW50YVJlZ2lzdHJhZGEsIHNldFZlbnRhUmVnaXN0cmFkYV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KGFzeW5jKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGRhdGFFbnZpbyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2RhdGFFbnZpbycpKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhkYXRhRW52aW8pO1xyXG4gICAgICAgIHByb3BzLmVudmlvc0d1YXJkYXIoZGF0YUVudmlvKTtcclxuICAgICAgICBwcm9wcy5jYXJyaXRvVHJhZXJQcm9kdWN0b3MoKTtcclxuICAgICAgICBpZihwcm9wcy51c3VhcmlvUmVkdWNlci5sb2d1ZWFkbyAmJiBwcm9wcy5jYXJyaXRvUmVkdWNlci5wcm9kdWN0b3MubGVuZ3RoPjAgJiYgKHByb3BzLmVudmlvc1JlZHVjZXIuZGF0YSkpe1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnamVqZScpO1xyXG4gICAgICAgICAgICBwcm9jZXNhckluZm8oKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbcHJvcHMudXN1YXJpb1JlZHVjZXJdKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHByb3BzLmVudmlvc1JlZHVjZXIpO1xyXG4gICAgfSwgW3Byb3BzLmVudmlvc1JlZHVjZXJdKVxyXG5cclxuICAgIGNvbnN0IHByb2Nlc2FySW5mbyA9IGFzeW5jKCk9PntcclxuICAgICAgICBjb25zdCB7aWRVc3VhcmlvfSA9IHByb3BzLnVzdWFyaW9SZWR1Y2VyLnVzdWFyaW87XHJcbiAgICAgICAgY29uc3Qge3N1YnRvdGFsLHBvcmNlbnRhamVfZGVzY3VlbnRvLGRlc2N1ZW50byx0b3RhbCxwcm9kdWN0b3MsaWRNZWRpb1BhZ299ID0gcHJvcHMuY2Fycml0b1JlZHVjZXI7XHJcbiAgICAgICAgY29uc3Qge3pvbmEsdGlwb30gPSBwcm9wcy5lbnZpb3NSZWR1Y2VyLmRhdGE7XHJcbiAgICAgICAgbGV0IGYgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgIGxldCBtZXMgPSAoKGYuZ2V0TW9udGgoKSk8MTApP2AwJHtmLmdldE1vbnRoKCkrMX1gOmAke2YuZ2V0TW9udGgoKX1gO1xyXG4gICAgICAgIGxldCBkaWEgPSAoKGYuZ2V0RGF5KCkpPDEwKT9gMCR7Zi5nZXREYXkoKX1gOmAke2YuZ2V0RGF5KCl9YDtcclxuICAgICAgICBsZXQgZmVjaGEgPSBgJHtmLmdldEZ1bGxZZWFyKCl9LSR7bWVzfS0ke2RpYX1gO1xyXG4gICAgICAgIGxldCBkYXRhVG9SZXF1ZXN0ID0ge1xyXG4gICAgICAgICAgICBlbnZpbzp7XHJcbiAgICAgICAgICAgICAgICBpZFpvbmE6em9uYSxcclxuICAgICAgICAgICAgICAgIHRpcG86dGlwb1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB2ZW50YTp7XHJcbiAgICAgICAgICAgICAgICBzdWJ0b3RhbCxcclxuICAgICAgICAgICAgICAgIHBvcmNlbnRhamVfZGVzY3VlbnRvLFxyXG4gICAgICAgICAgICAgICAgZGVzY3VlbnRvLFxyXG4gICAgICAgICAgICAgICAgdG90YWwsXHJcbiAgICAgICAgICAgICAgICBpZFVzdWFyaW8sXHJcbiAgICAgICAgICAgICAgICBwcm9kdWN0b3MsXHJcbiAgICAgICAgICAgICAgICBmZWNoYSxcclxuICAgICAgICAgICAgICAgIG9wZXJhY2lvbl9pZDpwcm9wcy5jb2xsZWN0aW9uX2lkIHx8IG51bGwsXHJcbiAgICAgICAgICAgICAgICBpZE1lZGlvUGFnb1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGFUb1JlcXVlc3QpO1xyXG4gICAgICAgIC8vcmV0dXJuIHJlZ2lzdHJhclZlbnRhKGRhdGFUb1JlcXVlc3QpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHJlZ2lzdHJhclZlbnRhID0gYXN5bmMgZGF0YT0+e1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xyXG4gICAgICAgICAgICBoZWFkZXJzLmFwcGVuZCgndG9rZW4nLHByb3BzLnVzdWFyaW9SZWR1Y2VyLnVzdWFyaW8udG9rZW4pO1xyXG4gICAgICAgICAgICBoZWFkZXJzLmFwcGVuZChcIkNvbnRlbnQtVHlwZVwiLCBcImFwcGxpY2F0aW9uL2pzb25cIik7XHJcbiAgICAgICAgICAgIGxldCB1cmwgPSAoIWRhdGEudmVudGEub3BlcmFjaW9uX2lkKT9gJHtBUEl9L3JlZ2lzdHJhclZlbnRhP21lcmNhZG9QYWdvPWZhbHNlYDpgJHtBUEl9L3JlZ2lzdHJhclZlbnRhP21lcmNhZG9QYWdvPXRydWVgO1xyXG4gICAgICAgICAgICBjb25zdCByZXFWZW50YSA9IGF3YWl0IGZldGNoKHVybCx7XHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzLFxyXG4gICAgICAgICAgICAgICAgbWV0aG9kOidQT1NUJyxcclxuICAgICAgICAgICAgICAgIGJvZHk6SlNPTi5zdHJpbmdpZnkoZGF0YSlcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGlmKHJlcVZlbnRhLnN0YXR1cyA9PSAyMDApe1xyXG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2RhdGFFbnZpbycpO1xyXG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2NhcnJpdG8nKTtcclxuICAgICAgICAgICAgICAgIHNldFZlbnRhUmVnaXN0cmFkYSgnRmVsaWNpZGFkZXMsIFR1IHZlbnRhIHNlIHJlZ2lzdHLDsyBjb24gw6l4aXRvLiBFbiBicmV2ZSBub3MgY29tdW5pY2FyZW1vcyBjb24gdXN0ZWQgcGFyYSBpbmZvcm1hcmxlIGVsIGVzdGFkbyBkZSBzdSBjb21wcmEuJyk7XHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uYXNzaWduKCcvJylcclxuICAgICAgICAgICAgICAgIH0sIDUwMDApO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIHNldEVycm9yKHRydWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgc2V0RXJyb3IoZXJyb3IubWVzc2FnZSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxIZWFkIHRpdGxlPVwiRmluYWxpemFjaW9uIGRlIGNvbXByYVwiIG1ldGFkZXNjPVwiXCIvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgIHsoIXByb3BzLnVzdWFyaW9SZWR1Y2VyLmxvZ3VlYWRvIHx8IHByb3BzLmVudmlvc1JlZHVjZXIuZXJyb3IgfHwgcHJvcHMuY2Fycml0b1JlZHVjZXIuZXJyb3IgfHwgZXJyb3IpPzxFcnJvciBtZXNzYWdlPVwiSGEgb2N1cnJpZG8gdW4gZXJyb3IsIGludGVudGFsbyBtYXMgdGFyZGVcIi8+OlxyXG4gICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsodmVudGFSZWdpc3RyYWRhKT88ZGl2IGNsYXNzTmFtZT1cImFsZXJ0IGFsZXJ0LXN1Y2Nlc3NcIj57dmVudGFSZWdpc3RyYWRhfTwvZGl2PjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExvYWRlci8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+U3UgY29tcHJhIGVzdGEgc2llbnRvIHByb2Nlc2FkYSwgYWd1YXJkZSB1bm9zIHNlZ3VuZG9zLi4uPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICAgICAud3JhcHBlcntcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OmNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczpjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0Ojkwdmg7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xyXG4gICAgICAgICAgICAgICAgfSAgICBcclxuICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufVxyXG5cclxuUHJvY2VzYXJWZW50YS5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyh7cXVlcnl9KT0+e1xyXG4gICAgY29uc3Qge2NvbGxlY3Rpb25faWQsaWRNZWRpb1BhZ299ID0gcXVlcnk7XHJcbiAgICByZXR1cm4ge2NvbGxlY3Rpb25faWQsaWRNZWRpb1BhZ299O1xyXG59XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoe2NhcnJpdG9SZWR1Y2VyLGVudmlvc1JlZHVjZXIsdXN1YXJpb1JlZHVjZXJ9KT0+e1xyXG4gICAgcmV0dXJuIHtjYXJyaXRvUmVkdWNlcixlbnZpb3NSZWR1Y2VyLHVzdWFyaW9SZWR1Y2VyfVxyXG59O1xyXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSB7XHJcbiAgICBlbnZpb3NHdWFyZGFyLFxyXG4gICAgY2Fycml0b1RyYWVyUHJvZHVjdG9zXHJcbn1cclxuIFxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcyxtYXBEaXNwYXRjaFRvUHJvcHMpKFByb2Nlc2FyVmVudGEpOyJdLCJzb3VyY2VSb290IjoiIn0=