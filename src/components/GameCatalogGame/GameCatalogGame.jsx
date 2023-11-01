import './GameCatalogGame.css';

export default function GameCatalogGame({ catalogGame, handleAddToOrder }) {
  return (
    <div className="GameCatalogGame">
      <div className="symbol flex-ctr-ctr">{catalogGame.symbol}</div>
      <div className="title">{catalogGame.title}</div>
      <div className="buy">
        <span>${catalogGame.price.toFixed(2)}</span>
        <button className="btn-sm" onClick={() => handleAddToOrder(catalogGame._id)}>
          ADD
        </button>
      </div>
    </div>
  );
}