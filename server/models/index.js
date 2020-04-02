const mongoose = require('mongoose');
const Product = require('./Product');
const Orders = require('./Orders');
const Users = require('./Users');

let dbURL = `mongodb+srv://comicom:sharp@cluster0-iabea.mongodb.net/test?retryWrites=true&w=majority`;

function connect() {
    return mongoose.connect(dbURL, {
        useNewUrlParser : true,
        useUnifiedTopology: true
    });
}

module.exports = {
    models : {
        Product : Product,
        Users : Users,
        Orders : Orders
    },
    connect: connect
};