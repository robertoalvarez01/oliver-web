"use strict";
exports.id = 341;
exports.ids = [341];
exports.modules = {

/***/ 6081:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1130);




const BotonWhatsapp = () => {
  const handleClick = () => {
    window.location.assign(`https://api.whatsapp.com/send?phone=+542304347008&text=Consulta desde pagina web`);
  };

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
    className: "btn-wpp",
    onClick: handleClick,
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
      src: `${_config__WEBPACK_IMPORTED_MODULE_2__/* .URL_CLOUD_STORAGE */ .mp}/assets/wpp.png`,
      className: "img-fluid",
      alt: "WhatsApp de Oliver PetShop"
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BotonWhatsapp);

/***/ }),

/***/ 2160:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_CardProducto)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(9914);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./src/components/CardProducto/style.js

const Card = external_styled_components_default().div.withConfig({
  displayName: "style__Card",
  componentId: "sc-1r4mmxg-0"
})(["background-color:white;padding:8px;height:430px;border-radius:10px;position:relative;cursor:pointer;margin:15px 0px;&:hover{-webkit-box-shadow:1px 2px 7px #2e2e2e;transition:all .5s ease;}@media(max-width:768px){padding:11px;height:320px;}"]);
const CardHeader = external_styled_components_default().div.withConfig({
  displayName: "style__CardHeader",
  componentId: "sc-1r4mmxg-1"
})(["height:70%;padding:0px 30px;@media(max-width:768px){height:50%;}>img{height:100%;width:100%;object-fit:contain;}"]);
const CardBody = external_styled_components_default().div.withConfig({
  displayName: "style__CardBody",
  componentId: "sc-1r4mmxg-2"
})(["padding:10px 0px 0px 0px;>h3{font-size:15px;}"]);
const Precio = external_styled_components_default().span.withConfig({
  displayName: "style__Precio",
  componentId: "sc-1r4mmxg-3"
})(["position:absolute;bottom:15px;font-size:25px;font-family:'Quicksand',sans-serif;color:var(--black);@media(max-width:768px){font-size:20px;}"]);
const Marca = external_styled_components_default().span.withConfig({
  displayName: "style__Marca",
  componentId: "sc-1r4mmxg-4"
})(["font-weight:600;color:var(--oliver);font-size:15px;"]);
const Cantidad = external_styled_components_default().span.withConfig({
  displayName: "style__Cantidad",
  componentId: "sc-1r4mmxg-5"
})(["background-color:#FFB347;padding:3px 6px;font-size:12px;font-weight:700;font-family:'Quicksand',sans-serif;border-radius:5px;color:black;float:right"]);
const Descuento = external_styled_components_default().span.withConfig({
  displayName: "style__Descuento",
  componentId: "sc-1r4mmxg-6"
})(["position:absolute;top:25px;left:5px;padding:5px 10px;font-size:12px;font-family:'Quicksand',sans-serif;border-radius:13px;background-color:var(--warning);color:white;"]);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./helpers/index.js
var helpers = __webpack_require__(3005);
// EXTERNAL MODULE: ./config/index.js
var config = __webpack_require__(1130);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
var router_default = /*#__PURE__*/__webpack_require__.n(router_);
// EXTERNAL MODULE: external "react-lazy-load-image-component"
var external_react_lazy_load_image_component_ = __webpack_require__(9290);
// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(3289);
var style_default = /*#__PURE__*/__webpack_require__.n(style_);
;// CONCATENATED MODULE: ./src/components/Loader/ImagenLoader.js





const ImagenLoader = () => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "jsx-3911565700" + " " + "text-center",
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "jsx-3911565700" + " " + "lds-ellipsis",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "jsx-3911565700"
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "jsx-3911565700"
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "jsx-3911565700"
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "jsx-3911565700"
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx((style_default()), {
      id: "3911565700",
      children: [".lds-ellipsis.jsx-3911565700{display:inline-block;position:relative;width:80px;height:80px;}", ".lds-ellipsis.jsx-3911565700 div.jsx-3911565700{position:absolute;top:33px;width:13px;height:13px;border-radius:50%;background:#FFB347;-webkit-animation-timing-function:cubic-bezier(0,1,1,0);animation-timing-function:cubic-bezier(0,1,1,0);}", ".lds-ellipsis.jsx-3911565700 div.jsx-3911565700:nth-child(1){left:8px;-webkit-animation:lds-ellipsis1-jsx-3911565700 0.6s infinite;animation:lds-ellipsis1-jsx-3911565700 0.6s infinite;}", ".lds-ellipsis.jsx-3911565700 div.jsx-3911565700:nth-child(2){left:8px;-webkit-animation:lds-ellipsis2-jsx-3911565700 0.6s infinite;animation:lds-ellipsis2-jsx-3911565700 0.6s infinite;}", ".lds-ellipsis.jsx-3911565700 div.jsx-3911565700:nth-child(3){left:32px;-webkit-animation:lds-ellipsis2-jsx-3911565700 0.6s infinite;animation:lds-ellipsis2-jsx-3911565700 0.6s infinite;}", ".lds-ellipsis.jsx-3911565700 div.jsx-3911565700:nth-child(4){left:56px;-webkit-animation:lds-ellipsis3-jsx-3911565700 0.6s infinite;animation:lds-ellipsis3-jsx-3911565700 0.6s infinite;}", "@-webkit-keyframes lds-ellipsis1-jsx-3911565700{0%{-webkit-transform:scale(0);-ms-transform:scale(0);transform:scale(0);}100%{-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);}}", "@keyframes lds-ellipsis1-jsx-3911565700{0%{-webkit-transform:scale(0);-ms-transform:scale(0);transform:scale(0);}100%{-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);}}", "@-webkit-keyframes lds-ellipsis3-jsx-3911565700{0%{-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);}100%{-webkit-transform:scale(0);-ms-transform:scale(0);transform:scale(0);}}", "@keyframes lds-ellipsis3-jsx-3911565700{0%{-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);}100%{-webkit-transform:scale(0);-ms-transform:scale(0);transform:scale(0);}}", "@-webkit-keyframes lds-ellipsis2-jsx-3911565700{0%{-webkit-transform:translate(0,0);-ms-transform:translate(0,0);transform:translate(0,0);}100%{-webkit-transform:translate(24px,0);-ms-transform:translate(24px,0);transform:translate(24px,0);}}", "@keyframes lds-ellipsis2-jsx-3911565700{0%{-webkit-transform:translate(0,0);-ms-transform:translate(0,0);transform:translate(0,0);}100%{-webkit-transform:translate(24px,0);-ms-transform:translate(24px,0);transform:translate(24px,0);}}"]
    })]
  });
};

