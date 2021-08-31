"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 8501:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./src/components/Head.js
var Head = __webpack_require__(2642);
// EXTERNAL MODULE: external "reactstrap"
var external_reactstrap_ = __webpack_require__(6099);
// EXTERNAL MODULE: external "react-lazy-load-image-component"
var external_react_lazy_load_image_component_ = __webpack_require__(9290);
;// CONCATENATED MODULE: ./src/components/SliderPublicidad/index.js






const SliderPublicidad = ({
  banners
}) => {
  const {
    0: activeIndex,
    1: setActiveIndex
  } = (0,external_react_.useState)(0);
  const {
    0: animating,
    1: setAnimating
  } = (0,external_react_.useState)(false);
  const {
    0: duration,
    1: setDuration
  } = (0,external_react_.useState)(5000);

  const setNewDuration = index => {
    let tiempo = parseInt(banners[index].tiempo_slider) * 1000;
    setDuration(tiempo);
    return;
  };

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === banners.length - 1 ? 0 : activeIndex + 1;
    setNewDuration(nextIndex);
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? banners.length - 1 : activeIndex - 1;
    setNewDuration(nextIndex);
    setActiveIndex(nextIndex);
  };

  const goToIndex = newIndex => {
    if (animating) return;
    setNewDuration(newIndex);
    setActiveIndex(newIndex);
  };

  const slides = banners.map(item => {
    return /*#__PURE__*/jsx_runtime_.jsx(external_reactstrap_.CarouselItem, {
      onExiting: () => setAnimating(true),
      onExited: () => setAnimating(false),
      children: /*#__PURE__*/jsx_runtime_.jsx(external_react_lazy_load_image_component_.LazyLoadImage, {
        effect: "blur",
        src: item.url,
        alt: item.descripcion,
        width: "100%",
        height: "50%",
        style: {
          objectFit: 'cover'
        }
      })
    }, item.url);
  });
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_reactstrap_.Carousel, {
    activeIndex: activeIndex,
    next: next,
    previous: previous,
    interval: duration,
    children: [/*#__PURE__*/jsx_runtime_.jsx(external_reactstrap_.CarouselIndicators, {
      items: banners,
      activeIndex: activeIndex,
      onClickHandler: goToIndex
    }), slides, /*#__PURE__*/jsx_runtime_.jsx(external_reactstrap_.CarouselControl, {
      direction: "prev",
      directionText: "",
      onClickHandler: previous
    }), /*#__PURE__*/jsx_runtime_.jsx(external_reactstrap_.CarouselControl, {
      direction: "next",
      directionText: "",
      onClickHandler: next
    })]
  });
};

/* harmony default export */ const components_SliderPublicidad = (SliderPublicidad);
// EXTERNAL MODULE: ./src/components/Promociones/index.js
var Promociones = __webpack_require__(7438);
// EXTERNAL MODULE: ./helpers/index.js
var helpers = __webpack_require__(3005);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(9914);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./src/components/CardCategoria/index.js








const CardCategoria = ({
  categoria
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Card, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(external_react_lazy_load_image_component_.LazyLoadImage, {
      src: categoria.foto,
      alt: categoria.categoria,
      className: "mb-2 img-fluid",
      style: {
        objectFit: 'contain'
      },
      effect: "blur"
    }), /*#__PURE__*/jsx_runtime_.jsx("h6", {
      className: "",
      children: categoria.categoria
    }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
      href: `productos/${(0,helpers/* slug */.oF)(`${categoria.categoria}`)}/${categoria.idCategoria}?type=categoria`,
      children: /*#__PURE__*/jsx_runtime_.jsx("button", {
        className: "boton bg-outline-yellow",
        children: "Ver todos"
      })
    })]
  });
};

const Card = external_styled_components_default().div.withConfig({
  displayName: "CardCategoria__Card",
  componentId: "sc-1a91w9r-0"
})(["padding:30px 30px;-webkit-box-shadow:1px 2px 10px #f39512;background-color:white;text-align:center;>button{background-color:white;color:var(--oliver);border:1px solid var(--oliver);width:100%;transition:all .5s ease;&:hover{background-color:var(--oliver);color:white;}}>h6{color:var(--oliver);}@media(max-width:768px){margin:0px 0px 15px 0px;padding:18px 15px;}"]);
/* harmony default export */ const components_CardCategoria = (CardCategoria);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(79);
// EXTERNAL MODULE: ./store/actions/categoriasAction.js
var categoriasAction = __webpack_require__(7743);
;// CONCATENATED MODULE: ./src/components/BannerCategorias/index.js








