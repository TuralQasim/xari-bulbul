import Slider from "react-slider";
import { useState } from "react";
import { connect } from "react-redux";
function App({ products, dispatch, pricesFilter, setValues }) {
  const priceArr = products.map((a) => {
    return a.price;
  });
  const min = +priceArr.sort((a, b) => a - b)[0];
  const max = +priceArr.sort((a, b) => b - a)[0];
  const [range, setRange] = useState([pricesFilter[0], pricesFilter[1]]);
  function handleChanges(newValue) {
    setValues(newValue);
    setRange(newValue);
    dispatch({
      type: "CHANGE_PRICE",
      payload: [range[0], range[1]],
    });
  }
  return (
    <div className="catalog_range">
      <Slider
        className="range_slider"
        value={range}
        min={min}
        max={max}
        onChange={handleChanges}
      />
      <div className="range_values">
        <div className="range_item">
          <h2>{range[0]}</h2>
          <h3>AZN</h3>
        </div>
        <div className="range_item">
          <h2>{range[1]}</h2>
          <h3>AZN</h3>
        </div>
      </div>
    </div>
  );
}

const t = (a) => a;
export default connect(t)(App);
