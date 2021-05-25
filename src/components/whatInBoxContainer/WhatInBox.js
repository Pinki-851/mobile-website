import React from "react";

const WhatInBox = (props) => {
  const { boxData } = props;
  return (
    <div className="what_in_box">
      <div className="box_image">
        <img src={boxData.boxImg} alt="whatInBoxImage" />
      </div>
      <p className="black_text">{boxData.productName}</p>
    </div>
  );
};

export default WhatInBox;
