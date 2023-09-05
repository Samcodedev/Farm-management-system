const express = require('express')
const router = express.Router()
const { getAdmin, registerAdmin, loginAdmin } = require('../controllers/userController')
const validateToken = require('../middleware/validateToken')

router.post('/register', registerAdmin)
router.post('/login', loginAdmin)
router.get('/', validateToken, getAdmin)



module.exports = router