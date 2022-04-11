import React from "react";
import { useEffect, useState } from "react";
import { flushSync } from "react-dom";
import { connect } from "react-redux";
import {
  handleAddToCart,
  handleIncrease,
  handleDecrease,
  handleDecreaseQuantity,
} from "../../action/pdpAction";
import "./productList.css";

const ProductList = (props) => {
  const [postsPerPage] = useState(5);
  const [posts, setAllPosts] = useState(props.productList);
  const [currentPage, setCurrentPage] = useState(1);

  const lastPage = currentPage * postsPerPage;
  const firstPage = lastPage - postsPerPage;
  const currentPost = posts.slice(firstPage, lastPage);
  const pageNumber = [];
  console.log(currentPost, "posts");

  for (let i = 1; i <= Math.ceil(posts.length / postsPerPage); i++) {
    pageNumber.push(i);
  }

  const changePage = (event) => {
    setCurrentPage(Number(event.target.id));
  };

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
    props.handleDecreaseQuantity(selectedProduct, props.ps, props.cartItems);
  };

  console.log(props.cartItems, props.productList, "product list");
  return (
    <>
      <div className="render-cards">
        {currentPost?.map((product) => (
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
                  <button className="button" onClick={() => addToCart(product)}>
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
      </div>
      <div style={{ textAlign: "center" }}>
        <button
          onClick={() => {
            if (currentPage === 1) return;
            setCurrentPage(currentPage - 1);
          }}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        {pageNumber.map((elm, index, array) => (
        // console.log(elm,index,array,"elm")
          <button id={elm}className={currentPage===elm?"active":null} onClick={(event) => changePage(event)}>{array[index-1]+2<elm? `...${elm}`:elm}</button>
        ))}
        <button onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage===pageNumber.length?true:false}>Next</button>
      </div>
    </>
  );
};

function mapStateToProps({ PdpReducer }) {
  const { productList, cartItems } = PdpReducer;
  console.log(cartItems, "cartItem reducercers data");
  return {
    productList,
    cartItems,
  };
}

export default connect(mapStateToProps, {
  handleIncrease,
  handleDecrease,
  handleAddToCart,
  handleDecreaseQuantity,
})(ProductList);
