import { useState, useEffect, useRef } from 'react';
import * as gamesAPI from '../../utilities/games-api';
import * as purchasesAPI from '../../utilities/purchases-api';
import './GamePurchasePage.css';
import { useNavigate } from 'react-router-dom';
import GameCatalog from '../../components/GameCatalog/GameCatalog';
import CategoryList from '../../components/CategoryList/CategoryList';
import PurchaseDetail from '../../components/PurchaseDetail/PurchaseDetail';

export default function GamePurchasePage() {
  const [catalogGames, setCatalogGames] = useState([]);
  const [activeCat, setActiveCat] = useState('');
  const [cart, setCart] = useState(null);
  const categoriesRef = useRef([]);
  const navigate = useNavigate();

  useEffect(function() {
    async function getGames() {
      const games = await gamesAPI.getAll();
      categoriesRef.current = [...new Set(games.map(game => game.category.genre))];
      setCatalogGames(games);
      setActiveCat(categoriesRef.current[0]);
    }
    getGames();

    async function getCart() {
      const cart = await purchasesAPI.getCart();
      setCart(cart);
    }
    getCart();
  }, []);

  async function handleAddToOrder(gameId) {
    const updatedCart = await purchasesAPI.addGameToCart(gameId);
    setCart(updatedCart);
  }

  async function handleChangeQty(gameId, newQty) {
    const updatedCart = await purchasesAPI.setGameQtyInCart(gameId, newQty);
    setCart(updatedCart);
  }

  async function handleCheckout() {
    await purchasesAPI.checkout();
    navigate('/purchases');
  }


  return (
    <main className="GamePurchasePage">
      <aside className='cats'>
        <CategoryList
          categories={categoriesRef.current}
          activeCat={activeCat}
          setActiveCat={setActiveCat}
        />
      </aside>
      <div className='cata'>
      <GameCatalog
        catalogGames={catalogGames.filter(game => game.category.genre === activeCat)}
        handleAddToOrder={handleAddToOrder}
      />
      </div>
      <div className='purD'>
      <PurchaseDetail
        purchase={cart}
        handleChangeQty={handleChangeQty}
        handleCheckout={handleCheckout}
      />
      </div>
    </main>
  );
}