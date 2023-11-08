const express = require('express')
const router = express.Router()
const validateToken = require('../middleware/validateToken')
const {addCart, deleteCart, getCart} = require('../controllers/cartController')
const { payment } = require('../controllers/paymentController')


router.use(validateToken)
router.get('/', getCart)
router.post('/', addCart)
router.delete('/', deleteCart)
router.post('/payment/', payment)

module.exports = router