import React, { useState } from "react";
import { connect } from "react-redux";
import {
  handleAddToCart,
  handleIncrease,
  handleDecrease,
  handleDecreaseQuantity,
} from "../../action/pdpAction";
import "./pdpList.css";


const ProductList = (props) => {



  const addToCart = (selectedProduct) => {
    props.handleAddToCart(selectedProduct, props.productList, props.cartItems);
  };
  const increaseCartItem = (selectedProduct) => {
    props.handleIncrease(selectedProduct, props.productList, props.cartItems);
  };
  const decreaseCartItems = (selectedProduct) => {
    props.handleDecrease(selectedProduct, props.productList, props.cartItems);
  };
  const decreaseQuantity = (selectedProduct) => {
    props.handleDecreaseQuantity(
      selectedProduct,
      props.productList,
      props.cartItems
    );
  };
  

  console.log(props, "product list");
  return (
    <div className="render-cards">
      {!props.loading ? (
        <>
          {props.productList?.map((product) => (
            <div className="cart-product-body">
              <div>
                <img
                  className="cart-product-image"
                  src={product.images}
                  alt="img"
                />

                <div className="product-rating-container">
                  {product.supplier_reviews_summary.average_rating}
                </div>
              </div>

              <div div className="product-detail">
                <div className="product-detail-name">
                  <div>{product.name}</div>
                </div>
                <div className="product-detail-price">{product.price}</div>
              </div>
              <div className="button-header">
                <span>
                  {product.quantity === 0 ? (
                    <button
                      className="button"
                      onClick={() => addToCart(product)}
                    >
                      Add to cart
                    </button>
                  ) : (
                    <>
                      <button
                        className="button-decrease"
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
                        className="button-increase"
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
        </>
      ) : (
        <></>
      )}
    </div>
  );
}

function mapStateToProps({ PdpReducer }) {
  const { productList, cartItems, loading } = PdpReducer;
  console.log(cartItems, "cartItem reducercers data");
  return {
    productList,
    cartItems,
    loading,
  };
}

export default connect(mapStateToProps, {
  handleIncrease,
  handleDecrease,
  handleAddToCart,
  handleDecreaseQuantity,
})(ProductList);
