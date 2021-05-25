import React from "react";
import { connect } from "react-redux";
import ProductCard from "./ProductCard";

const Product = (props) => {
  // console.log(props);
  return (
    <div className="product_container">
      {props.product.map((product) => {
        return <ProductCard product={product} key={product.id} />;
      })}
    </div>
  );
};
const mapstateToProp = (state) => {
  // console.log(state);
  return {
    product: state.reducer.product,
    specialOffer: state.reducer.specialOffer,
  };
};
export default connect(mapstateToProp)(Product);
