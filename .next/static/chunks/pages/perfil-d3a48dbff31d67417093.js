_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[20],{"6Jgp":function(e,t,r){"use strict";var a=r("o0o1"),n=r.n(a),o=r("HaE+"),c=r("MX0m"),i=r.n(c),u=r("q1tI"),s=r.n(u),l=r("/MKj"),d=r("XOuL"),p=r("rOcY"),f=s.a.createElement;t.a=Object(l.b)((function(e){return{usuarioReducer:e.usuarioReducer}}),null)((function(e){var t=Object(u.useState)(!1),r=t[0],a=t[1],c=Object(u.useState)(null),s=c[0],l=c[1],m=Object(u.useState)(null),b=m[0],x=m[1],g=Object(u.useState)(""),j=g[0],y=g[1],v=function(){var t=Object(o.a)(n.a.mark((function t(){var r,o,c,i,u,s,d;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=new Headers,!e.usuarioReducer.logueado){t.next=9;break}if(c=e.usuarioReducer.usuario,i=c.idUsuario,u=c.token){t.next=5;break}return t.abrupt("return",l("Ups.. ha ocurrido un error."));case 5:r.append("token",u),o={idUsuario:i},t.next=12;break;case 9:if(""!=j){t.next=11;break}return t.abrupt("return",l("Ups.. ha ocurrido un error."));case 11:o={email:j};case 12:return a(!0),r.append("Content-Type","application/json"),console.log(o),t.next=17,fetch("".concat(p.a,"/resetPassword"),{method:"POST",headers:r,body:JSON.stringify(o)});case 17:if(200==(s=t.sent).status){t.next=21;break}return a(!1),t.abrupt("return",l("Ups.. ha ocurrido un error."));case 21:return t.next=23,s.json();case 23:if(d=t.sent,a(!1),!d.ok){t.next=27;break}return t.abrupt("return",x(d.info));case 27:return t.abrupt("return",l("Ups.. ha ocurrido un error."));case 28:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return f("div",{className:"jsx-204570501 containerResetPass"},f("div",{className:"jsx-204570501 text-center"},s?f("div",{className:"jsx-204570501 alert alert-danger text-center"},s):null),f("div",{className:"jsx-204570501 "+"alert alert-".concat(b?"info":"warning"," text-center")},b?f("b",{className:"jsx-204570501"},b):"Estaremos enviando un email con los pasos para poder realizar el proceso de modificaci\xf3n de contrase\xf1a"),f("div",{className:"jsx-204570501 col-12 text-center"},r?f(d.a,null):null,e.withEmail?f("input",{type:"email",value:j,onChange:function(e){y(e.target.value)},required:!0,placeholder:"Ingrese su email",className:"jsx-204570501 form-control mb-3"}):null,b||r?null:f("button",{onClick:v,type:"button",className:"jsx-204570501 boton bg-yellow"},"Enviar email")),f(i.a,{id:"204570501"},[".containerResetPass.jsx-204570501{font-family:'Quicksand',sans-serif!important;}"]))}))},LwYX:function(e,t,r){"use strict";r.d(t,"v",(function(){return a})),r.d(t,"w",(function(){return s})),r.d(t,"m",(function(){return n})),r.d(t,"k",(function(){return o})),r.d(t,"u",(function(){return c})),r.d(t,"o",(function(){return i})),r.d(t,"l",(function(){return u})),r.d(t,"n",(function(){return l})),r.d(t,"s",(function(){return d})),r.d(t,"t",(function(){return p})),r.d(t,"a",(function(){return x})),r.d(t,"e",(function(){return m})),r.d(t,"d",(function(){return g})),r.d(t,"c",(function(){return b})),r.d(t,"b",(function(){return f})),r.d(t,"f",(function(){return h})),r.d(t,"j",(function(){return y})),r.d(t,"i",(function(){return w})),r.d(t,"h",(function(){return v})),r.d(t,"g",(function(){return j})),r.d(t,"q",(function(){return k})),r.d(t,"p",(function(){return N})),r.d(t,"r",(function(){return O}));var a="producto_traer_todos",n="producto_loading",o="producto_error",c="producto_traer_promociones",i="producto_ordenarproductos",u="producto_filtrando",s="producto_traeruno",l="producto_loading_mas",d="producto_traer_mas",p="producto_traer_ofertas",f="producto_filtro_categoria",m="producto_filtro_subcategoria",b="producto_filtro_marca",x="producto_filtro_buscador",g="producto_filtro_orden",j="producto_eliminar_filtro_categoria",y="producto_eliminar_filtro_subcategoria",v="producto_eliminar_filtro_marca",h="producto_eliminar_filtro_buscador",w="producto_eliminar_filtro_orden",k="productos_restablecer_filtros",N="productos_paginacion",O="productos_sin_resultado"},TVVT:function(e,t,r){"use strict";r.r(t),r.d(t,"traerProductos",(function(){return l})),r.d(t,"traerMas",(function(){return d})),r.d(t,"traerPorId",(function(){return p})),r.d(t,"traerPromociones",(function(){return f})),r.d(t,"ordenarProductos",(function(){return m})),r.d(t,"aplicarFiltro",(function(){return b})),r.d(t,"quitarFiltro",(function(){return x})),r.d(t,"restablecerFiltros",(function(){return g})),r.d(t,"updatePaginacion",(function(){return j}));var a=r("KQm4"),n=r("o0o1"),o=r.n(n),c=r("HaE+"),i=r("rOcY"),u=r("pRT7"),s=r("LwYX"),l=function(){return function(){var e=Object(c.a)(o.a.mark((function e(t,r){var a,n,c,l,d,p,f,m,b,x,g,j;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:s.m}),e.prev=1,a=r().productosReducer,n=a.filtrando,c=a.filtros,l=c.categoria,d=c.subcategoria,p=c.marca,f=c.search,c.orden,m=a.paginacion,b=m.desde,x=m.limiteMobile,g=m.limiteDesktop,j="".concat(i.a),n?""!==f.trim()?j+="/productos/buscar?busqueda=".concat(f,"&desde=").concat(b,"&limite=").concat(Object(u.b)()?x:g):(j+="/productos/filtro/filtrar?desde=".concat(b,"&limite=").concat(Object(u.b)()?x:g,"&"),l&&(j+="categoria=".concat(l,"&")),d&&(j+="subcategoria=".concat(d,"&")),p&&(j+="marca=".concat(p))):j+="/producto?desde=".concat(b,"&limite=").concat(Object(u.b)()?x:g),e.abrupt("return",fetch(j).then((function(e){return e.json()})).then((function(e){t({type:s.v,payload:e.data})})));case 8:e.prev=8,e.t0=e.catch(1),t({type:s.k,payload:e.t0});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t,r){return e.apply(this,arguments)}}()},d=function(){return function(){var e=Object(c.a)(o.a.mark((function e(t,r){var n,c,l,d,p,f,m,b,x,g,j,y,v;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:s.n}),e.prev=1,n=r().productosReducer,c=n.productos,l=n.filtrando,d=n.filtros,p=d.categoria,f=d.subcategoria,m=d.marca,b=d.search,d.orden,x=n.paginacion,g=x.desde,j=x.limiteMobile,y=x.limiteDesktop,v="".concat(i.a),l?""!==b.trim()?v+="/productos/buscar?busqueda=".concat(b,"&desde=").concat(g,"&limite=").concat(Object(u.b)()?j:y):(v+="/productos/filtro/filtrar?desde=".concat(g,"&limite=").concat(Object(u.b)()?j:y,"&"),p&&(v+="categoria=".concat(p,"&")),f&&(v+="subcategoria=".concat(f,"&")),m&&(v+="marca=".concat(m))):v+="/producto?desde=".concat(g,"&limite=").concat(Object(u.b)()?j:y),e.abrupt("return",fetch(v).then((function(e){return e.json()})).then((function(e){if(0!==e.data.length){var r=[].concat(Object(a.a)(c),Object(a.a)(e.data));t({type:s.s,payload:r})}else t({type:s.r})})));case 8:e.prev=8,e.t0=e.catch(1),t({type:s.k,payload:e.t0});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t,r){return e.apply(this,arguments)}}()},p=function(e){return function(){var t=Object(c.a)(o.a.mark((function t(r){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r({type:s.m}),t.prev=1,t.abrupt("return",fetch("".concat(i.a,"/producto/").concat(e)).then((function(e){return e.json()})).then((function(e){r({type:s.w,payload:e})})));case 5:t.prev=5,t.t0=t.catch(1),r({type:s.k,payload:t.t0});case 8:case"end":return t.stop()}}),t,null,[[1,5]])})));return function(e){return t.apply(this,arguments)}}()},f=function(){return function(){var e=Object(c.a)(o.a.mark((function e(t){var r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:s.m}),e.prev=1,r="".concat(i.a,"/subproductos/ofertas?desde=0&limite=9"),Object(u.b)()&&(r="".concat(i.a,"/subproductos/ofertas?desde=0&limite=6")),e.abrupt("return",fetch(r).then((function(e){return e.json()})).then((function(e){t({type:s.t,payload:e.data})})));case 7:e.prev=7,e.t0=e.catch(1),t({type:s.k,payload:e.t0.message});case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}()},m=function(e){return function(){var t=Object(c.a)(o.a.mark((function t(r){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r({type:s.m});try{r({type:s.o,payload:e})}catch(a){r({type:s.k,payload:a})}case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},b=function(e,t){return function(r){switch(e){case"categoria":r({type:s.b,payload:t});break;case"subcategoria":r({type:s.e,payload:t});break;case"marca":r({type:s.c,payload:t});break;case"search":r({type:s.a,payload:t});break;case"orden":r({type:s.d,payload:t})}}},x=function(e){return function(t,r){var a=r().productosReducer.filtros,n=a.categoria,o=a.subcategoria,c=a.marca;a.search,a.orden;switch(e){case"categoria":t(o||c?{type:s.g}:{type:s.q});break;case"subcategoria":t(n||c?{type:s.j}:{type:s.q});break;case"marca":t(n||o?{type:s.h}:{type:s.q});break;case"buscador":t({type:s.f});break;case"orden":t({type:s.i})}}},g=function(){return function(e){e({type:s.q})}},j=function(){return function(e,t){var r=t().productosReducer.paginacion,a=Object(u.b)()?r.desde+r.limiteMobile:r.desde+r.limiteDesktop;e({type:s.p,payload:a})}}},lVdJ:function(e,t,r){"use strict";r.r(t);var a=r("BsWD");function n(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var r=[],a=!0,n=!1,o=void 0;try{for(var c,i=e[Symbol.iterator]();!(a=(c=i.next()).done)&&(r.push(c.value),!t||r.length!==t);a=!0);}catch(u){n=!0,o=u}finally{try{a||null==i.return||i.return()}finally{if(n)throw o}}return r}}(e,t)||Object(a.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var o=r("MX0m"),c=r.n(o),i=r("k2JI"),u=r("q1tI"),s=r.n(u),l=s.a.createElement,d=function(e){var t=e.usuario,r=e.abrirModalFoto;return l("div",{className:"jsx-2182704935 row"},l("div",{className:"jsx-2182704935 col-12 col-md-6 text-center"},l("img",{src:t.foto,alt:t.nombre,className:"jsx-2182704935"})),l("div",{className:"jsx-2182704935 col-12 col-md-6 text-center"},l("h3",{className:"jsx-2182704935"},t.nombre),l("button",{type:"button",onClick:r,className:"jsx-2182704935 boton bg-yellow"},"Cambiar Foto")),l(c.a,{id:"2182704935"},["img.jsx-2182704935{border-radius:30px;width:60px;height:60px;}"]))},p=s.a.createElement,f=function(){return p("div",{className:"jsx-3392845155 estadisticas_usuario"},p("div",{className:"jsx-3392845155 col-6 text-center"},p("h2",{className:"jsx-3392845155"},"0"),p("span",{className:"jsx-3392845155"},"Compras")),p("div",{className:"jsx-3392845155 col-6 text-center"},p("h2",{className:"jsx-3392845155"},"0"),p("span",{className:"jsx-3392845155"},"Puntos")),p(c.a,{id:"3392845155"},[".estadisticas_usuario.jsx-3392845155{background-color:#fff;width:50%;float:right;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;padding:10px 20px;border-radius:5px;}","h2.jsx-3392845155{font-weight:bold;}","@media(max-width:768px){.estadisticas_usuario.jsx-3392845155{float:initial;width:100%;margin-top:10px;}}"]))},m=r("/MKj"),b=r("HdXA"),x=s.a.createElement,g=Object(m.b)((function(e){return{usuarioReducer:e.usuarioReducer}}),b)((function(e){var t=e.usuarioReducer.usuario;return t?x("section",{className:"jsx-3269591714 banner_usuario"},x("div",{className:"jsx-3269591714 row"},x("div",{className:"jsx-3269591714 col-12 col-md-6"},x(d,{usuario:t,abrirModalFoto:e.abrirModalFoto})),x("div",{className:"jsx-3269591714 col-12 col-md-6"},x(f,null))),x(c.a,{id:"3269591714"},["section.jsx-3269591714{height:200px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}","@media(max-width:768px){section.jsx-3269591714{margin:50px 0px;}}"])):null})),j=r("9a8N"),y=r("F66N"),v=r("arvA"),h=r("TSYQ"),w=r.n(h),k=s.a.createElement,N=function(e){return k(j.a,{tabs:!0},e.solapas.map((function(t,r){return k(y.a,{key:r},k(v.a,{className:w()({active:e.activeTab==="".concat(r+1)}),onClick:function(){e.toggle("".concat(r+1))}},t.nombre))})))},O=r("wx14"),_=r("o0o1"),R=r.n(_),P=r("HaE+"),E=r("rePB"),S=r("wHSu"),C=r("IP2g"),I=r("bItr"),M=r.n(I),F=r("XOuL"),T=s.a.createElement;function q(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function D(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?q(Object(r),!0).forEach((function(t){Object(E.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):q(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var U=Object(m.b)((function(e){return{usuarioReducer:e.usuarioReducer}}),b)((function(e){Object(u.useEffect)((function(){if(e.usuarioReducer.usuario&&!e.usuarioReducer.loading){var t=e.usuarioReducer.usuario;i({nombre:t.nombre,telefono:t.telefono,email:t.email,address:t.address,lat:t.lat,lon:t.lon})}}),[e.usuarioReducer]);var t=Object(u.useState)({nombre:!0,telefono:!0,email:!0,address:!0}),r=t[0],a=t[1],n=Object(u.useState)({nombre:"",telefono:"",email:"",address:"",lat:0,lon:0}),o=n[0],i=n[1],s=Object(u.useState)(""),l=s[0],d=s[1],p=function(e){var t=r[e];return a(D(D({},r),{},Object(E.a)({},e,!t)))},f=function(e){return i(D(D({},o),{},Object(E.a)({},e.target.name,e.target.value)))};return T("form",{onSubmit:function(){var t=Object(P.a)(R.a.mark((function t(r){return R.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r.preventDefault(),t.next=3,e.actualizarUsuario(o,e.usuarioReducer.usuario.idUsuario);case 3:if(e.usuarioReducer.error||e.usuarioReducer.loading){t.next=5;break}return t.abrupt("return",d("Tus datos se han modificado de manera exitosa"));case 5:return t.abrupt("return",d(""));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),className:"jsx-2483563024 form-group"},""==l||e.usuarioReducer.error?null:T("div",{className:"jsx-2483563024 alert alert-success text-center"},T("b",{className:"jsx-2483563024"},l)),e.usuarioReducer.error?T("div",{className:"jsx-2483563024 alert alert-danger text-center"},T("b",{className:"jsx-2483563024"},e.usuarioReducer.error)):null,T("div",{className:"jsx-2483563024 row"},T("div",{className:"jsx-2483563024 col-12 col-md-6 my-4 d-flex align-items-center"},T("input",{disabled:r.nombre,onChange:f,value:o.nombre,type:"text",name:"nombre",id:"nombre",placeholder:"Nombre",className:"jsx-2483563024 form-control mr-auto"}),T(C.a,{className:"iconoHabilitarInput",icon:r.nombre?S.i:S.p,onClick:function(){return p("nombre")},required:!0})),T("div",{className:"jsx-2483563024 col-12 col-md-6 my-4 d-flex align-items-center"},T("input",{disabled:r.telefono,onChange:f,value:o.telefono,type:"text",name:"telefono",id:"telefono",placeholder:"Telefono",className:"jsx-2483563024 form-control mr-auto"}),T(C.a,{className:"iconoHabilitarInput",icon:r.telefono?S.i:S.p,onClick:function(){return p("telefono")}})),T("div",{className:"jsx-2483563024 col-12 col-md-6 my-4 d-flex align-items-center"},T("input",{disabled:r.email,onChange:f,value:o.email,type:"email",name:"email",id:"email",className:"jsx-2483563024 form-control mr-auto"})),T("div",{className:"jsx-2483563024 col-12 col-md-6 my-4 d-flex align-items-center"},T(M.a,{value:o.address,onChange:function(e){return i(D(D({},o),{},{address:e}))},onSelect:function(e){Object(I.geocodeByAddress)(e).then((function(e){return Object(I.getLatLng)(e[0])})).then((function(t){i(D(D({},o),{},{address:e,lat:t.lat,lon:t.lng}))})).catch((function(e){return console.error("Error",e)}))}},(function(e){var t=e.getInputProps,a=e.suggestions,n=e.getSuggestionItemProps,c=e.loading;return T("div",{className:"jsx-2483563024 mr-auto w-100"},T("input",Object(O.a)({name:"address",id:"address"},t({placeholder:o.address}),{disabled:r.address,placeholder:"Direcci\xf3n",className:"jsx-2483563024 form-control"})),T("div",{style:{position:"fixed",zIndex:"1000",backgroundColor:"#fff"},className:"jsx-2483563024 autocomplete-dropdown-container"},c&&T("div",{className:"jsx-2483563024"},"Cargando ubicaciones..."),a.map((function(e,t){var r=e.active?"suggestion-item--active":"suggestion-item",a=e.active?{backgroundColor:"#fafafa",cursor:"pointer",margin:"10px",padding:"5px"}:{backgroundColor:"#ffffff",cursor:"pointer",margin:"10px",padding:"5px"};return T("div",Object(O.a)({},n(e,{className:r,style:a,key:t}),{className:"jsx-2483563024"}),T("span",{className:"jsx-2483563024"},e.description))}))))})),T(C.a,{className:"iconoHabilitarInput",icon:r.address?S.i:S.p,onClick:function(){return p("address")}})),T("div",{className:"jsx-2483563024 col-12 mb-4 text-right"},T("button",{type:"button",onClick:e.abrirModalPw,className:"jsx-2483563024 btn btn-warning"},T(C.a,{icon:S.f})," Cambiar contrase\xf1a")),T("div",{className:"jsx-2483563024 col-12 text-center"},e.usuarioReducer.loading?T(F.a,null):T("input",{type:"submit",value:"Guardar cambios",className:"jsx-2483563024 boton bg-yellow"}))),T(c.a,{id:"2483563024"},[".form-control.jsx-2483563024{width:92%;}",".iconoHabilitarInput.jsx-2483563024{cursor:pointer!important;}","button.jsx-2483563024{color:#fff !important;}"]))})),H=r("Czwy"),V=r("EzvR"),X=r("ok1R"),J=r("rhny"),A=r("Mnxd"),z=s.a.createElement,L=function(e){var t=function(){return console.log("eliminar")};return[1,2,3,4,5,6,7,8,9].map((function(e){return z(A.a,{key:e,idSubProducto:"1",producto:"Dog pron Adulto",peso:"5",total:"1500",foto:"https://storage.googleapis.com/web-oliver/-VitalCrops-DogPro-Adulto-15k.jpg",cantidad:"1",eliminarProducto:t})}))},Y=r("/Q2I"),B=r("t0wy"),Q=s.a.createElement,K=Object(m.b)((function(e){return{usuarioReducer:e.usuarioReducer}}),b)((function(e){var t=e.usuarioReducer,r=t.usuario,a=t.error,n=t.loading;return Q("form",{className:"form-group",id:"formModificarFotoUsuario",onSubmit:function(t){t.preventDefault();var a=document.getElementById("formModificarFotoUsuario"),n=new FormData(a);""!==n.get("foto").name&&e.actualizarFoto(n,r.idUsuario)}},a?Q(B.a,{message:a.message}):null,Q("label",null,"Seleccione la nueva imagen de perfil"),Q("input",{type:"file",required:!0,className:"form-control",name:"foto"}),n?Q("div",{className:"text-center mt-2"},Q(F.a,null)):Q("input",{type:"submit",className:"boton bg-yellow mt-3",value:"Subir"}))})),G=r("6Jgp"),W=r("TVVT"),Z=s.a.createElement,$={restablecerFiltros:W.restablecerFiltros};t.default=Object(m.b)((function(e){return e}),$)((function(e){var t=n(s.a.useState("1"),2),r=t[0],a=t[1],o=n(s.a.useState(!1),2),l=o[0],d=o[1],p=n(s.a.useState(!1),2),f=p[0],m=p[1],b=n(s.a.useState(!1),2),x=(b[0],b[1]);Object(u.useEffect)((function(){document.getElementsByTagName("body")[0].style.overflowY="auto",e.productosReducer.filtrando&&e.restablecerFiltros()}),[]);var j=function(){d(!l)};return Z(s.a.Fragment,null,Z(i.a,{title:"Oliver Petshop - Mi perfil"}),Z("div",{className:"jsx-53771273 container"},Z(g,{abrirModalFoto:function(){m(!0),x(!1),j()}}),Z(N,{toggle:function(e){r!==e&&a(e)},activeTab:r,solapas:[{nombre:"General"}]})),Z("div",{className:"jsx-53771273 container-form"},Z("div",{className:"jsx-53771273 container pt-3"},Z(H.a,{activeTab:r},Z(V.a,{tabId:"1"},Z(X.a,null,Z(J.a,{sm:"12"},Z(U,{abrirModalPw:function(){x(!0),m(!1),j()}})))),Z(V.a,{tabId:"2",className:"tab-productos"},Z(X.a,null,Z(J.a,{sm:"12"},Z(L,null))))))),l?Z(Y.a,{closeModal:j},Z(f?K:G.a,null)):null,Z(c.a,{id:"53771273"},[".container-form.jsx-53771273{background-color:#fff;}","@media(min-width:768px){.container-form.jsx-53771273{height:55vh;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}}"]))}))},qV4O:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/perfil",function(){return r("lVdJ")}])}},[["qV4O",1,2,5,0,3,4,8,10,12]]]);