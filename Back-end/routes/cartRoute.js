const express = require('express')
const router = express.Router()
const { addCart, updateCart, deleteCart, getCart } = require('../controllers/cartController')


router.post('/', addCart)
router.put('/:id', updateCart)
router.get(':id', getCart)
router.delete('/:id', deleteCart)

module.exports = router