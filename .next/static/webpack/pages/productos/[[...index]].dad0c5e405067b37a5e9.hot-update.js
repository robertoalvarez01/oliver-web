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
              setTimeout(function () {
                if (props.location !== '/productos') {
                  activarFiltroPorUrl();
                }
              }, 1000);

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
      lineNumber: 275,
      columnNumber: 9
    }
  }, __jsx("button", {
    className: _Filtro_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.btn_close_filtro,
    onClick: showFiltros,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 276,
      columnNumber: 13
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeIcon"], {
    id: "iconFiltroContainer",
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faChevronRight"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 277,
      columnNumber: 17
    }
  })), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 279,
      columnNumber: 13
    }
  }, props.categoriasReducer.categorias.length == 0 || props.subcategoriaReducer.subcategorias.length == 0 || props.marcasReducer.marcas.length == 0 ? __jsx(_Loader__WEBPACK_IMPORTED_MODULE_14__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 280,
      columnNumber: 158
    }
  }) : __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, estadoFiltro.filtrando ? __jsx("button", {
    className: "boton bg-yellow mb-3",
    onClick: limpiarFiltro,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 282,
      columnNumber: 51
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faBroom"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 283,
      columnNumber: 29
    }
  }), " Limpiar Filtros") : null, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faTimes"],
    className: _Filtro_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.cerrar_filtro_mobile,
    onClick: closeFiltrosMobile,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 285,
      columnNumber: 25
    }
  }), __jsx("h4", {
    className: _Filtro_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.titulo_filtros,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 286,
      columnNumber: 25
    }
  }, "Mascota"), __jsx("ul", {
    className: _Filtro_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.lista,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 287,
      columnNumber: 25
    }
  }, props.categoriasReducer.categorias.map(function (cat) {
    return __jsx("li", {
      key: cat.idCategoria,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 290,
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
        lineNumber: 291,
        columnNumber: 41
      }
    }, __jsx("span", {
      className: "text-muted",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 292,
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
        lineNumber: 294,
        columnNumber: 41
      }
    }));
  })), __jsx("h4", {
    className: _Filtro_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.titulo_filtros,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 301,
      columnNumber: 25
    }
  }, "Alimentos"), __jsx("ul", {
    className: _Filtro_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.lista,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 302,
      columnNumber: 25
    }
  }, props.subcategoriaReducer.subcategorias.map(function (sc) {
    return __jsx("li", {
      key: sc.idSubCategoria,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 305,
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
        lineNumber: 309,
        columnNumber: 41
      }
    }));
  })), __jsx("h4", {
    className: _Filtro_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.titulo_filtros,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 315,
      columnNumber: 25
    }
  }, "Marca"), __jsx("ul", {
    id: "listaMarca",
    className: _Filtro_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.sinBorderBottom + ' ' + _Filtro_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.lista,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 316,
      columnNumber: 25
    }
  }, props.marcasReducer.marcas.map(function (marca, key) {
    return key > 3 ? false : __jsx("li", {
      key: marca.idMarca,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 320,
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
        lineNumber: 324,
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
      lineNumber: 329,
      columnNumber: 25
    }
  }, "Ver todas"))), !modalIsOpen ? null : __jsx(_Modal__WEBPACK_IMPORTED_MODULE_5__["default"], {
    closeModal: onCloseModal,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 334,
      columnNumber: 17
    }
  }, __jsx(_ModalMarca__WEBPACK_IMPORTED_MODULE_6__["default"], {
    closeModal: onCloseModal,
    activarFiltro: activarFiltro,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 335,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRmlsdHJvL2luZGV4LmpzIl0sIm5hbWVzIjpbIm1hcmNhc1RyYWVyVG9kYXMiLCJtYXJjYXNBY3Rpb25zIiwic3VicHJvZHVjdG9zRmlsdHJhclByb2R1Y3RvcyIsInN1YnByb2R1Y3Rvc0FjdGlvbnMiLCJzdWJwcm9kdWN0b3NUcmFlclRvZG9zIiwiY2F0ZWdvcmlhc1RyYWVyVG9kYXMiLCJjYXRlZ29yaWFzQWN0aW9ucyIsInN1YmNhdGVnb3JpYVRyYWVyVG9kYXMiLCJzdWJjYXRlZ29yaWFzQWN0aW9ucyIsIkZpbHRybyIsInByb3BzIiwidXNlU3RhdGUiLCJmaWx0cmFuZG8iLCJjYXRlZ29yaWEiLCJzdWJjYXRlZ29yaWEiLCJtYXJjYSIsImJ1c2NhZG9yIiwiZXN0YWRvRmlsdHJvIiwic2V0RXN0YWRvRmlsdHJvIiwibW9kYWxJc09wZW4iLCJzZXRNb2RhbElzT3BlbiIsIm9uQ2xvc2VNb2RhbCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJzdHlsZSIsIm92ZXJmbG93WSIsInVzZUVmZmVjdCIsImdldERhdGEiLCJtYXJjYXNSZWR1Y2VyIiwibWFyY2FzIiwibGVuZ3RoIiwiY2F0ZWdvcmlhc1JlZHVjZXIiLCJjYXRlZ29yaWFzIiwic3ViY2F0ZWdvcmlhUmVkdWNlciIsInN1YmNhdGVnb3JpYXMiLCJzZXRUaW1lb3V0IiwibG9jYXRpb24iLCJhY3RpdmFyRmlsdHJvUG9yVXJsIiwic3dpdGNoSXRlbUFjdGl2ZSIsImFjdGl2YXJGaWx0cm8iLCJxdWVyeSIsInR5cGUiLCJpbmRleCIsInRpcG9GaWx0cm8iLCJrZXkiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiRmlsdHJvU3R5bGUiLCJpdGVtX2ZpbHRybyIsImVsZW1lbnQiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJhY3RpdmUiLCJpY29uX2Nsb3NlX2ZpbHRybyIsImFkZCIsInRyaW0iLCJnZXRFbGVtZW50c0J5TmFtZSIsImNvbnNvbGUiLCJsb2ciLCJnZXRFbGVtZW50QnlJZCIsIm5ld0l0ZW1NYXJjYSIsImNyZWF0ZUVsZW1lbnQiLCJkaXZJdGVtTWFyY2EiLCJzcGFuSXRlbU1hcmNhIiwiaWNvbkNsb3NlIiwibWFyY2FOYW1lIiwiZmlsdGVyIiwicmVzIiwiaWRNYXJjYSIsImNsYXNzTmFtZSIsInNldEF0dHJpYnV0ZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJpbm5lckhUTUwiLCJsaW1waWFyRmlsdHJvIiwiYXBwZW5kQ2hpbGQiLCJxdWVyeVNlbGVjdG9yIiwiZmlyc3RJdGVtTWFyY2EiLCJjaGlsZHJlbiIsImxpc3RhTWFyY2FzIiwicmVtb3ZlQ2hpbGQiLCJ1cmxGaWx0cm8iLCJhcm1hclVybEZpbHRybyIsInRpcG8iLCJjbG9zZUZpbHRyb3NNb2JpbGUiLCJmaWx0cm9zX19jb250YW5pZXIiLCJzaG93X2ZpbHRyb3MiLCJ1cmwiLCJzaG93RmlsdHJvcyIsInRvZ2dsZSIsInNob3ciLCJyb3RhciIsImJ0bl9jbG9zZV9maWx0cm8iLCJmYUNoZXZyb25SaWdodCIsImZhQnJvb20iLCJmYVRpbWVzIiwiY2VycmFyX2ZpbHRyb19tb2JpbGUiLCJ0aXR1bG9fZmlsdHJvcyIsImxpc3RhIiwibWFwIiwiY2F0IiwiaWRDYXRlZ29yaWEiLCJzYyIsImlkU3ViQ2F0ZWdvcmlhIiwic2luQm9yZGVyQm90dG9tIiwibWFwU3RhdGVUb1Byb3BzIiwic3VicHJvZHVjdG9zUmVkdWNlciIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImNvbm5lY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7SUFFa0JBLGdCLEdBQW9CQyx3RTtJQUNkQyw0QixHQUFrRUMsb0Y7SUFBMUJDLHNCLEdBQTBCRCw4RTtJQUN4RUUsb0IsR0FBd0JDLDJFO0lBQ3hCQyxzQixHQUEwQkMsOEU7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QTBETSxDQUFDRCxXQUFGLEdBQWUsSUFBZixHQUNHLE1BQUMsOENBQUQ7QUFBTyxjQUFVLEVBQUVFLFlBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLG1EQUFEO0FBQVksY0FBVSxFQUFFQSxZQUF4QjtBQUFzQyxpQkFBYSxFQUFFa0IsYUFBckQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLENBM0RSLENBREo7QUFrRUgsQ0FqVUQ7O0dBQU05QixNOztLQUFBQSxNOztBQW1VTixJQUFNOEYsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixRQUE2RTtBQUFBLE1BQTNFM0UsYUFBMkUsU0FBM0VBLGFBQTJFO0FBQUEsTUFBN0Q0RSxtQkFBNkQsU0FBN0RBLG1CQUE2RDtBQUFBLE1BQXpDekUsaUJBQXlDLFNBQXpDQSxpQkFBeUM7QUFBQSxNQUF2QkUsbUJBQXVCLFNBQXZCQSxtQkFBdUI7QUFDakcsU0FBTztBQUNITCxpQkFBYSxFQUFiQSxhQURHO0FBRUg0RSx1QkFBbUIsRUFBbkJBLG1CQUZHO0FBR0h6RSxxQkFBaUIsRUFBakJBLGlCQUhHO0FBSUhFLHVCQUFtQixFQUFuQkE7QUFKRyxHQUFQO0FBTUgsQ0FQRDs7QUFTQSxJQUFNd0Usa0JBQWtCLEdBQUc7QUFDdkJ6RyxrQkFBZ0IsRUFBaEJBLGdCQUR1QjtBQUV2QkUsOEJBQTRCLEVBQTVCQSw0QkFGdUI7QUFHdkJFLHdCQUFzQixFQUF0QkEsc0JBSHVCO0FBSXZCQyxzQkFBb0IsRUFBcEJBLG9CQUp1QjtBQUt2QkUsd0JBQXNCLEVBQXRCQTtBQUx1QixDQUEzQjtBQVFlbUcsMEhBQU8sQ0FBQ0gsZUFBRCxFQUFpQkUsa0JBQWpCLENBQVAsQ0FBNENoRyxNQUE1QyxDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2R1Y3Rvcy9bWy4uLmluZGV4XV0uZGFkMGM1ZTQwNTA2N2IzN2E1ZTkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSx1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBGaWx0cm9TdHlsZSBmcm9tICcuL0ZpbHRyby5tb2R1bGUuY3NzJztcclxuaW1wb3J0IE1vZGFsIGZyb20gJy4uL01vZGFsJztcclxuaW1wb3J0IE1vZGFsTWFyY2EgZnJvbSAnLi4vTW9kYWxNYXJjYSc7XHJcbmltcG9ydCB7IGZhVGltZXMsZmFCcm9vbSxmYUNoZXZyb25SaWdodCB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnNcIjtcclxuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgKiBhcyBzdWJwcm9kdWN0b3NBY3Rpb25zIGZyb20gJy4uLy4uLy4uL3N0b3JlL2FjdGlvbnMvc3VicHJvZHVjdG9zQWN0aW9ucyc7XHJcbmltcG9ydCAqIGFzIG1hcmNhc0FjdGlvbnMgZnJvbSAnLi4vLi4vLi4vc3RvcmUvYWN0aW9ucy9tYXJjYXNBY3Rpb25zJztcclxuaW1wb3J0ICogYXMgY2F0ZWdvcmlhc0FjdGlvbnMgZnJvbSAnLi4vLi4vLi4vc3RvcmUvYWN0aW9ucy9jYXRlZ29yaWFzQWN0aW9uJztcclxuaW1wb3J0ICogYXMgc3ViY2F0ZWdvcmlhc0FjdGlvbnMgZnJvbSAnLi4vLi4vLi4vc3RvcmUvYWN0aW9ucy9zdWJjYXRlZ29yaWFzQWN0aW9uJztcclxuaW1wb3J0IExvYWRlciBmcm9tICcuLi9Mb2FkZXInO1xyXG5cclxuY29uc3Qge3RyYWVyVG9kYXM6bWFyY2FzVHJhZXJUb2Rhc30gPSBtYXJjYXNBY3Rpb25zO1xyXG5jb25zdCB7ZmlsdHJhclByb2R1Y3RvczpzdWJwcm9kdWN0b3NGaWx0cmFyUHJvZHVjdG9zLHRyYWVyVG9kb3M6c3VicHJvZHVjdG9zVHJhZXJUb2Rvc30gPSBzdWJwcm9kdWN0b3NBY3Rpb25zO1xyXG5jb25zdCB7dHJhZXJUb2RhczpjYXRlZ29yaWFzVHJhZXJUb2Rhc30gPSBjYXRlZ29yaWFzQWN0aW9ucztcclxuY29uc3Qge3RyYWVyVG9kYXM6c3ViY2F0ZWdvcmlhVHJhZXJUb2Rhc30gPSBzdWJjYXRlZ29yaWFzQWN0aW9ucztcclxuXHJcbmNvbnN0IEZpbHRybyA9IChwcm9wcykgPT4ge1xyXG5cclxuICAgIC8vc3RhdGUgZm9yIHRoZSBmaWx0ZXJzXHJcbiAgICBjb25zdCBbZXN0YWRvRmlsdHJvLCBzZXRFc3RhZG9GaWx0cm9dID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIGZpbHRyYW5kbzpmYWxzZSxcclxuICAgICAgICBjYXRlZ29yaWE6JycsXHJcbiAgICAgICAgc3ViY2F0ZWdvcmlhOicnLFxyXG4gICAgICAgIG1hcmNhOicnLFxyXG4gICAgICAgIGJ1c2NhZG9yOicnXHJcbiAgICB9KTtcclxuXHJcbiAgICAvL21hbmVqbyBkZSBNb2RhbCBtYXJjYXNcclxuICAgIGNvbnN0IFttb2RhbElzT3Blbiwgc2V0TW9kYWxJc09wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3Qgb25DbG9zZU1vZGFsID0gKCk9PntcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYm9keScpWzBdLnN0eWxlLm92ZXJmbG93WSA9ICdzY3JvbGwnO1xyXG4gICAgICAgIHNldE1vZGFsSXNPcGVuKGZhbHNlKTtcclxuICAgIH1cclxuXHJcbiAgICAvL2xvb3AgZGUgZWZlY3RvIHBhcmEgZWplY3V0YXIgc29sbyB1bmEgdmV6IGN1YW5kbyBlbCBjb21wb25lbnRlIHNlIG1vbnRlIGVuIGVsIGNhc28gZGUgcXVlIHNlIGVzdGUgZmlsdHJhbmRvIGRpcmVjdG8gZGVzZGUgbGEgdXJsXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGdldERhdGEoKTtcclxuICAgIH0sW10pO1xyXG4gICAgICAgIFxyXG4gICAgY29uc3QgZ2V0RGF0YSA9IGFzeW5jKCk9PntcclxuICAgICAgICBpZihwcm9wcy5tYXJjYXNSZWR1Y2VyLm1hcmNhcy5sZW5ndGg9PT0wKXtcclxuICAgICAgICAgICAgYXdhaXQgcHJvcHMubWFyY2FzVHJhZXJUb2RhcygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZihwcm9wcy5jYXRlZ29yaWFzUmVkdWNlci5jYXRlZ29yaWFzLmxlbmd0aD09PTApe1xyXG4gICAgICAgICAgICBhd2FpdCBwcm9wcy5jYXRlZ29yaWFzVHJhZXJUb2RhcygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZihwcm9wcy5zdWJjYXRlZ29yaWFSZWR1Y2VyLnN1YmNhdGVnb3JpYXMubGVuZ3RoPT09MCl7XHJcbiAgICAgICAgICAgIGF3YWl0IHByb3BzLnN1YmNhdGVnb3JpYVRyYWVyVG9kYXMoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmKHByb3BzLmxvY2F0aW9uICE9PSAnL3Byb2R1Y3Rvcycpe1xyXG4gICAgICAgICAgICAgICAgYWN0aXZhckZpbHRyb1BvclVybCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgMTAwMCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy9sb29wIGRlIGVmZWN0byBwYXJhIGhhY2VyIHJlbmRlciBjYWRhIHZleiBxdWUgc2UgYWdyZWdhIG8gZWxpbWluYSB1biBmaWx0cm9cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgc3dpdGNoSXRlbUFjdGl2ZSgpO1xyXG4gICAgfSwgW2VzdGFkb0ZpbHRyb10pO1xyXG5cclxuICAgIGNvbnN0IGFjdGl2YXJGaWx0cm9Qb3JVcmwgPSAoKT0+e1xyXG4gICAgICAgIHJldHVybiBhY3RpdmFyRmlsdHJvKHByb3BzLnF1ZXJ5LnR5cGUscHJvcHMucXVlcnkuaW5kZXhbMV0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGFjdGl2YXJGaWx0cm8gPSAodGlwb0ZpbHRybyxrZXkpPT57XHJcbiAgICAgICAgc3dpdGNoICh0aXBvRmlsdHJvKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ2NhdGVnb3JpYSc6XHJcbiAgICAgICAgICAgICAgICBzZXRFc3RhZG9GaWx0cm8oe1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLmVzdGFkb0ZpbHRybyxcclxuICAgICAgICAgICAgICAgICAgICBjYXRlZ29yaWE6a2V5LFxyXG4gICAgICAgICAgICAgICAgICAgIGJ1c2NhZG9yOicnLFxyXG4gICAgICAgICAgICAgICAgICAgIGZpbHRyYW5kbzp0cnVlXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdzdWJjYXRlZ29yaWEnOlxyXG4gICAgICAgICAgICAgICAgc2V0RXN0YWRvRmlsdHJvKHtcclxuICAgICAgICAgICAgICAgICAgICAuLi5lc3RhZG9GaWx0cm8sXHJcbiAgICAgICAgICAgICAgICAgICAgc3ViY2F0ZWdvcmlhOmtleSxcclxuICAgICAgICAgICAgICAgICAgICBidXNjYWRvcjonJyxcclxuICAgICAgICAgICAgICAgICAgICBmaWx0cmFuZG86dHJ1ZVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdtYXJjYSc6XHJcbiAgICAgICAgICAgICAgICBzZXRFc3RhZG9GaWx0cm8oe1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLmVzdGFkb0ZpbHRybyxcclxuICAgICAgICAgICAgICAgICAgICBtYXJjYTprZXksXHJcbiAgICAgICAgICAgICAgICAgICAgYnVzY2Fkb3I6JycsXHJcbiAgICAgICAgICAgICAgICAgICAgZmlsdHJhbmRvOnRydWVcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnYnVzY2Fkb3InOlxyXG4gICAgICAgICAgICAgICAgc2V0RXN0YWRvRmlsdHJvKHtcclxuICAgICAgICAgICAgICAgICAgICAuLi5lc3RhZG9GaWx0cm8sXHJcbiAgICAgICAgICAgICAgICAgICAgYnVzY2Fkb3I6a2V5LFxyXG4gICAgICAgICAgICAgICAgICAgIGZpbHRyYW5kbzp0cnVlXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHN3aXRjaEl0ZW1BY3RpdmUgPSAoKT0+e1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGVzdGFkb0ZpbHRybyk7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKEZpbHRyb1N0eWxlLml0ZW1fZmlsdHJvKS5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoRmlsdHJvU3R5bGUuaXRlbV9maWx0cm8pW2luZGV4XTtcclxuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKEZpbHRyb1N0eWxlLmFjdGl2ZSk7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoRmlsdHJvU3R5bGUuaWNvbl9jbG9zZV9maWx0cm8pW2luZGV4XS5jbGFzc0xpc3QuYWRkKCdkLW5vbmUnKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmKCFlc3RhZG9GaWx0cm8uZmlsdHJhbmRvKSByZXR1cm47XHJcbiAgICAgICAgLy9zaSBubyBoYXkgbmFkYSBlbiBidXNjYWRvciwgcHVlZG8gc2V0ZWFyIHVuIGFjdGl2ZSBlbiBhbGd1biBlbGVtZW50byBkZSBsYSBsaXN0YVxyXG4gICAgICAgIGlmKGVzdGFkb0ZpbHRyby5idXNjYWRvci50cmltKCk9PT0nJyl7XHJcbiAgICAgICAgICAgIC8vcmVjb3JybyBlbCBzdGF0ZSBwYXJhIG9idGVuZXIgbGFzIGNsYXZlcyB5IGFncmVnYXIgYWN0aXZlIGVsIGVsZW1lbnRvIGNvcnJlc3BvbmRpZW50ZVxyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBlc3RhZG9GaWx0cm8pIHtcclxuICAgICAgICAgICAgICAgIGlmKGVzdGFkb0ZpbHRyb1trZXldICYmIGVzdGFkb0ZpbHRyb1trZXldIT09JycgJiYgZXN0YWRvRmlsdHJvW2tleV0hPT10cnVlKXtcclxuICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKGVzdGFkb0ZpbHRyb1trZXldKTtcclxuICAgICAgICAgICAgICAgICAgICBpZihkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShgJHtrZXl9LSR7ZXN0YWRvRmlsdHJvW2tleV19YClbMF0pey8vcHJlZ3VudG8gc2kgZXhpc3RlIGVsIGVsZW1lbnRvIGNvbiBlbCBuYW1lIGRlbCBmaWx0cm8gcGFyYSBhZ3JlZ2FybGUgZWwgYWN0aXZlLCBzaSBubyBleGlzdGUgbG8gY3Jlby4gKHNpIG5vIGV4aXN0ZSBlcyBwb3JxdWUgdmllbmUgZGVzZGUgbW9kYWwgZGUgbWFyY2FzKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnISEhJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKGAke2tleX0tJHtlc3RhZG9GaWx0cm9ba2V5XX1gKVswXS5jbGFzc0xpc3QuYWRkKEZpbHRyb1N0eWxlLmFjdGl2ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBjbG9zZS0ke2tleX0tJHtlc3RhZG9GaWx0cm9ba2V5XX1gKS5jbGFzc0xpc3QucmVtb3ZlKCdkLW5vbmUnKTtcclxuICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoZXN0YWRvRmlsdHJvLm1hcmNhIT09Jycpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9jcmVvIGxvcyBlbGVtZW50b3MgZGVsIGl0ZW1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBuZXdJdGVtTWFyY2EgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRpdkl0ZW1NYXJjYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHNwYW5JdGVtTWFyY2EgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgaWNvbkNsb3NlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3ZnJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG1hcmNhTmFtZSA9IHByb3BzLm1hcmNhc1JlZHVjZXIubWFyY2FzLmZpbHRlcihyZXM9PnJlcy5pZE1hcmNhID09IGVzdGFkb0ZpbHRyby5tYXJjYSlbMF0ubWFyY2E7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9hc2lnbm8gbGFzIGNsYXNlcywgYXRyaWJ1dG9zIHkgZXZlbnRvcyBuZWNlc2FyaW9zLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGl2SXRlbU1hcmNhLmNsYXNzTmFtZSA9YCR7RmlsdHJvU3R5bGUuaXRlbV9maWx0cm99ICR7RmlsdHJvU3R5bGUuYWN0aXZlfWA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXZJdGVtTWFyY2Euc2V0QXR0cmlidXRlKCduYW1lJyxgbWFyY2EtJHtlc3RhZG9GaWx0cm8ubWFyY2F9YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXZJdGVtTWFyY2EuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT5hY3RpdmFyRmlsdHJvKCdtYXJjYScsZXN0YWRvRmlsdHJvLm1hcmNhKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcGFuSXRlbU1hcmNhLmNsYXNzTmFtZSA9ICd0ZXh0LW11dGVkJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNwYW5JdGVtTWFyY2EuaW5uZXJIVE1MID0gbWFyY2FOYW1lO1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uQ2xvc2UuaW5uZXJIVE1MID0gYFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgYXJpYS1oaWRkZW49XCJ0cnVlXCIgZm9jdXNhYmxlPVwiZmFsc2VcIiBkYXRhLXByZWZpeD1cImZhc1wiIGRhdGEtaWNvbj1cInRpbWVzXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Ym94PVwiMCAwIDM1MiA1MTJcIiBjbGFzcz1cInN2Zy1pbmxpbmUtLWZhIGZhLXRpbWVzIGZhLXctMTEgRmlsdHJvX2ljb25fY2xvc2VfZmlsdHJvX18xeGx2NVwiIGlkPVwiY2xvc2UtbWFyY2EtJHtlc3RhZG9GaWx0cm8ubWFyY2F9XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTI0Mi43MiAyNTZsMTAwLjA3LTEwMC4wN2MxMi4yOC0xMi4yOCAxMi4yOC0zMi4xOSAwLTQ0LjQ4bC0yMi4yNC0yMi4yNGMtMTIuMjgtMTIuMjgtMzIuMTktMTIuMjgtNDQuNDggMEwxNzYgMTg5LjI4IDc1LjkzIDg5LjIxYy0xMi4yOC0xMi4yOC0zMi4xOS0xMi4yOC00NC40OCAwTDkuMjEgMTExLjQ1Yy0xMi4yOCAxMi4yOC0xMi4yOCAzMi4xOSAwIDQ0LjQ4TDEwOS4yOCAyNTYgOS4yMSAzNTYuMDdjLTEyLjI4IDEyLjI4LTEyLjI4IDMyLjE5IDAgNDQuNDhsMjIuMjQgMjIuMjRjMTIuMjggMTIuMjggMzIuMiAxMi4yOCA0NC40OCAwTDE3NiAzMjIuNzJsMTAwLjA3IDEwMC4wN2MxMi4yOCAxMi4yOCAzMi4yIDEyLjI4IDQ0LjQ4IDBsMjIuMjQtMjIuMjRjMTIuMjgtMTIuMjggMTIuMjgtMzIuMTkgMC00NC40OEwyNDIuNzIgMjU2elwiPjwvcGF0aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uQ2xvc2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT5saW1waWFyRmlsdHJvKCdtYXJjYScpKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL3ZveSB1YmljYW5kbyBsb3MgZWxlbWVudG9zIGRlbnRybyBkZSBjYWRhIHBhZHJlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXZJdGVtTWFyY2EuYXBwZW5kQ2hpbGQoc3Bhbkl0ZW1NYXJjYSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdJdGVtTWFyY2EuYXBwZW5kQ2hpbGQoZGl2SXRlbU1hcmNhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld0l0ZW1NYXJjYS5hcHBlbmRDaGlsZChpY29uQ2xvc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL09idGVuZ28gZWwgcHJpbWVyIGl0ZW0gZGUgbGEgbGlzdGEgeSBsbyBlbGltaW5vLCBwYXJhIHRlbmVyIHNpZW1wcmUgbGEgbWlzbWEgY2FudGlkYWQgZGUgbWFyY2FzIGVuIGxhIGxpc3RhLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI2xpc3RhTWFyY2FgKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGZpcnN0SXRlbU1hcmNhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI2xpc3RhTWFyY2FgKS5jaGlsZHJlblswXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbGlzdGFNYXJjYXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjbGlzdGFNYXJjYWApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpc3RhTWFyY2FzLnJlbW92ZUNoaWxkKGZpcnN0SXRlbU1hcmNhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2Fob3JhIGFncmVnbyBlbCBpdGVtIGNyZWFkbyBhIGxhIGxpc3RhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGlzdGFNYXJjYXMuYXBwZW5kQ2hpbGQobmV3SXRlbU1hcmNhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy9sYSBwcmltZXJhIHZleiBxdWUgc2UgY2FyZ2EgZWwgY29tcG9uZW50ZSwgZmlsdHJhbmRvIGVzIGZhbHNlLCBwb3IgZXNvIHByZWd1bnRvIHBhcmEgcXVlIG5vIHNlIGVqZWN1dGEgbGEgZnVuY2lvbiBkZSBpciBhIGZpbHRyYXIgYXBlbmFzIHNlIG1vbnRlIGVsIGNvbXBvbmVudGUuIFNpbm8gcXVlIHNlIGVqZWN1dGUgY3VhbmRvIGRlIHZlcmRhZCBzZSBxdWllcmEgZmlsdHJhci5cclxuICAgICAgICBpZihlc3RhZG9GaWx0cm8uZmlsdHJhbmRvKXtcclxuICAgICAgICAgICAgbGV0IHVybEZpbHRybyA9IGFybWFyVXJsRmlsdHJvKCk7Ly9hcm1vIGxhIHVybCBxdWUgbWFuZG8gYSBsYSBhcGkgcGFyYSB0cmFlciBsb3MgcmVzdWx0YWRvcyBkZSBsbyBmaWx0cmFkby5cclxuICAgICAgICAgICAgcHJvcHMuc3VicHJvZHVjdG9zRmlsdHJhclByb2R1Y3Rvcyh1cmxGaWx0cm8pO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgbGltcGlhckZpbHRybyA9IHRpcG89PntcclxuICAgICAgICBzd2l0Y2ggKHRpcG8pIHtcclxuICAgICAgICAgICAgY2FzZSAnY2F0ZWdvcmlhJzpcclxuICAgICAgICAgICAgICAgIGlmKGVzdGFkb0ZpbHRyby5zdWJjYXRlZ29yaWE9PT0nJyAmJiBlc3RhZG9GaWx0cm8ubWFyY2E9PT0nJyl7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0RXN0YWRvRmlsdHJvKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLi4uZXN0YWRvRmlsdHJvLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXRlZ29yaWE6JycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRyYW5kbzpmYWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHByb3BzLnN1YnByb2R1Y3Rvc1RyYWVyVG9kb3MoKTtcclxuICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIHNldEVzdGFkb0ZpbHRybyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLmVzdGFkb0ZpbHRybyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcmlhOicnXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnc3ViY2F0ZWdvcmlhJzpcclxuICAgICAgICAgICAgICAgIGlmKGVzdGFkb0ZpbHRyby5jYXRlZ29yaWE9PT0nJyAmJiBlc3RhZG9GaWx0cm8ubWFyY2E9PT0nJyl7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0RXN0YWRvRmlsdHJvKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLi4uZXN0YWRvRmlsdHJvLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdWJjYXRlZ29yaWE6JycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRyYW5kbzpmYWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHByb3BzLnN1YnByb2R1Y3Rvc1RyYWVyVG9kb3MoKTtcclxuICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIHNldEVzdGFkb0ZpbHRybyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLmVzdGFkb0ZpbHRybyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3ViY2F0ZWdvcmlhOicnXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnbWFyY2EnOlxyXG4gICAgICAgICAgICAgICAgaWYoZXN0YWRvRmlsdHJvLmNhdGVnb3JpYT09PScnICYmIGVzdGFkb0ZpbHRyby5zdWJjYXRlZ29yaWE9PScnKXtcclxuICAgICAgICAgICAgICAgICAgICBzZXRFc3RhZG9GaWx0cm8oe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAuLi5lc3RhZG9GaWx0cm8sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmNhOicnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWx0cmFuZG86ZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICBwcm9wcy5zdWJwcm9kdWN0b3NUcmFlclRvZG9zKCk7IFxyXG4gICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0RXN0YWRvRmlsdHJvKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLi4uZXN0YWRvRmlsdHJvLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJjYTonJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBwcm9wcy5zdWJwcm9kdWN0b3NUcmFlclRvZG9zKCk7XHJcbiAgICAgICAgICAgICAgICBzZXRFc3RhZG9GaWx0cm8oe1xyXG4gICAgICAgICAgICAgICAgICAgIGZpbHRyYW5kbzpmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBjYXRlZ29yaWE6JycsXHJcbiAgICAgICAgICAgICAgICAgICAgc3ViY2F0ZWdvcmlhOicnLFxyXG4gICAgICAgICAgICAgICAgICAgIG1hcmNhOicnLFxyXG4gICAgICAgICAgICAgICAgICAgIGJ1c2NhZG9yOicnXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNsb3NlRmlsdHJvc01vYmlsZSA9ICgpPT57XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShGaWx0cm9TdHlsZS5maWx0cm9zX19jb250YW5pZXIpWzBdLmNsYXNzTGlzdC5yZW1vdmUoRmlsdHJvU3R5bGUuc2hvd19maWx0cm9zKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBhcm1hclVybEZpbHRybyA9ICgpPT57XHJcbiAgICAgICAgbGV0IHVybCA9ICdmaWx0cmFyJztcclxuICAgICAgICAvL3NpIGJ1c2NhZG9yIHZpZW5lIHRydWUsIGVzIHBvcnF1ZSB2aWVuZSBkZXNkZSBlbCBidXNjYWRvciBkZWwgbWVudSBvIG1vZGFsIGRlIGJ1c2NhZG9yKG1vYmlsZSkuXHJcbiAgICAgICAgaWYoZXN0YWRvRmlsdHJvLmJ1c2NhZG9yIT09JycpIHJldHVybiB1cmwgKz0gYD9idXNjYXI9JHtlc3RhZG9GaWx0cm8uYnVzY2Fkb3J9YDtcclxuXHJcbiAgICAgICAgbGV0IGNhdGVnb3JpYSA9IGVzdGFkb0ZpbHRyby5jYXRlZ29yaWEsXHJcbiAgICAgICAgICAgIHN1YmNhdGVnb3JpYSA9IGVzdGFkb0ZpbHRyby5zdWJjYXRlZ29yaWEsXHJcbiAgICAgICAgICAgIG1hcmNhID0gZXN0YWRvRmlsdHJvLm1hcmNhO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKGNhdGVnb3JpYSAmJiBjYXRlZ29yaWEgIT09ICcnKXtcclxuICAgICAgICAgICAgdXJsICs9IGA/Y2F0ZWdvcmlhPSR7ZXN0YWRvRmlsdHJvLmNhdGVnb3JpYX1gO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZihlc3RhZG9GaWx0cm8uc3ViY2F0ZWdvcmlhICYmIGVzdGFkb0ZpbHRyby5zdWJjYXRlZ29yaWEgIT09ICcnKXtcclxuICAgICAgICAgICAgaWYoY2F0ZWdvcmlhIT09ICcnKXtcclxuICAgICAgICAgICAgICAgIHVybCArPSBgJnN1YmNhdGVnb3JpYT0ke2VzdGFkb0ZpbHRyby5zdWJjYXRlZ29yaWF9YDsgXHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgdXJsICs9IGA/c3ViY2F0ZWdvcmlhPSR7ZXN0YWRvRmlsdHJvLnN1YmNhdGVnb3JpYX1gO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKG1hcmNhICYmIG1hcmNhICE9PSAnJyl7XHJcbiAgICAgICAgICAgIGlmKGNhdGVnb3JpYSAhPT0gJycgJiYgc3ViY2F0ZWdvcmlhICE9PSAnJyl7XHJcbiAgICAgICAgICAgICAgICB1cmwgKz0gYD9tYXJjYT0ke2VzdGFkb0ZpbHRyby5tYXJjYX1gO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIHVybCArPSBgJm1hcmNhPSR7ZXN0YWRvRmlsdHJvLm1hcmNhfWA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHVybDtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzaG93RmlsdHJvcyA9ICgpPT57XHJcbiAgICAgICAgbGV0IGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKEZpbHRyb1N0eWxlLmZpbHRyb3NfX2NvbnRhbmllcilbMF07XHJcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKEZpbHRyb1N0eWxlLnNob3cpO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpY29uRmlsdHJvQ29udGFpbmVyJykuY2xhc3NMaXN0LnRvZ2dsZShGaWx0cm9TdHlsZS5yb3Rhcik7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17RmlsdHJvU3R5bGUuZmlsdHJvc19fY29udGFuaWVyfT5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e0ZpbHRyb1N0eWxlLmJ0bl9jbG9zZV9maWx0cm99IG9uQ2xpY2s9e3Nob3dGaWx0cm9zfT5cclxuICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWQ9XCJpY29uRmlsdHJvQ29udGFpbmVyXCIgaWNvbj17ZmFDaGV2cm9uUmlnaHR9Lz5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICB7KHByb3BzLmNhdGVnb3JpYXNSZWR1Y2VyLmNhdGVnb3JpYXMubGVuZ3RoPT0wIHx8IHByb3BzLnN1YmNhdGVnb3JpYVJlZHVjZXIuc3ViY2F0ZWdvcmlhcy5sZW5ndGg9PTAgfHwgcHJvcHMubWFyY2FzUmVkdWNlci5tYXJjYXMubGVuZ3RoPT0wKT88TG9hZGVyLz46XHJcbiAgICAgICAgICAgICAgICAgICAgPD4gIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7KGVzdGFkb0ZpbHRyby5maWx0cmFuZG8pPzxidXR0b24gY2xhc3NOYW1lPVwiYm90b24gYmcteWVsbG93IG1iLTNcIiBvbkNsaWNrPXtsaW1waWFyRmlsdHJvfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFCcm9vbX0vPiBMaW1waWFyIEZpbHRyb3NcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+Om51bGx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFUaW1lc30gY2xhc3NOYW1lPXtGaWx0cm9TdHlsZS5jZXJyYXJfZmlsdHJvX21vYmlsZX0gb25DbGljaz17Y2xvc2VGaWx0cm9zTW9iaWxlfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9e0ZpbHRyb1N0eWxlLnRpdHVsb19maWx0cm9zfT5NYXNjb3RhPC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT17RmlsdHJvU3R5bGUubGlzdGF9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzLmNhdGVnb3JpYXNSZWR1Y2VyLmNhdGVnb3JpYXMubWFwKGNhdD0+KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtjYXQuaWRDYXRlZ29yaWF9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e0ZpbHRyb1N0eWxlLml0ZW1fZmlsdHJvfSBuYW1lPXtgY2F0ZWdvcmlhLSR7Y2F0LmlkQ2F0ZWdvcmlhfWB9IG9uQ2xpY2s9eygpPT5hY3RpdmFyRmlsdHJvKCdjYXRlZ29yaWEnLGAke2NhdC5pZENhdGVnb3JpYX1gKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1tdXRlZFwiPntjYXQuY2F0ZWdvcmlhfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVRpbWVzfSBjbGFzc05hbWU9e0ZpbHRyb1N0eWxlLmljb25fY2xvc2VfZmlsdHJvICsgJyAnICsgYGQtbm9uZWB9IG9uQ2xpY2s9eygpPT5saW1waWFyRmlsdHJvKCdjYXRlZ29yaWEnKX0gaWQ9e2BjbG9zZS1jYXRlZ29yaWEtJHtjYXQuaWRDYXRlZ29yaWF9YH0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT17RmlsdHJvU3R5bGUudGl0dWxvX2ZpbHRyb3N9PkFsaW1lbnRvczwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9e0ZpbHRyb1N0eWxlLmxpc3RhfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wcy5zdWJjYXRlZ29yaWFSZWR1Y2VyLnN1YmNhdGVnb3JpYXMubWFwKHNjPT4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e3NjLmlkU3ViQ2F0ZWdvcmlhfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtGaWx0cm9TdHlsZS5pdGVtX2ZpbHRyb30gbmFtZT17YHN1YmNhdGVnb3JpYS0ke3NjLmlkU3ViQ2F0ZWdvcmlhfWB9IG9uQ2xpY2s9eygpPT5hY3RpdmFyRmlsdHJvKCdzdWJjYXRlZ29yaWEnLGAke3NjLmlkU3ViQ2F0ZWdvcmlhfWApfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkXCI+e3NjLnN1YmNhdGVnb3JpYX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFUaW1lc30gY2xhc3NOYW1lPXtGaWx0cm9TdHlsZS5pY29uX2Nsb3NlX2ZpbHRybyArICcgJyArIGBkLW5vbmVgfSBvbkNsaWNrPXsoKT0+bGltcGlhckZpbHRybygnc3ViY2F0ZWdvcmlhJyl9IGlkPXtgY2xvc2UtJHtgc3ViY2F0ZWdvcmlhLSR7c2MuaWRTdWJDYXRlZ29yaWF9YH1gfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9e0ZpbHRyb1N0eWxlLnRpdHVsb19maWx0cm9zfT5NYXJjYTwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBpZD1cImxpc3RhTWFyY2FcIiBjbGFzc05hbWU9e0ZpbHRyb1N0eWxlLnNpbkJvcmRlckJvdHRvbSsgJyAnICsgRmlsdHJvU3R5bGUubGlzdGF9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzLm1hcmNhc1JlZHVjZXIubWFyY2FzLm1hcCgobWFyY2Esa2V5KT0+KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoa2V5PjMpP2ZhbHNlOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXttYXJjYS5pZE1hcmNhfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtGaWx0cm9TdHlsZS5pdGVtX2ZpbHRyb30gbmFtZT17YG1hcmNhLSR7bWFyY2EuaWRNYXJjYX1gfSBvbkNsaWNrPXsoKT0+YWN0aXZhckZpbHRybygnbWFyY2EnLGAke21hcmNhLmlkTWFyY2F9YCl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtbXV0ZWRcIj57bWFyY2EubWFyY2F9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhVGltZXN9IGNsYXNzTmFtZT17RmlsdHJvU3R5bGUuaWNvbl9jbG9zZV9maWx0cm8gKyAnICcgKyBgZC1ub25lYH0gb25DbGljaz17KCk9PmxpbXBpYXJGaWx0cm8oJ21hcmNhJyl9IGlkPXtgY2xvc2UtbWFyY2EtJHttYXJjYS5pZE1hcmNhfWB9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpPT5zZXRNb2RhbElzT3Blbih0cnVlKX0gY2xhc3NOYW1lPVwiYm90b24gYmctZ3Jpc1wiPlZlciB0b2RhczwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgeyghbW9kYWxJc09wZW4pP251bGw6XHJcbiAgICAgICAgICAgICAgICA8TW9kYWwgY2xvc2VNb2RhbD17b25DbG9zZU1vZGFsfT5cclxuICAgICAgICAgICAgICAgICAgICA8TW9kYWxNYXJjYSBjbG9zZU1vZGFsPXtvbkNsb3NlTW9kYWx9IGFjdGl2YXJGaWx0cm89e2FjdGl2YXJGaWx0cm99Lz5cclxuICAgICAgICAgICAgICAgIDwvTW9kYWw+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9ICh7bWFyY2FzUmVkdWNlcixzdWJwcm9kdWN0b3NSZWR1Y2VyLGNhdGVnb3JpYXNSZWR1Y2VyLHN1YmNhdGVnb3JpYVJlZHVjZXJ9KT0+e1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBtYXJjYXNSZWR1Y2VyLFxyXG4gICAgICAgIHN1YnByb2R1Y3Rvc1JlZHVjZXIsXHJcbiAgICAgICAgY2F0ZWdvcmlhc1JlZHVjZXIsXHJcbiAgICAgICAgc3ViY2F0ZWdvcmlhUmVkdWNlclxyXG4gICAgfTtcclxufVxyXG5cclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0ge1xyXG4gICAgbWFyY2FzVHJhZXJUb2RhcyxcclxuICAgIHN1YnByb2R1Y3Rvc0ZpbHRyYXJQcm9kdWN0b3MsXHJcbiAgICBzdWJwcm9kdWN0b3NUcmFlclRvZG9zLFxyXG4gICAgY2F0ZWdvcmlhc1RyYWVyVG9kYXMsXHJcbiAgICBzdWJjYXRlZ29yaWFUcmFlclRvZGFzXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLG1hcERpc3BhdGNoVG9Qcm9wcykoRmlsdHJvKTsiXSwic291cmNlUm9vdCI6IiJ9