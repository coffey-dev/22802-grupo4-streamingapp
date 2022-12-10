import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Peliculas from './components/Peliculas';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Peliculas />
  </React.StrictMode>
);
