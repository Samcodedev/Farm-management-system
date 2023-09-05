const express = require('express')
const router = express.Router()
const validateToken = require('../middleware/validateToken')
const {registerStock, getStock, updateStock, stockDetail} = require('../controllers/stockController')


router.use(validateToken)
router.post('/register', registerStock)
router.get('/', getStock)
router.put('/:id', updateStock)
router.get('/:id', stockDetail)

module.exports = router