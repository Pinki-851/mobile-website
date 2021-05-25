import React, { useState } from "react";

const SpecialOffer = (props) => {
  const { specialOffer } = props;
  const [btnText, setBtnText] = useState("Add");
  return (
    <>
      <div
        className={
          props.specialOfferActiveIndex === props.index
            ? "special_offer_container active_class"
            : "special_offer_container"
        }
        onClick={props.onClick}
      >
        <div className="special_offer_detail_section">
          <div className="special_offer_img">
            <img src={specialOffer.productImage} alt="productImage" />
          </div>
          <div className="special_offer_price_section">
            <p className="off">{specialOffer.off} Off</p>
            <p className="product_name">{specialOffer.productName}</p>
            <p className="price">
              ₹{specialOffer.offerPrice}{" "}
              <span className="original_price">₹{specialOffer.price}</span>
            </p>
          </div>
        </div>
        <div
          className="btn_section"
          onClick={() => {
            btnText === "Add" ? setBtnText("remove") : setBtnText("Add");
          }}
        >
          {btnText}
        </div>
      </div>
    </>
  );
};

export default SpecialOffer;
