const express = require('express')
const router = express.Router()
const {registerClient, loginClient, getClient} = require('../controllers/clientController')
const validateToken = require('../middleware/validateToken')


router.post('/register', registerClient)
router.post('/login', loginClient)
router.get('/', validateToken, getClient)

module.exports = router