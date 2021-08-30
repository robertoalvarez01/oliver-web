"use strict";
exports.id = 535;
exports.ids = [535];
exports.modules = {

/***/ 7743:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "traerTodas": () => (/* binding */ traerTodas)
/* harmony export */ });
/* harmony import */ var _config_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1130);
/* harmony import */ var _types_categoriasTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8608);


const traerTodas = () => async dispatch => {
  dispatch({
    type: _types_categoriasTypes__WEBPACK_IMPORTED_MODULE_0__/* .LOADING */ .br
  });

  try {
    return fetch(`${_config_index__WEBPACK_IMPORTED_MODULE_1__/* .API */ .bl}/categorias`).then(res => res.json()).then(data => {
      const categorias = data.data;
      dispatch({
        type: _types_categoriasTypes__WEBPACK_IMPORTED_MODULE_0__/* .TRAER_TODAS */ .eX,
        payload: categorias
      });
    }).catch(err => {
      dispatch({
        type: _types_categoriasTypes__WEBPACK_IMPORTED_MODULE_0__/* .ERROR */ .pn,
        payload: err
      });
    });
  } catch (error) {
    dispatch({
      type: _types_categoriasTypes__WEBPACK_IMPORTED_MODULE_0__/* .ERROR */ .pn,
      payload: error
    });
  }
};

/***/ }),

/***/ 4788:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "traerTodas": () => (/* binding */ traerTodas)
/* harmony export */ });
/* harmony import */ var _config_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1130);
/* harmony import */ var _types_marcasTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6788);


const traerTodas = () => async dispatch => {
  dispatch({
    type: _types_marcasTypes__WEBPACK_IMPORTED_MODULE_0__/* .LOADING */ .br
  });

  try {
    return fetch(`${_config_index__WEBPACK_IMPORTED_MODULE_1__/* .API */ .bl}/marcas`).then(res => res.json()).then(data => {
      const marcas = data.data;
      dispatch({
        type: _types_marcasTypes__WEBPACK_IMPORTED_MODULE_0__/* .TRAER_TODAS */ .eX,
        payload: marcas
      });
    }).catch(err => {
      dispatch({
        type: _types_marcasTypes__WEBPACK_IMPORTED_MODULE_0__/* .ERROR */ .pn,
        payload: err
      });
    });
  } catch (error) {
    dispatch({
      type: _types_marcasTypes__WEBPACK_IMPORTED_MODULE_0__/* .ERROR */ .pn,
      payload: error
    });
  }
};

/***/ }),

/***/ 8608:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "eX": () => (/* binding */ TRAER_TODAS),
/* harmony export */   "br": () => (/* binding */ LOADING),
/* harmony export */   "pn": () => (/* binding */ ERROR)
/* harmony export */ });
const TRAER_TODAS = 'categorias_traer_todas';
const LOADING = 'categorias_loading';
const ERROR = 'categorias_error';


/***/ }),

/***/ 6788:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "eX": () => (/* binding */ TRAER_TODAS),
/* harmony export */   "br": () => (/* binding */ LOADING),
/* harmony export */   "pn": () => (/* binding */ ERROR)
/* harmony export */ });
const TRAER_TODAS = 'marca_traer_todas';
const LOADING = 'marca_loading';
const ERROR = 'marca_error';


/***/ })

};
;