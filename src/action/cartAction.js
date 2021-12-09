export const getCartAction = (product) => {
  console.log(product, "clicked");

  return (dispatch) => {
    dispatch({ type: "ADD_TO_CART", payload: product });
  };
};
