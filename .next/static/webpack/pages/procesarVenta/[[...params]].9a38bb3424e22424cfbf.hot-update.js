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
              };
              console.log(dataToRequest);
              return _context.abrupt("return", registrarVenta(dataToRequest));

            case 10:
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

  if (props.usuarioReducer.logueado && props.carritoReducer.productos.length > 0 && props.enviosReducer.data) {
    procesarInfo();
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx(_src_components_Head__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: "Finalizacion de compra",
    metadesc: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "jsx-2063553454" + " " + "wrapper",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 13
    }
  }, !props.usuarioReducer.logueado || props.enviosReducer.error || props.carritoReducer.error || error ? __jsx(_src_components_Error__WEBPACK_IMPORTED_MODULE_10__["default"], {
    message: "Ha ocurrido un error, intentalo mas tarde",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 119
    }
  }) : __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, ventaRegistrada ? __jsx("div", {
    className: "jsx-2063553454" + " " + "alert alert-success",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 44
    }
  }, ventaRegistrada) : __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx(_src_components_Loader__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 33
    }
  }), __jsx("p", {
    className: "jsx-2063553454",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 33
    }
  }, "Su compra esta siento procesada, aguarde unos segundos...")))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "2063553454",
    __self: _this
  }, ".wrapper.jsx-2063553454{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:90vh;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcZnJhbmNcXERvY3VtZW50c1xcb2xpdmVyLTJcXHNpdGlvLWRlc2FcXHBhZ2VzXFxwcm9jZXNhclZlbnRhXFxbWy4uLnBhcmFtc11dLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlHd0IsQUFHaUMsMEVBQ1UsbUdBQ0osNkZBQ1AsWUFDVSw4RUFDekIiLCJmaWxlIjoiQzpcXFVzZXJzXFxmcmFuY1xcRG9jdW1lbnRzXFxvbGl2ZXItMlxcc2l0aW8tZGVzYVxccGFnZXNcXHByb2Nlc2FyVmVudGFcXFtbLi4ucGFyYW1zXV0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICcuLi8uLi9zcmMvY29tcG9uZW50cy9IZWFkJztcclxuaW1wb3J0IExvYWRlciBmcm9tICcuLi8uLi9zcmMvY29tcG9uZW50cy9Mb2FkZXInO1xyXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0ICogYXMgY2Fycml0b0FjdGlvbnMgZnJvbSAnLi4vLi4vc3RvcmUvYWN0aW9ucy9jYXJyaXRvQWN0aW9ucyc7XHJcbmltcG9ydCAqIGFzIGVudmlvc0FjdGlvbnMgZnJvbSAnLi4vLi4vc3RvcmUvYWN0aW9ucy9lbnZpb3NBY3Rpb25zJztcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtBUEl9IGZyb20gJy4uLy4uL2NvbmZpZy9pbmRleCc7XHJcbmltcG9ydCBFcnJvciBmcm9tICcuLi8uLi9zcmMvY29tcG9uZW50cy9FcnJvcic7XHJcblxyXG5jb25zdCB7Z3VhcmRhcjplbnZpb3NHdWFyZGFyfSA9IGVudmlvc0FjdGlvbnM7XHJcbmNvbnN0IHt0cmFlclByb2R1Y3RvczpjYXJyaXRvVHJhZXJQcm9kdWN0b3N9ID0gY2Fycml0b0FjdGlvbnM7XHJcblxyXG5jb25zdCBQcm9jZXNhclZlbnRhID0gKHByb3BzKSA9PiB7XHJcbiAgICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFt2ZW50YVJlZ2lzdHJhZGEsIHNldFZlbnRhUmVnaXN0cmFkYV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zdCBkYXRhRW52aW8gPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdkYXRhRW52aW8nKSk7XHJcbiAgICAgICAgcHJvcHMuZW52aW9zR3VhcmRhcihkYXRhRW52aW8pO1xyXG4gICAgICAgIHByb3BzLmNhcnJpdG9UcmFlclByb2R1Y3RvcygpO1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIGNvbnN0IHByb2Nlc2FySW5mbyA9IGFzeW5jKCk9PntcclxuICAgICAgICBjb25zdCB7aWRVc3VhcmlvfSA9IHByb3BzLnVzdWFyaW9SZWR1Y2VyLnVzdWFyaW87XHJcbiAgICAgICAgY29uc3Qge3N1YnRvdGFsLHBvcmNlbnRhamVfZGVzY3VlbnRvLGRlc2N1ZW50byx0b3RhbCxwcm9kdWN0b3MsaWRNZWRpb1BhZ299ID0gcHJvcHMuY2Fycml0b1JlZHVjZXI7XHJcbiAgICAgICAgY29uc3Qge3pvbmEsdGlwb30gPSBwcm9wcy5lbnZpb3NSZWR1Y2VyLmRhdGE7XHJcbiAgICAgICAgbGV0IGYgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgIGxldCBtZXMgPSAoKGYuZ2V0TW9udGgoKSk8MTApP2AwJHtmLmdldE1vbnRoKCkrMX1gOmAke2YuZ2V0TW9udGgoKX1gO1xyXG4gICAgICAgIGxldCBkaWEgPSAoKGYuZ2V0RGF0ZSgpKTwxMCk/YDAke2YuZ2V0RGF0ZSgpfWA6YCR7Zi5nZXREYXRlKCl9YDtcclxuICAgICAgICBsZXQgZmVjaGEgPSBgJHtmLmdldEZ1bGxZZWFyKCl9LSR7bWVzfS0ke2RpYX1gO1xyXG4gICAgICAgIGxldCBkYXRhVG9SZXF1ZXN0ID0ge1xyXG4gICAgICAgICAgICBlbnZpbzp7XHJcbiAgICAgICAgICAgICAgICBpZFpvbmE6em9uYSxcclxuICAgICAgICAgICAgICAgIHRpcG86dGlwb1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB2ZW50YTp7XHJcbiAgICAgICAgICAgICAgICBzdWJ0b3RhbCxcclxuICAgICAgICAgICAgICAgIHBvcmNlbnRhamVfZGVzY3VlbnRvLFxyXG4gICAgICAgICAgICAgICAgZGVzY3VlbnRvLFxyXG4gICAgICAgICAgICAgICAgdG90YWwsXHJcbiAgICAgICAgICAgICAgICBpZFVzdWFyaW8sXHJcbiAgICAgICAgICAgICAgICBwcm9kdWN0b3MsXHJcbiAgICAgICAgICAgICAgICBmZWNoYSxcclxuICAgICAgICAgICAgICAgIG9wZXJhY2lvbl9pZDpwcm9wcy5jb2xsZWN0aW9uX2lkIHx8IG51bGwsXHJcbiAgICAgICAgICAgICAgICBpZE1lZGlvUGFnb1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGFUb1JlcXVlc3QpO1xyXG4gICAgICAgIHJldHVybiByZWdpc3RyYXJWZW50YShkYXRhVG9SZXF1ZXN0KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCByZWdpc3RyYXJWZW50YSA9IGFzeW5jIGRhdGE9PntcclxuICAgICAgICBjb25zb2xlLmxvZygnYWNhJyk7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XHJcbiAgICAgICAgICAgIGhlYWRlcnMuYXBwZW5kKCd0b2tlbicscHJvcHMudXN1YXJpb1JlZHVjZXIudXN1YXJpby50b2tlbik7XHJcbiAgICAgICAgICAgIGhlYWRlcnMuYXBwZW5kKFwiQ29udGVudC1UeXBlXCIsIFwiYXBwbGljYXRpb24vanNvblwiKTtcclxuICAgICAgICAgICAgbGV0IHVybCA9ICghZGF0YS52ZW50YS5vcGVyYWNpb25faWQpP2Ake0FQSX0vcmVnaXN0cmFyVmVudGE/bWVyY2Fkb1BhZ289ZmFsc2VgOmAke0FQSX0vcmVnaXN0cmFyVmVudGE/bWVyY2Fkb1BhZ289dHJ1ZWA7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcVZlbnRhID0gYXdhaXQgZmV0Y2godXJsLHtcclxuICAgICAgICAgICAgICAgIGhlYWRlcnMsXHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6J1BPU1QnLFxyXG4gICAgICAgICAgICAgICAgYm9keTpKU09OLnN0cmluZ2lmeShkYXRhKVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgaWYocmVxVmVudGEuc3RhdHVzID09IDIwMCl7XHJcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnZGF0YUVudmlvJyk7XHJcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnY2Fycml0bycpO1xyXG4gICAgICAgICAgICAgICAgc2V0VmVudGFSZWdpc3RyYWRhKCdGZWxpY2lkYWRlcywgVHUgdmVudGEgc2UgcmVnaXN0csOzIGNvbiDDqXhpdG8uIEVuIGJyZXZlIG5vcyBjb211bmljYXJlbW9zIGNvbiB1c3RlZCBwYXJhIGluZm9ybWFybGUgZWwgZXN0YWRvIGRlIHN1IGNvbXByYS4nKTtcclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5hc3NpZ24oJy8nKVxyXG4gICAgICAgICAgICAgICAgfSwgNTAwMCk7XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgc2V0RXJyb3IodHJ1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBzZXRFcnJvcihlcnJvci5tZXNzYWdlKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGlmKHByb3BzLnVzdWFyaW9SZWR1Y2VyLmxvZ3VlYWRvICYmIHByb3BzLmNhcnJpdG9SZWR1Y2VyLnByb2R1Y3Rvcy5sZW5ndGg+MCAmJiBwcm9wcy5lbnZpb3NSZWR1Y2VyLmRhdGEpe1xyXG4gICAgICAgIHByb2Nlc2FySW5mbygpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPEhlYWQgdGl0bGU9XCJGaW5hbGl6YWNpb24gZGUgY29tcHJhXCIgbWV0YWRlc2M9XCJcIi8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgeyghcHJvcHMudXN1YXJpb1JlZHVjZXIubG9ndWVhZG8gfHwgcHJvcHMuZW52aW9zUmVkdWNlci5lcnJvciB8fCBwcm9wcy5jYXJyaXRvUmVkdWNlci5lcnJvciB8fCBlcnJvcik/PEVycm9yIG1lc3NhZ2U9XCJIYSBvY3VycmlkbyB1biBlcnJvciwgaW50ZW50YWxvIG1hcyB0YXJkZVwiLz46XHJcbiAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgeyh2ZW50YVJlZ2lzdHJhZGEpPzxkaXYgY2xhc3NOYW1lPVwiYWxlcnQgYWxlcnQtc3VjY2Vzc1wiPnt2ZW50YVJlZ2lzdHJhZGF9PC9kaXY+OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TG9hZGVyLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5TdSBjb21wcmEgZXN0YSBzaWVudG8gcHJvY2VzYWRhLCBhZ3VhcmRlIHVub3Mgc2VndW5kb3MuLi48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgICAgIC53cmFwcGVye1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6OTB2aDtcclxuICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XHJcbiAgICAgICAgICAgICAgICB9ICAgIFxyXG4gICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59XHJcblxyXG5Qcm9jZXNhclZlbnRhLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jKHtxdWVyeX0pPT57XHJcbiAgICBjb25zdCB7Y29sbGVjdGlvbl9pZH0gPSBxdWVyeTtcclxuICAgIHJldHVybiB7Y29sbGVjdGlvbl9pZH07XHJcbn1cclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9ICh7Y2Fycml0b1JlZHVjZXIsZW52aW9zUmVkdWNlcix1c3VhcmlvUmVkdWNlcn0pPT57XHJcbiAgICByZXR1cm4ge2NhcnJpdG9SZWR1Y2VyLGVudmlvc1JlZHVjZXIsdXN1YXJpb1JlZHVjZXJ9XHJcbn07XHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IHtcclxuICAgIGVudmlvc0d1YXJkYXIsXHJcbiAgICBjYXJyaXRvVHJhZXJQcm9kdWN0b3NcclxufVxyXG4gXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLG1hcERpc3BhdGNoVG9Qcm9wcykoUHJvY2VzYXJWZW50YSk7Il19 */\n/*@ sourceURL=C:\\\\Users\\\\franc\\\\Documents\\\\oliver-2\\\\sitio-desa\\\\pages\\\\procesarVenta\\\\[[...params]].js */"));
};

