import { Pagination, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Link } from "react-router-dom";

export default ({ words }) => {
  return (
    <Swiper
      className="swiper"
      modules={[Pagination, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      pagination={{ clickable: true }}
    >
      <SwiperSlide>
        <div className="swiper_slide_bg">
          <div className="swiper_hero container">
            <h1>{words.swipperH1}</h1>
            <p>{words.swipperP}</p>
            <Link to="/catalog">{words.swipperBtn}</Link>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="swiper_slide_bg">
          <div className="swiper_hero container">
            <h1>{words.swipperH1}</h1>
            <p>{words.swipperP}</p>
            <Link to="/catalog">{words.swipperBtn}</Link>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="swiper_slide_bg">
          <div className="swiper_hero container">
            <h1>{words.swipperH1}</h1>
            <p>{words.swipperP}</p>
            <Link to="/catalog">{words.swipperBtn}</Link>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="swiper_slide_bg">
          <div className="swiper_hero container">
            <h1>{words.swipperH1}</h1>
            <p>{words.swipperP}</p>
            <Link to="/catalog">{words.swipperBtn}</Link>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};
