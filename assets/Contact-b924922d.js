import{c as N,r,j as e,L as l,A as C,m as O,d as y}from"./index-a60306be.js";import{M as S}from"./Map-971ffd35.js";import{S as E}from"./ScrollTop-9c03a9a9.js";function L({dispatch:o,dinWords:m,language:p}){const s=m[p].contact,[t,c]=r.useState({name:"",email:"",text:"",checked:!1}),[d,h]=r.useState(!1);function u(){var n=window.pageYOffset||document.documentElement.scrollTop,a=window.pageXOffset||document.documentElement.scrollLeft;window.onscroll=function(){window.scrollTo(a,n)}}function g(){window.onscroll=null}d?u():g();const[f,x]=r.useState(!1),v=n=>{c(a=>({...a,name:n.target.value}))},w=n=>{c(a=>({...a,email:n.target.value}))},b=n=>{c(a=>({...a,text:n.target.value}))},k=n=>{n.target.checked?c(a=>({...a,checked:!0})):c(a=>({...a,checked:!1}))},_=()=>{t.name==""||t.email==""||t.text==""||t.checked==!1?x(!0):(x(!1),o({type:"RECALL_INFO",payload:t}),h(!0),c({name:"",email:"",text:"",checked:!1}))},j=()=>{h(!1)};return e.jsxs(e.Fragment,{children:[e.jsx("img",{src:"./data/bg/bg_right.png",className:"bg_right",alt:""}),e.jsxs("div",{className:"container",children:[e.jsx("h2",{className:"contact_title",children:s.title}),e.jsxs("div",{className:"contact_shop",children:[e.jsx("div",{className:"contact_shop_left",children:e.jsx("h2",{children:s.shop})}),e.jsxs("div",{className:"contact_shop_right",children:[e.jsxs("div",{className:"contact_phones",children:[e.jsx("h4",{children:s.phone}),e.jsxs("ul",{className:"phones",children:[e.jsxs("li",{children:[e.jsx("img",{src:"./icons/phone.svg",alt:""}),e.jsx(l,{to:"tel:80297177888",children:"051-683-00-63"})]}),e.jsxs("li",{children:[e.jsx("img",{src:"./icons/phone.svg",alt:""}),e.jsx(l,{to:"tel:80297177888",children:"051-683-00-63"})]}),e.jsxs("li",{children:[e.jsx("img",{src:"./icons/phone.svg",alt:""}),e.jsx(l,{to:"tel:80447833777",children:"051-683-00-63"})]})]})]}),e.jsxs("div",{className:"skype",children:[e.jsx("h4",{children:"Skype"}),e.jsx(l,{to:"/",children:"xaribulbul"})]}),e.jsx("p",{children:s.can}),e.jsx("p",{children:"Zerife Eliyeva 23, Baku, Azerbaijan"}),e.jsx(S,{})]})]}),e.jsxs("div",{className:"contact_form",children:[e.jsxs("div",{className:"contact_form_left",children:[e.jsx("h2",{children:s.questions}),e.jsx("h2",{children:s.write})]}),e.jsxs("form",{className:"contact_form_right",children:[e.jsx("input",{placeholder:"Введите ваше имя",type:"text",name:t.name,value:t.name,onChange:v}),e.jsx("input",{placeholder:"Введите вашу электронную почту",type:"email",name:t.email,onChange:w,value:t.email}),e.jsx("textarea",{placeholder:"Введите ваше сообщение",name:t.text,onChange:b,value:t.text}),e.jsxs("label",{children:[e.jsx("input",{type:"checkbox",onChange:k}),e.jsxs("h4",{children:[s.agree," ",e.jsx(l,{children:s.check})]})]}),e.jsx("button",{type:"button",onClick:_,children:s.send}),e.jsx("h4",{className:f?"warn":"dnone",children:s.allInput})]})]}),e.jsxs("div",{className:"rekvizit",children:[e.jsx("div",{className:"rekvizit_left",children:e.jsx("h2",{children:s.rekvizit})}),e.jsxs("div",{className:"rekvizit_right",children:[e.jsx("p",{children:s.ooo}),e.jsx("p",{children:s.unp}),e.jsx("p",{children:s.address}),e.jsx("p",{children:s.adress2})]})]})]}),d&&e.jsx("div",{className:"contact_modal_bg",onClick:j,children:e.jsx(C,{children:e.jsxs(O.div,{initial:{scale:.7,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.7,opacity:0},className:"contact_modal",onClick:n=>n.stopPropagation(),children:[e.jsx("img",{src:"./data/homeImages/left_top.png",alt:""}),e.jsx("h2",{children:s.thank}),e.jsx(y,{onClick:j})]})})}),e.jsx(E,{})]})}const z=o=>o,T=N(z)(L);export{T as default};
