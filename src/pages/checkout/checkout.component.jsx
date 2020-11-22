import React from "react";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";

import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart.selector";

import "./checkout.styles.css";

const CheckoutPage = ({ cartItems, total }) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="heder-block">
        <span>Product</span>
      </div>
      <div className="heder-block">
        <span>Description</span>
      </div>
      <div className="heder-block">
        <span>Quantity</span>
      </div>
      <div className="heder-block">
        <span>Price</span>
      </div>
      <div className="heder-block">
        <span>Remove</span>
      </div>
    </div>
    {cartItems.map((item, i) => (
      <CheckoutItem key={i} cartItem={item} />
    ))}
    <div className="total">
      <span>TOTAL: ${total}</span>
    </div>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
