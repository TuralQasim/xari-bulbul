import React from "react";
import { useEffect, useState } from "react";

function ScrollTop() {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 350) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    });
  }, []);
  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      {scroll && (
        <button className="scrollTop" onClick={scrollUp}>
          <img src="src/icons/scroll.svg" alt="" />
        </button>
      )}
    </>
  );
}

export default ScrollTop;
