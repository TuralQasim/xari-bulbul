import React from "react";
import { connect } from "react-redux";
import { useState } from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { GrZoomIn, GrZoomOut } from "react-icons/gr";

function ZoomSlider({ id, images }) {
  const image = [...images.find((a) => a.id == id).src];
  const [imagesrc, setImagesrc] = useState(image[0]);
  const changeImage = (e) => {
    setImagesrc(e.target.name);
  };
  return (
    <div className="zoom_slider">
      <TransformWrapper
        initialScale={1}
        initialPositionX={0}
        initialPositionY={0}
      >
        {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
          <React.Fragment>
            <div className="tools">
              <button onClick={() => zoomIn()}>
                <GrZoomIn />
              </button>
              <button onClick={() => zoomOut()}>
                <GrZoomOut />
              </button>
              <button onClick={() => resetTransform()}>RESET</button>
            </div>
            <TransformComponent>
              <img src={imagesrc} alt="" />
            </TransformComponent>
          </React.Fragment>
        )}
      </TransformWrapper>
      <div className="slider_images">
        {image.map((a) => {
          return <img key={a} src={a} alt="" name={a} onClick={changeImage} />;
        })}
      </div>
    </div>
  );
}

const t = (a) => a;
export default connect(t)(ZoomSlider);
