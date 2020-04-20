import { fetchProducts, fetchAllProducts, fetchProductDetail } from '../../Api/product'
import { addItemToCart, addItemToWishlist } from '../../Api/feature';

//for sending list to store on first load
export const putProducts = (productData) => {
    return {
        type: "PUT_PRODUCTS",
        payload: productData,
    }
}

// for getting list from api calls
export const getProducts = (tag) => {
    return async dispatch => {
        try {
            let productResult;
            if (tag !== "all") {
                productResult = await fetchProducts(tag)
            } else {
                productResult = await fetchAllProducts()
            }
            dispatch(putProducts(productResult.data));
        } catch (error) {
            console.log("error in getProducts", error)
        }
    }
}

export const putProductDetail = (productDetailData) => {
    return {
        type: "PUT_PRODUCT_DETAIL",
        payload: productDetailData,
    }
}

export const getProductDetail = (id) => {
    return async dispatch => {
        try {
            let productDetailResult = await fetchProductDetail(id)
            dispatch(putProductDetail(productDetailResult.data));
        } catch (error) {
            console.log("error in getProductDetail", error)
        }
    }
}
//need to add an api call and check if user is auth before calling api
export const addComicToCart = (product, userInfo) => {
    return async(dispatch) => {
        try {
            await addItemToCart(product, userInfo)
            dispatch({type : "ADD_TO_CART", payload: product})
        } catch (error) {
            console.error("Error in productAction addComicToCart",error)
        }
    }
}

export const addComicToWishlist = (product, userInfo) => {
    return async(dispatch) => {
        try {
            await addItemToWishlist(product, userInfo)
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