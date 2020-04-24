import { addItemToCart, addItemToWishlist, sendMailToUs } from '../../Api/feature';

//need to add an api call and check if user is auth before calling api
export const addComicToCart = (product, userInfo) => {
    return async(dispatch) => {
        try {
            if(userInfo){
                await addItemToCart(product, userInfo)
            }
            dispatch({type : "ADD_TO_CART", payload: product})
        } catch (error) {
            console.error("Error in productAction addComicToCart",error)
        }
    }
}

export const addComicToWishlist = (product, userInfo) => {
    return async(dispatch) => {
        try {
            if(userInfo){
                await addItemToWishlist(product, userInfo)
            }
            dispatch({type : "ADD_TO_WISHLIST", payload: product})
        } catch (error) {
            console.error("Error in productAction addItemToWishlist",error)
        }
    }
}

export const deleteItemFromCart = (id) => {
    return async(dispatch) => {
        try {
            dispatch({type : "DELETE_ITEM_IN_CART", payload: id})
        } catch (error) {
            console.error("Error in productAction deleteItemFromCart",error)
        }
    }
}

export const handleCartQuantity = ( id, val) => {
    return async(dispatch) => {
        try {
            // eslint-disable-next-line
            if(val == '0'){
                dispatch({type : "DELETE_ITEM_IN_CART", payload: id})
            } else {
                dispatch({
                    type : "HANDLE_QUANTITY", 
                    productId: id,
                    value : val
                })
            }
        } catch (error) {
            console.error("Error in productAction handleCartQuantity",error)
        }
    }
}

export const clearItemFromCart = () => {
    return async(dispatch) => {
        try {
            dispatch({type : "CLEAR_ITEM_IN_CART"})
        } catch (error) {
            console.error("Error in productAction handleCartQuantity",error)
        }
    }
}

export const deleteItemFromWishList = (id) => {
    return async(dispatch) => {
        try {
            dispatch({type : "DELETE_ITEM_IN_WISHLIST", payload: id})
        } catch (error) {
            console.error("Error in productAction deleteItemFromWishList",error)
        } 
    }
}

export const sendMail = async (formInfo) => {
    let success = await sendMailToUs(formInfo)
    return success
}