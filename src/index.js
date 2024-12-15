import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { CartProvider } from './Components/ContextCart/ContextCart';



const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <CartProvider>
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
  </CartProvider>
);


reportWebVitals();
