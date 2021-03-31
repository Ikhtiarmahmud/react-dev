import { createStore, combineReducers, compose } from 'redux';
import CartReducer from './Reducer/CartReducer';

const mainReducer = combineReducers({
        cartStore: CartReducer
    })

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(mainReducer, composeEnhancers());

export default store;