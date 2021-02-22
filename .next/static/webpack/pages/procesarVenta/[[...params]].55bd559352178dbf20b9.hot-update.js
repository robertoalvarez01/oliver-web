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

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    var dataEnvio = JSON.parse(localStorage.getItem('dataEnvio'));
    props.enviosGuardar(dataEnvio);
    props.carritoTraerProductos();
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    console.log(props.carritoReducer.productos.length, props.enviosReducer.data);

    if (props.usuarioReducer.logueado && props.carritoReducer.productos.length > 0 && props.enviosReducer.data) {
      console.log('jeje');
      procesarInfo();
    }
  }, [props.enviosReducer]);

  var procesarInfo = /*#__PURE__*/function () {
    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var idUsuario, _props$carritoReducer, subtotal, porcentaje_descuento, descuento, total, productos, idMedioPago, _props$enviosReducer$, zona, tipo, f, mes, dia, fecha, dataToRequest;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              idUsuario = props.usuarioReducer.usuario.idUsuario;
              _props$carritoReducer = props.carritoReducer, subtotal = _props$carritoReducer.subtotal, porcentaje_descuento = _props$carritoReducer.porcentaje_descuento, descuento = _props$carritoReducer.descuento, total = _props$carritoReducer.total, productos = _props$carritoReducer.productos, idMedioPago = _props$carritoReducer.idMedioPago;
              _props$enviosReducer$ = props.enviosReducer.data, zona = _props$enviosReducer$.zona, tipo = _props$enviosReducer$.tipo;
              f = new Date();
              mes = f.getMonth() < 10 ? "0".concat(f.getMonth() + 1) : "".concat(f.getMonth());
              dia = f.getDate() < 10 ? "0".concat(f.getDate()) : "".concat(f.getDate());
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
              }; //console.log(dataToRequest);

              return _context.abrupt("return", registrarVenta(dataToRequest));

            case 9:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function procesarInfo() {
      return _ref.apply(this, arguments);
    };
  }();

  var registrarVenta = /*#__PURE__*/function () {
    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(data) {
      var headers, url, reqVenta;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              console.log('aca');
              _context2.prev = 1;
              headers = new Headers();
              headers.append('token', props.usuarioReducer.usuario.token);
              headers.append("Content-Type", "application/json");
              url = !data.venta.operacion_id ? "".concat(_config_index__WEBPACK_IMPORTED_MODULE_9__["API"], "/registrarVenta?mercadoPago=false") : "".concat(_config_index__WEBPACK_IMPORTED_MODULE_9__["API"], "/registrarVenta?mercadoPago=true");
              _context2.next = 8;
              return fetch(url, {
                headers: headers,
                method: 'POST',
                body: JSON.stringify(data)
              });

            case 8:
              reqVenta = _context2.sent;

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

              _context2.next = 15;
              break;

            case 12:
              _context2.prev = 12;
              _context2.t0 = _context2["catch"](1);
              setError(_context2.t0.message);

            case 15:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[1, 12]]);
    }));

    return function registrarVenta(_x) {
      return _ref2.apply(this, arguments);
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
  }, ".wrapper.jsx-2063553454{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:90vh;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcZnJhbmNcXERvY3VtZW50c1xcb2xpdmVyLTJcXHNpdGlvLWRlc2FcXHBhZ2VzXFxwcm9jZXNhclZlbnRhXFxbWy4uLnBhcmFtc11dLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFHd0IsQUFHaUMsMEVBQ1UsbUdBQ0osNkZBQ1AsWUFDVSw4RUFDekIiLCJmaWxlIjoiQzpcXFVzZXJzXFxmcmFuY1xcRG9jdW1lbnRzXFxvbGl2ZXItMlxcc2l0aW8tZGVzYVxccGFnZXNcXHByb2Nlc2FyVmVudGFcXFtbLi4ucGFyYW1zXV0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICcuLi8uLi9zcmMvY29tcG9uZW50cy9IZWFkJztcclxuaW1wb3J0IExvYWRlciBmcm9tICcuLi8uLi9zcmMvY29tcG9uZW50cy9Mb2FkZXInO1xyXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0ICogYXMgY2Fycml0b0FjdGlvbnMgZnJvbSAnLi4vLi4vc3RvcmUvYWN0aW9ucy9jYXJyaXRvQWN0aW9ucyc7XHJcbmltcG9ydCAqIGFzIGVudmlvc0FjdGlvbnMgZnJvbSAnLi4vLi4vc3RvcmUvYWN0aW9ucy9lbnZpb3NBY3Rpb25zJztcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtBUEl9IGZyb20gJy4uLy4uL2NvbmZpZy9pbmRleCc7XHJcbmltcG9ydCBFcnJvciBmcm9tICcuLi8uLi9zcmMvY29tcG9uZW50cy9FcnJvcic7XHJcblxyXG5jb25zdCB7Z3VhcmRhcjplbnZpb3NHdWFyZGFyfSA9IGVudmlvc0FjdGlvbnM7XHJcbmNvbnN0IHt0cmFlclByb2R1Y3RvczpjYXJyaXRvVHJhZXJQcm9kdWN0b3N9ID0gY2Fycml0b0FjdGlvbnM7XHJcblxyXG5jb25zdCBQcm9jZXNhclZlbnRhID0gKHByb3BzKSA9PiB7XHJcbiAgICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFt2ZW50YVJlZ2lzdHJhZGEsIHNldFZlbnRhUmVnaXN0cmFkYV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zdCBkYXRhRW52aW8gPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdkYXRhRW52aW8nKSk7XHJcbiAgICAgICAgcHJvcHMuZW52aW9zR3VhcmRhcihkYXRhRW52aW8pO1xyXG4gICAgICAgIHByb3BzLmNhcnJpdG9UcmFlclByb2R1Y3RvcygpO1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocHJvcHMuY2Fycml0b1JlZHVjZXIucHJvZHVjdG9zLmxlbmd0aCxwcm9wcy5lbnZpb3NSZWR1Y2VyLmRhdGEpO1xyXG4gICAgICAgIGlmKHByb3BzLnVzdWFyaW9SZWR1Y2VyLmxvZ3VlYWRvICYmIHByb3BzLmNhcnJpdG9SZWR1Y2VyLnByb2R1Y3Rvcy5sZW5ndGg+MCAmJiBwcm9wcy5lbnZpb3NSZWR1Y2VyLmRhdGEpe1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnamVqZScpO1xyXG4gICAgICAgICAgICBwcm9jZXNhckluZm8oKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbcHJvcHMuZW52aW9zUmVkdWNlcl0pXHJcblxyXG4gICAgY29uc3QgcHJvY2VzYXJJbmZvID0gYXN5bmMoKT0+e1xyXG4gICAgICAgIGNvbnN0IHtpZFVzdWFyaW99ID0gcHJvcHMudXN1YXJpb1JlZHVjZXIudXN1YXJpbztcclxuICAgICAgICBjb25zdCB7c3VidG90YWwscG9yY2VudGFqZV9kZXNjdWVudG8sZGVzY3VlbnRvLHRvdGFsLHByb2R1Y3RvcyxpZE1lZGlvUGFnb30gPSBwcm9wcy5jYXJyaXRvUmVkdWNlcjtcclxuICAgICAgICBjb25zdCB7em9uYSx0aXBvfSA9IHByb3BzLmVudmlvc1JlZHVjZXIuZGF0YTtcclxuICAgICAgICBsZXQgZiA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgbGV0IG1lcyA9ICgoZi5nZXRNb250aCgpKTwxMCk/YDAke2YuZ2V0TW9udGgoKSsxfWA6YCR7Zi5nZXRNb250aCgpfWA7XHJcbiAgICAgICAgbGV0IGRpYSA9ICgoZi5nZXREYXRlKCkpPDEwKT9gMCR7Zi5nZXREYXRlKCl9YDpgJHtmLmdldERhdGUoKX1gO1xyXG4gICAgICAgIGxldCBmZWNoYSA9IGAke2YuZ2V0RnVsbFllYXIoKX0tJHttZXN9LSR7ZGlhfWA7XHJcbiAgICAgICAgbGV0IGRhdGFUb1JlcXVlc3QgPSB7XHJcbiAgICAgICAgICAgIGVudmlvOntcclxuICAgICAgICAgICAgICAgIGlkWm9uYTp6b25hLFxyXG4gICAgICAgICAgICAgICAgdGlwbzp0aXBvXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHZlbnRhOntcclxuICAgICAgICAgICAgICAgIHN1YnRvdGFsLFxyXG4gICAgICAgICAgICAgICAgcG9yY2VudGFqZV9kZXNjdWVudG8sXHJcbiAgICAgICAgICAgICAgICBkZXNjdWVudG8sXHJcbiAgICAgICAgICAgICAgICB0b3RhbCxcclxuICAgICAgICAgICAgICAgIGlkVXN1YXJpbyxcclxuICAgICAgICAgICAgICAgIHByb2R1Y3RvcyxcclxuICAgICAgICAgICAgICAgIGZlY2hhLFxyXG4gICAgICAgICAgICAgICAgb3BlcmFjaW9uX2lkOnByb3BzLmNvbGxlY3Rpb25faWQgfHwgbnVsbCxcclxuICAgICAgICAgICAgICAgIGlkTWVkaW9QYWdvXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhkYXRhVG9SZXF1ZXN0KTtcclxuICAgICAgICByZXR1cm4gcmVnaXN0cmFyVmVudGEoZGF0YVRvUmVxdWVzdCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcmVnaXN0cmFyVmVudGEgPSBhc3luYyBkYXRhPT57XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2FjYScpO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xyXG4gICAgICAgICAgICBoZWFkZXJzLmFwcGVuZCgndG9rZW4nLHByb3BzLnVzdWFyaW9SZWR1Y2VyLnVzdWFyaW8udG9rZW4pO1xyXG4gICAgICAgICAgICBoZWFkZXJzLmFwcGVuZChcIkNvbnRlbnQtVHlwZVwiLCBcImFwcGxpY2F0aW9uL2pzb25cIik7XHJcbiAgICAgICAgICAgIGxldCB1cmwgPSAoIWRhdGEudmVudGEub3BlcmFjaW9uX2lkKT9gJHtBUEl9L3JlZ2lzdHJhclZlbnRhP21lcmNhZG9QYWdvPWZhbHNlYDpgJHtBUEl9L3JlZ2lzdHJhclZlbnRhP21lcmNhZG9QYWdvPXRydWVgO1xyXG4gICAgICAgICAgICBjb25zdCByZXFWZW50YSA9IGF3YWl0IGZldGNoKHVybCx7XHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzLFxyXG4gICAgICAgICAgICAgICAgbWV0aG9kOidQT1NUJyxcclxuICAgICAgICAgICAgICAgIGJvZHk6SlNPTi5zdHJpbmdpZnkoZGF0YSlcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGlmKHJlcVZlbnRhLnN0YXR1cyA9PSAyMDApe1xyXG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2RhdGFFbnZpbycpO1xyXG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2NhcnJpdG8nKTtcclxuICAgICAgICAgICAgICAgIHNldFZlbnRhUmVnaXN0cmFkYSgnRmVsaWNpZGFkZXMsIFR1IHZlbnRhIHNlIHJlZ2lzdHLDsyBjb24gw6l4aXRvLiBFbiBicmV2ZSBub3MgY29tdW5pY2FyZW1vcyBjb24gdXN0ZWQgcGFyYSBpbmZvcm1hcmxlIGVsIGVzdGFkbyBkZSBzdSBjb21wcmEuJyk7XHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uYXNzaWduKCcvJylcclxuICAgICAgICAgICAgICAgIH0sIDUwMDApO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIHNldEVycm9yKHRydWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgc2V0RXJyb3IoZXJyb3IubWVzc2FnZSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxIZWFkIHRpdGxlPVwiRmluYWxpemFjaW9uIGRlIGNvbXByYVwiIG1ldGFkZXNjPVwiXCIvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgIHsoIXByb3BzLnVzdWFyaW9SZWR1Y2VyLmxvZ3VlYWRvIHx8IHByb3BzLmVudmlvc1JlZHVjZXIuZXJyb3IgfHwgcHJvcHMuY2Fycml0b1JlZHVjZXIuZXJyb3IgfHwgZXJyb3IpPzxFcnJvciBtZXNzYWdlPVwiSGEgb2N1cnJpZG8gdW4gZXJyb3IsIGludGVudGFsbyBtYXMgdGFyZGVcIi8+OlxyXG4gICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsodmVudGFSZWdpc3RyYWRhKT88ZGl2IGNsYXNzTmFtZT1cImFsZXJ0IGFsZXJ0LXN1Y2Nlc3NcIj57dmVudGFSZWdpc3RyYWRhfTwvZGl2PjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExvYWRlci8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+U3UgY29tcHJhIGVzdGEgc2llbnRvIHByb2Nlc2FkYSwgYWd1YXJkZSB1bm9zIHNlZ3VuZG9zLi4uPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICAgICAud3JhcHBlcntcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OmNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczpjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0Ojkwdmg7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xyXG4gICAgICAgICAgICAgICAgfSAgICBcclxuICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufVxyXG5cclxuUHJvY2VzYXJWZW50YS5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyh7cXVlcnl9KT0+e1xyXG4gICAgY29uc3Qge2NvbGxlY3Rpb25faWR9ID0gcXVlcnk7XHJcbiAgICByZXR1cm4ge2NvbGxlY3Rpb25faWR9O1xyXG59XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoe2NhcnJpdG9SZWR1Y2VyLGVudmlvc1JlZHVjZXIsdXN1YXJpb1JlZHVjZXJ9KT0+e1xyXG4gICAgcmV0dXJuIHtjYXJyaXRvUmVkdWNlcixlbnZpb3NSZWR1Y2VyLHVzdWFyaW9SZWR1Y2VyfVxyXG59O1xyXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSB7XHJcbiAgICBlbnZpb3NHdWFyZGFyLFxyXG4gICAgY2Fycml0b1RyYWVyUHJvZHVjdG9zXHJcbn1cclxuIFxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcyxtYXBEaXNwYXRjaFRvUHJvcHMpKFByb2Nlc2FyVmVudGEpOyJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\franc\\\\Documents\\\\oliver-2\\\\sitio-desa\\\\pages\\\\procesarVenta\\\\[[...params]].js */"));
};

