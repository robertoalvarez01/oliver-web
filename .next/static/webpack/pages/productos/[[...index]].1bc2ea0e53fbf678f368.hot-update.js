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

    if (estadoFiltro.categoria === '' && estadoFiltro.subcategoria === '' && estadoFiltro.marca === '') {
      //props.subproductosTraerTodos();
      setEstadoFiltro(_objectSpread(_objectSpread({}, estadoFiltro), {}, {
        filtrando: false
      }));
    }

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
      lineNumber: 253,
      columnNumber: 9
    }
  }, __jsx("button", {
    className: _Filtro_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.btn_close_filtro,
    onClick: showFiltros,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 254,
      columnNumber: 13
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeIcon"], {
    id: "iconFiltroContainer",
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faChevronRight"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 255,
      columnNumber: 17
    }
  })), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 257,
      columnNumber: 13
    }
  }, props.categoriasReducer.categorias.length == 0 || props.subcategoriaReducer.subcategorias.length == 0 || props.marcasReducer.marcas.length == 0 ? __jsx(_Loader__WEBPACK_IMPORTED_MODULE_14__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 258,
      columnNumber: 158
    }
  }) : __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, estadoFiltro.filtrando ? __jsx("button", {
    className: "boton bg-yellow mb-3",
    onClick: limpiarFiltro,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 260,
      columnNumber: 51
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faBroom"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 261,
      columnNumber: 29
    }
  }), " Limpiar Filtros") : null, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faTimes"],
    className: _Filtro_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.cerrar_filtro_mobile,
    onClick: closeFiltrosMobile,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 263,
      columnNumber: 25
    }
  }), __jsx("h4", {
    className: _Filtro_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.titulo_filtros,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 264,
      columnNumber: 25
    }
  }, "Mascota"), __jsx("ul", {
    className: _Filtro_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.lista,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 265,
      columnNumber: 25
    }
  }, props.categoriasReducer.categorias.map(function (cat) {
    return __jsx("li", {
      key: cat.idCategoria,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 268,
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
        lineNumber: 269,
        columnNumber: 41
      }
    }, __jsx("span", {
      className: "text-muted",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 270,
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
        lineNumber: 272,
        columnNumber: 41
      }
    }));
  })), __jsx("h4", {
    className: _Filtro_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.titulo_filtros,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 279,
      columnNumber: 25
    }
  }, "Alimentos"), __jsx("ul", {
    className: _Filtro_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.lista,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 280,
      columnNumber: 25
    }
  }, props.subcategoriaReducer.subcategorias.map(function (sc) {
    return __jsx("li", {
      key: sc.idSubCategoria,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 283,
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
        lineNumber: 284,
        columnNumber: 41
      }
    }, __jsx("span", {
      className: "text-muted",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 285,
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
        lineNumber: 287,
        columnNumber: 41
      }
    }));
  })), __jsx("h4", {
    className: _Filtro_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.titulo_filtros,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 293,
      columnNumber: 25
    }
  }, "Marca"), __jsx("ul", {
    id: "listaMarca",
    className: _Filtro_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.sinBorderBottom + ' ' + _Filtro_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.lista,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 294,
      columnNumber: 25
    }
  }, props.marcasReducer.marcas.map(function (marca, key) {
    return key > 3 ? false : __jsx("li", {
      key: marca.idMarca,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 298,
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
        lineNumber: 299,
        columnNumber: 41
      }
    }, __jsx("span", {
      className: "text-muted",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 300,
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
        lineNumber: 302,
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
      lineNumber: 307,
      columnNumber: 25
    }
  }, "Ver todas"))), !modalIsOpen ? null : __jsx(_Modal__WEBPACK_IMPORTED_MODULE_5__["default"], {
    closeModal: onCloseModal,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 312,
      columnNumber: 17
    }
  }, __jsx(_ModalMarca__WEBPACK_IMPORTED_MODULE_6__["default"], {
    closeModal: onCloseModal,
    activarFiltro: activarFiltro,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 313,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRmlsdHJvL2luZGV4LmpzIl0sIm5hbWVzIjpbIm1hcmNhc1RyYWVyVG9kYXMiLCJtYXJjYXNBY3Rpb25zIiwic3VicHJvZHVjdG9zRmlsdHJhclByb2R1Y3RvcyIsInN1YnByb2R1Y3Rvc0FjdGlvbnMiLCJzdWJwcm9kdWN0b3NUcmFlclRvZG9zIiwiY2F0ZWdvcmlhc1RyYWVyVG9kYXMiLCJjYXRlZ29yaWFzQWN0aW9ucyIsInN1YmNhdGVnb3JpYVRyYWVyVG9kYXMiLCJzdWJjYXRlZ29yaWFzQWN0aW9ucyIsIkZpbHRybyIsInByb3BzIiwidXNlU3RhdGUiLCJmaWx0cmFuZG8iLCJjYXRlZ29yaWEiLCJzdWJjYXRlZ29yaWEiLCJtYXJjYSIsImJ1c2NhZG9yIiwiZXN0YWRvRmlsdHJvIiwic2V0RXN0YWRvRmlsdHJvIiwibW9kYWxJc09wZW4iLCJzZXRNb2RhbElzT3BlbiIsIm9uQ2xvc2VNb2RhbCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJzdHlsZSIsIm92ZXJmbG93WSIsInVzZUVmZmVjdCIsImdldERhdGEiLCJtYXJjYXNSZWR1Y2VyIiwibWFyY2FzIiwibGVuZ3RoIiwiY2F0ZWdvcmlhc1JlZHVjZXIiLCJjYXRlZ29yaWFzIiwic3ViY2F0ZWdvcmlhUmVkdWNlciIsInN1YmNhdGVnb3JpYXMiLCJsb2NhdGlvbiIsImFjdGl2YXJGaWx0cm9Qb3JVcmwiLCJzd2l0Y2hJdGVtQWN0aXZlIiwiYWN0aXZhckZpbHRybyIsInF1ZXJ5IiwidHlwZSIsImluZGV4IiwidGlwb0ZpbHRybyIsImtleSIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJGaWx0cm9TdHlsZSIsIml0ZW1fZmlsdHJvIiwiZWxlbWVudCIsImNsYXNzTGlzdCIsInJlbW92ZSIsImFjdGl2ZSIsImljb25fY2xvc2VfZmlsdHJvIiwiYWRkIiwidHJpbSIsImdldEVsZW1lbnRzQnlOYW1lIiwiY29uc29sZSIsImxvZyIsImdldEVsZW1lbnRCeUlkIiwibmV3SXRlbU1hcmNhIiwiY3JlYXRlRWxlbWVudCIsImRpdkl0ZW1NYXJjYSIsInNwYW5JdGVtTWFyY2EiLCJpY29uQ2xvc2UiLCJtYXJjYU5hbWUiLCJmaWx0ZXIiLCJyZXMiLCJpZE1hcmNhIiwiY2xhc3NOYW1lIiwic2V0QXR0cmlidXRlIiwiYWRkRXZlbnRMaXN0ZW5lciIsImlubmVySFRNTCIsImxpbXBpYXJGaWx0cm8iLCJhcHBlbmRDaGlsZCIsInF1ZXJ5U2VsZWN0b3IiLCJmaXJzdEl0ZW1NYXJjYSIsImNoaWxkcmVuIiwibGlzdGFNYXJjYXMiLCJyZW1vdmVDaGlsZCIsInVybEZpbHRybyIsImFybWFyVXJsRmlsdHJvIiwidGlwbyIsImNsb3NlRmlsdHJvc01vYmlsZSIsImZpbHRyb3NfX2NvbnRhbmllciIsInNob3dfZmlsdHJvcyIsInVybCIsInNob3dGaWx0cm9zIiwidG9nZ2xlIiwic2hvdyIsInJvdGFyIiwiYnRuX2Nsb3NlX2ZpbHRybyIsImZhQ2hldnJvblJpZ2h0IiwiZmFCcm9vbSIsImZhVGltZXMiLCJjZXJyYXJfZmlsdHJvX21vYmlsZSIsInRpdHVsb19maWx0cm9zIiwibGlzdGEiLCJtYXAiLCJjYXQiLCJpZENhdGVnb3JpYSIsInNjIiwiaWRTdWJDYXRlZ29yaWEiLCJzaW5Cb3JkZXJCb3R0b20iLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdWJwcm9kdWN0b3NSZWR1Y2VyIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiY29ubmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtJQUVrQkEsZ0IsR0FBb0JDLHdFO0lBQ2RDLDRCLEdBQWtFQyxvRjtJQUExQkMsc0IsR0FBMEJELDhFO0lBQ3hFRSxvQixHQUF3QkMsMkU7SUFDeEJDLHNCLEdBQTBCQyw4RTs7QUFFNUMsSUFBTUMs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QUZHO0FBR0h4RSxxQkFBaUIsRUFBakJBLGlCQUhHO0FBSUhFLHVCQUFtQixFQUFuQkE7QUFKRyxHQUFQO0FBTUgsQ0FQRDs7QUFTQSxJQUFNdUUsa0JBQWtCLEdBQUc7QUFDdkJ4RyxrQkFBZ0IsRUFBaEJBLGdCQUR1QjtBQUV2QkUsOEJBQTRCLEVBQTVCQSw0QkFGdUI7QUFHdkJFLHdCQUFzQixFQUF0QkEsc0JBSHVCO0FBSXZCQyxzQkFBb0IsRUFBcEJBLG9CQUp1QjtBQUt2QkUsd0JBQXNCLEVBQXRCQTtBQUx1QixDQUEzQjtBQVFla0csMEhBQU8sQ0FBQ0gsZUFBRCxFQUFpQkUsa0JBQWpCLENBQVAsQ0FBNEMvRixNQUE1QyxDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2R1Y3Rvcy9bWy4uLmluZGV4XV0uMWJjMmVhMGU1M2ZiZjY3OGYzNjguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSx1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBGaWx0cm9TdHlsZSBmcm9tICcuL0ZpbHRyby5tb2R1bGUuY3NzJztcclxuaW1wb3J0IE1vZGFsIGZyb20gJy4uL01vZGFsJztcclxuaW1wb3J0IE1vZGFsTWFyY2EgZnJvbSAnLi4vTW9kYWxNYXJjYSc7XHJcbmltcG9ydCB7IGZhVGltZXMsZmFCcm9vbSxmYUNoZXZyb25SaWdodCB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnNcIjtcclxuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgKiBhcyBzdWJwcm9kdWN0b3NBY3Rpb25zIGZyb20gJy4uLy4uLy4uL3N0b3JlL2FjdGlvbnMvc3VicHJvZHVjdG9zQWN0aW9ucyc7XHJcbmltcG9ydCAqIGFzIG1hcmNhc0FjdGlvbnMgZnJvbSAnLi4vLi4vLi4vc3RvcmUvYWN0aW9ucy9tYXJjYXNBY3Rpb25zJztcclxuaW1wb3J0ICogYXMgY2F0ZWdvcmlhc0FjdGlvbnMgZnJvbSAnLi4vLi4vLi4vc3RvcmUvYWN0aW9ucy9jYXRlZ29yaWFzQWN0aW9uJztcclxuaW1wb3J0ICogYXMgc3ViY2F0ZWdvcmlhc0FjdGlvbnMgZnJvbSAnLi4vLi4vLi4vc3RvcmUvYWN0aW9ucy9zdWJjYXRlZ29yaWFzQWN0aW9uJztcclxuaW1wb3J0IExvYWRlciBmcm9tICcuLi9Mb2FkZXInO1xyXG5cclxuY29uc3Qge3RyYWVyVG9kYXM6bWFyY2FzVHJhZXJUb2Rhc30gPSBtYXJjYXNBY3Rpb25zO1xyXG5jb25zdCB7ZmlsdHJhclByb2R1Y3RvczpzdWJwcm9kdWN0b3NGaWx0cmFyUHJvZHVjdG9zLHRyYWVyVG9kb3M6c3VicHJvZHVjdG9zVHJhZXJUb2Rvc30gPSBzdWJwcm9kdWN0b3NBY3Rpb25zO1xyXG5jb25zdCB7dHJhZXJUb2RhczpjYXRlZ29yaWFzVHJhZXJUb2Rhc30gPSBjYXRlZ29yaWFzQWN0aW9ucztcclxuY29uc3Qge3RyYWVyVG9kYXM6c3ViY2F0ZWdvcmlhVHJhZXJUb2Rhc30gPSBzdWJjYXRlZ29yaWFzQWN0aW9ucztcclxuXHJcbmNvbnN0IEZpbHRybyA9IChwcm9wcykgPT4ge1xyXG5cclxuICAgIC8vc3RhdGUgZm9yIHRoZSBmaWx0ZXJzXHJcbiAgICBjb25zdCBbZXN0YWRvRmlsdHJvLCBzZXRFc3RhZG9GaWx0cm9dID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIGZpbHRyYW5kbzpmYWxzZSxcclxuICAgICAgICBjYXRlZ29yaWE6JycsXHJcbiAgICAgICAgc3ViY2F0ZWdvcmlhOicnLFxyXG4gICAgICAgIG1hcmNhOicnLFxyXG4gICAgICAgIGJ1c2NhZG9yOicnXHJcbiAgICB9KTtcclxuXHJcbiAgICAvL21hbmVqbyBkZSBNb2RhbCBtYXJjYXNcclxuICAgIGNvbnN0IFttb2RhbElzT3Blbiwgc2V0TW9kYWxJc09wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3Qgb25DbG9zZU1vZGFsID0gKCk9PntcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYm9keScpWzBdLnN0eWxlLm92ZXJmbG93WSA9ICdzY3JvbGwnO1xyXG4gICAgICAgIHNldE1vZGFsSXNPcGVuKGZhbHNlKTtcclxuICAgIH1cclxuXHJcbiAgICAvL2xvb3AgZGUgZWZlY3RvIHBhcmEgZWplY3V0YXIgc29sbyB1bmEgdmV6IGN1YW5kbyBlbCBjb21wb25lbnRlIHNlIG1vbnRlIGVuIGVsIGNhc28gZGUgcXVlIHNlIGVzdGUgZmlsdHJhbmRvIGRpcmVjdG8gZGVzZGUgbGEgdXJsXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGdldERhdGEoKTtcclxuICAgIH0sW10pO1xyXG4gICAgICAgIFxyXG4gICAgY29uc3QgZ2V0RGF0YSA9IGFzeW5jKCk9PntcclxuICAgICAgICBpZihwcm9wcy5tYXJjYXNSZWR1Y2VyLm1hcmNhcy5sZW5ndGg9PT0wKXtcclxuICAgICAgICAgICAgYXdhaXQgcHJvcHMubWFyY2FzVHJhZXJUb2RhcygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZihwcm9wcy5jYXRlZ29yaWFzUmVkdWNlci5jYXRlZ29yaWFzLmxlbmd0aD09PTApe1xyXG4gICAgICAgICAgICBhd2FpdCBwcm9wcy5jYXRlZ29yaWFzVHJhZXJUb2RhcygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZihwcm9wcy5zdWJjYXRlZ29yaWFSZWR1Y2VyLnN1YmNhdGVnb3JpYXMubGVuZ3RoPT09MCl7XHJcbiAgICAgICAgICAgIGF3YWl0IHByb3BzLnN1YmNhdGVnb3JpYVRyYWVyVG9kYXMoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYocHJvcHMubG9jYXRpb24gIT09ICcvcHJvZHVjdG9zJyl7XHJcbiAgICAgICAgICAgIGFjdGl2YXJGaWx0cm9Qb3JVcmwoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy9sb29wIGRlIGVmZWN0byBwYXJhIGhhY2VyIHJlbmRlciBjYWRhIHZleiBxdWUgc2UgYWdyZWdhIG8gZWxpbWluYSB1biBmaWx0cm9cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgc3dpdGNoSXRlbUFjdGl2ZSgpO1xyXG4gICAgfSwgW2VzdGFkb0ZpbHRyb10pO1xyXG5cclxuICAgIGNvbnN0IGFjdGl2YXJGaWx0cm9Qb3JVcmwgPSAoKT0+e1xyXG4gICAgICAgIHJldHVybiBhY3RpdmFyRmlsdHJvKHByb3BzLnF1ZXJ5LnR5cGUscHJvcHMucXVlcnkuaW5kZXhbMV0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGFjdGl2YXJGaWx0cm8gPSAodGlwb0ZpbHRybyxrZXkpPT57XHJcbiAgICAgICAgc3dpdGNoICh0aXBvRmlsdHJvKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ2NhdGVnb3JpYSc6XHJcbiAgICAgICAgICAgICAgICBzZXRFc3RhZG9GaWx0cm8oe1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLmVzdGFkb0ZpbHRybyxcclxuICAgICAgICAgICAgICAgICAgICBjYXRlZ29yaWE6a2V5LFxyXG4gICAgICAgICAgICAgICAgICAgIGJ1c2NhZG9yOicnLFxyXG4gICAgICAgICAgICAgICAgICAgIGZpbHRyYW5kbzp0cnVlXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdzdWJjYXRlZ29yaWEnOlxyXG4gICAgICAgICAgICAgICAgc2V0RXN0YWRvRmlsdHJvKHtcclxuICAgICAgICAgICAgICAgICAgICAuLi5lc3RhZG9GaWx0cm8sXHJcbiAgICAgICAgICAgICAgICAgICAgc3ViY2F0ZWdvcmlhOmtleSxcclxuICAgICAgICAgICAgICAgICAgICBidXNjYWRvcjonJyxcclxuICAgICAgICAgICAgICAgICAgICBmaWx0cmFuZG86dHJ1ZVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdtYXJjYSc6XHJcbiAgICAgICAgICAgICAgICBzZXRFc3RhZG9GaWx0cm8oe1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLmVzdGFkb0ZpbHRybyxcclxuICAgICAgICAgICAgICAgICAgICBtYXJjYTprZXksXHJcbiAgICAgICAgICAgICAgICAgICAgYnVzY2Fkb3I6JycsXHJcbiAgICAgICAgICAgICAgICAgICAgZmlsdHJhbmRvOnRydWVcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnYnVzY2Fkb3InOlxyXG4gICAgICAgICAgICAgICAgc2V0RXN0YWRvRmlsdHJvKHtcclxuICAgICAgICAgICAgICAgICAgICAuLi5lc3RhZG9GaWx0cm8sXHJcbiAgICAgICAgICAgICAgICAgICAgYnVzY2Fkb3I6a2V5LFxyXG4gICAgICAgICAgICAgICAgICAgIGZpbHRyYW5kbzp0cnVlXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHN3aXRjaEl0ZW1BY3RpdmUgPSAoKT0+e1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGVzdGFkb0ZpbHRybyk7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKEZpbHRyb1N0eWxlLml0ZW1fZmlsdHJvKS5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoRmlsdHJvU3R5bGUuaXRlbV9maWx0cm8pW2luZGV4XTtcclxuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKEZpbHRyb1N0eWxlLmFjdGl2ZSk7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoRmlsdHJvU3R5bGUuaWNvbl9jbG9zZV9maWx0cm8pW2luZGV4XS5jbGFzc0xpc3QuYWRkKCdkLW5vbmUnKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmKGVzdGFkb0ZpbHRyby5jYXRlZ29yaWEgPT09ICcnICYmIGVzdGFkb0ZpbHRyby5zdWJjYXRlZ29yaWEgPT09ICcnICYmIGVzdGFkb0ZpbHRyby5tYXJjYSA9PT0gJycpe1xyXG4gICAgICAgICAgICAvL3Byb3BzLnN1YnByb2R1Y3Rvc1RyYWVyVG9kb3MoKTtcclxuICAgICAgICAgICAgc2V0RXN0YWRvRmlsdHJvKHtcclxuICAgICAgICAgICAgICAgIC4uLmVzdGFkb0ZpbHRybyxcclxuICAgICAgICAgICAgICAgIGZpbHRyYW5kbzpmYWxzZVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoIWVzdGFkb0ZpbHRyby5maWx0cmFuZG8pIHJldHVybjtcclxuICAgICAgICAvL3NpIG5vIGhheSBuYWRhIGVuIGJ1c2NhZG9yLCBwdWVkbyBzZXRlYXIgdW4gYWN0aXZlIGVuIGFsZ3VuIGVsZW1lbnRvIGRlIGxhIGxpc3RhXHJcbiAgICAgICAgaWYoZXN0YWRvRmlsdHJvLmJ1c2NhZG9yLnRyaW0oKT09PScnKXtcclxuICAgICAgICAgICAgLy9yZWNvcnJvIGVsIHN0YXRlIHBhcmEgb2J0ZW5lciBsYXMgY2xhdmVzIHkgYWdyZWdhciBhY3RpdmUgZWwgZWxlbWVudG8gY29ycmVzcG9uZGllbnRlXHJcbiAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IGluIGVzdGFkb0ZpbHRybykge1xyXG4gICAgICAgICAgICAgICAgaWYoZXN0YWRvRmlsdHJvW2tleV0gJiYgZXN0YWRvRmlsdHJvW2tleV0hPT0nJyAmJiBlc3RhZG9GaWx0cm9ba2V5XSE9PXRydWUpe1xyXG4gICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coZXN0YWRvRmlsdHJvW2tleV0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKGAke2tleX0tJHtlc3RhZG9GaWx0cm9ba2V5XX1gKVswXSl7Ly9wcmVndW50byBzaSBleGlzdGUgZWwgZWxlbWVudG8gY29uIGVsIG5hbWUgZGVsIGZpbHRybyBwYXJhIGFncmVnYXJsZSBlbCBhY3RpdmUsIHNpIG5vIGV4aXN0ZSBsbyBjcmVvLiAoc2kgbm8gZXhpc3RlIGVzIHBvcnF1ZSB2aWVuZSBkZXNkZSBtb2RhbCBkZSBtYXJjYXMpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCchISEnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoYCR7a2V5fS0ke2VzdGFkb0ZpbHRyb1trZXldfWApWzBdLmNsYXNzTGlzdC5hZGQoRmlsdHJvU3R5bGUuYWN0aXZlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGNsb3NlLSR7a2V5fS0ke2VzdGFkb0ZpbHRyb1trZXldfWApLmNsYXNzTGlzdC5yZW1vdmUoJ2Qtbm9uZScpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihlc3RhZG9GaWx0cm8ubWFyY2EhPT0nJyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2NyZW8gbG9zIGVsZW1lbnRvcyBkZWwgaXRlbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG5ld0l0ZW1NYXJjYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGl2SXRlbU1hcmNhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgc3Bhbkl0ZW1NYXJjYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpY29uQ2xvc2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdmcnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbWFyY2FOYW1lID0gcHJvcHMubWFyY2FzUmVkdWNlci5tYXJjYXMuZmlsdGVyKHJlcz0+cmVzLmlkTWFyY2EgPT0gZXN0YWRvRmlsdHJvLm1hcmNhKVswXS5tYXJjYTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2FzaWdubyBsYXMgY2xhc2VzLCBhdHJpYnV0b3MgeSBldmVudG9zIG5lY2VzYXJpb3MuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXZJdGVtTWFyY2EuY2xhc3NOYW1lID1gJHtGaWx0cm9TdHlsZS5pdGVtX2ZpbHRyb30gJHtGaWx0cm9TdHlsZS5hY3RpdmV9YDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpdkl0ZW1NYXJjYS5zZXRBdHRyaWJ1dGUoJ25hbWUnLGBtYXJjYS0ke2VzdGFkb0ZpbHRyby5tYXJjYX1gKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpdkl0ZW1NYXJjYS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PmFjdGl2YXJGaWx0cm8oJ21hcmNhJyxlc3RhZG9GaWx0cm8ubWFyY2EpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNwYW5JdGVtTWFyY2EuY2xhc3NOYW1lID0gJ3RleHQtbXV0ZWQnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Bhbkl0ZW1NYXJjYS5pbm5lckhUTUwgPSBtYXJjYU5hbWU7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb25DbG9zZS5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyBhcmlhLWhpZGRlbj1cInRydWVcIiBmb2N1c2FibGU9XCJmYWxzZVwiIGRhdGEtcHJlZml4PVwiZmFzXCIgZGF0YS1pY29uPVwidGltZXNcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdib3g9XCIwIDAgMzUyIDUxMlwiIGNsYXNzPVwic3ZnLWlubGluZS0tZmEgZmEtdGltZXMgZmEtdy0xMSBGaWx0cm9faWNvbl9jbG9zZV9maWx0cm9fXzF4bHY1XCIgaWQ9XCJjbG9zZS1tYXJjYS0ke2VzdGFkb0ZpbHRyby5tYXJjYX1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMjQyLjcyIDI1NmwxMDAuMDctMTAwLjA3YzEyLjI4LTEyLjI4IDEyLjI4LTMyLjE5IDAtNDQuNDhsLTIyLjI0LTIyLjI0Yy0xMi4yOC0xMi4yOC0zMi4xOS0xMi4yOC00NC40OCAwTDE3NiAxODkuMjggNzUuOTMgODkuMjFjLTEyLjI4LTEyLjI4LTMyLjE5LTEyLjI4LTQ0LjQ4IDBMOS4yMSAxMTEuNDVjLTEyLjI4IDEyLjI4LTEyLjI4IDMyLjE5IDAgNDQuNDhMMTA5LjI4IDI1NiA5LjIxIDM1Ni4wN2MtMTIuMjggMTIuMjgtMTIuMjggMzIuMTkgMCA0NC40OGwyMi4yNCAyMi4yNGMxMi4yOCAxMi4yOCAzMi4yIDEyLjI4IDQ0LjQ4IDBMMTc2IDMyMi43MmwxMDAuMDcgMTAwLjA3YzEyLjI4IDEyLjI4IDMyLjIgMTIuMjggNDQuNDggMGwyMi4yNC0yMi4yNGMxMi4yOC0xMi4yOCAxMi4yOC0zMi4xOSAwLTQ0LjQ4TDI0Mi43MiAyNTZ6XCI+PC9wYXRoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb25DbG9zZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PmxpbXBpYXJGaWx0cm8oJ21hcmNhJykpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vdm95IHViaWNhbmRvIGxvcyBlbGVtZW50b3MgZGVudHJvIGRlIGNhZGEgcGFkcmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpdkl0ZW1NYXJjYS5hcHBlbmRDaGlsZChzcGFuSXRlbU1hcmNhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld0l0ZW1NYXJjYS5hcHBlbmRDaGlsZChkaXZJdGVtTWFyY2EpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3SXRlbU1hcmNhLmFwcGVuZENoaWxkKGljb25DbG9zZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vT2J0ZW5nbyBlbCBwcmltZXIgaXRlbSBkZSBsYSBsaXN0YSB5IGxvIGVsaW1pbm8sIHBhcmEgdGVuZXIgc2llbXByZSBsYSBtaXNtYSBjYW50aWRhZCBkZSBtYXJjYXMgZW4gbGEgbGlzdGEuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjbGlzdGFNYXJjYWApKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZmlyc3RJdGVtTWFyY2EgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjbGlzdGFNYXJjYWApLmNoaWxkcmVuWzBdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBsaXN0YU1hcmNhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNsaXN0YU1hcmNhYCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGlzdGFNYXJjYXMucmVtb3ZlQ2hpbGQoZmlyc3RJdGVtTWFyY2EpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vYWhvcmEgYWdyZWdvIGVsIGl0ZW0gY3JlYWRvIGEgbGEgbGlzdGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaXN0YU1hcmNhcy5hcHBlbmRDaGlsZChuZXdJdGVtTWFyY2EpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvL2xhIHByaW1lcmEgdmV6IHF1ZSBzZSBjYXJnYSBlbCBjb21wb25lbnRlLCBmaWx0cmFuZG8gZXMgZmFsc2UsIHBvciBlc28gcHJlZ3VudG8gcGFyYSBxdWUgbm8gc2UgZWplY3V0YSBsYSBmdW5jaW9uIGRlIGlyIGEgZmlsdHJhciBhcGVuYXMgc2UgbW9udGUgZWwgY29tcG9uZW50ZS4gU2lubyBxdWUgc2UgZWplY3V0ZSBjdWFuZG8gZGUgdmVyZGFkIHNlIHF1aWVyYSBmaWx0cmFyLlxyXG4gICAgICAgIGlmKGVzdGFkb0ZpbHRyby5maWx0cmFuZG8pe1xyXG4gICAgICAgICAgICBsZXQgdXJsRmlsdHJvID0gYXJtYXJVcmxGaWx0cm8oKTsvL2FybW8gbGEgdXJsIHF1ZSBtYW5kbyBhIGxhIGFwaSBwYXJhIHRyYWVyIGxvcyByZXN1bHRhZG9zIGRlIGxvIGZpbHRyYWRvLlxyXG4gICAgICAgICAgICBwcm9wcy5zdWJwcm9kdWN0b3NGaWx0cmFyUHJvZHVjdG9zKHVybEZpbHRybyk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBsaW1waWFyRmlsdHJvID0gdGlwbz0+e1xyXG4gICAgICAgIHN3aXRjaCAodGlwbykge1xyXG4gICAgICAgICAgICBjYXNlICdjYXRlZ29yaWEnOlxyXG4gICAgICAgICAgICAgICAgc2V0RXN0YWRvRmlsdHJvKHtcclxuICAgICAgICAgICAgICAgICAgICAuLi5lc3RhZG9GaWx0cm8sXHJcbiAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcmlhOicnXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdzdWJjYXRlZ29yaWEnOlxyXG4gICAgICAgICAgICAgICAgc2V0RXN0YWRvRmlsdHJvKHtcclxuICAgICAgICAgICAgICAgICAgICAuLi5lc3RhZG9GaWx0cm8sXHJcbiAgICAgICAgICAgICAgICAgICAgc3ViY2F0ZWdvcmlhOicnXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdtYXJjYSc6XHJcbiAgICAgICAgICAgICAgICBzZXRFc3RhZG9GaWx0cm8oe1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLmVzdGFkb0ZpbHRybyxcclxuICAgICAgICAgICAgICAgICAgICBtYXJjYTonJ1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHByb3BzLnN1YnByb2R1Y3Rvc1RyYWVyVG9kb3MoKTtcclxuICAgICAgICAgICAgICAgIHNldEVzdGFkb0ZpbHRybyh7XHJcbiAgICAgICAgICAgICAgICAgICAgZmlsdHJhbmRvOmZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIGNhdGVnb3JpYTonJyxcclxuICAgICAgICAgICAgICAgICAgICBzdWJjYXRlZ29yaWE6JycsXHJcbiAgICAgICAgICAgICAgICAgICAgbWFyY2E6JycsXHJcbiAgICAgICAgICAgICAgICAgICAgYnVzY2Fkb3I6JydcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY2xvc2VGaWx0cm9zTW9iaWxlID0gKCk9PntcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKEZpbHRyb1N0eWxlLmZpbHRyb3NfX2NvbnRhbmllcilbMF0uY2xhc3NMaXN0LnJlbW92ZShGaWx0cm9TdHlsZS5zaG93X2ZpbHRyb3MpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGFybWFyVXJsRmlsdHJvID0gKCk9PntcclxuICAgICAgICBsZXQgdXJsID0gJ2ZpbHRyYXInO1xyXG4gICAgICAgIC8vc2kgYnVzY2Fkb3IgdmllbmUgdHJ1ZSwgZXMgcG9ycXVlIHZpZW5lIGRlc2RlIGVsIGJ1c2NhZG9yIGRlbCBtZW51IG8gbW9kYWwgZGUgYnVzY2Fkb3IobW9iaWxlKS5cclxuICAgICAgICBpZihlc3RhZG9GaWx0cm8uYnVzY2Fkb3IhPT0nJykgcmV0dXJuIHVybCArPSBgP2J1c2Nhcj0ke2VzdGFkb0ZpbHRyby5idXNjYWRvcn1gO1xyXG5cclxuICAgICAgICBsZXQgY2F0ZWdvcmlhID0gZXN0YWRvRmlsdHJvLmNhdGVnb3JpYSxcclxuICAgICAgICAgICAgc3ViY2F0ZWdvcmlhID0gZXN0YWRvRmlsdHJvLnN1YmNhdGVnb3JpYSxcclxuICAgICAgICAgICAgbWFyY2EgPSBlc3RhZG9GaWx0cm8ubWFyY2E7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYoY2F0ZWdvcmlhICYmIGNhdGVnb3JpYSAhPT0gJycpe1xyXG4gICAgICAgICAgICB1cmwgKz0gYD9jYXRlZ29yaWE9JHtlc3RhZG9GaWx0cm8uY2F0ZWdvcmlhfWA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKGVzdGFkb0ZpbHRyby5zdWJjYXRlZ29yaWEgJiYgZXN0YWRvRmlsdHJvLnN1YmNhdGVnb3JpYSAhPT0gJycpe1xyXG4gICAgICAgICAgICBpZihjYXRlZ29yaWEhPT0gJycpe1xyXG4gICAgICAgICAgICAgICAgdXJsICs9IGAmc3ViY2F0ZWdvcmlhPSR7ZXN0YWRvRmlsdHJvLnN1YmNhdGVnb3JpYX1gOyBcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICB1cmwgKz0gYD9zdWJjYXRlZ29yaWE9JHtlc3RhZG9GaWx0cm8uc3ViY2F0ZWdvcmlhfWA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYobWFyY2EgJiYgbWFyY2EgIT09ICcnKXtcclxuICAgICAgICAgICAgaWYoY2F0ZWdvcmlhICE9PSAnJyAmJiBzdWJjYXRlZ29yaWEgIT09ICcnKXtcclxuICAgICAgICAgICAgICAgIHVybCArPSBgP21hcmNhPSR7ZXN0YWRvRmlsdHJvLm1hcmNhfWA7XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgdXJsICs9IGAmbWFyY2E9JHtlc3RhZG9GaWx0cm8ubWFyY2F9YDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdXJsO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHNob3dGaWx0cm9zID0gKCk9PntcclxuICAgICAgICBsZXQgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoRmlsdHJvU3R5bGUuZmlsdHJvc19fY29udGFuaWVyKVswXTtcclxuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoRmlsdHJvU3R5bGUuc2hvdyk7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ljb25GaWx0cm9Db250YWluZXInKS5jbGFzc0xpc3QudG9nZ2xlKEZpbHRyb1N0eWxlLnJvdGFyKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtGaWx0cm9TdHlsZS5maWx0cm9zX19jb250YW5pZXJ9PlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17RmlsdHJvU3R5bGUuYnRuX2Nsb3NlX2ZpbHRyb30gb25DbGljaz17c2hvd0ZpbHRyb3N9PlxyXG4gICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpZD1cImljb25GaWx0cm9Db250YWluZXJcIiBpY29uPXtmYUNoZXZyb25SaWdodH0vPlxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIHsocHJvcHMuY2F0ZWdvcmlhc1JlZHVjZXIuY2F0ZWdvcmlhcy5sZW5ndGg9PTAgfHwgcHJvcHMuc3ViY2F0ZWdvcmlhUmVkdWNlci5zdWJjYXRlZ29yaWFzLmxlbmd0aD09MCB8fCBwcm9wcy5tYXJjYXNSZWR1Y2VyLm1hcmNhcy5sZW5ndGg9PTApPzxMb2FkZXIvPjpcclxuICAgICAgICAgICAgICAgICAgICA8PiAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsoZXN0YWRvRmlsdHJvLmZpbHRyYW5kbyk/PGJ1dHRvbiBjbGFzc05hbWU9XCJib3RvbiBiZy15ZWxsb3cgbWItM1wiIG9uQ2xpY2s9e2xpbXBpYXJGaWx0cm99PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUJyb29tfS8+IExpbXBpYXIgRmlsdHJvc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj46bnVsbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVRpbWVzfSBjbGFzc05hbWU9e0ZpbHRyb1N0eWxlLmNlcnJhcl9maWx0cm9fbW9iaWxlfSBvbkNsaWNrPXtjbG9zZUZpbHRyb3NNb2JpbGV9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT17RmlsdHJvU3R5bGUudGl0dWxvX2ZpbHRyb3N9Pk1hc2NvdGE8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPXtGaWx0cm9TdHlsZS5saXN0YX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHMuY2F0ZWdvcmlhc1JlZHVjZXIuY2F0ZWdvcmlhcy5tYXAoY2F0PT4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2NhdC5pZENhdGVnb3JpYX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17RmlsdHJvU3R5bGUuaXRlbV9maWx0cm99IG5hbWU9e2BjYXRlZ29yaWEtJHtjYXQuaWRDYXRlZ29yaWF9YH0gb25DbGljaz17KCk9PmFjdGl2YXJGaWx0cm8oJ2NhdGVnb3JpYScsYCR7Y2F0LmlkQ2F0ZWdvcmlhfWApfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkXCI+e2NhdC5jYXRlZ29yaWF9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhVGltZXN9IGNsYXNzTmFtZT17RmlsdHJvU3R5bGUuaWNvbl9jbG9zZV9maWx0cm8gKyAnICcgKyBgZC1ub25lYH0gb25DbGljaz17KCk9PmxpbXBpYXJGaWx0cm8oJ2NhdGVnb3JpYScpfSBpZD17YGNsb3NlLWNhdGVnb3JpYS0ke2NhdC5pZENhdGVnb3JpYX1gfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPXtGaWx0cm9TdHlsZS50aXR1bG9fZmlsdHJvc30+QWxpbWVudG9zPC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT17RmlsdHJvU3R5bGUubGlzdGF9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzLnN1YmNhdGVnb3JpYVJlZHVjZXIuc3ViY2F0ZWdvcmlhcy5tYXAoc2M9PihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17c2MuaWRTdWJDYXRlZ29yaWF9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e0ZpbHRyb1N0eWxlLml0ZW1fZmlsdHJvfSBuYW1lPXtgc3ViY2F0ZWdvcmlhLSR7c2MuaWRTdWJDYXRlZ29yaWF9YH0gb25DbGljaz17KCk9PmFjdGl2YXJGaWx0cm8oJ3N1YmNhdGVnb3JpYScsYCR7c2MuaWRTdWJDYXRlZ29yaWF9YCl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtbXV0ZWRcIj57c2Muc3ViY2F0ZWdvcmlhfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVRpbWVzfSBjbGFzc05hbWU9e0ZpbHRyb1N0eWxlLmljb25fY2xvc2VfZmlsdHJvICsgJyAnICsgYGQtbm9uZWB9IG9uQ2xpY2s9eygpPT5saW1waWFyRmlsdHJvKCdzdWJjYXRlZ29yaWEnKX0gaWQ9e2BjbG9zZS0ke2BzdWJjYXRlZ29yaWEtJHtzYy5pZFN1YkNhdGVnb3JpYX1gfWB9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT17RmlsdHJvU3R5bGUudGl0dWxvX2ZpbHRyb3N9Pk1hcmNhPC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGlkPVwibGlzdGFNYXJjYVwiIGNsYXNzTmFtZT17RmlsdHJvU3R5bGUuc2luQm9yZGVyQm90dG9tKyAnICcgKyBGaWx0cm9TdHlsZS5saXN0YX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHMubWFyY2FzUmVkdWNlci5tYXJjYXMubWFwKChtYXJjYSxrZXkpPT4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChrZXk+Myk/ZmFsc2U6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e21hcmNhLmlkTWFyY2F9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e0ZpbHRyb1N0eWxlLml0ZW1fZmlsdHJvfSBuYW1lPXtgbWFyY2EtJHttYXJjYS5pZE1hcmNhfWB9IG9uQ2xpY2s9eygpPT5hY3RpdmFyRmlsdHJvKCdtYXJjYScsYCR7bWFyY2EuaWRNYXJjYX1gKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1tdXRlZFwiPnttYXJjYS5tYXJjYX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFUaW1lc30gY2xhc3NOYW1lPXtGaWx0cm9TdHlsZS5pY29uX2Nsb3NlX2ZpbHRybyArICcgJyArIGBkLW5vbmVgfSBvbkNsaWNrPXsoKT0+bGltcGlhckZpbHRybygnbWFyY2EnKX0gaWQ9e2BjbG9zZS1tYXJjYS0ke21hcmNhLmlkTWFyY2F9YH0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCk9PnNldE1vZGFsSXNPcGVuKHRydWUpfSBjbGFzc05hbWU9XCJib3RvbiBiZy1ncmlzXCI+VmVyIHRvZGFzPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB7KCFtb2RhbElzT3Blbik/bnVsbDpcclxuICAgICAgICAgICAgICAgIDxNb2RhbCBjbG9zZU1vZGFsPXtvbkNsb3NlTW9kYWx9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxNb2RhbE1hcmNhIGNsb3NlTW9kYWw9e29uQ2xvc2VNb2RhbH0gYWN0aXZhckZpbHRybz17YWN0aXZhckZpbHRyb30vPlxyXG4gICAgICAgICAgICAgICAgPC9Nb2RhbD5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHttYXJjYXNSZWR1Y2VyLHN1YnByb2R1Y3Rvc1JlZHVjZXIsY2F0ZWdvcmlhc1JlZHVjZXIsc3ViY2F0ZWdvcmlhUmVkdWNlcn0pPT57XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG1hcmNhc1JlZHVjZXIsXHJcbiAgICAgICAgc3VicHJvZHVjdG9zUmVkdWNlcixcclxuICAgICAgICBjYXRlZ29yaWFzUmVkdWNlcixcclxuICAgICAgICBzdWJjYXRlZ29yaWFSZWR1Y2VyXHJcbiAgICB9O1xyXG59XHJcblxyXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSB7XHJcbiAgICBtYXJjYXNUcmFlclRvZGFzLFxyXG4gICAgc3VicHJvZHVjdG9zRmlsdHJhclByb2R1Y3RvcyxcclxuICAgIHN1YnByb2R1Y3Rvc1RyYWVyVG9kb3MsXHJcbiAgICBjYXRlZ29yaWFzVHJhZXJUb2RhcyxcclxuICAgIHN1YmNhdGVnb3JpYVRyYWVyVG9kYXNcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsbWFwRGlzcGF0Y2hUb1Byb3BzKShGaWx0cm8pOyJdLCJzb3VyY2VSb290IjoiIn0=