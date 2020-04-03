import mongoose from 'mongoose'
import Product from './Product'
import Orders from './Orders'
import Users from './Users'


let dbURL = `mongodb+srv://comicom:sharp@cluster0-iabea.mongodb.net/test?retryWrites=true&w=majority`;

function connect() {
    return mongoose.connect(dbURL, {
        useNewUrlParser : true,
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
    connect}