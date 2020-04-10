const DEFAULT_STATE = {
    displayProducts: [],
    displayProductsDetail:{
        "imgURL": {
            "posters": [
                ""
            ],
            "main": ""
        }
    }
}

export const productReducer = (state = DEFAULT_STATE, action) => {
    let stateCopy = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case 'PUT_PRODUCTS':
            stateCopy.displayProducts = action.payload;
            state = stateCopy;
            return state;

        case 'PUT_PRODUCT_DETAIL':
            console.log("PUT_PRODUCT_DETAIL",action.payload);
            stateCopy.displayProductsDetail = action.payload;
            state = stateCopy;
            return state;
        default:
            return state;
    }
}