import React from "react";
import { Link } from "react-router-dom";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

const Accordion = ({ title, imgSrc, open, details, onChange, words }) => {
  const handleChange = () => {
    if (open == title) onChange("");
    else onChange(title);
  };

  return (
    <div className="detail_accardion">
      <button onClick={handleChange}>
        <img src={imgSrc} alt="" />
        <h3>{title}</h3>
        {open == title ? <IoIosArrowUp /> : <IoIosArrowDown />}
      </button>
      <div className={open == title ? "deliveryItem" : "dnone"}>
        <p>{details}</p>
        {title != "Состав" ? <Link>{words.other}</Link> : ""}
      </div>
    </div>
  );
};

export default Accordion;
