import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

function Lider({ dinWords, dispatch }) {
  const words = dinWords.lider;
  const searchCheck = (e) => {
    dispatch({
      type: "SEARCH_WORD",
      payload: e.target.textContent,
    });
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="lider_bg">
      <div className="lider container">
        <h2 className="lider_title">{words.title}</h2>
        <div className="lider_hero" onClick={searchCheck}>
          <Link to="/catalog" className="big_lider">
            {words.whiteRoze}
          </Link>
          <Link to="/catalog" className="small_lider">
            {words.candy}
          </Link>
          <Link to="/catalog" className="big_lider">
            {words.redRoze}
          </Link>
          <Link to="/catalog" className="small_lider">
            {words.tulpan}
          </Link>
          <Link to="/catalog" className="big_lider">
            {words.roze101}
          </Link>
          <Link to="/catalog" className="small_lider">
            {words.forMom}
          </Link>
          <Link to="/catalog" className="big_lider">
            {words.dry}
          </Link>
          <Link to="/catalog" className="small_lider">
            {words.forMom}
          </Link>
          <Link to="/catalog" className="big_lider">
            {words.iris}
          </Link>
          <Link to="/catalog" className="small_lider">
            {words.liliya}
          </Link>
        </div>
      </div>
    </div>
  );
}

const t = (a) => a;
export default connect(t)(Lider);
