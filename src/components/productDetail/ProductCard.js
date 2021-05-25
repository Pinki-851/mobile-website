import React from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { viewProductDetail } from "../../store/action/ProductAction";

const ProductCard = (props) => {
  const viewDetail = useHistory();
  return (
    <div className="product_card">
      <div className="card_image">
        <img src={props.product.productImage} alt="image" />
      </div>
      <div className="card_detail">
        <p className="card_detail_text">{props.product.productName}</p>
        <div className="card_btn_section">
          <p
            className="button"
            onClick={() => {
              props.viewProductDetail(props.product.id);
              viewDetail.push("/productdetail");
            }}
          >
            view detail
          </p>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    viewProductDetail: (id) => dispatch(viewProductDetail(id)),
  };
};
export default connect(null, mapDispatchToProps)(ProductCard);
