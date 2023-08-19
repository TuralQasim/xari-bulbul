import StarRating from "../components/StarRating";

function ReviewItem({ data }) {
  let img = data.images.filter((a) => a != "");
  return (
    <>
      <div className="review_item container">
        <div className="user_img">
          <img src="/data/details/user.png" alt="" />
        </div>
        <div className="review_right">
          <div className="review_top">
            <h2 className="user_name">{data.user}</h2>
            <h3 className="review_date">{data.date}</h3>
            <div className="stars">
              <StarRating rating={data.stars} />
            </div>
          </div>
          <div className="review_bottom">
            <p>{data.content}</p>
            <div className="review_images">
              {img &&
                img.map((a) => {
                  return <img key={a} src={a} alt="" />;
                })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ReviewItem;
