import React from "react";

const FooterPrice = (props) => {
  return (
    <div className="footer_price_container">
      <p className="footer_price_detail_secton">
        {props.productPrice.toLocaleString("en-US", {
          style: "currency",
          currency: "INR",
        })}{" "}
        <span className="blue_text">Price Detail</span>
      </p>

      <div className="footer_price_btn_section">
        <p className="red_text">ships within 2 days</p>
        <div className="footer_btn_container">
          <div className="card_btn_section">
            <p className="button">add to cart</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterPrice;
