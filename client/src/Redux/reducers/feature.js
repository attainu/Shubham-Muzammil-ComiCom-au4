const DEFAULT_STATE = {
    wishlist: [],
    cartItems:[]
}

export const featureReducer = (state = DEFAULT_STATE, action) => {
    let stateCopy = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case 'ADD_TO_CART':
            let newProduct = action.payload
            newProduct.quantity = 1
            stateCopy =  {
                ...stateCopy,
                cartItems: [...stateCopy.cartItems, newProduct] 
            }
            state = stateCopy
            return state
        case "ORDER_PLACED" : 
            return state
        default:
            return state;
    }
}