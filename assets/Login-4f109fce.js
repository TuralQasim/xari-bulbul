import{c as h,r,j as s,L as d}from"./index-3a8bd4be.js";import{M as u}from"./Map-2fb56c12.js";import{S as b}from"./ScrollTop-5bc3dcd5.js";function f({users:l,dinWords:i}){const e=i.login;console.log(l);const[g,o]=r.useState(!1),[t,c]=r.useState({login:"",pass:""}),p=a=>{c(n=>({...n,login:a.target.value}))},m=a=>{c(n=>({...n,pass:a.target.value}))},x=a=>{a.preventDefault(),t.login==""||t.pass==""?o(!0):o(!1)};return s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"container",children:[s.jsx("h2",{className:"login_title",children:e.title}),s.jsxs("form",{className:"login_form",children:[s.jsx("p",{className:g?"":"dnone",children:e.allInput}),s.jsx("input",{value:t.login,onChange:p,type:"text",placeholder:e.emailPlace}),s.jsxs("label",{className:"pass_label",children:[s.jsx("input",{type:"text",value:t.pass,onChange:m,placeholder:e.passPlace}),s.jsx("img",{src:"../src/icons/pass.svg",alt:""})]}),s.jsxs("div",{className:"forgot_save",children:[s.jsx("h4",{children:e.forgot}),s.jsxs("label",{className:"save_label",children:[s.jsx("input",{type:"checkbox"}),e.remember]})]}),s.jsx(d,{className:"reg_btn",to:"/registration",children:e.regBtn}),s.jsx("button",{onClick:x,className:"login_btn",children:e.logBtn}),s.jsx("img",{src:"../src/data/homeImages/left_top.png",alt:"",className:"login_bg"})]})]}),s.jsx(u,{}),s.jsx(b,{})]})}const v=l=>l,w=h(v)(f);export{w as default};
