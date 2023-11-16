const express = require('express')
const router = express.Router()
const validateToken = require('../middleware/validateToken')
const {savePicture, getAllPicture, getByFarmer, getPicture} = require('../controllers/stockProfileController')


router.use(validateToken)
router.post('/:id', savePicture)
router.get('/', getAllPicture)
router.get('/id', getPicture)
module.exports = router