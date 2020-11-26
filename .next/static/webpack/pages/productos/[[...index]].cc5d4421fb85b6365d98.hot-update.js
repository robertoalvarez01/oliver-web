webpackHotUpdate_N_E("pages/productos/[[...index]]",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./src/components/Navbar/Navbar.module.css":
false,

/***/ "./src/components/Filtro/index.js":
/*!****************************************!*\
  !*** ./src/components/Filtro/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Filtro_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Filtro.module.css */ "./src/components/Filtro/Filtro.module.css");
/* harmony import */ var _Filtro_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Filtro_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Modal */ "./src/components/Modal/index.js");
/* harmony import */ var _ModalMarca__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ModalMarca */ "./src/components/ModalMarca/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store_actions_productosActions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../store/actions/productosActions */ "./store/actions/productosActions.js");
/* harmony import */ var _store_actions_marcasActions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../store/actions/marcasActions */ "./store/actions/marcasActions.js");
/* harmony import */ var _store_actions_categoriasAction__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../store/actions/categoriasAction */ "./store/actions/categoriasAction.js");
/* harmony import */ var _store_actions_subcategoriasAction__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../store/actions/subcategoriasAction */ "./store/actions/subcategoriasAction.js");
/* harmony import */ var _Loader__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../Loader */ "./src/components/Loader/index.js");




var _this = undefined,
    _jsxFileName = "C:\\Users\\franc\\Documents\\oliver-2\\sitio-desa\\src\\components\\Filtro\\index.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }














var marcasTraerTodas = _store_actions_marcasActions__WEBPACK_IMPORTED_MODULE_12__["traerTodas"];
var productosFiltrarProductos = _store_actions_productosActions__WEBPACK_IMPORTED_MODULE_11__["filtrarProductos"],
    productosTraerTodos = _store_actions_productosActions__WEBPACK_IMPORTED_MODULE_11__["traerTodos"];
var categoriasTraerTodas = _store_actions_categoriasAction__WEBPACK_IMPORTED_MODULE_13__["traerTodas"];
var subcategoriaTraerTodas = _store_actions_subcategoriasAction__WEBPACK_IMPORTED_MODULE_14__["traerTodas"];

