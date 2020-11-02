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
          if (document.getElementsByName("".concat(key, "-").concat(estadoFiltro[key]))[0]) {
            //pregunto si existe el elemento con el name del filtro para agregarle el active, si no existe lo creo. (si no existe es porque viene desde modal de marcas)
            document.getElementsByName("".concat(key, "-").concat(estadoFiltro[key]))[0].classList.add(_Filtro_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.active);
            document.getElementById("close-".concat(key, "-").concat(estadoFiltro[key])).classList.remove('d-none');
          } else {
            //creo los elementos del item
            var newItemMarca = document.createElement('li');
            var divItemMarca = document.createElement('div');
            var spanItemMarca = document.createElement('span');
            var iconClose = document.createElement('svg');
            divItemMarca.className = "".concat(_Filtro_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.item_filtro, " ").concat(_Filtro_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.active);
            spanItemMarca.className = 'text-muted';

            if (estadoFiltro.marca !== '') {
              var marcaName = props.marcasReducer.marcas.filter(function (res) {
                return res.idMarca == estadoFiltro.marca;
              })[0].marca; //asigno las clases, atributos y eventos necesarios.

              divItemMarca.setAttribute('name', "marca-".concat(estadoFiltro.marca));
              divItemMarca.addEventListener('click', function () {
                return activarFiltro('marca', estadoFiltro.marca);
              });
              spanItemMarca.innerHTML = marcaName;
              iconClose.innerHTML = "\n                                <svg aria-hidden=\"true\" focusable=\"false\" data-prefix=\"fas\" data-icon=\"times\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewbox=\"0 0 352 512\" class=\"svg-inline--fa fa-times fa-w-11 Filtro_icon_close_filtro__1xlv5\" id=\"close-marca-".concat(estadoFiltro.marca, "\">\n                                    <path fill=\"currentColor\" d=\"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z\"></path>\n                                </svg>\n                            ");
              iconClose.addEventListener('click', function () {
                return limpiarFiltro('marca');
              });
            } else if (estadoFiltro.categoria !== '') {
              divItemMarca.setAttribute('name', "categoria-".concat(estadoFiltro.categoria));
              divItemMarca.addEventListener('click', function () {
                return activarFiltro('categoria', estadoFiltro.categoria);
              });
              var categoriaName = 'categoria';
              spanItemMarca.innerHTML = categoriaName;
              iconClose.innerHTML = "\n                                <svg aria-hidden=\"true\" focusable=\"false\" data-prefix=\"fas\" data-icon=\"times\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewbox=\"0 0 352 512\" class=\"svg-inline--fa fa-times fa-w-11 Filtro_icon_close_filtro__1xlv5\" id=\"close-marca-".concat(estadoFiltro.categoria, "\">\n                                    <path fill=\"currentColor\" d=\"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z\"></path>\n                                </svg>\n                            ");
              iconClose.addEventListener('click', function () {
                return limpiarFiltro('categoria');
              });
            } else if (estadoFiltro.subcategoria !== '') {
              divItemMarca.setAttribute('name', "subcategoria-".concat(estadoFiltro.subcategoria));
              divItemMarca.addEventListener('click', function () {
                return activarFiltro('subcategoria', estadoFiltro.subcategoria);
              });
              spanItemMarca.innerHTML = 'subcategoria';
              iconClose.innerHTML = "\n                                <svg aria-hidden=\"true\" focusable=\"false\" data-prefix=\"fas\" data-icon=\"times\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewbox=\"0 0 352 512\" class=\"svg-inline--fa fa-times fa-w-11 Filtro_icon_close_filtro__1xlv5\" id=\"close-marca-".concat(estadoFiltro.subcategoria, "\">\n                                    <path fill=\"currentColor\" d=\"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z\"></path>\n                                </svg>\n                            ");
              iconClose.addEventListener('click', function () {
                return limpiarFiltro('subcategoria');
              });
            } //voy ubicando los elementos dentro de cada padre


            divItemMarca.appendChild(spanItemMarca);
            newItemMarca.appendChild(divItemMarca);
            newItemMarca.appendChild(iconClose); //Obtengo el primer item de la lista y lo elimino, para tener siempre la misma cantidad de marcas en la lista.

            var firstItemMarca = document.querySelector("#listaMarca").children[0];
            var listaMarcas = document.querySelector("#listaMarca");
            listaMarcas.removeChild(firstItemMarca); //ahora agrego el item creado a la lista

            listaMarcas.appendChild(newItemMarca);
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
      lineNumber: 261,
      columnNumber: 9
    }
  }, __jsx("button", {
    className: _Filtro_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.btn_close_filtro,
    onClick: showFiltros,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 262,
      columnNumber: 13
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeIcon"], {
    id: "iconFiltroContainer",
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faChevronRight"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 263,
      columnNumber: 17
    }
  })), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 265,
      columnNumber: 13
    }
  }, props.categoriasReducer.categorias.length == 0 || props.subcategoriaReducer.subcategorias.length == 0 || props.marcasReducer.marcas.length == 0 ? __jsx(_Loader__WEBPACK_IMPORTED_MODULE_14__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 266,
      columnNumber: 158
    }
  }) : __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, estadoFiltro.filtrando ? __jsx("button", {
    className: "boton bg-yellow mb-3",
    onClick: limpiarFiltro,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 268,
      columnNumber: 51
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faBroom"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 269,
      columnNumber: 29
    }
  }), " Limpiar Filtros") : null, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faTimes"],
    className: _Filtro_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.cerrar_filtro_mobile,
    onClick: closeFiltrosMobile,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 271,
      columnNumber: 25
    }
  }), __jsx("h4", {
    className: _Filtro_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.titulo_filtros,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 272,
      columnNumber: 25
    }
  }, "Mascota"), __jsx("ul", {
    className: _Filtro_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.lista,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 273,
      columnNumber: 25
    }
  }, props.categoriasReducer.categorias.map(function (cat) {
    return __jsx("li", {
      key: cat.idCategoria,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 276,
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
        lineNumber: 280,
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
  }, "Alimentos"), __jsx("ul", {
    className: _Filtro_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.lista,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 288,
      columnNumber: 25
    }
  }, props.subcategoriaReducer.subcategorias.map(function (sc) {
    return __jsx("li", {
      key: sc.idSubCategoria,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 291,
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
        lineNumber: 295,
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
  }, "Marca"), __jsx("ul", {
    id: "listaMarca",
    className: _Filtro_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.sinBorderBottom + ' ' + _Filtro_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.lista,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 302,
      columnNumber: 25
    }
  }, props.marcasReducer.marcas.map(function (marca, key) {
    return key > 3 ? false : __jsx("li", {
      key: marca.idMarca,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 306,
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
        lineNumber: 307,
        columnNumber: 41
      }
    }, __jsx("span", {
      className: "text-muted",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 308,
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
        lineNumber: 310,
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
      lineNumber: 315,
      columnNumber: 25
    }
  }, "Ver todas"))), !modalIsOpen ? null : __jsx(_Modal__WEBPACK_IMPORTED_MODULE_5__["default"], {
    closeModal: onCloseModal,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 320,
      columnNumber: 17
    }
  }, __jsx(_ModalMarca__WEBPACK_IMPORTED_MODULE_6__["default"], {
    closeModal: onCloseModal,
    activarFiltro: activarFiltro,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 321,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRmlsdHJvL2luZGV4LmpzIl0sIm5hbWVzIjpbIm1hcmNhc1RyYWVyVG9kYXMiLCJtYXJjYXNBY3Rpb25zIiwic3VicHJvZHVjdG9zRmlsdHJhclByb2R1Y3RvcyIsInN1YnByb2R1Y3Rvc0FjdGlvbnMiLCJzdWJwcm9kdWN0b3NUcmFlclRvZG9zIiwiY2F0ZWdvcmlhc1RyYWVyVG9kYXMiLCJjYXRlZ29yaWFzQWN0aW9ucyIsInN1YmNhdGVnb3JpYVRyYWVyVG9kYXMiLCJzdWJjYXRlZ29yaWFzQWN0aW9ucyIsIkZpbHRybyIsInByb3BzIiwidXNlU3RhdGUiLCJmaWx0cmFuZG8iLCJjYXRlZ29yaWEiLCJzdWJjYXRlZ29yaWEiLCJtYXJjYSIsImJ1c2NhZG9yIiwiZXN0YWRvRmlsdHJvIiwic2V0RXN0YWRvRmlsdHJvIiwibW9kYWxJc09wZW4iLCJzZXRNb2RhbElzT3BlbiIsIm9uQ2xvc2VNb2RhbCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJzdHlsZSIsIm92ZXJmbG93WSIsInVzZUVmZmVjdCIsImdldERhdGEiLCJtYXJjYXNSZWR1Y2VyIiwibWFyY2FzIiwibGVuZ3RoIiwiY2F0ZWdvcmlhc1JlZHVjZXIiLCJjYXRlZ29yaWFzIiwic3ViY2F0ZWdvcmlhUmVkdWNlciIsInN1YmNhdGVnb3JpYXMiLCJsb2NhdGlvbiIsImFjdGl2YXJGaWx0cm9Qb3JVcmwiLCJzd2l0Y2hJdGVtQWN0aXZlIiwiYWN0aXZhckZpbHRybyIsInF1ZXJ5IiwidHlwZSIsImluZGV4IiwidGlwb0ZpbHRybyIsImtleSIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJGaWx0cm9TdHlsZSIsIml0ZW1fZmlsdHJvIiwiZWxlbWVudCIsImNsYXNzTGlzdCIsInJlbW92ZSIsImFjdGl2ZSIsImljb25fY2xvc2VfZmlsdHJvIiwiYWRkIiwidHJpbSIsImdldEVsZW1lbnRzQnlOYW1lIiwiZ2V0RWxlbWVudEJ5SWQiLCJuZXdJdGVtTWFyY2EiLCJjcmVhdGVFbGVtZW50IiwiZGl2SXRlbU1hcmNhIiwic3Bhbkl0ZW1NYXJjYSIsImljb25DbG9zZSIsImNsYXNzTmFtZSIsIm1hcmNhTmFtZSIsImZpbHRlciIsInJlcyIsImlkTWFyY2EiLCJzZXRBdHRyaWJ1dGUiLCJhZGRFdmVudExpc3RlbmVyIiwiaW5uZXJIVE1MIiwibGltcGlhckZpbHRybyIsImNhdGVnb3JpYU5hbWUiLCJhcHBlbmRDaGlsZCIsImZpcnN0SXRlbU1hcmNhIiwicXVlcnlTZWxlY3RvciIsImNoaWxkcmVuIiwibGlzdGFNYXJjYXMiLCJyZW1vdmVDaGlsZCIsInVybEZpbHRybyIsImFybWFyVXJsRmlsdHJvIiwidGlwbyIsImNsb3NlRmlsdHJvc01vYmlsZSIsImZpbHRyb3NfX2NvbnRhbmllciIsInNob3dfZmlsdHJvcyIsInVybCIsInNob3dGaWx0cm9zIiwidG9nZ2xlIiwic2hvdyIsInJvdGFyIiwiYnRuX2Nsb3NlX2ZpbHRybyIsImZhQ2hldnJvblJpZ2h0IiwiZmFCcm9vbSIsImZhVGltZXMiLCJjZXJyYXJfZmlsdHJvX21vYmlsZSIsInRpdHVsb19maWx0cm9zIiwibGlzdGEiLCJtYXAiLCJjYXQiLCJpZENhdGVnb3JpYSIsInNjIiwiaWRTdWJDYXRlZ29yaWEiLCJzaW5Cb3JkZXJCb3R0b20iLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdWJwcm9kdWN0b3NSZWR1Y2VyIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiY29ubmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtJQUVrQkEsZ0IsR0FBb0JDLHdFO0lBQ2RDLDRCLEdBQWtFQyxvRjtJQUExQkMsc0IsR0FBMEJELDhFO0lBQ3hFRSxvQixHQUF3QkMsMkU7SUFDeEJDLHNCLEdBQTBCQyw4RTs7QUFFNUMsSUFBTUMs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cy9wcm9kdWN0b3MvW1suLi5pbmRleF1dLjhiNWUzZmY0Mjg5ODA4ZjI4ZmFkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgRmlsdHJvU3R5bGUgZnJvbSAnLi9GaWx0cm8ubW9kdWxlLmNzcyc7XHJcbmltcG9ydCBNb2RhbCBmcm9tICcuLi9Nb2RhbCc7XHJcbmltcG9ydCBNb2RhbE1hcmNhIGZyb20gJy4uL01vZGFsTWFyY2EnO1xyXG5pbXBvcnQgeyBmYVRpbWVzLGZhQnJvb20sZmFDaGV2cm9uUmlnaHQgfSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCI7XHJcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIjtcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0ICogYXMgc3VicHJvZHVjdG9zQWN0aW9ucyBmcm9tICcuLi8uLi8uLi9zdG9yZS9hY3Rpb25zL3N1YnByb2R1Y3Rvc0FjdGlvbnMnO1xyXG5pbXBvcnQgKiBhcyBtYXJjYXNBY3Rpb25zIGZyb20gJy4uLy4uLy4uL3N0b3JlL2FjdGlvbnMvbWFyY2FzQWN0aW9ucyc7XHJcbmltcG9ydCAqIGFzIGNhdGVnb3JpYXNBY3Rpb25zIGZyb20gJy4uLy4uLy4uL3N0b3JlL2FjdGlvbnMvY2F0ZWdvcmlhc0FjdGlvbic7XHJcbmltcG9ydCAqIGFzIHN1YmNhdGVnb3JpYXNBY3Rpb25zIGZyb20gJy4uLy4uLy4uL3N0b3JlL2FjdGlvbnMvc3ViY2F0ZWdvcmlhc0FjdGlvbic7XHJcbmltcG9ydCBMb2FkZXIgZnJvbSAnLi4vTG9hZGVyJztcclxuXHJcbmNvbnN0IHt0cmFlclRvZGFzOm1hcmNhc1RyYWVyVG9kYXN9ID0gbWFyY2FzQWN0aW9ucztcclxuY29uc3Qge2ZpbHRyYXJQcm9kdWN0b3M6c3VicHJvZHVjdG9zRmlsdHJhclByb2R1Y3Rvcyx0cmFlclRvZG9zOnN1YnByb2R1Y3Rvc1RyYWVyVG9kb3N9ID0gc3VicHJvZHVjdG9zQWN0aW9ucztcclxuY29uc3Qge3RyYWVyVG9kYXM6Y2F0ZWdvcmlhc1RyYWVyVG9kYXN9ID0gY2F0ZWdvcmlhc0FjdGlvbnM7XHJcbmNvbnN0IHt0cmFlclRvZGFzOnN1YmNhdGVnb3JpYVRyYWVyVG9kYXN9ID0gc3ViY2F0ZWdvcmlhc0FjdGlvbnM7XHJcblxyXG5jb25zdCBGaWx0cm8gPSAocHJvcHMpID0+IHtcclxuXHJcbiAgICAvL3N0YXRlIGZvciB0aGUgZmlsdGVyc1xyXG4gICAgY29uc3QgW2VzdGFkb0ZpbHRybywgc2V0RXN0YWRvRmlsdHJvXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICBmaWx0cmFuZG86ZmFsc2UsXHJcbiAgICAgICAgY2F0ZWdvcmlhOicnLFxyXG4gICAgICAgIHN1YmNhdGVnb3JpYTonJyxcclxuICAgICAgICBtYXJjYTonJyxcclxuICAgICAgICBidXNjYWRvcjonJ1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy9tYW5lam8gZGUgTW9kYWwgbWFyY2FzXHJcbiAgICBjb25zdCBbbW9kYWxJc09wZW4sIHNldE1vZGFsSXNPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IG9uQ2xvc2VNb2RhbCA9ICgpPT57XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2JvZHknKVswXS5zdHlsZS5vdmVyZmxvd1kgPSAnc2Nyb2xsJztcclxuICAgICAgICBzZXRNb2RhbElzT3BlbihmYWxzZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy9sb29wIGRlIGVmZWN0byBwYXJhIGVqZWN1dGFyIHNvbG8gdW5hIHZleiBjdWFuZG8gZWwgY29tcG9uZW50ZSBzZSBtb250ZSBlbiBlbCBjYXNvIGRlIHF1ZSBzZSBlc3RlIGZpbHRyYW5kbyBkaXJlY3RvIGRlc2RlIGxhIHVybFxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBnZXREYXRhKCk7XHJcbiAgICB9LFtdKTtcclxuICAgICAgICBcclxuICAgIGNvbnN0IGdldERhdGEgPSBhc3luYygpPT57XHJcbiAgICAgICAgaWYocHJvcHMubWFyY2FzUmVkdWNlci5tYXJjYXMubGVuZ3RoPT09MCl7XHJcbiAgICAgICAgICAgIGF3YWl0IHByb3BzLm1hcmNhc1RyYWVyVG9kYXMoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYocHJvcHMuY2F0ZWdvcmlhc1JlZHVjZXIuY2F0ZWdvcmlhcy5sZW5ndGg9PT0wKXtcclxuICAgICAgICAgICAgYXdhaXQgcHJvcHMuY2F0ZWdvcmlhc1RyYWVyVG9kYXMoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYocHJvcHMuc3ViY2F0ZWdvcmlhUmVkdWNlci5zdWJjYXRlZ29yaWFzLmxlbmd0aD09PTApe1xyXG4gICAgICAgICAgICBhd2FpdCBwcm9wcy5zdWJjYXRlZ29yaWFUcmFlclRvZGFzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHByb3BzLmxvY2F0aW9uICE9PSAnL3Byb2R1Y3Rvcycpe1xyXG4gICAgICAgICAgICBhY3RpdmFyRmlsdHJvUG9yVXJsKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vbG9vcCBkZSBlZmVjdG8gcGFyYSBoYWNlciByZW5kZXIgY2FkYSB2ZXogcXVlIHNlIGFncmVnYSBvIGVsaW1pbmEgdW4gZmlsdHJvXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHN3aXRjaEl0ZW1BY3RpdmUoKTtcclxuICAgIH0sIFtlc3RhZG9GaWx0cm9dKTtcclxuXHJcbiAgICBjb25zdCBhY3RpdmFyRmlsdHJvUG9yVXJsID0gKCk9PntcclxuICAgICAgICByZXR1cm4gYWN0aXZhckZpbHRybyhwcm9wcy5xdWVyeS50eXBlLHByb3BzLnF1ZXJ5LmluZGV4WzFdKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBhY3RpdmFyRmlsdHJvID0gKHRpcG9GaWx0cm8sa2V5KT0+e1xyXG4gICAgICAgIHN3aXRjaCAodGlwb0ZpbHRybykge1xyXG4gICAgICAgICAgICBjYXNlICdjYXRlZ29yaWEnOlxyXG4gICAgICAgICAgICAgICAgc2V0RXN0YWRvRmlsdHJvKHtcclxuICAgICAgICAgICAgICAgICAgICAuLi5lc3RhZG9GaWx0cm8sXHJcbiAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcmlhOmtleSxcclxuICAgICAgICAgICAgICAgICAgICBidXNjYWRvcjonJyxcclxuICAgICAgICAgICAgICAgICAgICBmaWx0cmFuZG86dHJ1ZVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnc3ViY2F0ZWdvcmlhJzpcclxuICAgICAgICAgICAgICAgIHNldEVzdGFkb0ZpbHRybyh7XHJcbiAgICAgICAgICAgICAgICAgICAgLi4uZXN0YWRvRmlsdHJvLFxyXG4gICAgICAgICAgICAgICAgICAgIHN1YmNhdGVnb3JpYTprZXksXHJcbiAgICAgICAgICAgICAgICAgICAgYnVzY2Fkb3I6JycsXHJcbiAgICAgICAgICAgICAgICAgICAgZmlsdHJhbmRvOnRydWVcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnbWFyY2EnOlxyXG4gICAgICAgICAgICAgICAgc2V0RXN0YWRvRmlsdHJvKHtcclxuICAgICAgICAgICAgICAgICAgICAuLi5lc3RhZG9GaWx0cm8sXHJcbiAgICAgICAgICAgICAgICAgICAgbWFyY2E6a2V5LFxyXG4gICAgICAgICAgICAgICAgICAgIGJ1c2NhZG9yOicnLFxyXG4gICAgICAgICAgICAgICAgICAgIGZpbHRyYW5kbzp0cnVlXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ2J1c2NhZG9yJzpcclxuICAgICAgICAgICAgICAgIHNldEVzdGFkb0ZpbHRybyh7XHJcbiAgICAgICAgICAgICAgICAgICAgLi4uZXN0YWRvRmlsdHJvLFxyXG4gICAgICAgICAgICAgICAgICAgIGJ1c2NhZG9yOmtleSxcclxuICAgICAgICAgICAgICAgICAgICBmaWx0cmFuZG86dHJ1ZVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzd2l0Y2hJdGVtQWN0aXZlID0gKCk9PntcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhlc3RhZG9GaWx0cm8pO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShGaWx0cm9TdHlsZS5pdGVtX2ZpbHRybykubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKEZpbHRyb1N0eWxlLml0ZW1fZmlsdHJvKVtpbmRleF07XHJcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShGaWx0cm9TdHlsZS5hY3RpdmUpO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKEZpbHRyb1N0eWxlLmljb25fY2xvc2VfZmlsdHJvKVtpbmRleF0uY2xhc3NMaXN0LmFkZCgnZC1ub25lJyk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBpZighZXN0YWRvRmlsdHJvLmZpbHRyYW5kbykgcmV0dXJuO1xyXG4gICAgICAgIC8vc2kgbm8gaGF5IG5hZGEgZW4gYnVzY2Fkb3IsIHB1ZWRvIHNldGVhciB1biBhY3RpdmUgZW4gYWxndW4gZWxlbWVudG8gZGUgbGEgbGlzdGFcclxuICAgICAgICBpZihlc3RhZG9GaWx0cm8uYnVzY2Fkb3IudHJpbSgpPT09Jycpe1xyXG4gICAgICAgICAgICAvL3JlY29ycm8gZWwgc3RhdGUgcGFyYSBvYnRlbmVyIGxhcyBjbGF2ZXMgeSBhZ3JlZ2FyIGFjdGl2ZSBlbCBlbGVtZW50byBjb3JyZXNwb25kaWVudGVcclxuICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gZXN0YWRvRmlsdHJvKSB7XHJcbiAgICAgICAgICAgICAgICBpZihlc3RhZG9GaWx0cm9ba2V5XSAmJiBlc3RhZG9GaWx0cm9ba2V5XSE9PScnICYmIGVzdGFkb0ZpbHRyb1trZXldIT09dHJ1ZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhlc3RhZG9GaWx0cm9ba2V5XSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoYCR7a2V5fS0ke2VzdGFkb0ZpbHRyb1trZXldfWApWzBdKXsvL3ByZWd1bnRvIHNpIGV4aXN0ZSBlbCBlbGVtZW50byBjb24gZWwgbmFtZSBkZWwgZmlsdHJvIHBhcmEgYWdyZWdhcmxlIGVsIGFjdGl2ZSwgc2kgbm8gZXhpc3RlIGxvIGNyZW8uIChzaSBubyBleGlzdGUgZXMgcG9ycXVlIHZpZW5lIGRlc2RlIG1vZGFsIGRlIG1hcmNhcylcclxuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoYCR7a2V5fS0ke2VzdGFkb0ZpbHRyb1trZXldfWApWzBdLmNsYXNzTGlzdC5hZGQoRmlsdHJvU3R5bGUuYWN0aXZlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGNsb3NlLSR7a2V5fS0ke2VzdGFkb0ZpbHRyb1trZXldfWApLmNsYXNzTGlzdC5yZW1vdmUoJ2Qtbm9uZScpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL2NyZW8gbG9zIGVsZW1lbnRvcyBkZWwgaXRlbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbmV3SXRlbU1hcmNhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRpdkl0ZW1NYXJjYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgc3Bhbkl0ZW1NYXJjYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGljb25DbG9zZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N2ZycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXZJdGVtTWFyY2EuY2xhc3NOYW1lID1gJHtGaWx0cm9TdHlsZS5pdGVtX2ZpbHRyb30gJHtGaWx0cm9TdHlsZS5hY3RpdmV9YDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3Bhbkl0ZW1NYXJjYS5jbGFzc05hbWUgPSAndGV4dC1tdXRlZCc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGVzdGFkb0ZpbHRyby5tYXJjYSE9PScnKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBtYXJjYU5hbWUgPSBwcm9wcy5tYXJjYXNSZWR1Y2VyLm1hcmNhcy5maWx0ZXIocmVzPT5yZXMuaWRNYXJjYSA9PSBlc3RhZG9GaWx0cm8ubWFyY2EpWzBdLm1hcmNhO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9hc2lnbm8gbGFzIGNsYXNlcywgYXRyaWJ1dG9zIHkgZXZlbnRvcyBuZWNlc2FyaW9zLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGl2SXRlbU1hcmNhLnNldEF0dHJpYnV0ZSgnbmFtZScsYG1hcmNhLSR7ZXN0YWRvRmlsdHJvLm1hcmNhfWApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGl2SXRlbU1hcmNhLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+YWN0aXZhckZpbHRybygnbWFyY2EnLGVzdGFkb0ZpbHRyby5tYXJjYSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Bhbkl0ZW1NYXJjYS5pbm5lckhUTUwgPSBtYXJjYU5hbWU7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb25DbG9zZS5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyBhcmlhLWhpZGRlbj1cInRydWVcIiBmb2N1c2FibGU9XCJmYWxzZVwiIGRhdGEtcHJlZml4PVwiZmFzXCIgZGF0YS1pY29uPVwidGltZXNcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdib3g9XCIwIDAgMzUyIDUxMlwiIGNsYXNzPVwic3ZnLWlubGluZS0tZmEgZmEtdGltZXMgZmEtdy0xMSBGaWx0cm9faWNvbl9jbG9zZV9maWx0cm9fXzF4bHY1XCIgaWQ9XCJjbG9zZS1tYXJjYS0ke2VzdGFkb0ZpbHRyby5tYXJjYX1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMjQyLjcyIDI1NmwxMDAuMDctMTAwLjA3YzEyLjI4LTEyLjI4IDEyLjI4LTMyLjE5IDAtNDQuNDhsLTIyLjI0LTIyLjI0Yy0xMi4yOC0xMi4yOC0zMi4xOS0xMi4yOC00NC40OCAwTDE3NiAxODkuMjggNzUuOTMgODkuMjFjLTEyLjI4LTEyLjI4LTMyLjE5LTEyLjI4LTQ0LjQ4IDBMOS4yMSAxMTEuNDVjLTEyLjI4IDEyLjI4LTEyLjI4IDMyLjE5IDAgNDQuNDhMMTA5LjI4IDI1NiA5LjIxIDM1Ni4wN2MtMTIuMjggMTIuMjgtMTIuMjggMzIuMTkgMCA0NC40OGwyMi4yNCAyMi4yNGMxMi4yOCAxMi4yOCAzMi4yIDEyLjI4IDQ0LjQ4IDBMMTc2IDMyMi43MmwxMDAuMDcgMTAwLjA3YzEyLjI4IDEyLjI4IDMyLjIgMTIuMjggNDQuNDggMGwyMi4yNC0yMi4yNGMxMi4yOC0xMi4yOCAxMi4yOC0zMi4xOSAwLTQ0LjQ4TDI0Mi43MiAyNTZ6XCI+PC9wYXRoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb25DbG9zZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PmxpbXBpYXJGaWx0cm8oJ21hcmNhJykpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9ZWxzZSBpZihlc3RhZG9GaWx0cm8uY2F0ZWdvcmlhIT09Jycpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGl2SXRlbU1hcmNhLnNldEF0dHJpYnV0ZSgnbmFtZScsYGNhdGVnb3JpYS0ke2VzdGFkb0ZpbHRyby5jYXRlZ29yaWF9YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXZJdGVtTWFyY2EuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT5hY3RpdmFyRmlsdHJvKCdjYXRlZ29yaWEnLGVzdGFkb0ZpbHRyby5jYXRlZ29yaWEpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjYXRlZ29yaWFOYW1lID0gJ2NhdGVnb3JpYSc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcGFuSXRlbU1hcmNhLmlubmVySFRNTCA9IGNhdGVnb3JpYU5hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uQ2xvc2UuaW5uZXJIVE1MID0gYFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgYXJpYS1oaWRkZW49XCJ0cnVlXCIgZm9jdXNhYmxlPVwiZmFsc2VcIiBkYXRhLXByZWZpeD1cImZhc1wiIGRhdGEtaWNvbj1cInRpbWVzXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Ym94PVwiMCAwIDM1MiA1MTJcIiBjbGFzcz1cInN2Zy1pbmxpbmUtLWZhIGZhLXRpbWVzIGZhLXctMTEgRmlsdHJvX2ljb25fY2xvc2VfZmlsdHJvX18xeGx2NVwiIGlkPVwiY2xvc2UtbWFyY2EtJHtlc3RhZG9GaWx0cm8uY2F0ZWdvcmlhfVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0yNDIuNzIgMjU2bDEwMC4wNy0xMDAuMDdjMTIuMjgtMTIuMjggMTIuMjgtMzIuMTkgMC00NC40OGwtMjIuMjQtMjIuMjRjLTEyLjI4LTEyLjI4LTMyLjE5LTEyLjI4LTQ0LjQ4IDBMMTc2IDE4OS4yOCA3NS45MyA4OS4yMWMtMTIuMjgtMTIuMjgtMzIuMTktMTIuMjgtNDQuNDggMEw5LjIxIDExMS40NWMtMTIuMjggMTIuMjgtMTIuMjggMzIuMTkgMCA0NC40OEwxMDkuMjggMjU2IDkuMjEgMzU2LjA3Yy0xMi4yOCAxMi4yOC0xMi4yOCAzMi4xOSAwIDQ0LjQ4bDIyLjI0IDIyLjI0YzEyLjI4IDEyLjI4IDMyLjIgMTIuMjggNDQuNDggMEwxNzYgMzIyLjcybDEwMC4wNyAxMDAuMDdjMTIuMjggMTIuMjggMzIuMiAxMi4yOCA0NC40OCAwbDIyLjI0LTIyLjI0YzEyLjI4LTEyLjI4IDEyLjI4LTMyLjE5IDAtNDQuNDhMMjQyLjcyIDI1NnpcIj48L3BhdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbkNsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+bGltcGlhckZpbHRybygnY2F0ZWdvcmlhJykpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9ZWxzZSBpZihlc3RhZG9GaWx0cm8uc3ViY2F0ZWdvcmlhIT09Jycpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGl2SXRlbU1hcmNhLnNldEF0dHJpYnV0ZSgnbmFtZScsYHN1YmNhdGVnb3JpYS0ke2VzdGFkb0ZpbHRyby5zdWJjYXRlZ29yaWF9YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXZJdGVtTWFyY2EuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT5hY3RpdmFyRmlsdHJvKCdzdWJjYXRlZ29yaWEnLGVzdGFkb0ZpbHRyby5zdWJjYXRlZ29yaWEpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNwYW5JdGVtTWFyY2EuaW5uZXJIVE1MID0gJ3N1YmNhdGVnb3JpYSc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uQ2xvc2UuaW5uZXJIVE1MID0gYFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgYXJpYS1oaWRkZW49XCJ0cnVlXCIgZm9jdXNhYmxlPVwiZmFsc2VcIiBkYXRhLXByZWZpeD1cImZhc1wiIGRhdGEtaWNvbj1cInRpbWVzXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Ym94PVwiMCAwIDM1MiA1MTJcIiBjbGFzcz1cInN2Zy1pbmxpbmUtLWZhIGZhLXRpbWVzIGZhLXctMTEgRmlsdHJvX2ljb25fY2xvc2VfZmlsdHJvX18xeGx2NVwiIGlkPVwiY2xvc2UtbWFyY2EtJHtlc3RhZG9GaWx0cm8uc3ViY2F0ZWdvcmlhfVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0yNDIuNzIgMjU2bDEwMC4wNy0xMDAuMDdjMTIuMjgtMTIuMjggMTIuMjgtMzIuMTkgMC00NC40OGwtMjIuMjQtMjIuMjRjLTEyLjI4LTEyLjI4LTMyLjE5LTEyLjI4LTQ0LjQ4IDBMMTc2IDE4OS4yOCA3NS45MyA4OS4yMWMtMTIuMjgtMTIuMjgtMzIuMTktMTIuMjgtNDQuNDggMEw5LjIxIDExMS40NWMtMTIuMjggMTIuMjgtMTIuMjggMzIuMTkgMCA0NC40OEwxMDkuMjggMjU2IDkuMjEgMzU2LjA3Yy0xMi4yOCAxMi4yOC0xMi4yOCAzMi4xOSAwIDQ0LjQ4bDIyLjI0IDIyLjI0YzEyLjI4IDEyLjI4IDMyLjIgMTIuMjggNDQuNDggMEwxNzYgMzIyLjcybDEwMC4wNyAxMDAuMDdjMTIuMjggMTIuMjggMzIuMiAxMi4yOCA0NC40OCAwbDIyLjI0LTIyLjI0YzEyLjI4LTEyLjI4IDEyLjI4LTMyLjE5IDAtNDQuNDhMMjQyLjcyIDI1NnpcIj48L3BhdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbkNsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+bGltcGlhckZpbHRybygnc3ViY2F0ZWdvcmlhJykpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL3ZveSB1YmljYW5kbyBsb3MgZWxlbWVudG9zIGRlbnRybyBkZSBjYWRhIHBhZHJlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpdkl0ZW1NYXJjYS5hcHBlbmRDaGlsZChzcGFuSXRlbU1hcmNhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3SXRlbU1hcmNhLmFwcGVuZENoaWxkKGRpdkl0ZW1NYXJjYSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0l0ZW1NYXJjYS5hcHBlbmRDaGlsZChpY29uQ2xvc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL09idGVuZ28gZWwgcHJpbWVyIGl0ZW0gZGUgbGEgbGlzdGEgeSBsbyBlbGltaW5vLCBwYXJhIHRlbmVyIHNpZW1wcmUgbGEgbWlzbWEgY2FudGlkYWQgZGUgbWFyY2FzIGVuIGxhIGxpc3RhLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZmlyc3RJdGVtTWFyY2EgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjbGlzdGFNYXJjYWApLmNoaWxkcmVuWzBdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGxpc3RhTWFyY2FzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI2xpc3RhTWFyY2FgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpc3RhTWFyY2FzLnJlbW92ZUNoaWxkKGZpcnN0SXRlbU1hcmNhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vYWhvcmEgYWdyZWdvIGVsIGl0ZW0gY3JlYWRvIGEgbGEgbGlzdGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpc3RhTWFyY2FzLmFwcGVuZENoaWxkKG5ld0l0ZW1NYXJjYSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vbGEgcHJpbWVyYSB2ZXogcXVlIHNlIGNhcmdhIGVsIGNvbXBvbmVudGUsIGZpbHRyYW5kbyBlcyBmYWxzZSwgcG9yIGVzbyBwcmVndW50byBwYXJhIHF1ZSBubyBzZSBlamVjdXRhIGxhIGZ1bmNpb24gZGUgaXIgYSBmaWx0cmFyIGFwZW5hcyBzZSBtb250ZSBlbCBjb21wb25lbnRlLiBTaW5vIHF1ZSBzZSBlamVjdXRlIGN1YW5kbyBkZSB2ZXJkYWQgc2UgcXVpZXJhIGZpbHRyYXIuXHJcbiAgICAgICAgaWYoZXN0YWRvRmlsdHJvLmZpbHRyYW5kbyl7XHJcbiAgICAgICAgICAgIGxldCB1cmxGaWx0cm8gPSBhcm1hclVybEZpbHRybygpOy8vYXJtbyBsYSB1cmwgcXVlIG1hbmRvIGEgbGEgYXBpIHBhcmEgdHJhZXIgbG9zIHJlc3VsdGFkb3MgZGUgbG8gZmlsdHJhZG8uXHJcbiAgICAgICAgICAgIHByb3BzLnN1YnByb2R1Y3Rvc0ZpbHRyYXJQcm9kdWN0b3ModXJsRmlsdHJvKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGxpbXBpYXJGaWx0cm8gPSB0aXBvPT57XHJcbiAgICAgICAgc3dpdGNoICh0aXBvKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ2NhdGVnb3JpYSc6XHJcbiAgICAgICAgICAgICAgICBzZXRFc3RhZG9GaWx0cm8oe1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLmVzdGFkb0ZpbHRybyxcclxuICAgICAgICAgICAgICAgICAgICBjYXRlZ29yaWE6JydcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ3N1YmNhdGVnb3JpYSc6XHJcbiAgICAgICAgICAgICAgICBzZXRFc3RhZG9GaWx0cm8oe1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLmVzdGFkb0ZpbHRybyxcclxuICAgICAgICAgICAgICAgICAgICBzdWJjYXRlZ29yaWE6JydcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ21hcmNhJzpcclxuICAgICAgICAgICAgICAgIHNldEVzdGFkb0ZpbHRybyh7XHJcbiAgICAgICAgICAgICAgICAgICAgLi4uZXN0YWRvRmlsdHJvLFxyXG4gICAgICAgICAgICAgICAgICAgIG1hcmNhOicnXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgcHJvcHMuc3VicHJvZHVjdG9zVHJhZXJUb2RvcygpO1xyXG4gICAgICAgICAgICAgICAgc2V0RXN0YWRvRmlsdHJvKHtcclxuICAgICAgICAgICAgICAgICAgICBmaWx0cmFuZG86ZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcmlhOicnLFxyXG4gICAgICAgICAgICAgICAgICAgIHN1YmNhdGVnb3JpYTonJyxcclxuICAgICAgICAgICAgICAgICAgICBtYXJjYTonJyxcclxuICAgICAgICAgICAgICAgICAgICBidXNjYWRvcjonJ1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjbG9zZUZpbHRyb3NNb2JpbGUgPSAoKT0+e1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoRmlsdHJvU3R5bGUuZmlsdHJvc19fY29udGFuaWVyKVswXS5jbGFzc0xpc3QucmVtb3ZlKEZpbHRyb1N0eWxlLnNob3dfZmlsdHJvcyk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgYXJtYXJVcmxGaWx0cm8gPSAoKT0+e1xyXG4gICAgICAgIGxldCB1cmwgPSAnZmlsdHJhcic7XHJcbiAgICAgICAgLy9zaSBidXNjYWRvciB2aWVuZSB0cnVlLCBlcyBwb3JxdWUgdmllbmUgZGVzZGUgZWwgYnVzY2Fkb3IgZGVsIG1lbnUgbyBtb2RhbCBkZSBidXNjYWRvcihtb2JpbGUpLlxyXG4gICAgICAgIGlmKGVzdGFkb0ZpbHRyby5idXNjYWRvciE9PScnKSByZXR1cm4gdXJsICs9IGA/YnVzY2FyPSR7ZXN0YWRvRmlsdHJvLmJ1c2NhZG9yfWA7XHJcblxyXG4gICAgICAgIGxldCBjYXRlZ29yaWEgPSBlc3RhZG9GaWx0cm8uY2F0ZWdvcmlhLFxyXG4gICAgICAgICAgICBzdWJjYXRlZ29yaWEgPSBlc3RhZG9GaWx0cm8uc3ViY2F0ZWdvcmlhLFxyXG4gICAgICAgICAgICBtYXJjYSA9IGVzdGFkb0ZpbHRyby5tYXJjYTtcclxuICAgICAgICBcclxuICAgICAgICBpZihjYXRlZ29yaWEgJiYgY2F0ZWdvcmlhICE9PSAnJyl7XHJcbiAgICAgICAgICAgIHVybCArPSBgP2NhdGVnb3JpYT0ke2VzdGFkb0ZpbHRyby5jYXRlZ29yaWF9YDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoZXN0YWRvRmlsdHJvLnN1YmNhdGVnb3JpYSAmJiBlc3RhZG9GaWx0cm8uc3ViY2F0ZWdvcmlhICE9PSAnJyl7XHJcbiAgICAgICAgICAgIGlmKGNhdGVnb3JpYSE9PSAnJyl7XHJcbiAgICAgICAgICAgICAgICB1cmwgKz0gYCZzdWJjYXRlZ29yaWE9JHtlc3RhZG9GaWx0cm8uc3ViY2F0ZWdvcmlhfWA7IFxyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIHVybCArPSBgP3N1YmNhdGVnb3JpYT0ke2VzdGFkb0ZpbHRyby5zdWJjYXRlZ29yaWF9YDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZihtYXJjYSAmJiBtYXJjYSAhPT0gJycpe1xyXG4gICAgICAgICAgICBpZihjYXRlZ29yaWEgIT09ICcnICYmIHN1YmNhdGVnb3JpYSAhPT0gJycpe1xyXG4gICAgICAgICAgICAgICAgdXJsICs9IGA/bWFyY2E9JHtlc3RhZG9GaWx0cm8ubWFyY2F9YDtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICB1cmwgKz0gYCZtYXJjYT0ke2VzdGFkb0ZpbHRyby5tYXJjYX1gO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB1cmw7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc2hvd0ZpbHRyb3MgPSAoKT0+e1xyXG4gICAgICAgIGxldCBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShGaWx0cm9TdHlsZS5maWx0cm9zX19jb250YW5pZXIpWzBdO1xyXG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZShGaWx0cm9TdHlsZS5zaG93KTtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaWNvbkZpbHRyb0NvbnRhaW5lcicpLmNsYXNzTGlzdC50b2dnbGUoRmlsdHJvU3R5bGUucm90YXIpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e0ZpbHRyb1N0eWxlLmZpbHRyb3NfX2NvbnRhbmllcn0+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtGaWx0cm9TdHlsZS5idG5fY2xvc2VfZmlsdHJvfSBvbkNsaWNrPXtzaG93RmlsdHJvc30+XHJcbiAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGlkPVwiaWNvbkZpbHRyb0NvbnRhaW5lclwiIGljb249e2ZhQ2hldnJvblJpZ2h0fS8+XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgeyhwcm9wcy5jYXRlZ29yaWFzUmVkdWNlci5jYXRlZ29yaWFzLmxlbmd0aD09MCB8fCBwcm9wcy5zdWJjYXRlZ29yaWFSZWR1Y2VyLnN1YmNhdGVnb3JpYXMubGVuZ3RoPT0wIHx8IHByb3BzLm1hcmNhc1JlZHVjZXIubWFyY2FzLmxlbmd0aD09MCk/PExvYWRlci8+OlxyXG4gICAgICAgICAgICAgICAgICAgIDw+ICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgeyhlc3RhZG9GaWx0cm8uZmlsdHJhbmRvKT88YnV0dG9uIGNsYXNzTmFtZT1cImJvdG9uIGJnLXllbGxvdyBtYi0zXCIgb25DbGljaz17bGltcGlhckZpbHRyb30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhQnJvb219Lz4gTGltcGlhciBGaWx0cm9zXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPjpudWxsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhVGltZXN9IGNsYXNzTmFtZT17RmlsdHJvU3R5bGUuY2VycmFyX2ZpbHRyb19tb2JpbGV9IG9uQ2xpY2s9e2Nsb3NlRmlsdHJvc01vYmlsZX0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPXtGaWx0cm9TdHlsZS50aXR1bG9fZmlsdHJvc30+TWFzY290YTwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9e0ZpbHRyb1N0eWxlLmxpc3RhfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wcy5jYXRlZ29yaWFzUmVkdWNlci5jYXRlZ29yaWFzLm1hcChjYXQ9PihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17Y2F0LmlkQ2F0ZWdvcmlhfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtGaWx0cm9TdHlsZS5pdGVtX2ZpbHRyb30gbmFtZT17YGNhdGVnb3JpYS0ke2NhdC5pZENhdGVnb3JpYX1gfSBvbkNsaWNrPXsoKT0+YWN0aXZhckZpbHRybygnY2F0ZWdvcmlhJyxgJHtjYXQuaWRDYXRlZ29yaWF9YCl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtbXV0ZWRcIj57Y2F0LmNhdGVnb3JpYX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFUaW1lc30gY2xhc3NOYW1lPXtGaWx0cm9TdHlsZS5pY29uX2Nsb3NlX2ZpbHRybyArICcgJyArIGBkLW5vbmVgfSBvbkNsaWNrPXsoKT0+bGltcGlhckZpbHRybygnY2F0ZWdvcmlhJyl9IGlkPXtgY2xvc2UtY2F0ZWdvcmlhLSR7Y2F0LmlkQ2F0ZWdvcmlhfWB9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9e0ZpbHRyb1N0eWxlLnRpdHVsb19maWx0cm9zfT5BbGltZW50b3M8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPXtGaWx0cm9TdHlsZS5saXN0YX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHMuc3ViY2F0ZWdvcmlhUmVkdWNlci5zdWJjYXRlZ29yaWFzLm1hcChzYz0+KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtzYy5pZFN1YkNhdGVnb3JpYX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17RmlsdHJvU3R5bGUuaXRlbV9maWx0cm99IG5hbWU9e2BzdWJjYXRlZ29yaWEtJHtzYy5pZFN1YkNhdGVnb3JpYX1gfSBvbkNsaWNrPXsoKT0+YWN0aXZhckZpbHRybygnc3ViY2F0ZWdvcmlhJyxgJHtzYy5pZFN1YkNhdGVnb3JpYX1gKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1tdXRlZFwiPntzYy5zdWJjYXRlZ29yaWF9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhVGltZXN9IGNsYXNzTmFtZT17RmlsdHJvU3R5bGUuaWNvbl9jbG9zZV9maWx0cm8gKyAnICcgKyBgZC1ub25lYH0gb25DbGljaz17KCk9PmxpbXBpYXJGaWx0cm8oJ3N1YmNhdGVnb3JpYScpfSBpZD17YGNsb3NlLSR7YHN1YmNhdGVnb3JpYS0ke3NjLmlkU3ViQ2F0ZWdvcmlhfWB9YH0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPXtGaWx0cm9TdHlsZS50aXR1bG9fZmlsdHJvc30+TWFyY2E8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dWwgaWQ9XCJsaXN0YU1hcmNhXCIgY2xhc3NOYW1lPXtGaWx0cm9TdHlsZS5zaW5Cb3JkZXJCb3R0b20rICcgJyArIEZpbHRyb1N0eWxlLmxpc3RhfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wcy5tYXJjYXNSZWR1Y2VyLm1hcmNhcy5tYXAoKG1hcmNhLGtleSk9PihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGtleT4zKT9mYWxzZTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17bWFyY2EuaWRNYXJjYX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17RmlsdHJvU3R5bGUuaXRlbV9maWx0cm99IG5hbWU9e2BtYXJjYS0ke21hcmNhLmlkTWFyY2F9YH0gb25DbGljaz17KCk9PmFjdGl2YXJGaWx0cm8oJ21hcmNhJyxgJHttYXJjYS5pZE1hcmNhfWApfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkXCI+e21hcmNhLm1hcmNhfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVRpbWVzfSBjbGFzc05hbWU9e0ZpbHRyb1N0eWxlLmljb25fY2xvc2VfZmlsdHJvICsgJyAnICsgYGQtbm9uZWB9IG9uQ2xpY2s9eygpPT5saW1waWFyRmlsdHJvKCdtYXJjYScpfSBpZD17YGNsb3NlLW1hcmNhLSR7bWFyY2EuaWRNYXJjYX1gfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKT0+c2V0TW9kYWxJc09wZW4odHJ1ZSl9IGNsYXNzTmFtZT1cImJvdG9uIGJnLWdyaXNcIj5WZXIgdG9kYXM8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIHsoIW1vZGFsSXNPcGVuKT9udWxsOlxyXG4gICAgICAgICAgICAgICAgPE1vZGFsIGNsb3NlTW9kYWw9e29uQ2xvc2VNb2RhbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPE1vZGFsTWFyY2EgY2xvc2VNb2RhbD17b25DbG9zZU1vZGFsfSBhY3RpdmFyRmlsdHJvPXthY3RpdmFyRmlsdHJvfS8+XHJcbiAgICAgICAgICAgICAgICA8L01vZGFsPlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoe21hcmNhc1JlZHVjZXIsc3VicHJvZHVjdG9zUmVkdWNlcixjYXRlZ29yaWFzUmVkdWNlcixzdWJjYXRlZ29yaWFSZWR1Y2VyfSk9PntcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbWFyY2FzUmVkdWNlcixcclxuICAgICAgICBzdWJwcm9kdWN0b3NSZWR1Y2VyLFxyXG4gICAgICAgIGNhdGVnb3JpYXNSZWR1Y2VyLFxyXG4gICAgICAgIHN1YmNhdGVnb3JpYVJlZHVjZXJcclxuICAgIH07XHJcbn1cclxuXHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IHtcclxuICAgIG1hcmNhc1RyYWVyVG9kYXMsXHJcbiAgICBzdWJwcm9kdWN0b3NGaWx0cmFyUHJvZHVjdG9zLFxyXG4gICAgc3VicHJvZHVjdG9zVHJhZXJUb2RvcyxcclxuICAgIGNhdGVnb3JpYXNUcmFlclRvZGFzLFxyXG4gICAgc3ViY2F0ZWdvcmlhVHJhZXJUb2Rhc1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcyxtYXBEaXNwYXRjaFRvUHJvcHMpKEZpbHRybyk7Il0sInNvdXJjZVJvb3QiOiIifQ==