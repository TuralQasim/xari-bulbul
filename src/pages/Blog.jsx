import React from "react";
import Map from "../components/Map";
import { connect } from "react-redux";
import HowWork from "../components/HowWork";
import BlogSmall from "../components/BlogSmall";
import BlogBig from "../components/BlogBig";
import ScrollTop from "../components/ScrollTop";

function Blog({ dinWords, language }) {
  const words = dinWords[language].blog;
  return (
    <>
      <img src="./data/bg/bg_right.png" className="bg_right" alt="" />
      <div className="container">
        <h2 className="blog_title">{words.title}</h2>
        <div className="blog">
          <div className="big_right">
            <BlogSmall />
            <BlogSmall />
            <BlogBig />
          </div>
          <div className="big_right">
            <BlogSmall />
            <BlogSmall />
            <BlogBig />
          </div>
          <div className="only_small">
            <BlogSmall />
            <BlogSmall />
            <BlogSmall />
            <BlogSmall />
          </div>
          <div className="big_left">
            <BlogBig />
            <BlogSmall />
            <BlogSmall />
          </div>
          <div className="big_left">
            <BlogBig />
            <BlogSmall />
            <BlogSmall />
          </div>
          <div className="only_small">
            <BlogSmall />
            <BlogSmall />
            <BlogSmall />
            <BlogSmall />
          </div>
          <div className="big_right">
            <BlogSmall />
            <BlogSmall />
            <BlogBig />
          </div>
          <div className="big_right">
            <BlogSmall />
            <BlogSmall />
            <BlogBig />
          </div>
        </div>
      </div>
      <HowWork />
      <Map />
      <ScrollTop />
    </>
  );
}

const t = (a) => a;
export default connect(t)(Blog);
