const Purchase = require('../../models/purchase');
// const Game = require('../../models/game');

module.exports = {
  cart,
  addToCart,
  setGameQtyInCart,
  checkout,
};

async function cart(req, res) {
  const cart = await Purchase.getCart(req.user._id);
  res.json(cart);
}

async function addToCart(req, res) {
  const cart = await Purchase.getCart(req.user._id);
  await cart.addGameToCart(req.params.id);
  res.json(cart);
}

async function setGameQtyInCart(req, res) {
  const cart = await Purchase.getCart(req.user._id);
  await cart.setGameQty(req.body.gameId, req.body.newQty);
  res.json(cart);
}

async function checkout(req, res) {
  const cart = await Purchase.getCart(req.user._id);
  cart.isPaid = true;
  await cart.save();
  res.json(cart);
}

