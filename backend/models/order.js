const mongoose = require('mongoose')


const schema = mongoose.Schema;


const itemsOrderSchema = new schema({
    product : {
        type : mongoose.Schema.Types.ObjectId,
        required : true,
        ref : "Product"
    },
    name : {
        type : String,
        required : true,
        trim : true
    },
    image : {
        type : String,
        required : true
    },
    price : {
        type :  Number,
        required : true,
        min : 0
    },
    quantity : {
        type : Number,
        required : true,
        min : 1
    },

}, {_id  : false})

const deliverySchema = new schema({
    name : {
        type : String,
        required : true,
        trim : true
    },
    email : {
        type : String,
        required : true
    },
    callNumber : {
        type :  String,
        required : true,
    },
    watsappNumber : {
        type : String,
        required : true,
    },
    location : {
        type : String,
        required : true
    }

}, { _id  : false})

const paymentSchema = new schema({
    method : {
        type : String,
        enum : ["mobile_money", "card"],
        default : "mobile_money"
    },
    status : {
        type : String,
        enum : ["pending", "paid", "failed", "cancelled"],
        default : "pending"
    },
    reference : {
        type :  String,
        default : "",
    },
    amount : {
        type : Number,
        required : true,
    },
    currency : {
        type : String,
        default : "GHS"
    }

}, { _id  : false})


const orderSchema = new schema({
    items : {
        type : [itemsOrderSchema],
        required : true
    },

    delivery : {
        type : deliverySchema,
        required : true
    },

    payment : {
        type :  paymentSchema,
        required : true
    },

    subtotal: {
        type: Number,
        required: true,
        min: 0,
    },

    deliveryfee: {
        type: Number,
        default: 0,
        min: 0,
    },

    total: {
        type: Number,
        required: true,
        min: 0,
    },

    status: {
        type: String,
        enum: [
            "pending",
            "processing",
            "shipped",
            "delivered",
            "cancelled",
        ],
        default: "pending",
        
    },

}, { timestamps  : true})


const Order = mongoose.model("Order", orderSchema)

module.exports = Order;
