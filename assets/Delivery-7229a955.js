import{c as d,j as e,L as r}from"./index-8d88839b.js";import{M as t}from"./Map-2b72f346.js";import{H as n}from"./HowWork-7a470490.js";import{P as h}from"./Product-26638eda.js";import{S as o}from"./ScrollTop-d4b504fe.js";function m({products:l,dinWords:a}){let c=[...l.filter(i=>i.category_id==2).slice(4,6),...l.filter(i=>i.category_id==6).slice(4,6)];const s=a.delivery;return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"container",children:[e.jsx("h2",{className:"delivery_title",children:s.title}),e.jsx("p",{className:"deliveri_phag",children:s.time}),e.jsx("p",{className:"deliveri_phag",children:s.after})]}),e.jsxs("div",{className:"delivery_bg",children:[e.jsxs("div",{className:"delivery_items container",children:[e.jsx("h3",{className:"delivery_item",children:s.baku}),e.jsx("h3",{className:"delivery_item",children:s.price}),e.jsx("h3",{className:"delivery_item",children:s.fromPrice}),e.jsx("h3",{className:"delivery_item",children:s.holiday})]}),e.jsx("img",{className:"delivery_img1",src:"./xari-bulbul/data/homeImages/left_top.png",alt:""}),e.jsx("img",{className:"delivery_img2",src:"./xari-bulbul/data/homeImages/right_down.png",alt:""})]}),e.jsxs("div",{className:"container",children:[e.jsx("p",{className:"deliveri_phag",children:s.azerbaijan}),e.jsxs("div",{className:"delivery_sect",children:[e.jsxs("div",{className:"delivery_sect_text",children:[e.jsxs("h2",{children:[s.rayon," "]}),e.jsx("p",{children:s.outBaku}),e.jsxs("ul",{children:[e.jsx("li",{children:s.toPay}),e.jsx("li",{children:s.if}),e.jsx("li",{children:s.night}),e.jsx("li",{children:s.else})]})]}),e.jsx("img",{className:"delivery_sect_img",src:"./xari-bulbul/data/delivery/delivery_img.png",alt:""}),e.jsxs("ul",{children:[e.jsx("li",{children:s.toPay}),e.jsx("li",{children:s.if}),e.jsx("li",{children:s.night}),e.jsx("li",{children:s.else})]})]})]}),e.jsxs("div",{className:"products_hero container",children:[e.jsxs("div",{className:"prod_title",children:[e.jsx("div",{className:"prod_title_left",children:e.jsx("h2",{children:s.withFlowers})}),e.jsxs(r,{to:"/catalog",children:[s.catalog," ",e.jsx("img",{src:"./xari-bulbul/icons/arrow_right.svg",alt:""})]})]}),e.jsx("div",{className:"products",children:c.map(i=>e.jsx(h,{data:i},i.id))}),e.jsxs(r,{to:"/catalog",children:[s.catalog," ",e.jsx("img",{src:"./xari-bulbul/icons/arrow_right.svg",alt:""})]})]}),e.jsx(n,{}),e.jsx(t,{}),e.jsx(o,{})]})}const x=l=>l,y=d(x)(m);export{y as default};