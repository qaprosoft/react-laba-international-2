import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
// });

// const root = ReactDOM.createRoot(document.createElement('div'));

it('renders without crashing', () => {
  const root = ReactDOM.createRoot(document.createElement('div'));
  root.render(App);
})
