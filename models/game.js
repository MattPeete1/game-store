const mongoose = require('mongoose');

require('./category');
const gameSchema = require('./gameSchema');

module.exports = mongoose.model('Game', gameSchema);