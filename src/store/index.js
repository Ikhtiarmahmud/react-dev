import { createStore, combineReducers } from 'redux';
import CartReducer from './Reducer/CartReducer';

const mainReducer = combineReducers({
        cartStore: CartReducer
    })

const store = createStore(mainReducer);

export default store;