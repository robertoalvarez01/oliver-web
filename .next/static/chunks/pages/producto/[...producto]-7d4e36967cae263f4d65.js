_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[24],{"30mp":function(e,a,t){"use strict";t.r(a);var s=t("o0o1"),o=t.n(s),r=t("HaE+"),c=t("q1tI"),n=t.n(c),i=t("k2JI"),l=t("/MKj"),u=t("TVVT"),d=t("XOuL"),p=t("rePB"),m=t("MX0m"),f=t.n(m),b=n.a.createElement,_=function(e){var a=function(a,t,s,o,r,c,n){for(var i=0;i<document.getElementsByClassName("img_small").length;i++)document.getElementsByClassName("img_small")[i].classList.remove("active");document.getElementsByClassName("img_small")[t].classList.add("active"),document.querySelector(".img__box-grande").src=a,e.changePeso(t,"".concat(s),o,"".concat(r),c,"".concat(n))};return b("div",{className:"jsx-2867116768 row slider__fotos"},b("div",{className:"jsx-2867116768 col-12 col-md-4 text-center col__imagenes-chicas pt-5"},e.imagenes.map((function(t,s){return b("img",0==s?{key:s,src:t,onClick:function(){return a(t,s)},alt:"prd",className:"jsx-2867116768 img_small active"}:{key:s,src:t,onClick:function(){return a(t,s,"".concat(e.subProductos[s].peso),e.subProductos[s].precioUnidad,"".concat(e.subProductos[s].tama\u00f1o),e.subProductos[s].idSubProducto,"".concat(e.subProductos[s].subProducto))},alt:"prd",className:"jsx-2867116768 img_small"})}))),b("div",{className:"jsx-2867116768 col-12 col-md-8 col__imagen-grande"},b("img",{src:e.imagenes[0],alt:"prd",className:"jsx-2867116768 img-fluid img__box-grande"})),b(f.a,{id:"2867116768"},[".slider__fotos.jsx-2867116768 .col__imagenes-chicas.jsx-2867116768{height:429px;overflow-y:auto;}",".slider__fotos.jsx-2867116768 .col__imagenes-chicas.jsx-2867116768::-webkit-scrollbar{width:5px;height:3px;}",".slider__fotos.jsx-2867116768 .col__imagenes-chicas.jsx-2867116768::-webkit-scrollbar-thumb{background:#FFB347;border-radius:3px;}",".slider__fotos.jsx-2867116768 .col__imagenes-chicas.jsx-2867116768::-webkit-scrollbar-thumb.jsx-2867116768:hover{background:#b3b3b3;box-shadow:0 0 2px 1px rgba(0,0,0,0.2);}",".slider__fotos.jsx-2867116768 .col__imagenes-chicas.jsx-2867116768 img.jsx-2867116768{height:120px;width:90px !important;cursor:pointer;}",".slider__fotos.jsx-2867116768 .col__imagenes-chicas.jsx-2867116768 img.jsx-2867116768:hover{-webkit-filter:brightness(70%);filter:brightness(70%);-webkit-transition:all .5s ease;transition:all .5s ease;}",".slider__fotos.jsx-2867116768 .col__imagenes-chicas.jsx-2867116768 img.active.jsx-2867116768{border:2px solid #FFB347;}","@media(max-width:768px){.slider__fotos.jsx-2867116768{-webkit-flex-direction:column-reverse;-ms-flex-direction:column-reverse;flex-direction:column-reverse;}.slider__fotos.jsx-2867116768 .col__imagen-grande.jsx-2867116768{text-align:center;}.slider__fotos.jsx-2867116768 .col__imagen-grande.jsx-2867116768 img.jsx-2867116768{height:345px;}}"]))},g=t("nhAV"),v=t("/Q2I"),x=t("qC+Y"),j=t("lZUM"),h=t.n(j),N=t("rOcY"),P=n.a.createElement;function w(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);a&&(s=s.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,s)}return t}function k(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?w(Object(t),!0).forEach((function(a){Object(p.a)(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):w(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}var y=Object(l.b)((function(e){return e.carritoReducer}),g)((function(e){Object(c.useEffect)((function(){var a=e.producto,t=a.marca,s=a.producto,o=a.idProducto;if(e.subProductos.length>0){var r=e.subProductos[0],c=r.foto,n=r.peso,i=r.precioFinal,l=r.tama\u00f1o,u=r.idSubProducto,d=r.subProducto,p=r.stock;b(c,n,i,s,l,u,t,d,o,p)}else b("".concat(N.d,"/sin-imagen.png"),null,null,s,null,null,t,null,o,null)}),[e.producto]);var a=[];e.subProductos.map((function(e){a.push(e.foto)}));var t=Object(c.useState)(!1),s=t[0],n=t[1],i=Object(c.useState)({}),l=i[0],u=i[1],p=function(e){var a=document.getElementById("cantidad_prd"),t=parseInt(a.value);if("-"===e){if(t<=1)return!1;t--}else t++;return a.value=t,u(k(k({},l),{},{cantidad:t}))},m=function(a,t,s,o,r,c,n){for(var i=document.getElementsByClassName(h.a.caja_cantidadKg),d=0;d<i.length;d++)i[d].classList.contains(h.a.active)&&i[d].classList.remove(h.a.active);if(i[a].classList.add(h.a.active),!t||!s||!o||!r||!c||!n)return u(k(k({},l),{},{peso:e.subProductos[0].peso,precio:e.subProductos[0].precioFinal,idSubProducto:e.subProductos[0].idSubProducto,subProducto:e.subProductos[0].subProducto,stock:e.subProductos[0].stock}));u(k(k({},l),{},{peso:t,precio:s,"tama\xf1o":o,idSubProducto:r,subProducto:c,stock:n}))},f=function(){var a=Object(r.a)(o.a.mark((function a(){return o.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:e.agregarProducto(l),setTimeout((function(){n(!0)}),1700);case 2:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}}(),b=function(e,a,t,s,o,r,c,n,i,l){u({producto:s,foto:e,peso:a,cantidad:1,"tama\xf1o":o,idSubProducto:r,marca:c,subProducto:n,idProducto:i,stock:l,precio:t})};return P("div",{className:"row"},P("div",{className:"col-12 col-sm-6"},P(_,{imagenes:a,changePeso:m,subProductos:e.subProductos})),P("div",{className:"col-12 col-sm-6 pt-5 "+h.a.descripcionProducto},P("h3",{className:h.a.marca},l.marca),P("h1",null,l.producto),P("div",{className:h.a.precios+" d-flex my-3"},P("div",{className:h.a.indicador__precio},P("p",null,"Precio"),P("span",{className:h.a.valor__precio},"$",l.precio)),P("div",{className:h.a.indicador__cantidad},P("p",{className:h.a.titulo__indicadorCantidad+" text-center"},"Seleccion\xe1 tama\xf1o"),P("div",{className:"row justify-content-center"},e.subProductos.map((function(e,a){return P("div",0==a?{key:a,className:h.a.caja_cantidadKg+" "+h.a.active,onClick:function(){return m(a,"".concat(e.peso),e.precioFinal,"".concat(e.tama\u00f1o),e.idSubProducto,"".concat(e.subProducto),e.stock)}}:{key:a,className:h.a.caja_cantidadKg,onClick:function(){return m(a,"".concat(e.peso),e.precioFinal,"".concat(e.tama\u00f1o),e.idSubProducto,"".concat(e.subProducto),e.stock)}},P("p",{className:h.a.kilos},e.peso," Kgs"),P("span",{className:h.a.precioDelKg},"$",e.precioFinal))}))),P("div",{className:"input-group mt-2"},P("div",{className:"input-group-prepend",onClick:function(){return p("-")}},P("span",{className:"input-group-text"},"-")),P("input",{type:"text",id:"cantidad_prd",className:"form-control text-center",value:l.cantidad}),P("div",{className:"input-group-append",onClick:function(){return p("+")}},P("span",{className:"input-group-text"},"+"))))),e.loading?P("div",{className:"text-center"},P(d.a,null)):P("button",{disabled:!(l.stock>0),className:"boton bg-yellow",onClick:f},"Comprar"),l.stock>0?null:P("div",{className:"alert alert-danger my-2 text-center"},"Producto sin stock")),s?P(v.a,{closeModal:function(){return n(!1)}},P(x.a,null)):null)})),O=t("9a8N"),C=t("F66N"),E=t("arvA"),S=t("Czwy"),T=t("EzvR"),I=t("ok1R"),M=t("rhny"),Y=t("TSYQ"),F=t.n(Y),z=t("YPbN"),q=t.n(z),L=n.a.createElement,R=function(e){var a=Object(c.useState)("1"),t=a[0],s=a[1],o=function(e){t!==e&&s(e)};return L(n.a.Fragment,null,L("section",{className:q.a.detalles__producto},L("div",{className:"container"},L(O.a,{tabs:!0},L(C.a,null,L(E.a,{className:F()({active:"1"===t}),onClick:function(){o("1")}},"Descripci\xf3n")),L(C.a,null,L(E.a,{className:F()({active:"2"===t}),onClick:function(){o("2")}},"Informaci\xf3n nutricional")))),L("div",{style:{backgroundColor:"white"}},L("div",{className:"container pt-3"},L(S.a,{activeTab:t,className:q.a.sub__container},L(T.a,{tabId:"1"},L(I.a,null,L(M.a,{sm:"12",className:q.a.p},e.descripcion_basica))),L(T.a,{tabId:"2"},L(I.a,null,L(M.a,{sm:"12",className:q.a.p,dangerouslySetInnerHTML:{__html:e.descripcion}}))))))))},J=t("hCbx"),B=t("nOHt"),K=t("WkNE"),Q=n.a.createElement,V=function(e){Object(c.useEffect)((function(){document.getElementsByTagName("body")[0]&&(document.getElementsByTagName("body")[0].style.overflowY="scroll"),a()}),[]);var a=function(){var a=Object(r.a)(o.a.mark((function a(){return o.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return e.restablecerFiltros(),a.prev=1,a.next=4,e.traerPorId(e.idProducto);case 4:a.next=9;break;case 6:a.prev=6,a.t0=a.catch(1),console.log(a.t0);case 9:case"end":return a.stop()}}),a,null,[[1,6]])})));return function(){return a.apply(this,arguments)}}();Object(B.useRouter)();return function(){if(e.loading)return Q("div",{className:"col-12 text-center mt-4"},Q(d.a,null));if(e.error)return Q(Error,null);if(!e.producto)return null;var a=e.producto.data[0],t=a.descripcion,s=a.descripcion_basica;return Q(n.a.Fragment,null,Q(i.a,{title:e.producto.data[0].producto,metadesc:e.producto.data[0].descripcion_basica}),Q("section",{className:"pb-5",style:{backgroundColor:"white"}},Q("div",{className:"wrapper__producto container mb-5"},Q(y,{producto:e.producto.data[0],subProductos:e.producto.subproductos})),Q(R,{descripcion:t,descripcion_basica:s})),Q("div",{className:"container"},Q(J.a,null)),Q(K.a,null))}()};V.getInitialProps=function(){var e=Object(r.a)(o.a.mark((function e(a){var t,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.query,s=t.producto[1],e.abrupt("return",{idProducto:s});case 3:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();a.default=Object(l.b)((function(e){return e.productosReducer}),u)(V)},"9a8N":function(e,a,t){"use strict";var s=t("wx14"),o=t("zLVn"),r=t("q1tI"),c=t.n(r),n=t("17x9"),i=t.n(n),l=t("TSYQ"),u=t.n(l),d=t("33Jr"),p={tabs:i.a.bool,pills:i.a.bool,vertical:i.a.oneOfType([i.a.bool,i.a.string]),horizontal:i.a.string,justified:i.a.bool,fill:i.a.bool,navbar:i.a.bool,card:i.a.bool,tag:d.g,className:i.a.string,cssModule:i.a.object},m=function(e){var a=e.className,t=e.cssModule,r=e.tabs,n=e.pills,i=e.vertical,l=e.horizontal,p=e.justified,m=e.fill,f=e.navbar,b=e.card,_=e.tag,g=Object(o.a)(e,["className","cssModule","tabs","pills","vertical","horizontal","justified","fill","navbar","card","tag"]),v=Object(d.e)(u()(a,f?"navbar-nav":"nav",!!l&&"justify-content-"+l,function(e){return!1!==e&&(!0===e||"xs"===e?"flex-column":"flex-"+e+"-column")}(i),{"nav-tabs":r,"card-header-tabs":b&&r,"nav-pills":n,"card-header-pills":b&&n,"nav-justified":p,"nav-fill":m}),t);return c.a.createElement(_,Object(s.a)({},g,{className:v}))};m.propTypes=p,m.defaultProps={tag:"ul",vertical:!1},a.a=m},CI6Y:function(e,a,t){"use strict";var s=t("q1tI"),o=t.n(s),r=t("QUvA"),c=t.n(r),n=t("YFqc"),i=t.n(n),l=t("pRT7"),u=t("rOcY"),d=t("nOHt"),p=t.n(d),m=t("MX0m"),f=t.n(m),b=o.a.createElement,_=function(){return b("div",{className:"jsx-3911565700 text-center"},b("div",{className:"jsx-3911565700 lds-ellipsis"},b("div",{className:"jsx-3911565700"}),b("div",{className:"jsx-3911565700"}),b("div",{className:"jsx-3911565700"}),b("div",{className:"jsx-3911565700"})),b(f.a,{id:"3911565700"},[".lds-ellipsis.jsx-3911565700{display:inline-block;position:relative;width:80px;height:80px;}",".lds-ellipsis.jsx-3911565700 div.jsx-3911565700{position:absolute;top:33px;width:13px;height:13px;border-radius:50%;background:#FFB347;-webkit-animation-timing-function:cubic-bezier(0,1,1,0);animation-timing-function:cubic-bezier(0,1,1,0);}",".lds-ellipsis.jsx-3911565700 div.jsx-3911565700:nth-child(1){left:8px;-webkit-animation:lds-ellipsis1-jsx-3911565700 0.6s infinite;animation:lds-ellipsis1-jsx-3911565700 0.6s infinite;}",".lds-ellipsis.jsx-3911565700 div.jsx-3911565700:nth-child(2){left:8px;-webkit-animation:lds-ellipsis2-jsx-3911565700 0.6s infinite;animation:lds-ellipsis2-jsx-3911565700 0.6s infinite;}",".lds-ellipsis.jsx-3911565700 div.jsx-3911565700:nth-child(3){left:32px;-webkit-animation:lds-ellipsis2-jsx-3911565700 0.6s infinite;animation:lds-ellipsis2-jsx-3911565700 0.6s infinite;}",".lds-ellipsis.jsx-3911565700 div.jsx-3911565700:nth-child(4){left:56px;-webkit-animation:lds-ellipsis3-jsx-3911565700 0.6s infinite;animation:lds-ellipsis3-jsx-3911565700 0.6s infinite;}","@-webkit-keyframes lds-ellipsis1-jsx-3911565700{0%{-webkit-transform:scale(0);-ms-transform:scale(0);transform:scale(0);}100%{-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);}}","@keyframes lds-ellipsis1-jsx-3911565700{0%{-webkit-transform:scale(0);-ms-transform:scale(0);transform:scale(0);}100%{-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);}}","@-webkit-keyframes lds-ellipsis3-jsx-3911565700{0%{-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);}100%{-webkit-transform:scale(0);-ms-transform:scale(0);transform:scale(0);}}","@keyframes lds-ellipsis3-jsx-3911565700{0%{-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);}100%{-webkit-transform:scale(0);-ms-transform:scale(0);transform:scale(0);}}","@-webkit-keyframes lds-ellipsis2-jsx-3911565700{0%{-webkit-transform:translate(0,0);-ms-transform:translate(0,0);transform:translate(0,0);}100%{-webkit-transform:translate(24px,0);-ms-transform:translate(24px,0);transform:translate(24px,0);}}","@keyframes lds-ellipsis2-jsx-3911565700{0%{-webkit-transform:translate(0,0);-ms-transform:translate(0,0);transform:translate(0,0);}100%{-webkit-transform:translate(24px,0);-ms-transform:translate(24px,0);transform:translate(24px,0);}}"]))},g=o.a.createElement;a.a=function(e){var a=e.imagen,t=e.prd,o=Object(s.useState)(!1),r=o[0],n=o[1],d=Object(s.useState)(!0),m=d[0],f=d[1];Object(s.useEffect)((function(){"/producto/[...producto]"==p.a.router.route&&n(!0)}),[]);var b=function(e){var a=e;return Object(l.b)()?a.length>20&&(a=e.substring(0,22)+"..."):a.length>45&&(a=e.substring(0,40)+"..."),a},v=function(e){var a=e.target;f(!1),a.classList.remove("d-none")};return r?g("a",{href:"".concat(u.c,"/producto/").concat(Object(l.c)(t.producto),"/").concat(t.idProducto)},g("div",{className:c.a.container__producto+" my-3"},g("section",{className:c.a.header__card},g("img",{src:a,alt:"prd",className:c.a.img+" d-none",onLoad:v}),m?g(_,null):null),g("section",{className:c.a.body__card},g("span",{className:c.a.label__marca+" d-block text-muted"},t.marca),g("h6",{className:c.a.nombre__producto+" text-muted"},b(t.producto)),g("span",{className:c.a.cantidad+" d-none"},t.peso," KG"),g("h3",{className:c.a.precio+" text-black"},"$",t.precioFinal)),g("span",{className:c.a.label__descuento+" bg-red"},"15% Off"))):g(i.a,{href:"".concat(u.c,"/producto/").concat(Object(l.c)(t.producto),"/").concat(t.idProducto)},g("a",null,g("div",{className:c.a.container__producto+" my-3"},g("section",{className:c.a.header__card},g("img",{src:a,alt:"prd",className:c.a.img+" d-none",onLoad:v}),m?g(_,null):null),g("section",{className:c.a.body__card},g("span",{className:"d-block text-muted"},t.marca),g("h6",{className:c.a.nombre__producto+" text-muted"},b(t.producto)),null!=t.peso?g("span",{className:c.a.cantidad+" d-none"},t.peso," KG"):null,g("h3",{className:c.a.precio+" text-black"},"$",t.precioFinal)),t.descuento?g("span",{className:c.a.label__descuento+" bg-red"},t.descuento,"% Off"):null)))}},Czwy:function(e,a,t){"use strict";var s=t("wx14"),o=t("dI71"),r=t("q1tI"),c=t.n(r),n=t("17x9"),i=t.n(n),l=t("TSYQ"),u=t.n(l),d=t("I8YG"),p=t("33Jr"),m={tag:p.g,activeTab:i.a.any,className:i.a.string,cssModule:i.a.object},f=function(e){function a(a){var t;return(t=e.call(this,a)||this).state={activeTab:t.props.activeTab},t}return Object(o.a)(a,e),a.getDerivedStateFromProps=function(e,a){return a.activeTab!==e.activeTab?{activeTab:e.activeTab}:null},a.prototype.render=function(){var e=this.props,a=e.className,t=e.cssModule,o=e.tag,r=Object(p.f)(this.props,Object.keys(m)),n=Object(p.e)(u()("tab-content",a),t);return c.a.createElement(d.a.Provider,{value:{activeTabId:this.state.activeTab}},c.a.createElement(o,Object(s.a)({},r,{className:n})))},a}(r.Component);a.a=f,f.propTypes=m,f.defaultProps={tag:"div"}},EzvR:function(e,a,t){"use strict";t.d(a,"a",(function(){return f}));var s=t("wx14"),o=t("zLVn"),r=t("q1tI"),c=t.n(r),n=t("17x9"),i=t.n(n),l=t("TSYQ"),u=t.n(l),d=t("I8YG"),p=t("33Jr"),m={tag:p.g,className:i.a.string,cssModule:i.a.object,tabId:i.a.any};function f(e){var a=e.className,t=e.cssModule,r=e.tabId,n=e.tag,i=Object(o.a)(e,["className","cssModule","tabId","tag"]),l=function(e){return Object(p.e)(u()("tab-pane",a,{active:r===e}),t)};return c.a.createElement(d.a.Consumer,null,(function(e){var a=e.activeTabId;return c.a.createElement(n,Object(s.a)({},i,{className:l(a)}))}))}f.propTypes=m,f.defaultProps={tag:"div"}},F66N:function(e,a,t){"use strict";var s=t("wx14"),o=t("zLVn"),r=t("q1tI"),c=t.n(r),n=t("17x9"),i=t.n(n),l=t("TSYQ"),u=t.n(l),d=t("33Jr"),p={tag:d.g,active:i.a.bool,className:i.a.string,cssModule:i.a.object},m=function(e){var a=e.className,t=e.cssModule,r=e.active,n=e.tag,i=Object(o.a)(e,["className","cssModule","active","tag"]),l=Object(d.e)(u()(a,"nav-item",!!r&&"active"),t);return c.a.createElement(n,Object(s.a)({},i,{className:l}))};m.propTypes=p,m.defaultProps={tag:"li"},a.a=m},I8YG:function(e,a,t){"use strict";t.d(a,"a",(function(){return o}));var s=t("q1tI"),o=t.n(s).a.createContext({})},QUvA:function(e,a,t){e.exports={container__producto:"CardProducto_container__producto__3ZzRa",header__card:"CardProducto_header__card__2snWG",img:"CardProducto_img__2JjZn",body__card:"CardProducto_body__card__2yHOq",precio:"CardProducto_precio__3WgOa",cantidad:"CardProducto_cantidad__M84Dc",label__descuento:"CardProducto_label__descuento__1fclU",nombre__producto:"CardProducto_nombre__producto__3yzZP",btn_comprar:"CardProducto_btn_comprar__3B3do"}},WCxs:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/producto/[...producto]",function(){return t("30mp")}])},WkNE:function(e,a,t){"use strict";var s=t("q1tI"),o=t.n(s),r=t("rOcY"),c=o.a.createElement;a.a=function(){return c("div",{className:"btn-wpp",onClick:function(){window.location.assign("https://api.whatsapp.com/send?phone=+542304347008&text=Consulta desde pagina web")}},c("img",{src:"".concat(r.d,"/assets/wpp.png"),className:"img-fluid",alt:"WhatsApp de Oliver PetShop"}))}},YPbN:function(e,a,t){e.exports={detalles__producto:"infoProducto_detalles__producto__2JajI",nav__item:"infoProducto_nav__item__2Jwvy",active:"infoProducto_active__2h4RZ",sub__container:"infoProducto_sub__container__3frM_",p:"infoProducto_p__21_wv"}},arvA:function(e,a,t){"use strict";var s=t("wx14"),o=t("zLVn"),r=t("JX7q"),c=t("dI71"),n=t("q1tI"),i=t.n(n),l=t("17x9"),u=t.n(l),d=t("TSYQ"),p=t.n(d),m=t("33Jr"),f={tag:m.g,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),disabled:u.a.bool,active:u.a.bool,className:u.a.string,cssModule:u.a.object,onClick:u.a.func,href:u.a.any},b=function(e){function a(a){var t;return(t=e.call(this,a)||this).onClick=t.onClick.bind(Object(r.a)(t)),t}Object(c.a)(a,e);var t=a.prototype;return t.onClick=function(e){this.props.disabled?e.preventDefault():("#"===this.props.href&&e.preventDefault(),this.props.onClick&&this.props.onClick(e))},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,r=e.active,c=e.tag,n=e.innerRef,l=Object(o.a)(e,["className","cssModule","active","tag","innerRef"]),u=Object(m.e)(p()(a,"nav-link",{disabled:l.disabled,active:r}),t);return i.a.createElement(c,Object(s.a)({},l,{ref:n,onClick:this.onClick,className:u}))},a}(i.a.Component);b.propTypes=f,b.defaultProps={tag:"a"},a.a=b},hCbx:function(e,a,t){"use strict";var s=t("q1tI"),o=t.n(s),r=t("CI6Y"),c=t("/MKj"),n=t("TVVT"),i=t("XOuL"),l=o.a.createElement;a.a=Object(c.b)((function(e){return e.productosReducer}),n)((function(e){Object(s.useEffect)((function(){a()}),[]);var a=function(){0===e.ofertas.length&&e.traerPromociones()};return l("div",{className:"my-5"},l("h4",{className:"text-black"},"Nuestras Promociones"),l("div",{className:"row"},e.loading?l(i.a,null):e.ofertas.map((function(e){return l("div",{key:e.idSubProducto,className:"col-6 col-md-4 col-xl-3"},l(r.a,{imagen:e.foto,prd:e}))}))))}))},lZUM:function(e,a,t){e.exports={descripcionProducto:"ProductoSingle_descripcionProducto__1RfPJ",precios:"ProductoSingle_precios__1k4N4",indicador__precio:"ProductoSingle_indicador__precio__S6-Yv",valor__precio:"ProductoSingle_valor__precio__1sFdb",indicador__cantidad:"ProductoSingle_indicador__cantidad__3gUyc",titulo__indicadorCantidad:"ProductoSingle_titulo__indicadorCantidad__1KlYa",row:"ProductoSingle_row__16PB_",caja_cantidadKg:"ProductoSingle_caja_cantidadKg__1s5pC",active:"ProductoSingle_active__24bo1","input-group-prepend":"ProductoSingle_input-group-prepend__2WZL7","input-group-append":"ProductoSingle_input-group-append__3ZFw1","input-group-text":"ProductoSingle_input-group-text__GZ1bR","input-group":"ProductoSingle_input-group__U1WNg"}},ok1R:function(e,a,t){"use strict";var s=t("wx14"),o=t("zLVn"),r=t("q1tI"),c=t.n(r),n=t("17x9"),i=t.n(n),l=t("TSYQ"),u=t.n(l),d=t("33Jr"),p=i.a.oneOfType([i.a.number,i.a.string]),m={tag:d.g,noGutters:i.a.bool,className:i.a.string,cssModule:i.a.object,form:i.a.bool,xs:p,sm:p,md:p,lg:p,xl:p},f={tag:"div",widths:["xs","sm","md","lg","xl"]},b=function(e){var a=e.className,t=e.cssModule,r=e.noGutters,n=e.tag,i=e.form,l=e.widths,p=Object(o.a)(e,["className","cssModule","noGutters","tag","form","widths"]),m=[];l.forEach((function(a,t){var s=e[a];if(delete p[a],s){var o=!t;m.push(o?"row-cols-"+s:"row-cols-"+a+"-"+s)}}));var f=Object(d.e)(u()(a,r?"no-gutters":null,i?"form-row":"row",m),t);return c.a.createElement(n,Object(s.a)({},p,{className:f}))};b.propTypes=m,b.defaultProps=f,a.a=b},rePB:function(e,a,t){"use strict";function s(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}t.d(a,"a",(function(){return s}))},rhny:function(e,a,t){"use strict";var s=t("wx14"),o=t("zLVn"),r=t("q1tI"),c=t.n(r),n=t("17x9"),i=t.n(n),l=t("TSYQ"),u=t.n(l),d=t("33Jr"),p=i.a.oneOfType([i.a.number,i.a.string]),m=i.a.oneOfType([i.a.bool,i.a.number,i.a.string,i.a.shape({size:i.a.oneOfType([i.a.bool,i.a.number,i.a.string]),order:p,offset:p})]),f={tag:d.g,xs:m,sm:m,md:m,lg:m,xl:m,className:i.a.string,cssModule:i.a.object,widths:i.a.array},b={tag:"div",widths:["xs","sm","md","lg","xl"]},_=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},g=function(e){var a=e.className,t=e.cssModule,r=e.widths,n=e.tag,i=Object(o.a)(e,["className","cssModule","widths","tag"]),l=[];r.forEach((function(a,s){var o=e[a];if(delete i[a],o||""===o){var r=!s;if(Object(d.c)(o)){var c,n=r?"-":"-"+a+"-",p=_(r,a,o.size);l.push(Object(d.e)(u()(((c={})[p]=o.size||""===o.size,c["order"+n+o.order]=o.order||0===o.order,c["offset"+n+o.offset]=o.offset||0===o.offset,c)),t))}else{var m=_(r,a,o);l.push(m)}}})),l.length||l.push("col");var p=Object(d.e)(u()(a,l),t);return c.a.createElement(n,Object(s.a)({},i,{className:p}))};g.propTypes=f,g.defaultProps=b,a.a=g}},[["WCxs",1,2,5,0,3,4,6,7,12]]]);