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
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store_actions_subproductosActions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../store/actions/subproductosActions */ "./store/actions/subproductosActions.js");
/* harmony import */ var _store_actions_marcasActions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../store/actions/marcasActions */ "./store/actions/marcasActions.js");
/* harmony import */ var _store_actions_categoriasAction__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../store/actions/categoriasAction */ "./store/actions/categoriasAction.js");
/* harmony import */ var _store_actions_subcategoriasAction__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../store/actions/subcategoriasAction */ "./store/actions/subcategoriasAction.js");
/* harmony import */ var _Loader__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../Loader */ "./src/components/Loader/index.js");




var _this = undefined,
    _jsxFileName = "C:\\Users\\franc\\Documents\\oliver-2\\oliver-sitio\\src\\components\\Filtro\\index.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }













var marcasTraerTodas = _store_actions_marcasActions__WEBPACK_IMPORTED_MODULE_11__["traerTodas"];
var subproductosFiltrarProductos = _store_actions_subproductosActions__WEBPACK_IMPORTED_MODULE_10__["filtrarProductos"],
    subproductosTraerTodos = _store_actions_subproductosActions__WEBPACK_IMPORTED_MODULE_10__["traerTodos"];
var categoriasTraerTodas = _store_actions_categoriasAction__WEBPACK_IMPORTED_MODULE_12__["traerTodas"];
var subcategoriaTraerTodas = _store_actions_subcategoriasAction__WEBPACK_IMPORTED_MODULE_13__["traerTodas"];

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
              if (!(props.marcasReducer.marcas.length === 0)) {
                _context.next = 3;
                break;
              }

              _context.next = 3;
              return props.marcasTraerTodas();

            case 3:
              if (!(props.categoriasReducer.categorias.length === 0)) {
                _context.next = 6;
                break;
              }

              _context.next = 6;
              return props.categoriasTraerTodas();

            case 6:
              if (!(props.subcategoriaReducer.subcategorias.length === 0)) {
                _context.next = 9;
                break;
              }

              _context.next = 9;
              return props.subcategoriaTraerTodas();

            case 9:
              if (props.location !== '/productos') {
                activarFiltroPorUrl();
              }

            case 10:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
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
          console.log(document.getElementsByName("".concat(key, "-").concat(estadoFiltro[key])));

          if (document.getElementsByName("".concat(key, "-").concat(estadoFiltro[key]))) {
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

            ;
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
        setEstadoFiltro(_objectSpread(_objectSpread({}, estadoFiltro), {}, {
          categoria: ''
        }));
        break;

      case 'subcategoria':
        setEstadoFiltro(_objectSpread(_objectSpread({}, estadoFiltro), {}, {
          subcategoria: ''
        }));
        break;

      case 'marca':
        setEstadoFiltro(_objectSpread(_objectSpread({}, estadoFiltro), {}, {
          marca: ''
        }));
        break;

      default:
        props.subproductosTraerTodos();
        setEstadoFiltro({
          filtrando: false,
          categoria: '',
          subcategoria: '',
          marca: '',
          buscador: ''
        });
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
      lineNumber: 247,
      columnNumber: 9
    }
  }, __jsx("button", {
    className: _Filtro_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.btn_close_filtro,
    onClick: showFiltros,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 248,
      columnNumber: 13
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeIcon"], {
    id: "iconFiltroContainer",
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faChevronRight"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 249,
      columnNumber: 17
    }
  })), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 251,
      columnNumber: 13
    }
  }, props.categoriasReducer.categorias.length == 0 || props.subcategoriaReducer.subcategorias.length == 0 || props.marcasReducer.marcas.length == 0 ? __jsx(_Loader__WEBPACK_IMPORTED_MODULE_14__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 252,
      columnNumber: 158
    }
  }) : __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, estadoFiltro.filtrando ? __jsx("button", {
    className: "boton bg-yellow mb-3",
    onClick: limpiarFiltro,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 254,
      columnNumber: 51
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faBroom"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 255,
      columnNumber: 29
    }
  }), " Limpiar Filtros") : null, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faTimes"],
    className: _Filtro_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.cerrar_filtro_mobile,
    onClick: closeFiltrosMobile,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 257,
      columnNumber: 25
    }
  }), __jsx("h4", {
    className: _Filtro_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.titulo_filtros,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 258,
      columnNumber: 25
    }
  }, "Mascota"), __jsx("ul", {
    className: _Filtro_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.lista,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 259,
      columnNumber: 25
    }
  }, props.categoriasReducer.categorias.map(function (cat) {
    return __jsx("li", {
      key: cat.idCategoria,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 262,
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
        lineNumber: 263,
        columnNumber: 41
      }
    }, __jsx("span", {
      className: "text-muted",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 264,
        columnNumber: 45
      }
    }, cat.categoria)), __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeIcon"], {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faTimes"],
      className: _Filtro_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.icon_close_filtro + ' ' + "d-none",
      onClick: function onClick() {
        return limpiarFiltro('categoria');
      },
      id: "close-categoria-".concat(cat.idCategoria),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 266,
        columnNumber: 41
      }
    }));
  })), __jsx("h4", {
    className: _Filtro_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.titulo_filtros,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 273,
      columnNumber: 25
    }
  }, "Alimentos"), __jsx("ul", {
    className: _Filtro_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.lista,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 274,
      columnNumber: 25
    }
  }, props.subcategoriaReducer.subcategorias.map(function (sc) {
    return __jsx("li", {
      key: sc.idSubCategoria,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 277,
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
        lineNumber: 278,
        columnNumber: 41
      }
    }, __jsx("span", {
      className: "text-muted",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 279,
        columnNumber: 45
      }
    }, sc.subcategoria)), __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeIcon"], {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faTimes"],
      className: _Filtro_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.icon_close_filtro + ' ' + "d-none",
      onClick: function onClick() {
        return limpiarFiltro('subcategoria');
      },
      id: "close-".concat("subcategoria-".concat(sc.idSubCategoria)),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 281,
        columnNumber: 41
      }
    }));
  })), __jsx("h4", {
    className: _Filtro_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.titulo_filtros,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 287,
      columnNumber: 25
    }
  }, "Marca"), __jsx("ul", {
    id: "listaMarca",
    className: _Filtro_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.sinBorderBottom + ' ' + _Filtro_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.lista,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 288,
      columnNumber: 25
    }
  }, props.marcasReducer.marcas.map(function (marca, key) {
    return key > 3 ? false : __jsx("li", {
      key: marca.idMarca,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 292,
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
        lineNumber: 293,
        columnNumber: 41
      }
    }, __jsx("span", {
      className: "text-muted",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 294,
        columnNumber: 45
      }
    }, marca.marca)), __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeIcon"], {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faTimes"],
      className: _Filtro_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.icon_close_filtro + ' ' + "d-none",
      onClick: function onClick() {
        return limpiarFiltro('marca');
      },
      id: "close-marca-".concat(marca.idMarca),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 296,
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
      lineNumber: 301,
      columnNumber: 25
    }
  }, "Ver todas"))), !modalIsOpen ? null : __jsx(_Modal__WEBPACK_IMPORTED_MODULE_5__["default"], {
    closeModal: onCloseModal,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 306,
      columnNumber: 17
    }
  }, __jsx(_ModalMarca__WEBPACK_IMPORTED_MODULE_6__["default"], {
    closeModal: onCloseModal,
    activarFiltro: activarFiltro,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 307,
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
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["connect"])(mapStateToProps, mapDispatchToProps)(Filtro));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRmlsdHJvL2luZGV4LmpzIl0sIm5hbWVzIjpbIm1hcmNhc1RyYWVyVG9kYXMiLCJtYXJjYXNBY3Rpb25zIiwic3VicHJvZHVjdG9zRmlsdHJhclByb2R1Y3RvcyIsInN1YnByb2R1Y3Rvc0FjdGlvbnMiLCJzdWJwcm9kdWN0b3NUcmFlclRvZG9zIiwiY2F0ZWdvcmlhc1RyYWVyVG9kYXMiLCJjYXRlZ29yaWFzQWN0aW9ucyIsInN1YmNhdGVnb3JpYVRyYWVyVG9kYXMiLCJzdWJjYXRlZ29yaWFzQWN0aW9ucyIsIkZpbHRybyIsInByb3BzIiwidXNlU3RhdGUiLCJmaWx0cmFuZG8iLCJjYXRlZ29yaWEiLCJzdWJjYXRlZ29yaWEiLCJtYXJjYSIsImJ1c2NhZG9yIiwiZXN0YWRvRmlsdHJvIiwic2V0RXN0YWRvRmlsdHJvIiwibW9kYWxJc09wZW4iLCJzZXRNb2RhbElzT3BlbiIsIm9uQ2xvc2VNb2RhbCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJzdHlsZSIsIm92ZXJmbG93WSIsInVzZUVmZmVjdCIsImdldERhdGEiLCJtYXJjYXNSZWR1Y2VyIiwibWFyY2FzIiwibGVuZ3RoIiwiY2F0ZWdvcmlhc1JlZHVjZXIiLCJjYXRlZ29yaWFzIiwic3ViY2F0ZWdvcmlhUmVkdWNlciIsInN1YmNhdGVnb3JpYXMiLCJsb2NhdGlvbiIsImFjdGl2YXJGaWx0cm9Qb3JVcmwiLCJzd2l0Y2hJdGVtQWN0aXZlIiwiYWN0aXZhckZpbHRybyIsInF1ZXJ5IiwidHlwZSIsImluZGV4IiwidGlwb0ZpbHRybyIsImtleSIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJGaWx0cm9TdHlsZSIsIml0ZW1fZmlsdHJvIiwiZWxlbWVudCIsImNsYXNzTGlzdCIsInJlbW92ZSIsImFjdGl2ZSIsImljb25fY2xvc2VfZmlsdHJvIiwiYWRkIiwidHJpbSIsImNvbnNvbGUiLCJsb2ciLCJnZXRFbGVtZW50c0J5TmFtZSIsImdldEVsZW1lbnRCeUlkIiwibmV3SXRlbU1hcmNhIiwiY3JlYXRlRWxlbWVudCIsImRpdkl0ZW1NYXJjYSIsInNwYW5JdGVtTWFyY2EiLCJpY29uQ2xvc2UiLCJtYXJjYU5hbWUiLCJmaWx0ZXIiLCJyZXMiLCJpZE1hcmNhIiwiY2xhc3NOYW1lIiwic2V0QXR0cmlidXRlIiwiYWRkRXZlbnRMaXN0ZW5lciIsImlubmVySFRNTCIsImxpbXBpYXJGaWx0cm8iLCJhcHBlbmRDaGlsZCIsInF1ZXJ5U2VsZWN0b3IiLCJmaXJzdEl0ZW1NYXJjYSIsImNoaWxkcmVuIiwibGlzdGFNYXJjYXMiLCJyZW1vdmVDaGlsZCIsInVybEZpbHRybyIsImFybWFyVXJsRmlsdHJvIiwidGlwbyIsImNsb3NlRmlsdHJvc01vYmlsZSIsImZpbHRyb3NfX2NvbnRhbmllciIsInNob3dfZmlsdHJvcyIsInVybCIsInNob3dGaWx0cm9zIiwidG9nZ2xlIiwic2hvdyIsInJvdGFyIiwiYnRuX2Nsb3NlX2ZpbHRybyIsImZhQ2hldnJvblJpZ2h0IiwiZmFCcm9vbSIsImZhVGltZXMiLCJjZXJyYXJfZmlsdHJvX21vYmlsZSIsInRpdHVsb19maWx0cm9zIiwibGlzdGEiLCJtYXAiLCJjYXQiLCJpZENhdGVnb3JpYSIsInNjIiwiaWRTdWJDYXRlZ29yaWEiLCJzaW5Cb3JkZXJCb3R0b20iLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdWJwcm9kdWN0b3NSZWR1Y2VyIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiY29ubmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtJQUVrQkEsZ0IsR0FBb0JDLHdFO0lBQ2RDLDRCLEdBQWtFQyxvRjtJQUExQkMsc0IsR0FBMEJELDhFO0lBQ3hFRSxvQixHQUF3QkMsMkU7SUFDeEJDLHNCLEdBQTBCQyw4RTs7QUFFNUMsSUFBTUMs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a0IsR0FBRztBQUN2QnhHLGtCQUFnQixFQUFoQkEsZ0JBRHVCO0FBRXZCRSw4QkFBNEIsRUFBNUJBLDRCQUZ1QjtBQUd2QkUsd0JBQXNCLEVBQXRCQSxzQkFIdUI7QUFJdkJDLHNCQUFvQixFQUFwQkEsb0JBSnVCO0FBS3ZCRSx3QkFBc0IsRUFBdEJBO0FBTHVCLENBQTNCO0FBUWVrRywwSEFBTyxDQUFDSCxlQUFELEVBQWlCRSxrQkFBakIsQ0FBUCxDQUE0Qy9GLE1BQTVDLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvZHVjdG9zL1tbLi4uaW5kZXhdXS43NmRmOGMwZTg2MmNjYjllYmE2ZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEZpbHRyb1N0eWxlIGZyb20gJy4vRmlsdHJvLm1vZHVsZS5jc3MnO1xyXG5pbXBvcnQgTW9kYWwgZnJvbSAnLi4vTW9kYWwnO1xyXG5pbXBvcnQgTW9kYWxNYXJjYSBmcm9tICcuLi9Nb2RhbE1hcmNhJztcclxuaW1wb3J0IHsgZmFUaW1lcyxmYUJyb29tLGZhQ2hldnJvblJpZ2h0IH0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29uc1wiO1xyXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tIFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCI7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCAqIGFzIHN1YnByb2R1Y3Rvc0FjdGlvbnMgZnJvbSAnLi4vLi4vLi4vc3RvcmUvYWN0aW9ucy9zdWJwcm9kdWN0b3NBY3Rpb25zJztcclxuaW1wb3J0ICogYXMgbWFyY2FzQWN0aW9ucyBmcm9tICcuLi8uLi8uLi9zdG9yZS9hY3Rpb25zL21hcmNhc0FjdGlvbnMnO1xyXG5pbXBvcnQgKiBhcyBjYXRlZ29yaWFzQWN0aW9ucyBmcm9tICcuLi8uLi8uLi9zdG9yZS9hY3Rpb25zL2NhdGVnb3JpYXNBY3Rpb24nO1xyXG5pbXBvcnQgKiBhcyBzdWJjYXRlZ29yaWFzQWN0aW9ucyBmcm9tICcuLi8uLi8uLi9zdG9yZS9hY3Rpb25zL3N1YmNhdGVnb3JpYXNBY3Rpb24nO1xyXG5pbXBvcnQgTG9hZGVyIGZyb20gJy4uL0xvYWRlcic7XHJcblxyXG5jb25zdCB7dHJhZXJUb2RhczptYXJjYXNUcmFlclRvZGFzfSA9IG1hcmNhc0FjdGlvbnM7XHJcbmNvbnN0IHtmaWx0cmFyUHJvZHVjdG9zOnN1YnByb2R1Y3Rvc0ZpbHRyYXJQcm9kdWN0b3MsdHJhZXJUb2RvczpzdWJwcm9kdWN0b3NUcmFlclRvZG9zfSA9IHN1YnByb2R1Y3Rvc0FjdGlvbnM7XHJcbmNvbnN0IHt0cmFlclRvZGFzOmNhdGVnb3JpYXNUcmFlclRvZGFzfSA9IGNhdGVnb3JpYXNBY3Rpb25zO1xyXG5jb25zdCB7dHJhZXJUb2RhczpzdWJjYXRlZ29yaWFUcmFlclRvZGFzfSA9IHN1YmNhdGVnb3JpYXNBY3Rpb25zO1xyXG5cclxuY29uc3QgRmlsdHJvID0gKHByb3BzKSA9PiB7XHJcblxyXG4gICAgLy9zdGF0ZSBmb3IgdGhlIGZpbHRlcnNcclxuICAgIGNvbnN0IFtlc3RhZG9GaWx0cm8sIHNldEVzdGFkb0ZpbHRyb10gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgZmlsdHJhbmRvOmZhbHNlLFxyXG4gICAgICAgIGNhdGVnb3JpYTonJyxcclxuICAgICAgICBzdWJjYXRlZ29yaWE6JycsXHJcbiAgICAgICAgbWFyY2E6JycsXHJcbiAgICAgICAgYnVzY2Fkb3I6JydcclxuICAgIH0pO1xyXG5cclxuICAgIC8vbWFuZWpvIGRlIE1vZGFsIG1hcmNhc1xyXG4gICAgY29uc3QgW21vZGFsSXNPcGVuLCBzZXRNb2RhbElzT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBvbkNsb3NlTW9kYWwgPSAoKT0+e1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdib2R5JylbMF0uc3R5bGUub3ZlcmZsb3dZID0gJ3Njcm9sbCc7XHJcbiAgICAgICAgc2V0TW9kYWxJc09wZW4oZmFsc2UpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vbG9vcCBkZSBlZmVjdG8gcGFyYSBlamVjdXRhciBzb2xvIHVuYSB2ZXogY3VhbmRvIGVsIGNvbXBvbmVudGUgc2UgbW9udGUgZW4gZWwgY2FzbyBkZSBxdWUgc2UgZXN0ZSBmaWx0cmFuZG8gZGlyZWN0byBkZXNkZSBsYSB1cmxcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgZ2V0RGF0YSgpO1xyXG4gICAgfSxbXSk7XHJcbiAgICAgICAgXHJcbiAgICBjb25zdCBnZXREYXRhID0gYXN5bmMoKT0+e1xyXG4gICAgICAgIGlmKHByb3BzLm1hcmNhc1JlZHVjZXIubWFyY2FzLmxlbmd0aD09PTApe1xyXG4gICAgICAgICAgICBhd2FpdCBwcm9wcy5tYXJjYXNUcmFlclRvZGFzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHByb3BzLmNhdGVnb3JpYXNSZWR1Y2VyLmNhdGVnb3JpYXMubGVuZ3RoPT09MCl7XHJcbiAgICAgICAgICAgIGF3YWl0IHByb3BzLmNhdGVnb3JpYXNUcmFlclRvZGFzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHByb3BzLnN1YmNhdGVnb3JpYVJlZHVjZXIuc3ViY2F0ZWdvcmlhcy5sZW5ndGg9PT0wKXtcclxuICAgICAgICAgICAgYXdhaXQgcHJvcHMuc3ViY2F0ZWdvcmlhVHJhZXJUb2RhcygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZihwcm9wcy5sb2NhdGlvbiAhPT0gJy9wcm9kdWN0b3MnKXtcclxuICAgICAgICAgICAgYWN0aXZhckZpbHRyb1BvclVybCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvL2xvb3AgZGUgZWZlY3RvIHBhcmEgaGFjZXIgcmVuZGVyIGNhZGEgdmV6IHF1ZSBzZSBhZ3JlZ2EgbyBlbGltaW5hIHVuIGZpbHRyb1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBzd2l0Y2hJdGVtQWN0aXZlKCk7XHJcbiAgICB9LCBbZXN0YWRvRmlsdHJvXSk7XHJcblxyXG4gICAgY29uc3QgYWN0aXZhckZpbHRyb1BvclVybCA9ICgpPT57XHJcbiAgICAgICAgcmV0dXJuIGFjdGl2YXJGaWx0cm8ocHJvcHMucXVlcnkudHlwZSxwcm9wcy5xdWVyeS5pbmRleFsxXSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgYWN0aXZhckZpbHRybyA9ICh0aXBvRmlsdHJvLGtleSk9PntcclxuICAgICAgICBzd2l0Y2ggKHRpcG9GaWx0cm8pIHtcclxuICAgICAgICAgICAgY2FzZSAnY2F0ZWdvcmlhJzpcclxuICAgICAgICAgICAgICAgIHNldEVzdGFkb0ZpbHRybyh7XHJcbiAgICAgICAgICAgICAgICAgICAgLi4uZXN0YWRvRmlsdHJvLFxyXG4gICAgICAgICAgICAgICAgICAgIGNhdGVnb3JpYTprZXksXHJcbiAgICAgICAgICAgICAgICAgICAgYnVzY2Fkb3I6JycsXHJcbiAgICAgICAgICAgICAgICAgICAgZmlsdHJhbmRvOnRydWVcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ3N1YmNhdGVnb3JpYSc6XHJcbiAgICAgICAgICAgICAgICBzZXRFc3RhZG9GaWx0cm8oe1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLmVzdGFkb0ZpbHRybyxcclxuICAgICAgICAgICAgICAgICAgICBzdWJjYXRlZ29yaWE6a2V5LFxyXG4gICAgICAgICAgICAgICAgICAgIGJ1c2NhZG9yOicnLFxyXG4gICAgICAgICAgICAgICAgICAgIGZpbHRyYW5kbzp0cnVlXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ21hcmNhJzpcclxuICAgICAgICAgICAgICAgIHNldEVzdGFkb0ZpbHRybyh7XHJcbiAgICAgICAgICAgICAgICAgICAgLi4uZXN0YWRvRmlsdHJvLFxyXG4gICAgICAgICAgICAgICAgICAgIG1hcmNhOmtleSxcclxuICAgICAgICAgICAgICAgICAgICBidXNjYWRvcjonJyxcclxuICAgICAgICAgICAgICAgICAgICBmaWx0cmFuZG86dHJ1ZVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdidXNjYWRvcic6XHJcbiAgICAgICAgICAgICAgICBzZXRFc3RhZG9GaWx0cm8oe1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLmVzdGFkb0ZpbHRybyxcclxuICAgICAgICAgICAgICAgICAgICBidXNjYWRvcjprZXksXHJcbiAgICAgICAgICAgICAgICAgICAgZmlsdHJhbmRvOnRydWVcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc3dpdGNoSXRlbUFjdGl2ZSA9ICgpPT57XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coZXN0YWRvRmlsdHJvKTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoRmlsdHJvU3R5bGUuaXRlbV9maWx0cm8pLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShGaWx0cm9TdHlsZS5pdGVtX2ZpbHRybylbaW5kZXhdO1xyXG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoRmlsdHJvU3R5bGUuYWN0aXZlKTtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShGaWx0cm9TdHlsZS5pY29uX2Nsb3NlX2ZpbHRybylbaW5kZXhdLmNsYXNzTGlzdC5hZGQoJ2Qtbm9uZScpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgaWYoIWVzdGFkb0ZpbHRyby5maWx0cmFuZG8pIHJldHVybjtcclxuICAgICAgICAvL3NpIG5vIGhheSBuYWRhIGVuIGJ1c2NhZG9yLCBwdWVkbyBzZXRlYXIgdW4gYWN0aXZlIGVuIGFsZ3VuIGVsZW1lbnRvIGRlIGxhIGxpc3RhXHJcbiAgICAgICAgaWYoZXN0YWRvRmlsdHJvLmJ1c2NhZG9yLnRyaW0oKT09PScnKXtcclxuICAgICAgICAgICAgLy9yZWNvcnJvIGVsIHN0YXRlIHBhcmEgb2J0ZW5lciBsYXMgY2xhdmVzIHkgYWdyZWdhciBhY3RpdmUgZWwgZWxlbWVudG8gY29ycmVzcG9uZGllbnRlXHJcbiAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IGluIGVzdGFkb0ZpbHRybykge1xyXG4gICAgICAgICAgICAgICAgaWYoZXN0YWRvRmlsdHJvW2tleV0gJiYgZXN0YWRvRmlsdHJvW2tleV0hPT0nJyAmJiBlc3RhZG9GaWx0cm9ba2V5XSE9PXRydWUpe1xyXG4gICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coZXN0YWRvRmlsdHJvW2tleV0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKGAke2tleX0tJHtlc3RhZG9GaWx0cm9ba2V5XX1gKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoYCR7a2V5fS0ke2VzdGFkb0ZpbHRyb1trZXldfWApKXsvL3ByZWd1bnRvIHNpIGV4aXN0ZSBlbCBlbGVtZW50byBjb24gZWwgbmFtZSBkZWwgZmlsdHJvIHBhcmEgYWdyZWdhcmxlIGVsIGFjdGl2ZSwgc2kgbm8gZXhpc3RlIGxvIGNyZW8uIChzaSBubyBleGlzdGUgZXMgcG9ycXVlIHZpZW5lIGRlc2RlIG1vZGFsIGRlIG1hcmNhcylcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJyEhIScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShgJHtrZXl9LSR7ZXN0YWRvRmlsdHJvW2tleV19YClbMF0uY2xhc3NMaXN0LmFkZChGaWx0cm9TdHlsZS5hY3RpdmUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgY2xvc2UtJHtrZXl9LSR7ZXN0YWRvRmlsdHJvW2tleV19YCkuY2xhc3NMaXN0LnJlbW92ZSgnZC1ub25lJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGVzdGFkb0ZpbHRyby5tYXJjYSE9PScnKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vY3JlbyBsb3MgZWxlbWVudG9zIGRlbCBpdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbmV3SXRlbU1hcmNhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkaXZJdGVtTWFyY2EgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzcGFuSXRlbU1hcmNhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGljb25DbG9zZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N2ZycpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBtYXJjYU5hbWUgPSBwcm9wcy5tYXJjYXNSZWR1Y2VyLm1hcmNhcy5maWx0ZXIocmVzPT5yZXMuaWRNYXJjYSA9PSBlc3RhZG9GaWx0cm8ubWFyY2EpWzBdLm1hcmNhO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vYXNpZ25vIGxhcyBjbGFzZXMsIGF0cmlidXRvcyB5IGV2ZW50b3MgbmVjZXNhcmlvcy5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpdkl0ZW1NYXJjYS5jbGFzc05hbWUgPWAke0ZpbHRyb1N0eWxlLml0ZW1fZmlsdHJvfSAke0ZpbHRyb1N0eWxlLmFjdGl2ZX1gO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGl2SXRlbU1hcmNhLnNldEF0dHJpYnV0ZSgnbmFtZScsYG1hcmNhLSR7ZXN0YWRvRmlsdHJvLm1hcmNhfWApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGl2SXRlbU1hcmNhLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+YWN0aXZhckZpbHRybygnbWFyY2EnLGVzdGFkb0ZpbHRyby5tYXJjYSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Bhbkl0ZW1NYXJjYS5jbGFzc05hbWUgPSAndGV4dC1tdXRlZCc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcGFuSXRlbU1hcmNhLmlubmVySFRNTCA9IG1hcmNhTmFtZTtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbkNsb3NlLmlubmVySFRNTCA9IGBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGZvY3VzYWJsZT1cImZhbHNlXCIgZGF0YS1wcmVmaXg9XCJmYXNcIiBkYXRhLWljb249XCJ0aW1lc1wiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld2JveD1cIjAgMCAzNTIgNTEyXCIgY2xhc3M9XCJzdmctaW5saW5lLS1mYSBmYS10aW1lcyBmYS13LTExIEZpbHRyb19pY29uX2Nsb3NlX2ZpbHRyb19fMXhsdjVcIiBpZD1cImNsb3NlLW1hcmNhLSR7ZXN0YWRvRmlsdHJvLm1hcmNhfVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0yNDIuNzIgMjU2bDEwMC4wNy0xMDAuMDdjMTIuMjgtMTIuMjggMTIuMjgtMzIuMTkgMC00NC40OGwtMjIuMjQtMjIuMjRjLTEyLjI4LTEyLjI4LTMyLjE5LTEyLjI4LTQ0LjQ4IDBMMTc2IDE4OS4yOCA3NS45MyA4OS4yMWMtMTIuMjgtMTIuMjgtMzIuMTktMTIuMjgtNDQuNDggMEw5LjIxIDExMS40NWMtMTIuMjggMTIuMjgtMTIuMjggMzIuMTkgMCA0NC40OEwxMDkuMjggMjU2IDkuMjEgMzU2LjA3Yy0xMi4yOCAxMi4yOC0xMi4yOCAzMi4xOSAwIDQ0LjQ4bDIyLjI0IDIyLjI0YzEyLjI4IDEyLjI4IDMyLjIgMTIuMjggNDQuNDggMEwxNzYgMzIyLjcybDEwMC4wNyAxMDAuMDdjMTIuMjggMTIuMjggMzIuMiAxMi4yOCA0NC40OCAwbDIyLjI0LTIyLjI0YzEyLjI4LTEyLjI4IDEyLjI4LTMyLjE5IDAtNDQuNDhMMjQyLjcyIDI1NnpcIj48L3BhdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbkNsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+bGltcGlhckZpbHRybygnbWFyY2EnKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy92b3kgdWJpY2FuZG8gbG9zIGVsZW1lbnRvcyBkZW50cm8gZGUgY2FkYSBwYWRyZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGl2SXRlbU1hcmNhLmFwcGVuZENoaWxkKHNwYW5JdGVtTWFyY2EpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3SXRlbU1hcmNhLmFwcGVuZENoaWxkKGRpdkl0ZW1NYXJjYSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdJdGVtTWFyY2EuYXBwZW5kQ2hpbGQoaWNvbkNsb3NlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9PYnRlbmdvIGVsIHByaW1lciBpdGVtIGRlIGxhIGxpc3RhIHkgbG8gZWxpbWlubywgcGFyYSB0ZW5lciBzaWVtcHJlIGxhIG1pc21hIGNhbnRpZGFkIGRlIG1hcmNhcyBlbiBsYSBsaXN0YS5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNsaXN0YU1hcmNhYCkpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBmaXJzdEl0ZW1NYXJjYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNsaXN0YU1hcmNhYCkuY2hpbGRyZW5bMF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGxpc3RhTWFyY2FzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI2xpc3RhTWFyY2FgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaXN0YU1hcmNhcy5yZW1vdmVDaGlsZChmaXJzdEl0ZW1NYXJjYSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9haG9yYSBhZ3JlZ28gZWwgaXRlbSBjcmVhZG8gYSBsYSBsaXN0YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpc3RhTWFyY2FzLmFwcGVuZENoaWxkKG5ld0l0ZW1NYXJjYSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvL2xhIHByaW1lcmEgdmV6IHF1ZSBzZSBjYXJnYSBlbCBjb21wb25lbnRlLCBmaWx0cmFuZG8gZXMgZmFsc2UsIHBvciBlc28gcHJlZ3VudG8gcGFyYSBxdWUgbm8gc2UgZWplY3V0YSBsYSBmdW5jaW9uIGRlIGlyIGEgZmlsdHJhciBhcGVuYXMgc2UgbW9udGUgZWwgY29tcG9uZW50ZS4gU2lubyBxdWUgc2UgZWplY3V0ZSBjdWFuZG8gZGUgdmVyZGFkIHNlIHF1aWVyYSBmaWx0cmFyLlxyXG4gICAgICAgIGlmKGVzdGFkb0ZpbHRyby5maWx0cmFuZG8pe1xyXG4gICAgICAgICAgICBsZXQgdXJsRmlsdHJvID0gYXJtYXJVcmxGaWx0cm8oKTsvL2FybW8gbGEgdXJsIHF1ZSBtYW5kbyBhIGxhIGFwaSBwYXJhIHRyYWVyIGxvcyByZXN1bHRhZG9zIGRlIGxvIGZpbHRyYWRvLlxyXG4gICAgICAgICAgICBwcm9wcy5zdWJwcm9kdWN0b3NGaWx0cmFyUHJvZHVjdG9zKHVybEZpbHRybyk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBsaW1waWFyRmlsdHJvID0gdGlwbz0+e1xyXG4gICAgICAgIHN3aXRjaCAodGlwbykge1xyXG4gICAgICAgICAgICBjYXNlICdjYXRlZ29yaWEnOlxyXG4gICAgICAgICAgICAgICAgc2V0RXN0YWRvRmlsdHJvKHtcclxuICAgICAgICAgICAgICAgICAgICAuLi5lc3RhZG9GaWx0cm8sXHJcbiAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcmlhOicnXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdzdWJjYXRlZ29yaWEnOlxyXG4gICAgICAgICAgICAgICAgc2V0RXN0YWRvRmlsdHJvKHtcclxuICAgICAgICAgICAgICAgICAgICAuLi5lc3RhZG9GaWx0cm8sXHJcbiAgICAgICAgICAgICAgICAgICAgc3ViY2F0ZWdvcmlhOicnXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdtYXJjYSc6XHJcbiAgICAgICAgICAgICAgICBzZXRFc3RhZG9GaWx0cm8oe1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLmVzdGFkb0ZpbHRybyxcclxuICAgICAgICAgICAgICAgICAgICBtYXJjYTonJ1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHByb3BzLnN1YnByb2R1Y3Rvc1RyYWVyVG9kb3MoKTtcclxuICAgICAgICAgICAgICAgIHNldEVzdGFkb0ZpbHRybyh7XHJcbiAgICAgICAgICAgICAgICAgICAgZmlsdHJhbmRvOmZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIGNhdGVnb3JpYTonJyxcclxuICAgICAgICAgICAgICAgICAgICBzdWJjYXRlZ29yaWE6JycsXHJcbiAgICAgICAgICAgICAgICAgICAgbWFyY2E6JycsXHJcbiAgICAgICAgICAgICAgICAgICAgYnVzY2Fkb3I6JydcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY2xvc2VGaWx0cm9zTW9iaWxlID0gKCk9PntcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKEZpbHRyb1N0eWxlLmZpbHRyb3NfX2NvbnRhbmllcilbMF0uY2xhc3NMaXN0LnJlbW92ZShGaWx0cm9TdHlsZS5zaG93X2ZpbHRyb3MpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGFybWFyVXJsRmlsdHJvID0gKCk9PntcclxuICAgICAgICBsZXQgdXJsID0gJ2ZpbHRyYXInO1xyXG4gICAgICAgIC8vc2kgYnVzY2Fkb3IgdmllbmUgdHJ1ZSwgZXMgcG9ycXVlIHZpZW5lIGRlc2RlIGVsIGJ1c2NhZG9yIGRlbCBtZW51IG8gbW9kYWwgZGUgYnVzY2Fkb3IobW9iaWxlKS5cclxuICAgICAgICBpZihlc3RhZG9GaWx0cm8uYnVzY2Fkb3IhPT0nJykgcmV0dXJuIHVybCArPSBgP2J1c2Nhcj0ke2VzdGFkb0ZpbHRyby5idXNjYWRvcn1gO1xyXG5cclxuICAgICAgICBsZXQgY2F0ZWdvcmlhID0gZXN0YWRvRmlsdHJvLmNhdGVnb3JpYSxcclxuICAgICAgICAgICAgc3ViY2F0ZWdvcmlhID0gZXN0YWRvRmlsdHJvLnN1YmNhdGVnb3JpYSxcclxuICAgICAgICAgICAgbWFyY2EgPSBlc3RhZG9GaWx0cm8ubWFyY2E7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYoY2F0ZWdvcmlhICYmIGNhdGVnb3JpYSAhPT0gJycpe1xyXG4gICAgICAgICAgICB1cmwgKz0gYD9jYXRlZ29yaWE9JHtlc3RhZG9GaWx0cm8uY2F0ZWdvcmlhfWA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKGVzdGFkb0ZpbHRyby5zdWJjYXRlZ29yaWEgJiYgZXN0YWRvRmlsdHJvLnN1YmNhdGVnb3JpYSAhPT0gJycpe1xyXG4gICAgICAgICAgICBpZihjYXRlZ29yaWEhPT0gJycpe1xyXG4gICAgICAgICAgICAgICAgdXJsICs9IGAmc3ViY2F0ZWdvcmlhPSR7ZXN0YWRvRmlsdHJvLnN1YmNhdGVnb3JpYX1gOyBcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICB1cmwgKz0gYD9zdWJjYXRlZ29yaWE9JHtlc3RhZG9GaWx0cm8uc3ViY2F0ZWdvcmlhfWA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYobWFyY2EgJiYgbWFyY2EgIT09ICcnKXtcclxuICAgICAgICAgICAgaWYoY2F0ZWdvcmlhICE9PSAnJyAmJiBzdWJjYXRlZ29yaWEgIT09ICcnKXtcclxuICAgICAgICAgICAgICAgIHVybCArPSBgP21hcmNhPSR7ZXN0YWRvRmlsdHJvLm1hcmNhfWA7XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgdXJsICs9IGAmbWFyY2E9JHtlc3RhZG9GaWx0cm8ubWFyY2F9YDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdXJsO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHNob3dGaWx0cm9zID0gKCk9PntcclxuICAgICAgICBsZXQgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoRmlsdHJvU3R5bGUuZmlsdHJvc19fY29udGFuaWVyKVswXTtcclxuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoRmlsdHJvU3R5bGUuc2hvdyk7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ljb25GaWx0cm9Db250YWluZXInKS5jbGFzc0xpc3QudG9nZ2xlKEZpbHRyb1N0eWxlLnJvdGFyKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtGaWx0cm9TdHlsZS5maWx0cm9zX19jb250YW5pZXJ9PlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17RmlsdHJvU3R5bGUuYnRuX2Nsb3NlX2ZpbHRyb30gb25DbGljaz17c2hvd0ZpbHRyb3N9PlxyXG4gICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpZD1cImljb25GaWx0cm9Db250YWluZXJcIiBpY29uPXtmYUNoZXZyb25SaWdodH0vPlxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIHsocHJvcHMuY2F0ZWdvcmlhc1JlZHVjZXIuY2F0ZWdvcmlhcy5sZW5ndGg9PTAgfHwgcHJvcHMuc3ViY2F0ZWdvcmlhUmVkdWNlci5zdWJjYXRlZ29yaWFzLmxlbmd0aD09MCB8fCBwcm9wcy5tYXJjYXNSZWR1Y2VyLm1hcmNhcy5sZW5ndGg9PTApPzxMb2FkZXIvPjpcclxuICAgICAgICAgICAgICAgICAgICA8PiAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsoZXN0YWRvRmlsdHJvLmZpbHRyYW5kbyk/PGJ1dHRvbiBjbGFzc05hbWU9XCJib3RvbiBiZy15ZWxsb3cgbWItM1wiIG9uQ2xpY2s9e2xpbXBpYXJGaWx0cm99PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUJyb29tfS8+IExpbXBpYXIgRmlsdHJvc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj46bnVsbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVRpbWVzfSBjbGFzc05hbWU9e0ZpbHRyb1N0eWxlLmNlcnJhcl9maWx0cm9fbW9iaWxlfSBvbkNsaWNrPXtjbG9zZUZpbHRyb3NNb2JpbGV9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT17RmlsdHJvU3R5bGUudGl0dWxvX2ZpbHRyb3N9Pk1hc2NvdGE8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPXtGaWx0cm9TdHlsZS5saXN0YX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHMuY2F0ZWdvcmlhc1JlZHVjZXIuY2F0ZWdvcmlhcy5tYXAoY2F0PT4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2NhdC5pZENhdGVnb3JpYX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17RmlsdHJvU3R5bGUuaXRlbV9maWx0cm99IG5hbWU9e2BjYXRlZ29yaWEtJHtjYXQuaWRDYXRlZ29yaWF9YH0gb25DbGljaz17KCk9PmFjdGl2YXJGaWx0cm8oJ2NhdGVnb3JpYScsYCR7Y2F0LmlkQ2F0ZWdvcmlhfWApfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkXCI+e2NhdC5jYXRlZ29yaWF9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhVGltZXN9IGNsYXNzTmFtZT17RmlsdHJvU3R5bGUuaWNvbl9jbG9zZV9maWx0cm8gKyAnICcgKyBgZC1ub25lYH0gb25DbGljaz17KCk9PmxpbXBpYXJGaWx0cm8oJ2NhdGVnb3JpYScpfSBpZD17YGNsb3NlLWNhdGVnb3JpYS0ke2NhdC5pZENhdGVnb3JpYX1gfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPXtGaWx0cm9TdHlsZS50aXR1bG9fZmlsdHJvc30+QWxpbWVudG9zPC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT17RmlsdHJvU3R5bGUubGlzdGF9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzLnN1YmNhdGVnb3JpYVJlZHVjZXIuc3ViY2F0ZWdvcmlhcy5tYXAoc2M9PihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17c2MuaWRTdWJDYXRlZ29yaWF9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e0ZpbHRyb1N0eWxlLml0ZW1fZmlsdHJvfSBuYW1lPXtgc3ViY2F0ZWdvcmlhLSR7c2MuaWRTdWJDYXRlZ29yaWF9YH0gb25DbGljaz17KCk9PmFjdGl2YXJGaWx0cm8oJ3N1YmNhdGVnb3JpYScsYCR7c2MuaWRTdWJDYXRlZ29yaWF9YCl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtbXV0ZWRcIj57c2Muc3ViY2F0ZWdvcmlhfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVRpbWVzfSBjbGFzc05hbWU9e0ZpbHRyb1N0eWxlLmljb25fY2xvc2VfZmlsdHJvICsgJyAnICsgYGQtbm9uZWB9IG9uQ2xpY2s9eygpPT5saW1waWFyRmlsdHJvKCdzdWJjYXRlZ29yaWEnKX0gaWQ9e2BjbG9zZS0ke2BzdWJjYXRlZ29yaWEtJHtzYy5pZFN1YkNhdGVnb3JpYX1gfWB9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT17RmlsdHJvU3R5bGUudGl0dWxvX2ZpbHRyb3N9Pk1hcmNhPC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGlkPVwibGlzdGFNYXJjYVwiIGNsYXNzTmFtZT17RmlsdHJvU3R5bGUuc2luQm9yZGVyQm90dG9tKyAnICcgKyBGaWx0cm9TdHlsZS5saXN0YX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHMubWFyY2FzUmVkdWNlci5tYXJjYXMubWFwKChtYXJjYSxrZXkpPT4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChrZXk+Myk/ZmFsc2U6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e21hcmNhLmlkTWFyY2F9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e0ZpbHRyb1N0eWxlLml0ZW1fZmlsdHJvfSBuYW1lPXtgbWFyY2EtJHttYXJjYS5pZE1hcmNhfWB9IG9uQ2xpY2s9eygpPT5hY3RpdmFyRmlsdHJvKCdtYXJjYScsYCR7bWFyY2EuaWRNYXJjYX1gKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1tdXRlZFwiPnttYXJjYS5tYXJjYX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFUaW1lc30gY2xhc3NOYW1lPXtGaWx0cm9TdHlsZS5pY29uX2Nsb3NlX2ZpbHRybyArICcgJyArIGBkLW5vbmVgfSBvbkNsaWNrPXsoKT0+bGltcGlhckZpbHRybygnbWFyY2EnKX0gaWQ9e2BjbG9zZS1tYXJjYS0ke21hcmNhLmlkTWFyY2F9YH0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCk9PnNldE1vZGFsSXNPcGVuKHRydWUpfSBjbGFzc05hbWU9XCJib3RvbiBiZy1ncmlzXCI+VmVyIHRvZGFzPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB7KCFtb2RhbElzT3Blbik/bnVsbDpcclxuICAgICAgICAgICAgICAgIDxNb2RhbCBjbG9zZU1vZGFsPXtvbkNsb3NlTW9kYWx9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxNb2RhbE1hcmNhIGNsb3NlTW9kYWw9e29uQ2xvc2VNb2RhbH0gYWN0aXZhckZpbHRybz17YWN0aXZhckZpbHRyb30vPlxyXG4gICAgICAgICAgICAgICAgPC9Nb2RhbD5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHttYXJjYXNSZWR1Y2VyLHN1YnByb2R1Y3Rvc1JlZHVjZXIsY2F0ZWdvcmlhc1JlZHVjZXIsc3ViY2F0ZWdvcmlhUmVkdWNlcn0pPT57XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG1hcmNhc1JlZHVjZXIsXHJcbiAgICAgICAgc3VicHJvZHVjdG9zUmVkdWNlcixcclxuICAgICAgICBjYXRlZ29yaWFzUmVkdWNlcixcclxuICAgICAgICBzdWJjYXRlZ29yaWFSZWR1Y2VyXHJcbiAgICB9O1xyXG59XHJcblxyXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSB7XHJcbiAgICBtYXJjYXNUcmFlclRvZGFzLFxyXG4gICAgc3VicHJvZHVjdG9zRmlsdHJhclByb2R1Y3RvcyxcclxuICAgIHN1YnByb2R1Y3Rvc1RyYWVyVG9kb3MsXHJcbiAgICBjYXRlZ29yaWFzVHJhZXJUb2RhcyxcclxuICAgIHN1YmNhdGVnb3JpYVRyYWVyVG9kYXNcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsbWFwRGlzcGF0Y2hUb1Byb3BzKShGaWx0cm8pOyJdLCJzb3VyY2VSb290IjoiIn0=