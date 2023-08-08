import React from "react";
import Map from "../components/Map";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import ScrollTop from "../components/ScrollTop";

function Order({ basket, products, dinWords }) {
  const words = dinWords.order;
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
  let notDiscount = basketProd
    .reduce((acc, item) => acc + +item.price * item.count, 0)
    .toFixed(2);
  let prodCount = basketProd.reduce((acc, item) => acc + +item.count, 0);
  return (
    <>
      <div className="container">
        <h2 className="order_title">{words.title}</h2>
        <div className="order">
          <div className="order_left">
            <h2 className="city_title">{words.city}</h2>
            <input
              type="text"
              className="city_input"
              placeholder={words.cityPlace}
            />
            <div className="delivery_type">
              <h2>{words.deliveryType}</h2>
              <label>
                <input type="radio" name="aaa" checked />
                {words.kurier}
              </label>
              <label>
                <input type="radio" name="aaa" />
                {words.fromShop}
              </label>
            </div>
            <div className="address_info">
              <h2>{words.address}</h2>
              <div className="delivery_time">
                <h3>{words.time}</h3>
                <div className="delivery_time_input">
                  <label>
                    {words.from} <input type="number" placeholder="12:00" />
                  </label>
                  <label>
                    {words.to} <input type="number" placeholder="15:00" />
                  </label>
                </div>
              </div>
              <form className="form_time">
                <input
                  type="date"
                  className="delivery_date_input"
                  placeholder={words.datePlace}
                />
                <input
                  type="text"
                  className="delivery_house_input"
                  placeholder={words.home}
                />
                <div className="build_info">
                  <input type="number" placeholder={words.blokPlace} />
                  <input type="number" placeholder={words.homePlace} />
                  <input type="number" placeholder={words.floorPlace} />
                </div>
              </form>
              <div className="pay_type">
                <h2>{words.payType}</h2>
                <label>
                  <input type="radio" name="bbb" checked />
                  {words.cash}
                </label>
                <label>
                  <input type="radio" name="bbb" />
                  {words.card}
                  <div className="card_type">
                    <img src="../src/icons/pay/mastercard.svg" alt="" />
                    <img src="../src/icons/pay/visa.svg" alt="" />
                    <img src="../src/icons/pay/belcard.svg" alt="" />
                    <img src="../src/icons/pay/masterSecure.svg" alt="" />
                    <img src="../src/icons/pay/mtbank.png" alt="" />
                    <img src="../src/icons/pay/verified.svg" alt="" />
                  </div>
                </label>
                <label>
                  <input type="radio" name="bbb" />
                  {words.online}
                  <div className="online_type">
                    <img src="../src/icons/pay/erip.png" alt="" />
                    <img src="../src/icons/pay/bepaid.png" alt="" />
                    <img src="../src/icons/pay/ipay.png" alt="" />
                    <img src="../src/icons/pay/webmoney.svg" alt="" />
                  </div>
                </label>
              </div>
              <form className="form_info">
                <h2>{words.contactInfo}</h2>
                <input type="text" placeholder={words.namePlace} />
                <input type="email" placeholder={words.mailPlace} />
                <input type="number" placeholder={words.phonePlace} />
                <input type="number" placeholder={words.salePlace} />
                <textarea placeholder={words.elsePlace}></textarea>
                <label>
                  <input type="checkbox" />
                  {words.agree1}
                  <Link>{words.agree2}</Link>
                </label>
                <label>
                  <input type="checkbox" />
                  {words.wont}
                </label>
                <Link to="/pay">{words.toPay}</Link>
              </form>
            </div>
          </div>
          <div className="order_right">
            <div className="order_right_title">
              <h2>{words.forPay}</h2>
              <h2>{+sumPrice}</h2>
            </div>
            <div className="order_right_count">
              <p>
                {words.things}, {basket.length ? +prodCount : "0"}{" "}
                {words.pieces}
              </p>
              <p>{+notDiscount}</p>
            </div>
            <div className="order_right_discount">
              <p>{words.discount}</p>
              <p>{disPrice == 0 ? "0" : `-${disPrice}`}</p>
            </div>
            <Link to="/pay">{words.toPay}</Link>
            <label>
              <input type="checkbox" />
              <p>
                {words.agree3} <Link to="/refund">{words.agree4}</Link>
              </p>
            </label>
          </div>
        </div>
      </div>
      <Map />
      <ScrollTop />
    </>
  );
}

const t = (a) => a;
export default connect(t)(Order);
