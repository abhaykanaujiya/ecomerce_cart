import {
  ADD_TO_CART,
  UPDATE_TO_CART,
  DECREASE_CART_ITEMS,
  SET_QUANTITY,
} from "../action/ActionConstants";

export const handleAddToCart = (selectedProduct, productList, cartItems) => {
  console.log(productList, cartItems, "handleAddToCart");
  return (dispatch) => {
    dispatch({ type: "LOADING" });
    let updatedProductList = productList;
    updatedProductList.map((product) => {
      if (product.product_id === selectedProduct.product_id) {
        product.quantity = product.quantity + 1;
      }
    });
    dispatch({
      type: ADD_TO_CART,
      payload: {
        updatedProductList: [...updatedProductList],
        //cartItem: [...cartItems, selectedProduct],
      },
    });
  };
};

export const handleIncrease = (selectedProduct, productList, cartItems) => {
  return (dispatch) => {
    dispatch({ type: "LOADING" });

    let updatedNewProduct = productList;
    updatedNewProduct.forEach((item) => {
      if (item.product_id === selectedProduct.product_id) {
        item.quantity = item.quantity + 1;
      }
    });
    // let updatedNewCart = cartItems;
    // updatedNewCart.map((items) => {
    //   if (items.product_id === selectedProduct.product_id) {
    //     items.quantity = items.quantity + 1;
    //   }
    // });
    console.log(cartItems, productList, " updatedNewCart");
    dispatch({
      type: UPDATE_TO_CART,
      payload: {
        updatedProductList: [...updatedNewProduct],
        //cartList: [...cartItems],
      },
    });
  };
};

export const handleDecrease = (selectedProduct, cartItems) => {
  console.log(selectedProduct, cartItems, "handle Decrease");
  return (dispatch) => {
    dispatch({ type: "LOADING" });

    let updatedCart = cartItems;
    updatedCart.map((item) => {
      if (item.product_id === selectedProduct.product_id) {
        item.quantity = item.quantity - 1;
      }
    });
    dispatch({
      type: DECREASE_CART_ITEMS,
      payload: { decreaseProductList: [...updatedCart] },
    });
  };
};

export const handleDecreaseQuantity = (selectedProduct, productList) => {
  console.log("handleDecreaseQuantity", productList);
  return (dispatch) => {
    dispatch({ type: "LOADING" });

    let setQuantity = productList;
    setQuantity.map((product) => {
      if (product.product_id === selectedProduct.product_id) {
        product.quantity = 0;
      }
    });
    dispatch({
      type: SET_QUANTITY,
      payload: {
        newUpdatedList: [...setQuantity],
      },
    });
  };
};
