import "swiper/css";
import "swiper/css/navigation";
import { connect } from "react-redux";
import StarRating from "../components/StarRating";
import { Link } from "react-router-dom";

function Reviews({ reviews, dinWords, language }) {
  const words = dinWords[language].reviewComp;
  const onlyFive = reviews.filter((a) => a.stars == 4).slice(1, 4);
  return (
    <div className="reviews ">
      <div className="review_title container">
        <h2>{words.title}</h2>
        <Link to="/reviews">
          {words.allReview} <img src="./icons/arrow_right.svg" alt="" />
        </Link>
      </div>
      <div className="review_hero container">
        {onlyFive.map((a) => {
          return (
            <div key={a.id} className="review1">
              <img src="data/homeImages/review1.png" alt="" />
              <h2 className="review_name">{a.user}</h2>
              <p>{a.content}</p>
              <StarRating rating={a.stars} />
            </div>
          );
        })}
      </div>
      <Link to="/reviews">
        {words.allReview} <img src="./icons/arrow_right.svg" alt="" />
      </Link>
    </div>
  );
}

const t = (a) => a;
export default connect(t)(Reviews);
