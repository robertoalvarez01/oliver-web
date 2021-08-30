"use strict";
exports.id = 88;
exports.ids = [88];
exports.modules = {

/***/ 3088:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "traerProductos": () => (/* binding */ traerProductos),
/* harmony export */   "agregarProducto": () => (/* binding */ agregarProducto),
/* harmony export */   "eliminarProducto": () => (/* binding */ eliminarProducto)
/* harmony export */ });
/* harmony import */ var _types_carritoTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7515);
//import {API} from '../config/index';

const traerProductos = () => async dispatch => {
  dispatch({
    type: _types_carritoTypes__WEBPACK_IMPORTED_MODULE_0__/* .LOADING */ .br
  });

  try {
    const productos = await JSON.parse(localStorage.getItem('carrito'));
    let total = 0;

    if (!productos) {
      return;
    }

    productos.forEach(prd => {
      total += parseFloat(prd.precio * prd.cantidad);
    });
    let cantidad = productos.length;
    let payloadData = {
      productos,
      total,
      cantidad
    };
    return dispatch({
      type: _types_carritoTypes__WEBPACK_IMPORTED_MODULE_0__/* .TRAER_PRODUCTOS */ .Z1,
      payload: payloadData
    });
  } catch (error) {
    return dispatch({
      type: _types_carritoTypes__WEBPACK_IMPORTED_MODULE_0__/* .ERROR */ .pn,
      payload: error.message
    });
  }
};
const agregarProducto = producto => async (dispatch, getState) => {
  dispatch({
    type: _types_carritoTypes__WEBPACK_IMPORTED_MODULE_0__/* .LOADING */ .br
  });

  try {
    //productos que hay en el reducer
    let productos = await JSON.parse(localStorage.getItem('carrito'));

    if (!productos) {
      productos = [];
    }

    let listProductosUpgrade;
    let productoRepetido = productos.filter(res => res.idSubProducto == producto.idSubProducto);

    if (productoRepetido.length > 0) {
      //si se intenta agregar de nuevo el mismo producto, se suma la cantidad, no todo el producto.
      productoRepetido[0].cantidad = productoRepetido[0].cantidad + producto.cantidad;
      let restantes = productos.filter(newRes => newRes.idSubProducto != productoRepetido[0].idSubProducto);

      if (restantes.length > 0) {
        listProductosUpgrade = [...restantes, productoRepetido[0]];
      } else {
        listProductosUpgrade = [productoRepetido[0]];
      }
    } else {
      listProductosUpgrade = [...productos, producto];
    } //actualizo localstorage


    localStorage.setItem('carrito', JSON.stringify(listProductosUpgrade)); //calculo el subtotal

    const prds = JSON.parse(localStorage.getItem('carrito'));
    let total = 0;
    prds.forEach(prd => {
      total += parseFloat(prd.precio * prd.cantidad);
    });
    let cantidad = listProductosUpgrade.length;
    let payloadData = {
      listProductosUpgrade,
      total,
      cantidad
    };
    setTimeout(() => {
      dispatch({
        type: _types_carritoTypes__WEBPACK_IMPORTED_MODULE_0__/* .AGREGAR_PRODUCTO */ .c0,
        payload: payloadData
      });
    }, 1500);
  } catch (error) {
    console.log(error);
    dispatch({
      type: _types_carritoTypes__WEBPACK_IMPORTED_MODULE_0__/* .ERROR */ .pn,
      payload: error.message
    });
  }
};
const eliminarProducto = idSubProducto => async (dispatch, getState) => {
  dispatch({
    type: _types_carritoTypes__WEBPACK_IMPORTED_MODULE_0__/* .LOADING */ .br
  });

  try {
    const {
      productos
    } = getState().carritoReducer; //filtro los productos que no tengan el idProducto que se recibió. entonces elimino ese producto y actualizo el reducer.

    const newProductos = productos.filter(newArray => newArray.idSubProducto !== idSubProducto); //console.log(newProductos);

    localStorage.setItem('carrito', JSON.stringify(newProductos)); //calculo el subtotal

    const prds = JSON.parse(localStorage.getItem('carrito'));
    let total = 0;
    prds.forEach(prd => {
      total += parseFloat(prd.precio * prd.cantidad);
    });
    let payloadData = {
      newProductos,
      total,
      cantidad: prds.length
    };
    dispatch({
      type: _types_carritoTypes__WEBPACK_IMPORTED_MODULE_0__/* .ELIMINAR_PRODUCTO */ .tA,
      payload: payloadData
    });
  } catch (error) {
    dispatch({
      type: _types_carritoTypes__WEBPACK_IMPORTED_MODULE_0__/* .ERROR */ .pn,
      payload: error
    });
  }
};

/***/ }),

/***/ 7515:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z1": () => (/* binding */ TRAER_PRODUCTOS),
/* harmony export */   "c0": () => (/* binding */ AGREGAR_PRODUCTO),
/* harmony export */   "tA": () => (/* binding */ ELIMINAR_PRODUCTO),
/* harmony export */   "br": () => (/* binding */ LOADING),
/* harmony export */   "pn": () => (/* binding */ ERROR)
/* harmony export */ });
const TRAER_PRODUCTOS = 'carrito_traer_todos_carrito';
const AGREGAR_PRODUCTO = 'carrito_agregar_producto';
const ELIMINAR_PRODUCTO = 'carrito_eliminar_producto';
const LOADING = 'carrito_loading';
const ERROR = 'carrito_error';


/***/ })

};
;