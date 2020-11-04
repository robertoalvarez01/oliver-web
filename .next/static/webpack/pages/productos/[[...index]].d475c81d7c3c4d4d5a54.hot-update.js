webpackHotUpdate_N_E("pages/productos/[[...index]]",{

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
/* harmony import */ var _store_actions_subproductosActions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../store/actions/subproductosActions */ "./store/actions/subproductosActions.js");
/* harmony import */ var _store_actions_marcasActions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../store/actions/marcasActions */ "./store/actions/marcasActions.js");
/* harmony import */ var _store_actions_categoriasAction__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../store/actions/categoriasAction */ "./store/actions/categoriasAction.js");
/* harmony import */ var _store_actions_subcategoriasAction__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../store/actions/subcategoriasAction */ "./store/actions/subcategoriasAction.js");
/* harmony import */ var _Loader__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../Loader */ "./src/components/Loader/index.js");




var _this = undefined,
    _jsxFileName = "C:\\Users\\franc\\Documents\\oliver-2\\oliver-sitio\\src\\components\\Filtro\\index.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }














var marcasTraerTodas = _store_actions_marcasActions__WEBPACK_IMPORTED_MODULE_12__["traerTodas"];
var subproductosFiltrarProductos = _store_actions_subproductosActions__WEBPACK_IMPORTED_MODULE_11__["filtrarProductos"],
    subproductosTraerTodos = _store_actions_subproductosActions__WEBPACK_IMPORTED_MODULE_11__["traerTodos"];
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
    return activarFiltro(props.query.type, props.query.index[1]);
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

      case 'buscador':
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

      props.subproductosFiltrarProductos(urlFiltro);
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
          props.subproductosTraerTodos();

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
          props.subproductosTraerTodos();

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
        props.subproductosTraerTodos();
        document.getElementById('label__filtro-busqueda').classList.add('d-none');

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
    var url = 'filtrar'; //si buscador viene true, es porque viene desde el buscador del menu o modal de buscador(mobile).

    if (estadoFiltro.buscador !== '') return url += "?buscar=".concat(estadoFiltro.buscador);
    var categoria = estadoFiltro.categoria,
        subcategoria = estadoFiltro.subcategoria,
        marca = estadoFiltro.marca;

    if (categoria && categoria !== '') {
      url += "?categoria=".concat(estadoFiltro.categoria);
    }

    if (estadoFiltro.subcategoria && estadoFiltro.subcategoria !== '') {
      if (categoria !== '') {
        url += "&subcategoria=".concat(estadoFiltro.subcategoria);
      } else {
        url += "?subcategoria=".concat(estadoFiltro.subcategoria);
      }
    }

    if (marca && marca !== '') {
      if (categoria !== '' && subcategoria !== '') {
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
      lineNumber: 286,
      columnNumber: 9
    }
  }, __jsx("button", {
    className: _Filtro_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.btn_close_filtro,
    onClick: showFiltros,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 287,
      columnNumber: 13
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_9__["FontAwesomeIcon"], {
    id: "iconFiltroContainer",
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__["faChevronRight"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 288,
      columnNumber: 17
    }
  })), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 290,
      columnNumber: 13
    }
  }, props.categoriasReducer.categorias.length == 0 || props.subcategoriaReducer.subcategorias.length == 0 || props.marcasReducer.marcas.length == 0 ? __jsx(_Loader__WEBPACK_IMPORTED_MODULE_15__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 291,
      columnNumber: 158
    }
  }) : __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, estadoFiltro.filtrando ? __jsx("button", {
    className: "boton bg-yellow mb-3",
    onClick: limpiarFiltro,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 293,
      columnNumber: 51
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_9__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__["faBroom"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 294,
      columnNumber: 29
    }
  }), " Limpiar Filtros") : null, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_9__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__["faTimes"],
    className: _Filtro_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.cerrar_filtro_mobile,
    onClick: closeFiltrosMobile,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 296,
      columnNumber: 25
    }
  }), __jsx("h4", {
    className: _Filtro_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.titulo_filtros,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 297,
      columnNumber: 25
    }
  }, "Mascota"), __jsx("ul", {
    className: _Filtro_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.lista,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 298,
      columnNumber: 25
    }
  }, props.categoriasReducer.categorias.map(function (cat) {
    return __jsx("li", {
      key: cat.idCategoria,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 301,
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
        lineNumber: 302,
        columnNumber: 41
      }
    }, __jsx("span", {
      className: "text-muted",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 303,
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
        lineNumber: 305,
        columnNumber: 41
      }
    }));
  })), __jsx("h4", {
    className: _Filtro_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.titulo_filtros,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 312,
      columnNumber: 25
    }
  }, "Alimentos"), __jsx("ul", {
    className: _Filtro_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.lista,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 313,
      columnNumber: 25
    }
  }, props.subcategoriaReducer.subcategorias.map(function (sc) {
    return __jsx("li", {
      key: sc.idSubCategoria,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 316,
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
        lineNumber: 317,
        columnNumber: 41
      }
    }, __jsx("span", {
      className: "text-muted",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 318,
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
        lineNumber: 320,
        columnNumber: 41
      }
    }));
  })), __jsx("h4", {
    className: _Filtro_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.titulo_filtros,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 326,
      columnNumber: 25
    }
  }, "Marca"), __jsx("ul", {
    id: "listaMarca",
    className: _Filtro_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.sinBorderBottom + ' ' + _Filtro_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.lista,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 327,
      columnNumber: 25
    }
  }, props.marcasReducer.marcas.map(function (marca, key) {
    return key > 3 ? false : __jsx("li", {
      key: marca.idMarca,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 331,
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
        lineNumber: 332,
        columnNumber: 41
      }
    }, __jsx("span", {
      className: "text-muted",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 333,
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
        lineNumber: 335,
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
      lineNumber: 340,
      columnNumber: 25
    }
  }, "Ver todas"))), !modalIsOpen ? null : __jsx(_Modal__WEBPACK_IMPORTED_MODULE_5__["default"], {
    closeModal: onCloseModal,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 345,
      columnNumber: 17
    }
  }, __jsx(_ModalMarca__WEBPACK_IMPORTED_MODULE_6__["default"], {
    closeModal: onCloseModal,
    activarFiltro: activarFiltro,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 346,
      columnNumber: 21
    }
  })));
};

