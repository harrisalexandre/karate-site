import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Bem-vindo ao Karatê Online</h1>
      <p>Seu portal para gestão de treinos e acompanhamento de progresso no Karatê.</p>
      <Link to="/login">
        <button>Login</button>
      </Link>
    </div>
  );
}

export default Home;
