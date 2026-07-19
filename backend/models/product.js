const mongoose = require('mongoose')


const schema = mongoose.Schema;

const productSchema = new schema({
    name : {
        type : String,
        required : true,
        trim : true
    },
    category : {
        type : String,
        required : true,
        trim : true
    },
    price : {
        type : Number,
        required : true
    }, 
    imageUrl : {
        type : String, 
        required : true
    },
    quantity : {
        type : Number,
        required : true
    }
}, {timestamps : true})

const Product = mongoose.model('product', productSchema);

module.exports = Product;