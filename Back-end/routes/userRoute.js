const express = require('express')
const router = express.Router()
const { getAdmin, registerAdmin, loginAdmin } = require('../controllers/userController')

router.post('/register', registerAdmin)
router.post('/login', loginAdmin)
router.get('/', getAdmin)



module.exports = router