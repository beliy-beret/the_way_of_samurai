import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../homePage/HomePage';
import AppLayout from './AppLayout';
import AuthPage from '../authPage/AuthPage';
import UsersPage from '../usersPage/UsersPage';
import ProfilePage from '../profilePage/ProfilePage';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<HomePage />} />
        <Route path="auth" element={<AuthPage />} />
        <Route path="users" element={<UsersPage />} />
        <Route path="id=:id" element={<ProfilePage />} />
      </Route>
    </Routes>
  );
}
