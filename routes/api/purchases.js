const express = require('express');
const router = express.Router();
const purchasesCtrl = require('../../controllers/api/purchases');

router.get('/cart', purchasesCtrl.cart);
router.post('/cart/games/:id', purchasesCtrl.addToCart);
router.post('/cart/checkout', purchasesCtrl.checkout);
router.put('/cart/qty', purchasesCtrl.setGameQtyInCart);

module.exports = router;
