import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './styles/main.css';
import App from './App.jsx'
import CartProvider from './context/CartProvider.jsx';
import UserProvider from './context/UserProvider.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
      <CartProvider>
        <UserProvider>

          <BrowserRouter>
            <App />
          </BrowserRouter>

        </UserProvider>
      </CartProvider>
      
  </StrictMode>,
)
