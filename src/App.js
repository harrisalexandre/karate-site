// Estrutura inicial do projeto React com melhorias dinâmicas e interatividade
// Certifique-se de ter Node.js instalado e crie o app com: `npx create-react-app karate-site`

// Instale dependências adicionais:
// npm install react-router-dom axios styled-components firebase react-big-calendar moment json-server gh-pages

// Atualização das funcionalidades:
// - Implementação de calendário interativo com react-big-calendar.
// - Páginas dinamicamente melhoradas com imagens e interatividade.
// - Suporte a banco de dados JSON para perfis e eventos.
// - Configuração para publicação no GitHub Pages.

// Arquivo: App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import UserList from './pages/admin/UserList';
import Register from './pages/Register';
import ForgotPassword from './pages/ForgotPassword';
import Profile from './pages/Profile';
import CalendarView from './pages/dashboard/CalendarView';

function App() {
  return (
    <Router basename="/karate-site">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard/*" element={<Dashboard />} />
        <Route path="/admin/users" element={<UserList />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;