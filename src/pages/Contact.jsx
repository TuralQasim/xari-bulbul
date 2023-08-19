import React from "react";
import { Link } from "react-router-dom";
import Map from "../components/Map";
import { useState } from "react";
import { connect } from "react-redux";
import { GrFormClose } from "react-icons/gr";
import { AnimatePresence, motion } from "framer-motion";
import ScrollTop from "../components/ScrollTop";

function Contact({ dispatch, dinWords }) {
  const words = dinWords.contact;
  const [inputData, setInputData] = useState({
    name: "",
    email: "",
    text: "",
    checked: false,
  });
  const [contModal, setContModal] = useState(false);
  function disableScroll() {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    var scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
    window.onscroll = function () {
      window.scrollTo(scrollLeft, scrollTop);
    };
  }
  function enableScroll() {
    window.onscroll = null;
  }
  if (contModal) {
    disableScroll();
  } else {
    enableScroll();
  }
  const [warn, setWarn] = useState(false);
  const nameChange = (e) => {
    setInputData((prev) => {
      let newObj = { ...prev, name: e.target.value };
      return newObj;
    });
  };
  const emailChange = (e) => {
    setInputData((prev) => {
      let newObj = { ...prev, email: e.target.value };
      return newObj;
    });
  };
  const textChange = (e) => {
    setInputData((prev) => {
      let newObj = { ...prev, text: e.target.value };
      return newObj;
    });
  };
  const checkedchange = (e) => {
    if (e.target.checked) {
      setInputData((prev) => {
        let newObj = { ...prev, checked: true };
        return newObj;
      });
    } else {
      setInputData((prev) => {
        let newObj = { ...prev, checked: false };
        return newObj;
      });
    }
  };
  const checkData = () => {
    if (
      inputData.name == "" ||
      inputData.email == "" ||
      inputData.text == "" ||
      inputData.checked == false
    ) {
      setWarn(true);
    } else {
      setWarn(false);
      dispatch({
        type: "RECALL_INFO",
        payload: inputData,
      });
      setContModal(true);
      setInputData({
        name: "",
        email: "",
        text: "",
        checked: false,
      });
    }
  };
  const closeModal = () => {
    setContModal(false);
  };
  return (
    <>
      <img src="./data/bg/bg_right.png" className="bg_right" alt="" />
      <div className="container">
        <h2 className="contact_title">{words.title}</h2>
        <div className="contact_shop">
          <div className="contact_shop_left">
            <h2>{words.shop}</h2>
          </div>
          <div className="contact_shop_right">
            <div className="contact_phones">
              <h4>{words.phone}</h4>
              <ul className="phones">
                <li>
                  <img src="./icons/phone.svg" alt="" />
                  <Link to="tel:80297177888">051-683-00-63</Link>
                </li>
                <li>
                  <img src="./icons/phone.svg" alt="" />
                  <Link to="tel:80297177888">051-683-00-63</Link>
                </li>
                <li>
                  <img src="./icons/phone.svg" alt="" />
                  <Link to="tel:80447833777">051-683-00-63</Link>
                </li>
              </ul>
            </div>
            <div className="skype">
              <h4>Skype</h4>
              <Link to="/">xaribulbul</Link>
            </div>
            <p>{words.can}</p>
            <p>Zerife Eliyeva 23, Baku, Azerbaijan</p>
            <Map />
          </div>
        </div>
        <div className="contact_form">
          <div className="contact_form_left">
            <h2>{words.questions}</h2>
            <h2>{words.write}</h2>
          </div>
          <form className="contact_form_right">
            <input
              placeholder="Введите ваше имя"
              type="text"
              name={inputData.name}
              value={inputData.name}
              onChange={nameChange}
            />
            <input
              placeholder="Введите вашу электронную почту"
              type="email"
              name={inputData.email}
              onChange={emailChange}
              value={inputData.email}
            />
            <textarea
              placeholder="Введите ваше сообщение"
              name={inputData.text}
              onChange={textChange}
              value={inputData.text}
            ></textarea>
            <label>
              <input type="checkbox" onChange={checkedchange} />
              <h4>
                {words.agree} <Link>{words.check}</Link>
              </h4>
            </label>
            <button type="button" onClick={checkData}>
              {words.send}
            </button>
            <h4 className={warn ? "warn" : "dnone"}>{words.allInput}</h4>
          </form>
        </div>
        <div className="rekvizit">
          <div className="rekvizit_left">
            <h2>{words.rekvizit}</h2>
          </div>
          <div className="rekvizit_right">
            <p>{words.ooo}</p>
            <p>{words.unp}</p>
            <p>{words.address}</p>
            <p>{words.adress2}</p>
          </div>
        </div>
      </div>
      {contModal && (
        <div className="contact_modal_bg" onClick={closeModal}>
          <AnimatePresence>
            <motion.div
              initial={{
                scale: 0.7,
                opacity: 0,
              }}
              animate={{
                scale: 1,
                opacity: 1,
              }}
              exit={{
                scale: 0.7,
                opacity: 0,
              }}
              className="contact_modal"
              onClick={(e) => e.stopPropagation()}
            >
              <img src="./data/homeImages/left_top.png" alt="" />
              <h2>{words.thank}</h2>
              <GrFormClose onClick={closeModal} />
            </motion.div>
          </AnimatePresence>
        </div>
      )}
      <ScrollTop />
    </>
  );
}

const t = (a) => a;
export default connect(t)(Contact);
