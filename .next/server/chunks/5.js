"use strict";
exports.id = 5;
exports.ids = [5];
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



/***/ })

};
;