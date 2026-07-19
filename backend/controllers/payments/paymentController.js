const axios = require('axios');
const Order = require('../../models/order');
const dotenv = require('dotenv').config()
const crypto = require('crypto')


const initialize_payment = async(req, res) => {
    
    const { email, amount, orderId } = req.body;
    

    try {
        
        const response = await axios.post('https://api.paystack.co/transaction/initialize',
         
            {
                email,
                amount : amount * 100,
                channels : ["mobile_money"],
                currency : "GHS",
                callback_url : "http://localhost:5173/payment/verify",
                metadata : {orderId}
            },
            {
                headers : {
                    Authorization : `Bearer ${process.env.PAYSTACK_SECRET_KEY}`
                }
            }
        )
                    
        res.json(response.data)

    } catch (error) {
        console.log(error.response?.data);
    }
}


const webhook = async(req, res) => {
    const hash = crypto
        .createHmac("SHA512", process.env.PAYSTACK_SECRET_KEY)
        .update(req.body)
        .digest('hex');

    if(hash !== req.headers["x-paystack-signature"]){
        return res.status(401).send("Invalid signature");
    }

    const event = JSON.parse(req.body);

    if(event.event === "charge.success"){
        const {orderId} = event.data.metadata;
        await Order.findByIdAndUpdate(orderId, { status : "processing", "payment.status" : "paid"})
    }
    return res.sendStatus(200)

};

const verify_transaction = async(req, res) => {
    try {
        const response = await axios.get(`https://api.paystack.co/transaction/verify/${req.params.reference}`,
                {headers : { Authorization : `Bearer ${process.env.PAYSTACK_SECRET_KEY}` }}
            )

        res.json(response.data.data);
    } catch (error) {
        
    }
}

module.exports = {initialize_payment, webhook, verify_transaction } ;