var Filtro = function Filtro(props) {
  _s();

  //state for the filters
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({
    filtrando: false,
    categoria: '',
    subcategoria: '',
    marca: '',
    buscador: ''
  }),
      estadoFiltro = _useState[0],
      setEstadoFiltro = _useState[1]; //manejo de Modal marcas


  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      modalIsOpen = _useState2[0],
      setModalIsOpen = _useState2[1];

  var onCloseModal = function onCloseModal() {
    document.getElementsByTagName('body')[0].style.overflowY = 'scroll';
    setModalIsOpen(false);
  }; //loop de efecto para ejecutar solo una vez cuando el componente se monte en el caso de que se este filtrando directo desde la url


  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    getData();
  }, []);

  var getData = /*#__PURE__*/function () {
    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;

              if (!(props.marcasReducer.marcas.length === 0)) {
                _context.next = 4;
                break;
              }

              _context.next = 4;
              return props.marcasTraerTodas();

            case 4:
              if (!(props.categoriasReducer.categorias.length === 0)) {
                _context.next = 7;
                break;
              }

              _context.next = 7;
              return props.categoriasTraerTodas();

            case 7:
              if (!(props.subcategoriaReducer.subcategorias.length === 0)) {
                _context.next = 10;
                break;
              }

              _context.next = 10;
              return props.subcategoriaTraerTodas();

            case 10:
              if (props.location !== '/productos') {
                activarFiltroPorUrl();
              }

              _context.next = 16;
              break;

            case 13:
              _context.prev = 13;
              _context.t0 = _context["catch"](0);
              console.log(_context.t0);

            case 16:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 13]]);
    }));

    return function getData() {
      return _ref.apply(this, arguments);
    };
  }(); //loop de efecto para hacer render cada vez que se agrega o elimina un filtro


  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    switchItemActive();
  }, [estadoFiltro]);

  var activarFiltroPorUrl = function activarFiltroPorUrl() {
    if (props.query.search) {
      return activarFiltro(Object.keys(props.query)[0], props.query.search);
    } else {
      return activarFiltro(props.query.type, props.query.index[1]);
    }
  };

  var activarFiltro = function activarFiltro(tipoFiltro, key) {
    switch (tipoFiltro) {
      case 'categoria':
        setEstadoFiltro(_objectSpread(_objectSpread({}, estadoFiltro), {}, {
          categoria: key,
          buscador: '',
          filtrando: true
        }));
        break;

      case 'subcategoria':
        setEstadoFiltro(_objectSpread(_objectSpread({}, estadoFiltro), {}, {
          subcategoria: key,
          buscador: '',
          filtrando: true
        }));
        break;

      case 'marca':
        setEstadoFiltro(_objectSpread(_objectSpread({}, estadoFiltro), {}, {
          marca: key,
          buscador: '',
          filtrando: true
        }));
        break;

      case 'search':
        setEstadoFiltro(_objectSpread(_objectSpread({}, estadoFiltro), {}, {
          buscador: key,
          filtrando: true
        }));
        break;

      default:
        break;
    }
  };

  var switchItemActive = function switchItemActive() {
    // console.log(estadoFiltro);
    for (var index = 0; index < document.getElementsByClassName(_Filtro_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.item_filtro).length; index++) {
      var element = document.getElementsByClassName(_Filtro_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.item_filtro)[index];
      element.classList.remove(_Filtro_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.active);
      document.getElementsByClassName(_Filtro_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.icon_close_filtro)[index].classList.add('d-none');
    }

    ;
    if (!estadoFiltro.filtrando) return; //si no hay nada en buscador, puedo setear un active en algun elemento de la lista

    if (estadoFiltro.buscador.trim() === '') {
      //recorro el state para obtener las claves y agregar active el elemento correspondiente
      for (var key in estadoFiltro) {
        if (estadoFiltro[key] && estadoFiltro[key] !== '' && estadoFiltro[key] !== true) {
          //console.log(estadoFiltro[key]);
          if (document.getElementsByName("".concat(key, "-").concat(estadoFiltro[key]))[0]) {
            //pregunto si existe el elemento con el name del filtro para agregarle el active, si no existe lo creo. (si no existe es porque viene desde modal de marcas)
            console.log('!!!');
            document.getElementsByName("".concat(key, "-").concat(estadoFiltro[key]))[0].classList.add(_Filtro_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.active);
            document.getElementById("close-".concat(key, "-").concat(estadoFiltro[key])).classList.remove('d-none');
          } else {
            if (estadoFiltro.marca !== '') {
              //creo los elementos del item
              var newItemMarca = document.createElement('li');
              var divItemMarca = document.createElement('div');
              var spanItemMarca = document.createElement('span');
              var iconClose = document.createElement('svg');
              var marcaName = props.marcasReducer.marcas.filter(function (res) {
                return res.idMarca == estadoFiltro.marca;
              })[0].marca; //asigno las clases, atributos y eventos necesarios.

              divItemMarca.className = "".concat(_Filtro_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.item_filtro, " ").concat(_Filtro_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.active);
              divItemMarca.setAttribute('name', "marca-".concat(estadoFiltro.marca));
              divItemMarca.addEventListener('click', function () {
                return activarFiltro('marca', estadoFiltro.marca);
              });
              spanItemMarca.className = 'text-muted';
              spanItemMarca.innerHTML = marcaName;
              iconClose.innerHTML = "\n                                <svg aria-hidden=\"true\" focusable=\"false\" data-prefix=\"fas\" data-icon=\"times\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewbox=\"0 0 352 512\" class=\"svg-inline--fa fa-times fa-w-11 Filtro_icon_close_filtro__1xlv5\" id=\"close-marca-".concat(estadoFiltro.marca, "\">\n                                    <path fill=\"currentColor\" d=\"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z\"></path>\n                                </svg>\n                            ");
              iconClose.addEventListener('click', function () {
                return limpiarFiltro('marca');
              }); //voy ubicando los elementos dentro de cada padre

              divItemMarca.appendChild(spanItemMarca);
              newItemMarca.appendChild(divItemMarca);
              newItemMarca.appendChild(iconClose); //Obtengo el primer item de la lista y lo elimino, para tener siempre la misma cantidad de marcas en la lista.

              if (document.querySelector("#listaMarca")) {
                var firstItemMarca = document.querySelector("#listaMarca").children[0];
                var listaMarcas = document.querySelector("#listaMarca");
                listaMarcas.removeChild(firstItemMarca); //ahora agrego el item creado a la lista

                listaMarcas.appendChild(newItemMarca);
              }

              ;
            }
          }
        }
      }
    } //la primera vez que se carga el componente, filtrando es false, por eso pregunto para que no se ejecuta la funcion de ir a filtrar apenas se monte el componente. Sino que se ejecute cuando de verdad se quiera filtrar.


    if (estadoFiltro.filtrando) {
      var urlFiltro = armarUrlFiltro(); //armo la url que mando a la api para traer los resultados de lo filtrado.

      props.productosFiltrarProductos(urlFiltro);
    }

    ;
  };

  var limpiarFiltro = function limpiarFiltro(tipo) {
    switch (tipo) {
      case 'categoria':
        if (estadoFiltro.subcategoria === '' && estadoFiltro.marca === '') {
          setEstadoFiltro(_objectSpread(_objectSpread({}, estadoFiltro), {}, {
            categoria: '',
            filtrando: false
          }));
          props.productosTraerTodos({
            desde: 1,
            limiteDesktop: 20,
            limiteMobile: 10
          });

          if (props.location != 'productos') {
            next_router__WEBPACK_IMPORTED_MODULE_7___default.a.push('/productos');
          }
        } else {
          setEstadoFiltro(_objectSpread(_objectSpread({}, estadoFiltro), {}, {
            categoria: ''
          }));
        }

        break;

      case 'subcategoria':
        if (estadoFiltro.categoria === '' && estadoFiltro.marca === '') {
          setEstadoFiltro(_objectSpread(_objectSpread({}, estadoFiltro), {}, {
            subcategoria: '',
            filtrando: false
          }));
          props.productosTraerTodos({
            desde: 1,
            limiteDesktop: 20,
            limiteMobile: 10
          });

          if (props.location != 'productos') {
            next_router__WEBPACK_IMPORTED_MODULE_7___default.a.push('/productos');
          }
        } else {
          setEstadoFiltro(_objectSpread(_objectSpread({}, estadoFiltro), {}, {
            subcategoria: ''
          }));
        }

        break;

      case 'marca':
        if (estadoFiltro.categoria === '' && estadoFiltro.subcategoria == '') {
          setEstadoFiltro(_objectSpread(_objectSpread({}, estadoFiltro), {}, {
            marca: '',
            filtrando: false
          }));
          props.productosTraerTodos({
            desde: 1,
            limiteDesktop: 20,
            limiteMobile: 10
          });

          if (props.location != 'productos') {
            next_router__WEBPACK_IMPORTED_MODULE_7___default.a.push('/productos');
          }
        } else {
          setEstadoFiltro(_objectSpread(_objectSpread({}, estadoFiltro), {}, {
            marca: ''
          }));
        }

        break;

      default:
        setEstadoFiltro({
          filtrando: false,
          categoria: '',
          subcategoria: '',
          marca: '',
          buscador: ''
        });
        props.productosTraerTodos({
          desde: 1,
          limiteDesktop: 20,
          limiteMobile: 10
        });

        if (props.location != 'productos') {
          next_router__WEBPACK_IMPORTED_MODULE_7___default.a.push('/productos');
        }

        break;
    }
  };

  var closeFiltrosMobile = function closeFiltrosMobile() {
    document.getElementsByClassName(_Filtro_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.filtros__contanier)[0].classList.remove(_Filtro_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.show_filtros);
  };

  var armarUrlFiltro = function armarUrlFiltro() {
    var url = ''; //si buscador viene true, es porque viene desde el buscador del menu o modal de buscador(mobile).

    if (estadoFiltro.buscador !== '') return url += "buscar?busqueda=".concat(estadoFiltro.buscador);
    url += 'filtrar';

    if (estadoFiltro.categoria && estadoFiltro.categoria !== '') {
      url += "?categoria=".concat(estadoFiltro.categoria);
    }

    if (estadoFiltro.subcategoria && estadoFiltro.subcategoria !== '') {
      if (estadoFiltro.categoria !== '') {
        url += "&subcategoria=".concat(estadoFiltro.subcategoria);
      } else {
        url += "?subcategoria=".concat(estadoFiltro.subcategoria);
      }
    }

    if (estadoFiltro.marca && estadoFiltro.marca !== '') {
      if (estadoFiltro.categoria == '' && estadoFiltro.subcategoria == '') {
        url += "?marca=".concat(estadoFiltro.marca);
      } else {
        url += "&marca=".concat(estadoFiltro.marca);
      }
    }

    return url;
  };

  var showFiltros = function showFiltros() {
    var element = document.getElementsByClassName(_Filtro_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.filtros__contanier)[0];
    element.classList.toggle(_Filtro_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.show);
    document.getElementById('iconFiltroContainer').classList.toggle(_Filtro_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.rotar);
  };

  return __jsx("div", {
    className: _Filtro_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.filtros__contanier,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 290,
      columnNumber: 9
    }
  }, __jsx("button", {
    className: _Filtro_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.btn_close_filtro,
    onClick: showFiltros,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 291,
      columnNumber: 13
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_9__["FontAwesomeIcon"], {
    id: "iconFiltroContainer",
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__["faChevronRight"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 292,
      columnNumber: 17
    }
  })), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 294,
      columnNumber: 13
    }
  }, props.categoriasReducer.categorias.length == 0 || props.subcategoriaReducer.subcategorias.length == 0 || props.marcasReducer.marcas.length == 0 ? __jsx(_Loader__WEBPACK_IMPORTED_MODULE_15__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 295,
      columnNumber: 158
    }
  }) : __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, estadoFiltro.filtrando ? __jsx("button", {
    className: "boton bg-yellow mb-3",
    onClick: limpiarFiltro,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 297,
      columnNumber: 51
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_9__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__["faBroom"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 298,
      columnNumber: 29
    }
  }), " Limpiar Filtros") : null, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_9__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__["faTimes"],
    className: _Filtro_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.cerrar_filtro_mobile,
    onClick: closeFiltrosMobile,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 300,
      columnNumber: 25
    }
  }), __jsx("h4", {
    className: _Filtro_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.titulo_filtros,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 301,
      columnNumber: 25
    }
  }, "Mascota"), __jsx("ul", {
    className: _Filtro_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.lista,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 302,
      columnNumber: 25
    }
  }, props.categoriasReducer.categorias.map(function (cat) {
    return __jsx("li", {
      key: cat.idCategoria,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 305,
        columnNumber: 37
      }
    }, __jsx("div", {
      className: _Filtro_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.item_filtro,
      name: "categoria-".concat(cat.idCategoria),
      onClick: function onClick() {
        return activarFiltro('categoria', "".concat(cat.idCategoria));
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 306,
        columnNumber: 41
      }
    }, __jsx("span", {
      className: "text-muted",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 307,
        columnNumber: 45
      }
    }, cat.categoria)), __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_9__["FontAwesomeIcon"], {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__["faTimes"],
      className: _Filtro_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.icon_close_filtro + ' ' + "d-none",
      onClick: function onClick() {
        return limpiarFiltro('categoria');
      },
      id: "close-categoria-".concat(cat.idCategoria),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 309,
        columnNumber: 41
      }
    }));
  })), __jsx("h4", {
    className: _Filtro_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.titulo_filtros,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 316,
      columnNumber: 25
    }
  }, "Alimentos"), __jsx("ul", {
    className: _Filtro_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.lista,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 317,
      columnNumber: 25
    }
  }, props.subcategoriaReducer.subcategorias.map(function (sc) {
    return __jsx("li", {
      key: sc.idSubCategoria,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 320,
        columnNumber: 37
      }
    }, __jsx("div", {
      className: _Filtro_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.item_filtro,
      name: "subcategoria-".concat(sc.idSubCategoria),
      onClick: function onClick() {
        return activarFiltro('subcategoria', "".concat(sc.idSubCategoria));
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 321,
        columnNumber: 41
      }
    }, __jsx("span", {
      className: "text-muted",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 322,
        columnNumber: 45
      }
    }, sc.subcategoria)), __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_9__["FontAwesomeIcon"], {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__["faTimes"],
      className: _Filtro_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.icon_close_filtro + ' ' + "d-none",
      onClick: function onClick() {
        return limpiarFiltro('subcategoria');
      },
      id: "close-".concat("subcategoria-".concat(sc.idSubCategoria)),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 324,
        columnNumber: 41
      }
    }));
  })), __jsx("h4", {
    className: _Filtro_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.titulo_filtros,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 330,
      columnNumber: 25
    }
  }, "Marca"), __jsx("ul", {
    id: "listaMarca",
    className: _Filtro_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.sinBorderBottom + ' ' + _Filtro_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.lista,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 331,
      columnNumber: 25
    }
  }, props.marcasReducer.marcas.map(function (marca, key) {
    return key > 3 ? false : __jsx("li", {
      key: marca.idMarca,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 335,
        columnNumber: 37
      }
    }, __jsx("div", {
      className: _Filtro_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.item_filtro,
      name: "marca-".concat(marca.idMarca),
      onClick: function onClick() {
        return activarFiltro('marca', "".concat(marca.idMarca));
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 336,
        columnNumber: 41
      }
    }, __jsx("span", {
      className: "text-muted",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 337,
        columnNumber: 45
      }
    }, marca.marca)), __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_9__["FontAwesomeIcon"], {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__["faTimes"],
      className: _Filtro_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.icon_close_filtro + ' ' + "d-none",
      onClick: function onClick() {
        return limpiarFiltro('marca');
      },
      id: "close-marca-".concat(marca.idMarca),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 339,
        columnNumber: 41
      }
    }));
  })), __jsx("button", {
    onClick: function onClick() {
      return setModalIsOpen(true);
    },
    className: "boton bg-gris",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 344,
      columnNumber: 25
    }
  }, "Ver todas"))), !modalIsOpen ? null : __jsx(_Modal__WEBPACK_IMPORTED_MODULE_5__["default"], {
    closeModal: onCloseModal,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 349,
      columnNumber: 17
    }
  }, __jsx(_ModalMarca__WEBPACK_IMPORTED_MODULE_6__["default"], {
    closeModal: onCloseModal,
    activarFiltro: activarFiltro,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 350,
      columnNumber: 21
    }
  })));
};

