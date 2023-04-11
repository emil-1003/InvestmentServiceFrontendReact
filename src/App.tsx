import React from 'react';
import HomePage from "./pages/HomePage"
import LoginPage from "./pages/LoginPage"
import { BrowserRouter, Route, Routes } from "react-router-dom"

function App() {
  return (
    <div>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="*" element={<p>Not found</p>} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
