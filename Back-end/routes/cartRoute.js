const express = require('express')
const router = express.Router()
const {addCart, deleteCart} = require('../controllers/cartController')


router.post('/', addCart)
router.delete('/', deleteCart)

module.exports = router