_s(Filtro, "FGwg+kw4/nn04NGxJOyVJ2tOKB0=");

_c = Filtro;

var mapStateToProps = function mapStateToProps(_ref2) {
  var marcasReducer = _ref2.marcasReducer,
      productosReducer = _ref2.productosReducer,
      categoriasReducer = _ref2.categoriasReducer,
      subcategoriaReducer = _ref2.subcategoriaReducer;
  return {
    marcasReducer: marcasReducer,
    productosReducer: productosReducer,
    categoriasReducer: categoriasReducer,
    subcategoriaReducer: subcategoriaReducer
  };
};

var mapDispatchToProps = {
  marcasTraerTodas: marcasTraerTodas,
  productosFiltrarProductos: productosFiltrarProductos,
  productosTraerTodos: productosTraerTodos,
  categoriasTraerTodas: categoriasTraerTodas,
  subcategoriaTraerTodas: subcategoriaTraerTodas
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_10__["connect"])(mapStateToProps, mapDispatchToProps)(Filtro));

var _c;

$RefreshReg$(_c, "Filtro");

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

/***/ }),

/***/ "./src/components/Navbar/Navbar.module.css":
false

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRmlsdHJvL2luZGV4LmpzIl0sIm5hbWVzIjpbIm1hcmNhc1RyYWVyVG9kYXMiLCJtYXJjYXNBY3Rpb25zIiwicHJvZHVjdG9zRmlsdHJhclByb2R1Y3RvcyIsInByb2R1Y3Rvc0FjdGlvbnMiLCJwcm9kdWN0b3NUcmFlclRvZG9zIiwiY2F0ZWdvcmlhc1RyYWVyVG9kYXMiLCJjYXRlZ29yaWFzQWN0aW9ucyIsInN1YmNhdGVnb3JpYVRyYWVyVG9kYXMiLCJzdWJjYXRlZ29yaWFzQWN0aW9ucyIsIkZpbHRybyIsInByb3BzIiwidXNlU3RhdGUiLCJmaWx0cmFuZG8iLCJjYXRlZ29yaWEiLCJzdWJjYXRlZ29yaWEiLCJtYXJjYSIsImJ1c2NhZG9yIiwiZXN0YWRvRmlsdHJvIiwic2V0RXN0YWRvRmlsdHJvIiwibW9kYWxJc09wZW4iLCJzZXRNb2RhbElzT3BlbiIsIm9uQ2xvc2VNb2RhbCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJzdHlsZSIsIm92ZXJmbG93WSIsInVzZUVmZmVjdCIsImdldERhdGEiLCJtYXJjYXNSZWR1Y2VyIiwibWFyY2FzIiwibGVuZ3RoIiwiY2F0ZWdvcmlhc1JlZHVjZXIiLCJjYXRlZ29yaWFzIiwic3ViY2F0ZWdvcmlhUmVkdWNlciIsInN1YmNhdGVnb3JpYXMiLCJsb2NhdGlvbiIsImFjdGl2YXJGaWx0cm9Qb3JVcmwiLCJjb25zb2xlIiwibG9nIiwic3dpdGNoSXRlbUFjdGl2ZSIsInF1ZXJ5Iiwic2VhcmNoIiwiYWN0aXZhckZpbHRybyIsIk9iamVjdCIsImtleXMiLCJ0eXBlIiwiaW5kZXgiLCJ0aXBvRmlsdHJvIiwia2V5IiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsIkZpbHRyb1N0eWxlIiwiaXRlbV9maWx0cm8iLCJlbGVtZW50IiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiYWN0aXZlIiwiaWNvbl9jbG9zZV9maWx0cm8iLCJhZGQiLCJ0cmltIiwiZ2V0RWxlbWVudHNCeU5hbWUiLCJnZXRFbGVtZW50QnlJZCIsIm5ld0l0ZW1NYXJjYSIsImNyZWF0ZUVsZW1lbnQiLCJkaXZJdGVtTWFyY2EiLCJzcGFuSXRlbU1hcmNhIiwiaWNvbkNsb3NlIiwibWFyY2FOYW1lIiwiZmlsdGVyIiwicmVzIiwiaWRNYXJjYSIsImNsYXNzTmFtZSIsInNldEF0dHJpYnV0ZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJpbm5lckhUTUwiLCJsaW1waWFyRmlsdHJvIiwiYXBwZW5kQ2hpbGQiLCJxdWVyeVNlbGVjdG9yIiwiZmlyc3RJdGVtTWFyY2EiLCJjaGlsZHJlbiIsImxpc3RhTWFyY2FzIiwicmVtb3ZlQ2hpbGQiLCJ1cmxGaWx0cm8iLCJhcm1hclVybEZpbHRybyIsInRpcG8iLCJkZXNkZSIsImxpbWl0ZURlc2t0b3AiLCJsaW1pdGVNb2JpbGUiLCJSb3V0ZXIiLCJwdXNoIiwiY2xvc2VGaWx0cm9zTW9iaWxlIiwiZmlsdHJvc19fY29udGFuaWVyIiwic2hvd19maWx0cm9zIiwidXJsIiwic2hvd0ZpbHRyb3MiLCJ0b2dnbGUiLCJzaG93Iiwicm90YXIiLCJidG5fY2xvc2VfZmlsdHJvIiwiZmFDaGV2cm9uUmlnaHQiLCJmYUJyb29tIiwiZmFUaW1lcyIsImNlcnJhcl9maWx0cm9fbW9iaWxlIiwidGl0dWxvX2ZpbHRyb3MiLCJsaXN0YSIsIm1hcCIsImNhdCIsImlkQ2F0ZWdvcmlhIiwic2MiLCJpZFN1YkNhdGVnb3JpYSIsInNpbkJvcmRlckJvdHRvbSIsIm1hcFN0YXRlVG9Qcm9wcyIsInByb2R1Y3Rvc1JlZHVjZXIiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJjb25uZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtJQUVrQkEsZ0IsR0FBb0JDLHdFO0lBQ2RDLHlCLEdBQTRE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QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFoREosQ0FGUixDQUpKLEVBMERNLENBQUNELFdBQUYsR0FBZSxJQUFmLEdBQ0csTUFBQyw4Q0FBRDtBQUFPLGNBQVUsRUFBRUUsWUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsbURBQUQ7QUFBWSxjQUFVLEVBQUVBLFlBQXhCO0FBQXNDLGlCQUFhLEVBQUVxQixhQUFyRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosQ0EzRFIsQ0FESjtBQWtFSCxDQS9VRDs7R0FBTWpDLE07O0tBQUFBLE07O0FBaVZOLElBQU1xRyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLFFBQTBFO0FBQUEsTUFBeEVsRixhQUF3RSxTQUF4RUEsYUFBd0U7QUFBQSxNQUExRG1GLGdCQUEwRCxTQUExREEsZ0JBQTBEO0FBQUEsTUFBekNoRixpQkFBeUMsU0FBekNBLGlCQUF5QztBQUFBLE1BQXZCRSxtQkFBdUIsU0FBdkJBLG1CQUF1QjtBQUM5RixTQUFPO0FBQ0hMLGlCQUFhLEVBQWJBLGFBREc7QUFFSG1GLG9CQUFnQixFQUFoQkEsZ0JBRkc7QUFHSGhGLHFCQUFpQixFQUFqQkEsaUJBSEc7QUFJSEUsdUJBQW1CLEVBQW5CQTtBQUpHLEdBQVA7QUFNSCxDQVBEOztBQVNBLElBQU0rRSxrQkFBa0IsR0FBRztBQUN2QmhILGtCQUFnQixFQUFoQkEsZ0JBRHVCO0FBRXZCRSwyQkFBeUIsRUFBekJBLHlCQUZ1QjtBQUd2QkUscUJBQW1CLEVBQW5CQSxtQkFIdUI7QUFJdkJDLHNCQUFvQixFQUFwQkEsb0JBSnVCO0FBS3ZCRSx3QkFBc0IsRUFBdEJBO0FBTHVCLENBQTNCO0FBUWUwRywySEFBTyxDQUFDSCxlQUFELEVBQWlCRSxrQkFBakIsQ0FBUCxDQUE0Q3ZHLE1BQTVDLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvZHVjdG9zL1tbLi4uaW5kZXhdXS5jYzVkNDQyMWZiODViNjM2NWQ5OC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEZpbHRyb1N0eWxlIGZyb20gJy4vRmlsdHJvLm1vZHVsZS5jc3MnO1xyXG5pbXBvcnQgTW9kYWwgZnJvbSAnLi4vTW9kYWwnO1xyXG5pbXBvcnQgTW9kYWxNYXJjYSBmcm9tICcuLi9Nb2RhbE1hcmNhJztcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7IGZhVGltZXMsZmFCcm9vbSxmYUNoZXZyb25SaWdodCB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnNcIjtcclxuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgKiBhcyBwcm9kdWN0b3NBY3Rpb25zIGZyb20gJy4uLy4uLy4uL3N0b3JlL2FjdGlvbnMvcHJvZHVjdG9zQWN0aW9ucyc7XHJcbmltcG9ydCAqIGFzIG1hcmNhc0FjdGlvbnMgZnJvbSAnLi4vLi4vLi4vc3RvcmUvYWN0aW9ucy9tYXJjYXNBY3Rpb25zJztcclxuaW1wb3J0ICogYXMgY2F0ZWdvcmlhc0FjdGlvbnMgZnJvbSAnLi4vLi4vLi4vc3RvcmUvYWN0aW9ucy9jYXRlZ29yaWFzQWN0aW9uJztcclxuaW1wb3J0ICogYXMgc3ViY2F0ZWdvcmlhc0FjdGlvbnMgZnJvbSAnLi4vLi4vLi4vc3RvcmUvYWN0aW9ucy9zdWJjYXRlZ29yaWFzQWN0aW9uJztcclxuaW1wb3J0IExvYWRlciBmcm9tICcuLi9Mb2FkZXInO1xyXG5cclxuY29uc3Qge3RyYWVyVG9kYXM6bWFyY2FzVHJhZXJUb2Rhc30gPSBtYXJjYXNBY3Rpb25zO1xyXG5jb25zdCB7ZmlsdHJhclByb2R1Y3Rvczpwcm9kdWN0b3NGaWx0cmFyUHJvZHVjdG9zLHRyYWVyVG9kb3M6cHJvZHVjdG9zVHJhZXJUb2Rvc30gPSBwcm9kdWN0b3NBY3Rpb25zO1xyXG5jb25zdCB7dHJhZXJUb2RhczpjYXRlZ29yaWFzVHJhZXJUb2Rhc30gPSBjYXRlZ29yaWFzQWN0aW9ucztcclxuY29uc3Qge3RyYWVyVG9kYXM6c3ViY2F0ZWdvcmlhVHJhZXJUb2Rhc30gPSBzdWJjYXRlZ29yaWFzQWN0aW9ucztcclxuXHJcbmNvbnN0IEZpbHRybyA9IChwcm9wcykgPT4ge1xyXG5cclxuICAgIC8vc3RhdGUgZm9yIHRoZSBmaWx0ZXJzXHJcbiAgICBjb25zdCBbZXN0YWRvRmlsdHJvLCBzZXRFc3RhZG9GaWx0cm9dID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIGZpbHRyYW5kbzpmYWxzZSxcclxuICAgICAgICBjYXRlZ29yaWE6JycsXHJcbiAgICAgICAgc3ViY2F0ZWdvcmlhOicnLFxyXG4gICAgICAgIG1hcmNhOicnLFxyXG4gICAgICAgIGJ1c2NhZG9yOicnXHJcbiAgICB9KTtcclxuXHJcbiAgICAvL21hbmVqbyBkZSBNb2RhbCBtYXJjYXNcclxuICAgIGNvbnN0IFttb2RhbElzT3Blbiwgc2V0TW9kYWxJc09wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3Qgb25DbG9zZU1vZGFsID0gKCk9PntcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYm9keScpWzBdLnN0eWxlLm92ZXJmbG93WSA9ICdzY3JvbGwnO1xyXG4gICAgICAgIHNldE1vZGFsSXNPcGVuKGZhbHNlKTtcclxuICAgIH1cclxuXHJcbiAgICAvL2xvb3AgZGUgZWZlY3RvIHBhcmEgZWplY3V0YXIgc29sbyB1bmEgdmV6IGN1YW5kbyBlbCBjb21wb25lbnRlIHNlIG1vbnRlIGVuIGVsIGNhc28gZGUgcXVlIHNlIGVzdGUgZmlsdHJhbmRvIGRpcmVjdG8gZGVzZGUgbGEgdXJsXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGdldERhdGEoKTtcclxuICAgIH0sW10pO1xyXG4gICAgICAgIFxyXG4gICAgY29uc3QgZ2V0RGF0YSA9IGFzeW5jKCk9PntcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZihwcm9wcy5tYXJjYXNSZWR1Y2VyLm1hcmNhcy5sZW5ndGg9PT0wKXtcclxuICAgICAgICAgICAgICAgIGF3YWl0IHByb3BzLm1hcmNhc1RyYWVyVG9kYXMoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZihwcm9wcy5jYXRlZ29yaWFzUmVkdWNlci5jYXRlZ29yaWFzLmxlbmd0aD09PTApe1xyXG4gICAgICAgICAgICAgICAgYXdhaXQgcHJvcHMuY2F0ZWdvcmlhc1RyYWVyVG9kYXMoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZihwcm9wcy5zdWJjYXRlZ29yaWFSZWR1Y2VyLnN1YmNhdGVnb3JpYXMubGVuZ3RoPT09MCl7XHJcbiAgICAgICAgICAgICAgICBhd2FpdCBwcm9wcy5zdWJjYXRlZ29yaWFUcmFlclRvZGFzKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYocHJvcHMubG9jYXRpb24gIT09ICcvcHJvZHVjdG9zJyl7XHJcbiAgICAgICAgICAgICAgICBhY3RpdmFyRmlsdHJvUG9yVXJsKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vbG9vcCBkZSBlZmVjdG8gcGFyYSBoYWNlciByZW5kZXIgY2FkYSB2ZXogcXVlIHNlIGFncmVnYSBvIGVsaW1pbmEgdW4gZmlsdHJvXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHN3aXRjaEl0ZW1BY3RpdmUoKTtcclxuICAgIH0sIFtlc3RhZG9GaWx0cm9dKTtcclxuXHJcbiAgICBjb25zdCBhY3RpdmFyRmlsdHJvUG9yVXJsID0gKCk9PntcclxuICAgICAgICBpZihwcm9wcy5xdWVyeS5zZWFyY2gpe1xyXG4gICAgICAgICAgICByZXR1cm4gYWN0aXZhckZpbHRybyhPYmplY3Qua2V5cyhwcm9wcy5xdWVyeSlbMF0scHJvcHMucXVlcnkuc2VhcmNoKTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgcmV0dXJuIGFjdGl2YXJGaWx0cm8ocHJvcHMucXVlcnkudHlwZSxwcm9wcy5xdWVyeS5pbmRleFsxXSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGFjdGl2YXJGaWx0cm8gPSAodGlwb0ZpbHRybyxrZXkpPT57XHJcbiAgICAgICAgc3dpdGNoICh0aXBvRmlsdHJvKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ2NhdGVnb3JpYSc6XHJcbiAgICAgICAgICAgICAgICBzZXRFc3RhZG9GaWx0cm8oe1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLmVzdGFkb0ZpbHRybyxcclxuICAgICAgICAgICAgICAgICAgICBjYXRlZ29yaWE6a2V5LFxyXG4gICAgICAgICAgICAgICAgICAgIGJ1c2NhZG9yOicnLFxyXG4gICAgICAgICAgICAgICAgICAgIGZpbHRyYW5kbzp0cnVlXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdzdWJjYXRlZ29yaWEnOlxyXG4gICAgICAgICAgICAgICAgc2V0RXN0YWRvRmlsdHJvKHtcclxuICAgICAgICAgICAgICAgICAgICAuLi5lc3RhZG9GaWx0cm8sXHJcbiAgICAgICAgICAgICAgICAgICAgc3ViY2F0ZWdvcmlhOmtleSxcclxuICAgICAgICAgICAgICAgICAgICBidXNjYWRvcjonJyxcclxuICAgICAgICAgICAgICAgICAgICBmaWx0cmFuZG86dHJ1ZVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdtYXJjYSc6XHJcbiAgICAgICAgICAgICAgICBzZXRFc3RhZG9GaWx0cm8oe1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLmVzdGFkb0ZpbHRybyxcclxuICAgICAgICAgICAgICAgICAgICBtYXJjYTprZXksXHJcbiAgICAgICAgICAgICAgICAgICAgYnVzY2Fkb3I6JycsXHJcbiAgICAgICAgICAgICAgICAgICAgZmlsdHJhbmRvOnRydWVcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnc2VhcmNoJzpcclxuICAgICAgICAgICAgICAgIHNldEVzdGFkb0ZpbHRybyh7XHJcbiAgICAgICAgICAgICAgICAgICAgLi4uZXN0YWRvRmlsdHJvLFxyXG4gICAgICAgICAgICAgICAgICAgIGJ1c2NhZG9yOmtleSxcclxuICAgICAgICAgICAgICAgICAgICBmaWx0cmFuZG86dHJ1ZVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzd2l0Y2hJdGVtQWN0aXZlID0gKCk9PntcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhlc3RhZG9GaWx0cm8pO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShGaWx0cm9TdHlsZS5pdGVtX2ZpbHRybykubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKEZpbHRyb1N0eWxlLml0ZW1fZmlsdHJvKVtpbmRleF07XHJcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShGaWx0cm9TdHlsZS5hY3RpdmUpO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKEZpbHRyb1N0eWxlLmljb25fY2xvc2VfZmlsdHJvKVtpbmRleF0uY2xhc3NMaXN0LmFkZCgnZC1ub25lJyk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBpZighZXN0YWRvRmlsdHJvLmZpbHRyYW5kbykgcmV0dXJuO1xyXG4gICAgICAgIC8vc2kgbm8gaGF5IG5hZGEgZW4gYnVzY2Fkb3IsIHB1ZWRvIHNldGVhciB1biBhY3RpdmUgZW4gYWxndW4gZWxlbWVudG8gZGUgbGEgbGlzdGFcclxuICAgICAgICBpZihlc3RhZG9GaWx0cm8uYnVzY2Fkb3IudHJpbSgpPT09Jycpe1xyXG4gICAgICAgICAgICAvL3JlY29ycm8gZWwgc3RhdGUgcGFyYSBvYnRlbmVyIGxhcyBjbGF2ZXMgeSBhZ3JlZ2FyIGFjdGl2ZSBlbCBlbGVtZW50byBjb3JyZXNwb25kaWVudGVcclxuICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gZXN0YWRvRmlsdHJvKSB7XHJcbiAgICAgICAgICAgICAgICBpZihlc3RhZG9GaWx0cm9ba2V5XSAmJiBlc3RhZG9GaWx0cm9ba2V5XSE9PScnICYmIGVzdGFkb0ZpbHRyb1trZXldIT09dHJ1ZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhlc3RhZG9GaWx0cm9ba2V5XSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoYCR7a2V5fS0ke2VzdGFkb0ZpbHRyb1trZXldfWApWzBdKXsvL3ByZWd1bnRvIHNpIGV4aXN0ZSBlbCBlbGVtZW50byBjb24gZWwgbmFtZSBkZWwgZmlsdHJvIHBhcmEgYWdyZWdhcmxlIGVsIGFjdGl2ZSwgc2kgbm8gZXhpc3RlIGxvIGNyZW8uIChzaSBubyBleGlzdGUgZXMgcG9ycXVlIHZpZW5lIGRlc2RlIG1vZGFsIGRlIG1hcmNhcylcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJyEhIScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShgJHtrZXl9LSR7ZXN0YWRvRmlsdHJvW2tleV19YClbMF0uY2xhc3NMaXN0LmFkZChGaWx0cm9TdHlsZS5hY3RpdmUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgY2xvc2UtJHtrZXl9LSR7ZXN0YWRvRmlsdHJvW2tleV19YCkuY2xhc3NMaXN0LnJlbW92ZSgnZC1ub25lJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGVzdGFkb0ZpbHRyby5tYXJjYSE9PScnKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vY3JlbyBsb3MgZWxlbWVudG9zIGRlbCBpdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbmV3SXRlbU1hcmNhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkaXZJdGVtTWFyY2EgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzcGFuSXRlbU1hcmNhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGljb25DbG9zZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N2ZycpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBtYXJjYU5hbWUgPSBwcm9wcy5tYXJjYXNSZWR1Y2VyLm1hcmNhcy5maWx0ZXIocmVzPT5yZXMuaWRNYXJjYSA9PSBlc3RhZG9GaWx0cm8ubWFyY2EpWzBdLm1hcmNhO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vYXNpZ25vIGxhcyBjbGFzZXMsIGF0cmlidXRvcyB5IGV2ZW50b3MgbmVjZXNhcmlvcy5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpdkl0ZW1NYXJjYS5jbGFzc05hbWUgPWAke0ZpbHRyb1N0eWxlLml0ZW1fZmlsdHJvfSAke0ZpbHRyb1N0eWxlLmFjdGl2ZX1gO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGl2SXRlbU1hcmNhLnNldEF0dHJpYnV0ZSgnbmFtZScsYG1hcmNhLSR7ZXN0YWRvRmlsdHJvLm1hcmNhfWApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGl2SXRlbU1hcmNhLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+YWN0aXZhckZpbHRybygnbWFyY2EnLGVzdGFkb0ZpbHRyby5tYXJjYSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Bhbkl0ZW1NYXJjYS5jbGFzc05hbWUgPSAndGV4dC1tdXRlZCc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcGFuSXRlbU1hcmNhLmlubmVySFRNTCA9IG1hcmNhTmFtZTtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbkNsb3NlLmlubmVySFRNTCA9IGBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGZvY3VzYWJsZT1cImZhbHNlXCIgZGF0YS1wcmVmaXg9XCJmYXNcIiBkYXRhLWljb249XCJ0aW1lc1wiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld2JveD1cIjAgMCAzNTIgNTEyXCIgY2xhc3M9XCJzdmctaW5saW5lLS1mYSBmYS10aW1lcyBmYS13LTExIEZpbHRyb19pY29uX2Nsb3NlX2ZpbHRyb19fMXhsdjVcIiBpZD1cImNsb3NlLW1hcmNhLSR7ZXN0YWRvRmlsdHJvLm1hcmNhfVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0yNDIuNzIgMjU2bDEwMC4wNy0xMDAuMDdjMTIuMjgtMTIuMjggMTIuMjgtMzIuMTkgMC00NC40OGwtMjIuMjQtMjIuMjRjLTEyLjI4LTEyLjI4LTMyLjE5LTEyLjI4LTQ0LjQ4IDBMMTc2IDE4OS4yOCA3NS45MyA4OS4yMWMtMTIuMjgtMTIuMjgtMzIuMTktMTIuMjgtNDQuNDggMEw5LjIxIDExMS40NWMtMTIuMjggMTIuMjgtMTIuMjggMzIuMTkgMCA0NC40OEwxMDkuMjggMjU2IDkuMjEgMzU2LjA3Yy0xMi4yOCAxMi4yOC0xMi4yOCAzMi4xOSAwIDQ0LjQ4bDIyLjI0IDIyLjI0YzEyLjI4IDEyLjI4IDMyLjIgMTIuMjggNDQuNDggMEwxNzYgMzIyLjcybDEwMC4wNyAxMDAuMDdjMTIuMjggMTIuMjggMzIuMiAxMi4yOCA0NC40OCAwbDIyLjI0LTIyLjI0YzEyLjI4LTEyLjI4IDEyLjI4LTMyLjE5IDAtNDQuNDhMMjQyLjcyIDI1NnpcIj48L3BhdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbkNsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+bGltcGlhckZpbHRybygnbWFyY2EnKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy92b3kgdWJpY2FuZG8gbG9zIGVsZW1lbnRvcyBkZW50cm8gZGUgY2FkYSBwYWRyZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGl2SXRlbU1hcmNhLmFwcGVuZENoaWxkKHNwYW5JdGVtTWFyY2EpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3SXRlbU1hcmNhLmFwcGVuZENoaWxkKGRpdkl0ZW1NYXJjYSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdJdGVtTWFyY2EuYXBwZW5kQ2hpbGQoaWNvbkNsb3NlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9PYnRlbmdvIGVsIHByaW1lciBpdGVtIGRlIGxhIGxpc3RhIHkgbG8gZWxpbWlubywgcGFyYSB0ZW5lciBzaWVtcHJlIGxhIG1pc21hIGNhbnRpZGFkIGRlIG1hcmNhcyBlbiBsYSBsaXN0YS5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNsaXN0YU1hcmNhYCkpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBmaXJzdEl0ZW1NYXJjYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNsaXN0YU1hcmNhYCkuY2hpbGRyZW5bMF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGxpc3RhTWFyY2FzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI2xpc3RhTWFyY2FgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaXN0YU1hcmNhcy5yZW1vdmVDaGlsZChmaXJzdEl0ZW1NYXJjYSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9haG9yYSBhZ3JlZ28gZWwgaXRlbSBjcmVhZG8gYSBsYSBsaXN0YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpc3RhTWFyY2FzLmFwcGVuZENoaWxkKG5ld0l0ZW1NYXJjYSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vbGEgcHJpbWVyYSB2ZXogcXVlIHNlIGNhcmdhIGVsIGNvbXBvbmVudGUsIGZpbHRyYW5kbyBlcyBmYWxzZSwgcG9yIGVzbyBwcmVndW50byBwYXJhIHF1ZSBubyBzZSBlamVjdXRhIGxhIGZ1bmNpb24gZGUgaXIgYSBmaWx0cmFyIGFwZW5hcyBzZSBtb250ZSBlbCBjb21wb25lbnRlLiBTaW5vIHF1ZSBzZSBlamVjdXRlIGN1YW5kbyBkZSB2ZXJkYWQgc2UgcXVpZXJhIGZpbHRyYXIuXHJcbiAgICAgICAgaWYoZXN0YWRvRmlsdHJvLmZpbHRyYW5kbyl7XHJcbiAgICAgICAgICAgIGxldCB1cmxGaWx0cm8gPSBhcm1hclVybEZpbHRybygpOy8vYXJtbyBsYSB1cmwgcXVlIG1hbmRvIGEgbGEgYXBpIHBhcmEgdHJhZXIgbG9zIHJlc3VsdGFkb3MgZGUgbG8gZmlsdHJhZG8uXHJcbiAgICAgICAgICAgIHByb3BzLnByb2R1Y3Rvc0ZpbHRyYXJQcm9kdWN0b3ModXJsRmlsdHJvKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGxpbXBpYXJGaWx0cm8gPSB0aXBvPT57XHJcbiAgICAgICAgc3dpdGNoICh0aXBvKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ2NhdGVnb3JpYSc6XHJcbiAgICAgICAgICAgICAgICBpZihlc3RhZG9GaWx0cm8uc3ViY2F0ZWdvcmlhPT09JycgJiYgZXN0YWRvRmlsdHJvLm1hcmNhPT09Jycpe1xyXG4gICAgICAgICAgICAgICAgICAgIHNldEVzdGFkb0ZpbHRybyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLmVzdGFkb0ZpbHRybyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcmlhOicnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWx0cmFuZG86ZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICBwcm9wcy5wcm9kdWN0b3NUcmFlclRvZG9zKHtkZXNkZToxLGxpbWl0ZURlc2t0b3A6MjAsbGltaXRlTW9iaWxlOjEwfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYocHJvcHMubG9jYXRpb24hPSdwcm9kdWN0b3MnKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgUm91dGVyLnB1c2goJy9wcm9kdWN0b3MnKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICBzZXRFc3RhZG9GaWx0cm8oe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAuLi5lc3RhZG9GaWx0cm8sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3JpYTonJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ3N1YmNhdGVnb3JpYSc6XHJcbiAgICAgICAgICAgICAgICBpZihlc3RhZG9GaWx0cm8uY2F0ZWdvcmlhPT09JycgJiYgZXN0YWRvRmlsdHJvLm1hcmNhPT09Jycpe1xyXG4gICAgICAgICAgICAgICAgICAgIHNldEVzdGFkb0ZpbHRybyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLmVzdGFkb0ZpbHRybyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3ViY2F0ZWdvcmlhOicnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWx0cmFuZG86ZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICBwcm9wcy5wcm9kdWN0b3NUcmFlclRvZG9zKHtkZXNkZToxLGxpbWl0ZURlc2t0b3A6MjAsbGltaXRlTW9iaWxlOjEwfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYocHJvcHMubG9jYXRpb24hPSdwcm9kdWN0b3MnKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgUm91dGVyLnB1c2goJy9wcm9kdWN0b3MnKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICBzZXRFc3RhZG9GaWx0cm8oe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAuLi5lc3RhZG9GaWx0cm8sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1YmNhdGVnb3JpYTonJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ21hcmNhJzpcclxuICAgICAgICAgICAgICAgIGlmKGVzdGFkb0ZpbHRyby5jYXRlZ29yaWE9PT0nJyAmJiBlc3RhZG9GaWx0cm8uc3ViY2F0ZWdvcmlhPT0nJyl7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0RXN0YWRvRmlsdHJvKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLi4uZXN0YWRvRmlsdHJvLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJjYTonJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsdHJhbmRvOmZhbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvcHMucHJvZHVjdG9zVHJhZXJUb2Rvcyh7ZGVzZGU6MSxsaW1pdGVEZXNrdG9wOjIwLGxpbWl0ZU1vYmlsZToxMH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHByb3BzLmxvY2F0aW9uIT0ncHJvZHVjdG9zJyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFJvdXRlci5wdXNoKCcvcHJvZHVjdG9zJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBcclxuICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIHNldEVzdGFkb0ZpbHRybyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLmVzdGFkb0ZpbHRybyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyY2E6JydcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgc2V0RXN0YWRvRmlsdHJvKHtcclxuICAgICAgICAgICAgICAgICAgICBmaWx0cmFuZG86ZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcmlhOicnLFxyXG4gICAgICAgICAgICAgICAgICAgIHN1YmNhdGVnb3JpYTonJyxcclxuICAgICAgICAgICAgICAgICAgICBtYXJjYTonJyxcclxuICAgICAgICAgICAgICAgICAgICBidXNjYWRvcjonJ1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBwcm9wcy5wcm9kdWN0b3NUcmFlclRvZG9zKHtkZXNkZToxLGxpbWl0ZURlc2t0b3A6MjAsbGltaXRlTW9iaWxlOjEwfSk7XHJcbiAgICAgICAgICAgICAgICBpZihwcm9wcy5sb2NhdGlvbiE9J3Byb2R1Y3Rvcycpe1xyXG4gICAgICAgICAgICAgICAgICAgIFJvdXRlci5wdXNoKCcvcHJvZHVjdG9zJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjbG9zZUZpbHRyb3NNb2JpbGUgPSAoKT0+e1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoRmlsdHJvU3R5bGUuZmlsdHJvc19fY29udGFuaWVyKVswXS5jbGFzc0xpc3QucmVtb3ZlKEZpbHRyb1N0eWxlLnNob3dfZmlsdHJvcyk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgYXJtYXJVcmxGaWx0cm8gPSAoKT0+e1xyXG4gICAgICAgIGxldCB1cmwgPSAnJztcclxuICAgICAgICAvL3NpIGJ1c2NhZG9yIHZpZW5lIHRydWUsIGVzIHBvcnF1ZSB2aWVuZSBkZXNkZSBlbCBidXNjYWRvciBkZWwgbWVudSBvIG1vZGFsIGRlIGJ1c2NhZG9yKG1vYmlsZSkuXHJcbiAgICAgICAgaWYoZXN0YWRvRmlsdHJvLmJ1c2NhZG9yIT09JycpIHJldHVybiB1cmwgKz0gYGJ1c2Nhcj9idXNxdWVkYT0ke2VzdGFkb0ZpbHRyby5idXNjYWRvcn1gO1xyXG4gICAgICAgIHVybCArPSAnZmlsdHJhcic7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYoZXN0YWRvRmlsdHJvLmNhdGVnb3JpYSAmJiBlc3RhZG9GaWx0cm8uY2F0ZWdvcmlhICE9PSAnJyl7XHJcbiAgICAgICAgICAgIHVybCArPSBgP2NhdGVnb3JpYT0ke2VzdGFkb0ZpbHRyby5jYXRlZ29yaWF9YDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoZXN0YWRvRmlsdHJvLnN1YmNhdGVnb3JpYSAmJiBlc3RhZG9GaWx0cm8uc3ViY2F0ZWdvcmlhICE9PSAnJyl7XHJcbiAgICAgICAgICAgIGlmKGVzdGFkb0ZpbHRyby5jYXRlZ29yaWEhPT0gJycpe1xyXG4gICAgICAgICAgICAgICAgdXJsICs9IGAmc3ViY2F0ZWdvcmlhPSR7ZXN0YWRvRmlsdHJvLnN1YmNhdGVnb3JpYX1gOyBcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICB1cmwgKz0gYD9zdWJjYXRlZ29yaWE9JHtlc3RhZG9GaWx0cm8uc3ViY2F0ZWdvcmlhfWA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoZXN0YWRvRmlsdHJvLm1hcmNhICYmIGVzdGFkb0ZpbHRyby5tYXJjYSAhPT0gJycpe1xyXG4gICAgICAgICAgICBpZihlc3RhZG9GaWx0cm8uY2F0ZWdvcmlhID09ICcnICYmIGVzdGFkb0ZpbHRyby5zdWJjYXRlZ29yaWEgPT0gJycpe1xyXG4gICAgICAgICAgICAgICAgdXJsICs9IGA/bWFyY2E9JHtlc3RhZG9GaWx0cm8ubWFyY2F9YDtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICB1cmwgKz0gYCZtYXJjYT0ke2VzdGFkb0ZpbHRyby5tYXJjYX1gO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB1cmw7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc2hvd0ZpbHRyb3MgPSAoKT0+e1xyXG4gICAgICAgIGxldCBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShGaWx0cm9TdHlsZS5maWx0cm9zX19jb250YW5pZXIpWzBdO1xyXG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZShGaWx0cm9TdHlsZS5zaG93KTtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaWNvbkZpbHRyb0NvbnRhaW5lcicpLmNsYXNzTGlzdC50b2dnbGUoRmlsdHJvU3R5bGUucm90YXIpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17RmlsdHJvU3R5bGUuZmlsdHJvc19fY29udGFuaWVyfT5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e0ZpbHRyb1N0eWxlLmJ0bl9jbG9zZV9maWx0cm99IG9uQ2xpY2s9e3Nob3dGaWx0cm9zfT5cclxuICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWQ9XCJpY29uRmlsdHJvQ29udGFpbmVyXCIgaWNvbj17ZmFDaGV2cm9uUmlnaHR9Lz5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICB7KHByb3BzLmNhdGVnb3JpYXNSZWR1Y2VyLmNhdGVnb3JpYXMubGVuZ3RoPT0wIHx8IHByb3BzLnN1YmNhdGVnb3JpYVJlZHVjZXIuc3ViY2F0ZWdvcmlhcy5sZW5ndGg9PTAgfHwgcHJvcHMubWFyY2FzUmVkdWNlci5tYXJjYXMubGVuZ3RoPT0wKT88TG9hZGVyLz46XHJcbiAgICAgICAgICAgICAgICAgICAgPD4gIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7KGVzdGFkb0ZpbHRyby5maWx0cmFuZG8pPzxidXR0b24gY2xhc3NOYW1lPVwiYm90b24gYmcteWVsbG93IG1iLTNcIiBvbkNsaWNrPXtsaW1waWFyRmlsdHJvfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFCcm9vbX0vPiBMaW1waWFyIEZpbHRyb3NcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+Om51bGx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFUaW1lc30gY2xhc3NOYW1lPXtGaWx0cm9TdHlsZS5jZXJyYXJfZmlsdHJvX21vYmlsZX0gb25DbGljaz17Y2xvc2VGaWx0cm9zTW9iaWxlfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9e0ZpbHRyb1N0eWxlLnRpdHVsb19maWx0cm9zfT5NYXNjb3RhPC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT17RmlsdHJvU3R5bGUubGlzdGF9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzLmNhdGVnb3JpYXNSZWR1Y2VyLmNhdGVnb3JpYXMubWFwKGNhdD0+KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtjYXQuaWRDYXRlZ29yaWF9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e0ZpbHRyb1N0eWxlLml0ZW1fZmlsdHJvfSBuYW1lPXtgY2F0ZWdvcmlhLSR7Y2F0LmlkQ2F0ZWdvcmlhfWB9IG9uQ2xpY2s9eygpPT5hY3RpdmFyRmlsdHJvKCdjYXRlZ29yaWEnLGAke2NhdC5pZENhdGVnb3JpYX1gKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1tdXRlZFwiPntjYXQuY2F0ZWdvcmlhfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVRpbWVzfSBjbGFzc05hbWU9e0ZpbHRyb1N0eWxlLmljb25fY2xvc2VfZmlsdHJvICsgJyAnICsgYGQtbm9uZWB9IG9uQ2xpY2s9eygpPT5saW1waWFyRmlsdHJvKCdjYXRlZ29yaWEnKX0gaWQ9e2BjbG9zZS1jYXRlZ29yaWEtJHtjYXQuaWRDYXRlZ29yaWF9YH0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT17RmlsdHJvU3R5bGUudGl0dWxvX2ZpbHRyb3N9PkFsaW1lbnRvczwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9e0ZpbHRyb1N0eWxlLmxpc3RhfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wcy5zdWJjYXRlZ29yaWFSZWR1Y2VyLnN1YmNhdGVnb3JpYXMubWFwKHNjPT4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e3NjLmlkU3ViQ2F0ZWdvcmlhfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtGaWx0cm9TdHlsZS5pdGVtX2ZpbHRyb30gbmFtZT17YHN1YmNhdGVnb3JpYS0ke3NjLmlkU3ViQ2F0ZWdvcmlhfWB9IG9uQ2xpY2s9eygpPT5hY3RpdmFyRmlsdHJvKCdzdWJjYXRlZ29yaWEnLGAke3NjLmlkU3ViQ2F0ZWdvcmlhfWApfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkXCI+e3NjLnN1YmNhdGVnb3JpYX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFUaW1lc30gY2xhc3NOYW1lPXtGaWx0cm9TdHlsZS5pY29uX2Nsb3NlX2ZpbHRybyArICcgJyArIGBkLW5vbmVgfSBvbkNsaWNrPXsoKT0+bGltcGlhckZpbHRybygnc3ViY2F0ZWdvcmlhJyl9IGlkPXtgY2xvc2UtJHtgc3ViY2F0ZWdvcmlhLSR7c2MuaWRTdWJDYXRlZ29yaWF9YH1gfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9e0ZpbHRyb1N0eWxlLnRpdHVsb19maWx0cm9zfT5NYXJjYTwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBpZD1cImxpc3RhTWFyY2FcIiBjbGFzc05hbWU9e0ZpbHRyb1N0eWxlLnNpbkJvcmRlckJvdHRvbSsgJyAnICsgRmlsdHJvU3R5bGUubGlzdGF9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzLm1hcmNhc1JlZHVjZXIubWFyY2FzLm1hcCgobWFyY2Esa2V5KT0+KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoa2V5PjMpP2ZhbHNlOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXttYXJjYS5pZE1hcmNhfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtGaWx0cm9TdHlsZS5pdGVtX2ZpbHRyb30gbmFtZT17YG1hcmNhLSR7bWFyY2EuaWRNYXJjYX1gfSBvbkNsaWNrPXsoKT0+YWN0aXZhckZpbHRybygnbWFyY2EnLGAke21hcmNhLmlkTWFyY2F9YCl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtbXV0ZWRcIj57bWFyY2EubWFyY2F9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhVGltZXN9IGNsYXNzTmFtZT17RmlsdHJvU3R5bGUuaWNvbl9jbG9zZV9maWx0cm8gKyAnICcgKyBgZC1ub25lYH0gb25DbGljaz17KCk9PmxpbXBpYXJGaWx0cm8oJ21hcmNhJyl9IGlkPXtgY2xvc2UtbWFyY2EtJHttYXJjYS5pZE1hcmNhfWB9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpPT5zZXRNb2RhbElzT3Blbih0cnVlKX0gY2xhc3NOYW1lPVwiYm90b24gYmctZ3Jpc1wiPlZlciB0b2RhczwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgeyghbW9kYWxJc09wZW4pP251bGw6XHJcbiAgICAgICAgICAgICAgICA8TW9kYWwgY2xvc2VNb2RhbD17b25DbG9zZU1vZGFsfT5cclxuICAgICAgICAgICAgICAgICAgICA8TW9kYWxNYXJjYSBjbG9zZU1vZGFsPXtvbkNsb3NlTW9kYWx9IGFjdGl2YXJGaWx0cm89e2FjdGl2YXJGaWx0cm99Lz5cclxuICAgICAgICAgICAgICAgIDwvTW9kYWw+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9ICh7bWFyY2FzUmVkdWNlcixwcm9kdWN0b3NSZWR1Y2VyLGNhdGVnb3JpYXNSZWR1Y2VyLHN1YmNhdGVnb3JpYVJlZHVjZXJ9KT0+e1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBtYXJjYXNSZWR1Y2VyLFxyXG4gICAgICAgIHByb2R1Y3Rvc1JlZHVjZXIsXHJcbiAgICAgICAgY2F0ZWdvcmlhc1JlZHVjZXIsXHJcbiAgICAgICAgc3ViY2F0ZWdvcmlhUmVkdWNlclxyXG4gICAgfTtcclxufVxyXG5cclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0ge1xyXG4gICAgbWFyY2FzVHJhZXJUb2RhcyxcclxuICAgIHByb2R1Y3Rvc0ZpbHRyYXJQcm9kdWN0b3MsXHJcbiAgICBwcm9kdWN0b3NUcmFlclRvZG9zLFxyXG4gICAgY2F0ZWdvcmlhc1RyYWVyVG9kYXMsXHJcbiAgICBzdWJjYXRlZ29yaWFUcmFlclRvZGFzXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLG1hcERpc3BhdGNoVG9Qcm9wcykoRmlsdHJvKTsiXSwic291cmNlUm9vdCI6IiJ9