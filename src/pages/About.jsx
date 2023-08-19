import React from "react";
import Map from "../components/Map";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Product from "../components/Product";
import ScrollTop from "../components/ScrollTop";

function About({ products, dinWords }) {
  let eightProd4 = [
    ...products.filter((a) => a.category_id == 2).slice(4, 6),
    ...products.filter((a) => a.category_id == 6).slice(4, 6),
  ];
  const words = dinWords.about;
  return (
    <>
      <img src="./data/bg/bg_right.png" className="bg_right" alt="" />
      <div className="container">
        <h2 className="about_title">{words.aboutTitle}</h2>
        <div className="about">
          <div className="about_left">
            <div className="about_left_text">
              <h2>{words.xaribulbul}</h2>
              <p>{words.predOrder}</p>
              <p>{words.help}</p>
              <p>{words.care}</p>
            </div>
            <img
              src="./data/about/about2.png"
              className="about_left_img"
              alt=""
            />
          </div>
          <div className="about_right">
            <img
              src="./data/about/about1.png"
              className="about_right_img"
              alt=""
            />
            <div className="about_right_text">
              <p>{words.doWork}</p>
              <p>{words.team}</p>
              <p>{words.ourCatalog}</p>
              <p>{words.thank}</p>
              <h4>{words.goodOrder}</h4>
              <Link to="/catalog">{words.catalog}</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="products_hero container">
        <div className="prod_title">
          <div className="prod_title_left">
            <h2>{words.withFlower}</h2>
          </div>
          <Link to="/catalog">
            {words.toCatalog} <img src="./icons/arrow_right.svg" alt="" />
          </Link>
        </div>
        <div className="products">
          {eightProd4.map((a) => {
            return <Product data={a} key={a.id} />;
          })}
        </div>
        <Link to="/catalog">
          {words.toCatalog} <img src="./icons/arrow_right.svg" alt="" />
        </Link>
      </div>
      <Map />
      <ScrollTop />
    </>
  );
}

const t = (a) => a;
export default connect(t)(About);
