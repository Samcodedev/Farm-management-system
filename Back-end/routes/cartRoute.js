const express = require('express')
const router = express.Router()
const { addCart, deleteCart, getCart } = require('../controllers/cartController')


router.post('/:id', addCart)
router.get('/:id', getCart)
router.delete('/:id', deleteCart)

module.exports = router