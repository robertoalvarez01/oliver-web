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
              _context2.prev = 0;
              headers = new Headers();
              headers.append('token', props.usuarioReducer.usuario.token);
              headers.append("Content-Type", "application/json");
              url = !data.venta.operacion_id ? "".concat(_config_index__WEBPACK_IMPORTED_MODULE_9__["API"], "/registrarVenta?mercadoPago=false") : "".concat(_config_index__WEBPACK_IMPORTED_MODULE_9__["API"], "/registrarVenta?mercadoPago=true");
              _context2.next = 7;
              return fetch(url, {
                headers: headers,
                method: 'POST',
                body: JSON.stringify(data)
              });

            case 7:
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

              _context2.next = 14;
              break;

            case 11:
              _context2.prev = 11;
              _context2.t0 = _context2["catch"](0);
              setError(_context2.t0.message);

            case 14:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 11]]);
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
      lineNumber: 86,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "jsx-2063553454" + " " + "wrapper",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 13
    }
  }, !props.usuarioReducer.logueado || props.enviosReducer.error || props.carritoReducer.error || error ? __jsx(_src_components_Error__WEBPACK_IMPORTED_MODULE_10__["default"], {
    message: "Ha ocurrido un error, intentalo mas tarde",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 119
    }
  }) : __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, ventaRegistrada ? __jsx("div", {
    className: "jsx-2063553454" + " " + "alert alert-success",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 44
    }
  }, ventaRegistrada) : __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx(_src_components_Loader__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 33
    }
  }), __jsx("p", {
    className: "jsx-2063553454",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 33
    }
  }, "Su compra esta siento procesada, aguarde unos segundos...")))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "2063553454",
    __self: _this
  }, ".wrapper.jsx-2063553454{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:90vh;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcZnJhbmNcXERvY3VtZW50c1xcb2xpdmVyLTJcXHNpdGlvLWRlc2FcXHBhZ2VzXFxwcm9jZXNhclZlbnRhXFxbWy4uLnBhcmFtc11dLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1Hd0IsQUFHaUMsMEVBQ1UsbUdBQ0osNkZBQ1AsWUFDVSw4RUFDekIiLCJmaWxlIjoiQzpcXFVzZXJzXFxmcmFuY1xcRG9jdW1lbnRzXFxvbGl2ZXItMlxcc2l0aW8tZGVzYVxccGFnZXNcXHByb2Nlc2FyVmVudGFcXFtbLi4ucGFyYW1zXV0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICcuLi8uLi9zcmMvY29tcG9uZW50cy9IZWFkJztcclxuaW1wb3J0IExvYWRlciBmcm9tICcuLi8uLi9zcmMvY29tcG9uZW50cy9Mb2FkZXInO1xyXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0ICogYXMgY2Fycml0b0FjdGlvbnMgZnJvbSAnLi4vLi4vc3RvcmUvYWN0aW9ucy9jYXJyaXRvQWN0aW9ucyc7XHJcbmltcG9ydCAqIGFzIGVudmlvc0FjdGlvbnMgZnJvbSAnLi4vLi4vc3RvcmUvYWN0aW9ucy9lbnZpb3NBY3Rpb25zJztcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtBUEl9IGZyb20gJy4uLy4uL2NvbmZpZy9pbmRleCc7XHJcbmltcG9ydCBFcnJvciBmcm9tICcuLi8uLi9zcmMvY29tcG9uZW50cy9FcnJvcic7XHJcblxyXG5jb25zdCB7Z3VhcmRhcjplbnZpb3NHdWFyZGFyfSA9IGVudmlvc0FjdGlvbnM7XHJcbmNvbnN0IHt0cmFlclByb2R1Y3RvczpjYXJyaXRvVHJhZXJQcm9kdWN0b3N9ID0gY2Fycml0b0FjdGlvbnM7XHJcblxyXG5jb25zdCBQcm9jZXNhclZlbnRhID0gKHByb3BzKSA9PiB7XHJcbiAgICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFt2ZW50YVJlZ2lzdHJhZGEsIHNldFZlbnRhUmVnaXN0cmFkYV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zdCBkYXRhRW52aW8gPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdkYXRhRW52aW8nKSk7XHJcbiAgICAgICAgcHJvcHMuZW52aW9zR3VhcmRhcihkYXRhRW52aW8pO1xyXG4gICAgICAgIHByb3BzLmNhcnJpdG9UcmFlclByb2R1Y3RvcygpO1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYocHJvcHMudXN1YXJpb1JlZHVjZXIubG9ndWVhZG8gJiYgcHJvcHMuY2Fycml0b1JlZHVjZXIucHJvZHVjdG9zLmxlbmd0aD4wICYmIHByb3BzLmVudmlvc1JlZHVjZXIuZGF0YSl7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdqZWplJyk7XHJcbiAgICAgICAgICAgIHByb2Nlc2FySW5mbygpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtwcm9wcy5lbnZpb3NSZWR1Y2VyXSlcclxuXHJcbiAgICBjb25zdCBwcm9jZXNhckluZm8gPSBhc3luYygpPT57XHJcbiAgICAgICAgY29uc3Qge2lkVXN1YXJpb30gPSBwcm9wcy51c3VhcmlvUmVkdWNlci51c3VhcmlvO1xyXG4gICAgICAgIGNvbnN0IHtzdWJ0b3RhbCxwb3JjZW50YWplX2Rlc2N1ZW50byxkZXNjdWVudG8sdG90YWwscHJvZHVjdG9zLGlkTWVkaW9QYWdvfSA9IHByb3BzLmNhcnJpdG9SZWR1Y2VyO1xyXG4gICAgICAgIGNvbnN0IHt6b25hLHRpcG99ID0gcHJvcHMuZW52aW9zUmVkdWNlci5kYXRhO1xyXG4gICAgICAgIGxldCBmID0gbmV3IERhdGUoKTtcclxuICAgICAgICBsZXQgbWVzID0gKChmLmdldE1vbnRoKCkpPDEwKT9gMCR7Zi5nZXRNb250aCgpKzF9YDpgJHtmLmdldE1vbnRoKCl9YDtcclxuICAgICAgICBsZXQgZGlhID0gKChmLmdldERheSgpKTwxMCk/YDAke2YuZ2V0RGF5KCl9YDpgJHtmLmdldERheSgpfWA7XHJcbiAgICAgICAgbGV0IGZlY2hhID0gYCR7Zi5nZXRGdWxsWWVhcigpfS0ke21lc30tJHtkaWF9YDtcclxuICAgICAgICBsZXQgZGF0YVRvUmVxdWVzdCA9IHtcclxuICAgICAgICAgICAgZW52aW86e1xyXG4gICAgICAgICAgICAgICAgaWRab25hOnpvbmEsXHJcbiAgICAgICAgICAgICAgICB0aXBvOnRpcG9cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdmVudGE6e1xyXG4gICAgICAgICAgICAgICAgc3VidG90YWwsXHJcbiAgICAgICAgICAgICAgICBwb3JjZW50YWplX2Rlc2N1ZW50byxcclxuICAgICAgICAgICAgICAgIGRlc2N1ZW50byxcclxuICAgICAgICAgICAgICAgIHRvdGFsLFxyXG4gICAgICAgICAgICAgICAgaWRVc3VhcmlvLFxyXG4gICAgICAgICAgICAgICAgcHJvZHVjdG9zLFxyXG4gICAgICAgICAgICAgICAgZmVjaGEsXHJcbiAgICAgICAgICAgICAgICBvcGVyYWNpb25faWQ6cHJvcHMuY29sbGVjdGlvbl9pZCB8fCBudWxsLFxyXG4gICAgICAgICAgICAgICAgaWRNZWRpb1BhZ29cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmxvZyhkYXRhVG9SZXF1ZXN0KTtcclxuICAgICAgICAvL3JldHVybiByZWdpc3RyYXJWZW50YShkYXRhVG9SZXF1ZXN0KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCByZWdpc3RyYXJWZW50YSA9IGFzeW5jIGRhdGE9PntcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcclxuICAgICAgICAgICAgaGVhZGVycy5hcHBlbmQoJ3Rva2VuJyxwcm9wcy51c3VhcmlvUmVkdWNlci51c3VhcmlvLnRva2VuKTtcclxuICAgICAgICAgICAgaGVhZGVycy5hcHBlbmQoXCJDb250ZW50LVR5cGVcIiwgXCJhcHBsaWNhdGlvbi9qc29uXCIpO1xyXG4gICAgICAgICAgICBsZXQgdXJsID0gKCFkYXRhLnZlbnRhLm9wZXJhY2lvbl9pZCk/YCR7QVBJfS9yZWdpc3RyYXJWZW50YT9tZXJjYWRvUGFnbz1mYWxzZWA6YCR7QVBJfS9yZWdpc3RyYXJWZW50YT9tZXJjYWRvUGFnbz10cnVlYDtcclxuICAgICAgICAgICAgY29uc3QgcmVxVmVudGEgPSBhd2FpdCBmZXRjaCh1cmwse1xyXG4gICAgICAgICAgICAgICAgaGVhZGVycyxcclxuICAgICAgICAgICAgICAgIG1ldGhvZDonUE9TVCcsXHJcbiAgICAgICAgICAgICAgICBib2R5OkpTT04uc3RyaW5naWZ5KGRhdGEpXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBpZihyZXFWZW50YS5zdGF0dXMgPT0gMjAwKXtcclxuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdkYXRhRW52aW8nKTtcclxuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdjYXJyaXRvJyk7XHJcbiAgICAgICAgICAgICAgICBzZXRWZW50YVJlZ2lzdHJhZGEoJ0ZlbGljaWRhZGVzLCBUdSB2ZW50YSBzZSByZWdpc3Ryw7MgY29uIMOpeGl0by4gRW4gYnJldmUgbm9zIGNvbXVuaWNhcmVtb3MgY29uIHVzdGVkIHBhcmEgaW5mb3JtYXJsZSBlbCBlc3RhZG8gZGUgc3UgY29tcHJhLicpO1xyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmFzc2lnbignLycpXHJcbiAgICAgICAgICAgICAgICB9LCA1MDAwKTtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICBzZXRFcnJvcih0cnVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIHNldEVycm9yKGVycm9yLm1lc3NhZ2UpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8SGVhZCB0aXRsZT1cIkZpbmFsaXphY2lvbiBkZSBjb21wcmFcIiBtZXRhZGVzYz1cIlwiLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICB7KCFwcm9wcy51c3VhcmlvUmVkdWNlci5sb2d1ZWFkbyB8fCBwcm9wcy5lbnZpb3NSZWR1Y2VyLmVycm9yIHx8IHByb3BzLmNhcnJpdG9SZWR1Y2VyLmVycm9yIHx8IGVycm9yKT88RXJyb3IgbWVzc2FnZT1cIkhhIG9jdXJyaWRvIHVuIGVycm9yLCBpbnRlbnRhbG8gbWFzIHRhcmRlXCIvPjpcclxuICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7KHZlbnRhUmVnaXN0cmFkYSk/PGRpdiBjbGFzc05hbWU9XCJhbGVydCBhbGVydC1zdWNjZXNzXCI+e3ZlbnRhUmVnaXN0cmFkYX08L2Rpdj46XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMb2FkZXIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlN1IGNvbXByYSBlc3RhIHNpZW50byBwcm9jZXNhZGEsIGFndWFyZGUgdW5vcyBzZWd1bmRvcy4uLjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAgICAgLndyYXBwZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTpmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDpjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6Y2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDo5MHZoO1xyXG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcclxuICAgICAgICAgICAgICAgIH0gICAgXHJcbiAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn1cclxuXHJcblByb2Nlc2FyVmVudGEuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMoe3F1ZXJ5fSk9PntcclxuICAgIGNvbnN0IHtjb2xsZWN0aW9uX2lkLGlkTWVkaW9QYWdvfSA9IHF1ZXJ5O1xyXG4gICAgcmV0dXJuIHtjb2xsZWN0aW9uX2lkLGlkTWVkaW9QYWdvfTtcclxufVxyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHtjYXJyaXRvUmVkdWNlcixlbnZpb3NSZWR1Y2VyLHVzdWFyaW9SZWR1Y2VyfSk9PntcclxuICAgIHJldHVybiB7Y2Fycml0b1JlZHVjZXIsZW52aW9zUmVkdWNlcix1c3VhcmlvUmVkdWNlcn1cclxufTtcclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0ge1xyXG4gICAgZW52aW9zR3VhcmRhcixcclxuICAgIGNhcnJpdG9UcmFlclByb2R1Y3Rvc1xyXG59XHJcbiBcclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsbWFwRGlzcGF0Y2hUb1Byb3BzKShQcm9jZXNhclZlbnRhKTsiXX0= */\n/*@ sourceURL=C:\\\\Users\\\\franc\\\\Documents\\\\oliver-2\\\\sitio-desa\\\\pages\\\\procesarVenta\\\\[[...params]].js */"));
};

