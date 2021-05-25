import React from "react";
import { connect } from "react-redux";
import securityImg from "../../one-plus/securityImg.png";
const Security = (props) => {
  return (
    <div className="security_container">
      <div className="security_left_text">
        <div className="security_img">
          <img src={securityImg} alt="securityImage" />
        </div>
        <span className="security_right_border"></span>
        <p className="security_black_text">props.security.text</p>
        <p className="security_red_text">discount available</p>
      </div>
      <p className="add_btn">Add</p>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    securityDetail: state.reducer.securityDetail,
  };
};
export default connect(mapStateToProps)(Security);
