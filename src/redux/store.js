import {combineReducers, createStore} from 'redux'
import cartReducer from "./cartReducer";

const reducers = combineReducers({
  cart: cartReducer
})


const store = createStore(reducers);

export default store;