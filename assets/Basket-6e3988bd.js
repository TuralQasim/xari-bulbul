import{f as m,c as a,j as s,L as x}from"./index-a60306be.js";import{M as j}from"./Map-971ffd35.js";import{S as u}from"./ScrollTop-9c03a9a9.js";function p(e){return m({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"}}]})(e)}function N({data:e,images:l,dispatch:r}){let o=l.find(h=>h.id==e.id);const c=()=>{r({type:"DELETE_BASKET",payload:e.id})},t=()=>{r({type:"INC_COUNT",payload:e.id})},d=()=>{e.count>1&&r({type:"DEC_COUNT",payload:e.id})};return s.jsxs("div",{className:"basket_item",children:[s.jsx(p,{className:"basket_close",onClick:c}),s.jsx("div",{className:"basket_img",children:s.jsxs(x,{to:`/details/${e==null?void 0:e.id}`,children:[" ",s.jsx("img",{src:o.src[0],alt:""})]})}),s.jsxs("div",{className:"basket_name",children:[e.title.slice(0,45),"..."]}),e.discount?s.jsxs("div",{className:"basket_dis",children:[s.jsx("h2",{children:+e.price}),s.jsx("h3",{children:(+e.price-+e.discount).toFixed(2)})]}):s.jsx("div",{className:"basket_price",children:s.jsx("h2",{children:+e.price})}),s.jsxs("div",{className:"basket_count",children:[s.jsx("button",{onClick:d,children:"-"}),s.jsx("h2",{children:e.count}),s.jsx("button",{onClick:t,children:"+"})]}),e.discount?s.jsxs("div",{className:"discount_summary",children:[s.jsx("h3",{children:(+e.price*+e.count).toFixed(2)}),s.jsx("h2",{children:(+e.price*+e.count-+e.discount*+e.count).toFixed(2)})]}):s.jsx("div",{className:"basket_summary",children:s.jsx("h2",{children:(+e.price*+e.count).toFixed(2)})})]})}const _=e=>e,k=a(_)(N);function v({products:e,basket:l,dinWords:r,language:o}){const c=r[o].basket;let t=[];l.length&&l.map(n=>{e.map(i=>{n==i.id&&t.push(i)})});let d=t.reduce((n,i)=>n+(+i.price*i.count-+i.discount*i.count),0).toFixed(2),h=t.reduce((n,i)=>n+ +i.discount*i.count,0).toFixed(2);return s.jsxs(s.Fragment,{children:[s.jsx("div",{className:"container",children:l.length?s.jsxs("div",{className:"basket_main",children:[s.jsx("h2",{className:"basket_title",children:c.basket}),s.jsxs("div",{className:"basket_top",children:[s.jsx("h5",{className:"empty_title"}),s.jsx("h5",{className:"name_title",children:c.name}),s.jsx("h5",{className:"price_title",children:c.price}),s.jsx("h5",{className:"count_title",children:c.count}),s.jsx("h5",{className:"summary_title",children:c.all})]}),s.jsx("div",{className:"basket_hero",children:t.map(n=>s.jsx(k,{data:n},n.id))}),s.jsxs("div",{className:"summary_price",children:[s.jsxs("h2",{children:[c.allDis," ",s.jsxs("span",{children:[+h," AZN"]})]}),s.jsxs("h2",{children:[c.toPay," ",s.jsxs("span",{children:[+d," AZN"]})]}),s.jsx(x,{to:"/order",children:c.orderBtn})]})]}):s.jsxs("div",{className:"not_fav not_basket",children:[s.jsx("h2",{children:c.nothing}),s.jsx("p",{children:c.toHome}),s.jsx(x,{to:"/",children:c.homeBtn})]})}),s.jsx(j,{}),s.jsx(u,{})]})}const b=e=>e,g=a(b)(v);export{g as default};
