const INITIAL_STATE = {
    cart: 0,
    product : []
}

const CartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            return {...state, cart : action.payload.cart, product : action.payload.product}
        default:
            return { INITIAL_STATE };
    }
}

export default CartReducer;