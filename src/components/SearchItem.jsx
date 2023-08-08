import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

function SearchItem({ data, images, setSearchValue }) {
  let img = images.filter((a) => {
    return a.id == data.img_id;
  });
  const resetValue = () => {
    setSearchValue("");
  };
  return (
    <Link
      className="search_item"
      to={`/details/${data?.id}`}
      onClick={resetValue}
    >
      <img src={img[0].src} alt="" />
      <h2>{data.title}</h2>
      {data.discount ? (
        <div className="search_prices">
          <h3>{data.price - data.discount}</h3>
          <h4>{data.price}</h4>
        </div>
      ) : (
        <h3 className="search_price">{data.price}</h3>
      )}
    </Link>
  );
}

const t = (a) => a;
export default connect(t)(SearchItem);
