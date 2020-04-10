import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
        unique: false
    },
    password: {
        type: String
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    wishList: {
        type: Array
    },
    orders: {
       type : Object
    },
    cartItems: {
        productID : { 
            type : Number 
        },
        quantity : { 
            type : Number 
        },
        totalPrice : { 
            type : Number 
        }
    },
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
export default Users;