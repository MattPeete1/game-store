import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage'
import NavBar from '../../components/NavBar/NavBar';
import GamePurchasePage from '../GamePurchasePage/GamePurchasePage';
import GamePurchaseHistoryPage from '../GameShipPage/GameShipPage';
import WishListPage from '../WishListPage/WishListPage'
import WishEditPage from '../WishEditPage/WishEditPage';


export default function App() {
  const [user, setUser] = useState(getUser());
  return (
    <main className="App">
      { user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            <Route path="/purchases/new" element={<GamePurchasePage user={user} setUser={setUser} />} />
            <Route path="/purchases" element={<GamePurchaseHistoryPage />} />
            <Route path="/wishes" element={<WishListPage user={user}/>} />
            <Route path="/wishes/:wishId" element={<WishEditPage user={user} />} />
            {}
            <Route path="/*" element={<Navigate to="/purchases/new" />} />
          </Routes>
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}