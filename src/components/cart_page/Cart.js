import React, { useState } from "react";
import { connect } from "react-redux";
import { handleIncrease, handleDecrease } from "../../action/pdpAction";
import "./cart.css";

const Cart = (props) => {
  return (
    <div className='cart-body'>
      <div className='cart-items-header'>
        <h1>Cart Items</h1>
      </div>
      {props.productList.quantity === 0 && (
        <div className='cart-items-empty'>No items are added .</div>
      )}

      <div className='cart-items-body'>
        {props.productList
          .filter((items) => items.quantity > 0)
          .map((item) => (
            <div key={item.id} className='cart-item-card'>
              <div>
                <img
                  className='cart-items-image'
                  src={item.images}
                  alt={item.name}
                />

                <span className='cart-item-detail-body'>
                  <div className='cart-items-name'>{item.name}</div>
                  <div className='cart-item-price'>{item.price}</div>
                </span>
              </div>
              <div className='buttons'>
                <span>
                  <button
                    className='button'
                    onClick={() => handleDecrease(item)}
                  ></button>
                  Qty:{item.quantity}
                  <button
                    className='button'
                    onClick={() => handleIncrease(item)}
                  ></button>
                </span>
              </div>
            </div>
          ))}
        <div>ItemsPrice:{}</div>
      </div>
    </div>
  );
};

function mapStateToProps({ PdpReducer }) {
  const { productList } = PdpReducer;
  return {
    productList,
  };
}

export default connect(mapStateToProps, {
  handleIncrease,
  handleDecrease,
})(Cart);
