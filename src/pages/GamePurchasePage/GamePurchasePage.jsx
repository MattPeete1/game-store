import { useState, useEffect, useRef } from 'react';
import * as gamesAPI from '../../utilities/games-api'
import { Link } from 'react-router-dom';
import GameCatalog from '../../components/GameCatalog/GameCatalog';
import CategoryList from '../../components/CategoryList/CategoryList';
import PurchaseDetail from '../../components/PurchaseDetail/PurchaseDetail';
import UserLogOut from '../../components/UserLogOut/UserLogOut';

export default function GamePurchasePage({ user, setUser}) {
        const [videoGames, setVideoGames] = useState([]);
        const [activeCat, setActiveCat] = useState('');
        const categoriesRef = useRef([]);

        useEffect(function() {
            async function getGames() {
                const games = await gamesAPI.getAll();
                categoriesRef.current = [...new Set(games.map(game => game.category.genre))];
                setVideoGames(games);
                setActiveCat(categoriesRef.current[0]);
            }
            getGames();
          }, []);

    return (
        <main className="GamePurchasePage">
        <aside>
            <CategoryList
            categories={categoriesRef.current}
            activeCat={activeCat}
            setActiveCat={setActiveCat}
            />
        </aside>
        <GameCatalog
            videoGames={videoGames.filter(game => game.category.genre === activeCat)}
        />
        <PurchaseDetail />
        </main>
    )
}
