import React from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import UserManagement from './dashboard/UserManagement';
import ScheduleManagement from './dashboard/ScheduleManagement';
import CalendarView from './dashboard/CalendarView';

function Dashboard() {
  const navigate = useNavigate();

  return (
    <div style={{ padding: '20px' }}>
      <h1>Dashboard</h1>
      <nav>
        <button onClick={() => navigate('/dashboard/users')}>Gerenciar Usuários</button>
        <button onClick={() => navigate('/dashboard/schedule')}>Gerenciar Aulas</button>
        <button onClick={() => navigate('/profile')}>Meu Perfil</button>
      </nav>
      <Routes>
        <Route path="users" element={<UserManagement />} />
        <Route path="schedule" element={<ScheduleManagement />} />
        <Route path="calendar" element={<CalendarView />} />
      </Routes>
    </div>
  );
}

export default Dashboard;