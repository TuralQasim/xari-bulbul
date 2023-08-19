import React from "react";
import Map from "../components/Map";
import HelpAcc from "../components/HelpAcc";
import ScrollTop from "../components/ScrollTop";
import { connect } from "react-redux";

function Help({ dinWords }) {
  const words = dinWords.help;
  return (
    <>
      <div className="container">
        <h2 className="help_title">{words.title}</h2>
        <HelpAcc words={words} />
      </div>
      <Map />
      <ScrollTop />
    </>
  );
}

const t = (a) => a;
export default connect(t)(Help);
