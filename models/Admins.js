import mongoose from 'mongoose'

const adminSchema = new mongoose.Schema({
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
    datecreated: {
        type: Date,
        default: new Date()
    }
}, {
    collection: 'admins'
}); 


const Admins = mongoose.model('Admins', adminSchema);
export default Admins;