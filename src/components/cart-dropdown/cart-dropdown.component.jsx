import React from "react";
import { connect } from "react-redux";

import { selectCartItems } from "../../redux/cart/cart.selector";

import "./cart-dropdown.styles.css";

import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";

const CartDropdown = ({ cartItems }) => (
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
        <CustomButton>GO TO CHECKOUT</CustomButton>
      </div>
    ) : (
      <div>NO ITEMS SELECTED!!</div>
    )}
  </div>
);

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
});

export default connect(mapStateToProps)(CartDropdown);
