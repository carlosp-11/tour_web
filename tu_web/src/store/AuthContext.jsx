import React, { createContext, useState, useEffect } from 'react';
import { useContext } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(null); // Guarda el estado del usuario

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setAuth({ token }); // Recupera el token si existe
    }
  }, []);

  const login = (token) => {
    localStorage.setItem('token', token);
    setAuth({ token });
  };

  const logout = () => {
    localStorage.removeItem('token');
    setAuth(null);
  };

  return (
    <AuthContext.Provider value={{ auth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () =>{
    const context = useContext(AuthContext);
    if (!context) {
      throw new Error('useAuth debe usarse dentro de un AuthProvider');
    }
    return context;
} 
// React.useContext(AuthContext);
