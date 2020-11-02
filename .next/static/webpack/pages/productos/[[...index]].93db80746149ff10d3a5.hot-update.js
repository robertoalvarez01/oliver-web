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
              console.log(props.marcas); //asigno las clases, atributos y eventos necesarios.

              divItemMarca.className = "".concat(_Filtro_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.item_filtro, " ").concat(_Filtro_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.active);
              divItemMarca.setAttribute('name', "marca-".concat(estadoFiltro.marca));
              divItemMarca.addEventListener('click', function () {
                return activarFiltro('marca', estadoFiltro.marca);
              });
              spanItemMarca.className = 'text-muted';
              spanItemMarca.innerHTML = estadoFiltro.marca;
              iconClose.innerHTML = "\n                                <svg aria-hidden=\"true\" focusable=\"false\" data-prefix=\"fas\" data-icon=\"times\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewbox=\"0 0 352 512\" class=\"svg-inline--fa fa-times fa-w-11 Filtro_icon_close_filtro__1xlv5\" id=\"close-marca-".concat(estadoFiltro.marca, "\">\n                                    <path fill=\"currentColor\" d=\"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z\"></path>\n                                </svg>\n                            "); //voy ubicando los elementos dentro de cada padre

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
      lineNumber: 244,
      columnNumber: 9
    }
  }, __jsx("button", {
    className: _Filtro_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.btn_close_filtro,
    onClick: showFiltros,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 245,
      columnNumber: 13
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeIcon"], {
    id: "iconFiltroContainer",
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faChevronRight"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 246,
      columnNumber: 17
    }
  })), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 248,
      columnNumber: 13
    }
  }, props.categoriasReducer.categorias.length == 0 || props.subcategoriaReducer.subcategorias.length == 0 || props.marcasReducer.marcas.length == 0 ? __jsx(_Loader__WEBPACK_IMPORTED_MODULE_14__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 249,
      columnNumber: 158
    }
  }) : __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, estadoFiltro.filtrando ? __jsx("button", {
    className: "boton bg-yellow mb-3",
    onClick: limpiarFiltro,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 251,
      columnNumber: 51
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faBroom"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 252,
      columnNumber: 29
    }
  }), " Limpiar Filtros") : null, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faTimes"],
    className: _Filtro_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.cerrar_filtro_mobile,
    onClick: closeFiltrosMobile,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 254,
      columnNumber: 25
    }
  }), __jsx("h4", {
    className: _Filtro_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.titulo_filtros,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 255,
      columnNumber: 25
    }
  }, "Mascota"), __jsx("ul", {
    className: _Filtro_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.lista,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 256,
      columnNumber: 25
    }
  }, props.categoriasReducer.categorias.map(function (cat) {
    return __jsx("li", {
      key: cat.idCategoria,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 259,
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
        lineNumber: 260,
        columnNumber: 41
      }
    }, __jsx("span", {
      className: "text-muted",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 261,
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
        lineNumber: 263,
        columnNumber: 41
      }
    }));
  })), __jsx("h4", {
    className: _Filtro_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.titulo_filtros,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 270,
      columnNumber: 25
    }
  }, "Alimentos"), __jsx("ul", {
    className: _Filtro_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.lista,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 271,
      columnNumber: 25
    }
  }, props.subcategoriaReducer.subcategorias.map(function (sc) {
    return __jsx("li", {
      key: sc.idSubCategoria,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 274,
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
        lineNumber: 275,
        columnNumber: 41
      }
    }, __jsx("span", {
      className: "text-muted",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 276,
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
        lineNumber: 278,
        columnNumber: 41
      }
    }));
  })), __jsx("h4", {
    className: _Filtro_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.titulo_filtros,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 284,
      columnNumber: 25
    }
  }, "Marca"), __jsx("ul", {
    id: "listaMarca",
    className: _Filtro_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.sinBorderBottom + ' ' + _Filtro_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.lista,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 285,
      columnNumber: 25
    }
  }, props.marcasReducer.marcas.map(function (marca, key) {
    return key > 3 ? false : __jsx("li", {
      key: marca.idMarca,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 289,
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
        lineNumber: 290,
        columnNumber: 41
      }
    }, __jsx("span", {
      className: "text-muted",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 291,
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
        lineNumber: 293,
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
      lineNumber: 298,
      columnNumber: 25
    }
  }, "Ver todas"))), !modalIsOpen ? null : __jsx(_Modal__WEBPACK_IMPORTED_MODULE_5__["default"], {
    closeModal: onCloseModal,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 303,
      columnNumber: 17
    }
  }, __jsx(_ModalMarca__WEBPACK_IMPORTED_MODULE_6__["default"], {
    closeModal: onCloseModal,
    activarFiltro: activarFiltro,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 304,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRmlsdHJvL2luZGV4LmpzIl0sIm5hbWVzIjpbIm1hcmNhc1RyYWVyVG9kYXMiLCJtYXJjYXNBY3Rpb25zIiwic3VicHJvZHVjdG9zRmlsdHJhclByb2R1Y3RvcyIsInN1YnByb2R1Y3Rvc0FjdGlvbnMiLCJzdWJwcm9kdWN0b3NUcmFlclRvZG9zIiwiY2F0ZWdvcmlhc1RyYWVyVG9kYXMiLCJjYXRlZ29yaWFzQWN0aW9ucyIsInN1YmNhdGVnb3JpYVRyYWVyVG9kYXMiLCJzdWJjYXRlZ29yaWFzQWN0aW9ucyIsIkZpbHRybyIsInByb3BzIiwidXNlU3RhdGUiLCJmaWx0cmFuZG8iLCJjYXRlZ29yaWEiLCJzdWJjYXRlZ29yaWEiLCJtYXJjYSIsImJ1c2NhZG9yIiwiZXN0YWRvRmlsdHJvIiwic2V0RXN0YWRvRmlsdHJvIiwibW9kYWxJc09wZW4iLCJzZXRNb2RhbElzT3BlbiIsIm9uQ2xvc2VNb2RhbCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJzdHlsZSIsIm92ZXJmbG93WSIsInVzZUVmZmVjdCIsImdldERhdGEiLCJtYXJjYXNSZWR1Y2VyIiwibWFyY2FzIiwibGVuZ3RoIiwiY2F0ZWdvcmlhc1JlZHVjZXIiLCJjYXRlZ29yaWFzIiwic3ViY2F0ZWdvcmlhUmVkdWNlciIsInN1YmNhdGVnb3JpYXMiLCJsb2NhdGlvbiIsImFjdGl2YXJGaWx0cm9Qb3JVcmwiLCJzd2l0Y2hJdGVtQWN0aXZlIiwiYWN0aXZhckZpbHRybyIsInF1ZXJ5IiwidHlwZSIsImluZGV4IiwidGlwb0ZpbHRybyIsImtleSIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJGaWx0cm9TdHlsZSIsIml0ZW1fZmlsdHJvIiwiZWxlbWVudCIsImNsYXNzTGlzdCIsInJlbW92ZSIsImFjdGl2ZSIsImljb25fY2xvc2VfZmlsdHJvIiwiYWRkIiwidHJpbSIsImdldEVsZW1lbnRzQnlOYW1lIiwiZ2V0RWxlbWVudEJ5SWQiLCJuZXdJdGVtTWFyY2EiLCJjcmVhdGVFbGVtZW50IiwiZGl2SXRlbU1hcmNhIiwic3Bhbkl0ZW1NYXJjYSIsImljb25DbG9zZSIsImNvbnNvbGUiLCJsb2ciLCJjbGFzc05hbWUiLCJzZXRBdHRyaWJ1dGUiLCJhZGRFdmVudExpc3RlbmVyIiwiaW5uZXJIVE1MIiwiYXBwZW5kQ2hpbGQiLCJxdWVyeVNlbGVjdG9yIiwiZmlyc3RJdGVtTWFyY2EiLCJjaGlsZHJlbiIsImxpc3RhTWFyY2FzIiwicmVtb3ZlQ2hpbGQiLCJ1cmxGaWx0cm8iLCJhcm1hclVybEZpbHRybyIsImxpbXBpYXJGaWx0cm8iLCJ0aXBvIiwiY2xvc2VGaWx0cm9zTW9iaWxlIiwiZmlsdHJvc19fY29udGFuaWVyIiwic2hvd19maWx0cm9zIiwidXJsIiwic2hvd0ZpbHRyb3MiLCJ0b2dnbGUiLCJzaG93Iiwicm90YXIiLCJidG5fY2xvc2VfZmlsdHJvIiwiZmFDaGV2cm9uUmlnaHQiLCJmYUJyb29tIiwiZmFUaW1lcyIsImNlcnJhcl9maWx0cm9fbW9iaWxlIiwidGl0dWxvX2ZpbHRyb3MiLCJsaXN0YSIsIm1hcCIsImNhdCIsImlkQ2F0ZWdvcmlhIiwic2MiLCJpZFN1YkNhdGVnb3JpYSIsInNpbkJvcmRlckJvdHRvbSIsImlkTWFyY2EiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdWJwcm9kdWN0b3NSZWR1Y2VyIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiY29ubmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtJQUVrQkEsZ0IsR0FBb0JDLHdFO0lBQ2RDLDRCLEdBQWtFQyxvRjtJQUExQkMsc0IsR0FBMEJELDhFO0lBQ3hFRSxvQixHQUF3QkMsMkU7SUFDeEJDLHNCLEdBQTBCQyw4RTs7QUFFNUMsSUFBTUMsTUFBTSxHQUFHLFNBQVRBLE1BQVMsQ0FBQ0Ms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LENBQUNELFdBQUYsR0FBZSxJQUFmLEdBQ0csTUFBQyw4Q0FBRDtBQUFPLGNBQVUsRUFBRUUsWUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsbURBQUQ7QUFBWSxjQUFVLEVBQUVBLFlBQXhCO0FBQXNDLGlCQUFhLEVBQUVpQixhQUFyRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosQ0EzRFIsQ0FESjtBQWtFSCxDQWxTRDs7R0FBTTdCLE07O0tBQUFBLE07O0FBb1NOLElBQU0wRixlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLFFBQTZFO0FBQUEsTUFBM0V2RSxhQUEyRSxTQUEzRUEsYUFBMkU7QUFBQSxNQUE3RHdFLG1CQUE2RCxTQUE3REEsbUJBQTZEO0FBQUEsTUFBekNyRSxpQkFBeUMsU0FBekNBLGlCQUF5QztBQUFBLE1BQXZCRSxtQkFBdUIsU0FBdkJBLG1CQUF1QjtBQUNqRyxTQUFPO0FBQ0hMLGlCQUFhLEVBQWJBLGFBREc7QUFFSHdFLHVCQUFtQixFQUFuQkEsbUJBRkc7QUFHSHJFLHFCQUFpQixFQUFqQkEsaUJBSEc7QUFJSEUsdUJBQW1CLEVBQW5CQTtBQUpHLEdBQVA7QUFNSCxDQVBEOztBQVNBLElBQU1vRSxrQkFBa0IsR0FBRztBQUN2QnJHLGtCQUFnQixFQUFoQkEsZ0JBRHVCO0FBRXZCRSw4QkFBNEIsRUFBNUJBLDRCQUZ1QjtBQUd2QkUsd0JBQXNCLEVBQXRCQSxzQkFIdUI7QUFJdkJDLHNCQUFvQixFQUFwQkEsb0JBSnVCO0FBS3ZCRSx3QkFBc0IsRUFBdEJBO0FBTHVCLENBQTNCO0FBUWUrRiwwSEFBTyxDQUFDSCxlQUFELEVBQWlCRSxrQkFBakIsQ0FBUCxDQUE0QzVGLE1BQTVDLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvZHVjdG9zL1tbLi4uaW5kZXhdXS45M2RiODA3NDYxNDlmZjEwZDNhNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEZpbHRyb1N0eWxlIGZyb20gJy4vRmlsdHJvLm1vZHVsZS5jc3MnO1xyXG5pbXBvcnQgTW9kYWwgZnJvbSAnLi4vTW9kYWwnO1xyXG5pbXBvcnQgTW9kYWxNYXJjYSBmcm9tICcuLi9Nb2RhbE1hcmNhJztcclxuaW1wb3J0IHsgZmFUaW1lcyxmYUJyb29tLGZhQ2hldnJvblJpZ2h0IH0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29uc1wiO1xyXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tIFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCI7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCAqIGFzIHN1YnByb2R1Y3Rvc0FjdGlvbnMgZnJvbSAnLi4vLi4vLi4vc3RvcmUvYWN0aW9ucy9zdWJwcm9kdWN0b3NBY3Rpb25zJztcclxuaW1wb3J0ICogYXMgbWFyY2FzQWN0aW9ucyBmcm9tICcuLi8uLi8uLi9zdG9yZS9hY3Rpb25zL21hcmNhc0FjdGlvbnMnO1xyXG5pbXBvcnQgKiBhcyBjYXRlZ29yaWFzQWN0aW9ucyBmcm9tICcuLi8uLi8uLi9zdG9yZS9hY3Rpb25zL2NhdGVnb3JpYXNBY3Rpb24nO1xyXG5pbXBvcnQgKiBhcyBzdWJjYXRlZ29yaWFzQWN0aW9ucyBmcm9tICcuLi8uLi8uLi9zdG9yZS9hY3Rpb25zL3N1YmNhdGVnb3JpYXNBY3Rpb24nO1xyXG5pbXBvcnQgTG9hZGVyIGZyb20gJy4uL0xvYWRlcic7XHJcblxyXG5jb25zdCB7dHJhZXJUb2RhczptYXJjYXNUcmFlclRvZGFzfSA9IG1hcmNhc0FjdGlvbnM7XHJcbmNvbnN0IHtmaWx0cmFyUHJvZHVjdG9zOnN1YnByb2R1Y3Rvc0ZpbHRyYXJQcm9kdWN0b3MsdHJhZXJUb2RvczpzdWJwcm9kdWN0b3NUcmFlclRvZG9zfSA9IHN1YnByb2R1Y3Rvc0FjdGlvbnM7XHJcbmNvbnN0IHt0cmFlclRvZGFzOmNhdGVnb3JpYXNUcmFlclRvZGFzfSA9IGNhdGVnb3JpYXNBY3Rpb25zO1xyXG5jb25zdCB7dHJhZXJUb2RhczpzdWJjYXRlZ29yaWFUcmFlclRvZGFzfSA9IHN1YmNhdGVnb3JpYXNBY3Rpb25zO1xyXG5cclxuY29uc3QgRmlsdHJvID0gKHByb3BzKSA9PiB7XHJcblxyXG4gICAgLy9zdGF0ZSBmb3IgdGhlIGZpbHRlcnNcclxuICAgIGNvbnN0IFtlc3RhZG9GaWx0cm8sIHNldEVzdGFkb0ZpbHRyb10gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgZmlsdHJhbmRvOmZhbHNlLFxyXG4gICAgICAgIGNhdGVnb3JpYTonJyxcclxuICAgICAgICBzdWJjYXRlZ29yaWE6JycsXHJcbiAgICAgICAgbWFyY2E6JycsXHJcbiAgICAgICAgYnVzY2Fkb3I6JydcclxuICAgIH0pO1xyXG5cclxuICAgIC8vbWFuZWpvIGRlIE1vZGFsIG1hcmNhc1xyXG4gICAgY29uc3QgW21vZGFsSXNPcGVuLCBzZXRNb2RhbElzT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBvbkNsb3NlTW9kYWwgPSAoKT0+e1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdib2R5JylbMF0uc3R5bGUub3ZlcmZsb3dZID0gJ3Njcm9sbCc7XHJcbiAgICAgICAgc2V0TW9kYWxJc09wZW4oZmFsc2UpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vbG9vcCBkZSBlZmVjdG8gcGFyYSBlamVjdXRhciBzb2xvIHVuYSB2ZXogY3VhbmRvIGVsIGNvbXBvbmVudGUgc2UgbW9udGUgZW4gZWwgY2FzbyBkZSBxdWUgc2UgZXN0ZSBmaWx0cmFuZG8gZGlyZWN0byBkZXNkZSBsYSB1cmxcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgZ2V0RGF0YSgpO1xyXG4gICAgfSxbXSk7XHJcbiAgICAgICAgXHJcbiAgICBjb25zdCBnZXREYXRhID0gYXN5bmMoKT0+e1xyXG4gICAgICAgIGlmKHByb3BzLm1hcmNhc1JlZHVjZXIubWFyY2FzLmxlbmd0aD09PTApe1xyXG4gICAgICAgICAgICBhd2FpdCBwcm9wcy5tYXJjYXNUcmFlclRvZGFzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHByb3BzLmNhdGVnb3JpYXNSZWR1Y2VyLmNhdGVnb3JpYXMubGVuZ3RoPT09MCl7XHJcbiAgICAgICAgICAgIGF3YWl0IHByb3BzLmNhdGVnb3JpYXNUcmFlclRvZGFzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHByb3BzLnN1YmNhdGVnb3JpYVJlZHVjZXIuc3ViY2F0ZWdvcmlhcy5sZW5ndGg9PT0wKXtcclxuICAgICAgICAgICAgYXdhaXQgcHJvcHMuc3ViY2F0ZWdvcmlhVHJhZXJUb2RhcygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZihwcm9wcy5sb2NhdGlvbiAhPT0gJy9wcm9kdWN0b3MnKXtcclxuICAgICAgICAgICAgYWN0aXZhckZpbHRyb1BvclVybCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvL2xvb3AgZGUgZWZlY3RvIHBhcmEgaGFjZXIgcmVuZGVyIGNhZGEgdmV6IHF1ZSBzZSBhZ3JlZ2EgbyBlbGltaW5hIHVuIGZpbHRyb1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBzd2l0Y2hJdGVtQWN0aXZlKCk7XHJcbiAgICB9LCBbZXN0YWRvRmlsdHJvXSk7XHJcblxyXG4gICAgY29uc3QgYWN0aXZhckZpbHRyb1BvclVybCA9ICgpPT57XHJcbiAgICAgICAgcmV0dXJuIGFjdGl2YXJGaWx0cm8ocHJvcHMucXVlcnkudHlwZSxwcm9wcy5xdWVyeS5pbmRleFsxXSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgYWN0aXZhckZpbHRybyA9ICh0aXBvRmlsdHJvLGtleSk9PntcclxuICAgICAgICBzd2l0Y2ggKHRpcG9GaWx0cm8pIHtcclxuICAgICAgICAgICAgY2FzZSAnY2F0ZWdvcmlhJzpcclxuICAgICAgICAgICAgICAgIHNldEVzdGFkb0ZpbHRybyh7XHJcbiAgICAgICAgICAgICAgICAgICAgLi4uZXN0YWRvRmlsdHJvLFxyXG4gICAgICAgICAgICAgICAgICAgIGNhdGVnb3JpYTprZXksXHJcbiAgICAgICAgICAgICAgICAgICAgYnVzY2Fkb3I6JycsXHJcbiAgICAgICAgICAgICAgICAgICAgZmlsdHJhbmRvOnRydWVcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ3N1YmNhdGVnb3JpYSc6XHJcbiAgICAgICAgICAgICAgICBzZXRFc3RhZG9GaWx0cm8oe1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLmVzdGFkb0ZpbHRybyxcclxuICAgICAgICAgICAgICAgICAgICBzdWJjYXRlZ29yaWE6a2V5LFxyXG4gICAgICAgICAgICAgICAgICAgIGJ1c2NhZG9yOicnLFxyXG4gICAgICAgICAgICAgICAgICAgIGZpbHRyYW5kbzp0cnVlXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ21hcmNhJzpcclxuICAgICAgICAgICAgICAgIHNldEVzdGFkb0ZpbHRybyh7XHJcbiAgICAgICAgICAgICAgICAgICAgLi4uZXN0YWRvRmlsdHJvLFxyXG4gICAgICAgICAgICAgICAgICAgIG1hcmNhOmtleSxcclxuICAgICAgICAgICAgICAgICAgICBidXNjYWRvcjonJyxcclxuICAgICAgICAgICAgICAgICAgICBmaWx0cmFuZG86dHJ1ZVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdidXNjYWRvcic6XHJcbiAgICAgICAgICAgICAgICBzZXRFc3RhZG9GaWx0cm8oe1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLmVzdGFkb0ZpbHRybyxcclxuICAgICAgICAgICAgICAgICAgICBidXNjYWRvcjprZXksXHJcbiAgICAgICAgICAgICAgICAgICAgZmlsdHJhbmRvOnRydWVcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc3dpdGNoSXRlbUFjdGl2ZSA9ICgpPT57XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coZXN0YWRvRmlsdHJvKTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoRmlsdHJvU3R5bGUuaXRlbV9maWx0cm8pLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShGaWx0cm9TdHlsZS5pdGVtX2ZpbHRybylbaW5kZXhdO1xyXG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoRmlsdHJvU3R5bGUuYWN0aXZlKTtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShGaWx0cm9TdHlsZS5pY29uX2Nsb3NlX2ZpbHRybylbaW5kZXhdLmNsYXNzTGlzdC5hZGQoJ2Qtbm9uZScpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgaWYoIWVzdGFkb0ZpbHRyby5maWx0cmFuZG8pIHJldHVybjtcclxuICAgICAgICAvL3NpIG5vIGhheSBuYWRhIGVuIGJ1c2NhZG9yLCBwdWVkbyBzZXRlYXIgdW4gYWN0aXZlIGVuIGFsZ3VuIGVsZW1lbnRvIGRlIGxhIGxpc3RhXHJcbiAgICAgICAgaWYoZXN0YWRvRmlsdHJvLmJ1c2NhZG9yLnRyaW0oKT09PScnKXtcclxuICAgICAgICAgICAgLy9yZWNvcnJvIGVsIHN0YXRlIHBhcmEgb2J0ZW5lciBsYXMgY2xhdmVzIHkgYWdyZWdhciBhY3RpdmUgZWwgZWxlbWVudG8gY29ycmVzcG9uZGllbnRlXHJcbiAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IGluIGVzdGFkb0ZpbHRybykge1xyXG4gICAgICAgICAgICAgICAgaWYoZXN0YWRvRmlsdHJvW2tleV0gJiYgZXN0YWRvRmlsdHJvW2tleV0hPT0nJyAmJiBlc3RhZG9GaWx0cm9ba2V5XSE9PXRydWUpe1xyXG4gICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coa2V5KTtcclxuICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKGVzdGFkb0ZpbHRyb1trZXldKTtcclxuICAgICAgICAgICAgICAgICAgICBpZihkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShgJHtrZXl9LSR7ZXN0YWRvRmlsdHJvW2tleV19YClbMF0pey8vcHJlZ3VudG8gc2kgZXhpc3RlIGVsIGVsZW1lbnRvIGNvbiBlbCBuYW1lIGRlbCBmaWx0cm8gcGFyYSBhZ3JlZ2FybGUgZWwgYWN0aXZlLCBzaSBubyBleGlzdGUgbG8gY3Jlby4gKHNpIG5vIGV4aXN0ZSBlcyBwb3JxdWUgdmllbmUgZGVzZGUgbW9kYWwgZGUgbWFyY2FzKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShgJHtrZXl9LSR7ZXN0YWRvRmlsdHJvW2tleV19YClbMF0uY2xhc3NMaXN0LmFkZChGaWx0cm9TdHlsZS5hY3RpdmUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgY2xvc2UtJHtrZXl9LSR7ZXN0YWRvRmlsdHJvW2tleV19YCkuY2xhc3NMaXN0LnJlbW92ZSgnZC1ub25lJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGVzdGFkb0ZpbHRyby5tYXJjYSE9PScnKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vY3JlbyBsb3MgZWxlbWVudG9zIGRlbCBpdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbmV3SXRlbU1hcmNhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkaXZJdGVtTWFyY2EgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzcGFuSXRlbU1hcmNhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGljb25DbG9zZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N2ZycpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHByb3BzLm1hcmNhcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2FzaWdubyBsYXMgY2xhc2VzLCBhdHJpYnV0b3MgeSBldmVudG9zIG5lY2VzYXJpb3MuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXZJdGVtTWFyY2EuY2xhc3NOYW1lID1gJHtGaWx0cm9TdHlsZS5pdGVtX2ZpbHRyb30gJHtGaWx0cm9TdHlsZS5hY3RpdmV9YDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpdkl0ZW1NYXJjYS5zZXRBdHRyaWJ1dGUoJ25hbWUnLGBtYXJjYS0ke2VzdGFkb0ZpbHRyby5tYXJjYX1gKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpdkl0ZW1NYXJjYS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PmFjdGl2YXJGaWx0cm8oJ21hcmNhJyxlc3RhZG9GaWx0cm8ubWFyY2EpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNwYW5JdGVtTWFyY2EuY2xhc3NOYW1lID0gJ3RleHQtbXV0ZWQnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Bhbkl0ZW1NYXJjYS5pbm5lckhUTUwgPSBlc3RhZG9GaWx0cm8ubWFyY2E7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb25DbG9zZS5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyBhcmlhLWhpZGRlbj1cInRydWVcIiBmb2N1c2FibGU9XCJmYWxzZVwiIGRhdGEtcHJlZml4PVwiZmFzXCIgZGF0YS1pY29uPVwidGltZXNcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdib3g9XCIwIDAgMzUyIDUxMlwiIGNsYXNzPVwic3ZnLWlubGluZS0tZmEgZmEtdGltZXMgZmEtdy0xMSBGaWx0cm9faWNvbl9jbG9zZV9maWx0cm9fXzF4bHY1XCIgaWQ9XCJjbG9zZS1tYXJjYS0ke2VzdGFkb0ZpbHRyby5tYXJjYX1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMjQyLjcyIDI1NmwxMDAuMDctMTAwLjA3YzEyLjI4LTEyLjI4IDEyLjI4LTMyLjE5IDAtNDQuNDhsLTIyLjI0LTIyLjI0Yy0xMi4yOC0xMi4yOC0zMi4xOS0xMi4yOC00NC40OCAwTDE3NiAxODkuMjggNzUuOTMgODkuMjFjLTEyLjI4LTEyLjI4LTMyLjE5LTEyLjI4LTQ0LjQ4IDBMOS4yMSAxMTEuNDVjLTEyLjI4IDEyLjI4LTEyLjI4IDMyLjE5IDAgNDQuNDhMMTA5LjI4IDI1NiA5LjIxIDM1Ni4wN2MtMTIuMjggMTIuMjgtMTIuMjggMzIuMTkgMCA0NC40OGwyMi4yNCAyMi4yNGMxMi4yOCAxMi4yOCAzMi4yIDEyLjI4IDQ0LjQ4IDBMMTc2IDMyMi43MmwxMDAuMDcgMTAwLjA3YzEyLjI4IDEyLjI4IDMyLjIgMTIuMjggNDQuNDggMGwyMi4yNC0yMi4yNGMxMi4yOC0xMi4yOCAxMi4yOC0zMi4xOSAwLTQ0LjQ4TDI0Mi43MiAyNTZ6XCI+PC9wYXRoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL3ZveSB1YmljYW5kbyBsb3MgZWxlbWVudG9zIGRlbnRybyBkZSBjYWRhIHBhZHJlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXZJdGVtTWFyY2EuYXBwZW5kQ2hpbGQoc3Bhbkl0ZW1NYXJjYSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdJdGVtTWFyY2EuYXBwZW5kQ2hpbGQoZGl2SXRlbU1hcmNhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld0l0ZW1NYXJjYS5hcHBlbmRDaGlsZChpY29uQ2xvc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL09idGVuZ28gZWwgcHJpbWVyIGl0ZW0gZGUgbGEgbGlzdGEgeSBsbyBlbGltaW5vLCBwYXJhIHRlbmVyIHNpZW1wcmUgbGEgbWlzbWEgY2FudGlkYWQgZGUgbWFyY2FzIGVuIGxhIGxpc3RhLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI2xpc3RhTWFyY2FgKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGZpcnN0SXRlbU1hcmNhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI2xpc3RhTWFyY2FgKS5jaGlsZHJlblswXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbGlzdGFNYXJjYXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjbGlzdGFNYXJjYWApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpc3RhTWFyY2FzLnJlbW92ZUNoaWxkKGZpcnN0SXRlbU1hcmNhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2Fob3JhIGFncmVnbyBlbCBpdGVtIGNyZWFkbyBhIGxhIGxpc3RhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGlzdGFNYXJjYXMuYXBwZW5kQ2hpbGQobmV3SXRlbU1hcmNhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vbGEgcHJpbWVyYSB2ZXogcXVlIHNlIGNhcmdhIGVsIGNvbXBvbmVudGUsIGZpbHRyYW5kbyBlcyBmYWxzZSwgcG9yIGVzbyBwcmVndW50byBwYXJhIHF1ZSBubyBzZSBlamVjdXRhIGxhIGZ1bmNpb24gZGUgaXIgYSBmaWx0cmFyIGFwZW5hcyBzZSBtb250ZSBlbCBjb21wb25lbnRlLiBTaW5vIHF1ZSBzZSBlamVjdXRlIGN1YW5kbyBkZSB2ZXJkYWQgc2UgcXVpZXJhIGZpbHRyYXIuXHJcbiAgICAgICAgaWYoZXN0YWRvRmlsdHJvLmZpbHRyYW5kbyl7XHJcbiAgICAgICAgICAgIGxldCB1cmxGaWx0cm8gPSBhcm1hclVybEZpbHRybygpOy8vYXJtbyBsYSB1cmwgcXVlIG1hbmRvIGEgbGEgYXBpIHBhcmEgdHJhZXIgbG9zIHJlc3VsdGFkb3MgZGUgbG8gZmlsdHJhZG8uXHJcbiAgICAgICAgICAgIHByb3BzLnN1YnByb2R1Y3Rvc0ZpbHRyYXJQcm9kdWN0b3ModXJsRmlsdHJvKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGxpbXBpYXJGaWx0cm8gPSB0aXBvPT57XHJcbiAgICAgICAgc3dpdGNoICh0aXBvKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ2NhdGVnb3JpYSc6XHJcbiAgICAgICAgICAgICAgICBzZXRFc3RhZG9GaWx0cm8oe1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLmVzdGFkb0ZpbHRybyxcclxuICAgICAgICAgICAgICAgICAgICBjYXRlZ29yaWE6JydcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ3N1YmNhdGVnb3JpYSc6XHJcbiAgICAgICAgICAgICAgICBzZXRFc3RhZG9GaWx0cm8oe1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLmVzdGFkb0ZpbHRybyxcclxuICAgICAgICAgICAgICAgICAgICBzdWJjYXRlZ29yaWE6JydcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ21hcmNhJzpcclxuICAgICAgICAgICAgICAgIHNldEVzdGFkb0ZpbHRybyh7XHJcbiAgICAgICAgICAgICAgICAgICAgLi4uZXN0YWRvRmlsdHJvLFxyXG4gICAgICAgICAgICAgICAgICAgIG1hcmNhOicnXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgcHJvcHMuc3VicHJvZHVjdG9zVHJhZXJUb2RvcygpO1xyXG4gICAgICAgICAgICAgICAgc2V0RXN0YWRvRmlsdHJvKHtcclxuICAgICAgICAgICAgICAgICAgICBmaWx0cmFuZG86ZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcmlhOicnLFxyXG4gICAgICAgICAgICAgICAgICAgIHN1YmNhdGVnb3JpYTonJyxcclxuICAgICAgICAgICAgICAgICAgICBtYXJjYTonJyxcclxuICAgICAgICAgICAgICAgICAgICBidXNjYWRvcjonJ1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjbG9zZUZpbHRyb3NNb2JpbGUgPSAoKT0+e1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoRmlsdHJvU3R5bGUuZmlsdHJvc19fY29udGFuaWVyKVswXS5jbGFzc0xpc3QucmVtb3ZlKEZpbHRyb1N0eWxlLnNob3dfZmlsdHJvcyk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgYXJtYXJVcmxGaWx0cm8gPSAoKT0+e1xyXG4gICAgICAgIGxldCB1cmwgPSAnZmlsdHJhcic7XHJcbiAgICAgICAgLy9zaSBidXNjYWRvciB2aWVuZSB0cnVlLCBlcyBwb3JxdWUgdmllbmUgZGVzZGUgZWwgYnVzY2Fkb3IgZGVsIG1lbnUgbyBtb2RhbCBkZSBidXNjYWRvcihtb2JpbGUpLlxyXG4gICAgICAgIGlmKGVzdGFkb0ZpbHRyby5idXNjYWRvciE9PScnKSByZXR1cm4gdXJsICs9IGA/YnVzY2FyPSR7ZXN0YWRvRmlsdHJvLmJ1c2NhZG9yfWA7XHJcblxyXG4gICAgICAgIGxldCBjYXRlZ29yaWEgPSBlc3RhZG9GaWx0cm8uY2F0ZWdvcmlhLFxyXG4gICAgICAgICAgICBzdWJjYXRlZ29yaWEgPSBlc3RhZG9GaWx0cm8uc3ViY2F0ZWdvcmlhLFxyXG4gICAgICAgICAgICBtYXJjYSA9IGVzdGFkb0ZpbHRyby5tYXJjYTtcclxuICAgICAgICBcclxuICAgICAgICBpZihjYXRlZ29yaWEgJiYgY2F0ZWdvcmlhICE9PSAnJyl7XHJcbiAgICAgICAgICAgIHVybCArPSBgP2NhdGVnb3JpYT0ke2VzdGFkb0ZpbHRyby5jYXRlZ29yaWF9YDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoZXN0YWRvRmlsdHJvLnN1YmNhdGVnb3JpYSAmJiBlc3RhZG9GaWx0cm8uc3ViY2F0ZWdvcmlhICE9PSAnJyl7XHJcbiAgICAgICAgICAgIGlmKGNhdGVnb3JpYSE9PSAnJyl7XHJcbiAgICAgICAgICAgICAgICB1cmwgKz0gYCZzdWJjYXRlZ29yaWE9JHtlc3RhZG9GaWx0cm8uc3ViY2F0ZWdvcmlhfWA7IFxyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIHVybCArPSBgP3N1YmNhdGVnb3JpYT0ke2VzdGFkb0ZpbHRyby5zdWJjYXRlZ29yaWF9YDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZihtYXJjYSAmJiBtYXJjYSAhPT0gJycpe1xyXG4gICAgICAgICAgICBpZihjYXRlZ29yaWEgIT09ICcnICYmIHN1YmNhdGVnb3JpYSAhPT0gJycpe1xyXG4gICAgICAgICAgICAgICAgdXJsICs9IGA/bWFyY2E9JHtlc3RhZG9GaWx0cm8ubWFyY2F9YDtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICB1cmwgKz0gYCZtYXJjYT0ke2VzdGFkb0ZpbHRyby5tYXJjYX1gO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB1cmw7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc2hvd0ZpbHRyb3MgPSAoKT0+e1xyXG4gICAgICAgIGxldCBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShGaWx0cm9TdHlsZS5maWx0cm9zX19jb250YW5pZXIpWzBdO1xyXG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZShGaWx0cm9TdHlsZS5zaG93KTtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaWNvbkZpbHRyb0NvbnRhaW5lcicpLmNsYXNzTGlzdC50b2dnbGUoRmlsdHJvU3R5bGUucm90YXIpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e0ZpbHRyb1N0eWxlLmZpbHRyb3NfX2NvbnRhbmllcn0+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtGaWx0cm9TdHlsZS5idG5fY2xvc2VfZmlsdHJvfSBvbkNsaWNrPXtzaG93RmlsdHJvc30+XHJcbiAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGlkPVwiaWNvbkZpbHRyb0NvbnRhaW5lclwiIGljb249e2ZhQ2hldnJvblJpZ2h0fS8+XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgeyhwcm9wcy5jYXRlZ29yaWFzUmVkdWNlci5jYXRlZ29yaWFzLmxlbmd0aD09MCB8fCBwcm9wcy5zdWJjYXRlZ29yaWFSZWR1Y2VyLnN1YmNhdGVnb3JpYXMubGVuZ3RoPT0wIHx8IHByb3BzLm1hcmNhc1JlZHVjZXIubWFyY2FzLmxlbmd0aD09MCk/PExvYWRlci8+OlxyXG4gICAgICAgICAgICAgICAgICAgIDw+ICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgeyhlc3RhZG9GaWx0cm8uZmlsdHJhbmRvKT88YnV0dG9uIGNsYXNzTmFtZT1cImJvdG9uIGJnLXllbGxvdyBtYi0zXCIgb25DbGljaz17bGltcGlhckZpbHRyb30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhQnJvb219Lz4gTGltcGlhciBGaWx0cm9zXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPjpudWxsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhVGltZXN9IGNsYXNzTmFtZT17RmlsdHJvU3R5bGUuY2VycmFyX2ZpbHRyb19tb2JpbGV9IG9uQ2xpY2s9e2Nsb3NlRmlsdHJvc01vYmlsZX0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPXtGaWx0cm9TdHlsZS50aXR1bG9fZmlsdHJvc30+TWFzY290YTwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9e0ZpbHRyb1N0eWxlLmxpc3RhfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wcy5jYXRlZ29yaWFzUmVkdWNlci5jYXRlZ29yaWFzLm1hcChjYXQ9PihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17Y2F0LmlkQ2F0ZWdvcmlhfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtGaWx0cm9TdHlsZS5pdGVtX2ZpbHRyb30gbmFtZT17YGNhdGVnb3JpYS0ke2NhdC5pZENhdGVnb3JpYX1gfSBvbkNsaWNrPXsoKT0+YWN0aXZhckZpbHRybygnY2F0ZWdvcmlhJyxgJHtjYXQuaWRDYXRlZ29yaWF9YCl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtbXV0ZWRcIj57Y2F0LmNhdGVnb3JpYX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFUaW1lc30gY2xhc3NOYW1lPXtGaWx0cm9TdHlsZS5pY29uX2Nsb3NlX2ZpbHRybyArICcgJyArIGBkLW5vbmVgfSBvbkNsaWNrPXsoKT0+bGltcGlhckZpbHRybygnY2F0ZWdvcmlhJyl9IGlkPXtgY2xvc2UtY2F0ZWdvcmlhLSR7Y2F0LmlkQ2F0ZWdvcmlhfWB9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9e0ZpbHRyb1N0eWxlLnRpdHVsb19maWx0cm9zfT5BbGltZW50b3M8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPXtGaWx0cm9TdHlsZS5saXN0YX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHMuc3ViY2F0ZWdvcmlhUmVkdWNlci5zdWJjYXRlZ29yaWFzLm1hcChzYz0+KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtzYy5pZFN1YkNhdGVnb3JpYX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17RmlsdHJvU3R5bGUuaXRlbV9maWx0cm99IG5hbWU9e2BzdWJjYXRlZ29yaWEtJHtzYy5pZFN1YkNhdGVnb3JpYX1gfSBvbkNsaWNrPXsoKT0+YWN0aXZhckZpbHRybygnc3ViY2F0ZWdvcmlhJyxgJHtzYy5pZFN1YkNhdGVnb3JpYX1gKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1tdXRlZFwiPntzYy5zdWJjYXRlZ29yaWF9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhVGltZXN9IGNsYXNzTmFtZT17RmlsdHJvU3R5bGUuaWNvbl9jbG9zZV9maWx0cm8gKyAnICcgKyBgZC1ub25lYH0gb25DbGljaz17KCk9PmxpbXBpYXJGaWx0cm8oJ3N1YmNhdGVnb3JpYScpfSBpZD17YGNsb3NlLSR7YHN1YmNhdGVnb3JpYS0ke3NjLmlkU3ViQ2F0ZWdvcmlhfWB9YH0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPXtGaWx0cm9TdHlsZS50aXR1bG9fZmlsdHJvc30+TWFyY2E8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dWwgaWQ9XCJsaXN0YU1hcmNhXCIgY2xhc3NOYW1lPXtGaWx0cm9TdHlsZS5zaW5Cb3JkZXJCb3R0b20rICcgJyArIEZpbHRyb1N0eWxlLmxpc3RhfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wcy5tYXJjYXNSZWR1Y2VyLm1hcmNhcy5tYXAoKG1hcmNhLGtleSk9PihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGtleT4zKT9mYWxzZTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17bWFyY2EuaWRNYXJjYX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17RmlsdHJvU3R5bGUuaXRlbV9maWx0cm99IG5hbWU9e2BtYXJjYS0ke21hcmNhLmlkTWFyY2F9YH0gb25DbGljaz17KCk9PmFjdGl2YXJGaWx0cm8oJ21hcmNhJyxgJHttYXJjYS5pZE1hcmNhfWApfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkXCI+e21hcmNhLm1hcmNhfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVRpbWVzfSBjbGFzc05hbWU9e0ZpbHRyb1N0eWxlLmljb25fY2xvc2VfZmlsdHJvICsgJyAnICsgYGQtbm9uZWB9IG9uQ2xpY2s9eygpPT5saW1waWFyRmlsdHJvKCdtYXJjYScpfSBpZD17YGNsb3NlLW1hcmNhLSR7bWFyY2EuaWRNYXJjYX1gfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKT0+c2V0TW9kYWxJc09wZW4odHJ1ZSl9IGNsYXNzTmFtZT1cImJvdG9uIGJnLWdyaXNcIj5WZXIgdG9kYXM8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIHsoIW1vZGFsSXNPcGVuKT9udWxsOlxyXG4gICAgICAgICAgICAgICAgPE1vZGFsIGNsb3NlTW9kYWw9e29uQ2xvc2VNb2RhbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPE1vZGFsTWFyY2EgY2xvc2VNb2RhbD17b25DbG9zZU1vZGFsfSBhY3RpdmFyRmlsdHJvPXthY3RpdmFyRmlsdHJvfS8+XHJcbiAgICAgICAgICAgICAgICA8L01vZGFsPlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoe21hcmNhc1JlZHVjZXIsc3VicHJvZHVjdG9zUmVkdWNlcixjYXRlZ29yaWFzUmVkdWNlcixzdWJjYXRlZ29yaWFSZWR1Y2VyfSk9PntcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbWFyY2FzUmVkdWNlcixcclxuICAgICAgICBzdWJwcm9kdWN0b3NSZWR1Y2VyLFxyXG4gICAgICAgIGNhdGVnb3JpYXNSZWR1Y2VyLFxyXG4gICAgICAgIHN1YmNhdGVnb3JpYVJlZHVjZXJcclxuICAgIH07XHJcbn1cclxuXHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IHtcclxuICAgIG1hcmNhc1RyYWVyVG9kYXMsXHJcbiAgICBzdWJwcm9kdWN0b3NGaWx0cmFyUHJvZHVjdG9zLFxyXG4gICAgc3VicHJvZHVjdG9zVHJhZXJUb2RvcyxcclxuICAgIGNhdGVnb3JpYXNUcmFlclRvZGFzLFxyXG4gICAgc3ViY2F0ZWdvcmlhVHJhZXJUb2Rhc1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcyxtYXBEaXNwYXRjaFRvUHJvcHMpKEZpbHRybyk7Il0sInNvdXJjZVJvb3QiOiIifQ==