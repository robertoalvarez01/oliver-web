_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[13],{"34k4":function(a,t,e){a.exports={ordenarProductos:"Productos_ordenarProductos__2bm6Q",select_ordenar:"Productos_select_ordenar__3aC8E",boton_filtrar_mobile:"Productos_boton_filtrar_mobile__2Osjo",label__filtro_busqueda:"Productos_label__filtro_busqueda__3cbA-",item_filtro_busqueda:"Productos_item_filtro_busqueda__3wdWH","text-mutedd":"Productos_text-mutedd__3wjv7"}},"6Xhb":function(a,t,e){"use strict";e.d(t,"c",(function(){return r})),e.d(t,"b",(function(){return o})),e.d(t,"a",(function(){return c}));var r="categorias_traer_todas",o="categorias_loading",c="categorias_error"},HKBJ:function(a,t,e){"use strict";e.d(t,"c",(function(){return r})),e.d(t,"b",(function(){return o})),e.d(t,"a",(function(){return c}));var r="marca_traer_todas",o="marca_loading",c="marca_error"},PsAh:function(a,t,e){a.exports={filtros__contanier:"Filtro_filtros__contanier__3knXf",show:"Filtro_show__1Rj5d",btn_close_filtro:"Filtro_btn_close_filtro__37rTH",rotar:"Filtro_rotar__2UEYw",lista:"Filtro_lista__3_b9b",item_filtro:"Filtro_item_filtro__3xqSt",active:"Filtro_active__32lB0",sinBorderBottom:"Filtro_sinBorderBottom__cF6G2",icon_close_filtro:"Filtro_icon_close_filtro__1xlv5",cerrar_filtro_mobile:"Filtro_cerrar_filtro_mobile__1SKrQ",titulo_filtros:"Filtro_titulo_filtros__2QgvL",boton:"Filtro_boton__3kHsa",show_filtros:"Filtro_show_filtros__2D1CA"}},WjWM:function(a,t,e){a.exports={modalMarca:"Marca_modalMarca__1SX9K",col_modal_marca:"Marca_col_modal_marca__2YurW",imgMarca:"Marca_imgMarca__3yst9",marca_modal:"Marca_marca_modal__3BApp","achicarTama\xf1o":"Marca_achicarTama_o__1Ns7E"}},YRs9:function(a,t,e){"use strict";e.r(t);var r=e("o0o1"),o=e.n(r),c=e("HaE+"),n=e("q1tI"),i=e.n(n),s=e("k2JI"),u=e("CI6Y"),l=e("/MKj"),d=e("7y+a"),m=e("34k4"),f=e.n(m),_=e("XOuL"),p=e("wHSu"),b=e("IP2g"),g=i.a.createElement,v=Object(l.b)((function(a){return a.subproductosReducer}),d)((function(a){var t=Object(n.useState)(""),e=t[0],r=t[1];Object(n.useEffect)((function(){"/productos"!==a.location?c(a.query.index[0]):o()}),[]);var o=function(){a.traerTodos()},c=function(a){r(a)};return g(i.a.Fragment,null,a.loading?g("div",{className:"col-12 text-center"},g(_.a,null)):g(i.a.Fragment,null,""!==e?g("span",{id:"label__filtro-busqueda",className:f.a.label__filtro_busqueda},g(b.a,{icon:p.h}),g("span",{className:f.a.item_filtro_busqueda},g("span",{className:"text-mutedd",id:"valor-busqueda"},e))):null,g("div",{className:"row justify-content-between my-2 align-items-center",style:{padding:"0px 15px"}},g("span",{className:"text-muted"},g("b",{className:"txt-yellow"},a.subproductos.length)," productos encontrados"),g("div",{className:f.a.ordenarProductos+" d-flex align-items-center"},g("span",{className:"txt-yellow text-bold mr-2"},"Ordenar por: "),g("select",{className:f.a.select_ordenar,onChange:function(t){return"asc"===t.target.value?a.subproductos.sort((function(a,t){return a.precioUnidad>t.precioUnidad?1:a.precioUnidad<t.precioUnidad?-1:0})):a.subproductos.sort((function(a,t){return a.precioUnidad<t.precioUnidad?1:a.precioUnidad>t.precioUnidad?-1:0})),a.ordenarProductos(a.subproductos)}},g("option",{value:"desc"},"Mayor precio"),g("option",{value:"asc"},"Menor precio"))),g("button",{onClick:function(){document.getElementsByClassName("Filtro_filtros__contanier__3knXf")[0].classList.add(FiltroStyle.show_filtros)},className:"boton bg-yellow mt-3 d-none "+f.a.boton_filtrar_mobile},"Filtrar")),g("div",{className:"row"},a.subproductos.map((function(a){return g("div",{key:a.idSubProducto,className:"col-6 col-md-3"},g(u.a,{imagen:a.foto,prd:a}))})))))})),y=e("rePB"),h=e("PsAh"),x=e.n(h),N=e("/Q2I"),w=e("WjWM"),k=e.n(w),j=e("kVRI"),O=i.a.createElement,C=Object(l.b)((function(a){return a.marcasReducer}),j)((function(a){Object(n.useEffect)((function(){t()}),[]),console.log(a);var t=function(){a.marcas&&0==a.marcas.length&&a.traerTodas()};return O(i.a.Fragment,null,a.loading?O("div",{className:"col-12 text-center"},O(_.a,null)):O(i.a.Fragment,null,O("h4",{className:"text-center"},"Nuestras marcas"),O("div",{className:"row "+k.a.modalMarca,style:{padding:"0px 10px"}},a.marcas.map((function(t){return O("div",{key:t.idMarca,className:"col-12 col-md-6 text-center px-4 mb-4",onClick:function(){return function(t){a.closeModal(),a.activarFiltro("marca",t)}(t.idMarca)}},O("div",{className:k.a.col_modal_marca+" row alig-items-center"},O("div",{className:"col-6"},O("img",{src:"https://api.oliverpetshop.com.ar/img/"+t.imagen,alt:"marca",className:k.a.imgMarca+" img-fluid"})),O("div",{className:"col-6 d-flex align-items-center justify-content-center"},t.marca.length>12?O("p",{className:k.a.achicarTama\u00f1o+" "+k.a.marca_modal},t.marca):O("p",{className:k.a.marca_modal},t.marca))))})))))})),E=e("rfcl"),T=e("rOcY"),M=e("o9Kd"),F=i.a.createElement;function P(a,t){var e=Object.keys(a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(a);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(a,t).enumerable}))),e.push.apply(e,r)}return e}function B(a){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?P(Object(e),!0).forEach((function(t){Object(y.a)(a,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(e)):P(Object(e)).forEach((function(t){Object.defineProperty(a,t,Object.getOwnPropertyDescriptor(e,t))}))}return a}var R={marcasTraerTodas:j.traerTodas,subproductosFiltrarProductos:d.filtrarProductos,subproductosTraerTodos:d.traerTodos,categoriasTraerTodas:E.traerTodas,subcategoriaTraerTodas:function(){return function(){var a=Object(c.a)(o.a.mark((function a(t){return o.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t({type:M.b}),a.prev=1,a.abrupt("return",fetch("".concat(T.a,"subcategoria")).then((function(a){return a.json()})).then((function(a){var e=a.data;t({type:M.c,payload:e})})).catch((function(a){t({type:M.a,payload:a})})));case 5:a.prev=5,a.t0=a.catch(1),t({type:M.a,payload:a.t0});case 8:case"end":return a.stop()}}),a,null,[[1,5]])})));return function(t){return a.apply(this,arguments)}}()}},q=Object(l.b)((function(a){return{marcasReducer:a.marcasReducer,subproductosReducer:a.subproductosReducer,categoriasReducer:a.categoriasReducer,subcategoriaReducer:a.subcategoriaReducer}}),R)((function(a){var t=Object(n.useState)({filtrando:!1,categoria:"",subcategoria:"",marca:"",buscador:""}),e=t[0],r=t[1],s=Object(n.useState)(!1),u=s[0],l=s[1],d=function(){document.getElementsByTagName("body")[0].style.overflowY="scroll",l(!1)};Object(n.useEffect)((function(){m()}),[]);var m=function(){var t=Object(c.a)(o.a.mark((function t(){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(0!==a.marcasReducer.marcas.length||0!==a.categoriasReducer.categorias.length||0!==a.subcategoriaReducer.subcategorias.length){t.next=16;break}return t.prev=1,t.next=4,a.marcasTraerTodas();case 4:return t.next=6,a.categoriasTraerTodas();case 6:return t.next=8,a.subcategoriaTraerTodas();case 8:"/productos"!==a.location&&f(),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(1),console.log(t.t0);case 14:t.next=17;break;case 16:"/productos"!==a.location&&f();case 17:case"end":return t.stop()}}),t,null,[[1,11]])})));return function(){return t.apply(this,arguments)}}();Object(n.useEffect)((function(){v()}),[e]);var f=function(){return g(a.query.type,a.query.index[1])},g=function(a,t){switch(a){case"categoria":r(B(B({},e),{},{categoria:t,buscador:"",filtrando:!0}));break;case"subcategoria":r(B(B({},e),{},{subcategoria:t,buscador:"",filtrando:!0}));break;case"marca":r(B(B({},e),{},{marca:t,buscador:"",filtrando:!0}));break;case"buscador":r(B(B({},e),{},{buscador:t,filtrando:!0}))}},v=function(){for(var t=0;t<document.getElementsByClassName(x.a.item_filtro).length;t++){document.getElementsByClassName(x.a.item_filtro)[t].classList.remove(x.a.active),document.getElementsByClassName(x.a.icon_close_filtro)[t].classList.add("d-none")}if(e.filtrando){if(""===e.buscador.trim())for(var r in e)if(e[r]&&""!==e[r]&&!0!==e[r])if(document.getElementsByName("".concat(r,"-").concat(e[r]))[0])console.log("!!!"),document.getElementsByName("".concat(r,"-").concat(e[r]))[0].classList.add(x.a.active),document.getElementById("close-".concat(r,"-").concat(e[r])).classList.remove("d-none");else if(""!==e.marca){var o=document.createElement("li"),c=document.createElement("div"),n=document.createElement("span"),i=document.createElement("svg"),s=a.marcasReducer.marcas.filter((function(a){return a.idMarca==e.marca}))[0].marca;if(c.className="".concat(x.a.item_filtro," ").concat(x.a.active),c.setAttribute("name","marca-".concat(e.marca)),c.addEventListener("click",(function(){return g("marca",e.marca)})),n.className="text-muted",n.innerHTML=s,i.innerHTML='\n                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="times" role="img" xmlns="http://www.w3.org/2000/svg" viewbox="0 0 352 512" class="svg-inline--fa fa-times fa-w-11 Filtro_icon_close_filtro__1xlv5" id="close-marca-'.concat(e.marca,'">\n                                    <path fill="currentColor" d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path>\n                                </svg>\n                            '),i.addEventListener("click",(function(){return y("marca")})),c.appendChild(n),o.appendChild(c),o.appendChild(i),document.querySelector("#listaMarca")){var u=document.querySelector("#listaMarca").children[0],l=document.querySelector("#listaMarca");l.removeChild(u),l.appendChild(o)}}if(e.filtrando){var d=h();a.subproductosFiltrarProductos(d)}}},y=function(t){switch(t){case"categoria":""===e.subcategoria&&""===e.marca?(r(B(B({},e),{},{categoria:"",filtrando:!1})),a.subproductosTraerTodos()):r(B(B({},e),{},{categoria:""}));break;case"subcategoria":""===e.categoria&&""===e.marca?(r(B(B({},e),{},{subcategoria:"",filtrando:!1})),a.subproductosTraerTodos()):r(B(B({},e),{},{subcategoria:""}));break;case"marca":""===e.categoria&&""==e.subcategoria?(r(B(B({},e),{},{marca:"",filtrando:!1})),a.subproductosTraerTodos()):r(B(B({},e),{},{marca:""}));break;default:a.subproductosTraerTodos(),r({filtrando:!1,categoria:"",subcategoria:"",marca:"",buscador:""})}},h=function(){var a="filtrar";if(""!==e.buscador)return a+"?buscar=".concat(e.buscador);var t=e.categoria,r=e.subcategoria,o=e.marca;return t&&""!==t&&(a+="?categoria=".concat(e.categoria)),e.subcategoria&&""!==e.subcategoria&&(a+=""!==t?"&subcategoria=".concat(e.subcategoria):"?subcategoria=".concat(e.subcategoria)),o&&""!==o&&(a+=""!==t&&""!==r?"?marca=".concat(e.marca):"&marca=".concat(e.marca)),a};return F("div",{className:x.a.filtros__contanier},F("button",{className:x.a.btn_close_filtro,onClick:function(){document.getElementsByClassName(x.a.filtros__contanier)[0].classList.toggle(x.a.show),document.getElementById("iconFiltroContainer").classList.toggle(x.a.rotar)}},F(b.a,{id:"iconFiltroContainer",icon:p.c})),F("div",null,0==a.categoriasReducer.categorias.length||0==a.subcategoriaReducer.subcategorias.length||0==a.marcasReducer.marcas.length?F(_.a,null):F(i.a.Fragment,null,e.filtrando?F("button",{className:"boton bg-yellow mb-3",onClick:y},F(b.a,{icon:p.b})," Limpiar Filtros"):null,F(b.a,{icon:p.k,className:x.a.cerrar_filtro_mobile,onClick:function(){document.getElementsByClassName(x.a.filtros__contanier)[0].classList.remove(x.a.show_filtros)}}),F("h4",{className:x.a.titulo_filtros},"Mascota"),F("ul",{className:x.a.lista},a.categoriasReducer.categorias.map((function(a){return F("li",{key:a.idCategoria},F("div",{className:x.a.item_filtro,name:"categoria-".concat(a.idCategoria),onClick:function(){return g("categoria","".concat(a.idCategoria))}},F("span",{className:"text-muted"},a.categoria)),F(b.a,{icon:p.k,className:x.a.icon_close_filtro+" d-none",onClick:function(){return y("categoria")},id:"close-categoria-".concat(a.idCategoria)}))}))),F("h4",{className:x.a.titulo_filtros},"Alimentos"),F("ul",{className:x.a.lista},a.subcategoriaReducer.subcategorias.map((function(a){return F("li",{key:a.idSubCategoria},F("div",{className:x.a.item_filtro,name:"subcategoria-".concat(a.idSubCategoria),onClick:function(){return g("subcategoria","".concat(a.idSubCategoria))}},F("span",{className:"text-muted"},a.subcategoria)),F(b.a,{icon:p.k,className:x.a.icon_close_filtro+" d-none",onClick:function(){return y("subcategoria")},id:"close-".concat("subcategoria-".concat(a.idSubCategoria))}))}))),F("h4",{className:x.a.titulo_filtros},"Marca"),F("ul",{id:"listaMarca",className:x.a.sinBorderBottom+" "+x.a.lista},a.marcasReducer.marcas.map((function(a,t){return!(t>3)&&F("li",{key:a.idMarca},F("div",{className:x.a.item_filtro,name:"marca-".concat(a.idMarca),onClick:function(){return g("marca","".concat(a.idMarca))}},F("span",{className:"text-muted"},a.marca)),F(b.a,{icon:p.k,className:x.a.icon_close_filtro+" d-none",onClick:function(){return y("marca")},id:"close-marca-".concat(a.idMarca)}))}))),F("button",{onClick:function(){return l(!0)},className:"boton bg-gris"},"Ver todas"))),u?F(N.a,{closeModal:d},F(C,{closeModal:d,activarFiltro:g})):null)})),S=e("t6HM"),L=e("nOHt"),H=i.a.createElement,I=function(a){var t=Object(L.useRouter)(),e=t.asPath,r=t.query,o="Oliver - Productos";return"/productos"!==e&&(o=r.index[0].replace("-"," ").replace(/\b\w/g,(function(a){return a.toUpperCase()}))+" en OliverPetShop"),H(i.a.Fragment,null,H(s.a,{title:o}),H("section",{className:"main__productos container"},H("div",{className:"row"},H(q,{location:e,query:r}),H("div",{className:"col-12 py-3"},H(v,{location:e,query:r}))),H(S.a,null)))};I.getInitialProps=function(){var a=Object(c.a)(o.a.mark((function a(t){var e;return o.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return e=t.query,a.abrupt("return",{query:e});case 2:case"end":return a.stop()}}),a)})));return function(t){return a.apply(this,arguments)}}();t.default=I},kVRI:function(a,t,e){"use strict";e.r(t),e.d(t,"traerTodas",(function(){return s}));var r=e("o0o1"),o=e.n(r),c=e("HaE+"),n=e("rOcY"),i=e("HKBJ"),s=function(){return function(){var a=Object(c.a)(o.a.mark((function a(t){return o.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t({type:i.b}),a.prev=1,a.abrupt("return",fetch("".concat(n.a,"marca")).then((function(a){return a.json()})).then((function(a){var e=a.data;t({type:i.c,payload:e})})).catch((function(a){t({type:i.a,payload:a})})));case 5:a.prev=5,a.t0=a.catch(1),t({type:i.a,payload:a.t0});case 8:case"end":return a.stop()}}),a,null,[[1,5]])})));return function(t){return a.apply(this,arguments)}}()}},maHl:function(a,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/productos/[[...index]]",function(){return e("YRs9")}])},o9Kd:function(a,t,e){"use strict";e.d(t,"c",(function(){return r})),e.d(t,"b",(function(){return o})),e.d(t,"a",(function(){return c}));var r="subcategorias_traer_todas",o="subcategorias_loading",c="subcategorias_error"},rfcl:function(a,t,e){"use strict";e.r(t),e.d(t,"traerTodas",(function(){return s}));var r=e("o0o1"),o=e.n(r),c=e("HaE+"),n=e("rOcY"),i=e("6Xhb"),s=function(){return function(){var a=Object(c.a)(o.a.mark((function a(t){return o.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t({type:i.b}),a.prev=1,a.abrupt("return",fetch("".concat(n.a,"categorias")).then((function(a){return a.json()})).then((function(a){var e=a.data;t({type:i.c,payload:e})})).catch((function(a){t({type:i.a,payload:a})})));case 5:a.prev=5,a.t0=a.catch(1),t({type:i.a,payload:a.t0});case 8:case"end":return a.stop()}}),a,null,[[1,5]])})));return function(t){return a.apply(this,arguments)}}()}},t6HM:function(a,t,e){"use strict";var r=e("MX0m"),o=e.n(r),c=e("q1tI"),n=e.n(c),i=e("/Q2I"),s=e("wHSu"),u=e("IP2g"),l=n.a.createElement;t.a=function(){var a=Object(c.useState)(!1),t=a[0],e=a[1],r=Object(c.useState)(""),d=r[0],m=r[1];return l(n.a.Fragment,null,l("button",{onClick:function(){document.getElementsByTagName("body")[0].style.overflowY="hidden",e(!0)},className:"jsx-194702073 boton__float__search bg-yellow"},l(u.a,{icon:s.h})),t?l(i.a,{closeModal:function(){document.getElementsByTagName("body")[0].style.overflowY="scroll",e(!1)}},l("form",{onSubmit:function(a){a.preventDefault(),""!==d.trim()&&window.location.assign("/productos/search/".concat(d))},className:"jsx-194702073 form-group mt-4"},l("input",{type:"text",placeholder:"\xbfQu\xe9 andas buscando?",onChange:function(a){return m(a.target.value)},required:!0,className:"jsx-194702073 form-control"}),l("button",{type:"submit",className:"jsx-194702073 boton bg-yellow mt-3"},"Buscar"))):null,l(o.a,{id:"194702073"},[".boton__float__search.jsx-194702073{position:fixed;top:85%;right:4%;display:block;padding:7px;width:40px;height:40px;text-align:center;border-radius:20px;border:1px solid #FFB347;box-shadow:0px 2px 1px -1px rgba(228,224,224,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12);display:none;}","@media(max-width:768px){.boton__float__search.jsx-194702073{display:block;}}"]))}}},[["maHl",1,2,4,0,3,5]]]);