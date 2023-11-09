const express = require('express')
const router = express.Router()
const validateToken = require('../middleware/validateToken')
const upload = require("../utils/upload")
const {registerStock, getStock, updateStock, stockDetail, deleteStock} = require('../controllers/stockController')
const uploadPicture = require('../utils/upload')


// all endpoint on STOCK route, they are all private endpoint
router.get('/', getStock)
router.use(validateToken)
router.post('/register',uploadPicture.single("image"),registerStock)
router.put('/:id', updateStock)
router.get('/:id', stockDetail)
router.delete('/:id', deleteStock)

module.exports = router