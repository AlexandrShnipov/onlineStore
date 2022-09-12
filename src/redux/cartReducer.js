const ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART';
const INCREASE_PRODUCTS_NUMBER = 'INCREASE_PRODUCT';
const DECREASE_PRODUCTS_NUMBER = 'DECREASE_PRODUCT';

const initialState = {
  cartProducts: [],
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
                items: attribute.items
                  .filter((item, i) => item.isChecked || i === 0)
                  .map(item => (item.isChecked ? {...item} : {...item, isChecked: true}))
              })),
              gallery: action.payload.product.gallery[0]
            },
          ]
      }

    case INCREASE_PRODUCTS_NUMBER:
      return {
        ...state,
        cartProducts: state.cartProducts.map(product => {
          if (action.payload.id === product.id) {
            return {
              ...product,
              amount: product.amount + 1
            }
          }
        })
      }

      case DECREASE_PRODUCTS_NUMBER:
        return {
          ...state,
          cartProducts: state.cartProducts.map(product => {
            if (action.payload.id === product.id) {
              return {
                ...product,
                amount: product.amount - 1
              }
            }
          })
        }

    default:
      return {
        ...state,

      }
  }
}

export const addProductAC = (product) => ({
  type: ADD_PRODUCT_TO_CART,
  payload: {product}
});

export const increaseProductsNumberAC = (id) => ({
  type: INCREASE_PRODUCTS_NUMBER,
  payload: {id}
});

export const decreaseProductsNumberAC = (id) => ({
  type: DECREASE_PRODUCTS_NUMBER,
  payload: {id}
});

export default cartReducer;