_s(ProcesarVenta, "DwopPUkvZJIoD0pO1NEB7O897AY=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvY2VzYXJWZW50YS9bWy4uLnBhcmFtc11dLmpzIl0sIm5hbWVzIjpbImVudmlvc0d1YXJkYXIiLCJlbnZpb3NBY3Rpb25zIiwiY2Fycml0b1RyYWVyUHJvZHVjdG9zIiwiY2Fycml0b0FjdGlvbnMiLCJQcm9jZXNhclZlbnRhIiwicHJvcHMiLCJ1c2VTdGF0ZSIsImVycm9yIiwic2V0RXJyb3IiLCJ2ZW50YVJlZ2lzdHJhZGEiLCJzZXRWZW50YVJlZ2lzdHJhZGEiLCJ1c2VFZmZlY3QiLCJkYXRhRW52aW8iLCJKU09OIiwicGFyc2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwicHJvY2VzYXJJbmZvIiwiaWRVc3VhcmlvIiwidXN1YXJpb1JlZHVjZXIiLCJ1c3VhcmlvIiwiY2Fycml0b1JlZHVjZXIiLCJzdWJ0b3RhbCIsInBvcmNlbnRhamVfZGVzY3VlbnRvIiwiZGVzY3VlbnRvIiwidG90YWwiLCJwcm9kdWN0b3MiLCJpZE1lZGlvUGFnbyIsImVudmlvc1JlZHVjZXIiLCJkYXRhIiwiem9uYSIsInRpcG8iLCJmIiwiRGF0ZSIsIm1lcyIsImdldE1vbnRoIiwiZGlhIiwiZ2V0RGF0ZSIsImZlY2hhIiwiZ2V0RnVsbFllYXIiLCJkYXRhVG9SZXF1ZXN0IiwiZW52aW8iLCJpZFpvbmEiLCJ2ZW50YSIsIm9wZXJhY2lvbl9pZCIsImNvbGxlY3Rpb25faWQiLCJjb25zb2xlIiwibG9nIiwicmVnaXN0cmFyVmVudGEiLCJoZWFkZXJzIiwiSGVhZGVycyIsImFwcGVuZCIsInRva2VuIiwidXJsIiwiQVBJIiwiZmV0Y2giLCJtZXRob2QiLCJib2R5Iiwic3RyaW5naWZ5IiwicmVxVmVudGEiLCJzdGF0dXMiLCJyZW1vdmVJdGVtIiwic2V0VGltZW91dCIsIndpbmRvdyIsImxvY2F0aW9uIiwiYXNzaWduIiwibWVzc2FnZSIsImxvZ3VlYWRvIiwibGVuZ3RoIiwiZ2V0SW5pdGlhbFByb3BzIiwicXVlcnkiLCJtYXBT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TEFBZ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQU9DLGlCQUFQLFNBQU9BLEtBQVA7QUFDckJ6Qix5QkFEcUIsR0FDSnlCLEtBREksQ0FDckJ6QixhQURxQjtBQUFBLDhDQUVyQjtBQUFDQSwyQkFBYSxFQUFiQTtBQUFELGFBRnFCOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQWhDOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUtBLElBQU0wQixlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLFFBQWlEO0FBQUEsTUFBL0NsRCxjQUErQyxTQUEvQ0EsY0FBK0M7QUFBQSxNQUFoQ08sYUFBZ0MsU0FBaENBLGFBQWdDO0FBQUEsTUFBbEJULGNBQWtCLFNBQWxCQSxjQUFrQjtBQUNyRSxTQUFPO0FBQUNFLGtCQUFjLEVBQWRBLGNBQUQ7QUFBZ0JPLGlCQUFhLEVBQWJBLGFBQWhCO0FBQThCVCxrQkFBYyxFQUFkQTtBQUE5QixHQUFQO0FBQ0gsQ0FGRDs7QUFHQSxJQUFNcUQsa0JBQWtCLEdBQUc7QUFDdkJ4RSxlQUFhLEVBQWJBLGFBRHVCO0FBRXZCRSx1QkFBcUIsRUFBckJBO0FBRnVCLENBQTNCO0FBS2V1RSwwSEFBTyxDQUFDRixlQUFELEVBQWlCQyxrQkFBakIsQ0FBUCxDQUE0Q3BFLGFBQTVDLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvY2VzYXJWZW50YS9bWy4uLnBhcmFtc11dLjlhMzhiYjM0MjRlMjI0MjRjZmJmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICcuLi8uLi9zcmMvY29tcG9uZW50cy9IZWFkJztcclxuaW1wb3J0IExvYWRlciBmcm9tICcuLi8uLi9zcmMvY29tcG9uZW50cy9Mb2FkZXInO1xyXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0ICogYXMgY2Fycml0b0FjdGlvbnMgZnJvbSAnLi4vLi4vc3RvcmUvYWN0aW9ucy9jYXJyaXRvQWN0aW9ucyc7XHJcbmltcG9ydCAqIGFzIGVudmlvc0FjdGlvbnMgZnJvbSAnLi4vLi4vc3RvcmUvYWN0aW9ucy9lbnZpb3NBY3Rpb25zJztcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtBUEl9IGZyb20gJy4uLy4uL2NvbmZpZy9pbmRleCc7XHJcbmltcG9ydCBFcnJvciBmcm9tICcuLi8uLi9zcmMvY29tcG9uZW50cy9FcnJvcic7XHJcblxyXG5jb25zdCB7Z3VhcmRhcjplbnZpb3NHdWFyZGFyfSA9IGVudmlvc0FjdGlvbnM7XHJcbmNvbnN0IHt0cmFlclByb2R1Y3RvczpjYXJyaXRvVHJhZXJQcm9kdWN0b3N9ID0gY2Fycml0b0FjdGlvbnM7XHJcblxyXG5jb25zdCBQcm9jZXNhclZlbnRhID0gKHByb3BzKSA9PiB7XHJcbiAgICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFt2ZW50YVJlZ2lzdHJhZGEsIHNldFZlbnRhUmVnaXN0cmFkYV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zdCBkYXRhRW52aW8gPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdkYXRhRW52aW8nKSk7XHJcbiAgICAgICAgcHJvcHMuZW52aW9zR3VhcmRhcihkYXRhRW52aW8pO1xyXG4gICAgICAgIHByb3BzLmNhcnJpdG9UcmFlclByb2R1Y3RvcygpO1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIGNvbnN0IHByb2Nlc2FySW5mbyA9IGFzeW5jKCk9PntcclxuICAgICAgICBjb25zdCB7aWRVc3VhcmlvfSA9IHByb3BzLnVzdWFyaW9SZWR1Y2VyLnVzdWFyaW87XHJcbiAgICAgICAgY29uc3Qge3N1YnRvdGFsLHBvcmNlbnRhamVfZGVzY3VlbnRvLGRlc2N1ZW50byx0b3RhbCxwcm9kdWN0b3MsaWRNZWRpb1BhZ299ID0gcHJvcHMuY2Fycml0b1JlZHVjZXI7XHJcbiAgICAgICAgY29uc3Qge3pvbmEsdGlwb30gPSBwcm9wcy5lbnZpb3NSZWR1Y2VyLmRhdGE7XHJcbiAgICAgICAgbGV0IGYgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgIGxldCBtZXMgPSAoKGYuZ2V0TW9udGgoKSk8MTApP2AwJHtmLmdldE1vbnRoKCkrMX1gOmAke2YuZ2V0TW9udGgoKX1gO1xyXG4gICAgICAgIGxldCBkaWEgPSAoKGYuZ2V0RGF0ZSgpKTwxMCk/YDAke2YuZ2V0RGF0ZSgpfWA6YCR7Zi5nZXREYXRlKCl9YDtcclxuICAgICAgICBsZXQgZmVjaGEgPSBgJHtmLmdldEZ1bGxZZWFyKCl9LSR7bWVzfS0ke2RpYX1gO1xyXG4gICAgICAgIGxldCBkYXRhVG9SZXF1ZXN0ID0ge1xyXG4gICAgICAgICAgICBlbnZpbzp7XHJcbiAgICAgICAgICAgICAgICBpZFpvbmE6em9uYSxcclxuICAgICAgICAgICAgICAgIHRpcG86dGlwb1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB2ZW50YTp7XHJcbiAgICAgICAgICAgICAgICBzdWJ0b3RhbCxcclxuICAgICAgICAgICAgICAgIHBvcmNlbnRhamVfZGVzY3VlbnRvLFxyXG4gICAgICAgICAgICAgICAgZGVzY3VlbnRvLFxyXG4gICAgICAgICAgICAgICAgdG90YWwsXHJcbiAgICAgICAgICAgICAgICBpZFVzdWFyaW8sXHJcbiAgICAgICAgICAgICAgICBwcm9kdWN0b3MsXHJcbiAgICAgICAgICAgICAgICBmZWNoYSxcclxuICAgICAgICAgICAgICAgIG9wZXJhY2lvbl9pZDpwcm9wcy5jb2xsZWN0aW9uX2lkIHx8IG51bGwsXHJcbiAgICAgICAgICAgICAgICBpZE1lZGlvUGFnb1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGFUb1JlcXVlc3QpO1xyXG4gICAgICAgIHJldHVybiByZWdpc3RyYXJWZW50YShkYXRhVG9SZXF1ZXN0KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCByZWdpc3RyYXJWZW50YSA9IGFzeW5jIGRhdGE9PntcclxuICAgICAgICBjb25zb2xlLmxvZygnYWNhJyk7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XHJcbiAgICAgICAgICAgIGhlYWRlcnMuYXBwZW5kKCd0b2tlbicscHJvcHMudXN1YXJpb1JlZHVjZXIudXN1YXJpby50b2tlbik7XHJcbiAgICAgICAgICAgIGhlYWRlcnMuYXBwZW5kKFwiQ29udGVudC1UeXBlXCIsIFwiYXBwbGljYXRpb24vanNvblwiKTtcclxuICAgICAgICAgICAgbGV0IHVybCA9ICghZGF0YS52ZW50YS5vcGVyYWNpb25faWQpP2Ake0FQSX0vcmVnaXN0cmFyVmVudGE/bWVyY2Fkb1BhZ289ZmFsc2VgOmAke0FQSX0vcmVnaXN0cmFyVmVudGE/bWVyY2Fkb1BhZ289dHJ1ZWA7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcVZlbnRhID0gYXdhaXQgZmV0Y2godXJsLHtcclxuICAgICAgICAgICAgICAgIGhlYWRlcnMsXHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6J1BPU1QnLFxyXG4gICAgICAgICAgICAgICAgYm9keTpKU09OLnN0cmluZ2lmeShkYXRhKVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgaWYocmVxVmVudGEuc3RhdHVzID09IDIwMCl7XHJcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnZGF0YUVudmlvJyk7XHJcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnY2Fycml0bycpO1xyXG4gICAgICAgICAgICAgICAgc2V0VmVudGFSZWdpc3RyYWRhKCdGZWxpY2lkYWRlcywgVHUgdmVudGEgc2UgcmVnaXN0csOzIGNvbiDDqXhpdG8uIEVuIGJyZXZlIG5vcyBjb211bmljYXJlbW9zIGNvbiB1c3RlZCBwYXJhIGluZm9ybWFybGUgZWwgZXN0YWRvIGRlIHN1IGNvbXByYS4nKTtcclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5hc3NpZ24oJy8nKVxyXG4gICAgICAgICAgICAgICAgfSwgNTAwMCk7XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgc2V0RXJyb3IodHJ1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBzZXRFcnJvcihlcnJvci5tZXNzYWdlKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGlmKHByb3BzLnVzdWFyaW9SZWR1Y2VyLmxvZ3VlYWRvICYmIHByb3BzLmNhcnJpdG9SZWR1Y2VyLnByb2R1Y3Rvcy5sZW5ndGg+MCAmJiBwcm9wcy5lbnZpb3NSZWR1Y2VyLmRhdGEpe1xyXG4gICAgICAgIHByb2Nlc2FySW5mbygpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPEhlYWQgdGl0bGU9XCJGaW5hbGl6YWNpb24gZGUgY29tcHJhXCIgbWV0YWRlc2M9XCJcIi8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgeyghcHJvcHMudXN1YXJpb1JlZHVjZXIubG9ndWVhZG8gfHwgcHJvcHMuZW52aW9zUmVkdWNlci5lcnJvciB8fCBwcm9wcy5jYXJyaXRvUmVkdWNlci5lcnJvciB8fCBlcnJvcik/PEVycm9yIG1lc3NhZ2U9XCJIYSBvY3VycmlkbyB1biBlcnJvciwgaW50ZW50YWxvIG1hcyB0YXJkZVwiLz46XHJcbiAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgeyh2ZW50YVJlZ2lzdHJhZGEpPzxkaXYgY2xhc3NOYW1lPVwiYWxlcnQgYWxlcnQtc3VjY2Vzc1wiPnt2ZW50YVJlZ2lzdHJhZGF9PC9kaXY+OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TG9hZGVyLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5TdSBjb21wcmEgZXN0YSBzaWVudG8gcHJvY2VzYWRhLCBhZ3VhcmRlIHVub3Mgc2VndW5kb3MuLi48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgICAgIC53cmFwcGVye1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6OTB2aDtcclxuICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XHJcbiAgICAgICAgICAgICAgICB9ICAgIFxyXG4gICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59XHJcblxyXG5Qcm9jZXNhclZlbnRhLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jKHtxdWVyeX0pPT57XHJcbiAgICBjb25zdCB7Y29sbGVjdGlvbl9pZH0gPSBxdWVyeTtcclxuICAgIHJldHVybiB7Y29sbGVjdGlvbl9pZH07XHJcbn1cclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9ICh7Y2Fycml0b1JlZHVjZXIsZW52aW9zUmVkdWNlcix1c3VhcmlvUmVkdWNlcn0pPT57XHJcbiAgICByZXR1cm4ge2NhcnJpdG9SZWR1Y2VyLGVudmlvc1JlZHVjZXIsdXN1YXJpb1JlZHVjZXJ9XHJcbn07XHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IHtcclxuICAgIGVudmlvc0d1YXJkYXIsXHJcbiAgICBjYXJyaXRvVHJhZXJQcm9kdWN0b3NcclxufVxyXG4gXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLG1hcERpc3BhdGNoVG9Qcm9wcykoUHJvY2VzYXJWZW50YSk7Il0sInNvdXJjZVJvb3QiOiIifQ==