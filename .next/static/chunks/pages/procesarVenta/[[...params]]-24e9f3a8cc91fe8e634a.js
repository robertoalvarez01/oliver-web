_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[22],{"/GLu":function(t,e,r){"use strict";r.d(e,"b",(function(){return n})),r.d(e,"a",(function(){return a})),r.d(e,"c",(function(){return o}));var n="ventas_cambiar_medio_de_pago",a="ventas_actualizar_envio",o="ventas_traer_info_venta"},BsWD:function(t,e,r){"use strict";r.d(e,"a",(function(){return a}));var n=r("a3WO");function a(t,e){if(t){if("string"===typeof t)return Object(n.a)(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?Object(n.a)(t,e):void 0}}},IbKK:function(t,e,r){"use strict";r.d(e,"a",(function(){return i}));var n=r("o0o1"),a=r.n(n),o=r("HaE+"),c=r("pzYh"),i=function(t){return function(){var e=Object(o.a)(a.a.mark((function e(r){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r({type:c.c}),e.prev=1,t){e.next=4;break}return e.abrupt("return",r({type:c.a,payload:"Sin datos de env\xedo"}));case 4:r({type:c.b,payload:"".concat(t).toLowerCase()}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),r({type:c.a,payload:e.t0.message});case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}()}},KQm4:function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));var n=r("a3WO");var a=r("BsWD");function o(t){return function(t){if(Array.isArray(t))return Object(n.a)(t)}(t)||function(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||Object(a.a)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},"L/dm":function(t,e,r){"use strict";r.d(e,"e",(function(){return n})),r.d(e,"d",(function(){return a})),r.d(e,"c",(function(){return o})),r.d(e,"a",(function(){return c})),r.d(e,"b",(function(){return i}));var n="TRAER_ZONAS",a="SELECCIONAR_ZONA",o="ZONA_LOADING",c="ZONA_ERROR",i="ZONA_LIMPIAR_ACTIVO"},VMmF:function(t,e,r){"use strict";r.d(e,"b",(function(){return u})),r.d(e,"a",(function(){return s}));var n=r("o0o1"),a=r.n(n),o=r("HaE+"),c=r("rOcY"),i=r("L/dm"),u=function(){return function(){var t=Object(o.a)(a.a.mark((function t(e){var r,n,o,u;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e({type:i.c}),t.prev=1,r=JSON.parse(localStorage.getItem("oliverpetshop_usuario")),(n=new Headers).append("token",r.token),t.next=7,fetch("".concat(c.a,"/zonas"),{headers:n});case 7:return o=t.sent,t.next=10,o.json();case 10:u=t.sent,e({type:i.e,payload:u.data}),t.next=17;break;case 14:t.prev=14,t.t0=t.catch(1),e({type:i.a,payload:t.t0});case 17:case"end":return t.stop()}}),t,null,[[1,14]])})));return function(e){return t.apply(this,arguments)}}()},s=function(t){return function(e,r){if(!t)return console.log("aca"),void e({type:i.b});var n=r().zonasReducer.zonas.filter((function(e){return e.idZona==t}));n.length?(n=n[0],e({type:i.d,payload:n})):e({type:i.a,payload:"No se encontro la zona"})}}},a3WO:function(t,e,r){"use strict";function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}r.d(e,"a",(function(){return n}))},aQxn:function(t,e,r){"use strict";r.r(e);var n=r("o0o1"),a=r.n(n),o=r("HaE+"),c=r("MX0m"),i=r.n(c),u=r("q1tI"),s=r.n(u),d=r("k2JI"),p=r("XOuL"),l=r("/MKj"),f=r("nhAV"),v=r("IbKK"),m=r("VMmF"),y=r("mz+u"),b=r("rOcY"),g=r("t0wy"),h=s.a.createElement,_=r("PSD3"),O=f.traerProductos,w=v.a,x=m.a,S=m.b,j=y.b,E=y.c,k=function(t){var e=Object(u.useState)(!1),r=e[0],n=e[1],c=t.carritoReducer,l=t.ventaReducer,f=t.carritoTraerProductos,v=t.enviosGuardar,m=t.zonasGuardar,y=t.inicializarStoreVenta,O=t.setDataEnvioEnVenta,w=t.traerZonas,x=t.status,S=t.payment_id,j=t.collection_id,E=t.usuarioReducer,k=E.usuario,R=E.logueado,N=t.zonasReducer,z=N.zonas,I=N.zona,P=t.ventaReducer,A=P.idMedioPago,J=P.tipoEnvio,L=P.productos,T=P.cantidad,V=P.subtotal,Z=P.porcentaje_descuento,M=P.descuento,F=P.total;Object(u.useEffect)((function(){"approved"!=x?n(!0):w()}),[]),Object(u.useEffect)((function(){if(R&&z.length>0){var t=JSON.parse(localStorage.getItem("dataEnvio"));v(t.tipo),m(t.zona),f()}}),[R,z]),Object(u.useEffect)((function(){c.productos.length>0&&(y(),O())}),[c.productos]),Object(u.useEffect)((function(){if(J&&L.length&&0!=T&&0!=F){var t=k.idUsuario,e={envio:{idZona:I?I.idZona:null,tipo:J},venta:{subtotal:V,porcentaje_descuento:Z,descuento:M,total:F,productos:L,collection_id:j,payment_id:S,idMedioPago:A,idUsuario:t}};D(e)}else console.log("no se puede completar la operacion")}),[l]);var D=function(){var t=Object(o.a)(a.a.mark((function t(e){var r,o;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,(r=new Headers).append("token",k.token),r.append("Content-Type","application/json"),o="".concat(b.a,"/ventas/registrarVenta"),t.next=7,fetch(o,{headers:r,method:"POST",body:JSON.stringify(e)});case 7:200==t.sent.status?(localStorage.removeItem("dataEnvio"),localStorage.removeItem("carrito"),_.fire("Listo","Felicidades, tu compra se registr\xf3 con \xe9xito. En breve nos comunicaremos con usted para informarle el estado de su compra v\xeda email.","success").then((function(){return window.location.assign("/")}))):n(!0),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),n(t.t0.message);case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e){return t.apply(this,arguments)}}();return r?h(g.a,{message:"Ha ocurrido un error, intentalo mas tarde"}):h(s.a.Fragment,null,h(d.a,{title:"Finalizacion de compra",metadesc:""}),h("div",{className:"jsx-2063553454 wrapper"},h(p.a,null),h("p",{className:"jsx-2063553454"},"Su compra esta siento procesada, aguarde unos segundos...")),h(i.a,{id:"2063553454"},[".wrapper.jsx-2063553454{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:90vh;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}"]))};k.getInitialProps=function(){var t=Object(o.a)(a.a.mark((function t(e){var r,n,o,c;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.query,n=r.payment_id,o=r.status,c=r.collection_id,t.abrupt("return",{collection_id:c,status:o,payment_id:n});case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();var R={enviosGuardar:w,carritoTraerProductos:O,zonasGuardar:x,setDataEnvioEnVenta:E,inicializarStoreVenta:j,traerZonas:S};e.default=Object(l.b)((function(t){return{carritoReducer:t.carritoReducer,enviosReducer:t.enviosReducer,usuarioReducer:t.usuarioReducer,zonasReducer:t.zonasReducer,ventaReducer:t.ventaReducer}}),R)(k)},kqUl:function(t,e,r){"use strict";r.d(e,"e",(function(){return n})),r.d(e,"a",(function(){return a})),r.d(e,"b",(function(){return o})),r.d(e,"d",(function(){return c})),r.d(e,"c",(function(){return i}));var n="carrito_traer_todos_carrito",a="carrito_agregar_producto",o="carrito_eliminar_producto",c="carrito_loading",i="carrito_error"},"mz+u":function(t,e,r){"use strict";r.d(e,"b",(function(){return a})),r.d(e,"a",(function(){return o})),r.d(e,"c",(function(){return c}));var n=r("/GLu"),a=function(){return function(t,e){var r=e().carritoReducer,a={productos:r.productos,cantidad:r.cantidad,subTotal:r.total};t({type:n.c,payload:a})}},o=function(t){return function(e){return e({type:n.b,payload:t})}},c=function(){return function(t,e){var r=e().zonasReducer.zona,a=e().enviosReducer.tipos,o={};return a.normal?(o.total=r?r.precio:0,o.tipo="Domicilio"):a.express?(o.total=r?r.precio_express:0,o.tipo="Express",o.idMedioPago="1"):(o.total=0,o.tipo="Local"),o.zona=r?r.idZona:null,o.idMedioPago="1",t({type:n.a,payload:o})}}},nhAV:function(t,e,r){"use strict";r.r(e),r.d(e,"traerProductos",(function(){return u})),r.d(e,"agregarProducto",(function(){return s})),r.d(e,"eliminarProducto",(function(){return d}));var n=r("KQm4"),a=r("o0o1"),o=r.n(a),c=r("HaE+"),i=r("kqUl"),u=function(){return function(){var t=Object(c.a)(o.a.mark((function t(e){var r,n,a,c;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e({type:i.d}),t.prev=1,t.next=4,JSON.parse(localStorage.getItem("carrito"));case 4:return r=t.sent,n=0,r.forEach((function(t){n+=parseFloat(t.precio*t.cantidad)})),a=r.length,c={productos:r,total:n,cantidad:a},t.abrupt("return",e({type:i.e,payload:c}));case 12:return t.prev=12,t.t0=t.catch(1),t.abrupt("return",e({type:i.c,payload:t.t0}));case 15:case"end":return t.stop()}}),t,null,[[1,12]])})));return function(e){return t.apply(this,arguments)}}()},s=function(t){return function(){var e=Object(c.a)(o.a.mark((function e(r,a){var c,u,s,d,p,l,f,v;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r({type:i.d});try{c=a().carritoReducer.productos,(s=c.filter((function(e){return e.idSubProducto==t.idSubProducto}))).length>0?(s[0].cantidad=s[0].cantidad+t.cantidad,d=c.filter((function(t){return t.idSubProducto!=s[0].idSubProducto})),u=d.length>0?[].concat(Object(n.a)(d),[s[0]]):[s[0]]):u=[].concat(Object(n.a)(c),[t]),localStorage.setItem("carrito",JSON.stringify(u)),p=JSON.parse(localStorage.getItem("carrito")),l=0,p.forEach((function(t){l+=parseFloat(t.precio*t.cantidad)})),f=u.length,v={listProductosUpgrade:u,total:l,cantidad:f},setTimeout((function(){r({type:i.a,payload:v})}),1500)}catch(o){r({type:i.c,payload:o})}case 2:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}()},d=function(t){return function(){var e=Object(c.a)(o.a.mark((function e(r,n){var a,c,u,s,d;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r({type:i.d});try{a=n().carritoReducer.productos,c=a.filter((function(e){return e.idSubProducto!==t})),localStorage.setItem("carrito",JSON.stringify(c)),u=JSON.parse(localStorage.getItem("carrito")),s=0,u.forEach((function(t){s+=parseFloat(t.precio*t.cantidad)})),d={newProductos:c,total:s,cantidad:u.length},r({type:i.b,payload:d})}catch(o){r({type:i.c,payload:o})}case 2:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}()}},pg2c:function(t,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/procesarVenta/[[...params]]",function(){return r("aQxn")}])},pzYh:function(t,e,r){"use strict";r.d(e,"c",(function(){return n})),r.d(e,"a",(function(){return a})),r.d(e,"b",(function(){return o}));var n="envios_loading",a="envios_error",o="envios_guardar"},t0wy:function(t,e,r){"use strict";var n=r("q1tI"),a=r.n(n).a.createElement;e.a=function(t){var e=t.message;return a("div",{className:"alert alert-warning text-center"},e)}}},[["pg2c",1,2,0,3,7]]]);