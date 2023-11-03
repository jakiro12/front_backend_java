import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import Login from './pages/Login';
import reportWebVitals from './reportWebVitals';

import './css/styles.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Router>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<App />} />
    </Routes>
  </Router>,
);

reportWebVitals();
