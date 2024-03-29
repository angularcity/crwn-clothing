import React from "react";
import "./cart-dropdown.styles.scss";
import CustomButton from "./../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";
import { connect } from "react-redux";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";
import { toggleCartVisibility } from "../../redux/cart/cart.actions";

const CartDropdown = ({ cartItems, history, dispatch }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.length ? (
        cartItems.map(cartItem => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <span className="empty-message"> No items in cart</span>
      )}
    </div>
    <CustomButton
      onClick={() => {
        history.push("/checkout");
        dispatch(toggleCartVisibility());
      }}
    >
      Go to Checkout
    </CustomButton>
  </div>
);

// basically says, we dont need to write a function that accepts state syntax
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

// order matters
export default withRouter(
  connect(
    mapStateToProps,
    null
  )(CartDropdown)
);
