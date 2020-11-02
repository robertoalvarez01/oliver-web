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
              if (props.marcasReducer.marcas.length === 0 && props.categoriasReducer.categorias.length === 0 && props.subcategoriaReducer.subcategorias.length === 0) {
                Promise.all([props.marcasTraerTodas(), props.categoriasTraerTodas(), props.subcategoriaTraerTodas()]).then(function () {
                  if (props.location !== '/productos') {
                    activarFiltroPorUrl();
                  }
                });
              } else {
                if (props.location !== '/productos') {
                  activarFiltroPorUrl();
                }
              }

            case 1:
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
          props.subproductosTraerTodos();
        } else {
          setEstadoFiltro(_objectSpread(_objectSpread({}, estadoFiltro), {}, {
            marca: ''
          }));
        }

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
      lineNumber: 272,
      columnNumber: 9
    }
  }, __jsx("button", {
    className: _Filtro_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.btn_close_filtro,
    onClick: showFiltros,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 273,
      columnNumber: 13
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeIcon"], {
    id: "iconFiltroContainer",
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faChevronRight"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 274,
      columnNumber: 17
    }
  })), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 276,
      columnNumber: 13
    }
  }, props.categoriasReducer.categorias.length == 0 || props.subcategoriaReducer.subcategorias.length == 0 || props.marcasReducer.marcas.length == 0 ? __jsx(_Loader__WEBPACK_IMPORTED_MODULE_14__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 277,
      columnNumber: 158
    }
  }) : __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, estadoFiltro.filtrando ? __jsx("button", {
    className: "boton bg-yellow mb-3",
    onClick: limpiarFiltro,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 279,
      columnNumber: 51
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faBroom"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 280,
      columnNumber: 29
    }
  }), " Limpiar Filtros") : null, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faTimes"],
    className: _Filtro_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.cerrar_filtro_mobile,
    onClick: closeFiltrosMobile,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 282,
      columnNumber: 25
    }
  }), __jsx("h4", {
    className: _Filtro_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.titulo_filtros,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 283,
      columnNumber: 25
    }
  }, "Mascota"), __jsx("ul", {
    className: _Filtro_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.lista,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 284,
      columnNumber: 25
    }
  }, props.categoriasReducer.categorias.map(function (cat) {
    return __jsx("li", {
      key: cat.idCategoria,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 287,
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
        lineNumber: 288,
        columnNumber: 41
      }
    }, __jsx("span", {
      className: "text-muted",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 289,
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
        lineNumber: 291,
        columnNumber: 41
      }
    }));
  })), __jsx("h4", {
    className: _Filtro_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.titulo_filtros,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 298,
      columnNumber: 25
    }
  }, "Alimentos"), __jsx("ul", {
    className: _Filtro_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.lista,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 299,
      columnNumber: 25
    }
  }, props.subcategoriaReducer.subcategorias.map(function (sc) {
    return __jsx("li", {
      key: sc.idSubCategoria,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 302,
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
        lineNumber: 303,
        columnNumber: 41
      }
    }, __jsx("span", {
      className: "text-muted",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 304,
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
        lineNumber: 306,
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
  }, "Marca"), __jsx("ul", {
    id: "listaMarca",
    className: _Filtro_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.sinBorderBottom + ' ' + _Filtro_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.lista,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 313,
      columnNumber: 25
    }
  }, props.marcasReducer.marcas.map(function (marca, key) {
    return key > 3 ? false : __jsx("li", {
      key: marca.idMarca,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 317,
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
        lineNumber: 318,
        columnNumber: 41
      }
    }, __jsx("span", {
      className: "text-muted",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 319,
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
        lineNumber: 321,
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
      lineNumber: 326,
      columnNumber: 25
    }
  }, "Ver todas"))), !modalIsOpen ? null : __jsx(_Modal__WEBPACK_IMPORTED_MODULE_5__["default"], {
    closeModal: onCloseModal,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 331,
      columnNumber: 17
    }
  }, __jsx(_ModalMarca__WEBPACK_IMPORTED_MODULE_6__["default"], {
    closeModal: onCloseModal,
    activarFiltro: activarFiltro,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 332,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRmlsdHJvL2luZGV4LmpzIl0sIm5hbWVzIjpbIm1hcmNhc1RyYWVyVG9kYXMiLCJtYXJjYXNBY3Rpb25zIiwic3VicHJvZHVjdG9zRmlsdHJhclByb2R1Y3RvcyIsInN1YnByb2R1Y3Rvc0FjdGlvbnMiLCJzdWJwcm9kdWN0b3NUcmFlclRvZG9zIiwiY2F0ZWdvcmlhc1RyYWVyVG9kYXMiLCJjYXRlZ29yaWFzQWN0aW9ucyIsInN1YmNhdGVnb3JpYVRyYWVyVG9kYXMiLCJzdWJjYXRlZ29yaWFzQWN0aW9ucyIsIkZpbHRybyIsInByb3BzIiwidXNlU3RhdGUiLCJmaWx0cmFuZG8iLCJjYXRlZ29yaWEiLCJzdWJjYXRlZ29yaWEiLCJtYXJjYSIsImJ1c2NhZG9yIiwiZXN0YWRvRmlsdHJvIiwic2V0RXN0YWRvRmlsdHJvIiwibW9kYWxJc09wZW4iLCJzZXRNb2RhbElzT3BlbiIsIm9uQ2xvc2VNb2RhbCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJzdHlsZSIsIm92ZXJmbG93WSIsInVzZUVmZmVjdCIsImdldERhdGEiLCJtYXJjYXNSZWR1Y2VyIiwibWFyY2FzIiwibGVuZ3RoIiwiY2F0ZWdvcmlhc1JlZHVjZXIiLCJjYXRlZ29yaWFzIiwic3ViY2F0ZWdvcmlhUmVkdWNlciIsInN1YmNhdGVnb3JpYXMiLCJQcm9taXNlIiwiYWxsIiwidGhlbiIsImxvY2F0aW9uIiwiYWN0aXZhckZpbHRyb1BvclVybCIsInN3aXRjaEl0ZW1BY3RpdmUiLCJhY3RpdmFyRmlsdHJvIiwicXVlcnkiLCJ0eXBlIiwiaW5kZXgiLCJ0aXBvRmlsdHJvIiwia2V5IiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsIkZpbHRyb1N0eWxlIiwiaXRlbV9maWx0cm8iLCJlbGVtZW50IiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiYWN0aXZlIiwiaWNvbl9jbG9zZV9maWx0cm8iLCJhZGQiLCJ0cmltIiwiZ2V0RWxlbWVudHNCeU5hbWUiLCJjb25zb2xlIiwibG9nIiwiZ2V0RWxlbWVudEJ5SWQiLCJuZXdJdGVtTWFyY2EiLCJjcmVhdGVFbGVtZW50IiwiZGl2SXRlbU1hcmNhIiwic3Bhbkl0ZW1NYXJjYSIsImljb25DbG9zZSIsIm1hcmNhTmFtZSIsImZpbHRlciIsInJlcyIsImlkTWFyY2EiLCJjbGFzc05hbWUiLCJzZXRBdHRyaWJ1dGUiLCJhZGRFdmVudExpc3RlbmVyIiwiaW5uZXJIVE1MIiwibGltcGlhckZpbHRybyIsImFwcGVuZENoaWxkIiwicXVlcnlTZWxlY3RvciIsImZpcnN0SXRlbU1hcmNhIiwiY2hpbGRyZW4iLCJsaXN0YU1hcmNhcyIsInJlbW92ZUNoaWxkIiwidXJsRmlsdHJvIiwiYXJtYXJVcmxGaWx0cm8iLCJ0aXBvIiwiY2xvc2VGaWx0cm9zTW9iaWxlIiwiZmlsdHJvc19fY29udGFuaWVyIiwic2hvd19maWx0cm9zIiwidXJsIiwic2hvd0ZpbHRyb3MiLCJ0b2dnbGUiLCJzaG93Iiwicm90YXIiLCJidG5fY2xvc2VfZmlsdHJvIiwiZmFDaGV2cm9uUmlnaHQiLCJmYUJyb29tIiwiZmFUaW1lcyIsImNlcnJhcl9maWx0cm9fbW9iaWxlIiwidGl0dWxvX2ZpbHRyb3MiLCJsaXN0YSIsIm1hcCIsImNhdCIsImlkQ2F0ZWdvcmlhIiwic2MiLCJpZFN1YkNhdGVnb3JpYSIsInNpbkJvcmRlckJvdHRvbSIsIm1hcFN0YXRlVG9Qcm9wcyIsInN1YnByb2R1Y3Rvc1JlZHVjZXIiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJjb25uZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0lBRWtCQSxnQixHQUFvQkMsd0U7SUFDZEMsNEIsR0FBa0VDLG9GO0lBQTFCQyxzQixHQUEwQkQsOEU7SUFDeEVFLG9CLEdBQXdCQywyRTtJQUN4QkMsc0Is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QUFBLGlCQWhESixDQUZSLENBSkosRUEwRE0sQ0FBQ0QsV0FBRixHQUFlLElBQWYsR0FDRyxNQUFDLDhDQUFEO0FBQU8sY0FBVSxFQUFFRSxZQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxtREFBRDtBQUFZLGNBQVUsRUFBRUEsWUFBeEI7QUFBc0MsaUJBQWEsRUFBRW9CLGFBQXJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixDQTNEUixDQURKO0FBa0VILENBOVREOztHQUFNaEMsTTs7S0FBQUEsTTs7QUFnVU4sSUFBTWdHLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsUUFBNkU7QUFBQSxNQUEzRTdFLGFBQTJFLFNBQTNFQSxhQUEyRTtBQUFBLE1BQTdEOEUsbUJBQTZELFNBQTdEQSxtQkFBNkQ7QUFBQSxNQUF6QzNFLGlCQUF5QyxTQUF6Q0EsaUJBQXlDO0FBQUEsTUFBdkJFLG1CQUF1QixTQUF2QkEsbUJBQXVCO0FBQ2pHLFNBQU87QUFDSEwsaUJBQWEsRUFBYkEsYUFERztBQUVIOEUsdUJBQW1CLEVBQW5CQSxtQkFGRztBQUdIM0UscUJBQWlCLEVBQWpCQSxpQkFIRztBQUlIRSx1QkFBbUIsRUFBbkJBO0FBSkcsR0FBUDtBQU1ILENBUEQ7O0FBU0EsSUFBTTBFLGtCQUFrQixHQUFHO0FBQ3ZCM0csa0JBQWdCLEVBQWhCQSxnQkFEdUI7QUFFdkJFLDhCQUE0QixFQUE1QkEsNEJBRnVCO0FBR3ZCRSx3QkFBc0IsRUFBdEJBLHNCQUh1QjtBQUl2QkMsc0JBQW9CLEVBQXBCQSxvQkFKdUI7QUFLdkJFLHdCQUFzQixFQUF0QkE7QUFMdUIsQ0FBM0I7QUFRZXFHLDBIQUFPLENBQUNILGVBQUQsRUFBaUJFLGtCQUFqQixDQUFQLENBQTRDbEcsTUFBNUMsQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9kdWN0b3MvW1suLi5pbmRleF1dLjNmNmJjMWQzYjg0NjRiOGUxMWVkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgRmlsdHJvU3R5bGUgZnJvbSAnLi9GaWx0cm8ubW9kdWxlLmNzcyc7XHJcbmltcG9ydCBNb2RhbCBmcm9tICcuLi9Nb2RhbCc7XHJcbmltcG9ydCBNb2RhbE1hcmNhIGZyb20gJy4uL01vZGFsTWFyY2EnO1xyXG5pbXBvcnQgeyBmYVRpbWVzLGZhQnJvb20sZmFDaGV2cm9uUmlnaHQgfSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCI7XHJcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIjtcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0ICogYXMgc3VicHJvZHVjdG9zQWN0aW9ucyBmcm9tICcuLi8uLi8uLi9zdG9yZS9hY3Rpb25zL3N1YnByb2R1Y3Rvc0FjdGlvbnMnO1xyXG5pbXBvcnQgKiBhcyBtYXJjYXNBY3Rpb25zIGZyb20gJy4uLy4uLy4uL3N0b3JlL2FjdGlvbnMvbWFyY2FzQWN0aW9ucyc7XHJcbmltcG9ydCAqIGFzIGNhdGVnb3JpYXNBY3Rpb25zIGZyb20gJy4uLy4uLy4uL3N0b3JlL2FjdGlvbnMvY2F0ZWdvcmlhc0FjdGlvbic7XHJcbmltcG9ydCAqIGFzIHN1YmNhdGVnb3JpYXNBY3Rpb25zIGZyb20gJy4uLy4uLy4uL3N0b3JlL2FjdGlvbnMvc3ViY2F0ZWdvcmlhc0FjdGlvbic7XHJcbmltcG9ydCBMb2FkZXIgZnJvbSAnLi4vTG9hZGVyJztcclxuXHJcbmNvbnN0IHt0cmFlclRvZGFzOm1hcmNhc1RyYWVyVG9kYXN9ID0gbWFyY2FzQWN0aW9ucztcclxuY29uc3Qge2ZpbHRyYXJQcm9kdWN0b3M6c3VicHJvZHVjdG9zRmlsdHJhclByb2R1Y3Rvcyx0cmFlclRvZG9zOnN1YnByb2R1Y3Rvc1RyYWVyVG9kb3N9ID0gc3VicHJvZHVjdG9zQWN0aW9ucztcclxuY29uc3Qge3RyYWVyVG9kYXM6Y2F0ZWdvcmlhc1RyYWVyVG9kYXN9ID0gY2F0ZWdvcmlhc0FjdGlvbnM7XHJcbmNvbnN0IHt0cmFlclRvZGFzOnN1YmNhdGVnb3JpYVRyYWVyVG9kYXN9ID0gc3ViY2F0ZWdvcmlhc0FjdGlvbnM7XHJcblxyXG5jb25zdCBGaWx0cm8gPSAocHJvcHMpID0+IHtcclxuXHJcbiAgICAvL3N0YXRlIGZvciB0aGUgZmlsdGVyc1xyXG4gICAgY29uc3QgW2VzdGFkb0ZpbHRybywgc2V0RXN0YWRvRmlsdHJvXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICBmaWx0cmFuZG86ZmFsc2UsXHJcbiAgICAgICAgY2F0ZWdvcmlhOicnLFxyXG4gICAgICAgIHN1YmNhdGVnb3JpYTonJyxcclxuICAgICAgICBtYXJjYTonJyxcclxuICAgICAgICBidXNjYWRvcjonJ1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy9tYW5lam8gZGUgTW9kYWwgbWFyY2FzXHJcbiAgICBjb25zdCBbbW9kYWxJc09wZW4sIHNldE1vZGFsSXNPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IG9uQ2xvc2VNb2RhbCA9ICgpPT57XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2JvZHknKVswXS5zdHlsZS5vdmVyZmxvd1kgPSAnc2Nyb2xsJztcclxuICAgICAgICBzZXRNb2RhbElzT3BlbihmYWxzZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy9sb29wIGRlIGVmZWN0byBwYXJhIGVqZWN1dGFyIHNvbG8gdW5hIHZleiBjdWFuZG8gZWwgY29tcG9uZW50ZSBzZSBtb250ZSBlbiBlbCBjYXNvIGRlIHF1ZSBzZSBlc3RlIGZpbHRyYW5kbyBkaXJlY3RvIGRlc2RlIGxhIHVybFxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBnZXREYXRhKCk7XHJcbiAgICB9LFtdKTtcclxuICAgICAgICBcclxuICAgIGNvbnN0IGdldERhdGEgPSBhc3luYygpPT57XHJcbiAgICAgICAgaWYocHJvcHMubWFyY2FzUmVkdWNlci5tYXJjYXMubGVuZ3RoPT09MCAmJiBwcm9wcy5jYXRlZ29yaWFzUmVkdWNlci5jYXRlZ29yaWFzLmxlbmd0aD09PTAgJiYgcHJvcHMuc3ViY2F0ZWdvcmlhUmVkdWNlci5zdWJjYXRlZ29yaWFzLmxlbmd0aD09PTApe1xyXG4gICAgICAgICAgICBQcm9taXNlLmFsbChbcHJvcHMubWFyY2FzVHJhZXJUb2RhcygpLHByb3BzLmNhdGVnb3JpYXNUcmFlclRvZGFzKCkscHJvcHMuc3ViY2F0ZWdvcmlhVHJhZXJUb2RhcygpXSkudGhlbigoKT0+e1xyXG4gICAgICAgICAgICAgICAgaWYocHJvcHMubG9jYXRpb24gIT09ICcvcHJvZHVjdG9zJyl7XHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aXZhckZpbHRyb1BvclVybCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBpZihwcm9wcy5sb2NhdGlvbiAhPT0gJy9wcm9kdWN0b3MnKXtcclxuICAgICAgICAgICAgICAgIGFjdGl2YXJGaWx0cm9Qb3JVcmwoKTtcclxuICAgICAgICAgICAgfSBcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy9sb29wIGRlIGVmZWN0byBwYXJhIGhhY2VyIHJlbmRlciBjYWRhIHZleiBxdWUgc2UgYWdyZWdhIG8gZWxpbWluYSB1biBmaWx0cm9cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgc3dpdGNoSXRlbUFjdGl2ZSgpO1xyXG4gICAgfSwgW2VzdGFkb0ZpbHRyb10pO1xyXG5cclxuICAgIGNvbnN0IGFjdGl2YXJGaWx0cm9Qb3JVcmwgPSAoKT0+e1xyXG4gICAgICAgIHJldHVybiBhY3RpdmFyRmlsdHJvKHByb3BzLnF1ZXJ5LnR5cGUscHJvcHMucXVlcnkuaW5kZXhbMV0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGFjdGl2YXJGaWx0cm8gPSAodGlwb0ZpbHRybyxrZXkpPT57XHJcbiAgICAgICAgc3dpdGNoICh0aXBvRmlsdHJvKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ2NhdGVnb3JpYSc6XHJcbiAgICAgICAgICAgICAgICBzZXRFc3RhZG9GaWx0cm8oe1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLmVzdGFkb0ZpbHRybyxcclxuICAgICAgICAgICAgICAgICAgICBjYXRlZ29yaWE6a2V5LFxyXG4gICAgICAgICAgICAgICAgICAgIGJ1c2NhZG9yOicnLFxyXG4gICAgICAgICAgICAgICAgICAgIGZpbHRyYW5kbzp0cnVlXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdzdWJjYXRlZ29yaWEnOlxyXG4gICAgICAgICAgICAgICAgc2V0RXN0YWRvRmlsdHJvKHtcclxuICAgICAgICAgICAgICAgICAgICAuLi5lc3RhZG9GaWx0cm8sXHJcbiAgICAgICAgICAgICAgICAgICAgc3ViY2F0ZWdvcmlhOmtleSxcclxuICAgICAgICAgICAgICAgICAgICBidXNjYWRvcjonJyxcclxuICAgICAgICAgICAgICAgICAgICBmaWx0cmFuZG86dHJ1ZVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdtYXJjYSc6XHJcbiAgICAgICAgICAgICAgICBzZXRFc3RhZG9GaWx0cm8oe1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLmVzdGFkb0ZpbHRybyxcclxuICAgICAgICAgICAgICAgICAgICBtYXJjYTprZXksXHJcbiAgICAgICAgICAgICAgICAgICAgYnVzY2Fkb3I6JycsXHJcbiAgICAgICAgICAgICAgICAgICAgZmlsdHJhbmRvOnRydWVcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnYnVzY2Fkb3InOlxyXG4gICAgICAgICAgICAgICAgc2V0RXN0YWRvRmlsdHJvKHtcclxuICAgICAgICAgICAgICAgICAgICAuLi5lc3RhZG9GaWx0cm8sXHJcbiAgICAgICAgICAgICAgICAgICAgYnVzY2Fkb3I6a2V5LFxyXG4gICAgICAgICAgICAgICAgICAgIGZpbHRyYW5kbzp0cnVlXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHN3aXRjaEl0ZW1BY3RpdmUgPSAoKT0+e1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGVzdGFkb0ZpbHRybyk7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKEZpbHRyb1N0eWxlLml0ZW1fZmlsdHJvKS5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoRmlsdHJvU3R5bGUuaXRlbV9maWx0cm8pW2luZGV4XTtcclxuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKEZpbHRyb1N0eWxlLmFjdGl2ZSk7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoRmlsdHJvU3R5bGUuaWNvbl9jbG9zZV9maWx0cm8pW2luZGV4XS5jbGFzc0xpc3QuYWRkKCdkLW5vbmUnKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmKCFlc3RhZG9GaWx0cm8uZmlsdHJhbmRvKSByZXR1cm47XHJcbiAgICAgICAgLy9zaSBubyBoYXkgbmFkYSBlbiBidXNjYWRvciwgcHVlZG8gc2V0ZWFyIHVuIGFjdGl2ZSBlbiBhbGd1biBlbGVtZW50byBkZSBsYSBsaXN0YVxyXG4gICAgICAgIGlmKGVzdGFkb0ZpbHRyby5idXNjYWRvci50cmltKCk9PT0nJyl7XHJcbiAgICAgICAgICAgIC8vcmVjb3JybyBlbCBzdGF0ZSBwYXJhIG9idGVuZXIgbGFzIGNsYXZlcyB5IGFncmVnYXIgYWN0aXZlIGVsIGVsZW1lbnRvIGNvcnJlc3BvbmRpZW50ZVxyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBlc3RhZG9GaWx0cm8pIHtcclxuICAgICAgICAgICAgICAgIGlmKGVzdGFkb0ZpbHRyb1trZXldICYmIGVzdGFkb0ZpbHRyb1trZXldIT09JycgJiYgZXN0YWRvRmlsdHJvW2tleV0hPT10cnVlKXtcclxuICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKGVzdGFkb0ZpbHRyb1trZXldKTtcclxuICAgICAgICAgICAgICAgICAgICBpZihkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShgJHtrZXl9LSR7ZXN0YWRvRmlsdHJvW2tleV19YClbMF0pey8vcHJlZ3VudG8gc2kgZXhpc3RlIGVsIGVsZW1lbnRvIGNvbiBlbCBuYW1lIGRlbCBmaWx0cm8gcGFyYSBhZ3JlZ2FybGUgZWwgYWN0aXZlLCBzaSBubyBleGlzdGUgbG8gY3Jlby4gKHNpIG5vIGV4aXN0ZSBlcyBwb3JxdWUgdmllbmUgZGVzZGUgbW9kYWwgZGUgbWFyY2FzKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnISEhJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKGAke2tleX0tJHtlc3RhZG9GaWx0cm9ba2V5XX1gKVswXS5jbGFzc0xpc3QuYWRkKEZpbHRyb1N0eWxlLmFjdGl2ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBjbG9zZS0ke2tleX0tJHtlc3RhZG9GaWx0cm9ba2V5XX1gKS5jbGFzc0xpc3QucmVtb3ZlKCdkLW5vbmUnKTtcclxuICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoZXN0YWRvRmlsdHJvLm1hcmNhIT09Jycpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9jcmVvIGxvcyBlbGVtZW50b3MgZGVsIGl0ZW1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBuZXdJdGVtTWFyY2EgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRpdkl0ZW1NYXJjYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHNwYW5JdGVtTWFyY2EgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgaWNvbkNsb3NlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3ZnJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG1hcmNhTmFtZSA9IHByb3BzLm1hcmNhc1JlZHVjZXIubWFyY2FzLmZpbHRlcihyZXM9PnJlcy5pZE1hcmNhID09IGVzdGFkb0ZpbHRyby5tYXJjYSlbMF0ubWFyY2E7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9hc2lnbm8gbGFzIGNsYXNlcywgYXRyaWJ1dG9zIHkgZXZlbnRvcyBuZWNlc2FyaW9zLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGl2SXRlbU1hcmNhLmNsYXNzTmFtZSA9YCR7RmlsdHJvU3R5bGUuaXRlbV9maWx0cm99ICR7RmlsdHJvU3R5bGUuYWN0aXZlfWA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXZJdGVtTWFyY2Euc2V0QXR0cmlidXRlKCduYW1lJyxgbWFyY2EtJHtlc3RhZG9GaWx0cm8ubWFyY2F9YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXZJdGVtTWFyY2EuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT5hY3RpdmFyRmlsdHJvKCdtYXJjYScsZXN0YWRvRmlsdHJvLm1hcmNhKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcGFuSXRlbU1hcmNhLmNsYXNzTmFtZSA9ICd0ZXh0LW11dGVkJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNwYW5JdGVtTWFyY2EuaW5uZXJIVE1MID0gbWFyY2FOYW1lO1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uQ2xvc2UuaW5uZXJIVE1MID0gYFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgYXJpYS1oaWRkZW49XCJ0cnVlXCIgZm9jdXNhYmxlPVwiZmFsc2VcIiBkYXRhLXByZWZpeD1cImZhc1wiIGRhdGEtaWNvbj1cInRpbWVzXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Ym94PVwiMCAwIDM1MiA1MTJcIiBjbGFzcz1cInN2Zy1pbmxpbmUtLWZhIGZhLXRpbWVzIGZhLXctMTEgRmlsdHJvX2ljb25fY2xvc2VfZmlsdHJvX18xeGx2NVwiIGlkPVwiY2xvc2UtbWFyY2EtJHtlc3RhZG9GaWx0cm8ubWFyY2F9XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTI0Mi43MiAyNTZsMTAwLjA3LTEwMC4wN2MxMi4yOC0xMi4yOCAxMi4yOC0zMi4xOSAwLTQ0LjQ4bC0yMi4yNC0yMi4yNGMtMTIuMjgtMTIuMjgtMzIuMTktMTIuMjgtNDQuNDggMEwxNzYgMTg5LjI4IDc1LjkzIDg5LjIxYy0xMi4yOC0xMi4yOC0zMi4xOS0xMi4yOC00NC40OCAwTDkuMjEgMTExLjQ1Yy0xMi4yOCAxMi4yOC0xMi4yOCAzMi4xOSAwIDQ0LjQ4TDEwOS4yOCAyNTYgOS4yMSAzNTYuMDdjLTEyLjI4IDEyLjI4LTEyLjI4IDMyLjE5IDAgNDQuNDhsMjIuMjQgMjIuMjRjMTIuMjggMTIuMjggMzIuMiAxMi4yOCA0NC40OCAwTDE3NiAzMjIuNzJsMTAwLjA3IDEwMC4wN2MxMi4yOCAxMi4yOCAzMi4yIDEyLjI4IDQ0LjQ4IDBsMjIuMjQtMjIuMjRjMTIuMjgtMTIuMjggMTIuMjgtMzIuMTkgMC00NC40OEwyNDIuNzIgMjU2elwiPjwvcGF0aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uQ2xvc2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT5saW1waWFyRmlsdHJvKCdtYXJjYScpKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL3ZveSB1YmljYW5kbyBsb3MgZWxlbWVudG9zIGRlbnRybyBkZSBjYWRhIHBhZHJlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXZJdGVtTWFyY2EuYXBwZW5kQ2hpbGQoc3Bhbkl0ZW1NYXJjYSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdJdGVtTWFyY2EuYXBwZW5kQ2hpbGQoZGl2SXRlbU1hcmNhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld0l0ZW1NYXJjYS5hcHBlbmRDaGlsZChpY29uQ2xvc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL09idGVuZ28gZWwgcHJpbWVyIGl0ZW0gZGUgbGEgbGlzdGEgeSBsbyBlbGltaW5vLCBwYXJhIHRlbmVyIHNpZW1wcmUgbGEgbWlzbWEgY2FudGlkYWQgZGUgbWFyY2FzIGVuIGxhIGxpc3RhLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI2xpc3RhTWFyY2FgKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGZpcnN0SXRlbU1hcmNhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI2xpc3RhTWFyY2FgKS5jaGlsZHJlblswXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbGlzdGFNYXJjYXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjbGlzdGFNYXJjYWApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpc3RhTWFyY2FzLnJlbW92ZUNoaWxkKGZpcnN0SXRlbU1hcmNhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2Fob3JhIGFncmVnbyBlbCBpdGVtIGNyZWFkbyBhIGxhIGxpc3RhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGlzdGFNYXJjYXMuYXBwZW5kQ2hpbGQobmV3SXRlbU1hcmNhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy9sYSBwcmltZXJhIHZleiBxdWUgc2UgY2FyZ2EgZWwgY29tcG9uZW50ZSwgZmlsdHJhbmRvIGVzIGZhbHNlLCBwb3IgZXNvIHByZWd1bnRvIHBhcmEgcXVlIG5vIHNlIGVqZWN1dGEgbGEgZnVuY2lvbiBkZSBpciBhIGZpbHRyYXIgYXBlbmFzIHNlIG1vbnRlIGVsIGNvbXBvbmVudGUuIFNpbm8gcXVlIHNlIGVqZWN1dGUgY3VhbmRvIGRlIHZlcmRhZCBzZSBxdWllcmEgZmlsdHJhci5cclxuICAgICAgICBpZihlc3RhZG9GaWx0cm8uZmlsdHJhbmRvKXtcclxuICAgICAgICAgICAgbGV0IHVybEZpbHRybyA9IGFybWFyVXJsRmlsdHJvKCk7Ly9hcm1vIGxhIHVybCBxdWUgbWFuZG8gYSBsYSBhcGkgcGFyYSB0cmFlciBsb3MgcmVzdWx0YWRvcyBkZSBsbyBmaWx0cmFkby5cclxuICAgICAgICAgICAgcHJvcHMuc3VicHJvZHVjdG9zRmlsdHJhclByb2R1Y3Rvcyh1cmxGaWx0cm8pO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgbGltcGlhckZpbHRybyA9IHRpcG89PntcclxuICAgICAgICBzd2l0Y2ggKHRpcG8pIHtcclxuICAgICAgICAgICAgY2FzZSAnY2F0ZWdvcmlhJzpcclxuICAgICAgICAgICAgICAgIGlmKGVzdGFkb0ZpbHRyby5zdWJjYXRlZ29yaWE9PT0nJyAmJiBlc3RhZG9GaWx0cm8ubWFyY2E9PT0nJyl7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0RXN0YWRvRmlsdHJvKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLi4uZXN0YWRvRmlsdHJvLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXRlZ29yaWE6JycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRyYW5kbzpmYWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHByb3BzLnN1YnByb2R1Y3Rvc1RyYWVyVG9kb3MoKTtcclxuICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIHNldEVzdGFkb0ZpbHRybyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLmVzdGFkb0ZpbHRybyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcmlhOicnXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnc3ViY2F0ZWdvcmlhJzpcclxuICAgICAgICAgICAgICAgIGlmKGVzdGFkb0ZpbHRyby5jYXRlZ29yaWE9PT0nJyAmJiBlc3RhZG9GaWx0cm8ubWFyY2E9PT0nJyl7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0RXN0YWRvRmlsdHJvKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLi4uZXN0YWRvRmlsdHJvLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdWJjYXRlZ29yaWE6JycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRyYW5kbzpmYWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHByb3BzLnN1YnByb2R1Y3Rvc1RyYWVyVG9kb3MoKTtcclxuICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIHNldEVzdGFkb0ZpbHRybyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLmVzdGFkb0ZpbHRybyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3ViY2F0ZWdvcmlhOicnXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnbWFyY2EnOlxyXG4gICAgICAgICAgICAgICAgaWYoZXN0YWRvRmlsdHJvLmNhdGVnb3JpYT09PScnICYmIGVzdGFkb0ZpbHRyby5zdWJjYXRlZ29yaWE9PScnKXtcclxuICAgICAgICAgICAgICAgICAgICBzZXRFc3RhZG9GaWx0cm8oe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAuLi5lc3RhZG9GaWx0cm8sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmNhOicnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWx0cmFuZG86ZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICBwcm9wcy5zdWJwcm9kdWN0b3NUcmFlclRvZG9zKCk7IFxyXG4gICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0RXN0YWRvRmlsdHJvKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLi4uZXN0YWRvRmlsdHJvLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJjYTonJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBwcm9wcy5zdWJwcm9kdWN0b3NUcmFlclRvZG9zKCk7XHJcbiAgICAgICAgICAgICAgICBzZXRFc3RhZG9GaWx0cm8oe1xyXG4gICAgICAgICAgICAgICAgICAgIGZpbHRyYW5kbzpmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBjYXRlZ29yaWE6JycsXHJcbiAgICAgICAgICAgICAgICAgICAgc3ViY2F0ZWdvcmlhOicnLFxyXG4gICAgICAgICAgICAgICAgICAgIG1hcmNhOicnLFxyXG4gICAgICAgICAgICAgICAgICAgIGJ1c2NhZG9yOicnXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNsb3NlRmlsdHJvc01vYmlsZSA9ICgpPT57XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShGaWx0cm9TdHlsZS5maWx0cm9zX19jb250YW5pZXIpWzBdLmNsYXNzTGlzdC5yZW1vdmUoRmlsdHJvU3R5bGUuc2hvd19maWx0cm9zKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBhcm1hclVybEZpbHRybyA9ICgpPT57XHJcbiAgICAgICAgbGV0IHVybCA9ICdmaWx0cmFyJztcclxuICAgICAgICAvL3NpIGJ1c2NhZG9yIHZpZW5lIHRydWUsIGVzIHBvcnF1ZSB2aWVuZSBkZXNkZSBlbCBidXNjYWRvciBkZWwgbWVudSBvIG1vZGFsIGRlIGJ1c2NhZG9yKG1vYmlsZSkuXHJcbiAgICAgICAgaWYoZXN0YWRvRmlsdHJvLmJ1c2NhZG9yIT09JycpIHJldHVybiB1cmwgKz0gYD9idXNjYXI9JHtlc3RhZG9GaWx0cm8uYnVzY2Fkb3J9YDtcclxuXHJcbiAgICAgICAgbGV0IGNhdGVnb3JpYSA9IGVzdGFkb0ZpbHRyby5jYXRlZ29yaWEsXHJcbiAgICAgICAgICAgIHN1YmNhdGVnb3JpYSA9IGVzdGFkb0ZpbHRyby5zdWJjYXRlZ29yaWEsXHJcbiAgICAgICAgICAgIG1hcmNhID0gZXN0YWRvRmlsdHJvLm1hcmNhO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKGNhdGVnb3JpYSAmJiBjYXRlZ29yaWEgIT09ICcnKXtcclxuICAgICAgICAgICAgdXJsICs9IGA/Y2F0ZWdvcmlhPSR7ZXN0YWRvRmlsdHJvLmNhdGVnb3JpYX1gO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZihlc3RhZG9GaWx0cm8uc3ViY2F0ZWdvcmlhICYmIGVzdGFkb0ZpbHRyby5zdWJjYXRlZ29yaWEgIT09ICcnKXtcclxuICAgICAgICAgICAgaWYoY2F0ZWdvcmlhIT09ICcnKXtcclxuICAgICAgICAgICAgICAgIHVybCArPSBgJnN1YmNhdGVnb3JpYT0ke2VzdGFkb0ZpbHRyby5zdWJjYXRlZ29yaWF9YDsgXHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgdXJsICs9IGA/c3ViY2F0ZWdvcmlhPSR7ZXN0YWRvRmlsdHJvLnN1YmNhdGVnb3JpYX1gO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKG1hcmNhICYmIG1hcmNhICE9PSAnJyl7XHJcbiAgICAgICAgICAgIGlmKGNhdGVnb3JpYSAhPT0gJycgJiYgc3ViY2F0ZWdvcmlhICE9PSAnJyl7XHJcbiAgICAgICAgICAgICAgICB1cmwgKz0gYD9tYXJjYT0ke2VzdGFkb0ZpbHRyby5tYXJjYX1gO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIHVybCArPSBgJm1hcmNhPSR7ZXN0YWRvRmlsdHJvLm1hcmNhfWA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHVybDtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzaG93RmlsdHJvcyA9ICgpPT57XHJcbiAgICAgICAgbGV0IGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKEZpbHRyb1N0eWxlLmZpbHRyb3NfX2NvbnRhbmllcilbMF07XHJcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKEZpbHRyb1N0eWxlLnNob3cpO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpY29uRmlsdHJvQ29udGFpbmVyJykuY2xhc3NMaXN0LnRvZ2dsZShGaWx0cm9TdHlsZS5yb3Rhcik7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17RmlsdHJvU3R5bGUuZmlsdHJvc19fY29udGFuaWVyfT5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e0ZpbHRyb1N0eWxlLmJ0bl9jbG9zZV9maWx0cm99IG9uQ2xpY2s9e3Nob3dGaWx0cm9zfT5cclxuICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWQ9XCJpY29uRmlsdHJvQ29udGFpbmVyXCIgaWNvbj17ZmFDaGV2cm9uUmlnaHR9Lz5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICB7KHByb3BzLmNhdGVnb3JpYXNSZWR1Y2VyLmNhdGVnb3JpYXMubGVuZ3RoPT0wIHx8IHByb3BzLnN1YmNhdGVnb3JpYVJlZHVjZXIuc3ViY2F0ZWdvcmlhcy5sZW5ndGg9PTAgfHwgcHJvcHMubWFyY2FzUmVkdWNlci5tYXJjYXMubGVuZ3RoPT0wKT88TG9hZGVyLz46XHJcbiAgICAgICAgICAgICAgICAgICAgPD4gIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7KGVzdGFkb0ZpbHRyby5maWx0cmFuZG8pPzxidXR0b24gY2xhc3NOYW1lPVwiYm90b24gYmcteWVsbG93IG1iLTNcIiBvbkNsaWNrPXtsaW1waWFyRmlsdHJvfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFCcm9vbX0vPiBMaW1waWFyIEZpbHRyb3NcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+Om51bGx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFUaW1lc30gY2xhc3NOYW1lPXtGaWx0cm9TdHlsZS5jZXJyYXJfZmlsdHJvX21vYmlsZX0gb25DbGljaz17Y2xvc2VGaWx0cm9zTW9iaWxlfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9e0ZpbHRyb1N0eWxlLnRpdHVsb19maWx0cm9zfT5NYXNjb3RhPC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT17RmlsdHJvU3R5bGUubGlzdGF9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzLmNhdGVnb3JpYXNSZWR1Y2VyLmNhdGVnb3JpYXMubWFwKGNhdD0+KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtjYXQuaWRDYXRlZ29yaWF9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e0ZpbHRyb1N0eWxlLml0ZW1fZmlsdHJvfSBuYW1lPXtgY2F0ZWdvcmlhLSR7Y2F0LmlkQ2F0ZWdvcmlhfWB9IG9uQ2xpY2s9eygpPT5hY3RpdmFyRmlsdHJvKCdjYXRlZ29yaWEnLGAke2NhdC5pZENhdGVnb3JpYX1gKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1tdXRlZFwiPntjYXQuY2F0ZWdvcmlhfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVRpbWVzfSBjbGFzc05hbWU9e0ZpbHRyb1N0eWxlLmljb25fY2xvc2VfZmlsdHJvICsgJyAnICsgYGQtbm9uZWB9IG9uQ2xpY2s9eygpPT5saW1waWFyRmlsdHJvKCdjYXRlZ29yaWEnKX0gaWQ9e2BjbG9zZS1jYXRlZ29yaWEtJHtjYXQuaWRDYXRlZ29yaWF9YH0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT17RmlsdHJvU3R5bGUudGl0dWxvX2ZpbHRyb3N9PkFsaW1lbnRvczwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9e0ZpbHRyb1N0eWxlLmxpc3RhfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wcy5zdWJjYXRlZ29yaWFSZWR1Y2VyLnN1YmNhdGVnb3JpYXMubWFwKHNjPT4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e3NjLmlkU3ViQ2F0ZWdvcmlhfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtGaWx0cm9TdHlsZS5pdGVtX2ZpbHRyb30gbmFtZT17YHN1YmNhdGVnb3JpYS0ke3NjLmlkU3ViQ2F0ZWdvcmlhfWB9IG9uQ2xpY2s9eygpPT5hY3RpdmFyRmlsdHJvKCdzdWJjYXRlZ29yaWEnLGAke3NjLmlkU3ViQ2F0ZWdvcmlhfWApfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkXCI+e3NjLnN1YmNhdGVnb3JpYX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFUaW1lc30gY2xhc3NOYW1lPXtGaWx0cm9TdHlsZS5pY29uX2Nsb3NlX2ZpbHRybyArICcgJyArIGBkLW5vbmVgfSBvbkNsaWNrPXsoKT0+bGltcGlhckZpbHRybygnc3ViY2F0ZWdvcmlhJyl9IGlkPXtgY2xvc2UtJHtgc3ViY2F0ZWdvcmlhLSR7c2MuaWRTdWJDYXRlZ29yaWF9YH1gfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9e0ZpbHRyb1N0eWxlLnRpdHVsb19maWx0cm9zfT5NYXJjYTwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBpZD1cImxpc3RhTWFyY2FcIiBjbGFzc05hbWU9e0ZpbHRyb1N0eWxlLnNpbkJvcmRlckJvdHRvbSsgJyAnICsgRmlsdHJvU3R5bGUubGlzdGF9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzLm1hcmNhc1JlZHVjZXIubWFyY2FzLm1hcCgobWFyY2Esa2V5KT0+KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoa2V5PjMpP2ZhbHNlOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXttYXJjYS5pZE1hcmNhfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtGaWx0cm9TdHlsZS5pdGVtX2ZpbHRyb30gbmFtZT17YG1hcmNhLSR7bWFyY2EuaWRNYXJjYX1gfSBvbkNsaWNrPXsoKT0+YWN0aXZhckZpbHRybygnbWFyY2EnLGAke21hcmNhLmlkTWFyY2F9YCl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtbXV0ZWRcIj57bWFyY2EubWFyY2F9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhVGltZXN9IGNsYXNzTmFtZT17RmlsdHJvU3R5bGUuaWNvbl9jbG9zZV9maWx0cm8gKyAnICcgKyBgZC1ub25lYH0gb25DbGljaz17KCk9PmxpbXBpYXJGaWx0cm8oJ21hcmNhJyl9IGlkPXtgY2xvc2UtbWFyY2EtJHttYXJjYS5pZE1hcmNhfWB9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpPT5zZXRNb2RhbElzT3Blbih0cnVlKX0gY2xhc3NOYW1lPVwiYm90b24gYmctZ3Jpc1wiPlZlciB0b2RhczwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgeyghbW9kYWxJc09wZW4pP251bGw6XHJcbiAgICAgICAgICAgICAgICA8TW9kYWwgY2xvc2VNb2RhbD17b25DbG9zZU1vZGFsfT5cclxuICAgICAgICAgICAgICAgICAgICA8TW9kYWxNYXJjYSBjbG9zZU1vZGFsPXtvbkNsb3NlTW9kYWx9IGFjdGl2YXJGaWx0cm89e2FjdGl2YXJGaWx0cm99Lz5cclxuICAgICAgICAgICAgICAgIDwvTW9kYWw+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9ICh7bWFyY2FzUmVkdWNlcixzdWJwcm9kdWN0b3NSZWR1Y2VyLGNhdGVnb3JpYXNSZWR1Y2VyLHN1YmNhdGVnb3JpYVJlZHVjZXJ9KT0+e1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBtYXJjYXNSZWR1Y2VyLFxyXG4gICAgICAgIHN1YnByb2R1Y3Rvc1JlZHVjZXIsXHJcbiAgICAgICAgY2F0ZWdvcmlhc1JlZHVjZXIsXHJcbiAgICAgICAgc3ViY2F0ZWdvcmlhUmVkdWNlclxyXG4gICAgfTtcclxufVxyXG5cclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0ge1xyXG4gICAgbWFyY2FzVHJhZXJUb2RhcyxcclxuICAgIHN1YnByb2R1Y3Rvc0ZpbHRyYXJQcm9kdWN0b3MsXHJcbiAgICBzdWJwcm9kdWN0b3NUcmFlclRvZG9zLFxyXG4gICAgY2F0ZWdvcmlhc1RyYWVyVG9kYXMsXHJcbiAgICBzdWJjYXRlZ29yaWFUcmFlclRvZGFzXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLG1hcERpc3BhdGNoVG9Qcm9wcykoRmlsdHJvKTsiXSwic291cmNlUm9vdCI6IiJ9