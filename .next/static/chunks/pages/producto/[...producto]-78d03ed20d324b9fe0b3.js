(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[543],{5257:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return $}});var c=r(809),n=r.n(c),o=r(266),a=r(5893),i=r(7294),s=r(2642),u=r(4494),d=r(6705),l=r(5500),p=r(2809),f=r(8280),m=r(3088),b=r(2675),h=r(44),_=r(1047),g=r.n(_),v=r(1130),x=r(1433),j=r(6455),y=r.n(j);function P(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);e&&(c=c.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,c)}return r}function k(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?P(Object(r),!0).forEach((function(e){(0,p.Z)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):P(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var N=(0,u.$j)((function(t){return t.carritoReducer}),m)((function(t){(0,i.useEffect)((function(){var e=t.producto,r=e.marca,c=e.producto,n=e.idProducto;if(t.subProductos.length>0){var o=t.subProductos[0],a=o.foto,i=o.peso,s=o.precioFinal,u=o.tama\u00f1o,d=o.idSubProducto,l=o.subProducto,p=o.stock;Z(a,i,s,c,u,d,r,l,n,p)}else Z("".concat(v.mp,"/sin-imagen.png"),null,null,c,null,null,r,null,n,null)}),[t.producto]);var e=(0,i.useState)(!1),r=e[0],c=e[1],s=(0,i.useState)({}),u=s[0],d=s[1],p=(0,i.useState)(!1),m=p[0],_=p[1];(0,i.useEffect)((function(){t.error&&y().fire("Atenci\xf3n",t.error,"warning")}),[t.error]),(0,i.useEffect)((function(){t.productos.length>0&&!t.productos[0].oferta&&m&&y().fire("Listo","Producto agregado al carrito","success").then((function(){return _(!1)}))}),[t.productos]);var j=[];t.subProductos.map((function(t){j.push(t.foto)}));var P=function(t){var e=document.getElementById("cantidad_prd"),r=parseInt(e.value);if("-"===t){if(r<=1)return!1;r--}else{if(r>=u.stock)return!1;r++}return e.value=r,d(k(k({},u),{},{cantidad:r}))},N=function(e,r,c,n,o,a,i){for(var s=document.getElementsByClassName(g().caja_cantidadKg),l=0;l<s.length;l++)s[l].classList.contains(g().active)&&s[l].classList.remove(g().active);if(s[e].classList.add(g().active),!r||!c||!n||!o||!a||!i)return d(k(k({},u),{},{peso:t.subProductos[0].peso,precio:t.subProductos[0].precioFinal,idSubProducto:t.subProductos[0].idSubProducto,subProducto:t.subProductos[0].subProducto,stock:t.subProductos[0].stock}));d(k(k({},u),{},{peso:r,precio:c,"tama\xf1o":n,idSubProducto:o,subProducto:a,stock:i}))},w=function(){var e=(0,o.Z)(n().mark((function e(){return n().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:_(!0),t.agregarProducto(u);case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Z=function(t,e,r,c,n,o,a,i,s,u){d({producto:c,foto:t,peso:e,cantidad:1,"tama\xf1o":n,idSubProducto:o,marca:a,subProducto:i,idProducto:s,stock:u,precio:r})};return(0,a.jsxs)("div",{className:"row",children:[(0,a.jsx)("div",{className:"col-12 col-sm-6",children:(0,a.jsx)(f.Z,{imagenes:j,changePeso:N,subProductos:t.subProductos})}),(0,a.jsxs)("div",{className:"col-12 col-sm-6 pt-5 "+g().descripcionProducto,children:[(0,a.jsxs)("div",{className:"d-flex align-items-center justify-content-between",children:[(0,a.jsx)("h3",{className:g().marca+" my-0",children:u.marca}),(0,a.jsxs)("span",{className:"text-muted",children:[u.stock," unidades en stock"]})]}),(0,a.jsx)("h1",{children:u.producto}),(0,a.jsxs)("div",{className:g().precios+" d-flex my-3",children:[(0,a.jsxs)("div",{className:g().indicador__precio,children:[(0,a.jsx)("p",{children:"Precio"}),(0,a.jsxs)("span",{className:g().valor__precio,children:["$",u.precio]})]}),(0,a.jsxs)("div",{className:g().indicador__cantidad,children:[(0,a.jsx)("p",{className:g().titulo__indicadorCantidad+" text-center",children:"Seleccion\xe1 tama\xf1o"}),(0,a.jsx)("div",{className:"row justify-content-center",children:t.subProductos.map((function(t,e){return 0==e?(0,a.jsxs)("div",{className:g().caja_cantidadKg+" "+g().active,onClick:function(){return N(e,"".concat(t.peso),t.precioFinal,"".concat(t.tama\u00f1o),t.idSubProducto,"".concat(t.subProducto),t.stock)},children:[(0,a.jsxs)("p",{className:g().kilos,children:[t.peso," Kgs"]}),(0,a.jsxs)("span",{className:g().precioDelKg,children:["$",t.precioFinal]})]},e):(0,a.jsxs)("div",{className:g().caja_cantidadKg,onClick:function(){return N(e,"".concat(t.peso),t.precioFinal,"".concat(t.tama\u00f1o),t.idSubProducto,"".concat(t.subProducto),t.stock)},children:[(0,a.jsxs)("p",{className:g().kilos,children:[t.peso," Kgs"]}),(0,a.jsxs)("span",{className:g().precioDelKg,children:["$",t.precioFinal]})]},e)}))}),(0,a.jsxs)("div",{className:"input-group mt-2",children:[(0,a.jsx)("div",{className:"input-group-prepend",onClick:function(){return P("-")},children:(0,a.jsx)("span",{className:"input-group-text",children:"-"})}),(0,a.jsx)("input",{type:"number",id:"cantidad_prd",className:"form-control text-center",value:u.cantidad,min:1,max:u.stock,disabled:0==u.stock}),(0,a.jsx)("div",{className:"input-group-append",onClick:function(){return P("+")},children:(0,a.jsx)("span",{className:"input-group-text",children:"+"})})]})]})]}),t.loading?(0,a.jsx)("div",{className:"text-center",children:(0,a.jsx)(l.Z,{})}):(0,a.jsx)(x.e$,{disabled:!(u.stock>0),className:"boton bg-yellow",onClick:w,children:"Comprar"}),u.stock>0?null:(0,a.jsx)("div",{className:"alert alert-danger my-2 text-center",children:"Producto sin stock"})]}),r?(0,a.jsx)(b.Z,{closeModal:function(){return c(!1)},children:(0,a.jsx)(h.Z,{})}):null]})})),w=r(7243),Z=r(3999),S=r(8008),C=r(9393),O=r(8829),I=r(267),E=r(1252),F=r(4184),R=r.n(F),D=r(2638),K=r.n(D),T=function(t){var e=(0,i.useState)("1"),r=e[0],c=e[1],n=function(t){r!==t&&c(t)};return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("section",{className:K().detalles__producto,children:[(0,a.jsx)("div",{className:"container",children:(0,a.jsxs)(w.Z,{tabs:!0,children:[(0,a.jsx)(Z.Z,{children:(0,a.jsx)(S.Z,{className:R()({active:"1"===r}),onClick:function(){n("1")},children:"Descripci\xf3n"})}),(0,a.jsx)(Z.Z,{children:(0,a.jsx)(S.Z,{className:R()({active:"2"===r}),onClick:function(){n("2")},children:"Informaci\xf3n nutricional"})})]})}),(0,a.jsx)("div",{style:{backgroundColor:"white"},children:(0,a.jsx)("div",{className:"container pt-3",children:(0,a.jsxs)(C.Z,{activeTab:r,className:K().sub__container,children:[(0,a.jsx)(O.Z,{tabId:"1",children:(0,a.jsx)(I.Z,{children:(0,a.jsx)(E.Z,{sm:"12",className:K().p,children:t.descripcion_basica})})}),(0,a.jsx)(O.Z,{tabId:"2",children:(0,a.jsx)(I.Z,{children:(0,a.jsx)(E.Z,{sm:"12",className:K().p,dangerouslySetInnerHTML:{__html:t.descripcion}})})})]})})})]})})},q=r(7438),L=r(6081),B=r(5546),J=r(3687),M=function(t){var e=t.productosReducer,r=e.error,c=e.producto,n=t.notFound,o=t.data;if((0,i.useEffect)((function(){document.getElementsByTagName("body")[0]&&(document.getElementsByTagName("body")[0].style.overflowY="scroll"),t.restablecerFiltros(),n||t.traerPorId(o)}),[]),n)return(0,a.jsx)(J.Z,{message:"No se ha podido encontrar el producto que usted busca."});if(r)return(0,a.jsx)(J.Z,{message:"error"});if(!c)return(0,a.jsx)(l.Z,{});var u=c.data[0],d=u.descripcion,p=u.descripcion_basica,f=u.producto,m=u.marca,b=u.subcategoria;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.Z,{title:f,metadesc:"".concat(f," - ").concat(b," - ").concat(m," - ").concat(p)}),(0,a.jsxs)("section",{className:"pb-5",style:{backgroundColor:"white"},children:[(0,a.jsx)("div",{className:"wrapper__producto container mb-5",children:(0,a.jsx)(N,{producto:c.data[0],subProductos:c.subproductos})}),(0,a.jsx)(T,{descripcion:d,descripcion_basica:p})]}),(0,a.jsx)("div",{className:"container",children:(0,a.jsx)(q.Z,{})}),(0,a.jsx)(L.Z,{}),(0,a.jsx)(B.Z,{})]})};M.getInitialProps=function(){var t=(0,o.Z)(n().mark((function t(e){var r,c,o,a;return n().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.query,c=r.producto[1],t.next=4,fetch("".concat(v.bl,"/productos/").concat(c));case 4:return o=t.sent,t.next=7,o.json();case 7:if(a=t.sent,200===o.status){t.next=10;break}return t.abrupt("return",{notFound:!0,data:null});case 10:return t.abrupt("return",{notFound:!1,data:a});case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();var $=(0,u.$j)((function(t){return{productosReducer:t.productosReducer}}),d)(M)},8280:function(t,e,r){"use strict";var c=r(5893),n=r(7294),o=r(1433);e.Z=function(t){var e=(0,n.useState)(""),r=e[0],a=e[1];(0,n.useEffect)((function(){a(t.imagenes[0])}),[]);var i=function(e,r,c,n,o,i,s,u){for(var d=e.target,l=e.srcElement.parentNode,p=0;p<l.children.length;p++)l.children[p].classList.remove("active");d.classList.add("active");var f=d.getAttribute("src");a(f),t.changePeso(r,"".concat(c),n,"".concat(o),i,"".concat(s),u)};return(0,c.jsxs)(o.iR,{className:"row",children:[(0,c.jsx)(o.ob,{className:"col-12 col-md-3 text-center pt-5",children:t.oferta?(0,c.jsx)("img",{src:t.imagenes[0],alt:t.descripcion,className:"active"}):t.imagenes.map((function(e,r){return 0==r?(0,c.jsx)("img",{src:e,onClick:function(){return i(event,r)},alt:"prd",className:"active"},r):(0,c.jsx)("img",{src:e,onClick:function(){return i(event,r,"".concat(t.subProductos[r].peso),t.subProductos[r].precioUnidad,"".concat(t.subProductos[r].tama\u00f1o),t.subProductos[r].idSubProducto,"".concat(t.subProductos[r].subProducto),"".concat(t.subProductos[r].stock))},alt:t.subProductos[r].subProducto},r)}))}),(0,c.jsx)(o.Bx,{className:"col-12 col-md-9",children:(0,c.jsx)("img",{src:r,className:"img-fluid"})})]})}},1433:function(t,e,r){"use strict";r.d(e,{e$:function(){return n},iR:function(){return o},ob:function(){return a},Bx:function(){return i}});var c=r(9163),n=c.ZP.button.withConfig({displayName:"style__Boton",componentId:"sc-bodl65-0"})(["color:",";background-color:",";border:1px solid var(--oliver);transition:all 0.5s ease;padding:5px 10px;font-size:12px;width:100%;font-size:16px;border-radius:10px;margin:5px 0px;"],(function(t){return t.disabled?"gray":"white"}),(function(t){return t.disabled?"var(--secondary)":"var(--oliver)"})),o=c.ZP.div.withConfig({displayName:"style__Slider",componentId:"sc-bodl65-1"})(["@media (max-width:768px){flex-direction:column-reverse;}"]),a=c.ZP.div.withConfig({displayName:"style__Items",componentId:"sc-bodl65-2"})(["height:500px;overflow-y:auto;overflow-x:hidden;::-webkit-scrollbar{display:none;}> img{height:120px;width:100%;object-fit:contain;cursor:pointer;&.active{border:2px solid var(--oliver);}&:hover{filter:brightness(70%);transition:all 0.5s ease;}}@media (max-width:768px){> img{width:auto;}height:180px;}"]),i=c.ZP.div.withConfig({displayName:"style__ImagenActiva",componentId:"sc-bodl65-3"})(["height:500px;text-align:center;> img{height:100%;object-fit:cover;}@media (max-width:768px){height:300px;overflow-y:hidden;overflow-x:auto;}"])},6705:function(t,e,r){"use strict";r.r(e),r.d(e,{traerProductos:function(){return d},traerMas:function(){return l},traerPorId:function(){return p},traerPromociones:function(){return f},ordenarProductos:function(){return m},aplicarFiltro:function(){return b},quitarFiltro:function(){return h},restablecerFiltros:function(){return _},updatePaginacion:function(){return g}});var c=r(5402),n=r(809),o=r.n(n),a=r(266),i=r(1130),s=r(3005),u=r(1387),d=function(){return function(){var t=(0,a.Z)(o().mark((function t(e,r){var c,n,a,d,l,p,f,m,b,h,_,g,v,x;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e({type:u.br}),t.prev=1,c=r().productosReducer,n=c.filtrando,a=c.filtros,d=a.categoria,l=a.subcategoria,p=a.marca,f=a.search,a.orden,m=c.paginacion,b=m.desde,h=m.limiteMobile,_=m.limiteDesktop,g="".concat(i.bl,"/productos"),n?""!==f.trim()?g+="/buscar?busqueda=".concat(f,"&"):(g+="/filtro/filtrar?",d&&(g+="categoria=".concat(d,"&")),l&&(g+="subcategoria=".concat(l,"&")),p&&(g+="marca=".concat(p,"&"))):g+="?",g+="desde=".concat(b,"&limite=").concat((0,s.tq)()?h:_),t.next=8,fetch(g);case 8:return v=t.sent,t.next=11,v.json();case 11:return x=t.sent,t.abrupt("return",e({type:u.J7,payload:x.data}));case 15:t.prev=15,t.t0=t.catch(1),e({type:u.pn,payload:t.t0});case 18:case"end":return t.stop()}}),t,null,[[1,15]])})));return function(e,r){return t.apply(this,arguments)}}()},l=function(){return function(){var t=(0,a.Z)(o().mark((function t(e,r){var n,a,d,l,p,f,m,b,h,_,g,v,x;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e({type:u.ZJ}),t.prev=1,n=r().productosReducer,a=n.productos,d=n.filtrando,l=n.filtros,p=l.categoria,f=l.subcategoria,m=l.marca,b=l.search,l.orden,h=n.paginacion,_=h.desde,g=h.limiteMobile,v=h.limiteDesktop,x="".concat(i.bl,"/productos"),d?""!==b.trim()?x+="/buscar?busqueda=".concat(b,"&"):(x+="/filtro/filtrar?",p&&(x+="categoria=".concat(p,"&")),f&&(x+="subcategoria=".concat(f,"&")),m&&(x+="marca=".concat(m,"&"))):x+="?",x+="desde=".concat(_,"&limite=").concat((0,s.tq)()?g:v),t.abrupt("return",fetch(x).then((function(t){return t.json()})).then((function(t){if(0!==t.data.length){var r=[].concat((0,c.Z)(a),(0,c.Z)(t.data));e({type:u.k,payload:r})}else e({type:u.JU})})));case 9:t.prev=9,t.t0=t.catch(1),e({type:u.pn,payload:t.t0});case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e,r){return t.apply(this,arguments)}}()},p=function(t){return function(){var e=(0,a.Z)(o().mark((function e(r){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r({type:u.JY,payload:t});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},f=function(){return function(){var t=(0,a.Z)(o().mark((function t(e){var r;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e({type:u.br}),t.prev=1,r="".concat(i.bl,"/subproductos/ofertas?desde=0&limite=9"),(0,s.tq)()&&(r="".concat(i.bl,"/subproductos/ofertas?desde=0&limite=6")),t.abrupt("return",fetch(r).then((function(t){return t.json()})).then((function(t){e({type:u.X,payload:t.data})})));case 7:t.prev=7,t.t0=t.catch(1),e({type:u.pn,payload:t.t0.message});case 10:case"end":return t.stop()}}),t,null,[[1,7]])})));return function(e){return t.apply(this,arguments)}}()},m=function(t){return function(){var e=(0,a.Z)(o().mark((function e(r){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r({type:u.br});try{r({type:u.UJ,payload:t})}catch(c){r({type:u.pn,payload:c})}case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},b=function(t,e){return function(r){switch(t){case"categoria":r({type:u.K$,payload:e});break;case"subcategoria":r({type:u.h_,payload:e});break;case"marca":r({type:u.Mo,payload:e});break;case"search":r({type:u.uI,payload:e});break;case"orden":r({type:u.xT,payload:e})}}},h=function(t){return function(e,r){var c=r().productosReducer.filtros,n=c.categoria,o=c.subcategoria,a=c.marca;c.search,c.orden;switch(t){case"categoria":e(o||a?{type:u.rv}:{type:u.kT});break;case"subcategoria":e(n||a?{type:u.WA}:{type:u.kT});break;case"marca":e(n||o?{type:u.G6}:{type:u.kT});break;case"buscador":e({type:u.I1});break;case"orden":e({type:u.DS})}}},_=function(){return function(t){t({type:u.kT})}},g=function(){return function(t,e){var r=e().productosReducer.paginacion,c=(0,s.tq)()?r.desde+r.limiteMobile:r.desde+r.limiteDesktop;t({type:u.Lo,payload:c})}}},4432:function(t,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/producto/[...producto]",function(){return r(5257)}])},1047:function(t){t.exports={descripcionProducto:"ProductoSingle_descripcionProducto__1RfPJ",precios:"ProductoSingle_precios__1k4N4",indicador__precio:"ProductoSingle_indicador__precio__S6-Yv",valor__precio:"ProductoSingle_valor__precio__1sFdb",indicador__cantidad:"ProductoSingle_indicador__cantidad__3gUyc",titulo__indicadorCantidad:"ProductoSingle_titulo__indicadorCantidad__1KlYa",row:"ProductoSingle_row__16PB_",caja_cantidadKg:"ProductoSingle_caja_cantidadKg__1s5pC",active:"ProductoSingle_active__24bo1","input-group-prepend":"ProductoSingle_input-group-prepend__2WZL7","input-group-append":"ProductoSingle_input-group-append__3ZFw1","input-group-text":"ProductoSingle_input-group-text__GZ1bR","input-group":"ProductoSingle_input-group__U1WNg"}},2638:function(t){t.exports={detalles__producto:"infoProducto_detalles__producto__2JajI",nav__item:"infoProducto_nav__item__2Jwvy",active:"infoProducto_active__2h4RZ",sub__container:"infoProducto_sub__container__3frM_",p:"infoProducto_p__21_wv"}}},function(t){t.O(0,[679,455,274,315,774,888,179],(function(){return e=4432,t(t.s=e);var e}));var e=t.O();_N_E=e}]);