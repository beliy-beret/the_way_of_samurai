import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../homePage/HomePage';
import AppLayout from './AppLayout';
import AuthFormPage from '../authFormPage/AuthFormPage';
import UsersPage from '../usersPage/UsersPage';
import ProfilePage from '../profilePage/ProfilePage';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Home />} />
        <Route path="auth" element={<AuthFormPage />} />
        <Route path="users" element={<UsersPage />} />
        <Route path="id=:id" element={<ProfilePage />} />
      </Route>
    </Routes>
  );
}
