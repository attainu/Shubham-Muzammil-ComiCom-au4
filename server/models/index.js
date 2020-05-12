import mongoose from 'mongoose'
import Product from './Product'
import Orders from './Orders'
import Users from './Users'
import { MONGO_URI } from "../config/keys";

let dbURL = MONGO_URI;

function connect() {
    return mongoose.connect(dbURL, {
        useNewUrlParser : true,
        useFindAndModify: false,
        useUnifiedTopology: true
    });
}

/* module.exports = {
    models : {
        Product : Product,
        Users : Users,
        Orders : Orders
    },
    connect: connect
}; */
export {  
    Product,
    Users,
    Orders, 
    connect
}