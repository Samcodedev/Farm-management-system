const express = require('express')
const router = express.Router()
const validateToken = require('../middleware/validateToken')
const {savePicture, getPicture} = require('../controllers/profileController')


router.use(validateToken)
router.post('/:id', savePicture)
router.get('/', getPicture)

module.exports = router