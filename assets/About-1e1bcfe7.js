import{c,j as s,L as e}from"./index-31cc87b5.js";import{M as o}from"./Map-a3ed4373.js";import{P as d}from"./Product-6fb25f74.js";import{S as n}from"./ScrollTop-92c6c348.js";function h({products:r,dinWords:i}){let l=[...r.filter(t=>t.category_id==2).slice(4,6),...r.filter(t=>t.category_id==6).slice(4,6)];const a=i.about;return s.jsxs(s.Fragment,{children:[s.jsx("img",{src:"/data/bg/bg_right.png",className:"bg_right",alt:""}),s.jsxs("div",{className:"container",children:[s.jsx("h2",{className:"about_title",children:a.aboutTitle}),s.jsxs("div",{className:"about",children:[s.jsxs("div",{className:"about_left",children:[s.jsxs("div",{className:"about_left_text",children:[s.jsx("h2",{children:a.xaribulbul}),s.jsx("p",{children:a.predOrder}),s.jsx("p",{children:a.help}),s.jsx("p",{children:a.care})]}),s.jsx("img",{src:"/data/about/about2.png",className:"about_left_img",alt:""})]}),s.jsxs("div",{className:"about_right",children:[s.jsx("img",{src:"/data/about/about1.png",className:"about_right_img",alt:""}),s.jsxs("div",{className:"about_right_text",children:[s.jsx("p",{children:a.doWork}),s.jsx("p",{children:a.team}),s.jsx("p",{children:a.ourCatalog}),s.jsx("p",{children:a.thank}),s.jsx("h4",{children:a.goodOrder}),s.jsx(e,{to:"/catalog",children:a.catalog})]})]})]})]}),s.jsxs("div",{className:"products_hero container",children:[s.jsxs("div",{className:"prod_title",children:[s.jsx("div",{className:"prod_title_left",children:s.jsx("h2",{children:a.withFlower})}),s.jsxs(e,{to:"/catalog",children:[a.toCatalog," ",s.jsx("img",{src:"/icons/arrow_right.svg",alt:""})]})]}),s.jsx("div",{className:"products",children:l.map(t=>s.jsx(d,{data:t},t.id))}),s.jsxs(e,{to:"/catalog",children:[a.toCatalog," ",s.jsx("img",{src:"/icons/arrow_right.svg",alt:""})]})]}),s.jsx(o,{}),s.jsx(n,{})]})}const x=r=>r,p=c(x)(h);export{p as default};
