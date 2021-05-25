import React from "react";

const Colorcard = (props) => {
  const { color } = props;
  return (
    <div
      className={
        props.colorActiveIndex === props.index
          ? "color_card_container active_class"
          : "color_card_container"
      }
      onClick={props.onClick}
    >
      <p>{color.colorName}</p>
      <div className="color_img_container">
        <img src={color.img} alt="colorImage" />
      </div>
    </div>
  );
};

export default Colorcard;
