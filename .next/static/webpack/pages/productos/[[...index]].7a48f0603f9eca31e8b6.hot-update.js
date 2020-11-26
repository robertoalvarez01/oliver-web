webpackHotUpdate_N_E("pages/productos/[[...index]]",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./src/components/Navbar/Navbar.module.css":
false,

/***/ "./src/components/Navbar/Navbar.module.css":
false,

/***/ "./src/components/Productos/index.js":
/*!*******************************************!*\
  !*** ./src/components/Productos/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _CardProducto__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../CardProducto */ "./src/components/CardProducto/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store_actions_productosActions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../store/actions/productosActions */ "./store/actions/productosActions.js");
/* harmony import */ var _Productos_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Productos.module.css */ "./src/components/Productos/Productos.module.css");
/* harmony import */ var _Productos_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_Productos_module_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _Loader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Loader */ "./src/components/Loader/index.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _Filtro_Filtro_module_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../Filtro/Filtro.module.css */ "./src/components/Filtro/Filtro.module.css");
/* harmony import */ var _Filtro_Filtro_module_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_Filtro_Filtro_module_css__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../helpers */ "./helpers/index.js");




var _this = undefined,
    _jsxFileName = "C:\\Users\\franc\\Documents\\oliver-2\\sitio-desa\\src\\components\\Productos\\index.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }










 //import NavbarStyle from '../Navbar/Navbar.module.css';

