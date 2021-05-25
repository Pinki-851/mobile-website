import React, { useState } from "react";
import { AiOutlineMinus } from "react-icons/ai";
import { IoIosAdd } from "react-icons/io";

const FooterNav = (props) => {
  const { footerData } = props;
  const [IsActive, setIsActive] = useState(false);
  const handleHidden = () => {
    setIsActive(!IsActive);
  };
  return (
    <div className="footer-nav_container">
      <div className="footer_nav" onClick={handleHidden}>
        <p className="footer_topic">{footerData.topic}</p>
        <div className="accordian_icon_container">
          {IsActive ? (
            <AiOutlineMinus className="accordian_icon" />
          ) : (
            <IoIosAdd className="accordian_icon" />
          )}
        </div>
      </div>
      {IsActive &&
        footerData.subTopic.map((subTopic, index) => {
          return (
            <li className="child_nav" key={index}>
              {subTopic}
            </li>
          );
        })}
    </div>
  );
};

export default FooterNav;
