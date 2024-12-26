import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function UserList() {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/users')
      .then((response) => setUsers(response.data))
      .catch((error) => console.error('Erro ao carregar usuários:', error));
  }, []);

  const handleAddUser = () => {
    navigate('/register');
  };

  return (
    <div>
      <h2>Lista de Usuários</h2>
      <button onClick={handleAddUser}>Adicionar Usuário</button>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Função</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.role}</td>
              <td>
                <button onClick={() => navigate(`/dashboard/users/${user.id}`)}>Editar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserList;