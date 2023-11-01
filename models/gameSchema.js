const Schema = require('mongoose').Schema;

const gameSchema = new Schema({
  title: { type: String, required: true },
  symbol: String,
  category: {type: Schema.Types.ObjectId, ref: 'Category'},
  price: { type: Number, required: true }
}, {
  timestamps: true
});

module.exports = gameSchema;