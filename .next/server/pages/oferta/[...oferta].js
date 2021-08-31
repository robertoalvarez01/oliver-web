"use strict";
(() => {
var exports = {};
exports.id = 31;
exports.ids = [31];
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

/***/ 2:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _oferta_)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./src/components/Head.js
var Head = __webpack_require__(2642);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(79);
// EXTERNAL MODULE: ./store/actions/ofertasActions.js
var ofertasActions = __webpack_require__(1718);
// EXTERNAL MODULE: ./src/components/Loader/index.js
var Loader = __webpack_require__(5500);
// EXTERNAL MODULE: ./src/components/Promociones/index.js
var Promociones = __webpack_require__(7438);
// EXTERNAL MODULE: ./src/components/BotonWhatsApp/index.js
var BotonWhatsApp = __webpack_require__(6081);
// EXTERNAL MODULE: ./src/components/Footer/index.jsx + 2 modules
var Footer = __webpack_require__(5546);
// EXTERNAL MODULE: ./config/index.js
var config = __webpack_require__(1130);
// EXTERNAL MODULE: ./src/components/Error.js
var Error = __webpack_require__(3687);
// EXTERNAL MODULE: ./src/components/ProductoSingle/sliderFotos.jsx
var sliderFotos = __webpack_require__(8280);
// EXTERNAL MODULE: external "@fortawesome/free-solid-svg-icons"
var free_solid_svg_icons_ = __webpack_require__(887);
// EXTERNAL MODULE: external "@fortawesome/react-fontawesome"
var react_fontawesome_ = __webpack_require__(799);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(9914);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: ./helpers/index.js
var helpers = __webpack_require__(3005);
;// CONCATENATED MODULE: external "moment"
const external_moment_namespaceObject = require("moment");
var external_moment_default = /*#__PURE__*/__webpack_require__.n(external_moment_namespaceObject);
;// CONCATENATED MODULE: ./src/components/Promociones/detalle.jsx












const DetalleOferta = props => {
  const {
    ofertasReducer: {
      oferta: {
        descripcion,
        productos,
        validoHasta,
        titulo
      }
    }
  } = props;
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("section", {
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "d-flex align-items-center justify-content-between",
      children: /*#__PURE__*/jsx_runtime_.jsx(Nombre, {
        children: titulo
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("hr", {}), /*#__PURE__*/jsx_runtime_.jsx(Desc, {
      children: descripcion
    }), /*#__PURE__*/jsx_runtime_.jsx("h3", {
      children: "Productos compatibles con la oferta"
    }), /*#__PURE__*/jsx_runtime_.jsx(Listado, {
      children: productos.map(prd => /*#__PURE__*/jsx_runtime_.jsx("li", {
        children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: `${config/* PUBLIC_URL */.fQ}/producto/${(0,helpers/* slug */.oF)(prd.producto)}/${prd.idProducto}`,
          children: prd.subProducto
        })
      }, prd.id))
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(OfertaValida, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(react_fontawesome_.FontAwesomeIcon, {
        icon: free_solid_svg_icons_.faStar
      }), "Oferta v\xE1lida hasta ", external_moment_default()(validoHasta).format('DD-MM-YYYY')]
    })]
  });
};

const Nombre = external_styled_components_default().h1.withConfig({
  displayName: "detalle__Nombre",
  componentId: "sc-1c09lvx-0"
})(["font-weight:bold;color:var(--oliver);font-size:30px;font-family:'Quicksand',sans-serif;"]);
const Desc = external_styled_components_default().p.withConfig({
  displayName: "detalle__Desc",
  componentId: "sc-1c09lvx-1"
})(["font-size:17px;font-family:'Quicksand',sans-serif;"]);
const Listado = external_styled_components_default().ul.withConfig({
  displayName: "detalle__Listado",
  componentId: "sc-1c09lvx-2"
})(["list-style:none;> li > a{color:gray;font-weight:bold;font-family:'Quicksand',sans-serif;}"]);
const OfertaValida = external_styled_components_default().span.withConfig({
  displayName: "detalle__OfertaValida",
  componentId: "sc-1c09lvx-3"
})(["display:flex;align-items:center;color:var(--oliver);font-weight:bold;> svg{margin-right:10px;width:20px;}"]);

