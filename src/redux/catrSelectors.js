export const selectCartProductsIds = (state) =>
  state.cart.cartProducts?.map(product => product.id);

export const selectCurrencyLabel = (state) =>
  state.cart.currency.label
