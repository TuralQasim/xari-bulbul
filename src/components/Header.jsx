import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link, NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrFormClose } from "react-icons/gr";
import { IoMdArrowDropdown } from "react-icons/io";
import { GoLocation } from "react-icons/go";
import SearchItem from "./SearchItem";

function Header({ dispatch, basket, products, staticWords, searchWord }) {
  const [lang, setLang] = useState("AZ");
  const words = staticWords[`${lang}`].header;
  const [city, setcity] = useState(words.may28);
  const [showlang, setshowlang] = useState(false);
  const [showCity, setshowCity] = useState(false);
  const [burger, setburger] = useState(false);
  const [contact768, setcontact768] = useState(false);
  const changeCity = (e) => {
    setcity(e.target.textContent);
    setshowCity(false);
  };
  useEffect(() => {
    burger
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "unset");
  }, [burger]);
  const changeLang = (e) => {
    setLang(e.target.textContent);
    setshowlang(false);
    dispatch({
      type: "CHANGE_LANG",
      payload: e.target.dataset.value,
    });
    dispatch({
      type: "LOAD",
      payload: true,
    });
  };
  const [searchValue, setSearchValue] = useState("");
  const changeValue = (e) => {
    dispatch({
      type: "SEARCH_WORD",
      payload: "",
    });
    setSearchValue(e.target.value);
  };
  let searchProd = products.filter((a) => {
    if (searchWord) {
      return a.title.includes(searchWord);
    } else {
      return a.title.includes(searchValue);
    }
  });
  return (
    <header>
      <div className="navbar_header container">
        <Link className="logo" to="/">
          <img src="/icons/logo1.png" alt="" />
        </Link>
        <div className="cityes">
          <div className="city_dropdown">
            <img className="location_icon" src="/icons/location.svg" alt="" />
            <h4 className="active_city" onClick={() => setshowCity(!showCity)}>
              {city}
            </h4>
            <img
              className={showCity ? "rotate" : ""}
              src="/icons/arrow_down.svg"
              alt=""
            />
            <AnimatePresence>
              {showCity && (
                <motion.ul
                  initial={{
                    y: 20,
                    opacity: 0,
                  }}
                  animate={{
                    y: 0,
                    opacity: 1,
                  }}
                  exit={{
                    y: 20,
                    opacity: 0,
                  }}
                  onClick={changeCity}
                >
                  <li>{words.may28}</li>
                  <li>{words.genclik}</li>
                  <li>{words.nerimanov}</li>
                </motion.ul>
              )}
            </AnimatePresence>
          </div>
        </div>
        <div className="contacts_768">
          <img src="/icons/phone.svg" alt="" />
          <h4
            className="phone_dropdown"
            onClick={() => setcontact768(!contact768)}
          >
            {words.nomre}
          </h4>
          <img
            src="/icons/arrow_down.svg"
            className={contact768 ? "rotate" : ""}
            style={{ transition: "0.4s" }}
            alt=""
          />
          <AnimatePresence>
            {contact768 && (
              <motion.ul
                initial={{
                  y: 20,
                  opacity: 0,
                }}
                animate={{
                  y: 0,
                  opacity: 1,
                }}
                exit={{
                  y: 20,
                  opacity: 0,
                }}
              >
                <li>
                  <Link to="tel:80257177888">{words.nomre}</Link>
                </li>
                <li>
                  <Link to="tel:80447833777">{words.nomre}</Link>
                </li>
              </motion.ul>
            )}
          </AnimatePresence>
        </div>
        <ul className="navbar">
          <li className="shop_dropdown">
            {" "}
            <NavLink to="/about">
              {words.haqqinda} <img src="/icons/arrow_down.svg" alt="" />
            </NavLink>
            <ul>
              <li>
                <NavLink to="/organizations">{words.teshkilatlar}</NavLink>
              </li>
              <li>
                <NavLink to="/reviews">{words.reyler}</NavLink>
              </li>
            </ul>
          </li>
          <li className="delivery_dropdown">
            {" "}
            <NavLink to="/delivery">
              {words.catdirilma} <img src="/icons/arrow_down.svg" alt="" />
            </NavLink>
            <ul>
              <li>
                <NavLink to="/pay">{words.odeme}</NavLink>
              </li>
              <li>
                <NavLink to="/guarantee">{words.zemanet}</NavLink>
              </li>
              <li>
                <NavLink to="/refund">{words.qaytarilma}</NavLink>
              </li>
            </ul>
          </li>
          <li>
            <NavLink to="blog">{words.blog}</NavLink>
          </li>
          <li>
            <NavLink to="/catalog">{words.catalog}</NavLink>
          </li>
          <li className="contact_dropdown">
            <NavLink to="/contact">
              {words.elaqe} <img src="/icons/arrow_down.svg" alt="" />
            </NavLink>
            <ul>
              <li>
                <NavLink to="/help">{words.komek}</NavLink>
              </li>
            </ul>
          </li>
        </ul>
        <div className="delivery">
          <h3>{words.catdirilma}</h3>
          <div className="delivery_time">
            <p>
              {words.gunler1} <br />
              {words.gunler2}
            </p>
          </div>
        </div>
        <div className="contact_icons">
          <Link to="instagram.com">
            <img src="/icons/instagram.svg" alt="" />
          </Link>
          <Link to="vkontakte.com">
            <img src="/icons/vkontakte.svg" alt="" />
          </Link>
          <Link to="telegram.com">
            <img src="/icons/telegram.svg" alt="" />
          </Link>
          <Link to="whatsapp.com">
            <img src="/icons/whatsapp.svg" alt="" />
          </Link>
        </div>
        <Link className="optom" to="/organizations">
          {words.topdan}
        </Link>
        <div className="lang_dropdown">
          <h4 onClick={() => setshowlang(!showlang)}>{lang}</h4>
          <img
            className={showlang ? "rotate" : ""}
            src="/icons/arrow_down.svg"
            alt=""
          />
          <AnimatePresence>
            {showlang && (
              <motion.ul
                onClick={changeLang}
                initial={{
                  y: 20,
                  opacity: 0,
                }}
                animate={{
                  y: 0,
                  opacity: 1,
                }}
                exit={{
                  y: 20,
                  opacity: 0,
                }}
              >
                <li data-value="EN">EN</li>
                <li data-value="RU">RU</li>
                <li data-value="AZ">AZ</li>
              </motion.ul>
            )}
          </AnimatePresence>
        </div>
      </div>
      <div className="header_bg">
        <div className="header container">
          <div className="burger_menu">
            <GiHamburgerMenu
              className="burger_icon"
              onClick={() => setburger(!burger)}
            />
            <AnimatePresence>
              {burger && (
                <motion.div
                  className="burger_dropdown"
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
                >
                  <Link className="optom_burger" to="/organizations">
                    {words.topdan}
                  </Link>
                  <GrFormClose
                    style={{ color: "#fff" }}
                    className="close_btn"
                    onClick={() => setburger(false)}
                  />
                  <div className="navbars_resp">
                    <ul className="respon_navbar1">
                      <li>
                        <NavLink to="/" onClick={() => setburger(false)}>
                          {words.home}
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/about" onClick={() => setburger(false)}>
                          {words.haqqinda}
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/organizations"
                          onClick={() => setburger(false)}
                        >
                          {words.teshkilatlar}
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/delivery"
                          onClick={() => setburger(false)}
                        >
                          {words.catdirilma}
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/pay" onClick={() => setburger(false)}>
                          {words.odeme}
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/guarantee"
                          onClick={() => setburger(false)}
                        >
                          {words.zemanet}
                        </NavLink>
                      </li>
                    </ul>
                    <ul className="respon_navbar2">
                      <li>
                        <NavLink to="/catalog" onClick={() => setburger(false)}>
                          {words.catalog}
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/refund" onClick={() => setburger(false)}>
                          {words.qaytarilma}
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/blog" onClick={() => setburger(false)}>
                          {words.blog}
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/reviews" onClick={() => setburger(false)}>
                          {words.reyler}
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/contact" onClick={() => setburger(false)}>
                          {words.elaqe}
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/help" onClick={() => setburger(false)}>
                          {words.komek}
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                  <div className="contact_icons">
                    <Link to="instagram.com">
                      <img src="/icons/white_instagram.svg" alt="" />
                    </Link>
                    <Link to="vk.ru">
                      <img src="/icons/white_vkontakte.svg" alt="" />
                    </Link>
                    <Link to="telegram.com">
                      <img src="/icons/white_telegram.svg" alt="" />
                    </Link>
                    <Link to="whatsapp.com">
                      <img src="/icons/white_whatsapp.svg" alt="" />
                    </Link>
                  </div>
                  <div className="dropdowns">
                    <div className="cityes">
                      <div className="city_dropdown">
                        <GoLocation
                          style={{ color: "white", marginRight: "10px" }}
                        />
                        <h4
                          className="active_city"
                          onClick={() => setshowCity(!showCity)}
                        >
                          {city}
                        </h4>
                        <IoMdArrowDropdown
                          style={{ color: "white", transition: "0.4s" }}
                          className={showCity ? "rotate" : ""}
                        />
                        <AnimatePresence>
                          {showCity && (
                            <motion.ul
                              initial={{
                                y: 20,
                                opacity: 0,
                              }}
                              animate={{
                                y: 0,
                                opacity: 1,
                              }}
                              exit={{
                                y: 20,
                                opacity: 0,
                              }}
                              onClick={changeCity}
                            >
                              <li>{words.may28}</li>
                              <li>{words.genclik}</li>
                              <li>{words.nerimanov}</li>
                            </motion.ul>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                    <div className="lang_dropdown">
                      <h4 onClick={() => setshowlang(!showlang)}>{lang}</h4>
                      <IoMdArrowDropdown
                        style={{ color: "#fff", transition: "0.4s" }}
                        className={showlang ? "rotate" : ""}
                      />
                      <AnimatePresence>
                        {showlang && (
                          <motion.ul
                            onClick={changeLang}
                            initial={{
                              y: 20,
                              opacity: 0,
                            }}
                            animate={{
                              y: 0,
                              opacity: 1,
                            }}
                            exit={{
                              y: 20,
                              opacity: 0,
                            }}
                          >
                            <li data-value="en-EN">EN</li>
                            <li data-value="ru-RU">RU</li>
                            <li data-value="az-AZ">AZ</li>
                          </motion.ul>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <Link className="logo" to="/">
            <img src="/icons/logo1.png" alt="" />
          </Link>
          <div className="contacts">
            <div className="contacts_item">
              <img src="/icons/phone.svg" alt="" />
              <Link to="tel:0516830063">{words.nomre}</Link>
            </div>
            <div className="contacts_item">
              <img src="/icons/phone.svg" alt="" />
              <Link to="tel:0516830063">{words.nomre}</Link>
            </div>
            <div className="contacts_item">
              <img src="/icons/phone.svg" alt="" />
              <Link to="tel:0516830063">{words.nomre}</Link>
            </div>
          </div>
          <div className="responsive_contacts">
            <img src="/icons/phone.svg" alt="" />
            <Link to="tel:0516830063" className="phone_dropdown">
              {words.nomre}
            </Link>
            <ul>
              <li>
                <Link to="tel:0516830063">{words.nomre}</Link>
              </li>
              <li>
                <Link to="tel:0516830063">{words.nomre}</Link>
              </li>
            </ul>
            <img src="/icons/arrow_down.svg" alt="" />
          </div>
          <div className="search_input">
            <input
              type="text"
              value={searchValue}
              onChange={changeValue}
              placeholder={`${words.searchInputPlaceholder}`}
            />
            <img src="/icons/search.svg" alt="" />
            {searchValue.length || searchWord ? (
              <div className="search_dropdown">
                {searchProd.length ? (
                  searchProd.map((a) => (
                    <SearchItem
                      name="item"
                      setSearchValue={setSearchValue}
                      key={a.id}
                      data={a}
                    />
                  ))
                ) : (
                  <h2>{words.searchInputNotFound}</h2>
                )}
              </div>
            ) : (
              ""
            )}
          </div>
          <div className="login">
            <Link to="/login">
              <img src="/icons/user.svg" alt="" />
            </Link>
            <Link to="/favorites">
              <img src="/icons/favorite.svg" alt="" />
            </Link>
            <Link className="basket" to="/basket">
              <img src="/icons/basket.svg" alt="" />
              <h4 className={basket.length ? "basket_around" : ""}>
                {basket.length ? `(${basket.length})` : "(0)"}
              </h4>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

const t = (a) => a;
export default connect(t)(Header);
