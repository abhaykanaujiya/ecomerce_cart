import React from "react";
import { connect } from "react-redux";
import { handleIncrease, handleDecrease } from "../../action/pdpAction";

const Cart = (props) => {
  console.log(props.cartItems, "cart");

  return (
    <div
      className='cart-items'
      style={{
        border: "5px solid black",

        alignItems: "center",
      }}
    >
      <h1>hello</h1>
      <div className='cart-items-header'>Cart Items</div>
      {props.cartItems.length === 0 && (
        <div className='cart-items-empty'>No items are added .</div>
      )}
      <div>
        {props.cartItems.map((item) => (
          <div key={item.id} className='cart-item-card'>
            <img
              className='cart-items-image'
              style={{ width: "120px", height: "120px" }}
              src={item.images}
              alt={item.name}
            />
            <div className='cart-items-name'>{item.name}</div>
            <div className='cart-item-price'>{item.price}</div>
            <span>
              <button className='button' onClick={() => handleDecrease(item)}>
                -
              </button>
              Qty:{item.quantity}
              <button className='button' onClick={() => handleIncrease(item)}>
                +
              </button>
            </span>
          </div>
        ))}
      </div>
      <div className='total-price'>
        {props.cartItems.map((p) => {
          const total = p.price * p.quantity;
          return <>Total Price : {total}</>;
        })}
      </div>
    </div>
  );
};

function mapStateToProps({ PdpReducer }) {
  const { cartItems } = PdpReducer;
  return {
    cartItems,
  };
}

export default connect(mapStateToProps, {
  handleIncrease,
  handleDecrease,
})(Cart);
