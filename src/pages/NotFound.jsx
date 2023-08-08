import React from "react";
import Map from "../components/Map";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

function NotFound({ dinWords }) {
  const words = dinWords.notFound;
  return (
    <>
      <div className="container">
        <div className="not_found">
          <div className="not_found_text">
            <h2>{words.title}</h2>
            <div className="not_found_phar">
              <p>{words.mistake}</p>
              <p>{words.page}</p>
              <p>{words.old}</p>
            </div>
            <Link to="/">{words.homeBtn}</Link>
          </div>
          <div className="not_found_img">
            <h1>404</h1>
            <img src="../src/data/notFound/not_found.png" alt="" />
          </div>
        </div>
      </div>
      <Map />
    </>
  );
}

const t = (a) => a;
export default connect(t)(NotFound);