_s(ProcesarVenta, "0anAvrUsMEsNkOtuwJzV76+uKwo=");

_c = ProcesarVenta;

ProcesarVenta.getInitialProps = /*#__PURE__*/function () {
  var _ref4 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(_ref3) {
    var query, collection_id;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            query = _ref3.query;
            collection_id = query.collection_id;
            return _context3.abrupt("return", {
              collection_id: collection_id
            });

          case 3:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function (_x2) {
    return _ref4.apply(this, arguments);
  };
}();

var mapStateToProps = function mapStateToProps(_ref5) {
  var carritoReducer = _ref5.carritoReducer,
      enviosReducer = _ref5.enviosReducer,
      usuarioReducer = _ref5.usuarioReducer;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvY2VzYXJWZW50YS9bWy4uLnBhcmFtc11dLmpzIl0sIm5hbWVzIjpbImVudmlvc0d1YXJkYXIiLCJlbnZpb3NBY3Rpb25zIiwiY2Fycml0b1RyYWVyUHJvZHVjdG9zIiwiY2Fycml0b0FjdGlvbnMiLCJQcm9jZXNhclZlbnRhIiwicHJvcHMiLCJ1c2VTdGF0ZSIsImVycm9yIiwic2V0RXJyb3IiLCJ2ZW50YVJlZ2lzdHJhZGEiLCJzZXRWZW50YVJlZ2lzdHJhZGEiLCJ1c2VFZmZlY3QiLCJkYXRhRW52aW8iLCJKU09OIiwicGFyc2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiY29uc29sZSIsImxvZyIsImNhcnJpdG9SZWR1Y2VyIiwicHJvZHVjdG9zIiwibGVuZ3RoIiwiZW52aW9zUmVkdWNlciIsImRhdGEiLCJ1c3VhcmlvUmVkdWNlciIsImxvZ3VlYWRvIiwicHJvY2VzYXJJbmZvIiwiaWRVc3VhcmlvIiwidXN1YXJpbyIsInN1YnRvdGFsIiwicG9yY2VudGFqZV9kZXNjdWVudG8iLCJkZXNjdWVudG8iLCJ0b3RhbCIsImlkTWVkaW9QYWdvIiwiem9uYSIsInRpcG8iLCJmIiwiRGF0ZSIsIm1lcyIsImdldE1vbnRoIiwiZGlhIiwiZ2V0RGF0ZSIsImZlY2hhIiwiZ2V0RnVsbFllYXIiLCJkYXRhVG9SZXF1ZXN0IiwiZW52aW8iLCJpZFpvbmEiLCJ2ZW50YSIsIm9wZXJhY2lvbl9pZCIsImNvbGxlY3Rpb25faWQiLCJyZWdpc3RyYXJWZW50YSIsImhlYWRlcnMiLCJIZWFkZXJzIiwiYXBwZW5kIiwidG9rZW4iLCJ1cmwiLCJBUEkiLCJmZXRjaCIsIm1ldGhvZCIsImJvZHkiLCJzdHJpbmdpZnkiLCJyZXFWZW50YSIsInN0YXR1cyIsInJlbW92ZUl0ZW0iLCJzZXRUaW1lb3V0Iiwid2luZG93IiwibG9jYXRpb24iLCJhc3NpZ24iLCJtZXNzYWdlIiwiZ2V0SW5pdGlhbFByb3BzIiwicXVlcnkiLCJtYXBT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O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosRUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUVBRkosQ0FGUixDQUZSLENBRko7QUFBQTtBQUFBO0FBQUEsbXJQQURKO0FBMkJILENBcEdEOztHQUFNTCxhOztLQUFBQSxhOztBQXNHTkEsYUFBYSxDQUFDaUUsZUFBZDtBQUFBLCtMQUFnQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBT0MsaUJBQVAsU0FBT0EsS0FBUDtBQUNyQnJCLHlCQURxQixHQUNKcUIsS0FESSxDQUNyQnJCLGFBRHFCO0FBQUEsOENBRXJCO0FBQUNBLDJCQUFhLEVBQWJBO0FBQUQsYUFGcUI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBaEM7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBS0EsSUFBTXNCLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsUUFBaUQ7QUFBQSxNQUEvQ3BELGNBQStDLFNBQS9DQSxjQUErQztBQUFBLE1BQWhDRyxhQUFnQyxTQUFoQ0EsYUFBZ0M7QUFBQSxNQUFsQkUsY0FBa0IsU0FBbEJBLGNBQWtCO0FBQ3JFLFNBQU87QUFBQ0wsa0JBQWMsRUFBZEEsY0FBRDtBQUFnQkcsaUJBQWEsRUFBYkEsYUFBaEI7QUFBOEJFLGtCQUFjLEVBQWRBO0FBQTlCLEdBQVA7QUFDSCxDQUZEOztBQUdBLElBQU1nRCxrQkFBa0IsR0FBRztBQUN2QnhFLGVBQWEsRUFBYkEsYUFEdUI7QUFFdkJFLHVCQUFxQixFQUFyQkE7QUFGdUIsQ0FBM0I7QUFLZXVFLDBIQUFPLENBQUNGLGVBQUQsRUFBaUJDLGtCQUFqQixDQUFQLENBQTRDcEUsYUFBNUMsQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9jZXNhclZlbnRhL1tbLi4ucGFyYW1zXV0uNTViZDU1OTM1MjE3OGRiZjIwYjkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJy4uLy4uL3NyYy9jb21wb25lbnRzL0hlYWQnO1xyXG5pbXBvcnQgTG9hZGVyIGZyb20gJy4uLy4uL3NyYy9jb21wb25lbnRzL0xvYWRlcic7XHJcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgKiBhcyBjYXJyaXRvQWN0aW9ucyBmcm9tICcuLi8uLi9zdG9yZS9hY3Rpb25zL2NhcnJpdG9BY3Rpb25zJztcclxuaW1wb3J0ICogYXMgZW52aW9zQWN0aW9ucyBmcm9tICcuLi8uLi9zdG9yZS9hY3Rpb25zL2Vudmlvc0FjdGlvbnMnO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge0FQSX0gZnJvbSAnLi4vLi4vY29uZmlnL2luZGV4JztcclxuaW1wb3J0IEVycm9yIGZyb20gJy4uLy4uL3NyYy9jb21wb25lbnRzL0Vycm9yJztcclxuXHJcbmNvbnN0IHtndWFyZGFyOmVudmlvc0d1YXJkYXJ9ID0gZW52aW9zQWN0aW9ucztcclxuY29uc3Qge3RyYWVyUHJvZHVjdG9zOmNhcnJpdG9UcmFlclByb2R1Y3Rvc30gPSBjYXJyaXRvQWN0aW9ucztcclxuXHJcbmNvbnN0IFByb2Nlc2FyVmVudGEgPSAocHJvcHMpID0+IHtcclxuICAgIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW3ZlbnRhUmVnaXN0cmFkYSwgc2V0VmVudGFSZWdpc3RyYWRhXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGRhdGFFbnZpbyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2RhdGFFbnZpbycpKTtcclxuICAgICAgICBwcm9wcy5lbnZpb3NHdWFyZGFyKGRhdGFFbnZpbyk7XHJcbiAgICAgICAgcHJvcHMuY2Fycml0b1RyYWVyUHJvZHVjdG9zKCk7XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhwcm9wcy5jYXJyaXRvUmVkdWNlci5wcm9kdWN0b3MubGVuZ3RoLHByb3BzLmVudmlvc1JlZHVjZXIuZGF0YSk7XHJcbiAgICAgICAgaWYocHJvcHMudXN1YXJpb1JlZHVjZXIubG9ndWVhZG8gJiYgcHJvcHMuY2Fycml0b1JlZHVjZXIucHJvZHVjdG9zLmxlbmd0aD4wICYmIHByb3BzLmVudmlvc1JlZHVjZXIuZGF0YSl7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdqZWplJyk7XHJcbiAgICAgICAgICAgIHByb2Nlc2FySW5mbygpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtwcm9wcy5lbnZpb3NSZWR1Y2VyXSlcclxuXHJcbiAgICBjb25zdCBwcm9jZXNhckluZm8gPSBhc3luYygpPT57XHJcbiAgICAgICAgY29uc3Qge2lkVXN1YXJpb30gPSBwcm9wcy51c3VhcmlvUmVkdWNlci51c3VhcmlvO1xyXG4gICAgICAgIGNvbnN0IHtzdWJ0b3RhbCxwb3JjZW50YWplX2Rlc2N1ZW50byxkZXNjdWVudG8sdG90YWwscHJvZHVjdG9zLGlkTWVkaW9QYWdvfSA9IHByb3BzLmNhcnJpdG9SZWR1Y2VyO1xyXG4gICAgICAgIGNvbnN0IHt6b25hLHRpcG99ID0gcHJvcHMuZW52aW9zUmVkdWNlci5kYXRhO1xyXG4gICAgICAgIGxldCBmID0gbmV3IERhdGUoKTtcclxuICAgICAgICBsZXQgbWVzID0gKChmLmdldE1vbnRoKCkpPDEwKT9gMCR7Zi5nZXRNb250aCgpKzF9YDpgJHtmLmdldE1vbnRoKCl9YDtcclxuICAgICAgICBsZXQgZGlhID0gKChmLmdldERhdGUoKSk8MTApP2AwJHtmLmdldERhdGUoKX1gOmAke2YuZ2V0RGF0ZSgpfWA7XHJcbiAgICAgICAgbGV0IGZlY2hhID0gYCR7Zi5nZXRGdWxsWWVhcigpfS0ke21lc30tJHtkaWF9YDtcclxuICAgICAgICBsZXQgZGF0YVRvUmVxdWVzdCA9IHtcclxuICAgICAgICAgICAgZW52aW86e1xyXG4gICAgICAgICAgICAgICAgaWRab25hOnpvbmEsXHJcbiAgICAgICAgICAgICAgICB0aXBvOnRpcG9cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdmVudGE6e1xyXG4gICAgICAgICAgICAgICAgc3VidG90YWwsXHJcbiAgICAgICAgICAgICAgICBwb3JjZW50YWplX2Rlc2N1ZW50byxcclxuICAgICAgICAgICAgICAgIGRlc2N1ZW50byxcclxuICAgICAgICAgICAgICAgIHRvdGFsLFxyXG4gICAgICAgICAgICAgICAgaWRVc3VhcmlvLFxyXG4gICAgICAgICAgICAgICAgcHJvZHVjdG9zLFxyXG4gICAgICAgICAgICAgICAgZmVjaGEsXHJcbiAgICAgICAgICAgICAgICBvcGVyYWNpb25faWQ6cHJvcHMuY29sbGVjdGlvbl9pZCB8fCBudWxsLFxyXG4gICAgICAgICAgICAgICAgaWRNZWRpb1BhZ29cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvL2NvbnNvbGUubG9nKGRhdGFUb1JlcXVlc3QpO1xyXG4gICAgICAgIHJldHVybiByZWdpc3RyYXJWZW50YShkYXRhVG9SZXF1ZXN0KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCByZWdpc3RyYXJWZW50YSA9IGFzeW5jIGRhdGE9PntcclxuICAgICAgICBjb25zb2xlLmxvZygnYWNhJyk7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XHJcbiAgICAgICAgICAgIGhlYWRlcnMuYXBwZW5kKCd0b2tlbicscHJvcHMudXN1YXJpb1JlZHVjZXIudXN1YXJpby50b2tlbik7XHJcbiAgICAgICAgICAgIGhlYWRlcnMuYXBwZW5kKFwiQ29udGVudC1UeXBlXCIsIFwiYXBwbGljYXRpb24vanNvblwiKTtcclxuICAgICAgICAgICAgbGV0IHVybCA9ICghZGF0YS52ZW50YS5vcGVyYWNpb25faWQpP2Ake0FQSX0vcmVnaXN0cmFyVmVudGE/bWVyY2Fkb1BhZ289ZmFsc2VgOmAke0FQSX0vcmVnaXN0cmFyVmVudGE/bWVyY2Fkb1BhZ289dHJ1ZWA7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcVZlbnRhID0gYXdhaXQgZmV0Y2godXJsLHtcclxuICAgICAgICAgICAgICAgIGhlYWRlcnMsXHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6J1BPU1QnLFxyXG4gICAgICAgICAgICAgICAgYm9keTpKU09OLnN0cmluZ2lmeShkYXRhKVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgaWYocmVxVmVudGEuc3RhdHVzID09IDIwMCl7XHJcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnZGF0YUVudmlvJyk7XHJcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnY2Fycml0bycpO1xyXG4gICAgICAgICAgICAgICAgc2V0VmVudGFSZWdpc3RyYWRhKCdGZWxpY2lkYWRlcywgVHUgdmVudGEgc2UgcmVnaXN0csOzIGNvbiDDqXhpdG8uIEVuIGJyZXZlIG5vcyBjb211bmljYXJlbW9zIGNvbiB1c3RlZCBwYXJhIGluZm9ybWFybGUgZWwgZXN0YWRvIGRlIHN1IGNvbXByYS4nKTtcclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5hc3NpZ24oJy8nKVxyXG4gICAgICAgICAgICAgICAgfSwgNTAwMCk7XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgc2V0RXJyb3IodHJ1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBzZXRFcnJvcihlcnJvci5tZXNzYWdlKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPEhlYWQgdGl0bGU9XCJGaW5hbGl6YWNpb24gZGUgY29tcHJhXCIgbWV0YWRlc2M9XCJcIi8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgeyghcHJvcHMudXN1YXJpb1JlZHVjZXIubG9ndWVhZG8gfHwgcHJvcHMuZW52aW9zUmVkdWNlci5lcnJvciB8fCBwcm9wcy5jYXJyaXRvUmVkdWNlci5lcnJvciB8fCBlcnJvcik/PEVycm9yIG1lc3NhZ2U9XCJIYSBvY3VycmlkbyB1biBlcnJvciwgaW50ZW50YWxvIG1hcyB0YXJkZVwiLz46XHJcbiAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgeyh2ZW50YVJlZ2lzdHJhZGEpPzxkaXYgY2xhc3NOYW1lPVwiYWxlcnQgYWxlcnQtc3VjY2Vzc1wiPnt2ZW50YVJlZ2lzdHJhZGF9PC9kaXY+OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TG9hZGVyLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5TdSBjb21wcmEgZXN0YSBzaWVudG8gcHJvY2VzYWRhLCBhZ3VhcmRlIHVub3Mgc2VndW5kb3MuLi48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgICAgIC53cmFwcGVye1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6OTB2aDtcclxuICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XHJcbiAgICAgICAgICAgICAgICB9ICAgIFxyXG4gICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59XHJcblxyXG5Qcm9jZXNhclZlbnRhLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jKHtxdWVyeX0pPT57XHJcbiAgICBjb25zdCB7Y29sbGVjdGlvbl9pZH0gPSBxdWVyeTtcclxuICAgIHJldHVybiB7Y29sbGVjdGlvbl9pZH07XHJcbn1cclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9ICh7Y2Fycml0b1JlZHVjZXIsZW52aW9zUmVkdWNlcix1c3VhcmlvUmVkdWNlcn0pPT57XHJcbiAgICByZXR1cm4ge2NhcnJpdG9SZWR1Y2VyLGVudmlvc1JlZHVjZXIsdXN1YXJpb1JlZHVjZXJ9XHJcbn07XHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IHtcclxuICAgIGVudmlvc0d1YXJkYXIsXHJcbiAgICBjYXJyaXRvVHJhZXJQcm9kdWN0b3NcclxufVxyXG4gXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLG1hcERpc3BhdGNoVG9Qcm9wcykoUHJvY2VzYXJWZW50YSk7Il0sInNvdXJjZVJvb3QiOiIifQ==