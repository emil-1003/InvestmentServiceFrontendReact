import React from 'react';
import HomePage from "./pages/HomePage"
import LoginPage from "./pages/LoginPage"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import SignupPage from './pages/SingupPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <div>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="*" element={<NotFoundPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
