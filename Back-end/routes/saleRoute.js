const express = require('express')
const router = express.Router()
const {listStock, updateListedStock, getListedStock} = require('../controllers/saleController')
const validateToken = require('../middleware/validateToken')


router.use(validateToken)
router.post('/:id', listStock)
router.put('/update', updateListedStock)
router.get('/:id', getListedStock)

module.exports = router