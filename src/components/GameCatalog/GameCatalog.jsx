import './GameCatalog.css';
import GameCatalogGame from '../GameCatalogGame/GameCatalogGame';

export default function GameCatalog({ videoGames }) {
  const games = videoGames.map(game =>
    <GameCatalogGame
      key={game._id}
      videoGame={game}
    />
  );
  return (
    <main className="GameCatalog">
      {games}
    </main>
  );
}