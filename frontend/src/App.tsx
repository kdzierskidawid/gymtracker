import React, { useState } from 'react';
import './App.css';
import Register from './Register';
import Login from './Login';

const GymTrack: React.FC = () => {
  const [page, setPage] = useState<'login' | 'register' | 'dashboard'>('login');
  const [user, setUser] = useState<string | null>(null);

  const handleLogin = (username: string) => {
    setUser(username);
    setPage('dashboard');
  };

  const handleLogout = () => {
    setUser(null);
    setPage('login');
  };

  return (
    <div className="App">
      <h1>GymTrack</h1>
      {page === 'login' && (
        <>
          <Login onLogin={handleLogin} />
          <p style={{ textAlign: 'center' }}>
            Don't have an account?{' '}
            <button onClick={() => setPage('register')}>Register</button>
          </p>
        </>
      )}
      {page === 'register' && (
        <>
          <Register onRegistered={() => setPage('login')} />
          <p style={{ textAlign: 'center' }}>
            Already have an account?{' '}
            <button onClick={() => setPage('login')}>Login</button>
          </p>
        </>
      )}
      {page === 'dashboard' && user && (
        <div style={{ textAlign: 'center' }}>
          <h2>Welcome, {user}!</h2>
          <button onClick={handleLogout}>Logout</button>
          <p>Dashboard coming soon...</p>
        </div>
      )}
    </div>
  );
};

export default GymTrack;
