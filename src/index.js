import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import FolderContextProvider from './context/FolderContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FolderContextProvider>
    <App />
    </FolderContextProvider>
  </React.StrictMode>
);
