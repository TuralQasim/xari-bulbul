import React from "react";
import { connect } from "react-redux";
function Loading() {
  return (
    <div className="loading_gif">
      <img src="./xari-bulbul/data/loading.gif" alt="" />
    </div>
  );
}

const t = (a) => a;
export default connect(t)(Loading);
