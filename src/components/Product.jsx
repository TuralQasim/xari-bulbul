import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

function Product({ data, images, favorite, dispatch, basket, dinWords }) {
  const words = dinWords.product;
  let inBasket = basket.includes(data?.id);
  let src = images.find((a) => a.id == data?.id);
  let inFav = favorite.includes(data?.id);
  const addBasket = () => {
    if (basket.includes(data.id)) {
      dispatch({
        type: "DELETE_BASKET",
        payload: data.id,
      });
    } else {
      dispatch({
        type: "ADD_BASKET",
        payload: data.id,
      });
    }
  };
  const addToFav = (e) => {
    if (inFav) {
      dispatch({
        type: "DELETE_FAVOROTE",
        payload: data.id,
      });
    } else {
      dispatch({
        type: "ADD_FAVOROTE",
        payload: data.id,
      });
    }
  };
  return (
    <div className="product">
      <Link to={`/details/${data?.id}`}>
        <img src={src?.src[0]} alt="" />
      </Link>
      <h2>{data?.title}</h2>
      <h3>{data?.price}</h3>
      <button className="add_fav" onClick={addToFav}>
        <img
          src={
            inFav
              ? "../src/icons/field_heart.svg"
              : "../src/icons/empty_heart.svg"
          }
          alt=""
        />
      </button>
      <div className="prod_btns">
        <button className="order_btn">{words.order}</button>
        <button className="click_btn" onClick={addBasket}>
          {inBasket ? `${words.inBasket}` : `${words.addBasket}`}
        </button>
      </div>
    </div>
  );
}

const t = (a) => a;
export default connect(t)(Product);
