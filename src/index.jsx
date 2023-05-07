import React from 'react';
import ReactDOM from 'react-dom/client';
import './input.css';
import {BrowserRouter,Route,Routes, Navigate} from "react-router-dom";
import Dashboard from './auth/Dashboard';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/admin" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


