import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Profile() {
  const navigate = useNavigate();
  const [profile, setProfile] = useState({
    name: 'João Silva',
    age: 30,
    gender: 'Masculino',
    phone: '123-456-7890',
    cpf: '000.000.000-00',
    birthDate: '1993-01-01',
    registrationDate: '2023-01-01',
    active: true,
    picture: '',
    payments: {
      credit: 0,
      overdue: 0,
      current: 100,
      nextDueDate: '2024-01-15',
    },
    contracts: {
      currentPlan: 'Mensal',
      history: ['Mensal', 'Semanal'],
    },
    gradingExam: '2023-06-10',
    lastAccess: '2023-12-20',
  });

  const handlePictureChange = (event) => {
    const file = event.target.files[0];
    setProfile({ ...profile, picture: URL.createObjectURL(file) });
  };

  return (
    <div style={{ padding: '20px' }}>
      <button onClick={() => navigate('/dashboard')}>Voltar</button>
      <h1>Meu Perfil</h1>
      <img src={profile.picture || 'https://via.placeholder.com/150'} alt="Foto de perfil" style={{ width: '150px', borderRadius: '50%' }} />
      <br />
      <input type="file" onChange={handlePictureChange} />
      <p>Nome: {profile.name}</p>
      <p>Idade: {profile.age}</p>
      <p>Sexo: {profile.gender}</p>
      <p>Telefone: {profile.phone}</p>
      <p>CPF: {profile.cpf}</p>
      <p>Data de Nascimento: {profile.birthDate}</p>
      <p>Data de Cadastro: {profile.registrationDate}</p>
      <p>Status: {profile.active ? 'Ativo' : 'Inativo'}</p>
      <p>Vencimentos:</p>
      <ul>
        <li>Crédito: {profile.payments.credit}</li>
        <li>Em atraso: {profile.payments.overdue}</li>
        <li>Atual: {profile.payments.current}</li>
        <li>Próximo vencimento: {profile.payments.nextDueDate}</li>
      </ul>
      <p>Plano Atual: {profile.contracts.currentPlan}</p>
      <p>Histórico de Planos: {profile.contracts.history.join(', ')}</p>
      <p>Último Exame de Graduação: {profile.gradingExam}</p>
      <p>Último Acesso: {profile.lastAccess}</p>
    </div>
  );
}

export default Profile;