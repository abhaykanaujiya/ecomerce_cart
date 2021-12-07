const INITIAL_STATE = {
  cartItems: [],
};
export default function CartReducer(state = INITIAL_STATE, action) {
  console.log(action.payload, "Clicked item id");

  switch (action.type) {
    case "ADD_TO_CART":
      return { ...state, cartItems: [...state.cartItems, action.payload] };

    default:
      return state;
  }
}
