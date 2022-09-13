import cloneDeep from "lodash.clonedeep";

const ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART';
const INCREASE_PRODUCTS_NUMBER = 'INCREASE_PRODUCT';
const DECREASE_PRODUCTS_NUMBER = 'DECREASE_PRODUCT';
const TOTAL_QUANTITY = 'TOTAL_QUANTITY';
const TOTAL_PRICE = 'TOTAL_PRICE'

const initialState = {
  cartProducts: [],
  totalQuantity: 0,
  totalPrice: 0
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT_TO_CART:
      const productIsAdded = state.cartProducts.some(product => product.id === action.payload.product.id);
      const product = cloneDeep(action.payload.product);
      const newProduct = {
        ...product,
        attributes: product.attributes.map(attribute => ({
          ...attribute,
          items: attribute.items
            .filter((item, i) => typeof item.isChecked === 'undefined' ? i === 0 : item.isChecked)
            .map(item => (item.isChecked ? {...item} : {...item, isChecked: true}))
        })),
        prices: product.prices,
        gallery: product.gallery[0],
        amount: 1
      };
      return {
        ...state,
        cartProducts: productIsAdded
          ? [...state.cartProducts
            .map(product => product.id === newProduct.id ? {...newProduct} : {...product})]
          : [...state.cartProducts, newProduct],
        totalQuantity: state.totalQuantity + 1,
      }

    case INCREASE_PRODUCTS_NUMBER:
      return {
        ...state,
        cartProducts: state.cartProducts.map(product => {
          const copiedProduct = cloneDeep(product);
          if (action.payload.id === product.id) {
            return {
              ...copiedProduct,
              amount: product.amount + 1,
            }
          } else {
            return {...copiedProduct}
          }
        }),
        totalQuantity: state.totalQuantity + 1
      }

    case DECREASE_PRODUCTS_NUMBER:
      return {
        ...state,
        cartProducts: state.cartProducts.map(product => {
          const copiedProduct = cloneDeep(product);
          if (action.payload.id === product.id) {
            return {
              ...copiedProduct,
              amount: product.amount - 1
            }
          } else {
            return {...copiedProduct}
          }
        }),
        totalQuantity: state.totalQuantity - 1
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