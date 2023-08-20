import { Link, useParams } from "react-router-dom";
import { connect } from "react-redux";
import { useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import AccordionList from "../containers/AccordionList";
import ZoomSlider from "../components/ZoomSlider";
import Product from "../components/Product";
import Map from "../components/Map";
import AddReview from "../components/AddReview";
import ReviewItem from "../components/ReviewItem";
import StarRating from "../components/StarRating";
import ReviewModal from "../components/ReviewModal";
import Lider from "../components/Lider";
import ScrollTop from "../components/ScrollTop";

function Details({
  products,
  reviews,
  reviewModal,
  dispatch,
  basket,
  dinWords,
  language
}) {
  const words = dinWords[language].details;
  let eightProd4 = [
    ...products.filter((a) => a.category_id == 2).slice(5, 6),
    ...products.filter((a) => a.category_id == 6).slice(1, 4),
  ];
  const { id } = useParams();
  let thisReviews = reviews.filter((a) => +a.product_id == id);
  let stars = thisReviews.map((a) => a.stars);
  const initialValue = 0;
  const sumWithInitial = stars.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue
  );
  let midleStar = Math.trunc(sumWithInitial / stars.length);
  const data = products.find((a) => a.id == id);
  const [reviewCount, setreviewCount] = useState([...thisReviews.slice(-3)]);
  const incCount = () => {
    dispatch({
      type: "INC_COUNT",
      payload: data.id,
    });
  };
  const decCount = () => {
    if (data.count > 1) {
      dispatch({
        type: "DEC_COUNT",
        payload: data.id,
      });
    }
  };
  let inBasket = basket.includes(data?.id);
  const addBasket = () => {
    if (basket.includes(data.id)) {
      dispatch({
        type: "DELETE_BASKET",
        payload: data.id,
      });
    } else {
      dispatch({
        type: "ADD_BASKET",
        payload: data.id,
      });
    }
  };
  return (
    <>
      <img src="./data/bg/bg_right.png" className="bg_right" alt="" />
      <div className="details container">
        <div className="details_slider">
          <ZoomSlider id={id} />
          <div className="description">
            <h3>{words.descrip}</h3>
            <p>{data.description}</p>
          </div>
        </div>
        <div className="details_check">
          <h2>{words.bouquet}</h2>
          <div className="view_stars">
            <StarRating rating={midleStar} />
            <p>
              {thisReviews.length} {words.review}
            </p>
          </div>
          <div className="description">
            <h3>{words.descrip}</h3>
            <p>{data.description} </p>
          </div>
          <div className="prices">
            <h2 className={data.discount ? "discount" : "dnone"}>
              {`${data.price * data.count - data.discount * data.count} р.`}
            </h2>
            <h2 className={data.discount ? "old_price" : "price"}>
              {`${Math.trunc(data.price * data.count)} р.`}
            </h2>
          </div>
          <div className="detail_operations">
            <div className="detail_count">
              <h3>{data.count}</h3>
              <div className="count_btns">
                <button onClick={incCount}>
                  <IoIosArrowUp />
                </button>
                <button onClick={decCount}>
                  <IoIosArrowDown />
                </button>
              </div>
            </div>
            <button className="order_btn">{words.order}</button>
            <button className="buy_btn" onClick={addBasket}>
              {inBasket ? `${words.inBasket}` : `${words.addBasket}`}
            </button>
            <button className="favBtn">
              <img src="./icons/addFav.svg" alt="" />
            </button>
          </div>
          <div className="oper_480">
            <button className="order_btn">Заказать</button>
            <button className="buy_btn" onClick={addBasket}>
              {inBasket ? `${words.inBasket}` : `${words.addBasket}`}
            </button>
          </div>
          <AccordionList data={data} words={words} />
          <div className="details_icons">
            <Link to="http/tiktok">
              <img src="./icons/tiktokDetails.svg" alt="" />
            </Link>
            <Link to="http/vk.ru">
              <img src="./icons/vkDetails.svg" alt="" />
            </Link>
            <Link to="http/youtube.com">
              <img src="./icons/youtubeDetails.svg" alt="" />
            </Link>
            <Link to="http/instagram.com">
              <img src="./icons/instagramDetails.svg" alt="" />
            </Link>
          </div>
        </div>
      </div>
      <div className="products_hero container">
        <div className="prod_title">
          <div className="prod_title_left">
            <h2>{words.withFlower}</h2>
          </div>
          <Link to="/catalog">
            {words.catalog} <img src="./icons/arrow_right.svg" alt="" />
          </Link>
        </div>
        <div className="products">
          {eightProd4.map((a) => {
            return <Product data={a} key={a.id} />;
          })}
        </div>
        <Link to="/catalog">
          {words.catalog} <img src="./icons/arrow_right.svg" alt="" />
        </Link>
      </div>
      <Lider />
      <AddReview id={id} />
      {reviewModal && <ReviewModal />}
      <div className="detail_reviews">
        <div className="reviews_hero">
          {reviewCount.map((a) => (
            <ReviewItem key={a.id} data={a} />
          ))}
        </div>
        <div className="reviews_btn container">
          <button
            className={reviewCount.length == 3 ? "" : "dnone"}
            onClick={() => setreviewCount(thisReviews)}
          >
            {words.else}
          </button>
        </div>
      </div>
      <Map />
      <ScrollTop />
    </>
  );
}

const t = (a) => a;
export default connect(t)(Details);
