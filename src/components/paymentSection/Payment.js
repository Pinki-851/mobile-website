import React from "react";
import { BsCreditCard, BsWallet } from "react-icons/bs";
import { RiHome3Fill, RiFindReplaceLine } from "react-icons/ri";
import { IoIosArrowForward } from "react-icons/io";
import { BiPieChart } from "react-icons/bi";
import { AiFillSecurityScan } from "react-icons/ai";
const Payment = () => {
  return (
    <>
      <div className="payment_container">
        <div className="payment_left_section">Payment:</div>
        <div className="payment_right_section">
          <BsCreditCard className="payment_icon" />
          <span className="pyament_text">Credit / Debit Card</span>
          <RiHome3Fill className="payment_icon" />
          <span className="pyament_text"> NetBanking</span>
          <BiPieChart className="payment_icon" />
          <span className="pyament_text"> EMI</span>
          <BsWallet className="payment_icon" />
          <span className="pyament_text">Wallet</span>
        </div>
      </div>
      <div className="shipping_box">Shipping:</div>
      <div className="replacment_container">
        <div className="replacment_container_one">
          <div className="replace_section">
            <RiFindReplaceLine className="payment_icon" />
            <span className="pyament_text replacment_container_text">
              Replacement Policy
            </span>
          </div>
          <IoIosArrowForward className="arrow" />
        </div>
        <div className="replacment_container_two">
          <div className="warranty_section">
            <AiFillSecurityScan className="payment_icon" />
            <span className="pyament_text replacment_container_text">
              1 Year Warranty
            </span>
          </div>
          <IoIosArrowForward className="arrow" />
        </div>
      </div>
    </>
  );
};

export default Payment;
