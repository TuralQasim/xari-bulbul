import { connect } from "react-redux";

function HowWork({ dinWords, language }) {
  const words = dinWords[language].howWork;
  return (
    <div className="how_work_bg">
      <div className="how_work container">
        <h2 className="how_title">{words.title}</h2>
        <div className="how_work_hero">
          <div className="how_work_item">
            <div className="how_top">
              <h2>01</h2>
              <h3>{words.order}</h3>
            </div>
            <p>{words.choose}</p>
          </div>
          <div className="how_work_item">
            <div className="how_top">
              <h2>02</h2>
              <h3>{words.pay}</h3>
            </div>
            <p>{words.menecer}</p>
          </div>
          <div className="how_work_item">
            <div className="how_top">
              <h2>03</h2>
              <h3>{words.delivery}</h3>
            </div>
            <p>{words.onTime}</p>
          </div>
          <div className="how_work_item">
            <div className="how_top">
              <h2>04</h2>
              <h3>{words.review}</h3>
            </div>
            <p>{words.beHappy}</p>
          </div>
        </div>
      </div>
      <img src="./data/homeImages/left_top.png" alt="" className="left_top2" />
      <img src="./data/homeImages/right_down.png" alt="" className="right_down" />
    </div>
  );
}

const t = (a) => a;
export default connect(t)(HowWork);
