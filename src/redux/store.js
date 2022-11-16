import {combineReducers, compose, createStore} from 'redux'
import cartReducer from './cartReducer';
import {loadState, saveState} from '../utils/localstorage-utils';


const rootReducers = combineReducers({
  cart: cartReducer,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(rootReducers, loadState(), composeEnhancers());

store.subscribe(()=> {
  saveState({
    cart: store.getState().cart
  })
})


