const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const gameSchema = require('./gameSchema');

const lineGameSchema = new Schema({
  qty: { type: Number, default: 1 },
  game: gameSchema
}, {
  timestamps: true,
  toJSON: { virtuals: true }
});

lineGameSchema.virtual('extPrice').get(function() {
  return this.qty * this.game.price;
});

const purchaseSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  lineGames: [lineGameSchema],
  isPaid: { type: Boolean, default: false } 
}, {
  timestamps: true,
  toJSON: { virtuals: true }
});

purchaseSchema.virtual('purchaseTotal').get(function() {
  return this.lineGames.reduce((total, game) => total + game.extPrice, 0);
});

purchaseSchema.virtual('purchaseQty').get(function() {
  return this.lineGames.reduce((total, game) => total + game.qty, 0);
});

purchaseSchema.virtual('purchaseId').get(function() {
  return this.id.slice(-6).toUpperCase();
});

purchaseSchema.statics.getCart = function(userId) {
  return this.findOneAndUpdate(
    { user: userId, isPaid: false },
    { user: userId },
    { upsert: true, new: true }
  );
};

purchaseSchema.methods.addGameToCart = async function (gameId) {
  const cart = this;
  const lineGame = cart.lineGames.find(lineGame => lineGame.game._id.equals(gameId));
  if (lineGame) {
    lineGame.qty += 1;
  } else {
    const Game = mongoose.model('Game');
    const game = await Game.findById(gameId);
    cart.lineGames.push({ game });
  }
  return cart.save();
};

purchaseSchema.methods.setGameQty = function(gameId, newQty) {
  const cart = this;
  const lineGame = cart.lineGames.find(lineGame => lineGame.game._id.equals(gameId));
  if (lineGame && newQty <= 0) {
    lineGame.deleteOne();
  } else if (lineGame) {
    lineGame.qty = newQty;
  }
  return cart.save();
};

module.exports = mongoose.model('Purchase', purchaseSchema);
