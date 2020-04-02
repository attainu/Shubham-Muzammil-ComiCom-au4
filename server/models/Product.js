const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    regularPrice:{
        type: Number,
        required: true
    },
    discountedPrice: {
        type: Number
    },
    itemsInStock: {
        type: Number,
        required: true
    },
    category: {
        type: Array
    },
    publication: {
        type: String
    },
    characters: {
        type: Array
    },
    tags: {
        type: Array
    },
    imgURL: {
        main: {
            type: String
        },
        posters: {
            type: Array
        }
    },
    datecreated: {
        type: Date,
        default: new Date()
    }
}, {
    collection: 'product'
}); 


const Product = mongoose.model('Product', productSchema);
module.exports = Product;