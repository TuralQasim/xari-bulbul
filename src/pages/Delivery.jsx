import React from "react";
import Map from "../components/Map";
import HowWork from "../components/HowWork";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Product from "../components/Product";
import ScrollTop from "../components/ScrollTop";

function Delivery({ products, dinWords }) {
  let eightProd4 = [
    ...products.filter((a) => a.category_id == 2).slice(4, 6),
    ...products.filter((a) => a.category_id == 6).slice(4, 6),
  ];
  const words = dinWords.delivery;
  return (
    <>
      <div className="container">
        <h2 className="delivery_title">{words.title}</h2>
        <p className="deliveri_phag">{words.time}</p>
        <p className="deliveri_phag">{words.after}</p>
      </div>
      <div className="delivery_bg">
        <div className="delivery_items container">
          <h3 className="delivery_item">{words.baku}</h3>
          <h3 className="delivery_item">{words.price}</h3>
          <h3 className="delivery_item">{words.fromPrice}</h3>
          <h3 className="delivery_item">{words.holiday}</h3>
        </div>
        <img
          className="delivery_img1"
          src="/data/homeImages/left_top.png"
          alt=""
        />
        <img
          className="delivery_img2"
          src="/data/homeImages/right_down.png"
          alt=""
        />
      </div>
      <div className="container">
        <p className="deliveri_phag">{words.azerbaijan}</p>
        <div className="delivery_sect">
          <div className="delivery_sect_text">
            <h2>{words.rayon} </h2>
            <p>{words.outBaku}</p>
            <ul>
              <li>{words.toPay}</li>
              <li>{words.if}</li>
              <li>{words.night}</li>
              <li>{words.else}</li>
            </ul>
          </div>
          <img
            className="delivery_sect_img"
            src="/data/delivery/delivery_img.png"
            alt=""
          />
          <ul>
            <li>{words.toPay}</li>
            <li>{words.if}</li>
            <li>{words.night}</li>
            <li>{words.else}</li>
          </ul>
        </div>
      </div>
      <div className="products_hero container">
        <div className="prod_title">
          <div className="prod_title_left">
            <h2>{words.withFlowers}</h2>
          </div>
          <Link to="/catalog">
            {words.catalog} <img src="/icons/arrow_right.svg" alt="" />
          </Link>
        </div>
        <div className="products">
          {eightProd4.map((a) => {
            return <Product data={a} key={a.id} />;
          })}
        </div>
        <Link to="/catalog">
          {words.catalog} <img src="/icons/arrow_right.svg" alt="" />
        </Link>
      </div>
      <HowWork />
      <Map />
      <ScrollTop />
    </>
  );
}

const t = (a) => a;
export default connect(t)(Delivery);
