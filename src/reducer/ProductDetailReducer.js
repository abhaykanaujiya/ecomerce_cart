const INITIAL_STATE = {
  productList: [],
  cartItems: [],
};

export default function ProductDetailReducer(state = INITIAL_STATE, action) {
  console.log(action.payload, "ProductDetailReducerss");
  switch (action.type) {
    case "PRODUUCT":
      return {
        ...state,
        productList: [...action.payload],
      };
    case "ADD_TO_CART":
      return {
        ...state,
        productList: action.payload.updatedList,
        cartItems: [...state.cartItems, action.payload.cartList],
      };
    case "UPDATE_TO_CART":
      return {
        ...state,
        cartItems: [...action.payload.cartItems],
      };
    case "DECREASE_CART_ITEMS":
      return {
        ...state,
        cartItems: [...action.payload.cartItems],
      };
    case "SET_QUANTITY":
      return {
        ...state,
        productList: action.payload.newUpdatedList,
      };

    default:
      return state;
  }
}
