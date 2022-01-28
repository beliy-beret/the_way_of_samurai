import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../homePage/HomePage';
import AppLayout from './AppLayout';
import AuthFormPage from '../authFormPage/AuthFormPage';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Home />} />
        <Route path="auth" element={<AuthFormPage />} />
      </Route>
    </Routes>
  );
}
