import{c as o,j as s,L as e}from"./index-79e6459d.js";import{M as d}from"./Map-df783fa1.js";import{P as n}from"./Product-910ab705.js";import{S as h}from"./ScrollTop-24bd282c.js";function x({products:r,dinWords:i,language:l}){let c=[...r.filter(t=>t.category_id==2).slice(4,6),...r.filter(t=>t.category_id==6).slice(4,6)];const a=i[l].about;return s.jsxs(s.Fragment,{children:[s.jsx("img",{src:"./data/bg/bg_right.png",className:"bg_right",alt:""}),s.jsxs("div",{className:"container",children:[s.jsx("h2",{className:"about_title",children:a.aboutTitle}),s.jsxs("div",{className:"about",children:[s.jsxs("div",{className:"about_left",children:[s.jsxs("div",{className:"about_left_text",children:[s.jsx("h2",{children:a.xaribulbul}),s.jsx("p",{children:a.predOrder}),s.jsx("p",{children:a.help}),s.jsx("p",{children:a.care})]}),s.jsx("img",{src:"./data/about/about2.png",className:"about_left_img",alt:""})]}),s.jsxs("div",{className:"about_right",children:[s.jsx("img",{src:"./data/about/about1.png",className:"about_right_img",alt:""}),s.jsxs("div",{className:"about_right_text",children:[s.jsx("p",{children:a.doWork}),s.jsx("p",{children:a.team}),s.jsx("p",{children:a.ourCatalog}),s.jsx("p",{children:a.thank}),s.jsx("h4",{children:a.goodOrder}),s.jsx(e,{to:"/catalog",children:a.catalog})]})]})]})]}),s.jsxs("div",{className:"products_hero container",children:[s.jsxs("div",{className:"prod_title",children:[s.jsx("div",{className:"prod_title_left",children:s.jsx("h2",{children:a.withFlower})}),s.jsxs(e,{to:"/catalog",children:[a.toCatalog," ",s.jsx("img",{src:"./icons/arrow_right.svg",alt:""})]})]}),s.jsx("div",{className:"products",children:c.map(t=>s.jsx(n,{data:t},t.id))}),s.jsxs(e,{to:"/catalog",children:[a.toCatalog," ",s.jsx("img",{src:"./icons/arrow_right.svg",alt:""})]})]}),s.jsx(d,{}),s.jsx(h,{})]})}const j=r=>r,b=o(j)(x);export{b as default};