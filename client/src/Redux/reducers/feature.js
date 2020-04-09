const DEFAULT_STATE = {
    wishlist: [],
    cartItems:[]
}

export const featureReducer = (state = DEFAULT_STATE, action) => {
    let stateCopy = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case 'SET_USER':
            console.log(action.payload)
            return state;
        default:
            return state;
    }
}