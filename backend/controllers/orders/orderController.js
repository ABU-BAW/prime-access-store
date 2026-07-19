const Order = require("../../models/order");




const create_order = async(req, res) => {
    const { items, delivery, payment, subtotal, deliveryFee, total, } = req.body;
    
    try {

        const order = await new Order({items, delivery, payment, subtotal, deliveryFee, total}).save();
        res.status(200).json({
            success : true,
            message : "order Successfully placed!!",
            order
        })
        
    } catch (error) {
        res.status(500).json({
            success : false,
            message : "failed to create order!!",
            error : error.message
        })
    }
}

const get_all_orders = async(req, res) => {
    try {
        
    } catch (error) {
        
    }
}

const get_single_order = async(req, res) => {
    try {
        
    } catch (error) {
        
    }
}

module.exports = {
    create_order,
    get_all_orders,
    get_single_order
};