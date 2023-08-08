import React from "react";
import Map from "../components/Map";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Product from "../components/Product";
import ScrollTop from "../components/ScrollTop";

function Favorites({ favorite, products, dinWords }) {
  let favProd = [];
  const words = dinWords.favorites;
  if (favorite.length) {
    favorite.map((a) => {
      products.map((b) => {
        if (b.id == a) {
          favProd.push(b);
        }
      });
    });
  }
  return (
    <>
      <div className="container">
        {favorite.length ? (
          <div className="have_fav">
            <h2 className="favorite_title">{words.title}</h2>
            <div className="products">
              {favProd.map((a) => {
                return <Product data={a} key={a.id} />;
              })}
            </div>
            <div className="in_cat">
              <Link to="/catalog">{words.catalog}</Link>
            </div>
          </div>
        ) : (
          <div className="not_fav">
            <h2>{words.nothing}</h2>
            <p>{words.toHome}</p>
            <Link to="/">{words.homeBtn}</Link>
          </div>
        )}
      </div>
      <Map />
      <ScrollTop />
    </>
  );
}

const t = (a) => a;
export default connect(t)(Favorites);
