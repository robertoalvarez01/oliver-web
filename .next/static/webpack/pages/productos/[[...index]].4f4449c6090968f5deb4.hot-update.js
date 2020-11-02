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

  var activarFiltro = function activarFiltro(tipoFiltro, nameItem) {
    switch (tipoFiltro) {
      case 'categoria':
        setEstadoFiltro(_objectSpread(_objectSpread({}, estadoFiltro), {}, {
          categoria: nameItem,
          buscador: '',
          filtrando: true
        }));
        break;

      case 'subcategoria':
        setEstadoFiltro(_objectSpread(_objectSpread({}, estadoFiltro), {}, {
          subcategoria: nameItem,
          buscador: '',
          filtrando: true
        }));
        break;

      case 'marca':
        setEstadoFiltro(_objectSpread(_objectSpread({}, estadoFiltro), {}, {
          marca: nameItem,
          buscador: '',
          filtrando: true
        }));
        break;

      case 'buscador':
        setEstadoFiltro(_objectSpread(_objectSpread({}, estadoFiltro), {}, {
          buscador: nameItem,
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
              var iconClose = document.createElement('svg'); //asigno las clases, atributos y eventos necesarios.

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
      lineNumber: 243,
      columnNumber: 9
    }
  }, __jsx("button", {
    className: _Filtro_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.btn_close_filtro,
    onClick: showFiltros,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 244,
      columnNumber: 13
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeIcon"], {
    id: "iconFiltroContainer",
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faChevronRight"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 245,
      columnNumber: 17
    }
  })), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 247,
      columnNumber: 13
    }
  }, props.categoriasReducer.categorias.length == 0 || props.subcategoriaReducer.subcategorias.length == 0 || props.marcasReducer.marcas.length == 0 ? __jsx(_Loader__WEBPACK_IMPORTED_MODULE_14__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 248,
      columnNumber: 158
    }
  }) : __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, estadoFiltro.filtrando ? __jsx("button", {
    className: "boton bg-yellow mb-3",
    onClick: limpiarFiltro,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 250,
      columnNumber: 51
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faBroom"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 251,
      columnNumber: 29
    }
  }), " Limpiar Filtros") : null, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faTimes"],
    className: _Filtro_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.cerrar_filtro_mobile,
    onClick: closeFiltrosMobile,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 253,
      columnNumber: 25
    }
  }), __jsx("h4", {
    className: _Filtro_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.titulo_filtros,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 254,
      columnNumber: 25
    }
  }, "Mascota"), __jsx("ul", {
    className: _Filtro_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.lista,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 255,
      columnNumber: 25
    }
  }, props.categoriasReducer.categorias.map(function (cat) {
    return __jsx("li", {
      key: cat.idCategoria,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 258,
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
        lineNumber: 259,
        columnNumber: 41
      }
    }, __jsx("span", {
      className: "text-muted",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 260,
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
        lineNumber: 262,
        columnNumber: 41
      }
    }));
  })), __jsx("h4", {
    className: _Filtro_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.titulo_filtros,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 269,
      columnNumber: 25
    }
  }, "Alimentos"), __jsx("ul", {
    className: _Filtro_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.lista,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 270,
      columnNumber: 25
    }
  }, props.subcategoriaReducer.subcategorias.map(function (sc) {
    return __jsx("li", {
      key: sc.idSubCategoria,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 273,
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
        lineNumber: 274,
        columnNumber: 41
      }
    }, __jsx("span", {
      className: "text-muted",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 275,
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
        lineNumber: 277,
        columnNumber: 41
      }
    }));
  })), __jsx("h4", {
    className: _Filtro_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.titulo_filtros,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 283,
      columnNumber: 25
    }
  }, "Marca"), __jsx("ul", {
    id: "listaMarca",
    className: _Filtro_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.sinBorderBottom + ' ' + _Filtro_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.lista,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 284,
      columnNumber: 25
    }
  }, props.marcasReducer.marcas.map(function (marca, key) {
    return key > 3 ? false : __jsx("li", {
      key: marca.idMarca,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 288,
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
        lineNumber: 289,
        columnNumber: 41
      }
    }, __jsx("span", {
      className: "text-muted",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 290,
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
        lineNumber: 292,
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
      lineNumber: 297,
      columnNumber: 25
    }
  }, "Ver todas"))), !modalIsOpen ? null : __jsx(_Modal__WEBPACK_IMPORTED_MODULE_5__["default"], {
    closeModal: onCloseModal,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 302,
      columnNumber: 17
    }
  }, __jsx(_ModalMarca__WEBPACK_IMPORTED_MODULE_6__["default"], {
    closeModal: onCloseModal,
    activarFiltro: activarFiltro,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 303,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRmlsdHJvL2luZGV4LmpzIl0sIm5hbWVzIjpbIm1hcmNhc1RyYWVyVG9kYXMiLCJtYXJjYXNBY3Rpb25zIiwic3VicHJvZHVjdG9zRmlsdHJhclByb2R1Y3RvcyIsInN1YnByb2R1Y3Rvc0FjdGlvbnMiLCJzdWJwcm9kdWN0b3NUcmFlclRvZG9zIiwiY2F0ZWdvcmlhc1RyYWVyVG9kYXMiLCJjYXRlZ29yaWFzQWN0aW9ucyIsInN1YmNhdGVnb3JpYVRyYWVyVG9kYXMiLCJzdWJjYXRlZ29yaWFzQWN0aW9ucyIsIkZpbHRybyIsInByb3BzIiwidXNlU3RhdGUiLCJmaWx0cmFuZG8iLCJjYXRlZ29yaWEiLCJzdWJjYXRlZ29yaWEiLCJtYXJjYSIsImJ1c2NhZG9yIiwiZXN0YWRvRmlsdHJvIiwic2V0RXN0YWRvRmlsdHJvIiwibW9kYWxJc09wZW4iLCJzZXRNb2RhbElzT3BlbiIsIm9uQ2xvc2VNb2RhbCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJzdHlsZSIsIm92ZXJmbG93WSIsInVzZUVmZmVjdCIsImdldERhdGEiLCJtYXJjYXNSZWR1Y2VyIiwibWFyY2FzIiwibGVuZ3RoIiwiY2F0ZWdvcmlhc1JlZHVjZXIiLCJjYXRlZ29yaWFzIiwic3ViY2F0ZWdvcmlhUmVkdWNlciIsInN1YmNhdGVnb3JpYXMiLCJsb2NhdGlvbiIsImFjdGl2YXJGaWx0cm9Qb3JVcmwiLCJzd2l0Y2hJdGVtQWN0aXZlIiwiYWN0aXZhckZpbHRybyIsInF1ZXJ5IiwidHlwZSIsImluZGV4IiwidGlwb0ZpbHRybyIsIm5hbWVJdGVtIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsIkZpbHRyb1N0eWxlIiwiaXRlbV9maWx0cm8iLCJlbGVtZW50IiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiYWN0aXZlIiwiaWNvbl9jbG9zZV9maWx0cm8iLCJhZGQiLCJ0cmltIiwia2V5IiwiZ2V0RWxlbWVudHNCeU5hbWUiLCJnZXRFbGVtZW50QnlJZCIsIm5ld0l0ZW1NYXJjYSIsImNyZWF0ZUVsZW1lbnQiLCJkaXZJdGVtTWFyY2EiLCJzcGFuSXRlbU1hcmNhIiwiaWNvbkNsb3NlIiwiY2xhc3NOYW1lIiwic2V0QXR0cmlidXRlIiwiYWRkRXZlbnRMaXN0ZW5lciIsImlubmVySFRNTCIsImFwcGVuZENoaWxkIiwicXVlcnlTZWxlY3RvciIsImZpcnN0SXRlbU1hcmNhIiwiY2hpbGRyZW4iLCJsaXN0YU1hcmNhcyIsInJlbW92ZUNoaWxkIiwidXJsRmlsdHJvIiwiYXJtYXJVcmxGaWx0cm8iLCJsaW1waWFyRmlsdHJvIiwidGlwbyIsImNsb3NlRmlsdHJvc01vYmlsZSIsImZpbHRyb3NfX2NvbnRhbmllciIsInNob3dfZmlsdHJvcyIsInVybCIsInNob3dGaWx0cm9zIiwidG9nZ2xlIiwic2hvdyIsInJvdGFyIiwiYnRuX2Nsb3NlX2ZpbHRybyIsImZhQ2hldnJvblJpZ2h0IiwiZmFCcm9vbSIsImZhVGltZXMiLCJjZXJyYXJfZmlsdHJvX21vYmlsZSIsInRpdHVsb19maWx0cm9zIiwibGlzdGEiLCJtYXAiLCJjYXQiLCJpZENhdGVnb3JpYSIsInNjIiwiaWRTdWJDYXRlZ29yaWEiLCJzaW5Cb3JkZXJCb3R0b20iLCJpZE1hcmNhIiwibWFwU3RhdGVUb1Byb3BzIiwic3VicHJvZHVjdG9zUmVkdWNlciIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImNvbm5lY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7SUFFa0JBLGdCLEdBQW9CQyx3RTtJQUNkQyw0QixHQUFrRUMsb0Y7SUFBMUJDLHNCLEdBQTBCRCw4RTtJQUN4RUUsb0IsR0FBd0JDLDJFO0lBQ3hCQyxzQixHQUEwQkMsOEU7O0FBRTVDLElBQU1DLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQUNDLEtBQUQs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WUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsbURBQUQ7QUFBWSxjQUFVLEVBQUVBLFlBQXhCO0FBQXNDLGlCQUFhLEVBQUVpQixhQUFyRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosQ0EzRFIsQ0FESjtBQWtFSCxDQWpTRDs7R0FBTTdCLE07O0tBQUFBLE07O0FBbVNOLElBQU15RixlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLFFBQTZFO0FBQUEsTUFBM0V0RSxhQUEyRSxTQUEzRUEsYUFBMkU7QUFBQSxNQUE3RHVFLG1CQUE2RCxTQUE3REEsbUJBQTZEO0FBQUEsTUFBekNwRSxpQkFBeUMsU0FBekNBLGlCQUF5QztBQUFBLE1BQXZCRSxtQkFBdUIsU0FBdkJBLG1CQUF1QjtBQUNqRyxTQUFPO0FBQ0hMLGlCQUFhLEVBQWJBLGFBREc7QUFFSHVFLHVCQUFtQixFQUFuQkEsbUJBRkc7QUFHSHBFLHFCQUFpQixFQUFqQkEsaUJBSEc7QUFJSEUsdUJBQW1CLEVBQW5CQTtBQUpHLEdBQVA7QUFNSCxDQVBEOztBQVNBLElBQU1tRSxrQkFBa0IsR0FBRztBQUN2QnBHLGtCQUFnQixFQUFoQkEsZ0JBRHVCO0FBRXZCRSw4QkFBNEIsRUFBNUJBLDRCQUZ1QjtBQUd2QkUsd0JBQXNCLEVBQXRCQSxzQkFIdUI7QUFJdkJDLHNCQUFvQixFQUFwQkEsb0JBSnVCO0FBS3ZCRSx3QkFBc0IsRUFBdEJBO0FBTHVCLENBQTNCO0FBUWU4RiwwSEFBTyxDQUFDSCxlQUFELEVBQWlCRSxrQkFBakIsQ0FBUCxDQUE0QzNGLE1BQTVDLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvZHVjdG9zL1tbLi4uaW5kZXhdXS40ZjQ0NDljNjA5MDk2OGY1ZGViNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEZpbHRyb1N0eWxlIGZyb20gJy4vRmlsdHJvLm1vZHVsZS5jc3MnO1xyXG5pbXBvcnQgTW9kYWwgZnJvbSAnLi4vTW9kYWwnO1xyXG5pbXBvcnQgTW9kYWxNYXJjYSBmcm9tICcuLi9Nb2RhbE1hcmNhJztcclxuaW1wb3J0IHsgZmFUaW1lcyxmYUJyb29tLGZhQ2hldnJvblJpZ2h0IH0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29uc1wiO1xyXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tIFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCI7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCAqIGFzIHN1YnByb2R1Y3Rvc0FjdGlvbnMgZnJvbSAnLi4vLi4vLi4vc3RvcmUvYWN0aW9ucy9zdWJwcm9kdWN0b3NBY3Rpb25zJztcclxuaW1wb3J0ICogYXMgbWFyY2FzQWN0aW9ucyBmcm9tICcuLi8uLi8uLi9zdG9yZS9hY3Rpb25zL21hcmNhc0FjdGlvbnMnO1xyXG5pbXBvcnQgKiBhcyBjYXRlZ29yaWFzQWN0aW9ucyBmcm9tICcuLi8uLi8uLi9zdG9yZS9hY3Rpb25zL2NhdGVnb3JpYXNBY3Rpb24nO1xyXG5pbXBvcnQgKiBhcyBzdWJjYXRlZ29yaWFzQWN0aW9ucyBmcm9tICcuLi8uLi8uLi9zdG9yZS9hY3Rpb25zL3N1YmNhdGVnb3JpYXNBY3Rpb24nO1xyXG5pbXBvcnQgTG9hZGVyIGZyb20gJy4uL0xvYWRlcic7XHJcblxyXG5jb25zdCB7dHJhZXJUb2RhczptYXJjYXNUcmFlclRvZGFzfSA9IG1hcmNhc0FjdGlvbnM7XHJcbmNvbnN0IHtmaWx0cmFyUHJvZHVjdG9zOnN1YnByb2R1Y3Rvc0ZpbHRyYXJQcm9kdWN0b3MsdHJhZXJUb2RvczpzdWJwcm9kdWN0b3NUcmFlclRvZG9zfSA9IHN1YnByb2R1Y3Rvc0FjdGlvbnM7XHJcbmNvbnN0IHt0cmFlclRvZGFzOmNhdGVnb3JpYXNUcmFlclRvZGFzfSA9IGNhdGVnb3JpYXNBY3Rpb25zO1xyXG5jb25zdCB7dHJhZXJUb2RhczpzdWJjYXRlZ29yaWFUcmFlclRvZGFzfSA9IHN1YmNhdGVnb3JpYXNBY3Rpb25zO1xyXG5cclxuY29uc3QgRmlsdHJvID0gKHByb3BzKSA9PiB7XHJcblxyXG4gICAgLy9zdGF0ZSBmb3IgdGhlIGZpbHRlcnNcclxuICAgIGNvbnN0IFtlc3RhZG9GaWx0cm8sIHNldEVzdGFkb0ZpbHRyb10gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgZmlsdHJhbmRvOmZhbHNlLFxyXG4gICAgICAgIGNhdGVnb3JpYTonJyxcclxuICAgICAgICBzdWJjYXRlZ29yaWE6JycsXHJcbiAgICAgICAgbWFyY2E6JycsXHJcbiAgICAgICAgYnVzY2Fkb3I6JydcclxuICAgIH0pO1xyXG5cclxuICAgIC8vbWFuZWpvIGRlIE1vZGFsIG1hcmNhc1xyXG4gICAgY29uc3QgW21vZGFsSXNPcGVuLCBzZXRNb2RhbElzT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBvbkNsb3NlTW9kYWwgPSAoKT0+e1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdib2R5JylbMF0uc3R5bGUub3ZlcmZsb3dZID0gJ3Njcm9sbCc7XHJcbiAgICAgICAgc2V0TW9kYWxJc09wZW4oZmFsc2UpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vbG9vcCBkZSBlZmVjdG8gcGFyYSBlamVjdXRhciBzb2xvIHVuYSB2ZXogY3VhbmRvIGVsIGNvbXBvbmVudGUgc2UgbW9udGUgZW4gZWwgY2FzbyBkZSBxdWUgc2UgZXN0ZSBmaWx0cmFuZG8gZGlyZWN0byBkZXNkZSBsYSB1cmxcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgZ2V0RGF0YSgpO1xyXG4gICAgfSxbXSk7XHJcbiAgICAgICAgXHJcbiAgICBjb25zdCBnZXREYXRhID0gYXN5bmMoKT0+e1xyXG4gICAgICAgIGlmKHByb3BzLm1hcmNhc1JlZHVjZXIubWFyY2FzLmxlbmd0aD09PTApe1xyXG4gICAgICAgICAgICBhd2FpdCBwcm9wcy5tYXJjYXNUcmFlclRvZGFzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHByb3BzLmNhdGVnb3JpYXNSZWR1Y2VyLmNhdGVnb3JpYXMubGVuZ3RoPT09MCl7XHJcbiAgICAgICAgICAgIGF3YWl0IHByb3BzLmNhdGVnb3JpYXNUcmFlclRvZGFzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHByb3BzLnN1YmNhdGVnb3JpYVJlZHVjZXIuc3ViY2F0ZWdvcmlhcy5sZW5ndGg9PT0wKXtcclxuICAgICAgICAgICAgYXdhaXQgcHJvcHMuc3ViY2F0ZWdvcmlhVHJhZXJUb2RhcygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZihwcm9wcy5sb2NhdGlvbiAhPT0gJy9wcm9kdWN0b3MnKXtcclxuICAgICAgICAgICAgYWN0aXZhckZpbHRyb1BvclVybCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvL2xvb3AgZGUgZWZlY3RvIHBhcmEgaGFjZXIgcmVuZGVyIGNhZGEgdmV6IHF1ZSBzZSBhZ3JlZ2EgbyBlbGltaW5hIHVuIGZpbHRyb1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBzd2l0Y2hJdGVtQWN0aXZlKCk7XHJcbiAgICB9LCBbZXN0YWRvRmlsdHJvXSk7XHJcblxyXG4gICAgY29uc3QgYWN0aXZhckZpbHRyb1BvclVybCA9ICgpPT57XHJcbiAgICAgICAgcmV0dXJuIGFjdGl2YXJGaWx0cm8ocHJvcHMucXVlcnkudHlwZSxwcm9wcy5xdWVyeS5pbmRleFsxXSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgYWN0aXZhckZpbHRybyA9ICh0aXBvRmlsdHJvLG5hbWVJdGVtKT0+e1xyXG4gICAgICAgIHN3aXRjaCAodGlwb0ZpbHRybykge1xyXG4gICAgICAgICAgICBjYXNlICdjYXRlZ29yaWEnOlxyXG4gICAgICAgICAgICAgICAgc2V0RXN0YWRvRmlsdHJvKHtcclxuICAgICAgICAgICAgICAgICAgICAuLi5lc3RhZG9GaWx0cm8sXHJcbiAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcmlhOm5hbWVJdGVtLFxyXG4gICAgICAgICAgICAgICAgICAgIGJ1c2NhZG9yOicnLFxyXG4gICAgICAgICAgICAgICAgICAgIGZpbHRyYW5kbzp0cnVlXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdzdWJjYXRlZ29yaWEnOlxyXG4gICAgICAgICAgICAgICAgc2V0RXN0YWRvRmlsdHJvKHtcclxuICAgICAgICAgICAgICAgICAgICAuLi5lc3RhZG9GaWx0cm8sXHJcbiAgICAgICAgICAgICAgICAgICAgc3ViY2F0ZWdvcmlhOm5hbWVJdGVtLFxyXG4gICAgICAgICAgICAgICAgICAgIGJ1c2NhZG9yOicnLFxyXG4gICAgICAgICAgICAgICAgICAgIGZpbHRyYW5kbzp0cnVlXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ21hcmNhJzpcclxuICAgICAgICAgICAgICAgIHNldEVzdGFkb0ZpbHRybyh7XHJcbiAgICAgICAgICAgICAgICAgICAgLi4uZXN0YWRvRmlsdHJvLFxyXG4gICAgICAgICAgICAgICAgICAgIG1hcmNhOm5hbWVJdGVtLFxyXG4gICAgICAgICAgICAgICAgICAgIGJ1c2NhZG9yOicnLFxyXG4gICAgICAgICAgICAgICAgICAgIGZpbHRyYW5kbzp0cnVlXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ2J1c2NhZG9yJzpcclxuICAgICAgICAgICAgICAgIHNldEVzdGFkb0ZpbHRybyh7XHJcbiAgICAgICAgICAgICAgICAgICAgLi4uZXN0YWRvRmlsdHJvLFxyXG4gICAgICAgICAgICAgICAgICAgIGJ1c2NhZG9yOm5hbWVJdGVtLFxyXG4gICAgICAgICAgICAgICAgICAgIGZpbHRyYW5kbzp0cnVlXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHN3aXRjaEl0ZW1BY3RpdmUgPSAoKT0+e1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGVzdGFkb0ZpbHRybyk7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKEZpbHRyb1N0eWxlLml0ZW1fZmlsdHJvKS5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoRmlsdHJvU3R5bGUuaXRlbV9maWx0cm8pW2luZGV4XTtcclxuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKEZpbHRyb1N0eWxlLmFjdGl2ZSk7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoRmlsdHJvU3R5bGUuaWNvbl9jbG9zZV9maWx0cm8pW2luZGV4XS5jbGFzc0xpc3QuYWRkKCdkLW5vbmUnKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmKCFlc3RhZG9GaWx0cm8uZmlsdHJhbmRvKSByZXR1cm47XHJcbiAgICAgICAgLy9zaSBubyBoYXkgbmFkYSBlbiBidXNjYWRvciwgcHVlZG8gc2V0ZWFyIHVuIGFjdGl2ZSBlbiBhbGd1biBlbGVtZW50byBkZSBsYSBsaXN0YVxyXG4gICAgICAgIGlmKGVzdGFkb0ZpbHRyby5idXNjYWRvci50cmltKCk9PT0nJyl7XHJcbiAgICAgICAgICAgIC8vcmVjb3JybyBlbCBzdGF0ZSBwYXJhIG9idGVuZXIgbGFzIGNsYXZlcyB5IGFncmVnYXIgYWN0aXZlIGVsIGVsZW1lbnRvIGNvcnJlc3BvbmRpZW50ZVxyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBlc3RhZG9GaWx0cm8pIHtcclxuICAgICAgICAgICAgICAgIGlmKGVzdGFkb0ZpbHRyb1trZXldICYmIGVzdGFkb0ZpbHRyb1trZXldIT09JycgJiYgZXN0YWRvRmlsdHJvW2tleV0hPT10cnVlKXtcclxuICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKGtleSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhlc3RhZG9GaWx0cm9ba2V5XSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoYCR7a2V5fS0ke2VzdGFkb0ZpbHRyb1trZXldfWApWzBdKXsvL3ByZWd1bnRvIHNpIGV4aXN0ZSBlbCBlbGVtZW50byBjb24gZWwgbmFtZSBkZWwgZmlsdHJvIHBhcmEgYWdyZWdhcmxlIGVsIGFjdGl2ZSwgc2kgbm8gZXhpc3RlIGxvIGNyZW8uIChzaSBubyBleGlzdGUgZXMgcG9ycXVlIHZpZW5lIGRlc2RlIG1vZGFsIGRlIG1hcmNhcylcclxuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoYCR7a2V5fS0ke2VzdGFkb0ZpbHRyb1trZXldfWApWzBdLmNsYXNzTGlzdC5hZGQoRmlsdHJvU3R5bGUuYWN0aXZlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGNsb3NlLSR7a2V5fS0ke2VzdGFkb0ZpbHRyb1trZXldfWApLmNsYXNzTGlzdC5yZW1vdmUoJ2Qtbm9uZScpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihlc3RhZG9GaWx0cm8ubWFyY2EhPT0nJyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2NyZW8gbG9zIGVsZW1lbnRvcyBkZWwgaXRlbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG5ld0l0ZW1NYXJjYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGl2SXRlbU1hcmNhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgc3Bhbkl0ZW1NYXJjYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpY29uQ2xvc2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdmcnKTtcclxuICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vYXNpZ25vIGxhcyBjbGFzZXMsIGF0cmlidXRvcyB5IGV2ZW50b3MgbmVjZXNhcmlvcy5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpdkl0ZW1NYXJjYS5jbGFzc05hbWUgPWAke0ZpbHRyb1N0eWxlLml0ZW1fZmlsdHJvfSAke0ZpbHRyb1N0eWxlLmFjdGl2ZX1gO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGl2SXRlbU1hcmNhLnNldEF0dHJpYnV0ZSgnbmFtZScsYG1hcmNhLSR7ZXN0YWRvRmlsdHJvLm1hcmNhfWApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGl2SXRlbU1hcmNhLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+YWN0aXZhckZpbHRybygnbWFyY2EnLGVzdGFkb0ZpbHRyby5tYXJjYSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Bhbkl0ZW1NYXJjYS5jbGFzc05hbWUgPSAndGV4dC1tdXRlZCc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcGFuSXRlbU1hcmNhLmlubmVySFRNTCA9IGVzdGFkb0ZpbHRyby5tYXJjYTtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbkNsb3NlLmlubmVySFRNTCA9IGBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGZvY3VzYWJsZT1cImZhbHNlXCIgZGF0YS1wcmVmaXg9XCJmYXNcIiBkYXRhLWljb249XCJ0aW1lc1wiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld2JveD1cIjAgMCAzNTIgNTEyXCIgY2xhc3M9XCJzdmctaW5saW5lLS1mYSBmYS10aW1lcyBmYS13LTExIEZpbHRyb19pY29uX2Nsb3NlX2ZpbHRyb19fMXhsdjVcIiBpZD1cImNsb3NlLW1hcmNhLSR7ZXN0YWRvRmlsdHJvLm1hcmNhfVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0yNDIuNzIgMjU2bDEwMC4wNy0xMDAuMDdjMTIuMjgtMTIuMjggMTIuMjgtMzIuMTkgMC00NC40OGwtMjIuMjQtMjIuMjRjLTEyLjI4LTEyLjI4LTMyLjE5LTEyLjI4LTQ0LjQ4IDBMMTc2IDE4OS4yOCA3NS45MyA4OS4yMWMtMTIuMjgtMTIuMjgtMzIuMTktMTIuMjgtNDQuNDggMEw5LjIxIDExMS40NWMtMTIuMjggMTIuMjgtMTIuMjggMzIuMTkgMCA0NC40OEwxMDkuMjggMjU2IDkuMjEgMzU2LjA3Yy0xMi4yOCAxMi4yOC0xMi4yOCAzMi4xOSAwIDQ0LjQ4bDIyLjI0IDIyLjI0YzEyLjI4IDEyLjI4IDMyLjIgMTIuMjggNDQuNDggMEwxNzYgMzIyLjcybDEwMC4wNyAxMDAuMDdjMTIuMjggMTIuMjggMzIuMiAxMi4yOCA0NC40OCAwbDIyLjI0LTIyLjI0YzEyLjI4LTEyLjI4IDEyLjI4LTMyLjE5IDAtNDQuNDhMMjQyLjcyIDI1NnpcIj48L3BhdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBgO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vdm95IHViaWNhbmRvIGxvcyBlbGVtZW50b3MgZGVudHJvIGRlIGNhZGEgcGFkcmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpdkl0ZW1NYXJjYS5hcHBlbmRDaGlsZChzcGFuSXRlbU1hcmNhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld0l0ZW1NYXJjYS5hcHBlbmRDaGlsZChkaXZJdGVtTWFyY2EpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3SXRlbU1hcmNhLmFwcGVuZENoaWxkKGljb25DbG9zZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vT2J0ZW5nbyBlbCBwcmltZXIgaXRlbSBkZSBsYSBsaXN0YSB5IGxvIGVsaW1pbm8sIHBhcmEgdGVuZXIgc2llbXByZSBsYSBtaXNtYSBjYW50aWRhZCBkZSBtYXJjYXMgZW4gbGEgbGlzdGEuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjbGlzdGFNYXJjYWApKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZmlyc3RJdGVtTWFyY2EgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjbGlzdGFNYXJjYWApLmNoaWxkcmVuWzBdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBsaXN0YU1hcmNhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNsaXN0YU1hcmNhYCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGlzdGFNYXJjYXMucmVtb3ZlQ2hpbGQoZmlyc3RJdGVtTWFyY2EpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vYWhvcmEgYWdyZWdvIGVsIGl0ZW0gY3JlYWRvIGEgbGEgbGlzdGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaXN0YU1hcmNhcy5hcHBlbmRDaGlsZChuZXdJdGVtTWFyY2EpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy9sYSBwcmltZXJhIHZleiBxdWUgc2UgY2FyZ2EgZWwgY29tcG9uZW50ZSwgZmlsdHJhbmRvIGVzIGZhbHNlLCBwb3IgZXNvIHByZWd1bnRvIHBhcmEgcXVlIG5vIHNlIGVqZWN1dGEgbGEgZnVuY2lvbiBkZSBpciBhIGZpbHRyYXIgYXBlbmFzIHNlIG1vbnRlIGVsIGNvbXBvbmVudGUuIFNpbm8gcXVlIHNlIGVqZWN1dGUgY3VhbmRvIGRlIHZlcmRhZCBzZSBxdWllcmEgZmlsdHJhci5cclxuICAgICAgICBpZihlc3RhZG9GaWx0cm8uZmlsdHJhbmRvKXtcclxuICAgICAgICAgICAgbGV0IHVybEZpbHRybyA9IGFybWFyVXJsRmlsdHJvKCk7Ly9hcm1vIGxhIHVybCBxdWUgbWFuZG8gYSBsYSBhcGkgcGFyYSB0cmFlciBsb3MgcmVzdWx0YWRvcyBkZSBsbyBmaWx0cmFkby5cclxuICAgICAgICAgICAgcHJvcHMuc3VicHJvZHVjdG9zRmlsdHJhclByb2R1Y3Rvcyh1cmxGaWx0cm8pO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgbGltcGlhckZpbHRybyA9IHRpcG89PntcclxuICAgICAgICBzd2l0Y2ggKHRpcG8pIHtcclxuICAgICAgICAgICAgY2FzZSAnY2F0ZWdvcmlhJzpcclxuICAgICAgICAgICAgICAgIHNldEVzdGFkb0ZpbHRybyh7XHJcbiAgICAgICAgICAgICAgICAgICAgLi4uZXN0YWRvRmlsdHJvLFxyXG4gICAgICAgICAgICAgICAgICAgIGNhdGVnb3JpYTonJ1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnc3ViY2F0ZWdvcmlhJzpcclxuICAgICAgICAgICAgICAgIHNldEVzdGFkb0ZpbHRybyh7XHJcbiAgICAgICAgICAgICAgICAgICAgLi4uZXN0YWRvRmlsdHJvLFxyXG4gICAgICAgICAgICAgICAgICAgIHN1YmNhdGVnb3JpYTonJ1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnbWFyY2EnOlxyXG4gICAgICAgICAgICAgICAgc2V0RXN0YWRvRmlsdHJvKHtcclxuICAgICAgICAgICAgICAgICAgICAuLi5lc3RhZG9GaWx0cm8sXHJcbiAgICAgICAgICAgICAgICAgICAgbWFyY2E6JydcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBwcm9wcy5zdWJwcm9kdWN0b3NUcmFlclRvZG9zKCk7XHJcbiAgICAgICAgICAgICAgICBzZXRFc3RhZG9GaWx0cm8oe1xyXG4gICAgICAgICAgICAgICAgICAgIGZpbHRyYW5kbzpmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBjYXRlZ29yaWE6JycsXHJcbiAgICAgICAgICAgICAgICAgICAgc3ViY2F0ZWdvcmlhOicnLFxyXG4gICAgICAgICAgICAgICAgICAgIG1hcmNhOicnLFxyXG4gICAgICAgICAgICAgICAgICAgIGJ1c2NhZG9yOicnXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNsb3NlRmlsdHJvc01vYmlsZSA9ICgpPT57XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShGaWx0cm9TdHlsZS5maWx0cm9zX19jb250YW5pZXIpWzBdLmNsYXNzTGlzdC5yZW1vdmUoRmlsdHJvU3R5bGUuc2hvd19maWx0cm9zKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBhcm1hclVybEZpbHRybyA9ICgpPT57XHJcbiAgICAgICAgbGV0IHVybCA9ICdmaWx0cmFyJztcclxuICAgICAgICAvL3NpIGJ1c2NhZG9yIHZpZW5lIHRydWUsIGVzIHBvcnF1ZSB2aWVuZSBkZXNkZSBlbCBidXNjYWRvciBkZWwgbWVudSBvIG1vZGFsIGRlIGJ1c2NhZG9yKG1vYmlsZSkuXHJcbiAgICAgICAgaWYoZXN0YWRvRmlsdHJvLmJ1c2NhZG9yIT09JycpIHJldHVybiB1cmwgKz0gYD9idXNjYXI9JHtlc3RhZG9GaWx0cm8uYnVzY2Fkb3J9YDtcclxuXHJcbiAgICAgICAgbGV0IGNhdGVnb3JpYSA9IGVzdGFkb0ZpbHRyby5jYXRlZ29yaWEsXHJcbiAgICAgICAgICAgIHN1YmNhdGVnb3JpYSA9IGVzdGFkb0ZpbHRyby5zdWJjYXRlZ29yaWEsXHJcbiAgICAgICAgICAgIG1hcmNhID0gZXN0YWRvRmlsdHJvLm1hcmNhO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKGNhdGVnb3JpYSAmJiBjYXRlZ29yaWEgIT09ICcnKXtcclxuICAgICAgICAgICAgdXJsICs9IGA/Y2F0ZWdvcmlhPSR7ZXN0YWRvRmlsdHJvLmNhdGVnb3JpYX1gO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZihlc3RhZG9GaWx0cm8uc3ViY2F0ZWdvcmlhICYmIGVzdGFkb0ZpbHRyby5zdWJjYXRlZ29yaWEgIT09ICcnKXtcclxuICAgICAgICAgICAgaWYoY2F0ZWdvcmlhIT09ICcnKXtcclxuICAgICAgICAgICAgICAgIHVybCArPSBgJnN1YmNhdGVnb3JpYT0ke2VzdGFkb0ZpbHRyby5zdWJjYXRlZ29yaWF9YDsgXHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgdXJsICs9IGA/c3ViY2F0ZWdvcmlhPSR7ZXN0YWRvRmlsdHJvLnN1YmNhdGVnb3JpYX1gO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKG1hcmNhICYmIG1hcmNhICE9PSAnJyl7XHJcbiAgICAgICAgICAgIGlmKGNhdGVnb3JpYSAhPT0gJycgJiYgc3ViY2F0ZWdvcmlhICE9PSAnJyl7XHJcbiAgICAgICAgICAgICAgICB1cmwgKz0gYD9tYXJjYT0ke2VzdGFkb0ZpbHRyby5tYXJjYX1gO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIHVybCArPSBgJm1hcmNhPSR7ZXN0YWRvRmlsdHJvLm1hcmNhfWA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHVybDtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzaG93RmlsdHJvcyA9ICgpPT57XHJcbiAgICAgICAgbGV0IGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKEZpbHRyb1N0eWxlLmZpbHRyb3NfX2NvbnRhbmllcilbMF07XHJcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKEZpbHRyb1N0eWxlLnNob3cpO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpY29uRmlsdHJvQ29udGFpbmVyJykuY2xhc3NMaXN0LnRvZ2dsZShGaWx0cm9TdHlsZS5yb3Rhcik7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17RmlsdHJvU3R5bGUuZmlsdHJvc19fY29udGFuaWVyfT5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e0ZpbHRyb1N0eWxlLmJ0bl9jbG9zZV9maWx0cm99IG9uQ2xpY2s9e3Nob3dGaWx0cm9zfT5cclxuICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWQ9XCJpY29uRmlsdHJvQ29udGFpbmVyXCIgaWNvbj17ZmFDaGV2cm9uUmlnaHR9Lz5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICB7KHByb3BzLmNhdGVnb3JpYXNSZWR1Y2VyLmNhdGVnb3JpYXMubGVuZ3RoPT0wIHx8IHByb3BzLnN1YmNhdGVnb3JpYVJlZHVjZXIuc3ViY2F0ZWdvcmlhcy5sZW5ndGg9PTAgfHwgcHJvcHMubWFyY2FzUmVkdWNlci5tYXJjYXMubGVuZ3RoPT0wKT88TG9hZGVyLz46XHJcbiAgICAgICAgICAgICAgICAgICAgPD4gIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7KGVzdGFkb0ZpbHRyby5maWx0cmFuZG8pPzxidXR0b24gY2xhc3NOYW1lPVwiYm90b24gYmcteWVsbG93IG1iLTNcIiBvbkNsaWNrPXtsaW1waWFyRmlsdHJvfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFCcm9vbX0vPiBMaW1waWFyIEZpbHRyb3NcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+Om51bGx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFUaW1lc30gY2xhc3NOYW1lPXtGaWx0cm9TdHlsZS5jZXJyYXJfZmlsdHJvX21vYmlsZX0gb25DbGljaz17Y2xvc2VGaWx0cm9zTW9iaWxlfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9e0ZpbHRyb1N0eWxlLnRpdHVsb19maWx0cm9zfT5NYXNjb3RhPC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT17RmlsdHJvU3R5bGUubGlzdGF9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzLmNhdGVnb3JpYXNSZWR1Y2VyLmNhdGVnb3JpYXMubWFwKGNhdD0+KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtjYXQuaWRDYXRlZ29yaWF9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e0ZpbHRyb1N0eWxlLml0ZW1fZmlsdHJvfSBuYW1lPXtgY2F0ZWdvcmlhLSR7Y2F0LmlkQ2F0ZWdvcmlhfWB9IG9uQ2xpY2s9eygpPT5hY3RpdmFyRmlsdHJvKCdjYXRlZ29yaWEnLGAke2NhdC5pZENhdGVnb3JpYX1gKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1tdXRlZFwiPntjYXQuY2F0ZWdvcmlhfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVRpbWVzfSBjbGFzc05hbWU9e0ZpbHRyb1N0eWxlLmljb25fY2xvc2VfZmlsdHJvICsgJyAnICsgYGQtbm9uZWB9IG9uQ2xpY2s9eygpPT5saW1waWFyRmlsdHJvKCdjYXRlZ29yaWEnKX0gaWQ9e2BjbG9zZS1jYXRlZ29yaWEtJHtjYXQuaWRDYXRlZ29yaWF9YH0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT17RmlsdHJvU3R5bGUudGl0dWxvX2ZpbHRyb3N9PkFsaW1lbnRvczwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9e0ZpbHRyb1N0eWxlLmxpc3RhfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wcy5zdWJjYXRlZ29yaWFSZWR1Y2VyLnN1YmNhdGVnb3JpYXMubWFwKHNjPT4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e3NjLmlkU3ViQ2F0ZWdvcmlhfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtGaWx0cm9TdHlsZS5pdGVtX2ZpbHRyb30gbmFtZT17YHN1YmNhdGVnb3JpYS0ke3NjLmlkU3ViQ2F0ZWdvcmlhfWB9IG9uQ2xpY2s9eygpPT5hY3RpdmFyRmlsdHJvKCdzdWJjYXRlZ29yaWEnLGAke3NjLmlkU3ViQ2F0ZWdvcmlhfWApfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkXCI+e3NjLnN1YmNhdGVnb3JpYX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFUaW1lc30gY2xhc3NOYW1lPXtGaWx0cm9TdHlsZS5pY29uX2Nsb3NlX2ZpbHRybyArICcgJyArIGBkLW5vbmVgfSBvbkNsaWNrPXsoKT0+bGltcGlhckZpbHRybygnc3ViY2F0ZWdvcmlhJyl9IGlkPXtgY2xvc2UtJHtgc3ViY2F0ZWdvcmlhLSR7c2MuaWRTdWJDYXRlZ29yaWF9YH1gfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9e0ZpbHRyb1N0eWxlLnRpdHVsb19maWx0cm9zfT5NYXJjYTwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBpZD1cImxpc3RhTWFyY2FcIiBjbGFzc05hbWU9e0ZpbHRyb1N0eWxlLnNpbkJvcmRlckJvdHRvbSsgJyAnICsgRmlsdHJvU3R5bGUubGlzdGF9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzLm1hcmNhc1JlZHVjZXIubWFyY2FzLm1hcCgobWFyY2Esa2V5KT0+KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoa2V5PjMpP2ZhbHNlOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXttYXJjYS5pZE1hcmNhfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtGaWx0cm9TdHlsZS5pdGVtX2ZpbHRyb30gbmFtZT17YG1hcmNhLSR7bWFyY2EuaWRNYXJjYX1gfSBvbkNsaWNrPXsoKT0+YWN0aXZhckZpbHRybygnbWFyY2EnLGAke21hcmNhLmlkTWFyY2F9YCl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtbXV0ZWRcIj57bWFyY2EubWFyY2F9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhVGltZXN9IGNsYXNzTmFtZT17RmlsdHJvU3R5bGUuaWNvbl9jbG9zZV9maWx0cm8gKyAnICcgKyBgZC1ub25lYH0gb25DbGljaz17KCk9PmxpbXBpYXJGaWx0cm8oJ21hcmNhJyl9IGlkPXtgY2xvc2UtbWFyY2EtJHttYXJjYS5pZE1hcmNhfWB9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpPT5zZXRNb2RhbElzT3Blbih0cnVlKX0gY2xhc3NOYW1lPVwiYm90b24gYmctZ3Jpc1wiPlZlciB0b2RhczwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgeyghbW9kYWxJc09wZW4pP251bGw6XHJcbiAgICAgICAgICAgICAgICA8TW9kYWwgY2xvc2VNb2RhbD17b25DbG9zZU1vZGFsfT5cclxuICAgICAgICAgICAgICAgICAgICA8TW9kYWxNYXJjYSBjbG9zZU1vZGFsPXtvbkNsb3NlTW9kYWx9IGFjdGl2YXJGaWx0cm89e2FjdGl2YXJGaWx0cm99Lz5cclxuICAgICAgICAgICAgICAgIDwvTW9kYWw+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9ICh7bWFyY2FzUmVkdWNlcixzdWJwcm9kdWN0b3NSZWR1Y2VyLGNhdGVnb3JpYXNSZWR1Y2VyLHN1YmNhdGVnb3JpYVJlZHVjZXJ9KT0+e1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBtYXJjYXNSZWR1Y2VyLFxyXG4gICAgICAgIHN1YnByb2R1Y3Rvc1JlZHVjZXIsXHJcbiAgICAgICAgY2F0ZWdvcmlhc1JlZHVjZXIsXHJcbiAgICAgICAgc3ViY2F0ZWdvcmlhUmVkdWNlclxyXG4gICAgfTtcclxufVxyXG5cclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0ge1xyXG4gICAgbWFyY2FzVHJhZXJUb2RhcyxcclxuICAgIHN1YnByb2R1Y3Rvc0ZpbHRyYXJQcm9kdWN0b3MsXHJcbiAgICBzdWJwcm9kdWN0b3NUcmFlclRvZG9zLFxyXG4gICAgY2F0ZWdvcmlhc1RyYWVyVG9kYXMsXHJcbiAgICBzdWJjYXRlZ29yaWFUcmFlclRvZGFzXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLG1hcERpc3BhdGNoVG9Qcm9wcykoRmlsdHJvKTsiXSwic291cmNlUm9vdCI6IiJ9