const BannerCategorias = props => {
  (0,external_react_.useEffect)(() => {
    getCategorias();
  }, []);

  const getCategorias = () => {
    if (props.categorias.length === 0) {
      props.traerTodas();
    }
  };

  return /*#__PURE__*/jsx_runtime_.jsx(Wrapper, {
    className: "wrapper__categorias bg-yellow",
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "container",
      children: [/*#__PURE__*/jsx_runtime_.jsx(Title, {
        className: "mb-5",
        children: "Compr\xE1 seg\xFAn tu categoria"
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "row",
        children: props.categorias.map((cat, key) => /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "col-6 col-md-3",
          children: /*#__PURE__*/jsx_runtime_.jsx(components_CardCategoria, {
            categoria: cat
          })
        }, key))
      })]
    })
  });
};

const Wrapper = external_styled_components_default().div.withConfig({
  displayName: "BannerCategorias__Wrapper",
  componentId: "sc-p8gb6u-0"
})(["background-color:#ffb347;padding:35px 0px;"]);
const Title = external_styled_components_default().h3.withConfig({
  displayName: "BannerCategorias__Title",
  componentId: "sc-p8gb6u-1"
})(["color:white;@media (max-width:780px){font-size:24px;text-align:center;}"]);

const mapStateToProps = reducers => {
  return reducers.categoriasReducer;
};

/* harmony default export */ const components_BannerCategorias = ((0,external_react_redux_.connect)(mapStateToProps, categoriasAction)(BannerCategorias));
// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(3289);
var style_default = /*#__PURE__*/__webpack_require__.n(style_);
;// CONCATENATED MODULE: external "isomorphic-fetch"
const external_isomorphic_fetch_namespaceObject = require("isomorphic-fetch");
// EXTERNAL MODULE: ./src/components/Loader/index.js
var Loader = __webpack_require__(5500);
;// CONCATENATED MODULE: ./src/components/CardMarca/index.js





const CardMarca = props => {
  return /*#__PURE__*/jsx_runtime_.jsx(CardMarca_Card, {
    children: /*#__PURE__*/jsx_runtime_.jsx(external_react_lazy_load_image_component_.LazyLoadImage, {
      effect: "blur",
      src: props.imagen,
      alt: props.imagen,
      width: "100%",
      height: "100%",
      style: {
        objectFit: 'contain'
      }
    })
  });
};

const CardMarca_Card = external_styled_components_default().div.withConfig({
  displayName: "CardMarca__Card",
  componentId: "sc-18p9nkv-0"
})(["-webkit-box-shadow:0 2px 5px rgb(163,161,161);height:160px;cursor:pointer;display:flex;align-items:center;justify-content:center;&:hover{filter:brightness(70%);transition:all .5s ease;border-radius:5px;}"]);
/* harmony default export */ const components_CardMarca = (CardMarca);
// EXTERNAL MODULE: ./store/actions/marcasActions.js
var marcasActions = __webpack_require__(4788);
;// CONCATENATED MODULE: ./src/components/BannerMarcas/index.js












const BannerMarcas = props => {
  (0,external_react_.useEffect)(() => {
    getMarcas();
  }, []);

  const getMarcas = () => {
    if (props.marcas.length === 0) {
      props.traerTodas();
    }
  };

  if (props.loading) {
    return /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "col-12 text-center",
      children: /*#__PURE__*/jsx_runtime_.jsx(Loader/* default */.Z, {})
    });
  }

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("section", {
    className: "jsx-928879361" + " " + "wrapper__marcas",
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "jsx-928879361" + " " + "container",
      children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
        className: "jsx-928879361" + " " + "mb-4",
        children: "Nuestras principales marcas"
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "jsx-928879361" + " " + "row",
        children: props.marcas.map((marca, key) => {
          if (key >= 12) return false;
          return /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: `productos/${(0,helpers/* slug */.oF)(`${marca.marca}`)}/${marca.idMarca}?type=marca`,
            children: /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "jsx-928879361" + " " + "col-6 col-md-3 col-lg-2 my-2",
              children: /*#__PURE__*/jsx_runtime_.jsx(components_CardMarca, {
                imagen: marca.imagen,
                marca: marca.marca,
                id: marca.idMarca
              })
            })
          }, marca.idMarca);
        })
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx((style_default()), {
      id: "928879361",
      children: ["h3.jsx-928879361{color:var(--oliver);}", ".wrapper__marcas.jsx-928879361{padding:35px 0px;}"]
    })]
  });
};

const BannerMarcas_mapStateToProps = reducers => {
  return reducers.marcasReducer;
};

