import React, { useState } from 'react';
import AuthForm from './AuthForm';

interface User {
  username: string;
  password: string;
}

const DB_KEY = 'gymtrack_users';

function getUsers(): User[] {
  return JSON.parse(localStorage.getItem(DB_KEY) || '[]');
}

const Login: React.FC<{ onLogin: (username: string) => void }> = ({ onLogin }) => {
  const [error, setError] = useState('');

  const handleLogin = (username: string, password: string) => {
    const users = getUsers();
    const user = users.find(u => u.username === username && u.password === password);
    if (!user) {
      setError('Invalid username or password');
      return;
    }
    setError('');
    onLogin(username);
  };

  return (
    <div>
      <AuthForm onSubmit={handleLogin} title="Login" submitLabel="Login" />
      {error && <div style={{ color: 'red', textAlign: 'center' }}>{error}</div>}
    </div>
  );
};

export default Login;
