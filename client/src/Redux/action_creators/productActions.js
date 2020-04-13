import { fetchProducts, fetchAllProducts, fetchProductDetail } from '../../Api/product'

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

export const addComicToCart = (product) => {
    return async(dispatch) => {
        try {
            dispatch({type : "ADD_TO_CART", payload: product})
        } catch (error) {
            console.error("Error in productAction addComicToCart",error)
        }
    }
}