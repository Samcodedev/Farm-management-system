const express = require('express')
const router = express.Router()
const validateToken = require('../middleware/validateToken')
const {registerStock, getStock, updateStock, stockDetail, deleteStock} = require('../controllers/stockController')
const upload = require('../utils/upload')


// all endpoint on STOCK route, they are all private endpoint
router.get('/', getStock)
// router.use(validateToken)
router.post('/register', validateToken, upload.single('stockImage'), registerStock)
router.put('/:id', updateStock)
router.get('/:id', stockDetail)
router.delete('/:id', deleteStock)

module.exports = router