const INITIAL_STATE = {}

const CartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            return {...state, cart: action.payload.cart, cartProduct: action.payload.cartProduct}
        default:
            return { INITIAL_STATE };
    }
}

export default CartReducer;