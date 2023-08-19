import React from "react";
import Map from "../components/Map";
import HowWork from "../components/HowWork";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Product from "../components/Product";
import ScrollTop from "../components/ScrollTop";

function Pay({ products, dinWords }) {
  const words = dinWords.pay;
  let eightProd4 = [
    ...products.filter((a) => a.category_id == 2).slice(4, 6),
    ...products.filter((a) => a.category_id == 6).slice(4, 6),
  ];
  return (
    <>
      <img
        src="./xari-bulbul/data/bg/bg_right.png"
        className="bg_right"
        alt=""
      />
      <div className="container">
        <h2 className="pay_title">{words.title}</h2>
        <div className="erip">
          <div className="erip_left">
            <p>{words.erip}</p>
            <p>{words.process}</p>
          </div>
          <div className="erip_right">
            <h2 className="erip_right_text">{words.recieve}</h2>
            <div className="erip_right_img">
              <div className="erip_item">
                <img src="./xari-bulbul/icons/pay/mastercard.svg" alt="" />
              </div>
              <div className="erip_item">
                <img src="./xari-bulbul/icons/pay/maestro.svg" alt="" />
              </div>
              <div className="erip_item">
                <img src="./xari-bulbul/icons/pay/visa.svg" alt="" />
              </div>
              <div className="erip_item">
                <img src="./xari-bulbul/icons/pay/belcard.svg" alt="" />
              </div>
              <div className="erip_item">
                <img src="./xari-bulbul/icons/pay/mtbank.png" alt="" />
              </div>
              <div className="erip_item">
                <img src="./xari-bulbul/icons/pay/webmoney.svg" alt="" />
              </div>
              <div className="erip_item">
                <img src="./xari-bulbul/icons/pay/erip.png" alt="" />
              </div>
              <div className="erip_item">
                <img src="./xari-bulbul/icons/pay/ipay.png" alt="" />
              </div>
              <div className="erip_item">
                <img src="./xari-bulbul/icons/pay/masterSecure.svg" alt="" />
              </div>
              <div className="erip_item">
                <img src="./xari-bulbul/icons/pay/verified.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="erip_bg">
          <p>{words.eripPay}</p>
        </div>
        <div className="nessesary">
          <div className="nessesary_text">
            <h2>{words.nesessary}</h2>
            <ul>
              <li>{words.choose}</li>
              <li>{words.internetShop}</li>
              <li>{words.orderNum}</li>
              <li>{words.priceNum}</li>
              <li>{words.submit}</li>
            </ul>
          </div>
          <div className="nessesary_img">
            <img src="./xari-bulbul/icons/nessesary.svg" alt="" />
          </div>
        </div>
        <div className="ipay">
          <h2>{words.ipayTitle}</h2>
          <div className="ipay_hero">
            <div className="ipay_img">
              <img src="./xari-bulbul/data/pay/ipay1.png" alt="" />
              <img src="./xari-bulbul/data/pay/ipay2.png" alt="" />
            </div>
            <ul className="ipay_text">
              <li>{words.forEnter}</li>
              <li>{words.after}</li>
            </ul>
          </div>
        </div>
        <div className="bepay">
          <div className="bepay_text">
            <h2>{words.bePaid}</h2>
            <p>{words.system}</p>
            <ul>
              <li>{words.addBasket}</li>
              <li>{words.choosePay}</li>
              <li>{words.write}</li>
              <li>{words.recieveMail}</li>
              <li>{words.relocate}</li>
            </ul>
          </div>
          <div className="bepay_img">
            <img src="./xari-bulbul/data/pay/bepay.png" alt="" />
          </div>
        </div>
        <div className="return_money">
          <h2>{words.refund}</h2>
          <p>{words.refundInfo}</p>
        </div>
        <div className="important_bg">
          <h2>{words.important}</h2>
          <p>{words.importantText}</p>
          <img src="./xari-bulbul/data/homeImages/left_top.png" alt="" />
          <img src="./xari-bulbul/data/homeImages/right_down.png" alt="" />
        </div>
        <div className="decor">
          <h2>{words.orderFlowers}</h2>
          <div className="decor_hero">
            <div className="decor_text">
              <p>{words.can}</p>
              <p>{words.thisPrice}</p>
              <p>{words.bouquet}</p>
            </div>
            <div className="decor_img">
              <img src="./xari-bulbul/data/pay/decor.png" alt="" />
            </div>
          </div>
        </div>
        <div className="other">
          <h2>{words.else}</h2>
          <p>{words.guarantee}</p>
          <p>{words.phoneNum}</p>
          <p>{words.replace}</p>
        </div>
      </div>
      <div className="products_hero container">
        <div className="prod_title">
          <div className="prod_title_left">
            <h2>{words.withFlower}</h2>
          </div>
          <Link to="/catalog">
            {words.catalog}{" "}
            <img src="./xari-bulbul/icons/arrow_right.svg" alt="" />
          </Link>
        </div>
        <div className="products">
          {eightProd4.map((a) => {
            return (
              <Link key={a.id} to={`/details/${a.id}`}>
                <Product data={a} />
              </Link>
            );
          })}
        </div>
        <Link to="/catalog">
          {words.catalog}{" "}
          <img src="./xari-bulbul/icons/arrow_right.svg" alt="" />
        </Link>
      </div>
      <HowWork />
      <Map />
      <ScrollTop />
    </>
  );
}

const t = (a) => a;
export default connect(t)(Pay);