var Productos = function Productos(props) {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(''),
      filtro = _useState[0],
      setFiltro = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])({
    desde: 1,
    limiteDesktop: 20,
    limiteMobile: 10
  }),
      rangoProducto = _useState2[0],
      setRangoProducto = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    if (props.location !== '/productos') {
      if (props.query.search) {
        mostrarSolapaFiltro(props.query.search);
      } else {
        mostrarSolapaFiltro(props.query.index[0]);
      }
    } else {
      getProductos();
    }
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    if (rangoProducto.desde > 1) {
      props.traerMas(rangoProducto, props.productos);
    }
  }, [rangoProducto]);

  var showFiltrosMobile = function showFiltrosMobile() {
    if (document.getElementsByClassName(NavbarStyle.menu__collapsed)[0].classList.contains(NavbarStyle.showCollapsed)) {
      console.log('esta abierto');
    }

    document.getElementsByClassName('Filtro_filtros__contanier__3knXf')[0].classList.add(_Filtro_Filtro_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.show_filtros);
  };

  var getProductos = /*#__PURE__*/function () {
    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return props.traerTodos(rangoProducto);

            case 3:
              _context.next = 8;
              break;

            case 5:
              _context.prev = 5;
              _context.t0 = _context["catch"](0);
              console.log(_context.t0);

            case 8:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 5]]);
    }));

    return function getProductos() {
      return _ref.apply(this, arguments);
    };
  }();

  var mostrarSolapaFiltro = function mostrarSolapaFiltro(filtro) {
    setFiltro(filtro);
  };

  var handleChangeOrdenProductos = function handleChangeOrdenProductos(event) {
    if (event.target.value === 'asc') {
      props.productos.sort(function (a, b) {
        if (a.precioUnidad > b.precioUnidad) return 1;
        if (a.precioUnidad < b.precioUnidad) return -1;
        return 0;
      });
    } else {
      props.productos.sort(function (a, b) {
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

  var cargarMas = function cargarMas() {
    if (Object(_helpers__WEBPACK_IMPORTED_MODULE_13__["isMobile"])()) {
      setRangoProducto(_objectSpread(_objectSpread({}, rangoProducto), {}, {
        desde: rangoProducto.desde + rangoProducto.limiteMobile - 1
      }));
    } else {
      setRangoProducto(_objectSpread(_objectSpread({}, rangoProducto), {}, {
        desde: rangoProducto.desde + rangoProducto.limiteDesktop - 1
      }));
    }
  };

  var handleScrollFeedProductos = function handleScrollFeedProductos(event) {
    var feedProductos = document.querySelector('.feedProductos');
    var botonCargarMas = document.querySelector('.btn-vermas');
    var alturaTotalFeed = feedProductos.scrollHeight;
    var alturaActual = feedProductos.scrollTop;
    var porcentajeSuficiente = alturaTotalFeed * 80 / 100;

    if (alturaTotalFeed == 2060) {
      porcentajeSuficiente = alturaTotalFeed * 65 / 100;
    }

    ;

    if (alturaActual >= porcentajeSuficiente) {
      return botonCargarMas.classList.remove('d-none');
    } else {
      return botonCargarMas.classList.add('d-none');
    }
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, props.loading || !props.productos ? __jsx("div", {
    className: "jsx-2778668712" + " " + "col-12 text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 50
    }
  }, __jsx(_Loader__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 86
    }
  })) : __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, filtro !== '' ? __jsx("span", {
    id: "label__filtro-busqueda",
    className: "jsx-2778668712" + " " + (_Productos_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.label__filtro_busqueda || ""),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 21
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_11__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__["faSearch"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 25
    }
  }), __jsx("span", {
    className: "jsx-2778668712" + " " + (_Productos_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.item_filtro_busqueda || ""),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 25
    }
  }, __jsx("span", {
    id: "valor-busqueda",
    className: "jsx-2778668712" + " " + "text-mutedd",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 29
    }
  }, filtro))) : null, __jsx("div", {
    style: {
      padding: '0px 15px'
    },
    className: "jsx-2778668712" + " " + "row justify-content-between my-2 align-items-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 17
    }
  }, __jsx("span", {
    className: "jsx-2778668712" + " " + "text-muted",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 21
    }
  }, __jsx("b", {
    className: "jsx-2778668712" + " " + "txt-yellow",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 50
    }
  }, props.productos.length), " productos encontrados"), __jsx("div", {
    className: "jsx-2778668712" + " " + (_Productos_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.ordenarProductos + ' ' + "d-flex align-items-center" || false),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 21
    }
  }, __jsx("span", {
    className: "jsx-2778668712" + " " + "txt-yellow text-bold mr-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 25
    }
  }, "Ordenar por: "), __jsx("select", {
    onChange: handleChangeOrdenProductos,
    className: "jsx-2778668712" + " " + (_Productos_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.select_ordenar || ""),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 25
    }
  }, __jsx("option", {
    value: "desc",
    className: "jsx-2778668712",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 29
    }
  }, "Mayor precio"), __jsx("option", {
    value: "asc",
    className: "jsx-2778668712",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 29
    }
  }, "Menor precio"))), __jsx("button", {
    onClick: showFiltrosMobile,
    className: "jsx-2778668712" + " " + ("boton bg-yellow mt-3 d-none" + ' ' + _Productos_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.boton_filtrar_mobile || false),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 21
    }
  }, "Filtrar")), __jsx("div", {
    onScroll: handleScrollFeedProductos,
    className: "jsx-2778668712" + " " + "row feedProductos",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 17
    }
  }, !props.productos ? null : props.productos.map(function (prd) {
    return __jsx("div", {
      key: prd.idProducto,
      className: "jsx-2778668712" + " " + "col-6 col-md-3",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 137,
        columnNumber: 29
      }
    }, __jsx(_CardProducto__WEBPACK_IMPORTED_MODULE_5__["default"], {
      imagen: prd.foto,
      prd: prd,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 138,
        columnNumber: 33
      }
    }));
  })), props.productos && props.productos.length >= 20 ? __jsx("button", {
    onClick: cargarMas,
    className: "jsx-2778668712" + " " + "boton bg-yellow btn-vermas d-none",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 17
    }
  }, props.loading_mas ? 'Obteniendo productos...' : 'Cargar más') : null), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {
    id: "2778668712",
    __self: _this
  }, ".feedProductos.jsx-2778668712{height:75vh;overflow-y:scroll;}.btn-vermas.jsx-2778668712{position:relative;top:12px;}.feedProductos.jsx-2778668712::-webkit-scrollbar{width:8px;height:5px;}.feedProductos.jsx-2778668712::-webkit-scrollbar-thumb{background:#FFB347;border-radius:4px;}.feedProductos.jsx-2778668712::-webkit-scrollbar-thumb.jsx-2778668712:hover{background:#b3b3b3;box-shadow:0 0 2px 1px rgba(0,0,0,0.2);}@media(max-width:768px){.feedProductos.jsx-2778668712{height:65vh;overflow-y:scroll;}.feedProductos.jsx-2778668712::-webkit-scrollbar{width:8px;height:10px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcZnJhbmNcXERvY3VtZW50c1xcb2xpdmVyLTJcXHNpdGlvLWRlc2FcXHNyY1xcY29tcG9uZW50c1xcUHJvZHVjdG9zXFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtSndCLEFBR2dDLEFBSU0sQUFJUCxBQUtTLEFBSUEsQUFLSixBQUlELFVBaEJuQixBQWtCSSxFQTNCa0IsQUFzQkksTUFqQjFCLENBUXVCLEFBSXdCLEVBUjlDLENBa0JJLEtBdEJKLEdBSkEsQUFzQkksT0FUSixxQkFJQSIsImZpbGUiOiJDOlxcVXNlcnNcXGZyYW5jXFxEb2N1bWVudHNcXG9saXZlci0yXFxzaXRpby1kZXNhXFxzcmNcXGNvbXBvbmVudHNcXFByb2R1Y3Rvc1xcaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IENhcmRQcm9kdWN0byBmcm9tICcuLi9DYXJkUHJvZHVjdG8nO1xyXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0ICogYXMgcHJvZHVjdG9zQWN0aW9ucyBmcm9tICcuLi8uLi8uLi9zdG9yZS9hY3Rpb25zL3Byb2R1Y3Rvc0FjdGlvbnMnO1xyXG5pbXBvcnQgUHJvZHVjdG9zU3R5bGUgZnJvbSAnLi9Qcm9kdWN0b3MubW9kdWxlLmNzcyc7XHJcbmltcG9ydCBMb2FkZXIgZnJvbSAnLi4vTG9hZGVyJztcclxuaW1wb3J0IHsgZmFTZWFyY2ggfSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCI7XHJcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIjtcclxuaW1wb3J0IEZpbHRyb1N0eWxlIGZyb20gJy4uL0ZpbHRyby9GaWx0cm8ubW9kdWxlLmNzcyc7XHJcbmltcG9ydCB7IGlzTW9iaWxlIH0gZnJvbSAnLi4vLi4vLi4vaGVscGVycyc7XHJcbi8vaW1wb3J0IE5hdmJhclN0eWxlIGZyb20gJy4uL05hdmJhci9OYXZiYXIubW9kdWxlLmNzcyc7XHJcblxyXG5jb25zdCBQcm9kdWN0b3MgPSAocHJvcHMpID0+IHtcclxuXHJcbiAgICBjb25zdCBbZmlsdHJvLCBzZXRGaWx0cm9dID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW3JhbmdvUHJvZHVjdG8sIHNldFJhbmdvUHJvZHVjdG9dID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIGRlc2RlOjEsXHJcbiAgICAgICAgbGltaXRlRGVza3RvcDoyMCxcclxuICAgICAgICBsaW1pdGVNb2JpbGU6MTBcclxuICAgIH0pO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYocHJvcHMubG9jYXRpb24gIT09ICcvcHJvZHVjdG9zJyl7XHJcbiAgICAgICAgICAgIGlmKHByb3BzLnF1ZXJ5LnNlYXJjaCl7XHJcbiAgICAgICAgICAgICAgICBtb3N0cmFyU29sYXBhRmlsdHJvKHByb3BzLnF1ZXJ5LnNlYXJjaCk7XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgbW9zdHJhclNvbGFwYUZpbHRybyhwcm9wcy5xdWVyeS5pbmRleFswXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgZ2V0UHJvZHVjdG9zKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYocmFuZ29Qcm9kdWN0by5kZXNkZT4xKXtcclxuICAgICAgICAgICAgcHJvcHMudHJhZXJNYXMocmFuZ29Qcm9kdWN0byxwcm9wcy5wcm9kdWN0b3MpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtyYW5nb1Byb2R1Y3RvXSlcclxuXHJcbiAgICBjb25zdCBzaG93RmlsdHJvc01vYmlsZSA9ICgpPT57XHJcbiAgICAgICAgaWYoZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShOYXZiYXJTdHlsZS5tZW51X19jb2xsYXBzZWQpWzBdLmNsYXNzTGlzdC5jb250YWlucyhOYXZiYXJTdHlsZS5zaG93Q29sbGFwc2VkKSl7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdlc3RhIGFiaWVydG8nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnRmlsdHJvX2ZpbHRyb3NfX2NvbnRhbmllcl9fM2tuWGYnKVswXS5jbGFzc0xpc3QuYWRkKEZpbHRyb1N0eWxlLnNob3dfZmlsdHJvcyk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZ2V0UHJvZHVjdG9zID0gYXN5bmMgKCk9PntcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBhd2FpdCBwcm9wcy50cmFlclRvZG9zKHJhbmdvUHJvZHVjdG8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGNvbnN0IG1vc3RyYXJTb2xhcGFGaWx0cm8gPSBmaWx0cm89PntcclxuICAgICAgICBzZXRGaWx0cm8oZmlsdHJvKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVDaGFuZ2VPcmRlblByb2R1Y3RvcyA9IGV2ZW50PT57XHJcbiAgICAgICAgaWYoZXZlbnQudGFyZ2V0LnZhbHVlID09PSAnYXNjJyl7XHJcbiAgICAgICAgICAgIHByb3BzLnByb2R1Y3Rvcy5zb3J0KChhLGIpPT57XHJcbiAgICAgICAgICAgICAgICBpZihhLnByZWNpb1VuaWRhZCA+IGIucHJlY2lvVW5pZGFkKSByZXR1cm4gMTtcclxuICAgICAgICAgICAgICAgIGlmKGEucHJlY2lvVW5pZGFkIDwgYi5wcmVjaW9VbmlkYWQpIHJldHVybiAtMTtcclxuICAgICAgICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBwcm9wcy5wcm9kdWN0b3Muc29ydCgoYSxiKT0+e1xyXG4gICAgICAgICAgICAgICAgaWYoYS5wcmVjaW9VbmlkYWQgPCBiLnByZWNpb1VuaWRhZCkgcmV0dXJuIDE7XHJcbiAgICAgICAgICAgICAgICBpZihhLnByZWNpb1VuaWRhZCA+IGIucHJlY2lvVW5pZGFkKSByZXR1cm4gLTE7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gMDtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiBwcm9wcy5vcmRlbmFyUHJvZHVjdG9zKHByb3BzLnByb2R1Y3Rvcyk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vb2N1bHRhciBsYSBjaGFwaXRhIHF1ZSBpbmRpY2EgZWwgbm9tYnJlIGRlbCBmaWx0cm8gYWN0aXZvIGN1YW5kbyBzZSByZXN0YWJsZWNlbiBsb3MgZmlsdHJvcy5cclxuICAgIGlmKHByb3BzLmxvY2F0aW9uPT0nL3Byb2R1Y3RvcycgJiYgZmlsdHJvIT0nJyl7XHJcbiAgICAgICAgc2V0RmlsdHJvKCcnKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjYXJnYXJNYXMgPSAoKT0+e1xyXG4gICAgICAgIGlmKGlzTW9iaWxlKCkpe1xyXG4gICAgICAgICAgICBzZXRSYW5nb1Byb2R1Y3RvKHtcclxuICAgICAgICAgICAgICAgIC4uLnJhbmdvUHJvZHVjdG8sXHJcbiAgICAgICAgICAgICAgICBkZXNkZTogcmFuZ29Qcm9kdWN0by5kZXNkZSArIHJhbmdvUHJvZHVjdG8ubGltaXRlTW9iaWxlIC0gMSxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgc2V0UmFuZ29Qcm9kdWN0byh7XHJcbiAgICAgICAgICAgICAgICAuLi5yYW5nb1Byb2R1Y3RvLFxyXG4gICAgICAgICAgICAgICAgZGVzZGU6IHJhbmdvUHJvZHVjdG8uZGVzZGUgKyByYW5nb1Byb2R1Y3RvLmxpbWl0ZURlc2t0b3AgLSAxXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZVNjcm9sbEZlZWRQcm9kdWN0b3MgPSBldmVudD0+e1xyXG4gICAgICAgIGxldCBmZWVkUHJvZHVjdG9zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZlZWRQcm9kdWN0b3MnKTtcclxuICAgICAgICBsZXQgYm90b25DYXJnYXJNYXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuLXZlcm1hcycpO1xyXG4gICAgICAgIGxldCBhbHR1cmFUb3RhbEZlZWQgPSBmZWVkUHJvZHVjdG9zLnNjcm9sbEhlaWdodDtcclxuICAgICAgICBsZXQgYWx0dXJhQWN0dWFsID0gZmVlZFByb2R1Y3Rvcy5zY3JvbGxUb3A7XHJcbiAgICAgICAgbGV0IHBvcmNlbnRhamVTdWZpY2llbnRlID0gKGFsdHVyYVRvdGFsRmVlZCAqIDgwKSAvIDEwMDtcclxuICAgICAgICBpZihhbHR1cmFUb3RhbEZlZWQgPT0gMjA2MCl7XHJcbiAgICAgICAgICAgIHBvcmNlbnRhamVTdWZpY2llbnRlID0gKGFsdHVyYVRvdGFsRmVlZCAqIDY1KSAvIDEwMDtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmKGFsdHVyYUFjdHVhbD49cG9yY2VudGFqZVN1ZmljaWVudGUpe1xyXG4gICAgICAgICAgICByZXR1cm4gYm90b25DYXJnYXJNYXMuY2xhc3NMaXN0LnJlbW92ZSgnZC1ub25lJyk7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHJldHVybiBib3RvbkNhcmdhck1hcy5jbGFzc0xpc3QuYWRkKCdkLW5vbmUnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICB7KHByb3BzLmxvYWRpbmcgfHwgIXByb3BzLnByb2R1Y3Rvcyk/PGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgdGV4dC1jZW50ZXJcIj48TG9hZGVyLz48L2Rpdj46XHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICB7KGZpbHRybyE9PScnKT9cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBpZD1cImxhYmVsX19maWx0cm8tYnVzcXVlZGFcIiBjbGFzc05hbWU9e1Byb2R1Y3Rvc1N0eWxlLmxhYmVsX19maWx0cm9fYnVzcXVlZGF9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhU2VhcmNofS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17UHJvZHVjdG9zU3R5bGUuaXRlbV9maWx0cm9fYnVzcXVlZGF9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1tdXRlZGRcIiBpZD1cInZhbG9yLWJ1c3F1ZWRhXCI+e2ZpbHRyb308L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA6bnVsbH1cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIG15LTIgYWxpZ24taXRlbXMtY2VudGVyXCIgc3R5bGU9e3twYWRkaW5nOicwcHggMTVweCd9fT5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkXCI+PGIgY2xhc3NOYW1lPVwidHh0LXllbGxvd1wiPntwcm9wcy5wcm9kdWN0b3MubGVuZ3RofTwvYj4gcHJvZHVjdG9zIGVuY29udHJhZG9zPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtQcm9kdWN0b3NTdHlsZS5vcmRlbmFyUHJvZHVjdG9zICsgJyAnICsgYGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidHh0LXllbGxvdyB0ZXh0LWJvbGQgbXItMlwiPk9yZGVuYXIgcG9yOiA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3NOYW1lPXtQcm9kdWN0b3NTdHlsZS5zZWxlY3Rfb3JkZW5hcn0gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZU9yZGVuUHJvZHVjdG9zfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJkZXNjXCI+TWF5b3IgcHJlY2lvPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiYXNjXCI+TWVub3IgcHJlY2lvPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17c2hvd0ZpbHRyb3NNb2JpbGV9IGNsYXNzTmFtZT17YGJvdG9uIGJnLXllbGxvdyBtdC0zIGQtbm9uZWAgKyAnICcgKyBQcm9kdWN0b3NTdHlsZS5ib3Rvbl9maWx0cmFyX21vYmlsZX0+RmlsdHJhcjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBmZWVkUHJvZHVjdG9zXCIgb25TY3JvbGw9e2hhbmRsZVNjcm9sbEZlZWRQcm9kdWN0b3N9PlxyXG4gICAgICAgICAgICAgICAgICAgIHshcHJvcHMucHJvZHVjdG9zID8gbnVsbCA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzLnByb2R1Y3Rvcy5tYXAocHJkPT4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17cHJkLmlkUHJvZHVjdG99IGNsYXNzTmFtZT1cImNvbC02IGNvbC1tZC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmRQcm9kdWN0byBpbWFnZW49e3ByZC5mb3RvfSBwcmQ9e3ByZH0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICB7KHByb3BzLnByb2R1Y3RvcyAmJiBwcm9wcy5wcm9kdWN0b3MubGVuZ3RoPj0yMCk/XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJvdG9uIGJnLXllbGxvdyBidG4tdmVybWFzIGQtbm9uZVwiIG9uQ2xpY2s9e2Nhcmdhck1hc30+eyhwcm9wcy5sb2FkaW5nX21hcyk/J09idGVuaWVuZG8gcHJvZHVjdG9zLi4uJzonQ2FyZ2FyIG3DoXMnfTwvYnV0dG9uPjpudWxsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgICAgIC5mZWVkUHJvZHVjdG9ze1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDo3NXZoO1xyXG4gICAgICAgICAgICAgICAgICAgIG92ZXJmbG93LXk6c2Nyb2xsO1xyXG4gICAgICAgICAgICAgICAgfSAgICBcclxuICAgICAgICAgICAgICAgIC5idG4tdmVybWFze1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDoxMnB4XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuZmVlZFByb2R1Y3Rvczo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA4cHg7ICAgICAvKiBUYW1hw7FvIGRlbCBzY3JvbGwgZW4gdmVydGljYWwgKi9cclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6NXB4XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmZlZWRQcm9kdWN0b3M6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjRkZCMzQ3O1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5mZWVkUHJvZHVjdG9zOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2IzYjNiMztcclxuICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDAgMnB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBAbWVkaWEobWF4LXdpZHRoOjc2OHB4KXtcclxuICAgICAgICAgICAgICAgICAgICAuZmVlZFByb2R1Y3Rvc3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OjY1dmg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93LXk6c2Nyb2xsO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gXHJcbiAgICAgICAgICAgICAgICAgICAgLmZlZWRQcm9kdWN0b3M6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDhweDsgICAgIC8qIFRhbWHDsW8gZGVsIHNjcm9sbCBlbiB2ZXJ0aWNhbCAqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6MTBweFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn1cclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHJlZHVjZXJzPT57XHJcbiAgICByZXR1cm4gcmVkdWNlcnMucHJvZHVjdG9zUmVkdWNlcjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMscHJvZHVjdG9zQWN0aW9ucykoUHJvZHVjdG9zKTsiXX0= */\n/*@ sourceURL=C:\\\\Users\\\\franc\\\\Documents\\\\oliver-2\\\\sitio-desa\\\\src\\\\components\\\\Productos\\\\index.js */"));
};

