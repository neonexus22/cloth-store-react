import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { withRouter } from "react-router-dom";

import { selectCartItems } from "../../redux/cart/cart.selector";
import { toggleCartHidden } from "../../redux/cart/cart.actions";

import "./cart-dropdown.styles.css";

import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";

const CartDropdown = ({ cartItems, history, dispatch }) => (
  <div
    className={`${cartItems.length > 0 ? "" : "no-item-in-cart"} cart-dropdown`}
  >
    {cartItems.length > 0 ? (
      <div>
        <div className="cart-items">
          {cartItems.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>
        <CustomButton
          onClick={() => {
            history.push("/checkout");
            dispatch(toggleCartHidden());
          }}
        >
          GO TO CHECKOUT
        </CustomButton>
      </div>
    ) : (
      <div className="empty-message">YOUR CART IS EMPTY.</div>
    )}
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