const mapStateToProps = ({
  carritoReducer,
  ventaReducer,
  ofertasReducer
}) => {
  return {
    carritoReducer,
    ventaReducer,
    ofertasReducer
  };
};

const mapDispatchToProps = {};
/* harmony default export */ const detalle = ((0,external_react_redux_.connect)(mapStateToProps, mapDispatchToProps)(DetalleOferta));
;// CONCATENATED MODULE: ./pages/oferta/[...oferta].js
















const Oferta = props => {
  const {
    ofertasReducer: {
      error,
      oferta
    },
    notFound,
    data
  } = props;
  (0,external_react_.useEffect)(() => {
    if (document.getElementsByTagName('body')[0]) {
      document.getElementsByTagName('body')[0].style.overflowY = 'scroll';
    }

    if (!notFound) {
      props.guardarOferta(data);
    }
  }, []);
  if (notFound) return /*#__PURE__*/jsx_runtime_.jsx(Error/* default */.Z, {
    message: "No se ha podido encontrar el producto que usted busca."
  });
  if (error) return /*#__PURE__*/jsx_runtime_.jsx(Error/* default */.Z, {
    message: "error"
  });
  if (!oferta) return /*#__PURE__*/jsx_runtime_.jsx(Loader/* default */.Z, {});
  const {
    descripcion
  } = oferta;
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(Head/* default */.Z, {
      title: descripcion,
      metadesc: descripcion
    }), /*#__PURE__*/jsx_runtime_.jsx("section", {
      className: "py-5",
      style: {
        backgroundColor: 'white'
      },
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "wrapper__producto container mb-5",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "row",
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "col-12 col-sm-6",
            children: /*#__PURE__*/jsx_runtime_.jsx(sliderFotos/* default */.Z, {
              imagenes: [props.data.foto],
              oferta: true,
              descripcion: descripcion
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "col-12 col-sm-6 pt-3",
            children: /*#__PURE__*/jsx_runtime_.jsx(detalle, {})
          })]
        })
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "container",
      children: /*#__PURE__*/jsx_runtime_.jsx(Promociones/* default */.Z, {})
    }), /*#__PURE__*/jsx_runtime_.jsx(BotonWhatsApp/* default */.Z, {}), /*#__PURE__*/jsx_runtime_.jsx(Footer/* default */.Z, {})]
  });
};

Oferta.getInitialProps = async ({
  query
}) => {
  let idOferta = query.oferta[1];
  const res = await fetch(`${config/* API */.bl}/ofertas/${idOferta}`);
  const data = await res.json();

  if (res.status !== 200) {
    return {
      notFound: true,
      data: null
    };
  }

  return {
    notFound: false,
    data: data.data[0]
  };
};

const _oferta_mapStateToProps = ({
  ofertasReducer
}) => {
  return {
    ofertasReducer
  };
};

/* harmony default export */ const _oferta_ = ((0,external_react_redux_.connect)(_oferta_mapStateToProps, ofertasActions)(Oferta));

/***/ }),

/***/ 2953:
/***/ ((module) => {

module.exports = require("@fortawesome/free-brands-svg-icons");

/***/ }),

/***/ 887:
/***/ ((module) => {

module.exports = require("@fortawesome/free-solid-svg-icons");

/***/ }),

/***/ 799:
/***/ ((module) => {

module.exports = require("@fortawesome/react-fontawesome");

/***/ }),

/***/ 9325:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 5378:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 7162:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 8773:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 2248:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 9372:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 665:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 2747:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 333:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 3456:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 7620:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 701:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 6731:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 9297:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 2268:
/***/ ((module) => {

module.exports = require("react-dom");

/***/ }),

/***/ 9290:
/***/ ((module) => {

module.exports = require("react-lazy-load-image-component");

/***/ }),

/***/ 79:
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ 5282:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 4111:
/***/ ((module) => {

module.exports = require("slugify");

/***/ }),

/***/ 9914:
/***/ ((module) => {

module.exports = require("styled-components");

/***/ }),

/***/ 3289:
/***/ ((module) => {

module.exports = require("styled-jsx/style");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [664,642,500,675,542,353,438,294], () => (__webpack_exec__(2)));
module.exports = __webpack_exports__;

})();