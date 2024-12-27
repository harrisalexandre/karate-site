import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Profile() {
  const navigate = useNavigate();
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5000/users/1') // Exemplo: ID 1 para o perfil atual
      .then((response) => setProfile(response.data))
      .catch((error) => console.error('Erro ao carregar perfil:', error));
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <button onClick={() => navigate('/dashboard')}>Voltar</button>
      <h1>Meu Perfil</h1>
      {profile ? (
        <div>
          <img src={profile.picture || 'https://via.placeholder.com/150'} alt="Foto de perfil" style={{ width: '150px', borderRadius: '50%' }} />
          <p>Nome: {profile.name}</p>
          <p>Função: {profile.role}</p>
          <p>Email: {profile.email}</p>
          <p>Horários: {profile.schedule.length ? profile.schedule.join(', ') : 'Nenhum horário agendado'}</p>
        </div>
      ) : (
        <p>Carregando...</p>
      )}
    </div>
  );
}

export default Profile;