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
          //console.log(key);
          //console.log(estadoFiltro[key]);
          if (document.getElementsByName("".concat(key, "-").concat(estadoFiltro[key]))[0]) {
            //pregunto si existe el elemento con el name del filtro para agregarle el active, si no existe lo creo. (si no existe es porque viene desde modal de marcas)
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
      lineNumber: 246,
      columnNumber: 9
    }
  }, __jsx("button", {
    className: _Filtro_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.btn_close_filtro,
    onClick: showFiltros,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 247,
      columnNumber: 13
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeIcon"], {
    id: "iconFiltroContainer",
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faChevronRight"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 248,
      columnNumber: 17
    }
  })), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 250,
      columnNumber: 13
    }
  }, props.categoriasReducer.categorias.length == 0 || props.subcategoriaReducer.subcategorias.length == 0 || props.marcasReducer.marcas.length == 0 ? __jsx(_Loader__WEBPACK_IMPORTED_MODULE_14__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 251,
      columnNumber: 158
    }
  }) : __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, estadoFiltro.filtrando ? __jsx("button", {
    className: "boton bg-yellow mb-3",
    onClick: limpiarFiltro,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 253,
      columnNumber: 51
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faBroom"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 254,
      columnNumber: 29
    }
  }), " Limpiar Filtros") : null, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faTimes"],
    className: _Filtro_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.cerrar_filtro_mobile,
    onClick: closeFiltrosMobile,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 256,
      columnNumber: 25
    }
  }), __jsx("h4", {
    className: _Filtro_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.titulo_filtros,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 257,
      columnNumber: 25
    }
  }, "Mascota"), __jsx("ul", {
    className: _Filtro_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.lista,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 258,
      columnNumber: 25
    }
  }, props.categoriasReducer.categorias.map(function (cat) {
    return __jsx("li", {
      key: cat.idCategoria,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 261,
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
        lineNumber: 262,
        columnNumber: 41
      }
    }, __jsx("span", {
      className: "text-muted",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 263,
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
        lineNumber: 265,
        columnNumber: 41
      }
    }));
  })), __jsx("h4", {
    className: _Filtro_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.titulo_filtros,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 272,
      columnNumber: 25
    }
  }, "Alimentos"), __jsx("ul", {
    className: _Filtro_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.lista,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 273,
      columnNumber: 25
    }
  }, props.subcategoriaReducer.subcategorias.map(function (sc) {
    return __jsx("li", {
      key: sc.idSubCategoria,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 276,
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
        lineNumber: 277,
        columnNumber: 41
      }
    }, __jsx("span", {
      className: "text-muted",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 278,
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
        lineNumber: 280,
        columnNumber: 41
      }
    }));
  })), __jsx("h4", {
    className: _Filtro_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.titulo_filtros,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 286,
      columnNumber: 25
    }
  }, "Marca"), __jsx("ul", {
    id: "listaMarca",
    className: _Filtro_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.sinBorderBottom + ' ' + _Filtro_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.lista,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 287,
      columnNumber: 25
    }
  }, props.marcasReducer.marcas.map(function (marca, key) {
    return key > 3 ? false : __jsx("li", {
      key: marca.idMarca,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 291,
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
        lineNumber: 292,
        columnNumber: 41
      }
    }, __jsx("span", {
      className: "text-muted",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 293,
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
        lineNumber: 295,
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
      lineNumber: 300,
      columnNumber: 25
    }
  }, "Ver todas"))), !modalIsOpen ? null : __jsx(_Modal__WEBPACK_IMPORTED_MODULE_5__["default"], {
    closeModal: onCloseModal,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 305,
      columnNumber: 17
    }
  }, __jsx(_ModalMarca__WEBPACK_IMPORTED_MODULE_6__["default"], {
    closeModal: onCloseModal,
    activarFiltro: activarFiltro,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 306,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRmlsdHJvL2luZGV4LmpzIl0sIm5hbWVzIjpbIm1hcmNhc1RyYWVyVG9kYXMiLCJtYXJjYXNBY3Rpb25zIiwic3VicHJvZHVjdG9zRmlsdHJhclByb2R1Y3RvcyIsInN1YnByb2R1Y3Rvc0FjdGlvbnMiLCJzdWJwcm9kdWN0b3NUcmFlclRvZG9zIiwiY2F0ZWdvcmlhc1RyYWVyVG9kYXMiLCJjYXRlZ29yaWFzQWN0aW9ucyIsInN1YmNhdGVnb3JpYVRyYWVyVG9kYXMiLCJzdWJjYXRlZ29yaWFzQWN0aW9ucyIsIkZpbHRybyIsInByb3BzIiwidXNlU3RhdGUiLCJmaWx0cmFuZG8iLCJjYXRlZ29yaWEiLCJzdWJjYXRlZ29yaWEiLCJtYXJjYSIsImJ1c2NhZG9yIiwiZXN0YWRvRmlsdHJvIiwic2V0RXN0YWRvRmlsdHJvIiwibW9kYWxJc09wZW4iLCJzZXRNb2RhbElzT3BlbiIsIm9uQ2xvc2VNb2RhbCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJzdHlsZSIsIm92ZXJmbG93WSIsInVzZUVmZmVjdCIsImdldERhdGEiLCJtYXJjYXNSZWR1Y2VyIiwibWFyY2FzIiwibGVuZ3RoIiwiY2F0ZWdvcmlhc1JlZHVjZXIiLCJjYXRlZ29yaWFzIiwic3ViY2F0ZWdvcmlhUmVkdWNlciIsInN1YmNhdGVnb3JpYXMiLCJsb2NhdGlvbiIsImFjdGl2YXJGaWx0cm9Qb3JVcmwiLCJzd2l0Y2hJdGVtQWN0aXZlIiwiYWN0aXZhckZpbHRybyIsInF1ZXJ5IiwidHlwZSIsImluZGV4IiwidGlwb0ZpbHRybyIsImtleSIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJGaWx0cm9TdHlsZSIsIml0ZW1fZmlsdHJvIiwiZWxlbWVudCIsImNsYXNzTGlzdCIsInJlbW92ZSIsImFjdGl2ZSIsImljb25fY2xvc2VfZmlsdHJvIiwiYWRkIiwidHJpbSIsImdldEVsZW1lbnRzQnlOYW1lIiwiZ2V0RWxlbWVudEJ5SWQiLCJuZXdJdGVtTWFyY2EiLCJjcmVhdGVFbGVtZW50IiwiZGl2SXRlbU1hcmNhIiwic3Bhbkl0ZW1NYXJjYSIsImljb25DbG9zZSIsIm1hcmNhTmFtZSIsImZpbHRlciIsInJlcyIsImlkTWFyY2EiLCJjbGFzc05hbWUiLCJzZXRBdHRyaWJ1dGUiLCJhZGRFdmVudExpc3RlbmVyIiwiaW5uZXJIVE1MIiwibGltcGlhckZpbHRybyIsImFwcGVuZENoaWxkIiwicXVlcnlTZWxlY3RvciIsImZpcnN0SXRlbU1hcmNhIiwiY2hpbGRyZW4iLCJsaXN0YU1hcmNhcyIsInJlbW92ZUNoaWxkIiwidXJsRmlsdHJvIiwiYXJtYXJVcmxGaWx0cm8iLCJ0aXBvIiwiY2xvc2VGaWx0cm9zTW9iaWxlIiwiZmlsdHJvc19fY29udGFuaWVyIiwic2hvd19maWx0cm9zIiwidXJsIiwic2hvd0ZpbHRyb3MiLCJ0b2dnbGUiLCJzaG93Iiwicm90YXIiLCJidG5fY2xvc2VfZmlsdHJvIiwiZmFDaGV2cm9uUmlnaHQiLCJmYUJyb29tIiwiZmFUaW1lcyIsImNlcnJhcl9maWx0cm9fbW9iaWxlIiwidGl0dWxvX2ZpbHRyb3MiLCJsaXN0YSIsIm1hcCIsImNhdCIsImlkQ2F0ZWdvcmlhIiwic2MiLCJpZFN1YkNhdGVnb3JpYSIsInNpbkJvcmRlckJvdHRvbSIsIm1hcFN0YXRlVG9Qcm9wcyIsInN1YnByb2R1Y3Rvc1JlZHVjZXIiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJjb25uZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0lBRWtCQSxnQixHQUFvQkMsd0U7SUFDZEMsNEIsR0FBa0VDLG9GO0lBQTFCQyxzQixHQUEwQkQsOEU7SUFDeEVFLG9CLEdBQXdCQywyRTtJQUN4QkMsc0IsR0FBMEJDLDhFOztBQUU1QyxJQUFNQyxNQUFNLEdBQUcsU0FBVEEs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QUFzQixFQUF0QkE7QUFMdUIsQ0FBM0I7QUFRZWdHLDBIQUFPLENBQUNILGVBQUQsRUFBaUJFLGtCQUFqQixDQUFQLENBQTRDN0YsTUFBNUMsQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9kdWN0b3MvW1suLi5pbmRleF1dLjMyNTg5MjAzOWNmMjg0ZTJjZjkwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgRmlsdHJvU3R5bGUgZnJvbSAnLi9GaWx0cm8ubW9kdWxlLmNzcyc7XHJcbmltcG9ydCBNb2RhbCBmcm9tICcuLi9Nb2RhbCc7XHJcbmltcG9ydCBNb2RhbE1hcmNhIGZyb20gJy4uL01vZGFsTWFyY2EnO1xyXG5pbXBvcnQgeyBmYVRpbWVzLGZhQnJvb20sZmFDaGV2cm9uUmlnaHQgfSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCI7XHJcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIjtcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0ICogYXMgc3VicHJvZHVjdG9zQWN0aW9ucyBmcm9tICcuLi8uLi8uLi9zdG9yZS9hY3Rpb25zL3N1YnByb2R1Y3Rvc0FjdGlvbnMnO1xyXG5pbXBvcnQgKiBhcyBtYXJjYXNBY3Rpb25zIGZyb20gJy4uLy4uLy4uL3N0b3JlL2FjdGlvbnMvbWFyY2FzQWN0aW9ucyc7XHJcbmltcG9ydCAqIGFzIGNhdGVnb3JpYXNBY3Rpb25zIGZyb20gJy4uLy4uLy4uL3N0b3JlL2FjdGlvbnMvY2F0ZWdvcmlhc0FjdGlvbic7XHJcbmltcG9ydCAqIGFzIHN1YmNhdGVnb3JpYXNBY3Rpb25zIGZyb20gJy4uLy4uLy4uL3N0b3JlL2FjdGlvbnMvc3ViY2F0ZWdvcmlhc0FjdGlvbic7XHJcbmltcG9ydCBMb2FkZXIgZnJvbSAnLi4vTG9hZGVyJztcclxuXHJcbmNvbnN0IHt0cmFlclRvZGFzOm1hcmNhc1RyYWVyVG9kYXN9ID0gbWFyY2FzQWN0aW9ucztcclxuY29uc3Qge2ZpbHRyYXJQcm9kdWN0b3M6c3VicHJvZHVjdG9zRmlsdHJhclByb2R1Y3Rvcyx0cmFlclRvZG9zOnN1YnByb2R1Y3Rvc1RyYWVyVG9kb3N9ID0gc3VicHJvZHVjdG9zQWN0aW9ucztcclxuY29uc3Qge3RyYWVyVG9kYXM6Y2F0ZWdvcmlhc1RyYWVyVG9kYXN9ID0gY2F0ZWdvcmlhc0FjdGlvbnM7XHJcbmNvbnN0IHt0cmFlclRvZGFzOnN1YmNhdGVnb3JpYVRyYWVyVG9kYXN9ID0gc3ViY2F0ZWdvcmlhc0FjdGlvbnM7XHJcblxyXG5jb25zdCBGaWx0cm8gPSAocHJvcHMpID0+IHtcclxuXHJcbiAgICAvL3N0YXRlIGZvciB0aGUgZmlsdGVyc1xyXG4gICAgY29uc3QgW2VzdGFkb0ZpbHRybywgc2V0RXN0YWRvRmlsdHJvXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICBmaWx0cmFuZG86ZmFsc2UsXHJcbiAgICAgICAgY2F0ZWdvcmlhOicnLFxyXG4gICAgICAgIHN1YmNhdGVnb3JpYTonJyxcclxuICAgICAgICBtYXJjYTonJyxcclxuICAgICAgICBidXNjYWRvcjonJ1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy9tYW5lam8gZGUgTW9kYWwgbWFyY2FzXHJcbiAgICBjb25zdCBbbW9kYWxJc09wZW4sIHNldE1vZGFsSXNPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IG9uQ2xvc2VNb2RhbCA9ICgpPT57XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2JvZHknKVswXS5zdHlsZS5vdmVyZmxvd1kgPSAnc2Nyb2xsJztcclxuICAgICAgICBzZXRNb2RhbElzT3BlbihmYWxzZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy9sb29wIGRlIGVmZWN0byBwYXJhIGVqZWN1dGFyIHNvbG8gdW5hIHZleiBjdWFuZG8gZWwgY29tcG9uZW50ZSBzZSBtb250ZSBlbiBlbCBjYXNvIGRlIHF1ZSBzZSBlc3RlIGZpbHRyYW5kbyBkaXJlY3RvIGRlc2RlIGxhIHVybFxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBnZXREYXRhKCk7XHJcbiAgICB9LFtdKTtcclxuICAgICAgICBcclxuICAgIGNvbnN0IGdldERhdGEgPSBhc3luYygpPT57XHJcbiAgICAgICAgaWYocHJvcHMubWFyY2FzUmVkdWNlci5tYXJjYXMubGVuZ3RoPT09MCl7XHJcbiAgICAgICAgICAgIGF3YWl0IHByb3BzLm1hcmNhc1RyYWVyVG9kYXMoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYocHJvcHMuY2F0ZWdvcmlhc1JlZHVjZXIuY2F0ZWdvcmlhcy5sZW5ndGg9PT0wKXtcclxuICAgICAgICAgICAgYXdhaXQgcHJvcHMuY2F0ZWdvcmlhc1RyYWVyVG9kYXMoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYocHJvcHMuc3ViY2F0ZWdvcmlhUmVkdWNlci5zdWJjYXRlZ29yaWFzLmxlbmd0aD09PTApe1xyXG4gICAgICAgICAgICBhd2FpdCBwcm9wcy5zdWJjYXRlZ29yaWFUcmFlclRvZGFzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHByb3BzLmxvY2F0aW9uICE9PSAnL3Byb2R1Y3Rvcycpe1xyXG4gICAgICAgICAgICBhY3RpdmFyRmlsdHJvUG9yVXJsKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vbG9vcCBkZSBlZmVjdG8gcGFyYSBoYWNlciByZW5kZXIgY2FkYSB2ZXogcXVlIHNlIGFncmVnYSBvIGVsaW1pbmEgdW4gZmlsdHJvXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHN3aXRjaEl0ZW1BY3RpdmUoKTtcclxuICAgIH0sIFtlc3RhZG9GaWx0cm9dKTtcclxuXHJcbiAgICBjb25zdCBhY3RpdmFyRmlsdHJvUG9yVXJsID0gKCk9PntcclxuICAgICAgICByZXR1cm4gYWN0aXZhckZpbHRybyhwcm9wcy5xdWVyeS50eXBlLHByb3BzLnF1ZXJ5LmluZGV4WzFdKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBhY3RpdmFyRmlsdHJvID0gKHRpcG9GaWx0cm8sa2V5KT0+e1xyXG4gICAgICAgIHN3aXRjaCAodGlwb0ZpbHRybykge1xyXG4gICAgICAgICAgICBjYXNlICdjYXRlZ29yaWEnOlxyXG4gICAgICAgICAgICAgICAgc2V0RXN0YWRvRmlsdHJvKHtcclxuICAgICAgICAgICAgICAgICAgICAuLi5lc3RhZG9GaWx0cm8sXHJcbiAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcmlhOmtleSxcclxuICAgICAgICAgICAgICAgICAgICBidXNjYWRvcjonJyxcclxuICAgICAgICAgICAgICAgICAgICBmaWx0cmFuZG86dHJ1ZVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnc3ViY2F0ZWdvcmlhJzpcclxuICAgICAgICAgICAgICAgIHNldEVzdGFkb0ZpbHRybyh7XHJcbiAgICAgICAgICAgICAgICAgICAgLi4uZXN0YWRvRmlsdHJvLFxyXG4gICAgICAgICAgICAgICAgICAgIHN1YmNhdGVnb3JpYTprZXksXHJcbiAgICAgICAgICAgICAgICAgICAgYnVzY2Fkb3I6JycsXHJcbiAgICAgICAgICAgICAgICAgICAgZmlsdHJhbmRvOnRydWVcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnbWFyY2EnOlxyXG4gICAgICAgICAgICAgICAgc2V0RXN0YWRvRmlsdHJvKHtcclxuICAgICAgICAgICAgICAgICAgICAuLi5lc3RhZG9GaWx0cm8sXHJcbiAgICAgICAgICAgICAgICAgICAgbWFyY2E6a2V5LFxyXG4gICAgICAgICAgICAgICAgICAgIGJ1c2NhZG9yOicnLFxyXG4gICAgICAgICAgICAgICAgICAgIGZpbHRyYW5kbzp0cnVlXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ2J1c2NhZG9yJzpcclxuICAgICAgICAgICAgICAgIHNldEVzdGFkb0ZpbHRybyh7XHJcbiAgICAgICAgICAgICAgICAgICAgLi4uZXN0YWRvRmlsdHJvLFxyXG4gICAgICAgICAgICAgICAgICAgIGJ1c2NhZG9yOmtleSxcclxuICAgICAgICAgICAgICAgICAgICBmaWx0cmFuZG86dHJ1ZVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzd2l0Y2hJdGVtQWN0aXZlID0gKCk9PntcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhlc3RhZG9GaWx0cm8pO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShGaWx0cm9TdHlsZS5pdGVtX2ZpbHRybykubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKEZpbHRyb1N0eWxlLml0ZW1fZmlsdHJvKVtpbmRleF07XHJcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShGaWx0cm9TdHlsZS5hY3RpdmUpO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKEZpbHRyb1N0eWxlLmljb25fY2xvc2VfZmlsdHJvKVtpbmRleF0uY2xhc3NMaXN0LmFkZCgnZC1ub25lJyk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBpZighZXN0YWRvRmlsdHJvLmZpbHRyYW5kbykgcmV0dXJuO1xyXG4gICAgICAgIC8vc2kgbm8gaGF5IG5hZGEgZW4gYnVzY2Fkb3IsIHB1ZWRvIHNldGVhciB1biBhY3RpdmUgZW4gYWxndW4gZWxlbWVudG8gZGUgbGEgbGlzdGFcclxuICAgICAgICBpZihlc3RhZG9GaWx0cm8uYnVzY2Fkb3IudHJpbSgpPT09Jycpe1xyXG4gICAgICAgICAgICAvL3JlY29ycm8gZWwgc3RhdGUgcGFyYSBvYnRlbmVyIGxhcyBjbGF2ZXMgeSBhZ3JlZ2FyIGFjdGl2ZSBlbCBlbGVtZW50byBjb3JyZXNwb25kaWVudGVcclxuICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gZXN0YWRvRmlsdHJvKSB7XHJcbiAgICAgICAgICAgICAgICBpZihlc3RhZG9GaWx0cm9ba2V5XSAmJiBlc3RhZG9GaWx0cm9ba2V5XSE9PScnICYmIGVzdGFkb0ZpbHRyb1trZXldIT09dHJ1ZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhrZXkpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coZXN0YWRvRmlsdHJvW2tleV0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKGAke2tleX0tJHtlc3RhZG9GaWx0cm9ba2V5XX1gKVswXSl7Ly9wcmVndW50byBzaSBleGlzdGUgZWwgZWxlbWVudG8gY29uIGVsIG5hbWUgZGVsIGZpbHRybyBwYXJhIGFncmVnYXJsZSBlbCBhY3RpdmUsIHNpIG5vIGV4aXN0ZSBsbyBjcmVvLiAoc2kgbm8gZXhpc3RlIGVzIHBvcnF1ZSB2aWVuZSBkZXNkZSBtb2RhbCBkZSBtYXJjYXMpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKGAke2tleX0tJHtlc3RhZG9GaWx0cm9ba2V5XX1gKVswXS5jbGFzc0xpc3QuYWRkKEZpbHRyb1N0eWxlLmFjdGl2ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBjbG9zZS0ke2tleX0tJHtlc3RhZG9GaWx0cm9ba2V5XX1gKS5jbGFzc0xpc3QucmVtb3ZlKCdkLW5vbmUnKTtcclxuICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoZXN0YWRvRmlsdHJvLm1hcmNhIT09Jycpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9jcmVvIGxvcyBlbGVtZW50b3MgZGVsIGl0ZW1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBuZXdJdGVtTWFyY2EgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRpdkl0ZW1NYXJjYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHNwYW5JdGVtTWFyY2EgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgaWNvbkNsb3NlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3ZnJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG1hcmNhTmFtZSA9IHByb3BzLm1hcmNhc1JlZHVjZXIubWFyY2FzLmZpbHRlcihyZXM9PnJlcy5pZE1hcmNhID09IGVzdGFkb0ZpbHRyby5tYXJjYSlbMF0ubWFyY2E7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9hc2lnbm8gbGFzIGNsYXNlcywgYXRyaWJ1dG9zIHkgZXZlbnRvcyBuZWNlc2FyaW9zLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGl2SXRlbU1hcmNhLmNsYXNzTmFtZSA9YCR7RmlsdHJvU3R5bGUuaXRlbV9maWx0cm99ICR7RmlsdHJvU3R5bGUuYWN0aXZlfWA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXZJdGVtTWFyY2Euc2V0QXR0cmlidXRlKCduYW1lJyxgbWFyY2EtJHtlc3RhZG9GaWx0cm8ubWFyY2F9YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXZJdGVtTWFyY2EuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT5hY3RpdmFyRmlsdHJvKCdtYXJjYScsZXN0YWRvRmlsdHJvLm1hcmNhKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcGFuSXRlbU1hcmNhLmNsYXNzTmFtZSA9ICd0ZXh0LW11dGVkJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNwYW5JdGVtTWFyY2EuaW5uZXJIVE1MID0gbWFyY2FOYW1lO1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uQ2xvc2UuaW5uZXJIVE1MID0gYFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgYXJpYS1oaWRkZW49XCJ0cnVlXCIgZm9jdXNhYmxlPVwiZmFsc2VcIiBkYXRhLXByZWZpeD1cImZhc1wiIGRhdGEtaWNvbj1cInRpbWVzXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Ym94PVwiMCAwIDM1MiA1MTJcIiBjbGFzcz1cInN2Zy1pbmxpbmUtLWZhIGZhLXRpbWVzIGZhLXctMTEgRmlsdHJvX2ljb25fY2xvc2VfZmlsdHJvX18xeGx2NVwiIGlkPVwiY2xvc2UtbWFyY2EtJHtlc3RhZG9GaWx0cm8ubWFyY2F9XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTI0Mi43MiAyNTZsMTAwLjA3LTEwMC4wN2MxMi4yOC0xMi4yOCAxMi4yOC0zMi4xOSAwLTQ0LjQ4bC0yMi4yNC0yMi4yNGMtMTIuMjgtMTIuMjgtMzIuMTktMTIuMjgtNDQuNDggMEwxNzYgMTg5LjI4IDc1LjkzIDg5LjIxYy0xMi4yOC0xMi4yOC0zMi4xOS0xMi4yOC00NC40OCAwTDkuMjEgMTExLjQ1Yy0xMi4yOCAxMi4yOC0xMi4yOCAzMi4xOSAwIDQ0LjQ4TDEwOS4yOCAyNTYgOS4yMSAzNTYuMDdjLTEyLjI4IDEyLjI4LTEyLjI4IDMyLjE5IDAgNDQuNDhsMjIuMjQgMjIuMjRjMTIuMjggMTIuMjggMzIuMiAxMi4yOCA0NC40OCAwTDE3NiAzMjIuNzJsMTAwLjA3IDEwMC4wN2MxMi4yOCAxMi4yOCAzMi4yIDEyLjI4IDQ0LjQ4IDBsMjIuMjQtMjIuMjRjMTIuMjgtMTIuMjggMTIuMjgtMzIuMTkgMC00NC40OEwyNDIuNzIgMjU2elwiPjwvcGF0aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uQ2xvc2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT5saW1waWFyRmlsdHJvKCdtYXJjYScpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy92b3kgdWJpY2FuZG8gbG9zIGVsZW1lbnRvcyBkZW50cm8gZGUgY2FkYSBwYWRyZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGl2SXRlbU1hcmNhLmFwcGVuZENoaWxkKHNwYW5JdGVtTWFyY2EpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3SXRlbU1hcmNhLmFwcGVuZENoaWxkKGRpdkl0ZW1NYXJjYSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdJdGVtTWFyY2EuYXBwZW5kQ2hpbGQoaWNvbkNsb3NlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9PYnRlbmdvIGVsIHByaW1lciBpdGVtIGRlIGxhIGxpc3RhIHkgbG8gZWxpbWlubywgcGFyYSB0ZW5lciBzaWVtcHJlIGxhIG1pc21hIGNhbnRpZGFkIGRlIG1hcmNhcyBlbiBsYSBsaXN0YS5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNsaXN0YU1hcmNhYCkpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBmaXJzdEl0ZW1NYXJjYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNsaXN0YU1hcmNhYCkuY2hpbGRyZW5bMF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGxpc3RhTWFyY2FzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI2xpc3RhTWFyY2FgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaXN0YU1hcmNhcy5yZW1vdmVDaGlsZChmaXJzdEl0ZW1NYXJjYSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9haG9yYSBhZ3JlZ28gZWwgaXRlbSBjcmVhZG8gYSBsYSBsaXN0YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpc3RhTWFyY2FzLmFwcGVuZENoaWxkKG5ld0l0ZW1NYXJjYSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvL2xhIHByaW1lcmEgdmV6IHF1ZSBzZSBjYXJnYSBlbCBjb21wb25lbnRlLCBmaWx0cmFuZG8gZXMgZmFsc2UsIHBvciBlc28gcHJlZ3VudG8gcGFyYSBxdWUgbm8gc2UgZWplY3V0YSBsYSBmdW5jaW9uIGRlIGlyIGEgZmlsdHJhciBhcGVuYXMgc2UgbW9udGUgZWwgY29tcG9uZW50ZS4gU2lubyBxdWUgc2UgZWplY3V0ZSBjdWFuZG8gZGUgdmVyZGFkIHNlIHF1aWVyYSBmaWx0cmFyLlxyXG4gICAgICAgIGlmKGVzdGFkb0ZpbHRyby5maWx0cmFuZG8pe1xyXG4gICAgICAgICAgICBsZXQgdXJsRmlsdHJvID0gYXJtYXJVcmxGaWx0cm8oKTsvL2FybW8gbGEgdXJsIHF1ZSBtYW5kbyBhIGxhIGFwaSBwYXJhIHRyYWVyIGxvcyByZXN1bHRhZG9zIGRlIGxvIGZpbHRyYWRvLlxyXG4gICAgICAgICAgICBwcm9wcy5zdWJwcm9kdWN0b3NGaWx0cmFyUHJvZHVjdG9zKHVybEZpbHRybyk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBsaW1waWFyRmlsdHJvID0gdGlwbz0+e1xyXG4gICAgICAgIHN3aXRjaCAodGlwbykge1xyXG4gICAgICAgICAgICBjYXNlICdjYXRlZ29yaWEnOlxyXG4gICAgICAgICAgICAgICAgc2V0RXN0YWRvRmlsdHJvKHtcclxuICAgICAgICAgICAgICAgICAgICAuLi5lc3RhZG9GaWx0cm8sXHJcbiAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcmlhOicnXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdzdWJjYXRlZ29yaWEnOlxyXG4gICAgICAgICAgICAgICAgc2V0RXN0YWRvRmlsdHJvKHtcclxuICAgICAgICAgICAgICAgICAgICAuLi5lc3RhZG9GaWx0cm8sXHJcbiAgICAgICAgICAgICAgICAgICAgc3ViY2F0ZWdvcmlhOicnXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdtYXJjYSc6XHJcbiAgICAgICAgICAgICAgICBzZXRFc3RhZG9GaWx0cm8oe1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLmVzdGFkb0ZpbHRybyxcclxuICAgICAgICAgICAgICAgICAgICBtYXJjYTonJ1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHByb3BzLnN1YnByb2R1Y3Rvc1RyYWVyVG9kb3MoKTtcclxuICAgICAgICAgICAgICAgIHNldEVzdGFkb0ZpbHRybyh7XHJcbiAgICAgICAgICAgICAgICAgICAgZmlsdHJhbmRvOmZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIGNhdGVnb3JpYTonJyxcclxuICAgICAgICAgICAgICAgICAgICBzdWJjYXRlZ29yaWE6JycsXHJcbiAgICAgICAgICAgICAgICAgICAgbWFyY2E6JycsXHJcbiAgICAgICAgICAgICAgICAgICAgYnVzY2Fkb3I6JydcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY2xvc2VGaWx0cm9zTW9iaWxlID0gKCk9PntcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKEZpbHRyb1N0eWxlLmZpbHRyb3NfX2NvbnRhbmllcilbMF0uY2xhc3NMaXN0LnJlbW92ZShGaWx0cm9TdHlsZS5zaG93X2ZpbHRyb3MpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGFybWFyVXJsRmlsdHJvID0gKCk9PntcclxuICAgICAgICBsZXQgdXJsID0gJ2ZpbHRyYXInO1xyXG4gICAgICAgIC8vc2kgYnVzY2Fkb3IgdmllbmUgdHJ1ZSwgZXMgcG9ycXVlIHZpZW5lIGRlc2RlIGVsIGJ1c2NhZG9yIGRlbCBtZW51IG8gbW9kYWwgZGUgYnVzY2Fkb3IobW9iaWxlKS5cclxuICAgICAgICBpZihlc3RhZG9GaWx0cm8uYnVzY2Fkb3IhPT0nJykgcmV0dXJuIHVybCArPSBgP2J1c2Nhcj0ke2VzdGFkb0ZpbHRyby5idXNjYWRvcn1gO1xyXG5cclxuICAgICAgICBsZXQgY2F0ZWdvcmlhID0gZXN0YWRvRmlsdHJvLmNhdGVnb3JpYSxcclxuICAgICAgICAgICAgc3ViY2F0ZWdvcmlhID0gZXN0YWRvRmlsdHJvLnN1YmNhdGVnb3JpYSxcclxuICAgICAgICAgICAgbWFyY2EgPSBlc3RhZG9GaWx0cm8ubWFyY2E7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYoY2F0ZWdvcmlhICYmIGNhdGVnb3JpYSAhPT0gJycpe1xyXG4gICAgICAgICAgICB1cmwgKz0gYD9jYXRlZ29yaWE9JHtlc3RhZG9GaWx0cm8uY2F0ZWdvcmlhfWA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKGVzdGFkb0ZpbHRyby5zdWJjYXRlZ29yaWEgJiYgZXN0YWRvRmlsdHJvLnN1YmNhdGVnb3JpYSAhPT0gJycpe1xyXG4gICAgICAgICAgICBpZihjYXRlZ29yaWEhPT0gJycpe1xyXG4gICAgICAgICAgICAgICAgdXJsICs9IGAmc3ViY2F0ZWdvcmlhPSR7ZXN0YWRvRmlsdHJvLnN1YmNhdGVnb3JpYX1gOyBcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICB1cmwgKz0gYD9zdWJjYXRlZ29yaWE9JHtlc3RhZG9GaWx0cm8uc3ViY2F0ZWdvcmlhfWA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYobWFyY2EgJiYgbWFyY2EgIT09ICcnKXtcclxuICAgICAgICAgICAgaWYoY2F0ZWdvcmlhICE9PSAnJyAmJiBzdWJjYXRlZ29yaWEgIT09ICcnKXtcclxuICAgICAgICAgICAgICAgIHVybCArPSBgP21hcmNhPSR7ZXN0YWRvRmlsdHJvLm1hcmNhfWA7XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgdXJsICs9IGAmbWFyY2E9JHtlc3RhZG9GaWx0cm8ubWFyY2F9YDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdXJsO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHNob3dGaWx0cm9zID0gKCk9PntcclxuICAgICAgICBsZXQgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoRmlsdHJvU3R5bGUuZmlsdHJvc19fY29udGFuaWVyKVswXTtcclxuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoRmlsdHJvU3R5bGUuc2hvdyk7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ljb25GaWx0cm9Db250YWluZXInKS5jbGFzc0xpc3QudG9nZ2xlKEZpbHRyb1N0eWxlLnJvdGFyKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtGaWx0cm9TdHlsZS5maWx0cm9zX19jb250YW5pZXJ9PlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17RmlsdHJvU3R5bGUuYnRuX2Nsb3NlX2ZpbHRyb30gb25DbGljaz17c2hvd0ZpbHRyb3N9PlxyXG4gICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpZD1cImljb25GaWx0cm9Db250YWluZXJcIiBpY29uPXtmYUNoZXZyb25SaWdodH0vPlxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIHsocHJvcHMuY2F0ZWdvcmlhc1JlZHVjZXIuY2F0ZWdvcmlhcy5sZW5ndGg9PTAgfHwgcHJvcHMuc3ViY2F0ZWdvcmlhUmVkdWNlci5zdWJjYXRlZ29yaWFzLmxlbmd0aD09MCB8fCBwcm9wcy5tYXJjYXNSZWR1Y2VyLm1hcmNhcy5sZW5ndGg9PTApPzxMb2FkZXIvPjpcclxuICAgICAgICAgICAgICAgICAgICA8PiAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsoZXN0YWRvRmlsdHJvLmZpbHRyYW5kbyk/PGJ1dHRvbiBjbGFzc05hbWU9XCJib3RvbiBiZy15ZWxsb3cgbWItM1wiIG9uQ2xpY2s9e2xpbXBpYXJGaWx0cm99PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUJyb29tfS8+IExpbXBpYXIgRmlsdHJvc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj46bnVsbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVRpbWVzfSBjbGFzc05hbWU9e0ZpbHRyb1N0eWxlLmNlcnJhcl9maWx0cm9fbW9iaWxlfSBvbkNsaWNrPXtjbG9zZUZpbHRyb3NNb2JpbGV9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT17RmlsdHJvU3R5bGUudGl0dWxvX2ZpbHRyb3N9Pk1hc2NvdGE8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPXtGaWx0cm9TdHlsZS5saXN0YX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHMuY2F0ZWdvcmlhc1JlZHVjZXIuY2F0ZWdvcmlhcy5tYXAoY2F0PT4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2NhdC5pZENhdGVnb3JpYX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17RmlsdHJvU3R5bGUuaXRlbV9maWx0cm99IG5hbWU9e2BjYXRlZ29yaWEtJHtjYXQuaWRDYXRlZ29yaWF9YH0gb25DbGljaz17KCk9PmFjdGl2YXJGaWx0cm8oJ2NhdGVnb3JpYScsYCR7Y2F0LmlkQ2F0ZWdvcmlhfWApfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkXCI+e2NhdC5jYXRlZ29yaWF9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhVGltZXN9IGNsYXNzTmFtZT17RmlsdHJvU3R5bGUuaWNvbl9jbG9zZV9maWx0cm8gKyAnICcgKyBgZC1ub25lYH0gb25DbGljaz17KCk9PmxpbXBpYXJGaWx0cm8oJ2NhdGVnb3JpYScpfSBpZD17YGNsb3NlLWNhdGVnb3JpYS0ke2NhdC5pZENhdGVnb3JpYX1gfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPXtGaWx0cm9TdHlsZS50aXR1bG9fZmlsdHJvc30+QWxpbWVudG9zPC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT17RmlsdHJvU3R5bGUubGlzdGF9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzLnN1YmNhdGVnb3JpYVJlZHVjZXIuc3ViY2F0ZWdvcmlhcy5tYXAoc2M9PihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17c2MuaWRTdWJDYXRlZ29yaWF9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e0ZpbHRyb1N0eWxlLml0ZW1fZmlsdHJvfSBuYW1lPXtgc3ViY2F0ZWdvcmlhLSR7c2MuaWRTdWJDYXRlZ29yaWF9YH0gb25DbGljaz17KCk9PmFjdGl2YXJGaWx0cm8oJ3N1YmNhdGVnb3JpYScsYCR7c2MuaWRTdWJDYXRlZ29yaWF9YCl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtbXV0ZWRcIj57c2Muc3ViY2F0ZWdvcmlhfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVRpbWVzfSBjbGFzc05hbWU9e0ZpbHRyb1N0eWxlLmljb25fY2xvc2VfZmlsdHJvICsgJyAnICsgYGQtbm9uZWB9IG9uQ2xpY2s9eygpPT5saW1waWFyRmlsdHJvKCdzdWJjYXRlZ29yaWEnKX0gaWQ9e2BjbG9zZS0ke2BzdWJjYXRlZ29yaWEtJHtzYy5pZFN1YkNhdGVnb3JpYX1gfWB9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT17RmlsdHJvU3R5bGUudGl0dWxvX2ZpbHRyb3N9Pk1hcmNhPC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGlkPVwibGlzdGFNYXJjYVwiIGNsYXNzTmFtZT17RmlsdHJvU3R5bGUuc2luQm9yZGVyQm90dG9tKyAnICcgKyBGaWx0cm9TdHlsZS5saXN0YX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHMubWFyY2FzUmVkdWNlci5tYXJjYXMubWFwKChtYXJjYSxrZXkpPT4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChrZXk+Myk/ZmFsc2U6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e21hcmNhLmlkTWFyY2F9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e0ZpbHRyb1N0eWxlLml0ZW1fZmlsdHJvfSBuYW1lPXtgbWFyY2EtJHttYXJjYS5pZE1hcmNhfWB9IG9uQ2xpY2s9eygpPT5hY3RpdmFyRmlsdHJvKCdtYXJjYScsYCR7bWFyY2EuaWRNYXJjYX1gKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1tdXRlZFwiPnttYXJjYS5tYXJjYX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFUaW1lc30gY2xhc3NOYW1lPXtGaWx0cm9TdHlsZS5pY29uX2Nsb3NlX2ZpbHRybyArICcgJyArIGBkLW5vbmVgfSBvbkNsaWNrPXsoKT0+bGltcGlhckZpbHRybygnbWFyY2EnKX0gaWQ9e2BjbG9zZS1tYXJjYS0ke21hcmNhLmlkTWFyY2F9YH0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCk9PnNldE1vZGFsSXNPcGVuKHRydWUpfSBjbGFzc05hbWU9XCJib3RvbiBiZy1ncmlzXCI+VmVyIHRvZGFzPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB7KCFtb2RhbElzT3Blbik/bnVsbDpcclxuICAgICAgICAgICAgICAgIDxNb2RhbCBjbG9zZU1vZGFsPXtvbkNsb3NlTW9kYWx9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxNb2RhbE1hcmNhIGNsb3NlTW9kYWw9e29uQ2xvc2VNb2RhbH0gYWN0aXZhckZpbHRybz17YWN0aXZhckZpbHRyb30vPlxyXG4gICAgICAgICAgICAgICAgPC9Nb2RhbD5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHttYXJjYXNSZWR1Y2VyLHN1YnByb2R1Y3Rvc1JlZHVjZXIsY2F0ZWdvcmlhc1JlZHVjZXIsc3ViY2F0ZWdvcmlhUmVkdWNlcn0pPT57XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG1hcmNhc1JlZHVjZXIsXHJcbiAgICAgICAgc3VicHJvZHVjdG9zUmVkdWNlcixcclxuICAgICAgICBjYXRlZ29yaWFzUmVkdWNlcixcclxuICAgICAgICBzdWJjYXRlZ29yaWFSZWR1Y2VyXHJcbiAgICB9O1xyXG59XHJcblxyXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSB7XHJcbiAgICBtYXJjYXNUcmFlclRvZGFzLFxyXG4gICAgc3VicHJvZHVjdG9zRmlsdHJhclByb2R1Y3RvcyxcclxuICAgIHN1YnByb2R1Y3Rvc1RyYWVyVG9kb3MsXHJcbiAgICBjYXRlZ29yaWFzVHJhZXJUb2RhcyxcclxuICAgIHN1YmNhdGVnb3JpYVRyYWVyVG9kYXNcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsbWFwRGlzcGF0Y2hUb1Byb3BzKShGaWx0cm8pOyJdLCJzb3VyY2VSb290IjoiIn0=