import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";

function BasketItem({ data, images, dispatch }) {
  let src = images.find((a) => a.id == data.id);
  const deleteBasket = () => {
    dispatch({
      type: "DELETE_BASKET",
      payload: data.id,
    });
  };
  const incCount = () => {
    dispatch({
      type: "INC_COUNT",
      payload: data.id,
    });
  };
  const decCount = () => {
    if (data.count > 1) {
      dispatch({
        type: "DEC_COUNT",
        payload: data.id,
      });
    }
  };
  return (
    <div className="basket_item">
      <AiOutlineClose className="basket_close" onClick={deleteBasket} />
      <div className="basket_img">
        <Link to={`/details/${data?.id}`}>
          {" "}
          <img src={src.src[0]} alt="" />
        </Link>
      </div>
      <div className="basket_name">{data.title.slice(0, 45)}...</div>
      {data.discount ? (
        <div className="basket_dis">
          <h2>{+data.price}</h2>
          <h3>{(+data.price - +data.discount).toFixed(2)}</h3>
        </div>
      ) : (
        <div className="basket_price">
          <h2>{+data.price}</h2>
        </div>
      )}
      <div className="basket_count">
        <button onClick={decCount}>-</button>
        <h2>{data.count}</h2>
        <button onClick={incCount}>+</button>
      </div>
      {data.discount ? (
        <div className="discount_summary">
          <h3>{(+data.price * +data.count).toFixed(2)}</h3>
          <h2>
            {(+data.price * +data.count - +data.discount * +data.count).toFixed(
              2
            )}
          </h2>
        </div>
      ) : (
        <div className="basket_summary">
          <h2>{(+data.price * +data.count).toFixed(2)}</h2>
        </div>
      )}
    </div>
  );
}

const t = (a) => a;
export default connect(t)(BasketItem);
