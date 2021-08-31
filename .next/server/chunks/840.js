"use strict";
exports.id = 840;
exports.ids = [840];
exports.modules = {

/***/ 3005:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "oF": () => (/* binding */ slug),
/* harmony export */   "tq": () => (/* binding */ isMobile),
/* harmony export */   "g_": () => (/* binding */ ObtenerDia)
/* harmony export */ });
/* harmony import */ var slugify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4111);
/* harmony import */ var slugify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(slugify__WEBPACK_IMPORTED_MODULE_0__);


function slug(name) {
  return slugify__WEBPACK_IMPORTED_MODULE_0___default()(name, {
    lower: true
  }).replace(/[^\w\-]+/g, '');
}

function isMobile() {
  if (false) {}
}

function ObtenerDia(numberDay) {
  switch (numberDay) {
    case 1:
      return 'Lunes';

    case 2:
      return 'Martes';

    case 3:
      return 'Miercoles';

    case 4:
      return 'Jueves';

    case 5:
      return 'Viernes';

    case 6:
      return 'Sabado';

    case 7:
      return 'Domingo';

    default:
      break;
  }
}



/***/ }),

/***/ 1387:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "J7": () => (/* binding */ TRAER_TODOS),
/* harmony export */   "JY": () => (/* binding */ TRAER_UNO),
/* harmony export */   "br": () => (/* binding */ LOADING),
/* harmony export */   "pn": () => (/* binding */ ERROR),
/* harmony export */   "wW": () => (/* binding */ TRAER_PROMOCIONES),
/* harmony export */   "UJ": () => (/* binding */ ORDENAR_PRODUCTOS),
/* harmony export */   "O": () => (/* binding */ FILTRANDO),
/* harmony export */   "ZJ": () => (/* binding */ LOADING_MAS),
/* harmony export */   "k": () => (/* binding */ TRAER_MAS),
/* harmony export */   "X": () => (/* binding */ TRAER_OFERTAS),
/* harmony export */   "uI": () => (/* binding */ APLICAR_FILTRO_BUSCADOR),
/* harmony export */   "h_": () => (/* binding */ APLICAR_FILTRO_SUBCATEGORIA),
/* harmony export */   "xT": () => (/* binding */ APLICAR_FILTRO_ORDEN),
/* harmony export */   "Mo": () => (/* binding */ APLICAR_FILTRO_MARCA),
/* harmony export */   "K$": () => (/* binding */ APLICAR_FILTRO_CATEGORIA),
/* harmony export */   "I1": () => (/* binding */ ELIMINAR_FILTRO_BUSCADOR),
/* harmony export */   "WA": () => (/* binding */ ELIMINAR_FILTRO_SUBCATEGORIA),
/* harmony export */   "DS": () => (/* binding */ ELIMINAR_FILTRO_ORDEN),
/* harmony export */   "G6": () => (/* binding */ ELIMINAR_FILTRO_MARCA),
/* harmony export */   "rv": () => (/* binding */ ELIMINAR_FILTRO_CATEGORIA),
/* harmony export */   "kT": () => (/* binding */ PRODUCTOS_RESTABLECER_FILTROS),
/* harmony export */   "Lo": () => (/* binding */ PRODUCTOS_PAGINACION),
/* harmony export */   "JU": () => (/* binding */ PRODUCTOS_SIN_RESULTADO)
/* harmony export */ });
const TRAER_TODOS = 'producto_traer_todos';
const LOADING = 'producto_loading';
const ERROR = 'producto_error';
const TRAER_PROMOCIONES = 'producto_traer_promociones';
const ORDENAR_PRODUCTOS = 'producto_ordenarproductos';
const FILTRANDO = 'producto_filtrando';
const TRAER_UNO = 'producto_traeruno';
const LOADING_MAS = 'producto_loading_mas';
const TRAER_MAS = 'producto_traer_mas';
const TRAER_OFERTAS = 'producto_traer_ofertas';
const APLICAR_FILTRO_CATEGORIA = 'producto_filtro_categoria';
const APLICAR_FILTRO_SUBCATEGORIA = 'producto_filtro_subcategoria';
const APLICAR_FILTRO_MARCA = 'producto_filtro_marca';
const APLICAR_FILTRO_BUSCADOR = 'producto_filtro_buscador';
const APLICAR_FILTRO_ORDEN = 'producto_filtro_orden';
const ELIMINAR_FILTRO_CATEGORIA = 'producto_eliminar_filtro_categoria';
const ELIMINAR_FILTRO_SUBCATEGORIA = 'producto_eliminar_filtro_subcategoria';
const ELIMINAR_FILTRO_MARCA = 'producto_eliminar_filtro_marca';
const ELIMINAR_FILTRO_BUSCADOR = 'producto_eliminar_filtro_buscador';
const ELIMINAR_FILTRO_ORDEN = 'producto_eliminar_filtro_orden';
const PRODUCTOS_RESTABLECER_FILTROS = 'productos_restablecer_filtros';
const PRODUCTOS_PAGINACION = 'productos_paginacion';
const PRODUCTOS_SIN_RESULTADO = 'productos_sin_resultado';


/***/ })

};
;