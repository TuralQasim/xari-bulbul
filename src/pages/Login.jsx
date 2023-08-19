import React, { useState } from "react";
import Map from "../components/Map";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import ScrollTop from "../components/ScrollTop";

function Login({ users, dinWords }) {
  const words = dinWords.login;
  console.log(users);
  const [empty, setEmpty] = useState(false);
  const [log, setLog] = useState({
    login: "",
    pass: "",
  });
  const changeLogin = (e) => {
    setLog((prev) => {
      let newObj = { ...prev, login: e.target.value };
      return newObj;
    });
  };
  const changePass = (e) => {
    setLog((prev) => {
      let newObj = { ...prev, pass: e.target.value };
      return newObj;
    });
  };
  const checkLog = (e) => {
    e.preventDefault();
    if (log.login == "" || log.pass == "") {
      setEmpty(true);
    } else {
      setEmpty(false);
    }
  };
  return (
    <>
      <div className="container">
        <h2 className="login_title">{words.title}</h2>
        <form className="login_form">
          <p className={empty ? "" : "dnone"}>{words.allInput}</p>
          <input
            value={log.login}
            onChange={changeLogin}
            type="text"
            placeholder={words.emailPlace}
          />
          <label className="pass_label">
            <input
              type="text"
              value={log.pass}
              onChange={changePass}
              placeholder={words.passPlace}
            />
            <img src="./xari-bulbul/icons/pass.svg" alt="" />
          </label>
          <div className="forgot_save">
            <h4>{words.forgot}</h4>
            <label className="save_label">
              <input type="checkbox" />
              {words.remember}
            </label>
          </div>
          <Link className="reg_btn" to="/registration">
            {words.regBtn}
          </Link>
          <button onClick={checkLog} className="login_btn">
            {words.logBtn}
          </button>
          <img
            src="./xari-bulbul/data/homeImages/left_top.png"
            alt=""
            className="login_bg"
          />
        </form>
      </div>
      <Map />
      <ScrollTop />
    </>
  );
}

const t = (a) => a;
export default connect(t)(Login);