_s(ProcesarVenta, "0anAvrUsMEsNkOtuwJzV76+uKwo=");

_c = ProcesarVenta;

ProcesarVenta.getInitialProps = /*#__PURE__*/function () {
  var _ref4 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(_ref3) {
    var query, collection_id, idMedioPago;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            query = _ref3.query;
            collection_id = query.collection_id, idMedioPago = query.idMedioPago;
            return _context3.abrupt("return", {
              collection_id: collection_id,
              idMedioPago: idMedioPago
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvY2VzYXJWZW50YS9bWy4uLnBhcmFtc11dLmpzIl0sIm5hbWVzIjpbImVudmlvc0d1YXJkYXIiLCJlbnZpb3NBY3Rpb25zIiwiY2Fycml0b1RyYWVyUHJvZHVjdG9zIiwiY2Fycml0b0FjdGlvbnMiLCJQcm9jZXNhclZlbnRhIiwicHJvcHMiLCJ1c2VTdGF0ZSIsImVycm9yIiwic2V0RXJyb3IiLCJ2ZW50YVJlZ2lzdHJhZGEiLCJzZXRWZW50YVJlZ2lzdHJhZGEiLCJ1c2VFZmZlY3QiLCJkYXRhRW52aW8iLCJKU09OIiwicGFyc2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwidXN1YXJpb1JlZHVjZXIiLCJsb2d1ZWFkbyIsImNhcnJpdG9SZWR1Y2VyIiwicHJvZHVjdG9zIiwibGVuZ3RoIiwiZW52aW9zUmVkdWNlciIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwicHJvY2VzYXJJbmZvIiwiaWRVc3VhcmlvIiwidXN1YXJpbyIsInN1YnRvdGFsIiwicG9yY2VudGFqZV9kZXNjdWVudG8iLCJkZXNjdWVudG8iLCJ0b3RhbCIsImlkTWVkaW9QYWdvIiwiem9uYSIsInRpcG8iLCJmIiwiRGF0ZSIsIm1lcyIsImdldE1vbnRoIiwiZGlhIiwiZ2V0RGF5IiwiZmVjaGEiLCJnZXRGdWxsWWVhciIsImRhdGFUb1JlcXVlc3QiLCJlbnZpbyIsImlkWm9uYSIsInZlbnRhIiwib3BlcmFjaW9uX2lkIiwiY29sbGVjdGlvbl9pZCIsInJlZ2lzdHJhclZlbnRhIiwiaGVhZGVycyIsIkhlYWRlcnMiLCJhcHBlbmQiLCJ0b2tlbiIsInVybCIsIkFQSSIsImZldGNoIiwibWV0aG9kIiwiYm9keSIsInN0cmluZ2lmeSIsInJlcVZlbnRhIiwic3RhdHVzIiwicmVtb3ZlSXRlbSIsInNldFRpbWVvdXQiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImFzc2lnbiIsIm1lc3NhZ2UiLCJnZXRJbml0aWFsUHJvcHMiLCJxdWVyeSIsIm1hcFN0YXRlVG9Qcm9wcyIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImNvbm5lY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtJQUVlQSxhLEdBQWlCQyxvRTtJQUNWQyxxQixHQUF5QkMsNEU7O0FBRS9DLElBQU1DLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQUEsa0JBQ0hDLHNEQUFRLENBQUMsS0FBRCxDQURMO0FBQUEsTUFDdEJDLEtBRHNCO0FBQUEsTUFDZkMsUUFEZTs7QUFBQSxtQkFFaUJGLHNEQUFRLENBQUMsS0FBRCxDQUZ6QjtBQUFBLE1BRXRCRyxlQUZzQjtBQUFBLE1BRUxDLGtCQUZLOztBQUk3QkMseURBQVMsQ0FBQyxZQUFNO0FBQ1osUUFBTUMsU0FBUyxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0MsWUFBWSxDQUFDQyxPQUFiLENBQXFCLFdBQXJCLENBQVgsQ0FBbEI7QUFDQVgsU0FBSyxDQUFDTCxhQUFOLENBQW9CWSxTQUFwQjtBQUNBUCxTQUFLLENBQUNILHFCQUFOO0FBQ0gsR0FKUSxFQUlOLEVBSk0sQ0FBVDtBQU1BUyx5REFBUyxDQUFDLFlBQU07QUFDWixRQUFHTixLQUFLLENBQUNZLGNBQU4sQ0FBcUJDLFFBQXJCLElBQWlDYixLQUFLLENBQUNjLGNBQU4sQ0FBcUJDLFNBQXJCLENBQStCQyxNQUEvQixHQUFzQyxDQUF2RSxJQUE0RWhCLEtBQUssQ0FBQ2lCLGFBQU4sQ0FBb0JDLElBQW5HLEVBQXdHO0FBQ3BHQyxhQUFPLENBQUNDLEdBQVIsQ0FBWSxNQUFaO0FBQ0FDLGtCQUFZO0FBQ2Y7QUFDSixHQUxRLEVBS04sQ0FBQ3JCLEtBQUssQ0FBQ2lCLGFBQVAsQ0FMTSxDQUFUOztBQU9BLE1BQU1JLFlBQVk7QUFBQSxnTUFBRztBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ1ZDLHVCQURVLEdBQ0d0QixLQUFLLENBQUNZLGNBQU4sQ0FBcUJXLE9BRHhCLENBQ1ZELFNBRFU7QUFBQSxzQ0FFNkR0QixLQUFLLENBQUNjLGNBRm5FLEVBRVZVLFFBRlUseUJBRVZBLFFBRlUsRUFFREMsb0JBRkMseUJBRURBLG9CQUZDLEVBRW9CQyxTQUZwQix5QkFFb0JBLFNBRnBCLEVBRThCQyxLQUY5Qix5QkFFOEJBLEtBRjlCLEVBRW9DWixTQUZwQyx5QkFFb0NBLFNBRnBDLEVBRThDYSxXQUY5Qyx5QkFFOENBLFdBRjlDO0FBQUEsc0NBR0c1QixLQUFLLENBQUNpQixhQUFOLENBQW9CQyxJQUh2QixFQUdWVyxJQUhVLHlCQUdWQSxJQUhVLEVBR0xDLElBSEsseUJBR0xBLElBSEs7QUFJYkMsZUFKYSxHQUlULElBQUlDLElBQUosRUFKUztBQUtiQyxpQkFMYSxHQUtMRixDQUFDLENBQUNHLFFBQUYsRUFBRCxHQUFlLEVBQWhCLGNBQXdCSCxDQUFDLENBQUNHLFFBQUYsS0FBYSxDQUFyQyxjQUE0Q0gsQ0FBQyxDQUFDRyxRQUFGLEVBQTVDLENBTE87QUFNYkMsaUJBTmEsR0FNTEosQ0FBQyxDQUFDSyxNQUFGLEVBQUQsR0FBYSxFQUFkLGNBQXNCTCxDQUFDLENBQUNLLE1BQUYsRUFBdEIsY0FBc0NMLENBQUMsQ0FBQ0ssTUFBRixFQUF0QyxDQU5PO0FBT2JDLG1CQVBhLGFBT0ZOLENBQUMsQ0FBQ08sV0FBRixFQVBFLGNBT2lCTCxHQVBqQixjQU93QkUsR0FQeEI7QUFRYkksMkJBUmEsR0FRRztBQUNoQkMscUJBQUssRUFBQztBQUNGQyx3QkFBTSxFQUFDWixJQURMO0FBRUZDLHNCQUFJLEVBQUNBO0FBRkgsaUJBRFU7QUFLaEJZLHFCQUFLLEVBQUM7QUFDRmxCLDBCQUFRLEVBQVJBLFFBREU7QUFFRkMsc0NBQW9CLEVBQXBCQSxvQkFGRTtBQUdGQywyQkFBUyxFQUFUQSxTQUhFO0FBSUZDLHVCQUFLLEVBQUxBLEtBSkU7QUFLRkwsMkJBQVMsRUFBVEEsU0FMRTtBQU1GUCwyQkFBUyxFQUFUQSxTQU5FO0FBT0ZzQix1QkFBSyxFQUFMQSxLQVBFO0FBUUZNLDhCQUFZLEVBQUMzQyxLQUFLLENBQUM0QyxhQUFOLElBQXVCLElBUmxDO0FBU0ZoQiw2QkFBVyxFQUFYQTtBQVRFO0FBTFUsZUFSSDtBQXlCakJULHFCQUFPLENBQUNDLEdBQVIsQ0FBWW1CLGFBQVosRUF6QmlCLENBMEJqQjs7QUExQmlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQVpsQixZQUFZO0FBQUE7QUFBQTtBQUFBLEtBQWxCOztBQTZCQSxNQUFNd0IsY0FBYztBQUFBLGlNQUFHLGtCQUFNM0IsSUFBTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVUNEIscUJBRlMsR0FFQyxJQUFJQyxPQUFKLEVBRkQ7QUFHZkQscUJBQU8sQ0FBQ0UsTUFBUixDQUFlLE9BQWYsRUFBdUJoRCxLQUFLLENBQUNZLGNBQU4sQ0FBcUJXLE9BQXJCLENBQTZCMEIsS0FBcEQ7QUFDQUgscUJBQU8sQ0FBQ0UsTUFBUixDQUFlLGNBQWYsRUFBK0Isa0JBQS9CO0FBQ0lFLGlCQUxXLEdBS0osQ0FBQ2hDLElBQUksQ0FBQ3dCLEtBQUwsQ0FBV0MsWUFBYixhQUE4QlEsaURBQTlCLG1EQUF3RUEsaURBQXhFLHFDQUxLO0FBQUE7QUFBQSxxQkFNUUMsS0FBSyxDQUFDRixHQUFELEVBQUs7QUFDN0JKLHVCQUFPLEVBQVBBLE9BRDZCO0FBRTdCTyxzQkFBTSxFQUFDLE1BRnNCO0FBRzdCQyxvQkFBSSxFQUFDOUMsSUFBSSxDQUFDK0MsU0FBTCxDQUFlckMsSUFBZjtBQUh3QixlQUFMLENBTmI7O0FBQUE7QUFNVHNDLHNCQU5TOztBQVdmLGtCQUFHQSxRQUFRLENBQUNDLE1BQVQsSUFBbUIsR0FBdEIsRUFBMEI7QUFDdEIvQyw0QkFBWSxDQUFDZ0QsVUFBYixDQUF3QixXQUF4QjtBQUNBaEQsNEJBQVksQ0FBQ2dELFVBQWIsQ0FBd0IsU0FBeEI7QUFDQXJELGtDQUFrQixDQUFDLDJIQUFELENBQWxCO0FBQ0FzRCwwQkFBVSxDQUFDLFlBQU07QUFDYkMsd0JBQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsTUFBaEIsQ0FBdUIsR0FBdkI7QUFDSCxpQkFGUyxFQUVQLElBRk8sQ0FBVjtBQUdILGVBUEQsTUFPSztBQUNEM0Qsd0JBQVEsQ0FBQyxJQUFELENBQVI7QUFDSDs7QUFwQmM7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFzQmZBLHNCQUFRLENBQUMsYUFBTTRELE9BQVAsQ0FBUjs7QUF0QmU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBZGxCLGNBQWM7QUFBQTtBQUFBO0FBQUEsS0FBcEI7O0FBeUJBLFNBQ0ksbUVBQ0ksTUFBQyw0REFBRDtBQUFNLFNBQUssRUFBQyx3QkFBWjtBQUFxQyxZQUFRLEVBQUMsRUFBOUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLEVBRUk7QUFBQSx3Q0FBZSxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDTSxDQUFDN0MsS0FBSyxDQUFDWSxjQUFOLENBQXFCQyxRQUF0QixJQUFrQ2IsS0FBSyxDQUFDaUIsYUFBTixDQUFvQmYsS0FBdEQsSUFBK0RGLEtBQUssQ0FBQ2MsY0FBTixDQUFxQlosS0FBcEYsSUFBNkZBLEtBQTlGLEdBQXFHLE1BQUMsOERBQUQ7QUFBTyxXQUFPLEVBQUMsMkNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUFyRyxHQUNHLG1FQUNNRSxlQUFELEdBQWtCO0FBQUEsd0NBQWUscUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFzQ0EsZUFBdEMsQ0FBbEIsR0FDRyxtRUFDSSxNQUFDLDhEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixFQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpRUFGSixDQUZSLENBRlIsQ0FGSjtBQUFBO0FBQUE7QUFBQSwraVBBREo7QUEyQkgsQ0FsR0Q7O0dBQU1MLGE7O0tBQUFBLGE7O0FBb0dOQSxhQUFhLENBQUNpRSxlQUFkO0FBQUEsK0xBQWdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFPQyxpQkFBUCxTQUFPQSxLQUFQO0FBQ3JCckIseUJBRHFCLEdBQ1FxQixLQURSLENBQ3JCckIsYUFEcUIsRUFDUGhCLFdBRE8sR0FDUXFDLEtBRFIsQ0FDUHJDLFdBRE87QUFBQSw4Q0FFckI7QUFBQ2dCLDJCQUFhLEVBQWJBLGFBQUQ7QUFBZWhCLHlCQUFXLEVBQVhBO0FBQWYsYUFGcUI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBaEM7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBS0EsSUFBTXNDLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsUUFBaUQ7QUFBQSxNQUEvQ3BELGNBQStDLFNBQS9DQSxjQUErQztBQUFBLE1BQWhDRyxhQUFnQyxTQUFoQ0EsYUFBZ0M7QUFBQSxNQUFsQkwsY0FBa0IsU0FBbEJBLGNBQWtCO0FBQ3JFLFNBQU87QUFBQ0Usa0JBQWMsRUFBZEEsY0FBRDtBQUFnQkcsaUJBQWEsRUFBYkEsYUFBaEI7QUFBOEJMLGtCQUFjLEVBQWRBO0FBQTlCLEdBQVA7QUFDSCxDQUZEOztBQUdBLElBQU11RCxrQkFBa0IsR0FBRztBQUN2QnhFLGVBQWEsRUFBYkEsYUFEdUI7QUFFdkJFLHVCQUFxQixFQUFyQkE7QUFGdUIsQ0FBM0I7QUFLZXVFLDBIQUFPLENBQUNGLGVBQUQsRUFBaUJDLGtCQUFqQixDQUFQLENBQTRDcEUsYUFBNUMsQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9jZXNhclZlbnRhL1tbLi4ucGFyYW1zXV0uNDI2MDVkYmEyYmI2ODhmNzU4ZTcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJy4uLy4uL3NyYy9jb21wb25lbnRzL0hlYWQnO1xyXG5pbXBvcnQgTG9hZGVyIGZyb20gJy4uLy4uL3NyYy9jb21wb25lbnRzL0xvYWRlcic7XHJcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgKiBhcyBjYXJyaXRvQWN0aW9ucyBmcm9tICcuLi8uLi9zdG9yZS9hY3Rpb25zL2NhcnJpdG9BY3Rpb25zJztcclxuaW1wb3J0ICogYXMgZW52aW9zQWN0aW9ucyBmcm9tICcuLi8uLi9zdG9yZS9hY3Rpb25zL2Vudmlvc0FjdGlvbnMnO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge0FQSX0gZnJvbSAnLi4vLi4vY29uZmlnL2luZGV4JztcclxuaW1wb3J0IEVycm9yIGZyb20gJy4uLy4uL3NyYy9jb21wb25lbnRzL0Vycm9yJztcclxuXHJcbmNvbnN0IHtndWFyZGFyOmVudmlvc0d1YXJkYXJ9ID0gZW52aW9zQWN0aW9ucztcclxuY29uc3Qge3RyYWVyUHJvZHVjdG9zOmNhcnJpdG9UcmFlclByb2R1Y3Rvc30gPSBjYXJyaXRvQWN0aW9ucztcclxuXHJcbmNvbnN0IFByb2Nlc2FyVmVudGEgPSAocHJvcHMpID0+IHtcclxuICAgIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW3ZlbnRhUmVnaXN0cmFkYSwgc2V0VmVudGFSZWdpc3RyYWRhXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGRhdGFFbnZpbyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2RhdGFFbnZpbycpKTtcclxuICAgICAgICBwcm9wcy5lbnZpb3NHdWFyZGFyKGRhdGFFbnZpbyk7XHJcbiAgICAgICAgcHJvcHMuY2Fycml0b1RyYWVyUHJvZHVjdG9zKCk7XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZihwcm9wcy51c3VhcmlvUmVkdWNlci5sb2d1ZWFkbyAmJiBwcm9wcy5jYXJyaXRvUmVkdWNlci5wcm9kdWN0b3MubGVuZ3RoPjAgJiYgcHJvcHMuZW52aW9zUmVkdWNlci5kYXRhKXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2plamUnKTtcclxuICAgICAgICAgICAgcHJvY2VzYXJJbmZvKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW3Byb3BzLmVudmlvc1JlZHVjZXJdKVxyXG5cclxuICAgIGNvbnN0IHByb2Nlc2FySW5mbyA9IGFzeW5jKCk9PntcclxuICAgICAgICBjb25zdCB7aWRVc3VhcmlvfSA9IHByb3BzLnVzdWFyaW9SZWR1Y2VyLnVzdWFyaW87XHJcbiAgICAgICAgY29uc3Qge3N1YnRvdGFsLHBvcmNlbnRhamVfZGVzY3VlbnRvLGRlc2N1ZW50byx0b3RhbCxwcm9kdWN0b3MsaWRNZWRpb1BhZ299ID0gcHJvcHMuY2Fycml0b1JlZHVjZXI7XHJcbiAgICAgICAgY29uc3Qge3pvbmEsdGlwb30gPSBwcm9wcy5lbnZpb3NSZWR1Y2VyLmRhdGE7XHJcbiAgICAgICAgbGV0IGYgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgIGxldCBtZXMgPSAoKGYuZ2V0TW9udGgoKSk8MTApP2AwJHtmLmdldE1vbnRoKCkrMX1gOmAke2YuZ2V0TW9udGgoKX1gO1xyXG4gICAgICAgIGxldCBkaWEgPSAoKGYuZ2V0RGF5KCkpPDEwKT9gMCR7Zi5nZXREYXkoKX1gOmAke2YuZ2V0RGF5KCl9YDtcclxuICAgICAgICBsZXQgZmVjaGEgPSBgJHtmLmdldEZ1bGxZZWFyKCl9LSR7bWVzfS0ke2RpYX1gO1xyXG4gICAgICAgIGxldCBkYXRhVG9SZXF1ZXN0ID0ge1xyXG4gICAgICAgICAgICBlbnZpbzp7XHJcbiAgICAgICAgICAgICAgICBpZFpvbmE6em9uYSxcclxuICAgICAgICAgICAgICAgIHRpcG86dGlwb1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB2ZW50YTp7XHJcbiAgICAgICAgICAgICAgICBzdWJ0b3RhbCxcclxuICAgICAgICAgICAgICAgIHBvcmNlbnRhamVfZGVzY3VlbnRvLFxyXG4gICAgICAgICAgICAgICAgZGVzY3VlbnRvLFxyXG4gICAgICAgICAgICAgICAgdG90YWwsXHJcbiAgICAgICAgICAgICAgICBpZFVzdWFyaW8sXHJcbiAgICAgICAgICAgICAgICBwcm9kdWN0b3MsXHJcbiAgICAgICAgICAgICAgICBmZWNoYSxcclxuICAgICAgICAgICAgICAgIG9wZXJhY2lvbl9pZDpwcm9wcy5jb2xsZWN0aW9uX2lkIHx8IG51bGwsXHJcbiAgICAgICAgICAgICAgICBpZE1lZGlvUGFnb1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGFUb1JlcXVlc3QpO1xyXG4gICAgICAgIC8vcmV0dXJuIHJlZ2lzdHJhclZlbnRhKGRhdGFUb1JlcXVlc3QpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHJlZ2lzdHJhclZlbnRhID0gYXN5bmMgZGF0YT0+e1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xyXG4gICAgICAgICAgICBoZWFkZXJzLmFwcGVuZCgndG9rZW4nLHByb3BzLnVzdWFyaW9SZWR1Y2VyLnVzdWFyaW8udG9rZW4pO1xyXG4gICAgICAgICAgICBoZWFkZXJzLmFwcGVuZChcIkNvbnRlbnQtVHlwZVwiLCBcImFwcGxpY2F0aW9uL2pzb25cIik7XHJcbiAgICAgICAgICAgIGxldCB1cmwgPSAoIWRhdGEudmVudGEub3BlcmFjaW9uX2lkKT9gJHtBUEl9L3JlZ2lzdHJhclZlbnRhP21lcmNhZG9QYWdvPWZhbHNlYDpgJHtBUEl9L3JlZ2lzdHJhclZlbnRhP21lcmNhZG9QYWdvPXRydWVgO1xyXG4gICAgICAgICAgICBjb25zdCByZXFWZW50YSA9IGF3YWl0IGZldGNoKHVybCx7XHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzLFxyXG4gICAgICAgICAgICAgICAgbWV0aG9kOidQT1NUJyxcclxuICAgICAgICAgICAgICAgIGJvZHk6SlNPTi5zdHJpbmdpZnkoZGF0YSlcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGlmKHJlcVZlbnRhLnN0YXR1cyA9PSAyMDApe1xyXG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2RhdGFFbnZpbycpO1xyXG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2NhcnJpdG8nKTtcclxuICAgICAgICAgICAgICAgIHNldFZlbnRhUmVnaXN0cmFkYSgnRmVsaWNpZGFkZXMsIFR1IHZlbnRhIHNlIHJlZ2lzdHLDsyBjb24gw6l4aXRvLiBFbiBicmV2ZSBub3MgY29tdW5pY2FyZW1vcyBjb24gdXN0ZWQgcGFyYSBpbmZvcm1hcmxlIGVsIGVzdGFkbyBkZSBzdSBjb21wcmEuJyk7XHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uYXNzaWduKCcvJylcclxuICAgICAgICAgICAgICAgIH0sIDUwMDApO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIHNldEVycm9yKHRydWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgc2V0RXJyb3IoZXJyb3IubWVzc2FnZSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxIZWFkIHRpdGxlPVwiRmluYWxpemFjaW9uIGRlIGNvbXByYVwiIG1ldGFkZXNjPVwiXCIvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgIHsoIXByb3BzLnVzdWFyaW9SZWR1Y2VyLmxvZ3VlYWRvIHx8IHByb3BzLmVudmlvc1JlZHVjZXIuZXJyb3IgfHwgcHJvcHMuY2Fycml0b1JlZHVjZXIuZXJyb3IgfHwgZXJyb3IpPzxFcnJvciBtZXNzYWdlPVwiSGEgb2N1cnJpZG8gdW4gZXJyb3IsIGludGVudGFsbyBtYXMgdGFyZGVcIi8+OlxyXG4gICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsodmVudGFSZWdpc3RyYWRhKT88ZGl2IGNsYXNzTmFtZT1cImFsZXJ0IGFsZXJ0LXN1Y2Nlc3NcIj57dmVudGFSZWdpc3RyYWRhfTwvZGl2PjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExvYWRlci8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+U3UgY29tcHJhIGVzdGEgc2llbnRvIHByb2Nlc2FkYSwgYWd1YXJkZSB1bm9zIHNlZ3VuZG9zLi4uPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICAgICAud3JhcHBlcntcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OmNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczpjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0Ojkwdmg7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xyXG4gICAgICAgICAgICAgICAgfSAgICBcclxuICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufVxyXG5cclxuUHJvY2VzYXJWZW50YS5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyh7cXVlcnl9KT0+e1xyXG4gICAgY29uc3Qge2NvbGxlY3Rpb25faWQsaWRNZWRpb1BhZ299ID0gcXVlcnk7XHJcbiAgICByZXR1cm4ge2NvbGxlY3Rpb25faWQsaWRNZWRpb1BhZ299O1xyXG59XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoe2NhcnJpdG9SZWR1Y2VyLGVudmlvc1JlZHVjZXIsdXN1YXJpb1JlZHVjZXJ9KT0+e1xyXG4gICAgcmV0dXJuIHtjYXJyaXRvUmVkdWNlcixlbnZpb3NSZWR1Y2VyLHVzdWFyaW9SZWR1Y2VyfVxyXG59O1xyXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSB7XHJcbiAgICBlbnZpb3NHdWFyZGFyLFxyXG4gICAgY2Fycml0b1RyYWVyUHJvZHVjdG9zXHJcbn1cclxuIFxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcyxtYXBEaXNwYXRjaFRvUHJvcHMpKFByb2Nlc2FyVmVudGEpOyJdLCJzb3VyY2VSb290IjoiIn0=