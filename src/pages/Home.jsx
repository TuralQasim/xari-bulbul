import Swiper from "../components/Swiper";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Product from "../components/Product";
import HowWork from "../components/HowWork";
import Map from "../components/Map";
import Reviews from "../components/Reviews";
import ScrollTop from "../components/ScrollTop";
import Lider from "../components/Lider";

function Home({ categories, products, dinWords, language }) {
  let eightProd1 = products.filter((a) => a.category_id == 1).slice(0, 4);
  let eightProd3 = products.filter((a) => a.category_id == 8).slice(0, 4);
  let eightProd4 = [
    ...products.filter((a) => a.category_id == 2).slice(5, 6),
    ...products.filter((a) => a.category_id == 6).slice(1, 3),
    ...products.filter((a) => a.category_id == 2).slice(4, 5),
  ];
  const words = dinWords[language].home;
  return (
    <>
      <img src="./icons/flower_bg.svg" className="flower_bg" alt="" />
      <Swiper words={words} />
      <ul className="cats container">
        {categories.map((a) => (
          <li key={a.id}>
            <Link to="/catalog">
              {" "}
              <img src={a.category_icon} alt="" />
              <p>{a.category}</p>
            </Link>
          </li>
        ))}
      </ul>
      <div className="products_hero container">
        <div className="prod_title">
          <div className="prod_title_left">
            <h2>{words.prodTitle}</h2>
            <p>
              <span>*</span>
              {words.saleText}
            </p>
          </div>
          <Link to="/catalog">
            {words.catalogBtn} <img src="./icons/arrow_right.svg" alt="" />
          </Link>
        </div>
        <div className="products">
          {eightProd1.map((a) => {
            return <Product data={a} key={a.id} />;
          })}
        </div>
        <Link to="/catalog">
          {words.catalogBtn} <img src="./icons/arrow_right.svg" alt="" />
        </Link>
      </div>
      <Lider />
      <div className="products_hero container">
        <div className="prod_title">
          <div className="prod_title_left">
            <h2>{words.roseRecommend}</h2>
          </div>
          <Link to="/catalog">
            {words.catalogBtn} <img src="./icons/arrow_right.svg" alt="" />
          </Link>
        </div>
        <div className="products">
          {eightProd3.map((a) => {
            return <Product data={a} key={a.id} />;
          })}
        </div>
        <Link to="/catalog">
          {words.catalogBtn} <img src="./icons/arrow_right.svg" alt="" />
        </Link>
      </div>
      <div className="profitable_bg">
        <div className="profitable_title container">
          <h2>{words.withUs}</h2>
        </div>
        <div className="profitable container">
          <div className="profitable_item">
            <img src="./icons/profitable 1.svg" alt="" />
            <h2>{words.payOnSite}</h2>
            <p>{words.payP}</p>
          </div>
          <div className="profitable_item">
            <img src="./icons/profitable 2.svg" alt="" />
            <h2>{words.fastDelivery}</h2>
            <p>{words.deliveryP}</p>
          </div>
          <div className="profitable_item">
            <img src="./icons/profitable 3.svg" alt="" />
            <h2>{words.deliveryPlace}</h2>
            <p>{words.deliveryDay}</p>
          </div>
          <div className="profitable_item">
            <img src="./icons/profitable 4.svg" alt="" />
            <h2>{words.onlyFresh}</h2>
            <p>{words.onlyP}</p>
          </div>
          <div className="profitable_item">
            <img src="./icons/profitable 5.svg" alt="" />
            <h2>{words.tenYear}</h2>
            <p>{words.moreTen}</p>
          </div>
          <div className="profitable_item">
            <img src="./icons/profitable 6.svg" alt="" />
            <h2>{words.time}</h2>
            <p>{words.support}</p>
          </div>
        </div>
        <img
          src="./data/homeImages/right_top.png"
          alt=""
          className="right_top"
        />
        <img src="./data/homeImages/left_top.png" alt="" className="left_top" />
        <img
          src="./data/homeImages/left_down.png"
          alt=""
          className="left_down"
        />
      </div>
      <div className="products_hero container">
        <div className="prod_title">
          <div className="prod_title_left">
            <h2>{words.buyWithFlow}</h2>
          </div>
          <Link to="/catalog">
            {words.catalogBtn} <img src="./icons/arrow_right.svg" alt="" />
          </Link>
        </div>
        <div className="products">
          {eightProd4.map((a) => {
            return <Product data={a} key={a.id} />;
          })}
        </div>
        <Link to="/catalog">
          {words.catalogBtn} <img src="./icons/arrow_right.svg" alt="" />
        </Link>
      </div>
      <div className="only container">
        <h2 className="only_title">{words.onlyH2}</h2>
        <div className="only_hero">
          <div className="only_top">
            <img src="./data/homeImages/only1.png" alt="" />
            <ul>
              <li>{words.life}</li>
              <li>{words.if}</li>
            </ul>
          </div>
          <div className="only_down">
            <ul>
              <li>{words.forOrder}</li>
              <li>{words.romantic}</li>
            </ul>
            <img src="./data/homeImages/only2.png" alt="" />
          </div>
        </div>
      </div>
      <Reviews />
      <HowWork />
      <Map />
      <ScrollTop />
    </>
  );
}

const t = (a) => a;
export default connect(t)(Home);