_s(Productos, "Z+Rza7D03Y+CqbJl6ley7+I/dLk=");

_c = Productos;

var mapStateToProps = function mapStateToProps(reducers) {
  return reducers.productosReducer;
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["connect"])(mapStateToProps, _store_actions_productosActions__WEBPACK_IMPORTED_MODULE_7__)(Productos));

var _c;

$RefreshReg$(_c, "Productos");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUHJvZHVjdG9zL2luZGV4LmpzIl0sIm5hbWVzIjpbIlByb2R1Y3RvcyIsInByb3BzIiwidXNlU3RhdGUiLCJmaWx0cm8iLCJzZXRGaWx0cm8iLCJkZXNkZSIsImxpbWl0ZURlc2t0b3AiLCJsaW1pdGVNb2JpbGUiLCJyYW5nb1Byb2R1Y3RvIiwic2V0UmFuZ29Qcm9kdWN0byIsInVzZUVmZmVjdCIsImxvY2F0aW9uIiwicXVlcnkiLCJzZWFyY2giLCJtb3N0cmFyU29sYXBhRmlsdHJvIiwiaW5kZXgiLCJnZXRQcm9kdWN0b3MiLCJ0cmFlck1hcyIsInByb2R1Y3RvcyIsInNob3dGaWx0cm9zTW9iaWxlIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiTmF2YmFyU3R5bGUiLCJtZW51X19jb2xsYXBzZWQiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsInNob3dDb2xsYXBzZWQiLCJjb25zb2xlIiwibG9nIiwiYWRkIiwiRmlsdHJvU3R5bGUiLCJzaG93X2ZpbHRyb3MiLCJ0cmFlclRvZG9zIiwiaGFuZGxlQ2hhbmdlT3JkZW5Qcm9kdWN0b3MiLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwic29ydCIsImEiLCJiIiwicHJlY2lvVW5pZGFkIiwib3JkZW5hclByb2R1Y3RvcyIsImNhcmdhck1hcyIsImlzTW9iaWxlIiwiaGFuZGxlU2Nyb2xsRmVlZFByb2R1Y3RvcyIsImZlZWRQcm9kdWN0b3MiLCJxdWVyeVNlbGVjdG9yIiwiYm90b25DYXJnYXJNYXMiLCJhbHR1cmFUb3RhbEZlZWQiLCJzY3JvbGxIZWlnaHQiLCJhbHR1cmFBY3R1YWwiLCJzY3JvbGxUb3AiLCJwb3JjZW50YWplU3VmaWNpZW50ZSIsInJlbW92ZSIsImxvYWRpbmciLCJQcm9kdWN0b3NTdHlsZSIsImxhYmVsX19maWx0cm9fYnVzcXVlZGEiLCJmYVNlYXJjaCIsIml0ZW1fZmlsdHJvX2J1c3F1ZWRhIiwicGFkZGluZyIsImxlbmd0aCIsInNlbGVjdF9vcmRlbmFyIiwiYm90b25fZmlsdHJhcl9tb2JpbGUiLCJtYXAiLCJwcmQiLCJpZFByb2R1Y3RvIiwiZm90byIsImxvYWRpbmdfbWFzIiwibWFwU3RhdGVUb1Byb3BzIiwicmVkdWNlcnMiLCJwcm9kdWN0b3NSZWR1Y2VyIiwiY29ubmVjdCIsInByb2R1Y3Rvc0FjdGlvbnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtDQUVBOztBQUVBLElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNDLEtBQUQsRUFBVztBQUFBOztBQUFBLGtCQUVHQyxzREFBUSxDQUFDLEVBQUQsQ0FGWDtBQUFBLE1BRWxCQyxNQUZrQjtBQUFBLE1BRVZDLFNBRlU7O0FBQUEsbUJBR2lCRixzREFBUSxDQUFDO0FBQy9DRyxTQUFLLEVBQUMsQ0FEeUM7QUFFL0NDLGlCQUFhLEVBQUMsRUFGaUM7QUFHL0NDLGdCQUFZLEVBQUM7QUFIa0MsR0FBRCxDQUh6QjtBQUFBLE1BR2xCQyxhQUhrQjtBQUFBLE1BR0hDLGdCQUhHOztBQVN6QkMseURBQVMsQ0FBQyxZQUFNO0FBQ1osUUFBR1QsS0FBSyxDQUFDVSxRQUFOLEtBQW1CLFlBQXRCLEVBQW1DO0FBQy9CLFVBQUdWLEtBQUssQ0FBQ1csS0FBTixDQUFZQyxNQUFmLEVBQXNCO0FBQ2xCQywyQkFBbUIsQ0FBQ2IsS0FBSyxDQUFDVyxLQUFOLENBQVlDLE1BQWIsQ0FBbkI7QUFDSCxPQUZELE1BRUs7QUFDREMsMkJBQW1CLENBQUNiLEtBQUssQ0FBQ1csS0FBTixDQUFZRyxLQUFaLENBQWtCLENBQWxCLENBQUQsQ0FBbkI7QUFDSDtBQUNKLEtBTkQsTUFNSztBQUNEQyxrQkFBWTtBQUNmO0FBQ0osR0FWUSxFQVVOLEVBVk0sQ0FBVDtBQVlBTix5REFBUyxDQUFDLFlBQU07QUFDWixRQUFHRixh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QUE7QUFBQSwrbVhBREo7QUF5RUgsQ0EzS0Q7O0dBQU1uRSxTOztLQUFBQSxTOztBQTZLTixJQUFNb0UsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFBQyxRQUFRLEVBQUU7QUFDOUIsU0FBT0EsUUFBUSxDQUFDQyxnQkFBaEI7QUFDSCxDQUZEOztBQUllQywwSEFBTyxDQUFDSCxlQUFELEVBQWlCSSw0REFBakIsQ0FBUCxDQUEwQ3hFLFNBQTFDLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvZHVjdG9zL1tbLi4uaW5kZXhdXS43YTQ4ZjA2MDNmOWVjYTMxZThiNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBDYXJkUHJvZHVjdG8gZnJvbSAnLi4vQ2FyZFByb2R1Y3RvJztcclxuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCAqIGFzIHByb2R1Y3Rvc0FjdGlvbnMgZnJvbSAnLi4vLi4vLi4vc3RvcmUvYWN0aW9ucy9wcm9kdWN0b3NBY3Rpb25zJztcclxuaW1wb3J0IFByb2R1Y3Rvc1N0eWxlIGZyb20gJy4vUHJvZHVjdG9zLm1vZHVsZS5jc3MnO1xyXG5pbXBvcnQgTG9hZGVyIGZyb20gJy4uL0xvYWRlcic7XHJcbmltcG9ydCB7IGZhU2VhcmNoIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29uc1wiO1xyXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tIFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCI7XHJcbmltcG9ydCBGaWx0cm9TdHlsZSBmcm9tICcuLi9GaWx0cm8vRmlsdHJvLm1vZHVsZS5jc3MnO1xyXG5pbXBvcnQgeyBpc01vYmlsZSB9IGZyb20gJy4uLy4uLy4uL2hlbHBlcnMnO1xyXG4vL2ltcG9ydCBOYXZiYXJTdHlsZSBmcm9tICcuLi9OYXZiYXIvTmF2YmFyLm1vZHVsZS5jc3MnO1xyXG5cclxuY29uc3QgUHJvZHVjdG9zID0gKHByb3BzKSA9PiB7XHJcblxyXG4gICAgY29uc3QgW2ZpbHRybywgc2V0RmlsdHJvXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtyYW5nb1Byb2R1Y3RvLCBzZXRSYW5nb1Byb2R1Y3RvXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICBkZXNkZToxLFxyXG4gICAgICAgIGxpbWl0ZURlc2t0b3A6MjAsXHJcbiAgICAgICAgbGltaXRlTW9iaWxlOjEwXHJcbiAgICB9KTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmKHByb3BzLmxvY2F0aW9uICE9PSAnL3Byb2R1Y3Rvcycpe1xyXG4gICAgICAgICAgICBpZihwcm9wcy5xdWVyeS5zZWFyY2gpe1xyXG4gICAgICAgICAgICAgICAgbW9zdHJhclNvbGFwYUZpbHRybyhwcm9wcy5xdWVyeS5zZWFyY2gpO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIG1vc3RyYXJTb2xhcGFGaWx0cm8ocHJvcHMucXVlcnkuaW5kZXhbMF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGdldFByb2R1Y3RvcygpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmKHJhbmdvUHJvZHVjdG8uZGVzZGU+MSl7XHJcbiAgICAgICAgICAgIHByb3BzLnRyYWVyTWFzKHJhbmdvUHJvZHVjdG8scHJvcHMucHJvZHVjdG9zKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbcmFuZ29Qcm9kdWN0b10pXHJcblxyXG4gICAgY29uc3Qgc2hvd0ZpbHRyb3NNb2JpbGUgPSAoKT0+e1xyXG4gICAgICAgIGlmKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoTmF2YmFyU3R5bGUubWVudV9fY29sbGFwc2VkKVswXS5jbGFzc0xpc3QuY29udGFpbnMoTmF2YmFyU3R5bGUuc2hvd0NvbGxhcHNlZCkpe1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZXN0YSBhYmllcnRvJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ0ZpbHRyb19maWx0cm9zX19jb250YW5pZXJfXzNrblhmJylbMF0uY2xhc3NMaXN0LmFkZChGaWx0cm9TdHlsZS5zaG93X2ZpbHRyb3MpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGdldFByb2R1Y3RvcyA9IGFzeW5jICgpPT57XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgYXdhaXQgcHJvcHMudHJhZXJUb2RvcyhyYW5nb1Byb2R1Y3RvKTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBjb25zdCBtb3N0cmFyU29sYXBhRmlsdHJvID0gZmlsdHJvPT57XHJcbiAgICAgICAgc2V0RmlsdHJvKGZpbHRybyk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlT3JkZW5Qcm9kdWN0b3MgPSBldmVudD0+e1xyXG4gICAgICAgIGlmKGV2ZW50LnRhcmdldC52YWx1ZSA9PT0gJ2FzYycpe1xyXG4gICAgICAgICAgICBwcm9wcy5wcm9kdWN0b3Muc29ydCgoYSxiKT0+e1xyXG4gICAgICAgICAgICAgICAgaWYoYS5wcmVjaW9VbmlkYWQgPiBiLnByZWNpb1VuaWRhZCkgcmV0dXJuIDE7XHJcbiAgICAgICAgICAgICAgICBpZihhLnByZWNpb1VuaWRhZCA8IGIucHJlY2lvVW5pZGFkKSByZXR1cm4gLTE7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gMDtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgcHJvcHMucHJvZHVjdG9zLnNvcnQoKGEsYik9PntcclxuICAgICAgICAgICAgICAgIGlmKGEucHJlY2lvVW5pZGFkIDwgYi5wcmVjaW9VbmlkYWQpIHJldHVybiAxO1xyXG4gICAgICAgICAgICAgICAgaWYoYS5wcmVjaW9VbmlkYWQgPiBiLnByZWNpb1VuaWRhZCkgcmV0dXJuIC0xO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gcHJvcHMub3JkZW5hclByb2R1Y3Rvcyhwcm9wcy5wcm9kdWN0b3MpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvL29jdWx0YXIgbGEgY2hhcGl0YSBxdWUgaW5kaWNhIGVsIG5vbWJyZSBkZWwgZmlsdHJvIGFjdGl2byBjdWFuZG8gc2UgcmVzdGFibGVjZW4gbG9zIGZpbHRyb3MuXHJcbiAgICBpZihwcm9wcy5sb2NhdGlvbj09Jy9wcm9kdWN0b3MnICYmIGZpbHRybyE9Jycpe1xyXG4gICAgICAgIHNldEZpbHRybygnJyk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY2FyZ2FyTWFzID0gKCk9PntcclxuICAgICAgICBpZihpc01vYmlsZSgpKXtcclxuICAgICAgICAgICAgc2V0UmFuZ29Qcm9kdWN0byh7XHJcbiAgICAgICAgICAgICAgICAuLi5yYW5nb1Byb2R1Y3RvLFxyXG4gICAgICAgICAgICAgICAgZGVzZGU6IHJhbmdvUHJvZHVjdG8uZGVzZGUgKyByYW5nb1Byb2R1Y3RvLmxpbWl0ZU1vYmlsZSAtIDEsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHNldFJhbmdvUHJvZHVjdG8oe1xyXG4gICAgICAgICAgICAgICAgLi4ucmFuZ29Qcm9kdWN0byxcclxuICAgICAgICAgICAgICAgIGRlc2RlOiByYW5nb1Byb2R1Y3RvLmRlc2RlICsgcmFuZ29Qcm9kdWN0by5saW1pdGVEZXNrdG9wIC0gMVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVTY3JvbGxGZWVkUHJvZHVjdG9zID0gZXZlbnQ9PntcclxuICAgICAgICBsZXQgZmVlZFByb2R1Y3RvcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mZWVkUHJvZHVjdG9zJyk7XHJcbiAgICAgICAgbGV0IGJvdG9uQ2FyZ2FyTWFzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bi12ZXJtYXMnKTtcclxuICAgICAgICBsZXQgYWx0dXJhVG90YWxGZWVkID0gZmVlZFByb2R1Y3Rvcy5zY3JvbGxIZWlnaHQ7XHJcbiAgICAgICAgbGV0IGFsdHVyYUFjdHVhbCA9IGZlZWRQcm9kdWN0b3Muc2Nyb2xsVG9wO1xyXG4gICAgICAgIGxldCBwb3JjZW50YWplU3VmaWNpZW50ZSA9IChhbHR1cmFUb3RhbEZlZWQgKiA4MCkgLyAxMDA7XHJcbiAgICAgICAgaWYoYWx0dXJhVG90YWxGZWVkID09IDIwNjApe1xyXG4gICAgICAgICAgICBwb3JjZW50YWplU3VmaWNpZW50ZSA9IChhbHR1cmFUb3RhbEZlZWQgKiA2NSkgLyAxMDA7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBpZihhbHR1cmFBY3R1YWw+PXBvcmNlbnRhamVTdWZpY2llbnRlKXtcclxuICAgICAgICAgICAgcmV0dXJuIGJvdG9uQ2FyZ2FyTWFzLmNsYXNzTGlzdC5yZW1vdmUoJ2Qtbm9uZScpO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICByZXR1cm4gYm90b25DYXJnYXJNYXMuY2xhc3NMaXN0LmFkZCgnZC1ub25lJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgeyhwcm9wcy5sb2FkaW5nIHx8ICFwcm9wcy5wcm9kdWN0b3MpPzxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIHRleHQtY2VudGVyXCI+PExvYWRlci8+PC9kaXY+OlxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgeyhmaWx0cm8hPT0nJyk/XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gaWQ9XCJsYWJlbF9fZmlsdHJvLWJ1c3F1ZWRhXCIgY2xhc3NOYW1lPXtQcm9kdWN0b3NTdHlsZS5sYWJlbF9fZmlsdHJvX2J1c3F1ZWRhfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVNlYXJjaH0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e1Byb2R1Y3Rvc1N0eWxlLml0ZW1fZmlsdHJvX2J1c3F1ZWRhfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtbXV0ZWRkXCIgaWQ9XCJ2YWxvci1idXNxdWVkYVwiPntmaWx0cm99PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgOm51bGx9XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBteS0yIGFsaWduLWl0ZW1zLWNlbnRlclwiIHN0eWxlPXt7cGFkZGluZzonMHB4IDE1cHgnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1tdXRlZFwiPjxiIGNsYXNzTmFtZT1cInR4dC15ZWxsb3dcIj57cHJvcHMucHJvZHVjdG9zLmxlbmd0aH08L2I+IHByb2R1Y3RvcyBlbmNvbnRyYWRvczwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17UHJvZHVjdG9zU3R5bGUub3JkZW5hclByb2R1Y3RvcyArICcgJyArIGBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyYH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInR4dC15ZWxsb3cgdGV4dC1ib2xkIG1yLTJcIj5PcmRlbmFyIHBvcjogPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzTmFtZT17UHJvZHVjdG9zU3R5bGUuc2VsZWN0X29yZGVuYXJ9IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2VPcmRlblByb2R1Y3Rvc30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiZGVzY1wiPk1heW9yIHByZWNpbzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImFzY1wiPk1lbm9yIHByZWNpbzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3Nob3dGaWx0cm9zTW9iaWxlfSBjbGFzc05hbWU9e2Bib3RvbiBiZy15ZWxsb3cgbXQtMyBkLW5vbmVgICsgJyAnICsgUHJvZHVjdG9zU3R5bGUuYm90b25fZmlsdHJhcl9tb2JpbGV9PkZpbHRyYXI8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgZmVlZFByb2R1Y3Rvc1wiIG9uU2Nyb2xsPXtoYW5kbGVTY3JvbGxGZWVkUHJvZHVjdG9zfT5cclxuICAgICAgICAgICAgICAgICAgICB7IXByb3BzLnByb2R1Y3RvcyA/IG51bGwgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9wcy5wcm9kdWN0b3MubWFwKHByZD0+KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e3ByZC5pZFByb2R1Y3RvfSBjbGFzc05hbWU9XCJjb2wtNiBjb2wtbWQtM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkUHJvZHVjdG8gaW1hZ2VuPXtwcmQuZm90b30gcHJkPXtwcmR9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgeyhwcm9wcy5wcm9kdWN0b3MgJiYgcHJvcHMucHJvZHVjdG9zLmxlbmd0aD49MjApP1xyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJib3RvbiBiZy15ZWxsb3cgYnRuLXZlcm1hcyBkLW5vbmVcIiBvbkNsaWNrPXtjYXJnYXJNYXN9PnsocHJvcHMubG9hZGluZ19tYXMpPydPYnRlbmllbmRvIHByb2R1Y3Rvcy4uLic6J0NhcmdhciBtw6FzJ308L2J1dHRvbj46bnVsbFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICAgICAuZmVlZFByb2R1Y3Rvc3tcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6NzV2aDtcclxuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdy15OnNjcm9sbDtcclxuICAgICAgICAgICAgICAgIH0gICAgXHJcbiAgICAgICAgICAgICAgICAuYnRuLXZlcm1hc3tcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICB0b3A6MTJweFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmZlZWRQcm9kdWN0b3M6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogOHB4OyAgICAgLyogVGFtYcOxbyBkZWwgc2Nyb2xsIGVuIHZlcnRpY2FsICovXHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OjVweFxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5mZWVkUHJvZHVjdG9zOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI0ZGQjM0NztcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuZmVlZFByb2R1Y3Rvczo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNiM2IzYjM7XHJcbiAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCAwIDJweCAxcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgQG1lZGlhKG1heC13aWR0aDo3NjhweCl7XHJcbiAgICAgICAgICAgICAgICAgICAgLmZlZWRQcm9kdWN0b3N7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDo2NXZoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdy15OnNjcm9sbDtcclxuICAgICAgICAgICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICAgICAgICAgIC5mZWVkUHJvZHVjdG9zOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA4cHg7ICAgICAvKiBUYW1hw7FvIGRlbCBzY3JvbGwgZW4gdmVydGljYWwgKi9cclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OjEwcHhcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSByZWR1Y2Vycz0+e1xyXG4gICAgcmV0dXJuIHJlZHVjZXJzLnByb2R1Y3Rvc1JlZHVjZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLHByb2R1Y3Rvc0FjdGlvbnMpKFByb2R1Y3Rvcyk7Il0sInNvdXJjZVJvb3QiOiIifQ==