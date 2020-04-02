const mongoose = require('mongoose');

const ordersSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    totalPrice: {
        type: Number,
        required: true
    }
    product: [
        productID:{ type : Number },
        quantity:{ type : Number }
    ],
    transactionType: {
        type : String
    }
    orderedDate: {
        type: Date,
        default: new Date()
    }
}, {
    collection: 'orders'
}); 


const Orders = mongoose.model('Orders', ordersSchema);
module.exports = Orders;