// ProtectedRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';
import useAuthStore from '../context/useAuthContext';

const ProtectedRoute = ({ element }) => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  console.log('isAuthenticated:', isAuthenticated); // 상태 확인

  return isAuthenticated ? element : <Navigate to='/test1' />;
};

export default ProtectedRoute;
