_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[20],{"30mp":function(t,o,r){"use strict";r.r(o);var e=r("o0o1"),a=r.n(e),c=r("HaE+"),n=r("q1tI"),i=r.n(n),s=r("k2JI"),u=r("/MKj"),d=r("TVVT"),l=r("XOuL"),p=r("rePB"),_=r("MX0m"),m=r.n(_),f=i.a.createElement,b=function(t){var o=function(o,r,e,a,c,n,i){for(var s=0;s<document.getElementsByClassName("img_small").length;s++)document.getElementsByClassName("img_small")[s].classList.remove("active");document.getElementsByClassName("img_small")[r].classList.add("active"),document.querySelector(".img__box-grande").src=o,t.changePeso(r,"".concat(e),a,"".concat(c),n,"".concat(i))};return f("div",{className:"jsx-2289326465 row slider__fotos"},f("div",{className:"jsx-2289326465 col-12 col-md-4 text-center col__imagenes-chicas pt-5"},t.imagenes.map((function(r,e){return f("img",0==e?{key:e,src:r,onClick:function(){return o(r,e)},alt:"prd",className:"jsx-2289326465 img_small active"}:{key:e,src:r,onClick:function(){return o(r,e,"".concat(t.subProductos[e].peso),t.subProductos[e].precioUnidad,"".concat(t.subProductos[e].tama\u00f1o),t.subProductos[e].idSubProducto,"".concat(t.subProductos[e].subProducto))},alt:"prd",className:"jsx-2289326465 img_small"})}))),f("div",{className:"jsx-2289326465 col-12 col-md-8 col__imagen-grande"},f("img",{src:t.imagenes[0],alt:"prd",className:"jsx-2289326465 img-fluid img__box-grande"})),f(m.a,{id:"2289326465"},[".slider__fotos.jsx-2289326465 .col__imagenes-chicas.jsx-2289326465{height:429px;}",".slider__fotos.jsx-2289326465 .col__imagenes-chicas.jsx-2289326465 img.jsx-2289326465{height:120px;width:90px !important;cursor:pointer;}",".slider__fotos.jsx-2289326465 .col__imagenes-chicas.jsx-2289326465 img.jsx-2289326465:hover{-webkit-filter:brightness(70%);filter:brightness(70%);-webkit-transition:all .5s ease;transition:all .5s ease;}",".slider__fotos.jsx-2289326465 .col__imagenes-chicas.jsx-2289326465 img.active.jsx-2289326465{border:2px solid #FFB347;}","@media(max-width:768px){.slider__fotos.jsx-2289326465{-webkit-flex-direction:column-reverse;-ms-flex-direction:column-reverse;flex-direction:column-reverse;}.slider__fotos.jsx-2289326465 .col__imagen-grande.jsx-2289326465{text-align:center;}.slider__fotos.jsx-2289326465 .col__imagen-grande.jsx-2289326465 img.jsx-2289326465{height:345px;}}"]))},g=r("nhAV"),v=r("/Q2I"),P=r("qC+Y"),N=r("lZUM"),h=r.n(N),x=r("rOcY"),j=i.a.createElement;function y(t,o){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);o&&(e=e.filter((function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable}))),r.push.apply(r,e)}return r}function w(t){for(var o=1;o<arguments.length;o++){var r=null!=arguments[o]?arguments[o]:{};o%2?y(Object(r),!0).forEach((function(o){Object(p.a)(t,o,r[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):y(Object(r)).forEach((function(o){Object.defineProperty(t,o,Object.getOwnPropertyDescriptor(r,o))}))}return t}var S=Object(u.b)((function(t){return t.carritoReducer}),g)((function(t){Object(n.useEffect)((function(){var o=t.producto,r=o.marca,e=o.producto;if(t.subProductos.length>0){var a=t.subProductos[0],c=a.foto,n=a.peso,i=a.precioUnidad,s=a.tama\u00f1o,u=a.idSubProducto,d=a.subProducto;f(c,n,i,e,s,u,r,d)}else f("".concat(x.d,"/sin-imagen.png"),null,null,e,null,null,r,null)}),[t.producto]);var o=[];t.subProductos.map((function(t){o.push(t.foto)}));var r=Object(n.useState)(!1),e=r[0],i=r[1],s=Object(n.useState)({}),u=s[0],d=s[1],p=function(t){var o=document.getElementById("cantidad_prd"),r=parseInt(o.value);if("-"===t){if(r<=1)return!1;r--}else r++;return o.value=r,d(w(w({},u),{},{cantidad:r}))},_=function(o,r,e,a,c,n){for(var i=document.getElementsByClassName(h.a.caja_cantidadKg),s=0;s<i.length;s++)i[s].classList.contains(h.a.active)&&i[s].classList.remove(h.a.active);if(i[o].classList.add(h.a.active),!r||!e||!a||!c||!n)return d(w(w({},u),{},{peso:t.subProductos[0].peso,precio:t.subProductos[0].precioUnidad,idSubProducto:t.subProductos[0].idSubProducto,subProducto:t.subProductos[0].subProducto}));d(w(w({},u),{},{peso:r,precio:e,"tama\xf1o":a,idSubProducto:c,subProducto:n}))},m=function(){var o=Object(c.a)(a.a.mark((function o(){return a.a.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:t.agregarProducto(u),setTimeout((function(){i(!0)}),1700);case 2:case"end":return o.stop()}}),o)})));return function(){return o.apply(this,arguments)}}(),f=function(t,o,r,e,a,c,n,i){d({producto:e,foto:t,peso:o,cantidad:1,precioUnidad:r,"tama\xf1o":a,idSubProducto:c,marca:n,subProducto:i})};return j("div",{className:"row"},j("div",{className:"col-12 col-sm-6"},j(b,{imagenes:o,changePeso:_,subProductos:t.subProductos})),j("div",{className:"col-12 col-sm-6 pt-5 "+h.a.descripcionProducto},j("h3",{className:h.a.marca},u.marca),j("h1",null,u.producto),j("div",{className:h.a.precios+" d-flex my-3"},j("div",{className:h.a.indicador__precio},j("p",null,"Precio"),j("span",{className:h.a.valor__precio},"$",u.precioUnidad)),j("div",{className:h.a.indicador__cantidad},j("p",{className:h.a.titulo__indicadorCantidad+" text-center"},"Seleccion\xe1 tama\xf1o"),j("div",{className:"row justify-content-center"},t.subProductos.map((function(t,o){return 0==o?j("div",{key:o,className:h.a.caja_cantidadKg+" "+h.a.active,onClick:function(){return _(o,"".concat(t.peso),t.precioUnidad,"".concat(t.tama\u00f1o),t.idSubProducto,"".concat(t.subProducto))}},j("p",{className:h.a.kilos},t.peso," Kgs"),j("span",{className:h.a.precioDelKg},"$",u.precioUnidad)):j("div",{key:o,className:h.a.caja_cantidadKg,onClick:function(){return _(o,"".concat(t.peso),t.precioUnidad,"".concat(t.tama\u00f1o),t.idSubProducto,"".concat(t.subProducto))}},j("p",{className:h.a.kilos},t.peso," Kgs"),j("span",{className:h.a.precioDelKg},"$",t.precioUnidad))}))),j("div",{className:"input-group mt-2"},j("div",{className:"input-group-prepend",onClick:function(){return p("-")}},j("span",{className:"input-group-text"},"-")),j("input",{type:"text",id:"cantidad_prd",className:"form-control text-center",value:u.cantidad}),j("div",{className:"input-group-append",onClick:function(){return p("+")}},j("span",{className:"input-group-text"},"+"))))),t.loading?j("div",{className:"text-center"},j(l.a,null)):j("button",{className:"boton bg-yellow",onClick:m},"Comprar")),e?j(v.a,{closeModal:function(){return i(!1)}},j(P.a,null)):null)})),O=r("9a8N"),k=r("F66N"),C=r("arvA"),E=r("Czwy"),I=r("EzvR"),U=r("ok1R"),K=r("rhny"),R=r("TSYQ"),J=r.n(R),M=r("YPbN"),T=r.n(M),L=i.a.createElement,Y=function(t){var o=Object(n.useState)("1"),r=o[0],e=o[1],a=function(t){r!==t&&e(t)};return L(i.a.Fragment,null,L("section",{className:T.a.detalles__producto},L("div",{className:"container"},L(O.a,{tabs:!0},L(k.a,null,L(C.a,{className:J()({active:"1"===r}),onClick:function(){a("1")}},"Descripci\xf3n")),L(k.a,null,L(C.a,{className:J()({active:"2"===r}),onClick:function(){a("2")}},"Informaci\xf3n nutricional")))),L("div",{style:{backgroundColor:"white"}},L("div",{className:"container pt-3"},L(E.a,{activeTab:r,className:T.a.sub__container},L(I.a,{tabId:"1"},L(U.a,null,L(K.a,{sm:"12",className:T.a.p},t.descripcion_basica))),L(I.a,{tabId:"2"},L(U.a,null,L(K.a,{sm:"12",className:T.a.p,dangerouslySetInnerHTML:{__html:t.descripcion}}))))))))},q=r("hCbx"),B=r("nOHt"),F=i.a.createElement,D=function(t){Object(n.useEffect)((function(){o()}),[]);var o=function(){var o=Object(c.a)(a.a.mark((function o(){return a.a.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.prev=0,o.next=3,t.traerPorId(t.idProducto);case 3:o.next=8;break;case 5:o.prev=5,o.t0=o.catch(0),console.log(o.t0);case 8:case"end":return o.stop()}}),o,null,[[0,5]])})));return function(){return o.apply(this,arguments)}}();Object(B.useRouter)();return function(){if(t.loading)return F("div",{className:"col-12 text-center mt-4"},F(l.a,null));if(t.error)return F(Error,null);if(!t.producto)return null;var o=t.producto.data[0],r=o.descripcion,e=o.descripcion_basica;return F(i.a.Fragment,null,F(s.a,{title:t.producto.data[0].producto,metadesc:t.producto.data[0].descripcion_basica}),F("section",{className:"pb-5",style:{backgroundColor:"white"}},F("div",{className:"wrapper__producto container mb-5"},F(S,{producto:t.producto.data[0],subProductos:t.producto.subproductos})),F(Y,{descripcion:r,descripcion_basica:e})),F("div",{className:"container"},F(q.a,null)))}()};D.getInitialProps=function(){var t=Object(c.a)(a.a.mark((function t(o){var r,e;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=o.query,e=r.producto[1],t.abrupt("return",{idProducto:e});case 3:case"end":return t.stop()}}),t)})));return function(o){return t.apply(this,arguments)}}();o.default=Object(u.b)((function(t){return t.productosReducer}),d)(D)},WCxs:function(t,o,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/producto/[...producto]",function(){return r("30mp")}])},YPbN:function(t,o,r){t.exports={detalles__producto:"infoProducto_detalles__producto__2JajI",nav__item:"infoProducto_nav__item__2Jwvy",active:"infoProducto_active__2h4RZ",sub__container:"infoProducto_sub__container__3frM_",p:"infoProducto_p__21_wv"}},hCbx:function(t,o,r){"use strict";var e=r("q1tI"),a=r.n(e),c=r("CI6Y"),n=r("/MKj"),i=r("TVVT"),s=r("XOuL"),u=a.a.createElement;o.a=Object(n.b)((function(t){return t.productosReducer}),i)((function(t){Object(e.useEffect)((function(){o()}),[]);var o=function(){0===t.promociones.length&&t.traerPromociones()};return u("div",{className:"my-5"},u("h4",{className:"text-black"},"Nuestras Promociones"),u("div",{className:"row"},t.loading?u(s.a,null):t.promociones.map((function(t){return u("div",{key:t.idProducto,className:"col-6 col-md-4 col-xl-3"},u(c.a,{imagen:t.foto,prd:t}))}))))}))},kqUl:function(t,o,r){"use strict";r.d(o,"e",(function(){return e})),r.d(o,"a",(function(){return a})),r.d(o,"b",(function(){return c})),r.d(o,"d",(function(){return n})),r.d(o,"c",(function(){return i}));var e="carrito_traer_todos_carrito",a="carrito_agregar_producto",c="carrito_eliminar_producto",n="carrito_loading",i="carrito_error"},lZUM:function(t,o,r){t.exports={descripcionProducto:"ProductoSingle_descripcionProducto__1RfPJ",precios:"ProductoSingle_precios__1k4N4",indicador__precio:"ProductoSingle_indicador__precio__S6-Yv",valor__precio:"ProductoSingle_valor__precio__1sFdb",indicador__cantidad:"ProductoSingle_indicador__cantidad__3gUyc",titulo__indicadorCantidad:"ProductoSingle_titulo__indicadorCantidad__1KlYa",row:"ProductoSingle_row__16PB_",caja_cantidadKg:"ProductoSingle_caja_cantidadKg__1s5pC",active:"ProductoSingle_active__24bo1","input-group-prepend":"ProductoSingle_input-group-prepend__2WZL7","input-group-append":"ProductoSingle_input-group-append__3ZFw1","input-group-text":"ProductoSingle_input-group-text__GZ1bR","input-group":"ProductoSingle_input-group__U1WNg"}},nhAV:function(t,o,r){"use strict";r.r(o),r.d(o,"traerProductos",(function(){return s})),r.d(o,"agregarProducto",(function(){return u})),r.d(o,"eliminarProducto",(function(){return d}));var e=r("KQm4"),a=r("o0o1"),c=r.n(a),n=r("HaE+"),i=r("kqUl"),s=function(){return function(){var t=Object(n.a)(c.a.mark((function t(o){var r,e,a;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o({type:i.d}),t.prev=1,t.next=4,JSON.parse(localStorage.getItem("carrito"));case 4:return r=t.sent,e=0,r.forEach((function(t){e+=parseInt(t.precioUnidad*t.cantidad)})),a={productos:r,subtotal:e},t.abrupt("return",o({type:i.e,payload:a}));case 11:return t.prev=11,t.t0=t.catch(1),t.abrupt("return",o({type:i.c,payload:t.t0}));case 14:case"end":return t.stop()}}),t,null,[[1,11]])})));return function(o){return t.apply(this,arguments)}}()},u=function(t){return function(){var o=Object(n.a)(c.a.mark((function o(r,a){var n,s,u,d,l,p,_;return c.a.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:r({type:i.d});try{n=a().carritoReducer.productos,(u=n.filter((function(o){return o.idSubProducto==t.idSubProducto}))).length>0?(u[0].cantidad=u[0].cantidad+t.cantidad,d=n.filter((function(t){return t.idSubProducto!=u[0].idSubProducto})),s=d.length>0?[].concat(Object(e.a)(d),[u[0]]):[u[0]]):s=[].concat(Object(e.a)(n),[t]),localStorage.setItem("carrito",JSON.stringify(s)),l=JSON.parse(localStorage.getItem("carrito")),p=0,l.forEach((function(t){p+=parseInt(t.precioUnidad*t.cantidad)})),_={listProductosUpgrade:s,subtotal:p},setTimeout((function(){r({type:i.a,payload:_})}),1500)}catch(c){r({type:i.c,payload:c})}case 2:case"end":return o.stop()}}),o)})));return function(t,r){return o.apply(this,arguments)}}()},d=function(t){return function(){var o=Object(n.a)(c.a.mark((function o(r,e){var a,n,s,u,d;return c.a.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:r({type:i.d});try{a=e().carritoReducer.productos,n=a.filter((function(o){return o.idSubProducto!==t})),localStorage.setItem("carrito",JSON.stringify(n)),s=JSON.parse(localStorage.getItem("carrito")),u=0,s.forEach((function(t){u+=parseInt(t.precioUnidad*t.cantidad)})),d={newProductos:n,subtotal:u},r({type:i.b,payload:d})}catch(c){r({type:i.c,payload:c})}case 2:case"end":return o.stop()}}),o)})));return function(t,r){return o.apply(this,arguments)}}()}},psAh:function(t,o,r){t.exports={carrito__container:"Carrito_carrito__container__3LUGc",footer__carrito:"Carrito_footer__carrito__CZNUi",section__carrito__total:"Carrito_section__carrito__total__34mnW",subtotal__carrito:"Carrito_subtotal__carrito__YltHt",carrito__productos:"Carrito_carrito__productos__oEy3y"}},"qC+Y":function(t,o,r){"use strict";r("nOHt");var e=r("q1tI"),a=r.n(e),c=r("/MKj"),n=r("nhAV"),i=r("psAh"),s=r.n(i),u=r("Mnxd"),d=a.a.createElement;o.a=Object(c.b)((function(t){return t.carritoReducer}),n)((function(t){Object(e.useEffect)((function(){t.traerProductos()}),[]);var o=0,r=function(t){var o=0;return t.forEach((function(t){o+=parseInt(t.precioUnidad*t.cantidad)})),o};return d("section",{className:s.a.carrito__container+" carrito"},d("h6",{className:"text-center"},"Mi Carrito"),d("section",{className:s.a.carrito__productos},t.productos&&0!==t.productos.length?(o=r(t.productos),t.productos.map((function(o,r){return d(u.a,{key:r,idSubProducto:o.idSubProducto,producto:o.producto,peso:o.peso,total:o.precioUnidad,foto:o.foto,cantidad:o.cantidad,eliminarProducto:t.eliminarProducto})}))):d("div",{className:"alert alert-warning"},"Ningun producto en el carrito")),d("div",{className:s.a.footer__carrito},d("section",{className:s.a.section__carrito__total+" d-flex justify-content-between"},d("p",null,"Subtotal"),d("span",{className:s.a.subtotal__carrito},"$",o)),0==t.productos.length?null:d("button",{className:"boton bg-yellow",onClick:function(){window.location.assign("/checkout")},type:"button"},"Finalizar compra")))}))}},[["WCxs",1,2,5,0,3,4,6,8,10]]]);