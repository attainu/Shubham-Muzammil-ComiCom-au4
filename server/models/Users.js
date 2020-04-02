const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    wishList: {
        type: Array
    },
    orderedItems: [
        productID:{ type : Number },
        quantity:{ type : Number },
        totalPrice:{ type : Number }
    ],
    cartItems: [
        productID:{ type : Number },
        quantity:{ type : Number },
        totalPrice:{ type : Number }
    ],
    interests: {
        type: Array
    },
    datecreated: {
        type: Date,
        default: new Date()
    }
}, {
    collection: 'users'
}); 


const Users = mongoose.model('Users', userSchema);
module.exports = Users;