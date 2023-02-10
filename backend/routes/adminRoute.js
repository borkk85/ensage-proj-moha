const express = require('express')
const router = express.Router()
const { registerAdmin, loginAdmin, getMe } = require('../controller/adminController')
const { protect } = require('../middleware/authMiddleware')

router.post('/', registerAdmin)
router.post('/login', loginAdmin)
router.get('/me', protect, getMe)

module.exports = router