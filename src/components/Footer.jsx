import { NavLink, Link } from "react-router-dom";
import { connect } from "react-redux";
import { useState } from "react";
import { GrFormClose } from "react-icons/gr";
import { AnimatePresence, motion } from "framer-motion";

function Footer({ categories, staticWords, language }) {
  const words = staticWords[`${language}`].footer;
  const [footModal, setFootModal] = useState(false);
  const [value, setValue] = useState("");
  const [place, setPlace] = useState(false);
  const checkValue = () => {
    if (value != "") {
      setFootModal(true);
      setValue("");
      setPlace(false);
    } else {
      setPlace(true);
    }
  };
  return (
    <div className="footer_bg">
      {footModal && (
        <div className="foot_modal_bg">
          <div
            className="foot_overlay"
            onClick={() => setFootModal(false)}
          ></div>
          <AnimatePresence>
            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
              }}
              className="foot_modal"
            >
              <GrFormClose onClick={() => setFootModal(false)} />
              <h2>Спасибо. Мы скоро свяжемся с вами</h2>
              <img src="./xari-bulbul/data/homeImages/left_top.png" alt="" />
              <img src="./xari-bulbul/data/homeImages/right_down.png" alt="" />
            </motion.div>
          </AnimatePresence>
        </div>
      )}
      <div className="container">
        <footer>
          <div className="foot_1">
            <img src="./xari-bulbul/icons/logo1.png" alt="" />
            <div className="foot_480">
              <div className="foot_contact">
                <div className="foot_contact_item">
                  <img src="./xari-bulbul/icons/phone.svg" alt="" />
                  <Link to="tel:0516830063">0516830063</Link>
                </div>
                <div className="foot_contact_item">
                  <img src="./xari-bulbul/icons/phone.svg" alt="" />
                  <Link to="tel:0516830063">0516830063</Link>
                </div>
                <div className="foot_contact_item">
                  <img src="./xari-bulbul/icons/phone.svg" alt="" />
                  <Link to="tel:0516830063">0516830063</Link>
                </div>
              </div>
              <div className="foot_info">
                <p>{words.unvan}</p>
                <Link to="mailto:xaribulbul@mail.ru">xaribulbul@mail.ru</Link>
                <p>
                  {words.gunler1} <br />
                  {words.gunler2}
                </p>
              </div>
            </div>
            <div className="foot_icons">
              <Link>
                <img src="./xari-bulbul/icons/white_instagram.svg" alt="" />
              </Link>
              <Link>
                <img src="./xari-bulbul/icons/white_vkontakte.svg" alt="" />
              </Link>
              <Link>
                <img src="./xari-bulbul/icons/white_telegram.svg" alt="" />
              </Link>
              <Link>
                <img src="./xari-bulbul/icons/white_whatsapp.svg" alt="" />
              </Link>
            </div>
          </div>
          <ul className="foot_2">
            {categories.map((a) => {
              return (
                <li key={a.id}>
                  <Link to="/catalog">{a.category}</Link>
                </li>
              );
            })}
          </ul>
          <ul className="foot_3">
            <li>
              <NavLink to="/about">{words.haqqinda}</NavLink>
            </li>
            <li>
              <NavLink to="/organizations">{words.teshkilatlar}</NavLink>
            </li>
            <li>
              <NavLink to="/delivery">{words.catdirilma}</NavLink>
            </li>
            <li>
              <NavLink to="/pay">{words.odeme}</NavLink>
            </li>
            <li>
              <NavLink to="/guarantee">{words.zemanet}</NavLink>
            </li>
            <li>
              <NavLink to="/refund">{words.qaytarilma}</NavLink>
            </li>
            <li>
              <NavLink to="/blog">{words.blog}</NavLink>
            </li>
            <li>
              <NavLink to="/reviews">{words.reyler}</NavLink>
            </li>
            <li>
              <NavLink to="/reviews">{words.elaqe}</NavLink>
            </li>
            <li>
              <NavLink to="/help">{words.komek}</NavLink>
            </li>
          </ul>
          <div className="foot_4">
            <form>
              <p>{words.enYeni}</p>
              <label>
                <input
                  type="text"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  placeholder={place ? words.place : words.mailInput}
                />
                <button type="button" onClick={checkValue}>
                  {words.abune}
                </button>
              </label>
            </form>
            <div className="foot_info">
              <p>{words.unvan}</p>
              <Link to="mailto:xaribulbul@mail.ru">xaribulbul@mail.ru</Link>
              <p>
                {words.gunler1} <br />
                {words.gunler2}
              </p>
            </div>
          </div>
        </footer>
        <div className="follow">
          <div className="foot_icons">
            <Link>
              <img src="./xari-bulbul/icons/white_instagram.svg" alt="" />
            </Link>
            <Link>
              <img src="./xari-bulbul/icons/white_vkontakte.svg" alt="" />
            </Link>
            <Link>
              <img src="./xari-bulbul/icons/white_telegram.svg" alt="" />
            </Link>
            <Link>
              <img src="./xari-bulbul/icons/white_whatsapp.svg" alt="" />
            </Link>
          </div>
          <form>
            <p>{words.enYeni}</p>
            <label>
              <input
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder={place ? words.place : words.mailInput}
              />
              <button onClick={checkValue} type="button">
                {words.abune}
              </button>
            </label>
          </form>
        </div>
      </div>
    </div>
  );
}

const t = (a) => a;
export default connect(t)(Footer);
