import React from 'react';

import ReactDOM from 'react-dom/client';
import './index.css';
import { HashRouter } from 'react-router-dom';

import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap" rel="stylesheet" />
    <link rel="preload" href="SevenSegmentRegular.woff2" as="font" type="font/woff2" crossOrigin="true"></link>
    
    <HashRouter>
      <meta name="description" content="Zach Upstone's personal website" />
      <meta name="keywords" content="Zach Upstone, Zachary Upstone, Zach, Upstone, Graduate, Porgrammer, Developer, Artist" />
      <meta name="author" content="Zach Upstone, Zachary Upstone" />

      <App className="no-scroll" />
    </HashRouter>
  </React.StrictMode>
);

