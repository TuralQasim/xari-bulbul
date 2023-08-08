import React, { useState } from "react";
import { connect } from "react-redux";
import HowWork from "../components/HowWork";
import Map from "../components/Map";
import Lider from "../components/Lider";
import Reviews from "../components/Reviews";
import Product from "../components/Product";
import Range from "../components/Range";
import ScrollTop from "../components/ScrollTop";

function Catalog({ categories, products, pricesFilter, dinWords }) {
  const words = dinWords.catalog;
  const [values, setValues] = useState([pricesFilter[0], pricesFilter[1]]);
  const pricesProd = products.filter(
    (a) => a.price > values[0] && a.price < values[1]
  );
  const [checkedCat, setCheckedCat] = useState([]);
  const getCategory = (e) => {
    if (e.target.checked == true) {
      setCheckedCat((arr) => [...arr, +e.target.value]);
    } else {
      setCheckedCat((arr) => arr.filter((a) => a != +e.target.value));
    }
  };
  const catProd = products.filter((a) => {
    return (
      checkedCat.includes(a.category_id) &&
      a.price > values[0] &&
      a.price < values[1]
    );
  });
  return (
    <>
      <img src="./src/icons/flower_bg.svg" className="flower_cat" alt="" />
      <h1 className="container catalog_title">{words.catalog}</h1>
      <div className="catalog container">
        <div className="filter">
          <h2 className="filter_title">{words.category}</h2>
          <ul>
            {categories.map((a) => {
              return (
                <li key={a?.id}>
                  <label>
                    {" "}
                    <input
                      type="checkbox"
                      // checked = {Array.includes(a.category) ? true : false}
                      onClick={getCategory}
                      value={a.id}
                    />
                    {a?.category}
                  </label>
                </li>
              );
            })}
          </ul>
          <h2 className="filter_title">{words.price}</h2>
          <Range setValues={setValues} />
        </div>
        <div className="cataloq_products">
          <div className="cataloq_products_hero">
            {checkedCat.length ? (
              catProd.length ? (
                catProd.map((a) => {
                  return <Product key={a.id} data={a} />;
                })
              ) : (
                <h2 className="pro_not_found">{words.notFound}</h2>
              )
            ) : (
              pricesProd.map((a) => {
                return <Product key={a.id} data={a} />;
              })
            )}
          </div>
        </div>
      </div>
      <Lider />
      <Reviews />
      <HowWork />
      <Map />
      <ScrollTop />
    </>
  );
}

const t = (a) => a;
export default connect(t)(Catalog);
