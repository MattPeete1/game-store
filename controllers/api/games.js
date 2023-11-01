const Game = require('../../models/game');

module.exports = {
  index,
  show
};

async function index(req, res) {
  const games = await Game.find({}).sort('name').populate('category').exec();
  games.sort((a, b) => a.category.sortOrder - b.category.sortOrder);
  res.json(games);
}

async function show(req, res) {
  const game = await Game.findById(req.params.id);
  res.json(game);
}
