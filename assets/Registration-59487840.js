import{c as b,r as o,j as e}from"./index-8d88839b.js";import{M as d}from"./Map-2b72f346.js";import{S as f}from"./ScrollTop-d4b504fe.js";function v({dinWords:c}){const t=c.registration,[m,i]=o.useState(!1),[s,l]=o.useState({nickname:"",pass1:"",pass2:"",name:"",mail:""}),p=a=>{l(n=>({...n,nickname:a.target.value}))},u=a=>{l(n=>({...n,pass1:a.target.value}))},g=a=>{l(n=>({...n,pass2:a.target.value}))},j=a=>{l(n=>({...n,name:a.target.value}))},x=a=>{l(n=>({...n,mail:a.target.value}))},h=a=>{a.preventDefault(),s.nickname==""||s.pass1==""||s.pass2==""||s.name==""||s.mail==""?i(!0):(i(!1),l({nickname:"",pass1:"",pass2:"",name:"",mail:""}))};return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"container",children:[e.jsx("h2",{className:"reg_title",children:t.title}),e.jsxs("form",{className:"reg_form",children:[e.jsx("p",{className:m?"":"dnone",children:t.allInput}),e.jsx("input",{type:"text",value:s.nickname,onChange:p,placeholder:t.namePlace}),e.jsxs("label",{children:[e.jsx("input",{type:"text",value:s.pass1,onChange:u,placeholder:t.passPlace1}),e.jsx("img",{src:"./xari-bulbul/icons/pass.svg",alt:""})]}),e.jsxs("label",{children:[e.jsx("input",{type:"text",value:s.pass2,onChange:g,placeholder:t.passPlace2}),e.jsx("img",{src:"./xari-bulbul/icons/pass.svg",alt:""})]}),e.jsx("input",{type:"text",value:s.name,onChange:j,placeholder:t.fullname}),e.jsx("input",{type:"email",value:s.mail,onChange:x,placeholder:t.mailPlace}),e.jsx("div",{className:"registration_btn",onClick:h,children:t.reg}),e.jsx("img",{src:"./xari-bulbul/data/homeImages/left_top.png",alt:"",className:"login_bg"})]})]}),e.jsx(d,{}),e.jsx(f,{})]})}const w=c=>c,C=b(w)(v);export{C as default};
