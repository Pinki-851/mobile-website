import React, { useState, useEffect } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { Redirect } from "react-router-dom";
import Carousel from "../carousel/Carousel";
import { connect } from "react-redux";
import Colorcard from "../colorSection/Colorcard";
import Capacity from "../capacity/Capacity";
import Security from "../securitycomponent/Security";
import SpecialOffer from "../specialoffer/SpecialOffer";
import Payment from "../paymentSection/Payment";
import AutoCarousel from "../carousel/AutoCarousel";
import WhatInBox from "../whatInBoxContainer/WhatInBox";
import FooterNav from "../footer/FooterNav";
import FooterPrice from "../footer/FooterPrice";
import FAQ from "../FAQsection/FAQ";

const ProductView = (props) => {
  // console.log(props);

  const [capacityActiveIndex, setCapacityActiveIndex] = useState(0);
  const [colorActiveIndex, setColorActiveIndex] = useState(0);
  const [specialOfferActiveIndex, setSpecialOfferActiveIndex] = useState();
  const [showMore, setShowMore] = useState(true);

  const showDownArrow = () => {
    document.getElementsByClassName("upArrow")[0].style.display = "block";
    document.getElementsByClassName("downArrow")[0].style.display = "none";
  };
  const showUpArrow = () => {
    document.getElementsByClassName("upArrow")[0].style.display = "none";
    document.getElementsByClassName("downArrow")[0].style.display = "block";
  };

  return (
    <>
      {!props.viewProductDetail ? (
        <Redirect to="/" />
      ) : (
        <div className="product_view_container">
          <header>
            <div className="product_name">
              {props.viewProductDetail.productName}
              <span className="header_icons">
                <IoIosArrowDown className="downArrow" onClick={showDownArrow} />
                <IoIosArrowUp className="upArrow" onClick={showUpArrow} />
              </span>
            </div>
            <div className="specs">Specs</div>
          </header>

          <main>
            <div className="carousel_section">
              <Carousel productImg={props.viewProductDetail.allImage} />
            </div>
            <div className="main_productDetail_section">
              <div className="first_section">
                <p> {props.viewProductDetail.productName}</p>
                <ul>
                  <li>{props.viewProductDetail.processor}</li>
                  <li>{props.viewProductDetail.design}</li>
                  <li> {props.viewProductDetail.display}</li>
                  <li>{props.viewProductDetail.charger}</li>
                </ul>
              </div>
              <div className="second_section">
                <ul>
                  <li>
                    <div className="red_text">Notice</div>
                    <div>
                      Please expect delay in delivery of orders in certain pin
                      codes due to current lockdown guidelines. Please enter Pin
                      Code to check status.
                      <span className="blue_text"> &nbsp;Know more &gt;</span>
                    </div>
                  </li>
                  <li>
                    <div className="red_text">offer</div>
                    <div>
                      INR 2000 off with SBI Credit Cards and EMI Transactions.
                      <span className="blue_text"> &nbsp;T&C &gt;</span>
                    </div>
                  </li>
                  <li>
                    <div className="red_text"></div>
                    <div>
                      Up to 10% cashback on select American Express® Cards
                      <span className="blue_text"> &nbsp;T&C &gt;</span>
                    </div>
                  </li>
                  <li>
                    <div className="red_text"></div>
                    <div>Up to 9 Months No Cost EMI on SBI Bank.</div>
                  </li>
                  <li>
                    <div className="red_text"></div>
                    <div>
                      Up to 6 Months No Cost EMI on Bajaj Finserv EMI cards.
                      <span className="blue_text"> &nbsp;T&C &gt;</span>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="color_section">
                <p className="blue_head">Check carrier compatibility</p>
                <p className="black_text">color</p>
                <div className="color_container">
                  {props.viewProductDetail.color.map((color, index) => {
                    return (
                      <Colorcard
                        color={color}
                        index={index}
                        key={index}
                        colorActiveIndex={colorActiveIndex}
                        onClick={() => setColorActiveIndex(index)}
                      />
                    );
                  })}
                </div>
              </div>
              <div className="capacity_section">
                <p className="black_text">capacity</p>
                <div className="capacity_container">
                  {props.viewProductDetail.capacity.map((capacity, index) => {
                    return (
                      <Capacity
                        capacity={capacity}
                        key={index}
                        index={index}
                        capacityActiveIndex={capacityActiveIndex}
                        onClick={() => setCapacityActiveIndex(index)}
                      />
                    );
                  })}
                </div>
              </div>
              <div className="security_section">
                <Security />
              </div>

              <div className="special_offer_section">
                <p className="black_text">Special Offer</p>
                {props.specialOffer.map((specialOffer, index) => {
                  if (index > 2 && showMore) {
                    return null;
                  }
                  return (
                    <SpecialOffer
                      key={index}
                      specialOffer={specialOffer}
                      index={index}
                      specialOfferActiveIndex={specialOfferActiveIndex}
                      onClick={() => setSpecialOfferActiveIndex(index)}
                    />
                  );
                })}
                {props.specialOffer.length > 2 && (
                  <div
                    className="blue_text"
                    onClick={() => setShowMore(!showMore)}
                  >
                    {showMore ? "show more" : "show less"}
                  </div>
                )}
              </div>
              <div className="payment_section">
                <Payment />
              </div>
            </div>
          </main>
          <div className="bottom_section">
            <div className="auto_carousel_section">
              <AutoCarousel productImg={props.autoCarouselData} />
            </div>
            <div className="what_in_box_section">
              <p className="box_head">What's in the box</p>
              <div className="what_in_box_container">
                {props.whatInBoxData.map((whatInBoxData, index) => {
                  return <WhatInBox boxData={whatInBoxData} key={index} />;
                })}
              </div>
            </div>
            <div className="faq_section">
              <p className="box_head">Frequently Asked Questions</p>
              {props.FAQdata.map((FAQdata, index) => {
                return <FAQ FAQ={FAQdata} key={index} />;
              })}
            </div>
            <div className="footer_nav_section">
              {props.footerNavData.map((footerData, index) => {
                return <FooterNav footerData={footerData} key={index} />;
              })}
            </div>
          </div>

          <div className="footer_price_section">
            <FooterPrice productPrice={props.viewProductDetail.price} />
          </div>
        </div>
      )}
    </>
  );
};
const mapStateToProps = (state) => {
  // console.log(state);
  return {
    viewProductDetail: state.reducer.viewProductDetail,
    specialOffer: state.reducer.specialOffer,
    securityDetail: state.reducer.securityDetail,
    accordianData: state.reducer.accordianData,
    autoCarouselData: state.reducer.autoCarouselData,
    whatInBoxData: state.reducer.whatInBoxData,
    footerNavData: state.reducer.footerNavData,
    FAQdata: state.reducer.FAQdata,
  };
};
export default connect(mapStateToProps)(ProductView);
