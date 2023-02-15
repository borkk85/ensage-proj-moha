const express = require('express')
const router = express.Router()
const { getCard, postCard, updateCard, deleteCard } =  require('../controller/cardController')
const { protect } = require('../middleware/authMiddleware')


router.route('/').get(protect, getCard).post(protect, postCard)
router.route('/:id').delete(protect, deleteCard).put(protect, updateCard)


module.exports = router