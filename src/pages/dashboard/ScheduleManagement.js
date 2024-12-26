import React from 'react';
import { useNavigate } from 'react-router-dom';

function ScheduleManagement() {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Gerenciamento de Aulas</h2>
      <p>Área para criar, visualizar e gerenciar os horários das aulas de Karatê.</p>
      <button onClick={() => navigate('/dashboard/calendar')}>Ver Calendário</button>
    </div>
  );
}

export default ScheduleManagement;