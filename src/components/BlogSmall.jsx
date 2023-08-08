import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

function BlogSmall({ dinWords }) {
  const words = dinWords.blog;

  return (
    <div className="blog_small">
      <Link className="blog_small_img" to="/blog-item">
        <img src="../src/data/blog/blog_small.png" alt="" />
      </Link>
      <div className="blog_small_text">
        <h2>{words.bigH2}</h2>
        <p>{words.bigP}</p>
        <div className="blog_small_date">
          <h4>28.11.21</h4>
          <Link to="/blog-item">{words.else}</Link>
        </div>
      </div>
    </div>
  );
}

const t = (a) => a;
export default connect(t)(BlogSmall);
