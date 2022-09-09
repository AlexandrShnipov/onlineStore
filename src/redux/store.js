import {combineReducers, createStore} from 'redux'
import cartReducer from "./cartReducer";

let reducers = combineReducers({
  cart: cartReducer
})


let store = createStore(reducers);

export default store;