/* harmony default export */ const components_BannerMarcas = ((0,external_react_redux_.connect)(BannerMarcas_mapStateToProps, marcasActions)(BannerMarcas));
// EXTERNAL MODULE: ./config/index.js
var config = __webpack_require__(1130);
;// CONCATENATED MODULE: ./src/components/FormContacto/index.js







const Swal = __webpack_require__(272);

const FormContacto = () => {
  const {
    0: email,
    1: setEmail
  } = (0,external_react_.useState)('');
  const {
    0: error,
    1: setError
  } = (0,external_react_.useState)(null);
  const {
    0: loading,
    1: setLoading
  } = (0,external_react_.useState)(false);

  const handleSubmit = async e => {
    e.preventDefault();

    if (email.trim() === '') {
      return setError('Completa el email');
    }

    setError(null);
    setLoading(true);
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const guardarEmail = await fetch(`${config/* API */.bl}/usuario-oferta/add`, {
      method: 'POST',
      headers,
      body: JSON.stringify({
        email
      })
    });
    setLoading(false);
    setEmail('');

    if (guardarEmail.status !== 200) {
      return Swal.fire('Upss...', 'Ha ocurrido un error en la operación, intentalo más tarde.', 'error');
    }

    return Swal.fire('Listo!', 'Tu email se ha registrado y cuando tengamos novedades importantes te estaremos avisando!', 'success');
  };

  if (error) {
    Swal.fire('Error', error, 'error').then(() => setError(''));
  }

  return /*#__PURE__*/jsx_runtime_.jsx(FormContacto_Wrapper, {
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "container",
      children: /*#__PURE__*/jsx_runtime_.jsx("form", {
        className: "form-group my-0",
        onSubmit: handleSubmit,
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "row align-items-center my-0 mx-0",
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "col-12 col-md-4 my-2",
            children: /*#__PURE__*/jsx_runtime_.jsx("h3", {
              className: "txt-yellow",
              children: "Quiero recibir ofertas!"
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "col-12 col-md-6 my-2",
            children: /*#__PURE__*/jsx_runtime_.jsx("input", {
              type: "email",
              name: "email",
              value: email,
              onChange: e => setEmail(e.target.value),
              className: "form-control",
              placeholder: "Email"
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "col-12 col-md-2 my-2",
            children: loading ? /*#__PURE__*/jsx_runtime_.jsx(Loader/* default */.Z, {}) : /*#__PURE__*/jsx_runtime_.jsx(Boton, {
              type: "submit",
              children: "Recibir ofertas"
            })
          })]
        })
      })
    })
  });
};

const FormContacto_Wrapper = external_styled_components_default().section.withConfig({
  displayName: "FormContacto__Wrapper",
  componentId: "sc-1ill5r2-0"
})(["background-color:white;padding:25px;>form>input{width:100%;background:0 0;border:none;box-shadow:none;border-bottom:1px solid #ffb347;padding-left:0;}@media (max-width:379px){>form>h3{text-align:center;font-size:25px;}}"]);
const Boton = external_styled_components_default().button.withConfig({
  displayName: "FormContacto__Boton",
  componentId: "sc-1ill5r2-1"
})(["background-color:white;color:var(--oliver);border:1px solid var(--oliver);width:100%;transition:all .5s ease;&:hover{background-color:var(--oliver);color:white;}"]);
/* harmony default export */ const components_FormContacto = (FormContacto);
// EXTERNAL MODULE: ./src/components/Footer/index.jsx + 2 modules
var Footer = __webpack_require__(5546);
// EXTERNAL MODULE: ./src/components/BotonWhatsApp/index.js
var BotonWhatsApp = __webpack_require__(6081);
// EXTERNAL MODULE: ./store/actions/productosActions.js
var productosActions = __webpack_require__(6705);
// EXTERNAL MODULE: external "@fortawesome/free-solid-svg-icons"
var free_solid_svg_icons_ = __webpack_require__(887);
// EXTERNAL MODULE: external "@fortawesome/react-fontawesome"
var react_fontawesome_ = __webpack_require__(799);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
;// CONCATENATED MODULE: ./src/components/infoCompra/index.jsx