_s(Filtro, "FGwg+kw4/nn04NGxJOyVJ2tOKB0=");

_c = Filtro;

var mapStateToProps = function mapStateToProps(_ref2) {
  var marcasReducer = _ref2.marcasReducer,
      subproductosReducer = _ref2.subproductosReducer,
      categoriasReducer = _ref2.categoriasReducer,
      subcategoriaReducer = _ref2.subcategoriaReducer;
  return {
    marcasReducer: marcasReducer,
    subproductosReducer: subproductosReducer,
    categoriasReducer: categoriasReducer,
    subcategoriaReducer: subcategoriaReducer
  };
};

var mapDispatchToProps = {
  marcasTraerTodas: marcasTraerTodas,
  subproductosFiltrarProductos: subproductosFiltrarProductos,
  subproductosTraerTodos: subproductosTraerTodos,
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRmlsdHJvL2luZGV4LmpzIl0sIm5hbWVzIjpbIm1hcmNhc1RyYWVyVG9kYXMiLCJtYXJjYXNBY3Rpb25zIiwic3VicHJvZHVjdG9zRmlsdHJhclByb2R1Y3RvcyIsInN1YnByb2R1Y3Rvc0FjdGlvbnMiLCJzdWJwcm9kdWN0b3NUcmFlclRvZG9zIiwiY2F0ZWdvcmlhc1RyYWVyVG9kYXMiLCJjYXRlZ29yaWFzQWN0aW9ucyIsInN1YmNhdGVnb3JpYVRyYWVyVG9kYXMiLCJzdWJjYXRlZ29yaWFzQWN0aW9ucyIsIkZpbHRybyIsInByb3BzIiwidXNlU3RhdGUiLCJmaWx0cmFuZG8iLCJjYXRlZ29yaWEiLCJzdWJjYXRlZ29yaWEiLCJtYXJjYSIsImJ1c2NhZG9yIiwiZXN0YWRvRmlsdHJvIiwic2V0RXN0YWRvRmlsdHJvIiwibW9kYWxJc09wZW4iLCJzZXRNb2RhbElzT3BlbiIsIm9uQ2xvc2VNb2RhbCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJzdHlsZSIsIm92ZXJmbG93WSIsInVzZUVmZmVjdCIsImdldERhdGEiLCJtYXJjYXNSZWR1Y2VyIiwibWFyY2FzIiwibGVuZ3RoIiwiY2F0ZWdvcmlhc1JlZHVjZXIiLCJjYXRlZ29yaWFzIiwic3ViY2F0ZWdvcmlhUmVkdWNlciIsInN1YmNhdGVnb3JpYXMiLCJsb2NhdGlvbiIsImFjdGl2YXJGaWx0cm9Qb3JVcmwiLCJjb25zb2xlIiwibG9nIiwic3dpdGNoSXRlbUFjdGl2ZSIsImFjdGl2YXJGaWx0cm8iLCJxdWVyeSIsInR5cGUiLCJpbmRleCIsInRpcG9GaWx0cm8iLCJrZXkiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiRmlsdHJvU3R5bGUiLCJpdGVtX2ZpbHRybyIsImVsZW1lbnQiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJhY3RpdmUiLCJpY29uX2Nsb3NlX2ZpbHRybyIsImFkZCIsInRyaW0iLCJnZXRFbGVtZW50c0J5TmFtZSIsImdldEVsZW1lbnRCeUlkIiwibmV3SXRlbU1hcmNhIiwiY3JlYXRlRWxlbWVudCIsImRpdkl0ZW1NYXJjYSIsInNwYW5JdGVtTWFyY2EiLCJpY29uQ2xvc2UiLCJtYXJjYU5hbWUiLCJmaWx0ZXIiLCJyZXMiLCJpZE1hcmNhIiwiY2xhc3NOYW1lIiwic2V0QXR0cmlidXRlIiwiYWRkRXZlbnRMaXN0ZW5lciIsImlubmVySFRNTCIsImxpbXBpYXJGaWx0cm8iLCJhcHBlbmRDaGlsZCIsInF1ZXJ5U2VsZWN0b3IiLCJmaXJzdEl0ZW1NYXJjYSIsImNoaWxkcmVuIiwibGlzdGFNYXJjYXMiLCJyZW1vdmVDaGlsZCIsInVybEZpbHRybyIsImFybWFyVXJsRmlsdHJvIiwidGlwbyIsIlJvdXRlciIsInB1c2giLCJjbG9zZUZpbHRyb3NNb2JpbGUiLCJmaWx0cm9zX19jb250YW5pZXIiLCJzaG93X2ZpbHRyb3MiLCJ1cmwiLCJzaG93RmlsdHJvcyIsInRvZ2dsZSIsInNob3ciLCJyb3RhciIsImJ0bl9jbG9zZV9maWx0cm8iLCJmYUNoZXZyb25SaWdodCIsImZhQnJvb20iLCJmYVRpbWVzIiwiY2VycmFyX2ZpbHRyb19tb2JpbGUiLCJ0aXR1bG9fZmlsdHJvcyIsImxpc3RhIiwibWFwIiwiY2F0IiwiaWRDYXRlZ29yaWEiLCJzYyIsImlkU3ViQ2F0ZWdvcmlhIiwic2luQm9yZGVyQm90dG9tIiwibWFwU3RhdGVUb1Byb3BzIiwic3VicHJvZHVjdG9zUmVkdWNlciIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImNvbm5lY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0lBRWtCQSxnQixHQUFvQkMsd0U7SUFDZEMsNEIsR0FBa0VDLG9GO0lBQTFCQyxzQixHQUEwQkQsOEU7SUFDeEVFLG9CLEdBQXdCQywyRTtJQUN4QkMsc0Is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QixHQUFHO0FBQ3ZCMUcsa0JBQWdCLEVBQWhCQSxnQkFEdUI7QUFFdkJFLDhCQUE0QixFQUE1QkEsNEJBRnVCO0FBR3ZCRSx3QkFBc0IsRUFBdEJBLHNCQUh1QjtBQUl2QkMsc0JBQW9CLEVBQXBCQSxvQkFKdUI7QUFLdkJFLHdCQUFzQixFQUF0QkE7QUFMdUIsQ0FBM0I7QUFRZW9HLDJIQUFPLENBQUNILGVBQUQsRUFBaUJFLGtCQUFqQixDQUFQLENBQTRDakcsTUFBNUMsQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9kdWN0b3MvW1suLi5pbmRleF1dLmQ0NzVjODFkN2MzYzRkNGQ1YTU0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgRmlsdHJvU3R5bGUgZnJvbSAnLi9GaWx0cm8ubW9kdWxlLmNzcyc7XHJcbmltcG9ydCBNb2RhbCBmcm9tICcuLi9Nb2RhbCc7XHJcbmltcG9ydCBNb2RhbE1hcmNhIGZyb20gJy4uL01vZGFsTWFyY2EnO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgZmFUaW1lcyxmYUJyb29tLGZhQ2hldnJvblJpZ2h0IH0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29uc1wiO1xyXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tIFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCI7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCAqIGFzIHN1YnByb2R1Y3Rvc0FjdGlvbnMgZnJvbSAnLi4vLi4vLi4vc3RvcmUvYWN0aW9ucy9zdWJwcm9kdWN0b3NBY3Rpb25zJztcclxuaW1wb3J0ICogYXMgbWFyY2FzQWN0aW9ucyBmcm9tICcuLi8uLi8uLi9zdG9yZS9hY3Rpb25zL21hcmNhc0FjdGlvbnMnO1xyXG5pbXBvcnQgKiBhcyBjYXRlZ29yaWFzQWN0aW9ucyBmcm9tICcuLi8uLi8uLi9zdG9yZS9hY3Rpb25zL2NhdGVnb3JpYXNBY3Rpb24nO1xyXG5pbXBvcnQgKiBhcyBzdWJjYXRlZ29yaWFzQWN0aW9ucyBmcm9tICcuLi8uLi8uLi9zdG9yZS9hY3Rpb25zL3N1YmNhdGVnb3JpYXNBY3Rpb24nO1xyXG5pbXBvcnQgTG9hZGVyIGZyb20gJy4uL0xvYWRlcic7XHJcblxyXG5jb25zdCB7dHJhZXJUb2RhczptYXJjYXNUcmFlclRvZGFzfSA9IG1hcmNhc0FjdGlvbnM7XHJcbmNvbnN0IHtmaWx0cmFyUHJvZHVjdG9zOnN1YnByb2R1Y3Rvc0ZpbHRyYXJQcm9kdWN0b3MsdHJhZXJUb2RvczpzdWJwcm9kdWN0b3NUcmFlclRvZG9zfSA9IHN1YnByb2R1Y3Rvc0FjdGlvbnM7XHJcbmNvbnN0IHt0cmFlclRvZGFzOmNhdGVnb3JpYXNUcmFlclRvZGFzfSA9IGNhdGVnb3JpYXNBY3Rpb25zO1xyXG5jb25zdCB7dHJhZXJUb2RhczpzdWJjYXRlZ29yaWFUcmFlclRvZGFzfSA9IHN1YmNhdGVnb3JpYXNBY3Rpb25zO1xyXG5cclxuY29uc3QgRmlsdHJvID0gKHByb3BzKSA9PiB7XHJcblxyXG4gICAgLy9zdGF0ZSBmb3IgdGhlIGZpbHRlcnNcclxuICAgIGNvbnN0IFtlc3RhZG9GaWx0cm8sIHNldEVzdGFkb0ZpbHRyb10gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgZmlsdHJhbmRvOmZhbHNlLFxyXG4gICAgICAgIGNhdGVnb3JpYTonJyxcclxuICAgICAgICBzdWJjYXRlZ29yaWE6JycsXHJcbiAgICAgICAgbWFyY2E6JycsXHJcbiAgICAgICAgYnVzY2Fkb3I6JydcclxuICAgIH0pO1xyXG5cclxuICAgIC8vbWFuZWpvIGRlIE1vZGFsIG1hcmNhc1xyXG4gICAgY29uc3QgW21vZGFsSXNPcGVuLCBzZXRNb2RhbElzT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBvbkNsb3NlTW9kYWwgPSAoKT0+e1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdib2R5JylbMF0uc3R5bGUub3ZlcmZsb3dZID0gJ3Njcm9sbCc7XHJcbiAgICAgICAgc2V0TW9kYWxJc09wZW4oZmFsc2UpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vbG9vcCBkZSBlZmVjdG8gcGFyYSBlamVjdXRhciBzb2xvIHVuYSB2ZXogY3VhbmRvIGVsIGNvbXBvbmVudGUgc2UgbW9udGUgZW4gZWwgY2FzbyBkZSBxdWUgc2UgZXN0ZSBmaWx0cmFuZG8gZGlyZWN0byBkZXNkZSBsYSB1cmxcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgZ2V0RGF0YSgpO1xyXG4gICAgfSxbXSk7XHJcbiAgICAgICAgXHJcbiAgICBjb25zdCBnZXREYXRhID0gYXN5bmMoKT0+e1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmKHByb3BzLm1hcmNhc1JlZHVjZXIubWFyY2FzLmxlbmd0aD09PTApe1xyXG4gICAgICAgICAgICAgICAgYXdhaXQgcHJvcHMubWFyY2FzVHJhZXJUb2RhcygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKHByb3BzLmNhdGVnb3JpYXNSZWR1Y2VyLmNhdGVnb3JpYXMubGVuZ3RoPT09MCl7XHJcbiAgICAgICAgICAgICAgICBhd2FpdCBwcm9wcy5jYXRlZ29yaWFzVHJhZXJUb2RhcygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKHByb3BzLnN1YmNhdGVnb3JpYVJlZHVjZXIuc3ViY2F0ZWdvcmlhcy5sZW5ndGg9PT0wKXtcclxuICAgICAgICAgICAgICAgIGF3YWl0IHByb3BzLnN1YmNhdGVnb3JpYVRyYWVyVG9kYXMoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZihwcm9wcy5sb2NhdGlvbiAhPT0gJy9wcm9kdWN0b3MnKXtcclxuICAgICAgICAgICAgICAgIGFjdGl2YXJGaWx0cm9Qb3JVcmwoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy9sb29wIGRlIGVmZWN0byBwYXJhIGhhY2VyIHJlbmRlciBjYWRhIHZleiBxdWUgc2UgYWdyZWdhIG8gZWxpbWluYSB1biBmaWx0cm9cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgc3dpdGNoSXRlbUFjdGl2ZSgpO1xyXG4gICAgfSwgW2VzdGFkb0ZpbHRyb10pO1xyXG5cclxuICAgIGNvbnN0IGFjdGl2YXJGaWx0cm9Qb3JVcmwgPSAoKT0+e1xyXG4gICAgICAgIHJldHVybiBhY3RpdmFyRmlsdHJvKHByb3BzLnF1ZXJ5LnR5cGUscHJvcHMucXVlcnkuaW5kZXhbMV0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGFjdGl2YXJGaWx0cm8gPSAodGlwb0ZpbHRybyxrZXkpPT57XHJcbiAgICAgICAgc3dpdGNoICh0aXBvRmlsdHJvKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ2NhdGVnb3JpYSc6XHJcbiAgICAgICAgICAgICAgICBzZXRFc3RhZG9GaWx0cm8oe1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLmVzdGFkb0ZpbHRybyxcclxuICAgICAgICAgICAgICAgICAgICBjYXRlZ29yaWE6a2V5LFxyXG4gICAgICAgICAgICAgICAgICAgIGJ1c2NhZG9yOicnLFxyXG4gICAgICAgICAgICAgICAgICAgIGZpbHRyYW5kbzp0cnVlXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdzdWJjYXRlZ29yaWEnOlxyXG4gICAgICAgICAgICAgICAgc2V0RXN0YWRvRmlsdHJvKHtcclxuICAgICAgICAgICAgICAgICAgICAuLi5lc3RhZG9GaWx0cm8sXHJcbiAgICAgICAgICAgICAgICAgICAgc3ViY2F0ZWdvcmlhOmtleSxcclxuICAgICAgICAgICAgICAgICAgICBidXNjYWRvcjonJyxcclxuICAgICAgICAgICAgICAgICAgICBmaWx0cmFuZG86dHJ1ZVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdtYXJjYSc6XHJcbiAgICAgICAgICAgICAgICBzZXRFc3RhZG9GaWx0cm8oe1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLmVzdGFkb0ZpbHRybyxcclxuICAgICAgICAgICAgICAgICAgICBtYXJjYTprZXksXHJcbiAgICAgICAgICAgICAgICAgICAgYnVzY2Fkb3I6JycsXHJcbiAgICAgICAgICAgICAgICAgICAgZmlsdHJhbmRvOnRydWVcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnYnVzY2Fkb3InOlxyXG4gICAgICAgICAgICAgICAgc2V0RXN0YWRvRmlsdHJvKHtcclxuICAgICAgICAgICAgICAgICAgICAuLi5lc3RhZG9GaWx0cm8sXHJcbiAgICAgICAgICAgICAgICAgICAgYnVzY2Fkb3I6a2V5LFxyXG4gICAgICAgICAgICAgICAgICAgIGZpbHRyYW5kbzp0cnVlXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHN3aXRjaEl0ZW1BY3RpdmUgPSAoKT0+e1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGVzdGFkb0ZpbHRybyk7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKEZpbHRyb1N0eWxlLml0ZW1fZmlsdHJvKS5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoRmlsdHJvU3R5bGUuaXRlbV9maWx0cm8pW2luZGV4XTtcclxuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKEZpbHRyb1N0eWxlLmFjdGl2ZSk7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoRmlsdHJvU3R5bGUuaWNvbl9jbG9zZV9maWx0cm8pW2luZGV4XS5jbGFzc0xpc3QuYWRkKCdkLW5vbmUnKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmKCFlc3RhZG9GaWx0cm8uZmlsdHJhbmRvKSByZXR1cm47XHJcbiAgICAgICAgLy9zaSBubyBoYXkgbmFkYSBlbiBidXNjYWRvciwgcHVlZG8gc2V0ZWFyIHVuIGFjdGl2ZSBlbiBhbGd1biBlbGVtZW50byBkZSBsYSBsaXN0YVxyXG4gICAgICAgIGlmKGVzdGFkb0ZpbHRyby5idXNjYWRvci50cmltKCk9PT0nJyl7XHJcbiAgICAgICAgICAgIC8vcmVjb3JybyBlbCBzdGF0ZSBwYXJhIG9idGVuZXIgbGFzIGNsYXZlcyB5IGFncmVnYXIgYWN0aXZlIGVsIGVsZW1lbnRvIGNvcnJlc3BvbmRpZW50ZVxyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBlc3RhZG9GaWx0cm8pIHtcclxuICAgICAgICAgICAgICAgIGlmKGVzdGFkb0ZpbHRyb1trZXldICYmIGVzdGFkb0ZpbHRyb1trZXldIT09JycgJiYgZXN0YWRvRmlsdHJvW2tleV0hPT10cnVlKXtcclxuICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKGVzdGFkb0ZpbHRyb1trZXldKTtcclxuICAgICAgICAgICAgICAgICAgICBpZihkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShgJHtrZXl9LSR7ZXN0YWRvRmlsdHJvW2tleV19YClbMF0pey8vcHJlZ3VudG8gc2kgZXhpc3RlIGVsIGVsZW1lbnRvIGNvbiBlbCBuYW1lIGRlbCBmaWx0cm8gcGFyYSBhZ3JlZ2FybGUgZWwgYWN0aXZlLCBzaSBubyBleGlzdGUgbG8gY3Jlby4gKHNpIG5vIGV4aXN0ZSBlcyBwb3JxdWUgdmllbmUgZGVzZGUgbW9kYWwgZGUgbWFyY2FzKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnISEhJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKGAke2tleX0tJHtlc3RhZG9GaWx0cm9ba2V5XX1gKVswXS5jbGFzc0xpc3QuYWRkKEZpbHRyb1N0eWxlLmFjdGl2ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBjbG9zZS0ke2tleX0tJHtlc3RhZG9GaWx0cm9ba2V5XX1gKS5jbGFzc0xpc3QucmVtb3ZlKCdkLW5vbmUnKTtcclxuICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoZXN0YWRvRmlsdHJvLm1hcmNhIT09Jycpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9jcmVvIGxvcyBlbGVtZW50b3MgZGVsIGl0ZW1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBuZXdJdGVtTWFyY2EgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRpdkl0ZW1NYXJjYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHNwYW5JdGVtTWFyY2EgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgaWNvbkNsb3NlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3ZnJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG1hcmNhTmFtZSA9IHByb3BzLm1hcmNhc1JlZHVjZXIubWFyY2FzLmZpbHRlcihyZXM9PnJlcy5pZE1hcmNhID09IGVzdGFkb0ZpbHRyby5tYXJjYSlbMF0ubWFyY2E7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9hc2lnbm8gbGFzIGNsYXNlcywgYXRyaWJ1dG9zIHkgZXZlbnRvcyBuZWNlc2FyaW9zLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGl2SXRlbU1hcmNhLmNsYXNzTmFtZSA9YCR7RmlsdHJvU3R5bGUuaXRlbV9maWx0cm99ICR7RmlsdHJvU3R5bGUuYWN0aXZlfWA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXZJdGVtTWFyY2Euc2V0QXR0cmlidXRlKCduYW1lJyxgbWFyY2EtJHtlc3RhZG9GaWx0cm8ubWFyY2F9YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXZJdGVtTWFyY2EuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT5hY3RpdmFyRmlsdHJvKCdtYXJjYScsZXN0YWRvRmlsdHJvLm1hcmNhKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcGFuSXRlbU1hcmNhLmNsYXNzTmFtZSA9ICd0ZXh0LW11dGVkJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNwYW5JdGVtTWFyY2EuaW5uZXJIVE1MID0gbWFyY2FOYW1lO1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uQ2xvc2UuaW5uZXJIVE1MID0gYFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgYXJpYS1oaWRkZW49XCJ0cnVlXCIgZm9jdXNhYmxlPVwiZmFsc2VcIiBkYXRhLXByZWZpeD1cImZhc1wiIGRhdGEtaWNvbj1cInRpbWVzXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Ym94PVwiMCAwIDM1MiA1MTJcIiBjbGFzcz1cInN2Zy1pbmxpbmUtLWZhIGZhLXRpbWVzIGZhLXctMTEgRmlsdHJvX2ljb25fY2xvc2VfZmlsdHJvX18xeGx2NVwiIGlkPVwiY2xvc2UtbWFyY2EtJHtlc3RhZG9GaWx0cm8ubWFyY2F9XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTI0Mi43MiAyNTZsMTAwLjA3LTEwMC4wN2MxMi4yOC0xMi4yOCAxMi4yOC0zMi4xOSAwLTQ0LjQ4bC0yMi4yNC0yMi4yNGMtMTIuMjgtMTIuMjgtMzIuMTktMTIuMjgtNDQuNDggMEwxNzYgMTg5LjI4IDc1LjkzIDg5LjIxYy0xMi4yOC0xMi4yOC0zMi4xOS0xMi4yOC00NC40OCAwTDkuMjEgMTExLjQ1Yy0xMi4yOCAxMi4yOC0xMi4yOCAzMi4xOSAwIDQ0LjQ4TDEwOS4yOCAyNTYgOS4yMSAzNTYuMDdjLTEyLjI4IDEyLjI4LTEyLjI4IDMyLjE5IDAgNDQuNDhsMjIuMjQgMjIuMjRjMTIuMjggMTIuMjggMzIuMiAxMi4yOCA0NC40OCAwTDE3NiAzMjIuNzJsMTAwLjA3IDEwMC4wN2MxMi4yOCAxMi4yOCAzMi4yIDEyLjI4IDQ0LjQ4IDBsMjIuMjQtMjIuMjRjMTIuMjgtMTIuMjggMTIuMjgtMzIuMTkgMC00NC40OEwyNDIuNzIgMjU2elwiPjwvcGF0aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uQ2xvc2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT5saW1waWFyRmlsdHJvKCdtYXJjYScpKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL3ZveSB1YmljYW5kbyBsb3MgZWxlbWVudG9zIGRlbnRybyBkZSBjYWRhIHBhZHJlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXZJdGVtTWFyY2EuYXBwZW5kQ2hpbGQoc3Bhbkl0ZW1NYXJjYSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdJdGVtTWFyY2EuYXBwZW5kQ2hpbGQoZGl2SXRlbU1hcmNhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld0l0ZW1NYXJjYS5hcHBlbmRDaGlsZChpY29uQ2xvc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL09idGVuZ28gZWwgcHJpbWVyIGl0ZW0gZGUgbGEgbGlzdGEgeSBsbyBlbGltaW5vLCBwYXJhIHRlbmVyIHNpZW1wcmUgbGEgbWlzbWEgY2FudGlkYWQgZGUgbWFyY2FzIGVuIGxhIGxpc3RhLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI2xpc3RhTWFyY2FgKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGZpcnN0SXRlbU1hcmNhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI2xpc3RhTWFyY2FgKS5jaGlsZHJlblswXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbGlzdGFNYXJjYXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjbGlzdGFNYXJjYWApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpc3RhTWFyY2FzLnJlbW92ZUNoaWxkKGZpcnN0SXRlbU1hcmNhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2Fob3JhIGFncmVnbyBlbCBpdGVtIGNyZWFkbyBhIGxhIGxpc3RhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGlzdGFNYXJjYXMuYXBwZW5kQ2hpbGQobmV3SXRlbU1hcmNhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy9sYSBwcmltZXJhIHZleiBxdWUgc2UgY2FyZ2EgZWwgY29tcG9uZW50ZSwgZmlsdHJhbmRvIGVzIGZhbHNlLCBwb3IgZXNvIHByZWd1bnRvIHBhcmEgcXVlIG5vIHNlIGVqZWN1dGEgbGEgZnVuY2lvbiBkZSBpciBhIGZpbHRyYXIgYXBlbmFzIHNlIG1vbnRlIGVsIGNvbXBvbmVudGUuIFNpbm8gcXVlIHNlIGVqZWN1dGUgY3VhbmRvIGRlIHZlcmRhZCBzZSBxdWllcmEgZmlsdHJhci5cclxuICAgICAgICBpZihlc3RhZG9GaWx0cm8uZmlsdHJhbmRvKXtcclxuICAgICAgICAgICAgbGV0IHVybEZpbHRybyA9IGFybWFyVXJsRmlsdHJvKCk7Ly9hcm1vIGxhIHVybCBxdWUgbWFuZG8gYSBsYSBhcGkgcGFyYSB0cmFlciBsb3MgcmVzdWx0YWRvcyBkZSBsbyBmaWx0cmFkby5cclxuICAgICAgICAgICAgcHJvcHMuc3VicHJvZHVjdG9zRmlsdHJhclByb2R1Y3Rvcyh1cmxGaWx0cm8pO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgbGltcGlhckZpbHRybyA9IHRpcG89PntcclxuICAgICAgICBzd2l0Y2ggKHRpcG8pIHtcclxuICAgICAgICAgICAgY2FzZSAnY2F0ZWdvcmlhJzpcclxuICAgICAgICAgICAgICAgIGlmKGVzdGFkb0ZpbHRyby5zdWJjYXRlZ29yaWE9PT0nJyAmJiBlc3RhZG9GaWx0cm8ubWFyY2E9PT0nJyl7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0RXN0YWRvRmlsdHJvKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLi4uZXN0YWRvRmlsdHJvLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXRlZ29yaWE6JycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRyYW5kbzpmYWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHByb3BzLnN1YnByb2R1Y3Rvc1RyYWVyVG9kb3MoKTtcclxuICAgICAgICAgICAgICAgICAgICBpZihwcm9wcy5sb2NhdGlvbiE9J3Byb2R1Y3Rvcycpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBSb3V0ZXIucHVzaCgnL3Byb2R1Y3RvcycpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIHNldEVzdGFkb0ZpbHRybyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLmVzdGFkb0ZpbHRybyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcmlhOicnXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnc3ViY2F0ZWdvcmlhJzpcclxuICAgICAgICAgICAgICAgIGlmKGVzdGFkb0ZpbHRyby5jYXRlZ29yaWE9PT0nJyAmJiBlc3RhZG9GaWx0cm8ubWFyY2E9PT0nJyl7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0RXN0YWRvRmlsdHJvKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLi4uZXN0YWRvRmlsdHJvLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdWJjYXRlZ29yaWE6JycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRyYW5kbzpmYWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHByb3BzLnN1YnByb2R1Y3Rvc1RyYWVyVG9kb3MoKTtcclxuICAgICAgICAgICAgICAgICAgICBpZihwcm9wcy5sb2NhdGlvbiE9J3Byb2R1Y3Rvcycpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBSb3V0ZXIucHVzaCgnL3Byb2R1Y3RvcycpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIHNldEVzdGFkb0ZpbHRybyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLmVzdGFkb0ZpbHRybyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3ViY2F0ZWdvcmlhOicnXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnbWFyY2EnOlxyXG4gICAgICAgICAgICAgICAgaWYoZXN0YWRvRmlsdHJvLmNhdGVnb3JpYT09PScnICYmIGVzdGFkb0ZpbHRyby5zdWJjYXRlZ29yaWE9PScnKXtcclxuICAgICAgICAgICAgICAgICAgICBzZXRFc3RhZG9GaWx0cm8oe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAuLi5lc3RhZG9GaWx0cm8sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmNhOicnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWx0cmFuZG86ZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICB9KTsgXHJcbiAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICBzZXRFc3RhZG9GaWx0cm8oe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAuLi5lc3RhZG9GaWx0cm8sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmNhOicnXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHNldEVzdGFkb0ZpbHRybyh7XHJcbiAgICAgICAgICAgICAgICAgICAgZmlsdHJhbmRvOmZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIGNhdGVnb3JpYTonJyxcclxuICAgICAgICAgICAgICAgICAgICBzdWJjYXRlZ29yaWE6JycsXHJcbiAgICAgICAgICAgICAgICAgICAgbWFyY2E6JycsXHJcbiAgICAgICAgICAgICAgICAgICAgYnVzY2Fkb3I6JydcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgcHJvcHMuc3VicHJvZHVjdG9zVHJhZXJUb2RvcygpO1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xhYmVsX19maWx0cm8tYnVzcXVlZGEnKS5jbGFzc0xpc3QuYWRkKCdkLW5vbmUnKTtcclxuICAgICAgICAgICAgICAgIGlmKHByb3BzLmxvY2F0aW9uIT0ncHJvZHVjdG9zJyl7XHJcbiAgICAgICAgICAgICAgICAgICAgUm91dGVyLnB1c2goJy9wcm9kdWN0b3MnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNsb3NlRmlsdHJvc01vYmlsZSA9ICgpPT57XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShGaWx0cm9TdHlsZS5maWx0cm9zX19jb250YW5pZXIpWzBdLmNsYXNzTGlzdC5yZW1vdmUoRmlsdHJvU3R5bGUuc2hvd19maWx0cm9zKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBhcm1hclVybEZpbHRybyA9ICgpPT57XHJcbiAgICAgICAgbGV0IHVybCA9ICdmaWx0cmFyJztcclxuICAgICAgICAvL3NpIGJ1c2NhZG9yIHZpZW5lIHRydWUsIGVzIHBvcnF1ZSB2aWVuZSBkZXNkZSBlbCBidXNjYWRvciBkZWwgbWVudSBvIG1vZGFsIGRlIGJ1c2NhZG9yKG1vYmlsZSkuXHJcbiAgICAgICAgaWYoZXN0YWRvRmlsdHJvLmJ1c2NhZG9yIT09JycpIHJldHVybiB1cmwgKz0gYD9idXNjYXI9JHtlc3RhZG9GaWx0cm8uYnVzY2Fkb3J9YDtcclxuXHJcbiAgICAgICAgbGV0IGNhdGVnb3JpYSA9IGVzdGFkb0ZpbHRyby5jYXRlZ29yaWEsXHJcbiAgICAgICAgICAgIHN1YmNhdGVnb3JpYSA9IGVzdGFkb0ZpbHRyby5zdWJjYXRlZ29yaWEsXHJcbiAgICAgICAgICAgIG1hcmNhID0gZXN0YWRvRmlsdHJvLm1hcmNhO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKGNhdGVnb3JpYSAmJiBjYXRlZ29yaWEgIT09ICcnKXtcclxuICAgICAgICAgICAgdXJsICs9IGA/Y2F0ZWdvcmlhPSR7ZXN0YWRvRmlsdHJvLmNhdGVnb3JpYX1gO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZihlc3RhZG9GaWx0cm8uc3ViY2F0ZWdvcmlhICYmIGVzdGFkb0ZpbHRyby5zdWJjYXRlZ29yaWEgIT09ICcnKXtcclxuICAgICAgICAgICAgaWYoY2F0ZWdvcmlhIT09ICcnKXtcclxuICAgICAgICAgICAgICAgIHVybCArPSBgJnN1YmNhdGVnb3JpYT0ke2VzdGFkb0ZpbHRyby5zdWJjYXRlZ29yaWF9YDsgXHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgdXJsICs9IGA/c3ViY2F0ZWdvcmlhPSR7ZXN0YWRvRmlsdHJvLnN1YmNhdGVnb3JpYX1gO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKG1hcmNhICYmIG1hcmNhICE9PSAnJyl7XHJcbiAgICAgICAgICAgIGlmKGNhdGVnb3JpYSAhPT0gJycgJiYgc3ViY2F0ZWdvcmlhICE9PSAnJyl7XHJcbiAgICAgICAgICAgICAgICB1cmwgKz0gYD9tYXJjYT0ke2VzdGFkb0ZpbHRyby5tYXJjYX1gO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIHVybCArPSBgJm1hcmNhPSR7ZXN0YWRvRmlsdHJvLm1hcmNhfWA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHVybDtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzaG93RmlsdHJvcyA9ICgpPT57XHJcbiAgICAgICAgbGV0IGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKEZpbHRyb1N0eWxlLmZpbHRyb3NfX2NvbnRhbmllcilbMF07XHJcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKEZpbHRyb1N0eWxlLnNob3cpO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpY29uRmlsdHJvQ29udGFpbmVyJykuY2xhc3NMaXN0LnRvZ2dsZShGaWx0cm9TdHlsZS5yb3Rhcik7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtGaWx0cm9TdHlsZS5maWx0cm9zX19jb250YW5pZXJ9PlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17RmlsdHJvU3R5bGUuYnRuX2Nsb3NlX2ZpbHRyb30gb25DbGljaz17c2hvd0ZpbHRyb3N9PlxyXG4gICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpZD1cImljb25GaWx0cm9Db250YWluZXJcIiBpY29uPXtmYUNoZXZyb25SaWdodH0vPlxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIHsocHJvcHMuY2F0ZWdvcmlhc1JlZHVjZXIuY2F0ZWdvcmlhcy5sZW5ndGg9PTAgfHwgcHJvcHMuc3ViY2F0ZWdvcmlhUmVkdWNlci5zdWJjYXRlZ29yaWFzLmxlbmd0aD09MCB8fCBwcm9wcy5tYXJjYXNSZWR1Y2VyLm1hcmNhcy5sZW5ndGg9PTApPzxMb2FkZXIvPjpcclxuICAgICAgICAgICAgICAgICAgICA8PiAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsoZXN0YWRvRmlsdHJvLmZpbHRyYW5kbyk/PGJ1dHRvbiBjbGFzc05hbWU9XCJib3RvbiBiZy15ZWxsb3cgbWItM1wiIG9uQ2xpY2s9e2xpbXBpYXJGaWx0cm99PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUJyb29tfS8+IExpbXBpYXIgRmlsdHJvc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj46bnVsbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVRpbWVzfSBjbGFzc05hbWU9e0ZpbHRyb1N0eWxlLmNlcnJhcl9maWx0cm9fbW9iaWxlfSBvbkNsaWNrPXtjbG9zZUZpbHRyb3NNb2JpbGV9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT17RmlsdHJvU3R5bGUudGl0dWxvX2ZpbHRyb3N9Pk1hc2NvdGE8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPXtGaWx0cm9TdHlsZS5saXN0YX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHMuY2F0ZWdvcmlhc1JlZHVjZXIuY2F0ZWdvcmlhcy5tYXAoY2F0PT4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2NhdC5pZENhdGVnb3JpYX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17RmlsdHJvU3R5bGUuaXRlbV9maWx0cm99IG5hbWU9e2BjYXRlZ29yaWEtJHtjYXQuaWRDYXRlZ29yaWF9YH0gb25DbGljaz17KCk9PmFjdGl2YXJGaWx0cm8oJ2NhdGVnb3JpYScsYCR7Y2F0LmlkQ2F0ZWdvcmlhfWApfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkXCI+e2NhdC5jYXRlZ29yaWF9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhVGltZXN9IGNsYXNzTmFtZT17RmlsdHJvU3R5bGUuaWNvbl9jbG9zZV9maWx0cm8gKyAnICcgKyBgZC1ub25lYH0gb25DbGljaz17KCk9PmxpbXBpYXJGaWx0cm8oJ2NhdGVnb3JpYScpfSBpZD17YGNsb3NlLWNhdGVnb3JpYS0ke2NhdC5pZENhdGVnb3JpYX1gfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPXtGaWx0cm9TdHlsZS50aXR1bG9fZmlsdHJvc30+QWxpbWVudG9zPC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT17RmlsdHJvU3R5bGUubGlzdGF9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzLnN1YmNhdGVnb3JpYVJlZHVjZXIuc3ViY2F0ZWdvcmlhcy5tYXAoc2M9PihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17c2MuaWRTdWJDYXRlZ29yaWF9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e0ZpbHRyb1N0eWxlLml0ZW1fZmlsdHJvfSBuYW1lPXtgc3ViY2F0ZWdvcmlhLSR7c2MuaWRTdWJDYXRlZ29yaWF9YH0gb25DbGljaz17KCk9PmFjdGl2YXJGaWx0cm8oJ3N1YmNhdGVnb3JpYScsYCR7c2MuaWRTdWJDYXRlZ29yaWF9YCl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtbXV0ZWRcIj57c2Muc3ViY2F0ZWdvcmlhfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVRpbWVzfSBjbGFzc05hbWU9e0ZpbHRyb1N0eWxlLmljb25fY2xvc2VfZmlsdHJvICsgJyAnICsgYGQtbm9uZWB9IG9uQ2xpY2s9eygpPT5saW1waWFyRmlsdHJvKCdzdWJjYXRlZ29yaWEnKX0gaWQ9e2BjbG9zZS0ke2BzdWJjYXRlZ29yaWEtJHtzYy5pZFN1YkNhdGVnb3JpYX1gfWB9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT17RmlsdHJvU3R5bGUudGl0dWxvX2ZpbHRyb3N9Pk1hcmNhPC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGlkPVwibGlzdGFNYXJjYVwiIGNsYXNzTmFtZT17RmlsdHJvU3R5bGUuc2luQm9yZGVyQm90dG9tKyAnICcgKyBGaWx0cm9TdHlsZS5saXN0YX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHMubWFyY2FzUmVkdWNlci5tYXJjYXMubWFwKChtYXJjYSxrZXkpPT4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChrZXk+Myk/ZmFsc2U6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e21hcmNhLmlkTWFyY2F9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e0ZpbHRyb1N0eWxlLml0ZW1fZmlsdHJvfSBuYW1lPXtgbWFyY2EtJHttYXJjYS5pZE1hcmNhfWB9IG9uQ2xpY2s9eygpPT5hY3RpdmFyRmlsdHJvKCdtYXJjYScsYCR7bWFyY2EuaWRNYXJjYX1gKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1tdXRlZFwiPnttYXJjYS5tYXJjYX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFUaW1lc30gY2xhc3NOYW1lPXtGaWx0cm9TdHlsZS5pY29uX2Nsb3NlX2ZpbHRybyArICcgJyArIGBkLW5vbmVgfSBvbkNsaWNrPXsoKT0+bGltcGlhckZpbHRybygnbWFyY2EnKX0gaWQ9e2BjbG9zZS1tYXJjYS0ke21hcmNhLmlkTWFyY2F9YH0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCk9PnNldE1vZGFsSXNPcGVuKHRydWUpfSBjbGFzc05hbWU9XCJib3RvbiBiZy1ncmlzXCI+VmVyIHRvZGFzPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB7KCFtb2RhbElzT3Blbik/bnVsbDpcclxuICAgICAgICAgICAgICAgIDxNb2RhbCBjbG9zZU1vZGFsPXtvbkNsb3NlTW9kYWx9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxNb2RhbE1hcmNhIGNsb3NlTW9kYWw9e29uQ2xvc2VNb2RhbH0gYWN0aXZhckZpbHRybz17YWN0aXZhckZpbHRyb30vPlxyXG4gICAgICAgICAgICAgICAgPC9Nb2RhbD5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHttYXJjYXNSZWR1Y2VyLHN1YnByb2R1Y3Rvc1JlZHVjZXIsY2F0ZWdvcmlhc1JlZHVjZXIsc3ViY2F0ZWdvcmlhUmVkdWNlcn0pPT57XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG1hcmNhc1JlZHVjZXIsXHJcbiAgICAgICAgc3VicHJvZHVjdG9zUmVkdWNlcixcclxuICAgICAgICBjYXRlZ29yaWFzUmVkdWNlcixcclxuICAgICAgICBzdWJjYXRlZ29yaWFSZWR1Y2VyXHJcbiAgICB9O1xyXG59XHJcblxyXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSB7XHJcbiAgICBtYXJjYXNUcmFlclRvZGFzLFxyXG4gICAgc3VicHJvZHVjdG9zRmlsdHJhclByb2R1Y3RvcyxcclxuICAgIHN1YnByb2R1Y3Rvc1RyYWVyVG9kb3MsXHJcbiAgICBjYXRlZ29yaWFzVHJhZXJUb2RhcyxcclxuICAgIHN1YmNhdGVnb3JpYVRyYWVyVG9kYXNcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsbWFwRGlzcGF0Y2hUb1Byb3BzKShGaWx0cm8pOyJdLCJzb3VyY2VSb290IjoiIn0=