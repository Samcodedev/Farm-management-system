const express = require('express')
const router = express.Router()
const { getAdmin, registerAdmin, loginAdmin, forgetPassword, resetPassword } = require('../controllers/userController')
const validateToken = require('../middleware/validateToken')

// all endpoint on USER route
router.post('/register', registerAdmin)
router.post('/login', loginAdmin)
router.post('/forget', forgetPassword)
router.post('/reset', resetPassword)
// private endpoint
router.get('/', validateToken, getAdmin)



module.exports = router