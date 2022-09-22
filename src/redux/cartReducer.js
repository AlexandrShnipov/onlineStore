import cloneDeep from "lodash.clonedeep";

const ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART';
const INCREASE_PRODUCTS_NUMBER = 'INCREASE_PRODUCT';
const DECREASE_PRODUCTS_NUMBER = 'DECREASE_PRODUCT';
const SET_CURRENCY = 'SET_CURRENCY';
const DELETE_PRODUCT = 'DELETE_PRODUCT'

const initialState = {
  currency: '',
  cartProducts: [],
  totalQuantity: 0,
  totalPrice: 0
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT_TO_CART: {
      const checkedAttributes = action.payload.product.attributes.map(attribute => ({
        ...attribute,
        items: attribute.items
          .filter((item, i) => typeof item.isChecked === 'undefined' ? i === 0 : item.isChecked)
          .map(item => (item.isChecked ? {...item} : {...item, isChecked: true}))
      }));
      const uniqueId = checkedAttributes.reduce((acc, item) => {
        return `${acc}-${item.id}-${item.items[0].id}`
      }, `${action.payload.product.id}`);
      const productIsAdded = state.cartProducts.some(product => product.uniqueId === uniqueId);
      const newProduct = {
        ...action.payload.product,
        uniqueId,
        attributes: checkedAttributes,
        prices: cloneDeep(action.payload.product.prices),
        price: action.payload.product.prices.find(price => price.currency.label === state.currency.label).amount,
        gallery: cloneDeep(action.payload.product.gallery),
        amount: 1
      };
      const newCartProducts = productIsAdded
        ? [...state.cartProducts.map(product => product.uniqueId === newProduct.uniqueId
          ? {...product, amount: product.amount + 1}
          : {...product})]
        : [...state.cartProducts, newProduct]
      const newTotalQuantity = state.totalQuantity + 1;
      const netProductsPrice = newCartProducts.reduce((sum, product) => sum + product.price, 0);
      return {
        ...state,
        cartProducts: newCartProducts,
        totalQuantity: newTotalQuantity,
        totalPrice: netProductsPrice
      }
    }
    case INCREASE_PRODUCTS_NUMBER: {
      const newCartProducts = state.cartProducts.map(product => {
        const copiedProduct = cloneDeep(product);
        if (action.payload.id === product.uniqueId) {
          return {
            ...copiedProduct,
            amount: product.amount + 1,
          }
        } else {
          return {...copiedProduct}
        }
      })

      return {
        ...state,
        cartProducts: newCartProducts,
        totalQuantity: state.totalQuantity + 1,
        totalPrice: newCartProducts.reduce((sum, product) =>
          sum + product.price * product.amount, 0)
      }
    }
    case DECREASE_PRODUCTS_NUMBER: {
      const newCartProducts = state.cartProducts.map(product => {
        const copiedProduct = cloneDeep(product);
        if (action.payload.id === product.uniqueId) {
          return {
            ...copiedProduct,
            amount: product.amount - 1
          }
        } else {
          return {...copiedProduct}
        }
      })
      return {
        ...state,
        cartProducts: newCartProducts,
        totalQuantity: state.totalQuantity - 1,
        totalPrice: newCartProducts.reduce((sum, product) =>
          sum + product.price * product.amount, 0)
      }
    }
    case SET_CURRENCY: {
      const cartProducts = state.cartProducts.map(product => {
        const copiedProduct = cloneDeep(product)
        return {
          ...copiedProduct,
          price: copiedProduct.prices?.find(price =>
            price.currency.label === action.payload.currency.label).amount
        }
      })
      return {
        ...state,
        cartProducts,
        currency: {...action.payload.currency},
        totalPrice: cartProducts.reduce((sum, product) =>
          sum + product.price * product.amount, 0)
      }
    }

    case DELETE_PRODUCT: {
      const cartProducts = state.cartProducts
        .filter(product => product.uniqueId !== action.payload.id)
      return {
        ...state,
        cartProducts: cartProducts,
        totalQuantity: cartProducts.reduce((sum, product) => sum + product.amount, 0),
        totalPrice: cartProducts.reduce((sum, product) => sum + product.price, 0)
      }
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

export const setCurrencyAC = (currency) => ({
  type: SET_CURRENCY,
  payload: {currency}
})

export const deleteProductToCartAC = (id) => ({
  type: DELETE_PRODUCT,
  payload: {id}
})

export default cartReducer;