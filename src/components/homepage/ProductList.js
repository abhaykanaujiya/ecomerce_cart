import React from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import {
  getHomePageData,
  handleAddToCart,
  handleIncrease,
  handleDecrease,
  handleDecreaseQuantity,
} from "../../action/pdpAction";
import "./productList.css";

function ProductList(props) {
  useEffect(() => {
    props.getHomePageData();
  }, []);

  const addToCart = (selectedProduct) => {
    props.handleAddToCart(selectedProduct, props.productList);
  };
  const increaseCartItem = (selectedProduct) => {
    props.handleIncrease(selectedProduct, props.cartItems);
  };
  const decreaseCartItems = (selectedProduct) => {
    props.handleDecrease(selectedProduct, props.cartItems);
  };
  const decreaseQuantity = (selectedProduct) => {
    props.handleDecreaseQuantity(selectedProduct, props.productList);
  };
  console.log(props.cartItems, "devsfdsjfgskfkh");
  return (
    <div className='render-cards'>
      {props.productList?.map((product) => (
        <div className='cart-product-body'>
          <div>
            <img
              className='cart-product-image'
              src={product.images}
              alt='img'
            />

            <div className='product-rating-container'>
              {product.supplier_reviews_summary.average_rating}
            </div>
          </div>

          <div div className='product-detail'>
            <div className='product-detail-name'>
              <h5>{product.name}</h5>
            </div>

            <div className='product-detail-price'>{product.price}</div>
          </div>
          <div>
            <span>
              {product.quantity === 0 ? (
                <button className='button' onClick={() => addToCart(product)}>
                  Add to cart
                </button>
              ) : (
                <>
                  <button
                    className='button'
                    onClick={
                      product.quantity > 1
                        ? () => decreaseCartItems(product)
                        : () => decreaseQuantity(product)
                    }
                  >
                    -
                  </button>
                  {product.quantity}
                  <button
                    className='button'
                    onClick={() => increaseCartItem(product)}
                  >
                    +
                  </button>
                </>
              )}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

function mapStateToProps({ PdpReducer }) {
  const { productList, cartItems } = PdpReducer;
  return {
    productList,
    cartItems,
  };
}

export default connect(mapStateToProps, {
  getHomePageData,
  handleIncrease,
  handleDecrease,
  handleAddToCart,
  handleDecreaseQuantity,
})(ProductList);
