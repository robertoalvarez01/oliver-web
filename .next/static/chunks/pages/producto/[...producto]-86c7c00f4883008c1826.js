_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[14],{"30mp":function(e,a,t){"use strict";t.r(a);var o=t("o0o1"),c=t.n(o),r=t("HaE+"),n=t("q1tI"),s=t.n(n),i=t("k2JI"),u=t("/MKj"),l=t("TVVT"),d=t("XOuL"),p=t("rePB"),m=t("MX0m"),b=t.n(m),f=s.a.createElement,_=function(e){var a=function(a,t,o,c,r,n,s){for(var i=0;i<document.getElementsByClassName("img_small").length;i++)document.getElementsByClassName("img_small")[i].classList.remove("active");document.getElementsByClassName("img_small")[t].classList.add("active"),document.querySelector(".img__box-grande").src=a,e.changePeso(t,"".concat(o),c,"".concat(r),n,"".concat(s))};return f("div",{className:"jsx-2289326465 row slider__fotos"},f("div",{className:"jsx-2289326465 col-12 col-md-4 text-center col__imagenes-chicas pt-5"},e.imagenes.map((function(t,o){return f("img",0==o?{key:o,src:t,onClick:function(){return a(t,o)},alt:"prd",className:"jsx-2289326465 img_small active"}:{key:o,src:t,onClick:function(){return a(t,o,"".concat(e.subProductos[o].peso),e.subProductos[o].precioUnidad,"".concat(e.subProductos[o].tama\u00f1o),e.subProductos[o].idSubProducto,"".concat(e.subProductos[o].subProducto))},alt:"prd",className:"jsx-2289326465 img_small"})}))),f("div",{className:"jsx-2289326465 col-12 col-md-8 col__imagen-grande"},f("img",{src:e.imagenes[0],alt:"prd",className:"jsx-2289326465 img-fluid img__box-grande"})),f(b.a,{id:"2289326465"},[".slider__fotos.jsx-2289326465 .col__imagenes-chicas.jsx-2289326465{height:429px;}",".slider__fotos.jsx-2289326465 .col__imagenes-chicas.jsx-2289326465 img.jsx-2289326465{height:120px;width:90px !important;cursor:pointer;}",".slider__fotos.jsx-2289326465 .col__imagenes-chicas.jsx-2289326465 img.jsx-2289326465:hover{-webkit-filter:brightness(70%);filter:brightness(70%);-webkit-transition:all .5s ease;transition:all .5s ease;}",".slider__fotos.jsx-2289326465 .col__imagenes-chicas.jsx-2289326465 img.active.jsx-2289326465{border:2px solid #FFB347;}","@media(max-width:768px){.slider__fotos.jsx-2289326465{-webkit-flex-direction:column-reverse;-ms-flex-direction:column-reverse;flex-direction:column-reverse;}.slider__fotos.jsx-2289326465 .col__imagen-grande.jsx-2289326465{text-align:center;}.slider__fotos.jsx-2289326465 .col__imagen-grande.jsx-2289326465 img.jsx-2289326465{height:345px;}}"]))},g=t("nhAV"),v=t("/Q2I"),j=t("qC+Y"),P=t("lZUM"),N=t.n(P),h=t("rOcY"),x=s.a.createElement;function O(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);a&&(o=o.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,o)}return t}function y(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?O(Object(t),!0).forEach((function(a){Object(p.a)(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):O(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}var w=Object(u.b)((function(e){return e.carritoReducer}),g)((function(e){Object(n.useEffect)((function(){var a=e.producto,t=a.marca,o=a.producto;if(e.subProductos.length>0){var c=e.subProductos[0],r=c.foto,n=c.peso,s=c.precioUnidad,i=c.tama\u00f1o,u=c.idSubProducto,l=c.subProducto;f(r,n,s,o,i,u,t,l)}else f("".concat(h.d,"/sin-imagen.png"),null,null,o,null,null,t,null)}),[e.producto]);var a=[];e.subProductos.map((function(e){a.push(e.foto)}));var t=Object(n.useState)(!1),o=t[0],s=t[1],i=Object(n.useState)({}),u=i[0],l=i[1],p=function(e){var a=document.getElementById("cantidad_prd"),t=parseInt(a.value);if("-"===e){if(t<=1)return!1;t--}else t++;return a.value=t,l(y(y({},u),{},{cantidad:t}))},m=function(a,t,o,c,r,n){for(var s=document.getElementsByClassName(N.a.caja_cantidadKg),i=0;i<s.length;i++)s[i].classList.contains(N.a.active)&&s[i].classList.remove(N.a.active);if(s[a].classList.add(N.a.active),!t||!o||!c||!r||!n)return l(y(y({},u),{},{peso:e.subProductos[0].peso,precio:e.subProductos[0].precioUnidad,idSubProducto:e.subProductos[0].idSubProducto,subProducto:e.subProductos[0].subProducto}));l(y(y({},u),{},{peso:t,precio:o,"tama\xf1o":c,idSubProducto:r,subProducto:n}))},b=function(){var a=Object(r.a)(c.a.mark((function a(){return c.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:e.agregarProducto(u),setTimeout((function(){s(!0)}),1700);case 2:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}}(),f=function(e,a,t,o,c,r,n,s){l({producto:o,foto:e,peso:a,cantidad:1,precioUnidad:t,"tama\xf1o":c,idSubProducto:r,marca:n,subProducto:s})};return x("div",{className:"row"},x("div",{className:"col-12 col-sm-6"},x(_,{imagenes:a,changePeso:m,subProductos:e.subProductos})),x("div",{className:"col-12 col-sm-6 pt-5 "+N.a.descripcionProducto},x("h3",{className:N.a.marca},u.marca),x("h1",null,u.producto),x("div",{className:N.a.precios+" d-flex my-3"},x("div",{className:N.a.indicador__precio},x("p",null,"Precio"),x("span",{className:N.a.valor__precio},"$",u.precioUnidad)),x("div",{className:N.a.indicador__cantidad},x("p",{className:N.a.titulo__indicadorCantidad+" text-center"},"Seleccion\xe1 tama\xf1o"),x("div",{className:"row justify-content-center"},e.subProductos.map((function(e,a){return 0==a?x("div",{key:a,className:N.a.caja_cantidadKg+" "+N.a.active,onClick:function(){return m(a,"".concat(e.peso),e.precioUnidad,"".concat(e.tama\u00f1o),e.idSubProducto,"".concat(e.subProducto))}},x("p",{className:N.a.kilos},e.peso," Kgs"),x("span",{className:N.a.precioDelKg},"$",u.precioUnidad)):x("div",{key:a,className:N.a.caja_cantidadKg,onClick:function(){return m(a,"".concat(e.peso),e.precioUnidad,"".concat(e.tama\u00f1o),e.idSubProducto,"".concat(e.subProducto))}},x("p",{className:N.a.kilos},e.peso," Kgs"),x("span",{className:N.a.precioDelKg},"$",e.precioUnidad))}))),x("div",{className:"input-group mt-2"},x("div",{className:"input-group-prepend",onClick:function(){return p("-")}},x("span",{className:"input-group-text"},"-")),x("input",{type:"text",id:"cantidad_prd",className:"form-control text-center",value:u.cantidad}),x("div",{className:"input-group-append",onClick:function(){return p("+")}},x("span",{className:"input-group-text"},"+"))))),e.loading?x("div",{className:"text-center"},x(d.a,null)):x("button",{className:"boton bg-yellow",onClick:b},"Comprar")),o?x(v.a,{closeModal:function(){return s(!1)}},x(j.a,null)):null)})),k=t("wx14"),C=t("zLVn"),E=t("17x9"),T=t.n(E),S=t("TSYQ"),M=t.n(S),I=t("33Jr"),U={tabs:T.a.bool,pills:T.a.bool,vertical:T.a.oneOfType([T.a.bool,T.a.string]),horizontal:T.a.string,justified:T.a.bool,fill:T.a.bool,navbar:T.a.bool,card:T.a.bool,tag:I.g,className:T.a.string,cssModule:T.a.object},K=function(e){var a=e.className,t=e.cssModule,o=e.tabs,c=e.pills,r=e.vertical,n=e.horizontal,i=e.justified,u=e.fill,l=e.navbar,d=e.card,p=e.tag,m=Object(C.a)(e,["className","cssModule","tabs","pills","vertical","horizontal","justified","fill","navbar","card","tag"]),b=Object(I.e)(M()(a,l?"navbar-nav":"nav",!!n&&"justify-content-"+n,function(e){return!1!==e&&(!0===e||"xs"===e?"flex-column":"flex-"+e+"-column")}(r),{"nav-tabs":o,"card-header-tabs":d&&o,"nav-pills":c,"card-header-pills":d&&c,"nav-justified":i,"nav-fill":u}),t);return s.a.createElement(p,Object(k.a)({},m,{className:b}))};K.propTypes=U,K.defaultProps={tag:"ul",vertical:!1};var D=K,L={tag:I.g,active:T.a.bool,className:T.a.string,cssModule:T.a.object},R=function(e){var a=e.className,t=e.cssModule,o=e.active,c=e.tag,r=Object(C.a)(e,["className","cssModule","active","tag"]),n=Object(I.e)(M()(a,"nav-item",!!o&&"active"),t);return s.a.createElement(c,Object(k.a)({},r,{className:n}))};R.propTypes=L,R.defaultProps={tag:"li"};var z=R,B=t("JX7q"),J=t("dI71"),Y={tag:I.g,innerRef:T.a.oneOfType([T.a.object,T.a.func,T.a.string]),disabled:T.a.bool,active:T.a.bool,className:T.a.string,cssModule:T.a.object,onClick:T.a.func,href:T.a.any},F=function(e){function a(a){var t;return(t=e.call(this,a)||this).onClick=t.onClick.bind(Object(B.a)(t)),t}Object(J.a)(a,e);var t=a.prototype;return t.onClick=function(e){this.props.disabled?e.preventDefault():("#"===this.props.href&&e.preventDefault(),this.props.onClick&&this.props.onClick(e))},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,o=e.active,c=e.tag,r=e.innerRef,n=Object(C.a)(e,["className","cssModule","active","tag","innerRef"]),i=Object(I.e)(M()(a,"nav-link",{disabled:n.disabled,active:o}),t);return s.a.createElement(c,Object(k.a)({},n,{ref:r,onClick:this.onClick,className:i}))},a}(s.a.Component);F.propTypes=Y,F.defaultProps={tag:"a"};var q=F,V=s.a.createContext({}),X={tag:I.g,activeTab:T.a.any,className:T.a.string,cssModule:T.a.object},Z=function(e){function a(a){var t;return(t=e.call(this,a)||this).state={activeTab:t.props.activeTab},t}return Object(J.a)(a,e),a.getDerivedStateFromProps=function(e,a){return a.activeTab!==e.activeTab?{activeTab:e.activeTab}:null},a.prototype.render=function(){var e=this.props,a=e.className,t=e.cssModule,o=e.tag,c=Object(I.f)(this.props,Object.keys(X)),r=Object(I.e)(M()("tab-content",a),t);return s.a.createElement(V.Provider,{value:{activeTabId:this.state.activeTab}},s.a.createElement(o,Object(k.a)({},c,{className:r})))},a}(n.Component),G=Z;Z.propTypes=X,Z.defaultProps={tag:"div"};var W={tag:I.g,className:T.a.string,cssModule:T.a.object,tabId:T.a.any};function H(e){var a=e.className,t=e.cssModule,o=e.tabId,c=e.tag,r=Object(C.a)(e,["className","cssModule","tabId","tag"]),n=function(e){return Object(I.e)(M()("tab-pane",a,{active:o===e}),t)};return s.a.createElement(V.Consumer,null,(function(e){var a=e.activeTabId;return s.a.createElement(c,Object(k.a)({},r,{className:n(a)}))}))}H.propTypes=W,H.defaultProps={tag:"div"};var $=T.a.oneOfType([T.a.number,T.a.string]),Q={tag:I.g,noGutters:T.a.bool,className:T.a.string,cssModule:T.a.object,form:T.a.bool,xs:$,sm:$,md:$,lg:$,xl:$},A={tag:"div",widths:["xs","sm","md","lg","xl"]},ee=function(e){var a=e.className,t=e.cssModule,o=e.noGutters,c=e.tag,r=e.form,n=e.widths,i=Object(C.a)(e,["className","cssModule","noGutters","tag","form","widths"]),u=[];n.forEach((function(a,t){var o=e[a];if(delete i[a],o){var c=!t;u.push(c?"row-cols-"+o:"row-cols-"+a+"-"+o)}}));var l=Object(I.e)(M()(a,o?"no-gutters":null,r?"form-row":"row",u),t);return s.a.createElement(c,Object(k.a)({},i,{className:l}))};ee.propTypes=Q,ee.defaultProps=A;var ae=ee,te=T.a.oneOfType([T.a.number,T.a.string]),oe=T.a.oneOfType([T.a.bool,T.a.number,T.a.string,T.a.shape({size:T.a.oneOfType([T.a.bool,T.a.number,T.a.string]),order:te,offset:te})]),ce={tag:I.g,xs:oe,sm:oe,md:oe,lg:oe,xl:oe,className:T.a.string,cssModule:T.a.object,widths:T.a.array},re={tag:"div",widths:["xs","sm","md","lg","xl"]},ne=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},se=function(e){var a=e.className,t=e.cssModule,o=e.widths,c=e.tag,r=Object(C.a)(e,["className","cssModule","widths","tag"]),n=[];o.forEach((function(a,o){var c=e[a];if(delete r[a],c||""===c){var s=!o;if(Object(I.c)(c)){var i,u=s?"-":"-"+a+"-",l=ne(s,a,c.size);n.push(Object(I.e)(M()(((i={})[l]=c.size||""===c.size,i["order"+u+c.order]=c.order||0===c.order,i["offset"+u+c.offset]=c.offset||0===c.offset,i)),t))}else{var d=ne(s,a,c);n.push(d)}}})),n.length||n.push("col");var i=Object(I.e)(M()(a,n),t);return s.a.createElement(c,Object(k.a)({},r,{className:i}))};se.propTypes=ce,se.defaultProps=re;var ie=se,ue=t("YPbN"),le=t.n(ue),de=s.a.createElement,pe=function(e){var a=Object(n.useState)("1"),t=a[0],o=a[1],c=function(e){t!==e&&o(e)};return de(s.a.Fragment,null,de("section",{className:le.a.detalles__producto},de("div",{className:"container"},de(D,{tabs:!0},de(z,null,de(q,{className:M()({active:"1"===t}),onClick:function(){c("1")}},"Descripci\xf3n")),de(z,null,de(q,{className:M()({active:"2"===t}),onClick:function(){c("2")}},"Informaci\xf3n nutricional")))),de("div",{style:{backgroundColor:"white"}},de("div",{className:"container pt-3"},de(G,{activeTab:t,className:le.a.sub__container},de(H,{tabId:"1"},de(ae,null,de(ie,{sm:"12",className:le.a.p},e.descripcion_basica))),de(H,{tabId:"2"},de(ae,null,de(ie,{sm:"12",className:le.a.p,dangerouslySetInnerHTML:{__html:e.descripcion}}))))))))},me=t("hCbx"),be=t("nOHt"),fe=s.a.createElement,_e=function(e){Object(n.useEffect)((function(){a()}),[]);var a=function(){var a=Object(r.a)(c.a.mark((function a(){return c.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,e.traerPorId(e.idProducto);case 3:a.next=8;break;case 5:a.prev=5,a.t0=a.catch(0),console.log(a.t0);case 8:case"end":return a.stop()}}),a,null,[[0,5]])})));return function(){return a.apply(this,arguments)}}();Object(be.useRouter)();return function(){if(e.loading)return fe("div",{className:"col-12 text-center mt-4"},fe(d.a,null));if(e.error)return fe(Error,null);if(!e.producto)return null;var a=e.producto.data[0],t=a.descripcion,o=a.descripcion_basica;return fe(s.a.Fragment,null,fe(i.a,{title:e.producto.data[0].producto,metadesc:e.producto.data[0].descripcion_basica}),fe("section",{className:"pb-5",style:{backgroundColor:"white"}},fe("div",{className:"wrapper__producto container mb-5"},fe(w,{producto:e.producto.data[0],subProductos:e.producto.subproductos})),fe(pe,{descripcion:t,descripcion_basica:o})),fe("div",{className:"container"},fe(me.a,null)))}()};_e.getInitialProps=function(){var e=Object(r.a)(c.a.mark((function e(a){var t,o;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.query,o=t.producto[1],e.abrupt("return",{idProducto:o});case 3:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();a.default=Object(u.b)((function(e){return e.productosReducer}),l)(_e)},WCxs:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/producto/[...producto]",function(){return t("30mp")}])},YPbN:function(e,a,t){e.exports={detalles__producto:"infoProducto_detalles__producto__2JajI",nav__item:"infoProducto_nav__item__2Jwvy",active:"infoProducto_active__2h4RZ",sub__container:"infoProducto_sub__container__3frM_",p:"infoProducto_p__21_wv"}},hCbx:function(e,a,t){"use strict";var o=t("q1tI"),c=t.n(o),r=t("CI6Y"),n=t("/MKj"),s=t("TVVT"),i=t("XOuL"),u=c.a.createElement;a.a=Object(n.b)((function(e){return e.productosReducer}),s)((function(e){Object(o.useEffect)((function(){a()}),[]);var a=function(){0===e.promociones.length&&e.traerPromociones()};return u("div",{className:"my-5"},u("h4",{className:"text-black"},"Nuestras Promociones"),u("div",{className:"row"},e.loading?u(i.a,null):e.promociones.map((function(e){return u("div",{key:e.idProducto,className:"col-6 col-md-4 col-xl-3"},u(r.a,{imagen:e.foto,prd:e}))}))))}))},lZUM:function(e,a,t){e.exports={descripcionProducto:"ProductoSingle_descripcionProducto__1RfPJ",precios:"ProductoSingle_precios__1k4N4",indicador__precio:"ProductoSingle_indicador__precio__S6-Yv",valor__precio:"ProductoSingle_valor__precio__1sFdb",indicador__cantidad:"ProductoSingle_indicador__cantidad__3gUyc",titulo__indicadorCantidad:"ProductoSingle_titulo__indicadorCantidad__1KlYa",row:"ProductoSingle_row__16PB_",caja_cantidadKg:"ProductoSingle_caja_cantidadKg__1s5pC",active:"ProductoSingle_active__24bo1","input-group-prepend":"ProductoSingle_input-group-prepend__2WZL7","input-group-append":"ProductoSingle_input-group-append__3ZFw1","input-group-text":"ProductoSingle_input-group-text__GZ1bR","input-group":"ProductoSingle_input-group__U1WNg"}}},[["WCxs",0,1,4,2,3,5,6]]]);