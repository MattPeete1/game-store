import './GameCatalogGame.css';

export default function GameCatalogGame({ videoGame }) {
  return (
    <div className="GameCatalogGame">
      <div className="symbol flex-ctr-ctr">{videoGame.symbol}</div>
      <div className="title">{videoGame.title}</div>
      <div className="buy">
        <span>${videoGame.price.toFixed(2)}</span>
        <button className="btn-sm" onClick={() => console.log('clicked')}>
          ADD
        </button>
      </div>
    </div>
  );
}