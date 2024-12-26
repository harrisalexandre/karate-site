import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // Lógica de autenticação
    if (email === 'admin@karate.com' && password === 'admin123') {
      navigate('/dashboard');
    } else if (email === 'user@karate.com' && password === 'user123') {
      navigate('/dashboard');
    } else {
      setError('Email ou senha incorretos.');
    }
  };

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundImage: "url('https://via.placeholder.com/800x600')",
      backgroundSize: 'cover',
    }}>
      <div style={{
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        padding: '30px',
        borderRadius: '10px',
        textAlign: 'center',
      }}>
        <h1>Login</h1>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button onClick={handleLogin}>Entrar</button>
        <br />
        <div style={{ marginTop: '20px' }}>
          <button onClick={() => navigate('/register')} style={{ marginRight: '10px' }}>Cadastre-se</button>
          <button onClick={() => navigate('/forgot-password')}>Esqueci a senha</button>
        </div>
      </div>
    </div>
  );
}

export default Login;