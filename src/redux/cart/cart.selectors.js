import { createSelector } from "reselect";

// const state = {
//   cart: {
//     cartItems: []
//   }
// }

// Parent
const selectCart = state => state.cart;

// Sub state - memoized as we used createSelector
export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems => cartItems.reduce((acc, cartItem) => acc + cartItem.quantity, 0)
);
