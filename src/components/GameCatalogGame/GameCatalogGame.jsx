import './GameCatalogGame.css';

export default function GameCatalogGame({ videoGame }) {
  return (
    <div className="GameCatalogGame">
      <div className="emoji flex-ctr-ctr">{videoGame.emoji}</div>
      <div className="name">{videoGame.name}</div>
      <div className="buy">
        <span>${videoGame.price.toFixed(2)}</span>
        <button className="btn-sm" onClick={() => console.log('clicked')}>
          ADD
        </button>
      </div>
    </div>
  );
}