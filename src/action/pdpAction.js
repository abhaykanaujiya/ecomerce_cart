import productList from "../components/json/ProductsData.json";

export const getHomePageData = (data) => {
  return (dispatch) => {
    const newProductList = [...productList.payload.products].map((data) => ({
      ...data,
      quantity: 0,
    }));
    console.log(newProductList, "newProductListinitial");
    dispatch({ type: "PRODUUCT", payload: [...newProductList] });
  };
};

export const handleAddToCart = (selectedProduct, productList) => {
  console.log(productList, "handleAddToCart");
  return (dispatch) => {
    let updatedProductList = productList;
    updatedProductList.map((product) => {
      if (product.product_id === selectedProduct.product_id) {
        product.quantity = product.quantity + 1;
      }
    });
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        updatedList: [...updatedProductList],
        cartList: selectedProduct,
      },
    });
  };
};

export const handleIncrease = (selectedProduct, cartItems) => {
  console.log(cartItems, selectedProduct, "newlist");
  return (dispatch) => {
    let updatedCart = cartItems;
    updatedCart.forEach((item) => {
      console.log(item, "mapp");
      if (item.product_id === selectedProduct.product_id) {
        item.quantity = item.quantity + 1;
      }
    });
    console.log(updatedCart, " updatedCart handleIncrease");
    dispatch({
      type: "UPDATE_TO_CART",
      payload: {
        cartItems: [...updatedCart],
      },
    });
  };
};
