import{c as h,r,j as e,L as d}from"./index-112c2ac5.js";import{M as u}from"./Map-5e0feb98.js";import{S as b}from"./ScrollTop-9612ab8b.js";function f({users:l,dinWords:i}){const s=i.login;console.log(l);const[g,o]=r.useState(!1),[t,c]=r.useState({login:"",pass:""}),p=a=>{c(n=>({...n,login:a.target.value}))},m=a=>{c(n=>({...n,pass:a.target.value}))},x=a=>{a.preventDefault(),t.login==""||t.pass==""?o(!0):o(!1)};return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"container",children:[e.jsx("h2",{className:"login_title",children:s.title}),e.jsxs("form",{className:"login_form",children:[e.jsx("p",{className:g?"":"dnone",children:s.allInput}),e.jsx("input",{value:t.login,onChange:p,type:"text",placeholder:s.emailPlace}),e.jsxs("label",{className:"pass_label",children:[e.jsx("input",{type:"text",value:t.pass,onChange:m,placeholder:s.passPlace}),e.jsx("img",{src:"./icons/pass.svg",alt:""})]}),e.jsxs("div",{className:"forgot_save",children:[e.jsx("h4",{children:s.forgot}),e.jsxs("label",{className:"save_label",children:[e.jsx("input",{type:"checkbox"}),s.remember]})]}),e.jsx(d,{className:"reg_btn",to:"/registration",children:s.regBtn}),e.jsx("button",{onClick:x,className:"login_btn",children:s.logBtn}),e.jsx("img",{src:"./data/homeImages/left_top.png",alt:"",className:"login_bg"})]})]}),e.jsx(u,{}),e.jsx(b,{})]})}const v=l=>l,w=h(v)(f);export{w as default};
