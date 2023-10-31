import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import './App.css';
import AuthPage from '../AuthPage/AuthPage'
import NavBar from '../../components/NavBar/NavBar';
import GamePurchasePage from '../GamePurchasePage/GamePurchasePage';
import GamePurchaseHistoryPage from '../GamePurchaseHistoryPage/GamePurchaseHistoryPage';


export default function App() {
  const [user, setUser] = useState(null)
  
  return (
    <main className="App">
      { user ?
            <>
                <NavBar />
                <Routes>
                    <Route path="/orders/new" element={ <GamePurchasePage /> }/>
                    <Route path="/orders" element={ <GamePurchaseHistoryPage /> }/>
                </Routes>
            </>

            :
            <AuthPage />
      }
    </main>
  );
}