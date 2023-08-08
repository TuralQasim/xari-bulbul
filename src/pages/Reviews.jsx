import React from "react";
import AddReview from "../components/AddReview";
import { connect } from "react-redux";
import ReviewModal from "../components/ReviewModal";
import Map from "../components/Map";
import ReviewItem from "../components/ReviewItem";
import { useState } from "react";
import ScrollTop from "../components/ScrollTop";

function Reviews({ reviewModal, reviews, dinWords }) {
  const words = dinWords.review;
  const [reviewCount, setreviewCount] = useState([...reviews.slice(-3)]);
  return (
    <>
      {reviewModal && <ReviewModal words={words} />}
      <AddReview words={words} />
      <div className="detail_reviews">
        <div className="reviews_hero">
          {reviewCount.map((a) => (
            <ReviewItem key={a.id} data={a} />
          ))}
        </div>
        <div className="reviews_btn container">
          <button
            className={reviewCount.length == 3 ? "" : "dnone"}
            onClick={() => setreviewCount(reviews)}
          >
            {words.elseBtn}
          </button>
        </div>
      </div>
      <Map />
      <ScrollTop />
    </>
  );
}

const t = (a) => a;
export default connect(t)(Reviews);
