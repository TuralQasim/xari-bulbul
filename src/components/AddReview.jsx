import { Rating } from "react-simple-star-rating";
import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { connect } from "react-redux";

function AddReview({ id, reviewModal, dispatch, dinWords }) {
  const words = dinWords.review;
  const [name, setName] = useState({
    value: "",
    isError: "",
  });
  const [email, setEmail] = useState({
    value: "",
    isError: "",
  });
  const [content, setContent] = useState({
    value: "",
    isError: "",
  });
  const [ratingValue, setRatingValue] = useState({
    value: 0,
    isError: "",
  });
  const [fileImages1, setFileImages1] = useState("");
  const [fileImages2, setFileImages2] = useState("");
  const [fileImages3, setFileImages3] = useState("");
  const [fileImages4, setFileImages4] = useState("");
  const handleRating = (rate) => {
    setRatingValue({
      value: rate,
      isError: "",
    });
  };
  const changeName = (e) => {
    setName((prev) => {
      let newObj = { ...prev, value: e.target.value };
      return newObj;
    });
  };
  const changeEmail = (e) => {
    setEmail((prev) => {
      let newObj = { ...prev, value: e.target.value };
      return newObj;
    });
  };
  const changeContent = (e) => {
    setContent((prev) => {
      let newObj = { ...prev, value: e.target.value };
      return newObj;
    });
  };
  const convertToBase64 = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      if (!fileImages1) {
        setFileImages1(reader.result.toString());
      } else if (!fileImages2) {
        setFileImages2(reader.result.toString());
      } else if (!fileImages3) {
        setFileImages3(reader.result.toString());
      } else {
        setFileImages4(reader.result.toString());
      }
    };
    reader.readAsDataURL(file);
  };
  let today = new Date();
  let day = String(today.getDate()).padStart(2, "0");
  let month = String(today.getMonth() + 1).padStart(2, "0");
  let year = today.getFullYear();
  let currentDate = day + "." + month + "." + year;
  const postReview = () => {
    if (ratingValue.value == "") {
      setRatingValue((prev) => {
        let newObj = { ...prev, isError: true };
        return newObj;
      });
    } else if (name.value == "") {
      setName((prev) => {
        let newObj = { ...prev, isError: true };
        return newObj;
      });
    } else if (email.value == "") {
      setEmail((prev) => {
        let newObj = { ...prev, isError: true };
        return newObj;
      });
    } else if (content.value == "") {
      setContent((prev) => {
        let newObj = { ...prev, isError: true };
        return newObj;
      });
    } else {
      fetch("http://localhost:3000/reviews", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          product_id: id,
          stars: ratingValue.value,
          user: name.value,
          email: email.value,
          content: content.value,
          images: [fileImages1, fileImages2, fileImages3, fileImages4],
          data: currentDate,
        }),
      })
        .then((response) => response.json())
        .then((data) => data)
        .catch((error) => {
          console.error("Error:", error);
        });
      setRatingValue({
        value: 0,
        isError: "",
      });
      setFileImages1("");
      setFileImages2("");
      setFileImages3("");
      setFileImages4("");
      setName({
        value: "",
        isError: "",
      });
      setEmail({
        value: "",
        isError: "",
      });
      setContent({
        value: "",
        isError: "",
      });
      dispatch({
        type: "REVIEW_MODAL",
        payload: !reviewModal,
      });
    }
  };
  function disableScroll() {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    var scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
    window.onscroll = function () {
      window.scrollTo(scrollLeft, scrollTop);
    };
  }
  function enableScroll() {
    window.onscroll = null;
  }
  if (reviewModal) {
    disableScroll();
  } else {
    enableScroll();
  }

  return (
    <div className="add_review container">
      <div className="rev_stars">
        <p>{words.star} </p>
        <Rating onClick={handleRating} />
        <h5 className={ratingValue.isError ? "" : "dnone"}>
          {words.chooseStar}
        </h5>
      </div>
      <form>
        <input
          type="text"
          placeholder={
            name.isError ? `${words.importantPlace}` : `${words.namePlace}`
          }
          onChange={changeName}
          value={name.value}
          className={name.isError ? "red" : ""}
        />
        <input
          type="email"
          placeholder={
            email.isError ? `${words.importantPlace}` : `${words.mailPlace}`
          }
          value={email.value}
          onChange={changeEmail}
          className={email.isError ? "red" : ""}
        />
        <textarea
          cols="30"
          rows="10"
          placeholder={
            content.isError ? `${words.importantPlace}` : `${words.reviewPlace}`
          }
          value={content.value}
          onChange={changeContent}
          className={content.isError ? "red" : ""}
        ></textarea>
        <div className="add_images">
          <div className="add_img_hero">
            <div className="file_input">
              <input type="file" onChange={(e) => convertToBase64(e)} />
              <img src="../src/icons/camera.svg" alt="" />
            </div>
            <div className={fileImages1 ? "img_box" : "img_box orderminus"}>
              {fileImages1 ? (
                <div className="img_box_hero">
                  <img src={fileImages1} alt="" />
                  <div className="box_svg">
                    <FaTrashAlt onClick={() => setFileImages1("")} />
                  </div>
                </div>
              ) : (
                <p></p>
              )}
            </div>
            <div className={fileImages2 ? "img_box" : "img_box orderminus"}>
              {fileImages2 ? (
                <div className="img_box_hero">
                  <img src={fileImages2} alt="" />
                  <div className="box_svg">
                    <FaTrashAlt onClick={() => setFileImages2("")} />
                  </div>
                </div>
              ) : (
                <p></p>
              )}
            </div>
            <div className={fileImages3 ? "img_box" : "img_box orderminus"}>
              {fileImages3 ? (
                <div className="img_box_hero">
                  <img src={fileImages3} alt="" />
                  <div className="box_svg">
                    <FaTrashAlt onClick={() => setFileImages3("")} />
                  </div>
                </div>
              ) : (
                <p></p>
              )}
            </div>
            <div className={fileImages4 ? "img_box" : "img_box orderminus"}>
              {fileImages4 ? (
                <div className="img_box_hero">
                  <img src={fileImages4} alt="" />
                  <div className="box_svg">
                    <FaTrashAlt onClick={() => setFileImages4("")} />
                  </div>
                </div>
              ) : (
                <p></p>
              )}
            </div>
          </div>
          <p>{words.notMore}</p>
        </div>
        <button type="button" onClick={postReview}>
          {words.submitBtn}
        </button>
      </form>
    </div>
  );
}

const t = (a) => a;
export default connect(t)(AddReview);
