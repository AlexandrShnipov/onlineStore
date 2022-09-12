export const selectCartProductsIds = (state) =>
  state.cart.cartProducts?.map(product => product.id);
