import React from 'react';
import ReactDOM from 'react-dom/client';
import './styleFiles/index.css';
import App from './App';
import { HashRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap" rel="stylesheet" />
    
    <HashRouter>
      <head>
        <meta name="description" content="Zach Upstone's personal website" />
        <meta name="keywords" content="Zach Upstone, Zachary Upstone, Zach, Upstone, Graduate, Porgrammer, Developer, Artist" />
        <meta name="author" content="Zach Upstone, Zachary Upstone" />
      </head> 

      <App className="no-scroll" />
    </HashRouter>
  </React.StrictMode>
);

