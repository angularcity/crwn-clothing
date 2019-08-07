import React from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import "./cart-icon.styles.scss";
import { toggleCartVisibility } from "../../redux/cart/cart.actions";
import { connect } from "react-redux";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";

const CartIcon = ({ itemCount, toggleCartVisibility }) => (
  <div className="cart-icon" onClick={toggleCartVisibility}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count"> {itemCount} </span>
  </div>
);

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount
});

export default connect(
  mapStateToProps,
  { toggleCartVisibility }
)(CartIcon);
