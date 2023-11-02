const express = require('express')
const router = express.Router()
const wishesCtrl = require('../../controllers/api/wishes')

router.post('/', wishesCtrl.createWish)
router.delete('/:id', wishesCtrl.deleteWish)
router.patch('/:id', wishesCtrl.updateWish)
router.get('/:id', wishesCtrl.index)

module.exports = router