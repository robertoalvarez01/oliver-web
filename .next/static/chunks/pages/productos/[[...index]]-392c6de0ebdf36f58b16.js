_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[24],{"0JKX":function(a,e,t){a.exports={navbar:"Navbar_navbar__1cna4",container__logo:"Navbar_container__logo__HySyy",logo:"Navbar_logo__3vj75",container__login_menu:"Navbar_container__login_menu__2vQdj",boton__menu:"Navbar_boton__menu__3c6F3",btn_account:"Navbar_btn_account__2Zaoz",imgProfile:"Navbar_imgProfile__jeFPI",btn_carrito:"Navbar_btn_carrito__2mZY8",carrito_mobile:"Navbar_carrito_mobile__2IYef",icon_menu:"Navbar_icon_menu__2CorA",img_menu:"Navbar_img_menu__3sk-n",menu__collapsed:"Navbar_menu__collapsed__3ww75",form_search_menu:"Navbar_form_search_menu__1b8gM",wrapper__navbar:"Navbar_wrapper__navbar__14EZG",lupa_buscador:"Navbar_lupa_buscador__3_vvJ","input-group-text":"Navbar_input-group-text__2_pHE",search_mobile:"Navbar_search_mobile__1klW1",buscador:"Navbar_buscador__3L3ob",header__collapsed_nav:"Navbar_header__collapsed_nav__3rPMs",close_btn_menu:"Navbar_close_btn_menu__3jnG0",main__collapsed:"Navbar_main__collapsed__3kXMF",list__menu__collapsed:"Navbar_list__menu__collapsed__3BK5O",icon__itemMenu__collapsed:"Navbar_icon__itemMenu__collapsed__1Zemk",item__menu__collapsed:"Navbar_item__menu__collapsed__3BZ2r",label__item__menu:"Navbar_label__item__menu__3zFoO",collapsed_info:"Navbar_collapsed_info__3Zugh",redes__collapsed:"Navbar_redes__collapsed__1JfQC",iconoRed:"Navbar_iconoRed__3PYtV",showCollapsed:"Navbar_showCollapsed__2N6Tr",sinBorder:"Navbar_sinBorder__2nVJZ"}},"34k4":function(a,e,t){a.exports={ordenarProductos:"Productos_ordenarProductos__2bm6Q",select_ordenar:"Productos_select_ordenar__3aC8E",boton_filtrar_mobile:"Productos_boton_filtrar_mobile__2Osjo",label__filtro_busqueda:"Productos_label__filtro_busqueda__3cbA-",item_filtro_busqueda:"Productos_item_filtro_busqueda__3wdWH","text-mutedd":"Productos_text-mutedd__3wjv7"}},"6Xhb":function(a,e,t){"use strict";t.d(e,"c",(function(){return r})),t.d(e,"b",(function(){return o})),t.d(e,"a",(function(){return n}));var r="categorias_traer_todas",o="categorias_loading",n="categorias_error"},HKBJ:function(a,e,t){"use strict";t.d(e,"c",(function(){return r})),t.d(e,"b",(function(){return o})),t.d(e,"a",(function(){return n}));var r="marca_traer_todas",o="marca_loading",n="marca_error"},PsAh:function(a,e,t){a.exports={filtros__contanier:"Filtro_filtros__contanier__3knXf",show:"Filtro_show__1Rj5d",btn_close_filtro:"Filtro_btn_close_filtro__37rTH",rotar:"Filtro_rotar__2UEYw",lista:"Filtro_lista__3_b9b",listaMarca:"Filtro_listaMarca__2ZCr3",item_filtro:"Filtro_item_filtro__3xqSt",active:"Filtro_active__32lB0",sinBorderBottom:"Filtro_sinBorderBottom__cF6G2",icon_close_filtro:"Filtro_icon_close_filtro__1xlv5",cerrar_filtro_mobile:"Filtro_cerrar_filtro_mobile__1SKrQ",titulo_filtros:"Filtro_titulo_filtros__2QgvL",boton:"Filtro_boton__3kHsa",show_filtros:"Filtro_show_filtros__2D1CA"}},YRs9:function(a,e,t){"use strict";t.r(e);var r=t("o0o1"),o=t.n(r),n=t("HaE+"),c=t("q1tI"),s=t.n(c),i=t("k2JI"),l=t("MX0m"),u=t.n(l),_=t("CI6Y"),d=t("/MKj"),b=t("TVVT"),m=t("34k4"),p=t.n(m),f=t("XOuL"),g=t("wHSu"),v=t("IP2g"),h=t("PsAh"),N=t.n(h),x=t("pRT7"),y=t("0JKX"),w=t.n(y),j=s.a.createElement,k=(t("PSD3"),Object(d.b)((function(a){return a.productosReducer}),b)((function(a){var e=a.filtros,t=a.paginacion,r=a.filtrando,i=Object(c.useState)(""),l=i[0],d=i[1];Object(c.useEffect)((function(){"/productos"!==a.location?a.query.search?h(a.query.search):h(a.query.index[0]):b()}),[]),Object(c.useEffect)((function(){t.desde>0&&a.traerMas()}),[t]),Object(c.useEffect)((function(){r&&b()}),[e]);var b=function(){var e=Object(n.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a.traerProductos();case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.log(e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(){return e.apply(this,arguments)}}(),m=function(){a.updatePaginacion()},h=function(a){d(a)};"/productos"==a.location&&""!=l&&d("");return j(s.a.Fragment,null,a.loading||!a.productos?j("div",{className:"jsx-167325002 col-12 text-center"},j(f.a,null)):j(s.a.Fragment,null,""!==l&&a.filtrando?j("span",{id:"label__filtro-busqueda",className:"jsx-167325002 "+(p.a.label__filtro_busqueda||"")},j(v.a,{icon:g.l}),j("span",{className:"jsx-167325002 "+(p.a.item_filtro_busqueda||"")},j("span",{id:"valor-busqueda",className:"jsx-167325002 text-mutedd"},l))):null,j("div",{style:{padding:"0px 15px"},className:"jsx-167325002 row justify-content-between my-2 align-items-center"},j("span",{className:"jsx-167325002 text-muted"},j("b",{className:"jsx-167325002 txt-yellow"},a.productos.length)," productos encontrados"),j("div",{className:"jsx-167325002 "+(p.a.ordenarProductos+" d-flex align-items-center"||!1)},j("span",{className:"jsx-167325002 txt-yellow text-bold mr-2"},"Ordenar por: "),j("select",{onChange:function(e){return"asc"===e.target.value?a.productos.sort((function(a,e){return a.precioUnidad>e.precioUnidad?1:a.precioUnidad<e.precioUnidad?-1:0})):a.productos.sort((function(a,e){return a.precioUnidad<e.precioUnidad?1:a.precioUnidad>e.precioUnidad?-1:0})),a.ordenarProductos(a.productos)},className:"jsx-167325002 "+(p.a.select_ordenar||"")},j("option",{value:"desc",className:"jsx-167325002"},"Mayor precio"),j("option",{value:"asc",className:"jsx-167325002"},"Menor precio"))),j("button",{onClick:function(){document.getElementsByClassName(w.a.menu__collapsed)[0].classList.contains(w.a.showCollapsed)&&document.getElementsByClassName(w.a.menu__collapsed)[0].classList.remove(w.a.showCollapsed),document.getElementsByClassName("Filtro_filtros__contanier__3knXf")[0].classList.add(N.a.show_filtros)},className:"jsx-167325002 "+("boton bg-yellow mt-3 d-none "+p.a.boton_filtrar_mobile||!1)},"Filtrar")),j("div",{className:"jsx-167325002 row feedProductos"},a.productos?a.productos.map((function(a){return 0===a.precioFinal?null:j("div",{key:a.idProducto,className:"jsx-167325002 col-6 col-md-3"},j(_.a,{imagen:a.foto,prd:a}))})):null,a.sinResultados?j("div",{style:{height:"50px"},className:"jsx-167325002 alert alert-warning text-center w-100"},"No se encontraron m\xe1s resultados"):Object(x.b)()?j("button",{className:"boton bg-yellow btn-vermas ".concat(a.productos.length<t.limiteMobile?"d-none":""),onClick:m},a.loading_mas?"Obteniendo productos...":"Cargar m\xe1s"):j("button",{className:"boton bg-yellow btn-vermas ".concat(a.productos.length<t.limiteDesktop?"d-none":""),onClick:m},a.loading_mas?"Obteniendo productos...":"Cargar m\xe1s"))),j(u.a,{id:"167325002"},[".feedProductos.jsx-167325002{max-height:75vh;overflow-y:scroll;}",".btn-vermas.jsx-167325002{position:relative;height:40px;}",".feedProductos.jsx-167325002::-webkit-scrollbar{width:8px;height:5px;}",".feedProductos.jsx-167325002::-webkit-scrollbar-thumb{background:#FFB347;border-radius:4px;}",".feedProductos.jsx-167325002::-webkit-scrollbar-thumb.jsx-167325002:hover{background:#b3b3b3;box-shadow:0 0 2px 1px rgba(0,0,0,0.2);}","@media(max-width:768px){.feedProductos.jsx-167325002{height:68vh;overflow-y:scroll;}.feedProductos.jsx-167325002::-webkit-scrollbar{width:8px;height:10px;}}"]))}))),C=t("kVRI"),F=t("rfcl"),P=t("rOcY"),O=t("o9Kd"),R=s.a.createElement,q=C.traerTodas,E=b.aplicarFiltro,T=b.quitarFiltro,M=b.restablecerFiltros,B=b.traerProductos,H={marcasTraerTodas:q,categoriasTraerTodas:F.traerTodas,subcategoriaTraerTodas:function(){return function(){var a=Object(n.a)(o.a.mark((function a(e){return o.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return e({type:O.b}),a.prev=1,a.abrupt("return",fetch("".concat(P.a,"/subcategorias")).then((function(a){return a.json()})).then((function(a){var t=a.data;e({type:O.c,payload:t})})).catch((function(a){e({type:O.a,payload:a})})));case 5:a.prev=5,a.t0=a.catch(1),e({type:O.a,payload:a.t0});case 8:case"end":return a.stop()}}),a,null,[[1,5]])})));return function(e){return a.apply(this,arguments)}}()},aplicarFiltro:E,quitarFiltro:T,restablecerFiltros:M,traerProductos:B},S=Object(d.b)((function(a){return{marcasReducer:a.marcasReducer,productosReducer:a.productosReducer,categoriasReducer:a.categoriasReducer,subcategoriaReducer:a.subcategoriaReducer}}),H)((function(a){Object(c.useEffect)((function(){e()}),[]);var e=function(){var e=Object(n.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,0!==a.marcasReducer.marcas.length){e.next=4;break}return e.next=4,a.marcasTraerTodas();case 4:if(0!==a.categoriasReducer.categorias.length){e.next=7;break}return e.next=7,a.categoriasTraerTodas();case 7:if(0!==a.subcategoriaReducer.subcategorias.length){e.next=10;break}return e.next=10,a.subcategoriaTraerTodas();case 10:"/productos"!==a.location&&t(),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(){return e.apply(this,arguments)}}(),t=function(){return a.query.search?r(Object.keys(a.query)[0],a.query.search):r(a.query.type,a.query.index[1])},r=function(e,t){a.aplicarFiltro(e,t)},i=function(e){a.quitarFiltro(e)},l=a.productosReducer,u=l.filtrando,_=l.filtros;return R("div",{className:N.a.filtros__contanier},R("button",{className:N.a.btn_close_filtro,onClick:function(){document.getElementsByClassName(N.a.filtros__contanier)[0].classList.toggle(N.a.show),document.getElementById("iconFiltroContainer").classList.toggle(N.a.rotar)}},R(v.a,{id:"iconFiltroContainer",icon:g.c})),R("div",null,0==a.categoriasReducer.categorias.length||0==a.subcategoriaReducer.subcategorias.length||0==a.marcasReducer.marcas.length?R(f.a,null):R(s.a.Fragment,null,u?R("button",{className:"boton bg-yellow mb-3",onClick:function(){a.restablecerFiltros(),a.traerProductos()}},R(v.a,{icon:g.b})," Limpiar Filtros"):null,R(v.a,{icon:g.p,className:N.a.cerrar_filtro_mobile,onClick:function(){document.getElementsByClassName(N.a.filtros__contanier)[0].classList.remove(N.a.show_filtros)}}),R("h4",{className:N.a.titulo_filtros},"Mascota"),R("ul",{className:N.a.lista},a.categoriasReducer.categorias.map((function(a){return R("li",{key:a.idCategoria},R("div",{className:N.a.item_filtro+" ".concat(_.categoria==a.idCategoria?N.a.active:""),onClick:function(){return r("categoria","".concat(a.idCategoria))}},R("span",{className:"text-muted"},a.categoria)),R(v.a,{icon:g.p,className:N.a.icon_close_filtro+" ".concat(_.categoria==a.idCategoria?"":"d-none"),onClick:function(){return i("categoria")}}))}))),R("h4",{className:N.a.titulo_filtros},"Alimentos"),R("ul",{className:N.a.lista},a.subcategoriaReducer.subcategorias.map((function(a){return R("li",{key:a.idSubCategoria},R("div",{className:N.a.item_filtro+" ".concat(_.subcategoria==a.idSubCategoria?N.a.active:""),onClick:function(){return r("subcategoria","".concat(a.idSubCategoria))}},R("span",{className:"text-muted"},a.subcategoria)),R(v.a,{icon:g.p,className:N.a.icon_close_filtro+" ".concat(_.subcategoria==a.idSubCategoria?"":"d-none"),onClick:function(){return i("subcategoria")}}))}))),R("h4",{className:N.a.titulo_filtros},"Marca"),R("ul",{id:"listaMarca",className:N.a.sinBorderBottom+" "+N.a.lista+" ".concat(N.a.listaMarca)},a.marcasReducer.marcas.map((function(a,e){return R("li",{key:a.idMarca},R("div",{className:N.a.item_filtro+" ".concat(_.marca==a.idMarca?N.a.active:""),onClick:function(){return r("marca","".concat(a.idMarca))}},R("span",{className:"text-muted"},a.marca)),R(v.a,{icon:g.p,className:N.a.icon_close_filtro+" ".concat(_.marca==a.idMarca?"":"d-none"),onClick:function(){return i("marca")}}))}))))))})),X=t("nOHt"),I=t("WkNE"),J=s.a.createElement,L=function(a){var e=Object(X.useRouter)(),t=e.asPath,r=e.query,o="Oliver - Productos";return"/productos"!==t&&(r.search?o=r.search+" en OliverPetShop":r.index[0]&&(o=r.index[0].replace("-"," ").replace(/\b\w/g,(function(a){return a.toUpperCase()}))+" en OliverPetShop")),J(s.a.Fragment,null,J(i.a,{title:o}),J("section",{className:"main__productos container"},J("div",{className:"row"},J(S,{location:t,query:r}),J("div",{className:"col-12 py-3"},J(k,{location:t,query:r})))),J(I.a,null))};L.getInitialProps=function(){var a=Object(n.a)(o.a.mark((function a(e){var t;return o.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t=e.query,a.abrupt("return",{query:t});case 2:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}();e.default=L},kVRI:function(a,e,t){"use strict";t.r(e),t.d(e,"traerTodas",(function(){return i}));var r=t("o0o1"),o=t.n(r),n=t("HaE+"),c=t("rOcY"),s=t("HKBJ"),i=function(){return function(){var a=Object(n.a)(o.a.mark((function a(e){return o.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return e({type:s.b}),a.prev=1,a.abrupt("return",fetch("".concat(c.a,"/marcas")).then((function(a){return a.json()})).then((function(a){var t=a.data;e({type:s.c,payload:t})})).catch((function(a){e({type:s.a,payload:a})})));case 5:a.prev=5,a.t0=a.catch(1),e({type:s.a,payload:a.t0});case 8:case"end":return a.stop()}}),a,null,[[1,5]])})));return function(e){return a.apply(this,arguments)}}()}},maHl:function(a,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/productos/[[...index]]",function(){return t("YRs9")}])},o9Kd:function(a,e,t){"use strict";t.d(e,"c",(function(){return r})),t.d(e,"b",(function(){return o})),t.d(e,"a",(function(){return n}));var r="subcategorias_traer_todas",o="subcategorias_loading",n="subcategorias_error"},rfcl:function(a,e,t){"use strict";t.r(e),t.d(e,"traerTodas",(function(){return i}));var r=t("o0o1"),o=t.n(r),n=t("HaE+"),c=t("rOcY"),s=t("6Xhb"),i=function(){return function(){var a=Object(n.a)(o.a.mark((function a(e){return o.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return e({type:s.b}),a.prev=1,a.abrupt("return",fetch("".concat(c.a,"/categorias")).then((function(a){return a.json()})).then((function(a){var t=a.data;e({type:s.c,payload:t})})).catch((function(a){e({type:s.a,payload:a})})));case 5:a.prev=5,a.t0=a.catch(1),e({type:s.a,payload:a.t0});case 8:case"end":return a.stop()}}),a,null,[[1,5]])})));return function(e){return a.apply(this,arguments)}}()}}},[["maHl",1,2,5,0,3,4,6,7,10]]]);