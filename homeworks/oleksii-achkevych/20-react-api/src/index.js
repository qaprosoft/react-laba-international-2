import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {ToDoProvider} from './context/ToDoContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ToDoProvider>
    <App />
  </ToDoProvider>,
);
