import React from "react";
import Map from "../components/Map";
import ScrollTop from "../components/ScrollTop";
import { connect } from "react-redux";

function Refund({ dinWords }) {
  const words = dinWords.refund;
  return (
    <>
      <div className="container">
        <h2 className="refund_title">{words.title}</h2>
        <div className="refund">
          <h2>{words.more}</h2>
          <h3>{words.secury}</h3>
          <p>{words.law}</p>
          <div className="refund_bg">
            <div className="refund_hero">
              <p>{words.when}</p>
              <p>{words.all}</p>
              <ul>
                <li>{words.moment}</li>
                <li>{words.curier}</li>
              </ul>
            </div>
            <img
              src="./xari-bulbul/data/homeImages/left_top.png"
              className="refund_left_top"
              alt=""
            />
            <img
              src="./xari-bulbul/data/homeImages/right_down.png"
              alt=""
              className="refund_right_down"
            />
            <img
              src="./xari-bulbul/icons/spots.svg"
              className="spots1"
              alt=""
            />
            <img
              src="./xari-bulbul/icons/spots.svg"
              className="spots2"
              alt=""
            />
            <img
              src="./xari-bulbul/icons/spots.svg"
              className="spots3"
              alt=""
            />
          </div>
          <p>
            {words.returnMoney}
            <p>{words.reject}</p>
            <p>{words.refundTime}</p>
          </p>
        </div>
      </div>
      <Map />
      <ScrollTop />
    </>
  );
}

const t = (a) => a;
export default connect(t)(Refund);
