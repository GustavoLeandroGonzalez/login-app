import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// Si quieres comenzar a medir el rendimiento de tu aplicación, pasa una función
// para registrar resultados (por ejemplo: reportWebVitals(console.log))
// o envía a un endpoint de analíticas. Más información: https://bit.ly/CRA-vitals
reportWebVitals();
