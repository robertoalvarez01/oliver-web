_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[23],{"30mp":function(t,o,r){"use strict";r.r(o);var e=r("o0o1"),a=r.n(e),c=r("HaE+"),n=r("q1tI"),i=r.n(n),s=r("k2JI"),u=r("/MKj"),d=r("TVVT"),l=r("XOuL"),p=r("rePB"),_=r("MX0m"),f=r.n(_),m=i.a.createElement,b=function(t){var o=function(o,r,e,a,c,n,i){for(var s=0;s<document.getElementsByClassName("img_small").length;s++)document.getElementsByClassName("img_small")[s].classList.remove("active");document.getElementsByClassName("img_small")[r].classList.add("active"),document.querySelector(".img__box-grande").src=o,t.changePeso(r,"".concat(e),a,"".concat(c),n,"".concat(i))};return m("div",{className:"jsx-2867116768 row slider__fotos"},m("div",{className:"jsx-2867116768 col-12 col-md-4 text-center col__imagenes-chicas pt-5"},t.imagenes.map((function(r,e){return m("img",0==e?{key:e,src:r,onClick:function(){return o(r,e)},alt:"prd",className:"jsx-2867116768 img_small active"}:{key:e,src:r,onClick:function(){return o(r,e,"".concat(t.subProductos[e].peso),t.subProductos[e].precioUnidad,"".concat(t.subProductos[e].tama\u00f1o),t.subProductos[e].idSubProducto,"".concat(t.subProductos[e].subProducto))},alt:"prd",className:"jsx-2867116768 img_small"})}))),m("div",{className:"jsx-2867116768 col-12 col-md-8 col__imagen-grande"},m("img",{src:t.imagenes[0],alt:"prd",className:"jsx-2867116768 img-fluid img__box-grande"})),m(f.a,{id:"2867116768"},[".slider__fotos.jsx-2867116768 .col__imagenes-chicas.jsx-2867116768{height:429px;overflow-y:auto;}",".slider__fotos.jsx-2867116768 .col__imagenes-chicas.jsx-2867116768::-webkit-scrollbar{width:5px;height:3px;}",".slider__fotos.jsx-2867116768 .col__imagenes-chicas.jsx-2867116768::-webkit-scrollbar-thumb{background:#FFB347;border-radius:3px;}",".slider__fotos.jsx-2867116768 .col__imagenes-chicas.jsx-2867116768::-webkit-scrollbar-thumb.jsx-2867116768:hover{background:#b3b3b3;box-shadow:0 0 2px 1px rgba(0,0,0,0.2);}",".slider__fotos.jsx-2867116768 .col__imagenes-chicas.jsx-2867116768 img.jsx-2867116768{height:120px;width:90px !important;cursor:pointer;}",".slider__fotos.jsx-2867116768 .col__imagenes-chicas.jsx-2867116768 img.jsx-2867116768:hover{-webkit-filter:brightness(70%);filter:brightness(70%);-webkit-transition:all .5s ease;transition:all .5s ease;}",".slider__fotos.jsx-2867116768 .col__imagenes-chicas.jsx-2867116768 img.active.jsx-2867116768{border:2px solid #FFB347;}","@media(max-width:768px){.slider__fotos.jsx-2867116768{-webkit-flex-direction:column-reverse;-ms-flex-direction:column-reverse;flex-direction:column-reverse;}.slider__fotos.jsx-2867116768 .col__imagen-grande.jsx-2867116768{text-align:center;}.slider__fotos.jsx-2867116768 .col__imagen-grande.jsx-2867116768 img.jsx-2867116768{height:345px;}}"]))},g=r("nhAV"),v=r("/Q2I"),P=r("qC+Y"),y=r("lZUM"),h=r.n(y),x=r("rOcY"),N=i.a.createElement;function j(t,o){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);o&&(e=e.filter((function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable}))),r.push.apply(r,e)}return r}function w(t){for(var o=1;o<arguments.length;o++){var r=null!=arguments[o]?arguments[o]:{};o%2?j(Object(r),!0).forEach((function(o){Object(p.a)(t,o,r[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):j(Object(r)).forEach((function(o){Object.defineProperty(t,o,Object.getOwnPropertyDescriptor(r,o))}))}return t}var k=Object(u.b)((function(t){return t.carritoReducer}),g)((function(t){Object(n.useEffect)((function(){var o=t.producto,r=o.marca,e=o.producto,a=o.idProducto;if(t.subProductos.length>0){var c=t.subProductos[0],n=c.foto,i=c.peso,s=c.precioFinal,u=c.tama\u00f1o,d=c.idSubProducto,l=c.subProducto,p=c.stock;m(n,i,s,e,u,d,r,l,a,p)}else m("".concat(x.d,"/sin-imagen.png"),null,null,e,null,null,r,null,a,null)}),[t.producto]);var o=[];t.subProductos.map((function(t){o.push(t.foto)}));var r=Object(n.useState)(!1),e=r[0],i=r[1],s=Object(n.useState)({}),u=s[0],d=s[1],p=function(t){var o=document.getElementById("cantidad_prd"),r=parseInt(o.value);if("-"===t){if(r<=1)return!1;r--}else r++;return o.value=r,d(w(w({},u),{},{cantidad:r}))},_=function(o,r,e,a,c,n,i){for(var s=document.getElementsByClassName(h.a.caja_cantidadKg),l=0;l<s.length;l++)s[l].classList.contains(h.a.active)&&s[l].classList.remove(h.a.active);if(s[o].classList.add(h.a.active),!r||!e||!a||!c||!n||!i)return d(w(w({},u),{},{peso:t.subProductos[0].peso,precio:t.subProductos[0].precioFinal,idSubProducto:t.subProductos[0].idSubProducto,subProducto:t.subProductos[0].subProducto,stock:t.subProductos[0].stock}));d(w(w({},u),{},{peso:r,precio:e,"tama\xf1o":a,idSubProducto:c,subProducto:n,stock:i}))},f=function(){var o=Object(c.a)(a.a.mark((function o(){return a.a.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:t.agregarProducto(u),setTimeout((function(){i(!0)}),1700);case 2:case"end":return o.stop()}}),o)})));return function(){return o.apply(this,arguments)}}(),m=function(t,o,r,e,a,c,n,i,s,u){d({producto:e,foto:t,peso:o,cantidad:1,"tama\xf1o":a,idSubProducto:c,marca:n,subProducto:i,idProducto:s,stock:u,precio:r})};return N("div",{className:"row"},N("div",{className:"col-12 col-sm-6"},N(b,{imagenes:o,changePeso:_,subProductos:t.subProductos})),N("div",{className:"col-12 col-sm-6 pt-5 "+h.a.descripcionProducto},N("h3",{className:h.a.marca},u.marca),N("h1",null,u.producto),N("div",{className:h.a.precios+" d-flex my-3"},N("div",{className:h.a.indicador__precio},N("p",null,"Precio"),N("span",{className:h.a.valor__precio},"$",u.precio)),N("div",{className:h.a.indicador__cantidad},N("p",{className:h.a.titulo__indicadorCantidad+" text-center"},"Seleccion\xe1 tama\xf1o"),N("div",{className:"row justify-content-center"},t.subProductos.map((function(t,o){return N("div",0==o?{key:o,className:h.a.caja_cantidadKg+" "+h.a.active,onClick:function(){return _(o,"".concat(t.peso),t.precioFinal,"".concat(t.tama\u00f1o),t.idSubProducto,"".concat(t.subProducto),t.stock)}}:{key:o,className:h.a.caja_cantidadKg,onClick:function(){return _(o,"".concat(t.peso),t.precioFinal,"".concat(t.tama\u00f1o),t.idSubProducto,"".concat(t.subProducto),t.stock)}},N("p",{className:h.a.kilos},t.peso," Kgs"),N("span",{className:h.a.precioDelKg},"$",t.precioFinal))}))),N("div",{className:"input-group mt-2"},N("div",{className:"input-group-prepend",onClick:function(){return p("-")}},N("span",{className:"input-group-text"},"-")),N("input",{type:"text",id:"cantidad_prd",className:"form-control text-center",value:u.cantidad}),N("div",{className:"input-group-append",onClick:function(){return p("+")}},N("span",{className:"input-group-text"},"+"))))),t.loading?N("div",{className:"text-center"},N(l.a,null)):N("button",{disabled:!(u.stock>0),className:"boton bg-yellow",onClick:f},"Comprar"),u.stock>0?null:N("div",{className:"alert alert-danger my-2 text-center"},"Producto sin stock")),e?N(v.a,{closeModal:function(){return i(!1)}},N(P.a,null)):null)})),O=r("9a8N"),S=r("F66N"),C=r("arvA"),E=r("Czwy"),I=r("EzvR"),F=r("ok1R"),T=r("rhny"),U=r("TSYQ"),B=r.n(U),K=r("YPbN"),M=r.n(K),R=i.a.createElement,J=function(t){var o=Object(n.useState)("1"),r=o[0],e=o[1],a=function(t){r!==t&&e(t)};return R(i.a.Fragment,null,R("section",{className:M.a.detalles__producto},R("div",{className:"container"},R(O.a,{tabs:!0},R(S.a,null,R(C.a,{className:B()({active:"1"===r}),onClick:function(){a("1")}},"Descripci\xf3n")),R(S.a,null,R(C.a,{className:B()({active:"2"===r}),onClick:function(){a("2")}},"Informaci\xf3n nutricional")))),R("div",{style:{backgroundColor:"white"}},R("div",{className:"container pt-3"},R(E.a,{activeTab:r,className:M.a.sub__container},R(I.a,{tabId:"1"},R(F.a,null,R(T.a,{sm:"12",className:M.a.p},t.descripcion_basica))),R(I.a,{tabId:"2"},R(F.a,null,R(T.a,{sm:"12",className:M.a.p,dangerouslySetInnerHTML:{__html:t.descripcion}}))))))))},Y=r("hCbx"),L=r("nOHt"),q=r("WkNE"),A=i.a.createElement,D=function(t){Object(n.useEffect)((function(){document.getElementsByTagName("body")[0]&&(document.getElementsByTagName("body")[0].style.overflowY="scroll"),o()}),[]);var o=function(){var o=Object(c.a)(a.a.mark((function o(){return a.a.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return t.restablecerFiltros(),o.prev=1,o.next=4,t.traerPorId(t.idProducto);case 4:o.next=9;break;case 6:o.prev=6,o.t0=o.catch(1),console.log(o.t0);case 9:case"end":return o.stop()}}),o,null,[[1,6]])})));return function(){return o.apply(this,arguments)}}();Object(L.useRouter)();return function(){if(t.loading)return A("div",{className:"col-12 text-center mt-4"},A(l.a,null));if(t.error)return A(Error,null);if(!t.producto)return null;var o=t.producto.data[0],r=o.descripcion,e=o.descripcion_basica;return A(i.a.Fragment,null,A(s.a,{title:t.producto.data[0].producto,metadesc:t.producto.data[0].descripcion_basica}),A("section",{className:"pb-5",style:{backgroundColor:"white"}},A("div",{className:"wrapper__producto container mb-5"},A(k,{producto:t.producto.data[0],subProductos:t.producto.subproductos})),A(J,{descripcion:r,descripcion_basica:e})),A("div",{className:"container"},A(Y.a,null)),A(q.a,null))}()};D.getInitialProps=function(){var t=Object(c.a)(a.a.mark((function t(o){var r,e;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=o.query,e=r.producto[1],t.abrupt("return",{idProducto:e});case 3:case"end":return t.stop()}}),t)})));return function(o){return t.apply(this,arguments)}}();o.default=Object(u.b)((function(t){return t.productosReducer}),d)(D)},KQm4:function(t,o,r){"use strict";r.d(o,"a",(function(){return c}));var e=r("a3WO");var a=r("BsWD");function c(t){return function(t){if(Array.isArray(t))return Object(e.a)(t)}(t)||function(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||Object(a.a)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},WCxs:function(t,o,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/producto/[...producto]",function(){return r("30mp")}])},YPbN:function(t,o,r){t.exports={detalles__producto:"infoProducto_detalles__producto__2JajI",nav__item:"infoProducto_nav__item__2Jwvy",active:"infoProducto_active__2h4RZ",sub__container:"infoProducto_sub__container__3frM_",p:"infoProducto_p__21_wv"}},hCbx:function(t,o,r){"use strict";var e=r("q1tI"),a=r.n(e),c=r("CI6Y"),n=r("/MKj"),i=r("TVVT"),s=r("XOuL"),u=a.a.createElement;o.a=Object(n.b)((function(t){return t.productosReducer}),i)((function(t){Object(e.useEffect)((function(){o()}),[]);var o=function(){0===t.ofertas.length&&t.traerPromociones()};return u("div",{className:"my-5"},u("h4",{className:"text-black"},"Nuestras Promociones"),u("div",{className:"row"},t.loading?u(s.a,null):t.ofertas.map((function(t){return u("div",{key:t.idSubProducto,className:"col-6 col-md-4 col-xl-3"},u(c.a,{imagen:t.foto,prd:t}))}))))}))},kqUl:function(t,o,r){"use strict";r.d(o,"g",(function(){return e})),r.d(o,"a",(function(){return a})),r.d(o,"d",(function(){return c})),r.d(o,"f",(function(){return n})),r.d(o,"e",(function(){return i})),r.d(o,"c",(function(){return s})),r.d(o,"b",(function(){return u}));var e="carrito_traer_todos_carrito",a="carrito_agregar_producto",c="carrito_eliminar_producto",n="carrito_loading",i="carrito_error",s="carrito_cambiar_medio_de_pago",u="carrito_costo_envio"},lZUM:function(t,o,r){t.exports={descripcionProducto:"ProductoSingle_descripcionProducto__1RfPJ",precios:"ProductoSingle_precios__1k4N4",indicador__precio:"ProductoSingle_indicador__precio__S6-Yv",valor__precio:"ProductoSingle_valor__precio__1sFdb",indicador__cantidad:"ProductoSingle_indicador__cantidad__3gUyc",titulo__indicadorCantidad:"ProductoSingle_titulo__indicadorCantidad__1KlYa",row:"ProductoSingle_row__16PB_",caja_cantidadKg:"ProductoSingle_caja_cantidadKg__1s5pC",active:"ProductoSingle_active__24bo1","input-group-prepend":"ProductoSingle_input-group-prepend__2WZL7","input-group-append":"ProductoSingle_input-group-append__3ZFw1","input-group-text":"ProductoSingle_input-group-text__GZ1bR","input-group":"ProductoSingle_input-group__U1WNg"}},nhAV:function(t,o,r){"use strict";r.r(o),r.d(o,"traerProductos",(function(){return s})),r.d(o,"agregarProducto",(function(){return u})),r.d(o,"eliminarProducto",(function(){return d})),r.d(o,"cambiarMedioDePago",(function(){return l})),r.d(o,"setCostoEnvio",(function(){return p}));var e=r("KQm4"),a=r("o0o1"),c=r.n(a),n=r("HaE+"),i=r("kqUl"),s=function(){return function(){var t=Object(n.a)(c.a.mark((function t(o){var r,e,a;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o({type:i.f}),t.prev=1,t.next=4,JSON.parse(localStorage.getItem("carrito"));case 4:return r=t.sent,e=0,r.forEach((function(t){e+=parseInt(t.precioUnidad*t.cantidad)})),a={productos:r,subtotal:e},t.abrupt("return",o({type:i.g,payload:a}));case 11:return t.prev=11,t.t0=t.catch(1),t.abrupt("return",o({type:i.e,payload:t.t0}));case 14:case"end":return t.stop()}}),t,null,[[1,11]])})));return function(o){return t.apply(this,arguments)}}()},u=function(t){return function(){var o=Object(n.a)(c.a.mark((function o(r,a){var n,s,u,d,l,p,_;return c.a.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:r({type:i.f});try{n=a().carritoReducer.productos,(u=n.filter((function(o){return o.idSubProducto==t.idSubProducto}))).length>0?(u[0].cantidad=u[0].cantidad+t.cantidad,d=n.filter((function(t){return t.idSubProducto!=u[0].idSubProducto})),s=d.length>0?[].concat(Object(e.a)(d),[u[0]]):[u[0]]):s=[].concat(Object(e.a)(n),[t]),localStorage.setItem("carrito",JSON.stringify(s)),l=JSON.parse(localStorage.getItem("carrito")),p=0,l.forEach((function(t){p+=parseInt(t.precioUnidad*t.cantidad)})),_={listProductosUpgrade:s,subtotal:p},setTimeout((function(){r({type:i.a,payload:_})}),1500)}catch(c){r({type:i.e,payload:c})}case 2:case"end":return o.stop()}}),o)})));return function(t,r){return o.apply(this,arguments)}}()},d=function(t){return function(){var o=Object(n.a)(c.a.mark((function o(r,e){var a,n,s,u,d;return c.a.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:r({type:i.f});try{a=e().carritoReducer.productos,n=a.filter((function(o){return o.idSubProducto!==t})),localStorage.setItem("carrito",JSON.stringify(n)),s=JSON.parse(localStorage.getItem("carrito")),u=0,s.forEach((function(t){u+=parseInt(t.precioUnidad*t.cantidad)})),d={newProductos:n,subtotal:u},r({type:i.d,payload:d})}catch(c){r({type:i.e,payload:c})}case 2:case"end":return o.stop()}}),o)})));return function(t,r){return o.apply(this,arguments)}}()},l=function(t){return function(o){return o({type:i.c,payload:t})}},p=function(t){return function(o){return o({type:i.b,payload:t})}}},psAh:function(t,o,r){t.exports={carrito__container:"Carrito_carrito__container__3LUGc",footer__carrito:"Carrito_footer__carrito__CZNUi",section__carrito__total:"Carrito_section__carrito__total__34mnW",subtotal__carrito:"Carrito_subtotal__carrito__YltHt",carrito__productos:"Carrito_carrito__productos__oEy3y"}},"qC+Y":function(t,o,r){"use strict";var e=r("nOHt"),a=r.n(e),c=r("q1tI"),n=r.n(c),i=r("/MKj"),s=r("nhAV"),u=r("psAh"),d=r.n(u),l=r("Mnxd"),p=n.a.createElement;o.a=Object(i.b)((function(t){return t.carritoReducer}),s)((function(t){Object(c.useEffect)((function(){t.traerProductos()}),[]);var o=0,r=function(t){var o=0;return t.forEach((function(t){o+=parseInt(t.precioUnidad*t.cantidad)})),o};return p("section",{className:d.a.carrito__container+" carrito"},p("h6",{className:"text-center"},"Mi Carrito"),p("section",{className:d.a.carrito__productos},t.productos&&0!==t.productos.length?(o=r(t.productos),t.productos.map((function(o,r){return p(l.a,{key:r,idSubProducto:o.idSubProducto,producto:o.producto,peso:o.peso,total:o.precioUnidad,foto:o.foto,cantidad:o.cantidad,eliminarProducto:t.eliminarProducto})}))):p("div",{className:"alert alert-warning"},"Ningun producto en el carrito")),p("div",{className:d.a.footer__carrito},p("section",{className:d.a.section__carrito__total+" d-flex justify-content-between"},p("p",null,"Total"),p("span",{className:d.a.subtotal__carrito},"$",o)),0==t.productos.length?null:p("button",{className:"boton bg-yellow",onClick:function(){a.a.push("/checkout")},type:"button"},"Finalizar compra")))}))},rePB:function(t,o,r){"use strict";function e(t,o,r){return o in t?Object.defineProperty(t,o,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[o]=r,t}r.d(o,"a",(function(){return e}))}},[["WCxs",1,2,5,0,3,4,6,8,12]]]);