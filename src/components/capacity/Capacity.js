import React from "react";

const Capacity = (props) => {
  // console.log(props);
  const { capacity } = props;
  return (
    <div
      className={
        props.capacityActiveIndex === props.index
          ? "capacity_card active_class"
          : "capacity_card"
      }
      onClick={props.onClick}
    >
      <p className="capacity">{capacity.capacity}</p>
      <p className="price">
        {capacity.price.toLocaleString("en-US", {
          style: "currency",
          currency: "INR",
        })}
      </p>
      <p className="mrp">
        M.R.P
        {capacity.MRP.toLocaleString("en-US", {
          style: "currency",
          currency: "INR",
        })}
        (incl. of all taxes)
      </p>
    </div>
  );
};

export default Capacity;
