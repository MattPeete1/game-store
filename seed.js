require('dotenv').config();
require('./config/database');

const Category = require('./models/category');
const Game = require('./models/game');

(async function() {
  await Category.deleteMany({});
  const categories = await Category.create([
    {genre: 'RPG', sortOrder: 10},
    {genre: 'FPS', sortOrder: 20},
    {genre: 'Sports', sortOrder: 30},
    {genre: 'Indie', sortOrder: 40},
    {genre: 'Horror', sortOrder: 50},
  ]);

  await Game.deleteMany({});
  const games = await Game.create([
    {title: 'Red Dead Redemtion 2', symbol: '🎮', category: categories[0], price: 59.99},
    {title: 'Grand Theft Auto V', symbol: '🎮', category: categories[0], price: 29.99},
    {title: 'Call of Duty Black Ops 3', symbol: '🎮', category: categories[1], price: 29.99},
    {title: 'Call of Duty Ghosts', symbol: '🎮', category: categories[1], price: 19.99},
    {title: 'Call of Duty Modern Warfare 3', symbol: '🎮', category: categories[1], price: 15.99},
    {title: 'CupHead', symbol: '🎮', category: categories[3], price: 19.99},
    {title: 'NBA 2k18', symbol: '🎮', category: categories[2], price: 29.99},
    {title: 'FC24', symbol: '🎮', category: categories[2], price: 69.99},
    {title: 'FIFA 20', symbol: '🎮', category: categories[2], price: 29.99},
    {title: 'The Last of Us', symbol: '🎮', category: categories[4], price: 19.99},
    {title: 'The Evil Within', symbol: '🎮', category: categories[4], price: 5.99},
    {title: 'Days Gone', symbol: '🎮', category: categories[0], price: 19.99},
    {title: 'Call of Duty Black Ops 2', symbol: '🎮', category: categories[1], price: 19.99},
    {title: 'Counter Strike Global Offensive', symbol: '🎮', category: categories[1], price: 0},
    {title: 'The Quarry', symbol: '🎮', category: categories[4], price: 59.99},
    {title: 'Batman Arkham Origins', symbol: '🎮', category: categories[0], price: 5.99},
    {title: 'Horizon Zero Dawn', symbol: '🎮', category: categories[0], price: 49.99},
    {title: 'Tom Clancys Rainbow Six Siege', symbol: '🎮', category: categories[1], price: 0},
  ]);

  console.log(games)

  process.exit();
})();