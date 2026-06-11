const mongoose = require('mongoose')


const schema = mongoose.Schema;

const productSchema = new schema({
    name : {
        type : String,
        required : true
    },
    category : {
        type : String,
        required : true
    },
    price : {
        type : Number,
        required : true
    }, 
    imageUrl : {
        type : String, 
        required : true
    }
}, {timestamps : true})

const Product = mongoose.model('product', productSchema);

module.exports = Product;