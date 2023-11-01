import './GameCatalog.css';
import GameCatalogGame from '../GameCatalogGame/GameCatalogGame';

export default function GameCatalog({ catalogGames, handleAddToOrder }) {
  const games = catalogGames.map(game =>
    <GameCatalogGame
      key={game._id}
      catalogGame={game}
      handleAddToOrder={handleAddToOrder}
    />
  );
  return (
    <main className="GameCatalog">
      {games}
    </main>
  );
}