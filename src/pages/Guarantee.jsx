import React from "react";
import Map from "../components/Map";
import ScrollTop from "../components/ScrollTop";
import { connect } from "react-redux";

function Guarantee({ dinWords }) {
  const words = dinWords.guarantee;
  return (
    <>
      <div className="container">
        <h2 className="guarantee_title">{words.title}</h2>
        <div className="guarantee">
          <div className="guarantee_item">
            <img src="./xari-bulbul/icons/guarantee1.svg" alt="" />
            <div className="guarantee_text">
              <h2>{words.quality}</h2>
              <p>{words.we}</p>
            </div>
          </div>
          <div className="guarantee_item">
            <img src="./xari-bulbul/icons/guarantee2.svg" alt="" />
            <div className="guarantee_text">
              <h2>{words.best}</h2>
              <p>{words.love}</p>
            </div>
          </div>
          <div className="guarantee_item">
            <img src="./xari-bulbul/icons/guarantee3.svg" alt="" />
            <div className="guarantee_text">
              <h2>{words.happy}</h2>
              <p>{words.dontLike}</p>
            </div>
          </div>
          <div className="guarantee_item">
            <img src="./xari-bulbul/icons/guarantee4.svg" alt="" />
            <div className="guarantee_text">
              <h2>{words.online}</h2>
              <p>{words.ready}</p>
            </div>
          </div>
          <div className="guarantee_item">
            <img src="./xari-bulbul/icons/guarantee5.svg" alt="" />
            <div className="guarantee_text">
              <h2>{words.punktual}</h2>
              <p>{words.baku}</p>
            </div>
          </div>
        </div>
      </div>
      <Map />
      <ScrollTop />
    </>
  );
}

const t = (a) => a;
export default connect(t)(Guarantee);
