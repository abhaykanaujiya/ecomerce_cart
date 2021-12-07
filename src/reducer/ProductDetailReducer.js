const INITIAL_STATE = {
  productList: [],
  cartItems: [],
};

export default function ProductDetailReducer(state = INITIAL_STATE, action) {
  console.log(action.payload, "ProductDetailReducer");
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
        cartItems: action.payload.cartList,
      };

    default:
      return state;
  }
}
