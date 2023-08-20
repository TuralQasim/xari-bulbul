import Map from "../components/Map";
import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import BasketItem from "../components/BasketItem";
import ScrollTop from "../components/ScrollTop";

function Basket({ products, basket, dinWords, language }) {
  const words = dinWords[language].basket;
  let basketProd = [];
  if (basket.length) {
    basket.map((a) => {
      products.map((b) => {
        if (a == b.id) {
          basketProd.push(b);
        }
      });
    });
  }
  let sumPrice = basketProd
    .reduce(
      (acc, item) =>
        acc + (+item.price * item.count - +item.discount * item.count),
      0
    )
    .toFixed(2);
  let disPrice = basketProd
    .reduce((acc, item) => acc + +item.discount * item.count, 0)
    .toFixed(2);
  return (
    <>
      <div className="container">
        {!basket.length ? (
          <div className="not_fav not_basket">
            <h2>{words.nothing}</h2>
            <p>{words.toHome}</p>
            <Link to="/">{words.homeBtn}</Link>
          </div>
        ) : (
          <div className="basket_main">
            <h2 className="basket_title">{words.basket}</h2>
            <div className="basket_top">
              <h5 className="empty_title"></h5>
              <h5 className="name_title">{words.name}</h5>
              <h5 className="price_title">{words.price}</h5>
              <h5 className="count_title">{words.count}</h5>
              <h5 className="summary_title">{words.all}</h5>
            </div>
            <div className="basket_hero">
              {basketProd.map((a) => {
                return <BasketItem key={a.id} data={a} />;
              })}
            </div>
            <div className="summary_price">
              <h2>
                {words.allDis} <span>{+disPrice} AZN</span>
              </h2>
              <h2>
                {words.toPay} <span>{+sumPrice} AZN</span>
              </h2>
              <Link to="/order">{words.orderBtn}</Link>
            </div>
          </div>
        )}
      </div>
      <Map />
      <ScrollTop />
    </>
  );
}

const t = (a) => a;
export default connect(t)(Basket);
