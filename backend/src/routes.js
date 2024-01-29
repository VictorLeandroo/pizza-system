const express = require('express')
const router = express.Router()

const OrderControler = require('./controllers/OrderController')

router.get('/orders', OrderControler.getAll)

module.exports = router