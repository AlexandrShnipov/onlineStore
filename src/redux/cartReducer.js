const ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART';

const initialState = {
  cartProducts: []
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT_TO_CART:
      // debugger
      return {
        ...state,
        cartProducts:
          [...state.cartProducts,
            {
              ...action.payload.product,
              attributes: action.payload.product.attributes.map(attribute => ({
                ...attribute,
                items: attribute.items.filter(item => item.isChecked)
              }))
            },


            ]
      }
    default:
      return {
        ...state
      }
  }
}

export const addProductAC = (product) => ({
  type: ADD_PRODUCT_TO_CART,
  payload: {product}
});

export default cartReducer;