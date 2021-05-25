import { footerNavData } from "../../DataContainer/FooterNavData";
import {
  boxData,
  Data,
  security,
  AutoCarouselData,
} from "../../DataContainer/Data";
import { specialOffer } from "../../DataContainer/SpecialOfferData";
import { FAQ } from "../../DataContainer/FAQdata";
const initialState = {
  product: Data,
  securityDetail: security,
  specialOffer: specialOffer,
  footerNavData: footerNavData,
  autoCarouselData: AutoCarouselData,
  whatInBoxData: boxData,
  FAQdata: FAQ,
  viewProductDetail: null,
};

const ProductReducer = (state = initialState, action) => {
  // console.log(state);
  switch (action.type) {
    case "VIEW_PRODUCT_DETAIL": {
      const viewDetail = state.product.find((items) => {
        if (items.id === action.payload) {
          items = { ...items };
          return items;
        }
      });
      return { ...state, viewProductDetail: viewDetail };
    }
    default:
      return state;
  }
};
export default ProductReducer;
