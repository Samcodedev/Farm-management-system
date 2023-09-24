const express = require('express')
const router = express.Router()
const validateToken = require('../middleware/validateToken')
const {registerStock, getStock, updateStock, stockDetail, deleteStock} = require('../controllers/stockController')


// all endpoint on STOCK route, they are all private endpoint
router.get('/', getStock)
router.use(validateToken)
router.post('/register', registerStock)
router.put('/:id', updateStock)
router.get('/:id', stockDetail)
router.delete('/:id', deleteStock)

module.exports = router