const InfoCompra = () => {
  return /*#__PURE__*/jsx_runtime_.jsx(Contenedor, {
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "container",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "row",
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(Columna, {
          className: "col-12 col-md-4 text-center",
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "d-flex justify-content-center",
            children: [/*#__PURE__*/jsx_runtime_.jsx(react_fontawesome_.FontAwesomeIcon, {
              icon: free_solid_svg_icons_.faLock,
              className: "my-3 verde"
            }), /*#__PURE__*/jsx_runtime_.jsx(react_fontawesome_.FontAwesomeIcon, {
              icon: free_solid_svg_icons_.faCheck,
              className: "my-3 verde"
            })]
          }), /*#__PURE__*/jsx_runtime_.jsx("h5", {
            children: "Pagos Protegidos"
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Columna, {
          className: `col-12 col-md-4 text-center`,
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "d-flex justify-content-center mb-2",
            children: [/*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
              src: "/AmericanExpress.png",
              alt: "",
              width: "30px",
              height: "19px"
            }), /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
              src: "/MasterCard.png",
              alt: "",
              width: "30px",
              height: "19px"
            }), /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
              src: "/MercadoPago.png",
              alt: "",
              width: "30px",
              height: "19px"
            }), /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
              src: "/Transferencia.png",
              alt: "",
              width: "30px",
              height: "19px"
            }), /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
              src: "/Visa.png",
              alt: "",
              width: "30px",
              height: "19px"
            })]
          }), /*#__PURE__*/jsx_runtime_.jsx("h5", {
            children: "Diversos medios de pago"
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Columna, {
          className: "col-12 col-md-4 text-center",
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "d-flex justify-content-center",
            children: /*#__PURE__*/jsx_runtime_.jsx(react_fontawesome_.FontAwesomeIcon, {
              icon: free_solid_svg_icons_.faThumbtack,
              className: "my-3 rojo"
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("h5", {
            children: "Pilar y aleda\xF1os"
          })]
        })]
      })
    })
  });
};

const Contenedor = external_styled_components_default().div.withConfig({
  displayName: "infoCompra__Contenedor",
  componentId: "sc-gqk78b-0"
})(["background-color:white;display:flex;align-items:center;height:150px;@media(max-width:768px){height:auto;}"]);
const Columna = external_styled_components_default().div.withConfig({
  displayName: "infoCompra__Columna",
  componentId: "sc-gqk78b-1"
})(["display:flex;flex-direction:column;justify-content:center;>div{display:flex;justify-content:space-between;>svg{&.verde{color:green;}&.rojo{color:red;}width:20px;margin:0 10px;}}>h5{color:var(--oliver);font-weight:600;font-size:18px;text-transform:uppercase;}@media(max-width:768px){margin:20px 0px;}"]);
/* harmony default export */ const infoCompra = (InfoCompra);
;// CONCATENATED MODULE: ./pages/index.js
















const {
  restablecerFiltros
} = productosActions;

const Home = props => {
  (0,external_react_.useEffect)(() => {
    document.getElementsByTagName('body')[0].style.overflowY = "auto";
    props.restablecerFiltros();
  }, []);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(Head/* default */.Z, {
      title: "Oliver PetShop",
      metadesc: "Bienvenido al sitio oficial de Oliver PetShop, somos una PYME familiar con una considerable experiencia y reconocimiento de nuestros clientes en el rubro de las mascotas."
    }), /*#__PURE__*/jsx_runtime_.jsx(components_SliderPublicidad, {
      banners: props.banners
    }), /*#__PURE__*/jsx_runtime_.jsx(infoCompra, {}), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "container",
      children: /*#__PURE__*/jsx_runtime_.jsx(Promociones/* default */.Z, {})
    }), /*#__PURE__*/jsx_runtime_.jsx(components_BannerCategorias, {}), /*#__PURE__*/jsx_runtime_.jsx(components_BannerMarcas, {}), /*#__PURE__*/jsx_runtime_.jsx(components_FormContacto, {}), /*#__PURE__*/jsx_runtime_.jsx(Footer/* default */.Z, {}), /*#__PURE__*/jsx_runtime_.jsx(BotonWhatsApp/* default */.Z, {})]
  });
};

const mapDispatchToProps = {
  restablecerFiltros
};

const pages_mapStateToProps = ({
  productosReducer
}) => productosReducer;

async function getStaticProps() {
  const res = await fetch(`${config/* API */.bl}/banners`);
  const data = await res.json();
  return {
    props: {
      banners: data.data
    }
  };
}
/* harmony default export */ const pages = ((0,external_react_redux_.connect)(pages_mapStateToProps, mapDispatchToProps)(Home));

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

/***/ 822:
/***/ ((module) => {

module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 6695:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

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

/***/ 556:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/to-base-64.js");

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

/***/ 6099:
/***/ ((module) => {

module.exports = require("reactstrap");

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

/***/ }),

/***/ 272:
/***/ ((module) => {

module.exports = require("sweetalert2");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [664,260,642,500,675,542,840,705,341,438,535], () => (__webpack_exec__(8501)));
module.exports = __webpack_exports__;

})();