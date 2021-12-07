import React from "react";
import { connect } from "react-redux";
// import { getCartAction } from "../../action/cartAction";

const Cart = (props) => {
  // const { cartItems } = props;
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
          <div key={item.id} className='cart-item-list'>
            <img
              className='cart-items-image'
              style={{ width: "120px", height: "120px" }}
              src={item.images}
              alt={item.name}
            />
            <div className='cart-items-name'>{item.name}</div>
            <div className='cart-item-price'>{item.price}</div>

            <div className='cart-items-quantity'>quantity:{}</div>
            <div></div>
          </div>
        ))}
      </div>
    </div>
  );
};

function mapStateToProps({ cartReducer }) {
  const { cartItems } = cartReducer;
  return {
    cartItems,
  };
}

export default connect(mapStateToProps)(Cart);
