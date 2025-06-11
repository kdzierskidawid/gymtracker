import React, { useState } from 'react';
import AuthForm from './AuthForm';

interface User {
  username: string;
  password: string;
}

// Simulate a JSON SQL database using localStorage
const DB_KEY = 'gymtrack_users';

function getUsers(): User[] {
  return JSON.parse(localStorage.getItem(DB_KEY) || '[]');
}

function saveUsers(users: User[]) {
  localStorage.setItem(DB_KEY, JSON.stringify(users));
}

const Register: React.FC<{ onRegistered: () => void }> = ({ onRegistered }) => {
  const [error, setError] = useState('');

  const handleRegister = (username: string, password: string) => {
    const users = getUsers();
    if (users.find(u => u.username === username)) {
      setError('Username already exists');
      return;
    }
    users.push({ username, password });
    saveUsers(users);
    setError('');
    onRegistered();
  };

  return (
    <div>
      <AuthForm onSubmit={handleRegister} title="Register" submitLabel="Register" />
      {error && <div style={{ color: 'red', textAlign: 'center' }}>{error}</div>}
    </div>
  );
};

export default Register;
