import { combineReducers } from "redux";
import PdpReducer from "./ProductDetailReducer";
import CountReducer from "./countReducer";
import cartReducer from "./cartReducer";

export default combineReducers({ PdpReducer, CountReducer, cartReducer });
