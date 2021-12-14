import {
  PRODUUCT,
  ADD_TO_CART,
  UPDATE_TO_CART,
  DECREASE_CART_ITEMS,
  SET_QUANTITY,
} from "../action/ActionConstants";
import productList from "../components/json/ProductsData.json";

const INITIAL_STATE = {
  productList: [...productList.payload.products],
  cartItems: [],
};

export default function ProductDetailReducer(state = INITIAL_STATE, action) {
  console.log(action.payload, "ProductDetailReducerss");
  switch (action.type) {
    case PRODUUCT:
      return {
        ...state,
        productList: [...action.payload],
      };
    case ADD_TO_CART:
      return {
        ...state,
        productList: [...action.payload.updatedProductList],
        //cartItems: [...action.payload.cartItem],
      };
    case UPDATE_TO_CART:
      return {
        ...state,
        productList: [...action.payload.updatedProductList],
        //cartItems: [...action.payload.cartList],
      };
    case DECREASE_CART_ITEMS:
      return {
        ...state,
        productList: [...action.payload.decreaseProductList],
      };
    case SET_QUANTITY:
      return {
        ...state,
        productList: action.payload.newUpdatedList,
        //cartItems: action.payload.cartItems,
      };

    default:
      return state;
  }
}
