import React, { useState } from "react";
import { AiOutlineMinus } from "react-icons/ai";
import { IoIosAdd } from "react-icons/io";

const FAQ = (props) => {
  const [faqActiveIndex, setFaqActiveIndex] = useState(false);
  const handleHidden = () => {
    setFaqActiveIndex(!faqActiveIndex);
  };
  return (
    <div className="footer-nav_container ">
      <div className="footer_nav accordian" onClick={handleHidden}>
        <p className="footer_topic">{props.FAQ.quetion}</p>
        <div className="accordian_icon_container">
          {faqActiveIndex ? (
            <AiOutlineMinus className="accordian_icon" />
          ) : (
            <IoIosAdd className="accordian_icon" />
          )}
        </div>
      </div>
      {faqActiveIndex && <pre className="chid_nav">{props.FAQ.answer}</pre>}
    </div>
  );
};

export default FAQ;
