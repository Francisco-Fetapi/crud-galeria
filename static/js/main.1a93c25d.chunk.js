(this.webpackJsonpReact_App=this.webpackJsonpReact_App||[]).push([[0],{111:function(e,t,a){},136:function(e,t,a){"use strict";a.r(t);var r=a(7),n=a(0),c=a(12),o=a.n(c),s=a(15),i=a.n(s),l=a(18),u=a(24),j=a(28),b=(a(111),a(194)),d=a(193),p=a(203),f=a(196),x=a(197),h=a(198),O=a(199),m=a(137),g=a(200),v=a(195),y=a(204),w=a(192),k=a(89),_=a.n(k),C=a(181),S=a(190),T=a(184),D=a(185),F=a(186),z=a(187),A=a(205),I=a(86),N=a.n(I),E=a(87),L=a.n(E),G=a(88),M=a.n(G);var P=function(e){var t=e.fotos,a=e.url_base,n=e.apagar_foto,c=e.abrirModal;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(C.a,{spacing:2,container:!0,className:"fotos",children:t.map((function(e,o){return Object(r.jsx)(C.a,{item:!0,xs:12,sm:6,md:4,children:Object(r.jsxs)(T.a,{className:"card ".concat(o===t.length-1?"ultimaFoto":""),children:[Object(r.jsx)(D.a,{image:"".concat(a,"/Img/").concat(e.nome),className:"cardFoto"}),Object(r.jsx)(F.a,{children:Object(r.jsxs)(m.a,{varaint:"h6",color:"textSecondary",children:[e.legenda.substring(0,30),e.legenda.length>30?"...":""]})}),Object(r.jsxs)(z.a,{style:{justifyContent:"flex-end"},children:[Object(r.jsx)(A.a,{arrow:!0,title:"Apagar foto",children:Object(r.jsx)(S.a,{onClick:function(){return n(e.id)},children:Object(r.jsx)(N.a,{})})}),Object(r.jsx)(A.a,{arrow:!0,title:"Editar legenda da foto",children:Object(r.jsx)(S.a,{onClick:function(){return c(e.id,e.legenda)},children:Object(r.jsx)(L.a,{})})}),Object(r.jsx)(A.a,{arrow:!0,title:"Ver esta foto",children:Object(r.jsx)(S.a,{component:"a",target:"__blank",href:"".concat(a,"/Img/").concat(e.nome),children:Object(r.jsx)(M.a,{})})})]})]})},e.legenda)}))}),0===t.length&&Object(r.jsx)(p.a,{marginTop:2,children:Object(r.jsx)(m.a,{align:"center",variant:"h6",color:"textSecondary",children:"Seja o primeiro a enviar uma foto!"})})]})};var R=function(){return Object(r.jsx)(p.a,{className:"footer",display:"flex",justifyContent:"center",children:Object(r.jsx)(m.a,{variant:"subtitle1",children:"Francisco Fetapi - Todos os direitos reservados"})})},q="".concat("http://localhost","/galeria"),B="".concat(q,"/Controllers/");function H(e){return J.apply(this,arguments)}function J(){return(J=Object(u.a)(i.a.mark((function e(t){var a,r,n,c,o=arguments;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(n in a=o.length>1&&void 0!==o[1]?o[1]:"POST",r=new FormData,t)r.append(n,t[n]);return e.next=5,fetch(B,{method:a,body:r});case 5:return c=e.sent,e.next=8,c.json();case 8:return c=e.sent,e.abrupt("return",c);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var U={API_URL:q,obter_fotos:function(){return Object(u.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,H({controller:"Galeria",funcao:"obter_fotos"});case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})))()},cadastrar_foto:function(e,t,a,r){return Object(u.a)(i.a.mark((function n(){var c;return i.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,H({controller:"Galeria",funcao:"cadastrar_foto",legenda:e,nome:t,data:a,ficheiro:r});case 2:return c=n.sent,n.abrupt("return",c);case 4:case"end":return n.stop()}}),n)})))()},apagar_foto:function(e){return Object(u.a)(i.a.mark((function t(){var a;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,H({controller:"Galeria",funcao:"apagar_foto",id_foto:e});case 2:return a=t.sent,t.abrupt("return",a);case 4:case"end":return t.stop()}}),t)})))()},alterar_legenda:function(e,t){return Object(u.a)(i.a.mark((function a(){var r;return i.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,H({controller:"Galeria",funcao:"alterar_legenda",id_foto:e,legenda:t});case 2:return r=a.sent,a.abrupt("return",r);case 4:case"end":return a.stop()}}),a)})))()}},V=a(138),W=a(191);var Y=function(e){var t=e.aberto;return Object(r.jsx)(V.a,{open:t,style:{zIndex:9},className:"backdrop",children:Object(r.jsxs)(p.a,{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",children:[Object(r.jsx)(p.a,{children:Object(r.jsx)(W.a,{})}),Object(r.jsx)(p.a,{marginTop:2,children:Object(r.jsx)(m.a,{color:"textSecondary",variant:"subtitle2",children:"Aguarde um pouco..."})})]})})},K=a(202);var Q=function(){var e=Object(n.useState)([]),t=Object(j.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)(!0),s=Object(j.a)(o,2),k=s[0],C=s[1],S=Object(n.useState)(!1),T=Object(j.a)(S,2),D=T[0],F=T[1],z=Object(n.useState)({text:"",error:!1,helperText:""}),A=Object(j.a)(z,2),I=A[0],N=A[1],E=Object(n.useState)(!0),L=Object(j.a)(E,2),G=L[0],M=L[1],q=Object(n.useState)({legenda:"",id:null}),B=Object(j.a)(q,2),H=B[0],J=B[1],V=Object(n.useState)(!1),W=Object(j.a)(V,2),Q=W[0],X=W[1],Z=Object(n.useState)({tipo:"success",aberto:!1,conteudo:""}),$=Object(j.a)(Z,2),ee=$[0],te=$[1],ae=Object(n.useRef)();function re(){return ne.apply(this,arguments)}function ne(){return(ne=Object(u.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,U.obter_fotos();case 2:t=e.sent,c(t.dados),k&&C(!1),be();case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ce(){return(ce=Object(u.a)(i.a.mark((function e(t){var a,r,n,c,o,s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=ae.current.files[0],t.target.setAttribute("disabled","disabled"),a&&!(!I.text.length>0)){e.next=5;break}return N(Object(l.a)(Object(l.a)({},I),{},{helperText:"Legenda e/ou Ficheiro invalidos!",error:!0})),e.abrupt("return",!1);case 5:if(a.type.includes("image")){e.next=8;break}return N(Object(l.a)(Object(l.a)({},I),{},{helperText:"Este arquivo n\xe3o \xe9 uma imagem!",error:!0})),e.abrupt("return",!1);case 8:if(!(a.size/1024>1024)){e.next=13;break}return r=a.size/Math.pow(1024,2),n="".concat(r.toFixed(2)," MB"),N(Object(l.a)(Object(l.a)({},I),{},{helperText:"Este arquivo tem ".concat(n," e por isso \xe9 pesado demais!"),error:!0})),e.abrupt("return",!1);case 13:return je(),c=new Date,o="".concat(c.getFullYear(),"/").concat(c.getMonth()+1,"/").concat(c.getDate()),e.next=18,U.cadastrar_foto(I.text,a.name,o,a);case 18:oe(s=e.sent),s.status&&(re(),N(Object(l.a)(Object(l.a)({},I),{},{text:""})),ae.current.value="");case 21:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function oe(e){var t="success";e.status||(t="error"),function(e,t,a){te({tipo:t,conteudo:e,aberto:!0})}(e.msg,t)}function se(){return(se=Object(u.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return je(),e.next=3,U.apagar_foto(t);case 3:oe(e.sent),re();case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ie(){te(Object(l.a)(Object(l.a)({},ee),{},{aberto:!1,conteudo:""}))}function le(){X(!1)}function ue(){return(ue=Object(u.a)(i.a.mark((function e(){var t,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return je(),t=H.id,a=H.legenda,e.next=4,U.alterar_legenda(t,a);case 4:oe(e.sent),re(),le();case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function je(){F(!0)}function be(){F(!1)}Object(n.useEffect)((function(){re()}),[]);var de=_()({palette:{type:G?"dark":"light",primary:{main:G?"#4561fb":"#3f51b5"}}});return Object(r.jsxs)(w.a,{theme:de,children:[D&&Object(r.jsx)(p.a,{position:"fixed",width:"100%",children:Object(r.jsx)(d.a,{})}),Object(r.jsxs)(p.a,{className:"App ".concat(G?"dark":""),display:"flex",flexDirection:"column",minHeight:"100vh",justifyContent:"center",children:[Object(r.jsx)(b.a,{}),Object(r.jsxs)(p.a,{className:"form ".concat(I.error?"erro":""),marginBottom:"30px",children:[Object(r.jsx)(p.a,{display:"flex",justifyContent:"center",children:Object(r.jsx)(m.a,{className:"titulo_main",variant:"h6",children:"Compartilhe alguma foto"})}),Object(r.jsxs)(p.a,{className:"campos",onDoubleClick:function(){M(!G)},display:"flex",flexDirection:"column",children:[Object(r.jsx)("input",{type:"file",ref:ae}),Object(r.jsx)("br",{}),Object(r.jsx)(g.a,{helperText:I.helperText,error:I.error,value:I.text,onChange:function(e){var t,a;I.error&&I.text&&(t=!1,a=""),N(Object(l.a)(Object(l.a)({},I),{},{helperText:a,error:t,text:e.target.value}))},size:"small",InputLabelProps:{shrink:!0},label:"Digite alguma legenda"}),Object(r.jsx)("br",{}),Object(r.jsx)(p.a,{display:"flex",justifyContent:"center",children:Object(r.jsx)(v.a,{variant:"contained",disabled:D,color:"primary",onClick:function(e){return ce.apply(this,arguments)},children:"Enviar Foto"})})]}),Object(r.jsx)(p.a,{marginTop:2,children:Object(r.jsxs)(m.a,{align:"center",style:{fontSize:13},color:"textSecondary",children:[Object(r.jsx)("b",{children:"2 cliques"})," consecutivos no quadro acima ",Object(r.jsx)("b",{children:"altera o tema da aplica\xe7\xe3o!"})]})})]}),Object(r.jsx)(P,{fotos:a,abrirModal:function(e,t){X(!0),J({legenda:t,id:e})},apagar_foto:function(e){return se.apply(this,arguments)},url_base:U.API_URL})]}),Object(r.jsx)(R,{}),Object(r.jsx)(y.a,{autoHideDuration:1500,anchorOrigin:{vertical:"bottom",horizontal:"left"},open:ee.aberto,onClose:ie,children:Object(r.jsx)(K.a,{severity:ee.tipo,onClose:ie,children:ee.conteudo})}),Object(r.jsxs)(f.a,{fullWidth:!0,open:Q,onClose:le,children:[Object(r.jsx)(x.a,{children:"Alterar Legenda"}),Object(r.jsx)(h.a,{children:Object(r.jsx)(g.a,{fullWidth:!0,helperText:H.helperText,error:H.error,value:H.legenda,onChange:function(e){J(Object(l.a)(Object(l.a)({},H),{},{legenda:e.target.value}))},size:"small",InputLabelProps:{shrink:!0},label:"Digite alguma legenda"})}),Object(r.jsxs)(O.a,{children:[Object(r.jsx)(v.a,{size:"small",color:"primary",variant:"text",onClick:function(){return ue.apply(this,arguments)},children:"Guardar"}),Object(r.jsx)(v.a,{size:"small",color:"primary",variant:"text",onClick:le,children:"Voltar"})]})]}),Object(r.jsx)(Y,{aberto:k})]})};o.a.render(Object(r.jsx)(Q,{}),document.getElementById("root"))}},[[136,1,2]]]);
//# sourceMappingURL=main.1a93c25d.chunk.js.map