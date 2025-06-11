import React, { useState } from 'react';

interface AuthFormProps {
  onSubmit: (username: string, password: string) => void;
  title: string;
  submitLabel: string;
}

const AuthForm: React.FC<AuthFormProps> = ({ onSubmit, title, submitLabel }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        onSubmit(username, password);
      }}
      style={{ display: 'flex', flexDirection: 'column', gap: 12, maxWidth: 320, margin: '0 auto' }}
    >
      <h2 style={{ textAlign: 'center' }}>{title}</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={e => setUsername(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        required
      />
      <button type="submit">{submitLabel}</button>
    </form>
  );
};

export default AuthForm;
