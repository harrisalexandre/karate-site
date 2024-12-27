import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import ForgotPassword from './pages/ForgotPassword';
import Dashboard from './pages/Dashboard';
import UserList from './pages/admin/UserList';
import Profile from './pages/Profile';
import CalendarView from './pages/dashboard/CalendarView';

function App() {
  return (
    <Router basename="/karate-site">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/dashboard/*" element={<Dashboard />} />
        <Route path="/admin/users" element={<UserList />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/dashboard/calendar" element={<CalendarView />} />
      </Routes>
    </Router>
  );
}

export default App;
