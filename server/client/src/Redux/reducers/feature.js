const DEFAULT_STATE = {
    wishlist: [],
    cartItems:[]
}

export const featureReducer = (state = DEFAULT_STATE, action) => {
    let stateCopy = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case 'ADD_TO_CART_INITIAL':
            let initalCart = action.payload
            stateCopy.cartItems = initalCart
            state = stateCopy
            return state
        case 'ADD_TO_WISHLIST_INITIAL':
            let initalWishlist = action.payload
            stateCopy.wishlist = initalWishlist
            state = stateCopy
            return state
        case 'ADD_TO_CART':
            let newProduct = action.payload
            newProduct.quantity = 1
            let isThere = stateCopy.cartItems.findIndex(x => x._id === newProduct._id);
            if(isThere === -1){
                stateCopy =  {
                    ...stateCopy,
                    cartItems: [...stateCopy.cartItems, newProduct] 
                }
            }
            state = stateCopy
            return state
        case 'ADD_TO_WISHLIST':
            let wishlistProduct = action.payload
            let isAlready = stateCopy.wishlist.findIndex(x => x._id === wishlistProduct._id);
            if(isAlready === -1){
                stateCopy =  {
                    ...stateCopy,
                    wishlist: [...stateCopy.wishlist, wishlistProduct] 
                }
            }
            state = stateCopy
            return state
        case 'DELETE_ITEM_IN_CART':
            let productId = action.payload
            stateCopy.cartItems.splice(productId, 1)
            state = stateCopy
            return state
        case 'DELETE_ITEM_IN_WISHLIST':
            let wishlistProductId = action.payload
            stateCopy.wishlist.splice(wishlistProductId, 1)
            state = stateCopy
            return state
        case 'HANDLE_QUANTITY':
            let id = action.productId
            let quantity = action.value
            stateCopy.cartItems[id].quantity = quantity
            state = stateCopy
            return state
        case 'CLEAR_ITEM_IN_CART':
            stateCopy.cartItems = []
            state = stateCopy
            return state
        case "ORDER_PLACED" : 
            return state
        default:
            return state;
    }
}