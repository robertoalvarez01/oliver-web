(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{6347:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSG:function(){return U},default:function(){return W}});var n=r(5893),a=r(7294),c=r(2642),o=r(1359),i=r(8602),s=r(6255),u=r(228),l=r(2679),d=function(e){var t=e.banners,r=(0,a.useState)(0),c=r[0],d=r[1],p=(0,a.useState)(!1),f=p[0],m=p[1],h=(0,a.useState)(5e3),x=h[0],g=h[1],y=function(e){var r=1e3*parseInt(t[e].tiempo_slider);g(r)},v=function(){if(!f){var e=c===t.length-1?0:c+1;y(e),d(e)}},b=function(){if(!f){var e=0===c?t.length-1:c-1;y(e),d(e)}},j=t.map((function(e){return(0,n.jsx)(o.Z,{onExiting:function(){return m(!0)},onExited:function(){return m(!1)},children:(0,n.jsx)(l.LazyLoadImage,{effect:"blur",src:e.url,alt:e.descripcion,width:"100%",height:"50%",style:{objectFit:"cover"}})},e.url)}));return(0,n.jsxs)(i.Z,{activeIndex:c,next:v,previous:b,interval:x,children:[(0,n.jsx)(s.Z,{items:t,activeIndex:c,onClickHandler:function(e){f||(y(e),d(e))}}),j,(0,n.jsx)(u.Z,{direction:"prev",directionText:"",onClickHandler:b}),(0,n.jsx)(u.Z,{direction:"next",directionText:"",onClickHandler:v})]})},p=r(7438),f=r(3005),m=r(1664),h=r(9163),x=h.ZP.div.withConfig({displayName:"CardCategoria__Card",componentId:"sc-1a91w9r-0"})(["padding:30px 30px;-webkit-box-shadow:1px 2px 10px #f39512;background-color:white;text-align:center;>button{background-color:white;color:var(--oliver);border:1px solid var(--oliver);width:100%;transition:all .5s ease;&:hover{background-color:var(--oliver);color:white;}}>h6{color:var(--oliver);}@media(max-width:768px){margin:0px 0px 15px 0px;padding:18px 15px;}"]),g=function(e){var t=e.categoria;return(0,n.jsxs)(x,{children:[(0,n.jsx)(l.LazyLoadImage,{src:t.foto,alt:t.categoria,className:"mb-2 img-fluid",style:{objectFit:"contain"},effect:"blur"}),(0,n.jsx)("h6",{className:"",children:t.categoria}),(0,n.jsx)(m.default,{href:"productos/".concat((0,f.oF)("".concat(t.categoria)),"/").concat(t.idCategoria,"?type=categoria"),children:(0,n.jsx)("button",{className:"boton bg-outline-yellow",children:"Ver todos"})})]})},y=r(4494),v=r(7743),b=h.ZP.div.withConfig({displayName:"BannerCategorias__Wrapper",componentId:"sc-p8gb6u-0"})(["background-color:#ffb347;padding:35px 0px;"]),j=h.ZP.h3.withConfig({displayName:"BannerCategorias__Title",componentId:"sc-p8gb6u-1"})(["color:white;@media (max-width:780px){font-size:24px;text-align:center;}"]),w=(0,y.$j)((function(e){return e.categoriasReducer}),v)((function(e){(0,a.useEffect)((function(){t()}),[]);var t=function(){0===e.categorias.length&&e.traerTodas()};return(0,n.jsx)(b,{className:"wrapper__categorias bg-yellow",children:(0,n.jsxs)("div",{className:"container",children:[(0,n.jsx)(j,{className:"mb-5",children:"Compr\xe1 seg\xfan tu categoria"}),(0,n.jsx)("div",{className:"row",children:e.categorias.map((function(e,t){return(0,n.jsx)("div",{className:"col-6 col-md-3",children:(0,n.jsx)(g,{categoria:e})},t)}))})]})})})),N=r(5988),k=(r(4301),r(5500)),_=h.ZP.div.withConfig({displayName:"CardMarca__Card",componentId:"sc-18p9nkv-0"})(["-webkit-box-shadow:0 2px 5px rgb(163,161,161);height:160px;cursor:pointer;display:flex;align-items:center;justify-content:center;&:hover{filter:brightness(70%);transition:all .5s ease;border-radius:5px;}"]),C=function(e){return(0,n.jsx)(_,{children:(0,n.jsx)(l.LazyLoadImage,{effect:"blur",src:e.imagen,alt:e.imagen,width:"100%",height:"100%",style:{objectFit:"contain"}})})},Z=r(4788),P=(0,y.$j)((function(e){return e.marcasReducer}),Z)((function(e){(0,a.useEffect)((function(){t()}),[]);var t=function(){0===e.marcas.length&&e.traerTodas()};return e.loading?(0,n.jsx)("div",{className:"col-12 text-center",children:(0,n.jsx)(k.Z,{})}):(0,n.jsxs)("section",{className:"jsx-928879361 wrapper__marcas",children:[(0,n.jsxs)("div",{className:"jsx-928879361 container",children:[(0,n.jsx)("h3",{className:"jsx-928879361 mb-4",children:"Nuestras principales marcas"}),(0,n.jsx)("div",{className:"jsx-928879361 row",children:e.marcas.map((function(e,t){return!(t>=12)&&(0,n.jsx)(m.default,{href:"productos/".concat((0,f.oF)("".concat(e.marca)),"/").concat(e.idMarca,"?type=marca"),children:(0,n.jsx)("div",{className:"jsx-928879361 col-6 col-md-3 col-lg-2 my-2",children:(0,n.jsx)(C,{imagen:e.imagen,marca:e.marca,id:e.idMarca})})},e.idMarca)}))})]}),(0,n.jsx)(N.default,{id:"928879361",children:["h3.jsx-928879361{color:var(--oliver);}",".wrapper__marcas.jsx-928879361{padding:35px 0px;}"]})]})})),T=r(809),I=r.n(T),E=r(266),F=r(1130),S=r(6455),M=h.ZP.section.withConfig({displayName:"FormContacto__Wrapper",componentId:"sc-1ill5r2-0"})(["background-color:white;padding:25px;>form>input{width:100%;background:0 0;border:none;box-shadow:none;border-bottom:1px solid #ffb347;padding-left:0;}@media (max-width:379px){>form>h3{text-align:center;font-size:25px;}}"]),q=h.ZP.button.withConfig({displayName:"FormContacto__Boton",componentId:"sc-1ill5r2-1"})(["background-color:white;color:var(--oliver);border:1px solid var(--oliver);width:100%;transition:all .5s ease;&:hover{background-color:var(--oliver);color:white;}"]),L=function(){var e=(0,a.useState)(""),t=e[0],r=e[1],c=(0,a.useState)(null),o=c[0],i=c[1],s=(0,a.useState)(!1),u=s[0],l=s[1],d=function(){var e=(0,E.Z)(I().mark((function e(n){var a,c;return I().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),""!==t.trim()){e.next=3;break}return e.abrupt("return",i("Completa el email"));case 3:return i(null),l(!0),(a=new Headers).append("Content-Type","application/json"),e.next=9,fetch("".concat(F.bl,"/usuario-oferta/add"),{method:"POST",headers:a,body:JSON.stringify({email:t})});case 9:if(c=e.sent,l(!1),r(""),200===c.status){e.next=14;break}return e.abrupt("return",S.fire("Upss...","Ha ocurrido un error en la operaci\xf3n, intentalo m\xe1s tarde.","error"));case 14:return e.abrupt("return",S.fire("Listo!","Tu email se ha registrado y cuando tengamos novedades importantes te estaremos avisando!","success"));case 15:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return o&&S.fire("Error",o,"error").then((function(){return i("")})),(0,n.jsx)(M,{children:(0,n.jsx)("div",{className:"container",children:(0,n.jsx)("form",{className:"form-group my-0",onSubmit:d,children:(0,n.jsxs)("div",{className:"row align-items-center my-0 mx-0",children:[(0,n.jsx)("div",{className:"col-12 col-md-4 my-2",children:(0,n.jsx)("h3",{className:"txt-yellow",children:"Quiero recibir ofertas!"})}),(0,n.jsx)("div",{className:"col-12 col-md-6 my-2",children:(0,n.jsx)("input",{type:"email",name:"email",value:t,onChange:function(e){return r(e.target.value)},className:"form-control",placeholder:"Email"})}),(0,n.jsx)("div",{className:"col-12 col-md-2 my-2",children:u?(0,n.jsx)(k.Z,{}):(0,n.jsx)(q,{type:"submit",children:"Recibir ofertas"})})]})})})})},R=r(5546),z=r(6081),D=r(6705),J=r(9398),O=r(7625),B=r(5675),G=h.ZP.div.withConfig({displayName:"infoCompra__Contenedor",componentId:"sc-gqk78b-0"})(["background-color:white;display:flex;align-items:center;height:150px;@media(max-width:768px){height:auto;}"]),H=h.ZP.div.withConfig({displayName:"infoCompra__Columna",componentId:"sc-gqk78b-1"})(["display:flex;flex-direction:column;justify-content:center;>div{display:flex;justify-content:space-between;>svg{&.verde{color:green;}&.rojo{color:red;}width:20px;margin:0 10px;}}>h5{color:var(--oliver);font-weight:600;font-size:18px;text-transform:uppercase;}@media(max-width:768px){margin:20px 0px;}"]),X=function(){return(0,n.jsx)(G,{children:(0,n.jsx)("div",{className:"container",children:(0,n.jsxs)("div",{className:"row",children:[(0,n.jsxs)(H,{className:"col-12 col-md-4 text-center",children:[(0,n.jsxs)("div",{className:"d-flex justify-content-center",children:[(0,n.jsx)(O.G,{icon:J.byT,className:"my-3 verde"}),(0,n.jsx)(O.G,{icon:J.LEp,className:"my-3 verde"})]}),(0,n.jsx)("h5",{children:"Pagos Protegidos"})]}),(0,n.jsxs)(H,{className:"col-12 col-md-4 text-center",children:[(0,n.jsxs)("div",{className:"d-flex justify-content-center mb-2",children:[(0,n.jsx)(B.default,{src:"/AmericanExpress.png",alt:"",width:"30px",height:"19px"}),(0,n.jsx)(B.default,{src:"/MasterCard.png",alt:"",width:"30px",height:"19px"}),(0,n.jsx)(B.default,{src:"/MercadoPago.png",alt:"",width:"30px",height:"19px"}),(0,n.jsx)(B.default,{src:"/Transferencia.png",alt:"",width:"30px",height:"19px"}),(0,n.jsx)(B.default,{src:"/Visa.png",alt:"",width:"30px",height:"19px"})]}),(0,n.jsx)("h5",{children:"Diversos medios de pago"})]}),(0,n.jsxs)(H,{className:"col-12 col-md-4 text-center",children:[(0,n.jsx)("div",{className:"d-flex justify-content-center",children:(0,n.jsx)(O.G,{icon:J.RP7,className:"my-3 rojo"})}),(0,n.jsx)("h5",{children:"Pilar y aleda\xf1os"})]})]})})})},$={restablecerFiltros:D.restablecerFiltros},U=!0,W=(0,y.$j)((function(e){return e.productosReducer}),$)((function(e){return(0,a.useEffect)((function(){document.getElementsByTagName("body")[0].style.overflowY="auto",e.restablecerFiltros()}),[]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(c.Z,{title:"Oliver PetShop",metadesc:"Bienvenido al sitio oficial de Oliver PetShop, somos una PYME familiar con una considerable experiencia y reconocimiento de nuestros clientes en el rubro de las mascotas."}),(0,n.jsx)(d,{banners:e.banners}),(0,n.jsx)(X,{}),(0,n.jsx)("div",{className:"container",children:(0,n.jsx)(p.Z,{})}),(0,n.jsx)(w,{}),(0,n.jsx)(P,{}),(0,n.jsx)(L,{}),(0,n.jsx)(R.Z,{}),(0,n.jsx)(z.Z,{})]})}))},7743:function(e,t,r){"use strict";r.r(t),r.d(t,{traerTodas:function(){return s}});var n=r(809),a=r.n(n),c=r(266),o=r(1130),i=r(8608),s=function(){return function(){var e=(0,c.Z)(a().mark((function e(t){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:i.br}),e.prev=1,e.abrupt("return",fetch("".concat(o.bl,"/categorias")).then((function(e){return e.json()})).then((function(e){var r=e.data;t({type:i.eX,payload:r})})).catch((function(e){t({type:i.pn,payload:e})})));case 5:e.prev=5,e.t0=e.catch(1),t({type:i.pn,payload:e.t0});case 8:case"end":return e.stop()}}),e,null,[[1,5]])})));return function(t){return e.apply(this,arguments)}}()}},4788:function(e,t,r){"use strict";r.r(t),r.d(t,{traerTodas:function(){return s}});var n=r(809),a=r.n(n),c=r(266),o=r(1130),i=r(6788),s=function(){return function(){var e=(0,c.Z)(a().mark((function e(t){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:i.br}),e.prev=1,e.abrupt("return",fetch("".concat(o.bl,"/marcas")).then((function(e){return e.json()})).then((function(e){var r=e.data;t({type:i.eX,payload:r})})).catch((function(e){t({type:i.pn,payload:e})})));case 5:e.prev=5,e.t0=e.catch(1),t({type:i.pn,payload:e.t0});case 8:case"end":return e.stop()}}),e,null,[[1,5]])})));return function(t){return e.apply(this,arguments)}}()}},6705:function(e,t,r){"use strict";r.r(t),r.d(t,{traerProductos:function(){return l},traerMas:function(){return d},traerPorId:function(){return p},traerPromociones:function(){return f},ordenarProductos:function(){return m},aplicarFiltro:function(){return h},quitarFiltro:function(){return x},restablecerFiltros:function(){return g},updatePaginacion:function(){return y}});var n=r(5402),a=r(809),c=r.n(a),o=r(266),i=r(1130),s=r(3005),u=r(1387),l=function(){return function(){var e=(0,o.Z)(c().mark((function e(t,r){var n,a,o,l,d,p,f,m,h,x,g,y,v,b;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:u.br}),e.prev=1,n=r().productosReducer,a=n.filtrando,o=n.filtros,l=o.categoria,d=o.subcategoria,p=o.marca,f=o.search,o.orden,m=n.paginacion,h=m.desde,x=m.limiteMobile,g=m.limiteDesktop,y="".concat(i.bl,"/productos"),a?""!==f.trim()?y+="/buscar?busqueda=".concat(f,"&"):(y+="/filtro/filtrar?",l&&(y+="categoria=".concat(l,"&")),d&&(y+="subcategoria=".concat(d,"&")),p&&(y+="marca=".concat(p,"&"))):y+="?",y+="desde=".concat(h,"&limite=").concat((0,s.tq)()?x:g),e.next=8,fetch(y);case 8:return v=e.sent,e.next=11,v.json();case 11:return b=e.sent,e.abrupt("return",t({type:u.J7,payload:b.data}));case 15:e.prev=15,e.t0=e.catch(1),t({type:u.pn,payload:e.t0});case 18:case"end":return e.stop()}}),e,null,[[1,15]])})));return function(t,r){return e.apply(this,arguments)}}()},d=function(){return function(){var e=(0,o.Z)(c().mark((function e(t,r){var a,o,l,d,p,f,m,h,x,g,y,v,b;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:u.ZJ}),e.prev=1,a=r().productosReducer,o=a.productos,l=a.filtrando,d=a.filtros,p=d.categoria,f=d.subcategoria,m=d.marca,h=d.search,d.orden,x=a.paginacion,g=x.desde,y=x.limiteMobile,v=x.limiteDesktop,b="".concat(i.bl,"/productos"),l?""!==h.trim()?b+="/buscar?busqueda=".concat(h,"&"):(b+="/filtro/filtrar?",p&&(b+="categoria=".concat(p,"&")),f&&(b+="subcategoria=".concat(f,"&")),m&&(b+="marca=".concat(m,"&"))):b+="?",b+="desde=".concat(g,"&limite=").concat((0,s.tq)()?y:v),e.abrupt("return",fetch(b).then((function(e){return e.json()})).then((function(e){if(0!==e.data.length){var r=[].concat((0,n.Z)(o),(0,n.Z)(e.data));t({type:u.k,payload:r})}else t({type:u.JU})})));case 9:e.prev=9,e.t0=e.catch(1),t({type:u.pn,payload:e.t0});case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t,r){return e.apply(this,arguments)}}()},p=function(e){return function(){var t=(0,o.Z)(c().mark((function t(r){return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r({type:u.JY,payload:e});case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},f=function(){return function(){var e=(0,o.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:u.br}),e.prev=1,r="".concat(i.bl,"/subproductos/ofertas?desde=0&limite=9"),(0,s.tq)()&&(r="".concat(i.bl,"/subproductos/ofertas?desde=0&limite=6")),e.abrupt("return",fetch(r).then((function(e){return e.json()})).then((function(e){t({type:u.X,payload:e.data})})));case 7:e.prev=7,e.t0=e.catch(1),t({type:u.pn,payload:e.t0.message});case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}()},m=function(e){return function(){var t=(0,o.Z)(c().mark((function t(r){return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r({type:u.br});try{r({type:u.UJ,payload:e})}catch(n){r({type:u.pn,payload:n})}case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},h=function(e,t){return function(r){switch(e){case"categoria":r({type:u.K$,payload:t});break;case"subcategoria":r({type:u.h_,payload:t});break;case"marca":r({type:u.Mo,payload:t});break;case"search":r({type:u.uI,payload:t});break;case"orden":r({type:u.xT,payload:t})}}},x=function(e){return function(t,r){var n=r().productosReducer.filtros,a=n.categoria,c=n.subcategoria,o=n.marca;n.search,n.orden;switch(e){case"categoria":t(c||o?{type:u.rv}:{type:u.kT});break;case"subcategoria":t(a||o?{type:u.WA}:{type:u.kT});break;case"marca":t(a||c?{type:u.G6}:{type:u.kT});break;case"buscador":t({type:u.I1});break;case"orden":t({type:u.DS})}}},g=function(){return function(e){e({type:u.kT})}},y=function(){return function(e,t){var r=t().productosReducer.paginacion,n=(0,s.tq)()?r.desde+r.limiteMobile:r.desde+r.limiteDesktop;e({type:u.Lo,payload:n})}}},8581:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(6347)}])}},function(e){e.O(0,[679,455,897,315,774,888,179],(function(){return t=8581,e(e.s=t);var t}));var t=e.O();_N_E=t}]);