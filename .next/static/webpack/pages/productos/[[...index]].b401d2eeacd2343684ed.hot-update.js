webpackHotUpdate_N_E("pages/productos/[[...index]]",{

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
/* harmony import */ var _Navbar_Navbar_module_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../Navbar/Navbar.module.css */ "./src/components/Navbar/Navbar.module.css");
/* harmony import */ var _Navbar_Navbar_module_css__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_Navbar_Navbar_module_css__WEBPACK_IMPORTED_MODULE_14__);




var _this = undefined,
    _jsxFileName = "C:\\Users\\franc\\Documents\\oliver-2\\sitio-desa\\src\\components\\Productos\\index.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }













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
    if (document.getElementsByClassName(_Navbar_Navbar_module_css__WEBPACK_IMPORTED_MODULE_14___default.a.menu__collapsed)[0].classList.contains(_Navbar_Navbar_module_css__WEBPACK_IMPORTED_MODULE_14___default.a.showCollapsed)) {
      document.getElementsByClassName(_Navbar_Navbar_module_css__WEBPACK_IMPORTED_MODULE_14___default.a.menu__collapsed)[0].classList.remove(_Navbar_Navbar_module_css__WEBPACK_IMPORTED_MODULE_14___default.a.showCollapsed);
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

  renderBotonCargarMas = function renderBotonCargarMas() {
    var minimoPosteos = 20;

    if (Object(_helpers__WEBPACK_IMPORTED_MODULE_13__["isMobile"])()) {
      minimoPosteos = 10;
    }

    if (props.productos && props.productos.length >= minimoPosteos) {
      return __jsx("button", {
        className: "boton bg-yellow btn-vermas d-none",
        onClick: cargarMas,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118,
          columnNumber: 20
        }
      }, props.loading_mas ? 'Obteniendo productos...' : 'Cargar más');
    }
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, props.loading || !props.productos ? __jsx("div", {
    className: "jsx-2778668712" + " " + "col-12 text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 50
    }
  }, __jsx(_Loader__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 86
    }
  })) : __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, filtro !== '' ? __jsx("span", {
    id: "label__filtro-busqueda",
    className: "jsx-2778668712" + " " + (_Productos_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.label__filtro_busqueda || ""),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 21
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_11__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__["faSearch"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 25
    }
  }), __jsx("span", {
    className: "jsx-2778668712" + " " + (_Productos_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.item_filtro_busqueda || ""),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 25
    }
  }, __jsx("span", {
    id: "valor-busqueda",
    className: "jsx-2778668712" + " " + "text-mutedd",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
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
      lineNumber: 135,
      columnNumber: 17
    }
  }, __jsx("span", {
    className: "jsx-2778668712" + " " + "text-muted",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 21
    }
  }, __jsx("b", {
    className: "jsx-2778668712" + " " + "txt-yellow",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 50
    }
  }, props.productos.length), " productos encontrados"), __jsx("div", {
    className: "jsx-2778668712" + " " + (_Productos_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.ordenarProductos + ' ' + "d-flex align-items-center" || false),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 21
    }
  }, __jsx("span", {
    className: "jsx-2778668712" + " " + "txt-yellow text-bold mr-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 25
    }
  }, "Ordenar por: "), __jsx("select", {
    onChange: handleChangeOrdenProductos,
    className: "jsx-2778668712" + " " + (_Productos_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.select_ordenar || ""),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 25
    }
  }, __jsx("option", {
    value: "desc",
    className: "jsx-2778668712",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 29
    }
  }, "Mayor precio"), __jsx("option", {
    value: "asc",
    className: "jsx-2778668712",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 29
    }
  }, "Menor precio"))), __jsx("button", {
    onClick: showFiltrosMobile,
    className: "jsx-2778668712" + " " + ("boton bg-yellow mt-3 d-none" + ' ' + _Productos_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.boton_filtrar_mobile || false),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 21
    }
  }, "Filtrar")), __jsx("div", {
    onScroll: handleScrollFeedProductos,
    className: "jsx-2778668712" + " " + "row feedProductos",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 17
    }
  }, !props.productos ? null : props.productos.map(function (prd) {
    return __jsx("div", {
      key: prd.idProducto,
      className: "jsx-2778668712" + " " + "col-6 col-md-3",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 149,
        columnNumber: 29
      }
    }, __jsx(_CardProducto__WEBPACK_IMPORTED_MODULE_5__["default"], {
      imagen: prd.foto,
      prd: prd,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 150,
        columnNumber: 33
      }
    }));
  })), renderBotonCargarMas()), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {
    id: "2778668712",
    __self: _this
  }, ".feedProductos.jsx-2778668712{height:75vh;overflow-y:scroll;}.btn-vermas.jsx-2778668712{position:relative;top:12px;}.feedProductos.jsx-2778668712::-webkit-scrollbar{width:8px;height:5px;}.feedProductos.jsx-2778668712::-webkit-scrollbar-thumb{background:#FFB347;border-radius:4px;}.feedProductos.jsx-2778668712::-webkit-scrollbar-thumb.jsx-2778668712:hover{background:#b3b3b3;box-shadow:0 0 2px 1px rgba(0,0,0,0.2);}@media(max-width:768px){.feedProductos.jsx-2778668712{height:65vh;overflow-y:scroll;}.feedProductos.jsx-2778668712::-webkit-scrollbar{width:8px;height:10px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcZnJhbmNcXERvY3VtZW50c1xcb2xpdmVyLTJcXHNpdGlvLWRlc2FcXHNyY1xcY29tcG9uZW50c1xcUHJvZHVjdG9zXFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE2SndCLEFBR2dDLEFBSU0sQUFJUCxBQUtTLEFBSUEsQUFLSixBQUlELFVBaEJuQixBQWtCSSxFQTNCa0IsQUFzQkksTUFqQjFCLENBUXVCLEFBSXdCLEVBUjlDLENBa0JJLEtBdEJKLEdBSkEsQUFzQkksT0FUSixxQkFJQSIsImZpbGUiOiJDOlxcVXNlcnNcXGZyYW5jXFxEb2N1bWVudHNcXG9saXZlci0yXFxzaXRpby1kZXNhXFxzcmNcXGNvbXBvbmVudHNcXFByb2R1Y3Rvc1xcaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IENhcmRQcm9kdWN0byBmcm9tICcuLi9DYXJkUHJvZHVjdG8nO1xyXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0ICogYXMgcHJvZHVjdG9zQWN0aW9ucyBmcm9tICcuLi8uLi8uLi9zdG9yZS9hY3Rpb25zL3Byb2R1Y3Rvc0FjdGlvbnMnO1xyXG5pbXBvcnQgUHJvZHVjdG9zU3R5bGUgZnJvbSAnLi9Qcm9kdWN0b3MubW9kdWxlLmNzcyc7XHJcbmltcG9ydCBMb2FkZXIgZnJvbSAnLi4vTG9hZGVyJztcclxuaW1wb3J0IHsgZmFTZWFyY2ggfSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCI7XHJcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIjtcclxuaW1wb3J0IEZpbHRyb1N0eWxlIGZyb20gJy4uL0ZpbHRyby9GaWx0cm8ubW9kdWxlLmNzcyc7XHJcbmltcG9ydCB7IGlzTW9iaWxlIH0gZnJvbSAnLi4vLi4vLi4vaGVscGVycyc7XHJcbmltcG9ydCBOYXZiYXJTdHlsZSBmcm9tICcuLi9OYXZiYXIvTmF2YmFyLm1vZHVsZS5jc3MnO1xyXG5cclxuY29uc3QgUHJvZHVjdG9zID0gKHByb3BzKSA9PiB7XHJcblxyXG4gICAgY29uc3QgW2ZpbHRybywgc2V0RmlsdHJvXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtyYW5nb1Byb2R1Y3RvLCBzZXRSYW5nb1Byb2R1Y3RvXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICBkZXNkZToxLFxyXG4gICAgICAgIGxpbWl0ZURlc2t0b3A6MjAsXHJcbiAgICAgICAgbGltaXRlTW9iaWxlOjEwXHJcbiAgICB9KTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmKHByb3BzLmxvY2F0aW9uICE9PSAnL3Byb2R1Y3Rvcycpe1xyXG4gICAgICAgICAgICBpZihwcm9wcy5xdWVyeS5zZWFyY2gpe1xyXG4gICAgICAgICAgICAgICAgbW9zdHJhclNvbGFwYUZpbHRybyhwcm9wcy5xdWVyeS5zZWFyY2gpO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIG1vc3RyYXJTb2xhcGFGaWx0cm8ocHJvcHMucXVlcnkuaW5kZXhbMF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGdldFByb2R1Y3RvcygpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmKHJhbmdvUHJvZHVjdG8uZGVzZGU+MSl7XHJcbiAgICAgICAgICAgIHByb3BzLnRyYWVyTWFzKHJhbmdvUHJvZHVjdG8scHJvcHMucHJvZHVjdG9zKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbcmFuZ29Qcm9kdWN0b10pXHJcblxyXG4gICAgY29uc3Qgc2hvd0ZpbHRyb3NNb2JpbGUgPSAoKT0+e1xyXG4gICAgICAgIGlmKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoTmF2YmFyU3R5bGUubWVudV9fY29sbGFwc2VkKVswXS5jbGFzc0xpc3QuY29udGFpbnMoTmF2YmFyU3R5bGUuc2hvd0NvbGxhcHNlZCkpe1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKE5hdmJhclN0eWxlLm1lbnVfX2NvbGxhcHNlZClbMF0uY2xhc3NMaXN0LnJlbW92ZShOYXZiYXJTdHlsZS5zaG93Q29sbGFwc2VkKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnRmlsdHJvX2ZpbHRyb3NfX2NvbnRhbmllcl9fM2tuWGYnKVswXS5jbGFzc0xpc3QuYWRkKEZpbHRyb1N0eWxlLnNob3dfZmlsdHJvcyk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZ2V0UHJvZHVjdG9zID0gYXN5bmMgKCk9PntcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBhd2FpdCBwcm9wcy50cmFlclRvZG9zKHJhbmdvUHJvZHVjdG8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGNvbnN0IG1vc3RyYXJTb2xhcGFGaWx0cm8gPSBmaWx0cm89PntcclxuICAgICAgICBzZXRGaWx0cm8oZmlsdHJvKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVDaGFuZ2VPcmRlblByb2R1Y3RvcyA9IGV2ZW50PT57XHJcbiAgICAgICAgaWYoZXZlbnQudGFyZ2V0LnZhbHVlID09PSAnYXNjJyl7XHJcbiAgICAgICAgICAgIHByb3BzLnByb2R1Y3Rvcy5zb3J0KChhLGIpPT57XHJcbiAgICAgICAgICAgICAgICBpZihhLnByZWNpb1VuaWRhZCA+IGIucHJlY2lvVW5pZGFkKSByZXR1cm4gMTtcclxuICAgICAgICAgICAgICAgIGlmKGEucHJlY2lvVW5pZGFkIDwgYi5wcmVjaW9VbmlkYWQpIHJldHVybiAtMTtcclxuICAgICAgICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBwcm9wcy5wcm9kdWN0b3Muc29ydCgoYSxiKT0+e1xyXG4gICAgICAgICAgICAgICAgaWYoYS5wcmVjaW9VbmlkYWQgPCBiLnByZWNpb1VuaWRhZCkgcmV0dXJuIDE7XHJcbiAgICAgICAgICAgICAgICBpZihhLnByZWNpb1VuaWRhZCA+IGIucHJlY2lvVW5pZGFkKSByZXR1cm4gLTE7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gMDtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiBwcm9wcy5vcmRlbmFyUHJvZHVjdG9zKHByb3BzLnByb2R1Y3Rvcyk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vb2N1bHRhciBsYSBjaGFwaXRhIHF1ZSBpbmRpY2EgZWwgbm9tYnJlIGRlbCBmaWx0cm8gYWN0aXZvIGN1YW5kbyBzZSByZXN0YWJsZWNlbiBsb3MgZmlsdHJvcy5cclxuICAgIGlmKHByb3BzLmxvY2F0aW9uPT0nL3Byb2R1Y3RvcycgJiYgZmlsdHJvIT0nJyl7XHJcbiAgICAgICAgc2V0RmlsdHJvKCcnKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjYXJnYXJNYXMgPSAoKT0+e1xyXG4gICAgICAgIGlmKGlzTW9iaWxlKCkpe1xyXG4gICAgICAgICAgICBzZXRSYW5nb1Byb2R1Y3RvKHtcclxuICAgICAgICAgICAgICAgIC4uLnJhbmdvUHJvZHVjdG8sXHJcbiAgICAgICAgICAgICAgICBkZXNkZTogcmFuZ29Qcm9kdWN0by5kZXNkZSArIHJhbmdvUHJvZHVjdG8ubGltaXRlTW9iaWxlIC0gMSxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgc2V0UmFuZ29Qcm9kdWN0byh7XHJcbiAgICAgICAgICAgICAgICAuLi5yYW5nb1Byb2R1Y3RvLFxyXG4gICAgICAgICAgICAgICAgZGVzZGU6IHJhbmdvUHJvZHVjdG8uZGVzZGUgKyByYW5nb1Byb2R1Y3RvLmxpbWl0ZURlc2t0b3AgLSAxXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZVNjcm9sbEZlZWRQcm9kdWN0b3MgPSBldmVudD0+e1xyXG4gICAgICAgIGxldCBmZWVkUHJvZHVjdG9zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZlZWRQcm9kdWN0b3MnKTtcclxuICAgICAgICBsZXQgYm90b25DYXJnYXJNYXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuLXZlcm1hcycpO1xyXG4gICAgICAgIGxldCBhbHR1cmFUb3RhbEZlZWQgPSBmZWVkUHJvZHVjdG9zLnNjcm9sbEhlaWdodDtcclxuICAgICAgICBsZXQgYWx0dXJhQWN0dWFsID0gZmVlZFByb2R1Y3Rvcy5zY3JvbGxUb3A7XHJcbiAgICAgICAgbGV0IHBvcmNlbnRhamVTdWZpY2llbnRlID0gKGFsdHVyYVRvdGFsRmVlZCAqIDgwKSAvIDEwMDtcclxuICAgICAgICBpZihhbHR1cmFUb3RhbEZlZWQgPT0gMjA2MCl7XHJcbiAgICAgICAgICAgIHBvcmNlbnRhamVTdWZpY2llbnRlID0gKGFsdHVyYVRvdGFsRmVlZCAqIDY1KSAvIDEwMDtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmKGFsdHVyYUFjdHVhbD49cG9yY2VudGFqZVN1ZmljaWVudGUpe1xyXG4gICAgICAgICAgICByZXR1cm4gYm90b25DYXJnYXJNYXMuY2xhc3NMaXN0LnJlbW92ZSgnZC1ub25lJyk7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHJldHVybiBib3RvbkNhcmdhck1hcy5jbGFzc0xpc3QuYWRkKCdkLW5vbmUnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyQm90b25DYXJnYXJNYXMgPSAoKT0+e1xyXG4gICAgICAgIGxldCBtaW5pbW9Qb3N0ZW9zID0gMjA7XHJcbiAgICAgICAgaWYoaXNNb2JpbGUoKSl7XHJcbiAgICAgICAgICAgIG1pbmltb1Bvc3Rlb3MgPSAxMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKHByb3BzLnByb2R1Y3RvcyAmJiBwcm9wcy5wcm9kdWN0b3MubGVuZ3RoPj1taW5pbW9Qb3N0ZW9zKXtcclxuICAgICAgICAgICAgcmV0dXJuIDxidXR0b24gY2xhc3NOYW1lPVwiYm90b24gYmcteWVsbG93IGJ0bi12ZXJtYXMgZC1ub25lXCIgb25DbGljaz17Y2FyZ2FyTWFzfT57KHByb3BzLmxvYWRpbmdfbWFzKT8nT2J0ZW5pZW5kbyBwcm9kdWN0b3MuLi4nOidDYXJnYXIgbcOhcyd9PC9idXR0b24+XHJcbiAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICB7KHByb3BzLmxvYWRpbmcgfHwgIXByb3BzLnByb2R1Y3Rvcyk/PGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgdGV4dC1jZW50ZXJcIj48TG9hZGVyLz48L2Rpdj46XHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICB7KGZpbHRybyE9PScnKT9cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBpZD1cImxhYmVsX19maWx0cm8tYnVzcXVlZGFcIiBjbGFzc05hbWU9e1Byb2R1Y3Rvc1N0eWxlLmxhYmVsX19maWx0cm9fYnVzcXVlZGF9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhU2VhcmNofS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17UHJvZHVjdG9zU3R5bGUuaXRlbV9maWx0cm9fYnVzcXVlZGF9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1tdXRlZGRcIiBpZD1cInZhbG9yLWJ1c3F1ZWRhXCI+e2ZpbHRyb308L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA6bnVsbH1cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIG15LTIgYWxpZ24taXRlbXMtY2VudGVyXCIgc3R5bGU9e3twYWRkaW5nOicwcHggMTVweCd9fT5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkXCI+PGIgY2xhc3NOYW1lPVwidHh0LXllbGxvd1wiPntwcm9wcy5wcm9kdWN0b3MubGVuZ3RofTwvYj4gcHJvZHVjdG9zIGVuY29udHJhZG9zPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtQcm9kdWN0b3NTdHlsZS5vcmRlbmFyUHJvZHVjdG9zICsgJyAnICsgYGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidHh0LXllbGxvdyB0ZXh0LWJvbGQgbXItMlwiPk9yZGVuYXIgcG9yOiA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3NOYW1lPXtQcm9kdWN0b3NTdHlsZS5zZWxlY3Rfb3JkZW5hcn0gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZU9yZGVuUHJvZHVjdG9zfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJkZXNjXCI+TWF5b3IgcHJlY2lvPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiYXNjXCI+TWVub3IgcHJlY2lvPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17c2hvd0ZpbHRyb3NNb2JpbGV9IGNsYXNzTmFtZT17YGJvdG9uIGJnLXllbGxvdyBtdC0zIGQtbm9uZWAgKyAnICcgKyBQcm9kdWN0b3NTdHlsZS5ib3Rvbl9maWx0cmFyX21vYmlsZX0+RmlsdHJhcjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBmZWVkUHJvZHVjdG9zXCIgb25TY3JvbGw9e2hhbmRsZVNjcm9sbEZlZWRQcm9kdWN0b3N9PlxyXG4gICAgICAgICAgICAgICAgICAgIHshcHJvcHMucHJvZHVjdG9zID8gbnVsbCA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzLnByb2R1Y3Rvcy5tYXAocHJkPT4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17cHJkLmlkUHJvZHVjdG99IGNsYXNzTmFtZT1cImNvbC02IGNvbC1tZC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmRQcm9kdWN0byBpbWFnZW49e3ByZC5mb3RvfSBwcmQ9e3ByZH0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICB7cmVuZGVyQm90b25DYXJnYXJNYXMoKX1cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAgICAgLmZlZWRQcm9kdWN0b3N7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0Ojc1dmg7XHJcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3cteTpzY3JvbGw7XHJcbiAgICAgICAgICAgICAgICB9ICAgIFxyXG4gICAgICAgICAgICAgICAgLmJ0bi12ZXJtYXN7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOjEycHhcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5mZWVkUHJvZHVjdG9zOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDhweDsgICAgIC8qIFRhbWHDsW8gZGVsIHNjcm9sbCBlbiB2ZXJ0aWNhbCAqL1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDo1cHhcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuZmVlZFByb2R1Y3Rvczo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNGRkIzNDc7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmZlZWRQcm9kdWN0b3M6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjYjNiM2IzO1xyXG4gICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCAycHggMXB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIEBtZWRpYShtYXgtd2lkdGg6NzY4cHgpe1xyXG4gICAgICAgICAgICAgICAgICAgIC5mZWVkUHJvZHVjdG9ze1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6NjV2aDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3cteTpzY3JvbGw7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBcclxuICAgICAgICAgICAgICAgICAgICAuZmVlZFByb2R1Y3Rvczo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogOHB4OyAgICAgLyogVGFtYcOxbyBkZWwgc2Nyb2xsIGVuIHZlcnRpY2FsICovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDoxMHB4XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufVxyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gcmVkdWNlcnM9PntcclxuICAgIHJldHVybiByZWR1Y2Vycy5wcm9kdWN0b3NSZWR1Y2VyO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcyxwcm9kdWN0b3NBY3Rpb25zKShQcm9kdWN0b3MpOyJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\franc\\\\Documents\\\\oliver-2\\\\sitio-desa\\\\src\\\\components\\\\Productos\\\\index.js */"));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUHJvZHVjdG9zL2luZGV4LmpzIl0sIm5hbWVzIjpbIlByb2R1Y3RvcyIsInByb3BzIiwidXNlU3RhdGUiLCJmaWx0cm8iLCJzZXRGaWx0cm8iLCJkZXNkZSIsImxpbWl0ZURlc2t0b3AiLCJsaW1pdGVNb2JpbGUiLCJyYW5nb1Byb2R1Y3RvIiwic2V0UmFuZ29Qcm9kdWN0byIsInVzZUVmZmVjdCIsImxvY2F0aW9uIiwicXVlcnkiLCJzZWFyY2giLCJtb3N0cmFyU29sYXBhRmlsdHJvIiwiaW5kZXgiLCJnZXRQcm9kdWN0b3MiLCJ0cmFlck1hcyIsInByb2R1Y3RvcyIsInNob3dGaWx0cm9zTW9iaWxlIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiTmF2YmFyU3R5bGUiLCJtZW51X19jb2xsYXBzZWQiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsInNob3dDb2xsYXBzZWQiLCJyZW1vdmUiLCJhZGQiLCJGaWx0cm9TdHlsZSIsInNob3dfZmlsdHJvcyIsInRyYWVyVG9kb3MiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlQ2hhbmdlT3JkZW5Qcm9kdWN0b3MiLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwic29ydCIsImEiLCJiIiwicHJlY2lvVW5pZGFkIiwib3JkZW5hclByb2R1Y3RvcyIsImNhcmdhck1hcyIsImlzTW9iaWxlIiwiaGFuZGxlU2Nyb2xsRmVlZFByb2R1Y3RvcyIsImZlZWRQcm9kdWN0b3MiLCJxdWVyeVNlbGVjdG9yIiwiYm90b25DYXJnYXJNYXMiLCJhbHR1cmFUb3RhbEZlZWQiLCJzY3JvbGxIZWlnaHQiLCJhbHR1cmFBY3R1YWwiLCJzY3JvbGxUb3AiLCJwb3JjZW50YWplU3VmaWNpZW50ZSIsInJlbmRlckJvdG9uQ2FyZ2FyTWFzIiwibWluaW1vUG9zdGVvcyIsImxlbmd0aCIsImxvYWRpbmdfbWFzIiwibG9hZGluZyIsIlByb2R1Y3Rvc1N0eWxlIiwibGFiZWxfX2ZpbHRyb19idXNxdWVkYSIsImZhU2VhcmNoIiwiaXRlbV9maWx0cm9fYnVzcXVlZGEiLCJwYWRkaW5nIiwic2VsZWN0X29yZGVuYXIiLCJib3Rvbl9maWx0cmFyX21vYmlsZSIsIm1hcCIsInByZCIsImlkUHJvZHVjdG8iLCJmb3RvIiwibWFwU3RhdGVUb1Byb3BzIiwicmVkdWNlcnMiLCJwcm9kdWN0b3NSZWR1Y2VyIiwiY29ubmVjdCIsInByb2R1Y3Rvc0FjdGlvbnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFBQSxrQkFFR0Msc0RBQVEsQ0FBQyxFQUFELENBRlg7QUFBQSxNQUVsQkMsTUFGa0I7QUFBQSxNQUVWQyxTQUZVOztBQUFBLG1CQUdpQkYsc0RBQVEsQ0FBQztBQUMvQ0csU0FBSyxFQUFDLENBRHlDO0FBRS9DQyxpQkFBYSxFQUFDLEVBRmlDO0FBRy9DQyxnQkFBWSxFQUFDO0FBSGtDLEdBQUQsQ0FIekI7QUFBQSxNQUdsQkMsYUFIa0I7QUFBQSxNQUdIQyxnQkFIRzs7QUFTekJDLHlEQUFTLENBQUMsWUFBTTtBQUNaLFFBQUdULEtBQUssQ0FBQ1UsUUFBTixLQUFtQixZQUF0QixFQUFtQztBQUMvQixVQUFHVixLQUFLLENBQUNXLEtBQU4sQ0FBWUMsTUFBZixFQUFzQjtBQUNsQkMsMkJBQW1CLENBQUNiLEtBQUssQ0FBQ1csS0FBTixDQUFZQyxNQUFiLENBQW5CO0FBQ0gsT0FGRCxNQUVLO0FBQ0RDLDJCQUFtQixDQUFDYixLQUFLLENBQUNXLEtBQU4sQ0FBWUcsS0FBWixDQUFrQixDQUFsQixDQUFELENBQW5CO0FBQ0g7QUFDSixLQU5ELE1BTUs7QUFDREMsa0JBQVk7QUFDZjtBQUNKLEdBVlEsRUFVTixFQVZN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QyxHQUFHO0FBQUEsV0FDbkI7QUFBSyxTQUFHLEVBQUVBLEdBQUcsQ0FBQ0MsVUFBZDtBQUFBLDBDQUFvQyxnQkFBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNJLE1BQUMscURBQUQ7QUFBYyxZQUFNLEVBQUVELEdBQUcsQ0FBQ0UsSUFBMUI7QUFBZ0MsU0FBRyxFQUFFRixHQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREosQ0FEbUI7QUFBQSxHQUF2QixDQUZSLENBcEJKLEVBNkJLYixvQkFBb0IsRUE3QnpCLENBRko7QUFBQTtBQUFBO0FBQUEsKy9YQURKO0FBdUVILENBckxEOztHQUFNdEQsUzs7S0FBQUEsUzs7QUF1TE4sSUFBTXNFLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQUMsUUFBUSxFQUFFO0FBQzlCLFNBQU9BLFFBQVEsQ0FBQ0MsZ0JBQWhCO0FBQ0gsQ0FGRDs7QUFJZUMsMEhBQU8sQ0FBQ0gsZUFBRCxFQUFpQkksNERBQWpCLENBQVAsQ0FBMEMxRSxTQUExQyxDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2R1Y3Rvcy9bWy4uLmluZGV4XV0uYjQwMWQyZWVhY2QyMzQzNjg0ZWQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQ2FyZFByb2R1Y3RvIGZyb20gJy4uL0NhcmRQcm9kdWN0byc7XHJcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgKiBhcyBwcm9kdWN0b3NBY3Rpb25zIGZyb20gJy4uLy4uLy4uL3N0b3JlL2FjdGlvbnMvcHJvZHVjdG9zQWN0aW9ucyc7XHJcbmltcG9ydCBQcm9kdWN0b3NTdHlsZSBmcm9tICcuL1Byb2R1Y3Rvcy5tb2R1bGUuY3NzJztcclxuaW1wb3J0IExvYWRlciBmcm9tICcuLi9Mb2FkZXInO1xyXG5pbXBvcnQgeyBmYVNlYXJjaCB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnNcIjtcclxuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiO1xyXG5pbXBvcnQgRmlsdHJvU3R5bGUgZnJvbSAnLi4vRmlsdHJvL0ZpbHRyby5tb2R1bGUuY3NzJztcclxuaW1wb3J0IHsgaXNNb2JpbGUgfSBmcm9tICcuLi8uLi8uLi9oZWxwZXJzJztcclxuaW1wb3J0IE5hdmJhclN0eWxlIGZyb20gJy4uL05hdmJhci9OYXZiYXIubW9kdWxlLmNzcyc7XHJcblxyXG5jb25zdCBQcm9kdWN0b3MgPSAocHJvcHMpID0+IHtcclxuXHJcbiAgICBjb25zdCBbZmlsdHJvLCBzZXRGaWx0cm9dID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW3JhbmdvUHJvZHVjdG8sIHNldFJhbmdvUHJvZHVjdG9dID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIGRlc2RlOjEsXHJcbiAgICAgICAgbGltaXRlRGVza3RvcDoyMCxcclxuICAgICAgICBsaW1pdGVNb2JpbGU6MTBcclxuICAgIH0pO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYocHJvcHMubG9jYXRpb24gIT09ICcvcHJvZHVjdG9zJyl7XHJcbiAgICAgICAgICAgIGlmKHByb3BzLnF1ZXJ5LnNlYXJjaCl7XHJcbiAgICAgICAgICAgICAgICBtb3N0cmFyU29sYXBhRmlsdHJvKHByb3BzLnF1ZXJ5LnNlYXJjaCk7XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgbW9zdHJhclNvbGFwYUZpbHRybyhwcm9wcy5xdWVyeS5pbmRleFswXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgZ2V0UHJvZHVjdG9zKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYocmFuZ29Qcm9kdWN0by5kZXNkZT4xKXtcclxuICAgICAgICAgICAgcHJvcHMudHJhZXJNYXMocmFuZ29Qcm9kdWN0byxwcm9wcy5wcm9kdWN0b3MpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtyYW5nb1Byb2R1Y3RvXSlcclxuXHJcbiAgICBjb25zdCBzaG93RmlsdHJvc01vYmlsZSA9ICgpPT57XHJcbiAgICAgICAgaWYoZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShOYXZiYXJTdHlsZS5tZW51X19jb2xsYXBzZWQpWzBdLmNsYXNzTGlzdC5jb250YWlucyhOYXZiYXJTdHlsZS5zaG93Q29sbGFwc2VkKSl7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoTmF2YmFyU3R5bGUubWVudV9fY29sbGFwc2VkKVswXS5jbGFzc0xpc3QucmVtb3ZlKE5hdmJhclN0eWxlLnNob3dDb2xsYXBzZWQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdGaWx0cm9fZmlsdHJvc19fY29udGFuaWVyX18za25YZicpWzBdLmNsYXNzTGlzdC5hZGQoRmlsdHJvU3R5bGUuc2hvd19maWx0cm9zKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBnZXRQcm9kdWN0b3MgPSBhc3luYyAoKT0+e1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGF3YWl0IHByb3BzLnRyYWVyVG9kb3MocmFuZ29Qcm9kdWN0byk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgY29uc3QgbW9zdHJhclNvbGFwYUZpbHRybyA9IGZpbHRybz0+e1xyXG4gICAgICAgIHNldEZpbHRybyhmaWx0cm8pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZU9yZGVuUHJvZHVjdG9zID0gZXZlbnQ9PntcclxuICAgICAgICBpZihldmVudC50YXJnZXQudmFsdWUgPT09ICdhc2MnKXtcclxuICAgICAgICAgICAgcHJvcHMucHJvZHVjdG9zLnNvcnQoKGEsYik9PntcclxuICAgICAgICAgICAgICAgIGlmKGEucHJlY2lvVW5pZGFkID4gYi5wcmVjaW9VbmlkYWQpIHJldHVybiAxO1xyXG4gICAgICAgICAgICAgICAgaWYoYS5wcmVjaW9VbmlkYWQgPCBiLnByZWNpb1VuaWRhZCkgcmV0dXJuIC0xO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHByb3BzLnByb2R1Y3Rvcy5zb3J0KChhLGIpPT57XHJcbiAgICAgICAgICAgICAgICBpZihhLnByZWNpb1VuaWRhZCA8IGIucHJlY2lvVW5pZGFkKSByZXR1cm4gMTtcclxuICAgICAgICAgICAgICAgIGlmKGEucHJlY2lvVW5pZGFkID4gYi5wcmVjaW9VbmlkYWQpIHJldHVybiAtMTtcclxuICAgICAgICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIHByb3BzLm9yZGVuYXJQcm9kdWN0b3MocHJvcHMucHJvZHVjdG9zKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLy9vY3VsdGFyIGxhIGNoYXBpdGEgcXVlIGluZGljYSBlbCBub21icmUgZGVsIGZpbHRybyBhY3Rpdm8gY3VhbmRvIHNlIHJlc3RhYmxlY2VuIGxvcyBmaWx0cm9zLlxyXG4gICAgaWYocHJvcHMubG9jYXRpb249PScvcHJvZHVjdG9zJyAmJiBmaWx0cm8hPScnKXtcclxuICAgICAgICBzZXRGaWx0cm8oJycpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNhcmdhck1hcyA9ICgpPT57XHJcbiAgICAgICAgaWYoaXNNb2JpbGUoKSl7XHJcbiAgICAgICAgICAgIHNldFJhbmdvUHJvZHVjdG8oe1xyXG4gICAgICAgICAgICAgICAgLi4ucmFuZ29Qcm9kdWN0byxcclxuICAgICAgICAgICAgICAgIGRlc2RlOiByYW5nb1Byb2R1Y3RvLmRlc2RlICsgcmFuZ29Qcm9kdWN0by5saW1pdGVNb2JpbGUgLSAxLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBzZXRSYW5nb1Byb2R1Y3RvKHtcclxuICAgICAgICAgICAgICAgIC4uLnJhbmdvUHJvZHVjdG8sXHJcbiAgICAgICAgICAgICAgICBkZXNkZTogcmFuZ29Qcm9kdWN0by5kZXNkZSArIHJhbmdvUHJvZHVjdG8ubGltaXRlRGVza3RvcCAtIDFcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlU2Nyb2xsRmVlZFByb2R1Y3RvcyA9IGV2ZW50PT57XHJcbiAgICAgICAgbGV0IGZlZWRQcm9kdWN0b3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmVlZFByb2R1Y3RvcycpO1xyXG4gICAgICAgIGxldCBib3RvbkNhcmdhck1hcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG4tdmVybWFzJyk7XHJcbiAgICAgICAgbGV0IGFsdHVyYVRvdGFsRmVlZCA9IGZlZWRQcm9kdWN0b3Muc2Nyb2xsSGVpZ2h0O1xyXG4gICAgICAgIGxldCBhbHR1cmFBY3R1YWwgPSBmZWVkUHJvZHVjdG9zLnNjcm9sbFRvcDtcclxuICAgICAgICBsZXQgcG9yY2VudGFqZVN1ZmljaWVudGUgPSAoYWx0dXJhVG90YWxGZWVkICogODApIC8gMTAwO1xyXG4gICAgICAgIGlmKGFsdHVyYVRvdGFsRmVlZCA9PSAyMDYwKXtcclxuICAgICAgICAgICAgcG9yY2VudGFqZVN1ZmljaWVudGUgPSAoYWx0dXJhVG90YWxGZWVkICogNjUpIC8gMTAwO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgaWYoYWx0dXJhQWN0dWFsPj1wb3JjZW50YWplU3VmaWNpZW50ZSl7XHJcbiAgICAgICAgICAgIHJldHVybiBib3RvbkNhcmdhck1hcy5jbGFzc0xpc3QucmVtb3ZlKCdkLW5vbmUnKTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgcmV0dXJuIGJvdG9uQ2FyZ2FyTWFzLmNsYXNzTGlzdC5hZGQoJ2Qtbm9uZScpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJCb3RvbkNhcmdhck1hcyA9ICgpPT57XHJcbiAgICAgICAgbGV0IG1pbmltb1Bvc3Rlb3MgPSAyMDtcclxuICAgICAgICBpZihpc01vYmlsZSgpKXtcclxuICAgICAgICAgICAgbWluaW1vUG9zdGVvcyA9IDEwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYocHJvcHMucHJvZHVjdG9zICYmIHByb3BzLnByb2R1Y3Rvcy5sZW5ndGg+PW1pbmltb1Bvc3Rlb3Mpe1xyXG4gICAgICAgICAgICByZXR1cm4gPGJ1dHRvbiBjbGFzc05hbWU9XCJib3RvbiBiZy15ZWxsb3cgYnRuLXZlcm1hcyBkLW5vbmVcIiBvbkNsaWNrPXtjYXJnYXJNYXN9PnsocHJvcHMubG9hZGluZ19tYXMpPydPYnRlbmllbmRvIHByb2R1Y3Rvcy4uLic6J0NhcmdhciBtw6FzJ308L2J1dHRvbj5cclxuICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIHsocHJvcHMubG9hZGluZyB8fCAhcHJvcHMucHJvZHVjdG9zKT88ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiB0ZXh0LWNlbnRlclwiPjxMb2FkZXIvPjwvZGl2PjpcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIHsoZmlsdHJvIT09JycpP1xyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGlkPVwibGFiZWxfX2ZpbHRyby1idXNxdWVkYVwiIGNsYXNzTmFtZT17UHJvZHVjdG9zU3R5bGUubGFiZWxfX2ZpbHRyb19idXNxdWVkYX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFTZWFyY2h9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtQcm9kdWN0b3NTdHlsZS5pdGVtX2ZpbHRyb19idXNxdWVkYX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkZFwiIGlkPVwidmFsb3ItYnVzcXVlZGFcIj57ZmlsdHJvfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDpudWxsfVxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cganVzdGlmeS1jb250ZW50LWJldHdlZW4gbXktMiBhbGlnbi1pdGVtcy1jZW50ZXJcIiBzdHlsZT17e3BhZGRpbmc6JzBweCAxNXB4J319PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtbXV0ZWRcIj48YiBjbGFzc05hbWU9XCJ0eHQteWVsbG93XCI+e3Byb3BzLnByb2R1Y3Rvcy5sZW5ndGh9PC9iPiBwcm9kdWN0b3MgZW5jb250cmFkb3M8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1Byb2R1Y3Rvc1N0eWxlLm9yZGVuYXJQcm9kdWN0b3MgKyAnICcgKyBgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlcmB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0eHQteWVsbG93IHRleHQtYm9sZCBtci0yXCI+T3JkZW5hciBwb3I6IDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9e1Byb2R1Y3Rvc1N0eWxlLnNlbGVjdF9vcmRlbmFyfSBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlT3JkZW5Qcm9kdWN0b3N9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImRlc2NcIj5NYXlvciBwcmVjaW88L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJhc2NcIj5NZW5vciBwcmVjaW88L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtzaG93RmlsdHJvc01vYmlsZX0gY2xhc3NOYW1lPXtgYm90b24gYmcteWVsbG93IG10LTMgZC1ub25lYCArICcgJyArIFByb2R1Y3Rvc1N0eWxlLmJvdG9uX2ZpbHRyYXJfbW9iaWxlfT5GaWx0cmFyPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGZlZWRQcm9kdWN0b3NcIiBvblNjcm9sbD17aGFuZGxlU2Nyb2xsRmVlZFByb2R1Y3Rvc30+XHJcbiAgICAgICAgICAgICAgICAgICAgeyFwcm9wcy5wcm9kdWN0b3MgPyBudWxsIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHMucHJvZHVjdG9zLm1hcChwcmQ9PihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtwcmQuaWRQcm9kdWN0b30gY2xhc3NOYW1lPVwiY29sLTYgY29sLW1kLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZFByb2R1Y3RvIGltYWdlbj17cHJkLmZvdG99IHByZD17cHJkfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIHtyZW5kZXJCb3RvbkNhcmdhck1hcygpfVxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICAgICAuZmVlZFByb2R1Y3Rvc3tcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6NzV2aDtcclxuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdy15OnNjcm9sbDtcclxuICAgICAgICAgICAgICAgIH0gICAgXHJcbiAgICAgICAgICAgICAgICAuYnRuLXZlcm1hc3tcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICB0b3A6MTJweFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmZlZWRQcm9kdWN0b3M6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogOHB4OyAgICAgLyogVGFtYcOxbyBkZWwgc2Nyb2xsIGVuIHZlcnRpY2FsICovXHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OjVweFxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5mZWVkUHJvZHVjdG9zOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI0ZGQjM0NztcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuZmVlZFByb2R1Y3Rvczo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNiM2IzYjM7XHJcbiAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCAwIDJweCAxcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgQG1lZGlhKG1heC13aWR0aDo3NjhweCl7XHJcbiAgICAgICAgICAgICAgICAgICAgLmZlZWRQcm9kdWN0b3N7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDo2NXZoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdy15OnNjcm9sbDtcclxuICAgICAgICAgICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICAgICAgICAgIC5mZWVkUHJvZHVjdG9zOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA4cHg7ICAgICAvKiBUYW1hw7FvIGRlbCBzY3JvbGwgZW4gdmVydGljYWwgKi9cclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OjEwcHhcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSByZWR1Y2Vycz0+e1xyXG4gICAgcmV0dXJuIHJlZHVjZXJzLnByb2R1Y3Rvc1JlZHVjZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLHByb2R1Y3Rvc0FjdGlvbnMpKFByb2R1Y3Rvcyk7Il0sInNvdXJjZVJvb3QiOiIifQ==