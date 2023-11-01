// Connect to the database
require('dotenv').config();
require('./config/database');

// Require the Mongoose models
const User = require('./models/user');
const Game = require('./models/game');
const Category = require('./models/category');
// const Order = require('./models/order');

let user, game, category, order;
let users, games, categories, orders;