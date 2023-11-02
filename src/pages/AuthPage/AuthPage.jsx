import { useState } from 'react';
import LoginForm from '../../components/LoginForm/LoginForm';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import './AuthPage.css';

export default function AuthPage({ setUser }) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <main className="AuthPage">
        <div className='ti'>The Game Center</div>
      <div>
        <h3 onClick={() => setShowLogin(!showLogin)}>{showLogin ? 'SIGN UP' : 'LOG IN'}</h3>
      </div>
      <div className='auth-style'>
        {showLogin ? <LoginForm setUser={setUser} /> : <SignUpForm setUser={setUser} />}
      </div>
    </main>
  );
}