/* harmony default export */ const Loader_ImagenLoader = (ImagenLoader);
;// CONCATENATED MODULE: ./src/components/CardProducto/index.js











const CardProducto = props => {
  const {
    prd,
    imagen
  } = props;
  const {
    0: isOferta,
    1: setIsOferta
  } = (0,external_react_.useState)(false);
  const {
    0: loadingImagen,
    1: setLoadingImagen
  } = (0,external_react_.useState)(true);
  (0,external_react_.useEffect)(() => {
    const {
      router
    } = (router_default());

    if (router.route == '/oferta/[...oferta]') {
      setIsOferta(true);
    }
  }, []);

  const procesarNombre = nombre => {
    let nombreProcesado = nombre;

    if ((0,helpers/* isMobile */.tq)()) {
      if (nombreProcesado.length > 20) {
        nombreProcesado = nombre.substring(0, 22) + '...';
      }
    } else {
      if (nombreProcesado.length > 45) {
        nombreProcesado = nombre.substring(0, 40) + '...';
      }
    }

    return nombreProcesado;
  };

  const handleLoad = e => {
    let imagen = e.target;
    setLoadingImagen(false);
    imagen.classList.remove('d-none');
  };

  const name = props.oferta ? prd.descripcion : prd.producto;
  const id = props.oferta ? prd.id : prd.idProducto;
  const uri = props.oferta ? 'oferta' : 'producto';
  return !isOferta ? /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
    href: `${config/* PUBLIC_URL */.fQ}/${uri}/${(0,helpers/* slug */.oF)(name)}/${id}`,
    children: /*#__PURE__*/jsx_runtime_.jsx("a", {
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(Card, {
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(CardHeader, {
          children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
            src: imagen,
            alt: "prd",
            className: "d-none",
            onLoad: handleLoad,
            lazy: "loading"
          }), loadingImagen ? /*#__PURE__*/jsx_runtime_.jsx(Loader_ImagenLoader, {}) : null]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(CardBody, {
          children: [/*#__PURE__*/jsx_runtime_.jsx(Marca, {
            children: props.oferta ? procesarNombre(prd.titulo) : prd.marca
          }), /*#__PURE__*/jsx_runtime_.jsx("h6", {
            className: "text-muted",
            children: procesarNombre(name)
          }), prd.precioFinal && prd.precioFinal > 0 ? /*#__PURE__*/(0,jsx_runtime_.jsxs)(Precio, {
            children: ["$ ", prd.precioFinal]
          }) : null]
        }), prd.descuento ? /*#__PURE__*/(0,jsx_runtime_.jsxs)(Descuento, {
          children: [prd.descuento, "% Off"]
        }) : null]
      })
    })
  }) : /*#__PURE__*/jsx_runtime_.jsx("a", {
    href: `${config/* PUBLIC_URL */.fQ}/${uri}/${(0,helpers/* slug */.oF)(name)}/${id}`,
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(Card, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(CardHeader, {
        children: /*#__PURE__*/jsx_runtime_.jsx(external_react_lazy_load_image_component_.LazyLoadImage, {
          src: imagen,
          alt: name,
          width: "100%",
          height: "100%"
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(CardBody, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(Marca, {
          children: props.oferta ? procesarNombre(prd.titulo) : prd.marca
        }), /*#__PURE__*/jsx_runtime_.jsx("h6", {
          className: "text-muted",
          children: procesarNombre(name)
        }), prd.precioFinal && prd.precioFinal > 0 ? /*#__PURE__*/(0,jsx_runtime_.jsxs)(Precio, {
          children: ["$ ", prd.precioFinal]
        }) : null]
      }), prd.descuento ? /*#__PURE__*/(0,jsx_runtime_.jsxs)(Descuento, {
        children: [prd.descuento, "% Off"]
      }) : null]
    })
  });
};

/* harmony default export */ const components_CardProducto = (CardProducto);

/***/ })

};
;