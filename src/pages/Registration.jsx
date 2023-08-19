import React from "react";
import Map from "../components/Map";
import { useState } from "react";
import ScrollTop from "../components/ScrollTop";
import { connect } from "react-redux";

function Registration({ dinWords }) {
  const words = dinWords.registration;
  const [err, setErr] = useState(false);
  const [regInfo, setRegInfo] = useState({
    nickname: "",
    pass1: "",
    pass2: "",
    name: "",
    mail: "",
  });
  const changeNickname = (e) => {
    setRegInfo((prev) => {
      let newObj = { ...prev, nickname: e.target.value };
      return newObj;
    });
  };
  const changePass1 = (e) => {
    setRegInfo((prev) => {
      let newObj = { ...prev, pass1: e.target.value };
      return newObj;
    });
  };
  const changePass2 = (e) => {
    setRegInfo((prev) => {
      let newObj = { ...prev, pass2: e.target.value };
      return newObj;
    });
  };
  const changeName = (e) => {
    setRegInfo((prev) => {
      let newObj = { ...prev, name: e.target.value };
      return newObj;
    });
  };
  const changeMail = (e) => {
    setRegInfo((prev) => {
      let newObj = { ...prev, mail: e.target.value };
      return newObj;
    });
  };
  const regSubmit = (e) => {
    e.preventDefault();
    if (
      regInfo.nickname == "" ||
      regInfo.pass1 == "" ||
      regInfo.pass2 == "" ||
      regInfo.name == "" ||
      regInfo.mail == ""
    ) {
      setErr(true);
    } else {
      setErr(false);
      setRegInfo({
        nickname: "",
        pass1: "",
        pass2: "",
        name: "",
        mail: "",
      });
    }
  };
  return (
    <>
      <div className="container">
        <h2 className="reg_title">{words.title}</h2>
        <form className="reg_form">
          <p className={err ? "" : "dnone"}>{words.allInput}</p>
          <input
            type="text"
            value={regInfo.nickname}
            onChange={changeNickname}
            placeholder={words.namePlace}
          />
          <label>
            <input
              type="text"
              value={regInfo.pass1}
              onChange={changePass1}
              placeholder={words.passPlace1}
            />
            <img src="/icons/pass.svg" alt="" />
          </label>
          <label>
            <input
              type="text"
              value={regInfo.pass2}
              onChange={changePass2}
              placeholder={words.passPlace2}
            />
            <img src="/icons/pass.svg" alt="" />
          </label>
          <input
            type="text"
            value={regInfo.name}
            onChange={changeName}
            placeholder={words.fullname}
          />
          <input
            type="email"
            value={regInfo.mail}
            onChange={changeMail}
            placeholder={words.mailPlace}
          />
          <div className="registration_btn" onClick={regSubmit}>
            {words.reg}
          </div>
          <img
            src="/data/homeImages/left_top.png"
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
export default connect(t)(Registration);
