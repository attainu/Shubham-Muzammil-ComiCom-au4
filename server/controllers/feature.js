import Users from '../models/Users'

export const addItemToUserCart = async (req, res) => {
    try {
        let { product, userInfo } = req.body;
        // update only is cart item is not there
        Users.findOne({ email: userInfo }, (err, response) => {
            if (err) {
                return res.json({
                    success: false,
                    message: err
                })
            }
            let isThere = response.cartItems.findIndex(x => x._id === product._id);
            if (isThere === -1) {
                product.quantity = 1;
                Users.findOneAndUpdate({ email: userInfo }, { $push: { cartItems: product } }, (error, data) => {
                    if (error) {
                        return res.json({
                            success: false,
                            message: error
                        })
                    } else {
                        return res.json({
                            success: true,
                            message: data
                        })
                    }
                })
            } else {
                return res.json({
                    success: false,
                    message: response
                })
            }
        })
    } catch (error) {
        return res.json({
            success: false,
            message: error
        });
    }
}

export const addItemToUserWishlist = async (req, res) => {
    try {
        let { product, userInfo } = req.body;
        Users.findOne({ email: userInfo }, (err, response) => {
            if (err) {
                return res.json({
                    success: false,
                    message: err
                })
            }
            let isThere = response.wishList.findIndex(x => x._id === product._id);
            if (isThere === -1) {
                Users.findOneAndUpdate({ email: userInfo }, { $push: { wishList: product } }, (error, data) => {
                    if (error) {
                        return res.json({
                            success: false,
                            message: error
                        })
                    } else {
                        return res.json({
                            success: true,
                            message: data
                        })
                    }
                })
            } else {
                return res.json({
                    success: false,
                    message: response
                })
            }
        })
    } catch (error) {
        return res.json({
            success: false,
            message: error
        });
    }
}

//need to implement
export const updateItemInUserCart = async (req, res) => {
    try {
        let { product, userInfo } = req.body;
        // update only is cart item is not there
        Users.findOne({ email: userInfo }, (err, response) => {
            if (err) {
                return res.json({
                    success: false,
                    message: err
                })
            }
            let isThere = response.cartItems.findIndex(x => x._id === product._id);
            if (isThere !== -1) {
                product.quantity = product.quantity + 1;
                Users.findOneAndUpdate({ email: userInfo }, { $push: { cartItems: product } }, (error, data) => {
                    if (error) {
                        return res.json({
                            success: false,
                            message: error
                        })
                    } else {
                        return res.json({
                            success: true,
                            message: data
                        })
                    }
                })
                // for updating the quantity, will do this in other api
            } else {
                //     response.cartItems[isThere].quantity++;
                //     Users.findOneAndUpdate({email: userInfo}, { $set : { cartItems : response.cartItems } }, (err, data)=>{
                //         if(err){
                //             return res.json({
                //                 success: false,
                //                 message: err
                //             })
                //         }
                //         return res.json({
                //             message: data
                //         })
                //     })
                // }
                return res.json({
                    success: false,
                    message: response
                })
            }
        })
    } catch (error) {
        return res.json({
            success: false,
            message: error
        });
    }
}