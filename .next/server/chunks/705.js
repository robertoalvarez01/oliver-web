"use strict";
exports.id = 705;
exports.ids = [705];
exports.modules = {

/***/ 6705:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "traerProductos": () => (/* binding */ traerProductos),
/* harmony export */   "traerMas": () => (/* binding */ traerMas),
/* harmony export */   "traerPorId": () => (/* binding */ traerPorId),
/* harmony export */   "traerPromociones": () => (/* binding */ traerPromociones),
/* harmony export */   "ordenarProductos": () => (/* binding */ ordenarProductos),
/* harmony export */   "aplicarFiltro": () => (/* binding */ aplicarFiltro),
/* harmony export */   "quitarFiltro": () => (/* binding */ quitarFiltro),
/* harmony export */   "restablecerFiltros": () => (/* binding */ restablecerFiltros),
/* harmony export */   "updatePaginacion": () => (/* binding */ updatePaginacion)
/* harmony export */ });
/* harmony import */ var _config_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1130);
/* harmony import */ var _helpers_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3005);
/* harmony import */ var _types_productosTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1387);



const traerProductos = () => async (dispatch, getState) => {
  dispatch({
    type: _types_productosTypes__WEBPACK_IMPORTED_MODULE_1__/* .LOADING */ .br
  });

  try {
    //obtengo el estado actualizado de los filtros
    const {
      filtrando,
      filtros: {
        categoria,
        subcategoria,
        marca,
        search,
        orden
      },
      paginacion: {
        desde,
        limiteMobile,
        limiteDesktop
      }
    } = getState().productosReducer;
    let url = `${_config_index__WEBPACK_IMPORTED_MODULE_2__/* .API */ .bl}/productos`;

    if (filtrando) {
      if (search.trim() !== '') {
        url += `/buscar?busqueda=${search}&`;
      } else {
        url += `/filtro/filtrar?`;

        if (categoria) {
          url += `categoria=${categoria}&`;
        }

        if (subcategoria) {
          url += `subcategoria=${subcategoria}&`;
        }

        if (marca) {
          url += `marca=${marca}&`;
        }
      }
    } else {
      url += '?';
    }

    url += `desde=${desde}&limite=${(0,_helpers_index__WEBPACK_IMPORTED_MODULE_0__/* .isMobile */ .tq)() ? limiteMobile : limiteDesktop}`; //console.log(url);

    const res = await fetch(url);
    const data = await res.json();
    return dispatch({
      type: _types_productosTypes__WEBPACK_IMPORTED_MODULE_1__/* .TRAER_TODOS */ .J7,
      payload: data.data
    });
  } catch (error) {
    dispatch({
      type: _types_productosTypes__WEBPACK_IMPORTED_MODULE_1__/* .ERROR */ .pn,
      payload: error
    });
  }
};
const traerMas = () => async (dispatch, getState) => {
  dispatch({
    type: _types_productosTypes__WEBPACK_IMPORTED_MODULE_1__/* .LOADING_MAS */ .ZJ
  });

  try {
    //obtengo el estado actualizado de los filtros
    const {
      productos,
      filtrando,
      filtros: {
        categoria,
        subcategoria,
        marca,
        search,
        orden
      },
      paginacion: {
        desde,
        limiteMobile,
        limiteDesktop
      }
    } = getState().productosReducer;
    let url = `${_config_index__WEBPACK_IMPORTED_MODULE_2__/* .API */ .bl}/productos`;

    if (filtrando) {
      if (search.trim() !== '') {
        url += `/buscar?busqueda=${search}&`;
      } else {
        url += `/filtro/filtrar?`;

        if (categoria) {
          url += `categoria=${categoria}&`;
        }

        if (subcategoria) {
          url += `subcategoria=${subcategoria}&`;
        }

        if (marca) {
          url += `marca=${marca}&`;
        }
      }
    } else {
      url += '?';
    }

    url += `desde=${desde}&limite=${(0,_helpers_index__WEBPACK_IMPORTED_MODULE_0__/* .isMobile */ .tq)() ? limiteMobile : limiteDesktop}`; //console.log(url)

    return fetch(url).then(res => res.json()).then(data => {
      if (data.data.length === 0) {
        dispatch({
          type: _types_productosTypes__WEBPACK_IMPORTED_MODULE_1__/* .PRODUCTOS_SIN_RESULTADO */ .JU
        });
        return;
      }

      let updateproductos = [...productos, ...data.data];
      dispatch({
        type: _types_productosTypes__WEBPACK_IMPORTED_MODULE_1__/* .TRAER_MAS */ .k,
        payload: updateproductos
      });
    });
  } catch (error) {
    dispatch({
      type: _types_productosTypes__WEBPACK_IMPORTED_MODULE_1__/* .ERROR */ .pn,
      payload: error
    });
  }
};
const traerPorId = data => async dispatch => {
  dispatch({
    type: _types_productosTypes__WEBPACK_IMPORTED_MODULE_1__/* .TRAER_UNO */ .JY,
    payload: data
  });
};
const traerPromociones = () => async dispatch => {
  dispatch({
    type: _types_productosTypes__WEBPACK_IMPORTED_MODULE_1__/* .LOADING */ .br
  });

  try {
    let url = `${_config_index__WEBPACK_IMPORTED_MODULE_2__/* .API */ .bl}/subproductos/ofertas?desde=0&limite=9`;

    if ((0,_helpers_index__WEBPACK_IMPORTED_MODULE_0__/* .isMobile */ .tq)()) {
      url = `${_config_index__WEBPACK_IMPORTED_MODULE_2__/* .API */ .bl}/subproductos/ofertas?desde=0&limite=6`;
    }

    return fetch(url).then(res => res.json()).then(data => {
      dispatch({
        type: _types_productosTypes__WEBPACK_IMPORTED_MODULE_1__/* .TRAER_OFERTAS */ .X,
        payload: data.data
      });
    });
  } catch (error) {
    dispatch({
      type: _types_productosTypes__WEBPACK_IMPORTED_MODULE_1__/* .ERROR */ .pn,
      payload: error.message
    });
  }
};
const ordenarProductos = productosOrdenados => async dispatch => {
  dispatch({
    type: _types_productosTypes__WEBPACK_IMPORTED_MODULE_1__/* .LOADING */ .br
  });

  try {
    dispatch({
      type: _types_productosTypes__WEBPACK_IMPORTED_MODULE_1__/* .ORDENAR_PRODUCTOS */ .UJ,
      payload: productosOrdenados
    });
  } catch (error) {
    dispatch({
      type: _types_productosTypes__WEBPACK_IMPORTED_MODULE_1__/* .ERROR */ .pn,
      payload: error
    });
  }
};
const aplicarFiltro = (tipo, valor) => dispatch => {
  switch (tipo) {
    case 'categoria':
      dispatch({
        type: _types_productosTypes__WEBPACK_IMPORTED_MODULE_1__/* .APLICAR_FILTRO_CATEGORIA */ .K$,
        payload: valor
      });
      break;

    case 'subcategoria':
      dispatch({
        type: _types_productosTypes__WEBPACK_IMPORTED_MODULE_1__/* .APLICAR_FILTRO_SUBCATEGORIA */ .h_,
        payload: valor
      });
      break;

    case 'marca':
      dispatch({
        type: _types_productosTypes__WEBPACK_IMPORTED_MODULE_1__/* .APLICAR_FILTRO_MARCA */ .Mo,
        payload: valor
      });
      break;

    case 'search':
      dispatch({
        type: _types_productosTypes__WEBPACK_IMPORTED_MODULE_1__/* .APLICAR_FILTRO_BUSCADOR */ .uI,
        payload: valor
      });
      break;

    case 'orden':
      dispatch({
        type: _types_productosTypes__WEBPACK_IMPORTED_MODULE_1__/* .APLICAR_FILTRO_ORDEN */ .xT,
        payload: valor
      });
      break;

    default:
      break;
  }
};
const quitarFiltro = tipo => (dispatch, getState) => {
  const {
    filtros: {
      categoria,
      subcategoria,
      marca,
      search,
      orden
    }
  } = getState().productosReducer;

  switch (tipo) {
    case 'categoria':
      if (!subcategoria && !marca) {
        dispatch({
          type: _types_productosTypes__WEBPACK_IMPORTED_MODULE_1__/* .PRODUCTOS_RESTABLECER_FILTROS */ .kT
        });
      } else {
        dispatch({
          type: _types_productosTypes__WEBPACK_IMPORTED_MODULE_1__/* .ELIMINAR_FILTRO_CATEGORIA */ .rv
        });
      }

      break;

    case 'subcategoria':
      if (!categoria && !marca) {
        dispatch({
          type: _types_productosTypes__WEBPACK_IMPORTED_MODULE_1__/* .PRODUCTOS_RESTABLECER_FILTROS */ .kT
        });
      } else {
        dispatch({
          type: _types_productosTypes__WEBPACK_IMPORTED_MODULE_1__/* .ELIMINAR_FILTRO_SUBCATEGORIA */ .WA
        });
      }

      break;

    case 'marca':
      if (!categoria && !subcategoria) {
        dispatch({
          type: _types_productosTypes__WEBPACK_IMPORTED_MODULE_1__/* .PRODUCTOS_RESTABLECER_FILTROS */ .kT
        });
      } else {
        dispatch({
          type: _types_productosTypes__WEBPACK_IMPORTED_MODULE_1__/* .ELIMINAR_FILTRO_MARCA */ .G6
        });
      }

      break;

    case 'buscador':
      dispatch({
        type: _types_productosTypes__WEBPACK_IMPORTED_MODULE_1__/* .ELIMINAR_FILTRO_BUSCADOR */ .I1
      });
      break;

    case 'orden':
      dispatch({
        type: _types_productosTypes__WEBPACK_IMPORTED_MODULE_1__/* .ELIMINAR_FILTRO_ORDEN */ .DS
      });
      break;

    default:
      break;
  }
};
const restablecerFiltros = () => dispatch => {
  //console.log('jeje')
  dispatch({
    type: _types_productosTypes__WEBPACK_IMPORTED_MODULE_1__/* .PRODUCTOS_RESTABLECER_FILTROS */ .kT
  });
};
const updatePaginacion = () => (dispatch, getState) => {
  const {
    paginacion
  } = getState().productosReducer;
  let desdeUpdated = (0,_helpers_index__WEBPACK_IMPORTED_MODULE_0__/* .isMobile */ .tq)() ? paginacion.desde + paginacion.limiteMobile : paginacion.desde + paginacion.limiteDesktop;
  dispatch({
    type: _types_productosTypes__WEBPACK_IMPORTED_MODULE_1__/* .PRODUCTOS_PAGINACION */ .Lo,
    payload: desdeUpdated
  });
};

/***/ })

};
;