"use strict";
exports.id = 675;
exports.ids = [675];
exports.modules = {

/***/ 2675:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_Modal)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "react-dom"
var external_react_dom_ = __webpack_require__(2268);
var external_react_dom_default = /*#__PURE__*/__webpack_require__.n(external_react_dom_);
// EXTERNAL MODULE: external "@fortawesome/free-solid-svg-icons"
var free_solid_svg_icons_ = __webpack_require__(887);
// EXTERNAL MODULE: external "@fortawesome/react-fontawesome"
var react_fontawesome_ = __webpack_require__(799);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(9914);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./src/components/Modal/style.js

const Wrapper = external_styled_components_default().div.withConfig({
  displayName: "style__Wrapper",
  componentId: "sc-s03ap1-0"
})(["position:fixed;width:100%;height:100vh;top:0px;display:flex;flex-direction:column;align-items:center;background-color:rgba(7,7,7,0.596);z-index:2000;transition:all 1s ease;padding:50px 0px 0px 0px;"]);
const Body = external_styled_components_default().div.withConfig({
  displayName: "style__Body",
  componentId: "sc-s03ap1-1"
})(["position:relative;top:", ";width:35%;max-height:80vh;background-color:white;border-radius:13px;padding:10px 16px;overflow-y:auto;overflow-x:hidden;transition:all 0.5s ease;display:flex;align-items:center;@media (max-width:768px){width:85%;}"], props => props.show ? '0px' : '-500px');
const BotonCerrar = external_styled_components_default().button.withConfig({
  displayName: "style__BotonCerrar",
  componentId: "sc-s03ap1-2"
})(["width:32px;height:32px;border-radius:100%;background-color:var(--oliver);color:white;position:absolute;right:5px;top:5px;z-index:3000;display:block;border:none;display:flex;align-items:center;"]);
const Content = external_styled_components_default().div.withConfig({
  displayName: "style__Content",
  componentId: "sc-s03ap1-3"
})(["border:none !important;display:flex;flex-direction:column;justify-content:center;padding:15px 0px;width:100%;"]);
;// CONCATENATED MODULE: ./src/components/Modal/index.jsx








const Modal = props => {
  const {
    0: show,
    1: setShow
  } = (0,external_react_.useState)(false);
  (0,external_react_.useEffect)(() => {
    setShow(true);
  }, []);

  const close = () => {
    setShow(false);
    setTimeout(() => {
      document.getElementsByTagName('body')[0].style.overflowY = 'scroll';
      props.closeModal();
    }, 500);
  };

  return /*#__PURE__*/external_react_dom_default().createPortal( /*#__PURE__*/jsx_runtime_.jsx(Wrapper, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(Body, {
      id: "body__modal_buscador",
      show: show,
      children: [/*#__PURE__*/jsx_runtime_.jsx(BotonCerrar, {
        onClick: close,
        children: /*#__PURE__*/jsx_runtime_.jsx(react_fontawesome_.FontAwesomeIcon, {
          icon: free_solid_svg_icons_.faTimes
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(Content, {
        children: props.children
      })]
    })
  }), document.getElementById('modals'));
};

/* harmony default export */ const components_Modal = (Modal);

/***/ })

};
;