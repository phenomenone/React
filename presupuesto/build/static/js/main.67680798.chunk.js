(this.webpackJsonppresupuesto=this.webpackJsonppresupuesto||[]).push([[0],{14:function(e,t,a){},24:function(e,t,a){"use strict";a.r(t);var s=a(1),c=a.n(s),r=a(7),n=a.n(r),u=(a(14),a(9)),j=a(2),l=a(0),i=function(e){var t=e.mensaje;return Object(l.jsx)("p",{className:"alert alert-danger error",children:t})},o=function(e){var t=e.guardarPresupuesto,a=e.guardarRestante,c=e.actualizarPregunta,r=Object(s.useState)(0),n=Object(j.a)(r,2),u=n[0],o=n[1],b=Object(s.useState)(!1),d=Object(j.a)(b,2),O=d[0],p=d[1];return Object(l.jsxs)(s.Fragment,{children:[Object(l.jsx)("h2",{children:"Coloca tu Presupuesto"}),O?Object(l.jsx)(i,{mensaje:"El presupuesto es Incorrecto"}):null,Object(l.jsxs)("form",{onSubmit:function(e){e.preventDefault(),u<1||isNaN(u)?p(!0):(p(!1),t(u),a(u),c(!1))},children:[Object(l.jsx)("input",{type:"number",className:"u-full-width",placeholder:"Coloca tu Presupuesto",onChange:function(e){o(parseInt(e.target.value,10))}}),Object(l.jsx)("input",{type:"submit",className:"button-primary u-full-width",value:"Definir Presuppuesto"})]})]})},b=a(8),d=a.n(b),O=function(e){var t=e.guardarGasto,a=e.guardarCrearGasto,c=Object(s.useState)(""),r=Object(j.a)(c,2),n=r[0],u=r[1],o=Object(s.useState)(0),b=Object(j.a)(o,2),O=b[0],p=b[1],h=Object(s.useState)(!1),m=Object(j.a)(h,2),g=m[0],x=m[1];return Object(l.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),O<1||isNaN(O)||""===n.trim())x(!0);else{x(!1);var s={nombre:n,cantidad:O,id:d.a.generate()};console.log(s),t(s),a(!0),u(""),p(0)}},children:[Object(l.jsx)("h2",{children:"Agrega tus gastos aqu\xed"}),g?Object(l.jsx)(i,{mensaje:"Ambos campos son obligatorios o presupuesto incorrecto"}):null,Object(l.jsxs)("div",{className:"campo",children:[Object(l.jsx)("label",{children:"Nombre Gasto"}),Object(l.jsx)("input",{type:"text",className:"u-full-width",placeholder:"Ej. Transporte",value:n,onChange:function(e){return u(e.target.value)}})]}),Object(l.jsxs)("div",{className:"campo",children:[Object(l.jsx)("label",{children:"Cantidad Gasto"}),Object(l.jsx)("input",{type:"number",className:"u-full-width",placeholder:"Ej. 300",value:O,onChange:function(e){return p(parseInt(e.target.value,10))}})]}),Object(l.jsx)("input",{type:"submit",className:"button u-full-width",value:"Agregar Gasto"})]})},p=function(e){var t=e.gasto;return Object(l.jsx)("li",{className:"gastos",children:Object(l.jsxs)("p",{children:[t.nombre,Object(l.jsxs)("span",{className:"gasto",children:["$ ",t.cantidad," "]})]})})},h=function(e){var t=e.gastos;return Object(l.jsxs)("div",{className:"gastos-realizados",children:[Object(l.jsx)("h2",{children:"Listado"}),t.map((function(e){return Object(l.jsx)(p,{gasto:e},e.id)}))]})},m=function(e,t){return e/4>t?"alert alert-danger":e/2>t?"alert alert-warning":"alert alert-success"},g=function(e){var t=e.presupuesto,a=e.restante;return Object(l.jsxs)(s.Fragment,{children:[Object(l.jsxs)("div",{className:"alert alert-primary",children:["Presupuesto: $ ",t]}),Object(l.jsxs)("div",{className:m(t,a),children:["Restante: $ ",a]})]})};var x=function(){var e=Object(s.useState)(0),t=Object(j.a)(e,2),a=t[0],c=t[1],r=Object(s.useState)(0),n=Object(j.a)(r,2),i=n[0],b=n[1],d=Object(s.useState)(!0),p=Object(j.a)(d,2),m=p[0],x=p[1],f=Object(s.useState)([]),v=Object(j.a)(f,2),N=v[0],S=v[1],C=Object(s.useState)({}),P=Object(j.a)(C,2),w=P[0],y=P[1],G=Object(s.useState)(!1),F=Object(j.a)(G,2),E=F[0],I=F[1];return Object(s.useEffect)((function(){if(E){S([].concat(Object(u.a)(N),[w]));var e=i-w.cantidad;b(e),I(!1)}}),[w,E,N,i]),Object(l.jsx)("div",{className:"container",children:Object(l.jsxs)("header",{children:[Object(l.jsx)("h1",{children:"Gasto Semanal"}),Object(l.jsx)("div",{className:"contenido-principal contenido",children:m?Object(l.jsx)(o,{guardarPresupuesto:c,guardarRestante:b,actualizarPregunta:x}):Object(l.jsxs)("div",{className:"row",children:[Object(l.jsx)("div",{className:"one-half column",children:Object(l.jsx)(O,{guardarGasto:y,guardarCrearGasto:I})}),Object(l.jsxs)("div",{className:"one-half column",children:[Object(l.jsx)(h,{gastos:N}),Object(l.jsx)(g,{presupuesto:a,restante:i})]})]})})]})})},f=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,25)).then((function(t){var a=t.getCLS,s=t.getFID,c=t.getFCP,r=t.getLCP,n=t.getTTFB;a(e),s(e),c(e),r(e),n(e)}))};n.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(x,{})}),document.getElementById("root")),f()}},[[24,1,2]]]);
//# sourceMappingURL=main.67680798.chunk.js.map