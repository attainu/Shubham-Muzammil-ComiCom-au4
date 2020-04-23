import mongoose from 'mongoose'

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
    }
    /* datecreated: {
        type: Date,
        default: new Date()
    } */
}, {
    timestamps : {createdAt: 'created_at', updatedAt: 'updated_at'},
    collection: 'product'
}); 


productSchema.index({tags:'text', name : 'text', characters : 'text'})

const Product = mongoose.model('Product', productSchema);
export default Product;