import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { TrucoContextProvider } from './contexts/truco.tsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <TrucoContextProvider>
      <App />
    </TrucoContextProvider>
  </React.StrictMode>
);
