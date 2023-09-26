import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

import 'react-toastify/dist/ReactToastify.min.css';
import './styles/index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
