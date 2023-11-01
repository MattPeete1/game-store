// Connect to the database
require('dotenv').config();
require('./config/database');

// Require the Mongoose models
const User = require('./models/user');
const Game = require('./models/game');
const Category = require('./models/category');
const Purchase = require('./models/purchase');

let user, game, category, purchase;
let users, games, categories, purchases;