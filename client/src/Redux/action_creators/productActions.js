import { fetchProducts, fetchAllProducts, fetchProductDetail } from '../../Api/product'

//for sending product list to store
export const putProducts = (productData) => {
    return {
        type: "PUT_PRODUCTS",
        payload: productData,
    }
}

// for getting product list from api calls
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

//for sending product detail to store
export const putProductDetail = (productDetailData) => {
    return {
        type: "PUT_PRODUCT_DETAIL",
        payload: productDetailData,
    }
}

// for getting product details from api calls
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