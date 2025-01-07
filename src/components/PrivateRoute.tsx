import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth'; // Custom hook to get auth state
import { ReactNode } from 'react';

interface PrivateRouteProps {
  children: ReactNode;
}

export const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const { currentUser } = useAuth();

  return currentUser ? (
    <div className="min-h-screen bg-gray-100">{children}</div>
  ) : (
    <Navigate to="/login" />
  );
};
