_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[18],{QFKc:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/new-password/[token]",function(){return n("zRob")}])},k2JI:function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),o=n("8Kt/"),s=n.n(o),c=n("rOcY"),u=a.a.createElement;t.a=function(e){var t=e.title,n=e.metadesc;return u(s.a,null,u("title",null,t),u("meta",{name:"theme-color",content:"#df8f0e"}),u("link",{rel:"icon",href:"".concat(c.d,"/static/Perro.png")}),n?u("meta",{name:"description",content:n}):null)}},rePB:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return r}))},zRob:function(e,t,n){"use strict";n.r(t);var r=n("o0o1"),a=n.n(r),o=n("HaE+"),s=n("rePB"),c=n("MX0m"),u=n.n(c),i=n("k2JI"),l=n("q1tI"),f=n.n(l),p=n("t0wy"),m=n("/MKj"),d=n("HdXA"),w=n("XOuL"),b=f.a.createElement;function v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function j(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?v(Object(n),!0).forEach((function(t){Object(s.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var O=function(e){Object(l.useEffect)((function(){e.verificarSesion(e.token)}),[]);var t=Object(l.useState)({newPassword:"",confirmNewPassword:""}),n=t[0],r=t[1],a=function(e){return r(j(j({},n),{},Object(s.a)({},e.target.name,e.target.value)))},o=e.usuarioReducer,c=o.loading,m=o.error,d=o.logueado,v=o.actionSuccess;return b(f.a.Fragment,null,b(i.a,{title:"Oliver Petshop - Nueva contrase\xf1a"}),b("section",{className:"mt-2 container"},d?b(f.a.Fragment,null,m?b(p.a,{message:m}):null,v?b("div",{className:"alert alert-info text-center"},v):null,b("form",{onSubmit:function(t){t.preventDefault(),e.updatePassword(n,e.token)},className:"jsx-4269807520 form-group mt-3"},b("div",{className:"jsx-4269807520 col-12 mb-3"},b("label",{htmlFor:"pw",className:"jsx-4269807520"},"Nueva Contrase\xf1a"),b("input",{onChange:a,value:n.newPassword,type:"password",placeholder:"Ingrese su nueva contrase\xf1a",name:"newPassword",id:"newPassword",required:!0,className:"jsx-4269807520 form-control"})),b("div",{className:"jsx-4269807520 col-12 mb-3"},b("label",{htmlFor:"pw-repeat",className:"jsx-4269807520"},"Repita la nueva contrase\xf1a"),b("input",{onChange:a,value:n.confirmNewPassword,type:"password",placeholder:"Repita su nueva contrase\xf1a",name:"confirmNewPassword",id:"confirmNewPassword",required:!0,className:"jsx-4269807520 form-control"})),b("div",{className:"jsx-4269807520 col-12 text-center"},c?b(w.a,null):b("input",{type:"submit",value:"Enviar",className:"jsx-4269807520 boton bg-yellow"})),b(u.a,{id:"4269807520"},["form.jsx-4269807520{font-family:'Quicksand',sans-serif!important;}"]))):b(p.a,{message:"Ups.. algo ha ido mal."})))};O.getInitialProps=function(){var e=Object(o.a)(a.a.mark((function e(t){var n,r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.query,r=n.token,e.abrupt("return",{token:r});case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();t.default=Object(m.b)((function(e){return{usuarioReducer:e.usuarioReducer}}),d)(O)}},[["QFKc",1,2,0,3,7]]]);