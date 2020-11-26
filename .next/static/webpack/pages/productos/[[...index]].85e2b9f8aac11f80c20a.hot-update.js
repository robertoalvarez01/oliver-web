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

    if (Object(_helpers__WEBPACK_IMPORTED_MODULE_13__["isMobile"])()) {
      porcentajeSuficiente = alturaTotalFeed * 70 / 100;
    } else {
      if (alturaTotalFeed == 2060) {
        porcentajeSuficiente = alturaTotalFeed * 65 / 100;
      }

      ;
    }

    if (alturaActual >= porcentajeSuficiente) {
      return botonCargarMas.classList.remove('d-none');
    } else {
      return botonCargarMas.classList.add('d-none');
    }
  };

  var renderBotonCargarMas = function renderBotonCargarMas() {
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
          lineNumber: 122,
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
      lineNumber: 129,
      columnNumber: 50
    }
  }, __jsx(_Loader__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 86
    }
  })) : __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, filtro !== '' ? __jsx("span", {
    id: "label__filtro-busqueda",
    className: "jsx-2778668712" + " " + (_Productos_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.label__filtro_busqueda || ""),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 21
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_11__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__["faSearch"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 25
    }
  }), __jsx("span", {
    className: "jsx-2778668712" + " " + (_Productos_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.item_filtro_busqueda || ""),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 25
    }
  }, __jsx("span", {
    id: "valor-busqueda",
    className: "jsx-2778668712" + " " + "text-mutedd",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
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
      lineNumber: 139,
      columnNumber: 17
    }
  }, __jsx("span", {
    className: "jsx-2778668712" + " " + "text-muted",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 21
    }
  }, __jsx("b", {
    className: "jsx-2778668712" + " " + "txt-yellow",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 50
    }
  }, props.productos.length), " productos encontrados"), __jsx("div", {
    className: "jsx-2778668712" + " " + (_Productos_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.ordenarProductos + ' ' + "d-flex align-items-center" || false),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 21
    }
  }, __jsx("span", {
    className: "jsx-2778668712" + " " + "txt-yellow text-bold mr-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 25
    }
  }, "Ordenar por: "), __jsx("select", {
    onChange: handleChangeOrdenProductos,
    className: "jsx-2778668712" + " " + (_Productos_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.select_ordenar || ""),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 25
    }
  }, __jsx("option", {
    value: "desc",
    className: "jsx-2778668712",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 29
    }
  }, "Mayor precio"), __jsx("option", {
    value: "asc",
    className: "jsx-2778668712",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 29
    }
  }, "Menor precio"))), __jsx("button", {
    onClick: showFiltrosMobile,
    className: "jsx-2778668712" + " " + ("boton bg-yellow mt-3 d-none" + ' ' + _Productos_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.boton_filtrar_mobile || false),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 21
    }
  }, "Filtrar")), __jsx("div", {
    onScroll: handleScrollFeedProductos,
    className: "jsx-2778668712" + " " + "row feedProductos",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 17
    }
  }, !props.productos ? null : props.productos.map(function (prd) {
    return __jsx("div", {
      key: prd.idProducto,
      className: "jsx-2778668712" + " " + "col-6 col-md-3",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 153,
        columnNumber: 29
      }
    }, __jsx(_CardProducto__WEBPACK_IMPORTED_MODULE_5__["default"], {
      imagen: prd.foto,
      prd: prd,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 154,
        columnNumber: 33
      }
    }));
  })), renderBotonCargarMas()), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {
    id: "2778668712",
    __self: _this
  }, ".feedProductos.jsx-2778668712{height:75vh;overflow-y:scroll;}.btn-vermas.jsx-2778668712{position:relative;top:12px;}.feedProductos.jsx-2778668712::-webkit-scrollbar{width:8px;height:5px;}.feedProductos.jsx-2778668712::-webkit-scrollbar-thumb{background:#FFB347;border-radius:4px;}.feedProductos.jsx-2778668712::-webkit-scrollbar-thumb.jsx-2778668712:hover{background:#b3b3b3;box-shadow:0 0 2px 1px rgba(0,0,0,0.2);}@media(max-width:768px){.feedProductos.jsx-2778668712{height:65vh;overflow-y:scroll;}.feedProductos.jsx-2778668712::-webkit-scrollbar{width:8px;height:10px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcZnJhbmNcXERvY3VtZW50c1xcb2xpdmVyLTJcXHNpdGlvLWRlc2FcXHNyY1xcY29tcG9uZW50c1xcUHJvZHVjdG9zXFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpS3dCLEFBR2dDLEFBSU0sQUFJUCxBQUtTLEFBSUEsQUFLSixBQUlELFVBaEJuQixBQWtCSSxFQTNCa0IsQUFzQkksTUFqQjFCLENBUXVCLEFBSXdCLEVBUjlDLENBa0JJLEtBdEJKLEdBSkEsQUFzQkksT0FUSixxQkFJQSIsImZpbGUiOiJDOlxcVXNlcnNcXGZyYW5jXFxEb2N1bWVudHNcXG9saXZlci0yXFxzaXRpby1kZXNhXFxzcmNcXGNvbXBvbmVudHNcXFByb2R1Y3Rvc1xcaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IENhcmRQcm9kdWN0byBmcm9tICcuLi9DYXJkUHJvZHVjdG8nO1xyXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0ICogYXMgcHJvZHVjdG9zQWN0aW9ucyBmcm9tICcuLi8uLi8uLi9zdG9yZS9hY3Rpb25zL3Byb2R1Y3Rvc0FjdGlvbnMnO1xyXG5pbXBvcnQgUHJvZHVjdG9zU3R5bGUgZnJvbSAnLi9Qcm9kdWN0b3MubW9kdWxlLmNzcyc7XHJcbmltcG9ydCBMb2FkZXIgZnJvbSAnLi4vTG9hZGVyJztcclxuaW1wb3J0IHsgZmFTZWFyY2ggfSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCI7XHJcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIjtcclxuaW1wb3J0IEZpbHRyb1N0eWxlIGZyb20gJy4uL0ZpbHRyby9GaWx0cm8ubW9kdWxlLmNzcyc7XHJcbmltcG9ydCB7IGlzTW9iaWxlIH0gZnJvbSAnLi4vLi4vLi4vaGVscGVycyc7XHJcbmltcG9ydCBOYXZiYXJTdHlsZSBmcm9tICcuLi9OYXZiYXIvTmF2YmFyLm1vZHVsZS5jc3MnO1xyXG5cclxuY29uc3QgUHJvZHVjdG9zID0gKHByb3BzKSA9PiB7XHJcblxyXG4gICAgY29uc3QgW2ZpbHRybywgc2V0RmlsdHJvXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtyYW5nb1Byb2R1Y3RvLCBzZXRSYW5nb1Byb2R1Y3RvXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICBkZXNkZToxLFxyXG4gICAgICAgIGxpbWl0ZURlc2t0b3A6MjAsXHJcbiAgICAgICAgbGltaXRlTW9iaWxlOjEwXHJcbiAgICB9KTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmKHByb3BzLmxvY2F0aW9uICE9PSAnL3Byb2R1Y3Rvcycpe1xyXG4gICAgICAgICAgICBpZihwcm9wcy5xdWVyeS5zZWFyY2gpe1xyXG4gICAgICAgICAgICAgICAgbW9zdHJhclNvbGFwYUZpbHRybyhwcm9wcy5xdWVyeS5zZWFyY2gpO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIG1vc3RyYXJTb2xhcGFGaWx0cm8ocHJvcHMucXVlcnkuaW5kZXhbMF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGdldFByb2R1Y3RvcygpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmKHJhbmdvUHJvZHVjdG8uZGVzZGU+MSl7XHJcbiAgICAgICAgICAgIHByb3BzLnRyYWVyTWFzKHJhbmdvUHJvZHVjdG8scHJvcHMucHJvZHVjdG9zKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbcmFuZ29Qcm9kdWN0b10pXHJcblxyXG4gICAgY29uc3Qgc2hvd0ZpbHRyb3NNb2JpbGUgPSAoKT0+e1xyXG4gICAgICAgIGlmKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoTmF2YmFyU3R5bGUubWVudV9fY29sbGFwc2VkKVswXS5jbGFzc0xpc3QuY29udGFpbnMoTmF2YmFyU3R5bGUuc2hvd0NvbGxhcHNlZCkpe1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKE5hdmJhclN0eWxlLm1lbnVfX2NvbGxhcHNlZClbMF0uY2xhc3NMaXN0LnJlbW92ZShOYXZiYXJTdHlsZS5zaG93Q29sbGFwc2VkKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnRmlsdHJvX2ZpbHRyb3NfX2NvbnRhbmllcl9fM2tuWGYnKVswXS5jbGFzc0xpc3QuYWRkKEZpbHRyb1N0eWxlLnNob3dfZmlsdHJvcyk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZ2V0UHJvZHVjdG9zID0gYXN5bmMgKCk9PntcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBhd2FpdCBwcm9wcy50cmFlclRvZG9zKHJhbmdvUHJvZHVjdG8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGNvbnN0IG1vc3RyYXJTb2xhcGFGaWx0cm8gPSBmaWx0cm89PntcclxuICAgICAgICBzZXRGaWx0cm8oZmlsdHJvKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVDaGFuZ2VPcmRlblByb2R1Y3RvcyA9IGV2ZW50PT57XHJcbiAgICAgICAgaWYoZXZlbnQudGFyZ2V0LnZhbHVlID09PSAnYXNjJyl7XHJcbiAgICAgICAgICAgIHByb3BzLnByb2R1Y3Rvcy5zb3J0KChhLGIpPT57XHJcbiAgICAgICAgICAgICAgICBpZihhLnByZWNpb1VuaWRhZCA+IGIucHJlY2lvVW5pZGFkKSByZXR1cm4gMTtcclxuICAgICAgICAgICAgICAgIGlmKGEucHJlY2lvVW5pZGFkIDwgYi5wcmVjaW9VbmlkYWQpIHJldHVybiAtMTtcclxuICAgICAgICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBwcm9wcy5wcm9kdWN0b3Muc29ydCgoYSxiKT0+e1xyXG4gICAgICAgICAgICAgICAgaWYoYS5wcmVjaW9VbmlkYWQgPCBiLnByZWNpb1VuaWRhZCkgcmV0dXJuIDE7XHJcbiAgICAgICAgICAgICAgICBpZihhLnByZWNpb1VuaWRhZCA+IGIucHJlY2lvVW5pZGFkKSByZXR1cm4gLTE7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gMDtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiBwcm9wcy5vcmRlbmFyUHJvZHVjdG9zKHByb3BzLnByb2R1Y3Rvcyk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vb2N1bHRhciBsYSBjaGFwaXRhIHF1ZSBpbmRpY2EgZWwgbm9tYnJlIGRlbCBmaWx0cm8gYWN0aXZvIGN1YW5kbyBzZSByZXN0YWJsZWNlbiBsb3MgZmlsdHJvcy5cclxuICAgIGlmKHByb3BzLmxvY2F0aW9uPT0nL3Byb2R1Y3RvcycgJiYgZmlsdHJvIT0nJyl7XHJcbiAgICAgICAgc2V0RmlsdHJvKCcnKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjYXJnYXJNYXMgPSAoKT0+e1xyXG4gICAgICAgIGlmKGlzTW9iaWxlKCkpe1xyXG4gICAgICAgICAgICBzZXRSYW5nb1Byb2R1Y3RvKHtcclxuICAgICAgICAgICAgICAgIC4uLnJhbmdvUHJvZHVjdG8sXHJcbiAgICAgICAgICAgICAgICBkZXNkZTogcmFuZ29Qcm9kdWN0by5kZXNkZSArIHJhbmdvUHJvZHVjdG8ubGltaXRlTW9iaWxlIC0gMSxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgc2V0UmFuZ29Qcm9kdWN0byh7XHJcbiAgICAgICAgICAgICAgICAuLi5yYW5nb1Byb2R1Y3RvLFxyXG4gICAgICAgICAgICAgICAgZGVzZGU6IHJhbmdvUHJvZHVjdG8uZGVzZGUgKyByYW5nb1Byb2R1Y3RvLmxpbWl0ZURlc2t0b3AgLSAxXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZVNjcm9sbEZlZWRQcm9kdWN0b3MgPSBldmVudD0+e1xyXG4gICAgICAgIGxldCBmZWVkUHJvZHVjdG9zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZlZWRQcm9kdWN0b3MnKTtcclxuICAgICAgICBsZXQgYm90b25DYXJnYXJNYXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuLXZlcm1hcycpO1xyXG4gICAgICAgIGxldCBhbHR1cmFUb3RhbEZlZWQgPSBmZWVkUHJvZHVjdG9zLnNjcm9sbEhlaWdodDtcclxuICAgICAgICBsZXQgYWx0dXJhQWN0dWFsID0gZmVlZFByb2R1Y3Rvcy5zY3JvbGxUb3A7XHJcbiAgICAgICAgbGV0IHBvcmNlbnRhamVTdWZpY2llbnRlID0gKGFsdHVyYVRvdGFsRmVlZCAqIDgwKSAvIDEwMDtcclxuICAgICAgICBpZihpc01vYmlsZSgpKXtcclxuICAgICAgICAgICAgcG9yY2VudGFqZVN1ZmljaWVudGUgPSAoYWx0dXJhVG90YWxGZWVkICogNzApIC8gMTAwO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBpZihhbHR1cmFUb3RhbEZlZWQgPT0gMjA2MCl7XHJcbiAgICAgICAgICAgICAgICBwb3JjZW50YWplU3VmaWNpZW50ZSA9IChhbHR1cmFUb3RhbEZlZWQgKiA2NSkgLyAxMDA7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKGFsdHVyYUFjdHVhbD49cG9yY2VudGFqZVN1ZmljaWVudGUpe1xyXG4gICAgICAgICAgICByZXR1cm4gYm90b25DYXJnYXJNYXMuY2xhc3NMaXN0LnJlbW92ZSgnZC1ub25lJyk7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHJldHVybiBib3RvbkNhcmdhck1hcy5jbGFzc0xpc3QuYWRkKCdkLW5vbmUnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcmVuZGVyQm90b25DYXJnYXJNYXMgPSAoKT0+e1xyXG4gICAgICAgIGxldCBtaW5pbW9Qb3N0ZW9zID0gMjA7XHJcbiAgICAgICAgaWYoaXNNb2JpbGUoKSl7XHJcbiAgICAgICAgICAgIG1pbmltb1Bvc3Rlb3MgPSAxMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKHByb3BzLnByb2R1Y3RvcyAmJiBwcm9wcy5wcm9kdWN0b3MubGVuZ3RoPj1taW5pbW9Qb3N0ZW9zKXtcclxuICAgICAgICAgICAgcmV0dXJuIDxidXR0b24gY2xhc3NOYW1lPVwiYm90b24gYmcteWVsbG93IGJ0bi12ZXJtYXMgZC1ub25lXCIgb25DbGljaz17Y2FyZ2FyTWFzfT57KHByb3BzLmxvYWRpbmdfbWFzKT8nT2J0ZW5pZW5kbyBwcm9kdWN0b3MuLi4nOidDYXJnYXIgbcOhcyd9PC9idXR0b24+XHJcbiAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICB7KHByb3BzLmxvYWRpbmcgfHwgIXByb3BzLnByb2R1Y3Rvcyk/PGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgdGV4dC1jZW50ZXJcIj48TG9hZGVyLz48L2Rpdj46XHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICB7KGZpbHRybyE9PScnKT9cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBpZD1cImxhYmVsX19maWx0cm8tYnVzcXVlZGFcIiBjbGFzc05hbWU9e1Byb2R1Y3Rvc1N0eWxlLmxhYmVsX19maWx0cm9fYnVzcXVlZGF9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhU2VhcmNofS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17UHJvZHVjdG9zU3R5bGUuaXRlbV9maWx0cm9fYnVzcXVlZGF9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1tdXRlZGRcIiBpZD1cInZhbG9yLWJ1c3F1ZWRhXCI+e2ZpbHRyb308L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA6bnVsbH1cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIG15LTIgYWxpZ24taXRlbXMtY2VudGVyXCIgc3R5bGU9e3twYWRkaW5nOicwcHggMTVweCd9fT5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkXCI+PGIgY2xhc3NOYW1lPVwidHh0LXllbGxvd1wiPntwcm9wcy5wcm9kdWN0b3MubGVuZ3RofTwvYj4gcHJvZHVjdG9zIGVuY29udHJhZG9zPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtQcm9kdWN0b3NTdHlsZS5vcmRlbmFyUHJvZHVjdG9zICsgJyAnICsgYGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidHh0LXllbGxvdyB0ZXh0LWJvbGQgbXItMlwiPk9yZGVuYXIgcG9yOiA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3NOYW1lPXtQcm9kdWN0b3NTdHlsZS5zZWxlY3Rfb3JkZW5hcn0gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZU9yZGVuUHJvZHVjdG9zfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJkZXNjXCI+TWF5b3IgcHJlY2lvPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiYXNjXCI+TWVub3IgcHJlY2lvPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17c2hvd0ZpbHRyb3NNb2JpbGV9IGNsYXNzTmFtZT17YGJvdG9uIGJnLXllbGxvdyBtdC0zIGQtbm9uZWAgKyAnICcgKyBQcm9kdWN0b3NTdHlsZS5ib3Rvbl9maWx0cmFyX21vYmlsZX0+RmlsdHJhcjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBmZWVkUHJvZHVjdG9zXCIgb25TY3JvbGw9e2hhbmRsZVNjcm9sbEZlZWRQcm9kdWN0b3N9PlxyXG4gICAgICAgICAgICAgICAgICAgIHshcHJvcHMucHJvZHVjdG9zID8gbnVsbCA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzLnByb2R1Y3Rvcy5tYXAocHJkPT4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17cHJkLmlkUHJvZHVjdG99IGNsYXNzTmFtZT1cImNvbC02IGNvbC1tZC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmRQcm9kdWN0byBpbWFnZW49e3ByZC5mb3RvfSBwcmQ9e3ByZH0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICB7cmVuZGVyQm90b25DYXJnYXJNYXMoKX1cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAgICAgLmZlZWRQcm9kdWN0b3N7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0Ojc1dmg7XHJcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3cteTpzY3JvbGw7XHJcbiAgICAgICAgICAgICAgICB9ICAgIFxyXG4gICAgICAgICAgICAgICAgLmJ0bi12ZXJtYXN7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOjEycHhcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5mZWVkUHJvZHVjdG9zOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDhweDsgICAgIC8qIFRhbWHDsW8gZGVsIHNjcm9sbCBlbiB2ZXJ0aWNhbCAqL1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDo1cHhcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuZmVlZFByb2R1Y3Rvczo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNGRkIzNDc7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmZlZWRQcm9kdWN0b3M6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjYjNiM2IzO1xyXG4gICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCAycHggMXB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIEBtZWRpYShtYXgtd2lkdGg6NzY4cHgpe1xyXG4gICAgICAgICAgICAgICAgICAgIC5mZWVkUHJvZHVjdG9ze1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6NjV2aDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3cteTpzY3JvbGw7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBcclxuICAgICAgICAgICAgICAgICAgICAuZmVlZFByb2R1Y3Rvczo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogOHB4OyAgICAgLyogVGFtYcOxbyBkZWwgc2Nyb2xsIGVuIHZlcnRpY2FsICovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDoxMHB4XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufVxyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gcmVkdWNlcnM9PntcclxuICAgIHJldHVybiByZWR1Y2Vycy5wcm9kdWN0b3NSZWR1Y2VyO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcyxwcm9kdWN0b3NBY3Rpb25zKShQcm9kdWN0b3MpOyJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\franc\\\\Documents\\\\oliver-2\\\\sitio-desa\\\\src\\\\components\\\\Productos\\\\index.js */"));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUHJvZHVjdG9zL2luZGV4LmpzIl0sIm5hbWVzIjpbIlByb2R1Y3RvcyIsInByb3BzIiwidXNlU3RhdGUiLCJmaWx0cm8iLCJzZXRGaWx0cm8iLCJkZXNkZSIsImxpbWl0ZURlc2t0b3AiLCJsaW1pdGVNb2JpbGUiLCJyYW5nb1Byb2R1Y3RvIiwic2V0UmFuZ29Qcm9kdWN0byIsInVzZUVmZmVjdCIsImxvY2F0aW9uIiwicXVlcnkiLCJzZWFyY2giLCJtb3N0cmFyU29sYXBhRmlsdHJvIiwiaW5kZXgiLCJnZXRQcm9kdWN0b3MiLCJ0cmFlck1hcyIsInByb2R1Y3RvcyIsInNob3dGaWx0cm9zTW9iaWxlIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiTmF2YmFyU3R5bGUiLCJtZW51X19jb2xsYXBzZWQiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsInNob3dDb2xsYXBzZWQiLCJyZW1vdmUiLCJhZGQiLCJGaWx0cm9TdHlsZSIsInNob3dfZmlsdHJvcyIsInRyYWVyVG9kb3MiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlQ2hhbmdlT3JkZW5Qcm9kdWN0b3MiLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwic29ydCIsImEiLCJiIiwicHJlY2lvVW5pZGFkIiwib3JkZW5hclByb2R1Y3RvcyIsImNhcmdhck1hcyIsImlzTW9iaWxlIiwiaGFuZGxlU2Nyb2xsRmVlZFByb2R1Y3RvcyIsImZlZWRQcm9kdWN0b3MiLCJxdWVyeVNlbGVjdG9yIiwiYm90b25DYXJnYXJNYXMiLCJhbHR1cmFUb3RhbEZlZWQiLCJzY3JvbGxIZWlnaHQiLCJhbHR1cmFBY3R1YWwiLCJzY3JvbGxUb3AiLCJwb3JjZW50YWplU3VmaWNpZW50ZSIsInJlbmRlckJvdG9uQ2FyZ2FyTWFzIiwibWluaW1vUG9zdGVvcyIsImxlbmd0aCIsImxvYWRpbmdfbWFzIiwibG9hZGluZyIsIlByb2R1Y3Rvc1N0eWxlIiwibGFiZWxfX2ZpbHRyb19idXNxdWVkYSIsImZhU2VhcmNoIiwiaXRlbV9maWx0cm9fYnVzcXVlZGEiLCJwYWRkaW5nIiwic2VsZWN0X29yZGVuYXIiLCJib3Rvbl9maWx0cmFyX21vYmlsZSIsIm1hcCIsInByZCIsImlkUHJvZHVjdG8iLCJmb3RvIiwibWFwU3RhdGVUb1Byb3BzIiwicmVkdWNlcnMiLCJwcm9kdWN0b3NSZWR1Y2VyIiwiY29ubmVjdCIsInByb2R1Y3Rvc0FjdGlvbnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFBQSxrQkFFR0Msc0RBQVEsQ0FBQyxFQUFELENBRlg7QUFBQSxNQUVsQkMsTUFGa0I7QUFBQSxNQUVWQyxTQUZVOztBQUFBLG1CQUdpQkYsc0RBQVEsQ0FBQztBQUMvQ0csU0FBSyxFQUFDLENBRHlDO0FBRS9DQyxpQkFBYSxFQUFDLEVBRmlDO0FBRy9DQyxnQkFBWSxFQUFDO0FBSGtDLEdBQUQsQ0FIekI7QUFBQSxNQUdsQkMsYUFIa0I7QUFBQSxNQUdIQyxnQkFIRzs7QUFTekJDLHlEQUFTLENBQUMsWUFBTTtBQUNaLFFBQUdULEtBQUssQ0FBQ1UsUUFBTixLQUFtQixZQUF0QixFQUFtQztBQUMvQixVQUFHVixLQUFLLENBQUNXLEtBQU4sQ0FBWUMsTUFBZixFQUFzQjtBQUNsQkMsMkJBQW1CLENBQUNiLEtBQUssQ0FBQ1csS0FBTixDQUFZQyxNQUFiLENBQW5CO0FBQ0gsT0FGRCxNQUVLO0FBQ0RDLDJCQUFtQixDQUFDYixLQUFLLENBQUNXLEtBQU4sQ0FBWUcsS0FBWixDQUFrQixDQUFsQixDQUFELENBQW5CO0FBQ0g7QUFDSixLQU5ELE1BTUs7QUFDREMsa0JBQVk7QUFDZjtBQUNKLEdBVlEsRUFVTixFQVZN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QUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSyxDQUFDNUMsS0FBSyxDQUFDaUIsU0FBUCxHQUFtQixJQUFuQixHQUNHakIsS0FBSyxDQUFDaUIsU0FBTixDQUFnQmdELEdBQWhCLENBQW9CLFVBQUFDLEdBQUc7QUFBQSxXQUNuQjtBQUFLLFNBQUcsRUFBRUEsR0FBRyxDQUFDQyxVQUFkO0FBQUEsMENBQW9DLGdCQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0ksTUFBQyxxREFBRDtBQUFjLFlBQU0sRUFBRUQsR0FBRyxDQUFDRSxJQUExQjtBQUFnQyxTQUFHLEVBQUVGLEdBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFESixDQURtQjtBQUFBLEdBQXZCLENBRlIsQ0FwQkosRUE2QktiLG9CQUFvQixFQTdCekIsQ0FGSjtBQUFBO0FBQUE7QUFBQSwrcllBREo7QUF1RUgsQ0F6TEQ7O0dBQU10RCxTOztLQUFBQSxTOztBQTJMTixJQUFNc0UsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFBQyxRQUFRLEVBQUU7QUFDOUIsU0FBT0EsUUFBUSxDQUFDQyxnQkFBaEI7QUFDSCxDQUZEOztBQUllQywwSEFBTyxDQUFDSCxlQUFELEVBQWlCSSw0REFBakIsQ0FBUCxDQUEwQzFFLFNBQTFDLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvZHVjdG9zL1tbLi4uaW5kZXhdXS44NWUyYjlmOGFhYzExZjgwYzIwYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBDYXJkUHJvZHVjdG8gZnJvbSAnLi4vQ2FyZFByb2R1Y3RvJztcclxuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCAqIGFzIHByb2R1Y3Rvc0FjdGlvbnMgZnJvbSAnLi4vLi4vLi4vc3RvcmUvYWN0aW9ucy9wcm9kdWN0b3NBY3Rpb25zJztcclxuaW1wb3J0IFByb2R1Y3Rvc1N0eWxlIGZyb20gJy4vUHJvZHVjdG9zLm1vZHVsZS5jc3MnO1xyXG5pbXBvcnQgTG9hZGVyIGZyb20gJy4uL0xvYWRlcic7XHJcbmltcG9ydCB7IGZhU2VhcmNoIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29uc1wiO1xyXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tIFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCI7XHJcbmltcG9ydCBGaWx0cm9TdHlsZSBmcm9tICcuLi9GaWx0cm8vRmlsdHJvLm1vZHVsZS5jc3MnO1xyXG5pbXBvcnQgeyBpc01vYmlsZSB9IGZyb20gJy4uLy4uLy4uL2hlbHBlcnMnO1xyXG5pbXBvcnQgTmF2YmFyU3R5bGUgZnJvbSAnLi4vTmF2YmFyL05hdmJhci5tb2R1bGUuY3NzJztcclxuXHJcbmNvbnN0IFByb2R1Y3RvcyA9IChwcm9wcykgPT4ge1xyXG5cclxuICAgIGNvbnN0IFtmaWx0cm8sIHNldEZpbHRyb10gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbcmFuZ29Qcm9kdWN0bywgc2V0UmFuZ29Qcm9kdWN0b10gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgZGVzZGU6MSxcclxuICAgICAgICBsaW1pdGVEZXNrdG9wOjIwLFxyXG4gICAgICAgIGxpbWl0ZU1vYmlsZToxMFxyXG4gICAgfSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZihwcm9wcy5sb2NhdGlvbiAhPT0gJy9wcm9kdWN0b3MnKXtcclxuICAgICAgICAgICAgaWYocHJvcHMucXVlcnkuc2VhcmNoKXtcclxuICAgICAgICAgICAgICAgIG1vc3RyYXJTb2xhcGFGaWx0cm8ocHJvcHMucXVlcnkuc2VhcmNoKTtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICBtb3N0cmFyU29sYXBhRmlsdHJvKHByb3BzLnF1ZXJ5LmluZGV4WzBdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBnZXRQcm9kdWN0b3MoKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZihyYW5nb1Byb2R1Y3RvLmRlc2RlPjEpe1xyXG4gICAgICAgICAgICBwcm9wcy50cmFlck1hcyhyYW5nb1Byb2R1Y3RvLHByb3BzLnByb2R1Y3Rvcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW3JhbmdvUHJvZHVjdG9dKVxyXG5cclxuICAgIGNvbnN0IHNob3dGaWx0cm9zTW9iaWxlID0gKCk9PntcclxuICAgICAgICBpZihkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKE5hdmJhclN0eWxlLm1lbnVfX2NvbGxhcHNlZClbMF0uY2xhc3NMaXN0LmNvbnRhaW5zKE5hdmJhclN0eWxlLnNob3dDb2xsYXBzZWQpKXtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShOYXZiYXJTdHlsZS5tZW51X19jb2xsYXBzZWQpWzBdLmNsYXNzTGlzdC5yZW1vdmUoTmF2YmFyU3R5bGUuc2hvd0NvbGxhcHNlZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ0ZpbHRyb19maWx0cm9zX19jb250YW5pZXJfXzNrblhmJylbMF0uY2xhc3NMaXN0LmFkZChGaWx0cm9TdHlsZS5zaG93X2ZpbHRyb3MpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGdldFByb2R1Y3RvcyA9IGFzeW5jICgpPT57XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgYXdhaXQgcHJvcHMudHJhZXJUb2RvcyhyYW5nb1Byb2R1Y3RvKTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBjb25zdCBtb3N0cmFyU29sYXBhRmlsdHJvID0gZmlsdHJvPT57XHJcbiAgICAgICAgc2V0RmlsdHJvKGZpbHRybyk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlT3JkZW5Qcm9kdWN0b3MgPSBldmVudD0+e1xyXG4gICAgICAgIGlmKGV2ZW50LnRhcmdldC52YWx1ZSA9PT0gJ2FzYycpe1xyXG4gICAgICAgICAgICBwcm9wcy5wcm9kdWN0b3Muc29ydCgoYSxiKT0+e1xyXG4gICAgICAgICAgICAgICAgaWYoYS5wcmVjaW9VbmlkYWQgPiBiLnByZWNpb1VuaWRhZCkgcmV0dXJuIDE7XHJcbiAgICAgICAgICAgICAgICBpZihhLnByZWNpb1VuaWRhZCA8IGIucHJlY2lvVW5pZGFkKSByZXR1cm4gLTE7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gMDtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgcHJvcHMucHJvZHVjdG9zLnNvcnQoKGEsYik9PntcclxuICAgICAgICAgICAgICAgIGlmKGEucHJlY2lvVW5pZGFkIDwgYi5wcmVjaW9VbmlkYWQpIHJldHVybiAxO1xyXG4gICAgICAgICAgICAgICAgaWYoYS5wcmVjaW9VbmlkYWQgPiBiLnByZWNpb1VuaWRhZCkgcmV0dXJuIC0xO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gcHJvcHMub3JkZW5hclByb2R1Y3Rvcyhwcm9wcy5wcm9kdWN0b3MpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvL29jdWx0YXIgbGEgY2hhcGl0YSBxdWUgaW5kaWNhIGVsIG5vbWJyZSBkZWwgZmlsdHJvIGFjdGl2byBjdWFuZG8gc2UgcmVzdGFibGVjZW4gbG9zIGZpbHRyb3MuXHJcbiAgICBpZihwcm9wcy5sb2NhdGlvbj09Jy9wcm9kdWN0b3MnICYmIGZpbHRybyE9Jycpe1xyXG4gICAgICAgIHNldEZpbHRybygnJyk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY2FyZ2FyTWFzID0gKCk9PntcclxuICAgICAgICBpZihpc01vYmlsZSgpKXtcclxuICAgICAgICAgICAgc2V0UmFuZ29Qcm9kdWN0byh7XHJcbiAgICAgICAgICAgICAgICAuLi5yYW5nb1Byb2R1Y3RvLFxyXG4gICAgICAgICAgICAgICAgZGVzZGU6IHJhbmdvUHJvZHVjdG8uZGVzZGUgKyByYW5nb1Byb2R1Y3RvLmxpbWl0ZU1vYmlsZSAtIDEsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHNldFJhbmdvUHJvZHVjdG8oe1xyXG4gICAgICAgICAgICAgICAgLi4ucmFuZ29Qcm9kdWN0byxcclxuICAgICAgICAgICAgICAgIGRlc2RlOiByYW5nb1Byb2R1Y3RvLmRlc2RlICsgcmFuZ29Qcm9kdWN0by5saW1pdGVEZXNrdG9wIC0gMVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVTY3JvbGxGZWVkUHJvZHVjdG9zID0gZXZlbnQ9PntcclxuICAgICAgICBsZXQgZmVlZFByb2R1Y3RvcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mZWVkUHJvZHVjdG9zJyk7XHJcbiAgICAgICAgbGV0IGJvdG9uQ2FyZ2FyTWFzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bi12ZXJtYXMnKTtcclxuICAgICAgICBsZXQgYWx0dXJhVG90YWxGZWVkID0gZmVlZFByb2R1Y3Rvcy5zY3JvbGxIZWlnaHQ7XHJcbiAgICAgICAgbGV0IGFsdHVyYUFjdHVhbCA9IGZlZWRQcm9kdWN0b3Muc2Nyb2xsVG9wO1xyXG4gICAgICAgIGxldCBwb3JjZW50YWplU3VmaWNpZW50ZSA9IChhbHR1cmFUb3RhbEZlZWQgKiA4MCkgLyAxMDA7XHJcbiAgICAgICAgaWYoaXNNb2JpbGUoKSl7XHJcbiAgICAgICAgICAgIHBvcmNlbnRhamVTdWZpY2llbnRlID0gKGFsdHVyYVRvdGFsRmVlZCAqIDcwKSAvIDEwMDtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgaWYoYWx0dXJhVG90YWxGZWVkID09IDIwNjApe1xyXG4gICAgICAgICAgICAgICAgcG9yY2VudGFqZVN1ZmljaWVudGUgPSAoYWx0dXJhVG90YWxGZWVkICogNjUpIC8gMTAwO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZihhbHR1cmFBY3R1YWw+PXBvcmNlbnRhamVTdWZpY2llbnRlKXtcclxuICAgICAgICAgICAgcmV0dXJuIGJvdG9uQ2FyZ2FyTWFzLmNsYXNzTGlzdC5yZW1vdmUoJ2Qtbm9uZScpO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICByZXR1cm4gYm90b25DYXJnYXJNYXMuY2xhc3NMaXN0LmFkZCgnZC1ub25lJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHJlbmRlckJvdG9uQ2FyZ2FyTWFzID0gKCk9PntcclxuICAgICAgICBsZXQgbWluaW1vUG9zdGVvcyA9IDIwO1xyXG4gICAgICAgIGlmKGlzTW9iaWxlKCkpe1xyXG4gICAgICAgICAgICBtaW5pbW9Qb3N0ZW9zID0gMTA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZihwcm9wcy5wcm9kdWN0b3MgJiYgcHJvcHMucHJvZHVjdG9zLmxlbmd0aD49bWluaW1vUG9zdGVvcyl7XHJcbiAgICAgICAgICAgIHJldHVybiA8YnV0dG9uIGNsYXNzTmFtZT1cImJvdG9uIGJnLXllbGxvdyBidG4tdmVybWFzIGQtbm9uZVwiIG9uQ2xpY2s9e2Nhcmdhck1hc30+eyhwcm9wcy5sb2FkaW5nX21hcyk/J09idGVuaWVuZG8gcHJvZHVjdG9zLi4uJzonQ2FyZ2FyIG3DoXMnfTwvYnV0dG9uPlxyXG4gICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgeyhwcm9wcy5sb2FkaW5nIHx8ICFwcm9wcy5wcm9kdWN0b3MpPzxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIHRleHQtY2VudGVyXCI+PExvYWRlci8+PC9kaXY+OlxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgeyhmaWx0cm8hPT0nJyk/XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gaWQ9XCJsYWJlbF9fZmlsdHJvLWJ1c3F1ZWRhXCIgY2xhc3NOYW1lPXtQcm9kdWN0b3NTdHlsZS5sYWJlbF9fZmlsdHJvX2J1c3F1ZWRhfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVNlYXJjaH0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e1Byb2R1Y3Rvc1N0eWxlLml0ZW1fZmlsdHJvX2J1c3F1ZWRhfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtbXV0ZWRkXCIgaWQ9XCJ2YWxvci1idXNxdWVkYVwiPntmaWx0cm99PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgOm51bGx9XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBteS0yIGFsaWduLWl0ZW1zLWNlbnRlclwiIHN0eWxlPXt7cGFkZGluZzonMHB4IDE1cHgnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1tdXRlZFwiPjxiIGNsYXNzTmFtZT1cInR4dC15ZWxsb3dcIj57cHJvcHMucHJvZHVjdG9zLmxlbmd0aH08L2I+IHByb2R1Y3RvcyBlbmNvbnRyYWRvczwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17UHJvZHVjdG9zU3R5bGUub3JkZW5hclByb2R1Y3RvcyArICcgJyArIGBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyYH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInR4dC15ZWxsb3cgdGV4dC1ib2xkIG1yLTJcIj5PcmRlbmFyIHBvcjogPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzTmFtZT17UHJvZHVjdG9zU3R5bGUuc2VsZWN0X29yZGVuYXJ9IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2VPcmRlblByb2R1Y3Rvc30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiZGVzY1wiPk1heW9yIHByZWNpbzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImFzY1wiPk1lbm9yIHByZWNpbzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3Nob3dGaWx0cm9zTW9iaWxlfSBjbGFzc05hbWU9e2Bib3RvbiBiZy15ZWxsb3cgbXQtMyBkLW5vbmVgICsgJyAnICsgUHJvZHVjdG9zU3R5bGUuYm90b25fZmlsdHJhcl9tb2JpbGV9PkZpbHRyYXI8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgZmVlZFByb2R1Y3Rvc1wiIG9uU2Nyb2xsPXtoYW5kbGVTY3JvbGxGZWVkUHJvZHVjdG9zfT5cclxuICAgICAgICAgICAgICAgICAgICB7IXByb3BzLnByb2R1Y3RvcyA/IG51bGwgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9wcy5wcm9kdWN0b3MubWFwKHByZD0+KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e3ByZC5pZFByb2R1Y3RvfSBjbGFzc05hbWU9XCJjb2wtNiBjb2wtbWQtM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkUHJvZHVjdG8gaW1hZ2VuPXtwcmQuZm90b30gcHJkPXtwcmR9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAge3JlbmRlckJvdG9uQ2FyZ2FyTWFzKCl9XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgICAgIC5mZWVkUHJvZHVjdG9ze1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDo3NXZoO1xyXG4gICAgICAgICAgICAgICAgICAgIG92ZXJmbG93LXk6c2Nyb2xsO1xyXG4gICAgICAgICAgICAgICAgfSAgICBcclxuICAgICAgICAgICAgICAgIC5idG4tdmVybWFze1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDoxMnB4XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuZmVlZFByb2R1Y3Rvczo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA4cHg7ICAgICAvKiBUYW1hw7FvIGRlbCBzY3JvbGwgZW4gdmVydGljYWwgKi9cclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6NXB4XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmZlZWRQcm9kdWN0b3M6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjRkZCMzQ3O1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5mZWVkUHJvZHVjdG9zOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2IzYjNiMztcclxuICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDAgMnB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBAbWVkaWEobWF4LXdpZHRoOjc2OHB4KXtcclxuICAgICAgICAgICAgICAgICAgICAuZmVlZFByb2R1Y3Rvc3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OjY1dmg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93LXk6c2Nyb2xsO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gXHJcbiAgICAgICAgICAgICAgICAgICAgLmZlZWRQcm9kdWN0b3M6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDhweDsgICAgIC8qIFRhbWHDsW8gZGVsIHNjcm9sbCBlbiB2ZXJ0aWNhbCAqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6MTBweFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn1cclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHJlZHVjZXJzPT57XHJcbiAgICByZXR1cm4gcmVkdWNlcnMucHJvZHVjdG9zUmVkdWNlcjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMscHJvZHVjdG9zQWN0aW9ucykoUHJvZHVjdG9zKTsiXSwic291cmNlUm9vdCI6IiJ9