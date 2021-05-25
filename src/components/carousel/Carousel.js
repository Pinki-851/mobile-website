import React, { useState } from "react";

const Carousel = (props) => {
  const [carouselActiveIndex, setCarouselActiveIndex] = useState(0);

  return (
    <>
      <div className="carousel_container">
        <div className="small_image_section">
          <ul>
            {props.productImg.map((image, index) => {
              return (
                <li
                  style={{
                    backgroundImage: `url(${image})`,
                  }}
                  key={index}
                  onClick={(event) => {
                    setCarouselActiveIndex((event.target.value = index));
                  }}
                ></li>
              );
            })}
          </ul>
        </div>
        <div className="slider_section">
          {props.productImg.map((image, index) => {
            return (
              <div
                className={
                  carouselActiveIndex === index ? "slider active" : "inactive"
                }
                key={index}
              >
                <img
                  src={image}
                  alt="phone"
                  className="sliderImg"
                  key={index}
                />
              </div>
            );
          })}
          <div className="bullet_section">
            {props.productImg.map((image, index) => {
              return (
                <span
                  className={
                    carouselActiveIndex === index
                      ? "bullet active_bullet"
                      : "bullet"
                  }
                  key={index}
                  onClick={(event) => {
                    setCarouselActiveIndex((event.target.value = index));
                  }}
                ></span>
              );
            })}
          </div>
          <p className="blue_text">Check delivery at your Pincode</p>
        </div>
      </div>
    </>
  );
};

export default Carousel;
