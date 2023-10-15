import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Settings from './Context/Settings';
import App from './App';
import NavBar from './Components/Nav';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <NavBar />
      <Routes>
        <Route path="/home" element={<App />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
