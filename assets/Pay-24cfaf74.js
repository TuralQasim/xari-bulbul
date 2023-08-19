import{c as d,j as s,L as a}from"./index-31cc87b5.js";import{M as n}from"./Map-a3ed4373.js";import{H as t}from"./HowWork-29d5013c.js";import{P as x}from"./Product-6fb25f74.js";import{S as h}from"./ScrollTop-92c6c348.js";function m({products:r,dinWords:c}){const e=c.pay;let l=[...r.filter(i=>i.category_id==2).slice(4,6),...r.filter(i=>i.category_id==6).slice(4,6)];return s.jsxs(s.Fragment,{children:[s.jsx("img",{src:"/data/bg/bg_right.png",className:"bg_right",alt:""}),s.jsxs("div",{className:"container",children:[s.jsx("h2",{className:"pay_title",children:e.title}),s.jsxs("div",{className:"erip",children:[s.jsxs("div",{className:"erip_left",children:[s.jsx("p",{children:e.erip}),s.jsx("p",{children:e.process})]}),s.jsxs("div",{className:"erip_right",children:[s.jsx("h2",{className:"erip_right_text",children:e.recieve}),s.jsxs("div",{className:"erip_right_img",children:[s.jsx("div",{className:"erip_item",children:s.jsx("img",{src:"/icons/pay/mastercard.svg",alt:""})}),s.jsx("div",{className:"erip_item",children:s.jsx("img",{src:"/icons/pay/maestro.svg",alt:""})}),s.jsx("div",{className:"erip_item",children:s.jsx("img",{src:"/icons/pay/visa.svg",alt:""})}),s.jsx("div",{className:"erip_item",children:s.jsx("img",{src:"/icons/pay/belcard.svg",alt:""})}),s.jsx("div",{className:"erip_item",children:s.jsx("img",{src:"/icons/pay/mtbank.png",alt:""})}),s.jsx("div",{className:"erip_item",children:s.jsx("img",{src:"/icons/pay/webmoney.svg",alt:""})}),s.jsx("div",{className:"erip_item",children:s.jsx("img",{src:"/icons/pay/erip.png",alt:""})}),s.jsx("div",{className:"erip_item",children:s.jsx("img",{src:"/icons/pay/ipay.png",alt:""})}),s.jsx("div",{className:"erip_item",children:s.jsx("img",{src:"/icons/pay/masterSecure.svg",alt:""})}),s.jsx("div",{className:"erip_item",children:s.jsx("img",{src:"/icons/pay/verified.svg",alt:""})})]})]})]}),s.jsx("div",{className:"erip_bg",children:s.jsx("p",{children:e.eripPay})}),s.jsxs("div",{className:"nessesary",children:[s.jsxs("div",{className:"nessesary_text",children:[s.jsx("h2",{children:e.nesessary}),s.jsxs("ul",{children:[s.jsx("li",{children:e.choose}),s.jsx("li",{children:e.internetShop}),s.jsx("li",{children:e.orderNum}),s.jsx("li",{children:e.priceNum}),s.jsx("li",{children:e.submit})]})]}),s.jsx("div",{className:"nessesary_img",children:s.jsx("img",{src:"/icons/nessesary.svg",alt:""})})]}),s.jsxs("div",{className:"ipay",children:[s.jsx("h2",{children:e.ipayTitle}),s.jsxs("div",{className:"ipay_hero",children:[s.jsxs("div",{className:"ipay_img",children:[s.jsx("img",{src:"/data/pay/ipay1.png",alt:""}),s.jsx("img",{src:"/data/pay/ipay2.png",alt:""})]}),s.jsxs("ul",{className:"ipay_text",children:[s.jsx("li",{children:e.forEnter}),s.jsx("li",{children:e.after})]})]})]}),s.jsxs("div",{className:"bepay",children:[s.jsxs("div",{className:"bepay_text",children:[s.jsx("h2",{children:e.bePaid}),s.jsx("p",{children:e.system}),s.jsxs("ul",{children:[s.jsx("li",{children:e.addBasket}),s.jsx("li",{children:e.choosePay}),s.jsx("li",{children:e.write}),s.jsx("li",{children:e.recieveMail}),s.jsx("li",{children:e.relocate})]})]}),s.jsx("div",{className:"bepay_img",children:s.jsx("img",{src:"/data/pay/bepay.png",alt:""})})]}),s.jsxs("div",{className:"return_money",children:[s.jsx("h2",{children:e.refund}),s.jsx("p",{children:e.refundInfo})]}),s.jsxs("div",{className:"important_bg",children:[s.jsx("h2",{children:e.important}),s.jsx("p",{children:e.importantText}),s.jsx("img",{src:"/data/homeImages/left_top.png",alt:""}),s.jsx("img",{src:"/data/homeImages/right_down.png",alt:""})]}),s.jsxs("div",{className:"decor",children:[s.jsx("h2",{children:e.orderFlowers}),s.jsxs("div",{className:"decor_hero",children:[s.jsxs("div",{className:"decor_text",children:[s.jsx("p",{children:e.can}),s.jsx("p",{children:e.thisPrice}),s.jsx("p",{children:e.bouquet})]}),s.jsx("div",{className:"decor_img",children:s.jsx("img",{src:"/data/pay/decor.png",alt:""})})]})]}),s.jsxs("div",{className:"other",children:[s.jsx("h2",{children:e.else}),s.jsx("p",{children:e.guarantee}),s.jsx("p",{children:e.phoneNum}),s.jsx("p",{children:e.replace})]})]}),s.jsxs("div",{className:"products_hero container",children:[s.jsxs("div",{className:"prod_title",children:[s.jsx("div",{className:"prod_title_left",children:s.jsx("h2",{children:e.withFlower})}),s.jsxs(a,{to:"/catalog",children:[e.catalog," ",s.jsx("img",{src:"/icons/arrow_right.svg",alt:""})]})]}),s.jsx("div",{className:"products",children:l.map(i=>s.jsx(a,{to:`/details/${i.id}`,children:s.jsx(x,{data:i})},i.id))}),s.jsxs(a,{to:"/catalog",children:[e.catalog," ",s.jsx("img",{src:"/icons/arrow_right.svg",alt:""})]})]}),s.jsx(t,{}),s.jsx(n,{}),s.jsx(h,{})]})}const j=r=>r,y=d(j)(m);export{y as default};
