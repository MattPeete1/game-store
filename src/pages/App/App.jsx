import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage'
import NavBar from '../../components/NavBar/NavBar';
import GamePurchasePage from '../GamePurchasePage/GamePurchasePage';
import GamePurchaseHistoryPage from '../GamePurchaseHistoryPage/GamePurchaseHistoryPage';


export default function App() {
  const [user, setUser] = useState(getUser());
  return (
    <main className="App">
      { user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            <Route path="/orders/new" element={ <GamePurchasePage /> }/>
            <Route path="/orders" element={ <GamePurchaseHistoryPage /> }/>
          </Routes>
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}