const { create_order, get_all_orders, get_single_order } = require('../../controllers/orders/orderController');
const express = require('express')

const router = express.Router();


router.post('/order', create_order)

router.get('/orders', get_all_orders)
 
router.get('/order/:id', get_single_order)



module.exports = router;  