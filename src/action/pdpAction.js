import productList from "../components/json/ProductsData.json";

export const getHomePageData = (data) => {
  console.log(data, "newdata");

  return (dispatch) => {
    const newProductList = [...productList.payload.products].map(
      (data) => ({
        ...data,
        quantity: 0,
      })
    );
    console.log(newProductList, "newProductList");
    dispatch({ type: "PRODUUCT", payload: [...newProductList] });
  };
};

export const handleAddToCart = (selectedProduct, productList) => {
  console.log(selectedProduct, productList, "handleAddToCart");
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
        cartList: [selectedProduct],
      },
    });
  };
};
