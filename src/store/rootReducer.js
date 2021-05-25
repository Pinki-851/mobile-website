import ProductReducer from "./reducer/ProductReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  reducer: ProductReducer,
});

export default rootReducer;
