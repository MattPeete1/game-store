import './PurchaseDetail.css';
import LineGame from '../LineGame/LineGame';

export default function PurchaseDetail({ purchase, handleChangeQty, handleCheckout }) {
  if (!purchase) return null;

  const lineGames = purchase.lineGames.map(game =>
    <LineGame
      lineGame={game}
      isPaid={purchase.isPaid}
      handleChangeQty={handleChangeQty}
      key={game._id}
    />
  );

  return (
    <div className="PurchaseDetail">
      <div className="section-heading">
        {purchase.isPaid ?
          <span>Purchase History <span className="smaller">{purchase.purchaseId}</span></span>
          :
          <span>Cart</span>
        }
        <span>{new Date(purchase.updatedAt).toLocaleDateString()}</span>
      </div>
      <div className="line-game-container flex-ctr-ctr flex-col scroll-y">
        {lineGames.length ?
          <>
            {lineGames}
            <section className="total">
              {purchase.isPaid ?
                <span className="right">Total&nbsp;&nbsp;</span>
                :
                <button
                  className="btn-sm"
                  onClick={handleCheckout}
                  disabled={!lineGames.length}
                >Purchase</button>
              }
              <span>{purchase.totalQty}</span>
              <span className="right">${purchase.purchaseTotal.toFixed(2)}</span>
            </section>
          </>
          :
          <div className="add-games-to-cart">Add games to cart!</div>
        }
      </div>
    </div>
  );
}