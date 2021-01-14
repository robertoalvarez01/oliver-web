(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[7],{HdXA:function(e,t,r){"use strict";r.r(t),r.d(t,"login",(function(){return i})),r.d(t,"logout",(function(){return c})),r.d(t,"verificarSesion",(function(){return p})),r.d(t,"register",(function(){return l})),r.d(t,"singInWithGoogle",(function(){return d})),r.d(t,"actualizarFoto",(function(){return f})),r.d(t,"actualizarUsuario",(function(){return y})),r.d(t,"actualizarAddress",(function(){return b})),r.d(t,"sendEmailForResetPassword",(function(){return h})),r.d(t,"updatePassword",(function(){return v}));var a=r("o0o1"),n=r.n(a),o=r("HaE+"),u=r("rOcY"),s=r("i5yP"),i=function(e){return function(){var t=Object(o.a)(n.a.mark((function t(r){var a;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r({type:s.b}),t.prev=1,""!==e.email.trim()&&""!==e.password.trim()){t.next=4;break}return t.abrupt("return",r({type:s.a,payload:"Es necesario completar todos los campos"}));case 4:return(a=new Headers).append("Content-Type","application/json"),t.abrupt("return",fetch("".concat(u.a,"/login"),{method:"POST",body:JSON.stringify(e),headers:a}).then((function(e){return e.json()})).then((function(e){if(!e.ok)return r({type:s.a,payload:e.info});var t={nombre:e.usuario.nombre,email:e.usuario.email,foto:e.usuario.foto,token:e.token,address:e.usuario.ubicacion,idUsuario:e.usuario.idUsuario,lat:e.usuario.lat,lon:e.usuario.lon,telefono:e.usuario.telefono};localStorage.setItem("oliverpetshop_usuario",JSON.stringify(t)),r({type:s.c,payload:localStorage.getItem("oliverpetshop_usuario")})})));case 9:return t.prev=9,t.t0=t.catch(1),console.log(t.t0),t.abrupt("return",r({type:s.a,payload:t.t0}));case 13:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()},c=function(){return function(){var e=Object(o.a)(n.a.mark((function e(t){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:s.b}),e.prev=1,localStorage.removeItem("oliverpetshop_usuario"),e.abrupt("return",t({type:s.d}));case 6:e.prev=6,e.t0=e.catch(1),t({type:s.a,payload:e.t0});case 9:case"end":return e.stop()}}),e,null,[[1,6]])})));return function(t){return e.apply(this,arguments)}}()},p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return function(){var t=Object(o.a)(n.a.mark((function t(r){var a,o,i;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,!(a=JSON.parse(localStorage.getItem("oliverpetshop_usuario")))&&!e){t.next=12;break}return o=new Headers,i=e||a.token,o.append("token",i),t.next=8,fetch("".concat(u.a,"/verify-sesion"),{method:"GET",headers:o});case 8:if(200==t.sent.status){t.next=11;break}return t.abrupt("return",r({type:s.g,payload:{data:null,logueado:!1}}));case 11:return t.abrupt("return",r({type:s.g,payload:{data:a,logueado:!0}}));case 12:return t.abrupt("return",r({type:s.g,payload:{data:null,logueado:!1}}));case 15:t.prev=15,t.t0=t.catch(0),r({type:s.a,payload:t.t0});case 18:case"end":return t.stop()}}),t,null,[[0,15]])})));return function(e){return t.apply(this,arguments)}}()},l=function(e){return function(t){t({type:s.b});try{var r=new Headers;return r.append("Content-Type","application/json"),fetch("".concat(u.a,"/register"),{method:"POST",body:JSON.stringify(e),headers:r}).then((function(e){return e.json()})).then((function(e){if(e.ok){var r={nombre:e.usuario.nombre,email:e.usuario.email,foto:e.usuario.foto,token:e.token,address:e.usuario.address,idUsuario:e.usuario.idUsuario};localStorage.setItem("oliverpetshop_usuario",JSON.stringify(r)),t({type:s.c,payload:localStorage.getItem("oliverpetshop_usuario")})}else t({type:s.a,payload:e.info})}))}catch(a){t({type:s.a,payload:a})}}},d=function(e){return function(){var t=Object(o.a)(n.a.mark((function t(r){var a;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r({type:s.b}),t.prev=1,(a=new Headers).append("Content-Type","application/json"),t.abrupt("return",fetch("".concat(u.a,"/google/tokensignin"),{method:"POST",headers:a,body:JSON.stringify({token:e})}).then((function(e){return e.json()})).then((function(e){if(!e.ok)return r({type:s.a,payload:e.info});var t={nombre:e.usuario.nombre,email:e.usuario.email,foto:e.usuario.foto,token:e.token,address:e.usuario.address,idUsuario:e.usuario.idUsuario,lat:e.usuario.lat,lon:e.usuario.lon,telefono:e.usuario.telefono};localStorage.setItem("oliverpetshop_usuario",JSON.stringify(t)),r({type:s.c,payload:localStorage.getItem("oliverpetshop_usuario")})})));case 7:t.prev=7,t.t0=t.catch(1),r({type:s.a,payload:t.t0});case 10:case"end":return t.stop()}}),t,null,[[1,7]])})));return function(e){return t.apply(this,arguments)}}()},f=function(e,t){return function(){var r=Object(o.a)(n.a.mark((function r(a){var o,i,c,p;return n.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return a({type:s.b}),r.prev=1,o=new Headers,i=JSON.parse(localStorage.getItem("oliverpetshop_usuario")).token,o.append("token",i),r.next=7,fetch("".concat(u.a,"/actualizarFotoUsuarioDesdeWeb/").concat(t),{method:"PUT",headers:o,body:e});case 7:return c=r.sent,r.next=10,c.json();case 10:(p=r.sent).ok&&(localStorage.setItem("oliverpetshop_usuario",JSON.stringify(p.user)),a({type:s.f,payload:p.user})),r.next=17;break;case 14:r.prev=14,r.t0=r.catch(1),a({type:s.a,payload:r.t0});case 17:case"end":return r.stop()}}),r,null,[[1,14]])})));return function(e){return r.apply(this,arguments)}}()},y=function(e,t){return function(){var r=Object(o.a)(n.a.mark((function r(a){var o,i,c,p;return n.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(a({type:s.b}),r.prev=1,o=new Headers,i=JSON.parse(localStorage.getItem("oliverpetshop_usuario")).token){r.next=6;break}return r.abrupt("return",a({type:s.a,payload:"Token incorrecto"}));case 6:return o.append("token",i),o.append("Content-Type","application/json"),r.next=10,fetch("".concat(u.a,"/actualizarUsuarioDesdeWeb/").concat(t),{method:"PUT",headers:o,body:JSON.stringify(e)});case 10:if(200==(c=r.sent).status){r.next=13;break}return r.abrupt("return",a({type:s.a,payload:"Ocurrio un error, \xa1intentelo m\xe1s tarde!"}));case 13:return r.next=15,c.json();case 15:if(!(p=r.sent).ok){r.next=19;break}return localStorage.setItem("oliverpetshop_usuario",JSON.stringify(p.user)),r.abrupt("return",a({type:s.f,payload:p.user}));case 19:return r.abrupt("return",a({type:s.a,payload:p.info}));case 22:r.prev=22,r.t0=r.catch(1),a({type:s.a,payload:r.t0.message});case 25:case"end":return r.stop()}}),r,null,[[1,22]])})));return function(e){return r.apply(this,arguments)}}()},b=function(e,t){return function(){var r=Object(o.a)(n.a.mark((function r(a){var o,i,c,p;return n.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(a({type:s.b}),r.prev=1,o=new Headers,i=JSON.parse(localStorage.getItem("oliverpetshop_usuario")).token){r.next=6;break}return r.abrupt("return",a({type:s.a,payload:"Token incorrecto"}));case 6:return o.append("token",i),o.append("Content-Type","application/json"),r.next=10,fetch("".concat(u.a,"/actualizarDireccion/").concat(t),{method:"PUT",headers:o,body:JSON.stringify(e)});case 10:if(200==(c=r.sent).status){r.next=13;break}return r.abrupt("return",a({type:s.a,payload:"Ocurrio un error, \xa1intentelo m\xe1s tarde!"}));case 13:return r.next=15,c.json();case 15:if(!(p=r.sent).ok){r.next=19;break}return localStorage.setItem("oliverpetshop_usuario",JSON.stringify(p.usuario)),r.abrupt("return",a({type:s.f,payload:p.usuario}));case 19:return r.abrupt("return",a({type:s.a,payload:p.info}));case 22:r.prev=22,r.t0=r.catch(1),a({type:s.a,payload:r.t0.message});case 25:case"end":return r.stop()}}),r,null,[[1,22]])})));return function(e){return r.apply(this,arguments)}}()},h=function(e){return function(){var t=Object(o.a)(n.a.mark((function t(r){var a,o,i,c;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r({type:s.b}),t.prev=1,a=new Headers,o=JSON.parse(localStorage.getItem("oliverpetshop_usuario")).token){t.next=6;break}return t.abrupt("return",r({type:s.a,payload:"Token incorrecto"}));case 6:return a.append("token",o),a.append("Content-Type","application/json"),t.next=10,fetch("".concat(u.a,"/resetPassword"),{method:"POST",headers:a,body:JSON.stringify({idUsuario:e})});case 10:if(200==(i=t.sent).status){t.next=13;break}return t.abrupt("return",r({type:s.a,payload:"Ocurrio un error, \xa1intentelo m\xe1s tarde!"}));case 13:return t.next=15,i.json();case 15:if(!(c=t.sent).ok){t.next=18;break}return t.abrupt("return",console.log(c));case 18:return t.abrupt("return",r({type:s.a,payload:c.info}));case 21:t.prev=21,t.t0=t.catch(1),r({type:s.a,payload:dataRequest.info});case 24:case"end":return t.stop()}}),t,null,[[1,21]])})));return function(e){return t.apply(this,arguments)}}()},v=function(e,t){return function(){var r=Object(o.a)(n.a.mark((function r(a){var o;return n.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(a({type:s.b}),r.prev=1,""!==e.confirmNewPassword&&""!==e.newPassword){r.next=4;break}return r.abrupt("return",a({type:s.a,payload:"Los dos campos son obligarios."}));case 4:if(e.confirmNewPassword==e.newPassword){r.next=6;break}return r.abrupt("return",a({type:s.a,payload:"Las contrase\xf1as no coinciden."}));case 6:return(o=new Headers).append("refresh-token",t),o.append("Content-Type","application/json"),r.next=11,fetch("".concat(u.a,"/new-password"),{method:"PUT",headers:o,body:JSON.stringify(e)});case 11:if(200==r.sent.status){r.next=14;break}return r.abrupt("return",a({type:s.a,payload:"Ups, algo ha salido mal..."}));case 14:return a({type:s.e}),r.abrupt("return",setTimeout((function(){window.location.assign("".concat(u.c))}),5e3));case 18:return r.prev=18,r.t0=r.catch(1),r.abrupt("return",a({type:s.a,payload:r.t0}));case 21:case"end":return r.stop()}}),r,null,[[1,18]])})));return function(e){return r.apply(this,arguments)}}()}},i5yP:function(e,t,r){"use strict";r.d(t,"g",(function(){return a})),r.d(t,"c",(function(){return n})),r.d(t,"d",(function(){return o})),r.d(t,"b",(function(){return u})),r.d(t,"a",(function(){return s})),r.d(t,"f",(function(){return i})),r.d(t,"e",(function(){return c}));var a="usuario_verificarsesion",n="usuario_login",o="usuario_logout",u="usuario_loading",s="usuario_error",i="usuario_cambiarfoto",c="usuario_cambiarpassword"},t0wy:function(e,t,r){"use strict";var a=r("q1tI"),n=r.n(a).a.createElement;t.a=function(e){var t=e.message;return n("div",{className:"alert alert-warning text-center"},t)}}}]);