import React, { StrictMode, useState, createContext, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';
import App from './App';
import './index.css';

export const Context = createContext({ isAuthenticated: false });

const AppWrapper = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const token = localStorage.getItem('token');
        if (token) {
          const { data } = await axios.get('http://localhost:3000/api/v1/user/me', {
            headers: { Authorization: `Bearer ${token}` }
          });
          setIsAuthenticated(true);
          setUser(data.user);
        }
      } catch (error) {
        localStorage.removeItem('token');
      } finally {
        setLoading(false);
      }
    };
    checkAuth();
  }, []);

  return (
    <Context.Provider value={{ isAuthenticated, setIsAuthenticated, user, setUser, loading }}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Context.Provider>
  );
};

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppWrapper />
  </StrictMode>
);