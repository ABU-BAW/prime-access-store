const { initialize_payment, webhook, verify_transaction } = require('../../controllers/payments/paymentController')
const express = require('express')

const router = express.Router()


router.post('/initialize', initialize_payment)

router.post('/webhook', express.raw({type :"application/json"}), webhook)

router.get("/verify/:reference", verify_transaction)


module.exports = router;