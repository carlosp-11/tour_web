import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../store/AuthContext';

const ProtectedRoute = ({ children }) => {
  const { auth } = useAuth();

  if (!auth) {
    // Redirige a la página de inicio de sesión si no está autenticado
    return <Navigate to="/login" />;
  }

  return children; // Muestra la ruta protegida si está autenticado
};

export default ProtectedRoute;