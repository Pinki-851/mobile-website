import React, { useState, useEffect } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const AutoCarousel = (props) => {
  const [autoCarouselActiveIndex, setAutoCarouselActiveIndex] = useState(0);
  const length = props.productImg.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setAutoCarouselActiveIndex(
        autoCarouselActiveIndex === length - 1 ? 0 : autoCarouselActiveIndex + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [autoCarouselActiveIndex]);

  const nextSlide = () => {
    console.log(autoCarouselActiveIndex);
    setAutoCarouselActiveIndex(
      autoCarouselActiveIndex === length - 1 ? 0 : autoCarouselActiveIndex + 1
    );
  };
  const preSlide = () => {
    console.log(autoCarouselActiveIndex);
    setAutoCarouselActiveIndex(
      autoCarouselActiveIndex === 0 ? length - 1 : autoCarouselActiveIndex - 1
    );
  };
  return (
    <div className="slider_section auto">
      <div className="slider_arrow">
        <div className="slider_arrow_box" onClick={preSlide}>
          <IoIosArrowBack className="slider_left_arrow" />
        </div>
        <div className="slider_arrow_box" onClick={nextSlide}>
          <IoIosArrowForward className="slider_right_arrow" />
        </div>
      </div>

      {props.productImg.map((image, index) => {
        return (
          <div
            className={
              autoCarouselActiveIndex === index
                ? "slider auto active"
                : "inactive"
            }
            key={index}
          >
            <img src={image} alt="phone" className="sliderImg" key={index} />
          </div>
        );
      })}

      <div className="bullet_section auto">
        {props.productImg.map((image, index) => {
          return (
            <span
              className={
                autoCarouselActiveIndex === index
                  ? "bullet active_bullet"
                  : "bullet"
              }
              key={index}
              onClick={(event) => {
                setAutoCarouselActiveIndex((event.target.value = index));
              }}
            ></span>
          );
        })}
      </div>
    </div>
  );
};

export default AutoCarousel;
