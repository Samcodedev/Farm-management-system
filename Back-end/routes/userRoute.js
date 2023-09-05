const express = require('express')
const router = express.Router()
const { getAdmin, registerAdmin, loginAdmin } = require('../controllers/userController')
const validateToken = require('../middleware/validateToken')

// all endpoint on USER route
router.post('/register', registerAdmin)
router.post('/login', loginAdmin)
// private endpoint
router.get('/', validateToken, getAdmin)



module.exports = router