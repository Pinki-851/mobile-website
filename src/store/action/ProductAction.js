export const viewProductDetail = (id) => {
  return {
    type: "VIEW_PRODUCT_DETAIL",
    payload: id,
  };
};
