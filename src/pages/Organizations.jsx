import React from "react";
import Map from "../components/Map";
import { Link } from "react-router-dom";
import ScrollTop from "../components/ScrollTop";
import { connect } from "react-redux";

function Organizations({ dinWords }) {
  const words = dinWords.organization;
  return (
    <>
      <div className="container">
        <h2 className="organization_title">{words.title}</h2>
        <div className="organization">
          <div className="organization_left">
            <h4>
              {words.oneOf}
              <span> {words.quality}</span> {words.coostum}
            </h4>
            <h3>{words.get}</h3>
            <ul>
              <li>{words.discount}</li>
              <li>{words.shans}</li>
              <li>{words.work}</li>
              <li>{words.gift}</li>
              <li>{words.offer}</li>
              <li>{words.florist}</li>
              <li>{words.baki}</li>
            </ul>
            <h2>{words.withUs}</h2>
            <p>{words.forMore}</p>
            <div className="contact_phones">
              <h4>{words.phone}</h4>
              <ul className="phones">
                <li>
                  <img src="./icons/phone.svg" alt="" />
                  <Link to="tel:0516830063">051-683-00-63</Link>
                </li>
                <li>
                  <img src="./icons/phone.svg" alt="" />
                  <Link to="tel:0516830063">051-683-00-63</Link>
                </li>
                <li>
                  <img src="./icons/phone.svg" alt="" />
                  <Link to="tel:0516830063">051-683-00-63</Link>
                </li>
              </ul>
            </div>
            <div className="skype">
              <h4>Skype</h4>
              <Link to="http/skype.com">xaribulbul</Link>
            </div>
          </div>
          <img src="./data/organization/organization.png" alt="" />
        </div>
      </div>
      <Map />
      <ScrollTop />
    </>
  );
}
const t = (a) => a;
export default connect(t)(Organizations);
