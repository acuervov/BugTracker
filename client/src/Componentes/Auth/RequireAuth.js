import {useAuth} from '../Auth/useAuth'
import { Navigate } from 'react-router';
 
export default function RequireAuth({ children }) {
    const { authed } = useAuth();
  
    return authed === true
      ? children
      : <Navigate to="/" replace />;
  }