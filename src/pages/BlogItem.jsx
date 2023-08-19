import React from "react";
import Map from "../components/Map";
import HowWork from "../components/HowWork";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Product from "../components/Product";
import ScrollTop from "../components/ScrollTop";

function BlogItem({ products, dinWords }) {
  let eightProd4 = [
    ...products.filter((a) => a.category_id == 2).slice(4, 6),
    ...products.filter((a) => a.category_id == 6).slice(4, 6),
  ];
  const words = dinWords.blogItem;
  return (
    <>
      <img src="./data/bg/bg_right.png" className="bg_right" alt="" />
      <div className="container">
        <h1 className="blog_item_title">{words.title}</h1>
        <div className="wedding1">
          <div className="wedding1_text">
            <p>{words.youKnow}</p>
            <p>{words.example}</p>
            <p>{words.what}</p>
            <p>{words.sound}</p>
            <p>{words.last}</p>
          </div>
          <div className="wedding1_img">
            <img src="./data/blog_item/blog_item1.png" alt="" />
          </div>
        </div>
        <div className="bride">
          <h2>{words.baku}</h2>
          <p>{words.we}</p>
          <img
            src="./data/homeImages/left_top.png"
            className="bride_left"
            alt=""
          />
          <img
            src="./data/homeImages/right_down.png"
            className="bride_right"
            alt=""
          />
        </div>
        <div className="bride_buy">
          <div className="bride_buy_title">
            <h2>{words.buy}</h2>
          </div>
          <div className="bride_buy_text">
            <div className="bride_buy_text_left">
              <p>{words.forExample}</p>
              <p>{words.situation}</p>
              <p>{words.oneof}</p>
            </div>
            <div className="bride_buy_text_right">
              <p>{words.incriese}</p>
              <p>{words.shop}</p>
              <h2>{words.costumer}</h2>
            </div>
          </div>
          <img
            src="./data/blog_item/bride.png"
            className="bride_buy_img"
            alt=""
          />
        </div>
        <div className="buy_types">
          <div className="buy_tipes_title">
            <h2>{words.inBaku}</h2>
          </div>
          <div className="buy_types_text">
            <div className="buy_types_left">
              <h2>1</h2>
              <p>{words.adress}</p>
            </div>
            <div className="buy_types_right">
              <h2>2</h2>
              <p>{words.menecer}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="products_hero container">
        <div className="prod_title">
          <div className="prod_title_left">
            <h2>{words.withFlowers}</h2>
          </div>
          <Link to="/catalog">
            {words.catalog} <img src="./icons/arrow_right.svg" alt="" />
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
          {words.catalog} <img src="./icons/arrow_right.svg" alt="" />
        </Link>
      </div>
      <HowWork />
      <Map />
      <ScrollTop />
    </>
  );
}

const t = (a) => a;
export default connect(t)(BlogItem);
