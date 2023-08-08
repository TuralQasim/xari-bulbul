import React from "react";
import { FaStar } from "react-icons/fa";

const StarRating = ({ rating }) => {
  const stars = Array.from({ length: 5 }, (_, index) => (
    <FaStar key={index} className={index < rating ? "star filled" : "star"} />
  ));

  return <div className="star-rating">{stars}</div>;
};

export default StarRating;
