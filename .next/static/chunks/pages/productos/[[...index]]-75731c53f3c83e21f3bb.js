(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[794],{6941:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return D}});var n=r(809),a=r.n(n),i=r(266),o=r(5893),s=r(2642),c=r(7294),l=r(2160),d=r(4494),u=r(6705),p=r(5500),f=r(9398),x=r(7625),h=r(3005),m=r(9163),g=m.ZP.span.withConfig({displayName:"style__EtiquetaFiltro",componentId:"sc-w5zz67-0"})(["> svg{width:20px;}text-transform:uppercase;font-size:13px;font-weight:600;font-family:'Quicksand',sans-serif;background-color:var(--oliver);color:white;padding:7px 10px;border-radius:0px;"]),b=m.ZP.div.withConfig({displayName:"style__Row",componentId:"sc-w5zz67-1"})(["display:flex;align-items:center;justify-content:space-between;"]),y=m.ZP.div.withConfig({displayName:"style__FormOrdenPrecio",componentId:"sc-w5zz67-2"})(["display:flex;align-items:center;> span{margin-right:10px;}> select{height:34px;padding:5px 20px 5px 10px;border:1px solid #eee;-webkit-box-shadow:0 1px 0 0 #ccc;-moz-box-shadow:0 1px 0 0 #ccc;box-shadow:0 1px 0 0 #ccc;color:#666;max-width:170px;background:#fff;-webkit-border-radius:5px;-moz-border-radius:5px;border-radius:5px;}"]),v=m.ZP.button.withConfig({displayName:"style__Boton",componentId:"sc-w5zz67-3"})(["color:white;background-color:var(--oliver);border:1px solid var(--oliver);transition:all 0.5s ease;padding:5px 10px;font-size:12px;width:100%;font-size:16px;border-radius:10px;margin:5px 0px;"]),w=(0,d.$j)((function(e){return e.productosReducer}),u)((function(e){var t=e.filtros,r=e.paginacion,n=e.filtrando,s=(0,c.useState)(""),d=s[0],u=s[1];(0,c.useEffect)((function(){"/productos"!==e.location?e.query.search?j(e.query.search):j(e.query.index[0]):m()}),[]),(0,c.useEffect)((function(){r.desde>0&&e.traerMas()}),[r]),(0,c.useEffect)((function(){n&&m()}),[t]);var m=function(){var t=(0,i.Z)(a().mark((function t(){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.traerProductos();case 3:t.next=8;break;case 5:t.prev=5,t.t0=t.catch(0),console.log(t.t0);case 8:case"end":return t.stop()}}),t,null,[[0,5]])})));return function(){return t.apply(this,arguments)}}(),w=function(){e.updatePaginacion()},j=function(e){u(e)};"/productos"==e.location&&""!=d&&u("");return e.loading||!e.productos?(0,o.jsx)("div",{className:"col-12 text-center",children:(0,o.jsx)(p.Z,{})}):(0,o.jsxs)(o.Fragment,{children:[""!==d&&e.filtrando?(0,o.jsxs)(g,{children:[(0,o.jsx)(x.G,{icon:f.wn1})," ",d]}):null,(0,o.jsxs)(b,{children:[(0,o.jsxs)("span",{className:"text-muted",children:[(0,o.jsx)("b",{className:"txt-yellow",children:e.productos.length})," Productos encontrados"]}),(0,o.jsxs)(y,{children:[(0,o.jsx)("span",{className:"txt-yellow text-bold mr-2 d-none d-md-block",children:"Ordenar por: "}),(0,o.jsxs)("select",{onChange:function(t){return"asc"===t.target.value?e.productos.sort((function(e,t){return e.precioUnidad>t.precioUnidad?1:e.precioUnidad<t.precioUnidad?-1:0})):e.productos.sort((function(e,t){return e.precioUnidad<t.precioUnidad?1:e.precioUnidad>t.precioUnidad?-1:0})),e.ordenarProductos(e.productos)},children:[(0,o.jsx)("option",{value:"desc",children:"Mayor precio"}),(0,o.jsx)("option",{value:"asc",children:"Menor precio"})]})]})]}),(0,o.jsxs)("div",{className:"row",children:[e.productos.map((function(e){return 0===e.precioFinal?null:(0,o.jsx)("div",{className:"col-6 col-md-3",children:(0,o.jsx)(l.Z,{imagen:e.foto,prd:e})},e.idProducto)})),e.sinResultados?(0,o.jsx)("div",{className:"alert alert-warning text-center w-100",style:{height:"50px"},children:"No se encontraron m\xe1s resultados"}):function(){var t=(0,h.tq)()?r.limiteMobile:r.limiteDesktop;return(0,o.jsx)(v,{className:e.productos.length<t?"d-none":"",onClick:w,children:e.loading_mas?"Obteniendo productos...":"Cargar m\xe1s"})}()]})]})})),j=m.ZP.div.withConfig({displayName:"style__Container",componentId:"sc-oyv0pg-0"})(["height:100vh;position:fixed;top:66px;left:",";width:25vh;padding:10px 15px 0px 15px;background-color:white;z-index:200;box-shadow:0px 2px 1px -1px rgba(2,2,2,0.2),0px 5px 1px 0px rgba(3,3,3,0.14),0px 1px 3px 0px rgba(0,0,0,0.12);transition:all 0.5s ease;> svg{position:absolute;padding:10px 10px 10px 20px;right:-30px;top:40%;width:50px;height:50px;border-radius:100%;background-color:var(--oliver);border:none;color:white;box-shadow:0px 2px 1px -1px rgba(19,18,18,0.2),0px 1px 10px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12);transition:all .5s ease;cursor:pointer;&.rotar{transform:rotate(180deg);}}"],(function(e){return e.show?"0px":"-25vh"})),k=m.ZP.button.withConfig({displayName:"style__Boton",componentId:"sc-oyv0pg-1"})(["color:white;background-color:var(--oliver);border:1px solid var(--oliver);transition:all 0.5s ease;padding:5px 10px;font-size:12px;width:100%;font-size:16px;border-radius:10px;margin:5px 0px;display:",";> svg{width:20px;margin-right:15px;}"],(function(e){return e.show?"block":"none"})),N=m.ZP.div.withConfig({displayName:"style__Body",componentId:"sc-oyv0pg-2"})([""]),_=m.ZP.section.withConfig({displayName:"style__Seccion",componentId:"sc-oyv0pg-3"})(["> h4{}"]),C=m.ZP.ul.withConfig({displayName:"style__Lista",componentId:"sc-oyv0pg-4"})(["list-style:none;padding:0px 10px 0px 0px;border-bottom:1px solid #b6b6b6;overflow-x:hidden;overflow-y:",";height:",";::-webkit-scrollbar{width:4px;height:3px;}::-webkit-scrollbar-thumb{background:var(--oliver);border-radius:4px;}"],(function(e){return e.overflowY}),(function(e){return"auto"==e.overflowY?"calc(52vh - 45px)":"auto"})),P=m.ZP.li.withConfig({displayName:"style__Item",componentId:"sc-oyv0pg-5"})(["> div{display:flex;align-items:center;justify-content:space-between;margin:10px 0px;font-size:16px;font-family:'Lato',sans-serif;cursor:pointer;background-color:",";padding:",";border-radius:",";> svg{color:#6c757d;cursor:pointer;width:15px;display:",";}}"],(function(e){return"true"==e.active?"#c2c0c0":"transparent"}),(function(e){return"true"==e.active?"5px":"0px"}),(function(e){return"true"==e.active?"5px":"0px"}),(function(e){return"true"==e.active?"block":"none"})),Z=r(4788),F=r(7743),z=r(1130),q=r(3190),R=Z.traerTodas,I=u.aplicarFiltro,T=u.quitarFiltro,M=u.restablecerFiltros,S=u.traerProductos,O={marcasTraerTodas:R,categoriasTraerTodas:F.traerTodas,subcategoriaTraerTodas:function(){return function(){var e=(0,i.Z)(a().mark((function e(t){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:q.br}),e.prev=1,e.abrupt("return",fetch("".concat(z.bl,"/subcategorias")).then((function(e){return e.json()})).then((function(e){var r=e.data;t({type:q.eX,payload:r})})).catch((function(e){t({type:q.pn,payload:e})})));case 5:e.prev=5,e.t0=e.catch(1),t({type:q.pn,payload:e.t0});case 8:case"end":return e.stop()}}),e,null,[[1,5]])})));return function(t){return e.apply(this,arguments)}}()},aplicarFiltro:I,quitarFiltro:T,restablecerFiltros:M,traerProductos:S},E=(0,d.$j)((function(e){return{marcasReducer:e.marcasReducer,productosReducer:e.productosReducer,categoriasReducer:e.categoriasReducer,subcategoriaReducer:e.subcategoriaReducer}}),O)((function(e){var t=(0,c.useState)(!1),r=t[0],n=t[1];(0,c.useEffect)((function(){s()}),[]);var s=function(){var t=(0,i.Z)(a().mark((function t(){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,0!==e.marcasReducer.marcas.length){t.next=4;break}return t.next=4,e.marcasTraerTodas();case 4:if(0!==e.categoriasReducer.categorias.length){t.next=7;break}return t.next=7,e.categoriasTraerTodas();case 7:if(0!==e.subcategoriaReducer.subcategorias.length){t.next=10;break}return t.next=10,e.subcategoriaTraerTodas();case 10:"/productos"!==e.location&&l(),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(0),console.log(t.t0);case 16:case"end":return t.stop()}}),t,null,[[0,13]])})));return function(){return t.apply(this,arguments)}}(),l=function(){return e.query.search?d(Object.keys(e.query)[0],e.query.search):d(e.query.type,e.query.index[1])},d=function(t,r){if(g[t]==r)return u(t);e.aplicarFiltro(t,r)},u=function(t){e.quitarFiltro(t),e.traerProductos()},h=e.productosReducer,m=h.filtrando,g=h.filtros;return 0==e.categoriasReducer.categorias.length||0==e.subcategoriaReducer.subcategorias.length||0==e.marcasReducer.marcas.length?(0,o.jsx)(p.Z,{}):(0,o.jsxs)(j,{show:r,children:[(0,o.jsx)(x.G,{id:"iconFiltroContainer",icon:f._tD,onClick:function(){return n(!r)}}),(0,o.jsxs)(k,{className:"boton bg-yellow mb-3",onClick:function(){e.restablecerFiltros(),e.traerProductos()},show:m,children:[(0,o.jsx)(x.G,{icon:f.Z$V})," Limpiar Filtros"]}),(0,o.jsxs)(N,{children:[(0,o.jsxs)(_,{children:[(0,o.jsx)("h4",{children:"Mascota"}),(0,o.jsx)(C,{overflowY:"hidden",children:e.categoriasReducer.categorias.map((function(e){return(0,o.jsx)(P,{active:(g.categoria==e.idCategoria).toString(),children:(0,o.jsxs)("div",{onClick:function(){return d("categoria","".concat(e.idCategoria))},children:[(0,o.jsx)("span",{className:"text-muted",children:e.categoria}),(0,o.jsx)(x.G,{icon:f.NBC})]})},e.idCategoria)}))})]}),(0,o.jsxs)(_,{children:[(0,o.jsx)("h4",{children:"Alimentos"}),(0,o.jsx)(C,{overflowY:"hidden",children:e.subcategoriaReducer.subcategorias.map((function(e){return(0,o.jsx)(P,{active:(g.subcategoria==e.idSubCategoria).toString(),children:(0,o.jsxs)("div",{onClick:function(){return d("subcategoria","".concat(e.idSubCategoria))},children:[(0,o.jsx)("span",{className:"text-muted",children:e.subcategoria}),(0,o.jsx)(x.G,{icon:f.NBC})]})},e.idSubCategoria)}))})]}),(0,o.jsxs)(_,{children:[(0,o.jsx)("h4",{children:"Marca"}),(0,o.jsx)(C,{overflowY:"auto",children:e.marcasReducer.marcas.map((function(e){return(0,o.jsx)(P,{active:(g.marca==e.idMarca).toString(),children:(0,o.jsxs)("div",{onClick:function(){return d("marca","".concat(e.idMarca))},children:[(0,o.jsx)("span",{className:"text-muted",children:e.marca}),(0,o.jsx)(x.G,{icon:f.NBC})]})},e.idMarca)}))})]})]})]})})),U=r(1163),B=r(6081),L=function(e){var t=(0,U.useRouter)(),r=t.asPath,n=t.query,a="Oliver - Productos";return"/productos"!==r&&(n.search?a=n.search+" en OliverPetShop":n.index[0]&&(a=n.index[0].replace("-"," ").replace(/\b\w/g,(function(e){return e.toUpperCase()}))+" en OliverPetShop")),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.Z,{title:a}),(0,o.jsx)("section",{className:"main__productos container",children:(0,o.jsxs)("div",{className:"row",children:[(0,o.jsx)(E,{location:r,query:n}),(0,o.jsx)("div",{className:"col-12 py-3",children:(0,o.jsx)(w,{location:r,query:n})})]})}),(0,o.jsx)(B.Z,{})]})};L.getInitialProps=function(){var e=(0,i.Z)(a().mark((function e(t){var r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.query,e.abrupt("return",{query:r});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();var D=L},6081:function(e,t,r){"use strict";var n=r(5893),a=(r(7294),r(1130));t.Z=function(){return(0,n.jsx)("div",{className:"btn-wpp",onClick:function(){window.location.assign("https://api.whatsapp.com/send?phone=+542304347008&text=Consulta desde pagina web")},children:(0,n.jsx)("img",{src:"".concat(a.mp,"/assets/wpp.png"),className:"img-fluid",alt:"WhatsApp de Oliver PetShop"})})}},2160:function(e,t,r){"use strict";r.d(t,{Z:function(){return y}});var n=r(5893),a=r(7294),i=r(9163),o=i.ZP.div.withConfig({displayName:"style__Card",componentId:"sc-1r4mmxg-0"})(["background-color:white;padding:8px;height:430px;border-radius:10px;position:relative;cursor:pointer;margin:15px 0px;&:hover{-webkit-box-shadow:1px 2px 7px #2e2e2e;transition:all .5s ease;}@media(max-width:768px){padding:11px;height:320px;}"]),s=i.ZP.div.withConfig({displayName:"style__CardHeader",componentId:"sc-1r4mmxg-1"})(["height:70%;padding:0px 30px;@media(max-width:768px){height:50%;}>img{height:100%;width:100%;object-fit:contain;}"]),c=i.ZP.div.withConfig({displayName:"style__CardBody",componentId:"sc-1r4mmxg-2"})(["padding:10px 0px 0px 0px;>h3{font-size:15px;}"]),l=i.ZP.span.withConfig({displayName:"style__Precio",componentId:"sc-1r4mmxg-3"})(["position:absolute;bottom:15px;font-size:25px;font-family:'Quicksand',sans-serif;color:var(--black);@media(max-width:768px){font-size:20px;}"]),d=i.ZP.span.withConfig({displayName:"style__Marca",componentId:"sc-1r4mmxg-4"})(["font-weight:600;color:var(--oliver);font-size:15px;"]),u=(i.ZP.span.withConfig({displayName:"style__Cantidad",componentId:"sc-1r4mmxg-5"})(["background-color:#FFB347;padding:3px 6px;font-size:12px;font-weight:700;font-family:'Quicksand',sans-serif;border-radius:5px;color:black;float:right"]),i.ZP.span.withConfig({displayName:"style__Descuento",componentId:"sc-1r4mmxg-6"})(["position:absolute;top:25px;left:5px;padding:5px 10px;font-size:12px;font-family:'Quicksand',sans-serif;border-radius:13px;background-color:var(--warning);color:white;"])),p=r(1664),f=r(3005),x=r(1130),h=r(1163),m=r(2679),g=r(5988),b=function(){return(0,n.jsxs)("div",{className:"jsx-3911565700 text-center",children:[(0,n.jsxs)("div",{className:"jsx-3911565700 lds-ellipsis",children:[(0,n.jsx)("div",{className:"jsx-3911565700"}),(0,n.jsx)("div",{className:"jsx-3911565700"}),(0,n.jsx)("div",{className:"jsx-3911565700"}),(0,n.jsx)("div",{className:"jsx-3911565700"})]}),(0,n.jsx)(g.default,{id:"3911565700",children:[".lds-ellipsis.jsx-3911565700{display:inline-block;position:relative;width:80px;height:80px;}",".lds-ellipsis.jsx-3911565700 div.jsx-3911565700{position:absolute;top:33px;width:13px;height:13px;border-radius:50%;background:#FFB347;-webkit-animation-timing-function:cubic-bezier(0,1,1,0);animation-timing-function:cubic-bezier(0,1,1,0);}",".lds-ellipsis.jsx-3911565700 div.jsx-3911565700:nth-child(1){left:8px;-webkit-animation:lds-ellipsis1-jsx-3911565700 0.6s infinite;animation:lds-ellipsis1-jsx-3911565700 0.6s infinite;}",".lds-ellipsis.jsx-3911565700 div.jsx-3911565700:nth-child(2){left:8px;-webkit-animation:lds-ellipsis2-jsx-3911565700 0.6s infinite;animation:lds-ellipsis2-jsx-3911565700 0.6s infinite;}",".lds-ellipsis.jsx-3911565700 div.jsx-3911565700:nth-child(3){left:32px;-webkit-animation:lds-ellipsis2-jsx-3911565700 0.6s infinite;animation:lds-ellipsis2-jsx-3911565700 0.6s infinite;}",".lds-ellipsis.jsx-3911565700 div.jsx-3911565700:nth-child(4){left:56px;-webkit-animation:lds-ellipsis3-jsx-3911565700 0.6s infinite;animation:lds-ellipsis3-jsx-3911565700 0.6s infinite;}","@-webkit-keyframes lds-ellipsis1-jsx-3911565700{0%{-webkit-transform:scale(0);-ms-transform:scale(0);transform:scale(0);}100%{-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);}}","@keyframes lds-ellipsis1-jsx-3911565700{0%{-webkit-transform:scale(0);-ms-transform:scale(0);transform:scale(0);}100%{-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);}}","@-webkit-keyframes lds-ellipsis3-jsx-3911565700{0%{-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);}100%{-webkit-transform:scale(0);-ms-transform:scale(0);transform:scale(0);}}","@keyframes lds-ellipsis3-jsx-3911565700{0%{-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);}100%{-webkit-transform:scale(0);-ms-transform:scale(0);transform:scale(0);}}","@-webkit-keyframes lds-ellipsis2-jsx-3911565700{0%{-webkit-transform:translate(0,0);-ms-transform:translate(0,0);transform:translate(0,0);}100%{-webkit-transform:translate(24px,0);-ms-transform:translate(24px,0);transform:translate(24px,0);}}","@keyframes lds-ellipsis2-jsx-3911565700{0%{-webkit-transform:translate(0,0);-ms-transform:translate(0,0);transform:translate(0,0);}100%{-webkit-transform:translate(24px,0);-ms-transform:translate(24px,0);transform:translate(24px,0);}}"]})]})},y=function(e){var t=e.prd,r=e.imagen,i=(0,a.useState)(!1),g=i[0],y=i[1],v=(0,a.useState)(!0),w=v[0],j=v[1];(0,a.useEffect)((function(){"/oferta/[...oferta]"==h.default.router.route&&y(!0)}),[]);var k=function(e){var t=e;return(0,f.tq)()?t.length>20&&(t=e.substring(0,22)+"..."):t.length>45&&(t=e.substring(0,40)+"..."),t},N=e.oferta?t.descripcion:t.producto,_=e.oferta?t.id:t.idProducto,C=e.oferta?"oferta":"producto";return g?(0,n.jsx)("a",{href:"".concat(x.fQ,"/").concat(C,"/").concat((0,f.oF)(N),"/").concat(_),children:(0,n.jsxs)(o,{children:[(0,n.jsx)(s,{children:(0,n.jsx)(m.LazyLoadImage,{src:r,alt:N,width:"100%",height:"100%"})}),(0,n.jsxs)(c,{children:[(0,n.jsx)(d,{children:e.oferta?k(t.titulo):t.marca}),(0,n.jsx)("h6",{className:"text-muted",children:k(N)}),t.precioFinal&&t.precioFinal>0?(0,n.jsxs)(l,{children:["$ ",t.precioFinal]}):null]}),t.descuento?(0,n.jsxs)(u,{children:[t.descuento,"% Off"]}):null]})}):(0,n.jsx)(p.default,{href:"".concat(x.fQ,"/").concat(C,"/").concat((0,f.oF)(N),"/").concat(_),children:(0,n.jsx)("a",{children:(0,n.jsxs)(o,{children:[(0,n.jsxs)(s,{children:[(0,n.jsx)("img",{src:r,alt:"prd",className:"d-none",onLoad:function(e){var t=e.target;j(!1),t.classList.remove("d-none")},lazy:"loading"}),w?(0,n.jsx)(b,{}):null]}),(0,n.jsxs)(c,{children:[(0,n.jsx)(d,{children:e.oferta?k(t.titulo):t.marca}),(0,n.jsx)("h6",{className:"text-muted",children:k(N)}),t.precioFinal&&t.precioFinal>0?(0,n.jsxs)(l,{children:["$ ",t.precioFinal]}):null]}),t.descuento?(0,n.jsxs)(u,{children:[t.descuento,"% Off"]}):null]})})})}},2642:function(e,t,r){"use strict";var n=r(5893),a=(r(7294),r(9008)),i=r(1130);t.Z=function(e){var t=e.title,r=e.metadesc;return(0,n.jsxs)(a.default,{children:[(0,n.jsx)("title",{children:t}),(0,n.jsx)("meta",{name:"theme-color",content:"#df8f0e"}),(0,n.jsx)("link",{rel:"icon",href:"".concat(i.mp,"/static/Perro.png")}),r?(0,n.jsx)("meta",{name:"description",content:r}):null,(0,n.jsx)("script",{src:"https://secure.mlstatic.com/sdk/javascript/v1/mercadopago.js"})]})}},7743:function(e,t,r){"use strict";r.r(t),r.d(t,{traerTodas:function(){return c}});var n=r(809),a=r.n(n),i=r(266),o=r(1130),s=r(8608),c=function(){return function(){var e=(0,i.Z)(a().mark((function e(t){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:s.br}),e.prev=1,e.abrupt("return",fetch("".concat(o.bl,"/categorias")).then((function(e){return e.json()})).then((function(e){var r=e.data;t({type:s.eX,payload:r})})).catch((function(e){t({type:s.pn,payload:e})})));case 5:e.prev=5,e.t0=e.catch(1),t({type:s.pn,payload:e.t0});case 8:case"end":return e.stop()}}),e,null,[[1,5]])})));return function(t){return e.apply(this,arguments)}}()}},4788:function(e,t,r){"use strict";r.r(t),r.d(t,{traerTodas:function(){return c}});var n=r(809),a=r.n(n),i=r(266),o=r(1130),s=r(6788),c=function(){return function(){var e=(0,i.Z)(a().mark((function e(t){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:s.br}),e.prev=1,e.abrupt("return",fetch("".concat(o.bl,"/marcas")).then((function(e){return e.json()})).then((function(e){var r=e.data;t({type:s.eX,payload:r})})).catch((function(e){t({type:s.pn,payload:e})})));case 5:e.prev=5,e.t0=e.catch(1),t({type:s.pn,payload:e.t0});case 8:case"end":return e.stop()}}),e,null,[[1,5]])})));return function(t){return e.apply(this,arguments)}}()}},6705:function(e,t,r){"use strict";r.r(t),r.d(t,{traerProductos:function(){return d},traerMas:function(){return u},traerPorId:function(){return p},traerPromociones:function(){return f},ordenarProductos:function(){return x},aplicarFiltro:function(){return h},quitarFiltro:function(){return m},restablecerFiltros:function(){return g},updatePaginacion:function(){return b}});var n=r(5402),a=r(809),i=r.n(a),o=r(266),s=r(1130),c=r(3005),l=r(1387),d=function(){return function(){var e=(0,o.Z)(i().mark((function e(t,r){var n,a,o,d,u,p,f,x,h,m,g,b,y,v;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:l.br}),e.prev=1,n=r().productosReducer,a=n.filtrando,o=n.filtros,d=o.categoria,u=o.subcategoria,p=o.marca,f=o.search,o.orden,x=n.paginacion,h=x.desde,m=x.limiteMobile,g=x.limiteDesktop,b="".concat(s.bl,"/productos"),a?""!==f.trim()?b+="/buscar?busqueda=".concat(f,"&"):(b+="/filtro/filtrar?",d&&(b+="categoria=".concat(d,"&")),u&&(b+="subcategoria=".concat(u,"&")),p&&(b+="marca=".concat(p,"&"))):b+="?",b+="desde=".concat(h,"&limite=").concat((0,c.tq)()?m:g),e.next=8,fetch(b);case 8:return y=e.sent,e.next=11,y.json();case 11:return v=e.sent,e.abrupt("return",t({type:l.J7,payload:v.data}));case 15:e.prev=15,e.t0=e.catch(1),t({type:l.pn,payload:e.t0});case 18:case"end":return e.stop()}}),e,null,[[1,15]])})));return function(t,r){return e.apply(this,arguments)}}()},u=function(){return function(){var e=(0,o.Z)(i().mark((function e(t,r){var a,o,d,u,p,f,x,h,m,g,b,y,v;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:l.ZJ}),e.prev=1,a=r().productosReducer,o=a.productos,d=a.filtrando,u=a.filtros,p=u.categoria,f=u.subcategoria,x=u.marca,h=u.search,u.orden,m=a.paginacion,g=m.desde,b=m.limiteMobile,y=m.limiteDesktop,v="".concat(s.bl,"/productos"),d?""!==h.trim()?v+="/buscar?busqueda=".concat(h,"&"):(v+="/filtro/filtrar?",p&&(v+="categoria=".concat(p,"&")),f&&(v+="subcategoria=".concat(f,"&")),x&&(v+="marca=".concat(x,"&"))):v+="?",v+="desde=".concat(g,"&limite=").concat((0,c.tq)()?b:y),e.abrupt("return",fetch(v).then((function(e){return e.json()})).then((function(e){if(0!==e.data.length){var r=[].concat((0,n.Z)(o),(0,n.Z)(e.data));t({type:l.k,payload:r})}else t({type:l.JU})})));case 9:e.prev=9,e.t0=e.catch(1),t({type:l.pn,payload:e.t0});case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t,r){return e.apply(this,arguments)}}()},p=function(e){return function(){var t=(0,o.Z)(i().mark((function t(r){return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r({type:l.JY,payload:e});case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},f=function(){return function(){var e=(0,o.Z)(i().mark((function e(t){var r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:l.br}),e.prev=1,r="".concat(s.bl,"/subproductos/ofertas?desde=0&limite=9"),(0,c.tq)()&&(r="".concat(s.bl,"/subproductos/ofertas?desde=0&limite=6")),e.abrupt("return",fetch(r).then((function(e){return e.json()})).then((function(e){t({type:l.X,payload:e.data})})));case 7:e.prev=7,e.t0=e.catch(1),t({type:l.pn,payload:e.t0.message});case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}()},x=function(e){return function(){var t=(0,o.Z)(i().mark((function t(r){return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r({type:l.br});try{r({type:l.UJ,payload:e})}catch(n){r({type:l.pn,payload:n})}case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},h=function(e,t){return function(r){switch(e){case"categoria":r({type:l.K$,payload:t});break;case"subcategoria":r({type:l.h_,payload:t});break;case"marca":r({type:l.Mo,payload:t});break;case"search":r({type:l.uI,payload:t});break;case"orden":r({type:l.xT,payload:t})}}},m=function(e){return function(t,r){var n=r().productosReducer.filtros,a=n.categoria,i=n.subcategoria,o=n.marca;n.search,n.orden;switch(e){case"categoria":t(i||o?{type:l.rv}:{type:l.kT});break;case"subcategoria":t(a||o?{type:l.WA}:{type:l.kT});break;case"marca":t(a||i?{type:l.G6}:{type:l.kT});break;case"buscador":t({type:l.I1});break;case"orden":t({type:l.DS})}}},g=function(){return function(e){e({type:l.kT})}},b=function(){return function(e,t){var r=t().productosReducer.paginacion,n=(0,c.tq)()?r.desde+r.limiteMobile:r.desde+r.limiteDesktop;e({type:l.Lo,payload:n})}}},1685:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/productos/[[...index]]",function(){return r(6941)}])}},function(e){e.O(0,[679,774,888,179],(function(){return t=1685,e(e.s=t);var t}));var t=e.O();_N_E=t}]);