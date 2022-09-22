import {combineReducers, compose, createStore} from 'redux'
import cartReducer from './cartReducer';

const reducers = combineReducers({
  cart: cartReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers());

export default store;